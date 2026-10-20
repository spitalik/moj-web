/* Português: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/pt/r8/ – needitovať ručne. */
CONTENT_I18N.add('pt', {
 "decimal": ",",
 "lessons": {
  "r8-cisla": {
   "title": "Números inteiros e racionais",
   "summary": "Números negativos, oposto, módulo e cálculos com frações com sinal.",
   "theory": [
    "<p>Usamos os <strong>números naturais</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ para contar objetos. Se acrescentarmos o zero\n       e os números opostos ($-1, -2, -3, \\dots$), obtemos os <strong>números inteiros</strong> $\\mathbb{Z}$. Os <strong>números racionais</strong> $\\mathbb{Q}$\n       são todos os números que podem ser escritos como uma fração $\\frac{p}{q}$ ($p$ inteiro, $q$ natural), por exemplo $\\frac{3}{4}$,\n       $-2{,}5 = -\\frac{5}{2}$ ou $7 = \\frac{7}{1}$.</p>",
    {
     "fig": "r8-obory",
     "caption": "Todo número natural é inteiro e todo número inteiro é racional: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>O <strong>oposto</strong> do número $a$ é $-a$: o oposto de $5$ é $-5$, o de $-3$ é $3$. O <strong>módulo</strong> (valor absoluto) $|a|$\n       é a distância do número até o zero na reta numérica, por isso nunca é negativo: $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>Cálculos com sinais:</strong> subtrair um número significa somar o seu oposto: $4 - (-6) = 4 + 6 = 10$.\n       Na multiplicação e na divisão, sinais iguais dão resultado positivo e sinais diferentes dão resultado negativo: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $-8 - (-5) + 2\\cdot(-3)$.",
     "steps": [
      "Primeiro a multiplicação: $2\\cdot(-3) = -6$ (sinais diferentes, o resultado é negativo).",
      "Trocamos a subtração de um número negativo por uma adição: $-8 - (-5) = -8 + 5 = -3$.",
      "Por fim, $-3 + (-6) = -9$.",
      "<strong>Resultado: $-9$</strong>"
     ]
    },
    {
     "task": "Compare os números $-\\frac{3}{4}$ e $-0{,}7$.",
     "steps": [
      "Convertemos a fração em número decimal: $-\\frac{3}{4} = -0{,}75$.",
      "O número $-0{,}75$ está mais longe do zero no lado negativo, então fica mais à esquerda na reta numérica.",
      "<strong>$-\\frac{3}{4} &lt; -0{,}7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "Potências e raízes",
   "summary": "Quadrado e cubo, raiz quadrada, estimativa de raízes e escrita de números grandes.",
   "theory": [
    "<p>A <strong>potência</strong> $a^n$ é a forma abreviada de um produto de $n$ fatores iguais: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       O número $a$ é a <em>base</em> e $n$ é o <em>expoente</em>. Por exemplo, $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "O quadrado de um número é a área de um quadrado: um quadrado de lado 3 tem $3^2 = 9$ quadradinhos. O cubo é o volume de um cubo: um cubo de aresta 2 é formado por $2^3 = 8$ cubinhos."
    },
    "<p><strong>Cuidado com o sinal:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, mas $-3^2 = -(3\\cdot 3) = -9$.\n       Uma potência de expoente par de um número negativo é positiva; de expoente ímpar, negativa: $(-2)^3 = -8$.</p>",
    "<p>A <strong>raiz quadrada</strong> de um número não negativo $a$ é o número não negativo $b$ para o qual $b^2 = a$. Escrevemos $\\sqrt{a} = b$,\n       por exemplo $\\sqrt{49} = 7$ e $\\sqrt{0{,}09} = 0{,}3$. Escrevemos números grandes na forma $a\\cdot 10^n$, em que $1 \\le a &lt; 10$:\n       $45\\,000 = 4{,}5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule $(-2)^3 + 3^2 - \\sqrt{64}$.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$ e $\\sqrt{64} = 8$, porque $8^2 = 64$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>Resultado: $-7$</strong>"
     ]
    },
    {
     "task": "Entre quais dois números naturais consecutivos está $\\sqrt{50}$?",
     "steps": [
      "Procuramos quadrados perto de 50: $7^2 = 49$ e $8^2 = 64$.",
      "Como $49 &lt; 50 &lt; 64$, vale $7 &lt; \\sqrt{50} &lt; 8$.",
      "<strong>$\\sqrt{50}$ está entre os números 7 e 8</strong> (bem perto de 7)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "Expressões algébricas",
   "summary": "O que é uma variável, substituição em uma expressão e tradução de uma descrição em palavras para uma expressão.",
   "theory": [
    "<p>Uma <strong>variável</strong> é uma letra (por exemplo, $x$, $a$, $n$) que representa um número qualquer. Uma <strong>expressão algébrica</strong>\n       combina números e variáveis por meio de operações, por exemplo $3x + 5$ ou $2(a - 1)$. Entre um número e uma variável não escrevemos\n       o sinal de multiplicação: $3x$ significa $3\\cdot x$.</p>",
    "<p>Calculamos o <strong>valor numérico da expressão</strong> substituindo a variável por um número. Um número negativo é substituído entre parênteses:\n       para $x = -2$, temos $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "Um retângulo de lados $a$ e $a + 3$ tem perímetro $o = 2a + 2(a + 3)$ e área $S = a(a + 3)$. Para $a = 4$, $o = 22$ e $S = 28$."
    },
    "<p><strong>Em palavras:</strong> “o dobro do número $x$” é $2x$, “o número 5 unidades maior que $x$” é $x + 5$, “a terça parte do número $x$” é $\\frac{x}{3}$,\n       “o quadrado da soma dos números $a$ e $b$” é $(a + b)^2$.</p>"
   ],
   "examples": [
    {
     "task": "Calcule o valor da expressão $2x^2 - 5x + 1$ para $x = -3$.",
     "steps": [
      "Substituímos $-3$ entre parênteses: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$, então $2\\cdot 9 = 18$; além disso, $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>O valor da expressão é 34.</strong>"
     ]
    },
    {
     "task": "Escreva como expressão: “o número 4 unidades menor que o triplo do número $n$”.",
     "steps": [
      "O triplo do número $n$ é $3n$.",
      "“4 unidades menor” significa subtrair 4.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "Simplificação de expressões algébricas",
   "summary": "Termos semelhantes, propriedade distributiva e produtos notáveis do quadrado de um binômio.",
   "theory": [
    "<p><strong>Termos semelhantes</strong> têm a mesma variável com o mesmo expoente, por exemplo $3x$ e $-5x$ ou $2x^2$ e $x^2$.\n       Para somá-los, somamos os coeficientes: $3x - 5x + 2 = -2x + 2$. Termos não semelhantes (por exemplo, $x^2$ e $x$) não podem ser somados.</p>",
    "<p><strong>Propriedade distributiva:</strong> multiplicamos o número que está antes dos parênteses por cada termo de dentro: $3(2x - 4) = 6x - 12$.\n       Um sinal de menos antes dos parênteses troca os sinais de todos os termos: $-(x - 5) = -x + 5$. Multiplicamos dois binômios “cada termo por cada termo”:\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "Um quadrado de lado $a + b$ é formado pelo quadrado $a^2$, pelo quadrado $b^2$ e por dois retângulos $ab$. Por isso, $(a + b)^2 = a^2 + 2ab + b^2$."
    },
    "<p><strong>Produtos notáveis</strong> que vale a pena saber de cor: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$\n       e $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "Simplifique a expressão $4(x - 3) - 2(x - 5)$.",
     "steps": [
      "Aplicamos a distributiva: $4x - 12 - 2x + 10$ (o menos antes dos segundos parênteses transforma $-5$ em $+10$).",
      "Juntamos os termos semelhantes: $4x - 2x = 2x$ e $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "Desenvolva $(x - 4)^2$.",
     "steps": [
      "Usamos a fórmula $(a - b)^2 = a^2 - 2ab + b^2$, com $a = x$ e $b = 4$.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "Equações do 1º grau",
   "summary": "Transformações equivalentes, equações com parênteses e verificação.",
   "theory": [
    "<p>Uma <strong>equação</strong> é uma igualdade entre duas expressões na qual aparece uma incógnita, por exemplo $2x + 3 = 9$. <strong>Resolver a equação</strong>\n       significa encontrar o número (raiz) que, substituído, torna a igualdade verdadeira. A raiz desta equação é $x = 3$, porque $2\\cdot 3 + 3 = 9$.</p>",
    {
     "fig": "r8-vahy",
     "caption": "A equação é como uma balança em equilíbrio: à esquerda há dois saquinhos de massa desconhecida $x$ e três pesos; à direita, nove pesos. Se tirarmos 3 pesos dos dois pratos, a balança continua em equilíbrio: $2x = 6$, ou seja, $x = 3$."
    },
    "<p>As <strong>transformações equivalentes</strong> não mudam a solução da equação: podemos somar aos dois membros (ou subtrair deles) o mesmo número\n       ou a mesma expressão, e podemos multiplicar ou dividir os dois membros pelo mesmo número diferente de zero. O objetivo é deixar a incógnita sozinha em um dos membros.</p>",
    "<p><strong>Procedimento:</strong> 1. eliminamos os parênteses, 2. passamos os termos com a incógnita para um membro e os números para o outro,\n       3. dividimos os dois membros pelo coeficiente da incógnita, 4. fazemos a <strong>verificação</strong> substituindo na equação original.</p>"
   ],
   "examples": [
    {
     "task": "Resolva a equação $5x - 7 = 2x + 8$.",
     "steps": [
      "Subtraímos $2x$ dos dois membros: $3x - 7 = 8$.",
      "Somamos 7 aos dois membros: $3x = 15$.",
      "Dividimos os dois membros por 3: $x = 5$.",
      "Verificação: membro esquerdo $5\\cdot 5 - 7 = 18$, membro direito $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "Resolva a equação $3(x + 2) = x - 4$.",
     "steps": [
      "Aplicamos a distributiva: $3x + 6 = x - 4$.",
      "Subtraímos $x$ e depois 6: $2x = -10$.",
      "Dividimos por 2: $x = -5$.",
      "Verificação: $3\\cdot(-5 + 2) = -9$ e $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "Problemas resolvidos com equações",
   "summary": "Como montar uma equação a partir do texto: números, idades, perímetro e divisão de dinheiro.",
   "theory": [
    "<p>Resolvemos um problema com uma equação em cinco passos:</p>\n       <ol><li>Indicamos a grandeza desconhecida por uma letra (por exemplo, $x$) e anotamos o que ela significa.</li>\n       <li>Expressamos as outras grandezas em função de $x$.</li><li>Montamos a equação de acordo com o que é igual no problema.</li>\n       <li>Resolvemos a equação.</li><li>Fazemos a verificação <em>de acordo com o texto do problema</em> e escrevemos a resposta.</li></ol>",
    "<p>Registros úteis: “5 a mais” é $x + 5$, “o triplo” é $3x$, “três números consecutivos” são $x$, $x + 1$, $x + 2$,\n       “o perímetro do retângulo” é $2a + 2b$.</p>",
    "<p>A verificação é feita de acordo com o enunciado, e não substituindo na equação que nós mesmos montamos. Se tivéssemos montado a equação errada, a verificação na equação não revelaria o erro.</p>"
   ],
   "examples": [
    {
     "task": "A soma de três números naturais consecutivos é 48. Quais são esses números?",
     "steps": [
      "Indicamos o menor número por $x$; os seguintes são $x + 1$ e $x + 2$.",
      "Equação: $x + (x + 1) + (x + 2) = 48$, ou seja, $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "Verificação: $15 + 16 + 17 = 48$ ✓",
      "<strong>Resposta: São os números 15, 16 e 17.</strong>"
     ]
    },
    {
     "task": "A mãe é 26 anos mais velha que a filha. Juntas, elas têm 50 anos. Quantos anos tem a filha?",
     "steps": [
      "A idade da filha é $x$; a idade da mãe, $x + 26$.",
      "Equação: $x + (x + 26) = 50$, ou seja, $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "Verificação: a mãe tem $12 + 26 = 38$ anos e $12 + 38 = 50$ ✓",
      "<strong>Resposta: A filha tem 12 anos.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "Círculo e circunferência",
   "summary": "Raio e diâmetro, comprimento da circunferência, área do círculo, setor circular e coroa circular.",
   "theory": [
    "<p>A <strong>circunferência</strong> $k$ de centro $S$ e raio $r$ é o conjunto de todos os pontos do plano que estão à distância $r$ do ponto $S$ –\n       é só a “linha”. O <strong>círculo</strong> é formado pela circunferência junto com toda a região interna. O <strong>diâmetro</strong> é um segmento que passa\n       pelo centro e liga dois pontos da circunferência; seu comprimento é $d = 2r$.</p>",
    {
     "fig": "r8-kruh",
     "caption": "Centro $S$, raio $r$, diâmetro $d = 2r$ e setor circular de ângulo $\\alpha$."
    },
    "<p>O <strong>comprimento da circunferência</strong> (perímetro do círculo) é $o = 2\\pi r = \\pi d$, e a <strong>área do círculo</strong> é $S = \\pi r^2$.\n       O número $\\pi$ é a razão entre o perímetro e o diâmetro de qualquer círculo, $\\pi \\approx 3{,}14$.</p>",
    "<p>O <strong>setor circular</strong> de ângulo $\\alpha$ é a parte do círculo entre dois raios; sua área é $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$.\n       A <strong>coroa circular</strong> é a região entre duas circunferências concêntricas de raios $R &gt; r$: $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "A roda de uma bicicleta tem diâmetro de $70\\,\\text{cm}$. Que distância ela percorre em uma volta? Use $\\pi \\approx 3{,}14$.",
     "steps": [
      "Em uma volta, a roda percorre o comprimento da sua circunferência: $o = \\pi d$.",
      "$o \\approx 3{,}14\\cdot 70 = 219{,}8\\,\\text{cm}$.",
      "<strong>A roda percorre cerca de $219{,}8\\,\\text{cm}$, ou seja, aproximadamente $2{,}2\\,\\text{m}$.</strong>"
     ]
    },
    {
     "task": "Calcule a área de um quarto de círculo de raio $10\\,\\text{cm}$ ($\\pi \\approx 3{,}14$).",
     "steps": [
      "Um quarto de círculo é um setor de ângulo $90^\\circ$, ou seja, $\\frac{90}{360} = \\frac{1}{4}$ do círculo.",
      "Área do círculo inteiro: $S = \\pi r^2 \\approx 3{,}14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>Um quarto: $314 : 4 = 78{,}5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "Prismas – área total e volume",
   "summary": "Bases e superfície lateral do prisma, planificação do paralelepípedo, área total e volume do paralelepípedo, do cubo e do prisma triangular.",
   "theory": [
    "<p>O <strong>prisma</strong> é um sólido que tem duas <strong>bases</strong> congruentes e paralelas (polígonos) e uma <strong>superfície lateral</strong>\n       formada por retângulos – as faces laterais. Conforme a forma da base, falamos em prisma triangular, quadrangular, hexagonal…\n       O paralelepípedo e o cubo são prismas quadrangulares.</p>",
    {
     "fig": "r8-siet",
     "caption": "Planificação de um paralelepípedo de dimensões $a$, $b$, $c$: duas bases $a\\times b$ (azuis) e as quatro faces laterais (verdes)."
    },
    "<p><strong>Volume</strong> do prisma: $V = S_p\\cdot v$ (área da base vezes a altura). Para o paralelepípedo, $V = a\\cdot b\\cdot c$; para o cubo, $V = a^3$.\n       Medimos o volume em unidades cúbicas; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ e $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p>A <strong>área total</strong> é a soma das áreas de todas as faces: $S = 2\\cdot S_p + S_{pl}$, em que a área lateral é $S_{pl} = o_p\\cdot v$\n       (perímetro da base vezes a altura). Para o paralelepípedo, $S = 2(ab + bc + ac)$; para o cubo, $S = 6a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Um paralelepípedo tem dimensões $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$. Calcule sua área total e seu volume.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Um prisma triangular tem como base um triângulo retângulo de catetos $3\\,\\text{cm}$ e $4\\,\\text{cm}$ (a hipotenusa mede $5\\,\\text{cm}$) e altura de $10\\,\\text{cm}$. Calcule sua área total e seu volume.",
     "steps": [
      "Área da base: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "Volume: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "Área lateral: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "Área total: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "Gráficos, tabelas e estatística",
   "summary": "Gráfico de barras e de setores, média aritmética, moda e mediana.",
   "theory": [
    "<p>Reunimos os dados em <strong>tabelas</strong> e os representamos em <strong>gráficos</strong>. O gráfico de barras é bom para comparar quantidades;\n       o gráfico de setores mostra que parte do todo cada grupo representa.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "Gráfico de barras: notas de uma prova (de 1 a 5, sendo 1 a melhor) em uma turma de 23 alunos. A maioria dos alunos tirou nota 2."
    },
    {
     "fig": "r8-kolac",
     "caption": "Gráfico de setores: como os alunos vão para a escola. Metade vai a pé, 30 % de ônibus e 20 % de bicicleta."
    },
    "<p>A <strong>média aritmética</strong> é a soma de todos os valores dividida pela quantidade de valores. A <strong>moda</strong> é o valor que aparece\n       com mais frequência. A <strong>mediana</strong> é o valor do meio quando colocamos os dados em ordem de tamanho; com uma quantidade par de dados, é a\n       média dos dois valores do meio.</p>"
   ],
   "examples": [
    {
     "task": "As temperaturas em cinco dias foram $12$, $15$, $9$, $15$ e $14\\,{}^\\circ\\text{C}$. Determine a média, a moda e a mediana.",
     "steps": [
      "Média: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "Moda: o valor mais frequente é $15\\,{}^\\circ\\text{C}$.",
      "Mediana: ordenamos $9, 12, 14, 15, 15$; o valor do meio é $14\\,{}^\\circ\\text{C}$."
     ]
    },
    {
     "task": "Com o gráfico das notas, calcule a nota média da turma.",
     "steps": [
      "Soma de todas as notas: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "Número de alunos: $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>Média: $56 : 23 \\approx 2{,}43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, portanto $p = {@6}$ e $q = {@7}$.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Área lateral: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$; área total $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Multiplicamos os dois membros por {@4}: $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$ e $\\sqrt{{@2}} = {@3}$, portanto ${@4} - {@5} = {@6}$.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$, porque ${@2}^2 = {@3}$.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ significa $a\\cdot a\\cdot a$, não $3\\cdot a$.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ e os sinais são {@3}: ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ e os sinais são {@3}: ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$ e ${@2}^2 = {@3}$. Como ${@4} &lt; {@5} &lt; {@6}$, vale ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$ e $|{@2}| = {@3}$, portanto ${@4} - {@5} = {@6}$.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$ e $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "O valor absoluto é a distância até o zero, nunca é negativo.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "Se você multiplica a equação por {@0}, multiplique cada termo dos dois membros, inclusive o número ${@1}$. É mais simples isolar primeiro a fração.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "Um aquário em forma de paralelepípedo tem medidas internas de {@0} cm, {@1} cm e {@2} cm. Quantos litros de água cabem nele?",
  "Aká dlhá je dlhšia strana (v cm)?": "Qual é o comprimento do lado mais comprido (em cm)?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "Qual é o comprimento do outro lado, $a + {@0}$, para $a = {@1}$ (em cm)?",
  "Aká dlhá je kratšia strana (v cm)?": "Qual é o comprimento do lado mais curto (em cm)?",
  "Aké je najväčšie z čísel?": "Qual é o maior dos números?",
  "Aké je {@0}. číslo v poradí?": "Qual é o {@0}º número da lista?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "Qual é o número $a$? Antes da vírgula decimal ele deve ter um único algarismo diferente de zero.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "Que fração do ângulo de uma volta é um ângulo de ${@0}^\\circ$? Escreva como fração.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "Qual é o menor denominador comum das frações ${@0}$ e ${@1}$?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "Qual é o volume do prisma $V = S_p\\cdot v$ (em cm³)?",
  "Aký je objem kvádra (v cm³)?": "Qual é o volume do paralelepípedo (em cm³)?",
  "Aký je obsah celého kruhu (v cm²)?": "Qual é a área do círculo inteiro (em cm²)?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "Qual é a área lateral, o perímetro da base vezes a altura (em cm²)?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "Qual é a área da base $S_p$ (em cm²)?",
  "Aký je polomer kruhu (v cm)?": "Qual é o raio do círculo (em cm)?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "Qual é a área total do prisma, as duas bases e a área lateral (em cm²)?",
  "Aký je súčet všetkých čísel?": "Qual é a soma de todos os números?",
  "Aký obsah má jedna stena kocky (v cm²)?": "Qual é a área de uma face do cubo (em cm²)?",
  "Babka": "A avó",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "Sem parênteses, só o número {@0} é elevado ao quadrado; o menos fica antes do resultado: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "Faltam os termos com $x$: cada termo do primeiro parêntese deve ser multiplicado por cada termo do segundo, não só o primeiro pelo primeiro e o último pelo último.",
  "Dcéra": "A filha",
  "Dedko": "O avô",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "Você dividiu só por $\\pi$, assim você obtém o diâmetro. O raio é a metade dele.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "Deslocamos a vírgula decimal {@0} {@1} para a esquerda, para que antes dela fique um único algarismo diferente de zero: ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "O gráfico mostra quantos livros os leitores pegaram emprestado na biblioteca em cada dia.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "O lado mais comprido mede ${@0} + {@1} = {@2}\\,\\text{cm}$.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "Na fórmula $S = \\pi r^2$ você colocou o diâmetro. Primeiro calcule o raio, a metade do diâmetro.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "Substitua $x = {@0}$ no termo ${@1}$. Quanto é ${@2}$?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "Substitua as duas variáveis ao mesmo tempo, os números negativos entre parênteses.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "O quadrado $x^2$ significa $x\\cdot x$, não $2\\cdot x$.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "O quadrado como um quadrado, o cubo como um cubo",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "O quadrado é o produto de dois fatores iguais. Menos vezes menos é mais.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "O quadrado não é o dobro: elevar ao quadrado significa multiplicar o número por ele mesmo.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "O quadrado não é o dobro: elevar ao quadrado significa multiplicar por ele mesmo.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "O outro lado é toda a expressão $a + {@0}$, coloque-a entre parênteses: multiplica-se $a\\cdot(a + {@1})$.",
  "Dvojnásobok": "O dobro",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "O expoente não é a quantidade de algarismos do número, mas o número de casas que você desloca a vírgula decimal.",
  "Filip": "Felipe",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "O prisma tem duas bases (a de cima e a de baixo), as duas precisam entrar na área total.",
  "Hľadaj najvyšší stĺpec.": "Procure a coluna mais alta.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "Procure o número não negativo cujo quadrado é o número sob a raiz.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "Procure o número que, multiplicado três vezes por ele mesmo, dá o volume.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "Procuramos o número cujo cubo é {@0}: ${@1}^3 = {@2}$, portanto $a = {@3}\\,\\text{cm}$.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "Uma face tem área ${@0} : 6 = {@1}\\,\\text{cm}^2$, portanto $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "Um lado do retângulo é {@0} cm mais comprido que o outro. O perímetro do retângulo é {@1} cm. Qual é o comprimento do lado {@2} (em cm)?",
  "K obom stranám pripočítame {@0}": "Somamos {@0} aos dois membros",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "Cada face aparece duas vezes no paralelepípedo. Qual é a área total do paralelepípedo (em cm²)?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "Multiplique cada termo do primeiro parêntese por cada termo do segundo. Depois junte os termos com $x$.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "Quando você passa um número para o outro membro da equação, troque o sinal dele.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "Quando você passa um número para o outro membro da equação, troque o sinal dele. Faça a mesma operação nos dois membros.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "O cubo tem 6 faces, cada uma é um quadrado de lado $a$.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "O cubo tem 6 faces, não 4. Não se esqueça da face de cima e da de baixo.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "O cubo tem 6 faces quadradas congruentes: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "Um cubo tem volume de ${@0}\\,\\text{cm}^3$. Qual é o comprimento da sua aresta (em cm)?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "Um cubo tem área total de ${@0}\\,\\text{cm}^2$. Qual é o comprimento da sua aresta (em cm)?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "O coeficiente ${@0}$ de $x$ se elimina dividindo, não subtraindo: ${@1}x$ significa ${@2}\\cdot x$.",
  "Koľko je $R^2 - r^2$?": "Quanto é $R^2 - r^2$?",
  "Koľko je $\\sqrt{{@0}}$?": "Quanto é $\\sqrt{{@0}}$?",
  "Koľko je $r^2$?": "Quanto é $r^2$?",
  "Koľko je ${@0}$?": "Quanto é ${@0}$?",
  "Koľko je ${@0}^2$?": "Quanto é ${@0}^2$?",
  "Koľko je ${@0}{@1}$?": "Quanto é ${@0}{@1}$?",
  "Koľko je $|{@0}|$?": "Quanto é $|{@0}|$?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "Quanto dá o parêntese: ${@0}{@1}$?",
  "Koľko je čísel?": "Quantos números são?",
  "Koľko kníh si požičali za celý týždeň?": "Quantos livros foram emprestados na semana inteira?",
  "Koľko rokov má {@0}?": "Quantos anos tem {@0}?",
  "Koľko žiakov hlasovalo spolu?": "Quantos alunos votaram ao todo?",
  "Koľko žiakov odpovedalo spolu?": "Quantos alunos responderam ao todo?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "O lado mais curto é $x$, o mais comprido $x + {@0}$. Equação: $2x + 2(x + {@1}) = {@2}$, portanto $4x + {@3} = {@4}$, $4x = {@5}$ e $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "O lado mais curto é $x$, o mais comprido $x + {@0}$. Da equação $2x + 2(x + {@1}) = {@2}$, calcule quanto é $4x$.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "O lado mais curto mede ${@0}\\,\\text{cm}$.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "O círculo tem {@0}. Calcule a sua área em cm². {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "O círculo tem {@0}. Calcule o comprimento da sua circunferência em cm. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "Círculo com centro, raio, diâmetro e setor",
  "Kruhový diagram dopravy do školy": "Gráfico de setores do transporte até a escola",
  "Ktoré ovocie dostalo najviac hlasov?": "Qual fruta recebeu mais votos?",
  "Ktorý výraz sa rovná ${@0}$?": "Qual expressão é igual a ${@0}$?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "Qual expressão corresponde à descrição: <em>{@0}</em>?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "Qual é o esporte preferido dos alunos?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "O paralelepípedo tem cada face duas vezes (em cima e embaixo, na frente e atrás, à esquerda e à direita). Ainda dobre a soma $ab + bc + ac$.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "Um paralelepípedo tem dimensões $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Calcule a sua área total (em cm²) e o seu volume (em cm³). Escreva-os separados por ponto e vírgula.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "O paralelepípedo tem três pares de faces congruentes: $ab$, $bc$ e $ac$. O volume é o produto das três dimensões.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "Procure a mediana só na lista ordenada. Primeiro ordene os números do menor para o maior.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "A mediana é a média desses dois números. Quanto é?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "Entre quais dois números naturais consecutivos está $\\sqrt{{@0}}$? Escreva o menor e o maior separados por ponto e vírgula.",
  "Množiny prirodzených, celých a racionálnych čísel": "Conjuntos dos números naturais, inteiros e racionais",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "A moda é o valor que se repete com mais frequência.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "A moda não é o maior número, mas o valor que aparece com mais frequência.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "Só o $x$ é dividido por dois; o número {@0} é subtraído depois, da metade.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "Na reta numérica estão os números ${@0}$ e ${@1}$. Qual é a distância entre eles?",
  "Najmenšie číslo je {@0}.": "O menor número é {@0}.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "Chame de $x$ o menor número e some todos os números. A equação tem a forma ${@0}x + \\square = {@1}$. Que número vai no quadradinho?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "Chame de $x$ o menor número; os seguintes são $x + 1$, $x + 2$, … Some-os e iguale à soma.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "Primeiro isole a fração, depois multiplique os dois membros pelo denominador.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "Primeiro elimine os parênteses, depois resolva como uma equação comum.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "Primeiro calcule a potência, depois multiplique e por fim some. Coloque o número negativo entre parênteses.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "Primeiro determine os valores absolutos dos dois números (as distâncias até o zero, que não são negativas) e só depois subtraia.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "Primeiro calcule cada raiz separadamente.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "Primeiro calcule o que está entre parênteses, depois multiplique.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "A coluna mais alta tem o valor {@0} e pertence à opção “{@1}”. Esse valor é a moda dos dados.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "O maior número é $x + {@0} = {@1}$.",
  "Natália": "Natália",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "Encontre dois quadrados de números naturais entre os quais fica o número sob a raiz.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "É preciso multiplicar o número $x$, não o número {@0}.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "A soma inteira é multiplicada, por isso ela precisa ficar entre parênteses. Sem parênteses, só o $x$ seria multiplicado.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "A soma inteira é multiplicada, ou seja, também o $x$, não só o número {@0}.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "Só o $x$ é multiplicado; o número {@0} só é subtraído depois de calcular {@1}. Os parênteses significariam {@2} de toda a diferença.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "Quantas casas para a esquerda é preciso deslocar a vírgula decimal? Esse é o expoente $n$.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "Um retângulo tem lados de $a$ e $a + {@0}$ centímetros. Calcule {@1} para $a = {@2}$.",
  "Obdĺžnik so stranami a a a plus 3": "Retângulo de lados a e a mais 3",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "Divida os dois membros por ${@0}$. Quanto é $x$?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "Multiplique os dois membros por {@0}. Quanto é $x$?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "Os dois números estão do mesmo lado do zero, por isso as distâncias até o zero se subtraem, não se somam.",
  "Objem kocky je $a^3$.": "O volume do cubo é $a^3$.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "O volume não se divide por três. Você procura o número que, multiplicado três vezes por ele mesmo, dá o volume.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "A área de uma face é $a^2$, não $a$. A face é um quadrado.",
  "Obsah kruhu je $S = \\pi r^2$.": "A área do círculo é $S = \\pi r^2$.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "A área da coroa circular não é $\\pi(R - r)^2$. Da área do círculo grande, subtraia a do pequeno: $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "A área do retângulo é o produto dos seus lados.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "A área do triângulo retângulo é a metade do produto dos catetos; não se esqueça de dividir por dois.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "As áreas dos círculos devem ser subtraídas, não somadas: o círculo pequeno no meio está faltando.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "O comprimento da circunferência é $2\\pi r$; você se esqueceu do dois (ou colocou o raio no lugar do diâmetro em $\\pi d$).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "O comprimento da circunferência é $o = 2\\pi r = \\pi d$.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "A circunferência do círculo mede ${@0}\\,\\text{cm}$. Qual é o seu raio em cm? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "Você não pode simplesmente dividir o perímetro por quatro, os lados do retângulo não têm o mesmo comprimento.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "O perímetro do retângulo é $2a + 2b$; no lugar do outro lado coloque $a + {@0}$.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "O perímetro do retângulo é $2a + 2b$. Chame de $x$ o lado mais curto.",
  "Od oboch strán odčítame {@0}": "Subtraímos {@0} dos dois membros",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "Da área do círculo grande, subtraia a área do círculo pequeno.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "Você subtrai de um número negativo, então na reta numérica vai ainda mais para a esquerda do zero.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "A raiz não é a metade do número. Procure o número que, multiplicado por ele mesmo, dá {@0}.",
  "Odčítaj hodnoty dvoch stĺpcov.": "Subtraia os valores das duas colunas.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "Subtraia os valores absolutos obtidos. Qual é o resultado?",
  "Odčítaj získané čísla. Aký je výsledok?": "Subtraia os números obtidos. Qual é o resultado?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "Subtraia os números e tome o resultado sem sinal. Se estiverem em lados opostos do zero, as distâncias até o zero se somam.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "Troque a subtração pela adição do oposto.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "Subtrair um número negativo é somar o oposto, um número positivo: $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "Subtrair um número é somar o oposto: ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "A descrição corresponde à expressão ${@0}$. Ao escrever, comece pelo fim da frase: primeiro decida qual é a operação “principal” (soma, diferença, potência…), depois as partes dela.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "Isole a fração. Quanto é $\\frac{x}{{@0}}$?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "A base é um triângulo retângulo; a área dela é a metade do produto dos catetos. A área lateral é o perímetro da base vezes a altura.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "Pela fórmula ${@0}$ com $a = x$, $b = {@1}$: ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "O raio é a metade do diâmetro: $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "A metade de $x$ é $x$ dividido por dois, não $2x$.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "O último termo $b^2$ é um quadrado, e ele é sempre positivo.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "O último termo é o quadrado do número {@0}, não o próprio número.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "O último termo é o produto ${@0}\\cdot {@1}$, não só o número {@2}.",
  "Použi $\\pi \\approx 3{,}14$.": "Use $\\pi \\approx 3{,}14$.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "Divida a área total por seis, você obtém a área de uma face. Depois extraia a raiz quadrada.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "Atenção: na fórmula $S = \\pi r^2$ vai o raio, não o diâmetro.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "Atenção: $(x + a)^2$ não é $x^2 + a^2$, falta o dobro do produto $2ax$.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "A quantidade de números é ímpar ({@0}); a mediana é o número do meio, o {@1}º: {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "A quantidade de números é par ({@0}); a mediana é a média do {@1}º e do {@2}º número: $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "Você está calculando a área do círculo ($\\pi r^2$), mas a tarefa pergunta pelo comprimento da circunferência.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "Imagine um deslocamento na reta numérica: um número positivo desloca para a direita, um negativo para a esquerda.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "Passe os termos com $x$ para o membro esquerdo e junte-os. Qual será o coeficiente de $x$?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "Passe os termos com $x$ para a esquerda e os números para a direita. Na forma $ax = b$: quanto valem $a$ e $b$? Escreva-os separados por ponto e vírgula.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "Passe os números para o membro direito e junte-os. Que número ficará no membro direito?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "Transforme a fração em número decimal. De dois números negativos, é maior o que está mais perto do zero.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "Na divisão vale a mesma regra de sinais que na multiplicação.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "Na multiplicação de frações não é preciso denominador comum: multiplique numerador por numerador e denominador por denominador.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "Ao passar um termo com $x$ para o outro membro da equação, é preciso trocar o sinal dele.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "Ao passar um número para o outro membro da equação, é preciso trocar o sinal dele.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "Com uma quantidade par de números, há dois números no meio. A mediana é a média deles.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "Na diferença a ordem importa: primeiro você escreve aquilo de que subtrai.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "Ao eliminar os parênteses surgem dois termos com $x$: $x$ vezes o número do segundo parêntese e o número do primeiro parêntese vezes $x$. Junte-os. Qual é o coeficiente $p$ de $x$?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "Na adição e na subtração de frações você precisa de um denominador comum. Não se esqueça dos sinais.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "No quadrado de uma diferença não basta elevar cada termo separadamente; falta o termo do meio $-2ab$.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "No quadrado de uma soma não basta elevar cada termo separadamente; falta o termo do meio $2ab$.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "Entre números negativos não decide qual tem maior valor absoluto: é maior o que está mais perto do zero.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "Somar um número negativo é o mesmo que subtrair o seu valor absoluto: ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "Cinco vezes",
  "Päťnásobok": "O quíntuplo",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "Sinais iguais dão produto positivo; sinais diferentes, negativo.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "A diferença das raízes não é a raiz da diferença. Primeiro calcule cada raiz separadamente e só depois subtraia.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "Decida qual operação é feita por último. Se toda uma soma ou diferença é multiplicada ou elevada a uma potência, é preciso usar parênteses.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "Passamos as medidas para decímetros: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "Passe as medidas para decímetros, porque $1\\,\\text{dm}^3 = 1$ litro.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "Desenvolva $(x{@0})(x{@1})$ e escreva o resultado na forma $x^2 + px + q$. Escreva $p$ e $q$ separados por ponto e vírgula.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "Desenvolva ${@0}({@1})$ (incluindo o sinal antes do parêntese). Escreva o coeficiente de $x$ e o termo independente.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "Desenvolva ${@0}({@1})$. Escreva o coeficiente de $x$ e o termo independente separados por ponto e vírgula.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Desenvolva e simplifique ${@0}$ até a forma $ax + b$. Escreva $a$ e $b$ separados por ponto e vírgula.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "Elimine o parêntese ${@0}(x{@1})$. Que número (sem $x$) aparece?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "Eliminamos os parênteses: ${@0}{@1} = {@2}{@3}$. Termos com $x$ à esquerda, números à direita: ${@4} = {@5}$, portanto $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "Desenvolvemos: ${@0}{@1}{@2}$. Juntamos os termos semelhantes: ${@3}$, portanto $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "Amplie as duas frações para o denominador {@0} e {@1} os numeradores. Que numerador você obtém?",
  "S – stred": "S – centro",
  "Sieť kvádra": "Planificação do paralelepípedo",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Junte os termos semelhantes. Escreva $a$ e $b$ separados por ponto e vírgula.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "O denominador comum é {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "Ao todo são {@0} partes iguais: {@1} tem uma parte e {@2}, {@3}. Por isso divida a soma por {@4}.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "Juntos eles têm {@0} {@1}, mas não têm a mesma idade, por isso você não pode simplesmente dividir a soma ao meio. Leve em conta a diferença de {@2} {@3}.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "A face é um quadrado. Qual é o comprimento do lado dele, ou seja, da aresta do cubo (em cm)?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "O termo do meio é o dobro do produto, $2ab$, não só $ab$.",
  "Stĺpcový diagram známok z písomky": "Gráfico de colunas das notas de uma prova",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "Chame de $x$ a quantia que {@1} {@0}. “{@2} mais” significa multiplicar por {@3}.",
  "Syn": "O filho",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "A soma é ${@0} = {@1}$, a quantidade de números é {@2}. Média: ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "A soma deve ser dividida pela quantidade de todos os números. Conte-os de novo.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "A soma dividida pela quantidade de números é a média deles, não o número procurado. Monte uma equação com todos os números $x$, $x + 1$, …",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "A soma de {@0} números naturais consecutivos é {@1}. Qual deles é o {@2}?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "O produto $(+b)\\cdot(-b)$ é negativo, por isso há um menos antes de $b^2$.",
  "Sčítaj hodnoty všetkých stĺpcov.": "Some os valores de todas as colunas.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "Some os coeficientes de todos os termos com $x$. Quanto é $a$?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "Some os dois resultados. Qual é o valor da expressão?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "Some os números sozinhos (sem $x$). Quanto é $b$?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "Some todos os termos. Qual é o valor da expressão?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "Some todos os números e divida a soma pela quantidade deles.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "Some separadamente os coeficientes de $x$ e os números sozinhos. O sinal antes de um termo pertence a ele.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "Você somou só dois lados. O retângulo tem quatro lados, então conte cada comprimento duas vezes.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "Somamos os valores de todas as colunas: ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "Esse seria o resultado de $(x - b)^2$. No produto da soma pela diferença, os termos do meio se anulam.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "Esse é o resultado do produto $(a + b)(a - b)$. No quadrado de uma diferença há ainda o termo do meio $-2ab$, e o último termo é positivo.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "Essa é a média aritmética. A mediana é o valor do meio dos números ordenados.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "Esse é o comprimento do outro lado. A tarefa pergunta pelo lado {@0}.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "Isso é só a área lateral. A área total inclui também as duas bases.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "Esse é o menor dos números, a tarefa pergunta pelo maior. Some a ele quanto o maior número é maior.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "Esse é o maior dos números, a tarefa pergunta pelo menor.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "Esse é o volume do cubo ($a^3$). A área total é a soma das áreas de todas as faces.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "Essa é a área do círculo inteiro. O setor é só uma parte dele, conforme o tamanho do ângulo central.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "Essa é a área de uma face. A aresta você obtém extraindo ainda a raiz quadrada.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "Esse é o comprimento da circunferência ($2\\pi r$), ou você calculou $r^2$ como $2r$. A área é $\\pi r^2 = \\pi\\cdot r\\cdot r$.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "Essa é a área total do cubo ($6a^2$). O volume é $a^3$.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "Isso é quantas vezes o valor mais frequente se repete. A moda é o próprio valor.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "Essa é a quantia que {@1} {@0}. A pergunta é quanto {@3} {@2}.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "Essa é a soma dos números. A média você obtém dividindo a soma pela quantidade de números.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "Essa é a idade {@0}; a tarefa pergunta pela idade {@1}.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "O cubo é o produto de três fatores iguais. Uma potência ímpar de um número negativo é negativa.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "O cubo não é o triplo: é preciso escrever o número três vezes como fator e multiplicar.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "Um prisma triangular tem como base um triângulo retângulo de catetos ${@0}\\,\\text{cm}$ e ${@1}\\,\\text{cm}$ (a hipotenusa mede ${@2}\\,\\text{cm}$) e altura de ${@3}\\,\\text{cm}$.",
  "Trojnásobok": "O triplo",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "O ângulo de ${@0}^\\circ$ é $\\frac{{@1}}{360}$ do ângulo de uma volta, portanto o setor é {@2} do círculo: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "É preciso elevar ao quadrado toda a diferença, não só o número $x$.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "Eleva-se ao quadrado toda a diferença, não cada número separadamente. Coloque a diferença entre parênteses.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "Elevamos ao quadrado todo o número $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "Determine a mediana dos números {@0}.",
  "Urči modus súboru údajov {@0}.": "Determine a moda do conjunto de dados {@0}.",
  "Usporiadame: {@0}. {@1}": "Ordenamos: {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "Em que dia foram emprestados mais livros?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "No perímetro o lado mais comprido aparece duas vezes, por isso também a diferença de {@0} cm deve ser contada duas vezes.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "Chame de $x$ a idade do mais novo; a idade do mais velho é $x$ mais a diferença. A soma das duas idades é igual ao número dado.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "Chame de $x$ a idade {@0}. Da equação $x + (x + {@1}) = {@2}$, calcule quanto é $2x$.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "Chamamos de $x$ a idade {@0}; a idade {@1} é então $x + {@2}$. Equação: $x + (x + {@3}) = {@4}$, portanto $2x = {@5}$ e $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "Tome essa parte da área do círculo inteiro. Qual é a área do setor (em cm²)?",
  "Vnuk": "O neto",
  "Vnučka": "A neta",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "Na fórmula $o = 2\\pi r$ vai o raio. Se você conhece o diâmetro, basta $o = \\pi d$; não dobre o diâmetro.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "Divida o membro direito pelo coeficiente de $x$. Quanto é $x$?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "Divida a soma pela quantidade de números. Qual é a média?",
  "Vydeľ. Aké je $x$?": "Divida. Quanto é $x$?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "Multiplique os denominadores. Que denominador você obtém?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "Multiplique os números sozinhos dos dois parênteses. Quanto é $q$?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "Multiplique os numeradores. Que numerador você obtém (antes de simplificar)?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "Multiplique por $3{,}14$. Qual é a área do círculo (em cm²)?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "Multiplique por $3{,}14$. Qual é a área da coroa circular (em cm²)?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "Calcule $\\sqrt{{@0}} - \\sqrt{{@1}}$.",
  "Vypočítaj $\\sqrt{{@0}}$.": "Calcule $\\sqrt{{@0}}$.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "Calcule ${@0}$. Escreva o resultado como fração irredutível (por ex., -5/6) ou como número inteiro.",
  "Vypočítaj ${@0}^2$.": "Calcule ${@0}^2$.",
  "Vypočítaj ${@0}^3$.": "Calcule ${@0}^3$.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "Calcule $|{@0}| - |{@1}|$.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "Calcule a média aritmética dos números {@0}.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "Calcule o valor da expressão ${@0}$ para $x = {@1}$.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "Calcule o valor da expressão ${@0}(x{@1})$ para $x = {@2}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "Calcule o valor da expressão ${@0}{@1}$ para $x = {@2}$ e $y = {@3}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "Calcule o valor da expressão ${@0}{@1}$ para $x = {@2}$.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "Calcule o volume do cubo de aresta ${@0}\\,\\text{cm}$ (em cm³).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "Calcule a área do círculo inteiro e tome dela a mesma fração que o ângulo do setor representa de $360^\\circ$.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "Calcule a área do setor circular de raio $r = {@0}\\,\\text{cm}$ e ângulo central de ${@1}^\\circ$ (em cm²). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "Calcule a área da coroa circular de raios $R = {@0}\\,\\text{cm}$ e $r = {@1}\\,\\text{cm}$ (em cm²). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "Calcule a área do retângulo $a\\cdot b$ (em cm²).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "Calcule as áreas das três faces diferentes $ab$, $bc$ e $ac$ e some-as (em cm²).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "Calcule o perímetro do retângulo $2a + 2b$ (em cm).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "Calcule a área total do cubo de aresta ${@0}\\,\\text{cm}$ (em cm²).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "Você calculou $2x$, ou seja, o dobro da idade procurada. Ainda divida por dois.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Você calculou a área. O perímetro é a soma dos comprimentos dos quatro lados.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Você calculou o perímetro. A área do retângulo é o produto dos comprimentos dos seus lados.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "Resolva a equação $\\frac{x}{{@0}}{@1} = {@2}$.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "Resolva a equação ${@0}(x{@1}) = {@2}{@3}$.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "Resolva a equação ${@0}{@1} = {@2}{@3}$.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "Resolva a equação. Quanto é $x$ (o menor número)?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "Resolva a equação. Quantos euros {@1} {@0}?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "Você tomou uma parte do comprimento da circunferência ($2\\pi r$), isso é o comprimento do arco. Para a área do setor, parta da área do círculo $\\pi r^2$.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "A distância entre dois números é o valor absoluto da diferença deles: $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "Divida a fórmula $o = 2\\pi r$ por $2\\pi \\approx 6{,}28$.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "Balança em equilíbrio: dois saquinhos x e três pesos à esquerda, nove pesos à direita",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "Multiplique o resultado dos parênteses por ${@0}$. Qual é o valor da expressão?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "Observe se o menos está dentro do parêntese. Só se eleva o que está diretamente sob o expoente.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "De $o = 2\\pi r$ isolamos $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "Substitua $x$ pelo número; se for negativo, coloque-o entre parênteses.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "Você trocou os números: multiplica-se por {@0} e soma-se {@1}.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Escreva o resultado $\\frac{{@0}}{{@1}}$ na forma irredutível (ou como número inteiro).",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Escreva a fração $\\frac{{@0}}{{@1}}$ na forma irredutível (ou como número inteiro).",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "Escreva o número ${@0}$ na forma $a\\cdot 10^n$, em que $1 \\le a &lt; 10$. Escreva $a$ e $n$ separados por ponto e vírgula.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "Elimine o número ${@0}$ do membro esquerdo, para que fique só ${@1}x$. Que número ficará no membro direito?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "Simplifique a expressão ${@0}$ até a forma $ax + b$. Escreva os números $a$ e $b$ separados por ponto e vírgula.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Não subtraia frações subtraindo separadamente os numeradores e os denominadores. Primeiro reduza-as ao mesmo denominador.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Não some frações somando separadamente os numeradores e os denominadores. Primeiro reduza-as ao mesmo denominador.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "A fração $\\frac{x}{{@0}}$ se elimina multiplicando por {@1}, não dividindo.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "Transformamos a fração em número decimal: ${@0} = {@1}$. Comparamos ${@2}$ e ${@3}$, por isso ${@4} {@5} {@6}$.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "A escrita ${@0}$ significa o produto do número ${@1}$ pela variável $x$, não a soma. Coloque o número substituído entre parênteses e multiplique.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "Um número negativo antes do parêntese troca o sinal de cada termo dentro dele, inclusive do número no final.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "Ao elevar um número negativo, coloque-o entre parênteses: $({@0})^2$ é um número positivo.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "Os parênteses significariam que você toma {@0} vezes a soma inteira. Aqui primeiro se toma {@1} de $x$ e só depois se soma {@2}.",
  "a $x + 2$": "e $x + 2$",
  "autobusom 30 %": "de ônibus 30 %",
  "babka": "a avó",
  "babky": "da avó",
  "banán": "banana",
  "beh": "corrida",
  "d = 2r – priemer": "d = 2r – diâmetro",
  "dedka": "do avô",
  "dedko": "o avô",
  "dlhšia": "mais comprido",
  "dlhšiu": "mais comprido",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "o quadrado da diferença entre $x$ e {@0}",
  "dvojnásobku": "o dobro",
  "dvojnásobok": "o dobro",
  "futbal": "futebol",
  "hokej": "hóquei",
  "hruška": "pera",
  "jahoda": "morango",
  "k – kružnica": "k – circunferência",
  "kratšia": "mais curto",
  "kratšiu": "mais curto",
  "mama": "a mãe",
  "mamy": "da mãe",
  "miest": "casas",
  "na bicykli 20 %": "de bicicleta 20 %",
  "napr. -2; 8": "por ex., -2; 8",
  "napr. 4; 5": "por ex., 4; 5",
  "napr. 6; -9": "por ex., 6; -9",
  "objem (v cm³)": "o volume (em cm³)",
  "obsah (v cm²)": "a área (em cm²)",
  "obvod (v cm)": "o perímetro (em cm)",
  "otca": "do pai",
  "otec": "o pai",
  "pešo 50 %": "a pé 50 %",
  "plávanie": "natação",
  "podstava": "base",
  "polomer $r = {@0}\\,\\text{cm}$": "raio $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "a área total (em cm²)",
  "povrch; objem": "área total; volume",
  "priemer $d = {@0}\\,\\text{cm}$": "diâmetro $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "o quíntuplo",
  "päťnásobok": "o quíntuplo",
  "r – polomer": "r – raio",
  "rovnaké, výsledok je kladný": "iguais, o resultado é positivo",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "a diferença entre {@0} de $x$ e {@1}",
  "rôzne, výsledok je záporný": "diferentes, o resultado é negativo",
  "slivka": "ameixa",
  "stĺpcový diagram": "gráfico de colunas",
  "sčítaj": "some",
  "tenis": "tênis",
  "tri štvrtiny": "três quartos",
  "troch": "três",
  "trojnásobku": "o triplo",
  "trojnásobok": "o triplo",
  "ušetril": "guardou",
  "ušetrila": "guardou",
  "vnuk": "o neto",
  "vnuka": "do neto",
  "vnučka": "a neta",
  "vnučky": "da neta",
  "výsek s uhlom α": "setor de ângulo α",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} Quanto a coluna “{@1}” é mais alta que a coluna “{@2}”? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} Calcule a sua área total (em cm²) e o seu volume (em cm³), separados por ponto e vírgula.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} Calcule {@1}.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0} e {@1} guardaram juntos {@2} €. {@3} {@4} {@5} mais que {@6}. Quantos euros {@8} {@7}?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0} é {@1} {@2} {@3} que {@4}. Juntos eles têm {@5} {@6}. Quantos anos tem {@7}?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0} tem $x$ euros, {@1} tem ${@2}x$ euros. Quantos $x$ são ao todo, ou seja, que número vai na equação $\\square\\, x = {@3}$?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0} tem ${@1} + {@2} = {@3}$ {@4}.",
  "{@0} má {@1} {@2}.": "{@0} tem {@1} {@2}.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "{@0} da soma de $x$ e {@1}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0} significa multiplicar por {@1}, não somar {@2}.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}: $x$, {@1}: ${@2}x$. Equação: $x + {@3}x = {@4}$, portanto ${@5}x = {@6}$ e $x = {@7}$. {@8} {@9} {@10} €.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}: ${@1}x = {@2}$. Dividimos os dois membros por ${@3}$: $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "Multiplicamos numerador por numerador e denominador por denominador: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "O termo ${@0}$ tem coeficiente ${@1}$, não se esqueça de contá-lo.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "Os termos com $x$ vão para a esquerda, os números para a direita: ${@0}{@1} = {@2}{@3}$, portanto ${@4} = {@5}$ e $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "Passe os termos com $x$ para um membro e os números para o outro. Por fim, divida pelo coeficiente de $x$.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "Termos com $x$: ${@0}{@1}{@2} = {@3}$. Números: ${@4}{@5} = {@6}$. Resultado: ${@7}$, portanto $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "São {@0} números. Em que posição está o número do meio?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "Os números estão em lados opostos do zero, por isso as distâncias até o zero se somam, não se subtraem.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "Os números têm sinais diferentes, por isso não some os valores absolutos: subtraia o menor do maior. O sinal do resultado é o do número de maior valor absoluto.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "Primeiro ordene os números do menor para o maior.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "Chamamos os números de $x$, $x + 1${@0}. Equação: ${@1}x + {@2} = {@3}$, portanto ${@4}x = {@5}$ e $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "Ordene os números a partir do menor. Qual é o {@0}º número da lista?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "Ordene os números a partir do menor. Que número está nessa posição? Essa é a mediana.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "O número $a$ precisa satisfazer $1 \\le a &lt; 10$, então antes da vírgula decimal ele tem um único algarismo.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "O número $a$ tem um único algarismo antes da vírgula decimal. O expoente $n$ indica quantas casas você desloca a vírgula.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "O número $q$ surge da multiplicação dos números sozinhos dos parênteses, não da soma deles.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "O número ${@0}$ multiplica todo o conteúdo do parêntese, não só o $x$.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "O número sob a raiz tem duas casas decimais, o resultado terá uma: tente $\\sqrt{{@0}}$ e divida por 10.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "O número antes do parêntese multiplica os dois termos dentro dele: não só o $x$, mas também o número sozinho.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "O número {@0} aparece três vezes, os outros números só uma vez. A moda é {@1}.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "Multiplique pelo número antes do parêntese cada termo de dentro, com o sinal. Depois junte os termos semelhantes.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "Multiplique pelo número antes do parêntese cada termo de dentro, inclusive o número sozinho no final.",
  "číslo o {@0} menšie ako polovica čísla $x$": "o número que é {@0} a menos que a metade de $x$",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "o número que é {@0} a mais que {@1} de $x$",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "Quadrado de lado a mais b dividido em quatro partes",
  "Štvornásobok": "O quádruplo",
  "štvornásobku": "o quádruplo",
  "štvornásobok": "o quádruplo",
  "štyroch": "quatro",
  "Žiaci hlasovali o obľúbenom ovocí.": "Os alunos votaram na sua fruta preferida.",
  "Žiaci uviedli svoj obľúbený šport.": "Os alunos indicaram o seu esporte preferido.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "“{@0} a menos” significa subtrair {@1} da metade; a ordem é a contrária.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "“{@0} a mais” significa somar {@1}, não subtrair.",
  "ℕ – prirodzené": "ℕ – naturais",
  "ℚ – racionálne čísla": "ℚ – números racionais",
  "ℤ – celé čísla": "ℤ – números inteiros"
 }
});
