/* Italiano: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/v3/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "v3-pojem": {
   "title": "Il concetto di equazione differenziale, problema di Cauchy, campo di direzioni",
   "summary": "Ordine di un'equazione, integrale generale e particolare, problema ai valori iniziali, teorema di esistenza e unicità, campo di direzioni.",
   "theory": [
    "<p>Un'<strong>equazione differenziale ordinaria (EDO)</strong> è un'equazione $F(x, y, y', \\dots, y^{(n)}) = 0$ in cui l'incognita è una funzione\n       di una variabile $y = y(x)$ e in cui compaiono le derivate di questa funzione. L'<strong>ordine</strong> dell'equazione è l'ordine della derivata più alta\n       che vi compare effettivamente: $y'' + (y')^{5} = x$ è un'equazione del 2° ordine, la potenza $(y')^{5}$ non cambia l'ordine.\n       L'equazione è <strong>lineare</strong> se è lineare rispetto a $y, y', \\dots, y^{(n)}$, cioè ha la forma\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$.</p>\n       <p>Una <strong>soluzione</strong> sull'intervallo $I$ è una funzione che ha su $I$ derivate fino all'ordine $n$ e che, sostituita, soddisfa l'equazione per ogni $x\\in I$.\n       L'<strong>integrale generale</strong> di un'equazione di ordine $n$ è una famiglia di soluzioni $y = \\varphi(x, C_1, \\dots, C_n)$ con $n$ costanti indipendenti;\n       una <strong>soluzione particolare</strong> si ottiene con una scelta concreta delle costanti. Una soluzione che non si ottiene dall'integrale generale per nessuna scelta delle costanti\n       si chiama <strong>singolare</strong>.</p>",
    "<p><strong>Problema di Cauchy</strong> (ai valori iniziali) per un'equazione del 1° ordine: trovare una soluzione dell'equazione $y' = f(x, y)$ che soddisfi\n       la <strong>condizione iniziale</strong> $y(x_0) = y_0$. Per un'equazione di ordine $n$ si assegnano $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$.</p>\n       <p><strong>Teorema (Picard, Lindelöf).</strong> Se le funzioni $f$ e $\\frac{\\partial f}{\\partial y}$ sono continue in un intorno del punto $[x_0; y_0]$, esiste\n       un intervallo attorno a $x_0$ su cui il problema di Cauchy ha <strong>una e una sola</strong> soluzione. Senza queste ipotesi l'unicità può non valere:\n       il problema $y' = 3y^{2/3}$, $y(0) = 0$ è risolto sia da $y = 0$ sia da $y = x^{3}$ (qui $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ non è definita nel punto $y = 0$).</p>",
    "<p><strong>Campo di direzioni.</strong> L'equazione $y' = f(x, y)$ assegna a ogni punto $[x; y]$ il coefficiente angolare della tangente alla soluzione che passa per esso.\n       Se nei punti del piano disegniamo brevi segmenti con coefficiente angolare $f(x, y)$, otteniamo il campo di direzioni. Il grafico di una soluzione (<strong>curva integrale</strong>)\n       in ogni suo punto è tangente al campo. Le curve $f(x, y) = k$, sulle quali tutti i segmenti hanno lo stesso coefficiente angolare $k$, si chiamano <strong>isocline</strong>.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "Campo di direzioni dell'equazione $y' = x - y$. La retta tratteggiata $y = x$ è l'isoclina di pendenza $0$, la retta verde $y = x - 1$ è l'isoclina di pendenza $1$ e allo stesso tempo una soluzione. Sposta il valore iniziale $y(0)$: per $x\\to\\infty$ tutte le soluzioni si avvicinano alla retta $y = x - 1$."
    }
   ],
   "examples": [
    {
     "task": "Verifica che $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ è soluzione dell'equazione $y'' - y' - 2y = 0$ per qualsiasi $C_1, C_2$. Di che ordine è l'equazione?",
     "steps": [
      "L'equazione contiene la derivata seconda e nessuna derivata superiore, quindi è del <strong>2° ordine</strong>.",
      "Deriviamo: $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "Sostituiamo: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "L'uguaglianza vale per ogni $x$ e per ogni $C_1, C_2$. La funzione contiene due costanti indipendenti: si tratta dell'<strong>integrale generale</strong>."
     ]
    },
    {
     "task": "Mostra che $y = C\\mathrm{e}^{-x} + x - 1$ è l'integrale generale dell'equazione $y' = x - y$ e trova la soluzione del problema di Cauchy con la condizione $y(0) = 2$.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$ e $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. I due membri sono uguali.",
      "Dalla condizione: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, quindi $C = 3$.",
      "<strong>Soluzione particolare: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> È la curva della figura per $y(0) = 2$."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "Equazioni a variabili separabili",
   "summary": "L'equazione $y' = g(x)\\,h(y)$: separazione delle variabili, soluzioni stazionarie, equazioni del tipo $y' = f(ax + by + c)$.",
   "theory": [
    "<p>Un'equazione a <strong>variabili separabili</strong> ha la forma $y' = g(x)\\,h(y)$, dove $g$ è continua sull'intervallo $I$\n       e $h$ è continua sull'intervallo $J$. In modo equivalente si può scrivere in forma differenziale $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$.</p>\n       <p><strong>Procedimento:</strong></p>\n       <ol><li>Troviamo gli zeri della funzione $h$. Se $h(c) = 0$, la costante $y = c$ è una soluzione, detta <strong>soluzione stazionaria</strong>.</li>\n       <li>Per $h(y)\\neq 0$ separiamo le variabili: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>Integriamo: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. Otteniamo la soluzione in forma implicita, che, se possibile, esplicitiamo.</li>\n       <li>Determiniamo la costante $C$ dalla condizione iniziale e verifichiamo su quale intervallo la soluzione esiste.</li></ol>",
    "<p><strong>Attenzione a non perdere soluzioni.</strong> Dividendo per $h(y)$ possiamo perdere le soluzioni stazionarie, quindi bisogna scriverle a parte\n       (a volte sono contenute nell'integrale generale per $C = 0$, per esempio per $y' = ky$ la formula $y = C\\mathrm{e}^{kx}$ dà anche $y = 0$).\n       La soluzione di un'equazione non lineare può non esistere su tutto $\\mathbb{R}$, anche se il secondo membro è «bello»: la soluzione del problema $y' = y^{2}$, $y(0) = 1$\n       è $y = \\frac{1}{1 - x}$ ed esiste solo sull'intervallo $(-\\infty; 1)$.</p>\n       <p>Le <strong>equazioni del tipo $y' = f(ax + by + c)$</strong> si trasformano con la sostituzione $z = ax + by + c$ nell'equazione a variabili separabili $z' = a + b\\,f(z)$.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "L'equazione $y' = xy$ ha integrale generale $y = C\\mathrm{e}^{x^{2}/2}$. L'asse $x$ verde è la soluzione stazionaria $y = 0$ (per $C = 0$), la curva blu è la soluzione con la condizione $y(0) = 1$. Le curve integrali non si intersecano, come garantisce il teorema di unicità."
    }
   ],
   "examples": [
    {
     "task": "Risolvi il problema di Cauchy $y' = xy^{2}$, $y(0) = 1$, e determina l'intervallo su cui la soluzione esiste.",
     "steps": [
      "La soluzione stazionaria è $y = 0$, ma non soddisfa la condizione $y(0) = 1$.",
      "Per $y\\neq 0$: $\\frac{dy}{y^{2}} = x\\,dx$, integrando $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.",
      "Dalla condizione $-1 = C$, quindi $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ e $y = \\frac{2}{2 - x^{2}}$.",
      "<strong>La soluzione $y = \\frac{2}{2 - x^{2}}$ esiste sull'intervallo $(-\\sqrt{2}; \\sqrt{2})$</strong>, che contiene il punto $x_0 = 0$; nei punti $\\pm\\sqrt{2}$ il grafico ha asintoti verticali."
     ]
    },
    {
     "task": "Risolvi il problema di Cauchy $y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$.",
     "steps": [
      "Il secondo membro è un prodotto: $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. Separiamo le variabili: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "Integriamo: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. Dalla condizione $2 = 1 + C$, quindi $C = 1$.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>, la soluzione esiste su tutto $\\mathbb{R}$."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "Equazioni differenziali omogenee",
   "summary": "Equazioni $y' = \\varphi\\left(\\frac{y}{x}\\right)$, sostituzione $y = ux$ ed equazioni riconducibili a omogenee.",
   "theory": [
    "<p>La funzione $f(x, y)$ è <strong>omogenea di grado $k$</strong> se $f(tx, ty) = t^{k}f(x, y)$ per ogni $t \\gt 0$. L'equazione $y' = f(x, y)$ si chiama\n       <strong>omogenea</strong> se $f$ è omogenea di grado $0$; allora $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$, quindi l'equazione ha la forma\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       L'equazione $M(x, y)\\,dx + N(x, y)\\,dy = 0$ è omogenea se $M$ e $N$ sono funzioni omogenee dello stesso grado\n       (per esempio $\\frac{x^{2} + y^{2}}{xy}$: numeratore e denominatore hanno entrambi grado $2$).</p>",
    "<p><strong>Sostituzione $y = ux$</strong>, dove $u = u(x)$ è la nuova funzione incognita. Allora $y' = u + xu'$ e l'equazione diventa\n       $$xu' = \\varphi(u) - u,$$\n       che è un'equazione a variabili separabili: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. Se $\\varphi(u_0) = u_0$, la retta $y = u_0x$\n       è una soluzione. Dopo l'integrazione sostituiamo di nuovo $u = \\frac{y}{x}$.</p>\n       <p><strong>Equazioni riconducibili a omogenee</strong>: $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$ con determinante non nullo\n       $a_1b_2 - a_2b_1$. Con la traslazione $x = X + x_0$, $y = Y + y_0$, dove $[x_0; y_0]$ è il punto di intersezione delle rette $a_ix + b_iy + c_i = 0$, i termini noti spariscono.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "In un'equazione omogenea il campo di direzioni ha la stessa direzione lungo ogni retta $y = ux$ passante per l'origine (linee tratteggiate). L'equazione $y' = \\frac{x + y}{x - y}$ ha in coordinate polari le soluzioni $r = C\\mathrm{e}^{\\varphi}$, cioè spirali logaritmiche."
    }
   ],
   "examples": [
    {
     "task": "Trova l'integrale generale dell'equazione $y' = \\dfrac{x^{2} + y^{2}}{xy}$ per $x \\gt 0$.",
     "steps": [
      "Numeratore e denominatore sono omogenei di grado $2$. Dividendo per $x^{2}$: $y' = \\frac{1 + u^{2}}{u}$, dove $u = \\frac{y}{x}$.",
      "Sostituiamo $y' = u + xu'$: $u + xu' = \\frac{1}{u} + u$, quindi $xu' = \\frac{1}{u}$.",
      "Separiamo le variabili: $u\\,du = \\frac{dx}{x}$, integrando $\\frac{u^{2}}{2} = \\ln x + C$.",
      "<strong>Soluzione: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, dove $C_1 = 2C$."
     ]
    },
    {
     "task": "Risolvi il problema di Cauchy $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$.",
     "steps": [
      "Sostituzione $y = ux$: $u + xu' = u + \\mathrm{e}^{-u}$, quindi $xu' = \\mathrm{e}^{-u}$.",
      "Separiamo le variabili: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, quindi $\\mathrm{e}^{u} = \\ln x + C$.",
      "Dalla condizione $u(1) = 0$: $1 = 0 + C$, quindi $C = 1$ e $u = \\ln(1 + \\ln x)$.",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong> per $x \\gt \\mathrm{e}^{-1}$."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "Equazioni lineari del 1° ordine ed equazione di Bernoulli",
   "summary": "Fattore integrante, variazione della costante, struttura della soluzione $y = y_h + y_p$ e sostituzione $z = y^{1-n}$.",
   "theory": [
    "<p>Un'<strong>equazione lineare del 1° ordine</strong> ha la forma $y' + p(x)\\,y = q(x)$, dove $p, q$ sono continue sull'intervallo $I$. Se $q = 0$, l'equazione è\n       <strong>omogenea</strong> (nel senso delle equazioni lineari) e a variabili separabili: $y_h = C\\mathrm{e}^{-P(x)}$, dove $P$ è una qualsiasi primitiva di $p$.\n       L'integrale generale dell'equazione non omogenea è $y = y_h + y_p$, la somma dell'integrale generale dell'equazione omogenea e di una soluzione (particolare)\n       dell'equazione non omogenea. Il problema di Cauchy ha su tutto $I$ una e una sola soluzione.</p>",
    "<p><strong>Fattore integrante.</strong> Moltiplichiamo l'equazione per $\\mu(x) = \\mathrm{e}^{P(x)}$. Il primo membro diventa allora la derivata di un prodotto:\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       La <strong>variazione della costante</strong> porta allo stesso risultato: cerchiamo la soluzione nella forma $y = C(x)\\,\\mathrm{e}^{-P(x)}$; dopo la sostituzione\n       i termini con $C(x)$ si elidono e resta $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$.</p>",
    "<p><strong>Equazione di Bernoulli</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. La dividiamo per $y^{n}$ e introduciamo $z = y^{1-n}$,\n       così che $z' = (1-n)\\,y^{-n}y'$. Otteniamo l'equazione lineare\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       Per $n \\gt 0$ è soluzione anche $y = 0$, che si perde nella divisione. Per esempio l'equazione logistica $y' = ry - \\frac{r}{K}y^{2}$ è un'equazione di Bernoulli con $n = 2$.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi il problema di Cauchy $y' + 2y = 4x$, $y(0) = 1$.",
     "steps": [
      "$p = 2$, fattore integrante $\\mu = \\mathrm{e}^{2x}$. L'equazione diventa $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$.",
      "Per parti: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, quindi $y = 2x - 1 + C\\mathrm{e}^{-2x}$.",
      "Dalla condizione: $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Verifica: $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "Trova l'integrale generale dell'equazione di Bernoulli $y' + \\dfrac{y}{x} = xy^{2}$ per $x \\gt 0$.",
     "steps": [
      "$n = 2$, quindi $z = y^{-1}$ e $z' = -y^{-2}y'$. Dividendo l'equazione per $y^{2}$: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, cioè $-z' + \\frac{z}{x} = x$.",
      "L'equazione lineare $z' - \\frac{z}{x} = -x$ ha fattore integrante $\\mu = \\frac{1}{x}$: $\\left(\\frac{z}{x}\\right)' = -1$, quindi $z = Cx - x^{2}$.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, e inoltre la soluzione stazionaria $y = 0$."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "Equazioni esatte e fattore integrante",
   "summary": "L'equazione $M\\,dx + N\\,dy = 0$ con $M_y = N_x$, funzione potenziale $F(x, y)$ e fattore integrante dipendente da una sola variabile.",
   "theory": [
    "<p>L'equazione $M(x, y)\\,dx + N(x, y)\\,dy = 0$ è <strong>esatta</strong> sul dominio $D$ se esiste una funzione $F(x, y)$ (funzione potenziale, primitiva) tale che\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       cioè il primo membro è il differenziale totale $dF$. Lungo ogni soluzione si ha allora $dF = 0$, quindi l'<strong>integrale generale</strong> è $F(x, y) = C$:\n       le curve integrali sono le curve di livello della funzione $F$.</p>\n       <p><strong>Criterio.</strong> Se $M, N$ sono di classe $C^1$ su un dominio semplicemente connesso, l'equazione è esatta se e solo se\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>Calcolo di $F$.</strong> Integriamo $M$ rispetto a $x$ (considerando $y$ costante): $F = \\int M\\,dx + \\varphi(y)$.\n       La funzione incognita $\\varphi$ si determina dalla condizione $\\frac{\\partial F}{\\partial y} = N$, che dà $\\varphi'(y)$ dipendente solo da $y$.\n       Allo stesso modo possiamo iniziare integrando $N$ rispetto a $y$.</p>\n       <p><strong>Fattore integrante.</strong> Se l'equazione non è esatta, cerchiamo una funzione $\\mu \\neq 0$ tale che $\\mu M\\,dx + \\mu N\\,dy = 0$ sia esatta,\n       cioè $(\\mu M)_y = (\\mu N)_x$. In due casi semplici:</p>\n       <ul><li>se $\\dfrac{M_y - N_x}{N} = \\omega(x)$ dipende solo da $x$, allora $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>\n       <li>se $\\dfrac{N_x - M_y}{M} = \\omega(y)$ dipende solo da $y$, allora $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>Per esempio l'equazione lineare $y' + p(x)y = q(x)$, scritta come $(p y - q)\\,dx + dy = 0$, ha $\\omega = p(x)$ e il noto fattore $\\mu = \\mathrm{e}^{\\int p\\,dx}$.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "L'equazione $(2x - y)\\,dx + (2y - x)\\,dy = 0$ è esatta con $F(x, y) = x^{2} - xy + y^{2}$. Le curve integrali sono le ellissi $F = C$; la curva per il punto $[1; 2]$ corrisponde a $C = 3$."
    }
   ],
   "examples": [
    {
     "task": "Risolvi l'equazione $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ e trova la curva integrale che passa per il punto $[1; 1]$.",
     "steps": [
      "$M_y = 2x$ e $N_x = 2x$, l'equazione è esatta.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$, quindi $\\varphi'(y) = 2y$ e $\\varphi(y) = y^{2}$.",
      "Integrale generale $x^{2}y + x^{3} + y^{2} = C$. Il punto $[1; 1]$ dà $C = 3$.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "Trova un fattore integrante dell'equazione $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) e risolvi l'equazione.",
     "steps": [
      "$M_y = 1$, $N_x = -1$, l'equazione non è esatta. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ dipende solo da $x$.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. Nuova equazione: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, dove $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.",
      "$F = -\\frac{y}{x} + x$ (controlla sia $F_x$ sia $F_y$), integrale generale $x - \\frac{y}{x} = C$.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "Applicazioni delle equazioni del 1° ordine",
   "summary": "Crescita di una popolazione e decadimento radioattivo, legge di raffreddamento di Newton, equazione logistica, circuito RC e miscelazione di soluzioni.",
   "theory": [
    "<p><strong>Crescita e decadimento esponenziale.</strong> Se la velocità di variazione di una grandezza è proporzionale al suo valore istantaneo, vale $y' = ky$, quindi\n       $y(t) = y_0\\mathrm{e}^{kt}$. Per $k \\gt 0$ si tratta di crescita (popolazione, interesse composto con capitalizzazione continua), il tempo di raddoppio è $\\frac{\\ln 2}{k}$.\n       Per $k \\lt 0$ si tratta di decadimento; un isotopo radioattivo con <strong>tempo di dimezzamento</strong> $T$ ha $k = -\\frac{\\ln 2}{T}$, e quindi $m(t) = m_0\\cdot 2^{-t/T}$.</p>\n       <p><strong>Legge di raffreddamento di Newton.</strong> La temperatura di un corpo in un ambiente a temperatura costante $T_o$ varia con velocità proporzionale alla differenza di temperatura:\n       $T' = -k(T - T_o)$, $k \\gt 0$. La soluzione è $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; la costante $k$ di solito si determina da un'ulteriore misurazione.</p>",
    {
     "fig": "v3-rast",
     "caption": "La curva blu è la soluzione di $y' = ky$, $y(0) = 1$, quella verde la soluzione dell'equazione logistica con lo stesso $k$ e capacità portante $K$ (linea tratteggiata). All'inizio sono quasi identiche, ma la curva logistica si stabilizza sul valore $K$."
    },
    "<p>L'<strong>equazione logistica</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ descrive la crescita con risorse limitate; $K$ è la capacità portante dell'ambiente.\n       È a variabili separabili (e anche di Bernoulli) e la sua soluzione è\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       Le soluzioni stazionarie sono $P = 0$ (instabile) e $P = K$ (stabile). La popolazione cresce più rapidamente per $P = \\frac{K}{2}$, all'istante $t = \\frac{\\ln A}{r}$.</p>",
    "<p><strong>Circuito RC.</strong> Per la carica di un condensatore caricato da un generatore di tensione $U$ attraverso una resistenza $R$ vale $Rq' + \\frac{q}{C} = U$.\n       Con carica iniziale nulla la tensione sul condensatore è $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, dove $\\tau = RC$ è la <strong>costante di tempo</strong>\n       (nel tempo $\\tau$ il condensatore si carica a circa il $63\\,\\%$ della tensione $U$).</p>\n       <p><strong>Miscelazione di soluzioni.</strong> Un serbatoio contiene $V$ litri di soluzione; vi entrano $q$ litri al minuto di una soluzione con concentrazione $c$ e con la stessa velocità\n       esce la soluzione perfettamente mescolata. Per la quantità di sostanza $x(t)$ vale il bilancio «entrata meno uscita»:\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "Un caffè alla temperatura di $90\\,{}^\\circ\\mathrm{C}$ si trova in una stanza a $20\\,{}^\\circ\\mathrm{C}$. Dopo $10$ minuti è a $60\\,{}^\\circ\\mathrm{C}$. Quando si raffredderà a $40\\,{}^\\circ\\mathrm{C}$?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. Dalla misurazione $60 = 20 + 70\\,\\mathrm{e}^{-10k}$, quindi $\\mathrm{e}^{-10k} = \\frac{4}{7}$ e $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0{,}0560$.",
      "La condizione $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ dà $\\mathrm{e}^{-kt} = \\frac{2}{7}$, quindi $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3{,}5}{\\ln 1{,}75}$.",
      "<strong>$t \\approx 22{,}4$ minuti.</strong>"
     ]
    },
    {
     "task": "Un serbatoio contiene $100$ litri d'acqua in cui sono disciolti $5\\,\\mathrm{kg}$ di sale. Vi entrano $4$ litri al minuto di una soluzione con concentrazione $0{,}2\\,\\mathrm{kg/l}$ e con la stessa velocità esce la soluzione mescolata. Quanto sale c'è nel serbatoio dopo $25$ minuti?",
     "steps": [
      "Bilancio: $x' = 0{,}2\\cdot 4 - \\frac{4}{100}x = 0{,}8 - 0{,}04x$, $x(0) = 5$.",
      "Equazione lineare a coefficienti costanti: il valore di equilibrio è $x = 20$, quindi $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0{,}04t} = 20 - 15\\,\\mathrm{e}^{-0{,}04t}$.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14{,}48\\,\\mathrm{kg}$.</strong> Per $t\\to\\infty$ la quantità si avvicina a $20\\,\\mathrm{kg}$."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "Equazioni lineari del 2° ordine a coefficienti costanti",
   "summary": "Sistema fondamentale, wronskiano, equazione caratteristica e i tre tipi delle sue radici.",
   "theory": [
    "<p>L'<strong>equazione lineare omogenea del 2° ordine</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ con coefficienti continui sull'intervallo $I$ ha queste proprietà:</p>\n       <ul><li><strong>Principio di sovrapposizione:</strong> ogni combinazione lineare di soluzioni è ancora una soluzione; le soluzioni formano uno spazio vettoriale di dimensione $2$.</li>\n       <li>Un <strong>sistema fondamentale</strong> è una coppia di soluzioni linearmente indipendenti $y_1, y_2$; l'integrale generale è $y = C_1y_1 + C_2y_2$.</li>\n       <li><strong>Wronskiano</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. Le soluzioni $y_1, y_2$ sono linearmente indipendenti se e solo se\n       $W(x)\\neq 0$ (basta in un punto). Vale la <strong>formula di Liouville</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$.</li></ul>",
    "<p><strong>Coefficienti costanti.</strong> Per $y'' + py' + qy = 0$ proviamo $y = \\mathrm{e}^{\\lambda x}$. Sostituendo e dividendo per $\\mathrm{e}^{\\lambda x}$ otteniamo\n       l'<strong>equazione caratteristica</strong> $\\lambda^{2} + p\\lambda + q = 0$. In base alle sue radici:</p>\n       <table class=\"tbl\"><tr><th>radici</th><th>sistema fondamentale</th><th>integrale generale</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ reali</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ doppia</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>Con radici complesse prendiamo la parte reale e la parte immaginaria della soluzione complessa $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$.\n       Lo stesso procedimento funziona per le equazioni di ordine superiore: a una radice $\\lambda$ di molteplicità $k$ corrispondono le funzioni $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$.</p>",
    {
     "fig": "v3-rad2",
     "caption": "Soluzione dell'equazione $y'' + py' + qy = 0$ con le condizioni iniziali $y(0) = 1$, $y'(0) = 0$. Con radici complesse la soluzione oscilla, con radici reali no; il segno della parte reale delle radici decide se la soluzione si smorza o cresce."
    }
   ],
   "examples": [
    {
     "task": "Risolvi il problema di Cauchy $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$.",
     "steps": [
      "L'equazione caratteristica $\\lambda^{2} - \\lambda - 6 = 0$ ha radici $\\lambda_1 = 3$, $\\lambda_2 = -2$.",
      "Integrale generale $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, derivata $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "Condizioni: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$, da cui $C_1 = 2$, $C_2 = -1$.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "Trova un sistema fondamentale dell'equazione $y'' + 4y' + 13y = 0$ e calcolane il wronskiano.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, radici $\\lambda = -2\\pm 3\\mathrm{i}$.",
      "Sistema fondamentale: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, in accordo con la formula di Liouville $W(x) = W(0)\\,\\mathrm{e}^{-4x}$."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "Equazioni non omogenee del 2° ordine",
   "summary": "Struttura della soluzione $y = y_h + y_p$, metodo dei coefficienti indeterminati (somiglianza) per termini noti speciali e variazione delle costanti.",
   "theory": [
    "<p>L'integrale generale dell'equazione $y'' + py' + qy = f(x)$ è $y = y_h + y_p$, dove $y_h = C_1y_1 + C_2y_2$ è l'integrale generale dell'equazione omogenea associata\n       e $y_p$ è una qualsiasi soluzione (particolare) dell'equazione non omogenea. Se $f = f_1 + f_2$, possiamo cercare le soluzioni particolari per $f_1$ e $f_2$\n       separatamente e sommarle (<strong>principio di sovrapposizione</strong>).</p>",
    "<p><strong>Metodo dei coefficienti indeterminati</strong> (termine noto speciale, metodo di somiglianza). Se $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$\n       con polinomi $P_m, Q_n$, cerchiamo la soluzione particolare nella forma\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       dove $R_N, S_N$ sono polinomi di grado $N$ con coefficienti incogniti e $k$ è la molteplicità del numero $\\alpha + \\beta\\mathrm{i}$ come radice dell'equazione caratteristica\n       ($k = 0$ se non è radice). I coefficienti si determinano sostituendo nell'equazione e confrontando.</p>\n       <table class=\"tbl\"><tr><th>termine noto $f(x)$</th><th>forma di $y_p$ (se non c'è risonanza)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ (se $q\\neq 0$)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>Se $\\alpha + \\beta\\mathrm{i}$ è radice dell'equazione caratteristica (<strong>risonanza</strong>), moltiplichiamo la forma per $x$, per una radice doppia per $x^{2}$.</p>",
    "<p>La <strong>variazione delle costanti</strong> funziona per qualsiasi termine noto continuo. Cerchiamo la soluzione nella forma $y = C_1(x)y_1 + C_2(x)y_2$ con la condizione\n       $C_1'y_1 + C_2'y_2 = 0$. Sostituendo otteniamo il sistema\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       la cui soluzione è $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$, dove $W$ è il wronskiano. Il metodo serve per esempio con termini noti\n       $\\frac{1}{\\cos x}$, $\\mathrm{tg}\\,x$, $\\ln x$ oppure $\\frac{\\mathrm{e}^{x}}{x}$.</p>"
   ],
   "examples": [
    {
     "task": "Trova l'integrale generale dell'equazione $y'' - 3y' + 2y = \\mathrm{e}^{x}$.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ ha radici $1$ e $2$, quindi $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.",
      "Il numero $\\alpha = 1$ è radice semplice (risonanza), quindi $y_p = Ax\\mathrm{e}^{x}$. Allora $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$.",
      "Sostituiamo: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, quindi $A = -1$.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "Con il metodo della variazione delle costanti risolvi l'equazione $y'' + y = \\dfrac{1}{\\cos x}$ sull'intervallo $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$, quindi $C_1 = \\ln(\\cos x) + K_1$; $C_2' = \\frac{\\cos x}{\\cos x} = 1$, quindi $C_2 = x + K_2$.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "Oscillazioni: libere, smorzate e forzate",
   "summary": "L'equazione $mx'' + cx' + kx = F(t)$, smorzamento sottocritico, critico e sovracritico, oscillazioni forzate e risonanza.",
   "theory": [
    "<p>Un corpo di massa $m$ attaccato a una molla di costante elastica $k$, smorzato da una forza proporzionale alla velocità (coefficiente $c$) e sollecitato da una forza esterna $F(t)$, segue l'equazione\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       dove $\\omega_0 = \\sqrt{k/m}$ è la <strong>pulsazione propria</strong> e $\\delta = \\frac{c}{2m}$ il <strong>coefficiente di smorzamento</strong>.\n       La stessa equazione descrive la carica in un circuito $RLC$ in serie: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>Oscillazioni libere non smorzate</strong> ($c = 0$, $F = 0$): $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$ con ampiezza\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$ e periodo $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$.</p>",
    "<p><strong>Oscillazioni smorzate</strong> ($F = 0$). L'equazione caratteristica $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ ha radici $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$:</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>smorzamento sottocritico</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; oscillazioni con ampiezza che decresce esponenzialmente;</li>\n       <li>$\\delta = \\omega_0$ (<strong>smorzamento critico</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>smorzamento sovracritico</strong>): somma di due esponenziali decrescenti, moto aperiodico.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "Spostamento $x(t)$ per $\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$. Le curve tratteggiate $\\pm\\mathrm{e}^{-\\delta t}$ delimitano le oscillazioni smorzate. Per $\\delta = 2$ si ha lo smorzamento critico."
    },
    "<p><strong>Oscillazioni forzate</strong>, $F(t) = F_0\\cos\\omega t$. Senza smorzamento e per $\\omega\\neq\\omega_0$ la soluzione particolare è\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$. Per $\\omega = \\omega_0$ si ha <strong>risonanza</strong>: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$\n       e l'ampiezza cresce illimitatamente. Con lo smorzamento le oscillazioni libere si smorzano e resta il regime stazionario con ampiezza\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       che è massima per $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ (se $\\omega_0^{2} \\gt 2\\delta^{2}$).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "Curva di risonanza $A(\\omega)$ per $\\omega_0 = 2$ e $F_0/m = 1$. Con uno smorzamento piccolo il massimo è stretto e vicino alla frequenza propria (linea tratteggiata)."
    }
   ],
   "examples": [
    {
     "task": "Un corpo di massa $1\\,\\mathrm{kg}$ attaccato a una molla di costante elastica $16\\,\\mathrm{N/m}$ è smorzato con coefficiente $c = 4\\,\\mathrm{kg/s}$. All'inizio è spostato di $0{,}1\\,\\mathrm{m}$ e lasciato andare da fermo. Trova $x(t)$.",
     "steps": [
      "$x'' + 4x' + 16x = 0$, quindi $\\delta = 2$, $\\omega_0 = 4$. Poiché $\\delta \\lt \\omega_0$, si tratta di smorzamento sottocritico.",
      "Radici $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.",
      "$x(0) = C_1 = 0{,}1$; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, quindi $C_2 = \\frac{0{,}1}{\\sqrt{3}}$.",
      "<strong>$x(t) = 0{,}1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "Risolvi il problema $x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$.",
     "steps": [
      "La frequenza della forzante è uguale a quella propria ($\\omega = \\omega_0 = 3$), si ha risonanza: $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "Sostituendo si ottiene $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$, quindi $A = 0$, $B = 1$, $x_p = t\\sin 3t$.",
      "Integrale generale $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$; dalle condizioni $C_1 = 0$ e $3C_2 = 0$.",
      "<strong>$x(t) = t\\sin 3t$</strong>, l'ampiezza cresce linearmente nel tempo."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "Sistemi di equazioni differenziali lineari e ritratto di fase",
   "summary": "Il sistema $\\mathbf{x}' = A\\mathbf{x}$, soluzione mediante autovalori e autovettori, classificazione del punto di equilibrio.",
   "theory": [
    "<p>Un sistema di equazioni lineari del 1° ordine a coefficienti costanti ha la forma $\\mathbf{x}' = A\\mathbf{x}$, dove $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ e $A$ è\n       una matrice quadrata. Le soluzioni formano uno spazio vettoriale di dimensione $n$; la matrice le cui colonne sono $n$ soluzioni linearmente indipendenti si chiama\n       <strong>matrice fondamentale</strong>. Ogni equazione di ordine $n$ si può scrivere come sistema (per es. per $y'' + py' + qy = 0$ poniamo $x_1 = y$, $x_2 = y'$),\n       e viceversa un sistema $2\\times 2$ si può trasformare con il <strong>metodo di eliminazione</strong> in un'unica equazione del 2° ordine.</p>",
    "<p><strong>Metodo matriciale.</strong> Cerchiamo la soluzione $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$. Sostituendo $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$ è un\n       <strong>autovalore</strong> della matrice $A$ (radice dell'equazione $\\det(A - \\lambda I) = 0$) e $\\mathbf{v}$ il corrispondente autovettore.</p>\n       <ul><li>$\\lambda_1, \\lambda_2$ reali distinti: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>$\\lambda = \\alpha\\pm\\beta\\mathrm{i}$ complessi con vettore $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$: le soluzioni reali sono la parte reale e la parte immaginaria di\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$, cioè $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ e $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>\n       <li>$\\lambda$ doppio con un solo autovettore $\\mathbf{v}$: la seconda soluzione è $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$, dove $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>",
    "<p>Il <strong>ritratto di fase</strong> di un sistema piano rappresenta le traiettorie $(x(t), y(t))$ nel piano $xy$. Il punto $\\mathbf{0}$ è di equilibrio (stazionario) e, se\n       $\\det A\\neq 0$, è l'unico. Il suo tipo è determinato dagli autovalori, ovvero dalla traccia $\\mathrm{tr}\\,A$ e dal determinante:</p>\n       <table class=\"tbl\"><tr><th>autovalori</th><th>tipo</th><th>stabilità</th></tr>\n       <tr><td>reali, di segno opposto ($\\det A \\lt 0$)</td><td>sella</td><td>instabile</td></tr>\n       <tr><td>reali, dello stesso segno</td><td>nodo</td><td>stabile per $\\lambda \\lt 0$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>fuoco (spirali)</td><td>stabile per $\\alpha \\lt 0$</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>centro (curve chiuse)</td><td>stabile, non asintoticamente</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "Ritratto di fase del sistema $x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$. Le rette arancioni sono le direzioni degli autovettori (con autovalori reali), i triangolini mostrano il verso del moto al crescere di $t$. Cambiando gli elementi della matrice passa per tutti i tipi della tabella."
    }
   ],
   "examples": [
    {
     "task": "Risolvi il sistema $x' = x + 2y$, $y' = 2x + y$ con la condizione iniziale $x(0) = 3$, $y(0) = 1$.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, quindi $\\lambda_1 = 3$, $\\lambda_2 = -1$.",
      "Autovettori: per $\\lambda_1 = 3$ si ha $\\mathbf{v}_1 = (1, 1)^{T}$, per $\\lambda_2 = -1$ si ha $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Condizioni: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, quindi $C_1 = 2$, $C_2 = 1$.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> Gli autovalori hanno segno opposto, il punto di equilibrio è una sella."
     ]
    },
    {
     "task": "Determina il tipo del punto di equilibrio del sistema $x' = y$, $y' = -5x - 2y$ e confrontalo con un'equazione del 2° ordine.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, equazione caratteristica $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "Gli autovalori $-1\\pm 2\\mathrm{i}$ hanno parte reale negativa: <strong>fuoco stabile</strong>, le traiettorie si avvicinano all'origine lungo spirali.",
      "Il sistema è la riscrittura dell'equazione $x'' + 2x' + 5x = 0$ (oscillazioni smorzate); la sua soluzione è $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "Trasformata di Laplace",
   "summary": "Definizione, tabella delle trasformate, trasformata della derivata, antitrasformata mediante scomposizione in fratti semplici e risoluzione di problemi ai valori iniziali.",
   "theory": [
    "<p>La <strong>trasformata di Laplace</strong> associa a una funzione $f(t)$ definita per $t \\ge 0$ una funzione della variabile complessa (per noi reale) $s$:\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       L'integrale converge per $s \\gt s_0$ se $f$ è continua a tratti e di <strong>ordine esponenziale</strong>, cioè $|f(t)| \\le M\\mathrm{e}^{s_0t}$.\n       Per esempio $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ per $s \\gt a$. La trasformata è lineare\n       e per le funzioni continue è iniettiva, quindi a una trasformata $F$ corrisponde un'unica funzione originale $f = \\mathcal{L}^{-1}\\{F\\}$.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>Qui $u$ è la funzione di Heaviside (gradino unitario). La trasformata della convoluzione $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ è il prodotto $F(s)G(s)$.</p>",
    "<p><strong>Risoluzione di un problema ai valori iniziali.</strong> La regola per la trasformata della derivata trasforma un'equazione lineare a coefficienti costanti in un'equazione algebrica per $Y(s)$,\n       in cui le condizioni iniziali sono incorporate automaticamente. Da essa ricaviamo $Y(s)$ (di solito una funzione razionale), la scomponiamo in\n       <strong>fratti semplici</strong> e con la tabella troviamo $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$. Il metodo è vantaggioso soprattutto con termini noti discontinui o impulsivi.</p>",
    {
     "fig": "v3-laplace",
     "caption": "Procedimento risolutivo: trasformata, manipolazione algebrica nel dominio delle trasformate e antitrasformata."
    }
   ],
   "examples": [
    {
     "task": "Trova la trasformata di Laplace della funzione $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$.",
     "steps": [
      "Usiamo la linearità e la tabella: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong> per $s \\gt 2$."
     ]
    },
    {
     "task": "Con la trasformata di Laplace risolvi il problema $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$.",
     "steps": [
      "Trasformiamo: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, quindi $(s^{2} + 3s + 2)Y = s + 3$.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (fratti semplici, per es. con il metodo dei residui/«copertura»).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Verifica: $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. L'equazione caratteristica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, dove $\\mathrm{tr}\\,A = {@2}$ e $\\det A = {@3}$. Le radici sono $\\lambda_1 = {@4}$ e $\\lambda_2 = {@5}$.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ e ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ e ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$, quindi $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ dipende solo da $x$. Perciò $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Verifica: $(\\mu M)_y = {@11}$ e $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ con $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, cioè circa ${@8}$ individui.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. La condizione $P = \\frac{K}{2}$ significa $A\\mathrm{e}^{-{@4}t} = 1$, quindi $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ anni.",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, dalla misurazione $k = {@2} \\approx {@3}$. Dalla condizione ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ abbiamo $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minuti.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (radice doppia)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ e $\\mathcal{L}\\{y'\\} = sY{@2}$. Sostituendo $({@3})Y = {@4}{@5}{@6}$, quindi ${@7}$.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, discriminante dell'equazione caratteristica $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$, soluzione $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ con $C_1 = x(0) = {@3}$ e ${@4}C_2 = x'(0) = {@5}$, quindi $C_2 = {@6}$. Ampiezza $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Dalla condizione $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ abbiamo $\\mathrm{e}^{-t/\\tau} = {@2}$, quindi $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$, quindi $\\varphi$ è una costante, che scegliamo nulla",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$, quindi $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Dalla condizione $2^{-t/{@1}} = {@2}$ passando ai logaritmi $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. Sostituendo e confrontando i coefficienti: di $x^{2}$: ${@0} = {@1}$, $A = {@2}$; di $x$: ${@3} = {@4}$, $B = {@5}$; termine noto: ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. Sostituiamo: ${@0}{@1} = {@2}$. Confrontando i coefficienti: per $x$ si ha ${@3} = {@4}$, quindi $A = {@5}$; termine noto ${@6} = {@7}$, quindi $B = {@8}$.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$, quindi $K = {@1}$ e $m = {@2}$. Ciò concorda con la formula di Liouville: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ con $p = {@3}$.",
  ", teda $a = {@0}$": ", quindi $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "Il termine noto al numeratore rompe l'omogeneità. Un'equazione del genere va prima traslata nel punto di intersezione delle rette.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "Quale quantità di sale (in kg) è di equilibrio, cioè per quale si ha $x' = 0$?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "Quale tensione (in volt) ci sarà sul condensatore? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "Quale pendenza ha il segmento del campo di direzioni dell'equazione $y' = {@0}$ nel punto $[{@1}; {@2}]$?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "Quale temperatura avrà il corpo? Arrotonda ai decimi di grado.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "Qual è il coefficiente complessivo di $\\frac{1}{{@0}}$ in $Y(s)$, cioè $A$?",
  "Aký je súčin koreňov?": "Qual è il prodotto delle radici?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "L'ampiezza non è la somma $|C_1| + |C_2|$, ma $\\sqrt{C_1^{2} + C_2^{2}}$ (composizione di coseno e seno con la stessa frequenza).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "Ampiezza delle oscillazioni forzate in funzione della frequenza",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "Con la sostituzione $z = y^{k}$ trasformiamo l'equazione di Bernoulli $y'{@0} = {@1}$ in un'equazione lineare $z' + Pz = Q$ a coefficienti costanti. Determina $k$, $P$ e $Q$ (scrivi le frazioni nella forma $a/b$).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "L'equazione caratteristica ${@0}$ ha discriminante $D = {@1}$ e radici {@2}. {@3} la soluzione generale è ${@4}$.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "L'equazione caratteristica ${@0}$ ha radici $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Dalla prima riga di $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ per $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, quindi $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Per $t = 0$: $C_1 + C_2 = {@7}$ e ${@8} = {@9}$, da cui $C_1 = {@10}$, $C_2 = {@11}$.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "L'equazione caratteristica ${@0}$ ha radici ${@1}$ e ${@2}$, quindi ${@3}$ è una radice semplice (risonanza) e nella forma di $y_p$ compare il fattore $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Sostituendo, i termini con $x$ si elidono e resta $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, quindi $A = {@16}$.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "L'equazione caratteristica ${@0}$ ha radici {@1}, quindi ${@2}$. Sostituendo $x = 0$ in $y$ e $y'$ otteniamo il sistema {@3}, la cui soluzione è $C_1 = {@4}$, $C_2 = {@5}$.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "L'equazione caratteristica ${@0}$ ha {@1}. Il secondo membro è {@2}{@3}, quindi $\\alpha = {@4}$, che {@5} dell'equazione caratteristica ($k = {@6}$). Perciò $y_p = {@7}$.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "L'equazione caratteristica (dopo aver diviso per il coefficiente di $y''$) è $\\lambda^{2} + p\\lambda + q = 0$. Qual è la somma delle sue radici?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "Hai diviso solo per ${@0}$, ma nella soluzione c'è $x^{2}$, cioè $x_0^{2}$.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "La derivata di $(C_1 + C_2x){@0}$ in $x = 0$ vale ${@1}C_1 + C_2$; hai dimenticato il termine che viene dalla derivata dell'esponenziale.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "La derivata di $C_2\\sin {@0}t$ è ${@1}C_2\\cos {@2}t$, quindi $C_2 = \\frac{x'(0)}{\\omega_0}$, non $x'(0)$.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "Le derivate di $y_p$ non sono nulle: anche $y_p' = {@0}A{@1}$ e $y_p'' = {@2}A{@3}$ vanno sostituite.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "Il determinante è negativo, gli autovalori sono reali di segno opposto: sella.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "Nella soluzione generale sostituisci $x = 0$ e $y = y_0$ e ricava $C$.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "Sostituendo $y = \\mathrm{e}^{\\lambda x}$ otteniamo {@0}${@1}$. Per le relazioni di Viète $\\lambda_1 + \\lambda_2 = {@2}$ e $\\lambda_1\\lambda_2 = {@3}$, le radici sono {@4}. La soluzione generale è ${@5}$.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "Sostituiamo $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, da cui $C = {@3}$. La soluzione del problema di Cauchy è $y = {@4}$.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "Sostituiamo $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, quindi $({@3} - {@4})A = {@5}$ e $A = {@6}$. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "Sostituiamo: $C\\cdot {@0}^{2}{@1} = {@2}$, quindi ${@3}C = {@4}$ e $C = {@5}$.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "Sostituiamo: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, quindi $\\frac{C}{{@4}} = {@5}$ e $C = {@6}$. (Verifica: il primo membro dell'equazione è $(xy)'$ e $xy = {@7} + C$.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "Sostituisci $P = \\frac{K}{2}$ nella soluzione $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; ottieni $A\\mathrm{e}^{-rt} = 1$.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "Sostituisci $t = 0$ e risolvi il sistema per le costanti. Inserisci $C_1$ e $C_2$.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "Sostituisci $tx$ al posto di $x$ e $ty$ al posto di $y$. In un'equazione omogenea il secondo membro non cambia.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "Sostituisci $x = 0$ in $y_1, y_2, y_1', y_2'$.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "Sostituisci $x = 0$ nella soluzione generale e nella sua derivata e dal sistema ottenuto determina $C_1$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "Sostituisci $x = x_0$, $y = y_0$ nella soluzione generale e ricava $C$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "Sostituisci $x = x_0$, $y = y_0$ nella soluzione generale e risolvi l'equazione lineare in $C$.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "Sostituisci $x_p$ nell'equazione: $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "Sostituisci $y_p = Ax + B$ nell'equazione e confronta i coefficienti di $x$ e i termini noti.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "Sostituisci $y_p = A{@0}$ nell'equazione e determina $A$.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "Sostituisci $y_p$ nell'equazione e confronta i coefficienti del coseno e del seno; ottieni un sistema di due equazioni in $A$, $B$.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "Sostituisci la costante $y_p = K$ nell'equazione ($y_p' = 0$) e ricava $K$ con attenzione.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "La derivata seconda del coseno è negativa: $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "Non è la temperatura del corpo a decrescere esponenzialmente, ma la sua differenza dalla temperatura ambiente $T - T_o$.",
  "Exponenciálny a logistický rast": "Crescita esponenziale e logistica",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "L'esponente è la parte reale delle radici $\\alpha = -\\frac{p}{2}$; controllane il segno.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "La funzione $1 + y^{2}$ non ha zeri, non esistono soluzioni stazionarie. Separiamo le variabili: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, quindi $\\mathrm{arctg}\\,y = {@1} + C$ e $y = \\mathrm{tg}({@2} + C)$. La costante sta dentro l'argomento; ad esempio $y = \\mathrm{tg}({@3}) + C$ non soddisfa l'equazione per $C\\neq 0$.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "Le funzioni ${@0}$ formano un sistema fondamentale dell'equazione ${@1} = 0$. Il loro wronskiano ha la forma $W(x) = K\\mathrm{e}^{mx}$. Determina $K$ e $m$.",
  "Fázový portrét lineárnej sústavy": "Ritratto di fase di un sistema lineare",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "Le funzioni goniometriche corrispondono a radici complesse ($D \\lt 0$). Qual è qui il discriminante?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "L'equazione omogenea $y'{@0} = 0$ dà $y' = {@1}$; controlla il segno nell'esponente.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "L'equazione omogenea $y'{@0} = 0$ ha soluzione $y_h = C{@1}$. Cerchiamo la soluzione particolare come costante $y_p = K$: ${@2}K = {@3}$, quindi $K = {@4}$. La soluzione generale è ${@5}$.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "Cerca l'ordine massimo della derivata. Un esponente sopra la parentesi, ad esempio $(y')^{3}$, non aumenta l'ordine.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "Il fattore integrante è $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrando $y{@3} = {@4} + B$, quindi $y = {@5} + B{@6}$ (la soluzione particolare si può trovare anche sostituendo $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Dalla condizione ${@12} + B = {@13}$, quindi $B = {@14}$. Risposta: $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "Il fattore integrante è ${@0}$ e la soluzione ha la forma $y = {@1} + \\frac{C}{{@2}}$. Determina $C$ dalla condizione iniziale.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "Integra $M$ rispetto a $x$ (senza $\\varphi(y)$) e calcola questa parte di $F$ nel punto $[{@0}; {@1}]$.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "Integra $M$ rispetto a $x$, aggiungi la funzione incognita $\\varphi(y)$ e determinala confrontando $F_y$ con $N$. Infine sostituisci il punto.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "L'integrale dà $\\mathrm{arctg}\\,y = \\dots$; per ricavare $y$ bisogna usare la funzione inversa dell'arcotangente.",
  "Integrálne krivky rovnice y' = xy": "Curve integrali dell'equazione y' = xy",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "Al coefficiente della scomposizione aggiungi il termine che viene dalla condizione iniziale.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "Deriva ogni funzione e sostituiscila nell'equazione. La soluzione deve soddisfare l'equazione per ogni $x$.",
  "Keďže $c^{2} = 4mk$": "Poiché $c^{2} = 4mk$",
  "Keďže $c^{2} \\gt 4mk$": "Poiché $c^{2} \\gt 4mk$",
  "Keďže $c^{2} \\lt 4mk$": "Poiché $c^{2} \\lt 4mk$",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "Poiché ${@0}\\neq {@1}$, non si tratta di risonanza.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "$A$ positivo significa che le oscillazioni sono in fase con la forza eccitatrice.",
  "Koeficient p": "Coefficiente p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "Il coefficiente di $x'$ (dopo aver diviso per la massa) è $2\\delta$, non $\\delta$. Prima dividilo per due.",
  "Koeficient q": "Coefficiente q",
  "Koeficient rastu k": "Tasso di crescita k",
  "Koeficient útlmu δ": "Coefficiente di smorzamento δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "Calcola i coefficienti uno dopo l'altro partendo dalla potenza più alta: prima $A$ dal termine con $x^{2}$, poi $B$, infine $C$.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "La costante $A$ si ricava dalla condizione $P(0) = \\frac{K}{1 + A} = P_0$, quindi $A = \\frac{K - P_0}{P_0}$, non $\\frac{K}{P_0}$.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "La costante $C$ nella soluzione è divisa per il fattore integrante ${@0}$; per $x = 2$ va divisa anch'essa.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "La costante di decadimento non è $\\frac{1}{T}$, ma $k = \\frac{\\ln 2}{T}$: nel tempo $T$ la quantità deve scendere esattamente alla metà.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "La costante nasce dall'integrazione, cioè nell'uguaglianza $\\mathrm{arctg}\\,y = \\dots + C$. Quando ne ricavi $y$, dove finisce $C$?",
  "Koľko gramov izotopu zostane? {@0}": "Quanti grammi dell'isotopo resteranno? {@0}",
  "Koľko je $y({@0})^{2}$?": "Quanto vale $y({@0})^{2}$?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "Quanti individui avrà la popolazione? Arrotonda all'intero.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "Quanti chilogrammi di sale ci saranno nel serbatoio dopo ${@0}$ minuti? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "Quanti tempi di dimezzamento trascorrono in ${@0}$ {@1}? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "Quale funzione è la soluzione generale dell'equazione $y' = {@0}(1 + y^{2})$?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "Quale funzione è la soluzione generale dell'equazione $y'{@0} = {@1}$?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "Quale funzione è la soluzione generale dell'equazione ${@0} = 0$?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "Quale delle funzioni è soluzione dell'equazione ${@0}$?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "Quale delle equazioni è omogenea, cioè si può scrivere nella forma $y' = \\varphi\\left(\\frac{y}{x}\\right)$?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "Qual è la trasformata di Laplace $Y(s)$ della soluzione del problema ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "Con la trasformata di Laplace risolvi il problema $y'{@0} = {@1}$, $y(0) = {@2}$. La soluzione ha la forma $y(t) = A{@3} + B{@4}$; determina $A$ e $B$.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "Formula di Liouville: $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "Il denominatore è il polinomio caratteristico dell'equazione: i coefficienti di $s$ hanno gli stessi segni di quelli di $y'$ nell'equazione.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "Scomponiamo il denominatore: ${@0} = (s{@1})(s{@2})$. Scomposizione in frazioni parziali: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Metodo della copertura: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Quindi $f(t) = {@17}{@18}$.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "La potenza di $x$ nella forma di $y_p$ è uguale alla molteplicità del numero ${@0}$ come radice dell'equazione caratteristica. Verifica questa molteplicità.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "Una costante moltiplicativa nasce nelle equazioni $y' = g(x)y$ (tramite il logaritmo). Qui integri $\\frac{1}{1 + y^{2}}$, quindi la costante è additiva nell'argomento.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "Prima controlla il segno di $\\det A$: decide se gli autovalori hanno segni opposti.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "Prima determina $k$ dalla misurazione, poi risolvi $T(t) = T^{*}$ passando ai logaritmi.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "Sia $F(s) = \\mathcal{L}\\{f\\}(s)$ per $f(t) = {@0}$. Calcola $F({@1})$ (esattamente come frazione, oppure con 3 cifre decimali).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "Un condensatore scarico di capacità ${@0}\\,\\mu\\mathrm{F}$ viene caricato da una sorgente di tensione ${@1}\\,\\mathrm{V}$ attraverso un resistore di resistenza ${@2}\\,\\mathrm{k\\Omega}$.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "Non sommare l'integrale di $M$ rispetto a $x$ e l'integrale di $N$ rispetto a $y$: così conteresti due volte i termini misti. Da $N$ prendi solo i termini che ancora mancano.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "L'oscillatore non smorzato $x'' + {@0}x = 0$ ha le condizioni iniziali $x(0) = {@1}$, $x'(0) = {@2}$. Determina l'ampiezza delle oscillazioni. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "L'oscillatore non smorzato è eccitato da una forza periodica: $x'' + {@0}x = {@1}$. Le oscillazioni forzate a regime hanno la forma $x_p = A\\cos {@2}$. Determina $A$ (come frazione o numero intero).",
  "Nosná kapacita K": "Capacità portante K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "Il serbatoio contiene ${@0}$ litri {@1}. Vi affluisce {@2} e la soluzione perfettamente mescolata defluisce con la stessa velocità. Quanti chilogrammi di sale ci saranno nel serbatoio dopo ${@3}$ minuti? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "Trova le radici dell'equazione caratteristica dell'equazione differenziale ${@0}$. Inseriscile separate da punto e virgola.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "Trova gli autovalori e gli autovettori nella forma $(1, m)^{T}$, poi sostituisci $t = 0$ e risolvi il sistema per $C_1$, $C_2$.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "Trova gli autovalori della matrice del sistema {@0}. Inseriscili separati da punto e virgola.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "Trova l'antitrasformata $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ della funzione $F(s) = \\dfrac{{@0}}{{@1}}$. Il risultato ha la forma $f(t) = A{@2} + B{@3}$; determina $A$ e $B$.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "Il volume non cambia, la concentrazione nel serbatoio è $\\frac{x}{{@0}}$. Bilancio: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Il valore di equilibrio è $cV = {@5}$, quindi $x(t) = {@6}$ e $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "La trasformata dell'esponenziale è $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, non $\\frac{1}{s + a}$.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "La trasformata di una potenza è $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; hai dimenticato il fattoriale.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "Separiamo le variabili: $y\\,dy = {@0}\\,dx$, quindi $\\frac{y^{2}}{2} = {@1} + C$, cioè $y^{2} = {@2} + 2C$. Dalla condizione $2C = {@3}$, quindi $y^{2} = {@4} + {@5}$. Poiché $y(0) \\gt 0$, prendiamo la radice positiva: $y = \\sqrt{{@6} + {@7}}$ e $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "Separa le variabili $\\frac{dy}{y^{2}} = k\\,dx$ e ricorda che $\\int y^{-2}\\,dy = -\\frac{1}{y}$.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "Separa le variabili $y\\,dy = kx\\,dx$ e integra. Il segno della radice si determina dalla condizione iniziale.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "La radice di una somma non è la somma delle radici: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Prima somma sotto la radice.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "Il deflusso di sale è la concentrazione per la portata, cioè $\\frac{x}{V}\\cdot q$. Nell'esponente deve quindi comparire anche la portata $q$.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "Verifica sostituendo: per $y = {@0}x$ si ha $xy' = {@1}x$, ma il secondo membro ${@2}y$ è diverso.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "Verifica: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrando $M$ rispetto a $x$: $F = {@1} + \\varphi(y)$. Dalla condizione $F_y = N$ risulta {@2}. Quindi $F(x, y) = {@3}$ e $C = F({@4}, {@5}) = {@6}$.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "Cerca la soluzione particolare nella forma $A\\mathrm{e}^{cx}$ (sostituiscila nell'equazione), la costante $B$ determinala dalla condizione iniziale.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "Cerchiamo la soluzione particolare dell'equazione ${@0} = {@1}$ nella forma $y_p = Ax + B$. Determina $A$ e $B$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "Cerchiamo la soluzione particolare dell'equazione ${@0} = {@1}$ nella forma $y_p = Ax^{2} + Bx + C$. Determina $A$, $B$ e $C$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "Cerchiamo la soluzione particolare dell'equazione ${@0} = {@1}$ nella forma $y_p = A{@2} + B{@3}$. Determina $A$ e $B$.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "Il periodo delle oscillazioni non smorzate è $T = 2\\pi\\sqrt{m/k}$.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "Sostituendo $x_p$ ottieni $KA\\cos {@0} = {@1}\\cos {@2}$. Determina $K$.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "Sostituendo $y_p = Ax{@0}$ resta $A(2r + p){@1}$. Calcola $2r + p$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "Sostituendo $y_p = A{@0}$ ottieni $A(c + a) = b$: la derivata dà $c$ e il termine ${@1}$ aggiunge $+a$, non $-a$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "Sostituendo $y_p = A{@0}$ ottieni $A(c^{2} + pc + q){@1}$. Calcola il valore della parentesi.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "Dopo aver sostituito $z' = (1-n)y^{-n}y'$ bisogna moltiplicare l'intera equazione per $1 - n$, quindi anche i coefficienti $p$ e $q$.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "Dopo la sostituzione l'equazione per i coefficienti di ${@0}$ ha la forma $uA{@1} = {@2}$. Determina $u$.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "Dopo l'integrazione hai $-\\frac{1}{u} = \\ln x + C$. Determina $C$ (frazione o numero intero).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "Dopo l'integrazione hai $\\frac{u^{2}}{2}$; per ricavare $u^{2}$ devi moltiplicare per due entrambi i membri, quindi anche il termine con il logaritmo.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "Dopo l'integrazione e la moltiplicazione per due ottieni $y^{2} = {@0} + K$. Determina la costante $K$ dalla condizione iniziale.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "Dopo l'integrazione hai $-\\frac{1}{y} = {@0} + C$. Determina $C$ dalla condizione iniziale (frazione o numero intero).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "Dopo la sostituzione $y = ux$ e l'integrazione ricava $u^{2}$ e calcola $u({@0})^{2}$. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "Dopo la sostituzione $y = ux$ ottieni $u = {@0} + C$. Determina $C$ dalla condizione iniziale.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "Dopo la trasformazione e aver ricavato $Y(s)$ scomponi la frazione ${@0}$ in frazioni parziali. Qual è il coefficiente di $\\frac{1}{{@1}}$?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "Dividendo per $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Il fattore integrante è $\\mathrm{e}^{{@2}\\ln x} = {@3}$, l'equazione diventa $({@4}y)' = {@5}$, quindi ${@6}y = {@7} + C$ e $y = {@8} + \\frac{C}{{@9}}$. Dalla condizione $1 + C = {@10}$, $C = {@11}$. Allora $y(2) = {@12}{@13}$.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "Dividendo per $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Sostituzione $y = ux$: $u + xu' = u^{2} + u$, quindi $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (la soluzione $u = 0$ non soddisfa la condizione). Integriamo: $-\\frac{1}{u} = \\ln x + C$, dalla condizione $C = {@0}$. Da qui $u = \\frac{{@1}}{1{@2}}$ e $y = \\frac{{@3}}{1{@4}}$, quindi $y({@5}) \\approx {@6}$.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "Dividendo per $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Sostituzione $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, quindi $u\\,du = {@2}\\frac{dx}{x}$ e $\\frac{u^{2}}{2} = {@3} + C$. Dalla condizione $u(1) = {@4}$ abbiamo $u^{2} = {@5} + {@6}$ e, poiché $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Allora $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "Dividendo per ${@0}$: $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "La percentuale ${@0}\\,\\%$ si riferisce all'espressione $1 - \\mathrm{e}^{-t/\\tau}$, non all'esponenziale da sola.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "La condizione di esattezza è $M_y = N_x$. Abbiamo $M_y = {@0}$ e $N_x = {@1}a{@2}{@3}$. Confrontando i coefficienti di {@4} otteniamo ${@5}a = {@6}${@7}. La funzione potenziale è allora $F = {@8}$.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "Per la formula di Liouville $W(x) = W(0)\\mathrm{e}^{-px}$; controlla il segno dell'esponente.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "Per la legge di Newton $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Dalla misurazione $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, quindi $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "Per le relazioni di Viète la somma delle radici è $-p$.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "Per la tabella e la linearità $F(s) = {@0}$ per $s \\gt {@1}$. Sostituendo $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "Il moto di un corpo è descritto dall'equazione ${@0}x'' + {@1}x' + {@2}x = 0$ (massa ${@3}\\,\\mathrm{kg}$, smorzamento ${@4}\\,\\mathrm{kg/s}$, rigidità ${@5}\\,\\mathrm{N/m}$). Di che tipo di moto si tratta?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "Il tempo di dimezzamento di un isotopo radioattivo è ${@0}$ {@1}. All'inizio il campione contiene ${@2}\\,\\mathrm{g}$ di isotopo. Quanti grammi di isotopo resteranno dopo ${@3}$ {@4}? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "Il tempo di dimezzamento di un isotopo radioattivo è ${@0}$ {@1}. Dopo quanto tempo (in {@2}) la sua quantità scende al ${@3}\\,\\%$ della quantità iniziale? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "Una popolazione segue l'equazione logistica $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ in anni) e all'inizio conta ${@2}$ individui.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "Confronta $c^{2}$ con $4mk$, oppure il coefficiente di smorzamento $\\delta = \\frac{c}{2m}$ con la pulsazione propria $\\omega_0 = \\sqrt{k/m}$.",
  "Porovnaj absolútne členy a urči $B$.": "Confronta i termini noti e determina $B$.",
  "Porovnaj absolútne členy a urči $C$.": "Confronta i termini noti e determina $C$.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "Confronta i coefficienti di $x$ e determina $A$.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "Confronta i coefficienti di $x$ e determina $B$.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "Confronta i coefficienti di $x^{2}$ e determina $A$.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "Usa $W = y_1y_2' - y_1'y_2$. Puoi verificare l'esponente con la formula di Liouville $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "Usa $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "Usa $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ e $\\mathcal{L}\\{y'\\} = sY - y(0)$ e ricava $Y$.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "Usa la prima riga del sistema $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "Usa la formula $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, dove $A = \\frac{K - P_0}{P_0}$.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "Attenzione al segno di $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, portato al secondo membro diventa $+y'(0)$.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "Attenzione al segno: $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "Attenzione al segno: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, non $\\frac{1}{y}$.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "Il secondo membro è omogeneo di grado 2, non 0: sostituendo $tx$, $ty$ si moltiplica per $t^{2}$. La forma $\\varphi\\left(\\frac{y}{x}\\right)$ richiede il grado 0.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "Il secondo membro contiene solo una costante (polinomio di grado 0), il polinomio $Ax + B$ qui non serve.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "Per $x_p = Bt{@0} {@1}$ si ha $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (i termini con $t$ si elidono). Confrontando ${@7}{@8}B = {@9}$, quindi $B = {@10}$. L'ampiezza $|B|t$ cresce linearmente nel tempo.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "Per $y = \\cos {@0}x$ si ha $y'' = -{@1}\\cos {@2}x$, e quindi $y'' + {@3}y = 0$. Con $\\cos {@4}x$ si otterrebbe $y'' = -{@5}\\cos {@6}x$, l'esponenziale ha derivata seconda positiva.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "Per $y = \\mathrm{e}^{-{@0}x}$ si ha $y'' = {@1}\\mathrm{e}^{-{@2}x}$, e quindi $y'' - {@3}y = 0$. Per $\\sin {@4}x$ si ottiene $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "Per $y = x^{{@0}}$ si ha $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Per $y = {@6}x$ si otterrebbe $xy' = {@7}x$, ma ${@8}y = {@9}x$.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "Per $y' + py = qy^{n}$ si ha $z = y^{1-n}$ e $z' + (1-n)pz = (1-n)q$.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "Per $y\\neq 0$ separiamo le variabili: $\\frac{dy}{y} = {@0}\\,dx$, quindi $\\ln|y| = {@1} + c$ e $y = C\\mathrm{e}^{{@2}}$ (la soluzione $y = 0$ è compresa per $C = 0$). Dalla condizione $C = {@3}$, quindi $y = {@4}$ e $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "Per $y_p = A\\mathrm{e}^{cx}$ dopo la sostituzione si ottiene $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "Per quale valore del parametro $a$ l'equazione $({@0})\\,dx + ({@1})\\,dy = 0$ è esatta?",
  "Pre dva rôzne reálne korene": "Per due radici reali distinte",
  "Pre dvojnásobný koreň": "Per una radice doppia",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "Per radici complesse coniugate $\\alpha\\pm\\beta\\mathrm{i}$",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "Per un polinomio di 1° grado serve il polinomio completo $Ax + B$, il solo $Ax$ non basta.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "Riscrivi l'equazione nella forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ e determina $\\delta$.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Riscrivi l'equazione nella forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; allora $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "Per $x = 0$ si ha $C\\cdot\\mathrm{e}^{0} = C$, ma nella soluzione c'è anche il termine costante ${@0}$, che devi sottrarre da $y_0$.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "Per $x = 0$ entrambe le esponenziali valgono 1, quindi $y(0) = A + B$. Il valore $A$ va sottratto da $y(0)$.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "Per $x = 1$ si ha $u(1) = y(1)$.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "Per $y = \\cos \\omega x$ si ha $y'' = -\\omega^{2}y$; il coefficiente ${@0}$ nell'equazione è $\\omega^{2}$, non $\\omega$.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "Per $y = \\mathrm{e}^{rx}$ si ha $y'' = r^{2}y$; il coefficiente ${@0}$ nell'equazione è $r^{2}$, non $r$.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "Per il termine noto hai dimenticato $y_p'' = 2A$: anche la derivata seconda contribuisce con una costante.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "Derivando il prodotto $x\\mathrm{e}^{rx}$ in $y_p''$ compare il termine $2rA\\mathrm{e}^{rx}$, non solo $rA\\mathrm{e}^{rx}$.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "Derivando ${@0}$ rispetto a $x$ si ottiene il coefficiente ${@1}a$; l'uguaglianza dei coefficienti va ancora divisa per ${@2}$.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "Derivando il prodotto ${@0}\\cdot(\\dots)$ si ottiene anche il termine ${@1}C_1$ dalla derivata dell'esponenziale.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "Derivando due volte il prodotto $t{@0} {@1}$ si ottengono due termini uguali senza $t$, in totale $2\\omega_0$ volte.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "Con una radice doppia hai una sola esponenziale; la seconda soluzione indipendente si ottiene moltiplicando per $x$.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "Con una radice doppia l'esponenziale si moltiplica per $x$, non per $x^{2}$ (questo accadrebbe con una radice tripla).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "Integrando ${@0}$ hai dimenticato di dividere per l'esponente: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "Con radici complesse le soluzioni non sono esponenziali reali; usa la forma $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "Con radici $\\alpha\\pm\\beta\\mathrm{i}$ nell'esponente c'è la parte reale $\\alpha$ e nelle funzioni goniometriche la parte immaginaria $\\beta$; le hai scambiate.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "Confrontando i termini noti hai dimenticato il termine ${@0} = {@1}$, che proviene dalla derivata.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "Portando il termine costante dall'altra parte dell'equazione non gli hai cambiato segno.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "Con risonanza con radice semplice $r$, sostituendo $y_p = Ax\\mathrm{e}^{rx}$ si ottiene l'espressione $A(2r + p)\\,\\mathrm{e}^{rx}$.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "Risolvendo $2^{-t/T} = p$ bisogna dividere il logaritmo per $\\ln 2$ (oppure usare il logaritmo in base 2).",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "Ricavando $C$ dalla frazione $\\frac{C}{x_0}$ bisogna moltiplicare per $x_0$, non dividere.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "Nel metodo della copertura sostituisci $s = a$ nel resto della frazione; al denominatore resta quindi $a - b$, non $b - a$.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "La primitiva di $ax^{n}$ è $\\frac{a}{n+1}x^{n+1}$.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "La soluzione del problema di Cauchy $y'{@0} = {@1}$, $y(0) = {@2}$ ha la forma $y = A{@3} + B{@4}$. Determina $A$ e $B$.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "Scriviamo la soluzione del problema di Cauchy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ nella forma ${@3}$. Determina $C_1$ e $C_2$.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "La soluzione è $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; determina $\\mathrm{e}^{-k}$ dalla seconda misurazione.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "La soluzione è la somma $y_h + y_p$: la soluzione particolare costante non si moltiplica per l'esponenziale.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "La soluzione è la somma di $y_h$ (esponenziale con il coefficiente di $y$ cambiato di segno) e della soluzione particolare costante.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "La soluzione ha la forma $\\mathrm{e}^{\\lambda x}$, dove $\\lambda$ è una radice dell'equazione caratteristica; controlla i segni delle radici.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "La soluzione ha la forma $y = C\\mathrm{e}^{G(x)}$ con $G(0) = 0$. Determina $C$ dalla condizione iniziale.",
  "Riešenie rovnice y″ + py′ + qy = 0": "Soluzione dell'equazione y″ + py′ + qy = 0",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "Risolvi l'equazione $2^{-t/T} = p$ passando ai logaritmi: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "L'equazione $({@0})\\,dx + ({@1})\\,dy = 0$ è esatta. Scriviamo il suo integrale generale nella forma $F(x, y) = C$, dove $F(0, 0) = 0$. Determina $C$ per la curva integrale che passa per il punto $[{@2}; {@3}]$.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "L'equazione $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) non è esatta. Ha un fattore integrante della forma $\\mu = x^{k}$. Determina $k$.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "L'equazione $x'' + {@0}x = {@1}$ descrive una risonanza. La sua soluzione particolare ha la forma $x_p = Bt{@2} {@3}$. Determina $B$.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "L'equazione $y' = f(x, y)$ dice che la pendenza della tangente nel punto $[x; y]$ è $f(x, y)$. Sostituisci le coordinate del punto.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "L'equazione $y' = {@0}$ ha sia al numeratore sia al denominatore funzioni omogenee dello stesso grado, quindi dopo la sostituzione $x \\to tx$, $y \\to ty$ il $t$ si semplifica e il secondo membro dipende solo da $\\frac{y}{x}$. Le altre equazioni contengono termini di gradi diversi o un termine noto, quindi dopo la sostituzione $tx$ e $ty$ il $t$ non si semplifica.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "L'equazione ${@0} = {@1}$ ha una soluzione particolare della forma $y_p = Ax{@2}$. Determina $A$.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "L'equazione ${@0} = {@1}$ ha una soluzione particolare della forma $y_p = A{@2}$. Determina $A$.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "L'equazione ${@0}x'' + {@1}x = 0$ ha $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Periodo $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "L'equazione è omogenea: $y' = \\frac{y}{x}{@0}$. La sostituzione $y = ux$ dà $u + xu' = u{@1}$, quindi $u' = {@2}\\frac{{@3}}{x}$ e $u = {@4} + C$. Dalla condizione $u(1) = {@5}$ si ha $C = {@6}$, quindi $y = x({@7}{@8})$ e $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "L'equazione ha la forma $y' = g(x)\\,y$. Separa le variabili $\\frac{dy}{y} = g(x)\\,dx$ e integra; ottieni $y = C\\mathrm{e}^{G(x)}$.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "La differenza $M_y - N_x$ va ancora divisa per la funzione $N = {@0}$, non solo per la variabile $x$.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "Decide il segno del discriminante $c^{2} - 4mk$. Ricalcolalo: confronti il quadrato dello smorzamento con il quadruplo del prodotto $mk$.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "Decide il segno del discriminante dell'equazione caratteristica, cioè il confronto tra $c^{2}$ e $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, si tratta di {@3}. (In modo equivalente $\\delta = \\frac{c}{2m} = {@4}$ e $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "Scomponi $F$ in frazioni parziali $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ e determina $A$.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "Scomponi il denominatore nel prodotto $(s - a)(s - b)$ e $F$ in frazioni parziali $\\frac{A}{s-a} + \\frac{B}{s-b}$; poi $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "Il decadimento segue l'equazione $m' = -km$, quindi $m(t) = m_0\\mathrm{e}^{-kt}$ con $k = \\frac{\\ln 2}{T}$, cioè $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "L'ordine è determinato dalla derivata di ordine massimo che compare nell'equazione, non dalla potenza a cui la derivata è elevata. La derivata di ordine massimo nell'equazione è la {@0}, quindi l'equazione è <strong>del {@1}° ordine</strong>.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "Schema di risoluzione di un problema ai valori iniziali con la trasformata di Laplace",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "Una sella si ha solo con determinante negativo (autovalori reali di segno opposto). Ricalcola $\\det A$.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "La pendenza del campo nel punto $[x; y]$ è il valore del secondo membro $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. La curva integrale che passa per il punto $[{@4}; {@5}]$ vi ha una tangente di pendenza ${@6}$.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "Campo di direzioni dell'equazione omogenea y' = (x + y)/(x − y)",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "Campo di direzioni dell'equazione y' = x − y con una curva integrale",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "La stabilità è determinata dal segno della traccia $\\mathrm{tr}\\,A$ (la somma degli autovalori, ovvero il doppio della loro parte reale). Verificalo.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "La soluzione stazionaria $y = 0$ non soddisfa la condizione. Per $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, quindi $-\\frac{1}{y} = {@1} + C$. Dalla condizione $C = {@2}$. Da qui $y = \\frac{{@3}}{1{@4}}$, definita sull'intervallo $\\langle 0; {@5}\\rangle$ (lì il denominatore è positivo). Sostituendo $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "Un centro si ha solo con traccia nulla; altrimenti le traiettorie si avvicinano al punto o se ne allontanano.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "La sostituzione è $z = y^{1-n}$, non $y^{n-1}$: l'esponente deve eliminare la potenza $y^{n}$ dopo aver diviso l'equazione.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "Il sistema {@0} ha la condizione iniziale $x(0) = {@1}$, $y(0) = {@2}$. Scriviamo la soluzione nella forma $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, dove $\\lambda_1 \\gt \\lambda_2$ e gli autovettori hanno prima componente $1$. Determina $C_1$ e $C_2$.",
  "Sčítaj: $F({@0}) = ?$": "Somma: $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "Un corpo di massa ${@0}\\,\\mathrm{kg}$ oscilla senza smorzamento su una molla di rigidità ${@1}\\,\\mathrm{N/m}$. Qual è il periodo delle oscillazioni in secondi? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "Un corpo con temperatura ${@0}{@1}$ viene posto in una stanza a temperatura ${@2}{@3}$. Dopo ${@4}$ minuti ha temperatura ${@5}{@6}$.",
  "Tlmený harmonický oscilátor": "Oscillatore armonico smorzato",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "Un oscillatore smorzato segue l'equazione ${@0}x'' + {@1}x' + {@2}x = 0$. Determina la pulsazione $\\omega_d$ delle sue oscillazioni smorzate. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "Questo è l'esponente (la potenza), non l'ordine della derivata. L'ordine è determinato dalla derivata di ordine massimo che compare nell'equazione.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Questa è la pulsazione propria dell'oscillatore non smorzato $\\omega_0$. Lo smorzamento abbassa la frequenza: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Questa è la scarica del condensatore. Durante la carica la tensione cresce da zero a $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "Trasforma l'equazione ($\\mathcal{L}\\{y'\\} = sY - y(0)$), ricava $Y(s)$ e scomponila in frazioni parziali.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "Trasformando: $sY{@0}{@1} = {@2}$, quindi $Y = {@3}{@4}$. Scomposizione: ${@5} = {@6}{@7}$. Con l'antitrasformata $y = ({@8}{@9}){@10}{@11}$, quindi $A = {@12}$, $B = {@13}$.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "Qui $n = {@0}$, la sostituzione è $z = y^{1-n}$, quindi $k = 1 - {@1} = {@2}$. Dividendo l'equazione per $y^{{@3}}$ otteniamo $y^{-n}y'{@4} = {@5}$. Poiché $z' = (1-n)y^{-n}y'$, moltiplicando l'equazione per $1 - n = {@6}$ abbiamo $z'{@7} = {@8}$. Quindi $P = (1-n)p = {@9}$ e $Q = (1-n)q = {@10}$.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "La forma $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ corrisponde solo a una radice doppia ($D = 0$). Qual è qui il discriminante?",
  "Urči $A$ (zlomok alebo celé číslo).": "Determina $A$ (frazione o numero intero).",
  "Urči $A$.": "Determina $A$.",
  "Urči $C = F({@0}, {@1})$.": "Determina $C = F({@0}, {@1})$.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "Determina $C_1$ nella soluzione $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "Determina $C_2$ (frazione o numero intero).",
  "Urči $C_2$.": "Determina $C_2$.",
  "Urči $\\omega_0^{2}$.": "Determina $\\omega_0^{2}$.",
  "Urči $\\omega_d$. {@0}": "Determina $\\omega_d$. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "Determina $\\varphi(y)$ con $\\varphi(0) = 0$ dalla condizione $F_y = N$ e calcola $\\varphi({@0})$.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "Determina $y({@0})$ (il segno in base alla condizione iniziale).",
  "Urči amplitúdu kmitov. {@0}": "Determina l'ampiezza delle oscillazioni. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "Determina l'esponente $k$ nella sostituzione $z = y^{k}$ (frazione nella forma $a/b$).",
  "Urči exponent $m$.": "Determina l'esponente $m$.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "Determina il valore dell'esponente $G({@0})$, dove $G(x) = \\int_0^x g(t)\\,dt$. {@1}",
  "Urči koeficient $P$ pri $z$.": "Determina il coefficiente $P$ di $z$.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "Determina la costante $A$ nella soluzione $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.",
  "Urči oba korene (oddelené bodkočiarkou).": "Determina entrambe le radici (separate da punto e virgola).",
  "Urči pravú stranu $Q$.": "Determina il secondo membro $Q$.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "Determina l'ordine dell'equazione differenziale ${@0}$.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "Determina il tipo del punto di equilibrio $[0; 0]$ del sistema {@0}.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "Determina l'autovalore maggiore $\\lambda_1$.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "In quale forma bisogna cercare la soluzione particolare dell'equazione ${@0} = {@1}$ con il metodo dei coefficienti indeterminati?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "Al numeratore ci sono termini di gradi diversi ($x^{2}$ è di grado 2, $y$ di grado 1), quindi dopo la sostituzione il $t$ non si semplifica.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "Gli autovalori di una matrice $2\\times 2$ sono le radici dell'equazione $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "Gli autovalori sono complessi con parte reale ${@0}$: {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "Gli autovalori sono reali con lo stesso segno (prodotto ${@0} \\gt 0$), la loro somma è ${@1}$: {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "Gli autovalori sono immaginari puri: centro.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "L'autovettore relativo a $\\lambda_1$ ha la forma $(1, m_1)^{T}$. Determina $m_1$.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "L'autovettore relativo a $\\lambda_2$ ha la forma $(1, m_2)^{T}$. Determina $m_2$.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "Curve di livello della funzione F(x, y) = x² − xy + y²",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "Dividi l'equazione per $x$ e usa il fattore integrante $\\mu = \\mathrm{e}^{\\int p\\,dx}$; per $p = \\frac{n}{x}$ si ha $\\mu = x^{n}$.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "Dividi l'equazione per $x^{2}$, sostituisci $y = ux$ e separa le variabili $\\frac{du}{u^{2}} = \\frac{dx}{x}$.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "Dividi l'equazione per $xy$, ottieni $y' = \\frac{y}{x} + k\\frac{x}{y}$. Poi usa la sostituzione $y = ux$.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "Ricava $y$ e calcola $y({@0})$ (frazione o numero intero).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "Hai ricavato $\\frac{C}{{@0}}$, ma non $C$ stessa: moltiplica ancora l'equazione per ${@1}$.",
  "Vypočítaj $M_y - N_x$.": "Calcola $M_y - N_x$.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "Calcola $W(0)$, cioè il valore di $K$.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "Calcola $\\frac{M_y - N_x}{N}$. Se risulta $\\frac{k}{x}$, il fattore integrante è $\\mathrm{e}^{k\\ln x} = x^{k}$.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "Calcola $\\frac{\\partial M}{\\partial y}$ e $\\frac{\\partial N}{\\partial x}$ e confronta i coefficienti delle stesse potenze.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "Calcola $\\mathrm{e}^{-{@0}k}$. Arrotonda a 4 cifre decimali.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Calcola $\\tau = RC$ (kiloohm per microfarad danno millisecondi) e sostituisci in $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Vypočítaj $u({@0})$. {@1}": "Calcola $u({@0})$. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "Calcola $y(2)$ (frazione o numero decimale).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "Calcola $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "Calcola $y({@0})$. {@1}",
  "Vypočítaj determinant $\\det A$.": "Calcola il determinante $\\det A$.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcola la trasformata del termine esponenziale ${@0}$ nel punto $s = {@1}$ (frazione).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "Calcola la trasformata del termine goniometrico nel punto $s = {@0}$ (frazione).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Calcola la trasformata del termine ${@0}$ nel punto $s = {@1}$ (frazione).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "Calcola il periodo delle oscillazioni in secondi. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "Calcola la traccia della matrice del sistema $\\mathrm{tr}\\,A$.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "Calcola traccia, determinante e discriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ e usa la tabella della teoria.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "Calcola la pulsazione propria $\\omega_0$ (in $\\mathrm{s^{-1}}$). Arrotonda a 3 cifre decimali.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "Calcola la costante di tempo $\\tau = RC$ in millisecondi.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Hai calcolato $u = \\frac{y}{x}$, non $y$. Non dimenticare la sostituzione inversa $y = ux$.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Hai calcolato il valore di $u = \\frac{y}{x}$, non $y$. Non dimenticare la sostituzione inversa $y = ux$.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "Hai calcolato il valore della funzione ausiliaria $u = \\frac{y}{x}$, non $y$. Non dimenticare la sostituzione inversa $y = ux$.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "Risolvi $1 - \\mathrm{e}^{-t/\\tau} = p$ rispetto a $t$: $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "Risolvi $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ e inserisci gli autovalori (separati da punto e virgola).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "Risolvi il problema di Cauchy $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (per $x \\gt 0$), e calcola $y({@1})$. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "Risolvi il problema di Cauchy $xy'{@0} = {@1}$, $y(1) = {@2}$, per $x \\gt 0$ e calcola $y(2)$. Inserisci il risultato esatto (frazione o numero decimale).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Risolvi il problema di Cauchy $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (per $x \\gt 0$), e calcola $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "Risolvi il problema di Cauchy $y' = {@0}$, $y(0) = {@1}$, e calcola $y({@2})$. Inserisci il risultato come frazione o numero intero.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "Risolvi il problema di Cauchy $y' = {@0}$, $y(0) = {@1}$, e calcola $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "Risolvi il problema di Cauchy $yy' = {@0}$, $y(0) = {@1}$, e calcola $y({@2})$.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Risolvi il problema di Cauchy ${@0}$, $y(1) = {@1}$ (per $x \\gt 0$), e calcola $y({@2})$. {@3}",
  "Vyrieš sústavu a urči $A$.": "Risolvi il sistema e determina $A$.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "Usa $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ e ricava $y$.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "L'espressione $\\frac{M_y - N_x}{N}$ ha la forma $\\frac{k}{x}$. Determina $k$.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "L'espressione $\\sqrt{m/k}$ è $\\frac{1}{\\omega_0}$; il periodo è ancora $2\\pi$ volte più grande.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "La soluzione generale dell'equazione $xy' + y ={@0}$ su un intervallo che non contiene lo zero è $y = {@1} + \\frac{C}{x}$. Determina $C$ per la condizione iniziale $y({@2}) = {@3}$.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "La soluzione generale dell'equazione $xy' = 2y{@0}$ è $y = Cx^{2}{@1}$. Determina $C$ per la condizione iniziale $y({@2}) = {@3}$. Inserisci il risultato come numero intero o frazione.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "La soluzione generale dell'equazione $y' = {@0}{@1}$ è $y = C{@2}{@3}$. Determina la costante $C$ in modo che la soluzione soddisfi la condizione iniziale $y(0) = {@4}$.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "Il wronskiano è $W = y_1y_2' - y_1'y_2$; l'ordine dei termini decide il segno di $K$.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "Il wronskiano è il prodotto di due funzioni con il fattore $\\mathrm{e}^{\\alpha x}$, quindi nell'esponente ha $2\\alpha$.",
  "Y(s) vyjadrené": "Y(s) ricavata",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "Dalla misurazione determina la costante $k$ in $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Arrotonda a 4 cifre decimali.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "A ogni tempo di dimezzamento la quantità scende alla metà: $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "Dopo quanti millisecondi la tensione raggiunge il valore richiesto? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "Dopo quanti minuti la temperatura scende al valore richiesto? Arrotonda ai decimi di minuto.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "Dopo quanti anni la popolazione raggiunge metà della capacità portante? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "Hai dimenticato la derivata seconda: $y_p'' = -{@0}y_p$, quindi il coefficiente di $A$ nell'equazione per il coseno è $q - {@1}$.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "Hai dimenticato la funzione $\\varphi(y)$: dopo aver integrato $M$ rispetto a $x$ va determinata dalla condizione $F_y = N$.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "Hai dimenticato il termine costante ${@0}$ nella soluzione generale; prima portalo dall'altra parte.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "Hai dimenticato la costante $C$: dalla condizione iniziale $y(0)$ si ottiene $C$, per cui va moltiplicata l'esponenziale.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "Hai dimenticato l'afflusso di sale $cq$: senza di esso il sale nel serbatoio diminuirebbe soltanto. La soluzione si avvicina al valore di equilibrio $cV$.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "Hai dimenticato la condizione iniziale: $\\mathcal{L}\\{y'\\} = sY - y(0)$, quindi in $Y(s)$ c'è anche il termine $\\frac{y(0)}{s - a}$.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "Copri il fattore $s{@0}$ e sostituisci $s = {@1}$.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "Hai scambiato massa e rigidità: $\\omega_0 = \\sqrt{k/m}$, e il periodo è $\\frac{2\\pi}{\\omega_0}$, non $2\\pi\\omega_0$.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "Hai scambiato le trasformate: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ e $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "Hai scambiato le coordinate: nel punto $[x; y]$ la prima coordinata è $x$ e la seconda $y$. Sostituiscile in $f(x, y)$ al posto giusto.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "Sostituisci $y''$ con $\\lambda^{2}$, $y'$ con $\\lambda$ e $y$ con $1$ e risolvi l'equazione quadratica.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "Scrivi la soluzione come $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, determina le costanti dalle condizioni; l'ampiezza è $\\sqrt{C_1^{2} + C_2^{2}}$.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "Scrivi l'equazione nella forma $y' = \\frac{y}{x} + a$, sostituisci $y = ux$, $y' = u + xu'$ e integra.",
  "Začiatočná hodnota y(0)": "Valore iniziale y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "Deriva $x_p$ due volte (prodotto di $t$ e di una funzione goniometrica) e sostituisci. Per $\\omega = \\omega_0$ resta solo il termine senza $t$.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "Deriva la soluzione generale, sostituisci $x = 0$ sia in $y$ sia in $y'$ e risolvi il sistema di due equazioni lineari.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "Stabilisci quante volte il numero $\\alpha$ dell'esponente del secondo membro è radice dell'equazione caratteristica e moltiplica la forma di base per $x$ altrettante volte.",
  "Zo začiatočnej podmienky urči $B$.": "Dalla condizione iniziale determina $B$.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "Imposta il bilancio $x' = (\\text{afflusso di sostanza}) - (\\text{deflusso di sostanza}) = cq - \\frac{q}{V}x$ e risolvi l'equazione lineare.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "Scrivi l'equazione caratteristica, determina il tipo di radici in base al discriminante e usa la forma della soluzione corrispondente.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "$A$ negativo significa che le oscillazioni sono in opposizione di fase con la forza eccitatrice (la frequenza eccitatrice è maggiore di quella propria).",
  "absolútnom člene": "grado zero",
  "algebra": "algebra",
  "algebraická rovnica": "equazione algebrica",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "seconda",
  "dvojnásobný koreň ${@0}$": "una radice doppia ${@0}$",
  "je dvojnásobným koreňom": "è radice doppia",
  "je jednoduchým koreňom": "è radice semplice",
  "k = 0: veličina sa nemení": "k = 0: la grandezza non cambia",
  "konštanta": "una costante",
  "korene ${@0}$ a ${@1}$": "le radici ${@0}$ e ${@1}$",
  "kritické tlmenie": "smorzamento critico",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "smorzamento critico: ritorno più rapido senza oscillazioni",
  "krát ${@0}$": "per ${@0}$",
  "litre": "litri",
  "litrov": "litri",
  "logistická krivka s K = {@0}": "curva logistica con K = {@0}",
  "nadkritické tlmenie (aperiodický pohyb)": "smorzamento supercritico (moto aperiodico)",
  "nadkritické tlmenie: aperiodický pohyb": "smorzamento supercritico: moto aperiodico",
  "neizolovaný rovnovážny bod (det A = 0)": "punto di equilibrio non isolato (det A = 0)",
  "nestabilné ohnisko": "fuoco instabile",
  "nestabilný degenerovaný uzol": "nodo degenere instabile",
  "nestabilný uzol": "nodo instabile",
  "netlmené kmity, ω₀ = 2": "oscillazioni non smorzate, ω₀ = 2",
  "nie je koreňom": "non è radice",
  "po vydelení číslom ${@0}$": "dopo aver diviso per ${@0}$",
  "podkritické tlmenie (tlmené kmity)": "smorzamento sottocritico (oscillazioni smorzate)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "smorzamento sottocritico: oscillazioni smorzate, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "un polinomio di 1° grado",
  "polčas ln 2 / |k| = {@0}": "tempo di dimezzamento ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "per la trasformata Y(s)",
  "prvá": "prima",
  "riešenie y(t)": "soluzione y(t)",
  "rovnica pre y(t)": "equazione per y(t)",
  "rozklad na parciálne zlomky": "scomposizione in frazioni parziali",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "una soluzione con concentrazione ${@0}\\,\\mathrm{kg/l}$ {@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "di soluzione in cui ci sono ${@0}\\,\\mathrm{kg}$ di sale",
  "rýchlosťou ${@0}$ {@1} za minútu": "alla velocità di ${@0}$ {@1} al minuto",
  "sedlo": "sella",
  "stabilné ohnisko": "fuoco stabile",
  "stabilný uzol": "nodo stabile",
  "tabuľka obrazov": "tabella delle trasformate",
  "tretia": "terza",
  "začiatočná úloha": "problema ai valori iniziali",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$ e $y_p' = {@2}(-A{@3} + B{@4})$. Dopo la sostituzione confrontiamo i coefficienti: di ${@5}$: ${@6} = {@7}$, di ${@8}$: ${@9} = {@10}$. La soluzione del sistema è $A = {@11}$, $B = {@12}$.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} Quale tensione ci sarà sul condensatore ${@1}\\,\\mathrm{ms}$ dopo l'accensione? Arrotonda il risultato in volt a 2 cifre decimali.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} Quale temperatura avrà ${@1}$ minuti dopo esservi stato posto? Arrotonda il risultato ai decimi di grado.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} Quanti individui avrà la popolazione dopo ${@1}$ anni? Arrotonda il risultato all'intero.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} Dopo quanti millisecondi la tensione sul condensatore raggiunge il ${@1}\\,\\%$ della tensione della sorgente? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} Dopo quanti minuti dalla sua collocazione la temperatura del corpo scende a ${@1}{@2}$? Arrotonda il risultato ai decimi di minuto.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} Dopo quanti anni raggiunge metà della capacità portante (quando cresce più rapidamente)? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}Confrontando con la forma $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ si ha $2\\delta = {@1}$, $\\delta = {@2}$ e $\\omega_0^{2} = {@3}$. Le radici dell'equazione caratteristica sono $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, quindi $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.",
  "· riešením je priamka y = x − 1": "· la soluzione è la retta y = x − 1",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "Costante di tempo $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, quindi $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "Se gli autovalori sono reali (nodo) o complessi (fuoco, centro) lo decide il segno del discriminante $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "Il termine $\\frac{y}{x}$ va bene, ma il secondo termine non dipende solo dal rapporto $\\frac{y}{x}$.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "Il termine $p\\,y'$ si trasforma in $p(sY - y(0))$; portato al secondo membro dà $+p\\,y(0)$. Verifica il segno.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "Il numero ${@0}$ non è radice dell'equazione caratteristica, perché ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Per $y_p = A{@5}$ si ha $y_p' = {@6}A{@7}$ e $y_p'' = {@8}A{@9}$; sostituendo $A\\cdot {@10}\\,{@11} = {@12}{@13}$, quindi $A = {@14}$.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "Il numero ${@0}$ dell'esponente del secondo membro è radice dell'equazione caratteristica (risonanza); quante volte bisogna moltiplicare la forma per $x$?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "Il numero ${@0}\\mathrm{i}$ non è radice dell'equazione caratteristica, non si tratta di risonanza.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "tempo di raddoppio ln 2 / k = {@0}",
  "čistej vody": "di acqua pura",
  "čistá voda {@0}": "acqua pura {@0}",
  "štvrtá": "quarta",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (radice doppia)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (radici complesse)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (radici reali distinte)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">massimo per ω = {@1}, ampiezza {@2}</span> (per F₀/m = 1)"
 }
});
