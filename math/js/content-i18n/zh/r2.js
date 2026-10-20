/* 中文: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/r2/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "r2-cisla100": {
   "title": "100以内的数",
   "summary": "十位和个位、数列以及100以内数的大小比较。",
   "theory": [
    "<p>每个两位数都由<strong>几个十</strong>和<strong>几个一</strong>组成。47 有 4 个十和 7 个一：\n       $47 = 40 + 7$。十个十是<strong>一百</strong>：$100$。</p>",
    {
     "fig": "r2-stovka",
     "caption": "百数表。每一行是一组十个数。47 下面是 57，也就是比它大 10 的数。"
    },
    "<p><strong>比较大小：</strong>先比较十位。如果十位相同，再比较个位。\n       $63 &gt; 58$，因为 6 个十比 5 个十多。$42 &lt; 45$，因为十位相同，而 2 比 5 小。</p>"
   ],
   "examples": [
    {
     "task": "比较 71 和 17 的大小。",
     "steps": [
      "71 有 7 个十，17 只有 1 个十。",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "由 6 个十和 3 个一组成的数是多少？",
     "steps": [
      "6 个十是 60，再加上 3 个一。",
      "$60 + 3 = 63$。",
      "<strong>这个数是 63。</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "100以内的加法和减法",
   "summary": "整十数的计算、进位和退位，以及在数列上跳跃。",
   "theory": [
    "<p><strong>整十数</strong>相加就像个位数相加一样：$30 + 40$ 是 3 个十加 4 个十，也就是 7 个十，$70$。\n       同样，$90 - 60 = 30$。</p>",
    "<p>数比较大时，把第二个数分成<strong>整十数和一位数</strong>，再依次加上。\n       算 $38 + 25$ 时，先加 20，再加 5。</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$：跳 20 到达 58，再跳 5 到达 63。所以 $38 + 25 = 63$。"
    },
    "<p>减法也是这样：$72 - 34$，先算 $72 - 30 = 42$，再算 $42 - 4 = 38$。\n       可以用加法验算：$38 + 34 = 72$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $47 + 36$。",
     "steps": [
      "把 36 分成 30 和 6。",
      "$47 + 30 = 77$。",
      "$77 + 6 = 83$。",
      "<strong>结果：83</strong>"
     ]
    },
    {
     "task": "计算 $81 - 25$。",
     "steps": [
      "把 25 分成 20 和 5。",
      "$81 - 20 = 61$。",
      "$61 - 5 = 56$。",
      "验算：$56 + 25 = 81$。<strong>结果：56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "乘法和除法",
   "summary": "乘法是相同加数的连加，除法是平均分。",
   "theory": [
    "<p><strong>乘法</strong>是求几个相同加数的和的简便写法。$4 + 4 + 4$ 可以写成 $3 \\cdot 4$\n       （3 个 4）。相乘的数叫作<em>因数</em>，结果叫作<em>积</em>。</p>",
    {
     "fig": "r2-pole",
     "caption": "3 行，每行 4 个点：$4 + 4 + 4 = 3 \\cdot 4 = 12$。如果按列看，就是 4 列，每列 3 个点：$4 \\cdot 3 = 12$。"
    },
    "<p>因数交换位置，积不变：$3 \\cdot 4 = 4 \\cdot 3$。任何数乘 1 都得原数（$7 \\cdot 1 = 7$），\n       任何数乘 0 都得 0（$5 \\cdot 0 = 0$）。</p>",
    "<p><strong>除法</strong>就是平均分。把 12 颗糖平均分给 3 个小朋友，每人分到\n       $12 : 3 = 4$ 颗。除法是乘法的逆运算：$12 : 3 = 4$，因为 $3 \\cdot 4 = 12$。</p>"
   ],
   "examples": [
    {
     "task": "把 $5 + 5 + 5 + 5$ 写成乘法算式并计算。",
     "steps": [
      "5 加了四次。",
      "$4 \\cdot 5 = 20$。",
      "<strong>结果：20</strong>"
     ]
    },
    {
     "task": "15 朵花，每 5 朵扎成一束。能扎几束？",
     "steps": [
      "求 15 里面有几个 5。",
      "$15 : 5 = 3$，因为 $3 \\cdot 5 = 15$。",
      "<strong>能扎 3 束。</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "倍数和乘法口诀",
   "summary": "10 · 10 以内的乘法口诀、一个数的倍数和用口诀求商。",
   "theory": [
    "<p>把一个数依次乘 1、2、3、……就得到这个数的<strong>倍数</strong>。3 的倍数是\n       3、6、9、12、15、18、21、24、27、30。在数列上每次跳 3。</p>",
    {
     "fig": "r2-nasobky",
     "caption": "3 的倍数：每一跳的长度是 3。跳四次后到达 $4 \\cdot 3 = 12$。"
    },
    "<p>小窍门：2 的倍数是双数（偶数），5 的倍数个位是 0 或 5，10 的倍数个位是 0。\n       如果记不住 $6 \\cdot 4$，可以这样想：$5 \\cdot 4 = 20$，再加一个 4，就是 $24$。</p>",
    "<p>一道乘法算式可以马上写出两道除法算式：由 $6 \\cdot 4 = 24$ 得出 $24 : 4 = 6$ 和 $24 : 6 = 4$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $7 \\cdot 5$。",
     "steps": [
      "5 的倍数：5、10、15、20、25、30、35。",
      "第七个倍数是 35。",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "计算 $32 : 4$。",
     "steps": [
      "找一个数，它乘 4 等于 32。",
      "$8 \\cdot 4 = 32$。",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "应用题和条件整理",
   "summary": "把应用题列成算式：加法、减法、乘法和除法。",
   "theory": [
    "<p>解应用题时，先写下<strong>已知</strong>什么、<strong>求</strong>什么。然后选择正确的\n       运算，计算，再用完整的句子写出<strong>答案</strong>。</p>",
    "<ul><li><em>得到、增加了、一共、多……</em> → 加法，</li>\n       <li><em>拿走了、还剩、少……、多多少</em> → 减法，</li>\n       <li><em>每份……（同样的数取几次）</em> → 乘法，</li>\n       <li><em>平均分、每……一组能分几组</em> → 除法。</li></ul>",
    "<p>题目的<strong>条件整理</strong>可以这样写：<br>小明原有……35 颗弹珠<br>丢了……12 颗弹珠<br>\n       还剩……? 颗弹珠<br>$35 - 12 = 23$<br>答：小明还剩 23 颗弹珠。</p>"
   ],
   "examples": [
    {
     "task": "小丽有 28 张贴纸。小军比她多 15 张。小军有多少张贴纸？",
     "steps": [
      "“多 15 张”就是在 28 上加 15。",
      "$28 + 15 = 43$。",
      "<strong>答：小军有 43 张贴纸。</strong>"
     ]
    },
    {
     "task": "妈妈在 4 个盘子里各放了 5 个苹果。盘子里一共有多少个苹果？",
     "steps": [
      "4 个 5 用乘法。",
      "$4 \\cdot 5 = 20$。",
      "<strong>答：盘子里一共有 20 个苹果。</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "点、线段、直线和曲线",
   "summary": "区分各种线，测量和比较线段。",
   "theory": [
    "<p><strong>点</strong>画成一个小圆点，用大写字母表示，例如点 $A$。\n       <strong>线段</strong>是两点之间的直的线，例如线段 $CD$。点 $C$ 和 $D$ 是它的端点。</p>",
    "<p><strong>直线</strong>是直的线，它没有起点也没有终点，可以向两边无限延长。\n       直线用小写字母表示，例如直线 $p$。<strong>曲线</strong>不是直的，它会拐弯。</p>",
    {
     "fig": "r2-ciary",
     "caption": "点、线段、直线和曲线。直的线要用尺子画。"
    },
    "<p>线段的长度用尺子量，单位是<strong>厘米</strong>。把尺子的 0 刻度对准端点 $A$，\n       再读出点 $B$ 对着的数。</p>",
    {
     "fig": "r2-pravitko",
     "caption": "线段 $AB$ 从 0 开始，到 7 结束。它长 $7\\,\\text{cm}$。"
    }
   ],
   "examples": [
    {
     "task": "哪种线有两个端点？",
     "steps": [
      "点只是一个小圆点，直线和曲线都没有端点。",
      "<strong>线段有两个端点。</strong>"
     ]
    },
    {
     "task": "线段 $AB$ 长 $9\\,\\text{cm}$，线段 $CD$ 长 $4\\,\\text{cm}$。线段 $AB$ 比 $CD$ 长多少？",
     "steps": [
      "这是比较，所以用减法。",
      "$9 - 4 = 5$。",
      "<strong>线段 $AB$ 比 $CD$ 长 $5\\,\\text{cm}$。</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "长度、时间和货币单位",
   "summary": "厘米和米，时和分，欧元和欧分。",
   "theory": [
    "<p><strong>长度：</strong>短的东西用厘米（cm）量，长一些的用米（m）量。\n       $1\\,\\text{m} = 100\\,\\text{cm}$，$1\\,\\text{dm} = 10\\,\\text{cm}$。</p>",
    "<p><strong>时间：</strong>一天有 24 小时，1 小时（h）有 60 分钟（min）。半小时是 30 分钟，一刻钟是 15 分钟。\n       钟面上的<em>短针</em>（时针）指示几时，<em>长针</em>（分针）指示几分。</p>",
    {
     "fig": "r2-hodiny",
     "caption": "左边是 7:00，长针指向 12。右边是 2:30（两点半），长针指向 6，短针在 2 和 3 之间。"
    },
    "<p><strong>货币：</strong>我们用欧元（€）和欧分（c）付钱。$1\\,\\text{€} = 100$ 欧分。\n       硬币有 1 c、2 c、5 c、10 c、20 c、50 c、1 € 和 2 €。</p>",
    {
     "fig": "r2-mince",
     "caption": "欧元硬币，按面值从小到大排列。"
    }
   ],
   "examples": [
    {
     "task": "1 小时 15 分钟是多少分钟？",
     "steps": [
      "1 小时是 60 分钟。",
      "$60 + 15 = 75$。",
      "<strong>是 75 分钟。</strong>"
     ]
    },
    {
     "task": "你的钱包里有 50 c、20 c 和 20 c 的硬币。离 1 欧元还差多少欧分？",
     "steps": [
      "$50 + 20 + 20 = 90$ 欧分。",
      "1 欧元是 100 欧分：$100 - 90 = 10$。",
      "<strong>还差 10 欧分。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$，所以 ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$。",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$，$100 - {@0} = {@1}$。还差 ${@2}\\,\\text{cm}$。",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$。线段 $KL$ 比线段 $MN$ 长 ${@3}\\,\\text{cm}$。",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$，所以 ${@3} \\cdot {@4} = {@5}$。",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$ 欧分。",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$，所以 ${@3} : {@4} = {@5}$。",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$，所以 {@3} 是 {@4} 的倍数。其他的数不在 {@5} 的乘法口诀里。",
  "1 dm je 10 cm.": "1 dm 是 10 cm。",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1 欧元是 100 欧分：$100 - {@0} = {@1}$。还差 {@2} {@3}。",
  "1 hodina": "1 小时",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1 小时是 60 分钟：$60 + {@0} = {@1}$ 分钟。",
  "1 m je 100 cm.": "1 m 是 100 cm。",
  "1 € = 100 centov.": "1 € = 100 欧分。",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "线段 $AB$ 有多长？用厘米作答。{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "点 $A$ 在数 {@0} 处，点 $B$ 在数 {@1} 处。${@2} - {@3} = {@4}$，线段长 ${@5}\\,\\text{cm}$。",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "点只是一个小小的点。图上画的是一条线。",
  "Bod, úsečka, priamka a krivá čiara": "点、线段、直线和曲线",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "总长度是所有线段长度的和。",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "整条折线比它的每一部分都长。要把线段的长度相加，不要相减。",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "厘米很小，大约是一根手指的宽度。这里需要更大的单位。",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "你有 100 欧分或更多。100 欧分就是 1 欧元——把它加到欧元里。",
  "Ceny píšeme v eurách.": "价格用欧元来写。",
  "Ceruzka je dlhá asi 15 …": "铅笔大约长 15 …",
  "Cez dva rôzne body prechádza práve jedna priamka.": "经过两个不同的点，有且只有一条直线。",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "缺少的数用减法求：${@0} - {@1} = {@2}$。验算：${@3} + {@4} = {@5}$。",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "除法不是减法。找一个数，乘以 {@0} 得 {@1}。",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "平均分成 {@0} {@1}：${@2} : {@3} = {@4}$，因为 ${@5} \\cdot {@6} = {@7}$。",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "不要加 10。1 分米是 10 厘米，所以要用分米数乘以 10。",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "十位和个位不能像普通的数那样相加。十位上的数字写在前面，个位上的数字写在后面。",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "十位相同，再比个位：{@0} 和 {@1}。所以 ${@2} {@3} {@4}$。",
  "Deň (s nocou) má 24 hodín.": "一天（包括夜里）有 24 小时。",
  "Dlhšie veci meriame v metroch.": "较长的东西用米来量。",
  "Dlhší čas meriame v hodinách.": "较长的时间用小时来量。",
  "Dom je vysoký asi 10 …": "房子大约高 10 …",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "填出缺少的数：${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "填出缺少的数：${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "填出缺少的 {@0} 的倍数：{@1}",
  "Doplň správnu jednotku: {@0}": "填上正确的单位：{@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "填出这一列数中缺少的数：{@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "不要把长度相加。问的是一条线段比另一条长多少——要用减法。",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "把长度相加：${@0} + {@1} = {@2}$。折线长 ${@3}\\,\\text{cm}$。",
  "Euromince": "欧元硬币",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "1 小时是很长的时间。这里需要更短的单位。",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "1 小时有 60 分钟。60 的一半是 30，四分之一是 15。",
  "Hodina má 60 minút. {@0} je {@1} minút.": "1 小时有 60 分钟。{@0}是 {@1} 分钟。",
  "Hodina nemá 100 minút, ale 60 minút.": "1 小时不是 100 分钟，而是 60 分钟。",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "先把小时换算成分钟：1 小时是 60 分钟。",
  "Hodiny ukazujú 7:00 a 2:30": "钟面显示 7:00 和 2:30",
  "Hľadaj suseda čísla v číselnom rade.": "在数列中找这个数旁边的数。",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "这是长度、时间，还是价格？它是短的还是长的？",
  "Je to len jedna bodka, teda bod.": "这只是一个点，所以是点。",
  "Je čiara rovná? Má krajné body?": "这条线是直的吗？它有端点吗？",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "个位相加超过了 10，可是你忘了把这个新的十加上。",
  "Každé ďalšie číslo je o {@0} väčšie.": "后面的每个数都比前一个大 {@0}。",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "同一个数加了好几次时，可以用乘法。",
  "Kniha stojí asi 12 …": "一本书大约 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "${@0}\\,\\text{dm}$ 是多少厘米？",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "从 {@0} 到 {@1} 是多少厘米？算一算 ${@2} - {@3}$。",
  "Koľko centimetrov má 1 meter?": "1 米有多少厘米？",
  "Koľko centov je spolu?{@0}": "一共是多少欧分？{@0}",
  "Koľko centov je v ostatných minciach?": "其他硬币一共是多少欧分？",
  "Koľko centov má 1 euro?": "1 欧元是多少欧分？",
  "Koľko eur je v minciach 1 € a 2 €?": "1 € 和 2 € 的硬币一共是多少欧元？",
  "Koľko hodín má jeden deň?": "一天有多少小时？",
  "Koľko je $100 - {@0}$?": "$100 - {@0}$ 等于多少？",
  "Koľko je $60 + {@0}$?": "$60 + {@0}$ 等于多少？",
  "Koľko je ${@0} \\cdot {@1}$?": "${@0} \\cdot {@1}$ 等于多少？",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "现在几点？<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"钟面\">{@0}</svg>",
  "Koľko je skupín?": "一共有几组？",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "一共有多少{@0}？ <span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "一共是几欧元几欧分？写两个数，用分号隔开（例如 2; 35）。{@0}",
  "Koľko krajných bodov má priamka?": "直线有几个端点？",
  "Koľko krajných bodov má úsečka?": "线段有几个端点？",
  "Koľko kúskov je v jednej skupine?": "每组有几个？",
  "Koľko minút je 1 hodina a {@0} minút?": "1 小时 {@0} 分钟是多少分钟？",
  "Koľko minút je {@0}?": "{@0}是多少分钟？",
  "Koľko minút má 1 hodina?": "1 小时有多少分钟？",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "经过两个不同的点，可以画几条直线？",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "{@0} 要加几次才能得到 {@1}？",
  "Koľkokrát sa opakuje to isté číslo?": "同一个数重复了几次？",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "在这个加法算式中，{@0} 重复了几次？",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "曲线是一条线。这里只有一个点。",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "曲线是弯的。这条线是直的。",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "时针还在 {@0} 和 {@1} 之间。在它走到 {@2} 之前，算较小的那个钟点。",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "短针（时针）表示几点，长针（分针）表示几分。分针指向 6 时，是半点。",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "时针{@0}，分针指向 {@1}，也就是 {@2} 分。现在是 {@3}（{@4}）。",
  "Krátke veci meriame v centimetroch.": "较短的东西用厘米来量。",
  "Krátky čas meriame v minútach.": "较短的时间用分钟来量。",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "数 {@0} 中整十的部分是多少？（36 的话就是 30。）",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "下面哪个数是 {@0} 的倍数？",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "哪个数比 {@2} {@1} {@0}？",
  "Ktoré číslo krát {@0} dá {@1}?": "哪个数乘以 {@0} 得 {@1}？",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "哪个数由 {@0} 个{@1}和 {@2} 个{@3}组成？",
  "Ktorú počtovú operáciu použiješ?": "你要用哪种运算？",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "这条折线由两条线段组成。第一条长 ${@0}\\,\\text{cm}$，第二条长 ${@1}\\,\\text{cm}$。整条折线长多少（cm）？",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "1 米大约是大跨一步的长度。这里太长了，需要更小的单位。",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "1 € 和 2 € 的硬币单独算，欧分单独相加。100 欧分是 1 欧元。",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "1 分钟是很短的时间。这里需要更长的单位。",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "你有 {@0} {@1}。还差多少欧分到 1 欧元？",
  "Najprv odčítaj desiatky, potom jednotky.": "先减整十，再减个位。",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "先减整十：${@0} - {@1}$ 等于多少？",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "先减整十：${@0} - {@1} = {@2}$。再减个位：${@3} - {@4} = {@5}$。",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "先比十位。如果十位相同，再比个位。",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "先把小时换算成分钟，再相加。",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "先加整十：${@0} + {@1}$ 等于多少？",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "先加整十：${@0} + {@1} = {@2}$。再加个位：${@3} + {@4} = {@5}$。",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "不要用减法。糖要平均分，这是除法。",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "不要用减法。你要找的是乘以 {@0} 得 {@1} 的数。",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "不要用减法。平均分的时候用除法。",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "不要用减法。我们要看 {@1} 里有几个 {@0}，这是除法。",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "不要把加数的个数和 {@0} 相加。{@1} 重复了 {@2} 次——这是乘法。",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "有几个相同的数时，用乘法。",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "{@0} 的倍数每次增加 {@1}：{@2}。缺少的是 ${@3} \\cdot {@4} = {@5}$。",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "{@0} 的倍数：{@1}。所以 ${@2} \\cdot {@3} = {@4}$。",
  "Násobky čísla 3 na číselnom rade": "数列上 3 的倍数",
  "O koľko je {@0} viac ako {@1}?": "{@0} 比 {@1} 多多少？",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "从 {@0} 中减去的是 ${@1} - {@2} = {@3}$。验算：${@4} - {@5} = {@6}$。",
  "Odčítanie použiješ, keď niečo ubudne.": "东西变少时，用减法。",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "“多多少”的问题，用大数减去小数来解。",
  "Palec na ruke je dlhý asi 5 …": "大拇指大约长 5 …",
  "Pol hodiny": "半小时",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "比十位：{@0} 和 {@1}。所以 ${@2} {@3} {@4}$。",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "比一比，所以用减法：{@0} {@1}多 {@2} {@3}。",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "你往反方向移了。较小的数要用减法得到。",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "你往反方向移了。较大的数要用加法得到。",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "注意，线段不是从 0 开始的。数一数 A 和 B 之间有几厘米。",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "看看相邻的两个数。它们相差多少？",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "仔细看看时针指向哪个数。",
  "Pozri sa, pri ktorom čísle je bod B.": "看看点 B 在哪个数处。",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "不要把组数和每组的个数相加。相同的几组要用乘法来算。",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "不要把盘子数和每个盘子里的个数相加。每个盘子里一样多——用乘法。",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "整十和个位一样计算：3 个十 + 4 个十 = 7 个十。",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "你按 1 小时有 100 分钟来算了。1 小时只有 60 分钟。",
  "Pravítko a úsečka AB": "直尺和线段 AB",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "依次说出 {@0} 的倍数，直到找到 {@1}。",
  "Prestávka trvá 10 …": "课间休息 10 …",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "你只读了点 B 处的数。线段不是从 0 开始的，所以要减去点 A 处的数。",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "个位你倒过来减了（{@0} − {@1}）。个位不够减时要退位：先减整十，再减个位。",
  "Pri ktorom čísle na pravítku je bod A?": "点 A 在直尺的哪个数处？",
  "Pri ktorom čísle na pravítku je bod B?": "点 B 在直尺的哪个数处？",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "直线是直的线。这里只有一个点。",
  "Priamka je rovná. Táto čiara sa zatáča.": "直线是直的。这条线是弯的。",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "直线没有端点。这条线有两个端点，一个是起点，一个是终点。",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "直线没有起点也没有终点，没有任何端点。",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "变多 → 加法，变少 → 减法，几个相同的数 → 乘法。",
  "Pribudlo, preto sčítame.": "东西变多了，所以用加法。",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "东西变多了，所以用加法：{@0} {@1}现在有 {@2} {@3}。",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "你只加了整十。别忘了再加上 {@0} 个{@1}。",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "把 {@0} 加 {@1} 次，或者想一想 {@2} 的乘法口诀。",
  "Rovnaké rozdeľovanie je delenie.": "平均分就是除法。",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "没有端点、穿过整幅图的直的线是直线。",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "有两个端点的直的线是线段。",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "把第二个数分成整十和个位，再依次加上去。",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "平均分成 {@0} {@1}：${@2} : {@3} = {@4}$，因为 ${@5} \\cdot {@6} = {@7}$。每人分到 {@8} {@9}。",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "把数分成整十和个位：${@0} = \\square + \\square$。",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "你少数了一个 {@0} 的倍数。再数一遍每次跳 {@1} 的步数。",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "你多数了一个 {@0} 的倍数。再数一遍每次跳 {@1} 的步数。",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "数列上的跳跃：38 加 20 加 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "一共是 {@0} € 和 {@1} c。是几欧元几欧分？（记住：100 欧分是 1 欧元。）",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "把上午的 12 小时和下午的 12 小时加起来。",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "数一数有几组，每组有几个，然后相乘。",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "你数的是硬币的个数。要把硬币上写的数加起来。",
  "Stovková tabuľka čísel od 1 do 100": "1 到 100 的百数表",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "丝带长 ${@0}\\,\\text{cm}$。还差多少厘米到 $1\\,\\text{m}$？",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "这里有 {@0} {@1}，每组 {@2} 个：${@3} = {@4} \\cdot {@5} = {@6}$。",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "把硬币的面值加起来，从最大的开始。",
  "Sčítanie použiješ, keď niečo pribudne.": "东西变多时，用加法。",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "现在减个位：${@0} - {@1}$ 等于多少？",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "现在加个位：${@0} + {@1}$ 等于多少？",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "这是丝带的长度。问的是还差多少到 1 米——要用 100 去减。",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "这只是半天。钟面上有 12 个小时，但时针一天要转两圈。",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "这是十位上的数。个位是最右边的数字。",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "这是个位上的数。十位是最左边的数字。",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "这是你已经有的欧分数。问的是还差多少到 100 欧分——要用减法。",
  "Tri rady po štyri bodky": "三行，每行四个点",
  "Trieda je dlhá asi 9 …": "教室大约长 9 …",
  "Trištvrte hodiny": "三刻钟",
  "Trojuholník má 3 strany a každá strana je úsečka.": "三角形有 3 条边，每条边都是一条线段。",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "东西变少了，所以用减法：{@0} {@1}还剩 {@2} {@3}。",
  "Ubudlo, preto odčítame.": "东西变少了，所以用减法。",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "换算成欧分：${@0} = {@1}$ 欧分。100 欧分是 1 欧元，所以是 {@2} € {@3} c。",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "用 {@0} 量的是{@1}，但这里问的是{@2}。",
  "V noci spíme asi 10 …": "夜里大约睡 10 …",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "你把十位和个位弄反了。十位写在第一位，个位写在第二位。",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "你把两根针弄反了。短针（时针）表示几点，长针（分针）表示几分。",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "说出 {@0} 的倍数：{@1}、{@2}、{@3}、…",
  "Vypočítaj ${@0} : {@1}$.": "计算 ${@0} : {@1}$。",
  "Vypočítaj ${@0} \\cdot {@1}$.": "计算 ${@0} \\cdot {@1}$。",
  "Vypočítaj ${@0} {@1} {@2}$.": "计算 ${@0} {@1} {@2}$。",
  "Vyučovanie trvá asi 5 …": "上课大约 5 …",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "三角形的周长由几条线段组成？",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "正方形的周长由几条线段组成？",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "用 {@0} 个气球扎成束，每束 {@1} {@2}。一共能扎几束？",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "把加法写成乘法并计算：${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "我们要看 {@1} 里有几个 {@0}：${@2} : {@3} = {@4}$，因为 ${@5} \\cdot {@6} = {@7}$。",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "只有十位上的数变了，个位不变。在百数表中移动一行。",
  "Zmrzlina stojí asi 2 …": "一个冰淇淋大约 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "符号 = 只能放在两个相等的数之间。这两个数不相等。",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "符号方向反了。十位相同，所以由个位决定。",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "符号方向反了。由十位决定：十位上的数大的那个数更大。",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "符号 + 表示添上。这里要用加法，不是减法。",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "符号 − 表示拿走。这里要用减法，不是加法。",
  "balón": "个",
  "balónov": "个",
  "balóny": "个",
  "bod": "点",
  "bod A": "点 A",
  "cent": "欧分",
  "centov": "欧分",
  "centy": "欧分",
  "cenu": "价格",
  "ciferník hodín": "钟面",
  "citrónov": "个柠檬",
  "desiatku": "十",
  "deti": "个孩子",
  "detí": "个孩子",
  "dieťa": "个孩子",
  "dĺžku": "长度",
  "eurá; centy": "欧元; 欧分",
  "hodina": "小时",
  "hodiny": "小时",
  "hodín": "小时",
  "hrušiek": "个梨",
  "jahôd": "颗草莓",
  "je medzi {@0} a {@1}": "在 {@0} 和 {@1} 之间",
  "jednotku": "一",
  "krivá čiara": "曲线",
  "kúpil": "买了",
  "kúpila": "买了",
  "min": "分钟",
  "mince": "硬币",
  "mrkiev": "根胡萝卜",
  "orechov": "个核桃",
  "orechy": "个核桃",
  "pol hodiny": "半小时",
  "položil": "放了",
  "položila": "放了",
  "presne {@0} {@1}": "{@0} 点整",
  "priamka": "直线",
  "priamka p": "直线 p",
  "rovnaké časti": "等份",
  "rovnakú časť": "等份",
  "rovnakých častí": "等份",
  "rozdelil": "分给了",
  "rozdelila": "分给了",
  "skupina": "组",
  "skupiny": "组",
  "skupín": "组",
  "skáčeme vždy o 3": "每次跳 3",
  "stratil": "丢了",
  "stratila": "丢了",
  "tanier": "个盘子",
  "taniere": "个盘子",
  "tanierov": "个盘子",
  "trištvrte hodiny": "三刻钟",
  "ukazuje na {@0}": "指向 {@0}",
  "vreciek": "袋",
  "vrecko": "袋",
  "vrecká": "袋",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} 验算：${@1} + {@2} = {@3}$。",
  "{@0} Správny zápis je {@1}.": "{@0} 正确的算式是 {@1}。",
  "{@0} desiatka je {@1}.": "{@0} 个十是 {@1}。",
  "{@0} desiatky sú {@1}.": "{@0} 个十是 {@1}。",
  "{@0} desiatok je {@1}.": "{@0} 个十是 {@1}。",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0} 只是{@1}少的部分。要从{@2}的数量里减去它。",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0}比{@1}少，所以要用减法，不要用加法。",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0}有 {@1} {@2}。{@3}比{@0}少 {@4} {@5}。{@7}有多少{@6}？",
  "{@0} {@1} a {@2} minút": "{@0} 点 {@2} 分",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0}在 {@2} {@3}里各{@1} {@4} {@5}。盘子里一共有多少{@6}？",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0}{@1} {@2} {@3}，又{@4} {@5} {@3}。哪个算式表示{@0}现在有多少{@6}？",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0}{@1} {@2} {@3}，{@5} {@4} {@3}。哪个算式表示{@7}还剩多少{@6}？",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0}{@1} {@2} {@3}，每{@3}里有 {@4} {@5}。哪个算式表示{@0}一共{@7}多少{@6}？",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0}把 {@2} {@3}平均{@1} {@4} 个朋友。每个朋友分到多少{@5}？",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0}把 {@2} {@3}平均{@1} {@4} {@5}。每个孩子分到几颗糖？",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "{@0} 个{@1} {@2} {@3} 个{@4}：${@5} {@6} {@7} = {@8}$。",
  "{@0}-krát po {@1} je násobenie.": "{@0} 个 {@1}，就是乘法。",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@0} 个 {@1}，就是乘法：${@2} \\cdot {@3} = {@4}$。盘子里一共有 {@5} {@6}。",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "线段 $KL$ 长 ${@0}\\,\\text{cm}$，线段 $MN$ 长 ${@1}\\,\\text{cm}$。线段 $KL$ 比线段 $MN$ 长多少厘米？",
  "Úsečka je rovná. Táto čiara sa zatáča.": "线段是直的。这条线是弯的。",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "线段是两个点之间的线。这里只有一个点。",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "线段有两个端点，例如 $A$ 和 $B$。",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "线段两头各有一个端点。这条线没有端点，会一直延伸下去。",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "线段有起点也有终点，直线两样都没有。",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "线段从 0 开始，到数 {@0} 结束。它长 ${@1}\\,\\text{cm}$。",
  "úsečka": "线段",
  "úsečka CD": "线段 CD",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "这条线是弯的，不是直的，所以是曲线。",
  "Čistenie zubov trvá asi 3 …": "刷牙大约 3 …",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "图上是什么？<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"线或点\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "不要把两个数相加。你要找的是从 {@0} 中减去多少才剩 {@1}——这要用减法来求。",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "不要把两个数相加。你要找的是 {@0} 加上多少才得 {@1}——这要用减法来求。",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "不要把两个数相加。“多多少”是在比较——用大数减去小数。",
  "Čísla si sčítal. Znak · znamená násobiť.": "你把两个数相加了。符号 · 表示乘法。",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "两个数相等：${@0} = {@1}$。",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "两个数完全相同，哪个也不比另一个大。",
  "Čísla {@0} vždy o {@1}: {@2}.": "这些数每次{@0} {@1}：{@2}。",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "{@0} 不在 {@1} 的乘法口诀里：它在倍数 {@2} 和 {@3} 之间。",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "{@0} 加了 {@1} 次：${@2} \\cdot {@3} = {@4}$。",
  "čas": "时间",
  "čiara alebo bod": "线或点",
  "Štvorec má 4 strany, každá strana je úsečka.": "正方形有 4 条边，每条边都是一条线段。",
  "Štvrť hodiny": "一刻钟",
  "štvrť hodiny": "一刻钟",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "“少 {@0}”就是减去 {@1}：{@2} {@3}有 {@4} {@5}。",
  "„O … menej“ znamená odčítať.": "“少……”表示要用减法。",
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
