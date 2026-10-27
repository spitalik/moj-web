/* Italiano: lekcie ročníkov v9–v12 (js/rocniky/v9.js, v10.js, v11.js, v12.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('it', {
  lessons: {
    'v9-kryst-struktury': {
      title: `Strutture cristalline`,
      summary: `La cella elementare, i tipi di reticoli cubici e il numero di atomi per cella.`,
      theory: [
        `<p>Un cristallo è una sostanza in cui gli atomi sono disposti regolarmente in un <em>reticolo</em> spaziale. Il più piccolo elemento che, ripetuto per traslazioni, costruisce l'intero reticolo è la <strong>cella elementare</strong>.</p>`,
        `<p>Le tre celle cubiche fondamentali sono: <em>cubica semplice</em> (atomi solo agli spigoli), <em>cubica a corpo centrato</em> (oltre agli spigoli anche un atomo al centro) e <em>cubica a facce centrate</em> (oltre agli spigoli anche atomi al centro delle facce).</p>`,
        `<p>Un atomo al centro appartiene alla cella per intero, un atomo su una faccia vi appartiene per metà e un atomo allo spigolo per un ottavo. Quindi una cella cubica semplice ha 1 atomo, una cella a corpo centrato 2 atomi e una cella a facce centrate 4 atomi.</p>`,
        `<p>La disposizione influisce sulle proprietà meccaniche. I metalli con reticolo cubico a facce centrate (Al, Cu, Au) sono duttili, perché i piani atomici possono scorrere facilmente l'uno sull'altro.</p>`,
        { fig: 'v9v12-bunka', caption: `Cella elementare: reticoli cubici semplice, a corpo centrato e a facce centrate, e numero di atomi che appartengono a ciascuno di essi.` }
      ],
      examples: [
        { task: `Quanti atomi appartengono a una cella elementare di un reticolo cubico a facce centrate?`,
          steps: [`Otto atomi agli spigoli, ciascuno appartiene alla cella per un ottavo: $8\\cdot\\tfrac{1}{8}=1$.`, `Sei atomi sulle facce, ciascuno per metà: $6\\cdot\\tfrac{1}{2}=3$.`, `<strong>Risultato: $1+3=4$ atomi</strong>`] },
        { task: `Quanti atomi ha una cella cubica a corpo centrato?`,
          steps: [`Gli spigoli danno $8\\cdot\\tfrac{1}{8}=1$ atomo.`, `L'atomo al centro appartiene alla cella per intero, quindi aggiunge 1.`, `<strong>Risultato: 2 atomi</strong>`] }
      ]
    },
    'v9-vazby': {
      title: `Legami atomici nei solidi`,
      summary: `Legami ionico, covalente, metallico e di van der Waals e le loro conseguenze.`,
      theory: [
        `<p>Gli atomi si uniscono in un solido quando ciò abbassa l'energia totale del sistema. Il legame si forma per ridistribuzione o condivisione degli elettroni di valenza.</p>`,
        `<ul><li><strong>Ionico</strong>: gli elettroni passano da un atomo all'altro e si formano ioni di carica opposta (es. NaCl). Queste sostanze sono dure, fragili e hanno un'alta temperatura di fusione.</li><li><strong>Covalente</strong>: gli atomi condividono coppie di elettroni (diamante, silicio). I legami sono forti e le sostanze dure.</li><li><strong>Metallico</strong>: gli elettroni di valenza formano un comune “gas elettronico” che appartiene a tutti gli atomi (Cu, Fe). I metalli sono duttili e conducono la corrente.</li><li><strong>Van der Waals</strong>: deboli forze attrattive tra dipoli temporanei (es. CO₂ solida o strati di grafite). Si rompono facilmente.</li></ul>`,
        `<p>Le proprietà di un solido, come durezza, conducibilità e temperatura di fusione, sono una conseguenza diretta del tipo di legame. Conoscendo il legame possiamo prevedere come si comporterà il materiale.</p>`
      ],
      examples: [
        { task: `Quale legame è presente nel metallo rame?`,
          steps: [`Gli atomi di rame rilasciano i loro elettroni di valenza in un comune “mare”.`, `<strong>Risultato: legame metallico</strong>`] },
        { task: `Perché il diamante è molto duro?`,
          steps: [`Ogni atomo di carbonio è legato covalentemente a quattro vicini.`, `Una rete così rigida richiede molta energia per essere rotta.`, `<strong>Risultato: legami covalenti forti in tutto il cristallo</strong>`] }
      ]
    },
    'v9-elektricke-tepelne': {
      title: `Proprietà elettriche e termiche dei materiali`,
      summary: `Resistività, dipendenza della resistenza dalla temperatura e conducibilità termica.`,
      theory: [
        `<p>La resistenza di un conduttore è $R = \\rho\\dfrac{l}{S}$, dove $\\rho$ è la <em>resistività</em> del materiale, $l$ la lunghezza e $S$ la sezione. La resistività del rame è circa $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. Un conduttore più lungo e più sottile ha una resistenza maggiore.</p>`,
        `<p>Un metallo conduce la corrente perché i suoi elettroni di valenza si muovono liberamente nel reticolo. Quando la temperatura aumenta, le vibrazioni degli ioni del reticolo disperdono questo moto, quindi la resistenza di un metallo cresce con la temperatura. Al contrario, nei semiconduttori e negli isolanti con l'aumentare della temperatura si liberano più portatori di carica e la resistenza diminuisce.</p>`,
        `<p><strong>Conducibilità termica:</strong> nei metalli il calore è trasportato soprattutto dagli elettroni liberi, nei non metalli dalle vibrazioni del reticolo (fononi). Per questo il rame è un ottimo conduttore di calore, mentre il vetro e la ceramica isolano dal calore.</p>`
      ],
      examples: [
        { task: `Un filo di rame lungo 50 m con sezione di 2 mm² che resistenza ha? La resistività del rame è $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.`,
          steps: [`Convertiamo la sezione: $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.`, `$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.`, `<strong>Risultato: circa 0,43 Ω</strong>`] },
        { task: `Quale conduttore ha la resistenza maggiore: quello più lungo o quello più corto, a parità di sezione e materiale?`,
          steps: [`La resistenza è proporzionale alla lunghezza $l$.`, `<strong>Risultato: quello più lungo</strong>`] }
      ]
    },
    'v9-pasova-teoria': {
      title: `Teoria delle bande nei solidi`,
      summary: `Bande energetiche nel cristallo e suddivisione dei materiali in conduttori, semiconduttori e isolanti.`,
      theory: [
        `<p>Quando si uniscono un gran numero di atomi, i livelli energetici discreti degli elettroni si allargano in <em>bande</em>, cioè insiemi di livelli molto vicini. Tra le bande può trovarsi una <strong>banda proibita</strong> di ampiezza $E_g$, in cui gli elettroni non possono trovarsi.</p>`,
        `<p>La banda più alta occupata è la banda di <em>valenza</em>, sopra di essa si trova la banda di <em>conduzione</em>. Gli elettroni riempiono le bande dal basso verso l'alto e il principio di Pauli vieta che due elettroni occupino uno stesso stato. Una banda completamente piena non conduce corrente, perché gli elettroni al suo interno non hanno dove spostarsi.</p>`,
        `<ul><li><strong>Conduttore</strong> (metallo): manca la banda proibita, le bande si sovrappongono e la banda di conduzione è parzialmente occupata.</li><li><strong>Semiconduttore</strong>: $E_g$ è circa da 0,1 a 3 eV (il silicio ha 1,1 eV). A temperatura ambiente alcuni elettroni raggiungono la banda di conduzione.</li><li><strong>Isolante</strong>: $E_g$ è maggiore di 3 eV (il diamante ha 5,5 eV).</li></ul>`,
        { fig: 'v9v12-pasy', caption: `In un conduttore le bande si sovrappongono, in un semiconduttore c'è una banda proibita E_g stretta, in un isolante una larga.` }
      ],
      examples: [
        { task: `Un materiale ha una larghezza della banda proibita $E_g = 0{,}67\\,\\text{eV}$. È un conduttore, un semiconduttore o un isolante?`,
          steps: [`Il valore è compreso tra 0,1 e 3 eV e non è nullo.`, `<strong>Risultato: un semiconduttore (es. germanio)</strong>`] },
        { task: `Perché il diamante ($E_g=5{,}5\\,\\text{eV}$) non conduce la corrente?`,
          steps: [`La banda proibita è molto larga.`, `A temperature ordinarie gli elettroni non raggiungono la banda di conduzione.`, `<strong>Risultato: è un isolante</strong>`] }
      ]
    },
    'v9-polovodice': {
      title: `Semiconduttori e transistor`,
      summary: `Drogaggio del silicio, giunzione PN e principio del transistor.`,
      theory: [
        `<p>Il silicio puro ha quattro elettroni di valenza e si lega covalentemente. A temperatura ambiente una piccola frazione degli elettroni si libera nella banda di conduzione e lascia dietro di sé <em>lacune</em>, posti in cui può spostarsi un elettrone. Si parla di conduzione intrinseca.</p>`,
        `<p><strong>Il drogaggio</strong> aumenta la conducibilità. Un elemento con cinque elettroni di valenza (fosforo, arsenico, antimonio) cede un elettrone libero in più e si forma un semiconduttore di tipo $n$, nel quale i portatori sono gli elettroni. Un elemento con tre elettroni di valenza (boro, alluminio, gallio) crea lacune e si forma un semiconduttore di tipo $p$.</p>`,
        `<p>Una <strong>giunzione PN</strong> si forma unendo i due tipi. In direzione diretta la corrente scorre, in direzione inversa praticamente no. Un transistor è composto da due di queste giunzioni e una piccola corrente in un circuito controlla una grande corrente in un altro.</p>`,
        `<p>Il transistor funge da amplificatore e da interruttore. Tutti i circuiti digitali nei computer e nei telefoni cellulari sono costruiti con miliardi di transistor.</p>`,
        { fig: 'v9v12-pn', caption: `Alla giunzione PN le lacune della regione p incontrano gli elettroni della regione n.` }
      ],
      examples: [
        { task: `Aggiungiamo fosforo al silicio. Che tipo di semiconduttore si forma?`,
          steps: [`Il fosforo ha 5 elettroni di valenza, quindi uno di essi è in più.`, `<strong>Risultato: un semiconduttore di tipo $n$</strong>`] },
        { task: `Perché un diodo in direzione inversa quasi non conduce corrente?`,
          steps: [`Alla giunzione PN si forma una regione priva di portatori liberi.`, `Aumentando la tensione inversa, questa regione si limita ad allargarsi.`, `<strong>Risultato: praticamente nessuna corrente passa</strong>`] }
      ]
    },
    'v9-supravodivost': {
      title: `Superconduttività`,
      summary: `Resistenza nulla sotto la temperatura critica, effetto Meissner e superconduttori ad alta temperatura.`,
      theory: [
        `<p>La superconduttività è uno stato in cui un materiale perde completamente la resistenza elettrica al di sotto della <em>temperatura critica</em> $T_c$. La corrente può fluire in esso senza perdite.</p>`,
        `<p><strong>Effetto Meissner</strong>: un superconduttore espelle il campo magnetico dal proprio interno. Per questo un superconduttore levita sopra un magnete.</p>`,
        `<p>I superconduttori classici, come piombo o niobio, hanno $T_c$ di alcuni kelvin e si raffreddano con elio liquido ($4{,}2\\,\\text{K}$). I superconduttori ad alta temperatura (cuprati, es. YBCO con $T_c\\approx 92\\,\\text{K}$) si possono raffreddare con azoto liquido, più economico ($77\\,\\text{K}$).</p>`,
        `<p>Secondo la teoria BCS, gli elettroni in un cristallo si accoppiano in <em>coppie di Cooper</em> grazie allo scambio di vibrazioni del reticolo. Queste coppie si muovono senza diffusione, ed è per questo che la resistenza è nulla.</p>`,
        { fig: 'v9v12-supra', caption: `Sotto la temperatura critica Tc la resistenza di un superconduttore scende a zero, mentre un normale metallo ha una resistenza che cresce con la temperatura.` }
      ],
      examples: [
        { task: `La temperatura critica del niobio è $T_c=9{,}2\\,\\text{K}$. Quanto vale in gradi Celsius?`,
          steps: [`$t = T - 273{,}15$.`, `$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.`, `<strong>Risultato: circa -263,95 °C</strong>`] },
        { task: `Perché un superconduttore levita sopra un magnete?`,
          steps: [`Il campo magnetico non può penetrare nel superconduttore (effetto Meissner).`, `Le correnti indotte nella superficie creano un campo che respinge il magnete.`, `<strong>Risultato: la forza repulsiva solleva il superconduttore</strong>`] }
      ]
    },
    'v9-magneticke': {
      title: `Materiali magnetici`,
      summary: `Diamagnetismo, paramagnetismo e ferromagnetismo, domini e temperatura di Curie.`,
      theory: [
        `<p>In base al comportamento in un campo magnetico, le sostanze si dividono in <strong>diamagnetiche</strong> (debolmente respinte, es. rame, zinco), <strong>paramagnetiche</strong> (debolmente attratte, es. alluminio, platino) e <strong>ferromagnetiche</strong> (fortemente attratte, es. ferro, nichel, cobalto).</p>`,
        `<p>Nei ferromagneti i momenti magnetici degli atomi si allineano in regioni orientate insieme, chiamate <em>domini</em>. Senza campo i domini sono orientati in modo casuale e il momento risultante è nullo. Un campo esterno li allinea e il materiale si magnetizza.</p>`,
        `<p>Sopra la <em>temperatura di Curie</em> $T_C$ il moto termico degli atomi distrugge i domini e il ferromagnetismo scompare. Il ferro ha $T_C\\approx 770\\,{}^{\\circ}\\text{C}$.</p>`,
        `<p>I materiali magnetici dolci, ad esempio le lamiere dei trasformatori, si magnetizzano e smagnetizzano facilmente. I materiali duri, ad esempio i magneti permanenti, conservano la magnetizzazione.</p>`,
        { fig: 'v9v12-domeny', caption: `In un ferromagnete i domini senza campo sono orientati in modo casuale; in un campo esterno si allineano e il materiale si magnetizza.` }
      ],
      examples: [
        { task: `Perché una graffetta si attacca a un magnete, ma un filo di rame no?`,
          steps: [`La graffetta è di acciaio, che contiene ferro; i suoi domini si allineano nel campo del magnete.`, `Il rame è diamagnetico e la sua risposta è debole e repulsiva.`, `<strong>Risultato: la graffetta è ferromagnetica</strong>`] },
        { task: `Il ferro ha una temperatura di Curie di 770 °C. Cosa succede quando viene riscaldato a 800 °C?`,
          steps: [`800 °C è sopra la temperatura di Curie.`, `I domini si disgregano e il ferro perde la magnetizzazione permanente.`, `<strong>Risultato: smette di essere ferromagnetico</strong>`] }
      ]
    },
    'v9-nanomaterialy': {
      title: `Nanomateriali e materiali quantistici`,
      summary: `Rapporto superficie-volume nei nanomateriali ed esempi di materiali quantistici.`,
      theory: [
        `<p>I nanomateriali hanno almeno una dimensione nell'intervallo di circa 1–100 nm. Al diminuire delle dimensioni cresce il rapporto superficie-volume e una grande frazione degli atomi si trova in superficie. Proprietà come colore, temperatura di fusione o reattività possono quindi differire sensibilmente da un pezzo grande della stessa sostanza.</p>`,
        `<p>Per un cubo con spigolo $a$ vale $S = 6a^2$ e $V = a^3$, quindi $\\dfrac{S}{V}=\\dfrac{6}{a}$. Il rapporto diminuisce al crescere dello spigolo, ed è per questo che lo spigolo sta al denominatore. Quando lo spigolo si riduce di dieci volte, il rapporto aumenta di dieci volte.</p>`,
        `<p><strong>I materiali quantistici</strong> mostrano effetti della meccanica quantistica su scala macroscopica. Esempi: il grafene (un singolo strato di atomi di carbonio con mobilità elettronica molto alta), i punti quantici (la loro dimensione determina il colore della luce emessa) e gli isolanti topologici.</p>`,
        { fig: 'v9v12-nano', caption: `Dividere un cubo in cubi più piccoli conserva il volume ma aumenta la superficie. Il rapporto S/V cresce al diminuire delle dimensioni.` }
      ],
      examples: [
        { task: `Un cubo ha spigolo $a=2\\,\\text{nm}$. Qual è il rapporto $S/V$?`,
          steps: [`$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.`, `$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.`, `<strong>Risultato: 3 nm⁻¹</strong>`] },
        { task: `Come cambia il rapporto $S/V$ se lo spigolo viene raddoppiato?`,
          steps: [`$S/V = 6/a$ è inversamente proporzionale allo spigolo.`, `Raddoppiare lo spigolo dimezza il rapporto.`, `<strong>Risultato: si dimezza</strong>`] }
      ]
    },
    'v10-hviezdy': {
      title: `Formazione, evoluzione e struttura delle stelle`,
      summary: `Come si forma una stella, perché resta in equilibrio e come la sua luminosità dipende dal raggio e dalla temperatura.`,
      theory: [
        `<p>Una stella si forma da una regione addensata di gas e polvere interstellari, la cosiddetta nebulosa. La gravità comprime il materiale e il gas si riscalda. Quando la temperatura nel nucleo raggiunge circa decine di milioni di kelvin, ha inizio la fusione termonucleare, nella quale l'idrogeno si trasforma in elio.</p>`,
        `<p><strong>Perché la stella non collassa?</strong> La gravità cerca di comprimere la stella verso l'interno, mentre la pressione del gas caldo e della radiazione agisce in direzione opposta. Quando questi due effetti sono in equilibrio, parliamo di <em>equilibrio idrostatico</em>. La stella è stabile finché questo equilibrio si mantiene.</p>`,
        `<p><strong>La luminosità</strong> $L$ è la potenza totale irradiata dalla stella. Secondo la legge di Stefan–Boltzmann $L=4\\pi R^2\\sigma T^4$, dove $R$ è il raggio e $T$ la temperatura superficiale. La luminosità cresce con il quadrato del raggio ma con la quarta potenza della temperatura, quindi una piccola variazione di temperatura modifica sensibilmente la luminosità.</p>`,
        `<p>Le stelle si collocano nel <strong>diagramma di Hertzsprung–Russell</strong>: sull'asse orizzontale c'è la temperatura (o il colore), su quello verticale la luminosità. La maggior parte delle stelle, incluso il Sole, si trova nella sequenza principale, dove la stella brucia idrogeno nel nucleo.</p>`,
        { fig: 'v9v12-hr', caption: `Diagramma di Hertzsprung–Russell: le stelle della sequenza principale bruciano idrogeno, i giganti sono più luminosi e le nane bianche sono più deboli a temperatura elevata.` }
      ],
      examples: [
        { task: `Una stella ha un raggio tre volte quello del Sole e una temperatura superficiale doppia. Quante volte è più luminosa?`,
          steps: [
            `Rapporto delle luminosità: $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.`,
            `$=3^2\\cdot 2^4=9\\cdot 16=144$.`,
            `<strong>Risultato: 144 volte</strong>`
          ] }
      ]
    },
    'v10-galaxie': {
      title: `Galassie e la loro evoluzione`,
      summary: `I principali tipi di galassie e come si differenziano per stelle, gas e forma.`,
      theory: [
        `<p>Una galassia è un sistema legato dalla gravità di stelle, gas, polvere e materia oscura. Le galassie si dividono principalmente in base alla forma: <strong>ellittiche</strong> (lisce, composte da stelle vecchie), <strong>a spirale</strong> (disco piatto con bracci) e <strong>irregolari</strong>.</p>`,
        `<p>La forma di una galassia è strettamente legata alla quantità di gas che vi rimane. Il gas è la materia prima per le nuove stelle: nei bracci delle spirali nascono continuamente giovani stelle blu, mentre nelle galassie ellittiche il gas è quasi esaurito e la formazione stellare si è affievolita.</p>`,
        `<p>Le galassie crescono aggregando gradualmente materia e spesso si accrescono attraverso <strong>collisioni e fusioni</strong> con altre galassie. L'interazione gravitazionale può rimodellare la forma di entrambe e innescare una nuova ondata di formazione stellare.</p>`
      ],
      examples: [
        { task: `Una galassia ha forma ellittica liscia e quasi nessun gas. Quali stelle prevalgono in essa?`,
          steps: [`La formazione stellare in una galassia dipende dalla riserva di gas.`, `Senza gas non nascono nuove stelle, restano quelle vecchie, rossastre.`, `<strong>Risultato: stelle vecchie</strong>`] }
      ]
    },
    'v10-cierne-diery': {
      title: `Buchi neri e stelle di neutroni`,
      summary: `Che cosa determina il raggio di un buco nero e perché, dopo l'esaurimento del combustibile, si forma una stella di neutroni o un buco nero.`,
      theory: [
        `<p>Quando una stella di massa sufficiente esaurisce il combustibile nucleare, il nucleo collassa. Se la massa residua non supera circa 1,4 masse solari, si forma una <strong>stella di neutroni</strong>: una sfera densa con raggio di circa 10 km, sostenuta dalla pressione dei neutroni.</p>`,
        `<p>Un <strong>buco nero</strong> si forma se la massa è maggiore. Nelle sue vicinanze la gravità è così forte che nemmeno la luce può sfuggire oltre il confine detto <em>orizzonte degli eventi</em>. Il raggio di questo confine è il raggio di Schwarzschild.</p>`,
        `<p>Il raggio di Schwarzschild è $r_s=\\frac{2GM}{c^2}$, dove $G$ è la costante gravitazionale, $M$ la massa e $c$ la velocità della luce. Per la massa del Sole vale circa $2{,}95\\,\\text{km}$. Il raggio è proporzionale alla massa, quindi un buco nero due volte più pesante ha un orizzonte due volte più grande.</p>`,
        { fig: 'v9v12-cierna-diera', caption: `Il raggio di Schwarzschild è proporzionale alla massa. Un buco nero due volte più pesante ha un orizzonte due volte più grande.` }
      ],
      examples: [
        { task: `Qual è il raggio di Schwarzschild di un buco nero di massa $5\\,M_\\odot$?`,
          steps: [`$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.`, `$r_s\\approx 14{,}75\\,\\text{km}$.`, `<strong>Risultato: circa 14,75 km</strong>`] }
      ]
    },
    'v10-exoplanety': {
      title: `Esopianeti e sistemi planetari`,
      summary: `Come gli astronomi trovano pianeti intorno ad altre stelle e che cosa ricavano dalle osservazioni.`,
      theory: [
        `<p>Un <strong>esopianeta</strong> è un pianeta che orbita intorno a una stella diversa dal Sole. Raramente si vede direttamente, quindi lo si cerca indirettamente, più spesso con il metodo del transito o misurando il moto della stella.</p>`,
        `<p><strong>Metodo del transito:</strong> quando un pianeta passa davanti alla sua stella, la luminosità di quest'ultima cala brevemente. La diminuzione è proporzionale all'area che il pianeta copre: $\\Delta\\text{jas}=\\left(\\frac{r_p}{R}\\right)^2$. Attenzione, è il quadrato del rapporto dei raggi.</p>`,
        `<p><strong>Metodo Doppler:</strong> il pianeta attira gravitazionalmente la stella, che si sposta leggermente avanti e indietro rispetto all'osservatore. Lo spostamento delle righe spettrali rivela questo moto, anche quando il pianeta non è visibile.</p>`,
        { fig: 'v9v12-tranzit', caption: `Durante il transito di un pianeta la luminosità della stella cala brevemente del rapporto delle aree, cioè di (r_p/R)².` }
      ],
      examples: [
        { task: `Un pianeta ha un raggio pari a un decimo del raggio della sua stella. Di quanto percento cala la luminosità della stella durante il transito?`,
          steps: [`$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.`, `La luminosità cala di $1\\,\\%$.`, `<strong>Risultato: 1%</strong>`] }
      ]
    },
    'v10-rozpinanie': {
      title: `Espansione dell'universo`,
      summary: `Legge di Hubble: più una galassia è lontana, più velocemente si allontana da noi.`,
      theory: [
        `<p>Edwin Hubble scoprì che gli spettri delle galassie lontane sono spostati verso il rosso. Questo <em>spostamento verso il rosso</em> (redshift) significa che le galassie si allontanano da noi. Più una galassia è lontana, maggiore è il suo spostamento.</p>`,
        `<p><strong>Legge di Hubble:</strong> $v=H_0\\,d$, dove $v$ è la velocità di allontanamento, $d$ la distanza e $H_0$ la costante di Hubble. Il suo valore è circa $70\\,\\text{km/s/Mpc}$, dove $1\\,\\text{Mpc}\\approx 3{,}26$ milioni di anni luce.</p>`,
        `<p>È importante capire che <strong>non sono le galassie a muoversi nello spazio</strong>, ma è lo spazio stesso tra loro a espandersi. Per questo le galassie più lontane si allontanano più in fretta, anche se non hanno una velocità propria.</p>`,
        { fig: 'v9v12-hubble', caption: `Legge di Hubble: la velocità di allontanamento delle galassie è proporzionale alla loro distanza.` }
      ],
      examples: [
        { task: `Una galassia dista $100\\,\\text{Mpc}$. Qual è la sua velocità di allontanamento?`,
          steps: [`$v=H_0\\,d=70\\cdot 100$.`, `<strong>Risultato: 7000 km/s</strong>`] }
      ]
    },
    'v10-velky-tresk': {
      title: `Big Bang e radiazione cosmica di fondo a microonde`,
      summary: `Come l'universo è emerso da una fase calda e perché oggi osserviamo una debole radiazione proveniente da tutte le direzioni.`,
      theory: [
        `<p>Secondo il modello del <strong>Big Bang</strong> l'universo era un tempo molto denso e caldo. Da allora si espande e si raffredda. Non si è trattato di un'esplosione nello spazio vuoto, ma dell'espansione dello spazio stesso.</p>`,
        `<p>Poco dopo l'inizio l'universo era pieno di radiazione e divenne trasparente quando si formarono gli atomi. Da allora questa radiazione si è solo stirata, e oggi la vediamo come <strong>radiazione cosmica di fondo a microonde</strong> con una temperatura di circa $2{,}725\\,\\text{K}$.</p>`,
        `<p>L'espansione aumenta le lunghezze d'onda della radiazione nella stessa proporzione della scala dell'universo. Perciò in passato la temperatura della radiazione era proporzionale a $(1+z)$, dove $z$ è lo spostamento verso il rosso. A $z=1$ la temperatura era il doppio di quella odierna.</p>`,
        { fig: 'v9v12-natiahnutie', caption: `L'espansione dell'universo allunga la lunghezza d'onda della radiazione, perciò il fondo a microonde odierno ha una temperatura più bassa.` }
      ],
      examples: [
        { task: `Quale era la temperatura della radiazione allo spostamento verso il rosso $z=3$?`,
          steps: [`$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.`, `$=10{,}9\\,\\text{K}$.`, `<strong>Risultato: circa 10,9 K</strong>`] }
      ]
    },
    'v10-temna-hmota': {
      title: `Materia oscura ed energia oscura`,
      summary: `Le prove dell'esistenza di materia ed energia invisibili e la loro quota della densità totale dell'universo.`,
      theory: [
        `<p><strong>La materia oscura</strong> è legata alla gravità, ma non emette né assorbe luce. La prova è la velocità delle stelle ai bordi delle galassie, che senza di essa sarebbe troppo alta perché la galassia restasse unita.</p>`,
        `<p><strong>L'energia oscura</strong> è la componente che accelera l'espansione dell'universo. Le osservazioni di supernove lontane hanno mostrato che oggi l'espansione sta accelerando.</p>`,
        `<p>Le quote dell'universo attuale sono circa: materia ordinaria $\\approx 5\\,\\%$, materia oscura $\\approx 27\\,\\%$ ed energia oscura $\\approx 68\\,\\%$. Se l'universo è piatto, la densità totale è $\\Omega=1$ e vale $\\Omega_\\Lambda=1-\\Omega_m$.</p>`,
        { fig: 'v9v12-zlozenie', caption: `Quote dell'universo attuale: materia ordinaria circa il 5 %, materia oscura 27 %, energia oscura 68 %.` }
      ],
      examples: [
        { task: `La densità della materia è $\\Omega_m=0{,}3$. Quale quota forma l'energia oscura in un universo piatto?`,
          steps: [`$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.`, `<strong>Risultato: 0,7</strong>`] }
      ]
    },
    'v10-kozmologicke-modely': {
      title: `Modelli cosmologici dell'universo`,
      summary: `Come la densità totale determina se l'universo è aperto, piatto o chiuso.`,
      theory: [
        `<p>Un modello cosmologico descrive la geometria e l'evoluzione dell'universo. La grandezza chiave è il rapporto tra la densità media totale $\\rho$ e la <em>densità critica</em> $\\rho_c$, indicato con $\\Omega=\\rho/\\rho_c$.</p>`,
        `<ol>
        <li>$\\Omega &lt; 1$: universo <strong>aperto</strong>, che si espande per sempre.</li>
        <li>$\\Omega = 1$: universo <strong>piatto</strong>, il cui spazio ha geometria euclidea.</li>
        <li>$\\Omega &gt; 1$: universo <strong>chiuso</strong>, che ha curvatura positiva.</li>
      </ol>`,
        `<p>Le osservazioni della radiazione di fondo mostrano che l'universo attuale è molto vicino a essere piatto. Il modello moderno, che include l'energia oscura, prevede quindi una densità totale vicina a uno.</p>`
      ],
      examples: [
        { task: `L'universo ha $\\Omega=0{,}4$. Qual è il suo modello?`,
          steps: [`Confrontiamo: $0{,}4&lt;1$.`, `<strong>Risultato: universo aperto</strong>`] }
      ]
    },
    'v11-hydrostatika': {
      title: `Idrostatica`,
      summary: `La pressione in un liquido fermo dipende solo dalla profondità e dalla densità, non dalla forma del recipiente.`,
      theory: [
        `<p><strong>L'idrostatica</strong> studia i liquidi in quiete. La pressione in un liquido alla profondità $h$ è $p=\\rho g h$, dove $\\rho$ è la densità del liquido e $g$ l'accelerazione di gravità. Si tratta della <em>pressione relativa</em>, cioè della pressione sopra quella atmosferica.</p>`,
        `<p>La pressione non dipende dalla forma del recipiente. In un recipiente largo e in uno stretto della stessa profondità la pressione sul fondo è la stessa. Questo paradosso apparente si spiega col fatto che il peso del liquido è sostenuto dalle pareti del recipiente, non dal fondo.</p>`,
        `<p>La pressione totale (assoluta) è $p=p_0+\\rho g h$, dove $p_0$ è la pressione atmosferica. La differenza di pressione in un liquido è proporzionale alla differenza di altezza, perciò la pressione aumenta verso il basso.</p>`,
        `<p><strong>Principio di Pascal:</strong> la pressione esercitata su un liquido chiuso si trasmette in egual misura in tutte le direzioni. Viene usata nei sollevatori idraulici, dove una piccola forza su un piccolo pistone solleva un grande carico su un pistone grande.</p>`,
        { fig: 'v9v12-nadoba', caption: `La pressione in un liquido dipende dalla profondità h, non dalla forma del recipiente. Sul fondo di entrambi i recipienti la pressione è la stessa.` }
      ],
      examples: [
        { task: `Qual è la pressione relativa dell'acqua alla profondità di $4\\,\\text{m}$? La densità dell'acqua è $1000\\,\\text{kg/m}^3$, $g=9{,}81\\,\\text{m/s}^2$.`,
          steps: [`$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.`, `<strong>Risultato: 39,24 kPa</strong>`] }
      ]
    },
    'v11-tlak-vztlak': {
      title: `Pressione e spinta di Archimede`,
      summary: `Principio di Archimede: un corpo immerso subisce una spinta verso l'alto uguale al peso del liquido spostato.`,
      theory: [
        `<p>Un corpo immerso in un liquido è alleggerito da una forza diretta verso l'alto. Questa <strong>spinta idrostatica</strong> è data dal principio di Archimede: $F_{vz}=\\rho_k\\,g\\,V$, dove $\\rho_k$ è la densità del liquido e $V$ il volume della parte immersa del corpo.</p>`,
        `<p>La spinta non dipende dalla profondità né dalla densità del corpo, ma solo dal volume del liquido spostato. Si chiama peso del liquido spostato.</p>`,
        `<p>Il galleggiamento dipende dal confronto delle densità. Un corpo con densità minore di quella del liquido galleggia e affonda solo quanto basta perché il liquido spostato abbia un peso uguale a quello dell'intero corpo. Un corpo con densità maggiore affonda sul fondo.</p>`,
        { fig: 'obr-vztlak', caption: `La spinta F_vz è diretta verso l'alto e il peso F_g verso il basso. Un corpo immerso è alleggerito del peso del liquido spostato.` }
      ],
      examples: [
        { task: `Un corpo di volume $3\\,\\text{dm}^3$ è immerso interamente in acqua. Qual è la spinta?`,
          steps: [`$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.`, `$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.`, `<strong>Risultato: 29,43 N</strong>`] }
      ]
    },
    'v11-kontinuita': {
      title: `Equazione di continuità`,
      summary: `Se il liquido non fuoriesce né si accumula lungo il flusso, il prodotto di sezione e velocità è costante.`,
      theory: [
        `<p>In un flusso stazionario di un liquido incomprimibile la massa non si accumula né scompare. Perciò attraverso ogni sezione deve passare nell'unità di tempo lo stesso volume: $S_1 v_1 = S_2 v_2 = \\text{cost.}$</p>`,
        `<p>La grandezza $Q=S\\,v$ si chiama <strong>portata volumetrica</strong>. Dove la tubazione è più stretta, l'acqua scorre più veloce. Per questo un fiume accelera in un tratto stretto e rallenta in una pianura ampia.</p>`,
        `<p>L'equazione di continuità è la legge di conservazione della massa per un flusso di liquido. Vale esattamente per un liquido incomprimibile e in modo approssimato per i gas a basse velocità.</p>`,
        { fig: 'v9v12-kontinuita', caption: `Per un liquido incomprimibile vale S₁v₁ = S₂v₂. Dove la sezione è minore, il liquido scorre più veloce.` }
      ],
      examples: [
        { task: `Una tubazione si restringe da una sezione di $6\\,\\text{cm}^2$ a $2\\,\\text{cm}^2$. L'acqua nel tratto più largo scorre alla velocità di $1{,}5\\,\\text{m/s}$. Qual è la velocità nel tratto più stretto?`,
          steps: [`$S_1 v_1=S_2 v_2$, quindi $v_2=\\frac{6\\cdot 1{,}5}{2}$.`, `<strong>Risultato: 4,5 m/s</strong>`] }
      ]
    },
    'v11-bernoulli': {
      title: `Equazione di Bernoulli`,
      summary: `L'energia in un liquido in movimento si conserva: dove la velocità è maggiore, la pressione è minore.`,
      theory: [
        `<p><strong>L'equazione di Bernoulli</strong> esprime la conservazione dell'energia per un liquido ideale, incomprimibile e senza attrito in un flusso: $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{cost.}$ I termini a sinistra sono la pressione, l'energia cinetica e quella potenziale per unità di volume.</p>`,
        `<p>Per una tubazione orizzontale ($h$ è uguale ovunque) vale $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$. Se in un punto la velocità aumenta, la pressione lì diminuisce.</p>`,
        `<p>Questo fenomeno si chiama <strong>effetto Venturi</strong> e viene sfruttato nei carburatori, nei misuratori di portata di Venturi e nelle pompe per vuoto. Si manifesta soprattutto nei tratti strozzati di una tubazione.</p>`,
        { fig: 'v9v12-venturi', caption: `Nel punto strozzato la velocità aumenta e la pressione cala. I livelli nei tubi manometrici lo mostrano.` }
      ],
      examples: [
        { task: `Dell'acqua scorre in una tubazione orizzontale. Nel punto stretto la velocità è $6\\,\\text{m/s}$, nel punto largo $2\\,\\text{m/s}$. Qual è la differenza di pressione $p_1-p_2$ in kPa?`,
          steps: [`$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.`, `$=16\\,000\\,\\text{Pa}$.`, `<strong>Risultato: 16 kPa</strong>`] }
      ]
    },
    'v11-viskozita': {
      title: `Viscosità e flusso laminare`,
      summary: `Attrito interno dei liquidi, legge di Stokes e resistenza al moto lento di una piccola sfera.`,
      theory: [
        `<p><strong>La viscosità</strong> (viscosità dinamica $\\eta$) è una misura dell'attrito interno di un liquido. Il miele ha una viscosità maggiore dell'acqua, perché i suoi strati scorrono l'uno sull'altro con più difficoltà. L'unità è $\\text{Pa}\\cdot\\text{s}$.</p>`,
        `<p><strong>Il flusso laminare</strong> è regolare: gli strati di liquido scorrono l'uno accanto all'altro senza mescolarsi. Durante il moto lento di un corpo in un liquido nasce una resistenza proporzionale alla velocità: <em>legge di Stokes</em> $F=6\\pi\\eta r v$ per una sfera di raggio $r$.</p>`,
        `<p>Attenzione alla differenza tra raggio e diametro: la formula contiene il raggio $r$. Se si sostituisce il diametro, la forza risulta doppia.</p>`,
        { fig: 'v9v12-vrstvy', caption: `Nel flusso laminare gli strati di liquido scorrono l'uno sull'altro e l'attrito interno causa la resistenza.` }
      ],
      examples: [
        { task: `Una sfera di raggio $1\\,\\text{cm}$ si muove alla velocità di $0{,}5\\,\\text{m/s}$ in un liquido con $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$. Qual è la resistenza?`,
          steps: [`$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.`, `$F\\approx 0{,}188\\,\\text{N}$.`, `<strong>Risultato: circa 188 mN</strong>`] }
      ]
    },
    'v11-turbulencia': {
      title: `Turbolenza`,
      summary: `Il numero di Reynolds decide se il flusso è regolare o vorticoso.`,
      theory: [
        `<p>A velocità e diametri maggiori il flusso laminare si rompe in un flusso <strong>turbolento</strong>: si formano vortici e mescolamento, che cambiano in modo casuale nel tempo e nello spazio.</p>`,
        `<p>Il tipo di flusso è determinato dal <strong>numero di Reynolds</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$, dove $d$ è una dimensione caratteristica (ad esempio il diametro di una tubazione). Per una tubazione, in modo approssimato: $\\text{Re}&lt;2300$ laminare, $\\text{Re}&gt;4000$ turbolento, e tra i due il flusso di transizione.</p>`,
        `<p>La turbolenza aumenta la resistenza del flusso e il mescolamento delle sostanze. In pratica cerchiamo quindi di mantenere il flusso regolare, ad esempio sulle ali degli aerei, oppure al contrario provochiamo turbolenza perché il combustibile si mescoli meglio.</p>`,
        { fig: 'v9v12-profil', caption: `Nel flusso laminare la velocità sulla sezione ha profilo parabolico; nel flusso turbolento il profilo è più piatto.` }
      ],
      examples: [
        { task: `Dell'acqua ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) scorre in una tubazione di diametro $0{,}05\\,\\text{m}$ alla velocità di $1\\,\\text{m/s}$. Qual è il numero di Reynolds?`,
          steps: [`$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.`, `<strong>Risultato: Re = 50 000, il flusso è turbolento</strong>`] }
      ]
    },
    'v11-aerodynamika': {
      title: `Flusso dei gas e aerodinamica`,
      summary: `Resistenza aerodinamica e portanza: da che cosa dipendono e perché crescono con il quadrato della velocità.`,
      theory: [
        `<p>A velocità ordinarie i gas sono quasi incomprimibili e per molti aspetti si descrivono con le stesse leggi dei liquidi. I corpi che si muovono nell'aria sono frenati dalla <strong>resistenza aerodinamica</strong>.</p>`,
        `<p>La resistenza è data dalla formula $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$, dove $c_w$ è il coefficiente di resistenza (la forma del corpo), $\\rho$ la densità dell'aria, $S$ l'area frontale e $v$ la velocità. La resistenza cresce con il <strong>quadrato</strong> della velocità: velocità doppia significa resistenza quadrupla.</p>`,
        `<p>L'ala di un aereo o di un veicolo genera una <strong>portanza</strong>, perché sopra di essa il flusso è più veloce e la pressione più bassa (Bernoulli). La forma aerodinamica si progetta quindi in modo che la resistenza sia minima e la portanza massima.</p>`,
        { fig: 'v9v12-krido', caption: `Sopra l'ala il flusso è più veloce e la pressione più bassa, sotto l'ala la pressione è più alta. La differenza di pressione crea la portanza.` }
      ],
      examples: [
        { task: `Un'automobile ha un'area frontale di $2\\,\\text{m}^2$, un coefficiente di resistenza $c_w=0{,}5$ e viaggia a $20\\,\\text{m/s}$. Qual è la resistenza dell'aria? La densità dell'aria è $1{,}2\\,\\text{kg/m}^3$.`,
          steps: [`$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.`, `$=0{,}6\\cdot 400=240\\,\\text{N}$.`, `<strong>Risultato: 240 N</strong>`] }
      ]
    },
    'v12-modelovanie': {
      title: `Modellazione matematica dei fenomeni fisici`,
      summary: `Come costruire un modello matematico a partire da un ragionamento fisico e verificare che corrisponda all'osservazione.`,
      theory: [
        `<p>Un <strong>modello</strong> è una descrizione matematica semplificata di un fenomeno. Prima individuiamo le grandezze che influenzano il risultato, poi scriviamo le relazioni tra di esse e infine verifichiamo se il calcolo concorda con la misura o con un'aspettativa ragionevole.</p>`,
        `<p>Un esempio tipico è il <strong>decadimento radioattivo</strong>. Il numero di nuclei non decaduti diminuisce in proporzione al loro numero attuale, il che porta a una legge esponenziale. Con un tempo di dimezzamento $T_{1/2}$ vale $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Il modello ha dei limiti: presuppone che il decadimento sia casuale e indipendente dall'ambiente. Una misura reale può quindi mostrare piccole deviazioni, che si compensano statisticamente per un grande numero di nuclei.</p>`,
        { fig: 'v9v12-rozpad', caption: `A ogni tempo di dimezzamento il numero di nuclei non decaduti si dimezza; la legge esponenziale è N = N₀(1/2)^(t/T½).` }
      ],
      examples: [
        { task: `Un campione contiene inizialmente $800$ nuclei e il tempo di dimezzamento è di $10$ anni. Quanti nuclei restano dopo $30$ anni?`,
          steps: [`Dopo $30$ anni sono trascorsi $3$ tempi di dimezzamento.`, `$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.`, `<strong>Risultato: 100 nuclei</strong>`] }
      ]
    },
    'v12-diferencialne-rovnice': {
      title: `Equazioni differenziali`,
      summary: `Le equazioni del moto sono equazioni differenziali; le risolviamo per integrazione e con una condizione iniziale.`,
      theory: [
        `<p>La seconda legge di Newton $F=ma$ è un'equazione differenziale, perché l'accelerazione è la derivata della velocità: $a=\\frac{dv}{dt}$. Le grandezze qui non compaiono direttamente, ma attraverso la loro <em>variazione</em> nel tempo.</p>`,
        `<p>La <strong>soluzione</strong> si trova per integrazione. Da $\\frac{dv}{dt}=a$ otteniamo $v(t)=at+C$. La costante $C$ si determina dalla <em>condizione iniziale</em>, ad esempio $v(0)=v_0$. Perciò un'equazione differenziale si risolve sempre insieme a una condizione di questo tipo.</p>`,
        `<p>Le equazioni differenziali descrivono quasi tutti i fenomeni dinamici: il moto dei corpi, i circuiti elettrici, la propagazione del calore o delle onde. La loro soluzione è unica solo quando conosciamo abbastanza condizioni iniziali.</p>`,
        { fig: 'v9v12-rovnice', caption: `L'equazione dv/dt = a ha infinite soluzioni v = at + C. La condizione iniziale ne seleziona una.` }
      ],
      examples: [
        { task: `Risolvi $\\frac{dv}{dt}=2$ con la condizione $v(0)=5$. Qual è la velocità al tempo $t=4$?`,
          steps: [`$v(t)=2t+C$, e da $v(0)=5$ si ha $C=5$.`, `$v(t)=2t+5$, quindi $v(4)=8+5$.`, `<strong>Risultato: 13</strong>`] }
      ]
    },
    'v12-vektory': {
      title: `Analisi vettoriale e tensori`,
      summary: `Prodotto scalare e vettoriale, che descrivono il lavoro di una forza e il momento di una forza; il tensore come generalizzazione.`,
      theory: [
        `<p>Un <strong>vettore</strong> ha un modulo e una direzione; lo scriviamo mediante le sue componenti $\\vec a=(a_1,a_2,a_3)$. I vettori si sommano componente per componente. Il modulo è $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$.</p>`,
        `<p>Il <strong>prodotto scalare</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ è un numero. Si usa per il lavoro di una forza: $W=\\vec F\\cdot\\vec s$. Vale anche $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$, quindi è nullo per vettori reciprocamente perpendicolari.</p>`,
        `<p>Il <strong>prodotto vettoriale</strong> $\\vec a\\times\\vec b$ è un vettore perpendicolare a entrambi i vettori originali, ad esempio il momento di una forza $\\vec M=\\vec r\\times\\vec F$. Il <strong>tensore</strong> è una generalizzazione: ad esempio il tensore degli sforzi in un solido associa a ogni piano un vettore di forza.</p>`,
        { fig: 'v9v12-moment', caption: `Il momento della forza M = r × F è un vettore perpendicolare sia al vettore posizione r sia alla forza F.` }
      ],
      examples: [
        { task: `Calcola $\\vec a\\cdot\\vec b$ per $\\vec a=(1,2,3)$ e $\\vec b=(4,-5,6)$.`,
          steps: [`$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.`, `$=4-10+18=12$.`, `<strong>Risultato: 12</strong>`] }
      ]
    },
    'v12-fourier': {
      title: `Analisi di Fourier`,
      summary: `Un segnale periodico si scompone in componenti sinusoidali e si trova quali frequenze contiene.`,
      theory: [
        `<p>Ogni andamento periodico di periodo $T$ si può scrivere come somma di seni e coseni con multipli della frequenza fondamentale $\\omega=\\frac{2\\pi}{T}$. Questa somma è una <strong>serie di Fourier</strong>; i suoi termini si chiamano componenti armoniche.</p>`,
        `<p>I coefficienti dello sviluppo si trovano per integrazione: moltiplichiamo il segnale per la funzione appropriata e integriamo il risultato su un periodo. Grazie all'<em>ortogonalità</em> di seni e coseni, gli altri termini si annullano.</p>`,
        `<p>Un segnale ad onda quadra di ampiezza $A$ ha solo armoniche dispari, e l'ampiezza della $n$-esima è $\\frac{4A}{n\\pi}$. Lo sviluppo di Fourier mostra quali frequenze occorre trasmettere perché il segnale non si deformi, ed è la base dell'analisi spettrale.</p>`,
        { fig: 'v9v12-fourier', caption: `Un segnale ad onda quadra si può comporre con dei seni. La prima armonica ha ampiezza 4A/π.` }
      ],
      examples: [
        { task: `Qual è l'ampiezza della prima armonica di un segnale ad onda quadra di ampiezza $A=3$?`,
          steps: [`Per la prima armonica $n=1$ e la formula $\\frac{4A}{n\\pi}$.`, `$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.`, `<strong>Risultato: circa 3,82</strong>`] }
      ]
    },
    'v12-numericke-metody': {
      title: `Soluzione numerica di problemi fisici`,
      summary: `Quando un'equazione non si risolve con una formula, la risolviamo a piccoli passi, ad esempio con il metodo di Eulero.`,
      theory: [
        `<p>Molte equazioni differenziali non hanno soluzione in forma di formula. In tali casi le risolviamo <strong>numericamente</strong>: il tempo si divide in passi di lunghezza $h$ e in ogni passo stimiamo la variazione della grandezza.</p>`,
        `<p><strong>Il metodo di Eulero</strong> per l'equazione $\\frac{dy}{dt}=f(t,y)$ calcola $y_{n+1}=y_n+h\\,f(t_n,y_n)$. È semplice, ma l'errore diminuisce solo linearmente con il passo, perciò in pratica si usano metodi più precisi, ad esempio Runge–Kutta.</p>`,
        `<p>La scelta del passo è un compromesso: un passo piccolo dà un risultato più preciso ma richiede più calcoli. Un passo troppo grande può causare instabilità, quando le deviazioni crescono e la soluzione diventa priva di senso.</p>`,
        { fig: 'v9v12-euler', caption: `Il metodo di Eulero con passo h = 0,5 approssima l'equazione dy/dt = y con una poligonale che giace sotto la curva esatta.` }
      ],
      examples: [
        { task: `Risolvi $\\frac{dy}{dt}=-y$ con $y(0)=10$ con il metodo di Eulero e passo $h=0{,}1$. Qual è il valore di $y_1$?`,
          steps: [`$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.`, `$=10-1=9$.`, `<strong>Risultato: 9</strong>`] }
      ]
    },
    'v12-pocitacove-simulacie': {
      title: `Simulazioni al calcolatore`,
      summary: `Una simulazione procede a passi; la lunghezza del passo e il tempo totale determinano il numero di calcoli.`,
      theory: [
        `<p>Una <strong>simulazione al calcolatore</strong> applica ripetutamente la legge del moto su piccoli passi temporali. All'inizio abbiamo lo stato del sistema (posizioni, velocità) e a ogni passo si calcola un nuovo stato.</p>`,
        `<p>Il numero di passi per un tempo $t$ e un passo $h$ è $N=\\frac{t}{h}$. Se dimezziamo il passo, il calcolo richiede il doppio del tempo, ma la precisione aumenta. Questo non si può scegliere a mano; al calcolatore è una decisione fondamentale.</p>`,
        `<p>Le simulazioni si usano ovunque non ci sia una soluzione in forma di formula: il moto dei pianeti in un sistema di tre corpi, il flusso d'aria intorno a un'ala o la propagazione del calore in un materiale.</p>`
      ],
      examples: [
        { task: `Una simulazione di caduta deve durare $10\\,\\text{s}$ e il passo è di $0{,}05\\,\\text{s}$. Quanti passi servono?`,
          steps: [`$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.`, `<strong>Risultato: 200 passi</strong>`] }
      ]
    },
    'v12-konecne-prvky': {
      title: `Metodo degli elementi finiti`,
      summary: `Un corpo complesso si divide in elementi semplici, e le loro proprietà si raccolgono in un unico sistema di equazioni.`,
      theory: [
        `<p>Il <strong>metodo degli elementi finiti (FEM)</strong> divide una struttura complessa in molte parti semplici (elementi), ad esempio triangoli. Per ogni elemento scriviamo una semplice equazione che lega le forze e gli spostamenti dei suoi nodi.</p>`,
        `<p>Gli elementi vengono poi uniti in un <strong>sistema globale di equazioni</strong>, che viene risolto dal calcolatore. Per molle o aste: nel collegamento <em>in serie</em> le cedevolezze si sommano, quindi $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$. Nel collegamento <em>in parallelo</em> si sommano le rigidezze: $k=k_1+k_2$.</p>`,
        `<p>Il FEM si usa nell'analisi di resistenza, nel flusso dei fluidi e nella conduzione del calore. Il risultato è approssimato; la sua precisione cresce con il numero e la finezza degli elementi.</p>`,
        { fig: 'v9v12-pruziny', caption: `Le molle collegate in serie hanno rigidezza minore; le molle collegate in parallelo hanno rigidezze che si sommano.` }
      ],
      examples: [
        { task: `Due molle con rigidezze $k_1=6\\,\\text{N/m}$ e $k_2=3\\,\\text{N/m}$ sono collegate in serie. Qual è la rigidezza equivalente?`,
          steps: [`$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.`, `$k=2\\,\\text{N/m}$.`, `<strong>Risultato: 2 N/m</strong>`] }
      ]
    },
    'v12-komplexne-systemy': {
      title: `Modellazione di sistemi complessi`,
      summary: `Molte particelle semplici con mutue interazioni portano a un comportamento complesso, e il numero di interazioni cresce rapidamente.`,
      theory: [
        `<p>Un <strong>sistema complesso</strong> è costituito da molte parti che interagiscono tra loro. Il comportamento dell'insieme spesso non deriva dalla somma delle proprietà delle singole parti, ma dalle loro mutue interazioni. Si parla di comportamento <em>emergente</em>.</p>`,
        `<p>Il numero di interazioni reciproche cresce rapidamente. Per $N$ particelle, dove ciascuna agisce su ogni altra una volta, nascono $\\binom{N}{2}=\\frac{N(N-1)}{2}$ coppie. Per $N=100$ sono già $4950$ interazioni.</p>`,
        `<p>Per la modellazione si usano, ad esempio, i <strong>modelli ad agenti</strong> (ogni particella segue regole semplici), oppure le simulazioni <strong>Monte Carlo</strong>, che campionano casualmente gli stati possibili. Il risultato è sempre una stima che va verificata.</p>`
      ],
      examples: [
        { task: `Nel sistema ci sono $5$ particelle e ciascuna agisce su ogni altra una volta. Quante coppie diverse nascono?`,
          steps: [`$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.`, `<strong>Risultato: 10 coppie</strong>`] }
      ]
    }
  }
});
