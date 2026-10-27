/* Italiano: lezioni del 7.–9. anno (js/rocniky/r7.js, r8.js, r9.js). Struttura e chiavi: js/content-i18n.js. */
CONTENT_I18N.add('it', {
  lessons: {
    'r7-pohyb': {
      title: `Moto dei corpi e come lo descriviamo`,
      summary: `Moto e quiete sono relativi e dipendono dal sistema di riferimento.`,
      theory: [
        `<p>Moto e quiete sono <strong>relativi</strong>: dipendono da ciò con cui li confrontiamo. Il corpo rispetto al quale descriviamo il moto si chiama
       <strong>corpo di riferimento</strong>. Insieme con gli orologi forma un <strong>sistema di riferimento</strong>.</p>`,
        `<p>Un passeggero seduto in un treno in movimento è in quiete rispetto al treno, ma in moto rispetto agli alberi lungo la ferrovia. Entrambe le affermazioni sono vere,
       ciascuna in un sistema di riferimento diverso. Perciò, quando descriviamo il moto, diciamo sempre rispetto a che cosa lo descriviamo.</p>`,
        `<ul>
         <li><strong>Traiettoria</strong>: la linea che un corpo descrive durante il moto.</li>
         <li><strong>Percorso</strong> $s$: la lunghezza della traiettoria tra due luoghi. Si misura in metri.</li>
         <li><strong>Punto materiale</strong>: un corpo le cui dimensioni trascuriamo nella descrizione del suo moto.</li>
       </ul>`,
        `<p>Il percorso è la lunghezza di tutto il tragitto, non la distanza tra partenza e arrivo. Se camminiamo 3 m verso est e poi 4 m verso nord,
       il percorso è $7\\,\\text{m}$, sebbene la distanza dal punto di partenza sia soltanto $5\\,\\text{m}$.</p>`,
        { fig: 'obr-draha', caption: `Il percorso è l'intero tragitto, la distanza è la linea retta tra partenza e arrivo.` }
      ],
      examples: [
        { task: `Un passeggero siede in un treno veloce. È in quiete o in moto?`,
          steps: [`Rispetto al treno in cui siede, non si muove.`, `Rispetto agli alberi lungo la ferrovia, si muove.`, `<strong>Risultato: in quiete rispetto al treno, in moto rispetto all'ambiente circostante.</strong>`] },
        { task: `Un pedone ha camminato 3 m verso est e poi 4 m verso nord. Quale è il suo percorso?`,
          steps: [`Il percorso è la lunghezza di tutto il tragitto, quindi sommiamo entrambi i tratti.`, `$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$`, `<strong>Risultato: 7 m</strong>`] }
      ]
    },
    'r7-draha': {
      title: `Percorso, tempo e velocità media`,
      summary: `Calcolo della velocità, del percorso e del tempo, e conversione tra m/s e km/h.`,
      theory: [
        `<p><strong>La velocità</strong> ci dice quale percorso compie un corpo in una unità di tempo. Formula: $v=\\frac{s}{t}$, dove $s$ è il percorso e $t$ il tempo.
       L'unità SI è $\\text{m/s}$; nel traffico stradale si usa $\\text{km/h}$.</p>`,
        `<p>Da questa formula ne ricaviamo altre due: $s=v\\cdot t$ e $t=\\frac{s}{v}$. Controlliamo sempre le unità prima di calcolare.
       Se il percorso è in chilometri e il tempo in minuti, dobbiamo convertire una delle grandezze.</p>`,
        `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$: per convertire da metri al secondo a chilometri all'ora moltiplichiamo per $3{,}6$.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$: per convertire da chilometri all'ora a metri al secondo dividiamo per $3{,}6$.</li>
       </ul>`,
        `<p><strong>La velocità media</strong> non è uguale alla media delle velocità. Si calcola come percorso totale diviso tempo totale:
       $v_p=\\frac{s_{\\text{tot}}}{t_{\\text{tot}}}$. Se un'auto si è fermata per un po' su una parte del tragitto, la sua velocità media è minore della sua velocità massima.</p>`,
        { fig: 'obr-draha', caption: `Il percorso è l'intero tragitto, la distanza è la linea retta tra partenza e arrivo.` }
      ],
      examples: [
        { task: `Un'auto ha percorso $120\\,\\text{km}$ in $2\\,\\text{h}$. Quale era la sua velocità media?`,
          steps: [`$v=\\frac{s}{t}=\\frac{120}{2}$`, `$v=60\\,\\text{km/h}$`, `<strong>Risultato: 60 km/h</strong>`] },
        { task: `Un ciclista si muove a $5\\,\\text{m/s}$. Quanto vale questa velocità in $\\text{km/h}$?`,
          steps: [`Per convertire da m/s a km/h moltiplichiamo per 3,6.`, `$5\\cdot 3{,}6=18\\,\\text{km/h}$`, `<strong>Risultato: 18 km/h</strong>`] }
      ]
    },
    'r7-rovnomerny': {
      title: `Moto uniforme e moto non uniforme`,
      summary: `Quando la velocità non cambia e come calcolare un moto la cui velocità cambia.`,
      theory: [
        `<p><strong>Moto uniforme</strong>: un corpo percorre lo stesso spazio in ogni intervallo di tempo uguale, quindi la sua velocità non cambia.
       Nel grafico percorso-tempo è una linea retta e la sua pendenza corrisponde alla velocità.</p>`,
        `<p><strong>Moto non uniforme</strong>: la velocità cambia, il corpo accelera o rallenta. Esempi sono un treno che parte o un sasso che cade a terra.</p>`,
        `<p>Per il moto uniforme vale la formula $s=v\\cdot t$, dove $v$ è la velocità costante. Per il moto non uniforme possiamo usare la
       <strong>velocità media</strong>: percorso totale diviso tempo totale. Mostra soltanto il risultato complessivo, non come è cambiata la velocità.</p>`,
        `<ol>
         <li>Se un corpo percorre spazi uguali in tempi uguali, il moto è uniforme.</li>
         <li>Se gli spazi percorsi in tempi uguali cambiano, il moto è non uniforme.</li>
         <li>La velocità media non si calcola mai come media di due velocità.</li>
       </ol>`,
        { fig: 'r6r9-rovnomerny', caption: `Nel moto uniforme il grafico percorso-tempo è una retta e la sua pendenza è la velocità. Quando il corpo accelera diventa una curva.` }
      ],
      examples: [
        { task: `Un pedone cammina a velocità costante di $4\\,\\text{km/h}$. Quale percorso compie in $3\\,\\text{h}$?`,
          steps: [`Il moto è uniforme, quindi $s=v\\cdot t$.`, `$s=4\\cdot 3=12\\,\\text{km}$`, `<strong>Risultato: 12 km</strong>`] },
        { task: `Un corpo percorre 5 m ogni secondo. Che tipo di moto è e quale percorso compie in 6 s?`,
          steps: [`In tempi uguali percorre spazi uguali, quindi il moto è uniforme.`, `$s = 5\\cdot 6 = 30\\,\\text{m}$`, `<strong>Risultato: moto uniforme, 30 m</strong>`] }
      ]
    },
    'r7-sila': {
      title: `La forza e i suoi effetti`,
      summary: `Che cos'è una forza, quali effetti ha e come si sommano forze con la stessa o con direzione opposta.`,
      theory: [
        `<p><strong>La forza</strong> è l'interazione reciproca dei corpi. La forza non la vediamo, vediamo i suoi effetti. Si indica con $F$ e la sua unità è il newton: $1\\,\\text{N}$.</p>`,
        `<ul>
         <li>Può <strong>cambiare la velocità</strong> di un corpo: metterlo in moto, rallentarlo o fermarlo.</li>
         <li>Può <strong>cambiare la direzione</strong> del moto, per esempio quando una bicicletta gira all'angolo.</li>
         <li>Può <strong>cambiare la forma</strong> di un corpo: schiacciare una spugna o tendere un elastico.</li>
       </ul>`,
        `<p>La forza è un <strong>vettore</strong>: ha intensità, direzione e punto di applicazione. La disegniamo come freccia. Se le forze agiscono su un corpo nella stessa direzione,
       le sommiamo. Se agiscono in direzioni opposte, sottraiamo la minore dalla maggiore, e la forza risultante ha la direzione della maggiore.</p>`,
        `<p>Le forze si presentano sempre a coppie: se una mano spinge su un muro, il muro spinge la mano con una forza uguale e in verso opposto.
       Queste due forze però agiscono su corpi diversi, quindi non si annullano a vicenda.</p>`,
        { fig: 'obr-sily', caption: `Forze che agiscono su un corpo su una superficie orizzontale: forza trainante F, attrito Ftr e reazione normale della superficie N.` }
      ],
      examples: [
        { task: `Due studenti trascinano un carrello nella stessa direzione con forze di $30\\,\\text{N}$ e $20\\,\\text{N}$. Quale è la forza risultante?`,
          steps: [`Le forze hanno la stessa direzione, quindi le sommiamo.`, `$30 + 20 = 50$`, `<strong>Risultato: 50 N</strong>`] },
        { task: `Lo stesso carrello è tirato dal primo studente con una forza di $30\\,\\text{N}$ verso destra e dal secondo con una forza di $20\\,\\text{N}$ verso sinistra. Quale è la forza risultante?`,
          steps: [`Le forze hanno direzioni opposte, quindi le sottraiamo.`, `$30 - 20 = 10$, la forza risultante è diretta verso destra.`, `<strong>Risultato: 10 N verso destra</strong>`] }
      ]
    },
    'r7-tiaz': {
      title: `Forza di gravità e peso`,
      summary: `Perché i corpi cadono sulla Terra e in che cosa la massa si distingue dal peso.`,
      theory: [
        `<p>Tutti i corpi si attraggono con una <strong>forza di gravità</strong>. Quanto maggiori sono le masse e quanto più vicini sono i corpi, tanto più forte è la forza di attrazione.
       La gravità terrestre ci tiene sulla superficie della Terra, e la Luna orbita attorno alla Terra.</p>`,
        `<p><strong>Il peso</strong> $F_G$ è la forza con cui la Terra attrae un corpo verso sé. Lo calcoliamo con la formula $F_G=m\\cdot g$, dove $m$ è la massa in chilogrammi
       e $g$ è l'accelerazione di gravità. Sulla Terra $g\\approx 10\\,\\text{N/kg}$ (più precisamente $9{,}81\\,\\text{N/kg}$).</p>`,
        `<p><strong>Massa e peso non sono la stessa cosa.</strong> La massa in chilogrammi ci dice quanta materia contiene un corpo, ed è la stessa ovunque.
       Il peso in newton dipende dal luogo. Sulla Luna $g\\approx 1{,}6\\,\\text{N/kg}$, quindi un corpo di massa $5\\,\\text{kg}$ pesa lì circa $8\\,\\text{N}$.</p>`,
        `<ul>
         <li>Il peso è una forza, misurata con il dinamometro in newton.</li>
         <li>La massa si misura con la bilancia in chilogrammi.</li>
       </ul>`,
        { fig: 'r6r9-tiaz', caption: `La stessa massa ha sulla Luna un peso minore, perché l'accelerazione di gravità lì è più piccola.` }
      ],
      examples: [
        { task: `Quale è il peso di un corpo di massa $4\\,\\text{kg}$ sulla Terra? Usa $g=10\\,\\text{N/kg}$.`,
          steps: [`$F_G=m\\cdot g$`, `$F_G=4\\cdot 10=40\\,\\text{N}$`, `<strong>Risultato: 40 N</strong>`] },
        { task: `Un corpo ha sulla Terra un peso di $60\\,\\text{N}$. Quale è la sua massa?`,
          steps: [`$m=\\frac{F_G}{g}$`, `$m=\\frac{60}{10}=6\\,\\text{kg}$`, `<strong>Risultato: 6 kg</strong>`] }
      ]
    },
    'r7-trenie': {
      title: `Attrito e resistenza del mezzo`,
      summary: `Quando l'attrito è maggiore, come aumentarlo o diminuirlo, e che cosa rallenta i corpi nei fluidi.`,
      theory: [
        `<p><strong>L'attrito</strong> nasce sulla superficie di contatto di due corpi e agisce contro il moto, o contro il tentativo di muoversi. Per questo una scatola che spingiamo sul pavimento
       si ferma quando smettiamo di spingere.</p>`,
        `<ul>
         <li>L'attrito è maggiore quanto più ruvide sono le superfici.</li>
         <li>L'attrito è maggiore quanto più forte un corpo preme sull'altro.</li>
         <li>L'attrito non dipende dalla grandezza della superficie di contatto.</li>
       </ul>`,
        `<p><strong>La resistenza del mezzo</strong> (aria, acqua) rallenta il moto di un corpo. Dipende dalla forma del corpo, dalla sua velocità e dalla densità del mezzo.
       Il paracadute ha una grande resistenza dell'aria, quindi scende lentamente. Un nuotatore con corpo aerodinamico incontra meno resistenza dell'acqua.</p>`,
        `<p>A volte vogliamo aumentare l'attrito, per esempio con i pneumatici dell'auto sulla strada o quando camminiamo. Altre volte vogliamo ridurlo, per esempio nei cuscinetti.
       L'olio lubrificante crea uno strato sottile tra le superfici e così riduce l'attrito.</p>`,
        { fig: 'obr-sily', caption: `Forze che agiscono su un corpo su una superficie orizzontale: forza trainante F, attrito Ftr e reazione normale della superficie N.` }
      ],
      examples: [
        { task: `Un armadio è trascinato con una forza di $300\\,\\text{N}$ nella direzione del moto, e contro il moto agisce un attrito di $120\\,\\text{N}$. Quale è la forza risultante nella direzione del moto?`,
          steps: [`L'attrito agisce contro il moto, quindi lo sottraiamo.`, `$300-120=180$`, `<strong>Risultato: 180 N</strong>`] },
        { task: `Quale intervento aumenta l'attrito: pneumatici invernali oppure olio lubrificante nel cuscinetto?`,
          steps: [`Gli pneumatici invernali hanno una superficie più ruvida, quindi l'attrito aumenta.`, `L'olio lubrificante tra le superfici riduce l'attrito.`, `<strong>Risultato: pneumatici invernali</strong>`] }
      ]
    },
    'r7-svetlo': {
      title: `La luce e come si propaga`,
      summary: `Propagazione rettilinea della luce, velocità della luce, ombre ed eclissi.`,
      theory: [
        `<p>La luce è radiazione elettromagnetica che percepiamo con gli occhi. Una sorgente luminosa emette luce in tutte le direzioni.
       Vediamo un corpo che non emette luce da sé, perché riflette la luce nei nostri occhi.</p>`,
        `<p>In un mezzo omogeneo la luce si propaga in <strong>linea retta</strong>. Per questo dietro un oggetto opaco si forma un'ombra: l'oggetto blocca la luce che sta dietro di lui.
       Una sorgente luminosa grande produce anche una penombra, dove è visibile soltanto una parte della sorgente.</p>`,
        `<p>La velocità della luce nel vuoto è $c=300\\,000\\,\\text{km/s}$, cioè $3\\cdot 10^8\\,\\text{m/s}$. Nell'aria è quasi la stessa,
       nell'acqua e nel vetro è minore. La luce della Luna ci raggiunge in circa $1{,}3\\,\\text{s}$, quella del Sole in circa 8 minuti.</p>`,
        `<p>Un'eclissi di Sole avviene quando la Luna si frappone tra il Sole e la Terra e proietta la sua ombra sulla Terra. Un'eclissi di Luna avviene quando la Terra si frappone tra il Sole e la Luna.</p>`,
        { fig: 'r6r9-zatmenie', caption: `Durante un'eclissi di Sole la Luna si trova tra il Sole e la Terra e proietta un'ombra sulla Terra.` }
      ],
      examples: [
        { task: `La luce viaggia a $300\\,000\\,\\text{km/s}$. Quale distanza percorre in $10\\,\\text{s}$?`,
          steps: [`$s=c\\cdot t$`, `$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$`, `<strong>Risultato: 3 000 000 km</strong>`] },
        { task: `Perché c'è un'ombra dietro un albero al sole?`,
          steps: [`L'albero è opaco e la luce si propaga in linea retta.`, `La luce non può attraversare l'albero, quindi dietro di esso rimane buio.`, `<strong>Risultato: l'albero blocca la luce, perché la luce si propaga in linea retta</strong>`] }
      ]
    },
    'r7-odraz': {
      title: `Riflessione e rifrazione della luce`,
      summary: `Legge della riflessione, angoli misurati dalla normale e piegamento del raggio quando entra in un altro mezzo.`,
      theory: [
        `<p>Un raggio luminoso cade sul confine tra due mezzi. Una parte di esso viene riflessa indietro, e una parte passa nel secondo mezzo.
       Gli angoli si misurano sempre dalla <strong>normale</strong>, cioè dalla retta perpendicolare alla superficie, non dalla superficie stessa.</p>`,
        `<p><strong>Legge della riflessione:</strong> l'angolo di incidenza $\\alpha$ è uguale all'angolo di riflessione $\\beta$, cioè $\\alpha=\\beta$.
       Il raggio riflesso giace nel piano formato dal raggio incidente e dalla normale.</p>`,
        `<ul>
         <li>Quando passa in un mezzo dove la luce è più lenta (per esempio dall'aria all'acqua), il raggio si piega <strong>verso la normale</strong>.</li>
         <li>Quando passa in un mezzo dove la luce è più veloce (per esempio dall'acqua all'aria), il raggio si piega <strong>lontano dalla normale</strong>.</li>
       </ul>`,
        `<p>Per questo una matita immersa in un bicchiere d'acqua sembra spezzata, e il fondo di una piscina sembra più basso di quanto è in realtà.</p>`,
        { fig: 'obr-odraz', caption: `Quando la luce si riflette da uno specchio piano, vale la legge della riflessione.` }
      ],
      examples: [
        { task: `Un raggio cade su uno specchio piano formando un angolo di $35^\\circ$ con la normale. Quale angolo forma il raggio riflesso con la normale?`,
          steps: [`Secondo la legge della riflessione, l'angolo di riflessione è uguale all'angolo di incidenza.`, `$\\beta=\\alpha=35^\\circ$`, `<strong>Risultato: 35°</strong>`] },
        { task: `Un raggio cade su uno specchio formando un angolo di $60^\\circ$ con la superficie dello specchio. Quale è l'angolo di incidenza misurato dalla normale?`,
          steps: [`Gli angoli si misurano dalla normale, non dalla superficie.`, `$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$`, `<strong>Risultato: 30°</strong>`] }
      ]
    },
    'r7-zrkadla': {
      title: `Specchi, lenti e fenomeni ottici`,
      summary: `L'immagine in uno specchio piano, lenti convergenti e divergenti, e fenomeni come arcobaleno o miraggio.`,
      theory: [
        `<p>Uno <strong>specchio piano</strong> forma un'immagine virtuale: la vediamo dietro lo specchio e non si può raccogliere su uno schermo.
       L'immagine ha la stessa grandezza, è dritta e si trova dietro lo specchio alla stessa distanza alla quale l'oggetto si trova davanti ad esso.</p>`,
        `<p>Se ti trovi a 2 m da uno specchio, la tua immagine è distante da te 4 m. La distanza tra un oggetto e la sua immagine
       è il doppio della distanza dell'oggetto dallo specchio.</p>`,
        `<p><strong>Le lenti</strong> rifrangono la luce. Una <strong>lente convergente</strong> è più spessa al centro e raccoglie i raggi paralleli in un punto (il fuoco).
       Una <strong>lente divergente</strong> è più sottile al centro e allarga i raggi. Le lenti convergenti si usano nelle lenti d'ingrandimento, nelle macchine fotografiche e negli occhiali per l'ipermetropia.</p>`,
        `<p><strong>Fenomeni ottici:</strong> l'arcobaleno si forma quando la luce bianca si scompone nei colori in gocce d'acqua. Il miraggio si forma per rifrazione della luce nell'aria calda
       sopra una strada riscaldata dal sole, così vediamo il riflesso del cielo come se sul terreno ci fosse dell'acqua.</p>`,
        { fig: 'r6r9-zrkadlo', caption: `L'immagine in uno specchio piano è virtuale e si trova dietro lo specchio alla stessa distanza alla quale l'oggetto è davanti ad esso.` }
      ],
      examples: [
        { task: `Un oggetto si trova a 3 m davanti a uno specchio piano. Quale è la distanza tra l'oggetto e la sua immagine?`,
          steps: [`L'immagine si trova dietro lo specchio alla stessa distanza alla quale l'oggetto è davanti ad esso.`, `$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$`, `<strong>Risultato: 6 m</strong>`] },
        { task: `Quale lente raccoglie i raggi paralleli in un unico punto?`,
          steps: [`Una lente che raccoglie i raggi in un punto è più spessa al centro.`, `Una lente più spessa al centro è una lente convergente.`, `<strong>Risultato: una lente convergente</strong>`] }
      ]
    },
    'r8-praca': {
      title: `Lavoro meccanico e potenza`,
      summary: `Quando una forza compie lavoro, come si calcola e quanto rapidamente viene svolto.`,
      theory: [
        `<p><strong>Il lavoro meccanico</strong> viene compiuto quando una forza agisce su un corpo e il corpo si sposta nella direzione di questa forza.
       Se il corpo non si sposta, il lavoro è zero: spingere un muro non compie lavoro.</p>`,
        `<p>Il lavoro calcoliamo con la formula $W = F\\cdot s$, dove $F$ è la forza in newton (N) e $s$ è il percorso in metri (m).
       L'unità di lavoro è il <strong>joule</strong> (J): $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
        `<p><strong>La potenza</strong> ci dice quanto rapidamente viene svolto il lavoro. Si calcola come lavoro diviso tempo: $P = \\frac{W}{t}$,
       dove $t$ è il tempo in secondi. L'unità di potenza è il <strong>watt</strong> (W): $1\\,\\text{W} = 1\\,\\text{J/s}$.
       Due motori possono compiere lo stesso lavoro, ma quello più potente lo termina in un tempo minore.</p>`,
        `<ol>
         <li>Troviamo la forza e il percorso in N e m.</li>
         <li>Li moltiplichiamo: $W = F\\cdot s$.</li>
         <li>Se si chiede la potenza, dividiamo il risultato per il tempo: $P = W : t$.</li>
       </ol>`,
        { fig: 'r6r9-praca', caption: `Il lavoro si compie solo quando il corpo si muove nella direzione della forza. Spingere un muro che non si muove non compie lavoro.` }
      ],
      examples: [
        { task: `Due ragazzi spingono un carrello con una forza $F = 150\\,\\text{N}$ e lo spostano di $s = 8\\,\\text{m}$. Quale lavoro viene compiuto?`,
          steps: [`Sostituiamo nella formula: $W = F\\cdot s = 150\\cdot 8$.`, `<strong>Risultato: W = 1200 J</strong>`] },
        { task: `Un motore di sollevamento compie un lavoro $W = 3000\\,\\text{J}$ in $t = 20\\,\\text{s}$. Quale è la sua potenza?`,
          steps: [`$P = \\frac{W}{t} = \\frac{3000}{20}$.`, `<strong>Risultato: P = 150 W</strong>`] }
      ]
    },
    'r8-mechanicka-energia': {
      title: `Energia meccanica e le sue trasformazioni`,
      summary: `L'energia è la capacità di compiere lavoro e si trasforma da una forma in un'altra.`,
      theory: [
        `<p><strong>L'energia</strong> è la capacità di un corpo di compiere lavoro. Si indica con $E$ e la sua unità è la stessa del lavoro: il joule (J).
       L'energia non si può creare dal nulla né distruggere. Può soltanto trasformarsi da una forma in un'altra.</p>`,
        `<p><strong>Legge di conservazione dell'energia:</strong> l'energia totale di un sistema chiuso non cambia. Se una forma di energia diminuisce,
       un'altra forma aumenta della stessa quantità.</p>`,
        `<ul>
         <li>Un sasso che cade da un'altezza: l'energia potenziale si trasforma in energia cinetica.</li>
         <li>Un pendolo che risale: l'energia cinetica si trasforma di nuovo in energia potenziale.</li>
         <li>Un'auto che frena: l'energia cinetica si trasforma in energia interna (calore).</li>
       </ul>`,
        `<p>Quando si presenta l'attrito, una parte dell'energia meccanica si trasforma sempre in calore. L'energia non va persa, si disperde soltanto nell'ambiente
       e diventa difficile da utilizzare.</p>`,
        { fig: 'obr-energia', caption: `Quando scivola senza attrito, l'energia potenziale si trasforma in energia cinetica e viceversa.` }
      ],
      examples: [
        { task: `Che cosa succede all'energia quando un libro cade dal tavolo sul pavimento?`,
          steps: [`Sul tavolo il libro ha energia potenziale. Mentre cade si muove, quindi ha energia cinetica.`, `All'urto, una parte dell'energia si trasforma in suono e calore.`, `<strong>Risultato: l'energia potenziale si trasforma in cinetica, sonora e termica.</strong>`] },
        { task: `Quale trasformazione di energia avviene quando una bicicletta frena?`,
          steps: [`La bicicletta si muove, quindi ha energia cinetica.`, `I freni producono calore per attrito contro il cerchione.`, `<strong>Risultato: l'energia cinetica si trasforma in energia interna (calore).</strong>`] }
      ]
    },
    'r8-polohova-pohybova': {
      title: `Energia potenziale e cinetica`,
      summary: `Calcolo dell'energia di un corpo in quota e in moto.`,
      theory: [
        `<p>Un corpo sollevato sopra il suolo possiede <strong>energia potenziale</strong>. Quanto più è pesante e alto, tanto più energia ha.
       Si calcola come $E_p = m\\cdot g\\cdot h$, dove $m$ è la massa in chilogrammi, $g \\approx 10\\,\\text{m/s}^2$ è l'accelerazione di gravità
       e $h$ è l'altezza in metri.</p>`,
        `<p>Un corpo in moto possiede <strong>energia cinetica</strong>. Si calcola come $E_k = \\frac{1}{2}\\,m\\,v^2$,
       dove $v$ è la velocità in m/s. La velocità è al quadrato, quindi il doppio della velocità significa quattro volte l'energia cinetica.</p>`,
        `<p>Queste energie dipendono dalla massa, dall'altezza e dalla velocità, non dalla forma del corpo. Per questo un'auto è più difficile da fermare a velocità più alta:
       ha un'energia cinetica molto maggiore.</p>`,
        `<ol>
         <li>Troviamo la massa in kg, l'altezza in m oppure la velocità in m/s.</li>
         <li>Scegliamo la formula in base al fatto che il corpo sia in alto o in moto.</li>
         <li>Sostituiamo e calcoliamo; il risultato è in joule.</li>
       </ol>`,
        { fig: 'r6r9-kinetika', caption: `L'energia cinetica cresce con il quadrato della velocità: il doppio della velocità significa quattro volte l'energia.` }
      ],
      examples: [
        { task: `Un sasso di massa $m = 2\\,\\text{kg}$ si trova sul tetto di un edificio alto $h = 5\\,\\text{m}$. Quale è la sua energia potenziale con $g = 10\\,\\text{m/s}^2$?`,
          steps: [`$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.`, `<strong>Risultato: E_p = 100 J</strong>`] },
        { task: `Un carrello di massa $m = 4\\,\\text{kg}$ si muove alla velocità $v = 3\\,\\text{m/s}$. Quale è la sua energia cinetica?`,
          steps: [`$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.`, `$\\frac{1}{2}\\cdot 4 = 2$ e $3^2 = 9$, quindi $E_k = 2\\cdot 9$.`, `<strong>Risultato: E_k = 18 J</strong>`] }
      ]
    },
    'r8-jednoduche-stroje': {
      title: `Macchine semplici`,
      summary: `La leva, la carrucola e il piano inclinato rendono più facile il lavoro, ma non riducono il lavoro stesso.`,
      theory: [
        `<p><strong>Le macchine semplici</strong> (leva, carrucola, piano inclinato) permettono di sollevare un carico più pesante con una forza minore.
       Vale però la regola d'oro della meccanica: il lavoro non si può risparmiare. Si scambia una forza minore con un percorso più lungo.</p>`,
        `<p>La <strong>leva</strong> è un'asta che ruota attorno a un asse. La distanza della forza dall'asse è il <em>braccio della forza</em> $r$.
       La leva è in equilibrio quando $F_1\\cdot r_1 = F_2\\cdot r_2$. Un braccio più lungo significa che serve una forza minore.</p>`,
        `<p><strong>Carrucole:</strong> una carrucola fissa cambia soltanto la direzione della forza. Una carrucola mobile dimezza la forza, ma il percorso
       raddoppia. <strong>Piano inclinato:</strong> quanto minore è la pendenza, tanto minore è la forza necessaria, ma il percorso è più lungo.</p>`,
        `<ol>
         <li>Stabiliamo quale forza è il carico e quale è la forza motrice.</li>
         <li>Misuriamo i bracci della leva (le distanze dall'asse).</li>
         <li>Usiamo l'equilibrio della leva e calcoliamo la forza incognita.</li>
       </ol>`,
        { fig: 'obr-paka', caption: `La leva è in equilibrio quando il prodotto di forza e braccio da una parte è uguale a quello dall'altra.` }
      ],
      examples: [
        { task: `Su una leva il braccio della forza $r_1 = 2\\,\\text{m}$ e alziamo un carico con una forza $F_2 = 300\\,\\text{N}$ sul braccio $r_2 = 0{,}5\\,\\text{m}$. Con quale forza agiamo sul braccio $r_1$?`,
          steps: [`Equilibrio: $F_1\\cdot r_1 = F_2\\cdot r_2$.`, `$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.`, `<strong>Risultato: F_1 = 75 N</strong>`] },
        { task: `Con una carrucola mobile solleviamo un carico del peso di $200\\,\\text{N}$. Con quale forza tiriamo, se trascuriamo l'attrito?`,
          steps: [`La carrucola mobile dimezza la forza: $F = \\frac{200}{2}$.`, `<strong>Risultato: F = 100 N, ma dobbiamo tirare lungo il doppio del percorso.</strong>`] }
      ]
    },
    'r8-vnutorna-energia': {
      title: `Energia interna e scambio di calore`,
      summary: `Energia interna di un corpo, trasmissione del calore e calcolo del calore nel riscaldamento.`,
      theory: [
        `<p>Ogni corpo possiede <strong>energia interna</strong>. È costituita dalle energie cinetiche e potenziali delle sue particelle (atomi e molecole).
       Quanto più velocemente si muovono le particelle, tanto più caldo è il corpo e tanto maggiore è la sua energia interna.</p>`,
        `<p><strong>Il calore</strong> è l'energia che i corpi si scambiano a causa di una differenza di temperatura. Fluisce sempre dal corpo più caldo
       a quello più freddo, finché le temperature si uguagliano. Il calore non è una proprietà di un corpo, ma energia trasferita.</p>`,
        `<ul>
         <li><strong>Conduzione:</strong> il calore passa da particella a particella, per esempio un cucchiaino in una tazza di tè caldo.</li>
         <li><strong>Convezione:</strong> l'aria o l'acqua riscaldate salgono, per esempio vicino a un termosifone.</li>
         <li><strong>Irraggiamento:</strong> il calore si propaga anche senza sostanza, per esempio dal Sole.</li>
       </ul>`,
        `<p>La quantità di calore necessaria per riscaldare si calcola da $Q = m\\cdot c\\cdot \\Delta t$. Il valore $c$ è il calore specifico:
       per l'acqua $c = 4200\\,\\text{J/(kg\\cdot K)}$. La variazione di temperatura $\\Delta t$ è la differenza tra la temperatura finale e quella iniziale.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: `Il calore fluisce da un corpo più caldo a uno più freddo. Si trasmette per conduzione, convezione o irraggiamento.` }
      ],
      examples: [
        { task: `Quanto calore serve per riscaldare $m = 2\\,\\text{kg}$ di acqua di 10 °C? Usa $c = 4200\\,\\text{J/(kg\\cdot K)}$.`,
          steps: [`$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.`, `<strong>Risultato: Q = 84 000 J = 84 kJ</strong>`] },
        { task: `Una tazza di tè caldo si raffredda gradualmente. Come cede calore all'ambiente?`,
          steps: [`Il calore passa dal tè attraverso la parete della tazza per conduzione.`, `L'aria calda sopra la tazza sale, cioè avviene convezione. Il calore viene anche emesso per irraggiamento.`, `<strong>Risultato: per conduzione, convezione e irraggiamento.</strong>`] }
      ]
    },
    'r8-naboj': {
      title: `Carica elettrica`,
      summary: `Due tipi di carica, elettrizzazione per strofinio e la carica dell'elettrone.`,
      theory: [
        `<p>Tutti i corpi sono fatti di atomi. Un atomo ha un nucleo carico positivamente ed elettroni carichi negativamente.
       <strong>La carica elettrica</strong> è una proprietà dei corpi che si manifesta come forza. Si indica con $Q$ e la sua unità è il coulomb (C).</p>`,
        `<p>Esistono due tipi di carica: positiva e negativa. Cariche uguali si respingono, cariche opposte si attraggono.
       Un corpo neutro ha lo stesso numero di cariche positive e negative.</p>`,
        `<p><strong>Elettrizzazione per strofinio:</strong> durante lo strofinio gli elettroni passano da un corpo all'altro. Il corpo che acquista elettroni
       diventa carico negativamente. Il corpo che li perde diventa carico positivamente. La carica non si può creare né distruggere, ma soltanto trasferire.</p>`,
        `<ul>
         <li>La carica elementare $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ è portata da un elettrone.</li>
         <li>La carica di un corpo con $n$ elettroni in più è $Q = -n\\,e$; con $n$ elettroni in meno è $Q = +n\\,e$.</li>
       </ul>`,
        { fig: 'r6r9-naboj', caption: `Cariche uguali si respingono, cariche opposte si attraggono.` }
      ],
      examples: [
        { task: `Un corpo ha perso 3 elettroni. Quale è la sua carica in multipli della carica elementare $e$?`,
          steps: [`La perdita di elettroni crea un difetto di carica negativa, quindi il corpo è positivo.`, `La carica è $Q = +3e$.`, `<strong>Risultato: +3e</strong>`] },
        { task: `Due palline si respingono dopo essere state a contatto. Che cosa significa questo per le loro cariche?`,
          steps: [`La repulsione avviene solo tra cariche uguali.`, `<strong>Risultato: entrambe le palline hanno cariche dello stesso segno.</strong>`] }
      ]
    },
    'r8-prud-napatie': {
      title: `Corrente elettrica e tensione`,
      summary: `La corrente come carica nel tempo, la tensione come spinta motrice e come si misurano.`,
      theory: [
        `<p><strong>La corrente elettrica</strong> è il moto ordinato di particelle cariche, nei metalli principalmente di elettroni. Si indica con $I$ e la sua unità è l'ampere (A).
       Se una carica $Q$ attraversa la sezione di un conduttore nel tempo $t$, la corrente è $I = \\frac{Q}{t}$. Quindi $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
        `<p>Per convenzione, il verso della corrente è indicato come il moto della carica positiva dal polo positivo della sorgente al polo negativo. Gli elettroni si muovono in verso opposto.</p>`,
        `<p><strong>La tensione elettrica</strong> $U$ è la differenza di potenziale che spinge gli elettroni in un circuito. Una sorgente (una batteria) la crea tra i suoi poli.
       L'unità è il volt (V).</p>`,
        `<ol>
         <li>La corrente si misura con un <strong>amperometro</strong>, collegato in serie con l'apparecchio.</li>
         <li>La tensione si misura con un <strong>voltmetro</strong>, collegato in parallelo con l'apparecchio.</li>
       </ol>`,
        { fig: 'r6r9-merania', caption: `L'amperometro si collega in serie con l'apparecchio, il voltmetro in parallelo con esso.` }
      ],
      examples: [
        { task: `Una carica $Q = 20\\,\\text{C}$ attraversa un conduttore in $t = 10\\,\\text{s}$. Quale è la corrente?`,
          steps: [`$I = \\frac{Q}{t} = \\frac{20}{10}$.`, `<strong>Risultato: I = 2 A</strong>`] },
        { task: `Quale strumento misura la corrente e quale la tensione, e come sono collegati?`,
          steps: [`Un amperometro collegato in serie misura la corrente.`, `Un voltmetro collegato in parallelo misura la tensione.`, `<strong>Risultato: l'amperometro misura la corrente, il voltmetro misura la tensione.</strong>`] }
      ]
    },
    'r8-odpor': {
      title: `Circuito elettrico e resistenza elettrica`,
      summary: `Di che cosa è composto un circuito e come la resistenza frena la corrente.`,
      theory: [
        `<p>Un <strong>circuito elettrico</strong> è un percorso chiuso lungo il quale scorre la corrente. È composto da una sorgente, apparecchi, conduttori e un interruttore.
       Se il circuito è interrotto (per esempio da un interruttore aperto), non scorre corrente.</p>`,
        `<p><strong>La resistenza elettrica</strong> $R$ rallenta il moto degli elettroni in un conduttore. È causata dagli urti degli elettroni con gli atomi della sostanza.
       La sua unità è l'ohm ($\\Omega$). La resistenza dipende dal materiale, dalla lunghezza, dalla sezione e dalla temperatura del conduttore.</p>`,
        `<p>La relazione tra tensione, corrente e resistenza è $R = \\frac{U}{I}$. A parità di tensione, una resistenza maggiore significa una corrente minore.</p>`,
        `<ol>
         <li>Troviamo la tensione $U$ in volt e la corrente $I$ in ampere.</li>
         <li>Calcoliamo la resistenza con $R = \\frac{U}{I}$.</li>
       </ol>`,
        { fig: 'r6r9-odpor', caption: `A parità di tensione una resistenza maggiore lascia passare una corrente minore: a 12 V la corrente è 6 A con 2 Ω e 2 A con 6 Ω.` }
      ],
      examples: [
        { task: `Una lampadina alla tensione $U = 12\\,\\text{V}$ è percorsa da una corrente $I = 2\\,\\text{A}$. Quale è la sua resistenza?`,
          steps: [`$R = \\frac{U}{I} = \\frac{12}{2}$.`, `<strong>Risultato: R = 6 Ω</strong>`] },
        { task: `Quale conduttore frena di più la corrente: quello con resistenza maggiore o quello con resistenza minore?`,
          steps: [`Una resistenza maggiore significa che gli elettroni passano con più difficoltà.`, `<strong>Risultato: il conduttore con la resistenza maggiore.</strong>`] }
      ]
    },
    'r8-vodice': {
      title: `Conduttori e isolanti`,
      summary: `Quali sostanze conducono la corrente e perché, e a che cosa servono.`,
      theory: [
        `<p>Un <strong>conduttore</strong> è una sostanza nella quale gli elettroni possono muoversi liberamente. Tipici conduttori sono i metalli, per esempio rame, alluminio
       e ferro, e la grafite. Un <strong>isolante</strong> (non conduttore) ha gli elettroni fortemente legati e non conduce la corrente: per esempio plastica, gomma, vetro o legno secco.</p>`,
        `<ul>
         <li>Metallo: buon conduttore, usato per condurre la corrente.</li>
         <li>Plastica e gomma: isolanti, usati come rivestimento dei conduttori.</li>
         <li>Soluzione di sale in acqua: conduce la corrente, perché in essa si muovono particelle cariche.</li>
         <li>Acqua distillata pura: praticamente un isolante.</li>
       </ul>`,
        `<p>Usiamo i conduttori per trasmettere la corrente, per esempio il rame nei cavi. Gli isolanti li ricoprono, così non tocchiamo un conduttore sotto tensione
       e la corrente non passa dove non dovrebbe.</p>`,
        `<p>I semiconduttori, per esempio il silicio, stanno tra i conduttori e gli isolanti. Conducono la corrente solo in certe condizioni, e per questo si usano in elettronica.</p>`,
        { fig: 'r6r9-vodice', caption: `I conduttori hanno elettroni liberi e conducono la corrente. Gli isolanti hanno elettroni fortemente legati e non conducono la corrente.` }
      ],
      examples: [
        { task: `Perché un filo di rame è ricoperto di plastica?`,
          steps: [`Il rame conduce la corrente, la plastica non è un conduttore.`, `La plastica impedisce il contatto con il conduttore e la dispersione della corrente.`, `<strong>Risultato: la plastica è un isolante e protegge dalle lesioni.</strong>`] },
        { task: `L'acqua salata conduce la corrente?`,
          steps: [`Il sale si scioglie nell'acqua e forma particelle cariche che possono trasportare carica.`, `<strong>Risultato: una soluzione di sale conduce la corrente, è un conduttore.</strong>`] }
      ]
    },
    'r8-bezpecnost': {
      title: `Sicurezza nell'uso degli apparecchi elettrici`,
      summary: `Regole che proteggono da lesioni causate dalla corrente elettrica e dagli incendi.`,
      theory: [
        `<p>La corrente elettrica che attraversa il corpo può causare ustioni, arresto cardiaco o morte. Per questo seguiamo le regole di sicurezza.
       Il pericolo è maggiore quando la pelle è bagnata, perché l'acqua aumenta la conduzione della corrente.</p>`,
        `<ul>
         <li>Non toccare gli apparecchi elettrici con le mani bagnate o su un pavimento bagnato.</li>
         <li>Non usare cavi e spine danneggiati; non tirare mai il cavo.</li>
         <li>Non infilare oggetti nelle prese, soprattutto quelle metalliche.</li>
         <li>Se un apparecchio è guasto, staccalo dalla presa e chiama un tecnico.</li>
       </ul>`,
        `<p>Un <strong>fusibile</strong> o un <strong>interruttore automatico</strong> interrompe il circuito quando la corrente è troppo alta, per esempio in un corto circuito o in un sovraccarico.
       In questo modo impediscono che i conduttori si surriscaldino e causino un incendio.</p>`,
        `<p><strong>Messa a terra:</strong> le carcasse metalliche degli apparecchi sono collegate a terra. In caso di guasto la carcassa non è sotto tensione e toccarla non è pericoloso.</p>`
      ],
      examples: [
        { task: `Pietro ha staccato una spina dalla presa con la mano bagnata. Che cosa è pericoloso in questo caso?`,
          steps: [`L'acqua sulla pelle aumenta la conduzione, e la corrente può passare attraverso il corpo.`, `<strong>Risultato: c'è il rischio di folgorazione. Non afferrare mai una spina con le mani bagnate.</strong>`] },
        { task: `Quale elemento protegge un conduttore dal surriscaldamento durante un corto circuito?`,
          steps: [`Durante un corto circuito la corrente è molto grande e il conduttore si riscalda rapidamente.`, `Il fusibile si fonde oppure l'interruttore automatico disinserisce il circuito.`, `<strong>Risultato: un fusibile o un interruttore automatico.</strong>`] }
      ]
    },
    'r9-obvody': {
      title: `Circuiti elettrici e loro proprietà`,
      summary: `Una sorgente, un apparecchio, un interruttore e conduttori in un circuito chiuso.`,
      theory: [
        `<p>Un <strong>circuito elettrico</strong> è composto da una sorgente (batteria, accumulatore), apparecchi (lampadina, resistore, motore), un interruttore e conduttori.
       La corrente scorre solo quando il circuito è <strong>chiuso</strong>, cioè quando si può percorrere tutto l'anello da un polo della sorgente all'altro.</p>`,
        `<ul>
         <li><strong>La sorgente</strong> fornisce energia alle particelle cariche.</li>
         <li><strong>L'apparecchio</strong> trasforma l'energia elettrica in un'altra forma: luce, calore o movimento.</li>
         <li><strong>L'interruttore</strong> chiude o apre il circuito.</li>
         <li><strong>I conduttori</strong> collegano i componenti in un tutto.</li>
       </ul>`,
        `<p>Un circuito disegniamo come <strong>schema</strong>, nel quale ogni componente ha il proprio simbolo. Lo schema mostra come sono collegati i componenti,
       non come sono fatti.</p>`,
        `<p>Quando apriamo l'interruttore, il circuito si interrompe: non scorre corrente e la lampadina si spegne. Un circuito funziona solo quando è completamente chiuso.</p>`,
        { fig: 'obr-obvod', caption: `Collegamento in serie e in parallelo di apparecchi a una sorgente.` }
      ],
      examples: [
        { task: `Che cosa succede alla lampadina quando apriamo l'interruttore?`,
          steps: [`Il circuito si interrompe e non scorre corrente.`, `<strong>Risultato: la lampadina si spegne.</strong>`] },
        { task: `Quale componente del circuito trasforma l'energia elettrica in luce?`,
          steps: [`La luce si produce nel filamento della lampadina.`, `<strong>Risultato: la lampadina (un apparecchio).</strong>`] }
      ]
    },
    'r9-zapojenie': {
      title: `Collegamento in serie e in parallelo`,
      summary: `Come cambia la resistenza totale quando i resistori sono collegati uno dopo l'altro o affiancati.`,
      theory: [
        `<p>Due resistori si collegano <strong>in serie</strong> (uno dopo l'altro), oppure <strong>in parallelo</strong> (affiancati).
       In serie la corrente deve passare attraverso entrambi i resistori. In un collegamento in parallelo la corrente si divide in due rami.</p>`,
        `<ul>
         <li><strong>Collegamento in serie:</strong> la corrente è la stessa in tutto il circuito, la tensione si divide tra i resistori.
             La resistenza totale è la somma: $R = R_1 + R_2$.</li>
         <li><strong>Collegamento in parallelo:</strong> la tensione è la stessa ai capi di entrambi i rami, la corrente si divide.
             Vale $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$.</li>
       </ul>`,
        `<p>In un collegamento in parallelo la resistenza totale è sempre <strong>minore</strong> della più piccola tra le resistenze dei rami. C'è una ragione logica:
       ogni ramo in più è un altro percorso per la corrente. Per questo gli apparecchi collegati in parallelo in casa assorbono dalla rete una corrente maggiore.</p>`,
        `<ol>
         <li>Stabiliamo se i resistori sono uno dopo l'altro (serie) oppure affiancati (parallelo).</li>
         <li>In serie sommiamo le resistenze; in parallelo sommiamo i loro reciproci.</li>
       </ol>`,
        { fig: 'obr-obvod', caption: `Collegamento in serie e in parallelo di apparecchi a una sorgente.` }
      ],
      examples: [
        { task: `I resistori $R_1 = 6\\,\\Omega$ e $R_2 = 3\\,\\Omega$ sono collegati in parallelo. Quale è la resistenza totale?`,
          steps: [`$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.`, `$R=\\frac{6}{3}=2\\,\\Omega$.`, `<strong>Risultato: R = 2 Ω</strong>`] },
        { task: `I resistori $R_1 = 4\\,\\Omega$ e $R_2 = 5\\,\\Omega$ sono collegati in serie. Quale è la resistenza totale?`,
          steps: [`In serie le resistenze si sommano: $R = R_1 + R_2$.`, `<strong>Risultato: R = 9 Ω</strong>`] }
      ]
    },
    'r9-vypocty': {
      title: `Calcoli di corrente, tensione e resistenza`,
      summary: `Da due grandezze note calcoliamo la terza.`,
      theory: [
        `<p>In un circuito ci sono tre grandezze fondamentali: corrente $I$ (A), tensione $U$ (V) e resistenza $R$ (Ω). Se ne conosciamo due, possiamo calcolare la terza.
       Le relazioni sono $I=\\frac{U}{R}$, $U=I\\cdot R$ e $R=\\frac{U}{I}$.</p>`,
        `<ol>
         <li>Scriviamo che cosa è dato e che cosa dobbiamo trovare.</li>
         <li>Scegliamo la formula nella quale la grandezza cercata è isolata.</li>
         <li>Sostituiamo le unità V, A e Ω; nelle conversioni usiamo i multipli.</li>
         <li>Verifichiamo le unità del risultato.</li>
       </ol>`,
        `<p><strong>Attenzione alle unità:</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ e $1\\,\\text{k}\\Omega=1000\\,\\Omega$. Se un valore è in milliampere o in kiloohm,
       prima lo riscriviamo nell'unità fondamentale.</p>`,
        { fig: 'r6r9-trojuholnik', caption: `Copri la grandezza cercata: il resto mostra la formula, per esempio U = I · R.` }
      ],
      examples: [
        { task: `La tensione ai capi di un resistore di resistenza $R = 4\\,\\Omega$ è $U = 12\\,\\text{V}$. Quale corrente lo attraversa?`,
          steps: [`$I=\\frac{U}{R}=\\frac{12}{4}$.`, `<strong>Risultato: I = 3 A</strong>`] },
        { task: `Un apparecchio è percorso da una corrente $I = 0{,}5\\,\\text{A}$ alla tensione $U = 230\\,\\text{V}$. Quale è la sua resistenza?`,
          steps: [`$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.`, `Dividiamo per un numero decimale: $\\frac{230}{0{,}5}=\\frac{460}{1}$.`, `<strong>Risultato: R = 460 Ω</strong>`] }
      ]
    },
    'r9-ohmov-zakon': {
      title: `Legge di Ohm`,
      summary: `La corrente è proporzionale alla tensione e inversamente proporzionale alla resistenza.`,
      theory: [
        `<p><strong>La legge di Ohm</strong> afferma: la corrente che attraversa un conduttore è direttamente proporzionale alla tensione e inversamente proporzionale alla resistenza.
       Si scrive come $I=\\frac{U}{R}$, a temperatura costante del conduttore.</p>`,
        `<ul>
         <li>A resistenza costante: raddoppiare la tensione raddoppia la corrente.</li>
         <li>A tensione costante: raddoppiare la resistenza dimezza la corrente.</li>
       </ul>`,
        `<p>La dipendenza della corrente dalla tensione, a resistenza costante, è nel grafico una <strong>retta passante per l'origine</strong>.
       Una retta più ripida significa una resistenza minore, perché a parità di tensione passa una corrente maggiore.</p>`,
        `<p>La legge vale esattamente per i conduttori metallici a temperatura costante. Quando un metallo si riscalda fortemente, la sua resistenza aumenta, quindi la dipendenza non è più lineare.</p>`,
        { fig: 'obr-ohm', caption: `A resistenza costante il grafico tensione-corrente è una retta passante per l'origine.` }
      ],
      examples: [
        { task: `La tensione ai capi di un resistore è aumentata da $4\\,\\text{V}$ a $12\\,\\text{V}$. La resistenza non è cambiata. Di quante volte è aumentata la corrente?`,
          steps: [`Il rapporto delle tensioni è $\\frac{12}{4}=3$.`, `La corrente è direttamente proporzionale alla tensione, quindi aumenta anch'essa $3$ volte.`, `<strong>Risultato: 3 volte</strong>`] },
        { task: `A una tensione di $230\\,\\text{V}$ un resistore assorbe una corrente di $2\\,\\text{A}$. Quale corrente assorbe con resistenza doppia e stessa tensione?`,
          steps: [`La resistenza è raddoppiata, e la corrente è inversamente proporzionale alla resistenza.`, `$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.`, `<strong>Risultato: 1 A</strong>`] }
      ]
    },
    'r9-praca-vykon': {
      title: `Lavoro elettrico e potenza elettrica`,
      summary: `Quanta energia assorbe un apparecchio nel tempo e come si calcola in kWh.`,
      theory: [
        `<p><strong>La potenza elettrica</strong> è $P=U\\cdot I$ e la sua unità è il watt (W). Ci dice quanta energia converte l'apparecchio ogni secondo.
       Se conosciamo la resistenza, valgono anche $P=I^2\\,R$ oppure $P=\\frac{U^2}{R}$.</p>`,
        `<p><strong>Il lavoro elettrico</strong> (energia consumata) è $W=P\\cdot t=U\\cdot I\\cdot t$, dove $t$ è il tempo in secondi. L'unità è il joule (J),
       perché $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
        `<p>Nelle abitazioni l'energia si fattura in <strong>chilowattora</strong> (kWh). Si calcola come potenza in chilowatt moltiplicata per il tempo in ore:
       $E = P\\cdot t$, dove $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<ol>
         <li>Potenza in chilowatt: $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Energia in kWh: potenza in kW moltiplicata per il tempo in ore.</li>
       </ol>`
      ],
      examples: [
        { task: `Una lampadina è collegata a una tensione di $230\\,\\text{V}$ e la attraversa una corrente di $0{,}5\\,\\text{A}$. Quale è la sua potenza?`,
          steps: [`$P = U\\cdot I = 230\\cdot 0{,}5$.`, `<strong>Risultato: P = 115 W</strong>`] },
        { task: `Una lavatrice ha una potenza di $2\\,\\text{kW}$ e funziona per $1{,}5\\,\\text{h}$. Quanta energia consuma in kWh?`,
          steps: [`$E = P\\cdot t = 2\\cdot 1{,}5$.`, `<strong>Risultato: E = 3 kWh</strong>`] }
      ]
    },
    'r9-magnetizmus': {
      title: `Campo magnetico ed effetti magnetici della corrente elettrica`,
      summary: `Intorno a un filo percorso da corrente si forma un campo magnetico, e la sua direzione si trova con la regola della mano destra.`,
      theory: [
        `<p>Intorno a un conduttore percorso da corrente elettrica si forma un <strong>campo magnetico</strong>. Il legame tra elettricità e magnetismo fu scoperto nel 1820 dal fisico danese Ørsted: un ago magnetico si deviò quando in un filo vicino si fece passare corrente.</p>`,
        `<p>La <strong>direzione del campo</strong> si determina con la regola della mano destra: il pollice indica il verso della corrente e le dita avvolte
       mostrano il verso delle linee del campo magnetico intorno al conduttore. Se invertiamo la corrente, si inverte anche la direzione del campo.</p>`,
        `<p>Se avvolgiamo il conduttore in una <strong>bobina</strong>, i campi delle singole spire si sommano e all'interno della bobina si forma un campo più intenso.
       L'intensità del campo aumentiamo con una corrente maggiore o con un numero maggiore di spire.</p>`,
        `<ul>
         <li>Senza corrente non c'è campo magnetico intorno a un filo.</li>
         <li>Il campo magnetico esercita una forza su magneti e su altri conduttori percorsi da corrente.</li>
         <li>Il campo è più debole quanto più si è lontani dal filo.</li>
       </ul>`,
        { fig: 'obr-magnet-vodic', caption: `Intorno a un conduttore percorso da corrente c'è un campo magnetico a forma di cerchi concentrici attorno al conduttore.` }
      ],
      examples: [
        { task: `Come cambia la direzione del campo magnetico intorno a un filo se invertiamo il verso della corrente?`,
          steps: [`La direzione del campo è determinata dal verso della corrente (regola della mano destra).`, `<strong>Risultato: la direzione del campo si inverte.</strong>`] },
        { task: `Perché un ago magnetico si devia vicino a un filo percorso da corrente?`,
          steps: [`L'ago della bussola è un piccolo magnete che si orienta in un campo magnetico.`, `<strong>Risultato: il campo magnetico intorno al filo percorso da corrente agisce sull'ago.</strong>`] }
      ]
    },
    'r9-elektromagnet': {
      title: `Elettromagnete e motore elettrico`,
      summary: `Una bobina con nucleo come magnete temporaneo e un motore che trasforma l'energia elettrica in movimento.`,
      theory: [
        `<p>Un <strong>elettromagnete</strong> è una bobina con un nucleo di ferro dolce. Quando la corrente percorre la bobina, il nucleo si magnetizza.
       Dopo che la corrente viene disinserita, il magnetismo scompare. L'intensità dell'elettromagnete aumentiamo con una corrente maggiore o con un numero maggiore di spire.</p>`,
        `<p>Un <strong>motore elettrico</strong> trasforma l'energia elettrica in energia cinetica (meccanica). Sfrutta la forza che un campo magnetico esercita su un conduttore percorso da corrente:
       una bobina immersa in un campo magnetico ruota.</p>`,
        `<ul>
         <li>Gli elettromagneti si usano nei campanelli, nei relè e nelle gru magnetiche dei depositi di rottami.</li>
         <li>I motori elettrici azionano lavatrici, trapani e ventilatori.</li>
       </ul>`,
        `<ol>
         <li>Nella bobina del motore scorre la corrente.</li>
         <li>Il campo magnetico esercita una forza sui fili della bobina.</li>
         <li>La bobina ruota.</li>
         <li>Il commutatore inverte il verso della corrente, affinché la bobina continui a ruotare.</li>
       </ol>`,
        { fig: 'r6r9-elektromagnet', caption: `Una bobina con nucleo di ferro è magnetica solo quando la attraversa la corrente.` }
      ],
      examples: [
        { task: `Perché un elettromagnete in un deposito di rottami solleva rottami di ferro, ma li rilascia quando la corrente viene disinserita?`,
          steps: [`Quando la corrente è inserita, il nucleo è magnetico e attira il ferro.`, `Dopo aver disinserito la corrente il campo magnetico scompare.`, `<strong>Risultato: il magnetismo dell'elettromagnete dipende dalla corrente.</strong>`] },
        { task: `Quale trasformazione di energia avviene nel motore elettrico di una lavatrice?`,
          steps: [`L'energia elettrica passa attraverso le bobine del motore.`, `Il cestello comincia a ruotare.`, `<strong>Risultato: energia elettrica in energia cinetica (meccanica).</strong>`] }
      ]
    },
    'r9-premeny-zdroje': {
      title: `Trasformazioni dell'energia e fonti`,
      summary: `Come cambia l'energia nelle centrali e in che cosa le fonti rinnovabili si distinguono da quelle non rinnovabili.`,
      theory: [
        `<p>L'energia si può convertire da una forma in un'altra. Le fonti di energia si dividono in <strong>rinnovabili</strong>, che si rigenerano naturalmente
       (sole, vento, acqua, biomassa, energia geotermica), e <strong>non rinnovabili</strong>, delle quali le riserve si esauriscono
       (carbone, petrolio, gas naturale, combustibile nucleare).</p>`,
        `<ul>
         <li><strong>Centrale a carbone:</strong> energia chimica del combustibile, termica, meccanica (turbina), elettrica.</li>
         <li><strong>Centrale idroelettrica:</strong> energia potenziale dell'acqua, cinetica, meccanica (turbina), elettrica.</li>
         <li><strong>Pannello solare:</strong> l'energia radiante del Sole si trasforma in energia elettrica.</li>
         <li><strong>Centrale eolica:</strong> energia cinetica del vento, meccanica, elettrica.</li>
       </ul>`,
        `<p>A ogni trasformazione una parte dell'energia si trasforma in calore e si disperde nell'ambiente. L'energia totale si conserva,
       ma l'energia utile diminuisce.</p>`,
        { fig: 'r6r9-elektrarna', caption: `Una centrale a carbone trasforma gradualmente l'energia chimica del combustibile in energia termica, meccanica ed elettrica.` }
      ],
      examples: [
        { task: `Quale trasformazione di energia compie un pannello solare?`,
          steps: [`Il pannello riceve energia radiante dal Sole.`, `La trasforma in energia elettrica.`, `<strong>Risultato: energia radiante in energia elettrica.</strong>`] },
        { task: `Perché il carbone è una fonte non rinnovabile?`,
          steps: [`Si è formato in milioni di anni dalle piante.`, `Lo usiamo più in fretta di quanto si possa rigenerare.`, `<strong>Risultato: non è rinnovabile, perché non si rigenera in tempo utile.</strong>`] }
      ]
    },
    'r9-energia-priroda': {
      title: `Energia in natura e nella tecnica`,
      summary: `Il rendimento di un dispositivo e l'energia che non si può utilizzare del tutto.`,
      theory: [
        `<p>Il <strong>rendimento</strong> di un dispositivo indica quale parte dell'energia fornita si trasforma in lavoro o energia utile:
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, dove $E_u$ è l'energia utile e $E_d$ l'energia fornita.</p>`,
        `<p>Il rendimento è sempre inferiore al 100 %. Una parte dell'energia si trasforma in calore, che si disperde nell'ambiente.
       La lampadina a incandescenza ha un rendimento basso, perché emette la maggior parte dell'energia come calore.</p>`,
        `<ul>
         <li>La lampadina LED è più efficiente di quella classica, perché si trasforma in calore meno energia.</li>
         <li>Nel motore a combustione di un'auto una gran parte dell'energia della combustione del carburante va persa come calore.</li>
       </ul>`,
        `<p>In natura l'energia non va persa, si disperde soltanto sotto forma di calore, che poi è difficile da utilizzare. Per questo si cerca di aumentare il rendimento delle macchine.</p>`,
        { fig: 'r6r9-ucinnost', caption: `Il rendimento è il rapporto tra energia utile ed energia fornita. Il resto dell'energia si perde come calore.` }
      ],
      examples: [
        { task: `Un motore riceve 400 J di energia e trasforma 100 J in movimento. Quale è il suo rendimento?`,
          steps: [`$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.`, `$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.`, `<strong>Risultato: 25 %</strong>`] },
        { task: `Un riscaldatore con rendimento del $90\\,\\%$ riceve $1000\\,\\text{J}$. Quanta energia va persa?`,
          steps: [`L'energia utile è $0{,}9\\cdot 1000 = 900\\,\\text{J}$.`, `Il resto va perso: $1000 - 900 = 100\\,\\text{J}$.`, `<strong>Risultato: 100 J</strong>`] }
      ]
    },
    'r9-opakovanie': {
      title: `Ripasso e problemi pratici di fisica`,
      summary: `Panoramica delle formule del nono anno e un metodo per i problemi pratici.`,
      theory: [
        `<p>Per ogni problema scriviamo prima che cosa è dato e che cosa cerchiamo. Poi scegliamo la formula, convertiamo le unità e sostituiamo.
       Alla fine verifichiamo le unità del risultato e se il valore è ragionevole.</p>`,
        `<ol>
         <li>Individuiamo il fenomeno: circuito elettrico, energia, potenza, magnetismo.</li>
         <li>Scegliamo la formula corretta.</li>
         <li>Convertiamo le unità (mA in A, kW in W, minuti in secondi, kWh in J).</li>
         <li>Sostituiamo, calcoliamo e verifichiamo le unità.</li>
       </ol>`,
        `<ul>
         <li>Legge di Ohm: $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Potenza e lavoro: $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Energia potenziale: $E_p=m\\,g\\,h$, con $g\\approx 10\\,\\text{m/s}^2$.</li>
         <li>Rendimento: $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
      ],
      examples: [
        { task: `Un motore con potenza di $1500\\,\\text{W}$ funziona per $2\\,\\text{h}$. Quanta energia consuma in kWh?`,
          steps: [`Potenza in chilowatt: $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.`, `$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.`, `<strong>Risultato: E = 3 kWh</strong>`] },
        { task: `Un corpo di massa $3\\,\\text{kg}$ si trova all'altezza di $4\\,\\text{m}$. Quale è la sua energia potenziale con $g = 10\\,\\text{m/s}^2$?`,
          steps: [`$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.`, `<strong>Risultato: E_p = 120 J</strong>`] }
      ]
    }
  }
});
