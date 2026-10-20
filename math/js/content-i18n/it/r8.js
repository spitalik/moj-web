/* Italiano: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/r8/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "r8-cisla": {
   "title": "I numeri interi e razionali",
   "summary": "Numeri negativi, opposto, valore assoluto e calcoli con le frazioni con segno.",
   "theory": [
    "<p>I <strong>numeri naturali</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ si usano per contare gli oggetti. Se aggiungiamo lo zero\n       e i numeri opposti ($-1, -2, -3, \\dots$), otteniamo i <strong>numeri interi</strong> $\\mathbb{Z}$. I <strong>numeri razionali</strong> $\\mathbb{Q}$\n       sono tutti i numeri che si possono scrivere come frazione $\\frac{p}{q}$ ($p$ intero, $q$ naturale), per esempio $\\frac{3}{4}$,\n       $-2{,}5 = -\\frac{5}{2}$ oppure $7 = \\frac{7}{1}$.</p>",
    {
     "fig": "r8-obory",
     "caption": "Ogni numero naturale è intero e ogni numero intero è razionale: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>L'<strong>opposto</strong> del numero $a$ è $-a$: di $5$ è $-5$, di $-3$ è $3$. Il <strong>valore assoluto</strong> $|a|$\n       è la distanza del numero dallo zero sulla retta dei numeri, quindi non è mai negativo: $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>Calcoli con i segni:</strong> sottrarre un numero significa aggiungere il suo opposto: $4 - (-6) = 4 + 6 = 10$.\n       Nella moltiplicazione e nella divisione segni uguali danno un risultato positivo e segni diversi un risultato negativo: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $-8 - (-5) + 2\\cdot(-3)$.",
     "steps": [
      "Prima la moltiplicazione: $2\\cdot(-3) = -6$ (segni diversi, il risultato è negativo).",
      "La sottrazione di un numero negativo diventa un'addizione: $-8 - (-5) = -8 + 5 = -3$.",
      "Infine $-3 + (-6) = -9$.",
      "<strong>Risultato: $-9$</strong>"
     ]
    },
    {
     "task": "Confronta i numeri $-\\frac{3}{4}$ e $-0{,}7$.",
     "steps": [
      "Trasformiamo la frazione in numero decimale: $-\\frac{3}{4} = -0{,}75$.",
      "Il numero $-0{,}75$ è più lontano dallo zero dalla parte negativa, quindi sulla retta dei numeri si trova più a sinistra.",
      "<strong>$-\\frac{3}{4} &lt; -0{,}7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "Potenze e radici",
   "summary": "Quadrato e cubo, radice quadrata, stima di una radice e scrittura dei numeri grandi.",
   "theory": [
    "<p>La <strong>potenza</strong> $a^n$ è una scrittura breve del prodotto di $n$ fattori uguali: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       Il numero $a$ è la <em>base</em> e $n$ è l'<em>esponente</em>. Per esempio $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "Il quadrato di un numero è l'area di un quadrato: un quadrato con il lato 3 ha $3^2 = 9$ quadretti. Il cubo è il volume di un cubo: un cubo con lo spigolo 2 è formato da $2^3 = 8$ cubetti."
    },
    "<p><strong>Attenzione al segno:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, ma $-3^2 = -(3\\cdot 3) = -9$.\n       Una potenza con esponente pari di un numero negativo è positiva, con esponente dispari è negativa: $(-2)^3 = -8$.</p>",
    "<p>La <strong>radice quadrata</strong> di un numero non negativo $a$ è il numero non negativo $b$ per cui $b^2 = a$. Scriviamo $\\sqrt{a} = b$,\n       per esempio $\\sqrt{49} = 7$ e $\\sqrt{0{,}09} = 0{,}3$. I numeri grandi si scrivono nella forma $a\\cdot 10^n$, dove $1 \\le a &lt; 10$:\n       $45\\,000 = 4{,}5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $(-2)^3 + 3^2 - \\sqrt{64}$.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$ e $\\sqrt{64} = 8$, perché $8^2 = 64$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>Risultato: $-7$</strong>"
     ]
    },
    {
     "task": "Fra quali due numeri naturali consecutivi si trova $\\sqrt{50}$?",
     "steps": [
      "Cerchiamo i quadrati vicini a 50: $7^2 = 49$ e $8^2 = 64$.",
      "Poiché $49 &lt; 50 &lt; 64$, vale $7 &lt; \\sqrt{50} &lt; 8$.",
      "<strong>$\\sqrt{50}$ si trova fra i numeri 7 e 8</strong> (molto vicino a 7)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "Espressioni letterali",
   "summary": "Che cos'è una variabile, sostituire un valore in un'espressione e tradurre una descrizione a parole in un'espressione.",
   "theory": [
    "<p>Una <strong>variabile</strong> è una lettera (per esempio $x$, $a$, $n$) che rappresenta un numero qualsiasi. Un'<strong>espressione letterale</strong>\n       collega numeri e variabili con le operazioni, per esempio $3x + 5$ oppure $2(a - 1)$. Fra un numero e una variabile il segno di moltiplicazione\n       non si scrive: $3x$ significa $3\\cdot x$.</p>",
    "<p>Il <strong>valore di un'espressione</strong> si calcola sostituendo un numero alla variabile. Un numero negativo si sostituisce fra parentesi:\n       per $x = -2$ si ha $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "Il rettangolo con i lati $a$ e $a + 3$ ha perimetro $o = 2a + 2(a + 3)$ e area $S = a(a + 3)$. Per $a = 4$ si ha $o = 22$ e $S = 28$."
    },
    "<p><strong>Tradurre le parole:</strong> «il doppio del numero $x$» è $2x$, «il numero più grande di 5 rispetto a $x$» è $x + 5$, «la terza parte del numero $x$» è $\\frac{x}{3}$,\n       «il quadrato della somma dei numeri $a$ e $b$» è $(a + b)^2$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola il valore dell'espressione $2x^2 - 5x + 1$ per $x = -3$.",
     "steps": [
      "Sostituiamo $-3$ fra parentesi: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$, quindi $2\\cdot 9 = 18$; poi $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>Il valore dell'espressione è 34.</strong>"
     ]
    },
    {
     "task": "Scrivi con un'espressione: «il numero più piccolo di 4 rispetto al triplo del numero $n$».",
     "steps": [
      "Il triplo del numero $n$ è $3n$.",
      "«Più piccolo di 4» significa sottrarre 4.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "Calcolo letterale",
   "summary": "Termini simili, proprietà distributiva e prodotti notevoli per il quadrato di un binomio.",
   "theory": [
    "<p>I <strong>termini simili</strong> hanno la stessa variabile con lo stesso esponente, per esempio $3x$ e $-5x$ oppure $2x^2$ e $x^2$.\n       Si sommano sommando i coefficienti: $3x - 5x + 2 = -2x + 2$. I termini non simili (per esempio $x^2$ e $x$) non si possono sommare.</p>",
    "<p><strong>Proprietà distributiva:</strong> il numero davanti alla parentesi moltiplica ogni termine nella parentesi: $3(2x - 4) = 6x - 12$.\n       Un meno davanti alla parentesi cambia i segni di tutti i termini: $-(x - 5) = -x + 5$. Due binomi si moltiplicano «ogni termine per ogni termine»:\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "Il quadrato con il lato $a + b$ è formato dal quadrato $a^2$, dal quadrato $b^2$ e da due rettangoli $ab$. Per questo $(a + b)^2 = a^2 + 2ab + b^2$."
    },
    "<p>I <strong>prodotti notevoli</strong> che conviene sapere a memoria: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$\n       e $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "Semplifica l'espressione $4(x - 3) - 2(x - 5)$.",
     "steps": [
      "Applichiamo la proprietà distributiva: $4x - 12 - 2x + 10$ (il meno davanti alla seconda parentesi cambia $-5$ in $+10$).",
      "Riduciamo i termini simili: $4x - 2x = 2x$ e $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "Sviluppa il quadrato $(x - 4)^2$.",
     "steps": [
      "Usiamo la formula $(a - b)^2 = a^2 - 2ab + b^2$, dove $a = x$ e $b = 4$.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "Equazioni lineari",
   "summary": "Principi di equivalenza, equazioni con le parentesi e verifica.",
   "theory": [
    "<p>Un'<strong>equazione</strong> è un'uguaglianza fra due espressioni in cui c'è un'incognita, per esempio $2x + 3 = 9$. <strong>Risolvere un'equazione</strong>\n       significa trovare il numero (la soluzione) che, sostituito, rende vera l'uguaglianza. La soluzione di questa equazione è $x = 3$, perché $2\\cdot 3 + 3 = 9$.</p>",
    {
     "fig": "r8-vahy",
     "caption": "Un'equazione è come una bilancia in equilibrio: a sinistra ci sono due sacchetti di massa sconosciuta $x$ e tre pesi, a destra nove pesi. Se togliamo 3 pesi da entrambi i piatti, la bilancia resta in equilibrio: $2x = 6$, quindi $x = 3$."
    },
    "<p>I <strong>principi di equivalenza</strong> non cambiano la soluzione dell'equazione: a entrambi i membri possiamo aggiungere (o togliere) lo stesso numero\n       o la stessa espressione, ed entrambi i membri si possono moltiplicare o dividere per lo stesso numero diverso da zero. Lo scopo è lasciare l'incognita da sola in un membro.</p>",
    "<p><strong>Procedimento:</strong> 1. eliminiamo le parentesi, 2. portiamo i termini con l'incognita in un membro e i numeri nell'altro,\n       3. dividiamo entrambi i membri per il coefficiente dell'incognita, 4. facciamo la <strong>verifica</strong> sostituendo nell'equazione iniziale.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi l'equazione $5x - 7 = 2x + 8$.",
     "steps": [
      "Togliamo $2x$ da entrambi i membri: $3x - 7 = 8$.",
      "Aggiungiamo 7 a entrambi i membri: $3x = 15$.",
      "Dividiamo entrambi i membri per 3: $x = 5$.",
      "Verifica: primo membro $5\\cdot 5 - 7 = 18$, secondo membro $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "Risolvi l'equazione $3(x + 2) = x - 4$.",
     "steps": [
      "Eliminiamo la parentesi: $3x + 6 = x - 4$.",
      "Togliamo $x$ e poi 6: $2x = -10$.",
      "Dividiamo per 2: $x = -5$.",
      "Verifica: $3\\cdot(-5 + 2) = -9$ e $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "Problemi risolti con le equazioni",
   "summary": "Come costruire un'equazione dal testo: numeri, età, perimetro e divisione di denaro.",
   "theory": [
    "<p>Un problema si risolve con un'equazione in cinque passi:</p>\n       <ol><li>Indichiamo la grandezza sconosciuta con una lettera (per esempio $x$) e scriviamo che cosa significa.</li>\n       <li>Esprimiamo le altre grandezze per mezzo di $x$.</li><li>Scriviamo l'equazione in base a ciò che nel problema è uguale.</li>\n       <li>Risolviamo l'equazione.</li><li>Facciamo la verifica <em>secondo il testo del problema</em> e scriviamo la risposta.</li></ol>",
    "<p>Scritture utili: «5 in più» è $x + 5$, «il triplo» è $3x$, «tre numeri consecutivi» sono $x$, $x + 1$, $x + 2$,\n       «il perimetro del rettangolo» è $2a + 2b$.</p>",
    "<p>La verifica si fa in base al testo, non sostituendo nella nostra equazione. Se avessimo scritto l'equazione in modo sbagliato, la verifica nell'equazione non scoprirebbe l'errore.</p>"
   ],
   "examples": [
    {
     "task": "La somma di tre numeri naturali consecutivi è 48. Quali sono i numeri?",
     "steps": [
      "Indichiamo il numero più piccolo con $x$, gli altri sono $x + 1$ e $x + 2$.",
      "Equazione: $x + (x + 1) + (x + 2) = 48$, cioè $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "Verifica: $15 + 16 + 17 = 48$ ✓",
      "<strong>Risposta: sono i numeri 15, 16 e 17.</strong>"
     ]
    },
    {
     "task": "La mamma ha 26 anni più della figlia. Insieme hanno 50 anni. Quanti anni ha la figlia?",
     "steps": [
      "L'età della figlia è $x$, l'età della mamma $x + 26$.",
      "Equazione: $x + (x + 26) = 50$, cioè $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "Verifica: la mamma ha $12 + 26 = 38$ anni e $12 + 38 = 50$ ✓",
      "<strong>Risposta: la figlia ha 12 anni.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "Cerchio e circonferenza",
   "summary": "Raggio e diametro, lunghezza della circonferenza, area del cerchio, settore circolare e corona circolare.",
   "theory": [
    "<p>La <strong>circonferenza</strong> $k$ con centro $S$ e raggio $r$ è l'insieme di tutti i punti del piano che hanno distanza $r$ dal punto $S$:\n       è solo una «linea». Il <strong>cerchio</strong> è formato dalla circonferenza insieme a tutta la superficie interna. Il <strong>diametro</strong> è un segmento che passa\n       per il centro e unisce due punti della circonferenza; la sua lunghezza è $d = 2r$.</p>",
    {
     "fig": "r8-kruh",
     "caption": "Centro $S$, raggio $r$, diametro $d = 2r$ e settore circolare con angolo $\\alpha$."
    },
    "<p>La <strong>lunghezza della circonferenza</strong> è $o = 2\\pi r = \\pi d$, l'<strong>area del cerchio</strong> è $S = \\pi r^2$.\n       Il numero $\\pi$ è il rapporto fra la circonferenza e il diametro di un cerchio qualsiasi, $\\pi \\approx 3{,}14$.</p>",
    "<p>Il <strong>settore circolare</strong> con angolo $\\alpha$ è la parte di cerchio fra due raggi, la sua area è $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$.\n       La <strong>corona circolare</strong> è la superficie fra due circonferenze concentriche con raggi $R &gt; r$: $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "La ruota di una bicicletta ha il diametro di $70\\,\\text{cm}$. Quanta strada percorre in un giro? Usa $\\pi \\approx 3{,}14$.",
     "steps": [
      "In un giro la ruota percorre la lunghezza della sua circonferenza: $o = \\pi d$.",
      "$o \\approx 3{,}14\\cdot 70 = 219{,}8\\,\\text{cm}$.",
      "<strong>La ruota percorre circa $219{,}8\\,\\text{cm}$, cioè circa $2{,}2\\,\\text{m}$.</strong>"
     ]
    },
    {
     "task": "Calcola l'area di un quarto di cerchio con il raggio di $10\\,\\text{cm}$ ($\\pi \\approx 3{,}14$).",
     "steps": [
      "Un quarto di cerchio è un settore con angolo $90^\\circ$, cioè $\\frac{90}{360} = \\frac{1}{4}$ del cerchio.",
      "Area di tutto il cerchio: $S = \\pi r^2 \\approx 3{,}14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>Un quarto: $314 : 4 = 78{,}5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "I prismi: superficie e volume",
   "summary": "Basi e superficie laterale del prisma, sviluppo del parallelepipedo, superficie e volume del parallelepipedo, del cubo e del prisma triangolare.",
   "theory": [
    "<p>Il <strong>prisma</strong> è un solido che ha due <strong>basi</strong> congruenti e parallele (poligoni) e una <strong>superficie laterale</strong>\n       formata da rettangoli, le facce laterali. In base alla forma della base parliamo di prisma triangolare, quadrangolare, esagonale…\n       Il parallelepipedo rettangolo e il cubo sono prismi quadrangolari.</p>",
    {
     "fig": "r8-siet",
     "caption": "Lo sviluppo di un parallelepipedo con dimensioni $a$, $b$, $c$: due basi $a\\times b$ (blu) e quattro facce laterali (verdi)."
    },
    "<p><strong>Volume</strong> del prisma: $V = S_p\\cdot v$ (area di base per altezza). Per il parallelepipedo $V = a\\cdot b\\cdot c$, per il cubo $V = a^3$.\n       Il volume si misura in unità cubiche; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ e $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p>La <strong>superficie totale</strong> è la somma delle aree di tutte le facce: $S = 2\\cdot S_p + S_{pl}$, dove l'area laterale è $S_{pl} = o_p\\cdot v$\n       (perimetro di base per altezza). Per il parallelepipedo $S = 2(ab + bc + ac)$, per il cubo $S = 6a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Un parallelepipedo ha le dimensioni $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$. Calcola la sua superficie totale e il suo volume.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Un prisma triangolare ha per base un triangolo rettangolo con i cateti di $3\\,\\text{cm}$ e $4\\,\\text{cm}$ (l'ipotenusa misura $5\\,\\text{cm}$) e l'altezza di $10\\,\\text{cm}$. Calcola la sua superficie totale e il suo volume.",
     "steps": [
      "Area di base: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "Volume: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "Superficie laterale: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "Superficie totale: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "Grafici, tabelle e statistica",
   "summary": "Istogramma e diagramma a torta, media aritmetica, moda e mediana.",
   "theory": [
    "<p>I dati si raccolgono in <strong>tabelle</strong> e si rappresentano con dei <strong>grafici</strong>. L'istogramma permette di confrontare bene le quantità,\n       il diagramma a torta mostra quale parte dell'intero forma ogni gruppo.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "Istogramma: i voti di una verifica (scala da 1 a 5, dove 1 è il voto migliore) in una classe di 23 alunni. La maggior parte degli alunni ha preso 2."
    },
    {
     "fig": "r8-kolac",
     "caption": "Diagramma a torta: come gli alunni arrivano a scuola. La metà va a piedi, il 30 % in autobus e il 20 % in bicicletta."
    },
    "<p>La <strong>media aritmetica</strong> è la somma di tutti i valori divisa per il loro numero. La <strong>moda</strong> è il valore che compare\n       più spesso. La <strong>mediana</strong> è il valore centrale quando ordiniamo i dati per grandezza; se i dati sono in numero pari, è\n       la media dei due valori centrali.</p>"
   ],
   "examples": [
    {
     "task": "Le temperature in cinque giorni sono state $12$, $15$, $9$, $15$ e $14\\,{}^\\circ\\text{C}$. Trova la media, la moda e la mediana.",
     "steps": [
      "Media: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "Moda: il valore più frequente è $15\\,{}^\\circ\\text{C}$.",
      "Mediana: ordiniamo $9, 12, 14, 15, 15$; il valore centrale è $14\\,{}^\\circ\\text{C}$."
     ]
    },
    {
     "task": "Dal grafico dei voti calcola il voto medio della classe.",
     "steps": [
      "Somma di tutti i voti: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "Numero di alunni: $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>Media: $56 : 23 \\approx 2{,}43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, quindi $p = {@6}$ e $q = {@7}$.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Superficie laterale: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, superficie totale $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Moltiplichiamo entrambi i membri per {@4}: $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$ e $\\sqrt{{@2}} = {@3}$, quindi ${@4} - {@5} = {@6}$.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$, perché ${@2}^2 = {@3}$.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ significa $a\\cdot a\\cdot a$, non $3\\cdot a$.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ e i segni sono {@3}: ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ e i segni sono {@3}: ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$ e ${@2}^2 = {@3}$. Poiché ${@4} &lt; {@5} &lt; {@6}$, vale ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$ e $|{@2}| = {@3}$, quindi ${@4} - {@5} = {@6}$.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$ e $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "Il valore assoluto è la distanza dallo zero, non è mai negativo.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "Se moltiplichi l'equazione per {@0}, moltiplica ogni termine di entrambi i membri, anche il numero ${@1}$. È più semplice isolare prima la frazione.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "Un acquario a forma di parallelepipedo ha le dimensioni interne di {@0} cm, {@1} cm e {@2} cm. Quanti litri d'acqua può contenere?",
  "Aká dlhá je dlhšia strana (v cm)?": "Quanto è lungo il lato più lungo (in cm)?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "Quanto è lungo l'altro lato $a + {@0}$ per $a = {@1}$ (in cm)?",
  "Aká dlhá je kratšia strana (v cm)?": "Quanto è lungo il lato più corto (in cm)?",
  "Aké je najväčšie z čísel?": "Qual è il più grande dei numeri?",
  "Aké je {@0}. číslo v poradí?": "Qual è il {@0}° numero nell'ordine?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "Qual è il numero $a$? Prima della virgola deve avere una sola cifra diversa da zero.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "Quale parte dell'angolo giro forma l'angolo di ${@0}^\\circ$? Scrivila come frazione.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "Qual è il minimo comune denominatore delle frazioni ${@0}$ e ${@1}$?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "Qual è il volume del prisma $V = S_p\\cdot v$ (in cm³)?",
  "Aký je objem kvádra (v cm³)?": "Qual è il volume del parallelepipedo (in cm³)?",
  "Aký je obsah celého kruhu (v cm²)?": "Qual è l'area di tutto il cerchio (in cm²)?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "Qual è la superficie laterale, cioè il perimetro di base per l'altezza (in cm²)?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "Qual è l'area di base $S_p$ (in cm²)?",
  "Aký je polomer kruhu (v cm)?": "Qual è il raggio del cerchio (in cm)?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "Qual è la superficie totale del prisma, cioè due basi più la superficie laterale (in cm²)?",
  "Aký je súčet všetkých čísel?": "Qual è la somma di tutti i numeri?",
  "Aký obsah má jedna stena kocky (v cm²)?": "Che area ha una faccia del cubo (in cm²)?",
  "Babka": "La nonna",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "Senza parentesi si eleva al quadrato solo il numero {@0}, il meno resta davanti al risultato: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "Ti mancano i termini con $x$: ogni termine della prima parentesi va moltiplicato per ogni termine della seconda, non solo il primo con il primo e l'ultimo con l'ultimo.",
  "Dcéra": "La figlia",
  "Dedko": "Il nonno",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "Hai diviso solo per $\\pi$, così ottieni il diametro. Il raggio è la sua metà.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "Spostiamo la virgola di {@0} {@1} verso sinistra, in modo che prima di essa resti una sola cifra diversa da zero: ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "Il diagramma mostra quanti libri hanno preso in prestito i lettori in biblioteca nei singoli giorni.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "Il lato più lungo misura ${@0} + {@1} = {@2}\\,\\text{cm}$.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "Nella formula $S = \\pi r^2$ hai sostituito il diametro. Prima calcola il raggio, la metà del diametro.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "Sostituisci $x = {@0}$ nel termine ${@1}$. Quanto fa ${@2}$?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "Sostituisci entrambe le variabili insieme, i numeri negativi tra parentesi.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "Il quadrato $x^2$ significa $x\\cdot x$, non $2\\cdot x$.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "Il quadrato come un quadrato, il cubo come un cubo",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "Il quadrato è il prodotto di due fattori uguali. Meno per meno fa più.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "Il quadrato non è il doppio: elevare al quadrato significa moltiplicare il numero per se stesso.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "Il quadrato non è il doppio: elevare a potenza significa moltiplicare per se stesso.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "L'altro lato è tutta l'espressione $a + {@0}$, mettila tra parentesi: si moltiplica $a\\cdot(a + {@1})$.",
  "Dvojnásobok": "Il doppio",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "L'esponente non è il numero di cifre del numero, ma il numero di posti di cui sposti la virgola.",
  "Filip": "Filippo",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "Il prisma ha due basi (superiore e inferiore), tutte e due vanno contate nella superficie totale.",
  "Hľadaj najvyšší stĺpec.": "Cerca la colonna più alta.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "Cerca il numero non negativo il cui quadrato è il numero sotto radice.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "Cerca il numero che, moltiplicato tre volte per se stesso, dà il volume.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "Cerchiamo il numero il cui cubo è {@0}: ${@1}^3 = {@2}$, quindi $a = {@3}\\,\\text{cm}$.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "Una faccia ha area ${@0} : 6 = {@1}\\,\\text{cm}^2$, quindi $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "Un lato del rettangolo è più lungo dell'altro di {@0} cm. Il perimetro del rettangolo è {@1} cm. Quanto è lungo il lato {@2} (in cm)?",
  "K obom stranám pripočítame {@0}": "Aggiungiamo {@0} a entrambi i membri",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "Ogni faccia del parallelepipedo compare due volte. Qual è la superficie totale del parallelepipedo (in cm²)?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "Moltiplica ogni termine della prima parentesi per ogni termine della seconda. Poi somma i termini con $x$.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "Quando sposti un numero nell'altro membro dell'equazione, cambiagli il segno.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "Quando sposti un numero nell'altro membro dell'equazione, cambiagli il segno. In entrambi i membri fai la stessa operazione.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "Il cubo ha 6 facce, ognuna è un quadrato di lato $a$.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "Il cubo ha 6 facce, non 4. Non dimenticare la faccia superiore e quella inferiore.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "Il cubo ha 6 facce quadrate congruenti: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "Un cubo ha volume ${@0}\\,\\text{cm}^3$. Quanto è lungo il suo spigolo (in cm)?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "Un cubo ha superficie totale ${@0}\\,\\text{cm}^2$. Quanto è lungo il suo spigolo (in cm)?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "Il coefficiente ${@0}$ di $x$ lo elimini con la divisione, non con la sottrazione: ${@1}x$ significa ${@2}\\cdot x$.",
  "Koľko je $R^2 - r^2$?": "Quanto fa $R^2 - r^2$?",
  "Koľko je $\\sqrt{{@0}}$?": "Quanto fa $\\sqrt{{@0}}$?",
  "Koľko je $r^2$?": "Quanto fa $r^2$?",
  "Koľko je ${@0}$?": "Quanto fa ${@0}$?",
  "Koľko je ${@0}^2$?": "Quanto fa ${@0}^2$?",
  "Koľko je ${@0}{@1}$?": "Quanto fa ${@0}{@1}$?",
  "Koľko je $|{@0}|$?": "Quanto fa $|{@0}|$?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "Quanto fa la parentesi: ${@0}{@1}$?",
  "Koľko je čísel?": "Quanti sono i numeri?",
  "Koľko kníh si požičali za celý týždeň?": "Quanti libri hanno preso in prestito in tutta la settimana?",
  "Koľko rokov má {@0}?": "Quanti anni ha {@0}?",
  "Koľko žiakov hlasovalo spolu?": "Quanti alunni hanno votato in tutto?",
  "Koľko žiakov odpovedalo spolu?": "Quanti alunni hanno risposto in tutto?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "Il lato più corto è $x$, quello più lungo $x + {@0}$. Equazione: $2x + 2(x + {@1}) = {@2}$, quindi $4x + {@3} = {@4}$, $4x = {@5}$ e $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "Il lato più corto è $x$, quello più lungo $x + {@0}$. Dall'equazione $2x + 2(x + {@1}) = {@2}$ calcola quanto fa $4x$.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "Il lato più corto misura ${@0}\\,\\text{cm}$.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "Il cerchio ha {@0}. Calcola la sua area in cm². {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "Il cerchio ha {@0}. Calcola la sua circonferenza in cm. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "Cerchio con centro, raggio, diametro e settore",
  "Kruhový diagram dopravy do školy": "Diagramma circolare del mezzo di trasporto per andare a scuola",
  "Ktoré ovocie dostalo najviac hlasov?": "Quale frutto ha ricevuto più voti?",
  "Ktorý výraz sa rovná ${@0}$?": "Quale espressione è uguale a ${@0}$?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "Quale espressione corrisponde alla descrizione: <em>{@0}</em>?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "Quale sport è il più amato dagli alunni?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "Il parallelepipedo ha ogni faccia due volte (superiore e inferiore, anteriore e posteriore, sinistra e destra). La somma $ab + bc + ac$ va ancora raddoppiata.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "Un parallelepipedo ha le dimensioni $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Calcola la sua superficie totale (in cm²) e il suo volume (in cm³). Scrivili separati da un punto e virgola.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "Il parallelepipedo ha tre coppie di facce congruenti: $ab$, $bc$ e $ac$. Il volume è il prodotto di tutte e tre le dimensioni.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "Cerca la mediana solo nella lista ordinata. Prima ordina i numeri dal più piccolo al più grande.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "La mediana è la media di questi due numeri. Quanto fa?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "Tra quali due numeri naturali consecutivi si trova $\\sqrt{{@0}}$? Scrivi il numero minore e quello maggiore separati da un punto e virgola.",
  "Množiny prirodzených, celých a racionálnych čísel": "Insiemi dei numeri naturali, interi e razionali",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "La moda è il valore che si ripete più spesso.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "La moda non è il numero più grande, ma il valore che compare più spesso.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "Si divide a metà solo $x$, il numero {@0} si sottrae solo dalla metà.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "Sulla retta dei numeri ci sono i numeri ${@0}$ e ${@1}$. Qual è la loro distanza?",
  "Najmenšie číslo je {@0}.": "Il numero più piccolo è {@0}.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "Indica il numero più piccolo con $x$ e somma tutti i numeri. L'equazione ha la forma ${@0}x + \\square = {@1}$. Quale numero va nel quadratino?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "Indica il numero più piccolo con $x$, i successivi sono $x + 1$, $x + 2$, … Sommali e uguaglia la somma al totale.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "Prima isola la frazione, poi moltiplica entrambi i membri per il denominatore.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "Prima togli la parentesi, poi risolvi come un'equazione normale.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "Prima la potenza, poi la moltiplicazione e infine l'addizione. Metti il numero negativo tra parentesi.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "Prima trova i valori assoluti dei due numeri (le distanze dallo zero, che non sono negative) e solo dopo sottrai.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "Prima calcola ogni radice separatamente.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "Prima calcola quello che c'è tra parentesi, poi moltiplica.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "La colonna più alta ha il valore {@0} e corrisponde alla voce “{@1}”. Questa voce è la moda dei dati.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "Il numero più grande è $x + {@0} = {@1}$.",
  "Natália": "Natalia",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "Trova due quadrati di numeri naturali tra cui cade il numero sotto radice.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "Va moltiplicato il numero $x$, non il numero {@0}.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "Si moltiplica tutta la somma, perciò va messa tra parentesi. Senza parentesi si moltiplicherebbe solo $x$.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "Si moltiplica tutta la somma, quindi anche $x$, non solo il numero {@0}.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "Si moltiplica solo $x$, il numero {@0} si sottrae solo dopo aver calcolato {@1}. La parentesi significherebbe {@2} di tutta la differenza.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "Di quanti posti a sinistra bisogna spostare la virgola? Questo è l'esponente $n$.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "Un rettangolo ha i lati lunghi $a$ e $a + {@0}$ centimetri. Calcola {@1} per $a = {@2}$.",
  "Obdĺžnik so stranami a a a plus 3": "Rettangolo con i lati a e a più 3",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "Dividi entrambi i membri per ${@0}$. Quanto vale $x$?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "Moltiplica entrambi i membri per {@0}. Quanto vale $x$?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "I due numeri stanno dalla stessa parte dello zero, perciò le loro distanze dallo zero si sottraggono, non si sommano.",
  "Objem kocky je $a^3$.": "Il volume del cubo è $a^3$.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "Il volume non si divide per tre. Cerchi il numero che, moltiplicato tre volte per se stesso, dà il volume.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "L'area di una faccia è $a^2$, non $a$. La faccia è un quadrato.",
  "Obsah kruhu je $S = \\pi r^2$.": "L'area del cerchio è $S = \\pi r^2$.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "L'area della corona circolare non è $\\pi(R - r)^2$. Dall'area del cerchio grande sottrai l'area di quello piccolo: $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "L'area del rettangolo è il prodotto dei suoi lati.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "L'area del triangolo rettangolo è la metà del prodotto dei cateti, non dimenticare di dividere per due.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "Le aree dei cerchi vanno sottratte, non sommate: il cerchio piccolo al centro manca.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "La circonferenza è $2\\pi r$, hai dimenticato il due (oppure in $\\pi d$ hai sostituito il raggio invece del diametro).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "La circonferenza del cerchio è $o = 2\\pi r = \\pi d$.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "La circonferenza di un cerchio è ${@0}\\,\\text{cm}$. Qual è il suo raggio in cm? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "Non puoi semplicemente dividere il perimetro per quattro, i lati del rettangolo non sono lunghi uguali.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "Il perimetro del rettangolo è $2a + 2b$, al posto dell'altro lato sostituisci $a + {@0}$.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "Il perimetro del rettangolo è $2a + 2b$. Indica il lato più corto con $x$.",
  "Od oboch strán odčítame {@0}": "Sottraiamo {@0} da entrambi i membri",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "Dall'area del cerchio grande sottrai l'area del cerchio piccolo.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "Da un numero negativo sottrai, quindi sulla retta dei numeri ti sposti ancora più a sinistra dello zero.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "La radice non è la metà del numero. Cerca il numero che moltiplicato per se stesso dà {@0}.",
  "Odčítaj hodnoty dvoch stĺpcov.": "Sottrai i valori di due colonne.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "Sottrai i valori assoluti ottenuti. Qual è il risultato?",
  "Odčítaj získané čísla. Aký je výsledok?": "Sottrai i numeri ottenuti. Qual è il risultato?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "Sottrai i numeri e prendi il risultato senza segno. Se stanno da parti opposte dello zero, le distanze dallo zero si sommano.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "Sostituisci la sottrazione con l'addizione dell'opposto.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "Sottrarre un numero negativo significa aggiungere il suo opposto, un numero positivo: $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "Sottrarre un numero significa aggiungere il suo opposto: ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "La descrizione corrisponde all'espressione ${@0}$. Nello scrivere procedi dalla fine della frase: prima stabilisci qual è l'operazione “principale” (somma, differenza, potenza…), poi le sue parti.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "Isola la frazione. Quanto fa $\\frac{x}{{@0}}$?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "La base è un triangolo rettangolo, la sua area è la metà del prodotto dei cateti. La superficie laterale è il perimetro di base per l'altezza.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "Secondo la formula ${@0}$ per $a = x$, $b = {@1}$: ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "Il raggio è la metà del diametro: $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "La metà del numero $x$ è $x$ diviso due, non $2x$.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "L'ultimo termine $b^2$ è un quadrato, e il quadrato è sempre positivo.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "L'ultimo termine è il quadrato del numero {@0}, non il numero stesso.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "L'ultimo termine è il prodotto ${@0}\\cdot {@1}$, non il numero {@2} da solo.",
  "Použi $\\pi \\approx 3{,}14$.": "Usa $\\pi \\approx 3{,}14$.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "Dividi la superficie totale per sei, ottieni l'area di una faccia. Poi estrai la radice.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "Attenzione, nella formula $S = \\pi r^2$ c'è il raggio, non il diametro.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "Attenzione: $(x + a)^2$ non è $x^2 + a^2$, manca il doppio prodotto $2ax$.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "La quantità di numeri è dispari ({@0}), la mediana è il numero centrale, il {@1}°: {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "La quantità di numeri è pari ({@0}), la mediana è la media del {@1}° e del {@2}° numero: $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "Stai calcolando l'area del cerchio ($\\pi r^2$), il problema chiede la circonferenza.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "Immagina lo spostamento sulla retta dei numeri: un numero positivo sposta a destra, uno negativo a sinistra.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "Sposta i termini con $x$ nel membro sinistro e sommali. Quale coefficiente avrà $x$?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "Sposta i termini con $x$ a sinistra e i numeri a destra. Nella forma $ax = b$: quanto valgono $a$ e $b$? Scrivili separati da un punto e virgola.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "Sposta i numeri nel membro destro e sommali. Quale numero ci sarà a destra?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "Trasforma la frazione in numero decimale. Di due numeri negativi è maggiore quello più vicino allo zero.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "Nella divisione vale la stessa regola dei segni della moltiplicazione.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "Per moltiplicare le frazioni non serve il denominatore comune: moltiplica numeratore per numeratore e denominatore per denominatore.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "Spostando un termine con $x$ nell'altro membro dell'equazione bisogna cambiargli il segno.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "Spostando un numero nell'altro membro dell'equazione bisogna cambiargli il segno.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "Con una quantità pari di numeri, al centro ci sono due numeri. La mediana è la loro media.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "Nella differenza conta l'ordine: prima scrivi quello da cui sottrai.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "Moltiplicando nascono due termini con $x$: $x$ per il numero della seconda parentesi e il numero della prima parentesi per $x$. Sommali. Qual è il coefficiente $p$ di $x$?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "Per sommare e sottrarre frazioni ti serve il denominatore comune. Non dimenticare i segni.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "Elevando al quadrato una differenza non basta elevare ogni termine separatamente: manca il termine centrale $-2ab$.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "Elevando al quadrato una somma non basta elevare ogni termine separatamente: manca il termine centrale $2ab$.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "Tra i numeri negativi non decide quale ha il valore assoluto maggiore: è maggiore quello più vicino allo zero.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "Aggiungere un numero negativo è lo stesso che sottrarre il suo valore assoluto: ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "Il quintuplo",
  "Päťnásobok": "Il quintuplo",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "Segni uguali danno un prodotto positivo, segni diversi un prodotto negativo.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "La differenza delle radici non è la radice della differenza. Prima calcola ogni radice separatamente e solo dopo sottrai.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "Decidi quale operazione si fa per ultima. Se si moltiplica o si eleva a potenza tutta una somma o una differenza, serve la parentesi.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "Trasformiamo le dimensioni in decimetri: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "Trasforma le dimensioni in decimetri, perché $1\\,\\text{dm}^3 = 1$ litro.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "Sviluppa $(x{@0})(x{@1})$ e scrivi il risultato nella forma $x^2 + px + q$. Scrivi $p$ e $q$ separati da un punto e virgola.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "Sviluppa ${@0}({@1})$ (anche con il segno davanti alla parentesi). Scrivi il coefficiente di $x$ e il termine noto.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "Sviluppa ${@0}({@1})$. Scrivi il coefficiente di $x$ e il termine noto separati da un punto e virgola.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Sviluppa e semplifica ${@0}$ nella forma $ax + b$. Scrivi $a$ e $b$ separati da un punto e virgola.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "Sviluppa la parentesi ${@0}(x{@1})$. Quale numero (senza $x$) si ottiene?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "Sviluppiamo: ${@0}{@1} = {@2}{@3}$. Termini con $x$ a sinistra, numeri a destra: ${@4} = {@5}$, quindi $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "Sviluppiamo: ${@0}{@1}{@2}$. Sommiamo i termini simili: ${@3}$, quindi $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "Amplia le due frazioni al denominatore {@0} e {@1} i loro numeratori. Quale numeratore ottieni?",
  "S – stred": "S – centro",
  "Sieť kvádra": "Sviluppo del parallelepipedo",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Somma i termini simili. Scrivi $a$ e $b$ separati da un punto e virgola.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "Il denominatore comune è {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "In tutto sono {@0} parti uguali: {@1} ha una parte e {@2} {@3}. Perciò dividi la somma per {@4}.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "Insieme hanno {@0} {@1}, ma non hanno la stessa età, perciò non puoi semplicemente dividere la somma a metà. Tieni conto della differenza di {@2} {@3}.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "La faccia è un quadrato. Quanto è lungo il suo lato, cioè lo spigolo del cubo (in cm)?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "Il termine centrale è il doppio prodotto, $2ab$, non solo $ab$.",
  "Stĺpcový diagram známok z písomky": "Diagramma a colonne dei voti di una verifica",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "Indica con $x$ la somma che {@0} {@1}. “{@2}” significa {@3} volte tanto.",
  "Syn": "Il figlio",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "La somma è ${@0} = {@1}$, la quantità di numeri è {@2}. Media: ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "La somma va divisa per la quantità di tutti i numeri. Contali di nuovo.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "La somma divisa per la quantità di numeri è la loro media, non il numero cercato. Scrivi l'equazione con tutti i numeri $x$, $x + 1$, …",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "La somma di {@0} numeri naturali consecutivi è {@1}. Quale di essi è {@2}?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "Il prodotto $(+b)\\cdot(-b)$ è negativo, perciò davanti a $b^2$ c'è il meno.",
  "Sčítaj hodnoty všetkých stĺpcov.": "Somma i valori di tutte le colonne.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "Somma i coefficienti di tutti i termini con $x$. Quanto vale $a$?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "Somma i due risultati. Che valore ha l'espressione?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "Somma i termini noti (senza $x$). Quanto vale $b$?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "Somma tutti i termini. Che valore ha l'espressione?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "Somma tutti i numeri e dividi la somma per la loro quantità.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "Somma separatamente i coefficienti di $x$ e i termini noti. Il segno davanti a un termine appartiene a esso.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "Hai sommato solo due lati. Il rettangolo ha quattro lati, quindi conta ogni lunghezza due volte.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "Sommiamo i valori di tutte le colonne: ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "Questo sarebbe il risultato di $(x - b)^2$. Nel prodotto di una somma per una differenza i termini centrali si annullano a vicenda.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "Questo è il risultato del prodotto $(a + b)(a - b)$. Nel quadrato di una differenza c'è in più il termine centrale $-2ab$ e l'ultimo termine è positivo.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "Questa è la media aritmetica. La mediana è il valore centrale dei numeri ordinati.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "Questa è la lunghezza dell'altro lato. Il problema chiede il lato {@0}.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "Questa è solo la superficie laterale. Alla superficie totale appartengono anche le due basi.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "Questo è il più piccolo dei numeri, il problema chiede il più grande. Aggiungigli la differenza tra il numero più grande e quello più piccolo.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "Questo è il più grande dei numeri, il problema chiede il più piccolo.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "Questo è il volume del cubo ($a^3$). La superficie totale è la somma delle aree di tutte le facce.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "Questa è l'area di tutto il cerchio. Il settore ne è solo una parte, secondo l'ampiezza dell'angolo al centro.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "Questa è l'area di una faccia. Lo spigolo lo ottieni estraendone ancora la radice.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "Questa è la circonferenza ($2\\pi r$), oppure hai calcolato $r^2$ come $2r$. L'area è $\\pi r^2 = \\pi\\cdot r\\cdot r$.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "Questa è la superficie totale del cubo ($6a^2$). Il volume è $a^3$.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "Questo è il numero di volte in cui si ripete il valore più frequente. La moda è il valore stesso.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "Questa è la somma che {@0} {@1}. Il problema chiede quanto {@2} {@3}.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "Questa è la somma dei numeri. La media la ottieni dividendo la somma per la quantità di numeri.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "Questa è l'età {@0}, il problema chiede l'età {@1}.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "Il cubo è il prodotto di tre fattori uguali. Una potenza dispari di un numero negativo è negativa.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "Il cubo non è il triplo: il numero va scritto tre volte come fattore e moltiplicato.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "Un prisma triangolare ha per base un triangolo rettangolo con i cateti di ${@0}\\,\\text{cm}$ e ${@1}\\,\\text{cm}$ (l'ipotenusa misura ${@2}\\,\\text{cm}$) e altezza ${@3}\\,\\text{cm}$.",
  "Trojnásobok": "Il triplo",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "L'angolo di ${@0}^\\circ$ è $\\frac{{@1}}{360}$ dell'angolo giro, quindi il settore è {@2} del cerchio: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "Va elevata al quadrato tutta la differenza, non solo il numero $x$.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "Si eleva al quadrato tutta la differenza, non ogni numero separatamente. Metti la differenza tra parentesi.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "Eleviamo al quadrato tutto il numero $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "Trova la mediana dei numeri {@0}.",
  "Urči modus súboru údajov {@0}.": "Trova la moda dei dati {@0}.",
  "Usporiadame: {@0}. {@1}": "Ordiniamo: {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "In quale giorno hanno preso in prestito più libri?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "Nel perimetro il lato più lungo compare due volte, perciò anche la differenza di {@0} cm va contata due volte.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "Indica con $x$ l'età del più giovane, l'età del più vecchio è $x$ più la differenza. La somma delle due età è uguale al numero dato.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "Indica con $x$ l'età {@0}. Dall'equazione $x + (x + {@1}) = {@2}$ calcola quanto fa $2x$.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "Indichiamo con $x$ l'età {@0}, l'età {@1} è allora $x + {@2}$. Equazione: $x + (x + {@3}) = {@4}$, quindi $2x = {@5}$ e $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "Prendi questa parte dell'area di tutto il cerchio. Qual è l'area del settore (in cm²)?",
  "Vnuk": "Il nipote",
  "Vnučka": "La nipote",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "Nella formula $o = 2\\pi r$ c'è il raggio. Se conosci il diametro, basta $o = \\pi d$: il diametro non va raddoppiato.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "Dividi il membro destro per il coefficiente di $x$. Quanto vale $x$?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "Dividi la somma per la quantità di numeri. Qual è la media?",
  "Vydeľ. Aké je $x$?": "Dividi. Quanto vale $x$?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "Moltiplica i denominatori. Quale denominatore ottieni?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "Moltiplica i termini noti delle due parentesi. Quanto vale $q$?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "Moltiplica i numeratori. Quale numeratore ottieni (prima di semplificare)?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "Moltiplica per $3{,}14$. Qual è l'area del cerchio (in cm²)?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "Moltiplica per $3{,}14$. Qual è l'area della corona circolare (in cm²)?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "Calcola $\\sqrt{{@0}} - \\sqrt{{@1}}$.",
  "Vypočítaj $\\sqrt{{@0}}$.": "Calcola $\\sqrt{{@0}}$.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "Calcola ${@0}$. Scrivi il risultato come frazione ridotta ai minimi termini (per es. -5/6) o come numero intero.",
  "Vypočítaj ${@0}^2$.": "Calcola ${@0}^2$.",
  "Vypočítaj ${@0}^3$.": "Calcola ${@0}^3$.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "Calcola $|{@0}| - |{@1}|$.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "Calcola la media aritmetica dei numeri {@0}.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "Calcola il valore dell'espressione ${@0}$ per $x = {@1}$.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "Calcola il valore dell'espressione ${@0}(x{@1})$ per $x = {@2}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "Calcola il valore dell'espressione ${@0}{@1}$ per $x = {@2}$ e $y = {@3}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "Calcola il valore dell'espressione ${@0}{@1}$ per $x = {@2}$.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "Calcola il volume di un cubo con lo spigolo di ${@0}\\,\\text{cm}$ (in cm³).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "Calcola l'area di tutto il cerchio e prendine la stessa parte che l'angolo del settore forma rispetto a $360^\\circ$.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "Calcola l'area del settore circolare di raggio $r = {@0}\\,\\text{cm}$ e angolo al centro di ${@1}^\\circ$ (in cm²). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "Calcola l'area della corona circolare di raggi $R = {@0}\\,\\text{cm}$ e $r = {@1}\\,\\text{cm}$ (in cm²). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "Calcola l'area del rettangolo $a\\cdot b$ (in cm²).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "Calcola le aree delle tre facce diverse $ab$, $bc$ e $ac$ e sommale (in cm²).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "Calcola il perimetro del rettangolo $2a + 2b$ (in cm).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "Calcola la superficie totale di un cubo con lo spigolo di ${@0}\\,\\text{cm}$ (in cm²).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "Hai calcolato $2x$, cioè il doppio dell'età cercata. Dividi ancora per due.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Hai calcolato l'area. Il perimetro è la somma delle lunghezze di tutti e quattro i lati.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Hai calcolato il perimetro. L'area del rettangolo è il prodotto delle lunghezze dei suoi lati.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "Risolvi l'equazione $\\frac{x}{{@0}}{@1} = {@2}$.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "Risolvi l'equazione ${@0}(x{@1}) = {@2}{@3}$.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "Risolvi l'equazione ${@0}{@1} = {@2}{@3}$.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "Risolvi l'equazione. Quanto vale $x$ (il numero più piccolo)?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "Risolvi l'equazione. Quanti euro {@0} {@1}?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "Hai preso una parte della circonferenza ($2\\pi r$): quella è la lunghezza dell'arco. Per l'area del settore parti dall'area del cerchio $\\pi r^2$.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "La distanza tra due numeri è il valore assoluto della loro differenza: $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "Dividi la formula $o = 2\\pi r$ per $2\\pi \\approx 6{,}28$.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "Bilancia in equilibrio: due sacchetti x e tre pesi a sinistra, nove pesi a destra",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "Moltiplica il risultato della parentesi per ${@0}$. Che valore ha l'espressione?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "Guarda se il meno è dentro la parentesi. Si eleva a potenza solo quello che sta direttamente sotto l'esponente.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "Da $o = 2\\pi r$ ricaviamo $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "Al posto di $x$ sostituisci il numero; se è negativo, mettilo tra parentesi.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "Hai scambiato i numeri: si moltiplica per {@0} e si aggiunge {@1}.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Scrivi il risultato $\\frac{{@0}}{{@1}}$ ridotto ai minimi termini (o come numero intero).",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Scrivi la frazione $\\frac{{@0}}{{@1}}$ ridotta ai minimi termini (o come numero intero).",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "Scrivi il numero ${@0}$ nella forma $a\\cdot 10^n$, dove $1 \\le a &lt; 10$. Scrivi $a$ e $n$ separati da un punto e virgola.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "Elimina il numero ${@0}$ dal membro sinistro, in modo che resti solo ${@1}x$. Quale numero ci sarà nel membro destro?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "Semplifica l'espressione ${@0}$ nella forma $ax + b$. Scrivi i numeri $a$ e $b$ separati da un punto e virgola.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Non sottrarre le frazioni sottraendo separatamente numeratori e denominatori. Prima portale allo stesso denominatore.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Non sommare le frazioni sommando separatamente numeratori e denominatori. Prima portale allo stesso denominatore.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "La frazione $\\frac{x}{{@0}}$ la elimini moltiplicando per {@1}, non dividendo.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "Trasformiamo la frazione in numero decimale: ${@0} = {@1}$. Confrontiamo ${@2}$ e ${@3}$, perciò ${@4} {@5} {@6}$.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "La scrittura ${@0}$ significa il prodotto del numero ${@1}$ e della variabile $x$, non la somma. Metti il numero sostituito tra parentesi e moltiplica.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "Un numero negativo davanti alla parentesi cambia il segno di ogni termine nella parentesi, anche del numero alla fine.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "Nell'elevare a potenza metti il numero negativo tra parentesi: $({@0})^2$ è un numero positivo.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "La parentesi significherebbe prendere {@0} volte tutta la somma. Qui prima si prende {@1} del numero $x$ e solo dopo gli si aggiunge {@2}.",
  "a $x + 2$": "e $x + 2$",
  "autobusom 30 %": "in autobus 30 %",
  "babka": "la nonna",
  "babky": "della nonna",
  "banán": "banana",
  "beh": "corsa",
  "d = 2r – priemer": "d = 2r – diametro",
  "dedka": "del nonno",
  "dedko": "il nonno",
  "dlhšia": "più lungo",
  "dlhšiu": "più lungo",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "il quadrato della differenza tra il numero $x$ e il numero {@0}",
  "dvojnásobku": "il doppio",
  "dvojnásobok": "il doppio",
  "futbal": "calcio",
  "hokej": "hockey",
  "hruška": "pera",
  "jahoda": "fragola",
  "k – kružnica": "k – circonferenza",
  "kratšia": "più corto",
  "kratšiu": "più corto",
  "mama": "la mamma",
  "mamy": "della mamma",
  "miest": "posti",
  "na bicykli 20 %": "in bicicletta 20 %",
  "napr. -2; 8": "per es. -2; 8",
  "napr. 4; 5": "per es. 4; 5",
  "napr. 6; -9": "per es. 6; -9",
  "objem (v cm³)": "il volume (in cm³)",
  "obsah (v cm²)": "l'area (in cm²)",
  "obvod (v cm)": "il perimetro (in cm)",
  "otca": "del papà",
  "otec": "il papà",
  "pešo 50 %": "a piedi 50 %",
  "plávanie": "nuoto",
  "podstava": "base",
  "polomer $r = {@0}\\,\\text{cm}$": "raggio $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "la superficie totale (in cm²)",
  "povrch; objem": "superficie totale; volume",
  "priemer $d = {@0}\\,\\text{cm}$": "diametro $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "il quintuplo",
  "päťnásobok": "il quintuplo",
  "r – polomer": "r – raggio",
  "rovnaké, výsledok je kladný": "uguali, il risultato è positivo",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "la differenza tra {@0} del numero $x$ e il numero {@1}",
  "rôzne, výsledok je záporný": "diversi, il risultato è negativo",
  "slivka": "prugna",
  "stĺpcový diagram": "diagramma a colonne",
  "sčítaj": "somma",
  "tenis": "tennis",
  "tri štvrtiny": "tre quarti",
  "troch": "tre",
  "trojnásobku": "il triplo",
  "trojnásobok": "il triplo",
  "ušetril": "ha risparmiato",
  "ušetrila": "ha risparmiato",
  "vnuk": "il nipote",
  "vnuka": "del nipote",
  "vnučka": "la nipote",
  "vnučky": "della nipote",
  "výsek s uhlom α": "settore con angolo α",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} Di quanto la colonna “{@1}” è più alta della colonna “{@2}”? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} Calcola la sua superficie totale (in cm²) e il suo volume (in cm³), separali con un punto e virgola.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} Calcola {@1}.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0} e {@1} hanno risparmiato in tutto {@2} €. {@3} {@4} {@5} di {@6}. Quanti euro {@7} {@8}?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0} ha {@1} {@2} più di quanti ne abbia {@4}. Insieme hanno {@5} {@6}. Quanti anni ha {@7}?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0} ha $x$ euro, {@1} ${@2}x$ euro. Quante $x$ sono in tutto, cioè quale numero va nell'equazione $\\square\\, x = {@3}$?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0} ha ${@1} + {@2} = {@3}$ {@4}.",
  "{@0} má {@1} {@2}.": "{@0} ha {@1} {@2}.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "{@0} della somma del numero $x$ e del numero {@1}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0} significa moltiplicare per {@1}, non aggiungere {@2}.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}: $x$, {@1}: ${@2}x$. Equazione: $x + {@3}x = {@4}$, quindi ${@5}x = {@6}$ e $x = {@7}$. {@8} {@9} {@10} €.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}: ${@1}x = {@2}$. Dividiamo entrambi i membri per ${@3}$: $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "Moltiplichiamo numeratore per numeratore e denominatore per denominatore: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "Il termine ${@0}$ ha coefficiente ${@1}$, non dimenticare di contarlo.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "Mettiamo i termini con $x$ a sinistra e i numeri a destra: ${@0}{@1} = {@2}{@3}$, quindi ${@4} = {@5}$ e $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "Sposta i termini con $x$ in un membro e i numeri nell'altro. Alla fine dividi per il coefficiente di $x$.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "Termini con $x$: ${@0}{@1}{@2} = {@3}$. Numeri: ${@4}{@5} = {@6}$. Risultato: ${@7}$, quindi $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "I numeri sono {@0}. In che posizione si trova il numero centrale?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "I numeri stanno da parti opposte dello zero, perciò le loro distanze dallo zero si sommano, non si sottraggono.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "I numeri hanno segni diversi, perciò non sommare i loro valori assoluti, ma sottrai il minore dal maggiore. Il segno del risultato è quello del numero con il valore assoluto maggiore.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "Prima ordina i numeri dal più piccolo al più grande.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "Indichiamo i numeri con $x$, $x + 1${@0}. Equazione: ${@1}x + {@2} = {@3}$, quindi ${@4}x = {@5}$ e $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "Ordina i numeri dal più piccolo. Qual è il {@0}° numero nell'ordine?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "Ordina i numeri dal più piccolo. Quale numero si trova in questa posizione? Quella è la mediana.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "Il numero $a$ deve soddisfare $1 \\le a &lt; 10$, quindi prima della virgola ha una sola cifra.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "Il numero $a$ ha prima della virgola una sola cifra. L'esponente $n$ indica di quanti posti sposti la virgola.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "Il numero $q$ si ottiene moltiplicando i termini noti delle parentesi, non sommandoli.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "Il numero ${@0}$ moltiplica tutto il contenuto della parentesi, non solo $x$.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "Il numero sotto radice ha due cifre decimali, il risultato ne avrà una: prova $\\sqrt{{@0}}$ e dividi per 10.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "Il numero davanti alla parentesi moltiplica tutti e due i termini nella parentesi, non solo $x$, ma anche il termine noto.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "Il numero {@0} compare tre volte, gli altri numeri solo una volta. La moda è {@1}.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "Moltiplica per il numero davanti alla parentesi ogni termine al suo interno, con il suo segno. Poi somma i termini simili.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "Moltiplica per il numero davanti alla parentesi ogni termine nella parentesi, anche il termine noto alla fine.",
  "číslo o {@0} menšie ako polovica čísla $x$": "il numero minore di {@0} della metà del numero $x$",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "il numero che supera di {@0} {@1} del numero $x$",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "Quadrato di lato a più b diviso in quattro parti",
  "Štvornásobok": "Il quadruplo",
  "štvornásobku": "il quadruplo",
  "štvornásobok": "il quadruplo",
  "štyroch": "quattro",
  "Žiaci hlasovali o obľúbenom ovocí.": "Gli alunni hanno votato il frutto preferito.",
  "Žiaci uviedli svoj obľúbený šport.": "Gli alunni hanno indicato il loro sport preferito.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "“Minore di {@0}” significa sottrarre {@1} dalla metà, l'ordine è inverso.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "“Maggiore di {@0}” significa aggiungere {@1}, non sottrarre.",
  "ℕ – prirodzené": "ℕ – naturali",
  "ℚ – racionálne čísla": "ℚ – numeri razionali",
  "ℤ – celé čísla": "ℤ – numeri interi",
  "calcio": "calcio",
  "hockey": "hockey",
  "tennis": "tennis",
  "nuoto": "nuoto",
  "corsa": "corsa",
  "mela": "mela",
  "pera": "pera",
  "banana": "banana",
  "prugna": "prugna",
  "fragola": "fragola",
  "diagramma a colonne": "diagramma a colonne",
  "Lu": "Lu",
  "Ma": "Ma",
  "Me": "Me",
  "Gi": "Gi",
  "Ve": "Ve"
 }
});
