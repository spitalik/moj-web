/* Português: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/r3/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "r3-cisla1000": {
   "title": "Números até 1 000",
   "summary": "Centenas, dezenas e unidades, sequência numérica e comparação de números de três algarismos.",
   "theory": [
    "<p>Um número de três algarismos tem <strong>centenas (C)</strong>, <strong>dezenas (D)</strong> e <strong>unidades (U)</strong>.\n       O número 472 tem 4 centenas, 7 dezenas e 2 unidades: $472 = 400 + 70 + 2$. Dez centenas formam <strong>mil</strong>: $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "Reta numérica de 0 a 1 000. O número 350 fica no meio, entre 300 e 400; o número 720 está mais perto de 700."
    },
    "<p><strong>Comparação:</strong> primeiro comparamos as centenas; se forem iguais, as dezenas; e por fim as unidades.\n       $538 &gt; 497$, porque 5 centenas são mais que 4. $642 &lt; 648$, porque as centenas e as dezenas são iguais e $2 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Compare os números 806 e 860.",
     "steps": [
      "As centenas são iguais (8).",
      "Dezenas: 0 e 6; zero é menos.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "Escreva o número que tem 3 centenas, 0 dezenas e 9 unidades.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "Na casa das dezenas escrevemos zero.",
      "<strong>É o número 309.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "Adição e subtração até 1 000",
   "summary": "Cálculo mental por partes e conta armada.",
   "theory": [
    "<p>No <strong>cálculo mental</strong>, calculamos por partes: $356 + 230$ = primeiro $356 + 200 = 556$, depois $556 + 30 = 586$.\n       Com centenas exatas calculamos como se fossem unidades: $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p>Na <strong>conta armada</strong>, escrevemos os números um embaixo do outro, com unidades embaixo de unidades, dezenas embaixo de dezenas e centenas embaixo de centenas.\n       Calculamos da direita para a esquerda: unidades, dezenas, centenas. Se a soma em alguma casa passar de 9, levamos 1 (o “vai um”) para a casa da esquerda.</p>",
    {
     "fig": "r3-stlpec",
     "caption": "Conta armada $347 + 285 = 632$. Os pequenos números 1 em cima são as dezenas e centenas que “vão”."
    },
    "<p>Sempre podemos <strong>conferir a subtração com uma adição</strong>: se $632 - 285 = 347$, então deve valer $347 + 285 = 632$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $468 + 275$.",
     "steps": [
      "Unidades: $8 + 5 = 13$, escrevo 3 e vai 1.",
      "Dezenas: $6 + 7 + 1 = 14$, escrevo 4 e vai 1.",
      "Centenas: $4 + 2 + 1 = 7$.",
      "<strong>Resultado: 743</strong>"
     ]
    },
    {
     "task": "Calcule $700 - 340$.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "Verificação: $360 + 340 = 700$. <strong>Resultado: 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "Multiplicação e divisão",
   "summary": "Tabuada completa, multiplicação de dezenas e divisão com resto.",
   "theory": [
    "<p>Encontramos a tabuada até $10 \\cdot 10$ em uma tabela: na linha está o primeiro fator, na coluna o segundo, e no cruzamento está o produto.\n       A divisão é o contrário da multiplicação: de $6 \\cdot 7 = 42$ sabemos que $42 : 6 = 7$ e também $42 : 7 = 6$.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "Tábua de multiplicação: a linha 6 e a coluna 7 se encontram no número 42, ou seja, $6 \\cdot 7 = 42$."
    },
    "<p><strong>Multiplicar dezenas:</strong> $30 \\cdot 4$ são 3 dezenas vezes 4, ou seja, 12 dezenas, isto é, $120$.</p>",
    "<p><strong>Divisão com resto:</strong> nem toda divisão é exata. $17 : 5 = 3$ e <em>resto</em> 2, porque $3 \\cdot 5 = 15$\n       e ainda faltam 2 para 17. O resto deve ser sempre menor que o divisor.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $8 \\cdot 7$ e $56 : 8$.",
     "steps": [
      "Pela tabuada: $8 \\cdot 7 = 56$.",
      "A divisão é o contrário da multiplicação, por isso $56 : 8 = 7$."
     ]
    },
    {
     "task": "Divida com resto: $29 : 4$.",
     "steps": [
      "O maior múltiplo de 4 que não passa de 29 é $7 \\cdot 4 = 28$.",
      "Resto: $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$, resto 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "Parênteses e ordem das operações",
   "summary": "O que calculamos primeiro: parênteses, multiplicação e divisão, adição e subtração.",
   "theory": [
    "<p>Em uma conta com várias operações, vale esta ordem:</p>\n       <ol><li>primeiro calculamos o que está entre <strong>parênteses</strong>,</li>\n       <li>depois a <strong>multiplicação e a divisão</strong>,</li>\n       <li>por fim a <strong>adição e a subtração</strong> (da esquerda para a direita).</li></ol>",
    "<p>Compare: $2 + 3 \\cdot 4 = 2 + 12 = 14$, mas $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. Os parênteses mudam o resultado!</p>",
    "<p>Quando só há adição e subtração, vamos da esquerda para a direita: $20 - 5 - 3 = 15 - 3 = 12$. Mas, se uma parte estiver entre parênteses,\n       calculamos essa parte antes: $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $18 + 4 \\cdot 6$.",
     "steps": [
      "A multiplicação vem antes: $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>Resultado: 42</strong>"
     ]
    },
    {
     "task": "Calcule $(15 - 7) \\cdot 3$.",
     "steps": [
      "Primeiro os parênteses: $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>Resultado: 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "Problemas com várias etapas",
   "summary": "Problemas que se resolvem com duas ou três contas seguidas.",
   "theory": [
    "<p>Alguns problemas não se resolvem com uma só conta. Seguimos por etapas: <strong>o que sabemos</strong>,\n       <strong>o que precisamos descobrir primeiro</strong> e <strong>o que procuramos no final</strong>.</p>",
    "<p>Exemplo: Mamãe comprou 3 cadernos de 4 € cada e pagou com uma nota de 20 €. Quantos euros ela recebeu de troco?<br>\n       1ª etapa – preço dos cadernos: $3 \\cdot 4 = 12$ €.<br>2ª etapa – troco: $20 - 12 = 8$ €.<br>Resposta: Mamãe recebeu 8 € de troco.</p>",
    "<p>Também podemos juntar as etapas em uma só expressão: $20 - 3 \\cdot 4 = 20 - 12 = 8$ (a multiplicação vem antes).\n       No final, sempre verificamos se a resposta faz sentido.</p>"
   ],
   "examples": [
    {
     "task": "Havia 34 pessoas no ônibus. No ponto, 12 pessoas desceram e 9 pessoas subiram. Quantas pessoas há agora no ônibus?",
     "steps": [
      "Depois que desceram: $34 - 12 = 22$.",
      "Depois que subiram: $22 + 9 = 31$.",
      "<strong>Há 31 pessoas no ônibus.</strong>"
     ]
    },
    {
     "task": "Ana tem 2 pacotes de 8 figurinhas e mais 5 soltas. Quantas figurinhas ela tem ao todo?",
     "steps": [
      "Nos pacotes: $2 \\cdot 8 = 16$.",
      "Ao todo: $16 + 5 = 21$.",
      "<strong>Ana tem 21 figurinhas.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "Perímetro de figuras planas",
   "summary": "Perímetro do triângulo, do quadrado e do retângulo como soma dos lados.",
   "theory": [
    "<p>O <strong>perímetro</strong> de uma figura é o comprimento da linha em volta dela. Calculamos o perímetro <strong>somando as medidas de todos os lados</strong>.\n       Indicamos o perímetro pela letra $o$.</p>",
    {
     "fig": "r3-obvod",
     "caption": "O retângulo tem dois lados mais compridos e dois mais curtos; o triângulo tem três lados. O perímetro é a soma de todos os lados."
    },
    "<p><strong>Triângulo</strong> de lados $a, b, c$: $o = a + b + c$.<br>\n       <strong>Quadrado</strong> de lado $a$: $o = a + a + a + a = 4 \\cdot a$.<br>\n       <strong>Retângulo</strong> de lados $a, b$: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule o perímetro de um quadrado de lado $7\\,\\text{cm}$.",
     "steps": [
      "O quadrado tem 4 lados iguais.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Um retângulo tem lados de $9\\,\\text{cm}$ e $4\\,\\text{cm}$. Qual é o seu perímetro?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "Unidades de comprimento, massa, capacidade e tempo",
   "summary": "Do milímetro ao quilômetro, grama e quilograma, litro e decilitro, do segundo à semana.",
   "theory": [
    "<p><strong>Comprimento:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>Massa:</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>Capacidade:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, ou seja, $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>Tempo:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 dia = 24 h, 1 semana = 7 dias.</p>",
    "<p>Ao converter para uma unidade <strong>menor</strong>, o número aumenta (multiplicamos); ao converter para uma unidade <strong>maior</strong>, o número diminui (dividimos).\n       Por exemplo, $3\\,\\text{m} = 300\\,\\text{cm}$ e $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Converta $2\\,\\text{m}\\ 35\\,\\text{cm}$ em centímetros.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "O filme começou às 17:40 e terminou às 19:10. Quantos minutos ele durou?",
     "steps": [
      "Das 17:40 às 18:00 são 20 minutos.",
      "Das 18:00 às 19:00 são 60 minutos, e das 19:00 às 19:10 mais 10 minutos.",
      "$20 + 60 + 10 = 90$. <strong>O filme durou 90 minutos.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "Tabelas e dados simples",
   "summary": "Ler dados de uma tabela e de um gráfico de barras, comparar e somar.",
   "theory": [
    "<p>Muitas vezes registramos dados em uma <strong>tabela</strong>. Na primeira linha ficam os nomes (por exemplo, os dias) e embaixo, os números.\n       Uma sorveteria anotou quantos sorvetes vendeu:</p>\n       <table class=\"tbl\"><tr><th>dia</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th></tr>\n       <tr><td>sorvetes</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>Podemos desenhar os mesmos dados em um <strong>gráfico de barras</strong>. Quanto mais alta a barra, maior o número.</p>",
    {
     "fig": "r3-graf",
     "caption": "A barra mais alta é a de sexta-feira (18), a mais baixa a de terça-feira (8). Na sexta venderam $18 - 8 = 10$ sorvetes a mais que na terça."
    },
    "<p>Com os dados podemos descobrir onde há <strong>mais</strong> e onde há <strong>menos</strong>, <strong>quanto</strong> dois números diferem\n       (subtração) e quanto dá <strong>ao todo</strong> (adição).</p>"
   ],
   "examples": [
    {
     "task": "Quantos sorvetes venderam ao todo na segunda e na quarta-feira (pela tabela acima)?",
     "steps": [
      "Segunda 12, quarta 15.",
      "$12 + 15 = 27$.",
      "<strong>Ao todo venderam 27 sorvetes.</strong>"
     ]
    },
    {
     "task": "Quantos sorvetes a mais venderam na quarta do que na quinta-feira?",
     "steps": [
      "Quarta 15, quinta 10.",
      "$15 - 10 = 5$.",
      "<strong>Na quarta venderam 5 sorvetes a mais.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, por isso ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, por isso ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Verificação: ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Verificação: ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. Na casa das {@4} está o algarismo {@5}.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, depois ${@2} + {@3} = {@4}$. Resultado: ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1º passo – preço: ${@0} \\cdot {@1} = {@2}$ €. 2º passo – troco: ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, escrevo 3 e vai 1",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, escrevo 2 e vai 1",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "Se você não lembrar, divida a conta: por exemplo $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "Qual algarismo o número {@0} tem na casa das {@1}?",
  "Bez zátvoriek počítaj zľava doprava.": "Sem parênteses, calcule da esquerda para a direita.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "Sem parênteses, calculamos da esquerda: ${@0} - {@1} = {@2}$, depois ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "Sem parênteses, calcula-se da esquerda para a direita. Primeiro calcule ${@0} - {@1}$ e só depois subtraia {@2}.",
  "Cesta vlakom k babke trvala 3 …": "A viagem de trem até a casa da avó durou 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "A parcela que falta você descobre subtraindo.",
  "Do hrnčeka sa zmestia asi 3 …": "Em uma caneca cabem uns 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "Complete o número que falta: $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "Coloque o sinal correto: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "Escolha a unidade adequada: {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "Os dois lados mais compridos: quanto é $2 \\cdot {@0}$?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "Os dois lados mais curtos: quanto é $2 \\cdot {@0}$?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "Dois lados de {@0} cm somam $2 \\cdot {@1} = {@2}$. Para os outros dois lados sobram ${@3} - {@4} = {@5}$, então um lado mede ${@6} : 2 = {@7}\\,\\text{cm}$.",
  "Dvere sú vysoké asi 2 …": "Uma porta tem uns 2 … de altura",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "Não some os valores. “Quanto a mais” é uma diferença: subtraia o número menor do maior.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "Procure o menor número (a coluna mais baixa).",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "Procure o maior número (a coluna mais alta).",
  "Hľadaj suseda v číselnom rade.": "Procure o vizinho na sequência numérica.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "Procure na tabuada do {@0} o maior múltiplo que ainda cabe em {@1}. O resto precisa ser menor que {@2}.",
  "Jablko váži asi 150 …": "Uma maçã pesa uns 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "A unidade {@0} é pequena demais aqui: {@1} {@2} seria muito pouco.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "A unidade {@0} é grande demais aqui: {@1} {@2} seria demais.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "Quantos centímetros somam dois lados de {@0} cm?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "Quantos centímetros sobram para os outros dois lados? Calcule ${@0} - {@1}$.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "Quantas dezenas deu? Acrescente um zero a esse número.",
  "Koľko eur stál celý nákup?": "Quantos euros custou a compra toda?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "Quantos euros de troco? Calcule ${@0} - {@1}$.",
  "Koľko je ${@0} - {@1}$?": "Quanto é ${@0} - {@1}$?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "Quantos itens há em todos os pacotes juntos?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "Quanto mede cada um dos outros lados? Calcule ${@0} : 2$.",
  "Koľko minút je od {@0} do {@1}?": "Quantos minutos há das {@0} às {@1}?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "Quantos minutos durou o treino ao todo? Calcule ${@0} + {@1}$.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "Quantas arvorezinhas sobraram? Calcule ${@0} - {@1}$.",
  "Koľko stromčekov záhradník zasadil?": "Quantas arvorezinhas o jardineiro plantou?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "Quantas {@0} as três crianças têm juntas? Calcule ${@1} + {@2} + {@3}$.",
  "Koľko {@0} má {@1}?": "Quantas {@0} tem {@1}?",
  "Koľko {@0} {@1} {@2}?": "Qual é o número de {@0} que {@1} {@2}?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "Quantas pessoas há no ônibus depois que outras subiram?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "Quantas pessoas ficaram no ônibus depois que algumas desceram?",
  "Koľkokrát je {@0} v čísle {@1}?": "Quantas vezes {@0} cabe no número {@1}?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "Quantas vezes {@0} {@1} cabem em {@2} {@3}?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "Qual número é {@0} menor que {@1}?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "Qual número é {@0} maior que {@1}?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "Qual número tem {@0} {@1}, {@2} {@3} e {@4} {@5}?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "Qual é o maior múltiplo de {@0} que ainda cabe em {@1}?",
  "Lyžička sirupu má asi 5 …": "Uma colherinha de xarope tem uns 5 …",
  "Mravec je dlhý asi 5 …": "Uma formiga mede uns 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "O menor número é {@0}, {@1}.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "Primeiro multiplicação e divisão: ${@0} \\cdot {@1} = {@2}$ e ${@3} : {@4} = {@5}$. Depois ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "Primeiro a multiplicação: ${@0} \\cdot {@1} = {@2}$. Depois ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "Primeiro subtraia as {@0}: quanto é ${@1} - {@2}$?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "Primeiro transforme a unidade maior: ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "Primeiro transforme {@0} em {@1} e depois some o resto.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Primeiro some as {@0}: quanto é ${@1} + {@2}$?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "Primeiro calcule quanto há em todos os pacotes.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "Primeiro calcule quantas arvorezinhas ele plantou.",
  "Najprv vypočítaj, čo je v zátvorke.": "Primeiro calcule o que está entre parênteses.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "Primeiro descubra quanto cada criança tem e depois some tudo.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "Primeiro descubra quanto custou a compra toda. Depois subtraia isso da nota.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "Primeiro os parênteses: ${@0} + {@1} = {@2}$. Depois ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "Primeiro os parênteses: ${@0} - {@1} = {@2}$. Depois ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "Primeiro os parênteses: ${@0} {@1} {@2} = {@3}$. Depois ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "Primeiro os parênteses: quanto é ${@0} + {@1}$?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "Primeiro os parênteses: quanto é ${@0} - {@1}$?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "Primeiro os parênteses: quanto é ${@0} {@1} {@2}$?",
  "Najväčšie číslo je {@0}, a to {@1}.": "O maior número é {@0}, {@1}.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "O maior múltiplo de {@0} que não é maior que {@1} é ${@2} \\cdot {@3} = {@4}$. Resto: ${@5} - {@6} = {@7}$. Portanto ${@8} : {@9} = {@10}$, resto {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "Você escreveu só o quociente. Depois do ponto e vírgula, escreva também o resto.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "Você não deu atenção aos parênteses. Primeiro some os números entre parênteses e só depois divida.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "Você não deu atenção aos parênteses. Primeiro calcule ${@0} - {@1}$ e só depois subtraia isso de {@2}.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "Você não deu atenção aos parênteses. O que está entre parênteses se calcula antes de tudo, até antes da multiplicação.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "Encontre o dia certo e leia o número ao lado dele.",
  "Nákladné auto váži asi 8 …": "Um caminhão pesa umas 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "Faça a multiplicação e a divisão antes da subtração.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "A multiplicação tem prioridade sobre a adição e a subtração.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "Quanto a mais? Calcule ${@0} - {@1}$.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "Retângulo e triângulo com as medidas dos lados",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "O retângulo tem 4 lados: dois mais compridos e dois mais curtos. Some todos.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Um retângulo tem perímetro de ${@0}\\,\\text{cm}$ e um lado de ${@1}\\,\\text{cm}$. Qual é o comprimento do outro lado (em cm)?",
  "Obvod rozdeľ na 4 rovnaké časti.": "Divida o perímetro em 4 partes iguais.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "Você dividiu o perímetro só em duas partes. O quadrado tem quatro lados iguais.",
  "Obvod trojuholníka je súčet jeho troch strán.": "O perímetro do triângulo é a soma dos seus três lados.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "O perímetro de um quadrado é ${@0}\\,\\text{cm}$. Qual é o comprimento do lado (em cm)?",
  "Obvod: koľko je ${@0} + {@1}$?": "Perímetro: quanto é ${@0} + {@1}$?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "Do perímetro, subtraia os dois lados conhecidos e divida o resto ao meio.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "Das {@0} às {@1} são {@2} minutos, e das {@3} às {@4} mais {@5} minutos. Ao todo ${@6} + {@7} = {@8}$ minutos.",
  "Od {@0} do {@1} je {@2} minút.": "Das {@0} às {@1} são {@2} minutos.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "Subtraia por partes as centenas, as dezenas e as unidades. Confira o resultado com uma adição.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "Você subtraiu o preço de uma coisa só. Foram compradas {@0} coisas: primeiro calcule o preço de todas.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "Você subtraiu o lado de {@0} cm só uma vez. O retângulo tem dois lados assim.",
  "Pi": "Sex",
  "Platil": "Pagou",
  "Platila": "Pagou",
  "Po": "Seg",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "Depois que desceram: ${@0} - {@1} = {@2}$. Depois que subiram: ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "Dica: $5 \\cdot {@0} = {@1}$ e mais {@2} vezes {@3}, portanto ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "Compare a partir da esquerda: primeiro as centenas, depois as dezenas, depois as unidades.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "Depois subtraia as {@0}: quanto é ${@1} - {@2}$?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Depois some as {@0}: quanto é ${@1} + {@2}$?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "Conte primeiro os minutos até a hora cheia e depois os minutos seguintes.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "Calcule a partir da esquerda: quanto é ${@0} - {@1}$?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "Você calculou com 100. Com tempo vale $1\\,\\text{{@0}} = {@1}$.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "Você calculou da esquerda para a direita. A divisão tem prioridade sobre a subtração: primeiro calcule ${@0} : {@1}$.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "Você calculou da esquerda para a direita. A multiplicação tem prioridade: primeiro calcule ${@0} \\cdot {@1}$.",
  "Predané zmrzliny": "Sorvetes vendidos",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "As casas anteriores são iguais, decidem as {@0}: {@1} e {@2}. Por isso ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "Imagine essa coisa. Ela é pequena ou grande? Dura pouco ou muito?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "Transforme: ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "Transforme: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "Páginas lidas",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "Some as avulsas: quanto é ${@0} + {@1}$?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "Some por partes as centenas, as dezenas e as unidades, ou faça a conta armada.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "Some o resto: quanto é ${@0} + {@1}$?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Some a {@0}: quanto é ${@1} + {@2}$?",
  "Písomné sčítanie 347 plus 285": "Adição armada: 347 mais 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Decidem as {@0}: {@1} e {@2}. Por isso ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "Calcule com centenas inteiras como com unidades: 4 centenas + 3 centenas = 7 centenas.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "Você ficou um múltiplo de {@0} abaixo. Confira quantas vezes você somou {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "Você passou um múltiplo de {@0}. Confira quantas vezes você somou {@1}.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "Confira os dois lados: à esquerda calcule primeiro os parênteses, à direita primeiro a multiplicação.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "Lembre-se de quantos {@0} há em $1\\,\\text{{@1}}$.",
  "St": "Qua",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "Escreva as centenas na primeira posição, as dezenas na segunda e as unidades na terceira. Se faltar algo, escreva 0.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "As centenas são o primeiro algarismo da esquerda; as unidades, o último.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "Você multiplicou o lado por ele mesmo. O perímetro é a soma dos quatro lados.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "Você multiplicou os lados. O perímetro é o comprimento da linha em volta da figura: é preciso somar os lados.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "Os lados parecem iguais, mas os parênteses mudam a ordem das contas. Calcule cada lado separadamente.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "Some segunda e terça: quanto é ${@0} + {@1}$?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "Some todos os números. Ajuda procurar primeiro pares que deem um número redondo.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "Você somou só dois lados. O retângulo tem quatro lados: some cada comprimento duas vezes.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "Você somou os números do enunciado. {@0} e {@1} não são as quantidades das crianças, mas quanto uma criança tem a mais ou a menos. Primeiro descubra quanto cada criança tem.",
  "Tabuľka násobilky do 10 krát 10": "Tabuada até 10 vezes 10",
  "Taška zemiakov váži 5 …": "Um saco de batatas pesa 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "Agora termine: quanto é ${@0} {@1} {@2}$?",
  "Tlesknutie trvá asi 1 …": "Uma palma dura cerca de 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "Esse é o preço da compra toda. Agora descubra quantos euros voltaram de troco da nota.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "Isso é só o que há nos pacotes. Some ainda as {@0} avulsas.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "Esses são os outros dois lados juntos. Ainda divida isso ao meio.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "Isso é só o que {@0} tem. A pergunta é quanto as três crianças têm juntas.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "Essas são as arvorezinhas que o jardineiro plantou. Ainda subtraia as que secaram.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "Um triângulo tem lados de ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ e ${@2}\\,\\text{cm}$. Qual é o seu perímetro (em cm)?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "O treino começou às {@0} e terminou às {@1}. Quantos minutos durou?",
  "Upečené koláče": "Bolos assados",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "As arvorezinhas secas foram perdidas, por isso subtraia-as, não some.",
  "Ut": "Ter",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "No ônibus havia {@0} pessoas. No ponto, {@1} pessoas desceram e {@2} pessoas subiram. Quantas pessoas há agora no ônibus?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "Nos pacotes: ${@0} \\cdot {@1} = {@2}$. Ao todo: ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "Na sorveteria anotaram quantos sorvetes venderam.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "Em alguma coluna você subtraiu o algarismo menor do maior, embora o maior estivesse embaixo. Nesse caso é preciso pedir emprestada uma dezena da coluna ao lado.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "Na padaria anotaram quantos bolos assaram.",
  "V piatok": "Na sexta-feira",
  "V pondelok": "Na segunda-feira",
  "V stredu": "Na quarta-feira",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "Nesse dia está o menor número. Procuramos o maior.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "Nesse dia está o maior número. Procuramos o menor.",
  "V utorok": "Na terça-feira",
  "Vo vedre je 10 …": "Em um balde há 10 …",
  "Vo štvrtok": "Na quinta-feira",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "Faça a divisão com resto: ${@0} : {@1}$. Escreva o quociente e o resto separados por ponto e vírgula (por ex., 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "Calcule $({@0} + {@1}) : {@2}$.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "Calcule $({@0} {@1} {@2}) \\cdot {@3}$.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "Calcule ${@0} - ({@1} - {@2})$.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "Calcule ${@0} - {@1} - {@2}$.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "Calcule ${@0} \\cdot {@1} - {@2} : {@3}$.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "Calcule ${@0} {@1} {@2} \\cdot {@3}$.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "Calcule primeiro ${@0} \\cdot {@1}$ e depois acrescente um zero.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "Calcule cada lado separadamente. À esquerda comece pelos parênteses, à direita pela multiplicação.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "Calcule o perímetro do retângulo (em cm).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "Desceram → subtraia. Subiram → some.",
  "Vyučovacia hodina trvá 45 …": "Uma aula dura 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "A distância entre duas cidades é de 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "Esquerda: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Direita: ${@6} + {@7} = {@8}$. Por isso ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "Você se esqueceu da divisão. De {@0} você não subtrai {@1}, mas sim o resultado de ${@2} : {@3}$.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "Você se esqueceu do zero na casa das dezenas. Sem ele, os algarismos se deslocam e sai outro número.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "Você se esqueceu do “vai um”. Quando a soma de uma coluna é 10 ou mais, escreva só as unidades e some 1 à próxima coluna à esquerda.",
  "Zabudol si pripočítať ešte ${@0}$.": "Você se esqueceu de somar ainda ${@0}$.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "Você contou só dois lados. O quadrado tem quatro lados de mesmo comprimento.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "Plantou: ${@0} \\cdot {@1} = {@2}$. Sobraram: ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "Descubra qual é a diferença entre dois números vizinhos.",
  "Zmení sa počet desiatok.": "Muda o número de dezenas.",
  "Zmení sa počet stoviek.": "Muda o número de centenas.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "O sinal está virado ao contrário. Compare a partir da esquerda: decide a primeira casa em que os números diferem ({@0}).",
  "Zošit je dlhý asi 30 …": "Um caderno tem uns 30 … de comprimento",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "Júlia anotou quantas páginas de um livro leu.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "O resto é ${@0} - {@1}$. Escreva o quociente e o resto separados por ponto e vírgula.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "O resto {@0} é maior que o divisor {@1}, então o {@2} ainda cabe mais uma vez em {@3}. O resto precisa ser sempre menor que o divisor.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "O jardineiro plantou {@0} {@1} de {@2} {@3}. {@4} {@5}. Quantas arvorezinhas sobraram?",
  "balíčkov": "pacotes",
  "balíčky": "pacotes",
  "deň": "dia",
  "gaštan": "castanha",
  "gaštanov": "castanhas",
  "gaštany": "castanhas",
  "kartičiek": "cartinhas",
  "kartičku": "cartinha",
  "kartičky": "cartinhas",
  "knihy": "livros",
  "kníh": "livros",
  "koláče": "bolos",
  "koláčov": "bolos",
  "lopty": "bolas",
  "lôpt": "bolas",
  "orech": "noz",
  "perá": "canetas",
  "piatok": "sexta-feira",
  "pier": "canetas",
  "podiel; zvyšok": "quociente; resto",
  "pondelok": "segunda-feira",
  "predali": "a sorveteria vendeu",
  "prečítala Zuzka": "Júlia leu",
  "radov": "fileiras",
  "rady": "fileiras",
  "stoviek": "centenas",
  "stovku": "centena",
  "stovky": "centenas",
  "strany": "páginas",
  "streda": "quarta-feira",
  "stredu": "quarta-feira",
  "stromček uschol": "arvorezinha secou",
  "stromčekov": "arvorezinhas",
  "stromčekov uschlo": "arvorezinhas secaram",
  "stromčeky": "arvorezinhas",
  "stromčeky uschli": "arvorezinhas secaram",
  "strán": "páginas",
  "upiekli v pekárni": "a padaria assou",
  "utorok": "terça-feira",
  "v piatok": "na sexta-feira",
  "v pondelok": "na segunda-feira",
  "v stredu": "na quarta-feira",
  "v utorok": "na terça-feira",
  "vo štvrtok": "na quinta-feira",
  "zmrzliny": "sorvetes",
  "zmrzlín": "sorvetes",
  "zošitov": "cadernos",
  "zošity": "cadernos",
  "{@0} je v údajoch číslo {@1}.": "{@0}, os dados mostram o número {@1}.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0} tem {@1} a menos que {@2}, não que {@3}. Confira de quem você subtrai.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0} tem {@1} {@2} com {@3} {@4} cada e mais {@5} {@6} avulsas. Quantas {@7} tem ao todo?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0} tem {@1} {@2}. {@3} tem {@4} a mais que {@5}, e {@6} tem {@7} a menos que {@8}. Quantas {@9} as três crianças têm juntas?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} vezes {@2} são {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0} {@1} {@2} {@3} a {@4} € cada. {@5} com uma nota de {@6} €. Quantos euros de troco {@7} recebeu?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}; {@2} {@3}: ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Ao todo: ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}Qual é o número total de {@1} que {@2} nos cinco dias?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}Qual é o número de {@1} que {@2} {@3}?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}Qual é a diferença entre o número de {@1} que {@2} {@3} e {@4}?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}Em que dia {@1} menos {@2}?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}Em que dia {@1} mais {@2}?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "Você subtraiu os horários como números comuns. Uma hora tem só 60 minutos: conte primeiro até a hora cheia.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "O que você calcula primeiro? Calcule ${@0} \\cdot {@1}$.",
  "Číselný rad od 0 do 1000": "Sequência numérica de 0 a 1000",
  "Čísla klesajú vždy o {@0}: {@1}.": "Os números diminuem sempre em {@0}: {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "Não some os números direto. Primeiro transforme ${@0}$ na unidade menor $\\text{{@1}}$.",
  "Čísla rastú vždy o {@0}: {@1}.": "Os números aumentam sempre em {@0}: {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "Você só somou os números. {@0} vezes {@1} é multiplicação.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "O número {@0} tem {@1} {@2}. Então, quanto é ${@3} \\cdot {@4}$?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "Decompomos o número {@0} em {@1}: {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "Você leu do lado contrário. As unidades são o último algarismo, à direita.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "Você leu do lado contrário. As centenas são o primeiro algarismo, à esquerda.",
  "čokolád": "barras de chocolate",
  "čokolády": "barras de chocolate",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "As pessoas que subiram foram acrescentadas ao ônibus. Some esse número, não subtraia.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "As pessoas que desceram saíram do ônibus. Subtraia esse número, não some.",
  "Št": "Qui",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "O quadrado tem 4 lados iguais: ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "Um quadrado tem lado de ${@0}\\,\\text{cm}$. Qual é o seu perímetro (em cm)?",
  "štvrtok": "quinta-feira",
  "„O koľko viac“ zistíš odčítaním.": "“Quanto a mais” você descobre subtraindo."
 }
});
