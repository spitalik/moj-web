/* Italiano: lezioni delle classi 4–6 (js/rocniky/r4.js, r5.js, r6.js). Struttura e chiavi: js/content-i18n.js. */
CONTENT_I18N.add('it', {
  lessons: {
    'r4-svetlo-tien': {
      title: `Luce, ombra e sorgenti di luce`,
      summary: `Distingui una sorgente di luce da un oggetto illuminato e spieghi come si forma un'ombra.`,
      theory: [
        `<p>La luce viaggia in linea retta. Un oggetto che emette da sé la luce è una <strong>sorgente di luce</strong>, per esempio il sole, una lampadina o una candela.
       La Luna, un tavolo o un libro non emettono luce. La riflettono soltanto, ed è per questo che li vediamo.</p>`,
        `<p>Quando la luce colpisce un oggetto <strong>opaco</strong>, dietro di esso si forma un'<strong>ombra</strong>. La luce non può raggiungere la zona dietro l'oggetto,
       perché non riesce a piegarsi intorno ad esso.</p>`,
        `<ul>
         <li>Gli oggetti opachi, per esempio il legno o la pietra, bloccano la luce e proiettano un'ombra scura.</li>
         <li>Gli oggetti trasparenti, per esempio il vetro limpido o l'acqua, lasciano passare la luce. L'ombra dietro di essi è debole o assente.</li>
       </ul>`,
        `<p>La dimensione dell'ombra dipende dalla distanza. Quando l'oggetto si avvicina alla sorgente di luce, l'ombra diventa più grande.
       Quando si allontana dalla sorgente, l'ombra diventa più piccola.</p>`,
        { fig: 'obr-tien', caption: `Un'ombra si forma dove la luce non arriva, perché un corpo opaco la blocca.` }
      ],
      examples: [
        { task: `Quale oggetto è una sorgente di luce: una candela, un libro o un albero?`,
          steps: [`Una sorgente di luce emette luce. Un libro e un albero riflettono soltanto la luce.`, `Una candela brucia ed emette luce.`, `<strong>Risultato: la candela</strong>`] },
        { task: `Perché in una giornata di sole c'è un'ombra dietro un albero?`,
          steps: [`Il sole è una sorgente di luce.`, `L'albero è opaco, quindi la luce non riesce a passarci attraverso.`, `<strong>Risultato: la luce non raggiunge la zona dietro l'albero, quindi lì si forma un'ombra.</strong>`] }
      ]
    },
    'r4-zvuk': {
      title: `Il suono e come si produce`,
      summary: `Spieghi che il suono nasce dalle vibrazioni dei corpi e distingui l'altezza del suono dalla sua intensità.`,
      theory: [
        `<p>Il suono nasce dalla <strong>vibrazione</strong>, cioè dal movimento rapido avanti e indietro di un corpo. Quando colpiamo un diapason o pizzichiamo una corda tesa di chitarra,
       il corpo vibra velocemente e mette in movimento l'aria circostante.</p>`,
        `<p>La vibrazione arriva al nostro orecchio attraverso l'aria come <strong>onda sonora</strong>. Il suono ha bisogno di un mezzo materiale, per esempio aria, acqua o un solido.
       Nel vuoto non si propaga, quindi nello spazio cosmico non si sentono le esplosioni.</p>`,
        `<ul>
         <li><strong>L'altezza</strong> del suono dipende dalla velocità della vibrazione. Una vibrazione più veloce suona più acuta.</li>
         <li><strong>L'intensità</strong> dipende dall'ampiezza delle vibrazioni. Un'oscillazione più ampia suona più forte.</li>
       </ul>`,
        `<p>Nell'aria il suono viaggia a circa $340\\,\\text{m/s}$. La luce viaggia molto più velocemente, quasi istantaneamente.
       Per questo durante un temporale vediamo prima il lampo e solo dopo sentiamo il tuono.</p>`,
        { fig: 'r1r5-zvuk-vlna', caption: `Un tono più acuto ha una vibrazione più veloce (periodo più breve). Un suono più forte ha un'oscillazione più ampia, cioè un'ampiezza maggiore.` }
      ],
      examples: [
        { task: `Perché durante un temporale vediamo prima il lampo e solo dopo sentiamo il tuono?`,
          steps: [`La luce viaggia quasi istantaneamente.`, `Il suono viaggia nell'aria molto più lentamente.`, `<strong>Risultato: il suono ci raggiunge più tardi della luce.</strong>`] },
        { task: `Che cosa deve fare un corpo per produrre un suono?`,
          steps: [`Il suono nasce dalla vibrazione di un corpo.`, `<strong>Risultato: il corpo deve vibrare.</strong>`] }
      ]
    },
    'r4-magnety': {
      title: `Le proprietà magnetiche degli oggetti`,
      summary: `Distingui gli oggetti che un magnete attrae da quelli che non attrae.`,
      theory: [
        `<p>Un magnete <strong>attrae</strong> gli oggetti di ferro, nichel e cobalto, per esempio un chiodo o una graffetta d'acciaio. Questi metalli si chiamano magnetici.
       Il legno, la plastica, il vetro e la maggior parte degli altri metalli, per esempio il rame, non vengono attratti da un magnete.</p>`,
        `<p>Ogni magnete ha due <strong>poli</strong>: nord e sud. I poli opposti si attraggono, mentre i poli uguali si respingono.</p>`,
        `<p>L'effetto magnetico attraversa anche la carta o un sottile strato di plastica. Per questo un magnete può attrarre un chiodo che si trova sotto un foglio di carta.</p>`,
        `<p>Una proprietà di un oggetto si scopre con un semplice esperimento: avviciniamo un magnete e osserviamo se l'oggetto si muove.</p>`,
        { fig: 'obr-magnet', caption: `Le linee del campo di una barra magnetica escono dal polo nord N ed entrano nel polo sud S.` }
      ],
      examples: [
        { task: `Quali oggetti attrae un magnete: un chiodo, una gomma e un righello di plastica?`,
          steps: [`Il chiodo è di ferro, e il magnete lo attrae.`, `La gomma e il righello di plastica non vengono attratti da un magnete.`, `<strong>Risultato: solo il chiodo.</strong>`] },
        { task: `Due magneti vengono avvicinati con i poli opposti rivolti l'uno verso l'altro. Che cosa succede?`,
          steps: [`I poli opposti si attraggono.`, `<strong>Risultato: i magneti si attraggono.</strong>`] }
      ]
    },
    'r4-elektricke-zariadenia': {
      title: `Semplici dispositivi elettrici`,
      summary: `Conosci le parti di un semplice circuito elettrico e che cosa fa ciascuna di esse.`,
      theory: [
        `<p>Un semplice circuito elettrico è formato da una <strong>sorgente</strong> (una batteria), un <strong>utilizzatore</strong> (una lampadina, un campanello, un ventilatore),
       <strong>conduttori</strong> (di solito fili di rame) e un <strong>interruttore</strong>.</p>`,
        `<ul>
         <li>La sorgente fornisce energia elettrica.</li>
         <li>L'utilizzatore trasforma l'energia elettrica in un'altra forma, per esempio in luce, calore o movimento.</li>
         <li>L'interruttore chiude o apre il circuito.</li>
       </ul>`,
        `<p>La corrente elettrica scorre solo in un circuito <strong>chiuso</strong>. Se il circuito è interrotto, per esempio da un interruttore aperto, la lampadina non si accende.</p>`,
        `<p>I conduttori lasciano passare la corrente elettrica, per esempio i metalli. Gli isolanti, per esempio la plastica o la gomma, non la lasciano passare. Per questo i fili hanno un rivestimento di plastica e le impugnature degli attrezzi sono di gomma.</p>`,
        { fig: 'r1r5-obvod-spinac', caption: `Con l'interruttore aperto il circuito è interrotto, non scorre corrente e la lampadina non si accende.` }
      ],
      examples: [
        { task: `Quale parte del circuito fornisce energia?`,
          steps: [`La sorgente fornisce energia elettrica, mentre l'utilizzatore la consuma.`, `<strong>Risultato: la batteria (la sorgente).</strong>`] },
        { task: `Perché la lampadina non si accende dopo che l'interruttore è stato spento?`,
          steps: [`L'interruttore aperto interrompe il circuito.`, `In un circuito interrotto la corrente non scorre.`, `<strong>Risultato: la lampadina non si accende, perché non scorre corrente.</strong>`] }
      ]
    },
    'r4-energia': {
      title: `L'energia e il suo utilizzo`,
      summary: `Riconosci in quale altra forma di energia si trasforma l'energia in dispositivi comuni.`,
      theory: [
        `<p><strong>L'energia</strong> non si può creare dal nulla né distruggere. Cambia soltanto da una forma all'altra. L'unità di misura dell'energia è il joule, simbolo $\\text{J}$.</p>`,
        `<ul>
         <li><strong>Energia elettrica</strong>: una presa di corrente, una batteria, un caricabatterie.</li>
         <li><strong>Energia chimica</strong>: immagazzinata in una batteria o nel cibo.</li>
         <li><strong>Energia di movimento</strong>: una persona che corre, un ventilatore che gira.</li>
         <li><strong>Energia luminosa</strong>: il sole, una lampadina, un display.</li>
         <li><strong>Energia termica</strong>: acqua calda, un calorifero caldo.</li>
         <li><strong>Energia sonora</strong>: musica da un altoparlante, una voce.</li>
       </ul>`,
        `<p>I dispositivi di solito non trasformano l'energia in una sola forma. Una lampadina emette luce, ma la maggior parte della sua energia si trasforma in calore. Per questo, dopo essere stata accesa, è calda.</p>`,
        `<p>Un ventilatore trasforma l'energia elettrica nel movimento delle pale. Un altoparlante trasforma l'energia elettrica in suono.</p>`,
        { fig: 'r1r5-premeny-energie', caption: `Un ventilatore trasforma l'energia elettrica in movimento, una lampadina la trasforma in luce e calore.` }
      ],
      examples: [
        { task: `Quale trasformazione di energia compie un ventilatore elettrico?`,
          steps: [`Il ventilatore è un utilizzatore di energia elettrica.`, `Il motorino gira e le pale si muovono.`, `<strong>Risultato: l'energia elettrica si trasforma in energia di movimento.</strong>`] },
        { task: `Quale trasformazione di energia compie una lampadina?`,
          steps: [`La lampadina riceve energia elettrica.`, `Emette luce e nello stesso tempo si riscalda.`, `<strong>Risultato: l'energia elettrica si trasforma in energia luminosa e termica.</strong>`] }
      ]
    },
    'r4-bezpecnost': {
      title: `Comportamento sicuro con gli apparecchi elettrici`,
      summary: `Sai quale comportamento con gli apparecchi elettrici è sicuro e quale no.`,
      theory: [
        `<p>L'elettricità è utile, ma può essere pericolosa. La corrente che attraversa il corpo può causare una lesione grave.
       Per questo maneggia gli apparecchi elettrici solo seguendo le istruzioni degli adulti.</p>`,
        `<ol>
         <li>Non toccare mai una presa o una spina con le mani bagnate.</li>
         <li>Stacca un apparecchio afferrando la spina, non il cavo.</li>
         <li>Se il cavo è danneggiato o i fili sono scoperti, non usare l'apparecchio e avvisa un adulto.</li>
       </ol>`,
        `<p>L'acqua conduce molto bene la corrente elettrica, quindi unire acqua e apparecchi elettrici è molto pericoloso.
       Non usare l'asciugacapelli, il caricabatterie né altri apparecchi in bagno o vicino all'acqua.</p>`,
        `<p>Se vedi una persona che tocca un filo sotto tensione, non toccarla. Per prima cosa chiama un adulto o il numero di emergenza,
       in modo che la corrente venga disattivata.</p>`
      ],
      examples: [
        { task: `Come si stacca correttamente un ferro da stiro dalla presa?`,
          steps: [`Tirare il cavo può danneggiare i fili.`, `Il modo corretto è afferrare la spina e sfilarla.`, `<strong>Risultato: tiriamo la spina, non il cavo.</strong>`] },
        { task: `Puoi caricare il telefono in un bagno umido?`,
          steps: [`L'acqua conduce bene la corrente elettrica.`, `<strong>Risultato: no, caricare in ambienti umidi non è sicuro.</strong>`] }
      ]
    },
    'r5-vlastnosti-latok': {
      title: `Proprietà delle sostanze e dei corpi`,
      summary: `Distingui una sostanza da un corpo e conosci le proprietà fondamentali dei materiali.`,
      theory: [
        `<p>Una <strong>sostanza</strong> è un materiale di cui è fatto qualcosa, per esempio legno, ferro o acqua.
       Un <strong>corpo</strong> è un oggetto particolare fatto di una o più sostanze, per esempio un tavolo, una chiave o una bottiglia.</p>`,
        `<p>Le proprietà delle sostanze si scoprono osservando e misurando: colore, lucentezza, durezza, elasticità, solubilità in acqua oppure se conducono il calore e la corrente elettrica.</p>`,
        `<ul>
         <li><strong>Durezza</strong>: resistenza ai graffi.</li>
         <li><strong>Elasticità</strong>: la capacità di tornare alla forma originale dopo essere stata premuta o piegata.</li>
         <li><strong>Solubilità</strong>: la capacità di sciogliersi in acqua. Il sale si scioglie, la sabbia no.</li>
       </ul>`,
        `<p>Corpi fatti della stessa sostanza possono avere forme e dimensioni diverse. Le proprietà della sostanza però non cambiano: due pezzi di legno hanno le stesse proprietà del legno.</p>`
      ],
      examples: [
        { task: `La chiave è un corpo o una sostanza?`,
          steps: [`La chiave è un oggetto particolare.`, `<strong>Risultato: un corpo, fatto di metallo.</strong>`] },
        { task: `Quale sostanza si scioglie in acqua: il sale o la sabbia?`,
          steps: [`Il sale si scioglie in acqua.`, `La sabbia non si scioglie in acqua.`, `<strong>Risultato: il sale.</strong>`] }
      ]
    },
    'r5-skupenstva': {
      title: `Sostanze solide, liquide e gassose`,
      summary: `Confronti le sostanze solide, liquide e gassose in base alla forma e al volume.`,
      theory: [
        `<p>Le sostanze si presentano in tre <strong>stati</strong> fondamentali: <strong>solido</strong>, <strong>liquido</strong> e <strong>gassoso</strong>.
       Li distinguiamo in base al fatto che abbiano una forma e un volume fissi.</p>`,
        `<ul>
         <li><strong>Un solido</strong>: forma e volume fissi, per esempio una pietra o un cubetto di ghiaccio.</li>
         <li><strong>Un liquido</strong>: volume fisso, ma la forma cambia secondo il recipiente, per esempio l'acqua in un bicchiere.</li>
         <li><strong>Un gas</strong>: né forma né volume fissi, riempie tutto il recipiente, per esempio l'aria in un palloncino.</li>
       </ul>`,
        `<p>Le particelle dei solidi sono vicine tra loro, quindi sono difficili da comprimere. Le particelle dei gas sono lontane tra loro, quindi i gas si possono comprimere.</p>`,
        `<p><strong>Esperimento:</strong> versiamo dell'acqua in un bicchiere alto e poi in uno largo. L'acqua assume sempre la forma del recipiente, ma il suo volume non cambia.</p>`,
        { fig: 'r1r5-castice-skupenstva', caption: `I solidi hanno le particelle disposte in modo ordinato e fisso, i liquidi hanno le particelle vicine ma non ordinate, i gas hanno le particelle lontane tra loro.` }
      ],
      examples: [
        { task: `Quali proprietà ha l'acqua in un bicchiere?`,
          steps: [`L'acqua è un liquido, cambia forma secondo il recipiente.`, `Il suo volume non cambia.`, `<strong>Risultato: volume fisso, forma variabile.</strong>`] },
        { task: `Perché l'aria si può comprimere dentro un pallone da calcio?`,
          steps: [`Le particelle di un gas sono lontane tra loro.`, `<strong>Risultato: quando viene compressa, le particelle si avvicinano tra loro.</strong>`] }
      ]
    },
    'r5-telesa': {
      title: `Corpi e i loro materiali`,
      summary: `Spieghi di che cosa sono fatti i corpi e scegli un materiale adatto a un determinato scopo.`,
      theory: [
        `<p>Un corpo è un oggetto fatto di sostanze. Molti corpi sono composti da più sostanze. Le forbici hanno lame di metallo e impugnature di plastica.</p>`,
        `<p>Nella realizzazione degli oggetti scegliamo la sostanza in base a ciò che vogliamo dall'oggetto. Se ci serve che l'oggetto sia trasparente, scegliamo il vetro.
       Se vogliamo che l'oggetto non si riscaldi facilmente, scegliamo un materiale che conduce male il calore.</p>`,
        `<ul>
         <li>I metalli conducono bene il calore e la corrente elettrica, quindi sono adatti per pentole e cavi.</li>
         <li>Le plastiche e il legno conducono male il calore, quindi sono adatti per i manici delle pentole.</li>
       </ul>`,
        `<p>Quando valutiamo un corpo, chiediti sempre: di quale sostanza è fatto e perché proprio questa sostanza è stata scelta?</p>`
      ],
      examples: [
        { task: `Perché i manici delle pentole sono di plastica o di legno?`,
          steps: [`La plastica e il legno conducono male il calore.`, `<strong>Risultato: il manico non si scalda così in fretta come il metallo, quindi è facile da tenere in mano.</strong>`] },
        { task: `Un bicchiere è un corpo o una sostanza?`,
          steps: [`Il bicchiere è un oggetto particolare.`, `<strong>Risultato: un corpo.</strong>`] }
      ]
    },
    'r5-hustota': {
      title: `Massa, volume e densità: nozioni di base`,
      summary: `Distingui la massa dal volume e calcoli la densità di una sostanza.`,
      theory: [
        `<p><strong>La massa</strong> $m$ indica quanta sostanza contiene un corpo. La sua unità di misura è il grammo $\\text{g}$ oppure il chilogrammo $\\text{kg}$. La massa si misura con la bilancia.</p>`,
        `<p><strong>Il volume</strong> $V$ è lo spazio che occupa un corpo. Le unità sono per esempio $\\text{cm}^3$ oppure il millilitro, dove $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       Il volume di un liquido si misura con un cilindro graduato.</p>`,
        `<p><strong>La densità</strong> $\\rho$ indica quanta massa ha un $\\text{cm}^3$ di sostanza. La calcoliamo come rapporto: $\\rho = \\frac{m}{V}$.
       La densità è una proprietà della sostanza, non del corpo. L'acqua ha una densità di circa $1\\,\\text{g/cm}^3$.</p>`,
        `<ul>
         <li>Un corpo con densità maggiore di quella dell'acqua affonda, per esempio una pietra.</li>
         <li>Un corpo con densità minore di quella dell'acqua galleggia, per esempio il legno.</li>
       </ul>`,
        { fig: 'r1r5-hustota-voda', caption: `Un corpo con densità maggiore di quella dell'acqua affonda (una pietra), un corpo con densità minore galleggia (il legno).` }
      ],
      examples: [
        { task: `Un cubo ha una massa di $48\\,\\text{g}$ e un volume di $16\\,\\text{cm}^3$. Qual è la sua densità?`,
          steps: [`$\\rho=\\frac{m}{V}=\\frac{48}{16}$`, `<strong>Risultato: $3\\,\\text{g/cm}^3$</strong>`] },
        { task: `Una sostanza ha una densità di $2\\,\\text{g/cm}^3$ e un corpo fatto di essa ha un volume di $10\\,\\text{cm}^3$. Qual è la sua massa?`,
          steps: [`$m=\\rho\\cdot V=2\\cdot 10$`, `<strong>Risultato: $20\\,\\text{g}$</strong>`] }
      ]
    },
    'r5-merania': {
      title: `Misurare lunghezza, volume e massa`,
      summary: `Leggi correttamente il risultato di una misura e calcoli la differenza tra i valori misurati.`,
      theory: [
        `<p>La lunghezza si misura con un righello o con un metro a nastro. Appoggiamo lo zero della scala esattamente all'inizio del corpo e leggiamo la fine.
       Un errore comune è iniziare a misurare dal numero 1 invece che dallo zero.</p>`,
        `<p>Il volume di un liquido si misura con un cilindro graduato. Portiamo l'occhio all'altezza del liquido e leggiamo il bordo inferiore della superficie, il cosiddetto <strong>menisco</strong>.
       Se guardiamo dall'alto o dal basso, il risultato risulta falsato.</p>`,
        `<p>La massa si misura con la bilancia. Prima di misurare azzeriamo la bilancia, in modo da non contare la massa del recipiente.</p>`,
        `<p>Il volume di un corpo che affonda si può trovare con l'acqua: leggiamo il livello dell'acqua prima e dopo l'immersione. La differenza dei livelli è il volume del corpo.</p>`,
        { fig: 'r1r5-hladina', caption: `Il volume di un corpo immerso è la differenza tra i livelli dell'acqua dopo e prima dell'immersione.` }
      ],
      examples: [
        { task: `Un'asticella è appoggiata su un righello da 2 cm a 9 cm. Qual è la sua lunghezza?`,
          steps: [`La lunghezza è la differenza tra il numero finale e quello iniziale: $9 - 2$.`, `<strong>Risultato: 7 cm</strong>`] },
        { task: `Nel cilindro ci sono $50\\,\\text{ml}$ di acqua. Dopo aver immerso un cubo, il livello sale a $72\\,\\text{ml}$. Qual è il volume del cubo?`,
          steps: [`Il volume del cubo è l'aumento del livello: $72 - 50$.`, `<strong>Risultato: $22\\,\\text{ml}$</strong>`] }
      ]
    },
    'r5-jednotky': {
      title: `Unità di misura delle grandezze fisiche`,
      summary: `Converti le unità di lunghezza, massa e volume.`,
      theory: [
        `<p>Una grandezza fisica è ciò che misuriamo, per esempio lunghezza, massa, tempo o temperatura. Ogni grandezza ha un'<strong>unità di misura</strong>
       con cui la confrontiamo. Le unità fondamentali del Sistema Internazionale SI sono per esempio il metro $\\text{m}$, il chilogrammo $\\text{kg}$ e il secondo $\\text{s}$.</p>`,
        `<ul>
         <li>Lunghezza: $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Massa: $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Volume: $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
        `<p>La conversione in un'unità <strong>più piccola</strong> dà un numero più grande, quindi moltiplichiamo: $2\\,\\text{km}=2000\\,\\text{m}$.
       La conversione in un'unità <strong>più grande</strong> dà un numero più piccolo, quindi dividiamo: $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
        `<p>Attenzione a un errore comune: $1\\,\\text{m}$ non è $10\\,\\text{cm}$, ma $100\\,\\text{cm}$.</p>`
      ],
      examples: [
        { task: `Converti $3{,}5\\,\\text{m}$ in centimetri.`,
          steps: [`Un metro ha 100 cm, e la conversione in un'unità più piccola si fa moltiplicando il numero.`, `$3{,}5\\cdot 100=350$`, `<strong>Risultato: 350 cm</strong>`] },
        { task: `Converti $4\\,500\\,\\text{g}$ in chilogrammi.`,
          steps: [`Un chilogrammo ha 1000 g, e la conversione in un'unità più grande si fa dividendo il numero.`, `$4500 : 1000=4{,}5$`, `<strong>Risultato: $4{,}5\\,\\text{kg}$</strong>`] }
      ]
    },
    'r5-teplota': {
      title: `Temperatura e misura della temperatura`,
      summary: `Leggi la temperatura in gradi Celsius e calcoli le sue variazioni.`,
      theory: [
        `<p>La temperatura si misura con un <strong>termometro</strong>. Sulla scala Celsius ci sono due punti fissi: il ghiaccio che si scioglie ha una temperatura di $0\\,{}^\\circ\\text{C}$,
       e l'acqua bolle a $100\\,{}^\\circ\\text{C}$ alla pressione normale.</p>`,
        `<ul>
         <li>Il termometro contiene un liquido, per esempio alcol, che si dilata quando viene riscaldato. Leggiamo la temperatura in base alla lunghezza della colonna.</li>
         <li>Lasciamo il termometro al suo posto per almeno alcuni minuti, in modo che indichi la temperatura corretta.</li>
         <li>Il termometro non deve toccare il fondo del recipiente, perché indicherebbe la temperatura del fondo e non quella del liquido.</li>
       </ul>`,
        `<p>La temperatura cambia. Se la temperatura sale, aggiungiamo la variazione. Se scende, la sottraiamo. Le temperature negative sono sotto zero,
       per esempio $-5\\,{}^\\circ\\text{C}$ è di 5 gradi più fredda del ghiaccio che si scioglie.</p>`,
        { fig: 'r1r5-teplomer', caption: `La scala Celsius ha due punti fissi: il ghiaccio che si scioglie a 0 °C e l'acqua che bolle a 100 °C. Le temperature negative sono sotto lo zero.` }
      ],
      examples: [
        { task: `Al mattino erano $-4\\,{}^\\circ\\text{C}$, e a mezzogiorno la temperatura era salita di $9\\,{}^\\circ\\text{C}$. Qual è la temperatura a mezzogiorno?`,
          steps: [`$-4+9=5$`, `<strong>Risultato: $5\\,{}^\\circ\\text{C}$</strong>`] },
        { task: `L'acqua aveva una temperatura di $20\\,{}^\\circ\\text{C}$ ed è stata riscaldata fino a $100\\,{}^\\circ\\text{C}$. Di quanti gradi si è riscaldata?`,
          steps: [`$100-20=80$`, `<strong>Risultato: di $80\\,{}^\\circ\\text{C}$</strong>`] }
      ]
    },
    'r5-pozorovanie': {
      title: `Osservazione, misura ed esperimenti semplici`,
      summary: `Pianifichi un semplice esperimento, registri i risultati e trai una conclusione.`,
      theory: [
        `<p>Quando indaghiamo procediamo passo dopo passo: osserviamo, poniamo una domanda, formuliamo un'<strong>ipotesi</strong>, eseguiamo l'esperimento,
       registriamo i risultati e formuliamo una conclusione. L'ipotesi è una supposizione verificabile, non una conclusione definitiva.</p>`,
        `<ol>
         <li>Stabilisci che cosa vuoi scoprire.</li>
         <li>Nell'esperimento cambi una sola cosa alla volta.</li>
         <li>Scrivi subito i risultati in una tabella.</li>
         <li>Ripeti l'esperimento in modo che i risultati si possano confrontare.</li>
       </ol>`,
        `<p>La grandezza che cambiamo si chiama <strong>variabile</strong>. Le cose che lasciamo uguali sono quelle controllate. Se cambiamo più cose insieme, non possiamo capire che cosa ha causato il risultato.</p>`,
        `<p>I valori misurati si scrivono sempre con l'unità di misura, per esempio $25\\,\\text{cm}$, non solo $25$.</p>`
      ],
      examples: [
        { task: `Vuoi scoprire se il sale si scioglie più in fretta in acqua calda che in acqua fredda. Qual è la variabile?`,
          steps: [`Cambiamo la temperatura dell'acqua.`, `Lasciamo uguali la quantità di sale e quella di acqua.`, `<strong>Risultato: la variabile è la temperatura dell'acqua.</strong>`] },
        { task: `Come si può aumentare la precisione di una misura?`,
          steps: [`Ripetiamo l'esperimento più volte.`, `Calcoliamo la media dei risultati.`, `<strong>Risultato: ripetiamo l'esperimento e calcoliamo la media dei risultati.</strong>`] }
      ]
    },
    'r6-hustota': {
      title: `Densità delle sostanze e come calcolarla`,
      summary: `Che cosa indica la densità e come la calcoliamo a partire da massa e volume.`,
      theory: [
        `<p>Due corpi di uguali dimensioni possono avere masse molto diverse. Una sfera di piombo è molto più pesante di una sfera di legno dello stesso volume.
       La differenza non è causata dalla forma né dalle dimensioni, ma dalla <strong>sostanza</strong> di cui è fatto il corpo. Questa proprietà della sostanza è descritta dalla <strong>densità</strong>.</p>`,
        `<p><strong>La densità</strong> indica quale massa ha un'unità di volume di una data sostanza. Si indica con $\\rho$ (ro) e si calcola con la formula
       $\\rho = \\frac{m}{V}$, dove $m$ è la massa e $V$ il volume. Dunque dividiamo la massa per il volume.</p>`,
        `<ul>
         <li>Unità: $\\text{g/cm}^3$ (in pratica) e $\\text{kg/m}^3$ (nel SI).</li>
         <li>Conversione: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, perché $1\\,\\text{g}=0{,}001\\,\\text{kg}$ e $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
        `<p>La densità è una proprietà della sostanza, non del corpo. Tutti i pezzi della stessa sostanza hanno la stessa densità, siano grandi o piccoli.
       Ci aiuta a distinguere sostanze che sembrano simili e più avanti spiega perché alcuni corpi galleggiano e altri affondano.</p>`,
        `<p>Densità approssimative: acqua $1\\,\\text{g/cm}^3$, olio circa $0{,}9\\,\\text{g/cm}^3$, alluminio $2{,}7\\,\\text{g/cm}^3$, ferro $7{,}8\\,\\text{g/cm}^3$.
       Il legno è più leggero dell'acqua, per esempio il pino ha una densità di circa $0{,}5\\,\\text{g/cm}^3$.</p>`,
        { fig: 'r6r9-hustota', caption: `La densità indica quale massa ha un'unità di volume di una sostanza. A parità di volume, il ferro è molto più pesante dell'acqua.` }
      ],
      examples: [
        { task: `Un blocco di alluminio ha una massa di $135\\,\\text{g}$ e un volume di $50\\,\\text{cm}^3$. Calcola la sua densità.`,
          steps: [`Usiamo la formula $\\rho = \\frac{m}{V}$.`, `$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$`, `<strong>Risultato: 2,7 g/cm³</strong>`] },
        { task: `Che massa hanno $200\\,\\text{cm}^3$ di acqua? La densità dell'acqua è $1\\,\\text{g/cm}^3$.`,
          steps: [`Dalla formula $\\rho = \\frac{m}{V}$ otteniamo $m = \\rho\\cdot V$.`, `$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$`, `<strong>Risultato: 200 g</strong>`] }
      ]
    },
    'r6-vlastnosti': {
      title: `Proprietà di liquidi e gas`,
      summary: `In che cosa differiscono liquidi e gas per forma, volume e comprimibilità.`,
      theory: [
        `<p>Le sostanze si presentano in tre stati: solido, liquido e gassoso. I corpi solidi hanno forma e volume fissi.
       <strong>I liquidi</strong> hanno un volume fisso, ma adattano la forma al recipiente. <strong>I gas</strong> non hanno né forma né volume fissi: si espandono e riempiono tutto il recipiente.</p>`,
        `<p>Perché è così? Le particelle di un liquido sono vicine e si tengono insieme, ma possono scorrere l'una sull'altra, quindi il liquido fluisce.
       Le particelle di un gas sono lontane tra loro e si muovono liberamente, quindi si distribuiscono in tutto lo spazio disponibile.</p>`,
        `<p><strong>Comprimibilità:</strong> i liquidi praticamente non si possono comprimere, perché le loro particelle sono già vicine. I gas si possono comprimere,
       perché tra le particelle c'è molto spazio libero. L'aria in una pompa da bicicletta quindi si comprime, mentre l'acqua in un recipiente chiuso no.</p>`,
        `<ul>
         <li><strong>Forma:</strong> il liquido si adatta al recipiente, il gas riempie tutto il recipiente.</li>
         <li><strong>Volume:</strong> il liquido ha un volume fisso, il volume del gas è uguale a quello del recipiente.</li>
         <li><strong>Comprimibilità:</strong> il liquido è quasi incomprimibile, il gas si può comprimere.</li>
       </ul>`,
        `<p>Liquidi e gas insieme si chiamano <strong>fluidi</strong>. I fluidi si possono versare e scorrere, quindi in essi osserviamo la pressione e la spinta di galleggiamento.</p>`,
        { fig: 'r6r9-castice', caption: `Le particelle di un solido restano in posizioni fisse, quelle di un liquido restano unite e scorrono l'una sull'altra, quelle di un gas si muovono liberamente.` }
      ],
      examples: [
        { task: `Spiega perché l'aria in una siringa si può comprimere, ma l'acqua no.`,
          steps: [`Le particelle dell'aria sono lontane tra loro, con spazio libero tra di esse.`, `Le particelle dell'acqua sono vicine, non c'è spazio per avvicinarle ulteriormente.`, `<strong>Risultato: l'aria è comprimibile, l'acqua quasi no.</strong>`] },
        { task: `Un litro d'acqua viene versato da un recipiente largo in un bicchiere alto e stretto. Quale volume ha ora l'acqua?`,
          steps: [`L'acqua cambia forma secondo il recipiente.`, `Il volume di un liquido non cambia quando viene versato.`, `<strong>Risultato: ancora 1 litro.</strong>`] }
      ]
    },
    'r6-tlak': {
      title: `Pressione nei liquidi e nei gas`,
      summary: `La pressione come forza per unità di superficie e la pressione nel liquido, che cresce con la profondità.`,
      theory: [
        `<p><strong>La pressione</strong> è la forza che agisce perpendicolarmente a una superficie, espressa per unità di area. Formula: $p=\\frac{F}{S}$, dove $F$ è la forza in newton
       e $S$ l'area della superficie in $\\text{m}^2$. L'unità di misura della pressione è il pascal: $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
        `<p>La stessa forza produce una pressione maggiore su una superficie più piccola. Per questo un chiodo appuntito entra facilmente nel legno e uno smussato no: sulla piccola punta la pressione è grande.</p>`,
        `<p><strong>La pressione nel liquido</strong> aumenta con la profondità. Più si scende, più liquido c'è sopra di noi, che preme sugli strati sottostanti.
       Formula: $p=\\rho\\cdot g\\cdot h$, dove $\\rho$ è la densità del liquido, $h$ la profondità sotto la superficie e $g\\approx 10\\,\\text{N/kg}$ (valore arrotondato per semplicità).</p>`,
        `<p>Il liquido preme sulle pareti del recipiente, sul fondo e verso l'alto. La pressione nel liquido agisce in tutte le direzioni allo stesso modo, alla stessa profondità.</p>`,
        `<p>Anche un gas in un recipiente chiuso preme sulle pareti in tutte le direzioni. Quando comprimiamo il gas, la sua pressione aumenta.</p>`,
        { fig: 'obr-tlak', caption: `La pressione in un liquido aumenta con la profondità: più si scende, maggiore è la forza che agisce sulla parete.` }
      ],
      examples: [
        { task: `Una forza di $600\\,\\text{N}$ agisce perpendicolarmente su una superficie di $0{,}5\\,\\text{m}^2$. Quale pressione provoca?`,
          steps: [`$p=\\frac{F}{S}=\\frac{600}{0{,}5}$`, `$p=1200\\,\\text{Pa}$`, `<strong>Risultato: 1200 Pa</strong>`] },
        { task: `Qual è la pressione nell'acqua alla profondità di $3\\,\\text{m}$? La densità dell'acqua è $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.`,
          steps: [`$p=\\rho\\cdot g\\cdot h$`, `$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$`, `<strong>Risultato: 30 000 Pa = 30 kPa</strong>`] }
      ]
    },
    'r6-atmosfera': {
      title: `Pressione atmosferica`,
      summary: `Perché l'aria preme su di noi e come cambia la pressione con l'altitudine.`,
      theory: [
        `<p>L'aria intorno alla Terra ha una massa, e perciò preme su di noi. Questa pressione si chiama <strong>pressione atmosferica</strong>. Al livello del mare è di circa $101\\,\\text{kPa}$,
       che corrisponde al peso dell'aria sopra un metro quadrato, cioè circa 10 tonnellate.</p>`,
        `<p>I meteorologi usano l'ettopascal: $1\\,\\text{hPa}=100\\,\\text{Pa}$, quindi $1\\,\\text{kPa}=10\\,\\text{hPa}$. La pressione normale è circa $1013\\,\\text{hPa}$.
       La pressione si misura con il <strong>barometro</strong>.</p>`,
        `<p>Perché possiamo bere con una cannuccia? Quando aspiriamo, riduciamo la pressione nella bocca. La pressione atmosferica agisce sulla superficie della bevanda e la spinge su nella cannuccia.
       Quindi non siamo noi a succhiare la bevanda: la spinge l'aria.</p>`,
        `<p>Con l'aumentare dell'altezza sul livello del mare la pressione diminuisce, perché sopra di noi c'è meno aria. Per questo in montagna la pressione dell'aria cala e l'acqua bolle a una temperatura più bassa.</p>`,
        { fig: 'r6r9-atmosfera', caption: `Più saliamo in alto, meno aria c'è sopra di noi, e quindi la pressione atmosferica diminuisce.` }
      ],
      examples: [
        { task: `Un barometro indica una pressione di $1013\\,\\text{hPa}$. Quanti kilopascal sono?`,
          steps: [`$1\\,\\text{kPa}=10\\,\\text{hPa}$, quindi dividiamo il risultato per dieci.`, `$1013 : 10 = 101{,}3$`, `<strong>Risultato: 101,3 kPa</strong>`] },
        { task: `Come cambia la pressione atmosferica quando saliamo su un'alta montagna?`,
          steps: [`Sopra di noi c'è meno aria che preme su di noi.`, `Quindi la pressione dell'aria diminuisce.`, `<strong>Risultato: la pressione diminuisce</strong>`] }
      ]
    },
    'r6-vztlak': {
      title: `Spinta di Archimede e galleggiamento dei corpi`,
      summary: `Perché un liquido rende i corpi più leggeri e quando un corpo galleggia.`,
      theory: [
        `<p>Una palla immersa nell'acqua risale in superficie. Il liquido agisce su un corpo immerso con una forza diretta verso l'alto. Questa forza si chiama <strong>spinta di Archimede</strong>.
       Nasce perché la pressione nel liquido aumenta con la profondità: la superficie inferiore del corpo è premuta più fortemente di quella superiore.</p>`,
        `<p><strong>Principio di Archimede:</strong> la spinta di Archimede è uguale al peso del liquido spostato dal corpo. Formula: $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       dove $\\rho_k$ è la densità del liquido e $V_p$ il volume della parte immersa del corpo.</p>`,
        `<ul>
         <li>Il peso del corpo è maggiore della spinta: il corpo affonda.</li>
         <li>Peso e spinta sono uguali: il corpo resta sospeso o galleggia immerso.</li>
         <li>La spinta è maggiore del peso: il corpo risale e galleggia in superficie, con solo una parte immersa.</li>
       </ul>`,
        `<p>Una nave d'acciaio galleggia perché è grande e cava. La sua densità media è minore di quella dell'acqua, quindi sposta una quantità d'acqua sufficiente a sostenere il proprio peso.</p>`,
        { fig: 'obr-vztlak', caption: `La spinta Fvz è diretta verso l'alto, il peso Fg verso il basso. Un corpo immerso appare più leggero del peso del liquido spostato.` }
      ],
      examples: [
        { task: `Un cubo con volume di $1\\,\\text{dm}^3$ è completamente immerso nell'acqua. L'acqua ha densità $1\\,\\text{kg/dm}^3$. Qual è la spinta di Archimede?`,
          steps: [`L'acqua spostata ha una massa di $\\rho\\cdot V = 1\\,\\text{kg}$.`, `Il suo peso è $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.`, `<strong>Risultato: la spinta di Archimede è 10 N.</strong>`] },
        { task: `Un corpo con massa di $3\\,\\text{kg}$ galleggia sull'acqua. Qual è l'intensità della spinta di Archimede?`,
          steps: [`Il corpo galleggia, quindi la spinta è uguale al suo peso.`, `$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$`, `<strong>Risultato: 30 N</strong>`] }
      ]
    },
    'r6-teplo': {
      title: `Temperatura, calore e scambio di calore`,
      summary: `La differenza tra temperatura e calore e la direzione in cui fluisce il calore.`,
      theory: [
        `<p><strong>La temperatura</strong> indica quanto è caldo un corpo. Si misura in gradi Celsius (°C). Più velocemente si muovono le particelle di una sostanza, più la sostanza è calda.
       Il termometro deve raggiungere la temperatura dell'ambiente, quindi indica la temperatura dell'ambiente.</p>`,
        `<p><strong>Il calore</strong> è l'energia che si trasferisce tra i corpi a causa di una differenza di temperatura. L'unità del calore è il joule (J).
       Il calore fluisce sempre da un corpo più caldo a uno più freddo, mai nel verso opposto. Il frigorifero è un'eccezione, perché per raffreddare serve del lavoro.</p>`,
        `<p><strong>Lo scambio di calore</strong> dura finché le temperature dei corpi non si uguagliano. Allora si ha <em>equilibrio termico</em>.
       Il calore si trasmette in tre modi: per <em>conduzione</em> (un cucchiaio di metallo nel tè), per <em>convezione</em> (liquidi e gas) e per <em>irraggiamento</em> (il calore del Sole).</p>`,
        `<p>Se mescoliamo quantità uguali di acqua a temperature diverse e trascuriamo le perdite di calore, la temperatura risultante è la media aritmetica delle due temperature.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: `Il calore fluisce da un corpo più caldo a uno più freddo. Si trasmette per conduzione, convezione o irraggiamento.` }
      ],
      examples: [
        { task: `Mescoliamo quantità uguali di acqua a 80 °C e a 20 °C. Quale sarà la temperatura risultante?`,
          steps: [`Con quantità uguali, la temperatura risultante è la media delle due temperature.`, `$\\frac{80+20}{2}=50$`, `<strong>Risultato: 50 °C</strong>`] },
        { task: `In quale direzione fluisce il calore tra una tazza di tè a 70 °C e l'aria a 22 °C?`,
          steps: [`Il calore fluisce sempre dal corpo più caldo a quello più freddo.`, `Il tè ha una temperatura più alta, quindi il calore passa dal tè all'aria.`, `<strong>Risultato: dal tè all'ambiente circostante</strong>`] }
      ]
    },
    'r6-skupenstva': {
      title: `Cambiamenti di stato delle sostanze`,
      summary: `Fusione, solidificazione, evaporazione, condensazione, sublimazione e che cosa succede alle particelle in ciascuna.`,
      theory: [
        `<p>Le sostanze si presentano allo stato solido, liquido e gassoso. Durante un cambiamento di stato la sostanza non diventa un'altra sostanza;
       cambiano soltanto la disposizione e il movimento delle sue particelle.</p>`,
        `<ul>
         <li><strong>Fusione</strong>: da solido a liquido (il ghiaccio si scioglie in acqua).</li>
         <li><strong>Solidificazione</strong>: da liquido a solido (l'acqua congela).</li>
         <li><strong>Evaporazione</strong>: da liquido a gas (il bucato bagnato si asciuga).</li>
         <li><strong>Condensazione</strong>: da gas a liquido (la rugiada sull'erba).</li>
         <li><strong>Sublimazione</strong>: da solido direttamente a gas (ghiaccio secco, naftalina).</li>
         <li><strong>Brinamento</strong>: da gas direttamente a solido (brina nel congelatore).</li>
       </ul>`,
        `<p><strong>Perché?</strong> Durante la fusione la sostanza deve assorbire energia, perché le sue particelle possano liberarsi dalla disposizione solida. Durante la solidificazione invece l'energia viene rilasciata.</p>`,
        `<ol>
         <li>Il ghiaccio alla temperatura di $-5\\,{}^\\circ\\text{C}$, quando viene riscaldato, si riscalda per prima cosa fino a $0\\,{}^\\circ\\text{C}$.</li>
         <li>A $0\\,{}^\\circ\\text{C}$ si scioglie, e la sua temperatura non cambia finché non si è sciolto del tutto.</li>
         <li>Solo dopo l'acqua si riscalda ulteriormente.</li>
       </ol>`,
        { fig: 'obr-skupenstva', caption: `Cambiamenti di stato: fusione, solidificazione, evaporazione e condensazione.` }
      ],
      examples: [
        { task: `L'acqua del congelatore diventa ghiaccio. Come si chiama questo processo?`,
          steps: [`L'acqua passa dallo stato liquido a quello solido.`, `Il passaggio dal liquido al solido si chiama solidificazione.`, `<strong>Risultato: solidificazione</strong>`] },
        { task: `Su una superficie fredda si forma la brina direttamente dal vapore acqueo, senza passare per lo stato liquido. Come si chiama questo processo?`,
          steps: [`Il vapore passa direttamente allo stato solido.`, `Il passaggio dal gas al solido si chiama brinamento.`, `<strong>Risultato: brinamento</strong>`] }
      ]
    },
    'r6-var': {
      title: `Evaporazione, condensazione ed ebollizione`,
      summary: `La differenza tra evaporazione ed ebollizione e perché i liquidi si raffreddano.`,
      theory: [
        `<p><strong>L'evaporazione</strong> avviene sulla superficie di un liquido a qualsiasi temperatura. Le particelle più veloci sfuggono dalla superficie verso l'ambiente.
       L'evaporazione è più rapida a temperatura più alta, su una superficie più ampia e con il vento, che porta via il vapore.</p>`,
        `<p><strong>L'evaporazione raffredda.</strong> Dal liquido escono le particelle più veloci, quindi il resto ha un'energia media più bassa.
       Per questo, dopo il bagno, ci rinfresca il vento: l'acqua evapora dalla pelle e sottrae calore.</p>`,
        `<p><strong>L'ebollizione</strong> è il passaggio di un liquido in gas in tutto il suo volume, non solo sulla superficie. Avviene a una certa <em>temperatura di ebollizione</em>, che dipende dalla pressione.
       Alla pressione normale l'acqua bolle a 100 °C. Su un'alta montagna la pressione è più bassa, quindi l'acqua bolle a una temperatura più bassa.</p>`,
        `<p><strong>La condensazione</strong> è il processo opposto: il vapore si trasforma in liquido. Durante la condensazione il calore viene rilasciato nell'ambiente,
       per questo una scottatura da vapore è più grave di una scottatura da acqua bollente. Rugiada, nebbia e nuvole si formano per condensazione del vapore acqueo.</p>`,
        { fig: 'r6r9-var', caption: `L'evaporazione avviene solo sulla superficie, mentre l'ebollizione avviene in tutto il volume del liquido, dove si formano bolle di vapore.` }
      ],
      examples: [
        { task: `Perché il bucato bagnato si asciuga più in fretta al sole e con il vento?`,
          steps: [`La temperatura più alta e il vento accelerano l'evaporazione.`, `Le particelle d'acqua del bucato sfuggono nell'aria più facilmente.`, `<strong>Risultato: il calore e il vento accelerano l'evaporazione.</strong>`] },
        { task: `L'acqua bolle a 100 °C alla pressione normale. A che temperatura bollirà sulla cima di un'alta montagna, dove la pressione è più bassa?`,
          steps: [`Più la pressione è bassa, più bassa è la temperatura di ebollizione.`, `Su un'alta montagna l'acqua bolle a una temperatura inferiore a 100 °C.`, `<strong>Risultato: a una temperatura inferiore a 100 °C</strong>`] }
      ]
    }
  }
});
