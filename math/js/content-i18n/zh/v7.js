/* 中文: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/v7/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "v7-chyby": {
   "title": "误差与计算精度",
   "summary": "绝对误差和相对误差、有效数字、机器数与机器精度、误差传播、问题的条件数以及减法中的精度损失。",
   "theory": [
    "<p>数值计算的结果几乎总是<strong>近似的</strong>。误差有几个来源：<em>模型</em>\n       （对现实的简化描述）、<em>输入数据</em>（测量）、<em>方法</em>（用有限过程代替无限过程，例如级数或极限——方法误差\n       或离散化误差）以及用有限位数字计算时的<em>舍入</em>。</p>\n       <p>若 $x$ 是精确值，$\\tilde{x}$ 是它的近似值，则<strong>绝对误差</strong>为 $\\Delta = |x-\\tilde{x}|$，<strong>相对误差</strong>为\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$（$x\\neq 0$），常用百分数表示。精确值通常是未知的，因此我们使用误差的<em>估计</em>（误差限）：\n       满足 $|x-\\tilde{x}|\\le\\varepsilon$ 的数 $\\varepsilon$，并记作 $x=\\tilde{x}\\pm\\varepsilon$。相对误差更重要，因为它与单位无关：\n       1 mm 的误差对于桥的长度微不足道，但对于钢板的厚度却非常大。</p>",
    "<p><strong>有效数字。</strong>若 $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$，则近似值 $\\tilde{x}$ 在 $10^{-k}$ 数位上的数字是<em>有效的</em>（可靠的）。\n       有效数字的个数从左起第一个非零数字数到最后一个有效数字。例如，误差不超过 $0.004$ 的 $\\tilde{x}=23.4718$ 有两位有效的小数位\n       （$0.004\\le 0.005$），因此有四位有效数字 2、3、4、7。<strong>四舍五入</strong>到 $k$ 位小数产生的误差不超过 $\\frac{1}{2}\\cdot 10^{-k}$，\n       所以正确舍入的数，其写出的所有数字都是有效数字。</p>",
    "<p><strong>机器数。</strong>计算机以浮点形式 $\\pm m\\cdot\\beta^{e}$ 存储实数，其中 $\\beta$ 是基数，尾数 $m$ 有固定的\n       $t$ 位，指数 $e$ 位于有限的范围内。IEEE 754 标准的双精度（double）使用 $\\beta=2$、$t=53$ 位尾数，指数\n       大约从 $-1022$ 到 $1023$。机器数的集合是有限的，超出范围就会发生<em>上溢</em>（数太大）或<em>下溢</em>（数太小）。</p>\n       <p><strong>机器精度（机器 epsilon）</strong> $\\varepsilon_M$ 是 1 与比它大的最近的机器数之间的距离；对 double 有 $\\varepsilon_M=2^{-52}\\approx 2.22\\cdot 10^{-16}$。\n       把实数舍入为机器数得到 $\\mathrm{fl}(x)=x(1+\\eta)$，其中 $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$（单位舍入误差）。\n       因此 double 大约有 15 到 16 位有效的十进制数字。就连 $0.1$ 在二进制中也没有有限的表示，所以例如 $0.1+0.2$ 并不精确等于 $0.3$。</p>",
    "<p><strong>误差传播。</strong>对输入误差的估计有（线性近似下）：\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       对函数 $y=f(x)$ 有 $\\Delta y\\approx|f'(x)|\\,\\Delta x$，对多元函数有 $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$。\n       因此加减时绝对误差相加，乘除时相对误差相加。</p>\n       <p><strong>条件数。</strong>若输入的微小相对变化只引起结果的微小相对变化，则称问题是<em>良态的</em>。其度量是\n       <strong>条件数</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$，满足 $\\delta y\\approx\\kappa\\,\\delta x$。例如 $f(x)=\\ln x$ 的 $\\kappa=\\frac{1}{|\\ln x|}$，\n       当 $x$ 接近 1 时这是一个很大的数：求接近 1 的数的对数是病态问题。条件数是<em>问题</em>的性质，而<em>稳定性</em>是\n       <em>算法</em>的性质——稳定的算法放大舍入误差的程度不会超过问题的条件数所对应的程度。</p>",
    "<p><strong>减法中的精度损失。</strong>两个相近的数之差是病态的：$\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$，而分母很小。\n       相同的前几位数字在相减时抵消了，剩下的数字带有误差（所谓<em>灾难性抵消</em>）。消除减法的代数变形会有所帮助：\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "用 $3.14$ 代替 $\\pi$。求这个近似值的绝对误差、相对误差和有效数字的个数。",
     "steps": [
      "$\\Delta=|\\pi-3.14|=|3.14159\\ldots-3.14|\\approx 0.00159$。",
      "$\\delta=\\frac{0.00159}{3.14159}\\approx 0.000507=0.0507\\,\\%$。",
      "由于 $0.00159\\le 0.005=\\frac{1}{2}\\cdot 10^{-2}$，两位小数是有效的。近似值 $3.14$ 有 <strong>3 位有效数字</strong>。"
     ]
    },
    {
     "task": "方程 $x^2-200x+1=0$ 的较小根是 $x=100-\\sqrt{9999}$。在 4 位有效数字的算术中，分别直接计算它以及在消除减法的变形之后计算它。",
     "steps": [
      "保留 4 位有效数字时 $\\sqrt{9999}=99.99499\\ldots\\approx 100.0$。直接计算得 $100-100.0=0$——所有数字都丢失了，相对误差为 100 %。",
      "将式子有理化：$100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$。",
      "现在 $\\frac{1}{100+100.0}=\\frac{1}{200.0}=0.005000$。精确值为 $0.0050001250\\ldots$，所以结果的 4 位数字全部有效。",
      "问题本身是良态的，糟糕的只是算法（相近数相减）。"
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "方程的数值解法",
   "summary": "根的隔离、二分法、简单迭代法、牛顿法和割线法、收敛阶以及停止准则。",
   "theory": [
    "<p>我们要求方程 $f(x)=0$ 的根 $\\xi$，而它无法用公式表示（例如 $x=\\cos x$ 或 $x^5-x-1=0$）。首先<strong>隔离</strong>根——找到一个只含一个根的区间\n       $[a, b]$。根据<strong>波尔查诺定理（零点定理）</strong>，满足 $f(a)\\,f(b)&lt;0$ 的连续函数在区间 $(a, b)$ 内至少有一个根；若此外\n       $f'$ 在 $[a, b]$ 上不变号，则根是唯一的。</p>\n       <p><strong>二分法（区间对分法）。</strong>计算中点 $c=\\frac{a+b}{2}$。若 $f(a)\\,f(c)&lt;0$，则继续考虑 $[a, c]$，否则考虑 $[c, b]$。每一步\n       都把区间对半分，$n$ 步之后区间长度为 $\\frac{b-a}{2^n}$。要使长度不超过 $\\varepsilon$，需要 $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ 步。\n       这种方法很慢，但<em>总是</em>收敛，并且只需要函数值的符号。</p>",
    "<p><strong>简单迭代法。</strong>把方程改写为 $x=g(x)$ 的形式，然后计算 $x_{k+1}=g(x_k)$。若 $g$ 把区间 $I$ 映到自身，且\n       在 $I$ 上 $|g'(x)|\\le q&lt;1$，则 $g$ 在 $I$ 中有唯一的<em>不动点</em> $\\xi$，并且对每个初值 $x_0\\in I$，序列都收敛于它（巴拿赫不动点定理）。\n       有如下估计\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       形式的选择很重要：方程 $x^2-2=0$ 可以写成 $x=\\frac{2}{x}$（迭代振荡，$|g'(\\sqrt{2})|=1$），也可以写成 $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$（收敛非常快）。</p>",
    "<p><strong>牛顿法（切线法）。</strong>在点 $x_k$ 处用切线代替函数图像，把切线与 $x$ 轴的交点作为下一个近似值：\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       对单根（$f'(\\xi)\\neq 0$）且初值足够接近根时，它<strong>二次</strong>收敛：$|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$，\n       每一步有效数字的个数大约翻一番。<em>傅里叶条件：</em>若 $f'$ 和 $f''$ 在 $[a, b]$ 上不变号，并且从满足 $f(x_0)\\,f''(x_0)&gt;0$ 的端点出发，\n       则迭代单调收敛。从不好的初值出发，方法可能跳得很远；对重根它只线性收敛。</p>",
    {
     "fig": "v7-newton",
     "caption": "对 $f(x)=x^2-2$ 的牛顿法：从点 $(x_k, f(x_k))$ 作切线，它与 $x$ 轴的交点就是 $x_{k+1}$。仅仅三步之后，$\\sqrt{2}$ 的近似值的误差就达到 $10^{-6}$ 到 $10^{-12}$ 的量级。"
    },
    "<p><strong>割线法</strong>用最后两个近似值的差商代替导数：\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       它不需要导数，收敛阶为 $\\frac{1+\\sqrt{5}}{2}\\approx 1.618$。若割线总是通过符号相反的两点（像二分法那样），\n       就得到<em>试位法（regula falsi）</em>，它总是收敛，但通常只是线性收敛。</p>\n       <p><strong>收敛阶。</strong>若 $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$，则称方法的收敛阶为 $p$；当 $p=1$（线性收敛）时必须 $C&lt;1$。二分法和简单迭代法\n       是 1 阶的，割线法是 $1.618$ 阶的，牛顿法是 2 阶的。<strong>停止准则：</strong>$|x_{k+1}-x_k|&lt;\\varepsilon$，相对形式 $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$，\n       $|f(x_k)|&lt;\\delta$，并且总要设定最大迭代次数。如果函数非常平坦，仅凭 $|f(x_k)|$ 很小并不能保证接近根。</p>"
   ],
   "examples": [
    {
     "task": "用牛顿法求 $\\sqrt{5}$，即函数 $f(x)=x^2-5$ 的根，从点 $x_0=2$ 开始，做两步。",
     "steps": [
      "$f'(x)=2x$，所以 $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$。",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2.25$。",
      "$x_2=2.25-\\frac{2.25^2-5}{4.5}=2.25-\\frac{0.0625}{4.5}\\approx 2.236111$。",
      "精确值 $\\sqrt{5}=2.236068\\ldots$：误差从 $0.014$ 降到 $0.00004$，这符合二次收敛。"
     ]
    },
    {
     "task": "用二分法在区间 $[1, 2]$ 上确定方程 $x^3-x-1=0$ 的根的位置（三步）。要使区间长度不超过 $10^{-6}$，需要多少步？",
     "steps": [
      "$f(1)=-1&lt;0$，$f(2)=5&gt;0$，根位于 $[1, 2]$ 中。",
      "$f(1.5)=0.875&gt;0$ → $[1, 1.5]$。$f(1.25)\\approx-0.297&lt;0$ → $[1.25, 1.5]$。$f(1.375)\\approx 0.225&gt;0$ → $[1.25, 1.375]$。",
      "$n$ 步之后区间长度为 $2^{-n}$。条件 $2^{-n}\\le 10^{-6}$ 给出 $n\\ge 6\\log_2 10\\approx 19.93$，即 <strong>20 步</strong>。",
      "根为 $\\xi\\approx 1.3247$；牛顿法只需 4 到 5 步就能达到同样的精度。"
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "插值与逼近",
   "summary": "拉格朗日形式和牛顿形式的插值多项式、差商、插值误差、龙格现象以及最小二乘法。",
   "theory": [
    "<p><strong>插值问题。</strong>给定互不相同的<em>节点</em> $x_0, x_1, \\dots, x_n$ 和函数值 $y_0, y_1, \\dots, y_n$（例如测量值或表中的值）。\n       我们要求次数不超过 $n$ 的多项式 $P_n$，使对所有 $i$ 都有 $P_n(x_i)=y_i$。这样的多项式存在而且<strong>唯一</strong>：这些条件构成一个\n       以范德蒙德矩阵为系数矩阵的方程组，其行列式 $\\prod_{i&lt;j}(x_j-x_i)$ 不为零。然后用这个多项式计算节点之间的值。</p>",
    "<p><strong>拉格朗日形式。</strong>对每个节点构造一个基函数多项式，它在该节点处等于 1，在其他节点处等于 0：\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       对两个节点得到<em>线性插值</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$。拉格朗日形式一目了然，但增加一个节点时必须全部重新计算。</p>",
    "<p><strong>牛顿形式与差商。</strong>差商按递推方式定义：\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       于是\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       差商在三角形表中计算，增加一个节点只需添加一项。多项式的值可以用霍纳法（秦九韶算法）高效地计算。</p>",
    "<p><strong>插值误差。</strong>若 $f$ 有连续的 $n+1$ 阶导数，则对每个 $x$，在包含 $x$ 和各节点的最小区间内存在 $\\xi$，使\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       由此得估计 $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$，其中 $M_{n+1}=\\max|f^{(n+1)}|$。步长为 $h$ 的线性插值的误差不超过 $\\frac{M_2h^2}{8}$。\n       在等距节点上提高次数不一定有帮助：对函数 $\\frac{1}{1+25x^2}$ 在 $[-1, 1]$ 上，多项式在区间两端剧烈振荡（<strong>龙格现象</strong>）。\n       解决办法是使用向两端加密的切比雪夫节点，或者使用分段多项式插值（样条）。</p>",
    "<p><strong>最小二乘法。</strong>测量数据含有误差，因此我们不希望用高次多项式穿过这些点，而是用一个简单的函数来\n       <em>逼近</em>它们。选取直线 $y=ax+b$，使偏差平方和 $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ 最小。由条件\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ 得到<strong>正规方程</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       其解为 $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$，$b=\\frac{\\sum y_i-a\\sum x_i}{n}$。这条直线经过数据的重心 $(\\bar{x}, \\bar{y})$。</p>"
   ],
   "examples": [
    {
     "task": "对点 $(0, 1)$、$(1, 3)$、$(3, 2)$，分别用拉格朗日形式和牛顿形式求插值多项式在 $x=2$ 处的值。",
     "steps": [
      "拉格朗日：$\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$，$\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$，$\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$。",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3.333$。",
      "牛顿：$f[0, 1]=\\frac{3-1}{1}=2$，$f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$，$f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$。",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$，所以 $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$——同一个多项式，不同的写法。"
     ]
    },
    {
     "task": "用最小二乘法求通过点 $(0, 1)$、$(1, 2)$、$(2, 4)$、$(3, 4)$ 的拟合直线。",
     "steps": [
      "$n=4$，$\\sum x_i=6$，$\\sum y_i=11$，$\\sum x_i^2=14$，$\\sum x_iy_i=0+2+8+12=22$。",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1.1$。",
      "$b=\\frac{11-1.1\\cdot 6}{4}=\\frac{4.4}{4}=1.1$。",
      "所求直线为 $y=1.1x+1.1$；它经过重心 $(1.5, 2.75)$。"
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "数值微分与数值积分",
   "summary": "向前差分和中心差分、步长的选择、矩形法、梯形法和辛普森法、精度阶以及误差估计。",
   "theory": [
    "<p><strong>数值微分。</strong>由泰勒展开 $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ 得到公式\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{向前差分，误差 }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{中心差分，误差 }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       向前差分（以及向后差分 $\\frac{f(x)-f(x-h)}{h}$）的<strong>精度为 1 阶</strong>，中心差分为 <strong>2 阶</strong>：步长减半时，误差分别约减小为原来的\n       二分之一和四分之一。二阶导数可用 $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$，误差为 $O(h^2)$。</p>",
    "<p><strong>步长的选择。</strong>步长不能无限地减小。分子中是两个相近值相减，所以舍入误差的量级为 $\\frac{\\varepsilon_M|f(x)|}{h}$，\n       并且随着 $h$ 减小而<em>增大</em>。向前差分的总误差 $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ 大约在 $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$ 时最小，\n       中心差分则在 $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$ 时最小。因此数值微分是病态问题，这与数值积分不同。</p>",
    "<p><strong>求积公式。</strong>把区间 $[a, b]$ 分成 $n$ 个小区间，步长 $h=\\frac{b-a}{n}$，节点为 $x_i=a+ih$，$f_i=f(x_i)$。在每个小区间上用多项式代替\n       函数，再对多项式精确积分：</p>\n       <ul><li><strong>矩形法（中点法）</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$，误差 $\\frac{(b-a)h^2}{24}f''(\\xi)$；</li>\n       <li><strong>梯形法</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$，误差 $-\\frac{(b-a)h^2}{12}f''(\\xi)$；</li>\n       <li><strong>辛普森法</strong>（$n$ 为偶数，在每两个小区间上用抛物线）$S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$，误差 $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$。</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "对 $f(x)=2+\\sin 1.5x+0.3x$ 在 $[0, 4]$ 上使用梯形法。增加小区间的个数，观察误差大致随步长的平方而减小；当 $n$ 为偶数时，还会显示辛普森法的结果。"
    },
    "<p><strong>精度阶。</strong>复化公式的误差表现为 $Ch^p$。矩形法和梯形法的 $p=2$（步长减半 → 误差减小为四分之一），\n       辛普森法的 $p=4$（减小为十六分之一），并且它对三次及以下的多项式是精确的。中点法的误差约为梯形法误差的一半且符号相反，\n       所以 $S_{2n}=\\frac{2M_n+T_n}{3}$。由步长为 $h$ 和 $\\frac{h}{2}$ 的两次计算，可以用<strong>龙格法则</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$ 估计误差，\n       而改进后的结果 $\\frac{4T_{2n}-T_n}{3}$ 恰好就是辛普森公式（理查森外推，龙贝格方法就建立在它之上）。</p>"
   ],
   "examples": [
    {
     "task": "对 $f(x)=e^x$，取步长 $h=0.1$，分别用向前差分和中心差分估计 $f'(0)$，并比较误差。",
     "steps": [
      "向前差分：$\\frac{e^{0.1}-1}{0.1}=\\frac{0.105171}{0.1}\\approx 1.051709$，误差 $\\approx 0.0517$。",
      "中心差分：$\\frac{e^{0.1}-e^{-0.1}}{0.2}\\approx\\frac{1.105171-0.904837}{0.2}\\approx 1.001668$，误差 $\\approx 0.0017$。",
      "精确值 $f'(0)=1$。误差估计 $\\frac{h}{2}f''=0.05$ 和 $\\frac{h^2}{6}f'''\\approx 0.0017$ 与结果吻合得很好。"
     ]
    },
    {
     "task": "取 $n=2$，分别用梯形法和辛普森法计算 $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0.785398$。",
     "steps": [
      "$h=0.5$，$f(0)=1$，$f(0.5)=0.8$，$f(1)=0.5$。",
      "$T_2=\\frac{0.5}{2}(1+2\\cdot 0.8+0.5)=0.25\\cdot 3.1=0.775$，误差 $\\approx 0.0104$。",
      "$S_2=\\frac{0.5}{3}(1+4\\cdot 0.8+0.5)=\\frac{0.5\\cdot 4.7}{3}\\approx 0.783333$，误差 $\\approx 0.0021$。",
      "在函数求值次数相同的情况下，辛普森法要精确得多。"
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "微分方程的数值解法",
   "summary": "柯西问题（初值问题）、欧拉法、休恩法（改进欧拉法）、四阶龙格–库塔法、局部误差与整体误差、步长的选择和稳定性。",
   "theory": [
    "<p>我们求解<strong>柯西问题（初值问题）</strong> $y'=f(x, y)$，$y(x_0)=y_0$，它通常无法用解析方法求解。选取<strong>步长</strong> $h$ 和节点 $x_k=x_0+kh$，然后依次\n       计算近似值 $y_k\\approx y(x_k)$。单步法只由数对 $(x_k, y_k)$ 计算 $y_{k+1}$。<strong>局部误差</strong>是一步的误差\n       （假设 $y_k$ 精确），<strong>整体误差</strong> $y(x_k)-y_k$ 是在节点处累积的误差。若局部误差为 $O(h^{p+1})$，则经过 $\\frac{X-x_0}{h}$ 步之后\n       整体误差为 $O(h^p)$，我们说这个方法是 $p$ <strong>阶</strong>的。</p>",
    "<p><strong>欧拉法。</strong>在小区间 $[x_k, x_{k+1}]$ 上，用方向场中斜率为 $f(x_k, y_k)$ 的切线代替解：\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       这是最简单的一阶方法：局部误差为 $\\frac{h^2}{2}y''(\\xi)$，整体误差为 $O(h)$。步长减半只能使误差减小约一半，所以在实践中\n       它更多地被用作更精确方法的出发点。</p>",
    {
     "fig": "v7-euler",
     "caption": "问题 $y'=y$，$y(0)=1$ 在 $[0, 2]$ 上，精确解为 $y=e^x$（黑色曲线）。欧拉法（蓝色）系统地偏低，休恩法（绿色）在相同步长下精确得多。增加步数，比较误差减小的速度。"
    },
    "<p><strong>休恩法（改进欧拉法）</strong>属于预估–校正型方法：先用欧拉步估计小区间末端的值，再把斜率取平均：\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       它对应于梯形法则，是 <strong>2 阶</strong>的。与之类似的是<em>修正欧拉法（中点法）</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$。</p>\n       <p><strong>四阶龙格–库塔法（RK4）</strong>在每一步计算四个斜率\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       并取它们的加权平均 $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$——与辛普森法则类似。步长减半时，误差约减小为原来的十六分之一。</p>",
    "<p><strong>步长与误差。</strong>对 $p$ 阶方法，整体误差约为 $Ch^p$。由步长为 $h$ 和 $\\frac{h}{2}$ 的两次计算，可以用<strong>龙格法则</strong>估计它：\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$。现代程序会自动调整步长（自适应步长，例如使用不同阶的龙格–库塔方法对）。\n       步长更小并不总是意味着结果更好——运算次数和舍入误差都会增加。</p>\n       <p><strong>稳定性。</strong>对测试方程 $y'=\\lambda y$（$\\lambda&lt;0$），欧拉法给出 $y_{k+1}=(1+h\\lambda)y_k$；只有当\n       $|1+h\\lambda|&lt;1$，即 $h&lt;\\frac{2}{|\\lambda|}$ 时，数值解才会衰减到零。步长更大时，数值解会振荡并增长，尽管精确解迅速衰减。因此，时间尺度相差悬殊的方程\n       （<em>刚性</em>方程）要用隐式方法求解，例如隐式欧拉法 $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$，它对每个 $h&gt;0$ 都是稳定的。</p>"
   ],
   "examples": [
    {
     "task": "取步长 $h=0.5$，分别用欧拉法和休恩法求解问题 $y'=y$，$y(0)=1$，直到 $x=1$，并与 $e\\approx 2.71828$ 比较。",
     "steps": [
      "欧拉法：$y_1=1+0.5\\cdot 1=1.5$，$y_2=1.5+0.5\\cdot 1.5=2.25$，误差 $\\approx 0.468$。",
      "休恩法第 1 步：预估值 $\\tilde{y}_1=1.5$，$y_1=1+0.25\\,(1+1.5)=1.625$。",
      "休恩法第 2 步：$\\tilde{y}_2=1.625+0.5\\cdot 1.625=2.4375$，$y_2=1.625+0.25\\,(1.625+2.4375)=2.640625$，误差 $\\approx 0.078$。",
      "在相同步长下，休恩法大约精确六倍。"
     ]
    },
    {
     "task": "对问题 $y'=x+y$，$y(0)=1$，用步长 $h=0.1$ 做一步 RK4。精确解为 $y=2e^x-x-1$。",
     "steps": [
      "$k_1=f(0, 1)=1$，$k_2=f(0.05,\\ 1+0.05\\cdot 1)=0.05+1.05=1.1$。",
      "$k_3=f(0.05,\\ 1+0.05\\cdot 1.1)=0.05+1.055=1.105$，$k_4=f(0.1,\\ 1+0.1\\cdot 1.105)=0.1+1.1105=1.2105$。",
      "$y_1=1+\\frac{0.1}{6}(1+2.2+2.21+1.2105)=1+\\frac{0.66205}{6}\\approx 1.1103417$。",
      "精确值 $y(0.1)=2e^{0.1}-1.1\\approx 1.1103418$，误差约为 $10^{-7}$。"
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "矩阵计算的算法",
   "summary": "选主元的高斯消元法、LU 分解、直接法的计算复杂度、雅可比迭代和高斯–赛德尔迭代、求主特征值的幂法。",
   "theory": [
    "<p><strong>高斯消元法</strong>分两个阶段求解系数矩阵为 $n\\times n$ 可逆矩阵的方程组 $Ax=b$。在<em>消元过程</em>中，对 $k=1, \\dots, n-1$，\n       从第 $i&gt;k$ 行减去第 $k$ 行乘以<strong>乘数</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$，使对角线下方出现零，矩阵\n       变为上三角矩阵。在<em>回代过程</em>中，自下而上逐个代入，求出 $x_n, x_{n-1}, \\dots, x_1$。</p>\n       <p>若<em>主元</em> $a_{kk}$ 为零或非常小，乘数就会非常大，舍入误差随之增大。因此要使用\n       <strong>列主元消元法（部分选主元）</strong>：在第 $k$ 步之前交换行，使 $|a_{kk}|$ 是第 $k$ 列中对角线及其下方元素中绝对值最大的。这样 $|l_{ik}|\\le 1$。</p>",
    "<p><strong>LU 分解。</strong>消元过程中的乘数构成对角线元素为 1 的下三角矩阵 $L$，最终得到的上三角矩阵是 $U$；有\n       $A=LU$（选主元时为 $PA=LU$，其中 $P$ 是置换矩阵）。然后通过两个三角方程组求解原方程组：\n       $$Ly=b\\ \\text{（前代）},\\qquad Ux=y\\ \\text{（回代）}.$$\n       当需要求解系数矩阵相同、右端不同的多个方程组时，分解是值得的。我们还能得到行列式 $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$。\n       对对称正定矩阵，还有更节省的<em>楚列斯基（Cholesky）分解</em> $A=LL^{T}$。</p>",
    "<p><strong>计算复杂度。</strong>高斯消元法的消元过程大约需要 $\\frac{2}{3}n^3$ 次算术运算，每次三角代入约需 $n^2$ 次。规模加倍时，\n       消元的时间约增加到八倍。求解方程组时不需要计算逆矩阵（约 $2n^3$ 次运算）。对带宽为 $w$ 的<em>带状</em>矩阵，\n       代价降为 $O(nw^2)$，对三对角矩阵降为 $O(n)$。对大型<em>稀疏</em>矩阵（大多数元素为零），消元会把零填充为非零元，因此适合使用迭代法。</p>",
    "<p><strong>迭代法。</strong>从第 $i$ 个方程中解出 $x_i$，并代入前一次的近似值。<strong>雅可比法</strong>只使用上一步的值，\n       <strong>高斯–赛德尔法</strong>则立即使用已经更新的分量：\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       若矩阵是<strong>严格对角占优</strong>的（对每一行 $|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$），则两种方法对任意初值都收敛；对称正定矩阵时\n       高斯–赛德尔法也收敛。一步的运算量与矩阵非零元素的个数同量级。当 $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ 或残差 $\\|b-Ax^{(k)}\\|$ 很小时停止迭代。</p>",
    "<p><strong>幂法。</strong>设矩阵 $A$ 的特征值满足 $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$（主特征值 $\\lambda_1$ 是唯一绝对值最大的特征值）。\n       反复相乘 $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ 会放大特征向量 $v_1$ 方向上的分量，所以 $x^{(k)}$ 以 $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$ 的速度趋近于 $\\pm v_1$。\n       特征值可以用<strong>瑞利商</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ 或对应分量之比 $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$ 来估计。\n       绝对值最小的特征值可以用<em>反幂法</em>求得（对 $A^{-1}$ 使用幂法，每一步用 LU 分解求解一个方程组）。网页排名算法 PageRank\n       也是基于这一原理。</p>"
   ],
   "examples": [
    {
     "task": "求矩阵 $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ 的 LU 分解，并对 $b=(4,\\ 10,\\ 24)^{T}$ 求解 $Ax=b$。",
     "steps": [
      "第 1 步：$l_{21}=\\frac{4}{2}=2$，$l_{31}=\\frac{8}{2}=4$；两行变为 $(0, 1, 1)$ 和 $(0, 3, 5)$。",
      "第 2 步：$l_{32}=\\frac{3}{1}=3$；第三行变为 $(0, 0, 2)$。因此 $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$，$U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$。",
      "$Ly=b$：$y_1=4$，$y_2=10-2\\cdot 4=2$，$y_3=24-4\\cdot 4-3\\cdot 2=2$。",
      "$Ux=y$：$x_3=\\frac{2}{2}=1$，$x_2=2-1=1$，$x_1=\\frac{4-1-1}{2}=1$。解为 $x=(1,\\ 1,\\ 1)^{T}$，此外 $\\det A=2\\cdot 1\\cdot 2=4$。"
     ]
    },
    {
     "task": "从点 $(0,\\ 0)$ 出发，分别用雅可比法和高斯–赛德尔法对方程组 $4x_1-x_2=7$，$x_1+3x_2=5$（解为 $x=(2,\\ 1)$）迭代两步。",
     "steps": [
      "迭代公式：$x_1=\\frac{7+x_2}{4}$，$x_2=\\frac{5-x_1}{3}$。矩阵是对角占优的（$4&gt;1$，$3&gt;1$），两种方法都收敛。",
      "雅可比法：$x^{(1)}=(1.75,\\ 1.6667)$，$x^{(2)}=\\left(\\frac{7+1.6667}{4},\\ \\frac{5-1.75}{3}\\right)=(2.1667,\\ 1.0833)$。",
      "高斯–赛德尔法：$x_1^{(1)}=1.75$，立即得 $x_2^{(1)}=\\frac{5-1.75}{3}=1.0833$；$x_1^{(2)}=\\frac{7+1.0833}{4}=2.0208$，$x_2^{(2)}=\\frac{5-2.0208}{3}=0.9931$。",
      "两步之后，高斯–赛德尔法的误差约为 $0.02$，雅可比法约为 $0.17$。"
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$。（精确值为 ${@5}$。）",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm²。",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$。对于幂，相对误差要乘以指数：$\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$，即约 ${@6}\\,\\%$。",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$。在 $\\pi$ 附近正弦值很小，问题是病态的。",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ 是递增的，所以 $M_2=e^{{@0}}\\approx {@1}$。",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$，所以 $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$。相近的数相减是病态的。",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$，所以 $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$。（精确值 $\\sqrt{{@5}}\\approx {@6}$。）",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$，所以 $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$。{@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$。精确值 $f'({@8})\\approx {@9}$，误差约为 ${@10}$。",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$。精确值 $f'({@8})\\approx {@9}$，误差约为 ${@10}$。",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$，$f'(x)=3x^2{@2}$。$f({@3})={@4}$，$f'({@5})={@6}$。$x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$。",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$，$f(x_1)={@1}$。$x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$。（精确值 $\\sqrt{{@6}}\\approx {@7}$。）",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$，预估值 $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$，$f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$。$y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$。",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$，$f({@2})={@3}&gt;0$。{@4}。最后得到的区间是 $[{@5};\\ {@6}]$。",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$，$f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$，$f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$。",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$，{@4}{@5}。精确值为 ${@6}$，误差约为 ${@7}$。",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$，$k_2=f({@2};\\ {@3})={@4}$，$k_3=f({@5};\\ {@6})={@7}$，$k_4=f({@8};\\ {@9})={@10}$。$y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$。",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$，$\\sum x_i={@1}$，$\\sum y_i={@2}$，$\\sum x_i^2={@3}$，$\\sum x_iy_i={@4}$。$a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}。",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$，$Ax^{(1)}=({@2};\\ {@3})^{T}$。瑞利商：$\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$。精确的主特征值是 $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$。",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$，$x_2=g(x_1)\\approx {@2}\\approx {@3}$。（用弧度计算，中间结果不取整。）",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$。$y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$。",
  "${@0}$, teda $M_2=1$.": "${@0}$，所以 $M_2=1$。",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$，绝对误差 $\\Delta\\approx {@2}$。相对误差 $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$，即约 ${@7}\\,\\%$。",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$，所以 $\\Delta=|{@2}-{@3}|\\approx {@4}$。",
  "(tu len $f_1$)": "（这里只有 $f_1$）",
  ", ale ${@0}&gt;{@1}$": "，但 ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "绝对误差是 $|x-\\tilde{x}|$。常数的值要取足够多的位数（用计算器）。",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "如果误差约为 $Ch^p$，把步长缩小为原来的 $\\frac{1}{k}$，误差就缩小为原来的 $\\frac{1}{k^p}$。梯形法和中点法 $p=2$，辛普森法 $p=4$。",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "面积的绝对误差限是多少？{@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "$x^{{@0}}$ 的相对误差是百分之几？{@1}",
  "Aká je relatívna chyba v percentách? {@0}": "相对误差是百分之几？{@0}",
  "Aký interval dostaneš po druhom kroku?": "第二步之后得到什么区间？",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "第一步之后得到什么区间？（两个端点用分号隔开）",
  "Aký je krok $h$?": "步长 $h$ 是多少？",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "乘数 $l_{21}$（从第二个方程中减去的第一个方程的倍数）是多少？",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "消元第二步中的乘数 $l_{32}$ 是多少？",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "近似值 $\\tilde{x}={@0}$ 的绝对误差至多为 ${@1}$。它有几位有效数字？",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "中心差分：$f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$。三角函数用弧度计算。",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "误差与 $h^{p}$ 成正比，所以它缩小为原来的 $\\frac{1}{k^{p}}$，而不是 $\\frac{1}{k\\cdot p}$。",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "线性插值的误差是 $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$；$f''(\\xi)$ 用区间上二阶导数绝对值的最大值代替。",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "误差不是与 $h$ 本身成正比，而是与 $h^{p}$ 成正比，其中 $p$ 是方法的精度阶。",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "误差并不与步长成比例地减小：该方法是 {@0} 阶的，所以误差与 $h^{{@1}}$ 成正比。",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "{@0}的误差与 $h^{{@1}}$ 成正比（精度阶为 {@2}）。步长为 $\\frac{h}{{@3}}$ 时，误差缩小为原来的 $\\frac{1}{{@4}^{{@5}}}=\\frac{1}{{@6}}$。",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "边长的误差不是相乘。线性估计为 $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$。",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "如果误差不超过 $\\frac{1}{2}\\cdot 10^{-j}$，则 $10^{-j}$ 位上的数字是有效的。由于 ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}，所以{@4}。加上小数点前的 {@5} {@6}，{@7}。",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "$x^2 - a$ 的导数是 $2x$，而不是 $x$。",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "向前差分：$f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$。三角函数用弧度计算。",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "把 $x_0$ 代入 $g$，再把结果代入 $g$。中间结果不取整。",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "代入 $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$；$x-c$ 的导数是 1。",
  "Dosaď do vzorca {@0} diferencie. {@1}": "代入{@0}差分公式。{@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "欧拉法一步：$y_{k+1}=y_k+h\\,f(x_k, y_k)$，其中 $x_k=kh$。做两步。",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "y' = y，y(0) = 1 的欧拉法与休恩法",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "欧拉法是 1 阶的，休恩法是 2 阶的，RK4 是 4 阶的。误差约为 $Ch^p$。",
  "Eulerovou metódou": "用欧拉法",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "在区间 $[{@1};\\ {@2}]$ 上用线性插值代替函数 $f(x)={@0}$。利用公式 $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$ 估计插值在点 $x={@3}$ 处的误差上界。{@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "在某台计算机上，用高斯消元法解 ${@0}$ 元方程组需要 ${@1}$ s。解 ${@2}$ 元方程组（满矩阵）大约需要多少秒？",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "用高斯消元法解方程组 {@0}。输入 $x_1; x_2; x_3$，用分号隔开。",
  "Gaussovou–Seidelovou": "高斯–赛德尔",
  "Heunovou metódou": "用休恩法",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "值 $x={@0}\\pm {@1}$。估计表达式 $x^{{@2}}$ 的相对误差（百分数）。{@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "找出使 $2^n$ 至少这么大的最小 $n$。",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "找出使误差不超过 $\\frac{1}{2}\\cdot 10^{-k}$ 的最小的数位 $10^{-k}$。",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "2 次插值多项式经过点 {@0}。计算它在点 $x={@1}$ 处的值。{@2}",
  "Jacobiho": "雅可比",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "计算器设置为角度制。在数值方法中三角函数用弧度计算。",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "计算器设置为角度制。对三角函数求导时用弧度计算。",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "二分法每一步只把区间缩小一半，所以需要以 2 为底的对数，而不是以 10 为底。",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "根位于长度为 ${@0}$ 的区间内。至少需要二分法的几步，才能使最后区间的长度不超过 ${@1}$？",
  "Koľko desatinných miest je platných?": "有几位有效小数？",
  "Koľko najmenej krokov bisekcie treba?": "至少需要二分法的几步？",
  "Koľko platných cifier má aproximácia celkovo?": "近似值总共有几位有效数字？",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "区间需要缩小多少倍，即 $\\frac{b-a}{\\varepsilon}$ 是多少？",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "在梯形法中，端点值 $f_0$ 和 $f_n$ 的权为 $\\frac{h}{2}$，内部值的权为 $h$。端点只计一半。",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "把步长 $h$ 缩小{@0}。{@1}的误差大约缩小为原来的几分之一（对光滑函数）？",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "只有三角回代的代价是平方增长的。消元的前向过程的复杂度是 $O(n^3)$。",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "点 ${@0}$ 处的拉格朗日基函数：{@1}。$P({@2})={@3}\\approx {@4}$。",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "函数在 0 到 4 区间上的梯形法",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "梯形法：$T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$，$h=\\frac{b-a}{n}$。",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "线性插值：$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$。",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "该方法是 {@0} 阶的，整体误差约为 $Ch^{{@1}}$。步长为 $\\frac{h}{{@2}}$ 时，误差缩小为原来的 $\\frac{1}{{@3}^{{@4}}}=\\frac{1}{{@5}}$：$\\frac{{@6}}{{@7}}={@8}$。",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "用最小二乘法过点 {@0} 拟合直线 $y=ax+b$。求{@1}。{@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "用幂法估计对称矩阵 $A={@0}$ 的主特征值。从初始向量 $x^{(0)}=(1;\\ 1)^{T}$ 出发，计算 $x^{(1)}=Ax^{(0)}$ 和瑞利商 $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$。{@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "乘数 $l_{32}$ 由第一步消元后的矩阵计算，而不是由原来的元素 $a_{32}$ 计算。",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "乘数 $l_{ik}=\\frac{a_{ik}}{a_{kk}}$（取自当前已变换的矩阵）；从第 $i$ 行减去第 $k$ 行的 $l_{ik}$ 倍。最后得到的上三角矩阵就是 $U$。",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "乘数是商 $l_{21} = \\frac{a_{21}}{a_{11}}$；元素要除以主元。",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "乘数是商 $l_{31} = \\frac{a_{31}}{a_{11}}$；元素要除以主元。",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "乘数：$l_{21}=\\frac{{@0}}{{@1}}={@2}$，$l_{31}=\\frac{{@3}}{{@4}}={@5}$；第一步之后第二行为 $(0, {@6}, {@7})$，第三行为 $(0, {@8}, {@9})$；$l_{32}={@10}$，$u_{33}={@11}$。$L={@12}$，$U={@13}${@14}。",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "先用欧拉预估 $\\tilde{y}_1=y_0+hf(x_0, y_0)$，再算 $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$。",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "先计算一阶差商 $f[x_0, x_1]$ 和 $f[x_1, x_2]$，再把它们的差除以 $x_2-x_0$。",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "牛顿法一步是 $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$；分式是减去，而不是加上。",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "牛顿法一步是 $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$。",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "牛顿法：y = x² − 2 图像的切线",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "用牛顿法求 $\\sqrt{{@0}}$，即函数 $f(x)=x^2-{@1}$ 的根。从初值 $x_0={@2}$ 出发计算 $x_1$。{@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "正规方程：$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$，$a\\sum x_i+bn=\\sum y_i$；由此得 $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$。",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "求矩阵 $A={@0}$ 的 LU 分解（不交换行，$L$ 的对角线元素为 1），并求{@1}。",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "找出仍满足 $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ 的最小数位 $10^{-k}$，并数出从第一个非零数字到这一位的数字个数。",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "矩形法（中点法）：$M_n=h\\sum f(\\text{子区间中点})$，$h=\\frac{b-a}{n}$。",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "用步长 $h={@3}$ 的{@2}差分估计函数 $f(x)={@0}$ 在点 $x={@1}$ 处的导数。{@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "成立 $\\delta(x^n)\\approx|n|\\,\\delta x$，其中 $\\delta x=\\frac{\\Delta x}{|x|}$。",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "$n$ 步之后区间的长度为 $\\frac{{@0}}{2^n}$。需要 $2^n\\ge\\frac{{@1}}{{@2}}={@3}$，即 $n\\ge\\log_2 {@4}\\approx {@5}$。最小的整数是 $n={@6}$。",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "你保留了错误的一半。根在 $f$ 在两端异号的那一半中。",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "使用 $P(x)=\\sum y_i\\ell_i(x)$，其中 $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$，或者使用带差商的牛顿形式。",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "使用 $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$，这里 $a-b=1$。",
  "Počet krokov": "步数",
  "Počet krokov n": "步数 n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "运算次数约为 $\\frac{2}{3}n^3$，时间按规模的立方增长。规模增大到 ${@0}$ 倍，所以时间增大到 ${@1}^3={@2}$ 倍：${@3}\\cdot {@4}={@5}$ s。",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "对 $f(x)=\\ln x$ 得到 $\\kappa=\\frac{1}{|\\ln x|}$。",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "对 $f(x)=\\sin x$ 有 $\\kappa=|x\\cot x|$。用弧度计算。",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "对点 {@0} 计算二阶差商 $f[x_0, x_1, x_2]$（牛顿形式中 $(x-x_0)(x-x_1)$ 的系数）。{@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "对二元函数有 $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$；对 $S=ab$，偏导数是 $b$ 和 $a$。",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "在高斯–赛德尔法中，第二个和第三个方程中已经使用了新值。",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "在雅可比法中，所有地方都代入初始值。",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "在雅可比法中，所有方程中都只代入初始向量 $x^{(0)}$ 的值，而不是刚算出的分量。",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "在中心差分中，点 $x-h$ 和 $x+h$ 之间的距离是 $2h$；函数值之差要除以 $2h$，而不是 $h$。",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "二阶差商要除以两端节点之差 $x_2 - x_0$，而不是 $x_2 - x_1$。",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "用乘数 $l_{21}={@0}$，$l_{31}={@1}$，$l_{32}={@2}$ 进行前向消元，得到上三角矩阵 $U={@3}$ 和右端项 $y=({@4})^{T}$。回代：$x_3={@5}$，$x_2={@6}$，$x_1={@7}$。",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4：$k_1=f(x_0, y_0)$，$k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$，$k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$，$k_4=f(x_0+h, y_0+hk_3)$，$y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$。",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "你用向量 $x^{(0)}$ 计算了瑞利商。题目要的是 $x^{(1)}$ 的瑞利商，所以还要计算 $Ax^{(1)}$。",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "相对误差是 $\\frac{|x-\\tilde{x}|}{|x|}$；化为百分数要乘以 100。",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "所以输入的相对误差大约放大 {@0} 倍——问题是病态的。",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "解不等式 $\\frac{b-a}{2^n}\\le\\varepsilon$，即 $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$，并向上取整。",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "{@0}以步长 $h$ 求解某个问题，在终点处的整体误差约为 ${@1}$。步长为 $\\frac{h}{{@2}}$ 时，可以预期误差是多少？{@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "方程 $x^2-{@0}=0$ 在区间 $[{@1};\\ {@2}]$ 内有一个根。做两步二分法，把最后得到的区间用两个端点表示，端点之间用分号隔开（例如 1.25; 1.5）。",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "用简单迭代法 $x_{k+1}=g(x_k)$ 解方程，其中 $g(x)={@0}$（方程 ${@1}$），初值 $x_0={@2}$。计算 $x_2$。{@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "一阶差商之差还要除以两端节点之差 $x_2 - x_0$。",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "函数值之差 $y_1 - y_0$ 要先除以步长 $x_1 - x_0 = {@0}$，然后再乘以 $(x - x_0)$。",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "用平方根之和对表达式进行有理化：$\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$。",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "辛普森法的精度阶是 4，而不是像梯形法那样是 2。",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "辛普森法：$S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$，$n$ 为偶数。",
  "Simpsonovej metódy": "辛普森法",
  "Simpsonovou metódou": "用辛普森法",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "在 RK4 中斜率 $k_2$ 和 $k_3$ 的权是两倍：$y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$。",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "斜率要取平均：乘以 $\\frac{h}{2}$，而不是 $h$。",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "第二步中斜率要在新点 $(x_1, y_1)$ 重新计算；用起点的斜率走一步长度为 $2h$ 的步是不够的。",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "你只数了有效小数位。有效数字还包括小数点前的数字。",
  "Spätným chodom urči najprv $x_3$.": "用回代先求出 $x_3$。",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "矩形的边长测量精度为 $\\pm {@0}$ cm：$a={@1}$ cm，$b={@2}$ cm。用线性近似估计面积 $S=ab$ 的绝对误差限（单位 cm²）。{@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "中点法取子区间中点处的值，而不是左端点处的值。",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "子区间中点：{@0}。$M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "用{@1}迭代法从初始向量 $x^{(0)}={@2}$ 出发解方程组 {@0}。计算第一次迭代 $x^{(1)}$，输入它的三个分量，用分号隔开，每个分量保留 4 位小数。",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "对角元素的乘积只对三角矩阵才等于行列式。要把矩阵 $U$ 的对角线元素相乘，而不是 $A$ 的。",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "这是雅可比法的一步。在高斯–赛德尔法中，要立即把新值 $x_1^{(1)}, x_2^{(1)}$ 代入后面的方程。",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "这是绝对误差。用绝对误差除以 $|x|$ 得到相对误差（化为百分数还要乘以 100）。",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "这才是 $x_1$。还要把结果再代入 $g$ 一次。",
  "Toto je až $y_1$. Urob ešte druhý krok.": "这才是 $y_1$。还要再做第二步。",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "这只是欧拉预估值 $\\tilde{y}_1$。休恩法还要用两个斜率的平均值对它进行校正。",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "这只是分子 $(x^{(1)})^{T}Ax^{(1)}$。还要除以 $(x^{(1)})^{T}x^{(1)}$。",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "这是梯形法。辛普森法使用权 $1, 4, 2, 4, \\dots, 4, 1$，并乘以 $\\frac{h}{3}$。",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "这只是用相邻两个节点做的线性插值。2 次多项式要用到全部三个点。",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "这是对区间中最差的点的估计 $\\frac{M_2h^2}{8}$。题目问的是具体的点 $x$。",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "这是平均值 $\\bar{y}$。截距是 $b = \\frac{\\sum y_i - a\\sum x_i}{n}$，所以还要减去 $a\\bar{x}$。",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "这是原来的元素 $a_{22}$。要先从第二行减去第一行的 $l_{21}$ 倍。",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "这是原来的元素 $a_{23}$。要先从第二行减去第一行的 $l_{21}$ 倍。",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "这是原来的元素 $a_{33}$。第三行在两步消元中都要变换。",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "这是相对误差（误差与值之比）。绝对误差就是差 $|x-\\tilde{x}|$ 本身。",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "这是 $x$ 本身的相对误差。对于幂，相对误差要乘以指数 ${@0}$。",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "对方程 $x^3{@0}-{@1}=0$ 从初值 $x_0={@2}$ 出发做一步牛顿法。{@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "对问题 {@1} 用步长 $h={@0}$ 做一步 4 阶龙格–库塔法。{@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "对 $f(x)=x^2-{@0}$ 用初始点 $x_0={@1}$ 和 $x_1={@2}$ 做一步割线法。{@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "求区间上的 $M_2 = \\max|f''|$。{@0}",
  "Urči $u_{22}$.": "求 $u_{22}$。",
  "Urči $u_{23}$.": "求 $u_{23}$。",
  "Urči $u_{33}$.": "求 $u_{33}$。",
  "Urči multiplikátor $l_{21}$.": "求乘数 $l_{21}$。",
  "Urči multiplikátor $l_{31}$.": "求乘数 $l_{31}$。",
  "Urči multiplikátor $l_{32}$.": "求乘数 $l_{32}$。",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "求在点 $x={@0}$（弧度）处计算 $f(x)=\\sin x$ 的条件数 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$。{@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "求在点 $x={@1}$ 处计算 $f(x)=x-{@0}$ 的条件数 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$。{@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "求在点 $x={@0}$ 处计算函数 $f(x)=\\ln x$ 的条件数 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$。{@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "每一步都计算区间中点处的值，并保留函数在两端异号的那一半。",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "公式中还要除以 2：$\\frac{M_2}{2!}$。",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "在割线公式中，修正量 $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ 要从 $x_1$ 中减去。",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "先把第一列、再把第二列中对角线以下的元素化为零，最后从最后一个方程开始求解。",
  "Vypočítaj $Ax^{(1)}$.": "计算 $Ax^{(1)}$。",
  "Vypočítaj $P_1({@0})$. {@1}": "计算 $P_1({@0})$。{@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "计算 $\\det A = u_{11}u_{22}u_{33}$。",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "{@3}取 $n={@4}$ 个子区间计算 $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$。{@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "计算 $\\ell_{@0}({@1})$。{@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "计算 $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$。{@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "用数值稳定的方法（不让相近的数相减）计算 $\\sqrt{{@0}}-\\sqrt{{@1}}$。{@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "计算 $\\sum x_i$ 和 $\\sum y_i$（用分号隔开）。",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "计算 $\\sum x_i^2$ 和 $\\sum x_iy_i$（用分号隔开）。",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "计算区间中点处的 $f$ 值，即 $f({@0})$。{@1}",
  "Vypočítaj $f'(x_0)$.": "计算 $f'(x_0)$。",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "计算 $f(x_0)$ 和 $f'(x_0)$，并代入 $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$。",
  "Vypočítaj $f(x_0)$.": "计算 $f(x_0)$。",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "计算 $f(x_0, y_0)$。{@0}",
  "Vypočítaj $f(x_1)$.": "计算 $f(x_1)$。",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "计算 $f(x_1, \\tilde{y}_1)$。{@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "计算 $f(x_1, y_1)$。{@0}",
  "Vypočítaj $f({@0})$. {@1}": "计算 $f({@0})$。{@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "计算 $f[x_0, x_1, x_2]$。{@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "计算 $f[x_0, x_1]$。{@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "计算 $f[x_1, x_2]$。{@0}",
  "Vypočítaj $k_{@0}$. {@1}": "计算 $k_{@0}$。{@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "计算 $x^{(1)} = Ax^{(0)}$（两个分量用分号隔开）。",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "计算 $x^{(1)}=Ax^{(0)}$，然后计算 $Ax^{(1)}$，以及数量积 $x^{(1)}\\cdot Ax^{(1)}$ 与 $x^{(1)}\\cdot x^{(1)}$ 之商。",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "计算 $x_1 = g(x_0)$。{@0}",
  "Vypočítaj $x_1$. {@0}": "计算 $x_1$。{@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "计算 $x_2 = g(x_1)$。{@0}",
  "Vypočítaj $x_2$. {@0}": "计算 $x_2$。{@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "计算 $x_{@0}^{(1)}$。{@1}",
  "Vypočítaj $y_1$. {@0}": "计算 $y_1$。{@0}",
  "Vypočítaj $y_2$. {@0}": "计算 $y_2$。{@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "计算 $|(x-x_0)(x-x_1)|$。{@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "计算瑞利商。{@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "计算绝对误差 $|x-\\tilde{x}|$。{@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "计算截距 $b$。{@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "计算分母 $\\sqrt{{@0}}+\\sqrt{{@1}}$。{@2}",
  "Vypočítaj odhad chyby. {@0}": "计算误差估计。{@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "计算预估值 $\\tilde{y}_1$。{@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "计算边长 $a$ 的误差的贡献，即 $b\\,\\Delta a$。{@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "计算边长 $b$ 的误差的贡献，即 $a\\,\\Delta b$。{@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "计算 $x$ 的相对误差（百分数）。{@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "计算斜率 $\\frac{y_1-y_0}{x_1-x_0}$。{@0}",
  "Vypočítaj smernicu $a$. {@0}": "计算斜率 $a$。{@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "计算各子区间中点处函数值之和。{@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "计算奇数节点处的值之和 $f_1{@0}$（权为 4）。{@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "计算内部值之和{@0}。{@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "计算积分的最终值。{@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "公式 $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ 只适用于过原点的直线（$b = 0$）。要用两个正规方程。",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "割线公式：$x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$。",
  "Výsledok zaokrúhli na {@0} {@1}.": "结果四舍五入到小数点后 {@0} 位。",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "由第 $i$ 个方程解出 $x_i$，并代入 $x^{(0)}$ 的各分量值。",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "由第 $i$ 个方程解出 $x_i$，代入已经算出的分量 $x_1, \\dots, x_{i-1}$ 和其余分量的旧值。",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "由表可知 ${@0}\\approx {@1}$，${@2}\\approx {@3}$。用线性插值估计函数 ${@4}$ 在点 $x={@5}$ 处的值。{@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "你忘了分子中的因子 $x$：$\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$，而不是 $\\left|\\frac{f'(x)}{f(x)}\\right|$。",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "你忘了分子中的因子 $x$：$\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$。",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "你忘了因子 $x$：$\\kappa = |x\\cot x|$，而不是 $|\\cot x|$。",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "输入完整的解 $x_1; x_2; x_3$。",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "你把权弄混了：在辛普森法中，奇数节点 $f_1, f_3, \\dots$ 的权为 4，偶数内部节点的权为 2。",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "你只计算了一条边的误差。在 $b\\,\\Delta a$ 上还要加上 $a\\,\\Delta b$。",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "高斯消元法的复杂度是 $O(n^3)$，更确切地说约为 $\\frac{2}{3}n^3$ 次运算。",
  "absolútny člen $b$": "截距 $b$",
  "centrálnej": "中心",
  "centrálnej diferencie": "中心差分",
  "centrálnou": "中心",
  "ciframi": "位数字",
  "cifrou": "位数字",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "行列式 $\\det A$（作为 $U$ 的对角元素之积）",
  "doprednej": "向前",
  "doprednej diferencie": "向前差分",
  "doprednou": "向前",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">欧拉 y(2) ≈ {@1}（误差 {@2}）</span> · <span class=\"c-ok\">休恩 y(2) ≈ {@3}（误差 {@4}）</span> · 精确值 e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · 精确值 I = {@2} · 误差 {@3}",
  "je platné 1 desatinné miesto": "有 1 位有效小数",
  "je to <strong>1</strong> platná cifra": "共有 <strong>1</strong> 位有效数字",
  "je to <strong>{@0}</strong> platných cifier": "共有 <strong>{@0}</strong> 位有效数字",
  "lichobežníkovej metódy": "梯形法",
  "lichobežníkovou metódou": "用梯形法",
  "metódou RK4": "用 RK4 方法",
  "na polovicu": "为原来的一半",
  "nie je platné žiadne desatinné miesto": "没有有效的小数位",
  "obdĺžnikovej (stredovej) metódy": "矩形法（中点法）",
  "obdĺžnikovou (stredovou) metódou": "用矩形法（中点法）",
  "prvok ${@0}$": "元素 ${@0}$",
  "smernicu $a$": "斜率 $a$",
  "sú platné {@0} desatinné miesta": "有 {@0} 位有效小数",
  "sú to <strong>{@0}</strong> platné cifry": "共有 <strong>{@0}</strong> 位有效数字",
  "uzly {@0}.": "节点 {@0}。",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$。误差估计：$\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$。",
  "{@0}-krát": "为原来的 1/{@0}",
  "{@0}.{@1}": "{@0}。{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}，误差 {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">误差 |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· 辛普森法：n 必须是偶数",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "用欧拉法以步长 $h={@1}$ 求解问题 {@0}。计算 $y_2\\approx y({@2})$。{@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "用休恩法（改进的欧拉法）以步长 $h={@1}$ 求解问题 {@0}。计算 $y_1\\approx y({@2})$。{@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "时间并不随未知数个数线性增长：消元大约需要 $\\frac{2}{3}n^3$ 次运算。",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "用近似值 ${@1}$ 代替数 ${@0}$。这个近似值的绝对误差是多少？{@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "用近似值 ${@1}$ 代替数 ${@0}$。相对误差是百分之几？{@2}",
  "Štart x₀": "初值 x₀"
 }
});
