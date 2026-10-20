/* 中文: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/r4/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "r4-cisla10000": {
   "title": "10 000 以内及更大的数",
   "summary": "千位、百位、十位和个位；大数的读法、写法和大小比较。",
   "theory": [
    "<p>数里的每个数字都有自己的<strong>位置（数位）</strong>：个位、十位、百位、千位、万位……\n       十个一是一个十，十个十是一百，十个百是一千，十个千是 $10\\,000$。</p>",
    {
     "fig": "r4-rady",
     "caption": "$47\\,385$ 有 4 个万、7 个千、3 个百、8 个十和 5 个一。"
    },
    "<p>写大数时，从右往左每三位留一个空隙：$8\\,206$，$35\\,000$。这样更容易读：\n       <em>八千二百零六</em>，<em>三万五千</em>。</p>",
    "<p><strong>比较大小：</strong>位数多的数大。如果位数相同，就从左往右比较——\n       先比千位，再比百位、十位和个位。例如 $5\\,382 &gt; 5\\,297$，因为 3 个百比 2 个百多。</p>"
   ],
   "examples": [
    {
     "task": "写出这个数：6 个千、0 个百、4 个十和 9 个一。",
     "steps": [
      "百位上写 0，这样各个数字才不会错位。",
      "$6\\,000 + 40 + 9 = 6\\,049$。",
      "<strong>这个数是 $6\\,049$。</strong>"
     ]
    },
    {
     "task": "比较 $7\\,615$ 和 $7\\,651$ 的大小。",
     "steps": [
      "两个数都是四位数，都有 7 个千和 6 个百。",
      "十位：1 比 5 小。",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "竖式加法和减法",
   "summary": "列竖式计算多位数的加法和减法。",
   "theory": [
    "<p>笔算加法时，把数<strong>上下对齐</strong>写，个位对齐个位，十位对齐\n       十位，依此类推。从<strong>右边</strong>的个位开始算。某一列的和超过 9 时，只写个位上的数，\n       向下一列进 1。</p>",
    {
     "fig": "r4-scitanie",
     "caption": "竖式加法 $3\\,476 + 2\\,858 = 6\\,334$。上面的小 1 是进位的数。"
    },
    "<p>笔算减法也从个位算起。如果上面的数字比下面的小，就给它加上 10（向前一位借 1），\n       并在下一列记住 1，把它加到下面的数字上。</p>",
    "<p><strong>验算：</strong>减法的结果可以用加法验算。如果 $5\\,203 - 1\\,868 = 3\\,335$，\n       那么一定有 $3\\,335 + 1\\,868 = 5\\,203$。</p>"
   ],
   "examples": [
    {
     "task": "用竖式计算 $4\\,587 + 3\\,765$。",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "个位：$7 + 5 = 12$，写 2，进 1。十位：$8 + 6 + 1 = 15$，写 5，进 1。",
      "百位：$5 + 7 + 1 = 13$，写 3，进 1。千位：$4 + 3 + 1 = 8$。",
      "<strong>结果：$8\\,352$</strong>"
     ]
    },
    {
     "task": "用竖式计算 $6\\,042 - 2\\,718$。",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "个位：2 比 8 小，所以 $12 - 8 = 4$，记住 1。",
      "十位：$1 + 1 = 2$，$4 - 2 = 2$。百位：0 比 7 小，所以 $10 - 7 = 3$，记住 1。",
      "千位：$2 + 1 = 3$，$6 - 3 = 3$。",
      "<strong>结果：$3\\,324$</strong>。验算：$3\\,324 + 2\\,718 = 6\\,042$。"
     ]
    }
   ],
   "strings": {
    "jednotky": "个位",
    "desiatky": "十位",
    "stovky": "百位",
    "tisíce": "千位",
    "desaťtisíce": "万位"
   }
  },
  "r4-nasobenie": {
   "title": "竖式乘法和除法",
   "summary": "乘一位数和两位数，除以一位数（有余数）。",
   "theory": [
    "<p><strong>笔算乘一位数：</strong>依次乘个位、十位、百位……\n       如果积超过 9，就写下个位上的数，把十位上的数记住，加到下一个积上。</p>",
    "<p><strong>乘两位数：</strong>先用个位去乘，再用十位去乘。第二个部分积\n       要向左移一位来写。最后把部分积相加。</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$：先算 $243\\cdot 2 = 486$，再算 $243\\cdot 3 = 729$，向左移一位（表示 $7\\,290$）。合起来是 $7\\,776$。"
    },
    "<p><strong>笔算除法：</strong>从左边除起。取够除的几位数字，求出商和余数，\n       再落下一位数字，继续除。最后如果还有剩下的，就是<strong>余数</strong>，余数一定比除数小。\n       验算：$\\text{商}\\cdot\\text{除数} + \\text{余数} = \\text{被除数}$。</p>"
   ],
   "examples": [
    {
     "task": "用竖式计算 $1\\,627\\cdot 4$。",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$，写 8，记住 2。$4\\cdot 2 + 2 = 10$，写 0，记住 1。",
      "$4\\cdot 6 + 1 = 25$，写 5，记住 2。$4\\cdot 1 + 2 = 6$。",
      "<strong>结果：$6\\,508$</strong>"
     ]
    },
    {
     "task": "用竖式计算 $947 : 6$。",
     "steps": [
      "$9 : 6 = 1$，余 3。",
      "落下 4：$34 : 6 = 5$，余 4。",
      "落下 7：$47 : 6 = 7$，余 5。",
      "<strong>$947 : 6 = 157$ 余 5。</strong>验算：$157\\cdot 6 + 5 = 947$。"
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "多种运算的应用题",
   "summary": "分几步解决的题目：购物、分组、比较。",
   "theory": [
    "<p>有些应用题一道算式解决不了。我们分步来做：</p>\n       <ol><li>已知什么？求什么？</li><li>为了回答问题，我得先求出什么？</li>\n       <li>算出每一步并写下来。</li><li>写出答案，并检查是否合理。</li></ol>",
    "<p><strong>有用的词语：</strong><em>多……/少……</em>——用加法或减法；\n       <em>是……的几倍/几分之一</em>——用乘法或除法；<em>平均分</em>、<em>每份……</em>——用除法；\n       <em>剩下</em>、<em>找回</em>——用减法。</p>",
    "<p>几步也可以写成一道带括号的综合算式，例如 $50 - 3\\cdot 12 = 50 - 36 = 14$。\n       记住运算顺序：先算乘法和除法，再算加法和减法。</p>"
   ],
   "examples": [
    {
     "task": "妈妈买了 3 本书，每本 12 欧元，付了一张 50 欧元的纸币。应该找回多少欧元？",
     "steps": [
      "先求书的总价：$3\\cdot 12 = 36$ 欧元。",
      "再求找回的钱：$50 - 36 = 14$ 欧元。",
      "合成一道算式：$50 - 3\\cdot 12 = 14$。",
      "<strong>答：应该找回妈妈 14 欧元。</strong>"
     ]
    },
    {
     "task": "4 个班去郊游，每班 23 名学生。他们坐大巴车去，每辆车坐 46 名学生。一共去了几辆车？",
     "steps": [
      "学生人数：$4\\cdot 23 = 92$。",
      "大巴车数：$92 : 46 = 2$。",
      "<strong>答：一共去了 2 辆车。</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "罗马数字",
   "summary": "符号 I、V、X、L、C、D、M 以及用罗马数字写数。",
   "theory": [
    "<p>古罗马人用七个字母来写数。直到今天，我们还能在钟表上、世纪的名称里\n       和建筑物上看到罗马数字。</p>",
    {
     "fig": "r4-rimske",
     "caption": "罗马数字及其数值。"
    },
    "<p><strong>规则：</strong>把各个符号的数值相加：$\\text{XVI} = 10 + 5 + 1 = 16$。同一个符号（I、X、C、M）\n       最多只能连写三次：$\\text{III} = 3$，$\\text{XXX} = 30$。</p>",
    "<p>如果较小的符号写在较大的符号<strong>前面</strong>，就要减去它：$\\text{IV} = 4$，$\\text{IX} = 9$，$\\text{XL} = 40$，\n       $\\text{XC} = 90$。所以 4 不写成 IIII，而写成 IV。</p>"
   ],
   "examples": [
    {
     "task": "罗马数字 $\\text{LXXIV}$ 表示多少？",
     "steps": [
      "拆开来看：$\\text{L} = 50$，$\\text{XX} = 20$，$\\text{IV} = 4$。",
      "$50 + 20 + 4 = 74$。",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "用罗马数字写出 39。",
     "steps": [
      "$39 = 30 + 9$。",
      "$30 = \\text{XXX}$，$9 = \\text{IX}$。",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "角、三角形和四边形",
   "summary": "锐角、直角和钝角；三角形、长方形、正方形和其他四边形。",
   "theory": [
    "<p><strong>角</strong>由从同一个点——<strong>顶点</strong>——出发的两条边组成。\n       直角的样子就像练习本的角。比直角小的角是<strong>锐角</strong>，比直角大\n       （但还不是一条直线）的角是<strong>钝角</strong>。</p>",
    {
     "fig": "r4-uhly",
     "caption": "锐角、直角和钝角。直角用一个小方块标出。"
    },
    "<p><strong>三角形</strong>有 3 条边、3 个顶点和 3 个角。<strong>四边形</strong>有 4 条边、4 个顶点和 4 个角。\n       <strong>长方形</strong>是有 4 个直角的四边形，它的对边一样长。\n       <strong>正方形</strong>是 4 条边都一样长的长方形。</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "正方形和长方形的角都是直角。每个正方形也都是长方形。"
    }
   ],
   "examples": [
    {
     "task": "3:00 时，钟面上时针和分针所成的角是锐角、直角还是钝角？",
     "steps": [
      "短针指向 3，长针指向 12。",
      "它们之间是四分之一个圆——就像练习本的角。",
      "<strong>这是一个直角。</strong>"
     ]
    },
    {
     "task": "一个长方形的一条边长 7 cm，另一条边长 4 cm。另外两条边各长多少？",
     "steps": [
      "长方形的对边一样长。",
      "<strong>另外两条边分别长 7 cm 和 4 cm。</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "周长和面积",
   "summary": "周长是边线的长度，面积是能铺满图形的小正方形的个数。",
   "theory": [
    "<p>图形的<strong>周长</strong>是它边线的长度——所有边长的和。边长为\n       $a$ 和 $b$ 的长方形，周长是 $a + b + a + b$，也就是 $2\\cdot(a + b)$。边长为 $a$ 的正方形，周长是 $4\\cdot a$。</p>",
    "<p><strong>面积</strong>表示图形占了多大的地方。数一数铺满它需要多少个小正方形，就知道面积。\n       边长 1 cm 的小正方形面积是 1 平方厘米（$1\\,\\text{cm}^2$）。</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "4 cm × 3 cm 的长方形：周长是蓝色边线的长度，面积是里面小正方形的个数。"
    },
    "<p>对于长方形，不必一个一个地数小正方形：每行的个数等于一条边的长度，\n       行数等于另一条边的长度。所以面积 $= a\\cdot b$。</p>"
   ],
   "examples": [
    {
     "task": "求边长为 8 cm 和 5 cm 的长方形的周长。",
     "steps": [
      "$o = 8 + 5 + 8 + 5$。",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$。",
      "<strong>周长是 $26\\,\\text{cm}$。</strong>"
     ]
    },
    {
     "task": "一个正方形的周长是 36 cm。它的边长是多少？",
     "steps": [
      "正方形有 4 条一样长的边，合起来是 36 cm。",
      "$36 : 4 = 9$。",
      "<strong>边长是 $9\\,\\text{cm}$。</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "单位换算和数据处理",
   "summary": "长度、质量、容积和时间单位；从表格和统计图中读取数据。",
   "theory": [
    "<p><strong>长度：</strong>$1\\,\\text{km} = 1\\,000\\,\\text{m}$，$1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$，\n       $1\\,\\text{dm} = 10\\,\\text{cm}$，$1\\,\\text{cm} = 10\\,\\text{mm}$。<br>\n       <strong>质量：</strong>$1\\,\\text{t} = 1\\,000\\,\\text{kg}$，$1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$。<br>\n       <strong>容积：</strong>$1\\,\\text{hl} = 100\\,\\text{l}$，$1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$。<br>\n       <strong>时间：</strong>$1\\,\\text{h} = 60\\,\\text{min}$，$1\\,\\text{min} = 60\\,\\text{s}$，1 天 = 24 h。</p>",
    {
     "fig": "r4-jednotky",
     "caption": "把较大的单位换成较小的单位时，数会变大——用乘法。反过来用除法。"
    },
    "<p><strong>数据</strong>常常从表格或条形统计图中读取。条形的高度表示数值——\n       在竖轴上读出。然后就可以用这些数据进行比较（多多少）和求和（一共多少）。</p>"
   ],
   "examples": [
    {
     "task": "4 m 35 cm 是多少厘米？",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$。",
      "$400 + 35 = 435$。",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "$6\\,000\\,\\text{g}$ 是多少千克？",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$，换成较大的单位，所以用除法。",
      "$6\\,000 : 1\\,000 = 6$。",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ],
   "strings": {
    "jablká": "苹果"
   }
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$，所以 ${@3} : {@4} = {@5}$。即 ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$。",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$，所以 ${@3}\\cdot {@4} = {@5}$。即 ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$。",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$。",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$，周长是 ${@4}\\,\\text{{@5}}$。",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$，周长是 ${@2}\\,\\text{{@3}}$。",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$。哪一位上是 0 个，就在那一位写 0。",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$，最前面的 0 不写",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$，写 {@3}",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$，因为 ${@3}\\cdot {@4} = {@5}$，余 {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$。共有 {@2} {@3}投票。",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$，再加上 ${@4}\\,\\text{{@5}}$：${@6} + {@7} = {@8}$。",
  "= 12 štvorčekov = 12 cm²": "= 12 个小方格 = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "如果它有两个直角，那么另外两条边会互相平行，永远不会相交。",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "这个图形叫什么？选出最准确的名称。",
  "Ako zapíšeš rímskymi číslicami {@0}?": "{@0} 用罗马数字怎么写？",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "长方形横着的边长多少（cm）？",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "长方形竖着的边长多少（cm）？",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "罗马数字 $\\text{{@0}}$ 表示什么数？",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "罗马数字 $\\text{{@0}}$ 表示多少？",
  "Akú hodnotu má časť $\\text{{@0}}$?": "部分 $\\text{{@0}}$ 表示多少？",
  "Aký je tento uhol?": "这是什么角？",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "缺少的加数用减法求：${@0} - {@1} = {@2}$。",
  "Desiatky": "十位",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "班上的孩子们投票选出最喜欢的水果。每个孩子只投一次票。",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "从左边开始除，最后的余数必须比 {@0} 小。",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "从左边开始除。取够能除的几位数字，再依次把后面的数字移下来。",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "你只把两条边算进了周长。周长由全部四条边组成。",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "向右（换成较小的单位）用乘法，向左（换成较大的单位）用除法。",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "把第二个积向左移一位（表示 ${@0}$），再相加：${@1} + {@2}$ 等于多少？",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "你没有把第二个部分积向左移一位。你是在乘十位上的数，所以它表示原来的十倍。",
  "Dvakrát": "2 倍",
  "Hodina má 60 minút a minúta 60 sekúnd.": "1 小时有 60 分钟，1 分钟有 60 秒。",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "表示 {@0} 的罗马数字是 {@1}，不是 {@2}。",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "不要把数值相加。“多多少”是求差——用大的数减去小的数。",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "把各个符号表示的数相加。如果小的符号在大的符号前面（例如 IV、IX、XL、XC），就减去它。",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "我们要找减去了多少：${@0} - {@1} = {@2}$。验算：${@3} - {@4} = {@5}$。",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1，V = 5，X = 10，还有 L、C、D、M。",
  "Jakub": "小杰",
  "Je toto tvrdenie pravdivé? „{@0}“": "这句话对吗？“{@0}”",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "一个三角形有 3 个角，两个三角形有 $2\\cdot 3 = 6$ 个角。",
  "Jednotky": "个位",
  "Každý obdĺžnik je štvorec.": "每个长方形都是正方形。",
  "Každý uhol má 2 ramená a 1 vrchol.": "每个角都有 2 条边和 1 个顶点。",
  "Každý štvorec je obdĺžnik.": "每个正方形都是长方形。",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "方格纸上每个小方格的边长是 1 cm。求出涂色长方形的周长（cm）和面积（cm²），写成“周长; 面积”的形式。{@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "需要几辆 {@0} 座的公共汽车，才能让所有人都坐下？",
  "Koľko detí hlasovalo za {@0}?": "有多少个孩子投票给{@0}？",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "他们一共有多少欧元？算一算 ${@0} + {@1} + {@2}$。",
  "Koľko eur má {@0}?": "{@0}有多少欧元？",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "找回了多少欧元？算一算 ${@0} - {@1}$。",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "${@0} + {@1}$（两条相邻的边）等于多少？",
  "Koľko je riadkov?": "一共有几行？",
  "Koľko kilogramov zemiakov zostalo po predaji?": "卖掉以后还剩多少千克土豆？",
  "Koľko pravých uhlov má obdĺžnik?": "长方形有几个直角？",
  "Koľko pravých uhlov má štvorec?": "正方形有几个直角？",
  "Koľko ramien má jeden uhol?": "一个角有几条边？",
  "Koľko uhlov majú spolu dva trojuholníky?": "两个三角形一共有几个角？",
  "Koľko uhlov má trojuholník?": "三角形有几个角？",
  "Koľko vrcholov má štvoruholník?": "四边形有几个顶点？",
  "Koľko vriec po {@0} kg sa z nich naplní?": "能装满几袋 {@0} kg 的土豆？",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "一共有多少人去郊游（学生和老师）？",
  "Koľko štvorčekov je v jednom riadku?": "一行有几个小方格？",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "涂色长方形由多少个 1 cm × 1 cm 的小方格组成？（面积用 cm² 表示。）{@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "{@1} 里有几个 {@0}？",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "数 ${@0}$ 中，表示有几个{@1}的数字是几？",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "哪个数比 ${@1}$ 小 {@0}？",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "哪个数比 ${@1}$ 大 {@0}？",
  "Lucia": "小露",
  "Martin": "小马",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "换成较小的单位——数会变大，用乘法。",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "换成较大的单位——数会变小，用除法。",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "小的符号在大的符号前面时要减，不是加。例如 IV = 5 − 1 = 4。",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "它有 3 条边和 3 个顶点——是三角形。",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "它有 4 个直角，而且所有的边一样长——是正方形。",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "它有 4 个直角，但相邻的边长度不同——是长方形。",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "它有 4 条边，但它的角不是直角——是一般四边形。",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "{@0} 个班去郊游，每班 {@1} 名学生，还有 {@2} 位老师同行。一辆公共汽车有 {@3} 个座位。要订几辆公共汽车，才能让所有人都坐下？",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "先算 ${@0}\\cdot {@1} = {@2}$，再算 ${@3}\\cdot {@4} = {@5}$（向左移一位写，表示 ${@6}$）。相加：${@7} + {@8} = {@9}$。",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "先算总价：${@0}\\cdot {@1} = {@2}$ {@3}。再算找回的钱：${@4} - {@5} = {@6}$。应该找给{@7} {@8} {@9}。",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "先乘个位：${@0}\\cdot {@1}$ 等于多少？",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "先把较大的单位换算成较小的单位，再加上剩下的部分。",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "先换算较大的单位：${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "先算出还剩多少千克，再算出里面能装几个这样的袋子。",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "先算出买东西一共花了多少钱，再用纸币的钱数减去它。",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "把数上下对齐写好，个位对个位，从右边开始加。别忘了进位的数。",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "按千位、百位、十位、个位的顺序依次写出数字。别忘了写 0。",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "从右边开始乘：先乘个位，再乘十位、百位……积满十要进位。",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "方格纸上 4 乘 3 的长方形",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "长方形有两条长边和两条短边。把四条边全部加起来。",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "长方形的对边一样长。",
  "Obdĺžnik má všetky 4 uhly pravé.": "长方形的 4 个角都是直角。",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "长方形有 {@0} {@1}，每行 {@2} 个小方格：${@3}\\cdot {@4} = {@5}$。面积是 ${@6}\\,\\text{cm}^2$。",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "长方形相邻的边可以不一样长，例如 5 cm 和 2 cm。",
  "Obdĺžnik v štvorcovej sieti": "方格纸上的长方形",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "面积：${@0}\\cdot {@1}$ 等于多少？",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "周长是边框的长度，面积是里面小方格的个数。",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "周长不是边上小方格的个数，而是边框的长度。把所有边的长度加起来。",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "周长由 4 条相等的边组成：${@0} : 4 = {@1}$，边长是 ${@2}\\,\\text{{@3}}$。",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "周长由两组这样的边组成：$2\\cdot {@0}$ 等于多少？",
  "Obvod štvorca vydeľ štyrmi.": "用正方形的周长除以 4。",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "周长：$2\\cdot({@0} + {@1})$ 等于多少？",
  "Od menšenca odčítaj rozdiel.": "用被减数减去差。",
  "Od súčtu odčítaj známy sčítanec.": "用和减去已知的加数。",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "从右边开始减。如果上面的数字比较小，就给它加上 10，并记下 1，到下一列再处理。",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "减去 {@0}。注意退位。",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "你只减去了一件东西的价钱。买了 {@0} 件东西，先算出这次购物的总价。",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "锐角比练习本的角小。把这个角和练习本的角比一比。",
  "Ostrý, pravý a tupý uhol": "锐角、直角和钝角",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "先比位数，再从左到右比每一位上的数字。",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "把这个角和练习本的角（直角）比一比。",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "从左边开始逐位比较。第一个不同的数字决定大小：${@0} {@1} {@2}$。",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "再乘十位：${@0}\\cdot {@1}$ 等于多少？",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "看看柱子到达哪条线，读出左边的数。",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "人数：${@0}\\cdot {@1} + {@2} = {@3}$。${@4} : {@5} = {@6}$，余 {@7}。",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "你按 100 来算了。时间单位是 $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$。",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "直角正好是练习本的角的形状，用一个小方块来标记。把这个角和练习本的角比一比。",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "想象一下这个图形，数一数它的顶点、边或角。",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "换算：${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "换算：${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "长度和质量单位的换算",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "读出每根柱子表示的数，再全部加起来。",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "读出两个数，用大的减去小的。",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "加上投给{@0}的票数：现在一共是多少？",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "加上 {@0}。注意进位。",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "把 {@0} 移下来：{@2} 里有几个 {@1}？",
  "Písomné násobenie 243 krát 32": "竖式乘法 243 乘 32",
  "Písomné sčítanie 3476 plus 2858": "竖式加法 3476 加 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "你把所有的土豆都分进了袋子，连卖掉的也算上了。先减去卖掉的。",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "把数分成十位和个位。记住：4 = IV，9 = IX，40 = XL，90 = XC。",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "拆分：{@0}。合起来 ${@1} = \\text{{@2}}$。",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "你从左边开始数数位了。个位是最右边的数字，从那里往左数。",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "数位从右往左读：个位、十位、百位、千位、万位。表示有几个{@0}的数字是 {@1}。",
  "Rímske číslice a ich hodnoty": "罗马数字及其表示的数",
  "Samuel": "小山",
  "Skúška: ${@0} + {@1} = {@2}$.": "验算：${@0} + {@1} = {@2}$。",
  "Spoj obe časti: ako zapíšeš {@0}?": "把两部分合起来：{@0} 怎么写？",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "记住：长方形有 4 个直角，正方形除此之外所有的边还一样长。",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "数一数边，再看看角是不是直角（角上的小方块）。",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "数一数图形的边。三角形有 3 条边，四边形有 4 条。",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "把所有人都算上，包括老师。如果除完以后还剩下人，就还需要一辆车。",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "数出一行有几个小方格，再乘以行数。",
  "Stovky": "百位",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "你把边长自己乘自己了——那是面积。周长是四条边长度的和。",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "你把边长相加了。面积是小方格的个数：每行的小方格数乘以行数。",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "你把边长相乘了——那是面积。周长是边框的长度，要把边长相加。",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "两条边长是 {@0} cm 和 {@1} cm。周长：$2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$。面积：${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$。",
  "Stĺpcový diagram hlasovania": "投票结果条形统计图",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "“{@0}”这根柱子到达 {@1} 这条线。共有 {@2} {@3}投票。",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "把所有部分表示的数加起来。$\\text{{@0}}$ 是什么数？",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "你只加了两条边。长方形有四条边，所以两条相邻边的和还要乘以 2。",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "数 47 385 的数位表",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "同一个符号最多只能连着写三次。不要写四个相同的符号，要用减法，例如 4 = IV。",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "这个图形有直角（角上的小方块），所以它有更准确的名称。",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "这个图形没有直角。正方形和长方形的所有角都是直角。",
  "Tisíce": "千位",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "这是这次购物的总价。还要算出用纸币付钱后找回多少欧元。",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "这是周长——边框的长度。面积是里面小方格的个数。",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "这是水果的种类数。把投给每种水果的孩子人数加起来。",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "这是剩下的千克数。还要算出能装满几袋 {@0} kg 的土豆。",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "这只是{@0}的钱。问的是三个孩子一共有多少。",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "这是一个三角形的角的个数。三角形有两个。",
  "Treba {@0} {@1}.": "需要 {@0} {@1}。",
  "Trikrát": "3 倍",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "三角形有 3 个顶点，所以也有 3 个角。",
  "Trojuholník môže mať dva pravé uhly.": "三角形可以有两个直角。",
  "Tupý uhol je menší ako pravý uhol.": "钝角比直角小。",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "钝角比直角大，比直角小的是锐角。",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "钝角比练习本的角大。把这个角和练习本的角比一比。",
  "Uhol je menší ako roh zošita, je ostrý.": "这个角比练习本的角小，是锐角。",
  "Uhol je väčší ako roh zošita, je tupý.": "这个角比练习本的角大，是钝角。",
  "Uhol má tvar rohu zošita, je pravý.": "这个角和练习本的角形状一样，是直角。",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "在某一列中，因为上面的数字比较小，你就用下面的数字减去了上面的数字。这时要给上面的数字加上 10，并记下 1。",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "商店里有 {@0} kg 土豆。卖掉了 {@1} kg，剩下的装进每袋 {@2} kg 的袋子里。一共装满了几袋？",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "商里少了一个 0。把数字移下来后如果不够除，就在商里写 0，再移下一个数字。",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "你漏掉了 0。如果某一位上没有数，就在那一位写 0，否则数字会错位。",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "先乘个位，再乘十位。把第二个结果向左移一位，再把两个结果相加。",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "你只乘了个位。还要乘十位（{@0}），再把两个部分积相加。",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "求两边分别是 ${@0}\\,\\text{{@1}}$ 和 ${@2}\\,\\text{{@3}}$ 的长方形的周长。结果用 {@4} 表示。",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "求边长是 ${@0}\\,\\text{{@1}}$ 的正方形的周长。结果用 {@2} 表示。",
  "Vypočítaj písomne ${@0} + {@1}$.": "用竖式计算 ${@0} + {@1}$。",
  "Vypočítaj písomne ${@0} - {@1}$.": "用竖式计算 ${@0} - {@1}$。",
  "Vypočítaj písomne ${@0} : {@1}$.": "用竖式计算 ${@0} : {@1}$。",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "用竖式计算 ${@0} : {@1}$。写出商和余数，用分号隔开。",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "用竖式计算 ${@0}\\cdot {@1}$。",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "{@0}：{@1}，{@2}：{@3}。${@4} - {@5} = {@6}$。",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "你忘了记下的 1。借位以后，要把它加到下一列下面的数字上。",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "你忘了进位的数。一列的和是 10 或更多时，要把 1 加到左边的下一列。",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "你忘了再加上 ${@0}\\,\\text{{@1}}$。",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "你忘了加上进位的数。积满十要进位，加到下一位的积上。",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "把周长和面积写成“周长; 面积”的形式。",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "把每一步得到的数依次写出来就是商，最后一步剩下的是余数。",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "把每一步得到的数依次写出来就是商。",
  "Zapíš rímskymi číslicami číslo {@0}.": "用罗马数字写出数 {@0}。",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "用每一列得到的数字写出结果。",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "写出结果：每一列写和的个位，十位进到下一列。",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "写出结果：每个积写个位，十位进到下一位。",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "用数字写出：{@0} 个{@1}、{@2} 个{@3}、{@4} 个{@5}和 {@6} 个{@7}。",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "从最右边的数字——个位——开始，再往左移。",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "算一算这个数里有几个 60。",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "符号 = 只能放在两个相等的数之间。这两个数至少有一位数字不同。",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "符号方向反了。从左边开始比——由第一个不同的数字决定。",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "符号方向反了。位数多的数更大。",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "剩下的人还需要一辆车，所以需要 {@0} {@1}。",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "剩下的土豆：${@0} - {@1} = {@2}$ kg。袋数：${@3} : {@4} = {@5}$。",
  "autobus": "辆公共汽车",
  "autobusy": "辆公共汽车",
  "banány": "香蕉",
  "dag": "dag",
  "desaťtisíce": "万",
  "desaťtisícov": "万",
  "dvakrát": "2 倍",
  "eur": "欧元",
  "eurá": "欧元",
  "hrušky": "梨",
  "jahody": "草莓",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "下面的数字加上记下的 1（${@0} + 1 = {@1}$）。",
  "napr. III": "例如 III",
  "napr. XIV": "例如 XIV",
  "napr. XX": "例如 XX",
  "nepravda": "错",
  "obsah: 3 riadky po 4 štvorčekoch": "面积：3 行，每行 4 个小方格",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "周长：4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "周长; 面积",
  "opíšeme {@0}": "照抄 {@0}",
  "ostrý": "锐角",
  "pravda": "对",
  "pravý": "直角",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "移下 {@0}：${@1} : {@2} = {@3}$，因为 ${@4}\\cdot {@5} = {@6}$，余 {@7}",
  "píšeme {@0}": "写 {@0}",
  "píšeme {@0} a 1 si pamätáme": "写 {@0}，进 1",
  "píšeme {@0} a {@1} si pamätáme": "写 {@0}，进 {@1}",
  "riadky": "行",
  "riadok": "行",
  "slivky": "李子",
  "stovka": "百",
  "tisíce": "千",
  "tisícka": "千",
  "tisícky": "千",
  "tisícok": "千",
  "tisícov": "千",
  "trikrát": "3 倍",
  "tričiek": "件T恤",
  "tričká": "件T恤",
  "tupý": "钝角",
  "uhol": "角",
  "všeobecný štvoruholník": "一般四边形",
  "všetci traja": "他们三个人",
  "všetky tri": "她们三个人",
  "zaplatil": "付了",
  "zaplatila": "付了",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} 一共有多少个孩子投票？",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} 有多少个孩子投票给{@1}？",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} 投票给{@1}的孩子比投票给{@2}的多几个？",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} 商是 ${@1}$，余数是 {@2}。验算：${@3}\\cdot {@4} + {@5} = {@6}$。",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} 结果是 ${@1}$。验算：${@2}\\cdot {@3} = {@4}$。",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} 比 {@1} 小，所以 ${@2} - {@3} = {@4}$，写 {@5}，记下 1",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} 比 {@1} 小，所以计算 ${@2} - {@3}$。结果是多少？",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0}存了 {@1} {@2}。{@3}比{@6}多 {@4} {@5}，{@7}的钱是{@9}的{@8}。{@10}一共有多少欧元？",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0}的钱是{@2}的{@1}，而不是{@3}的{@1}。要用{@4}的钱数去乘。",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0}{@1} {@2} {@3}，单价 {@4} {@5}，{@6}一张 {@7} 欧元的纸币。应该找给{@8}多少欧元？",
  "{@0}. Spolu {@1}.": "{@0}。一共 {@1}。",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}：${@1} + {@2} = {@3}$。{@4}：${@5}\\cdot {@6} = {@7}$。一共：${@8} + {@9} + {@10} = {@11}$ {@12}。",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}：${@1} + {@2} + 1$ 等于多少？（1 是从上一列进上来的。）",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}：${@1} + {@2}$ 等于多少？",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}：${@1}\\cdot {@2} + {@3}$ 等于多少？（{@4} 是从上一位进上来的。）",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}：${@1}\\cdot {@2}$ 等于多少？",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "对，长方形的对边一样长。",
  "Áno, to je vlastnosť štvorca.": "对，这是正方形的性质。",
  "útvar": "图形",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "不要马上把数相加。先把 ${@0}\\,\\text{{@1}}$ 换算成较小的单位 $\\text{{@2}}$。",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "不要把数相加。缺少的加数用减法求：用和减去已知的加数。",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "不要把数相加。要求的数用减法求：用被减数减去差。",
  "Čísla sú rovnaké.": "两个数相等。",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "位数多的数更大，所以 ${@0} {@1} {@2}$。",
  "čerešne": "樱桃",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "正方形确实也是长方形，但我们要找最准确的名称。看看所有的边是不是一样长。",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "正方形有 4 个直角，对边也一样长，所以它是一种特殊的长方形。",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "正方形的周长是 ${@0}\\,\\text{{@1}}$。它的边长是多少（用 {@2} 表示）？",
  "Štvorec má všetky 4 uhly pravé.": "正方形的 4 个角都是直角。",
  "Štvorec má všetky strany rovnako dlhé.": "正方形所有的边都一样长。",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "正方形所有的边都一样长。这里相邻的边长度不同。",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "正方形、长方形、三角形和一般四边形",
  "Štvoruholník má 4 strany a 4 vrcholy.": "四边形有 4 条边和 4 个顶点。",
  "Štyrikrát": "4 倍",
  "štyrikrát": "4 倍",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "“多……”表示加，“是……的几倍”表示乘。然后把所有的加起来。",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "“{@0}”表示乘法，不是加上 {@1}。"
 }
});
