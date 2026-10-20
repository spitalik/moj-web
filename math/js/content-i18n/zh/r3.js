/* 中文: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/r3/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "r3-cisla1000": {
   "title": "1 000 以内的数",
   "summary": "百位、十位和个位，数列以及三位数的大小比较。",
   "theory": [
    "<p>三位数有<strong>百位（百）</strong>、<strong>十位（十）</strong>和<strong>个位（个）</strong>。\n       472 有 4 个百、7 个十和 2 个一：$472 = 400 + 70 + 2$。十个百是<strong>一千</strong>：$1\\,000$。</p>",
    {
     "fig": "r3-rad1000",
     "caption": "0 到 1 000 的数列。350 正好在 300 和 400 的中间，720 更接近 700。"
    },
    "<p><strong>比较大小：</strong>先比较百位，百位相同再比较十位，最后比较个位。\n       $538 &gt; 497$，因为 5 个百比 4 个百多。$642 &lt; 648$，因为百位和十位都相同，而 $2 &lt; 8$。</p>"
   ],
   "examples": [
    {
     "task": "比较 806 和 860 的大小。",
     "steps": [
      "百位相同（8）。",
      "十位：0 和 6，0 更小。",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "写出由 3 个百、0 个十和 9 个一组成的数。",
     "steps": [
      "$300 + 0 + 9 = 309$。",
      "十位上写 0。",
      "<strong>这个数是 309。</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "1 000 以内的加法和减法",
   "summary": "分步口算和列竖式笔算。",
   "theory": [
    "<p><strong>口算</strong>时分步计算：$356 + 230$，先算 $356 + 200 = 556$，再算 $556 + 30 = 586$。\n       整百数的计算就像一位数一样：$400 + 500 = 900$，$800 - 300 = 500$。</p>",
    "<p><strong>笔算</strong>时列竖式，个位对齐个位，十位对齐十位，百位对齐百位。\n       从右往左算：先算个位，再算十位，最后算百位。哪一位上的和超过 9，就向左边一位进 1。</p>",
    {
     "fig": "r3-stlpec",
     "caption": "竖式加法 $347 + 285 = 632$。上面的小 1 是进到十位和百位的数。"
    },
    "<p>减法总可以<strong>用加法验算</strong>：如果 $632 - 285 = 347$，那么一定有 $347 + 285 = 632$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $468 + 275$。",
     "steps": [
      "个位：$8 + 5 = 13$，写 3，进 1。",
      "十位：$6 + 7 + 1 = 14$，写 4，进 1。",
      "百位：$4 + 2 + 1 = 7$。",
      "<strong>结果：743</strong>"
     ]
    },
    {
     "task": "计算 $700 - 340$。",
     "steps": [
      "$700 - 300 = 400$。",
      "$400 - 40 = 360$。",
      "验算：$360 + 340 = 700$。<strong>结果：360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "乘法和除法",
   "summary": "完整的乘法口诀、整十数的乘法和有余数的除法。",
   "theory": [
    "<p>$10 \\cdot 10$ 以内的乘法可以在乘法表里查到：行是第一个因数，列是第二个因数，交叉处就是积。\n       除法是乘法的逆运算：由 $6 \\cdot 7 = 42$ 可知 $42 : 6 = 7$，$42 : 7 = 6$。</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "乘法表：第 6 行和第 7 列交于 42，所以 $6 \\cdot 7 = 42$。"
    },
    "<p><strong>整十数乘一位数：</strong>$30 \\cdot 4$ 就是 3 个十乘 4，得 12 个十，也就是 $120$。</p>",
    "<p><strong>有余数的除法：</strong>不是每道除法都能正好除尽。$17 : 5 = 3$ <em>余</em> 2，因为 $3 \\cdot 5 = 15$，\n       到 17 还差 2。余数一定要比除数小。</p>"
   ],
   "examples": [
    {
     "task": "计算 $8 \\cdot 7$ 和 $56 : 8$。",
     "steps": [
      "由乘法口诀：$8 \\cdot 7 = 56$。",
      "除法是乘法的逆运算，所以 $56 : 8 = 7$。"
     ]
    },
    {
     "task": "计算有余数的除法 $29 : 4$。",
     "steps": [
      "不大于 29 的 4 的最大倍数是 $7 \\cdot 4 = 28$。",
      "余数：$29 - 28 = 1$。",
      "<strong>$29 : 4 = 7$ 余 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "括号和运算顺序",
   "summary": "先算什么：括号，乘法和除法，加法和减法。",
   "theory": [
    "<p>一道算式里有几种运算时，要按这个顺序：</p>\n       <ol><li>先算<strong>括号</strong>里面的，</li>\n       <li>再算<strong>乘法和除法</strong>，</li>\n       <li>最后算<strong>加法和减法</strong>（从左往右）。</li></ol>",
    "<p>比一比：$2 + 3 \\cdot 4 = 2 + 12 = 14$，但是 $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$。括号会改变结果！</p>",
    "<p>只有加法和减法时，从左往右算：$20 - 5 - 3 = 15 - 3 = 12$。但如果有一部分在括号里，\n       就先算括号里的：$20 - (5 - 3) = 20 - 2 = 18$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $18 + 4 \\cdot 6$。",
     "steps": [
      "先算乘法：$4 \\cdot 6 = 24$。",
      "$18 + 24 = 42$。",
      "<strong>结果：42</strong>"
     ]
    },
    {
     "task": "计算 $(15 - 7) \\cdot 3$。",
     "steps": [
      "先算括号：$15 - 7 = 8$。",
      "$8 \\cdot 3 = 24$。",
      "<strong>结果：24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "多步应用题",
   "summary": "需要连续列两三道算式来解决的题目。",
   "theory": [
    "<p>有些题目一道算式解决不了。我们一步一步来：<strong>已知什么</strong>，\n       <strong>先要求出什么</strong>，<strong>最后要求什么</strong>。</p>",
    "<p>例如：妈妈买了 3 本练习本，每本 4 €，付了一张 20 € 的纸币。应该找回多少欧元？<br>\n       第 1 步——练习本的价钱：$3 \\cdot 4 = 12$ €。<br>第 2 步——找回：$20 - 12 = 8$ €。<br>答：应该找回妈妈 8 €。</p>",
    "<p>也可以把几步合成一道综合算式：$20 - 3 \\cdot 4 = 20 - 12 = 8$（先算乘法）。\n       最后一定要检查答案是否合理。</p>"
   ],
   "examples": [
    {
     "task": "公交车上有 34 人。到站时下去 12 人，又上来 9 人。现在车上有多少人？",
     "steps": [
      "下车后：$34 - 12 = 22$。",
      "上车后：$22 + 9 = 31$。",
      "<strong>车上现在有 31 人。</strong>"
     ]
    },
    {
     "task": "小芳有 2 包贴纸，每包 8 张，另外还有 5 张散的。她一共有多少张贴纸？",
     "steps": [
      "包里的：$2 \\cdot 8 = 16$。",
      "一共：$16 + 5 = 21$。",
      "<strong>小芳一共有 21 张贴纸。</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "平面图形的周长",
   "summary": "三角形、正方形和长方形的周长就是各边长度之和。",
   "theory": [
    "<p>图形的<strong>周长</strong>是围成它的线的长度。把<strong>所有边的长度加起来</strong>就得到周长。\n       周长用字母 $o$ 表示。</p>",
    {
     "fig": "r3-obvod",
     "caption": "长方形有两条长边和两条短边，三角形有三条边。周长是所有边长的和。"
    },
    "<p>边长为 $a, b, c$ 的<strong>三角形</strong>：$o = a + b + c$。<br>\n       边长为 $a$ 的<strong>正方形</strong>：$o = a + a + a + a = 4 \\cdot a$。<br>\n       边长为 $a, b$ 的<strong>长方形</strong>：$o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$。</p>"
   ],
   "examples": [
    {
     "task": "求边长为 $7\\,\\text{cm}$ 的正方形的周长。",
     "steps": [
      "正方形有 4 条相等的边。",
      "$o = 4 \\cdot 7 = 28$。",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "一个长方形的边长是 $9\\,\\text{cm}$ 和 $4\\,\\text{cm}$。它的周长是多少？",
     "steps": [
      "$o = 9 + 4 + 9 + 4$。",
      "$o = 18 + 8 = 26$。",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "长度、质量、容积和时间单位",
   "summary": "从毫米到千米，克和千克，升和分升，从秒到星期。",
   "theory": [
    "<p><strong>长度：</strong>$1\\,\\text{cm} = 10\\,\\text{mm}$，$1\\,\\text{dm} = 10\\,\\text{cm}$，$1\\,\\text{m} = 100\\,\\text{cm}$，\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$。</p>",
    "<p><strong>质量：</strong>$1\\,\\text{kg} = 1\\,000\\,\\text{g}$，$1\\,\\text{t} = 1\\,000\\,\\text{kg}$。<br>\n       <strong>容积：</strong>$1\\,\\text{l} = 10\\,\\text{dl}$，$1\\,\\text{dl} = 100\\,\\text{ml}$，所以 $1\\,\\text{l} = 1\\,000\\,\\text{ml}$。</p>",
    "<p><strong>时间：</strong>$1\\,\\text{min} = 60\\,\\text{s}$，$1\\,\\text{h} = 60\\,\\text{min}$，1 天 = 24 h，1 星期 = 7 天。</p>",
    "<p>换成<strong>较小</strong>的单位时，数会变大（用乘法）；换成<strong>较大</strong>的单位时，数会变小（用除法）。\n       例如 $3\\,\\text{m} = 300\\,\\text{cm}$，$40\\,\\text{mm} = 4\\,\\text{cm}$。</p>"
   ],
   "examples": [
    {
     "task": "把 $2\\,\\text{m}\\ 35\\,\\text{cm}$ 换算成厘米。",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$。",
      "$200 + 35 = 235$。",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "电影 17:40 开始，19:10 结束。电影放了多少分钟？",
     "steps": [
      "从 17:40 到 18:00 是 20 分钟。",
      "从 18:00 到 19:00 是 60 分钟，从 19:00 到 19:10 还有 10 分钟。",
      "$20 + 60 + 10 = 90$。<strong>电影放了 90 分钟。</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "表格和简单数据",
   "summary": "从表格和条形统计图中读取数据，进行比较和求和。",
   "theory": [
    "<p>数据常常写在<strong>表格</strong>里。第一行是名称（例如星期几），下面是数。\n       一家冷饮店记下了每天卖出的冰淇淋数量：</p>\n       <table class=\"tbl\"><tr><th>日期</th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th></tr>\n       <tr><td>冰淇淋</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>同样的数据也可以画成<strong>条形统计图</strong>。条形越高，数越大。</p>",
    {
     "fig": "r3-graf",
     "caption": "最高的条形在周五（18），最低的在周二（8）。周五比周二多卖了 $18 - 8 = 10$ 个冰淇淋。"
    },
    "<p>从数据中可以看出哪里<strong>最多</strong>、哪里<strong>最少</strong>，两个数<strong>相差多少</strong>\n       （用减法），以及<strong>一共</strong>有多少（用加法）。</p>"
   ],
   "examples": [
    {
     "task": "周一和周三一共卖出多少个冰淇淋（看上面的表格）？",
     "steps": [
      "周一 12，周三 15。",
      "$12 + 15 = 27$。",
      "<strong>一共卖出 27 个冰淇淋。</strong>"
     ]
    },
    {
     "task": "周三比周四多卖出多少个冰淇淋？",
     "steps": [
      "周三 15，周四 10。",
      "$15 - 10 = 5$。",
      "<strong>周三多卖出 5 个冰淇淋。</strong>"
     ]
    }
   ],
   "strings": {
    "deň": "星期"
   }
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$，所以 ${@2} : {@3} = {@4}$。${@5} = {@6}$。",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$，所以 ${@2} \\cdot {@3} = {@4}$。${@5} = {@6}$。",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$。验算：${@3} + {@4} = {@5}$。",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$。验算：${@3} - {@4} = {@5}$。",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$。表示有几个{@4}的数字是 {@5}。",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$，再算 ${@2} + {@3} = {@4}$。结果：${@5}$。",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "第 1 步——总价：${@0} \\cdot {@1} = {@2}$ €。第 2 步——找回：${@3} - {@4} = {@5}$ €。",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13，写 3，进 1",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12，写 2，进 1",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "如果想不起来，可以把算式拆开：例如 $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$。",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "数 {@0} 中，表示有几个{@1}的数字是几？",
  "Bez zátvoriek počítaj zľava doprava.": "没有括号时，从左往右算。",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "没有括号，从左往右算：${@0} - {@1} = {@2}$，再算 ${@3} - {@4} = {@5}$。",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "没有括号时要从左往右算。先算 ${@0} - {@1}$，再减去 {@2}。",
  "Cesta vlakom k babke trvala 3 …": "坐火车去奶奶家用了 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "缺少的加数用减法求出来。",
  "Do hrnčeka sa zmestia asi 3 …": "一个杯子大约能装 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "填出缺少的数：$\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "填上正确的符号：$({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "填上合适的单位：{@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "两条长边：$2 \\cdot {@0}$ 等于多少？",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "两条短边：$2 \\cdot {@0}$ 等于多少？",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "两条 {@0} cm 的边一共是 $2 \\cdot {@1} = {@2}$。剩下的两条边一共是 ${@3} - {@4} = {@5}$，一条边是 ${@6} : 2 = {@7}\\,\\text{cm}$。",
  "Dvere sú vysoké asi 2 …": "门大约高 2 …",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "不要把数相加。“多多少”是求差——用大数减去小数。",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "找最小的数（最矮的柱子）。",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "找最大的数（最高的柱子）。",
  "Hľadaj suseda v číselnom rade.": "在数轴上找相邻的数。",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "在 {@0} 的乘法口诀里，找不超过 {@1} 的最大的积。余数必须比 {@2} 小。",
  "Jablko váži asi 150 …": "一个苹果大约重 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "单位 {@0} 在这里太小了：{@1} {@2} 就太少了。",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "单位 {@0} 在这里太大了：{@1} {@2} 就太多了。",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "两条 {@0} cm 的边一共是多少厘米？",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "剩下的两条边一共是多少厘米？算一算 ${@0} - {@1}$。",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "得到了几个十？在这个数后面添一个 0。",
  "Koľko eur stál celý nákup?": "买东西一共花了多少欧元？",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "找回了多少欧元？算一算 ${@0} - {@1}$。",
  "Koľko je ${@0} - {@1}$?": "${@0} - {@1}$ 等于多少？",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "所有包里一共有多少个？",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "剩下的一条边长多少？算一算 ${@0} : 2$。",
  "Koľko minút je od {@0} do {@1}?": "从 {@0} 到 {@1} 是多少分钟？",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "训练一共用了多少分钟？算一算 ${@0} + {@1}$。",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "还剩多少棵树苗？算一算 ${@0} - {@1}$。",
  "Koľko stromčekov záhradník zasadil?": "园丁种了多少棵树苗？",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "三个孩子一共有多少{@0}？算一算 ${@1} + {@2} + {@3}$。",
  "Koľko {@0} má {@1}?": "{@1}有多少{@0}？",
  "Koľko {@0} {@1} {@2}?": "{@2}{@1}了多少{@0}？",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "又有人上车后，车上有多少人？",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "有人下车后，车上还剩多少人？",
  "Koľkokrát je {@0} v čísle {@1}?": "{@1} 里有几个 {@0}？",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "{@2} {@3} 里有几个 {@0} {@1}？",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "哪个数比 {@1} 小 {@0}？",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "哪个数比 {@1} 大 {@0}？",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "哪个数由 {@0} 个{@1}、{@2} 个{@3}和 {@4} 个{@5}组成？",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "不超过 {@1} 的 {@0} 的最大倍数是多少？",
  "Lyžička sirupu má asi 5 …": "一小勺糖浆大约有 5 …",
  "Mravec je dlhý asi 5 …": "蚂蚁大约长 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "最小的数是 {@0}，在{@1}。",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "先算乘除：${@0} \\cdot {@1} = {@2}$，${@3} : {@4} = {@5}$。再算 ${@6} - {@7} = {@8}$。",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "先算乘法：${@0} \\cdot {@1} = {@2}$。再算 ${@3} {@4} {@5} = {@6}$。",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "先减去那几个{@0}：${@1} - {@2}$ 等于多少？",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "先换算较大的单位：${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "先把 {@0} 换算成 {@1}，再加上剩下的部分。",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "先加上那几个{@0}：${@1} + {@2}$ 等于多少？",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "先算出所有包里一共有多少个。",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "先算出种了多少棵树苗。",
  "Najprv vypočítaj, čo je v zátvorke.": "先算括号里的。",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "先算出每个孩子有多少，再全部加起来。",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "先算出买东西一共花了多少钱，再用纸币的钱数减去它。",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "先算括号：${@0} + {@1} = {@2}$。再算 ${@3} : {@4} = {@5}$。",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "先算括号：${@0} - {@1} = {@2}$。再算 ${@3} - {@4} = {@5}$。",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "先算括号：${@0} {@1} {@2} = {@3}$。再算 ${@4} \\cdot {@5} = {@6}$。",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "先算括号：${@0} + {@1}$ 等于多少？",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "先算括号：${@0} - {@1}$ 等于多少？",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "先算括号：${@0} {@1} {@2}$ 等于多少？",
  "Najväčšie číslo je {@0}, a to {@1}.": "最大的数是 {@0}，在{@1}。",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "不超过 {@1} 的 {@0} 的最大倍数是 ${@2} \\cdot {@3} = {@4}$。余数：${@5} - {@6} = {@7}$。所以 ${@8} : {@9} = {@10}$，余 {@11}。",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "你只写了商。在分号后面把余数也写上。",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "你没注意括号。先把括号里的数相加，再做除法。",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "你没注意括号。先算 ${@0} - {@1}$，再用 {@2} 减去它。",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "你没注意括号。括号里的要最先算——比乘法还要先算。",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "找到对应的那一天，读出它旁边的数。",
  "Nákladné auto váži asi 8 …": "一辆卡车大约重 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "先算乘法和除法，再算减法。",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "乘法要先于加法和减法计算。",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "多多少？算一算 ${@0} - {@1}$。",
  "Obdĺžnik a trojuholník s dĺžkami strán": "标有边长的长方形和三角形",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "长方形有 4 条边：两条长边和两条短边。把它们全部加起来。",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "长方形的周长是 ${@0}\\,\\text{cm}$，一条边长 ${@1}\\,\\text{cm}$。另一条边长多少（cm）？",
  "Obvod rozdeľ na 4 rovnaké časti.": "把周长平均分成 4 份。",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "你只把周长分成了两份。正方形有四条相等的边。",
  "Obvod trojuholníka je súčet jeho troch strán.": "三角形的周长是三条边长度的和。",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "正方形的周长是 ${@0}\\,\\text{cm}$。它的边长是多少（cm）？",
  "Obvod: koľko je ${@0} + {@1}$?": "周长：${@0} + {@1}$ 等于多少？",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "用周长减去两条已知的边，再把剩下的除以 2。",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "从 {@0} 到 {@1} 是 {@2} 分钟，从 {@3} 到 {@4} 又是 {@5} 分钟。一共 ${@6} + {@7} = {@8}$ 分钟。",
  "Od {@0} do {@1} je {@2} minút.": "从 {@0} 到 {@1} 是 {@2} 分钟。",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "依次减去百位、十位和个位。用加法检验结果。",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "你只减去了一件东西的价钱。买了 {@0} 件东西，先算出所有东西的总价。",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "{@0} cm 的边你只减了一次。长方形有两条这样的边。",
  "Pi": "周五",
  "Platil": "付了",
  "Platila": "付了",
  "Po": "周一",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "下车后：${@0} - {@1} = {@2}$。上车后：${@3} + {@4} = {@5}$。",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "小窍门：$5 \\cdot {@0} = {@1}$，再加 {@2} 个 {@3}，所以 ${@4} + {@5} = {@6}$。",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "从左边开始比：先比百位，再比十位，最后比个位。",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "再减去那几个{@0}：${@1} - {@2}$ 等于多少？",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "再加上那几个{@0}：${@1} + {@2}$ 等于多少？",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "先数到整点的分钟数，再数整点以后的分钟数。",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "从左往右算：${@0} - {@1}$ 等于多少？",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "你按 100 来算了。时间单位是 $1\\,\\text{{@0}} = {@1}$。",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "你从左往右算了。除法要先于减法：先算 ${@0} : {@1}$。",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "你从左往右算了。乘法要先算：先算 ${@0} \\cdot {@1}$。",
  "Predané zmrzliny": "卖出的冰淇淋",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "前面的数位都相同，就看有几个{@0}：{@1} 和 {@2}。所以 ${@3} {@4} {@5}$。",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "想象一下那个东西。它是小的还是大的？用的时间短还是长？",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "换算：${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "换算：${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "读过的页数",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "再加上另外的：${@0} + {@1}$ 等于多少？",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "依次加上百位、十位和个位，或者用竖式计算。",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "加上剩下的部分：${@0} + {@1}$ 等于多少？",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "加上那几个{@0}：${@1} + {@2}$ 等于多少？",
  "Písomné sčítanie 347 plus 285": "竖式加法 347 加 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "看有几个{@0}：{@1} 和 {@2}。所以 ${@3} {@4} {@5}$。",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "整百的数可以像个位数一样计算：4 个百 + 3 个百 = 7 个百。",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "你少算了一个 {@0} 的倍数。检查一下你加了几次 {@1}。",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "你多算了一个 {@0} 的倍数。检查一下你加了几次 {@1}。",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "两边都要检查：左边先算括号，右边先算乘法。",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "想一想 $1\\,\\text{{@1}}$ 是多少 {@0}。",
  "St": "周三",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "百位写在第一位，十位写在第二位，个位写在第三位。哪一位没有，就写 0。",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "百位是左起第一个数字，个位是最后一个数字。",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "你把边长自己乘自己了。周长是四条边长度的和。",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "你把边长相乘了。周长是围成图形一周的线的长度——要把边长相加。",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "两边看起来很像，但括号改变了运算顺序。把两边分别算出来。",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "把星期一和星期二的数相加：${@0} + {@1}$ 等于多少？",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "把所有的数加起来。先找出能凑成整十的两个数会更方便。",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "你只加了两条边。长方形有四条边——每个长度都要加两次。",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "你直接把题目里的数加起来了。{@0} 和 {@1} 不是孩子们有的个数，而是某个孩子多几个或少几个。先算出每个孩子有多少。",
  "Tabuľka násobilky do 10 krát 10": "10 乘 10 以内的乘法表",
  "Taška zemiakov váži 5 …": "一袋土豆重 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "现在算完：${@0} {@1} {@2}$ 等于多少？",
  "Tlesknutie trvá asi 1 …": "拍一下手大约用 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "这是买东西的总价。还要算出用纸币付钱后找回多少欧元。",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "这只是包里的个数。还要加上另外的 {@0} 个。",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "这是剩下两条边的总长。还要再除以 2。",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "这只是{@0}的个数。问的是三个孩子一共有多少。",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "这是园丁种的树苗数。还要减去枯死的树苗。",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "三角形的边长是 ${@0}\\,\\text{cm}$、${@1}\\,\\text{cm}$ 和 ${@2}\\,\\text{cm}$。它的周长是多少（cm）？",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "训练从 {@0} 开始，到 {@1} 结束。一共用了多少分钟？",
  "Upečené koláče": "烤好的蛋糕",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "枯死的树苗少了，所以要减去，不要加上。",
  "Ut": "周二",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "公共汽车上原来有 {@0} 人。到站后，有 {@1} 人下车，{@2} 人上车。现在车上有多少人？",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "包里的：${@0} \\cdot {@1} = {@2}$。一共：${@3} + {@4} = {@5}$。",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "冷饮店记录了每天卖出多少个冰淇淋。",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "在某一列中，下面的数字更大，你却用大数字减去了小数字。这时要从旁边一列借 1 个十（退位）。",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "面包店记录了每天烤了多少个蛋糕。",
  "V piatok": "星期五",
  "V pondelok": "星期一",
  "V stredu": "星期三",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "这一天的数最小。我们要找最大的。",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "这一天的数最大。我们要找最小的。",
  "V utorok": "星期二",
  "Vo vedre je 10 …": "桶里有 10 …",
  "Vo štvrtok": "星期四",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "做有余数的除法：${@0} : {@1}$。写出商和余数，用分号隔开（例如 4; 1）。",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "计算 $({@0} + {@1}) : {@2}$。",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "计算 $({@0} {@1} {@2}) \\cdot {@3}$。",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "计算 ${@0} - ({@1} - {@2})$。",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "计算 ${@0} - {@1} - {@2}$。",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "计算 ${@0} \\cdot {@1} - {@2} : {@3}$。",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "计算 ${@0} {@1} {@2} \\cdot {@3}$。",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "先算 ${@0} \\cdot {@1}$，然后在后面添一个 0。",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "两边分别计算。左边从括号开始，右边从乘法开始。",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "求长方形的周长（cm）。{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "下车 → 减。上车 → 加。",
  "Vyučovacia hodina trvá 45 …": "一节课 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "两个城市之间的距离是 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "左边：$({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$。右边：${@6} + {@7} = {@8}$。所以 ${@9} {@10} {@11}$。",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "你忘了除法。从 {@0} 中减去的不是 {@1}，而是 ${@2} : {@3}$ 的结果。",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "你忘了十位上的 0。没有它，数字就错位了，变成了另一个数。",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "你忘了进位。一列的和是 10 或更多时，只写个位，把 1 加到左边的下一列。",
  "Zabudol si pripočítať ešte ${@0}$.": "你忘了再加上 ${@0}$。",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "你只算了两条边。正方形有四条一样长的边。",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "种了：${@0} \\cdot {@1} = {@2}$。还剩：${@3} - {@4} = {@5}$。",
  "Zisti, o koľko sa líšia dve susedné čísla.": "看看相邻的两个数相差多少。",
  "Zmení sa počet desiatok.": "十位上的数变了。",
  "Zmení sa počet stoviek.": "百位上的数变了。",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "符号方向反了。从左边开始比——由第一个不同的数位决定（看有几个{@0}）。",
  "Zošit je dlhý asi 30 …": "一本练习本大约长 30 …",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "小莉记录了她每天读了多少页书。",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "余数是 ${@0} - {@1}$。写出商和余数，用分号隔开。",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "余数 {@0} 比除数 {@1} 大，所以 {@3} 里还能再放下一个 {@2}。余数必须总是比除数小。",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "园丁种了 {@0} {@1}树苗，每行 {@2} {@3}。{@4} {@5}。还剩多少棵树苗？",
  "balíčkov": "包",
  "balíčky": "包",
  "deň": "天",
  "gaštan": "颗栗子",
  "gaštanov": "颗栗子",
  "gaštany": "颗栗子",
  "kartičiek": "张卡片",
  "kartičku": "张卡片",
  "kartičky": "张卡片",
  "knihy": "本书",
  "kníh": "本书",
  "koláče": "蛋糕",
  "koláčov": "个蛋糕",
  "lopty": "个球",
  "lôpt": "个球",
  "orech": "个核桃",
  "perá": "支笔",
  "piatok": "星期五",
  "pier": "支笔",
  "podiel; zvyšok": "商; 余数",
  "pondelok": "星期一",
  "predali": "卖出",
  "prečítala Zuzka": "小莉读",
  "radov": "行",
  "rady": "行",
  "stoviek": "百",
  "stovku": "百",
  "stovky": "百",
  "strany": "页数",
  "streda": "星期三",
  "stredu": "星期三",
  "stromček uschol": "棵树苗枯死了",
  "stromčekov": "棵树苗",
  "stromčekov uschlo": "棵树苗枯死了",
  "stromčeky": "棵树苗",
  "stromčeky uschli": "棵树苗枯死了",
  "strán": "页",
  "upiekli v pekárni": "面包店烤",
  "utorok": "星期二",
  "v piatok": "星期五",
  "v pondelok": "星期一",
  "v stredu": "星期三",
  "v utorok": "星期二",
  "vo štvrtok": "星期四",
  "zmrzliny": "冰淇淋",
  "zmrzlín": "个冰淇淋",
  "zošitov": "本练习本",
  "zošity": "本练习本",
  "{@0} je v údajoch číslo {@1}.": "{@0}的数据是 {@1}。",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0}比{@2}少 {@1}，而不是比{@3}少。看清楚要从谁的数量里减。",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0}有 {@1} {@2}，每{@2}里有 {@3} {@4}，另外还有 {@5} {@6}。{@0}一共有多少{@7}？",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0}有 {@1} {@2}。{@3}比{@5}多 {@4}，{@6}比{@8}少 {@7}。他们一共有多少{@9}？",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} 个{@1}乘 {@2} 是 {@3} 个{@4}：${@5} \\cdot {@6} = {@7}$。",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0}{@1} {@2} {@3}，单价 {@4} €。{@0}{@5}一张 {@6} € 的纸币。应该找给{@7}多少欧元？",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}，{@2} {@3}：${@4} - {@5} = {@6}$。",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}：${@1} + {@2} = {@3}$。{@4}：${@5} - {@6} = {@7}$。一共：${@8} + {@9} + {@10} = {@11}$。",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}这五天加起来，{@2}了多少{@1}？",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}{@3}{@2}了多少{@1}？",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}{@3}{@2}的比{@4}多多少{@1}？",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}哪一天{@1}得最少？",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}哪一天{@1}得最多？",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "你把时间当成普通的数来减了。1 小时只有 60 分钟——先数到整点。",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "先算什么？算一算 ${@0} \\cdot {@1}$。",
  "Číselný rad od 0 do 1000": "0 到 1000 的数轴",
  "Čísla klesajú vždy o {@0}: {@1}.": "这些数每次减少 {@0}：{@1}。",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "不要马上把数相加。先把 ${@0}$ 换算成较小的单位 $\\text{{@1}}$。",
  "Čísla rastú vždy o {@0}: {@1}.": "这些数每次增加 {@0}：{@1}。",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "你只是把数相加了。{@0} 个 {@1}，就是乘法。",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "数 {@0} 有 {@1} 个{@2}。那么 ${@3} \\cdot {@4}$ 等于多少？",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "把 {@0} 拆成 {@1}：{@2}。",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "你从反方向读了。个位是最右边的数字。",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "你从反方向读了。百位是左起第一个数字。",
  "čokolád": "块巧克力",
  "čokolády": "块巧克力",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "上车的人让车上的人变多了。要加上他们的人数，不要减。",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "下车的人离开了公共汽车。要减去他们的人数，不要加。",
  "Št": "周四",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "正方形有 4 条相等的边：${@0} : 4 = {@1}\\,\\text{cm}$。",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "正方形的边长是 ${@0}\\,\\text{cm}$。它的周长是多少（cm）？",
  "štvrtok": "星期四",
  "„O koľko viac“ zistíš odčítaním.": "“多多少”要用减法来求。"
 }
});
