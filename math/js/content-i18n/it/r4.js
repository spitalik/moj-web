/* Italiano: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/r4/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "r4-cisla10000": {
   "title": "I numeri fino a 10 000 e oltre",
   "summary": "Migliaia, centinaia, decine e unità; leggere, scrivere e confrontare i numeri grandi.",
   "theory": [
    "<p>Ogni cifra di un numero ha il suo <strong>posto (ordine)</strong>: unità, decine, centinaia, migliaia, decine di migliaia…\n       Dieci unità fanno una decina, dieci decine un centinaio, dieci centinaia un migliaio e dieci migliaia fanno $10\\,000$.</p>",
    {
     "fig": "r4-rady",
     "caption": "Il numero $47\\,385$ ha 4 decine di migliaia, 7 migliaia, 3 centinaia, 8 decine e 5 unità."
    },
    "<p>I numeri grandi si scrivono con uno spazio ogni tre cifre partendo da destra: $8\\,206$, $35\\,000$. Così si leggono più facilmente:\n       <em>ottomiladuecentosei</em>, <em>trentacinquemila</em>.</p>",
    "<p><strong>Confronto:</strong> è più grande il numero che ha più cifre. Se hanno lo stesso numero di cifre, confrontiamo\n       da sinistra: prima le migliaia, poi le centinaia, le decine e le unità. Per esempio $5\\,382 &gt; 5\\,297$, perché 3 centinaia sono più di 2 centinaia.</p>"
   ],
   "examples": [
    {
     "task": "Scrivi in cifre: 6 migliaia, 0 centinaia, 4 decine e 9 unità.",
     "steps": [
      "Al posto delle centinaia scriviamo lo zero, perché le cifre non si spostino.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>Il numero è $6\\,049$.</strong>"
     ]
    },
    {
     "task": "Confronta i numeri $7\\,615$ e $7\\,651$.",
     "steps": [
      "Entrambi i numeri hanno quattro cifre, 7 migliaia e 6 centinaia.",
      "Decine: 1 è meno di 5.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "Addizione e sottrazione in colonna",
   "summary": "Addizione e sottrazione di numeri di più cifre in colonna.",
   "theory": [
    "<p>Nell'addizione in colonna scriviamo i numeri <strong>uno sotto l'altro</strong>, in modo che le unità siano sotto le unità, le decine sotto\n       le decine ecc. Calcoliamo <strong>da destra</strong>, partendo dalle unità. Quando la somma in una colonna supera 9, scriviamo solo le unità\n       e riportiamo 1 nella colonna successiva.</p>",
    {
     "fig": "r4-scitanie",
     "caption": "L'addizione in colonna $3\\,476 + 2\\,858 = 6\\,334$. I piccoli 1 in alto sono i riporti."
    },
    "<p>Anche nella sottrazione in colonna partiamo dalle unità. Se la cifra in alto è minore di quella in basso, le aggiungiamo 10\n       e nella colonna successiva teniamo a mente 1, che aggiungiamo alla cifra in basso.</p>",
    "<p><strong>Prova:</strong> il risultato della sottrazione si verifica con un'addizione. Se $5\\,203 - 1\\,868 = 3\\,335$,\n       deve valere $3\\,335 + 1\\,868 = 5\\,203$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola in colonna $4\\,587 + 3\\,765$.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "Unità: $7 + 5 = 12$, scriviamo 2 e riportiamo 1. Decine: $8 + 6 + 1 = 15$, scriviamo 5 e riportiamo 1.",
      "Centinaia: $5 + 7 + 1 = 13$, scriviamo 3 e riportiamo 1. Migliaia: $4 + 3 + 1 = 8$.",
      "<strong>Risultato: $8\\,352$</strong>"
     ]
    },
    {
     "task": "Calcola in colonna $6\\,042 - 2\\,718$.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "Unità: 2 è meno di 8, quindi $12 - 8 = 4$, teniamo a mente 1.",
      "Decine: $1 + 1 = 2$, $4 - 2 = 2$. Centinaia: 0 è meno di 7, quindi $10 - 7 = 3$, teniamo a mente 1.",
      "Migliaia: $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>Risultato: $3\\,324$</strong>. Prova: $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "Moltiplicazione e divisione in colonna",
   "summary": "Moltiplicazione per un numero di una e di due cifre, divisione per un numero di una cifra con il resto.",
   "theory": [
    "<p><strong>Moltiplicazione in colonna per un numero di una cifra:</strong> moltiplichiamo una dopo l'altra le unità, le decine, le centinaia…\n       Se il risultato supera 9, scriviamo le unità, teniamo a mente le decine e le aggiungiamo al prodotto successivo.</p>",
    "<p><strong>Moltiplicazione per un numero di due cifre:</strong> prima moltiplichiamo per le unità, poi per le decine. Il secondo prodotto\n       parziale si scrive spostato di un posto verso sinistra. Alla fine sommiamo i prodotti parziali.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$: prima $243\\cdot 2 = 486$, poi $243\\cdot 3 = 729$ spostato a sinistra (cioè $7\\,290$). In tutto $7\\,776$."
    },
    "<p><strong>Divisione in colonna:</strong> dividiamo partendo da sinistra. Prendiamo tante cifre quante servono per poter dividere, troviamo il risultato e il resto,\n       abbassiamo la cifra successiva e continuiamo. Se alla fine avanza qualcosa, è il <strong>resto</strong>, che è sempre minore del divisore.\n       Prova: $\\text{quoziente}\\cdot\\text{divisore} + \\text{resto} = \\text{dividendo}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola in colonna $1\\,627\\cdot 4$.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, scriviamo 8 e riportiamo 2. $4\\cdot 2 + 2 = 10$, scriviamo 0 e riportiamo 1.",
      "$4\\cdot 6 + 1 = 25$, scriviamo 5 e riportiamo 2. $4\\cdot 1 + 2 = 6$.",
      "<strong>Risultato: $6\\,508$</strong>"
     ]
    },
    {
     "task": "Calcola in colonna $947 : 6$.",
     "steps": [
      "$9 : 6 = 1$, resto 3.",
      "Abbassiamo il 4: $34 : 6 = 5$, resto 4.",
      "Abbassiamo il 7: $47 : 6 = 7$, resto 5.",
      "<strong>$947 : 6 = 157$, resto 5.</strong> Prova: $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "Problemi con più operazioni",
   "summary": "Problemi che risolviamo in più passaggi: acquisti, divisione in gruppi, confronti.",
   "theory": [
    "<p>Alcuni problemi non si possono risolvere con una sola operazione. Procediamo per passi:</p>\n       <ol><li>Che cosa sappiamo? Che cosa cerchiamo?</li><li>Che cosa devo scoprire prima per poter rispondere?</li>\n       <li>Calcolo ogni passaggio e lo scrivo.</li><li>Scrivo la risposta e controllo se ha senso.</li></ol>",
    "<p><strong>Parole utili:</strong> <em>… in più / in meno</em> – addizione o sottrazione;\n       <em>… volte di più / di meno</em> – moltiplicazione o divisione; <em>hanno diviso in parti uguali</em>, <em>ciascuno …</em> – divisione;\n       <em>resto</em>, <em>hanno dato di resto</em> – sottrazione.</p>",
    "<p>I passaggi si possono scrivere anche in un'unica espressione con le parentesi, per esempio $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       Ricorda l'ordine delle operazioni: prima moltiplicazioni e divisioni, poi addizioni e sottrazioni.</p>"
   ],
   "examples": [
    {
     "task": "La mamma ha comprato 3 libri da 12 euro e ha pagato con una banconota da 50 euro. Quanti euro le hanno dato di resto?",
     "steps": [
      "Prima troviamo il prezzo dei libri: $3\\cdot 12 = 36$ euro.",
      "Poi il resto: $50 - 36 = 14$ euro.",
      "In un'unica espressione: $50 - 3\\cdot 12 = 14$.",
      "<strong>Risposta: alla mamma hanno dato 14 euro di resto.</strong>"
     ]
    },
    {
     "task": "In gita sono andate 4 classi da 23 alunni. Hanno viaggiato in autobus e in ciascuno c'erano 46 alunni. Quanti autobus sono partiti?",
     "steps": [
      "Numero di alunni: $4\\cdot 23 = 92$.",
      "Numero di autobus: $92 : 46 = 2$.",
      "<strong>Risposta: sono partiti 2 autobus.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "I numeri romani",
   "summary": "I simboli I, V, X, L, C, D, M e la scrittura dei numeri in cifre romane.",
   "theory": [
    "<p>Gli antichi Romani scrivevano i numeri con sette lettere. I numeri romani si trovano ancora oggi sugli orologi, nei nomi dei secoli\n       o sugli edifici.</p>",
    {
     "fig": "r4-rimske",
     "caption": "I numeri romani e i loro valori."
    },
    "<p><strong>Regole:</strong> i valori dei simboli si sommano: $\\text{XVI} = 10 + 5 + 1 = 16$. Lo stesso simbolo (I, X, C, M)\n       si può scrivere al massimo tre volte di seguito: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>Se un simbolo più piccolo sta <strong>prima</strong> di uno più grande, si sottrae: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. Per questo 4 non si scrive IIII, ma IV.</p>"
   ],
   "examples": [
    {
     "task": "Quale numero è scritto in cifre romane $\\text{LXXIV}$?",
     "steps": [
      "Dividiamo: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "Scrivi in cifre romane il numero 39.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "Angolo, triangolo e quadrilateri",
   "summary": "Angolo acuto, retto e ottuso; triangolo, rettangolo, quadrato e altri quadrilateri.",
   "theory": [
    "<p>Un <strong>angolo</strong> è formato da due semirette (i lati) che partono dallo stesso punto, il <strong>vertice</strong>.\n       L'angolo retto ha la forma dell'angolo di un quaderno. Un angolo più piccolo di quello retto è <strong>acuto</strong>, un angolo più grande di quello retto\n       (ma che non è ancora una linea dritta) è <strong>ottuso</strong>.</p>",
    {
     "fig": "r4-uhly",
     "caption": "Angolo acuto, retto e ottuso. L'angolo retto si indica con un quadratino."
    },
    "<p>Il <strong>triangolo</strong> ha 3 lati, 3 vertici e 3 angoli. Il <strong>quadrilatero</strong> ha 4 lati, 4 vertici e 4 angoli.\n       Il <strong>rettangolo</strong> è un quadrilatero con 4 angoli retti, i suoi lati opposti sono lunghi uguali.\n       Il <strong>quadrato</strong> è un rettangolo che ha tutti e 4 i lati della stessa lunghezza.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "Il quadrato e il rettangolo hanno tutti gli angoli retti. Ogni quadrato è anche un rettangolo."
    }
   ],
   "examples": [
    {
     "task": "L'angolo fra le lancette dell'orologio alle 3:00 è acuto, retto o ottuso?",
     "steps": [
      "La lancetta corta indica il 3, quella lunga il 12.",
      "Fra di loro c'è un quarto di cerchio, la forma dell'angolo di un quaderno.",
      "<strong>È un angolo retto.</strong>"
     ]
    },
    {
     "task": "Un rettangolo ha un lato lungo 7 cm e l'altro 4 cm. Quanto sono lunghi gli altri due lati?",
     "steps": [
      "I lati opposti del rettangolo sono lunghi uguali.",
      "<strong>Gli altri due lati misurano 7 cm e 4 cm.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "Perimetro e area",
   "summary": "Il perimetro come lunghezza del contorno, l'area come numero di quadretti che coprono la figura.",
   "theory": [
    "<p>Il <strong>perimetro</strong> di una figura è la lunghezza del suo contorno, cioè la somma delle lunghezze di tutti i lati. Il perimetro del rettangolo con i lati\n       $a$ e $b$ è $a + b + a + b$, cioè $2\\cdot(a + b)$. Il perimetro del quadrato con il lato $a$ è $4\\cdot a$.</p>",
    "<p>L'<strong>area</strong> dice quanto spazio occupa una figura. La troviamo contando i quadretti che la coprono.\n       Un quadretto con il lato di 1 cm ha l'area di 1 centimetro quadrato ($1\\,\\text{cm}^2$).</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "Rettangolo di 4 cm × 3 cm: il perimetro è la lunghezza del contorno blu, l'area è il numero di quadretti all'interno."
    },
    "<p>Nel rettangolo non serve contare i quadretti uno per uno: in ogni riga ce ne sono tanti quanto è lungo un lato\n       e le righe sono tante quanto è lungo l'altro lato. Per questo area $= a\\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola il perimetro di un rettangolo con i lati di 8 cm e 5 cm.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>Il perimetro è $26\\,\\text{cm}$.</strong>"
     ]
    },
    {
     "task": "Un quadrato ha il perimetro di 36 cm. Quanto è lungo il suo lato?",
     "steps": [
      "Il quadrato ha 4 lati uguali, in tutto 36 cm.",
      "$36 : 4 = 9$.",
      "<strong>Il lato misura $9\\,\\text{cm}$.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "Equivalenze e lavoro con i dati",
   "summary": "Misure di lunghezza, massa, capacità e tempo; leggere i dati da una tabella e da un grafico.",
   "theory": [
    "<p><strong>Lunghezza:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>Massa:</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>Capacità:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>Tempo:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 giorno = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "Quando passiamo da un'unità più grande a una più piccola, il numero diventa più grande: moltiplichiamo. Al contrario dividiamo."
    },
    "<p>I <strong>dati</strong> si leggono spesso da una tabella o da un istogramma. L'altezza della colonna indica il valore:\n       lo leggiamo sull'asse verticale. Con i dati possiamo poi confrontare (quanto di più) e sommare (quanto in tutto).</p>"
   ],
   "examples": [
    {
     "task": "Quanti centimetri sono 4 m 35 cm?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Quanti chilogrammi sono $6\\,000\\,\\text{g}$?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$, passiamo a un'unità più grande, quindi dividiamo.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, perciò ${@3} : {@4} = {@5}$. Quindi ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, perciò ${@3}\\cdot {@4} = {@5}$. Quindi ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, il perimetro è ${@4}\\,\\text{{@5}}$.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, il perimetro è ${@2}\\,\\text{{@3}}$.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. Dove ci sono 0 pezzi, in quel posto scriviamo uno zero.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, lo zero all'inizio non lo scriviamo",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, scriviamo {@3}",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, perché ${@3}\\cdot {@4} = {@5}$, resto {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. Hanno votato {@2} {@3}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, aggiungiamo ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12 quadretti = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "Se avesse due angoli retti, i suoi lati sarebbero paralleli e non si incontrerebbero.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "Come si chiama questa figura? Scegli il nome più preciso.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "Come scrivi {@0} in cifre romane?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "Quanto è lungo il lato orizzontale del rettangolo (in cm)?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "Quanto è lungo il lato verticale del rettangolo (in cm)?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "Quale numero è scritto in cifre romane $\\text{{@0}}$?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "Che valore ha la cifra romana $\\text{{@0}}$?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "Che valore ha la parte $\\text{{@0}}$?",
  "Aký je tento uhol?": "Com'è questo angolo?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "L'addendo mancante si trova con la sottrazione: ${@0} - {@1} = {@2}$.",
  "Desiatky": "Decine",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "I bambini della classe hanno votato la frutta che preferiscono. Ogni bambino ha votato una volta.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "Dividi da sinistra; il resto alla fine deve essere minore di {@0}.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "Dividi da sinistra. Prendi tante cifre quante servono per poter dividere e poi abbassa le altre una alla volta.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "Nel perimetro hai contato solo due lati. Il perimetro è formato da tutti e quattro i lati.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "Verso destra (verso un'unità più piccola) moltiplichiamo, verso sinistra (verso un'unità più grande) dividiamo.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "Sposta il secondo prodotto di un posto a sinistra (vale ${@0}$) e somma: quanto fa ${@1} + {@2}$?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "Non hai spostato il secondo prodotto parziale di un posto a sinistra. Moltiplichi per le decine, quindi vale dieci volte di più.",
  "Dvakrát": "Il doppio",
  "Hodina má 60 minút a minúta 60 sekúnd.": "Un'ora ha 60 minuti e un minuto 60 secondi.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "Il valore {@0} ce l'ha la cifra romana {@1}, non {@2}.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "Non sommare i valori. “Di quanto di più” è una differenza: sottrai il valore minore dal maggiore.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "Somma i valori dei simboli. Se un simbolo più piccolo sta prima di uno più grande (per es. IV, IX, XL, XC), sottrailo.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "Cerchiamo quanto abbiamo sottratto: ${@0} - {@1} = {@2}$. Verifica: ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10 – e poi L, C, D, M.",
  "Jakub": "Giacomo",
  "Je toto tvrdenie pravdivé? „{@0}“": "Questa affermazione è vera? “{@0}”",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "Un triangolo ha 3 angoli, due ne hanno $2\\cdot 3 = 6$.",
  "Jednotky": "Unità",
  "Každý obdĺžnik je štvorec.": "Ogni rettangolo è un quadrato.",
  "Každý uhol má 2 ramená a 1 vrchol.": "Ogni angolo ha 2 lati e 1 vertice.",
  "Každý štvorec je obdĺžnik.": "Ogni quadrato è un rettangolo.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "Ogni quadretto della griglia ha il lato di 1 cm. Trova il perimetro (in cm) e l'area (in cm²) del rettangolo colorato. Scrivili nella forma “perimetro; area”. {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "Quanti autobus da {@0} posti servono perché ci stiano tutti?",
  "Koľko detí hlasovalo za {@0}?": "Quanti bambini hanno votato per {@0}?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "Quanti euro hanno in tutto? Calcola ${@0} + {@1} + {@2}$.",
  "Koľko eur má {@0}?": "Quanti euro ha {@0}?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "Quanti euro di resto? Calcola ${@0} - {@1}$.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "Quanto fa ${@0} + {@1}$ (due lati vicini)?",
  "Koľko je riadkov?": "Quante righe ci sono?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "Quanti chilogrammi di patate sono rimasti dopo la vendita?",
  "Koľko pravých uhlov má obdĺžnik?": "Quanti angoli retti ha un rettangolo?",
  "Koľko pravých uhlov má štvorec?": "Quanti angoli retti ha un quadrato?",
  "Koľko ramien má jeden uhol?": "Quanti lati ha un angolo?",
  "Koľko uhlov majú spolu dva trojuholníky?": "Quanti angoli hanno in tutto due triangoli?",
  "Koľko uhlov má trojuholník?": "Quanti angoli ha un triangolo?",
  "Koľko vrcholov má štvoruholník?": "Quanti vertici ha un quadrilatero?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "Quanti sacchi da {@0} kg si riempiono?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "Quante persone vanno in gita in tutto (alunni e insegnanti)?",
  "Koľko štvorčekov je v jednom riadku?": "Quanti quadretti ci sono in una riga?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "Quanti quadretti di 1 cm × 1 cm coprono il rettangolo colorato? (Scrivi l'area in cm².) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "Quante volte {@0} sta in {@1}?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "Quale cifra c'è nel numero ${@0}$ al posto delle {@1}?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "Quale numero è minore di {@0} rispetto a ${@1}$?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "Quale numero è maggiore di {@0} rispetto a ${@1}$?",
  "Lucia": "Lucia",
  "Martin": "Martino",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "Passi a un'unità più piccola: il numero diventa più grande, moltiplica.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "Passi a un'unità più grande: il numero diventa più piccolo, dividi.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "Un simbolo più piccolo prima di uno più grande si sottrae, non si aggiunge. Per esempio IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "Ha 3 lati e 3 vertici: è un triangolo.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "Ha 4 angoli retti e tutti i lati lunghi uguali: è un quadrato.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "Ha 4 angoli retti, ma i lati vicini hanno lunghezze diverse: è un rettangolo.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "Ha 4 lati, ma i suoi angoli non sono retti: è un quadrilatero generico.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "In gita vanno {@0} classi da {@1} alunni e con loro {@2} insegnanti. Un autobus ha {@3} posti. Quanti autobus devono prenotare perché ci stiano tutti?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "Prima ${@0}\\cdot {@1} = {@2}$, poi ${@3}\\cdot {@4} = {@5}$ (lo scriviamo spostato di un posto a sinistra, vale ${@6}$). Sommiamo: ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "Prima il prezzo della spesa: ${@0}\\cdot {@1} = {@2}$ {@3}. Poi il resto: ${@4} - {@5} = {@6}$. Di resto {@7} hanno dato {@8} {@9}.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "Prima moltiplica per le unità: quanto fa ${@0}\\cdot {@1}$?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "Prima trasforma l'unità più grande in quella più piccola e poi aggiungi il resto.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Prima trasforma l'unità più grande: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "Prima scopri quanti chilogrammi sono rimasti, poi scopri quante volte ci sta un sacco.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "Prima scopri quanto è costata tutta la spesa, poi sottrai questa somma dalla banconota.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "Scrivi i numeri in colonna, unità sotto unità, e somma da destra. Non dimenticare i riporti.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "Scrivi le cifre una dopo l'altra nell'ordine migliaia, centinaia, decine, unità. Non dimenticare gli zeri.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "Moltiplica da destra: prima le unità, poi le decine, le centinaia… Ricorda le decine del prodotto come riporto.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "Rettangolo 4 per 3 nella griglia a quadretti",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "Il rettangolo ha due lati più lunghi e due più corti. Somma tutti e quattro.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "Il rettangolo ha i lati opposti lunghi uguali.",
  "Obdĺžnik má všetky 4 uhly pravé.": "Il rettangolo ha tutti e 4 gli angoli retti.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "Il rettangolo ha {@0} {@1} da {@2} quadretti: ${@3}\\cdot {@4} = {@5}$. L'area è ${@6}\\,\\text{cm}^2$.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "Un rettangolo può avere i lati vicini di lunghezze diverse, per esempio 5 cm e 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "Rettangolo nella griglia a quadretti",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "Area: quanto fa ${@0}\\cdot {@1}$?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "Il perimetro è la lunghezza del bordo, l'area è il numero di quadretti all'interno.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "Il perimetro non è il numero di quadretti lungo il bordo, ma la lunghezza del bordo. Somma le lunghezze di tutti i lati.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "Il perimetro è formato da 4 lati uguali: ${@0} : 4 = {@1}$, il lato misura ${@2}\\,\\text{{@3}}$.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "Il perimetro è formato da due di queste coppie di lati: quanto fa $2\\cdot {@0}$?",
  "Obvod štvorca vydeľ štyrmi.": "Dividi per quattro il perimetro del quadrato.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "Perimetro: quanto fa $2\\cdot({@0} + {@1})$?",
  "Od menšenca odčítaj rozdiel.": "Dal minuendo sottrai la differenza.",
  "Od súčtu odčítaj známy sčítanec.": "Dalla somma sottrai l'addendo noto.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "Sottrai da destra. Se la cifra sopra è più piccola, aggiungile 10 e ricorda il riporto di 1 per la colonna successiva.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "Sottrai {@0}. Attenzione al cambio di ordine.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "Hai sottratto il prezzo di una sola cosa. Le cose comprate erano {@0}, prima calcola il prezzo di tutta la spesa.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "L'angolo acuto è più piccolo dell'angolo di un quaderno. Confronta questo angolo con l'angolo del quaderno.",
  "Ostrý, pravý a tupý uhol": "Angolo acuto, retto e ottuso",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "Confronta prima il numero di cifre, poi le cifre da sinistra a destra.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "Confronta l'angolo con l'angolo di un quaderno (angolo retto).",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "Confrontiamo da sinistra, ordine per ordine. Decide la prima cifra diversa: ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "Poi per le decine: quanto fa ${@0}\\cdot {@1}$?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "Guarda fino a quale linea arriva la colonna e leggi il numero a sinistra.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "Numero di persone: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, resto {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "Hai calcolato con 100. Per il tempo vale $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "L'angolo retto ha proprio la forma dell'angolo di un quaderno e si indica con un quadratino. Confronta questo angolo con l'angolo del quaderno.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "Immagina la figura e conta i suoi vertici, lati o angoli.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Trasforma: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "Trasforma: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "Equivalenze delle unità di lunghezza e di massa",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "Leggi il valore di ogni colonna e sommali tutti.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "Leggi i due valori e sottrai il minore dal maggiore.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "Aggiungi i voti per {@0}: quanti sono in tutto adesso?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "Aggiungi {@0}. Attenzione al cambio di ordine.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "Abbassa {@0}: quante volte {@1} sta in {@2}?",
  "Písomné násobenie 243 krát 32": "Moltiplicazione in colonna 243 per 32",
  "Písomné sčítanie 3476 plus 2858": "Addizione in colonna 3476 più 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "Hai diviso nei sacchi tutte le patate, anche quelle vendute. Prima sottrai quante ne hanno vendute.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "Scomponi il numero in decine e unità. Ricorda: 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "Scomponiamo: {@0}. In tutto ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "Hai contato gli ordini da sinistra. Le unità sono l'ultima cifra a destra, da lì spostati verso sinistra.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "Gli ordini si leggono da destra: unità, decine, centinaia, migliaia, decine di migliaia. Al posto delle {@0} c'è la cifra {@1}.",
  "Rímske číslice a ich hodnoty": "Le cifre romane e i loro valori",
  "Samuel": "Samuele",
  "Skúška: ${@0} + {@1} = {@2}$.": "Verifica: ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "Unisci le due parti: come scrivi {@0}?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "Ricorda: il rettangolo ha 4 angoli retti, il quadrato ha in più tutti i lati uguali.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "Conta i lati e guarda se gli angoli sono retti (il quadratino nell'angolo).",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "Conta i lati della figura. Il triangolo ha 3 lati, il quadrilatero 4.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "Conta tutte le persone, insegnanti compresi. Se dopo la divisione resta qualcuno, serve un altro autobus.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "Conta i quadretti in una riga e moltiplica per il numero di righe.",
  "Stovky": "Centinaia",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "Hai moltiplicato il lato per se stesso: quella sarebbe l'area. Il perimetro è la somma di tutti e quattro i lati.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "Hai sommato i lati. L'area è il numero di quadretti: quadretti in una riga per il numero di righe.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "Hai moltiplicato i lati: quella sarebbe l'area. Il perimetro è la lunghezza del bordo, i lati vanno sommati.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "I lati sono {@0} cm e {@1} cm. Perimetro: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Area: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "Diagramma a colonne della votazione",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "La colonna “{@0}” arriva fino alla linea {@1}. Hanno votato {@2} {@3}.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "Somma i valori di tutte le parti. Che numero è $\\text{{@0}}$?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "Hai sommato solo due lati. Il rettangolo ha quattro lati, perciò moltiplica ancora per due la somma di due lati vicini.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "Tabella dei valori posizionali per il numero 47 385",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "Lo stesso simbolo si può scrivere al massimo tre volte di fila. Invece di quattro simboli uguali usa la sottrazione, per esempio 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "Questa figura ha angoli retti (il quadratino nell'angolo), perciò ha un nome più preciso.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "Questa figura non ha angoli retti. Sia il quadrato sia il rettangolo hanno tutti gli angoli retti.",
  "Tisíce": "Migliaia",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "Questo è il prezzo di tutta la spesa. Scopri ancora quanti euro di resto hanno dato dalla banconota.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "Questo è il perimetro, la lunghezza del bordo. L'area è il numero di quadretti all'interno.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "Questo è il numero dei tipi di frutta. Somma quanti bambini hanno votato per ogni frutto.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "Questi sono i chilogrammi rimasti. Scopri ancora quanti sacchi da {@0} kg si riempiono.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "Questi li ha solo {@0}. Chiediamo quanti euro hanno in tutto i tre bambini.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "Questi sono gli angoli di un solo triangolo. I triangoli sono due.",
  "Treba {@0} {@1}.": "Servono {@0} {@1}.",
  "Trikrát": "Il triplo",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "Il triangolo ha 3 vertici, e perciò anche 3 angoli.",
  "Trojuholník môže mať dva pravé uhly.": "Un triangolo può avere due angoli retti.",
  "Tupý uhol je menší ako pravý uhol.": "L'angolo ottuso è più piccolo dell'angolo retto.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "L'angolo ottuso è più grande dell'angolo retto, quello più piccolo è l'angolo acuto.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "L'angolo ottuso è più grande dell'angolo di un quaderno. Confronta questo angolo con l'angolo del quaderno.",
  "Uhol je menší ako roh zošita, je ostrý.": "L'angolo è più piccolo dell'angolo di un quaderno, è acuto.",
  "Uhol je väčší ako roh zošita, je tupý.": "L'angolo è più grande dell'angolo di un quaderno, è ottuso.",
  "Uhol má tvar rohu zošita, je pravý.": "L'angolo ha la forma dell'angolo di un quaderno, è retto.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "In qualche colonna hai sottratto la cifra sopra da quella sotto, perché era più piccola. In quel caso aggiungi 10 alla cifra sopra e ricorda il riporto di 1.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "In un negozio avevano {@0} kg di patate. Ne hanno venduti {@1} kg e il resto l'hanno diviso in sacchi da {@2} kg. Quanti sacchi hanno riempito?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "Nel quoziente ti manca uno zero. Quando dopo aver abbassato una cifra non si può dividere, scrivi 0 nel quoziente e abbassa la cifra successiva.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "Hai tralasciato uno zero. Se manca un ordine, al suo posto scrivi 0, altrimenti le cifre si spostano.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "Moltiplica prima per le unità, poi per le decine. Sposta il secondo risultato di un posto a sinistra e somma i due.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "Hai moltiplicato solo per le unità. Moltiplica anche per le decine ({@0}) e somma i due prodotti parziali.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "Calcola il perimetro di un rettangolo con i lati ${@0}\\,\\text{{@1}}$ e ${@2}\\,\\text{{@3}}$. Scrivi il risultato in {@4}.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "Calcola il perimetro di un quadrato con il lato ${@0}\\,\\text{{@1}}$. Scrivi il risultato in {@2}.",
  "Vypočítaj písomne ${@0} + {@1}$.": "Calcola in colonna ${@0} + {@1}$.",
  "Vypočítaj písomne ${@0} - {@1}$.": "Calcola in colonna ${@0} - {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$.": "Calcola in colonna ${@0} : {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Calcola in colonna ${@0} : {@1}$. Scrivi quoziente e resto separati da un punto e virgola.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "Calcola in colonna ${@0}\\cdot {@1}$.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "Per {@0}: {@1}, per {@2}: {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "Hai dimenticato l'1 di riporto. Dopo il prestito aggiungilo alla cifra sotto nella colonna successiva.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "Hai dimenticato i riporti. Quando la somma in una colonna è 10 o più, aggiungi 1 nella colonna successiva a sinistra.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "Hai dimenticato di aggiungere ancora ${@0}\\,\\text{{@1}}$.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "Hai dimenticato di aggiungere le decine di riporto. Le decine del prodotto vanno aggiunte al prodotto nell'ordine successivo.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "Scrivi perimetro e area nella forma “perimetro; area”.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "Scrivi il quoziente con i numeri che hai ottenuto nei singoli passi, e il resto dell'ultimo passo.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "Scrivi il quoziente con i numeri che hai ottenuto nei singoli passi.",
  "Zapíš rímskymi číslicami číslo {@0}.": "Scrivi in cifre romane il numero {@0}.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "Scrivi il risultato con le cifre che hai ottenuto nelle colonne.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "Scrivi il risultato: da ogni colonna le unità della somma, le decine sono state riportate.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "Scrivi il risultato: da ogni prodotto le unità, le decine sono state riportate.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "Scrivi in cifre: {@0} {@1}, {@2} {@3}, {@4} {@5} e {@6} {@7}.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "Comincia dall'ultima cifra a destra, cioè dalle unità, e spostati verso sinistra.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "Scopri quante volte 60 sta nel numero dato.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "Il segno = va solo tra due numeri uguali. Questi numeri sono diversi almeno in una cifra.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "Il segno è girato al contrario. Confronta da sinistra: decide la prima cifra in cui i numeri sono diversi.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "Il segno è girato al contrario. Il numero con più cifre è maggiore.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "Le persone rimaste hanno bisogno ancora di un autobus, perciò servono {@0} {@1}.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "Patate rimaste: ${@0} - {@1} = {@2}$ kg. Numero di sacchi: ${@3} : {@4} = {@5}$.",
  "autobus": "autobus",
  "autobusy": "autobus",
  "banány": "banane",
  "dag": "dag",
  "desaťtisíce": "decine di migliaia",
  "desaťtisícov": "decine di migliaia",
  "dvakrát": "il doppio",
  "eur": "euro",
  "eurá": "euro",
  "hrušky": "pere",
  "jahody": "fragole",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "alla cifra sotto aggiungi l'1 di riporto (${@0} + 1 = {@1}$).",
  "napr. III": "per es. III",
  "napr. XIV": "per es. XIV",
  "napr. XX": "per es. XX",
  "nepravda": "falso",
  "obsah: 3 riadky po 4 štvorčekoch": "area: 3 righe da 4 quadretti",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "perimetro: 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "perimetro; area",
  "opíšeme {@0}": "ricopiamo {@0}",
  "ostrý": "acuto",
  "pravda": "vero",
  "pravý": "retto",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "abbassiamo {@0}: ${@1} : {@2} = {@3}$, perché ${@4}\\cdot {@5} = {@6}$, resto {@7}",
  "píšeme {@0}": "scriviamo {@0}",
  "píšeme {@0} a 1 si pamätáme": "scriviamo {@0} e riportiamo 1",
  "píšeme {@0} a {@1} si pamätáme": "scriviamo {@0} e riportiamo {@1}",
  "riadky": "righe",
  "riadok": "riga",
  "slivky": "prugne",
  "stovka": "centinaio",
  "tisíce": "migliaia",
  "tisícka": "migliaio",
  "tisícky": "migliaia",
  "tisícok": "migliaia",
  "tisícov": "migliaia",
  "trikrát": "il triplo",
  "tričiek": "magliette",
  "tričká": "magliette",
  "tupý": "ottuso",
  "uhol": "angolo",
  "všeobecný štvoruholník": "quadrilatero generico",
  "všetci traja": "tutti e tre",
  "všetky tri": "tutte e tre",
  "zaplatil": "ha pagato",
  "zaplatila": "ha pagato",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} Quanti bambini hanno votato in tutto?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} Quanti bambini hanno votato per {@1}?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} Quanti bambini in più hanno votato per {@1} rispetto a {@2}?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} Il quoziente è ${@1}$, il resto {@2}. Verifica: ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} Il risultato è ${@1}$. Verifica: ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} è meno di {@1}, perciò ${@2} - {@3} = {@4}$, scriviamo {@5} e riportiamo 1",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} è meno di {@1}, perciò calcola ${@2} - {@3}$. Quanto fa?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0} ha risparmiato {@1} {@2}. {@3} ha {@4} {@5} più di {@6} e {@7} ha {@8} di {@9}. Quanti euro hanno {@10} in tutto?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0} ha {@1} di {@2}, non di {@3}. Moltiplica la somma che ha {@4}.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0} {@1} {@2} {@3} da {@4} {@5} e {@6} con una banconota da {@7} euro. Quanti euro di resto {@8} hanno dato?",
  "{@0}. Spolu {@1}.": "{@0}. In tutto {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. In tutto: ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}: quanto fa ${@1} + {@2} + 1$? (L'1 è il riporto della colonna precedente.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}: quanto fa ${@1} + {@2}$?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}: quanto fa ${@1}\\cdot {@2} + {@3}$? ({@4} è il riporto dell'ordine precedente.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}: quanto fa ${@1}\\cdot {@2}$?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "Sì, i lati opposti del rettangolo sono lunghi uguali.",
  "Áno, to je vlastnosť štvorca.": "Sì, è una proprietà del quadrato.",
  "útvar": "figura",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "Non sommare subito i numeri. Prima trasforma ${@0}\\,\\text{{@1}}$ nell'unità più piccola $\\text{{@2}}$.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "Non sommare i numeri. L'addendo mancante si trova con la sottrazione: dalla somma sottrai l'addendo noto.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "Non sommare i numeri. Il numero cercato si trova con la sottrazione: dal minuendo sottrai la differenza.",
  "Čísla sú rovnaké.": "I numeri sono uguali.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "Il numero con più cifre è maggiore, perciò ${@0} {@1} {@2}$.",
  "čerešne": "ciliegie",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "Il quadrato è davvero anche un rettangolo, ma cerchiamo il nome più preciso. Guarda se tutti i lati sono lunghi uguali.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "Il quadrato ha 4 angoli retti e i lati opposti uguali, quindi è un rettangolo speciale.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "Un quadrato ha perimetro ${@0}\\,\\text{{@1}}$. Quanto è lungo il suo lato (in {@2})?",
  "Štvorec má všetky 4 uhly pravé.": "Il quadrato ha tutti e 4 gli angoli retti.",
  "Štvorec má všetky strany rovnako dlhé.": "Il quadrato ha tutti i lati lunghi uguali.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "Il quadrato ha tutti i lati lunghi uguali. Qui i lati vicini hanno lunghezze diverse.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "Quadrato, rettangolo, triangolo e quadrilatero generico",
  "Štvoruholník má 4 strany a 4 vrcholy.": "Il quadrilatero ha 4 lati e 4 vertici.",
  "Štyrikrát": "Il quadruplo",
  "štyrikrát": "il quadruplo",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "“… in più” significa aggiungere, “il doppio, il triplo…” significa moltiplicare. Poi somma tutto.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "“{@0}” significa moltiplicare, non aggiungere {@1}."
 }
});
