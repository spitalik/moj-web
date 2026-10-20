/* English: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/v7/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "v7-chyby": {
   "title": "Errors and accuracy of computations",
   "summary": "Absolute and relative error, significant digits, machine numbers and machine epsilon, error propagation, conditioning of a problem and loss of accuracy in subtraction.",
   "theory": [
    "<p>The result of a numerical computation is almost always only <strong>approximate</strong>. Errors come from several sources: from the <em>model</em>\n       (a simplified description of reality), from the <em>input data</em> (measurements), from the <em>method</em> (an infinite process, such as a series or a limit, is replaced by a finite one — the method\n       or discretization error) and from <em>rounding</em> when computing with a finite number of digits.</p>\n       <p>If $x$ is the exact value and $\\tilde{x}$ its approximation, then the <strong>absolute error</strong> is $\\Delta = |x-\\tilde{x}|$ and the <strong>relative error</strong>\n       is $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$ (for $x\\neq 0$), often given in percent. As a rule we do not know the exact value, so we work with an <em>estimate</em> (bound) of the error:\n       a number $\\varepsilon$ for which $|x-\\tilde{x}|\\le\\varepsilon$, and we write $x=\\tilde{x}\\pm\\varepsilon$. The relative error is more important because it does not depend on units:\n       an error of 1 mm is negligible for the length of a bridge, but huge for the thickness of a metal sheet.</p>",
    "<p><strong>Significant digits.</strong> A digit of the approximation $\\tilde{x}$ in the $10^{-k}$ place is <em>correct</em> (reliable) if $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$.\n       We count significant digits from the first non-zero digit on the left up to the last correct one. For example, $\\tilde{x}=23.4718$ with an error of at most $0.004$ has two correct decimal places\n       ($0.004\\le 0.005$), i.e. four significant digits 2, 3, 4, 7. <strong>Rounding</strong> to $k$ decimal places causes an error of at most $\\frac{1}{2}\\cdot 10^{-k}$,\n       so a correctly rounded number has all its written digits correct.</p>",
    "<p><strong>Machine numbers.</strong> A computer stores real numbers in floating-point form $\\pm m\\cdot\\beta^{e}$, where $\\beta$ is the base, the mantissa $m$ has a fixed number\n       $t$ of digits and the exponent $e$ lies in a limited range. The IEEE 754 standard in double precision (double) uses $\\beta=2$, $t=53$ bits of mantissa and exponents\n       from about $-1022$ to $1023$. The set of machine numbers is finite; outside it <em>overflow</em> (a number too large) or <em>underflow</em> (a number too small) occurs.</p>\n       <p><strong>Machine epsilon</strong> $\\varepsilon_M$ is the distance from 1 to the next larger machine number; for double $\\varepsilon_M=2^{-52}\\approx 2.22\\cdot 10^{-16}$.\n       Rounding a real number to a machine number gives $\\mathrm{fl}(x)=x(1+\\eta)$, where $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$ (the unit roundoff).\n       So a double carries about 15 to 16 significant decimal digits. Even the number $0.1$ has no finite representation in binary, which is why, for example, $0.1+0.2$ is not exactly $0.3$.</p>",
    "<p><strong>Error propagation.</strong> For the error bounds of the inputs we have (in the linear approximation):\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       For a function $y=f(x)$, $\\Delta y\\approx|f'(x)|\\,\\Delta x$; for a function of several variables $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$.\n       So in addition the absolute errors add up, in multiplication and division the relative ones.</p>\n       <p><strong>Conditioning.</strong> A problem is <em>well-conditioned</em> if a small relative change of the input causes a small relative change of the result. The measure is\n       the <strong>condition number</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, for which $\\delta y\\approx\\kappa\\,\\delta x$. For example, $f(x)=\\ln x$ has $\\kappa=\\frac{1}{|\\ln x|}$,\n       which is a large number for $x$ close to 1: the logarithm of a number close to one is an ill-conditioned problem. Conditioning is a property of the <em>problem</em>, while <em>stability</em> is a property\n       of the <em>algorithm</em> — a stable algorithm does not magnify rounding errors more than the conditioning of the problem warrants.</p>",
    "<p><strong>Loss of accuracy in subtraction.</strong> The difference of two close numbers is ill-conditioned: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$, and the denominator is small.\n       The common leading digits cancel out in the subtraction, and the remaining digits are burdened with error (so-called <em>catastrophic cancellation</em>). An algebraic rearrangement that removes the subtraction helps:\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "We replace the number $\\pi$ by the value $3.14$. Find the absolute and relative error and the number of significant digits of the approximation.",
     "steps": [
      "$\\Delta=|\\pi-3.14|=|3.14159\\ldots-3.14|\\approx 0.00159$.",
      "$\\delta=\\frac{0.00159}{3.14159}\\approx 0.000507=0.0507\\,\\%$.",
      "Since $0.00159\\le 0.005=\\frac{1}{2}\\cdot 10^{-2}$, two decimal places are correct. The approximation $3.14$ has <strong>3 significant digits</strong>."
     ]
    },
    {
     "task": "The smaller root of the equation $x^2-200x+1=0$ is $x=100-\\sqrt{9999}$. Compute it in 4-significant-digit arithmetic directly and after a rearrangement that removes the subtraction.",
     "steps": [
      "To 4 significant digits $\\sqrt{9999}=99.99499\\ldots\\approx 100.0$. The direct computation gives $100-100.0=0$ — all digits are lost, the relative error is 100%.",
      "We rationalize the expression: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "Now $\\frac{1}{100+100.0}=\\frac{1}{200.0}=0.005000$. The exact value is $0.0050001250\\ldots$, so the result has all 4 digits correct.",
      "The problem itself is well-conditioned; only the algorithm (subtracting close numbers) was bad."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "Numerical solution of equations",
   "summary": "Isolating a root, the bisection method, fixed-point iteration, Newton's method and the secant method, order of convergence and stopping criteria.",
   "theory": [
    "<p>We look for a root $\\xi$ of an equation $f(x)=0$ that cannot be expressed by a formula (for example $x=\\cos x$ or $x^5-x-1=0$). First we <strong>isolate</strong> the root — we find an interval\n       $[a, b]$ that contains exactly one root. By <strong>Bolzano's theorem</strong> a continuous function with $f(a)\\,f(b)&lt;0$ has at least one root in the interval $(a, b)$; if moreover\n       $f'$ does not change sign on $[a, b]$, the root is unique.</p>\n       <p><strong>The bisection method (interval halving).</strong> We compute the midpoint $c=\\frac{a+b}{2}$. If $f(a)\\,f(c)&lt;0$, we continue with $[a, c]$, otherwise with $[c, b]$. Each step\n       halves the interval; after $n$ steps it has length $\\frac{b-a}{2^n}$. To reach a length of at most $\\varepsilon$ we need $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ steps.\n       The method is slow, but it <em>always</em> converges and needs only the signs of the function values.</p>",
    "<p><strong>Fixed-point iteration.</strong> We rewrite the equation in the form $x=g(x)$ and compute $x_{k+1}=g(x_k)$. If $g$ maps an interval $I$ into itself and\n       $|g'(x)|\\le q&lt;1$ on $I$, then $g$ has a unique <em>fixed point</em> $\\xi$ in $I$, and the sequence converges to it for every starting point $x_0\\in I$ (the Banach fixed-point theorem).\n       The following estimates hold:\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       The choice of form matters: the equation $x^2-2=0$ can be written as $x=\\frac{2}{x}$ (the iterations oscillate, $|g'(\\sqrt{2})|=1$) or as $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (very fast convergence).</p>",
    "<p><strong>Newton's method (the tangent method).</strong> We replace the graph of the function at the point $x_k$ by the tangent line and take its intersection with the $x$-axis as the next approximation:\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       For a simple root ($f'(\\xi)\\neq 0$) and a start close enough to the root it converges <strong>quadratically</strong>: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$,\n       so the number of correct digits roughly doubles in each step. <em>Fourier's condition:</em> if $f'$ and $f''$ do not change sign on $[a, b]$ and we start at the endpoint\n       where $f(x_0)\\,f''(x_0)&gt;0$, the iterations converge monotonically. From a bad start the method may jump far away; for a multiple root it converges only linearly.</p>",
    {
     "fig": "v7-newton",
     "caption": "Newton's method for $f(x)=x^2-2$: from the point $(x_k, f(x_k))$ we draw the tangent, and its intersection with the $x$-axis is $x_{k+1}$. After only three steps the approximation of $\\sqrt{2}$ has an error of order $10^{-6}$ to $10^{-12}$."
    },
    "<p>The <strong>secant method</strong> replaces the derivative by a difference quotient from the last two approximations:\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       It does not need the derivative and converges with order $\\frac{1+\\sqrt{5}}{2}\\approx 1.618$. If we always draw the secant through points with opposite signs (as in bisection),\n       we get <em>regula falsi</em> (the false position method), which always converges, but usually only linearly.</p>\n       <p><strong>Order of convergence.</strong> A method has order $p$ if $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$; for $p=1$ (linear convergence) we need $C&lt;1$. Bisection and fixed-point iteration\n       are of order 1, the secant method of order $1.618$, Newton's method of order 2. <strong>Stopping criteria:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, relatively $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$, and always also a maximum number of iterations. A small $|f(x_k)|$ by itself does not guarantee closeness to the root if the function is very flat.</p>"
   ],
   "examples": [
    {
     "task": "Use Newton's method to find $\\sqrt{5}$ as a root of the function $f(x)=x^2-5$; start at $x_0=2$ and do two steps.",
     "steps": [
      "$f'(x)=2x$, so $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2.25$.",
      "$x_2=2.25-\\frac{2.25^2-5}{4.5}=2.25-\\frac{0.0625}{4.5}\\approx 2.236111$.",
      "Exactly $\\sqrt{5}=2.236068\\ldots$: the error dropped from $0.014$ to $0.00004$, which corresponds to quadratic convergence."
     ]
    },
    {
     "task": "Use bisection to locate the root of the equation $x^3-x-1=0$ on the interval $[1, 2]$ (three steps). How many steps would be needed for an interval of length at most $10^{-6}$?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$, the root lies in $[1, 2]$.",
      "$f(1.5)=0.875&gt;0$ → $[1, 1.5]$. $f(1.25)\\approx-0.297&lt;0$ → $[1.25, 1.5]$. $f(1.375)\\approx 0.225&gt;0$ → $[1.25, 1.375]$.",
      "After $n$ steps the interval has length $2^{-n}$. The condition $2^{-n}\\le 10^{-6}$ gives $n\\ge 6\\log_2 10\\approx 19.93$, i.e. <strong>20 steps</strong>.",
      "The root is $\\xi\\approx 1.3247$; Newton's method would reach the same accuracy in 4 to 5 steps."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "Interpolation and approximation",
   "summary": "The interpolating polynomial in Lagrange and Newton form, divided differences, interpolation error, Runge's phenomenon and the method of least squares.",
   "theory": [
    "<p><strong>The interpolation problem.</strong> We are given distinct <em>nodes</em> $x_0, x_1, \\dots, x_n$ and values $y_0, y_1, \\dots, y_n$ (for example measured or from a table).\n       We look for a polynomial $P_n$ of degree at most $n$ with $P_n(x_i)=y_i$ for all $i$. Such a polynomial exists and is <strong>unique</strong>: the conditions form a system\n       with a Vandermonde matrix whose determinant $\\prod_{i&lt;j}(x_j-x_i)$ is non-zero. We then use the polynomial to compute values between the nodes.</p>",
    "<p><strong>Lagrange form.</strong> For each node we construct a basis polynomial that equals 1 at that node and 0 at the other nodes:\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       For two nodes we get <em>linear interpolation</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$. The Lagrange form is clear, but when a node is added everything has to be recomputed.</p>",
    "<p><strong>Newton form and divided differences.</strong> Divided differences are defined recursively:\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       Then\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       The differences are computed in a triangular table, and adding another node means adding just one term. The value of the polynomial is computed efficiently with Horner's scheme.</p>",
    "<p><strong>Interpolation error.</strong> If $f$ has a continuous derivative of order $n+1$, then for every $x$ there is $\\xi$ in the smallest interval containing $x$ and the nodes such that\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       Hence the estimate $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$, where $M_{n+1}=\\max|f^{(n+1)}|$. For linear interpolation with step $h$ the error is at most $\\frac{M_2h^2}{8}$.\n       Increasing the degree on equally spaced nodes may not help: for the function $\\frac{1}{1+25x^2}$ on $[-1, 1]$ the polynomial oscillates strongly near the ends (<strong>Runge's phenomenon</strong>).\n       The remedy is Chebyshev nodes, which are denser towards the ends, or piecewise polynomial interpolation (splines).</p>",
    "<p><strong>The method of least squares.</strong> Measured data contain errors, so we do not want to pass a high-degree polynomial through them, but rather a simple function that\n       <em>approximates</em> them. We choose the line $y=ax+b$ so that the sum of squared deviations $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ is minimal. From the conditions\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ we get the <strong>normal equations</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       with the solution $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$. The line passes through the centroid of the data $(\\bar{x}, \\bar{y})$.</p>"
   ],
   "examples": [
    {
     "task": "Find the value of the interpolating polynomial for the points $(0, 1)$, $(1, 3)$, $(3, 2)$ at $x=2$ in both Lagrange and Newton form.",
     "steps": [
      "Lagrange: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3.333$.",
      "Newton: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$, so $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$ — the same polynomial, written differently."
     ]
    },
    {
     "task": "Use the method of least squares to fit a line through the points $(0, 1)$, $(1, 2)$, $(2, 4)$, $(3, 4)$.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1.1$.",
      "$b=\\frac{11-1.1\\cdot 6}{4}=\\frac{4.4}{4}=1.1$.",
      "The line is $y=1.1x+1.1$; it passes through the centroid $(1.5, 2.75)$."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "Numerical differentiation and integration",
   "summary": "Forward and central differences, choice of step, the midpoint, trapezoidal and Simpson's rules, order of accuracy and error estimation.",
   "theory": [
    "<p><strong>Numerical differentiation.</strong> From the Taylor expansion $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ we get the formulas\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{forward difference, error }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{central difference, error }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       The forward difference (as well as the backward difference $\\frac{f(x)-f(x-h)}{h}$) has <strong>order of accuracy 1</strong>, the central difference <strong>order 2</strong>: halving the step reduces the error about\n       twice or four times, respectively. For the second derivative we use $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$ with error $O(h^2)$.</p>",
    "<p><strong>Choice of step.</strong> The step cannot be made smaller indefinitely. In the numerator we subtract two close values, so the rounding error is of order $\\frac{\\varepsilon_M|f(x)|}{h}$\n       and it <em>grows</em> as $h$ decreases. The total error of the forward difference $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ is smallest at about $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$,\n       for the central difference at $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$. So numerical differentiation is an ill-conditioned problem, unlike integration.</p>",
    "<p><strong>Quadrature rules.</strong> We divide the interval $[a, b]$ into $n$ subintervals with step $h=\\frac{b-a}{n}$; the nodes are $x_i=a+ih$ and $f_i=f(x_i)$. On each subinterval we replace\n       the function by a polynomial and integrate that exactly:</p>\n       <ul><li><strong>the midpoint (rectangle) rule</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, error $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>\n       <li><strong>the trapezoidal rule</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, error $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>\n       <li><strong>Simpson's rule</strong> ($n$ even, a parabola on each pair of subintervals) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, error $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "The trapezoidal rule for $f(x)=2+\\sin 1.5x+0.3x$ on $[0, 4]$. Increase the number of subintervals and watch the error decrease roughly with the square of the step; for even $n$ the result of Simpson's rule is shown as well."
    },
    "<p><strong>Order of accuracy.</strong> The error of a composite rule behaves like $Ch^p$. The midpoint and trapezoidal rules have $p=2$ (half the step → an error four times smaller),\n       Simpson's rule $p=4$ (sixteen times smaller), and it is exact for polynomials up to and including degree three. The midpoint rule has roughly half the error of the trapezoidal rule, with the opposite sign,\n       so $S_{2n}=\\frac{2M_n+T_n}{3}$. From two computations with steps $h$ and $\\frac{h}{2}$ we estimate the error by <strong>Runge's rule</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$,\n       and the improved result $\\frac{4T_{2n}-T_n}{3}$ is exactly Simpson's rule (Richardson extrapolation, on which Romberg's method is based).</p>"
   ],
   "examples": [
    {
     "task": "Estimate $f'(0)$ for $f(x)=e^x$ with step $h=0.1$ using the forward and the central difference, and compare the errors.",
     "steps": [
      "Forward: $\\frac{e^{0.1}-1}{0.1}=\\frac{0.105171}{0.1}\\approx 1.051709$, error $\\approx 0.0517$.",
      "Central: $\\frac{e^{0.1}-e^{-0.1}}{0.2}\\approx\\frac{1.105171-0.904837}{0.2}\\approx 1.001668$, error $\\approx 0.0017$.",
      "Exactly $f'(0)=1$. The error estimates $\\frac{h}{2}f''=0.05$ and $\\frac{h^2}{6}f'''\\approx 0.0017$ agree well with the result."
     ]
    },
    {
     "task": "Compute $\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0.785398$ with the trapezoidal rule and Simpson's rule for $n=2$.",
     "steps": [
      "$h=0.5$, $f(0)=1$, $f(0.5)=0.8$, $f(1)=0.5$.",
      "$T_2=\\frac{0.5}{2}(1+2\\cdot 0.8+0.5)=0.25\\cdot 3.1=0.775$, error $\\approx 0.0104$.",
      "$S_2=\\frac{0.5}{3}(1+4\\cdot 0.8+0.5)=\\frac{0.5\\cdot 4.7}{3}\\approx 0.783333$, error $\\approx 0.0021$.",
      "With the same number of function evaluations, Simpson's rule is considerably more accurate."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "Numerical solution of differential equations",
   "summary": "The initial value problem, Euler's method, Heun's (improved Euler) method, the fourth-order Runge–Kutta method, local and global error, choice of step and stability.",
   "theory": [
    "<p>We solve an <strong>initial value problem</strong> (Cauchy problem) $y'=f(x, y)$, $y(x_0)=y_0$, which we usually cannot solve analytically. We choose a <strong>step</strong> $h$ and nodes $x_k=x_0+kh$ and successively\n       compute approximations $y_k\\approx y(x_k)$. One-step methods compute $y_{k+1}$ only from the pair $(x_k, y_k)$. The <strong>local error</strong> is the error of a single step\n       (assuming an exact $y_k$); the <strong>global error</strong> $y(x_k)-y_k$ is the error accumulated at a node. If the local error is $O(h^{p+1})$, then after $\\frac{X-x_0}{h}$ steps\n       the global error is $O(h^p)$, and we say that the method has <strong>order</strong> $p$.</p>",
    "<p><strong>Euler's method.</strong> On the subinterval $[x_k, x_{k+1}]$ we replace the solution by the tangent line with slope $f(x_k, y_k)$ from the direction field:\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       It is the simplest first-order method: local error $\\frac{h^2}{2}y''(\\xi)$, global error $O(h)$. Halving the step only roughly halves the error, so in practice\n       it is used mainly as a starting point for more accurate methods.</p>",
    {
     "fig": "v7-euler",
     "caption": "The problem $y'=y$, $y(0)=1$ on $[0, 2]$ with the exact solution $y=e^x$ (black curve). Euler's method (blue) systematically lags behind; Heun's method (green) is much more accurate with the same step. Increase the number of steps and compare how fast the errors decrease."
    },
    "<p><strong>Heun's (improved Euler) method</strong> is of predictor–corrector type: with an Euler step we estimate the value at the end of the subinterval and then average the slopes:\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       It corresponds to the trapezoidal rule and has <strong>order 2</strong>. Similar is the <em>modified Euler (midpoint) method</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$.</p>\n       <p><strong>The fourth-order Runge–Kutta method (RK4)</strong> evaluates four slopes in each step\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       and takes their weighted average $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$ — an analogue of Simpson's rule. Halving the step reduces the error about 16 times.</p>",
    "<p><strong>Step and error.</strong> For a method of order $p$ the global error is approximately $Ch^p$. From two computations with steps $h$ and $\\frac{h}{2}$ we estimate it by <strong>Runge's rule</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. Modern software adapts the step (adaptive step size, for example pairs of Runge–Kutta methods of different orders).\n       A smaller step does not always mean a better result — the number of operations and rounding errors grows too.</p>\n       <p><strong>Stability.</strong> For the test equation $y'=\\lambda y$ with $\\lambda&lt;0$, Euler's method gives $y_{k+1}=(1+h\\lambda)y_k$; the numerical solution decays to zero only if\n       $|1+h\\lambda|&lt;1$, i.e. $h&lt;\\frac{2}{|\\lambda|}$. With a larger step it oscillates and grows, even though the exact solution decays quickly. Equations with very different time scales\n       (<em>stiff</em> equations) are therefore solved with implicit methods, for example the implicit (backward) Euler method $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$, which is stable for every $h&gt;0$.</p>"
   ],
   "examples": [
    {
     "task": "Solve the problem $y'=y$, $y(0)=1$ with step $h=0.5$ using Euler's and Heun's methods up to $x=1$, and compare with $e\\approx 2.71828$.",
     "steps": [
      "Euler: $y_1=1+0.5\\cdot 1=1.5$, $y_2=1.5+0.5\\cdot 1.5=2.25$, error $\\approx 0.468$.",
      "Heun, step 1: predictor $\\tilde{y}_1=1.5$, $y_1=1+0.25\\,(1+1.5)=1.625$.",
      "Heun, step 2: $\\tilde{y}_2=1.625+0.5\\cdot 1.625=2.4375$, $y_2=1.625+0.25\\,(1.625+2.4375)=2.640625$, error $\\approx 0.078$.",
      "With the same step, Heun's method is about six times more accurate."
     ]
    },
    {
     "task": "Do one step of the RK4 method with step $h=0.1$ for the problem $y'=x+y$, $y(0)=1$. The exact solution is $y=2e^x-x-1$.",
     "steps": [
      "$k_1=f(0, 1)=1$, $k_2=f(0.05,\\ 1+0.05\\cdot 1)=0.05+1.05=1.1$.",
      "$k_3=f(0.05,\\ 1+0.05\\cdot 1.1)=0.05+1.055=1.105$, $k_4=f(0.1,\\ 1+0.1\\cdot 1.105)=0.1+1.1105=1.2105$.",
      "$y_1=1+\\frac{0.1}{6}(1+2.2+2.21+1.2105)=1+\\frac{0.66205}{6}\\approx 1.1103417$.",
      "Exactly $y(0.1)=2e^{0.1}-1.1\\approx 1.1103418$; the error is about $10^{-7}$."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "Algorithms for matrices",
   "summary": "Gaussian elimination with pivoting, LU decomposition, complexity of direct methods, Jacobi and Gauss–Seidel iteration, the power method for the dominant eigenvalue.",
   "theory": [
    "<p><strong>Gaussian elimination</strong> solves a system $Ax=b$ with an invertible $n\\times n$ matrix in two phases. In the <em>forward elimination</em>, for $k=1, \\dots, n-1$,\n       we subtract from the rows $i&gt;k$ a multiple of the $k$-th row with the <strong>multiplier</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$, so that zeros appear below the diagonal and the matrix\n       becomes upper triangular. In the <em>back substitution</em> we compute $x_n, x_{n-1}, \\dots, x_1$ by substituting from the bottom up.</p>\n       <p>If the <em>pivot</em> $a_{kk}$ is zero or very small, the multipliers are huge and rounding errors grow. That is why we use\n       <strong>partial pivoting</strong>: before the $k$-th step we swap rows so that $|a_{kk}|$ is the largest in the $k$-th column on and below the diagonal. Then $|l_{ik}|\\le 1$.</p>",
    "<p><strong>LU decomposition.</strong> The multipliers from the forward elimination form a lower triangular matrix $L$ with ones on the diagonal, and the resulting upper triangular matrix is $U$; we have\n       $A=LU$ (with pivoting $PA=LU$, where $P$ is a permutation matrix). We then solve the system via two triangular systems:\n       $$Ly=b\\ \\text{(forward substitution)},\\qquad Ux=y\\ \\text{(back substitution)}.$$\n       The decomposition pays off when we solve several systems with the same matrix and different right-hand sides. We also get the determinant $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.\n       For symmetric positive definite matrices there is the more economical <em>Cholesky decomposition</em> $A=LL^{T}$.</p>",
    "<p><strong>Complexity.</strong> The forward elimination of Gaussian elimination costs approximately $\\frac{2}{3}n^3$ arithmetic operations, each triangular substitution about $n^2$. When the size\n       doubles, the elimination time increases about eightfold. There is no need to compute the inverse matrix (about $2n^3$ operations) to solve a system. For <em>banded</em> matrices with bandwidth $w$ the cost\n       drops to $O(nw^2)$, for tridiagonal ones to $O(n)$. For large <em>sparse</em> matrices (most entries zero) elimination fills in the zeros, which is where iterative methods come in.</p>",
    "<p><strong>Iterative methods.</strong> From the $i$-th equation we express $x_i$ and substitute the previous approximation. The <strong>Jacobi method</strong> uses only values from the previous step;\n       the <strong>Gauss–Seidel method</strong> immediately uses the components already updated:\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       Both methods converge for every starting point if the matrix is <strong>strictly diagonally dominant</strong> ($|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$ for every row); Gauss–Seidel also for a symmetric\n       positive definite matrix. One step costs about as many operations as the matrix has non-zero entries. We stop when $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ or when the residual $\\|b-Ax^{(k)}\\|$ is small.</p>",
    "<p><strong>The power method.</strong> Let the matrix $A$ have eigenvalues $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ (the dominant $\\lambda_1$ is the only one with the largest absolute value).\n       Repeated multiplication $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ amplifies the component in the direction of the eigenvector $v_1$, so $x^{(k)}$ approaches $\\pm v_1$ at the rate $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$.\n       We estimate the eigenvalue by the <strong>Rayleigh quotient</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ or by the ratio of corresponding components $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$.\n       The eigenvalue smallest in absolute value is found by the <em>inverse power method</em> (the power method for $A^{-1}$; in each step a system is solved using the LU decomposition). The PageRank\n       ranking of web pages is also based on this principle.</p>"
   ],
   "examples": [
    {
     "task": "Find the LU decomposition of the matrix $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ and solve $Ax=b$ for $b=(4,\\ 10,\\ 24)^{T}$.",
     "steps": [
      "Step 1: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; the rows change to $(0, 1, 1)$ and $(0, 3, 5)$.",
      "Step 2: $l_{32}=\\frac{3}{1}=3$; the third row becomes $(0, 0, 2)$. So $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Solution $x=(1,\\ 1,\\ 1)^{T}$; moreover $\\det A=2\\cdot 1\\cdot 2=4$."
     ]
    },
    {
     "task": "Solve the system $4x_1-x_2=7$, $x_1+3x_2=5$ (solution $x=(2,\\ 1)$) from the point $(0,\\ 0)$ with two steps of the Jacobi and the Gauss–Seidel methods.",
     "steps": [
      "Iteration formulas: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. The matrix is diagonally dominant ($4&gt;1$, $3&gt;1$), so both methods converge.",
      "Jacobi: $x^{(1)}=(1.75,\\ 1.6667)$, $x^{(2)}=\\left(\\frac{7+1.6667}{4},\\ \\frac{5-1.75}{3}\\right)=(2.1667,\\ 1.0833)$.",
      "Gauss–Seidel: $x_1^{(1)}=1.75$, then immediately $x_2^{(1)}=\\frac{5-1.75}{3}=1.0833$; $x_1^{(2)}=\\frac{7+1.0833}{4}=2.0208$, $x_2^{(2)}=\\frac{5-2.0208}{3}=0.9931$.",
      "After two steps the Gauss–Seidel method has an error of about $0.02$, the Jacobi method about $0.17$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (The exact value is ${@5}$.)",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. For a power, the relative error is multiplied by the exponent: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, i.e. about ${@6}\\,\\%$.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Near $\\pi$ the sine is small and the problem is ill-conditioned.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ is increasing, so $M_2=e^{{@0}}\\approx {@1}$.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$, so $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Subtracting nearby numbers is ill-conditioned.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$, so $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Exactly, $\\sqrt{{@5}}\\approx {@6}$.)",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$, so $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exactly, $f'({@8})\\approx {@9}$; the error is about ${@10}$.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Exactly, $f'({@8})\\approx {@9}$; the error is about ${@10}$.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Exactly, $\\sqrt{{@6}}\\approx {@7}$.)",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, predictor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. The resulting interval is $[{@5};\\ {@6}]$.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. The exact value is ${@6}$, the error about ${@7}$.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleigh quotient: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. The exact dominant eigenvalue is $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (We compute in radians and do not round intermediate results.)",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$, so $M_2=1$.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, absolute error $\\Delta\\approx {@2}$. Relative error $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, i.e. approximately ${@7}\\,\\%$.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$, so $\\Delta=|{@2}-{@3}|\\approx {@4}$.",
  "(tu len $f_1$)": "(here only $f_1$)",
  ", ale ${@0}&gt;{@1}$": ", but ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "The absolute error is $|x-\\tilde{x}|$. Take the value of the constant with enough digits (from a calculator).",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "If the error is approximately $Ch^p$, reducing the step $k$ times reduces the error $k^p$ times. The trapezoidal and midpoint rules have $p=2$, Simpson's rule $p=4$.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "What is the bound on the absolute error of the area? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "What is the relative error of $x^{{@0}}$ in percent? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "What is the relative error in percent? {@0}",
  "Aký interval dostaneš po druhom kroku?": "What interval do you get after the second step?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "What interval do you get after the first step? (separate the endpoints with a semicolon)",
  "Aký je krok $h$?": "What is the step $h$?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "What is the multiplier $l_{21}$ (the multiple of the first equation that you subtract from the second)?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "What is the multiplier $l_{32}$ in the second elimination step?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "The approximation $\\tilde{x}={@0}$ has an absolute error of at most ${@1}$. How many significant digits does it have?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "Central difference: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Compute trigonometric functions in radians.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "The error is proportional to $h^{p}$, so it decreases $k^{p}$ times, not $k\\cdot p$ times.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "The error of linear interpolation is $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; for $f''(\\xi)$ substitute the maximum of the absolute value of the second derivative on the interval.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "The error is not proportional to $h$ itself, but to $h^{p}$, where $p$ is the order of accuracy of the method.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "The error does not decrease in proportion to the step: the method has order {@0}, so the error is proportional to $h^{{@1}}$.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "The error of {@0} is proportional to $h^{{@1}}$ (order of accuracy {@2}). With the step $\\frac{h}{{@3}}$ it decreases ${@4}^{{@5}}={@6}$ times.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "The errors of the sides are not multiplied. The linear estimate is $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "The digit in the $10^{-j}$ place is significant if the error does not exceed $\\frac{1}{2}\\cdot 10^{-j}$. We have ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, so {@4}. Together with the {@5} {@6} before the decimal point, {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "The derivative of $x^2 - a$ is $2x$, not $x$.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "Forward difference: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Compute trigonometric functions in radians.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "Substitute $x_0$ into $g$, then substitute the result into $g$ again. Do not round intermediate results.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "Substitute into $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; the derivative of $x-c$ is 1.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "Substitute into the {@0} difference formula. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "Euler step: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, where $x_k=kh$. Do two steps.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "Euler's and Heun's methods for y' = y, y(0) = 1",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "Euler's method has order 1, Heun's order 2, RK4 order 4. The error is approximately $Ch^p$.",
  "Eulerovou metódou": "by Euler's method",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "We replace the function $f(x)={@0}$ on the interval $[{@1};\\ {@2}]$ by linear interpolation. Estimate an upper bound for the interpolation error at the point $x={@3}$ using the formula $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "Gaussian elimination of a system with ${@0}$ unknowns takes ${@1}$ s on a certain computer. Approximately how many seconds will a system with ${@2}$ unknowns take (full matrix)?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "Solve the system {@0} by Gaussian elimination. Enter $x_1; x_2; x_3$ separated by semicolons.",
  "Gaussovou–Seidelovou": "Gauss–Seidel",
  "Heunovou metódou": "by Heun's method",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "The value is $x={@0}\\pm {@1}$. Estimate the relative error of the expression $x^{{@2}}$ in percent. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "Look for the smallest $n$ for which $2^n$ is at least that large.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "Look for the smallest order $10^{-k}$ for which the error does not exceed $\\frac{1}{2}\\cdot 10^{-k}$.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "The interpolation polynomial of degree 2 passes through the points {@0}. Compute its value at the point $x={@1}$. {@2}",
  "Jacobiho": "Jacobi",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "The calculator is in degrees. In numerical methods we compute trigonometric functions in radians.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "The calculator is in degrees. When differentiating trigonometric functions we compute in radians.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "Each bisection step only halves the interval, so you need the base-2 logarithm, not base 10.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "The root lies in an interval of length ${@0}$. What is the smallest number of bisection steps needed for the resulting interval to have length at most ${@1}$?",
  "Koľko desatinných miest je platných?": "How many decimal places are correct?",
  "Koľko najmenej krokov bisekcie treba?": "What is the smallest number of bisection steps needed?",
  "Koľko platných cifier má aproximácia celkovo?": "How many significant digits does the approximation have in total?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "How many times must the interval be shrunk, i.e. what is $\\frac{b-a}{\\varepsilon}$?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "In the trapezoidal rule the end values $f_0$ and $f_n$ have weight $\\frac{h}{2}$, the interior ones $h$. The endpoints count only half.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "We reduce the step $h$ {@0}. Approximately how many times does the error of {@1} decrease (for a smooth function)?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "Only the cost of the triangular substitution grows quadratically. The forward elimination has complexity $O(n^3)$.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "Lagrange basis polynomials at the point ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "The trapezoidal rule for a function on the interval from 0 to 4",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "Trapezoidal rule: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "Linear interpolation: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "The method has order {@0}; the global error is approximately $Ch^{{@1}}$. With the step $\\frac{h}{{@2}}$ it decreases ${@3}^{{@4}}={@5}$ times: $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "Fit a line $y=ax+b$ through the points {@0} by the least squares method. Find {@1}. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "We estimate the dominant eigenvalue of the symmetric matrix $A={@0}$ by the power method. From the start $x^{(0)}=(1;\\ 1)^{T}$ compute $x^{(1)}=Ax^{(0)}$ and the Rayleigh quotient $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "The multiplier $l_{32}$ is computed from the matrix modified after the first elimination step, not from the original entry $a_{32}$.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "The multiplier is $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (from the current, already modified matrix); subtract $l_{ik}$ times row $k$ from row $i$. The resulting upper triangular matrix is $U$.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "The multiplier is the quotient $l_{21} = \\frac{a_{21}}{a_{11}}$; the entry must be divided by the pivot.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "The multiplier is the quotient $l_{31} = \\frac{a_{31}}{a_{11}}$; the entry must be divided by the pivot.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "Multipliers: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; after the first step the second row is $(0, {@6}, {@7})$ and the third $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "First the Euler predictor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, then $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "First compute the first-order differences $f[x_0, x_1]$ and $f[x_1, x_2]$, then divide their difference by $x_2-x_0$.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "The Newton step is $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; the fraction is subtracted, not added.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "The Newton step is $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "Newton's method: tangents to the graph of y = x² − 2",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "We use Newton's method to find $\\sqrt{{@0}}$ as a root of the function $f(x)=x^2-{@1}$. Compute $x_1$ from the start $x_0={@2}$. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "Normal equations: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; from them $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "Find the LU decomposition (without row exchanges, $L$ has ones on the diagonal) of the matrix $A={@0}$ and find {@1}.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "Find the smallest order $10^{-k}$ for which $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ still holds, and count the digits from the first nonzero one down to this order.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "Midpoint rule: $M_n=h\\sum f(\\text{midpoint of subinterval})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "Estimate the derivative of the function $f(x)={@0}$ at the point $x={@1}$ using a {@2} difference with step $h={@3}$. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "We have $\\delta(x^n)\\approx|n|\\,\\delta x$, where $\\delta x=\\frac{\\Delta x}{|x|}$.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "After $n$ steps the interval has length $\\frac{{@0}}{2^n}$. We need $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, i.e. $n\\ge\\log_2 {@4}\\approx {@5}$. The smallest integer is $n={@6}$.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "You kept the wrong half. The root is in the half at whose endpoints $f$ has opposite signs.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "Use $P(x)=\\sum y_i\\ell_i(x)$ with $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, or the Newton form with divided differences.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "Use $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$; here $a-b=1$.",
  "Počet krokov": "Number of steps",
  "Počet krokov n": "Number of steps n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "The number of operations is approximately $\\frac{2}{3}n^3$; the time grows with the cube of the size. The size increased ${@0}$ times, so the time ${@1}^3={@2}$ times: ${@3}\\cdot {@4}={@5}$ s.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "For $f(x)=\\ln x$ we get $\\kappa=\\frac{1}{|\\ln x|}$.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "For $f(x)=\\sin x$, $\\kappa=|x\\cot x|$. Compute in radians.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "For the points {@0} compute the second-order divided difference $f[x_0, x_1, x_2]$ (the coefficient of $(x-x_0)(x-x_1)$ in the Newton form). {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "For a function of two variables $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; for $S=ab$ the partial derivatives are $b$ and $a$.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "In the Gauss–Seidel method we already used the new values in the second and third equations.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "In the Jacobi method we substitute the starting values everywhere.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "In the Jacobi method only the values from the start $x^{(0)}$ are substituted into all equations, not the components just computed.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "For the central difference the distance between the points $x-h$ and $x+h$ is $2h$; the difference of the values must be divided by $2h$, not $h$.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "For the second-order difference you divide by the difference of the end nodes $x_2 - x_0$, not $x_2 - x_1$.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "Forward elimination with the multipliers $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ gives the upper triangular matrix $U={@3}$ and the right-hand side $y=({@4})^{T}$. Back substitution: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "You computed the Rayleigh quotient with the vector $x^{(0)}$. The task asks for the quotient for $x^{(1)}$, so you still need to compute $Ax^{(1)}$.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "The relative error is $\\frac{|x-\\tilde{x}|}{|x|}$; to get it in percent, multiply by 100.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "So the relative error of the input is magnified about {@0} times — the problem is ill-conditioned.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "Solve the inequality $\\frac{b-a}{2^n}\\le\\varepsilon$, i.e. $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, and round up.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "Solving a certain problem {@0} with step $h$ gives a global error of approximately ${@1}$ at the end point. What error can we expect with the step $\\frac{h}{{@2}}$? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "The equation $x^2-{@0}=0$ has a root in the interval $[{@1};\\ {@2}]$. Do two steps of the bisection method and enter the resulting interval as a pair of endpoints separated by a semicolon (e.g. 1.25; 1.5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "We solve the equation by fixed-point iteration $x_{k+1}=g(x_k)$ with $g(x)={@0}$ (the equation ${@1}$) and the start $x_0={@2}$. Compute $x_2$. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "The difference of the first-order differences still has to be divided by the difference of the end nodes $x_2 - x_0$.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "The difference of the values $y_1 - y_0$ must be divided by the step length $x_1 - x_0 = {@0}$ before multiplying by $(x - x_0)$.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "We multiply the expression by the sum of the square roots: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "Simpson's rule has order of accuracy 4, not 2 like the trapezoidal rule.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "Simpson's rule: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ even.",
  "Simpsonovej metódy": "Simpson's rule",
  "Simpsonovou metódou": "by Simpson's rule",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "The slopes $k_2$ and $k_3$ have double weight in RK4: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "The slopes are averaged: you multiply by $\\frac{h}{2}$, not $h$.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "In the second step the slope must be recomputed at the new point $(x_1, y_1)$; one step of length $2h$ with the slope from the start is not enough.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "You counted only the correct decimal places. The significant digits also include the digits before the decimal point.",
  "Spätným chodom urči najprv $x_3$.": "Use back substitution to find $x_3$ first.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "The sides of a rectangle were measured with an accuracy of $\\pm {@0}$ cm: $a={@1}$ cm and $b={@2}$ cm. Estimate the bound on the absolute error of the area $S=ab$ (in cm²) using the linear approximation. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "The midpoint rule takes the values at the midpoints of the subintervals, not at their left endpoints.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "Midpoints of the subintervals: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "Solve the system {@0} by the {@1} method from the start $x^{(0)}={@2}$. Compute the first iteration $x^{(1)}$ and enter its three components separated by semicolons, each rounded to 4 decimal places.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "The product of the diagonal entries gives the determinant only for a triangular matrix. Multiply the diagonal of the matrix $U$, not $A$.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "This is a Jacobi step. In the Gauss–Seidel method substitute the new values $x_1^{(1)}, x_2^{(1)}$ into the following equations right away.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "This is the absolute error. You get the relative error by dividing the absolute error by $|x|$ (and multiplying by 100 for percent).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "This is only $x_1$. Substitute the result into $g$ once more.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "This is only $y_1$. Do the second step too.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "This is only the Euler predictor $\\tilde{y}_1$. Heun's method still corrects it with the average of two slopes.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "This is only the numerator $(x^{(1)})^{T}Ax^{(1)}$. Divide it by $(x^{(1)})^{T}x^{(1)}$.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "This is the trapezoidal rule. Simpson's rule uses the weights $1, 4, 2, 4, \\dots, 4, 1$ and multiplies by $\\frac{h}{3}$.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "This is linear interpolation from just the two neighbouring nodes. The polynomial of degree 2 uses all three points.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "This is the estimate $\\frac{M_2h^2}{8}$ for the worst point of the interval. The task asks about a specific point $x$.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "This is the mean $\\bar{y}$. The intercept is $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, so you must also subtract $a\\bar{x}$.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "This is the original entry $a_{22}$. First subtract $l_{21}$ times the first row from the second row.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "This is the original entry $a_{23}$. First subtract $l_{21}$ times the first row from the second row.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "This is the original entry $a_{33}$. The third row must be modified in both elimination steps.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "This is the relative error (the ratio of the error to the value). The absolute error is the difference $|x-\\tilde{x}|$ itself.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "This is the relative error of $x$ itself. For a power, the relative error is multiplied by the exponent ${@0}$.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "Do one step of Newton's method for the equation $x^3{@0}-{@1}=0$ with the start $x_0={@2}$. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "Do one step of the fourth-order Runge–Kutta method with step $h={@0}$ for the problem {@1}. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "Do one step of the secant method for $f(x)=x^2-{@0}$ with the initial points $x_0={@1}$ and $x_1={@2}$. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "Find $M_2 = \\max|f''|$ on the interval. {@0}",
  "Urči $u_{22}$.": "Find $u_{22}$.",
  "Urči $u_{23}$.": "Find $u_{23}$.",
  "Urči $u_{33}$.": "Find $u_{33}$.",
  "Urči multiplikátor $l_{21}$.": "Find the multiplier $l_{21}$.",
  "Urči multiplikátor $l_{31}$.": "Find the multiplier $l_{31}$.",
  "Urči multiplikátor $l_{32}$.": "Find the multiplier $l_{32}$.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "Find the condition number $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ of computing $f(x)=\\sin x$ at the point $x={@0}$ (in radians). {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "Find the condition number $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ of computing $f(x)=x-{@0}$ at the point $x={@1}$. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "Find the condition number $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ of computing the function $f(x)=\\ln x$ at the point $x={@0}$. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "In each step compute the value at the midpoint of the interval and keep the half at whose endpoints the function has opposite signs.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "The formula also has a division by two: $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "In the secant formula the correction $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ is subtracted from $x_1$.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "Eliminate the entries below the diagonal in the first and then in the second column; finally solve from the last equation.",
  "Vypočítaj $Ax^{(1)}$.": "Compute $Ax^{(1)}$.",
  "Vypočítaj $P_1({@0})$. {@1}": "Compute $P_1({@0})$. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "Compute $\\det A = u_{11}u_{22}u_{33}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "Compute $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} with $n={@4}$ subintervals. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "Compute $\\ell_{@0}({@1})$. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "Compute $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "Compute $\\sqrt{{@0}}-\\sqrt{{@1}}$ in a numerically stable way (without subtracting nearby numbers). {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "Compute $\\sum x_i$ and $\\sum y_i$ (separated by a semicolon).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "Compute $\\sum x_i^2$ and $\\sum x_iy_i$ (separated by a semicolon).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "Compute $f$ at the midpoint of the interval, i.e. $f({@0})$. {@1}",
  "Vypočítaj $f'(x_0)$.": "Compute $f'(x_0)$.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Compute $f(x_0)$ and $f'(x_0)$ and substitute into $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.",
  "Vypočítaj $f(x_0)$.": "Compute $f(x_0)$.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "Compute $f(x_0, y_0)$. {@0}",
  "Vypočítaj $f(x_1)$.": "Compute $f(x_1)$.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "Compute $f(x_1, \\tilde{y}_1)$. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "Compute $f(x_1, y_1)$. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "Compute $f({@0})$. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "Compute $f[x_0, x_1, x_2]$. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "Compute $f[x_0, x_1]$. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "Compute $f[x_1, x_2]$. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "Compute $k_{@0}$. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "Compute $x^{(1)} = Ax^{(0)}$ (two components separated by a semicolon).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "Compute $x^{(1)}=Ax^{(0)}$, then $Ax^{(1)}$ and the quotient of the dot products $x^{(1)}\\cdot Ax^{(1)}$ and $x^{(1)}\\cdot x^{(1)}$.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "Compute $x_1 = g(x_0)$. {@0}",
  "Vypočítaj $x_1$. {@0}": "Compute $x_1$. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "Compute $x_2 = g(x_1)$. {@0}",
  "Vypočítaj $x_2$. {@0}": "Compute $x_2$. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "Compute $x_{@0}^{(1)}$. {@1}",
  "Vypočítaj $y_1$. {@0}": "Compute $y_1$. {@0}",
  "Vypočítaj $y_2$. {@0}": "Compute $y_2$. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "Compute $|(x-x_0)(x-x_1)|$. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "Compute the Rayleigh quotient. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "Compute the absolute error $|x-\\tilde{x}|$. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "Compute the intercept $b$. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "Compute the denominator $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}",
  "Vypočítaj odhad chyby. {@0}": "Compute the error estimate. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "Compute the predictor $\\tilde{y}_1$. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "Compute the contribution of the error of side $a$, i.e. $b\\,\\Delta a$. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "Compute the contribution of the error of side $b$, i.e. $a\\,\\Delta b$. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "Compute the relative error of $x$ in percent. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "Compute the slope $\\frac{y_1-y_0}{x_1-x_0}$. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "Compute the slope $a$. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "Compute the sum of the function values at the midpoints of the subintervals. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "Compute the sum of the values at the odd nodes $f_1{@0}$ (weight 4). {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "Compute the sum of the interior values {@0}. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "Compute the resulting value of the integral. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "The formula $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ holds only for a line through the origin ($b = 0$). Use both normal equations.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "Secant formula: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "Round the result to {@0} {@1}.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "From the $i$-th equation express $x_i$ and substitute the values of the components from $x^{(0)}$.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "From the $i$-th equation express $x_i$ and substitute the already updated components $x_1, \\dots, x_{i-1}$ and the old values of the others.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "From a table we know ${@0}\\approx {@1}$ and ${@2}\\approx {@3}$. Use linear interpolation to estimate the value of the function ${@4}$ at the point $x={@5}$. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "You forgot the factor $x$ in the numerator: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, not $\\left|\\frac{f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "You forgot the factor $x$ in the numerator: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "You forgot the factor $x$: $\\kappa = |x\\cot x|$, not $|\\cot x|$.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "Enter the whole solution $x_1; x_2; x_3$.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "You mixed up the weights: in Simpson's rule the odd nodes $f_1, f_3, \\dots$ have weight 4 and the even interior nodes weight 2.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "You counted the error of only one side. Add $a\\,\\Delta b$ to $b\\,\\Delta a$.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "The complexity of Gaussian elimination is $O(n^3)$, more precisely about $\\frac{2}{3}n^3$ operations.",
  "absolútny člen $b$": "the intercept $b$",
  "centrálnej": "central",
  "centrálnej diferencie": "the central difference",
  "centrálnou": "central",
  "ciframi": "digits",
  "cifrou": "digit",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "the determinant $\\det A$ as the product of the diagonal entries of $U$",
  "doprednej": "forward",
  "doprednej diferencie": "the forward difference",
  "doprednou": "forward",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (error {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (error {@4})</span> · exactly e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · exactly I = {@2} · error {@3}",
  "je platné 1 desatinné miesto": "1 decimal place is correct",
  "je to <strong>1</strong> platná cifra": "that makes <strong>1</strong> significant digit",
  "je to <strong>{@0}</strong> platných cifier": "that makes <strong>{@0}</strong> significant digits",
  "lichobežníkovej metódy": "the trapezoidal rule",
  "lichobežníkovou metódou": "by the trapezoidal rule",
  "metódou RK4": "by the RK4 method",
  "na polovicu": "by half",
  "nie je platné žiadne desatinné miesto": "no decimal place is correct",
  "obdĺžnikovej (stredovej) metódy": "the midpoint (rectangle) rule",
  "obdĺžnikovou (stredovou) metódou": "by the midpoint (rectangle) rule",
  "prvok ${@0}$": "the entry ${@0}$",
  "smernicu $a$": "the slope $a$",
  "sú platné {@0} desatinné miesta": "{@0} decimal places are correct",
  "sú to <strong>{@0}</strong> platné cifry": "that makes <strong>{@0}</strong> significant digits",
  "uzly {@0}.": "nodes {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Error estimate: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "by a factor of {@0}",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, error {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">error |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· Simpson: n must be even",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "Solve the problem {@0} by Euler's method with step $h={@1}$. Compute $y_2\\approx y({@2})$. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "Solve the problem {@0} by Heun's (improved Euler) method with step $h={@1}$. Compute $y_1\\approx y({@2})$. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "The time does not grow linearly with the number of unknowns: elimination needs about $\\frac{2}{3}n^3$ operations.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "The number ${@0}$ is replaced by the approximation ${@1}$. What is the absolute error of this approximation? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "The number ${@0}$ is replaced by the approximation ${@1}$. What is the relative error in percent? {@2}",
  "Štart x₀": "Start x₀"
 }
});
