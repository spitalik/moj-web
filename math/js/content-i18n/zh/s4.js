/* 中文: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/s4/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "s4-limita": {
   "title": "函数的极限",
   "summary": "函数值趋近于什么，0/0 型极限的计算和无穷远处的极限。",
   "theory": [
    "<p>记号 $\\lim_{x\\to a} f(x) = L$ 表示：只要 $x$ 足够接近 $a$（且 $x\\neq a$），函数值 $f(x)$ 就可以任意接近数 $L$。\n       极限与函数在点 $a$ 处的值<strong>无关</strong>，函数在该点甚至可以没有定义。\n       极限存在当且仅当<strong>单侧极限</strong> $\\lim_{x\\to a^-} f(x)$ 和 $\\lim_{x\\to a^+} f(x)$ 相等。</p>",
    {
     "fig": "s4-limita",
     "caption": "函数 $f(x)=\\frac{\\sin x}{x}$ 在点 $0$ 处没有定义（空心圆），但 $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$。减小 $h$，观察函数值。"
    },
    "<p><strong>如何计算极限：</strong></p>\n       <ul><li>如果 $f$ 在点 $a$ 处连续（多项式、$\\sin$、$\\mathrm{e}^x$ …），直接代入即可：$\\lim_{x\\to a} f(x) = f(a)$。</li>\n       <li>$\\frac{0}{0}$ 型的式子要变形：分解因式后约分，或者把根式有理化，利用平方差公式。</li>\n       <li>重要极限：$\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$，因此 $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$。</li>\n       <li>$c\\neq 0$ 时，$\\frac{c}{0}$ 型的式子得到无穷极限 $\\pm\\infty$；符号由单侧极限确定。</li></ul>",
    "<p>有理函数<strong>在无穷远处的极限</strong>：把分子和分母都除以分母中 $x$ 的最高次幂。\n       次数相同时，极限等于首项系数之比；如果分子的次数较低，极限为 $0$。\n       例如 $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$。如果 $\\lim_{x\\to\\pm\\infty} f(x) = q$，直线 $y=q$ 是图象的水平渐近线。</p>"
   ],
   "examples": [
    {
     "task": "计算 $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$。",
     "steps": [
      "直接代入得到 $\\frac{0}{0}$，所以需要变形。",
      "分解分子：$x^2-9=(x-3)(x+3)$。当 $x\\neq 3$ 时约分：$\\frac{(x-3)(x+3)}{x-3}=x+3$。",
      "$\\lim_{x\\to 3}(x+3)=6$。",
      "<strong>结果：6</strong>"
     ]
    },
    {
     "task": "计算 $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$。",
     "steps": [
      "分子和分母都除以 $x^2$：$\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$。",
      "当 $x\\to\\infty$ 时，分式 $\\frac{1}{x}$、$\\frac{7}{x^2}$ 和 $\\frac{5}{x^2}$ 都趋近于零。",
      "<strong>结果：$\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "基本初等函数的导数",
   "summary": "指数函数、对数函数和三角函数的导数，积、商和复合函数的导数。",
   "theory": [
    "<p><strong>基本初等函数的导数：</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\tan x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>法则：</strong>积 $(u\\cdot v)'=u'v+uv'$，商 $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$（$v\\neq 0$），\n       复合函数 $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$ —— “外层”函数的导数乘以“内层”函数的导数。\n       例如 $(\\sin 3x)'=3\\cos 3x$，$(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$，$\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$。</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "$y=\\mathrm{e}^x$ 和 $y=\\ln x$ 的图象关于直线 $y=x$ 对称。$\\mathrm{e}^x$ 的图象在点 $[0; 1]$ 处的切线斜率为 $\\mathrm{e}^0=1$，$\\ln x$ 的图象在点 $[1; 0]$ 处的切线斜率为 $\\frac{1}{1}=1$。"
    },
    "<p>函数 $f$ 的图象在点 $[x_0; f(x_0)]$ 处的<strong>切线</strong>方程为 $y=f(x_0)+f'(x_0)(x-x_0)$。</p>"
   ],
   "examples": [
    {
     "task": "求 $f(x)=x^2\\sin x$ 的导数。",
     "steps": [
      "这是积 $u=x^2$，$v=\\sin x$，其中 $u'=2x$，$v'=\\cos x$。",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "对于 $f(x)=\\ln(x^2+1)$，求 $f'(1)$，并写出在点 $x_0=1$ 处的切线方程。",
     "steps": [
      "复合函数：外层 $\\ln u$ 的导数是 $\\frac{1}{u}$，内层 $u=x^2+1$ 的导数是 $2x$。",
      "$f'(x)=\\frac{2x}{x^2+1}$，所以 $f'(1)=\\frac{2}{2}=1$。",
      "$f(1)=\\ln 2$，切线：$y=\\ln 2+1\\cdot(x-1)$，即 $y=x-1+\\ln 2$。"
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "函数的单调性与极值",
   "summary": "导数的符号，驻点，极值和最值，最优化问题。",
   "theory": [
    "<p>如果在区间 $I$ 上 $f'(x)&gt;0$，函数 $f$ 在其上<strong>递增</strong>；如果 $f'(x)&lt;0$，则<strong>递减</strong>。\n       使 $f'(x)=0$ 的点叫做<strong>驻点</strong>。（可导）函数只可能在驻点处取得极值。</p>",
    {
     "fig": "s4-extremy",
     "caption": "$f(x)=x^3-3x$ 的图象，$f'(x)=3x^2-3=3(x-1)(x+1)$。绿色部分：$f'&gt;0$，橙色部分：$f'&lt;0$。在点 $-1$ 处有极大值 $2$，在点 $1$ 处有极小值 $-2$。"
    },
    "<p><strong>判断极值：</strong>如果 $f'$ 的符号由 $+$ 变为 $-$，该点是<strong>极大值点</strong>；由 $-$ 变为 $+$，则是<strong>极小值点</strong>。\n       也可以用二阶导数：$f'(x_0)=0$ 且 $f''(x_0)&lt;0$ 时为极大值，$f''(x_0)&gt;0$ 时为极小值。</p>",
    "<p><strong>闭区间</strong> $\\langle a; b\\rangle$ <strong>上的最值</strong>：比较区间内各驻点处的函数值和端点 $a$、$b$ 处的函数值。\n       <strong>最优化问题</strong>也这样解：把所求的量表示成一个变量的函数，求它的最大值或最小值。</p>"
   ],
   "examples": [
    {
     "task": "求函数 $f(x)=x^3-6x^2+9x+1$ 的极值。",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$，驻点是 $1$ 和 $3$。",
      "在 $(-\\infty; 1)$ 上 $f'&gt;0$，在 $(1; 3)$ 上 $f'&lt;0$，在 $(3; \\infty)$ 上 $f'&gt;0$。",
      "在点 $1$ 处有极大值 $f(1)=5$，在点 $3$ 处有极小值 $f(3)=1$。"
     ]
    },
    {
     "task": "用一根长 $40\\,\\text{cm}$ 的铁丝弯成一个面积尽可能大的长方形。它的长和宽是多少？",
     "steps": [
      "两边长为 $x$ 和 $20-x$，面积 $S(x)=x(20-x)=20x-x^2$，$x\\in(0; 20)$。",
      "$x=10$ 时 $S'(x)=20-2x=0$；$S''(x)=-2&lt;0$，是极大值。",
      "<strong>面积最大的是 $10\\times 10\\,\\text{cm}$ 的正方形，$S=100\\,\\text{cm}^2$。</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "函数的性态与图象",
   "summary": "定义域、奇偶性、渐近线、极值、凹凸性和拐点。",
   "theory": [
    "<p><strong>研究函数的性态</strong>按步骤进行：</p>\n       <ol><li>定义域 $D(f)$，必要时研究奇偶性（偶函数 $f(-x)=f(x)$，奇函数 $f(-x)=-f(x)$）和周期性，</li>\n       <li>图象与坐标轴的交点和函数的符号，</li>\n       <li>在 $D(f)$ 端点处的极限和<strong>渐近线</strong>，</li>\n       <li>$f'$：单调区间和极值，</li>\n       <li>$f''$：函数<strong>下凸</strong>（$f''&gt;0$）或<strong>上凸</strong>（$f''&lt;0$）的区间，以及凹凸性改变的<strong>拐点</strong>，</li>\n       <li>画出图象草图。</li></ol>",
    "<p><strong>渐近线：</strong>如果当 $x\\to a^+$ 或 $x\\to a^-$ 时 $f(x)$ 趋于 $\\pm\\infty$（通常是分母的零点），直线 $x=a$ 是竖直渐近线。\n       如果 $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$，$q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$，直线 $y=kx+q$ 是斜渐近线；$k=0$ 时就是水平渐近线 $y=q$。\n       分式线性函数 $f(x)=\\frac{ax+b}{cx+d}$ 的渐近线是 $x=-\\frac{d}{c}$ 和 $y=\\frac{a}{c}$。</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "$f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ 的图象及渐近线 $x=1$ 和 $y=2$。绿色的点是与坐标轴的交点 $[-\\frac{1}{2}; 0]$ 和 $[0; -1]$。函数在 $(-\\infty; 1)$ 和 $(1; \\infty)$ 上都递减。"
    },
    "<p>下凸函数的图象位于它的每条切线的上方（图象“能盛水”），上凸函数的图象位于切线下方。\n       三次多项式 $ax^3+bx^2+cx+d$ 总是恰好有一个拐点，位于 $x=-\\frac{b}{3a}$ 处。</p>"
   ],
   "examples": [
    {
     "task": "求函数 $f(x)=x^3-3x^2+4$ 的拐点，并确定它在哪里下凸。",
     "steps": [
      "$f'(x)=3x^2-6x$，$f''(x)=6x-6$。",
      "$x=1$ 时 $f''(x)=0$；$x&lt;1$ 时 $f''&lt;0$，$x&gt;1$ 时 $f''&gt;0$。",
      "拐点是 $[1; f(1)]=[1; 2]$，函数在 $(1; \\infty)$ 上下凸，在 $(-\\infty; 1)$ 上上凸。"
     ]
    },
    {
     "task": "研究函数 $f(x)=\\frac{x}{x^2+1}$ 的奇偶性，并求它的水平渐近线。",
     "steps": [
      "$D(f)=\\mathbb{R}$ 关于零对称，且 $f(-x)=\\frac{-x}{x^2+1}=-f(x)$，函数是奇函数（图象关于原点对称）。",
      "分子的次数低于分母，所以 $\\lim_{x\\to\\pm\\infty}f(x)=0$。",
      "水平渐近线是 $y=0$（$x$ 轴）。"
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "图形的面积与积分换元",
   "summary": "两条曲线之间图形的面积，初等函数的积分和线性换元。",
   "theory": [
    "<p>如果在区间 $\\langle a; b\\rangle$ 上 $f(x)\\le g(x)$，两个图象之间图形的面积为 $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$ —— “上减下”。\n       积分限 $a$、$b$ 通常是两个图象交点的横坐标，由方程 $f(x)=g(x)$ 求得。\n       如果函数图象在 $x$ 轴下方，它的定积分为负，因此面积是定积分的绝对值。</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "直线 $y=2x$ 和抛物线 $y=x^2$ 交于 $x=0$ 和 $x=2$。图形的面积为 $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$。"
    },
    "<p><strong>初等函数的积分：</strong>$\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$，$\\int \\frac{1}{x}\\,dx=\\ln|x|+c$，$\\int \\sin x\\,dx=-\\cos x+c$，$\\int \\cos x\\,dx=\\sin x+c$。</p>",
    "<p><strong>线性换元：</strong>如果 $F$ 是 $f$ 的原函数，那么 $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$。\n       例如 $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$，或 $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$。结果总可以通过求导来检验。</p>"
   ],
   "examples": [
    {
     "task": "求由抛物线 $y=4-x^2$ 和 $x$ 轴围成的图形的面积。",
     "steps": [
      "与 $x$ 轴的交点：$4-x^2=0$，所以 $x=\\pm 2$。在两点之间抛物线位于 $x$ 轴上方。",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$。",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "用换元法计算 $\\int_0^{1} (2x+1)^2\\,dx$。",
     "steps": [
      "原函数：$F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$。",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$。",
      "展开检验：$\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "复合函数与反函数",
   "summary": "函数的复合，一一对应的函数，反函数的求法以及图象关于直线 y = x 的对称性。",
   "theory": [
    "<p><strong>复合函数</strong> $f\\circ g$ 由 $(f\\circ g)(x)=f(g(x))$ 给出：先用 $g$（内层函数），再对结果用 $f$（外层函数）。\n       顺序很重要，一般地 $f\\circ g\\neq g\\circ f$。例如对于 $f(x)=x^2$，$g(x)=x+1$，有 $f(g(x))=(x+1)^2$，但 $g(f(x))=x^2+1$。</p>",
    "<p>如果函数把不同的 $x$ 对应到不同的值（每条水平直线与图象至多相交一次），它就是<strong>一一对应的</strong>。只有一一对应的函数才有\n       <strong>反函数</strong> $f^{-1}$，满足 $f^{-1}(y)=x \\Leftrightarrow f(x)=y$。并且 $D(f^{-1})=H(f)$，$H(f^{-1})=D(f)$。</p>",
    "<p><strong>求</strong> $f^{-1}$ <strong>的步骤</strong>：在方程 $y=f(x)$ 中交换 $x$ 和 $y$，再解出 $y$。对于 $f(x)=2x-6$：$x=2y-6$，所以 $f^{-1}(x)=\\frac{x+6}{2}$。\n       $f$ 和 $f^{-1}$ 的图象关于直线 $y=x$ 对称。$a^x$ 和 $\\log_a x$ 也互为反函数，所以 $a^{\\log_a x}=x$，$\\log_a a^x=x$。</p>",
    {
     "fig": "s4-inverzna",
     "caption": "$y=a^x$ 的图象（蓝色）和反函数 $y=\\log_a x$ 的图象（绿色）。一个图象上的每个点 $[u; v]$ 在另一个图象上都有对应点 $[v; u]$。"
    }
   ],
   "examples": [
    {
     "task": "已知 $f(x)=x^2-1$，$g(x)=3x+2$。求 $(f\\circ g)(1)$ 和 $(g\\circ f)(1)$。",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$。",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$。",
      "结果不同 —— 函数的复合不满足交换律。"
     ]
    },
    {
     "task": "求 $f(x)=\\frac{x+1}{x-2}$，$x\\neq 2$ 的反函数。",
     "steps": [
      "交换变量：$x=\\frac{y+1}{y-2}$。",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$。",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$，$x\\neq 1$</strong>（函数 $f$ 取不到值 $1$）。"
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "指数方程与对数方程",
   "summary": "换元法，不同底数的方程，取对数和有解的条件。",
   "theory": [
    "<p><strong>指数方程的基本类型：</strong></p>\n       <ul><li>同底数：$a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$（$a&gt;0$，$a\\neq 1$），</li>\n       <li><strong>换元</strong>：用 $t=2^x&gt;0$ 把 $4^x-6\\cdot 2^x+8=0$ 改写成 $t^2-6t+8=0$，</li>\n       <li><strong>不同底数</strong>：两边取对数，例如 $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$；把方程 $c\\cdot a^x=d\\cdot b^x$ 变形为 $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$。</li></ul>",
    "<p><strong>对数方程：</strong>先确定条件（对数的真数必须为正），再利用法则\n       $\\log_a u+\\log_a v=\\log_a(uv)$，$\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$，$k\\log_a u=\\log_a u^k$，由 $\\log_a u=c$ 得 $u=a^c$。\n       每个解都要代入检验或与条件比较 —— 变形可能产生增根。</p>",
    "<p>含有 $\\log_a x$ 的不同次幂的方程用换元 $t=\\log_a x$ 来解：由 $(\\log x)^2-3\\log x+2=0$ 得 $t\\in\\{1; 2\\}$，所以 $x\\in\\{10; 100\\}$。\n       注意：$(\\log x)^2$ 与 $\\log x^2=2\\log x$ 不同。</p>"
   ],
   "examples": [
    {
     "task": "解方程 $9^x-4\\cdot 3^x+3=0$。",
     "steps": [
      "$9^x=(3^x)^2$，换元 $t=3^x&gt;0$：$t^2-4t+3=0$，所以 $t_1=1$，$t_2=3$。",
      "$3^x=1 \\Rightarrow x=0$；$3^x=3 \\Rightarrow x=1$。",
      "<strong>$K=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "解方程 $\\log_3(x+1)+\\log_3(x-1)=1$。",
     "steps": [
      "条件：$x+1&gt;0$ 且 $x-1&gt;0$，即 $x&gt;1$。",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$。",
      "只有 $x=2$ 满足条件，舍去根 $-2$。",
      "<strong>$K=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "三角方程",
   "summary": "关于正弦或余弦的二次方程，公式的运用和通解。",
   "theory": [
    "<p><strong>基本方程</strong> $\\sin x=a$、$\\cos x=a$ 只在 $a\\in\\langle -1; 1\\rangle$ 时有解，在每个周期 $2\\pi$ 内通常有两个解。\n       例如 $\\sin x=\\frac{1}{2}$ 在 $\\langle 0; 2\\pi)$ 内的解是 $\\frac{\\pi}{6}$ 和 $\\frac{5\\pi}{6}$，通解为 $x=\\frac{\\pi}{6}+2k\\pi$ 或 $x=\\frac{5\\pi}{6}+2k\\pi$，$k\\in\\mathbb{Z}$。\n       方程 $\\tan x=a$ 对每个 $a$ 都有解，它的周期是 $\\pi$：$x=x_0+k\\pi$。</p>",
    "<p>关于 $\\sin x$ 或 $\\cos x$ 的<strong>二次方程</strong>用换元法解：$2\\sin^2 x-3\\sin x+1=0$ 令 $t=\\sin x$ 得 $2t^2-3t+1=0$，所以 $t\\in\\{\\frac{1}{2}; 1\\}$。\n       舍去 $\\langle -1; 1\\rangle$ 之外的根。</p>",
    "<p><strong>有用的公式：</strong>$\\sin^2 x+\\cos^2 x=1$（把方程化成只含一种函数），$\\sin 2x=2\\sin x\\cos x$，$\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$。\n       公因式要<strong>提取出来</strong>，绝不能两边同除以它 —— 否则会丢失使它为零的解。</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "在 $x\\in\\langle 0; 2\\pi)$ 内解方程 $2\\cos^2 x+3\\sin x-3=0$。",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$：$2-2\\sin^2 x+3\\sin x-3=0$，即 $2\\sin^2 x-3\\sin x+1=0$。",
      "换元 $t=\\sin x$：$2t^2-3t+1=0$，$t_1=1$，$t_2=\\frac{1}{2}$。",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$；$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ 或 $x=\\frac{5\\pi}{6}$。",
      "<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "在 $\\mathbb{R}$ 中解方程 $\\sin 2x=\\cos x$。",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$。",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$。",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ 或 $x=\\frac{5\\pi}{6}+2k\\pi$，$k\\in\\mathbb{Z}$。"
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "方程组与不等式组",
   "summary": "非线性方程组，曲线的交点，一元和二元不等式组。",
   "theory": [
    "<p><strong>非线性方程组</strong>最常用<strong>代入消元法</strong>求解：从较简单的（一次）方程中用一个未知数表示另一个，再代入另一个方程。\n       解是有序数对 $[x; y]$；解的个数等于两个方程的图象的交点个数。方程组 $x+y=s$，$xy=p$ 根据韦达定理化为方程 $t^2-st+p=0$。</p>",
    "<p><strong>一元不等式组：</strong>分别解每个不等式，结果是各解集的<strong>交集</strong>。\n       两边乘以或除以负数时，不等号要改变方向。</p>",
    "<p><strong>二元一次不等式组</strong>表示平面的一部分：每个不等式 $y\\le kx+q$ 表示直线 $y=kx+q$ 下方的半平面（包括直线本身）。\n       不等式组的解是这些半平面的交集 —— 常常是一个多边形。</p>",
    {
     "fig": "s4-oblast",
     "caption": "不等式组 $y\\ge 0$，$y\\le x+2$，$y\\le -x+4$ 表示顶点为 $[-2; 0]$、$[4; 0]$ 和 $[1; 3]$ 的三角形。它的面积是 $\\frac{6\\cdot 3}{2}=9$。"
    }
   ],
   "examples": [
    {
     "task": "解方程组 $x+y=7$，$x\\cdot y=10$。",
     "steps": [
      "由第一个方程得 $y=7-x$，代入：$x(7-x)=10 \\Rightarrow x^2-7x+10=0$。",
      "$x_1=2$，$x_2=5$，对应 $y_1=5$，$y_2=2$。",
      "<strong>解：$[2; 5]$ 和 $[5; 2]$</strong>"
     ]
    },
    {
     "task": "在 $\\mathbb{R}$ 中解不等式组 $3x-2&gt;4$ 和 $5-x\\ge -1$。",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$。",
      "$-x\\ge -6 \\Rightarrow x\\le 6$（除以负数，不等号改变方向）。",
      "<strong>$K=(2; 6\\rangle$</strong>，其中的整数是 $3, 4, 5, 6$。"
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "含参数的方程和方程组",
   "summary": "根据参数讨论解的个数，含参数的一元二次方程和方程组。",
   "theory": [
    "<p><strong>参数</strong>是方程中代表一个固定但任意的数的字母。对它的所有取值同时解方程，\n       并进行<strong>讨论</strong>：参数取哪些值时方程有一个解、多个解或无解。\n       例如 $px=3$ 当 $p\\neq 0$ 时有唯一解 $x=\\frac{3}{p}$，当 $p=0$ 时无解。</p>",
    "<p><strong>一元二次方程</strong> $ax^2+bx+c=0$（$a\\neq 0$）当 $D&gt;0$ 时有两个不同的实数根，当 $D=0$ 时有一个二重根，当 $D&lt;0$ 时没有实数根。\n       如果已知一个根，把它代入就得到关于参数的方程；另一个根再用韦达定理 $x_1+x_2=-\\frac{b}{a}$，$x_1x_2=\\frac{c}{a}$ 很容易求出。\n       如果 $x^2$ 的系数含参数，必须单独研究 $a=0$ 的情况（方程是一次方程）。</p>",
    "<p><strong>二元一次方程组</strong> $a_1x+b_1y=c_1$，$a_2x+b_2y=c_2$ 当 $a_1b_2-a_2b_1\\neq 0$ 时（直线相交）恰有一个解。\n       如果 $a_1b_2-a_2b_1=0$，两直线平行：或者不重合（无解），或者重合（无穷多个解）。</p>"
   ],
   "examples": [
    {
     "task": "参数 $p$ 取何值时，方程 $x^2-4x+p=0$ 有两个不同的实数根？",
     "steps": [
      "$D=16-4p$。",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$。",
      "<strong>当 $p\\in(-\\infty; 4)$ 时</strong>；当 $p=4$ 时有二重根 $2$，当 $p&gt;4$ 时没有实数根。"
     ]
    },
    {
     "task": "$m$ 取何值时，方程组 $mx+2y=4$，$2x+my=-4$ 无解？",
     "steps": [
      "当 $m=\\pm 2$ 时行列式 $m\\cdot m-2\\cdot 2=m^2-4=0$；否则方程组有唯一解。",
      "$m=2$：$2x+2y=4$ 和 $2x+2y=-4$ 是两条不同的平行直线 —— 无解。",
      "$m=-2$：$-2x+2y=4$ 和 $2x-2y=-4$ 是同一条直线 —— 无穷多个解。",
      "<strong>当 $m=2$ 时方程组无解。</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "直线与圆的解析表示",
   "summary": "直线与圆的位置关系，交点和圆的切线。",
   "theory": [
    "<p>圆心为 $S[m; n]$、半径为 $r$ 的圆的方程为 $(x-m)^2+(y-n)^2=r^2$。平面内的直线有一般式方程 $ax+by+c=0$，\n       其中 $\\vec{n}=(a; b)$ 是它的法向量。点 $S[m; n]$ 到直线的距离为 $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$。</p>",
    "<p><strong>位置关系：</strong>如果 $d&lt;r$，直线是<strong>割线</strong>（2 个公共点）；如果 $d=r$，是<strong>切线</strong>（1 个公共点）；如果 $d&gt;r$，直线与圆<strong>相离</strong>。\n       也可以用代数方法判断：把直线代入圆的方程，得到一个一元二次方程，它的判别式决定交点的个数。</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "圆 $x^2+y^2=9$ 和直线 $y=-0.75x+q$。移动 $q$：当且仅当 $q=\\pm 3.75$ 时，圆心到直线的距离等于半径，直线是切线。"
    },
    "<p>圆上一点 $T$ <strong>处的切线</strong>垂直于半径 $ST$，所以向量 $\\vec{ST}$ 是它的法向量。\n       对于圆 $x^2+y^2=r^2$ 和圆上的点 $T[x_0; y_0]$，切线方程为 $x_0x+y_0y=r^2$。</p>"
   ],
   "examples": [
    {
     "task": "求圆 $x^2+y^2=25$ 与直线 $x-y+1=0$ 的交点。",
     "steps": [
      "由直线方程得 $y=x+1$，代入：$x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$。",
      "$x_1=3$，$x_2=-4$，对应 $y_1=4$，$y_2=-3$。",
      "<strong>交点：$[3; 4]$ 和 $[-4; -3]$</strong>"
     ]
    },
    {
     "task": "写出圆 $(x-1)^2+(y+2)^2=25$ 在点 $T[4; 2]$ 处的切线方程。",
     "steps": [
      "圆心 $S[1; -2]$，$\\vec{ST}=(3; 4)$ 是切线的法向量：$3x+4y+c=0$。",
      "代入 $T$：$12+8+c=0$，所以 $c=-20$。",
      "<strong>切线：$3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "点、直线和平面的位置关系",
   "summary": "平行、相交和异面直线，直线与平面、两个平面的位置关系及其解析描述。",
   "theory": [
    "<p><strong>空间中的两条直线</strong>或者<strong>重合</strong>，或者<strong>平行</strong>（在同一平面内且没有公共点），\n       或者<strong>相交</strong>（恰有一个公共点），或者<strong>异面</strong> —— 没有公共点且不在同一平面内。\n       平面内不存在异面直线，在空间中却很常见。</p>",
    {
     "fig": "s4-kocka",
     "caption": "正方体 $ABCDEFGH$。直线 $AB$（蓝色）和 $CG$（绿色）是异面直线，直线 $AB$ 和 $EG$（橙色）也是。直线 $CG$ 和 $EG$ 相交，交于点 $G$。"
    },
    "<p><strong>直线与平面：</strong>直线或者在平面内，或者与平面平行（没有公共点），或者与平面相交（一个公共点 —— 交点）。\n       如果直线与平面内的某条直线平行，它就与这个平面平行。<strong>两个平面</strong>重合、平行或相交 —— 相交时交于一条直线。</p>",
    "<p><strong>解析表示：</strong>直线有参数方程 $X=A+t\\vec{u}$，$t\\in\\mathbb{R}$；平面有一般式方程 $ax+by+cz+d=0$，法向量为 $\\vec{n}=(a; b; c)$。\n       方向向量成倍数的直线平行或重合。如果 $\\vec{u}\\cdot\\vec{n}=0$，直线与平面平行或在平面内。\n       在棱长为 $1$ 的正方体中计算时，取 $A[0; 0; 0]$，$B[1; 0; 0]$，$D[0; 1; 0]$，$E[0; 0; 1]$。</p>"
   ],
   "examples": [
    {
     "task": "在正方体 $ABCDEFGH$ 中，判断直线 $BG$ 和 $AH$ 的位置关系。",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$，$\\vec{AH}=H-A=(0; 1; 1)$ —— 方向向量相同。",
      "点 $A$ 不在直线 $BG$ 上，所以两直线不重合。",
      "<strong>直线 $BG$ 和 $AH$ 平行</strong>（在平面 $ABGH$ 内）。"
     ]
    },
    {
     "task": "判断点 $Q[5; 1; -2]$ 是否在直线 $p: X=[1; 3; 0]+t\\,(2; -1; -1)$ 上。",
     "steps": [
      "由第一个坐标：$1+2t=5$，所以 $t=2$。",
      "当 $t=2$ 时：$y=3-2=1$ ✓，$z=0-2=-2$ ✓。",
      "<strong>点 $Q$ 在直线上</strong>（参数 $t=2$）。"
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "空间中的角和距离",
   "summary": "两点间的距离，点到直线和点到平面的距离，两直线所成的角和直线与平面所成的角 —— 主要在正方体中。",
   "theory": [
    "<p><strong>距离：</strong>两点间的距离为 $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$。点到直线的距离是到直线的垂线段的长度，\n       点 $P$ 到平面 $ax+by+cz+d=0$ 的距离为 $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$。\n       在棱长为 $a$ 的正方体中：面对角线为 $a\\sqrt2$，体对角线为 $a\\sqrt3$。</p>",
    "<p><strong>两条直线所成的角</strong>（异面直线也一样）是它们的方向向量的夹角，取值范围为 $\\langle 0^\\circ; 90^\\circ\\rangle$：\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$。<strong>直线与平面所成的角</strong>是直线与它在平面内的射影所成的角；\n       用法向量 $\\vec{n}$ 表示为 $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$。</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "体对角线 $AG$ 与底面所成的角是 $AG$ 与它的射影 $AC$ 之间的角。由直角三角形 $ACG$：$\\tan\\varphi=\\frac{a}{a\\sqrt2}$，所以 $\\varphi\\approx 35.26^\\circ$。"
    },
    "<p><strong>向量积</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ 与两个向量都垂直，它的模等于以它们为边的平行四边形的面积。\n       因此点 $P$ 到直线 $X=Q+t\\vec{u}$ 的距离为 $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$，平面 $QRS$ 的法向量为 $\\vec{QR}\\times\\vec{QS}$。</p>"
   ],
   "examples": [
    {
     "task": "正方体 $ABCDEFGH$ 的棱长 $a=6\\,\\text{cm}$。求顶点 $A$ 到棱 $GH$ 的中点 $K$ 的距离。",
     "steps": [
      "$A[0; 0; 0]$，$G[6; 6; 6]$，$H[0; 6; 6]$，所以 $K[3; 6; 6]$。",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$。",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "在棱长为 $a$ 的正方体中，求顶点 $A$ 到平面 $BDE$ 的距离。",
     "steps": [
      "$B[a; 0; 0]$，$D[0; a; 0]$，$E[0; 0; a]$ 在平面 $x+y+z-a=0$ 上。",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$。",
      "这是体对角线 $AG$ 的三分之一。"
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "棱柱、棱锥、圆柱、圆锥和球",
   "summary": "立体图形的性质，立体图形内部的直角三角形，表面积和体积，球的截面。",
   "theory": [
    "<p><strong>棱柱</strong>和<strong>圆柱</strong>有两个全等且平行的底面：$V=S_p\\cdot v$，$S=2S_p+S_{pl}$。圆柱：$V=\\pi r^2v$，$S=2\\pi r^2+2\\pi rv$。\n       <strong>棱锥</strong>和<strong>圆锥</strong>有一个底面和一个顶点：$V=\\frac{1}{3}S_p\\cdot v$。母线为 $s$ 的圆锥：$V=\\frac{1}{3}\\pi r^2 v$，$S=\\pi r^2+\\pi rs$，其中 $s^2=r^2+v^2$。\n       <strong>球</strong>：$V=\\frac{4}{3}\\pi r^3$，$S=4\\pi r^2$。</p>",
    {
     "fig": "s4-ihlan",
     "caption": "正四棱锥：高 $v$、斜高 $v_s$ 和棱长的一半 $\\frac{a}{2}$ 组成直角三角形：$v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$。对于侧棱 $h$ 有 $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$。"
    },
    "<p>底面棱长为 $a$ 的<strong>正四棱锥</strong>有 $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$，$V=\\frac{1}{3}a^2v$。\n       解决大多数问题的关键是找到正确的直角三角形 —— 例如高、底面对角线的一半和侧棱：$h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$。</p>",
    "<p>用到球心距离为 $d$ 的平面截<strong>球</strong>，<strong>截面</strong>是半径为 $\\rho=\\sqrt{r^2-d^2}$ 的圆。<strong>正三棱柱</strong>的底面\n       是面积为 $\\frac{\\sqrt3}{4}a^2$ 的等边三角形。</p>"
   ],
   "examples": [
    {
     "task": "正四棱锥的底面棱长 $a=10\\,\\text{cm}$，高 $v=12\\,\\text{cm}$。求它的表面积和体积。",
     "steps": [
      "斜高：$v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$。",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$。",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$。"
     ]
    },
    {
     "task": "用到球心距离为 $6\\,\\text{cm}$ 的平面截半径 $r=10\\,\\text{cm}$ 的球。截面的面积是多少？",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$。",
      "$S=\\pi\\rho^2=64\\pi\\approx 201.06\\,\\text{cm}^2$。"
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "较复杂立体图形的表面积和体积",
   "summary": "圆台和棱台，组合体，相似立体图形和实际问题。",
   "theory": [
    "<p>上下底面半径为 $R$、$r$，高为 $v$，母线为 $s$ 的<strong>圆台</strong>：$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$，侧面积 $S_{pl}=\\pi s(R+r)$，\n       表面积 $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$。母线由梯形轴截面求得：$s^2=v^2+(R-r)^2$。</p>",
    {
     "fig": "s4-zrezany",
     "caption": "用平行于底面的平面截去圆锥的上部，就得到圆台。高 $v$、半径之差 $R-r$ 和母线 $s$ 组成直角三角形。"
    },
    "<p>上下底面面积为 $S_1$、$S_2$，高为 $v$ 的<strong>棱台</strong>的体积为 $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$；\n       对于底面棱长为 $a_1$、$a_2$ 的正四棱台，$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$。\n       <strong>组合体</strong>分成熟悉的立体图形，体积相加（有空腔时相减）。计算表面积时要注意：相互接触的面不计入表面积。</p>",
    "<p>相似比为 $k$ 的<strong>相似立体图形</strong>，表面积之比为 $k^2$，体积之比为 $k^3$。如果所有尺寸都扩大为原来的 2 倍，\n       表面积扩大为 4 倍，体积扩大为 8 倍。熔铸时体积保持不变。</p>"
   ],
   "examples": [
    {
     "task": "一个水桶的形状是圆台，半径 $R=15\\,\\text{cm}$，$r=10\\,\\text{cm}$，高 $v=30\\,\\text{cm}$。它能装多少升水？",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$。",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14.9\\,\\ell$。"
     ]
    },
    {
     "task": "一个筒仓的形状是半径 $3\\,\\text{m}$、高 $8\\,\\text{m}$ 的圆柱，上面有一个半径相同的半球。求筒仓的体积。",
     "steps": [
      "圆柱：$\\pi\\cdot 9\\cdot 8=72\\pi$。",
      "半球：$\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$。",
      "<strong>$V=90\\pi\\approx 282.74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "统计总体、变量、统计表和统计图",
   "summary": "总体和变量，频数和频率，频数分布表，统计图及其解读。",
   "theory": [
    "<p><strong>统计总体</strong>是所研究对象（个体）的集合，个体的数目 $n$ 是<strong>总体容量</strong>。\n       所观察的特征是<strong>统计变量</strong>：<strong>定性变量</strong>（用文字表示 —— 颜色、品牌、专业）或<strong>定量变量</strong>（用数表示）。\n       如果定量变量只取孤立的值（兄弟姐妹的个数），它是<strong>离散的</strong>；如果它可以取某个区间内的任意值（身高、时间），它是<strong>连续的</strong>。</p>",
    "<p>某个值的<strong>频数</strong> $n_i$ 是取这个值的个体数，<strong>频率</strong>是 $f_i=\\frac{n_i}{n}$（常用百分数表示）。\n       所有 $n_i$ 之和为 $n$，所有 $f_i$ 之和为 $1$。数据记录在<strong>频数分布表</strong>中。</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "有 $28$ 名学生的班级的成绩条形图（1 分最好，5 分最差）。例如得 $2$ 分的有 $9$ 名学生，频率为 $\\frac{9}{28}\\approx 32.1\\,\\%$。"
    },
    "<p><strong>统计图：</strong>条形图（各值的频数），扇形图（某个值的扇形的圆心角为 $f_i\\cdot 360^\\circ$），频率分布直方图（用于分组到区间的连续变量）\n       和折线图（随时间的变化）。<strong>解读</strong>时要注意不从零开始的坐标轴 —— 这时很小的差别看起来也会很大。</p>"
   ],
   "examples": [
    {
     "task": "表中列出了上学的交通方式：公共汽车 12，汽车 5，自行车 3，步行 10。公共汽车在扇形图中占多大部分（圆心角）？",
     "steps": [
      "$n=12+5+3+10=30$。",
      "$f=\\frac{12}{30}=0.4=40\\,\\%$。",
      "圆心角：$0.4\\cdot 360^\\circ=144^\\circ$。"
     ]
    },
    {
     "task": "根据上面的条形图，求全班的平均成绩。",
     "steps": [
      "$n=6+9+7+4+2=28$。",
      "成绩总和：$1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$。",
      "$\\bar{x}=\\frac{71}{28}\\approx 2.54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "平均数、中位数、众数和方差",
   "summary": "集中趋势和离散程度的特征数：平均数、中位数、众数、四分位数、方差和标准差。",
   "theory": [
    "<p><strong>集中趋势的特征数：</strong>算术平均数 $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$（由频数表求加权平均数：$\\bar{x}=\\frac{\\sum n_ix_i}{n}$），\n       <strong>中位数</strong> —— 排好序的数据中间的值（$n$ 为偶数时取中间两个数的平均数），<strong>众数</strong> —— 出现次数最多的值。\n       与平均数不同，中位数不受极端值的影响（例如一份非常高的工资）。</p>",
    "<p><strong>离散程度的特征数：</strong>极差 $R=x_{\\max}-x_{\\min}$，<strong>方差</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       （各数据与平均数之差的平方的平均数，也可写成 $s^2=\\overline{x^2}-\\bar{x}^2$），以及<strong>标准差</strong> $s=\\sqrt{s^2}$，它与数据的单位相同。</p>",
    "<p><strong>四分位数：</strong>下四分位数 $Q_1$ 是数据下半部分的中位数，上四分位数 $Q_3$ 是上半部分的中位数。\n       $Q_1$ 和 $Q_3$ 之间是中间一半的数据，它们的差 $Q_3-Q_1$ 是四分位距。五个数（最小值、$Q_1$、中位数、$Q_3$、最大值）用箱线图表示。</p>",
    {
     "fig": "s4-krabica",
     "caption": "数据 $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$ 的箱线图：最小值 $2$，$Q_1=5$，中位数 $7$，$Q_3=9$，最大值 $14$。"
    }
   ],
   "examples": [
    {
     "task": "求数据 $3, 8, 5, 3, 6, 9, 3, 7$ 的平均数、中位数和众数。",
     "steps": [
      "排序：$3, 3, 3, 5, 6, 7, 8, 9$；$n=8$。",
      "$\\bar{x}=\\frac{44}{8}=5.5$。",
      "中位数 $=\\frac{5+6}{2}=5.5$，众数 $=3$（出现三次）。"
     ]
    },
    {
     "task": "求数据 $4, 6, 7, 9, 9$ 的方差和标准差。",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$。偏差：$-3, -1, 0, 2, 2$。",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3.6$。",
      "$s=\\sqrt{3.6}\\approx 1.90$。"
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "计数问题",
   "summary": "典型问题中的不重复和可重复的排列、全排列和组合。",
   "theory": [
    "<p><strong>乘法原理：</strong>如果第一件东西有 $m$ 种选法，对每种选法第二件东西有 $n$ 种选法，那么共有 $m\\cdot n$ 对。\n       当各种可能互相排斥时，用<strong>加法原理</strong>。较难的问题要分情况讨论（例如按末位数字分类），再把各种情况相加。</p>",
    "<table class=\"tbl\"><tr><th></th><th>不重复</th><th>可重复</th></tr>\n       <tr><td>从 $n$ 个中取 $k$ 个的排列（与顺序有关）</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>全排列（所有元素的排列）</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>从 $n$ 个中取 $k$ 个的组合（与顺序无关）</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>如何判断：</strong>与顺序有关吗（密码、分配职务、数字）？如果有关，就是排列；如果无关（选一个小组、一次摸出几个球），就是组合。\n       对于多位数，首位不能是零。有用的公式：$\\binom{n}{k}=\\binom{n}{n-k}$，$\\binom{n}{2}=\\frac{n(n-1)}{2}$（例如 $n$ 个人之间握手的次数）。</p>"
   ],
   "examples": [
    {
     "task": "用数字 $0, 1, 2, 3, 4$ 可以组成多少个各位数字不同的三位数？",
     "steps": [
      "首位不能是零：$4$ 种可能。",
      "第二位从剩下的 $4$ 个数字中选（包括零），第三位有 $3$ 种。",
      "<strong>$4\\cdot 4\\cdot 3=48$ 个数</strong>"
     ]
    },
    {
     "task": "从 8 名男生和 6 名女生中选出一个四人委员会，其中有 2 名男生和 2 名女生。有多少种选法？",
     "steps": [
      "选男生有 $\\binom{8}{2}=28$ 种方法，选女生有 $\\binom{6}{2}=15$ 种方法。",
      "两次选择互相独立，用乘法原理。",
      "<strong>$28\\cdot 15=420$ 种选法</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "概率与独立事件",
   "summary": "古典概型，对立事件，事件的并和独立事件的概率乘法。",
   "theory": [
    "<p><strong>古典定义：</strong>如果试验有 $n$ 个等可能的结果，事件 $A$ 在其中 $m$ 个结果下发生，则 $P(A)=\\frac{m}{n}$。\n       有 $0\\le P(A)\\le 1$。$m$ 和 $n$ 常用计数方法求得，例如一次摸出 $k$ 个球时，结果是组合 $\\binom{n}{k}$。</p>",
    "<p><strong>对立事件</strong> $A'$（事件 $A$ 不发生）：$P(A')=1-P(A)$。尤其是“至少一次”这类问题，通过对立事件“一次也没有”来解。\n       <strong>事件的并</strong>：$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$；对于互斥事件（不能同时发生），$P(A\\cap B)=0$。</p>",
    "<p>如果一个事件的结果不改变另一个事件的概率，事件 $A$ 和 $B$ 就<strong>相互独立</strong>；这时 $P(A\\cap B)=P(A)\\cdot P(B)$。\n       典型的例子是重复投掷、不同射手的射击或有放回的抽取。在 $n$ 次概率为 $p$ 的独立试验中，事件至少发生一次的概率是 $1-(1-p)^n$。</p>"
   ],
   "examples": [
    {
     "task": "袋中有 5 个白球和 3 个黑球。一次摸出两个。两个都是白球的概率是多少？",
     "steps": [
      "所有的两球组合：$\\binom{8}{2}=28$，有利的：$\\binom{5}{2}=10$。",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0.357$。"
     ]
    },
    {
     "task": "两名射手（相互独立地）命中靶子的概率分别是 $0.8$ 和 $0.7$。靶子被命中的概率是多少？",
     "steps": [
      "对立事件：两人都没命中，$P=0.2\\cdot 0.3=0.06$。",
      "<strong>$P=1-0.06=0.94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "二项分布",
   "summary": "重复的独立试验，恰好 k 次成功的概率，数学期望和方差。",
   "theory": [
    "<p>把有两种结果的试验（成功的概率为 $p$，失败的概率为 $1-p$）独立地重复 $n$ 次。随机变量 $X$ —— 成功的次数 ——\n       服从<strong>二项分布</strong> $X\\sim Bi(n; p)$，且对 $k=0, 1, \\dots, n$ 有 $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$。\n       组合数表示成功的试验在 $n$ 次试验中有多少种分布方式。</p>",
    "<p><strong>数学期望</strong>（成功次数的期望值）是 $E(X)=np$，<strong>方差</strong>是 $D(X)=np(1-p)$，标准差是 $\\sigma=\\sqrt{np(1-p)}$。\n       “至少成功一次”通过对立事件计算：$P(X\\ge 1)=1-(1-p)^n$；“至多 $k$ 次”就是和 $P(X=0)+\\dots+P(X=k)$。</p>",
    {
     "fig": "s4-binom",
     "caption": "柱子表示 $Bi(n; p)$ 的 $P(X=k)$，绿色柱子是概率最大的值。$n$ 较大时，形状接近于均值为 $np$、标准差为 $\\sqrt{np(1-p)}$ 的<strong>正态分布</strong>的钟形曲线（橙色）。"
    }
   ],
   "examples": [
    {
     "task": "一名学生在有 5 道题的测验中随机猜答案，每题有 4 个选项（只有一个正确）。他恰好答对 2 题的概率是多少？",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$。",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$。",
      "$P\\approx 0.2637$"
     ]
    },
    {
     "task": "某产品是次品的概率为 $0.1$。在一批 50 件产品中，预计有多少件次品？方差是多少？",
     "steps": [
      "$E(X)=np=50\\cdot 0.1=5$ 件。",
      "$D(X)=np(1-p)=50\\cdot 0.1\\cdot 0.9=4.5$，$\\sigma\\approx 2.12$。"
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "高中毕业考试复习：数集、代数式和方程",
   "summary": "各年级关于数、代数式变形和方程的综合练习。",
   "theory": [
    "<p><strong>需要掌握的内容 —— 数：</strong>$\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$，整除（最大公因数、最小公倍数、质数），集合运算和 $|A\\cup B|=|A|+|B|-|A\\cap B|$，\n         绝对值表示数轴上的距离，区间，幂 $a^{m}a^{n}=a^{m+n}$，$(a^m)^n=a^{mn}$，$a^{-n}=\\frac{1}{a^n}$，根式 $\\sqrt[n]{a}=a^{1/n}$ 和分母有理化。</p>",
    "<p><strong>代数式：</strong>公式 $(a\\pm b)^2=a^2\\pm 2ab+b^2$，$a^2-b^2=(a-b)(a+b)$，$a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$，用提取公因式法和公式法分解因式，\n         分式的约分 —— 总要写出<strong>条件</strong>（分母 $\\neq 0$）。</p>",
    "<p><strong>方程：</strong>一次方程（同解变形），二次方程 $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ 和韦达定理，分母含未知数的方程，\n         根号下含未知数的方程（乘方并<strong>检验</strong>），含绝对值的方程（零点分段法），指数方程和对数方程（$\\log_a x=c \\Leftrightarrow x=a^c$）。</p>"
   ],
   "examples": [
    {
     "task": "解方程 $\\sqrt{x+7}=x+1$。",
     "steps": [
      "条件 $x+1\\ge 0$。两边平方：$x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$。",
      "$x_1=2$，$x_2=-3$。",
      "检验：$\\sqrt9=3$ ✓；对于 $-3$，右边为负 ✗。<strong>$K=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "化简 $\\dfrac{x^2-9}{x^2+3x}$ 并写出条件。",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$，条件 $x\\neq 0$，$x\\neq -3$。",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "高中毕业考试复习：不等式和方程组",
   "summary": "关于不等式、方程组和不等式组的综合练习。",
   "theory": [
    "<p><strong>不等式：</strong>两边乘以或除以负数时，不等号改变方向。一元二次不等式借助根和抛物线的形状来解：\n         当 $a&gt;0$ 时，$ax^2+bx+c&lt;0$ 的解在两根之间。商型和积型不等式用<strong>零点分段法</strong>（符号表）来解，\n         含绝对值的不等式分区间讨论，或利用 $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$。</p>",
    "<p><strong>方程组：</strong>代入消元法和加减消元法，三元方程组逐步消元。二元一次方程组有一个解、无解或\n         无穷多个解（相交、平行、重合的直线）。对于非线性方程组，从一次方程中解出一个未知数再代入。</p>",
    "<p><strong>常见错误：</strong>忘记条件，两边除以含未知数的式子（它可能为负或为零），结果的合并方式不对 —— 不等式组取<strong>交集</strong>，“或”的情况取并集。</p>"
   ],
   "examples": [
    {
     "task": "解不等式 $\\dfrac{x-2}{x+1}\\le 0$。",
     "steps": [
      "零点：$2$（分子）和 $-1$（分母，要排除）。",
      "符号：在 $(-\\infty; -1)$ 上为 $+$，在 $(-1; 2)$ 上为 $-$，在 $(2; \\infty)$ 上为 $+$。",
      "<strong>$K=(-1; 2\\rangle$</strong>"
     ]
    },
    {
     "task": "解方程组 $2x+3y=12$，$x-y=1$。",
     "steps": [
      "由第二个方程得 $x=y+1$，代入：$2y+2+3y=12 \\Rightarrow y=2$。",
      "$x=3$。<strong>解为 $[3; 2]$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "高中毕业考试复习：函数及其图象",
   "summary": "关于函数的综合练习：一次函数、二次函数、分式函数、指数函数、对数函数及其性质。",
   "theory": [
    "<p><strong>函数的性质：</strong>定义域和值域，单调性，奇偶性，有界性，极值，一一对应和反函数（关于 $y=x$ 对称）。</p>",
    "<p><strong>函数一览：</strong>一次函数 $y=kx+q$（$k$ —— 斜率，$q$ —— 在 $y$ 轴上的截距）；顶点为 $V[m; n]$ 的二次函数 $y=a(x-m)^2+n$；\n         分式线性函数 $y=\\frac{ax+b}{cx+d}$（有渐近线的双曲线）；指数函数 $y=a^x$（$a&gt;1$ 时递增，$0&lt;a&lt;1$ 时递减，$H=(0; \\infty)$）\n         和对数函数 $y=\\log_a x$（$D=(0; \\infty)$，经过点 $[1; 0]$）；三角函数的周期为 $2\\pi$（正切为 $\\pi$）。</p>",
    "<p><strong>图象的平移：</strong>$f(x-a)$ 把图象向右平移 $a$，$f(x)+b$ 向上平移 $b$，$-f(x)$ 是关于 $x$ 轴翻折，$|f(x)|$ 把负的部分翻折到上方。</p>"
   ],
   "examples": [
    {
     "task": "求抛物线 $y=x^2-6x+5$ 的顶点和函数的值域。",
     "steps": [
      "配方：$y=(x-3)^2-4$。",
      "顶点 $V[3; -4]$，抛物线开口向上。",
      "<strong>$H(f)=\\langle -4; \\infty)$</strong>"
     ]
    },
    {
     "task": "求函数 $f(x)=\\log_2(6-2x)$ 的定义域。",
     "steps": [
      "对数的真数必须为正：$6-2x&gt;0$。",
      "<strong>$x&lt;3$，即 $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "高中毕业考试复习：平面几何、立体几何和解析几何",
   "summary": "关于平面几何、空间几何和解析几何的综合练习。",
   "theory": [
    "<p><strong>平面几何：</strong>三角形内角和为 $180^\\circ$，勾股定理和射影定理，三角形相似（判定 $SSS$、$SAS$、$AA$），\n         面积（$S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$，海伦公式），圆（$S=\\pi r^2$，$o=2\\pi r$，扇形 $\\frac{\\alpha}{360^\\circ}\\pi r^2$），圆周角和圆心角。</p>",
    "<p><strong>立体几何：</strong>体积 $V=S_pv$（棱柱、圆柱），$V=\\frac{1}{3}S_pv$（棱锥、圆锥），$V=\\frac{4}{3}\\pi r^3$（球）；表面积；直线与平面的位置关系，\n         角和距离 —— 总是要找合适的直角三角形。</p>",
    "<p><strong>解析几何：</strong>$|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$，线段的中点，向量和数量积（$\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$），\n         直线的方程（参数方程，一般式 $ax+by+c=0$，斜截式 $y=kx+q$），点到直线的距离，圆 $(x-m)^2+(y-n)^2=r^2$。</p>"
   ],
   "examples": [
    {
     "task": "求经过点 $A[1; 2]$ 和 $B[4; -4]$ 的直线的一般式方程。",
     "steps": [
      "方向向量 $\\vec{AB}=(3; -6)\\sim(1; -2)$，法向量 $(2; 1)$。",
      "$2x+y+c=0$，代入 $A$：$2+2+c=0$，$c=-4$。",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "圆柱的体积为 $72\\pi\\,\\text{cm}^3$，高为 $8\\,\\text{cm}$。它的底面半径是多少？",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$。",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "高中毕业考试复习：三角函数和解三角形",
   "summary": "关于三角函数、三角方程和解三角形的综合练习。",
   "theory": [
    "<p><strong>三角函数：</strong>弧度制 $180^\\circ=\\pi\\,\\text{rad}$，单位圆，各象限的符号，$0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$ 的函数值，\n         周期性，奇偶性（$\\cos$ 是偶函数，$\\sin$ 和 $\\tan$ 是奇函数）。</p>",
    "<p><strong>公式：</strong>$\\sin^2 x+\\cos^2 x=1$，$\\tan x=\\frac{\\sin x}{\\cos x}$，$\\sin 2x=2\\sin x\\cos x$，$\\cos 2x=\\cos^2 x-\\sin^2 x$，\n         $\\sin(\\pi-x)=\\sin x$，$\\cos(\\pi-x)=-\\cos x$。三角方程：换元，提取公因式，含 $k\\in\\mathbb{Z}$ 的通解。</p>",
    "<p><strong>解三角形：</strong>在直角三角形中 $\\sin$、$\\cos$、$\\tan$ 的定义；在一般三角形中用<strong>正弦定理</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ 和<strong>余弦定理</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$。</p>"
   ],
   "examples": [
    {
     "task": "三角形的两边 $a=5$，$b=8$，夹角 $\\gamma=60^\\circ$。求边 $c$。",
     "steps": [
      "余弦定理：$c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$。",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "已知 $\\cos x=-\\frac{3}{5}$，$x\\in(\\frac{\\pi}{2}; \\pi)$，求 $\\sin x$ 和 $\\tan x$。",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$；在第二象限正弦为正：$\\sin x=\\frac{4}{5}$。",
      "$\\tan x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$。"
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "高中毕业考试复习：数列、计数和概率",
   "summary": "关于数列、金融数学、计数、概率和统计的综合练习。",
   "theory": [
    "<p><strong>数列：</strong>等差数列 $a_n=a_1+(n-1)d$，$s_n=\\frac{n}{2}(a_1+a_n)$；等比数列 $a_n=a_1q^{n-1}$，$s_n=a_1\\frac{q^n-1}{q-1}$（$q\\neq 1$）；\n         $|q|&lt;1$ 时无穷等比级数的和 $s=\\frac{a_1}{1-q}$。</p>",
    "<p><strong>金融数学：</strong>复利 $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$（缴纳利息税时实际利率降低），定期储蓄和分期还款作为等比数列求和，\n         百分数和千分数。</p>",
    "<p><strong>计数和概率：</strong>排列、全排列、组合（包括可重复的），$P(A)=\\frac{m}{n}$，对立事件，独立事件，二项分布。\n         <strong>统计：</strong>平均数、中位数、众数、方差、标准差，读统计表和统计图。</p>"
   ],
   "examples": [
    {
     "task": "存款 $2\\,000\\,€$ 按年利率 $3\\,\\%$ 计复利。5 年后账户上有多少钱？",
     "steps": [
      "$K_5=2000\\cdot 1.03^5$。",
      "$1.03^5\\approx 1.159274$。",
      "<strong>$K_5\\approx 2\\,318.55\\,€$</strong>"
     ]
    },
    {
     "task": "在等差数列中，$a_3=7$，$a_7=19$。求 $a_1$ 和前 10 项的和。",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$，$a_1=a_3-2d=1$。",
      "$a_{10}=1+9\\cdot 3=28$，$s_{10}=\\frac{10}{2}(1+28)=145$。"
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "高中毕业考试复习：典型题和综合题",
   "summary": "综合多个专题的多步骤问题：最优化、金融、数列、解析几何、概率和导数。",
   "theory": [
    "<p><strong>如何解综合题：</strong></p>\n       <ol><li>把题目读两遍，写出已知什么、求什么（包括单位）。</li>\n       <li>画草图或列表；给未知量命名。</li>\n       <li>把问题分成较小的步骤 —— 常常是一串熟悉的方法（例如“建立函数 → 求导 → 求最大值”）。</li>\n       <li>检验结果：代入、估计数量级、检查条件（长度为正，概率在 $\\langle 0; 1\\rangle$ 内）。</li></ol>",
    "<p><strong>常见的专题组合：</strong>最优化（几何 + 导数），利息和储蓄（百分数 + 等比数列 + 对数），\n       坐标系中的三角形（向量 + 面积 + 距离），选小组和概率（组合 + 对立事件），图象的切线（导数 + 直线方程）。</p>",
    "<p><strong>其他有用的公式：</strong>坐标系中三角形 $ABC$ 的面积 $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$，\n       切线 $y=f(x_0)+f'(x_0)(x-x_0)$，计息的年数 $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$。</p>"
   ],
   "examples": [
    {
     "task": "从边长为 $30\\,\\text{cm}$ 的正方形铁皮的四个角剪去全等的小正方形，折成一个无盖的盒子。它的最大容积是多少？",
     "steps": [
      "设剪去的正方形边长为 $x$：$V(x)=x(30-2x)^2$，$x\\in(0; 15)$。",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$（值 $15$ 不在区间内）。",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "年利率为 $4\\,\\%$（按年复利）时，存款经过多少年第一次翻倍？",
     "steps": [
      "求使 $1.04^n\\ge 2$ 成立的最小的 $n$。",
      "$n\\ge\\frac{\\ln 2}{\\ln 1.04}\\approx 17.67$。",
      "<strong>18 年后。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ 和 $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$，所以 $f(-x)=-f(x)$。",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$。先算 $g({@2})={@3}\\cdot {@4}{@5}={@6}$，再算 $f({@7})={@8}{@9}^2{@10}={@11}$。",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$。先算 $f({@2})={@3}{@4}^2{@5}={@6}$，再算 $g({@7})={@8}\\cdot {@9}{@10}={@11}$。",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$。当 $x\\in\\{90^\\circ; 270^\\circ\\}$ 时 $\\cos x=0$，当 $x\\in\\{{@4}\\}$ 时 $\\sin x={@2}\\frac{{@3}}{2}$。$K=\\{{@5}\\}$。",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$。当 $x\\in\\{0^\\circ; 180^\\circ\\}$ 时 $\\sin x=0$，当 $x\\in\\{{@4}\\}$ 时 $\\cos x={@2}\\frac{{@3}}{2}$。$K=\\{{@5}\\}$。",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$。$V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$，所以 $k={@5}$。",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$。这时方程为 $({@2})^2=0$，有二重根 ${@3}$。",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$。条件 {@1} 给出 {@2}。",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$，$D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$。",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$。",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$（第一个人命中而第二个人没命中，或者反过来）。",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$。",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$。",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$。$P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$。",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$。与平均数的偏差：${@3}$。$s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}。",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$。",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$；在一个周期内的解是 $\\frac{\\pi}{3}$ 和 $-\\frac{\\pi}{3}$，余弦函数的周期是 $2\\pi$。",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$，$(-x)^2=x^2$，所以 $f(-x)=f(x)$。",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\tan x=1$ 或 $\\tan x=-1$，所以 $x=\\frac{\\pi}{4}+k\\pi$ 或 $x=-\\frac{\\pi}{4}+k\\pi$。合起来是相隔 $\\frac{\\pi}{2}$ 的点。",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\tan x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$，这对 $\\frac{\\pi}{6}$ 成立；正切函数的周期是 $\\pi$。",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$；正弦在第一和第二象限为正，所以是 $\\frac{\\pi}{4}$ 和 $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$，周期是 $2\\pi$。",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$；解 $\\frac{\\pi}{6}$、$\\frac{5\\pi}{6}$、$\\frac{7\\pi}{6}$、$\\frac{11\\pi}{6}$ 以周期 $\\pi$ 重复，即 $\\pm\\frac{\\pi}{6}+k\\pi$。",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$，$\\vec{AC}=({@2}; {@3})$。$S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$。$|AB|=\\sqrt{{@10}}$，由 $S=\\frac{|AB|\\cdot v_c}{2}$ 得 $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$。",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$。不等式 $f''(x)&gt;0$ 给出 ${@1}$，函数在 {@2} 上是凸函数。",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ 的根是 ${@1}$ 和 ${@2}$。{@3}比较各值：{@4}。其中{@5}的是 ${@6}$。",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$，$f''(x)={@1}$。当 $x={@2}$ 时 $f''(x)=0$，且二阶导数在那里变号。$f({@3})={@4}$，拐点是 $[{@5}; {@6}]$。",
  "$f'(x)={@0}$.": "$f'(x)={@0}$。",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$，驻点是 ${@4}$ 和 ${@5}$。导数在区间 $(-\\infty; {@7})$、$({@8}; {@9})$、$({@10}; \\infty)$ 上的符号为 {@6}。所以{@11}在点 $x={@12}$ 处取得，且 $f({@13})={@14}$。",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$。导数在两根 ${@5}$ 和 ${@6}$ 之间为{@4}，在两根之外为{@7}。函数在 {@9} 上是{@8}。",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$。因为 $\\cos 0=1$，$\\mathrm{e}^0=1$，所以 $f'(0)={@3}{@4}={@5}$。",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$。因为 $\\sin 0=0$，$\\mathrm{e}^0=1$，所以 $f'(0)=0{@3}={@4}$。",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$ 既不等于 $f(1)=\\mathrm{e}$，也不等于 $-\\mathrm{e}$。",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$，偶次幂“吸收”了符号的改变。",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$，它既不是 $f(x)$，也不是 $-f(x)$。",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$，式子中只有奇次幂。",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$，$f(-1)={@1}$；等式 $f(-1)=f(1)$ 和 $f(-1)=-f(1)$ 都不成立。",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$，$f'(x)={@2}$，$f'({@3})={@4}$。切线：$y={@5}+{@6}(x-{@7})$，即 $y={@8}$。",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$ 是使 $f(x)={@1}$ 的数 $x$。解 $\\dfrac{{@2}}{{@3}}={@4}$：两边乘以分母后得到一次方程，解为 $x={@5}$。检验：$f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ 是{@1}。累计频数：{@2}。中位数是 ${@3}$。",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$。加权算术平均数：$\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$。",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "当 $x\\in\\{{@2}\\}$ 时 ${@0} x={@1}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$，换元 $t={@2}^{x}$，其中 $t&gt;0$：${@3}=0$，根为 $t_1={@4}$，$t_2={@5}$。{@6}由 ${@7}^{x}={@8}$ 得 $x={@9}${@10}。$K=\\{{@11}\\}$。",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "（结果写成分数或四舍五入到 3 位小数的小数。）",
  "(otočíme znak)": "（不等号改变方向）",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": "，面积 $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": "，斜边长 ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": "，由 ${@0}^{x}={@1}$ 得 $x={@2}$",
  "0 alebo 5": "0 或 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · 点 [1; {@2}] 和 [{@3}; 1] 关于 y = x 对称",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0，函数递增</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">主题：{@0}</span><br>{@1}",
  "ABC": "ABC",
  "ABD": "ABD",
  "ABE": "ABE",
  "ABF": "ABF",
  "ABG": "ABG",
  "ACB": "ACB",
  "ACD": "ACD",
  "ACE": "ACE",
  "ACF": "ACF",
  "ACG": "ACG",
  "ACH": "ACH",
  "ADB": "ADB",
  "ADC": "ADC",
  "ADE": "ADE",
  "ADF": "ADF",
  "ADG": "ADG",
  "ADH": "ADH",
  "AEB": "AEB",
  "AEC": "AEC",
  "AED": "AED",
  "AEF": "AEF",
  "AEG": "AEG",
  "AFB": "AFB",
  "AFD": "AFD",
  "AFG": "AFG",
  "AFH": "AFH",
  "AGB": "AGB",
  "AGC": "AGC",
  "AGD": "AGD",
  "AGE": "AGE",
  "AGF": "AGF",
  "AHB": "AHB",
  "AHC": "AHC",
  "AHD": "AHD",
  "AHE": "AHE",
  "AHF": "AHF",
  "AHG": "AHG",
  "ANALÝZA": "ANALYZA",
  "ANANÁS": "ANANAS",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "如果代入后得到 $\\frac{0}{0}$，就把分子分解因式。其中一个因式可以与分母约去。",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "那么与墙平行的边有多长（m）？",
  "Aká dlhá je prepona v cm?": "斜边有多长（cm）？",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "三角形在 $x$ 轴上的底边有多长？",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "与墙平行的边必须多长，面积才最大（m）？",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "横坐标 $x={@0}$ 的点的纵坐标是多少？",
  "Aká je pravdepodobnosť, že obaja minú?": "两人都没命中的概率是多少？",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "第一个人没命中而第二个人命中的概率是多少？",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "第一个人命中而第二个人没命中的概率是多少？",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "至少有一人命中靶子的概率是多少？",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "恰好有一人命中靶子的概率是多少？",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "选出的人中至少有一名女生的概率是多少？{@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "一次六点也没有出现的概率是多少？结果四舍五入到 4 位小数。",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "至少出现一次六点的概率是多少？结果四舍五入到 3 位小数。",
  "Aká je pravdepodobnosť? {@0}": "概率是多少？{@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "那么极限值是多少？把它写成分数。",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "三角形的高（两条直线交点的纵坐标）是多少？",
  "Aké je najmenšie celé číslo v prieniku?": "交集中最小的整数是多少？",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "满足它的最小整数是多少？",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "点 $K$ 的坐标是多少（cm）？输入 $x$; $y$; $z$。",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "剪去的正方形的边长必须是多少（cm），盒子的容积才最大？",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "项 ${@0}$ 的导数在点 $0$ 处的值是多少？",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "导数的分母 $({@0})^2$ 在点 ${@1}$ 处的值是多少？",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "内层函数 ${@0}$ 在点 ${@1}$ 处的值是多少？",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "项 $uv'$ 在点 $0$ 处的值是多少？",
  "Aký je absolútny člen $q$?": "常数项 $q$ 是多少？",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "盒子的最大容积是多少 $\\text{cm}^3$？",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "地块的最大面积是多少（$\\text{m}^2$）？",
  "Aký je obsah oblasti?": "这个区域的面积是多少？",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "这个图形的面积是多少？输入分数或整数。",
  "Aký je parameter $p$?": "参数 $p$ 是多少？",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "数据的个数 $n$（学生总数）是多少？",
  "Aký je stredový uhol výseče v stupňoch?": "扇形的圆心角是多少度？",
  "Aký je súčet vekov po príchode nového člena?": "新成员加入后年龄之和是多少？",
  "Aký je súčet vekov pôvodných členov?": "原有成员的年龄之和是多少？",
  "Aký je súčet známok všetkých žiakov?": "所有学生的成绩之和是多少？",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "重复字母出现次数的阶乘之积是多少？",
  "Aký je teda exponent ${@0}$?": "那么指数 ${@0}$ 是多少？",
  "Aký je štatistický znak „{@0}“?": "统计变量“{@0}”是什么类型的？",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "盒子的容积最大能是多少（$\\text{cm}^3$）？",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "地块的面积最大能是多少（$\\text{m}^2$）？",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "在扇形统计图中，“公交车”扇形的圆心角是多少度？",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "在扇形统计图中，“汽车”扇形的圆心角是多少度？",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "在扇形统计图中，“自行车”扇形的圆心角是多少度？",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "在扇形统计图中，“步行”扇形的圆心角是多少度？",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "在扇形统计图中，“火车”扇形的圆心角是多少度？",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "在扇形统计图中，“{@0}”扇形的圆心角是多少度？",
  "Akým číslom sa suma na účte každý rok vynásobí?": "账户上的金额每年乘以哪个数？",
  "BAC": "BAC",
  "BAD": "BAD",
  "BAE": "BAE",
  "BAF": "BAF",
  "BAG": "BAG",
  "BAH": "BAH",
  "BCA": "BCA",
  "BCD": "BCD",
  "BCF": "BCF",
  "BCG": "BCG",
  "BCH": "BCH",
  "BDA": "BDA",
  "BDC": "BDC",
  "BDE": "BDE",
  "BDF": "BDF",
  "BDG": "BDG",
  "BDH": "BDH",
  "BEA": "BEA",
  "BEC": "BEC",
  "BED": "BED",
  "BEF": "BEF",
  "BEG": "BEG",
  "BFA": "BFA",
  "BFC": "BFC",
  "BFD": "BFD",
  "BFE": "BFE",
  "BFG": "BFG",
  "BFH": "BFH",
  "BGC": "BGC",
  "BGD": "BGD",
  "BGE": "BGE",
  "BGF": "BGF",
  "BGH": "BGH",
  "BHA": "BHA",
  "BHC": "BHC",
  "BHD": "BHD",
  "BHE": "BHE",
  "BHF": "BHF",
  "BHG": "BHG",
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "一名篮球运动员罚球命中的概率是 ${@0}$，各次投篮相互独立。他投 {@1} 次；$X$ 是命中的次数。",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "白球和黑球可以有两种顺序。同时取出时最好数无序的对：白球和黑球是独立地选出的。",
  "Binomické rozdelenie": "二项分布",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "点 $T[{@0}; {@1}]$ 在圆 $k: {@2}$ 上。圆在点 $T$ 处的切线方程是 ${@3}+c=0$。求 $c$。",
  "CAB": "CAB",
  "CAD": "CAD",
  "CAE": "CAE",
  "CAF": "CAF",
  "CAG": "CAG",
  "CAH": "CAH",
  "CBA": "CBA",
  "CBD": "CBD",
  "CBE": "CBE",
  "CBF": "CBF",
  "CBG": "CBG",
  "CBH": "CBH",
  "CDA": "CDA",
  "CDB": "CDB",
  "CDE": "CDE",
  "CDF": "CDF",
  "CDG": "CDG",
  "CDH": "CDH",
  "CEA": "CEA",
  "CEB": "CEB",
  "CED": "CED",
  "CEF": "CEF",
  "CEG": "CEG",
  "CEH": "CEH",
  "CFA": "CFA",
  "CFD": "CFD",
  "CFE": "CFE",
  "CFG": "CFG",
  "CGA": "CGA",
  "CGB": "CGB",
  "CGD": "CGD",
  "CGF": "CGF",
  "CGH": "CGH",
  "CHB": "CHB",
  "CHD": "CHD",
  "CHE": "CHE",
  "CHF": "CHF",
  "CHG": "CHG",
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "整数 ${@0}, \\dots, {@1}$——共有 ${@2}$ 个。",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "男生和女生是独立地选出的（组合，因为与顺序无关），再把个数相乘。",
  "DAB": "DAB",
  "DAC": "DAC",
  "DAE": "DAE",
  "DAF": "DAF",
  "DAG": "DAG",
  "DAH": "DAH",
  "DBA": "DBA",
  "DBC": "DBC",
  "DBE": "DBE",
  "DBF": "DBF",
  "DBG": "DBG",
  "DBH": "DBH",
  "DCA": "DCA",
  "DCB": "DCB",
  "DCE": "DCE",
  "DCF": "DCF",
  "DCG": "DCG",
  "DCH": "DCH",
  "DEA": "DEA",
  "DEB": "DEB",
  "DEC": "DEC",
  "DEF": "DEF",
  "DEG": "DEG",
  "DEH": "DEH",
  "DFA": "DFA",
  "DFB": "DFB",
  "DFC": "DFC",
  "DFE": "DFE",
  "DFG": "DFG",
  "DFH": "DFH",
  "DGA": "DGA",
  "DGB": "DGB",
  "DGC": "DGC",
  "DGE": "DGE",
  "DGF": "DGF",
  "DGH": "DGH",
  "DHB": "DHB",
  "DHC": "DHC",
  "DHE": "DHE",
  "DHF": "DHF",
  "DHG": "DHG",
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "已知函数 $f(x)={@0}$ 和 $g(x)={@1}$。求 $({@2})({@3})$。",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "已知一组数据：${@0}$。求它的{@1}。",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "定义域 $(0; \\infty)$ 不关于零对称，所以函数既不可能是偶函数，也不可能是奇函数。",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "你除以的是负数，不等号要改变方向。",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "导数是 $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$。$f'({@4})$ 等于多少？",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "商的导数：$f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$。在点 ${@7}$ 处：$f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$。",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "正弦的导数是余弦，没有负号：$(\\sin x)'=\\cos x$。负号属于余弦的导数。",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "积的导数不是导数的积：$(u\\cdot v)'=u'v+uv'$，而不是 $u'\\cdot v'$。",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "积的导数：$f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$。因为 $\\mathrm{e}^0=1$，所以 $f'(0)={@3}$。",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "积的导数：$f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$。因为 $\\ln 1=0$，所以 $f'(1)=0+({@2}{@3})\\cdot 1={@4}$。",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "复合函数的导数：$f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$。在点 ${@4}$ 处内层函数为 ${@5}\\cdot {@6}{@7}={@8}$，所以 $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$。",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "方程组的行列式是 $m^2-{@0}$，当 $m=\\pm {@1}$ 时为零（否则方程组有唯一解）。当 $m={@2}$ 时，两个方程的左边成比例，但右边 ${@3}$ 和 ${@4}$ 不成比例：两条直线平行且不重合，无解。当 $m={@5}$ 时，第二个方程是第一个方程的 $(-1)$ 倍：两条直线重合，有无穷多个解。答案：$m={@6}$。",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "由向量 $\\vec{AB}$ 和 $\\vec{AC}$ 组成的行列式给出平行四边形的面积。三角形的面积是它的一半。",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "判别式是 $D=b^2-4ac$。别忘了乘积 $ac$ 前面的 4。",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "判别式是 $D=b^2-4ac$。由方程 $D=0$ 得到的 $c$ 还要除以 4。",
  "Do vnútra intervalu patrí {@0}.": "区间内部有 {@0}。",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "侧面积公式 $\\pi rs$ 中用的是圆锥的母线 $s$，而不是高 $v$。",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "代入 $y={@0}$ 得到方程 ${@1}=0$。它的判别式是多少？",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "代入得到 $\\frac{0}{0}$。分母是平方差：$x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$。约分后 $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$。",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "代入得到 $\\frac{0}{0}$，它不是零，而是不定式。把分母按平方差分解，再约分。",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "代入得到的是 $\\frac{0}{0}$，它不是零，而是不定式。把分子分解因式，再约分。",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "你代入的是圆心。切线不经过圆心，而是经过切点 $T$。",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "不能直接代入，分母趋近于零。除以接近零的数，得到的数的绝对值非常大。",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "代入 ${@0}^2 x=1-{@1}^2 x$ 并整理：${@2}{@3}{@4}=0$。",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "用 $-x$ 代替 $x$，把 $f(-x)$ 与 $f(x)$ 和 $-f(x)$ 比较。也要检验定义域是否关于零对称。",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "把点 $P$ 代入式子 ${@0}$。得到的值是多少？",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "把点 ${@0}$ 代入平面方程的左边。结果的绝对值是多少？",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "把点 $P$ 的坐标代入平面方程，求出 $d$。",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "切线垂直于半径 $ST$。把点 $T$ 的坐标代入给出的方程。",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "长度比的平方适用于表面积。而保持不变的是体积，它取决于三次方。",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "第二个不等式的解是 $x\\le d$。数 $d$ 是多少？",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "拐点的纵坐标是函数值 $f({@0})$，而不是 $f''({@1})$ 的值。",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "分子的另一个根是 $-c$；两根之积是 ${@0}$。",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "两名射手各自独立地射击一次。第一个人命中靶子的概率是 ${@0}$，第二个人是 ${@1}$。{@2}的概率是多少？",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "$D=0$ 时有二重根：$p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$。",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "长度不能直接相减。球的半径是直角三角形的斜边，用勾股定理。",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "一个直角三角形的边长构成等差数列，它的周长是 ${@0}\\,\\text{cm}$。求{@1}。",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">最可能的 k = {@3}</span>",
  "E; D": "E; D",
  "EAB": "EAB",
  "EAC": "EAC",
  "EAD": "EAD",
  "EAF": "EAF",
  "EAG": "EAG",
  "EAH": "EAH",
  "EBA": "EBA",
  "EBC": "EBC",
  "EBD": "EBD",
  "EBF": "EBF",
  "EBG": "EBG",
  "EBH": "EBH",
  "ECA": "ECA",
  "ECB": "ECB",
  "ECD": "ECD",
  "ECF": "ECF",
  "ECG": "ECG",
  "ECH": "ECH",
  "EDA": "EDA",
  "EDB": "EDB",
  "EDC": "EDC",
  "EDF": "EDF",
  "EDG": "EDG",
  "EDH": "EDH",
  "EFA": "EFA",
  "EFB": "EFB",
  "EFC": "EFC",
  "EFD": "EFD",
  "EFG": "EFG",
  "EFH": "EFH",
  "EGB": "EGB",
  "EGC": "EGC",
  "EGD": "EGD",
  "EGF": "EGF",
  "EGH": "EGH",
  "EHA": "EHA",
  "EHB": "EHB",
  "EHC": "EHC",
  "EHD": "EHD",
  "EHF": "EHF",
  "EHG": "EHG",
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "指数函数及其反函数对数函数",
  "FAB": "FAB",
  "FAC": "FAC",
  "FAD": "FAD",
  "FAE": "FAE",
  "FAG": "FAG",
  "FAH": "FAH",
  "FBA": "FBA",
  "FBC": "FBC",
  "FBD": "FBD",
  "FBE": "FBE",
  "FBG": "FBG",
  "FBH": "FBH",
  "FCA": "FCA",
  "FCB": "FCB",
  "FCD": "FCD",
  "FCE": "FCE",
  "FCG": "FCG",
  "FCH": "FCH",
  "FDA": "FDA",
  "FDC": "FDC",
  "FDE": "FDE",
  "FDG": "FDG",
  "FDH": "FDH",
  "FEA": "FEA",
  "FEB": "FEB",
  "FEC": "FEC",
  "FED": "FED",
  "FEG": "FEG",
  "FEH": "FEH",
  "FGA": "FGA",
  "FGB": "FGB",
  "FGC": "FGC",
  "FGD": "FGD",
  "FGE": "FGE",
  "FGH": "FGH",
  "FHA": "FHA",
  "FHB": "FHB",
  "FHC": "FHC",
  "FHD": "FHD",
  "FHE": "FHE",
  "FHG": "FHG",
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "函数 $f(x)=\\dfrac{{@0}}{{@1}}$ 是一一对应的。求 $f^{-1}\\!\\left({@2}\\right)$。",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "函数 $f(x)={@0}$ 恰好有一个{@1}。找出取得它的点：输入 $x$ 和 $f(x)$（例如 2; -5）。",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "函数在 $f''(x)&gt;0$ 的地方是凸函数。求出二阶导数，解一次不等式。",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "职务各不相同，所以谁当主席、谁当财务很重要。这是排列，而不是组合。",
  "GAB": "GAB",
  "GAC": "GAC",
  "GAD": "GAD",
  "GAE": "GAE",
  "GAH": "GAH",
  "GBA": "GBA",
  "GBC": "GBC",
  "GBD": "GBD",
  "GBE": "GBE",
  "GBF": "GBF",
  "GBH": "GBH",
  "GCA": "GCA",
  "GCB": "GCB",
  "GCD": "GCD",
  "GCH": "GCH",
  "GDA": "GDA",
  "GDB": "GDB",
  "GDC": "GDC",
  "GDE": "GDE",
  "GDF": "GDF",
  "GDH": "GDH",
  "GEA": "GEA",
  "GEB": "GEB",
  "GEC": "GEC",
  "GED": "GED",
  "GEH": "GEH",
  "GFA": "GFA",
  "GFB": "GFB",
  "GFC": "GFC",
  "GFD": "GFD",
  "GFE": "GFE",
  "GFH": "GFH",
  "GHA": "GHA",
  "GHB": "GHB",
  "GHC": "GHC",
  "GHD": "GHD",
  "Graf": "图象",
  "Graf funkcie sin x / x s dierou v bode 0": "有间断点 0 的函数 sin x / x 的图象",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "函数 x³ − 3x 的图象及其极值",
  "Graf racionálnej funkcie s asymptotami": "有渐近线的有理函数的图象",
  "Grafy funkcií e na x a ln x s dotyčnicami": "函数 eˣ 和 ln x 的图象及其切线",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "同时取球，也就是不放回。取出一个白球后，瓮中的白球少一个。",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "半径为 $r={@0}\\,\\text{cm}$ 的球被一个到球心距离为 ${@1}\\,\\text{cm}$ 的平面所截。求{@2}",
  "HAB": "HAB",
  "HAC": "HAC",
  "HAD": "HAD",
  "HAE": "HAE",
  "HAF": "HAF",
  "HAG": "HAG",
  "HBA": "HBA",
  "HBC": "HBC",
  "HBD": "HBD",
  "HBE": "HBE",
  "HBF": "HBF",
  "HBG": "HBG",
  "HCA": "HCA",
  "HCB": "HCB",
  "HCD": "HCD",
  "HCE": "HCE",
  "HCF": "HCF",
  "HCG": "HCG",
  "HDA": "HDA",
  "HDB": "HDB",
  "HDC": "HDC",
  "HDE": "HDE",
  "HDF": "HDF",
  "HDG": "HDG",
  "HEA": "HEA",
  "HEB": "HEB",
  "HEC": "HEC",
  "HED": "HED",
  "HEF": "HEF",
  "HEG": "HEG",
  "HFA": "HFA",
  "HFB": "HFB",
  "HFC": "HFC",
  "HFD": "HFD",
  "HFE": "HFE",
  "HFG": "HFG",
  "HGB": "HGB",
  "HGC": "HGC",
  "HGD": "HGD",
  "HGE": "HGE",
  "HGF": "HGF",
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "值 ${@0}$ 虽然是 $V'(x)$ 的根，但不在允许的区间内：盒子将没有底。",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "值 ${@0}$ 在 $\\langle -1; 1\\rangle$ 之外，它不给出解。",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "不用求出反函数的解析式也能求出它的值：要找使 $f(x)$ 等于给定数的 $x$。",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "这些值是数出来的整数，相邻两个值之间没有其他可能的值。",
  "Hodnoty sú slová (kategórie), nie čísla.": "这些值是词语（类别），而不是数。",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "这个变量的值是词语（类别），而不是数。",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "这个变量的值是数，所以它是定量变量。",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "这些值是测量得到的，可以是某个区间中的任意数。",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "这些值是测量得到的，可以是某个区间中的任意数（也可以是小数）。",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "这些值是数出来的，只能是整数。相邻两个值之间没有其他可能的值。",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "同时掷两颗骰子。{@0}的概率是多少？{@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "凸区间的端点是拐点，在那里 $f''(x)=0$。检验二阶导数在哪里为零。",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "积分的上下限是抛物线的零点。函数是偶函数，可以计算 $2\\int_0^{m}$。",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "棱柱有两个底面，上底和下底。底面积要算两次。",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "棱长增加 ${@0}\\,\\%$，但{@1}增长得更快：相似比要乘方。",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "一名玩家掷骰子 {@0} 次。至少出现一次六点的概率是多少？结果四舍五入到 3 位小数。",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "一名玩家掷骰子 {@0} 次。随机变量 $X$ 是出现六点的次数。",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "一名运动员记录了各场比赛的得分：${@0}$。这组数据的众数是多少？",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "一个露天剧场的看台第一排有 {@0} {@1}，后面每排比前一排多 {@2} {@3}。至少要建多少排，才能一共至少有 {@4} 个座位？",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "要求的是函数值，而不是取得这个值的点 $x$。",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "要找 $t$ 使 $A+t\\vec{u}=Q$。由第一个方程 {@0} 得 $t={@1}$。其余的方程：{@2} 和 {@3}——{@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "要找使 ${@0}^n\\ge {@1}$ 的最小自然数 $n$。取对数：$n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$，所以 $n={@5}$。",
  "Ide o permutácie: ${@0}!={@1}$.": "这是全排列：${@0}!={@1}$。",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "拐点要在 $f''(x)=0$ 且二阶导数变号的地方找。",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "你只从 $0$ 积分到 ${@0}$，这是图形的一半。下限是抛物线的另一个零点。",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "按幂函数积分，$\\frac{u^{n+1}}{n+1}$，再用结果除以括号内 $x$ 的系数。",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "幂的积分是 $\\frac{u^{{@0}}}{{@1}}$：指数加一，同时除以它。",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "指数函数的反函数是对数函数。你要找使 ${@0}^{{@1}}{@2}={@3}$ 的 $x$。",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "函数 $f(x)={@0}$ 的反函数的形式是 $f^{-1}(x)=kx+q$。输入 $k$ 和 $q$（例如 1/2; -3）。",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "反函数按相反的顺序还原运算：乘法变成除法。交换 $x$ 和 $y$，再解出 $y$。",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "反函数：$x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$。$f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$。",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "事件“至少成功一次”是事件“一次也没有成功”的对立事件。",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "事件“至少有一个白球”也包括一个白球一个黑球的情况。用对立事件“两个都是黑球”。",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "事件“第一个人命中”和“第二个人命中”可以同时发生：$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$。或者用对立事件。",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "已知函数 $f(x)={@0}^{{@1}}{@2}$。求 $f^{-1}({@3})$。",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "函数 $f(x)={@0}$ 是偶函数、奇函数，还是都不是？",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "一个人最多只能担任一个职务，下一个职务只能从剩下的人中选。",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "只看一个坐标不够：同一个 $t$ 必须满足全部三个方程。也要检验 $y$ 和 $z$。",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "把一个人安排在任意一个位置上（旋转不加区分），其余 {@0} 个人进行排列：$({@1}-1)!={@2}!={@3}$。",
  "KAJAK": "KAJAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "候选点是区间内部的驻点和区间的两个端点。求出这些点处的函数值并加以比较。",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "每次握手是两个人组成的一对，与顺序无关：$\\binom{n}{2}$。列出一元二次方程。",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "你把每条对角线都算了两次，从它的两个端点各算一次。结果要除以 2。",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "用每个成绩乘以得到这个成绩的学生人数，把结果相加，再除以学生总数。",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "金额每年乘以 $1+\\frac{p}{100}$——这是等比数列。",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "每个顶点与 $n-3$ 个不相邻的顶点相连，这样每条对角线都被算了两次：$\\frac{n(n-3)}{2}$。{@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "如果所有字母都不相同，就有 $n!$ 种排列。交换相同的字母不会产生新的单词，所以要除以各重复字母出现次数的阶乘。",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "正方体 $ABCDEFGH$ 的棱长为 $a={@0}\\,\\text{cm}$。",
  "Kocka ABCDEFGH s vyznačenými priamkami": "标出直线的正方体 ABCDEFGH",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "画出体对角线及其与底面所成角的正方体",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "骰子是可以区分的：$[1; 2]$ 和 $[2; 1]$ 是两个不同的结果。两种顺序都要算上。",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "相似比是 $k={@0}$。{@1}扩大到原来的多少倍？输入保留 4 位小数的数。",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "相似比是 $k={@0}$。{@1}变为原来的 $k^{{@2}}={@3}$ 倍，即增加了 ${@4}\\,\\%$。",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "一个凸多边形有 {@0} 条对角线。它有几个顶点？",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "根 $t_2={@0}$ 是负数，方程 ${@1}^{x}={@2}$ 无解。",
  "Koľko celých čísel ju spĺňa?": "有多少个整数满足它？",
  "Koľko celých čísel leží v prieniku?": "交集中有多少个整数？",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "{@0} 年后账户上会有多少欧元？结果四舍五入到分。",
  "Koľko je $f'(0)$?": "$f'(0)$ 等于多少？",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "$f'({@0})$ 等于多少？输入整数或分数。",
  "Koľko je $x=f^{-1}({@0})$?": "$x=f^{-1}({@0})$ 等于多少？",
  "Koľko je ${@0}!$?": "${@0}!$ 等于多少？",
  "Koľko je spolu možností?": "一共有多少种可能？",
  "Koľko je trojíc, v ktorých sú len chlapci?": "只有男生的三人组有多少个？",
  "Koľko je všetkých trojíc?": "所有的三人组有多少个？",
  "Koľko je všetkých výberov dvoch gúľ?": "取两个球的所有选法有多少种？",
  "Koľko percent to je?": "这是百分之多少？",
  "Koľko percent žiakov odpovedalo „autobus“?": "回答“公交车”的学生占百分之多少？",
  "Koľko percent žiakov odpovedalo „auto“?": "回答“汽车”的学生占百分之多少？",
  "Koľko percent žiakov odpovedalo „bicykel“?": "回答“自行车”的学生占百分之多少？",
  "Koľko percent žiakov odpovedalo „pešo“?": "回答“步行”的学生占百分之多少？",
  "Koľko percent žiakov odpovedalo „vlak“?": "回答“火车”的学生占百分之多少？",
  "Koľko percent žiakov odpovedalo „{@0}“?": "回答“{@0}”的学生占百分之多少？",
  "Koľko rokov má nový člen?": "新成员几岁？",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "把单词 {@0} 的所有字母重新排列，能得到多少个不同的“单词”（包括无意义的）？",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "凸 {@0} 边形有多少条对角线？",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "用数字 {@2} 能组成多少个{@0}{@1}数（数字{@3}）？",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "至少要掷多少次骰子，才能使至少出现一次六点的概率大于 ${@0}$？",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "{@0} 个人坐成一排 {@1} 把椅子，有多少种坐法？",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "{@0} 个人围着一张圆桌坐，如果只区分谁坐在谁旁边（整体旋转不改变坐法），有多少种坐法？",
  "Koľkými spôsobmi vyberieme chlapcov?": "选男生有多少种方法？",
  "Koľkými spôsobmi vyberieme dievčatá?": "选女生有多少种方法？",
  "Krabicový graf": "箱线图",
  "Kružnica a priamka": "圆和直线",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "哪些根满足条件？输入方程所有的解。",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "$V'(x)$ 的哪个根在区间 $(0; {@0})$ 内？",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "哪个式子表示方程 ${@0}$ 在 $\\mathbb{R}$ 中的所有解（$k\\in\\mathbb{Z}$）？",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "二次函数 $f'$ 在两根之间的符号与它的首项系数相反。",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "一元二次方程有二重根，当且仅当判别式为零。",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "点 $Q{@0}$ 是否在直线 $p: X={@1}+t\\,{@2}$，$t\\in\\mathbb{R}$ 上？",
  "Lokálne maximum": "极大值",
  "Lokálne minimum": "极小值",
  "MATEMATIKA": "MATEMATIKA",
  "Medián je priemer {@0}. a {@1}. hodnoty": "中位数是第 {@0} 个和第 {@1} 个值的平均数",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "中位数是第 {@0} 个和第 {@1} 个值的平均数：$\\frac{{@2}+{@3}}{2}={@4}$。",
  "Medián je {@0}. hodnota": "中位数是第 {@0} 个值",
  "Medián je {@0}. hodnota: ${@1}$.": "中位数是第 {@0} 个值：${@1}$。",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "中位数不是成绩 1 到 5 中间的那个。它是把所有学生的成绩依次排好后位于中间的值。",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "当 $x={@0}$ 时分母为零，而分子在那里不为零（因为 $ad-bc={@1}\\neq 0$），所以 $x={@2}$ 是竖直渐近线。当 $x\\to\\pm\\infty$ 时，$f(x)$ 趋近于 $x$ 的系数之比：$\\frac{{@3}}{{@4}}={@5}$，水平渐近线是 $y={@6}$。",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "分解分母：$x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$。约分后剩下 $\\frac{1}{\\sqrt{x}+{@3}}$。当 $x={@5}$ 时 $\\sqrt{x}+{@4}$ 等于多少？",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "异面直线不在同一个平面内。试着找出两条直线都在其中的正方体的面或截面。",
  "Množina riešení sústavy troch lineárnych nerovníc": "三个一次不等式组成的不等式组的解集",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "把指数同为 $x$ 的幂放到一边，$\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$，然后两边取对数。",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "众数是频数最大的值。数一数每个值出现了几次。",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "函数 $f(x)={@0}$ 在哪个区间上是凸函数？",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "函数 $f(x)={@0}$ 在哪些区间上是{@1}？",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "与顺序无关，这是组合：选男生有 $\\binom{{@0}}{{@1}}={@2}$ 种方法，选女生有 $\\binom{{@3}}{{@4}}={@5}$ 种方法。根据乘法原理，共有 ${@6}\\cdot {@7}={@8}$ 种可能。",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "第一位可以填{@0}（{@1} {@2}），后面各位{@3}。共 ${@4}={@5}$ 种。",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "在一次聚会上，每个参加者都和其他每个人恰好握了一次手。一共握了 {@0} 次手。聚会上有多少人？",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "这个区间内有一个驻点，$f'$ 在那里变号，所以函数在这个区间上不单调。",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "圆柱上面只有一个半球，它的体积是球体积的一半。",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "我们把 ${@0}\\,€$ 存入账户，年利率 ${@1}\\,\\%$，利息每年计入一次并留在账户中（不考虑税）。{@2} 年后账户上会有多少欧元？结果四舍五入到分。",
  "Najmenšie celé číslo v ňom je ${@0}$.": "其中最小的整数是 ${@0}$。",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "先找出使行列式 $m\\cdot m-k\\cdot k$ 为零的 $m$ 值。然后对每个值代入 $m$，比较两个方程。",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "先求出交点，再对“上面的函数减去下面的函数”积分。",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "先判断这些值是词语还是数。对于数，要区分数出来的（离散的）和测量得到的（连续的）。",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "先由直角边为 $v$ 和 $R-r$ 的直角三角形求出母线 $s$。表面积由两个底面和侧面 $\\pi s(R+r)$ 组成。",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "先算出内层函数：${@0}({@1})$。",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "出现次数最多的值是 ${@0}$（三次），其他值最多出现两次。众数是 ${@1}$。",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "例如 $f(1)={@0}$，$f(-1)={@1}$；$f(-1)=f(1)$ 和 $f(-1)=-f(1)$ 都不成立。",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "写出函数 $f(x)={@0}$ 的图象在横坐标为 $x_0={@1}$ 的点处的切线方程，形式为 $y=kx+q$。输入 $k$ 和 $q$。",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "画出这些直线，把区域的顶点作为边界直线的交点求出来。这个区域是一个三角形。",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "设 $u={@0}$，$v=\\ln x$。项 $u'v={@1}\\ln x$ 在点 $1$ 处的值是多少？",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "设 $u={@0}$，$v=\\mathrm{e}^x$。项 $u'v$ 在点 $0$ 处的值是多少？",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "设 $x$ 是垂直于墙的边长。与墙平行的边长为 ${@0}-2x$，面积为 $S(x)=x({@1}-2x)={@2}x-2x^2$。当 $x={@4}$ 时 $S'(x)={@3}-4x=0$，且 $S''=-4&lt;0$，是最大值。尺寸是 ${@5}\\,\\text{m}$ 和 ${@6}\\,\\text{m}$，面积 ${@7}\\,\\text{m}^2$。",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "奇函数对定义域中的所有 $x$ 满足 $f(-x)=-f(x)$。例如代入 $x=1$ 和 $x=-1$ 进行比较。",
  "Newton-Leibnizova formula: {@0}": "牛顿-莱布尼茨公式：{@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "别忘了分母中的系数 ${@0}$：式子是 $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$。",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "别忘了括号中的中间项 $Rr$：$R^2+Rr+r^2$。",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "别忘了中间项 $a_1a_2$，即 $\\sqrt{S_1S_2}$。",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "它们不成倍数关系，两个平面相交。",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "有些字母重复出现，交换它们不会产生新的单词。要除以各重复字母出现次数的阶乘。",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "求函数 $f(x)={@0}$ 的拐点。输入它的坐标 $x$ 和 $y$（例如 1; -4）。",
  "Nájdi korene derivácie $f'(x)={@0}$.": "求导数 $f'(x)={@0}$ 的根。",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "求出原函数（$\\int\\sin x=-\\cos x$，$\\int\\cos x=\\sin x$，$\\int\\frac{1}{x}=\\ln|x|$，$\\int\\mathrm{e}^x=\\mathrm{e}^x$），再代入上下限。",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "求函数的驻点，即方程 $f'(x)={@0}=0$ 的根。",
  "O koľko percent sa {@0} zväčší? {@1}": "{@0}增加了百分之几？{@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "两部分都是奇函数，所以它们的和也是：$f(-x)=-f(x)$。",
  "Objem": "体积",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "球的体积是 $\\frac{4}{3}\\pi r^3$，别忘了系数 $\\frac{4}{3}$。",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "容积是 $V(x)=x({@0}-2x)^2$。区间 $(0; {@1})$ 中哪个 $x$ 使 $V'(x)=0$？",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "容积是 $V(x)=x({@0}-2x)^2$。把导数分解成 $V'(x)=({@1}-2x)({@2}-cx)$。数 $c$ 是多少？",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "圆锥的体积是同底等高圆柱体积的三分之一。把各部分的体积相加。",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "圆锥的体积不是 $\\pi r^2 w$，而只是它的三分之一。",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "材料的体积是两个等高圆柱的体积之差。",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "半球的体积是球体积的一半，即 $\\frac{2}{3}\\pi r^3$。把各部分的体积相加。",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "体积保持不变：$n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$，所以 $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$。",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "面积是 $S(x)=x({@0}-2x)$，其中 $x$ 是垂直于墙的边。$x$ 为何值时 $S'(x)=0$？",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "截面的面积：$\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$。",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "边长为 $a$ 的等边三角形的面积是 $\\frac{\\sqrt3}{4}a^2$。棱柱的侧面由三个全等的长方形组成。",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "三角形的面积是底与高的乘积的一半。别忘了除以 2。",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "由向量 $\\vec{AB}$ 和 $\\vec{AC}$ 求出面积（行列式绝对值的一半），再由公式 $S=\\frac{c\\cdot v_c}{2}$ 求出高。",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "从实心圆柱的体积中减去空心部分：$V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$。",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "把一个半径为 ${@0}\\,\\text{cm}$ 的铅球熔化后重新铸成半径为 ${@1}\\,\\text{cm}$ 的相同小球。能铸成多少个小球（材料没有损耗）？",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "对立事件（两人都没命中）：${@0}\\cdot {@1}={@2}$，所以 $P=1-{@3}={@4}$。",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "对立事件是 $X=0$：$P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$。所以 $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$。",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "对立事件“两个都是黑球”有 $\\binom{{@0}}{2}={@1}$ 种选法，有利的有 ${@2}-{@3}={@4}$ 种。",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "对立事件：一次六点也没有出现，$P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$。所求的概率是 $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$。",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "检验这个式子：代入 $k=0$ 和 $k=1$，看是否得到方程的解。也要检验这个式子有没有漏掉一个周期内的某个解。",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "设垂直于墙的边为 $x$，由篱笆的长度表示出另一条边，把面积写成 $x$ 的函数。然后找出它的导数为零的地方。",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "抛物线 $y={@0}$ 和直线 $y={@1}$ 有两个公共点。输入其中横坐标较小的那个点的坐标（例如 -1; 4）。",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "百分数不能相加。先把系数 $k={@0}$ 乘{@1}，再化成百分数。",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "不需要在四条边上都围篱笆：墙是其中一条边，只需要围三条边。",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "侧面由三个 ${@0}\\times {@1}$ 的长方形组成：$S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$。",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "代入 $x={@0}$ 后得到 $\\frac{0}{0}$，所以把分子分解因式：${@1}={@2}{@3}$。当 $x\\neq {@4}$ 时约分，得到 $\\lim_{x\\to {@5}}{@6}={@7}{@8}$。",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "存款多少年后第一次至少{@0}？",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "去掉对数后得到 $({@0})({@1})={@2}$。输入这个一元二次方程的根。",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "新成员加入后合唱团有 ${@0}$ 名成员，所以新的和是 ${@1}\\cdot {@2}$。",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "换元 $t={@0} x$ 后得到 ${@1}=0$。输入它的根（分数写成例如 1/2）。",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "换元 $t={@0}$ 后解方程 ${@1}=0$。输入它的根 $t$。",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "换元 $t={@0}^{x}$ 后解方程 ${@1}=0$。输入它的根 $t$。",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "提出 ${@0}$ 后：{@1} 中哪些 $x$ 使 ${@2}=0$？",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "约分后剩下式子 ${@0}$，还要把 $x={@1}$ 代入其中。",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "约分后分母中剩下的是 $\\sqrt{x}+{@0}$，而不只是 $\\sqrt{x}$。把 $x={@1}$ 代入整个和。",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "约去因式 ${@0}$ 后剩下 ${@1}$。当 $x={@2}$ 时这个式子的值是多少？",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "交换变量后得到 $x={@0}$。在 $y=kx+q$ 的表达式中，$x$ 的系数 $k$ 是多少？",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "握手次数是 $\\binom{n}{2}=\\frac{n(n-1)}{2}$。由方程 $\\frac{n(n-1)}{2}={@0}$ 得 $n^2-n-{@1}=0$，正根是 $n={@2}$。",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "首项系数之比只在次数相同时起决定作用。这里分子的次数较低，所以除以分母的最高次幂后，整个分子趋于零。",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "条件 $x&gt;0$。换元 $t={@0}$：${@1}=0$，所以 $t_1={@2}$，$t_2={@3}$。由 ${@4}={@5}$ 得 $x={@6}^{{@7}}={@8}$，由 ${@9}={@10}$ 得 $x={@11}^{{@12}}={@13}$。$K=\\left\\{{@14}\\right\\}$。",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "条件给出 $x&gt;c$。数 $c$ 是多少？",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "条件：${@0}&gt;0$ 且 ${@1}&gt;0$，所以 $x&gt;{@2}$。$\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$。根是 ${@10}$ 和 ${@11}$；只有 $x={@12}$ 满足条件。$K=\\{{@13}\\}$。",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "底面是等边三角形，而不是正方形：它的面积是 $\\frac{\\sqrt3}{4}a^2$。",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "底面是等边三角形：$S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$。{@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "根据韦达定理，两根之和是 $x_1+x_2=-p$，而不是 $p$。注意符号。",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "球的半径、平面到球心的距离和截面的半径构成一个直角三角形（球的半径是斜边）。",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "截面的半径：$\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$。{@3}",
  "Polož diskriminant rovný nule.": "令判别式等于零。",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "利用 $\\sin^2 x+\\cos^2 x=1$ 把方程改写成只含 ${@0} x$ 的形式。",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "也要比较函数在区间端点处的值，全局极值可能恰好在那里。",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "比较两条直线的方向。如果它们不平行，判断它们是否在同一个平面内（例如在正方体的一个面或对角截面内）。",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "比较分子和分母的次数。次数相同时，由首项系数决定。",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "把这些值与区间内部驻点处的值比较。{@0}值是多少？",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "把圆心到直线的距离与半径比较。半径是圆的方程右边的平方根，即 $r={@0}$，而不是 ${@1}$。也要注意圆心坐标的符号。",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "比较右边：${@0}={@1} \\Rightarrow {@2}=0$，根为 $x={@3}$ 和 $x={@4}$。当 $x={@5}$ 时 $y={@6}\\cdot {@7}{@8}={@9}$。交点是 $[{@10}; {@11}]$ 和 $[{@12}; {@13}]$。",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "需要 $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$，即 $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$。取对数（小于 1 的数的对数是负的，不等号改变方向）：$n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$。最小的整数 $n$ 是 ${@4}$。",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "利用 $(u\\cdot v)'=u'v+uv'$ 和 $(\\ln x)'=\\frac{1}{x}$。别忘了 $\\ln 1=0$。",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "利用 $(u\\cdot v)'=u'v+uv'$ 和 $(\\mathrm{e}^x)'=\\mathrm{e}^x$。",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "利用 $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$。",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "利用 $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$。",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "利用 $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$。分子中含 $x$ 的项要相减。",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "利用 $\\sin 2x=2\\sin x\\cos x$，把所有项移到一边，提出公因式。不要用它去除！",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "利用对立事件：每一次都不出现六点的概率是 $\\left(\\frac{5}{6}\\right)^n$。",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "利用公式 $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$，其中 $Q$ 是直线上的点。或者找一个以所求距离为高的三角形。",
  "Povrch": "表面积",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "球的表面积是 ${@0}\\pi\\,\\text{cm}^2$。它的体积可以写成 $V=k\\pi\\,\\text{cm}^3$。求 $k$。",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "注意分母的符号：当 $x$ 在 ${@1}$ 的{@0}很近处时，分母 ${@2}$ 为{@3}。把它与分子的符号结合起来。",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "注意，$R^2-r^2$ 和 $(R-r)^2$ 不一样。把两个圆柱的体积相减。",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "注意，$\\cos\\pi=-1$，而不是 $1$。所以原函数在上下限处的值相减不为零。",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "注意，$\\ln 1=0$，因为 $\\mathrm{e}^0=1$。原函数在下限处的值为零。",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "注意，$\\ln 1=0$，而不是 $1$（因为 $\\mathrm{e}^0=1$）。所以第一项 $u'v$ 在点 $1$ 处为零。",
  "Počet pokusov n": "试验次数 n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "$n$ 边形的对角线条数是 $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$（顶点之间的所有连线减去边）。",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "$n$ 个不同元素的排列数是 $n!$。",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "座位数构成 $a_1={@0}$、$d={@1}$ 的等差数列。和 $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ 得到一元二次不等式 ${@5}\\ge 0$。正根约为 ${@6}$，所以 $n={@7}$。检验：$s_{{@8}}={@9}$，$s_{{@10}}={@11}$。",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "你算反了顺序。在 $({@0})(x)$ 中先用 {@1}（内层函数），再把它的结果代入 {@2}。",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "用和来算：和 = 平均数 · 个数。比较新成员加入前后的和。",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "各次投掷的概率不能相加（掷 6 次就会得到必然事件）。用对立事件“一次也没有”。",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "没命中的概率是 ${@0}$ 和 ${@1}$。{@2}",
  "Pravdepodobnosť p": "概率 p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "正三棱柱的底面棱长 $a={@0}\\,\\text{cm}$，高 $v={@1}\\,\\text{cm}$。求它的{@2}。{@3}",
  "Pravidelný štvorboký ihlan": "正四棱锥",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "正四棱锥的底面棱长 $a={@0}\\,\\text{cm}$，高 $v={@1}\\,\\text{cm}$。求{@2}。{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "正四棱台的底面棱长 $a_1={@0}\\,\\text{cm}$，$a_2={@1}\\,\\text{cm}$，高 $v={@2}\\,\\text{cm}$。求它的体积（$\\text{cm}^3$）。{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "当 $x\\to {@0}^{{@1}}$ 时 $x {@2} {@3}$，所以分母 ${@4}$ 为{@5}且趋近于零。分子 ${@6}$ 为{@7}，所以分数的绝对值无限增大，符号为 {@8}：极限是 {@9}。",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "当 $x\\to\\infty$ 时，起决定作用的不是常数项，而是 $x$ 的最高次幂的项。",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "当 $x\\to\\pm\\infty$ 时，起决定作用的是 $x$ 的系数，而不是常数项。",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "参数 $c$ 取何值时，方程 $x^2{@0}+c=0$ 有二重根？",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "对于二项分布，$E(X)=np$，$D(X)=np(1-p)$。",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "对于函数 $f(x)=({@0})\\,\\mathrm{e}^{x}$，求 $f'(0)$。",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "对于函数 $f(x)=({@0})\\ln x$，求 $f'(1)$。",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "对于函数 $f(x)=({@0})^{{@1}}$，求 $f'({@2})$。",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "对于函数 $f(x)=\\dfrac{{@0}}{{@1}}$，求 $f'({@2})$。结果写成整数或分数。",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "对于函数 $f(x)={@0}{@1}$，求 $f'(0)$。",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "对于区间 $\\langle -1; 1\\rangle$ 中的根，求出 {@0} 中所有的 $x$（以度为单位）。",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "$x$ 为何值时括号 ${@0} {@1}$ 为零？",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "参数 $p$ 取何值时，方程 $x^2+px+{@0}=0$ 有二重根？输入所有的值，用分号隔开。",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "参数 $p$ 取何值时，方程 $x^2{@0}+p=0$ {@1}？",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "对于棱台，$V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$；底面是正方形时 $\\sqrt{S_1S_2}=a_1a_2$。",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "求中位数之前要先把数据按大小排列。",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "主席从 $n$ 个人中选，副主席只能从剩下的人中选，财务再从更少的人中选。",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "把平面想象成正方体的一个截面。如果直线上有两个点在平面内，直线就在平面内；如果直线平行于平面内的某条直线，它就与平面平行。",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "想象把所有成绩从最好到最差排好。中位数是中间的值（个数为偶数时取中间两个值的平均数）。",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "对于 $(f\\circ g)(x)=f(g(x))$，先算内层函数 $g$，再把它的结果代入 $f$。",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "幂求导时指数减一：$(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$。",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "线性换元时，结果要除以 $x$ 的系数，即 ${@0}$。",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "对于相互独立的事件，同时发生的概率要相乘。遇到“至少一个”时用对立事件。",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "在圆桌旁，只相差一个旋转的坐法是相同的。先固定一个人。",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "相似比为 $k$ 时，{@0}。把得到的倍数化成百分数。",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "熔化重铸时体积保持不变。相似立体的体积比是长度比的三次方。",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "在一面笔直的墙边要围一块长方形地块，墙是它的一条边。我们有 ${@0}\\,\\text{m}$ 长的篱笆。{@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "剪去的正方形边长为 $x$ 时，盒子的底面是 $({@0}-2x)^2$，高是 $x$：$V(x)=x({@1}-2x)^2$，其中 $x\\in(0; {@2})$。$V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$，在这个区间内只有 $x={@7}$ 时为零（在那里符号由 $+$ 变为 $-$）。$V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$。",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "解出 $y$ 时，要用 ${@0}$ 除整个右边，常数项也要除。",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "对复合函数求导要乘以内层函数的导数：$(\\sin kx)'=k\\cos kx$，$(\\cos kx)'=-k\\sin kx$，$(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$。",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "直线 $p: {@0}=0$ 与圆 $k: {@1}$ 交于两点。输入两个交点的横坐标，用分号隔开。",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "只有当直线的方向向量垂直于平面的法向量（$\\vec u\\cdot\\vec n=0$）时，直线才与平面平行。算出这个数量积。",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "只有当直线上有两个点在平面内时，直线才在平面内。检验两个端点。",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "只有当 $\\vec u\\cdot\\vec n\\neq 0$ 时，直线才与平面相交。算出方向向量与法向量的数量积。",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "直线 $y={@0}$ 和 $y={@1}$ 与 $x$ 轴交于点 $[{@2}; 0]$ 和 $[{@3}; 0]$，彼此交于点 $[{@4}; {@5}]$。这个区域是底为 ${@6}$、高为 ${@7}$ 的三角形，面积是 $\\frac{{@8}\\cdot {@9}}{2}={@10}$。",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "有利的数对：{@0}——共 ${@1}$ 个。",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "有利的：$\\binom{{@0}}{2}={@1}$。",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "有利的：${@0}\\cdot {@1}={@2}$（白球和黑球是独立地选出的）。",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "由频数表求平均数要用加权平均：每个成绩乘以得到它的学生人数。",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "合唱团 {@0} 名成员的平均年龄是 ${@1}$ 岁。一名新成员加入后，平均年龄{@2}到 ${@3}$ 岁。新成员几岁？",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "与 $x$ 轴的交点：${@0}-x^2=0$，所以 $x=\\pm {@1}$。$S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$。",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "交点是 $x=0$ 和另一个点。它的 $x$ 是多少？",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "交点：$x^2={@0}$，所以 $x=0$ 和 $x={@1}$。在 $\\langle 0; {@2}\\rangle$ 上直线在抛物线上方。$S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$。",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "原函数是 $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$。求 $F(1)$。输入分数或整数。",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "原函数是 $F(x)={@0}$。求 $F({@1})$。",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "原函数是 $F(x)={@0}x-\\frac{x^3}{3}$。求 $F({@1})$。输入分数或整数。",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "第一个不等式的解是 $x&gt;c$。数 $c$ 是多少？",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "第一个不等式：${@0} {@1} {@2}$，除以 ${@3}$ 后 {@4}$x&gt;{@5}$。第二个：${@6} {@7} {@8}$，由此 {@9}$x\\le {@10}$。交集是 $({@11}; {@12}\\rangle$。{@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "恰好一人命中，可以是第一个射手，也可以是第二个射手。把两种情况的概率相加。",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "偶函数对定义域中的所有 $x$ 满足 $f(-x)=f(x)$。例如代入 $x=1$ 和 $x=-1$ 进行比较。",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "相对频率是 $\\frac{n_i}{n}$，化成百分数要乘以 100。",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "截面的半径不是球的半径。先由直角三角形求出截面半径 $\\rho$。",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "解 ${@0}^{{@1}}{@2}={@3}$。幂 ${@4}^{{@5}}$ 等于什么？",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "圆锥的底面半径 $r={@0}\\,\\text{cm}$，高 $v={@1}\\,\\text{cm}$。求{@2}。{@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "平面 $\\rho: {@0}+d=0$ 经过点 $P{@1}$。求 $d$。",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "平面 ${@0}$ 的法向量是 $\\vec{n}={@1}$，方程是 ${@2}+d=0$。求 $d$。",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "方程 $x^2+px{@0}=0$ 有一个根 $x_1={@1}$。求参数 $p$ 和另一个根 $x_2$（按这个顺序输入，例如 -5; 3）。",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "你大概用式子 ${@0}$ 去除方程，因而丢掉了使它为零的解。要把它提到括号外。",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "平行直线的方向向量成倍数关系。比较方向向量。",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "平行平面的法向量成倍数关系。比较法向量。",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "按最后一位数字分情况（它必须是 {@0}）；第一位数字不能是零{@1}：{@2}。共 ${@3}$ 个。",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "把 $f'(x)$ 分解因式，求出零点，看导数在哪里变号。",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "二项分布的方差是 $np(1-p)$，别忘了因数 $1-p$。",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "极差是最大值与最小值之差，而不是记录中最后一个值与第一个值之差。",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "只相差桌子旋转的坐法是相同的。这样你把每种坐法都算了 {@0} 次。",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "数据个数 $n={@0}={@1}$。相对频率：$f=\\frac{{@2}}{{@3}}\\approx {@4}$。{@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "相交直线有公共点，所以在同一个平面内。你能找到这样的平面吗？",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "相交平面的法向量不成倍数关系。比较法向量。",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "一根管子的形状是空心圆柱，外半径 ${@0}\\,\\text{cm}$，内半径 ${@1}\\,\\text{cm}$，长 ${@2}\\,\\text{cm}$。求材料的体积（$\\text{cm}^3$）。{@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "这个单词有 {@0} 个字母，重复的有 {@1}。这是有重复元素的全排列：$\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$。",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "切线的斜率是 $f'(x_0)$。代入 $y=f(x_0)+f'(x_0)(x-x_0)$ 并整理。",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "方向向量 $\\vec{{@0}}={@1}$ 和 $\\vec{{@2}}={@3}$ 成倍数关系，点 ${@4}$ 不在直线 ${@5}$ 上，两条直线平行。",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "方向向量 ${@0}$ 和 ${@1}$ 不成倍数关系，但两条直线在同一个平面内，交于点 ${@2}$。它们相交。",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "方向向量 ${@0}$ 和 ${@1}$ 不成倍数关系，所以两条直线不平行；它们也不在同一个平面内，所以没有公共点。它们是异面直线。",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "一个协会有 {@0} 名会员。选出主席、副主席和财务（一个人最多担任一个职务），有多少种选法？",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "用组合数算出三人组的个数，再利用对立事件“全是男生”。",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "斜高：$v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$。{@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "圆锥的母线 $s$ 是直角边为 $r$ 和 $v$ 的直角三角形的斜边。",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "圆锥的母线：$s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$。{@3}={@4}\\pi\\approx {@5}$。",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "母线：$s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$。$S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$。",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "设三边为 $a-d$、$a$、$a+d$（斜边最长）。由周长 $3a={@0}$，得 $a={@1}$。勾股定理：$({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$。三边是 ${@8}$、${@9}$、${@10}$ cm{@11}。",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "三边是 $a-d$、$a$、$a+d$。由周长求出 $a$。",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "把三边写成 $a-d$、$a$、$a+d$。由周长得到 $a$，再由勾股定理得到公差 $d$。",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "圆心是 $S[{@0}; {@1}]$，向量 $\\vec{ST}=({@2}; {@3})$ 垂直于切线，是它的法向量——所以方程的形式是 ${@4}+c=0$。代入 $T$：${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$，所以 $c={@9}$。",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "圆心是 $S[{@0}; {@1}]$，半径 $r={@2}$。圆心到直线的距离：$d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$。因为 $d{@10}r$，所以直线是{@11}。",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "圆心角：$f\\cdot 360^\\circ\\approx {@0}^\\circ$。",
  "Stĺpcový graf známok": "成绩条形图",
  "Stĺpcový graf známok v triede": "班级成绩条形图",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "换元 $u={@0}$（或用公式 $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$）：原函数是 $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$。$F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$。",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "它们成倍数关系，两个平面平行；点 ${@0}$ {@1} ${@2}$ 上，所以两个平面{@3}。",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "点 $P$ 的坐标必须满足方程：${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$，所以 ${@6}+d=0$，$d={@7}$。",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "不等式组 ${@0}$ 和 ${@1}$ 在 $\\mathbb{R}$ 中有解。{@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "含参数 $m$ 的方程组：$mx+{@0}y={@1}$，${@2}x+my={@3}$。$m$ 取何值时{@4}？",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "对数之和等于积的对数：$\\log_2 u+\\log_2 v=\\log_2(uv)$，而不是 $\\log_2(u+v)$。",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "加上 $d$ 后的和应该为零。$d$ 等于多少？",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "原有成员的年龄之和是 ${@0}\\cdot {@1}={@2}$。新成员加入后年龄之和是 ${@3}\\cdot {@4}={@5}$。新成员 ${@6}-{@7}={@8}$ 岁。",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "成绩之和要除以学生人数 $n$，而不是除以不同成绩的个数。",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "偏差的平方和除以数据个数 $n={@0}$，而不是除以 $n-1$（理论中方差就是这样定义的）。",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "两个奇函数的积是偶函数：$(-x)\\sin(-x)=x\\sin x$。",
  "Súčin je nenulový, priamka rovinu pretína.": "数量积不为零，直线与平面相交。",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "只有两个数都是奇数时积才是奇数：$3\\cdot 3=9$ 个结果。有利的有 $36-9=27$ 个。",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "数量积为零，直线与平面平行；点 ${@0}$ {@1}。",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "两根之积是 $x_1x_2={@0}$。另一个根 $x_2$ 是多少？",
  "Tabuľka": "表格",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "这是单利的算法。复利时计入的利息也要计息，金额每年相乘。",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "这是单利的算法。利息留在账户上，下一年也要计息，金额每年相乘。",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "一个立体由半径 ${@0}\\,\\text{dm}$、高 ${@1}\\,\\text{dm}$ 的圆柱和放在它上面的同底、高 ${@2}\\,\\text{dm}$ 的圆锥组成。求这个立体的体积（$\\text{dm}^3$）。{@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "一个立体由半径 ${@0}\\,\\text{m}$、高 ${@1}\\,\\text{m}$ 的圆柱和放在它上底面上的同半径半球组成。求这个立体的体积（$\\text{m}^3$）。{@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "这是距离的平方。结果还要开方。",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "这是另一个公共点。问的是横坐标较小的那个。",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "这是另一个驻点，在这一点函数取得局部{@0}。在极大值点 $f'$ 的符号由 $+$ 变为 $-$，在极小值点由 $-$ 变为 $+$。",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "这是垂直于墙的边长。问的是与墙平行的边，它的长度是 ${@0}-2x$。",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "这只是棱锥的侧面。表面积还包括正方形的底面。",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "这只是圆锥的侧面。表面积还包括圆形的底面 $\\pi r^2$。",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "这只是侧面。表面积还包括两个圆形底面。",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "这是新的平均年龄。用年龄之和来算：和 = 平均数 · 个数。",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "这是同底等高的棱柱的体积。棱锥的体积是它的三分之一。",
  "To je objem valca. Objem kužeľa je jeho tretina.": "这是圆柱的体积。圆锥的体积是它的三分之一。",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "这是抛物线下方的面积。图形在两条曲线之间，要对“上面减去下面”积分。",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "这是直线下方的面积。还要减去抛物线下方的面积。",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "这是半径之比。熔化重铸时体积不变，而体积随半径的三次方增长。",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "这是出现次数最多的值的频数。众数是出现次数最多的那个值本身。",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "这是对立事件 $X=0$ 的概率。用 1 减去它。",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "这是对立事件“只选出男生”的概率。用 1 减去它。",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "这是对立事件“积是奇数”的概率。用 1 减去它。",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "这是对立事件“一次六点也没有出现”的概率。用 1 减去它。",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "这是恰好成功一次的概率。“至少一次”还包括多次成功，用对立事件。",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "这是两人不同时命中的概率。“都没命中”表示两人都没命中。",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "这是两人都命中的概率。“至少一人”还包括只有一人命中的情况。",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "这是平均数。中位数是有序数据中间的值。",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "这是中间的那条边。斜边是三角形最长的边。",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "这是方差。标准差是它的平方根。",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "这是标准差。方差是它的平方，$D(X)=np(1-p)$。",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "这是标准差。方差不需要开方。",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "这是剪去的正方形的边长。问的是盒子的容积。",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "这是扇形的圆心角（度）。百分数是 $100$ 的几分之几，而不是 $360$ 的。",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "这是直线与平面法向量的夹角。直线与平面的夹角与它互余：用法向量计算的是 $\\sin\\varphi$，而不是 $\\cos\\varphi$。",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "这是点 ${@0}$ 和 ${@1}$ 之间的距离。到直线的距离要垂直于直线来量。",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "这些是交点的纵坐标。输入它们的横坐标。",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "这些是换元 $t={@0}$ 的值。还要由对数的定义算出 $x={@1}^{t}$。",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "这些是换元 $t={@0}^{x}$ 的值。还要回到未知数 $x$。",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "这是百分数。圆心角是整个角 $360^\\circ$ 的同样一部分，而不是 $100$ 的。",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "这是所有顶点对之间的连线，也包括多边形的边。要减去边。",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "重合的直线所有点都是公共点。检验一条直线上的两个点是否都在另一条直线上。",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "重合的平面所有点都是公共点。检验第二个平面上的三个点是否都在第一个平面内。",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "三角形的顶点是 $A[{@0}; {@1}]$，$B[{@2}; {@3}]$，$C[{@4}; {@5}]$。求它的面积 $S$ 和边 $AB$ 上的高 $v_c$。输入 $S$ 和 $v_c$（四舍五入到 2 位小数），用分号隔开。",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "这里 $f''(x)&lt;0$，函数在那里是凹函数。不等式除以负数时，别忘了改变不等号的方向。",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "这里函数是{@0}。检查 $f'$ 的符号：在两根之间它的符号与首项系数 ${@1}$ 相反。",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "这个条件对应 $D&gt;0$，即两个不同的实数根。",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "这个条件对应 $D&lt;0$，这时方程没有实数根。",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "这个条件对应 $D=0$，即一个二重根。",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "这个条件对应 $D\\ge 0$，即至少一个实数根。",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "这个条件对应 $D\\le 0$：既包括二重根，也包括没有实数根的情况。",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "两条直线的夹角最大是 $90^\\circ$。在 $\\cos\\varphi$ 的公式中，分子是数量积的绝对值。",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "借助平面的法向量计算直线与平面的夹角：$\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$。或者找出直线在平面上的射影和直角三角形。",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "两条直线的夹角是它们方向向量在区间 $\\langle 0^\\circ; 90^\\circ\\rangle$ 内的夹角：$\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$。",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "把正方体放进坐标系，写出两个点的坐标（棱的中点是两个端点的平均），再用距离公式。",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "整理 $f(-x)$：利用 $(-x)^2=x^2$、$(-x)^3=-x^3$、$\\sin(-x)=-\\sin x$ 和 $\\cos(-x)=\\cos x$。然后与 $f(x)$ 和 $-f(x)$ 比较。",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "把方程化成 $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$ 的形式。数 $r$ 是多少？输入分数或整数。",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "变形：$\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$。当 $x\\to 0$ 时 $t={@6}x\\to 0$，且 $\\frac{\\sin t}{t}\\to 1$。极限是 ${@7}{@8}$。",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "求函数 $f(x)=\\dfrac{{@0}}{{@1}}$ 的图象的渐近线。先输入竖直渐近线 $x=\\dots$ 中的数，再输入水平渐近线 $y=\\dots$ 中的数（例如 2; -1/2）。",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "求单侧极限 $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$。",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "写出条件，把对数之和写成积的对数，再去掉对数。把求出的根与条件比较。",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "判断直线 $p: {@0}=0$ 与圆 $k: {@1}$ 的位置关系。",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "有序数据：${@0}$（$n={@1}$）。{@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "$P(X=1)$ 中缺少组合数 $\\binom{{@0}}{1}={@1}$：成功可以发生在任何一次试验中。",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "在正方体 $ABCDEFGH$（底面 $ABCD$，上面是 $EFGH$，棱 $AE$、$BF$、$CG$、$DH$）中，判断直线 ${@0}$ 和 ${@1}$ 的位置关系。",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "在正方体 $ABCDEFGH$ 中，判断直线 ${@0}$ 与平面 ${@1}$ 的位置关系。",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "在正方体 $ABCDEFGH$ 中，判断平面 ${@0}$ 和 ${@1}$ 的位置关系。",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "在正方体 $ABCDEFGH$ 中，求直线 ${@0}$ 与平面 ${@1}$ 的夹角（度）。结果精确到十分之一度。",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "在正方体 $ABCDEFGH$ 中，求直线 ${@0}$ 和 ${@1}$ 的夹角（度）。结果精确到十分之一度。",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "在棱长为 $1$ 的正方体中，直线的方向向量是 $\\vec{u}={@0}$，平面 ${@1}$ 是正方体的一个面，法向量为 $\\vec{n}={@2}$。$\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$，所以 $\\varphi\\approx {@6}^\\circ$。",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "在棱长为 $1$ 的正方体中，方向向量是 $\\vec{u}=\\vec{{@0}}={@1}$ 和 $\\vec{v}=\\vec{{@2}}={@3}$。$\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$，所以 $\\varphi\\approx {@8}^\\circ$。",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "兴趣小组有 {@0} 名男生和 {@1} {@2}。随机选出三名成员参加比赛。他们中至少有一名女生的概率是多少？{@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "函数在点 ${@0}$、${@1}$ 中的哪一个处取得{@2}？",
  "V percentách ${@0}\\,\\%$.": "百分数为 ${@0}\\,\\%$。",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "在含棱锥的高和斜高的直角三角形中，另一条直角边是底面棱长的一半，而不是整条棱。",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "坐成一排时，谁坐哪把椅子很重要：这里旋转不起作用，要把所有人排列。",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "在方程 $y=ax+b$ 中交换 $x$ 和 $y$，再解出 $y$。",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "小组内与顺序无关，这是组合，而不是排列。",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "在公共点处两个函数的值相同：令两个右边相等，解一元二次方程。",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "班上有 {@0} 名男生和 {@1} 名女生。选出一个由{@2}和{@3}组成的小组，有多少种选法？",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "瓮中有球：{@0} {@1}和 {@2} {@3}。同时随机取出两个。{@4}的概率是多少？{@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "圆柱：$\\pi r^2v={@0}\\pi$。圆锥：$\\frac{1}{3}\\pi r^2w={@1}\\pi$。合计 $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$。",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "圆柱：$\\pi r^2v={@0}\\pi$。半球：$\\frac{2}{3}\\pi r^3={@1}\\pi$。合计 $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$。",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "极差是最大值与最小值之差。",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "存款按年利率 ${@0}\\,\\%$ 每年计息（复利，不扣税）。多少年后第一次至少{@1}？",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "公式中是高除以 3：$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$。",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "圆台的体积公式中是高除以 3：$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$。",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "回到 $x$，输入所有的解（分数写成例如 1/2）。",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "两边同除以 ${@0}$：$\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$。取对数：$x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$，所以 $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$。",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "用 $p$ 表示判别式，根据所要求的根的个数确定它应该为正、为零还是为负。",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "求出三角函数的值，找出一个周期内的解，再加上周期的倍数（正弦和余弦是 $2\\pi$，正切是 $\\pi$）。",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "把容积表示成剪去的正方形边长的函数，求导，在允许的区间内找出驻点。",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "交换 $x$ 和 $y$：$x={@0}$，由此 ${@1}y={@2}$，$y=\\dfrac{{@3}}{{@4}}$。所以 $f^{-1}(x)={@5}x{@6}{@7}$，即 $k={@8}$，$q={@9}$。",
  "Vypočítaj $F(-{@0})$.": "求 $F(-{@0})$。",
  "Vypočítaj $F(0)$.": "求 $F(0)$。",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "求 $F(1)-F(0)$。输入分数或整数。",
  "Vypočítaj $F({@0})$.": "求 $F({@0})$。",
  "Vypočítaj $F({@0})-F({@1})$.": "求 $F({@0})-F({@1})$。",
  "Vypočítaj $P(X=0)$. {@0}": "求 $P(X=0)$。{@0}",
  "Vypočítaj $P(X=1)$. {@0}": "求 $P(X=1)$。{@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "求 $P(X={@0})$。{@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "求 $P(X\\ge 1)$。{@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "求 $P(X\\le 1)$。{@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "计算 $\\dfrac{\\ln {@0}}{\\ln {@1}}$。{@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "计算 $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$。结果写成分数或整数。",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "计算 $\\int_0^{{@0}} x^2\\,dx$。输入分数或整数。",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "计算 $\\int_0^{{@0}} {@1}\\,dx$。",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "求 $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$。结果写成整数或分数。",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "求 $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$。结果写成分数。",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "求 $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$。",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "求 $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$。结果写成整数或分数（例如 -3/2）。",
  "Vypočítaj $k$.": "求 $k$。",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "由第一个坐标算出 $t$，把它代入其余两个方程。仔细检验这两个方程。",
  "Vypočítaj $|AB|^2$.": "求 $|AB|^2$。",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "对于 $\\vec u=\\vec{{@0}}$ 和法向量 $\\vec n={@1}$，求 $|\\vec u\\cdot\\vec n|$（棱长为 $1$ 的正方体）。",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "求 $|{@0}K|$（cm）。{@1}",
  "Vypočítaj $|{@0}K|^2$.": "求 $|{@0}K|^2$。",
  "Vypočítaj absolútny člen $q$.": "求常数项 $q$。",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "求算术平均数 $\\bar{x}$。",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "计算行列式 $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$。",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "求二阶导数。$x$ 为何值时 $f''(x)=0$？",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "求右端点处的值 $f({@0})$。",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "求左端点处的值 $f({@0})$。",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "求整个立体的体积（$\\text{dm}^3$）。{@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "求整个立体的体积（$\\text{m}^3$）。{@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "求半径为 ${@0}\\,\\text{cm}$ 的空心部分的体积（$\\text{cm}^3$）。{@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "求圆锥的体积（$\\text{dm}^3$）。{@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "求材料的体积（$\\text{cm}^3$）。{@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "求半径为 ${@0}\\,\\text{cm}$ 的实心圆柱的体积（$\\text{cm}^3$）。{@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "求半球的体积（$\\text{m}^3$）。{@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "求体积（$\\text{cm}^3$）。{@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "求体积（$\\text{cm}^3$）。{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "求圆柱的体积（$\\text{dm}^3$）。{@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "求圆柱的体积（$\\text{m}^3$）。{@0}",
  "Vypočítaj obsah $S$.": "求面积 $S$。",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "求底面积 $S_p$（$\\text{cm}^2$）。{@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "求截面的面积（$\\text{cm}^2$）。{@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "求面积（$\\text{cm}^2$）。",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "求由抛物线 $y=x^2$ 和直线 $y={@0}$ 所围成的图形的面积。结果写成分数或整数。",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "求由抛物线 $y={@0}-x^2$ 和 $x$ 轴所围成的图形的面积。结果写成分数或整数。",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "求不等式组 $y\\ge 0$，$y\\le {@0}$，$y\\le {@1}$ 所确定的平面区域的面积。",
  "Vypočítaj polomer gule v cm.": "求球的半径（cm）。",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "求截面的半径 $\\rho$（cm）。",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "求棱锥的表面积（$\\text{cm}^2$）。",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "求表面积（$\\text{cm}^2$）。{@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "先求平均数，再求与它的偏差的平方的平均数。标准差是方差的平方根。",
  "Vypočítaj priemernú známku. {@0}": "求平均成绩。{@0}",
  "Vypočítaj rozptyl $D(X)$.": "求方差 $D(X)$。",
  "Vypočítaj rozptyl $s^2$. {@0}": "求方差 $s^2$。{@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "求方向向量的数量积 $\\vec{{@0}}\\cdot\\vec{{@1}}$（棱长为 $1$ 的正方体）。",
  "Vypočítaj smernicu $k=f'({@0})$.": "求斜率 $k=f'({@0})$。",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "求标准差 $s$。{@0}",
  "Vypočítaj stranu $s$ v cm.": "求母线 $s$（cm）。",
  "Vypočítaj stranu kužeľa $s$ v cm.": "求圆锥的母线 $s$（cm）。",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "求数学期望 $E(X)$（分数或至少保留 2 位的小数）。",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "求和 $R^2+Rr+r^2$。",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "求和 $a_1^2+a_1a_2+a_2^2$。",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "求与平均数的偏差的平方和。",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "求直线与平面的夹角（度）。结果精确到十分之一度。",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "求两条直线的夹角（度）。结果精确到十分之一度。",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "求点 ${@0}$ 到平面的距离（cm）。{@1}",
  "Vypočítaj výšku $v_c$. {@0}": "求高 $v_c$。{@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "求函数 $f(x)={@1}$ 在区间 $\\langle {@2}; {@3}\\rangle$ 上的{@0}值。",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "求数据 ${@1}$ 的{@0}。{@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "求{@0}（$\\text{cm}^2$）。{@1}",
  "Vypočítaj {@0}. {@1}": "求{@0}。{@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "你算的是 $f\\!\\left({@0}\\right)$。而 $f^{-1}(c)$ 的值是使 $f(x)=c$ 的数 $x$。",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "依次填各个位置，用乘法原理。第一位不能是零；有整除条件时从最后一位开始，分情况讨论。",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "分别解每个不等式（注意除以负数），再求区间的交集。",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "解方程 $({@0})^2{@1}{@2}=0$。输入所有的解，用分号隔开（分数写成例如 1/2）。",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "解方程 $\\log_2({@0})+\\log_2({@1})={@2}$。输入所有的解，用分号隔开。",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "对于 {@1}，解方程 ${@0}$。以度为单位输入所有的解，用分号隔开（例如 30; 150）。",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "对于 {@1}，解方程 ${@0}$。以度为单位输入所有的解，用分号隔开。",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "解方程 ${@0}={@1}$。{@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "解方程。这个多边形有几个顶点？",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "解方程。聚会上有多少人？",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "解方程组 $x+y={@0}$，$x\\cdot y={@1}$。输入 $x$ 所有可能的值，用分号隔开。",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "在 $\\mathbb{R}$ 中解方程 ${@0}^{x}{@1}{@2}=0$。输入所有的解，用分号隔开。",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "利用 $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$：把式子乘以并除以适当的数，使分母与正弦中的自变量相同。",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "利用韦达定理：两根之积是常数项，两根之和是 $-p$。或者把已知的根代入方程。",
  "Vzdialenosť h od nuly": "到零的距离 h",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "公式 $\\frac{\\sin t}{t}\\to 1$ 只在分母恰好是正弦的自变量（即 ${@0}x$）时成立。先把式子变形。",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "选男生和选女生不是互斥的，而是组合在一起的。用乘法原理，而不是加法原理。",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "式子中只有 $x^2$，所以 $f(-x)=f(x)$。",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "每件产品是次品的概率是 ${@0}$，与其他产品相互独立。随机抽取 {@1} {@2}；$X$ 是次品的件数。",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "扇形的圆心角是 $\\frac{n_i}{n}\\cdot 360^\\circ$。",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "试验的结果是两个球组成的对（组合）。数出所有的和有利的；遇到“至少一个”时用对立事件更简单。",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "把结果代入外层函数：${@0}({@1})$。",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "结果是有序数对（第一颗骰子，第二颗骰子），一共有 36 个。数出有利的数对。",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "结果四舍五入到 2 位小数。",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "结果四舍五入到 4 位小数。",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "把正方体的所有棱都增加 ${@0}\\,\\%$。它的{@1}增加了百分之几？{@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "所有的三人组有 $\\binom{{@0}}{3}={@1}$ 个。对立事件——只选出男生——有 $\\binom{{@2}}{3}={@3}$ 种可能。$P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$。",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "取两个球的所有选法有 $\\binom{{@0}}{2}={@1}$ 种。{@2}$P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$。",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "所有结果的个数是 $6\\cdot 6=36$。{@0}$P=\\frac{{@1}}{36}={@2}$。",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "由 $\\frac{n(n-3)}{2}={@0}$ 得 $n^2-3n-{@1}=0$，正根是 $n={@2}$。",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "用勾股定理求出公差 $d$。",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "由韦达定理 $x_1x_2={@0}$ 得 $x_2=\\frac{{@1}}{{@2}}={@3}$。由 $x_1+x_2=-p$ 得 $p=-({@4}{@5})={@6}$。代入检验：${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "由一个坐标算出参数 $t$，检验同一个 $t$ 是否也满足其他坐标。",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "由一次方程解出 $y$，代入另一个方程。得到关于 $x$ 的一元二次方程。",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "由条件 $D=0$ 求出 $p^2$。$p^2$ 等于多少？",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "由表面积 $S=4\\pi r^2$ 求出半径，再代入体积公式 $V=\\frac{4}{3}\\pi r^3$。",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "由第一个方程得 $y={@0}$。代入：$x({@1})={@2} \\Rightarrow {@3}=0$，根为 $x_1={@4}$，$x_2={@5}$。方程组的解是 $[{@6}; {@7}]$ 和 $[{@8}; {@9}]$，所以 $x$ 是 ${@10}$ 或 ${@11}$。",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "由方程 $\\frac{n(n-1)}{2}={@0}$ 求出乘积 $n(n-1)$。它等于多少？",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "由方程 $\\frac{n(n-3)}{2}={@0}$ 求出乘积 $n(n-3)$。它等于多少？",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "由方程 ${@0}={@1}$ 求出公共点的横坐标。",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "由圆的方程求出圆心和半径，再算出圆心到直线的距离，把它与半径比较。",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "由直线方程解出 $y$，代入圆的方程，解关于 $x$ 的一元二次方程。",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "由直线方程得 $y={@0}$，代入圆的方程。整理后得到 ${@1}=0$，根为 $x_1={@2}$，$x_2={@3}$。交点是 $[{@4}; {@5}]$ 和 $[{@6}; {@7}]$。",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "由方程 ${@0}^{x}=t$ 求出所有的解 $x$（记住 ${@1}^{x}&gt;0$）。",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "你忘了除以法向量的模 $|\\vec n|=\\sqrt{{@0}}$。",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "你忘了组合数 $\\binom{{@0}}{{@1}}$：成功的试验可以以不同的方式分布在所有试验中。",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "你忘了 $u'v$ 这一项：括号中的一次函数也要求导。",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "你忘了乘以内层函数的导数：$(\\sin kx)'=k\\cos kx$，$(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$。",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "你忘了把分母平方：商的导数公式中分母是 $v^2$。",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "你忘了乘以内层函数的导数：$({@0})'={@1}$。",
  "Zadaj všetky hodnoty $p$.": "输入 $p$ 所有的值。",
  "Zadaj všetky možné hodnoty $x$.": "输入 $x$ 所有可能的值。",
  "Zadaj všetky riešenia rovnice.": "输入方程所有的解。",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "你把以零开头的“数”也算进去了。第一位不能是零。",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "把 ${@0}^{x}$ 写成 $({@1}^{x})^2$，换元 $t={@2}^{x}$。别忘了 $t$ 必须是正数。",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "把分母写成 $(\\sqrt{x})^2-a^2$，按公式 $A^2-B^2=(A-B)(A+B)$ 分解。",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "用对立事件写出条件 $\\left(\\frac{5}{6}\\right)^n&lt;1-p$，取对数求解。",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "写出等差数列前 $n$ 项的和，解不等式 $s_n\\ge$ 所要求的数。你要找的是最小的自然数 $n$。",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "换元 $t={@0}$，解一元二次方程，然后由对数的定义回到 $x$。",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "对外层的幂求导（内层保持不变），再乘以内层函数的导数。",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "判断 $f'$ 在该点左边和右边的符号。",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "判断当 $x$ 紧靠给定点的右边或左边时分母的符号，再与分子的符号结合起来。",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "判断正方体的哪些点在这些平面内。三个点即使是不同的顶点，也可能确定同一个平面。",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "你只求出了指数 ${@0}$。还要由它解出 $x$。",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "两边取对数，解出 $x$。{@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "复利：$K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$。账户上的金额构成公比为 ${@6}$ 的等比数列。",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "从一张边长为 ${@0}\\,\\text{cm}$ 的正方形纸板的四个角剪去相同的正方形，把剩下的部分折成一个无盖的盒子。{@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "剩下首项系数之比：$\\frac{{@0}}{{@1}}{@2}$。",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "列出不等式 $\\left(1+\\frac{p}{100}\\right)^n\\ge k$，取对数求解。结果向上取整。",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "写出平面的方程（法向量垂直于平面内的两个向量），再用点到平面的距离公式。",
  "Zrezaný kužeľ": "圆台",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "圆台的两个底面半径分别为 $R={@0}\\,\\text{cm}$，$r={@1}\\,\\text{cm}$，高 $v={@2}\\,\\text{cm}$。求它的{@3}。{@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "竖直渐近线在分母的零点处。水平渐近线由 $x\\to\\infty$ 时的极限给出：$x$ 的系数之比。",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "竖直渐近线在分母的零点处：解方程 ${@0}=0$。注意符号。",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "取 $A[0; 0; 0]$，$B[{@0}; 0; 0]$，$D[0; {@1}; 0]$，$E[0; 0; {@2}]$。",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "取棱长为 $1$ 的正方体：$A[0; 0; 0]$，$B[1; 0; 0]$，$C[1; 1; 0]$，$D[0; 1; 0]$，点 $E, F, G, H$ 在它们的正上方，$z=1$。",
  "Základ a": "底数 a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "谁担任什么职务很重要，这是从 {@0} 个元素中取 3 个的排列：$V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$。",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "把 $x$ 换成 $-x$ 后，两个加项只是交换了位置：$f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$。",
  "ani sa cifry nesmú opakovať": "，而且数字不能重复",
  "aspoň jeden reálny koreň": "至少有一个实数根",
  "aspoň jedna guľa je biela": "至少有一个白球",
  "auto": "汽车",
  "bicykel": "自行车",
  "biele": "个白球",
  "bielych": "个白球",
  "deliteľných piatimi": "能被 5 整除的",
  "dievčat": "名女生",
  "dievčatá": "名女生",
  "do známky {@0} je to {@1}": "到成绩 {@0} 为止是 {@1}",
  "dotyčnica (jeden spoločný bod)": "切线（一个公共点）",
  "druh dopravy do práce": "上班的交通方式",
  "druhú": "平方",
  "dva rôzne reálne korene": "有两个不同的实数根",
  "dĺžku prepony v cm": "斜边的长（cm）",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">当 h → 0 时，值趋近于 1</span>",
  "farba očí žiaka": "学生的眼睛颜色",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0，函数递减",
  "hmotnosť balíka": "包裹的质量",
  "jeden chlapec": "一名男生",
  "jedna guľa je biela a jedna čierna": "一个白球一个黑球",
  "jeho objem v $\\text{cm}^3$": "它的体积（$\\text{cm}^3$）",
  "jeho obsah v $\\text{cm}^2$": "它的面积（$\\text{cm}^2$）",
  "jeho povrch v $\\text{cm}^2$": "它的表面积（$\\text{cm}^2$）",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "以数字 {@0} 结尾的：{@1}",
  "krajina, z ktorej prišiel turista": "游客来自的国家",
  "kvalitatívny": "定性变量",
  "kvantitatívny diskrétny": "离散型定量变量",
  "kvantitatívny spojitý": "连续型定量变量",
  "leží v rovine": "在平面内",
  "lokálne maximum": "极大值",
  "lokálne minimum": "极小值",
  "max": "max",
  "medián": "中位数",
  "mimobežné": "异面",
  "možností": "种可能",
  "má sústava nekonečne veľa riešení": "方程组有无穷多个解",
  "mínus": "负",
  "môžu opakovať": "可以重复",
  "neleží v rovine": "不在平面内",
  "nepárne, medián je {@0}. hodnota": "奇数，中位数是有序数据中的第 {@0} 个值",
  "nepárnych": "奇",
  "nesečnica (žiadny spoločný bod)": "相离（没有公共点）",
  "nesmú opakovať": "不能重复",
  "obe gule sú biele": "两个都是白球",
  "objem": "体积",
  "objem hranola v $\\text{cm}^3$": "棱柱的体积（$\\text{cm}^3$）",
  "objem mení $k^3$-krát": "体积变为原来的 $k^3$ 倍",
  "objem v $\\text{cm}^3$": "体积（$\\text{cm}^3$）",
  "obsah jeho plášťa v $\\text{cm}^2$": "它的侧面积（$\\text{cm}^2$）",
  "obsah plášťa": "侧面积",
  "obsah rezu v $\\text{cm}^2$. {@0}": "截面的面积（$\\text{cm}^2$）。{@0}",
  "obľúbený šport": "最喜欢的运动",
  "opäť ľubovoľnú": "又可以填任意数字",
  "p; x₂": "p; x₂",
  "pešo": "步行",
  "plus": "正",
  "polomer rezu v cm.": "截面的半径（cm）。",
  "povrch": "表面积",
  "povrch hranola v $\\text{cm}^2$": "棱柱的表面积（$\\text{cm}^2$）",
  "povrch mení $k^2$-krát": "表面积变为原来的 $k^2$ 倍",
  "povrch v $\\text{cm}^2$": "表面积（$\\text{cm}^2$）",
  "počet": "人数",
  "počet gólov v zápase": "一场比赛的进球数",
  "počet strán knihy": "一本书的页数",
  "počet súrodencov": "兄弟姐妹的人数",
  "počet vymeškaných hodín za polrok": "半年中缺课的课时数",
  "počet áut v domácnosti": "一个家庭拥有的汽车数",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "当 $t={@0}$ 时其中有的方程不成立，点<strong>不在</strong>直线上。",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "当 $t={@0}$ 时两个方程都成立，点<strong>在</strong>直线上。",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "直线与平面平行，没有公共点",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "直线与平面相交（交于一点）",
  "priamka leží v rovine": "直线在平面内",
  "práve jeden (dvojnásobný) koreň": "恰好有一个（二重）根",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "偶数，中位数是有序数据中第 {@0} 个和第 {@1} 个值的平均数",
  "párnych": "偶",
  "roviny sú rovnobežné rôzne": "两个平面平行且不重合",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "两个平面相交（交线是一条直线）",
  "roviny sú totožné": "两个平面重合",
  "rovnobežné": "平行",
  "rozptyl": "方差",
  "sedadiel": "个座位",
  "sedadlo": "个座位",
  "sedadlá": "个座位",
  "sečnica (2 spoločné body)": "相交（2 个公共点）",
  "sečnica (dva spoločné body)": "相交（两个公共点）",
  "smerodajnú odchýlku": "标准差",
  "spotreba auta na 100 km": "汽车每 100 km 的油耗",
  "stenovú výšku $v_s$ v cm": "斜高 $v_s$（cm）",
  "strojnásobí": "变为三倍",
  "sústava nemá riešenie": "方程组无解",
  "súčet je aspoň {@0}": "和至少是 {@0}",
  "súčet je {@0}": "和是 {@0}",
  "súčin je párny": "积是偶数",
  "teplota vzduchu na poludnie": "中午的气温",
  "terč nezasiahne ani jeden z nich": "两人都没命中靶子",
  "terč zasiahne aspoň jeden z nich": "至少有一人命中靶子",
  "terč zasiahne práve jeden z nich": "恰好有一人命中靶子",
  "tretiu": "立方",
  "v rovine leží, takže v nej leží celá priamka": "在平面内，所以整条直线都在平面内",
  "v rovine neleží, preto nemajú spoločný bod": "不在平面内，所以它们没有公共点",
  "variačné rozpätie": "极差",
  "vlak": "火车",
  "vpravo": "右边",
  "výrobkov": "件产品",
  "výrobky": "件产品",
  "výška žiaka": "学生的身高",
  "vľavo": "左边",
  "vždy niektorú zo zvyšných": "每次只能填剩下的数字之一",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · 圆心的距离 d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "翻一番",
  "značka mobilného telefónu": "手机的品牌",
  "známka": "成绩",
  "znížil": "降低",
  "zvýšil": "升高",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0}点 $K$ 是棱 ${@1}$ 的中点。求点 ${@2}$ 和 $K$ 之间的距离（cm）。{@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0}函数是<strong>{@1}</strong>。",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0}法向量是 ${@1}$ 和 ${@2}$。{@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0}平面 ${@1}$ 的法向量是 $\\vec{n}={@2}$（垂直于 $\\vec{{@3}{@4}}$ 和 $\\vec{{@5}{@6}}$），直线的方向向量是 $\\vec{u}={@7}$。$\\vec{u}\\cdot\\vec{n}={@8}$。{@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0}于是 ${@1}{@2}$，$K{@3}$。$|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$。",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0}平面 ${@1}$ 的法向量是 $\\vec{n}={@2}$，方程是 ${@3}=0$。对于 ${@4}{@5}$：$d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$。",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0}直线的方向向量 $\\vec{u}=\\vec{{@1}}={@2}$，向量 $\\vec{{@3}{@4}}={@5}$。$d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$。",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0}正确的是 ${@1}$，$k\\in\\mathbb{Z}$。",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0}换元 $t={@1} x$：${@2}=0$，根为 $t_1={@3}$，$t_2={@4}$。{@5} {@6}。合计 $K=\\{{@7}\\}$。",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0}求 $P(X={@1})$。{@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0}求 $P(X\\ge 1)$。{@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0}求 $X\\le 1$ 的概率。{@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0}求数学期望 $E(X)$ 和方差 $D(X)$。按这个顺序输入，用分号隔开（写成分数或至少保留 2 位的小数）。",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0}求顶点 ${@1}$ 到直线 ${@2}$ 的距离（cm）。{@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0}求顶点 ${@1}$ 到平面 ${@2}$ 的距离（cm）。{@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0}结果精确到十分之一。",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0}这个变量是<strong>{@1}</strong>。",
  "{@0} chlapci": "{@0} 名男生",
  "{@0} dievčatá": "{@0} 名女生",
  "{@0} usporiadaného súboru. Aký je medián?": "有序数据的{@0}。中位数是多少？",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0}显示了班上一次测验的成绩：{@1}成绩的中位数是多少？",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0}显示了班上一次测验的成绩：{@1}求平均成绩。{@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}换元 $t={@1} x$，解一元二次方程，只保留区间 $\\langle -1; 1\\rangle$ 内的根。",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "先把数据按大小排列。个数为偶数时，中位数是中间两个值的平均数。",
  "Útvar ohraničený parabolou a priamkou": "由抛物线和直线围成的图形",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "把分子 ${@0}$ 分解成 ${@1}\\cdot(x+c)$。数 $c$ 是多少？",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "导数的分子 ${@0}({@1})-({@2})\\cdot {@3}$ 整理后是一个常数。是多少？",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "分子是非零常数，分母趋近于零，所以分数的绝对值无限增大。",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "分子的次数比分母低，所以分子只剩下零，极限是 $0$。",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "分子变号，分母不变：$f(-x)=-f(x)$。",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "分子和分母都除以分母的最高次幂，即 ${@0}$。所有形如 $\\frac{c}{x^k}$ 的项都趋近于零。{@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "项 $uv'$ 是 $({@0})\\cdot\\frac{1}{x}$。那么 $f'(1)$ 等于多少？",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "数 $f({@0})$ 不是常数项 $q$。代入 $y=f(x_0)+f'(x_0)(x-x_0)$，再把括号展开。",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "水平渐近线 $y=\\dots$ 中的数（$x\\to\\infty$ 时的极限）是多少？",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "竖直渐近线 $x=\\dots$ 中的数（分母的零点）是多少？",
  "čas behu na 100 m": "100 m 跑的时间",
  "čierne": "个黑球",
  "čiernych": "个黑球",
  "ľubovoľnú cifru": "任意数字",
  "ľubovoľnú cifru okrem nuly": "除零以外的任意数字",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "学生们回答了他们怎样上学：{@0}{@1}结果精确到十分之一。",
  "Žiadny z nich neleží vo vnútri intervalu.": "它们都不在区间内部。",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "一名学生在有 {@0} 道题的测验中随机猜答案；每道题有四个选项，其中恰好有一个是正确的。随机变量 $X$ 是答对的题数。",
  "žiadny reálny koreň": "没有实数根",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "“最多一次”也包括一次也没有成功的可能。要加上 $P(X=0)$。",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "“最多一次”表示成功 0 次或 1 次。把这两个概率相加。"
 }
});
