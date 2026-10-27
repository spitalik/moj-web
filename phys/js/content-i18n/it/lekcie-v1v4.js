/* Italiano: lezioni universitarie, livelli v1–v4 (js/rocniky/v1.js, v2.js, v3.js, v4.js). Struttura e chiavi: js/content-i18n.js. */
CONTENT_I18N.add('it', {
  lessons: {
    'v1-kinematika': {
      title: `Cinematica: posizione, velocità e accelerazione`,
      summary: `Descrizione del moto senza le sue cause: come cambiano nel tempo la posizione, la velocità e l'accelerazione.`,
      theory: [
        `<p>La cinematica descrive il moto dei corpi senza chiedersi quale ne sia la causa. La grandezza fondamentale è la <strong>posizione</strong> $x(t)$, cioè la coordinata del corpo rispetto a un'origine e a una direzione scelte.</p>`,
        `<p><strong>La velocità</strong> è la variazione della posizione nell'unità di tempo: $v=\\frac{\\Delta x}{\\Delta t}$. È un vettore, quindi porta anche un segno che determina il verso del moto. <strong>L'accelerazione</strong> è la variazione della velocità nell'unità di tempo: $a=\\frac{\\Delta v}{\\Delta t}$, in unità di $\\text{m/s}^2$.</p>`,
        `<p>Nel <strong>moto uniformemente accelerato</strong> l'accelerazione è costante. La velocità varia allora linearmente, $v=v_0+a\\,t$, e lo spazio percorso cresce con il quadrato del tempo: $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
        `<p><strong>Perché si moltiplica per il tempo:</strong> l'accelerazione indica di quanti metri al secondo cambia la velocità in ogni secondo. In un tempo $t$ la velocità cambia quindi di $a\\,t$. Se $a$ e $v_0$ hanno lo stesso segno, il corpo accelera, altrimenti rallenta.</p>`,
        { fig: 'v1v4-kinematika-vt', caption: `Nel moto uniformemente accelerato il grafico velocità-tempo è una retta: la sua pendenza è l'accelerazione a e il suo punto di partenza è la velocità iniziale v₀.` }
      ],
      examples: [
        { task: `Un'auto è ferma ($v_0=0$) e accelera con accelerazione costante $a=2\\,\\text{m/s}^2$. Quale sarà la sua velocità dopo $5\\,\\text{s}$?`,
          steps: [`Sostituiamo nella relazione $v=v_0+a\\,t$: $v=0+2\\cdot 5$.`, `<strong>Risultato: $v=10\\,\\text{m/s}$</strong>`] },
        { task: `Un treno ha velocità $v_0=12\\,\\text{m/s}$ e frena con accelerazione $a=-3\\,\\text{m/s}^2$. Quale velocità ha dopo $2\\,\\text{s}$?`,
          steps: [`$v=v_0+a\\,t=12+(-3)\\cdot 2$.`, `$v=12-6$.`, `<strong>Risultato: $v=6\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v1-newton': {
      title: `Le leggi del moto di Newton`,
      summary: `Primo, secondo e terzo principio: quando un corpo non si muove di moto uniforme e come la forza è legata all'accelerazione.`,
      theory: [
        `<p><strong>Primo principio</strong> (d'inerzia): un corpo resta in quiete o in moto rettilineo uniforme finché su di esso non agisce una risultante di forze diversa da zero. L'inerzia è una proprietà della massa, non il risultato di una forza.</p>`,
        `<p><strong>Secondo principio</strong>: l'accelerazione è proporzionale alla risultante delle forze e inversamente proporzionale alla massa, $\\vec a=\\frac{\\vec F}{m}$, cioè $\\vec F=m\\,\\vec a$. La risultante è la somma vettoriale di tutte le forze che agiscono sul corpo; le forze di verso opposto si sottraggono.</p>`,
        `<p><strong>Terzo principio</strong>: se il corpo A agisce sul corpo B con una forza, il corpo B agisce su A con una forza di uguale intensità e verso opposto. Queste due forze agiscono su corpi <em>diversi</em>, quindi non si annullano a vicenda.</p>`,
        `<p><strong>Perché è così:</strong> la forza è la causa della variazione del moto. A parità di accelerazione, una massa maggiore richiede una forza maggiore, perché la massa oppone resistenza alle variazioni di velocità.</p>`,
        { fig: 'v1v4-sily-dve', caption: `Forze in direzioni opposte si sottraggono. La risultante F₁ − F₂ imprime al corpo l'accelerazione a = (F₁ − F₂)/m.` }
      ],
      examples: [
        { task: `Un corpo di massa $m=4\\,\\text{kg}$ è trainato da una forza $F=20\\,\\text{N}$, mentre sulla stessa retta agisce contro di esso un attrito $F_t=8\\,\\text{N}$. Qual è l'accelerazione?`,
          steps: [`Risultante: $F_v=20-8=12\\,\\text{N}$.`, `Accelerazione: $a=\\frac{F_v}{m}=\\frac{12}{4}$.`, `<strong>Risultato: $a=3\\,\\text{m/s}^2$</strong>`] },
        { task: `Su un corpo di massa $m=3\\,\\text{kg}$ agisce una risultante di $12\\,\\text{N}$. Qual è l'accelerazione?`,
          steps: [`$a=\\frac{F}{m}=\\frac{12}{3}$.`, `<strong>Risultato: $a=4\\,\\text{m/s}^2$</strong>`] }
      ]
    },
    'v1-hybnost': {
      title: `Forze, quantità di moto e momento angolare`,
      summary: `La quantità di moto come misura del moto, l'impulso di una forza e il momento angolare nella rotazione attorno a un punto.`,
      theory: [
        `<p>La <strong>quantità di moto</strong> di un corpo è il prodotto della sua massa per la velocità: $\\vec p=m\\,\\vec v$. Un corpo pesante e veloce ha una grande quantità di moto e si arresta con più difficoltà.</p>`,
        `<p>Il secondo principio di Newton si può scrivere anche tramite la quantità di moto: $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. Il prodotto $\\vec F\\,\\Delta t$ si chiama <strong>impulso della forza</strong> ed è uguale alla variazione della quantità di moto: $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
        `<p>Il <strong>momento angolare</strong> di un punto materiale rispetto a un punto fisso $O$ è il prodotto vettoriale di posizione e quantità di moto: $\\vec L=\\vec r\\times\\vec p$, di modulo $L=r\\,p\\sin\\alpha$, dove $\\alpha$ è l'angolo fra $\\vec r$ e $\\vec p$.</p>`,
        `<p><strong>Perché vale:</strong> una forza modifica la quantità di moto solo se agisce abbastanza a lungo. Un colpo breve dà un impulso piccolo anche con una forza grande. Il momento angolare cambia solo quando sul corpo agisce un momento di forza $\\vec M=\\vec r\\times\\vec F$.</p>`
      ],
      examples: [
        { task: `Un proiettile di massa $m=0{,}02\\,\\text{kg}$ viaggia alla velocità $v=300\\,\\text{m/s}$. Qual è la sua quantità di moto?`,
          steps: [`$p=m\\,v=0{,}02\\cdot 300$.`, `<strong>Risultato: $p=6\\,\\text{kg\\,m/s}$</strong>`] },
        { task: `Una forza $F=50\\,\\text{N}$ agisce su un corpo per $4\\,\\text{s}$. Qual è la variazione della sua quantità di moto?`,
          steps: [`Impulso della forza: $\\Delta p=F\\,\\Delta t=50\\cdot 4$.`, `<strong>Risultato: $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>`] }
      ]
    },
    'v1-praca-energia': {
      title: `Lavoro, energia e potenza`,
      summary: `Lavoro di una forza, energia cinetica di un corpo e potenza come lavoro nell'unità di tempo.`,
      theory: [
        `<p>Il <strong>lavoro</strong> di una forza costante per uno spostamento $\\vec s$ è $W=F\\,s\\cos\\alpha$, dove $\\alpha$ è l'angolo fra forza e spostamento. Una forza perpendicolare allo spostamento non compie lavoro.</p>`,
        `<p>L'<strong>energia cinetica</strong> di un corpo è $E_k=\\frac{1}{2}m v^2$. Il lavoro della risultante delle forze è uguale alla variazione dell'energia cinetica: $W=\\Delta E_k$. È il teorema dell'energia cinetica.</p>`,
        `<p>La <strong>potenza</strong> è il lavoro compiuto nell'unità di tempo: $P=\\frac{W}{t}$, in watt, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
        `<p><strong>Perché compare $v^2$:</strong> a velocità doppia un corpo possiede quattro volte l'energia, perché per fermarlo serve quattro volte il lavoro. Per questo gli incidenti ad alta velocità sono così pericolosi.</p>`,
        { fig: 'v1v4-praca-uhol', caption: `Il lavoro è compiuto solo dalla componente della forza parallela allo spostamento, F·cos α. La componente perpendicolare allo spostamento non compie lavoro.` }
      ],
      examples: [
        { task: `Un corpo di massa $m=2\\,\\text{kg}$ si muove alla velocità $v=3\\,\\text{m/s}$. Qual è la sua energia cinetica?`,
          steps: [`$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.`, `<strong>Risultato: $E_k=9\\,\\text{J}$</strong>`] },
        { task: `Una forza $F=10\\,\\text{N}$ sposta il corpo di $s=6\\,\\text{m}$ nel verso della forza. Quale lavoro viene compiuto?`,
          steps: [`L'angolo è $\\alpha=0^\\circ$, quindi $\\cos\\alpha=1$.`, `$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.`, `<strong>Risultato: $W=60\\,\\text{J}$</strong>`] }
      ]
    },
    'v1-gravitacne-pole': {
      title: `Campo gravitazionale`,
      summary: `Legge di gravitazione di Newton, accelerazione gravitazionale e la sua variazione con la distanza dal centro di un pianeta.`,
      theory: [
        `<p><strong>Legge di gravitazione di Newton</strong>: due corpi di masse $m_1$ e $m_2$ a distanza $r$ si attraggono con la forza $F=G\\frac{m_1 m_2}{r^2}$, dove $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$.</p>`,
        `<p><strong>Il campo gravitazionale</strong> è la regione in cui una forza gravitazionale agisce su un corpo materiale. L'intensità del campo, cioè l'<em>accelerazione gravitazionale</em>, è $g=\\frac{F}{m}=G\\frac{M}{r^2}$, dove $M$ è la massa della sorgente del campo.</p>`,
        `<p><strong>Perché diminuisce con la distanza:</strong> l'effetto gravitazionale si distribuisce su una sfera di superficie $4\\pi r^2$ sempre più grande. Perciò l'accelerazione gravitazionale varia con il quadrato della distanza dal centro, non in modo lineare.</p>`,
        `<p>Alla superficie terrestre $g\\approx 9{,}81\\,\\text{m/s}^2$. A distanza $r$ dal centro della Terra vale $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$, dove $R$ è il raggio terrestre.</p>`,
        { fig: 'v1v4-gravitacia-r', caption: `L'accelerazione gravitazionale decresce con il quadrato della distanza dal centro: a distanza 2R è un quarto del valore alla superficie.` }
      ],
      examples: [
        { task: `Qual è l'accelerazione gravitazionale a un'altezza alla quale la distanza dal centro della Terra è il doppio del raggio terrestre?`,
          steps: [`Il rapporto delle distanze è $\\frac{r}{R}=2$, quindi $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.`, `$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.`, `<strong>Risultato: circa $2{,}45\\,\\text{m/s}^2$</strong>`] },
        { task: `Due corpi di masse $m_1=10\\,\\text{kg}$ e $m_2=5\\,\\text{kg}$ si trovano a distanza $r$. Come cambia la forza se la distanza viene raddoppiata?`,
          steps: [`La forza è proporzionale a $\\frac{1}{r^2}$; a distanza $2r$ diminuisce di quattro volte.`, `<strong>Risultato: la forza si riduce a un quarto</strong>`] }
      ]
    },
    'v1-rotacia': {
      title: `Rotazione di un corpo rigido`,
      summary: `Velocità angolare, momento d'inerzia e momento di una forza nella rotazione di un corpo attorno a un asse.`,
      theory: [
        `<p>Un <strong>corpo rigido</strong> ruotando attorno a un asse non cambia forma: tutti i suoi punti ruotano con la stessa <strong>velocità angolare</strong> $\\omega$, in radianti al secondo. Se il corpo compie $f$ giri al secondo, è $\\omega=2\\pi f$, perché un giro completo corrisponde all'angolo $2\\pi$.</p>`,
        `<p>La velocità tangenziale di un punto a distanza $r$ dall'asse è $v=\\omega\\,r$. A parità di velocità angolare, i punti più lontani dall'asse si muovono più velocemente.</p>`,
        `<p>Il <strong>momento d'inerzia</strong> $I=\\sum m_i r_i^2$ è l'equivalente rotazionale della massa. Dipende non solo dalla massa, ma anche da quanto lontano dall'asse essa è distribuita. La seconda legge di Newton per la rotazione ha la forma $M=I\\,\\alpha$, dove $M$ è il momento della forza e $\\alpha$ l'accelerazione angolare.</p>`,
        `<p><strong>Perché c'è il due:</strong> l'angolo si misura in radianti e un giro corrisponde a $2\\pi$ radianti, non a $\\pi$. Per questo la frequenza in hertz si moltiplica per due pi greco.</p>`,
        { fig: 'v1v4-rotacia', caption: `Un punto di un corpo rigido a distanza r dall'asse si muove lungo una circonferenza con velocità tangenziale v = ω·r.` }
      ],
      examples: [
        { task: `Un disco ruota con frequenza $f=3\\,\\text{Hz}$. Qual è la sua velocità angolare?`,
          steps: [`$\\omega=2\\pi f=2\\pi\\cdot 3$.`, `<strong>Risultato: $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>`] },
        { task: `Un punto di una ruota si trova a distanza $r=0{,}5\\,\\text{m}$ dall'asse e la velocità angolare è $\\omega=4\\,\\text{rad/s}$. Qual è la sua velocità tangenziale?`,
          steps: [`$v=\\omega\\,r=4\\cdot 0{,}5$.`, `<strong>Risultato: $v=2\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v1-sustavy': {
      title: `Meccanica dei sistemi di particelle`,
      summary: `Il baricentro di un sistema di particelle come media pesata delle loro posizioni e il moto del baricentro.`,
      theory: [
        `<p>Un <strong>sistema di particelle</strong> si può descrivere con un solo punto significativo, il suo <strong>baricentro</strong>. Per due particelle sull'asse $x$ la sua posizione è $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$. È una media pesata, nella quale la particella più pesante attira il baricentro verso di sé.</p>`,
        `<p>Il baricentro si muove come una singola particella di massa totale $M=\\sum m_i$, sulla quale agisce la risultante delle forze esterne: $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. Le forze interne fra le particelle si annullano a vicenda, quindi non modificano il moto del baricentro.</p>`,
        `<p><strong>Perché il baricentro e non una media semplice:</strong> se le particelle avessero uguale massa, risulterebbe la media aritmetica. Con masse diverse ogni coordinata deve essere pesata secondo la propria massa.</p>`,
        `<p>L'energia cinetica di un sistema si può suddividere in energia del moto del baricentro e in energia del moto delle particelle rispetto al baricentro. Grazie a ciò i moti complessi si possono scomporre in parti più semplici.</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: `Il baricentro T si trova più vicino alla particella più pesante. La sua coordinata è la media pesata delle coordinate delle particelle.` }
      ],
      examples: [
        { task: `Una particella di massa $1\\,\\text{kg}$ si trova nel punto $x_1=0\\,\\text{m}$ e una particella di massa $3\\,\\text{kg}$ nel punto $x_2=4\\,\\text{m}$. Dove si trova il baricentro?`,
          steps: [`$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.`, `<strong>Risultato: $x_T=3\\,\\text{m}$</strong>`] },
        { task: `Due particelle di uguale massa si trovano nei punti $x_1=2\\,\\text{m}$ e $x_2=8\\,\\text{m}$. Dove si trova il baricentro?`,
          steps: [`Per masse uguali il baricentro è la media aritmetica: $x_T=\\frac{2+8}{2}$.`, `<strong>Risultato: $x_T=5\\,\\text{m}$</strong>`] }
      ]
    },
    'v1-lagrange': {
      title: `Meccanica lagrangiana e hamiltoniana`,
      summary: `La lagrangiana come differenza fra energia cinetica e potenziale e la hamiltoniana come energia totale.`,
      theory: [
        `<p>La <strong>lagrangiana</strong> di un sistema è $L=T-V$, dove $T$ è l'energia cinetica e $V$ l'energia potenziale. Invece di seguire le singole forze, basta conoscere queste due energie e la loro dipendenza dalle coordinate generalizzate $q$ e dalle velocità $\\dot q$.</p>`,
        `<p><strong>Le equazioni di Eulero-Lagrange</strong> forniscono le equazioni del moto: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. Il vantaggio è che le coordinate si possono scegliere liberamente, purché siano adatte al problema, per esempio l'angolo di un pendolo.</p>`,
        `<p>La <strong>hamiltoniana</strong> con forze conservative è $H=T+V$, cioè l'energia totale. Introducendo i momenti $p=\\frac{\\partial L}{\\partial \\dot q}$, le equazioni del moto si scrivono come coppie di equazioni del primo ordine, le cosiddette equazioni di Hamilton.</p>`,
        `<p><strong>Perché il segno meno nella $L$:</strong> l'energia potenziale agisce contro il moto e nella lagrangiana viene sottratta, mentre nell'hamiltoniana si somma all'energia cinetica.</p>`
      ],
      examples: [
        { task: `Una particella di massa $m=2\\,\\text{kg}$ ha velocità $v=3\\,\\text{m/s}$ all'altezza $h=1\\,\\text{m}$. Qual è la sua lagrangiana, se $g=10\\,\\text{m/s}^2$?`,
          steps: [`$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.`, `$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.`, `<strong>Risultato: $L=T-V=9-20=-11\\,\\text{J}$</strong>`] },
        { task: `La stessa particella ha la hamiltoniana $H=T+V$. Qual è il suo valore?`,
          steps: [`$H=9+20$.`, `<strong>Risultato: $H=29\\,\\text{J}$</strong>`] }
      ]
    },
    'v2-teplota-tlak': {
      title: `Temperatura, pressione, calore ed energia interna`,
      summary: `Temperatura termodinamica in kelvin, pressione come forza per unità di superficie ed energia interna come somma delle energie delle particelle.`,
      theory: [
        `<p>La <strong>temperatura termodinamica</strong> $T$ si misura in kelvin. È proporzionale all'energia cinetica media delle particelle, perciò non può essere negativa. La conversione dai gradi Celsius è $T=t+273{,}15$, dove $0\\,\\text{K}$ è lo zero assoluto.</p>`,
        `<p>La <strong>pressione</strong> è la forza che agisce perpendicolarmente su un'unità di superficie: $p=\\frac{F}{S}$, in pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Il gas esercita pressione sulle pareti del recipiente perché le sue particelle urtano contro di esse e cedono loro quantità di moto.</p>`,
        `<p>L'<strong>energia interna</strong> $U$ è la somma delle energie cinetiche e potenziali di tutte le particelle del sistema. Il <strong>calore</strong> $Q$ è l'energia che si trasferisce fra i corpi a causa di una differenza di temperatura; non è un "contenuto" del corpo.</p>`,
        `<p><strong>Perché il kelvin:</strong> i gradi Celsius hanno uno zero scelto in modo arbitrario. Nelle formule che riguardano l'energia o un rapporto occorre usare lo zero in corrispondenza del quale l'energia si annulla, cioè i kelvin.</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: `La conversione è T = t + 273,15. Lo zero assoluto corrisponde a 0 K, cioè a −273,15 °C.` }
      ],
      examples: [
        { task: `Qual è la temperatura $t=27\\,{}^\\circ\\text{C}$ espressa in kelvin?`,
          steps: [`$T=t+273{,}15=27+273{,}15$.`, `<strong>Risultato: $T=300{,}15\\,\\text{K}$</strong>`] },
        { task: `Una forza $F=600\\,\\text{N}$ agisce perpendicolarmente su una superficie $S=0{,}2\\,\\text{m}^2$. Qual è la pressione?`,
          steps: [`$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.`, `<strong>Risultato: $p=3000\\,\\text{Pa}$</strong>`] }
      ]
    },
    'v2-stavove-rovnice': {
      title: `Equazioni di stato`,
      summary: `Equazione di stato del gas ideale pV = nRT e il suo impiego nel calcolo della pressione.`,
      theory: [
        `<p>L'<strong>equazione di stato</strong> del gas ideale lega la pressione $p$, il volume $V$, la quantità di sostanza $n$ e la temperatura $T$: $pV=nRT$, dove $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$.</p>`,
        `<p>Il gas ideale è un modello in cui le particelle non hanno volume proprio e non interagiscono fra loro, se non per urto. Per un gas sufficientemente rarefatto, a temperature ordinarie, il modello è molto preciso.</p>`,
        `<p><strong>Come usarla:</strong> se si conoscono tre grandezze, si esprime la quarta. Per esempio la pressione è $p=\\frac{nRT}{V}$. Quando una grandezza cambia, le altre variano secondo le proporzionalità: a temperatura costante la pressione è inversamente proporzionale al volume.</p>`,
        `<p><strong>Attenzione alle unità:</strong> la temperatura deve essere in kelvin e il volume in metri cubi, altrimenti il risultato non sarà in pascal. I litri e i decimetri cubi si convertono dividendo per $1000$.</p>`,
        { fig: 'v1v4-izoterma', caption: `A temperatura costante il prodotto pV è costante, quindi la pressione in funzione del volume forma un'iperbole: il doppio del volume significa la metà della pressione.` }
      ],
      examples: [
        { task: `Un gas ha $n=1\\,\\text{mol}$, temperatura $T=300\\,\\text{K}$ e volume $V=2\\,\\text{dm}^3$. Qual è la pressione in kPa?`,
          steps: [`$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.`, `$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.`, `<strong>Risultato: $p\\approx 1247\\,\\text{kPa}$</strong>`] },
        { task: `A temperatura costante il volume del gas raddoppia. Come cambia la pressione?`,
          steps: [`A $T$ e $n$ costanti vale $p\\,V=\\text{cost.}$`, `Se $V\\to 2V$, allora $p\\to \\frac{p}{2}$.`, `<strong>Risultato: la pressione si dimezza</strong>`] }
      ]
    },
    'v2-prvy-zakon': {
      title: `Primo e secondo principio della termodinamica`,
      summary: `Conservazione dell'energia nei processi termici e direzione in cui avvengono spontaneamente i processi naturali.`,
      theory: [
        `<p>Il <strong>primo principio della termodinamica</strong> è la legge di conservazione dell'energia: la variazione dell'energia interna è uguale al calore fornito diminuito del lavoro compiuto dal gas: $\\Delta U=Q-W$, dove $W$ è il lavoro del gas.</p>`,
        `<p>Se il gas compie lavoro, la sua energia interna diminuisce, perché l'energia si allontana verso l'ambiente. Se invece sul gas viene compiuto lavoro, la formula va riscritta come $\\Delta U=Q+W_{\\text{sul gas}}$. È sempre importante sapere quale convenzione sui segni si utilizza.</p>`,
        `<p>Il <strong>secondo principio della termodinamica</strong> afferma che il calore passa spontaneamente solo da un corpo più caldo a uno più freddo e che un motore termico non può trasformare tutto il calore in lavoro. La direzione dei processi naturali è determinata dall'aumento dell'entropia.</p>`,
        `<p><strong>Perché è importante:</strong> il primo principio dice quale energia si conserva, il secondo dice in quale direzione avvengono i processi. Senza il secondo principio si potrebbe costruire un <em>perpetuum mobile</em> di secondo tipo.</p>`,
        { fig: 'v1v4-prvy-zakon', caption: `Il calore Q fornito aumenta l'energia interna del gas, il lavoro W compiuto dal gas sottrae energia: ΔU = Q − W.` }
      ],
      examples: [
        { task: `Al gas viene fornito un calore $Q=300\\,\\text{J}$ e il gas compie un lavoro $W=120\\,\\text{J}$. Qual è la variazione della sua energia interna?`,
          steps: [`$\\Delta U=Q-W=300-120$.`, `<strong>Risultato: $\\Delta U=180\\,\\text{J}$</strong>`] },
        { task: `Durante la compressione il gas riceve un lavoro $W_{\\text{sul gas}}=50\\,\\text{J}$ e cede un calore $Q=-20\\,\\text{J}$. Qual è la variazione dell'energia interna?`,
          steps: [`$\\Delta U=Q+W_{\\text{sul gas}}=-20+50$.`, `<strong>Risultato: $\\Delta U=30\\,\\text{J}$</strong>`] }
      ]
    },
    'v2-entropia': {
      title: `Entropia e processi termici`,
      summary: `Entropia come misura dell'irreversibilità e la sua variazione in una trasformazione isoterma reversibile.`,
      theory: [
        `<p>L'<strong>entropia</strong> $S$ è una grandezza che misura il numero di microstati possibili di un sistema per un dato macrostato. Quando un calore $Q$ viene assorbito in modo reversibile a temperatura $T$ costante, l'entropia varia di $\\Delta S=\\frac{Q}{T}$, in unità di $\\text{J/K}$.</p>`,
        `<p>Il calore fornito a bassa temperatura aumenta l'entropia più dello stesso calore fornito ad alta temperatura. Per questo la formula divide per la temperatura e non si limita a sommare.</p>`,
        `<p><strong>Il secondo principio nella forma dell'entropia:</strong> in un sistema isolato l'entropia non diminuisce mai; nelle trasformazioni reversibili resta costante, in quelle irreversibili cresce. I processi spontanei avvengono nel senso di un'entropia crescente.</p>`,
        `<p><strong>Perché è così:</strong> uno stato molto ordinato ha pochi microstati e il sistema tende naturalmente a passare in stati che ne hanno molti. L'entropia è quindi una misura di quanto disordine irreversibile si crea nel sistema.</p>`
      ],
      examples: [
        { task: `Un gas a temperatura costante $T=300\\,\\text{K}$ assorbe in modo reversibile un calore $Q=600\\,\\text{J}$. Qual è la variazione della sua entropia?`,
          steps: [`$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.`, `<strong>Risultato: $\\Delta S=2\\,\\text{J/K}$</strong>`] },
        { task: `Come cambia l'entropia se lo stesso calore $Q=600\\,\\text{J}$ viene fornito alla temperatura $T=600\\,\\text{K}$?`,
          steps: [`$\\Delta S=\\frac{600}{600}=1$.`, `<strong>Risultato: $\\Delta S=1\\,\\text{J/K}$, è minore che alla temperatura più bassa</strong>`] }
      ]
    },
    'v2-tepelne-motory': {
      title: `Motori termici e frigoriferi`,
      summary: `Rendimento di una macchina termica, ciclo di Carnot e il limite imposto dalle temperature della sorgente calda e del refrigerante.`,
      theory: [
        `<p>Il <strong>motore termico</strong> sottrae calore alla sorgente calda, trasforma una parte in lavoro e cede il resto al refrigerante. Il rendimento è $\\eta=\\frac{W}{Q_h}$, cioè il rapporto fra il lavoro compiuto e il calore prelevato dalla sorgente calda.</p>`,
        `<p>Il <strong>ciclo di Carnot</strong> è il miglior ciclo reversibile possibile fra due temperature. Il suo rendimento è $\\eta=1-\\frac{T_c}{T_h}$, dove le temperature devono essere espresse in kelvin.</p>`,
        `<p>Il <strong>frigorifero</strong> è una macchina termica invertita: con un lavoro sposta calore da uno spazio più freddo a uno più caldo. Per questo non si parla di rendimento, ma di coefficiente di prestazione.</p>`,
        `<p><strong>Perché il rendimento non è del 100 %:</strong> anche un motore ideale deve cedere una parte del calore al refrigerante per poter chiudere il ciclo. Quanto maggiore è la differenza di temperatura, tanto più alto può essere il rendimento.</p>`,
        { fig: 'v1v4-tepelny-motor', caption: `Il motore preleva dalla sorgente calda il calore Q_h, trasforma una parte in lavoro W e cede il resto Q_c al refrigerante.` }
      ],
      examples: [
        { task: `Un motore termico lavora fra una sorgente calda a temperatura $T_h=500\\,\\text{K}$ e un refrigerante a $T_c=300\\,\\text{K}$. Qual è il suo rendimento ideale?`,
          steps: [`$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.`, `$\\eta=1-0{,}6=0{,}4$.`, `<strong>Risultato: $\\eta=40\\,\\%$</strong>`] },
        { task: `Un motore con rendimento $25\\,\\%$ riceve dalla sorgente calda un calore $Q_h=800\\,\\text{J}$. Quale lavoro compie?`,
          steps: [`$W=\\eta\\,Q_h=0{,}25\\cdot 800$.`, `<strong>Risultato: $W=200\\,\\text{J}$</strong>`] }
      ]
    },
    'v2-kinetika-plynov': {
      title: `Teoria cinetica dei gas`,
      summary: `Visione molecolare del gas: l'energia cinetica media delle particelle è proporzionale alla temperatura assoluta.`,
      theory: [
        `<p>La <strong>teoria cinetica dei gas</strong> spiega la pressione e la temperatura attraverso il moto delle molecole. La pressione nasce dagli urti delle molecole contro le pareti del recipiente, la temperatura è la misura della loro energia cinetica media.</p>`,
        `<p>L'energia cinetica media di una molecola in un gas ideale è $\\overline{E_k}=\\frac{3}{2}k\\,T$, dove $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ è la costante di Boltzmann. Dipende solo dalla temperatura, non dal tipo di gas.</p>`,
        `<p><strong>Perché c'è $\\frac{3}{2}$:</strong> la molecola può muoversi in tre direzioni e ogni direzione contribuisce con la metà di $k\\,T$ all'energia. Tre gradi di libertà danno insieme $\\frac{3}{2}k\\,T$.</p>`,
        `<p><strong>Perché i kelvin:</strong> la formula è direttamente proporzionale alla temperatura assoluta. A $0\\,\\text{K}$ l'energia cinetica delle molecole dovrebbe essere nulla, perciò in questa formula non si usa mai il grado Celsius.</p>`
      ],
      examples: [
        { task: `Qual è l'energia cinetica media di una molecola di gas alla temperatura $T=300\\,\\text{K}$? Usa $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.`,
          steps: [`$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.`, `$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.`, `<strong>Risultato: circa $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>`] },
        { task: `Se la temperatura del gas raddoppia, come cambia l'energia cinetica media di una molecola?`,
          steps: [`L'energia è direttamente proporzionale a $T$.`, `<strong>Risultato: raddoppia</strong>`] }
      ]
    },
    'v2-boltzmann': {
      title: `Distribuzione di Boltzmann`,
      summary: `Distribuzione delle particelle fra i livelli energetici alla data temperatura e decrescita esponenziale dell'occupazione.`,
      theory: [
        `<p>In equilibrio termico le particelle si distribuiscono fra i livelli energetici in modo che i livelli più alti siano meno occupati. Il rapporto fra il numero di particelle sui livelli $E_2$ ed $E_1$ è $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$, supponendo uguali le degenerazioni dei livelli.</p>`,
        `<p>L'esponenziale significa che una piccola differenza di energia fra i livelli ha un grande effetto se la temperatura è bassa. Ad alta temperatura i livelli si equalizzano e l'occupazione tende a una distribuzione uniforme.</p>`,
        `<p><strong>Perché proprio l'esponenziale:</strong> la probabilità di occupazione di uno stato con energia $E$ diminuisce per un fattore fisso a ogni aumento costante dell'energia. È proprio questo a portare a una dipendenza esponenziale.</p>`,
        `<p>Il risultato mostra che la temperatura non è soltanto una misura del calore, ma anche la scala che determina quali stati sono accessibili. La distribuzione è alla base di tutti i calcoli statistici delle proprietà macroscopiche.</p>`,
        { fig: 'v1v4-boltzmann', caption: `Un livello situato a ΔE = k·T sopra quello fondamentale è occupato, alla temperatura T, circa e⁻¹ ≈ 0,37 volte rispetto al livello fondamentale.` }
      ],
      examples: [
        { task: `Il livello si trova a $\\Delta E=kT$ sopra il livello fondamentale. Qual è il rapporto $\\frac{N_2}{N_1}$?`,
          steps: [`$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.`, `<strong>Risultato: $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>`] },
        { task: `Il livello è più alto di $2\\,kT$. Qual è il rapporto di occupazione?`,
          steps: [`$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.`, `<strong>Risultato: circa $0{,}135$</strong>`] }
      ]
    },
    'v2-statisticke': {
      title: `Interpretazione statistica dei fenomeni macroscopici`,
      summary: `La relazione di Boltzmann fra entropia e numero di microstati e perché i fenomeni macroscopici hanno carattere probabilistico.`,
      theory: [
        `<p>La <strong>relazione di Boltzmann</strong> collega l'entropia al numero di microstati $W$ che corrispondono a un dato macrostato: $S=k\\ln W$. Il logaritmo naturale fa sì che l'entropia sia additiva quando si uniscono due sistemi indipendenti.</p>`,
        `<p>Per $N$ particelle indipendenti, ciascuna delle quali può trovarsi in uno di due stati, il numero di microstati è $W=2^N$. L'entropia vale allora $S=k\\,N\\ln 2$, cioè cresce in proporzione al numero di particelle.</p>`,
        `<p><strong>Perché i fenomeni macroscopici sono probabilistici:</strong> i macrostati con un grande numero di microstati si presentano molto più spesso. Con una mole di particelle la differenza di probabilità è così enorme che una diminuzione spontanea dell'entropia non si osserva praticamente mai.</p>`,
        `<p><strong>Perché il logaritmo:</strong> il numero di microstati cresce esponenzialmente con il numero di particelle; il suo logaritmo diventa una grandezza lineare, che si può sommare e confrontare in modo sensato.</p>`
      ],
      examples: [
        { task: `Un sistema contiene $N=3$ particelle indipendenti, ciascuna con due stati. Quanti microstati $W$ ha?`,
          steps: [`$W=2^N=2^3$.`, `<strong>Risultato: $W=8$</strong>`] },
        { task: `Qual è il valore di $S/k$ per $N=4$ particelle con due stati? Arrotonda a 2 cifre decimali.`,
          steps: [`$W=2^4=16$, quindi $\\frac{S}{k}=\\ln 16$.`, `$\\ln 16=4\\ln 2\\approx 2{,}77$.`, `<strong>Risultato: $\\frac{S}{k}\\approx 2{,}77$</strong>`] }
      ]
    },
    'v3-elektricke-pole': {
      title: `Campo elettrico e potenziale elettrico`,
      summary: `Intensità e potenziale di una carica puntiforme, principio di sovrapposizione e lavoro nel campo elettrico.`,
      theory: [
        `<p><strong>L'intensità del campo elettrico</strong> in un punto è la forza su una carica di prova positiva divisa per il valore di tale carica: $\\vec E=\\frac{\\vec F}{q}$, in unità di $\\text{V/m}$. Il campo è una proprietà dello spazio, non della carica di prova.</p>`,
        `<p>Per una carica puntiforme $Q$ a distanza $r$ si ha $E=k\\frac{Q}{r^2}$, dove $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$. La direzione del campo è radiale: uscente dalla carica positiva ed entrante in quella negativa.</p>`,
        `<p><strong>Il potenziale elettrico</strong> è l'energia per unità di carica: $V=k\\frac{Q}{r}$. Il lavoro per spostare la carica $q$ fra due punti è $W=q\\,\\Delta V$ e non dipende dal percorso, ma soltanto dal punto iniziale e da quello finale.</p>`,
        `<p><strong>Sovrapposizione:</strong> i campi di più cariche si sommano vettorialmente, mentre i potenziali si sommano come grandezze scalari. Per questo il potenziale è più semplice da calcolare dell'intensità.</p>`,
        { fig: 'v1v4-elektricke-pole', caption: `Le linee di campo di una carica puntiforme positiva escono radialmente verso l'esterno. L'intensità diminuisce con il quadrato della distanza.` }
      ],
      examples: [
        { task: `Una carica puntiforme $Q=2\\,\\mu\\text{C}$ si trova a distanza $r=3\\,\\text{m}$. Qual è l'intensità del campo in kV/m? Usa $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$.`,
          steps: [`$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.`, `$E\\approx 2{,}00\\,\\text{kV/m}$`, `<strong>Risultato: circa $2{,}00\\,\\text{kV/m}$</strong>`] },
        { task: `Come cambia l'intensità del campo di una carica puntiforme se la distanza raddoppia?`,
          steps: [`L'intensità è proporzionale a $\\frac{1}{r^2}$.`, `$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.`, `<strong>Risultato: diminuisce a un quarto</strong>`] }
      ]
    },
    'v3-gauss': {
      title: `Legge di Gauss`,
      summary: `Flusso del campo elettrico attraverso una superficie chiusa e il suo legame con la carica contenuta nella superficie.`,
      theory: [
        `<p>Il <strong>flusso elettrico</strong> attraverso una superficie $S$ è $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$, cioè la somma delle componenti del campo perpendicolari alla superficie. Si misura in $\\text{N\\,m}^2/\\text{C}$.</p>`,
        `<p>La <strong>legge di Gauss</strong> afferma che il flusso attraverso una superficie chiusa è proporzionale alla carica contenuta nella superficie: $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{interna}}}{\\varepsilon_0}$, dove $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$.</p>`,
        `<p><strong>Perché vale:</strong> le linee di campo escono dalle cariche positive ed entrano in quelle negative. Il flusso attraverso una superficie chiusa intercetta quindi esattamente tante linee quanta è la carica interna, indipendentemente dalla forma della superficie.</p>`,
        `<p>La legge di Gauss è vantaggiosa nei problemi simmetrici, per esempio con una sfera o un piano infinito di carica. Scegliendo una superficie opportuna, il campo si può portare fuori dall'integrale e il calcolo risulta semplice.</p>`,
        { fig: 'v1v4-gauss', caption: `Il flusso totale attraverso una superficie chiusa dipende solo dalla carica interna alla superficie, Φ = Q/ε₀, indipendentemente dalla forma della superficie.` }
      ],
      examples: [
        { task: `Una superficie chiusa è attraversata da una carica $Q=1\\,\\mu\\text{C}$. Qual è il flusso totale attraverso la superficie, se $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$?`,
          steps: [`$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.`, `$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$`, `<strong>Risultato: circa $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>`] },
        { task: `La carica interna alla superficie raddoppia. Come cambia il flusso?`,
          steps: [`Il flusso è direttamente proporzionale alla carica.`, `<strong>Risultato: raddoppia</strong>`] }
      ]
    },
    'v3-elektricky-prud': {
      title: `Corrente elettrica e circuiti elettrici`,
      summary: `Legge di Ohm, resistori in serie e in parallelo e corrente totale erogata dal generatore.`,
      theory: [
        `<p>La <strong>corrente elettrica</strong> è la quantità di carica che attraversa una sezione nell'unità di tempo: $I=\\frac{\\Delta Q}{\\Delta t}$, in ampere. Il verso della corrente si stabilisce per convenzione come quello del moto delle cariche positive.</p>`,
        `<p><strong>La legge di Ohm</strong>: la tensione ai capi di un conduttore è proporzionale alla corrente, $U=R\\,I$, dove $R$ è la resistenza in ohm. Nel collegamento in serie le resistenze si sommano, $R=R_1+R_2$.</p>`,
        `<p>Nel <strong>collegamento in parallelo</strong> la tensione sui due rami è la stessa e le correnti si sommano. La resistenza equivalente è minore della più piccola delle resistenze: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
        `<p><strong>Perché la resistenza in parallelo è minore:</strong> il secondo ramo offre alla corrente un percorso in più, quindi a parità di tensione passa complessivamente una corrente maggiore. Il generatore eroga perciò una corrente più intensa di quella che erogherebbe con un solo ramo.</p>`,
        { fig: 'v1v4-paralelne', caption: `Nel collegamento in parallelo la tensione sui due rami è uguale e la corrente totale I è la somma delle correnti dei rami.` }
      ],
      examples: [
        { task: `Due resistori $R_1=6\\,\\Omega$ e $R_2=3\\,\\Omega$ sono collegati in parallelo a una tensione $U=6\\,\\text{V}$. Quale corrente totale eroga il generatore?`,
          steps: [`$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, quindi $R=2\\,\\Omega$.`, `$I=\\frac{U}{R}=\\frac{6}{2}$.`, `<strong>Risultato: $I=3\\,\\text{A}$</strong>`] },
        { task: `Due resistori da $4\\,\\Omega$ e $6\\,\\Omega$ sono collegati in serie a una tensione di $10\\,\\text{V}$. Quale corrente scorre?`,
          steps: [`$R=4+6=10\\,\\Omega$.`, `$I=\\frac{10}{10}$.`, `<strong>Risultato: $I=1\\,\\text{A}$</strong>`] }
      ]
    },
    'v3-magneticke-pole': {
      title: `Campo magnetico e forza magnetica`,
      summary: `Forza di Lorentz su una carica in moto e su un conduttore percorso da corrente immerso in un campo magnetico.`,
      theory: [
        `<p>L'<strong>induzione magnetica</strong> $\\vec B$ descrive il campo magnetico; la sua unità è il tesla, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. Il campo esercita una forza solo sulle cariche in moto: una carica ferma non risente della forza magnetica.</p>`,
        `<p>La <strong>forza di Lorentz</strong> su una carica $q$ che si muove con velocità $\\vec v$ è $\\vec F=q\\,\\vec v\\times\\vec B$. Il suo modulo è $F=q\\,v\\,B\\sin\\alpha$, dove $\\alpha$ è l'angolo fra $\\vec v$ e $\\vec B$.</p>`,
        `<p><strong>Il verso della forza</strong> si determina con la regola della mano destra: le dita indicano il verso della velocità, il palmo il verso del campo e il pollice il verso della forza per una carica positiva. Per una carica negativa la forza è opposta.</p>`,
        `<p><strong>Perché la forza è perpendicolare alla velocità:</strong> la forza magnetica non compie lavoro, modifica soltanto la direzione del moto. Una particella in un campo perpendicolare descrive quindi una circonferenza e non accelera. Per questo i campi magnetici si usano per curvare le traiettorie delle particelle.</p>`,
        { fig: 'v1v4-lorentz', caption: `La forza di Lorentz su una carica positiva che attraversa perpendicolarmente il campo è perpendicolare sia alla velocità sia al campo. Cambia la direzione del moto, non la sua velocità.` }
      ],
      examples: [
        { task: `Un elettrone viaggia perpendicolarmente a un campo di induzione $B=0{,}2\\,\\text{T}$ con velocità $v=10^{5}\\,\\text{m/s}$. Qual è l'intensità della forza, se $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$?`,
          steps: [`$\\alpha=90^\\circ$, quindi $\\sin\\alpha=1$.`, `$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.`, `<strong>Risultato: $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>`] },
        { task: `Una particella con carica $q=2\\,\\mu\\text{C}$ viaggia alla velocità $v=300\\,\\text{m/s}$ perpendicolarmente al campo $B=0{,}5\\,\\text{T}$. Qual è la forza in micronewton?`,
          steps: [`$F=qvB=2\\cdot 300\\cdot 0{,}5$ in unità di $\\mu\\text{N}$.`, `<strong>Risultato: $F=300\\,\\mu\\text{N}$</strong>`] }
      ]
    },
    'v3-indukcia': {
      title: `Induzione elettromagnetica`,
      summary: `Legge di Faraday: la tensione nasce dalla variazione del flusso magnetico attraverso la spira.`,
      theory: [
        `<p>Il <strong>flusso magnetico</strong> attraverso una superficie $S$ è $\\Phi=B\\,S\\cos\\alpha$, dove $\\alpha$ è l'angolo fra il campo e la normale alla superficie. Si misura in weber, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
        `<p><strong>La legge di Faraday dell'induzione</strong>: in una spira chiusa si genera una tensione proporzionale alla rapidità di variazione del flusso, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. Il segno meno esprime la legge di Lenz, secondo cui la corrente indotta si oppone alla variazione del flusso.</p>`,
        `<p><strong>Come nasce la tensione:</strong> variando l'induzione, variando la superficie oppure ruotando la spira nel campo. Se il flusso è costante, non si genera alcuna tensione, anche se il campo è intenso.</p>`,
        `<p><strong>Perché compare la divisione per il tempo:</strong> la tensione dipende da quanto rapidamente varia il flusso, non dal suo valore. Una variazione rapida dà una tensione maggiore di una lenta, anche a parità di variazione totale del flusso.</p>`,
        { fig: 'v1v4-tok-indukcia', caption: `Il flusso magnetico attraverso una superficie è Φ = B·S·cos α, dove α è l'angolo fra il campo B e la normale n alla superficie.` }
      ],
      examples: [
        { task: `La superficie di una spira è $S=0{,}5\\,\\text{m}^2$ ed è perpendicolare al campo, che in $2\\,\\text{s}$ varia di $\\Delta B=4\\,\\text{T}$. Quale tensione si induce?`,
          steps: [`$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.`, `<strong>Risultato: $U_i=1\\,\\text{V}$</strong>`] },
        { task: `Il flusso attraverso la superficie è costante. Quale tensione si induce?`,
          steps: [`La tensione è proporzionale alla variazione del flusso, $\\Delta\\Phi=0$.`, `<strong>Risultato: $U_i=0\\,\\text{V}$</strong>`] }
      ]
    },
    'v3-maxwell': {
      title: `Equazioni di Maxwell`,
      summary: `Le quattro equazioni che legano il campo elettrico e quello magnetico e il loro impiego nel calcolo del campo di un conduttore percorso da corrente.`,
      theory: [
        `<p>Le <strong>equazioni di Maxwell</strong> in forma integrale sono quattro: la legge di Gauss per il campo elettrico, la legge di Gauss per il campo magnetico (non esistono cariche magnetiche), la legge di Faraday dell'induzione e la legge di Ampère-Maxwell. Insieme descrivono tutti i fenomeni elettromagnetici classici.</p>`,
        `<p>La <strong>legge di Ampère-Maxwell</strong> afferma che la circuitazione del campo magnetico lungo una curva chiusa è proporzionale alla corrente che la attraversa e alla variazione del flusso elettrico: $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. Nei fenomeni stazionari resta solo il termine della corrente.</p>`,
        `<p>Dalla legge di Ampère per un lungo conduttore rettilineo percorso dalla corrente $I$ alla distanza $r$ segue $B=\\frac{\\mu_0 I}{2\\pi r}$, dove $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.</p>`,
        `<p><strong>Perché è importante la corrente di spostamento:</strong> senza il termine con la variazione del flusso elettrico la legge non sarebbe coerente con la conservazione della carica. Maxwell lo aggiunse e dalle equazioni risultò l'esistenza delle onde elettromagnetiche.</p>`,
        { fig: 'v1v4-ampere', caption: `Attorno a un conduttore rettilineo percorso da corrente le linee del campo magnetico sono circonferenze. L'induzione B diminuisce con la distanza r.` }
      ],
      examples: [
        { task: `Un conduttore rettilineo è percorso da una corrente $I=10\\,\\text{A}$. Qual è l'induzione magnetica alla distanza $r=0{,}2\\,\\text{m}$? Risultato in microtesla.`,
          steps: [`$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.`, `$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.`, `<strong>Risultato: $B=10\\,\\mu\\text{T}$</strong>`] },
        { task: `Come cambia l'induzione di un conduttore percorso da corrente se la distanza da esso raddoppia?`,
          steps: [`$B$ è proporzionale a $\\frac{1}{r}$.`, `<strong>Risultato: si dimezza</strong>`] }
      ]
    },
    'v3-em-vlny': {
      title: `Onde elettromagnetiche`,
      summary: `L'onda come campo elettrico e magnetico alternati, perpendicolari alla direzione di propagazione, con la velocità della luce c.`,
      theory: [
        `<p>La variazione del campo elettrico genera un campo magnetico, e la variazione del campo magnetico genera un campo elettrico. Questo reciproco sostegno si propaga nello spazio come <strong>onda elettromagnetica</strong>. Nel vuoto la sua velocità è $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        `<p>L'onda ha frequenza $f$ e lunghezza d'onda $\\lambda$. Vale la relazione $c=\\lambda\\,f$, da cui $\\lambda=\\frac{c}{f}$. A frequenza più alta corrisponde una lunghezza d'onda più corta.</p>`,
        `<p>Il campo elettrico e il campo magnetico nell'onda sono reciprocamente perpendicolari ed entrambi perpendicolari alla direzione di propagazione. Per questo l'onda elettromagnetica è <em>trasversale</em>.</p>`,
        `<p><strong>Perché è importante:</strong> le onde radio, la luce visibile e i raggi X hanno la stessa natura. Si differenziano soltanto per frequenza, e quindi per lunghezza d'onda, e da ciò dipendono i loro diversi impieghi.</p>`,
        { fig: 'v1v4-em-vlna', caption: `La componente elettrica e quella magnetica dell'onda oscillano in fase, sono reciprocamente perpendicolari ed entrambe perpendicolari alla direzione di propagazione c.` }
      ],
      examples: [
        { task: `Un trasmettitore lavora alla frequenza $f=100\\,\\text{MHz}$. Qual è la lunghezza d'onda dell'onda in aria?`,
          steps: [`$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.`, `<strong>Risultato: $\\lambda=3\\,\\text{m}$</strong>`] },
        { task: `La lunghezza d'onda è $\\lambda=0{,}5\\,\\text{m}$. Qual è la frequenza dell'onda?`,
          steps: [`$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.`, `<strong>Risultato: $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>`] }
      ]
    },
    'v3-sirenie': {
      title: `Propagazione della radiazione elettromagnetica`,
      summary: `Velocità della luce in una sostanza, indice di rifrazione e l'influenza della permittività e della permeabilità del mezzo.`,
      theory: [
        `<p>Nel vuoto la radiazione elettromagnetica si propaga con velocità $c$; in una sostanza la sua velocità è minore. L'<strong>indice di rifrazione</strong> $n=\\frac{c}{v}$ indica quante volte la velocità nella sostanza è minore di quella nel vuoto.</p>`,
        `<p>Per un mezzo non magnetico con permittività relativa $\\varepsilon_r$ e permeabilità $\\mu_r=1$ si ha $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$. Un dielettrico con permittività maggiore rallenta quindi l'onda.</p>`,
        `<p><strong>Perché l'onda rallenta:</strong> il campo elettrico dell'onda polarizza gli atomi della sostanza, le loro oscillazioni si ritardano e l'onda risultante si propaga più lentamente. La frequenza non cambia all'ingresso nella sostanza; cambiano la velocità e la lunghezza d'onda.</p>`,
        `<p>Questo fenomeno spiega la rifrazione della luce sull'interfaccia fra due mezzi e il funzionamento delle lenti e delle fibre ottiche.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: `Entrando in una sostanza la velocità dell'onda diminuisce, quindi si accorcia la sua lunghezza d'onda. La frequenza rimane invariata.` }
      ],
      examples: [
        { task: `Un mezzo ha permittività relativa $\\varepsilon_r=4$. Qual è l'indice di rifrazione?`,
          steps: [`$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.`, `<strong>Risultato: $n=2$</strong>`] },
        { task: `Qual è la velocità della luce in un mezzo con indice di rifrazione $n=2$, se $c=3\\cdot 10^{8}\\,\\text{m/s}$?`,
          steps: [`$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.`, `<strong>Risultato: $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v4-vlnenie': {
      title: `Onde meccaniche ed elettromagnetiche`,
      summary: `Che cosa si trasmette con un'onda e perché le onde meccaniche richiedono un mezzo materiale, mentre quelle elettromagnetiche no.`,
      theory: [
        `<p>Il <strong>moto ondulatorio</strong> è la propagazione di oscillazioni nello spazio. La materia non si sposta con esso: si trasmettono <strong>energia</strong> e <strong>informazione</strong>. A seconda di ciò che oscilla, le onde si dividono in <strong>meccaniche</strong> (oscilla la materia, per es. il suono, le onde sull'acqua, le onde sismiche) ed <strong>elettromagnetiche</strong> (oscillano il campo elettrico e quello magnetico, per es. la luce, le onde radio, i raggi X).</p>`,
        `<p>Le onde meccaniche richiedono un <strong>mezzo materiale</strong>, perché ogni particella mette in oscillazione la sua vicina. Per questo il suono non si propaga nel vuoto. Le onde elettromagnetiche si propagano anche nel vuoto, perché le oscillazioni del campo non richiedono alcuna particella che le trasmetta oltre.</p>`,
        `<p>In base alla direzione delle oscillazioni distinguiamo onde <strong>trasversali</strong> (le oscillazioni sono perpendicolari alla direzione di propagazione, per es. l'onda su una corda e la luce) e <strong>longitudinali</strong> (le oscillazioni sono nella direzione di propagazione, per es. il suono nei gas). La velocità del suono nell'aria è di circa $340\\,\\text{m/s}$, quella della luce nel vuoto è $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        { fig: 'obr-vlna', caption: `Onda trasversale: la lunghezza d'onda λ è la distanza fra due punti vicini nella stessa fase.` }
      ],
      examples: [
        { task: `La luce del Sole arriva sulla Terra attraverso lo spazio cosmico vuoto. È un'onda meccanica o elettromagnetica?`,
          steps: [`Fra il Sole e la Terra non c'è materia, quindi l'onda si propaga nel vuoto.`, `<strong>Risultato: si tratta di un'onda elettromagnetica.</strong>`] },
        { task: `Perché il suono non si sente nello spazio vuoto fra due navicelle?`,
          steps: [`Il suono è un'onda meccanica e richiede un mezzo materiale.`, `Nel vuoto non ci sono particelle, quindi le oscillazioni non hanno nessuno a cui trasmettersi.`, `<strong>Risultato: il suono non si propaga nel vuoto.</strong>`] }
      ]
    },
    'v4-frekvencia': {
      title: `Frequenza, lunghezza d'onda e ampiezza`,
      summary: `Le grandezze che descrivono un'onda e la relazione v = λ·f fra di esse.`,
      theory: [
        `<p>Un'onda si descrive con tre grandezze fondamentali: l'<strong>ampiezza</strong> $A$ (lo spostamento massimo dalla posizione di equilibrio), la <strong>frequenza</strong> $f$ (numero di oscillazioni al secondo, unità $\\text{Hz}$) e la <strong>lunghezza d'onda</strong> $\\lambda$ (distanza fra due punti più vicini che oscillano in fase).</p>`,
        `<p>Il periodo $T=\\frac{1}{f}$ è il tempo di una oscillazione. L'ampiezza è legata all'<em>intensità</em> dell'onda (per es. al volume del suono o alla luminosità della luce), la frequenza determina l'altezza del tono o il colore della luce.</p>`,
        `<p>La velocità di propagazione dell'onda è $v=\\lambda\\cdot f$. Passando in un altro mezzo cambiano la velocità e la lunghezza d'onda, ma <strong>la frequenza non cambia</strong>: la determina la sorgente delle oscillazioni, non il mezzo.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: `Entrando in una sostanza la velocità dell'onda diminuisce, quindi si accorcia la sua lunghezza d'onda. La frequenza rimane invariata.` }
      ],
      examples: [
        { task: `Un'onda ha frequenza $f=50\\,\\text{Hz}$ e lunghezza d'onda $\\lambda=6\\,\\text{m}$. Qual è la sua velocità?`,
          steps: [`$v=\\lambda\\cdot f=6\\cdot 50$.`, `<strong>Risultato: $v=300\\,\\text{m/s}$</strong>`] },
        { task: `Qual è il periodo di un'onda con frequenza $f=4\\,\\text{Hz}$?`,
          steps: [`$T=\\frac{1}{f}=\\frac{1}{4}$.`, `<strong>Risultato: $T=0{,}25\\,\\text{s}$</strong>`] }
      ]
    },
    'v4-interferencia': {
      title: `Interferenza e diffrazione`,
      summary: `Composizione delle onde: quando si rafforzano, quando si indeboliscono e perché le onde si piegano dietro gli ostacoli.`,
      theory: [
        `<p><strong>Principio di sovrapposizione:</strong> l'oscillazione risultante in un punto è la somma delle oscillazioni di tutte le onde che vi giungono. Se le onde oscillano in fase (coerentemente), il risultato dipende dalla <strong>differenza di cammino</strong> $\\Delta d$.</p>`,
        `<p><strong>Il rafforzamento</strong> avviene se la differenza di cammino è un multiplo intero della lunghezza d'onda: $\\Delta d=m\\,\\lambda$. <strong>L'indebolimento</strong> avviene se la differenza di cammino è un multiplo dispari della metà della lunghezza d'onda: $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
        `<p><strong>La diffrazione</strong> è la deviazione dell'onda intorno a un ostacolo o attraverso una fenditura stretta. È più marcata se le dimensioni dell'ostacolo sono confrontabili con la lunghezza d'onda. Per questo il suono si piega facilmente dietro l'angolo, mentre la luce produce un'ombra netta.</p>`,
        { fig: 'v1v4-interferencia', caption: `Onde in fase si rafforzano quando la differenza di cammino è m·λ, in opposizione di fase si indeboliscono quando è (m + ½)·λ.` }
      ],
      examples: [
        { task: `Due onde coerenti con lunghezza d'onda $\\lambda=0{,}5\\,\\text{m}$ hanno una differenza di cammino $\\Delta d=1{,}25\\,\\text{m}$. Si ha rafforzamento o indebolimento?`,
          steps: [`$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.`, `Il numero $2{,}5$ è un multiplo dispari della metà: $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.`, `<strong>Risultato: indebolimento.</strong>`] }
      ]
    },
    'v4-polarizacia': {
      title: `Polarizzazione della luce`,
      summary: `Trasversalità della luce, polarizzatore e legge di Malus per l'intensità dopo l'analizzatore.`,
      theory: [
        `<p>La luce è un'onda trasversale: il campo elettrico oscilla perpendicolarmente alla direzione di propagazione. La luce <strong>polarizzata</strong> ha le oscillazioni in un solo piano. Una sorgente ordinaria (una lampadina, il Sole) emette luce <strong>non polarizzata</strong>, in cui il piano delle oscillazioni cambia in modo casuale.</p>`,
        `<p>Il polarizzatore lascia passare solo la componente delle oscillazioni nella sua direzione. Attraversando il primo polarizzatore, la <strong>luce non polarizzata</strong> vede la propria intensità ridursi alla metà.</p>`,
        `<p><strong>Legge di Malus:</strong> se la luce linearmente polarizzata con intensità $I_0$ incide su un analizzatore ruotato di un angolo $\\varphi$, dopo di esso l'intensità è $I=I_0\\cos^2\\varphi$. Il coseno è elevato al quadrato perché l'analizzatore lascia passare solo la componente del campo nella direzione del suo asse, e l'intensità è proporzionale al quadrato dell'ampiezza.</p>`,
        { fig: 'v1v4-polarizacia', caption: `L'analizzatore lascia passare solo la componente delle oscillazioni nella sua direzione, E·cos φ. L'intensità è proporzionale a cos²φ.` }
      ],
      examples: [
        { task: `La luce linearmente polarizzata con intensità $I_0=80$ attraversa un analizzatore ruotato di $60^\\circ$. Quale intensità ha dopo di esso?`,
          steps: [`$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.`, `$I=80\\cdot 0{,}25=20$.`, `<strong>Risultato: $I=20$</strong>`] }
      ]
    },
    'v4-geometricka-optika': {
      title: `Ottica geometrica e ottica ondulatoria`,
      summary: `Indice di rifrazione, velocità della luce nelle sostanze e legge di Snell della rifrazione.`,
      theory: [
        `<p><strong>L'ottica geometrica</strong> descrive la luce come raggi che si propagano in linea retta, si riflettono secondo la legge della riflessione ($\\alpha=\\alpha'$) e si rifrangono all'interfaccia fra due mezzi. L'ottica ondulatoria spiega i fenomeni che i raggi non colgono, per esempio l'interferenza e la diffrazione.</p>`,
        `<p><strong>L'indice di rifrazione</strong> $n=\\frac{c}{v}$ indica quante volte la luce è più lenta in una sostanza rispetto al vuoto. In acqua è $n\\approx 1{,}33$, nel vetro circa $1{,}5$. La velocità della luce in una sostanza è $v=\\frac{c}{n}$.</p>`,
        `<p><strong>La legge di Snell</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ descrive come si rifrange il raggio. Il passaggio in un mezzo otticamente più denso ($n_2>n_1$) porta il raggio verso la normale, mentre il passaggio in un mezzo più raro lo allontana dalla normale.</p>`,
        { fig: 'v1v4-lom', caption: `Passando in un mezzo otticamente più denso il raggio si rifrange verso la normale, quindi β è minore di α (n₂ > n₁).` }
      ],
      examples: [
        { task: `Qual è la velocità della luce nel vetro con indice di rifrazione $n=1{,}5$? Usa $c=3\\cdot 10^{8}\\,\\text{m/s}$.`,
          steps: [`$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.`, `<strong>Risultato: $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>`] }
      ]
    },
    'v4-zobrazovanie': {
      title: `Formazione delle immagini con lenti e specchi`,
      summary: `Equazione dei punti coniugati per una lente convergente e determinazione della posizione dell'immagine.`,
      theory: [
        `<p>Una lente convergente concentra i raggi paralleli nel <strong>fuoco</strong>, a distanza $f$. Un oggetto a distanza $a$ davanti alla lente forma un'immagine a distanza $b$ dietro di essa.</p>`,
        `<p><strong>L'equazione dei punti coniugati</strong> vale per lenti sottili e specchi: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. È una relazione fra tre grandezze, quindi se ne conosciamo due calcoliamo la terza.</p>`,
        `<p>Se $a>f$, l'immagine è reale e capovolta. Attenzione all'errore: si sommano i reciproci, non le distanze stesse. La relazione $b=a+f$ non è valida.</p>`,
        { fig: 'v1v4-zobrazenie', caption: `Un oggetto a distanza doppia della focale dà un'immagine reale, capovolta e di uguali dimensioni, posta a distanza 2f.` }
      ],
      examples: [
        { task: `L'oggetto si trova a distanza $a=30\\,\\text{cm}$ davanti a una lente convergente con fuoco $f=15\\,\\text{cm}$. Dove si forma l'immagine?`,
          steps: [`$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.`, `<strong>Risultato: $b=30\\,\\text{cm}$</strong>`] }
      ]
    },
    'v4-lasery': {
      title: `Laser e strumenti ottici`,
      summary: `Proprietà della luce laser, calcolo della frequenza e ingrandimento della lente d'ingrandimento.`,
      theory: [
        `<p>Il <strong>laser</strong> (amplificazione della luce per emissione stimolata di radiazione) produce una luce con proprietà che una sorgente comune non ha: è <strong>monocromatica</strong> (una sola lunghezza d'onda), <strong>coerente</strong> (oscillazioni in fase) e forma un <strong>fascio stretto</strong>. Per questo può essere focalizzata su una piccola macchia.</p>`,
        `<p>Per ogni luce vale $c=\\lambda\\cdot f$, quindi la frequenza è $f=\\frac{c}{\\lambda}$. In ottica la lunghezza d'onda si esprime spesso in nanometri: $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
        `<p><strong>Gli strumenti ottici</strong> usano lenti per l'ingrandimento. Una lente d'ingrandimento di focale $f$ dà, nell'osservazione comoda, un ingrandimento $Z=\\frac{d}{f}$, dove $d\\approx 250\\,\\text{mm}$ è la distanza di visione distinta. Una focale più corta significa un ingrandimento maggiore.</p>`
      ],
      examples: [
        { task: `La luce laser rossa ha lunghezza d'onda $\\lambda=650\\,\\text{nm}$. Qual è la sua frequenza in unità di $10^{14}\\,\\text{Hz}$?`,
          steps: [`$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.`, `<strong>Risultato: circa $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>`] }
      ]
    },
    'v4-vlakna': {
      title: `Fondamenti delle fibre ottiche`,
      summary: `Riflessione totale all'interfaccia fra nucleo e mantello e angolo critico.`,
      theory: [
        `<p>La fibra ottica conduce la luce all'interno di un sottile <strong>nucleo</strong> con indice di rifrazione $n_1$, circondato da un <strong>mantello</strong> con indice minore $n_2&lt;n_1$. La luce è mantenuta nel nucleo per <strong>riflessione totale</strong>, non per rifrazione, quindi praticamente non si disperde.</p>`,
        `<p>La riflessione totale avviene se l'angolo di incidenza supera l'<strong>angolo critico</strong> $\\alpha_c$, per il quale vale $\\sin\\alpha_c=\\frac{n_2}{n_1}$. Con una differenza maggiore fra gli indici l'angolo critico è minore e la fibra cattura più luce.</p>`,
        `<p>Il segnale viene trasmesso mediante impulsi luminosi. Le fibre si usano in internet e nelle telecomunicazioni, perché la luce trasporta molte informazioni su grandi distanze e non è disturbata dal campo elettromagnetico.</p>`,
        { fig: 'v1v4-vlakno', caption: `La luce è mantenuta nel nucleo per riflessione totale, perché incide con un angolo maggiore dell'angolo critico, dove sin α_c = n₂/n₁.` }
      ],
      examples: [
        { task: `Il nucleo della fibra ha $n_1=1{,}5$ e il mantello $n_2=1{,}0$. Qual è il seno dell'angolo critico?`,
          steps: [`$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.`, `<strong>Risultato: $\\sin\\alpha_c\\approx 0{,}67$</strong>`] }
      ]
    }
  }
});
