/* Italiano: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/v7/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "v7-chyby": {
   "title": "Errori e precisione dei calcoli",
   "summary": "Errore assoluto e relativo, cifre significative, numeri macchina ed epsilon di macchina, propagazione degli errori, condizionamento di un problema e perdita di precisione nella sottrazione.",
   "theory": [
    "<p>Il risultato di un calcolo numerico è quasi sempre solo <strong>approssimato</strong>. Gli errori hanno diverse origini: il <em>modello</em>\n       (descrizione semplificata della realtà), i <em>dati di ingresso</em> (misure), il <em>metodo</em> (un processo infinito, per esempio una serie o un limite, viene sostituito da uno finito: errore\n       di metodo o di discretizzazione) e l'<em>arrotondamento</em> quando si calcola con un numero finito di cifre.</p>\n       <p>Se $x$ è il valore esatto e $\\tilde{x}$ una sua approssimazione, l'<strong>errore assoluto</strong> è $\\Delta = |x-\\tilde{x}|$ e l'<strong>errore relativo</strong>\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$ (per $x\\neq 0$), spesso in percentuale. Di regola il valore esatto non è noto, quindi lavoriamo con una <em>stima</em> (maggiorazione) dell'errore:\n       un numero $\\varepsilon$ per cui $|x-\\tilde{x}|\\le\\varepsilon$, e scriviamo $x=\\tilde{x}\\pm\\varepsilon$. L'errore relativo è più importante, perché non dipende dalle unità di misura:\n       un errore di 1 mm è trascurabile sulla lunghezza di un ponte, ma enorme sullo spessore di una lamiera.</p>",
    "<p><strong>Cifre significative.</strong> La cifra dell'approssimazione $\\tilde{x}$ nella posizione di ordine $10^{-k}$ è <em>corretta</em> (affidabile) se $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$.\n       Il numero di cifre significative corrette si conta dalla prima cifra non nulla a sinistra fino all'ultima corretta. Ad esempio $\\tilde{x}=23{,}4718$ con errore al massimo $0{,}004$ ha corrette due cifre decimali\n       ($0{,}004\\le 0{,}005$), cioè quattro cifre significative corrette 2, 3, 4, 7. L'<strong>arrotondamento</strong> a $k$ cifre decimali produce un errore al massimo di $\\frac{1}{2}\\cdot 10^{-k}$,\n       quindi in un numero arrotondato correttamente tutte le cifre scritte sono corrette.</p>",
    "<p><strong>Numeri macchina.</strong> Il computer memorizza i numeri reali in virgola mobile nella forma $\\pm m\\cdot\\beta^{e}$, dove $\\beta$ è la base, la mantissa $m$ ha un numero fisso\n       $t$ di cifre e l'esponente $e$ sta in un intervallo limitato. Lo standard IEEE 754 in doppia precisione (double) usa $\\beta=2$, $t=53$ bit di mantissa ed esponenti\n       circa da $-1022$ a $1023$. L'insieme dei numeri macchina è finito; al di fuori di esso si ha <em>overflow</em> (numero troppo grande) o <em>underflow</em> (numero troppo piccolo).</p>\n       <p>L'<strong>epsilon di macchina</strong> $\\varepsilon_M$ è la distanza del numero 1 dal numero macchina immediatamente più grande; per il double $\\varepsilon_M=2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.\n       Arrotondando un numero reale a un numero macchina si ottiene $\\mathrm{fl}(x)=x(1+\\eta)$, dove $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$ (unità di arrotondamento).\n       Il double porta quindi circa 15-16 cifre decimali significative. Nemmeno il numero $0{,}1$ ha una scrittura finita in base due, perciò ad esempio $0{,}1+0{,}2$ non è esattamente $0{,}3$.</p>",
    "<p><strong>Propagazione degli errori.</strong> Per le stime degli errori sui dati vale (in approssimazione lineare):\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       Per una funzione $y=f(x)$ si ha $\\Delta y\\approx|f'(x)|\\,\\Delta x$, per una funzione di più variabili $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$.\n       Nella somma si sommano quindi gli errori assoluti, nel prodotto e nel quoziente quelli relativi.</p>\n       <p><strong>Condizionamento.</strong> Un problema è <em>ben condizionato</em> se una piccola variazione relativa dei dati provoca una piccola variazione relativa del risultato. La misura è\n       il <strong>numero di condizionamento</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, per cui $\\delta y\\approx\\kappa\\,\\delta x$. Ad esempio $f(x)=\\ln x$ ha $\\kappa=\\frac{1}{|\\ln x|}$,\n       che per $x$ vicino a 1 è un numero grande: il logaritmo di un numero vicino a uno è un problema mal condizionato. Il condizionamento è una proprietà del <em>problema</em>, mentre la <em>stabilità</em> è una proprietà\n       dell'<em>algoritmo</em>: un algoritmo stabile non amplifica gli errori di arrotondamento più di quanto corrisponda al condizionamento del problema.</p>",
    "<p><strong>Perdita di precisione nella sottrazione.</strong> La differenza di due numeri vicini è mal condizionata: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$, e il denominatore è piccolo.\n       Le cifre iniziali comuni si annullano nella sottrazione e le cifre rimanenti sono affette da errore (la cosiddetta <em>cancellazione numerica</em>). Aiuta una trasformazione algebrica che elimini la sottrazione:\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "Sostituiamo il numero $\\pi$ con il valore $3{,}14$. Determina l'errore assoluto e relativo e il numero di cifre significative corrette dell'approssimazione.",
     "steps": [
      "$\\Delta=|\\pi-3{,}14|=|3{,}14159\\ldots-3{,}14|\\approx 0{,}00159$.",
      "$\\delta=\\frac{0{,}00159}{3{,}14159}\\approx 0{,}000507=0{,}0507\\,\\%$.",
      "Poiché $0{,}00159\\le 0{,}005=\\frac{1}{2}\\cdot 10^{-2}$, sono corrette due cifre decimali. L'approssimazione $3{,}14$ ha <strong>3 cifre significative corrette</strong>."
     ]
    },
    {
     "task": "La radice più piccola dell'equazione $x^2-200x+1=0$ è $x=100-\\sqrt{9999}$. Calcolala in un'aritmetica a 4 cifre significative, direttamente e dopo una trasformazione che elimini la sottrazione.",
     "steps": [
      "A 4 cifre significative $\\sqrt{9999}=99{,}99499\\ldots\\approx 100{,}0$. Il calcolo diretto dà $100-100{,}0=0$: tutte le cifre sono andate perse, l'errore relativo è del 100 %.",
      "Razionalizziamo: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "Ora $\\frac{1}{100+100{,}0}=\\frac{1}{200{,}0}=0{,}005000$. Il valore esatto è $0{,}0050001250\\ldots$, quindi il risultato ha tutte e 4 le cifre corrette.",
      "Il problema in sé è ben condizionato, era sbagliato solo l'algoritmo (sottrazione di numeri vicini)."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "Risoluzione numerica di equazioni",
   "summary": "Separazione delle radici, metodo di bisezione, iterazione di punto fisso, metodo di Newton e metodo delle secanti, ordine di convergenza e criteri di arresto.",
   "theory": [
    "<p>Cerchiamo una radice $\\xi$ dell'equazione $f(x)=0$ che non si può esprimere con una formula (ad esempio $x=\\cos x$ oppure $x^5-x-1=0$). Prima <strong>separiamo</strong> la radice: troviamo un intervallo\n       $[a, b]$ in cui si trova esattamente una radice. Per il <strong>teorema di Bolzano</strong> (degli zeri) una funzione continua con $f(a)\\,f(b)&lt;0$ ha nell'intervallo $(a, b)$ almeno una radice; se inoltre\n       $f'$ non cambia segno su $[a, b]$, la radice è unica.</p>\n       <p><strong>Metodo di bisezione.</strong> Calcoliamo il punto medio $c=\\frac{a+b}{2}$. Se $f(a)\\,f(c)&lt;0$, proseguiamo con $[a, c]$, altrimenti con $[c, b]$. Ogni passo\n       dimezza l'intervallo; dopo $n$ passi ha lunghezza $\\frac{b-a}{2^n}$. Per ottenere una lunghezza al massimo $\\varepsilon$ servono $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ passi.\n       Il metodo è lento, ma converge <em>sempre</em> e richiede solo i segni dei valori della funzione.</p>",
    "<p><strong>Metodo di iterazione di punto fisso.</strong> Riscriviamo l'equazione nella forma $x=g(x)$ e calcoliamo $x_{k+1}=g(x_k)$. Se $g$ manda l'intervallo $I$ in sé e\n       $|g'(x)|\\le q&lt;1$ su $I$, allora $g$ ha in $I$ un unico <em>punto fisso</em> $\\xi$ e la successione converge a esso per ogni punto iniziale $x_0\\in I$ (teorema del punto fisso di Banach).\n       Valgono le stime\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       La scelta della forma è importante: l'equazione $x^2-2=0$ si può scrivere come $x=\\frac{2}{x}$ (le iterazioni oscillano, $|g'(\\sqrt{2})|=1$) oppure $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (convergenza molto rapida).</p>",
    "<p><strong>Metodo di Newton (metodo delle tangenti).</strong> Sostituiamo il grafico della funzione nel punto $x_k$ con la tangente e prendiamo come approssimazione successiva la sua intersezione con l'asse $x$:\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       Per una radice semplice ($f'(\\xi)\\neq 0$) e un punto iniziale abbastanza vicino alla radice converge in modo <strong>quadratico</strong>: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$,\n       il numero di cifre corrette all'incirca raddoppia a ogni passo. <em>Condizione di Fourier:</em> se $f'$ e $f''$ non cambiano segno su $[a, b]$ e partiamo dall'estremo\n       in cui $f(x_0)\\,f''(x_0)&gt;0$, le iterazioni convergono in modo monotono. Da un punto iniziale sbagliato il metodo può saltare lontano; per una radice multipla converge solo linearmente.</p>",
    {
     "fig": "v7-newton",
     "caption": "Metodo di Newton per $f(x)=x^2-2$: dal punto $[x_k; f(x_k)]$ tracciamo la tangente e la sua intersezione con l'asse $x$ è $x_{k+1}$. Già dopo tre passi l'approssimazione di $\\sqrt{2}$ ha un errore dell'ordine di $10^{-6}$-$10^{-12}$."
    },
    "<p>Il <strong>metodo delle secanti</strong> sostituisce la derivata con il rapporto incrementale delle ultime due approssimazioni:\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       Non richiede la derivata e converge con ordine $\\frac{1+\\sqrt{5}}{2}\\approx 1{,}618$. Se tracciamo la secante sempre per punti con segni opposti (come nella bisezione),\n       otteniamo la <em>regula falsi</em>, che converge sempre, ma di solito solo linearmente.</p>\n       <p><strong>Ordine di convergenza.</strong> Un metodo ha ordine $p$ se $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$; per $p=1$ (convergenza lineare) deve essere $C&lt;1$. La bisezione e l'iterazione di punto fisso\n       hanno ordine 1, le secanti ordine $1{,}618$, il metodo di Newton ordine 2. <strong>Criteri di arresto:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, in forma relativa $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$ e sempre anche un numero massimo di iterazioni. Un $|f(x_k)|$ piccolo da solo non garantisce la vicinanza alla radice, se la funzione è molto piatta.</p>"
   ],
   "examples": [
    {
     "task": "Con il metodo di Newton trova $\\sqrt{5}$ come radice della funzione $f(x)=x^2-5$, partendo dal punto $x_0=2$, ed esegui due passi.",
     "steps": [
      "$f'(x)=2x$, quindi $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2{,}25$.",
      "$x_2=2{,}25-\\frac{2{,}25^2-5}{4{,}5}=2{,}25-\\frac{0{,}0625}{4{,}5}\\approx 2{,}236111$.",
      "Esattamente $\\sqrt{5}=2{,}236068\\ldots$: l'errore è sceso da $0{,}014$ a $0{,}00004$, il che corrisponde a una convergenza quadratica."
     ]
    },
    {
     "task": "Con la bisezione localizza la radice dell'equazione $x^3-x-1=0$ sull'intervallo $[1; 2]$ (tre passi). Quanti passi servirebbero per un intervallo di lunghezza al massimo $10^{-6}$?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$, la radice sta in $[1; 2]$.",
      "$f(1{,}5)=0{,}875&gt;0$ → $[1; 1{,}5]$. $f(1{,}25)\\approx-0{,}297&lt;0$ → $[1{,}25; 1{,}5]$. $f(1{,}375)\\approx 0{,}225&gt;0$ → $[1{,}25; 1{,}375]$.",
      "Dopo $n$ passi l'intervallo ha lunghezza $2^{-n}$. La condizione $2^{-n}\\le 10^{-6}$ dà $n\\ge 6\\log_2 10\\approx 19{,}93$, cioè <strong>20 passi</strong>.",
      "La radice è $\\xi\\approx 1{,}3247$; il metodo di Newton raggiungerebbe la stessa precisione in 4-5 passi."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "Interpolazione e approssimazione",
   "summary": "Polinomio interpolante nella forma di Lagrange e di Newton, differenze divise, errore di interpolazione, fenomeno di Runge e metodo dei minimi quadrati.",
   "theory": [
    "<p><strong>Il problema dell'interpolazione.</strong> Sono dati <em>nodi</em> distinti $x_0, x_1, \\dots, x_n$ e valori $y_0, y_1, \\dots, y_n$ (ad esempio misurati o presi da una tabella).\n       Cerchiamo un polinomio $P_n$ di grado al massimo $n$ per cui $P_n(x_i)=y_i$ per ogni $i$. Tale polinomio esiste ed è <strong>unico</strong>: le condizioni formano un sistema\n       con la matrice di Vandermonde, il cui determinante $\\prod_{i&lt;j}(x_j-x_i)$ è diverso da zero. Il polinomio si usa poi per calcolare valori tra i nodi.</p>",
    "<p><strong>Forma di Lagrange.</strong> Per ogni nodo costruiamo un polinomio di base che vale 1 in quel nodo e 0 negli altri nodi:\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       Con due nodi otteniamo l'<em>interpolazione lineare</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$. La forma di Lagrange è chiara, ma aggiungendo un nodo bisogna ricalcolare tutto.</p>",
    "<p><strong>Forma di Newton e differenze divise.</strong> Le differenze divise si definiscono per ricorrenza:\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       Allora\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       Le differenze si calcolano in una tabella triangolare e aggiungere un nodo significa solo aggiungere un termine. Il valore del polinomio si calcola in modo economico con lo schema di Horner.</p>",
    "<p><strong>Errore di interpolazione.</strong> Se $f$ ha derivata continua di ordine $n+1$, per ogni $x$ esiste $\\xi$ nel più piccolo intervallo contenente $x$ e i nodi, per cui\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       Da qui la stima $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$, dove $M_{n+1}=\\max|f^{(n+1)}|$. Nell'interpolazione lineare con passo $h$ l'errore è al massimo $\\frac{M_2h^2}{8}$.\n       Aumentare il grado su nodi equidistanti può non servire: per la funzione $\\frac{1}{1+25x^2}$ su $[-1; 1]$ il polinomio oscilla fortemente vicino agli estremi (<strong>fenomeno di Runge</strong>).\n       La soluzione sono i nodi di Chebyshev, più fitti verso gli estremi, oppure l'interpolazione polinomiale a tratti (spline).</p>",
    "<p><strong>Metodo dei minimi quadrati.</strong> I dati misurati contengono errori, quindi non vogliamo farvi passare un polinomio di grado elevato, ma una funzione semplice che li\n       <em>approssimi</em>. Scegliamo la retta $y=ax+b$ in modo che la somma dei quadrati degli scarti $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ sia minima. Dalle condizioni\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ otteniamo le <strong>equazioni normali</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       con soluzione $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$. La retta passa per il baricentro dei dati $[\\bar{x}; \\bar{y}]$.</p>"
   ],
   "examples": [
    {
     "task": "Trova il valore del polinomio interpolante per i punti $[0; 1]$, $[1; 3]$, $[3; 2]$ nel punto $x=2$, sia nella forma di Lagrange sia in quella di Newton.",
     "steps": [
      "Lagrange: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3{,}333$.",
      "Newton: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$, quindi $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$: lo stesso polinomio, scritto in modo diverso."
     ]
    },
    {
     "task": "Con il metodo dei minimi quadrati determina la retta che approssima i punti $[0; 1]$, $[1; 2]$, $[2; 4]$, $[3; 4]$.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1{,}1$.",
      "$b=\\frac{11-1{,}1\\cdot 6}{4}=\\frac{4{,}4}{4}=1{,}1$.",
      "La retta cercata è $y=1{,}1x+1{,}1$; passa per il baricentro $[1{,}5; 2{,}75]$."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "Derivazione e integrazione numerica",
   "summary": "Differenza in avanti e centrale, scelta del passo, metodo dei rettangoli, dei trapezi e di Simpson, ordine di accuratezza e stima dell'errore.",
   "theory": [
    "<p><strong>Derivazione numerica.</strong> Dallo sviluppo di Taylor $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ otteniamo le formule\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{differenza in avanti, errore }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{differenza centrale, errore }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       La differenza in avanti (come anche quella all'indietro $\\frac{f(x)-f(x-h)}{h}$) ha <strong>ordine di accuratezza 1</strong>, quella centrale <strong>ordine 2</strong>: dimezzando il passo l'errore si riduce circa\n       di due volte, rispettivamente di quattro volte. Per la derivata seconda si usa $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$ con errore $O(h^2)$.</p>",
    "<p><strong>Scelta del passo.</strong> Il passo non si può ridurre all'infinito. Al numeratore sottraiamo due valori vicini, quindi l'errore di arrotondamento è dell'ordine di $\\frac{\\varepsilon_M|f(x)|}{h}$\n       e al diminuire di $h$ <em>cresce</em>. L'errore totale della differenza in avanti $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ è minimo circa per $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$,\n       per la differenza centrale per $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$. La derivazione numerica è quindi un problema mal condizionato, a differenza dell'integrazione.</p>",
    "<p><strong>Formule di quadratura.</strong> Dividiamo l'intervallo $[a, b]$ in $n$ sottointervalli con passo $h=\\frac{b-a}{n}$; i nodi sono $x_i=a+ih$ e $f_i=f(x_i)$. Su ogni sottointervallo sostituiamo\n       la funzione con un polinomio e integriamo quest'ultimo in modo esatto:</p>\n       <ul><li><strong>metodo dei rettangoli (del punto medio)</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, errore $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>\n       <li><strong>metodo dei trapezi</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, errore $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>\n       <li><strong>metodo di Simpson</strong> ($n$ pari, una parabola su ogni coppia di sottointervalli) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, errore $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "Metodo dei trapezi per $f(x)=2+\\sin 1{,}5x+0{,}3x$ su $[0; 4]$. Aumenta il numero di sottointervalli e osserva come l'errore diminuisce circa con il quadrato del passo; con $n$ pari compare anche il risultato del metodo di Simpson."
    },
    "<p><strong>Ordine di accuratezza.</strong> L'errore di una formula composta si comporta come $Ch^p$. Il metodo dei rettangoli e quello dei trapezi hanno $p=2$ (passo dimezzato → errore quattro volte più piccolo),\n       quello di Simpson $p=4$ (sedici volte più piccolo) ed è esatto per i polinomi fino al terzo grado compreso. Il metodo del punto medio ha un errore circa la metà di quello dei trapezi e di segno opposto,\n       perciò $S_{2n}=\\frac{2M_n+T_n}{3}$. Da due calcoli con passi $h$ e $\\frac{h}{2}$ stimiamo l'errore con la <strong>regola di Runge</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$\n       e il risultato migliorato $\\frac{4T_{2n}-T_n}{3}$ è proprio la formula di Simpson (estrapolazione di Richardson, su cui si basa il metodo di Romberg).</p>"
   ],
   "examples": [
    {
     "task": "Stima $f'(0)$ per $f(x)=e^x$ con passo $h=0{,}1$ mediante la differenza in avanti e quella centrale e confronta gli errori.",
     "steps": [
      "In avanti: $\\frac{e^{0{,}1}-1}{0{,}1}=\\frac{0{,}105171}{0{,}1}\\approx 1{,}051709$, errore $\\approx 0{,}0517$.",
      "Centrale: $\\frac{e^{0{,}1}-e^{-0{,}1}}{0{,}2}\\approx\\frac{1{,}105171-0{,}904837}{0{,}2}\\approx 1{,}001668$, errore $\\approx 0{,}0017$.",
      "Esattamente $f'(0)=1$. Le stime degli errori $\\frac{h}{2}f''=0{,}05$ e $\\frac{h^2}{6}f'''\\approx 0{,}0017$ concordano bene con il risultato."
     ]
    },
    {
     "task": "Calcola $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0{,}785398$ con il metodo dei trapezi e con quello di Simpson con $n=2$.",
     "steps": [
      "$h=0{,}5$, $f(0)=1$, $f(0{,}5)=0{,}8$, $f(1)=0{,}5$.",
      "$T_2=\\frac{0{,}5}{2}(1+2\\cdot 0{,}8+0{,}5)=0{,}25\\cdot 3{,}1=0{,}775$, errore $\\approx 0{,}0104$.",
      "$S_2=\\frac{0{,}5}{3}(1+4\\cdot 0{,}8+0{,}5)=\\frac{0{,}5\\cdot 4{,}7}{3}\\approx 0{,}783333$, errore $\\approx 0{,}0021$.",
      "A parità di numero di valutazioni della funzione, il metodo di Simpson è molto più preciso."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "Risoluzione numerica di equazioni differenziali",
   "summary": "Problema di Cauchy, metodo di Eulero, metodo di Heun (Eulero migliorato), metodo di Runge-Kutta del 4° ordine, errore locale e globale, scelta del passo e stabilità.",
   "theory": [
    "<p>Risolviamo il <strong>problema di Cauchy</strong> $y'=f(x, y)$, $y(x_0)=y_0$, che di solito non sappiamo risolvere analiticamente. Scegliamo un <strong>passo</strong> $h$ e i nodi $x_k=x_0+kh$ e calcoliamo\n       via via le approssimazioni $y_k\\approx y(x_k)$. I metodi a un passo calcolano $y_{k+1}$ solo dalla coppia $[x_k; y_k]$. L'<strong>errore locale</strong> è l'errore di un singolo passo\n       (supponendo $y_k$ esatto), l'<strong>errore globale</strong> $y(x_k)-y_k$ è l'errore accumulato nel nodo. Se l'errore locale è $O(h^{p+1})$, dopo $\\frac{X-x_0}{h}$ passi\n       l'errore globale è $O(h^p)$ e diciamo che il metodo ha <strong>ordine</strong> $p$.</p>",
    "<p><strong>Metodo di Eulero.</strong> Sul sottointervallo $[x_k, x_{k+1}]$ sostituiamo la soluzione con la tangente di pendenza $f(x_k, y_k)$ presa dal campo di direzioni:\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       È il metodo più semplice, del primo ordine: errore locale $\\frac{h^2}{2}y''(\\xi)$, globale $O(h)$. Dimezzando il passo l'errore si riduce solo circa della metà, perciò in pratica\n       si usa piuttosto come punto di partenza per metodi più precisi.</p>",
    {
     "fig": "v7-euler",
     "caption": "Problema $y'=y$, $y(0)=1$ su $[0; 2]$ con soluzione esatta $y=e^x$ (curva nera). Il metodo di Eulero (blu) resta sistematicamente indietro, quello di Heun (verde) è molto più preciso a parità di passo. Aumenta il numero di passi e confronta la rapidità con cui diminuiscono gli errori."
    },
    "<p>Il <strong>metodo di Heun (Eulero migliorato)</strong> è di tipo predittore-correttore: con un passo di Eulero stimiamo il valore alla fine del sottointervallo e poi facciamo la media delle pendenze:\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       Corrisponde alla regola dei trapezi e ha <strong>ordine 2</strong>. Simile è il <em>metodo di Eulero modificato (del punto medio)</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$.</p>\n       <p>Il <strong>metodo di Runge-Kutta del 4° ordine (RK4)</strong> valuta a ogni passo quattro pendenze\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       e ne prende la media pesata $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$, analoga alla regola di Simpson. Dimezzando il passo l'errore si riduce di circa 16 volte.</p>",
    "<p><strong>Passo ed errore.</strong> Per un metodo di ordine $p$ l'errore globale è circa $Ch^p$. Da due calcoli con passi $h$ e $\\frac{h}{2}$ lo stimiamo con la <strong>regola di Runge</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. I programmi moderni adattano il passo (passo adattivo, ad esempio coppie di metodi di Runge-Kutta di ordini diversi).\n       Un passo più piccolo non significa sempre un risultato migliore: crescono il numero di operazioni e gli errori di arrotondamento.</p>\n       <p><strong>Stabilità.</strong> Per l'equazione test $y'=\\lambda y$ con $\\lambda&lt;0$ il metodo di Eulero dà $y_{k+1}=(1+h\\lambda)y_k$; la soluzione numerica tende a zero solo se\n       $|1+h\\lambda|&lt;1$, cioè $h&lt;\\frac{2}{|\\lambda|}$. Con un passo maggiore oscilla e cresce, benché la soluzione esatta decresca rapidamente. Le equazioni con scale temporali molto diverse\n       (equazioni <em>stiff</em>) si risolvono quindi con metodi impliciti, ad esempio il metodo di Eulero implicito $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$, che è stabile per ogni $h&gt;0$.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi il problema $y'=y$, $y(0)=1$ con passo $h=0{,}5$ con il metodo di Eulero e con quello di Heun fino a $x=1$ e confronta con $e\\approx 2{,}71828$.",
     "steps": [
      "Eulero: $y_1=1+0{,}5\\cdot 1=1{,}5$, $y_2=1{,}5+0{,}5\\cdot 1{,}5=2{,}25$, errore $\\approx 0{,}468$.",
      "Heun, 1° passo: predittore $\\tilde{y}_1=1{,}5$, $y_1=1+0{,}25\\,(1+1{,}5)=1{,}625$.",
      "Heun, 2° passo: $\\tilde{y}_2=1{,}625+0{,}5\\cdot 1{,}625=2{,}4375$, $y_2=1{,}625+0{,}25\\,(1{,}625+2{,}4375)=2{,}640625$, errore $\\approx 0{,}078$.",
      "A parità di passo il metodo di Heun è circa sei volte più preciso."
     ]
    },
    {
     "task": "Esegui un passo del metodo RK4 con passo $h=0{,}1$ per il problema $y'=x+y$, $y(0)=1$. La soluzione esatta è $y=2e^x-x-1$.",
     "steps": [
      "$k_1=f(0; 1)=1$, $k_2=f(0{,}05;\\ 1+0{,}05\\cdot 1)=0{,}05+1{,}05=1{,}1$.",
      "$k_3=f(0{,}05;\\ 1+0{,}05\\cdot 1{,}1)=0{,}05+1{,}055=1{,}105$, $k_4=f(0{,}1;\\ 1+0{,}1\\cdot 1{,}105)=0{,}1+1{,}1105=1{,}2105$.",
      "$y_1=1+\\frac{0{,}1}{6}(1+2{,}2+2{,}21+1{,}2105)=1+\\frac{0{,}66205}{6}\\approx 1{,}1103417$.",
      "Esattamente $y(0{,}1)=2e^{0{,}1}-1{,}1\\approx 1{,}1103418$, l'errore è circa $10^{-7}$."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "Algoritmi per le matrici",
   "summary": "Eliminazione di Gauss con pivoting, fattorizzazione LU, complessità dei metodi diretti, iterazione di Jacobi e di Gauss-Seidel, metodo delle potenze per l'autovalore dominante.",
   "theory": [
    "<p>L'<strong>eliminazione di Gauss</strong> risolve il sistema $Ax=b$ con matrice non singolare $n\\times n$ in due fasi. Nella <em>fase in avanti</em>, per $k=1, \\dots, n-1$,\n       sottraiamo dalle righe $i&gt;k$ un multiplo della $k$-esima riga con <strong>moltiplicatore</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$, in modo che sotto la diagonale compaiano zeri e la matrice\n       diventi triangolare superiore. Con la <em>sostituzione all'indietro</em> calcoliamo $x_n, x_{n-1}, \\dots, x_1$ sostituendo dal basso verso l'alto.</p>\n       <p>Se l'<em>elemento pivot</em> $a_{kk}$ è nullo o molto piccolo, i moltiplicatori sono enormi e gli errori di arrotondamento crescono. Per questo si usa\n       il <strong>pivoting parziale</strong>: prima del $k$-esimo passo scambiamo le righe in modo che $|a_{kk}|$ sia il più grande nella $k$-esima colonna, sulla diagonale e sotto di essa. Allora $|l_{ik}|\\le 1$.</p>",
    "<p><strong>Fattorizzazione LU.</strong> I moltiplicatori della fase in avanti formano una matrice triangolare inferiore $L$ con uni sulla diagonale e la matrice triangolare superiore risultante è $U$; vale\n       $A=LU$ (con pivoting $PA=LU$, dove $P$ è una matrice di permutazione). Il sistema si risolve allora con due sistemi triangolari:\n       $$Ly=b\\ \\text{(sostituzione in avanti)},\\qquad Ux=y\\ \\text{(sostituzione all'indietro)}.$$\n       La fattorizzazione conviene quando risolviamo più sistemi con la stessa matrice e diversi termini noti. Otteniamo anche il determinante $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.\n       Per le matrici simmetriche definite positive esiste la più economica <em>fattorizzazione di Cholesky</em> $A=LL^{T}$.</p>",
    "<p><strong>Complessità.</strong> La fase in avanti dell'eliminazione di Gauss costa circa $\\frac{2}{3}n^3$ operazioni aritmetiche, ogni sostituzione triangolare circa $n^2$. Raddoppiando\n       la dimensione il tempo dell'eliminazione aumenta di circa otto volte. Per risolvere un sistema non serve calcolare la matrice inversa (circa $2n^3$ operazioni). Per le matrici <em>a banda</em> di larghezza $w$ il costo\n       scende a $O(nw^2)$, per quelle tridiagonali a $O(n)$. Con grandi matrici <em>sparse</em> (la maggior parte degli elementi nulli) l'eliminazione riempie gli zeri, perciò si usano i metodi iterativi.</p>",
    "<p><strong>Metodi iterativi.</strong> Dall'$i$-esima equazione ricaviamo $x_i$ e sostituiamo l'approssimazione precedente. Il <strong>metodo di Jacobi</strong> usa solo i valori del passo precedente,\n       quello di <strong>Gauss-Seidel</strong> sfrutta subito le componenti già ricalcolate:\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       Entrambi i metodi convergono per ogni punto iniziale se la matrice è <strong>a dominanza diagonale stretta</strong> ($|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$ per ogni riga); quello di Gauss-Seidel anche per una matrice simmetrica\n       definita positiva. Un passo costa all'incirca tante operazioni quanti sono gli elementi non nulli della matrice. Ci fermiamo quando $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ o quando il residuo $\\|b-Ax^{(k)}\\|$ è piccolo.</p>",
    "<p><strong>Metodo delle potenze.</strong> Supponiamo che la matrice $A$ abbia autovalori $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ (l'autovalore dominante $\\lambda_1$ è l'unico di modulo massimo).\n       La moltiplicazione ripetuta $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ amplifica la componente nella direzione dell'autovettore $v_1$, così $x^{(k)}$ si avvicina a $\\pm v_1$ con velocità $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$.\n       L'autovalore si stima con il <strong>quoziente di Rayleigh</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ oppure con il rapporto delle componenti corrispondenti $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$.\n       L'autovalore di modulo minimo si trova con il <em>metodo delle potenze inverse</em> (metodo delle potenze per $A^{-1}$; a ogni passo si risolve un sistema con la fattorizzazione LU). Su questo principio\n       si basa anche il ranking delle pagine web PageRank.</p>"
   ],
   "examples": [
    {
     "task": "Trova la fattorizzazione LU della matrice $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ e risolvi $Ax=b$ per $b=(4;\\ 10;\\ 24)^{T}$.",
     "steps": [
      "1° passo: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; le righe diventano $(0, 1, 1)$ e $(0, 3, 5)$.",
      "2° passo: $l_{32}=\\frac{3}{1}=3$; terza riga $(0, 0, 2)$. Quindi $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Soluzione $x=(1;\\ 1;\\ 1)^{T}$, inoltre $\\det A=2\\cdot 1\\cdot 2=4$."
     ]
    },
    {
     "task": "Risolvi il sistema $4x_1-x_2=7$, $x_1+3x_2=5$ (soluzione $x=(2;\\ 1)$) partendo dal punto $(0;\\ 0)$ con due passi del metodo di Jacobi e di quello di Gauss-Seidel.",
     "steps": [
      "Formule iterative: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. La matrice è a dominanza diagonale ($4&gt;1$, $3&gt;1$), entrambi i metodi convergono.",
      "Jacobi: $x^{(1)}=(1{,}75;\\ 1{,}6667)$, $x^{(2)}=\\left(\\frac{7+1{,}6667}{4};\\ \\frac{5-1{,}75}{3}\\right)=(2{,}1667;\\ 1{,}0833)$.",
      "Gauss-Seidel: $x_1^{(1)}=1{,}75$, subito $x_2^{(1)}=\\frac{5-1{,}75}{3}=1{,}0833$; $x_1^{(2)}=\\frac{7+1{,}0833}{4}=2{,}0208$, $x_2^{(2)}=\\frac{5-2{,}0208}{3}=0{,}9931$.",
      "Dopo due passi il metodo di Gauss-Seidel ha un errore di circa $0{,}02$, quello di Jacobi di circa $0{,}17$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Il valore esatto è ${@5}$.)",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. In una potenza l'errore relativo si moltiplica per l'esponente: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, cioè circa il ${@6}\\,\\%$.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Vicino a $\\pi$ il seno è piccolo e il problema è mal condizionato.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ è crescente, quindi $M_2=e^{{@0}}\\approx {@1}$.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$, quindi $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. La sottrazione di numeri vicini è mal condizionata.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$, quindi $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Esattamente $\\sqrt{{@5}}\\approx {@6}$.)",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$, quindi $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Esattamente $f'({@8})\\approx {@9}$, l'errore è circa ${@10}$.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Esattamente $f'({@8})\\approx {@9}$, l'errore è circa ${@10}$.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Esattamente $\\sqrt{{@6}}\\approx {@7}$.)",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, predittore $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. L'intervallo risultante è $[{@5};\\ {@6}]$.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Il valore esatto è ${@6}$, l'errore circa ${@7}$.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Quoziente di Rayleigh: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. L'autovalore dominante esatto è $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Calcoliamo in radianti e non arrotondiamo i risultati intermedi.)",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$, quindi $M_2=1$.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, errore assoluto $\\Delta\\approx {@2}$. Errore relativo $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, cioè circa il ${@7}\\,\\%$.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$, quindi $\\Delta=|{@2}-{@3}|\\approx {@4}$.",
  "(tu len $f_1$)": "(qui solo $f_1$)",
  ", ale ${@0}&gt;{@1}$": ", ma ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "L'errore assoluto è $|x-\\tilde{x}|$. Prendi il valore della costante con un numero sufficiente di cifre (dalla calcolatrice).",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "Se l'errore è circa $Ch^p$, ridurre il passo di $k$ volte riduce l'errore di $k^p$ volte. Il metodo dei trapezi e quello del punto medio hanno $p=2$, quello di Simpson $p=4$.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "Qual è il limite dell'errore assoluto dell'area? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "Qual è l'errore relativo di $x^{{@0}}$ in percentuale? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "Qual è l'errore relativo in percentuale? {@0}",
  "Aký interval dostaneš po druhom kroku?": "Che intervallo ottieni dopo il secondo passo?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "Che intervallo ottieni dopo il primo passo? (separa gli estremi con il punto e virgola)",
  "Aký je krok $h$?": "Quanto vale il passo $h$?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "Quanto vale il moltiplicatore $l_{21}$ (multiplo della prima equazione da sottrarre alla seconda)?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "Quanto vale il moltiplicatore $l_{32}$ nel secondo passo dell'eliminazione?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "L'approssimazione $\\tilde{x}={@0}$ ha errore assoluto al massimo ${@1}$. Quante cifre significative ha?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "Differenza centrale: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Calcola le funzioni goniometriche in radianti.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "L'errore è proporzionale a $h^{p}$, quindi si riduce di $k^{p}$ volte, non di $k\\cdot p$ volte.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "L'errore dell'interpolazione lineare è $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; al posto di $f''(\\xi)$ sostituisci il massimo del valore assoluto della derivata seconda sull'intervallo.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "L'errore non è proporzionale a $h$ stesso, ma a $h^{p}$, dove $p$ è l'ordine di accuratezza del metodo.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "L'errore non si riduce in proporzione al passo: il metodo ha ordine {@0}, quindi l'errore è proporzionale a $h^{{@1}}$.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "L'errore {@0} è proporzionale a $h^{{@1}}$ (ordine di accuratezza {@2}). Con il passo $\\frac{h}{{@3}}$ si riduce di ${@4}^{{@5}}={@6}$ volte.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "Gli errori dei lati non si moltiplicano. La stima lineare è $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "La cifra al posto $10^{-j}$ è significativa se l'errore non supera $\\frac{1}{2}\\cdot 10^{-j}$. Si ha ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, quindi {@4}. Contando anche {@5} {@6} prima della virgola, {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "La derivata di $x^2 - a$ è $2x$, non $x$.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "Differenza in avanti: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Calcola le funzioni goniometriche in radianti.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "Sostituisci $x_0$ in $g$, poi sostituisci di nuovo il risultato in $g$. Non arrotondare i risultati intermedi.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "Sostituisci in $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; la derivata di $x-c$ è 1.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "Sostituisci nella formula della differenza {@0}. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "Passo di Eulero: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, dove $x_k=kh$. Fai due passi.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "Metodo di Eulero e metodo di Heun per y' = y, y(0) = 1",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "Il metodo di Eulero ha ordine 1, quello di Heun ordine 2, RK4 ordine 4. L'errore è circa $Ch^p$.",
  "Eulerovou metódou": "con il metodo di Eulero",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "Sostituiamo la funzione $f(x)={@0}$ sull'intervallo $[{@1};\\ {@2}]$ con l'interpolazione lineare. Stima dall'alto l'errore di interpolazione nel punto $x={@3}$ con la formula $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "L'eliminazione di Gauss di un sistema con ${@0}$ incognite richiede su un certo computer ${@1}$ s. Circa quanti secondi richiederà un sistema con ${@2}$ incognite (matrice piena)?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "Risolvi con l'eliminazione di Gauss il sistema {@0}. Scrivi $x_1; x_2; x_3$ separati dal punto e virgola.",
  "Gaussovou–Seidelovou": "Gauss–Seidel",
  "Heunovou metódou": "con il metodo di Heun",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "Il valore $x={@0}\\pm {@1}$. Stima l'errore relativo dell'espressione $x^{{@2}}$ in percentuale. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "Cerca il più piccolo $n$ con $2^n$ almeno altrettanto grande.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "Cerca il più piccolo ordine $10^{-k}$ per cui l'errore non supera $\\frac{1}{2}\\cdot 10^{-k}$.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "Il polinomio interpolante di 2° grado passa per i punti {@0}. Calcola il suo valore nel punto $x={@1}$. {@2}",
  "Jacobiho": "Jacobi",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "La calcolatrice è impostata in gradi. Nei metodi numerici le funzioni goniometriche si calcolano in radianti.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "La calcolatrice è impostata in gradi. Derivando le funzioni goniometriche si calcola in radianti.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "Ogni passo di bisezione dimezza soltanto l'intervallo, quindi serve il logaritmo in base 2, non 10.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "La radice sta in un intervallo di lunghezza ${@0}$. Quanti passi di bisezione servono come minimo perché l'intervallo risultante abbia lunghezza al massimo ${@1}$?",
  "Koľko desatinných miest je platných?": "Quante cifre decimali sono significative?",
  "Koľko najmenej krokov bisekcie treba?": "Quanti passi di bisezione servono come minimo?",
  "Koľko platných cifier má aproximácia celkovo?": "Quante cifre significative ha l'approssimazione in tutto?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "Di quante volte bisogna ridurre l'intervallo, cioè quanto vale $\\frac{b-a}{\\varepsilon}$?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "I valori estremi $f_0$ e $f_n$ nel metodo dei trapezi hanno peso $\\frac{h}{2}$, quelli interni $h$. Gli estremi vanno contati solo a metà.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "Riduciamo il passo $h$ {@0}. Circa di quante volte si riduce l'errore {@1} (per una funzione regolare)?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "Cresce quadraticamente solo il costo della sostituzione triangolare. La fase in avanti dell'eliminazione ha complessità $O(n^3)$.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "Polinomi della base di Lagrange nel punto ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "Metodo dei trapezi per una funzione sull'intervallo da 0 a 4",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "Metodo dei trapezi: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "Interpolazione lineare: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "Il metodo ha ordine {@0}, l'errore globale è circa $Ch^{{@1}}$. Con il passo $\\frac{h}{{@2}}$ si riduce di ${@3}^{{@4}}={@5}$ volte: $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "Con il metodo dei minimi quadrati fai passare la retta $y=ax+b$ per i punti {@0}. Determina {@1}. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "Con il metodo delle potenze stimiamo l'autovalore dominante della matrice simmetrica $A={@0}$. Partendo da $x^{(0)}=(1;\\ 1)^{T}$ calcola $x^{(1)}=Ax^{(0)}$ e il quoziente di Rayleigh $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "Il moltiplicatore $l_{32}$ si calcola dalla matrice modificata dopo il primo passo dell'eliminazione, non dall'elemento originale $a_{32}$.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "Moltiplicatore $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (dalla matrice attuale, già modificata); dalla riga $i$-esima sottrai $l_{ik}$ volte la riga $k$-esima. La matrice triangolare superiore risultante è $U$.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "Il moltiplicatore è il quoziente $l_{21} = \\frac{a_{21}}{a_{11}}$; l'elemento va diviso per il pivot.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "Il moltiplicatore è il quoziente $l_{31} = \\frac{a_{31}}{a_{11}}$; l'elemento va diviso per il pivot.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "Moltiplicatori: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; dopo il primo passo la seconda riga ha la forma $(0, {@6}, {@7})$ e la terza $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "Prima il predittore di Eulero $\\tilde{y}_1=y_0+hf(x_0, y_0)$, poi $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "Calcola prima le differenze del primo ordine $f[x_0, x_1]$ e $f[x_1, x_2]$, poi dividi la loro differenza per $x_2-x_0$.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "Il passo di Newton è $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; la frazione si sottrae, non si somma.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Il passo di Newton è $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "Metodo di Newton: tangenti al grafico di y = x² − 2",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "Con il metodo di Newton cerchiamo $\\sqrt{{@0}}$ come radice della funzione $f(x)=x^2-{@1}$. Calcola $x_1$ partendo da $x_0={@2}$. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "Equazioni normali: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; da esse $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "Trova la decomposizione LU (senza scambi di righe, $L$ ha uni sulla diagonale) della matrice $A={@0}$ e determina {@1}.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "Trova il più piccolo ordine $10^{-k}$ per cui vale ancora $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ e conta le cifre dalla prima non nulla fino a quest'ordine.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "Metodo del punto medio: $M_n=h\\sum f(\\text{punto medio del sottointervallo})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "Stima la derivata della funzione $f(x)={@0}$ nel punto $x={@1}$ con la differenza {@2} con passo $h={@3}$. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "Vale $\\delta(x^n)\\approx|n|\\,\\delta x$, dove $\\delta x=\\frac{\\Delta x}{|x|}$.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "Dopo $n$ passi l'intervallo ha lunghezza $\\frac{{@0}}{2^n}$. Serve $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, cioè $n\\ge\\log_2 {@4}\\approx {@5}$. Il più piccolo intero è $n={@6}$.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "Hai tenuto la metà sbagliata. La radice sta nella metà ai cui estremi $f$ ha segni opposti.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "Usa $P(x)=\\sum y_i\\ell_i(x)$ con $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, oppure la forma di Newton con le differenze divise.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "Usa $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, qui $a-b=1$.",
  "Počet krokov": "Numero di passi",
  "Počet krokov n": "Numero di passi n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "Il numero di operazioni è circa $\\frac{2}{3}n^3$, il tempo cresce con il cubo della dimensione. La dimensione è aumentata di ${@0}$ volte, il tempo quindi di ${@1}^3={@2}$ volte: ${@3}\\cdot {@4}={@5}$ s.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "Per $f(x)=\\ln x$ si ottiene $\\kappa=\\frac{1}{|\\ln x|}$.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "Per $f(x)=\\sin x$ si ha $\\kappa=|x\\cot x|$. Calcola in radianti.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "Per i punti {@0} calcola la differenza divisa del secondo ordine $f[x_0, x_1, x_2]$ (il coefficiente di $(x-x_0)(x-x_1)$ nella forma di Newton). {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "Per una funzione di due variabili $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; per $S=ab$ le derivate parziali sono $b$ e $a$.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "Nel metodo di Gauss–Seidel nella seconda e nella terza equazione abbiamo usato già i valori nuovi.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "Nel metodo di Jacobi sostituiamo ovunque i valori iniziali.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "Nel metodo di Jacobi in tutte le equazioni si sostituiscono solo i valori iniziali $x^{(0)}$, non le componenti appena ricalcolate.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "Nella differenza centrale la distanza tra i punti $x-h$ e $x+h$ è $2h$; la differenza dei valori va divisa per $2h$, non per $h$.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "Nella differenza del secondo ordine si divide per la differenza dei nodi estremi $x_2 - x_0$, non per $x_2 - x_1$.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "La fase in avanti con i moltiplicatori $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dà la matrice triangolare superiore $U={@3}$ e il termine noto $y=({@4})^{T}$. Sostituzione all'indietro: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "Hai calcolato il quoziente di Rayleigh con il vettore $x^{(0)}$. Il problema chiede il quoziente per $x^{(1)}$, quindi bisogna ancora calcolare $Ax^{(1)}$.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "L'errore relativo è $\\frac{|x-\\tilde{x}|}{|x|}$; in percentuale moltiplicalo per 100.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "L'errore relativo del dato si amplifica quindi di circa {@0} volte: il problema è mal condizionato.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "Risolvi la disequazione $\\frac{b-a}{2^n}\\le\\varepsilon$, cioè $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, e arrotonda per eccesso.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "La soluzione di un certo problema {@0} con passo $h$ ha nel punto finale un errore globale di circa ${@1}$. Che errore possiamo aspettarci con il passo $\\frac{h}{{@2}}$? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "L'equazione $x^2-{@0}=0$ ha una radice nell'intervallo $[{@1};\\ {@2}]$. Fai due passi del metodo di bisezione e scrivi l'intervallo risultante come coppia di estremi separati dal punto e virgola (per es. 1,25; 1,5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "Risolviamo l'equazione con il metodo delle iterazioni semplici $x_{k+1}=g(x_k)$ con $g(x)={@0}$ (equazione ${@1}$) e punto iniziale $x_0={@2}$. Calcola $x_2$. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "La differenza delle differenze del primo ordine va ancora divisa per la differenza dei nodi estremi $x_2 - x_0$.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "La differenza dei valori $y_1 - y_0$ va divisa per la lunghezza del passo $x_1 - x_0 = {@0}$, e solo dopo moltiplicata per $(x - x_0)$.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "Moltiplichiamo e dividiamo per la somma delle radici: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "Il metodo di Simpson ha ordine di accuratezza 4, non 2 come quello dei trapezi.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "Metodo di Simpson: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ pari.",
  "Simpsonovej metódy": "del metodo di Simpson",
  "Simpsonovou metódou": "con il metodo di Simpson",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "Le pendenze $k_2$ e $k_3$ in RK4 hanno peso doppio: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "Si fa la media delle pendenze: si moltiplica per $\\frac{h}{2}$, non per $h$.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "Nel secondo passo la pendenza va ricalcolata nel nuovo punto $(x_1, y_1)$; non basta fare un solo passo di lunghezza $2h$ con la pendenza iniziale.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "Hai contato solo le cifre decimali significative. Tra le cifre significative ci sono anche quelle prima della virgola.",
  "Spätným chodom urči najprv $x_3$.": "Con la sostituzione all'indietro determina prima $x_3$.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "Abbiamo misurato i lati di un rettangolo con precisione $\\pm {@0}$ cm: $a={@1}$ cm e $b={@2}$ cm. Stima il limite dell'errore assoluto dell'area $S=ab$ (in cm²) con l'approssimazione lineare. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "Il metodo del punto medio prende i valori nei punti medi dei sottointervalli, non nei loro estremi sinistri.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "Punti medi dei sottointervalli: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "Risolvi il sistema {@0} con il metodo di {@1} partendo da $x^{(0)}={@2}$. Calcola la prima iterazione $x^{(1)}$ e scrivi le sue tre componenti separate dal punto e virgola, ciascuna arrotondata a 4 cifre decimali.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "Il prodotto degli elementi diagonali dà il determinante solo per una matrice triangolare. Moltiplica la diagonale della matrice $U$, non di $A$.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "Questo è il passo di Jacobi. Nel metodo di Gauss–Seidel sostituisci subito nelle equazioni successive i nuovi valori $x_1^{(1)}, x_2^{(1)}$.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "Questo è l'errore assoluto. Quello relativo si ottiene dividendo l'errore assoluto per $|x|$ (e in percentuale ancora per 100).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "Questo è solo $x_1$. Sostituisci ancora una volta il risultato in $g$.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "Questo è solo $y_1$. Fai ancora il secondo passo.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "Questo è solo il predittore di Eulero $\\tilde{y}_1$. Il metodo di Heun lo corregge ancora con la media delle due pendenze.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "Questo è solo il numeratore $(x^{(1)})^{T}Ax^{(1)}$. Dividilo ancora per $(x^{(1)})^{T}x^{(1)}$.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "Questo è il metodo dei trapezi. Il metodo di Simpson usa i pesi $1, 4, 2, 4, \\dots, 4, 1$ e moltiplica per $\\frac{h}{3}$.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "Questa è l'interpolazione lineare solo dai due nodi vicini. Il polinomio di 2° grado sfrutta tutti e tre i punti.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "Questa è la stima $\\frac{M_2h^2}{8}$ per il punto peggiore dell'intervallo. Il problema chiede un punto concreto $x$.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "Questa è la media $\\bar{y}$. Il termine noto è $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, quindi bisogna sottrarre anche $a\\bar{x}$.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Questo è l'elemento originale $a_{22}$. Dalla seconda riga bisogna prima sottrarre $l_{21}$ volte la prima.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Questo è l'elemento originale $a_{23}$. Dalla seconda riga bisogna prima sottrarre $l_{21}$ volte la prima.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "Questo è l'elemento originale $a_{33}$. La terza riga va modificata in entrambi i passi dell'eliminazione.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "Questo è l'errore relativo (rapporto tra errore e valore). L'errore assoluto è la differenza stessa $|x-\\tilde{x}|$.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "Questo è l'errore relativo di $x$ da solo. In una potenza l'errore relativo si moltiplica per l'esponente ${@0}$.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "Fai un passo del metodo di Newton per l'equazione $x^3{@0}-{@1}=0$ partendo da $x_0={@2}$. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "Fai un passo del metodo di Runge–Kutta del 4° ordine con passo $h={@0}$ per il problema {@1}. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "Fai un passo del metodo delle secanti per $f(x)=x^2-{@0}$ con punti iniziali $x_0={@1}$ e $x_1={@2}$. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "Determina $M_2 = \\max|f''|$ sull'intervallo. {@0}",
  "Urči $u_{22}$.": "Determina $u_{22}$.",
  "Urči $u_{23}$.": "Determina $u_{23}$.",
  "Urči $u_{33}$.": "Determina $u_{33}$.",
  "Urči multiplikátor $l_{21}$.": "Determina il moltiplicatore $l_{21}$.",
  "Urči multiplikátor $l_{31}$.": "Determina il moltiplicatore $l_{31}$.",
  "Urči multiplikátor $l_{32}$.": "Determina il moltiplicatore $l_{32}$.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "Determina il numero di condizionamento $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ del calcolo di $f(x)=\\sin x$ nel punto $x={@0}$ (in radianti). {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "Determina il numero di condizionamento $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ del calcolo di $f(x)=x-{@0}$ nel punto $x={@1}$. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "Determina il numero di condizionamento $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ del calcolo della funzione $f(x)=\\ln x$ nel punto $x={@0}$. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "A ogni passo calcola il valore nel punto medio dell'intervallo e tieni la metà ai cui estremi la funzione ha segni opposti.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "Nella formula c'è ancora la divisione per due: $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "Nella formula delle secanti la correzione $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ si sottrae da $x_1$.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "Annulla gli elementi sotto la diagonale nella prima e poi nella seconda colonna, infine risolvi partendo dall'ultima equazione.",
  "Vypočítaj $Ax^{(1)}$.": "Calcola $Ax^{(1)}$.",
  "Vypočítaj $P_1({@0})$. {@1}": "Calcola $P_1({@0})$. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "Calcola $\\det A = u_{11}u_{22}u_{33}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "Calcola $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} con $n={@4}$ sottointervalli. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "Calcola $\\ell_{@0}({@1})$. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "Calcola $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "Calcola $\\sqrt{{@0}}-\\sqrt{{@1}}$ in modo numericamente stabile (senza sottrarre numeri vicini). {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "Calcola $\\sum x_i$ e $\\sum y_i$ (separate dal punto e virgola).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "Calcola $\\sum x_i^2$ e $\\sum x_iy_i$ (separate dal punto e virgola).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "Calcola $f$ nel punto medio dell'intervallo, cioè $f({@0})$. {@1}",
  "Vypočítaj $f'(x_0)$.": "Calcola $f'(x_0)$.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Calcola $f(x_0)$ e $f'(x_0)$ e sostituisci in $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Vypočítaj $f(x_0)$.": "Calcola $f(x_0)$.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "Calcola $f(x_0, y_0)$. {@0}",
  "Vypočítaj $f(x_1)$.": "Calcola $f(x_1)$.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "Calcola $f(x_1, \\tilde{y}_1)$. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "Calcola $f(x_1, y_1)$. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "Calcola $f({@0})$. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "Calcola $f[x_0, x_1, x_2]$. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "Calcola $f[x_0, x_1]$. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "Calcola $f[x_1, x_2]$. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "Calcola $k_{@0}$. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "Calcola $x^{(1)} = Ax^{(0)}$ (due componenti separate dal punto e virgola).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "Calcola $x^{(1)}=Ax^{(0)}$, poi $Ax^{(1)}$ e il quoziente dei prodotti scalari $x^{(1)}\\cdot Ax^{(1)}$ e $x^{(1)}\\cdot x^{(1)}$.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "Calcola $x_1 = g(x_0)$. {@0}",
  "Vypočítaj $x_1$. {@0}": "Calcola $x_1$. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "Calcola $x_2 = g(x_1)$. {@0}",
  "Vypočítaj $x_2$. {@0}": "Calcola $x_2$. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "Calcola $x_{@0}^{(1)}$. {@1}",
  "Vypočítaj $y_1$. {@0}": "Calcola $y_1$. {@0}",
  "Vypočítaj $y_2$. {@0}": "Calcola $y_2$. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "Calcola $|(x-x_0)(x-x_1)|$. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "Calcola il quoziente di Rayleigh. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "Calcola l'errore assoluto $|x-\\tilde{x}|$. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "Calcola il termine noto $b$. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "Calcola il denominatore $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}",
  "Vypočítaj odhad chyby. {@0}": "Calcola la stima dell'errore. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "Calcola il predittore $\\tilde{y}_1$. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "Calcola il contributo dell'errore del lato $a$, cioè $b\\,\\Delta a$. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "Calcola il contributo dell'errore del lato $b$, cioè $a\\,\\Delta b$. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "Calcola l'errore relativo di $x$ in percentuale. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "Calcola la pendenza $\\frac{y_1-y_0}{x_1-x_0}$. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "Calcola la pendenza $a$. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "Calcola la somma dei valori della funzione nei punti medi dei sottointervalli. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "Calcola la somma dei valori nei nodi dispari $f_1{@0}$ (peso 4). {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "Calcola la somma dei valori interni {@0}. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "Calcola il valore finale dell'integrale. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "La formula $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ vale solo per una retta passante per l'origine ($b = 0$). Usa entrambe le equazioni normali.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "Formula delle secanti: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "Arrotonda il risultato a {@0} {@1}.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "Dalla $i$-esima equazione ricava $x_i$ e sostituiscici i valori delle componenti di $x^{(0)}$.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "Dalla $i$-esima equazione ricava $x_i$ e sostituiscici le componenti già ricalcolate $x_1, \\dots, x_{i-1}$ e i vecchi valori delle altre.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "Dalla tabella conosciamo ${@0}\\approx {@1}$ e ${@2}\\approx {@3}$. Con l'interpolazione lineare stima il valore della funzione ${@4}$ nel punto $x={@5}$. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "Hai dimenticato il fattore $x$ al numeratore: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, non $\\left|\\frac{f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "Hai dimenticato il fattore $x$ al numeratore: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "Hai dimenticato il fattore $x$: $\\kappa = |x\\cot x|$, non $|\\cot x|$.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "Scrivi la soluzione completa $x_1; x_2; x_3$.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "Hai scambiato i pesi: nel metodo di Simpson i nodi dispari $f_1, f_3, \\dots$ hanno peso 4 e i nodi interni pari peso 2.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "Hai contato solo l'errore di un lato. A $b\\,\\Delta a$ aggiungi anche $a\\,\\Delta b$.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "La complessità dell'eliminazione di Gauss è $O(n^3)$, più precisamente circa $\\frac{2}{3}n^3$ operazioni.",
  "absolútny člen $b$": "il termine noto $b$",
  "centrálnej": "centrale",
  "centrálnej diferencie": "della differenza centrale",
  "centrálnou": "centrale",
  "ciframi": "cifre",
  "cifrou": "cifra",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "il determinante $\\det A$ come prodotto degli elementi diagonali di $U$",
  "doprednej": "in avanti",
  "doprednej diferencie": "della differenza in avanti",
  "doprednou": "in avanti",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">Eulero y(2) ≈ {@1} (errore {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (errore {@4})</span> · esattamente e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · esattamente I = {@2} · errore {@3}",
  "je platné 1 desatinné miesto": "è significativa 1 cifra decimale",
  "je to <strong>1</strong> platná cifra": "c'è <strong>1</strong> cifra significativa",
  "je to <strong>{@0}</strong> platných cifier": "sono <strong>{@0}</strong> cifre significative",
  "lichobežníkovej metódy": "del metodo dei trapezi",
  "lichobežníkovou metódou": "con il metodo dei trapezi",
  "metódou RK4": "con il metodo RK4",
  "na polovicu": "della metà",
  "nie je platné žiadne desatinné miesto": "nessuna cifra decimale è significativa",
  "obdĺžnikovej (stredovej) metódy": "del metodo del punto medio",
  "obdĺžnikovou (stredovou) metódou": "con il metodo del punto medio",
  "prvok ${@0}$": "l'elemento ${@0}$",
  "smernicu $a$": "la pendenza $a$",
  "sú platné {@0} desatinné miesta": "sono significative {@0} cifre decimali",
  "sú to <strong>{@0}</strong> platné cifry": "sono <strong>{@0}</strong> cifre significative",
  "uzly {@0}.": "nodi {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Stima dell'errore: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "di {@0} volte",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, errore {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">errore |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· Simpson: n deve essere pari",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "Risolvi il problema {@0} con il metodo di Eulero con passo $h={@1}$. Calcola $y_2\\approx y({@2})$. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "Risolvi il problema {@0} con il metodo di Heun (metodo di Eulero migliorato) con passo $h={@1}$. Calcola $y_1\\approx y({@2})$. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "Il tempo non cresce linearmente con il numero di incognite: l'eliminazione richiede circa $\\frac{2}{3}n^3$ operazioni.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "Sostituiamo il numero ${@0}$ con l'approssimazione ${@1}$. Qual è l'errore assoluto di questa approssimazione? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "Sostituiamo il numero ${@0}$ con l'approssimazione ${@1}$. Qual è l'errore relativo in percentuale? {@2}",
  "Štart x₀": "Punto iniziale x₀"
 }
});
