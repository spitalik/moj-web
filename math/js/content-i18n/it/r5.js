/* Italiano: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/r5/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "r5-prirodzene": {
   "title": "I numeri naturali e le loro proprietà",
   "summary": "Classi e ordini dei numeri grandi, confronto, numeri pari e dispari.",
   "theory": [
    "<p>I <strong>numeri naturali</strong> sono $1, 2, 3, 4, \\dots$, i numeri con cui contiamo gli oggetti. Il numero naturale più piccolo\n       è 1, il più grande non esiste: a ogni numero possiamo aggiungere 1 e otteniamo il suo <strong>successivo</strong>.\n       Il numero più piccolo di 1 è il <strong>precedente</strong>.</p>",
    "<p>Le cifre di un numero grande si dividono da destra in <strong>classi</strong> di tre: unità, migliaia, milioni.\n       In ogni classe ci sono centinaia, decine e unità. Il valore di una cifra dipende dal posto in cui si trova.</p>",
    {
     "fig": "r5-triedy",
     "caption": "Nel numero $3\\,042\\,705$ la cifra 4 vale $40\\,000$, perché si trova al posto delle decine di migliaia."
    },
    "<p>I <strong>numeri pari</strong> sono divisibili per due e finiscono con la cifra 0, 2, 4, 6 o 8. Gli altri numeri sono\n       <strong>dispari</strong>: finiscono con la cifra 1, 3, 5, 7 o 9. Per sapere se un numero è pari basta guardare l'ultima cifra.</p>"
   ],
   "examples": [
    {
     "task": "Con le cifre 5, 0, 8, 2 (usa ciascuna una volta) forma il numero di quattro cifre più grande e quello più piccolo.",
     "steps": [
      "Il più grande: mettiamo le cifre in ordine dalla più grande: $8\\,520$.",
      "Il più piccolo: le mettiamo in ordine dalla più piccola, ma all'inizio non ci può essere lo 0: $2\\,058$."
     ]
    },
    {
     "task": "Qual è il successivo e qual è il precedente del numero $499\\,999$?",
     "steps": [
      "Successivo: $499\\,999 + 1 = 500\\,000$.",
      "Precedente: $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "L'arrotondamento dei numeri",
   "summary": "Arrotondare alle decine, alle centinaia e alle migliaia, stimare il risultato.",
   "theory": [
    "<p>Quando <strong>arrotondiamo</strong> sostituiamo un numero con il numero «tondo» più vicino. Scriviamo il simbolo $\\doteq$\n       (si legge «è circa uguale a»): $3\\,467 \\doteq 3\\,470$ (alle decine).</p>",
    "<p><strong>Regola:</strong> guardiamo la cifra <em>subito a destra</em> dell'ordine a cui arrotondiamo.\n       Se è 0, 1, 2, 3 o 4, arrotondiamo <strong>per difetto</strong>. Se è 5, 6, 7, 8 o 9, arrotondiamo <strong>per eccesso</strong>.\n       Le cifre a destra diventano zeri.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "Sposta il numero e osserva a quale decina (pallino verde) e a quale centinaio (arco) è più vicino."
    },
    "<p><strong>Stima:</strong> prima del calcolo esatto possiamo arrotondare i numeri e stimare il risultato.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. La stima ci aiuta a scoprire un errore nel calcolo.</p>"
   ],
   "examples": [
    {
     "task": "Arrotonda il numero $72\\,649$ alle centinaia.",
     "steps": [
      "Al posto delle centinaia c'è 6, subito a destra c'è 4.",
      "4 è meno di 5, arrotondiamo per difetto: le centinaia restano 6.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "Arrotonda il numero $5\\,962$ alle decine.",
     "steps": [
      "Al posto delle decine c'è 6, a destra c'è 2: arrotondiamo per difetto.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "Alle centinaia sarebbe $6\\,000$, perché dopo le centinaia c'è 6."
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "I numeri romani",
   "summary": "Scrivere numeri grandi e anni, le regole della sottrazione, conversioni nei due sensi.",
   "theory": [
    "<p>I numeri romani: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. Il numero più grande che di solito si scrive con questi simboli è $3\\,999 = \\text{MMMCMXCIX}$.</p>",
    "<p><strong>Regole di scrittura:</strong></p>\n       <ol><li>I simboli si scrivono dal più grande al più piccolo e i loro valori si sommano: $\\text{MDCLX} = 1\\,660$.</li>\n       <li>I simboli I, X, C, M possono stare di seguito al massimo tre volte. V, L, D non si ripetono.</li>\n       <li>Un simbolo più piccolo prima di uno più grande si sottrae. Può essere solo I, X o C, e solo davanti ai due simboli maggiori più vicini.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "Le sei coppie in cui si sottrae. Altre coppie (per esempio IL o IC) sono sbagliate."
    },
    "<p>La <strong>conversione in numeri romani</strong> si fa ordine per ordine: migliaia, centinaia, decine, unità.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "Scrivi in numeri romani l'anno $2\\,026$.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "Quale numero è $\\text{CDXLIX}$?",
     "steps": [
      "Dividiamo in gruppi: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "Attenzione: 49 non è IL, ma XLIX.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "Le quattro operazioni e il loro ordine",
   "summary": "Addizione, sottrazione, moltiplicazione, divisione, parentesi e calcolo rapido.",
   "theory": [
    "<p>Nel calcolo di un'espressione rispettiamo l'<strong>ordine delle operazioni</strong>: prima le parentesi, poi moltiplicazioni e divisioni\n       (da sinistra a destra) e alla fine addizioni e sottrazioni (da sinistra a destra).</p>",
    {
     "fig": "r5-poradie",
     "caption": "L'ordine delle operazioni. Le operazioni dello stesso livello si eseguono da sinistra a destra."
    },
    "<p><strong>Calcolo rapido:</strong> nell'addizione e nella moltiplicazione possiamo scambiare i numeri e raggrupparli in un altro modo:\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       Aiuta anche la proprietà distributiva: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>Nomi:</strong> addendo + addendo = somma, minuendo − sottraendo = differenza, fattore · fattore = prodotto,\n       dividendo : divisore = quoziente. Il termine sconosciuto si trova con l'operazione inversa: se $\\square\\cdot 8 = 96$, allora $\\square = 96 : 8 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $120 - 6\\cdot(14 - 5)$.",
     "steps": [
      "Parentesi: $14 - 5 = 9$.",
      "Moltiplicazione: $6\\cdot 9 = 54$.",
      "Sottrazione: $120 - 54 = 66$.",
      "<strong>Risultato: 66</strong>"
     ]
    },
    {
     "task": "Calcola in modo rapido $5\\cdot 63\\cdot 20$.",
     "steps": [
      "Uniamo $5\\cdot 20 = 100$.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>Risultato: $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "Multipli e divisori",
   "summary": "Che cos'è un multiplo e un divisore di un numero, come trovarli e i criteri di divisibilità per 2, 3, 5 e 10.",
   "theory": [
    "<p>I <strong>multipli</strong> di un numero si ottengono moltiplicandolo per $1, 2, 3, \\dots$. I multipli del numero 6 sono\n       $6, 12, 18, 24, \\dots$: sono infiniti.</p>",
    "<p>Un <strong>divisore</strong> di un numero è un numero che lo divide senza resto. I divisori del numero 12 sono $1, 2, 3, 4, 6, 12$.\n       Li cerchiamo a coppie: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. Il numero 1 e il numero stesso sono sempre divisori.</p>",
    {
     "fig": "r5-delitele",
     "caption": "12 pallini si possono disporre nei rettangoli $1\\cdot 12$, $2\\cdot 6$ e $3\\cdot 4$. Le dimensioni sono i divisori del numero 12."
    },
    "<p><strong>Criteri di divisibilità:</strong> un numero è divisibile per <strong>2</strong> se finisce con la cifra 0, 2, 4, 6, 8;\n       per <strong>5</strong> se finisce con 0 o 5; per <strong>10</strong> se finisce con 0; per <strong>3</strong> se la\n       somma delle sue cifre è divisibile per tre.</p>"
   ],
   "examples": [
    {
     "task": "Trova tutti i divisori del numero 18.",
     "steps": [
      "Cerchiamo le coppie: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4 e 5 non sono divisori, poi le coppie si ripetono.",
      "<strong>Divisori: 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "Il numero $4\\,215$ è divisibile per tre?",
     "steps": [
      "Somma delle cifre: $4 + 2 + 1 + 5 = 12$.",
      "12 è divisibile per tre.",
      "<strong>Sì, $4\\,215$ è divisibile per tre.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "Le frazioni: le prime idee",
   "summary": "Parte di un intero, numeratore e denominatore, frazione di un numero, confronto di frazioni.",
   "theory": [
    "<p>Quando dividiamo un intero in parti <strong>uguali</strong>, una parte è una sua frazione: un mezzo $\\frac{1}{2}$,\n       un terzo $\\frac{1}{3}$, un quarto $\\frac{1}{4}$… La frazione $\\frac{3}{8}$ significa: dividiamo l'intero in 8 parti uguali e ne prendiamo 3.</p>",
    "<p>Il numero sotto la linea di frazione è il <strong>denominatore</strong>: dice in quante parti abbiamo diviso l'intero.\n       Il numero sopra la linea è il <strong>numeratore</strong>: dice quante parti prendiamo.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "Le frazioni $\\frac{1}{2}$, $\\frac{1}{4}$ e $\\frac{3}{8}$ di una torta e $\\frac{2}{5}$ di una striscia."
    },
    "<p><strong>Frazione di un numero:</strong> $\\frac{3}{4}$ di 20 si calcola dividendo 20 per il denominatore ($20 : 4 = 5$, cioè un quarto)\n       e moltiplicando per il numeratore ($5\\cdot 3 = 15$).<br>\n       <strong>Confronto:</strong> se il denominatore è uguale, è più grande la frazione con il numeratore maggiore: $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       Se il numeratore è uguale, è più grande la frazione con il denominatore minore: $\\frac{1}{3} &gt; \\frac{1}{5}$ (un terzo è un pezzo più grande di un quinto).</p>"
   ],
   "examples": [
    {
     "task": "Quanto sono $\\frac{2}{5}$ di 35?",
     "steps": [
      "Un quinto: $35 : 5 = 7$.",
      "Due quinti: $7\\cdot 2 = 14$.",
      "<strong>$\\frac{2}{5}$ di 35 sono 14.</strong>"
     ]
    },
    {
     "task": "Un terzo del percorso misura 4 km. Quanto è lungo tutto il percorso?",
     "steps": [
      "Tutto il percorso ha 3 terzi.",
      "$3\\cdot 4 = 12$.",
      "<strong>Tutto il percorso misura 12 km.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "Gli enti geometrici fondamentali",
   "summary": "Punto, retta, semiretta, segmento, circonferenza e cerchio.",
   "theory": [
    "<p>Il <strong>punto</strong> si indica con una lettera maiuscola (A, B, S). Per due punti distinti passa una e una sola <strong>retta</strong>:\n       è dritta e non ha né inizio né fine. Si indica con una lettera minuscola ($p$) oppure con due punti (la retta $AB$).</p>",
    "<p>La <strong>semiretta</strong> ha un inizio, ma non ha fine: la semiretta $AB$ comincia nel punto A e prosegue oltre il punto B.\n       Il <strong>segmento</strong> $AB$ è la parte di retta fra i punti A e B, ha due estremi e si può misurare.</p>",
    {
     "fig": "r5-utvary",
     "caption": "La linea tratteggiata mostra che la linea continua senza fine. A destra una circonferenza con centro S, raggio r e diametro d."
    },
    "<p>La <strong>circonferenza</strong> è una linea i cui punti hanno tutti la stessa distanza dal centro S: è il <strong>raggio</strong> $r$.\n       Il <strong>diametro</strong> $d$ passa per il centro ed è lungo il doppio: $d = 2\\cdot r$. Il <strong>cerchio</strong> è la circonferenza insieme a tutta la parte interna.</p>"
   ],
   "examples": [
    {
     "task": "Una circonferenza ha il diametro di 14 cm. Quanto misura il raggio?",
     "steps": [
      "Il raggio è la metà del diametro.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Quanti segmenti determinano 4 punti, di cui tre qualsiasi non stanno mai sulla stessa retta?",
     "steps": [
      "Punti A, B, C, D. Colleghiamo ciascuno con ciascun altro: AB, AC, AD, BC, BD, CD.",
      "<strong>Sono 6.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "Il perimetro del quadrato, del rettangolo e del triangolo",
   "summary": "Calcolo del perimetro, il lato mancante e il calcolo con unità diverse.",
   "theory": [
    "<p>Il <strong>perimetro</strong> di un poligono è la somma delle lunghezze di tutti i suoi lati. Qui lo indichiamo con $o$.</p>",
    {
     "fig": "r5-obvod",
     "caption": "Le formule del perimetro del quadrato, del rettangolo e del triangolo."
    },
    "<p><strong>Quadrato:</strong> $o = 4\\cdot a$. <strong>Rettangolo:</strong> $o = 2\\cdot(a + b)$.\n       <strong>Triangolo:</strong> $o = a + b + c$; il triangolo equilatero ha $o = 3\\cdot a$.</p>",
    "<p>Prima di sommare, tutte le lunghezze devono essere nella <strong>stessa unità di misura</strong>. Se un rettangolo ha i lati di $3\\,\\text{dm}$ e $12\\,\\text{cm}$,\n       prima trasformiamo $3\\,\\text{dm} = 30\\,\\text{cm}$ e poi $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Un triangolo ha i lati di 7 cm, 9 cm e 12 cm. Calcola il suo perimetro.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "Un rettangolo ha il perimetro di 50 m e un lato di 15 m. Quanto è lungo l'altro lato?",
     "steps": [
      "Metà del perimetro è $a + b = 50 : 2 = 25$.",
      "$b = 25 - 15 = 10$.",
      "<strong>L'altro lato misura $10\\,\\text{m}$.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "Misure di lunghezza, massa, capacità e tempo",
   "summary": "Equivalenze, misure composte e scelta dell'unità adatta.",
   "theory": [
    "<p><strong>Lunghezza:</strong> km, m, dm, cm, mm. <strong>Massa:</strong> t, kg, dag, g.\n       <strong>Capacità:</strong> hl, l, dl, ml. <strong>Tempo:</strong> giorno, ora (h), minuto (min), secondo (s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "Le scale delle unità. La freccia mostra con quante unità più piccole si sostituisce un'unità più grande."
    },
    "<p><strong>Verso un'unità più piccola</strong> moltiplichiamo: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>Verso un'unità più grande</strong> dividiamo: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       Una misura composta si trasforma per parti: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>Attenzione al tempo: non si conta per «dieci», ma per <strong>60</strong> (un'ora ha 60 minuti, un minuto 60 secondi) e un giorno ha <strong>24</strong> ore.</p>"
   ],
   "examples": [
    {
     "task": "Trasforma $3\\,\\text{l}\\ 4\\,\\text{dl}$ in decilitri.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "Il film è cominciato alle 18:40 ed è finito alle 20:15. Quanti minuti è durato?",
     "steps": [
      "Dalle 18:40 alle 19:00 ci sono 20 minuti.",
      "Dalle 19:00 alle 20:00 ci sono 60 minuti, dalle 20:00 alle 20:15 ci sono 15 minuti.",
      "$20 + 60 + 15 = 95$.",
      "<strong>Il film è durato 95 minuti.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "Risolvere i problemi",
   "summary": "Problemi con più passaggi, parti di un intero, somma e differenza, arrotondamento per eccesso.",
   "theory": [
    "<p>Per risolvere un problema: <strong>1.</strong> leggi il problema e scrivi che cosa sai e che cosa cerchi; <strong>2.</strong> pensa\n       in che ordine farai i calcoli; <strong>3.</strong> calcola; <strong>4.</strong> fai la prova o una stima;\n       <strong>5.</strong> scrivi la risposta con una frase completa.</p>",
    "<p>Il <strong>modello a segmenti</strong> aiuta nei problemi di somma e differenza. Se due persone hanno insieme 50 € e una ha 8 € in più,\n       togliamo prima la differenza: allora tutte e due hanno la stessa somma.</p>",
    {
     "fig": "r5-model",
     "caption": "Il modello a segmenti: $50 - 8 = 42$, $42 : 2 = 21$. Il più giovane ha 21 €, il più grande $21 + 8 = 29$ €."
    },
    "<p>Attenzione al <strong>resto</strong>: se devono salire in auto 23 bambini e in un'auto ce ne stanno 4, non bastano $23 : 4 = 5$ (resto 3) auto.\n       I 3 bambini che restano hanno bisogno di un'altra auto, quindi servono 6 auto.</p>"
   ],
   "examples": [
    {
     "task": "Lucia aveva 120 euro. Ha speso un terzo per le scarpe e 25 euro per i libri. Quanti euro le sono rimasti?",
     "steps": [
      "Un terzo di 120: $120 : 3 = 40$ euro.",
      "In tutto ha speso $40 + 25 = 65$ euro.",
      "Sono rimasti $120 - 65 = 55$ euro.",
      "<strong>Risposta: a Lucia sono rimasti 55 euro.</strong>"
     ]
    },
    {
     "task": "Il papà ha 42 anni ed è tre volte più vecchio del figlio. Quanti anni avrà il figlio fra 6 anni?",
     "steps": [
      "Il figlio adesso ha $42 : 3 = 14$ anni.",
      "Fra 6 anni: $14 + 6 = 20$.",
      "<strong>Risposta: il figlio avrà 20 anni.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$, perciò il risultato è $1\\,000\\cdot {@0} = {@1}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, perciò ${@3} : {@4} = {@5}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, perciò ${@3}\\cdot {@4} = {@5}$.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$, perciò $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Somma: ${@4} + {@5} = {@6}$ (in cifre romane {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$, perciò $b = {@2} - {@3} = {@4}$, il secondo lato misura ${@5}\\,\\text{{@6}}$.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$, il lato misura ${@2}\\,\\text{{@3}}$.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$, il terzo lato misura ${@4}\\,\\text{{@5}}$.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, il diametro è ${@2}\\,\\text{{@3}}$.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$, il perimetro è ${@4}\\,\\text{{@5}}$.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$, il perimetro è ${@3}\\,\\text{{@4}}$.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$, il raggio è ${@2}\\,\\text{{@3}}$.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (cioè ${@3}$), poi ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, resto {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. Gli altri numeri divisi per {@3} danno un resto.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Stima: ${@4} {@5} {@6} = {@7}$. (Il risultato esatto è ${@8}$.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "${@0}$ di {@1} è ${@2} : {@3} = {@4}$. ${@5}$ è ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ e aggiungiamo il resto: ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4: per difetto, 5 – 9: per eccesso. Sostituisci con zeri le cifre a destra.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = tre milioni quarantaduemilasettecentocinque",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (alle decine)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (alle centinaia)</span>",
  "Aké číslo je $\\text{{@0}}$?": "Che numero è $\\text{{@0}}$?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "Che valore ha il gruppo $\\text{{@0}}$?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "Che valore ha la cifra {@0} nel numero ${@1}$?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "Quale parte dell'intero formano le parti colorate? Scrivila come frazione nella forma a/b (per esempio 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "Qual è il perimetro del rettangolo (in {@0})?",
  "Aký je obvod obdĺžnika v centimetroch?": "Qual è il perimetro del rettangolo in centimetri?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "Senza la differenza di 8 € avrebbero tutti e due lo stesso: (50 − 8) : 2 = 21 €.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "Senza la differenza: ${@0} - {@1} = {@2}$, cioè il doppio di quanto ha il minore: ${@3} : 2 = {@4}$. {@5} Verifica: ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "Punti {@0}. Segmenti: {@1}. In tutto {@2}.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "L'intero è diviso in {@0} {@1} (denominatore), {@2} (numeratore): ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "L'intero ha {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, quindi ${@5}\\,\\text{{@6}}$.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "L'intero è formato da {@0} parti uguali. Moltiplica.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "Il viaggio in treno da Bratislava a Kosice dura circa",
  "Cez dva body vieme viesť jedinú priamku.": "Per due punti si può tracciare una sola retta.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "Somma delle cifre: ${@0} = {@1}$, è divisibile per tre.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "Somma delle cifre: ${@0} = {@1}$, non è divisibile per tre.",
  "Desatina": "Un decimo",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "Un giorno ha 24 ore: ${@0}\\cdot 24 = {@1}$, e ancora ${@2} + {@3} = {@4}$ ore.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "Non puoi semplicemente sommare giorni e ore. Prima trasforma {@0} {@1} in ore.",
  "Do hrnčeka sa zmestí asi": "In una tazza ci stanno circa",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "Al denominatore va il numero di tutte le parti, non solo di quelle non colorate.",
  "Do vane sa zmestí asi": "In una vasca da bagno ci stanno circa",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "Per riempire {@0} {@1} servono ${@2}\\,\\text{{@3}}$. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "Completa il numero mancante: $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "Completa il numero mancante: $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "Il secondo giorno non hanno percorso {@0} km, ma {@1} km più del primo giorno.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "Secondo giorno: ${@0} + {@1} = {@2}$ km. Terzo giorno: ${@3} : 2 = {@4}$ km. In tutto: ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "Due fratelli hanno insieme {@0} {@1}. Il maggiore ha {@2} {@3} più del minore. Quanti euro ha il fratello {@4}?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "Dodici puntini disposti in rettangoli",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "La coppia {@0} non si può usare: si può sottrarre solo I prima di V e X, X prima di L e C, C prima di D e M.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "Coppie: ${@0} = {@1}$. Divisori: {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "Coppie: ${@0} = {@1}$. Divisori: {@2}. Il numero ha solo due divisori.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "Per due punti diversi passa esattamente una retta.",
  "Dĺžka triedy je asi": "La lunghezza di un'aula è di circa",
  "Hmotnosť jablka je asi": "Una mela pesa circa",
  "Hmotnosť nákladného auta je asi": "Un camion pesa circa",
  "Hmotnosť žiaka 5. ročníka je asi": "Un alunno di 11 anni pesa circa",
  "Hrúbka zošita je asi": "Lo spessore di un quaderno è di circa",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "Cerca nella tabellina del {@0} l'ultimo risultato che non supera ancora {@1}.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "Cerchi {@0} numero, tu hai formato {@1}.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "È il contrario: il diametro è il doppio del raggio, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "Il numero ${@0}$ è divisibile per {@1}?",
  "Je číslo ${@0}$ párne alebo nepárne?": "Il numero ${@0}$ è pari o dispari?",
  "Jeden deň má 24 hodín.": "Un giorno ha 24 ore.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "Una parte è {@0}. Quanto fa ${@1}$ del numero {@2}?",
  "Koľko eur je {@0} z {@1} eur?": "Quanti euro sono {@0} di {@1} euro?",
  "Koľko eur má mladší brat?": "Quanti euro ha il fratello minore?",
  "Koľko eur má starší brat?": "Quanti euro ha il fratello maggiore?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "Quanti euro restano se dalla somma {@0} sottrai la differenza {@1}?",
  "Koľko eur {@0} spolu?": "Quanti euro {@0} in tutto?",
  "Koľko eur {@0} zostalo?": "Quanti euro {@0} sono rimasti?",
  "Koľko gramov váži celý koláč?": "Quanti grammi pesa tutta la torta?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "Quante ore ci sono in {@0} {@1} e {@2} {@3}?",
  "Koľko hodín majú {@0} {@1}?": "Quante ore ci sono in {@0} {@1}?",
  "Koľko je ${@0}$ z čísla {@1}?": "Quanto fa ${@0}$ del numero {@1}?",
  "Koľko je polovica obvodu, teda $a + b$?": "Quanto fa la metà del perimetro, cioè $a + b$?",
  "Koľko kilometrov meria celá cesta?": "Quanti chilometri misura tutto il percorso?",
  "Koľko kilometrov prešli druhý deň?": "Quanti chilometri hanno percorso il secondo giorno?",
  "Koľko kilometrov prešli tretí deň?": "Quanti chilometri hanno percorso il terzo giorno?",
  "Koľko kilometrov prešli za tri dni spolu?": "Quanti chilometri hanno percorso in tutto in tre giorni?",
  "Koľko litrov sa zmestí do celej nádrže?": "Quanti litri ci stanno in tutto il serbatoio?",
  "Koľko minút trvala celá cesta?": "Quanti minuti è durato tutto il viaggio?",
  "Koľko minút uplynie od {@0} do {@1}?": "Quanti minuti passano dalle {@0} alle {@1}?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "Quanti multipli di {@0} ci sono tra i numeri 1 e {@1} (compresi)?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "Quanti anni avrà {@0} tra {@1} {@2}?",
  "Koľko rokov má {@0} teraz?": "Quanti anni ha {@0} adesso?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Quanti segmenti determinano {@0} punti, di cui tre non stanno mai sulla stessa retta? (Ogni coppia di punti si unisce con un segmento.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Quanti segmenti determinano {@0} punti, di cui tre non stanno mai sulla stessa retta? (Ogni coppia di punti si unisce con un segmento.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "Quante volte bisogna prendere {@0} per ottenere {@1}?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "Il cerchio è la circonferenza insieme a tutta la parte interna.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "La circonferenza è solo una linea, il cerchio comprende anche la superficie interna.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "Una circonferenza ha raggio ${@0}\\,\\text{{@1}}$. Qual è il suo diametro (in {@2})?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "Una circonferenza ha diametro ${@0}\\,\\text{{@1}}$. Qual è il suo raggio (in {@2})?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "Quale cifra sta nel numero ${@0}$ subito a destra dell'ordine delle {@1}?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "Quali due numeri insieme danno $1\\,000$?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "Quali due numeri danno insieme un bel prodotto, 100?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "Qual è {@0} numero naturale che arrotondato alle {@1} è uguale a ${@2}$?",
  "Ktoré z čísel je násobkom čísla {@0}?": "Quale dei numeri è un multiplo di {@0}?",
  "Ktoré z čísel je {@0}?": "Quale dei numeri è {@0}?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "Qual è il multiplo più grande di {@0} che non è maggiore di {@1}?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "Quale scrittura del numero ${@0}$ in cifre romane è corretta?",
  "Mama": "La mamma",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "I denominatori sono uguali, decide il numeratore: ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "Passi a un'unità più piccola, perciò moltiplica.",
  "Meníš na väčšiu jednotku, preto deľ.": "Passi a un'unità più grande, perciò dividi.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "Il sottraendo non si trova con l'addizione. Dal minuendo sottrai la differenza.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "Il sottraendo si trova con la sottrazione: ${@0} - {@1} = {@2}$.",
  "Minul": "Ha speso",
  "Minula": "Ha speso",
  "Mladší má {@0} {@1}.": "Il minore ha {@0} {@1}.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "A ${@0}$ si arrotondano i numeri da ${@1}$ (per eccesso) a ${@2}$ (per difetto). {@3} è ${@4}$.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "In una fattoria hanno raccolto {@0} {@1}. In una confezione ci stanno {@2} uova. Quante confezioni servono per tutte le uova?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "Verso un'unità più piccola moltiplichiamo, verso un'unità più grande dividiamo.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "Al posto delle migliaia metti la cifra più piccola che non sia 0.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "In gita vanno {@0} {@1}. In una barchetta {@2} {@3} {@4}. Quante barchette servono perché tutti i bambini facciano il giro insieme?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "Per il resto serve ancora una confezione, in tutto {@0} {@1}.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "Per il resto serve ancora una barchetta, in tutto {@0} {@1}.",
  "Najmenšie": "Il più piccolo",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "Prima conta fino all'ora intera, poi aggiungi il resto. Un'ora ha 60 minuti.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "Prima trasforma i due numeri in cifre arabe, poi somma.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "Prima le stesse unità: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Poi $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "Prima calcola la parte della somma intera, poi somma tutte le spese e sottraile.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "Prima arrotonda ogni numero alle centinaia, solo dopo calcola.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "Prima trova l'età {@0} adesso dal dato {@1} {@2}, solo dopo aggiungi {@3}. {@4} tra {@5} {@6} non avrà più {@7} degli anni {@0}.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "Prima scopri quanto vale una parte (dividi per il denominatore), poi moltiplica per il numeratore.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "Prima scopri quanti anni ha adesso il figlio o la figlia (divisione), poi aggiungi.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "Prima la parentesi, poi la moltiplicazione, infine la sottrazione.",
  "Najväčšia číslica patrí na miesto tisícov.": "La cifra più grande va al posto delle migliaia.",
  "Najväčšie": "Il più grande",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "Disegna un modello a segmenti. Sottrai la differenza dalla somma: quello che resta i fratelli se lo dividono in parti uguali.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "Hai scritto solo la cifra. Il valore di una cifra dipende dal posto in cui si trova: aggiungi dopo di essa il giusto numero di zeri.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "Scrivi tutti i divisori del numero {@0}. Separali con il punto e virgola.",
  "Napíš {@0} čísla ${@1}$.": "Scrivi {@0} del numero ${@1}$.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "Il successivo è più grande di 1: ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "Il successivo è il numero più grande di 1.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "Il dividendo sconosciuto si trova con la moltiplicazione: ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "Il dividendo sconosciuto si trova con la moltiplicazione, non con la divisione: moltiplica il quoziente per il divisore.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "Il fattore sconosciuto si trova con la divisione: ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "Il fattore sconosciuto si trova con la divisione, non con la moltiplicazione: dividi il prodotto per il fattore noto.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "Alcuni segmenti li hai contati due volte. Il segmento AB è lo stesso di BA: conta ogni coppia di punti una volta sola.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "Trova l'ordine a cui arrotondi e spostati di un posto a destra.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "Multipli: {@0}, {@1}, {@2}, …, {@3}. L'ultimo è ${@4}\\cdot {@5} = {@6}$, il successivo ${@7}$ è già maggiore di {@8}. Sono {@9}.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "Il rettangolo ha due coppie di lati uguali.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "Un rettangolo ha perimetro ${@0}\\,\\text{{@1}}$ e un lato di ${@2}\\,\\text{{@3}}$. Quanto è lungo l'altro lato (in {@4})?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "Un rettangolo ha i lati di ${@0}\\,\\text{dm}$ e ${@1}\\,\\text{cm}$. Calcola il suo perimetro in centimetri.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "Il perimetro è il doppio della somma di due lati vicini.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "Il perimetro del rettangolo è $2\\cdot(a + b)$.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "Il perimetro contiene ogni lato due volte. Prima dividilo per due, solo dopo sottrai il lato noto.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "Perimetro del quadrato, del rettangolo e del triangolo",
  "Od obvodu odčítaj dĺžky známych strán.": "Dal perimetro sottrai le lunghezze dei lati noti.",
  "Od obvodu {@0} odčítaj {@1}.": "Dal perimetro {@0} sottrai {@1}.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "Hai sottratto correttamente la differenza dalla somma, ma i fratelli devono ancora dividere il resto in due parti uguali.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "Dalla somma {@0} sottrai il lato noto {@1}.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "Dalle {@0} alle {@1} ci sono {@2} min, dalle {@3} alle {@4} ci sono {@5} min. In tutto ${@6} + {@7} = {@8}$ minuti.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "Dalle {@0} alle {@1} sono passati {@2} minuti.",
  "Odčítaj": "Sottrai",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "Hai sottratto un solo lato. Dal perimetro sottrai tutti e due i lati noti.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "Hai sottratto solo i soldi per il gioco. Non dimenticare di sottrarre anche {@0} {@1} per il libro.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "Hai sottratto solo i soldi per il libro. Sottrai anche la somma per il gioco: è {@0} di tutti i soldi.",
  "Osmina": "Un ottavo",
  "Otec": "Il papà",
  "Podiel vynásob deliteľom.": "Moltiplica il quoziente per il divisore.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "Il raggio è più corto del diametro, perciò il diametro va diviso per due, non moltiplicato.",
  "Polovica": "La metà",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "La metà del perimetro è la somma dei due lati vicini. Sottrai ancora il lato noto.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "La metà del perimetro del rettangolo è la somma di due lati vicini.",
  "Polovicu": "la metà",
  "Polpriamka má jeden začiatočný bod.": "La semiretta ha un punto di origine.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "La semiretta ha origine in un punto e prosegue senza fine solo da una parte.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "La semiretta comincia in un punto e dall'altra parte prosegue senza fine.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "Dai un nome ai punti con delle lettere e scrivi con ordine tutte le coppie: prima con il punto A, poi con il punto B…",
  "Poradie operácií": "Ordine delle operazioni",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "Confronta le cifre da sinistra finché non trovi la prima diversa.",
  "Posledná číslica je {@0}, je párna.": "L'ultima cifra è {@0}, è pari.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "L'ultima cifra è {@0}, non è né 0 né 5.",
  "Posledná číslica je {@0}, nie je 0.": "L'ultima cifra è {@0}, non è 0.",
  "Posledná číslica je {@0}, nie je párna.": "L'ultima cifra è {@0}, non è pari.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "L'ultima cifra è {@0}, perciò il numero è {@1}.",
  "Posledná číslica je {@0}.": "L'ultima cifra è {@0}.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "Conosci {@0}, quindi l'intero è più grande. La parte va moltiplicata, non divisa.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "Attenzione, un denominatore più grande non significa una frazione più grande. Più sono le parti in cui dividi l'intero, più le parti sono piccole.",
  "Pozri sa iba na poslednú číslicu.": "Guarda solo l'ultima cifra.",
  "Pozri sa na poslednú číslicu.": "Guarda l'ultima cifra.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Guarda la cifra subito a destra dell'ordine a cui arrotondi: 0 – 4 per difetto, 5 – 9 per eccesso.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "Guarda bene: le due frazioni hanno lo stesso numeratore e lo stesso denominatore.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "Hai calcolato da sinistra a destra. La moltiplicazione ha la precedenza sulla sottrazione: prima moltiplica {@0} per il risultato della parentesi, solo dopo sottrai da {@1}.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "Hai calcolato da sinistra a destra. La moltiplicazione ha la precedenza sull'addizione: calcola ${@0}\\cdot {@1}$ prima di sommare.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "Hai calcolato come se la parentesi non ci fosse. Il numero {@0} moltiplica tutta la differenza tra parentesi: calcola prima la parentesi.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "Il precedente è più piccolo di 1: ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "Il precedente è il numero più piccolo di 1.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "Immagina l'oggetto e confrontalo con qualcosa che conosci (per esempio 1 kg di farina, 1 m – un passo lungo, 1 l – una bottiglia).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "Hai trasformato le ore solo in minuti. Ogni minuto ha ancora 60 secondi.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "Hai trasformato i secondi solo in minuti. Un'ora ha 60 minuti, perciò dividi ancora per sessanta.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "Trasforma ${@0}\\,\\text{dm}$ in centimetri.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "Trasforma ${@0}\\,\\text{{@1}}$ in {@2}.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "Trasforma i decimetri in centimetri ($1\\,\\text{dm} = 10\\,\\text{cm}$) e solo dopo calcola.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "Equivalenze delle unità di lunghezza, massa, capacità e tempo",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "Per la divisibilità per tre non decide l'ultima cifra. Somma tutte le cifre e verifica se la somma delle cifre è divisibile per tre.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "Per la divisibilità per {@0} decide solo l'ultima cifra. Guardala ancora una volta e confrontala con il criterio di divisibilità.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "Con il tempo non si trasforma a gruppi di dieci: un'ora ha 60 minuti e un minuto 60 secondi.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "Con il tempo non si trasforma a gruppi di cento: 1 {@0} = 60 {@1}, perciò dividi per sessanta.",
  "Priamka je nekonečná na obe strany.": "La retta è infinita da tutte e due le parti.",
  "Priamka má začiatok aj koniec.": "La retta ha un inizio e una fine.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "La retta non ha fine, la semiretta ha un inizio, il segmento ha un inizio e una fine.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "La retta non ha fine, perciò non ha nemmeno una lunghezza.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "La retta non ha né inizio né fine: da tutte e due le parti continuerebbe con una linea tratteggiata.",
  "Priamka, polpriamka, úsečka a kružnica": "Retta, semiretta, segmento e circonferenza",
  "Priamku môžeme odmerať pravítkom.": "Una retta si può misurare con il righello.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "Il diametro è più lungo del raggio, perciò il raggio va moltiplicato per due, non diviso.",
  "Priemer je dvakrát dlhší ako polomer.": "Il diametro è lungo il doppio del raggio.",
  "Priemer kružnice je polovica polomeru.": "Il diametro di una circonferenza è la metà del raggio.",
  "Pripočítaj": "Aggiungi",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "Aggiungi ancora {@0} {@1}: ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "Aggiungi {@0} {@1}: ${@2} + {@3}$.",
  "Pätina": "Un quinto",
  "Pätinu": "un quinto",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "Stesso denominatore: confronta i numeratori. Stesso numeratore: un denominatore più piccolo significa parti più grandi.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "Il triangolo equilatero ha 3 lati uguali.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "Hai diviso la somma in due parti uguali, ma i fratelli non hanno la stessa somma. Prima sottrai dalla somma la differenza di {@0} {@1}.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "Scomponiamo per ordini: {@0}. In tutto ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "Dividi la scrittura in gruppi di migliaia, centinaia, decine e unità. Le coppie come CM, XC, IV indicano una sottrazione.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "Decide la cifra a destra dell'ordine: con 5 o più si arrotonda per eccesso, con 4 o meno per difetto.",
  "Rozložíme po rádoch: {@0}.": "Scomponiamo per ordini: {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "Conta gli ordini da destra: all'ultimo posto ci sono le unità, prima di esse le decine, le centinaia, le migliaia…",
  "Rímske číslice s odčítaním": "Cifre romane con la sottrazione",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "S = centinaia, D = decine, J = unità di ogni classe",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "Prova a dividere: ${@0} : {@1} = {@2}$, resto {@3}. Un multiplo di {@4} si può dividere senza resto.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "Prova a dividere per 1, 2, 3, … e cerca le coppie il cui prodotto è {@0}.",
  "Spolu {@0} {@1}.": "In tutto {@0} {@1}.",
  "Spomeň si na malú násobilku čísla {@0}.": "Ricorda la tabellina del {@0}.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "Calcola il valore di questa scrittura: un simbolo più piccolo dopo uno più grande si aggiunge, quindi viene un altro numero.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "Conta tutte le parti: è il denominatore. Poi conta le parti colorate: è il numeratore.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "Hai contato le parti non colorate. Il numeratore dice quante parti sono colorate.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "La risposta giusta è {@0}: {@1}. Le altre scritture violano le regole o hanno un altro valore.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "Il maggiore ha ${@0} + {@1} = {@2}$ {@3}.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "I lati sono in unità diverse. Prima trasforma i decimetri in centimetri, solo dopo somma.",
  "Súčin vydeľ známym činiteľom.": "Dividi il prodotto per il fattore noto.",
  "Sčítaj ${@0} + {@1}$.": "Somma ${@0} + {@1}$.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "Somma due lati vicini: ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "Somma le lunghezze di tutti e tre i lati.",
  "Sčítaj hodnoty skupín {@0}.": "Somma i valori dei gruppi {@0}.",
  "Sčítaj všetky číslice čísla.": "Somma tutte le cifre del numero.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "Somma i lati noti: ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "Hai sommato solo due lati. Il rettangolo ha quattro lati: due di lunghezza $a$ e due di lunghezza $b$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "Hai sommato solo due lati. Il rettangolo ha quattro lati: moltiplica ancora per due la somma di due lati vicini.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "Hai sommato numeri in unità diverse. Prima trasforma {@0} {@1} in {@2}.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "Adesso: ${@0} : {@1} = {@2}$ {@3}. Tra {@4} {@5}: ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "Questo è l'ultimo multiplo di {@0}, non il numero dei multipli. Scopri quante volte hai dovuto aggiungere {@1} per arrivarci.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "Questo è il risultato esatto. Il problema chiede una stima: prima arrotonda i due numeri alle centinaia, solo dopo calcola.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "Questa è l'età {@0} adesso. Il problema chiede quanti anni avrà tra {@1} {@2}.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "Questi li ha il fratello {@0}. Chiediamo del fratello {@1}.",
  "Tretina": "Un terzo",
  "Tretinu": "un terzo",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "Il terzo giorno hanno percorso la metà di quanto hanno fatto il secondo giorno, non il primo.",
  "Triedy a rády čísla 3 042 705": "Classi e ordini del numero 3 042 705",
  "Trojuholník má iba tri strany, nie štyri.": "Il triangolo ha solo tre lati, non quattro.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "Un triangolo ha perimetro ${@0}\\,\\text{{@1}}$. Due suoi lati misurano ${@2}\\,\\text{{@3}}$ e ${@4}\\,\\text{{@5}}$. Quanto è lungo il terzo lato (in {@6})?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "Un triangolo ha i lati ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ e ${@4}\\,\\text{{@5}}$. Calcola il suo perimetro in {@6}.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "Degli escursionisti il primo giorno hanno percorso {@0} km. Il secondo giorno hanno percorso {@1} km più del primo giorno e il terzo giorno la metà del secondo giorno. Quanti chilometri hanno percorso in tre giorni?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Nel cestino ci sono {@0} {@1}. ${@2}$ di esse sono rosse. Quante mele sono rosse?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Nel cestino ci sono {@0} {@1}. ${@2}$ di esse sono rosse. Quante mele sono rosse?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "Il treno è partito alle {@0} ed è arrivato a destinazione alle {@1}. Quanti minuti è durato il viaggio?",
  "Vyber správny údaj: {@0} …": "Scegli il dato giusto: {@0} …",
  "Vydeľ ${@0} : {@1}$.": "Dividi ${@0} : {@1}$.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "Dividi e guarda il resto. Se resta qualcosa, ne serve ancora uno in più.",
  "Vydeľ {@0} menovateľom {@1}.": "Dividi {@0} per il denominatore {@1}.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "Dividi il numero per il denominatore e moltiplica il risultato per il numeratore.",
  "Vynásob ${@0}\\cdot {@1}$.": "Moltiplica ${@0}\\cdot {@1}$.",
  "Vynásob {@0} čitateľom {@1}.": "Moltiplica {@0} per il numeratore {@1}.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "Hai moltiplicato il lato per se stesso: quella è l'area del quadrato. Il perimetro è la somma delle lunghezze di tutti e quattro i lati.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "Hai moltiplicato i lati: quella è l'area, non il perimetro. Il perimetro è la somma delle lunghezze di tutti i lati.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "Calcola $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "Calcola ${@0} - {@1}\\cdot({@2} - {@3})$.",
  "Vypočítaj ${@0}\\cdot 100$.": "Calcola ${@0}\\cdot 100$.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "Calcola e scrivi il risultato in cifre arabe: $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "Calcola il perimetro di un rettangolo con i lati $a = {@0}\\,\\text{{@1}}$ e $b = {@2}\\,\\text{{@3}}$ (in {@4}).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcola il perimetro di un triangolo equilatero con il lato ${@0}\\,\\text{{@1}}$ (in {@2}).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcola il perimetro di un quadrato con il lato ${@0}\\,\\text{{@1}}$ (in {@2}).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "Calcola un giorno alla volta e alla fine somma tutto.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "Calcola in modo furbo $125\\cdot {@0}\\cdot 8$.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "Calcola in modo furbo $25\\cdot {@0}\\cdot 4$.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "Calcola in modo furbo ${@0}\\cdot {@1}$.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "Calcola la parentesi ${@0} + {@1}$.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "Calcola la parentesi ${@0} - {@1}$.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "Hai calcolato solo ${@0}$, cioè una parte. Moltiplicala ancora per il numeratore {@1}.",
  "Vyučovacia hodina trvá": "Un'ora di lezione dura",
  "Vzdialenosť z Bratislavy do Košíc je asi": "La distanza da Bratislava a Kosice è di circa",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "Trasforma l'unità più grande in quella più piccola e poi aggiungi l'altra parte.",
  "Výška dospelého človeka je asi": "L'altezza di un adulto è di circa",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "Hai sommato tutti i simboli. Ma un simbolo più piccolo prima di uno più grande si sottrae: per esempio IX è 9, non 11.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "Tutti i numeri hanno lo stesso numero di cifre, perciò li confrontiamo da sinistra. {@0} è ${@1}$.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "Osserva se la linea ha un inizio, una fine o nessuno dei due.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "Con le cifre {@0} forma {@1} numero di quattro cifre. Usa ogni cifra esattamente una volta.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "Hai dimenticato il terzo giorno. Il problema chiede tutti e tre i giorni.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "Hai scambiato i concetti: il successivo è più grande di 1, il precedente più piccolo di 1. Cerchi {@0}.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Hai scambiato i ruoli del numeratore e del denominatore: dividi il numero per il denominatore e moltiplica il risultato per il numeratore.",
  "Zaokrúhli ${@0}$ na stovky.": "Arrotonda ${@0}$ alle centinaia.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "Arrotonda i due numeri alle centinaia e stima il risultato: ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "Arrotonda il numero ${@0}$ alle {@1}.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "Hai arrotondato solo il risultato. Nella stima arrotonda prima ogni numero separatamente e poi calcola con i numeri arrotondati.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "Hai arrotondato a un altro ordine. Arrotondare alle {@0} significa sostituire con zeri tutte le cifre a destra dell'ordine delle {@1}.",
  "Zaokrúhľovanie na číselnej osi": "Arrotondamento sulla retta dei numeri",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "Scrivi in cifre romane il numero ${@0}$.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "Scrivi separatamente migliaia, centinaia, decine e unità. Ricorda: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "Scopri quante volte {@0} sta per intero in {@1}.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "Scopri in quale posto si trova la cifra (unità, decine, centinaia, migliaia…).",
  "Zlomky na koláčoch a páse": "Frazioni su torte e su una striscia",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "Le frazioni non sono uguali: confronta i loro denominatori.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "Le frazioni non sono uguali: confronta i loro numeratori.",
  "Zlomky sú rovnaké.": "Le frazioni sono uguali.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "Il segno è girato. Con lo stesso denominatore è maggiore la frazione che ha il numeratore maggiore.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "Un simbolo non si può ripetere quattro volte e si può sottrarre solo I prima di V e X, X prima di L e C, C prima di D e M.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "I simboli I, X, C non si possono ripetere quattro volte di fila. Per 4, 9, 40, 90, 400 e 900 usa la scrittura con la sottrazione.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "I simboli I, X, C, M possono stare di fila al massimo tre volte. Invece di quattro simboli uguali usa la sottrazione.",
  "Zvyšok sa delí na dve rovnaké časti.": "Il resto si divide in due parti uguali.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "La parentesi ha la precedenza. Poi divisione e moltiplicazione, l'addizione solo alla fine.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "Parentesi: ${@0} + {@1} = {@2}$. Divisione e moltiplicazione: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Addizione: ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "Parentesi: ${@0} - {@1} = {@2}$. Moltiplicazione: ${@3}\\cdot {@4} = {@5}$. Sottrazione: ${@6} - {@7} = {@8}$.",
  "cesty": "del percorso",
  "dcéra": "la figlia",
  "dcére": "la figlia",
  "dcéry": "della figlia",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "divisori di 12: 1, 2, 3, 4, 6, 12",
  "desatina": "un decimo",
  "desatinu": "un decimo",
  "desatiny": "un decimo",
  "dni": "giorni",
  "dní": "giorni",
  "euro": "euro",
  "hodinu": "ora",
  "koláč": "torta",
  "koláča": "della torta",
  "lodičiek": "barchette",
  "lodičky": "barchette",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "un simbolo più piccolo prima di uno più grande si sottrae – solo I prima di V, X; X prima di L, C; C prima di D, M",
  "meria": "misura",
  "miliónov": "unità di milione",
  "milióny": "milioni",
  "minul": "ha speso",
  "minula": "ha speso",
  "mladšieho": "minore",
  "mladší": "minore",
  "nadol": "per difetto",
  "nahor": "per eccesso",
  "najmenšie": "il più piccolo",
  "najväčšie": "il più grande",
  "napr. 1; 2; 4": "per es. 1; 2; 4",
  "napr. 2/5": "per es. 2/5",
  "napr. MCMXC": "per es. MCMXC",
  "nasledovníka": "il successivo",
  "nepárne": "dispari",
  "nie": "no",
  "nádrže": "del serbatoio",
  "obalov": "confezioni",
  "obaly": "confezioni",
  "odčítaj": "sottrai",
  "odčítaš": "sottrai",
  "osmina": "un ottavo",
  "osminu": "un ottavo",
  "osminy": "un ottavo",
  "polovica": "la metà",
  "polovice": "la metà",
  "polovicu": "la metà",
  "polpriamka": "semiretta",
  "polpriamka AB": "semiretta AB",
  "predchodcu": "il precedente",
  "priamka AB": "retta AB",
  "priemer d = 2 · r": "diametro d = 2 · r",
  "pripočítaj": "aggiungi",
  "pripočítaš": "aggiungi",
  "párne": "pari",
  "pásik": "striscia",
  "pätina": "un quinto",
  "pätinu": "un quinto",
  "pätiny": "un quinto",
  "päťkrát": "il quintuplo",
  "rokov": "anni",
  "roky": "anni",
  "rovnaké diely": "parti uguali",
  "rovnakých dielov": "parti uguali",
  "spolu 50 €": "in tutto 50 €",
  "staršia": "più grande",
  "staršieho": "maggiore",
  "starší": "maggiore",
  "stotisícov": "centinaia di migliaia",
  "syn": "il figlio",
  "syna": "del figlio",
  "synovi": "il figlio",
  "také časti": "parti così",
  "takých častí": "parti così",
  "tretina": "un terzo",
  "tretinu": "un terzo",
  "tretiny": "un terzo",
  "vajec": "uova",
  "vyfarbené sú {@0}": "ne sono colorate {@0}",
  "vyfarbený je 1": "ne è colorata 1",
  "vyfarbených je {@0}": "ne sono colorate {@0}",
  "váži": "pesa",
  "zmestia": "ci stanno",
  "zmestí": "ci stanno",
  "zátvorky": "parentesi",
  "zľava doprava": "da sinistra a destra",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} Perciò no, il resto della divisione è {@1}.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} Perciò sì: ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@0} ancora una volta {@1}: ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0} è $100 {@1} 1$. Moltiplica per cento e poi {@2} ancora una volta il numero.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} ha {@1} {@2}, {@3} rispetto a quanti ne ha {@5}. Quanti anni avrà {@6} tra {@7} {@8}?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0} non significa {@1} {@2}: {@3} di {@4} si calcola con la divisione: ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@0} di {@1}: ${@2} : {@3} = {@4}$. {@5} in tutto ${@6} + {@7} = {@8}$. Sono rimasti ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0} {@1} {@2} {@3}; {@5} {@4} per un gioco e {@6} {@7} per un libro. Quanti euro {@8} sono rimasti?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. Gli altri dati sono troppo grandi o troppo piccoli.",
  "Úsečka AB začína v bode A a končí v bode B.": "Il segmento AB comincia nel punto A e finisce nel punto B.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "Il segmento finisce nei due estremi e dopo di essi non continua.",
  "Úsečka má dva krajné body.": "Il segmento ha due estremi.",
  "Úsečka má konečnú dĺžku.": "Il segmento ha una lunghezza finita.",
  "Úsečkový model súčtu a rozdielu": "Modello a segmenti di somma e differenza",
  "Úsečku môžeme odmerať pravítkom.": "Un segmento si può misurare con il righello.",
  "áno": "sì",
  "úsečka AB": "segmento AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "Hai sottratto gli orari come numeri normali. Ma un'ora ha 60 minuti, non 100: conta prima fino all'ora intera.",
  "Červené sú {@0} jablká": "Le mele rosse sono {@0}",
  "Červených je {@0} jabĺk": "Le mele rosse sono {@0}",
  "Čiara má dva krajné body A a B – je to úsečka.": "La linea ha due estremi A e B: è un segmento.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "La linea non ha né inizio né fine: è una retta.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "La linea comincia nel punto A e dall'altra parte continua: è una semiretta.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "I numeratori sono uguali. Più sono le parti in cui dividiamo l'intero, più le parti sono piccole: ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "Che cosa c'è nella figura? La linea tratteggiata significa che la linea continua senza fine.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "Non basta scrivere i numeri uno accanto all'altro. Prima trasforma {@0} {@1} in {@2}, poi aggiungi {@3}.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "Hai scritto i numeri uno accanto all'altro, come se valesse 1 {@0} = 100 {@1}. Ma vale 1 {@2} = 60 {@3}.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "La cifra subito a destra dell'ordine delle {@0} è {@1}, perciò arrotondiamo {@2}: ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "La cifra a destra è {@0}. Arrotonda ${@1}$ alle {@2}.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "La cifra a destra dell'ordine delle {@0} è 5 o più: in questo caso si arrotonda per eccesso.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "La cifra a destra dell'ordine delle {@0} è minore di 5: in questo caso si arrotonda per difetto.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "La cifra {@0} sta al posto delle {@1}, perciò ha il valore ${@2}\\cdot {@3} = {@4}$.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "Ordiniamo le cifre dalla più piccola, ma lo 0 non può stare all'inizio, perciò va al secondo posto: ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "Ordiniamo le cifre dalla più piccola: ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "Ordiniamo le cifre dalla più grande alla più piccola: ${@0}$.",
  "Číslo": "Numero",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "Il numero non può cominciare con lo zero: non avrebbe quattro cifre. Al primo posto metti la cifra più piccola che non sia 0.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "Il numero {@0} è $100 {@1} 1$, perciò {@2} una volta il numero intero {@3}, non solo un'unità.",
  "čiara": "linea",
  "Šestina": "Un sesto",
  "Štvorec má 4 rovnaké strany.": "Il quadrato ha 4 lati uguali.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "Il quadrato ha quattro lati uguali, perciò dividi il perimetro per quattro, non per due.",
  "Štvrtina": "Un quarto",
  "Štvrtinu": "un quarto",
  "šestina": "un sesto",
  "šestinu": "un sesto",
  "šestiny": "un sesto",
  "štvrtina": "un quarto",
  "štvrtinu": "un quarto",
  "štvrtiny": "un quarto"
 }
});
