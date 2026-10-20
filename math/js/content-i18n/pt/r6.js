/* Português: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/r6/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "r6-desatinne": {
   "title": "Números decimais e operações com eles",
   "summary": "Escrita, comparação e arredondamento de números decimais; adição, subtração, multiplicação e divisão.",
   "theory": [
    "<p>Em um <strong>número decimal</strong>, a vírgula separa a parte inteira da parte decimal. No número $2{,}75$ há 2 inteiros, 7 décimos e 5 centésimos,\n       ou seja, $2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. Podemos acrescentar ou retirar zeros no fim da parte decimal: $2{,}4 = 2{,}40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "Trecho da reta numérica de 2 a 3. Entre dois números inteiros há 10 décimos e 100 centésimos."
    },
    "<p><strong>Adição e subtração:</strong> escrevemos os números um embaixo do outro, com <em>vírgula embaixo de vírgula</em>, e completamos as casas que faltam com zeros.\n       <strong>Multiplicação:</strong> multiplicamos como números inteiros, e o resultado tem tantas casas decimais quanto os dois fatores juntos: $1{,}2\\cdot 0{,}3 = 0{,}36$.\n       Multiplicar por 10, 100, 1 000 desloca a vírgula 1, 2, 3 casas para a direita; dividir, para a esquerda.</p>",
    "<p><strong>Divisão por número natural:</strong> dividimos como de costume e colocamos a vírgula no quociente no momento em que passamos pela vírgula do dividendo: $7{,}5 : 3 = 2{,}5$.\n       <strong>Arredondamento:</strong> olhamos o algarismo logo depois da casa para a qual arredondamos. Se for de 0 a 4, arredondamos para baixo; se for de 5 a 9, para cima: $3{,}462 \\doteq 3{,}5$ (para o décimo).</p>"
   ],
   "examples": [
    {
     "task": "Calcule $12{,}5 + 3{,}78$.",
     "steps": [
      "Alinhamos as vírgulas: $12{,}50 + 3{,}78$.",
      "Somamos ordem por ordem: $12{,}50 + 3{,}78 = 16{,}28$.",
      "<strong>Resultado: 16,28</strong>"
     ]
    },
    {
     "task": "Calcule $2{,}4\\cdot 1{,}5$.",
     "steps": [
      "Sem as vírgulas: $24\\cdot 15 = 360$.",
      "Os fatores têm juntos 2 casas decimais, por isso o resultado é $3{,}60 = 3{,}6$.",
      "<strong>Resultado: 3,6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "Frações e seus usos básicos",
   "summary": "O que é uma fração, parte de um todo, simplificação e frações equivalentes, conversão em decimal, comparação.",
   "theory": [
    "<p>A <strong>fração</strong> $\\frac{a}{b}$ descreve uma parte de um todo: dividimos o todo em $b$ partes iguais (<em>denominador</em>) e pegamos $a$ delas (<em>numerador</em>).\n       O traço de fração significa divisão: $\\frac{3}{4} = 3 : 4 = 0{,}75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "Partes coloridas dos círculos: um meio, três quartos e três oitavos."
    },
    "<p><strong>Fração de um número:</strong> calculamos $\\frac{3}{4}$ de 20 dividindo 20 pelo denominador e multiplicando pelo numerador: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>Frações equivalentes e simplificação:</strong> se multiplicarmos ou dividirmos o numerador e o denominador pelo mesmo número (diferente de zero), o valor da fração não muda:\n       $\\frac{12}{18} = \\frac{2}{3}$ (simplificamos por seis). A fração é <em>irredutível</em> quando não pode mais ser simplificada.\n       O jeito mais fácil de comparar duas frações é reduzi-las ao mesmo denominador.</p>"
   ],
   "examples": [
    {
     "task": "Quanto é $\\frac{2}{5}$ de 35?",
     "steps": [
      "Um quinto: $35 : 5 = 7$.",
      "Dois quintos: $7\\cdot 2 = 14$.",
      "<strong>Resultado: 14</strong>"
     ]
    },
    {
     "task": "Compare as frações $\\frac{3}{4}$ e $\\frac{5}{6}$.",
     "steps": [
      "O denominador comum é 12: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$, por isso $\\frac{3}{4} &lt; \\frac{5}{6}$."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "Divisibilidade, números primos e compostos",
   "summary": "Divisor e múltiplo, critérios de divisibilidade, números primos, números compostos e decomposição em fatores primos.",
   "theory": [
    "<p>Um número $a$ é <strong>divisível</strong> por $b$ se a divisão $a : b$ não deixa resto. Nesse caso, $b$ é <em>divisor</em> de $a$ e $a$ é <em>múltiplo</em> de $b$.\n       Por exemplo, os divisores de 12 são 1, 2, 3, 4, 6 e 12.</p>",
    "<p><strong>Critérios de divisibilidade.</strong> Um número é divisível por</p>\n       <ul><li><strong>2</strong>, se o último algarismo for par (0, 2, 4, 6, 8),</li>\n       <li><strong>3</strong>, se a soma dos algarismos for divisível por 3; <strong>9</strong>, se a soma dos algarismos for divisível por 9,</li>\n       <li><strong>4</strong>, se o número formado pelos dois últimos algarismos for divisível por 4,</li>\n       <li><strong>5</strong>, se terminar em 0 ou 5; <strong>10</strong>, se terminar em 0,</li>\n       <li><strong>6</strong>, se for divisível por 2 e por 3 ao mesmo tempo.</li></ul>",
    "<p>Um <strong>número primo</strong> é um número natural que tem exatamente dois divisores: 1 e ele mesmo (2, 3, 5, 7, 11, …).\n       Um <strong>número composto</strong> tem mais de dois divisores (4, 6, 8, 9, …). O número 1 não é primo nem composto.\n       Todo número composto pode ser decomposto em um produto de números primos (<em>fatores primos</em>): $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "Crivo de Eratóstenes: dos números de 1 a 60, riscamos os múltiplos de 2, 3, 5 e 7 (exceto eles mesmos). Sobram os números primos, que estão coloridos."
    }
   ],
   "examples": [
    {
     "task": "O número 4 716 é divisível por 3? E por 4?",
     "steps": [
      "Soma dos algarismos: $4 + 7 + 1 + 6 = 18$, e 18 é divisível por 3, por isso <strong>sim</strong>.",
      "Os dois últimos algarismos formam 16 e $16 : 4 = 4$, por isso também é divisível por 4: <strong>sim</strong>."
     ]
    },
    {
     "task": "Decomponha o número 90 em fatores primos.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, e 5 é primo.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "Máximo divisor comum e mínimo múltiplo comum",
   "summary": "MDC e MMC pela decomposição em fatores primos, números primos entre si e problemas.",
   "theory": [
    "<p>O <strong>máximo divisor comum</strong> dos números $a$, $b$ – escrevemos $\\text{mdc}(a, b)$ ou MDC – é o maior número que divide os dois números.\n       O <strong>mínimo múltiplo comum</strong> – $\\text{mmc}(a, b)$ ou MMC – é o menor número diferente de zero que é múltiplo dos dois números.</p>",
    {
     "fig": "r6-strom",
     "caption": "Decomposição de 60 e 84 em fatores primos. Os fatores comuns são 2, 2 e 3, por isso mdc(60, 84) = 12; mmc(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>Método da decomposição:</strong> decompomos os dois números em fatores primos. O MDC é o produto dos fatores primos <em>comuns</em> (cada um tantas vezes quantas aparece nos dois).\n       O MMC é o produto de <em>todos</em> os fatores primos que aparecem em pelo menos um dos números (cada um tantas vezes quantas aparece no número em que ele aparece mais).\n       Uma verificação útil: $\\text{mdc}(a, b)\\cdot \\text{mmc}(a, b) = a\\cdot b$.</p>",
    "<p>Números cujo MDC é 1 são chamados <strong>primos entre si</strong> (por exemplo, 8 e 15). Se tiverem um divisor comum maior que 1, <strong>não são primos entre si</strong>.\n       Usamos o MDC quando dividimos algo nas maiores partes iguais possíveis; o MMC, quando procuramos quando algo que se repete vai coincidir de novo.</p>"
   ],
   "examples": [
    {
     "task": "Determine $\\text{mdc}(24, 36)$ e $\\text{mmc}(24, 36)$.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "MDC: $2^2\\cdot 3 = 12$.",
      "MMC: $2^3\\cdot 3^2 = 72$.",
      "Verificação: $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "Dois semáforos ficam verdes ao mesmo tempo. O primeiro muda de cor em um ciclo de 40 segundos, o segundo de 60 segundos. Daqui a quantos segundos estarão de novo juntos no início do ciclo?",
     "steps": [
      "Procuramos o mínimo múltiplo comum: $\\text{mmc}(40, 60)$.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, ou seja, $\\text{mmc} = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>Daqui a 120 segundos (2 minutos).</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "Números inteiros e números negativos",
   "summary": "Números positivos e negativos na reta numérica, oposto, módulo, comparação, adição e subtração.",
   "theory": [
    "<p>Os <strong>números inteiros</strong> são $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ Usamos números negativos, por exemplo, para temperaturas abaixo de zero ($-5\\,{}^\\circ\\mathrm{C}$),\n       para dívidas ou para altitudes abaixo do nível do mar. O zero não é positivo nem negativo.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "Os números 4 e −4 são opostos: ficam à mesma distância do zero, em lados contrários. Os dois têm módulo 4."
    },
    "<p>O <strong>oposto</strong> do número $a$ é $-a$ (o de 4 é $-4$, o de $-7$ é 7). O <strong>módulo</strong> (valor absoluto) $|a|$ é a distância do número até o zero: $|-6| = 6$, $|6| = 6$.\n       <strong>Comparação:</strong> na reta numérica, é maior o número que fica mais à direita. Por isso $-2 &gt; -5$, e todo número negativo é menor que 0.</p>",
    "<p><strong>Adição e subtração:</strong> somar um número positivo significa andar para a direita na reta; somar um negativo, para a esquerda.\n       Subtrair um número é o mesmo que somar o seu oposto: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $-8 + 3$.",
     "steps": [
      "Começamos em $-8$ e andamos 3 para a direita.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "De manhã fazia $-6\\,{}^\\circ\\mathrm{C}$, ao meio-dia $2\\,{}^\\circ\\mathrm{C}$. Quantos graus a temperatura subiu?",
     "steps": [
      "Diferença: $2 - (-6) = 2 + 6 = 8$.",
      "<strong>A temperatura subiu 8 °C.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "Ângulos e medida de ângulos",
   "summary": "Tipos de ângulos, transferidor, graus e minutos, ângulos suplementares adjacentes e opostos pelo vértice, cálculos com ângulos.",
   "theory": [
    "<p>Um <strong>ângulo</strong> é formado por duas semirretas (<em>lados</em>) com a mesma origem (<em>vértice</em>). Medimos ângulos em <strong>graus</strong>;\n       um grau tem 60 minutos: $1^\\circ = 60'$. Indicamos os ângulos com letras gregas $\\alpha, \\beta, \\gamma$ ou com a notação $\\angle AVB$.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "O ângulo agudo é menor que 90°, o reto tem 90°, o obtuso fica entre 90° e 180°, o raso tem 180°."
    },
    "<p><strong>Medição com o transferidor:</strong> colocamos o centro do transferidor no vértice do ângulo, o zero sobre um dos lados e lemos na escala por onde passa o outro lado.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "Transferidor colocado sobre um ângulo de 50°."
    },
    "<p><strong>Ângulos adjacentes suplementares</strong> têm um lado em comum, e os outros lados formam uma reta; sua soma é $180^\\circ$.\n       <strong>Ângulos opostos pelo vértice</strong> se formam um em frente ao outro quando duas retas se cruzam, e têm a mesma medida.\n       Ao somar ângulos, somamos separadamente os graus e os minutos; trocamos 60 minutos por 1 grau.</p>"
   ],
   "examples": [
    {
     "task": "O ângulo $\\alpha$ mede $48^\\circ$. Quanto mede o ângulo adjacente suplementar a ele?",
     "steps": [
      "Ângulos adjacentes suplementares somam $180^\\circ$.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>O ângulo adjacente suplementar mede 132°.</strong>"
     ]
    },
    {
     "task": "Some $35^\\circ\\,40' + 27^\\circ\\,35'$.",
     "steps": [
      "Graus: $35 + 27 = 62$, minutos: $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$, por isso o total é $63^\\circ\\,15'$."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "Triângulos e suas propriedades",
   "summary": "Soma dos ângulos do triângulo, tipos de triângulos quanto aos lados e aos ângulos, desigualdade triangular.",
   "theory": [
    "<p>O <strong>triângulo</strong> $ABC$ tem três vértices, três lados $a = |BC|$, $b = |AC|$, $c = |AB|$ e três ângulos internos $\\alpha, \\beta, \\gamma$.\n       A <strong>soma dos ângulos internos</strong> de qualquer triângulo é $\\alpha + \\beta + \\gamma = 180^\\circ$.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "Em cima, a classificação quanto aos lados (os tracinhos marcam lados de mesmo comprimento); embaixo, quanto aos ângulos."
    },
    "<p><strong>Quanto aos lados:</strong> escaleno (todos os lados diferentes), isósceles (dois lados iguais; os ângulos da base são congruentes),\n       equilátero (todos os lados iguais, cada ângulo mede $60^\\circ$).\n       <strong>Quanto aos ângulos:</strong> acutângulo (todos os ângulos agudos), retângulo (um ângulo reto), obtusângulo (um ângulo obtuso).</p>",
    "<p><strong>Desigualdade triangular:</strong> a soma das medidas de quaisquer dois lados é sempre maior que a medida do terceiro lado.\n       Basta verificar se os dois lados menores juntos são maiores que o maior. Por exemplo, com lados de 3 cm, 4 cm e 8 cm não construímos um triângulo, porque $3 + 4 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Em um triângulo, $\\alpha = 52^\\circ$ e $\\beta = 71^\\circ$. Calcule $\\gamma$.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "É possível construir um triângulo com lados de 5 cm, 6 cm e 10 cm?",
     "steps": [
      "Os dois lados menores: $5 + 6 = 11$.",
      "$11 &gt; 10$, a desigualdade vale.",
      "<strong>Sim, é possível.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "Perímetro e área do quadrado e do retângulo",
   "summary": "Fórmulas de perímetro e área, cálculo do lado que falta, unidades de área e sua conversão.",
   "theory": [
    "<p>O <strong>perímetro</strong> é o comprimento do contorno da figura; nós o medimos em unidades de comprimento (mm, cm, m). A <strong>área</strong> indica quantos quadradinhos\n       de lado 1 unidade cabem na figura; nós a medimos em unidades de área ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$).</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "No retângulo de 5 cm × 3 cm cabem 3 fileiras de 5 quadradinhos de 1 cm², ao todo 15 cm²."
    },
    "<p><strong>Retângulo</strong> de lados $a$, $b$: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       <strong>Quadrado</strong> de lado $a$: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       Se conhecemos a área e um lado do retângulo, obtemos o outro por divisão: $b = S : a$.</p>",
    "<p><strong>Unidades de área:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       Nas unidades de área, o fator de conversão é 100, e não 10, porque um quadrado de lado 1 cm contém $10\\cdot 10$ quadradinhos de lado 1 mm.</p>"
   ],
   "examples": [
    {
     "task": "Um jardim tem a forma de um retângulo de 14 m × 9 m. Quantos metros de tela são necessários para cercá-lo e qual é a sua área?",
     "steps": [
      "Perímetro: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "Área: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>São necessários 46 m de tela; o jardim tem 126 m².</strong>"
     ]
    },
    {
     "task": "Um quadrado tem perímetro de 36 cm. Qual é a sua área?",
     "steps": [
      "Lado: $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "Simetria axial",
   "summary": "Imagem de um ponto e de uma figura na simetria axial, figuras simétricas e seus eixos.",
   "theory": [
    "<p>A <strong>simetria axial</strong> de eixo $o$ associa a cada ponto $A$ sua <em>imagem</em> $A'$ de modo que o segmento $AA'$ seja perpendicular ao eixo\n       e o eixo o divida ao meio. Assim, o ponto $A$ e sua imagem ficam à mesma distância do eixo, cada um de um lado. Os pontos do eixo são imagens de si mesmos.</p>",
    {
     "fig": "r6-osova",
     "caption": "A figura azul e sua imagem (verde) em relação ao eixo o. O ponto A está 4 quadradinhos à esquerda do eixo; sua imagem A′, 4 quadradinhos à direita."
    },
    "<p>Construímos a imagem de uma figura obtendo as imagens dos seus vértices e ligando-as. A imagem tem a mesma forma e o mesmo tamanho que a original; ela só fica “virada”, como em um espelho.</p>",
    "<p>Uma figura é <strong>simétrica</strong> se existe uma reta em relação à qual ela é imagem de si mesma (dobrando o papel ao longo dessa reta, as duas metades se sobrepõem).\n       Essa reta se chama <em>eixo de simetria</em>. O quadrado tem 4 eixos, o retângulo 2, o triângulo equilátero 3, o isósceles 1 e o círculo, infinitos.</p>"
   ],
   "examples": [
    {
     "task": "O eixo $o$ é uma reta vertical na coluna 6. O ponto $A$ está na coluna 2. Em qual coluna está a sua imagem?",
     "steps": [
      "O ponto $A$ está a $6 - 2 = 4$ colunas do eixo.",
      "A imagem fica 4 colunas do outro lado: $6 + 4 = 10$.",
      "<strong>A imagem está na coluna 10.</strong>"
     ]
    },
    {
     "task": "Quantos eixos de simetria tem um retângulo que não é quadrado?",
     "steps": [
      "O eixo passa pelos pontos médios de dois lados opostos – há dois assim.",
      "A diagonal não é eixo: dobrando o papel, as metades não se sobrepõem.",
      "<strong>2 eixos.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, por isso dividimos por cem: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, por isso ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$, por isso ${@0}^\\circ = {@1}'$ e ao todo ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$, por isso $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$, o triângulo pode ser construído.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$, o triângulo não pode ser construído.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ (deslocamento de {@3} para a direita).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ (deslocamento de {@3} para a esquerda).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, resto {@2}. Portanto ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ e ${@2} = {@3}$ não têm fator primo comum, $\\text{mdc}({@4}, {@5}) = 1$. São primos entre si.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. O MDC é o produto dos fatores primos comuns: $\\text{mdc}({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$, portanto além de 1 e {@3} ele tem também o divisor {@4}. É um número composto.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. À noite fazia {@4} °C.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$ e $|{@2}| = {@3}$, portanto a soma é ${@4} + {@5} = {@6}$.",
  "4 dieliky": "4 divisões",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "O valor absoluto é a distância até o zero, por isso nunca é negativo.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "O valor absoluto nunca é negativo. Primeiro determine a distância de cada número até o zero e só depois some.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "Se houver 60 minutos ou mais, troque 60 minutos por 1 grau.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "Se a soma dos dois lados mais curtos for igual ao lado mais comprido, os lados ficariam sobre uma mesma reta e não se forma um triângulo.",
  "Aká dlhá je strana štvorca (v cm)?": "Qual é o comprimento do lado do quadrado (em cm)?",
  "Aké je číslo opačné k číslu {@0}?": "Qual é o oposto do número {@0}?",
  "Aké je číslo {@0}?": "Que tipo de número é {@0}?",
  "Aký bude čitateľ rozšíreného zlomku?": "Qual será o numerador da fração ampliada?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "Qual é o mínimo múltiplo comum de {@0} e {@1}?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "Qual é o máximo divisor comum de {@0} e {@1}?",
  "Aký je obsah štvorca (v cm²)?": "Qual é a área do quadrado (em cm²)?",
  "Aký je obvod (v {@0})?": "Qual é o perímetro (em {@0})?",
  "Aký je obvod štvorca (v cm)?": "Qual é o perímetro do quadrado (em cm)?",
  "Aký je súčet dvoch susedných strán?": "Quanto somam dois lados adjacentes?",
  "Aký je súčet známych číslic?": "Quanto somam os algarismos conhecidos?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "Como é um ângulo de ${@0}^\\circ$?",
  "Aký veľký je jeden uhol pri základni?": "Quanto mede cada ângulo da base?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "Por qual número é preciso ampliar a fração $\\frac{{@0}}{{@1}}$ para que o denominador seja {@2}?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "O ponto $A$ está a $|{@0} - {@1}| = {@2}$ {@3} do eixo. A imagem está à mesma distância do outro lado do eixo: ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "Você não pode multiplicar a parte inteira e a decimal separadamente: os décimos passam para as unidades. Multiplique os números sem vírgula e depois coloque a vírgula.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "A soma dos algarismos é {@0}, é divisível por 3.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "A soma dos algarismos é {@0}, é divisível por 9.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "A soma dos algarismos é {@0}, não é divisível por 3.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "A soma dos algarismos é {@0}, não é divisível por 9.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "Os divisores de {@0} são {@1}. São {@2}.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "Todos os números têm o divisor 1. Não são primos entre si os números que têm um divisor comum maior que 1.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "Dividimos como com números inteiros e colocamos a vírgula no quociente quando passamos por ela no dividendo: ${@0} : {@1} = {@2}$. Verificação: ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "Dividimos sucessivamente por números primos: ${@0}$. Portanto ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "As vírgulas decimais precisam ficar uma embaixo da outra. Complete com zeros as casas que faltam.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "Divida começando pela ordem mais alta. Quando passar pela vírgula decimal do dividendo, coloque a vírgula também no resultado.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "Divida o número pelo menor número primo possível (2, 3, 5, 7, …) e continue com o quociente até chegar a 1.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "Coloque o sinal correto: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "Calcule o terceiro ângulo e olhe para o maior deles.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "Tipos de triângulos quanto aos lados e quanto aos ângulos",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "Os dois lados mais curtos: ${@0} + {@1} = {@2}$; o mais comprido é {@3}.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "Dois lados têm o mesmo comprimento, o triângulo é isósceles.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "Duas fitas medem {@0} cm e {@1} cm. Queremos cortá-las, sem sobra, em pedaços de mesmo comprimento e o mais compridos possível (em centímetros inteiros). Quantos centímetros medirá cada pedaço?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "É possível construir um triângulo com lados de {@0} cm, {@1} cm e {@2} cm?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "O comprimento do pedaço precisa ser divisor dos dois comprimentos. Qual divisor comum é o maior?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "O comprimento do pedaço precisa dividir {@0} e {@1} e ser o maior possível: procuramos $\\text{mdc}({@2}, {@3})$.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "Procure pares de números cujo produto seja o número dado: 1 e o próprio número, depois 2 e …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "Procuramos o mínimo múltiplo comum: ${@0} = {@1}$, ${@2} = {@3}$, $\\text{mmc}({@4}, {@5}) = {@6} = {@7}$. As linhas sairão juntas de novo daqui a {@8} minutos, ou seja, às {@9}:{@10}.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "Procuramos o número que, multiplicado por ele mesmo, dá {@0}: $a = {@1}\\,\\text{cm}$. Perímetro: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "Só o triângulo equilátero tem 3 eixos. O isósceles tem só dois lados iguais.",
  "Je menší ako 90°, preto je ostrý.": "É menor que 90°, por isso é agudo.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "É par e a soma dos algarismos, {@0}, é divisível por 3.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "É par, mas a soma dos algarismos, {@0}, não é divisível por 3.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "A letra maiúscula de forma <strong style=\"font-size:1.6em\">{@0}</strong> (na forma simples, sem serifas) tem simetria axial?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "É maior que 90° e menor que 180°, por isso é obtuso.",
  "Je číslo {@0} deliteľné číslom {@1}?": "O número {@0} é divisível por {@1}?",
  "Jeden kúsok bude merať {@0} cm.": "Cada pedaço medirá {@0} cm.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "Um grau tem 60 minutos, não 100: divida o número de minutos por sessenta.",
  "Jeden stupeň má 60 minút, nie 100.": "Um grau tem 60 minutos, não 100.",
  "Jeden stupeň má 60 minút.": "Um grau tem 60 minutos.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "Verificação: MDC · MMC = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "O paralelogramo não tem nenhum eixo de simetria. Dobrando-o por qualquer reta, ele não coincide consigo mesmo.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "O losango tem 2 eixos de simetria: suas duas diagonais.",
  "Koľko celých stupňov je v ${@0}'$?": "Quantos graus inteiros há em ${@0}'$?",
  "Koľko deliteľov má číslo {@0}?": "Quantos divisores tem o número {@0}?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "Quantas casas decimais têm juntos os fatores ${@0}$ e ${@1}$?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "Quanto é $\\frac{1}{{@0}}$ de {@1}?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "Quanto é $\\frac{{@0}}{{@1}}$ de {@2}?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "Quanto é a metade do perímetro, ou seja, $a + b$ (em cm)?",
  "Koľko minút je ${@0}$?": "Quantos minutos são ${@0}$?",
  "Koľko minút je ${@0}^\\circ$?": "Quantos minutos são ${@0}^\\circ$?",
  "Koľko minút zostane?": "Quantos minutos sobram?",
  "Koľko osí súmernosti má {@0}?": "Quantos eixos de simetria tem o {@0}?",
  "Koľko riadkov je bod A vzdialený od osi?": "A quantas linhas do eixo está o ponto A?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "Quantos graus somam os dois ângulos da base?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "Quantos graus somam os ângulos $\\alpha$ e $\\beta$?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "Quantos graus sobram depois da subtração (não se esqueça do grau emprestado)?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "Quantos graus faltam para a soma dos ângulos do triângulo?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "A quantas colunas do eixo está o ponto A?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "Quantas vezes 60 cabe no número de minutos?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "O círculo tem infinitos eixos de simetria: qualquer reta que passe pelo seu centro.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "Círculos divididos em partes: um meio, três quartos, três oitavos",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "Você simplificou corretamente, mas a fração ainda não é irredutível: o numerador e o denominador ainda podem ser divididos por um mesmo número.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "Qual algarismo está no número ${@0}$ logo depois da casa de {@1}?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "Que número multiplicado por ele mesmo dá a área? Esse é o lado.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "Que número multiplicado por ele mesmo dá {@0}?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "Qual é o menor algarismo que deve ser escrito no lugar de $\\square$ para que o número ${@0}$ seja divisível por {@1}?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "Qual é o menor algarismo que deve ser somado a {@0} para que a soma seja divisível por {@1}?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "Com esse comprimento os pedaços até poderiam ser cortados sem sobra, mas não são os mais compridos possíveis.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "Entre unidades de área vizinhas a relação de conversão é 100.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "Medindo um ângulo com o transferidor: ângulo de 50 graus",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "Há poucos minutos, por isso trocamos 1 grau: ${@0} = {@1}$. Depois ${@2} - {@3} = {@4}$ e ${@5} - {@6} = {@7}$, o resultado é ${@8}$.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "Há poucos minutos: troque 1 grau por 60 minutos. Quantos minutos o primeiro ângulo terá então?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "Não pode haver 60 minutos ou mais. Troque 60 minutos por 1 grau.",
  "Má 180°, ramená tvoria priamku, je priamy.": "Mede 180°, os lados formam uma reta: é raso.",
  "Má presne 90°, je pravý.": "Mede exatamente 90°: é reto.",
  "NSD; nsn": "MDC; MMC",
  "Na deliteľnosť 6 treba oboje.": "Para a divisibilidade por 6 são necessárias as duas coisas.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "Na reta numérica, o número maior fica à direita. Todo número negativo é menor que zero e que qualquer número positivo.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "Na reta numérica, o número {@0} fica mais à direita, é maior. Por isso ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "A temperatura mínima da noite foi {@0} °C e a máxima do dia, {@1} °C. Quantos graus mais quente estava durante o dia?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "Primeiro uma parte: ${@0} : {@1} = {@2}$. Depois {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "Primeiro calcule o lado a partir do perímetro (o quadrado tem 4 lados iguais).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "O máximo divisor comum de {@0} e {@1} é {@2}. Simplificamos por ele: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "Não se esqueça de que 1 e o próprio número {@0} são sempre divisores.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "Não é par, mas a soma dos algarismos, {@0}, é divisível por 3.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "Não é par e a soma dos algarismos, {@0}, não é divisível por 3.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "Não. A letra {@0} não tem eixo de simetria vertical nem horizontal: ao dobrá-la, as metades não coincidem.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "Encontre o maior número pelo qual se podem dividir o numerador e o denominador.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "Multiplicamos sem vírgulas: ${@0}\\cdot {@1} = {@2}$. Os fatores têm juntos {@3} {@4}, por isso ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "Quantos graus mais quente estava durante o dia?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "Quantos graus a temperatura sobe de 0 °C para {@0} °C?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "Quantos graus a temperatura sobe de {@0} °C para 0 °C?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "O retângulo (que não é quadrado) tem 2 eixos de simetria, que ligam os pontos médios de lados opostos. As diagonais não são eixos.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "Retângulo de 5 cm por 3 cm dividido em quadradinhos de 1 cm²",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Um retângulo tem área de ${@0}\\,\\text{cm}^2$ e um lado de ${@1}\\,\\text{cm}$. Qual é o comprimento do outro lado (em cm)?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "Um retângulo tem lados $a = {@0}\\,\\text{cm}$ e $b = {@1}\\,\\text{cm}$. Calcule sua área em cm².",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "Um retângulo tem lados $a = {@0}\\,\\text{cm}$ e $b = {@1}\\,\\text{cm}$. Calcule seu perímetro em cm.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "Os dois números são divisíveis por {@0}, portanto $\\text{mdc}({@1}, {@2}) = {@3} &gt; 1$. Não são primos entre si.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "A área é o produto dos lados, então o outro lado se obtém dividindo.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "A área é o produto dos lados, por isso o outro lado se obtém dividindo, não subtraindo.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "A área não se divide por quatro como o perímetro. O lado é o número que, multiplicado por ele mesmo, dá a área.",
  "Obsah obdĺžnika: S = a · b.": "Área do retângulo: S = a · b.",
  "Obsah štvorca je strana krát strana.": "A área do quadrado é lado vezes lado.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "O perímetro não é o lado do quadrado. Primeiro divida-o por quatro: você obtém o lado.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "Perímetro do retângulo: o = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "Esfriar significa subtrair.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "Do perímetro você subtraiu os dois lados de comprimento a. Sobraram dois lados b: ainda divida o resultado por dois.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "Da temperatura de {@0} °C você subtrai uma temperatura negativa, {@1} °C. Subtrair um número negativo é somar o oposto.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "Da temperatura mais alta, subtraia a mais baixa. Subtrair um número negativo é somar o oposto.",
  "Odčítaj minúty.": "Subtraia os minutos.",
  "Odčítaj stupne.": "Subtraia os graus.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "Você subtrai um número positivo: na reta numérica você se move para a esquerda.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "Subtrair um número negativo é somar o seu oposto: menos com menos dá mais.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "Subtrair um número negativo é somar o oposto: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "Subtrair um número é o mesmo que somar o seu oposto. Use a reta numérica para ajudar.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "Além das retas pelos pontos médios de lados opostos, as diagonais do quadrado também são eixos.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "O oposto fica na reta à mesma distância do zero, mas do outro lado: o de {@0} é {@1}.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "O oposto tem a mesma distância do zero, mas o sinal contrário.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "O eixo de simetria $o$ (linha tracejada) é uma reta horizontal na linha {@0}. O ponto $A$ está na linha {@1}. Em qual linha está a sua imagem $A'$?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "O eixo de simetria $o$ (linha tracejada) é uma reta vertical na coluna {@0}. O ponto $A$ está na coluna {@1}. Em qual coluna está a sua imagem $A'$?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "Um eixo de simetria passa por cada vértice do triângulo equilátero, não só por um.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "O triângulo acutângulo tem os três ângulos menores que 90°. Não se esqueça de calcular também o terceiro ângulo.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "O ângulo agudo é menor que o ângulo reto, ou seja, menor que 90°.",
  "Ostrý, pravý, tupý a priamy uhol": "Ângulo agudo, reto, obtuso e raso",
  "Oteplenie znamená pripočítať.": "Esquentar significa somar.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "Verifique a desigualdade triangular: a soma dos dois lados mais curtos precisa ser maior que o lado mais comprido.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "A metade do perímetro é $a + b = {@0} : 2 = {@1}$, por isso $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "A metade do perímetro é a soma de dois lados adjacentes.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "Compare o ângulo com o ângulo reto (90°, o canto de um caderno) e com o ângulo raso (180°).",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "O último algarismo é {@0}, é 0 ou 5.",
  "Posledná číslica je {@0}, je to 0.": "O último algarismo é {@0}, é 0.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "O último algarismo é {@0}, não é 0 nem 5.",
  "Posledná číslica je {@0}, nie je to 0.": "O último algarismo é {@0}, não é 0.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "Você deslocou a vírgula no sentido contrário. Ao dividir por {@0}, o número fica menor.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "Você deslocou a vírgula no sentido contrário. Ao multiplicar por {@0}, o número fica maior.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "Use o critério de divisibilidade do número dado (último algarismo, soma dos algarismos ou os dois últimos algarismos).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Olhe o primeiro algarismo depois da casa para a qual você arredonda: de 0 a 4, para baixo; de 5 a 9, para cima.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "Olhe com atenção: os dois números são iguais.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "Veja se os três lados não têm o mesmo comprimento: esse triângulo tem um nome mais preciso.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "O número de zeros de 10, 100 ou 1 000 indica quantas casas a vírgula decimal se desloca.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "Calcule separadamente os graus e os minutos. 60 minutos são 1 grau.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "Você pegou 1 grau emprestado para os minutos, mas não o tirou dos graus.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "O triângulo retângulo tem um ângulo de exatamente 90°. Calcule o terceiro ângulo e confira.",
  "Pravý uhol má presne 90° – ako roh zošita.": "O ângulo reto mede exatamente 90°, como o canto de um caderno.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "Imagine um espelho colocado na vertical ou na horizontal pelo meio da letra.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "Imagine que você dobra a figura ao longo de uma reta. De quantas maneiras as duas metades coincidem exatamente?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "Transforme: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "Por isso não: o número {@0} não é divisível por {@1}.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "Por isso sim: o número {@0} é divisível por {@1}.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "Reduza as duas frações ao mesmo denominador e compare os numeradores.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "Ao dividir por {@0}, deslocamos a vírgula decimal {@1} {@2} para a esquerda: {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "Na divisibilidade por 10 decide o último algarismo: ele precisa ser 0.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "Na divisibilidade por 2 só o último algarismo decide: ele precisa ser par.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "Na divisibilidade por 3 não decide o último algarismo, mas a soma dos algarismos. Some todos os algarismos.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "Na divisibilidade por 4 não basta que o número seja par. Decide o número formado pelos dois últimos algarismos.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "Na divisibilidade por 5 decide o último algarismo: ele precisa ser 0 ou 5.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "Na divisibilidade por 9 decide a soma dos algarismos: ela precisa ser divisível por 9; não basta ser divisível por 3.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "Ao multiplicar por {@0}, deslocamos a vírgula decimal {@1} {@2} para a direita: {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "Nas unidades de área a relação não é 10, mas $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "Nas unidades de área a relação não é 10, mas $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "Ao pegar emprestado, você troca 1 grau por 60 minutos, não por 100.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "Entre números negativos, é maior o que está mais perto do zero. Não decide qual tem o algarismo maior.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "O ângulo raso mede 180°; seus lados estão sobre uma mesma reta.",
  "Pripočítaj ešte ${@0}'$.": "Some ainda ${@0}'$.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "Você soma um número positivo: na reta numérica você se move para a direita.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "Somar um número negativo é subtrair: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "Somar um número negativo significa mover-se para a esquerda na reta, ou seja, subtrair.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "Um número primo tem só dois divisores. Teste se {@0} não pode ser dividido sem resto por algum dos números 2, 3, 5, 7.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "Um número primo tem exatamente dois divisores e um número composto, mais de dois. Quantos divisores tem o número 1?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "O triângulo isósceles (não equilátero) tem 1 eixo de simetria: passa pelo vértice principal e pelo ponto médio da base.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "O triângulo isósceles tem dois lados de mesmo comprimento.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "O triângulo equilátero tem 3 eixos de simetria; cada um passa por um vértice e pelo ponto médio do lado oposto.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "O triângulo equilátero tem os três lados de mesmo comprimento.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "Diferença de temperaturas: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Durante o dia estava {@5} °C mais quente.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "Decide o algarismo logo depois dessa casa: é {@0}. É 5 ou mais, arredondamos para cima: ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "Decide o algarismo logo depois dessa casa: é {@0}. É menor que 5, arredondamos para baixo: ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "A decomposição não está terminada: {@0} não é primo. Continue dividindo por números primos.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "Decomponha os dois números em fatores primos. O MDC é formado pelos fatores primos comuns; o MMC, por todos (com o maior número de repetições).",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "Decomponha os números {@0} e {@1} em fatores primos. Qual é o máximo divisor comum deles?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "Decomponha o número {@0} em um produto de números primos. Escreva os fatores primos do menor para o maior, separados por ponto e vírgula (inclusive os repetidos).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "Ampliamos para o denominador {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Ou dividimos ${@6} : {@7}$.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "De manhã fazia {@0} °C. Até a noite a temperatura caiu {@1} °C. Qual era a temperatura à noite (em °C)?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "De manhã fazia {@0} °C. Até a noite a temperatura subiu {@1} °C. Qual era a temperatura à noite (em °C)?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "O triângulo escaleno tem os três lados de comprimentos diferentes. Compare os comprimentos mais uma vez.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "O triângulo escaleno não tem nenhum eixo de simetria: não há dois lados de mesmo comprimento.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "Com esse algarismo o número será mesmo divisível, mas você procura o menor algarismo possível.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "Simplifique a fração $\\frac{{@0}}{{@1}}$ até a forma irredutível. Escreva a resposta como a/b.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "Tente encontrar um divisor comum maior que 1: veja, por exemplo, se os dois números são divisíveis por 2, 3, 5 ou 7.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "Teste se o número pode ser dividido por 2, 3, 5 ou 7 sem resto.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "O denominador comum é {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ e $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Como ${@9} {@10} {@11}$, vale $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Conte a quantas linhas do eixo está o ponto A e conte o mesmo número do outro lado.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "Conte quantos lados têm o mesmo comprimento.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Conte a quantas colunas do eixo está o ponto A e conte o mesmo número do outro lado.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "Lado: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Área: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "Você multiplicou o lado por dois. A área do quadrado é lado vezes lado, não lado vezes 2.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Você somou os lados. A área do retângulo é o produto dos comprimentos de seus lados.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "Árvores de fatoração de 60 e 84",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "Graus: ${@0} + {@1} = {@2}$; minutos: ${@3} + {@4} = {@5}$. Como ${@6}' = 1^\\circ\\,{@7}'$, o resultado é ${@8}$.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "Graus: ${@0} + {@1} = {@2}$; minutos: ${@3} + {@4} = {@5}$. O resultado é ${@6}$.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "Graus: ${@0} - {@1} = {@2}$; minutos: ${@3} - {@4} = {@5}$. O resultado é ${@6}$.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "Os números {@0} e {@1} são primos entre si ou não?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "A soma é igual ao lado mais comprido: os lados ficariam sobre uma mesma reta. O triângulo não pode ser construído.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "A soma dos ângulos é $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "A soma dos ângulos de um triângulo é 180°, não 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "A soma dos ângulos internos de um triângulo é 180°, não 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "A soma dos ângulos internos de um triângulo é 180°.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "A soma dos algarismos conhecidos é {@0}. A soma dos algarismos precisa ser divisível por {@1}: o menor algarismo adequado é {@2}, porque ${@3} + {@4} = {@5}$.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "O produto {@0}·{@1} é um múltiplo comum, mas não o mínimo. As linhas se encontram antes.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "O produto {@0}·{@1} é um múltiplo comum, mas não o mínimo. No MMC, tome cada fator primo só tantas vezes quanto ele aparece no número em que aparece mais vezes.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "Some os dois lados mais curtos e compare a soma com o lado mais comprido. Basta que a soma seja maior.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "Some os dois lados mais curtos e compare com o lado mais comprido. A soma precisa ser maior.",
  "Sčítaj minúty.": "Some os minutos.",
  "Sčítaj stupne.": "Some os graus.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "Some os algarismos conhecidos. Acrescente à soma o menor algarismo possível para que a soma seja divisível por {@0}.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "Você somou só dois lados. O retângulo tem quatro lados: ainda multiplique por dois a soma dos lados adjacentes.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "Assim a soma dos algarismos será divisível por 3, mas para a divisibilidade por 9 ela precisa ser divisível por 9.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "Essa é a medida do ângulo adjacente suplementar. Os ângulos opostos pelo vértice ficam um em frente ao outro e são congruentes.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "Esse é o mínimo múltiplo comum. O pedaço precisa ser mais curto que as fitas: você procura o máximo divisor comum.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "Esse é o máximo divisor comum. O horário da saída conjunta precisa ser múltiplo dos dois intervalos: você procura o mínimo múltiplo comum.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "Esse é o perímetro do quadrado. A área se calcula como lado vezes lado.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "Esse é o perímetro. A área do retângulo se calcula como o produto dos comprimentos de seus lados.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "Esse é o lado do quadrado. Agora calcule a área a partir dele.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "Esse é o lado do quadrado. Agora calcule o perímetro a partir dele.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "Essa é a distância do ponto A ao eixo. A imagem fica à mesma distância do outro lado do eixo: descubra o número dela.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "Isso é o que somam os dois ângulos da base. Eles são congruentes, por isso ainda divida o resultado por dois.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "Terceiro ângulo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. O maior ângulo mede ${@3}^\\circ$, é reto: o triângulo é retângulo.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "Terceiro ângulo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. O maior ângulo mede ${@3}^\\circ$, é obtuso: o triângulo é obtusângulo.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "Terceiro ângulo: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. O maior ângulo mede ${@3}^\\circ$; todos os ângulos são agudos: o triângulo é acutângulo.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "Um triângulo tem dois ângulos internos de ${@0}^\\circ$ e ${@1}^\\circ$. Que tipo de triângulo é quanto aos ângulos?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "Um triângulo tem lados de {@0} cm, {@1} cm e {@2} cm. Como ele é quanto aos lados?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "O triângulo obtusângulo tem um ângulo maior que 90°. Calcule o terceiro ângulo e confira.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "O ângulo obtuso é maior que 90° e, ao mesmo tempo, menor que 180°.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "Essa propriedade só o número 1 tem. Todo número natural maior é primo ou composto.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "As diagonais do retângulo não são eixos de simetria: dobrando-o ao longo de uma diagonal, as metades não coincidem.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "Os ângulos da base de um triângulo isósceles são iguais e os três ângulos somam 180°.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "Os ângulos da base são congruentes: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "O ângulo $\\alpha$ mede ${@0}^\\circ$. Quanto mede o ângulo adjacente suplementar a ele (em graus)?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "O ângulo $\\alpha$ mede ${@0}^\\circ$. Quanto mede o ângulo oposto pelo vértice a ele (em graus)?",
  "Uhol má {@0}°.": "O ângulo mede {@0}°.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "Coloque a vírgula decimal: quanto é ${@0}\\cdot {@1}$?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "Determine o máximo divisor comum e o mínimo múltiplo comum de {@0} e {@1}. Escreva-os na ordem MDC; MMC.",
  "V ktorom riadku leží obraz $A'$?": "Em qual linha está a imagem $A'$?",
  "V ktorom stĺpci leží obraz $A'$?": "Em qual coluna está a imagem $A'$?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "Em um triângulo isósceles, o ângulo oposto à base (no vértice principal) mede ${@0}^\\circ$. Quanto mede cada um dos ângulos da base?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "No triângulo $ABC$, $\\alpha = {@0}^\\circ$ e $\\beta = {@1}^\\circ$. Quanto mede o ângulo $\\gamma$ (em graus)?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "Ângulos adjacentes suplementares formam juntos um ângulo raso; ângulos opostos pelo vértice são congruentes.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "Ângulos adjacentes suplementares somam $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "Ângulos adjacentes suplementares não completam um ângulo reto, mas um ângulo raso (180°).",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "Ângulos adjacentes suplementares formam juntos um ângulo raso, ou seja, 180°, não 360°.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "Ângulos opostos pelo vértice têm a mesma medida, por isso ele também mede ${@0}^\\circ$.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "Divida o número de minutos por 60. O quociente são os graus e o resto, os minutos.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "Divida o numerador e o denominador por {@0}. Que fração você obtém (a/b)?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "Expresse ${@0}'$ em graus e minutos. Escreva na forma graus; minutos.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "Multiplique os fatores primos que estão nas duas decomposições.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "Multiplique os números sem as vírgulas decimais e depois conte as casas decimais dos dois fatores.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "Multiplique os números sem as vírgulas decimais: ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Você multiplicou os lados: isso é a área. O perímetro é a soma dos comprimentos dos quatro lados.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "Calcule ${@0} {@1} {@2}$. Escreva o resultado na forma graus; minutos.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "Calcule ${@0}\\cdot {@1}$.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "Calcule $|{@0}| + |{@1}|$.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "Você calculou só uma parte. Ainda multiplique-a pelo numerador {@0}.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "É maior o número que fica mais à direita na reta numérica. Atenção: −2 é maior que −9.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "Todos os lados têm o mesmo comprimento, o triângulo é equilátero.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "Os três lados têm comprimentos diferentes, o triângulo é escaleno.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "Da rodoviária sai a linha A a cada {@0} minutos e a linha B a cada {@1} minutos. Às 7:00 as duas linhas saíram juntas. Quantos minutos depois elas sairão juntas de novo?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "De uma unidade menor para uma maior dividimos por 100.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "Depois dessa casa está o algarismo {@0}. Arredonde ${@1}$ para {@2}.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Você trocou o numerador e o denominador: divida o número pelo denominador e multiplique o resultado pelo numerador.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "Você arredondou para outra casa. Arredondar para {@0} significa que o último algarismo mantido fica na casa de {@1}.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Escreva $\\frac{{@0}}{{@1}}$ como número decimal.",
  "Zapíš výsledok v poradí NSD; nsn.": "Escreva o resultado na ordem MDC; MMC.",
  "Zapíš výsledok v tvare stupne; minúty.": "Escreva o resultado na forma graus; minutos.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Escreva a fração $\\frac{{@0}}{{@1}}$ como número decimal.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "Você alinhou os números pela direita como números inteiros. As vírgulas decimais precisam ficar uma embaixo da outra: escreva o número {@0} como {@1}0.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "Alinhamos as vírgulas decimais uma embaixo da outra e completamos com zeros: ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "Descubra se existe um número maior que 1 pelo qual os dois números possam ser divididos.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "O traço de fração não é uma vírgula decimal. Uma fração significa divisão: divida o numerador pelo denominador.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "As frações não são iguais. Reduza-as ao mesmo denominador e compare os numeradores.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "Frações com denominadores diferentes não podem ser comparadas só pelos numeradores ou só pelos denominadores. Reduza-as ao mesmo denominador.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "Amplie a fração para que o denominador seja 10, 100 ou 1 000, ou divida o numerador pelo denominador.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "Um número composto tem algum divisor além de 1 e dele mesmo. Tente encontrar esse divisor de {@0}; se não houver nenhum, o número não é composto.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "Você refletiu o ponto em relação ao centro da malha, não em relação ao eixo o.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "Um jardim tem a forma de um retângulo de {@0} m por {@1} m. Qual é a área do jardim em m²?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "Um jardim tem a forma de um retângulo de {@0} m por {@1} m. Quantos metros de tela são necessários para cercá-lo?",
  "ani prvočíslo, ani zložené": "nem primo nem composto",
  "desatinné miesta": "casas decimais",
  "desatinné miesto": "casa decimal",
  "desatinných miest": "casas decimais",
  "desatín": "décimos",
  "jednotky (celé čísla)": "unidades (números inteiros)",
  "kladné": "positivo",
  "kosodĺžnik (rovnobežník)": "paralelogramo",
  "kosoštvorec": "losango",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "as divisões pequenas são centésimos (0,01); as grandes, décimos (0,1)",
  "miesta": "casas",
  "miesto": "casa",
  "napr. 2/3": "por ex., 2/3",
  "napr. 2; 2; 3": "por ex., 2; 2; 3",
  "nekonečne veľa": "infinitos",
  "nesúdeliteľné": "primos entre si",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "O MMC contém todos os fatores primos: $\\text{mmc}({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "acutângulo",
  "ostrý (30°)": "agudo (30°)",
  "podľa strán": "quanto aos lados",
  "podľa uhlov": "quanto aos ângulos",
  "pravouhlý": "retângulo",
  "pravý (90°)": "reto (90°)",
  "priamy": "raso",
  "priamy (180°)": "raso (180°)",
  "prvočíslo": "número primo",
  "riadkov": "linhas",
  "rovnoramenný": "isósceles",
  "rovnoramenný trojuholník": "triângulo isósceles",
  "rovnostranný": "equilátero",
  "rovnostranný trojuholník": "triângulo equilátero",
  "rôznostranný": "escaleno",
  "rôznostranný trojuholník": "triângulo escaleno",
  "stotiny": "centésimos",
  "stotín": "centésimos",
  "stred uhlomera = vrchol uhla": "centro do transferidor = vértice do ângulo",
  "stupne; minúty": "graus; minutos",
  "stĺpce": "colunas",
  "stĺpcov": "colunas",
  "stĺpec": "coluna",
  "súdeliteľné": "não primos entre si",
  "tupouhlý": "obtusângulo",
  "tupý (135°)": "obtuso (135°)",
  "zložené číslo": "número composto",
  "záporné": "negativo",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "Sim. A letra {@0} tem eixo de simetria horizontal.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "Sim. A letra {@0} tem eixo de simetria vertical e horizontal.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "Sim. A letra {@0} tem eixo de simetria vertical.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "Figura e sua imagem em uma simetria axial na malha quadriculada",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "O horário da saída conjunta precisa ser múltiplo dos dois intervalos. Procure o menor deles.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "Reta numérica de 2 a 3 com décimos e centésimos",
  "Číselná os s celými číslami od −6 do 6": "Reta numérica com os números inteiros de −6 a 6",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "Os números não são iguais. Descubra qual deles fica mais à direita na reta numérica.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "Números de 1 a 60, os números primos estão coloridos",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "O algarismo depois dessa casa é {@0}, ou seja, 5 ou mais: arredonda-se para cima.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "O algarismo depois dessa casa é {@0}, ou seja, menos de 5: arredonda-se para baixo.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "O número 1 tem um único divisor (ele mesmo), por isso não é nem primo nem composto.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "Um número é divisível por 6 só se for divisível por 2 e por 3 ao mesmo tempo. Verifique as duas condições.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Divida o número pelo denominador e multiplique o resultado pelo numerador.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "O número formado pelos dois últimos algarismos é {@0}, é divisível por 4.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "O número formado pelos dois últimos algarismos é {@0}, não é divisível por 4.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "O número {@0} tem só dois divisores: 1 e {@1}. É um número primo.",
  "časti": "partes",
  "častí": "partes",
  "časť": "parte",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "O quadrado tem 4 eixos de simetria: 2 ligam os pontos médios de lados opostos e 2 estão sobre as diagonais.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "Um quadrado tem área de ${@0}\\,\\text{cm}^2$. Qual é o seu perímetro em cm?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Um quadrado tem perímetro de ${@0}\\,\\text{cm}$. Qual é a sua área em cm²?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Um quadrado tem lado de ${@0}\\,\\text{cm}$. Qual é a sua área em cm²?",
  "štvorčeková sieť s osou a bodom A": "malha quadriculada com um eixo e o ponto A"
 }
});
