/* Italiano: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/content/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "cisla": {
   "title": "Espressioni numeriche e ordine delle operazioni",
   "summary": "Numeri, parentesi e l'ordine corretto dei calcoli.",
   "theory": [
    "<p>I numeri naturali sono $1, 2, 3, 4, \\dots$. Il loro insieme si indica con $\\mathbb{N}$. Se aggiungiamo lo zero, otteniamo i numeri interi non negativi; aggiungendo i numeri negativi si forma l'insieme dei numeri interi $\\mathbb{Z}$.</p>",
    {
     "fig": "numberline",
     "caption": "La retta dei numeri: i punti blu sono i numeri naturali, a sinistra dello zero si trovano i numeri interi negativi."
    },
    "<p><strong>Ordine delle operazioni:</strong></p>\n       <ol><li>espressioni fra parentesi,</li><li>potenze e radici,</li>\n       <li>moltiplicazioni e divisioni da sinistra a destra,</li><li>addizioni e sottrazioni da sinistra a destra.</li></ol>"
   ],
   "examples": [
    {
     "task": "Calcola $2 + 3\\cdot 4 - 6 : 2$.",
     "steps": [
      "Prima moltiplicazione e divisione: $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "L'espressione diventa $2 + 12 - 3$.",
      "Da sinistra a destra: $2 + 12 = 14$, poi $14 - 3 = 11$.",
      "<strong>Risultato: 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "Le frazioni e le operazioni con le frazioni",
   "summary": "Semplificazione, ampliamento e calcoli con le frazioni.",
   "theory": [
    "<p>La frazione $\\frac{a}{b}$ ha numeratore $a$ e denominatore $b \\neq 0$. Il valore della frazione non cambia se moltiplichiamo numeratore e denominatore per lo stesso numero diverso da zero (<strong>ampliamento</strong>). Il procedimento inverso è la <strong>semplificazione</strong>.</p>",
    {
     "fig": "fractions",
     "caption": "L'ampliamento non cambia il valore: $\\frac{1}{2}=\\frac{3}{6}$ e $\\frac{2}{3}=\\frac{4}{6}$ hanno parti colorate della stessa lunghezza."
    },
    "<p>L'<strong>addizione e la sottrazione</strong> richiedono un denominatore comune: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>Moltiplicazione</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. Nella <strong>divisione</strong> moltiplichiamo per l'inverso: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $\\frac{1}{2}+\\frac{2}{3}$.",
     "steps": [
      "Il denominatore comune è $2\\cdot 3 = 6$.",
      "$\\frac{1}{2}=\\frac{3}{6}$ e $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>Risultato: $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "Percentuali e calcolo percentuale",
   "summary": "Calcolo delle percentuali, aumento e diminuzione percentuale.",
   "theory": [
    "<p>$p\\,\\%$ significa $\\frac{p}{100}$. Il $p\\,\\%$ del numero $x$ è $\\frac{p}{100}\\cdot x$.</p>",
    {
     "fig": "percent",
     "caption": "L'intero è formato da 100 parti. Il $25\\,\\%$ significa 25 di esse."
    },
    "<p>Un <strong>aumento</strong> del $p\\,\\%$ è una moltiplicazione per $1+\\frac{p}{100}$, una <strong>diminuzione</strong> è una moltiplicazione per $1-\\frac{p}{100}$.</p>",
    "<p>Il numero decimale $0{,}25$ è la frazione $\\frac{1}{4}$ e allo stesso tempo il $25\\,\\%$. In italiano la parte decimale si separa con la virgola.</p>"
   ],
   "examples": [
    {
     "task": "Il prezzo di un articolo è $80\\,€$. Quanto costa dopo un aumento del $15\\,\\%$?",
     "steps": [
      "Il moltiplicatore è $1+\\frac{15}{100}=1{,}15$.",
      "$80\\cdot 1{,}15 = 92$.",
      "<strong>Risultato: 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "Gli insiemi e le operazioni con gli insiemi",
   "summary": "Elementi, unione, intersezione, differenza e numero di elementi.",
   "theory": [
    "<p>Un insieme è una raccolta di elementi distinguibili fra loro. La scrittura $a\\in A$ significa che l'elemento $a$ appartiene all'insieme $A$. L'insieme vuoto è $\\varnothing$.</p>",
    "<p>Operazioni: <strong>unione</strong> $A\\cup B$ (gli elementi di almeno uno dei due insiemi), <strong>intersezione</strong> $A\\cap B$ (gli elementi di entrambi gli insiemi), <strong>differenza</strong> $A\\setminus B$ (gli elementi di $A$ che non stanno in $B$).</p>",
    {
     "fig": "venn",
     "caption": "Il diagramma di Venn per $A=\\{1,2,3,4\\}$ e $B=\\{3,4,5\\}$. L'intersezione sta nella parte in cui i cerchi si sovrappongono."
    },
    "<p>Il numero di elementi si indica con $|A|$. Vale $|A\\cup B| = |A|+|B|-|A\\cap B|$: gli elementi dell'intersezione li abbiamo contati due volte, quindi li sottraiamo.</p>"
   ],
   "examples": [
    {
     "task": "Sono dati $A=\\{1,2,3,4\\}$ e $B=\\{3,4,5\\}$. Trova $A\\cup B$, $A\\cap B$ e $A\\setminus B$.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "Perimetro e area delle figure piane",
   "summary": "Perimetro e area del rettangolo, del triangolo e del cerchio.",
   "theory": [
    "<p>Il rettangolo con i lati $a$ e $b$ ha perimetro $o=2(a+b)$ e area $S=a\\cdot b$.</p>",
    "<p>Il triangolo con base $z$ e altezza $v$ relativa a questa base ha area $S=\\frac{z\\cdot v}{2}$.</p>",
    "<p>Il cerchio con raggio $r$ ha circonferenza $o=2\\pi r$ e area $S=\\pi r^2$, dove $\\pi\\approx 3{,}14159$.</p>",
    {
     "fig": "shapes",
     "caption": "I lati $a$, $b$ del rettangolo, la base $z$ e l'altezza $v$ del triangolo, il raggio $r$ del cerchio."
    }
   ],
   "examples": [
    {
     "task": "Un cerchio ha il raggio $r=3\\,\\text{cm}$. Calcola la sua area.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28{,}27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "Il teorema di Pitagora",
   "summary": "Calcolo dei lati in un triangolo rettangolo.",
   "theory": [
    "<p>In un triangolo rettangolo con i cateti $a$, $b$ e l'ipotenusa $c$ vale $a^2+b^2=c^2$. L'ipotenusa sta di fronte all'angolo retto ed è sempre il lato più lungo.</p>",
    {
     "fig": "pythagoras",
     "caption": "Il triangolo con i lati $3, 4, 5$: le aree dei quadrati costruiti sui cateti $9+16$ danno insieme l'area del quadrato costruito sull'ipotenusa $25$."
    },
    "<p>Terne pitagoriche intere ben note: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ e i loro multipli.</p>"
   ],
   "examples": [
    {
     "task": "I cateti sono lunghi $6$ e $8$. Quanto è lunga l'ipotenusa?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "Equazioni lineari",
   "summary": "Principi di equivalenza ed equazioni di primo grado.",
   "theory": [
    "<p>Le equazioni si risolvono con i <strong>principi di equivalenza</strong>: aggiungiamo o togliamo lo stesso numero a entrambi i membri, moltiplichiamo o dividiamo entrambi i membri per un numero diverso da zero.</p>",
    "<p>L'equazione $ax+b=c$ con $a\\neq 0$ si risolve così: $ax=c-b$, quindi $x=\\frac{c-b}{a}$.</p>",
    "<p>La verifica si fa sostituendo il risultato nell'equazione iniziale.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi $3x+5=20$.",
     "steps": [
      "Togliamo $5$: $3x=15$.",
      "Dividiamo per $3$: $x=5$.",
      "Verifica: $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "Equazioni di secondo grado",
   "summary": "Discriminante, formula risolutiva e relazioni fra radici e coefficienti.",
   "theory": [
    "<p>L'equazione di secondo grado $ax^2+bx+c=0$ ($a\\neq 0$) ha le soluzioni $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$, dove $D=b^2-4ac$ è il <strong>discriminante</strong>.</p>",
    "<p>Se $D&gt;0$, l'equazione ha due soluzioni reali distinte. Se $D=0$, ha due soluzioni coincidenti. Se $D&lt;0$, non ha soluzioni reali.</p>",
    {
     "fig": "parabola",
     "caption": "Il grafico di $y=x^2+px+q$ (quindi $b=p$, $c=q$). Le soluzioni sono le intersezioni della parabola con l'asse $x$. Cambia $p$ e $q$ e osserva il discriminante."
    },
    "<p><strong>Relazioni fra radici e coefficienti</strong> (formule di Viète, per $a=1$): $x_1+x_2=-b$ e $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi $x^2-5x+6=0$.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, quindi $x_1=3$, $x_2=2$.",
      "Controllo: $3+2=5$ e $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "Potenze e radici",
   "summary": "Le regole per il calcolo con potenze e radici.",
   "theory": [
    "<p>Per $a&gt;0$ e $m,n$ interi vale: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>Esponente negativo: $a^{-n}=\\frac{1}{a^n}$. Esponente zero: $a^0=1$ per $a\\neq 0$.</p>",
    "<p>La radice è l'operazione inversa della potenza: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. Vale $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>"
   ],
   "examples": [
    {
     "task": "Semplifica $\\frac{2^5\\cdot 2^{-2}}{2}$.",
     "steps": [
      "Numeratore: $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>Risultato: $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "Le funzioni goniometriche nel triangolo rettangolo",
   "summary": "Seno, coseno e tangente nel triangolo rettangolo.",
   "theory": [
    "<p>In un triangolo rettangolo con l'angolo acuto $\\alpha$: $\\sin\\alpha=\\frac{\\text{cateto opposto}}{\\text{ipotenusa}}$, $\\cos\\alpha=\\frac{\\text{cateto adiacente}}{\\text{ipotenusa}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "I nomi dei lati del triangolo rettangolo rispetto all'angolo $\\alpha$."
    },
    "<p>Relazione fondamentale: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "La circonferenza goniometrica: un suo punto ha coordinate $(\\cos\\alpha, \\sin\\alpha)$. Sposta l'angolo e osserva come cambiano i segni."
    },
    "<p>Valori per gli angoli notevoli:</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "Se $\\sin\\alpha=0{,}6$ e $\\alpha$ è un angolo acuto, calcola $\\cos\\alpha$.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0{,}36=0{,}64$.",
      "$\\cos\\alpha=\\sqrt{0{,}64}=0{,}8$ (angolo acuto, il coseno è positivo)."
     ]
    }
   ]
  },
  "matice": {
   "title": "Determinante e matrice inversa 2×2",
   "summary": "Notazione matriciale, determinante 2×2 e matrice inversa.",
   "theory": [
    "<p>Una matrice di tipo $m\\times n$ è una tabella di numeri con $m$ righe e $n$ colonne. L'elemento nella $i$-esima riga e nella $j$-esima colonna si indica con $a_{ij}$.</p>",
    "<p>Il determinante della matrice $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ è $\\det A=ad-bc$. Se $\\det A\\neq 0$, esiste la matrice inversa $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    {
     "fig": "parallelogram",
     "caption": "Le colonne della matrice $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ sono i vettori $u=(2,1)$ e $v=(3,4)$. Il valore assoluto del determinante è l'area del parallelogramma che formano: $|\\det|=5$."
    },
    "<p>Un sistema di equazioni lineari si può scrivere come $Ax=b$ e risolvere con la matrice inversa: $x=A^{-1}b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$.",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$."
     ]
    }
   ]
  },
  "sucin": {
   "title": "Il prodotto di matrici",
   "summary": "Come si moltiplicano le matrici e perché l'ordine conta.",
   "theory": [
    "<p>Il prodotto $C=AB$ esiste se il numero di colonne di $A$ è uguale al numero di righe di $B$. L'elemento nella $i$-esima riga e nella $j$-esima colonna è $c_{ij}=\\sum_k a_{ik}b_{kj}$: moltiplichiamo la riga della matrice $A$ per la colonna della matrice $B$ e sommiamo.</p>",
    {
     "fig": "matmul",
     "caption": "L'elemento $c_{11}$ si ottiene dalla 1ª riga di $A$ e dalla 1ª colonna di $B$: $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>Il prodotto di matrici <strong>non è commutativo</strong>: in generale $AB\\neq BA$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. Calcola $AB$.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>Risultato:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "La derivata di una funzione",
   "summary": "Variazione istantanea, regole di derivazione e retta tangente.",
   "theory": [
    "<p>La derivata $f'(x_0)$ è il limite $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, se esiste. Geometricamente è il coefficiente angolare della retta tangente al grafico di $f$ nel punto $x_0$.</p>",
    {
     "fig": "tangent",
     "caption": "Il grafico di $f(x)=x^3-2x$ e la tangente nel punto $x_0$. Il suo coefficiente angolare è $f'(x_0)=3x_0^2-2$. Dove la tangente è orizzontale, la derivata è nulla."
    },
    "<p>Regole: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$. Calcola $f'(2)$.",
     "steps": [
      "$f'(x)=3x^2-2$.",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$."
     ]
    }
   ]
  },
  "integraly": {
   "title": "Fondamenti di calcolo integrale",
   "summary": "Integrale indefinito e definito, formula di Newton-Leibniz.",
   "theory": [
    "<p>Una primitiva $F$ della funzione $f$ soddisfa $F'(x)=f(x)$. Integrale indefinito: $\\int f(x)\\,dx=F(x)+C$. Per $n\\neq -1$ vale $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>",
    "<p>L'integrale definito si calcola con la <strong>formula di Newton-Leibniz</strong>: $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Geometricamente è l'area della regione sotto il grafico di $f$ da $a$ a $b$ (per $f$ positiva).</p>",
    {
     "fig": "area",
     "caption": "L'area sotto il grafico di $f(x)=x^2$ da $0$ a $b$ è $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$."
    },
    "<p>Linearità: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $\\int_0^2 3x^2\\,dx$.",
     "steps": [
      "Primitiva: $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>Risultato: 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$. Quale elemento ha il prodotto $AB$ nella riga {@2} e nella colonna {@3}?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, quindi $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — scrivi il risultato come frazione nella forma $p/q$ (per es. 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$, quindi $b={@3}$.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$, quindi $c={@3}$.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$, quindi $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "Il $p\\,\\%$ del numero $x$ è $\\frac{p}{100}\\cdot x$.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$, quindi $\\frac{{@2}}{100}\\cdot {@3}={@4}$.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$, quindi $x={@4}$.",
  "25 štvorčekov zo 100": "25 quadratini su 100",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "Quale esponente avrà il risultato ${@0}^{\\square}$?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "Qual è il denominatore comune (il prodotto dei denominatori ${@0}\\cdot {@1}$)?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "Qual è la somma delle radici $x_1 + x_2$ (secondo le formule di Viète)?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "Qual è il prodotto delle radici $x_1 \\cdot x_2$?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "La derivata è $f'(x)=k\\,x^{{@0}}{@1}$. Qual è il coefficiente $k$?",
  "Determinant ako obsah rovnobežníka": "Il determinante come area del parallelogramma",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "Hai sostituito nella funzione di partenza $f$. Prima deriva la funzione e solo dopo sostituisci.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "Hai sostituito nella funzione di partenza. Prima trova la primitiva $F$ e sostituisci in essa.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "Hai sostituito solo l'estremo superiore. Da $F({@0})$ devi ancora sottrarre $F({@1})$.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "Hai sostituito il diametro ${@0}$. Nella formula $\\pi r^2$ il raggio è $r={@1}$.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "Secondo prodotto: quanto fa ${@0}\\cdot {@1}$?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "Hai solo sottratto le lunghezze. Il teorema di Pitagora vale per i quadrati: $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "Hai sommato gli esponenti. Nella potenza di una potenza gli esponenti si moltiplicano.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "Hai moltiplicato gli esponenti. Nel prodotto di potenze con la stessa base gli esponenti si sommano.",
  "Graf funkcie s dotyčnicou": "Grafico della funzione con la retta tangente",
  "Graf kvadratickej funkcie": "Grafico della funzione quadratica",
  "Horná hranica b": "Estremo superiore b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "Cerca due numeri il cui prodotto è $q$ e la cui somma è $-p$.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "L'identità vale per i quadrati: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, non $\\cos\\alpha = 1 - \\sin\\alpha$.",
  "Jednotková kružnica": "La circonferenza goniometrica",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "Hai sottratto il coefficiente {@0}. Davanti a $x$ c'è una moltiplicazione, quindi dividi entrambi i membri per {@1}.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "Le radici sono venute il doppio. Nella formula $x=\\frac{-p\\pm\\sqrt{D}}{2}$ non dimenticare di dividere per due.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "Quanto è l'$1\\,\\%$ del numero {@0}?",
  "Koľko je $F({@0}) - F({@1})$?": "Quanto fa $F({@0}) - F({@1})$?",
  "Koľko je $F({@0})$?": "Quanto fa $F({@0})$?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "Quanto vale $\\cos\\alpha$ (angolo acuto, radice positiva) con 3 cifre decimali?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "Quanto vale $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Scrivilo come frazione.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "Quanto fa $\\pi\\cdot {@0}$ (usa $\\pi\\approx 3{{@1}}14$)?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "Quanto vale $\\sin^2\\alpha$? Scrivilo come frazione (per es. 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "Quanto fa $a^2 = {@0}^2$?",
  "Koľko je $b = \\sqrt{{@0}}$?": "Quanto fa $b = \\sqrt{{@0}}$?",
  "Koľko je $b^2 = {@0} - {@1}$?": "Quanto fa $b^2 = {@0} - {@1}$?",
  "Koľko je $b^2 = {@0}^2$?": "Quanto fa $b^2 = {@0}^2$?",
  "Koľko je $c = \\sqrt{{@0}}$?": "Quanto fa $c = \\sqrt{{@0}}$?",
  "Koľko je $c^2 = {@0} + {@1}$?": "Quanto fa $c^2 = {@0} + {@1}$?",
  "Koľko je $c^2 = {@0}^2$?": "Quanto fa $c^2 = {@0}^2$?",
  "Koľko je $f'({@0})$?": "Quanto vale $f'({@0})$?",
  "Koľko je $r^2 = {@0}^2$?": "Quanto fa $r^2 = {@0}^2$?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "Quanto fa $z\\cdot v = {@0}\\cdot {@1}$?",
  "Koľko je ${@0} + {@1} - {@2}$?": "Quanto fa ${@0} + {@1} - {@2}$?",
  "Koľko je ${@0} - ({@1})$?": "Quanto fa ${@0} - ({@1})$?",
  "Koľko je ${@0} : {@1}$?": "Quanto fa ${@0} : {@1}$?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "Quanto è il ${@0}\\,\\%$ del numero ${@1}$?",
  "Koľko je ${@0}\\cdot {@1}$?": "Quanto fa ${@0}\\cdot {@1}$?",
  "Koľko je ${@0}^{{@1}}$?": "Quanto fa ${@0}^{{@1}}$?",
  "Koľko je $|A| + |B|$?": "Quanto fa $|A| + |B|$?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "Quanto è quindi il ${@0}\\,\\%$ del numero {@1}?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "Un cerchio ha raggio $r={@0}$. Calcola la sua area $S$ (usa $\\pi\\approx 3{{@1}}14$).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "Quali due numeri hanno somma {@0} e prodotto {@1}? Scrivili separati da un punto e virgola.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "Le matrici non si moltiplicano elemento per elemento nella stessa posizione. Moltiplica la riga della matrice $A$ per la colonna della matrice $B$ e somma i prodotti.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "Hai portato i denominatori a quello comune, ma non hai ampliato i numeratori. Moltiplica il numeratore per lo stesso numero del denominatore.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "L'insieme $A$ ha ${@0}$ elementi, l'insieme $B$ ha ${@1}$ elementi e la loro intersezione ha ${@2}$ elementi. Quanti elementi ha $A\\cup B$?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "Prima moltiplicazioni e divisioni: ${@0}\\cdot {@1} = {@2}$ e ${@3} : {@4} = {@5}$. Poi ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "Prima sottrai la costante da entrambi i membri, poi dividi per il coefficiente di $x$.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "Prima calcola moltiplicazioni e divisioni, solo dopo addizioni e sottrazioni.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "Hai moltiplicato gli elementi nelle colonne. Moltiplica lungo le diagonali: $a\\cdot d$ e $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "Un rettangolo ha i lati $a={@0}$ e $b={@1}$. Qual è la sua area $S$?",
  "Obdĺžnik, trojuholník a kruh": "Rettangolo, triangolo e cerchio",
  "Obsah kruhu je $\\pi r^2$.": "L'area del cerchio è $\\pi r^2$.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "L'area del rettangolo è il prodotto delle lunghezze di due lati consecutivi.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "L'area del triangolo è la metà del prodotto della base per l'altezza.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "Hai solo sommato i cateti. Il teorema di Pitagora vale per i quadrati: $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "L'angolo acuto $\\alpha$ soddisfa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Calcola $\\cos\\alpha$ (con 3 cifre decimali).",
  "Plocha pod grafom funkcie": "Area sotto il grafico di una funzione",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "Usa $(x^n)'=n\\,x^{n-1}$ e deriva ogni termine separatamente.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "Usa $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ e poi la formula di Newton-Leibniz.",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "Usa il teorema di Pitagora $c^2=a^2+b^2$.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "Usa l'identità $\\sin^2\\alpha+\\cos^2\\alpha=1$.",
  "Pozri si tabuľku hodnôt v teórii.": "Guarda la tabella dei valori nella teoria.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "Hai calcolato da sinistra a destra. Moltiplicazione e divisione hanno la precedenza su addizione e sottrazione.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "Un triangolo rettangolo ha i cateti $a={@0}$ e $b={@1}$. Quanto è lunga l'ipotenusa $c$?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "Un triangolo rettangolo ha l'ipotenusa $c={@0}$ e il cateto $a={@1}$. Quanto è lungo l'altro cateto $b$?",
  "Pravouhlý trojuholník s popisom strán": "Triangolo rettangolo con i nomi dei lati",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "Per una matrice $2\\times 2$ vale $\\det=ad-bc$.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "Per la funzione $f(x)={@0}x^{{@1}}{@2}$ calcola $f'({@3})$.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "Porta la costante a destra. Quanto fa ${@0}x$?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "Nel prodotto di potenze con la stessa base gli esponenti si sommano.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "Portando il numero {@0} dall'altra parte non hai cambiato il segno. Esegui la stessa operazione inversa su entrambi i membri.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "Nella potenza di una potenza gli esponenti si moltiplicano.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "La primitiva è $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, quindi $F({@3})-F({@4})={@5}$.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "La primitiva è $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Quanto fa $F({@3})$?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "Gli elementi dell'intersezione vengono contati due volte, quindi sottraili.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "Hai sottratto due volte gli elementi dell'intersezione. Fanno parte dell'unione: sottraili una volta sola.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "Hai contato due volte gli elementi dell'intersezione: sono sia in $A$ sia in $B$. Sottraili una volta.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "In questa somma gli elementi dell'intersezione compaiono due volte. Quanto fa ${@0} - {@1}$?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "Primo prodotto: quanto fa ${@0}\\cdot {@1}$?",
  "Pytagorova veta: štvorce nad stranami": "Teorema di Pitagora: i quadrati costruiti sui lati",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Amplia la seconda frazione al denominatore {@0}. Quale sarà il suo numeratore?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Amplia la prima frazione al denominatore {@0}. Quale sarà il suo numeratore?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "Il denominatore comune è ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "Hai sommato i lati. L'area del rettangolo si ottiene moltiplicandoli.",
  "Súčet: koľko je ${@0} + {@1}$?": "Somma: quanto fa ${@0} + {@1}$?",
  "Súčin matíc: riadok krát stĺpec": "Prodotto di matrici: riga per colonna",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "Prodotto sulla diagonale principale: quanto fa $({@0})\\cdot({@1})$?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "Prodotto sulla diagonale secondaria: quanto fa $({@0})\\cdot({@1})$?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "Hai sommato i prodotti. Il determinante è una differenza: il prodotto sulla diagonale principale meno il prodotto sulla diagonale secondaria.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "Somma i numeratori e scrivi il risultato come frazione $p/q$.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "Hai sommato sia i numeratori sia i denominatori. Le frazioni si sommano solo dopo averle portate al denominatore comune: il denominatore non si somma.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "Questo è $\\cos^2\\alpha$. Alla fine estrai ancora la radice quadrata.",
  "To je $b^2$. Na konci ešte odmocni.": "Questo è $b^2$. Alla fine estrai ancora la radice quadrata.",
  "To je $c^2$. Na konci ešte odmocni.": "Questo è $c^2$. Alla fine estrai ancora la radice quadrata.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "Questo è il valore del {@0} dell'angolo di ${@1}^\\circ$. Al crescere dell'angolo il seno cresce da 0 a 1, il coseno diminuisce da 1 a 0.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "Questo è il perimetro (la somma di tutti i lati). L'area è il prodotto di due lati consecutivi.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "Questa è la lunghezza della circonferenza $2\\pi r$. L'area è $\\pi r^2$.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "Questo è ciò che manca al 100 %. Ti chiediamo proprio il ${@0}\\,\\%$ del numero {@1}.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "Il triangolo è la metà del rettangolo. Quanto fa ${@0} : 2$?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "Un triangolo ha base $z={@0}$ e altezza $v={@1}$. Qual è la sua area $S$?",
  "Uhol α (°)": "Angolo α (°)",
  "Vennov diagram dvoch množín": "Diagramma di Venn di due insiemi",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "Prendi la $i$-esima riga della matrice $A$ e la $j$-esima colonna della matrice $B$ e moltiplicale elemento per elemento.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "Formule di Viète: $x_1+x_2={@0}$ e $x_1\\cdot x_2={@1}$. Le radici sono $x_1={@2}$ e $x_2={@3}$.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "Dividi entrambi i membri per {@0}. Quanto vale $x$?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "Calcola $({@0}^{{@1}})^{{@2}}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "Calcola $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "Calcola ${@0}\\,{@1}^\\circ$ come numero decimale (con 3 cifre decimali).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "Calcola ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "Calcola il determinante $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "Risolvi l'equazione $x^2{@0}{@1} = 0$. Scrivi entrambe le radici separate da un punto e virgola (per es. 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "Risolvi l'equazione ${@0}x{@1} = {@2}$.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "Dal teorema di Pitagora ricava $b^2=c^2-a^2$.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "Dalla matrice $B$ hai preso una riga. L'elemento del prodotto è la riga {@0} della matrice $A$ per la colonna {@1} della matrice $B$.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "Hai dimenticato di dividere per due. Il triangolo è la metà del rettangolo con lati $z$ e $v$.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "Hai dimenticato di dividere per {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "Hai dimenticato di portare l'esponente {@0} davanti a $x$: $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "Hai dimenticato la divisione. Non devi sottrarre {@0}, ma il risultato di ${@1} : {@2}$.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "Hai dimenticato di elevare il raggio al quadrato: l'area è $\\pi\\cdot r\\cdot r$.",
  "Zlomky ako pruhy": "Le frazioni come strisce",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "Porta le frazioni al denominatore comune: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "Hai moltiplicato le basi. La base {@0} resta uguale, si sommano solo gli esponenti.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">area = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "radici x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "coseno",
  "kruh": "cerchio",
  "napr. 5/6": "per es. 5/6",
  "nemá reálne korene (D &lt; 0)": "non ha radici reali (D &lt; 0)",
  "obdĺžnik": "rettangolo",
  "odvesna": "cateto",
  "prepona": "ipotenusa",
  "prirodzené čísla ℕ": "numeri naturali ℕ",
  "priľahlá odvesna": "cateto adiacente",
  "protiľahlá": "opposto",
  "sínusu": "seno",
  "trojuholník": "triangolo",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (pendenza della tangente)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "numeri interi negativi",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "Non hai derivato il termine ${@0}x$. La sua derivata è {@1}.",
  "Číselná os": "La retta dei numeri",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "Hai diviso il numero per la percentuale. ${@0}\\,\\%$ significa {@1} centesimi, quindi prima trova l'1 % (dividi per 100) e poi moltiplica per {@2}.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "Quadrato diviso in 100 parti, 25 sono colorate",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
