/* 中文: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/v3/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "v3-pojem": {
   "title": "微分方程的概念、柯西问题、方向场",
   "summary": "方程的阶、通解与特解、初值问题、存在唯一性定理、方向场。",
   "theory": [
    "<p><strong>常微分方程（ODE）</strong>是形如 $F(x, y, y', \\dots, y^{(n)}) = 0$ 的方程，其中未知量是\n       一元函数 $y = y(x)$，方程中出现该函数的导数。方程的<strong>阶</strong>是方程中实际出现的最高阶导数的阶数：\n       $y'' + (y')^{5} = x$ 是二阶方程，幂 $(y')^{5}$ 并不改变阶。\n       如果方程关于 $y, y', \\dots, y^{(n)}$ 是线性的，即形如\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$，则称为<strong>线性</strong>方程。</p>\n       <p>区间 $I$ 上的<strong>解</strong>是这样一个函数：它在 $I$ 上有直到 $n$ 阶的导数，代入后对每个 $x\\in I$ 都满足方程。\n       $n$ 阶方程的<strong>通解</strong>是含 $n$ 个独立常数的解族 $y = \\varphi(x, C_1, \\dots, C_n)$，\n       给常数取定具体值就得到<strong>特解</strong>。如果某个解不能由通解中常数的任何取值得到，\n       就称为<strong>奇解</strong>。</p>",
    "<p>一阶方程的<strong>柯西问题（初值问题）</strong>：求方程 $y' = f(x, y)$ 满足\n       <strong>初始条件</strong> $y(x_0) = y_0$ 的解。对 $n$ 阶方程，要给定 $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$。</p>\n       <p><strong>定理（皮卡–林德勒夫）。</strong>若函数 $f$ 和 $\\frac{\\partial f}{\\partial y}$ 在点 $(x_0, y_0)$ 的某邻域内连续，则存在\n       $x_0$ 附近的一个区间，在该区间上柯西问题有<strong>唯一</strong>解。没有这些前提，唯一性可能不成立：\n       问题 $y' = 3y^{2/3}$，$y(0) = 0$ 的解既有 $y = 0$ 也有 $y = x^{3}$（这里 $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ 在 $y = 0$ 处无定义）。</p>",
    "<p><strong>方向场。</strong>方程 $y' = f(x, y)$ 在每一点 $(x, y)$ 处规定了经过该点的解的切线斜率。\n       如果在平面上各点画出斜率为 $f(x, y)$ 的短线段，就得到方向场。解的图像（<strong>积分曲线</strong>）\n       在它的每一点处都与方向场相切。所有线段斜率都等于同一个 $k$ 的曲线 $f(x, y) = k$ 称为<strong>等斜线</strong>。</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "方程 $y' = x - y$ 的方向场。虚线 $y = x$ 是斜率为 $0$ 的等斜线，绿色直线 $y = x - 1$ 是斜率为 $1$ 的等斜线，同时也是一个解。拖动初值 $y(0)$：当 $x\\to\\infty$ 时所有解都趋近于直线 $y = x - 1$。"
    }
   ],
   "examples": [
    {
     "task": "验证对任意 $C_1, C_2$，$y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ 都是方程 $y'' - y' - 2y = 0$ 的解。这个方程是几阶的？",
     "steps": [
      "方程含二阶导数而不含更高阶导数，所以是<strong>二阶</strong>方程。",
      "求导：$y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$，$y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$。",
      "代入：$(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$。",
      "等式对所有 $x$ 和所有 $C_1, C_2$ 都成立。该函数含两个独立常数，因此是<strong>通解</strong>。"
     ]
    },
    {
     "task": "证明 $y = C\\mathrm{e}^{-x} + x - 1$ 是方程 $y' = x - y$ 的通解，并求满足条件 $y(0) = 2$ 的柯西问题的解。",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$，而 $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$。两边相等。",
      "由条件：$y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$，所以 $C = 3$。",
      "<strong>特解：$y = 3\\mathrm{e}^{-x} + x - 1$。</strong>它就是图中 $y(0) = 2$ 对应的那条曲线。"
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "可分离变量的方程",
   "summary": "方程 $y' = g(x)\\,h(y)$：分离变量、常数解（平衡解）、$y' = f(ax + by + c)$ 型方程。",
   "theory": [
    "<p><strong>可分离变量</strong>的方程形如 $y' = g(x)\\,h(y)$，其中 $g$ 在区间 $I$ 上连续，\n       $h$ 在区间 $J$ 上连续。它也可以等价地写成微分形式 $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$。</p>\n       <p><strong>步骤：</strong></p>\n       <ol><li>求函数 $h$ 的零点。若 $h(c) = 0$，则常数 $y = c$ 是一个解，称为<strong>常数解</strong>（平衡解）。</li>\n       <li>当 $h(y)\\neq 0$ 时分离变量：$\\frac{dy}{h(y)} = g(x)\\,dx$。</li>\n       <li>两边积分：$\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$。得到隐式解，尽可能把它化为显式。</li>\n       <li>由初始条件确定常数 $C$，并检查解在哪个区间上存在。</li></ol>",
    "<p><strong>注意丢解。</strong>除以 $h(y)$ 时可能丢掉常数解，因此要单独写出它们\n       （有时它们包含在通解中 $C = 0$ 的情形里，例如对 $y' = ky$，$y = C\\mathrm{e}^{kx}$ 也给出 $y = 0$）。\n       即使右端很简单，非线性方程的解也不一定在整个 $\\mathbb{R}$ 上存在：问题 $y' = y^{2}$，$y(0) = 1$ 的解\n       是 $y = \\frac{1}{1 - x}$，它只在区间 $(-\\infty, 1)$ 上存在。</p>\n       <p><strong>$y' = f(ax + by + c)$ 型方程</strong>通过换元 $z = ax + by + c$ 化为可分离变量的方程 $z' = a + b\\,f(z)$。</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "方程 $y' = xy$ 的通解为 $y = C\\mathrm{e}^{x^{2}/2}$。绿色的 $x$ 轴是常数解 $y = 0$（$C = 0$），蓝色曲线是满足条件 $y(0) = 1$ 的解。正如唯一性定理所保证的，积分曲线互不相交。"
    }
   ],
   "examples": [
    {
     "task": "解柯西问题 $y' = xy^{2}$，$y(0) = 1$，并确定解存在的区间。",
     "steps": [
      "常数解是 $y = 0$，但它不满足条件 $y(0) = 1$。",
      "当 $y\\neq 0$ 时：$\\frac{dy}{y^{2}} = x\\,dx$，积分后得 $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$。",
      "由条件得 $-1 = C$，所以 $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$，$y = \\frac{2}{2 - x^{2}}$。",
      "<strong>解 $y = \\frac{2}{2 - x^{2}}$ 在区间 $(-\\sqrt{2}, \\sqrt{2})$ 上存在</strong>，该区间包含点 $x_0 = 0$；在 $\\pm\\sqrt{2}$ 处图像有竖直渐近线。"
     ]
    },
    {
     "task": "解柯西问题 $y' = \\mathrm{e}^{x - y}$，$y(0) = \\ln 2$。",
     "steps": [
      "右端是乘积：$y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$。分离变量：$\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$。",
      "积分：$\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$。由条件得 $2 = 1 + C$，所以 $C = 1$。",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>，解在整个 $\\mathbb{R}$ 上存在。"
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "齐次微分方程",
   "summary": "方程 $y' = \\varphi\\left(\\frac{y}{x}\\right)$、换元 $y = ux$ 以及可化为齐次方程的方程。",
   "theory": [
    "<p>如果对所有 $t \\gt 0$ 都有 $f(tx, ty) = t^{k}f(x, y)$，则称函数 $f(x, y)$ 是 <strong>$k$ 次齐次函数</strong>。如果 $f$ 是 $0$ 次齐次函数，\n       方程 $y' = f(x, y)$ 就称为<strong>齐次方程</strong>；此时 $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$，即方程形如\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       如果 $M$ 和 $N$ 是同次的齐次函数，则方程 $M(x, y)\\,dx + N(x, y)\\,dy = 0$ 是齐次方程\n       （例如 $\\frac{x^{2} + y^{2}}{xy}$：分子和分母都是 $2$ 次的）。</p>",
    "<p><strong>换元 $y = ux$</strong>，其中 $u = u(x)$ 是新的未知函数。于是 $y' = u + xu'$，方程化为\n       $$xu' = \\varphi(u) - u,$$\n       这是可分离变量的方程：$\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$。若 $\\varphi(u_0) = u_0$，则直线 $y = u_0x$\n       是一个解。积分后回代 $u = \\frac{y}{x}$。</p>\n       <p><strong>可化为齐次方程的方程</strong>：$y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$，其中行列式\n       $a_1b_2 - a_2b_1$ 不为零。作平移 $x = X + x_0$，$y = Y + y_0$，其中 $(x_0, y_0)$ 是直线 $a_ix + b_iy + c_i = 0$ 的交点，常数项就消失了。</p>",
    {
     "fig": "v3-homogenne",
     "caption": "对于齐次方程，方向场在每条过原点的直线 $y = ux$（虚线）上方向都相同。方程 $y' = \\frac{x + y}{x - y}$ 在极坐标下的解为 $r = C\\mathrm{e}^{\\varphi}$，即对数螺线。"
    }
   ],
   "examples": [
    {
     "task": "求方程 $y' = \\dfrac{x^{2} + y^{2}}{xy}$ 在 $x \\gt 0$ 时的通解。",
     "steps": [
      "分子和分母都是 $2$ 次齐次的。除以 $x^{2}$ 得：$y' = \\frac{1 + u^{2}}{u}$，其中 $u = \\frac{y}{x}$。",
      "代入 $y' = u + xu'$：$u + xu' = \\frac{1}{u} + u$，所以 $xu' = \\frac{1}{u}$。",
      "分离变量：$u\\,du = \\frac{dx}{x}$，积分得 $\\frac{u^{2}}{2} = \\ln x + C$。",
      "<strong>解：$y^{2} = x^{2}(2\\ln x + C_1)$</strong>，其中 $C_1 = 2C$。"
     ]
    },
    {
     "task": "解柯西问题 $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$，$y(1) = 0$。",
     "steps": [
      "换元 $y = ux$：$u + xu' = u + \\mathrm{e}^{-u}$，所以 $xu' = \\mathrm{e}^{-u}$。",
      "分离变量：$\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$，于是 $\\mathrm{e}^{u} = \\ln x + C$。",
      "由条件 $u(1) = 0$：$1 = 0 + C$，所以 $C = 1$，$u = \\ln(1 + \\ln x)$。",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong>，$x \\gt \\mathrm{e}^{-1}$。"
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "一阶线性方程与伯努利方程",
   "summary": "积分因子、常数变易法、解的结构 $y = y_h + y_p$ 以及换元 $z = y^{1-n}$。",
   "theory": [
    "<p><strong>一阶线性方程</strong>形如 $y' + p(x)\\,y = q(x)$，其中 $p, q$ 在区间 $I$ 上连续。若 $q = 0$，方程是\n       <strong>齐次</strong>的（线性方程意义下），并且可分离变量：$y_h = C\\mathrm{e}^{-P(x)}$，其中 $P$ 是 $p$ 的任一原函数。\n       非齐次方程的通解为 $y = y_h + y_p$，即齐次方程的通解与非齐次方程的一个（特）解\n       之和。柯西问题在整个 $I$ 上有唯一解。</p>",
    "<p><strong>积分因子。</strong>方程两边乘以 $\\mu(x) = \\mathrm{e}^{P(x)}$。于是左边就是乘积的导数：\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       <strong>常数变易法</strong>得到同样的结果：设解的形式为 $y = C(x)\\,\\mathrm{e}^{-P(x)}$；代入后\n       含 $C(x)$ 的项相互抵消，剩下 $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$。</p>",
    "<p><strong>伯努利方程</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$，$n\\neq 0, 1$。两边除以 $y^{n}$，并引入 $z = y^{1-n}$，\n       于是 $z' = (1-n)\\,y^{-n}y'$。得到线性方程\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       当 $n \\gt 0$ 时 $y = 0$ 也是解，它在相除时会丢失。例如逻辑斯谛方程 $y' = ry - \\frac{r}{K}y^{2}$ 就是 $n = 2$ 的伯努利方程。</p>"
   ],
   "examples": [
    {
     "task": "解柯西问题 $y' + 2y = 4x$，$y(0) = 1$。",
     "steps": [
      "$p = 2$，积分因子 $\\mu = \\mathrm{e}^{2x}$。方程化为 $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$。",
      "分部积分：$\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$，所以 $y = 2x - 1 + C\\mathrm{e}^{-2x}$。",
      "由条件：$-1 + C = 1$，$C = 2$。",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$。</strong>检验：$y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$。"
     ]
    },
    {
     "task": "求伯努利方程 $y' + \\dfrac{y}{x} = xy^{2}$ 在 $x \\gt 0$ 时的通解。",
     "steps": [
      "$n = 2$，所以 $z = y^{-1}$，$z' = -y^{-2}y'$。方程两边除以 $y^{2}$：$y^{-2}y' + \\frac{1}{x}y^{-1} = x$，即 $-z' + \\frac{z}{x} = x$。",
      "线性方程 $z' - \\frac{z}{x} = -x$ 的积分因子为 $\\mu = \\frac{1}{x}$：$\\left(\\frac{z}{x}\\right)' = -1$，于是 $z = Cx - x^{2}$。",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>，此外还有常数解 $y = 0$。"
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "全微分方程与积分因子",
   "summary": "满足 $M_y = N_x$ 的方程 $M\\,dx + N\\,dy = 0$、原函数 $F(x, y)$ 以及只依赖于一个变量的积分因子。",
   "theory": [
    "<p>如果存在函数 $F(x, y)$（原函数，势函数）使得\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       即左边是全微分 $dF$，则称方程 $M(x, y)\\,dx + N(x, y)\\,dy = 0$ 在区域 $D$ 上是<strong>全微分方程</strong>（恰当方程）。于是沿每个解都有 $dF = 0$，所以<strong>通积分</strong>为 $F(x, y) = C$：\n       积分曲线就是函数 $F$ 的等值线。</p>\n       <p><strong>判别准则。</strong>若 $M, N$ 在单连通区域上连续可微，则方程是全微分方程当且仅当\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>求 $F$。</strong>把 $M$ 对 $x$ 积分（把 $y$ 看作常数）：$F = \\int M\\,dx + \\varphi(y)$。\n       未知函数 $\\varphi$ 由条件 $\\frac{\\partial F}{\\partial y} = N$ 确定，由此得到只依赖于 $y$ 的 $\\varphi'(y)$。\n       同样也可以先把 $N$ 对 $y$ 积分。</p>\n       <p><strong>积分因子。</strong>如果方程不是全微分方程，就寻找函数 $\\mu \\neq 0$，使 $\\mu M\\,dx + \\mu N\\,dy = 0$ 成为全微分方程，\n       即 $(\\mu M)_y = (\\mu N)_x$。两种简单情形：</p>\n       <ul><li>若 $\\dfrac{M_y - N_x}{N} = \\omega(x)$ 只依赖于 $x$，则 $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$；</li>\n       <li>若 $\\dfrac{N_x - M_y}{M} = \\omega(y)$ 只依赖于 $y$，则 $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$。</li></ul>\n       <p>例如线性方程 $y' + p(x)y = q(x)$ 写成 $(p y - q)\\,dx + dy = 0$ 时，$\\omega = p(x)$，得到熟知的因子 $\\mu = \\mathrm{e}^{\\int p\\,dx}$。</p>",
    {
     "fig": "v3-exaktne",
     "caption": "方程 $(2x - y)\\,dx + (2y - x)\\,dy = 0$ 是全微分方程，$F(x, y) = x^{2} - xy + y^{2}$。积分曲线是椭圆 $F = C$；过点 $(1, 2)$ 的曲线对应 $C = 3$。"
    }
   ],
   "examples": [
    {
     "task": "解方程 $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$，并求过点 $(1, 1)$ 的积分曲线。",
     "steps": [
      "$M_y = 2x$，$N_x = 2x$，方程是全微分方程。",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$，所以 $\\varphi'(y) = 2y$，$\\varphi(y) = y^{2}$。",
      "通积分为 $x^{2}y + x^{3} + y^{2} = C$。由点 $(1, 1)$ 得 $C = 3$。",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$。</strong>"
     ]
    },
    {
     "task": "求方程 $(y + x^{2})\\,dx - x\\,dy = 0$（$x \\gt 0$）的积分因子，并解该方程。",
     "steps": [
      "$M_y = 1$，$N_x = -1$，方程不是全微分方程。$\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ 只依赖于 $x$。",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$。新方程：$\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$，其中 $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$。",
      "$F = -\\frac{y}{x} + x$（请检验 $F_x$ 和 $F_y$），通积分为 $x - \\frac{y}{x} = C$。",
      "<strong>$y = x^{2} - Cx$。</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "一阶方程的应用",
   "summary": "人口增长与放射性衰变、牛顿冷却定律、逻辑斯谛方程、RC 电路与溶液混合。",
   "theory": [
    "<p><strong>指数增长与衰减。</strong>如果某个量的变化率与它的当前值成正比，则 $y' = ky$，因此\n       $y(t) = y_0\\mathrm{e}^{kt}$。当 $k \\gt 0$ 时是增长（人口、连续复利），翻倍时间为 $\\frac{\\ln 2}{k}$。\n       当 $k \\lt 0$ 时是衰减；<strong>半衰期</strong>为 $T$ 的放射性同位素有 $k = -\\frac{\\ln 2}{T}$，因而 $m(t) = m_0\\cdot 2^{-t/T}$。</p>\n       <p><strong>牛顿冷却定律。</strong>处于恒温 $T_o$ 环境中的物体，其温度的变化率与温差成正比：\n       $T' = -k(T - T_o)$，$k \\gt 0$。解为 $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$；常数 $k$ 通常由另一次测量确定。</p>",
    {
     "fig": "v3-rast",
     "caption": "蓝色曲线是 $y' = ky$，$y(0) = 1$ 的解，绿色曲线是具有相同 $k$ 和环境容纳量 $K$（虚线）的逻辑斯谛方程的解。开始时两者几乎重合，但逻辑斯谛曲线最终稳定在 $K$ 值。"
    },
    "<p><strong>逻辑斯谛方程</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ 描述资源有限时的增长；$K$ 是环境容纳量。\n       它是可分离变量的方程（也是伯努利方程），其解为\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       常数解为 $P = 0$（不稳定）和 $P = K$（稳定）。当 $P = \\frac{K}{2}$ 时种群增长最快，这发生在时刻 $t = \\frac{\\ln A}{r}$。</p>",
    "<p><strong>RC 电路。</strong>用电压为 $U$ 的电源经电阻 $R$ 给电容器充电时，电荷满足 $Rq' + \\frac{q}{C} = U$。\n       若初始电荷为零，电容器两端的电压为 $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$，其中 $\\tau = RC$ 是<strong>时间常数</strong>\n       （经过时间 $\\tau$，电容器充电到电压 $U$ 的约 $63\\,\\%$）。</p>\n       <p><strong>溶液混合。</strong>容器中有 $V$ 升溶液，每分钟流入 $q$ 升浓度为 $c$ 的溶液，同时以相同速率\n       流出充分混合的溶液。对物质的量 $x(t)$，有“流入减流出”的平衡关系：\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "一杯温度为 $90\\,{}^\\circ\\mathrm{C}$ 的咖啡放在室温为 $20\\,{}^\\circ\\mathrm{C}$ 的房间里。$10$ 分钟后它的温度是 $60\\,{}^\\circ\\mathrm{C}$。什么时候它会冷却到 $40\\,{}^\\circ\\mathrm{C}$？",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$。由测量值 $60 = 20 + 70\\,\\mathrm{e}^{-10k}$，得 $\\mathrm{e}^{-10k} = \\frac{4}{7}$，$k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0.0560$。",
      "条件 $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ 给出 $\\mathrm{e}^{-kt} = \\frac{2}{7}$，所以 $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3.5}{\\ln 1.75}$。",
      "<strong>$t \\approx 22.4$ 分钟。</strong>"
     ]
    },
    {
     "task": "容器中有 $100$ 升水，其中溶有 $5\\,\\mathrm{kg}$ 盐。每分钟流入 $4$ 升浓度为 $0.2\\,\\mathrm{kg/l}$ 的溶液，同时以相同速率流出混合均匀的溶液。$25$ 分钟后容器中有多少盐？",
     "steps": [
      "平衡关系：$x' = 0.2\\cdot 4 - \\frac{4}{100}x = 0.8 - 0.04x$，$x(0) = 5$。",
      "这是常系数线性方程：平衡值为 $x = 20$，所以 $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0.04t} = 20 - 15\\,\\mathrm{e}^{-0.04t}$。",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14.48\\,\\mathrm{kg}$。</strong>当 $t\\to\\infty$ 时，盐量趋近于 $20\\,\\mathrm{kg}$。"
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "二阶常系数线性方程",
   "summary": "基本解组、朗斯基行列式、特征方程及其根的三种类型。",
   "theory": [
    "<p>在区间 $I$ 上系数连续的<strong>二阶线性齐次方程</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ 具有以下性质：</p>\n       <ul><li><strong>叠加原理：</strong>解的任意线性组合仍是解；所有解构成一个 $2$ 维向量空间。</li>\n       <li><strong>基本解组</strong>是一对线性无关的解 $y_1, y_2$；通解为 $y = C_1y_1 + C_2y_2$。</li>\n       <li><strong>朗斯基行列式</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$。解 $y_1, y_2$ 线性无关当且仅当\n       $W(x)\\neq 0$（只需在一点验证）。<strong>刘维尔公式</strong>成立：$W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$。</li></ul>",
    "<p><strong>常系数情形。</strong>对 $y'' + py' + qy = 0$，试取 $y = \\mathrm{e}^{\\lambda x}$。代入并除以 $\\mathrm{e}^{\\lambda x}$ 后得到\n       <strong>特征方程</strong> $\\lambda^{2} + p\\lambda + q = 0$。根据它的根：</p>\n       <table class=\"tbl\"><tr><th>根</th><th>基本解组</th><th>通解</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ 为实数</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ 为二重根</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$，$\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>对于复根，取复数解 $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$ 的实部和虚部。\n       同样的方法也适用于高阶方程：$k$ 重根 $\\lambda$ 对应函数 $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$。</p>",
    {
     "fig": "v3-rad2",
     "caption": "方程 $y'' + py' + qy = 0$ 满足初始条件 $y(0) = 1$，$y'(0) = 0$ 的解。复根时解振荡，实根时不振荡；根的实部的符号决定解是衰减还是增长。"
    }
   ],
   "examples": [
    {
     "task": "解柯西问题 $y'' - y' - 6y = 0$，$y(0) = 1$，$y'(0) = 8$。",
     "steps": [
      "特征方程 $\\lambda^{2} - \\lambda - 6 = 0$ 的根为 $\\lambda_1 = 3$，$\\lambda_2 = -2$。",
      "通解 $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$，导数 $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$。",
      "条件：$C_1 + C_2 = 1$，$3C_1 - 2C_2 = 8$，由此 $C_1 = 2$，$C_2 = -1$。",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$。</strong>"
     ]
    },
    {
     "task": "求方程 $y'' + 4y' + 13y = 0$ 的基本解组，并计算其朗斯基行列式。",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$，$D = 16 - 52 = -36$，根为 $\\lambda = -2\\pm 3\\mathrm{i}$。",
      "基本解组：$y_1 = \\mathrm{e}^{-2x}\\cos 3x$，$y_2 = \\mathrm{e}^{-2x}\\sin 3x$。",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>，与刘维尔公式 $W(x) = W(0)\\,\\mathrm{e}^{-4x}$ 一致。"
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "二阶非齐次方程",
   "summary": "解的结构 $y = y_h + y_p$、特殊右端项的待定系数法以及常数变易法。",
   "theory": [
    "<p>方程 $y'' + py' + qy = f(x)$ 的通解为 $y = y_h + y_p$，其中 $y_h = C_1y_1 + C_2y_2$ 是对应齐次方程的通解，\n       $y_p$ 是非齐次方程的任意一个（特）解。若 $f = f_1 + f_2$，可以分别求出对应 $f_1$ 和 $f_2$ 的特解\n       再相加（<strong>叠加原理</strong>）。</p>",
    "<p><strong>待定系数法</strong>（特殊右端项）。若 $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$，\n       其中 $P_m, Q_n$ 为多项式，则设特解的形式为\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       其中 $R_N, S_N$ 是系数待定的 $N$ 次多项式，$k$ 是数 $\\alpha + \\beta\\mathrm{i}$ 作为特征方程根的重数\n       （若不是根，则 $k = 0$）。系数通过代入方程并比较系数来确定。</p>\n       <table class=\"tbl\"><tr><th>右端项 $f(x)$</th><th>$y_p$ 的形式（非共振情形）</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$（若 $q\\neq 0$）</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>若 $\\alpha + \\beta\\mathrm{i}$ 是特征方程的根（<strong>共振</strong>），则把该形式乘以 $x$，二重根时乘以 $x^{2}$。</p>",
    "<p><strong>常数变易法</strong>适用于任意连续的右端项。设解的形式为 $y = C_1(x)y_1 + C_2(x)y_2$，并附加条件\n       $C_1'y_1 + C_2'y_2 = 0$。代入后得到方程组\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       其解为 $C_1' = -\\frac{y_2 f}{W}$，$C_2' = \\frac{y_1 f}{W}$，其中 $W$ 是朗斯基行列式。例如右端项为\n       $\\frac{1}{\\cos x}$、$\\tan x$、$\\ln x$ 或 $\\frac{\\mathrm{e}^{x}}{x}$ 时就需要这种方法。</p>"
   ],
   "examples": [
    {
     "task": "求方程 $y'' - 3y' + 2y = \\mathrm{e}^{x}$ 的通解。",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ 的根为 $1$ 和 $2$，所以 $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$。",
      "数 $\\alpha = 1$ 是单根（共振），所以 $y_p = Ax\\mathrm{e}^{x}$。于是 $y_p' = A(1 + x)\\mathrm{e}^{x}$，$y_p'' = A(2 + x)\\mathrm{e}^{x}$。",
      "代入：$A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$，所以 $A = -1$。",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$。</strong>"
     ]
    },
    {
     "task": "用常数变易法在区间 $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ 上解方程 $y'' + y = \\dfrac{1}{\\cos x}$。",
     "steps": [
      "$y_1 = \\cos x$，$y_2 = \\sin x$，$W = \\cos^{2} x + \\sin^{2} x = 1$。",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$，所以 $C_1 = \\ln(\\cos x) + K_1$；$C_2' = \\frac{\\cos x}{\\cos x} = 1$，所以 $C_2 = x + K_2$。",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$。</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "振动：无阻尼、有阻尼与受迫振动",
   "summary": "方程 $mx'' + cx' + kx = F(t)$，欠阻尼、临界阻尼与过阻尼，受迫振动与共振。",
   "theory": [
    "<p>质量为 $m$ 的物体挂在劲度系数为 $k$ 的弹簧上，受到与速度成正比的阻尼力（系数 $c$）和外力 $F(t)$ 的作用，其运动满足方程\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       其中 $\\omega_0 = \\sqrt{k/m}$ 是<strong>固有角频率</strong>，$\\delta = \\frac{c}{2m}$ 是<strong>阻尼系数</strong>。\n       同一个方程也描述串联 $RLC$ 电路中的电荷：$Lq'' + Rq' + \\frac{1}{C}q = U(t)$。</p>\n       <p><strong>无阻尼振动</strong>（$c = 0$，$F = 0$）：$x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$，振幅为\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$，周期为 $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$。</p>",
    "<p><strong>阻尼振动</strong>（$F = 0$）。特征方程 $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ 的根为 $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$：</p>\n       <ul><li>$\\delta \\lt \\omega_0$（<strong>欠阻尼</strong>，$c^{2} \\lt 4mk$）：$x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$，\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$；振幅按指数衰减的振动；</li>\n       <li>$\\delta = \\omega_0$（<strong>临界阻尼</strong>，$c = 2\\sqrt{mk}$）：$x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$；</li>\n       <li>$\\delta \\gt \\omega_0$（<strong>过阻尼</strong>）：两个递减指数函数之和，非周期运动。</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "当 $\\omega_0 = 2$，$x(0) = 1$，$x'(0) = 0$ 时的位移 $x(t)$。虚线 $\\pm\\mathrm{e}^{-\\delta t}$ 是阻尼振动的包络线。当 $\\delta = 2$ 时为临界阻尼。"
    },
    "<p><strong>受迫振动</strong>，$F(t) = F_0\\cos\\omega t$。无阻尼且 $\\omega\\neq\\omega_0$ 时，特解为\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$。当 $\\omega = \\omega_0$ 时发生<strong>共振</strong>：$x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$，\n       振幅无限增大。有阻尼时，自由振动逐渐消失，剩下振幅为\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}}$$\n       的稳态振动，当 $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ 时振幅最大（若 $\\omega_0^{2} \\gt 2\\delta^{2}$）。</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "当 $\\omega_0 = 2$，$F_0/m = 1$ 时的共振曲线 $A(\\omega)$。阻尼较小时，峰值尖锐且接近固有频率（虚线）。"
    }
   ],
   "examples": [
    {
     "task": "质量为 $1\\,\\mathrm{kg}$ 的物体挂在劲度系数为 $16\\,\\mathrm{N/m}$ 的弹簧上，阻尼系数为 $c = 4\\,\\mathrm{kg/s}$。开始时它偏离平衡位置 $0.1\\,\\mathrm{m}$，并由静止释放。求 $x(t)$。",
     "steps": [
      "$x'' + 4x' + 16x = 0$，所以 $\\delta = 2$，$\\omega_0 = 4$。由于 $\\delta \\lt \\omega_0$，这是欠阻尼情形。",
      "根为 $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$，$\\omega_d = 2\\sqrt{3}$，$x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$。",
      "$x(0) = C_1 = 0.1$；$x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$，所以 $C_2 = \\frac{0.1}{\\sqrt{3}}$。",
      "<strong>$x(t) = 0.1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$。</strong>"
     ]
    },
    {
     "task": "解问题 $x'' + 9x = 6\\cos 3t$，$x(0) = 0$，$x'(0) = 0$。",
     "steps": [
      "驱动频率等于固有频率（$\\omega = \\omega_0 = 3$），发生共振：$x_p = t(A\\cos 3t + B\\sin 3t)$。",
      "代入后得 $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$，所以 $A = 0$，$B = 1$，$x_p = t\\sin 3t$。",
      "通解 $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$；由条件得 $C_1 = 0$，$3C_2 = 0$。",
      "<strong>$x(t) = t\\sin 3t$</strong>，振幅随时间线性增长。"
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "线性微分方程组与相图",
   "summary": "方程组 $\\mathbf{x}' = A\\mathbf{x}$，利用特征值和特征向量求解，平衡点的分类。",
   "theory": [
    "<p>一阶常系数线性方程组形如 $\\mathbf{x}' = A\\mathbf{x}$，其中 $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$，$A$ 是\n       方阵。所有解构成一个 $n$ 维向量空间；以 $n$ 个线性无关的解为列的矩阵称为\n       <strong>基本解矩阵</strong>。每个 $n$ 阶方程都可以写成方程组（例如对 $y'' + py' + qy = 0$，令 $x_1 = y$，$x_2 = y'$），\n       反过来，$2\\times 2$ 方程组也可以用<strong>消元法</strong>化为一个二阶方程。</p>",
    "<p><strong>矩阵方法。</strong>设解为 $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$。代入得 $A\\mathbf{v} = \\lambda\\mathbf{v}$：$\\lambda$ 是\n       矩阵 $A$ 的<strong>特征值</strong>（方程 $\\det(A - \\lambda I) = 0$ 的根），$\\mathbf{v}$ 是相应的特征向量。</p>\n       <ul><li>互异实根 $\\lambda_1, \\lambda_2$：$\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$。</li>\n       <li>复根 $\\lambda = \\alpha\\pm\\beta\\mathrm{i}$，特征向量 $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$：实解是\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$ 的实部和虚部，即 $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ 和 $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$。</li>\n       <li>二重根 $\\lambda$ 只有一个特征向量 $\\mathbf{v}$：第二个解为 $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$，其中 $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$。</li></ul>",
    "<p>平面方程组的<strong>相图</strong>表示 $xy$ 平面上的轨线 $(x(t), y(t))$。点 $\\mathbf{0}$ 是平衡点（驻点），当\n       $\\det A\\neq 0$ 时它是唯一的平衡点。它的类型由特征值决定，或者说由迹 $\\mathrm{tr}\\,A$ 和行列式决定：</p>\n       <table class=\"tbl\"><tr><th>特征值</th><th>类型</th><th>稳定性</th></tr>\n       <tr><td>实数，异号（$\\det A \\lt 0$）</td><td>鞍点</td><td>不稳定</td></tr>\n       <tr><td>实数，同号</td><td>结点</td><td>$\\lambda \\lt 0$ 时稳定</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$，$\\alpha\\neq 0$</td><td>焦点（螺线）</td><td>$\\alpha \\lt 0$ 时稳定</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>中心（闭曲线）</td><td>稳定，但非渐近稳定</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "方程组 $x' = a_{11}x + a_{12}y$，$y' = a_{21}x + a_{22}y$ 的相图。橙色直线是特征向量的方向（特征值为实数时），小三角形表示随 $t$ 增大的运动方向。改变矩阵元素，逐一看遍表中的所有类型。"
    }
   ],
   "examples": [
    {
     "task": "解方程组 $x' = x + 2y$，$y' = 2x + y$，初始条件为 $x(0) = 3$，$y(0) = 1$。",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$，所以 $\\lambda_1 = 3$，$\\lambda_2 = -1$。",
      "特征向量：对 $\\lambda_1 = 3$ 为 $\\mathbf{v}_1 = (1, 1)^{T}$，对 $\\lambda_2 = -1$ 为 $\\mathbf{v}_2 = (1, -1)^{T}$。",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$。条件：$C_1 + C_2 = 3$，$C_1 - C_2 = 1$，所以 $C_1 = 2$，$C_2 = 1$。",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$，$y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$。</strong>特征值异号，平衡点是鞍点。"
     ]
    },
    {
     "task": "判断方程组 $x' = y$，$y' = -5x - 2y$ 的平衡点类型，并与二阶方程作比较。",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$，$\\mathrm{tr}\\,A = -2$，$\\det A = 5$，特征方程为 $\\lambda^{2} + 2\\lambda + 5 = 0$。",
      "特征值 $-1\\pm 2\\mathrm{i}$ 的实部为负：<strong>稳定焦点</strong>，轨线沿螺线趋近原点。",
      "该方程组就是方程 $x'' + 2x' + 5x = 0$（阻尼振动）的另一种写法；其解为 $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$。"
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "拉普拉斯变换",
   "summary": "定义、像函数表、导数的像、用部分分式求逆变换以及求解初值问题。",
   "theory": [
    "<p><strong>拉普拉斯变换</strong>把定义在 $t \\ge 0$ 上的函数 $f(t)$ 对应到一个复变量（对我们来说是实变量）$s$ 的函数：\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       如果 $f$ 分段连续并且是<strong>指数阶</strong>的，即 $|f(t)| \\le M\\mathrm{e}^{s_0t}$，则积分在 $s \\gt s_0$ 时收敛。\n       例如，当 $s \\gt a$ 时 $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$。该变换是线性的，\n       并且对连续函数是单射，因此每个像函数 $F$ 都有唯一的原函数 $f = \\mathcal{L}^{-1}\\{F\\}$。</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>这里 $u$ 是赫维赛德函数（单位阶跃函数）。卷积 $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ 的像是乘积 $F(s)G(s)$。</p>",
    "<p><strong>求解初值问题。</strong>导数的像的法则把常系数线性方程变成关于 $Y(s)$ 的代数方程，\n       初始条件也自动包含在其中。由此解出 $Y(s)$（通常是有理函数），把它分解为\n       <strong>部分分式</strong>，再查表求出 $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$。这种方法在右端项不连续或为脉冲时特别方便。</p>",
    {
     "fig": "v3-laplace",
     "caption": "求解步骤：变换、在像空间中进行代数运算、逆变换。"
    }
   ],
   "examples": [
    {
     "task": "求函数 $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$ 的拉普拉斯像。",
     "steps": [
      "利用线性和像函数表：$\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$，$\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$，$\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$。",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong>，$s \\gt 2$。"
     ]
    },
    {
     "task": "用拉普拉斯变换解问题 $y'' + 3y' + 2y = 0$，$y(0) = 1$，$y'(0) = 0$。",
     "steps": [
      "作变换：$s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$，所以 $(s^{2} + 3s + 2)Y = s + 3$。",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$（部分分式，例如用遮盖法求得）。",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$。</strong>检验：$y(0) = 1$，$y'(0) = -2 + 2 = 0$。"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$。特征方程 $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$，其中 $\\mathrm{tr}\\,A = {@2}$，$\\det A = {@3}$。根为 $\\lambda_1 = {@4}$ 和 $\\lambda_2 = {@5}$。",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ 和 ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ 和 ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$，$N_x = {@1}$，因此 $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ 只依赖于 $x$。所以 $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$，$k = {@10}$。检验：$(\\mu M)_y = {@11}$，$(\\mu N)_x = {@12}$。",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$，其中 $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$。$P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$，即约 ${@8}$ 个个体。",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$，$A = \\frac{{@2}}{{@3}}$。条件 $P = \\frac{K}{2}$ 意味着 $A\\mathrm{e}^{-{@4}t} = 1$，因此 $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ 年。",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$，由测量得 $k = {@2} \\approx {@3}$。由条件 ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ 得 $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ 分钟。",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$（二重根）",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$，$\\mathcal{L}\\{y'\\} = sY{@2}$。代入后 $({@3})Y = {@4}{@5}{@6}$，因此 ${@7}$。",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$，$\\det A = {@1}$，特征方程的判别式 $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$。{@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$，解为 $x = C_1\\cos {@1}t + C_2\\sin {@2}t$，其中 $C_1 = x(0) = {@3}$，${@4}C_2 = x'(0) = {@5}$，因此 $C_2 = {@6}$。振幅 $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$。",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$。由条件 $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ 得 $\\mathrm{e}^{-t/\\tau} = {@2}$，因此 $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$。",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$，因此 $\\varphi$ 是常数，取为零",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$，因此 $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$。由条件 $2^{-t/{@1}} = {@2}$ 取对数得 $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$。",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$，$y_p'' = 2A$。代入并比较系数：$x^{2}$ 项：${@0} = {@1}$，$A = {@2}$；$x$ 项：${@3} = {@4}$，$B = {@5}$；常数项：${@6} = {@7}$，$C = {@8}$。",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$，$y_p'' = 0$。代入：${@0}{@1} = {@2}$。比较系数：$x$ 项 ${@3} = {@4}$，因此 $A = {@5}$；常数项 ${@6} = {@7}$，因此 $B = {@8}$。",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$，因此 $K = {@1}$，$m = {@2}$。这与刘维尔公式一致：$W(x) = W(0)\\,\\mathrm{e}^{-px}$，其中 $p = {@3}$。",
  ", teda $a = {@0}$": "，因此 $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "分子中的常数项破坏了齐次性。这样的方程要先平移到两直线的交点。",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "盐的平衡量（以 kg 为单位）是多少，即使 $x' = 0$ 的量？",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "电容器上的电压是多少（伏特）？{@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "方程 $y' = {@0}$ 的方向场在点 $[{@1}; {@2}]$ 处的线素斜率是多少？",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "物体的温度将是多少？四舍五入到 0.1 度。",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "$Y(s)$ 中 $\\frac{1}{{@0}}$ 的总系数，即 $A$，是多少？",
  "Aký je súčin koreňov?": "根的乘积是多少？",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "振幅不是和 $|C_1| + |C_2|$，而是 $\\sqrt{C_1^{2} + C_2^{2}}$（同频率的余弦与正弦的合成）。",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "受迫振动的振幅与频率的关系",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "通过代换 $z = y^{k}$ 把伯努利方程 $y'{@0} = {@1}$ 化为常系数线性方程 $z' + Pz = Q$。求 $k$、$P$ 和 $Q$（分数写成 $a/b$）。",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "特征方程 ${@0}$ 的判别式 $D = {@1}$，根为 {@2}。{@3} 通解为 ${@4}$。",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "特征方程 ${@0}$ 的根为 $\\lambda_1 = {@1}$，$\\lambda_2 = {@2}$。由 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ 的第一行，对 $\\mathbf{v} = (1, m)^{T}$：${@3} - \\lambda{@4} = 0$，因此 $\\mathbf{v}_1 = {@5}$，$\\mathbf{v}_2 = {@6}$。当 $t = 0$ 时：$C_1 + C_2 = {@7}$，${@8} = {@9}$，由此 $C_1 = {@10}$，$C_2 = {@11}$。",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "特征方程 ${@0}$ 的根为 ${@1}$ 和 ${@2}$，所以 ${@3}$ 是单根（共振），$y_p$ 的形式中含因子 $x$。$y_p' = A(1{@4}){@5}$，$y_p'' = A({@6}{@7}){@8}$。代入后含 $x$ 的项相消，剩下 $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$，因此 $A = {@16}$。",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "特征方程 ${@0}$ 的根为 {@1}，因此 ${@2}$。把 $x = 0$ 代入 $y$ 和 $y'$，得到方程组 {@3}，其解为 $C_1 = {@4}$，$C_2 = {@5}$。",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "特征方程 ${@0}$ 有{@1}。右端是{@2}{@3}，因此 $\\alpha = {@4}$，它{@5}（$k = {@6}$）。所以 $y_p = {@7}$。",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "特征方程（除以 $y''$ 的系数后）为 $\\lambda^{2} + p\\lambda + q = 0$。它的根之和是多少？",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "你只除以了数 ${@0}$，但解中有 $x^{2}$，即 $x_0^{2}$。",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "$(C_1 + C_2x){@0}$ 的导数在 $x = 0$ 处的值为 ${@1}C_1 + C_2$；你忘了指数函数求导产生的那一项。",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "$C_2\\sin {@0}t$ 的导数是 ${@1}C_2\\cos {@2}t$，因此 $C_2 = \\frac{x'(0)}{\\omega_0}$，而不是 $x'(0)$。",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "$y_p$ 的导数不为零：$y_p' = {@0}A{@1}$ 和 $y_p'' = {@2}A{@3}$ 也要代入。",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "行列式为负，特征值是异号实数：鞍点。",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "把 $x = 0$ 和 $y = y_0$ 代入通解，解出 $C$。",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "代入 $y = \\mathrm{e}^{\\lambda x}$ 得 {@0}${@1}$。由韦达定理 $\\lambda_1 + \\lambda_2 = {@2}$，$\\lambda_1\\lambda_2 = {@3}$，根为 {@4}。通解为 ${@5}$。",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "代入 $x = 0$：$y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$，由此 $C = {@3}$。柯西问题的解为 $y = {@4}$。",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "代入 $x_p = A\\cos {@0}$：$x_p'' = -{@1}A\\cos {@2}$，因此 $({@3} - {@4})A = {@5}$，$A = {@6}$。{@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "代入：$C\\cdot {@0}^{2}{@1} = {@2}$，因此 ${@3}C = {@4}$，$C = {@5}$。",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "代入：${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$，因此 $\\frac{C}{{@4}} = {@5}$，$C = {@6}$。（检验：方程左边是 $(xy)'$，且 $xy = {@7} + C$。）",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "把 $P = \\frac{K}{2}$ 代入解 $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$；得到 $A\\mathrm{e}^{-rt} = 1$。",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "代入 $t = 0$，解出常数的方程组。输入 $C_1$ 和 $C_2$。",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "用 $tx$ 代替 $x$，用 $ty$ 代替 $y$。对齐次方程，右端不变。",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "把 $x = 0$ 代入 $y_1, y_2, y_1', y_2'$。",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "把 $x = 0$ 代入通解及其导数，由所得方程组求出 $C_1$。",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "把 $x = x_0$，$y = y_0$ 代入通解，解出 $C$。",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "把 $x = x_0$，$y = y_0$ 代入通解，解关于 $C$ 的一次方程。",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "把 $x_p$ 代入方程：$(\\omega_0^{2} - \\omega^{2})A = F_0$。",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "把 $y_p = Ax + B$ 代入方程，比较 $x$ 的系数和常数项。",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "把 $y_p = A{@0}$ 代入方程，求出 $A$。",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "把 $y_p$ 代入方程，比较余弦和正弦的系数；得到关于 $A$、$B$ 的二元方程组。",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "把常数 $y_p = K$ 代入方程（$y_p' = 0$），仔细解出 $K$。",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "余弦的二阶导数是负的：$x_p'' = -{@0}A\\cos {@1}$。",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "按指数规律减小的不是物体的温度本身，而是它与环境温度之差 $T - T_o$。",
  "Exponenciálny a logistický rast": "指数增长与逻辑斯谛增长",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "指数是根的实部 $\\alpha = -\\frac{p}{2}$；检查它的符号。",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "函数 $1 + y^{2}$ 没有零点，不存在常数解。分离变量：$\\frac{dy}{1 + y^{2}} = {@0}\\,dx$，因此 $\\mathrm{arctg}\\,y = {@1} + C$，$y = \\mathrm{tg}({@2} + C)$。常数在自变量里面；例如 $y = \\mathrm{tg}({@3}) + C$ 在 $C\\neq 0$ 时不满足方程。",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "函数 ${@0}$ 构成方程 ${@1} = 0$ 的基本解组。它们的朗斯基行列式形如 $W(x) = K\\mathrm{e}^{mx}$。求 $K$ 和 $m$。",
  "Fázový portrét lineárnej sústavy": "线性方程组的相图",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "三角函数对应复根（$D \\lt 0$）。这里的判别式是多少？",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "齐次方程 $y'{@0} = 0$ 给出 $y' = {@1}$；检查指数中的符号。",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "齐次方程 $y'{@0} = 0$ 的解为 $y_h = C{@1}$。特解取常数形式 $y_p = K$：${@2}K = {@3}$，因此 $K = {@4}$。通解为 ${@5}$。",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "找出导数的最高阶。括号外的指数，例如 $(y')^{3}$，不会提高阶数。",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "积分因子为 $\\mu = {@0}$：$(y{@1})' = {@2}$。积分得 $y{@3} = {@4} + B$，因此 $y = {@5} + B{@6}$（特解也可以代入 $y_p = A{@7}$ 求得：$A({@8}{@9}) = {@10}$，$A = {@11}$）。由条件 ${@12} + B = {@13}$，得 $B = {@14}$。答案：$A = {@15}$，$B = {@16}$。",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "积分因子为 ${@0}$，解的形式为 $y = {@1} + \\frac{C}{{@2}}$。由初始条件求出 $C$。",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "把 $M$ 对 $x$ 积分（不含 $\\varphi(y)$），并求 $F$ 的这一部分在点 $[{@0}; {@1}]$ 处的值。",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "把 $M$ 对 $x$ 积分，补上未知函数 $\\varphi(y)$，通过比较 $F_y$ 与 $N$ 求出它。最后代入该点。",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "积分得到 $\\mathrm{arctg}\\,y = \\dots$；要解出 $y$，需要用反正切的反函数。",
  "Integrálne krivky rovnice y' = xy": "方程 y' = xy 的积分曲线",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "在分解得到的系数上加上来自初始条件的项。",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "对每个函数求导并代入方程。解必须对所有 $x$ 满足方程。",
  "Keďže $c^{2} = 4mk$": "由于 $c^{2} = 4mk$",
  "Keďže $c^{2} \\gt 4mk$": "由于 $c^{2} \\gt 4mk$",
  "Keďže $c^{2} \\lt 4mk$": "由于 $c^{2} \\lt 4mk$",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "由于 ${@0}\\neq {@1}$，不发生共振。",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "$A$ 为正意味着振动与驱动力同相。",
  "Koeficient p": "系数 p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "$x'$ 的系数（除以质量后）是 $2\\delta$，不是 $\\delta$。先把它除以二。",
  "Koeficient q": "系数 q",
  "Koeficient rastu k": "增长率 k",
  "Koeficient útlmu δ": "阻尼系数 δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "从最高次幂开始依次计算系数：先由 $x^{2}$ 项求 $A$，再求 $B$，最后求 $C$。",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "常数 $A$ 由条件 $P(0) = \\frac{K}{1 + A} = P_0$ 得出，即 $A = \\frac{K - P_0}{P_0}$，而不是 $\\frac{K}{P_0}$。",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "解中的常数 $C$ 要除以积分因子 ${@0}$；当 $x = 2$ 时也要除。",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "衰变常数不是 $\\frac{1}{T}$，而是 $k = \\frac{\\ln 2}{T}$：经过时间 $T$，量必须恰好减少到一半。",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "常数在积分时产生，即出现在等式 $\\mathrm{arctg}\\,y = \\dots + C$ 中。由它解出 $y$ 时，$C$ 会到哪里去？",
  "Koľko gramov izotopu zostane? {@0}": "同位素还剩多少克？{@0}",
  "Koľko je $y({@0})^{2}$?": "$y({@0})^{2}$ 等于多少？",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "种群将有多少个个体？四舍五入到整数。",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "${@0}$ 分钟后容器中有多少千克盐？{@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "在 ${@0}$ {@1}内经过了多少个半衰期？{@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "哪个函数是方程 $y' = {@0}(1 + y^{2})$ 的通解？",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "哪个函数是方程 $y'{@0} = {@1}$ 的通解？",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "哪个函数是方程 ${@0} = 0$ 的通解？",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "下列哪个函数是方程 ${@0}$ 的解？",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "下列哪个方程是齐次方程，即可以写成 $y' = \\varphi\\left(\\frac{y}{x}\\right)$ 的形式？",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "问题 ${@0} = 0$，$y(0) = {@1}$，$y'(0) = {@2}$ 的解的拉普拉斯像 $Y(s)$ 是哪一个？",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "用拉普拉斯变换解问题 $y'{@0} = {@1}$，$y(0) = {@2}$。解的形式为 $y(t) = A{@3} + B{@4}$；求 $A$ 和 $B$。",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "刘维尔公式：$W(x) = W(0)\\mathrm{e}^{-px}$。",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "分母是方程的特征多项式：$s$ 的系数与方程中 $y'$ 的系数同号。",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "分解分母：${@0} = (s{@1})(s{@2})$。部分分式分解：$F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$。遮盖法：$A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$，$B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$。因此 $f(t) = {@17}{@18}$。",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "$y_p$ 形式中 $x$ 的幂次等于数 ${@0}$ 作为特征方程的根的重数。检查这个重数。",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "乘法常数出现在形如 $y' = g(x)y$ 的方程中（通过对数）。这里积分的是 $\\frac{1}{1 + y^{2}}$，因此常数是加在自变量里的。",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "先检查 $\\det A$ 的符号：它决定特征值是否异号。",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "先由测量求出 $k$，再取对数解 $T(t) = T^{*}$。",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "设 $f(t) = {@0}$，$F(s) = \\mathcal{L}\\{f\\}(s)$。计算 $F({@1})$（精确写成分数，或保留 3 位小数）。",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "一个未充电、电容为 ${@0}\\,\\mu\\mathrm{F}$ 的电容器，通过电阻为 ${@2}\\,\\mathrm{k\\Omega}$ 的电阻器由电压为 ${@1}\\,\\mathrm{V}$ 的电源充电。",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "不要把 $M$ 对 $x$ 的积分与 $N$ 对 $y$ 的积分直接相加：那样交叉项会被算两次。从 $N$ 中只取还缺少的项。",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "无阻尼振子 $x'' + {@0}x = 0$ 的初始条件为 $x(0) = {@1}$，$x'(0) = {@2}$。求振动的振幅。{@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "无阻尼振子受周期力驱动：$x'' + {@0}x = {@1}$。稳态受迫振动的形式为 $x_p = A\\cos {@2}$。求 $A$（写成分数或整数）。",
  "Nosná kapacita K": "环境容纳量 K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "容器中有 ${@0}$ 升{@1}。{@2}流入容器，充分混合的溶液以同样的速度流出。${@3}$ 分钟后容器中有多少千克盐？{@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "求微分方程 ${@0}$ 的特征方程的根。用分号隔开输入。",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "求出特征值和形如 $(1, m)^{T}$ 的特征向量，再代入 $t = 0$，解关于 $C_1$、$C_2$ 的方程组。",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "求方程组 {@0} 的系数矩阵的特征值。用分号隔开输入。",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "求函数 $F(s) = \\dfrac{{@0}}{{@1}}$ 的原函数 $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$。结果形如 $f(t) = A{@2} + B{@3}$；求 $A$ 和 $B$。",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "体积不变，容器中的浓度为 $\\frac{x}{{@0}}$。平衡关系：$x' = {@1}-\\frac{{@2}}{{@3}}x$，$x(0) = {@4}$。平衡值为 $cV = {@5}$，因此 $x(t) = {@6}$，$x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$。",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "指数函数的像是 $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$，不是 $\\frac{1}{s + a}$。",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "幂函数的像是 $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$；你忘了阶乘。",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "分离变量：$y\\,dy = {@0}\\,dx$，因此 $\\frac{y^{2}}{2} = {@1} + C$，即 $y^{2} = {@2} + 2C$。由条件 $2C = {@3}$，所以 $y^{2} = {@4} + {@5}$。由于 $y(0) \\gt 0$，取正的平方根：$y = \\sqrt{{@6} + {@7}}$，$y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$。",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "分离变量 $\\frac{dy}{y^{2}} = k\\,dx$，并记住 $\\int y^{-2}\\,dy = -\\frac{1}{y}$。",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "分离变量 $y\\,dy = kx\\,dx$ 并积分。平方根的符号由初始条件确定。",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "和的平方根不等于平方根的和：$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$。先在根号下相加。",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "盐的流出量是浓度乘以流量，即 $\\frac{x}{V}\\cdot q$。因此指数中也必须有流量 $q$。",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "代入验证：对 $y = {@0}x$ 有 $xy' = {@1}x$，但右端 ${@2}y$ 不同。",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "验证：$\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$。把 $M$ 对 $x$ 积分：$F = {@1} + \\varphi(y)$。由条件 $F_y = N$ 得 {@2}。因此 $F(x, y) = {@3}$，$C = F({@4}, {@5}) = {@6}$。",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "特解取 $A\\mathrm{e}^{cx}$ 的形式（代入方程），常数 $B$ 由初始条件确定。",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "方程 ${@0} = {@1}$ 的特解取 $y_p = Ax + B$ 的形式。求 $A$ 和 $B$。",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "方程 ${@0} = {@1}$ 的特解取 $y_p = Ax^{2} + Bx + C$ 的形式。求 $A$、$B$ 和 $C$。",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "方程 ${@0} = {@1}$ 的特解取 $y_p = A{@2} + B{@3}$ 的形式。求 $A$ 和 $B$。",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "无阻尼振动的周期为 $T = 2\\pi\\sqrt{m/k}$。",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "代入 $x_p$ 后得到 $KA\\cos {@0} = {@1}\\cos {@2}$。求 $K$。",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "代入 $y_p = Ax{@0}$ 后剩下 $A(2r + p){@1}$。计算 $2r + p$。",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "代入 $y_p = A{@0}$ 后得到 $A(c + a) = b$：求导得到 $c$，而项 ${@1}$ 加上的是 $+a$，不是 $-a$。",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "代入 $y_p = A{@0}$ 后得到 $A(c^{2} + pc + q){@1}$。计算括号的值。",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "代入 $z' = (1-n)y^{-n}y'$ 后，整个方程要乘以 $1 - n$，系数 $p$ 和 $q$ 也要乘。",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "代入后，关于 ${@0}$ 的系数的方程形如 $uA{@1} = {@2}$。求 $u$。",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "积分后得到 $-\\frac{1}{u} = \\ln x + C$。求 $C$（分数或整数）。",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "积分后得到 $\\frac{u^{2}}{2}$；解出 $u^{2}$ 时两边都要乘以二，含对数的项也要乘。",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "积分并乘以二后得到 $y^{2} = {@0} + K$。由初始条件求出常数 $K$。",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "积分后得到 $-\\frac{1}{y} = {@0} + C$。由初始条件求出 $C$（分数或整数）。",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "作代换 $y = ux$ 并积分后，解出 $u^{2}$，计算 $u({@0})^{2}$。{@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "作代换 $y = ux$ 后得到 $u = {@0} + C$。由初始条件求出 $C$。",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "变换并解出 $Y(s)$ 后，把分式 ${@0}$ 分解成部分分式。$\\frac{1}{{@1}}$ 的系数是多少？",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "除以 $x$ 后：$y' + \\frac{{@0}}{x}y = {@1}$。积分因子为 $\\mathrm{e}^{{@2}\\ln x} = {@3}$，方程化为 $({@4}y)' = {@5}$，因此 ${@6}y = {@7} + C$，$y = {@8} + \\frac{C}{{@9}}$。由条件 $1 + C = {@10}$，$C = {@11}$。于是 $y(2) = {@12}{@13}$。",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "除以 $x^{2}$ 后：$y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$。代换 $y = ux$：$u + xu' = u^{2} + u$，因此 $\\frac{du}{u^{2}} = \\frac{dx}{x}$（解 $u = 0$ 不满足条件）。积分：$-\\frac{1}{u} = \\ln x + C$，由条件 $C = {@0}$。由此 $u = \\frac{{@1}}{1{@2}}$，$y = \\frac{{@3}}{1{@4}}$，所以 $y({@5}) \\approx {@6}$。",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "除以 $xy$ 后：$y' = \\frac{y}{x} + {@0}\\frac{x}{y}$。代换 $y = ux$：$u + xu' = u + \\frac{{@1}}{u}$，因此 $u\\,du = {@2}\\frac{dx}{x}$，$\\frac{u^{2}}{2} = {@3} + C$。由条件 $u(1) = {@4}$ 得 $u^{2} = {@5} + {@6}$，由于 $y \\gt 0$，$y = x\\sqrt{{@7} + {@8}}$。于是 $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$。",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "除以 ${@0}$ 后：$x'' + {@1}x' + {@2}x = 0$。",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "百分比 ${@0}\\,\\%$ 对应的是表达式 $1 - \\mathrm{e}^{-t/\\tau}$，而不是指数函数本身。",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "恰当方程的条件是 $M_y = N_x$。有 $M_y = {@0}$，$N_x = {@1}a{@2}{@3}$。比较{@4}的系数得 ${@5}a = {@6}${@7}。于是原函数为 $F = {@8}$。",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "由刘维尔公式 $W(x) = W(0)\\mathrm{e}^{-px}$；检查指数的符号。",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "由牛顿冷却定律 $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$。由测量 $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$，因此 $k = {@5} \\approx {@6}$。$T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$。",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "由韦达定理，根之和为 $-p$。",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "由变换表和线性性质，$F(s) = {@0}$（$s \\gt {@1}$）。代入 $s = {@2}$：$F({@3}) = {@4} = {@5} \\approx {@6}$。",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "物体的运动满足方程 ${@0}x'' + {@1}x' + {@2}x = 0$（质量 ${@3}\\,\\mathrm{kg}$，阻尼 ${@4}\\,\\mathrm{kg/s}$，劲度 ${@5}\\,\\mathrm{N/m}$）。这是哪种类型的运动？",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "某放射性同位素的半衰期为 ${@0}$ {@1}。样品起初含 ${@2}\\,\\mathrm{g}$ 该同位素。${@3}$ {@4}后还剩多少克？{@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "某放射性同位素的半衰期为 ${@0}$ {@1}。经过多少{@2}，它的量会减少到原来的 ${@3}\\,\\%$？{@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "种群满足逻辑斯谛方程 $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$（$t$ 以年为单位），起初有 ${@2}$ 个个体。",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "比较 $c^{2}$ 与 $4mk$，或比较阻尼系数 $\\delta = \\frac{c}{2m}$ 与固有频率 $\\omega_0 = \\sqrt{k/m}$。",
  "Porovnaj absolútne členy a urči $B$.": "比较常数项，求出 $B$。",
  "Porovnaj absolútne členy a urči $C$.": "比较常数项，求出 $C$。",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "比较 $x$ 的系数，求出 $A$。",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "比较 $x$ 的系数，求出 $B$。",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "比较 $x^{2}$ 的系数，求出 $A$。",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "使用 $W = y_1y_2' - y_1'y_2$。指数可以用刘维尔公式 $W(x) = W(0)\\mathrm{e}^{-px}$ 验证。",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "使用 $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$，$\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$，$\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$，$\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$。",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "使用 $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ 和 $\\mathcal{L}\\{y'\\} = sY - y(0)$，解出 $Y$。",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "使用方程组 $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$ 的第一行。",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "使用公式 $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$，其中 $A = \\frac{K - P_0}{P_0}$。",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "注意 $y'(0)$ 的符号：$\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$，移到右边后是 $+y'(0)$。",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "注意符号：$\\int u^{-2}\\,du = -\\frac{1}{u}$。",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "注意符号：$\\int y^{-2}\\,dy = -\\frac{1}{y}$，不是 $\\frac{1}{y}$。",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "右端是 2 次齐次的，不是 0 次：代入 $tx$、$ty$ 后会乘上 $t^{2}$。形式 $\\varphi\\left(\\frac{y}{x}\\right)$ 要求 0 次。",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "右端只含常数（0 次多项式），这里不需要多项式 $Ax + B$。",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "对 $x_p = Bt{@0} {@1}$ 有 $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$（含 $t$ 的项相消）。比较得 ${@7}{@8}B = {@9}$，因此 $B = {@10}$。振幅 $|B|t$ 随时间线性增长。",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "对 $y = \\cos {@0}x$ 有 $y'' = -{@1}\\cos {@2}x$，因此 $y'' + {@3}y = 0$。对 $\\cos {@4}x$ 会得到 $y'' = -{@5}\\cos {@6}x$，而指数函数的二阶导数为正。",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "对 $y = \\mathrm{e}^{-{@0}x}$ 有 $y'' = {@1}\\mathrm{e}^{-{@2}x}$，因此 $y'' - {@3}y = 0$。对 $\\sin {@4}x$ 得 $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$。",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "对 $y = x^{{@0}}$ 有 $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$。对 $y = {@6}x$ 会得到 $xy' = {@7}x$，但 ${@8}y = {@9}x$。",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "对 $y' + py = qy^{n}$，$z = y^{1-n}$，且 $z' + (1-n)pz = (1-n)q$。",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "当 $y\\neq 0$ 时分离变量：$\\frac{dy}{y} = {@0}\\,dx$，因此 $\\ln|y| = {@1} + c$，$y = C\\mathrm{e}^{{@2}}$（解 $y = 0$ 包含在 $C = 0$ 中）。由条件 $C = {@3}$，所以 $y = {@4}$，$y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$。",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "对 $y_p = A\\mathrm{e}^{cx}$，代入后得到 $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$。",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "参数 $a$ 取何值时方程 $({@0})\\,dx + ({@1})\\,dy = 0$ 是恰当方程？",
  "Pre dva rôzne reálne korene": "对于两个不同的实根，",
  "Pre dvojnásobný koreň": "对于二重根，",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "对于共轭复根 $\\alpha\\pm\\beta\\mathrm{i}$，",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "对于一次多项式，需要完整的多项式 $Ax + B$，只有 $Ax$ 是不够的。",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "把方程写成 $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ 的形式，求出 $\\delta$。",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "把方程写成 $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ 的形式；则 $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$。",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "当 $x = 0$ 时 $C\\cdot\\mathrm{e}^{0} = C$，但解中还有常数项 ${@0}$，要从 $y_0$ 中减去它。",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "当 $x = 0$ 时两个指数函数都等于 1，所以 $y(0) = A + B$。要从 $y(0)$ 中减去 $A$ 的值。",
  "Pri $x = 1$ je $u(1) = y(1)$.": "当 $x = 1$ 时 $u(1) = y(1)$。",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "对 $y = \\cos \\omega x$ 有 $y'' = -\\omega^{2}y$；方程中的系数 ${@0}$ 是 $\\omega^{2}$，不是 $\\omega$。",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "对 $y = \\mathrm{e}^{rx}$ 有 $y'' = r^{2}y$；方程中的系数 ${@0}$ 是 $r^{2}$，不是 $r$。",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "在常数项中你忘了 $y_p'' = 2A$：二阶导数也贡献一个常数。",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "用乘积法则对 $x\\mathrm{e}^{rx}$ 求导时，$y_p''$ 中出现的项是 $2rA\\mathrm{e}^{rx}$，而不只是 $rA\\mathrm{e}^{rx}$。",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "对 ${@0}$ 关于 $x$ 求导得到系数 ${@1}a$；系数相等的式子还要除以 ${@2}$。",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "对乘积 ${@0}\\cdot(\\dots)$ 求导时，指数函数的导数还会产生一项 ${@1}C_1$。",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "对乘积 $t{@0} {@1}$ 求两次导数时，会出现两个相同的不含 $t$ 的项，合计为 $2\\omega_0$ 倍。",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "二重根时只有一个指数函数；第二个线性无关的解由乘以 $x$ 得到。",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "二重根时指数函数乘以 $x$，而不是 $x^{2}$（那是三重根的情形）。",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "对 ${@0}$ 积分时你忘了除以指数：$\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$。",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "复根时实指数函数不是解；使用形式 $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$。",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "对根 $\\alpha\\pm\\beta\\mathrm{i}$，指数中是实部 $\\alpha$，三角函数中是虚部 $\\beta$；你把它们弄反了。",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "比较常数项时你忘了来自导数的项 ${@0} = {@1}$。",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "把常数项移到等式另一边时你没有变号。",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "在单根 $r$ 处共振时，代入 $y_p = Ax\\mathrm{e}^{rx}$ 后得到表达式 $A(2r + p)\\,\\mathrm{e}^{rx}$。",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "解 $2^{-t/T} = p$ 时，对数要除以 $\\ln 2$（或使用以 2 为底的对数）。",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "由分式 $\\frac{C}{x_0}$ 解出 $C$ 时要乘以 $x_0$，而不是除以。",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "用遮盖法时，把 $s = a$ 代入分式的其余部分；分母中剩下的是 $a - b$，不是 $b - a$。",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "$ax^{n}$ 的原函数是 $\\frac{a}{n+1}x^{n+1}$。",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "柯西问题 $y'{@0} = {@1}$，$y(0) = {@2}$ 的解形如 $y = A{@3} + B{@4}$。求 $A$ 和 $B$。",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "把柯西问题 ${@0} = 0$，$y(0) = {@1}$，$y'(0) = {@2}$ 的解写成 ${@3}$ 的形式。求 $C_1$ 和 $C_2$。",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "解为 $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$；由第二次测量求出 $\\mathrm{e}^{-k}$。",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "解是和 $y_h + y_p$：常数特解不乘以指数函数。",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "解是 $y_h$（指数为 $y$ 的系数取相反数）与常数特解之和。",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "解形如 $\\mathrm{e}^{\\lambda x}$，其中 $\\lambda$ 是特征方程的根；检查根的符号。",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "解形如 $y = C\\mathrm{e}^{G(x)}$，其中 $G(0) = 0$。由初始条件求出 $C$。",
  "Riešenie rovnice y″ + py′ + qy = 0": "方程 y″ + py′ + qy = 0 的解",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "取对数解方程 $2^{-t/T} = p$：$t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$。",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "方程 $({@0})\\,dx + ({@1})\\,dy = 0$ 是恰当方程。把它的通积分写成 $F(x, y) = C$ 的形式，其中 $F(0, 0) = 0$。求经过点 $[{@2}; {@3}]$ 的积分曲线对应的 $C$。",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "方程 $({@0})\\,dx {@1} {@2}\\,dy = 0$（$x \\gt 0$）不是恰当方程。它有形如 $\\mu = x^{k}$ 的积分因子。求 $k$。",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "方程 $x'' + {@0}x = {@1}$ 描述共振。它的特解形如 $x_p = Bt{@2} {@3}$。求 $B$。",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "方程 $y' = f(x, y)$ 表示在点 $[x; y]$ 处切线的斜率为 $f(x, y)$。代入该点的坐标。",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "方程 $y' = {@0}$ 的分子和分母都是同次齐次函数，因此代入 $x \\to tx$，$y \\to ty$ 后 $t$ 约去，右端只依赖于 $\\frac{y}{x}$。其他方程含不同次数的项或常数项，因此代入 $tx$ 和 $ty$ 后 $t$ 约不掉。",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "方程 ${@0} = {@1}$ 有形如 $y_p = Ax{@2}$ 的特解。求 $A$。",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "方程 ${@0} = {@1}$ 有形如 $y_p = A{@2}$ 的特解。求 $A$。",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "方程 ${@0}x'' + {@1}x = 0$ 的 $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$。周期 $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$。",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "方程是齐次的：$y' = \\frac{y}{x}{@0}$。代换 $y = ux$ 得 $u + xu' = u{@1}$，因此 $u' = {@2}\\frac{{@3}}{x}$，$u = {@4} + C$。由条件 $u(1) = {@5}$ 得 $C = {@6}$，因此 $y = x({@7}{@8})$，$y({@9}) = {@10}({@11}{@12}) \\approx {@13}$。",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "方程形如 $y' = g(x)\\,y$。分离变量 $\\frac{dy}{y} = g(x)\\,dx$ 并积分；得到 $y = C\\mathrm{e}^{G(x)}$。",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "差 $M_y - N_x$ 还要除以函数 $N = {@0}$，而不只是除以变量 $x$。",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "关键是判别式 $c^{2} - 4mk$ 的符号。重新计算：比较的是阻尼的平方与 $mk$ 的四倍。",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "关键是特征方程判别式的符号，即比较 $c^{2}$ 与 $4mk$：$c^{2} = {@0}$，$4mk = {@1}$。{@2}，这是{@3}。（等价地，$\\delta = \\frac{c}{2m} = {@4}$，$\\omega_0 = \\sqrt{k/m} = {@5}$。）",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "把 $F$ 分解成部分分式 $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$，求出 $A$。",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "把分母分解为 $(s - a)(s - b)$，把 $F$ 分解成部分分式 $\\frac{A}{s-a} + \\frac{B}{s-b}$；然后 $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$。",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "衰变满足方程 $m' = -km$，因此 $m(t) = m_0\\mathrm{e}^{-kt}$，其中 $k = \\frac{\\ln 2}{T}$，即 $m(t) = m_0\\cdot 2^{-t/T}$。$m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$。",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "阶由方程中出现的最高阶导数决定，而不是由导数的幂次决定。方程中的最高阶导数是 {@0}，因此方程是<strong>{@1} 阶</strong>的。",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "用拉普拉斯变换解初值问题的示意图",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "只有行列式为负（异号实特征值）时才出现鞍点。重新计算 $\\det A$。",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "点 $[x; y]$ 处场的斜率是右端的值 $f(x, y)$：$f({@0}, {@1}) = {@2} = {@3}$。经过点 $[{@4}; {@5}]$ 的积分曲线在该点的切线斜率为 ${@6}$。",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "齐次方程 y' = (x + y)/(x − y) 的方向场",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "方程 y' = x − y 的方向场与积分曲线",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "稳定性由迹 $\\mathrm{tr}\\,A$ 的符号决定（特征值之和，即实部的两倍）。检查它。",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "常数解 $y = 0$ 不满足条件。当 $y\\neq 0$ 时：$\\frac{dy}{y^{2}} = {@0}\\,dx$，因此 $-\\frac{1}{y} = {@1} + C$。由条件 $C = {@2}$。由此 $y = \\frac{{@3}}{1{@4}}$，它在区间 $\\langle 0; {@5}\\rangle$ 上有定义（分母在那里为正）。代入得 $y({@6}) = \\frac{{@7}}{{@8}}{@9}$。",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "只有迹为零时才是中心；否则轨线会趋近该点或远离该点。",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "代换是 $z = y^{1-n}$，不是 $y^{n-1}$：指数的作用是在方程除以 $y^{n}$ 后消去它。",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "方程组 {@0} 的初始条件为 $x(0) = {@1}$，$y(0) = {@2}$。把解写成 $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$ 的形式，其中 $\\lambda_1 \\gt \\lambda_2$，特征向量的第一个分量为 $1$。求 $C_1$ 和 $C_2$。",
  "Sčítaj: $F({@0}) = ?$": "相加：$F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "质量为 ${@0}\\,\\mathrm{kg}$ 的物体在劲度为 ${@1}\\,\\mathrm{N/m}$ 的弹簧上做无阻尼振动。振动周期是多少秒？{@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "把温度为 ${@0}{@1}$ 的物体放进温度为 ${@2}{@3}$ 的房间。${@4}$ 分钟后它的温度为 ${@5}{@6}$。",
  "Tlmený harmonický oscilátor": "阻尼谐振子",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "阻尼振子满足方程 ${@0}x'' + {@1}x' + {@2}x = 0$。求它的阻尼振动的角频率 $\\omega_d$。{@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "这是指数（幂次），不是导数的阶。阶由方程中出现的最高阶导数决定。",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "这是无阻尼振子的固有频率 $\\omega_0$。阻尼会降低频率：$\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$。",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "这是电容器的放电。充电时电压从零增长到 $U$：$u_C = U(1 - \\mathrm{e}^{-t/\\tau})$。",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "对方程作变换（$\\mathcal{L}\\{y'\\} = sY - y(0)$），解出 $Y(s)$，并分解成部分分式。",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "变换得：$sY{@0}{@1} = {@2}$，因此 $Y = {@3}{@4}$。分解：${@5} = {@6}{@7}$。逆变换得 $y = ({@8}{@9}){@10}{@11}$，因此 $A = {@12}$，$B = {@13}$。",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "这里 $n = {@0}$，代换为 $z = y^{1-n}$，因此 $k = 1 - {@1} = {@2}$。方程除以 $y^{{@3}}$ 得 $y^{-n}y'{@4} = {@5}$。由于 $z' = (1-n)y^{-n}y'$，方程乘以 $1 - n = {@6}$ 后得 $z'{@7} = {@8}$。因此 $P = (1-n)p = {@9}$，$Q = (1-n)q = {@10}$。",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "形式 $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ 只属于二重根（$D = 0$）。这里的判别式是多少？",
  "Urči $A$ (zlomok alebo celé číslo).": "求 $A$（分数或整数）。",
  "Urči $A$.": "求 $A$。",
  "Urči $C = F({@0}, {@1})$.": "求 $C = F({@0}, {@1})$。",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "求解 $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$ 中的 $C_1$。",
  "Urči $C_2$ (zlomok alebo celé číslo).": "求 $C_2$（分数或整数）。",
  "Urči $C_2$.": "求 $C_2$。",
  "Urči $\\omega_0^{2}$.": "求 $\\omega_0^{2}$。",
  "Urči $\\omega_d$. {@0}": "求 $\\omega_d$。{@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "由条件 $F_y = N$ 求出满足 $\\varphi(0) = 0$ 的 $\\varphi(y)$，并计算 $\\varphi({@0})$。",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "求 $y({@0})$（符号由初始条件确定）。",
  "Urči amplitúdu kmitov. {@0}": "求振动的振幅。{@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "求代换 $z = y^{k}$ 中的指数 $k$（分数写成 $a/b$）。",
  "Urči exponent $m$.": "求指数 $m$。",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "求指数的值 $G({@0})$，其中 $G(x) = \\int_0^x g(t)\\,dt$。{@1}",
  "Urči koeficient $P$ pri $z$.": "求 $z$ 的系数 $P$。",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "求解 $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ 中的常数 $A$。",
  "Urči oba korene (oddelené bodkočiarkou).": "求出两个根（用分号隔开）。",
  "Urči pravú stranu $Q$.": "求右端 $Q$。",
  "Urči rád diferenciálnej rovnice ${@0}$.": "求微分方程 ${@0}$ 的阶。",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "判断方程组 {@0} 的平衡点 $[0; 0]$ 的类型。",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "求较大的特征值 $\\lambda_1$。",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "用待定系数法求方程 ${@0} = {@1}$ 的特解时，应取什么形式？",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "分子中各项的次数不同（$x^{2}$ 是 2 次，$y$ 是 1 次），因此代入后 $t$ 约不掉。",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "$2\\times 2$ 矩阵的特征值是方程 $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ 的根。",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "特征值是实部为 ${@0}$ 的复数：{@1}。",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "特征值是同号实数（乘积 ${@0} \\gt 0$），它们的和为 ${@1}$：{@2}。",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "特征值是纯虚数：中心。",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "$\\lambda_1$ 对应的特征向量形如 $(1, m_1)^{T}$。求 $m_1$。",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "$\\lambda_2$ 对应的特征向量形如 $(1, m_2)^{T}$。求 $m_2$。",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "函数 F(x, y) = x² − xy + y² 的等值线",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "方程除以 $x$，并使用积分因子 $\\mu = \\mathrm{e}^{\\int p\\,dx}$；当 $p = \\frac{n}{x}$ 时 $\\mu = x^{n}$。",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "方程除以 $x^{2}$，代入 $y = ux$，分离变量 $\\frac{du}{u^{2}} = \\frac{dx}{x}$。",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "方程除以 $xy$，得到 $y' = \\frac{y}{x} + k\\frac{x}{y}$。然后作代换 $y = ux$。",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "解出 $y$，计算 $y({@0})$（分数或整数）。",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "你解出的是 $\\frac{C}{{@0}}$，而不是 $C$ 本身：方程还要乘以 ${@1}$。",
  "Vypočítaj $M_y - N_x$.": "计算 $M_y - N_x$。",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "计算 $W(0)$，即 $K$ 的值。",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "计算 $\\frac{M_y - N_x}{N}$。如果得到 $\\frac{k}{x}$，积分因子就是 $\\mathrm{e}^{k\\ln x} = x^{k}$。",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "计算 $\\frac{\\partial M}{\\partial y}$ 和 $\\frac{\\partial N}{\\partial x}$，并比较同次幂的系数。",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "计算 $\\mathrm{e}^{-{@0}k}$。四舍五入到小数点后 4 位。",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "计算 $\\tau = RC$（千欧乘以微法得到毫秒），代入 $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$。",
  "Vypočítaj $u({@0})$. {@1}": "计算 $u({@0})$。{@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "计算 $y(2)$（分数或小数）。",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "计算 $y({@0}) = C\\mathrm{e}^{G({@1})}$。{@2}",
  "Vypočítaj $y({@0})$. {@1}": "计算 $y({@0})$。{@1}",
  "Vypočítaj determinant $\\det A$.": "计算行列式 $\\det A$。",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "计算指数项 ${@0}$ 在 $s = {@1}$ 处的像（分数）。",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "计算三角函数项在 $s = {@0}$ 处的像（分数）。",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "计算项 ${@0}$ 在 $s = {@1}$ 处的像（分数）。",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "计算振动周期（秒）。{@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "计算方程组系数矩阵的迹 $\\mathrm{tr}\\,A$。",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "计算迹、行列式和判别式 $(\\mathrm{tr}\\,A)^{2} - 4\\det A$，并使用理论部分的表格。",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "计算固有角频率 $\\omega_0$（单位 $\\mathrm{s^{-1}}$）。四舍五入到小数点后 3 位。",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "计算时间常数 $\\tau = RC$（毫秒）。",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "你算的是 $u = \\frac{y}{x}$，不是 $y$。别忘了回代 $y = ux$。",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "你算的是 $u = \\frac{y}{x}$ 的值，不是 $y$。别忘了回代 $y = ux$。",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "你算的是辅助函数 $u = \\frac{y}{x}$ 的值，不是 $y$。别忘了回代 $y = ux$。",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "解关于 $t$ 的方程 $1 - \\mathrm{e}^{-t/\\tau} = p$：$t = -\\tau\\ln(1 - p)$。",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "解 $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$，输入特征值（用分号隔开）。",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "解柯西问题 $x^{2}y' = y^{2} + xy$，$y(1) = {@0}$（$x \\gt 0$），并计算 $y({@1})$。{@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "解柯西问题 $xy'{@0} = {@1}$，$y(1) = {@2}$（$x \\gt 0$），并计算 $y(2)$。输入精确结果（分数或小数）。",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "解柯西问题 $xyy' = y^{2}{@0}$，$y(1) = {@1}$（$x \\gt 0$），并计算 $y({@2})$。{@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "解柯西问题 $y' = {@0}$，$y(0) = {@1}$，并计算 $y({@2})$。结果写成分数或整数。",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "解柯西问题 $y' = {@0}$，$y(0) = {@1}$，并计算 $y({@2})$。{@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "解柯西问题 $yy' = {@0}$，$y(0) = {@1}$，并计算 $y({@2})$。",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "解柯西问题 ${@0}$，$y(1) = {@1}$（$x \\gt 0$），并计算 $y({@2})$。{@3}",
  "Vyrieš sústavu a urči $A$.": "解方程组，求出 $A$。",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "利用 $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$，解出 $y$。",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "表达式 $\\frac{M_y - N_x}{N}$ 形如 $\\frac{k}{x}$。求 $k$。",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "表达式 $\\sqrt{m/k}$ 等于 $\\frac{1}{\\omega_0}$；周期还要再乘以 $2\\pi$。",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "方程 $xy' + y ={@0}$ 在不含零的区间上的通解为 $y = {@1} + \\frac{C}{x}$。求满足初始条件 $y({@2}) = {@3}$ 的 $C$。",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "方程 $xy' = 2y{@0}$ 的通解为 $y = Cx^{2}{@1}$。求满足初始条件 $y({@2}) = {@3}$ 的 $C$。结果写成整数或分数。",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "方程 $y' = {@0}{@1}$ 的通解为 $y = C{@2}{@3}$。求常数 $C$，使解满足初始条件 $y(0) = {@4}$。",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "朗斯基行列式为 $W = y_1y_2' - y_1'y_2$；项的顺序决定 $K$ 的符号。",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "朗斯基行列式是两个都含因子 $\\mathrm{e}^{\\alpha x}$ 的函数之积，因此指数中是 $2\\alpha$。",
  "Y(s) vyjadrené": "Y(s) 已解出",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "由测量求出 $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$ 中的常数 $k$。四舍五入到小数点后 4 位。",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "每经过一个半衰期，量减少到一半：$m(t) = m_0\\cdot 2^{-t/T}$。",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "电压经过多少毫秒达到所需的值？{@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "温度经过多少分钟降到所需的值？四舍五入到 0.1 分钟。",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "种群经过多少年达到环境容纳量的一半？{@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "你忘了二阶导数：$y_p'' = -{@0}y_p$，所以余弦方程中 $A$ 的系数是 $q - {@1}$。",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "你忘了函数 $\\varphi(y)$：把 $M$ 对 $x$ 积分后，还要由条件 $F_y = N$ 确定它。",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "你忘了通解中的常数项 ${@0}$；先把它移到另一边。",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "你忘了常数 $C$：由初始条件 $y(0)$ 得到 $C$，指数函数要乘以它。",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "你忘了盐的流入量 $cq$：没有它，容器中的盐只会减少。解趋于平衡值 $cV$。",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "你忘了初始条件：$\\mathcal{L}\\{y'\\} = sY - y(0)$，所以 $Y(s)$ 中还有项 $\\frac{y(0)}{s - a}$。",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "遮住因子 $s{@0}$，代入 $s = {@1}$。",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "你把质量和劲度弄反了：$\\omega_0 = \\sqrt{k/m}$，周期是 $\\frac{2\\pi}{\\omega_0}$，不是 $2\\pi\\omega_0$。",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "你把像弄反了：$\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$，$\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$。",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "你把坐标弄反了：在点 $[x; y]$ 中第一个坐标是 $x$，第二个是 $y$。把它们代入 $f(x, y)$ 的正确位置。",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "把 $y''$ 换成 $\\lambda^{2}$，$y'$ 换成 $\\lambda$，$y$ 换成 $1$，解二次方程。",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "把解写成 $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$，由条件求出常数，振幅为 $\\sqrt{C_1^{2} + C_2^{2}}$。",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "把方程写成 $y' = \\frac{y}{x} + a$ 的形式，代入 $y = ux$，$y' = u + xu'$ 并积分。",
  "Začiatočná hodnota y(0)": "初始值 y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "对 $x_p$ 求两次导数（$t$ 与三角函数之积）并代入。当 $\\omega = \\omega_0$ 时只剩下不含 $t$ 的项。",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "对通解求导，把 $x = 0$ 代入 $y$ 和 $y'$，解二元一次方程组。",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "确定右端指数中的数 $\\alpha$ 是特征方程的几重根，就把基本形式乘以 $x$ 几次。",
  "Zo začiatočnej podmienky urči $B$.": "由初始条件求出 $B$。",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "列出平衡关系 $x' = (\\text{流入量}) - (\\text{流出量}) = cq - \\frac{q}{V}x$，解这个线性方程。",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "写出特征方程，根据判别式确定根的类型，使用相应的解的形式。",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "$A$ 为负意味着振动与驱动力反相（驱动频率高于固有频率）。",
  "absolútnom člene": "常数项",
  "algebra": "代数",
  "algebraická rovnica": "代数方程",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "二阶",
  "dvojnásobný koreň ${@0}$": "二重根 ${@0}$",
  "je dvojnásobným koreňom": "是特征方程的二重根",
  "je jednoduchým koreňom": "是特征方程的单根",
  "k = 0: veličina sa nemení": "k = 0：量不变",
  "konštanta": "常数",
  "korene ${@0}$ a ${@1}$": "根 ${@0}$ 和 ${@1}$",
  "kritické tlmenie": "临界阻尼",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "临界阻尼：最快地回到平衡位置而不振动",
  "krát ${@0}$": "乘以 ${@0}$",
  "litre": "升",
  "litrov": "升",
  "logistická krivka s K = {@0}": "逻辑斯谛曲线，K = {@0}",
  "nadkritické tlmenie (aperiodický pohyb)": "过阻尼（非周期运动）",
  "nadkritické tlmenie: aperiodický pohyb": "过阻尼：非周期运动",
  "neizolovaný rovnovážny bod (det A = 0)": "非孤立平衡点（det A = 0）",
  "nestabilné ohnisko": "不稳定焦点",
  "nestabilný degenerovaný uzol": "不稳定退化结点",
  "nestabilný uzol": "不稳定结点",
  "netlmené kmity, ω₀ = 2": "无阻尼振动，ω₀ = 2",
  "nie je koreňom": "不是特征方程的根",
  "po vydelení číslom ${@0}$": "（除以 ${@0}$ 后）",
  "podkritické tlmenie (tlmené kmity)": "欠阻尼（阻尼振动）",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "欠阻尼：阻尼振动，ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "一次多项式",
  "polčas ln 2 / |k| = {@0}": "半衰期 ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "对于像 Y(s)",
  "prvá": "一阶",
  "riešenie y(t)": "解 y(t)",
  "rovnica pre y(t)": "关于 y(t) 的方程",
  "rozklad na parciálne zlomky": "部分分式分解",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "浓度为 ${@0}\\,\\mathrm{kg/l}$ 的溶液{@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "含 ${@0}\\,\\mathrm{kg}$ 盐的溶液",
  "rýchlosťou ${@0}$ {@1} za minútu": "以每分钟 ${@0}$ {@1}的速度",
  "sedlo": "鞍点",
  "stabilné ohnisko": "稳定焦点",
  "stabilný uzol": "稳定结点",
  "tabuľka obrazov": "像函数表",
  "tretia": "三阶",
  "začiatočná úloha": "初值问题",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$，$y_p' = {@2}(-A{@3} + B{@4})$。代入后比较系数：${@5}$ 项：${@6} = {@7}$，${@8}$ 项：${@9} = {@10}$。方程组的解为 $A = {@11}$，$B = {@12}$。",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} 接通 ${@1}\\,\\mathrm{ms}$ 后电容器上的电压是多少？结果以伏特为单位，四舍五入到小数点后 2 位。",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} 放入 ${@1}$ 分钟后它的温度是多少？结果四舍五入到 0.1 度。",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} ${@1}$ 年后种群有多少个个体？结果四舍五入到整数。",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} 经过多少毫秒电容器上的电压达到电源电压的 ${@1}\\,\\%$？{@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} 放入后经过多少分钟，物体的温度降到 ${@1}{@2}$？结果四舍五入到 0.1 分钟。",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} 经过多少年它达到环境容纳量的一半（此时增长最快）？{@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}与形式 $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ 比较得 $2\\delta = {@1}$，$\\delta = {@2}$，$\\omega_0^{2} = {@3}$。特征方程的根为 $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$，因此 $\\omega_d = \\sqrt{{@7}} \\approx {@8}$。",
  "· riešením je priamka y = x − 1": "· 直线 y = x − 1 是一个解",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "时间常数 $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$。$u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$，因此 $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$。",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "特征值是实数（结点）还是复数（焦点、中心），由判别式 $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ 的符号决定。",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "项 $\\frac{y}{x}$ 没问题，但第二项并不只依赖于比值 $\\frac{y}{x}$。",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "项 $p\\,y'$ 变换为 $p(sY - y(0))$；移到右边后得到 $+p\\,y(0)$。检查符号。",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "数 ${@0}$ 不是特征方程的根，因为 ${@1}^{2}{@2}{@3} = {@4}\\neq 0$。对 $y_p = A{@5}$ 有 $y_p' = {@6}A{@7}$，$y_p'' = {@8}A{@9}$，代入后 $A\\cdot {@10}\\,{@11} = {@12}{@13}$，因此 $A = {@14}$。",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "右端指数中的数 ${@0}$ 是特征方程的根（共振）；形式要乘以 $x$ 几次？",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "数 ${@0}\\mathrm{i}$ 不是特征方程的根，不发生共振。",
  "čas zdvojnásobenia ln 2 / k = {@0}": "倍增时间 ln 2 / k = {@0}",
  "čistej vody": "清水",
  "čistá voda {@0}": "清水{@0}",
  "štvrtá": "四阶",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0}（二重根）",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i（复根）",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}，λ₂ = {@1}（不同的实根）",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2，δ = {@0} · <span class=\"c-accent\">在 ω = {@1} 处取最大值，振幅 {@2}</span>（F₀/m = 1 时）",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "结果四舍五入到小数点后 2 位。"
 }
});
