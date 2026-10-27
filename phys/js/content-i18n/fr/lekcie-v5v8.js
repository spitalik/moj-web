/* Français: lekcie ročníkov v5–v8 (js/rocniky/v5.js, v6.js, v7.js, v8.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('fr', {
  lessons: {
    'v5-dualizmus': {
      title: `Dualité onde-corpuscule`,
      summary: `La lumière et les particules se comportent à la fois comme des ondes et comme des particules ; la longueur d'onde de de Broglie.`,
      theory: [
        `<p>L'effet photoélectrique et l'effet Compton ont montré que la lumière se comporte comme un flux de particules (photons) d'énergie $E=h\\,f$. En revanche, l'interférence et la diffraction mettent en évidence des propriétés ondulatoires. On parle de <strong>dualité onde-corpuscule</strong> : chaque objet quantique possède les deux propriétés, mais une mesure donnée ne révèle qu'une seule d'entre elles.</p>`,
        `<p>Louis de Broglie a proposé que les particules de quantité de mouvement $p$ possèdent aussi une longueur d'onde $\\lambda=\\frac{h}{p}$. Pour un électron libre de vitesse $v$ (non relativiste), on a $p=m_e\\,v$. Plus une particule est lourde ou rapide, plus sa longueur d'onde est courte.</p>`,
        `<p>C'est pourquoi les corps macroscopiques (par ex. une petite bille) ont une longueur d'onde si petite qu'elle ne peut pas être observée, alors que les électrons dans un cristal produisent une figure de diffraction semblable à celle des rayons X. La constante $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ détermine à partir de quelle échelle les effets quantiques apparaissent.</p>`,
        { fig: 'v5v8-dualizmus', caption: `La longueur d'onde de de Broglie λ = h/p : plus la quantité de mouvement est grande, plus l'onde est courte.` }
      ],
      examples: [
        { task: `Un électron se déplace à la vitesse $v=2\\cdot 10^{6}\\,\\text{m/s}$. Quelle est sa longueur d'onde de de Broglie ? Utilise $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.`,
          steps: [`$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.`, `$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.`, `<strong>Résultat : $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>`] }
      ]
    },
    'v5-vlnova-funkcia': {
      title: `Fonction d'onde et probabilité`,
      summary: `La fonction d'onde ψ, la densité de probabilité |ψ|² et la probabilité sur un intervalle.`,
      theory: [
        `<p>L'état d'une particule quantique est décrit par la <strong>fonction d'onde</strong> $\\psi(x,t)$. Elle n'est pas mesurable en elle-même. Son carré $|\\psi|^2$ est la <strong>densité de probabilité</strong> : la probabilité que la particule se trouve dans un petit voisinage du point $x$ vaut $|\\psi|^2\\,dx$.</p>`,
        `<p>La probabilité de trouver la particule dans un intervalle fini $[x_1,x_2]$ est l'intégrale $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$. La probabilité totale vaut 1, donc $\\int|\\psi|^2\\,dx=1$. Une telle fonction est dite normée.</p>`,
        `<p>La mécanique quantique ne donne donc que les <em>probabilités</em> des résultats de mesure, et non des valeurs exactes pour une particule isolée. Si la densité est uniforme, la probabilité est égale au rapport de la longueur de l'intervalle à la longueur de la région entière.</p>`,
        { fig: 'v5v8-pravdepodobnost', caption: `Pour une densité |ψ|² uniforme, la probabilité est proportionnelle à la longueur de l'intervalle : P = a/L.` }
      ],
      examples: [
        { task: `Une particule est répartie avec une densité uniforme sur un segment de longueur $L=20\\,\\text{nm}$. Quelle est la probabilité qu'elle se trouve dans l'intervalle de $0$ à $5\\,\\text{nm}$ ?`,
          steps: [`La densité est constante, $|\\psi|^2=\\frac{1}{L}$.`, `$P=\\frac{5}{20}=\\frac{1}{4}$.`, `<strong>Résultat : $P=0{,}25$</strong>`] }
      ]
    },
    'v5-schrodinger': {
      title: `Équation de Schrödinger`,
      summary: `L'équation de Schrödinger indépendante du temps et les énergies d'une particule dans un puits de potentiel infiniment profond.`,
      theory: [
        `<p><strong>L'équation de Schrödinger</strong> décrit l'évolution de la fonction d'onde. Sa forme indépendante du temps $\\hat{H}\\psi=E\\psi$ signifie que, pour les états stationnaires, l'énergie $E$ est constante et que la fonction d'onde est une fonction propre de l'opérateur énergie $\\hat{H}$.</p>`,
        `<p>Considérons une particule dans un <strong>puits de potentiel infiniment profond</strong> de largeur $L$. La fonction d'onde doit s'annuler aux bords du puits, de sorte que seul un nombre entier de demi-longueurs d'onde s'y inscrit. On obtient des énergies discrètes $E_n=\\frac{n^2 h^2}{8 m L^2}$, où $n=1,2,3,\\dots$</p>`,
        `<p>L'énergie croît avec le carré de $n$ et décroît avec le carré de la largeur du puits. Ainsi, pour un électron dans un puits de largeur $1\\,\\text{nm}$, l'énergie la plus basse est $E_1=0{,}376\\,\\text{eV}$, alors que dans un puits plus large les niveaux sont plus rapprochés.</p>`,
        { fig: 'v5v8-jama', caption: `Une particule dans un puits infiniment profond ne possède que des niveaux discrets ; l'énergie croît avec n².` }
      ],
      examples: [
        { task: `Un électron se trouve dans un puits de largeur $L=1\\,\\text{nm}$ dans l'état $n=2$. Quelle est son énergie ? Pour $n=1$ on a $E_1=0{,}376\\,\\text{eV}$.`,
          steps: [`$E_n=E_1\\cdot\\frac{n^2}{L^2}$ avec $L$ en nanomètres.`, `$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.`, `<strong>Résultat : $E_2\\approx 1{,}5\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-operatory': {
      title: `Opérateurs et grandeurs observables`,
      summary: `Opérateurs en mécanique quantique ; fonctions propres et valeurs propres comme résultats de mesure.`,
      theory: [
        `<p>Chaque grandeur physique ($x$, quantité de mouvement, énergie) correspond à un <strong>opérateur</strong>, c'est-à-dire à une règle qui transforme une fonction en une autre. Par exemple, la quantité de mouvement correspond à $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$ et l'énergie à l'hamiltonien $\\hat{H}$.</p>`,
        `<p>Si un opérateur $\\hat{A}$ appliqué à une fonction $\\psi$ donne $\\hat{A}\\psi=a\\,\\psi$, alors $\\psi$ est une <strong>fonction propre</strong> et le nombre $a$ est une <strong>valeur propre</strong>. Une mesure de la grandeur $A$ donne toujours l'une de ses valeurs propres ; lors de la mesure, l'état devient la fonction propre correspondante.</p>`,
        `<p>Les grandeurs observables ont des valeurs propres réelles car leurs opérateurs sont hermitiens. Les résultats des mesures sont donc toujours des nombres réels.</p>`
      ],
      examples: [
        { task: `L'opérateur $\\hat{D}=\\frac{d}{dx}$ agit sur $\\psi=e^{3x}$. Quelle est la valeur propre ?`,
          steps: [`$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.`, `On a $\\hat{D}\\psi=3\\psi$.`, `<strong>Résultat : la valeur propre est $3$</strong>`] }
      ]
    },
    'v5-kvantovanie': {
      title: `Quantification de l'énergie`,
      summary: `Pourquoi une particule liée ne possède que des énergies discrètes, illustré par l'oscillateur harmonique.`,
      theory: [
        `<p>Si une particule est <strong>liée</strong> (par ex. dans un puits ou dans un système oscillant), sa fonction d'onde doit s'annuler aux bords de la région. Cette condition restreint les énergies possibles à des <strong>niveaux discrets</strong>. Une particule libre, en revanche, possède des énergies continues.</p>`,
        `<p>L'oscillateur harmonique quantique possède les niveaux $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$, où $n=0,1,2,\\dots$ et $\\omega$ est la pulsation. Les niveaux voisins sont séparés de manière égale par $\\hbar\\omega$.</p>`,
        `<p>Le niveau le plus bas ($n=0$) n'a pas une énergie nulle, mais $\\frac{1}{2}\\hbar\\omega$. Cette énergie de point zéro est une conséquence du principe d'incertitude : une particule ne peut pas être immobile en un seul point.</p>`,
        { fig: 'v5v8-oscilator', caption: `Les niveaux de l'oscillateur sont équidistants, et le plus bas n'est pas nul mais ½ħω.` }
      ],
      examples: [
        { task: `Quelle est l'énergie de l'oscillateur dans l'état $n=3$, en unités de $\\hbar\\omega$ ?`,
          steps: [`$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.`, `<strong>Résultat : $E_3=3{,}5\\,\\hbar\\omega$</strong>`] }
      ]
    },
    'v5-spin': {
      title: `Moment cinétique et spin`,
      summary: `Moment cinétique orbital, nombre quantique l, nombre d'états et spin de l'électron.`,
      theory: [
        `<p>Le moment cinétique orbital d'un électron dans un atome est quantifié : sa norme vaut $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$, où $l=0,1,2,\\dots$ est le <strong>nombre quantique orbital</strong>. Sa projection sur un axe choisi peut prendre les valeurs $L_z=m_l\\hbar$.</p>`,
        `<p>Le nombre quantique magnétique $m_l$ prend les valeurs de $-l$ à $+l$, zéro compris ; pour un $l$ donné il existe donc exactement $2l+1$ états possibles. Pour $l=0$ il y a un état, pour $l=1$ il y en a trois.</p>`,
        `<p>Le <strong>spin</strong> est le moment cinétique intrinsèque de l'électron, qui n'a pas d'équivalent classique d'une bille en rotation. L'électron possède le nombre quantique de spin $s=\\tfrac{1}{2}$, donc deux orientations possibles. Avec le moment orbital, il détermine la structure des niveaux atomiques.</p>`,
        { fig: 'v5v8-moment', caption: `Le nombre quantique magnétique m_l prend 2l + 1 valeurs, de −l à +l.` }
      ],
      examples: [
        { task: `Un électron a le nombre quantique orbital $l=2$. Combien de valeurs différentes de $m_l$ sont possibles ?`,
          steps: [`Les valeurs de $m_l$ vont de $-2$ à $+2$ : $-2,-1,0,1,2$.`, `<strong>Résultat : $2l+1=5$ valeurs</strong>`] }
      ]
    },
    'v5-vodik': {
      title: `L'atome d'hydrogène et les états quantiques`,
      summary: `Niveaux d'énergie de l'atome d'hydrogène et énergie d'un photon émis lors d'une transition entre eux.`,
      theory: [
        `<p>Les énergies d'un électron dans l'atome d'hydrogène sont $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$, où $n=1,2,3,\\dots$ est le nombre quantique principal. Le signe négatif signifie que l'électron est lié ; quand $n\\to\\infty$, l'énergie tend vers zéro.</p>`,
        `<p>Lorsqu'un électron passe d'un niveau supérieur $n_i$ à un niveau inférieur $n_f$, l'atome émet un photon d'énergie $E_f=E_{n_i}-E_{n_f}$ en valeur absolue. L'absorption d'un photon est le processus inverse. C'est pourquoi le spectre de l'hydrogène est constitué de raies et non d'une bande continue.</p>`,
        `<p>La plus importante est la série des transitions vers $n_f=2$ (série de Balmer), qui se situe dans le domaine visible de la lumière. Les transitions vers $n_f=1$ donnent un rayonnement ultraviolet.</p>`,
        { fig: 'v5v8-vodik', caption: `Lors d'une transition vers un niveau inférieur, l'atome émet un photon dont l'énergie est égale à la différence des niveaux.` }
      ],
      examples: [
        { task: `Un électron de l'atome d'hydrogène passe de $n=3$ à $n=2$. Quelle énergie a le photon émis ?`,
          steps: [`$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ et $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.`, `$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Résultat : $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-neurcitost': {
      title: `Effet tunnel et principe d'incertitude`,
      summary: `Principe d'incertitude de Heisenberg et effet tunnel à travers une barrière que la particule ne peut pas franchir classiquement.`,
      theory: [
        `<p><strong>Le principe d'incertitude de Heisenberg</strong> affirme que la position et la quantité de mouvement d'une particule ne peuvent pas être déterminées simultanément avec une précision arbitraire : $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. C'est une propriété des ondes, et non une imperfection de la technique de mesure. Plus on connaît précisément la position, plus l'incertitude sur la quantité de mouvement est grande.</p>`,
        `<p><strong>L'effet tunnel</strong> signifie qu'une particule traverse une barrière de potentiel qu'elle ne pourrait pas franchir classiquement, faute d'énergie suffisante. La fonction d'onde décroît exponentiellement à l'intérieur de la barrière, sans toutefois s'annuler ; il existe donc une probabilité non nulle de trouver la particule de l'autre côté de la barrière.</p>`,
        `<p>L'effet tunnel explique la désintégration alpha radioactive, le fonctionnement du microscope à effet tunnel à balayage et le courant électrique dans certains composants semi-conducteurs.</p>`,
        { fig: 'v5v8-tunel', caption: `Une particule d'énergie inférieure à la hauteur de la barrière possède une onde qui décroît exponentiellement dans la barrière et peut la traverser par effet tunnel.` }
      ],
      examples: [
        { task: `La position d'un électron est connue avec une incertitude $\\Delta x=1\\,\\text{pm}$. Quelle est la plus petite incertitude de sa quantité de mouvement ? Utilise $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.`,
          steps: [`$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.`, `$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.`, `<strong>Résultat : $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v6-specialna': {
      title: `Relativité restreinte`,
      summary: `Deux postulats, dilatation du temps et facteur de Lorentz.`,
      theory: [
        `<p>La relativité restreinte repose sur deux postulats : (1) les lois de la physique sont les mêmes dans tous les référentiels inertiels, (2) la vitesse de la lumière dans le vide $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ est la même pour tout observateur, quel que soit le mouvement de la source.</p>`,
        `<p>Du second postulat découle que le temps n'est pas absolu. Les horloges en mouvement retardent : l'intervalle $\\Delta t$ mesuré dans le référentiel par rapport auquel les horloges se déplacent est plus long que le temps propre $\\Delta t_0$ dans leur référentiel au repos. On a $\\Delta t=\\gamma\\,\\Delta t_0$, où $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ est le <strong>facteur de Lorentz</strong>.</p>`,
        `<p>L'effet est négligeable aux vitesses courantes, car $\\gamma$ est proche de 1. À des vitesses proches de $c$, il croît très rapidement. Les particules des rayons cosmiques, par exemple, vivent plus longtemps que ne le permettrait la physique classique.</p>`,
        { fig: 'v5v8-gama', caption: `Le facteur de Lorentz γ est proche de 1 aux faibles vitesses et croît fortement quand la vitesse approche c.` }
      ],
      examples: [
        { task: `Une particule se déplace à la vitesse $v=0{,}6\\,c$. Quel est son facteur de Lorentz ?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.`, `$\\sqrt{0{,}64}=0{,}8$, donc $\\gamma=\\frac{1}{0{,}8}$.`, `<strong>Résultat : $\\gamma=1{,}25$</strong>`] }
      ]
    },
    'v6-lorentz': {
      title: `Transformations de Lorentz`,
      summary: `Comment les coordonnées spatiales et temporelles d'un événement changent lorsqu'on passe à un autre référentiel inertiel.`,
      theory: [
        `<p>La transformation galiléenne $x'=x-vt$ n'est valable qu'aux faibles vitesses. Aux vitesses proches de $c$, il faut les <strong>transformations de Lorentz</strong>, qui préservent la vitesse de la lumière. Pour un référentiel $S'$ se déplaçant à la vitesse $v$ dans le sens positif de l'axe $x$, on a $x'=\\gamma\\,(x-\\beta\\,ct)$ et $ct'=\\gamma\\,(ct-\\beta\\,x)$, où $\\beta=\\frac{v}{c}$.</p>`,
        `<p>L'espace et le temps se mêlent donc : un événement simultané dans un référentiel ne l'est pas forcément dans un autre. Cette <strong>relativité de la simultanéité</strong> est une conséquence directe de la vitesse finie de la lumière.</p>`,
        `<p>Pour la transformation inverse, le signe de la vitesse change. Lorsque $v\\to 0$, on a $\\gamma\\to 1$ et l'on retrouve la relation classique $x'=x-vt$ : les transformations de Lorentz contiennent donc la physique classique comme cas limite.</p>`,
        { fig: 'v5v8-lorentz', caption: `Les axes x′ et ct′ du référentiel S′ sont inclinés ; la transformation de Lorentz recalcule les coordonnées de l'événement.` }
      ],
      examples: [
        { task: `Dans le référentiel $S$, un événement a les coordonnées $x=8\\,\\text{m}$ et $ct=4\\,\\text{m}$. Le référentiel $S'$ se déplace à la vitesse $0{,}6\\,c$ dans le sens positif de l'axe $x$. Quelle est la valeur de $x'$ dans $S'$ ?`,
          steps: [`$\\gamma=1{,}25$, $\\beta=0{,}6$.`, `$x'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.`, `<strong>Résultat : $x'=7\\,\\text{m}$</strong>`] }
      ]
    },
    'v6-energia': {
      title: `Énergie et quantité de mouvement relativistes`,
      summary: `Énergie totale et cinétique d'une particule aux grandes vitesses.`,
      theory: [
        `<p>En relativité, une particule possède une énergie de repos $E_0=mc^2$ même lorsqu'elle est immobile. L'énergie totale d'une particule en mouvement est $E=\\gamma\\,mc^2$. Lorsque $v\\to 0$, on a $\\gamma\\to 1$ et l'énergie totale tend vers l'énergie de repos.</p>`,
        `<p><strong>L'énergie cinétique</strong> est la différence $E_k=E-E_0=(\\gamma-1)\\,mc^2$. C'est l'énergie que le travail doit fournir pour accélérer la particule depuis le repos jusqu'à la vitesse $v$. Aux vitesses proches de $c$, l'énergie cinétique croît sans limite, de sorte qu'aucune particule de masse au repos non nulle ne peut atteindre la vitesse de la lumière.</p>`,
        `<p>La quantité de mouvement relativiste est $p=\\gamma\\,m\\,v$. Pour l'énergie et la quantité de mouvement, on a aussi la relation $E^2=(pc)^2+(mc^2)^2$ ; elle convient aux photons, pour lesquels $m=0$.</p>`,
        { fig: 'v5v8-energia', caption: `L'énergie totale γmc² est l'énergie de repos mc² plus l'énergie cinétique (γ − 1)mc².` }
      ],
      examples: [
        { task: `Un électron ($m\\,c^2=0{,}511\\,\\text{MeV}$) se déplace à la vitesse $0{,}8\\,c$. Quelle est son énergie cinétique ?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.`, `$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.`, `<strong>Résultat : $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>`] }
      ]
    },
    'v6-ekvivalencia': {
      title: `Équivalence masse-énergie`,
      summary: `La relation E = mc² et la conversion de la masse en énergie et inversement.`,
      theory: [
        `<p>Le résultat le plus connu de la relativité est la relation $E=mc^2$ : la masse est une forme d'énergie, et à toute énergie correspond une masse $m=\\frac{E}{c^2}$. Ce n'est pas seulement une formule du mouvement, mais une propriété de chaque corps, même au repos.</p>`,
        `<p>De petites variations de masse correspondent à de grandes quantités d'énergie, car $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ est un nombre très grand. Les réactions nucléaires libèrent de l'énergie précisément parce que la somme des masses des produits est inférieure, d'une petite fraction, à celle des noyaux initiaux.</p>`,
        `<p>Lors des conversions, faites attention aux unités : masse en kilogrammes, vitesse en mètres par seconde, énergie en joules. Un térajoule vaut $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.</p>`
      ],
      examples: [
        { task: `Quelle énergie libère la conversion complète de $1\\,\\text{g}$ de matière ? Donne le résultat en térajoules.`,
          steps: [`$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.`, `$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.`, `<strong>Résultat : $90\\,\\text{TJ}$</strong>`] }
      ]
    },
    'v6-interval': {
      title: `Intervalles d'espace-temps`,
      summary: `L'intervalle invariant dans un diagramme d'espace-temps et le temps propre.`,
      theory: [
        `<p>La relativité réunit l'espace et le temps en un <strong>espace-temps</strong> à quatre dimensions. Les événements en sont des points, et leur distance n'est pas une distance ordinaire. <strong>L'intervalle</strong> entre deux événements de différence de temps $\\Delta t$ et de différence spatiale $\\Delta x$ vaut $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$.</p>`,
        `<p>L'intervalle a la même valeur dans tous les référentiels inertiels ; on le dit donc <strong>invariant</strong>. Si $\\Delta s^2>0$, l'intervalle est du genre temps : il existe un référentiel dans lequel les deux événements ont lieu au même endroit. Le temps propre vaut alors $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$.</p>`,
        `<p>Dans des unités où $c=1$ (longueurs mesurées en secondes-lumière), il suffit de calculer $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$. Le résultat est toujours inférieur ou égal à $\\Delta t$, ce qui correspond à nouveau à la dilatation du temps.</p>`,
        { fig: 'v5v8-interval', caption: `Pour un intervalle de genre temps, le temps propre Δτ = √(Δt² − Δx²) est plus court que Δt.` }
      ],
      examples: [
        { task: `Deux événements sont séparés dans le temps de $\\Delta t=5\\,\\text{s}$ et dans l'espace de $\\Delta x=3\\,\\text{ls}$ (secondes-lumière). Quel est le temps propre $\\Delta\\tau$ ?`,
          steps: [`$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.`, `<strong>Résultat : $\\Delta\\tau=4\\,\\text{s}$</strong>`] }
      ]
    },
    'v6-vseobecna': {
      title: `Relativité générale`,
      summary: `Le principe d'équivalence, la gravitation comme courbure de l'espace-temps et le rayon de Schwarzschild.`,
      theory: [
        `<p>La relativité générale (1915) repose sur le <strong>principe d'équivalence</strong> : localement, il est impossible de distinguer une accélération d'une pesanteur. Une personne dans un ascenseur en chute libre dans un champ gravitationnel ne ressent pas de poids, tout comme un astronaute en orbite.</p>`,
        `<p>Einstein en a conclu que la gravitation n'est pas une force au sens classique, mais la <strong>courbure de l'espace-temps</strong> causée par la masse et l'énergie. Les corps suivent les trajectoires les plus courtes possibles, les <em>géodésiques</em>, qui sont courbes dans un espace courbe.</p>`,
        `<p>Un champ gravitationnel intense ralentit le temps : les horloges proches d'un corps massif retardent par rapport à celles qui en sont éloignées. Pour une masse $M$, le <strong>rayon de Schwarzschild</strong> vaut $r_s=\\frac{2GM}{c^2}$. Pour la Terre, il est d'environ $9$ mm, pour le Soleil d'environ $3\\,\\text{km}$.</p>`
      ],
      examples: [
        { task: `Quel est le rayon de Schwarzschild du Soleil, si $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ et $c=3\\cdot 10^{8}\\,\\text{m/s}$ ?`,
          steps: [`$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.`, `$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.`, `<strong>Résultat : $r_s\\approx 2{,}95\\,\\text{km}$</strong>`] }
      ]
    },
    'v6-zakrivenie': {
      title: `Courbure de l'espace-temps`,
      summary: `Comment la masse courbe l'espace-temps et quels phénomènes le prouvent.`,
      theory: [
        `<p>Imaginez une feuille élastique sur laquelle on pose une lourde bille. La feuille se courbe et de petites billes roulent vers elle. De même, la masse courbe l'espace-temps et les corps suivent des trajectoires courbes. Cette analogie n'est qu'illustrative, et non un modèle exact.</p>`,
        `<p>La preuve la plus directe est la <strong>déviation de la lumière</strong> lorsqu'elle passe près du Soleil. La lumière suit le chemin le plus court, qui dans un espace-temps courbe n'est pas une ligne droite. Une étoile située derrière le Soleil apparaît donc déplacée pour un observateur. Cet effet a été mesuré par Eddington en 1919.</p>`,
        `<p>D'autres phénomènes, par exemple le décalage gravitationnel des raies spectrales ou le ralentissement du temps à proximité de la matière, peuvent être mesurés avec la précision nécessaire à la navigation des satellites GPS. Les phénomènes sans lien avec la gravitation ou l'espace-temps, par exemple la décomposition de la lumière blanche par un prisme, ne peuvent pas être expliqués par la courbure.</p>`,
        { fig: 'v5v8-zakrivenie', caption: `La masse courbe l'espace-temps et les corps suivent des trajectoires courbes. La grille n'est qu'une analogie illustrative.` }
      ],
      examples: [
        { task: `Quel phénomène est une conséquence de la courbure de l'espace-temps : la déviation de la lumière qui passe près du Soleil, ou le changement de couleur de la lumière dans un prisme ?`,
          steps: [`La courbure de l'espace-temps décrit la gravitation, qui influe sur la trajectoire de la lumière.`, `La décomposition de la lumière dans un prisme résulte de la dépendance de l'indice de réfraction à la longueur d'onde.`, `<strong>Résultat : la déviation de la lumière autour du Soleil</strong>`] }
      ]
    },
    'v6-gravvlny': {
      title: `Ondes gravitationnelles et trous noirs`,
      summary: `Les ondes gravitationnelles comme ondulations de l'espace-temps et l'horizon des événements d'un trou noir.`,
      theory: [
        `<p>Les <strong>ondes gravitationnelles</strong> sont des ondulations de l'espace-temps qui se propagent à la vitesse de la lumière. Elles naissent lorsque de grandes masses sont accélérées, par exemple lors de la fusion de deux trous noirs. La première observation directe a été réalisée en 2015 par l'interféromètre LIGO.</p>`,
        `<p>Un <strong>trou noir</strong> est une région où la vitesse de libération est supérieure à $c$, de sorte que la lumière ne peut pas en sortir. Sa frontière est l'<strong>horizon des événements</strong>, situé au rayon de Schwarzschild $r_s=\\frac{2GM}{c^2}$. À l'intérieur de l'horizon, toutes les trajectoires mènent vers le centre.</p>`,
        `<p>Le rayon de l'horizon croît en proportion directe avec la masse. Un trou noir de la masse du Soleil a un horizon d'environ $3\\,\\text{km}$, et un trou noir dix fois plus massif que le Soleil a un horizon d'environ $30\\,\\text{km}$.</p>`,
        { fig: 'v5v8-horizont', caption: `Le rayon de l'horizon des événements est r_s = 2GM/c² ; la lumière provenant de l'intérieur de l'horizon ne peut pas s'en échapper.` }
      ],
      examples: [
        { task: `Quel est le rayon de l'horizon d'un trou noir de masse $10\\,M_{\\odot}$, sachant que pour le Soleil $r_s\\approx 2{,}95\\,\\text{km}$ ?`,
          steps: [`Le rayon est proportionnel à la masse : $r_s=2{,}95\\,\\text{km}\\cdot 10$.`, `<strong>Résultat : $r_s\\approx 29{,}5\\,\\text{km}$</strong>`] }
      ]
    },
    'v7-atom': {
      title: `Structure de l'atome et couches électroniques`,
      summary: `Le noyau, les couches électroniques, et la répartition des électrons en couches et leur capacité.`,
      theory: [
        `<p>Un atome possède un <strong>noyau</strong> constitué de protons et de neutrons (appelés ensemble nucléons) et une <strong>couche électronique</strong>. Le nombre de protons est le numéro atomique $Z$ et détermine l'élément chimique. Un atome neutre a le même nombre d'électrons.</p>`,
        `<p>Les électrons ne se répartissent pas au hasard. Ils restent dans des <strong>couches</strong> de numéro $n = 1, 2, 3, \\dots$ (notées K, L, M). Une couche de numéro $n$ contient au maximum $2n^2$ électrons : K en contient 2, L en contient 8, M en contient 18.</p>`,
        `<p><strong>Pourquoi précisément ce nombre ?</strong> Les électrons sont décrits par la mécanique quantique. Chaque état électronique est déterminé par un ensemble de nombres quantiques, et le principe de Pauli interdit à deux électrons d'un atome d'avoir le même état. Les couches se remplissent de l'intérieur vers l'extérieur, et la couche la plus externe (de valence) détermine les propriétés chimiques de l'élément.</p>`,
        `<ol><li>Dans le tableau périodique, trouve $Z$, et donc le nombre d'électrons.</li><li>Répartis-les dans les couches : d'abord K, puis L, puis M.</li><li>La dernière couche occupée est la couche de valence.</li></ol>`,
        { fig: 'obr-atom', caption: `Modèle simplifié de l'atome : un noyau positif et des électrons sur des orbites.` }
      ],
      examples: [
        { task: `Quel est le nombre maximal d'électrons dans la couche L (nombre $n = 2$) ?`,
          steps: [`Remplace $n = 2$ dans la formule $2n^2$.`, `$2\\cdot 2^2 = 8$.`, `<strong>Résultat : 8 électrons</strong>`] },
        { task: `Le carbone a $Z = 6$. Combien d'électrons y a-t-il dans ses couches K et L ?`,
          steps: [`La couche K contient 2 électrons.`, `Les $6 - 2 = 4$ électrons restants vont dans la couche L.`, `<strong>Résultat : 2 dans K et 4 dans L</strong>`] }
      ]
    },
    'v7-spektra': {
      title: `Spectres atomiques et niveaux d'énergie`,
      summary: `Transitions des électrons entre niveaux et énergie des photons émis.`,
      theory: [
        `<p>Un atome ne peut posséder que certains <strong>niveaux d'énergie</strong>. Lorsqu'un électron passe d'un niveau supérieur à un niveau inférieur, il émet un <strong>photon</strong> d'énergie égale à la différence des niveaux. Inversement, un photon de la bonne énergie peut exciter un électron vers un niveau supérieur.</p>`,
        `<p>L'énergie d'un photon est $E = h f = \\dfrac{h c}{\\lambda}$, où $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ est la constante de Planck. En physique atomique, l'énergie s'exprime en électronvolts : $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
        `<p>Pour l'atome d'hydrogène, $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$. L'état fondamental ($n = 1$) est le plus bas, et les niveaux tendent vers zéro par valeurs négatives. Lors d'une transition de $n_i$ à $n_f$, il se produit un photon d'énergie $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$.</p>`,
        `<p><strong>Pourquoi les spectres sont-ils formés de raies ?</strong> Les niveaux sont discrets, donc les photons n'ont que quelques énergies précises. Sur un spectrogramme, on observe donc des raies nettes et non un arc-en-ciel continu. Chaque élément possède son propre ensemble de raies, ce qui fait que son spectre ressemble à une empreinte digitale.</p>`,
        { fig: 'v5v8-vodik', caption: `Lors d'une transition vers un niveau inférieur, l'atome émet un photon dont l'énergie est égale à la différence des niveaux.` }
      ],
      examples: [
        { task: `Un électron de l'atome d'hydrogène passe du niveau $n=3$ au niveau $n=2$. Quelle énergie a le photon émis ?`,
          steps: [`La différence des niveaux : $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.`, `$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, donc $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Résultat : environ 1,89 eV</strong>`] },
        { task: `Quelle transition émet un photon d'énergie plus grande : $2\\to 1$ ou $3\\to 2$ ?`,
          steps: [`Transition $2\\to 1$ : $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.`, `La transition $3\\to 2$ donne environ $1{,}89\\,\\text{eV}$.`, `<strong>Résultat : la transition $2\\to 1$</strong>`] }
      ]
    },
    'v7-jadro': {
      title: `Structure du noyau atomique`,
      summary: `Protons, neutrons, notation des nucléides, isotopes et taille du noyau.`,
      theory: [
        `<p>Le noyau est constitué de protons (charge $+e$) et de neutrons (sans charge). Ensemble, on les appelle nucléons. Un nucléide s'écrit $^{A}_{Z}\\mathrm{X}$ : $A$ est le nombre de masse, $Z$ le numéro atomique, et le nombre de neutrons est $N = A - Z$.</p>`,
        `<p>Le rayon du noyau croît approximativement avec la racine cubique du nombre de masse : $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. Les noyaux sont donc très petits (de l'ordre du femtomètre), mais leur densité est presque la même.</p>`,
        `<p><strong>Pourquoi le noyau ne se disloque-t-il pas ?</strong> Les protons se repoussent électriquement, mais l'interaction nucléaire forte agit également. C'est une force attractive de faible portée, plus intense que la répulsion électrique. Les noyaux stables plus lourds possèdent plus de neutrons que de protons (par ex. $^{208}_{82}\\mathrm{Pb}$).</p>`,
        `<ul><li><strong>Les isotopes</strong> ont le même $Z$ mais un $N$ différent (par ex. $^{12}_{6}\\mathrm{C}$ et $^{14}_{6}\\mathrm{C}$).</li><li><strong>Les isobares</strong> ont le même $A$ mais un $Z$ différent.</li></ul>`,
        { fig: 'v5v8-nuklidy', caption: `Les noyaux stables légers ont N ≈ Z, tandis que les noyaux stables plus lourds possèdent plus de neutrons que de protons.` }
      ],
      examples: [
        { task: `Combien de protons et de neutrons possède le noyau $^{238}_{92}\\mathrm{U}$ ?`,
          steps: [`Le numéro atomique est $Z=92$.`, `$N = A - Z = 238 - 92 = 146$.`, `<strong>Résultat : 92 protons et 146 neutrons</strong>`] },
        { task: `Comment le rayon d'un noyau change-t-il si son nombre de masse est multiplié par huit ?`,
          steps: [`$r \\propto A^{1/3}$, donc $r$ varie comme $\\sqrt[3]{A}$.`, `$\\sqrt[3]{8}=2$, donc le rayon double.`, `<strong>Résultat : le rayon double</strong>`] }
      ]
    },
    'v7-radioaktivita': {
      title: `Radioactivité et transformations nucléaires`,
      summary: `Types de désintégration, loi de décroissance, demi-vie et activité.`,
      theory: [
        `<p>Les noyaux instables se transforment spontanément. Lors de la désintégration <strong>alpha</strong>, un noyau d'hélium $^{4}_{2}\\mathrm{He}$ est éjecté. Lors de la désintégration <strong>bêta moins</strong>, un neutron se transforme en proton, et un électron et un antineutrino sont produits. Le rayonnement <strong>gamma</strong> ne fait que se débarrasser de l'énergie excédentaire du noyau ; ni $Z$ ni $A$ ne changent. Dans toute transformation, la conservation du nombre de nucléons et du nombre de protons est respectée.</p>`,
        `<p>La désintégration d'un noyau isolé est aléatoire, mais pour un grand nombre de noyaux, la loi de décroissance $N(t) = N_0\\cdot 2^{-t/T}$ s'applique. Le temps $T$ est la <em>demi-vie</em>, au bout de laquelle la moitié des noyaux se sont désintégrés. La loi découle de l'hypothèse que la probabilité de désintégration pendant un court intervalle $dt$ est proportionnelle au nombre de noyaux : $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
        `<p><strong>L'activité</strong> $A = \\lambda N$ donne le nombre de désintégrations par seconde. L'unité est le becquerel, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$. La constante de désintégration vaut $\\lambda = \\dfrac{\\ln 2}{T}$.</p>`,
        `<ol><li>Calcule le nombre de demi-vies $k = t/T$.</li><li>Divise le nombre de noyaux par $2^{k}$, et non simplement par deux.</li></ol>`,
        { fig: 'v5v8-rozpad', caption: `Le nombre de noyaux non désintégrés décroît exponentiellement : il en reste la moitié après chaque demi-vie.` }
      ],
      examples: [
        { task: `Un radio-isotope a une demi-vie de 8 jours. Quel pourcentage de noyaux reste-t-il après 24 jours ?`,
          steps: [`Le nombre de demi-vies est $k = 24/8 = 3$.`, `$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, donc il reste 12,5 %.`, `<strong>Résultat : 12,5 %</strong>`] },
        { task: `Un échantillon contient $4\\cdot 10^{6}$ noyaux et a une demi-vie de 2 h. Combien de noyaux restent après 6 h ?`,
          steps: [`En 6 h, $k = 6/2 = 3$ demi-vies s'écoulent.`, `$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.`, `<strong>Résultat : 500 000 noyaux</strong>`] }
      ]
    },
    'v7-stiepenie-fuzia': {
      title: `Fission et fusion nucléaires`,
      summary: `Défaut de masse, énergie de liaison et énergie libérée par la fission ou la fusion.`,
      theory: [
        `<p>Un noyau a une masse plus petite que la somme des masses de ses nucléons. Cette différence est le <em>défaut de masse</em> $\\Delta m$. Selon la relation $E = \\Delta m\\, c^2$, l'énergie correspondante est libérée. Pour les calculs pratiques, $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$.</p>`,
        `<p>L'énergie de liaison par nucléon la plus grande se trouve dans les noyaux voisins du fer ($A\\approx 56$). Les noyaux lourds peuvent donc subir une <strong>fission</strong> en noyaux de masse moyenne, et les noyaux légers peuvent <strong>fusionner</strong>. Les deux voies conduisent à une énergie de liaison plus grande et libèrent de l'énergie.</p>`,
        `<p>Lors de la fission de $^{235}_{92}\\mathrm{U}$ par un neutron, il se forme deux fragments, 2 à 3 neutrons et environ 200 MeV d'énergie. Ces neutrons peuvent déclencher une réaction en chaîne, qui doit être contrôlée dans un réacteur.</p>`,
        `<p>La fusion exige une température extrêmement élevée pour que les noyaux chargés positivement s'approchent à portée de l'interaction forte. Dans la réaction $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$, environ 17,6 MeV sont libérés.</p>`,
        { fig: 'v5v8-vazba', caption: `L'énergie de liaison par nucléon atteint son maximum au fer : les noyaux légers fusionnent, les noyaux lourds se scindent.` }
      ],
      examples: [
        { task: `Dans une réaction nucléaire apparaît un défaut de masse $\\Delta m = 0{,}2\\,\\text{u}$. Quelle est cette énergie ?`,
          steps: [`$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.`, `$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.`, `<strong>Résultat : 186,3 MeV</strong>`] },
        { task: `Pourquoi la fusion est-elle plus exigeante à réaliser sur Terre que la fission ?`,
          steps: [`Les noyaux sont chargés positivement et se repoussent.`, `Il faut une température et une pression extrêmes pour les amener à portée de l'interaction forte.`, `<strong>Résultat : la fusion exige des conditions extrêmes</strong>`] }
      ]
    },
    'v7-ziarenie-latka': {
      title: `Interaction du rayonnement avec la matière`,
      summary: `Atténuation du rayonnement, épaisseur de demi-atténuation et principaux processus pour le rayonnement gamma.`,
      theory: [
        `<p>Le rayonnement perd de l'énergie en traversant la matière. Les particules alpha sont arrêtées déjà par une feuille de papier, les particules bêta traversent quelques millimètres d'aluminium, et le rayonnement gamma pénètre profondément et ne s'atténue que progressivement.</p>`,
        `<p>Pour un faisceau étroit de photons, l'atténuation exponentielle $I(x) = I_0\\,e^{-\\mu x}$ s'applique, où $\\mu$ est le coefficient d'atténuation. Plus pratique est l'<em>épaisseur de demi-atténuation</em> $d_{1/2}$, c'est-à-dire la couche qui réduit l'intensité de moitié. Alors $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
        `<p>Pour le rayonnement gamma, trois processus sont importants : l'<strong>effet photoélectrique</strong> (le photon est absorbé, prédominant aux faibles énergies), la <strong>diffusion Compton</strong> (le photon perd une partie de son énergie) et la <strong>création de paires</strong> électron-positon (à partir de 1,022 MeV). Les matériaux lourds et denses, par exemple le plomb, protègent mieux.</p>`,
        `<ul><li>Le rayonnement ionisant arrache des électrons aux atomes, il peut donc endommager les cellules.</li><li>La protection se choisit selon le type de rayonnement : papier ou main contre l'alpha, plexiglas contre le bêta, plomb ou béton contre le gamma.</li></ul>`,
        { fig: 'v5v8-zoslabenie', caption: `Chaque épaisseur de demi-atténuation réduit de moitié l'intensité du rayonnement.` }
      ],
      examples: [
        { task: `Une couche de plomb a une épaisseur de demi-atténuation de 1,2 cm. Quel pourcentage du rayonnement traverse une couche épaisse de 3,6 cm ?`,
          steps: [`$x/d_{1/2}=3{,}6/1{,}2=3$ épaisseurs de demi-atténuation.`, `$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.`, `<strong>Résultat : 12,5 %</strong>`] },
        { task: `L'intensité du rayonnement est tombée au quart. Combien d'épaisseurs de demi-atténuation la couche comportait-elle ?`,
          steps: [`$\\dfrac{1}{4}=2^{-2}$.`, `La couche comportait donc 2 épaisseurs de demi-atténuation.`, `<strong>Résultat : 2</strong>`] }
      ]
    },
    'v7-jadrova-energetika': {
      title: `Énergie nucléaire et détection du rayonnement`,
      summary: `Principe d'un réacteur nucléaire, rendement d'une centrale et mesure de la dose de rayonnement.`,
      theory: [
        `<p>Un réacteur nucléaire utilise la fission de $^{235}_{92}\\mathrm{U}$ dans une réaction en chaîne contrôlée. La chaleur du réacteur chauffe l'eau, la vapeur est produite, et la vapeur entraîne une turbine avec un générateur qui produit l'électricité.</p>`,
        `<p>Le rendement de la centrale vaut $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, où $P_{\\text{t}}$ est la puissance thermique du réacteur. Une partie de la chaleur ne peut pas être transformée en travail et est donc évacuée dans l'eau de refroidissement. Les centrales nucléaires ont habituellement un rendement d'environ 33 %.</p>`,
        `<p><strong>Contrôle :</strong> des barres de commande en matériaux absorbant les neutrons (par ex. bore, cadmium). Un <strong>modérateur</strong> (eau, graphite) ralentit les neutrons afin qu'ils puissent fissionner les noyaux plus efficacement.</p>`,
        `<p><strong>Dosimétrie :</strong> la dose absorbée $D = E/m$ s'exprime en grays, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. Les détecteurs tels que le compteur Geiger–Müller ou un scintillateur réagissent aux particules et aux photons individuels.</p>`,
        { fig: 'v5v8-reaktor', caption: `La centrale transforme la chaleur du réacteur en travail ; la chaleur restante est évacuée dans l'eau de refroidissement.` }
      ],
      examples: [
        { task: `Un réacteur a une puissance thermique de 3000 MW et un rendement de 33 %. Quelle est sa puissance électrique ?`,
          steps: [`$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.`, `$0{,}33\\cdot 3000=990\\,\\text{MW}$.`, `<strong>Résultat : 990 MW</strong>`] },
        { task: `Suite à une irradiation, un corps a absorbé une énergie de 0,5 J. La masse du corps est de 50 kg. Quelle est la dose absorbée ?`,
          steps: [`$D = E/m$.`, `$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.`, `<strong>Résultat : 0,01 Gy</strong>`] }
      ]
    },
    'v8-castice': {
      title: `Particules élémentaires et leurs propriétés`,
      summary: `Caractéristiques des particules, fermions et bosons, baryons et mésons.`,
      theory: [
        `<p>Selon les connaissances actuelles, les particules élémentaires n'ont pas de structure interne. Elles sont caractérisées par leur <strong>masse</strong>, leur <strong>charge électrique</strong>, leur <strong>spin</strong> (moment cinétique intrinsèque) et, pour les quarks et les gluons, également par la <strong>couleur</strong>.</p>`,
        `<p>Selon le spin, on répartit les particules en <em>fermions</em> (spin $\\tfrac{1}{2}$ ; ils constituent la matière et obéissent au principe de Pauli) et en <em>bosons</em> (spin entier ; ils véhiculent les interactions, par ex. le photon de spin 1).</p>`,
        `<p>Les hadrons sont composés de quarks. Les <strong>baryons</strong> contiennent trois quarks (proton $uud$, neutron $udd$). Les <strong>mésons</strong> contiennent une paire quark–antiquark (par ex. $\\pi^{+}=u\\bar{d}$). Les leptons (électron, muon, tau et neutrinos) ne participent pas à l'interaction forte.</p>`,
        `<ul><li>Proton : masse d'environ 938 MeV/$c^2$, charge $+e$.</li><li>Neutron : masse d'environ 940 MeV/$c^2$, charge $0$.</li><li>Électron : masse d'environ 0,511 MeV/$c^2$, charge $-e$.</li></ul>`,
        { fig: 'v5v8-kvarky', caption: `Le proton (uud) et le neutron (udd) sont formés de trois quarks ; la somme de leurs charges donne la charge de la particule.` }
      ],
      examples: [
        { task: `De quels quarks est composé le neutron ?`,
          steps: [`Le neutron est un baryon, il contient donc trois quarks.`, `Sa charge doit être 0 : deux quarks $d$ et un quark $u$ donnent $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$.`, `<strong>Résultat : $udd$</strong>`] },
        { task: `L'électron est-il un baryon ?`,
          steps: [`Un baryon est composé de trois quarks.`, `L'électron est un lepton et ne contient aucun quark.`, `<strong>Résultat : non</strong>`] }
      ]
    },
    'v8-kvarky-leptony': {
      title: `Quarks et leptons`,
      summary: `Générations de fermions et charges fractionnaires des quarks.`,
      theory: [
        `<p>Les six quarks se répartissent en trois générations : $(u,d)$, $(c,s)$ et $(t,b)$. Les quarks $u$, $c$, $t$ portent la charge $+\\tfrac{2}{3}e$, et les quarks $d$, $s$, $b$ portent la charge $-\\tfrac{1}{3}e$. Ce sont les seules particules à charge fractionnaire non nulle.</p>`,
        `<p>Les leptons forment également trois générations de paires : $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ et $(\\tau,\\nu_\\tau)$. Les leptons chargés ont la charge $-e$. Les neutrinos sont neutres et interagissent très faiblement avec la matière.</p>`,
        `<p>Les hadrons libres ont une charge totale qui est un multiple entier de $e$. Les quarks se combinent donc par triplets (baryons) ou par paires quark–antiquark (mésons). Cette somme est un contrôle utile lors de l'écriture des réactions.</p>`,
        `<ol><li>Trouve la charge de chaque quark en unités de $e$.</li><li>Additionne-les.</li><li>Le résultat doit être un entier.</li></ol>`,
        { fig: 'v5v8-generacie', caption: `Les fermions se répartissent en trois générations ; les générations supérieures sont plus lourdes et moins stables.` }
      ],
      examples: [
        { task: `Quelle est la charge de la particule $uud$ ?`,
          steps: [`$u$ a $+\\tfrac{2}{3}$, $d$ a $-\\tfrac{1}{3}$.`, `$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.`, `<strong>Résultat : $+e$ (proton)</strong>`] },
        { task: `Quelle charge possède le baryon $uds$ (la particule Λ) ?`,
          steps: [`$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.`, `<strong>Résultat : charge 0</strong>`] }
      ]
    },
    'v8-fotony': {
      title: `Photons et autres particules médiatrices`,
      summary: `Bosons de jauge comme vecteurs des interactions et leurs propriétés.`,
      theory: [
        `<p>Les interactions entre particules ont lieu par l'échange de <strong>bosons de jauge</strong>. Le photon $\\gamma$ transmet la force électromagnétique, les gluons $g$ la force forte, et les bosons $W^{\\pm}$ et $Z^{0}$ la force faible.</p>`,
        `<p>Le photon n'a ni masse ni charge, et son spin vaut 1. Le gluon est également sans masse, mais il porte une charge de <em>couleur</em>, il se lie donc aussi à lui-même. C'est la raison pour laquelle les quarks ne peuvent pas être isolés et sont confinés à l'intérieur des hadrons.</p>`,
        `<p>Les bosons $W$ et $Z$ sont très lourds (masses d'environ 80 et 91 GeV/$c^2$) ; la portée de l'interaction faible est donc courte, de l'ordre de $10^{-18}\\,\\text{m}$. La portée est inversement proportionnelle à la masse de la particule médiatrice.</p>`,
        `<p>Le graviton est un boson hypothétique de la gravitation. Il n'a pas encore été confirmé expérimentalement et ne figure pas dans le modèle standard.</p>`,
        { fig: 'v5v8-interakcie', caption: `Les quatre interactions fondamentales : chacune est transmise par l'échange de son boson et a une portée différente.` }
      ],
      examples: [
        { task: `Quelle particule transmet l'interaction forte ?`,
          steps: [`L'interaction forte est transmise par les gluons.`, `<strong>Résultat : le gluon</strong>`] },
        { task: `Pourquoi l'interaction faible a-t-elle une portée aussi courte ?`,
          steps: [`Les bosons médiateurs $W$ et $Z$ ont une grande masse.`, `La portée est inversement proportionnelle à la masse, donc la grande masse réduit la portée.`, `<strong>Résultat : la grande masse des bosons réduit la portée</strong>`] }
      ]
    },
    'v8-standardny-model': {
      title: `Le modèle standard de la physique des particules`,
      summary: `Vue d'ensemble des particules et des interactions du modèle standard et de leur nombre.`,
      theory: [
        `<p>Le modèle standard décrit trois des quatre interactions fondamentales (électromagnétique, faible et forte) et toutes les particules élémentaires connues à ce jour. Il n'inclut pas encore la gravitation.</p>`,
        `<p>La matière est formée de 12 fermions : 6 quarks et 6 leptons en trois générations. Chaque génération supplémentaire est plus lourde et moins stable. La matière stable n'est constituée que de particules de la première génération.</p>`,
        `<p>Les particules acquièrent leur masse par le <em>mécanisme de Higgs</em>. Les lois de conservation (charge, couleur, nombres leptoniques) et les symétries déterminent quels processus sont permis.</p>`,
        `<ul><li>Bosons de jauge : le photon $\\gamma$, huit gluons $g$, les bosons $W^{\\pm}$ et $Z^{0}$.</li><li>Le boson de Higgs $H^{0}$.</li></ul>`,
        { fig: 'v5v8-generacie', caption: `Les fermions se répartissent en trois générations ; les générations supérieures sont plus lourdes et moins stables.` }
      ],
      examples: [
        { task: `Combien de fermions le modèle standard possède-t-il dans les deux premières générations ?`,
          steps: [`Chaque génération contient 2 quarks et 2 leptons, soit 4 fermions.`, `$2\\cdot 4 = 8$.`, `<strong>Résultat : 8</strong>`] },
        { task: `Combien de bosons de jauge existe-t-il dans le modèle standard ?`,
          steps: [`Le photon (1), les gluons (8) et les bosons $W^{+}$, $W^{-}$, $Z^{0}$ (3).`, `$1+8+3=12$.`, `<strong>Résultat : 12</strong>`] }
      ]
    },
    'v8-interakcie': {
      title: `Interactions forte, faible et électromagnétique`,
      summary: `Portée, action et force relative de trois interactions.`,
      theory: [
        `<p><strong>L'interaction forte</strong> maintient ensemble les quarks dans les protons et les neutrons, et les nucléons dans le noyau. Elle a la portée la plus courte, de l'ordre de $10^{-15}\\,\\text{m}$, et c'est la plus intense des quatre interactions.</p>`,
        `<p><strong>L'interaction électromagnétique</strong> agit entre les charges. Elle provoque les forces électriques et magnétiques et la liaison des électrons dans les atomes. Sa portée est infinie et la force décroît avec le carré de la distance.</p>`,
        `<p><strong>L'interaction faible</strong> est responsable de la radioactivité bêta, lors de laquelle un quark $d$ se transforme en quark $u$ et un boson $W^{-}$ est émis. Sa portée est très courte, de l'ordre de $10^{-18}\\,\\text{m}$. Elle modifie la saveur des quarks, ce que les autres interactions ne peuvent pas faire.</p>`,
        `<p>Les intensités relatives (pour deux particules dans un noyau) sont environ 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$, dans l'ordre forte, électromagnétique, faible et gravitationnelle. La gravitation est la plus faible et négligeable dans le microcosme.</p>`,
        { fig: 'v5v8-interakcie', caption: `Les quatre interactions fondamentales : chacune est transmise par l'échange de son boson et a une portée différente.` }
      ],
      examples: [
        { task: `Quelle interaction est responsable de la radioactivité bêta ?`,
          steps: [`Lors de la radioactivité bêta, un quark $d$ se transforme en quark $u$.`, `Un changement de saveur de quark relève du domaine de l'interaction faible.`, `<strong>Résultat : l'interaction faible</strong>`] },
        { task: `Quelle interaction retient les électrons dans un atome ?`,
          steps: [`Les électrons ont une charge négative et le noyau une charge positive.`, `<strong>Résultat : l'interaction électromagnétique</strong>`] }
      ]
    },
    'v8-urychlovace': {
      title: `Accélérateurs et détecteurs de particules`,
      summary: `Accélération des particules chargées, collisions et reconstruction des événements dans un détecteur.`,
      theory: [
        `<p>Un accélérateur accélère les particules chargées à l'aide d'un champ électrique. Une particule de charge $q = z\\,e$ traversant une tension $U$ gagne l'énergie cinétique $E_k = z\\,e\\,U$. Si la tension est exprimée en mégavolts, l'énergie sort en MeV.</p>`,
        `<p>Les grands accélérateurs, par exemple le LHC du CERN d'une circonférence de 27 km, maintiennent les faisceaux sur une trajectoire circulaire à l'aide d'aimants puissants, et les particules sont accélérées par étapes. Les collisions proton-proton atteignent des énergies de l'ordre du TeV.</p>`,
        `<p>Les détecteurs enregistrent les trajectoires des particules. Un détecteur de traces placé dans un champ magnétique montre la courbure de la trajectoire, grâce à laquelle on détermine la quantité de mouvement. Les calorimètres mesurent l'énergie et les chambres à muons suivent les muons. À partir de ces données, on reconstruit la particule qui a été produite.</p>`,
        `<p>Selon la relation $E = m\\,c^2$, l'énergie cinétique d'une collision peut se convertir en masse de nouvelles particules. C'est pourquoi des particules très lourdes sont produites dans les collisions de haute énergie.</p>`,
        { fig: 'v5v8-urychlovac', caption: `Une particule de charge ze traversant la tension U gagne l'énergie zeU ; elle est accélérée par un champ électrique.` }
      ],
      examples: [
        { task: `Un proton est accéléré par une tension de 5 MV. Quelle énergie cinétique possède-t-il ?`,
          steps: [`Pour un proton $z=1$, donc $E_k = e\\,U$.`, `$E_k = 5\\,\\text{MeV}$.`, `<strong>Résultat : 5 MeV</strong>`] },
        { task: `Une particule de charge $+2e$ traverse une tension de 3 MV. Quelle énergie gagne-t-elle ?`,
          steps: [`$z=2$, donc $E_k = 2\\cdot 3\\,\\text{MeV}$.`, `<strong>Résultat : 6 MeV</strong>`] }
      ]
    },
    'v8-higgs': {
      title: `Le boson de Higgs et les questions ouvertes`,
      summary: `Le champ de Higgs, la découverte du boson de Higgs et les problèmes non résolus de la physique moderne.`,
      theory: [
        `<p>Le boson de Higgs a été découvert en 2012 au LHC. C'est un quantum du champ de Higgs, présent dans tout l'univers. Les particules qui interagissent avec ce champ acquièrent une masse ; plus elles interagissent fortement, plus elles sont lourdes.</p>`,
        `<p>La masse du boson de Higgs est d'environ 125 GeV/$c^2$, soit environ 133 fois la masse du proton. Le boson a été confirmé à travers ses désintégrations en deux photons ou en bosons $Z$.</p>`,
        `<p>Questions ouvertes : la <strong>matière noire</strong> représente environ 27 % du contenu énergétique de l'univers, et le modèle standard ne la décrit pas. Les <strong>masses des neutrinos</strong> sont faibles mais non nulles, ce que le modèle initial ne prévoyait pas. Le modèle standard n'inclut pas non plus la <strong>gravitation</strong> et n'explique pas pourquoi il existe plus de matière que d'antimatière dans l'univers.</p>`
      ],
      examples: [
        { task: `Combien de fois le boson de Higgs est-il plus lourd que le proton (la masse du proton est d'environ 0,94 GeV/$c^2$) ?`,
          steps: [`$125/0{,}94\\approx 133$.`, `<strong>Résultat : environ 133 fois</strong>`] },
        { task: `Quelle est, approximativement, la part de la matière noire dans le contenu énergétique de l'univers ?`,
          steps: [`La matière noire représente environ 27 % et la matière ordinaire seulement environ 5 %.`, `<strong>Résultat : environ 27 %</strong>`] }
      ]
    }
  }
});
