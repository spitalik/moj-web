/* Português: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/r4/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "r4-cisla10000": {
   "title": "Números até 10 000 e maiores",
   "summary": "Unidades de milhar, centenas, dezenas e unidades; ler, escrever e comparar números grandes.",
   "theory": [
    "<p>Cada algarismo de um número ocupa sua <strong>posição (ordem)</strong>: unidades, dezenas, centenas, unidades de milhar, dezenas de milhar…\n       Dez unidades formam uma dezena, dez dezenas formam uma centena, dez centenas formam um milhar e dez milhares formam $10\\,000$.</p>",
    {
     "fig": "r4-rady",
     "caption": "O número $47\\,385$ tem 4 dezenas de milhar, 7 unidades de milhar, 3 centenas, 8 dezenas e 5 unidades."
    },
    "<p>Escrevemos números grandes com um espaço a cada três algarismos, a partir da direita: $8\\,206$, $35\\,000$. Assim eles ficam mais fáceis de ler:\n       <em>oito mil duzentos e seis</em>, <em>trinta e cinco mil</em>.</p>",
    "<p><strong>Comparação:</strong> é maior o número que tem mais algarismos. Se os dois tiverem a mesma quantidade de algarismos, comparamos\n       da esquerda para a direita – primeiro os milhares, depois as centenas, as dezenas e as unidades. Por exemplo, $5\\,382 &gt; 5\\,297$, porque 3 centenas são mais que 2 centenas.</p>"
   ],
   "examples": [
    {
     "task": "Escreva com algarismos: 6 milhares, 0 centenas, 4 dezenas e 9 unidades.",
     "steps": [
      "Na casa das centenas escrevemos zero, para que os algarismos não mudem de lugar.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>O número é $6\\,049$.</strong>"
     ]
    },
    {
     "task": "Compare os números $7\\,615$ e $7\\,651$.",
     "steps": [
      "Os dois números têm quatro algarismos, 7 milhares e 6 centenas.",
      "Dezenas: 1 é menos que 5.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "Adição e subtração com conta armada",
   "summary": "Adição e subtração de números com vários algarismos, um embaixo do outro.",
   "theory": [
    "<p>Na adição com conta armada, escrevemos os números <strong>um embaixo do outro</strong>, com unidades embaixo de unidades, dezenas embaixo de\n       dezenas etc. Calculamos <strong>da direita para a esquerda</strong>, começando pelas unidades. Quando a soma de uma coluna passa de 9, escrevemos só as unidades\n       e o 1 “vai” para a próxima coluna.</p>",
    {
     "fig": "r4-scitanie",
     "caption": "Conta armada $3\\,476 + 2\\,858 = 6\\,334$. Os pequenos números 1 em cima são os que “vão”."
    },
    "<p>Na subtração com conta armada também começamos pelas unidades. Se o algarismo de cima for menor que o de baixo, somamos 10 a ele\n       e guardamos 1 para a próxima coluna, somando-o ao algarismo de baixo.</p>",
    "<p><strong>Verificação:</strong> conferimos o resultado da subtração com uma adição. Se $5\\,203 - 1\\,868 = 3\\,335$,\n       deve valer $3\\,335 + 1\\,868 = 5\\,203$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule com conta armada $4\\,587 + 3\\,765$.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "Unidades: $7 + 5 = 12$, escrevemos 2 e vai 1. Dezenas: $8 + 6 + 1 = 15$, escrevemos 5 e vai 1.",
      "Centenas: $5 + 7 + 1 = 13$, escrevemos 3 e vai 1. Milhares: $4 + 3 + 1 = 8$.",
      "<strong>Resultado: $8\\,352$</strong>"
     ]
    },
    {
     "task": "Calcule com conta armada $6\\,042 - 2\\,718$.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "Unidades: 2 é menos que 8, por isso $12 - 8 = 4$ e guardamos 1.",
      "Dezenas: $1 + 1 = 2$, $4 - 2 = 2$. Centenas: 0 é menos que 7, por isso $10 - 7 = 3$ e guardamos 1.",
      "Milhares: $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>Resultado: $3\\,324$</strong>. Verificação: $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "Multiplicação e divisão com conta armada",
   "summary": "Multiplicação por número de um e de dois algarismos, divisão por número de um algarismo com resto.",
   "theory": [
    "<p><strong>Multiplicação por número de um algarismo:</strong> multiplicamos, em ordem, as unidades, as dezenas, as centenas…\n       Se o resultado passar de 9, escrevemos as unidades, guardamos as dezenas e as somamos ao próximo produto.</p>",
    "<p><strong>Multiplicação por número de dois algarismos:</strong> primeiro multiplicamos pelas unidades, depois pelas dezenas. O segundo produto\n       parcial é escrito deslocado uma casa para a esquerda. No final, somamos os produtos parciais.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$: primeiro $243\\cdot 2 = 486$, depois $243\\cdot 3 = 729$ deslocado para a esquerda (significa $7\\,290$). Ao todo, $7\\,776$."
    },
    "<p><strong>Divisão com conta armada:</strong> dividimos da esquerda para a direita. Pegamos algarismos suficientes para poder dividir, achamos o resultado e o resto,\n       baixamos o próximo algarismo e continuamos. Se no final sobrar algo, é o <strong>resto</strong>, que é sempre menor que o divisor.\n       Verificação: $\\text{quociente}\\cdot\\text{divisor} + \\text{resto} = \\text{dividendo}$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule com conta armada $1\\,627\\cdot 4$.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, escrevemos 8 e vão 2. $4\\cdot 2 + 2 = 10$, escrevemos 0 e vai 1.",
      "$4\\cdot 6 + 1 = 25$, escrevemos 5 e vão 2. $4\\cdot 1 + 2 = 6$.",
      "<strong>Resultado: $6\\,508$</strong>"
     ]
    },
    {
     "task": "Calcule com conta armada $947 : 6$.",
     "steps": [
      "$9 : 6 = 1$, resto 3.",
      "Baixamos o 4: $34 : 6 = 5$, resto 4.",
      "Baixamos o 7: $47 : 6 = 7$, resto 5.",
      "<strong>$947 : 6 = 157$, resto 5.</strong> Verificação: $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "Problemas com várias operações",
   "summary": "Problemas que resolvemos em várias etapas: compras, divisão em grupos, comparação.",
   "theory": [
    "<p>Alguns problemas não se resolvem com uma só conta. Seguimos por etapas:</p>\n       <ol><li>O que sabemos? O que procuramos?</li><li>O que preciso descobrir primeiro para poder responder?</li>\n       <li>Calculo cada etapa e anoto.</li><li>Escrevo a resposta e verifico se ela faz sentido.</li></ol>",
    "<p><strong>Palavras úteis:</strong> <em>… a mais / a menos</em> – somamos ou subtraímos;\n       <em>… vezes mais / menos</em> – multiplicamos ou dividimos; <em>repartiram igualmente</em>, <em>… para cada</em> – dividimos;\n       <em>sobrou</em>, <em>troco</em> – subtraímos.</p>",
    "<p>Também podemos escrever as etapas em uma só expressão, por exemplo $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       Lembre-se da ordem das operações: primeiro a multiplicação e a divisão, depois a adição e a subtração.</p>"
   ],
   "examples": [
    {
     "task": "Mamãe comprou 3 livros de 12 euros cada e pagou com uma nota de 50 euros. Quantos euros ela recebeu de troco?",
     "steps": [
      "Primeiro descobrimos o preço dos livros: $3\\cdot 12 = 36$ euros.",
      "Depois o troco: $50 - 36 = 14$ euros.",
      "Tudo em uma só expressão: $50 - 3\\cdot 12 = 14$.",
      "<strong>Resposta: Mamãe recebeu 14 euros de troco.</strong>"
     ]
    },
    {
     "task": "Foram ao passeio 4 turmas de 23 alunos. Eles viajaram de ônibus, e em cada ônibus iam 46 alunos. Quantos ônibus foram?",
     "steps": [
      "Número de alunos: $4\\cdot 23 = 92$.",
      "Número de ônibus: $92 : 46 = 2$.",
      "<strong>Resposta: Foram 2 ônibus.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "Algarismos romanos",
   "summary": "Os símbolos I, V, X, L, C, D, M e a escrita de números em algarismos romanos.",
   "theory": [
    "<p>Os antigos romanos escreviam os números com sete letras. Até hoje encontramos algarismos romanos em relógios, nos nomes dos séculos\n       e em prédios.</p>",
    {
     "fig": "r4-rimske",
     "caption": "Algarismos romanos e seus valores."
    },
    "<p><strong>Regras:</strong> somamos os valores dos símbolos: $\\text{XVI} = 10 + 5 + 1 = 16$. O mesmo símbolo (I, X, C, M)\n       pode ser escrito no máximo três vezes seguidas: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>Se um símbolo menor estiver <strong>antes</strong> de um maior, nós o subtraímos: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. Por isso, não escrevemos 4 como IIII, e sim IV.</p>"
   ],
   "examples": [
    {
     "task": "Que número está escrito em algarismos romanos como $\\text{LXXIV}$?",
     "steps": [
      "Separamos: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "Escreva o número 39 em algarismos romanos.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "Ângulo, triângulo e quadriláteros",
   "summary": "Ângulo agudo, reto e obtuso; triângulo, retângulo, quadrado e outros quadriláteros.",
   "theory": [
    "<p>Um <strong>ângulo</strong> é formado por duas semirretas (lados) que saem de um mesmo ponto – o <strong>vértice</strong>.\n       O ângulo reto tem a forma do canto de um caderno. Um ângulo menor que o reto é <strong>agudo</strong>; um ângulo maior que o reto\n       (mas que ainda não forma uma linha reta) é <strong>obtuso</strong>.</p>",
    {
     "fig": "r4-uhly",
     "caption": "Ângulo agudo, reto e obtuso. Indicamos o ângulo reto com um quadradinho."
    },
    "<p>O <strong>triângulo</strong> tem 3 lados, 3 vértices e 3 ângulos. O <strong>quadrilátero</strong> tem 4 lados, 4 vértices e 4 ângulos.\n       O <strong>retângulo</strong> é um quadrilátero com 4 ângulos retos; seus lados opostos têm o mesmo comprimento.\n       O <strong>quadrado</strong> é um retângulo com os 4 lados do mesmo comprimento.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "O quadrado e o retângulo têm todos os ângulos retos. Todo quadrado também é um retângulo."
    }
   ],
   "examples": [
    {
     "task": "O ângulo entre os ponteiros do relógio às 3:00 é agudo, reto ou obtuso?",
     "steps": [
      "O ponteiro pequeno aponta para o 3, o grande para o 12.",
      "Entre eles há um quarto de volta – a forma do canto de um caderno.",
      "<strong>É um ângulo reto.</strong>"
     ]
    },
    {
     "task": "Um retângulo tem um lado de 7 cm e outro de 4 cm. Quanto medem os outros dois lados?",
     "steps": [
      "Os lados opostos do retângulo têm o mesmo comprimento.",
      "<strong>Os outros lados medem 7 cm e 4 cm.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "Perímetro e área",
   "summary": "Perímetro como comprimento do contorno, área como número de quadradinhos que cobrem a figura.",
   "theory": [
    "<p>O <strong>perímetro</strong> de uma figura é o comprimento do seu contorno – a soma das medidas de todos os lados. O perímetro de um retângulo de lados\n       $a$ e $b$ é $a + b + a + b$, ou seja, $2\\cdot(a + b)$. O perímetro de um quadrado de lado $a$ é $4\\cdot a$.</p>",
    "<p>A <strong>área</strong> diz quanto espaço a figura ocupa. Descobrimos a área contando os quadradinhos que a cobrem.\n       Um quadradinho de lado 1 cm tem área de 1 centímetro quadrado ($1\\,\\text{cm}^2$).</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "Retângulo de 4 cm × 3 cm: o perímetro é o comprimento do contorno azul, a área é o número de quadradinhos dentro dele."
    },
    "<p>No retângulo não precisamos contar os quadradinhos um por um: em cada linha há tantos quanto mede um lado,\n       e há tantas linhas quanto mede o outro lado. Por isso, área $= a\\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule o perímetro de um retângulo de lados 8 cm e 5 cm.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>O perímetro é $26\\,\\text{cm}$.</strong>"
     ]
    },
    {
     "task": "Um quadrado tem perímetro de 36 cm. Quanto mede o seu lado?",
     "steps": [
      "O quadrado tem 4 lados iguais, que juntos medem 36 cm.",
      "$36 : 4 = 9$.",
      "<strong>O lado mede $9\\,\\text{cm}$.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "Conversão de unidades e trabalho com dados",
   "summary": "Unidades de comprimento, massa, capacidade e tempo; leitura de dados em tabela e gráfico.",
   "theory": [
    "<p><strong>Comprimento:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>Massa:</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>Capacidade:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>Tempo:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 dia = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "Quando passamos de uma unidade maior para uma menor, o número fica maior – multiplicamos. No caso contrário, dividimos."
    },
    "<p>Muitas vezes lemos <strong>dados</strong> em uma tabela ou em um gráfico de barras. A altura da barra mostra o valor –\n       nós o lemos no eixo vertical. Com os dados podemos comparar (quanto a mais) e somar (quanto ao todo).</p>"
   ],
   "examples": [
    {
     "task": "Quantos centímetros são 4 m 35 cm?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Quantos quilogramas são $6\\,000\\,\\text{g}$?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$; passamos para uma unidade maior, por isso dividimos.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por isso ${@3} : {@4} = {@5}$. Portanto ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por isso ${@3}\\cdot {@4} = {@5}$. Portanto ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, o perímetro é ${@4}\\,\\text{{@5}}$.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, o perímetro é ${@2}\\,\\text{{@3}}$.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. Onde há 0 unidades de uma ordem, escrevemos zero nessa posição.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, o zero não se escreve no começo",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, escrevemos {@3}",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, porque ${@3}\\cdot {@4} = {@5}$, resto {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. Votaram {@2} {@3}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, somamos ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12 quadradinhos = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "Se tivesse dois ângulos retos, seus lados seriam paralelos e não se encontrariam.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "Como se chama esta figura? Escolha o nome mais preciso.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "Como se escreve {@0} em algarismos romanos?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "Qual é o comprimento do lado horizontal do retângulo (em cm)?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "Qual é o comprimento do lado vertical do retângulo (em cm)?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "Que número está escrito em algarismos romanos $\\text{{@0}}$?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "Qual é o valor do algarismo romano $\\text{{@0}}$?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "Qual é o valor da parte $\\text{{@0}}$?",
  "Aký je tento uhol?": "Como é este ângulo?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "A parcela que falta descobrimos subtraindo: ${@0} - {@1} = {@2}$.",
  "Desiatky": "Dezenas",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "As crianças da turma votaram na fruta de que mais gostam. Cada criança votou uma vez.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "Divida a partir da esquerda; o resto no final precisa ser menor que {@0}.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "Divida a partir da esquerda. Pegue tantos algarismos quantos forem necessários para poder dividir e vá baixando os seguintes.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "No perímetro você contou só dois lados. O perímetro é formado pelos quatro lados.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "Para a direita (para uma unidade menor) multiplicamos; para a esquerda (para uma unidade maior) dividimos.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "Desloque o segundo produto uma posição para a esquerda (significa ${@0}$) e some: quanto é ${@1} + {@2}$?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "Você não deslocou o segundo produto parcial uma posição para a esquerda. Você multiplica pelas dezenas, por isso vale dez vezes mais.",
  "Dvakrát": "Duas vezes",
  "Hodina má 60 minút a minúta 60 sekúnd.": "Uma hora tem 60 minutos e um minuto, 60 segundos.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "O valor {@0} é do algarismo romano {@1}, não {@2}.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "Não some os valores. “Quanto a mais” é uma diferença: subtraia o valor menor do maior.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "Some os valores dos símbolos. Se um símbolo menor estiver antes de um maior (por ex., IV, IX, XL, XC), subtraia-o.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "Procuramos quanto subtraímos: ${@0} - {@1} = {@2}$. Verificação: ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10 – e depois L, C, D, M.",
  "Jakub": "Lucas",
  "Je toto tvrdenie pravdivé? „{@0}“": "Esta afirmação é verdadeira? “{@0}”",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "Um triângulo tem 3 ângulos; dois têm $2\\cdot 3 = 6$ ângulos.",
  "Jednotky": "Unidades",
  "Každý obdĺžnik je štvorec.": "Todo retângulo é um quadrado.",
  "Každý uhol má 2 ramená a 1 vrchol.": "Todo ângulo tem 2 lados e 1 vértice.",
  "Každý štvorec je obdĺžnik.": "Todo quadrado é um retângulo.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "Cada quadradinho da malha tem lado de 1 cm. Encontre o perímetro (em cm) e a área (em cm²) do retângulo colorido. Escreva na forma “perímetro; área”. {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "Quantos ônibus de {@0} lugares são necessários para que caibam todos?",
  "Koľko detí hlasovalo za {@0}?": "Quantas crianças escolheram {@0}?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "Quantos euros eles têm ao todo? Calcule ${@0} + {@1} + {@2}$.",
  "Koľko eur má {@0}?": "Quantos euros {@0} tem?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "Quantos euros de troco? Calcule ${@0} - {@1}$.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "Quanto é ${@0} + {@1}$ (dois lados adjacentes)?",
  "Koľko je riadkov?": "Quantas linhas há?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "Quantos quilogramas de batatas sobraram depois da venda?",
  "Koľko pravých uhlov má obdĺžnik?": "Quantos ângulos retos tem um retângulo?",
  "Koľko pravých uhlov má štvorec?": "Quantos ângulos retos tem um quadrado?",
  "Koľko ramien má jeden uhol?": "Quantos lados tem um ângulo?",
  "Koľko uhlov majú spolu dva trojuholníky?": "Quantos ângulos têm dois triângulos ao todo?",
  "Koľko uhlov má trojuholník?": "Quantos ângulos tem um triângulo?",
  "Koľko vrcholov má štvoruholník?": "Quantos vértices tem um quadrilátero?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "Quantos sacos de {@0} kg se enchem com isso?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "Quantas pessoas vão ao passeio ao todo (alunos e professores)?",
  "Koľko štvorčekov je v jednom riadku?": "Quantos quadradinhos há em uma linha?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "Quantos quadradinhos de 1 cm × 1 cm cobrem o retângulo colorido? (Escreva a área em cm².) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "Quantas vezes {@0} cabe em {@1}?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "Qual algarismo está na casa das {@1} no número ${@0}$?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "Qual número é {@0} menor que ${@1}$?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "Qual número é {@0} maior que ${@1}$?",
  "Lucia": "Luísa",
  "Martin": "Gabriel",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "Você está passando para uma unidade menor: o número fica maior, multiplique.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "Você está passando para uma unidade maior: o número fica menor, divida.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "Um símbolo menor antes de um maior é subtraído, não somado. Por exemplo, IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "Tem 3 lados e 3 vértices: é um triângulo.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "Tem 4 ângulos retos e todos os lados de mesmo comprimento: é um quadrado.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "Tem 4 ângulos retos, mas os lados adjacentes têm comprimentos diferentes: é um retângulo.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "Tem 4 lados, mas seus ângulos não são retos: é um quadrilátero qualquer.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "Vão ao passeio {@0} turmas de {@1} alunos e, com eles, {@2} professores. Um ônibus tem {@3} lugares. Quantos ônibus precisam reservar para que caibam todos?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "Primeiro ${@0}\\cdot {@1} = {@2}$, depois ${@3}\\cdot {@4} = {@5}$ (escrevemos uma posição para a esquerda, significa ${@6}$). Somamos: ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "Primeiro o preço da compra: ${@0}\\cdot {@1} = {@2}$ {@3}. Depois o troco: ${@4} - {@5} = {@6}$. O troco para {@7} foi de {@8} {@9}.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "Primeiro multiplique pelas unidades: quanto é ${@0}\\cdot {@1}$?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "Primeiro transforme a unidade maior na menor e depois some o resto.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Primeiro transforme a unidade maior: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "Primeiro descubra quantos quilogramas sobraram e depois quantas vezes um saco cabe nisso.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "Primeiro descubra quanto custou a compra toda e depois subtraia isso da nota.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "Escreva os números um embaixo do outro, unidades embaixo de unidades, e some a partir da direita. Não se esqueça do “vai um”.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "Escreva os algarismos um depois do outro na ordem: unidades de milhar, centenas, dezenas, unidades. Não se esqueça dos zeros.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "Multiplique a partir da direita: primeiro as unidades, depois as dezenas, as centenas… As dezenas do produto “vão” para a próxima ordem.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "Retângulo de 4 por 3 na malha quadriculada",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "O retângulo tem dois lados mais compridos e dois mais curtos. Some os quatro.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "O retângulo tem os lados opostos de mesmo comprimento.",
  "Obdĺžnik má všetky 4 uhly pravé.": "O retângulo tem os 4 ângulos retos.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "O retângulo tem {@0} {@1} de {@2} quadradinhos: ${@3}\\cdot {@4} = {@5}$. A área é ${@6}\\,\\text{cm}^2$.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "Um retângulo pode ter lados adjacentes de comprimentos diferentes, por exemplo 5 cm e 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "Retângulo na malha quadriculada",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "Área: quanto é ${@0}\\cdot {@1}$?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "O perímetro é o comprimento da borda; a área é o número de quadradinhos dentro.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "O perímetro não é o número de quadradinhos na borda, mas o comprimento da borda. Some os comprimentos de todos os lados.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "O perímetro é formado por 4 lados iguais: ${@0} : 4 = {@1}$, o lado mede ${@2}\\,\\text{{@3}}$.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "O perímetro é formado por dois desses pares de lados: quanto é $2\\cdot {@0}$?",
  "Obvod štvorca vydeľ štyrmi.": "Divida o perímetro do quadrado por quatro.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "Perímetro: quanto é $2\\cdot({@0} + {@1})$?",
  "Od menšenca odčítaj rozdiel.": "Do minuendo, subtraia a diferença.",
  "Od súčtu odčítaj známy sčítanec.": "Da soma, subtraia a parcela conhecida.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "Subtraia a partir da direita. Se o algarismo de cima for menor, some 10 a ele e leve 1 para a próxima coluna.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "Subtraia {@0}. Cuidado com a passagem de ordem.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "Você subtraiu o preço de uma coisa só. Foram compradas {@0} coisas: primeiro calcule o preço da compra toda.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "O ângulo agudo é menor que o canto de um caderno. Compare este ângulo com o canto de um caderno.",
  "Ostrý, pravý a tupý uhol": "Ângulo agudo, reto e obtuso",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "Compare primeiro a quantidade de algarismos, depois os algarismos da esquerda para a direita.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "Compare o ângulo com o canto de um caderno (um ângulo reto).",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "Comparamos a partir da esquerda, ordem por ordem. O primeiro algarismo diferente decide: ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "Depois pelas dezenas: quanto é ${@0}\\cdot {@1}$?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "Veja até qual linha a coluna chega e leia o número à esquerda.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "Número de pessoas: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, resto {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "Você calculou com 100. Com tempo vale $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "O ângulo reto tem exatamente a forma do canto de um caderno e é marcado com um quadradinho. Compare este ângulo com o canto de um caderno.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "Imagine a figura e conte seus vértices, lados ou ângulos.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Transforme: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "Transforme: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "Conversão de unidades de comprimento e de massa",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "Leia o valor de cada coluna e some todos.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "Leia os dois valores e subtraia o menor do maior.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "Some os votos em {@0}: quantos são agora ao todo?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "Some {@0}. Cuidado com a passagem de ordem.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "Baixe o {@0}: quantas vezes {@1} cabe em {@2}?",
  "Písomné násobenie 243 krát 32": "Multiplicação armada: 243 vezes 32",
  "Písomné sčítanie 3476 plus 2858": "Adição armada: 3476 mais 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "Você dividiu em sacos todas as batatas, até as vendidas. Primeiro subtraia quanto foi vendido.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "Decomponha o número em dezenas e unidades. Lembre-se: 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "Decompomos: {@0}. Ao todo ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "Você contou as ordens a partir da esquerda. As unidades são o último algarismo, à direita; a partir dele avance para a esquerda.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "As ordens são lidas a partir da direita: unidades, dezenas, centenas, unidades de milhar, dezenas de milhar. Na casa das {@0} está o algarismo {@1}.",
  "Rímske číslice a ich hodnoty": "Algarismos romanos e seus valores",
  "Samuel": "Samuel",
  "Skúška: ${@0} + {@1} = {@2}$.": "Verificação: ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "Junte as duas partes: como se escreve {@0}?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "Lembre-se: o retângulo tem 4 ângulos retos; o quadrado tem, além disso, todos os lados iguais.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "Conte os lados e veja se os ângulos são retos (um quadradinho no canto).",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "Conte os lados da figura. O triângulo tem 3 lados; o quadrilátero, 4.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "Conte todas as pessoas, incluindo os professores. Se depois da divisão sobrar alguém, é preciso mais um ônibus.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "Conte os quadradinhos de uma linha e multiplique pelo número de linhas.",
  "Stovky": "Centenas",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "Você multiplicou o lado por ele mesmo: isso seria a área. O perímetro é a soma dos quatro lados.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "Você somou os lados. A área é o número de quadradinhos: quadradinhos em uma linha vezes o número de linhas.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "Você multiplicou os lados: isso seria a área. O perímetro é o comprimento da borda, é preciso somar os lados.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "Os lados medem {@0} cm e {@1} cm. Perímetro: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Área: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "Gráfico de colunas da votação",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "A coluna “{@0}” chega até a linha {@1}. Votaram {@2} {@3}.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "Some os valores de todas as partes. Que número é $\\text{{@0}}$?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "Você somou só dois lados. O retângulo tem quatro lados, por isso multiplique por dois a soma de dois lados adjacentes.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "Quadro de valor posicional do número 47 385",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "O mesmo símbolo pode ser escrito no máximo três vezes seguidas. Em vez de quatro símbolos iguais, use a subtração, por exemplo 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "Esta figura tem ângulos retos (um quadradinho no canto), por isso tem um nome mais preciso.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "Esta figura não tem ângulos retos. O quadrado e o retângulo têm todos os ângulos retos.",
  "Tisíce": "Unidades de milhar",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "Esse é o preço da compra toda. Agora descubra quantos euros voltaram de troco da nota.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "Isso é o perímetro, o comprimento da borda. A área é o número de quadradinhos dentro.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "Esse é o número de tipos de fruta. Some quantas crianças escolheram cada fruta.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "Esses são os quilogramas que sobraram. Agora descubra quantos sacos de {@0} kg se enchem com eles.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "Isso é só o que {@0} tem. A pergunta é quanto as três crianças têm juntas.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "Esses são os ângulos de um triângulo. Os triângulos são dois.",
  "Treba {@0} {@1}.": "São necessários {@0} {@1}.",
  "Trikrát": "Três vezes",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "O triângulo tem 3 vértices e, por isso, também 3 ângulos.",
  "Trojuholník môže mať dva pravé uhly.": "Um triângulo pode ter dois ângulos retos.",
  "Tupý uhol je menší ako pravý uhol.": "O ângulo obtuso é menor que o ângulo reto.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "O ângulo obtuso é maior que o reto; o menor é o agudo.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "O ângulo obtuso é maior que o canto de um caderno. Compare este ângulo com o canto de um caderno.",
  "Uhol je menší ako roh zošita, je ostrý.": "O ângulo é menor que o canto de um caderno: é agudo.",
  "Uhol je väčší ako roh zošita, je tupý.": "O ângulo é maior que o canto de um caderno: é obtuso.",
  "Uhol má tvar rohu zošita, je pravý.": "O ângulo tem a forma do canto de um caderno: é reto.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "Em alguma coluna você subtraiu o algarismo de cima do de baixo porque era menor. Nesse caso, some 10 ao algarismo de cima e leve 1.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "Na loja havia {@0} kg de batatas. Venderam {@1} kg e dividiram o resto em sacos de {@2} kg. Quantos sacos encheram?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "Falta um zero no quociente. Quando, depois de baixar um algarismo, não dá para dividir, escreva 0 no quociente e baixe o próximo algarismo.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "Você pulou o zero. Se faltar alguma ordem, escreva 0 no lugar dela; senão os algarismos se deslocam.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "Multiplique primeiro pelas unidades, depois pelas dezenas. Desloque o segundo resultado uma posição para a esquerda e some os dois.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "Você só multiplicou pelas unidades. Multiplique também pelas dezenas ({@0}) e some os dois produtos parciais.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "Calcule o perímetro do retângulo de lados ${@0}\\,\\text{{@1}}$ e ${@2}\\,\\text{{@3}}$. Escreva o resultado em {@4}.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "Calcule o perímetro do quadrado de lado ${@0}\\,\\text{{@1}}$. Escreva o resultado em {@2}.",
  "Vypočítaj písomne ${@0} + {@1}$.": "Calcule com a conta armada ${@0} + {@1}$.",
  "Vypočítaj písomne ${@0} - {@1}$.": "Calcule com a conta armada ${@0} - {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$.": "Calcule com a conta armada ${@0} : {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Calcule com a conta armada ${@0} : {@1}$. Escreva o quociente e o resto separados por ponto e vírgula.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "Calcule com a conta armada ${@0}\\cdot {@1}$.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "Para {@0}: {@1}; para {@2}: {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "Você se esqueceu do 1 que foi emprestado. Depois de pedir emprestado, some-o ao algarismo de baixo na próxima coluna.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "Você se esqueceu do “vai um”. Quando a soma de uma coluna é 10 ou mais, some 1 na próxima coluna à esquerda.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "Você se esqueceu de somar ainda ${@0}\\,\\text{{@1}}$.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "Você se esqueceu de somar as dezenas que “foram”. As dezenas do produto são somadas ao produto da ordem seguinte.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "Escreva o perímetro e a área na forma “perímetro; área”.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "Escreva o quociente com os números que saíram em cada passo e o resto do último passo.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "Escreva o quociente com os números que saíram em cada passo.",
  "Zapíš rímskymi číslicami číslo {@0}.": "Escreva o número {@0} em algarismos romanos.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "Escreva o resultado com os algarismos que saíram nas colunas.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "Escreva o resultado: de cada coluna, as unidades da soma; as dezenas “foram” para a coluna seguinte.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "Escreva o resultado: de cada produto, as unidades; as dezenas “foram” para a ordem seguinte.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "Escreva com algarismos: {@0} {@1}, {@2} {@3}, {@4} {@5} e {@6} {@7}.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "Comece pelo último algarismo da direita (são as unidades) e avance para a esquerda.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "Descubra quantas vezes 60 cabe no número dado.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "O sinal = só fica entre dois números iguais. Estes números diferem em pelo menos um algarismo.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "O sinal está virado ao contrário. Compare a partir da esquerda: decide o primeiro algarismo em que os números diferem.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "O sinal está virado ao contrário. O número com mais algarismos é maior.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "As pessoas que sobraram precisam de mais um ônibus, por isso são necessários {@0} {@1}.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "Batatas que sobraram: ${@0} - {@1} = {@2}$ kg. Número de sacos: ${@3} : {@4} = {@5}$.",
  "autobus": "ônibus",
  "autobusy": "ônibus",
  "banány": "bananas",
  "dag": "dag",
  "desaťtisíce": "dezenas de milhar",
  "desaťtisícov": "dezenas de milhar",
  "dvakrát": "duas vezes",
  "eur": "euros",
  "eurá": "euros",
  "hrušky": "peras",
  "jahody": "morangos",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "ao algarismo de baixo some o 1 emprestado (${@0} + 1 = {@1}$).",
  "napr. III": "por ex., III",
  "napr. XIV": "por ex., XIV",
  "napr. XX": "por ex., XX",
  "nepravda": "falso",
  "obsah: 3 riadky po 4 štvorčekoch": "área: 3 linhas de 4 quadradinhos",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "perímetro: 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "perímetro; área",
  "opíšeme {@0}": "copiamos o {@0}",
  "ostrý": "agudo",
  "pravda": "verdadeiro",
  "pravý": "reto",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "baixamos o {@0}: ${@1} : {@2} = {@3}$, porque ${@4}\\cdot {@5} = {@6}$, resto {@7}",
  "píšeme {@0}": "escrevemos {@0}",
  "píšeme {@0} a 1 si pamätáme": "escrevemos {@0} e vai 1",
  "píšeme {@0} a {@1} si pamätáme": "escrevemos {@0} e vão {@1}",
  "riadky": "linhas",
  "riadok": "linha",
  "slivky": "ameixas",
  "stovka": "centena",
  "tisíce": "unidades de milhar",
  "tisícka": "unidade de milhar",
  "tisícky": "unidades de milhar",
  "tisícok": "unidades de milhar",
  "tisícov": "unidades de milhar",
  "trikrát": "três vezes",
  "tričiek": "camisetas",
  "tričká": "camisetas",
  "tupý": "obtuso",
  "uhol": "ângulo",
  "všeobecný štvoruholník": "quadrilátero qualquer",
  "všetci traja": "os três",
  "všetky tri": "as três",
  "zaplatil": "pagou",
  "zaplatila": "pagou",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} Quantas crianças votaram ao todo?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} Quantas crianças escolheram {@1}?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} Quantas crianças a mais escolheram {@1} do que {@2}?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} O quociente é ${@1}$, resto {@2}. Verificação: ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} O resultado é ${@1}$. Verificação: ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} é menor que {@1}, por isso ${@2} - {@3} = {@4}$, escrevemos {@5} e vai 1",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} é menor que {@1}, por isso calcule ${@2} - {@3}$. Quanto dá?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0} tem {@1} {@2} guardados. {@3} tem {@4} {@5} a mais que {@6}, e {@7} tem {@8} o que {@9} tem. Quantos euros {@10} têm ao todo?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0} tem {@1} o que {@2} tem, não o que {@3} tem. Multiplique a quantia que {@4} tem.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0} {@1} {@2} {@3} a {@4} {@5} cada e {@6} com uma nota de {@7} euros. Quantos euros de troco {@8} recebeu?",
  "{@0}. Spolu {@1}.": "{@0}. Ao todo {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Ao todo: ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}: quanto é ${@1} + {@2} + 1$? (O 1 “foi” da coluna anterior.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}: quanto é ${@1} + {@2}$?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}: quanto é ${@1}\\cdot {@2} + {@3}$? (O {@4} “foi” da ordem anterior.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}: quanto é ${@1}\\cdot {@2}$?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "Sim, os lados opostos do retângulo têm o mesmo comprimento.",
  "Áno, to je vlastnosť štvorca.": "Sim, essa é uma propriedade do quadrado.",
  "útvar": "figura",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "Não some os números direto. Primeiro transforme ${@0}\\,\\text{{@1}}$ na unidade menor $\\text{{@2}}$.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "Não some os números. A parcela que falta se descobre subtraindo: da soma, subtraia a parcela conhecida.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "Não some os números. O número procurado se descobre subtraindo: do minuendo, subtraia a diferença.",
  "Čísla sú rovnaké.": "Os números são iguais.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "O número com mais algarismos é maior, por isso ${@0} {@1} {@2}$.",
  "čerešne": "cerejas",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "O quadrado também é um retângulo, mas procuramos o nome mais preciso. Veja se todos os lados têm o mesmo comprimento.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "O quadrado tem 4 ângulos retos e lados opostos iguais, então é um retângulo especial.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "Um quadrado tem perímetro de ${@0}\\,\\text{{@1}}$. Qual é o comprimento do lado (em {@2})?",
  "Štvorec má všetky 4 uhly pravé.": "O quadrado tem os 4 ângulos retos.",
  "Štvorec má všetky strany rovnako dlhé.": "O quadrado tem todos os lados de mesmo comprimento.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "O quadrado tem todos os lados de mesmo comprimento. Aqui os lados adjacentes têm comprimentos diferentes.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "Quadrado, retângulo, triângulo e quadrilátero qualquer",
  "Štvoruholník má 4 strany a 4 vrcholy.": "O quadrilátero tem 4 lados e 4 vértices.",
  "Štyrikrát": "Quatro vezes",
  "štyrikrát": "quatro vezes",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "“… a mais” significa somar; “… vezes o que” significa multiplicar. Depois some tudo.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "“{@0} o que outro tem” significa multiplicar, não somar {@1}."
 }
});
