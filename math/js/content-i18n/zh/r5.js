/* 中文: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/r5/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "r5-prirodzene": {
   "title": "自然数及其性质",
   "summary": "大数的数级和数位、大小比较、偶数和奇数。",
   "theory": [
    "<p><strong>自然数</strong>是 $1, 2, 3, 4, \\dots$——我们用来数物体的数。最小的自然数\n       是 1，没有最大的自然数：任何一个数加上 1，都会得到它的<strong>后一个数</strong>。\n       比它小 1 的数是它的<strong>前一个数</strong>。</p>",
    "<p>大数的各个数字从右往左每三位分成一<strong>级</strong>（国际写法）：个级、千级、百万级。\n       每一级里都有百位、十位和个位。一个数字表示的值取决于它所在的位置。</p>",
    {
     "fig": "r5-triedy",
     "caption": "在 $3\\,042\\,705$ 中，数字 4 表示 $40\\,000$，因为它在万位上。"
    },
    "<p><strong>偶数</strong>能被 2 整除，个位是 0、2、4、6 或 8。其他的数是\n       <strong>奇数</strong>——个位是 1、3、5、7 或 9。一个数是奇数还是偶数，只看个位数字。</p>"
   ],
   "examples": [
    {
     "task": "用数字 5、0、8、2（每个只用一次）组成最大和最小的四位数。",
     "steps": [
      "最大的：把数字从大到小排列：$8\\,520$。",
      "最小的：从小到大排列，但 0 不能放在最高位：$2\\,058$。"
     ]
    },
    {
     "task": "$499\\,999$ 的后一个数和前一个数分别是多少？",
     "steps": [
      "后一个数：$499\\,999 + 1 = 500\\,000$。",
      "前一个数：$499\\,999 - 1 = 499\\,998$。"
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "近似数（四舍五入）",
   "summary": "四舍五入到十位、百位和千位，估算结果。",
   "theory": [
    "<p><strong>取近似数</strong>时，用最接近的“整”数来代替原来的数。用符号 $\\doteq$ 表示\n       （读作“约等于”）：$3\\,467 \\doteq 3\\,470$（精确到十位）。</p>",
    "<p><strong>规则（四舍五入）：</strong>看要保留的数位<em>右边紧挨着</em>的那个数字。\n       如果是 0、1、2、3 或 4，就<strong>舍去</strong>。如果是 5、6、7、8 或 9，就<strong>进一</strong>。\n       右边的数字都换成 0。</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "移动这个数，观察它离哪个整十数（绿点）和哪个整百数（弧线）最近。"
    },
    "<p><strong>估算：</strong>在精确计算之前，可以先把数取近似值，估计一下结果。\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$。估算能帮我们发现计算中的错误。</p>"
   ],
   "examples": [
    {
     "task": "把 $72\\,649$ 四舍五入到百位。",
     "steps": [
      "百位上是 6，它右边紧挨着的是 4。",
      "4 比 5 小，舍去：百位上仍是 6。",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "把 $5\\,962$ 四舍五入到十位。",
     "steps": [
      "十位上是 6，右边是 2——舍去。",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "如果四舍五入到百位，就是 $6\\,000$，因为百位后面是 6。"
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "罗马数字",
   "summary": "写大数和年份，减法规则，双向转换。",
   "theory": [
    "<p>罗马数字：$\\text{I} = 1$，$\\text{V} = 5$，$\\text{X} = 10$，$\\text{L} = 50$，$\\text{C} = 100$，\n       $\\text{D} = 500$，$\\text{M} = 1\\,000$。通常能用它们写出的最大的数是 $3\\,999 = \\text{MMMCMXCIX}$。</p>",
    "<p><strong>书写规则：</strong></p>\n       <ol><li>符号从大到小书写，把它们的数值相加：$\\text{MDCLX} = 1\\,660$。</li>\n       <li>I、X、C、M 最多只能连写三次。V、L、D 不能重复。</li>\n       <li>较小的符号写在较大的符号前面时要减去。只能是 I、X 或 C，而且只能写在比它大的最近的两个符号前面。</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "六组表示相减的写法。其他组合（例如 IL 或 IC）都是错误的。"
    },
    "<p><strong>转换成罗马数字</strong>时按数位来写：千位、百位、十位、个位。\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$。</p>"
   ],
   "examples": [
    {
     "task": "用罗马数字写出年份 $2\\,026$。",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$。",
      "$2\\,000 = \\text{MM}$，$20 = \\text{XX}$，$6 = \\text{VI}$。",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "$\\text{CDXLIX}$ 表示多少？",
     "steps": [
      "分组：$\\text{CD} = 400$，$\\text{XL} = 40$，$\\text{IX} = 9$。",
      "$400 + 40 + 9 = 449$。",
      "注意：49 不写成 IL，而写成 XLIX。",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "四则运算和运算顺序",
   "summary": "加、减、乘、除，括号和简便计算。",
   "theory": [
    "<p>计算算式时要遵守<strong>运算顺序</strong>：先算括号里的，再算乘法和除法\n       （从左往右），最后算加法和减法（从左往右）。</p>",
    {
     "fig": "r5-poradie",
     "caption": "运算顺序。同一级的运算从左往右计算。"
    },
    "<p><strong>简便计算：</strong>加法和乘法中，可以交换数的位置，也可以改变结合方式：\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$。\n       用乘法分配律也很有帮助：$36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$。</p>",
    "<p><strong>各部分名称：</strong>加数 + 加数 = 和，被减数 − 减数 = 差，因数 · 因数 = 积，\n       被除数 : 除数 = 商。未知数用逆运算来求：如果 $\\square\\cdot 8 = 96$，那么 $\\square = 96 : 8 = 12$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $120 - 6\\cdot(14 - 5)$。",
     "steps": [
      "括号：$14 - 5 = 9$。",
      "乘法：$6\\cdot 9 = 54$。",
      "减法：$120 - 54 = 66$。",
      "<strong>结果：66</strong>"
     ]
    },
    {
     "task": "简便计算 $5\\cdot 63\\cdot 20$。",
     "steps": [
      "先把 $5\\cdot 20 = 100$ 结合起来。",
      "$100\\cdot 63 = 6\\,300$。",
      "<strong>结果：$6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "倍数和因数",
   "summary": "什么是一个数的倍数和因数，怎样找到它们，以及 2、3、5 和 10 的倍数特征。",
   "theory": [
    "<p>一个数分别乘 $1, 2, 3, \\dots$，就得到它的<strong>倍数</strong>。6 的倍数是\n       $6, 12, 18, 24, \\dots$——有无数个。</p>",
    "<p>一个数的<strong>因数</strong>是能把它整除（没有余数）的数。12 的因数是 $1, 2, 3, 4, 6, 12$。\n       可以成对地找：$12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$。1 和这个数本身总是它的因数。</p>",
    {
     "fig": "r5-delitele",
     "caption": "12 个点可以排成 $1\\cdot 12$、$2\\cdot 6$ 和 $3\\cdot 4$ 的长方形。长和宽都是 12 的因数。"
    },
    "<p><strong>倍数特征：</strong>个位是 0、2、4、6、8 的数是 <strong>2</strong> 的倍数；\n       个位是 0 或 5 的数是 <strong>5</strong> 的倍数；个位是 0 的数是 <strong>10</strong> 的倍数；\n       各位数字之和能被 3 整除的数是 <strong>3</strong> 的倍数。</p>"
   ],
   "examples": [
    {
     "task": "找出 18 的所有因数。",
     "steps": [
      "成对地找：$18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$。",
      "4 和 5 不是因数，再往后就重复了。",
      "<strong>因数：1、2、3、6、9、18。</strong>"
     ]
    },
    {
     "task": "$4\\,215$ 能被 3 整除吗？",
     "steps": [
      "各位数字之和：$4 + 2 + 1 + 5 = 12$。",
      "12 能被 3 整除。",
      "<strong>能，$4\\,215$ 能被 3 整除。</strong>（$4\\,215 : 3 = 1\\,405$）"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "分数的初步认识",
   "summary": "整体的一部分，分子和分母，求一个数的几分之几，分数的大小比较。",
   "theory": [
    "<p>把一个整体<strong>平均</strong>分成几份，其中一份就是它的一部分：二分之一 $\\frac{1}{2}$，\n       三分之一 $\\frac{1}{3}$，四分之一 $\\frac{1}{4}$……分数 $\\frac{3}{8}$ 表示：把整体平均分成 8 份，取其中的 3 份。</p>",
    "<p>分数线下面的数是<strong>分母</strong>——表示把整体平均分成了几份。\n       分数线上面的数是<strong>分子</strong>——表示取了几份。</p>",
    {
     "fig": "r5-zlomky",
     "caption": "一块蛋糕的 $\\frac{1}{2}$、$\\frac{1}{4}$ 和 $\\frac{3}{8}$，以及一个长条的 $\\frac{2}{5}$。"
    },
    "<p><strong>求一个数的几分之几：</strong>求 20 的 $\\frac{3}{4}$，先用 20 除以分母（$20 : 4 = 5$，这是四分之一），\n       再乘分子（$5\\cdot 3 = 15$）。<br>\n       <strong>比较大小：</strong>分母相同时，分子大的分数大：$\\frac{5}{7} &gt; \\frac{3}{7}$。\n       分子相同时，分母小的分数大：$\\frac{1}{3} &gt; \\frac{1}{5}$（三分之一比五分之一大）。</p>"
   ],
   "examples": [
    {
     "task": "35 的 $\\frac{2}{5}$ 是多少？",
     "steps": [
      "五分之一：$35 : 5 = 7$。",
      "五分之二：$7\\cdot 2 = 14$。",
      "<strong>35 的 $\\frac{2}{5}$ 是 14。</strong>"
     ]
    },
    {
     "task": "一段路的三分之一长 4 km。这段路全长多少？",
     "steps": [
      "全程是 3 个三分之一。",
      "$3\\cdot 4 = 12$。",
      "<strong>这段路全长 12 km。</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "基本几何图形",
   "summary": "点、直线、射线、线段、圆周和圆。",
   "theory": [
    "<p><strong>点</strong>用大写字母表示（A、B、S）。经过两个不同的点，有且只有一条<strong>直线</strong>——\n       它是直的，没有起点也没有终点。直线用小写字母（$p$）或两个点（直线 $AB$）表示。</p>",
    "<p><strong>射线</strong>有起点，但没有终点：射线 $AB$ 从点 A 出发，经过点 B 一直延伸下去。\n       <strong>线段</strong> $AB$ 是直线上点 A 和点 B 之间的部分，它有两个端点，可以量出长度。</p>",
    {
     "fig": "r5-utvary",
     "caption": "虚线表示线会无限延伸。右边是圆心为 S、半径为 r、直径为 d 的圆。"
    },
    "<p><strong>圆周</strong>是一条线，线上所有的点到圆心 S 的距离都相等——这个距离就是<strong>半径</strong> $r$。\n       <strong>直径</strong> $d$ 经过圆心，长度是半径的两倍：$d = 2\\cdot r$。<strong>圆</strong>（圆面）是圆周连同它里面的全部部分。</p>"
   ],
   "examples": [
    {
     "task": "一个圆的直径是 14 cm。它的半径是多少？",
     "steps": [
      "半径是直径的一半。",
      "$14 : 2 = 7$。",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "4 个点中任意三个都不在同一条直线上，它们能确定多少条线段？",
     "steps": [
      "点 A、B、C、D。每两个点连一条：AB、AC、AD、BC、BD、CD。",
      "<strong>一共 6 条。</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "正方形、长方形和三角形的周长",
   "summary": "计算周长、求未知边长以及不同单位的计算。",
   "theory": [
    "<p>多边形的<strong>周长</strong>是它所有边长的和，用 $o$ 表示。</p>",
    {
     "fig": "r5-obvod",
     "caption": "正方形、长方形和三角形的周长公式。"
    },
    "<p><strong>正方形：</strong>$o = 4\\cdot a$。<strong>长方形：</strong>$o = 2\\cdot(a + b)$。\n       <strong>三角形：</strong>$o = a + b + c$；等边三角形 $o = 3\\cdot a$。</p>",
    "<p>相加之前，所有长度必须用<strong>相同的单位</strong>。如果长方形的边长是 $3\\,\\text{dm}$ 和 $12\\,\\text{cm}$，\n       先换算 $3\\,\\text{dm} = 30\\,\\text{cm}$，再算 $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$。</p>"
   ],
   "examples": [
    {
     "task": "一个三角形的边长是 7 cm、9 cm 和 12 cm。求它的周长。",
     "steps": [
      "$o = 7 + 9 + 12$。",
      "$o = 28\\,\\text{cm}$。"
     ]
    },
    {
     "task": "一个长方形的周长是 50 m，一条边长 15 m。另一条边长多少？",
     "steps": [
      "周长的一半是 $a + b = 50 : 2 = 25$。",
      "$b = 25 - 15 = 10$。",
      "<strong>另一条边长 $10\\,\\text{m}$。</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "长度、质量、容积和时间单位",
   "summary": "单位换算、复名数以及选择合适的单位。",
   "theory": [
    "<p><strong>长度：</strong>km、m、dm、cm、mm。<strong>质量：</strong>t、kg、dag、g。\n       <strong>容积：</strong>hl、l、dl、ml。<strong>时间：</strong>天、小时（h）、分钟（min）、秒（s）。</p>",
    {
     "fig": "r5-jednotky",
     "caption": "单位阶梯。箭头表示一个较大的单位等于多少个较小的单位。"
    },
    "<p><strong>换成较小的单位</strong>用乘法：$3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$。\n       <strong>换成较大的单位</strong>用除法：$4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$。\n       复名数分部分换算：$2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$。</p>",
    "<p>时间要注意：进率不是“十”，而是 <strong>60</strong>（1 小时有 60 分钟，1 分钟有 60 秒），一天有 <strong>24</strong> 小时。</p>"
   ],
   "examples": [
    {
     "task": "把 $3\\,\\text{l}\\ 4\\,\\text{dl}$ 换算成分升。",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$。",
      "$30 + 4 = 34$。",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "电影 18:40 开始，20:15 结束。电影放了多少分钟？",
     "steps": [
      "从 18:40 到 19:00 是 20 分钟。",
      "从 19:00 到 20:00 是 60 分钟，从 20:00 到 20:15 是 15 分钟。",
      "$20 + 60 + 15 = 95$。",
      "<strong>电影放了 95 分钟。</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "解应用题",
   "summary": "多步题、部分与整体、和差问题、进一法。",
   "theory": [
    "<p>解应用题时：<strong>1.</strong> 读题，写下已知什么、求什么；<strong>2.</strong> 想一想\n       按什么顺序计算；<strong>3.</strong> 计算；<strong>4.</strong> 验算或估算；\n       <strong>5.</strong> 用完整的句子写出答案。</p>",
    "<p><strong>线段图</strong>能帮助解决和差问题。如果两个人一共有 50 €，其中一人比另一人多 8 €，\n       先减去相差的数——这样两人就一样多了。</p>",
    {
     "fig": "r5-model",
     "caption": "线段图：$50 - 8 = 42$，$42 : 2 = 21$。弟弟有 21 €，哥哥有 $21 + 8 = 29$ €。"
    },
    "<p>注意<strong>余数</strong>：如果 23 个孩子要坐车，每辆车能坐 4 人，只算 $23 : 4 = 5$（余 3）辆车是不够的。\n       剩下的 3 个孩子还需要一辆车，所以需要 6 辆车。</p>"
   ],
   "examples": [
    {
     "task": "小琳有 120 欧元。她用三分之一买了鞋，又用 25 欧元买了书。她还剩多少欧元？",
     "steps": [
      "120 的三分之一：$120 : 3 = 40$ 欧元。",
      "一共花了 $40 + 25 = 65$ 欧元。",
      "还剩 $120 - 65 = 55$ 欧元。",
      "<strong>答：小琳还剩 55 欧元。</strong>"
     ]
    },
    {
     "task": "爸爸 42 岁，年龄是儿子的三倍。6 年后儿子多少岁？",
     "steps": [
      "儿子现在 $42 : 3 = 14$ 岁。",
      "6 年后：$14 + 6 = 20$。",
      "<strong>答：6 年后儿子 20 岁。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$，所以结果是 $1\\,000\\cdot {@0} = {@1}$。",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$，所以 ${@3} : {@4} = {@5}$。",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$，所以 ${@3}\\cdot {@4} = {@5}$。",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$，所以 $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$。",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$，$\\text{{@2}} = {@3}$。和：${@4} + {@5} = {@6}$（用罗马数字写是 {@7}）。",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$，所以 $b = {@2} - {@3} = {@4}$，另一条边长 ${@5}\\,\\text{{@6}}$。",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$，边长是 ${@2}\\,\\text{{@3}}$。",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$，第三条边长 ${@4}\\,\\text{{@5}}$。",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$，直径是 ${@2}\\,\\text{{@3}}$。",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$，周长是 ${@4}\\,\\text{{@5}}$。",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$，周长是 ${@3}\\,\\text{{@4}}$。",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$，半径是 ${@2}\\,\\text{{@3}}$。",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$（这是 ${@3}$），再算 ${@4}\\cdot {@5} = {@6}$。",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$，余 {@3}。{@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$。其他的数除以 {@3} 都有余数。",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$，${@2} \\doteq {@3}$。估算：${@4} {@5} {@6} = {@7}$。（准确结果是 ${@8}$。）",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "{@1} 的 ${@0}$ 是 ${@2} : {@3} = {@4}$。${@5}$ 是 ${@6}\\cdot {@7} = {@8}$。{@9}。",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$，再加上剩下的部分：${@4} + {@5} = {@6}$。",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$。",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4：舍去，5 – 9：进一。右边的数字都换成 0。",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = 三百零四万二千七百零五",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1}（到十位）</span> · <span class=\"c-accent\">{@2} ≐ {@3}（到百位）</span>",
  "Aké číslo je $\\text{{@0}}$?": "$\\text{{@0}}$ 是什么数？",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "$\\text{{@0}}$ 这一组表示多少？",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "数 ${@1}$ 中的数字 {@0} 表示多少？",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "涂色部分占整体的几分之几？用 a/b 形式的分数表示（例如 2/5）。{@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "长方形的周长是多少（用 {@0} 表示）？",
  "Aký je obvod obdĺžnika v centimetroch?": "长方形的周长是多少厘米？",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "如果没有相差的 8 €，两人的钱就一样多：(50 − 8) : 2 = 21 €。",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "去掉相差的部分：${@0} - {@1} = {@2}$，这是弟弟的钱的 2 倍：${@3} : 2 = {@4}$。{@5} 验算：${@6} + {@7} = {@8}$。",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "点：{@0}。线段：{@1}。一共 {@2} 条。",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "整体被平均分成 {@0} {@1}（分母），{@2}（分子）：${@3}$。",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "整体有 {@0} {@1}：${@2}\\cdot {@3} = {@4}$，即 ${@5}\\,\\text{{@6}}$。",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "整体由 {@0} 个相同的部分组成。用乘法。",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "从布拉迪斯拉发坐火车到科希策大约需要",
  "Cez dva body vieme viesť jedinú priamku.": "经过两个点只能画一条直线。",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "各位数字之和：${@0} = {@1}$，能被 3 整除。",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "各位数字之和：${@0} = {@1}$，不能被 3 整除。",
  "Desatina": "十分之一",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "一天有 24 小时：${@0}\\cdot 24 = {@1}$，再算 ${@2} + {@3} = {@4}$ 小时。",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "天数和小时数不能直接相加。先把 {@0} {@1}换算成小时。",
  "Do hrnčeka sa zmestí asi": "一个杯子大约能装",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "分母是所有部分的个数，而不只是没涂色的部分。",
  "Do vane sa zmestí asi": "一个浴缸大约能装",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "{@1}的{@0}能装 ${@2}\\,\\text{{@3}}$。{@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "填出缺少的数：$\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "填出缺少的数：$\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "第二天走的不是 {@0} km，而是比第一天多 {@1} km。",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "第二天：${@0} + {@1} = {@2}$ km。第三天：${@3} : 2 = {@4}$ km。一共：${@5} + {@6} + {@7} = {@8}$ km。",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "兄弟俩一共有 {@0} {@1}。哥哥比弟弟多 {@2} {@3}。{@4}有多少欧元？",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "排成长方形的十二个点",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "不能用 {@0} 这一对：只有 I 放在 V 和 X 前面、X 放在 L 和 C 前面、C 放在 D 和 M 前面时才表示减。",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "成对的因数：${@0} = {@1}$。因数：{@2}。",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "成对的因数：${@0} = {@1}$。因数：{@2}。这个数只有两个因数。",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "经过两个不同的点，有且只有一条直线。",
  "Dĺžka triedy je asi": "教室的长度大约是",
  "Hmotnosť jablka je asi": "一个苹果的质量大约是",
  "Hmotnosť nákladného auta je asi": "一辆卡车的质量大约是",
  "Hmotnosť žiaka 5. ročníka je asi": "一名五年级学生的体重大约是",
  "Hrúbka zošita je asi": "一本练习本的厚度大约是",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "在 {@0} 的乘法口诀里，找出不超过 {@1} 的最后一个结果。",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "你要找的是{@0}的数，你组成的却是{@1}的数。",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "正好相反：直径是半径的 2 倍，$d = 2\\cdot r$。",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "数 ${@0}$ 能被 {@1} 整除吗？",
  "Je číslo ${@0}$ párne alebo nepárne?": "数 ${@0}$ 是偶数还是奇数？",
  "Jeden deň má 24 hodín.": "一天有 24 小时。",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "一份是 {@0}。{@2} 的 ${@1}$ 是多少？",
  "Koľko eur je {@0} z {@1} eur?": "{@1} 欧元的{@0}是多少欧元？",
  "Koľko eur má mladší brat?": "弟弟有多少欧元？",
  "Koľko eur má starší brat?": "哥哥有多少欧元？",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "用和 {@0} 减去差 {@1}，还剩多少欧元？",
  "Koľko eur {@0} spolu?": "一共{@0}多少欧元？",
  "Koľko eur {@0} zostalo?": "{@0}还剩多少欧元？",
  "Koľko gramov váži celý koláč?": "整个蛋糕重多少克？",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "{@0} {@1}和 {@2} {@3}是多少小时？",
  "Koľko hodín majú {@0} {@1}?": "{@0} {@1}是多少小时？",
  "Koľko je ${@0}$ z čísla {@1}?": "{@1} 的 ${@0}$ 是多少？",
  "Koľko je polovica obvodu, teda $a + b$?": "周长的一半，也就是 $a + b$，是多少？",
  "Koľko kilometrov meria celá cesta?": "全程有多少千米？",
  "Koľko kilometrov prešli druhý deň?": "第二天走了多少千米？",
  "Koľko kilometrov prešli tretí deň?": "第三天走了多少千米？",
  "Koľko kilometrov prešli za tri dni spolu?": "三天一共走了多少千米？",
  "Koľko litrov sa zmestí do celej nádrže?": "整个水箱能装多少升？",
  "Koľko minút trvala celá cesta?": "整个行程用了多少分钟？",
  "Koľko minút uplynie od {@0} do {@1}?": "从 {@0} 到 {@1} 经过了多少分钟？",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "在 1 到 {@1} 之间（包括 {@1}）有多少个 {@0} 的倍数？",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "{@1} 年后{@0}多少岁？",
  "Koľko rokov má {@0} teraz?": "{@0}现在多少岁？",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "有 {@0} 个点，其中任意三个点都不在同一条直线上。它们能确定多少条线段？（每两个点连成一条线段。）",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "有 {@0} 个点，其中任意三个点都不在同一条直线上。它们能确定多少条线段？（每两个点连成一条线段。）",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "要取几个 {@0}，才能得到 {@1}？",
  "Kruh je kružnica aj s celou vnútornou časťou.": "圆是圆周连同它里面的整个部分。",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "圆周只是一条线，圆还包括里面的面。",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "圆的半径是 ${@0}\\,\\text{{@1}}$。它的直径是多少（用 {@2} 表示）？",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "圆的直径是 ${@0}\\,\\text{{@1}}$。它的半径是多少（用 {@2} 表示）？",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "数 ${@0}$ 中，紧挨在{@1}位右边的数字是几？",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "哪两个数相加等于 $1\\,000$？",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "哪两个数相乘正好等于 100？",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "四舍五入到{@1}位后等于 ${@2}$ 的{@0}的自然数是多少？",
  "Ktoré z čísel je násobkom čísla {@0}?": "下面哪个数是 {@0} 的倍数？",
  "Ktoré z čísel je {@0}?": "下面哪个数{@0}？",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "不超过 {@1} 的 {@0} 的最大倍数是多少？",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "数 ${@0}$ 用罗马数字的哪种写法是正确的？",
  "Mama": "妈妈",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "分母相同，由分子决定：${@0} {@1} {@2}$。",
  "Meníš na menšiu jednotku, preto násob.": "换成较小的单位，所以用乘法。",
  "Meníš na väčšiu jednotku, preto deľ.": "换成较大的单位，所以用除法。",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "减数不能用加法求。用被减数减去差。",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "减数用减法求：${@0} - {@1} = {@2}$。",
  "Minul": "花了",
  "Minula": "花了",
  "Mladší má {@0} {@1}.": "弟弟有 {@0} {@1}。",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "四舍五入后得到 ${@0}$ 的数，是从 ${@1}$（进一）到 ${@2}$（舍去）的数。{@3}的是 ${@4}$。",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "农场收了 {@0} {@1}。一个蛋盒能装 {@2} 个鸡蛋。装下所有鸡蛋需要几个蛋盒？",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "换成较小的单位用乘法，换成较大的单位用除法。",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "千位上放不是 0 的最小数字。",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "{@0} {@1}去郊游。一条小船能坐 {@3} {@4}。要让所有孩子同时坐上船，需要几条小船？",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "剩下的还需要一个蛋盒，一共 {@0} {@1}。",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "剩下的还需要一条小船，一共 {@0} {@1}。",
  "Najmenšie": "最小",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "先算到整点，再加上剩下的。1 小时有 60 分钟。",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "先把两个数都换成阿拉伯数字，再相加。",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "先统一单位：${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$。再算 $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$。",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "先算出总钱数的那一部分，再把所有的花费加起来，然后减去。",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "先把每个数四舍五入到百位，再计算。",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "先根据 {@1} {@2}这个条件求出{@0}现在的年龄，再加上 {@3}。{@5} 年后，{@4}的年龄就不再是{@0}的{@7}了。",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "先求出一份是多少（除以分母），再乘以分子。",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "先求出孩子现在多少岁（用除法），再加上去。",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "先算括号，再算乘法，最后算减法。",
  "Najväčšia číslica patrí na miesto tisícov.": "最大的数字放在千位上。",
  "Najväčšie": "最大",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "画一个线段图。用和减去差——剩下的兄弟俩平分。",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "你只写了这个数字本身。数字表示的值取决于它所在的数位——在后面补上正确个数的 0。",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "写出 {@0} 的所有因数。用分号隔开。",
  "Napíš {@0} čísla ${@1}$.": "写出数 ${@1}$ 的{@0}。",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "后一个数比它大 1：${@0} + 1 = {@1}$。",
  "Nasledovník je číslo o 1 väčšie.": "后一个数是比它大 1 的数。",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "未知的被除数用乘法求：${@0}\\cdot {@1} = {@2}$。",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "未知的被除数要用乘法求，不是用除法：用商乘以除数。",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "未知的因数用除法求：${@0} : {@1} = {@2}$。",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "未知的因数要用除法求，不是用乘法：用积除以已知的因数。",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "有些线段你算了两次。线段 AB 和 BA 是同一条——每两个点只算一次。",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "找到要四舍五入到的那一位，再往右看一位。",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "倍数：{@0}，{@1}，{@2}，…，{@3}。最后一个是 ${@4}\\cdot {@5} = {@6}$，下一个 ${@7}$ 已经比 {@8} 大了。一共有 {@9} 个。",
  "Obdĺžnik má dve dvojice rovnakých strán.": "长方形有两组相等的边。",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "长方形的周长是 ${@0}\\,\\text{{@1}}$，一条边长 ${@2}\\,\\text{{@3}}$。另一条边长多少（用 {@4} 表示）？",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "长方形的两条边长是 ${@0}\\,\\text{dm}$ 和 ${@1}\\,\\text{cm}$。求它的周长，用厘米表示。",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "周长是两条相邻边之和的 2 倍。",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "长方形的周长是 $2\\cdot(a + b)$。",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "周长里每条边都算了两次。先除以 2，再减去已知的边。",
  "Obvod štvorca, obdĺžnika a trojuholníka": "正方形、长方形和三角形的周长",
  "Od obvodu odčítaj dĺžky známych strán.": "用周长减去已知边的长度。",
  "Od obvodu {@0} odčítaj {@1}.": "用周长 {@0} 减去 {@1}。",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "你正确地用和减去了差，但兄弟俩还要把剩下的平分成两份。",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "用和 {@0} 减去已知的边 {@1}。",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "从 {@0} 到 {@1} 是 {@2} min，从 {@3} 到 {@4} 是 {@5} min。一共 ${@6} + {@7} = {@8}$ 分钟。",
  "Od {@0} do {@1} uplynulo {@2} minút.": "从 {@0} 到 {@1} 经过了 {@2} 分钟。",
  "Odčítaj": "减去",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "你只减去了一条边。要用周长减去两条已知的边。",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "你只减去了买游戏的钱。别忘了还要减去买书的 {@0} {@1}。",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "你只减去了买书的钱。还要减去买游戏的钱——它是全部钱的{@0}。",
  "Osmina": "八分之一",
  "Otec": "爸爸",
  "Podiel vynásob deliteľom.": "用商乘以除数。",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "半径比直径短，所以直径要除以 2，而不是乘以 2。",
  "Polovica": "二分之一",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "周长的一半是两条相邻边的和。还要减去已知的边。",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "长方形周长的一半是两条相邻边的和。",
  "Polovicu": "二分之一",
  "Polpriamka má jeden začiatočný bod.": "射线有一个起点。",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "射线从一个点开始，只向一个方向无限延伸。",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "射线从一个点开始，向另一个方向无限延伸。",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "用字母给各点命名，再有条理地写出所有的点对：先写含点 A 的，再写含点 B 的……",
  "Poradie operácií": "运算顺序",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "从左边开始比较数字，直到找到第一个不同的数字。",
  "Posledná číslica je {@0}, je párna.": "最后一位数字是 {@0}，是偶数。",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "最后一位数字是 {@0}，既不是 0 也不是 5。",
  "Posledná číslica je {@0}, nie je 0.": "最后一位数字是 {@0}，不是 0。",
  "Posledná číslica je {@0}, nie je párna.": "最后一位数字是 {@0}，不是偶数。",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "最后一位数字是 {@0}，所以这个数是{@1}。",
  "Posledná číslica je {@0}.": "最后一位数字是 {@0}。",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "你知道的是{@0}，所以整体更大。部分要乘，不是除。",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "注意，分母大不代表分数大。把整体分成的份数越多，每一份就越小。",
  "Pozri sa iba na poslednú číslicu.": "只看最后一位数字。",
  "Pozri sa na poslednú číslicu.": "看最后一位数字。",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "看要四舍五入到的那一位右边紧挨着的数字：0 – 4 舍去，5 – 9 进一。",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "仔细看：两个分数的分子和分母都相同。",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "你从左往右算了。乘法要先于减法：先用 {@0} 乘括号的结果，再用 {@1} 去减。",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "你从左往右算了。乘法要先于加法：先算 ${@0}\\cdot {@1}$，再做加法。",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "你算的时候好像没有括号。{@0} 乘的是括号里的整个差——要先算括号。",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "前一个数比它小 1：${@0} - 1 = {@1}$。",
  "Predchodca je číslo o 1 menšie.": "前一个数是比它小 1 的数。",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "想象一下这个东西，再和你熟悉的东西比一比（例如 1 kg 面粉，1 m 大约是大跨一步，1 l 大约是一瓶）。",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "你只把小时换算成了分钟。每分钟还有 60 秒。",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "你只把秒换算成了分钟。1 小时有 60 分钟，所以还要再除以 60。",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "把 ${@0}\\,\\text{dm}$ 换算成厘米。",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "把 ${@0}\\,\\text{{@1}}$ 换算成 {@2}。",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "先把分米换算成厘米（$1\\,\\text{dm} = 10\\,\\text{cm}$），再计算。",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "长度、质量、容积和时间单位的换算",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "能否被 3 整除，不是看最后一位数字。把所有数字加起来，看各位数字之和能不能被 3 整除。",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "能否被 {@0} 整除，只看最后一位数字。再看一遍这个数字，和整除的特征比一比。",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "时间单位不是按十进制换算的：1 小时有 60 分钟，1 分钟有 60 秒。",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "时间单位不是按一百换算的：1 {@0} = 60 {@1}，所以要除以 60。",
  "Priamka je nekonečná na obe strany.": "直线向两边无限延伸。",
  "Priamka má začiatok aj koniec.": "直线有起点也有终点。",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "直线没有端点，射线有起点，线段有起点也有终点。",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "直线没有尽头，所以也没有长度。",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "直线没有起点也没有终点——两头都可以用虚线表示继续延伸。",
  "Priamka, polpriamka, úsečka a kružnica": "直线、射线、线段和圆",
  "Priamku môžeme odmerať pravítkom.": "直线可以用直尺量出长度。",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "直径比半径长，所以半径要乘以 2，而不是除以 2。",
  "Priemer je dvakrát dlhší ako polomer.": "直径的长度是半径的 2 倍。",
  "Priemer kružnice je polovica polomeru.": "圆的直径是半径的一半。",
  "Pripočítaj": "加上",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "再加上 {@0} {@1}：${@2} + {@3}$。",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "加上 {@0} {@1}：${@2} + {@3}$。",
  "Pätina": "五分之一",
  "Pätinu": "五分之一",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "分母相同：比较分子。分子相同：分母越小，每份越大。",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "等边三角形有 3 条相等的边。",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "你把和平均分成了两份，但兄弟俩的钱不一样多。先用和减去差 {@0} {@1}。",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "按数位拆分：{@0}。合起来 ${@1} = {@2}$。",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "把写法分成千、百、十、一几组。像 CM、XC、IV 这样的组合表示减。",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "关键是这一位右边的数字：5 或更大就进一，4 或更小就舍去。",
  "Rozložíme po rádoch: {@0}.": "按数位拆分：{@0}。",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "从右边开始数数位：最后一位是个位，前面依次是十位、百位、千位……",
  "Rímske číslice s odčítaním": "用减法表示的罗马数字",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "S = 百，D = 十，J = 一（每一级内）",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "试着除一除：${@0} : {@1} = {@2}$，余 {@3}。{@4} 的倍数能被整除，没有余数。",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "依次试着用 1、2、3、…… 去除，找出积等于 {@0} 的两个数。",
  "Spolu {@0} {@1}.": "一共 {@0} {@1}。",
  "Spomeň si na malú násobilku čísla {@0}.": "想一想 {@0} 的乘法口诀。",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "算一算这种写法表示的数——大的符号后面的小符号要加，所以会得到另一个数。",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "数出所有的部分——这是分母。再数出涂色的部分——这是分子。",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "你数的是没涂色的部分。分子表示有几份涂了颜色。",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "正确的是 {@0}：{@1}。其他写法不符合规则，或者表示的是别的数。",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "哥哥有 ${@0} + {@1} = {@2}$ {@3}。",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "两条边的单位不同。先把分米换算成厘米，再相加。",
  "Súčin vydeľ známym činiteľom.": "用积除以已知的因数。",
  "Sčítaj ${@0} + {@1}$.": "计算 ${@0} + {@1}$。",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "把两条相邻的边相加：${@0} + {@1}$。",
  "Sčítaj dĺžky všetkých troch strán.": "把三条边的长度都加起来。",
  "Sčítaj hodnoty skupín {@0}.": "把 {@0} 这几组表示的数加起来。",
  "Sčítaj všetky číslice čísla.": "把这个数的各位数字加起来。",
  "Sčítaj známe strany: ${@0} + {@1}$.": "把已知的边相加：${@0} + {@1}$。",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "你只加了两条边。长方形有四条边——两条长 $a$，两条长 $b$。",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "你只加了两条边。长方形有四条边——两条相邻边的和还要乘以 2。",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "你把不同单位的数相加了。先把 {@0} {@1}换算成 {@2}。",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "现在：${@0} : {@1} = {@2}$ {@3}。{@4} 年后：${@6} + {@7} = {@8}$。",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "这是 {@0} 的最后一个倍数，不是倍数的个数。算一算要加几次 {@1} 才能得到它。",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "这是准确结果。题目要的是估算：先把两个数都四舍五入到百位，再计算。",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "这是{@0}现在的年龄。题目问的是 {@1} 年后{@0}多少岁。",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "这是{@0}的钱。问的是{@1}的。",
  "Tretina": "三分之一",
  "Tretinu": "三分之一",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "第三天走的是第二天的一半，不是第一天的一半。",
  "Triedy a rády čísla 3 042 705": "数 3 042 705 的数级和数位",
  "Trojuholník má iba tri strany, nie štyri.": "三角形只有三条边，不是四条。",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "三角形的周长是 ${@0}\\,\\text{{@1}}$。它的两条边分别长 ${@2}\\,\\text{{@3}}$ 和 ${@4}\\,\\text{{@5}}$。第三条边长多少（用 {@6} 表示）？",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "三角形的三条边长是 ${@0}\\,\\text{{@1}}$、${@2}\\,\\text{{@3}}$ 和 ${@4}\\,\\text{{@5}}$。求它的周长，用 {@6} 表示。",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "游客第一天走了 {@0} km。第二天比第一天多走了 {@1} km，第三天走的是第二天的一半。三天一共走了多少千米？",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "篮子里有 {@0} {@1}。其中 ${@2}$ 是红的。红苹果有多少个？",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "篮子里有 {@0} {@1}。其中 ${@2}$ 是红的。红苹果有多少个？",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "火车 {@0} 出发，{@1} 到达终点。路上用了多少分钟？",
  "Vyber správny údaj: {@0} …": "选出正确的数据：{@0} …",
  "Vydeľ ${@0} : {@1}$.": "计算 ${@0} : {@1}$。",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "做除法，看看余数。如果有剩余，就还需要再多一个。",
  "Vydeľ {@0} menovateľom {@1}.": "用 {@0} 除以分母 {@1}。",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "用这个数除以分母，再把结果乘以分子。",
  "Vynásob ${@0}\\cdot {@1}$.": "计算 ${@0}\\cdot {@1}$。",
  "Vynásob {@0} čitateľom {@1}.": "用 {@0} 乘以分子 {@1}。",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "你把边长自己乘自己了——那是正方形的面积。周长是四条边长度的和。",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "你把边长相乘了——那是面积，不是周长。周长是所有边长度的和。",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "计算 $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$。",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "计算 ${@0} - {@1}\\cdot({@2} - {@3})$。",
  "Vypočítaj ${@0}\\cdot 100$.": "计算 ${@0}\\cdot 100$。",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "计算，并用阿拉伯数字写出结果：$\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "求两边分别是 $a = {@0}\\,\\text{{@1}}$ 和 $b = {@2}\\,\\text{{@3}}$ 的长方形的周长（用 {@4} 表示）。",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "求边长是 ${@0}\\,\\text{{@1}}$ 的等边三角形的周长（用 {@2} 表示）。",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "求边长是 ${@0}\\,\\text{{@1}}$ 的正方形的周长（用 {@2} 表示）。",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "每天分别算出来，最后全部加起来。",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "简便计算 $125\\cdot {@0}\\cdot 8$。",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "简便计算 $25\\cdot {@0}\\cdot 4$。",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "简便计算 ${@0}\\cdot {@1}$。",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "计算括号 ${@0} + {@1}$。",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "计算括号 ${@0} - {@1}$。",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "你只算了 ${@0}$，也就是一份。还要乘以分子 {@1}。",
  "Vyučovacia hodina trvá": "一节课的时长是",
  "Vzdialenosť z Bratislavy do Košíc je asi": "从布拉迪斯拉发到科希策的距离大约是",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "把较大的单位换算成较小的单位，再加上另一部分。",
  "Výška dospelého človeka je asi": "成年人的身高大约是",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "你把所有的符号都加起来了。但是小的符号在大的符号前面时要减：例如 IX 是 9，不是 11。",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "所有的数位数都相同，所以从左边开始比较。{@0}的是 ${@1}$。",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "注意看这条线有起点、有终点，还是两样都没有。",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "用数字 {@0} 组成{@1}的四位数。每个数字恰好用一次。",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "你忘了第三天。题目问的是三天的总和。",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "你把概念弄混了：后一个数比它大 1，前一个数比它小 1。你要找的是{@0}。",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "你把分子和分母的作用弄反了：用这个数除以分母，再把结果乘以分子。",
  "Zaokrúhli ${@0}$ na stovky.": "把 ${@0}$ 四舍五入到百位。",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "把两个数都四舍五入到百位，再估算结果：${@0} {@1} {@2}$。",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "把数 ${@0}$ 四舍五入到{@1}位。",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "你只对结果进行了四舍五入。估算时要先把每个数分别四舍五入，再用近似数计算。",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "你四舍五入到了别的数位。四舍五入到{@0}位，就是把{@1}位右边的所有数字都换成 0。",
  "Zaokrúhľovanie na číselnej osi": "数轴上的四舍五入",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "用罗马数字写出数 ${@0}$。",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "把千、百、十、一分别写出来。记住：4 = IV，9 = IX，40 = XL，90 = XC，400 = CD，900 = CM。",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "算一算 {@1} 里能完整地放下几个 {@0}。",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "看看这个数字在哪一位上（个位、十位、百位、千位……）。",
  "Zlomky na koláčoch a páse": "用蛋糕和长条表示分数",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "两个分数不相等——比较它们的分母。",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "两个分数不相等——比较它们的分子。",
  "Zlomky sú rovnaké.": "两个分数相等。",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "符号方向反了。分母相同时，分子大的分数更大。",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "同一个符号不能重复四次，而且只有 I 放在 V 和 X 前面、X 放在 L 和 C 前面、C 放在 D 和 M 前面时才能表示减。",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "I、X、C 不能连着写四次。4、9、40、90、400 和 900 要用减法的写法。",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "I、X、C、M 最多只能连着写三次。不要写四个相同的符号，要用减法。",
  "Zvyšok sa delí na dve rovnaké časti.": "剩下的部分平均分成两份。",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "括号优先。然后算除法和乘法，最后算加法。",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "括号：${@0} + {@1} = {@2}$。除法和乘法：${@3} : {@4} = {@5}$，${@6}\\cdot {@7} = {@8}$。加法：${@9} + {@10} = {@11}$。",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "括号：${@0} - {@1} = {@2}$。乘法：${@3}\\cdot {@4} = {@5}$。减法：${@6} - {@7} = {@8}$。",
  "cesty": "路程",
  "dcéra": "女儿",
  "dcére": "女儿",
  "dcéry": "女儿",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "12 的因数：1, 2, 3, 4, 6, 12",
  "desatina": "十分之一",
  "desatinu": "十分之一",
  "desatiny": "十分之一",
  "dni": "天",
  "dní": "天",
  "euro": "欧元",
  "hodinu": "小时",
  "koláč": "蛋糕",
  "koláča": "蛋糕",
  "lodičiek": "条小船",
  "lodičky": "条小船",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "小的符号在大的符号前面表示减——只有 I 在 V、X 前；X 在 L、C 前；C 在 D、M 前",
  "meria": "长",
  "miliónov": "百万",
  "milióny": "百万",
  "minul": "花了",
  "minula": "花了",
  "mladšieho": "弟弟",
  "mladší": "弟弟",
  "nadol": "舍去",
  "nahor": "进一",
  "najmenšie": "最小",
  "najväčšie": "最大",
  "napr. 1; 2; 4": "例如 1; 2; 4",
  "napr. 2/5": "例如 2/5",
  "napr. MCMXC": "例如 MCMXC",
  "nasledovníka": "后一个数",
  "nepárne": "奇数",
  "nie": "否",
  "nádrže": "水箱",
  "obalov": "个蛋盒",
  "obaly": "个蛋盒",
  "odčítaj": "减去",
  "odčítaš": "减去",
  "osmina": "八分之一",
  "osminu": "八分之一",
  "osminy": "八分之一",
  "polovica": "二分之一",
  "polovice": "二分之一",
  "polovicu": "二分之一",
  "polpriamka": "射线",
  "polpriamka AB": "射线 AB",
  "predchodcu": "前一个数",
  "priamka AB": "直线 AB",
  "priemer d = 2 · r": "直径 d = 2 · r",
  "pripočítaj": "加上",
  "pripočítaš": "加上",
  "párne": "偶数",
  "pásik": "长条",
  "pätina": "五分之一",
  "pätinu": "五分之一",
  "pätiny": "五分之一",
  "päťkrát": "5 倍",
  "rokov": "岁",
  "roky": "岁",
  "rovnaké diely": "等份",
  "rovnakých dielov": "等份",
  "spolu 50 €": "一共 50 €",
  "staršia": "年龄大",
  "staršieho": "哥哥",
  "starší": "哥哥",
  "stotisícov": "十万",
  "syn": "儿子",
  "syna": "儿子",
  "synovi": "儿子",
  "také časti": "个这样的部分",
  "takých častí": "个这样的部分",
  "tretina": "三分之一",
  "tretinu": "三分之一",
  "tretiny": "三分之一",
  "vajec": "个鸡蛋",
  "vyfarbené sú {@0}": "涂色的有 {@0} 份",
  "vyfarbený je 1": "涂色的有 1 份",
  "vyfarbených je {@0}": "涂色的有 {@0} 份",
  "váži": "重",
  "zmestia": "能坐",
  "zmestí": "能坐",
  "zátvorky": "括号",
  "zľava doprava": "从左到右",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} 所以不能，除以它的余数是 {@1}。",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} 所以能：${@1} : {@2} = {@3}$。",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "再{@0}一次 {@1}：${@2} {@3} {@4}$。",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0} 是 $100 {@1} 1$。先乘 100，再把这个数{@2}一次。",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} {@1} {@2}，年龄是{@5}的{@3}。{@7} 年后，{@6}多少岁？",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0}不是 {@1} {@2}。{@4} 的{@3}要用除法求：${@5} : {@6}$。",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@1} 的{@0}：${@2} : {@3} = {@4}$。一共{@5} ${@6} + {@7} = {@8}$。还剩 ${@9} - {@10} = {@11}$ {@12}。",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@1}的{@0}{@2} ${@3}\\,\\text{{@4}}$。{@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0}{@1} {@2} {@3}。买游戏{@5}其中的{@4}，买书{@5} {@6} {@7}。{@8}还剩多少欧元？",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}。其他数据太大或太小。",
  "Úsečka AB začína v bode A a končí v bode B.": "线段 AB 从点 A 开始，到点 B 结束。",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "线段在两个端点处结束，不再向外延伸。",
  "Úsečka má dva krajné body.": "线段有两个端点。",
  "Úsečka má konečnú dĺžku.": "线段的长度是有限的。",
  "Úsečkový model súčtu a rozdielu": "和差问题的线段图",
  "Úsečku môžeme odmerať pravítkom.": "线段可以用直尺量出长度。",
  "áno": "是",
  "úsečka AB": "线段 AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "你把时间当成普通的数来减了。但 1 小时是 60 分钟，不是 100 分钟——先算到整点。",
  "Červené sú {@0} jablká": "红苹果有 {@0} 个",
  "Červených je {@0} jabĺk": "红苹果有 {@0} 个",
  "Čiara má dva krajné body A a B – je to úsečka.": "这条线有两个端点 A 和 B——是线段。",
  "Čiara nemá začiatok ani koniec – je to priamka.": "这条线没有起点也没有终点——是直线。",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "这条线从点 A 开始，向另一边延伸——是射线。",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "分子相同。整体分成的份数越多，每一份就越小：${@0} {@1} {@2}$。",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "图上是什么？虚线表示这条线无限延伸。",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "不能只把数并排写在一起。先把 {@0} {@1}换算成 {@2}，再加上 {@3}。",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "你把数并排写在一起，好像 1 {@0} = 100 {@1}。可是 1 {@2} = 60 {@3}。",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "紧挨在{@0}位右边的数字是 {@1}，所以要{@2}：${@3} \\doteq {@4}$。",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "右边的数字是 {@0}。把 ${@1}$ 四舍五入到{@2}位。",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "{@0}位右边的数字是 5 或更大——这时要进一。",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "{@0}位右边的数字小于 5——这时要舍去。",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "数字 {@0} 表示有 {@0} 个{@1}，所以它的值是 ${@2}\\cdot {@3} = {@4}$。",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "把数字从小到大排列，但 0 不能放在最前面，所以放在第二位：${@0}$。",
  "Číslice zoradíme od najmenšej: ${@0}$.": "把数字从小到大排列：${@0}$。",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "把数字从大到小排列：${@0}$。",
  "Číslo": "数",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "一个数不能以 0 开头——那样就不是四位数了。最高位上放不是 0 的最小数字。",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "数 {@0} 是 $100 {@1} 1$，所以要再{@2}一次整个数 {@3}，而不只是 1。",
  "čiara": "线",
  "Šestina": "六分之一",
  "Štvorec má 4 rovnaké strany.": "正方形有 4 条相等的边。",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "正方形有四条相等的边，所以周长要除以 4，而不是除以 2。",
  "Štvrtina": "四分之一",
  "Štvrtinu": "四分之一",
  "šestina": "六分之一",
  "šestinu": "六分之一",
  "šestiny": "六分之一",
  "štvrtina": "四分之一",
  "štvrtinu": "四分之一",
  "štvrtiny": "四分之一"
 }
});
