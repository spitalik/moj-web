/* Italiano: lezioni dei gradi 1–4 della scuola secondaria (js/rocniky/s1.js, s2.js, s3.js, s4.js). Struttura e chiavi: js/content-i18n.js. */
CONTENT_I18N.add('it', {
  lessons: {
    's1-veliciny': {
      title: 'Grandezze fisiche, unità e misura',
      summary: 'Numero e unità, sistema SI, prefissi e conversioni di unità.',
      theory: [
        `<p>Una grandezza fisica è una proprietà di un corpo o di un fenomeno che possiamo <strong>misurare</strong> ed esprimere con un numero e un'unità. Per esempio la lunghezza $s = 12\\,\\text{m}$: il numero $12$ indica quante volte abbiamo usato l'unità, e $\\text{m}$ indica quale unità abbiamo usato. Un valore senza unità non ha significato.</p>`,
        `<p>Il Sistema Internazionale di unità (SI) ha sette unità di base. Per questo corso bastano queste: metro $\\text{m}$ (lunghezza), chilogrammo $\\text{kg}$ (massa), secondo $\\text{s}$ (tempo) e kelvin $\\text{K}$ (temperatura). Le unità derivate si ottengono combinando quelle di base: la velocità ha unità $\\text{m/s}$ e la forza $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$.</p>`,
        `<p><strong>I prefissi</strong> abbreviano la scrittura di numeri molto grandi e molto piccoli. Vale per esempio $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ e $1\\,\\text{g}=10^{-3}\\,\\text{kg}$. Nella conversione basta sapere quante volte la nuova unità è più grande o più piccola, e poi moltiplicare o dividere di conseguenza.</p>`,
        `<p>Ogni misura ha un <strong>errore</strong>, perciò scriviamo il risultato con un numero adeguato di cifre significative e indichiamo sempre l'unità. La scrittura $s = 12{,}0\\,\\text{m}$ dice più di $s = 12\\,\\text{m}$, perché indica una precisione fino al decimetro.</p>`
      ],
      examples: [
        { task: `Converti $3{,}5\\,\\text{km}$ in metri.`,
          steps: [`Il prefisso k significa mille, quindi $1\\,\\text{km}=10^3\\,\\text{m}$.`, `$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.`, `<strong>Risultato: 3500 m</strong>`] },
        { task: `Quanti secondi ci sono in $2\\,\\text{h}$?`,
          steps: [`Un'ora ha $60\\,\\text{min}$ e un minuto ha $60\\,\\text{s}$.`, `Un'ora ha quindi $60\\cdot 60=3600\\,\\text{s}$.`, `$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.`, `<strong>Risultato: 7200 s</strong>`] }
      ]
    },
    's1-pohyb': {
      title: 'Moto uniforme e moto non uniforme',
      summary: 'Spazio, tempo e velocità; velocità media quando il moto cambia.',
      theory: [
        `<p>Il moto di un corpo si descrive rispetto a un <strong>corpo di riferimento</strong>. Lo spazio $s$ è la lunghezza della traiettoria percorsa dal corpo, e il tempo $t$ è la durata del moto. La <strong>velocità media</strong> è il rapporto tra spazio e tempo: $\\bar v=\\frac{s}{t}$, unità $\\text{m/s}$ oppure $\\text{km/h}$.</p>`,
        `<p>Il <strong>moto uniforme</strong> è un moto con velocità costante. In tempi uguali il corpo percorre spazi uguali, quindi vale $s=v\\,t$. Nel grafico spazio-tempo è una retta.</p>`,
        `<p>Il <strong>moto non uniforme</strong> significa che la velocità cambia. La velocità media di tutto il percorso non è la media aritmetica delle velocità, ma lo spazio totale diviso per il tempo totale: $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
        `<p><strong>Perché è così?</strong> Se viaggiamo per 2 ore a $60\\,\\text{km/h}$ e poi per 1 ora a $30\\,\\text{km/h}$, percorriamo $120+30=150\\,\\text{km}$ in $3$ ore. La media delle velocità darebbe $45\\,\\text{km/h}$, ma la velocità media reale è $50\\,\\text{km/h}$, perché per più tempo siamo andati più veloci.</p>`,
        { fig: "s1s4-priemerna-rychlost", caption: "L'area sotto il grafico v–t è lo spazio. La velocità media è lo spazio totale diviso per il tempo totale, non la media delle velocità." }
      ],
      examples: [
        { task: `Un'auto percorre $120\\,\\text{km}$ in $2\\,\\text{h}$. Qual è la sua velocità media?`,
          steps: [`$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.`, `<strong>Risultato: 60 km/h</strong>`] },
        { task: `Un ciclista pedala per $2\\,\\text{h}$ a $20\\,\\text{km/h}$ e poi per $2\\,\\text{h}$ a $10\\,\\text{km/h}$. Qual è la sua velocità media?`,
          steps: [`Primo tratto: $s_1=20\\cdot 2=40\\,\\text{km}$, secondo: $s_2=10\\cdot 2=20\\,\\text{km}$.`, `In totale $60\\,\\text{km}$ in $4\\,\\text{h}$.`, `<strong>Risultato: 15 km/h</strong>`] }
      ]
    },
    's1-zrychlenie': {
      title: 'Velocità e accelerazione',
      summary: 'Variazione della velocità nel tempo e moto uniformemente accelerato.',
      theory: [
        `<p><strong>L'accelerazione</strong> è la variazione della velocità nell'unità di tempo: $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. La sua unità è $\\text{m/s}^2$. Se la velocità aumenta di $2\\,\\text{m/s}$ ogni secondo, l'accelerazione è $2\\,\\text{m/s}^2$.</p>`,
        `<p>L'accelerazione non è soltanto aumento di velocità. Un $a$ positivo significa che la velocità cresce, un $a$ negativo significa frenata. C'è accelerazione anche quando cambia la direzione del moto pur restando uguale l'intensità della velocità, per esempio nel moto lungo una circonferenza.</p>`,
        `<p>Nel <strong>moto uniformemente accelerato</strong> la velocità cresce in proporzione al tempo: $v=v_0+a\\,t$. La velocità media è $\\frac{v_0+v}{2}$, quindi lo spazio è $s=v_0\\,t+\\frac{1}{2}a\\,t^2$. Il termine con $\\frac{1}{2}$ è importante, perché la velocità cambia continuamente durante il viaggio.</p>`,
        `<p>Nella caduta libera vicino alla superficie terrestre l'accelerazione è diretta verso il basso e ha intensità di circa $g\\approx 9{,}81\\,\\text{m/s}^2$. Un corpo che cade da fermo aumenta la sua velocità di circa $9{,}81\\,\\text{m/s}$ ogni secondo.</p>`,
        { fig: "s1s4-v-t-zrychlenie", caption: "La pendenza del grafico v–t è l'accelerazione e l'area sotto il grafico è lo spazio. Nel moto uniformemente accelerato il grafico è una retta." }
      ],
      examples: [
        { task: `Un'auto passa da ferma a $20\\,\\text{m/s}$ in $5\\,\\text{s}$. Qual è la sua accelerazione?`,
          steps: [`$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.`, `<strong>Risultato: 4 m/s²</strong>`] },
        { task: `Un corpo ha velocità $2\\,\\text{m/s}$ e accelerazione $3\\,\\text{m/s}^2$. Quale sarà la sua velocità dopo $4\\,\\text{s}$?`,
          steps: [`$v=v_0+a\\,t=2+3\\cdot 4$.`, `<strong>Risultato: 14 m/s</strong>`] }
      ]
    },
    's1-newton': {
      title: 'Le leggi del moto di Newton',
      summary: 'Inerzia, la relazione F = m·a e il principio di azione e reazione.',
      theory: [
        `<p><strong>Prima legge di Newton (inerzia):</strong> un corpo resta in quiete o in moto rettilineo uniforme finché non agisce su di lui una forza, oppure se la risultante di tutte le forze è nulla. Per questo, quando un autobus frena bruscamente, i passeggeri vengono spinti in avanti: il loro corpo vuole continuare a muoversi.</p>`,
        `<p><strong>Seconda legge di Newton:</strong> la forza risultante imprime al corpo un'accelerazione direttamente proporzionale alla forza e inversamente proporzionale alla massa: $F=m\\,a$. L'unità di forza è il newton, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. Con la stessa forza, un corpo più pesante accelera più lentamente.</p>`,
        `<p><strong>Terza legge di Newton (azione e reazione):</strong> se il corpo A esercita una forza sul corpo B, il corpo B esercita sul corpo A una forza di uguale intensità e direzione opposta. Queste forze agiscono su corpi <em>diversi</em>, quindi non si sottraggono mai tra loro. Un cavallo traina un carro e il carro tira indietro il cavallo.</p>`,
        `<p><strong>La risultante</strong> di più forze sulla stessa retta: le forze con la stessa direzione si sommano, quelle con direzioni opposte si sottraggono. L'accelerazione risultante ha la direzione della risultante.</p>`,
        { fig: "s1s4-akcia-reakcia", caption: "Le forze di azione e reazione hanno uguale intensità e direzioni opposte, ma agiscono su corpi diversi, quindi non si sottraggono." }
      ],
      examples: [
        { task: `Un corpo di massa $4\\,\\text{kg}$ si muove con accelerazione $3\\,\\text{m/s}^2$. Qual è la forza risultante che agisce su di lui?`,
          steps: [`$F=m\\,a=4\\cdot 3$.`, `<strong>Risultato: 12 N</strong>`] },
        { task: `Due forze di $7\\,\\text{N}$ e $3\\,\\text{N}$ agiscono su un corpo in direzioni opposte. Qual è la loro risultante?`,
          steps: [`Le forze hanno direzioni opposte, quindi si sottraggono: $7-3=4$.`, `<strong>Risultato: 4 N nella direzione della forza maggiore</strong>`] }
      ]
    },
    's1-gravitacia': {
      title: 'Forza di gravità e peso',
      summary: 'Massa e peso, accelerazione di gravità sulla Terra e sulla Luna.',
      theory: [
        `<p><strong>La forza gravitazionale</strong> è la forza di attrazione tra tutti i corpi. Quanto più i corpi sono pesanti e vicini, tanto maggiore è la forza. Per i corpi sulla superficie terrestre la osserviamo come <strong>peso</strong>.</p>`,
        `<p><strong>Il peso</strong> è la forza con cui la Terra attrae un corpo: $F_g=m\\,g$, dove $g\\approx 9{,}81\\,\\text{m/s}^2$ è l'accelerazione di gravità. La massa $m$ in chilogrammi è una proprietà del corpo e non cambia. Il peso in newton dipende dal luogo: sulla Luna, dove $g\\approx 1{,}62\\,\\text{m/s}^2$, è circa sei volte minore.</p>`,
        `<p><strong>Perché tutti i corpi cadono con la stessa accelerazione?</strong> Il peso è proporzionale alla massa, e così anche l'inerzia. L'accelerazione $a=\\frac{F_g}{m}=g$ quindi non dipende dalla massa. In una caduta senza resistenza dell'aria, un sasso e un granello di polline cadono con la stessa accelerazione.</p>`,
        `<p>Non confondere i termini: la <strong>massa</strong> si misura in chilogrammi ed è la quantità di materia del corpo, il <strong>peso</strong> è una forza e si misura in newton.</p>`,
        { fig: "s1s4-tiaz-zem-mesiac", caption: "La stessa massa ha sulla Luna un peso circa sei volte minore, perché lì l'accelerazione di gravità è più piccola." }
      ],
      examples: [
        { task: `Qual è il peso di un corpo di massa $5\\,\\text{kg}$ sulla Terra?`,
          steps: [`$F_g=m\\,g=5\\cdot 9{,}81$.`, `<strong>Risultato: circa 49,1 N</strong>`] },
        { task: `Qual è il peso dello stesso corpo sulla Luna, dove $g\\approx 1{,}62\\,\\text{m/s}^2$? Qual è la sua massa?`,
          steps: [`$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.`, `La massa non cambia, resta $5\\,\\text{kg}$.`, `<strong>Risultato: 8,1 N, massa 5 kg</strong>`] }
      ]
    },
    's1-praca-energia': {
      title: 'Lavoro, potenza ed energia',
      summary: 'Lavoro meccanico, potenza ed energia cinetica di un corpo.',
      theory: [
        `<p><strong>Il lavoro meccanico</strong> è l'energia trasferita da una forza quando sposta un corpo. Se la forza ha la direzione del moto, si calcola come $W=F\\,s$. L'unità è il joule, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. Lo stesso lavoro si può compiere con una forza grande su un percorso breve oppure con una forza piccola su un percorso lungo.</p>`,
        `<p><strong>La potenza</strong> indica quanto rapidamente si compie il lavoro: $P=\\frac{W}{t}$. L'unità è il watt, $1\\,\\text{W}=1\\,\\text{J/s}$. Due motori possono compiere lo stesso lavoro, ma quello con potenza maggiore lo fa in un tempo più breve.</p>`,
        `<p><strong>L'energia cinetica</strong> è l'energia del moto: $E_k=\\frac{1}{2}m\\,v^2$. Dipende dal quadrato della velocità, quindi il doppio della velocità significa quattro volte l'energia. Per questo lo spazio di frenata di un'auto è molto più lungo a velocità elevata.</p>`,
        `<p>Lavoro ed energia sono collegati: il lavoro compiuto su un corpo modifica la sua energia. Se $W$ è positivo, l'energia del corpo aumenta.</p>`,
        { fig: "obr-energia", caption: "Scivolando senza attrito, l'energia potenziale si trasforma in energia cinetica e viceversa." }
      ],
      examples: [
        { task: `Una forza di $50\\,\\text{N}$ sposta un carrello di $4\\,\\text{m}$ nella direzione della forza. Quale lavoro compie?`,
          steps: [`$W=F\\,s=50\\cdot 4$.`, `<strong>Risultato: 200 J</strong>`] },
        { task: `Un corpo di massa $2\\,\\text{kg}$ si muove con velocità $3\\,\\text{m/s}$. Qual è la sua energia cinetica?`,
          steps: [`$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.`, `<strong>Risultato: 9 J</strong>`] }
      ]
    },
    's1-zakony-zachovania': {
      title: 'Leggi di conservazione dell\'energia e della quantità di moto',
      summary: 'Quantità di moto di un corpo e trasformazione dell\'energia potenziale in cinetica.',
      theory: [
        `<p>La <strong>quantità di moto</strong> di un corpo è il prodotto della sua massa per la velocità: $p=m\\,v$, unità $\\text{kg\\,m/s}$. La quantità di moto è un vettore, quindi ha la direzione della velocità. Un corpo più pesante alla stessa velocità ha una quantità di moto maggiore, perciò è più difficile da fermare.</p>`,
        `<p><strong>Legge di conservazione della quantità di moto:</strong> se su un sistema non agiscono forze esterne, la somma delle quantità di moto dei corpi che lo compongono non cambia. Due pattinatori che si spingono l'uno contro l'altro si muovono in direzioni opposte. Il pattinatore più leggero ottiene una velocità maggiore, perché la somma delle loro quantità di moto deve restare nulla.</p>`,
        `<p><strong>Legge di conservazione dell'energia meccanica:</strong> se non agiscono attrito né resistenza del mezzo, la somma dell'energia cinetica e potenziale $E_k+E_p$ non cambia. Nella caduta libera l'energia potenziale $E_p=m\\,g\\,h$ si trasforma in energia cinetica $\\frac{1}{2}m\\,v^2$. Da qui $v=\\sqrt{2gh}$: la velocità non dipende dalla massa.</p>`,
        `<p>In realtà attrito e resistenza dell'aria trasformano una parte dell'energia meccanica in calore. L'energia meccanica diminuisce, ma l'energia totale del sistema resta conservata.</p>`,
        { fig: "s1s4-hybnost", caption: "La somma delle quantità di moto del sistema resta nulla: il corpo più leggero si muove più velocemente, quello più pesante più lentamente." }
      ],
      examples: [
        { task: `Un proiettile di massa $0{,}01\\,\\text{kg}$ vola con velocità $500\\,\\text{m/s}$. Qual è la sua quantità di moto?`,
          steps: [`$p=m\\,v=0{,}01\\cdot 500$.`, `<strong>Risultato: 5 kg·m/s</strong>`] },
        { task: `Un corpo cade da fermo da un'altezza di $5\\,\\text{m}$ senza resistenza dell'aria. Con quale velocità tocca terra? Usa $g=10\\,\\text{m/s}^2$.`,
          steps: [`$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, quindi $v^2=2gh=2\\cdot 10\\cdot 5=100$.`, `<strong>Risultato: v = 10 m/s</strong>`] }
      ]
    },
    's1-tlak': {
      title: 'Pressione, proprietà di liquidi e gas',
      summary: 'Pressione dei solidi, pressione idrostatica e legge di Pascal.',
      theory: [
        `<p><strong>La pressione</strong> è il rapporto tra la forza perpendicolare alla superficie e l'area di tale superficie: $p=\\frac{F}{S}$. L'unità è il pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Con una punta appuntita premiamo più forte, perché la stessa forza agisce su una superficie più piccola.</p>`,
        `<p><strong>La pressione idrostatica</strong> in un liquido cresce con la profondità: $p=\\rho\\,g\\,h$, dove $\\rho$ è la densità del liquido (acqua $1000\\,\\text{kg/m}^3$) e $h$ la profondità sotto la superficie. Questa pressione non dipende dalla forma del recipiente, ma solo dalla profondità e dalla densità.</p>`,
        `<p><strong>Legge di Pascal:</strong> la pressione esercitata su un liquido chiuso si trasmette invariata in tutti i punti del liquido. Per questo un torchio idraulico può sollevare un'automobile: con una piccola forza su un pistone piccolo creiamo una pressione che agisce su un pistone grande, con una forza maggiore.</p>`,
        `<p><strong>I gas</strong> esercitano pressione con gli urti delle molecole contro le pareti del recipiente. La pressione atmosferica al livello del mare è circa $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$ e diminuisce con l'aumentare dell'altitudine.</p>`,
        { fig: "obr-tlak", caption: "La pressione nel liquido cresce con la profondità: più si va in basso, maggiore è la forza sulla parete." }
      ],
      examples: [
        { task: `Un blocco di peso $600\\,\\text{N}$ è appoggiato su un pavimento di superficie $0{,}5\\,\\text{m}^2$. Quale pressione esercita?`,
          steps: [`$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.`, `<strong>Risultato: 1200 Pa</strong>`] },
        { task: `Qual è la pressione idrostatica dell'acqua alla profondità di $3\\,\\text{m}$? Usa $\\rho=1000\\,\\text{kg/m}^3$ e $g=10\\,\\text{m/s}^2$.`,
          steps: [`$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.`, `<strong>Risultato: 30 kPa</strong>`] }
      ]
    },
    's2-molekuly': {
      title: 'Struttura molecolare della materia',
      summary: 'Particelle della materia, quantità di sostanza e massa molare.',
      theory: [
        `<p>Ogni sostanza è composta da particelle molto piccole: atomi o molecole. Queste si trovano in continuo moto disordinato e si esercitano reciprocamente forze di attrazione e di repulsione. Da queste forze dipende se la sostanza è solida, liquida o gassosa.</p>`,
        `<p>La prova del moto delle molecole è il <strong>moto browniano</strong>: piccole particelle disperse in un liquido tremano in modo irregolare, perché da tutte le parti le urtano le molecole del liquido. Il moto delle molecole stesse non lo vediamo, ma ne vediamo gli effetti.</p>`,
        `<p>La quantità di sostanza si indica in moli. Una mole contiene $N_A\\approx 6{,}02\\cdot 10^{23}$ particelle (costante di Avogadro). La <strong>massa molare</strong> $M$ è la massa di una mole, in grammi per mole. Per esempio l'acqua ha $M=18\\,\\text{g/mol}$: una mole di acqua pesa 18 g.</p>`,
        `<p>Relazioni: quantità di sostanza $n=\\frac{m}{M}$ e numero di particelle $N=n\\,N_A$. Perciò anche una quantità molto piccola di sostanza contiene un numero enorme di particelle.</p>`,
        { fig: "s1s4-brownov-pohyb", caption: "Moto browniano: il granello trema in modo irregolare, perché da tutte le parti lo urtano le molecole del liquido." }
      ],
      examples: [
        { task: `Quante moli sono $36\\,\\text{g}$ di acqua, se $M=18\\,\\text{g/mol}$?`,
          steps: [`$n=\\frac{m}{M}=\\frac{36}{18}$.`, `<strong>Risultato: 2 mol</strong>`] },
        { task: `Quante molecole ci sono in $2\\,\\text{mol}$ di acqua?`,
          steps: [`$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.`, `<strong>Risultato: circa $1{,}2\\cdot 10^{24}$ molecole</strong>`] }
      ]
    },
    's2-teplo': {
      title: 'Temperatura, calore ed energia interna',
      summary: 'Temperatura, kelvin, energia interna e calore necessario per il riscaldamento.',
      theory: [
        `<p><strong>La temperatura</strong> è una misura dell'energia cinetica media del moto disordinato delle particelle. Un corpo più caldo ha particelle che in media si muovono più velocemente. La scala Celsius ha lo zero alla fusione del ghiaccio, la scala assoluta in kelvin ha lo zero allo zero assoluto. Vale $T=t+273{,}15$, e l'ampiezza del grado è la stessa.</p>`,
        `<p><strong>L'energia interna</strong> $U$ di un corpo è la somma delle energie cinetiche e potenziali di tutte le sue particelle. Cambia in due modi: con il lavoro (per esempio per attrito) oppure con lo scambio di calore.</p>`,
        `<p><strong>Il calore</strong> è l'energia che passa da un corpo più caldo a uno più freddo. Il calore non è una sostanza e i corpi non lo contengono. Il calore necessario per riscaldare un corpo è $Q=m\\,c\\,\\Delta T$, dove $c$ è il calore specifico. L'acqua ha $c=4200\\,\\text{J/(kg\\,K)}$, l'alluminio $900\\,\\text{J/(kg\\,K)}$. Perciò l'acqua si riscalda lentamente e trattiene il calore a lungo.</p>`,
        `<p>La variazione di temperatura in kelvin e in gradi Celsius si calcola allo stesso modo, perché $\\Delta T=\\Delta t$. La conversione alla temperatura assoluta si deve fare solo per una temperatura specifica.</p>`,
        { fig: "s1s4-merna-kapacita", caption: "A parità di massa e di variazione di temperatura, l'acqua richiede quasi cinque volte più calore dell'alluminio." }
      ],
      examples: [
        { task: `Quanto calore serve per riscaldare $2\\,\\text{kg}$ di acqua di $10\\,\\text{K}$? Usa $c=4200\\,\\text{J/(kg\\,K)}$.`,
          steps: [`$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.`, `<strong>Risultato: 84 000 J = 84 kJ</strong>`] },
        { task: `Quanto vale in kelvin la temperatura di $25\\,{}^\\circ\\text{C}$?`,
          steps: [`$T=t+273{,}15=25+273{,}15$.`, `<strong>Risultato: 298,15 K</strong>`] }
      ]
    },
    's2-skupenstva': {
      title: 'Passaggi di stato',
      summary: 'Fusione, solidificazione, evaporazione, condensazione e calore latente.',
      theory: [
        `<p>La materia può essere solida, liquida o gassosa. Il passaggio tra gli stati richiede energia oppure la libera. Durante la fusione e l'evaporazione la <strong>temperatura non cambia</strong>: il calore fornito si consuma per indebolire i legami tra le molecole, non per aumentare la loro velocità.</p>`,
        `<p>Il <strong>calore latente</strong> è il calore necessario per trasformare un chilogrammo di sostanza senza cambiare temperatura. Nella fusione si parla di calore latente specifico di fusione $L_t$, nell'evaporazione di $L_v$. Per il ghiaccio $L_t\\approx 334\\,\\text{kJ/kg}$, per l'acqua $L_v\\approx 2260\\,\\text{kJ/kg}$. Il calore necessario per trasformare un corpo di massa $m$ è $Q=m\\,L$.</p>`,
        `<p>Durante la <strong>solidificazione</strong> e la <strong>condensazione</strong> si liberano le stesse quantità di calore. Per questo il vapore a $100\\,{}^\\circ\\text{C}$ è più pericoloso dell'acqua alla stessa temperatura: condensando sulla pelle cede una grande quantità di calore.</p>`,
        `<p>Anche l'evaporazione raffredda: dalla superficie escono le molecole più veloci, quindi il liquido rimasto si raffredda. Per questo dopo il bagno ci sentiamo più freddi.</p>`,
        { fig: "s1s4-ohrev-latky", caption: "Durante la fusione e l'evaporazione la temperatura resta ferma: il calore fornito si consuma per cambiare lo stato, non per riscaldare." }
      ],
      examples: [
        { task: `Quanto calore serve per fondere $2\\,\\text{kg}$ di ghiaccio alla temperatura di $0\\,{}^\\circ\\text{C}$? Usa $L_t=334\\,\\text{kJ/kg}$.`,
          steps: [`$Q=m\\,L_t=2\\cdot 334$.`, `<strong>Risultato: 668 kJ</strong>`] },
        { task: `Quanto calore libera $0{,}5\\,\\text{kg}$ di vapore che condensa in acqua alla temperatura di $100\\,{}^\\circ\\text{C}$? Usa $L_v=2260\\,\\text{kJ/kg}$.`,
          steps: [`$Q=m\\,L_v=0{,}5\\cdot 2260$.`, `<strong>Risultato: 1130 kJ</strong>`] }
      ]
    },
    's2-ideal': {
      title: 'Gas ideale ed equazione di stato',
      summary: 'Modello del gas ideale, equazione di stato e trasformazione isoterma.',
      theory: [
        `<p>Il <strong>gas ideale</strong> è un modello: le molecole sono piccoli punti, tra loro non agiscono forze, urtano le pareti del recipiente e rimbalzano elasticamente. I gas reali a bassa pressione e ad alta temperatura si comportano quasi come quelli ideali.</p>`,
        `<p><strong>L'equazione di stato</strong> del gas ideale: $p\\,V=n\\,R\\,T$, dove $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ è la costante molare dei gas e la temperatura $T$ si inserisce in kelvin. Se in un recipiente chiuso aumentiamo la temperatura, le molecole urtano più forte e più spesso, e la pressione cresce.</p>`,
        `<p>La <strong>trasformazione isoterma</strong> avviene a temperatura costante. Allora $p\\,V=\\text{cost.}$, cioè $p_1V_1=p_2V_2$: quando la pressione raddoppia, il volume si dimezza. Analogamente, a pressione costante il volume è proporzionale alla temperatura, e a volume costante la pressione è proporzionale alla temperatura.</p>`,
        `<p>In ogni calcolo bisogna fare attenzione alle unità: pressione in pascal, volume in metri cubi e temperatura in kelvin.</p>`,
        { fig: "s1s4-izoterma", caption: "A temperatura costante il prodotto p·V è costante: quando il volume si dimezza, la pressione raddoppia." }
      ],
      examples: [
        { task: `Un gas ha, a temperatura costante, volume $4\\,\\text{l}$ e pressione $200\\,\\text{kPa}$. Quale sarà il suo volume alla pressione di $400\\,\\text{kPa}$?`,
          steps: [`$p_1V_1=p_2V_2$, quindi $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.`, `<strong>Risultato: 2 l</strong>`] },
        { task: `Quale pressione ha $1\\,\\text{mol}$ di gas a $T=300\\,\\text{K}$ e volume $V=0{,}025\\,\\text{m}^3$? Usa $R=8{,}31\\,\\text{J/(mol\\,K)}$.`,
          steps: [`$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.`, `<strong>Risultato: 99 720 Pa</strong>`] }
      ]
    },
    's2-termo': {
      title: 'Principi della termodinamica e motori termici',
      summary: 'Primo principio della termodinamica, secondo principio e rendimento del motore termico.',
      theory: [
        `<p><strong>Il primo principio della termodinamica</strong> è la legge di conservazione dell'energia per i processi termici: $\\Delta U=Q-A$. La variazione di energia interna $\\Delta U$ è uguale al calore $Q$ fornito al sistema meno il lavoro $A$ che il sistema compie sull'ambiente. Se un gas si espande e compie lavoro, la sua energia interna diminuisce, a meno che non gli forniamo abbastanza calore.</p>`,
        `<p><strong>Il secondo principio della termodinamica</strong> afferma che il calore passa spontaneamente da un corpo più caldo a uno più freddo, e non viceversa. Ne segue che nessun motore termico può trasformare tutto il calore in lavoro. Una parte del calore deve passare al refrigerante.</p>`,
        `<p>Il <strong>motore termico</strong> riceve dalla sorgente calda il calore $Q_1$, trasforma una parte in lavoro $A$ e cede il resto $Q_2$ al refrigerante. Il <strong>rendimento</strong> è $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$. È sempre minore di 1, cioè minore del 100 %.</p>`,
        `<p>Il ciclo di Carnot ideale ha il rendimento massimo possibile: $\\eta_{\\max}=1-\\frac{T_2}{T_1}$, dove le temperature $T_1$ della sorgente calda e $T_2$ del refrigerante sono in kelvin. Per questo i motori migliorano aumentando la temperatura della sorgente calda.</p>`,
        { fig: "s1s4-tepelny-motor", caption: "Il motore riceve il calore Q₁ dalla sorgente, trasforma una parte in lavoro A e cede il resto Q₂ al refrigerante. Il rendimento A/Q₁ è minore di 1." }
      ],
      examples: [
        { task: `Al gas sono stati forniti $300\\,\\text{J}$ di calore e il gas ha compiuto un lavoro di $120\\,\\text{J}$. Qual è la variazione della sua energia interna?`,
          steps: [`$\\Delta U=Q-A=300-120$.`, `<strong>Risultato: 180 J (l'energia interna è aumentata)</strong>`] },
        { task: `Un motore riceve dalla sorgente $1000\\,\\text{J}$ e compie un lavoro di $250\\,\\text{J}$. Qual è il suo rendimento?`,
          steps: [`$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.`, `<strong>Risultato: 25 %</strong>`] }
      ]
    },
    's2-kmitanie': {
      title: 'Oscillazioni meccaniche e risonanza',
      summary: 'Periodo, frequenza, pendolo e risonanza.',
      theory: [
        `<p>Il <strong>moto oscillatorio</strong> è un moto intorno a una posizione di equilibrio che si ripete periodicamente. Esempi sono un peso appeso a una molla o un pendolo. Il <strong>periodo</strong> $T$ è il tempo di una oscillazione, la <strong>frequenza</strong> $f$ è il numero di oscillazioni al secondo: $f=\\frac{1}{T}=\\frac{n}{t}$. L'unità di frequenza è l'hertz, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
        `<p>L'<strong>oscillazione armonica</strong> ha elongazione $y=A\\sin(\\omega t)$, dove $A$ è l'ampiezza e $\\omega=2\\pi f$ la pulsazione. L'andamento sinusoidale si ha con una molla in cui la forza è direttamente proporzionale all'elongazione.</p>`,
        `<p>Il periodo dipende dalle proprietà del sistema oscillante. Per la molla $T=2\\pi\\sqrt{\\frac{m}{k}}$: un peso più pesante oscilla più lentamente, una molla più rigida più rapidamente. Per il pendolo semplice $T=2\\pi\\sqrt{\\frac{l}{g}}$, dove $l$ è la lunghezza del filo (per piccole oscillazioni).</p>`,
        `<p><strong>La risonanza</strong> si verifica quando una forza periodica esterna oscilla con la frequenza propria del corpo. Ogni impulso si aggiunge all'oscillazione precedente e l'ampiezza cresce. Per questo l'altalena si alza sempre di più quando la spingiamo al ritmo della sua oscillazione.</p>`,
        { fig: "s1s4-kmitanie", caption: "Oscillazione armonica: l'ampiezza A è lo spostamento massimo, il periodo T è il tempo di una oscillazione." }
      ],
      examples: [
        { task: `Un peso compie $40$ oscillazioni in $20\\,\\text{s}$. Qual è il suo periodo e la sua frequenza?`,
          steps: [`$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.`, `$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.`, `<strong>Risultato: T = 0,5 s, f = 2 Hz</strong>`] },
        { task: `Un corpo oscilla con frequenza $5\\,\\text{Hz}$. Qual è il suo periodo?`,
          steps: [`$T=\\frac{1}{f}=\\frac{1}{5}$.`, `<strong>Risultato: 0,2 s</strong>`] }
      ]
    },
    's2-vlnenie': {
      title: 'Onde meccaniche e suono',
      summary: 'Lunghezza d\'onda, velocità di propagazione dell\'onda e il suono come onda meccanica.',
      theory: [
        `<p><strong>L'onda</strong> è la propagazione di oscillazioni attraverso un mezzo. Si trasmettono energia e forma dell'onda, ma le particelle del mezzo oscillano soltanto intorno alle loro posizioni di equilibrio. L'onda meccanica ha bisogno di un mezzo materiale, per questo il suono non si sente nel vuoto.</p>`,
        `<p>La lunghezza d'onda $\\lambda$ è la distanza tra due punti più vicini con la stessa fase, per esempio tra due creste. In un periodo $T$ l'onda avanza di $\\lambda$, quindi per la velocità di propagazione vale $v=\\frac{\\lambda}{T}=\\lambda\\,f$.</p>`,
        `<p><strong>Il suono</strong> è un'onda meccanica longitudinale. L'uomo sente frequenze da circa $20\\,\\text{Hz}$ a $20\\,\\text{kHz}$. L'altezza del tono dipende dalla frequenza, il volume dall'ampiezza. Nell'aria secca a $20\\,{}^\\circ\\text{C}$ il suono si propaga a circa $340\\,\\text{m/s}$, nell'acqua e nell'acciaio più velocemente.</p>`,
        `<p><strong>L'eco</strong> si forma quando il suono si riflette su un ostacolo. Il suono percorre l'andata e il ritorno, quindi la distanza dell'ostacolo è $s=\\frac{v\\,t}{2}$, dove $t$ è il tempo tra l'emissione del suono e il suo ritorno.</p>`,
        { fig: "obr-vlna", caption: "Onda trasversale: la lunghezza d'onda λ è la distanza tra due punti vicini nella stessa fase." }
      ],
      examples: [
        { task: `Un'onda con frequenza $50\\,\\text{Hz}$ ha lunghezza d'onda $4\\,\\text{m}$. Con quale velocità si propaga?`,
          steps: [`$v=\\lambda\\,f=4\\cdot 50$.`, `<strong>Risultato: 200 m/s</strong>`] },
        { task: `L'eco è tornata $2\\,\\text{s}$ dopo lo sparo. A che distanza si trova l'ostacolo? Usa $v=340\\,\\text{m/s}$.`,
          steps: [`$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.`, `<strong>Risultato: $s=340\\,\\text{m}$</strong>`] }
      ]
    },
    's3-naboj': {
      title: 'Carica elettrica e campo elettrico',
      summary: 'Le cariche si attraggono e si respingono; campo di una carica puntiforme e la sua intensità.',
      theory: [
        `<p>La carica elettrica $Q$ è una proprietà dei corpi. Si misura in coulomb ($\\text{C}$). Cariche uguali si <strong>respingono</strong>, quelle opposte si <strong>attraggono</strong>. La carica più piccola in natura è quella dell'elettrone, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
        `<p><strong>Il campo elettrico</strong> è lo spazio intorno a un corpo carico che esercita una forza su un'altra carica. La sua forza si descrive con l'<em>intensità</em> $E = \\frac{F}{q}$: la forza con cui il campo agisce su una piccola carica positiva $q$, divisa per questa carica. L'unità è $\\text{N/C}$, che equivale a $\\text{V/m}$.</p>`,
        `<p>Per una carica puntiforme $Q$ alla distanza $r$ vale $E = k\\frac{Q}{r^2}$, dove $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$. L'intensità diminuisce con il <strong>quadrato</strong> della distanza: alla distanza doppia il campo è un quarto. Per questo il campo si indebolisce rapidamente con la distanza.</p>`,
        `<ol><li>Scrivi la carica e la distanza e convertile in unità SI (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li><li>Sostituisci in $E = k\\frac{Q}{r^2}$.</li><li>Scrivi il risultato in $\\text{N/C}$.</li></ol>`,
        { fig: "s1s4-pole-naboja", caption: "L'intensità del campo di una carica puntiforme diminuisce con il quadrato della distanza: a distanza doppia è un quarto." }
      ],
      examples: [
        { task: `Una carica puntiforme $Q = 2\\,\\text{nC}$. Qual è l'intensità del campo alla distanza $r = 0{,}5\\,\\text{m}$?`,
          steps: [`Converti la carica: $Q = 2\\cdot 10^{-9}\\,\\text{C}$.`,
            `$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.`,
            `<strong>Risultato: $E = 72\\,\\text{N/C}$.</strong>`] },
        { task: `Come cambia l'intensità del campo se raddoppiamo la distanza dalla carica?`,
          steps: [`Nella formula compare $r^2$, quindi con $2r$ il denominatore diventa quattro volte più grande.`, `<strong>L'intensità scende a un quarto.</strong>`] }
      ]
    },
    's3-prud-napatie': {
      title: 'Corrente elettrica, tensione e resistenza',
      summary: 'La corrente è carica nel tempo, la tensione è lavoro per carica, la resistenza frena il moto delle cariche.',
      theory: [
        `<p><strong>La corrente elettrica</strong> $I$ è la carica che attraversa una sezione del conduttore nell'unità di tempo: $I = \\frac{Q}{t}$. L'unità è l'ampere ($\\text{A}$). La corrente scorre solo se le cariche possono muoversi e se su di esse agisce una forza.</p>`,
        `<p><strong>La tensione elettrica</strong> $U$ indica il lavoro $W$ compiuto dal campo nel trasferire la carica $Q$: $U = \\frac{W}{Q}$. L'unità è il volt ($\\text{V}$). La tensione è ciò che "spinge" le cariche lungo il circuito.</p>`,
        `<p><strong>La resistenza elettrica</strong> $R$ è la capacità di un conduttore di frenare il moto delle cariche. L'unità è l'ohm ($\\Omega$). La resistenza dipende dal materiale, dalla lunghezza e dalla sezione del conduttore e dalla temperatura: un conduttore più lungo e più sottile ha una resistenza maggiore.</p>`,
        `<p>Perché la corrente è limitata: la tensione mette in moto le cariche, ma gli urti con gli atomi del conduttore le frenano. Il risultato è una corrente stazionaria che dipende sia dalla tensione sia dalla resistenza.</p>`,
        { fig: "s1s4-jednoduchy-obvod", caption: "La corrente scorre dal polo positivo del generatore attraverso il resistore e torna al polo negativo. La tensione U è ai morsetti del generatore." }
      ],
      examples: [
        { task: `In $4\\,\\text{s}$ attraverso un conduttore passa la carica di $12\\,\\text{C}$. Qual è la corrente?`,
          steps: [`Sostituiamo nella relazione $I = \\frac{Q}{t}$.`, `$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.`, `<strong>Risultato: la corrente è 3 A.</strong>`] },
        { task: `Durante il trasferimento della carica di $5\\,\\text{C}$ il campo compie un lavoro di $30\\,\\text{J}$. Qual è la tensione?`,
          steps: [`$U = \\frac{W}{Q}$.`, `$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.`, `<strong>Risultato: la tensione è 6 V.</strong>`] }
      ]
    },
    's3-ohm': {
      title: 'Legge di Ohm e circuiti elettrici',
      summary: 'Corrente, tensione e resistenza; collegamento in serie e in parallelo dei resistori.',
      theory: [
        `<p><strong>La legge di Ohm</strong> afferma che la corrente in un conduttore è direttamente proporzionale alla tensione e inversamente proporzionale alla resistenza: $I = \\frac{U}{R}$, cioè $U = R\\,I$ e $R = \\frac{U}{I}$. Vale per i conduttori metallici a temperatura costante.</p>`,
        `<p><strong>Collegamento in serie</strong>: gli utilizzatori sono uno dopo l'altro, li attraversa la stessa corrente e le tensioni si sommano: $U = U_1 + U_2$, resistenze $R = R_1 + R_2$. Se un utilizzatore smette di funzionare, tutto il circuito si interrompe.</p>`,
        `<p><strong>Collegamento in parallelo</strong>: gli utilizzatori sono affiancati, su ciascuno c'è la stessa tensione e le correnti si sommano: $I = I_1 + I_2$ e $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. La resistenza totale è minore della più piccola delle resistenze dei rami. Per questo gli apparecchi domestici sono collegati in parallelo: ognuno riceve la tensione piena e, se uno si spegne, gli altri continuano a funzionare.</p>`,
        `<p>Per risolvere un circuito, prima stabilisci quali parti sono in serie e quali in parallelo, poi sostituisci ogni collegamento con un unico resistore e applica la legge di Ohm.</p>`,
        { fig: "obr-ohm", caption: "A resistenza costante il grafico della tensione in funzione della corrente è una retta passante per l'origine." }
      ],
      examples: [
        { task: `Un resistore con resistenza $6\\,\\Omega$ è collegato a una tensione di 12 V. Quale corrente lo attraversa?`,
          steps: [`$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.`, `<strong>Risultato: I = 2 A.</strong>`] },
        { task: `Due resistori da $4\\,\\Omega$ sono collegati in parallelo. Qual è la resistenza totale?`,
          steps: [`$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.`, `<strong>Risultato: R = 2 Ω.</strong>`] }
      ]
    },
    's3-praca-vykon': {
      title: 'Lavoro e potenza elettrica',
      summary: 'Potenza di un apparecchio, energia in joule e chilowattora.',
      theory: [
        `<p><strong>La potenza elettrica</strong> $P$ indica con quale rapidità un apparecchio trasforma l'energia elettrica: $P = U\\,I = \\frac{W}{t}$. L'unità è il watt ($\\text{W}$), con $1\\,\\text{W} = 1\\,\\text{J/s}$.</p>`,
        `<p><strong>Il lavoro elettrico</strong> (energia) $W$ in un tempo $t$ è $W = P\\,t = U\\,I\\,t$. L'unità è il joule ($\\text{J}$). Sulla bolletta dell'elettricità si usa il chilowattora: $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<p>Perché vale questo: la tensione indica l'energia per ogni coulomb e la corrente indica quanti coulomb passano in un secondo. Il loro prodotto è l'energia al secondo, cioè la potenza.</p>`,
        `<p>Sulla targhetta dell'apparecchio è indicata la potenza (per esempio 2000 W). L'energia si ottiene moltiplicando la potenza in kilowatt per il tempo in ore.</p>`
      ],
      examples: [
        { task: `Una lampadina è collegata a una tensione di 230 V e la attraversa una corrente di 0,5 A. Qual è la sua potenza?`,
          steps: [`$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.`, `<strong>Risultato: P = 115 W.</strong>`] },
        { task: `Un phon con potenza 1,5 kW funziona per 2 ore. Quanti kWh di energia consuma?`,
          steps: [`$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.`, `<strong>Risultato: 3 kWh.</strong>`] }
      ]
    },
    's3-magnetizmus': {
      title: 'Campo magnetico e induzione elettromagnetica',
      summary: 'Campo magnetico di un conduttore e di una bobina e nascita di una tensione quando varia il flusso magnetico.',
      theory: [
        `<p><strong>Il campo magnetico</strong> nasce intorno ai magneti e intorno a un conduttore percorso da corrente. La sua direzione è indicata dalle linee di campo, che escono dal polo nord ed entrano nel polo sud. L'induzione magnetica $B$ si misura in tesla ($\\text{T}$).</p>`,
        `<p>Un lungo conduttore rettilineo con corrente $I$ crea a distanza $r$ il campo $B = \\frac{\\mu_0 I}{2\\pi r}$. All'interno di una <strong>bobina</strong> con $N$ spire su una lunghezza $l$ il campo è circa uniforme: $B = \\mu_0\\frac{N}{l}I$, dove $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.</p>`,
        `<p><strong>Induzione elettromagnetica:</strong> se varia il flusso magnetico attraverso una spira chiusa di conduttore, in essa nasce una tensione. Secondo la legge di Lenz la corrente indotta ha un verso tale da opporsi alla variazione che la produce. Per questo una bobina si oppone al moto quando le avviciniamo un magnete.</p>`,
        `<p>Perché vale questo: la variazione del campo magnetico agisce con una forza sulle cariche libere del conduttore, che così si mettono in moto. Se la corrente indotta favorisse la variazione, l'energia nascerebbe dal nulla, e ciò contraddice la legge di conservazione dell'energia.</p>`,
        { fig: "obr-magnet-vodic", caption: "Intorno al conduttore percorso da corrente c'è un campo magnetico con linee circolari attorno al conduttore." }
      ],
      examples: [
        { task: `Una bobina ha 500 spire su una lunghezza di 0,25 m e la attraversa una corrente di 2 A. Qual è l'induzione al suo interno?`,
          steps: [`$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.`,
            `$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.`,
            `<strong>Risultato: B ≈ 5,0 mT.</strong>`] },
        { task: `In un conduttore rettilineo scorre una corrente di 4 A. Qual è l'induzione a distanza di 0,2 m dal conduttore?`,
          steps: [`$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.`, `<strong>Risultato: B ≈ 4,0·10⁻⁶ T.</strong>`] }
      ]
    },
    's3-transformator': {
      title: 'Motori elettrici, generatori e trasformatori',
      summary: 'Il motore trasforma energia elettrica in moto, il generatore al contrario; il trasformatore cambia la tensione.',
      theory: [
        `<p>Il <strong>motore elettrico</strong> trasforma energia elettrica in energia meccanica. Su un conduttore percorso da corrente in un campo magnetico agisce una forza. Se il conduttore è avvolto in una bobina, la forza la fa ruotare e la bobina diventa il rotore del motore.</p>`,
        `<p>Il <strong>generatore</strong> è l'opposto del motore: facendo ruotare una bobina in un campo magnetico il flusso magnetico varia periodicamente e nella bobina si induce una tensione alternata.</p>`,
        `<p>Il <strong>trasformatore</strong> cambia la tensione della corrente alternata. In un trasformatore ideale vale $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$, dove $N_1$ e $N_2$ sono il numero di spire dell'avvolgimento primario e di quello secondario. Se l'avvolgimento secondario ha più spire, la tensione aumenta; se ne ha meno, la tensione diminuisce.</p>`,
        `<p>Perché la tensione viene aumentata durante il trasporto: a parità di potenza $P = U\\,I$, a tensione più alta la corrente è più piccola, e quindi sono minori anche le perdite di calore nella linea. Per questo l'elettricità viene trasportata ad alta tensione e, sul luogo di consumo, viene ridotta.</p>`,
        { fig: "s1s4-transformator", caption: "Trasformatore ideale: le tensioni variano nel rapporto del numero di spire, U₁/U₂ = N₁/N₂." }
      ],
      examples: [
        { task: `Un trasformatore ha 200 spire nel primario e 1000 nel secondario. Quale tensione c'è nel secondario, se nel primario ci sono 230 V?`,
          steps: [`$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.`, `$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.`, `<strong>Risultato: 1150 V (il trasformatore aumenta la tensione).</strong>`] },
        { task: `Un trasformatore riduce la tensione da 230 V a 23 V. Quante spire ha l'avvolgimento secondario, se il primario ne ha 1000?`,
          steps: [`$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.`, `$N_2 = \\frac{1000}{10}=100$.`, `<strong>Risultato: 100 spire.</strong>`] }
      ]
    },
    's3-striedavy': {
      title: 'Corrente alternata',
      summary: 'Tensione sinusoidale, periodo, frequenza e valore efficace nella rete.',
      theory: [
        `<p><strong>La corrente alternata</strong> cambia periodicamente sia verso sia intensità. La tensione varia nel tempo in modo sinusoidale: $u = U_{max}\\sin(\\omega t)$, dove $U_{max}$ è l'ampiezza e $\\omega = 2\\pi f$ la pulsazione.</p>`,
        `<p>La durata di un periodo è $T = \\frac{1}{f}$. Nella rete elettrica domestica la frequenza è $f = 50\\,\\text{Hz}$, quindi il periodo è $T = 0{,}02\\,\\text{s}$. In un secondo la tensione si ripete 50 volte.</p>`,
        `<p><strong>Il valore efficace</strong> è il valore della tensione continua che produrrebbe nello stesso apparecchio lo stesso effetto termico. Per una tensione sinusoidale vale $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, cioè $U_{max} = U_{ef}\\sqrt{2}$. Una rete con tensione efficace di 230 V ha un'ampiezza di circa $325\\,\\text{V}$.</p>`,
        `<p>Perché usiamo i valori efficaci: gli apparecchi (lampadina, phon) reagiscono alla potenza media, non ai picchi. Per questo sulle targhette e sui voltmetri vengono indicati proprio i valori efficaci.</p>`,
        { fig: "s1s4-striedavy-prud", caption: "Tensione sinusoidale: il valore efficace è l'ampiezza divisa per √2. Il periodo è T = 1/f; a 50 Hz è 0,02 s." }
      ],
      examples: [
        { task: `La tensione efficace della rete è 230 V. Qual è l'ampiezza della tensione?`,
          steps: [`$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.`, `<strong>Risultato: circa 325 V.</strong>`] },
        { task: `La rete ha frequenza 50 Hz. Qual è il suo periodo?`,
          steps: [`$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.`, `<strong>Risultato: T = 0,02 s.</strong>`] }
      ]
    },
    's3-odraz-lom': {
      title: 'Riflessione e rifrazione della luce',
      summary: 'Legge della riflessione, indice di rifrazione e legge di Snell nel passaggio tra mezzi diversi.',
      theory: [
        `<p><strong>Riflessione della luce</strong>: l'angolo di incidenza è uguale all'angolo di riflessione. Entrambi gli angoli si misurano dalla <em>normale</em> alla superficie di separazione, non dalla superficie. Se un raggio colpisce uno specchio con un angolo di 30° rispetto alla superficie, l'angolo di incidenza misurato dalla normale è $60^\\circ$.</p>`,
        `<p><strong>Rifrazione della luce</strong>: passando in un altro mezzo cambia la velocità della luce e il raggio si rifrange. L'indice di rifrazione è $n = \\frac{c}{v}$, dove $c = 3\\cdot 10^{8}\\,\\text{m/s}$ è la velocità della luce nel vuoto e $v$ la velocità nella sostanza. Un indice maggiore significa luce più lenta.</p>`,
        `<p><strong>Legge di Snell</strong>: $n_1\\sin\\alpha = n_2\\sin\\beta$, dove $\\alpha$ è l'angolo di incidenza e $\\beta$ l'angolo di rifrazione, entrambi misurati dalla normale. Se $n_2 > n_1$, il raggio si avvicina alla normale, cioè $\\beta < \\alpha$.</p>`,
        `<p>Perché il raggio si rifrange: il fronte d'onda rallenta prima da un lato nel mezzo più lento, e questo cambia la direzione di propagazione. Con incidenza perpendicolare la direzione non cambia.</p>`,
        { fig: "obr-odraz", caption: "Nella riflessione della luce da uno specchio piano vale la legge della riflessione." }
      ],
      examples: [
        { task: `La luce passa dall'aria a un vetro con indice di rifrazione $n = 1{,}5$. Qual è la velocità della luce nel vetro?`,
          steps: [`$n=\\frac{c}{v}$, quindi $v=\\frac{c}{n}$.`, `$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.`, `<strong>Risultato: 2·10⁸ m/s.</strong>`] },
        { task: `Un raggio incide perpendicolarmente sulla superficie di separazione. Qual è l'angolo di rifrazione?`,
          steps: [`Incidenza perpendicolare significa $\\alpha=0^\\circ$, quindi $\\sin\\alpha=0$.`, `$n_1\\cdot 0 = n_2\\sin\\beta$, quindi $\\sin\\beta = 0$.`, `<strong>Risultato: $\\beta = 0^\\circ$, il raggio non cambia direzione.</strong>`] }
      ]
    },
    's3-sosovky': {
      title: 'Specchi, lenti e formazione delle immagini',
      summary: 'Equazione dei punti coniugati per la lente sottile, distanza dell\'immagine e ingrandimento.',
      theory: [
        `<p><strong>La distanza focale</strong> $f$ è la distanza del fuoco dal centro della lente (o dal vertice dello specchio). Una lente convergente ha distanza focale positiva: raccoglie i raggi nel fuoco.</p>`,
        `<p><strong>Equazione dei punti coniugati per la lente sottile</strong>: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$, dove $a$ è la distanza dell'oggetto e $b$ la distanza dell'immagine. Se l'oggetto è oltre il doppio della distanza focale, l'immagine è reale, rimpicciolita e capovolta.</p>`,
        `<p><strong>L'ingrandimento</strong> indica quante volte l'immagine è più grande o più piccola dell'oggetto: $|k| = \\frac{b}{a}$. Se $|k| < 1$ l'immagine è rimpicciolita; se $|k| > 1$ è ingrandita.</p>`,
        `<p><strong>Lo specchio piano</strong> forma un'immagine virtuale della stessa dimensione dell'oggetto e alla stessa distanza dietro lo specchio. L'equazione dei punti coniugati si può usare anche per gli specchi sferici, solo con un diverso segno delle distanze.</p>`,
        `<p>Perché vale questo: i raggi che partono da un punto dell'oggetto convergono, dopo la lente, in un punto dell'immagine, e i triangoli simili formati dai raggi danno le relazioni indicate.</p>`,
        { fig: "s1s4-sosovka-2f", caption: "Un oggetto a distanza doppia della focale dà un'immagine reale, capovolta e di uguale dimensione sul lato opposto della lente." }
      ],
      examples: [
        { task: `L'oggetto si trova a 30 cm davanti a una lente convergente con distanza focale 10 cm. A che distanza si forma l'immagine?`,
          steps: [`$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.`, `$b = 15\\,\\text{cm}$.`, `<strong>Risultato: l'immagine si forma a 15 cm dietro la lente.</strong>`] },
        { task: `L'oggetto è a 30 cm davanti alla lente e l'immagine a 15 cm dietro. Di quante volte l'immagine è più piccola?`,
          steps: [`$|k| = \\frac{b}{a} = \\frac{15}{30}$.`, `<strong>Risultato: |k| = 0,5, l'immagine è rimpicciolita a metà.</strong>`] }
      ]
    },
    's4-interferencia': {
      title: 'Proprietà ondulatorie della luce: interferenza e diffrazione',
      summary: 'Sovrapposizione delle onde, frange chiare e scure nella doppia fenditura e piegamento dell\'onda intorno a un ostacolo.',
      theory: [
        `<p>La luce ha proprietà ondulatorie. La luce visibile ha lunghezza d'onda $\\lambda$ compresa circa tra $380\\,\\text{nm}$ e $750\\,\\text{nm}$. Le onde possono <strong>sovrapporsi</strong>, e questo fenomeno si chiama interferenza.</p>`,
        `<p><strong>Interferenza</strong> con la doppia fenditura: se le onde si rinforzano (la differenza di cammino è un multiplo intero di $\\lambda$), si forma una <strong>frangia chiara</strong>. Se si annullano (la differenza di cammino è $\\left(k+\\frac{1}{2}\\right)\\lambda$), si forma una <strong>frangia scura</strong>.</p>`,
        `<p>Per le frange chiare sullo schermo a distanza $L$ dalle fenditure, con distanza $d$ tra le fenditure, vale approssimativamente $y_k = k\\,\\frac{\\lambda L}{d}$, dove $k = 0, 1, 2, \\dots$ è l'ordine della frangia. Con lunghezza d'onda maggiore o con uno schermo più lontano, le frange sono più distanziate.</p>`,
        `<p><strong>La diffrazione</strong> è il piegamento dell'onda intorno a un ostacolo o attraverso una fenditura stretta. È più evidente quando la dimensione dell'ostacolo è vicina alla lunghezza d'onda. Per questo il suono gira meglio l'angolo di una stanza rispetto alla luce.</p>`,
        { fig: "s1s4-interferencia", caption: "Le frange chiare si formano nelle direzioni in cui la differenza di cammino è un multiplo intero di λ: yk = k·λL/d." }
      ],
      examples: [
        { task: `Le fenditure distano tra loro $d = 0{,}5\\,\\text{mm}$, la luce ha $\\lambda = 500\\,\\text{nm}$ e lo schermo è lontano $L = 1\\,\\text{m}$. Qual è la distanza della prima frangia chiara ($k=1$)?`,
          steps: [`$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.`,
            `$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.`,
            `<strong>Risultato: 1 mm dal centro.</strong>`] },
        { task: `Con la stessa disposizione, quale lunghezza d'onda dà frange più larghe: 400 nm o 700 nm?`,
          steps: [`La distanza delle frange $y_k$ è proporzionale a $\\lambda$.`, `<strong>Frange più larghe si ottengono con 700 nm.</strong>`] }
      ]
    },
    's4-ziarenie': {
      title: 'Radiazione elettromagnetica e spettri',
      summary: 'Lunghezza d\'onda, frequenza ed energia del fotone; spettri a righe e continui.',
      theory: [
        `<p>La radiazione elettromagnetica è costituita da onde che nel vuoto si propagano con velocità $c = 3\\cdot 10^{8}\\,\\text{m/s}$. Lunghezza d'onda e frequenza sono legate dalla relazione $c = \\lambda f$. Onde radio, microonde, infrarosso, luce visibile, ultravioletto, raggi X e raggi gamma sono solo parti diverse dello stesso fenomeno.</p>`,
        `<p><strong>Energia del fotone</strong>: la luce viene emessa e assorbita a quanti, detti fotoni. L'energia del fotone è $E = h f = \\frac{h c}{\\lambda}$, dove $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$. Nei calcoli atomici è utile l'unità elettronvolt ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$) e la relazione $hc \\approx 1240\\,\\text{eV·nm}$.</p>`,
        `<p><strong>Spettri</strong>: i solidi incandescenti emettono uno spettro continuo, i gas rarefatti emettono uno spettro a righe. Ogni elemento ha le sue righe caratteristiche, per questo gli spettri servono a determinare la composizione chimica delle stelle.</p>`,
        `<p>Perché gli spettri sono a righe: i livelli energetici degli atomi sono discreti, quindi l'atomo emette o assorbe solo fotoni con energia uguale alla differenza tra due livelli. Un'energia del fotone maggiore significa una lunghezza d'onda più corta.</p>`,
        { fig: "s1s4-spektrum", caption: "La radiazione elettromagnetica è un unico fenomeno con diverse lunghezze d'onda. La luce visibile è solo una banda stretta." }
      ],
      examples: [
        { task: `Un fotone ha lunghezza d'onda 248 nm. Qual è la sua energia in elettronvolt?`,
          steps: [`$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.`, `<strong>Risultato: E = 5 eV.</strong>`] },
        { task: `La luce ha frequenza $6\\cdot 10^{14}\\,\\text{Hz}$. Qual è la sua lunghezza d'onda?`,
          steps: [`$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.`, `<strong>Risultato: 500 nm.</strong>`] }
      ]
    },
    's4-atom': {
      title: 'Modelli dell\'atomo e fenomeni quantistici',
      summary: 'Modello di Bohr dell\'idrogeno: livelli quantizzati ed energia del fotone nel passaggio tra di essi.',
      theory: [
        `<p>Secondo il modello di Rutherford l'atomo ha un piccolo nucleo carico positivamente, attorno al quale si muovono gli elettroni. Però secondo la fisica classica un elettrone che ruota attorno al nucleo dovrebbe emettere continuamente energia e cadere sul nucleo, cosa che non accade. Il modello di Bohr introdusse quindi i <strong>livelli quantizzati</strong>, sui quali l'elettrone non emette energia.</p>`,
        `<p>L'energia dell'elettrone nell'atomo di idrogeno è quantizzata: $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, dove $n = 1, 2, 3, \\dots$ è il numero quantico principale. Più grande è $n$, più debolmente è legato l'elettrone e più la sua energia è vicina allo zero.</p>`,
        `<p><strong>Transizione tra livelli</strong>: quando l'atomo passa da un livello superiore $n_i$ a uno inferiore $n_f$, emette un fotone con energia $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$. La transizione opposta assorbe un fotone di uguale energia.</p>`,
        `<p>Perché vale questo: la lunghezza d'onda della luce emessa corrisponde alla differenza tra i livelli, quindi l'idrogeno emette solo uno spettro a righe. Analogamente, l'effetto fotoelettrico mostra che la luce trasporta energia a quanti, e quindi ha anche proprietà corpuscolari.</p>`,
        { fig: "obr-atom", caption: "Modello semplificato dell'atomo: nucleo positivo ed elettroni su orbite." }
      ],
      examples: [
        { task: `Un elettrone nell'atomo di idrogeno passa dal livello $n=3$ al livello $n=2$. Quale energia emette?`,
          steps: [`$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.`,
            `$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, quindi $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.`,
            `<strong>Risultato: circa 1,89 eV.</strong>`] },
        { task: `Qual è l'energia dell'elettrone sul livello $n=1$?`,
          steps: [`$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.`, `<strong>Risultato: E₁ = −13,6 eV.</strong>`] }
      ]
    },
    's4-radioaktivita': {
      title: 'Radioattività e reazioni nucleari',
      summary: 'Decadimento dei nuclei, tempo di dimezzamento e scrittura di una reazione nucleare.',
      theory: [
        `<p><strong>La radioattività</strong> è il decadimento spontaneo dei nuclei instabili. Durante il decadimento si emettono radiazioni: $\\alpha$ (nuclei di elio), $\\beta$ (elettroni o positroni) e $\\gamma$ (fotoni ad alta energia). Il decadimento del singolo nucleo è casuale, ma con un gran numero di nuclei si comporta in modo prevedibile.</p>`,
        `<p><strong>Il tempo di dimezzamento</strong> $T_{1/2}$ è il tempo in cui decade metà dei nuclei iniziali. Il numero di nuclei non decaduti dopo il tempo $t$ è $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Perché la diminuzione è geometrica: a ogni tempo di dimezzamento la quantità si riduce alla metà, non di un valore fisso. Dopo il primo tempo di dimezzamento resta metà, dopo il secondo un quarto. L'attività $A = \\lambda N$ indica il numero di decadimenti al secondo (unità becquerel, $\\text{Bq}$).</p>`,
        `<p><strong>Le reazioni nucleari</strong> si scrivono con il bilancio del numero di nucleoni (indice superiore) e del numero atomico (indice inferiore): la somma a sinistra è uguale alla somma a destra.</p>`,
        { fig: "s1s4-polcas-rozpadu", caption: "Dopo ogni tempo di dimezzamento il numero di nuclei non decaduti si dimezza: la diminuzione è geometrica, non lineare." }
      ],
      examples: [
        { task: `Un elemento radioattivo ha tempo di dimezzamento di 4 giorni. Quale percentuale della quantità iniziale resta dopo 8 giorni?`,
          steps: [`In 8 giorni sono trascorsi $\\frac{8}{4}=2$ tempi di dimezzamento.`, `Resta $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ della quantità iniziale.`, `<strong>Risultato: 25 %.</strong>`] },
        { task: `Il nucleo di uranio $^{238}_{92}\\text{U}$ decade con decadimento alfa. Quali sono il numero di nucleoni e il numero atomico del nuovo nucleo?`,
          steps: [`La particella alfa è $^{4}_{2}\\text{He}$, porta via 4 nucleoni e 2 protoni.`, `$238-4=234$, $92-2=90$.`, `<strong>Risultato: $^{234}_{90}\\text{Th}$ (torio).</strong>`] }
      ]
    },
    's4-jadro': {
      title: 'Fissione e fusione nucleare',
      summary: 'Difetto di massa ed energia liberata nella fissione dei nuclei pesanti e nella fusione di quelli leggeri.',
      theory: [
        `<p>Un nucleo ha massa minore della somma delle masse dei suoi nucleoni. La differenza è il <strong>difetto di massa</strong> $\\Delta m$ e corrisponde all'energia di legame secondo la relazione di Einstein $\\Delta E = \\Delta m\\,c^2$.</p>`,
        `<p>Se la massa si misura in unità di massa atomica ($1\\,\\text{u}$), vale una relazione pratica: un difetto di massa di $1\\,\\text{u}$ corrisponde a un'energia di circa $931{,}5\\,\\text{MeV}$.</p>`,
        `<p><strong>Fissione</strong>: un nucleo pesante (per esempio uranio-235) si divide in due nuclei di massa media e libera energia. <strong>Fusione</strong>: nuclei leggeri si uniscono in un nucleo più pesante e anche in questo caso si libera energia. Il Sole ricava energia dalla fusione dell'idrogeno in elio.</p>`,
        `<p>Perché l'energia viene liberata: i nuclei sono legati più saldamente intorno al ferro. Il movimento verso di esso, sia dividendo un nucleo pesante sia unendo uno leggero, libera la differenza delle energie di legame.</p>`,
        { fig: "s1s4-vazbova-energia", caption: "L'energia di legame per nucleone è massima intorno al ferro, perciò sia la fissione dei nuclei pesanti sia la fusione di quelli leggeri liberano energia." }
      ],
      examples: [
        { task: `In un processo il difetto di massa è $\\Delta m = 0{,}2\\,\\text{u}$. Quanti MeV di energia vengono liberati?`,
          steps: [`$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.`, `<strong>Risultato: circa 186 MeV.</strong>`] },
        { task: `Nella reazione D + T → He + n le masse prima della reazione sommano a 5,0301 u e dopo la reazione a 5,0113 u. Quanti MeV vengono liberati?`,
          steps: [`$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.`, `$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.`, `<strong>Risultato: circa 17,5 MeV.</strong>`] }
      ]
    },
    's4-astrofyzika': {
      title: 'Basi di astrofisica e cosmologia',
      summary: 'Distanza delle stelle con la parallasse, legge di Hubble dell\'espansione e legge di Wien della radiazione.',
      theory: [
        `<p><strong>Le distanze nell'universo</strong> si misurano in anni luce o in parsec: $1\\,\\text{pc}\\approx 3{,}26\\,\\text{ly}$. Con la <strong>parallasse</strong> una stella appare spostata rispetto allo sfondo del cielo quando la Terra percorre la sua orbita intorno al Sole. La distanza in parsec è $d = \\frac{1}{p}$, dove $p$ è la parallasse annua in secondi d'arco.</p>`,
        `<p><strong>Legge di Hubble</strong>: le galassie lontane si allontanano da noi con velocità $v = H_0\\,d$, dove $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$. Più le galassie sono lontane, più velocemente si allontanano. È la prova che l'universo si sta espandendo.</p>`,
        `<p><strong>Legge di Wien</strong>: la temperatura superficiale della stella determina la lunghezza d'onda alla quale emette con maggiore intensità: $\\lambda_{max} = \\frac{b}{T}$, dove $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$. Le stelle più fredde brillano di rosso, quelle più calde di blu.</p>`,
        `<p>Perché funziona: la parallasse è la geometria del triangolo Terra–Sole–stella, e Hubble scoprì che lo spostamento verso il rosso delle righe spettrali cresce con la distanza. Da entrambe le misure possiamo stimare le distanze e l'età dell'universo.</p>`,
        { fig: "s1s4-paralaxa", caption: "Parallasse: la stella appare spostata rispetto alle stelle più lontane osservandola da due punti dell'orbita terrestre. La distanza in parsec è d = 1/p." }
      ],
      examples: [
        { task: `Una galassia si allontana da noi con velocità di 3500 km/s. Qual è la sua distanza, con $H_0 = 70\\,\\text{km/(s·Mpc)}$?`,
          steps: [`$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.`, `<strong>Risultato: 50 Mpc.</strong>`] },
        { task: `La superficie di una stella ha temperatura 5800 K. A quale lunghezza d'onda emette con la massima intensità?`,
          steps: [`$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.`, `<strong>Risultato: 500 nm (regione verde).</strong>`] }
      ]
    },
    's4-opakovanie': {
      title: 'Ripasso di meccanica, elettricità e altri argomenti',
      summary: 'Ripassa le formule principali di meccanica ed elettricità e controlla le unità.',
      theory: [
        `<p>Il ripasso collega le cose che impari separatamente. Meccanica: $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$. Elettricità: $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Procedi sempre così: prima verifica che cosa è dato e che cosa si cerca, e solo dopo scegli la formula.</p>`,
        `<p><strong>Controllo delle unità:</strong> la forza in newton ($\\text{N} = \\text{kg·m/s}^2$), l'energia in joule, la tensione in volt. Se le unità non tornano su entrambi i lati, l'errore è nel procedimento.</p>`,
        `<p><strong>Errori frequenti:</strong> non dimenticare il $\\frac{1}{2}$ e il quadrato della velocità nell'energia cinetica; converti i km/h in m/s dividendo per $3{,}6$; nel collegamento in parallelo somma i reciproci delle resistenze.</p>`,
        `<p>Perché questo aiuta: la fisica è un sistema unico di leggi. L'energia si conserva passando da un settore all'altro, per esempio l'energia elettrica nel motore si trasforma in energia meccanica, quindi lo stesso ragionamento funziona ovunque.</p>`
      ],
      examples: [
        { task: `Un'auto di massa 1000 kg viaggia a 20 m/s. Qual è la sua energia cinetica?`,
          steps: [`$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.`, `$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.`, `<strong>Risultato: 200 kJ.</strong>`] },
        { task: `Un apparecchio ha tensione 12 V e resistenza 4 Ω. Quale corrente lo attraversa?`,
          steps: [`$I=\\frac{U}{R}=\\frac{12}{4}$.`, `<strong>Risultato: 3 A.</strong>`] }
      ]
    },
    's4-maturita': {
      title: 'Preparazione alla maturità, soprattutto per chi sceglie la fisica',
      summary: 'Procedimento per risolvere i problemi, unità, stima del risultato e arrotondamenti.',
      theory: [
        `<p>All'esame di maturità di fisica si perdono più punti per <strong>unità sbagliate</strong> e per sostituzioni senza controllo. Un procedimento che conviene seguire: scrivi le grandezze date, scrivi quella cercata, scegli la formula, converti le unità nel SI e solo allora calcola.</p>`,
        `<ol><li>Scrivi le grandezze date e quella cercata.</li><li>Scegli la formula e verifica che valga per questo fenomeno.</li><li>Converti le unità nel SI.</li><li>Calcola e arrotonda solo alla fine.</li><li>Controlla l'unità e l'ordine di grandezza del risultato.</li></ol>`,
        `<p><strong>Controllo del risultato:</strong> verifica che l'ordine di grandezza sia ragionevole (la velocità di un'auto non può essere $10^{6}\\,\\text{m/s}$), che il segno sia corretto e che il risultato abbia l'unità giusta. Una stima rapida prima del calcolo ti evita errori con la virgola.</p>`,
        `<p><strong>Arrotondamento:</strong> calcola con la precisione piena e arrotonda solo alla fine, al numero di cifre significative del testo (di solito 2 o 3). Arrotondare nei passaggi intermedi sposta il risultato.</p>`,
        `<p>Perché questo funziona: la prova di maturità valuta il modo di ragionare, non solo il numero finale. Unità corrette e controlli mostrano la comprensione, anche se nel calcolo si sbaglia di poco.</p>`
      ],
      examples: [
        { task: `Un corpo di massa 2 kg ha velocità 36 km/h. Qual è la sua energia cinetica?`,
          steps: [`Converti le unità: $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.`, `$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.`, `<strong>Risultato: 100 J.</strong>`] },
        { task: `Una forza di 500 N agisce su una superficie di 25 cm². Quale pressione si ottiene in kPa?`,
          steps: [`Converti la superficie: $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.`, `$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.`, `<strong>Risultato: 200 kPa.</strong>`] }
      ]
    }
  }
});
