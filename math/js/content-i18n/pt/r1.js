/* Português: preklad js/rocniky/r1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/r1/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "r1-cisla20": {
   "title": "Números até 20",
   "summary": "Ler, escrever e comparar números de 0 a 20.",
   "theory": [
    "<p>Sabemos ler os números de 0 a 20 e escrevê-los com algarismos: 0 (zero), 1 (um), 2 (dois) … 10 (dez) … 20 (vinte).\n       Os números de 11 a 19 têm <strong>1 dezena</strong> e algumas <strong>unidades</strong>: por exemplo, $14 = 10 + 4$.</p>",
    {
     "fig": "r1-rad20",
     "caption": "Sequência numérica de 0 a 20. Quanto mais à direita, maior é o número."
    },
    "<p><strong>Comparação:</strong> o sinal $&lt;$ significa “é menor que”, o sinal $&gt;$ “é maior que” e $=$ “é igual a”.\n       O lado aberto do sinal sempre aponta para o número maior: $7 &lt; 12$, $15 &gt; 9$.</p>"
   ],
   "examples": [
    {
     "task": "Compare os números 13 e 8.",
     "steps": [
      "Na sequência numérica, o 13 fica mais à direita que o 8.",
      "Por isso, $13 &gt; 8$."
     ]
    },
    {
     "task": "Quantas dezenas e quantas unidades tem o número 17?",
     "steps": [
      "$17 = 10 + 7$.",
      "<strong>1 dezena e 7 unidades.</strong>"
     ]
    }
   ]
  },
  "r1-scitanie": {
   "title": "Adição e subtração até 20",
   "summary": "Juntar e tirar, passando pela dezena.",
   "theory": [
    "<p><strong>Adição</strong> significa juntar: $5 + 3 = 8$. Os números que somamos são as <em>parcelas</em>, o resultado é a <em>soma</em>.\n       A ordem das parcelas não importa: $3 + 5 = 5 + 3$.</p>",
    "<p><strong>Subtração</strong> significa tirar: $8 - 3 = 5$. A subtração é o contrário da adição: se $5 + 3 = 8$, então $8 - 3 = 5$ e também $8 - 5 = 3$.</p>",
    "<p><strong>Passando pela dezena:</strong> em $8 + 5$, primeiro completamos a dezena ($8 + 2 = 10$) e depois somamos o resto ($10 + 3 = 13$).</p>",
    {
     "fig": "r1-desiatka",
     "caption": "Dois quadros de dez: 8 bolinhas azuis e 5 verdes. Duas verdes completam a primeira dezena, as outras 3 ficam na segunda: $8 + 5 = 13$."
    }
   ],
   "examples": [
    {
     "task": "Calcule $8 + 5$.",
     "steps": [
      "Completamos a dezena: $8 + 2 = 10$.",
      "Do 5 sobraram 3: $10 + 3 = 13$.",
      "<strong>Resultado: 13</strong>"
     ]
    },
    {
     "task": "Calcule $14 - 6$.",
     "steps": [
      "Primeiro tiramos 4 para chegar à dezena: $14 - 4 = 10$.",
      "Do 6 ainda falta tirar 2: $10 - 2 = 8$.",
      "<strong>Resultado: 8</strong>"
     ]
    }
   ]
  },
  "r1-rozklad": {
   "title": "Sequência numérica e decomposição de números",
   "summary": "Qual número vem antes e depois, decompor um número em duas partes.",
   "theory": [
    "<p>A <strong>sequência numérica</strong> é a ordem dos números um após o outro: 0, 1, 2, 3, … O número logo antes de um número dado é 1 a menos,\n       o número logo depois dele é 1 a mais.</p>",
    "<p><strong>Decompor um número</strong> significa escrevê-lo como a soma de dois números menores. O número 6 pode ser decomposto, por exemplo,\n       em $1 + 5$, $2 + 4$ ou $3 + 3$.</p>",
    {
     "fig": "r1-domcek",
     "caption": "Casinha da decomposição do número 6: em cada andar há dois números que juntos dão 6."
    }
   ],
   "examples": [
    {
     "task": "Qual número vem logo depois do 15 na sequência numérica?",
     "steps": [
      "Depois de um número vem sempre o número 1 a mais.",
      "$15 + 1 = 16$.",
      "<strong>Resultado: 16</strong>"
     ]
    },
    {
     "task": "Complete a decomposição: $9 = 4 + \\square$.",
     "steps": [
      "Procuramos quanto falta do 4 até o 9.",
      "$9 - 4 = 5$.",
      "<strong>$9 = 4 + 5$</strong>"
     ]
    }
   ]
  },
  "r1-slovne": {
   "title": "Problemas simples",
   "summary": "Como transformar uma história em uma conta e escrever a resposta.",
   "theory": [
    "<p>Para resolver um problema, seguimos alguns passos:</p>\n       <ol><li>lemos o problema,</li><li>descobrimos o que sabemos e o que procuramos,</li><li>escrevemos a conta,</li>\n       <li>calculamos,</li><li>escrevemos a resposta com uma frase completa.</li></ol>",
    "<p>Palavras como <em>acrescentou, ganhou, juntos, … a mais</em> geralmente indicam <strong>adição</strong>.\n       Palavras como <em>comeu, deu, sobrou, quanto a mais</em> geralmente indicam <strong>subtração</strong>.</p>"
   ],
   "examples": [
    {
     "task": "Ana tinha 7 balas e ganhou mais 5. Quantas balas ela tem agora?",
     "steps": [
      "Sabemos: tinha 7 balas, ganhou 5. Procuramos quantas tem ao todo.",
      "Conta: $7 + 5 = 12$.",
      "<strong>Resposta: Ana tem 12 balas.</strong>"
     ]
    },
    {
     "task": "João tem 9 bolinhas de gude, Pedro tem 4. Quantas bolinhas João tem a mais?",
     "steps": [
      "Estamos comparando, por isso subtraímos o número menor do maior.",
      "Conta: $9 - 4 = 5$.",
      "<strong>Resposta: João tem 5 bolinhas a mais.</strong>"
     ]
    }
   ]
  },
  "r1-utvary": {
   "title": "Figuras planas e sólidos geométricos",
   "summary": "Círculo, triângulo, quadrado, retângulo e os sólidos ao nosso redor.",
   "theory": [
    "<p>As <strong>figuras planas</strong> são achatadas, podemos desenhá-las no papel: <strong>círculo</strong>, <strong>triângulo</strong>\n       (3 lados, 3 vértices), <strong>quadrado</strong> (4 lados do mesmo tamanho) e <strong>retângulo</strong> (4 lados, os opostos têm o mesmo tamanho).</p>",
    {
     "fig": "r1-rovinne",
     "caption": "Figuras planas."
    },
    "<p>Os <strong>sólidos geométricos</strong> podemos pegar com a mão: <strong>cubo</strong> (dado), <strong>paralelepípedo</strong> (caixa),\n       <strong>esfera</strong> (bola), <strong>cilindro</strong> (lata) e <strong>cone</strong> (casquinha de sorvete).</p>",
    {
     "fig": "r1-telesa",
     "caption": "Sólidos geométricos. A linha tracejada mostra uma aresta que fica atrás."
    }
   ],
   "examples": [
    {
     "task": "Quantos vértices tem o triângulo e quantos tem o quadrado?",
     "steps": [
      "O vértice é a ponta (o canto) da figura.",
      "O triângulo tem 3 vértices, o quadrado tem 4 vértices."
     ]
    },
    {
     "task": "Com qual sólido a bola se parece?",
     "steps": [
      "A bola é redonda por todos os lados.",
      "<strong>A bola tem a forma de uma esfera.</strong>"
     ]
    }
   ]
  },
  "r1-meranie": {
   "title": "Localização no espaço e medidas",
   "summary": "À esquerda, à direita, entre; comparar e medir comprimentos.",
   "theory": [
    "<p><strong>Localização:</strong> usamos as palavras à esquerda – à direita, em cima – embaixo, na frente – atrás, ao lado e entre.\n       Na fila 🐶 🐱 🐰, o gato está <em>entre</em> o cachorro e o coelho, e o cachorro está <em>à esquerda</em> do gato.</p>",
    "<p><strong>Medir comprimentos:</strong> podemos medir o comprimento com passos, palmos ou cubinhos. Com mais precisão medimos com a régua,\n       em centímetros (cm). Ao comparar, dizemos mais comprido – mais curto, mais alto – mais baixo.</p>",
    {
     "fig": "r1-meranie",
     "caption": "O lápis mede 7 cubinhos, a borracha 3 cubinhos. O lápis é 4 cubinhos mais comprido."
    }
   ],
   "examples": [
    {
     "task": "Na fila 🍎 🍐 🍌 🍇, qual fruta está logo à direita da pera?",
     "steps": [
      "A pera 🍐 é a segunda a partir da esquerda.",
      "Logo à direita dela está a banana 🍌."
     ]
    },
    {
     "task": "Uma fita mede 9 cm, a outra 5 cm. Quanto a primeira fita é mais comprida?",
     "steps": [
      "Estamos comparando, por isso subtraímos: $9 - 5 = 4$.",
      "<strong>A primeira fita é 4 cm mais comprida.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.": "${@0} - {@1} = {@2}$, portanto ${@3} = {@4} + {@5}$.",
  "${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.": "${@0} - {@1} = {@2}$, a fita vermelha é {@3} cm mais comprida.",
  "${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.": "${@0} = {@1} + {@2}$, portanto {@3} {@4} e {@5} {@6}.",
  "Adam": "Pedro",
  "Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.": "Se você passar de 10, primeiro complete a dezena e depois acrescente o resto.",
  "Ako sa volá {@0}?": "Como se chama {@0}?",
  "Budeš sčítať (+), alebo odčítať (−)?": "Você vai somar (+) ou subtrair (−)?",
  "Chýbajúce číslo zistíš odčítaním.": "O número que falta você descobre subtraindo.",
  "Desiatkové rámčeky: 8 plus 5": "Quadros de dez: 8 mais 5",
  "Domček rozkladu čísla 6": "Casinha da decomposição do número 6",
  "Doplnil si do desiatky, ale zabudol si pridať zvyšok: ešte $+ {@0}$.": "Você completou a dezena, mas se esqueceu de acrescentar o resto: ainda $+ {@0}$.",
  "Doplň chýbajúce číslo: ${@0} + \\square = {@1}$": "Complete o número que falta: ${@0} + \\square = {@1}$",
  "Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.": "Complete a dezena: ${@0} + {@1} = 10$, depois $10 + {@2} = {@3}$.",
  "Doplň správny znak: ${@0} \\;\\square\\; {@1}$": "Coloque o sinal correto: ${@0} \\;\\square\\; {@1}$",
  "Doplň číslo, ktoré chýba v číselnom rade: {@0}": "Complete o número que falta na sequência numérica: {@0}",
  "Dĺžky stúh nesčítavaj. Pýtame sa, o koľko je červená stuha dlhšia – odčítaj.": "Não some os comprimentos das fitas. A pergunta é quanto a fita vermelha é mais comprida: subtraia.",
  "Ema": "Ana",
  "Hneď pred": "Logo antes do",
  "Hneď vpravo od {@0} stojí {@1}.": "Logo à direita {@0} está {@1}.",
  "Hneď vľavo od {@0} stojí {@1}.": "Logo à esquerda {@0} está {@1}.",
  "Hneď za": "Logo depois do",
  "Hľadaj číslo, ktoré je o 1 väčšie ako prvé.": "Procure o número que é 1 maior que o primeiro.",
  "Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.": "Procuramos quanto falta de {@0} até {@1}: ${@2} - {@3} = {@4}$.",
  "Jano": "João",
  "Keď niečo dáš preč, zostane toho menej. Tu treba odčítať, nie sčítať.": "Quando você tira algo, fica menos. Aqui é preciso subtrair, não somar.",
  "Keď niečo pribudne, je toho viac. Tu treba sčítať, nie odčítať.": "Quando algo é acrescentado, fica mais. Aqui é preciso somar, não subtrair.",
  "Keď niečo pribudne, sčítavame.": "Quando algo é acrescentado, somamos.",
  "Keď niečo ubudne, odčítavame.": "Quando algo é tirado, subtraímos.",
  "Kocka má 6 stien a každá stena je štvorec.": "O cubo tem 6 faces e cada face é um quadrado.",
  "Kocka má 8 vrcholov: 4 hore a 4 dole.": "O cubo tem 8 vértices: 4 em cima e 4 embaixo.",
  "Kocka má všetky steny rovnaké štvorce. Toto teleso je širšie, ako je vysoké.": "O cubo tem todas as faces quadradas e iguais. Este sólido é mais largo do que alto.",
  "Kocky z oboch pásov nesčítavaj. Zisti, o koľko kociek má modrý pás viac – odčítaj.": "Não some os cubos das duas faixas. Descubra quantos cubos a mais tem a faixa azul: subtraia.",
  "Koľko chýba od {@0} do {@1}?": "Quanto falta de {@0} até {@1}?",
  "Koľko chýba čísla {@0} do 10?": "Quanto falta ao {@0} para chegar a 10?",
  "Koľko je $10 + {@0}$?": "Quanto é $10 + {@0}$?",
  "Koľko je $10 - {@0}$?": "Quanto é $10 - {@0}$?",
  "Koľko jednotiek má {@0} navyše oproti 10?": "Quantas unidades o {@0} tem a mais do que 10?",
  "Koľko kociek má modrý pás?": "Quantos cubos tem a faixa azul?",
  "Koľko kociek má zelený pás?": "Quantos cubos tem a faixa verde?",
  "Koľko musíš ubrať z čísla {@0}, aby si sa dostal na 10?": "Quanto você precisa tirar do {@0} para chegar a 10?",
  "Koľko stien má kocka?": "Quantas faces tem o cubo?",
  "Koľko strán má trojuholník?": "Quantos lados tem o triângulo?",
  "Koľko strán má štvorec?": "Quantos lados tem o quadrado?",
  "Koľko vrcholov má kocka?": "Quantos vértices tem o cubo?",
  "Koľko vrcholov má kruh?": "Quantos vértices tem o círculo?",
  "Koľko vrcholov má obdĺžnik?": "Quantos vértices tem o retângulo?",
  "Koľko vrcholov má trojuholník?": "Quantos vértices tem o triângulo?",
  "Koľko {@0} má číslo {@1}?": "Quantas {@0} tem o número {@1}?",
  "Kruh nemá žiadne vrcholy, jeho okraj je oblý.": "O círculo não tem vértices, a borda dele é redonda.",
  "Ktoré číslo je o 1 {@0} ako {@1}?": "Qual número é 1 {@0} que {@1}?",
  "Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?": "Qual número está na sequência numérica entre {@0} e {@1}?",
  "Kužeľ má hore špičku. Toto teleso má hore aj dole kruh.": "O cone tem uma ponta em cima. Este sólido tem um círculo em cima e outro embaixo.",
  "Kváder vyzerá ako krabica, jeho steny nie sú všetky rovnaké. Tu sú všetky steny rovnaké štvorce.": "O paralelepípedo parece uma caixa, as faces dele não são todas iguais. Aqui todas as faces são quadrados iguais.",
  "Lea": "Lia",
  "Medzi {@0} a {@1} stojí {@2}.": "Entre {@0} e {@1} está {@2}.",
  "Meranie kockami": "Medir com cubos",
  "Miro": "Mateus",
  "Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.": "A faixa azul tem {@0} {@1}; a verde, {@2}. ${@3} - {@4} = {@5}$.",
  "Máš odčítať, nie sčítať: znamienko $-$ znamená ubrať.": "Era para subtrair, não somar: o sinal $-$ significa tirar.",
  "Máš sčítať, nie odčítať: znamienko $+$ znamená pridať.": "Era para somar, não subtrair: o sinal $+$ significa acrescentar.",
  "Na obrázku je {@0}.": "A figura da imagem é: {@0}.",
  "Na obrázku vidno len 3 steny. Ďalšie 3 steny sú schované vzadu, vľavo a dole.": "Na imagem só se veem 3 faces. As outras 3 faces estão escondidas atrás, à esquerda e embaixo.",
  "Na číselnom rade sa posuň o jedno miesto doprava.": "Na sequência numérica, ande uma posição para a direita.",
  "Na číselnom rade sa posuň o jedno miesto doľava.": "Na sequência numérica, ande uma posição para a esquerda.",
  "Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.": "Primeiro tire até chegar à dezena: ${@0} - {@1} = 10$, depois $10 - {@2} = {@3}$.",
  "Nina": "Nina",
  "O koľko je modrý pás dlhší? Vypočítaj ${@0} - {@1}$.": "Quanto a faixa azul é mais comprida? Calcule ${@0} - {@1}$.",
  "O koľko kociek je modrý pás dlhší ako zelený? {@0}": "Quantos cubos a faixa azul tem a mais do que a verde? {@0}",
  "Obdĺžnik má 4 vrcholy.": "O retângulo tem 4 vértices.",
  "Obdĺžnik má dve strany dlhšie a dve kratšie. Sú tu všetky strany rovnako dlhé?": "O retângulo tem dois lados mais compridos e dois mais curtos. Aqui todos os lados têm o mesmo comprimento?",
  "Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?": "A subtração é o contrário da adição: quanto você precisa acrescentar a {@0} para obter {@1}?",
  "Otázka „o koľko viac“ sa rieši odčítaním.": "A pergunta “quanto a mais” se resolve com subtração.",
  "Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.": "Comparamos: ${@0} - {@1} = {@2}$. {@3} tem {@4} {@5} a mais.",
  "Posunul si sa na opačnú stranu. Menšie čísla sú na číselnom rade vľavo.": "Você foi para o lado contrário. Os números menores ficam à esquerda na sequência numérica.",
  "Posunul si sa na opačnú stranu. Väčšie čísla sú na číselnom rade vpravo.": "Você foi para o lado contrário. Os números maiores ficam à direita na sequência numérica.",
  "Pozri sa znova: obe čísla sú rovnaké, ani jedno nie je väčšie.": "Olhe de novo: os dois números são iguais, nenhum é maior.",
  "Počítaj od {@0} po 10.": "Conte de {@0} até 10.",
  "Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.": "Pense em uma bola, uma lata, uma caixa, um dado ou uma casquinha de sorvete.",
  "Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.": "Acrescentamos, por isso somamos: ${@0} + {@1} = {@2}$. {@3} tem {@4} {@5}.",
  "Priestorové útvary": "Sólidos geométricos",
  "Rovinné útvary": "Figuras planas",
  "Rozdiel dĺžok zistíš odčítaním.": "A diferença de comprimentos você descobre subtraindo.",
  "Rozlož číslo {@0}: ${@1} = {@2} + \\square$": "Decomponha o número {@0}: ${@1} = {@2} + \\square$",
  "Sofia": "Sofia",
  "Spočítaj kocky v oboch pásoch a odčítaj.": "Conte os cubos das duas faixas e subtraia.",
  "Spočítaj strany a vrcholy útvaru.": "Conte os lados e os vértices da figura.",
  "Spočítal si len vrcholy na jednej stene. Kocka má vrcholy hore aj dole.": "Você só contou os vértices de uma face. O cubo tem vértices em cima e embaixo.",
  "To je dĺžka celého modrého pásu. Odčítaj od nej, koľko kociek má zelený pás.": "Esse é o comprimento da faixa azul inteira. Subtraia dele quantos cubos tem a faixa verde.",
  "To je počet desiatok. Jednotky sú číslica vpravo.": "Esse é o número de dezenas. As unidades são o algarismo da direita.",
  "To je počet jednotiek. Desiatky sú číslica vľavo.": "Esse é o número de unidades. As dezenas são o algarismo da esquerda.",
  "Tomáš": "Tomás",
  "Toto je zvieratko, od ktorého hľadáme. Hľadáme jeho suseda.": "Este é o bichinho a partir do qual procuramos. Procuramos o vizinho dele.",
  "Toto zvieratko stojí vpravo. Vľavo je tá strana, kde rad začína.": "Este bichinho está à direita. A esquerda é o lado onde a fila começa.",
  "Toto zvieratko stojí vľavo. Vpravo je tá strana, kde rad končí.": "Este bichinho está à esquerda. A direita é o lado onde a fila termina.",
  "Trojuholník má 3 strany.": "O triângulo tem 3 lados.",
  "Trojuholník má 3 vrcholy a 3 strany.": "O triângulo tem 3 vértices e 3 lados.",
  "Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.": "Tiramos, por isso subtraímos: ${@0} - {@1} = {@2}$. Para {@3} sobraram {@4} {@5}.",
  "Valec má hore aj dole kruh. Toto teleso má hore špičku.": "O cilindro tem um círculo em cima e outro embaixo. Este sólido tem uma ponta em cima.",
  "Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.": "O vértice é um canto da figura; o lado é a linha entre dois vértices.",
  "Vypočítaj ${@0} + {@1}$.": "Calcule ${@0} + {@1}$.",
  "Vypočítaj ${@0} - {@1}$.": "Calcule ${@0} - {@1}$.",
  "Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.": "O número maior fica mais à direita na sequência numérica. O lado aberto do sinal aponta para o número maior.",
  "Vľavo je začiatok radu, vpravo jeho koniec.": "À esquerda está o começo da fila e à direita, o fim.",
  "Z čísla {@0} sme použili {@1}. Koľko z neho ešte zostáva pridať?": "Do número {@0} já usamos {@1}. Quanto ainda falta acrescentar?",
  "Z čísla {@0} sme ubrali {@1}. Koľko ešte treba ubrať?": "Do número {@0} já tiramos {@1}. Quanto ainda falta tirar?",
  "Za číslom {@0} nasleduje {@1} a za ním {@2}.": "Depois do {@0} vem o {@1} e depois dele o {@2}.",
  "Zisti, či čísla rastú alebo klesajú, a o koľko.": "Descubra se os números aumentam ou diminuem, e de quanto em quanto.",
  "Znak $=$ patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "O sinal $=$ só fica entre dois números iguais. Estes números são diferentes.",
  "Znak je otočený naopak. Otvorená strana znaku má smerovať k väčšiemu číslu.": "O sinal está virado ao contrário. O lado aberto do sinal deve apontar para o número maior.",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?": "Os bichinhos estão em fila: {@0} Quem está logo à direita {@1}?",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?": "Os bichinhos estão em fila: {@0} Quem está logo à esquerda {@1}?",
  "Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?": "Os bichinhos estão em fila: {@0} Quem está entre {@1} e {@2}?",
  "ceruzka": "lápis",
  "cukrík": "bala",
  "cukríkov": "balas",
  "cukríky": "balas",
  "dal": "deu",
  "dala": "deu",
  "desiatka": "dezena",
  "desiatky": "dezenas",
  "desiatok": "dezenas",
  "dostal": "ganhou",
  "dostala": "ganhou",
  "dva pásy z kociek": "duas faixas de cubos",
  "guličiek": "bolinhas",
  "guličku": "bolinha",
  "guličky": "bolinhas",
  "guma": "borracha",
  "guľa": "esfera",
  "jablko": "maçã",
  "jablká": "maçãs",
  "jabĺk": "maçãs",
  "jednotiek": "unidades",
  "jednotka": "unidade",
  "jednotky": "unidades",
  "jej": "ela",
  "klesajú": "diminuem",
  "kociek": "cubos",
  "kocka": "cubo",
  "kocky": "cubos",
  "kužeľ": "cone",
  "kváder": "paralelepípedo",
  "líška": "a raposa",
  "líškou": "a raposa",
  "líšky": "da raposa",
  "mal": "tinha",
  "mala": "tinha",
  "mačka": "o gato",
  "mačkou": "o gato",
  "mačky": "do gato",
  "medveď": "o urso",
  "medveďa": "do urso",
  "medveďom": "o urso",
  "menšie": "menor",
  "modrý": "azul",
  "mu": "ele",
  "myš": "o rato",
  "myši": "do rato",
  "myšou": "o rato",
  "nálepiek": "figurinhas",
  "nálepku": "figurinha",
  "nálepky": "figurinhas",
  "obrázok útvaru": "imagem da figura",
  "pasteliek": "canetinhas",
  "pastelku": "canetinha",
  "pastelky": "canetinhas",
  "pes": "o cachorro",
  "psa": "do cachorro",
  "psom": "o cachorro",
  "rastú": "aumentam",
  "tento útvar": "esta figura",
  "toto teleso": "este sólido",
  "valec": "cilindro",
  "väčšie": "maior",
  "zajac": "o coelho",
  "zajaca": "do coelho",
  "zajacom": "o coelho",
  "zelený": "verde",
  "{@0} je len to, o koľko má {@1} viac. Pripočítaj to k tomu, čo má {@2}.": "{@0} é só o quanto {@1} tem a mais. Some isso ao que {@2} tem.",
  "{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?": "{@0} tem {@1} {@2} e {@3} tem {@4} {@5}. Quantas {@6} a mais tem {@7}?",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?": "{@0} tem {@1} {@2}. {@3} tem {@4} {@5} a mais. Quantas {@6} tem {@7}?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?": "{@0} {@1} {@2} {@3} e {@4} mais {@5}. Quantas {@6} tem agora?",
  "{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?": "{@0} {@1} {@2} {@3}. Aos amigos {@4} {@5} {@6}. Quantas {@7} sobraram para {@8}?",
  "{@0} číslom {@1} je v číselnom rade číslo {@2}.": "{@0} {@1} na sequência numérica vem o número {@2}.",
  "Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?": "A fita vermelha mede {@0} cm e a azul, {@1} cm. Quantos centímetros a fita vermelha é mais comprida?",
  "Číselný rad od 0 do 20": "Sequência numérica de 0 a 20",
  "Čísla nesčítavaj. Hľadáš, koľko chýba od {@0} do {@1}.": "Não some os números. Você procura quanto falta de {@0} até {@1}.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby si dostal {@1}.": "Não some os números. Você procura quanto é preciso acrescentar a {@0} para obter {@1}.",
  "Čísla nesčítavaj. Pýtame sa, o koľko má jedno dieťa viac – odčítaj menšie číslo od väčšieho.": "Não some os números. A pergunta é quanto uma criança tem a mais: subtraia o número menor do maior.",
  "Čísla sú rovnaké, preto ${@0} = {@1}$.": "Os números são iguais, por isso ${@0} = {@1}$.",
  "Čísla {@0} vždy o 1: {@1}.": "Os números {@0} sempre de 1 em 1: {@1}.",
  "Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.": "Divida o número em dezenas e unidades, por exemplo $14 = 10 + 4$.",
  "Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "O número {@0} fica mais à direita na sequência numérica, é maior. Por isso ${@1} {@2} {@3}$.",
  "Štvorec má 4 rovnako dlhé strany.": "O quadrado tem 4 lados de mesmo comprimento.",
  "Štvorec má všetky štyri strany rovnako dlhé. Tu sú dve strany dlhšie.": "O quadrado tem os quatro lados de mesmo comprimento. Aqui dois lados são mais compridos.",
  "štvorec": "quadrado",
  "žaba": "a rã",
  "žabou": "a rã",
  "žaby": "da rã",
  "„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.": "“{@0} a mais” significa acrescentar {@1}: ${@2} + {@3} = {@4}$. {@5} tem {@6} {@7}.",
  "„O {@0} viac“ znamená, že {@1} má viac ako {@2}. Treba pripočítať, nie odčítať.": "“{@0} a mais” significa que {@1} tem mais do que {@2}. É preciso somar, não subtrair.",
  "„O … viac“ znamená k číslu pripočítať.": "“… a mais” significa somar ao número."
 }
});
