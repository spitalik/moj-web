/* Italiano: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/r6/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "r6-desatinne": {
   "title": "I numeri decimali e le operazioni con essi",
   "summary": "Scrittura, confronto e arrotondamento dei numeri decimali; addizione, sottrazione, moltiplicazione e divisione.",
   "theory": [
    "<p>In un <strong>numero decimale</strong> la virgola separa la parte intera da quella decimale. Nel numero $2{,}75$ ci sono 2 unità, 7 decimi e 5 centesimi,\n       cioè $2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. Gli zeri alla fine della parte decimale si possono aggiungere o togliere: $2{,}4 = 2{,}40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "Un tratto della retta dei numeri da 2 a 3. Fra due numeri interi ci sono 10 decimi e 100 centesimi."
    },
    "<p><strong>Addizione e sottrazione:</strong> scriviamo i numeri in colonna in modo che le <em>virgole siano una sotto l'altra</em> e completiamo i posti mancanti con degli zeri.\n       <strong>Moltiplicazione:</strong> moltiplichiamo come con i numeri interi e il risultato ha tante cifre decimali quante ne hanno in tutto i due fattori: $1{,}2\\cdot 0{,}3 = 0{,}36$.\n       Moltiplicare per 10, 100, 1 000 sposta la virgola di 1, 2, 3 posti verso destra, dividere verso sinistra.</p>",
    "<p><strong>Divisione per un numero naturale:</strong> dividiamo come al solito e scriviamo la virgola nel quoziente nel momento in cui la superiamo nel dividendo: $7{,}5 : 3 = 2{,}5$.\n       <strong>Arrotondamento:</strong> guardiamo la cifra subito dopo il posto a cui arrotondiamo. Se è da 0 a 4 arrotondiamo per difetto, se è da 5 a 9 per eccesso: $3{,}462 \\doteq 3{,}5$ (ai decimi).</p>"
   ],
   "examples": [
    {
     "task": "Calcola $12{,}5 + 3{,}78$.",
     "steps": [
      "Allineiamo le virgole: $12{,}50 + 3{,}78$.",
      "Sommiamo ordine per ordine: $12{,}50 + 3{,}78 = 16{,}28$.",
      "<strong>Risultato: 16,28</strong>"
     ]
    },
    {
     "task": "Calcola $2{,}4\\cdot 1{,}5$.",
     "steps": [
      "Senza virgole: $24\\cdot 15 = 360$.",
      "I fattori hanno in tutto 2 cifre decimali, quindi il risultato è $3{,}60 = 3{,}6$.",
      "<strong>Risultato: 3,6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "Le frazioni e il loro uso",
   "summary": "Che cos'è una frazione, parte di un intero, semplificazione e ampliamento, trasformazione in numero decimale, confronto.",
   "theory": [
    "<p>La <strong>frazione</strong> $\\frac{a}{b}$ descrive una parte di un intero: dividiamo l'intero in $b$ parti uguali (<em>denominatore</em>) e ne prendiamo $a$ (<em>numeratore</em>).\n       La linea di frazione significa divisione: $\\frac{3}{4} = 3 : 4 = 0{,}75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "Le parti colorate dei cerchi: un mezzo, tre quarti e tre ottavi."
    },
    "<p><strong>Frazione di un numero:</strong> $\\frac{3}{4}$ di 20 si calcola dividendo 20 per il denominatore e moltiplicando per il numeratore: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>Ampliamento e semplificazione:</strong> se moltiplichiamo o dividiamo numeratore e denominatore per lo stesso numero (diverso da zero), il valore della frazione non cambia:\n       $\\frac{12}{18} = \\frac{2}{3}$ (semplifichiamo per sei). Una frazione è <em>ridotta ai minimi termini</em> quando non si può più semplificare.\n       Due frazioni si confrontano più facilmente quando le portiamo allo stesso denominatore.</p>"
   ],
   "examples": [
    {
     "task": "Quanto sono $\\frac{2}{5}$ di 35?",
     "steps": [
      "Un quinto: $35 : 5 = 7$.",
      "Due quinti: $7\\cdot 2 = 14$.",
      "<strong>Risultato: 14</strong>"
     ]
    },
    {
     "task": "Confronta le frazioni $\\frac{3}{4}$ e $\\frac{5}{6}$.",
     "steps": [
      "Il denominatore comune è 12: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$, quindi $\\frac{3}{4} &lt; \\frac{5}{6}$."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "Divisibilità, numeri primi e numeri composti",
   "summary": "Divisore e multiplo, criteri di divisibilità, numeri primi, numeri composti e scomposizione in fattori primi.",
   "theory": [
    "<p>Il numero $a$ è <strong>divisibile</strong> per il numero $b$ se la divisione $a : b$ non dà resto. In questo caso $b$ è un <em>divisore</em> di $a$ e $a$ è un <em>multiplo</em> di $b$.\n       Per esempio i divisori del numero 12 sono 1, 2, 3, 4, 6 e 12.</p>",
    "<p><strong>Criteri di divisibilità.</strong> Un numero è divisibile per</p>\n       <ul><li><strong>2</strong> se la sua ultima cifra è pari (0, 2, 4, 6, 8),</li>\n       <li><strong>3</strong> se la somma delle sue cifre è divisibile per 3; per <strong>9</strong> se la somma delle cifre è divisibile per 9,</li>\n       <li><strong>4</strong> se il numero formato dalle ultime due cifre è divisibile per 4,</li>\n       <li><strong>5</strong> se finisce con 0 o 5; per <strong>10</strong> se finisce con 0,</li>\n       <li><strong>6</strong> se è divisibile sia per 2 sia per 3.</li></ul>",
    "<p>Un <strong>numero primo</strong> è un numero naturale che ha esattamente due divisori: 1 e se stesso (2, 3, 5, 7, 11, …).\n       Un <strong>numero composto</strong> ha più di due divisori (4, 6, 8, 9, …). Il numero 1 non è né primo né composto.\n       Ogni numero composto si può scomporre in un prodotto di numeri primi (<em>fattori primi</em>): $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "Il crivello di Eratostene: fra i numeri da 1 a 60 cancelliamo i multipli di 2, 3, 5 e 7 (tranne loro stessi). Restano i numeri primi, che sono colorati."
    }
   ],
   "examples": [
    {
     "task": "Il numero 4 716 è divisibile per 3? E per 4?",
     "steps": [
      "Somma delle cifre: $4 + 7 + 1 + 6 = 18$, e 18 è divisibile per 3, quindi <strong>sì</strong>.",
      "Le ultime due cifre formano 16 e $16 : 4 = 4$, quindi è divisibile anche per 4: <strong>sì</strong>."
     ]
    },
    {
     "task": "Scomponi in fattori primi il numero 90.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, 5 è un numero primo.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "Massimo comune divisore e minimo comune multiplo",
   "summary": "MCD e mcm con la scomposizione in fattori primi, numeri primi fra loro e problemi.",
   "theory": [
    "<p>Il <strong>massimo comune divisore</strong> dei numeri $a$, $b$ (si scrive $D(a, b)$ oppure MCD) è il numero più grande per cui sono divisibili entrambi i numeri.\n       Il <strong>minimo comune multiplo</strong> ($n(a, b)$ oppure mcm) è il più piccolo numero diverso da zero che è multiplo di entrambi i numeri.</p>",
    {
     "fig": "r6-strom",
     "caption": "La scomposizione in fattori primi dei numeri 60 e 84. In comune ci sono 2, 2 e 3, quindi MCD(60, 84) = 12; mcm(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>Metodo della scomposizione:</strong> scomponiamo entrambi i numeri in fattori primi. Il MCD è il prodotto dei fattori primi <em>comuni</em> (ciascuno tante volte quante compare in entrambi).\n       Il mcm è il prodotto di <em>tutti</em> i fattori primi che compaiono almeno in uno dei numeri (ciascuno tante volte quante compare nel numero in cui ce n'è di più).\n       Un controllo utile: $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>",
    "<p>I numeri il cui MCD è 1 si dicono <strong>primi fra loro</strong> (per es. 8 e 15). Se hanno un divisore comune maggiore di 1, <strong>non sono primi fra loro</strong>.\n       Usiamo il MCD quando dividiamo qualcosa nelle parti uguali più grandi possibili; il mcm quando cerchiamo quando qualcosa che si ripete si incontra di nuovo.</p>"
   ],
   "examples": [
    {
     "task": "Trova $D(24, 36)$ e $n(24, 36)$.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "MCD: $2^2\\cdot 3 = 12$.",
      "mcm: $2^3\\cdot 3^2 = 72$.",
      "Controllo: $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "Due semafori diventano verdi nello stesso momento. Il primo cambia colore con un ciclo di 40 secondi, il secondo di 60 secondi. Fra quanti secondi saranno di nuovo insieme all'inizio del ciclo?",
     "steps": [
      "Cerchiamo il minimo comune multiplo: $n(40, 60)$.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, quindi $n = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>Fra 120 secondi (2 minuti).</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "I numeri interi e i numeri negativi",
   "summary": "Numeri positivi e negativi sulla retta dei numeri, opposto, valore assoluto, confronto, addizione e sottrazione.",
   "theory": [
    "<p>I <strong>numeri interi</strong> sono $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ I numeri negativi si usano per esempio per le temperature sotto zero ($-5\\,{}^\\circ\\mathrm{C}$),\n       per un debito o per l'altitudine sotto il livello del mare. Lo zero non è né positivo né negativo.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "I numeri 4 e −4 sono opposti: si trovano alla stessa distanza dallo zero, da parti opposte. Entrambi hanno valore assoluto 4."
    },
    "<p>L'<strong>opposto</strong> del numero $a$ è $-a$ (di 4 è $-4$, di $-7$ è 7). Il <strong>valore assoluto</strong> $|a|$ è la distanza del numero dallo zero: $|-6| = 6$, $|6| = 6$.\n       <strong>Confronto:</strong> sulla retta dei numeri è maggiore il numero che si trova più a destra. Per questo $-2 &gt; -5$ e ogni numero negativo è minore di 0.</p>",
    "<p><strong>Addizione e sottrazione:</strong> aggiungere un numero positivo significa spostarsi sulla retta verso destra, uno negativo verso sinistra.\n       Sottrarre un numero è lo stesso che aggiungere il suo opposto: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $-8 + 3$.",
     "steps": [
      "Partiamo da $-8$ e ci spostiamo di 3 verso destra.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "Al mattino c'erano $-6\\,{}^\\circ\\mathrm{C}$, a mezzogiorno $2\\,{}^\\circ\\mathrm{C}$. Di quanti gradi è aumentata la temperatura?",
     "steps": [
      "Differenza: $2 - (-6) = 2 + 6 = 8$.",
      "<strong>La temperatura è aumentata di 8 °C.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "L'angolo e la misura degli angoli",
   "summary": "Tipi di angoli, goniometro, gradi e primi, angoli adiacenti e opposti al vertice, calcoli con gli angoli.",
   "theory": [
    "<p>Un <strong>angolo</strong> è formato da due semirette (i <em>lati</em>) con l'origine in comune (il <em>vertice</em>). L'ampiezza di un angolo si misura in <strong>gradi</strong>;\n       un grado ha 60 primi: $1^\\circ = 60'$. Gli angoli si indicano con le lettere greche $\\alpha, \\beta, \\gamma$ oppure con la scrittura $\\angle AVB$.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "L'angolo acuto è minore di 90°, quello retto misura 90°, quello ottuso è fra 90° e 180°, quello piatto misura 180°."
    },
    "<p><strong>Misurare con il goniometro:</strong> mettiamo il centro del goniometro sul vertice dell'angolo, lo zero su un lato e leggiamo sulla scala dove passa l'altro lato.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "Il goniometro appoggiato a un angolo di 50°."
    },
    "<p>Gli <strong>angoli adiacenti</strong> hanno un lato in comune e gli altri due lati formano una retta; la loro somma è $180^\\circ$.\n       Gli <strong>angoli opposti al vertice</strong> si formano uno di fronte all'altro quando due rette si incrociano e sono congruenti.\n       Quando sommiamo gli angoli, sommiamo separatamente i gradi e i primi; 60 primi si cambiano in 1 grado.</p>"
   ],
   "examples": [
    {
     "task": "L'angolo $\\alpha$ misura $48^\\circ$. Quanto misura l'angolo adiacente?",
     "steps": [
      "Gli angoli adiacenti insieme misurano $180^\\circ$.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>L'angolo adiacente misura 132°.</strong>"
     ]
    },
    {
     "task": "Somma $35^\\circ\\,40' + 27^\\circ\\,35'$.",
     "steps": [
      "Gradi: $35 + 27 = 62$, primi: $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$, quindi in tutto $63^\\circ\\,15'$."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "I triangoli e le loro proprietà",
   "summary": "Somma degli angoli del triangolo, tipi di triangoli rispetto ai lati e agli angoli, disuguaglianza triangolare.",
   "theory": [
    "<p>Il <strong>triangolo</strong> $ABC$ ha tre vertici, tre lati $a = |BC|$, $b = |AC|$, $c = |AB|$ e tre angoli interni $\\alpha, \\beta, \\gamma$.\n       La <strong>somma degli angoli interni</strong> di ogni triangolo è $\\alpha + \\beta + \\gamma = 180^\\circ$.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "In alto la classificazione rispetto ai lati (i trattini indicano i lati uguali), in basso rispetto agli angoli."
    },
    "<p><strong>Rispetto ai lati:</strong> scaleno (tutti i lati diversi), isoscele (due lati uguali, gli angoli alla base sono congruenti),\n       equilatero (tutti i lati uguali, ogni angolo misura $60^\\circ$).\n       <strong>Rispetto agli angoli:</strong> acutangolo (tutti gli angoli acuti), rettangolo (un angolo retto), ottusangolo (un angolo ottuso).</p>",
    "<p><strong>Disuguaglianza triangolare:</strong> la somma delle lunghezze di due lati qualsiasi è sempre maggiore della lunghezza del terzo lato.\n       Basta verificare che i due lati più corti insieme siano più lunghi del lato più lungo. Per esempio con i lati di 3 cm, 4 cm e 8 cm non si può costruire un triangolo, perché $3 + 4 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "In un triangolo $\\alpha = 52^\\circ$ e $\\beta = 71^\\circ$. Calcola $\\gamma$.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "Si può costruire un triangolo con i lati di 5 cm, 6 cm e 10 cm?",
     "steps": [
      "I due lati più corti: $5 + 6 = 11$.",
      "$11 &gt; 10$, la disuguaglianza vale.",
      "<strong>Sì, si può.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "Perimetro e area del quadrato e del rettangolo",
   "summary": "Formule del perimetro e dell'area, calcolo del lato mancante, unità di superficie e loro equivalenze.",
   "theory": [
    "<p>Il <strong>perimetro</strong> è la lunghezza del contorno di una figura e si misura in unità di lunghezza (mm, cm, m). L'<strong>area</strong> indica quanti quadretti\n       con il lato di 1 unità stanno nella figura; si misura in unità di superficie ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$).</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "Nel rettangolo di 5 cm × 3 cm stanno 3 file da 5 quadretti con area di 1 cm², in tutto 15 cm²."
    },
    "<p><strong>Rettangolo</strong> con i lati $a$, $b$: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       <strong>Quadrato</strong> con il lato $a$: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       Se conosciamo l'area e un lato del rettangolo, l'altro lato si ottiene con una divisione: $b = S : a$.</p>",
    "<p><strong>Unità di superficie:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       Per le unità di superficie il rapporto è 100, non 10, perché un quadrato con il lato di 1 cm contiene $10\\cdot 10$ quadretti con il lato di 1 mm.</p>"
   ],
   "examples": [
    {
     "task": "Un giardino ha la forma di un rettangolo di 14 m × 9 m. Quanti metri di rete servono per recintarlo e qual è la sua area?",
     "steps": [
      "Perimetro: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "Area: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>Servono 46 m di rete, il giardino ha un'area di 126 m².</strong>"
     ]
    },
    {
     "task": "Un quadrato ha il perimetro di 36 cm. Qual è la sua area?",
     "steps": [
      "Lato: $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "La simmetria assiale",
   "summary": "Il simmetrico di un punto e di una figura nella simmetria assiale, figure simmetriche e i loro assi.",
   "theory": [
    "<p>La <strong>simmetria assiale</strong> con asse $o$ associa a ogni punto $A$ la sua <em>immagine</em> $A'$ in modo che il segmento $AA'$ sia perpendicolare all'asse\n       e l'asse lo divida a metà. Il punto $A$ e la sua immagine sono quindi alla stessa distanza dall'asse, ciascuno da una parte diversa. I punti dell'asse corrispondono a se stessi.</p>",
    {
     "fig": "r6-osova",
     "caption": "La figura blu e la sua immagine (verde) rispetto all'asse o. Il punto A è 4 quadretti a sinistra dell'asse, la sua immagine A′ 4 quadretti a destra."
    },
    "<p>L'immagine di una figura si costruisce trovando le immagini dei suoi vertici e collegandole. L'immagine ha la stessa forma e la stessa grandezza della figura originale, è solo «ribaltata» come in uno specchio.</p>",
    "<p>Una figura è <strong>simmetrica</strong> se esiste una retta rispetto alla quale corrisponde a se stessa (piegando il foglio lungo di essa le due metà si sovrappongono).\n       Questa retta si chiama <em>asse di simmetria</em>. Il quadrato ha 4 assi, il rettangolo 2, il triangolo equilatero 3, quello isoscele 1 e il cerchio infiniti.</p>"
   ],
   "examples": [
    {
     "task": "L'asse $o$ è una retta verticale nella colonna 6. Il punto $A$ si trova nella colonna 2. In quale colonna si trova la sua immagine?",
     "steps": [
      "Il punto $A$ dista dall'asse $6 - 2 = 4$ colonne.",
      "L'immagine è 4 colonne dall'altra parte: $6 + 4 = 10$.",
      "<strong>L'immagine si trova nella colonna 10.</strong>"
     ]
    },
    {
     "task": "Quanti assi di simmetria ha un rettangolo che non è un quadrato?",
     "steps": [
      "Un asse passa per i punti medi di due lati opposti: ce ne sono due.",
      "La diagonale non è un asse: piegando, le metà non si sovrappongono.",
      "<strong>2 assi.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, perciò dividiamo per cento: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, perciò ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$, perciò ${@0}^\\circ = {@1}'$ e in tutto ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$, perciò $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$, il triangolo si può costruire.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$, il triangolo non si può costruire.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ (spostamento di {@3} verso destra).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ (spostamento di {@3} verso sinistra).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, resto {@2}. Quindi ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ e ${@2} = {@3}$ non hanno fattori primi comuni, $D({@4}, {@5}) = 1$. Sono primi fra loro.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. Il MCD è il prodotto dei fattori primi comuni: $D({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$, quindi oltre a 1 e {@3} ha anche il divisore {@4}. È un numero composto.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. La sera c'erano {@4} °C.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$ e $|{@2}| = {@3}$, quindi la somma è ${@4} + {@5} = {@6}$.",
  "4 dieliky": "4 tacche",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "Il valore assoluto è la distanza dallo zero, perciò non è mai negativo.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "Il valore assoluto non è mai negativo. Prima trova la distanza di ogni numero dallo zero, solo dopo somma.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "Se i primi sono 60 o più, cambia 60 primi con 1 grado.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "Se la somma dei due lati più corti è uguale al lato più lungo, i lati starebbero su una retta e il triangolo non si forma.",
  "Aká dlhá je strana štvorca (v cm)?": "Quanto è lungo il lato del quadrato (in cm)?",
  "Aké je číslo opačné k číslu {@0}?": "Qual è l'opposto del numero {@0}?",
  "Aké je číslo {@0}?": "Com'è il numero {@0}?",
  "Aký bude čitateľ rozšíreného zlomku?": "Quale sarà il numeratore della frazione ampliata?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "Qual è il minimo comune multiplo dei numeri {@0} e {@1}?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "Qual è il massimo comune divisore dei numeri {@0} e {@1}?",
  "Aký je obsah štvorca (v cm²)?": "Qual è l'area del quadrato (in cm²)?",
  "Aký je obvod (v {@0})?": "Qual è il perimetro (in {@0})?",
  "Aký je obvod štvorca (v cm)?": "Qual è il perimetro del quadrato (in cm)?",
  "Aký je súčet dvoch susedných strán?": "Qual è la somma di due lati vicini?",
  "Aký je súčet známych číslic?": "Qual è la somma delle cifre note?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "Com'è un angolo di ampiezza ${@0}^\\circ$?",
  "Aký veľký je jeden uhol pri základni?": "Quanto misura ciascun angolo alla base?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "Per quale numero bisogna ampliare la frazione $\\frac{{@0}}{{@1}}$ per avere al denominatore {@2}?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "Il punto $A$ dista dall'asse $|{@0} - {@1}| = {@2}$ {@3}. L'immagine è alla stessa distanza dall'altra parte dell'asse: ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "Non puoi moltiplicare separatamente la parte intera e quella decimale: i decimi passano negli interi. Moltiplica i numeri senza virgola e poi metti la virgola.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "La somma delle cifre è {@0}, è divisibile per 3.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "La somma delle cifre è {@0}, è divisibile per 9.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "La somma delle cifre è {@0}, non è divisibile per 3.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "La somma delle cifre è {@0}, non è divisibile per 9.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "I divisori del numero {@0} sono {@1}. Sono {@2}.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "Il divisore 1 ce l'hanno tutti i numeri. Non sono primi fra loro i numeri che hanno un divisore comune maggiore di 1.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "Dividiamo come con i numeri interi e scriviamo la virgola nel quoziente quando la superiamo nel dividendo: ${@0} : {@1} = {@2}$. Verifica: ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "Dividiamo successivamente per i numeri primi: ${@0}$. Quindi ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "Le virgole devono stare una sotto l'altra. Completa i posti mancanti con degli zeri.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "Dividi un passo alla volta dall'ordine più alto. Quando superi la virgola del dividendo, scrivi la virgola anche nel risultato.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "Dividi il numero per il numero primo più piccolo possibile (2, 3, 5, 7, …) e continua con il quoziente finché non ottieni 1.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "Inserisci il segno giusto: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "Calcola il terzo angolo e guarda il più grande dei tre.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "Tipi di triangoli rispetto ai lati e rispetto agli angoli",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "I due lati più corti: ${@0} + {@1} = {@2}$, il più lungo è {@3}.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "Due lati sono lunghi uguali, il triangolo è isoscele.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "Due nastri misurano {@0} cm e {@1} cm. Vogliamo tagliarli senza avanzi in pezzi uguali, il più lunghi possibile (in centimetri interi). Quanti centimetri misurerà un pezzo?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "Si può costruire un triangolo con i lati {@0} cm, {@1} cm e {@2} cm?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "La lunghezza di un pezzo deve essere un divisore di tutte e due le lunghezze. Quale divisore comune è il più grande?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "La lunghezza di un pezzo deve dividere sia {@0} sia {@1} ed essere la più grande possibile: cerchiamo $D({@2}, {@3})$.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "Cerca le coppie di numeri il cui prodotto è il numero dato: 1 e il numero stesso, poi 2 e …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "Cerchiamo il minimo comune multiplo: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Le linee partiranno di nuovo insieme tra {@8} minuti, cioè alle {@9}:{@10}.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "Cerchiamo il numero che moltiplicato per se stesso dà {@0}: $a = {@1}\\,\\text{cm}$. Perimetro: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "Solo il triangolo equilatero ha 3 assi. L'isoscele ha uguali solo due lati.",
  "Je menší ako 90°, preto je ostrý.": "È minore di 90°, perciò è acuto.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "È pari e la somma delle cifre {@0} è divisibile per 3.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "È pari e la somma delle cifre {@0} non è divisibile per 3.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "La lettera maiuscola stampatello <strong style=\"font-size:1.6em\">{@0}</strong> (in forma semplice, senza grazie) ha un asse di simmetria?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "È maggiore di 90° e minore di 180°, perciò è ottuso.",
  "Je číslo {@0} deliteľné číslom {@1}?": "Il numero {@0} è divisibile per {@1}?",
  "Jeden kúsok bude merať {@0} cm.": "Un pezzo misurerà {@0} cm.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "Un grado ha 60 primi, non 100: dividi il numero di primi per sessanta.",
  "Jeden stupeň má 60 minút, nie 100.": "Un grado ha 60 primi, non 100.",
  "Jeden stupeň má 60 minút.": "Un grado ha 60 primi.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "Controllo: MCD · mcm = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "Il parallelogramma non ha nessun asse di simmetria. Piegato lungo qualsiasi retta non si sovrappone a se stesso.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "Il rombo ha 2 assi di simmetria: le sue due diagonali.",
  "Koľko celých stupňov je v ${@0}'$?": "Quanti gradi interi ci sono in ${@0}'$?",
  "Koľko deliteľov má číslo {@0}?": "Quanti divisori ha il numero {@0}?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "Quante cifre decimali hanno in tutto i fattori ${@0}$ e ${@1}$?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "Quanto fa $\\frac{1}{{@0}}$ del numero {@1}?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "Quanto fa $\\frac{{@0}}{{@1}}$ del numero {@2}?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "Quanto fa la metà del perimetro, cioè $a + b$ (in cm)?",
  "Koľko minút je ${@0}$?": "Quanti primi sono ${@0}$?",
  "Koľko minút je ${@0}^\\circ$?": "Quanti primi sono ${@0}^\\circ$?",
  "Koľko minút zostane?": "Quanti primi restano?",
  "Koľko osí súmernosti má {@0}?": "Quanti assi di simmetria ha questa figura: {@0}?",
  "Koľko riadkov je bod A vzdialený od osi?": "Di quante righe dista il punto A dall'asse?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "Quanti gradi misurano insieme i due angoli alla base?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "Quanti gradi misurano insieme gli angoli $\\alpha$ e $\\beta$?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "Quanti gradi restano dopo la sottrazione (non dimenticare il grado preso in prestito)?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "Quanti gradi mancano per arrivare alla somma degli angoli del triangolo?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "Di quante colonne dista il punto A dall'asse?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "Quante volte 60 sta nel numero di primi?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "Il cerchio ha infiniti assi di simmetria: ogni retta che passa per il suo centro.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "Cerchi divisi in parti: un mezzo, tre quarti, tre ottavi",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "Hai semplificato correttamente, ma la frazione non è ancora ridotta ai minimi termini: numeratore e denominatore si possono ancora dividere per uno stesso numero.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "Quale cifra sta nel numero ${@0}$ subito dopo la posizione “{@1}”?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "Quale numero moltiplicato per se stesso dà l'area? Quello è il lato.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "Quale numero moltiplicato per se stesso dà {@0}?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "Qual è la cifra più piccola da scrivere al posto di $\\square$ perché il numero ${@0}$ sia divisibile per {@1}?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "Qual è la cifra più piccola da aggiungere a {@0} perché la somma sia divisibile per {@1}?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "Con questa lunghezza i pezzi si potrebbero tagliare senza avanzi, ma non sono i più lunghi possibili.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "Tra unità di superficie vicine il rapporto di equivalenza è 100.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "Misurare un angolo con il goniometro: angolo di 50 gradi",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "I primi sono pochi, perciò cambiamo 1 grado: ${@0} = {@1}$. Poi ${@2} - {@3} = {@4}$ e ${@5} - {@6} = {@7}$, il risultato è ${@8}$.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "I primi sono pochi, cambia 1 grado con 60 primi. Quanti primi avrà allora il primo angolo?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "I primi non possono essere 60 o più. Cambia 60 primi con 1 grado.",
  "Má 180°, ramená tvoria priamku, je priamy.": "Misura 180°, i lati formano una retta: è piatto.",
  "Má presne 90°, je pravý.": "Misura esattamente 90°: è retto.",
  "NSD; nsn": "MCD; mcm",
  "Na deliteľnosť 6 treba oboje.": "Per la divisibilità per 6 servono tutte e due le cose.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "Sulla retta dei numeri il numero maggiore è a destra. Ogni numero negativo è minore di zero e di ogni numero positivo.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "Sulla retta dei numeri il numero {@0} sta più a destra, è maggiore. Perciò ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "La temperatura minima della notte era {@0} °C, la massima del giorno {@1} °C. Di quanti gradi faceva più caldo di giorno?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "Prima una parte: ${@0} : {@1} = {@2}$. Poi {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "Prima ricava il lato dal perimetro (il quadrato ha 4 lati uguali).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "Il massimo comune divisore dei numeri {@0} e {@1} è {@2}. Semplifichiamo per esso: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "Non dimenticare che tra i divisori ci sono sempre anche 1 e il numero {@0} stesso.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "Non è pari e la somma delle cifre {@0} è divisibile per 3.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "Non è pari e la somma delle cifre {@0} non è divisibile per 3.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "No. La lettera {@0} non ha un asse di simmetria né verticale né orizzontale: piegandola, le metà non si sovrappongono.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "Trova il numero più grande per cui si possono dividere sia il numeratore sia il denominatore.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "Moltiplichiamo senza virgole: ${@0}\\cdot {@1} = {@2}$. I fattori hanno in tutto {@3} {@4}, perciò ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "Di quanti gradi faceva più caldo di giorno?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "Di quanti gradi sale la temperatura da 0 °C a {@0} °C?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "Di quanti gradi sale la temperatura da {@0} °C a 0 °C?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "Il rettangolo (che non è un quadrato) ha 2 assi di simmetria, che uniscono i punti medi dei lati opposti. Le diagonali non sono assi.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "Rettangolo di 5 cm per 3 cm diviso in quadretti da 1 cm²",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Un rettangolo ha area ${@0}\\,\\text{cm}^2$ e un lato di ${@1}\\,\\text{cm}$. Quanto è lungo l'altro lato (in cm)?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "Un rettangolo ha i lati $a = {@0}\\,\\text{cm}$ e $b = {@1}\\,\\text{cm}$. Calcola la sua area in cm².",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "Un rettangolo ha i lati $a = {@0}\\,\\text{cm}$ e $b = {@1}\\,\\text{cm}$. Calcola il suo perimetro in cm.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "Tutti e due i numeri sono divisibili per {@0}, quindi $D({@1}, {@2}) = {@3} &gt; 1$. Non sono primi fra loro.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "L'area è il prodotto dei lati, quindi l'altro lato lo ottieni con la divisione.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "L'area è il prodotto dei lati, perciò l'altro lato lo ottieni con la divisione, non con la sottrazione.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "L'area non si divide per quattro come il perimetro. Il lato è il numero che moltiplicato per se stesso dà l'area.",
  "Obsah obdĺžnika: S = a · b.": "Area del rettangolo: S = a · b.",
  "Obsah štvorca je strana krát strana.": "L'area del quadrato è lato per lato.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "Il perimetro non è il lato del quadrato. Prima dividilo per quattro: ottieni il lato.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "Perimetro del rettangolo: o = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "Raffreddamento significa sottrarre.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "Dal perimetro hai sottratto i due lati di lunghezza a. Ti restano due lati b: dividi ancora il risultato per due.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "Dalla temperatura di {@0} °C sottrai la temperatura negativa di {@1} °C. Sottrarre un numero negativo significa aggiungere il suo opposto.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "Dalla temperatura più alta sottrai quella più bassa. Sottrarre un numero negativo significa aggiungere il suo opposto.",
  "Odčítaj minúty.": "Sottrai i primi.",
  "Odčítaj stupne.": "Sottrai i gradi.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "Sottrai un numero positivo: sulla retta dei numeri ti sposti verso sinistra.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "Sottrarre un numero negativo significa aggiungere il suo opposto: meno per meno fa più.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "Sottrarre un numero negativo significa aggiungere il suo opposto: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "Sottrarre un numero è lo stesso che aggiungere il suo opposto. Aiutati con la retta dei numeri.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "Oltre alle rette per i punti medi dei lati opposti, sono assi del quadrato anche le sue diagonali.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "L'opposto sta sulla retta alla stessa distanza dallo zero, ma dall'altra parte: di {@0} è {@1}.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "L'opposto ha la stessa distanza dallo zero, ma il segno opposto.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "L'asse di simmetria $o$ (linea tratteggiata) è una retta orizzontale nella riga {@0}. Il punto $A$ sta nella riga {@1}. In quale riga sta la sua immagine $A'$?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "L'asse di simmetria $o$ (linea tratteggiata) è una retta verticale nella colonna {@0}. Il punto $A$ sta nella colonna {@1}. In quale colonna sta la sua immagine $A'$?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "Un asse di simmetria passa per ogni vertice del triangolo equilatero, non solo per uno.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "Il triangolo acutangolo ha tutti e tre gli angoli minori di 90°. Non dimenticare di calcolare anche il terzo angolo.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "L'angolo acuto è più piccolo dell'angolo retto, cioè minore di 90°.",
  "Ostrý, pravý, tupý a priamy uhol": "Angolo acuto, retto, ottuso e piatto",
  "Oteplenie znamená pripočítať.": "Riscaldamento significa aggiungere.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "Verifica la disuguaglianza triangolare: la somma dei due lati più corti deve essere maggiore del lato più lungo.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "La metà del perimetro è $a + b = {@0} : 2 = {@1}$, perciò $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "La metà del perimetro è la somma di due lati vicini.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "Confronta l'angolo con l'angolo retto (90°, l'angolo di un quaderno) e con l'angolo piatto (180°).",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "L'ultima cifra è {@0}, è 0 o 5.",
  "Posledná číslica je {@0}, je to 0.": "L'ultima cifra è {@0}, è 0.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "L'ultima cifra è {@0}, non è né 0 né 5.",
  "Posledná číslica je {@0}, nie je to 0.": "L'ultima cifra è {@0}, non è 0.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "Hai spostato la virgola nella direzione sbagliata. Dividendo per {@0} il numero diventa più piccolo.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "Hai spostato la virgola nella direzione sbagliata. Moltiplicando per {@0} il numero diventa più grande.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "Usa il criterio di divisibilità del numero dato (ultima cifra, somma delle cifre o ultime due cifre).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Guarda la prima cifra dopo la posizione a cui arrotondi: 0 – 4 per difetto, 5 – 9 per eccesso.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "Guarda bene: i due numeri sono uguali.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "Guarda se non sono lunghi uguali tutti e tre i lati: un triangolo così ha un nome più preciso.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "Il numero di zeri in 10, 100 o 1 000 indica di quanti posti si sposta la virgola.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "Calcola separatamente i gradi e i primi. 60 primi sono 1 grado.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "Hai preso in prestito 1 grado per i primi, ma non hai diminuito di uno il numero dei gradi.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "Il triangolo rettangolo ha un angolo di esattamente 90°. Calcola il terzo angolo e controlla.",
  "Pravý uhol má presne 90° – ako roh zošita.": "L'angolo retto misura esattamente 90°, come l'angolo di un quaderno.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "Immagina uno specchio messo in verticale o in orizzontale al centro della lettera.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "Immagina di piegare la figura lungo una retta. In quanti modi le due metà si sovrappongono esattamente?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "Trasforma: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "Perciò no, il numero {@0} non è divisibile per {@1}.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "Perciò sì, il numero {@0} è divisibile per {@1}.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "Riduci le due frazioni allo stesso denominatore e confronta i numeratori.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "Dividendo per {@0} spostiamo la virgola di {@1} {@2} verso sinistra: {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "Per la divisibilità per 10 decide l'ultima cifra: deve essere 0.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "Per la divisibilità per 2 decide solo l'ultima cifra: deve essere pari.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "Per la divisibilità per 3 non decide l'ultima cifra, ma la somma delle cifre. Somma tutte le cifre.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "Per la divisibilità per 4 non basta che il numero sia pari. Decide il numero formato dalle ultime due cifre.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "Per la divisibilità per 5 decide l'ultima cifra: deve essere 0 o 5.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "Per la divisibilità per 9 decide la somma delle cifre: deve essere divisibile per 9, non basta la divisibilità per 3.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "Moltiplicando per {@0} spostiamo la virgola di {@1} {@2} verso destra: {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "Per le unità di superficie il rapporto non è 10, ma $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "Per le unità di superficie il rapporto non è 10, ma $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "Nel prestito cambi 1 grado con 60 primi, non con 100.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "Tra i numeri negativi è maggiore quello più vicino allo zero. Non conta quale ha la cifra più grande.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "L'angolo piatto misura 180°, i suoi lati stanno su una retta.",
  "Pripočítaj ešte ${@0}'$.": "Aggiungi ancora ${@0}'$.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "Aggiungi un numero positivo: sulla retta dei numeri ti sposti verso destra.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "Aggiungere un numero negativo significa sottrarre: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "Aggiungere un numero negativo significa spostarsi sulla retta verso sinistra, cioè sottrarre.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "Un numero primo ha solo due divisori. Prova se {@0} si può dividere senza resto per uno dei numeri 2, 3, 5, 7.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "Un numero primo ha esattamente due divisori e un numero composto più di due. Quanti divisori ha il numero 1?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "Il triangolo isoscele (non equilatero) ha 1 asse di simmetria: passa per il vertice principale e per il punto medio della base.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "Il triangolo isoscele ha due lati lunghi uguali.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "Il triangolo equilatero ha 3 assi di simmetria, ognuno passa per un vertice e per il punto medio del lato opposto.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "Il triangolo equilatero ha tutti e tre i lati lunghi uguali.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "Differenza di temperatura: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Di giorno faceva {@5} °C più caldo.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "Decide la cifra subito dopo questa posizione, ed è {@0}. È 5 o più, arrotondiamo per eccesso: ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "Decide la cifra subito dopo questa posizione, ed è {@0}. È minore di 5, arrotondiamo per difetto: ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "La scomposizione non è finita: {@0} non è un numero primo. Continua a dividere per numeri primi.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "Scomponi tutti e due i numeri in fattori primi. Il MCD è formato dai fattori primi comuni, il mcm da tutti (con il numero più alto di ripetizioni).",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "Scomponi i numeri {@0} e {@1} in fattori primi. Qual è il loro massimo comune divisore?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "Scomponi il numero {@0} in un prodotto di numeri primi. Scrivi i fattori primi dal più piccolo, separati da un punto e virgola (anche quelli ripetuti).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "Ampliamo al denominatore {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Oppure dividiamo ${@6} : {@7}$.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "Al mattino c'erano {@0} °C. Fino a sera la temperatura è scesa di {@1} °C. Quale temperatura c'era la sera (in °C)?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "Al mattino c'erano {@0} °C. Fino a sera la temperatura è salita di {@1} °C. Quale temperatura c'era la sera (in °C)?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "Il triangolo scaleno ha tutti e tre i lati di lunghezze diverse. Confronta di nuovo le lunghezze.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "Il triangolo scaleno non ha nessun asse di simmetria, non ha due lati lunghi uguali.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "Con questa cifra il numero sarà davvero divisibile, ma cerchi la cifra più piccola di questo tipo.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "Riduci la frazione $\\frac{{@0}}{{@1}}$ ai minimi termini. Scrivi la risposta come a/b.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "Prova a trovare un divisore comune maggiore di 1: guarda per esempio se tutti e due i numeri sono divisibili per 2, 3, 5 o 7.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "Prova se il numero si può dividere per 2, 3, 5 o 7 senza resto.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "Il denominatore comune è {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ e $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Poiché ${@9} {@10} {@11}$, vale $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Conta di quante righe dista il punto A dall'asse e conta lo stesso numero dall'altra parte.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "Conta quanti lati hanno la stessa lunghezza.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Conta di quante colonne dista il punto A dall'asse e conta lo stesso numero dall'altra parte.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "Lato: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Area: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "Hai moltiplicato il lato per due. L'area del quadrato è lato per lato, non lato per 2.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Hai sommato i lati. L'area del rettangolo è il prodotto delle lunghezze dei suoi lati.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "Alberi della scomposizione in fattori primi dei numeri 60 e 84",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "Gradi: ${@0} + {@1} = {@2}$, primi: ${@3} + {@4} = {@5}$. Poiché ${@6}' = 1^\\circ\\,{@7}'$, il risultato è ${@8}$.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "Gradi: ${@0} + {@1} = {@2}$, primi: ${@3} + {@4} = {@5}$. Il risultato è ${@6}$.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "Gradi: ${@0} - {@1} = {@2}$, primi: ${@3} - {@4} = {@5}$. Il risultato è ${@6}$.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "I numeri {@0} e {@1} sono primi fra loro oppure no?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "La somma è uguale al lato più lungo, i lati starebbero su una retta. Il triangolo non si può costruire.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "La somma degli angoli è $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "La somma degli angoli di un triangolo è 180°, non 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "La somma degli angoli interni di un triangolo è 180°, non 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "La somma degli angoli interni di un triangolo è 180°.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "La somma delle cifre note è {@0}. La somma delle cifre deve essere divisibile per {@1}: la cifra adatta più piccola è {@2}, perché ${@3} + {@4} = {@5}$.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "Il prodotto {@0}·{@1} è un multiplo comune, ma non il più piccolo. Le linee si incontrano prima.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "Il prodotto {@0}·{@1} è un multiplo comune, ma non il più piccolo. Nel mcm prendi ogni fattore primo tante volte quante compare nel numero in cui compare più volte.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "Somma i due lati più corti e confronta la loro somma con il lato più lungo. Basta che la somma sia maggiore.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "Somma i due lati più corti e confronta con il lato più lungo. La somma deve essere maggiore.",
  "Sčítaj minúty.": "Somma i primi.",
  "Sčítaj stupne.": "Somma i gradi.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "Somma le cifre note. Alla somma aggiungi la cifra più piccola possibile in modo che la somma sia divisibile per {@0}.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "Hai sommato solo due lati. Il rettangolo ha quattro lati, moltiplica ancora per due la somma dei lati vicini.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "Così la somma delle cifre sarà divisibile per 3, ma per la divisibilità per 9 deve essere divisibile per 9.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "Questa è l'ampiezza dell'angolo adiacente. Gli angoli opposti al vertice stanno uno di fronte all'altro e sono congruenti.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "Questo è il minimo comune multiplo. Il pezzo deve essere più corto dei nastri: cerchi il massimo comune divisore.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "Questo è il massimo comune divisore. Il momento della partenza comune deve essere un multiplo di tutti e due gli intervalli: cerchi il minimo comune multiplo.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "Questo è il perimetro del quadrato. L'area si calcola come lato per lato.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "Questo è il perimetro. L'area del rettangolo si calcola come prodotto delle lunghezze dei suoi lati.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "Questo è il lato del quadrato. Calcola ancora l'area.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "Questo è il lato del quadrato. Calcola ancora il perimetro.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "Questa è la distanza del punto A dall'asse. L'immagine sta alla stessa distanza dall'altra parte dell'asse: trova il suo numero.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "Questi sono i gradi dei due angoli alla base insieme. Sono congruenti, perciò dividi ancora il risultato a metà.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "Terzo angolo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. L'angolo più grande misura ${@3}^\\circ$, è retto, il triangolo è rettangolo.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "Terzo angolo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. L'angolo più grande misura ${@3}^\\circ$, è ottuso, il triangolo è ottusangolo.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "Terzo angolo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. L'angolo più grande misura ${@3}^\\circ$, tutti gli angoli sono acuti, il triangolo è acutangolo.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "Un triangolo ha due angoli interni di ampiezza ${@0}^\\circ$ e ${@1}^\\circ$. Che triangolo è rispetto agli angoli?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "Un triangolo ha i lati {@0} cm, {@1} cm e {@2} cm. Com'è rispetto ai lati?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "Il triangolo ottusangolo ha un angolo maggiore di 90°. Calcola il terzo angolo e controlla.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "L'angolo ottuso è maggiore di 90° e allo stesso tempo minore di 180°.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "Questa proprietà ce l'ha solo il numero 1. Ogni numero naturale più grande è o un numero primo o un numero composto.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "Le diagonali del rettangolo non sono assi di simmetria: piegando lungo una diagonale le metà non si sovrappongono.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "Gli angoli alla base di un triangolo isoscele sono uguali e tutti e tre gli angoli insieme misurano 180°.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "Gli angoli alla base sono congruenti: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "L'angolo $\\alpha$ ha ampiezza ${@0}^\\circ$. Quanto misura l'angolo adiacente (in gradi)?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "L'angolo $\\alpha$ ha ampiezza ${@0}^\\circ$. Quanto misura l'angolo opposto al vertice (in gradi)?",
  "Uhol má {@0}°.": "L'angolo misura {@0}°.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "Metti la virgola: quanto fa ${@0}\\cdot {@1}$?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "Trova il massimo comune divisore e il minimo comune multiplo dei numeri {@0} e {@1}. Scrivili nell'ordine MCD; mcm.",
  "V ktorom riadku leží obraz $A'$?": "In quale riga sta l'immagine $A'$?",
  "V ktorom stĺpci leží obraz $A'$?": "In quale colonna sta l'immagine $A'$?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "In un triangolo isoscele l'angolo opposto alla base (al vertice principale) misura ${@0}^\\circ$. Quanto misura ciascuno degli angoli alla base?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "Nel triangolo $ABC$ è $\\alpha = {@0}^\\circ$ e $\\beta = {@1}^\\circ$. Quanto misura l'angolo $\\gamma$ (in gradi)?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "Gli angoli adiacenti insieme formano un angolo piatto, gli angoli opposti al vertice sono congruenti.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "Gli angoli adiacenti insieme misurano $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "Gli angoli adiacenti non si completano a un angolo retto, ma a un angolo piatto (180°).",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "Gli angoli adiacenti insieme formano un angolo piatto, cioè 180°, non 360°.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "Gli angoli opposti al vertice sono uguali, perciò anche questo misura ${@0}^\\circ$.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "Dividi il numero di primi per 60. Il quoziente sono i gradi, il resto i primi.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "Dividi numeratore e denominatore per {@0}. Che frazione ottieni (a/b)?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "Esprimi ${@0}'$ in gradi e primi. Scrivi nella forma gradi; primi.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "Moltiplica i fattori primi che compaiono in tutte e due le scomposizioni.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "Moltiplica i numeri senza virgole e poi conta le cifre decimali dei due fattori.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "Moltiplica i numeri senza virgole: ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Hai moltiplicato i lati: quella è l'area. Il perimetro è la somma delle lunghezze di tutti e quattro i lati.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "Calcola ${@0} {@1} {@2}$. Scrivi il risultato nella forma gradi; primi.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "Calcola ${@0}\\cdot {@1}$.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "Calcola $|{@0}| + |{@1}|$.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "Hai calcolato solo una parte. Moltiplicala ancora per il numeratore {@0}.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "È maggiore il numero che sulla retta dei numeri sta più a destra. Attenzione: −2 è maggiore di −9.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "Tutti i lati sono lunghi uguali, il triangolo è equilatero.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "Tutti e tre i lati hanno lunghezze diverse, il triangolo è scaleno.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "Dalla stazione degli autobus parte la linea A ogni {@0} minuti e la linea B ogni {@1} minuti. Alle 7:00 sono partite tutte e due insieme. Tra quanti minuti partiranno di nuovo insieme?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "Da un'unità più piccola a una più grande dividiamo per 100.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "Dopo questa posizione c'è la cifra {@0}. Arrotonda ${@1}$ a {@2}.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Hai scambiato numeratore e denominatore: dividi il numero per il denominatore e moltiplica il risultato per il numeratore.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "Hai arrotondato a un'altra posizione. Arrotondare a {@0} significa che l'ultima cifra tenuta è nella posizione “{@1}”.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Scrivi $\\frac{{@0}}{{@1}}$ come numero decimale.",
  "Zapíš výsledok v poradí NSD; nsn.": "Scrivi il risultato nell'ordine MCD; mcm.",
  "Zapíš výsledok v tvare stupne; minúty.": "Scrivi il risultato nella forma gradi; primi.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Scrivi la frazione $\\frac{{@0}}{{@1}}$ come numero decimale.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "Hai allineato i numeri da destra come numeri interi. Le virgole devono stare una sotto l'altra: il numero {@0} scrivilo come {@1}0.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "Allineiamo le virgole una sotto l'altra e completiamo con zeri: ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "Scopri se esiste un numero maggiore di 1 per cui si possono dividere tutti e due i numeri.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "La linea di frazione non è una virgola. La frazione significa divisione: dividi il numeratore per il denominatore.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "Le frazioni non sono uguali. Riducile allo stesso denominatore e confronta i numeratori.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "Le frazioni con denominatori diversi non si possono confrontare solo con i numeratori o solo con i denominatori. Riducile allo stesso denominatore.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "Amplia la frazione in modo da avere al denominatore 10, 100 o 1 000, oppure dividi il numeratore per il denominatore.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "Un numero composto ha anche un divisore diverso da 1 e da se stesso. Prova a trovare un tale divisore di {@0}: se non c'è, il numero non è composto.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "Hai riflesso il punto rispetto al centro della griglia, non rispetto all'asse o.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "Un giardino ha la forma di un rettangolo di {@0} m per {@1} m. Qual è l'area del giardino in m²?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "Un giardino ha la forma di un rettangolo di {@0} m per {@1} m. Quanti metri di rete servono per recintarlo?",
  "ani prvočíslo, ani zložené": "né primo né composto",
  "desatinné miesta": "cifre decimali",
  "desatinné miesto": "cifra decimale",
  "desatinných miest": "cifre decimali",
  "desatín": "decimi",
  "jednotky (celé čísla)": "un'unità (numeri interi)",
  "kladné": "positivo",
  "kosodĺžnik (rovnobežník)": "parallelogramma",
  "kosoštvorec": "rombo",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "le tacche piccole sono centesimi (0,01), quelle grandi decimi (0,1)",
  "miesta": "posti",
  "miesto": "posto",
  "napr. 2/3": "per es. 2/3",
  "napr. 2; 2; 3": "per es. 2; 2; 3",
  "nekonečne veľa": "infiniti",
  "nesúdeliteľné": "primi fra loro",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "il mcm contiene tutti i fattori primi: $n({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "acutangolo",
  "ostrý (30°)": "acuto (30°)",
  "podľa strán": "rispetto ai lati",
  "podľa uhlov": "rispetto agli angoli",
  "pravouhlý": "rettangolo",
  "pravý (90°)": "retto (90°)",
  "priamy": "piatto",
  "priamy (180°)": "piatto (180°)",
  "prvočíslo": "numero primo",
  "riadkov": "righe",
  "rovnoramenný": "isoscele",
  "rovnoramenný trojuholník": "triangolo isoscele",
  "rovnostranný": "equilatero",
  "rovnostranný trojuholník": "triangolo equilatero",
  "rôznostranný": "scaleno",
  "rôznostranný trojuholník": "triangolo scaleno",
  "stotiny": "un centesimo",
  "stotín": "centesimi",
  "stred uhlomera = vrchol uhla": "centro del goniometro = vertice dell'angolo",
  "stupne; minúty": "gradi; primi",
  "stĺpce": "colonne",
  "stĺpcov": "colonne",
  "stĺpec": "colonna",
  "súdeliteľné": "non primi fra loro",
  "tupouhlý": "ottusangolo",
  "tupý (135°)": "ottuso (135°)",
  "zložené číslo": "numero composto",
  "záporné": "negativo",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "Sì. La lettera {@0} ha un asse di simmetria orizzontale.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "Sì. La lettera {@0} ha un asse di simmetria verticale e uno orizzontale.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "Sì. La lettera {@0} ha un asse di simmetria verticale.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "Figura e sua immagine nella simmetria assiale su una griglia a quadretti",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "Il momento della partenza comune deve essere un multiplo di tutti e due gli intervalli. Cerca il più piccolo.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "Retta dei numeri da 2 a 3 con decimi e centesimi",
  "Číselná os s celými číslami od −6 do 6": "Retta dei numeri con gli interi da −6 a 6",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "I numeri non sono uguali. Scopri quale dei due sta più a destra sulla retta dei numeri.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "Numeri da 1 a 60, i numeri primi sono colorati",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "La cifra dopo questa posizione è {@0}, cioè 5 o più: si arrotonda per eccesso.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "La cifra dopo questa posizione è {@0}, cioè meno di 5: si arrotonda per difetto.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "Il numero 1 ha un solo divisore (se stesso), perciò non è né un numero primo né un numero composto.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "Un numero è divisibile per 6 solo se è divisibile sia per 2 sia per 3. Verifica tutte e due le condizioni.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Dividi il numero per il denominatore e moltiplica il risultato per il numeratore.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "Il numero formato dalle ultime due cifre è {@0}, è divisibile per 4.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "Il numero formato dalle ultime due cifre è {@0}, non è divisibile per 4.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "Il numero {@0} ha solo due divisori: 1 e {@1}. È un numero primo.",
  "časti": "parti",
  "častí": "parti",
  "časť": "parte",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "Il quadrato ha 4 assi di simmetria: 2 uniscono i punti medi dei lati opposti e 2 stanno sulle diagonali.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "Un quadrato ha area ${@0}\\,\\text{cm}^2$. Qual è il suo perimetro in cm?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Un quadrato ha perimetro ${@0}\\,\\text{cm}$. Qual è la sua area in cm²?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Un quadrato ha il lato di ${@0}\\,\\text{cm}$. Qual è la sua area in cm²?",
  "štvorčeková sieť s osou a bodom A": "griglia a quadretti con l'asse e il punto A"
 }
});
