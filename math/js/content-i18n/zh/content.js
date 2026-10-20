/* 中文: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/content/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "cisla": {
   "title": "数的表达式与运算顺序",
   "summary": "数、括号以及正确的运算顺序。",
   "theory": [
    "<p>自然数是 $1, 2, 3, 4, \\dots$，它们组成的集合记作 $\\mathbb{N}$。加上零，就得到非负整数；再加上负数，就得到整数集 $\\mathbb{Z}$。</p>",
    {
     "fig": "numberline",
     "caption": "数轴：蓝色的点是自然数，零的左边是负整数。"
    },
    "<p><strong>运算顺序：</strong></p>\n       <ol><li>先算括号里的式子，</li><li>再算乘方和开方，</li>\n       <li>然后从左到右算乘法和除法，</li><li>最后从左到右算加法和减法。</li></ol>"
   ],
   "examples": [
    {
     "task": "计算 $2 + 3\\cdot 4 - 6 : 2$。",
     "steps": [
      "先算乘法和除法：$3\\cdot 4 = 12$，$6 : 2 = 3$。",
      "式子变为 $2 + 12 - 3$。",
      "从左到右：$2 + 12 = 14$，再算 $14 - 3 = 11$。",
      "<strong>结果：11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "分数及分数运算",
   "summary": "约分、扩分以及分数的计算。",
   "theory": [
    "<p>分数 $\\frac{a}{b}$ 的分子是 $a$，分母是 $b \\neq 0$。分子和分母同时乘以同一个非零数，分数的值不变（<strong>扩分</strong>）。反过来的过程叫作<strong>约分</strong>。</p>",
    {
     "fig": "fractions",
     "caption": "扩分不改变分数的值：$\\frac{1}{2}=\\frac{3}{6}$ 和 $\\frac{2}{3}=\\frac{4}{6}$ 的涂色部分一样长。"
    },
    "<p><strong>加法和减法</strong>需要通分（找公分母）：$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$。</p>",
    "<p><strong>乘法</strong>：$\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$。<strong>除法</strong>就是乘以除数的倒数：$\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $\\frac{1}{2}+\\frac{2}{3}$。",
     "steps": [
      "公分母是 $2\\cdot 3 = 6$。",
      "$\\frac{1}{2}=\\frac{3}{6}$，$\\frac{2}{3}=\\frac{4}{6}$。",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$。",
      "<strong>结果：$\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "百分数与百分比计算",
   "summary": "求百分数，按百分比增加和减少。",
   "theory": [
    "<p>$p\\,\\%$ 表示 $\\frac{p}{100}$。数 $x$ 的 $p\\,\\%$ 是 $\\frac{p}{100}\\cdot x$。</p>",
    {
     "fig": "percent",
     "caption": "整体是 100 份。$25\\,\\%$ 表示其中的 25 份。"
    },
    "<p><strong>增加</strong> $p\\,\\%$ 就是乘以 $1+\\frac{p}{100}$，<strong>减少</strong> $p\\,\\%$ 就是乘以 $1-\\frac{p}{100}$。</p>",
    "<p>小数 $0.25$ 等于分数 $\\frac{1}{4}$，也等于 $25\\,\\%$。在中文里，小数点写作圆点。</p>"
   ],
   "examples": [
    {
     "task": "一件商品的价格是 $80\\,€$。涨价 $15\\,\\%$ 后是多少钱？",
     "steps": [
      "乘数是 $1+\\frac{15}{100}=1.15$。",
      "$80\\cdot 1.15 = 92$。",
      "<strong>结果：92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "集合及集合运算",
   "summary": "元素、并集、交集、差集和元素个数。",
   "theory": [
    "<p>集合是由互不相同的元素组成的整体。记号 $a\\in A$ 表示元素 $a$ 属于集合 $A$。空集记作 $\\varnothing$。</p>",
    "<p>运算：<strong>并集</strong> $A\\cup B$（至少属于其中一个集合的元素），<strong>交集</strong> $A\\cap B$（同时属于两个集合的元素），<strong>差集</strong> $A\\setminus B$（属于 $A$ 但不属于 $B$ 的元素）。</p>",
    {
     "fig": "venn",
     "caption": "$A=\\{1,2,3,4\\}$ 和 $B=\\{3,4,5\\}$ 的维恩图。交集位于两个圆的重叠部分。"
    },
    "<p>元素个数记作 $|A|$。有 $|A\\cup B| = |A|+|B|-|A\\cap B|$：交集中的元素被算了两次，所以要减去一次。</p>"
   ],
   "examples": [
    {
     "task": "已知 $A=\\{1,2,3,4\\}$，$B=\\{3,4,5\\}$。求 $A\\cup B$、$A\\cap B$ 和 $A\\setminus B$。",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "平面图形的周长和面积",
   "summary": "长方形、三角形和圆的周长与面积。",
   "theory": [
    "<p>边长为 $a$ 和 $b$ 的长方形，周长 $o=2(a+b)$，面积 $S=a\\cdot b$。</p>",
    "<p>底为 $z$、该底上的高为 $v$ 的三角形，面积 $S=\\frac{z\\cdot v}{2}$。</p>",
    "<p>半径为 $r$ 的圆，周长 $o=2\\pi r$，面积 $S=\\pi r^2$，其中 $\\pi\\approx 3.14159$。</p>",
    {
     "fig": "shapes",
     "caption": "长方形的边 $a$、$b$，三角形的底 $z$ 和高 $v$，圆的半径 $r$。"
    }
   ],
   "examples": [
    {
     "task": "一个圆的半径 $r=3\\,\\text{cm}$。求它的面积。",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$。",
      "$9\\pi\\approx 28.27\\,\\text{cm}^2$。"
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "勾股定理",
   "summary": "求直角三角形的边长。",
   "theory": [
    "<p>在直角边为 $a$、$b$，斜边为 $c$ 的直角三角形中，有 $a^2+b^2=c^2$。斜边与直角相对，并且总是最长的边。</p>",
    {
     "fig": "pythagoras",
     "caption": "边长为 $3, 4, 5$ 的三角形：两条直角边上正方形的面积 $9+16$ 之和等于斜边上正方形的面积 $25$。"
    },
    "<p>常用的整数勾股数：$(3,4,5)$、$(5,12,13)$、$(8,15,17)$、$(7,24,25)$ 以及它们的倍数。</p>"
   ],
   "examples": [
    {
     "task": "两条直角边的长分别是 $6$ 和 $8$。斜边有多长？",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$。",
      "$c=\\sqrt{100}=10$。"
     ]
    }
   ]
  },
  "linearne": {
   "title": "一元一次方程",
   "summary": "同解变形与一次方程。",
   "theory": [
    "<p>解方程要用<strong>同解变形</strong>：方程两边同时加上或减去同一个数，两边同时乘以或除以同一个非零数。</p>",
    "<p>方程 $ax+b=c$（$a\\neq 0$）的解法：$ax=c-b$，所以 $x=\\frac{c-b}{a}$。</p>",
    "<p>检验时，把结果代入原方程。</p>"
   ],
   "examples": [
    {
     "task": "解方程 $3x+5=20$。",
     "steps": [
      "两边减去 $5$：$3x=15$。",
      "两边除以 $3$：$x=5$。",
      "检验：$3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "一元二次方程",
   "summary": "判别式、求根公式和韦达定理。",
   "theory": [
    "<p>一元二次方程 $ax^2+bx+c=0$（$a\\neq 0$）的根是 $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$，其中 $D=b^2-4ac$ 叫作<strong>判别式</strong>。</p>",
    "<p>若 $D&gt;0$，方程有两个不相等的实数根。若 $D=0$，方程有两个相等的实数根（重根）。若 $D&lt;0$，方程没有实数根。</p>",
    {
     "fig": "parabola",
     "caption": "$y=x^2+px+q$ 的图像（即 $b=p$，$c=q$）。方程的根就是抛物线与 $x$ 轴的交点。改变 $p$ 和 $q$，观察判别式的变化。"
    },
    "<p><strong>韦达定理</strong>（当 $a=1$ 时）：$x_1+x_2=-b$，$x_1\\cdot x_2=c$。</p>"
   ],
   "examples": [
    {
     "task": "解方程 $x^2-5x+6=0$。",
     "steps": [
      "$a=1$，$b=-5$，$c=6$，$D=25-24=1$。",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$，所以 $x_1=3$，$x_2=2$。",
      "验证：$3+2=5$，$3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "乘方与开方",
   "summary": "幂和根式的运算法则。",
   "theory": [
    "<p>当 $a&gt;0$，$m,n$ 为整数时：$a^m\\cdot a^n=a^{m+n}$，$\\frac{a^m}{a^n}=a^{m-n}$，$(a^m)^n=a^{m\\cdot n}$。</p>",
    "<p>负指数：$a^{-n}=\\frac{1}{a^n}$。零指数：当 $a\\neq 0$ 时，$a^0=1$。</p>",
    "<p>开方是乘方的逆运算：$\\sqrt{a}=a^{1/2}$，$\\sqrt[n]{a}=a^{1/n}$。并且 $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$。</p>"
   ],
   "examples": [
    {
     "task": "化简 $\\frac{2^5\\cdot 2^{-2}}{2}$。",
     "steps": [
      "分子：$2^5\\cdot 2^{-2}=2^{3}$。",
      "$\\frac{2^3}{2}=2^{2}$。",
      "<strong>结果：$4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "直角三角形中的三角函数",
   "summary": "直角三角形中的正弦、余弦和正切。",
   "theory": [
    "<p>在锐角为 $\\alpha$ 的直角三角形中：$\\sin\\alpha=\\frac{\\text{对边}}{\\text{斜边}}$，$\\cos\\alpha=\\frac{\\text{邻边}}{\\text{斜边}}$，$\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$。</p>",
    {
     "fig": "trigtriangle",
     "caption": "直角三角形各边相对于角 $\\alpha$ 的名称。"
    },
    "<p>基本恒等式：$\\sin^2\\alpha+\\cos^2\\alpha=1$。</p>",
    {
     "fig": "unitcircle",
     "caption": "单位圆：圆上的点的坐标是 $(\\cos\\alpha, \\sin\\alpha)$。拖动角度，观察符号如何变化。"
    },
    "<p>特殊角的三角函数值：</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "已知 $\\sin\\alpha=0.6$，且 $\\alpha$ 是锐角，求 $\\cos\\alpha$。",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0.36=0.64$。",
      "$\\cos\\alpha=\\sqrt{0.64}=0.8$（锐角的余弦为正）。"
     ]
    }
   ]
  },
  "matice": {
   "title": "2×2 矩阵的行列式与逆矩阵",
   "summary": "矩阵的记法、2×2 行列式和逆矩阵。",
   "theory": [
    "<p>$m\\times n$ 矩阵是一个有 $m$ 行、$n$ 列的数表。第 $i$ 行第 $j$ 列的元素记作 $a_{ij}$。</p>",
    "<p>矩阵 $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ 的行列式是 $\\det A=ad-bc$。若 $\\det A\\neq 0$，则存在逆矩阵 $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$。</p>",
    {
     "fig": "parallelogram",
     "caption": "矩阵 $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ 的列是向量 $u=(2,1)$ 和 $v=(3,4)$。行列式的绝对值等于它们所围成的平行四边形的面积：$|\\det|=5$。"
    },
    "<p>线性方程组可以写成 $Ax=b$，并用逆矩阵求解：$x=A^{-1}b$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$。",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$。"
     ]
    }
   ]
  },
  "sucin": {
   "title": "矩阵乘法",
   "summary": "矩阵如何相乘，以及为什么顺序很重要。",
   "theory": [
    "<p>当 $A$ 的列数等于 $B$ 的行数时，乘积 $C=AB$ 才存在。第 $i$ 行第 $j$ 列的元素是 $c_{ij}=\\sum_k a_{ik}b_{kj}$：用矩阵 $A$ 的一行与矩阵 $B$ 的一列对应相乘再相加。</p>",
    {
     "fig": "matmul",
     "caption": "元素 $c_{11}$ 由 $A$ 的第 1 行和 $B$ 的第 1 列得到：$1\\cdot 0+2\\cdot 1=2$。"
    },
    "<p>矩阵乘法<strong>不满足交换律</strong>：一般来说 $AB\\neq BA$。</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$，$B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$。求 $AB$。",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$，$c_{12}=1\\cdot 1+2\\cdot 0=1$。",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$，$c_{22}=3\\cdot 1+4\\cdot 0=3$。",
      "<strong>结果：</strong>$AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "函数的导数",
   "summary": "瞬时变化率、求导法则和切线。",
   "theory": [
    "<p>导数 $f'(x_0)$ 是极限 $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$（如果存在）。从几何上看，它是 $f$ 的图像在点 $x_0$ 处切线的斜率。</p>",
    {
     "fig": "tangent",
     "caption": "$f(x)=x^3-2x$ 的图像及其在点 $x_0$ 处的切线。切线的斜率是 $f'(x_0)=3x_0^2-2$。切线水平的地方，导数为零。"
    },
    "<p>法则：$(x^n)'=n\\,x^{n-1}$，$(c)'=0$，$(c\\,f)'=c\\,f'$，$(f+g)'=f'+g'$，$(f\\cdot g)'=f'g+fg'$，$(\\sin x)'=\\cos x$，$(\\cos x)'=-\\sin x$。</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$。求 $f'(2)$。",
     "steps": [
      "$f'(x)=3x^2-2$。",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$。"
     ]
    }
   ]
  },
  "integraly": {
   "title": "积分学基础",
   "summary": "不定积分、定积分和牛顿-莱布尼茨公式。",
   "theory": [
    "<p>函数 $f$ 的原函数 $F$ 满足 $F'(x)=f(x)$。不定积分：$\\int f(x)\\,dx=F(x)+C$。当 $n\\neq -1$ 时，$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$。</p>",
    "<p>定积分用<strong>牛顿-莱布尼茨公式</strong>计算：$\\int_a^b f(x)\\,dx=F(b)-F(a)$。从几何上看，它是 $f$ 的图像下方从 $a$ 到 $b$ 的区域面积（当 $f$ 为正时）。</p>",
    {
     "fig": "area",
     "caption": "$f(x)=x^2$ 的图像下方从 $0$ 到 $b$ 的面积是 $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$。"
    },
    "<p>线性性质：$\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $\\int_0^2 3x^2\\,dx$。",
     "steps": [
      "原函数：$F(x)=x^3$。",
      "$F(2)-F(0)=8-0=8$。",
      "<strong>结果：8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$，$B={@1}$。乘积 $AB$ 第 {@2} 行第 {@3} 列的元素是多少？",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$，所以 $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$。",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — 结果请写成 $p/q$ 形式的分数（例如 5/6）。",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$，所以 $b={@3}$。",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$，所以 $c={@3}$。",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$，所以 $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$。",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "数 $x$ 的 $p\\,\\%$ 是 $\\frac{p}{100}\\cdot x$。",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$，所以 $\\frac{{@2}}{100}\\cdot {@3}={@4}$。",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$，所以 $x={@4}$。",
  "25 štvorčekov zo 100": "100 个小方格中的 25 个",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "结果 ${@0}^{\\square}$ 的指数是多少？",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "公分母（两个分母的积 ${@0}\\cdot {@1}$）是多少？",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "两根之和 $x_1 + x_2$ 是多少（根据韦达定理）？",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "两根之积 $x_1 \\cdot x_2$ 是多少？",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "导数是 $f'(x)=k\\,x^{{@0}}{@1}$。系数 $k$ 是多少？",
  "Determinant ako obsah rovnobežníka": "行列式表示平行四边形的面积",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "你代入了原来的函数 $f$。要先求导，再代入。",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "你代入了原来的函数。要先求出原函数 $F$，再代入它。",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "你只代入了上限。还要用 $F({@0})$ 减去 $F({@1})$。",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "你代入的是直径 ${@0}$。公式 $\\pi r^2$ 中的半径是 $r={@1}$。",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "第二个乘积：${@0}\\cdot {@1}$ 等于多少？",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "你直接把长度相减了。勾股定理是关于平方的：$b^2=c^2-a^2$。",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "你把指数相加了。幂的乘方，指数要相乘。",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "你把指数相乘了。同底数幂相乘，指数要相加。",
  "Graf funkcie s dotyčnicou": "函数图像及其切线",
  "Graf kvadratickej funkcie": "二次函数的图像",
  "Horná hranica b": "上限 b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "找两个数，它们的积是 $q$，和是 $-p$。",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "这个恒等式是关于平方的：$\\cos^2\\alpha = 1 - \\sin^2\\alpha$，而不是 $\\cos\\alpha = 1 - \\sin\\alpha$。",
  "Jednotková kružnica": "单位圆",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "你把系数 {@0} 减掉了。$x$ 前面是乘法，所以两边都要除以 {@1}。",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "求出的根大了一倍。在公式 $x=\\frac{-p\\pm\\sqrt{D}}{2}$ 中别忘了除以 2。",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "{@0} 的 $1\\,\\%$ 是多少？",
  "Koľko je $F({@0}) - F({@1})$?": "$F({@0}) - F({@1})$ 等于多少？",
  "Koľko je $F({@0})$?": "$F({@0})$ 等于多少？",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "$\\cos\\alpha$（锐角，取正的平方根）保留 3 位小数是多少？",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "$\\cos^2\\alpha = 1 - \\sin^2\\alpha$ 等于多少？请写成分数。",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "$\\pi\\cdot {@0}$ 等于多少（取 $\\pi\\approx 3{{@1}}14$）？",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "$\\sin^2\\alpha$ 等于多少？请写成分数（例如 9/25）。",
  "Koľko je $a^2 = {@0}^2$?": "$a^2 = {@0}^2$ 等于多少？",
  "Koľko je $b = \\sqrt{{@0}}$?": "$b = \\sqrt{{@0}}$ 等于多少？",
  "Koľko je $b^2 = {@0} - {@1}$?": "$b^2 = {@0} - {@1}$ 等于多少？",
  "Koľko je $b^2 = {@0}^2$?": "$b^2 = {@0}^2$ 等于多少？",
  "Koľko je $c = \\sqrt{{@0}}$?": "$c = \\sqrt{{@0}}$ 等于多少？",
  "Koľko je $c^2 = {@0} + {@1}$?": "$c^2 = {@0} + {@1}$ 等于多少？",
  "Koľko je $c^2 = {@0}^2$?": "$c^2 = {@0}^2$ 等于多少？",
  "Koľko je $f'({@0})$?": "$f'({@0})$ 等于多少？",
  "Koľko je $r^2 = {@0}^2$?": "$r^2 = {@0}^2$ 等于多少？",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "$z\\cdot v = {@0}\\cdot {@1}$ 等于多少？",
  "Koľko je ${@0} + {@1} - {@2}$?": "${@0} + {@1} - {@2}$ 等于多少？",
  "Koľko je ${@0} - ({@1})$?": "${@0} - ({@1})$ 等于多少？",
  "Koľko je ${@0} : {@1}$?": "${@0} : {@1}$ 等于多少？",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "${@1}$ 的 ${@0}\\,\\%$ 是多少？",
  "Koľko je ${@0}\\cdot {@1}$?": "${@0}\\cdot {@1}$ 等于多少？",
  "Koľko je ${@0}^{{@1}}$?": "${@0}^{{@1}}$ 等于多少？",
  "Koľko je $|A| + |B|$?": "$|A| + |B|$ 等于多少？",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "那么 {@1} 的 ${@0}\\,\\%$ 是多少？",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "圆的半径是 $r={@0}$。求它的面积 $S$（取 $\\pi\\approx 3{{@1}}14$）。",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "哪两个数的和是 {@0}，积是 {@1}？用分号隔开填写。",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "矩阵相乘不是把相同位置的元素相乘。要用矩阵 $A$ 的行乘矩阵 $B$ 的列，再把乘积相加。",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "你把分母化成了公分母，但没有扩分子。分子要乘以和分母相同的数。",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "集合 $A$ 有 ${@0}$ 个元素，集合 $B$ 有 ${@1}$ 个元素，它们的交集有 ${@2}$ 个元素。$A\\cup B$ 有多少个元素？",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "先算乘除：${@0}\\cdot {@1} = {@2}$，${@3} : {@4} = {@5}$。再算 ${@6} + {@7} - {@8} = {@9}$。",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "先在两边同时减去常数，再除以 $x$ 的系数。",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "先算乘法和除法，再算加法和减法。",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "你把同一列的元素相乘了。要沿对角线相乘：$a\\cdot d$ 和 $b\\cdot c$。",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "长方形的两边是 $a={@0}$ 和 $b={@1}$。它的面积 $S$ 是多少？",
  "Obdĺžnik, trojuholník a kruh": "长方形、三角形和圆",
  "Obsah kruhu je $\\pi r^2$.": "圆的面积是 $\\pi r^2$。",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "长方形的面积等于两条相邻边长度的乘积。",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "三角形的面积等于底和高乘积的一半。",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "你直接把两条直角边相加了。勾股定理是关于平方的：$c^2=a^2+b^2$。",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "锐角 $\\alpha$ 满足 $\\sin\\alpha=\\frac{{@0}}{{@1}}$。求 $\\cos\\alpha$（保留 3 位小数）。",
  "Plocha pod grafom funkcie": "函数图像下方的面积",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "用 $(x^n)'=n\\,x^{n-1}$，对每一项分别求导。",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "用 $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$，再用牛顿-莱布尼茨公式。",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "用勾股定理 $c^2=a^2+b^2$。",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "用恒等式 $\\sin^2\\alpha+\\cos^2\\alpha=1$。",
  "Pozri si tabuľku hodnôt v teórii.": "看看理论部分的数值表。",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "你从左到右依次计算了。乘法和除法要先于加法和减法。",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "直角三角形的两条直角边是 $a={@0}$ 和 $b={@1}$。斜边 $c$ 的长度是多少？",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "直角三角形的斜边是 $c={@0}$，一条直角边是 $a={@1}$。另一条直角边 $b$ 的长度是多少？",
  "Pravouhlý trojuholník s popisom strán": "标出各边名称的直角三角形",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "对于 $2\\times 2$ 矩阵，$\\det=ad-bc$。",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "对于函数 $f(x)={@0}x^{{@1}}{@2}$，求 $f'({@3})$。",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "把常数移到右边。${@0}x$ 等于多少？",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "同底数幂相乘，指数相加。",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "把 {@0} 移到另一边时，你没有变号。两边要做同样的逆运算。",
  "Pri umocňovaní mocniny sa exponenty násobia.": "幂的乘方，指数相乘。",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "原函数是 $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$，所以 $F({@3})-F({@4})={@5}$。",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "原函数是 $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$。$F({@3})$ 等于多少？",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "交集中的元素被数了两次，所以要减去它们。",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "你把交集中的元素减了两次。它们属于并集，只减一次。",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "你把交集中的元素算了两次——它们既在 $A$ 中，也在 $B$ 中。减去一次。",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "交集中的元素在这个和里出现了两次。${@0} - {@1}$ 等于多少？",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "第一个乘积：${@0}\\cdot {@1}$ 等于多少？",
  "Pytagorova veta: štvorce nad stranami": "勾股定理：各边上的正方形",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "把第二个分数扩分成分母为 {@0} 的分数。它的分子是多少？",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "把第一个分数扩分成分母为 {@0} 的分数。它的分子是多少？",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "公分母是 ${@0}$：$\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}。",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "你把两边相加了。长方形的面积要把它们相乘。",
  "Súčet: koľko je ${@0} + {@1}$?": "和：${@0} + {@1}$ 等于多少？",
  "Súčin matíc: riadok krát stĺpec": "矩阵乘法：行乘列",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "主对角线上的乘积：$({@0})\\cdot({@1})$ 等于多少？",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "副对角线上的乘积：$({@0})\\cdot({@1})$ 等于多少？",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "你把两个乘积相加了。行列式是差：主对角线上的乘积减去副对角线上的乘积。",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "把分子相加，并把结果写成分数 $p/q$。",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "你把分子和分母分别相加了。分数要先通分再相加——分母不相加。",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "这是 $\\cos^2\\alpha$。最后还要开平方。",
  "To je $b^2$. Na konci ešte odmocni.": "这是 $b^2$。最后还要开平方。",
  "To je $c^2$. Na konci ešte odmocni.": "这是 $c^2$。最后还要开平方。",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "这是角 ${@1}^\\circ$ 的{@0}值。角增大时，正弦从 0 增大到 1，余弦从 1 减小到 0。",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "这是周长（所有边的和）。面积是两条相邻边的乘积。",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "这是圆的周长 $2\\pi r$。面积是 $\\pi r^2$。",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "这是到 100 % 的剩余部分。问的是 {@1} 的 ${@0}\\,\\%$ 本身。",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "三角形是长方形的一半。${@0} : 2$ 等于多少？",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "三角形的底是 $z={@0}$，高是 $v={@1}$。它的面积 $S$ 是多少？",
  "Uhol α (°)": "角 α (°)",
  "Vennov diagram dvoch množín": "两个集合的维恩图",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "取矩阵 $A$ 的第 $i$ 行和矩阵 $B$ 的第 $j$ 列，把对应元素相乘。",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "韦达定理：$x_1+x_2={@0}$，$x_1\\cdot x_2={@1}$。两根是 $x_1={@2}$ 和 $x_2={@3}$。",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "两边同时除以 {@0}。$x$ 等于多少？",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "计算 $({@0}^{{@1}})^{{@2}}$。",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "计算 $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$。",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "求 ${@0}\\,{@1}^\\circ$ 的小数值（保留 3 位小数）。",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "计算 ${@0}^{{@1}}\\cdot {@2}^{{@3}}$。",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "计算行列式 $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$。",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "解方程 $x^2{@0}{@1} = 0$。填写两个根，用分号隔开（例如 2; 3）。",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "解方程 ${@0}x{@1} = {@2}$。",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "由勾股定理得出 $b^2=c^2-a^2$。",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "你从矩阵 $B$ 中取了行。乘积的元素是矩阵 $A$ 的第 {@0} 行乘矩阵 $B$ 的第 {@1} 列。",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "你忘了除以 2。三角形是边长为 $z$ 和 $v$ 的长方形的一半。",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "你忘了除以 {@0}：$\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$。",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "你忘了把指数 {@0} 移到 $x$ 前面：$(x^{{@1}})'={@2}x^{{@3}}$。",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "你忘了除法。要减去的不是 {@0}，而是 ${@1} : {@2}$ 的结果。",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "你忘了把半径平方：面积是 $\\pi\\cdot r\\cdot r$。",
  "Zlomky ako pruhy": "用长条表示分数",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "把分数通分：$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$。",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "你把底数相乘了。底数 {@0} 不变，只把指数相加。",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">面积 = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "根 x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "余弦",
  "kruh": "圆",
  "napr. 5/6": "例如 5/6",
  "nemá reálne korene (D &lt; 0)": "没有实数根 (D &lt; 0)",
  "obdĺžnik": "长方形",
  "odvesna": "直角边",
  "prepona": "斜边",
  "prirodzené čísla ℕ": "自然数 ℕ",
  "priľahlá odvesna": "邻边",
  "protiľahlá": "对边",
  "sínusu": "正弦",
  "trojuholník": "三角形",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span>（切线的斜率）",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "负整数",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "你没有对 ${@0}x$ 这一项求导。它的导数是 {@1}。",
  "Číselná os": "数轴",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "你用数除以了百分数。${@0}\\,\\%$ 表示百分之 {@1}，所以先求 1 %（除以 100），再乘以 {@2}。",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "正方形被分成 100 份，其中 25 份涂了颜色",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
