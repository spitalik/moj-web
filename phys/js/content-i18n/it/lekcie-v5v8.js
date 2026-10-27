/* Italiano: lezioni dei livelli v5–v8 (js/rocniky/v5.js, v6.js, v7.js, v8.js). Struttura e chiavi: js/content-i18n.js. */
CONTENT_I18N.add('it', {
  lessons: {
    'v5-dualizmus': {
      title: `Dualismo onda-particella`,
      summary: `La luce e le particelle si comportano sia come onde sia come particelle; la lunghezza d'onda di de Broglie.`,
      theory: [
        `<p>L'effetto fotoelettrico e l'effetto Compton hanno mostrato che la luce si comporta come un flusso di particelle (fotoni) con energia $E=h\\,f$. Interferenza e diffrazione, invece, mostrano proprietà ondulatorie. Parliamo di <strong>dualismo onda-particella</strong>: ogni oggetto quantistico possiede entrambe le proprietà, ma in una data misura se ne manifesta soltanto una.</p>`,
        `<p>Louis de Broglie propose che anche le particelle con quantità di moto $p$ abbiano una lunghezza d'onda $\\lambda=\\frac{h}{p}$. Per un elettrone libero con velocità $v$ (non relativistica) vale $p=m_e\\,v$. Più una particella è pesante o veloce, più corta è la sua lunghezza d'onda.</p>`,
        `<p>Per questo i corpi macroscopici (ad esempio una pallina) hanno una lunghezza d'onda così piccola da non poter essere osservata, mentre gli elettroni in un cristallo producono una figura di diffrazione simile a quella dei raggi X. La costante $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ determina dove si manifestano gli effetti quantistici.</p>`,
        { fig: 'v5v8-dualizmus', caption: `La lunghezza d'onda di de Broglie λ = h/p: quanto maggiore è la quantità di moto, tanto più corta è l'onda.` }
      ],
      examples: [
        { task: `Un elettrone si muove con velocità $v=2\\cdot 10^{6}\\,\\text{m/s}$. Qual è la sua lunghezza d'onda di de Broglie? Usa $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.`,
          steps: [`$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.`, `$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.`, `<strong>Risultato: $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>`] }
      ]
    },
    'v5-vlnova-funkcia': {
      title: `Funzione d'onda e probabilità`,
      summary: `La funzione d'onda ψ, la densità di probabilità |ψ|² e il calcolo della probabilità per un intervallo.`,
      theory: [
        `<p>Lo stato di una particella quantistica è descritto dalla <strong>funzione d'onda</strong> $\\psi(x,t)$. Di per sé non è misurabile. Il suo quadrato $|\\psi|^2$ è la <strong>densità di probabilità</strong>: la probabilità che la particella si trovi in un piccolo intorno del punto $x$ è $|\\psi|^2\\,dx$.</p>`,
        `<p>La probabilità di trovare la particella in un intervallo finito $[x_1,x_2]$ è l'integrale $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$. La probabilità totale è 1, quindi $\\int|\\psi|^2\\,dx=1$. Una funzione di questo tipo si dice normalizzata.</p>`,
        `<p>Pertanto la meccanica quantistica fornisce soltanto le <em>probabilità</em> dei risultati di misura, non valori esatti per una singola particella. Se la densità è uniforme, la probabilità è uguale al rapporto tra la lunghezza dell'intervallo e la lunghezza dell'intera regione.</p>`,
        { fig: 'v5v8-pravdepodobnost', caption: `Per una densità uniforme |ψ|² la probabilità è proporzionale alla lunghezza dell'intervallo: P = a/L.` }
      ],
      examples: [
        { task: `La particella è distribuita con la stessa densità su un segmento di lunghezza $L=20\\,\\text{nm}$. Qual è la probabilità che si trovi nel tratto da $0$ a $5\\,\\text{nm}$?`,
          steps: [`La densità è costante, $|\\psi|^2=\\frac{1}{L}$.`, `$P=\\frac{5}{20}=\\frac{1}{4}$.`, `<strong>Risultato: $P=0{,}25$</strong>`] }
      ]
    },
    'v5-schrodinger': {
      title: `Equazione di Schrödinger`,
      summary: `L'equazione di Schrödinger indipendente dal tempo e le energie di una particella in un pozzo di potenziale infinitamente profondo.`,
      theory: [
        `<p>La <strong>equazione di Schrödinger</strong> descrive l'evoluzione della funzione d'onda. La sua forma indipendente dal tempo $\\hat{H}\\psi=E\\psi$ afferma che, per gli stati stazionari, l'energia $E$ è costante e la funzione d'onda è un'autofunzione dell'operatore energia $\\hat{H}$.</p>`,
        `<p>Consideriamo una particella in un <strong>pozzo di potenziale infinitamente profondo</strong> di larghezza $L$. La funzione d'onda deve annullarsi ai bordi del pozzo, quindi nel pozzo entra solo un numero intero di semilunghezze d'onda. Ne risultano energie discrete $E_n=\\frac{n^2 h^2}{8 m L^2}$, dove $n=1,2,3,\\dots$</p>`,
        `<p>L'energia cresce con il quadrato di $n$ e diminuisce con il quadrato della larghezza del pozzo. Perciò per un elettrone in un pozzo largo $1\\,\\text{nm}$ l'energia più bassa è $E_1=0{,}376\\,\\text{eV}$, mentre in un pozzo più largo i livelli sono più ravvicinati.</p>`,
        { fig: 'v5v8-jama', caption: `Una particella in un pozzo infinitamente profondo ha solo livelli discreti; l'energia cresce con n².` }
      ],
      examples: [
        { task: `Un elettrone si trova in un pozzo di larghezza $L=1\\,\\text{nm}$ nello stato $n=2$. Qual è la sua energia? Per $n=1$ vale $E_1=0{,}376\\,\\text{eV}$.`,
          steps: [`$E_n=E_1\\cdot\\frac{n^2}{L^2}$ con $L$ in nanometri.`, `$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.`, `<strong>Risultato: $E_2\\approx 1{,}5\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-operatory': {
      title: `Operatori e grandezze osservabili`,
      summary: `Gli operatori in meccanica quantistica, le autofunzioni e gli autovalori come risultati di misura.`,
      theory: [
        `<p>A ogni grandezza fisica ($x$, quantità di moto, energia) corrisponde un <strong>operatore</strong>, cioè una regola che trasforma una funzione in un'altra. Ad esempio alla quantità di moto corrisponde $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$ e all'energia l'operatore hamiltoniano $\\hat{H}$.</p>`,
        `<p>Se un operatore $\\hat{A}$ agisce su una funzione $\\psi$ in modo che $\\hat{A}\\psi=a\\,\\psi$, allora $\\psi$ è una <strong>autofunzione</strong> e il numero $a$ è un <strong>autovalore</strong>. La misura della grandezza $A$ dà sempre uno dei suoi autovalori; durante la misura lo stato si trasforma nell'autofunzione corrispondente.</p>`,
        `<p>Le grandezze osservabili hanno autovalori reali, perché i loro operatori sono hermitiani. Per questo i risultati di misura sono sempre numeri reali.</p>`
      ],
      examples: [
        { task: `L'operatore $\\hat{D}=\\frac{d}{dx}$ agisce su $\\psi=e^{3x}$. Qual è l'autovalore?`,
          steps: [`$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.`, `Vale $\\hat{D}\\psi=3\\psi$.`, `<strong>Risultato: l'autovalore è $3$</strong>`] }
      ]
    },
    'v5-kvantovanie': {
      title: `Quantizzazione dell'energia`,
      summary: `Perché una particella legata ha solo energie discrete, sull'esempio dell'oscillatore armonico.`,
      theory: [
        `<p>Se una particella è <strong>legata</strong> (ad esempio in un pozzo o in un sistema oscillante), la sua funzione d'onda deve annullarsi ai bordi della regione. Questa condizione limita le energie possibili a <strong>livelli discreti</strong>. Una particella libera ha invece energie continue.</p>`,
        `<p>L'oscillatore armonico quantistico ha livelli $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$, dove $n=0,1,2,\\dots$ e $\\omega$ è la pulsazione. I livelli adiacenti sono equidistanti, distanti $\\hbar\\omega$ l'uno dall'altro.</p>`,
        `<p>Il livello più basso ($n=0$) non ha energia nulla, ma $\\frac{1}{2}\\hbar\\omega$. Questa energia di punto zero è una conseguenza del principio di indeterminazione: una particella non può essere contemporaneamente ferma in un unico punto.</p>`,
        { fig: 'v5v8-oscilator', caption: `I livelli dell'oscillatore sono equidistanti, e il più basso non è zero ma ½ħω.` }
      ],
      examples: [
        { task: `Qual è l'energia dell'oscillatore nello stato $n=3$ in unità di $\\hbar\\omega$?`,
          steps: [`$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.`, `<strong>Risultato: $E_3=3{,}5\\,\\hbar\\omega$</strong>`] }
      ]
    },
    'v5-spin': {
      title: `Momento angolare e spin`,
      summary: `Momento angolare orbitale, numero quantico l, numero di stati e spin dell'elettrone.`,
      theory: [
        `<p>Il momento angolare orbitale di un elettrone nell'atomo è quantizzato: il suo modulo è $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$, dove $l=0,1,2,\\dots$ è il <strong>numero quantico orbitale</strong>. La proiezione su un asse scelto può assumere i valori $L_z=m_l\\hbar$.</p>`,
        `<p>Il numero quantico magnetico $m_l$ assume i valori da $-l$ a $+l$ compreso lo zero, quindi per un dato $l$ ci sono esattamente $2l+1$ stati possibili. Per $l=0$ c'è uno stato, per $l=1$ tre stati.</p>`,
        `<p>Lo <strong>spin</strong> è il momento angolare intrinseco dell'elettrone, che non ha un'immagine classica di una pallina che ruota. L'elettrone ha numero quantico di spin $s=\\tfrac{1}{2}$, quindi esistono due possibili orientazioni. Insieme al momento orbitale determina la struttura dei livelli atomici.</p>`,
        { fig: 'v5v8-moment', caption: `Il numero quantico magnetico m_l assume 2l + 1 valori, da −l a +l.` }
      ],
      examples: [
        { task: `Un elettrone ha numero quantico orbitale $l=2$. Quanti valori diversi di $m_l$ sono possibili?`,
          steps: [`I valori di $m_l$ vanno da $-2$ a $+2$: $-2,-1,0,1,2$.`, `<strong>Risultato: $2l+1=5$ valori</strong>`] }
      ]
    },
    'v5-vodik': {
      title: `Atomo di idrogeno e stati quantistici`,
      summary: `Livelli energetici dell'atomo di idrogeno e energia del fotone emesso nella transizione tra di essi.`,
      theory: [
        `<p>Le energie dell'elettrone nell'atomo di idrogeno sono $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$, dove $n=1,2,3,\\dots$ è il numero quantico principale. Il segno negativo indica che l'elettrone è legato; per $n\\to\\infty$ l'energia tende a zero.</p>`,
        `<p>Quando un elettrone passa da un livello superiore $n_i$ a uno inferiore $n_f$, l'atomo emette un fotone con energia $E_f=E_{n_i}-E_{n_f}$ in valore assoluto. Nell'assorbimento del fotone accade il contrario. Per questo lo spettro dell'idrogeno è formato da righe e non da una banda continua.</p>`,
        `<p>La più importante è la serie di transizioni verso $n_f=2$ (serie di Balmer), che si trova nella regione visibile della luce. Le transizioni verso $n_f=1$ danno radiazione ultravioletta.</p>`,
        { fig: 'v5v8-vodik', caption: `Nella transizione a un livello inferiore l'atomo emette un fotone con energia uguale alla differenza dei livelli.` }
      ],
      examples: [
        { task: `Un elettrone nell'atomo di idrogeno passa da $n=3$ a $n=2$. Quale energia ha il fotone emesso?`,
          steps: [`$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ e $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.`, `$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Risultato: $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>`] }
      ]
    },
    'v5-neurcitost': {
      title: `Effetto tunnel e principio di indeterminazione`,
      summary: `Il principio di indeterminazione di Heisenberg e l'effetto tunnel attraverso una barriera che classicamente non si può superare.`,
      theory: [
        `<p>Il <strong>principio di indeterminazione di Heisenberg</strong> afferma che posizione e quantità di moto di una particella non possono essere determinate simultaneamente con precisione arbitraria: $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. Si tratta di una proprietà delle onde, non di una carenza della tecnica di misura. Più precisamente conosciamo la posizione, maggiore è l'incertezza della quantità di moto.</p>`,
        `<p>L'<strong>effetto tunnel</strong> significa che una particella attraversa una barriera di potenziale che classicamente non supererebbe, perché non ha energia sufficiente. La funzione d'onda decresce esponenzialmente nella barriera, ma non fino a zero, e sull'altro lato della barriera c'è una probabilità non nulla di trovare la particella.</p>`,
        `<p>L'effetto tunnel spiega il decadimento radioattivo alfa, il funzionamento del microscopio a effetto tunnel e la corrente elettrica in alcuni componenti a semiconduttore.</p>`,
        { fig: 'v5v8-tunel', caption: `Una particella con energia inferiore all'altezza della barriera ha dentro la barriera un'onda che decresce esponenzialmente e può attraversarla per effetto tunnel.` }
      ],
      examples: [
        { task: `La posizione di un elettrone è nota con un'incertezza $\\Delta x=1\\,\\text{pm}$. Qual è l'incertezza minima della sua quantità di moto? Usa $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.`,
          steps: [`$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.`, `$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.`, `<strong>Risultato: $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v6-specialna': {
      title: `Relatività ristretta`,
      summary: `Due postulati, dilatazione dei tempi e fattore di Lorentz.`,
      theory: [
        `<p>La relatività ristretta si basa su due postulati: (1) le leggi fisiche sono le stesse in tutti i sistemi inerziali, (2) la velocità della luce nel vuoto $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ è la stessa per ogni osservatore, indipendentemente dal moto della sorgente.</p>`,
        `<p>Dal secondo postulato segue che il tempo non è assoluto. Gli orologi in movimento vanno più lenti: l'intervallo $\\Delta t$ misurato nel sistema rispetto al quale l'orologio si muove è più lungo del tempo proprio $\\Delta t_0$ nel suo sistema di quiete. Vale $\\Delta t=\\gamma\\,\\Delta t_0$, dove $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ è il <strong>fattore di Lorentz</strong>.</p>`,
        `<p>L'effetto è trascurabile alle velocità ordinarie, perché $\\gamma$ è vicino a 1. Alle velocità prossime a $c$ cresce molto rapidamente. Ad esempio, le particelle dei raggi cosmici vivono più a lungo di quanto la fisica classica consentirebbe.</p>`,
        { fig: 'v5v8-gama', caption: `Il fattore di Lorentz γ è vicino a 1 a basse velocità e cresce bruscamente quando la velocità si avvicina a c.` }
      ],
      examples: [
        { task: `Una particella si muove con velocità $v=0{,}6\\,c$. Qual è il suo fattore di Lorentz?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.`, `$\\sqrt{0{,}64}=0{,}8$, quindi $\\gamma=\\frac{1}{0{,}8}$.`, `<strong>Risultato: $\\gamma=1{,}25$</strong>`] }
      ]
    },
    'v6-lorentz': {
      title: `Trasformazioni di Lorentz`,
      summary: `Come cambiano le coordinate spaziali e temporali di un evento passando a un altro sistema inerziale.`,
      theory: [
        `<p>La trasformazione di Galileo $x'=x-vt$ vale solo alle basse velocità. Alle velocità prossime a $c$ servono le <strong>trasformazioni di Lorentz</strong>, che conservano la velocità della luce. Per il sistema $S'$, che si muove con velocità $v$ nel verso positivo dell'asse $x$, vale $x'=\\gamma\\,(x-\\beta\\,ct)$ e $ct'=\\gamma\\,(ct-\\beta\\,x)$, dove $\\beta=\\frac{v}{c}$.</p>`,
        `<p>Spazio e tempo si mescolano così: un evento simultaneo in un sistema può non esserlo in un altro. Questa <strong>relatività della simultaneità</strong> è una conseguenza diretta della velocità finita della luce.</p>`,
        `<p>Nella trasformazione inversa cambia il segno della velocità. Per $v\\to 0$ si ha $\\gamma\\to 1$ e otteniamo di nuovo la relazione classica $x'=x-vt$: le trasformazioni di Lorentz contengono la fisica classica come caso limite.</p>`,
        { fig: 'v5v8-lorentz', caption: `Gli assi x′ e ct′ del sistema S′ sono inclinati; la trasformazione di Lorentz ricalcola le coordinate dell'evento.` }
      ],
      examples: [
        { task: `Un evento ha nel sistema $S$ le coordinate $x=8\\,\\text{m}$ e $ct=4\\,\\text{m}$. Il sistema $S\'$ si muove con velocità $0{,}6\\,c$ nel verso positivo dell'asse $x$. Qual è $x\'$ in $S\'$?`,
          steps: [`$\\gamma=1{,}25$, $\\beta=0{,}6$.`, `$x\'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.`, `<strong>Risultato: $x\'=7\\,\\text{m}$</strong>`] }
      ]
    },
    'v6-energia': {
      title: `Energia e quantità di moto relativistiche`,
      summary: `Energia totale e cinetica di una particella alle alte velocità.`,
      theory: [
        `<p>Nella relatività una particella possiede l'energia a riposo $E_0=mc^2$, anche quando è ferma. L'energia totale di una particella in moto è $E=\\gamma\\,mc^2$. Per $v\\to 0$ si ha $\\gamma\\to 1$ e l'energia totale tende a quella a riposo.</p>`,
        `<p>L'<strong>energia cinetica</strong> è la differenza $E_k=E-E_0=(\\gamma-1)\\,mc^2$. È l'energia che deve fornire il lavoro per accelerare la particella da fermo fino alla velocità $v$. Alle velocità prossime a $c$ l'energia cinetica cresce senza limiti, quindi nessuna particella con massa a riposo non nulla può raggiungere la velocità della luce.</p>`,
        `<p>La quantità di moto relativistica è $p=\\gamma\\,m\\,v$. Per energia e quantità di moto vale anche la relazione $E^2=(pc)^2+(mc^2)^2$, utile per i fotoni, per i quali $m=0$.</p>`,
        { fig: 'v5v8-energia', caption: `L'energia totale γmc² è l'energia a riposo mc² più l'energia cinetica (γ − 1)mc².` }
      ],
      examples: [
        { task: `Un elettrone ($m\\,c^2=0{,}511\\,\\text{MeV}$) si muove con velocità $0{,}8\\,c$. Qual è la sua energia cinetica?`,
          steps: [`$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.`, `$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.`, `<strong>Risultato: $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>`] }
      ]
    },
    'v6-ekvivalencia': {
      title: `Equivalenza di massa ed energia`,
      summary: `La relazione E = mc² e la conversione da massa a energia e viceversa.`,
      theory: [
        `<p>Il risultato più noto della relatività è la relazione $E=mc^2$: la massa è una forma di energia e l'energia possiede una massa corrispondente $m=\\frac{E}{c^2}$. Non è soltanto una formula per il moto, ma una proprietà di ogni corpo, anche quando è fermo.</p>`,
        `<p>Piccole variazioni di massa corrispondono a grandi quantità di energia, perché $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ è un numero molto grande. Le reazioni nucleari liberano energia proprio perché la somma delle masse dei prodotti è inferiore di una piccola frazione a quella dei nuclei di partenza.</p>`,
        `<p>Nei calcoli attenzione alle unità: massa in chilogrammi, velocità in metri al secondo, energia in joule. Il terajoule è $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.</p>`
      ],
      examples: [
        { task: `Quanta energia libera la conversione completa di $1\\,\\text{g}$ di materia? Risultato in terajoule.`,
          steps: [`$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.`, `$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.`, `<strong>Risultato: $90\\,\\text{TJ}$</strong>`] }
      ]
    },
    'v6-interval': {
      title: `Intervalli spaziotemporali`,
      summary: `Intervallo invariante nel diagramma spaziotemporale e tempo proprio.`,
      theory: [
        `<p>La relatività unisce spazio e tempo in un <strong>spaziotempo</strong> quadridimensionale. Gli eventi sono punti al suo interno e la loro "distanza" non è quella ordinaria. L'<strong>intervallo</strong> tra due eventi con differenza di tempo $\\Delta t$ e differenza di posizione $\\Delta x$ è $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$.</p>`,
        `<p>L'intervallo ha lo stesso valore in ogni sistema inerziale, per questo si dice <strong>invariante</strong>. Se $\\Delta s^2>0$, l'intervallo è di tipo tempo e esiste un sistema in cui i due eventi avvengono nello stesso punto. Il tempo proprio è allora $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$.</p>`,
        `<p>Con unità in cui $c=1$ (lunghezze misurate in secondi-luce) basta calcolare $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$. Il risultato è sempre minore o uguale a $\\Delta t$, ed è di nuovo la dilatazione dei tempi.</p>`,
        { fig: 'v5v8-interval', caption: `Per un intervallo di tipo tempo il tempo proprio Δτ = √(Δt² − Δx²) è minore di Δt.` }
      ],
      examples: [
        { task: `Due eventi sono separati nel tempo di $\\Delta t=5\\,\\text{s}$ e nello spazio di $\\Delta x=3\\,\\text{ls}$ (secondi-luce). Qual è il tempo proprio $\\Delta\\tau$?`,
          steps: [`$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.`, `<strong>Risultato: $\\Delta\\tau=4\\,\\text{s}$</strong>`] }
      ]
    },
    'v6-vseobecna': {
      title: `Relatività generale`,
      summary: `Principio di equivalenza, gravità come curvatura dello spaziotempo e raggio di Schwarzschild.`,
      theory: [
        `<p>La relatività generale (1915) si basa sul <strong>principio di equivalenza</strong>: localmente non è possibile distinguere un'accelerazione da un campo gravitazionale. Una persona in un ascensore in caduta libera in un campo gravitazionale non sente il proprio peso, esattamente come un astronauta in orbita.</p>`,
        `<p>Da ciò Einstein dedusse che la gravità non è una forza nel senso classico, ma la <strong>curvatura dello spaziotempo</strong> causata da massa ed energia. I corpi si muovono lungo i percorsi più brevi possibili, detti geodetiche, che nello spazio curvo risultano incurvati.</p>`,
        `<p>Un campo gravitazionale intenso rallenta il tempo: gli orologi vicino a un corpo massiccio vanno più lentamente che lontano da esso. Per una massa $M$ il <strong>raggio di Schwarzschild</strong> è $r_s=\\frac{2GM}{c^2}$. Per la Terra è circa $9$ mm, per il Sole circa $3\\,\\text{km}$.</p>`
      ],
      examples: [
        { task: `Qual è il raggio di Schwarzschild del Sole, se $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ e $c=3\\cdot 10^{8}\\,\\text{m/s}$?`,
          steps: [`$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.`, `$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.`, `<strong>Risultato: $r_s\\approx 2{,}95\\,\\text{km}$</strong>`] }
      ]
    },
    'v6-zakrivenie': {
      title: `Curvatura dello spaziotempo`,
      summary: `Come la materia curva lo spaziotempo e quali fenomeni lo dimostrano.`,
      theory: [
        `<p>Immagina un telo elastico sul quale appoggi una palla pesante. Il telo si incurva e le palline piccole vi rotolano verso il centro. Analogamente la materia curva lo spaziotempo e i corpi si muovono su traiettorie curve. L'analogia serve solo a fini illustrativi, non è un modello preciso.</p>`,
        `<p>La prova più diretta è la <strong>deflessione della luce</strong> nel passaggio vicino al Sole. La luce si propaga lungo il percorso più breve, che nello spazio curvo non è una retta. La stella dietro il Sole appare quindi spostata. Questo effetto fu misurato da Eddington nel 1919.</p>`,
        `<p>Altri fenomeni, ad esempio lo spostamento gravitazionale delle righe spettrali o il rallentamento del tempo vicino alla materia, si possono misurare con la precisione necessaria per la navigazione dei satelliti GPS. Fenomeni che non dipendono dalla gravità né dallo spaziotempo, come la scomposizione della luce bianca in un prisma, non si spiegano con la curvatura.</p>`,
        { fig: 'v5v8-zakrivenie', caption: `La massa curva lo spaziotempo e i corpi si muovono su traiettorie curve. La griglia è solo un'analogia illustrativa.` }
      ],
      examples: [
        { task: `Quale dei due fenomeni è conseguenza della curvatura dello spaziotempo: la deflessione della luce vicino al Sole, oppure il cambiamento di colore della luce in un prisma?`,
          steps: [`La curvatura dello spaziotempo descrive la gravità, che influisce sul percorso della luce.`, `La scomposizione della luce in un prisma è conseguenza della dipendenza dell'indice di rifrazione dalla lunghezza d'onda.`, `<strong>Risultato: la deflessione della luce vicino al Sole</strong>`] }
      ]
    },
    'v6-gravvlny': {
      title: `Onde gravitazionali e buchi neri`,
      summary: `Onde gravitazionali come increspature dello spaziotempo e orizzonte degli eventi di un buco nero.`,
      theory: [
        `<p>Le <strong>onde gravitazionali</strong> sono increspature dello spaziotempo che si propagano alla velocità della luce. Nascono dal moto accelerato di grandi masse, ad esempio dalla fusione di due buchi neri. La prima osservazione diretta fu ottenuta nel 2015 dall'interferometro LIGO.</p>`,
        `<p>Un <strong>buco nero</strong> è una regione in cui la velocità di fuga è maggiore di $c$, quindi la luce non può uscirne. Il confine è l'<strong>orizzonte degli eventi</strong> al raggio di Schwarzschild $r_s=\\frac{2GM}{c^2}$. All'interno dell'orizzonte tutte le traiettorie sono orientate verso il centro.</p>`,
        `<p>Il raggio dell'orizzonte cresce in proporzione diretta alla massa. Un buco nero con la massa del Sole ha un orizzonte di circa $3\\,\\text{km}$, un buco nero con dieci volte la massa del Sole di circa $30\\,\\text{km}$.</p>`,
        { fig: 'v5v8-horizont', caption: `Il raggio dell'orizzonte degli eventi è r_s = 2GM/c²; la luce dall'interno dell'orizzonte non può sfuggire.` }
      ],
      examples: [
        { task: `Qual è il raggio dell'orizzonte di un buco nero di massa $10\\,M_{\\odot}$, se per il Sole vale $r_s\\approx 2{,}95\\,\\text{km}$?`,
          steps: [`Il raggio è proporzionale alla massa: $r_s=2{,}95\\,\\text{km}\\cdot 10$.`, `<strong>Risultato: $r_s\\approx 29{,}5\\,\\text{km}$</strong>`] }
      ]
    },
    'v7-atom': {
      title: `Struttura dell'atomo e guscio elettronico`,
      summary: `Nucleo, guscio e distribuzione degli elettroni nei gusci e loro capacità.`,
      theory: [
        `<p>L'atomo ha un <strong>nucleo</strong> formato da protoni e neutroni (insieme detti nucleoni) e un <strong>guscio elettronico</strong>. Il numero dei protoni è il numero atomico $Z$ e determina l'elemento chimico. Un atomo neutro ha altrettanti elettroni.</p>`,
        `<p>Gli elettroni non sono distribuiti in modo arbitrario. Si trattengono in <strong>gusci</strong> con numero $n = 1, 2, 3, \\dots$ (indicati con K, L, M). Il guscio con numero $n$ contiene al massimo $2n^2$ elettroni: K ne contiene 2, L ne contiene 8, M ne contiene 18.</p>`,
        `<p><strong>Perché proprio questi numeri?</strong> Gli elettroni sono descritti dalla meccanica quantistica. Ogni stato dell'elettrone è determinato da un insieme di numeri quantici e il principio di Pauli vieta che due elettroni nell'atomo abbiano lo stesso stato. I gusci si riempiono dal basso verso l'alto e il guscio più esterno (di valenza) determina le proprietà chimiche dell'elemento.</p>`,
        `<ol><li>Dalla tavola periodica ricava $Z$, e quindi il numero di elettroni.</li><li>Distribuiscili nei gusci: prima K, poi L, poi M.</li><li>L'ultimo guscio occupato è quello di valenza.</li></ol>`,
        { fig: 'obr-atom', caption: `Modello semplificato dell'atomo: un nucleo positivo ed elettroni su orbite.` }
      ],
      examples: [
        { task: `Quanti elettroni può contenere al massimo il guscio L (numero $n = 2$)?`,
          steps: [`Sostituiamo $n = 2$ nella formula $2n^2$.`, `$2\\cdot 2^2 = 8$.`, `<strong>Risultato: 8 elettroni</strong>`] },
        { task: `Il carbonio ha $Z = 6$. Quanti elettroni ci sono nel suo guscio K e nel suo guscio L?`,
          steps: [`Il guscio K contiene 2 elettroni.`, `Gli $6 - 2 = 4$ elettroni restanti vanno nel guscio L.`, `<strong>Risultato: 2 in K e 4 in L</strong>`] }
      ]
    },
    'v7-spektra': {
      title: `Spettri atomici e livelli energetici`,
      summary: `Transizioni degli elettroni tra livelli e energia dei fotoni emessi.`,
      theory: [
        `<p>Un atomo può avere solo determinati <strong>livelli energetici</strong>. Quando un elettrone passa da un livello superiore a uno inferiore, emette un <strong>fotone</strong> la cui energia è uguale alla differenza tra i livelli. Viceversa, un fotone di energia adeguata può eccitare l'elettrone verso un livello superiore.</p>`,
        `<p>L'energia del fotone è $E = h f = \\dfrac{h c}{\\lambda}$, dove $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ è la costante di Planck. In fisica atomica l'energia si esprime in elettronvolt: $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
        `<p>Per l'atomo di idrogeno vale $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$. Lo stato fondamentale ($n = 1$) è il più basso e i livelli si avvicinano allo zero dall'alto. Nella transizione da $n_i$ a $n_f$ nasce un fotone di energia $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$.</p>`,
        `<p><strong>Perché gli spettri sono a righe?</strong> I livelli sono discreti, quindi i fotoni hanno solo alcune energie precise. Nello spettro si vedono quindi righe nette, non un arcobaleno continuo. Ogni elemento ha un proprio insieme di righe, perciò lo spettro è la sua "impronta digitale".</p>`,
        { fig: 'v5v8-vodik', caption: `Nella transizione a un livello inferiore l'atomo emette un fotone con energia uguale alla differenza dei livelli.` }
      ],
      examples: [
        { task: `Un elettrone nell'atomo di idrogeno passa dal livello $n=3$ al livello $n=2$. Quale energia ha il fotone emesso?`,
          steps: [`Differenza dei livelli: $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.`, `$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, quindi $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.`, `<strong>Risultato: circa 1,89 eV</strong>`] },
        { task: `Quale transizione emette un fotone con più energia: $2\\to 1$ oppure $3\\to 2$?`,
          steps: [`Transizione $2\\to 1$: $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.`, `La transizione $3\\to 2$ dà circa $1{,}89\\,\\text{eV}$.`, `<strong>Risultato: transizione $2\\to 1$</strong>`] }
      ]
    },
    'v7-jadro': {
      title: `Struttura del nucleo atomico`,
      summary: `Protoni, neutroni, notazione del nuclide, isotopi e dimensione del nucleo.`,
      theory: [
        `<p>Il nucleo è formato da protoni (carica $+e$) e neutroni (senza carica). Insieme si chiamano nucleoni. Il nuclide si scrive come $^{A}_{Z}\\mathrm{X}$: $A$ è il numero di massa, $Z$ il numero atomico e il numero di neutroni è $N = A - Z$.</p>`,
        `<p>Il raggio del nucleo cresce approssimativamente con la radice cubica del numero di massa: $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. I nuclei sono quindi molto piccoli (dell'ordine dei femtometri), ma hanno quasi la stessa densità.</p>`,
        `<p><strong>Perché il nucleo non si disgrega?</strong> I protoni si respingono elettricamente, ma agisce l'interazione nucleare forte. È una forza attrattiva di corto raggio, più intensa della repulsione elettrica. I nuclei stabili più pesanti hanno più neutroni che protoni (ad esempio $^{208}_{82}\\mathrm{Pb}$).</p>`,
        `<ul><li><strong>Gli isotopi</strong> hanno lo stesso $Z$, ma diverso $N$ (ad esempio $^{12}_{6}\\mathrm{C}$ e $^{14}_{6}\\mathrm{C}$).</li><li><strong>Gli isobari</strong> hanno lo stesso $A$, ma diverso $Z$.</li></ul>`,
        { fig: 'v5v8-nuklidy', caption: `I nuclei stabili leggeri hanno N ≈ Z, mentre i nuclei stabili più pesanti hanno più neutroni che protoni.` }
      ],
      examples: [
        { task: `Quanti protoni e neutroni ha il nucleo $^{238}_{92}\\mathrm{U}$?`,
          steps: [`Il numero atomico è $Z=92$.`, `$N = A - Z = 238 - 92 = 146$.`, `<strong>Risultato: 92 protoni e 146 neutroni</strong>`] },
        { task: `Come cambia il raggio del nucleo se il suo numero di massa aumenta otto volte?`,
          steps: [`$r \\propto A^{1/3}$, quindi $r$ varia come $\\sqrt[3]{A}$.`, `$\\sqrt[3]{8}=2$, il raggio raddoppia.`, `<strong>Risultato: il raggio raddoppia</strong>`] }
      ]
    },
    'v7-radioaktivita': {
      title: `Radioattività e trasformazioni nucleari`,
      summary: `Tipi di decadimento, legge del decadimento, tempo di dimezzamento e attività.`,
      theory: [
        `<p>I nuclei instabili si trasformano spontaneamente. Nel decadimento <strong>alfa</strong> viene emesso un nucleo di elio $^{4}_{2}\\mathrm{He}$. Nel decadimento <strong>beta-meno</strong> un neutrone si trasforma in un protone e vengono emessi un elettrone e un antineutrino. Nella radiazione <strong>gamma</strong> il nucleo si libera soltanto dell'energia in eccesso, senza che cambino né $Z$ né $A$. In ogni trasformazione si conservano il numero di massa e il numero atomico.</p>`,
        `<p>Il decadimento del singolo nucleo è un evento casuale, ma per un grande numero di nuclei vale la legge del decadimento $N(t) = N_0\\cdot 2^{-t/T}$. Il tempo $T$ è il <em>tempo di dimezzamento</em>, nel quale decade metà dei nuclei. La legge deriva dall'ipotesi che la probabilità di decadimento in un breve intervallo $dt$ sia proporzionale al numero di nuclei: $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
        `<p>L'<strong>attività</strong> $A = \\lambda N$ indica il numero di decadimenti al secondo. L'unità è il becquerel, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$. La costante di decadimento è $\\lambda = \\dfrac{\\ln 2}{T}$.</p>`,
        `<ol><li>Calcola il numero di tempi di dimezzamento $k = t/T$.</li><li>Dividi il numero iniziale di nuclei per $2^{k}$, non solo per due.</li></ol>`,
        { fig: 'v5v8-rozpad', caption: `Il numero di nuclei non decaduti diminuisce esponenzialmente: dopo ogni tempo di dimezzamento ne resta la metà.` }
      ],
      examples: [
        { task: `Un radioisotopo ha un tempo di dimezzamento di 8 giorni. Quale percentuale di nuclei rimane dopo 24 giorni?`,
          steps: [`Il numero di tempi di dimezzamento è $k = 24/8 = 3$.`, `$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, quindi resta il 12,5 %.`, `<strong>Risultato: 12,5 %</strong>`] },
        { task: `Un campione contiene $4\\cdot 10^{6}$ nuclei e ha un tempo di dimezzamento di 2 h. Quanti nuclei restano dopo 6 h?`,
          steps: [`In 6 h passano $k = 6/2 = 3$ tempi di dimezzamento.`, `$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.`, `<strong>Risultato: 500 000 nuclei</strong>`] }
      ]
    },
    'v7-stiepenie-fuzia': {
      title: `Fissione e fusione nucleare`,
      summary: `Difetto di massa, energia di legame ed energia liberata dalla fissione o dalla fusione.`,
      theory: [
        `<p>Un nucleo ha una massa minore della somma delle masse dei suoi nucleoni. Questa differenza è il <em>difetto di massa</em> $\\Delta m$. Secondo la relazione $E = \\Delta m\\, c^2$ viene liberata l'energia corrispondente. Per i calcoli pratici vale $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$.</p>`,
        `<p>La massima energia di legame per nucleone si trova nei nuclei intorno al ferro ($A\\approx 56$). Perciò i nuclei pesanti possono <strong>fissionarsi</strong> in nuclei di media massa, e i nuclei leggeri possono <strong>fondersi</strong> (fusione). Entrambe le vie portano verso una maggiore energia di legame e liberano energia.</p>`,
        `<p>Nella fissione dell'$^{235}_{92}\\mathrm{U}$ per opera di un neutrone si formano due frammenti, 2 o 3 neutroni e circa 200 MeV di energia. Questi neutroni possono provocare una reazione a catena, che nel reattore va regolata.</p>`,
        `<p>La fusione richiede una temperatura estremamente alta, affinché i nuclei carichi positivamente si avvicinino fino al raggio d'azione dell'interazione forte. Nella reazione $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$ si libera circa 17,6 MeV.</p>`,
        { fig: 'v5v8-vazba', caption: `L'energia di legame per nucleone raggiunge il massimo nel ferro: i nuclei leggeri si fondono, quelli pesanti si fissionano.` }
      ],
      examples: [
        { task: `In una reazione nucleare si ha un difetto di massa $\\Delta m = 0{,}2\\,\\text{u}$. Quale energia corrisponde?`,
          steps: [`$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.`, `$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.`, `<strong>Risultato: 186,3 MeV</strong>`] },
        { task: `Perché la fusione sulla Terra è più difficile della fissione?`,
          steps: [`I nuclei sono carichi positivamente e si respingono.`, `Serve una temperatura e una pressione estreme per avvicinarli fino al raggio d'azione dell'interazione forte.`, `<strong>Risultato: la fusione richiede condizioni estreme</strong>`] }
      ]
    },
    'v7-ziarenie-latka': {
      title: `Interazione della radiazione con la materia`,
      summary: `Attenuazione della radiazione, spessore di dimezzamento e processi principali nei raggi gamma.`,
      theory: [
        `<p>La radiazione perde energia attraversando la materia. Le particelle alfa si fermano già in un foglio di carta, le particelle beta attraversano alcuni millimetri di alluminio, mentre la radiazione gamma penetra in profondità e si attenua solo gradualmente.</p>`,
        `<p>Per un fascio stretto di fotoni vale l'attenuazione esponenziale $I(x) = I_0\\,e^{-\\mu x}$, dove $\\mu$ è il coefficiente di attenuazione. Più pratico è lo <em>spessore di dimezzamento</em> $d_{1/2}$, cioè lo strato che riduce l'intensità a metà. Allora $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
        `<p>Nella radiazione gamma sono importanti tre processi: <strong>effetto fotoelettrico</strong> (il fotone viene assorbito, domina alle basse energie), <strong>diffusione Compton</strong> (il fotone perde una parte dell'energia) e <strong>produzione di coppie</strong> elettrone–positrone (a partire da 1,022 MeV). Materiali pesanti e densi, come il piombo, schermano meglio.</p>`,
        `<ul><li>La radiazione ionizzante strappa elettroni agli atomi, quindi può danneggiare le cellule.</li><li>La protezione si sceglie in base al tipo di radiazione: carta o pelle contro le alfa, plexiglas contro le beta, piombo o calcestruzzo contro le gamma.</li></ul>`,
        { fig: 'v5v8-zoslabenie', caption: `Ogni spessore di dimezzamento riduce a metà l'intensità della radiazione.` }
      ],
      examples: [
        { task: `Uno strato di piombo ha uno spessore di dimezzamento di 1,2 cm. Quale percentuale di radiazione attraversa uno strato spesso 3,6 cm?`,
          steps: [`$x/d_{1/2}=3{,}6/1{,}2=3$ spessori di dimezzamento.`, `$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.`, `<strong>Risultato: 12,5 %</strong>`] },
        { task: `L'intensità della radiazione è scesa a un quarto. Quanti spessori di dimezzamento aveva lo strato?`,
          steps: [`$\\dfrac{1}{4}=2^{-2}$.`, `Quindi lo strato aveva 2 spessori di dimezzamento.`, `<strong>Risultato: 2</strong>`] }
      ]
    },
    'v7-jadrova-energetika': {
      title: `Energia nucleare e rivelazione delle radiazioni`,
      summary: `Principio del reattore nucleare, rendimento della centrale e misura della dose di radiazione.`,
      theory: [
        `<p>Il reattore nucleare sfrutta la fissione dell'$^{235}_{92}\\mathrm{U}$ in una reazione a catena controllata. Il calore del reattore riscalda l'acqua, si forma vapore che fa girare una turbina con generatore elettrico.</p>`,
        `<p>Il rendimento della centrale è $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, dove $P_{\\text{t}}$ è la potenza termica del reattore. Una parte del calore non può essere convertita in lavoro e viene ceduta all'acqua di raffreddamento. Le centrali nucleari hanno di solito un rendimento intorno al 33 %.</p>`,
        `<p><strong>Controllo:</strong> barre di controllo di materiali che assorbono i neutroni (ad esempio boro, cadmio). <strong>Moderatore</strong> (acqua, grafite) rallenta i neutroni, così che possano fissionare più facilmente i nuclei.</p>`,
        `<p><strong>Dosimetria:</strong> la dose assorbita $D = E/m$ si esprime in gray, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. I rivelatori, come il tubo di Geiger-Müller o lo scintillatore, reagiscono alle singole particelle e ai fotoni.</p>`,
        { fig: 'v5v8-reaktor', caption: `La centrale trasforma il calore del reattore in lavoro; il calore rimanente va all'acqua di raffreddamento.` }
      ],
      examples: [
        { task: `Un reattore ha una potenza termica di 3000 MW e un rendimento del 33 %. Qual è la sua potenza elettrica?`,
          steps: [`$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.`, `$0{,}33\\cdot 3000=990\\,\\text{MW}$.`, `<strong>Risultato: 990 MW</strong>`] },
        { task: `Un corpo, per effetto dell'irraggiamento, ha assorbito un'energia di 0,5 J. La sua massa è 50 kg. Qual è la dose assorbita?`,
          steps: [`$D = E/m$.`, `$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.`, `<strong>Risultato: 0,01 Gy</strong>`] }
      ]
    },
    'v8-castice': {
      title: `Particelle elementari e loro proprietà`,
      summary: `Caratteristiche delle particelle, fermioni e bosoni, barioni e mesoni.`,
      theory: [
        `<p>Secondo le conoscenze attuali le particelle elementari non hanno una struttura interna. Sono caratterizzate dalla <strong>massa</strong>, dalla <strong>carica elettrica</strong>, dallo <strong>spin</strong> (momento angolare intrinseco) e, per quark e gluoni, anche dal <strong>colore</strong>.</p>`,
        `<p>In base allo spin le particelle si dividono in <em>fermioni</em> (spin $\\tfrac{1}{2}$, costituiscono la materia e obbediscono al principio di Pauli) e <em>bosoni</em> (spin intero, mediano le interazioni, ad esempio il fotone con spin 1).</p>`,
        `<p>Gli adroni sono composti da quark. I <strong>barioni</strong> contengono tre quark (protone $uud$, neutrone $udd$). I <strong>mesoni</strong> contengono una coppia quark–antiquark (ad esempio $\\pi^{+}=u\\bar{d}$). I leptoni (elettrone, muone, tau e neutrini) non partecipano all'interazione forte.</p>`,
        `<ul><li>Protone: massa circa 938 MeV/$c^2$, carica $+e$.</li><li>Neutrone: massa circa 940 MeV/$c^2$, carica $0$.</li><li>Elettrone: massa circa 0{,}511 MeV/$c^2$, carica $-e$.</li></ul>`,
        { fig: 'v5v8-kvarky', caption: `Il protone (uud) e il neutrone (udd) sono formati da tre quark; la somma delle loro cariche è la carica della particella.` }
      ],
      examples: [
        { task: `Di quali quark è composto il neutrone?`,
          steps: [`Il neutrone è un barione, quindi contiene tre quark.`, `La carica deve essere 0: due quark $d$ e uno $u$ danno $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$.`, `<strong>Risultato: $udd$</strong>`] },
        { task: `L'elettrone è un barione?`,
          steps: [`Un barione è composto da tre quark.`, `L'elettrone è un leptone e non contiene quark.`, `<strong>Risultato: no</strong>`] }
      ]
    },
    'v8-kvarky-leptony': {
      title: `Quark e leptoni`,
      summary: `Generazioni dei fermioni e cariche frazionarie dei quark.`,
      theory: [
        `<p>I sei quark sono divisi in tre generazioni: $(u,d)$, $(c,s)$ e $(t,b)$. I quark $u$, $c$, $t$ hanno carica $+\\tfrac{2}{3}e$ e i quark $d$, $s$, $b$ carica $-\\tfrac{1}{3}e$. Sono le uniche particelle con carica frazionaria.</p>`,
        `<p>Anche i leptoni formano tre generazioni di coppie: $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ e $(\\tau,\\nu_\\tau)$. I leptoni carichi hanno carica $-e$. I neutrini sono neutri e interagiscono molto debolmente con la materia.</p>`,
        `<p>Gli adroni liberi hanno una carica totale che è un multiplo intero di $e$. Per questo i quark si combinano in terne (barioni) o in coppie quark–antiquark (mesoni). Questa somma è un utile controllo quando si scrivono le reazioni.</p>`,
        `<ol><li>Determina la carica di ogni quark in unità di $e$.</li><li>Sommale.</li><li>Il risultato deve essere un numero intero.</li></ol>`,
        { fig: 'v5v8-generacie', caption: `I fermioni si presentano in tre generazioni; le generazioni superiori sono più pesanti e instabili.` }
      ],
      examples: [
        { task: `Qual è la carica della particella $uud$?`,
          steps: [`$u$ ha $+\\tfrac{2}{3}$, $d$ ha $-\\tfrac{1}{3}$.`, `$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.`, `<strong>Risultato: $+e$ (protone)</strong>`] },
        { task: `Qual è la carica del barione $uds$ (particella Λ)?`,
          steps: [`$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.`, `<strong>Risultato: carica 0</strong>`] }
      ]
    },
    'v8-fotony': {
      title: `Fotoni e altre particelle mediatrici`,
      summary: `Bosoni di gauge come portatori delle interazioni e le loro proprietà.`,
      theory: [
        `<p>Le interazioni tra particelle avvengono scambiando <strong>bosoni di gauge</strong>. Il fotone $\\gamma$ trasmette la forza elettromagnetica, i gluoni $g$ la forza forte e i bosoni $W^{\\pm}$ e $Z^{0}$ la forza debole.</p>`,
        `<p>Il fotone non ha massa né carica e il suo spin è 1. Anche il gluone è privo di massa, ma porta una carica di <em>colore</em>, quindi si lega anche a sé stesso. È il motivo per cui non si riescono a isolare i quark, che sono confinati negli adroni.</p>`,
        `<p>I bosoni $W$ e $Z$ sono molto pesanti (masse circa 80 e 91 GeV/$c^2$), quindi il raggio d'azione dell'interazione debole è breve, dell'ordine di $10^{-18}\\,\\text{m}$. Il raggio d'azione è inversamente proporzionale alla massa della particella mediatrice.</p>`,
        `<p>Il gravitone è un bosone ipotetico della gravità. Non è ancora stato confermato sperimentalmente e non è incluso nel modello standard.</p>`,
        { fig: 'v5v8-interakcie', caption: `Le quattro interazioni fondamentali: ciascuna è trasmessa dallo scambio del suo bosone e ha un raggio d'azione diverso.` }
      ],
      examples: [
        { task: `Quale particella media l'interazione forte?`,
          steps: [`L'interazione forte è mediata dai gluoni.`, `<strong>Risultato: il gluone</strong>`] },
        { task: `Perché l'interazione debole ha un raggio d'azione così breve?`,
          steps: [`I bosoni mediatori $W$ e $Z$ hanno una massa grande.`, `Il raggio d'azione è inversamente proporzionale alla massa, quindi una massa grande riduce il raggio.`, `<strong>Risultato: la grande massa dei bosoni riduce il raggio d'azione</strong>`] }
      ]
    },
    'v8-standardny-model': {
      title: `Modello standard della fisica delle particelle`,
      summary: `Panoramica delle particelle e delle interazioni nel modello standard e loro numeri.`,
      theory: [
        `<p>Il modello standard descrive tre delle quattro interazioni fondamentali (elettromagnetica, debole e forte) e tutte le particelle elementari note finora. La gravità per ora non è inclusa.</p>`,
        `<p>La materia è formata da 12 fermioni: 6 quark e 6 leptoni, in tre generazioni. Ogni generazione successiva è più pesante e più instabile. La materia stabile è costituita soltanto da particelle della prima generazione.</p>`,
        `<p>Le particelle acquistano massa tramite il <em>meccanismo di Higgs</em>. Le leggi di conservazione (carica, colore, numeri leptonici) e le simmetrie determinano quali processi sono permessi.</p>`,
        `<ul><li>Bosoni di gauge: il fotone $\\gamma$, otto gluoni $g$, i bosoni $W^{\\pm}$ e $Z^{0}$.</li><li>Il bosone di Higgs $H^{0}$.</li></ul>`,
        { fig: 'v5v8-generacie', caption: `I fermioni si presentano in tre generazioni; le generazioni superiori sono più pesanti e instabili.` }
      ],
      examples: [
        { task: `Quanti fermioni ha il modello standard nelle prime due generazioni?`,
          steps: [`Ogni generazione contiene 2 quark e 2 leptoni, quindi 4 fermioni.`, `$2\\cdot 4 = 8$.`, `<strong>Risultato: 8</strong>`] },
        { task: `Quanti bosoni di gauge ci sono nel modello standard?`,
          steps: [`Il fotone (1), i gluoni (8) e i bosoni $W^{+}$, $W^{-}$, $Z^{0}$ (3).`, `$1+8+3=12$.`, `<strong>Risultato: 12</strong>`] }
      ]
    },
    'v8-interakcie': {
      title: `Interazione forte, debole ed elettromagnetica`,
      summary: `Raggio d'azione, funzionamento e forza relativa delle tre interazioni.`,
      theory: [
        `<p><strong>L'interazione forte</strong> tiene uniti i quark nei protoni e nei neutroni e i nucleoni nel nucleo. Ha il raggio d'azione più corto, dell'ordine di $10^{-15}\\,\\text{m}$, ed è la più intensa delle quattro interazioni.</p>`,
        `<p><strong>L'interazione elettromagnetica</strong> agisce tra le cariche. Produce le forze elettriche e magnetiche e il legame degli elettroni negli atomi. Ha raggio d'azione infinito e la forza diminuisce con il quadrato della distanza.</p>`,
        `<p><strong>L'interazione debole</strong> è responsabile del decadimento beta, in cui un quark $d$ si trasforma in un quark $u$ ed emette un bosone $W^{-}$. Il raggio d'azione è molto breve, dell'ordine di $10^{-18}\\,\\text{m}$. Cambia il sapore dei quark, cosa che le altre interazioni non riescono a fare.</p>`,
        `<p>Le forze relative (per due particelle nel nucleo) sono approssimativamente 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$ nell'ordine forte, elettromagnetica, debole e gravitazionale. La gravità è la più debole e nel mondo microscopico è trascurabile.</p>`,
        { fig: 'v5v8-interakcie', caption: `Le quattro interazioni fondamentali: ciascuna è trasmessa dallo scambio del suo bosone e ha un raggio d'azione diverso.` }
      ],
      examples: [
        { task: `Quale interazione è responsabile del decadimento beta?`,
          steps: [`Nel decadimento beta un quark $d$ si trasforma in un quark $u$.`, `Il cambiamento di sapore del quark è competenza dell'interazione debole.`, `<strong>Risultato: interazione debole</strong>`] },
        { task: `Quale interazione tiene gli elettroni nell'atomo?`,
          steps: [`Gli elettroni hanno carica negativa e il nucleo carica positiva.`, `<strong>Risultato: interazione elettromagnetica</strong>`] }
      ]
    },
    'v8-urychlovace': {
      title: `Acceleratori di particelle e rivelatori`,
      summary: `Accelerazione di particelle cariche, collisioni e ricostruzione degli eventi nel rivelatore.`,
      theory: [
        `<p>Un acceleratore accelera le particelle cariche con un campo elettrico. Una particella con carica $q = z\\,e$ attraversa la tensione $U$ e acquista energia cinetica $E_k = z\\,e\\,U$. Se la tensione è in megavolt, l'energia risulta in MeV.</p>`,
        `<p>I grandi acceleratori, come l'LHC al CERN con circonferenza di 27 km, mantengono i fasci su un anello con potenti magneti e accelerano le particelle a tappe. Le collisioni protone–protone raggiungono energie dell'ordine dei TeV.</p>`,
        `<p>I rivelatori registrano le tracce delle particelle. Un rivelatore di tracce in campo magnetico mostra la curvatura della traiettoria, da cui si ricava la quantità di moto. I calorimetri misurano l'energia e le camere per i muoni seguono i muoni. Da questi dati ricostruiamo quale particella si è formata.</p>`,
        `<p>Secondo la relazione $E = m\\,c^2$, l'energia cinetica della collisione può trasformarsi in massa di nuove particelle. Per questo nelle collisioni ad alta energia si formano anche particelle molto pesanti.</p>`,
        { fig: 'v5v8-urychlovac', caption: `Una particella con carica ze attraversa la tensione U e acquista energia zeU; è accelerata da un campo elettrico.` }
      ],
      examples: [
        { task: `Un protone accelerato dalla tensione di 5 MV. Quale energia cinetica possiede?`,
          steps: [`Per il protone $z=1$, quindi $E_k = e\\,U$.`, `$E_k = 5\\,\\text{MeV}$.`, `<strong>Risultato: 5 MeV</strong>`] },
        { task: `Una particella con carica $+2e$ attraversa la tensione di 3 MV. Quale energia acquista?`,
          steps: [`$z=2$, quindi $E_k = 2\\cdot 3\\,\\text{MeV}$.`, `<strong>Risultato: 6 MeV</strong>`] }
      ]
    },
    'v8-higgs': {
      title: `Bosone di Higgs e questioni aperte`,
      summary: `Campo di Higgs, scoperta del bosone di Higgs e problemi irrisolti della fisica moderna.`,
      theory: [
        `<p>Il bosone di Higgs è stato scoperto nel 2012 al LHC. È il quanto del campo di Higgs, presente in tutto l'universo. Le particelle che interagiscono con questo campo acquistano massa; più interagiscono intensamente, più sono pesanti.</p>`,
        `<p>La massa del bosone di Higgs è circa 125 GeV/$c^2$, cioè circa 133 volte la massa del protone. Il bosone è stato confermato attraverso i suoi decadimenti in due fotoni o in bosoni $Z$.</p>`,
        `<p>Questioni aperte: la <strong>materia oscura</strong> costituisce circa il 27 % del contenuto energetico dell'universo e il modello standard non la descrive. Le <strong>masse dei neutrini</strong> sono piccole ma non nulle, cosa che il modello originario non prevedeva. Il modello standard non include inoltre la <strong>gravità</strong> e non spiega perché nell'universo ci sia più materia che antimateria.</p>`
      ],
      examples: [
        { task: `Quante volte il bosone di Higgs è più pesante del protone (la massa del protone è circa 0,94 GeV/$c^2$)?`,
          steps: [`$125/0{,}94\\approx 133$.`, `<strong>Risultato: circa 133 volte</strong>`] },
        { task: `Quale percentuale dell'energia dell'universo costituisce, approssimativamente, la materia oscura?`,
          steps: [`La materia oscura costituisce circa il 27 % e la materia ordinaria solo circa il 5 %.`, `<strong>Risultato: circa 27 %</strong>`] }
      ]
    }
  }
});
