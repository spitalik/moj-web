/* Italiano: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/it/v1/ – needitovať ručne. */
CONTENT_I18N.add('it', {
 "decimal": ",",
 "lessons": {
  "v1-vektory": {
   "title": "Vettori in Rⁿ e dipendenza lineare",
   "summary": "Operazioni con i vettori, combinazione lineare, sottospazio generato, dipendenza e indipendenza lineare.",
   "theory": [
    "<p>Un <strong>vettore</strong> in $\\mathbb{R}^n$ è una $n$-upla ordinata di numeri reali $u=(u_1, u_2, \\dots, u_n)$. I vettori si sommano e si moltiplicano per un numero reale (scalare) componente per componente: $u+v=(u_1+v_1, \\dots, u_n+v_n)$ e $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. Il vettore nullo si indica con $o=(0, \\dots, 0)$.</p>",
    "<p>Una <strong>combinazione lineare</strong> dei vettori $u_1, \\dots, u_k$ è ogni vettore della forma $c_1u_1+c_2u_2+\\dots+c_ku_k$, dove $c_1, \\dots, c_k\\in\\mathbb{R}$ sono i coefficienti. L'insieme di tutte le combinazioni lineari si chiama <strong>sottospazio generato</strong> (o span) e si indica con $\\mathcal{L}(u_1, \\dots, u_k)$.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "I vettori $u=(2, 1)$ e $v=(-1, 2)$ non sono paralleli, quindi ogni vettore del piano si può scrivere come $\\alpha u+\\beta v$. Sposta i coefficienti $\\alpha$ e $\\beta$ e osserva come cambia il vettore risultante (arancione)."
    },
    "<p>I vettori $u_1, \\dots, u_k$ sono <strong>linearmente indipendenti</strong> se dall'uguaglianza $c_1u_1+\\dots+c_ku_k=o$ segue $c_1=\\dots=c_k=0$. In caso contrario sono <strong>linearmente dipendenti</strong>, il che accade se e solo se almeno uno di essi si può esprimere come combinazione lineare degli altri.</p>\n       <p>In pratica scriviamo i vettori nelle righe di una matrice $A$: sono indipendenti se e solo se $h(A)=k$ (per il rango vedi le lezioni successive). Per $n$ vettori in $\\mathbb{R}^n$ basta verificare se $\\det A\\neq 0$. Più di $n$ vettori in $\\mathbb{R}^n$ sono sempre linearmente dipendenti e ogni insieme che contiene il vettore nullo è dipendente.</p>"
   ],
   "examples": [
    {
     "task": "Stabilisci se i vettori $u=(1, 2, 0)$, $v=(0, 1, 1)$ e $w=(2, 5, 1)$ sono linearmente dipendenti.",
     "steps": [
      "Scriviamo i vettori nelle righe di una matrice e calcoliamo il determinante con lo sviluppo lungo la 1ª riga:",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "Il determinante è nullo, quindi i vettori sono <strong>linearmente dipendenti</strong>. Infatti $w=2u+v$."
     ]
    },
    {
     "task": "Esprimi il vettore $w=(4, 7)$ come combinazione lineare dei vettori $u=(2, 1)$ e $v=(-1, 2)$.",
     "steps": [
      "Cerchiamo $\\alpha, \\beta$ con $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$, cioè il sistema $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$.",
      "Dalla seconda equazione $\\alpha=7-2\\beta$; sostituendo $14-4\\beta-\\beta=4$, quindi $\\beta=2$ e $\\alpha=3$.",
      "<strong>Risultato:</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "Matrici e operazioni con le matrici",
   "summary": "Tipo di una matrice, matrici speciali, somma, prodotto per uno scalare, trasposta e traccia.",
   "theory": [
    "<p>Una <strong>matrice</strong> di tipo $m\\times n$ è una tabella rettangolare $A=(a_{ij})$ di numeri reali con $m$ righe e $n$ colonne. Due matrici sono uguali se hanno lo stesso tipo e gli stessi elementi nelle stesse posizioni. Una matrice di tipo $n\\times n$ è <strong>quadrata</strong> di ordine $n$; gli elementi $a_{11}, a_{22}, \\dots, a_{nn}$ formano la sua <strong>diagonale principale</strong>. Sono importanti la matrice <strong>identità</strong> $I$ (uno sulla diagonale, zero altrove), la matrice <strong>nulla</strong> $O$, la matrice <strong>diagonale</strong> e la matrice <strong>triangolare superiore (inferiore)</strong> (zeri sotto (sopra) la diagonale).</p>",
    "<p>La <strong>somma</strong> di matrici dello stesso tipo e il <strong>prodotto</strong> di una matrice per un numero si calcolano elemento per elemento: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. Valgono $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$. Le matrici di tipo $m\\times n$ con queste operazioni formano uno spazio vettoriale.</p>",
    "<p>La matrice <strong>trasposta</strong> $A^{T}$ di una matrice di tipo $m\\times n$ è di tipo $n\\times m$ e $(A^{T})_{ij}=a_{ji}$ – le righe diventano colonne. Valgono $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ e $(AB)^{T}=B^{T}A^{T}$ (l'ordine si inverte).</p>\n       <p>Una matrice quadrata è <strong>simmetrica</strong> se $A^{T}=A$ e <strong>antisimmetrica</strong> se $A^{T}=-A$ (in tal caso ha zeri sulla diagonale). Ogni matrice quadrata si può scomporre in modo unico nella somma $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ di una parte simmetrica e una antisimmetrica. La <strong>traccia</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ è la somma degli elementi della diagonale; per qualsiasi matrice $\\operatorname{tr}(A^{T}A)$ è la somma dei quadrati di tutti i suoi elementi.</p>"
   ],
   "examples": [
    {
     "task": "Date $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ e $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$, calcola $2A-B^{T}$.",
     "steps": [
      "$B$ è di tipo $3\\times 2$, quindi $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ è di tipo $2\\times 3$ come $A$.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>Risultato:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "Scomponi la matrice $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ nella somma di una matrice simmetrica e una antisimmetrica.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "Parte simmetrica: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "Parte antisimmetrica: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Verifica: $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "Rango di una matrice e operazioni elementari sulle righe",
   "summary": "Operazioni elementari sulle righe, forma a scala, eliminazione di Gauss e rango di una matrice.",
   "theory": [
    "<p>Le <strong>operazioni elementari sulle righe</strong> sono: (1) lo scambio di due righe, (2) la moltiplicazione di una riga per un numero non nullo, (3) l'aggiunta a una riga di un multiplo di un'altra riga. Se $B$ si ottiene da $A$ con un numero finito di tali operazioni, scriviamo $A\\sim B$ (le matrici sono equivalenti per righe). La scrittura $R_2-3R_1$ significa che sostituiamo la seconda riga con la differenza tra la seconda riga e il triplo della prima.</p>",
    "<p>Una matrice è in <strong>forma a scala</strong> se ogni riga non nulla inizia con un numero di zeri maggiore della riga sopra di essa e le righe nulle stanno in fondo. Il primo elemento non nullo di una riga è il suo <strong>pivot</strong>. L'<strong>eliminazione di Gauss</strong> porta ogni matrice in forma a scala: nella colonna corrente scegliamo il pivot e con l'operazione (3) annulliamo tutto ciò che sta sotto di esso. Se inoltre rendiamo i pivot uguali a 1 e annulliamo anche gli elementi sopra di essi, otteniamo la forma ridotta (eliminazione di Gauss–Jordan).</p>",
    {
     "fig": "v1-stupne",
     "caption": "Forma a scala: scendendo, i pivot si spostano verso destra. La matrice ha tre righe non nulle, quindi $h(A)=3$."
    },
    "<p>Il <strong>rango</strong> $h(A)$ è il numero massimo di righe linearmente indipendenti della matrice $A$. Le operazioni sulle righe non cambiano il rango, quindi $h(A)$ è il numero di righe non nulle della forma a scala. Vale $h(A)=h(A^{T})$ (il rango per righe è uguale al rango per colonne) e $h(A)\\le\\min(m, n)$. Per una matrice quadrata di ordine $n$ vale: $h(A)=n\\iff\\det A\\neq 0\\iff A$ è invertibile (regolare).</p>"
   ],
   "examples": [
    {
     "task": "Determina il rango della matrice $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "La forma a scala ha due righe non nulle, quindi $h(A)=2$."
     ]
    },
    {
     "task": "Per quali $a$ la matrice $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ ha rango 2?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "Per $a=4$ l'ultima riga è nulla e $h(A)=2$; per $a\\neq 4$ si ha $h(A)=3$."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "Determinante 3×3 e sviluppo di Laplace",
   "summary": "Regola di Sarrus, minori e complementi algebrici, sviluppo di Laplace, proprietà del determinante.",
   "theory": [
    "<p>Il <strong>determinante</strong> di una matrice quadrata di ordine $n$ è il numero $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$, dove si somma su tutte le $n!$ permutazioni $\\pi$ dell'insieme $\\{1, \\dots, n\\}$. Per $n=3$ si ottiene la <strong>regola di Sarrus</strong>:</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "Regola di Sarrus: a destra della matrice riscriviamo le sue prime due colonne. I prodotti lungo le diagonali verso destra in basso si prendono con il segno più, quelli verso sinistra in basso con il segno meno. Vale <strong>solo</strong> per le matrici di ordine 3."
    },
    "<p>Il <strong>minore</strong> $M_{ij}$ è il determinante della matrice che si ottiene eliminando la $i$-esima riga e la $j$-esima colonna, e il <strong>complemento algebrico</strong> (cofattore) è $A_{ij}=(-1)^{i+j}M_{ij}$. <strong>Sviluppo di Laplace</strong> lungo la $i$-esima riga: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (analogamente lungo una colonna). Conviene sviluppare lungo la riga o la colonna con il maggior numero di zeri.</p>",
    "<p><strong>Proprietà:</strong> $\\det A^{T}=\\det A$; lo scambio di due righe cambia il segno; moltiplicare una riga per il numero $c$ moltiplica il determinante per $c$, quindi $\\det(cA)=c^{n}\\det A$; aggiungere un multiplo di un'altra riga non cambia il determinante; una matrice con una riga nulla o con due righe proporzionali ha determinante 0; il determinante di una matrice triangolare è il prodotto degli elementi della diagonale. Per matrici dello stesso ordine vale $\\det(AB)=\\det A\\cdot\\det B$ e, se $A$ è invertibile, $\\det A^{-1}=\\frac{1}{\\det A}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcola $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "Termini positivi: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "Termini negativi: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>Risultato:</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "Calcola $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$.",
     "steps": [
      "Nella 3ª riga c'è un solo elemento non nullo $a_{32}=3$. Sviluppo lungo la 3ª riga: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (regola di Sarrus).",
      "<strong>Risultato:</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "Matrice inversa: Gauss–Jordan e matrice aggiunta",
   "summary": "Esistenza della matrice inversa, calcolo con il metodo di Gauss–Jordan e tramite la matrice aggiunta, equazioni matriciali.",
   "theory": [
    "<p>La matrice <strong>inversa</strong> di una matrice quadrata $A$ di ordine $n$ è la matrice $A^{-1}$ tale che $AA^{-1}=A^{-1}A=I$. Esiste se e solo se $\\det A\\neq 0$ (la matrice è <strong>invertibile</strong>, o regolare); una matrice con determinante nullo è <strong>singolare</strong>. Valgono $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ e $(AB)^{-1}=B^{-1}A^{-1}$.</p>",
    "<p><strong>Metodo di Gauss–Jordan:</strong> con operazioni sulle righe portiamo la matrice affiancata $(A\\mid I)$ nella forma $(I\\mid B)$; allora $B=A^{-1}$. Se durante i passaggi a sinistra compare una riga nulla, la matrice $A$ è singolare.</p>",
    "<p>La <strong>matrice aggiunta</strong> $\\operatorname{adj}A$ è la trasposta della matrice dei complementi algebrici: $(\\operatorname{adj}A)_{ij}=A_{ji}$. Vale $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, cioè $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ – attenzione allo scambio degli indici. Per $n=2$ otteniamo la nota formula $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    "<p><strong>Equazioni matriciali:</strong> se $A$ è invertibile, l'equazione $AX=B$ ha l'unica soluzione $X=A^{-1}B$ e l'equazione $XA=B$ ha la soluzione $X=BA^{-1}$. Poiché il prodotto di matrici non è commutativo, conta il lato da cui moltiplichiamo.</p>"
   ],
   "examples": [
    {
     "task": "Con il metodo di Gauss–Jordan trova l'inversa di $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>Risultato:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (verifica: $AA^{-1}=I$)."
     ]
    },
    {
     "task": "Data $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$, calcola l'elemento $(A^{-1})_{13}$.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, dove $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.",
      "<strong>Risultato:</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "Sistemi di equazioni lineari",
   "summary": "Eliminazione di Gauss, teorema di Rouché–Capelli, regola di Cramer e sistemi omogenei.",
   "theory": [
    "<p>Un sistema di $m$ equazioni lineari in $n$ incognite si scrive in forma matriciale come $Ax=b$, dove $A$ è la <strong>matrice dei coefficienti</strong>, $x=(x_1, \\dots, x_n)^{T}$ e $b$ è la colonna dei termini noti; $(A\\mid b)$ è la <strong>matrice completa</strong>. Il sistema è <strong>omogeneo</strong> se $b=o$.</p>",
    "<p><strong>Teorema di Rouché–Capelli</strong> (detto anche di Frobenius): il sistema $Ax=b$ ha soluzione se e solo se $h(A)=h(A\\mid b)$. Se $h(A)=h(A\\mid b)=n$, la soluzione è unica; se $h(A)=h(A\\mid b)=h\\lt n$, le soluzioni sono infinite e dipendono da $n-h$ parametri.</p>",
    {
     "fig": "v1-priamky",
     "caption": "Due equazioni in due incognite sono due rette nel piano: si intersecano, sono parallele distinte oppure coincidono."
    },
    "<p><strong>Eliminazione di Gauss:</strong> portiamo la matrice completa in forma a scala e calcoliamo le incognite per sostituzione all'indietro, dal basso; le incognite senza pivot sono parametri liberi. <strong>Regola di Cramer:</strong> se $A$ è quadrata e $D=\\det A\\neq 0$, allora $x_i=\\frac{D_i}{D}$, dove $D_i$ è il determinante della matrice ottenuta da $A$ sostituendo la $i$-esima colonna con la colonna $b$.</p>\n       <p>Un <strong>sistema omogeneo</strong> ha sempre la soluzione banale $x=o$. Una soluzione non banale esiste se e solo se $h(A)\\lt n$ (per una matrice quadrata se e solo se $\\det A=0$). L'insieme di tutte le soluzioni è un sottospazio di $\\mathbb{R}^n$ di dimensione $n-h(A)$.</p>"
   ],
   "examples": [
    {
     "task": "Risolvi il sistema $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, poi $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "All'indietro: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Soluzione:</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "Risolvi il sistema $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$.",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, quindi $h(A)=h(A\\mid b)=2\\lt 3$ – infinite soluzioni con un parametro.",
      "Dalla 2ª riga $x_3=1$. L'incognita $x_2$ non ha pivot, poniamo $x_2=t$; dalla 1ª riga $x_1=1-2t+1=2-2t$.",
      "<strong>Soluzione:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "Spazio vettoriale, base e dimensione",
   "summary": "Spazio vettoriale e sottospazio, base, dimensione e coordinate di un vettore rispetto a una base.",
   "theory": [
    "<p>Uno <strong>spazio vettoriale</strong> su $\\mathbb{R}$ è un insieme $V$ dotato di somma e di prodotto per un numero reale, che non escono da $V$ e soddisfano le regole consuete: proprietà commutativa e associativa della somma, esistenza del vettore nullo e del vettore opposto, proprietà distributive, $(cd)u=c(du)$ e $1\\cdot u=u$. Esempi: $\\mathbb{R}^n$, le matrici di tipo $m\\times n$, i polinomi di grado al più $n$ ($P_n$), le funzioni reali su un intervallo.</p>",
    "<p>Un <strong>sottospazio</strong> è un sottoinsieme non vuoto $W\\subseteq V$ chiuso rispetto alla somma e al prodotto per un numero; allora necessariamente $o\\in W$. Sono sottospazi di $\\mathbb{R}^3$, per esempio, le rette e i piani passanti per l'origine, l'insieme delle soluzioni di un sistema omogeneo e ogni sottospazio generato. Un piano che non passa per l'origine non è un sottospazio.</p>",
    "<p>Una <strong>base</strong> dello spazio $V$ è un insieme di vettori linearmente indipendenti che genera tutto $V$. Tutte le basi hanno lo stesso numero di elementi – la <strong>dimensione</strong> $\\dim V$. Per esempio $\\dim\\mathbb{R}^n=n$ (base canonica $e_1, \\dots, e_n$), $\\dim P_n=n+1$ e lo spazio delle matrici $m\\times n$ ha dimensione $mn$. In uno spazio di dimensione $n$ ogni insieme di $n$ vettori linearmente indipendenti è una base, e $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ è il rango della matrice con righe $u_1, \\dots, u_k$.</p>",
    {
     "fig": "v1-baza",
     "caption": "La base $b_1=(2, 1)$, $b_2=(-1, 2)$ crea una griglia «obliqua». Le coordinate $(c_1, c_2)$ di un vettore nella base $B$ dicono quanti passi bisogna fare nella direzione di $b_1$ e quanti nella direzione di $b_2$."
    },
    "<p>Se $B=(b_1, \\dots, b_n)$ è una base, ogni vettore si può scrivere in modo <strong>unico</strong> come $v=c_1b_1+\\dots+c_nb_n$; i numeri $(c_1, \\dots, c_n)$ sono le <strong>coordinate</strong> del vettore $v$ nella base $B$. Le troviamo risolvendo il sistema la cui matrice ha i vettori della base nelle colonne e il cui termine noto è $v$.</p>"
   ],
   "examples": [
    {
     "task": "Trova le coordinate del vettore $v=(3, 0, 1)$ nella base $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$.",
     "steps": [
      "Da $v=c_1b_1+c_2b_2+c_3b_3$ otteniamo il sistema $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$.",
      "Sottraendo le prime due equazioni $c_1-c_2=3$; insieme a $c_1+c_2=1$ abbiamo $c_1=2$, $c_2=-1$ e $c_3=1$.",
      "<strong>Risultato:</strong> $(v)_B=(2, -1, 1)$. Verifica: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "Determina una base e la dimensione del sottospazio $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$.",
     "steps": [
      "La matrice del sistema $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ è in forma a scala e ha rango 2, quindi $\\dim W=4-2=2$.",
      "Incognite libere: $x_3=s$, $x_4=t$. Allora $x_2=-t$ e $x_1=x_3-x_2=s+t$, cioè $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.",
      "<strong>Risultato:</strong> base $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "Applicazioni lineari e loro matrici",
   "summary": "Applicazione lineare, matrice associata, composizione di applicazioni, trasformazioni geometriche del piano, nucleo e immagine.",
   "theory": [
    "<p>Un'applicazione $f:V\\to W$ tra spazi vettoriali è <strong>lineare</strong> se $f(u+v)=f(u)+f(v)$ e $f(cu)=c\\,f(u)$ per tutti i vettori $u, v$ e tutti i numeri $c$; allora $f(o)=o$. Ogni applicazione lineare $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ ha la forma $f(x)=Ax$ per un'unica matrice $A$ di tipo $m\\times n$, le cui colonne sono le immagini dei vettori della base canonica: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. All'applicazione composta $g\\circ f$ (prima $f$, poi $g$) corrisponde il prodotto di matrici $A_gA_f$.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>trasformazione in $\\mathbb{R}^2$</th><th>matrice</th></tr>\n       <tr><td>rotazione di un angolo $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>simmetria rispetto all'asse $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>simmetria rispetto alla retta $y=x$</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>proiezione ortogonale sull'asse $x$</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>omotetia di rapporto $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "Rotazione di un angolo $\\varphi$: le immagini dei vettori $e_1$ (blu) ed $e_2$ (verde) sono esattamente le colonne della matrice di rotazione. La figura tratteggiata è l'originale, quella piena è la sua immagine."
    },
    "<p>Il <strong>nucleo</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ è l'insieme delle soluzioni del sistema omogeneo $Ax=o$; l'<strong>immagine</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ è il sottospazio generato dalle colonne della matrice $A$. Entrambi sono sottospazi e $\\dim\\operatorname{Im}f=h(A)$. <strong>Teorema della dimensione (nullità più rango):</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. L'applicazione è iniettiva se e solo se $\\operatorname{Ker}f=\\{o\\}$.</p>"
   ],
   "examples": [
    {
     "task": "Trova la matrice dell'applicazione che prima ruota un vettore di $90^\\circ$ in senso antiorario e poi lo trasforma nel simmetrico rispetto all'asse $x$. Qual è l'immagine del vettore $(2, 1)$?",
     "steps": [
      "Rotazione: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, simmetria: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. La composizione (prima $R$, poi $S$) ha matrice $SR$.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – è la simmetria rispetto alla retta $y=-x$.",
      "<strong>Immagine:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "Determina il nucleo e la dimensione dell'immagine dell'applicazione $f(x)=Ax$, dove $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$.",
     "steps": [
      "La terza riga è la somma delle prime due, quindi $h(A)=2$ e $\\dim\\operatorname{Im}f=2$.",
      "Nucleo: $x_1+x_2=0$, $x_2+x_3=0$. Per $x_3=t$ si ha $x_2=-t$, $x_1=t$, quindi $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.",
      "Verifica con il teorema della dimensione: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "Autovalori e autovettori",
   "summary": "Polinomio caratteristico, autovalori e autovettori di matrici 2×2 e 3×3, diagonalizzazione e potenze di una matrice.",
   "theory": [
    "<p>Il numero $\\lambda$ è un <strong>autovalore</strong> della matrice quadrata $A$ se esiste un vettore non nullo $v$ con $Av=\\lambda v$; il vettore $v$ è allora un <strong>autovettore</strong> relativo a $\\lambda$. Geometricamente: l'applicazione $x\\mapsto Ax$ conserva la direzione del vettore $v$ e lo allunga soltanto di un fattore $\\lambda$ (se $\\lambda\\lt 0$ ne inverte anche il verso).</p>",
    "<p>Gli autovalori sono le radici del <strong>polinomio caratteristico</strong> $p(\\lambda)=\\det(A-\\lambda I)$. Per una matrice $2\\times 2$ si ha $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$. In generale la somma degli autovalori è uguale a $\\operatorname{tr}A$ e il loro prodotto a $\\det A$; una matrice triangolare ha gli autovalori sulla diagonale. Gli autovettori relativi a $\\lambda$ sono le soluzioni non nulle del sistema omogeneo $(A-\\lambda I)v=o$.</p>",
    {
     "fig": "v1-matica",
     "caption": "La matrice $A$ trasforma il quadrato unitario in un parallelogramma di lati $Ae_1$ e $Ae_2$ (le colonne della matrice); la sua area è $|\\det A|$. Le rette arancioni sono le autodirezioni – i vettori su di esse vengono trasformati in loro multipli."
    },
    "<p><strong>Diagonalizzazione:</strong> una matrice $A$ di ordine $n$ è diagonalizzabile se $A=PDP^{-1}$, dove $D$ è diagonale. Ciò accade se e solo se $A$ ha $n$ autovettori linearmente indipendenti; essi formano le colonne della matrice $P$ e sulla diagonale di $D$ ci sono i corrispondenti autovalori nello stesso ordine. È sufficiente che $A$ abbia $n$ autovalori distinti; ogni matrice reale simmetrica è diagonalizzabile. Applicazione: $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "Trova gli autovalori e gli autovettori della matrice $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$, quindi $\\lambda^2-7\\lambda+10=0$ e $\\lambda_1=2$, $\\lambda_2=5$.",
      "$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, equazione $-v_1+v_2=0$, autovettore $(1, 1)$.",
      "$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, equazione $2v_1+v_2=0$, autovettore $(1, -2)$."
     ]
    },
    {
     "task": "Usando la diagonalizzazione calcola $A^3$ per $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$.",
     "steps": [
      "Dall'esempio precedente $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ e $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>Risultato:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "Prodotto scalare, ortogonalità e proiezione",
   "summary": "Prodotto scalare e norma, angolo tra vettori, proiezione ortogonale e procedimento di Gram–Schmidt.",
   "theory": [
    "<p>Il <strong>prodotto scalare standard</strong> in $\\mathbb{R}^n$ è $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$. È simmetrico, lineare in ciascun argomento e $\\langle u, u\\rangle\\gt 0$ per $u\\neq o$. La <strong>norma</strong> (lunghezza) è $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$ e la distanza tra due vettori è $\\|u-v\\|$. Vale la <strong>disuguaglianza di Cauchy–Schwarz</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$, quindi l'angolo $\\varphi$ tra vettori non nulli è ben definito: $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>",
    "<p>I vettori sono <strong>ortogonali</strong> ($u\\perp v$) se $\\langle u, v\\rangle=0$. Un sistema di vettori non nulli a due a due ortogonali è linearmente indipendente; se inoltre hanno norma 1, è <strong>ortonormale</strong>. La <strong>proiezione ortogonale</strong> del vettore $v$ sulla direzione $u\\neq o$ è $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$; il vettore $v-\\operatorname{proj}_u v$ è perpendicolare a $u$ e la sua norma è la distanza del punto $v$ dalla retta $\\mathcal{L}(u)$.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "Proiezione del vettore $v$ (blu) sulla retta di direzione $u=(\\cos\\theta, \\sin\\theta)$: il vettore verde è $\\operatorname{proj}_u v$, il segmento tratteggiato è perpendicolare alla retta."
    },
    "<p>Il <strong>procedimento di Gram–Schmidt</strong> trasforma vettori linearmente indipendenti $u_1, \\dots, u_k$ in vettori ortogonali che generano lo stesso sottospazio: $w_1=u_1$ e $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, cioè da ogni vettore sottraiamo le sue proiezioni sui vettori già ottenuti. Dividendo per le norme $e_j=w_j/\\|w_j\\|$ otteniamo una base ortonormale.</p>"
   ],
   "examples": [
    {
     "task": "Trova la proiezione ortogonale del vettore $v=(3, 1, 2)$ sulla direzione $u=(1, 1, 0)$ e la distanza del punto $v$ dalla retta $\\mathcal{L}(u)$.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, quindi $\\operatorname{proj}_u v=2u=(2, 2, 0)$.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$; verifica della perpendicolarità: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>Distanza:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "Con il procedimento di Gram–Schmidt ortogonalizza i vettori $u_1=(1, 1, 1)$ e $u_2=(1, 2, 3)$.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, quindi $w_2=u_2-2w_1=(-1, 0, 1)$; infatti $\\langle w_1, w_2\\rangle=0$.",
      "Base ortonormale: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "Forme quadratiche e segno",
   "summary": "Matrice di una forma quadratica, forme definite e indefinite, criterio di Sylvester.",
   "theory": [
    "<p>Una <strong>forma quadratica</strong> su $\\mathbb{R}^n$ è una funzione $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$, dove $A$ è una matrice simmetrica – la <strong>matrice della forma</strong>. Il coefficiente di $x_i^2$ è $a_{ii}$, il coefficiente di $x_ix_j$ ($i\\neq j$) è $2a_{ij}$. Per esempio $Q=x_1^2+4x_1x_2-3x_2^2$ ha matrice $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$.</p>",
    "<p>La forma (e la sua matrice) è <strong>definita positiva</strong> se $Q(x)\\gt 0$ per ogni $x\\neq o$; <strong>semidefinita positiva</strong> se $Q(x)\\ge 0$ per ogni $x$; analogamente <strong>(semi)definita negativa</strong>; e <strong>indefinita</strong> se assume sia valori positivi sia negativi. Con gli autovalori: tutti positivi $\\iff$ definita positiva, tutti non negativi $\\iff$ semidefinita positiva, di segni diversi $\\iff$ indefinita.</p>",
    "<p><strong>Criterio di Sylvester:</strong> siano $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ i minori principali di nord-ovest. La forma è definita positiva $\\iff D_k\\gt 0$ per ogni $k$; definita negativa $\\iff$ i segni si alternano $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … Se $\\det A\\neq 0$ e non si verifica nessuno dei due casi, la forma è indefinita. Se $\\det A=0$ i minori di nord-ovest non bastano per decidere la semidefinitezza – servono gli autovalori o tutti i minori principali.</p>"
   ],
   "examples": [
    {
     "task": "Studia il segno della forma $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$.",
     "steps": [
      "Matrice della forma: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "Tutti i minori di nord-ovest sono positivi, la forma è <strong>definita positiva</strong>."
     ]
    },
    {
     "task": "Per quali $a$ la forma $Q=x^2+4xy+ay^2$ è definita positiva?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>Risultato:</strong> la forma è definita positiva esattamente per $a\\gt 4$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: la $i$-esima riga della matrice inversa è formata dai complementi algebrici della $i$-esima <em>colonna</em> della matrice $A$.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Quindi $c={@5}$.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. Confrontando con $A$ vediamo che {@1}.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$, quindi ${@1}={@2}={@3}$.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Quindi $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ è l'insieme delle soluzioni di un sistema omogeneo, quindi $\\dim W=n-h(A)$. Rango della matrice del sistema:<br>{@0}<br>$h(A)={@1}$, quindi $\\dim W={@2}-{@3}={@4}$.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; le norme di questi vettori risultano intere.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$, un autovalore è $0$ e l'altro è uguale a $\\operatorname{tr}A={@0}$; entrambi sono quindi {@1} e uno è nullo",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$, quindi $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. Secondo la formula $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ ci servono i complementi algebrici della {@3}ª colonna: ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. Inoltre $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ e ${@5}$. Quindi $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ e non si è verificato nessuno dei casi precedenti",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ e la trasposizione non cambia il determinante. Il prodotto contiene quindi $\\det A$ due volte.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$ e $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ è il numero di colonne della matrice (dimensione del dominio).",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, quindi $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. La condizione $\\langle u, v\\rangle=0$ dà $t={@2}$.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, l'equazione caratteristica è ${@2}{@3}=0$.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$, la soluzione è unica",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$, le soluzioni sono infinite ({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$, il sistema non ha soluzioni",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, coefficiente $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; il risultato deve essere ortogonale a $w_1$.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Verifica: $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, dove in $D_{{@2}}$ sostituisci la {@3}ª colonna della matrice del sistema con la colonna dei termini noti.",
  "(mení orientáciu)": "(cambia l'orientamento)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(infatti ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ prodotti sulle diagonali verdi",
  ", teda ${@0}{@1} {@2} = {@3}$": ", quindi ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "<strong>È</strong> un sottospazio: {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "<strong>Non è</strong> un sottospazio: {@0}.",
  "Aká je definitnosť formy?": "Di che segno è la forma?",
  "Aká je dimenzia $W$?": "Qual è la dimensione di $W$?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "Qual è la dimensione del nucleo $\\operatorname{Ker}f$?",
  "Aká je hodnosť matice $A$?": "Qual è il rango della matrice $A$?",
  "Aká je hodnosť matice sústavy $h(A)$?": "Qual è il rango della matrice del sistema $h(A)$?",
  "Aká je hodnosť matice sústavy?": "Qual è il rango della matrice del sistema?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "Qual è il rango della matrice completa $h(A\\mid b)$?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "Qual è il segno di $(-1)^{{@0}+{@1}}$? Inserisci $1$ o $-1$.",
  "Aký je absolútny člen $D_0$?": "Qual è il termine noto $D_0$?",
  "Aký je absolútny člen $b$?": "Qual è il termine noto $b$?",
  "Aký je determinant tejto podmatice?": "Qual è il determinante di questa sottomatrice?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "Il complemento algebrico va ancora diviso per il determinante della matrice $A$.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "Una matrice antisimmetrica ha zeri sulla diagonale e soddisfa $a_{ij}=-a_{ji}$. Verificalo per tutte le coppie.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "Non serve calcolare tutta la matrice inversa: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (gli indici del complemento algebrico sono scambiati).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "Con la regola di Cramer calcola l'incognita $x_{{@0}}$ del sistema ${@1}$. Inserisci un risultato non intero come frazione.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "Con la regola di Cramer: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "Sono dati i vettori $u={@0}$ e $v={@1}$ in $\\mathbb{R}^{{@2}}$. Calcola il vettore ${@3}$. Separa le componenti con il punto e virgola.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "Il determinante è diverso da zero, i vettori sono <strong>linearmente indipendenti</strong>.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "Il determinante è nullo, i vettori sono <strong>linearmente dipendenti</strong>{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "Il determinante è sì nullo, ma guarda il segno dell'autovalore non nullo: per una matrice $2\\times 2$ è uguale alla traccia.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "Il determinante della matrice con righe $u, v, w$ è una funzione lineare del parametro $t$: sviluppalo lungo la riga con il parametro e poni il risultato uguale a zero.",
  "Diagonálne prvky matice $D^{{@0}}$?": "Elementi diagonali della matrice $D^{{@0}}$?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "L'elemento diagonale $(A^{T}A)_{jj}$ è la somma dei quadrati degli elementi della $j$-esima colonna di $A$, quindi $\\operatorname{tr}(A^{T}A)$ è la somma dei quadrati di tutti gli elementi: ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "La dimensione del sottospazio generato è il rango della matrice le cui righe sono i vettori dati:<br>{@0}<br>La forma a scala ha {@1} {@2}, quindi $\\dim W={@3}$.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "Discriminante ${@0}{@1}$, quindi $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, cioè $\\lambda_1={@4}$ e $\\lambda_2={@5}$.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "Fuori dalla diagonale, nella matrice della forma va metà del coefficiente di $xy$, cioè ${@0}$, non ${@1}$.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "Sostituisci $x_3$ nella penultima riga e calcola $x_2$.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "La forma $Q={@0}$ è definita positiva se e solo se $a\\gt c$. Determina il numero $c$ (eventualmente come frazione).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "La forma $Q={@0}+ay^2$ è definita positiva se e solo se $a\\gt c$. Determina il numero $c$ (eventualmente come frazione).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "Con l'eliminazione di Gauss portiamo la matrice in forma a scala:<br>{@0}<br>La forma a scala ha {@1} {@2}, quindi $h(A)={@3}$.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "Risolvi con l'eliminazione di Gauss il sistema ${@0}$. Inserisci la soluzione nella forma «x₁; x₂; x₃».",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "Con il procedimento di Gram–Schmidt ortogonalizza i vettori $u_1={@0}$ e $u_2={@1}$ (in quest'ordine, senza normalizzare). Inserisci il vettore $w_2$.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "Cerca un controesempio: il vettore nullo appartiene a $W$? La somma di due elementi di $W$ sta ancora in $W$? E un loro multiplo?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "Una forma indefinita assume valori sia positivi sia negativi. Verifica i segni dei minori di nord-ovest secondo il criterio di Sylvester.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "Il nucleo è l'insieme delle soluzioni del sistema omogeneo $Ax=o$. Riduci la matrice e scegli un'incognita libera come parametro.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "Il nucleo è l'insieme delle soluzioni del sistema $Ax=o$:<br>{@0}<br>$h(A)=2$, quindi $\\dim\\operatorname{Ker}f=3-2=1$. La soluzione è ortogonale a entrambe le righe non nulle, quindi è un multiplo di ${@1}\\times{@2}={@3}${@4}. Quindi $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "L'insieme $W={@0}$ è un sottospazio dello spazio vettoriale $\\mathbb{R}^3$?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "La forma è definita positiva solo se tutti i minori principali di nord-ovest sono positivi.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "Il coefficiente di $x_ix_j$ ($i\\neq j$) si divide in parti uguali tra $a_{ij}$ e $a_{ji}$, quindi $a_{ij}$ è metà del coefficiente. Matrice della forma: $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "Nella matrice simmetrica il coefficiente di $x_ix_j$ si divide in parti uguali tra $a_{ij}$ e $a_{ji}$: ciascuno riceve la metà.",
  "Koľko riešení má sústava ${@0}$?": "Quante soluzioni ha il sistema ${@0}$?",
  "Koľko riešení má sústava?": "Quante soluzioni ha il sistema?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "La forma quadratica è $Q={@0}$. Determina gli elementi $a_{12}, a_{13}, a_{23}$ della sua matrice simmetrica (separati da punto e virgola) (frazioni nella forma $p/q$).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "La forma quadratica è $Q={@0}$. Determina l'elemento $a_{12}$ della sua matrice simmetrica (frazioni nella forma $p/q$).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "Il fattore quadratico ha $\\operatorname{tr}={@0}$, $\\det={@1}$ e radici ${@2}$ e ${@3}$. Gli autovalori sono ${@4}$.",
  "Lineárna kombinácia dvoch vektorov": "Combinazione lineare di due vettori",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "Un'applicazione lineare $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ soddisfa $f{@0}={@1}$ e $f{@2}={@3}$. Trova la matrice $A$ dell'applicazione $f$ (nella base canonica). Inserisci gli elementi per righe.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "La matrice $-A^{3}$ è $(-1)\\cdot A^{3}$, e $\\det(-M)=(-1)^{{@0}}\\det M$.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "La matrice $A={@0}$ ha autovalori ${@1}$ e ${@2}$. Usando la diagonalizzazione calcola $A^{{@3}}$. Inserisci gli elementi per righe.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "La matrice $B$ si ottiene da $A$ scambiando le prime due righe e moltiplicando l'ultima riga per ${@0}$.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "Matrice della forma $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ non dipendono da $a$. Sviluppando lungo la 3ª riga (o con la regola di Sarrus) $D_3=\\det A={@3}$.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "Matrice della forma: $A={@0}$. Minori principali di nord-ovest: ${@1}$. Poiché {@2}, la forma è <strong>{@3}</strong>.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "La matrice non è triangolare, quindi gli autovalori non sono i suoi elementi diagonali. Sviluppa $\\det(A-\\lambda I)$ lungo la 3ª riga.",
  "Matica v stupňovitom tvare": "Matrice in forma a scala",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "Matrici: $A_f={@0}$, $A_g={@1}$. La composizione ha matrice $A_gA_f={@2}$, quindi $(g\\circ f)(v)={@3}{@4}={@5}$.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "Il minore $D_3=\\det A$ ha la forma $D_2\\,a+K$. Quanto vale il numero $K$?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "Il minore va ancora moltiplicato per l'elemento stesso $a_{{@0}{@1}}={@2}$ lungo cui sviluppi.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "Minore: $M_{{@0}{@1}}={@2}={@3}$. Quindi $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "La potenza di una matrice non si calcola elemento per elemento: questo vale solo per la matrice diagonale $D$. Usa $A^k=PD^kP^{-1}$.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "Prima trasponi $B$ (righe ↔ colonne), poi calcola elemento per elemento.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "Prima moltiplica ogni vettore per il suo coefficiente (ogni componente), poi somma le componenti corrispondenti.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "Scrivi $v=c_1b_1+c_2b_2+c_3b_3$ per componenti: ottieni un sistema di tre equazioni in cui i vettori della base sono le colonne della matrice.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "Scrivi la matrice $A-{@0}I$ (elementi per righe).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "Scrivi la matrice $B^{T}$ (elementi per righe).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "Le soluzioni sono infinite solo se $h(A)=h(A\\mid b)\\lt 3$. Guarda anche il termine noto della riga che è nulla nella matrice del sistema.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "Trova una soluzione non banale del sistema omogeneo ${@0}$. (Accettiamo qualsiasi multiplo non nullo.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "Trova la matrice $X$ tale che ${@0}X-A=B^{T}$, se $A={@1}$ e $B={@2}$. Inserisci gli elementi per righe.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "Trova una soluzione non nulla del sistema $(A-\\lambda I)v=o$ (qualsiasi multiplo non nullo è corretto).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "Trova le coordinate del vettore $v={@0}$ nella base $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ dello spazio $\\mathbb{R}^3$. Inseriscile nella forma «c₁; c₂; c₃».",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "Trova gli autovettori, costruisci $P$ e $D$ e usa $A^k=PD^kP^{-1}$; la potenza di una matrice diagonale si calcola elemento per elemento sulla diagonale.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "Trova gli autovalori della matrice $A={@0}$. Inseriscili separati da punto e virgola.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "Trova tutti gli autovalori della matrice $A={@0}$. Inseriscili separati da punto e virgola (un autovalore multiplo va inserito più volte).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "Trova la {@0}ª riga della matrice inversa della matrice $A={@1}$. Inserisci tre numeri separati da punto e virgola.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "Trova i numeri $\\alpha, \\beta$ tali che ${@0}=\\alpha{@1}+\\beta{@2}$. Inseriscili nella forma «α; β».",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "Il prodotto di matrici non è commutativo. Dall'equazione ${@0}$ bisogna moltiplicare per la matrice $A^{-1}$ {@1}.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "Entrambe le condizioni insieme: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Inverti la matrice $(u\\mid v)$ e moltiplica a destra.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "Immagine del quadrato unitario tramite l'applicazione data da una matrice 2×2",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "Dal numero di incognite non si sottrae il numero di equazioni, ma il rango della matrice del sistema: alcune equazioni possono essere dipendenti.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "Sottrai i vettori componente per componente e usa $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.",
  "Ortogonálna projekcia vektora na priamku": "Proiezione ortogonale di un vettore su una retta",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "Verifica tutte e tre le condizioni: vettore nullo, chiusura rispetto alla somma e al prodotto per uno scalare. Se valgono tutte, si tratta di un sottospazio.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "Verifica se $W$ contiene il vettore nullo e se è chiuso rispetto alla somma e al prodotto per un numero reale. Per confutarlo basta un controesempio.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "Dopo la riduzione restano due equazioni indipendenti. Scegli un'incognita come parametro (oppure usa il prodotto vettoriale di due righe).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "La condizione $D = 0$ dà ${@0}{@1} = {@2}$, quindi ${@3} = {@4}$.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "La condizione $D_3\\gt 0$ dà $a\\gt {@0}$, quindi $c={@1}$.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "Confronta $A^{T}$ sia con $A$ sia con $-A$ elemento per elemento. Forse vale una delle uguaglianze.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "Confrontando le componenti otteniamo il sistema ${@0}={@1}$, ${@2}={@3}$.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "Usa $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ e $\\det A^{-1}=1/\\det A$.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "Usa la regola di Sarrus: tre prodotti «verso destra in basso» con il segno più, tre «verso sinistra in basso» con il segno meno.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "Hai usato i complementi algebrici della {@0}ª riga. La matrice aggiunta è trasposta: la {@1}ª riga della matrice inversa è formata dai complementi della {@2}ª colonna.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "Hai usato il complemento $A_{{@0}{@1}}$. Per l'elemento $(A^{-1})_{{@2}{@3}}$ serve il complemento con gli indici scambiati, $A_{{@4}{@5}}$.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "Calcoliamo componente per componente: ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "Per $A={@0}$ e $B={@1}$ calcola la matrice ${@2}$. Inserisci gli elementi per righe (4 numeri separati da punto e virgola).",
  "Pre ktoré $a$ je $D=0$?": "Per quale $a$ si ha $D=0$?",
  "Pre ktoré $t$ je $D=0$?": "Per quale $t$ si ha $D=0$?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "Per quale $t$ il prodotto scalare è nullo? Inserisci un risultato non intero come frazione.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "Per quale $t$ i vettori $u={@0}$ e $v={@1}$ sono ortogonali? Inserisci un risultato non intero come frazione.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "Per quale valore del parametro $a$ la matrice $A={@0}$ ha rango 2?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "Per quale valore del parametro $t$ i vettori $u={@0}$, $v={@1}$ e $w={@2}$ sono linearmente dipendenti?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "Per una matrice $2\\times 2$ risolvi $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "Per la matrice $A={@0}$ calcola l'elemento $(A^{-1})_{{@1}{@2}}$ della matrice inversa. Inserisci un risultato non intero come frazione.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Per la matrice $A={@0}$ calcola la traccia $\\operatorname{tr}(A^{T}A)$.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "Ricalcola il determinante con la regola di Sarrus: tre prodotti si sommano e tre si sottraggono. I vettori sono indipendenti solo se il determinante è diverso da zero.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "Per una matrice di ordine 3 non bastano due diagonali come per $2\\times 2$. La regola di Sarrus ha sei prodotti: tre positivi e tre negativi.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "Moltiplicando una matrice di ordine ${@0}$ per un numero $c$, il determinante si moltiplica per $c^{n}$, non solo per $c$.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "Moltiplicando una matrice di ordine ${@0}$ per un numero $c$, ciascuna delle ${@1}$ righe viene moltiplicata per $c$: $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "Portando $A$ dall'altra parte cambia il segno: ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "Per il termine misto $c\\,x_ix_j$ si ha $a_{ij}=a_{ji}=c/2$.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "La proiezione su $w_1$ va sottratta da $u_2$, non sommata. Verifica se il risultato è ortogonale a $w_1$.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "Gli elementi non sono stati elevati al quadrato. L'elemento diagonale $(A^{T}A)_{jj}$ è il prodotto scalare della $j$-esima colonna con sé stessa, cioè la somma dei quadrati.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "L'elemento $(A^{T}A)_{jj}$ è il prodotto scalare della $j$-esima colonna della matrice $A$ con sé stessa.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "Le prime due righe non sono proporzionali, quindi $h(A)\\ge 2$. Il rango è minore di 3 se e solo se $D=\\det A=0$. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "I primi due minori di nord-ovest non dipendono da $a$; $D_3=\\det A$ è una funzione lineare di $a$ con coefficiente $D_2$.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "Il sistema ha un'unica soluzione solo se $h(A)=h(A\\mid b)=3$. Verifica se dopo l'eliminazione non compare una riga nulla nella matrice del sistema.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "Con operazioni elementari sulle righe azzera gli elementi sotto i pivot e conta le righe non nulle.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "Le soluzioni di un sistema omogeneo con $n$ incognite formano un sottospazio di dimensione $n-h(A)$.",
  "Riešenie je $X={@0}={@1}={@2}$.": "La soluzione è $X={@0}={@1}={@2}$.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "Risolviamo $(A-\\lambda I)v=o$, dove $A-{@0}I={@1}$. {@2} Verifica: $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "Rotazione di una figura attorno all'origine",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "L'equazione $c_1b_1+c_2b_2+c_3b_3=v$ è un sistema la cui matrice ha i vettori della base nelle colonne:<br>{@0}<br>Sostituzione all'indietro: {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "Moltiplica l'equazione a destra per la matrice $A^{-1}$: $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "Moltiplica l'equazione a sinistra per la matrice $A^{-1}$: $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "Stabilisci di che tipo è la matrice $A={@0}$.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "Sviluppa il determinante lungo una riga o una colonna che ha un solo elemento non nullo. Non dimenticare il segno $(-1)^{i+j}$.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "Sviluppo di $\\det(A-\\lambda I)$ lungo la 3ª riga: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Lo sviluppo del determinante lungo la 3ª riga dà $D=Ca+D_0$. Quanto vale il coefficiente $C$ (complemento algebrico dell'elemento con il parametro)?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Lo sviluppo lungo la 3ª riga dà $D=Ct+D_0$. Quanto vale il coefficiente $C$ (complemento algebrico dell'elemento con il parametro)?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "Sviluppo lungo la 3ª riga: $D = {@0}$, dove ${@1}$. Quindi $D = {@2}$.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "Sviluppando lungo la 3ª riga ottieni il fattore $(c-\\lambda)$. Quanto vale $c$?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "Riduci la matrice completa a forma a scala e calcola le incognite dal basso.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "Tratta l'equazione matriciale come un'equazione ordinaria: isola $X$, poi calcola elemento per elemento.",
  "Sarrusovo pravidlo pre determinant 3×3": "Regola di Sarrus per il determinante 3×3",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "Regola di Sarrus: $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "Regola di Sarrus: tre prodotti sulle diagonali verso destra in basso con il segno più, tre verso sinistra in basso con il segno meno.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "Una forma semidefinita ha $\\det A=0$, quindi almeno un autovalore è nullo. Controlla il determinante.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "Il prodotto scalare $\\langle u, v\\rangle$ ha la forma $at+b$. Quanto vale il coefficiente $a$?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "Il prodotto scalare va ancora diviso per il numero $\\langle u, u\\rangle=\\|u\\|^2$.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "Le colonne della matrice dell'applicazione sono le immagini dei vettori $e_1=(1, 0)$ e $e_2=(0, 1)$. Alla composizione «prima $f$, poi $g$» corrisponde il prodotto $A_gA_f$.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "La colonna dei termini noti va nella {@0}ª <em>colonna</em> del determinante, non nella {@1}ª riga.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "Criterio di Sylvester: $D_1\\gt 0$ vale sempre, la condizione la dà $D_2=\\det A\\gt 0$.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "Una matrice simmetrica soddisfa $a_{ij}=a_{ji}$ per tutte le coppie di elementi simmetrici rispetto alla diagonale principale. Confrontali uno per uno.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "I vettori $u={@0}$, $v={@1}$ e $w={@2}$ sono linearmente dipendenti o indipendenti?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "I vettori sono linearmente dipendenti o indipendenti?",
  "Súradnice vektora v báze b₁, b₂": "Coordinate di un vettore nella base b₁, b₂",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "Il sistema è ${@0}={@1}$, ${@2}={@3}$. Calcola il suo determinante $D$.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "Il sistema non ha soluzioni solo se compare una riga $(0\\ 0\\ 0\\mid c)$ con $c\\neq 0$, cioè $h(A)\\neq h(A\\mid b)$.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "I prodotti sulle diagonali verso sinistra in basso si sottraggono dai termini positivi, non si sommano.",
  "Sčítaj ich: aký je vektor ${@0}$?": "Sommali: qual è il vettore ${@0}$?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "Quindi la {@0}ª riga della matrice $A^{-1}$ è $\\frac{1}{{@1}}({@2})={@3}$.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "Questa è $\\dim\\operatorname{Im}f=h(A)$. La dimensione del nucleo è il numero di colonne meno il rango.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "Questa è la dimensione dell'intero spazio $\\mathbb{R}^{{@0}}$. Un sottospazio può avere dimensione minore: decide il rango.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "Questa è la dimensione del nucleo. La dimensione dell'immagine è uguale al rango della matrice.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "Questo è il rango della matrice del sistema. La dimensione dello spazio delle soluzioni è il numero di incognite libere, $n-h(A)$.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "Questo è il numero di righe della matrice originale. Il rango è il numero di righe non nulle solo dopo averla portata in forma a scala.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "Questo è il numero di colonne. Il rango è il numero di righe non nulle della forma a scala.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "Questo è il numero di vettori. Alcuni di essi possono essere combinazione lineare degli altri; la dimensione è il rango della matrice formata da essi.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "Questa è la proiezione del vettore $u$ sulla direzione di $v$. Proiettiamo $v$ sulla direzione di $u$, quindi il risultato è un multiplo del vettore $u$.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "Trasponi la matrice e confrontala con $A$ e con $-A$. Guarda anche la diagonale.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "Tre casi per un sistema di due equazioni in due incognite",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "Tre vettori in $\\mathbb{R}^3$ sono linearmente indipendenti se e solo se il determinante della matrice formata da essi è diverso da zero.",
  "Uhol priamky θ (°)": "Angolo della retta θ (°)",
  "Uhol φ (°)": "Angolo φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "Riduci la matrice completa a forma a scala e confronta $h(A)$ con $h(A\\mid b)$ e con il numero di incognite.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "Riduci la matrice completa a forma a scala. Qual è il rango della matrice del sistema $h(A)$?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "Riduci la matrice completa a forma a scala. Dall'ultima riga calcola $x_3$.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "Determina il segno della forma quadratica $Q={@0}$ (scegli l'opzione più precisa).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "Determina la dimensione del sottospazio $W=\\mathcal{L}({@0})$ dello spazio $\\mathbb{R}^{{@1}}$.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "Determina la dimensione del sottospazio $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.",
  "Urči hodnosť matice $A={@0}$.": "Determina il rango della matrice $A={@0}$.",
  "Urči číslo $c$ (prípadne ako zlomok).": "Determina il numero $c$ (eventualmente come frazione).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "Al denominatore ci sono le norme $\\|u\\|$ e $\\|v\\|$, non i loro quadrati.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "Nella terza riga ci sono due zeri: sviluppa $\\det(A-\\lambda I)$ lungo di essa e risolvi il determinante $2\\times 2$ rimanente come equazione quadratica.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "Nella {@0}ª riga c'è un solo elemento non nullo $a_{{@1}{@2}}={@3}$, quindi lo sviluppo di Laplace lungo questa riga dà $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "Nella {@0}ª colonna c'è un solo elemento non nullo $a_{{@1}{@2}}={@3}$, quindi lo sviluppo di Laplace lungo questa colonna dà $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "Il vettore $v={@0}$ viene prima trasformato dall'applicazione $f$: {@1}, e il risultato poi dall'applicazione $g$: {@2}. Determina l'immagine $(g\\circ f)(v)$ nella forma «x; y».",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "I vettori della base vanno nelle <em>colonne</em> della matrice del sistema, non nelle righe: la $i$-esima equazione confronta le $i$-esime componenti.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "I vettori sono ortogonali se e solo se il loro prodotto scalare è nullo.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "I vettori sono dipendenti se e solo se $D={@0}=0$. {@1} Per $t={@2}$ il vettore $w$ è combinazione lineare dei vettori $u$ e $v$.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "Scrivi i vettori nelle righe di una matrice e determinane il rango.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "Scriviamo i vettori nelle righe di una matrice e calcoliamo il determinante con la regola di Sarrus: ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "Scriviamo i vettori nelle colonne: $A\\,U=P$, dove $U={@0}$ e $P={@1}$. Poiché $\\det U={@2}$, si ha $U^{-1}={@3}$ e $A=PU^{-1}={@4}{@5}={@6}$.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "Gli autovettori sono le soluzioni non nulle del sistema omogeneo $(A-\\lambda I)v=o$.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "Autovettori: ${@0}$ per $\\lambda={@1}$ e ${@2}$ per $\\lambda={@3}$. Quindi $P={@4}$, $D={@5}$, $\\det P={@6}$ e $P^{-1}={@7}$.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "Gli autovalori sono gli elementi della diagonale solo per una matrice triangolare. Qui risolvi l'equazione caratteristica $\\det(A-\\lambda I)=0$.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "Nel teorema della dimensione compare la dimensione del dominio, cioè il numero di colonne ${@0}$, non il numero di righe.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "Moltiplicare una riga per ${@0}$ moltiplica il determinante per ${@1}$.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcola $(A^{-1})_{{@0}{@1}}$. Inserisci un risultato non intero come frazione.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "Calcola $A=PU^{-1}$ (elementi per righe).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "Calcola $A^{-1}$ (elementi per righe).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "Calcola $A^{{@0}}=PD^{{@1}}P^{-1}$ (elementi per righe).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "Calcola $X={@0}$ (elementi per righe).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "Calcola $\\cos\\varphi$ (come frazione).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "Calcola $\\cos\\varphi$, dove $\\varphi$ è l'angolo tra i vettori $u={@0}$ e $v={@1}$. Inserisci il risultato come frazione.",
  "Vypočítaj $\\det A$.": "Calcola $\\det A$.",
  "Vypočítaj $\\langle u, u\\rangle$.": "Calcola $\\langle u, u\\rangle$.",
  "Vypočítaj $\\langle u, v\\rangle$.": "Calcola $\\langle u, v\\rangle$.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "Calcola $\\langle u_2, w_1\\rangle$, dove $w_1=u_1$.",
  "Vypočítaj $\\langle v, u\\rangle$.": "Calcola $\\langle v, u\\rangle$.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "Calcola $\\langle w_1, w_1\\rangle$.",
  "Vypočítaj $\\|u\\|$.": "Calcola $\\|u\\|$.",
  "Vypočítaj $\\|v\\|$.": "Calcola $\\|v\\|$.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "Calcola $c_1$ e inserisci tutte le coordinate.",
  "Vypočítaj $c_2$.": "Calcola $c_2$.",
  "Vypočítaj $f(v)$.": "Calcola $f(v)$.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "Calcola $g\\bigl(f(v)\\bigr)$.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "Calcola $x_{{@0}}$. Inserisci un risultato non intero come frazione.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "Calcola i complementi algebrici della {@0}ª colonna: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "Calcola il complemento algebrico $A_{{@0}{@1}}$.",
  "Vypočítaj determinant $D$ matice sústavy.": "Calcola il determinante $D$ della matrice del sistema.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "Calcola il determinante $D_\\alpha$ (sostituisci la prima colonna con i termini noti).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "Calcola il determinante $D_\\beta$ (sostituisci la seconda colonna con i termini noti).",
  "Vypočítaj determinant $D_{{@0}}$.": "Calcola il determinante $D_{{@0}}$.",
  "Vypočítaj determinant ${@0}$.": "Calcola il determinante ${@0}$.",
  "Vypočítaj determinant matice $A={@0}$.": "Calcola il determinante della matrice $A={@0}$.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "Calcola l'elemento diagonale $(A^{T}A)_{{@0}{@1}}$.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "Calcola il minore principale di nord-ovest $D_{@0}$.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "Calcola la matrice inversa di $U={@0}$ (elementi per righe).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "Calcola la matrice $A+B^{T}$ (elementi per righe).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "Calcola la matrice $X$ (elementi per righe).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "Calcola la matrice ${@0}$ (elementi per righe).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "Calcola il minore $M_{{@0}{@1}}$ (determinante dopo aver eliminato la {@2}ª riga e la {@3}ª colonna).",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "Calcola la proiezione ortogonale del vettore $v={@0}$ sulla direzione del vettore $u={@1}$. Inserisci le componenti separate da punto e virgola (frazioni nella forma $p/q$).",
  "Vypočítaj rohový minor $D_2$.": "Calcola il minore di nord-ovest $D_2$.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "Calcola la traccia $\\operatorname{tr}(A^{T}A)$.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "Calcola la traccia $\\operatorname{tr}A$.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "Calcola la somma dei tre prodotti sulle diagonali verso destra in basso.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "Calcola la somma dei tre prodotti sulle diagonali verso sinistra in basso.",
  "Vypočítaj vektor ${@0}u$.": "Calcola il vettore ${@0}u$.",
  "Vypočítaj vektor ${@0}{@1}v$.": "Calcola il vettore ${@0}{@1}v$.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "Calcola la distanza $\\|u-v\\|$ dei vettori $u={@0}$ e $v={@1}$.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "Risolvi l'equazione caratteristica $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Inserisci gli autovalori.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "Risolvi l'equazione matriciale ${@0}$, dove $A={@1}$ e $B={@2}$. Inserisci gli elementi della matrice $X$ per righe.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "Lo scambio di righe cambia il segno e moltiplicare una riga per ${@0}$ moltiplica il determinante per ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "Dalla prima riga calcola $x_1$ e inserisci l'intera soluzione.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "Dall'equazione $AU=P$ bisogna moltiplicare a destra per la matrice $U^{-1}$: $A=PU^{-1}$. Il prodotto di matrici non è commutativo.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "Dall'equazione $X=\\tfrac{1}{{@0}}(A+B^{T})$. Abbiamo $B^{T}={@1}$, $A+B^{T}={@2}$, quindi $X={@3}$.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "Dalla {@0}ª riga: ${@1}=0$, quindi l'autovettore è un multiplo di ${@2}$.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "Hai dimenticato di trasporre la matrice $B$: in $B^{T}$ le righe della matrice $B$ sono scritte come colonne.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "Hai dimenticato di trasporre la matrice $B$: nell'equazione c'è $B^{T}$.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "Hai dimenticato di moltiplicare i vettori per i loro coefficienti. Moltiplica prima ogni componente dei vettori $u$ e $v$ per il numero corrispondente.",
  "Zadaj $\\alpha$ a $\\beta$.": "Inserisci $\\alpha$ e $\\beta$.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "Inserisci una soluzione non banale (accettiamo qualsiasi multiplo non nullo).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "Inserisci la proiezione $\\operatorname{proj}_u v$ (frazioni nella forma $p/q$).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "Inserisci il vettore direttore del nucleo (qualsiasi multiplo non nullo è corretto).",
  "Zadaj vektor $w_2$.": "Inserisci il vettore $w_2$.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "Inserisci un autovettore relativo a $\\lambda={@0}$ (qualsiasi multiplo non nullo).",
  "Zadaj všetky vlastné čísla matice $A$.": "Inserisci tutti gli autovalori della matrice $A$.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "Inserisci la {@0}ª riga della matrice $A^{-1}$.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "Scrivi l'uguaglianza per componenti: ottieni un sistema di due equazioni in $\\alpha$ e $\\beta$.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "Hai applicato le applicazioni nell'ordine inverso. Su $v$ si applica prima $f$, quindi la matrice della composizione è $A_gA_f$ (la matrice $A_f$ sta accanto al vettore).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "L'applicazione $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ è definita da $f(x)=Ax$, dove $A={@0}$. Il nucleo $\\operatorname{Ker}f$ è una retta. Trova un suo vettore direttore (qualsiasi multiplo non nullo è corretto).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "L'applicazione $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ è data dalla matrice $A={@2}$. Determina $\\dim\\operatorname{{@3}}f$.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "Costruisci la matrice simmetrica della forma (per i termini misti metà del coefficiente) e calcola i minori principali di nord-ovest.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "Imposta il sistema (vettori della base nelle colonne) e riducilo a forma a scala. Dall'ultima riga calcola $c_3$.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "Il fattore rimanente è il polinomio caratteristico della sottomatrice $2\\times 2$ in alto a sinistra. Qual è la sua traccia?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "La forma è definita negativa solo se i segni dei minori di nord-ovest si alternano e $D_1\\lt 0$.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "I vettori sono dipendenti solo se il determinante è nullo. Ricalcolalo con la regola di Sarrus e fai attenzione ai segni.",
  "ani symetrická, ani antisymetrická": "né simmetrica né antisimmetrica",
  "antisymetrická": "antisimmetrica",
  "indefinitná": "indefinita",
  "je podpriestor": "è un sottospazio",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "è il sottospazio generato dai vettori $(1, {@0}, 0)$ e $({@1}, 0, 1)$",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "è l'insieme delle soluzioni di un'equazione lineare omogenea: la somma di soluzioni e il multiplo di una soluzione sono ancora soluzioni",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "è l'insieme delle soluzioni di un sistema omogeneo (una retta passante per l'origine)",
  "jeden parameter": "un parametro",
  "kladne definitná": "definita positiva",
  "kladne semidefinitná": "semidefinita positiva",
  "kolmá projekcia na os $x$": "proiezione ortogonale sull'asse $x$",
  "kolmá projekcia na os $y$": "proiezione ortogonale sull'asse $y$",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "autovalori complessi: nessuna direzione propria reale",
  "lineárne nezávislé": "linearmente indipendenti",
  "lineárne závislé": "linearmente dipendenti",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "ad es. $(1, 0, 0)$ e $(0, 1, 0)$ vi appartengono, ma la loro somma $(1, 1, 0)$ no: non è chiuso rispetto alla somma",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "ad es. $(1, 0, 0)$ vi appartiene, ma $(-1)\\cdot(1, 0, 0)$ no: non è chiuso rispetto al prodotto per uno scalare",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "ad es. $(1, 1, 0)$ vi appartiene, ma $2\\cdot(1, 1, 0)=(2, 2, 0)$ no, perché $2\\neq 4$",
  "nekladné": "non positivi",
  "nenulové riadky": "righe non nulle",
  "nenulový riadok": "riga non nulla",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "non contiene il vettore nullo ($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "non contiene il vettore nullo: la prima componente è 0 solo per $s=0$, ma allora la seconda componente è ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "non vale né $A^{T}=A$ né $A^{T}=-A$, quindi la matrice non è né simmetrica né antisimmetrica",
  "nezáporné": "non negativi",
  "nie je podpriestor": "non è un sottospazio",
  "osová súmernosť podľa osi $x$": "simmetria rispetto all'asse $x$",
  "osová súmernosť podľa osi $y$": "simmetria rispetto all'asse $y$",
  "osová súmernosť podľa priamky $y=-x$": "simmetria rispetto alla retta $y=-x$",
  "osová súmernosť podľa priamky $y=x$": "simmetria rispetto alla retta $y=x$",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "vale $A^{T}=-A$, quindi la matrice è antisimmetrica",
  "platí $A^{T}=A$, teda matica je symetrická": "vale $A^{T}=A$, quindi la matrice è simmetrica",
  "práve jedno riešenie": "un'unica soluzione",
  "rotácia o $180^\\circ$": "rotazione di $180^\\circ$",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "rotazione di $90^\\circ$ in senso antiorario",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "rotazione di $90^\\circ$ in senso orario",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "omotetia di centro l'origine e rapporto $2$",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "trasformazione di taglio $(x, y)\\mapsto(x+y, y)$",
  "sprava": "a destra",
  "symetrická": "simmetrica",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "coordinate nella base B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) nella base canonica",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "quindi $\\alpha=\\frac{{@0}}{{@1}}={@2}$ e $\\beta=\\frac{{@3}}{{@4}}={@5}$.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "i pivot sono evidenziati, sotto la scala ci sono solo zeri",
  "všetky rohové minory sú kladné": "tutti i minori di nord-ovest sono positivi",
  "z {@0}. riadku: ${@1} = {@2}$": "dalla {@0}ª riga: ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "i segni dei minori di nord-ovest si alternano ({@0})",
  "záporne definitná": "definita negativa",
  "záporne semidefinitná": "semidefinita negativa",
  "zľava": "a sinistra",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$, le soluzioni formano una retta (un parametro). La soluzione è ortogonale a entrambe le righe non nulle della forma a scala, quindi la otteniamo come loro prodotto vettoriale: ${@1}\\times{@2}={@3}${@4}. Tutte le soluzioni sono $t\\cdot{@5}$, $t\\in\\mathbb{R}$.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$, quindi $\\dim\\operatorname{Im}f={@2}$ e per il teorema della dimensione $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>Per il teorema di Rouché–Capelli: {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>Sostituzione all'indietro: {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "Riducendo: {@0}<br>Il rango è 2, la soluzione è ortogonale a entrambe le righe non nulle, quindi è un multiplo di ${@1}\\times{@2}={@3}${@4}.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "Il numero $\\lambda={@0}$ è un autovalore della matrice $A={@1}$. Trova un autovettore relativo (qualsiasi multiplo non nullo è corretto).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "La matrice quadrata $A$ di ordine ${@0}$ ha $\\det A={@1}$.{@2} Calcola ${@3}$. Inserisci un risultato non intero come frazione, ad es. $-3/4$.",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "Una matrice quadrata di ordine 3 ha rango 3 se e solo se il suo determinante è diverso da zero.",
  "− súčiny na oranžových diagonálach": "− prodotti sulle diagonali arancioni"
 }
});
