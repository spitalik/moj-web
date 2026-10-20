/* Português: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/r2/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "r2-cisla100": {
   "title": "Números até 100",
   "summary": "Dezenas e unidades, sequência numérica e comparação de números até 100.",
   "theory": [
    "<p>Todo número de dois algarismos tem <strong>dezenas</strong> e <strong>unidades</strong>. O número 47 tem 4 dezenas e 7 unidades:\n       $47 = 40 + 7$. Dez dezenas formam <strong>cem</strong>: $100$.</p>",
    {
     "fig": "r2-stovka",
     "caption": "Quadro dos 100. Em cada linha há uma dezena de números. Embaixo do 47 fica o 57, o número 10 a mais."
    },
    "<p><strong>Comparação:</strong> primeiro comparamos as dezenas. Se forem iguais, comparamos as unidades.\n       $63 &gt; 58$, porque 6 dezenas são mais que 5 dezenas. $42 &lt; 45$, porque as dezenas são iguais e 2 é menos que 5.</p>"
   ],
   "examples": [
    {
     "task": "Compare os números 71 e 17.",
     "steps": [
      "O número 71 tem 7 dezenas, o número 17 tem só 1 dezena.",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "Qual número tem 6 dezenas e 3 unidades?",
     "steps": [
      "6 dezenas são 60, mais 3 unidades.",
      "$60 + 3 = 63$.",
      "<strong>É o número 63.</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "Adição e subtração até 100",
   "summary": "Calcular com dezenas, passar pela dezena e saltos na reta numérica.",
   "theory": [
    "<p>Somamos <strong>dezenas exatas</strong> como se fossem unidades: $30 + 40$ são 3 dezenas e 4 dezenas, ou seja, 7 dezenas, $70$.\n       Da mesma forma, $90 - 60 = 30$.</p>",
    "<p>Com números maiores, dividimos o segundo número em <strong>dezenas e unidades</strong> e somamos aos poucos.\n       Em $38 + 25$, primeiro somamos 20 e depois 5.</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$: um salto de 20 nos leva ao 58, um salto de 5 ao 63. Então $38 + 25 = 63$."
    },
    "<p>Na subtração fazemos do mesmo jeito: $72 - 34$ = primeiro $72 - 30 = 42$, depois $42 - 4 = 38$.\n       Podemos conferir o resultado com uma adição: $38 + 34 = 72$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $47 + 36$.",
     "steps": [
      "Dividimos o número 36 em 30 e 6.",
      "$47 + 30 = 77$.",
      "$77 + 6 = 83$.",
      "<strong>Resultado: 83</strong>"
     ]
    },
    {
     "task": "Calcule $81 - 25$.",
     "steps": [
      "Dividimos o número 25 em 20 e 5.",
      "$81 - 20 = 61$.",
      "$61 - 5 = 56$.",
      "Verificação: $56 + 25 = 81$. <strong>Resultado: 56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "Multiplicação e divisão",
   "summary": "Multiplicação como adição repetida, divisão em partes iguais.",
   "theory": [
    "<p>A <strong>multiplicação</strong> é uma forma curta de somar números iguais. Em vez de $4 + 4 + 4$ escrevemos $3 \\cdot 4$\n       (três vezes quatro). Os números que multiplicamos são os <em>fatores</em>, o resultado é o <em>produto</em>.</p>",
    {
     "fig": "r2-pole",
     "caption": "3 fileiras de 4 bolinhas: $4 + 4 + 4 = 3 \\cdot 4 = 12$. Se lermos por colunas, temos 4 colunas de 3 bolinhas: $4 \\cdot 3 = 12$."
    },
    "<p>A ordem dos fatores não importa: $3 \\cdot 4 = 4 \\cdot 3$. Qualquer número vezes 1 não muda ($7 \\cdot 1 = 7$)\n       e qualquer número vezes 0 dá 0 ($5 \\cdot 0 = 0$).</p>",
    "<p>A <strong>divisão</strong> é repartir em partes iguais. Se repartirmos 12 balas igualmente entre 3 crianças, cada uma recebe\n       $12 : 3 = 4$. A divisão é o contrário da multiplicação: $12 : 3 = 4$, porque $3 \\cdot 4 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Escreva a soma $5 + 5 + 5 + 5$ como multiplicação e calcule.",
     "steps": [
      "Somamos o número 5 quatro vezes.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Resultado: 20</strong>"
     ]
    },
    {
     "task": "Com 15 flores fazemos buquês de 5 flores. Quantos buquês teremos?",
     "steps": [
      "Procuramos quantas vezes o 5 cabe no 15.",
      "$15 : 5 = 3$, porque $3 \\cdot 5 = 15$.",
      "<strong>Teremos 3 buquês.</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "Múltiplos e tabuada",
   "summary": "Tabuada até 10 · 10, múltiplos de um número e divisão dentro da tabuada.",
   "theory": [
    "<p>Obtemos os <strong>múltiplos de um número</strong> multiplicando-o por 1, 2, 3, … Os múltiplos de 3 são\n       3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Na reta numérica, saltamos sempre de 3 em 3.</p>",
    {
     "fig": "r2-nasobky",
     "caption": "Múltiplos de 3: cada salto tem comprimento 3. Depois de quatro saltos, estamos no número $4 \\cdot 3 = 12$."
    },
    "<p>Truques úteis: os múltiplos de 2 são os números pares, os múltiplos de 5 terminam em 0 ou 5, os múltiplos de 10 terminam em 0.\n       Se você não sabe $6 \\cdot 4$, use uma ajuda: $5 \\cdot 4 = 20$ e mais um 4, ou seja, $24$.</p>",
    "<p>De uma multiplicação tiramos logo duas divisões: de $6 \\cdot 4 = 24$ segue que $24 : 4 = 6$ e $24 : 6 = 4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $7 \\cdot 5$.",
     "steps": [
      "Múltiplos de 5: 5, 10, 15, 20, 25, 30, 35.",
      "O sétimo múltiplo é 35.",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "Calcule $32 : 4$.",
     "steps": [
      "Procuramos o número que, vezes 4, dá 32.",
      "$8 \\cdot 4 = 32$.",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "Problemas e registros",
   "summary": "Do problema à conta: adição, subtração, multiplicação e divisão.",
   "theory": [
    "<p>Em um problema, primeiro anotamos o que <strong>sabemos</strong> e o que <strong>procuramos</strong>. Depois escolhemos a operação\n       certa, calculamos e escrevemos a <strong>resposta</strong> com uma frase completa.</p>",
    "<ul><li><em>ganhou, chegaram mais, juntos, … a mais</em> → adição,</li>\n       <li><em>deu, sobrou, … a menos, quanto a mais</em> → subtração,</li>\n       <li><em>… de cada (a mesma coisa várias vezes)</em> → multiplicação,</li>\n       <li><em>repartiu igualmente, quantos grupos de …</em> → divisão.</li></ul>",
    "<p>O <strong>registro</strong> do problema pode ficar assim:<br>João tinha … 35 bolinhas de gude<br>perdeu … 12 bolinhas<br>\n       sobraram … ? bolinhas<br>$35 - 12 = 23$<br>Resposta: Sobraram 23 bolinhas para João.</p>"
   ],
   "examples": [
    {
     "task": "Laura tem 28 figurinhas. Lucas tem 15 figurinhas a mais. Quantas figurinhas Lucas tem?",
     "steps": [
      "“15 a mais” significa somar 15 ao 28.",
      "$28 + 15 = 43$.",
      "<strong>Resposta: Lucas tem 43 figurinhas.</strong>"
     ]
    },
    {
     "task": "Mamãe colocou 5 maçãs em cada um de 4 pratos. Quantas maçãs há nos pratos ao todo?",
     "steps": [
      "4 vezes 5 é uma multiplicação.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Resposta: Há 20 maçãs nos pratos.</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "Ponto, segmento de reta, reta e linha curva",
   "summary": "Distinguimos linhas, medimos e comparamos segmentos.",
   "theory": [
    "<p>Desenhamos o <strong>ponto</strong> como um pontinho e o indicamos com uma letra maiúscula, por exemplo o ponto $A$.\n       O <strong>segmento de reta</strong> é uma linha reta entre dois pontos, por exemplo o segmento $CD$. Os pontos $C$ e $D$ são suas extremidades.</p>",
    "<p>A <strong>reta</strong> é uma linha reta que não tem começo nem fim; podemos prolongá-la para os dois lados.\n       Indicamos a reta com uma letra minúscula, por exemplo a reta $p$. A <strong>linha curva</strong> não é reta, ela faz curvas.</p>",
    {
     "fig": "r2-ciary",
     "caption": "Ponto, segmento de reta, reta e linha curva. Desenhamos as linhas retas com a régua."
    },
    "<p>Medimos o comprimento de um segmento com a régua, em <strong>centímetros</strong>. Colocamos o zero da régua na extremidade $A$\n       e lemos o número junto ao ponto $B$.</p>",
    {
     "fig": "r2-pravitko",
     "caption": "O segmento $AB$ começa no zero e termina no número 7. Ele mede $7\\,\\text{cm}$."
    }
   ],
   "examples": [
    {
     "task": "Qual linha tem duas extremidades?",
     "steps": [
      "O ponto é só um pontinho; a reta e a linha curva não têm extremidades.",
      "<strong>O segmento de reta tem duas extremidades.</strong>"
     ]
    },
    {
     "task": "O segmento $AB$ mede $9\\,\\text{cm}$, o segmento $CD$ mede $4\\,\\text{cm}$. Quanto o segmento $AB$ é mais comprido?",
     "steps": [
      "Estamos comparando, por isso subtraímos.",
      "$9 - 4 = 5$.",
      "<strong>O segmento $AB$ é $5\\,\\text{cm}$ mais comprido.</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "Unidades de comprimento, tempo e dinheiro",
   "summary": "Centímetro e metro, horas e minutos, euros e centavos.",
   "theory": [
    "<p><strong>Comprimento:</strong> medimos coisas curtas em centímetros (cm) e coisas mais longas em metros (m).\n       $1\\,\\text{m} = 100\\,\\text{cm}$ e $1\\,\\text{dm} = 10\\,\\text{cm}$.</p>",
    "<p><strong>Tempo:</strong> o dia tem 24 horas, a hora (h) tem 60 minutos (min). Meia hora são 30 minutos, um quarto de hora são 15 minutos.\n       No relógio, o <em>ponteiro pequeno</em> mostra as horas e o <em>ponteiro grande</em> mostra os minutos.</p>",
    {
     "fig": "r2-hodiny",
     "caption": "À esquerda são 7:00, o ponteiro grande aponta para o 12. À direita são 2:30 (duas e meia), o ponteiro grande aponta para o 6 e o pequeno está entre o 2 e o 3."
    },
    "<p><strong>Dinheiro:</strong> pagamos em euros (€) e centavos (c). $1\\,\\text{€} = 100$ centavos.\n       As moedas são de 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 € e 2 €.</p>",
    {
     "fig": "r2-mince",
     "caption": "Moedas de euro, do menor ao maior valor."
    }
   ],
   "examples": [
    {
     "task": "Quantos minutos são 1 hora e 15 minutos?",
     "steps": [
      "1 hora são 60 minutos.",
      "$60 + 15 = 75$.",
      "<strong>São 75 minutos.</strong>"
     ]
    },
    {
     "task": "Na carteira você tem moedas de 50 c, 20 c e 20 c. Quantos centavos faltam para 1 euro?",
     "steps": [
      "$50 + 20 + 20 = 90$ centavos.",
      "1 euro são 100 centavos: $100 - 90 = 10$.",
      "<strong>Faltam 10 centavos.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$, portanto ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Faltam ${@2}\\,\\text{cm}$.",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$. O segmento $KL$ é ${@3}\\,\\text{cm}$ mais comprido.",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$, portanto ${@3} \\cdot {@4} = {@5}$.",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$ centavos.",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$, por isso ${@3} : {@4} = {@5}$.",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$, por isso {@3} é múltiplo de {@4}. Os outros números não estão na tabuada do {@5}.",
  "1 dm je 10 cm.": "1 dm são 10 cm.",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1 euro são 100 centavos: $100 - {@0} = {@1}$. Faltam {@2} {@3}.",
  "1 hodina": "1 hora",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1 hora são 60 minutos: $60 + {@0} = {@1}$ minutos.",
  "1 m je 100 cm.": "1 m são 100 cm.",
  "1 € = 100 centov.": "1 € = 100 centavos.",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "Qual é o comprimento do segmento $AB$? Escreva a resposta em centímetros.{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "O ponto $A$ está no {@0} e o ponto $B$, no {@1}. ${@2} - {@3} = {@4}$, o segmento mede ${@5}\\,\\text{cm}$.",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "Um ponto é só um pontinho. Na imagem há uma linha.",
  "Bod, úsečka, priamka a krivá čiara": "Ponto, segmento de reta, reta e linha curva",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "O comprimento total é a soma dos comprimentos de todos os segmentos.",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "A linha poligonal inteira é mais comprida do que cada uma de suas partes. Some os comprimentos dos segmentos, não subtraia.",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "O centímetro é muito pequeno, mais ou menos a largura de um dedo. Aqui é preciso uma unidade maior.",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "Você tem 100 centavos ou mais. Com 100 centavos você tem mais um euro inteiro: some-o aos euros.",
  "Ceny píšeme v eurách.": "Os preços são escritos em euros.",
  "Ceruzka je dlhá asi 15 …": "Um lápis mede uns 15 …",
  "Cez dva rôzne body prechádza práve jedna priamka.": "Por dois pontos diferentes passa exatamente uma reta.",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "O número que falta descobrimos subtraindo: ${@0} - {@1} = {@2}$. Verificação: ${@3} + {@4} = {@5}$.",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "Dividir não é subtrair. Procure o número que vezes {@0} dá {@1}.",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "Dividimos em {@0} {@1}: ${@2} : {@3} = {@4}$, porque ${@5} \\cdot {@6} = {@7}$.",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "Não some dez. Cada decímetro tem 10 cm, por isso multiplique o número de decímetros por dez.",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "Não some as dezenas e as unidades como números comuns. Escreva as dezenas na primeira posição e as unidades depois delas.",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "As dezenas são iguais, comparamos as unidades: {@0} e {@1}. Por isso ${@2} {@3} {@4}$.",
  "Deň (s nocou) má 24 hodín.": "Um dia (com a noite) tem 24 horas.",
  "Dlhšie veci meriame v metroch.": "Coisas mais compridas medimos em metros.",
  "Dlhší čas meriame v hodinách.": "Tempos mais longos medimos em horas.",
  "Dom je vysoký asi 10 …": "Uma casa tem uns 10 … de altura",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "Complete o número que falta: ${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "Complete o número que falta: ${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "Complete o múltiplo de {@0} que falta: {@1}",
  "Doplň správnu jednotku: {@0}": "Escolha a unidade correta: {@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "Complete o número que falta na sequência: {@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "Não some os comprimentos. A pergunta é quanto um segmento é mais comprido: subtraia.",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "Somamos os comprimentos: ${@0} + {@1} = {@2}$. A linha poligonal mede ${@3}\\,\\text{cm}$.",
  "Euromince": "Moedas de euro",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "Uma hora é muito tempo. Aqui é preciso uma unidade mais curta.",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "Uma hora tem 60 minutos. A metade de 60 é 30, a quarta parte é 15.",
  "Hodina má 60 minút. {@0} je {@1} minút.": "Uma hora tem 60 minutos. {@0} são {@1} minutos.",
  "Hodina nemá 100 minút, ale 60 minút.": "Uma hora não tem 100 minutos, mas 60 minutos.",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "Primeiro você precisa transformar a hora em minutos: 1 hora são 60 minutos.",
  "Hodiny ukazujú 7:00 a 2:30": "Relógios marcando 7:00 e 2:30",
  "Hľadaj suseda čísla v číselnom rade.": "Procure o vizinho do número na sequência numérica.",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "É um comprimento, um tempo ou um preço? E é curto ou longo?",
  "Je to len jedna bodka, teda bod.": "É só um pontinho, então é um ponto.",
  "Je čiara rovná? Má krajné body?": "A linha é reta? Tem extremidades?",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "As unidades juntas deram mais de 10, mas você se esqueceu de somar essa nova dezena.",
  "Každé ďalšie číslo je o {@0} väčšie.": "Cada número seguinte é {@0} maior.",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "Quando o mesmo número aparece várias vezes, você pode multiplicar.",
  "Kniha stojí asi 12 …": "Um livro custa uns 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "Quantos centímetros são ${@0}\\,\\text{dm}$?",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "Quantos centímetros há de {@0} até {@1}? Calcule ${@2} - {@3}$.",
  "Koľko centimetrov má 1 meter?": "Quantos centímetros tem 1 metro?",
  "Koľko centov je spolu?{@0}": "Quantos centavos há ao todo?{@0}",
  "Koľko centov je v ostatných minciach?": "Quantos centavos há nas outras moedas?",
  "Koľko centov má 1 euro?": "Quantos centavos tem 1 euro?",
  "Koľko eur je v minciach 1 € a 2 €?": "Quantos euros há nas moedas de 1 € e 2 €?",
  "Koľko hodín má jeden deň?": "Quantas horas tem um dia?",
  "Koľko je $100 - {@0}$?": "Quanto é $100 - {@0}$?",
  "Koľko je $60 + {@0}$?": "Quanto é $60 + {@0}$?",
  "Koľko je ${@0} \\cdot {@1}$?": "Quanto é ${@0} \\cdot {@1}$?",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "Que horas são?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"mostrador do relógio\">{@0}</svg>",
  "Koľko je skupín?": "Quantos grupos há?",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "Qual é o total de {@0}? <span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "Quantos euros e centavos são ao todo? Escreva dois números separados por ponto e vírgula (por ex., 2; 35).{@0}",
  "Koľko krajných bodov má priamka?": "Quantas extremidades tem uma reta?",
  "Koľko krajných bodov má úsečka?": "Quantas extremidades tem um segmento?",
  "Koľko kúskov je v jednej skupine?": "Quantas peças há em um grupo?",
  "Koľko minút je 1 hodina a {@0} minút?": "Quantos minutos são 1 hora e {@0} minutos?",
  "Koľko minút je {@0}?": "Quantos minutos há em {@0}?",
  "Koľko minút má 1 hodina?": "Quantos minutos tem 1 hora?",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "Quantas retas você pode traçar por dois pontos diferentes?",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "Quantas vezes você precisa somar {@0} para obter {@1}?",
  "Koľkokrát sa opakuje to isté číslo?": "Quantas vezes se repete o mesmo número?",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "Quantas vezes o número {@0} se repete na soma?",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "A linha curva é uma linha. Aqui há só um pontinho.",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "A linha curva faz uma curva. Esta linha é reta.",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "O ponteiro pequeno ainda está entre o {@0} e o {@1}. Até ele chegar ao {@2}, vale a hora menor.",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "O ponteiro pequeno marca as horas e o grande, os minutos. Quando o grande está no 6, é e meia.",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "O ponteiro pequeno {@0}, o ponteiro grande aponta para o {@1}, ou seja, {@2} minutos. São {@3} ({@4}).",
  "Krátke veci meriame v centimetroch.": "Coisas curtas medimos em centímetros.",
  "Krátky čas meriame v minútach.": "Tempos curtos medimos em minutos.",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "Quais dezenas inteiras há no número {@0}? (No 36 seriam 30.)",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "Qual destes números é múltiplo de {@0}?",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "Qual número é {@0} unidades {@1} que {@2}?",
  "Ktoré číslo krát {@0} dá {@1}?": "Qual número vezes {@0} dá {@1}?",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "Qual número tem {@0} {@1} e {@2} {@3}?",
  "Ktorú počtovú operáciu použiješ?": "Qual operação você vai usar?",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "Uma linha poligonal é formada por dois segmentos. O primeiro mede ${@0}\\,\\text{cm}$ e o segundo, ${@1}\\,\\text{cm}$. Qual é o comprimento da linha poligonal inteira (em cm)?",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "Um metro é mais ou menos o comprimento de um passo largo. Aqui é demais, é preciso uma unidade menor.",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "Conte as moedas de 1 € e 2 € à parte e some os centavos à parte. 100 centavos são 1 euro.",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "Um minuto é pouco tempo. Aqui é preciso uma unidade mais longa.",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "Você tem {@0} {@1}. Quantos centavos faltam para 1 euro?",
  "Najprv odčítaj desiatky, potom jednotky.": "Primeiro subtraia as dezenas, depois as unidades.",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "Primeiro subtraia as dezenas: quanto é ${@0} - {@1}$?",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "Primeiro subtraímos as dezenas: ${@0} - {@1} = {@2}$. Depois as unidades: ${@3} - {@4} = {@5}$.",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "Primeiro compare as dezenas. Se forem iguais, compare as unidades.",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "Primeiro transforme a hora em minutos e depois some.",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "Primeiro some as dezenas: quanto é ${@0} + {@1}$?",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "Primeiro somamos as dezenas: ${@0} + {@1} = {@2}$. Depois as unidades: ${@3} + {@4} = {@5}$.",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "Não subtraia. Repartimos as balas igualmente, isso é divisão.",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "Não subtraia. Você procura o número que vezes {@0} dá {@1}.",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "Não subtraia. Quando repartimos igualmente, dividimos.",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "Não subtraia. Queremos saber quantas vezes {@0} cabe em {@1}, isso é divisão.",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "Não some a quantidade de parcelas com o número {@0}. O número {@1} se repete {@2} vezes: isso é multiplicação.",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "Você usa a multiplicação quando tem várias vezes a mesma quantidade.",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "Os múltiplos de {@0} aumentam sempre em {@1}: {@2}. Falta ${@3} \\cdot {@4} = {@5}$.",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "Múltiplos de {@0}: {@1}. Portanto ${@2} \\cdot {@3} = {@4}$.",
  "Násobky čísla 3 na číselnom rade": "Múltiplos do 3 na reta numérica",
  "O koľko je {@0} viac ako {@1}?": "Quanto {@0} é maior que {@1}?",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "De {@0} tiramos ${@1} - {@2} = {@3}$. Verificação: ${@4} - {@5} = {@6}$.",
  "Odčítanie použiješ, keď niečo ubudne.": "Você usa a subtração quando algo é tirado.",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "A pergunta “quanto a mais” se resolve subtraindo o número menor do maior.",
  "Palec na ruke je dlhý asi 5 …": "O polegar mede uns 5 …",
  "Pol hodiny": "Meia hora",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Comparamos as dezenas: {@0} e {@1}. Por isso ${@2} {@3} {@4}$.",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "Comparamos, por isso subtraímos: {@0} {@1} tem {@2} {@3} a mais.",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "Você foi para o lado contrário. O número menor você obtém subtraindo.",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "Você foi para o lado contrário. O número maior você obtém somando.",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "Atenção, o segmento não começa no zero. Conte os centímetros entre A e B.",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "Olhe dois números vizinhos. Qual é a diferença entre eles?",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "Olhe com atenção para qual número o ponteiro pequeno aponta.",
  "Pozri sa, pri ktorom čísle je bod B.": "Veja em qual número está o ponto B.",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "Não some o número de grupos com a quantidade em um grupo. Grupos iguais se contam multiplicando.",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "Não some o número de pratos com a quantidade em um prato. Em cada prato há a mesma quantidade: multiplique.",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "Calcule com as dezenas como com as unidades: 3 dezenas + 4 dezenas = 7 dezenas.",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "Você calculou como se a hora tivesse 100 minutos. Uma hora tem só 60 minutos.",
  "Pravítko a úsečka AB": "Régua e segmento AB",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "Percorra os múltiplos de {@0} até encontrar {@1}.",
  "Prestávka trvá 10 …": "O recreio dura 10 …",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "Você só leu o número do ponto B. O segmento não começa no zero, por isso subtraia o número do ponto A.",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "Nas unidades você subtraiu ao contrário ({@0} − {@1}). Quando as unidades não bastam, passe pela dezena: tire primeiro as dezenas e depois as unidades.",
  "Pri ktorom čísle na pravítku je bod A?": "Em qual número da régua está o ponto A?",
  "Pri ktorom čísle na pravítku je bod B?": "Em qual número da régua está o ponto B?",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "A reta é uma linha reta. Aqui há só um pontinho.",
  "Priamka je rovná. Táto čiara sa zatáča.": "A reta é reta. Esta linha faz uma curva.",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "A reta não tem extremidades. Esta linha tem duas extremidades, onde começa e onde termina.",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "A reta não tem começo nem fim, não tem nenhuma extremidade.",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "Acrescentou → adição, tirou → subtração, várias vezes a mesma quantidade → multiplicação.",
  "Pribudlo, preto sčítame.": "Acrescentou, por isso somamos.",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "Acrescentamos, por isso somamos: {@0} {@1} tem {@2} {@3}.",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "Você só somou as dezenas. Não se esqueça de acrescentar também {@0} {@1}.",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "Some {@0} tantas vezes quanto indica {@1}, ou lembre-se da tabuada do {@2}.",
  "Rovnaké rozdeľovanie je delenie.": "Repartir igualmente é dividir.",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "Uma linha reta sem extremidades, que atravessa toda a imagem, é uma reta.",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "Uma linha reta com duas extremidades é um segmento.",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "Separe o segundo número em dezenas e unidades e some-as por partes.",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "Dividimos em {@0} {@1}: ${@2} : {@3} = {@4}$, porque ${@5} \\cdot {@6} = {@7}$. Cada um ganhou {@8} {@9}.",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "Decomponha o número em dezenas e unidades: ${@0} = \\square + \\square$.",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "Você ficou um múltiplo de {@0} abaixo. Conte de novo os saltos de {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "Você passou um múltiplo de {@0}. Conte de novo os saltos de {@1}.",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "Saltos na reta numérica: 38 mais 20 mais 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "Ao todo são {@0} € e {@1} c. Quantos euros e centavos são? (Lembre-se: 100 centavos são 1 euro.)",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "Some as 12 horas da manhã e as 12 horas da tarde e da noite.",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "Conte os grupos e quanto há em um grupo. Depois multiplique.",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "Você contou quantas moedas há. É preciso somar os números escritos nas moedas.",
  "Stovková tabuľka čísel od 1 do 100": "Quadro dos 100 com os números de 1 a 100",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "Uma fita mede ${@0}\\,\\text{cm}$. Quantos centímetros faltam para $1\\,\\text{m}$?",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "Há {@0} {@1} de {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "Some os valores das moedas, começando pela maior.",
  "Sčítanie použiješ, keď niečo pribudne.": "Você usa a adição quando algo é acrescentado.",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "Agora subtraia as unidades: quanto é ${@0} - {@1}$?",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "Agora some as unidades: quanto é ${@0} + {@1}$?",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "Esse é o comprimento da fita. A pergunta é quanto falta para 1 metro: subtraia de 100.",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "Isso é só meio dia. O mostrador mostra 12 horas, mas o ponteiro dá duas voltas por dia.",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "Esse é o número de dezenas. As unidades são o último algarismo, à direita.",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "Esse é o número de unidades. As dezenas são o primeiro algarismo, à esquerda.",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "Esses centavos você já tem. A pergunta é quanto falta para 100 centavos: subtraia.",
  "Tri rady po štyri bodky": "Três fileiras de quatro pontos",
  "Trieda je dlhá asi 9 …": "Uma sala de aula tem uns 9 … de comprimento",
  "Trištvrte hodiny": "Três quartos de hora",
  "Trojuholník má 3 strany a každá strana je úsečka.": "O triângulo tem 3 lados e cada lado é um segmento.",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "Tiramos, por isso subtraímos: {@0} Para {@1} sobraram {@2} {@3}.",
  "Ubudlo, preto odčítame.": "Tirou, por isso subtraímos.",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "Em centavos: ${@0} = {@1}$ centavos. 100 centavos são 1 euro, por isso são {@2} € e {@3} c.",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "Em {@0} medimos {@1}, mas aqui precisamos de {@2}.",
  "V noci spíme asi 10 …": "À noite dormimos umas 10 …",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "Você trocou as dezenas e as unidades. As dezenas ficam na primeira posição e as unidades, na segunda.",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "Você trocou os ponteiros. O ponteiro pequeno marca as horas e o grande, os minutos.",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "Diga os múltiplos de {@0}: {@1}, {@2}, {@3}, …",
  "Vypočítaj ${@0} : {@1}$.": "Calcule ${@0} : {@1}$.",
  "Vypočítaj ${@0} \\cdot {@1}$.": "Calcule ${@0} \\cdot {@1}$.",
  "Vypočítaj ${@0} {@1} {@2}$.": "Calcule ${@0} {@1} {@2}$.",
  "Vyučovanie trvá asi 5 …": "As aulas duram umas 5 …",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "De quantos segmentos é formado o perímetro de um triângulo?",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "De quantos segmentos é formado o perímetro de um quadrado?",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "Com {@0} balões fazemos buquês de {@1} {@2}. Quantos buquês faremos?",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "Escreva a soma como multiplicação e calcule: ${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "Queremos saber quantas vezes {@0} cabe em {@1}: ${@2} : {@3} = {@4}$, porque ${@5} \\cdot {@6} = {@7}$.",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "Só muda o número de dezenas, as unidades continuam iguais. No Quadro dos 100, mude uma linha.",
  "Zmrzlina stojí asi 2 …": "Um sorvete custa uns 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "O sinal = só fica entre dois números iguais. Estes números são diferentes.",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "O sinal está virado ao contrário. As dezenas são iguais, por isso as unidades decidem.",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "O sinal está virado ao contrário. As dezenas decidem: é maior o número que tem mais dezenas.",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "O sinal + significa acrescentar. Aqui é preciso somar, não subtrair.",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "O sinal − significa tirar. Aqui é preciso subtrair, não somar.",
  "balón": "balão",
  "balónov": "balões",
  "balóny": "balões",
  "bod": "ponto",
  "bod A": "ponto A",
  "cent": "centavo",
  "centov": "centavos",
  "centy": "centavos",
  "cenu": "o preço",
  "ciferník hodín": "mostrador do relógio",
  "citrónov": "limões",
  "desiatku": "dezena",
  "deti": "crianças",
  "detí": "crianças",
  "dieťa": "criança",
  "dĺžku": "o comprimento",
  "eurá; centy": "euros; centavos",
  "hodina": "hora",
  "hodiny": "horas",
  "hodín": "horas",
  "hrušiek": "peras",
  "jahôd": "morangos",
  "je medzi {@0} a {@1}": "está entre o {@0} e o {@1}",
  "jednotku": "unidade",
  "krivá čiara": "linha curva",
  "kúpil": "comprou",
  "kúpila": "comprou",
  "min": "min",
  "mince": "moedas",
  "mrkiev": "cenouras",
  "orechov": "nozes",
  "orechy": "nozes",
  "pol hodiny": "meia hora",
  "položil": "colocou",
  "položila": "colocou",
  "presne {@0} {@1}": "{@0} {@1} em ponto",
  "priamka": "reta",
  "priamka p": "reta p",
  "rovnaké časti": "partes iguais",
  "rovnakú časť": "parte igual",
  "rovnakých častí": "partes iguais",
  "rozdelil": "repartiu",
  "rozdelila": "repartiu",
  "skupina": "grupo",
  "skupiny": "grupos",
  "skupín": "grupos",
  "skáčeme vždy o 3": "saltamos sempre de 3 em 3",
  "stratil": "perdeu",
  "stratila": "perdeu",
  "tanier": "prato",
  "taniere": "pratos",
  "tanierov": "pratos",
  "trištvrte hodiny": "três quartos de hora",
  "ukazuje na {@0}": "aponta para o {@0}",
  "vreciek": "saquinhos",
  "vrecko": "saquinho",
  "vrecká": "saquinhos",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} Verificação: ${@1} + {@2} = {@3}$.",
  "{@0} Správny zápis je {@1}.": "{@0} A expressão correta é {@1}.",
  "{@0} desiatka je {@1}.": "{@0} dezena é {@1}.",
  "{@0} desiatky sú {@1}.": "{@0} dezenas são {@1}.",
  "{@0} desiatok je {@1}.": "{@0} dezenas são {@1}.",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0} é só o quanto {@1} tem a menos. Subtraia isso do que {@2} tem.",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0} tem menos do que {@1}, por isso é preciso subtrair, não somar.",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0} tem {@1} {@2}. {@3} tem {@4} {@5} a menos. Quantas {@6} tem {@7}?",
  "{@0} {@1} a {@2} minút": "{@0} {@1} e {@2} minutos",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0} {@1} {@4} {@5} em cada um dos {@2} {@3}. Quantas {@6} há ao todo nos pratos?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0} {@1} {@2} {@3} e {@4} mais {@5}. Qual expressão mostra quantas {@6} tem agora?",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0} {@1} {@2} {@3} e {@5} {@4}. Qual expressão mostra quantas {@6} sobraram para {@7}?",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0} {@1} {@2} {@3} com {@4} {@5} cada. Qual expressão mostra quantas {@6} {@7} ao todo?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0} {@1} {@2} {@3} igualmente entre {@4} amigos. Quantas {@5} cada amigo ganhou?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0} {@1} {@2} {@3} igualmente entre {@4} {@5}. Quantas balas cada criança ganhou?",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.",
  "{@0}-krát po {@1} je násobenie.": "{@0} vezes {@1} é multiplicação.",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@0} vezes {@1} é multiplicação: ${@2} \\cdot {@3} = {@4}$. Nos pratos há {@5} {@6}.",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "O segmento $KL$ mede ${@0}\\,\\text{cm}$ e o segmento $MN$ mede ${@1}\\,\\text{cm}$. Quantos centímetros o segmento $KL$ é mais comprido?",
  "Úsečka je rovná. Táto čiara sa zatáča.": "O segmento é reto. Esta linha faz uma curva.",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "O segmento é uma linha entre dois pontos. Aqui há só um pontinho.",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "O segmento tem duas extremidades, por exemplo $A$ e $B$.",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "O segmento tem duas extremidades nas pontas. Esta linha não tem, continua adiante.",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "O segmento tem começo e fim; a reta não tem nenhum dos dois.",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "O segmento começa no zero e termina no número {@0}. Ele mede ${@1}\\,\\text{cm}$.",
  "úsečka": "segmento",
  "úsečka CD": "segmento CD",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "A linha faz curvas, não é reta, então é uma linha curva.",
  "Čistenie zubov trvá asi 3 …": "Escovar os dentes leva uns 3 …",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "O que há na imagem?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"linha ou ponto\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "Não some os números. Você procura quanto tiramos para que de {@0} sobrem {@1}: isso se descobre subtraindo.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "Não some os números. Você procura quanto é preciso acrescentar a {@0} para dar {@1}: isso se descobre subtraindo.",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "Não some os números. A pergunta “quanto a mais” compara: subtraia o número menor do maior.",
  "Čísla si sčítal. Znak · znamená násobiť.": "Você somou os números. O sinal · significa multiplicar.",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "Os números são iguais: ${@0} = {@1}$.",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "Os números são exatamente iguais, nenhum é maior.",
  "Čísla {@0} vždy o {@1}: {@2}.": "Os números {@0} sempre em {@1}: {@2}.",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "O número {@0} não está na tabuada do {@1}: fica entre os múltiplos {@2} e {@3}.",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "Somamos o número {@0} {@1} vezes: ${@2} \\cdot {@3} = {@4}$.",
  "čas": "o tempo",
  "čiara alebo bod": "linha ou ponto",
  "Štvorec má 4 strany, každá strana je úsečka.": "O quadrado tem 4 lados e cada lado é um segmento.",
  "Štvrť hodiny": "Um quarto de hora",
  "štvrť hodiny": "um quarto de hora",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "“{@0} a menos” significa tirar {@1}: {@2} {@3} tem {@4} {@5}.",
  "„O … menej“ znamená odčítať.": "“… a menos” significa subtrair.",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕"
 }
});
