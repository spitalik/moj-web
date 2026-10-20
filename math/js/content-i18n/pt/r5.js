/* Português: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/r5/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "r5-prirodzene": {
   "title": "Números naturais e suas propriedades",
   "summary": "Classes e ordens de números grandes, comparação, números pares e ímpares.",
   "theory": [
    "<p>Os <strong>números naturais</strong> são $1, 2, 3, 4, \\dots$ – os números com que contamos objetos. O menor número natural\n       é 1, e o maior não existe: a qualquer número podemos somar 1 e obter o seu <strong>sucessor</strong>.\n       O número 1 a menos é o <strong>antecessor</strong>.</p>",
    "<p>Separamos os algarismos de um número grande, a partir da direita, em <strong>classes</strong> de três: unidades, milhares, milhões.\n       Em cada classe há centenas, dezenas e unidades. O valor de um algarismo depende da posição que ele ocupa.</p>",
    {
     "fig": "r5-triedy",
     "caption": "No número $3\\,042\\,705$, o algarismo 4 vale $40\\,000$, porque está na casa das dezenas de milhar."
    },
    "<p>Os <strong>números pares</strong> são divisíveis por dois e terminam em 0, 2, 4, 6 ou 8. Os outros números são\n       <strong>ímpares</strong> – terminam em 1, 3, 5, 7 ou 9. Só o último algarismo decide se o número é par.</p>"
   ],
   "examples": [
    {
     "task": "Com os algarismos 5, 0, 8, 2 (use cada um uma vez), forme o maior e o menor número de quatro algarismos.",
     "steps": [
      "Maior: colocamos os algarismos do maior para o menor: $8\\,520$.",
      "Menor: colocamos do menor para o maior, mas o 0 não pode ficar no começo: $2\\,058$."
     ]
    },
    {
     "task": "Quais são o sucessor e o antecessor do número $499\\,999$?",
     "steps": [
      "Sucessor: $499\\,999 + 1 = 500\\,000$.",
      "Antecessor: $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "Arredondamento de números",
   "summary": "Arredondar para dezenas, centenas e milhares, estimar o resultado.",
   "theory": [
    "<p>Ao <strong>arredondar</strong>, trocamos o número pelo número “redondo” mais próximo. Usamos o sinal $\\doteq$\n       (lemos “é aproximadamente igual a”): $3\\,467 \\doteq 3\\,470$ (para a dezena).</p>",
    "<p><strong>Regra:</strong> olhamos o algarismo <em>logo à direita</em> da ordem para a qual arredondamos.\n       Se for 0, 1, 2, 3 ou 4, arredondamos <strong>para baixo</strong>. Se for 5, 6, 7, 8 ou 9, arredondamos <strong>para cima</strong>.\n       Os algarismos à direita viram zeros.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "Mova o número e observe de qual dezena (ponto verde) e de qual centena (arco) ele está mais perto."
    },
    "<p><strong>Estimativa:</strong> antes do cálculo exato, podemos arredondar os números e estimar o resultado.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. A estimativa nos ajuda a descobrir erros de cálculo.</p>"
   ],
   "examples": [
    {
     "task": "Arredonde o número $72\\,649$ para a centena.",
     "steps": [
      "Na casa das centenas está o 6; logo à direita está o 4.",
      "4 é menos que 5, arredondamos para baixo: as centenas continuam 6.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "Arredonde o número $5\\,962$ para a dezena.",
     "steps": [
      "Na casa das dezenas está o 6, à direita está o 2 – arredondamos para baixo.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "Para a centena seria $6\\,000$, porque depois das centenas vem o 6."
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "Algarismos romanos",
   "summary": "Escrita de números grandes e de anos, regras de subtração, conversão nos dois sentidos.",
   "theory": [
    "<p>Algarismos romanos: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. O maior número que costumamos escrever com eles é $3\\,999 = \\text{MMMCMXCIX}$.</p>",
    "<p><strong>Regras de escrita:</strong></p>\n       <ol><li>Escrevemos os símbolos do maior para o menor e somamos seus valores: $\\text{MDCLX} = 1\\,660$.</li>\n       <li>Os símbolos I, X, C, M podem aparecer seguidos no máximo três vezes. V, L, D não se repetem.</li>\n       <li>Um símbolo menor antes de um maior é subtraído. Só podem ser I, X ou C, e apenas antes dos dois símbolos maiores mais próximos.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "Os seis pares em que se subtrai. Outros pares (por exemplo, IL ou IC) estão errados."
    },
    "<p>A <strong>conversão para algarismos romanos</strong> é feita ordem por ordem: milhares, centenas, dezenas, unidades.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "Escreva o ano $2\\,026$ em algarismos romanos.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "Que número é $\\text{CDXLIX}$?",
     "steps": [
      "Separamos em grupos: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "Atenção: 49 não é IL, e sim XLIX.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "Operações e ordem das operações",
   "summary": "Adição, subtração, multiplicação, divisão, parênteses e cálculo inteligente.",
   "theory": [
    "<p>Ao calcular uma expressão, respeitamos a <strong>ordem das operações</strong>: primeiro os parênteses, depois a multiplicação e a divisão\n       (da esquerda para a direita) e por fim a adição e a subtração (da esquerda para a direita).</p>",
    {
     "fig": "r5-poradie",
     "caption": "Ordem das operações. Operações do mesmo nível são feitas da esquerda para a direita."
    },
    "<p><strong>Cálculo inteligente:</strong> na adição e na multiplicação podemos trocar a ordem dos números e agrupá-los de outro jeito:\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       A propriedade distributiva também ajuda: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>Nomes:</strong> parcela + parcela = soma, minuendo − subtraendo = diferença, fator · fator = produto,\n       dividendo : divisor = quociente. Descobrimos o termo desconhecido com a operação inversa: se $\\square\\cdot 8 = 96$, então $\\square = 96 : 8 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $120 - 6\\cdot(14 - 5)$.",
     "steps": [
      "Parênteses: $14 - 5 = 9$.",
      "Multiplicação: $6\\cdot 9 = 54$.",
      "Subtração: $120 - 54 = 66$.",
      "<strong>Resultado: 66</strong>"
     ]
    },
    {
     "task": "Calcule de forma inteligente $5\\cdot 63\\cdot 20$.",
     "steps": [
      "Juntamos $5\\cdot 20 = 100$.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>Resultado: $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "Múltiplos e divisores",
   "summary": "O que são múltiplos e divisores de um número, como encontrá-los e critérios de divisibilidade por 2, 3, 5 e 10.",
   "theory": [
    "<p>Obtemos os <strong>múltiplos</strong> de um número multiplicando-o por $1, 2, 3, \\dots$. Os múltiplos de 6 são\n       $6, 12, 18, 24, \\dots$ – há infinitos deles.</p>",
    "<p>Um <strong>divisor</strong> de um número é um número que o divide sem deixar resto. Os divisores de 12 são $1, 2, 3, 4, 6, 12$.\n       Procuramos os divisores em pares: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. O número 1 e o próprio número são sempre divisores.</p>",
    {
     "fig": "r5-delitele",
     "caption": "Podemos arrumar 12 bolinhas em retângulos $1\\cdot 12$, $2\\cdot 6$ e $3\\cdot 4$. As medidas são os divisores de 12."
    },
    "<p><strong>Critérios de divisibilidade:</strong> um número é divisível por <strong>2</strong> se terminar em 0, 2, 4, 6, 8;\n       por <strong>5</strong>, se terminar em 0 ou 5; por <strong>10</strong>, se terminar em 0; por <strong>3</strong>, se a\n       soma dos seus algarismos for divisível por três.</p>"
   ],
   "examples": [
    {
     "task": "Encontre todos os divisores do número 18.",
     "steps": [
      "Procuramos os pares: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4 e 5 não são divisores; a partir daí os pares se repetem.",
      "<strong>Divisores: 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "O número $4\\,215$ é divisível por três?",
     "steps": [
      "Soma dos algarismos: $4 + 2 + 1 + 5 = 12$.",
      "12 é divisível por três.",
      "<strong>Sim, $4\\,215$ é divisível por três.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "Frações – ideias básicas",
   "summary": "Parte de um todo, numerador e denominador, fração de um número, comparação de frações.",
   "theory": [
    "<p>Quando dividimos um todo em partes <strong>iguais</strong>, cada parte é uma fração dele: metade $\\frac{1}{2}$,\n       um terço $\\frac{1}{3}$, um quarto $\\frac{1}{4}$… A fração $\\frac{3}{8}$ significa: dividimos o todo em 8 partes iguais e pegamos 3.</p>",
    "<p>O número embaixo do traço da fração é o <strong>denominador</strong> – ele diz em quantas partes dividimos o todo.\n       O número em cima do traço é o <strong>numerador</strong> – ele diz quantas partes pegamos.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "As frações $\\frac{1}{2}$, $\\frac{1}{4}$ e $\\frac{3}{8}$ de uma torta e $\\frac{2}{5}$ de uma tira."
    },
    "<p><strong>Fração de um número:</strong> calculamos $\\frac{3}{4}$ de 20 dividindo 20 pelo denominador ($20 : 4 = 5$, isso é um quarto)\n       e multiplicando pelo numerador ($5\\cdot 3 = 15$).<br>\n       <strong>Comparação:</strong> com o mesmo denominador, é maior a fração com o maior numerador: $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       Com o mesmo numerador, é maior a fração com o menor denominador: $\\frac{1}{3} &gt; \\frac{1}{5}$ (um terço é um pedaço maior que um quinto).</p>"
   ],
   "examples": [
    {
     "task": "Quanto é $\\frac{2}{5}$ de 35?",
     "steps": [
      "Um quinto: $35 : 5 = 7$.",
      "Dois quintos: $7\\cdot 2 = 14$.",
      "<strong>$\\frac{2}{5}$ de 35 é 14.</strong>"
     ]
    },
    {
     "task": "Um terço do caminho mede 4 km. Qual é o comprimento do caminho inteiro?",
     "steps": [
      "O caminho inteiro tem 3 terços.",
      "$3\\cdot 4 = 12$.",
      "<strong>O caminho inteiro mede 12 km.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "Figuras geométricas básicas",
   "summary": "Ponto, reta, semirreta, segmento de reta, circunferência e círculo.",
   "theory": [
    "<p>Indicamos o <strong>ponto</strong> com uma letra maiúscula (A, B, S). Por dois pontos distintos passa exatamente uma <strong>reta</strong> –\n       ela é reta e não tem começo nem fim. Indicamos a reta com uma letra minúscula ($p$) ou com dois pontos (reta $AB$).</p>",
    "<p>A <strong>semirreta</strong> tem começo, mas não tem fim: a semirreta $AB$ começa no ponto A e continua, passando pelo ponto B.\n       O <strong>segmento de reta</strong> $AB$ é a parte da reta entre os pontos A e B; ele tem duas extremidades e pode ser medido.</p>",
    {
     "fig": "r5-utvary",
     "caption": "A linha tracejada mostra que a linha continua sem fim. À direita, uma circunferência de centro S, raio r e diâmetro d."
    },
    "<p>A <strong>circunferência</strong> é a linha cujos pontos estão todos à mesma distância do centro S – essa distância é o <strong>raio</strong> $r$.\n       O <strong>diâmetro</strong> $d$ passa pelo centro e tem o dobro do comprimento: $d = 2\\cdot r$. O <strong>círculo</strong> é a circunferência junto com toda a sua parte interna.</p>"
   ],
   "examples": [
    {
     "task": "Uma circunferência tem diâmetro de 14 cm. Qual é o seu raio?",
     "steps": [
      "O raio é metade do diâmetro.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Quantos segmentos determinam 4 pontos, dos quais três nunca estão na mesma reta?",
     "steps": [
      "Pontos A, B, C, D. Ligamos cada um com cada um: AB, AC, AD, BC, BD, CD.",
      "<strong>São 6.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "Perímetro do quadrado, do retângulo e do triângulo",
   "summary": "Cálculo do perímetro, lado que falta e cálculo com unidades diferentes.",
   "theory": [
    "<p>O <strong>perímetro</strong> de um polígono é a soma das medidas de todos os seus lados. Indicamos o perímetro por $o$.</p>",
    {
     "fig": "r5-obvod",
     "caption": "Fórmulas do perímetro do quadrado, do retângulo e do triângulo."
    },
    "<p><strong>Quadrado:</strong> $o = 4\\cdot a$. <strong>Retângulo:</strong> $o = 2\\cdot(a + b)$.\n       <strong>Triângulo:</strong> $o = a + b + c$; o triângulo equilátero tem $o = 3\\cdot a$.</p>",
    "<p>Antes de somar, todos os comprimentos devem estar na <strong>mesma unidade</strong>. Se um retângulo tem lados de $3\\,\\text{dm}$ e $12\\,\\text{cm}$,\n       primeiro convertemos $3\\,\\text{dm} = 30\\,\\text{cm}$ e depois $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Um triângulo tem lados de 7 cm, 9 cm e 12 cm. Calcule o seu perímetro.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "Um retângulo tem perímetro de 50 m e um lado de 15 m. Quanto mede o outro lado?",
     "steps": [
      "Metade do perímetro é $a + b = 50 : 2 = 25$.",
      "$b = 25 - 15 = 10$.",
      "<strong>O outro lado mede $10\\,\\text{m}$.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "Unidades de comprimento, massa, capacidade e tempo",
   "summary": "Conversão de unidades, medidas compostas e escolha da unidade adequada.",
   "theory": [
    "<p><strong>Comprimento:</strong> km, m, dm, cm, mm. <strong>Massa:</strong> t, kg, dag, g.\n       <strong>Capacidade:</strong> hl, l, dl, ml. <strong>Tempo:</strong> dia, hora (h), minuto (min), segundo (s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "Escadas de unidades. A seta mostra por quantas unidades menores trocamos uma unidade maior."
    },
    "<p><strong>Para uma unidade menor</strong> multiplicamos: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>Para uma unidade maior</strong> dividimos: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       Convertemos uma medida composta por partes: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>Atenção com o tempo: aqui não vale o “dez”, e sim o <strong>60</strong> (a hora tem 60 minutos, o minuto 60 segundos), e o dia tem <strong>24</strong> horas.</p>"
   ],
   "examples": [
    {
     "task": "Converta $3\\,\\text{l}\\ 4\\,\\text{dl}$ em decilitros.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "O filme começou às 18:40 e terminou às 20:15. Quantos minutos ele durou?",
     "steps": [
      "Das 18:40 às 19:00 são 20 minutos.",
      "Das 19:00 às 20:00 são 60 minutos, das 20:00 às 20:15 são 15 minutos.",
      "$20 + 60 + 15 = 95$.",
      "<strong>O filme durou 95 minutos.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "Resolução de problemas",
   "summary": "Problemas com várias etapas, partes de um todo, soma e diferença, arredondar para cima.",
   "theory": [
    "<p>Para resolver um problema: <strong>1.</strong> leia o problema e anote o que você sabe e o que procura; <strong>2.</strong> pense\n       em que ordem vai calcular; <strong>3.</strong> calcule; <strong>4.</strong> faça a verificação ou uma estimativa;\n       <strong>5.</strong> escreva a resposta com uma frase completa.</p>",
    "<p>O <strong>modelo de barras</strong> ajuda em problemas de soma e diferença. Se duas pessoas têm juntas 50 € e uma tem 8 € a mais,\n       primeiro subtraímos a diferença – aí as duas ficam com a mesma quantia.</p>",
    {
     "fig": "r5-model",
     "caption": "Modelo de barras: $50 - 8 = 42$, $42 : 2 = 21$. O mais novo tem 21 €, o mais velho $21 + 8 = 29$ €."
    },
    "<p>Atenção ao <strong>resto</strong>: se 23 crianças precisam ir de carro e em cada carro cabem 4, não bastam $23 : 4 = 5$ (resto 3) carros.\n       As 3 crianças que sobram precisam de mais um carro, por isso são necessários 6 carros.</p>"
   ],
   "examples": [
    {
     "task": "Lúcia tinha 120 euros. Gastou um terço em sapatos e 25 euros em livros. Quantos euros sobraram?",
     "steps": [
      "Um terço de 120: $120 : 3 = 40$ euros.",
      "Ao todo gastou $40 + 25 = 65$ euros.",
      "Sobraram $120 - 65 = 55$ euros.",
      "<strong>Resposta: Sobraram 55 euros para Lúcia.</strong>"
     ]
    },
    {
     "task": "O pai tem 42 anos e é três vezes mais velho que o filho. Quantos anos o filho terá daqui a 6 anos?",
     "steps": [
      "O filho tem agora $42 : 3 = 14$ anos.",
      "Daqui a 6 anos: $14 + 6 = 20$.",
      "<strong>Resposta: O filho terá 20 anos.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$, por isso o resultado é $1\\,000\\cdot {@0} = {@1}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por isso ${@3} : {@4} = {@5}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, por isso ${@3}\\cdot {@4} = {@5}$.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$, por isso $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Soma: ${@4} + {@5} = {@6}$ (em algarismos romanos, {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$, por isso $b = {@2} - {@3} = {@4}$, o outro lado mede ${@5}\\,\\text{{@6}}$.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$, o lado mede ${@2}\\,\\text{{@3}}$.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$, o terceiro lado mede ${@4}\\,\\text{{@5}}$.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, o diâmetro mede ${@2}\\,\\text{{@3}}$.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$, o perímetro é ${@4}\\,\\text{{@5}}$.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$, o perímetro é ${@3}\\,\\text{{@4}}$.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$, o raio mede ${@2}\\,\\text{{@3}}$.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (isso é ${@3}$), depois ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, resto {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. Os outros números deixam resto na divisão por {@3}.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Estimativa: ${@4} {@5} {@6} = {@7}$. (O resultado exato é ${@8}$.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "${@0}$ de {@1} é ${@2} : {@3} = {@4}$. ${@5}$ é ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ e somamos o resto: ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4: para baixo, 5 – 9: para cima. Troque por zeros os algarismos à direita.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = três milhões quarenta e dois mil setecentos e cinco",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (para as dezenas)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (para as centenas)</span>",
  "Aké číslo je $\\text{{@0}}$?": "Que número é $\\text{{@0}}$?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "Qual é o valor do grupo $\\text{{@0}}$?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "Qual é o valor do algarismo {@0} no número ${@1}$?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "Que parte do todo formam as partes coloridas? Escreva como fração na forma a/b (por exemplo, 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "Qual é o perímetro do retângulo (em {@0})?",
  "Aký je obvod obdĺžnika v centimetroch?": "Qual é o perímetro do retângulo em centímetros?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "Sem a diferença de 8 €, os dois teriam o mesmo: (50 − 8) : 2 = 21 €.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "Sem a diferença: ${@0} - {@1} = {@2}$, que é o dobro do que tem o mais novo: ${@3} : 2 = {@4}$. {@5} Verificação: ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "Pontos {@0}. Segmentos: {@1}. Ao todo, {@2}.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "O todo está dividido em {@0} {@1} (denominador); {@2} (numerador): ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "O todo tem {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, ou seja, ${@5}\\,\\text{{@6}}$.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "O todo é formado por {@0} partes iguais. Multiplique.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "A viagem de trem de Bratislava a Kosice dura cerca de",
  "Cez dva body vieme viesť jedinú priamku.": "Por dois pontos podemos traçar uma única reta.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "Soma dos algarismos: ${@0} = {@1}$, é divisível por três.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "Soma dos algarismos: ${@0} = {@1}$, não é divisível por três.",
  "Desatina": "Um décimo",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "Um dia tem 24 horas: ${@0}\\cdot 24 = {@1}$, e mais ${@2} + {@3} = {@4}$ horas.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "Você não pode simplesmente somar dias e horas. Primeiro transforme {@0} {@1} em horas.",
  "Do hrnčeka sa zmestí asi": "Em uma caneca cabem cerca de",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "No denominador vai o número de todas as partes, não só das que não estão coloridas.",
  "Do vane sa zmestí asi": "Em uma banheira cabem cerca de",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "Em {@0} {@1} cabem ${@2}\\,\\text{{@3}}$. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "Complete o número que falta: $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "Complete o número que falta: $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "No segundo dia não percorreram {@0} km, mas {@1} km a mais que no primeiro dia.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "Segundo dia: ${@0} + {@1} = {@2}$ km. Terceiro dia: ${@3} : 2 = {@4}$ km. Ao todo: ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "Dois irmãos têm juntos {@0} {@1}. O mais velho tem {@2} {@3} a mais que o mais novo. Quantos euros tem o irmão {@4}?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "Doze pontos dispostos em retângulos",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "O par {@0} não pode ser usado: só se pode subtrair I antes de V e X, X antes de L e C, C antes de D e M.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "Pares: ${@0} = {@1}$. Divisores: {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "Pares: ${@0} = {@1}$. Divisores: {@2}. O número tem só dois divisores.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "Por dois pontos diferentes passa exatamente uma reta.",
  "Dĺžka triedy je asi": "O comprimento de uma sala de aula é de cerca de",
  "Hmotnosť jablka je asi": "Uma maçã pesa cerca de",
  "Hmotnosť nákladného auta je asi": "Um caminhão pesa cerca de",
  "Hmotnosť žiaka 5. ročníka je asi": "Um aluno do 5º ano pesa cerca de",
  "Hrúbka zošita je asi": "A espessura de um caderno é de cerca de",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "Procure na tabuada do {@0} o último resultado que ainda não passe de {@1}.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "Você procura o {@0} número, mas formou o {@1}.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "É o contrário: o diâmetro é o dobro do raio, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "O número ${@0}$ é divisível por {@1}?",
  "Je číslo ${@0}$ párne alebo nepárne?": "O número ${@0}$ é par ou ímpar?",
  "Jeden deň má 24 hodín.": "Um dia tem 24 horas.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "Uma parte é {@0}. Quanto é ${@1}$ de {@2}?",
  "Koľko eur je {@0} z {@1} eur?": "Quantos euros são {@0} de {@1} euros?",
  "Koľko eur má mladší brat?": "Quantos euros tem o irmão mais novo?",
  "Koľko eur má starší brat?": "Quantos euros tem o irmão mais velho?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "Quantos euros sobram se da soma {@0} você subtrair a diferença {@1}?",
  "Koľko eur {@0} spolu?": "Quantos euros {@0} ao todo?",
  "Koľko eur {@0} zostalo?": "Quantos euros sobraram para {@0}?",
  "Koľko gramov váži celý koláč?": "Quantos gramas pesa o bolo inteiro?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "Quantas horas têm {@0} {@1} e {@2} {@3}?",
  "Koľko hodín majú {@0} {@1}?": "Quantas horas têm {@0} {@1}?",
  "Koľko je ${@0}$ z čísla {@1}?": "Quanto é ${@0}$ de {@1}?",
  "Koľko je polovica obvodu, teda $a + b$?": "Quanto é a metade do perímetro, ou seja, $a + b$?",
  "Koľko kilometrov meria celá cesta?": "Quantos quilômetros mede o caminho inteiro?",
  "Koľko kilometrov prešli druhý deň?": "Quantos quilômetros percorreram no segundo dia?",
  "Koľko kilometrov prešli tretí deň?": "Quantos quilômetros percorreram no terceiro dia?",
  "Koľko kilometrov prešli za tri dni spolu?": "Quantos quilômetros percorreram nos três dias juntos?",
  "Koľko litrov sa zmestí do celej nádrže?": "Quantos litros cabem no tanque inteiro?",
  "Koľko minút trvala celá cesta?": "Quantos minutos durou a viagem inteira?",
  "Koľko minút uplynie od {@0} do {@1}?": "Quantos minutos se passam das {@0} às {@1}?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "Quantos múltiplos de {@0} há entre 1 e {@1} (incluindo os dois)?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "Quantos anos {@0} terá daqui a {@1} {@2}?",
  "Koľko rokov má {@0} teraz?": "Quantos anos {@0} tem agora?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Quantos segmentos determinam {@0} pontos dos quais três nunca estão na mesma reta? (Ligamos cada dois pontos com um segmento.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Quantos segmentos determinam {@0} pontos dos quais três nunca estão na mesma reta? (Ligamos cada dois pontos com um segmento.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "Quantas vezes é preciso tomar {@0} para dar {@1}?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "O círculo é a circunferência junto com toda a parte de dentro.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "A circunferência é só uma linha; o círculo é também a superfície de dentro.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "Uma circunferência tem raio de ${@0}\\,\\text{{@1}}$. Qual é o seu diâmetro (em {@2})?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "Uma circunferência tem diâmetro de ${@0}\\,\\text{{@1}}$. Qual é o seu raio (em {@2})?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "Qual algarismo está no número ${@0}$ logo à direita da casa das {@1}?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "Quais dois números somam $1\\,000$?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "Quais dois números dão o produto redondo 100?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "Qual é o {@0} número natural que, arredondado para as {@1}, dá ${@2}$?",
  "Ktoré z čísel je násobkom čísla {@0}?": "Qual dos números é múltiplo de {@0}?",
  "Ktoré z čísel je {@0}?": "Qual dos números é o {@0}?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "Qual é o maior múltiplo de {@0} que não é maior que {@1}?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "Qual forma de escrever ${@0}$ em algarismos romanos está correta?",
  "Mama": "A mãe",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "Os denominadores são iguais, decide o numerador: ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "Você passa para uma unidade menor, por isso multiplique.",
  "Meníš na väčšiu jednotku, preto deľ.": "Você passa para uma unidade maior, por isso divida.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "O subtraendo não se descobre somando. Do minuendo, subtraia a diferença.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "O subtraendo descobrimos subtraindo: ${@0} - {@1} = {@2}$.",
  "Minul": "Gastou",
  "Minula": "Gastou",
  "Mladší má {@0} {@1}.": "O mais novo tem {@0} {@1}.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "Para ${@0}$ arredondam-se os números de ${@1}$ (para cima) até ${@2}$ (para baixo). {@3} é ${@4}$.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "Em uma fazenda recolheram {@0} {@1}. Em uma caixa cabem {@2} ovos. Quantas caixas são necessárias para todos os ovos?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "Para uma unidade menor multiplicamos; para uma unidade maior dividimos.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "Na casa das unidades de milhar coloque o menor algarismo que não seja 0.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "Vão ao passeio {@0} {@1}. Em um barquinho {@2} {@3} {@4}. Quantos barquinhos são necessários para que todas as crianças passeiem ao mesmo tempo?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "Para o resto é preciso mais uma caixa; ao todo, {@0} {@1}.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "Para o resto é preciso mais um barquinho; ao todo, {@0} {@1}.",
  "Najmenšie": "O menor",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "Primeiro complete até a hora cheia, depois some o resto. Uma hora tem 60 minutos.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "Primeiro passe os dois números para algarismos arábicos e depois some.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "Primeiro as mesmas unidades: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Depois $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "Primeiro calcule a parte da quantia toda, depois some todos os gastos e subtraia-os.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "Primeiro arredonde cada número para as centenas e só depois calcule.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "Primeiro descubra a idade atual {@0} a partir do dado {@1} {@2} e só depois some {@3}. {@4} não será mais {@7} {@8} daqui a {@5} {@6}.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "Primeiro descubra quanto é uma parte (divida pelo denominador) e depois multiplique pelo numerador.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "Primeiro descubra quantos anos o filho ou a filha tem agora (divisão) e depois some.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "Primeiro os parênteses, depois a multiplicação e por fim a subtração.",
  "Najväčšia číslica patrí na miesto tisícov.": "O maior algarismo vai na casa das unidades de milhar.",
  "Najväčšie": "O maior",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "Desenhe um modelo de barras. Subtraia a diferença da soma: o resto os irmãos dividem igualmente.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "Você escreveu só o algarismo. O valor de um algarismo depende da casa em que está: acrescente depois dele o número certo de zeros.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "Escreva todos os divisores de {@0}. Separe-os com ponto e vírgula.",
  "Napíš {@0} čísla ${@1}$.": "Escreva o {@0} do número ${@1}$.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "O sucessor é 1 maior: ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "O sucessor é o número 1 maior.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "O dividendo desconhecido descobrimos multiplicando: ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "O dividendo desconhecido se descobre multiplicando, não dividindo: multiplique o quociente pelo divisor.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "O fator desconhecido descobrimos dividindo: ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "O fator desconhecido se descobre dividindo, não multiplicando: divida o produto pelo fator conhecido.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "Você contou alguns segmentos duas vezes. O segmento AB é o mesmo que BA: conte cada par de pontos só uma vez.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "Encontre a casa para a qual você arredonda e avance uma posição para a direita.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "Múltiplos: {@0}, {@1}, {@2}, …, {@3}. O último é ${@4}\\cdot {@5} = {@6}$; o seguinte, ${@7}$, já é maior que {@8}. São {@9}.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "O retângulo tem dois pares de lados iguais.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "Um retângulo tem perímetro de ${@0}\\,\\text{{@1}}$ e um lado de ${@2}\\,\\text{{@3}}$. Qual é o comprimento do outro lado (em {@4})?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "Um retângulo tem lados de ${@0}\\,\\text{dm}$ e ${@1}\\,\\text{cm}$. Calcule o seu perímetro em centímetros.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "O perímetro é o dobro da soma de dois lados adjacentes.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "O perímetro do retângulo é $2\\cdot(a + b)$.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "O perímetro contém cada lado duas vezes. Primeiro divida-o por dois e só depois subtraia o lado conhecido.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "Perímetro do quadrado, do retângulo e do triângulo",
  "Od obvodu odčítaj dĺžky známych strán.": "Do perímetro, subtraia os comprimentos dos lados conhecidos.",
  "Od obvodu {@0} odčítaj {@1}.": "Do perímetro {@0}, subtraia {@1}.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "Você subtraiu corretamente a diferença da soma, mas os irmãos ainda precisam dividir o resto em duas partes iguais.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "Da soma {@0}, subtraia o lado conhecido {@1}.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "Das {@0} às {@1} são {@2} min, das {@3} às {@4} são {@5} min. Ao todo ${@6} + {@7} = {@8}$ minutos.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "Das {@0} às {@1} passaram {@2} minutos.",
  "Odčítaj": "Subtraia",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "Você subtraiu só um lado. Do perímetro, subtraia os dois lados conhecidos.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "Você subtraiu só o dinheiro do jogo. Não se esqueça de subtrair também {@0} {@1} do livro.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "Você subtraiu só o dinheiro do livro. Subtraia também a quantia do jogo: é {@0} de todo o dinheiro.",
  "Osmina": "Um oitavo",
  "Otec": "O pai",
  "Podiel vynásob deliteľom.": "Multiplique o quociente pelo divisor.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "O raio é mais curto que o diâmetro, por isso o diâmetro deve ser dividido por dois, não multiplicado.",
  "Polovica": "A metade",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "A metade do perímetro é a soma dos dois lados adjacentes. Ainda subtraia dela o lado conhecido.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "A metade do perímetro do retângulo é a soma de dois lados adjacentes.",
  "Polovicu": "A metade",
  "Polpriamka má jeden začiatočný bod.": "A semirreta tem um ponto de origem.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "A semirreta começa em um ponto e continua sem fim só para um lado.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "A semirreta começa em um ponto e continua sem fim para o outro lado.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "Dê nomes aos pontos com letras e escreva de forma organizada todos os pares: primeiro com o ponto A, depois com o ponto B…",
  "Poradie operácií": "Ordem das operações",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "Compare os algarismos a partir da esquerda até encontrar o primeiro diferente.",
  "Posledná číslica je {@0}, je párna.": "O último algarismo é {@0}, é par.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "O último algarismo é {@0}, não é 0 nem 5.",
  "Posledná číslica je {@0}, nie je 0.": "O último algarismo é {@0}, não é 0.",
  "Posledná číslica je {@0}, nie je párna.": "O último algarismo é {@0}, não é par.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "O último algarismo é {@0}, por isso o número é {@1}.",
  "Posledná číslica je {@0}.": "O último algarismo é {@0}.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "Você conhece {@0}, então o todo é maior. A parte deve ser multiplicada, não dividida.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "Atenção: um denominador maior não significa uma fração maior. Quanto mais partes você faz do todo, menores elas ficam.",
  "Pozri sa iba na poslednú číslicu.": "Olhe só para o último algarismo.",
  "Pozri sa na poslednú číslicu.": "Olhe para o último algarismo.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Olhe o algarismo logo à direita da casa para a qual você arredonda: de 0 a 4, para baixo; de 5 a 9, para cima.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "Olhe com atenção: as duas frações têm o mesmo numerador e o mesmo denominador.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "Você calculou da esquerda para a direita. A multiplicação tem prioridade sobre a subtração: primeiro multiplique {@0} pelo resultado dos parênteses e só depois subtraia de {@1}.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "Você calculou da esquerda para a direita. A multiplicação tem prioridade sobre a adição: calcule ${@0}\\cdot {@1}$ antes de somar.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "Você calculou como se não houvesse parênteses. O número {@0} multiplica toda a diferença entre parênteses: calcule primeiro os parênteses.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "O antecessor é 1 menor: ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "O antecessor é o número 1 menor.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "Imagine o objeto e compare-o com algo que você conhece (por exemplo, 1 kg de farinha, 1 m – um passo largo, 1 l – uma garrafa).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "Você transformou as horas só em minutos. Cada minuto tem ainda 60 segundos.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "Você transformou os segundos só em minutos. Uma hora tem 60 minutos, por isso divida mais uma vez por sessenta.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "Transforme ${@0}\\,\\text{dm}$ em centímetros.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "Transforme ${@0}\\,\\text{{@1}}$ em {@2}.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "Transforme os decímetros em centímetros ($1\\,\\text{dm} = 10\\,\\text{cm}$) e só depois calcule.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "Conversão de unidades de comprimento, massa, capacidade e tempo",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "Na divisibilidade por três, o último algarismo não decide. Some todos os algarismos e verifique se a soma é divisível por três.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "Na divisibilidade por {@0}, só o último algarismo decide. Olhe para ele de novo e compare com o critério de divisibilidade.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "Com tempo não se transforma de dez em dez: uma hora tem 60 minutos e um minuto, 60 segundos.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "Com tempo não se transforma de cem em cem: 1 {@0} = 60 {@1}, por isso divida por sessenta.",
  "Priamka je nekonečná na obe strany.": "A reta é infinita para os dois lados.",
  "Priamka má začiatok aj koniec.": "A reta tem começo e fim.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "A reta não tem fim; a semirreta tem origem; o segmento tem começo e fim.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "A reta não tem fim, por isso também não tem comprimento.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "A reta não tem começo nem fim: dos dois lados continuaria com uma linha tracejada.",
  "Priamka, polpriamka, úsečka a kružnica": "Reta, semirreta, segmento e circunferência",
  "Priamku môžeme odmerať pravítkom.": "Uma reta pode ser medida com uma régua.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "O diâmetro é mais comprido que o raio, por isso o raio deve ser multiplicado por dois, não dividido.",
  "Priemer je dvakrát dlhší ako polomer.": "O diâmetro é duas vezes mais comprido que o raio.",
  "Priemer kružnice je polovica polomeru.": "O diâmetro de uma circunferência é a metade do raio.",
  "Pripočítaj": "Some",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "Some ainda {@0} {@1}: ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "Some {@0} {@1}: ${@2} + {@3}$.",
  "Pätina": "Um quinto",
  "Pätinu": "Um quinto",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "Mesmo denominador: compare os numeradores. Mesmo numerador: um denominador menor significa partes maiores.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "O triângulo equilátero tem 3 lados iguais.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "Você dividiu a soma em duas partes iguais, mas os irmãos não têm o mesmo. Primeiro subtraia da soma a diferença de {@0} {@1}.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "Decompomos por ordens: {@0}. Ao todo ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "Divida a escrita em grupos de milhares, centenas, dezenas e unidades. Pares como CM, XC, IV significam subtração.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "Decide o algarismo à direita da casa: com 5 ou mais arredonda-se para cima; com 4 ou menos, para baixo.",
  "Rozložíme po rádoch: {@0}.": "Decompomos por ordens: {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "Conte as ordens a partir da direita: na última posição estão as unidades; antes delas, as dezenas, as centenas, as unidades de milhar…",
  "Rímske číslice s odčítaním": "Algarismos romanos com subtração",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "C = centenas, D = dezenas, U = unidades de cada classe",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "Tente dividir: ${@0} : {@1} = {@2}$, resto {@3}. Um múltiplo de {@4} pode ser dividido sem resto.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "Tente dividir por 1, 2, 3, … e procure pares cujo produto seja {@0}.",
  "Spolu {@0} {@1}.": "Ao todo {@0} {@1}.",
  "Spomeň si na malú násobilku čísla {@0}.": "Lembre-se da tabuada do {@0}.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "Calcule o valor dessa escrita: um símbolo menor depois de um maior é somado, por isso sai outro número.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "Conte todas as partes: esse é o denominador. Depois conte as partes coloridas: esse é o numerador.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "Você contou as partes sem cor. O numerador diz quantas partes estão coloridas.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "A correta é {@0}: {@1}. As outras formas desrespeitam as regras ou têm outro valor.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "O mais velho tem ${@0} + {@1} = {@2}$ {@3}.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "Os lados estão em unidades diferentes. Primeiro transforme os decímetros em centímetros e só depois some.",
  "Súčin vydeľ známym činiteľom.": "Divida o produto pelo fator conhecido.",
  "Sčítaj ${@0} + {@1}$.": "Some ${@0} + {@1}$.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "Some dois lados adjacentes: ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "Some os comprimentos dos três lados.",
  "Sčítaj hodnoty skupín {@0}.": "Some os valores dos grupos {@0}.",
  "Sčítaj všetky číslice čísla.": "Some todos os algarismos do número.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "Some os lados conhecidos: ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "Você somou só dois lados. O retângulo tem quatro lados: dois de comprimento $a$ e dois de comprimento $b$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "Você somou só dois lados. O retângulo tem quatro lados: multiplique por dois a soma de dois lados adjacentes.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "Você somou números em unidades diferentes. Primeiro transforme {@0} {@1} em {@2}.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "Agora: ${@0} : {@1} = {@2}$ {@3}. Daqui a {@4} {@5}: ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "Esse é o último múltiplo de {@0}, não a quantidade de múltiplos. Descubra quantas vezes você precisou somar {@1} para chegar até ele.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "Esse é o resultado exato. A tarefa pede uma estimativa: primeiro arredonde os dois números para as centenas e só depois calcule.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "Essa é a idade atual {@0}. A pergunta é quantos anos terá daqui a {@1} {@2}.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "Isso é o que tem o irmão {@0}. A pergunta é sobre o {@1}.",
  "Tretina": "Um terço",
  "Tretinu": "Um terço",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "No terceiro dia percorreram a metade do que percorreram no segundo dia, não no primeiro.",
  "Triedy a rády čísla 3 042 705": "Classes e ordens do número 3 042 705",
  "Trojuholník má iba tri strany, nie štyri.": "O triângulo tem só três lados, não quatro.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "Um triângulo tem perímetro de ${@0}\\,\\text{{@1}}$. Dois de seus lados medem ${@2}\\,\\text{{@3}}$ e ${@4}\\,\\text{{@5}}$. Qual é o comprimento do terceiro lado (em {@6})?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "Um triângulo tem lados de ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ e ${@4}\\,\\text{{@5}}$. Calcule o seu perímetro em {@6}.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "Uns turistas percorreram {@0} km no primeiro dia. No segundo dia percorreram {@1} km a mais que no primeiro e, no terceiro dia, a metade do que percorreram no segundo. Quantos quilômetros percorreram nos três dias?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Na cesta há {@0} {@1}. ${@2}$ delas são vermelhas. Quantas maçãs são vermelhas?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Na cesta há {@0} {@1}. ${@2}$ delas são vermelhas. Quantas maçãs são vermelhas?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "O trem partiu às {@0} e chegou ao destino às {@1}. Quantos minutos durou a viagem?",
  "Vyber správny údaj: {@0} …": "Escolha o dado correto: {@0} …",
  "Vydeľ ${@0} : {@1}$.": "Divida ${@0} : {@1}$.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "Divida e olhe o resto. Se sobrar algo, você precisa de mais um.",
  "Vydeľ {@0} menovateľom {@1}.": "Divida {@0} pelo denominador {@1}.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "Divida o número pelo denominador e multiplique o resultado pelo numerador.",
  "Vynásob ${@0}\\cdot {@1}$.": "Multiplique ${@0}\\cdot {@1}$.",
  "Vynásob {@0} čitateľom {@1}.": "Multiplique {@0} pelo numerador {@1}.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "Você multiplicou o lado por ele mesmo: isso é a área do quadrado. O perímetro é a soma dos comprimentos dos quatro lados.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "Você multiplicou os lados: isso é a área, não o perímetro. O perímetro é a soma dos comprimentos de todos os lados.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "Calcule $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "Calcule ${@0} - {@1}\\cdot({@2} - {@3})$.",
  "Vypočítaj ${@0}\\cdot 100$.": "Calcule ${@0}\\cdot 100$.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "Calcule e escreva o resultado em algarismos arábicos: $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "Calcule o perímetro do retângulo de lados $a = {@0}\\,\\text{{@1}}$ e $b = {@2}\\,\\text{{@3}}$ (em {@4}).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcule o perímetro do triângulo equilátero de lado ${@0}\\,\\text{{@1}}$ (em {@2}).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Calcule o perímetro do quadrado de lado ${@0}\\,\\text{{@1}}$ (em {@2}).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "Calcule cada dia em ordem e no final some tudo.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "Calcule de forma esperta $125\\cdot {@0}\\cdot 8$.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "Calcule de forma esperta $25\\cdot {@0}\\cdot 4$.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "Calcule de forma esperta ${@0}\\cdot {@1}$.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "Calcule os parênteses ${@0} + {@1}$.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "Calcule os parênteses ${@0} - {@1}$.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "Você calculou só ${@0}$, ou seja, uma parte. Ainda multiplique pelo numerador {@1}.",
  "Vyučovacia hodina trvá": "Uma aula dura",
  "Vzdialenosť z Bratislavy do Košíc je asi": "A distância de Bratislava a Kosice é de cerca de",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "Transforme a unidade maior na menor e depois some a outra parte.",
  "Výška dospelého človeka je asi": "A altura de uma pessoa adulta é de cerca de",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "Você somou todos os símbolos. Mas um símbolo menor antes de um maior é subtraído: por exemplo, IX é 9, não 11.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "Todos os números têm a mesma quantidade de algarismos, por isso os comparamos a partir da esquerda. {@0} é ${@1}$.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "Observe se a linha tem começo, fim ou nenhum dos dois.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "Com os algarismos {@0}, forme o {@1} número de quatro algarismos. Use cada algarismo exatamente uma vez.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "Você se esqueceu do terceiro dia. A tarefa pergunta pelos três dias.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "Você confundiu os conceitos: o sucessor é 1 maior, o antecessor é 1 menor. Você procura o {@0}.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Você trocou os papéis do numerador e do denominador: divida o número pelo denominador e multiplique o resultado pelo numerador.",
  "Zaokrúhli ${@0}$ na stovky.": "Arredonde ${@0}$ para as centenas.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "Arredonde os dois números para as centenas e estime o resultado: ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "Arredonde o número ${@0}$ para as {@1}.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "Você arredondou só o resultado. Na estimativa, arredonde primeiro cada número separadamente e depois calcule com os números arredondados.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "Você arredondou para outra ordem. Arredondar para as {@0} significa trocar por zeros todos os algarismos à direita da casa das {@1}.",
  "Zaokrúhľovanie na číselnej osi": "Arredondamento na reta numérica",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "Escreva o número ${@0}$ em algarismos romanos.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "Escreva separadamente as unidades de milhar, as centenas, as dezenas e as unidades. Lembre-se: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "Descubra quantas vezes {@0} cabe inteiro em {@1}.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "Descubra em que casa o algarismo está (unidades, dezenas, centenas, unidades de milhar…).",
  "Zlomky na koláčoch a páse": "Frações em bolos e em uma tira",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "As frações não são iguais: compare os denominadores.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "As frações não são iguais: compare os numeradores.",
  "Zlomky sú rovnaké.": "As frações são iguais.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "O sinal está virado. Com o mesmo denominador, é maior a fração que tem o numerador maior.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "Um símbolo não pode se repetir quatro vezes e só se pode subtrair I antes de V e X, X antes de L e C, C antes de D e M.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "Os símbolos I, X, C não podem se repetir quatro vezes seguidas. Para 4, 9, 40, 90, 400 e 900 use a escrita com subtração.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "Os símbolos I, X, C, M podem aparecer seguidos no máximo três vezes. Em vez de quatro símbolos iguais, use a subtração.",
  "Zvyšok sa delí na dve rovnaké časti.": "O resto se divide em duas partes iguais.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "Os parênteses têm prioridade. Depois a divisão e a multiplicação; a adição fica para o final.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "Parênteses: ${@0} + {@1} = {@2}$. Divisão e multiplicação: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Adição: ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "Parênteses: ${@0} - {@1} = {@2}$. Multiplicação: ${@3}\\cdot {@4} = {@5}$. Subtração: ${@6} - {@7} = {@8}$.",
  "cesty": "do caminho",
  "dcéra": "a filha",
  "dcére": "a filha",
  "dcéry": "da filha",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "divisores de 12: 1, 2, 3, 4, 6, 12",
  "desatina": "um décimo",
  "desatinu": "um décimo",
  "desatiny": "um décimo",
  "dni": "dias",
  "dní": "dias",
  "euro": "euro",
  "hodinu": "hora",
  "koláč": "bolo",
  "koláča": "do bolo",
  "lodičiek": "barquinhos",
  "lodičky": "barquinhos",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "um símbolo menor antes de um maior é subtraído – só I antes de V, X; X antes de L, C; C antes de D, M",
  "meria": "mede",
  "miliónov": "unidades de milhão",
  "milióny": "milhões",
  "minul": "gastou",
  "minula": "gastou",
  "mladšieho": "mais novo",
  "mladší": "mais novo",
  "nadol": "para baixo",
  "nahor": "para cima",
  "najmenšie": "menor",
  "najväčšie": "maior",
  "napr. 1; 2; 4": "por ex., 1; 2; 4",
  "napr. 2/5": "por ex., 2/5",
  "napr. MCMXC": "por ex., MCMXC",
  "nasledovníka": "sucessor",
  "nepárne": "ímpar",
  "nie": "não",
  "nádrže": "do tanque",
  "obalov": "caixas",
  "obaly": "caixas",
  "odčítaj": "subtraia",
  "odčítaš": "você subtrai",
  "osmina": "um oitavo",
  "osminu": "um oitavo",
  "osminy": "um oitavo",
  "polovica": "a metade",
  "polovice": "metade",
  "polovicu": "a metade",
  "polpriamka": "semirreta",
  "polpriamka AB": "semirreta AB",
  "predchodcu": "antecessor",
  "priamka AB": "reta AB",
  "priemer d = 2 · r": "diâmetro d = 2 · r",
  "pripočítaj": "some",
  "pripočítaš": "você soma",
  "párne": "par",
  "pásik": "tira",
  "pätina": "um quinto",
  "pätinu": "um quinto",
  "pätiny": "um quinto",
  "päťkrát": "cinco vezes",
  "rokov": "anos",
  "roky": "anos",
  "rovnaké diely": "partes iguais",
  "rovnakých dielov": "partes iguais",
  "spolu 50 €": "ao todo 50 €",
  "staršia": "mais velha",
  "staršieho": "mais velho",
  "starší": "mais velho",
  "stotisícov": "centenas de milhar",
  "syn": "o filho",
  "syna": "do filho",
  "synovi": "o filho",
  "také časti": "partes como essa",
  "takých častí": "partes como essa",
  "tretina": "um terço",
  "tretinu": "um terço",
  "tretiny": "um terço",
  "vajec": "ovos",
  "vyfarbené sú {@0}": "{@0} estão coloridas",
  "vyfarbený je 1": "1 está colorida",
  "vyfarbených je {@0}": "{@0} estão coloridas",
  "váži": "pesa",
  "zmestia": "cabem",
  "zmestí": "cabem",
  "zátvorky": "parênteses",
  "zľava doprava": "da esquerda para a direita",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} Por isso não, o resto da divisão é {@1}.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} Por isso sim: ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@0} mais uma vez {@1}: ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0} é $100 {@1} 1$. Multiplique por cem e depois {@2} o número mais uma vez.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} tem {@1} {@2} e é {@3} {@4} que {@5}. Quantos anos {@6} terá daqui a {@7} {@8}?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0} não significa {@1} {@2}. {@3} de {@4} se calcula dividindo: ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@0} de {@1}: ${@2} : {@3} = {@4}$. {@5} ao todo ${@6} + {@7} = {@8}$. Sobraram ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0} {@1} {@2} {@3}. {@4} do dinheiro foi para um jogo e {@6} {@7}, para um livro. Quantos euros sobraram para {@8}?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. Os outros dados são grandes demais ou pequenos demais.",
  "Úsečka AB začína v bode A a končí v bode B.": "O segmento AB começa no ponto A e termina no ponto B.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "O segmento termina nas duas extremidades e não continua além delas.",
  "Úsečka má dva krajné body.": "O segmento tem duas extremidades.",
  "Úsečka má konečnú dĺžku.": "O segmento tem comprimento finito.",
  "Úsečkový model súčtu a rozdielu": "Modelo de barras da soma e da diferença",
  "Úsečku môžeme odmerať pravítkom.": "Um segmento pode ser medido com uma régua.",
  "áno": "sim",
  "úsečka AB": "segmento AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "Você subtraiu os horários como números comuns. Mas uma hora tem 60 minutos, não 100: complete primeiro até a hora cheia.",
  "Červené sú {@0} jablká": "{@0} maçãs são vermelhas",
  "Červených je {@0} jabĺk": "{@0} maçãs são vermelhas",
  "Čiara má dva krajné body A a B – je to úsečka.": "A linha tem duas extremidades, A e B: é um segmento.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "A linha não tem começo nem fim: é uma reta.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "A linha começa no ponto A e continua para o outro lado: é uma semirreta.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "Os numeradores são iguais. Quanto mais partes fazemos do todo, menores elas ficam: ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "O que há na imagem? A linha tracejada significa que a linha continua sem fim.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "Não basta escrever os números lado a lado. Primeiro transforme {@0} {@1} em {@2} e depois some {@3}.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "Você escreveu os números lado a lado, como se 1 {@0} = 100 {@1}. Mas vale 1 {@2} = 60 {@3}.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "O algarismo logo à direita da casa das {@0} é {@1}, por isso arredondamos {@2}: ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "O algarismo à direita é {@0}. Arredonde ${@1}$ para as {@2}.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "O algarismo à direita da casa das {@0} é 5 ou mais: nesse caso, arredonda-se para cima.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "O algarismo à direita da casa das {@0} é menor que 5: nesse caso, arredonda-se para baixo.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "O algarismo {@0} está na casa das {@1}, por isso vale ${@2}\\cdot {@3} = {@4}$.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "Ordenamos os algarismos do menor para o maior, mas o 0 não pode ficar no começo, por isso vai para a segunda posição: ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "Ordenamos os algarismos do menor para o maior: ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "Ordenamos os algarismos do maior para o menor: ${@0}$.",
  "Číslo": "Número",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "Um número não pode começar com zero: não teria quatro algarismos. Na primeira posição coloque o menor algarismo que não seja 0.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "O número {@0} é $100 {@1} 1$, por isso {@2} uma vez o número inteiro {@3}, não só uma unidade.",
  "čiara": "linha",
  "Šestina": "Um sexto",
  "Štvorec má 4 rovnaké strany.": "O quadrado tem 4 lados iguais.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "O quadrado tem quatro lados iguais, por isso divida o perímetro por quatro, não por dois.",
  "Štvrtina": "Um quarto",
  "Štvrtinu": "Um quarto",
  "šestina": "um sexto",
  "šestinu": "um sexto",
  "šestiny": "um sexto",
  "štvrtina": "um quarto",
  "štvrtinu": "um quarto",
  "štvrtiny": "um quarto"
 }
});
