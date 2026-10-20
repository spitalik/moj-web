/* Français: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/fr/v7/ – needitovať ručne. */
CONTENT_I18N.add('fr', {
 "decimal": ",",
 "lessons": {
  "v7-chyby": {
   "title": "Erreurs et précision des calculs",
   "summary": "Erreur absolue et relative, chiffres significatifs, nombres machine et epsilon machine, propagation des erreurs, conditionnement d'un problème et perte de précision lors d'une soustraction.",
   "theory": [
    "<p>Le résultat d'un calcul numérique n'est presque toujours qu'<strong>approché</strong>. Les erreurs proviennent de plusieurs sources : du <em>modèle</em>\n       (description simplifiée de la réalité), des <em>données d'entrée</em> (mesures), de la <em>méthode</em> (on remplace un processus infini, par exemple une série ou une limite, par un processus fini — erreur\n       de méthode ou de discrétisation) et de l'<em>arrondi</em> lors des calculs avec un nombre fini de chiffres.</p>\n       <p>Si $x$ est la valeur exacte et $\\tilde{x}$ son approximation, l'<strong>erreur absolue</strong> est $\\Delta = |x-\\tilde{x}|$ et l'<strong>erreur relative</strong>\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$ (pour $x\\neq 0$), souvent en pourcentage. En général, on ne connaît pas la valeur exacte, on travaille donc avec une <em>estimation</em> (une borne) de l'erreur :\n       un nombre $\\varepsilon$ tel que $|x-\\tilde{x}|\\le\\varepsilon$, et on écrit $x=\\tilde{x}\\pm\\varepsilon$. L'erreur relative est plus importante, car elle ne dépend pas des unités :\n       une erreur de 1 mm est négligeable pour la longueur d'un pont, mais énorme pour l'épaisseur d'une tôle.</p>",
    "<p><strong>Chiffres significatifs.</strong> Le chiffre de l'approximation $\\tilde{x}$ à la position de l'ordre $10^{-k}$ est <em>exact</em> (fiable) si $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$.\n       On compte les chiffres significatifs exacts à partir du premier chiffre non nul à gauche jusqu'au dernier chiffre exact. Par exemple, $\\tilde{x}=23{,}4718$ avec une erreur d'au plus $0{,}004$ a deux décimales exactes\n       ($0{,}004\\le 0{,}005$), donc quatre chiffres significatifs exacts 2, 3, 4, 7. L'<strong>arrondi</strong> à $k$ décimales entraîne une erreur d'au plus $\\frac{1}{2}\\cdot 10^{-k}$ ;\n       un nombre correctement arrondi a donc tous ses chiffres écrits exacts.</p>",
    "<p><strong>Nombres machine.</strong> Un ordinateur stocke les nombres réels en virgule flottante sous la forme $\\pm m\\cdot\\beta^{e}$, où $\\beta$ est la base, la mantisse $m$ a un nombre fixe\n       $t$ de chiffres et l'exposant $e$ se trouve dans une plage limitée. La norme IEEE 754 en double précision (double) utilise $\\beta=2$, $t=53$ bits de mantisse et des exposants\n       allant environ de $-1022$ à $1023$. L'ensemble des nombres machine est fini ; en dehors, il se produit un <em>dépassement de capacité</em> (nombre trop grand) ou un <em>soupassement</em> (nombre trop petit).</p>\n       <p>L'<strong>epsilon machine</strong> $\\varepsilon_M$ est la distance entre 1 et le plus proche nombre machine supérieur ; pour le double, $\\varepsilon_M=2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.\n       L'arrondi d'un réel à un nombre machine donne $\\mathrm{fl}(x)=x(1+\\eta)$, où $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$ (erreur d'arrondi unitaire).\n       Le double porte donc environ 15 à 16 chiffres décimaux significatifs. Même le nombre $0{,}1$ n'a pas d'écriture binaire finie, c'est pourquoi par exemple $0{,}1+0{,}2$ ne vaut pas exactement $0{,}3$.</p>",
    "<p><strong>Propagation des erreurs.</strong> Pour les bornes d'erreur des données, on a (en approximation linéaire) :\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       Pour une fonction $y=f(x)$, $\\Delta y\\approx|f'(x)|\\,\\Delta x$, pour une fonction de plusieurs variables $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$.\n       Lors d'une addition, ce sont donc les erreurs absolues qui s'additionnent ; lors d'une multiplication ou d'une division, les erreurs relatives.</p>\n       <p><strong>Conditionnement.</strong> Un problème est <em>bien conditionné</em> si une petite variation relative des données entraîne une petite variation relative du résultat. On le mesure par\n       le <strong>nombre de conditionnement</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, tel que $\\delta y\\approx\\kappa\\,\\delta x$. Par exemple, $f(x)=\\ln x$ a $\\kappa=\\frac{1}{|\\ln x|}$,\n       ce qui est grand pour $x$ proche de 1 : le logarithme d'un nombre proche de un est un problème mal conditionné. Le conditionnement est une propriété du <em>problème</em>, tandis que la <em>stabilité</em> est une propriété\n       de l'<em>algorithme</em> — un algorithme stable n'amplifie pas les erreurs d'arrondi plus que ne le justifie le conditionnement du problème.</p>",
    "<p><strong>Perte de précision lors d'une soustraction.</strong> La différence de deux nombres proches est mal conditionnée : $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$, et le dénominateur est petit.\n       Les premiers chiffres communs s'annulent par la soustraction et les chiffres restants sont entachés d'erreur (c'est l'<em>élimination catastrophique</em>). Une transformation algébrique qui supprime la soustraction est utile :\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "On remplace le nombre $\\pi$ par la valeur $3{,}14$. Déterminez l'erreur absolue et l'erreur relative ainsi que le nombre de chiffres significatifs exacts de l'approximation.",
     "steps": [
      "$\\Delta=|\\pi-3{,}14|=|3{,}14159\\ldots-3{,}14|\\approx 0{,}00159$.",
      "$\\delta=\\frac{0{,}00159}{3{,}14159}\\approx 0{,}000507=0{,}0507\\,\\%$.",
      "Comme $0{,}00159\\le 0{,}005=\\frac{1}{2}\\cdot 10^{-2}$, deux décimales sont exactes. L'approximation $3{,}14$ a <strong>3 chiffres significatifs exacts</strong>."
     ]
    },
    {
     "task": "La plus petite racine de l'équation $x^2-200x+1=0$ est $x=100-\\sqrt{9999}$. Calculez-la en arithmétique à 4 chiffres significatifs, directement puis après une transformation qui supprime la soustraction.",
     "steps": [
      "À 4 chiffres significatifs, $\\sqrt{9999}=99{,}99499\\ldots\\approx 100{,}0$. Le calcul direct donne $100-100{,}0=0$ — tous les chiffres sont perdus, l'erreur relative est de 100 %.",
      "On multiplie par l'expression conjuguée : $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "Maintenant $\\frac{1}{100+100{,}0}=\\frac{1}{200{,}0}=0{,}005000$. La valeur exacte est $0{,}0050001250\\ldots$, le résultat a donc ses 4 chiffres exacts.",
      "Le problème lui-même est bien conditionné ; seul l'algorithme était mauvais (soustraction de nombres proches)."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "Résolution numérique des équations",
   "summary": "Séparation des racines, méthode de dichotomie, méthode du point fixe, méthode de Newton et méthode de la sécante, ordre de convergence et critères d'arrêt.",
   "theory": [
    "<p>On cherche une racine $\\xi$ de l'équation $f(x)=0$ qui ne peut pas s'exprimer par une formule (par exemple $x=\\cos x$ ou $x^5-x-1=0$). On commence par <strong>séparer</strong> la racine — on trouve un intervalle\n       $[a, b]$ qui contient exactement une racine. D'après le <strong>théorème de Bolzano</strong> (des valeurs intermédiaires), une fonction continue telle que $f(a)\\,f(b)&lt;0$ a au moins une racine dans l'intervalle $(a, b)$ ; si de plus\n       $f'$ ne change pas de signe sur $[a, b]$, la racine est unique.</p>\n       <p><strong>Méthode de dichotomie (bissection).</strong> On calcule le milieu $c=\\frac{a+b}{2}$. Si $f(a)\\,f(c)&lt;0$, on continue avec $[a, c]$, sinon avec $[c, b]$. Chaque étape\n       divise l'intervalle par deux ; après $n$ étapes, sa longueur est $\\frac{b-a}{2^n}$. Pour obtenir une longueur d'au plus $\\varepsilon$, il faut $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ étapes.\n       La méthode est lente, mais elle converge <em>toujours</em> et n'a besoin que des signes des valeurs de la fonction.</p>",
    "<p><strong>Méthode du point fixe.</strong> On réécrit l'équation sous la forme $x=g(x)$ et on calcule $x_{k+1}=g(x_k)$. Si $g$ envoie l'intervalle $I$ dans lui-même et\n       $|g'(x)|\\le q&lt;1$ sur $I$, alors $g$ a dans $I$ un unique <em>point fixe</em> $\\xi$ et la suite converge vers lui pour tout point de départ $x_0\\in I$ (théorème du point fixe de Banach).\n       On a les majorations\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       Le choix de la forme est important : l'équation $x^2-2=0$ peut s'écrire $x=\\frac{2}{x}$ (les itérations oscillent, $|g'(\\sqrt{2})|=1$) ou $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (convergence très rapide).</p>",
    "<p><strong>Méthode de Newton (méthode des tangentes).</strong> On remplace la courbe de la fonction au point $x_k$ par la tangente et on prend comme approximation suivante son intersection avec l'axe des $x$ :\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       Pour une racine simple ($f'(\\xi)\\neq 0$) et un point de départ assez proche de la racine, elle converge de façon <strong>quadratique</strong> : $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$,\n       le nombre de chiffres exacts double à peu près à chaque étape. <em>Condition de Fourier :</em> si $f'$ et $f''$ ne changent pas de signe sur $[a, b]$ et qu'on part de l'extrémité\n       où $f(x_0)\\,f''(x_0)&gt;0$, les itérations convergent de façon monotone. À partir d'un mauvais point de départ, la méthode peut s'éloigner beaucoup ; pour une racine multiple, elle ne converge que linéairement.</p>",
    {
     "fig": "v7-newton",
     "caption": "Méthode de Newton pour $f(x)=x^2-2$ : du point $[x_k; f(x_k)]$ on mène la tangente, et son intersection avec l'axe des $x$ est $x_{k+1}$. Après seulement trois étapes, l'approximation de $\\sqrt{2}$ a une erreur de l'ordre de $10^{-6}$ à $10^{-12}$."
    },
    "<p>La <strong>méthode de la sécante</strong> remplace la dérivée par le taux d'accroissement entre les deux dernières approximations :\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       Elle n'a pas besoin de la dérivée et converge avec l'ordre $\\frac{1+\\sqrt{5}}{2}\\approx 1{,}618$. Si l'on trace toujours la sécante par des points de signes opposés (comme pour la dichotomie),\n       on obtient la <em>regula falsi</em> (méthode de la fausse position), qui converge toujours, mais généralement seulement de façon linéaire.</p>\n       <p><strong>Ordre de convergence.</strong> Une méthode est d'ordre $p$ si $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$ ; pour $p=1$ (convergence linéaire), il faut $C&lt;1$. La dichotomie et la méthode du point fixe\n       sont d'ordre 1, la sécante d'ordre $1{,}618$, la méthode de Newton d'ordre 2. <strong>Critères d'arrêt :</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, en relatif $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$, et toujours aussi un nombre maximal d'itérations. Un petit $|f(x_k)|$ ne garantit pas à lui seul la proximité de la racine si la fonction est très plate.</p>"
   ],
   "examples": [
    {
     "task": "Par la méthode de Newton, trouvez $\\sqrt{5}$ comme racine de la fonction $f(x)=x^2-5$ ; partez du point $x_0=2$ et effectuez deux étapes.",
     "steps": [
      "$f'(x)=2x$, donc $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2{,}25$.",
      "$x_2=2{,}25-\\frac{2{,}25^2-5}{4{,}5}=2{,}25-\\frac{0{,}0625}{4{,}5}\\approx 2{,}236111$.",
      "Exactement, $\\sqrt{5}=2{,}236068\\ldots$ : l'erreur est passée de $0{,}014$ à $0{,}00004$, ce qui correspond à une convergence quadratique."
     ]
    },
    {
     "task": "Par dichotomie, localisez la racine de l'équation $x^3-x-1=0$ sur l'intervalle $[1; 2]$ (trois étapes). Combien d'étapes faudrait-il pour obtenir un intervalle de longueur au plus $10^{-6}$ ?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$, la racine est dans $[1; 2]$.",
      "$f(1{,}5)=0{,}875&gt;0$ → $[1; 1{,}5]$. $f(1{,}25)\\approx-0{,}297&lt;0$ → $[1{,}25; 1{,}5]$. $f(1{,}375)\\approx 0{,}225&gt;0$ → $[1{,}25; 1{,}375]$.",
      "Après $n$ étapes, l'intervalle a pour longueur $2^{-n}$. La condition $2^{-n}\\le 10^{-6}$ donne $n\\ge 6\\log_2 10\\approx 19{,}93$, donc <strong>20 étapes</strong>.",
      "La racine est $\\xi\\approx 1{,}3247$ ; la méthode de Newton atteindrait la même précision en 4 à 5 étapes."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "Interpolation et approximation",
   "summary": "Polynôme d'interpolation sous forme de Lagrange et de Newton, différences divisées, erreur d'interpolation, phénomène de Runge et méthode des moindres carrés.",
   "theory": [
    "<p><strong>Problème d'interpolation.</strong> On donne des <em>nœuds</em> deux à deux distincts $x_0, x_1, \\dots, x_n$ et des valeurs $y_0, y_1, \\dots, y_n$ (par exemple mesurées ou tirées d'une table).\n       On cherche un polynôme $P_n$ de degré au plus $n$ tel que $P_n(x_i)=y_i$ pour tout $i$. Un tel polynôme existe et il est <strong>unique</strong> : les conditions forment un système\n       de matrice de Vandermonde, dont le déterminant $\\prod_{i&lt;j}(x_j-x_i)$ est non nul. On utilise ensuite le polynôme pour calculer des valeurs entre les nœuds.</p>",
    "<p><strong>Forme de Lagrange.</strong> Pour chaque nœud, on construit un polynôme de base qui vaut 1 en ce nœud et 0 aux autres nœuds :\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       Pour deux nœuds, on obtient l'<em>interpolation linéaire</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$. La forme de Lagrange est claire, mais si l'on ajoute un nœud, il faut tout recalculer.</p>",
    "<p><strong>Forme de Newton et différences divisées.</strong> On définit les différences divisées par récurrence :\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       Alors\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       Les différences se calculent dans un tableau triangulaire, et ajouter un nœud revient simplement à ajouter un terme. On évalue le polynôme de façon économique par le schéma de Horner.</p>",
    "<p><strong>Erreur d'interpolation.</strong> Si $f$ a une dérivée d'ordre $n+1$ continue, pour tout $x$ il existe $\\xi$ dans le plus petit intervalle contenant $x$ et les nœuds tel que\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       D'où la majoration $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$, où $M_{n+1}=\\max|f^{(n+1)}|$. Pour une interpolation linéaire de pas $h$, l'erreur est au plus $\\frac{M_2h^2}{8}$.\n       Augmenter le degré sur des nœuds équidistants n'aide pas forcément : pour la fonction $\\frac{1}{1+25x^2}$ sur $[-1; 1]$, le polynôme oscille fortement près des bords (<strong>phénomène de Runge</strong>).\n       La solution consiste à utiliser les nœuds de Tchebychev, plus denses près des bords, ou une interpolation polynomiale par morceaux (splines).</p>",
    "<p><strong>Méthode des moindres carrés.</strong> Les données mesurées contiennent des erreurs ; on ne veut donc pas les faire passer par un polynôme de degré élevé, mais par une fonction simple qui les\n       <em>approche</em>. On choisit la droite $y=ax+b$ de sorte que la somme des carrés des écarts $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ soit minimale. Des conditions\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ on obtient les <strong>équations normales</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       de solution $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$. La droite passe par le point moyen des données $[\\bar{x}; \\bar{y}]$.</p>"
   ],
   "examples": [
    {
     "task": "Trouvez la valeur du polynôme d'interpolation des points $[0; 1]$, $[1; 3]$, $[3; 2]$ au point $x=2$, sous forme de Lagrange et sous forme de Newton.",
     "steps": [
      "Lagrange : $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3{,}333$.",
      "Newton : $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$, donc $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$ — le même polynôme, écrit autrement."
     ]
    },
    {
     "task": "Par la méthode des moindres carrés, ajustez une droite aux points $[0; 1]$, $[1; 2]$, $[2; 4]$, $[3; 4]$.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1{,}1$.",
      "$b=\\frac{11-1{,}1\\cdot 6}{4}=\\frac{4{,}4}{4}=1{,}1$.",
      "La droite cherchée est $y=1{,}1x+1{,}1$ ; elle passe par le point moyen $[1{,}5; 2{,}75]$."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "Dérivation et intégration numériques",
   "summary": "Différence progressive et centrée, choix du pas, méthode des rectangles, des trapèzes et de Simpson, ordre de précision et estimation de l'erreur.",
   "theory": [
    "<p><strong>Dérivation numérique.</strong> Du développement de Taylor $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ on tire les formules\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{différence progressive, erreur }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{différence centrée, erreur }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       La différence progressive (comme la différence régressive $\\frac{f(x)-f(x-h)}{h}$) est d'<strong>ordre de précision 1</strong>, la différence centrée d'<strong>ordre 2</strong> : en divisant le pas par deux, l'erreur diminue environ\n       de moitié, ou respectivement d'un facteur quatre. Pour la dérivée seconde, on utilise $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$, avec une erreur $O(h^2)$.</p>",
    "<p><strong>Choix du pas.</strong> On ne peut pas diminuer le pas indéfiniment. Au numérateur, on soustrait deux valeurs proches, donc l'erreur d'arrondi est de l'ordre de $\\frac{\\varepsilon_M|f(x)|}{h}$\n       et elle <em>augmente</em> quand $h$ diminue. L'erreur totale de la différence progressive $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ est minimale environ pour $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$,\n       et pour la différence centrée pour $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$. La dérivation numérique est donc un problème mal conditionné, contrairement à l'intégration.</p>",
    "<p><strong>Formules de quadrature.</strong> On divise l'intervalle $[a, b]$ en $n$ sous-intervalles de pas $h=\\frac{b-a}{n}$ ; les nœuds sont $x_i=a+ih$ et $f_i=f(x_i)$. Sur chaque sous-intervalle, on remplace\n       la fonction par un polynôme que l'on intègre exactement :</p>\n       <ul><li><strong>méthode des rectangles (du point milieu)</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, erreur $\\frac{(b-a)h^2}{24}f''(\\xi)$ ;</li>\n       <li><strong>méthode des trapèzes</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, erreur $-\\frac{(b-a)h^2}{12}f''(\\xi)$ ;</li>\n       <li><strong>méthode de Simpson</strong> ($n$ pair, une parabole sur chaque paire de sous-intervalles) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, erreur $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "Méthode des trapèzes pour $f(x)=2+\\sin 1{,}5x+0{,}3x$ sur $[0; 4]$. Augmente le nombre de sous-intervalles et observe comment l'erreur diminue à peu près comme le carré du pas ; pour $n$ pair, le résultat de la méthode de Simpson s'affiche aussi."
    },
    "<p><strong>Ordre de précision.</strong> L'erreur d'une formule composée se comporte comme $Ch^p$. Les méthodes des rectangles et des trapèzes ont $p=2$ (pas divisé par deux → erreur quatre fois plus petite),\n       celle de Simpson $p=4$ (seize fois plus petite) et elle est exacte pour les polynômes de degré inférieur ou égal à trois. La méthode du point milieu a une erreur environ deux fois plus petite et de signe opposé à celle des trapèzes,\n       d'où $S_{2n}=\\frac{2M_n+T_n}{3}$. À partir de deux calculs de pas $h$ et $\\frac{h}{2}$, on estime l'erreur par la <strong>règle de Runge</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$\n       et le résultat amélioré $\\frac{4T_{2n}-T_n}{3}$ est exactement la formule de Simpson (extrapolation de Richardson, sur laquelle repose la méthode de Romberg).</p>"
   ],
   "examples": [
    {
     "task": "Estimez $f'(0)$ pour $f(x)=e^x$ avec un pas $h=0{,}1$ par la différence progressive et par la différence centrée, et comparez les erreurs.",
     "steps": [
      "Progressive : $\\frac{e^{0{,}1}-1}{0{,}1}=\\frac{0{,}105171}{0{,}1}\\approx 1{,}051709$, erreur $\\approx 0{,}0517$.",
      "Centrée : $\\frac{e^{0{,}1}-e^{-0{,}1}}{0{,}2}\\approx\\frac{1{,}105171-0{,}904837}{0{,}2}\\approx 1{,}001668$, erreur $\\approx 0{,}0017$.",
      "Exactement, $f'(0)=1$. Les estimations d'erreur $\\frac{h}{2}f''=0{,}05$ et $\\frac{h^2}{6}f'''\\approx 0{,}0017$ concordent bien avec le résultat."
     ]
    },
    {
     "task": "Calculez $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0{,}785398$ par la méthode des trapèzes et par celle de Simpson avec $n=2$.",
     "steps": [
      "$h=0{,}5$, $f(0)=1$, $f(0{,}5)=0{,}8$, $f(1)=0{,}5$.",
      "$T_2=\\frac{0{,}5}{2}(1+2\\cdot 0{,}8+0{,}5)=0{,}25\\cdot 3{,}1=0{,}775$, erreur $\\approx 0{,}0104$.",
      "$S_2=\\frac{0{,}5}{3}(1+4\\cdot 0{,}8+0{,}5)=\\frac{0{,}5\\cdot 4{,}7}{3}\\approx 0{,}783333$, erreur $\\approx 0{,}0021$.",
      "Pour le même nombre d'évaluations de la fonction, la méthode de Simpson est nettement plus précise."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "Résolution numérique des équations différentielles",
   "summary": "Problème de Cauchy, méthode d'Euler, méthode de Heun (Euler améliorée), méthode de Runge-Kutta d'ordre 4, erreur locale et globale, choix du pas et stabilité.",
   "theory": [
    "<p>On résout le <strong>problème de Cauchy</strong> $y'=f(x, y)$, $y(x_0)=y_0$, que l'on ne sait généralement pas résoudre analytiquement. On choisit un <strong>pas</strong> $h$ et des nœuds $x_k=x_0+kh$, et on\n       calcule successivement des approximations $y_k\\approx y(x_k)$. Les méthodes à un pas calculent $y_{k+1}$ uniquement à partir du couple $[x_k; y_k]$. L'<strong>erreur locale</strong> est l'erreur d'un seul pas\n       (en supposant $y_k$ exact), l'<strong>erreur globale</strong> $y(x_k)-y_k$ est l'erreur accumulée au nœud. Si l'erreur locale est $O(h^{p+1})$, après $\\frac{X-x_0}{h}$ pas\n       l'erreur globale est $O(h^p)$ et on dit que la méthode est d'<strong>ordre</strong> $p$.</p>",
    "<p><strong>Méthode d'Euler.</strong> Sur le sous-intervalle $[x_k, x_{k+1}]$, on remplace la solution par la tangente de pente $f(x_k, y_k)$ donnée par le champ de directions :\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       C'est la méthode d'ordre un la plus simple : erreur locale $\\frac{h^2}{2}y''(\\xi)$, erreur globale $O(h)$. Diviser le pas par deux ne réduit l'erreur que de moitié environ ; en pratique,\n       on l'utilise donc plutôt comme point de départ pour des méthodes plus précises.</p>",
    {
     "fig": "v7-euler",
     "caption": "Problème $y'=y$, $y(0)=1$ sur $[0; 2]$, de solution exacte $y=e^x$ (courbe noire). La méthode d'Euler (en bleu) reste systématiquement en dessous, celle de Heun (en vert) est beaucoup plus précise pour le même pas. Augmente le nombre de pas et compare la vitesse à laquelle les erreurs diminuent."
    },
    "<p>La <strong>méthode de Heun (Euler améliorée)</strong> est de type prédicteur-correcteur : un pas d'Euler fournit une estimation de la valeur à la fin du sous-intervalle, puis on fait la moyenne des pentes :\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       Elle correspond à la règle des trapèzes et est d'<strong>ordre 2</strong>. La <em>méthode d'Euler modifiée (du point milieu)</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$ est semblable.</p>\n       <p>La <strong>méthode de Runge-Kutta d'ordre 4 (RK4)</strong> évalue à chaque pas quatre pentes\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       et en prend la moyenne pondérée $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$ — l'analogue de la règle de Simpson. En divisant le pas par deux, l'erreur diminue d'un facteur 16 environ.</p>",
    "<p><strong>Pas et erreur.</strong> Pour une méthode d'ordre $p$, l'erreur globale vaut environ $Ch^p$. À partir de deux calculs de pas $h$ et $\\frac{h}{2}$, on l'estime par la <strong>règle de Runge</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. Les logiciels modernes adaptent le pas (pas adaptatif, par exemple avec des paires de méthodes de Runge-Kutta d'ordres différents).\n       Un pas plus petit ne donne pas toujours un meilleur résultat — le nombre d'opérations et d'erreurs d'arrondi augmente.</p>\n       <p><strong>Stabilité.</strong> Pour l'équation test $y'=\\lambda y$ avec $\\lambda&lt;0$, la méthode d'Euler donne $y_{k+1}=(1+h\\lambda)y_k$ ; la solution numérique ne tend vers zéro que si\n       $|1+h\\lambda|&lt;1$, c'est-à-dire $h&lt;\\frac{2}{|\\lambda|}$. Avec un pas plus grand, elle oscille et croît, alors que la solution exacte décroît rapidement. Les équations ayant des échelles de temps très différentes\n       (équations <em>raides</em>) se résolvent donc par des méthodes implicites, par exemple la méthode d'Euler implicite $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$, qui est stable pour tout $h&gt;0$.</p>"
   ],
   "examples": [
    {
     "task": "Résolvez le problème $y'=y$, $y(0)=1$ avec un pas $h=0{,}5$ par les méthodes d'Euler et de Heun jusqu'à $x=1$, et comparez avec $e\\approx 2{,}71828$.",
     "steps": [
      "Euler : $y_1=1+0{,}5\\cdot 1=1{,}5$, $y_2=1{,}5+0{,}5\\cdot 1{,}5=2{,}25$, erreur $\\approx 0{,}468$.",
      "Heun, 1er pas : prédicteur $\\tilde{y}_1=1{,}5$, $y_1=1+0{,}25\\,(1+1{,}5)=1{,}625$.",
      "Heun, 2e pas : $\\tilde{y}_2=1{,}625+0{,}5\\cdot 1{,}625=2{,}4375$, $y_2=1{,}625+0{,}25\\,(1{,}625+2{,}4375)=2{,}640625$, erreur $\\approx 0{,}078$.",
      "Pour le même pas, la méthode de Heun est environ six fois plus précise."
     ]
    },
    {
     "task": "Effectuez un pas de la méthode RK4 avec un pas $h=0{,}1$ pour le problème $y'=x+y$, $y(0)=1$. La solution exacte est $y=2e^x-x-1$.",
     "steps": [
      "$k_1=f(0; 1)=1$, $k_2=f(0{,}05;\\ 1+0{,}05\\cdot 1)=0{,}05+1{,}05=1{,}1$.",
      "$k_3=f(0{,}05;\\ 1+0{,}05\\cdot 1{,}1)=0{,}05+1{,}055=1{,}105$, $k_4=f(0{,}1;\\ 1+0{,}1\\cdot 1{,}105)=0{,}1+1{,}1105=1{,}2105$.",
      "$y_1=1+\\frac{0{,}1}{6}(1+2{,}2+2{,}21+1{,}2105)=1+\\frac{0{,}66205}{6}\\approx 1{,}1103417$.",
      "Exactement, $y(0{,}1)=2e^{0{,}1}-1{,}1\\approx 1{,}1103418$ ; l'erreur est d'environ $10^{-7}$."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "Algorithmes de calcul matriciel",
   "summary": "Élimination de Gauss avec choix du pivot, décomposition LU, complexité des méthodes directes, itérations de Jacobi et de Gauss-Seidel, méthode de la puissance itérée pour la valeur propre dominante.",
   "theory": [
    "<p>L'<strong>élimination de Gauss</strong> résout le système $Ax=b$ de matrice inversible de taille $n\\times n$ en deux phases. Dans la <em>phase de descente</em>, pour $k=1, \\dots, n-1$,\n       on soustrait aux lignes $i&gt;k$ un multiple de la $k$-ième ligne avec le <strong>multiplicateur</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$, de sorte que des zéros apparaissent sous la diagonale et que la matrice\n       devient triangulaire supérieure. Par la <em>remontée</em>, on calcule $x_n, x_{n-1}, \\dots, x_1$ par substitution de bas en haut.</p>\n       <p>Si le <em>pivot</em> $a_{kk}$ est nul ou très petit, les multiplicateurs sont énormes et les erreurs d'arrondi s'amplifient. On utilise donc\n       le <strong>pivot partiel</strong> : avant la $k$-ième étape, on échange les lignes de sorte que $|a_{kk}|$ soit le plus grand de la $k$-ième colonne, sur la diagonale et en dessous. Alors $|l_{ik}|\\le 1$.</p>",
    "<p><strong>Décomposition LU.</strong> Les multiplicateurs de la phase de descente forment une matrice triangulaire inférieure $L$ avec des 1 sur la diagonale, et la matrice triangulaire supérieure obtenue est $U$ ; on a\n       $A=LU$ (avec choix du pivot, $PA=LU$, où $P$ est une matrice de permutation). On résout alors le système par deux systèmes triangulaires :\n       $$Ly=b\\ \\text{(substitution avant)},\\qquad Ux=y\\ \\text{(substitution arrière)}.$$\n       La décomposition est rentable si l'on résout plusieurs systèmes de même matrice avec des seconds membres différents. On obtient aussi le déterminant $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.\n       Pour les matrices symétriques définies positives, il existe la <em>décomposition de Cholesky</em> $A=LL^{T}$, plus économique.</p>",
    "<p><strong>Complexité.</strong> La phase de descente de l'élimination de Gauss coûte environ $\\frac{2}{3}n^3$ opérations arithmétiques, chaque substitution triangulaire environ $n^2$. Quand la taille\n       double, le temps d'élimination est multiplié par huit environ. Il n'est pas nécessaire de calculer la matrice inverse (environ $2n^3$ opérations) pour résoudre un système. Pour les matrices <em>bandes</em> de largeur de bande $w$, le coût\n       tombe à $O(nw^2)$, pour les matrices tridiagonales à $O(n)$. Pour les grandes matrices <em>creuses</em> (la plupart des coefficients sont nuls), l'élimination remplit les zéros ; on utilise donc des méthodes itératives.</p>",
    "<p><strong>Méthodes itératives.</strong> De la $i$-ième équation, on exprime $x_i$ et on substitue l'approximation précédente. La <strong>méthode de Jacobi</strong> n'utilise que les valeurs de l'étape précédente,\n       la méthode de <strong>Gauss-Seidel</strong> utilise immédiatement les composantes déjà recalculées :\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       Les deux méthodes convergent pour tout point de départ si la matrice est <strong>à diagonale strictement dominante</strong> ($|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$ pour chaque ligne) ; celle de Gauss-Seidel aussi pour une matrice symétrique\n       définie positive. Une itération coûte de l'ordre d'autant d'opérations que la matrice a de coefficients non nuls. On s'arrête quand $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ ou quand le résidu $\\|b-Ax^{(k)}\\|$ est petit.</p>",
    "<p><strong>Méthode de la puissance itérée.</strong> Supposons que la matrice $A$ ait des valeurs propres $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ (la valeur dominante $\\lambda_1$ est la seule de plus grande valeur absolue).\n       La multiplication répétée $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ renforce la composante selon le vecteur propre $v_1$, de sorte que $x^{(k)}$ tend vers $\\pm v_1$ à la vitesse $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$.\n       On estime la valeur propre par le <strong>quotient de Rayleigh</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ ou par le quotient des composantes correspondantes $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$.\n       La plus petite valeur propre en valeur absolue s'obtient par la <em>méthode de la puissance inverse</em> (puissance itérée pour $A^{-1}$ ; à chaque étape, on résout un système à l'aide de la décomposition LU). C'est aussi sur ce principe\n       que repose le classement des pages PageRank.</p>"
   ],
   "examples": [
    {
     "task": "Trouvez la décomposition LU de la matrice $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ et résolvez $Ax=b$ pour $b=(4;\\ 10;\\ 24)^{T}$.",
     "steps": [
      "1re étape : $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$ ; les lignes deviennent $(0, 1, 1)$ et $(0, 3, 5)$.",
      "2e étape : $l_{32}=\\frac{3}{1}=3$ ; troisième ligne $(0, 0, 2)$. Donc $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$ : $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$ : $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Solution $x=(1;\\ 1;\\ 1)^{T}$ ; de plus, $\\det A=2\\cdot 1\\cdot 2=4$."
     ]
    },
    {
     "task": "Résolvez le système $4x_1-x_2=7$, $x_1+3x_2=5$ (solution $x=(2;\\ 1)$) à partir du point $(0;\\ 0)$ par deux itérations des méthodes de Jacobi et de Gauss-Seidel.",
     "steps": [
      "Formules d'itération : $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. La matrice est à diagonale dominante ($4&gt;1$, $3&gt;1$), les deux méthodes convergent.",
      "Jacobi : $x^{(1)}=(1{,}75;\\ 1{,}6667)$, $x^{(2)}=\\left(\\frac{7+1{,}6667}{4};\\ \\frac{5-1{,}75}{3}\\right)=(2{,}1667;\\ 1{,}0833)$.",
      "Gauss-Seidel : $x_1^{(1)}=1{,}75$, puis aussitôt $x_2^{(1)}=\\frac{5-1{,}75}{3}=1{,}0833$ ; $x_1^{(2)}=\\frac{7+1{,}0833}{4}=2{,}0208$, $x_2^{(2)}=\\frac{5-2{,}0208}{3}=0{,}9931$.",
      "Après deux itérations, la méthode de Gauss-Seidel a une erreur d'environ $0{,}02$, celle de Jacobi d'environ $0{,}17$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (La valeur exacte est ${@5}$.)",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pour une puissance, l'erreur relative est multipliée par l'exposant : $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, soit environ ${@6}\\,\\%$.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Près de $\\pi$, le sinus est petit et le problème est mal conditionné.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ est croissante, donc $M_2=e^{{@0}}\\approx {@1}$.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$, donc $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. La soustraction de nombres proches est mal conditionnée.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$, donc $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Valeur exacte : $\\sqrt{{@5}}\\approx {@6}$.)",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$, donc $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Valeur exacte : $f'({@8})\\approx {@9}$, l'erreur est d'environ ${@10}$.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Valeur exacte : $f'({@8})\\approx {@9}$, l'erreur est d'environ ${@10}$.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Valeur exacte : $\\sqrt{{@6}}\\approx {@7}$.)",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, prédicteur $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. L'intervalle obtenu est $[{@5};\\ {@6}]$.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. La valeur exacte est ${@6}$, l'erreur d'environ ${@7}$.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Quotient de Rayleigh : $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. La valeur propre dominante exacte est $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (On calcule en radians et on n'arrondit pas les résultats intermédiaires.)",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$, donc $M_2=1$.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, erreur absolue $\\Delta\\approx {@2}$. Erreur relative $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, soit environ ${@7}\\,\\%$.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$, donc $\\Delta=|{@2}-{@3}|\\approx {@4}$.",
  "(tu len $f_1$)": "(ici seulement $f_1$)",
  ", ale ${@0}&gt;{@1}$": ", mais ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "L'erreur absolue est $|x-\\tilde{x}|$. Prends la valeur de la constante avec suffisamment de chiffres (calculatrice).",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "Si l'erreur vaut approximativement $Ch^p$, diviser le pas par $k$ divise l'erreur par $k^p$. Les méthodes des trapèzes et du point milieu ont $p=2$, celle de Simpson $p=4$.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "Quel est le majorant de l'erreur absolue sur l'aire ? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "Quelle est l'erreur relative sur $x^{{@0}}$ en pourcentage ? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "Quelle est l'erreur relative en pourcentage ? {@0}",
  "Aký interval dostaneš po druhom kroku?": "Quel intervalle obtiens-tu après la deuxième étape ?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "Quel intervalle obtiens-tu après la première étape ? (sépare les extrémités par un point-virgule)",
  "Aký je krok $h$?": "Quel est le pas $h$ ?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "Quel est le multiplicateur $l_{21}$ (le multiple de la première équation que tu soustrais de la deuxième) ?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "Quel est le multiplicateur $l_{32}$ à la deuxième étape de l'élimination ?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "L'approximation $\\tilde{x}={@0}$ a une erreur absolue d'au plus ${@1}$. Combien a-t-elle de chiffres significatifs ?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "Différence centrée : $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Calcule les fonctions trigonométriques en radians.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "L'erreur est proportionnelle à $h^{p}$, elle est donc divisée par $k^{p}$, et non par $k\\cdot p$.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "L'erreur de l'interpolation linéaire est $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$ ; à la place de $f''(\\xi)$, prends le maximum de la valeur absolue de la dérivée seconde sur l'intervalle.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "L'erreur n'est pas proportionnelle à $h$ lui-même, mais à $h^{p}$, où $p$ est l'ordre de la méthode.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "L'erreur ne diminue pas proportionnellement au pas : la méthode est d'ordre {@0}, l'erreur est donc proportionnelle à $h^{{@1}}$.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "L'erreur de {@0} est proportionnelle à $h^{{@1}}$ (ordre {@2}). Avec le pas $\\frac{h}{{@3}}$, elle est divisée par ${@4}^{{@5}}={@6}$.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "Les erreurs sur les côtés ne se multiplient pas. L'estimation linéaire est $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "Le chiffre de rang $10^{-j}$ est significatif si l'erreur ne dépasse pas $\\frac{1}{2}\\cdot 10^{-j}$. On a ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, donc {@4}. En comptant {@5} {@6} avant la virgule, {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "La dérivée de $x^2 - a$ est $2x$, et non $x$.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "Différence progressive : $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Calcule les fonctions trigonométriques en radians.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "Remplace $x_0$ dans $g$, puis remplace de nouveau le résultat dans $g$. N'arrondis pas les résultats intermédiaires.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "Remplace dans $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$ ; la dérivée de $x-c$ est 1.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "Remplace dans la formule de la différence {@0}. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "Pas d'Euler : $y_{k+1}=y_k+h\\,f(x_k, y_k)$, où $x_k=kh$. Effectue deux pas.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "Méthodes d'Euler et de Heun pour y' = y, y(0) = 1",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "La méthode d'Euler est d'ordre 1, celle de Heun d'ordre 2, RK4 d'ordre 4. L'erreur vaut approximativement $Ch^p$.",
  "Eulerovou metódou": "par la méthode d'Euler",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "On remplace la fonction $f(x)={@0}$ sur l'intervalle $[{@1};\\ {@2}]$ par une interpolation linéaire. Majore l'erreur d'interpolation au point $x={@3}$ à l'aide de la formule $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "L'élimination de Gauss d'un système à ${@0}$ inconnues prend ${@1}$ s sur un certain ordinateur. Combien de secondes environ prendra un système à ${@2}$ inconnues (matrice pleine) ?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "Résous le système {@0} par la méthode du pivot de Gauss. Saisis $x_1; x_2; x_3$ séparés par des points-virgules.",
  "Gaussovou–Seidelovou": "Gauss–Seidel",
  "Heunovou metódou": "par la méthode de Heun",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "La valeur est $x={@0}\\pm {@1}$. Estime l'erreur relative de l'expression $x^{{@2}}$ en pourcentage. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "Cherche le plus petit $n$ pour lequel $2^n$ est au moins aussi grand.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "Cherche le plus petit ordre $10^{-k}$ pour lequel l'erreur ne dépasse pas $\\frac{1}{2}\\cdot 10^{-k}$.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "Le polynôme d'interpolation de degré 2 passe par les points {@0}. Calcule sa valeur au point $x={@1}$. {@2}",
  "Jacobiho": "Jacobi",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "La calculatrice est en degrés. En analyse numérique, on calcule les fonctions trigonométriques en radians.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "La calculatrice est en degrés. Pour dériver les fonctions trigonométriques, on calcule en radians.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "Chaque étape de dichotomie ne fait que diviser l'intervalle par deux, il faut donc le logarithme de base 2, et non de base 10.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "La racine se trouve dans un intervalle de longueur ${@0}$. Quel est le nombre minimal d'étapes de dichotomie pour que l'intervalle obtenu ait une longueur d'au plus ${@1}$ ?",
  "Koľko desatinných miest je platných?": "Combien de décimales sont exactes ?",
  "Koľko najmenej krokov bisekcie treba?": "Quel est le nombre minimal d'étapes de dichotomie ?",
  "Koľko platných cifier má aproximácia celkovo?": "Combien de chiffres significatifs l'approximation a-t-elle au total ?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "Combien de fois faut-il réduire l'intervalle, c.-à-d. que vaut $\\frac{b-a}{\\varepsilon}$ ?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "Dans la méthode des trapèzes, les valeurs extrêmes $f_0$ et $f_n$ ont le poids $\\frac{h}{2}$, les valeurs intérieures $h$. Les extrémités ne comptent que pour moitié.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "On divise le pas $h$ {@0}. Par combien l'erreur de {@1} est-elle divisée approximativement (pour une fonction régulière) ?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "Seul le coût de la substitution triangulaire croît de façon quadratique. L'élimination (phase de descente) a une complexité $O(n^3)$.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "Polynômes de base de Lagrange au point ${@0}$ : {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "Méthode des trapèzes pour une fonction sur l'intervalle de 0 à 4",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "Méthode des trapèzes : $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "Interpolation linéaire : $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "La méthode est d'ordre {@0}, l'erreur globale vaut approximativement $Ch^{{@1}}$. Avec le pas $\\frac{h}{{@2}}$, elle est divisée par ${@3}^{{@4}}={@5}$ : $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "Par la méthode des moindres carrés, ajuste une droite $y=ax+b$ aux points {@0}. Détermine {@1}. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "On estime la valeur propre dominante de la matrice symétrique $A={@0}$ par la méthode de la puissance itérée. À partir de $x^{(0)}=(1;\\ 1)^{T}$, calcule $x^{(1)}=Ax^{(0)}$ et le quotient de Rayleigh $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "Le multiplicateur $l_{32}$ se calcule à partir de la matrice modifiée après la première étape de l'élimination, et non à partir du coefficient initial $a_{32}$.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "Le multiplicateur est $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (à partir de la matrice actuelle, déjà modifiée) ; soustrais de la ligne $i$ la ligne $k$ multipliée par $l_{ik}$. La matrice triangulaire supérieure obtenue est $U$.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "Le multiplicateur est le quotient $l_{21} = \\frac{a_{21}}{a_{11}}$ ; il faut diviser le coefficient par le pivot.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "Le multiplicateur est le quotient $l_{31} = \\frac{a_{31}}{a_{11}}$ ; il faut diviser le coefficient par le pivot.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "Multiplicateurs : $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$ ; après la première étape, la deuxième ligne est $(0, {@6}, {@7})$ et la troisième $(0, {@8}, {@9})$ ; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "D'abord le prédicteur d'Euler $\\tilde{y}_1=y_0+hf(x_0, y_0)$, puis $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "Calcule d'abord les différences divisées d'ordre 1 $f[x_0, x_1]$ et $f[x_1, x_2]$, puis divise leur différence par $x_2-x_0$.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "Le pas de Newton est $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$ ; la fraction se soustrait, elle ne s'ajoute pas.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Le pas de Newton est $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "Méthode de Newton : tangentes au graphe de y = x² − 2",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "Par la méthode de Newton, on cherche $\\sqrt{{@0}}$ comme racine de la fonction $f(x)=x^2-{@1}$. Calcule $x_1$ à partir de $x_0={@2}$. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "Équations normales : $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$ ; on en tire $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "Trouve la décomposition LU (sans échange de lignes, $L$ a des 1 sur la diagonale) de la matrice $A={@0}$ et détermine {@1}.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "Trouve le plus petit ordre $10^{-k}$ pour lequel $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ est encore vrai, et compte les chiffres depuis le premier chiffre non nul jusqu'à ce rang.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "Méthode du point milieu : $M_n=h\\sum f(\\text{milieu du sous-intervalle})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "Estime la dérivée de la fonction $f(x)={@0}$ au point $x={@1}$ par une différence {@2} de pas $h={@3}$. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "On a $\\delta(x^n)\\approx|n|\\,\\delta x$, où $\\delta x=\\frac{\\Delta x}{|x|}$.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "Après $n$ étapes, l'intervalle a pour longueur $\\frac{{@0}}{2^n}$. Il faut $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, donc $n\\ge\\log_2 {@4}\\approx {@5}$. Le plus petit entier est $n={@6}$.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "Tu as gardé la mauvaise moitié. La racine est dans la moitié aux extrémités de laquelle $f$ prend des signes opposés.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "Utilise $P(x)=\\sum y_i\\ell_i(x)$ avec $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, ou la forme de Newton avec les différences divisées.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "Utilise $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$ ; ici $a-b=1$.",
  "Počet krokov": "Nombre d'étapes",
  "Počet krokov n": "Nombre de pas n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "Le nombre d'opérations vaut environ $\\frac{2}{3}n^3$, le temps croît comme le cube de la taille. La taille a été multipliée par ${@0}$, le temps donc par ${@1}^3={@2}$ : ${@3}\\cdot {@4}={@5}$ s.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "Pour $f(x)=\\ln x$, on obtient $\\kappa=\\frac{1}{|\\ln x|}$.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "Pour $f(x)=\\sin x$, on a $\\kappa=|x\\cot x|$. Calcule en radians.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "Pour les points {@0}, calcule la différence divisée d'ordre 2 $f[x_0, x_1, x_2]$ (le coefficient de $(x-x_0)(x-x_1)$ dans la forme de Newton). {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "Pour une fonction de deux variables, $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$ ; pour $S=ab$, les dérivées partielles sont $b$ et $a$.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "Dans la méthode de Gauss–Seidel, on a déjà utilisé les nouvelles valeurs dans la deuxième et la troisième équation.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "Dans la méthode de Jacobi, on remplace partout par les valeurs de départ.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "Dans la méthode de Jacobi, on remplace dans toutes les équations uniquement les valeurs de départ $x^{(0)}$, et non les composantes qui viennent d'être calculées.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "Pour la différence centrée, la distance entre les points $x-h$ et $x+h$ vaut $2h$ ; il faut diviser la différence des valeurs par $2h$, et non par $h$.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "Pour la différence d'ordre 2, on divise par la différence des nœuds extrêmes $x_2 - x_0$, et non par $x_2 - x_1$.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "L'élimination avec les multiplicateurs $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ donne la matrice triangulaire supérieure $U={@3}$ et le second membre $y=({@4})^{T}$. Remontée : $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4 : $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "Tu as calculé le quotient de Rayleigh avec le vecteur $x^{(0)}$. L'exercice demande le quotient pour $x^{(1)}$, il faut donc encore calculer $Ax^{(1)}$.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "L'erreur relative est $\\frac{|x-\\tilde{x}|}{|x|}$ ; pour l'avoir en pourcentage, multiplie-la par 100.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "L'erreur relative sur l'entrée est donc amplifiée environ {@0} fois : le problème est mal conditionné.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "Résous l'inéquation $\\frac{b-a}{2^n}\\le\\varepsilon$, c.-à-d. $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, et arrondis à l'entier supérieur.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "La résolution d'un certain problème {@0} avec le pas $h$ présente au point final une erreur globale d'environ ${@1}$. Quelle erreur peut-on attendre avec le pas $\\frac{h}{{@2}}$ ? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "L'équation $x^2-{@0}=0$ a une racine dans l'intervalle $[{@1};\\ {@2}]$. Effectue deux étapes de la méthode de dichotomie et saisis l'intervalle obtenu sous forme de deux extrémités séparées par un point-virgule (par ex. 1,25; 1,5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "On résout l'équation par la méthode du point fixe $x_{k+1}=g(x_k)$ avec $g(x)={@0}$ (équation ${@1}$) et $x_0={@2}$. Calcule $x_2$. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "La différence des différences d'ordre 1 doit encore être divisée par la différence des nœuds extrêmes $x_2 - x_0$.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "La différence des valeurs $y_1 - y_0$ doit être divisée par la longueur du pas $x_1 - x_0 = {@0}$, et ensuite seulement multipliée par $(x - x_0)$.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "On multiplie et divise l'expression par la somme des racines : $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "La méthode de Simpson est d'ordre 4, et non 2 comme la méthode des trapèzes.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "Méthode de Simpson : $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ pair.",
  "Simpsonovej metódy": "la méthode de Simpson",
  "Simpsonovou metódou": "par la méthode de Simpson",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "Les pentes $k_2$ et $k_3$ ont un poids double dans RK4 : $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "On fait la moyenne des pentes : on multiplie par $\\frac{h}{2}$, et non par $h$.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "Au deuxième pas, la pente doit être recalculée au nouveau point $(x_1, y_1)$ ; il ne suffit pas de faire un seul pas de longueur $2h$ avec la pente de départ.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "Tu n'as compté que les décimales exactes. Les chiffres significatifs comprennent aussi les chiffres avant la virgule.",
  "Spätným chodom urči najprv $x_3$.": "Par la remontée, détermine d'abord $x_3$.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "On a mesuré les côtés d'un rectangle avec une précision de $\\pm {@0}$ cm : $a={@1}$ cm et $b={@2}$ cm. Estime le majorant de l'erreur absolue sur l'aire $S=ab$ (en cm²) à l'aide de l'approximation linéaire. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "La méthode du point milieu prend les valeurs aux milieux des sous-intervalles, et non à leurs extrémités gauches.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "Milieux des sous-intervalles : {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "Résous le système {@0} par la méthode de {@1} à partir de $x^{(0)}={@2}$. Calcule la première itération $x^{(1)}$ et saisis ses trois composantes séparées par des points-virgules, chacune arrondie à 4 décimales.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "Le produit des coefficients diagonaux ne donne le déterminant que pour une matrice triangulaire. Multiplie la diagonale de la matrice $U$, et non de $A$.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "C'est un pas de Jacobi. Dans la méthode de Gauss–Seidel, remplace immédiatement les nouvelles valeurs $x_1^{(1)}, x_2^{(1)}$ dans les équations suivantes.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "C'est l'erreur absolue. Tu obtiens l'erreur relative en divisant l'erreur absolue par $|x|$ (et en multipliant encore par 100 pour le pourcentage).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "Ce n'est que $x_1$. Remplace encore une fois le résultat dans $g$.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "Ce n'est que $y_1$. Effectue encore le deuxième pas.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "Ce n'est que le prédicteur d'Euler $\\tilde{y}_1$. La méthode de Heun le corrige encore par la moyenne de deux pentes.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "Ce n'est que le numérateur $(x^{(1)})^{T}Ax^{(1)}$. Divise-le encore par $(x^{(1)})^{T}x^{(1)}$.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "C'est la méthode des trapèzes. La méthode de Simpson utilise les poids $1, 4, 2, 4, \\dots, 4, 1$ et multiplie par $\\frac{h}{3}$.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "C'est l'interpolation linéaire à partir des deux nœuds voisins seulement. Le polynôme de degré 2 utilise les trois points.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "C'est l'estimation $\\frac{M_2h^2}{8}$ pour le pire point de l'intervalle. L'exercice porte sur un point $x$ précis.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "C'est la moyenne $\\bar{y}$. L'ordonnée à l'origine est $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, il faut donc aussi soustraire $a\\bar{x}$.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "C'est le coefficient initial $a_{22}$. Il faut d'abord soustraire de la deuxième ligne la première multipliée par $l_{21}$.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "C'est le coefficient initial $a_{23}$. Il faut d'abord soustraire de la deuxième ligne la première multipliée par $l_{21}$.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "C'est le coefficient initial $a_{33}$. La troisième ligne doit être modifiée aux deux étapes de l'élimination.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "C'est l'erreur relative (rapport de l'erreur à la valeur). L'erreur absolue est la différence $|x-\\tilde{x}|$ elle-même.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "C'est l'erreur relative sur $x$ lui-même. Pour une puissance, l'erreur relative est multipliée par l'exposant ${@0}$.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "Effectue un pas de la méthode de Newton pour l'équation $x^3{@0}-{@1}=0$ à partir de $x_0={@2}$. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "Effectue un pas de la méthode de Runge–Kutta d'ordre 4 avec le pas $h={@0}$ pour le problème {@1}. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "Effectue un pas de la méthode de la sécante pour $f(x)=x^2-{@0}$ avec les points initiaux $x_0={@1}$ et $x_1={@2}$. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "Détermine $M_2 = \\max|f''|$ sur l'intervalle. {@0}",
  "Urči $u_{22}$.": "Détermine $u_{22}$.",
  "Urči $u_{23}$.": "Détermine $u_{23}$.",
  "Urči $u_{33}$.": "Détermine $u_{33}$.",
  "Urči multiplikátor $l_{21}$.": "Détermine le multiplicateur $l_{21}$.",
  "Urči multiplikátor $l_{31}$.": "Détermine le multiplicateur $l_{31}$.",
  "Urči multiplikátor $l_{32}$.": "Détermine le multiplicateur $l_{32}$.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "Détermine le conditionnement $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ du calcul de $f(x)=\\sin x$ au point $x={@0}$ (en radians). {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "Détermine le conditionnement $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ du calcul de $f(x)=x-{@0}$ au point $x={@1}$. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "Détermine le conditionnement $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ du calcul de la fonction $f(x)=\\ln x$ au point $x={@0}$. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "À chaque étape, calcule la valeur au milieu de l'intervalle et garde la moitié aux extrémités de laquelle la fonction prend des signes opposés.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "La formule contient encore une division par deux : $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "Dans la formule de la sécante, la correction $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ se soustrait de $x_1$.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "Annule les coefficients sous la diagonale dans la première puis dans la deuxième colonne, et résous enfin à partir de la dernière équation.",
  "Vypočítaj $Ax^{(1)}$.": "Calcule $Ax^{(1)}$.",
  "Vypočítaj $P_1({@0})$. {@1}": "Calcule $P_1({@0})$. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "Calcule $\\det A = u_{11}u_{22}u_{33}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "Calcule $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} avec $n={@4}$ sous-intervalles. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "Calcule $\\ell_{@0}({@1})$. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "Calcule $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "Calcule $\\sqrt{{@0}}-\\sqrt{{@1}}$ de manière numériquement stable (sans soustraire des nombres proches). {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "Calcule $\\sum x_i$ et $\\sum y_i$ (séparés par un point-virgule).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "Calcule $\\sum x_i^2$ et $\\sum x_iy_i$ (séparés par un point-virgule).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "Calcule $f$ au milieu de l'intervalle, c.-à-d. $f({@0})$. {@1}",
  "Vypočítaj $f'(x_0)$.": "Calcule $f'(x_0)$.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Calcule $f(x_0)$ et $f'(x_0)$ et remplace dans $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Vypočítaj $f(x_0)$.": "Calcule $f(x_0)$.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "Calcule $f(x_0, y_0)$. {@0}",
  "Vypočítaj $f(x_1)$.": "Calcule $f(x_1)$.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "Calcule $f(x_1, \\tilde{y}_1)$. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "Calcule $f(x_1, y_1)$. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "Calcule $f({@0})$. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "Calcule $f[x_0, x_1, x_2]$. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "Calcule $f[x_0, x_1]$. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "Calcule $f[x_1, x_2]$. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "Calcule $k_{@0}$. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "Calcule $x^{(1)} = Ax^{(0)}$ (deux composantes séparées par un point-virgule).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "Calcule $x^{(1)}=Ax^{(0)}$, puis $Ax^{(1)}$ et le quotient des produits scalaires $x^{(1)}\\cdot Ax^{(1)}$ et $x^{(1)}\\cdot x^{(1)}$.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "Calcule $x_1 = g(x_0)$. {@0}",
  "Vypočítaj $x_1$. {@0}": "Calcule $x_1$. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "Calcule $x_2 = g(x_1)$. {@0}",
  "Vypočítaj $x_2$. {@0}": "Calcule $x_2$. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "Calcule $x_{@0}^{(1)}$. {@1}",
  "Vypočítaj $y_1$. {@0}": "Calcule $y_1$. {@0}",
  "Vypočítaj $y_2$. {@0}": "Calcule $y_2$. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "Calcule $|(x-x_0)(x-x_1)|$. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "Calcule le quotient de Rayleigh. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "Calcule l'erreur absolue $|x-\\tilde{x}|$. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "Calcule l'ordonnée à l'origine $b$. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "Calcule le dénominateur $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}",
  "Vypočítaj odhad chyby. {@0}": "Calcule l'estimation de l'erreur. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "Calcule le prédicteur $\\tilde{y}_1$. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "Calcule la contribution de l'erreur sur le côté $a$, c.-à-d. $b\\,\\Delta a$. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "Calcule la contribution de l'erreur sur le côté $b$, c.-à-d. $a\\,\\Delta b$. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "Calcule l'erreur relative sur $x$ en pourcentage. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "Calcule la pente $\\frac{y_1-y_0}{x_1-x_0}$. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "Calcule la pente $a$. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "Calcule la somme des valeurs de la fonction aux milieux des sous-intervalles. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "Calcule la somme des valeurs aux nœuds impairs $f_1{@0}$ (poids 4). {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "Calcule la somme des valeurs intérieures {@0}. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "Calcule la valeur finale de l'intégrale. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "La formule $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ n'est valable que pour une droite passant par l'origine ($b = 0$). Utilise les deux équations normales.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "Formule de la sécante : $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "Arrondis le résultat à {@0} {@1}.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "De la $i$-ième équation, exprime $x_i$ et remplaces-y les valeurs des composantes de $x^{(0)}$.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "De la $i$-ième équation, exprime $x_i$ et remplaces-y les composantes déjà recalculées $x_1, \\dots, x_{i-1}$ et les anciennes valeurs des autres.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "D'après la table, on connaît ${@0}\\approx {@1}$ et ${@2}\\approx {@3}$. Estime par interpolation linéaire la valeur de la fonction ${@4}$ au point $x={@5}$. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "Tu as oublié le facteur $x$ au numérateur : $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, et non $\\left|\\frac{f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "Tu as oublié le facteur $x$ au numérateur : $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "Tu as oublié le facteur $x$ : $\\kappa = |x\\cot x|$, et non $|\\cot x|$.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "Saisis la solution complète $x_1; x_2; x_3$.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "Tu as interverti les poids : dans la méthode de Simpson, les nœuds impairs $f_1, f_3, \\dots$ ont le poids 4 et les nœuds intérieurs pairs le poids 2.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "Tu n'as compté que l'erreur sur un seul côté. Ajoute à $b\\,\\Delta a$ aussi $a\\,\\Delta b$.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "La complexité de l'élimination de Gauss est $O(n^3)$, plus précisément environ $\\frac{2}{3}n^3$ opérations.",
  "absolútny člen $b$": "l'ordonnée à l'origine $b$",
  "centrálnej": "centrée",
  "centrálnej diferencie": "la différence centrée",
  "centrálnou": "centrée",
  "ciframi": "chiffres",
  "cifrou": "chiffre",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "le déterminant $\\det A$ comme produit des coefficients diagonaux de $U$",
  "doprednej": "progressive",
  "doprednej diferencie": "la différence progressive",
  "doprednou": "progressive",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (erreur {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (erreur {@4})</span> · exact e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · exact I = {@2} · erreur {@3}",
  "je platné 1 desatinné miesto": "1 décimale est exacte",
  "je to <strong>1</strong> platná cifra": "cela fait <strong>1</strong> chiffre significatif",
  "je to <strong>{@0}</strong> platných cifier": "cela fait <strong>{@0}</strong> chiffres significatifs",
  "lichobežníkovej metódy": "la méthode des trapèzes",
  "lichobežníkovou metódou": "par la méthode des trapèzes",
  "metódou RK4": "par la méthode RK4",
  "na polovicu": "par deux",
  "nie je platné žiadne desatinné miesto": "aucune décimale n'est exacte",
  "obdĺžnikovej (stredovej) metódy": "la méthode des rectangles (point milieu)",
  "obdĺžnikovou (stredovou) metódou": "par la méthode des rectangles (point milieu)",
  "prvok ${@0}$": "le coefficient ${@0}$",
  "smernicu $a$": "la pente $a$",
  "sú platné {@0} desatinné miesta": "{@0} décimales sont exactes",
  "sú to <strong>{@0}</strong> platné cifry": "cela fait <strong>{@0}</strong> chiffres significatifs",
  "uzly {@0}.": "nœuds {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Estimation de l'erreur : $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "par {@0}",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, erreur {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">erreur |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· Simpson : n doit être pair",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "Résous le problème {@0} par la méthode d'Euler avec le pas $h={@1}$. Calcule $y_2\\approx y({@2})$. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "Résous le problème {@0} par la méthode de Heun (méthode d'Euler améliorée) avec le pas $h={@1}$. Calcule $y_1\\approx y({@2})$. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "Le temps ne croît pas linéairement avec le nombre d'inconnues : l'élimination nécessite environ $\\frac{2}{3}n^3$ opérations.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "On remplace le nombre ${@0}$ par l'approximation ${@1}$. Quelle est l'erreur absolue de cette approximation ? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "On remplace le nombre ${@0}$ par l'approximation ${@1}$. Quelle est l'erreur relative en pourcentage ? {@2}",
  "Štart x₀": "Départ x₀"
 }
});
