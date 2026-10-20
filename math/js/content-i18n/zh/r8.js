/* 中文: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/r8/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "r8-cisla": {
   "title": "整数和有理数",
   "summary": "负数、相反数、绝对值以及带符号的分数运算。",
   "theory": [
    "<p><strong>自然数</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ 用来数物体。加上零\n       和它们的相反数（$-1, -2, -3, \\dots$），就得到<strong>整数</strong> $\\mathbb{Z}$。<strong>有理数</strong> $\\mathbb{Q}$\n       是所有能写成分数 $\\frac{p}{q}$（$p$ 为整数，$q$ 为自然数）的数，例如 $\\frac{3}{4}$、\n       $-2.5 = -\\frac{5}{2}$ 或 $7 = \\frac{7}{1}$。</p>",
    {
     "fig": "r8-obory",
     "caption": "每个自然数都是整数，每个整数都是有理数：$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$。"
    },
    "<p>$a$ 的<strong>相反数</strong>是 $-a$：$5$ 的相反数是 $-5$，$-3$ 的相反数是 $3$。<strong>绝对值</strong> $|a|$\n       是数轴上这个数到 0 的距离，所以绝对值永远不是负数：$|-7| = 7$，$|7| = 7$。</p>",
    "<p><strong>带符号的运算：</strong>减去一个数等于加上它的相反数：$4 - (-6) = 4 + 6 = 10$。\n       乘法和除法中，同号得正，异号得负：$(-3)\\cdot(-4) = 12$，$(-20) : 5 = -4$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $-8 - (-5) + 2\\cdot(-3)$。",
     "steps": [
      "先算乘法：$2\\cdot(-3) = -6$（异号，结果为负）。",
      "减去负数变为加上正数：$-8 - (-5) = -8 + 5 = -3$。",
      "最后 $-3 + (-6) = -9$。",
      "<strong>结果：$-9$</strong>"
     ]
    },
    {
     "task": "比较 $-\\frac{3}{4}$ 和 $-0.7$ 的大小。",
     "steps": [
      "把分数化成小数：$-\\frac{3}{4} = -0.75$。",
      "$-0.75$ 在负半轴上离 0 更远，所以在数轴上更靠左。",
      "<strong>$-\\frac{3}{4} &lt; -0.7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "乘方和开方",
   "summary": "平方和立方，平方根，估算平方根和大数的写法。",
   "theory": [
    "<p><strong>乘方</strong> $a^n$ 是 $n$ 个相同因数相乘的简写：$a^n = a\\cdot a\\cdot\\ldots\\cdot a$。\n       $a$ 叫作<em>底数</em>，$n$ 叫作<em>指数</em>。例如 $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$。</p>",
    {
     "fig": "r8-mocniny",
     "caption": "平方就是正方形的面积：边长为 3 的正方形有 $3^2 = 9$ 个小方格。立方就是正方体的体积：棱长为 2 的正方体由 $2^3 = 8$ 个小正方体组成。"
    },
    "<p><strong>注意符号：</strong>$(-3)^2 = (-3)\\cdot(-3) = 9$，但是 $-3^2 = -(3\\cdot 3) = -9$。\n       负数的偶次幂是正数，奇次幂是负数：$(-2)^3 = -8$。</p>",
    "<p>非负数 $a$ 的<strong>算术平方根</strong>是满足 $b^2 = a$ 的非负数 $b$。记作 $\\sqrt{a} = b$，\n       例如 $\\sqrt{49} = 7$，$\\sqrt{0.09} = 0.3$。大数可以写成 $a\\cdot 10^n$ 的形式，其中 $1 \\le a &lt; 10$：\n       $45\\,000 = 4.5\\cdot 10^4$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $(-2)^3 + 3^2 - \\sqrt{64}$。",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$。",
      "$3^2 = 9$，$\\sqrt{64} = 8$，因为 $8^2 = 64$。",
      "$-8 + 9 - 8 = -7$。",
      "<strong>结果：$-7$</strong>"
     ]
    },
    {
     "task": "$\\sqrt{50}$ 在哪两个相邻的自然数之间？",
     "steps": [
      "找 50 附近的平方数：$7^2 = 49$，$8^2 = 64$。",
      "因为 $49 &lt; 50 &lt; 64$，所以 $7 &lt; \\sqrt{50} &lt; 8$。",
      "<strong>$\\sqrt{50}$ 在 7 和 8 之间</strong>（非常接近 7）。"
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "含字母的式子",
   "summary": "什么是字母（变量），代入求值，以及用式子表示文字叙述。",
   "theory": [
    "<p><strong>字母（变量）</strong>（例如 $x$、$a$、$n$）可以代表任意的数。<strong>含字母的式子</strong>\n       用运算符号把数和字母连接起来，例如 $3x + 5$ 或 $2(a - 1)$。数和字母之间的乘号\n       省略不写：$3x$ 表示 $3\\cdot x$。</p>",
    "<p>把一个数代入字母，就能求出<strong>式子的值</strong>。代入负数时要加括号：\n       当 $x = -2$ 时，$x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$。</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "边长为 $a$ 和 $a + 3$ 的长方形，周长 $o = 2a + 2(a + 3)$，面积 $S = a(a + 3)$。当 $a = 4$ 时，$o = 22$，$S = 28$。"
    },
    "<p><strong>用式子表示：</strong>“$x$ 的 2 倍”是 $2x$，“比 $x$ 大 5 的数”是 $x + 5$，“$x$ 的三分之一”是 $\\frac{x}{3}$，\n       “$a$ 与 $b$ 的和的平方”是 $(a + b)^2$。</p>"
   ],
   "examples": [
    {
     "task": "当 $x = -3$ 时，求式子 $2x^2 - 5x + 1$ 的值。",
     "steps": [
      "把 $-3$ 加括号代入：$2\\cdot(-3)^2 - 5\\cdot(-3) + 1$。",
      "$(-3)^2 = 9$，所以 $2\\cdot 9 = 18$；又 $-5\\cdot(-3) = 15$。",
      "$18 + 15 + 1 = 34$。",
      "<strong>式子的值是 34。</strong>"
     ]
    },
    {
     "task": "用式子表示：“比 $n$ 的 3 倍少 4 的数”。",
     "steps": [
      "$n$ 的 3 倍是 $3n$。",
      "“少 4”就是减去 4。",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "整式的化简",
   "summary": "同类项，去括号，以及两数和（差）的平方公式。",
   "theory": [
    "<p><strong>同类项</strong>含有相同的字母，并且相同字母的指数也相同，例如 $3x$ 和 $-5x$，或 $2x^2$ 和 $x^2$。\n       合并同类项时，把系数相加：$3x - 5x + 2 = -2x + 2$。不是同类项的（例如 $x^2$ 和 $x$）不能合并。</p>",
    "<p><strong>去括号：</strong>用括号前面的数去乘括号里的每一项：$3(2x - 4) = 6x - 12$。\n       括号前是负号时，括号里各项都要变号：$-(x - 5) = -x + 5$。两个二项式相乘，要“每一项乘每一项”：\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$。</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "边长为 $a + b$ 的正方形由正方形 $a^2$、正方形 $b^2$ 和两个长方形 $ab$ 组成。所以 $(a + b)^2 = a^2 + 2ab + b^2$。"
    },
    "<p>值得熟记的<strong>公式</strong>：$(a + b)^2 = a^2 + 2ab + b^2$，$(a - b)^2 = a^2 - 2ab + b^2$\n       以及 $(a + b)(a - b) = a^2 - b^2$。</p>"
   ],
   "examples": [
    {
     "task": "化简 $4(x - 3) - 2(x - 5)$。",
     "steps": [
      "去括号：$4x - 12 - 2x + 10$（第二个括号前的负号使 $-5$ 变成 $+10$）。",
      "合并同类项：$4x - 2x = 2x$，$-12 + 10 = -2$。",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "计算 $(x - 4)^2$。",
     "steps": [
      "用公式 $(a - b)^2 = a^2 - 2ab + b^2$，其中 $a = x$，$b = 4$。",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$。",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "一元一次方程",
   "summary": "同解变形，含括号的方程和检验。",
   "theory": [
    "<p><strong>方程</strong>是含有未知数的等式，例如 $2x + 3 = 9$。<strong>解方程</strong>\n       就是求出使等式成立的未知数的值（方程的解）。这个方程的解是 $x = 3$，因为 $2\\cdot 3 + 3 = 9$。</p>",
    {
     "fig": "r8-vahy",
     "caption": "方程就像平衡的天平：左边有两袋质量未知（$x$）的东西和三个砝码，右边有九个砝码。从两个托盘里各拿走 3 个砝码，天平仍然平衡：$2x = 6$，所以 $x = 3$。"
    },
    "<p><strong>同解变形</strong>不改变方程的解：方程两边可以同时加上（或减去）同一个数\n       或式子，两边也可以同时乘或除以同一个不为零的数。目标是让未知数单独留在一边。</p>",
    "<p><strong>步骤：</strong>1. 去括号；2. 移项，把含未知数的项移到一边，常数移到另一边；\n       3. 两边同时除以未知数的系数；4. 把解代入原方程进行<strong>检验</strong>。</p>"
   ],
   "examples": [
    {
     "task": "解方程 $5x - 7 = 2x + 8$。",
     "steps": [
      "两边同时减去 $2x$：$3x - 7 = 8$。",
      "两边同时加上 7：$3x = 15$。",
      "两边同时除以 3：$x = 5$。",
      "检验：左边 $5\\cdot 5 - 7 = 18$，右边 $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "解方程 $3(x + 2) = x - 4$。",
     "steps": [
      "去括号：$3x + 6 = x - 4$。",
      "减去 $x$，再减去 6：$2x = -10$。",
      "除以 2：$x = -5$。",
      "检验：$3\\cdot(-5 + 2) = -9$，$-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "列方程解应用题",
   "summary": "怎样根据题意列方程：数、年龄、周长和分钱问题。",
   "theory": [
    "<p>用方程解应用题分五步：</p>\n       <ol><li>用字母（例如 $x$）表示未知量，并写明它表示什么。</li>\n       <li>用含 $x$ 的式子表示其他的量。</li><li>根据题目中的等量关系列出方程。</li>\n       <li>解方程。</li><li><em>按照题意</em>检验，并写出答案。</li></ol>",
    "<p>常用的表示法：“多 5”是 $x + 5$，“是它的 3 倍”是 $3x$，“三个连续的数”是 $x$、$x + 1$、$x + 2$，\n       “长方形的周长”是 $2a + 2b$。</p>",
    "<p>检验要按照题目的条件，而不是代入自己列的方程。如果方程列错了，代入方程检验是发现不了错误的。</p>"
   ],
   "examples": [
    {
     "task": "三个连续自然数的和是 48。这三个数是多少？",
     "steps": [
      "设最小的数为 $x$，另外两个数是 $x + 1$ 和 $x + 2$。",
      "方程：$x + (x + 1) + (x + 2) = 48$，即 $3x + 3 = 48$。",
      "$3x = 45$，$x = 15$。",
      "检验：$15 + 16 + 17 = 48$ ✓",
      "<strong>答：这三个数是 15、16 和 17。</strong>"
     ]
    },
    {
     "task": "妈妈比女儿大 26 岁。她们的年龄和是 50 岁。女儿多少岁？",
     "steps": [
      "设女儿 $x$ 岁，妈妈 $x + 26$ 岁。",
      "方程：$x + (x + 26) = 50$，即 $2x + 26 = 50$。",
      "$2x = 24$，$x = 12$。",
      "检验：妈妈 $12 + 26 = 38$ 岁，$12 + 38 = 50$ ✓",
      "<strong>答：女儿 12 岁。</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "圆和圆周",
   "summary": "半径和直径，圆的周长，圆的面积，扇形和圆环。",
   "theory": [
    "<p>圆心为 $S$、半径为 $r$ 的<strong>圆周</strong> $k$ 是平面上到点 $S$ 的距离等于 $r$ 的所有点组成的图形——\n       它只是一条“线”。<strong>圆（圆面）</strong>由圆周和它里面的整个部分组成。<strong>直径</strong>是经过\n       圆心、两端都在圆周上的线段；它的长度是 $d = 2r$。</p>",
    {
     "fig": "r8-kruh",
     "caption": "圆心 $S$，半径 $r$，直径 $d = 2r$，以及圆心角为 $\\alpha$ 的扇形。"
    },
    "<p><strong>圆的周长</strong>是 $o = 2\\pi r = \\pi d$，<strong>圆的面积</strong>是 $S = \\pi r^2$。\n       $\\pi$ 是任意一个圆的周长与直径的比，$\\pi \\approx 3.14$。</p>",
    "<p>圆心角为 $\\alpha$ 的<strong>扇形</strong>是圆中两条半径之间的部分，它的面积是 $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$。\n       <strong>圆环</strong>是两个半径为 $R &gt; r$ 的同心圆之间的部分：$S = \\pi (R^2 - r^2)$。</p>"
   ],
   "examples": [
    {
     "task": "自行车轮的直径是 $70\\,\\text{cm}$。车轮转一圈走多远？取 $\\pi \\approx 3.14$。",
     "steps": [
      "车轮转一圈走的路程等于它的周长：$o = \\pi d$。",
      "$o \\approx 3.14\\cdot 70 = 219.8\\,\\text{cm}$。",
      "<strong>车轮大约走 $219.8\\,\\text{cm}$，约 $2.2\\,\\text{m}$。</strong>"
     ]
    },
    {
     "task": "求半径为 $10\\,\\text{cm}$ 的四分之一圆的面积（$\\pi \\approx 3.14$）。",
     "steps": [
      "四分之一圆是圆心角为 $90^\\circ$ 的扇形，即整个圆的 $\\frac{90}{360} = \\frac{1}{4}$。",
      "整个圆的面积：$S = \\pi r^2 \\approx 3.14\\cdot 100 = 314\\,\\text{cm}^2$。",
      "<strong>四分之一圆：$314 : 4 = 78.5\\,\\text{cm}^2$。</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "棱柱的表面积和体积",
   "summary": "棱柱的底面和侧面，长方体的展开图，长方体、正方体和三棱柱的表面积与体积。",
   "theory": [
    "<p><strong>棱柱</strong>是有两个全等且平行的<strong>底面</strong>（多边形），<strong>侧面</strong>\n       由长方形组成的立体图形。按底面的形状，分为三棱柱、四棱柱、六棱柱……\n       长方体和正方体都是四棱柱。</p>",
    {
     "fig": "r8-siet",
     "caption": "长、宽、高为 $a$、$b$、$c$ 的长方体的展开图：两个 $a\\times b$ 的底面（蓝色）和四个侧面（绿色）。"
    },
    "<p>棱柱的<strong>体积</strong>：$V = S_p\\cdot v$（底面积乘高）。长方体 $V = a\\cdot b\\cdot c$，正方体 $V = a^3$。\n       体积用体积单位度量；$1\\,\\text{dm}^3 = 1\\,\\text{l}$，$1\\,\\text{cm}^3 = 1\\,\\text{ml}$。</p>",
    "<p><strong>表面积</strong>是所有面的面积之和：$S = 2\\cdot S_p + S_{pl}$，其中侧面积 $S_{pl} = o_p\\cdot v$\n       （底面周长乘高）。长方体 $S = 2(ab + bc + ac)$，正方体 $S = 6a^2$。</p>"
   ],
   "examples": [
    {
     "task": "一个长方体的长、宽、高分别是 $a = 5\\,\\text{cm}$，$b = 3\\,\\text{cm}$，$c = 4\\,\\text{cm}$。求它的表面积和体积。",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$。",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$。"
     ]
    },
    {
     "task": "一个三棱柱的底面是直角边为 $3\\,\\text{cm}$ 和 $4\\,\\text{cm}$ 的直角三角形（斜边为 $5\\,\\text{cm}$），高是 $10\\,\\text{cm}$。求它的表面积和体积。",
     "steps": [
      "底面积：$S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$。",
      "体积：$V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$。",
      "侧面积：$S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$。",
      "表面积：$S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$。"
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "统计图、统计表和统计",
   "summary": "条形统计图和扇形统计图，平均数、众数和中位数。",
   "theory": [
    "<p>我们把数据收集到<strong>统计表</strong>里，并用<strong>统计图</strong>表示。条形统计图便于比较数量，\n       扇形统计图能显示每一组占整体的多少。</p>",
    {
     "fig": "r8-stlpce",
     "caption": "条形统计图：一个 23 人的班级的测验成绩（1 分最好，5 分最差）。得 2 分的学生最多。"
    },
    {
     "fig": "r8-kolac",
     "caption": "扇形统计图：学生上学的方式。一半步行，30 % 坐公交车，20 % 骑自行车。"
    },
    "<p><strong>平均数</strong>是所有数据的和除以数据的个数。<strong>众数</strong>是出现次数\n       最多的数据。<strong>中位数</strong>是把数据按大小排列后位于中间的数；数据个数是偶数时，中位数是\n       中间两个数的平均数。</p>"
   ],
   "examples": [
    {
     "task": "五天的气温分别是 $12$、$15$、$9$、$15$ 和 $14\\,{}^\\circ\\text{C}$。求平均数、众数和中位数。",
     "steps": [
      "平均数：$\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$。",
      "众数：出现次数最多的是 $15\\,{}^\\circ\\text{C}$。",
      "中位数：排列成 $9, 12, 14, 15, 15$；中间的数是 $14\\,{}^\\circ\\text{C}$。"
     ]
    },
    {
     "task": "根据成绩统计图，求全班的平均成绩。",
     "steps": [
      "所有成绩之和：$1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$。",
      "学生人数：$5 + 8 + 6 + 3 + 1 = 23$。",
      "<strong>平均数：$56 : 23 \\approx 2.43$。</strong>"
     ]
    }
   ],
   "strings": {
    "jablko": "苹果"
   }
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$，所以 $p = {@6}$，$q = {@7}$。",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$。$V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$。侧面积：$({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$，表面积 $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$。",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$。两边同时乘以 {@4}：$x = {@5}$。",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$，$\\sqrt{{@2}} = {@3}$，所以 ${@4} - {@5} = {@6}$。",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$，因为 ${@2}^2 = {@3}$。",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ 表示 $a\\cdot a\\cdot a$，不是 $3\\cdot a$。",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$，符号{@3}：${@4} : {@5} = {@6}$。",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$，符号{@3}：${@4}\\cdot {@5} = {@6}$。",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$，${@2}^2 = {@3}$。因为 ${@4} &lt; {@5} &lt; {@6}$，所以 ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$。",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$，$|{@2}| = {@3}$，所以 ${@4} - {@5} = {@6}$。",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": "、$x + 2$ 和 $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "绝对值是到 0 的距离，永远不是负数。",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "如果方程两边乘以 {@0}，两边的每一项都要乘，数 ${@1}$ 也要乘。更简单的做法是先把分数那一项单独留在一边。",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "一个长方体形状的鱼缸，内部尺寸是 {@0} cm、{@1} cm 和 {@2} cm。它能装多少升水？",
  "Aká dlhá je dlhšia strana (v cm)?": "较长的边长多少（cm）？",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "当 $a = {@1}$ 时，另一条边 $a + {@0}$ 长多少（cm）？",
  "Aká dlhá je kratšia strana (v cm)?": "较短的边长多少（cm）？",
  "Aké je najväčšie z čísel?": "最大的数是多少？",
  "Aké je {@0}. číslo v poradí?": "排在第 {@0} 个的数是多少？",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "数 $a$ 是多少？它的小数点前面只能有一个不为 0 的数字。",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "${@0}^\\circ$ 的角占周角的几分之几？用分数表示。",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "分数 ${@0}$ 和 ${@1}$ 的最小公分母是多少？",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "棱柱的体积 $V = S_p\\cdot v$ 是多少（cm³）？",
  "Aký je objem kvádra (v cm³)?": "长方体的体积是多少（cm³）？",
  "Aký je obsah celého kruhu (v cm²)?": "整个圆的面积是多少（cm²）？",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "侧面积——底面周长乘高——是多少（cm²）？",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "底面积 $S_p$ 是多少（cm²）？",
  "Aký je polomer kruhu (v cm)?": "圆的半径是多少（cm）？",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "棱柱的表面积——两个底面加侧面——是多少（cm²）？",
  "Aký je súčet všetkých čísel?": "所有数的和是多少？",
  "Aký obsah má jedna stena kocky (v cm²)?": "正方体一个面的面积是多少（cm²）？",
  "Babka": "奶奶",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "没有括号时，只对数 {@0} 平方，负号留在结果前面：$-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$。",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "你漏掉了含 $x$ 的项：第一个括号里的每一项都要乘以第二个括号里的每一项，而不只是第一项乘第一项、最后一项乘最后一项。",
  "Dcéra": "女儿",
  "Dedko": "爷爷",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "你只除以了 $\\pi$，这样得到的是直径。半径是它的一半。",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "把小数点向左移动 {@0} {@1}，使小数点前只剩下一个不为 0 的数字：${@2} = {@3}\\cdot 10^{{@4}}$。",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "统计图显示了图书馆每天被借出多少本书。",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "较长的边是 ${@0} + {@1} = {@2}\\,\\text{cm}$。",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "你把直径代入了公式 $S = \\pi r^2$。先求出半径，也就是直径的一半。",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "把 $x = {@0}$ 代入项 ${@1}$。${@2}$ 等于多少？",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "同时代入两个字母的值，负数要加括号。",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "平方 $x^2$ 表示 $x\\cdot x$，不是 $2\\cdot x$。",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "平方看作正方形，立方看作正方体",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "平方是两个相同因数的乘积。负负得正。",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "平方不是 2 倍：平方就是用这个数乘它自己。",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "平方不是 2 倍：乘方就是用这个数乘它自己。",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "另一条边是整个式子 $a + {@0}$，要给它加上括号：乘的是 $a\\cdot(a + {@1})$。",
  "Dvojnásobok": "2 倍",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "指数不是这个数的位数，而是小数点要移动的位数。",
  "Filip": "小飞",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "棱柱有两个底面（上面和下面），两个都要算进表面积。",
  "Hľadaj najvyšší stĺpec.": "找最高的柱子。",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "找一个非负数，它的平方等于根号下的数。",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "找一个数，它自己乘自己三次等于体积。",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "找一个数，它的立方是 {@0}：${@1}^3 = {@2}$，所以 $a = {@3}\\,\\text{cm}$。",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "一个面的面积是 ${@0} : 6 = {@1}\\,\\text{cm}^2$，所以 $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$。",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "长方形的一条边比另一条边长 {@0} cm。长方形的周长是 {@1} cm。{@2}边长多少（cm）？",
  "K obom stranám pripočítame {@0}": "两边同时加上 {@0}",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "长方体的每个面都有两个。长方体的表面积是多少（cm²）？",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "第一个括号里的每一项都乘以第二个括号里的每一项。然后合并含 $x$ 的项。",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "把一个数移到方程的另一边时，要改变它的符号。",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "把一个数移到方程的另一边时，要改变它的符号。两边要做同样的运算。",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "正方体有 6 个面，每个面都是边长为 $a$ 的正方形。",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "正方体有 6 个面，不是 4 个。别忘了上面和下面。",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "正方体有 6 个全等的正方形面：$S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$。",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "正方体的体积是 ${@0}\\,\\text{cm}^3$。它的棱长是多少（cm）？",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "正方体的表面积是 ${@0}\\,\\text{cm}^2$。它的棱长是多少（cm）？",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "$x$ 的系数 ${@0}$ 要用除法去掉，而不是减法：${@1}x$ 表示 ${@2}\\cdot x$。",
  "Koľko je $R^2 - r^2$?": "$R^2 - r^2$ 等于多少？",
  "Koľko je $\\sqrt{{@0}}$?": "$\\sqrt{{@0}}$ 等于多少？",
  "Koľko je $r^2$?": "$r^2$ 等于多少？",
  "Koľko je ${@0}$?": "${@0}$ 等于多少？",
  "Koľko je ${@0}^2$?": "${@0}^2$ 等于多少？",
  "Koľko je ${@0}{@1}$?": "${@0}{@1}$ 等于多少？",
  "Koľko je $|{@0}|$?": "$|{@0}|$ 等于多少？",
  "Koľko je v zátvorke: ${@0}{@1}$?": "括号里等于多少：${@0}{@1}$？",
  "Koľko je čísel?": "一共有几个数？",
  "Koľko kníh si požičali za celý týždeň?": "整整一周一共借出了多少本书？",
  "Koľko rokov má {@0}?": "{@0}多少岁？",
  "Koľko žiakov hlasovalo spolu?": "一共有多少名学生投票？",
  "Koľko žiakov odpovedalo spolu?": "一共有多少名学生回答？",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "设较短的边为 $x$，较长的边为 $x + {@0}$。方程：$2x + 2(x + {@1}) = {@2}$，所以 $4x + {@3} = {@4}$，$4x = {@5}$，$x = {@6}$。{@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "设较短的边为 $x$，较长的边为 $x + {@0}$。由方程 $2x + 2(x + {@1}) = {@2}$ 算出 $4x$ 等于多少。",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "较短的边是 ${@0}\\,\\text{cm}$。",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "已知圆的{@0}。求它的面积，用 cm² 表示。{@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "已知圆的{@0}。求它的周长，用 cm 表示。{@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "标出圆心、半径、直径和扇形的圆",
  "Kruhový diagram dopravy do školy": "上学交通方式的扇形统计图",
  "Ktoré ovocie dostalo najviac hlasov?": "哪种水果得票最多？",
  "Ktorý výraz sa rovná ${@0}$?": "哪个式子等于 ${@0}$？",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "哪个式子符合这句描述：<em>{@0}</em>？",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "哪项运动最受学生欢迎？",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "长方体的每个面都有两个（上和下、前和后、左和右）。还要把和 $ab + bc + ac$ 乘以 2。",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "长方体的长、宽、高分别是 $a = {@0}\\,\\text{cm}$、$b = {@1}\\,\\text{cm}$、$c = {@2}\\,\\text{cm}$。求它的表面积（cm²）和体积（cm³），用分号隔开。",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "长方体有三组全等的面：$ab$、$bc$ 和 $ac$。体积是长、宽、高的乘积。",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "要在排好序的数中找中位数。先把数从小到大排列。",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "中位数是这两个数的平均数。它是多少？",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "$\\sqrt{{@0}}$ 在哪两个相邻的自然数之间？先写较小的数，再写较大的数，用分号隔开。",
  "Množiny prirodzených, celých a racionálnych čísel": "自然数、整数和有理数集合",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "众数是出现次数最多的数值。",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "众数不是最大的数，而是出现次数最多的数值。",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "只有 $x$ 要除以 2，数 {@0} 是从一半里减去的。",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "数 ${@0}$ 和 ${@1}$ 在数轴上。它们之间的距离是多少？",
  "Najmenšie číslo je {@0}.": "最小的数是 {@0}。",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "把最小的数设为 $x$，把所有的数加起来。方程的形式是 ${@0}x + \\square = {@1}$。方框里应该填什么数？",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "把最小的数设为 $x$，后面的数是 $x + 1$、$x + 2$、…… 把它们加起来，让它等于已知的和。",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "先把分数那一项单独留在一边，再把两边同时乘以分母。",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "先去括号，再像普通方程一样求解。",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "先算乘方，再算乘法，最后算加法。负数要加括号。",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "先求出两个数的绝对值（到 0 的距离，不是负数），再相减。",
  "Najprv vypočítaj každú odmocninu zvlášť.": "先分别算出每个平方根。",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "先算括号里的，再相乘。",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "最高的柱子的值是 {@0}，对应的是“{@1}”。这个值是这组数据的众数。",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "最大的数是 $x + {@0} = {@1}$。",
  "Natália": "小娜",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "找出两个自然数的平方，使根号下的数在它们之间。",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "要乘的是 $x$，不是数 {@0}。",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "乘的是整个和，所以要给它加上括号。没有括号的话，就只乘了 $x$。",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "乘的是整个和，所以 $x$ 也要乘，不只是数 {@0}。",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "只有 $x$ 要乘，数 {@0} 要从 $x$ 的{@1}中减去。加了括号就表示整个差的{@2}。",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "要把小数点向左移动几位？那就是指数 $n$。",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "长方形的两条边长 $a$ 和 $a + {@0}$ 厘米。当 $a = {@2}$ 时，求它的{@1}。",
  "Obdĺžnik so stranami a a a plus 3": "两条边分别是 a 和 a 加 3 的长方形",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "两边同时除以 ${@0}$。$x$ 等于多少？",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "两边同时乘以 {@0}。$x$ 等于多少？",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "两个数在 0 的同一侧，所以它们到 0 的距离要相减，而不是相加。",
  "Objem kocky je $a^3$.": "正方体的体积是 $a^3$。",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "体积不是除以 3。你要找的是自己乘自己三次等于体积的数。",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "一个面的面积是 $a^2$，不是 $a$。每个面都是正方形。",
  "Obsah kruhu je $S = \\pi r^2$.": "圆的面积是 $S = \\pi r^2$。",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "圆环的面积不是 $\\pi(R - r)^2$。用大圆的面积减去小圆的面积：$\\pi R^2 - \\pi r^2$。",
  "Obsah obdĺžnika je súčin jeho strán.": "长方形的面积是两条边的乘积。",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "直角三角形的面积是两条直角边乘积的一半，别忘了除以 2。",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "圆的面积要相减，不是相加：中间的小圆是空的。",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "周长是 $2\\pi r$，你忘了乘 2（或者在 $\\pi d$ 里代入的是半径而不是直径）。",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "圆的周长是 $o = 2\\pi r = \\pi d$。",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "圆的周长是 ${@0}\\,\\text{cm}$。它的半径是多少厘米？{@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "周长不能直接除以 4，长方形的边不是一样长的。",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "长方形的周长是 $2a + 2b$，另一条边代入 $a + {@0}$。",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "长方形的周长是 $2a + 2b$。把较短的边设为 $x$。",
  "Od oboch strán odčítame {@0}": "两边同时减去 {@0}",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "用大圆的面积减去小圆的面积。",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "你是从一个负数里减，所以在数轴上要从 0 再往左移。",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "平方根不是这个数的一半。找一个自己乘自己等于 {@0} 的数。",
  "Odčítaj hodnoty dvoch stĺpcov.": "把两根柱子的值相减。",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "把求出的两个绝对值相减。结果是多少？",
  "Odčítaj získané čísla. Aký je výsledok?": "把求出的两个数相减。结果是多少？",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "把两个数相减，结果取绝对值。如果它们在 0 的两侧，到 0 的距离就要相加。",
  "Odčítanie nahraď pripočítaním opačného čísla.": "把减法换成加上相反数。",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "减去一个负数等于加上它的相反数，也就是一个正数：$-{@0} = +{@1}$。",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "减去一个数等于加上它的相反数：${@0} - {@1} = {@2} + {@3} = {@4}$。",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "这句描述对应的式子是 ${@0}$。写式子时从句子的末尾往前看：先确定“最后一步”运算（和、差、乘方……），再确定它的各个部分。",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "先把分数那一项单独留在一边。$\\frac{x}{{@0}}$ 等于多少？",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "底面是直角三角形，它的面积是两条直角边乘积的一半。侧面积是底面周长乘高。",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "按公式 ${@0}$，取 $a = x$，$b = {@1}$：${@2} = {@3}$。",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "半径是直径的一半：$r = {@0}\\,\\text{cm}$。",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "数 $x$ 的一半是 $x$ 除以 2，不是 $2x$。",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "最后一项 $b^2$ 是一个平方，它总是正的。",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "最后一项是数 {@0} 的平方，而不是这个数本身。",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "最后一项是乘积 ${@0}\\cdot {@1}$，而不是数 {@2} 本身。",
  "Použi $\\pi \\approx 3{,}14$.": "取 $\\pi \\approx 3.14$。",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "用表面积除以 6，得到一个面的面积。再开平方。",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "注意，公式 $S = \\pi r^2$ 中是半径，不是直径。",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "注意：$(x + a)^2$ 不等于 $x^2 + a^2$，少了乘积的 2 倍 $2ax$。",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "数的个数是奇数（{@0}），中位数是正中间的第 {@1} 个数：{@2}。",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "数的个数是偶数（{@0}），中位数是第 {@1} 个和第 {@2} 个数的平均数：$\\frac{{@3} + {@4}}{2} = {@5}$。",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "你算的是圆的面积（$\\pi r^2$），题目问的是周长。",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "想象在数轴上移动：正数向右移，负数向左移。",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "把含 $x$ 的项移到左边并合并。$x$ 的系数是多少？",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "把含 $x$ 的项移到左边，把数移到右边。化成 $ax = b$ 的形式：$a$ 和 $b$ 各是多少？用分号隔开。",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "把数移到右边并合并。右边的数是多少？",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "把分数化成小数。两个负数中，离 0 越近的越大。",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "除法的符号法则和乘法相同。",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "分数相乘不需要通分：分子乘分子，分母乘分母。",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "把含 $x$ 的项移到方程的另一边时，要改变它的符号。",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "把一个数移到方程的另一边时，要改变它的符号。",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "数的个数是偶数时，中间有两个数。中位数是它们的平均数。",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "求差时顺序很重要：先写被减数。",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "展开后会得到两个含 $x$ 的项：$x$ 乘第二个括号里的数，以及第一个括号里的数乘 $x$。把它们合并。$x$ 的系数 $p$ 是多少？",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "分数相加减需要通分。别忘了符号。",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "差的平方不能只把每一项分别平方，还少了中间项 $-2ab$。",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "和的平方不能只把每一项分别平方，还少了中间项 $2ab$。",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "负数比较大小，不是看哪个绝对值大：离 0 越近的越大。",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "加上一个负数，等于减去它的绝对值：${@0} + {@1} = {@2} - {@3} = {@4}$。",
  "Päťkrát": "5 倍",
  "Päťnásobok": "5 倍",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "同号相乘得正，异号相乘得负。",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "平方根的差不等于差的平方根。先分别算出每个平方根，再相减。",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "判断哪一步运算是最后做的。如果要乘或乘方的是整个和或差，就需要括号。",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "把尺寸换算成分米：${@0}\\,\\text{dm}$、${@1}\\,\\text{dm}$、${@2}\\,\\text{dm}$。$V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$。",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "把尺寸换算成分米，因为 $1\\,\\text{dm}^3 = 1$ 升。",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "展开 $(x{@0})(x{@1})$，把结果写成 $x^2 + px + q$ 的形式。写出 $p$ 和 $q$，用分号隔开。",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "展开 ${@0}({@1})$（括号前的符号也要算上）。写出 $x$ 的系数和常数项。",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "展开 ${@0}({@1})$。写出 $x$ 的系数和常数项，用分号隔开。",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "展开并化简 ${@0}$，化成 $ax + b$ 的形式。写出 $a$ 和 $b$，用分号隔开。",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "去掉括号 ${@0}(x{@1})$。得到的常数项（不含 $x$）是多少？",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "去括号：${@0}{@1} = {@2}{@3}$。含 $x$ 的项移到左边，数移到右边：${@4} = {@5}$，所以 $x = {@6}$。",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "去括号：${@0}{@1}{@2}$。合并同类项：${@3}$，所以 $a = {@4}$，$b = {@5}$。",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "把两个分数都扩分成分母为 {@0} 的分数，再{@1}分子。得到的分子是多少？",
  "S – stred": "S – 圆心",
  "Sieť kvádra": "长方体的展开图",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "合并同类项。写出 $a$ 和 $b$，用分号隔开。",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "公分母是 {@0}：${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$。",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "一共是 {@0} 份相同的份数：{@1}占一份，{@2}占 {@3} 份。所以用和除以 {@4}。",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "两人一共 {@0} {@1}，但年龄不一样大，所以不能直接把和平分。要考虑年龄差 {@2} {@3}。",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "每个面是正方形。它的边长，也就是正方体的棱长，是多少（cm）？",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "中间项是乘积的 2 倍，$2ab$，不只是 $ab$。",
  "Stĺpcový diagram známok z písomky": "测验成绩的条形统计图",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "设{@1}{@0}的钱数为 $x$。“{@2}”表示 {@3} 倍。",
  "Syn": "儿子",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "和是 ${@0} = {@1}$，数的个数是 {@2}。平均数：${@3} : {@4} = {@5}$。",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "要用和除以所有数的个数。再数一遍有几个数。",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "和除以数的个数得到的是平均数，不是要找的数。用所有的数 $x$、$x + 1$、……列方程。",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "{@0}连续自然数的和是 {@1}。其中{@2}的数是多少？",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "乘积 $(+b)\\cdot(-b)$ 是负的，所以 $b^2$ 前面是负号。",
  "Sčítaj hodnoty všetkých stĺpcov.": "把所有柱子的值加起来。",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "把所有含 $x$ 的项的系数加起来。$a$ 是多少？",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "把两个结果加起来。这个式子的值是多少？",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "只把常数（不含 $x$）加起来。$b$ 是多少？",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "把所有的项加起来。这个式子的值是多少？",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "把所有的数加起来，再用和除以数的个数。",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "把 $x$ 的系数和常数分别相加。每一项前面的符号都属于这一项。",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "你只加了两条边。长方形有四条边，所以每个长度都要加两次。",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "把所有柱子的值加起来：${@0} = {@1}$。",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "那是 $(x - b)^2$ 的结果。和与差的乘积中，中间项会互相抵消。",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "那是乘积 $(a + b)(a - b)$ 的结果。差的平方还有中间项 $-2ab$，而且最后一项是正的。",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "这是算术平均数。中位数是排好序后正中间的那个数值。",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "这是另一条边的长度。题目问的是{@0}边。",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "这只是侧面积。表面积还包括两个底面。",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "这是最小的数，题目问的是最大的数。要加上最大的数比它大多少。",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "这是最大的数，题目问的是最小的数。",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "这是正方体的体积（$a^3$）。表面积是所有面的面积之和。",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "这是整个圆的面积。扇形只是按圆心角大小取的其中一部分。",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "这是一个面的面积。再开平方才能得到棱长。",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "这是周长（$2\\pi r$），或者你把 $r^2$ 算成了 $2r$。面积是 $\\pi r^2 = \\pi\\cdot r\\cdot r$。",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "这是正方体的表面积（$6a^2$）。体积是 $a^3$。",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "这是出现次数最多的数值重复的次数。众数是这个数值本身。",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "这是{@1}{@0}的钱数。题目问的是{@3}{@2}多少。",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "这是这些数的和。用和除以数的个数才得到平均数。",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "这是{@0}的年龄，题目问的是{@1}的年龄。",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "立方是三个相同因数的乘积。负数的奇次方是负数。",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "立方不是 3 倍：要把这个数作为因数写三次，再相乘。",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "一个三棱柱的底面是直角三角形，两条直角边分别是 ${@0}\\,\\text{cm}$ 和 ${@1}\\,\\text{cm}$（斜边是 ${@2}\\,\\text{cm}$），高是 ${@3}\\,\\text{cm}$。",
  "Trojnásobok": "3 倍",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "${@0}^\\circ$ 的角是周角的 $\\frac{{@1}}{360}$，所以扇形是圆的{@2}：$S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3.14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$。",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "要对整个差平方，而不只是数 $x$。",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "乘方的是整个差，而不是每个数分别乘方。要给差加上括号。",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "对整个数 $-{@0}$ 平方：$(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$。",
  "Urči medián čísel {@0}.": "求数据 {@0} 的中位数。",
  "Urči modus súboru údajov {@0}.": "求数据 {@0} 的众数。",
  "Usporiadame: {@0}. {@1}": "排序：{@0}。{@1}",
  "V ktorý deň si požičali najviac kníh?": "哪一天借出的书最多？",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "周长里较长的边算了两次，所以差 {@0} cm 也要算两次。",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "把年龄小的设为 $x$，年龄大的就是 $x$ 加上年龄差。两人的年龄之和等于题目给出的数。",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "设{@0}的年龄为 $x$。由方程 $x + (x + {@1}) = {@2}$ 算出 $2x$ 等于多少。",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "设{@0}的年龄为 $x$，那么{@1}的年龄是 $x + {@2}$。方程：$x + (x + {@3}) = {@4}$，所以 $2x = {@5}$，$x = {@6}$。{@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "取整个圆面积的这一部分。扇形的面积是多少（cm²）？",
  "Vnuk": "孙子",
  "Vnučka": "孙女",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "公式 $o = 2\\pi r$ 里是半径。如果知道直径，用 $o = \\pi d$ 就够了，不要再把直径乘 2。",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "用右边除以 $x$ 的系数。$x$ 等于多少？",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "用和除以数的个数。平均数是多少？",
  "Vydeľ. Aké je $x$?": "做除法。$x$ 等于多少？",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "把分母相乘。得到的分母是多少？",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "把两个括号里的常数相乘。$q$ 是多少？",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "把分子相乘。（约分前）得到的分子是多少？",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "乘以 $3.14$。圆的面积是多少（cm²）？",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "乘以 $3.14$。圆环的面积是多少（cm²）？",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "计算 $\\sqrt{{@0}} - \\sqrt{{@1}}$。",
  "Vypočítaj $\\sqrt{{@0}}$.": "计算 $\\sqrt{{@0}}$。",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "计算 ${@0}$。结果写成最简分数（例如 -5/6）或整数。",
  "Vypočítaj ${@0}^2$.": "计算 ${@0}^2$。",
  "Vypočítaj ${@0}^3$.": "计算 ${@0}^3$。",
  "Vypočítaj $|{@0}| - |{@1}|$.": "计算 $|{@0}| - |{@1}|$。",
  "Vypočítaj aritmetický priemer čísel {@0}.": "求 {@0} 的算术平均数。",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "当 $x = {@1}$ 时，求式子 ${@0}$ 的值。",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "当 $x = {@2}$ 时，求式子 ${@0}(x{@1})$ 的值。",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "当 $x = {@2}$，$y = {@3}$ 时，求式子 ${@0}{@1}$ 的值。",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "当 $x = {@2}$ 时，求式子 ${@0}{@1}$ 的值。",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "求棱长为 ${@0}\\,\\text{cm}$ 的正方体的体积（cm³）。",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "算出整个圆的面积，再取其中的一部分，这部分占的比例等于扇形的圆心角占 $360^\\circ$ 的比例。",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "求半径 $r = {@0}\\,\\text{cm}$、圆心角 ${@1}^\\circ$ 的扇形面积（cm²）。{@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "求半径为 $R = {@0}\\,\\text{cm}$ 和 $r = {@1}\\,\\text{cm}$ 的圆环面积（cm²）。{@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "求长方形的面积 $a\\cdot b$（cm²）。",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "算出三个不同的面的面积 $ab$、$bc$ 和 $ac$，再把它们加起来（cm²）。",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "求长方形的周长 $2a + 2b$（cm）。",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "求棱长为 ${@0}\\,\\text{cm}$ 的正方体的表面积（cm²）。",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "你算的是 $2x$，也就是所求年龄的 2 倍。还要除以 2。",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "你算的是面积。周长是四条边长度的和。",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "你算的是周长。长方形的面积是两条边长度的乘积。",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "解方程 $\\frac{x}{{@0}}{@1} = {@2}$。",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "解方程 ${@0}(x{@1}) = {@2}{@3}$。",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "解方程 ${@0}{@1} = {@2}{@3}$。",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "解方程。$x$（最小的数）是多少？",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "解方程。{@1}{@0}多少欧元？",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "你取的是周长（$2\\pi r$）的一部分，那是弧长。求扇形面积要从圆的面积 $\\pi r^2$ 出发。",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "两个数之间的距离是它们差的绝对值：$|{@0} - {@1}| = |{@2}| = {@3}$。",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "用公式 $o = 2\\pi r$ 除以 $2\\pi \\approx 6.28$。",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "平衡的天平：左边是两个袋子 x 和三个砝码，右边是九个砝码",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "用括号里的结果乘以 ${@0}$。这个式子的值是多少？",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "注意负号是否在括号里。乘方只作用在指数正下方的那部分。",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "由 $o = 2\\pi r$ 得 $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6.28} = {@1}\\,\\text{cm}$。",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "把数代入 $x$；如果是负数，要加上括号。",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "你把数弄混了：乘的是 {@0}，加的是 {@1}。",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "把结果 $\\frac{{@0}}{{@1}}$ 写成最简分数（或整数）。",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "把分数 $\\frac{{@0}}{{@1}}$ 写成最简分数（或整数）。",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "把数 ${@0}$ 写成 $a\\cdot 10^n$ 的形式，其中 $1 \\le a &lt; 10$。写出 $a$ 和 $n$，用分号隔开。",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "去掉左边的数 ${@0}$，只留下 ${@1}x$。右边的数是多少？",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "把式子 ${@0}$ 化简成 $ax + b$ 的形式。写出 $a$ 和 $b$，用分号隔开。",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "分数相减不能把分子和分母分别相减。先通分。",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "分数相加不能把分子和分母分别相加。先通分。",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "分数 $\\frac{x}{{@0}}$ 要用乘以 {@1} 的方法去掉，而不是除以。",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "把分数化成小数：${@0} = {@1}$。比较 ${@2}$ 和 ${@3}$，所以 ${@4} {@5} {@6}$。",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "${@0}$ 表示数 ${@1}$ 和字母 $x$ 的乘积，不是和。把代入的数放进括号里再相乘。",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "括号前的负数会改变括号里每一项的符号，包括最后的那个数。",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "负数乘方时要加括号：$({@0})^2$ 是正数。",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "加了括号就表示把整个和取 {@0} 次。这里是先取数 $x$ 的{@1}，再加上 {@2}。",
  "a $x + 2$": "和 $x + 2$",
  "autobusom 30 %": "坐公共汽车 30 %",
  "babka": "奶奶",
  "babky": "奶奶",
  "banán": "香蕉",
  "beh": "跑步",
  "d = 2r – priemer": "d = 2r – 直径",
  "dedka": "爷爷",
  "dedko": "爷爷",
  "dlhšia": "较长的",
  "dlhšiu": "较长的",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "数 $x$ 与数 {@0} 的差的平方",
  "dvojnásobku": "2 倍",
  "dvojnásobok": "2 倍",
  "futbal": "足球",
  "hokej": "冰球",
  "hruška": "梨",
  "jahoda": "草莓",
  "k – kružnica": "k – 圆周",
  "kratšia": "较短的",
  "kratšiu": "较短的",
  "mama": "妈妈",
  "mamy": "妈妈",
  "miest": "位",
  "na bicykli 20 %": "骑自行车 20 %",
  "napr. -2; 8": "例如 -2; 8",
  "napr. 4; 5": "例如 4; 5",
  "napr. 6; -9": "例如 6; -9",
  "objem (v cm³)": "体积（cm³）",
  "obsah (v cm²)": "面积（cm²）",
  "obvod (v cm)": "周长（cm）",
  "otca": "爸爸",
  "otec": "爸爸",
  "pešo 50 %": "步行 50 %",
  "plávanie": "游泳",
  "podstava": "底面",
  "polomer $r = {@0}\\,\\text{cm}$": "半径 $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "表面积（cm²）",
  "povrch; objem": "表面积; 体积",
  "priemer $d = {@0}\\,\\text{cm}$": "直径 $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "5 倍",
  "päťnásobok": "5 倍",
  "r – polomer": "r – 半径",
  "rovnaké, výsledok je kladný": "相同，结果为正",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "数 $x$ 的{@0}与数 {@1} 的差",
  "rôzne, výsledok je záporný": "不同，结果为负",
  "slivka": "李子",
  "stĺpcový diagram": "条形统计图",
  "sčítaj": "加上",
  "tenis": "网球",
  "tri štvrtiny": "四分之三",
  "troch": "三个",
  "trojnásobku": "3 倍",
  "trojnásobok": "3 倍",
  "ušetril": "存了",
  "ušetrila": "存了",
  "vnuk": "孙子",
  "vnuka": "孙子",
  "vnučka": "孙女",
  "vnučky": "孙女",
  "výsek s uhlom α": "圆心角为 α 的扇形",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} “{@1}”这根柱子比“{@2}”这根高多少？{@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} 求它的表面积（cm²）和体积（cm³），用分号隔开。",
  "{@0} Vypočítaj jeho {@1}.": "{@0} 求它的{@1}。",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0}和{@1}一共存了 {@2} €。{@3}存的钱是{@6}的 {@5}。{@8}存了多少欧元？",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0}比{@4}大 {@1} {@2}。两人的年龄之和是 {@5} {@6}。{@7}多少岁？",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0}有 $x$ 欧元，{@1}有 ${@2}x$ 欧元。两人一共是几个 $x$，也就是方程 $\\square\\, x = {@3}$ 的方框里该填什么数？",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0}是 ${@1} + {@2} = {@3}$ {@4}。",
  "{@0} má {@1} {@2}.": "{@0} {@1} {@2}。",
  "{@0} súčtu čísla $x$ a čísla {@1}": "数 $x$ 与数 {@1} 的和的{@0}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0}表示乘以 {@1}，而不是加上 {@2}。",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}：$x$，{@1}：${@2}x$。方程：$x + {@3}x = {@4}$，所以 ${@5}x = {@6}$，$x = {@7}$。{@8}{@9} {@10} €。",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}：${@1}x = {@2}$。两边同时除以 ${@3}$：$x = {@4}$。",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "分子乘分子，分母乘分母：${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$。",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "项 ${@0}$ 的系数是 ${@1}$，别忘了把它算进去。",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "含 $x$ 的项移到左边，数移到右边：${@0}{@1} = {@2}{@3}$，所以 ${@4} = {@5}$，$x = {@6}$。",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "把含 $x$ 的项移到一边，数移到另一边。最后除以 $x$ 的系数。",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "含 $x$ 的项：${@0}{@1}{@2} = {@3}$。常数：${@4}{@5} = {@6}$。结果：${@7}$，所以 $a = {@8}$，$b = {@9}$。",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "一共有 {@0} 个数。正中间的数排第几？",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "两个数在 0 的两侧，所以它们到 0 的距离要相加，而不是相减。",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "两个数符号不同，所以不能把绝对值相加，而要用较大的减去较小的。结果的符号与绝对值较大的数相同。",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "先把数从小到大排列。",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "设这些数为 $x$、$x + 1${@0}。方程：${@1}x + {@2} = {@3}$，所以 ${@4}x = {@5}$，$x = {@6}$。{@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "把数从小到大排列。排在第 {@0} 个的数是多少？",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "把数从小到大排列。这个位置上的数是多少？那就是中位数。",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "数 $a$ 必须满足 $1 \\le a &lt; 10$，所以它的小数点前只有一个数字。",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "数 $a$ 的小数点前只有一个数字。指数 $n$ 表示小数点要移动几位。",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "$q$ 是把括号里的常数相乘得到的，而不是相加。",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "数 ${@0}$ 乘的是括号里的全部内容，不只是 $x$。",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "根号下的数有两位小数，结果会有一位小数：试着算 $\\sqrt{{@0}}$，再除以 10。",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "括号前的数要乘括号里的两项，不只是 $x$，还有常数。",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "数 {@0} 出现了三次，其他的数只出现一次。众数是 {@1}。",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "用括号前的数乘括号里的每一项，连同符号一起。然后合并同类项。",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "用括号前的数乘括号里的每一项，包括最后的常数。",
  "číslo o {@0} menšie ako polovica čísla $x$": "比数 $x$ 的一半小 {@0} 的数",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "比数 $x$ 的{@1}大 {@0} 的数",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "边长为 a 加 b 的正方形被分成四部分",
  "Štvornásobok": "4 倍",
  "štvornásobku": "4 倍",
  "štvornásobok": "4 倍",
  "štyroch": "四个",
  "Žiaci hlasovali o obľúbenom ovocí.": "学生们投票选出最喜欢的水果。",
  "Žiaci uviedli svoj obľúbený šport.": "学生们说出了自己最喜欢的运动。",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "“小 {@0}”表示从一半里减去 {@1}，顺序是反的。",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "“大 {@0}”表示加上 {@1}，而不是减去。",
  "ℕ – prirodzené": "ℕ – 自然数",
  "ℚ – racionálne čísla": "ℚ – 有理数",
  "ℤ – celé čísla": "ℤ – 整数"
 }
});
