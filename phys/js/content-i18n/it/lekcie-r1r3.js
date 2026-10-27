/* Italiano: lezioni delle classi 1–3 (js/rocniky/r1.js, r2.js, r3.js). Struttura e chiavi: js/content-i18n.js. */
CONTENT_I18N.add('it', {
  lessons: {
    'r1-pozorovanie': {
      title: 'Osservazione di oggetti e fenomeni',
      summary: 'Osservando scopri le proprietà degli oggetti e distingui un oggetto da una sostanza.',
      theory: [
        `<p>Osservare significa guardare qualcosa con intenzione. Quando osserviamo usiamo i nostri <strong>sensi</strong>: vista, udito, tatto, olfatto e gusto.
       Gusto e olfatto non usiamo mai su sostanze sconosciute senza il permesso di un adulto.</p>`,
        `<p><strong>Un oggetto</strong> è qualcosa che possiamo vedere e nominare, per esempio una palla, una sedia o un libro.
       <strong>Una sostanza</strong> è ciò di cui è fatto un oggetto, per esempio il legno, il vetro o la plastica.</p>`,
        `<p>Quando descriviamo un oggetto parliamo delle sue <strong>proprietà</strong>: colore, forma, dimensione, peso, durezza o se è lucido.
       Una buona descrizione è precisa e permette di riconoscere l’oggetto da essa.</p>`,
        `<ul>
         <li>Un fenomeno è qualcosa che accade intorno a noi, per esempio la pioggia, lo scioglimento della neve o le foglie che cadono.</li>
         <li>Quando osserviamo ci chiediamo: che cosa vedo, che cosa sento e che cosa cambia?</li>
       </ul>`
      ],
      examples: [
        { task: 'Descrivi le proprietà di una palla.',
          steps: ['La palla è rotonda ed elastica.', 'Ha un colore vivace e rimbalza sul terreno.', '<strong>Risultato: un oggetto rotondo ed elastico che rimbalza.</strong>'] },
        { task: 'Il legno è un oggetto o una sostanza?',
          steps: ['Il legno non è una forma precisa, è un materiale.', 'Con il legno si può fare una sedia o un tavolo.', '<strong>Risultato: il legno è una sostanza.</strong>'] }
      ]
    },
    'r1-vlastnosti-materialov': {
      title: 'Proprietà dei materiali: durezza, elasticità, forma',
      summary: 'Confronti i materiali in base alla durezza, all’elasticità e al fatto che mantengano la forma.',
      theory: [
        `<p>I materiali sono diversi tra loro. Due proprietà importanti sono la <strong>durezza</strong> e l’<strong>elasticità</strong>.</p>`,
        `<ul>
         <li><strong>Un materiale duro</strong> si graffia o si schiaccia con difficoltà, per esempio la pietra o il metallo.</li>
         <li><strong>Un materiale morbido</strong> si taglia o si preme facilmente, per esempio il sapone o il legno tenero.</li>
         <li><strong>Un materiale elastico</strong> torna alla forma originale dopo essere stato premuto o allungato, per esempio la gomma o la molla.</li>
       </ul>`,
        `<p><strong>La forma</strong> di alcuni materiali si può cambiare facilmente. La plastilina o l’argilla restano nella nuova forma anche dopo che le lasciamo.
       Un materiale del genere non è elastico.</p>`,
        `<p><strong>Esperimento:</strong> prova a schiacciare una gomma, un pezzo di plastilina e un cubetto di legno. Annota quale torna alla forma originale.</p>`,
        { fig: 'r1r5-pruznost', caption: 'Una gomma elastica torna alla forma originale dopo essere stata schiacciata, la plastilina mantiene la nuova forma.' }
      ],
      examples: [
        { task: 'Quale materiale è più duro, la pietra o il sapone?',
          steps: ['La pietra si taglia con difficoltà, mentre il sapone si taglia facilmente.', '<strong>Risultato: la pietra è più dura.</strong>'] },
        { task: 'Quale materiale è elastico: la plastilina o la gomma?',
          steps: ['Dopo essere stata schiacciata, la gomma torna alla forma originale.', 'La plastilina mantiene la forma dopo essere stata schiacciata.', '<strong>Risultato: la gomma è elastica.</strong>'] }
      ]
    },
    'r1-voda-vzduch': {
      title: 'Acqua, aria e la loro importanza',
      summary: 'Descrivi le proprietà dell’acqua e dell’aria e spiega perché sono importanti per la vita.',
      theory: [
        `<p><strong>L’acqua</strong> è un liquido. Non ha una forma propria, prende la forma del recipiente in cui si trova. L’acqua scorre, quindi è facile versarla.
       Senza acqua nessun animale né pianta potrebbe sopravvivere.</p>`,
        `<p><strong>L’aria</strong> non si vede, ma è tutto intorno a noi. La sentiamo come vento o quando respiriamo.
       L’aria è importante perché respiriamo, e senza di essa le piante non potrebbero crescere.</p>`,
        `<ul>
         <li>L’acqua serve per bere, cucinare, lavarsi e per le piante.</li>
         <li>Per respirare abbiamo bisogno dell’aria, e il suo movimento crea il vento.</li>
         <li>L’aria riempie un palloncino quando lo gonfiamo. Il palloncino si ingrandisce perché l’aria occupa spazio.</li>
       </ul>`,
        `<p><strong>Esperimento:</strong> metti un fazzoletto di carta in un bicchiere, capovolgi il bicchiere e immergilo nell’acqua. Il fazzoletto resta asciutto, perché l’aria nel bicchiere non lascia entrare l’acqua.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Un bicchiere capovolto immerso nell’acqua resta asciutto, perché l’aria al suo interno occupa lo spazio e non lascia entrare l’acqua.' }
      ],
      examples: [
        { task: 'Perché una persona ha bisogno dell’acqua?',
          steps: ['L’acqua è nel corpo e aiuta il corpo a funzionare.', 'Senza acqua una persona non sopravviverebbe a lungo.', '<strong>Risultato: l’acqua è necessaria per la vita.</strong>'] },
        { task: 'Che cosa c’è dentro un palloncino gonfiato?',
          steps: ['Il palloncino è stato gonfiato, ma non vi abbiamo messo niente.', 'L’aria è tutto intorno a noi, anche dentro il palloncino.', '<strong>Risultato: nel palloncino c’è aria.</strong>'] }
      ]
    },
    'r1-svetlo-tien-teplo': {
      title: 'Luce, ombra e calore nella vita quotidiana',
      summary: 'Scopri da dove vengono la luce e il calore e spiega come si forma un’ombra.',
      theory: [
        `<p><strong>Il Sole</strong> ci dà luce e calore. La luce ci aiuta a vedere, il calore ci scalda.
       Anche una lampadina e una candela danno luce, e alcune di esse danno anche calore.</p>`,
        `<p>Quando la luce colpisce un oggetto che non lascia passare la luce, dietro l’oggetto si forma un’<strong>ombra</strong>.
       L’ombra è un luogo buio dove la luce non arriva.</p>`,
        `<ul>
         <li>Gli oggetti di legno o di pietra gettano un’ombra.</li>
         <li>Vetro e acqua lasciano passare la luce, quindi l’ombra dietro di essi non è scura.</li>
       </ul>`,
        `<p>In una calda giornata d’estate cerchiamo l’ombra di un albero, perché lì il Sole non ci scalda così tanto. Il calore ci raggiunge soprattutto attraverso i raggi del Sole, e l’ombra li blocca.</p>`,
        { fig: 'obr-tien', caption: 'L’ombra si forma dove la luce non può arrivare, perché un corpo opaco la blocca.' }
      ],
      examples: [
        { task: 'Perché sotto un albero, in una giornata di sole, c’è un’ombra?',
          steps: ['Il Sole illumina l’albero.', 'L’albero è opaco, la luce non lo attraversa.', '<strong>Risultato: dietro l’albero si forma un’ombra.</strong>'] },
        { task: 'Quale oggetto ci dà sia luce sia calore?',
          steps: ['Dà luce e calore un oggetto che brucia o che splende.', 'Il Sole splende e ci scalda.', '<strong>Risultato: il Sole.</strong>'] }
      ]
    },
    'r1-zmeny-prirody': {
      title: 'Osservazione dei cambiamenti in natura',
      summary: 'Descrivi come cambia la natura durante il giorno e durante l’anno.',
      theory: [
        `<p>La natura cambia continuamente. Alcuni cambiamenti sono rapidi, per esempio la pioggia o il vento. Altri sono più lenti, per esempio la crescita di un albero o l’alternarsi delle stagioni.</p>`,
        `<ul>
         <li><strong>Primavera</strong>: crescono i fiori, gli alberi mettono le foglie, fa sempre più caldo.</li>
         <li><strong>Estate</strong>: è la stagione più calda e le giornate sono lunghe.</li>
         <li><strong>Autunno</strong>: le foglie ingialliscono e cadono, fa più freddo.</li>
         <li><strong>Inverno</strong>: è la stagione più fredda, spesso cade la neve e le piante sono a riposo.</li>
       </ul>`,
        `<p>Durante il giorno cambiano la luce e la temperatura: al mattino fa più fresco, a mezzogiorno è più caldo, la sera si fa buio.
       Il giorno e la notte si alternano perché la Terra ruota.</p>`,
        `<p>Puoi annotare i cambiamenti in un diario della natura, per esempio ogni settimana scrivi quante foglie ha l’albero.</p>`,
        { fig: 'r1r5-zem-den-noc', caption: 'La Terra ruota attorno al proprio asse. Il lato rivolto verso il Sole ha il giorno, il lato opposto ha la notte.' }
      ],
      examples: [
        { task: 'Com’è l’autunno come stagione?',
          steps: ['In autunno le foglie ingialliscono e cadono.', 'Fa più freddo e le giornate sono più corte.', '<strong>Risultato: l’autunno è la stagione in cui cadono le foglie.</strong>'] },
        { task: 'Perché si alternano il giorno e la notte?',
          steps: ['La Terra ruota attorno al proprio asse.', 'Quando la nostra parte è rivolta verso il Sole, è giorno.', '<strong>Risultato: la rotazione della Terra causa l’alternarsi di giorno e notte.</strong>'] }
      ]
    },
    'r2-vlastnosti-latok': {
      title: 'Proprietà delle sostanze e degli oggetti',
      summary: 'Riconosci le proprietà delle sostanze, come la trasparenza, la resistenza e la capacità di condurre la corrente elettrica.',
      theory: [
        `<p>Ogni sostanza ha le sue <strong>proprietà</strong>. In base a esse possiamo scegliere di che cosa fare un certo oggetto.
       Per esempio la finestra non si fa di legno, perché il legno non è trasparente.</p>`,
        `<ul>
         <li><strong>Una sostanza trasparente</strong> lascia passare la luce, per esempio il vetro o l’acqua limpida.</li>
         <li><strong>Una sostanza opaca</strong> non lascia passare la luce, per esempio il legno o la pietra.</li>
         <li><strong>Una sostanza lucida</strong> riflette la luce, per esempio il metallo.</li>
         <li><strong>Un conduttore</strong> conduce la corrente elettrica, per esempio il metallo. La plastica è un <strong>isolante</strong>, non conduce la corrente elettrica.</li>
       </ul>`,
        `<p>Quando descriviamo una sostanza possiamo chiederci: è dura, morbida, trasparente, lucida, elastica? Più la descriviamo con precisione, più facilmente la riconosciamo.</p>`,
        `<p><strong>Esperimento:</strong> in una stanza buia punta una torcia su vetro, legno e pellicola. Annota quale sostanza ha lasciato passare la luce.</p>`,
        { fig: 'r1r5-priehladnost', caption: 'Il vetro lascia passare la luce, il legno la blocca e il metallo riflette la luce.' }
      ],
      examples: [
        { task: 'Perché le finestre si fanno di vetro e non di legno?',
          steps: ['La finestra deve essere trasparente, perché la luce ci passi attraverso.', 'Il vetro è trasparente, il legno no.', '<strong>Risultato: il vetro è una sostanza trasparente, quindi è adatto alle finestre.</strong>'] },
        { task: 'Quale sostanza conduce la corrente elettrica: il rame o la plastica?',
          steps: ['Il rame è un metallo e i metalli conducono la corrente.', 'La plastica è un isolante e non conduce la corrente.', '<strong>Risultato: il rame.</strong>'] }
      ]
    },
    'r2-skupenstva': {
      title: 'Solidi, liquidi e gas',
      summary: 'Distingui i solidi, i liquidi e i gas in base alla forma e al volume.',
      theory: [
        `<p>Le sostanze si presentano in tre <strong>stati di aggregazione</strong>: solido, liquido e gassoso.</p>`,
        `<ul>
         <li><strong>Un solido</strong> ha forma e volume propri. Un cubetto di ghiaccio o una pietra mantiene la sua forma.</li>
         <li><strong>Un liquido</strong> ha un volume proprio, ma la sua forma cambia in base al recipiente. L’acqua nel bicchiere ha la forma del bicchiere.</li>
         <li><strong>Un gas</strong> non ha né forma né volume propri. Riempie tutto il recipiente in cui si trova.</li>
       </ul>`,
        `<p>L’aria è un gas. Quando gonfiamo un palloncino lo riempiamo di gas e questo si diffonde in tutto il palloncino.</p>`,
        `<p>Lo stato di aggregazione si può osservare. Prendi un cubetto di ghiaccio, poi l’acqua in un bicchiere e infine l’aria in un palloncino, e confrontali.</p>`,
        { fig: 'obr-skupenstva', caption: 'Cambiamenti di stato: fusione, solidificazione, evaporazione e condensazione.' }
      ],
      examples: [
        { task: 'Di quale stato di aggregazione è il latte in un bicchiere?',
          steps: ['Il latte scorre e prende la forma del bicchiere.', 'Ha un volume fisso ma non una forma fissa.', '<strong>Risultato: liquido.</strong>'] },
        { task: 'Quale stato di aggregazione ha una forma fissa?',
          steps: ['Un solido mantiene la sua forma.', 'Gas e liquidi non hanno una forma fissa.', '<strong>Risultato: solido.</strong>'] }
      ]
    },
    'r2-voda-vzduch': {
      title: 'Acqua e aria',
      summary: 'Osservando scopri che l’aria occupa spazio e che l’acqua scorre e cambia forma.',
      theory: [
        `<p><strong>L’acqua</strong> è un liquido. Scorre, prende la forma del recipiente e può essere versata da un contenitore all’altro.
       L’acqua si può congelare in ghiaccio e riscaldare fino a farla diventare vapore.</p>`,
        `<p><strong>L’aria</strong> è un gas. Anche se non la vediamo, occupa spazio. Per questo nel palloncino gonfiato entra solo una certa quantità d’aria.</p>`,
        `<ul>
         <li>L’acqua penetra nella sabbia e nel terreno. Alcune sostanze si sciolgono nell’acqua, altre no.</li>
         <li>L’aria si muove come vento. Il vento può muovere le foglie e far girare una girandola.</li>
       </ul>`,
        `<p><strong>Esperimento:</strong> metti un bicchiere vuoto capovolto dentro un bicchiere d’acqua e osserva se l’acqua entra dentro. L’aria nel bicchiere impedisce all’acqua di entrare.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Un bicchiere capovolto immerso nell’acqua resta asciutto, perché l’aria al suo interno occupa lo spazio e non lascia entrare l’acqua.' }
      ],
      examples: [
        { task: 'Perché un bicchiere capovolto non si riempie d’acqua?',
          steps: ['Nel bicchiere c’è dell’aria.', 'L’aria occupa spazio e non lascia entrare l’acqua.', '<strong>Risultato: l’aria nel bicchiere occupa spazio.</strong>'] },
        { task: 'Di quale stato di aggregazione è l’acqua e come si comporta?',
          steps: ['L’acqua è un liquido.', 'Scorre e prende la forma del suo recipiente.', '<strong>Risultato: l’acqua è un liquido che scorre.</strong>'] }
      ]
    },
    'r2-zmeny-skupenstva': {
      title: 'Cambiamenti di stato nella vita quotidiana',
      summary: 'Dai il nome a fusione, congelamento, evaporazione e condensazione con esempi tratti dalla realtà che ti circonda.',
      theory: [
        `<p>Una sostanza può <strong>cambiare</strong> da uno stato di aggregazione a un altro. Lo vediamo più spesso con l’acqua.</p>`,
        `<ul>
         <li><strong>Fusione</strong>: un solido diventa liquido, per esempio il ghiaccio diventa acqua quando lo scaldiamo.</li>
         <li><strong>Congelamento</strong>: un liquido diventa solido, per esempio l’acqua diventa ghiaccio nel congelatore.</li>
         <li><strong>Evaporazione</strong>: un liquido diventa gas (vapore), per esempio il bucato bagnato si asciuga.</li>
         <li><strong>Condensazione</strong>: un gas (vapore) diventa liquido, per esempio le gocce su un bicchiere freddo.</li>
       </ul>`,
        `<p>Durante la fusione e l’evaporazione una sostanza assorbe calore. Durante il congelamento e la condensazione lo cede. Per questo in inverno le pozzanghere si raffreddano in fretta e in estate l’acqua si asciuga rapidamente.</p>`,
        { fig: 'r1r5-zmeny-voda', caption: 'Fusione ed evaporazione richiedono assorbimento di calore, congelamento e condensazione lo cedono.' }
      ],
      examples: [
        { task: 'Come si chiama il cambiamento quando la neve diventa acqua?',
          steps: ['La neve è un solido.', 'Quando viene riscaldata diventa un liquido.', '<strong>Risultato: fusione.</strong>'] },
        { task: 'Che cosa succede al bucato bagnato al sole?',
          steps: ['L’acqua del bucato diventa vapore.', 'Il vapore esce nell’aria.', '<strong>Risultato: evaporazione, il bucato si asciuga.</strong>'] }
      ]
    },
    'r2-magnety': {
      title: 'Magneti e i loro effetti',
      summary: 'Scopri quali oggetti attrae un magnete e descrivi i poli di un magnete.',
      theory: [
        `<p>Un <strong>magnete</strong> attrae gli oggetti di ferro, acciaio e nichel. Il magnete non attrae legno, plastica, carta o vetro.</p>`,
        `<p>Ogni magnete ha due <strong>poli</strong>: nord e sud. L’effetto più forte si trova alle sue estremità.</p>`,
        `<ul>
         <li>Due poli uguali si <strong>respingono</strong>.</li>
         <li>Due poli diversi si <strong>attraggono</strong>.</li>
       </ul>`,
        `<p>Il magnete agisce anche attraverso alcune sostanze, per esempio attraverso la carta o un sottile strato di plastica. Attraverso il ferro, però, l’effetto del magnete si trasmette con più difficoltà.</p>`,
        { fig: 'obr-magnet', caption: 'Le linee di campo di un magnete a barra escono dal polo nord N ed entrano nel polo sud S.' }
      ],
      examples: [
        { task: 'Il magnete attrae una chiave d’acciaio?',
          steps: ['L’acciaio contiene ferro.', 'Il magnete attrae il ferro.', '<strong>Risultato: sì, il magnete attrae la chiave d’acciaio.</strong>'] },
        { task: 'Che cosa succede se avviciniamo due magneti con i poli nord uno di fronte all’altro?',
          steps: ['Entrambi i poli sono uguali.', 'I poli uguali si respingono.', '<strong>Risultato: i magneti si allontanano l’uno dall’altro.</strong>'] }
      ]
    },
    'r2-pokusy': {
      title: 'Semplici osservazioni ed esperimenti',
      summary: 'Pianifichi un semplice esperimento e annoti le osservazioni e la conclusione.',
      theory: [
        `<p>Un esperimento è un modo per verificare la nostra idea. Prima ci poniamo una domanda, poi formuliamo una <strong>previsione</strong> (un’ipotesi), eseguiamo l’esperimento e annotiamo i risultati.</p>`,
        `<ol>
         <li><strong>Domanda</strong>: Che cosa vogliamo scoprire? Per esempio: lo zucchero si scioglie più in fretta nell’acqua calda o in quella fredda?</li>
         <li><strong>Previsione</strong>: Che cosa pensiamo che accadrà? Per esempio: lo zucchero si scioglierà più in fretta nell’acqua calda.</li>
         <li><strong>Esperimento e osservazione</strong>: Eseguiamo l’esperimento e annotiamo esattamente che cosa vediamo.</li>
         <li><strong>Conclusione</strong>: L’esperimento ha confermato la nostra previsione? Se no, non è un problema, anche il risultato è un’informazione.</li>
       </ol>`,
        `<p>Durante un esperimento segui sempre le regole di sicurezza e lavora nelle stesse condizioni, così che il risultato sia affidabile.</p>`
      ],
      examples: [
        { task: 'Qual è il primo passo di un semplice esperimento?',
          steps: ['Per prima cosa ci poniamo una domanda.', 'Poi formuliamo una previsione ed eseguiamo l’esperimento.', '<strong>Risultato: il primo passo è porsi una domanda.</strong>'] },
        { task: 'Che cosa annotiamo dopo un esperimento?',
          steps: ['Annotiamo le osservazioni, cioè quello che abbiamo visto.', 'Alla fine scriviamo la conclusione.', '<strong>Risultato: le osservazioni e la conclusione.</strong>'] }
      ]
    },
    'r3-latky': {
      title: 'Sostanze e loro proprietà',
      summary: 'Confronti le sostanze in base alla trasparenza, alla durezza, alla solubilità e ad altre proprietà.',
      theory: [
        `<p>Ogni oggetto è fatto di una certa <strong>sostanza</strong>. La stessa sostanza si può trovare in oggetti diversi: sedie e matite possono essere entrambe di legno.</p>`,
        `<ul>
         <li><strong>Trasparenza</strong>: attraverso una sostanza trasparente vediamo, per esempio il vetro.</li>
         <li><strong>Durezza</strong>: una sostanza dura si gratta con difficoltà, per esempio la pietra.</li>
         <li><strong>Solubilità</strong>: una sostanza solubile si scioglie nell’acqua e scompare, per esempio lo zucchero o il sale. La sabbia non si scioglie nell’acqua.</li>
         <li><strong>Magnetismo</strong>: il magnete attrae il ferro e l’acciaio, non il legno o la plastica.</li>
       </ul>`,
        `<p>Confrontiamo le proprietà delle sostanze osservando, misurando e annotando i risultati. Per esempio possiamo scoprire quale sostanza si scioglie più in fretta.</p>`,
        `<p><strong>Esperimento:</strong> metti zucchero, sabbia e un sassolino in tre bicchieri d’acqua. Osserva dove ciascuno scompare e dove resta sul fondo.</p>`
      ],
      examples: [
        { task: 'Quale sostanza si scioglie nell’acqua: il sale o la sabbia?',
          steps: ['Il sale si scioglie nell’acqua e scompare.', 'La sabbia resta sul fondo, non si scioglie.', '<strong>Risultato: il sale.</strong>'] },
        { task: 'Quale sostanza attrae il magnete: un chiodo di ferro o un bastoncino di legno?',
          steps: ['Il magnete attrae il ferro.', 'Il magnete non attrae il legno.', '<strong>Risultato: il chiodo di ferro.</strong>'] }
      ]
    },
    'r3-merania': {
      title: 'Misurare lunghezza, tempo e temperatura',
      summary: 'Scegli lo strumento e l’unità adatti e converti semplici lunghezze.',
      theory: [
        `<p>Quando misuriamo cerchiamo sempre di sapere <strong>quanto</strong> c’è di qualcosa e lo confrontiamo con un’unità. Ogni grandezza ha la sua unità e il suo strumento.</p>`,
        `<ul>
         <li><strong>Lunghezza</strong>: si misura con un righello o un metro. Le unità sono il centimetro (cm) e il metro (m).</li>
         <li><strong>Tempo</strong>: si misura con un orologio o un cronometro. Le unità sono il secondo (s), il minuto (min) e l’ora (h).</li>
         <li><strong>Temperatura</strong>: si misura con un termometro. L’unità è il grado Celsius (°C).</li>
       </ul>`,
        `<p>Un metro ha <strong>100 centimetri</strong>. Quando convertiamo, quindi, moltiplichiamo per cento: 3 m = 300 cm.</p>`,
        `<p>Quando misuriamo una lunghezza, appoggiamo il righello all’inizio dell’oggetto e leggiamo la fine alla stessa altezza, così il risultato è preciso.</p>`,
        { fig: 'r1r5-pravitko', caption: 'Lo zero del righello si appoggia all’inizio dell’oggetto e si legge la fine. L’oggetto è lungo 7 cm.' }
      ],
      examples: [
        { task: 'Quanti centimetri sono 4 metri?',
          steps: ['Un metro ha 100 centimetri.', 'Quattro metri hanno $4 \\cdot 100 = 400$ centimetri.', '<strong>Risultato: 400 cm</strong>'] },
        { task: 'Quale strumento useresti per misurare il tempo di una corsa?',
          steps: ['Il tempo si misura con uno strumento che indica secondi e minuti.', 'Il termometro misura la temperatura, il righello la lunghezza.', '<strong>Risultato: il cronometro.</strong>'] }
      ]
    },
    'r3-teplo': {
      title: 'Calore e riscaldamento degli oggetti',
      summary: 'Spieghi come gli oggetti si riscaldano e si raffreddano e perché alcuni si riscaldano più in fretta.',
      theory: [
        `<p><strong>Il calore</strong> passa da un oggetto più caldo a uno più freddo. Per questo una zuppa fredda in una pentola si scalda quando la mettiamo sul fornello.</p>`,
        `<ul>
         <li><strong>Gli oggetti scuri</strong> assorbono più luce solare, quindi si riscaldano più in fretta.</li>
         <li><strong>Gli oggetti chiari</strong> riflettono più luce, quindi si riscaldano più lentamente.</li>
         <li><strong>I metalli</strong> conducono il calore rapidamente, quindi un cucchiaio nella zuppa calda si scalda in fretta.</li>
       </ul>`,
        `<p>Il riscaldamento lo misuriamo con un termometro. La temperatura sale quando un oggetto assorbe calore e scende quando lo cede.</p>`,
        { fig: 'r1r5-teplo-tok', caption: 'Il calore passa dal corpo più caldo a quello più freddo, non viceversa.' }
      ],
      examples: [
        { task: 'Quale oggetto si riscalda più in fretta al sole: una maglietta scura o una maglietta bianca?',
          steps: ['Gli oggetti scuri assorbono più luce solare.', 'Gli oggetti bianchi riflettono la luce e il calore.', '<strong>Risultato: la maglietta scura si riscalda più in fretta.</strong>'] },
        { task: 'Perché un cucchiaio di metallo si scalda rapidamente nella zuppa calda?',
          steps: ['Il metallo conduce il calore velocemente.', 'Il calore passa dalla zuppa al cucchiaio.', '<strong>Risultato: il metallo conduce il calore rapidamente.</strong>'] }
      ]
    },
    'r3-rozpustanie': {
      title: 'Scioglimento delle sostanze in acqua',
      summary: 'Scopri quali sostanze si sciolgono in acqua e quali fattori accelerano lo scioglimento.',
      theory: [
        `<p><strong>Lo scioglimento</strong> avviene quando una sostanza si frantuma in acqua in particelle così piccole che non le vediamo più. La soluzione è poi limpida.</p>`,
        `<ul>
         <li><strong>Sostanze solubili</strong>: zucchero, sale, cacao.</li>
         <li><strong>Sostanze insolubili</strong>: sabbia, sassolini, olio (forma uno strato sopra l’acqua).</li>
       </ul>`,
        `<p>Lo scioglimento va più veloce quando:</p>
       <ol>
         <li>l’acqua è calda,</li>
         <li>mescoliamo la sostanza,</li>
         <li>prima spezziamo la sostanza in pezzi più piccoli.</li>
       </ol>`,
        `<p><strong>Esperimento:</strong> metti la stessa quantità di zucchero in due bicchieri, riempi uno di acqua calda e l’altro di acqua fredda. Osserva dove lo zucchero si scioglie più in fretta.</p>`,
        { fig: 'r1r5-castice-teplota', caption: 'Nell’acqua più calda le particelle si muovono più velocemente, quindi lo zucchero si scioglie più in fretta.' }
      ],
      examples: [
        { task: 'Quale sostanza si scioglie in acqua: un sassolino o lo zucchero?',
          steps: ['Lo zucchero si scioglie in acqua.', 'Il sassolino resta sul fondo.', '<strong>Risultato: lo zucchero.</strong>'] },
        { task: 'Dove lo zucchero si scioglie più in fretta: in acqua calda o in acqua fredda?',
          steps: ['Le molecole dell’acqua calda si muovono più velocemente.', 'L’acqua che si muove più velocemente scioglie prima lo zucchero.', '<strong>Risultato: nell’acqua calda.</strong>'] }
      ]
    },
    'r3-pohyb': {
      title: 'Movimento degli oggetti e forze',
      summary: 'Descrivi come le forze mettono in movimento gli oggetti o li fermano.',
      theory: [
        `<p>Un oggetto si muove quando qualcosa <strong>agisce</strong> su di lui. Questa azione si chiama <strong>forza</strong>. Una forza può essere una spinta o una trazione.</p>`,
        `<ul>
         <li><strong>La forza di gravità</strong> tira gli oggetti verso il suolo. Grazie a lei la palla cade a terra.</li>
         <li><strong>L’attrito</strong> agisce tra gli oggetti che si toccano. Rallenta il moto, per esempio di una palla sull’erba.</li>
         <li><strong>La forza magnetica</strong> agisce tra un magnete e il ferro.</li>
       </ul>`,
        `<p>Una forza può mettere in movimento un oggetto, accelerarlo, rallentarlo o cambiarne la direzione del moto.</p>`,
        `<p>Un libro sta fermo sul tavolo perché il tavolo lo spinge verso l’alto e la gravità lo tira verso il basso. Queste due forze si bilanciano, quindi il libro non si muove.</p>`,
        { fig: 'r1r5-sily-stol', caption: 'Il libro è appoggiato sul tavolo: il piano spinge verso l’alto con la forza N, la gravità tira verso il basso con la forza Fg. Le forze si bilanciano.' }
      ],
      examples: [
        { task: 'Quale forza ferma una palla che rotola sull’erba?',
          steps: ['L’erba e la palla si toccano e si sfregano tra loro.', 'Questa resistenza rallenta la palla.', '<strong>Risultato: l’attrito.</strong>'] },
        { task: 'Perché una palla cade quando la lasciamo?',
          steps: ['Sulla palla agisce la forza di gravità.', 'Essa la tira verso il suolo.', '<strong>Risultato: la forza di gravità.</strong>'] }
      ]
    },
    'r3-zaznamenavanie': {
      title: 'Osservazione e registrazione dei risultati di un esperimento',
      summary: 'Scrivi i risultati di un esperimento in una tabella e da essi trai una conclusione.',
      theory: [
        `<p>Durante un esperimento non basta osservare. Dobbiamo <strong>registrare</strong> i risultati, altrimenti presto li dimenticheremmo.</p>`,
        `<ol>
         <li>Annotiamo che cosa abbiamo fatto e con che cosa.</li>
         <li>Durante l’esperimento riportiamo i valori misurati in una <strong>tabella</strong>.</li>
         <li>Alla fine confrontiamo i risultati e scriviamo una <strong>conclusione</strong>.</li>
       </ol>`,
        `<p>La tabella ha colonne per le singole misurazioni, per esempio il tempo che lo zucchero impiega a sciogliersi e la temperatura dell’acqua. Grazie alla tabella vediamo come sono collegate due cose.</p>`,
        `<p>Scrivi in modo preciso, non secondo ciò che ti aspetti. Se il risultato non è andato come pensavi, scrivilo comunque.</p>`
      ],
      examples: [
        { task: 'Che cosa è meglio fare con i valori misurati durante un esperimento?',
          steps: ['Dimentichiamo in fretta i valori se non li scriviamo.', 'Li scriviamo nella tabella appena li misuriamo.', '<strong>Risultato: scriverli nella tabella.</strong>'] },
        { task: 'Che cosa va nella tabella per un esperimento sullo scioglimento?',
          steps: ['Nell’esperimento misuriamo il tempo e la temperatura dell’acqua.', 'Scriviamo questi valori nelle colonne.', '<strong>Risultato: il tempo di scioglimento e la temperatura dell’acqua.</strong>'] }
      ]
    }
  }
});
