/* Italiano: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/r3/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "r3-cisla1000": {
   "title": "I numeri fino a 1 000",
   "summary": "Centinaia, decine e unità, la linea dei numeri e il confronto dei numeri di tre cifre.",
   "theory": [
    "<p>Un numero di tre cifre ha le <strong>centinaia (h)</strong>, le <strong>decine (da)</strong> e le <strong>unità (u)</strong>.\n       Il numero 472 ha 4 centinaia, 7 decine e 2 unità: $472 = 400 + 70 + 2$. Dieci centinaia fanno <strong>mille</strong>: $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "La linea dei numeri da 0 a 1 000. Il numero 350 sta a metà fra 300 e 400, il numero 720 è più vicino a 700."
    },
    "<p><strong>Confronto:</strong> prima confrontiamo le centinaia, se sono uguali le decine e alla fine le unità.\n       $538 &gt; 497$, perché 5 centinaia sono più di 4. $642 &lt; 648$, perché le centinaia e le decine sono uguali e $2 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Confronta i numeri 806 e 860.",
     "steps": [
      "Le centinaia sono uguali (8).",
      "Decine: 0 e 6, lo zero è meno.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "Scrivi il numero che ha 3 centinaia, 0 decine e 9 unità.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "Al posto delle decine scriviamo lo zero.",
      "<strong>È il numero 309.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "Addizione e sottrazione fino a 1 000",
   "summary": "A mente per parti e in colonna.",
   "theory": [
    "<p><strong>A mente</strong> calcoliamo per parti: $356 + 230$ = prima $356 + 200 = 556$, poi $556 + 30 = 586$.\n       Con le centinaia intere calcoliamo come con le unità: $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p><strong>In colonna</strong> scriviamo i numeri uno sotto l'altro, in modo che le unità siano sotto le unità, le decine sotto le decine e le centinaia sotto le centinaia.\n       Calcoliamo da destra: unità, decine, centinaia. Se la somma in una colonna supera 9, riportiamo 1 nella colonna a sinistra.</p>",
    {
     "fig": "r3-stlpec",
     "caption": "L'addizione in colonna $347 + 285 = 632$. I piccoli 1 in alto sono le decine e le centinaia riportate."
    },
    "<p>Una sottrazione si può sempre <strong>controllare con un'addizione</strong>: se $632 - 285 = 347$, allora deve valere $347 + 285 = 632$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $468 + 275$.",
     "steps": [
      "Unità: $8 + 5 = 13$, scrivo 3 e riporto 1.",
      "Decine: $6 + 7 + 1 = 14$, scrivo 4 e riporto 1.",
      "Centinaia: $4 + 2 + 1 = 7$.",
      "<strong>Risultato: 743</strong>"
     ]
    },
    {
     "task": "Calcola $700 - 340$.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "Prova: $360 + 340 = 700$. <strong>Risultato: 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "Moltiplicazione e divisione",
   "summary": "Tutte le tabelline, la moltiplicazione delle decine e la divisione con il resto.",
   "theory": [
    "<p>Le tabelline fino a $10 \\cdot 10$ si trovano nella tavola pitagorica: nella riga c'è il primo fattore, nella colonna il secondo, nel loro incrocio il prodotto.\n       La divisione è l'operazione inversa della moltiplicazione: da $6 \\cdot 7 = 42$ sappiamo che $42 : 6 = 7$ e anche $42 : 7 = 6$.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "La tavola pitagorica: la riga 6 e la colonna 7 si incontrano nel numero 42, quindi $6 \\cdot 7 = 42$."
    },
    "<p><strong>Moltiplicazione delle decine:</strong> $30 \\cdot 4$ sono 3 decine per 4, cioè 12 decine, quindi $120$.</p>",
    "<p><strong>Divisione con il resto:</strong> non tutte le divisioni sono esatte. $17 : 5 = 3$ con il <em>resto</em> di 2, perché $3 \\cdot 5 = 15$\n       e per arrivare a 17 mancano ancora 2. Il resto deve essere sempre minore del divisore.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $8 \\cdot 7$ e $56 : 8$.",
     "steps": [
      "Dalle tabelline: $8 \\cdot 7 = 56$.",
      "La divisione è l'inverso della moltiplicazione, quindi $56 : 8 = 7$."
     ]
    },
    {
     "task": "Esegui la divisione con il resto $29 : 4$.",
     "steps": [
      "Il multiplo di 4 più grande che non supera 29 è $7 \\cdot 4 = 28$.",
      "Resto: $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$, resto 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "Le parentesi e l'ordine delle operazioni",
   "summary": "Che cosa calcoliamo prima: parentesi, moltiplicazione e divisione, addizione e sottrazione.",
   "theory": [
    "<p>In un'espressione con più operazioni vale quest'ordine:</p>\n       <ol><li>prima calcoliamo ciò che è fra <strong>parentesi</strong>,</li>\n       <li>poi le <strong>moltiplicazioni e le divisioni</strong>,</li>\n       <li>alla fine le <strong>addizioni e le sottrazioni</strong> (da sinistra a destra).</li></ol>",
    "<p>Confronta: $2 + 3 \\cdot 4 = 2 + 12 = 14$, ma $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. Le parentesi cambiano il risultato!</p>",
    "<p>Con sole addizioni e sottrazioni procediamo da sinistra a destra: $20 - 5 - 3 = 15 - 3 = 12$. Se però una parte è fra parentesi,\n       la calcoliamo prima: $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $18 + 4 \\cdot 6$.",
     "steps": [
      "La moltiplicazione ha la precedenza: $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>Risultato: 42</strong>"
     ]
    },
    {
     "task": "Calcola $(15 - 7) \\cdot 3$.",
     "steps": [
      "Prima la parentesi: $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>Risultato: 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "Problemi con più passaggi",
   "summary": "Problemi che si risolvono con due o tre operazioni una dopo l'altra.",
   "theory": [
    "<p>Alcuni problemi non si risolvono con una sola operazione. Procediamo per passi: <strong>che cosa sappiamo</strong>,\n       <strong>che cosa dobbiamo scoprire prima</strong> e <strong>che cosa cerchiamo alla fine</strong>.</p>",
    "<p>Esempio: la mamma ha comprato 3 quaderni da 4 € e ha pagato con una banconota da 20 €. Quanti euro le hanno dato di resto?<br>\n       1° passaggio – prezzo dei quaderni: $3 \\cdot 4 = 12$ €.<br>2° passaggio – resto: $20 - 12 = 8$ €.<br>Risposta: alla mamma hanno dato 8 € di resto.</p>",
    "<p>I passaggi si possono anche unire in un'unica espressione: $20 - 3 \\cdot 4 = 20 - 12 = 8$ (la moltiplicazione ha la precedenza).\n       Alla fine controlliamo sempre se la risposta ha senso.</p>"
   ],
   "examples": [
    {
     "task": "Sull'autobus c'erano 34 persone. Alla fermata 12 persone sono scese e 9 persone sono salite. Quante persone ci sono adesso sull'autobus?",
     "steps": [
      "Dopo la discesa: $34 - 12 = 22$.",
      "Dopo la salita: $22 + 9 = 31$.",
      "<strong>Sull'autobus ci sono 31 persone.</strong>"
     ]
    },
    {
     "task": "Sofia ha 2 pacchetti da 8 adesivi e altri 5 sciolti. Quanti adesivi ha in tutto?",
     "steps": [
      "Nei pacchetti: $2 \\cdot 8 = 16$.",
      "In tutto: $16 + 5 = 21$.",
      "<strong>Sofia ha 21 adesivi.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "Il perimetro delle figure piane",
   "summary": "Il perimetro del triangolo, del quadrato e del rettangolo come somma delle lunghezze dei lati.",
   "theory": [
    "<p>Il <strong>perimetro</strong> di una figura è la lunghezza della linea che la circonda. Lo calcoliamo <strong>sommando le lunghezze di tutti i lati</strong>.\n       Qui indichiamo il perimetro con la lettera $o$.</p>",
    {
     "fig": "r3-obvod",
     "caption": "Il rettangolo ha due lati più lunghi e due più corti, il triangolo ha tre lati. Il perimetro è la somma di tutti i lati."
    },
    "<p><strong>Triangolo</strong> con i lati $a, b, c$: $o = a + b + c$.<br>\n       <strong>Quadrato</strong> con il lato $a$: $o = a + a + a + a = 4 \\cdot a$.<br>\n       <strong>Rettangolo</strong> con i lati $a, b$: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola il perimetro di un quadrato con il lato di $7\\,\\text{cm}$.",
     "steps": [
      "Il quadrato ha 4 lati uguali.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Un rettangolo ha i lati di $9\\,\\text{cm}$ e $4\\,\\text{cm}$. Qual è il suo perimetro?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "Misure di lunghezza, massa, capacità e tempo",
   "summary": "Dal millimetro al chilometro, grammo e chilogrammo, litro e decilitro, dal secondo alla settimana.",
   "theory": [
    "<p><strong>Lunghezza:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>Massa:</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>Capacità:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, quindi $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>Tempo:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 giorno = 24 h, 1 settimana = 7 giorni.</p>",
    "<p>Quando passiamo a un'unità <strong>più piccola</strong> il numero diventa più grande (moltiplichiamo), quando passiamo a un'unità <strong>più grande</strong> diventa più piccolo (dividiamo).\n       Per esempio $3\\,\\text{m} = 300\\,\\text{cm}$ e $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Trasforma $2\\,\\text{m}\\ 35\\,\\text{cm}$ in centimetri.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Il film è cominciato alle 17:40 ed è finito alle 19:10. Quanti minuti è durato?",
     "steps": [
      "Dalle 17:40 alle 18:00 ci sono 20 minuti.",
      "Dalle 18:00 alle 19:00 ci sono 60 minuti, dalle 19:00 alle 19:10 altri 10 minuti.",
      "$20 + 60 + 10 = 90$. <strong>Il film è durato 90 minuti.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "Tabelle e dati semplici",
   "summary": "Leggere i dati da una tabella e da un istogramma, confrontare e sommare.",
   "theory": [
    "<p>Spesso scriviamo i dati in una <strong>tabella</strong>. Nella prima riga ci sono i nomi (per esempio i giorni) e sotto i numeri.\n       Una gelateria ha annotato quanti gelati ha venduto:</p>\n       <table class=\"tbl\"><tr><th>giorno</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Gio</th><th>Ven</th></tr>\n       <tr><td>gelati</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>Gli stessi dati si possono disegnare in un <strong>istogramma</strong> (grafico a colonne). Più alta è la colonna, più grande è il numero.</p>",
    {
     "fig": "r3-graf",
     "caption": "La colonna più alta è quella di venerdì (18), la più bassa quella di martedì (8). Venerdì hanno venduto $18 - 8 = 10$ gelati in più che martedì."
    },
    "<p>Dai dati possiamo scoprire dove ce ne sono <strong>di più</strong> e <strong>di meno</strong>, <strong>di quanto</strong> differiscono due numeri\n       (sottrazione) e quanti sono <strong>in tutto</strong> (addizione).</p>"
   ],
   "examples": [
    {
     "task": "Quanti gelati hanno venduto in tutto lunedì e mercoledì (secondo la tabella qui sopra)?",
     "steps": [
      "Lunedì 12, mercoledì 15.",
      "$12 + 15 = 27$.",
      "<strong>In tutto hanno venduto 27 gelati.</strong>"
     ]
    },
    {
     "task": "Quanti gelati in più hanno venduto mercoledì rispetto a giovedì?",
     "steps": [
      "Mercoledì 15, giovedì 10.",
      "$15 - 10 = 5$.",
      "<strong>Mercoledì hanno venduto 5 gelati in più.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, perciò ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, perciò ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Verifica: ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Verifica: ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. Al posto delle {@4} c'è la cifra {@5}.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, poi ${@2} + {@3} = {@4}$. Risultato: ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1° passo – prezzo: ${@0} \\cdot {@1} = {@2}$ €. 2° passo – resto: ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, scrivo 3, riporto 1",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, scrivo 2, riporto 1",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "Se non te lo ricordi, scomponi l'operazione: per esempio $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "Quale cifra ha il numero {@0} al posto delle {@1}?",
  "Bez zátvoriek počítaj zľava doprava.": "Senza parentesi calcola da sinistra a destra.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "Senza parentesi calcoliamo da sinistra: ${@0} - {@1} = {@2}$, poi ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "Senza parentesi si calcola da sinistra a destra. Prima calcola ${@0} - {@1}$, solo dopo sottrai {@2}.",
  "Cesta vlakom k babke trvala 3 …": "Il viaggio in treno dalla nonna è durato 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "L'addendo mancante si trova con la sottrazione.",
  "Do hrnčeka sa zmestia asi 3 …": "In una tazza ci stanno circa 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "Completa il numero mancante: $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "Inserisci il segno giusto: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "Completa con l'unità adatta: {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "I due lati più lunghi: quanto fa $2 \\cdot {@0}$?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "I due lati più corti: quanto fa $2 \\cdot {@0}$?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "Due lati da {@0} cm insieme misurano $2 \\cdot {@1} = {@2}$. Per gli altri due lati restano ${@3} - {@4} = {@5}$, un lato misura ${@6} : 2 = {@7}\\,\\text{cm}$.",
  "Dvere sú vysoké asi 2 …": "Una porta è alta circa 2 …",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "Non sommare i valori. “Di quanto di più” è una differenza: sottrai il numero minore dal maggiore.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "Cerca il numero più piccolo (la colonna più bassa).",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "Cerca il numero più grande (la colonna più alta).",
  "Hľadaj suseda v číselnom rade.": "Cerca il vicino sulla retta dei numeri.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "Cerca nella tabellina del {@0} il multiplo più grande che sta ancora in {@1}. Il resto deve essere minore di {@2}.",
  "Jablko váži asi 150 …": "Una mela pesa circa 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "Qui l'unità {@0} è troppo piccola: {@1} {@2} sarebbe pochissimo.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "Qui l'unità {@0} è troppo grande: {@1} {@2} sarebbe moltissimo.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "Quanti centimetri misurano insieme due lati da {@0} cm?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "Quanti centimetri restano per gli altri due lati? Calcola ${@0} - {@1}$.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "Quante decine hai ottenuto? Aggiungi uno zero a questo numero.",
  "Koľko eur stál celý nákup?": "Quanti euro è costata tutta la spesa?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "Quanti euro di resto? Calcola ${@0} - {@1}$.",
  "Koľko je ${@0} - {@1}$?": "Quanto fa ${@0} - {@1}$?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "Quanti pezzi ci sono in tutti i pacchetti insieme?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "Quanto misura uno dei lati rimanenti? Calcola ${@0} : 2$.",
  "Koľko minút je od {@0} do {@1}?": "Quanti minuti ci sono dalle {@0} alle {@1}?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "Quanti minuti è durato l'allenamento in tutto? Calcola ${@0} + {@1}$.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "Quanti alberelli sono rimasti? Calcola ${@0} - {@1}$.",
  "Koľko stromčekov záhradník zasadil?": "Quanti alberelli ha piantato il giardiniere?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "Quante {@0} hanno in tutto i tre bambini? Calcola ${@1} + {@2} + {@3}$.",
  "Koľko {@0} má {@1}?": "Quante {@0} ha {@1}?",
  "Koľko {@0} {@1} {@2}?": "Qual è il numero di {@0} che {@1} {@2}?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "Quante persone ci sono sull'autobus dopo che altre sono salite?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "Quante persone sono rimaste sull'autobus dopo che alcune sono scese?",
  "Koľkokrát je {@0} v čísle {@1}?": "Quante volte {@0} sta nel numero {@1}?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "Quante volte {@0} {@1} sta in {@2} {@3}?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "Quale numero è minore di {@0} rispetto a {@1}?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "Quale numero è maggiore di {@0} rispetto a {@1}?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "Quale numero ha {@0} {@1}, {@2} {@3} e {@4} {@5}?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "Qual è il multiplo più grande di {@0} che sta ancora in {@1}?",
  "Lyžička sirupu má asi 5 …": "Un cucchiaino di sciroppo contiene circa 5 …",
  "Mravec je dlhý asi 5 …": "Una formica è lunga circa 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "Il numero più piccolo è {@0}, ed è {@1}.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "Prima moltiplicazione e divisione: ${@0} \\cdot {@1} = {@2}$ e ${@3} : {@4} = {@5}$. Poi ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "Prima la moltiplicazione: ${@0} \\cdot {@1} = {@2}$. Poi ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "Prima sottrai {@0}: quanto fa ${@1} - {@2}$?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "Prima trasforma l'unità più grande: ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "Prima trasforma {@0} in {@1} e poi aggiungi il resto.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Prima aggiungi {@0}: quanto fa ${@1} + {@2}$?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "Prima calcola quanti ce ne sono in tutti i pacchetti.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "Prima calcola quanti alberelli ha piantato.",
  "Najprv vypočítaj, čo je v zátvorke.": "Prima calcola quello che c'è tra parentesi.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "Prima scopri quante ne ha ogni bambino e poi somma tutto.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "Prima scopri quanto è costata tutta la spesa. Poi sottrai questa somma dalla banconota.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "Prima la parentesi: ${@0} + {@1} = {@2}$. Poi ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "Prima la parentesi: ${@0} - {@1} = {@2}$. Poi ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "Prima la parentesi: ${@0} {@1} {@2} = {@3}$. Poi ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "Prima la parentesi: quanto fa ${@0} + {@1}$?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "Prima la parentesi: quanto fa ${@0} - {@1}$?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "Prima la parentesi: quanto fa ${@0} {@1} {@2}$?",
  "Najväčšie číslo je {@0}, a to {@1}.": "Il numero più grande è {@0}, ed è {@1}.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "Il multiplo più grande di {@0} che non supera {@1} è ${@2} \\cdot {@3} = {@4}$. Resto: ${@5} - {@6} = {@7}$. Quindi ${@8} : {@9} = {@10}$, resto {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "Hai scritto solo il quoziente. Dopo il punto e virgola scrivi anche il resto.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "Non hai considerato la parentesi. Prima somma i numeri tra parentesi e solo dopo dividi.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "Non hai considerato la parentesi. Prima calcola ${@0} - {@1}$ e solo dopo sottrailo da {@2}.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "Non hai considerato la parentesi. Quello che c'è tra parentesi si calcola per primo, anche prima della moltiplicazione.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "Trova il giorno giusto e leggi il numero accanto.",
  "Nákladné auto váži asi 8 …": "Un camion pesa circa 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "Fai la moltiplicazione e la divisione prima della sottrazione.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "La moltiplicazione ha la precedenza sull'addizione e sulla sottrazione.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "Di quanto di più? Calcola ${@0} - {@1}$.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "Rettangolo e triangolo con le lunghezze dei lati",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "Il rettangolo ha 4 lati: due più lunghi e due più corti. Sommali tutti.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Un rettangolo ha perimetro ${@0}\\,\\text{cm}$ e un lato di ${@1}\\,\\text{cm}$. Quanto è lungo l'altro lato (in cm)?",
  "Obvod rozdeľ na 4 rovnaké časti.": "Dividi il perimetro in 4 parti uguali.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "Hai diviso il perimetro solo in due parti. Il quadrato ha quattro lati uguali.",
  "Obvod trojuholníka je súčet jeho troch strán.": "Il perimetro del triangolo è la somma dei suoi tre lati.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "Il perimetro di un quadrato è ${@0}\\,\\text{cm}$. Quanto è lungo il suo lato (in cm)?",
  "Obvod: koľko je ${@0} + {@1}$?": "Perimetro: quanto fa ${@0} + {@1}$?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "Dal perimetro sottrai i due lati noti e dividi a metà quello che resta.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "Dalle {@0} alle {@1} ci sono {@2} minuti, dalle {@3} alle {@4} altri {@5} minuti. In tutto ${@6} + {@7} = {@8}$ minuti.",
  "Od {@0} do {@1} je {@2} minút.": "Dalle {@0} alle {@1} ci sono {@2} minuti.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "Sottrai una alla volta centinaia, decine e unità. Controlla il risultato con l'addizione.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "Hai sottratto il prezzo di una sola cosa. Le cose comprate erano {@0}, prima calcola il prezzo di tutte.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "Hai sottratto il lato da {@0} cm una volta sola. Il rettangolo ha due lati così.",
  "Pi": "Ve",
  "Platil": "Ha pagato",
  "Platila": "Ha pagato",
  "Po": "Lu",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "Dopo la discesa: ${@0} - {@1} = {@2}$. Dopo la salita: ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "Aiuto: $5 \\cdot {@0} = {@1}$ e ancora {@2} volte {@3}, quindi ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "Confronta da sinistra: prima le centinaia, poi le decine, poi le unità.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "Poi sottrai {@0}: quanto fa ${@1} - {@2}$?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Poi aggiungi {@0}: quanto fa ${@1} + {@2}$?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "Conta prima i minuti fino all'ora intera e poi i minuti dopo.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "Calcola da sinistra: quanto fa ${@0} - {@1}$?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "Hai calcolato con 100. Per il tempo vale $1\\,\\text{{@0}} = {@1}$.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "Hai calcolato da sinistra a destra. La divisione ha la precedenza sulla sottrazione: prima calcola ${@0} : {@1}$.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "Hai calcolato da sinistra a destra. La moltiplicazione ha la precedenza: prima calcola ${@0} \\cdot {@1}$.",
  "Predané zmrzliny": "Gelati venduti",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Le posizioni precedenti sono uguali, decidono le {@0}: {@1} e {@2}. Perciò ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "Immagina la cosa. È piccola o grande? Dura poco o tanto?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "Trasforma: ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "Trasforma: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "Pagine lette",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "Aggiungi quelli in più: quanto fa ${@0} + {@1}$?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "Aggiungi una alla volta centinaia, decine e unità, oppure calcola in colonna.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "Aggiungi il resto: quanto fa ${@0} + {@1}$?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Aggiungi {@0}: quanto fa ${@1} + {@2}$?",
  "Písomné sčítanie 347 plus 285": "Addizione in colonna 347 più 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Decidono le {@0}: {@1} e {@2}. Perciò ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "Con le centinaia intere calcola come con le unità: 4 centinaia + 3 centinaia = 7 centinaia.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "Sei un multiplo di {@0} più in basso. Controlla quante volte hai aggiunto {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "Sei un multiplo di {@0} più in alto. Controlla quante volte hai aggiunto {@1}.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "Controlla tutti e due i lati: a sinistra calcola prima la parentesi, a destra prima la moltiplicazione.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "Ricorda quanti {@0} ci sono in $1\\,\\text{{@1}}$.",
  "St": "Me",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "Scrivi le centinaia al primo posto, le decine al secondo e le unità al terzo. Se manca qualcosa, scrivi 0.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "Le centinaia sono la prima cifra da sinistra, le unità l'ultima.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "Hai moltiplicato il lato per se stesso. Il perimetro è la somma di tutti e quattro i lati.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "Hai moltiplicato i lati. Il perimetro è la lunghezza della linea intorno alla figura: i lati vanno sommati.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "I due lati sembrano simili, ma la parentesi cambia l'ordine dei calcoli. Calcola i due lati separatamente.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "Somma lunedì e martedì: quanto fa ${@0} + {@1}$?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "Somma tutti i numeri. Aiuta trovare prima le coppie che danno un numero tondo.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "Hai sommato solo due lati. Il rettangolo ha quattro lati: aggiungi ogni lunghezza due volte.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "Hai sommato i numeri del testo. {@0} e {@1} non sono le quantità dei bambini, ma quanto un bambino ne ha in più o in meno. Prima scopri quante ne ha ogni bambino.",
  "Tabuľka násobilky do 10 krát 10": "Tabella della moltiplicazione fino a 10 per 10",
  "Taška zemiakov váži 5 …": "Una borsa di patate pesa 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "Ora completa: quanto fa ${@0} {@1} {@2}$?",
  "Tlesknutie trvá asi 1 …": "Un battito di mani dura circa 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "Questo è il prezzo di tutta la spesa. Scopri ancora quanti euro di resto hanno dato dalla banconota.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "Questo è solo il numero nei pacchetti. Aggiungi ancora i {@0} in più.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "Questi sono i due lati rimanenti insieme. Dividi ancora a metà.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "Ne ha tante solo {@0}. Chiediamo quante ne hanno tutti e tre i bambini insieme.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "Questi sono gli alberelli che il giardiniere ha piantato. Sottrai ancora quelli seccati.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "Un triangolo ha i lati ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ e ${@2}\\,\\text{cm}$. Qual è il suo perimetro (in cm)?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "L'allenamento è cominciato alle {@0} ed è finito alle {@1}. Quanti minuti è durato?",
  "Upečené koláče": "Dolci sfornati",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "Gli alberelli seccati sono diminuiti, perciò sottraili, non aggiungerli.",
  "Ut": "Ma",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "Sull'autobus c'erano {@0} persone. Alla fermata {@1} persone sono scese e {@2} persone sono salite. Quante persone ci sono ora sull'autobus?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "Nei pacchetti: ${@0} \\cdot {@1} = {@2}$. In tutto: ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "In gelateria hanno annotato quanti gelati hanno venduto.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "In qualche colonna hai sottratto la cifra più piccola dalla più grande, anche se la più grande era sotto. In quel caso bisogna prendere in prestito una decina dalla colonna vicina.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "In panetteria hanno annotato quanti dolci hanno sfornato.",
  "V piatok": "Venerdì",
  "V pondelok": "Lunedì",
  "V stredu": "Mercoledì",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "In questo giorno c'è il numero più piccolo. Cerchiamo il più grande.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "In questo giorno c'è il numero più grande. Cerchiamo il più piccolo.",
  "V utorok": "Martedì",
  "Vo vedre je 10 …": "Nel secchio ci sono 10 …",
  "Vo štvrtok": "Giovedì",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "Dividi con resto: ${@0} : {@1}$. Scrivi quoziente e resto separati da un punto e virgola (per es. 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "Calcola $({@0} + {@1}) : {@2}$.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "Calcola $({@0} {@1} {@2}) \\cdot {@3}$.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "Calcola ${@0} - ({@1} - {@2})$.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "Calcola ${@0} - {@1} - {@2}$.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "Calcola ${@0} \\cdot {@1} - {@2} : {@3}$.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "Calcola ${@0} {@1} {@2} \\cdot {@3}$.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "Calcola prima ${@0} \\cdot {@1}$ e poi aggiungi uno zero.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "Calcola i due lati separatamente. A sinistra comincia dalla parentesi, a destra dalla moltiplicazione.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "Calcola il perimetro del rettangolo (in cm).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "Sono scesi → sottrai. Sono saliti → aggiungi.",
  "Vyučovacia hodina trvá 45 …": "Un'ora di lezione dura 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "La distanza tra due città è di 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "A sinistra: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. A destra: ${@6} + {@7} = {@8}$. Perciò ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "Hai dimenticato la divisione. Da {@0} non sottrai {@1}, ma il risultato di ${@2} : {@3}$.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "Hai dimenticato lo zero al posto delle decine. Senza di esso le cifre si spostano e viene un altro numero.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "Hai dimenticato il riporto. Quando la somma in una colonna è 10 o più, scrivi solo le unità e aggiungi 1 alla colonna successiva a sinistra.",
  "Zabudol si pripočítať ešte ${@0}$.": "Hai dimenticato di aggiungere ancora ${@0}$.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "Hai contato solo due lati. Il quadrato ha quattro lati lunghi uguali.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "Piantati: ${@0} \\cdot {@1} = {@2}$. Rimasti: ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "Scopri di quanto sono diversi due numeri vicini.",
  "Zmení sa počet desiatok.": "Cambia il numero delle decine.",
  "Zmení sa počet stoviek.": "Cambia il numero delle centinaia.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "Il segno è girato al contrario. Confronta da sinistra: decide la prima posizione in cui i numeri sono diversi ({@0}).",
  "Zošit je dlhý asi 30 …": "Un quaderno è lungo circa 30 …",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "Giulia ha annotato quante pagine del libro ha letto.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Il resto è ${@0} - {@1}$. Scrivi quoziente e resto separati da un punto e virgola.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "Il resto {@0} è maggiore del divisore {@1}, quindi il numero {@2} sta in {@3} ancora una volta. Il resto deve essere sempre minore del divisore.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "Il giardiniere ha piantato {@0} {@1} da {@2} {@3}. {@4} {@5}. Quanti alberelli sono rimasti?",
  "balíčkov": "pacchetti",
  "balíčky": "pacchetti",
  "deň": "giorno",
  "gaštan": "castagna",
  "gaštanov": "castagne",
  "gaštany": "castagne",
  "kartičiek": "carte",
  "kartičku": "carta",
  "kartičky": "carte",
  "knihy": "libri",
  "kníh": "libri",
  "koláče": "dolci",
  "koláčov": "dolci",
  "lopty": "palloni",
  "lôpt": "palloni",
  "orech": "noce",
  "perá": "penne",
  "piatok": "venerdì",
  "pier": "penne",
  "podiel; zvyšok": "quoziente; resto",
  "pondelok": "lunedì",
  "predali": "hanno venduto",
  "prečítala Zuzka": "ha letto Giulia",
  "radov": "file",
  "rady": "file",
  "stoviek": "centinaia",
  "stovku": "centinaio",
  "stovky": "centinaia",
  "strany": "pagine",
  "streda": "mercoledì",
  "stredu": "mercoledì",
  "stromček uschol": "alberello si è seccato",
  "stromčekov": "alberelli",
  "stromčekov uschlo": "alberelli si sono seccati",
  "stromčeky": "alberelli",
  "stromčeky uschli": "alberelli si sono seccati",
  "strán": "pagine",
  "upiekli v pekárni": "hanno sfornato in panetteria",
  "utorok": "martedì",
  "v piatok": "venerdì",
  "v pondelok": "lunedì",
  "v stredu": "mercoledì",
  "v utorok": "martedì",
  "vo štvrtok": "giovedì",
  "zmrzliny": "gelati",
  "zmrzlín": "gelati",
  "zošitov": "quaderni",
  "zošity": "quaderni",
  "{@0} je v údajoch číslo {@1}.": "{@0} nei dati c'è il numero {@1}.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0} ha {@1} in meno di {@2}, non di {@3}. Controlla da chi sottrai.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0} ha {@1} {@2} da {@3} {@4} e ancora {@5} {@6} in più. Quante {@7} ha in tutto?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0} ha {@1} {@2}. {@3} ne ha {@4} più di {@5} e {@6} ne ha {@7} meno di {@8}. Quante {@9} hanno in tutto?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} per {@2} fanno {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0} {@1} {@2} {@3} da {@4} €. {@5} con una banconota da {@6} €. Quanti euro di resto {@7} hanno dato?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. In tutto: ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}Qual è il numero totale di {@1} che {@2} in tutti e cinque i giorni?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}Qual è il numero di {@1} che {@2} {@3}?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}Di quanto è più grande il numero di {@1} che {@2} {@3} rispetto a {@4}?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}In quale giorno {@1} meno {@2}?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}In quale giorno {@1} più {@2}?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "Hai sottratto gli orari come numeri normali. Un'ora ha solo 60 minuti: conta prima fino all'ora intera.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "Che cosa calcoli prima? Calcola ${@0} \\cdot {@1}$.",
  "Číselný rad od 0 do 1000": "Retta dei numeri da 0 a 1000",
  "Čísla klesajú vždy o {@0}: {@1}.": "I numeri diminuiscono sempre di {@0}: {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "Non sommare subito i numeri. Prima trasforma ${@0}$ nell'unità più piccola $\\text{{@1}}$.",
  "Čísla rastú vždy o {@0}: {@1}.": "I numeri crescono sempre di {@0}: {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "Hai solo sommato i numeri. {@0} volte {@1} è una moltiplicazione.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "Il numero {@0} ha {@1} {@2}. Quanto fa quindi ${@3} \\cdot {@4}$?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "Il numero {@0} lo scomponiamo in {@1}: {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "Hai letto dalla parte opposta. Le unità sono l'ultima cifra a destra.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "Hai letto dalla parte opposta. Le centinaia sono la prima cifra da sinistra.",
  "čokolád": "tavolette di cioccolato",
  "čokolády": "tavolette di cioccolato",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "Le persone che sono salite si sono aggiunte sull'autobus. Aggiungi il loro numero, non sottrarlo.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "Le persone che sono scese sono andate via dall'autobus. Sottrai il loro numero, non aggiungerlo.",
  "Št": "Gi",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "Il quadrato ha 4 lati uguali: ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "Un quadrato ha il lato di ${@0}\\,\\text{cm}$. Qual è il suo perimetro (in cm)?",
  "štvrtok": "giovedì",
  "„O koľko viac“ zistíš odčítaním.": "“Di quanto di più” si trova con la sottrazione.",
  "rettangolo": "rettangolo",
  "Gelati venduti": "Gelati venduti",
  "Pagine lette": "Pagine lette",
  "Dolci sfornati": "Dolci sfornati",
  "giorno": "giorno",
  "gelati": "gelati",
  "pagine": "pagine",
  "dolci": "dolci",
  "Lu": "Lu",
  "Ma": "Ma",
  "Me": "Me",
  "Gi": "Gi",
  "Ve": "Ve"
 }
});
