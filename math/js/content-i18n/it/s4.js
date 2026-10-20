/* Italiano: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/s4/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "s4-limita": {
   "title": "Limite di una funzione",
   "summary": "A che cosa si avvicinano i valori di una funzione, calcolo di limiti della forma 0/0 e limiti all'infinito.",
   "theory": [
    "<p>La scrittura $\\lim_{x\\to a} f(x) = L$ significa che i valori $f(x)$ si avvicinano quanto vogliamo al numero $L$, se avviciniamo $x$ abbastanza ad $a$ (con $x\\neq a$).\n       Il valore della funzione proprio nel punto $a$ <strong>non conta</strong> per il limite: la funzione in quel punto può anche non essere definita.\n       Il limite esiste se e solo se i <strong>limiti sinistro e destro</strong> $\\lim_{x\\to a^-} f(x)$ e $\\lim_{x\\to a^+} f(x)$ sono uguali.</p>",
    {
     "fig": "s4-limita",
     "caption": "La funzione $f(x)=\\frac{\\sin x}{x}$ non è definita nel punto $0$ (pallino vuoto), eppure $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$. Riduci $h$ e osserva i valori."
    },
    "<p><strong>Come si calcolano i limiti:</strong></p>\n       <ul><li>Se $f$ è continua nel punto $a$ (polinomio, $\\sin$, $\\mathrm{e}^x$ …), basta sostituire: $\\lim_{x\\to a} f(x) = f(a)$.</li>\n       <li>Una forma indeterminata $\\frac{0}{0}$ va trasformata: scomponiamo in fattori e semplifichiamo, oppure razionalizziamo la radice usando la differenza di quadrati.</li>\n       <li>Limite notevole: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, quindi $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>\n       <li>Un'espressione $\\frac{c}{0}$ con $c\\neq 0$ porta a un limite infinito $\\pm\\infty$; il segno si determina dai limiti sinistro e destro.</li></ul>",
    "<p><strong>Limite all'infinito</strong> di una funzione razionale: dividiamo numeratore e denominatore per la potenza di $x$ di grado massimo al denominatore.\n       Se i gradi sono uguali, il limite è il rapporto dei coefficienti direttivi; se il numeratore ha grado minore, il limite è $0$.\n       Ad esempio $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. Se $\\lim_{x\\to\\pm\\infty} f(x) = q$, la retta $y=q$ è un asintoto orizzontale del grafico.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$.",
     "steps": [
      "Sostituendo otteniamo $\\frac{0}{0}$, quindi l'espressione va trasformata.",
      "Scomponiamo il numeratore: $x^2-9=(x-3)(x+3)$. Per $x\\neq 3$ semplifichiamo: $\\frac{(x-3)(x+3)}{x-3}=x+3$.",
      "$\\lim_{x\\to 3}(x+3)=6$.",
      "<strong>Risultato: 6</strong>"
     ]
    },
    {
     "task": "Calcola $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$.",
     "steps": [
      "Dividiamo numeratore e denominatore per $x^2$: $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.",
      "Le frazioni $\\frac{1}{x}$, $\\frac{7}{x^2}$ e $\\frac{5}{x^2}$ per $x\\to\\infty$ tendono a zero.",
      "<strong>Risultato: $\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "Derivate delle funzioni elementari",
   "summary": "Derivata delle funzioni esponenziale, logaritmica e goniometriche, del prodotto, del quoziente e della funzione composta.",
   "theory": [
    "<p><strong>Derivate delle funzioni elementari:</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\mathrm{tg}\\,x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>Regole:</strong> prodotto $(u\\cdot v)'=u'v+uv'$, quoziente $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ (per $v\\neq 0$),\n       funzione composta $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$: la derivata della funzione «esterna» si moltiplica per la derivata di quella «interna».\n       Ad esempio $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "I grafici di $y=\\mathrm{e}^x$ e $y=\\ln x$ sono simmetrici rispetto alla retta $y=x$. La tangente al grafico di $\\mathrm{e}^x$ nel punto $(0; 1)$ ha coefficiente angolare $\\mathrm{e}^0=1$, la tangente al grafico di $\\ln x$ nel punto $(1; 0)$ ha coefficiente angolare $\\frac{1}{1}=1$."
    },
    "<p>La <strong>retta tangente</strong> al grafico della funzione $f$ nel punto $(x_0; f(x_0))$ ha equazione $y=f(x_0)+f'(x_0)(x-x_0)$.</p>"
   ],
   "examples": [
    {
     "task": "Deriva $f(x)=x^2\\sin x$.",
     "steps": [
      "Si tratta del prodotto di $u=x^2$ e $v=\\sin x$, dove $u'=2x$ e $v'=\\cos x$.",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "Per $f(x)=\\ln(x^2+1)$ calcola $f'(1)$ e scrivi l'equazione della retta tangente nel punto $x_0=1$.",
     "steps": [
      "Funzione composta: la funzione esterna $\\ln u$ ha derivata $\\frac{1}{u}$, quella interna $u=x^2+1$ ha derivata $2x$.",
      "$f'(x)=\\frac{2x}{x^2+1}$, quindi $f'(1)=\\frac{2}{2}=1$.",
      "$f(1)=\\ln 2$, tangente: $y=\\ln 2+1\\cdot(x-1)$, cioè $y=x-1+\\ln 2$."
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "Monotonia ed estremi di una funzione",
   "summary": "Segno della derivata, punti stazionari, estremi locali e assoluti, problemi di ottimizzazione.",
   "theory": [
    "<p>Se $f'(x)&gt;0$ in un intervallo $I$, la funzione $f$ in esso è <strong>crescente</strong>; se $f'(x)&lt;0$, è <strong>decrescente</strong>.\n       I punti in cui $f'(x)=0$ si chiamano <strong>stazionari</strong>. Una funzione (derivabile) può avere un estremo locale solo in un punto stazionario.</p>",
    {
     "fig": "s4-extremy",
     "caption": "Grafico di $f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$. Parti verdi: $f'&gt;0$, parte arancione: $f'&lt;0$. Nel punto $-1$ c'è il massimo locale $2$, nel punto $1$ il minimo locale $-2$."
    },
    "<p><strong>Come riconoscere un estremo:</strong> se $f'$ cambia segno da $+$ a $-$, nel punto c'è un <strong>massimo locale</strong>; il cambio da $-$ a $+$ indica un <strong>minimo locale</strong>.\n       Altrettanto bene serve la derivata seconda: $f'(x_0)=0$ e $f''(x_0)&lt;0$ dà un massimo, $f''(x_0)&gt;0$ un minimo.</p>",
    "<p><strong>Estremi assoluti in un intervallo chiuso</strong> $[a; b]$: confrontiamo i valori nei punti stazionari interni all'intervallo e negli estremi $a$, $b$.\n       Così si risolvono anche i <strong>problemi di ottimizzazione</strong>: esprimiamo la grandezza come funzione di una sola variabile e cerchiamo il suo valore massimo o minimo.</p>"
   ],
   "examples": [
    {
     "task": "Trova gli estremi locali della funzione $f(x)=x^3-6x^2+9x+1$.",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$, i punti stazionari sono $1$ e $3$.",
      "In $(-\\infty; 1)$ si ha $f'&gt;0$, in $(1; 3)$ si ha $f'&lt;0$, in $(3; \\infty)$ si ha $f'&gt;0$.",
      "Nel punto $1$ c'è il massimo locale $f(1)=5$, nel punto $3$ il minimo locale $f(3)=1$."
     ]
    },
    {
     "task": "Con un filo lungo $40\\,\\text{cm}$ vogliamo formare un rettangolo di area massima. Quali sono le sue dimensioni?",
     "steps": [
      "I lati sono $x$ e $20-x$, l'area è $S(x)=x(20-x)=20x-x^2$ per $x\\in(0; 20)$.",
      "$S'(x)=20-2x=0$ per $x=10$; $S''(x)=-2&lt;0$, si tratta di un massimo.",
      "<strong>L'area massima si ha con il quadrato $10\\times 10\\,\\text{cm}$, $S=100\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "Studio di funzione e grafico",
   "summary": "Dominio, parità, asintoti, estremi, concavità e punti di flesso.",
   "theory": [
    "<p>Lo <strong>studio di una funzione</strong> si svolge per passi:</p>\n       <ol><li>dominio $D(f)$, eventualmente parità ($f(-x)=f(x)$) o disparità ($f(-x)=-f(x)$) e periodicità,</li>\n       <li>intersezioni del grafico con gli assi e segno della funzione,</li>\n       <li>limiti agli estremi di $D(f)$ e <strong>asintoti</strong>,</li>\n       <li>$f'$: intervalli di monotonia ed estremi locali,</li>\n       <li>$f''$: intervalli in cui la funzione è <strong>convessa</strong> ($f''&gt;0$, concavità verso l'alto) o <strong>concava</strong> ($f''&lt;0$, concavità verso il basso), e <strong>punti di flesso</strong>, in cui la concavità cambia,</li>\n       <li>grafico qualitativo.</li></ol>",
    "<p><strong>Asintoti:</strong> la retta $x=a$ è un asintoto verticale se $f(x)$ per $x\\to a^+$ o $x\\to a^-$ tende a $\\pm\\infty$ (tipicamente uno zero del denominatore).\n       La retta $y=kx+q$ è un asintoto obliquo se $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ e $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$; per $k=0$ si tratta dell'asintoto orizzontale $y=q$.\n       La funzione omografica $f(x)=\\frac{ax+b}{cx+d}$ ha gli asintoti $x=-\\frac{d}{c}$ e $y=\\frac{a}{c}$.</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "Grafico di $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ con gli asintoti $x=1$ e $y=2$. I punti verdi sono le intersezioni con gli assi $(-\\frac{1}{2}; 0)$ e $(0; -1)$. La funzione è decrescente sia in $(-\\infty; 1)$ sia in $(1; \\infty)$."
    },
    "<p>Una funzione convessa sta sopra ogni sua retta tangente (il grafico «trattiene l'acqua»), una funzione concava sta sotto.\n       Un polinomio di terzo grado $ax^3+bx^2+cx+d$ ha sempre esattamente un punto di flesso, in $x=-\\frac{b}{3a}$.</p>"
   ],
   "examples": [
    {
     "task": "Trova il punto di flesso della funzione $f(x)=x^3-3x^2+4$ e determina dove è convessa.",
     "steps": [
      "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
      "$f''(x)=0$ per $x=1$; per $x&lt;1$ si ha $f''&lt;0$, per $x&gt;1$ si ha $f''&gt;0$.",
      "Il punto di flesso è $(1; f(1))=(1; 2)$, la funzione è convessa in $(1; \\infty)$ e concava in $(-\\infty; 1)$."
     ]
    },
    {
     "task": "Studia la parità della funzione $f(x)=\\frac{x}{x^2+1}$ e determina il suo asintoto orizzontale.",
     "steps": [
      "$D(f)=\\mathbb{R}$ è simmetrico rispetto allo zero e $f(-x)=\\frac{-x}{x^2+1}=-f(x)$: la funzione è dispari (il grafico è simmetrico rispetto all'origine).",
      "Il numeratore ha grado minore del denominatore, quindi $\\lim_{x\\to\\pm\\infty}f(x)=0$.",
      "L'asintoto orizzontale è $y=0$ (l'asse $x$)."
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "Area di una regione e sostituzione nell'integrale",
   "summary": "Area della regione compresa tra due curve, integrali delle funzioni elementari e sostituzione lineare.",
   "theory": [
    "<p>Se nell'intervallo $[a; b]$ vale $f(x)\\le g(x)$, l'area della regione compresa tra i grafici è $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$: «quella sopra meno quella sotto».\n       Gli estremi $a$, $b$ sono di solito le ascisse dei punti di intersezione dei grafici, che troviamo dall'equazione $f(x)=g(x)$.\n       Se la funzione sta sotto l'asse $x$, il suo integrale definito è negativo, e l'area è quindi il suo valore assoluto.</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "La retta $y=2x$ e la parabola $y=x^2$ si intersecano nei punti $x=0$ e $x=2$. L'area della regione è $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$."
    },
    "<p><strong>Integrali delle funzioni elementari:</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>",
    "<p><strong>Sostituzione lineare:</strong> se $F$ è una primitiva di $f$, allora $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$.\n       Ad esempio $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ oppure $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. La correttezza si verifica sempre derivando.</p>"
   ],
   "examples": [
    {
     "task": "Calcola l'area della regione delimitata dalla parabola $y=4-x^2$ e dall'asse $x$.",
     "steps": [
      "Intersezioni con l'asse: $4-x^2=0$, quindi $x=\\pm 2$. Tra di esse la parabola sta sopra l'asse.",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "Calcola $\\int_0^{1} (2x+1)^2\\,dx$ con la sostituzione.",
     "steps": [
      "Primitiva: $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.",
      "Verifica sviluppando il quadrato: $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "Funzioni composte e inverse",
   "summary": "Composizione di funzioni, funzione iniettiva, calcolo della funzione inversa e simmetria dei grafici rispetto alla retta y = x.",
   "theory": [
    "<p>La <strong>funzione composta</strong> $f\\circ g$ è data dalla legge $(f\\circ g)(x)=f(g(x))$: prima applichiamo $g$ (la funzione interna), poi al risultato $f$ (la funzione esterna).\n       L'ordine conta: in generale $f\\circ g\\neq g\\circ f$. Ad esempio per $f(x)=x^2$, $g(x)=x+1$ si ha $f(g(x))=(x+1)^2$, ma $g(f(x))=x^2+1$.</p>",
    "<p>Una funzione è <strong>iniettiva</strong> se a valori diversi di $x$ associa valori diversi (ogni retta orizzontale interseca il grafico al massimo una volta). Solo una funzione iniettiva ha\n       una <strong>funzione inversa</strong> $f^{-1}$, per cui vale $f^{-1}(y)=x \\Leftrightarrow f(x)=y$. Inoltre $D(f^{-1})=H(f)$ e $H(f^{-1})=D(f)$.</p>",
    "<p><strong>Procedimento per calcolare</strong> $f^{-1}$: nell'equazione $y=f(x)$ scambiamo $x$ e $y$ e ricaviamo $y$. Per $f(x)=2x-6$: $x=2y-6$, quindi $f^{-1}(x)=\\frac{x+6}{2}$.\n       I grafici di $f$ e $f^{-1}$ sono simmetrici rispetto alla retta $y=x$. Sono inverse l'una dell'altra anche $a^x$ e $\\log_a x$, perciò $a^{\\log_a x}=x$ e $\\log_a a^x=x$.</p>",
    {
     "fig": "s4-inverzna",
     "caption": "Grafico di $y=a^x$ (blu) e grafico della funzione inversa $y=\\log_a x$ (verde). Ogni punto $(u; v)$ di un grafico ha sull'altro grafico l'immagine $(v; u)$."
    }
   ],
   "examples": [
    {
     "task": "Sono date $f(x)=x^2-1$ e $g(x)=3x+2$. Calcola $(f\\circ g)(1)$ e $(g\\circ f)(1)$.",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$.",
      "I risultati sono diversi: la composizione di funzioni non è commutativa."
     ]
    },
    {
     "task": "Trova la funzione inversa di $f(x)=\\frac{x+1}{x-2}$, $x\\neq 2$.",
     "steps": [
      "Scambiamo le variabili: $x=\\frac{y+1}{y-2}$.",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> (la funzione $f$ non assume il valore $1$)."
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "Equazioni esponenziali e logaritmiche",
   "summary": "Sostituzione, equazioni con basi diverse, passaggio ai logaritmi e condizioni di esistenza.",
   "theory": [
    "<p><strong>Tipi fondamentali di equazioni esponenziali:</strong></p>\n       <ul><li>stessa base: $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ (per $a&gt;0$, $a\\neq 1$),</li>\n       <li><strong>sostituzione</strong>: $4^x-6\\cdot 2^x+8=0$ si riscrive con $t=2^x&gt;0$ come $t^2-6t+8=0$,</li>\n       <li><strong>basi diverse</strong>: si passa ai logaritmi in entrambi i membri, ad es. $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$; l'equazione $c\\cdot a^x=d\\cdot b^x$ si trasforma in $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$.</li></ul>",
    "<p><strong>Equazioni logaritmiche:</strong> prima determiniamo le condizioni di esistenza (l'argomento del logaritmo deve essere positivo), poi usiamo le proprietà\n       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$, e dall'uguaglianza $\\log_a u=c$ otteniamo $u=a^c$.\n       Ogni soluzione si verifica per sostituzione o confrontandola con le condizioni: le trasformazioni possono generare radici estranee.</p>",
    "<p>Un'equazione con l'espressione $\\log_a x$ elevata a diverse potenze si risolve con la sostituzione $t=\\log_a x$: da $(\\log x)^2-3\\log x+2=0$ otteniamo $t\\in\\{1; 2\\}$, quindi $x\\in\\{10; 100\\}$.\n       Attenzione: $(\\log x)^2$ non è la stessa cosa di $\\log x^2=2\\log x$.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi l'equazione $9^x-4\\cdot 3^x+3=0$.",
     "steps": [
      "$9^x=(3^x)^2$, sostituzione $t=3^x&gt;0$: $t^2-4t+3=0$, quindi $t_1=1$, $t_2=3$.",
      "$3^x=1 \\Rightarrow x=0$; $3^x=3 \\Rightarrow x=1$.",
      "<strong>$K=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "Risolvi l'equazione $\\log_3(x+1)+\\log_3(x-1)=1$.",
     "steps": [
      "Condizioni: $x+1&gt;0$ e $x-1&gt;0$, quindi $x&gt;1$.",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.",
      "Soddisfa la condizione solo $x=2$, la radice $-2$ va scartata.",
      "<strong>$K=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "Equazioni goniometriche",
   "summary": "Equazioni di secondo grado in seno o coseno, uso delle formule e soluzione generale.",
   "theory": [
    "<p>Le <strong>equazioni elementari</strong> $\\sin x=a$, $\\cos x=a$ hanno soluzioni solo per $a\\in[-1; 1]$, e di solito due in ogni periodo $2\\pi$.\n       Ad esempio $\\sin x=\\frac{1}{2}$ ha in $[0; 2\\pi)$ le soluzioni $\\frac{\\pi}{6}$ e $\\frac{5\\pi}{6}$, in generale $x=\\frac{\\pi}{6}+2k\\pi$ oppure $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.\n       L'equazione $\\mathrm{tg}\\,x=a$ ha soluzioni per ogni $a$ e il suo periodo è $\\pi$: $x=x_0+k\\pi$.</p>",
    "<p>Le <strong>equazioni di secondo grado</strong> in $\\sin x$ o $\\cos x$ si risolvono per sostituzione: $2\\sin^2 x-3\\sin x+1=0$ con $t=\\sin x$ dà $2t^2-3t+1=0$, quindi $t\\in\\{\\frac{1}{2}; 1\\}$.\n       Le radici fuori da $[-1; 1]$ si scartano.</p>",
    "<p><strong>Formule utili:</strong> $\\sin^2 x+\\cos^2 x=1$ (riduce l'equazione a una sola funzione), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.\n       Il fattore comune va <strong>raccolto</strong>, mai usato come divisore: perderemmo le soluzioni in cui si annulla.</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "Risolvi l'equazione $2\\cos^2 x+3\\sin x-3=0$ per $x\\in[0; 2\\pi)$.",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$: $2-2\\sin^2 x+3\\sin x-3=0$, quindi $2\\sin^2 x-3\\sin x+1=0$.",
      "Sostituzione $t=\\sin x$: $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ oppure $x=\\frac{5\\pi}{6}$.",
      "<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "Risolvi l'equazione $\\sin 2x=\\cos x$ in $\\mathbb{R}$.",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ oppure $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$."
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "Sistemi di equazioni e di disequazioni",
   "summary": "Sistemi non lineari, intersezioni di curve e sistemi di disequazioni in una e in due variabili.",
   "theory": [
    "<p>Un <strong>sistema non lineare</strong> si risolve per lo più con il <strong>metodo di sostituzione</strong>: dall'equazione più semplice (lineare) ricaviamo un'incognita e la sostituiamo nell'altra.\n       Le soluzioni sono coppie ordinate $(x; y)$; il loro numero corrisponde al numero di punti di intersezione dei grafici delle due equazioni. Il sistema $x+y=s$, $xy=p$, per le relazioni tra radici e coefficienti (formule di Viète), porta all'equazione $t^2-st+p=0$.</p>",
    "<p><strong>Sistema di disequazioni in una incognita:</strong> risolviamo ogni disequazione separatamente e il risultato è l'<strong>intersezione</strong> degli insiemi delle soluzioni.\n       Moltiplicando o dividendo per un numero negativo il verso della disuguaglianza si inverte.</p>",
    "<p>Un <strong>sistema di disequazioni lineari in due incognite</strong> descrive una parte del piano: ogni disequazione $y\\le kx+q$ è il semipiano sotto la retta $y=kx+q$ (retta compresa).\n       La soluzione del sistema è l'intersezione dei semipiani, spesso un poligono.</p>",
    {
     "fig": "s4-oblast",
     "caption": "Il sistema $y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ descrive un triangolo con vertici $(-2; 0)$, $(4; 0)$ e $(1; 3)$. La sua area è $\\frac{6\\cdot 3}{2}=9$."
    }
   ],
   "examples": [
    {
     "task": "Risolvi il sistema $x+y=7$, $x\\cdot y=10$.",
     "steps": [
      "Dalla prima equazione $y=7-x$, sostituiamo: $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.",
      "$x_1=2$, $x_2=5$, e corrispondentemente $y_1=5$, $y_2=2$.",
      "<strong>Soluzioni: $(2; 5)$ e $(5; 2)$</strong>"
     ]
    },
    {
     "task": "Risolvi in $\\mathbb{R}$ il sistema di disequazioni $3x-2&gt;4$ e $5-x\\ge -1$.",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$.",
      "$-x\\ge -6 \\Rightarrow x\\le 6$ (la divisione per un numero negativo inverte il verso).",
      "<strong>$K=(2; 6]$</strong>, i numeri interi in esso sono $3, 4, 5, 6$."
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "Equazioni e sistemi parametrici",
   "summary": "Discussione del numero di soluzioni al variare del parametro, equazioni di secondo grado e sistemi con parametro.",
   "theory": [
    "<p>Un <strong>parametro</strong> è una lettera che in un'equazione rappresenta un numero fissato, ma qualsiasi. Risolviamo l'equazione per tutti i suoi valori contemporaneamente\n       e facciamo la <strong>discussione</strong>: per quali valori del parametro l'equazione ha una, più o nessuna soluzione.\n       Ad esempio $px=3$ per $p\\neq 0$ ha l'unica soluzione $x=\\frac{3}{p}$, per $p=0$ non ha soluzioni.</p>",
    "<p>L'<strong>equazione di secondo grado</strong> $ax^2+bx+c=0$ con $a\\neq 0$ ha due radici reali distinte per $D&gt;0$, una radice doppia per $D=0$ e nessuna radice reale per $D&lt;0$.\n       Se è nota una radice, la sostituiamo e otteniamo un'equazione per il parametro; l'altra radice si calcola poi facilmente con le relazioni tra radici e coefficienti $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$.\n       Se il parametro compare nel coefficiente di $x^2$, il caso $a=0$ (l'equazione è lineare) va studiato a parte.</p>",
    "<p>Un <strong>sistema di due equazioni lineari</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ ha esattamente una soluzione quando $a_1b_2-a_2b_1\\neq 0$ (le rette sono incidenti).\n       Se $a_1b_2-a_2b_1=0$, le rette sono parallele: distinte (nessuna soluzione) oppure coincidenti (infinite soluzioni).</p>"
   ],
   "examples": [
    {
     "task": "Per quali valori del parametro $p$ l'equazione $x^2-4x+p=0$ ha due radici reali distinte?",
     "steps": [
      "$D=16-4p$.",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.",
      "<strong>Per $p\\in(-\\infty; 4)$</strong>; per $p=4$ ha la radice doppia $2$, per $p&gt;4$ non ha radici reali."
     ]
    },
    {
     "task": "Per quali $m$ il sistema $mx+2y=4$, $2x+my=-4$ non ha soluzioni?",
     "steps": [
      "Il determinante $m\\cdot m-2\\cdot 2=m^2-4=0$ per $m=\\pm 2$; altrimenti il sistema ha un'unica soluzione.",
      "$m=2$: $2x+2y=4$ e $2x+2y=-4$ sono rette parallele distinte: nessuna soluzione.",
      "$m=-2$: $-2x+2y=4$ e $2x-2y=-4$ sono la stessa retta: infinite soluzioni.",
      "<strong>Il sistema non ha soluzioni per $m=2$.</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "Retta e circonferenza nel piano cartesiano",
   "summary": "Posizione reciproca di una retta e una circonferenza, punti di intersezione e retta tangente alla circonferenza.",
   "theory": [
    "<p>La circonferenza di centro $S(m; n)$ e raggio $r$ ha equazione $(x-m)^2+(y-n)^2=r^2$. Una retta nel piano ha equazione generale $ax+by+c=0$,\n       dove $\\vec{n}=(a; b)$ è il suo vettore normale. La distanza del punto $S(m; n)$ dalla retta è $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$.</p>",
    "<p><strong>Posizione reciproca:</strong> se $d&lt;r$, la retta è <strong>secante</strong> (2 punti in comune); se $d=r$, è <strong>tangente</strong> (1 punto); se $d&gt;r$, è <strong>esterna</strong>.\n       Lo stesso si può stabilire algebricamente: sostituendo la retta nell'equazione della circonferenza otteniamo un'equazione di secondo grado, il cui discriminante decide il numero di punti di intersezione.</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "La circonferenza $x^2+y^2=9$ e la retta $y=-0{,}75x+q$. Sposta $q$: la retta è tangente esattamente per $q=\\pm 3{,}75$, quando la distanza dal centro è uguale al raggio."
    },
    "<p>La <strong>tangente nel punto</strong> $T$ della circonferenza è perpendicolare al raggio $ST$, perciò il vettore $\\vec{ST}$ è il suo vettore normale.\n       Per la circonferenza $x^2+y^2=r^2$ e il punto $T(x_0; y_0)$ su di essa, la tangente ha equazione $x_0x+y_0y=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Trova i punti di intersezione della circonferenza $x^2+y^2=25$ e della retta $x-y+1=0$.",
     "steps": [
      "Dall'equazione della retta $y=x+1$, sostituiamo: $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.",
      "$x_1=3$, $x_2=-4$, e corrispondentemente $y_1=4$, $y_2=-3$.",
      "<strong>Punti di intersezione: $(3; 4)$ e $(-4; -3)$</strong>"
     ]
    },
    {
     "task": "Scrivi l'equazione della retta tangente alla circonferenza $(x-1)^2+(y+2)^2=25$ nel punto $T(4; 2)$.",
     "steps": [
      "Centro $S(1; -2)$, $\\vec{ST}=(3; 4)$ è il vettore normale della tangente: $3x+4y+c=0$.",
      "Sostituiamo $T$: $12+8+c=0$, quindi $c=-20$.",
      "<strong>Tangente: $3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "Posizione reciproca di punti, rette e piani",
   "summary": "Rette parallele, incidenti e sghembe, posizione di una retta e di un piano, di due piani e loro descrizione analitica.",
   "theory": [
    "<p><strong>Due rette nello spazio</strong> sono <strong>coincidenti</strong>, <strong>parallele</strong> (stanno in uno stesso piano e non hanno punti in comune),\n       <strong>incidenti</strong> (hanno esattamente un punto in comune) oppure <strong>sghembe</strong>: non hanno punti in comune e non stanno in uno stesso piano.\n       Nel piano non esistono rette sghembe, nello spazio sono frequenti.</p>",
    {
     "fig": "s4-kocka",
     "caption": "Cubo $ABCDEFGH$. Le rette $AB$ (blu) e $CG$ (verde) sono sghembe, e così anche le rette $AB$ ed $EG$ (arancione). Le rette $CG$ ed $EG$ sono incidenti, si intersecano nel punto $G$."
    },
    "<p><strong>Retta e piano:</strong> la retta giace nel piano, è parallela al piano (non hanno punti in comune) oppure è incidente (un punto in comune, il punto di intersezione).\n       Una retta è parallela a un piano se è parallela a una retta di quel piano. <strong>Due piani</strong> sono coincidenti, paralleli distinti oppure incidenti: in tal caso si intersecano in una retta.</p>",
    "<p><strong>Analiticamente:</strong> una retta ha equazione parametrica $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$; un piano ha equazione generale $ax+by+cz+d=0$ con vettore normale $\\vec{n}=(a; b; c)$.\n       Rette con vettori direzione proporzionali sono parallele o coincidenti. Una retta è parallela al piano o giace in esso se $\\vec{u}\\cdot\\vec{n}=0$.\n       Nei calcoli in un cubo di spigolo $1$ scegliamo $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $E(0; 0; 1)$.</p>"
   ],
   "examples": [
    {
     "task": "Nel cubo $ABCDEFGH$ determina la posizione reciproca delle rette $BG$ e $AH$.",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$ e $\\vec{AH}=H-A=(0; 1; 1)$: i vettori direzione sono uguali.",
      "Il punto $A$ non sta sulla retta $BG$, quindi le rette non coincidono.",
      "<strong>Le rette $BG$ e $AH$ sono parallele</strong> (stanno nel piano $ABGH$)."
     ]
    },
    {
     "task": "Stabilisci se il punto $Q(5; 1; -2)$ sta sulla retta $p: X=(1; 3; 0)+t\\,(2; -1; -1)$.",
     "steps": [
      "Dalla prima coordinata: $1+2t=5$, quindi $t=2$.",
      "Per $t=2$: $y=3-2=1$ ✓, $z=0-2=-2$ ✓.",
      "<strong>Il punto $Q$ sta sulla retta</strong> (parametro $t=2$)."
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "Angoli e distanze nello spazio",
   "summary": "Distanza tra punti, di un punto da una retta e da un piano, angolo tra rette e angolo tra retta e piano, soprattutto nel cubo.",
   "theory": [
    "<p><strong>Distanze:</strong> la distanza tra due punti è $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$. La distanza di un punto da una retta è la lunghezza del segmento di perpendicolare alla retta,\n       la distanza del punto $P$ dal piano $ax+by+cz+d=0$ è $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$.\n       In un cubo di spigolo $a$: diagonale di una faccia $a\\sqrt2$, diagonale del cubo $a\\sqrt3$.</p>",
    "<p>L'<strong>angolo tra due rette</strong> (anche sghembe) è l'angolo tra i loro vettori direzione, preso in $[0^\\circ; 90^\\circ]$:\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. L'<strong>angolo tra una retta e un piano</strong> è l'angolo tra la retta e la sua proiezione ortogonale sul piano;\n       con il vettore normale $\\vec{n}$ vale $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$.</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "L'angolo tra la diagonale del cubo $AG$ e il piano di base è l'angolo tra $AG$ e la sua proiezione $AC$. Dal triangolo rettangolo $ACG$: $\\mathrm{tg}\\,\\varphi=\\frac{a}{a\\sqrt2}$, quindi $\\varphi\\approx 35{,}26^\\circ$."
    },
    "<p>Il <strong>prodotto vettoriale</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ è perpendicolare a entrambi i vettori e il suo modulo è l'area del parallelogramma da essi individuato.\n       Perciò la distanza del punto $P$ dalla retta $X=Q+t\\vec{u}$ è $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$ e il vettore normale del piano $QRS$ è $\\vec{QR}\\times\\vec{QS}$.</p>"
   ],
   "examples": [
    {
     "task": "Il cubo $ABCDEFGH$ ha spigolo $a=6\\,\\text{cm}$. Calcola la distanza del vertice $A$ dal punto medio $K$ dello spigolo $GH$.",
     "steps": [
      "$A(0; 0; 0)$, $G(6; 6; 6)$, $H(0; 6; 6)$, quindi $K(3; 6; 6)$.",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Calcola la distanza del vertice $A$ dal piano $BDE$ in un cubo di spigolo $a$.",
     "steps": [
      "$B(a; 0; 0)$, $D(0; a; 0)$, $E(0; 0; a)$ stanno nel piano $x+y+z-a=0$.",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.",
      "È un terzo della diagonale del cubo $AG$."
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "Prisma, piramide, cilindro, cono e sfera",
   "summary": "Proprietà dei solidi, triangoli rettangoli all'interno dei solidi, superficie e volume, sezione di una sfera.",
   "theory": [
    "<p>Il <strong>prisma</strong> e il <strong>cilindro</strong> hanno due basi congruenti e parallele: $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Cilindro: $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.\n       La <strong>piramide</strong> e il <strong>cono</strong> hanno una base e un vertice: $V=\\frac{1}{3}S_p\\cdot v$. Cono con apotema $s$: $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, dove $s^2=r^2+v^2$.\n       <strong>Sfera</strong>: $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>",
    {
     "fig": "s4-ihlan",
     "caption": "Piramide quadrangolare regolare: l'altezza $v$, l'apotema $v_s$ e metà spigolo $\\frac{a}{2}$ formano un triangolo rettangolo: $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. Per lo spigolo laterale $h$ vale $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$."
    },
    "<p>La <strong>piramide quadrangolare regolare</strong> con spigolo di base $a$ ha $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ e $V=\\frac{1}{3}a^2v$.\n       La chiave della maggior parte dei problemi è il triangolo rettangolo giusto, ad esempio l'altezza, metà della diagonale di base e lo spigolo laterale: $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>",
    "<p>La <strong>sezione di una sfera</strong> con un piano a distanza $d$ dal centro è un cerchio di raggio $\\rho=\\sqrt{r^2-d^2}$. Il <strong>prisma triangolare regolare</strong> ha come base\n       un triangolo equilatero di area $\\frac{\\sqrt3}{4}a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Una piramide quadrangolare regolare ha spigolo di base $a=10\\,\\text{cm}$ e altezza $v=12\\,\\text{cm}$. Calcola la sua superficie totale e il suo volume.",
     "steps": [
      "Apotema: $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Una sfera di raggio $r=10\\,\\text{cm}$ viene tagliata da un piano a distanza $6\\,\\text{cm}$ dal centro. Qual è l'area della sezione?",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.",
      "$S=\\pi\\rho^2=64\\pi\\approx 201{,}06\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "Superficie e volume di solidi più complessi",
   "summary": "Tronco di cono e tronco di piramide, solidi composti, similitudine tra solidi e problemi pratici.",
   "theory": [
    "<p><strong>Tronco di cono</strong> con raggi di base $R$, $r$, altezza $v$ e apotema $s$: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, superficie laterale $S_{pl}=\\pi s(R+r)$,\n       superficie totale $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. L'apotema si trova dalla sezione assiale a forma di trapezio: $s^2=v^2+(R-r)^2$.</p>",
    {
     "fig": "s4-zrezany",
     "caption": "Il tronco di cono si ottiene tagliando la parte superiore di un cono con un piano parallelo alla base. L'altezza $v$, la differenza dei raggi $R-r$ e l'apotema $s$ formano un triangolo rettangolo."
    },
    "<p>Il <strong>tronco di piramide</strong> con aree di base $S_1$, $S_2$ e altezza $v$ ha volume $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$;\n       per quello quadrangolare regolare con spigoli $a_1$, $a_2$ si ha $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.\n       Un <strong>solido composto</strong> si divide in solidi noti e i volumi si sommano (per le cavità si sottraggono). Per la superficie attenzione: le superfici di contatto non fanno parte della superficie.</p>",
    "<p><strong>Solidi simili</strong> con rapporto di similitudine $k$ hanno le superfici nel rapporto $k^2$ e i volumi nel rapporto $k^3$. Se raddoppiamo tutte le dimensioni,\n       la superficie diventa 4 volte più grande e il volume 8 volte. Nella rifusione il volume si conserva.</p>"
   ],
   "examples": [
    {
     "task": "Un secchio ha la forma di un tronco di cono con raggi $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ e altezza $v=30\\,\\text{cm}$. Quanti litri può contenere?",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14{,}9\\,\\ell$."
     ]
    },
    {
     "task": "Un silo ha la forma di un cilindro di raggio $3\\,\\text{m}$ e altezza $8\\,\\text{m}$, sormontato da una semisfera con lo stesso raggio. Calcola il volume del silo.",
     "steps": [
      "Cilindro: $\\pi\\cdot 9\\cdot 8=72\\pi$.",
      "Semisfera: $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.",
      "<strong>$V=90\\pi\\approx 282{,}74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "Popolazione statistica, caratteri, tabelle e grafici",
   "summary": "Popolazione e carattere, frequenza assoluta e relativa, tabella di distribuzione delle frequenze, grafici e loro lettura.",
   "theory": [
    "<p>Una <strong>popolazione statistica</strong> è l'insieme degli oggetti studiati (unità statistiche), il loro numero $n$ è la <strong>numerosità</strong>.\n       La proprietà osservata è il <strong>carattere statistico</strong>: <strong>qualitativo</strong> (espresso a parole: colore, marca, indirizzo di studio) oppure <strong>quantitativo</strong> (numerico).\n       Un carattere quantitativo è <strong>discreto</strong> se assume solo valori isolati (numero di fratelli), oppure <strong>continuo</strong> se può assumere qualsiasi valore di un intervallo (altezza, tempo).</p>",
    "<p>La <strong>frequenza assoluta</strong> $n_i$ di un valore è il numero di unità con quel valore, la <strong>frequenza relativa</strong> è $f_i=\\frac{n_i}{n}$ (spesso in percentuale).\n       La somma di tutte le $n_i$ è $n$, la somma delle $f_i$ è $1$. I dati si riportano in una <strong>tabella di distribuzione delle frequenze</strong>.</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "Diagramma a barre dei voti (scala da 1 a 5, dove 1 è il migliore) in una classe di $28$ alunni. Ad esempio il voto $2$ l'hanno preso $9$ alunni, la frequenza relativa è $\\frac{9}{28}\\approx 32{,}1\\,\\%$."
    },
    "<p><strong>Grafici:</strong> diagramma a barre (frequenze dei valori), diagramma a torta (il settore per un valore ha angolo al centro $f_i\\cdot 360^\\circ$), istogramma (per un carattere continuo suddiviso in classi)\n       e diagramma cartesiano a linee (andamento nel tempo). Nell'<strong>interpretazione</strong> attenzione a un asse che non parte da zero: piccole differenze sembrano allora enormi.</p>"
   ],
   "examples": [
    {
     "task": "Nella tabella è riportato il mezzo con cui gli alunni vanno a scuola: autobus 12, auto 5, bicicletta 3, a piedi 10. Quale parte del diagramma a torta (angolo al centro) occupa l'autobus?",
     "steps": [
      "$n=12+5+3+10=30$.",
      "$f=\\frac{12}{30}=0{,}4=40\\,\\%$.",
      "Angolo al centro: $0{,}4\\cdot 360^\\circ=144^\\circ$."
     ]
    },
    {
     "task": "In base al diagramma a barre precedente calcola il voto medio della classe.",
     "steps": [
      "$n=6+9+7+4+2=28$.",
      "Somma dei voti: $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.",
      "$\\bar{x}=\\frac{71}{28}\\approx 2{,}54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "Media, mediana, moda e varianza",
   "summary": "Indici di posizione e di variabilità: media, mediana, moda, quartili, varianza e deviazione standard.",
   "theory": [
    "<p><strong>Indici di posizione:</strong> la media aritmetica $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (da una tabella, ponderata: $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),\n       la <strong>mediana</strong>, cioè il valore centrale dei dati ordinati (per $n$ pari la media dei due valori centrali), e la <strong>moda</strong>, cioè il valore più frequente.\n       A differenza della media, la mediana non è influenzata dai valori estremi (ad es. un solo stipendio molto alto).</p>",
    "<p><strong>Indici di variabilità:</strong> il campo di variazione $R=x_{\\max}-x_{\\min}$, la <strong>varianza</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       (media dei quadrati degli scarti dalla media, anche $s^2=\\overline{x^2}-\\bar{x}^2$) e la <strong>deviazione standard</strong> (scarto quadratico medio) $s=\\sqrt{s^2}$, che ha la stessa unità di misura dei dati.</p>",
    "<p><strong>Quartili:</strong> il primo quartile $Q_1$ è la mediana della metà inferiore dei dati, il terzo quartile $Q_3$ la mediana della metà superiore.\n       Tra $Q_1$ e $Q_3$ si trova la metà centrale dei dati, la loro differenza $Q_3-Q_1$ è lo scarto interquartile. I cinque numeri (min, $Q_1$, mediana, $Q_3$, max) sono rappresentati dal diagramma a scatola (box plot).</p>",
    {
     "fig": "s4-krabica",
     "caption": "Box plot dei dati $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$: minimo $2$, $Q_1=5$, mediana $7$, $Q_3=9$, massimo $14$."
    }
   ],
   "examples": [
    {
     "task": "Calcola media, mediana e moda dei dati $3, 8, 5, 3, 6, 9, 3, 7$.",
     "steps": [
      "Ordiniamo: $3, 3, 3, 5, 6, 7, 8, 9$; $n=8$.",
      "$\\bar{x}=\\frac{44}{8}=5{,}5$.",
      "Mediana $=\\frac{5+6}{2}=5{,}5$, moda $=3$ (compare tre volte)."
     ]
    },
    {
     "task": "Calcola la varianza e la deviazione standard dei dati $4, 6, 7, 9, 9$.",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$. Scarti: $-3, -1, 0, 2, 2$.",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3{,}6$.",
      "$s=\\sqrt{3{,}6}\\approx 1{,}90$."
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "Problemi di calcolo combinatorio",
   "summary": "Disposizioni, permutazioni e combinazioni senza e con ripetizione nei problemi tipici.",
   "theory": [
    "<p><strong>Principio del prodotto:</strong> se il primo oggetto si sceglie in $m$ modi e, per ciascuno di essi, il secondo in $n$ modi, le coppie sono $m\\cdot n$.\n       Il <strong>principio della somma</strong> si usa quando le possibilità si escludono a vicenda. Nei problemi più difficili si distinguono i casi (ad es. in base all'ultima cifra) e si sommano.</p>",
    "<table class=\"tbl\"><tr><th></th><th>senza ripetizione</th><th>con ripetizione</th></tr>\n       <tr><td>disposizioni di $n$ elementi di classe $k$ (l'ordine conta)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>permutazioni (ordinamento di tutti gli elementi)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>combinazioni di $n$ elementi di classe $k$ (l'ordine non conta)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>Come decidere:</strong> l'ordine conta (codice, assegnazione di incarichi, numero)? Se sì, si tratta di disposizioni o permutazioni; se no (scelta di un gruppo, estrazione di palline in blocco), di combinazioni.\n       Nei numeri di più cifre lo zero non può stare al primo posto. Utile: $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (ad es. il numero di strette di mano tra $n$ persone).</p>"
   ],
   "examples": [
    {
     "task": "Quanti numeri di tre cifre, tutte diverse, si possono formare con le cifre $0, 1, 2, 3, 4$?",
     "steps": [
      "Al primo posto non può esserci lo zero: $4$ possibilità.",
      "Al secondo posto le $4$ cifre rimaste (anche lo zero), al terzo $3$.",
      "<strong>$4\\cdot 4\\cdot 3=48$ numeri</strong>"
     ]
    },
    {
     "task": "Tra 8 ragazzi e 6 ragazze scegliamo un comitato di quattro persone formato da 2 ragazzi e 2 ragazze. Quante sono le possibilità?",
     "steps": [
      "I ragazzi si scelgono in $\\binom{8}{2}=28$ modi, le ragazze in $\\binom{6}{2}=15$ modi.",
      "Le scelte sono indipendenti, usiamo il principio del prodotto.",
      "<strong>$28\\cdot 15=420$ possibilità</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "Probabilità ed eventi indipendenti",
   "summary": "Probabilità classica, evento contrario, unione di eventi e prodotto delle probabilità di eventi indipendenti.",
   "theory": [
    "<p><strong>Definizione classica:</strong> se un esperimento ha $n$ esiti ugualmente possibili e l'evento $A$ si verifica in $m$ di essi, $P(A)=\\frac{m}{n}$.\n       Vale $0\\le P(A)\\le 1$. I numeri $m$ e $n$ si determinano spesso con il calcolo combinatorio, ad es. estraendo $k$ palline in blocco gli esiti sono le combinazioni $\\binom{n}{k}$.</p>",
    "<p><strong>Evento contrario</strong> $A'$ (l'evento $A$ non si verifica): $P(A')=1-P(A)$. In particolare i problemi del tipo «almeno una volta» si risolvono attraverso l'evento contrario «nemmeno una volta».\n       <strong>Unione</strong>: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$; per eventi incompatibili (non possono verificarsi contemporaneamente) si ha $P(A\\cap B)=0$.</p>",
    "<p>Gli eventi $A$ e $B$ sono <strong>indipendenti</strong> se l'esito di uno non cambia la probabilità dell'altro; in tal caso $P(A\\cap B)=P(A)\\cdot P(B)$.\n       Tipicamente si tratta di lanci ripetuti, tiri di tiratori diversi o estrazioni con reimmissione. La probabilità che in $n$ prove indipendenti con probabilità $p$ l'evento si verifichi almeno una volta è $1-(1-p)^n$.</p>"
   ],
   "examples": [
    {
     "task": "In un'urna ci sono 5 palline bianche e 3 nere. Ne estraiamo due contemporaneamente. Qual è la probabilità che siano entrambe bianche?",
     "steps": [
      "Coppie possibili: $\\binom{8}{2}=28$, favorevoli: $\\binom{5}{2}=10$.",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0{,}357$."
     ]
    },
    {
     "task": "Due tiratori colpiscono il bersaglio con probabilità $0{,}8$ e $0{,}7$ (in modo indipendente). Qual è la probabilità che il bersaglio venga colpito?",
     "steps": [
      "Evento contrario: entrambi mancano il bersaglio, $P=0{,}2\\cdot 0{,}3=0{,}06$.",
      "<strong>$P=1-0{,}06=0{,}94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "Distribuzione binomiale",
   "summary": "Prove indipendenti ripetute, probabilità di k successi, valore atteso e varianza.",
   "theory": [
    "<p>Un esperimento con due esiti (successo con probabilità $p$, insuccesso con $1-p$) viene ripetuto $n$ volte in modo indipendente. La variabile aleatoria $X$, cioè il numero di successi,\n       ha <strong>distribuzione binomiale</strong> $X\\sim Bi(n; p)$ e $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ per $k=0, 1, \\dots, n$.\n       Il coefficiente binomiale indica in quanti modi le prove riuscite possono essere distribuite tra le $n$ prove.</p>",
    "<p>Il <strong>valore atteso</strong> (numero medio di successi) è $E(X)=np$, la <strong>varianza</strong> $D(X)=np(1-p)$ e la deviazione standard $\\sigma=\\sqrt{np(1-p)}$.\n       «Almeno un successo» si calcola con l'evento contrario: $P(X\\ge 1)=1-(1-p)^n$; «al massimo $k$» come somma $P(X=0)+\\dots+P(X=k)$.</p>",
    {
     "fig": "s4-binom",
     "caption": "Le colonne mostrano $P(X=k)$ per $Bi(n; p)$, la colonna verde è il valore più probabile. Per $n$ più grandi la forma si avvicina alla curva a campana della <strong>distribuzione normale</strong> (arancione) con valore atteso $np$ e deviazione standard $\\sqrt{np(1-p)}$."
    }
   ],
   "examples": [
    {
     "task": "Un alunno tira a indovinare le risposte di un test con 5 domande, ognuna con 4 opzioni (una giusta). Qual è la probabilità che indovini esattamente 2 risposte?",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$.",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.",
      "$P\\approx 0{,}2637$"
     ]
    },
    {
     "task": "Un prodotto è difettoso con probabilità $0{,}1$. Quanti prodotti difettosi ci aspettiamo in una fornitura di 50 pezzi e qual è la varianza?",
     "steps": [
      "$E(X)=np=50\\cdot 0{,}1=5$ prodotti.",
      "$D(X)=np(1-p)=50\\cdot 0{,}1\\cdot 0{,}9=4{,}5$, $\\sigma\\approx 2{,}12$."
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "Maturità: insiemi numerici, espressioni ed equazioni",
   "summary": "Esercizi misti su numeri, calcolo letterale ed equazioni di tutti gli anni.",
   "theory": [
    "<p><strong>Che cosa bisogna sapere sui numeri:</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, divisibilità (MCD, mcm, numeri primi), operazioni tra insiemi e $|A\\cup B|=|A|+|B|-|A\\cap B|$,\n         valore assoluto come distanza sulla retta, intervalli, potenze $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, radici $\\sqrt[n]{a}=a^{1/n}$ e razionalizzazione del denominatore.</p>",
    "<p><strong>Espressioni:</strong> prodotti notevoli $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, scomposizione in fattori con raccoglimento e prodotti notevoli,\n         semplificazione di frazioni algebriche, sempre con le <strong>condizioni di esistenza</strong> (denominatore $\\neq 0$).</p>",
    "<p><strong>Equazioni:</strong> lineari (principi di equivalenza), di secondo grado $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ e relazioni tra radici e coefficienti, equazioni fratte,\n         irrazionali (elevamento a potenza e <strong>verifica</strong>), con valore assoluto (metodo degli zeri), esponenziali e logaritmiche ($\\log_a x=c \\Leftrightarrow x=a^c$).</p>"
   ],
   "examples": [
    {
     "task": "Risolvi l'equazione $\\sqrt{x+7}=x+1$.",
     "steps": [
      "Condizione $x+1\\ge 0$. Eleviamo al quadrato: $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.",
      "$x_1=2$, $x_2=-3$.",
      "Verifica: $\\sqrt9=3$ ✓; per $-3$ il secondo membro è negativo ✗. <strong>$K=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "Semplifica $\\dfrac{x^2-9}{x^2+3x}$ e determina le condizioni di esistenza.",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$, condizioni $x\\neq 0$, $x\\neq -3$.",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "Maturità: disequazioni e sistemi di equazioni",
   "summary": "Esercizi misti su disequazioni, sistemi di equazioni e di disequazioni.",
   "theory": [
    "<p><strong>Disequazioni:</strong> moltiplicando o dividendo per un numero negativo il verso si inverte. Una disequazione di secondo grado si risolve con le radici e la forma della parabola:\n         per $a&gt;0$ si ha $ax^2+bx+c&lt;0$ tra le radici. Le disequazioni fratte e prodotto si risolvono con il <strong>metodo degli zeri</strong> (tabella dei segni),\n         quelle con il valore assoluto dividendo in intervalli oppure con $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$.</p>",
    "<p><strong>Sistemi di equazioni:</strong> metodo di sostituzione e di riduzione, con tre incognite eliminazione successiva. Un sistema lineare di due equazioni ha una, nessuna oppure\n         infinite soluzioni (rette incidenti, parallele, coincidenti). Nei sistemi non lineari ricaviamo un'incognita dall'equazione lineare e la sostituiamo.</p>",
    "<p><strong>Errori tipici:</strong> condizioni dimenticate, divisione per un'espressione con l'incognita (può essere negativa o nulla), errata combinazione dei risultati: per un sistema di disequazioni si fa l'<strong>intersezione</strong>, per «oppure» l'unione.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi la disequazione $\\dfrac{x-2}{x+1}\\le 0$.",
     "steps": [
      "Zeri: $2$ (numeratore) e $-1$ (denominatore, che è escluso).",
      "Segni: in $(-\\infty; -1)$ $+$, in $(-1; 2)$ $-$, in $(2; \\infty)$ $+$.",
      "<strong>$K=(-1; 2]$</strong>"
     ]
    },
    {
     "task": "Risolvi il sistema $2x+3y=12$, $x-y=1$.",
     "steps": [
      "Dalla seconda equazione $x=y+1$, sostituiamo: $2y+2+3y=12 \\Rightarrow y=2$.",
      "$x=3$. <strong>Soluzione $(3; 2)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "Maturità: funzioni e loro grafici",
   "summary": "Esercizi misti sulle funzioni: lineari, quadratiche, omografiche, esponenziali, logaritmiche e loro proprietà.",
   "theory": [
    "<p><strong>Proprietà di una funzione:</strong> dominio e insieme immagine, monotonia, parità, limitatezza, estremi, iniettività e funzione inversa (simmetria rispetto a $y=x$).</p>",
    "<p><strong>Panoramica delle funzioni:</strong> lineare $y=kx+q$ ($k$: coefficiente angolare, $q$: ordinata all'origine); quadratica $y=a(x-m)^2+n$ con vertice $V(m; n)$;\n         omografica $y=\\frac{ax+b}{cx+d}$ (iperbole con asintoti); esponenziale $y=a^x$ (crescente per $a&gt;1$, decrescente per $0&lt;a&lt;1$, $H=(0; \\infty)$)\n         e logaritmica $y=\\log_a x$ ($D=(0; \\infty)$, passa per il punto $(1; 0)$); funzioni goniometriche con periodo $2\\pi$ (tangente $\\pi$).</p>",
    "<p><strong>Traslazioni dei grafici:</strong> $f(x-a)$ trasla il grafico di $a$ verso destra, $f(x)+b$ di $b$ verso l'alto, $-f(x)$ è la simmetria rispetto all'asse $x$, $|f(x)|$ ribalta verso l'alto le parti negative.</p>"
   ],
   "examples": [
    {
     "task": "Determina il vertice della parabola $y=x^2-6x+5$ e l'insieme immagine della funzione.",
     "steps": [
      "Completamento del quadrato: $y=(x-3)^2-4$.",
      "Vertice $V(3; -4)$, la parabola è rivolta verso l'alto.",
      "<strong>$H(f)=[-4; \\infty)$</strong>"
     ]
    },
    {
     "task": "Determina il dominio della funzione $f(x)=\\log_2(6-2x)$.",
     "steps": [
      "L'argomento del logaritmo deve essere positivo: $6-2x&gt;0$.",
      "<strong>$x&lt;3$, quindi $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "Maturità: geometria piana, geometria solida e geometria analitica",
   "summary": "Esercizi misti di geometria nel piano, nello spazio e di geometria analitica.",
   "theory": [
    "<p><strong>Geometria piana:</strong> somma degli angoli di un triangolo $180^\\circ$, teoremi di Pitagora e di Euclide, similitudine dei triangoli (criteri $LLL$, $LAL$, $AA$),\n         aree ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, formula di Erone), cerchio ($S=\\pi r^2$, $o=2\\pi r$, settore $\\frac{\\alpha}{360^\\circ}\\pi r^2$), angolo alla circonferenza e angolo al centro.</p>",
    "<p><strong>Geometria solida:</strong> volumi $V=S_pv$ (prisma, cilindro), $V=\\frac{1}{3}S_pv$ (piramide, cono), $V=\\frac{4}{3}\\pi r^3$ (sfera); superfici; posizione reciproca di rette e piani,\n         angoli e distanze: cerchiamo sempre un triangolo rettangolo adatto.</p>",
    "<p><strong>Geometria analitica:</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, punto medio di un segmento, vettori e prodotto scalare ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),\n         equazioni della retta (parametrica, generale $ax+by+c=0$, esplicita $y=kx+q$), distanza di un punto da una retta, circonferenza $(x-m)^2+(y-n)^2=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Trova l'equazione generale della retta passante per i punti $A(1; 2)$ e $B(4; -4)$.",
     "steps": [
      "Vettore direzione $\\vec{AB}=(3; -6)\\sim(1; -2)$, vettore normale $(2; 1)$.",
      "$2x+y+c=0$, sostituiamo $A$: $2+2+c=0$, $c=-4$.",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "Un cilindro ha volume $72\\pi\\,\\text{cm}^3$ e altezza $8\\,\\text{cm}$. Qual è il raggio di base?",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "Maturità: goniometria e trigonometria",
   "summary": "Esercizi misti su funzioni ed equazioni goniometriche e risoluzione dei triangoli.",
   "theory": [
    "<p><strong>Funzioni goniometriche:</strong> radianti $180^\\circ=\\pi\\,\\text{rad}$, circonferenza goniometrica, segni nei quadranti, valori per $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$,\n         periodicità, parità ($\\cos$ pari, $\\sin$ e $\\mathrm{tg}$ dispari).</p>",
    "<p><strong>Formule:</strong> $\\sin^2 x+\\cos^2 x=1$, $\\mathrm{tg}\\,x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,\n         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Equazioni goniometriche: sostituzione, raccoglimento a fattore comune, soluzione generale con $k\\in\\mathbb{Z}$.</p>",
    "<p><strong>Trigonometria:</strong> nel triangolo rettangolo le definizioni di $\\sin$, $\\cos$, $\\mathrm{tg}$; in un triangolo qualsiasi il <strong>teorema dei seni</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ e il <strong>teorema del coseno</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>"
   ],
   "examples": [
    {
     "task": "Un triangolo ha i lati $a=5$, $b=8$ e l'angolo $\\gamma=60^\\circ$. Calcola il lato $c$.",
     "steps": [
      "Teorema del coseno: $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "Se $\\cos x=-\\frac{3}{5}$ e $x\\in(\\frac{\\pi}{2}; \\pi)$, calcola $\\sin x$ e $\\mathrm{tg}\\,x$.",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$; nel II quadrante il seno è positivo: $\\sin x=\\frac{4}{5}$.",
      "$\\mathrm{tg}\\,x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$."
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "Maturità: successioni, calcolo combinatorio e probabilità",
   "summary": "Esercizi misti su successioni, matematica finanziaria, calcolo combinatorio, probabilità e statistica.",
   "theory": [
    "<p><strong>Successioni:</strong> aritmetica $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$; geometrica $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$);\n         serie geometrica infinita $s=\\frac{a_1}{1-q}$ per $|q|&lt;1$.</p>",
    "<p><strong>Matematica finanziaria:</strong> interesse composto $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (con l'imposta sugli interessi il tasso effettivo diminuisce), risparmio periodico e rimborso a rate come somma di una progressione geometrica,\n         percentuali e per mille.</p>",
    "<p><strong>Calcolo combinatorio e probabilità:</strong> disposizioni, permutazioni, combinazioni (anche con ripetizione), $P(A)=\\frac{m}{n}$, evento contrario, eventi indipendenti, distribuzione binomiale.\n         <strong>Statistica:</strong> media, mediana, moda, varianza, deviazione standard, lettura di tabelle e grafici.</p>"
   ],
   "examples": [
    {
     "task": "Un deposito di $2\\,000\\,€$ frutta il $3\\,\\%$ annuo (interesse composto). Quanto ci sarà sul conto dopo 5 anni?",
     "steps": [
      "$K_5=2000\\cdot 1{,}03^5$.",
      "$1{,}03^5\\approx 1{,}159274$.",
      "<strong>$K_5\\approx 2\\,318{,}55\\,€$</strong>"
     ]
    },
    {
     "task": "In una progressione aritmetica si ha $a_3=7$ e $a_7=19$. Calcola $a_1$ e la somma dei primi 10 termini.",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.",
      "$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$."
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "Maturità: problemi tipo ed esercizi complessi",
   "summary": "Problemi in più passi che collegano diversi argomenti: ottimizzazione, finanza, successioni, geometria analitica, probabilità e derivate.",
   "theory": [
    "<p><strong>Come affrontare un problema complesso:</strong></p>\n       <ol><li>Leggi il testo due volte e annota che cosa è dato e che cosa si cerca (anche con le unità di misura).</li>\n       <li>Fai uno schizzo o una tabella; dai un nome alle incognite.</li>\n       <li>Dividi il problema in passi più piccoli: spesso si tratta di una catena di procedimenti noti (ad es. «costruisci la funzione → derivala → trova il massimo»).</li>\n       <li>Verifica il risultato: per sostituzione, stimando l'ordine di grandezza, controllando le condizioni (lunghezza positiva, probabilità in $[0; 1]$).</li></ol>",
    "<p><strong>Combinazioni frequenti di argomenti:</strong> ottimizzazione (geometria + derivate), interessi e risparmio (percentuali + progressione geometrica + logaritmi),\n       triangolo nel piano cartesiano (vettori + area + distanza), scelta di un gruppo e probabilità (combinazioni + evento contrario), retta tangente a un grafico (derivata + equazione della retta).</p>",
    "<p><strong>Formule utili in più:</strong> area del triangolo $ABC$ in coordinate $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,\n       retta tangente $y=f(x_0)+f'(x_0)(x-x_0)$, numero di anni nella capitalizzazione $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>"
   ],
   "examples": [
    {
     "task": "Da una lamiera quadrata di lato $30\\,\\text{cm}$ ritagliamo agli angoli quadrati congruenti e ripieghiamo i bordi per formare una scatola aperta. Qual è il volume massimo che può avere?",
     "steps": [
      "Se il lato del quadrato ritagliato è $x$: $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ (il valore $15$ non appartiene all'intervallo).",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "Dopo quanti anni un deposito con capitalizzazione annua al $4\\,\\%$ raddoppia per la prima volta?",
     "steps": [
      "Cerchiamo il più piccolo $n$ per cui $1{,}04^n\\ge 2$.",
      "$n\\ge\\frac{\\ln 2}{\\ln 1{,}04}\\approx 17{,}67$.",
      "<strong>Dopo 18 anni.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ e $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$, quindi $f(-x)=-f(x)$.",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$. Prima $g({@2})={@3}\\cdot {@4}{@5}={@6}$, poi $f({@7})={@8}{@9}^2{@10}={@11}$.",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$. Prima $f({@2})={@3}{@4}^2{@5}={@6}$, poi $g({@7})={@8}\\cdot {@9}{@10}={@11}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ per $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ per $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ per $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ per $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, quindi $k={@5}$.",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$. L'equazione è allora $({@2})^2=0$ con la radice doppia ${@3}$.",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$. La condizione {@1} dà {@2}.",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (il primo colpisce e il secondo no, o viceversa).",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Scarti dalla media: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$; in un periodo ha le soluzioni $\\frac{\\pi}{3}$ e $-\\frac{\\pi}{3}$, il periodo del coseno è $2\\pi$.",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$ e $(-x)^2=x^2$, quindi $f(-x)=f(x)$.",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\mathrm{tg}\\,x=1$ oppure $\\mathrm{tg}\\,x=-1$, quindi $x=\\frac{\\pi}{4}+k\\pi$ oppure $x=-\\frac{\\pi}{4}+k\\pi$. Insieme sono punti distanti $\\frac{\\pi}{2}$.",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, che vale per $\\frac{\\pi}{6}$; il periodo della tangente è $\\pi$.",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$; il seno è positivo nel I e nel II quadrante, quindi $\\frac{\\pi}{4}$ e $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, periodo $2\\pi$.",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$; le soluzioni $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ si ripetono con periodo $\\pi$ come $\\pm\\frac{\\pi}{6}+k\\pi$.",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, da $S=\\frac{|AB|\\cdot v_c}{2}$ si ha $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$. La disequazione $f''(x)&gt;0$ dà ${@1}$, la funzione è convessa in {@2}.",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ ha radici ${@1}$ e ${@2}$. {@3} Confrontiamo i valori: {@4}. {@5} di essi è ${@6}$.",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ per $x={@2}$ e lì la derivata seconda cambia segno. $f({@3})={@4}$, il punto di flesso è $[{@5}; {@6}]$.",
  "$f'(x)={@0}$.": "$f'(x)={@0}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$, i punti stazionari sono ${@4}$ e ${@5}$. La derivata ha i segni {@6} negli intervalli $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} è quindi nel punto $x={@12}$ e $f({@13})={@14}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$. Il segno della derivata è {@4} tra le radici ${@5}$ e ${@6}$ e {@7} fuori da esse. La funzione è {@8} in {@9}.",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$. Poiché $\\cos 0=1$ e $\\mathrm{e}^0=1$, si ha $f'(0)={@3}{@4}={@5}$.",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$. Poiché $\\sin 0=0$ e $\\mathrm{e}^0=1$, si ha $f'(0)=0{@3}={@4}$.",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$ non è uguale né a $f(1)=\\mathrm{e}$ né a $-\\mathrm{e}$.",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, le potenze pari «assorbono» il cambio di segno.",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$, che non è né $f(x)$ né $-f(x)$.",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$, l'espressione contiene solo potenze dispari.",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$ e $f(-1)={@1}$; non vale nessuna delle uguaglianze $f(-1)=f(1)$, $f(-1)=-f(1)$.",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Tangente: $y={@5}+{@6}(x-{@7})$, quindi $y={@8}$.",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$ è il numero $x$ per cui $f(x)={@1}$. Risolviamo $\\dfrac{{@2}}{{@3}}={@4}$: moltiplicando per i denominatori otteniamo un'equazione lineare con soluzione $x={@5}$. Verifica: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ è {@1} nella serie ordinata. Frequenze cumulate: {@2}. La mediana è ${@3}$.",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$. Media aritmetica ponderata: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "${@0} x={@1}$ per $x\\in\\{{@2}\\}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$, sostituzione $t={@2}^{x}$, con $t&gt;0$: ${@3}=0$, radici $t_1={@4}$, $t_2={@5}$. {@6}Da ${@7}^{x}={@8}$ si ha $x={@9}${@10}. $K=\\{{@11}\\}$.",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "(Scrivi il risultato come frazione o come numero decimale arrotondato a 3 cifre decimali.)",
  "(otočíme znak)": "(invertiamo il verso)",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": ", area $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": ", l'ipotenusa misura ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": ", da ${@0}^{x}={@1}$ si ha $x={@2}$",
  "0 alebo 5": "0 oppure 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · i punti [1; {@2}] e [{@3}; 1] sono simmetrici rispetto a y = x",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0, la funzione cresce</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">Argomento: {@0}</span><br>{@1}",
  "ABC": "ABC",
  "ABD": "ABD",
  "ABE": "ABE",
  "ABF": "ABF",
  "ABG": "ABG",
  "ACB": "ACB",
  "ACD": "ACD",
  "ACE": "ACE",
  "ACF": "ACF",
  "ACG": "ACG",
  "ACH": "ACH",
  "ADB": "ADB",
  "ADC": "ADC",
  "ADE": "ADE",
  "ADF": "ADF",
  "ADG": "ADG",
  "ADH": "ADH",
  "AEB": "AEB",
  "AEC": "AEC",
  "AED": "AED",
  "AEF": "AEF",
  "AEG": "AEG",
  "AFB": "AFB",
  "AFD": "AFD",
  "AFG": "AFG",
  "AFH": "AFH",
  "AGB": "AGB",
  "AGC": "AGC",
  "AGD": "AGD",
  "AGE": "AGE",
  "AGF": "AGF",
  "AHB": "AHB",
  "AHC": "AHC",
  "AHD": "AHD",
  "AHE": "AHE",
  "AHF": "AHF",
  "AHG": "AHG",
  "ANALÝZA": "ARANCIA",
  "ANANÁS": "BANANE",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "Se sostituendo risulta $\\frac{0}{0}$, scomponi il numeratore in fattori. Uno dei fattori si semplifica con il denominatore.",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "Quanto è lungo allora il lato parallelo al muro (in metri)?",
  "Aká dlhá je prepona v cm?": "Quanto è lunga l'ipotenusa in cm?",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "Quanto è lunga la base del triangolo sull'asse $x$?",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "Quanto deve essere lungo il lato parallelo al muro perché l'area sia massima (in metri)?",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "Qual è l'ordinata del punto con $x={@0}$?",
  "Aká je pravdepodobnosť, že obaja minú?": "Qual è la probabilità che entrambi sbaglino?",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "Qual è la probabilità che il primo sbagli e il secondo colpisca?",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "Qual è la probabilità che il primo colpisca e il secondo sbagli?",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "Qual è la probabilità che almeno uno colpisca il bersaglio?",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "Qual è la probabilità che esattamente uno colpisca il bersaglio?",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "Qual è la probabilità che nella scelta ci sia almeno una ragazza? {@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "Qual è la probabilità che il sei non esca mai? Arrotonda il risultato a 4 cifre decimali.",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "Qual è la probabilità che il sei esca almeno una volta? Arrotonda il risultato a 3 cifre decimali.",
  "Aká je pravdepodobnosť? {@0}": "Qual è la probabilità? {@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "Qual è quindi il valore del limite? Scrivilo come frazione.",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "Qual è l'altezza del triangolo (l'ordinata del punto di intersezione delle due rette)?",
  "Aké je najmenšie celé číslo v prieniku?": "Qual è il più piccolo numero intero nell'intersezione?",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "Qual è il più piccolo numero intero che la soddisfa?",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "Quali sono le coordinate del punto $K$ (in cm)? Scrivi $x$; $y$; $z$.",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "Quale lunghezza (in cm) deve avere il lato dei quadrati ritagliati perché la scatola abbia il volume massimo?",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "Che valore ha la derivata del termine ${@0}$ nel punto $0$?",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "Che valore ha il denominatore della derivata $({@0})^2$ nel punto ${@1}$?",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "Che valore ha la funzione interna ${@0}$ nel punto ${@1}$?",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "Che valore ha il termine $uv'$ nel punto $0$?",
  "Aký je absolútny člen $q$?": "Qual è il termine noto $q$?",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "Qual è il volume massimo della scatola in $\\text{cm}^3$?",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "Qual è l'area massima del terreno (in $\\text{m}^2$)?",
  "Aký je obsah oblasti?": "Qual è l'area della regione?",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "Qual è l'area della figura? Scrivi una frazione o un numero intero.",
  "Aký je parameter $p$?": "Qual è il parametro $p$?",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "Qual è la numerosità $n$ della popolazione (numero di tutti gli alunni)?",
  "Aký je stredový uhol výseče v stupňoch?": "Qual è l'angolo al centro del settore in gradi?",
  "Aký je súčet vekov po príchode nového člena?": "Qual è la somma delle età dopo l'arrivo del nuovo membro?",
  "Aký je súčet vekov pôvodných členov?": "Qual è la somma delle età dei membri iniziali?",
  "Aký je súčet známok všetkých žiakov?": "Qual è la somma dei voti di tutti gli alunni?",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "Qual è il prodotto dei fattoriali dei numeri delle lettere ripetute?",
  "Aký je teda exponent ${@0}$?": "Qual è quindi l'esponente ${@0}$?",
  "Aký je štatistický znak „{@0}“?": "Che carattere statistico è «{@0}»?",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "Qual è il volume massimo (in $\\text{cm}^3$) che può avere la scatola?",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "Qual è l'area massima (in $\\text{m}^2$) che può avere il terreno?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "Quale angolo al centro (in gradi) avrà il settore «autobus» nel diagramma circolare?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "Quale angolo al centro (in gradi) avrà il settore «auto» nel diagramma circolare?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "Quale angolo al centro (in gradi) avrà il settore «bicicletta» nel diagramma circolare?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "Quale angolo al centro (in gradi) avrà il settore «a piedi» nel diagramma circolare?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "Quale angolo al centro (in gradi) avrà il settore «treno» nel diagramma circolare?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "Quale angolo al centro (in gradi) avrà il settore «{@0}» nel diagramma circolare?",
  "Akým číslom sa suma na účte každý rok vynásobí?": "Per quale numero si moltiplica ogni anno la somma sul conto?",
  "BAC": "BAC",
  "BAD": "BAD",
  "BAE": "BAE",
  "BAF": "BAF",
  "BAG": "BAG",
  "BAH": "BAH",
  "BCA": "BCA",
  "BCD": "BCD",
  "BCF": "BCF",
  "BCG": "BCG",
  "BCH": "BCH",
  "BDA": "BDA",
  "BDC": "BDC",
  "BDE": "BDE",
  "BDF": "BDF",
  "BDG": "BDG",
  "BDH": "BDH",
  "BEA": "BEA",
  "BEC": "BEC",
  "BED": "BED",
  "BEF": "BEF",
  "BEG": "BEG",
  "BFA": "BFA",
  "BFC": "BFC",
  "BFD": "BFD",
  "BFE": "BFE",
  "BFG": "BFG",
  "BFH": "BFH",
  "BGC": "BGC",
  "BGD": "BGD",
  "BGE": "BGE",
  "BGF": "BGF",
  "BGH": "BGH",
  "BHA": "BHA",
  "BHC": "BHC",
  "BHD": "BHD",
  "BHE": "BHE",
  "BHF": "BHF",
  "BHG": "BHG",
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "Un giocatore di basket realizza un tiro libero con probabilità ${@0}$, i tiri sono indipendenti. Tira {@1} volte; $X$ è il numero di tiri realizzati.",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "La bianca e la nera possono uscire in due ordini. Con un'estrazione simultanea conviene contare le coppie non ordinate: la pallina bianca e quella nera le scegli indipendentemente.",
  "Binomické rozdelenie": "Distribuzione binomiale",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "Il punto $T[{@0}; {@1}]$ sta sulla circonferenza $k: {@2}$. La tangente alla circonferenza nel punto $T$ ha equazione ${@3}+c=0$. Calcola $c$.",
  "CAB": "CAB",
  "CAD": "CAD",
  "CAE": "CAE",
  "CAF": "CAF",
  "CAG": "CAG",
  "CAH": "CAH",
  "CBA": "CBA",
  "CBD": "CBD",
  "CBE": "CBE",
  "CBF": "CBF",
  "CBG": "CBG",
  "CBH": "CBH",
  "CDA": "CDA",
  "CDB": "CDB",
  "CDE": "CDE",
  "CDF": "CDF",
  "CDG": "CDG",
  "CDH": "CDH",
  "CEA": "CEA",
  "CEB": "CEB",
  "CED": "CED",
  "CEF": "CEF",
  "CEG": "CEG",
  "CEH": "CEH",
  "CFA": "CFA",
  "CFD": "CFD",
  "CFE": "CFE",
  "CFG": "CFG",
  "CGA": "CGA",
  "CGB": "CGB",
  "CGD": "CGD",
  "CGF": "CGF",
  "CGH": "CGH",
  "CHB": "CHB",
  "CHD": "CHD",
  "CHE": "CHE",
  "CHF": "CHF",
  "CHG": "CHG",
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "I numeri interi ${@0}, \\dots, {@1}$: sono ${@2}$.",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "Ragazzi e ragazze li scegli indipendentemente (combinazioni, perché l'ordine non conta) e moltiplichi i numeri.",
  "DAB": "DAB",
  "DAC": "DAC",
  "DAE": "DAE",
  "DAF": "DAF",
  "DAG": "DAG",
  "DAH": "DAH",
  "DBA": "DBA",
  "DBC": "DBC",
  "DBE": "DBE",
  "DBF": "DBF",
  "DBG": "DBG",
  "DBH": "DBH",
  "DCA": "DCA",
  "DCB": "DCB",
  "DCE": "DCE",
  "DCF": "DCF",
  "DCG": "DCG",
  "DCH": "DCH",
  "DEA": "DEA",
  "DEB": "DEB",
  "DEC": "DEC",
  "DEF": "DEF",
  "DEG": "DEG",
  "DEH": "DEH",
  "DFA": "DFA",
  "DFB": "DFB",
  "DFC": "DFC",
  "DFE": "DFE",
  "DFG": "DFG",
  "DFH": "DFH",
  "DGA": "DGA",
  "DGB": "DGB",
  "DGC": "DGC",
  "DGE": "DGE",
  "DGF": "DGF",
  "DGH": "DGH",
  "DHB": "DHB",
  "DHC": "DHC",
  "DHE": "DHE",
  "DHF": "DHF",
  "DHG": "DHG",
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "Sono date le funzioni $f(x)={@0}$ e $g(x)={@1}$. Calcola $({@2})({@3})$.",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "È data la serie di dati: ${@0}$. Determinane {@1}.",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "Il dominio $(0; \\infty)$ non è simmetrico rispetto allo zero, quindi la funzione non può essere né pari né dispari.",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "Dividi per un numero negativo, il verso della disuguaglianza si inverte.",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "La derivata è $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Quanto vale $f'({@4})$?",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "Derivata del quoziente: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. Nel punto ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "La derivata del seno è il coseno senza il meno: $(\\sin x)'=\\cos x$. Il meno appartiene alla derivata del coseno.",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "La derivata di un prodotto non è il prodotto delle derivate: $(u\\cdot v)'=u'v+uv'$, non $u'\\cdot v'$.",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "Derivata del prodotto: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Poiché $\\mathrm{e}^0=1$, si ha $f'(0)={@3}$.",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "Derivata del prodotto: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Poiché $\\ln 1=0$, si ha $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "Derivata della funzione composta: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Nel punto ${@4}$ la funzione interna vale ${@5}\\cdot {@6}{@7}={@8}$, quindi $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "Il determinante del sistema è $m^2-{@0}$, si annulla per $m=\\pm {@1}$ (altrimenti il sistema ha un'unica soluzione). Per $m={@2}$ le equazioni hanno i membri sinistri proporzionali, ma i membri destri ${@3}$ e ${@4}$ no: le rette sono parallele distinte, la soluzione non esiste. Per $m={@5}$ la seconda equazione è $(-1)$ volte la prima: le rette coincidono, le soluzioni sono infinite. Risposta: $m={@6}$.",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "Il determinante dei vettori $\\vec{AB}$ e $\\vec{AC}$ dà l'area del parallelogramma. L'area del triangolo è la sua metà.",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "Il discriminante è $D=b^2-4ac$. Non dimenticare il quattro davanti al prodotto $ac$.",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "Il discriminante è $D=b^2-4ac$. Dall'equazione $D=0$ bisogna ancora dividere $c$ per quattro.",
  "Do vnútra intervalu patrí {@0}.": "All'interno dell'intervallo cade {@0}.",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "Nella formula della superficie laterale $\\pi rs$ va l'apotema del cono $s$, non l'altezza $v$.",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "Sostituendo $y={@0}$ ottieni l'equazione ${@1}=0$. Qual è il suo discriminante?",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "Sostituendo otteniamo $\\frac{0}{0}$. Il denominatore è una differenza di quadrati: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Dopo la semplificazione $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "Sostituendo risulta $\\frac{0}{0}$, che non è zero, ma una forma indeterminata. Scomponi il denominatore come differenza di quadrati e semplifica.",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "Sostituendo è risultato $\\frac{0}{0}$, e questo non è zero, ma una forma indeterminata. Scomponi il numeratore in fattori e semplifica.",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "Hai sostituito il centro della circonferenza. La tangente non passa per il centro, passa per il punto di tangenza $T$.",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "Non si può sostituire, il denominatore tende a zero. Dividere per un numero vicino a zero dà numeri molto grandi in valore assoluto.",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "Sostituiamo ${@0}^2 x=1-{@1}^2 x$ e semplifichiamo: ${@2}{@3}{@4}=0$.",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "Sostituisci $-x$ al posto di $x$ e confronta $f(-x)$ con $f(x)$ e con $-f(x)$. Verifica anche se il dominio è simmetrico rispetto allo zero.",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "Sostituisci il punto $P$ nell'espressione ${@0}$. Che valore ottieni?",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "Sostituisci il punto ${@0}$ nel membro sinistro dell'equazione del piano. Qual è il valore assoluto del risultato?",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "Sostituisci le coordinate del punto $P$ nell'equazione del piano ed esprimi $d$.",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "La tangente è perpendicolare al raggio $ST$. Nell'equazione data sostituisci le coordinate del punto $T$.",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "Il quadrato del rapporto delle lunghezze vale per la superficie. Si conserva però il volume, e quello dipende dal cubo.",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "La seconda disequazione ha soluzione $x\\le d$. Qual è il numero $d$?",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "La seconda coordinata del punto di flesso è il valore della funzione $f({@0})$, non il valore $f''({@1})$.",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "La seconda radice del numeratore è $-c$; il prodotto delle radici è ${@0}$.",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "Due tiratori sparano indipendentemente un colpo ciascuno. Il primo colpisce il bersaglio con probabilità ${@0}$, il secondo con probabilità ${@1}$. Qual è la probabilità che {@2}?",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "La radice doppia si ha per $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "Le lunghezze non si sottraggono direttamente. Il raggio della sfera è l'ipotenusa di un triangolo rettangolo: usa il teorema di Pitagora.",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "Le lunghezze dei lati di un triangolo rettangolo formano una progressione aritmetica e il suo perimetro è ${@0}\\,\\text{cm}$. Calcola {@1}.",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">k più probabile = {@3}</span>",
  "E; D": "E; D",
  "EAB": "EAB",
  "EAC": "EAC",
  "EAD": "EAD",
  "EAF": "EAF",
  "EAG": "EAG",
  "EAH": "EAH",
  "EBA": "EBA",
  "EBC": "EBC",
  "EBD": "EBD",
  "EBF": "EBF",
  "EBG": "EBG",
  "EBH": "EBH",
  "ECA": "ECA",
  "ECB": "ECB",
  "ECD": "ECD",
  "ECF": "ECF",
  "ECG": "ECG",
  "ECH": "ECH",
  "EDA": "EDA",
  "EDB": "EDB",
  "EDC": "EDC",
  "EDF": "EDF",
  "EDG": "EDG",
  "EDH": "EDH",
  "EFA": "EFA",
  "EFB": "EFB",
  "EFC": "EFC",
  "EFD": "EFD",
  "EFG": "EFG",
  "EFH": "EFH",
  "EGB": "EGB",
  "EGC": "EGC",
  "EGD": "EGD",
  "EGF": "EGF",
  "EGH": "EGH",
  "EHA": "EHA",
  "EHB": "EHB",
  "EHC": "EHC",
  "EHD": "EHD",
  "EHF": "EHF",
  "EHG": "EHG",
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "La funzione esponenziale e la sua inversa, la funzione logaritmica",
  "FAB": "FAB",
  "FAC": "FAC",
  "FAD": "FAD",
  "FAE": "FAE",
  "FAG": "FAG",
  "FAH": "FAH",
  "FBA": "FBA",
  "FBC": "FBC",
  "FBD": "FBD",
  "FBE": "FBE",
  "FBG": "FBG",
  "FBH": "FBH",
  "FCA": "FCA",
  "FCB": "FCB",
  "FCD": "FCD",
  "FCE": "FCE",
  "FCG": "FCG",
  "FCH": "FCH",
  "FDA": "FDA",
  "FDC": "FDC",
  "FDE": "FDE",
  "FDG": "FDG",
  "FDH": "FDH",
  "FEA": "FEA",
  "FEB": "FEB",
  "FEC": "FEC",
  "FED": "FED",
  "FEG": "FEG",
  "FEH": "FEH",
  "FGA": "FGA",
  "FGB": "FGB",
  "FGC": "FGC",
  "FGD": "FGD",
  "FGE": "FGE",
  "FGH": "FGH",
  "FHA": "FHA",
  "FHB": "FHB",
  "FHC": "FHC",
  "FHD": "FHD",
  "FHE": "FHE",
  "FHG": "FHG",
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "La funzione $f(x)=\\dfrac{{@0}}{{@1}}$ è iniettiva. Calcola $f^{-1}\\!\\left({@2}\\right)$.",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "La funzione $f(x)={@0}$ ha esattamente un {@1}. Trova il punto in cui lo assume: scrivi $x$ e $f(x)$ (ad es. 2; -5).",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "La funzione è convessa dove $f''(x)&gt;0$. Calcola la derivata seconda e risolvi la disequazione lineare.",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "Le cariche sono diverse, quindi conta chi è presidente e chi tesoriere. Si tratta di disposizioni, non di combinazioni.",
  "GAB": "GAB",
  "GAC": "GAC",
  "GAD": "GAD",
  "GAE": "GAE",
  "GAH": "GAH",
  "GBA": "GBA",
  "GBC": "GBC",
  "GBD": "GBD",
  "GBE": "GBE",
  "GBF": "GBF",
  "GBH": "GBH",
  "GCA": "GCA",
  "GCB": "GCB",
  "GCD": "GCD",
  "GCH": "GCH",
  "GDA": "GDA",
  "GDB": "GDB",
  "GDC": "GDC",
  "GDE": "GDE",
  "GDF": "GDF",
  "GDH": "GDH",
  "GEA": "GEA",
  "GEB": "GEB",
  "GEC": "GEC",
  "GED": "GED",
  "GEH": "GEH",
  "GFA": "GFA",
  "GFB": "GFB",
  "GFC": "GFC",
  "GFD": "GFD",
  "GFE": "GFE",
  "GFH": "GFH",
  "GHA": "GHA",
  "GHB": "GHB",
  "GHC": "GHC",
  "GHD": "GHD",
  "Graf": "Grafico",
  "Graf funkcie sin x / x s dierou v bode 0": "Grafico della funzione sin x / x con un buco nel punto 0",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "Grafico della funzione x al cubo meno 3x con gli estremi",
  "Graf racionálnej funkcie s asymptotami": "Grafico di una funzione razionale con gli asintoti",
  "Grafy funkcií e na x a ln x s dotyčnicami": "Grafici delle funzioni e alla x e ln x con le tangenti",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "Le palline si estraggono contemporaneamente, quindi senza reinserimento. Dopo aver estratto una bianca, nell'urna c'è una bianca in meno.",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "Una sfera di raggio $r={@0}\\,\\text{cm}$ è tagliata da un piano a distanza ${@1}\\,\\text{cm}$ dal centro della sfera. Calcola {@2}",
  "HAB": "HAB",
  "HAC": "HAC",
  "HAD": "HAD",
  "HAE": "HAE",
  "HAF": "HAF",
  "HAG": "HAG",
  "HBA": "HBA",
  "HBC": "HBC",
  "HBD": "HBD",
  "HBE": "HBE",
  "HBF": "HBF",
  "HBG": "HBG",
  "HCA": "HCA",
  "HCB": "HCB",
  "HCD": "HCD",
  "HCE": "HCE",
  "HCF": "HCF",
  "HCG": "HCG",
  "HDA": "HDA",
  "HDB": "HDB",
  "HDC": "HDC",
  "HDE": "HDE",
  "HDF": "HDF",
  "HDG": "HDG",
  "HEA": "HEA",
  "HEB": "HEB",
  "HEC": "HEC",
  "HED": "HED",
  "HEF": "HEF",
  "HEG": "HEG",
  "HFA": "HFA",
  "HFB": "HFB",
  "HFC": "HFC",
  "HFD": "HFD",
  "HFE": "HFE",
  "HFG": "HFG",
  "HGB": "HGB",
  "HGC": "HGC",
  "HGD": "HGD",
  "HGE": "HGE",
  "HGF": "HGF",
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "Il valore ${@0}$ è una radice di $V'(x)$, ma non appartiene all'intervallo ammissibile: la scatola non avrebbe fondo.",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "Il valore ${@0}$ sta fuori da $\\langle -1; 1\\rangle$, non dà soluzioni.",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "Il valore della funzione inversa lo trovi senza la sua espressione: cerchi $x$ per cui $f(x)$ dà il numero dato.",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "I valori sono numeri interi ottenuti contando, tra due valori vicini non c'è un altro valore possibile.",
  "Hodnoty sú slová (kategórie), nie čísla.": "I valori sono parole (categorie), non numeri.",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "I valori di questo carattere sono parole (categorie), non numeri.",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "I valori di questo carattere sono numeri, quindi il carattere è quantitativo.",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "I valori si ottengono misurando e possono essere un numero qualsiasi di un certo intervallo.",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "I valori si ottengono misurando, possono essere un numero qualsiasi di un certo intervallo (anche decimale).",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "I valori si ottengono contando, sono solo numeri interi. Tra due valori vicini non c'è un altro valore possibile.",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "Lanciamo contemporaneamente due dadi. Qual è la probabilità che {@0}? {@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "Il limite dell'intervallo di convessità è il punto di flesso, in cui $f''(x)=0$. Verifica dove la derivata seconda si annulla.",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "Gli estremi dell'integrale sono gli zeri della parabola. La funzione è pari, puoi calcolare $2\\int_0^{m}$.",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "Il prisma ha due basi, quella superiore e quella inferiore. Conta due volte l'area di base.",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "Gli spigoli aumentano del ${@0}\\,\\%$, ma {@1} cresce più velocemente: il rapporto di similitudine va elevato a potenza.",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "Un giocatore lancia un dado {@0} volte. Qual è la probabilità che esca almeno una volta il sei? Arrotonda il risultato a 3 cifre decimali.",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "Un giocatore lancia un dado {@0} volte. La variabile casuale $X$ è il numero di lanci in cui è uscito il sei.",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "Un giocatore ha annotato il numero di punti nelle singole partite: ${@0}$. Qual è la moda di questa serie?",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "La platea di un anfiteatro estivo ha nella prima fila {@0} {@1} e ogni fila successiva ha {@2} {@3} in più. Quante file bisogna costruire come minimo perché in tutto ci siano almeno {@4} posti?",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "Si cerca il valore della funzione, non il punto $x$ in cui lo assume.",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "Cerchiamo $t$ tale che $A+t\\vec{u}=Q$. Dalla prima equazione {@0} si ha $t={@1}$. Le altre equazioni: {@2} e {@3}: {@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "Cerchiamo il più piccolo $n$ naturale per cui ${@0}^n\\ge {@1}$. Passando ai logaritmi: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, quindi $n={@5}$.",
  "Ide o permutácie: ${@0}!={@1}$.": "Si tratta di permutazioni: ${@0}!={@1}$.",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "Cerca il punto di flesso dove $f''(x)=0$ e la derivata seconda cambia segno.",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "Hai integrato solo da $0$ a ${@0}$, cioè metà della figura. L'estremo inferiore è l'altro zero della parabola.",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "Integra come una potenza, $\\frac{u^{n+1}}{n+1}$, e dividi il risultato per il coefficiente di $x$ dentro la parentesi.",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "L'integrale di una potenza è $\\frac{u^{{@0}}}{{@1}}$: l'esponente aumenta di uno e allo stesso tempo si divide per esso.",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "L'inversa della funzione esponenziale è la funzione logaritmica. Cerchi $x$ per cui ${@0}^{{@1}}{@2}={@3}$.",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "La funzione inversa della funzione $f(x)={@0}$ ha la forma $f^{-1}(x)=kx+q$. Scrivi $k$ e $q$ (ad es. 1/2; -3).",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "La funzione inversa esegue le operazioni in ordine inverso: la moltiplicazione diventa divisione. Scambia $x$ e $y$ ed esprimi $y$.",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "Funzione inversa: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "L'evento «almeno un successo» è il contrario dell'evento «nessun successo».",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "L'evento «almeno una bianca» comprende anche il caso in cui ci sono una bianca e una nera. Usa l'evento contrario «entrambe nere».",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "Gli eventi «il primo colpisce» e «il secondo colpisce» possono verificarsi contemporaneamente: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Oppure usa l'evento contrario.",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "È data la funzione $f(x)={@0}^{{@1}}{@2}$. Calcola $f^{-1}({@3})$.",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "La funzione $f(x)={@0}$ è pari, dispari o nessuna delle due?",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "Una persona può avere al massimo una carica, la carica successiva la scegli solo tra le persone rimanenti.",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "Una coordinata non basta: lo stesso $t$ deve soddisfare tutte e tre le equazioni. Verifica anche $y$ e $z$.",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "Facciamo sedere una persona in un posto qualsiasi (le rotazioni non si distinguono), gli altri {@0} li ordiniamo: $({@1}-1)!={@2}!={@3}$.",
  "KAJAK": "KAJAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "I candidati sono i punti stazionari interni all'intervallo e i due estremi. Calcola in essi i valori della funzione e confrontali.",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "Ogni stretta di mano è una coppia di persone, l'ordine non conta: $\\binom{n}{2}$. Imposta l'equazione di secondo grado.",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "Hai contato ogni diagonale due volte, da entrambi i suoi vertici estremi. Dividi il risultato per due.",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "Moltiplica ogni voto per il numero di alunni che lo hanno ricevuto, somma i risultati e dividi per il numero di tutti gli alunni.",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "Ogni anno la somma si moltiplica per $1+\\frac{p}{100}$: si tratta di una progressione geometrica.",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "Colleghiamo ogni vertice con gli $n-3$ vertici non adiacenti e così contiamo ogni diagonale due volte: $\\frac{n(n-3)}{2}$. {@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Se tutte le lettere fossero diverse, sarebbero $n!$. Scambiando lettere uguali non si ottiene una parola nuova, quindi dividi per i fattoriali dei numeri delle lettere ripetute.",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "Il cubo $ABCDEFGH$ ha spigolo $a={@0}\\,\\text{cm}$.",
  "Kocka ABCDEFGH s vyznačenými priamkami": "Cubo ABCDEFGH con le rette evidenziate",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "Cubo con la diagonale e l'angolo con il piano di base",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "I dadi si distinguono: $[1; 2]$ e $[2; 1]$ sono due risultati diversi. Conta entrambi gli ordini.",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "Il rapporto di similitudine è $k={@0}$. Quante volte aumenta {@1}? Scrivi il numero con 4 cifre decimali.",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "Il rapporto di similitudine è $k={@0}$. {@1} cambia di $k^{{@2}}={@3}$ volte, quindi aumenta del ${@4}\\,\\%$.",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "Un poligono convesso ha {@0} diagonali. Quanti vertici ha?",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "La radice $t_2={@0}$ è negativa e l'equazione ${@1}^{x}={@2}$ non ha soluzione.",
  "Koľko celých čísel ju spĺňa?": "Quanti numeri interi la soddisfano?",
  "Koľko celých čísel leží v prieniku?": "Quanti numeri interi stanno nell'intersezione?",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "Quanti euro ci saranno sul conto dopo {@0} anni? Arrotonda il risultato ai centesimi.",
  "Koľko je $f'(0)$?": "Quanto vale $f'(0)$?",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "Quanto vale $f'({@0})$? Scrivi un numero intero o una frazione.",
  "Koľko je $x=f^{-1}({@0})$?": "Quanto vale $x=f^{-1}({@0})$?",
  "Koľko je ${@0}!$?": "Quanto vale ${@0}!$?",
  "Koľko je spolu možností?": "Quante sono in tutto le possibilità?",
  "Koľko je trojíc, v ktorých sú len chlapci?": "Quante sono le terne formate solo da ragazzi?",
  "Koľko je všetkých trojíc?": "Quante sono tutte le terne?",
  "Koľko je všetkých výberov dvoch gúľ?": "Quante sono tutte le scelte di due palline?",
  "Koľko percent to je?": "Che percentuale è?",
  "Koľko percent žiakov odpovedalo „autobus“?": "Che percentuale di alunni ha risposto «autobus»?",
  "Koľko percent žiakov odpovedalo „auto“?": "Che percentuale di alunni ha risposto «auto»?",
  "Koľko percent žiakov odpovedalo „bicykel“?": "Che percentuale di alunni ha risposto «bicicletta»?",
  "Koľko percent žiakov odpovedalo „pešo“?": "Che percentuale di alunni ha risposto «a piedi»?",
  "Koľko percent žiakov odpovedalo „vlak“?": "Che percentuale di alunni ha risposto «treno»?",
  "Koľko percent žiakov odpovedalo „{@0}“?": "Che percentuale di alunni ha risposto «{@0}»?",
  "Koľko rokov má nový člen?": "Quanti anni ha il nuovo membro?",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "Quante «parole» diverse (anche senza senso) si ottengono riordinando tutte le lettere della parola {@0}?",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "Quante diagonali ha un poligono convesso di {@0} lati?",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "Quanti numeri {@0} {@1} si possono formare con le cifre {@2}, se le cifre {@3}?",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "Almeno quante volte dobbiamo lanciare un dado perché la probabilità che esca almeno una volta il sei sia maggiore di ${@0}$?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "In quanti modi {@0} persone possono sedersi in fila su {@1} sedie?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "In quanti modi {@0} persone possono sedersi attorno a un tavolo rotondo, se distinguiamo solo chi siede accanto a chi (una rotazione di tutta la disposizione non cambia nulla)?",
  "Koľkými spôsobmi vyberieme chlapcov?": "In quanti modi scegliamo i ragazzi?",
  "Koľkými spôsobmi vyberieme dievčatá?": "In quanti modi scegliamo le ragazze?",
  "Krabicový graf": "Diagramma a scatola",
  "Kružnica a priamka": "Circonferenza e retta",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "Quali radici soddisfano le condizioni? Scrivi tutte le soluzioni dell'equazione.",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "Quale radice di $V'(x)$ sta nell'intervallo $(0; {@0})$?",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "Quale scrittura esprime tutte le soluzioni dell'equazione ${@0}$ in $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "La funzione quadratica $f'$ tra le radici ha segno opposto a quello del suo coefficiente direttivo.",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "Un'equazione di secondo grado ha una radice doppia se e solo se il discriminante è nullo.",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "Il punto $Q{@0}$ sta sulla retta $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?",
  "Lokálne maximum": "Massimo locale",
  "Lokálne minimum": "Minimo locale",
  "MATEMATIKA": "MATEMATIKA",
  "Medián je priemer {@0}. a {@1}. hodnoty": "La mediana è la media del {@0}° e del {@1}° valore",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "La mediana è la media del {@0}° e del {@1}° valore: $\\frac{{@2}+{@3}}{2}={@4}$.",
  "Medián je {@0}. hodnota": "La mediana è il {@0}° valore",
  "Medián je {@0}. hodnota: ${@1}$.": "La mediana è il {@0}° valore: ${@1}$.",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "La mediana non è il voto centrale tra 1 e 5. È il valore centrale quando metti in fila i voti di tutti gli alunni.",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "Il denominatore si annulla per $x={@0}$ e lì il numeratore non è nullo (perché $ad-bc={@1}\\neq 0$), quindi $x={@2}$ è un asintoto verticale. Per $x\\to\\pm\\infty$ $f(x)$ tende al quoziente dei coefficienti di $x$: $\\frac{{@3}}{{@4}}={@5}$, l'asintoto orizzontale è $y={@6}$.",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "Scomponiamo il denominatore: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Dopo la semplificazione rimane $\\frac{1}{\\sqrt{x}+{@3}}$. Che valore ha $\\sqrt{x}+{@4}$ per $x={@5}$?",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "Le rette sghembe non stanno in un piano. Prova a trovare una faccia o una sezione del cubo in cui stanno entrambe le rette.",
  "Množina riešení sústavy troch lineárnych nerovníc": "Insieme delle soluzioni di un sistema di tre disequazioni lineari",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "Porta le potenze con lo stesso esponente $x$ in un membro, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, e poi prendi il logaritmo di entrambi i membri.",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "La moda è il valore con la frequenza maggiore. Conta quante volte compare ciascun valore.",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "In quale intervallo la funzione $f(x)={@0}$ è convessa?",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "In quali intervalli la funzione $f(x)={@0}$ è {@1}?",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "L'ordine non conta, si tratta di combinazioni: i ragazzi si scelgono in $\\binom{{@0}}{{@1}}={@2}$ modi, le ragazze in $\\binom{{@3}}{{@4}}={@5}$ modi. Per il principio del prodotto in tutto ci sono ${@6}\\cdot {@7}={@8}$ possibilità.",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "In prima posizione possiamo mettere {@0} ({@1} {@2}), nelle posizioni successive {@3}. In tutto ${@4}={@5}$.",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "A un incontro ogni partecipante ha stretto la mano a ciascun altro esattamente una volta. Le strette di mano sono state {@0}. Quante persone c'erano all'incontro?",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "In questo intervallo c'è un punto stazionario in cui $f'$ cambia segno, quindi lì la funzione non è monotona.",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "Sul cilindro c'è solo una semisfera, il suo volume è la metà del volume della sfera.",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "Abbiamo depositato sul conto ${@0}\\,€$ con un tasso di interesse annuo del ${@1}\\,\\%$, gli interessi vengono accreditati una volta all'anno e lasciati sul conto (non consideriamo le tasse). Quanti euro ci saranno sul conto dopo {@2} anni? Arrotonda il risultato ai centesimi.",
  "Najmenšie celé číslo v ňom je ${@0}$.": "Il più piccolo numero intero in esso è ${@0}$.",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "Prima trova i valori di $m$ per cui il determinante $m\\cdot m-k\\cdot k$ è nullo. Poi per ciascuno di essi sostituisci $m$ e confronta le equazioni.",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "Prima trova i punti di intersezione, poi integra la differenza tra la funzione «superiore» e quella «inferiore».",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "Prima stabilisci se i valori sono parole o numeri. Per i numeri distingui il contare (discreto) dal misurare (continuo).",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "Prima calcola l'apotema $s$ dal triangolo rettangolo con cateti $v$ e $R-r$. La superficie è formata da due basi e dalla superficie laterale $\\pi s(R+r)$.",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "Prima calcola la funzione interna: ${@0}({@1})$.",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "Il valore che compare più spesso è ${@0}$ (tre volte), gli altri valori al massimo due volte. La moda è ${@1}$.",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "Ad esempio $f(1)={@0}$ e $f(-1)={@1}$; non vale né $f(-1)=f(1)$ né $f(-1)=-f(1)$.",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "Scrivi l'equazione della tangente al grafico della funzione $f(x)={@0}$ nel punto di ascissa $x_0={@1}$ nella forma $y=kx+q$. Scrivi $k$ e $q$.",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "Disegna le rette e trova i vertici della regione come punti di intersezione delle rette di confine. La regione è un triangolo.",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "Sia $u={@0}$, $v=\\ln x$. Che valore ha il termine $u'v={@1}\\ln x$ nel punto $1$?",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "Sia $u={@0}$, $v=\\mathrm{e}^x$. Che valore ha il termine $u'v$ nel punto $0$?",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "Sia $x$ la lunghezza dei lati perpendicolari al muro. Il lato parallelo al muro ha lunghezza ${@0}-2x$ e l'area è $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ per $x={@4}$ e $S''=-4&lt;0$, si tratta di un massimo. Le dimensioni sono ${@5}\\,\\text{m}$ e ${@6}\\,\\text{m}$, l'area ${@7}\\,\\text{m}^2$.",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Una funzione dispari soddisfa $f(-x)=-f(x)$ per ogni $x$ del dominio. Sostituisci ad esempio $x=1$ e $x=-1$ e confronta.",
  "Newton-Leibnizova formula: {@0}": "Formula di Newton-Leibniz: {@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "Non dimenticare il coefficiente ${@0}$ al denominatore: l'espressione è $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "Non dimenticare il termine centrale $Rr$ nella parentesi: $R^2+Rr+r^2$.",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "Non dimenticare il termine centrale $a_1a_2$, cioè $\\sqrt{S_1S_2}$.",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "Non sono multipli l'uno dell'altro, i piani sono incidenti.",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Alcune lettere si ripetono e scambiandole non si ottiene una parola nuova. Dividi per i fattoriali dei numeri delle lettere ripetute.",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "Trova il punto di flesso della funzione $f(x)={@0}$. Scrivi le sue coordinate $x$ e $y$ (ad es. 1; -4).",
  "Nájdi korene derivácie $f'(x)={@0}$.": "Trova le radici della derivata $f'(x)={@0}$.",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "Trova una primitiva ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) e sostituisci gli estremi.",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "Trova i punti stazionari della funzione, cioè le radici dell'equazione $f'(x)={@0}=0$.",
  "O koľko percent sa {@0} zväčší? {@1}": "Di che percentuale aumenta {@0}? {@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "Entrambe le parti sono funzioni dispari, quindi lo è anche la loro somma: $f(-x)=-f(x)$.",
  "Objem": "Il volume",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "Il volume della sfera è $\\frac{4}{3}\\pi r^3$, non dimenticare il coefficiente $\\frac{4}{3}$.",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "Il volume è $V(x)=x({@0}-2x)^2$. Per quale $x$ dell'intervallo $(0; {@1})$ si ha $V'(x)=0$?",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "Il volume è $V(x)=x({@0}-2x)^2$. Scomponi la derivata nel prodotto $V'(x)=({@1}-2x)({@2}-cx)$. Qual è il numero $c$?",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "Il volume del cono è un terzo del volume del cilindro con la stessa base e la stessa altezza. Somma i volumi delle parti.",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "Il volume del cono non è $\\pi r^2 w$, ma solo un suo terzo.",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "Il volume del materiale è la differenza dei volumi di due cilindri con la stessa altezza.",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "Il volume della semisfera è la metà del volume della sfera, cioè $\\frac{2}{3}\\pi r^3$. Somma i volumi delle parti.",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "Il volume si conserva: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, quindi $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "L'area è $S(x)=x({@0}-2x)$, dove $x$ è il lato perpendicolare al muro. Per quale $x$ si ha $S'(x)=0$?",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "Area della sezione: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "L'area di un triangolo equilatero di lato $a$ è $\\frac{\\sqrt3}{4}a^2$. La superficie laterale del prisma è formata da tre rettangoli congruenti.",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "L'area del triangolo è la metà del prodotto della base per l'altezza. Non dimenticare di dividere per due.",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "Calcola l'area dai vettori $\\vec{AB}$ e $\\vec{AC}$ (metà del valore assoluto del determinante), poi l'altezza dalla formula $S=\\frac{c\\cdot v_c}{2}$.",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "Dal volume del cilindro pieno sottraiamo la cavità: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "Una sfera di piombo di raggio ${@0}\\,\\text{cm}$ è stata fusa in palline uguali di raggio ${@1}\\,\\text{cm}$. Quante palline si sono ottenute (senza perdite di materiale)?",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "Evento contrario (entrambi sbagliano): ${@0}\\cdot {@1}={@2}$, quindi $P=1-{@3}={@4}$.",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "L'evento contrario è $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Quindi $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "L'evento contrario «entrambe nere» ha $\\binom{{@0}}{2}={@1}$ scelte, quelle favorevoli sono ${@2}-{@3}={@4}$.",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "Evento contrario: il sei non esce mai, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. La probabilità cercata è $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "Verifica questa scrittura: sostituisci $k=0$ e $k=1$ e controlla se ottieni soluzioni dell'equazione. Verifica anche se la scrittura non tralascia qualche soluzione di un periodo.",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "Indica con $x$ il lato perpendicolare al muro, esprimi l'altro lato dalla lunghezza della rete e l'area come funzione di $x$. Poi cerca dove la sua derivata si annulla.",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "La parabola $y={@0}$ e la retta $y={@1}$ hanno due punti in comune. Scrivi le coordinate di quello con l'ascissa minore (ad es. -1; 4).",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "Le percentuali non si sommano. Eleva il coefficiente $k={@0}$ alla {@1} e solo dopo converti in percentuale.",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "La rete non serve su tutti e quattro i lati: il muro forma un lato, bisogna recintarne solo tre.",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "La superficie laterale è formata da tre rettangoli ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "Sostituendo $x={@0}$ risulta l'espressione $\\frac{0}{0}$, quindi scomponiamo il numeratore: ${@1}={@2}{@3}$. Per $x\\neq {@4}$ semplifichiamo e otteniamo $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "Dopo quanti anni il capitale per la prima volta almeno {@0}?",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "Togliendo i logaritmi ottieni $({@0})({@1})={@2}$. Scrivi le radici di questa equazione di secondo grado.",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "Dopo l'arrivo il coro ha ${@0}$ membri, quindi la nuova somma è ${@1}\\cdot {@2}$.",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "Con la sostituzione $t={@0} x$ ottieni ${@1}=0$. Scrivi le sue radici (una frazione ad es. come 1/2).",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Con la sostituzione $t={@0}$ risolvi l'equazione ${@1}=0$. Scrivi le sue radici $t$.",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "Con la sostituzione $t={@0}^{x}$ risolvi l'equazione ${@1}=0$. Scrivi le sue radici $t$.",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "Dopo aver raccolto ${@0}$: per quali $x$ in {@1} si ha ${@2}=0$?",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "Dopo la semplificazione è rimasta l'espressione ${@0}$ e in essa bisogna ancora sostituire $x={@1}$.",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "Dopo la semplificazione al denominatore rimane $\\sqrt{x}+{@0}$, non solo $\\sqrt{x}$. Sostituisci $x={@1}$ in tutta la somma.",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "Dopo aver semplificato il fattore ${@0}$ rimane ${@1}$. Che valore ha questa espressione per $x={@2}$?",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "Dopo lo scambio delle variabili abbiamo $x={@0}$. Qual è il coefficiente $k$ di $x$ nell'espressione $y=kx+q$?",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "Le strette di mano sono $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Dall'equazione $\\frac{n(n-1)}{2}={@0}$ otteniamo $n^2-n-{@1}=0$, la radice positiva è $n={@2}$.",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "Il quoziente dei coefficienti direttivi decide solo a parità di grado. Qui il numeratore ha grado minore, quindi dopo aver diviso per la potenza massima del denominatore tutto il numeratore tende a zero.",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "Condizione $x&gt;0$. Sostituzione $t={@0}$: ${@1}=0$, quindi $t_1={@2}$, $t_2={@3}$. Da ${@4}={@5}$ si ha $x={@6}^{{@7}}={@8}$ e da ${@9}={@10}$ si ha $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "Le condizioni danno $x&gt;c$. Qual è il numero $c$?",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "Condizioni: ${@0}&gt;0$ e ${@1}&gt;0$, quindi $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Le radici sono ${@10}$ e ${@11}$; la condizione è soddisfatta solo da $x={@12}$. $K=\\{{@13}\\}$.",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "La base è un triangolo equilatero, non un quadrato: la sua area è $\\frac{\\sqrt3}{4}a^2$.",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "La base è un triangolo equilatero: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "Per la relazione di Viète la somma delle radici è $x_1+x_2=-p$, non $p$. Attenzione al segno.",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "Il raggio della sfera, la distanza del piano dal centro e il raggio della sezione formano un triangolo rettangolo (il raggio della sfera è l'ipotenusa).",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "Raggio della sezione: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}",
  "Polož diskriminant rovný nule.": "Poni il discriminante uguale a zero.",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "Con $\\sin^2 x+\\cos^2 x=1$ riscrivi l'equazione solo in ${@0} x$.",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "Confronta anche i valori della funzione negli estremi dell'intervallo: l'estremo assoluto può trovarsi proprio lì.",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "Confronta le direzioni delle rette. Se non sono parallele, stabilisci se stanno in un piano (ad es. in una faccia o in una sezione diagonale del cubo).",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "Confronta i gradi del numeratore e del denominatore. A parità di grado decidono i coefficienti direttivi.",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "Confronta questi valori con i valori nei punti stazionari interni all'intervallo. Quale valore è {@0}?",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "Confronta la distanza del centro dalla retta con il raggio. Il raggio è la radice del membro destro dell'equazione della circonferenza, cioè $r={@0}$, non ${@1}$. Attenzione anche ai segni delle coordinate del centro.",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "Confrontiamo i membri destri: ${@0}={@1} \\Rightarrow {@2}=0$, radici $x={@3}$ e $x={@4}$. Per $x={@5}$ si ha $y={@6}\\cdot {@7}{@8}={@9}$. I punti di intersezione sono $[{@10}; {@11}]$ e $[{@12}; {@13}]$.",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "Serve $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, cioè $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Prendiamo i logaritmi (il logaritmo di un numero minore di 1 è negativo, il verso si inverte): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Il più piccolo $n$ intero è ${@4}$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "Usa $(u\\cdot v)'=u'v+uv'$ e $(\\ln x)'=\\frac{1}{x}$. Non dimenticare che $\\ln 1=0$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "Usa $(u\\cdot v)'=u'v+uv'$ e $(\\mathrm{e}^x)'=\\mathrm{e}^x$.",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "Usa $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Usa $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "Usa $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. Al numeratore i termini con $x$ si sottraggono.",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "Usa $\\sin 2x=2\\sin x\\cos x$, porta tutto in un membro e raccogli il fattore comune. Non dividere per esso!",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "Usa l'evento contrario: la probabilità che il sei non esca in nessuno dei lanci è $\\left(\\frac{5}{6}\\right)^n$.",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "Usa la formula $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, dove $Q$ è un punto della retta. Oppure trova un triangolo in cui la distanza cercata è un'altezza.",
  "Povrch": "La superficie",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "La superficie della sfera è ${@0}\\pi\\,\\text{cm}^2$. Il suo volume si può scrivere come $V=k\\pi\\,\\text{cm}^3$. Calcola $k$.",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "Attenzione al segno del denominatore: per $x$ appena {@0} di ${@1}$ il denominatore ${@2}$ è {@3}. Combinalo con il segno del numeratore.",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "Attenzione, $R^2-r^2$ non è la stessa cosa di $(R-r)^2$. Sottrai i volumi di due cilindri.",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "Attenzione, $\\cos\\pi=-1$, non $1$. I valori della primitiva negli estremi quindi non si annullano sottraendoli.",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "Attenzione, $\\ln 1=0$, perché $\\mathrm{e}^0=1$. Il valore della primitiva nell'estremo inferiore è nullo.",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "Attenzione, $\\ln 1=0$, non $1$ (perché $\\mathrm{e}^0=1$). Il primo termine $u'v$ è quindi nullo nel punto $1$.",
  "Počet pokusov n": "Numero di prove n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "Il numero di diagonali di un poligono di $n$ lati è $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (tutti i segmenti tra vertici meno i lati).",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "Il numero di ordinamenti di $n$ elementi diversi è $n!$.",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "I numeri di posti formano una progressione aritmetica con $a_1={@0}$, $d={@1}$. La somma $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ porta alla disequazione di secondo grado ${@5}\\ge 0$. La radice positiva è circa ${@6}$, quindi $n={@7}$. Verifica: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "Hai calcolato nell'ordine opposto. In $({@0})(x)$ si applica prima {@1} (la funzione interna) e il suo risultato si sostituisce in {@2}.",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "Lavora con le somme: somma = media · numero. Confronta la somma prima e dopo l'arrivo del nuovo membro.",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "Le probabilità dei singoli lanci non si sommano (con 6 lanci si otterrebbe la certezza). Usa l'evento contrario «nemmeno una volta».",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "Le probabilità di mancare il bersaglio sono ${@0}$ e ${@1}$. {@2}",
  "Pravdepodobnosť p": "Probabilità p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "Un prisma regolare a base triangolare ha lo spigolo di base $a={@0}\\,\\text{cm}$ e l'altezza $v={@1}\\,\\text{cm}$. Calcolane {@2}. {@3}",
  "Pravidelný štvorboký ihlan": "Piramide regolare a base quadrata",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "Una piramide regolare a base quadrata ha lo spigolo di base $a={@0}\\,\\text{cm}$ e l'altezza $v={@1}\\,\\text{cm}$. Calcola {@2}.{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "Un tronco di piramide regolare a base quadrata ha gli spigoli di base $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ e l'altezza $v={@2}\\,\\text{cm}$. Calcola il suo volume in $\\text{cm}^3$.{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "Per $x\\to {@0}^{{@1}}$ si ha $x {@2} {@3}$, il denominatore ${@4}$ è quindi {@5} e tende a zero. Il numeratore ${@6}$ è {@7}, quindi la frazione cresce in valore assoluto oltre ogni limite con il segno {@8}: il limite è {@9}.",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "Per $x\\to\\infty$ non decidono i termini noti, ma i termini con la potenza massima di $x$.",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "Per $x\\to\\pm\\infty$ decidono i coefficienti di $x$, non i termini noti.",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "Per quale valore del parametro $c$ l'equazione $x^2{@0}+c=0$ ha una radice doppia?",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "Per la distribuzione binomiale $E(X)=np$ e $D(X)=np(1-p)$.",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "Per la funzione $f(x)=({@0})\\,\\mathrm{e}^{x}$ calcola $f'(0)$.",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "Per la funzione $f(x)=({@0})\\ln x$ calcola $f'(1)$.",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "Per la funzione $f(x)=({@0})^{{@1}}$ calcola $f'({@2})$.",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "Per la funzione $f(x)=\\dfrac{{@0}}{{@1}}$ calcola $f'({@2})$. Scrivi il risultato come numero intero o frazione.",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "Per la funzione $f(x)={@0}{@1}$ calcola $f'(0)$.",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "Per le radici dell'intervallo $\\langle -1; 1\\rangle$ trova tutti gli $x$ in gradi in {@0}.",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "Per quali $x$ si annulla la parentesi ${@0} {@1}$?",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "Per quali valori del parametro $p$ l'equazione $x^2+px+{@0}=0$ ha una radice doppia? Scrivi tutti i valori separati da un punto e virgola.",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "Per quali valori del parametro $p$ l'equazione $x^2{@0}+p=0$ ha {@1}?",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "Per il tronco di piramide vale $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; con basi quadrate si ha $\\sqrt{S_1S_2}=a_1a_2$.",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "Prima di determinare la mediana bisogna ordinare i dati per grandezza.",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "Il presidente lo scegli tra $n$ persone, il vicepresidente solo tra le rimanenti, il tesoriere tra quelle che restano ancora.",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "Immagina il piano come una sezione del cubo. Una retta sta nel piano se vi stanno due suoi punti; è parallela se è parallela a una retta del piano.",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "Immagina tutti i voti in fila dal migliore. La mediana è il valore centrale (con un numero pari di dati la media dei due centrali).",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "In $(f\\circ g)(x)=f(g(x))$ calcoli prima la funzione interna $g$, il suo risultato lo sostituisci in $f$.",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "Derivando una potenza l'esponente diminuisce di uno: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "Con una sostituzione lineare il risultato va diviso per il coefficiente di $x$, cioè per ${@0}$.",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "Per eventi indipendenti le probabilità che si verifichino contemporaneamente si moltiplicano. Con «almeno uno» usa l'evento contrario.",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "A un tavolo rotondo le disposizioni che differiscono solo per una rotazione sono uguali. Fissa una persona.",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "In una similitudine di rapporto $k$ {@0}. Converti in percentuale il fattore ottenuto.",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "Nella fusione si conserva il volume. Il rapporto dei volumi di solidi simili è il cubo del rapporto delle lunghezze.",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "Lungo un muro dritto vogliamo recintare un terreno rettangolare, il muro forma uno dei suoi lati. Abbiamo ${@0}\\,\\text{m}$ di rete. {@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "Con il lato del quadrato ritagliato $x$ la scatola ha fondo $({@0}-2x)^2$ e altezza $x$: $V(x)=x({@1}-2x)^2$ per $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, nell'intervallo si annulla solo per $x={@7}$ (lì il segno passa da $+$ a $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "Esprimendo $y$ bisogna dividere per ${@0}$ tutto il membro destro, quindi anche il termine noto.",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Nella funzione composta moltiplica per la derivata della funzione interna: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "La retta $p: {@0}=0$ interseca la circonferenza $k: {@1}$ in due punti. Scrivi le ascisse di entrambi i punti di intersezione separate da un punto e virgola.",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "Una retta è parallela a un piano solo se il suo vettore direttore è perpendicolare al vettore normale del piano ($\\vec u\\cdot\\vec n=0$). Calcola questo prodotto scalare.",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "Una retta sta in un piano solo se vi stanno due suoi punti. Verifica entrambi gli estremi.",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "Una retta interseca un piano solo se $\\vec u\\cdot\\vec n\\neq 0$. Calcola il prodotto scalare del vettore direttore e del vettore normale.",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "Le rette $y={@0}$ e $y={@1}$ intersecano l'asse $x$ nei punti $[{@2}; 0]$ e $[{@3}; 0]$ e si intersecano tra loro nel punto $[{@4}; {@5}]$. La regione è un triangolo di base ${@6}$ e altezza ${@7}$, la sua area è $\\frac{{@8}\\cdot {@9}}{2}={@10}$.",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "Coppie favorevoli: {@0}: in tutto ${@1}$.",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "Favorevoli: $\\binom{{@0}}{2}={@1}$.",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "Favorevoli: ${@0}\\cdot {@1}={@2}$ (la bianca e la nera le scegliamo indipendentemente).",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "La media da una tabella di frequenze è ponderata: moltiplica ogni voto per il numero di alunni che lo hanno ricevuto.",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "L'età media dei {@0} membri di un coro è ${@1}$ anni. Quando nel coro è entrato un nuovo membro, l'età media {@2} a ${@3}$ anni. Quanti anni ha il nuovo membro?",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "Intersezioni con l'asse $x$: ${@0}-x^2=0$, quindi $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "I punti di intersezione sono $x=0$ e un altro punto. Qual è la sua $x$?",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "Punti di intersezione: $x^2={@0}$, quindi $x=0$ e $x={@1}$. In $\\langle 0; {@2}\\rangle$ la retta sta sopra la parabola. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "La primitiva è $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Calcola $F(1)$. Scrivi una frazione o un numero intero.",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "La primitiva è $F(x)={@0}$. Calcola $F({@1})$.",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "La primitiva è $F(x)={@0}x-\\frac{x^3}{3}$. Calcola $F({@1})$. Scrivi una frazione o un numero intero.",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "La prima disequazione ha soluzione $x&gt;c$. Qual è il numero $c$?",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "Prima disequazione: ${@0} {@1} {@2}$, dividendo per ${@3}$ {@4}$x&gt;{@5}$. Seconda: ${@6} {@7} {@8}$, da cui {@9}$x\\le {@10}$. L'intersezione è $({@11}; {@12}\\rangle$. {@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "Esattamente uno può essere sia il primo sia il secondo tiratore. Somma le probabilità di entrambe le possibilità.",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Una funzione pari soddisfa $f(-x)=f(x)$ per ogni $x$ del dominio. Sostituisci ad esempio $x=1$ e $x=-1$ e confronta.",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "La frequenza relativa è $\\frac{n_i}{n}$, in percentuale moltiplicala per 100.",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "La sezione non ha il raggio della sfera. Prima calcola il raggio della sezione $\\rho$ dal triangolo rettangolo.",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "Risolviamo ${@0}^{{@1}}{@2}={@3}$. A che cosa è uguale la potenza ${@4}^{{@5}}$?",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "Un cono circolare retto ha raggio di base $r={@0}\\,\\text{cm}$ e altezza $v={@1}\\,\\text{cm}$. Calcola {@2}. {@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "Il piano $\\rho: {@0}+d=0$ passa per il punto $P{@1}$. Calcola $d$.",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "Il piano ${@0}$ ha vettore normale $\\vec{n}={@1}$ ed equazione ${@2}+d=0$. Calcola $d$.",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "L'equazione $x^2+px{@0}=0$ ha la radice $x_1={@1}$. Determina il parametro $p$ e la seconda radice $x_2$ (scrivili in quest'ordine, ad es. -5; 3).",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "Probabilmente hai diviso l'equazione per l'espressione ${@0}$ e hai perso le soluzioni in cui essa si annulla. Raccoglila.",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "Rette parallele hanno vettori direttori che sono multipli l'uno dell'altro. Confronta i vettori direttori.",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "Piani paralleli hanno vettori normali che sono multipli l'uno dell'altro. Confronta i vettori normali.",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "Dividiamo i casi secondo l'ultima cifra (deve essere {@0}); la prima cifra non deve essere zero{@1}: {@2}. In tutto ${@3}$.",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "Scomponi $f'(x)$ in fattori, trova gli zeri e stabilisci dove la derivata cambia segno.",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "La varianza della distribuzione binomiale è $np(1-p)$, non dimenticare il fattore $1-p$.",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "Il campo di variazione è la differenza tra il valore massimo e il minimo, non tra l'ultimo e il primo valore della lista.",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "Le disposizioni che differiscono solo per una rotazione del tavolo sono uguali. Così hai contato ciascuna {@0} volte.",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "Numerosità della popolazione $n={@0}={@1}$. Frequenza relativa: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "Rette incidenti hanno un punto in comune e quindi stanno in un piano. Riesci a trovare un tale piano?",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "Piani incidenti hanno vettori normali che non sono multipli l'uno dell'altro. Confronta i vettori normali.",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "Un tubo ha la forma di un cilindro cavo con raggio esterno ${@0}\\,\\text{cm}$, raggio interno ${@1}\\,\\text{cm}$ e lunghezza ${@2}\\,\\text{cm}$. Calcola il volume del materiale in $\\text{cm}^3$. {@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "La parola ha {@0} lettere, si ripetono {@1}. Si tratta di permutazioni con ripetizione: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "Il coefficiente angolare della tangente è $f'(x_0)$. Sostituisci in $y=f(x_0)+f'(x_0)(x-x_0)$ e semplifica.",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "I vettori direttori $\\vec{{@0}}={@1}$ e $\\vec{{@2}}={@3}$ sono multipli l'uno dell'altro e il punto ${@4}$ non sta sulla retta ${@5}$, le rette sono parallele.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "I vettori direttori ${@0}$ e ${@1}$ non sono multipli l'uno dell'altro, ma le rette stanno in un piano e si intersecano nel punto ${@2}$. Sono incidenti.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "I vettori direttori ${@0}$ e ${@1}$ non sono multipli l'uno dell'altro, quindi le rette non sono parallele; non stanno nemmeno in un piano, quindi non hanno punti in comune. Sono sghembe.",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "Un'associazione ha {@0} soci. In quanti modi possono eleggere il presidente, il vicepresidente e il tesoriere (una persona ricopre al massimo una carica)?",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "Conta le terne con le combinazioni e sfrutta l'evento contrario «solo ragazzi».",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "Apotema: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "L'apotema del cono $s$ è l'ipotenusa di un triangolo rettangolo con cateti $r$ e $v$.",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "Apotema del cono: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "Apotema: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "Indichiamo i lati con $a-d$, $a$, $a+d$ (l'ipotenusa è il più lungo). Dal perimetro $3a={@0}$, quindi $a={@1}$. Teorema di Pitagora: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. I lati sono ${@8}$, ${@9}$, ${@10}$ cm{@11}.",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "I lati sono $a-d$, $a$, $a+d$. Dal perimetro calcola $a$.",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "Scrivi i lati come $a-d$, $a$, $a+d$. Il perimetro dà $a$, il teorema di Pitagora poi la ragione $d$.",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "Il centro è $S[{@0}; {@1}]$ e il vettore $\\vec{ST}=({@2}; {@3})$ è perpendicolare alla tangente, è il suo vettore normale: quindi l'equazione ha la forma ${@4}+c=0$. Sostituiamo $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, quindi $c={@9}$.",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "Il centro della circonferenza è $S[{@0}; {@1}]$, il raggio $r={@2}$. Distanza del centro dalla retta: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Poiché $d{@10}r$, la retta è {@11}.",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "Angolo al centro: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.",
  "Stĺpcový graf známok": "Istogramma dei voti",
  "Stĺpcový graf známok v triede": "Istogramma dei voti nella classe",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "Sostituzione $u={@0}$ (oppure la formula $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): la primitiva è $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "Sono multipli l'uno dell'altro, i piani sono paralleli; il punto ${@0}$ {@1} ${@2}$, quindi i piani sono {@3}.",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "Le coordinate del punto $P$ devono soddisfare l'equazione: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, quindi ${@6}+d=0$ e $d={@7}$.",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "Il sistema di disequazioni ${@0}$ e ${@1}$ ha soluzione in $\\mathbb{R}$. {@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "Sistema di equazioni con parametro $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Per quale valore di $m$ {@4}?",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "La somma di logaritmi è il logaritmo del prodotto: $\\log_2 u+\\log_2 v=\\log_2(uv)$, non $\\log_2(u+v)$.",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "La somma con $d$ deve essere zero. Quanto vale $d$?",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "La somma delle età dei membri iniziali è ${@0}\\cdot {@1}={@2}$. Dopo l'arrivo la somma delle età è ${@3}\\cdot {@4}={@5}$. Il nuovo membro ha ${@6}-{@7}={@8}$ anni.",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "La somma dei voti va divisa per il numero di alunni $n$, non per il numero di voti diversi.",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "La somma dei quadrati degli scarti si divide per il numero di dati $n={@0}$, non per $n-1$ (così è definita la varianza nella teoria).",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "Il prodotto di due funzioni dispari è pari: $(-x)\\sin(-x)=x\\sin x$.",
  "Súčin je nenulový, priamka rovinu pretína.": "Il prodotto non è nullo, la retta interseca il piano.",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "Il prodotto è dispari solo quando entrambi i numeri sono dispari: $3\\cdot 3=9$ risultati. Quelli favorevoli sono $36-9=27$.",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "Il prodotto è nullo, la retta è parallela al piano; il punto ${@0}$ {@1}.",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "Il prodotto delle radici è $x_1x_2={@0}$. Qual è la seconda radice $x_2$?",
  "Tabuľka": "Tabella",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "Così sarebbe con l'interesse semplice. Con quello composto producono interessi anche gli interessi accreditati, la somma ogni anno si moltiplica.",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "Così sarebbe con l'interesse semplice. Gli interessi restano sul conto e l'anno successivo producono interessi anche loro, la somma ogni anno si moltiplica.",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "Il solido è formato da un cilindro di raggio ${@0}\\,\\text{dm}$ e altezza ${@1}\\,\\text{dm}$, su cui è posto un cono con la stessa base e altezza ${@2}\\,\\text{dm}$. Calcola il volume del solido in $\\text{dm}^3$. {@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "Il solido è formato da un cilindro di raggio ${@0}\\,\\text{m}$ e altezza ${@1}\\,\\text{m}$, sulla cui base superiore c'è una semisfera con lo stesso raggio. Calcola il volume del solido in $\\text{m}^3$. {@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Questo è il quadrato della distanza. Estrai ancora la radice del risultato.",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "Questo è l'altro punto in comune. Chiediamo quello con l'ascissa minore.",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "Questo è l'altro punto stazionario, in esso la funzione ha un {@0} locale. Nel massimo $f'$ cambia segno da $+$ a $-$, nel minimo da $-$ a $+$.",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "Questa è la lunghezza del lato perpendicolare al muro. Chiediamo il lato parallelo al muro, la sua lunghezza è ${@0}-2x$.",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "Questa è solo la superficie laterale della piramide. La superficie totale comprende anche la base quadrata.",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "Questa è solo la superficie laterale del cono. La superficie totale comprende anche la base circolare $\\pi r^2$.",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "Questa è solo la superficie laterale. La superficie totale comprende anche le due basi circolari.",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "Questa è la nuova età media. Lavora con le somme delle età: somma = media · numero.",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "Questo è il volume del prisma con la stessa base e la stessa altezza. Il volume della piramide ne è un terzo.",
  "To je objem valca. Objem kužeľa je jeho tretina.": "Questo è il volume del cilindro. Il volume del cono ne è un terzo.",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "Questa è l'area sotto la parabola. La figura sta tra due curve, integra la differenza «superiore meno inferiore».",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "Questa è l'area sotto la retta. Da essa bisogna ancora sottrarre l'area sotto la parabola.",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "Questo è il rapporto dei raggi. Nella fusione si conserva il volume e il volume cresce con il cubo del raggio.",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "Questa è la frequenza del valore più frequente. La moda è il valore stesso che compare più spesso.",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "Questa è la probabilità dell'evento contrario $X=0$. Sottraila da uno.",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "Questa è la probabilità dell'evento contrario, che vengano scelti solo ragazzi. Sottraila da uno.",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "Questa è la probabilità dell'evento contrario, che il prodotto sia dispari. Sottraila da uno.",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "Questa è la probabilità dell'evento contrario, che il sei non esca mai. Sottraila da uno.",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "Questa è la probabilità di esattamente un successo. «Almeno uno» comprende anche più successi, usa l'evento contrario.",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "Questa è la probabilità che non colpiscano entrambi contemporaneamente. Nessuno dei due significa che sbagliano entrambi.",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "Questa è la probabilità che colpiscano entrambi. «Almeno uno» comprende anche i casi in cui colpisce solo uno.",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "Questa è la media. La mediana è il valore centrale della serie ordinata.",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "Questo è il lato intermedio. L'ipotenusa è il lato più lungo del triangolo.",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "Questa è la varianza. La deviazione standard è la sua radice quadrata.",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "Questa è la deviazione standard. La varianza è il suo quadrato, $D(X)=np(1-p)$.",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "Questa è la deviazione standard. Della varianza non si estrae la radice.",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "Questo è il lato del quadrato ritagliato. Chiediamo il volume della scatola.",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "Questo è l'angolo al centro del settore in gradi. La percentuale è una parte di $100$, non di $360$.",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "Questo è l'angolo tra la retta e il vettore normale del piano. L'angolo con il piano è il suo complementare a $90^\\circ$: con la normale calcola $\\sin\\varphi$, non $\\cos\\varphi$.",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "Questa è la distanza tra i punti ${@0}$ e ${@1}$. La distanza da una retta si misura perpendicolarmente alla retta.",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "Queste sono le ordinate dei punti di intersezione. Scrivi le loro ascisse.",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "Questi sono i valori della sostituzione $t={@0}$. Dalla definizione di logaritmo calcola ancora $x={@1}^{t}$.",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "Questi sono i valori della sostituzione $t={@0}^{x}$. Torna ancora all'incognita $x$.",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "Questa è la percentuale. L'angolo al centro è la stessa parte dell'angolo giro $360^\\circ$, non di $100$.",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "Questi sono tutti i segmenti tra coppie di vertici, compresi i lati del poligono. I lati vanno sottratti.",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "Rette coincidenti hanno tutti i punti in comune. Verifica se entrambi i punti di una retta stanno sull'altra.",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "Piani coincidenti hanno tutti i punti in comune. Verifica se tutti e tre i punti del secondo piano stanno nel primo.",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "Il triangolo ha i vertici $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Calcola la sua area $S$ e l'altezza $v_c$ relativa al lato $AB$. Scrivi $S$ e $v_c$ (arrotondata a 2 cifre decimali) separati da un punto e virgola.",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "Qui $f''(x)&lt;0$, la funzione lì è concava. Dividendo la disequazione per un numero negativo non dimenticare di invertire il verso.",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "Qui la funzione è {@0}. Controlla il segno di $f'$: tra le radici ha segno opposto al coefficiente direttivo ${@1}$.",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "Questa condizione corrisponde a $D&gt;0$, cioè a due radici reali distinte.",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "Questa condizione corrisponde a $D&lt;0$, l'equazione allora non ha radici reali.",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "Questa condizione corrisponde a $D=0$, cioè a una radice doppia.",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "Questa condizione corrisponde a $D\\ge 0$, cioè ad almeno una radice reale.",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "Questa condizione corrisponde a $D\\le 0$: comprende la radice doppia e il caso senza radici reali.",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "L'angolo tra due rette è al massimo $90^\\circ$. Nella formula per $\\cos\\varphi$ al numeratore c'è il valore assoluto del prodotto scalare.",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "Calcola l'angolo tra una retta e un piano tramite il vettore normale del piano: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Oppure trova la proiezione della retta sul piano e un triangolo rettangolo.",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "L'angolo tra due rette è l'angolo dei loro vettori direttori nell'intervallo $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "Colloca il cubo in un sistema di coordinate, scrivi le coordinate dei due punti (il punto medio di uno spigolo è la media degli estremi) e usa la formula della distanza.",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "Trasforma $f(-x)$: sfrutta $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ e $\\cos(-x)=\\cos x$. Poi confronta sia con $f(x)$ sia con $-f(x)$.",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "Porta l'equazione nella forma $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Qual è il numero $r$? Scrivi una frazione o un numero intero.",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "Trasformiamo: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Per $x\\to 0$ anche $t={@6}x\\to 0$ e $\\frac{\\sin t}{t}\\to 1$. Il limite è ${@7}{@8}$.",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "Determina gli asintoti del grafico della funzione $f(x)=\\dfrac{{@0}}{{@1}}$. Scrivi il numero dell'asintoto verticale $x=\\dots$ e poi il numero dell'asintoto orizzontale $y=\\dots$ (ad es. 2; -1/2).",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "Determina il limite unilaterale $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "Determina le condizioni, scrivi la somma dei logaritmi come logaritmo del prodotto e togli i logaritmi. Confronta le radici trovate con le condizioni.",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "Determina la posizione reciproca della retta $p: {@0}=0$ e della circonferenza $k: {@1}$.",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "Serie ordinata: ${@0}$ ($n={@1}$). {@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "In $P(X=1)$ manca il coefficiente binomiale $\\binom{{@0}}{1}={@1}$: il successo può verificarsi in una qualsiasi delle prove.",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "Nel cubo $ABCDEFGH$ (base $ABCD$, sopra di essa $EFGH$, spigoli $AE$, $BF$, $CG$, $DH$) determina la posizione reciproca delle rette ${@0}$ e ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "Nel cubo $ABCDEFGH$ determina la posizione reciproca della retta ${@0}$ e del piano ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "Nel cubo $ABCDEFGH$ determina la posizione reciproca dei piani ${@0}$ e ${@1}$.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Nel cubo $ABCDEFGH$ calcola l'angolo tra la retta ${@0}$ e il piano ${@1}$ in gradi. Arrotonda il risultato ai decimi di grado.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Nel cubo $ABCDEFGH$ calcola l'angolo tra le rette ${@0}$ e ${@1}$ in gradi. Arrotonda il risultato ai decimi di grado.",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "Nel cubo di spigolo $1$ il vettore direttore della retta è $\\vec{u}={@0}$ e il piano ${@1}$ è una faccia del cubo con vettore normale $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, quindi $\\varphi\\approx {@6}^\\circ$.",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "Nel cubo di spigolo $1$ i vettori direttori sono $\\vec{u}=\\vec{{@0}}={@1}$ e $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, quindi $\\varphi\\approx {@8}^\\circ$.",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "In un circolo ci sono {@0} ragazzi e {@1} {@2}. Per una gara scegliamo a caso tre membri. Qual è la probabilità che tra loro ci sia almeno una ragazza? {@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "In quale dei punti ${@0}$, ${@1}$ la funzione ha un {@2}?",
  "V percentách ${@0}\\,\\%$.": "In percentuale ${@0}\\,\\%$.",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "Nel triangolo rettangolo con l'altezza della piramide e l'apotema l'altro cateto è la metà dello spigolo di base, non tutto lo spigolo.",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "In fila conta chi siede su quale sedia: la rotazione qui non ha importanza, ordina tutte le persone.",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "Nell'equazione $y=ax+b$ scambia $x$ e $y$ ed esprimi $y$.",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "In un gruppo l'ordine non conta, si tratta di combinazioni, non di disposizioni.",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "Nel punto in comune entrambe le funzioni hanno lo stesso valore: uguaglia i membri destri e risolvi l'equazione di secondo grado.",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "In una classe ci sono {@0} ragazzi e {@1} ragazze. In quanti modi possiamo scegliere un gruppo in cui ci saranno {@2} e {@3}?",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "Nell'urna ci sono palline: {@0} {@1} e {@2} {@3}. Ne estraiamo a caso due contemporaneamente. Qual è la probabilità che {@4}? {@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "Cilindro: $\\pi r^2v={@0}\\pi$. Cono: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. In tutto $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "Cilindro: $\\pi r^2v={@0}\\pi$. Semisfera: $\\frac{2}{3}\\pi r^3={@1}\\pi$. In tutto $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "Il campo di variazione è la differenza tra il valore massimo e il valore minimo.",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "Un capitale frutta interessi annui al tasso del ${@0}\\,\\%$ (interesse composto, senza tasse). Dopo quanti anni per la prima volta almeno {@1}?",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "Nella formula l'altezza è divisa per tre: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Nella formula del volume del tronco di cono l'altezza è divisa per tre: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "Torna a $x$ e scrivi tutte le soluzioni (una frazione ad es. come 1/2).",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "Dividiamo entrambi i membri per l'espressione ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Prendiamo i logaritmi: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, quindi $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "Esprimi il discriminante in funzione di $p$ e secondo il numero di radici richiesto stabilisci se deve essere positivo, nullo o negativo.",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "Esprimi la funzione goniometrica, trova le soluzioni in un periodo e aggiungi i multipli del periodo ($2\\pi$ per seno e coseno, $\\pi$ per la tangente).",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "Esprimi il volume come funzione del lato del quadrato ritagliato, derivala e trova il punto stazionario nell'intervallo ammissibile.",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "Scambiamo $x$ e $y$: $x={@0}$, da cui ${@1}y={@2}$ e $y=\\dfrac{{@3}}{{@4}}$. Quindi $f^{-1}(x)={@5}x{@6}{@7}$, cioè $k={@8}$ e $q={@9}$.",
  "Vypočítaj $F(-{@0})$.": "Calcola $F(-{@0})$.",
  "Vypočítaj $F(0)$.": "Calcola $F(0)$.",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "Calcola $F(1)-F(0)$. Scrivi una frazione o un numero intero.",
  "Vypočítaj $F({@0})$.": "Calcola $F({@0})$.",
  "Vypočítaj $F({@0})-F({@1})$.": "Calcola $F({@0})-F({@1})$.",
  "Vypočítaj $P(X=0)$. {@0}": "Calcola $P(X=0)$. {@0}",
  "Vypočítaj $P(X=1)$. {@0}": "Calcola $P(X=1)$. {@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "Calcola $P(X={@0})$. {@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "Calcola $P(X\\ge 1)$. {@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "Calcola $P(X\\le 1)$. {@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "Calcola $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcola $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Scrivi il risultato come frazione o numero intero.",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "Calcola $\\int_0^{{@0}} x^2\\,dx$. Scrivi una frazione o un numero intero.",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "Calcola $\\int_0^{{@0}} {@1}\\,dx$.",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "Calcola $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Scrivi il risultato come numero intero o frazione.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "Calcola $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Scrivi il risultato come frazione.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "Calcola $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "Calcola $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Scrivi il risultato come numero intero o frazione (ad es. -3/2).",
  "Vypočítaj $k$.": "Calcola $k$.",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "Calcola $t$ dalla prima coordinata e sostituiscilo nelle altre due equazioni. Verificale attentamente entrambe.",
  "Vypočítaj $|AB|^2$.": "Calcola $|AB|^2$.",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "Calcola $|\\vec u\\cdot\\vec n|$ per $\\vec u=\\vec{{@0}}$ e il vettore normale $\\vec n={@1}$ (cubo di spigolo $1$).",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "Calcola $|{@0}K|$ in cm. {@1}",
  "Vypočítaj $|{@0}K|^2$.": "Calcola $|{@0}K|^2$.",
  "Vypočítaj absolútny člen $q$.": "Calcola il termine noto $q$.",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "Calcola la media aritmetica $\\bar{x}$.",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "Calcola il determinante $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "Calcola la derivata seconda. Per quale $x$ si ha $f''(x)=0$?",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "Calcola il valore nell'estremo destro, $f({@0})$.",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "Calcola il valore nell'estremo sinistro, $f({@0})$.",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "Calcola il volume di tutto il solido in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "Calcola il volume di tutto il solido in $\\text{m}^3$. {@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcola il volume della cavità di raggio ${@0}\\,\\text{cm}$ in $\\text{cm}^3$. {@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "Calcola il volume del cono in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "Calcola il volume del materiale in $\\text{cm}^3$. {@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calcola il volume del cilindro pieno di raggio ${@0}\\,\\text{cm}$ in $\\text{cm}^3$. {@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "Calcola il volume della semisfera in $\\text{m}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "Calcola il volume in $\\text{cm}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "Calcola il volume in $\\text{cm}^3$.{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "Calcola il volume del cilindro in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "Calcola il volume del cilindro in $\\text{m}^3$. {@0}",
  "Vypočítaj obsah $S$.": "Calcola l'area $S$.",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "Calcola l'area di base $S_p$ in $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "Calcola l'area della sezione in $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "Calcola l'area in $\\text{cm}^2$.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcola l'area della figura delimitata dalla parabola $y=x^2$ e dalla retta $y={@0}$. Scrivi il risultato come frazione o numero intero.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calcola l'area della figura delimitata dalla parabola $y={@0}-x^2$ e dall'asse $x$. Scrivi il risultato come frazione o numero intero.",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "Calcola l'area della parte di piano determinata dal sistema di disequazioni $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.",
  "Vypočítaj polomer gule v cm.": "Calcola il raggio della sfera in cm.",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "Calcola il raggio della sezione $\\rho$ in cm.",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "Calcola la superficie della piramide in $\\text{cm}^2$.",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "Calcola la superficie in $\\text{cm}^2$. {@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "Calcola la media, poi la media dei quadrati degli scarti da essa. La deviazione standard è la radice della varianza.",
  "Vypočítaj priemernú známku. {@0}": "Calcola il voto medio. {@0}",
  "Vypočítaj rozptyl $D(X)$.": "Calcola la varianza $D(X)$.",
  "Vypočítaj rozptyl $s^2$. {@0}": "Calcola la varianza $s^2$. {@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "Calcola il prodotto scalare dei vettori direttori $\\vec{{@0}}\\cdot\\vec{{@1}}$ (cubo di spigolo $1$).",
  "Vypočítaj smernicu $k=f'({@0})$.": "Calcola il coefficiente angolare $k=f'({@0})$.",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "Calcola la deviazione standard $s$. {@0}",
  "Vypočítaj stranu $s$ v cm.": "Calcola l'apotema $s$ in cm.",
  "Vypočítaj stranu kužeľa $s$ v cm.": "Calcola l'apotema del cono $s$ in cm.",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "Calcola il valore atteso $E(X)$ (frazione o numero decimale con almeno 2 cifre).",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "Calcola la somma $R^2+Rr+r^2$.",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "Calcola la somma $a_1^2+a_1a_2+a_2^2$.",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "Calcola la somma dei quadrati degli scarti dalla media.",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcola l'angolo tra la retta e il piano in gradi. Arrotonda il risultato ai decimi di grado.",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calcola l'angolo tra le rette in gradi. Arrotonda il risultato ai decimi di grado.",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "Calcola la distanza del punto ${@0}$ dal piano in cm. {@1}",
  "Vypočítaj výšku $v_c$. {@0}": "Calcola l'altezza $v_c$. {@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "Calcola il valore {@0} della funzione $f(x)={@1}$ nell'intervallo $\\langle {@2}; {@3}\\rangle$.",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "Calcola {@0} della serie ${@1}$. {@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "Calcola {@0} in $\\text{cm}^2$. {@1}",
  "Vypočítaj {@0}. {@1}": "Calcola {@0}. {@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "Hai calcolato $f\\!\\left({@0}\\right)$. Il valore $f^{-1}(c)$ è però il numero $x$ per cui $f(x)=c$.",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "Riempi le posizioni una dopo l'altra e usa il principio del prodotto. La prima cifra non deve essere zero; con una condizione di divisibilità inizia dall'ultima cifra e dividi i casi.",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "Risolvi ciascuna disequazione separatamente (attenzione alla divisione per un numero negativo) e fai l'intersezione degli intervalli.",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "Risolvi l'equazione $({@0})^2{@1}{@2}=0$. Scrivi tutte le soluzioni separate da un punto e virgola (una frazione ad es. come 1/2).",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Risolvi l'equazione $\\log_2({@0})+\\log_2({@1})={@2}$. Scrivi tutte le soluzioni separate da un punto e virgola.",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "Risolvi l'equazione ${@0}$ per {@1}. Scrivi tutte le soluzioni in gradi separate da un punto e virgola (ad es. 30; 150).",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "Risolvi l'equazione ${@0}$ per {@1}. Scrivi tutte le soluzioni in gradi separate da un punto e virgola.",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "Risolvi l'equazione ${@0}={@1}$. {@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "Risolvi l'equazione. Quanti vertici ha il poligono?",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "Risolvi l'equazione. Quante persone c'erano all'incontro?",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "Risolvi il sistema di equazioni $x+y={@0}$, $x\\cdot y={@1}$. Scrivi tutti i possibili valori di $x$ separati da un punto e virgola.",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Risolvi in $\\mathbb{R}$ l'equazione ${@0}^{x}{@1}{@2}=0$. Scrivi tutte le soluzioni separate da un punto e virgola.",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "Sfrutta $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: moltiplica e dividi l'espressione in modo da ottenere al denominatore lo stesso argomento del seno.",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "Usa le relazioni di Viète: il prodotto delle radici è il termine noto, la somma delle radici è $-p$. Oppure sostituisci la radice nota nell'equazione.",
  "Vzdialenosť h od nuly": "Distanza h da zero",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "La formula $\\frac{\\sin t}{t}\\to 1$ vale solo quando al denominatore c'è esattamente l'argomento del seno, cioè ${@0}x$. Prima trasforma l'espressione.",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "La scelta dei ragazzi e quella delle ragazze non si escludono a vicenda, si combinano. Usa il principio del prodotto, non della somma.",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "L'espressione contiene solo $x^2$, quindi $f(-x)=f(x)$.",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "Un prodotto è difettoso con probabilità ${@0}$, indipendentemente dagli altri. Scegliamo a caso {@1} {@2}; $X$ è il numero di prodotti difettosi.",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "Il settore ha angolo al centro $\\frac{n_i}{n}\\cdot 360^\\circ$.",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "I risultati dell'esperimento sono coppie di palline (combinazioni). Conta tutte quelle possibili e quelle favorevoli; con «almeno una» è più semplice l'evento contrario.",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "Sostituisci il risultato nella funzione esterna: ${@0}({@1})$.",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "Il risultato è una coppia ordinata (primo dado, secondo dado), in tutto sono 36. Conta le coppie favorevoli.",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Arrotonda il risultato a 2 cifre decimali.",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "Arrotonda il risultato a 4 cifre decimali.",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "Tutti gli spigoli di un cubo aumentano del ${@0}\\,\\%$. Di che percentuale aumenta {@1}? {@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "Tutte le terne sono $\\binom{{@0}}{3}={@1}$. L'evento contrario, cioè che vengano scelti solo ragazzi, ha $\\binom{{@2}}{3}={@3}$ possibilità. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "Tutte le scelte di due palline sono $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "Tutti i risultati sono $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "Da $\\frac{n(n-3)}{2}={@0}$ si ha $n^2-3n-{@1}=0$ e la radice positiva $n={@2}$.",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "Con il teorema di Pitagora calcola la ragione $d$.",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "Dalla relazione di Viète $x_1x_2={@0}$ si ha $x_2=\\frac{{@1}}{{@2}}={@3}$. Dalla relazione $x_1+x_2=-p$ si ha $p=-({@4}{@5})={@6}$. Verifica per sostituzione: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "Da una coordinata calcola il parametro $t$ e verifica se lo stesso $t$ soddisfa anche le altre coordinate.",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "Dall'equazione lineare esprimi $y$ e sostituiscilo nell'altra. Ottieni un'equazione di secondo grado in $x$.",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "Dalla condizione $D=0$ esprimi $p^2$. Quanto vale $p^2$?",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "Dalla superficie $S=4\\pi r^2$ calcola il raggio e sostituiscilo nella formula del volume $V=\\frac{4}{3}\\pi r^3$.",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "Dalla prima equazione $y={@0}$. Sostituiamo: $x({@1})={@2} \\Rightarrow {@3}=0$, radici $x_1={@4}$, $x_2={@5}$. Le soluzioni del sistema sono $[{@6}; {@7}]$ e $[{@8}; {@9}]$, quindi $x$ è ${@10}$ oppure ${@11}$.",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "Dall'equazione $\\frac{n(n-1)}{2}={@0}$ esprimi il prodotto $n(n-1)$. Quanto vale?",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "Dall'equazione $\\frac{n(n-3)}{2}={@0}$ esprimi il prodotto $n(n-3)$. Quanto vale?",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "Dall'equazione ${@0}={@1}$ determina le ascisse dei punti in comune.",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "Dall'equazione della circonferenza trova il centro e il raggio, poi calcola la distanza del centro dalla retta e confrontala con il raggio.",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "Dall'equazione della retta esprimi $y$, sostituiscilo nell'equazione della circonferenza e risolvi l'equazione di secondo grado in $x$.",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "Dall'equazione della retta esprimiamo $y={@0}$ e lo sostituiamo nell'equazione della circonferenza. Dopo le trasformazioni otteniamo ${@1}=0$ con radici $x_1={@2}$, $x_2={@3}$. I punti di intersezione sono $[{@4}; {@5}]$ e $[{@6}; {@7}]$.",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "Dalle equazioni ${@0}^{x}=t$ determina tutte le soluzioni $x$ (ricorda che ${@1}^{x}&gt;0$).",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "Hai dimenticato di dividere per il modulo del vettore normale $|\\vec n|=\\sqrt{{@0}}$.",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "Hai dimenticato il coefficiente binomiale $\\binom{{@0}}{{@1}}$: le prove riuscite possono essere distribuite tra tutte le prove in modi diversi.",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "Hai dimenticato il termine $u'v$: deriva anche la funzione lineare nella parentesi.",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Hai dimenticato di moltiplicare per la derivata della funzione interna: $(\\sin kx)'=k\\cos kx$ e $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "Hai dimenticato di elevare al quadrato il denominatore: nella formula della derivata del quoziente al denominatore c'è $v^2$.",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "Hai dimenticato di moltiplicare per la derivata della funzione interna: $({@0})'={@1}$.",
  "Zadaj všetky hodnoty $p$.": "Scrivi tutti i valori di $p$.",
  "Zadaj všetky možné hodnoty $x$.": "Scrivi tutti i possibili valori di $x$.",
  "Zadaj všetky riešenia rovnice.": "Scrivi tutte le soluzioni dell'equazione.",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "Hai contato anche i «numeri» che iniziano con lo zero. In prima posizione lo zero non può esserci.",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "Scrivi ${@0}^{x}$ come $({@1}^{x})^2$ e introduci la sostituzione $t={@2}^{x}$. Non dimenticare che $t$ deve essere positivo.",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "Scrivi il denominatore come $(\\sqrt{x})^2-a^2$ e scomponilo secondo la formula $A^2-B^2=(A-B)(A+B)$.",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "Scrivi la condizione tramite l'evento contrario $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ e risolvila con i logaritmi.",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "Scrivi la somma dei primi $n$ termini della progressione aritmetica e risolvi la disequazione $s_n\\ge$ numero richiesto. Cerchi il più piccolo $n$ naturale.",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "Introduci la sostituzione $t={@0}$, risolvi l'equazione di secondo grado e poi torna a $x$ tramite la definizione di logaritmo.",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "Deriva la potenza esterna (lascia stare la parte interna) e moltiplica per la derivata della funzione interna.",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "Stabilisci il segno di $f'$ a sinistra e a destra del punto.",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "Stabilisci il segno del denominatore per $x$ appena a destra o a sinistra del punto dato e combinalo con il segno del numeratore.",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "Stabilisci quali punti del cubo stanno nei piani. Tre punti possono determinare lo stesso piano anche se sono vertici diversi.",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "Hai trovato solo l'esponente ${@0}$. Da esso esprimi ancora $x$.",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "Prendi il logaritmo di entrambi i membri ed esprimi $x$. {@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "Interesse composto: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Il saldo del conto forma una progressione geometrica di ragione ${@6}$.",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "Da un cartone quadrato di lato ${@0}\\,\\text{cm}$ ritagliamo negli angoli quadrati uguali e ripieghiamo il resto formando una scatola aperta. {@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "Rimane il quoziente dei coefficienti direttivi: $\\frac{{@0}}{{@1}}{@2}$.",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "Imposta la disequazione $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ e risolvila con i logaritmi. Arrotonda il risultato per eccesso.",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "Scrivi l'equazione del piano (il vettore normale è perpendicolare a due vettori del piano) e usa la formula della distanza di un punto da un piano.",
  "Zrezaný kužeľ": "Tronco di cono",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "Un tronco di cono circolare retto ha i raggi di base $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ e l'altezza $v={@2}\\,\\text{cm}$. Calcolane {@3}. {@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "L'asintoto verticale è nello zero del denominatore. L'asintoto orizzontale lo dà il limite per $x\\to\\infty$: il quoziente dei coefficienti di $x$.",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "L'asintoto verticale è nello zero del denominatore: risolvi l'equazione ${@0}=0$. Attenzione al segno.",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "Scegliamo $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "Scegliamo il cubo di spigolo $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ e i punti $E, F, G, H$ sopra di essi con coordinata $z=1$.",
  "Základ a": "Base a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "Conta chi ha quale carica, si tratta di disposizioni di classe 3 di {@0} elementi: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "Scambiando $x$ con $-x$ gli addendi si scambiano soltanto: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.",
  "ani sa cifry nesmú opakovať": "e le cifre non si devono ripetere",
  "aspoň jeden reálny koreň": "almeno una radice reale",
  "aspoň jedna guľa je biela": "almeno una pallina sia bianca",
  "auto": "auto",
  "bicykel": "bicicletta",
  "biele": "bianche",
  "bielych": "bianche",
  "deliteľných piatimi": "divisibili per cinque",
  "dievčat": "ragazze",
  "dievčatá": "ragazze",
  "do známky {@0} je to {@1}": "fino al voto {@0} sono {@1}",
  "dotyčnica (jeden spoločný bod)": "tangente (un punto in comune)",
  "druh dopravy do práce": "mezzo di trasporto per andare al lavoro",
  "druhú": "seconda",
  "dva rôzne reálne korene": "due radici reali distinte",
  "dĺžku prepony v cm": "la lunghezza dell'ipotenusa in cm",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">per h → 0 il valore tende a 1</span>",
  "farba očí žiaka": "colore degli occhi di un alunno",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0, la funzione decresce",
  "hmotnosť balíka": "peso di un pacco",
  "jeden chlapec": "un ragazzo",
  "jedna guľa je biela a jedna čierna": "una pallina sia bianca e una nera",
  "jeho objem v $\\text{cm}^3$": "il suo volume in $\\text{cm}^3$",
  "jeho obsah v $\\text{cm}^2$": "la sua area in $\\text{cm}^2$",
  "jeho povrch v $\\text{cm}^2$": "la sua superficie in $\\text{cm}^2$",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "che finiscono con la cifra {@0}: {@1}",
  "krajina, z ktorej prišiel turista": "paese da cui è arrivato un turista",
  "kvalitatívny": "qualitativo",
  "kvantitatívny diskrétny": "quantitativo discreto",
  "kvantitatívny spojitý": "quantitativo continuo",
  "leží v rovine": "sta nel piano",
  "lokálne maximum": "massimo locale",
  "lokálne minimum": "minimo locale",
  "max": "max",
  "medián": "la mediana",
  "mimobežné": "sghembe",
  "možností": "possibilità",
  "má sústava nekonečne veľa riešení": "il sistema ha infinite soluzioni",
  "mínus": "meno",
  "môžu opakovať": "si possono ripetere",
  "neleží v rovine": "non sta nel piano",
  "nepárne, medián je {@0}. hodnota": "dispari, la mediana è il {@0}° valore",
  "nepárnych": "dispari",
  "nesečnica (žiadny spoločný bod)": "esterna (nessun punto in comune)",
  "nesmú opakovať": "non si possono ripetere",
  "obe gule sú biele": "entrambe le palline siano bianche",
  "objem": "il volume",
  "objem hranola v $\\text{cm}^3$": "il volume del prisma in $\\text{cm}^3$",
  "objem mení $k^3$-krát": "il volume cambia di $k^3$ volte",
  "objem v $\\text{cm}^3$": "il volume in $\\text{cm}^3$",
  "obsah jeho plášťa v $\\text{cm}^2$": "l'area della sua superficie laterale in $\\text{cm}^2$",
  "obsah plášťa": "l'area della superficie laterale",
  "obsah rezu v $\\text{cm}^2$. {@0}": "l'area della sezione in $\\text{cm}^2$. {@0}",
  "obľúbený šport": "sport preferito",
  "opäť ľubovoľnú": "di nuovo una qualsiasi",
  "p; x₂": "p; x₂",
  "pešo": "a piedi",
  "plus": "più",
  "polomer rezu v cm.": "il raggio della sezione in cm.",
  "povrch": "la superficie",
  "povrch hranola v $\\text{cm}^2$": "la superficie del prisma in $\\text{cm}^2$",
  "povrch mení $k^2$-krát": "la superficie cambia di $k^2$ volte",
  "povrch v $\\text{cm}^2$": "la superficie in $\\text{cm}^2$",
  "počet": "numero",
  "počet gólov v zápase": "numero di gol in una partita",
  "počet strán knihy": "numero di pagine di un libro",
  "počet súrodencov": "numero di fratelli e sorelle",
  "počet vymeškaných hodín za polrok": "numero di ore di assenza in un semestre",
  "počet áut v domácnosti": "numero di automobili in una famiglia",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "per $t={@0}$ una di esse non vale, il punto <strong>non sta</strong> sulla retta.",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "per $t={@0}$ valgono entrambe, il punto <strong>sta</strong> sulla retta.",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "la retta è parallela al piano e non ha punti in comune con esso",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "la retta è incidente al piano (lo interseca in un punto)",
  "priamka leží v rovine": "la retta sta nel piano",
  "práve jeden (dvojnásobný) koreň": "esattamente una radice (doppia)",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "pari, la mediana è la media del {@0}° e del {@1}° valore",
  "párnych": "pari",
  "roviny sú rovnobežné rôzne": "i piani sono paralleli distinti",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "i piani sono incidenti (si intersecano in una retta)",
  "roviny sú totožné": "i piani sono coincidenti",
  "rovnobežné": "parallele",
  "rozptyl": "la varianza",
  "sedadiel": "posti",
  "sedadlo": "posto",
  "sedadlá": "posti",
  "sečnica (2 spoločné body)": "secante (2 punti in comune)",
  "sečnica (dva spoločné body)": "secante (due punti in comune)",
  "smerodajnú odchýlku": "la deviazione standard",
  "spotreba auta na 100 km": "consumo di un'auto per 100 km",
  "stenovú výšku $v_s$ v cm": "l'apotema $v_s$ in cm",
  "strojnásobí": "triplica",
  "sústava nemá riešenie": "il sistema non ha soluzione",
  "súčet je aspoň {@0}": "la somma sia almeno {@0}",
  "súčet je {@0}": "la somma sia {@0}",
  "súčin je párny": "il prodotto sia pari",
  "teplota vzduchu na poludnie": "temperatura dell'aria a mezzogiorno",
  "terč nezasiahne ani jeden z nich": "nessuno dei due colpisca il bersaglio",
  "terč zasiahne aspoň jeden z nich": "almeno uno dei due colpisca il bersaglio",
  "terč zasiahne práve jeden z nich": "esattamente uno dei due colpisca il bersaglio",
  "tretiu": "terza",
  "v rovine leží, takže v nej leží celá priamka": "sta nel piano, quindi in esso sta tutta la retta",
  "v rovine neleží, preto nemajú spoločný bod": "non sta nel piano, quindi non hanno punti in comune",
  "variačné rozpätie": "il campo di variazione",
  "vlak": "treno",
  "vpravo": "a destra",
  "výrobkov": "prodotti",
  "výrobky": "prodotti",
  "výška žiaka": "altezza di un alunno",
  "vľavo": "a sinistra",
  "vždy niektorú zo zvyšných": "ogni volta una delle rimanenti",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · distanza del centro d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "raddoppia",
  "značka mobilného telefónu": "marca di un telefono cellulare",
  "známka": "voto",
  "znížil": "è scesa",
  "zvýšil": "è salita",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0} Il punto $K$ è il punto medio dello spigolo ${@1}$. Calcola la distanza tra i punti ${@2}$ e $K$ in cm. {@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0} La funzione è <strong>{@1}</strong>.",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0} I vettori normali sono ${@1}$ e ${@2}$. {@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0} Il vettore normale del piano ${@1}$ è $\\vec{n}={@2}$ (perpendicolare sia a $\\vec{{@3}{@4}}$ sia a $\\vec{{@5}{@6}}$), il vettore direttore della retta $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0} Allora ${@1}{@2}$ e $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0} Il piano ${@1}$ ha vettore normale $\\vec{n}={@2}$ ed equazione ${@3}=0$. Per ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0} Il vettore direttore della retta è $\\vec{u}=\\vec{{@1}}={@2}$, il vettore $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0} La scrittura corretta è ${@1}$, $k\\in\\mathbb{Z}$.",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0} Sostituzione $t={@1} x$: ${@2}=0$, radici $t_1={@3}$, $t_2={@4}$. {@5} {@6}. In tutto $K=\\{{@7}\\}$.",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0} Calcola $P(X={@1})$. {@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0} Calcola $P(X\\ge 1)$. {@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0} Calcola la probabilità che $X\\le 1$. {@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0} Calcola il valore atteso $E(X)$ e la varianza $D(X)$. Scrivili in quest'ordine separati da un punto e virgola (come frazioni o numeri decimali arrotondati ad almeno 2 cifre).",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0} Calcola la distanza del vertice ${@1}$ dalla retta ${@2}$ in cm. {@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0} Calcola la distanza del vertice ${@1}$ dal piano ${@2}$ in cm. {@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0} Arrotonda il risultato ai decimi.",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0} Il carattere è <strong>{@1}</strong>.",
  "{@0} chlapci": "{@0} ragazzi",
  "{@0} dievčatá": "{@0} ragazze",
  "{@0} usporiadaného súboru. Aký je medián?": "{@0} della serie ordinata. Qual è la mediana?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0} mostra i voti di una verifica in una classe:{@1}Qual è la mediana dei voti?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0} mostra i voti di una verifica in una classe:{@1}Calcola il voto medio. {@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}Introduci $t={@1} x$, risolvi l'equazione di secondo grado e tieni solo le radici dell'intervallo $\\langle -1; 1\\rangle$.",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "Prima ordina i dati per grandezza. Con un numero pari di dati la mediana è la media dei due valori centrali.",
  "Útvar ohraničený parabolou a priamkou": "Figura delimitata da una parabola e da una retta",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "Scomponi il numeratore ${@0}$ nel prodotto ${@1}\\cdot(x+c)$. Qual è il numero $c$?",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "Il numeratore della derivata ${@0}({@1})-({@2})\\cdot {@3}$ dopo la semplificazione è una costante. Quale?",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "Il numeratore è una costante non nulla e il denominatore tende a zero, quindi la frazione cresce in valore assoluto oltre ogni limite.",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "Il numeratore ha grado minore del denominatore, quindi al numeratore rimane solo zero e il limite è $0$.",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "Il numeratore cambia segno, il denominatore no: $f(-x)=-f(x)$.",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "Dividiamo il numeratore e il denominatore per la potenza massima del denominatore, cioè ${@0}$. Tutti i termini della forma $\\frac{c}{x^k}$ tendono a zero. {@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "Il termine $uv'$ è $({@0})\\cdot\\frac{1}{x}$. Quanto vale quindi $f'(1)$?",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "Il numero $f({@0})$ non è il termine noto $q$. Sostituisci in $y=f(x_0)+f'(x_0)(x-x_0)$ e sviluppa la parentesi.",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "Il numero dell'asintoto orizzontale $y=\\dots$ (limite per $x\\to\\infty$)?",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "Il numero dell'asintoto verticale $x=\\dots$ (zero del denominatore)?",
  "čas behu na 100 m": "tempo di corsa sui 100 m",
  "čierne": "nere",
  "čiernych": "nere",
  "ľubovoľnú cifru": "una cifra qualsiasi",
  "ľubovoľnú cifru okrem nuly": "una cifra qualsiasi tranne lo zero",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "Gli alunni hanno risposto a come vanno a scuola:{@0}{@1} Arrotonda il risultato ai decimi.",
  "Žiadny z nich neleží vo vnútri intervalu.": "Nessuno di essi sta all'interno dell'intervallo.",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "Un alunno in un test con {@0} domande risponde a caso; ogni domanda ha quattro possibilità e solo una è corretta. La variabile casuale $X$ è il numero di risposte corrette.",
  "žiadny reálny koreň": "nessuna radice reale",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "«Al massimo uno» comprende anche la possibilità che non si verifichi nessun successo. Aggiungi $P(X=0)$.",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "«Al massimo uno» significa 0 oppure 1 successo. Somma queste due probabilità.",
  "Grafico della funzione f": "Grafico della funzione f",
  "Due rette parallele tagliate da una trasversale": "Due rette parallele tagliate da una trasversale",
  "voto": "voto",
  "numero": "numero",
  "Istogramma dei voti": "Istogramma dei voti"
 }
});
