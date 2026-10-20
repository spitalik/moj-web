/* 中文: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/r6/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "r6-desatinne": {
   "title": "小数及小数运算",
   "summary": "小数的写法、大小比较和近似数；加法、减法、乘法和除法。",
   "theory": [
    "<p>在<strong>小数</strong>中，小数点把整数部分和小数部分分开。在 $2.75$ 中有 2 个一、7 个十分之一和 5 个百分之一，\n       即 $2.75 = 2 + \\frac{7}{10} + \\frac{5}{100}$。小数末尾的 0 可以添上，也可以去掉：$2.4 = 2.40$。</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "数轴上从 2 到 3 的一段。两个相邻整数之间有 10 个十分之一、100 个百分之一。"
    },
    "<p><strong>加法和减法：</strong>列竖式时要<em>小数点对齐</em>，空缺的数位补 0。\n       <strong>乘法：</strong>先按整数相乘，积的小数位数等于两个因数的小数位数之和：$1.2\\cdot 0.3 = 0.36$。\n       乘 10、100、1 000，小数点分别向右移动 1、2、3 位；除以它们，就向左移动。</p>",
    "<p><strong>除以自然数：</strong>按通常方法除，商的小数点要和被除数的小数点对齐（除到小数点时就在商里点上小数点）：$7.5 : 3 = 2.5$。\n       <strong>四舍五入：</strong>看要保留的数位后面的那个数字。0 到 4 就舍去，5 到 9 就进一：$3.462 \\doteq 3.5$（精确到十分位）。</p>"
   ],
   "examples": [
    {
     "task": "计算 $12.5 + 3.78$。",
     "steps": [
      "小数点对齐：$12.50 + 3.78$。",
      "按数位相加：$12.50 + 3.78 = 16.28$。",
      "<strong>结果：16.28</strong>"
     ]
    },
    {
     "task": "计算 $2.4\\cdot 1.5$。",
     "steps": [
      "不看小数点：$24\\cdot 15 = 360$。",
      "两个因数一共有 2 位小数，所以积是 $3.60 = 3.6$。",
      "<strong>结果：3.6</strong>"
     ]
    }
   ],
   "strings": {
    "desatiny": "十分位"
   }
  },
  "r6-zlomky": {
   "title": "分数及其基本应用",
   "summary": "什么是分数，整体的一部分，约分和扩分，化成小数，大小比较。",
   "theory": [
    "<p><strong>分数</strong> $\\frac{a}{b}$ 表示整体的一部分：把整体平均分成 $b$ 份（<em>分母</em>），取其中的 $a$ 份（<em>分子</em>）。\n       分数线表示除法：$\\frac{3}{4} = 3 : 4 = 0.75$。</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "圆中涂色的部分：二分之一、四分之三和八分之三。"
    },
    "<p><strong>求一个数的几分之几：</strong>求 20 的 $\\frac{3}{4}$，用 20 除以分母，再乘分子：$20 : 4 = 5$，$5\\cdot 3 = 15$。</p>",
    "<p><strong>扩分和约分：</strong>分子和分母同时乘或除以同一个数（0 除外），分数的大小不变：\n       $\\frac{12}{18} = \\frac{2}{3}$（分子分母同时除以 6）。不能再约分的分数叫作<em>最简分数</em>。\n       比较两个分数时，最简单的方法是先把它们通分。</p>"
   ],
   "examples": [
    {
     "task": "35 的 $\\frac{2}{5}$ 是多少？",
     "steps": [
      "五分之一：$35 : 5 = 7$。",
      "五分之二：$7\\cdot 2 = 14$。",
      "<strong>结果：14</strong>"
     ]
    },
    {
     "task": "比较 $\\frac{3}{4}$ 和 $\\frac{5}{6}$ 的大小。",
     "steps": [
      "公分母是 12：$\\frac{3}{4} = \\frac{9}{12}$，$\\frac{5}{6} = \\frac{10}{12}$。",
      "$9 &lt; 10$，所以 $\\frac{3}{4} &lt; \\frac{5}{6}$。"
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "整除、质数和合数",
   "summary": "因数和倍数，整除的特征，质数，合数和分解质因数。",
   "theory": [
    "<p>如果 $a : b$ 没有余数，就说 $a$ 能被 $b$ <strong>整除</strong>。这时 $b$ 是 $a$ 的<em>因数</em>，$a$ 是 $b$ 的<em>倍数</em>。\n       例如 12 的因数是 1、2、3、4、6 和 12。</p>",
    "<p><strong>整除的特征。</strong>一个数能被</p>\n       <ul><li><strong>2</strong> 整除，如果它的个位是偶数（0、2、4、6、8），</li>\n       <li><strong>3</strong> 整除，如果它的各位数字之和能被 3 整除；<strong>9</strong> 整除，如果各位数字之和能被 9 整除，</li>\n       <li><strong>4</strong> 整除，如果它的末两位组成的数能被 4 整除，</li>\n       <li><strong>5</strong> 整除，如果个位是 0 或 5；<strong>10</strong> 整除，如果个位是 0，</li>\n       <li><strong>6</strong> 整除，如果它同时能被 2 和 3 整除。</li></ul>",
    "<p><strong>质数</strong>是只有两个因数（1 和它本身）的自然数（2、3、5、7、11、……）。\n       <strong>合数</strong>有两个以上的因数（4、6、8、9、……）。1 既不是质数，也不是合数。\n       每个合数都能写成几个质数（<em>质因数</em>）相乘的形式：$60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$。</p>",
    {
     "fig": "r6-eratosten",
     "caption": "埃拉托色尼筛法：在 1 到 60 中划去 2、3、5 和 7 的倍数（它们本身除外）。剩下的就是质数，用颜色标出。"
    }
   ],
   "examples": [
    {
     "task": "4 716 能被 3 整除吗？能被 4 整除吗？",
     "steps": [
      "各位数字之和：$4 + 7 + 1 + 6 = 18$，18 能被 3 整除，所以<strong>能</strong>。",
      "末两位是 16，$16 : 4 = 4$，所以也能被 4 整除：<strong>能</strong>。"
     ]
    },
    {
     "task": "把 90 分解质因数。",
     "steps": [
      "$90 : 2 = 45$，$45 : 3 = 15$，$15 : 3 = 5$，5 是质数。",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "最大公因数和最小公倍数",
   "summary": "用分解质因数求最大公因数和最小公倍数，互质数和应用题。",
   "theory": [
    "<p>$a$、$b$ 的<strong>最大公因数</strong>——这里记作 $D(a, b)$——是能同时整除这两个数的最大的数。\n       <strong>最小公倍数</strong>——这里记作 $n(a, b)$——是这两个数公有的倍数中最小的非零数。</p>",
    {
     "fig": "r6-strom",
     "caption": "把 60 和 84 分解质因数。公有的质因数是 2、2 和 3，所以 D(60, 84) = 12；n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420。"
    },
    "<p><strong>用分解质因数的方法：</strong>把两个数都分解质因数。最大公因数是<em>公有</em>质因数的积（每个质因数取在两个数中都出现的次数）。\n       最小公倍数是至少在一个数中出现的<em>所有</em>质因数的积（每个质因数取它出现次数较多的那个数中的次数）。\n       一个有用的检验：$D(a, b)\\cdot n(a, b) = a\\cdot b$。</p>",
    "<p>最大公因数是 1 的两个数叫作<strong>互质数</strong>（例如 8 和 15）。如果它们有大于 1 的公因数，就<strong>不互质</strong>。\n       把东西分成尽可能大的相等部分时用最大公因数；求重复出现的事情什么时候再次同时发生时用最小公倍数。</p>"
   ],
   "examples": [
    {
     "task": "求 $D(24, 36)$ 和 $n(24, 36)$。",
     "steps": [
      "$24 = 2^3\\cdot 3$，$36 = 2^2\\cdot 3^2$。",
      "最大公因数：$2^2\\cdot 3 = 12$。",
      "最小公倍数：$2^3\\cdot 3^2 = 72$。",
      "检验：$12\\cdot 72 = 864 = 24\\cdot 36$。"
     ]
    },
    {
     "task": "两个红绿灯同时变成绿灯。第一个的变色周期是 40 秒，第二个是 60 秒。再过多少秒它们会再次同时开始新的周期？",
     "steps": [
      "求最小公倍数：$n(40, 60)$。",
      "$40 = 2^3\\cdot 5$，$60 = 2^2\\cdot 3\\cdot 5$，所以 $n = 2^3\\cdot 3\\cdot 5 = 120$。",
      "<strong>再过 120 秒（2 分钟）。</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "整数和负数",
   "summary": "数轴上的正数和负数，相反数，绝对值，大小比较，加法和减法。",
   "theory": [
    "<p><strong>整数</strong>是 $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ 负数可以用来表示零下的温度（$-5\\,{}^\\circ\\mathrm{C}$）、\n       欠款或低于海平面的海拔。0 既不是正数，也不是负数。</p>",
    {
     "fig": "r6-os-cele",
     "caption": "4 和 −4 互为相反数：它们离 0 的距离相等，分别在 0 的两侧。它们的绝对值都是 4。"
    },
    "<p>$a$ 的<strong>相反数</strong>是 $-a$（4 的相反数是 $-4$，$-7$ 的相反数是 7）。<strong>绝对值</strong> $|a|$ 是这个数到 0 的距离：$|-6| = 6$，$|6| = 6$。\n       <strong>比较大小：</strong>在数轴上，右边的数总比左边的大。所以 $-2 &gt; -5$，每个负数都比 0 小。</p>",
    "<p><strong>加法和减法：</strong>加一个正数就是在数轴上向右移动，加一个负数就是向左移动。\n       减去一个数等于加上它的相反数：$3 - (-4) = 3 + 4 = 7$，$-2 - 5 = -2 + (-5) = -7$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $-8 + 3$。",
     "steps": [
      "从 $-8$ 出发，向右移动 3。",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "早上气温是 $-6\\,{}^\\circ\\mathrm{C}$，中午是 $2\\,{}^\\circ\\mathrm{C}$。气温升高了多少度？",
     "steps": [
      "温差：$2 - (-6) = 2 + 6 = 8$。",
      "<strong>气温升高了 8 °C。</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "角和角的度量",
   "summary": "角的分类，量角器，度和分，邻补角和对顶角，角的计算。",
   "theory": [
    "<p><strong>角</strong>由两条有公共端点（<em>顶点</em>）的射线（<em>边</em>）组成。角的大小用<strong>度</strong>来度量；\n       1 度等于 60 分：$1^\\circ = 60'$。角用希腊字母 $\\alpha, \\beta, \\gamma$ 或记号 $\\angle AVB$ 表示。</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "锐角小于 90°，直角等于 90°，钝角在 90° 和 180° 之间，平角等于 180°。"
    },
    "<p><strong>用量角器量角：</strong>量角器的中心对准角的顶点，0 刻度线对准角的一条边，再看另一条边所对的刻度。</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "量角器放在一个 50° 的角上。"
    },
    "<p><strong>邻补角</strong>有一条公共边，另外两条边组成一条直线；它们的和是 $180^\\circ$。\n       <strong>对顶角</strong>是两条直线相交时相对的两个角，它们相等。\n       角相加时，度和分分别相加；满 60 分就换成 1 度。</p>"
   ],
   "examples": [
    {
     "task": "角 $\\alpha$ 是 $48^\\circ$。它的邻补角是多少度？",
     "steps": [
      "邻补角的和是 $180^\\circ$。",
      "$180^\\circ - 48^\\circ = 132^\\circ$。",
      "<strong>邻补角是 132°。</strong>"
     ]
    },
    {
     "task": "计算 $35^\\circ\\,40' + 27^\\circ\\,35'$。",
     "steps": [
      "度：$35 + 27 = 62$，分：$40 + 35 = 75$。",
      "$75' = 1^\\circ\\,15'$，所以和是 $63^\\circ\\,15'$。"
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "三角形及其性质",
   "summary": "三角形的内角和，按边和按角分类，三角形的三边关系。",
   "theory": [
    "<p><strong>三角形</strong> $ABC$ 有三个顶点、三条边 $a = |BC|$、$b = |AC|$、$c = |AB|$ 和三个内角 $\\alpha, \\beta, \\gamma$。\n       任何三角形的<strong>内角和</strong>都是 $\\alpha + \\beta + \\gamma = 180^\\circ$。</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "上面按边分类（短线标记表示相等的边），下面按角分类。"
    },
    "<p><strong>按边分：</strong>不等边三角形（三条边都不相等）、等腰三角形（两条边——腰——相等，两个底角相等）、\n       等边三角形（三条边都相等，每个角都是 $60^\\circ$）。\n       <strong>按角分：</strong>锐角三角形（三个角都是锐角）、直角三角形（有一个角是直角）、钝角三角形（有一个角是钝角）。</p>",
    "<p><strong>三角形的三边关系：</strong>任意两边长度之和总是大于第三边。\n       只需检验两条较短的边之和是否大于最长的边。例如边长 3 cm、4 cm 和 8 cm 不能组成三角形，因为 $3 + 4 &lt; 8$。</p>"
   ],
   "examples": [
    {
     "task": "在三角形中，$\\alpha = 52^\\circ$，$\\beta = 71^\\circ$。求 $\\gamma$。",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$。",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "边长为 5 cm、6 cm 和 10 cm 能组成三角形吗？",
     "steps": [
      "两条较短的边：$5 + 6 = 11$。",
      "$11 &gt; 10$，满足三边关系。",
      "<strong>能。</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "正方形和长方形的周长与面积",
   "summary": "周长和面积公式，求未知边长，面积单位及其换算。",
   "theory": [
    "<p><strong>周长</strong>是图形边界的长度，用长度单位（mm、cm、m）度量。<strong>面积</strong>表示图形里能放下多少个边长为 1 个单位的\n       小正方形；用面积单位（$\\text{mm}^2$、$\\text{cm}^2$、$\\text{m}^2$）度量。</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "5 cm × 3 cm 的长方形里能放 3 行，每行 5 个面积为 1 cm² 的小正方形，一共 15 cm²。"
    },
    "<p>边长为 $a$、$b$ 的<strong>长方形</strong>：$o = 2\\cdot(a + b)$，$S = a\\cdot b$。\n       边长为 $a$ 的<strong>正方形</strong>：$o = 4\\cdot a$，$S = a\\cdot a = a^2$。\n       如果知道长方形的面积和一条边，用除法求另一条边：$b = S : a$。</p>",
    "<p><strong>面积单位：</strong>$1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$，$1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$，$1\\,\\text{m}^2 = 100\\,\\text{dm}^2$。\n       相邻面积单位之间的进率是 100，而不是 10，因为边长 1 cm 的正方形里有 $10\\cdot 10$ 个边长 1 mm 的小正方形。</p>"
   ],
   "examples": [
    {
     "task": "一个花园是 14 m × 9 m 的长方形。围篱笆需要多少米铁丝网？花园的面积是多少？",
     "steps": [
      "周长：$o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$。",
      "面积：$S = 14\\cdot 9 = 126\\,\\text{m}^2$。",
      "<strong>需要 46 m 铁丝网，花园面积是 126 m²。</strong>"
     ]
    },
    {
     "task": "一个正方形的周长是 36 cm。它的面积是多少？",
     "steps": [
      "边长：$a = 36 : 4 = 9\\,\\text{cm}$。",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$。"
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "轴对称",
   "summary": "轴对称中点和图形的像，轴对称图形及其对称轴。",
   "theory": [
    "<p>以 $o$ 为对称轴的<strong>轴对称</strong>，把每个点 $A$ 对应到它的<em>像</em> $A'$，使线段 $AA'$ 垂直于对称轴，\n       并且被对称轴平分。所以点 $A$ 和它的像到对称轴的距离相等，分别在轴的两侧。对称轴上的点的像就是它自己。</p>",
    {
     "fig": "r6-osova",
     "caption": "蓝色图形和它关于轴 o 的像（绿色）。点 A 在轴左边 4 格，它的像 A′ 在轴右边 4 格。"
    },
    "<p>画图形的像时，先画出各个顶点的像，再把它们连起来。像和原图形的形状、大小都相同，只是像镜子里一样“翻转”了。</p>",
    "<p>如果存在一条直线，使图形关于它的像就是图形自己（沿这条线把纸对折，两半完全重合），这个图形就是<strong>轴对称图形</strong>。\n       这条直线叫作<em>对称轴</em>。正方形有 4 条对称轴，长方形有 2 条，等边三角形有 3 条，等腰三角形有 1 条，圆有无数条。</p>"
   ],
   "examples": [
    {
     "task": "对称轴 $o$ 是第 6 列上的一条竖直线。点 $A$ 在第 2 列。它的像在第几列？",
     "steps": [
      "点 $A$ 离对称轴 $6 - 2 = 4$ 列。",
      "像在另一侧 4 列处：$6 + 4 = 10$。",
      "<strong>像在第 10 列。</strong>"
     ]
    },
    {
     "task": "不是正方形的长方形有几条对称轴？",
     "steps": [
      "对称轴经过两条对边的中点——这样的线有两条。",
      "对角线不是对称轴：沿它对折后，两半不重合。",
      "<strong>2 条。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$，所以要除以 100：${@2} : 100 = {@3}\\,\\text{{@4}}^2$。",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$，所以 ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$。",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$，所以 ${@0}^\\circ = {@1}'$，合起来 ${@2}' + {@3}' = {@4}'$。",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$，所以 $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$。",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$，能画出三角形。",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$，不能画出三角形。",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$（向右移 {@3}）。",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$（向左移 {@3}）。",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$，余 {@2}。所以 ${@3}' = {@4}$。",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ 和 ${@2} = {@3}$ 没有公共的质因数，$D({@4}, {@5}) = 1$。它们互质。",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$，${@2} = {@3}$。最大公因数是公共质因数的积：$D({@4}, {@5}) = {@6}{@7}$。",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$，所以除了 1 和 {@3}，它还有因数 {@4}。它是合数。",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$。晚上的气温是 {@4} °C。",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$，$|{@2}| = {@3}$，所以和是 ${@4} + {@5} = {@6}$。",
  "4 dieliky": "4 小格",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "绝对值是到 0 的距离，所以它永远不是负数。",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "绝对值永远不是负数。先求出每个数到 0 的距离，再相加。",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "如果分有 60 或更多，就把 60 分换成 1 度。",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "如果两条较短边的和等于最长边，三条边就会落在同一条直线上，围不成三角形。",
  "Aká dlhá je strana štvorca (v cm)?": "正方形的边长是多少（cm）？",
  "Aké je číslo opačné k číslu {@0}?": "{@0} 的相反数是多少？",
  "Aké je číslo {@0}?": "数 {@0} 是什么数？",
  "Aký bude čitateľ rozšíreného zlomku?": "扩分后的分数的分子是多少？",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "{@0} 和 {@1} 的最小公倍数是多少？",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "{@0} 和 {@1} 的最大公因数是多少？",
  "Aký je obsah štvorca (v cm²)?": "正方形的面积是多少（cm²）？",
  "Aký je obvod (v {@0})?": "周长是多少（用 {@0} 表示）？",
  "Aký je obvod štvorca (v cm)?": "正方形的周长是多少（cm）？",
  "Aký je súčet dvoch susedných strán?": "两条相邻边的和是多少？",
  "Aký je súčet známych číslic?": "已知数字的和是多少？",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "${@0}^\\circ$ 的角是什么角？",
  "Aký veľký je jeden uhol pri základni?": "一个底角是多少度？",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "分数 $\\frac{{@0}}{{@1}}$ 要乘以几来扩分，分母才是 {@2}？",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "点 $A$ 到对称轴的距离是 $|{@0} - {@1}| = {@2}$ {@3}。像在对称轴另一侧同样远的地方：${@4} {@5} {@6} = {@7}$。",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "整数部分和小数部分不能分开乘——小数部分会进到整数部分。先去掉小数点相乘，再点上小数点。",
  "Ciferný súčet je {@0}, je deliteľný 3.": "各位数字之和是 {@0}，能被 3 整除。",
  "Ciferný súčet je {@0}, je deliteľný 9.": "各位数字之和是 {@0}，能被 9 整除。",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "各位数字之和是 {@0}，不能被 3 整除。",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "各位数字之和是 {@0}，不能被 9 整除。",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "{@0} 的因数是 {@1}。一共有 {@2} 个。",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "所有的数都有因数 1。有大于 1 的公因数的两个数不互质。",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "像整数除法一样计算，除到被除数的小数点时，在商里点上小数点：${@0} : {@1} = {@2}$。验算：${@3}\\cdot {@4} = {@5}$。",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "依次用质数去除：${@0}$。所以 ${@1} = {@2}{@3}$。",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "小数点必须上下对齐。缺少的位上补 0。",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "从最高位开始依次除。除到被除数的小数点时，在结果里也点上小数点。",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "用能整除这个数的最小质数（2、3、5、7、……）去除，再继续除商，直到得到 1。",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "填上正确的符号：$\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "算出第三个角，再看最大的那个角。",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "按边和按角分类的三角形",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "两条较短边：${@0} + {@1} = {@2}$，最长边是 {@3}。",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "有两条边一样长，是等腰三角形。",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "两条丝带分别长 {@0} cm 和 {@1} cm。要把它们剪成同样长的小段，没有剩余，并且每段尽可能长（整厘米）。每段长多少厘米？",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "三条边分别是 {@0} cm、{@1} cm 和 {@2} cm，能画出三角形吗？",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "每段的长度必须是两个长度的因数。哪个公因数最大？",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "每段的长度既要整除 {@0}，又要整除 {@1}，还要尽可能大，所以要求 $D({@2}, {@3})$。",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "找出乘积等于这个数的数对：1 和它本身，然后 2 和……",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "求最小公倍数：${@0} = {@1}$，${@2} = {@3}$，$n({@4}, {@5}) = {@6} = {@7}$。两条线路 {@8} 分钟后再次同时发车，也就是 {@9}:{@10}。",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "找一个自己乘自己等于 {@0} 的数：$a = {@1}\\,\\text{cm}$。周长：$o = 4\\cdot {@2} = {@3}\\,\\text{cm}$。",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "只有等边三角形有 3 条对称轴。等腰三角形只有两条边相等。",
  "Je menší ako 90°, preto je ostrý.": "它小于 90°，所以是锐角。",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "它是偶数，并且各位数字之和 {@0} 能被 3 整除。",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "它是偶数，但各位数字之和 {@0} 不能被 3 整除。",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "大写印刷体字母 <strong style=\"font-size:1.6em\">{@0}</strong>（不带衬线的简单字形）是轴对称图形吗？",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "它大于 90° 且小于 180°，所以是钝角。",
  "Je číslo {@0} deliteľné číslom {@1}?": "{@0} 能被 {@1} 整除吗？",
  "Jeden kúsok bude merať {@0} cm.": "每段长 {@0} cm。",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "1 度是 60 分，不是 100 分——要用分数除以 60。",
  "Jeden stupeň má 60 minút, nie 100.": "1 度是 60 分，不是 100 分。",
  "Jeden stupeň má 60 minút.": "1 度是 60 分。",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "检验：最大公因数 · 最小公倍数 = {@0} · {@1}。",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "平行四边形没有对称轴。沿任何一条直线对折，两边都不能完全重合。",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "菱形有 2 条对称轴：它的两条对角线。",
  "Koľko celých stupňov je v ${@0}'$?": "${@0}'$ 里有多少个整度？",
  "Koľko deliteľov má číslo {@0}?": "{@0} 有几个因数？",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "因数 ${@0}$ 和 ${@1}$ 一共有几位小数？",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "{@1} 的 $\\frac{1}{{@0}}$ 是多少？",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "{@2} 的 $\\frac{{@0}}{{@1}}$ 是多少？",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "周长的一半，也就是 $a + b$，是多少（cm）？",
  "Koľko minút je ${@0}$?": "${@0}$ 是多少分？",
  "Koľko minút je ${@0}^\\circ$?": "${@0}^\\circ$ 是多少分？",
  "Koľko minút zostane?": "还剩多少分？",
  "Koľko osí súmernosti má {@0}?": "{@0}有几条对称轴？",
  "Koľko riadkov je bod A vzdialený od osi?": "点 A 离对称轴几行？",
  "Koľko stupňov majú spolu oba uhly pri základni?": "两个底角一共多少度？",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "角 $\\alpha$ 和 $\\beta$ 一共多少度？",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "减完以后还剩多少度（别忘了借走的 1 度）？",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "离三角形内角和还差多少度？",
  "Koľko stĺpcov je bod A vzdialený od osi?": "点 A 离对称轴几列？",
  "Koľkokrát sa 60 zmestí do počtu minút?": "分数里有几个 60？",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "圆有无数条对称轴：每一条经过圆心的直线都是。",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "分成若干份的圆：二分之一、四分之三、八分之三",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "你约分是对的，但这个分数还不是最简分数——分子和分母还能同时被一个数整除。",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "数 ${@0}$ 中，表示几个{@1}的数位右边紧挨着的数字是几？",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "哪个数自己乘自己等于面积？那就是边长。",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "哪个数自己乘自己等于 {@0}？",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "$\\square$ 里最小填哪个数字，才能使 ${@0}$ 能被 {@1} 整除？",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "{@0} 加上哪个最小的数字，和才能被 {@1} 整除？",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "这样长的小段虽然也能剪完没有剩余，但不是最长的。",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "相邻的两个面积单位之间的进率是 100。",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "用量角器量角：50 度的角",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "分不够减，所以把 1 度换成分：${@0} = {@1}$。再算 ${@2} - {@3} = {@4}$ 和 ${@5} - {@6} = {@7}$，结果是 ${@8}$。",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "分不够减，把 1 度换成 60 分。这样第一个角有多少分？",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "分不能是 60 或更多。把 60 分换成 1 度。",
  "Má 180°, ramená tvoria priamku, je priamy.": "它是 180°，两条边成一条直线，是平角。",
  "Má presne 90°, je pravý.": "它正好是 90°，是直角。",
  "NSD; nsn": "最大公因数; 最小公倍数",
  "Na deliteľnosť 6 treba oboje.": "要被 6 整除，两个条件都要满足。",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "在数轴上，右边的数更大。每个负数都比 0 小，也比每个正数小。",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "在数轴上，{@0} 更靠右，它更大。所以 ${@1} {@2} {@3}$。",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "夜里的最低气温是 {@0} °C，白天的最高气温是 {@1} °C。白天比夜里暖和多少度？",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "先求一份：${@0} : {@1} = {@2}$。再求 {@3} {@4}：${@5}\\cdot {@6} = {@7}$。",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "先由周长求出边长（正方形有 4 条相等的边）。",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "{@0} 和 {@1} 的最大公因数是 {@2}。用它来约分：$\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$。",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "别忘了，1 和这个数 {@0} 本身也总是它的因数。",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "它不是偶数，但各位数字之和 {@0} 能被 3 整除。",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "它不是偶数，并且各位数字之和 {@0} 不能被 3 整除。",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "不是。字母 {@0} 没有竖直的对称轴，也没有水平的对称轴，对折后两半不能重合。",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "找出能同时整除分子和分母的最大的数。",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "去掉小数点相乘：${@0}\\cdot {@1} = {@2}$。两个因数一共有 {@3} {@4}，所以 ${@5}\\cdot {@6} = {@7}$。",
  "O koľko stupňov bolo cez deň teplejšie?": "白天比夜里暖和多少度？",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "气温从 0 °C 升到 {@0} °C，升高了多少度？",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "气温从 {@0} °C 升到 0 °C，升高了多少度？",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "长方形（不是正方形）有 2 条对称轴，它们连接对边的中点。对角线不是对称轴。",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "分成 1 cm² 小正方形的 5 cm × 3 cm 长方形",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "长方形的面积是 ${@0}\\,\\text{cm}^2$，一条边长 ${@1}\\,\\text{cm}$。另一条边长多少（cm）？",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "长方形的两条边是 $a = {@0}\\,\\text{cm}$ 和 $b = {@1}\\,\\text{cm}$。求它的面积，用 cm² 表示。",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "长方形的两条边是 $a = {@0}\\,\\text{cm}$ 和 $b = {@1}\\,\\text{cm}$。求它的周长，用 cm 表示。",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "两个数都能被 {@0} 整除，所以 $D({@1}, {@2}) = {@3} &gt; 1$。它们不互质。",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "面积是两条边的乘积，所以另一条边用除法求。",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "面积是两条边的乘积，所以另一条边要用除法求，而不是减法。",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "面积不能像周长那样除以 4。边长是自己乘自己等于面积的那个数。",
  "Obsah obdĺžnika: S = a · b.": "长方形的面积：S = a · b。",
  "Obsah štvorca je strana krát strana.": "正方形的面积是边长乘边长。",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "周长不是正方形的边长。先把它除以 4——得到边长。",
  "Obvod obdĺžnika: o = 2 · (a + b).": "长方形的周长：o = 2 · (a + b)。",
  "Ochladenie znamená odčítať.": "降温就是减。",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "你从周长里减去了两条长为 a 的边。剩下两条边 b——结果还要除以 2。",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "你从气温 {@0} °C 里减去了负的气温 {@1} °C。减去一个负数，等于加上它的相反数。",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "用较高的气温减去较低的气温。减去一个负数，等于加上它的相反数。",
  "Odčítaj minúty.": "减分。",
  "Odčítaj stupne.": "减度。",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "你在减一个正数——在数轴上向左移。",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "减去一个负数等于加上它的相反数：负负得正。",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "减去一个负数等于加上它的相反数：${@0} - ({@1}) = {@2} + {@3} = {@4}$。",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "减去一个数，和加上它的相反数是一样的。借助数轴来想一想。",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "除了经过对边中点的直线，正方形的对角线也是它的对称轴。",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "相反数在数轴上离 0 同样远，但在 0 的另一侧：{@0} 的相反数是 {@1}。",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "相反数到 0 的距离相同，但符号相反。",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "对称轴 $o$（虚线）是第 {@0} 行的水平直线。点 $A$ 在第 {@1} 行。它的像 $A'$ 在第几行？",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "对称轴 $o$（虚线）是第 {@0} 列的竖直直线。点 $A$ 在第 {@1} 列。它的像 $A'$ 在第几列？",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "等边三角形的每个顶点都有一条对称轴经过，不只是一个顶点。",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "锐角三角形的三个角都小于 90°。别忘了算出第三个角。",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "锐角比直角小，也就是小于 90°。",
  "Ostrý, pravý, tupý a priamy uhol": "锐角、直角、钝角和平角",
  "Oteplenie znamená pripočítať.": "升温就是加。",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "检查三角形的三边关系：两条较短边的和必须大于最长边。",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "周长的一半是 $a + b = {@0} : 2 = {@1}$，所以 $b = {@2} - {@3} = {@4}\\,\\text{cm}$。",
  "Polovica obvodu je súčet dvoch susedných strán.": "周长的一半是两条相邻边的和。",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "把这个角和直角（90°，练习本的角）以及平角（180°）比一比。",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "最后一位数字是 {@0}，是 0 或 5。",
  "Posledná číslica je {@0}, je to 0.": "最后一位数字是 {@0}，是 0。",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "最后一位数字是 {@0}，既不是 0 也不是 5。",
  "Posledná číslica je {@0}, nie je to 0.": "最后一位数字是 {@0}，不是 0。",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "你把小数点往反方向移了。除以 {@0}，数会变小。",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "你把小数点往反方向移了。乘以 {@0}，数会变大。",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "用这个数的整除特征（最后一位数字、各位数字之和或者最后两位数）。",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "看要保留的那一位后面的第一个数字：0 – 4 舍去，5 – 9 进一。",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "仔细看——两个数是相等的。",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "看看三条边是不是都一样长——这样的三角形有更准确的名称。",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "10、100 或 1 000 中 0 的个数，表示小数点要移动几位。",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "度和分分开算。60 分是 1 度。",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "你借了 1 度换成分，但没有把度数减去 1。",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "直角三角形有一个角正好是 90°。算出第三个角来检查一下。",
  "Pravý uhol má presne 90° – ako roh zošita.": "直角正好是 90°——和练习本的角一样。",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "想象一面镜子竖着或横着放在字母中间。",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "想象沿一条直线把图形对折。有几种折法能让两半完全重合？",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "换算：${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "所以不能，{@0} 不能被 {@1} 整除。",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "所以能，{@0} 能被 {@1} 整除。",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "把两个分数通分，再比较分子。",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "除以 {@0} 时，小数点向左移动 {@1} {@2}：{@3}。",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "能否被 10 整除，看最后一位数字——必须是 0。",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "能否被 2 整除，只看最后一位数字——必须是偶数。",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "能否被 3 整除，不看最后一位数字，而看各位数字之和。把所有数字加起来。",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "要被 4 整除，光是偶数还不够。要看最后两位组成的数。",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "能否被 5 整除，看最后一位数字——必须是 0 或 5。",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "能否被 9 整除，看各位数字之和——它必须能被 9 整除，只能被 3 整除还不够。",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "乘以 {@0} 时，小数点向右移动 {@1} {@2}：{@3}。",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "面积单位之间的进率不是 10，而是 $10\\cdot 10 = 100$：$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$。",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "面积单位之间的进率不是 10，而是 $10\\cdot 10 = 100$：$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$。",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "借位时，1 度换成 60 分，不是 100 分。",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "负数中，离 0 越近的越大。不是看哪个数字大。",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "平角是 180°，它的两条边在同一条直线上。",
  "Pripočítaj ešte ${@0}'$.": "再加上 ${@0}'$。",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "你在加一个正数——在数轴上向右移。",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "加上一个负数就是减：${@0} + ({@1}) = {@2} - {@3} = {@4}$。",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "加上一个负数，就是在数轴上向左移，也就是减。",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "质数只有两个因数。试一试 {@0} 能不能被 2、3、5、7 中的某个数整除。",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "质数恰好有两个因数，合数有两个以上的因数。1 有几个因数？",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "等腰三角形（不是等边三角形）有 1 条对称轴：它经过顶角的顶点和底边的中点。",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "等腰三角形有两条边一样长。",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "等边三角形有 3 条对称轴，每条都经过一个顶点和对边的中点。",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "等边三角形的三条边都一样长。",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "温差：${@0} - ({@1}) = {@2} + {@3} = {@4}$。白天暖和了 {@5} °C。",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "关键是这一位后面紧挨着的数字，它是 {@0}。它是 5 或更大，所以进一：${@1} \\doteq {@2}$。",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "关键是这一位后面紧挨着的数字，它是 {@0}。它小于 5，所以舍去：${@1} \\doteq {@2}$。",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "分解还没有完成：{@0} 不是质数。继续用质数去除。",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "把两个数都分解质因数。最大公因数由公共的质因数组成，最小公倍数由所有的质因数组成（取出现次数最多的）。",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "把 {@0} 和 {@1} 分解质因数。它们的最大公因数是多少？",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "把 {@0} 分解成质数的乘积。质因数从小到大写，用分号隔开（重复的也要写）。",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "扩分成分母是 {@0} 的分数：$\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$。（也可以算 ${@6} : {@7}$。）",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "早上的气温是 {@0} °C。到了晚上，气温下降了 {@1} °C。晚上的气温是多少（°C）？",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "早上的气温是 {@0} °C。到了晚上，气温上升了 {@1} °C。晚上的气温是多少（°C）？",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "不等边三角形的三条边都不一样长。再比较一遍长度。",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "不等边三角形没有对称轴，没有两条边一样长。",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "用这个数字确实能整除，但你要找的是最小的那个数字。",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "把分数 $\\frac{{@0}}{{@1}}$ 约分成最简分数。答案写成 a/b。",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "试着找一个大于 1 的公因数——例如看看两个数是否都能被 2、3、5 或 7 整除。",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "试一试这个数能不能被 2、3、5 或 7 整除。",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "公分母是 {@0}：$\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$，$\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$。因为 ${@9} {@10} {@11}$，所以 $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$。",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "数一数点 A 离对称轴几行，再在另一侧数出同样的行数。",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "数一数有几条边一样长。",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "数一数点 A 离对称轴几列，再在另一侧数出同样的列数。",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "边长：$a = {@0} : 4 = {@1}\\,\\text{cm}$。面积：$S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$。",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "你把边长乘以 2 了。正方形的面积是边长乘边长，不是边长乘 2。",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "你把边长相加了。长方形的面积是两条边长度的乘积。",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "60 和 84 分解质因数的树状图",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "度：${@0} + {@1} = {@2}$，分：${@3} + {@4} = {@5}$。因为 ${@6}' = 1^\\circ\\,{@7}'$，结果是 ${@8}$。",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "度：${@0} + {@1} = {@2}$，分：${@3} + {@4} = {@5}$。结果是 ${@6}$。",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "度：${@0} - {@1} = {@2}$，分：${@3} - {@4} = {@5}$。结果是 ${@6}$。",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "{@0} 和 {@1} 是互质还是不互质？",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "和等于最长边，三条边会落在同一条直线上。不能画出三角形。",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "三角形的内角和是 $180^\\circ$：$\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "三角形的内角和是 180°，不是 360°。",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "三角形的内角和是 180°，不是 360°。",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "三角形的内角和是 180°。",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "已知数字的和是 {@0}。各位数字之和必须能被 {@1} 整除：最小的合适数字是 {@2}，因为 ${@3} + {@4} = {@5}$。",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "乘积 {@0}·{@1} 是公倍数，但不是最小的。两条线路会更早同时发车。",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "乘积 {@0}·{@1} 是公倍数，但不是最小的。求最小公倍数时，每个质因数取它在含它最多的那个数中出现的次数。",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "把两条较短边相加，再和最长边比较。只要和更大就行。",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "把两条较短边相加，再和最长边比较。和必须更大。",
  "Sčítaj minúty.": "加分。",
  "Sčítaj stupne.": "加度。",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "把已知的数字相加。在和上再加一个尽可能小的数字，使和能被 {@0} 整除。",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "你只加了两条边。长方形有四条边，相邻边的和还要乘以 2。",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "这样各位数字之和能被 3 整除，但要被 9 整除，它必须能被 9 整除。",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "这是邻补角的大小。对顶角相对而立，大小相等。",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "这是最小公倍数。每段必须比丝带短——你要找的是最大公因数。",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "这是最大公因数。同时发车的时间必须是两个间隔的倍数——你要找的是最小公倍数。",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "这是正方形的周长。面积要用边长乘边长来算。",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "这是周长。长方形的面积要用两条边长度的乘积来算。",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "这是正方形的边长。还要用它算出面积。",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "这是正方形的边长。还要用它算出周长。",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "这是点 A 到对称轴的距离。像在对称轴另一侧同样远的地方——求出它的编号。",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "这是两个底角一共的度数。它们相等，所以结果还要除以 2。",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "第三个角：$180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。最大的角是 ${@3}^\\circ$，是直角，所以是直角三角形。",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "第三个角：$180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。最大的角是 ${@3}^\\circ$，是钝角，所以是钝角三角形。",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "第三个角：$180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。最大的角是 ${@3}^\\circ$，三个角都是锐角，所以是锐角三角形。",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "三角形的两个内角分别是 ${@0}^\\circ$ 和 ${@1}^\\circ$。按角分，它是什么三角形？",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "三角形的三条边分别是 {@0} cm、{@1} cm 和 {@2} cm。按边分，它是什么三角形？",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "钝角三角形有一个角大于 90°。算出第三个角来检查一下。",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "钝角大于 90°，同时小于 180°。",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "只有 1 有这个性质。每个比 1 大的自然数，不是质数就是合数。",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "长方形的对角线不是对称轴——沿对角线对折，两半不能重合。",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "等腰三角形的两个底角相等，三个角一共是 180°。",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "两个底角相等：$(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$。",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "角 $\\alpha$ 的大小是 ${@0}^\\circ$。它的邻补角是多少度？",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "角 $\\alpha$ 的大小是 ${@0}^\\circ$。它的对顶角是多少度？",
  "Uhol má {@0}°.": "这个角是 {@0}°。",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "点上小数点：${@0}\\cdot {@1}$ 等于多少？",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "求 {@0} 和 {@1} 的最大公因数和最小公倍数。按“最大公因数; 最小公倍数”的顺序写。",
  "V ktorom riadku leží obraz $A'$?": "像 $A'$ 在第几行？",
  "V ktorom stĺpci leží obraz $A'$?": "像 $A'$ 在第几列？",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "在等腰三角形中，底边对面的角（顶角）是 ${@0}^\\circ$。每个底角是多少度？",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "在三角形 $ABC$ 中，$\\alpha = {@0}^\\circ$，$\\beta = {@1}^\\circ$。角 $\\gamma$ 是多少度？",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "邻补角合起来是一个平角，对顶角相等。",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "邻补角合起来是 $180^\\circ$：$180^\\circ - {@0}^\\circ = {@1}^\\circ$。",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "邻补角合起来不是直角，而是平角（180°）。",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "邻补角合起来是平角，也就是 180°，不是 360°。",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "对顶角大小相等，所以它也是 ${@0}^\\circ$。",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "用分数除以 60。商是度，余数是分。",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "分子和分母都除以 {@0}。得到什么分数（a/b）？",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "把 ${@0}'$ 写成几度几分。按“度; 分”的形式写。",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "把两个分解式中都有的质因数相乘。",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "去掉小数点把数相乘，再数一数两个因数一共有几位小数。",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "去掉小数点把数相乘：${@0}\\cdot {@1}$。",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "你把边长相乘了——那是面积。周长是四条边长度的和。",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "计算 ${@0} {@1} {@2}$。结果按“度; 分”的形式写。",
  "Vypočítaj ${@0}\\cdot {@1}$.": "计算 ${@0}\\cdot {@1}$。",
  "Vypočítaj $|{@0}| + |{@1}|$.": "计算 $|{@0}| + |{@1}|$。",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "你只算了一份。还要乘以分子 {@0}。",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "在数轴上越靠右的数越大。注意：−2 比 −9 大。",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "所有的边都一样长，是等边三角形。",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "三条边都不一样长，是不等边三角形。",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "公共汽车站的 A 路车每 {@0} 分钟发一班，B 路车每 {@1} 分钟发一班。7:00 两路车同时发车。多少分钟后它们会再次同时发车？",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "从较小的单位换成较大的单位，要除以 100。",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "这一位后面的数字是 {@0}。把 ${@1}$ 四舍五入到{@2}。",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "你把分子和分母弄反了：用这个数除以分母，再把结果乘以分子。",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "你四舍五入到了别的数位。四舍五入到{@0}，就是保留的最后一位数字在{@0}上。",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "把 $\\frac{{@0}}{{@1}}$ 写成小数。",
  "Zapíš výsledok v poradí NSD; nsn.": "按“最大公因数; 最小公倍数”的顺序写出结果。",
  "Zapíš výsledok v tvare stupne; minúty.": "按“度; 分”的形式写出结果。",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "把分数 $\\frac{{@0}}{{@1}}$ 写成小数。",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "你像整数那样把数靠右对齐了。小数点必须上下对齐——把 {@0} 写成 {@1}0。",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "把小数点上下对齐，再补上 0：${@0} {@1} {@2} = {@3}$。",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "看看有没有一个大于 1 的数能同时整除这两个数。",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "分数线不是小数点。分数表示除法：用分子除以分母。",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "两个分数不相等。把它们通分，再比较分子。",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "分母不同的分数，不能只看分子或只看分母来比较。先通分。",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "把分数扩分成分母是 10、100 或 1 000 的分数，或者用分子除以分母。",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "合数除了 1 和它本身，还有别的因数。试着找出 {@0} 的这样的因数——如果没有，它就不是合数。",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "你是以方格的中心为对称中心来画的，而不是沿对称轴 o。",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "一个花园是长方形的，长 {@0} m，宽 {@1} m。花园的面积是多少平方米？",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "一个花园是长方形的，长 {@0} m，宽 {@1} m。围上篱笆需要多少米铁丝网？",
  "ani prvočíslo, ani zložené": "既不是质数，也不是合数",
  "desatinné miesta": "位小数",
  "desatinné miesto": "位小数",
  "desatinných miest": "位小数",
  "desatín": "十分之一",
  "jednotky (celé čísla)": "个位（整数）",
  "kladné": "正数",
  "kosodĺžnik (rovnobežník)": "平行四边形",
  "kosoštvorec": "菱形",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "小格是百分之一 (0.01)，大格是十分之一 (0.1)",
  "miesta": "位",
  "miesto": "位",
  "napr. 2/3": "例如 2/3",
  "napr. 2; 2; 3": "例如 2; 2; 3",
  "nekonečne veľa": "无数条",
  "nesúdeliteľné": "互质",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "最小公倍数包含所有的质因数：$n({@0}, {@1}) = {@2} = {@3}$。",
  "ostrouhlý": "锐角三角形",
  "ostrý (30°)": "锐角（30°）",
  "podľa strán": "按边分",
  "podľa uhlov": "按角分",
  "pravouhlý": "直角三角形",
  "pravý (90°)": "直角（90°）",
  "priamy": "平角",
  "priamy (180°)": "平角（180°）",
  "prvočíslo": "质数",
  "riadkov": "行",
  "rovnoramenný": "等腰三角形",
  "rovnoramenný trojuholník": "等腰三角形",
  "rovnostranný": "等边三角形",
  "rovnostranný trojuholník": "等边三角形",
  "rôznostranný": "不等边三角形",
  "rôznostranný trojuholník": "不等边三角形",
  "stotiny": "百分位",
  "stotín": "百分之一",
  "stred uhlomera = vrchol uhla": "量角器的中心 = 角的顶点",
  "stupne; minúty": "度; 分",
  "stĺpce": "列",
  "stĺpcov": "列",
  "stĺpec": "列",
  "súdeliteľné": "不互质",
  "tupouhlý": "钝角三角形",
  "tupý (135°)": "钝角（135°）",
  "zložené číslo": "合数",
  "záporné": "负数",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "是。字母 {@0} 有一条水平的对称轴。",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "是。字母 {@0} 既有竖直的对称轴，也有水平的对称轴。",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "是。字母 {@0} 有一条竖直的对称轴。",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "方格纸上的图形和它的轴对称图形",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "同时发车的时间必须是两个间隔的倍数。找出最小的那个。",
  "Číselná os od 2 do 3 s desatinami a stotinami": "有十分位和百分位刻度的 2 到 3 的数轴",
  "Číselná os s celými číslami od −6 do 6": "−6 到 6 的整数数轴",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "两个数不相等。看看哪个数在数轴上更靠右。",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "1 到 60 的数，质数涂了颜色",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "这一位后面的数字是 {@0}，也就是 5 或更大——要进一。",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "这一位后面的数字是 {@0}，也就是小于 5——要舍去。",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "1 只有一个因数（它本身），所以它既不是质数，也不是合数。",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "一个数只有同时能被 2 和 3 整除，才能被 6 整除。两个条件都要检查。",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "用这个数除以分母，再把结果乘以分子。",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "最后两位组成的数是 {@0}，能被 4 整除。",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "最后两位组成的数是 {@0}，不能被 4 整除。",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "{@0} 只有两个因数：1 和 {@1}。它是质数。",
  "časti": "份",
  "častí": "份",
  "časť": "份",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "正方形有 4 条对称轴：2 条连接对边的中点，2 条在对角线上。",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "正方形的面积是 ${@0}\\,\\text{cm}^2$。它的周长是多少厘米？",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "正方形的周长是 ${@0}\\,\\text{cm}$。它的面积是多少平方厘米？",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "正方形的边长是 ${@0}\\,\\text{cm}$。它的面积是多少平方厘米？",
  "štvorčeková sieť s osou a bodom A": "带对称轴和点 A 的方格纸"
 }
});
