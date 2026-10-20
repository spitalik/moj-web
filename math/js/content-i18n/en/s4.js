/* English: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/s4/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "s4-limita": {
   "title": "Limit of a function",
   "summary": "What the values of a function approach, calculating limits of the type 0/0 and limits at infinity.",
   "theory": [
    "<p>The notation $\\lim_{x\\to a} f(x) = L$ means that the values $f(x)$ get arbitrarily close to the number $L$ if we take $x$ close enough to $a$ (with $x\\neq a$).\n       The value of the function at the point $a$ itself <strong>does not matter</strong> for the limit; the function need not even be defined there.\n       The limit exists exactly when the <strong>one-sided limits</strong> $\\lim_{x\\to a^-} f(x)$ and $\\lim_{x\\to a^+} f(x)$ are equal.</p>",
    {
     "fig": "s4-limita",
     "caption": "The function $f(x)=\\frac{\\sin x}{x}$ is not defined at the point $0$ (empty circle), yet $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$. Make $h$ smaller and watch the values."
    },
    "<p><strong>How we calculate limits:</strong></p>\n       <ul><li>If $f$ is continuous at the point $a$ (a polynomial, $\\sin$, $\\mathrm{e}^x$ …), it is enough to substitute: $\\lim_{x\\to a} f(x) = f(a)$.</li>\n       <li>We rearrange an expression of the type $\\frac{0}{0}$: we factorise and cancel, or multiply a root expression to get a difference of squares.</li>\n       <li>An important limit: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, therefore $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>\n       <li>An expression $\\frac{c}{0}$ with $c\\neq 0$ leads to an infinite limit $\\pm\\infty$; we determine the sign from the one-sided limits.</li></ul>",
    "<p>For the <strong>limit at infinity</strong> of a rational function we divide both the numerator and the denominator by the highest power of $x$ in the denominator.\n       If the degrees are equal, the limit is the quotient of the leading coefficients; if the numerator has a lower degree, the limit is $0$.\n       For example $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. If $\\lim_{x\\to\\pm\\infty} f(x) = q$, the line $y=q$ is a horizontal asymptote of the graph.</p>"
   ],
   "examples": [
    {
     "task": "Calculate $\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$.",
     "steps": [
      "Substituting gives $\\frac{0}{0}$, so the expression has to be rearranged.",
      "We factorise the numerator: $x^2-9=(x-3)(x+3)$. For $x\\neq 3$ we cancel: $\\frac{(x-3)(x+3)}{x-3}=x+3$.",
      "$\\lim_{x\\to 3}(x+3)=6$.",
      "<strong>Result: 6</strong>"
     ]
    },
    {
     "task": "Calculate $\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$.",
     "steps": [
      "We divide both the numerator and the denominator by $x^2$: $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.",
      "The fractions $\\frac{1}{x}$, $\\frac{7}{x^2}$ and $\\frac{5}{x^2}$ tend to zero as $x\\to\\infty$.",
      "<strong>Result: $\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "Derivatives of basic functions",
   "summary": "Derivatives of exponential, logarithmic and trigonometric functions, of a product, a quotient and a composite function.",
   "theory": [
    "<p><strong>Derivatives of basic functions:</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\mathrm{tg}\\,x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>Rules:</strong> product $(u\\cdot v)'=u'v+uv'$, quotient $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ (for $v\\neq 0$),\n       composite function (chain rule) $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$ — we multiply the derivative of the “outer” function by the derivative of the “inner” one.\n       For example $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "The graphs of $y=\\mathrm{e}^x$ and $y=\\ln x$ are symmetric about the line $y=x$. The tangent to the graph of $\\mathrm{e}^x$ at the point $[0; 1]$ has gradient $\\mathrm{e}^0=1$, and the tangent to the graph of $\\ln x$ at the point $[1; 0]$ has gradient $\\frac{1}{1}=1$."
    },
    "<p>The <strong>tangent</strong> to the graph of a function $f$ at the point $[x_0; f(x_0)]$ has the equation $y=f(x_0)+f'(x_0)(x-x_0)$.</p>"
   ],
   "examples": [
    {
     "task": "Differentiate $f(x)=x^2\\sin x$.",
     "steps": [
      "It is a product of $u=x^2$, $v=\\sin x$, where $u'=2x$ and $v'=\\cos x$.",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "For $f(x)=\\ln(x^2+1)$, calculate $f'(1)$ and write the equation of the tangent at the point $x_0=1$.",
     "steps": [
      "A composite function: the outer function $\\ln u$ has the derivative $\\frac{1}{u}$, the inner function $u=x^2+1$ has the derivative $2x$.",
      "$f'(x)=\\frac{2x}{x^2+1}$, so $f'(1)=\\frac{2}{2}=1$.",
      "$f(1)=\\ln 2$, tangent: $y=\\ln 2+1\\cdot(x-1)$, i.e. $y=x-1+\\ln 2$."
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "Monotonicity and extrema of a function",
   "summary": "The sign of the derivative, stationary points, local and global extrema, optimisation problems.",
   "theory": [
    "<p>If $f'(x)&gt;0$ on an interval $I$, the function $f$ is <strong>increasing</strong> on it; if $f'(x)&lt;0$, it is <strong>decreasing</strong>.\n       Points at which $f'(x)=0$ are called <strong>stationary points</strong>. A function (with a derivative) can have a local extremum only at a stationary point.</p>",
    {
     "fig": "s4-extremy",
     "caption": "Graph of $f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$. Green parts: $f'&gt;0$, orange part: $f'&lt;0$. At the point $-1$ there is a local maximum $2$, at the point $1$ a local minimum $-2$."
    },
    "<p><strong>Deciding on an extremum:</strong> if $f'$ changes sign from $+$ to $-$, there is a <strong>local maximum</strong> at the point; a change from $-$ to $+$ means a <strong>local minimum</strong>.\n       The second derivative works just as well: $f'(x_0)=0$ and $f''(x_0)&lt;0$ gives a maximum, $f''(x_0)&gt;0$ a minimum.</p>",
    "<p><strong>Global extrema on a closed interval</strong> $\\langle a; b\\rangle$: we compare the values at the stationary points lying in the interval and at the end points $a$, $b$.\n       This is also how we solve <strong>optimisation problems</strong>: we express the quantity as a function of one variable and look for its greatest or least value.</p>"
   ],
   "examples": [
    {
     "task": "Find the local extrema of the function $f(x)=x^3-6x^2+9x+1$.",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$, and the stationary points are $1$ and $3$.",
      "On $(-\\infty; 1)$ we have $f'&gt;0$, on $(1; 3)$ $f'&lt;0$, on $(3; \\infty)$ $f'&gt;0$.",
      "At the point $1$ there is a local maximum $f(1)=5$, at the point $3$ a local minimum $f(3)=1$."
     ]
    },
    {
     "task": "We want to bend a wire of length $40\\,\\text{cm}$ into a rectangle with the largest possible area. What are its dimensions?",
     "steps": [
      "The sides are $x$ and $20-x$, the area is $S(x)=x(20-x)=20x-x^2$ for $x\\in(0; 20)$.",
      "$S'(x)=20-2x=0$ for $x=10$; $S''(x)=-2&lt;0$, so it is a maximum.",
      "<strong>The largest area belongs to the square $10\\times 10\\,\\text{cm}$, $S=100\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "Curve sketching",
   "summary": "Domain, parity, asymptotes, extrema, convexity and points of inflection.",
   "theory": [
    "<p>We <strong>investigate the behaviour of a function</strong> in steps:</p>\n       <ol><li>the domain $D(f)$, and where relevant whether it is even ($f(-x)=f(x)$) or odd ($f(-x)=-f(x)$) and periodic,</li>\n       <li>the intersections of the graph with the axes and the sign of the function,</li>\n       <li>the limits at the end points of $D(f)$ and the <strong>asymptotes</strong>,</li>\n       <li>$f'$: intervals of monotonicity and local extrema,</li>\n       <li>$f''$: the intervals where the function is <strong>convex</strong> ($f''&gt;0$) or <strong>concave</strong> ($f''&lt;0$), and the <strong>points of inflection</strong>, where the convexity changes,</li>\n       <li>a sketch of the graph.</li></ol>",
    "<p><strong>Asymptotes:</strong> the line $x=a$ is a vertical asymptote if $f(x)$ tends to $\\pm\\infty$ as $x\\to a^+$ or $x\\to a^-$ (typically a zero of the denominator).\n       The line $y=kx+q$ is an oblique asymptote if $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ and $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$; for $k=0$ it is the horizontal asymptote $y=q$.\n       The linear fractional function $f(x)=\\frac{ax+b}{cx+d}$ has the asymptotes $x=-\\frac{d}{c}$ and $y=\\frac{a}{c}$.</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "Graph of $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ with the asymptotes $x=1$ and $y=2$. The green points are the intersections with the axes, $[-\\frac{1}{2}; 0]$ and $[0; -1]$. The function is decreasing on $(-\\infty; 1)$ and on $(1; \\infty)$."
    },
    "<p>A convex function lies above each of its tangents (the graph “holds water”), a concave one below them.\n       A cubic polynomial $ax^3+bx^2+cx+d$ always has exactly one point of inflection, at $x=-\\frac{b}{3a}$.</p>"
   ],
   "examples": [
    {
     "task": "Find the point of inflection of the function $f(x)=x^3-3x^2+4$ and determine where it is convex.",
     "steps": [
      "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
      "$f''(x)=0$ for $x=1$; for $x&lt;1$ we have $f''&lt;0$, for $x&gt;1$ $f''&gt;0$.",
      "The point of inflection is $[1; f(1)]=[1; 2]$; the function is convex on $(1; \\infty)$ and concave on $(-\\infty; 1)$."
     ]
    },
    {
     "task": "Investigate the parity of the function $f(x)=\\frac{x}{x^2+1}$ and find its horizontal asymptote.",
     "steps": [
      "$D(f)=\\mathbb{R}$ is symmetric about zero and $f(-x)=\\frac{-x}{x^2+1}=-f(x)$, so the function is odd (the graph is symmetric about the origin).",
      "The numerator has a lower degree than the denominator, therefore $\\lim_{x\\to\\pm\\infty}f(x)=0$.",
      "The horizontal asymptote is $y=0$ (the $x$-axis)."
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "Area of a region and substitution in integrals",
   "summary": "The area of a region between two curves, integrals of elementary functions and linear substitution.",
   "theory": [
    "<p>If $f(x)\\le g(x)$ on the interval $\\langle a; b\\rangle$, the area of the region between the graphs is $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$ — “top minus bottom”.\n       The limits $a$, $b$ are usually the x-coordinates of the intersections of the graphs; we find them from the equation $f(x)=g(x)$.\n       If a function lies below the $x$-axis, its definite integral is negative, so the area is its absolute value.</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "The line $y=2x$ and the parabola $y=x^2$ intersect at $x=0$ and $x=2$. The area of the region is $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$."
    },
    "<p><strong>Integrals of elementary functions:</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>",
    "<p><strong>Linear substitution:</strong> if $F$ is an antiderivative of $f$, then $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$.\n       For example $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ or $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. We always check the result by differentiating.</p>"
   ],
   "examples": [
    {
     "task": "Calculate the area of the region bounded by the parabola $y=4-x^2$ and the $x$-axis.",
     "steps": [
      "Intersections with the axis: $4-x^2=0$, so $x=\\pm 2$. Between them the parabola is above the axis.",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "Calculate $\\int_0^{1} (2x+1)^2\\,dx$ using substitution.",
     "steps": [
      "Antiderivative: $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.",
      "Check by expanding: $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "Composite and inverse functions",
   "summary": "Composing functions, one-to-one functions, finding the inverse function and the symmetry of graphs about the line y = x.",
   "theory": [
    "<p>The <strong>composite function</strong> $f\\circ g$ is given by the rule $(f\\circ g)(x)=f(g(x))$: first we apply $g$ (the inner function), then $f$ (the outer function) to the result.\n       The order matters; in general $f\\circ g\\neq g\\circ f$. For example, for $f(x)=x^2$, $g(x)=x+1$ we get $f(g(x))=(x+1)^2$, but $g(f(x))=x^2+1$.</p>",
    "<p>A function is <strong>one-to-one</strong> if it assigns different values to different $x$ (every horizontal line crosses the graph at most once). Only a one-to-one function has\n       an <strong>inverse function</strong> $f^{-1}$, for which $f^{-1}(y)=x \\Leftrightarrow f(x)=y$. Moreover $D(f^{-1})=H(f)$ and $H(f^{-1})=D(f)$.</p>",
    "<p><strong>How to find</strong> $f^{-1}$: in the equation $y=f(x)$ we swap $x$ and $y$ and express $y$. For $f(x)=2x-6$: $x=2y-6$, so $f^{-1}(x)=\\frac{x+6}{2}$.\n       The graphs of $f$ and $f^{-1}$ are symmetric about the line $y=x$. The functions $a^x$ and $\\log_a x$ are also inverse to each other, therefore $a^{\\log_a x}=x$ and $\\log_a a^x=x$.</p>",
    {
     "fig": "s4-inverzna",
     "caption": "The graph of $y=a^x$ (blue) and the graph of the inverse function $y=\\log_a x$ (green). Every point $[u; v]$ of one graph has the image $[v; u]$ on the other graph."
    }
   ],
   "examples": [
    {
     "task": "Given $f(x)=x^2-1$ and $g(x)=3x+2$, calculate $(f\\circ g)(1)$ and $(g\\circ f)(1)$.",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$.",
      "The results differ — composition of functions is not commutative."
     ]
    },
    {
     "task": "Find the inverse function of $f(x)=\\frac{x+1}{x-2}$, $x\\neq 2$.",
     "steps": [
      "We swap the variables: $x=\\frac{y+1}{y-2}$.",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> (the function $f$ never takes the value $1$)."
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "Exponential and logarithmic equations",
   "summary": "Substitution, equations with different bases, taking logarithms and conditions for solvability.",
   "theory": [
    "<p><strong>Basic types of exponential equations:</strong></p>\n       <ul><li>the same base: $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ (for $a&gt;0$, $a\\neq 1$),</li>\n       <li><strong>substitution</strong>: we rewrite $4^x-6\\cdot 2^x+8=0$ using $t=2^x&gt;0$ as $t^2-6t+8=0$,</li>\n       <li><strong>different bases</strong>: we take logarithms of both sides, e.g. $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$; we rearrange the equation $c\\cdot a^x=d\\cdot b^x$ as $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$.</li></ul>",
    "<p><strong>Logarithmic equations:</strong> first we state the conditions (the argument of a logarithm must be positive), then we use the rules\n       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$, and from the equality $\\log_a u=c$ we get $u=a^c$.\n       We check every solution by substituting or by comparing it with the conditions — rearranging can create false roots.</p>",
    "<p>An equation with the expression $\\log_a x$ in different powers is solved by the substitution $t=\\log_a x$: from $(\\log x)^2-3\\log x+2=0$ we get $t\\in\\{1; 2\\}$, so $x\\in\\{10; 100\\}$.\n       Careful: $(\\log x)^2$ is not the same as $\\log x^2=2\\log x$.</p>"
   ],
   "examples": [
    {
     "task": "Solve the equation $9^x-4\\cdot 3^x+3=0$.",
     "steps": [
      "$9^x=(3^x)^2$, substitution $t=3^x&gt;0$: $t^2-4t+3=0$, so $t_1=1$, $t_2=3$.",
      "$3^x=1 \\Rightarrow x=0$; $3^x=3 \\Rightarrow x=1$.",
      "<strong>$K=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "Solve the equation $\\log_3(x+1)+\\log_3(x-1)=1$.",
     "steps": [
      "Conditions: $x+1&gt;0$ and $x-1&gt;0$, so $x&gt;1$.",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.",
      "Only $x=2$ satisfies the condition; we exclude the root $-2$.",
      "<strong>$K=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "Trigonometric equations",
   "summary": "Equations quadratic in sine or cosine, using identities and the general solution.",
   "theory": [
    "<p>The <strong>basic equations</strong> $\\sin x=a$, $\\cos x=a$ have a solution only for $a\\in\\langle -1; 1\\rangle$, usually two in each period $2\\pi$.\n       For example $\\sin x=\\frac{1}{2}$ has the solutions $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ in $\\langle 0; 2\\pi)$, and in general $x=\\frac{\\pi}{6}+2k\\pi$ or $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.\n       The equation $\\mathrm{tg}\\,x=a$ has a solution for every $a$ and its period is $\\pi$: $x=x_0+k\\pi$.</p>",
    "<p>We solve <strong>equations that are quadratic</strong> in $\\sin x$ or $\\cos x$ by substitution: $2\\sin^2 x-3\\sin x+1=0$ with $t=\\sin x$ gives $2t^2-3t+1=0$, so $t\\in\\{\\frac{1}{2}; 1\\}$.\n       We discard roots outside $\\langle -1; 1\\rangle$.</p>",
    "<p><strong>Useful identities:</strong> $\\sin^2 x+\\cos^2 x=1$ (turns the equation into one with a single function), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.\n       We <strong>take a common factor out of a bracket</strong> and never divide by it — we would lose the solutions where it is zero.</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "Solve the equation $2\\cos^2 x+3\\sin x-3=0$ for $x\\in\\langle 0; 2\\pi)$.",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$: $2-2\\sin^2 x+3\\sin x-3=0$, so $2\\sin^2 x-3\\sin x+1=0$.",
      "Substitution $t=\\sin x$: $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ or $x=\\frac{5\\pi}{6}$.",
      "<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "Solve the equation $\\sin 2x=\\cos x$ in $\\mathbb{R}$.",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ or $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$."
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "Systems of equations and inequalities",
   "summary": "Non-linear systems, intersections of curves and systems of inequalities in one and two variables.",
   "theory": [
    "<p>We usually solve a <strong>non-linear system</strong> by the <strong>substitution method</strong>: from the simpler (linear) equation we express one unknown and substitute it into the other.\n       The solutions are ordered pairs $[x; y]$; their number corresponds to the number of intersections of the graphs of the two equations. By Vieta's formulas, the system $x+y=s$, $xy=p$ leads to the equation $t^2-st+p=0$.</p>",
    "<p><strong>A system of inequalities in one unknown:</strong> we solve each inequality separately and the result is the <strong>intersection</strong> of the solution sets.\n       When multiplying or dividing by a negative number, the inequality sign is reversed.</p>",
    "<p><strong>A system of linear inequalities in two unknowns</strong> describes part of the plane: each inequality $y\\le kx+q$ is the half-plane below the line $y=kx+q$ (including the line).\n       The solution of the system is the intersection of the half-planes — often a polygon.</p>",
    {
     "fig": "s4-oblast",
     "caption": "The system $y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ describes a triangle with vertices $[-2; 0]$, $[4; 0]$ and $[1; 3]$. Its area is $\\frac{6\\cdot 3}{2}=9$."
    }
   ],
   "examples": [
    {
     "task": "Solve the system $x+y=7$, $x\\cdot y=10$.",
     "steps": [
      "From the first equation $y=7-x$; we substitute: $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.",
      "$x_1=2$, $x_2=5$, and correspondingly $y_1=5$, $y_2=2$.",
      "<strong>Solutions: $[2; 5]$ and $[5; 2]$</strong>"
     ]
    },
    {
     "task": "Solve the system of inequalities $3x-2&gt;4$ and $5-x\\ge -1$ in $\\mathbb{R}$.",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$.",
      "$-x\\ge -6 \\Rightarrow x\\le 6$ (dividing by a negative number reverses the sign).",
      "<strong>$K=(2; 6\\rangle$</strong>, and the integers in it are $3, 4, 5, 6$."
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "Equations and systems with a parameter",
   "summary": "Discussing the number of solutions depending on the parameter, quadratic equations and systems with a parameter.",
   "theory": [
    "<p>A <strong>parameter</strong> is a letter that stands for a fixed but arbitrary number in an equation. We solve the equation for all its values at once\n       and carry out a <strong>discussion</strong>: for which values of the parameter the equation has one, more or no solutions.\n       For example $px=3$ has the single solution $x=\\frac{3}{p}$ for $p\\neq 0$, and no solution for $p=0$.</p>",
    "<p>A <strong>quadratic equation</strong> $ax^2+bx+c=0$ with $a\\neq 0$ has two distinct real roots for $D&gt;0$, one double root for $D=0$ and no real root for $D&lt;0$.\n       If one root is known, we substitute it and get an equation for the parameter; the other root is then easy to find from Vieta's formulas $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$.\n       If the coefficient of $x^2$ contains the parameter, the case $a=0$ (the equation is linear) must be examined separately.</p>",
    "<p>A <strong>system of two linear equations</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$ has exactly one solution when $a_1b_2-a_2b_1\\neq 0$ (the lines intersect).\n       If $a_1b_2-a_2b_1=0$, the lines are parallel: either distinct (no solution) or identical (infinitely many solutions).</p>"
   ],
   "examples": [
    {
     "task": "For which values of the parameter $p$ does the equation $x^2-4x+p=0$ have two distinct real roots?",
     "steps": [
      "$D=16-4p$.",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.",
      "<strong>For $p\\in(-\\infty; 4)$</strong>; for $p=4$ it has the double root $2$, for $p&gt;4$ it has no real roots."
     ]
    },
    {
     "task": "For which $m$ does the system $mx+2y=4$, $2x+my=-4$ have no solution?",
     "steps": [
      "The determinant $m\\cdot m-2\\cdot 2=m^2-4=0$ for $m=\\pm 2$; otherwise the system has a single solution.",
      "$m=2$: $2x+2y=4$ and $2x+2y=-4$ are distinct parallel lines — no solution.",
      "$m=-2$: $-2x+2y=4$ and $2x-2y=-4$ are the same line — infinitely many solutions.",
      "<strong>The system has no solution for $m=2$.</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "Lines and circles in coordinate geometry",
   "summary": "The relative position of a line and a circle, intersections and the tangent to a circle.",
   "theory": [
    "<p>A circle with centre $S[m; n]$ and radius $r$ has the equation $(x-m)^2+(y-n)^2=r^2$. A line in the plane has the general equation $ax+by+c=0$,\n       where $\\vec{n}=(a; b)$ is its normal vector. The distance of the point $S[m; n]$ from the line is $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$.</p>",
    "<p><strong>Relative position:</strong> if $d&lt;r$, the line is a <strong>secant</strong> (2 common points); if $d=r$, it is a <strong>tangent</strong> (1 point); if $d&gt;r$, it is an <strong>external line</strong>.\n       We can find the same thing algebraically: substituting the line into the equation of the circle gives a quadratic equation, and its discriminant decides the number of intersections.</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "The circle $x^2+y^2=9$ and the line $y=-0.75x+q$. Move $q$: the line is a tangent exactly for $q=\\pm 3.75$, when the distance of the centre equals the radius."
    },
    "<p>The <strong>tangent at a point</strong> $T$ of a circle is perpendicular to the radius $ST$, so the vector $\\vec{ST}$ is its normal vector.\n       For the circle $x^2+y^2=r^2$ and a point $T[x_0; y_0]$ on it, the tangent has the equation $x_0x+y_0y=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Find the intersections of the circle $x^2+y^2=25$ and the line $x-y+1=0$.",
     "steps": [
      "From the equation of the line $y=x+1$; we substitute: $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.",
      "$x_1=3$, $x_2=-4$, and correspondingly $y_1=4$, $y_2=-3$.",
      "<strong>Intersections: $[3; 4]$ and $[-4; -3]$</strong>"
     ]
    },
    {
     "task": "Write the equation of the tangent to the circle $(x-1)^2+(y+2)^2=25$ at the point $T[4; 2]$.",
     "steps": [
      "Centre $S[1; -2]$, and $\\vec{ST}=(3; 4)$ is a normal vector of the tangent: $3x+4y+c=0$.",
      "We substitute $T$: $12+8+c=0$, so $c=-20$.",
      "<strong>Tangent: $3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "Relative positions of points, lines and planes",
   "summary": "Parallel, intersecting and skew lines, the position of a line and a plane, of two planes, and their description in coordinates.",
   "theory": [
    "<p><strong>Two lines in space</strong> are either <strong>identical</strong>, <strong>parallel</strong> (they lie in one plane and have no common point),\n       <strong>intersecting</strong> (they have exactly one common point) or <strong>skew</strong> — they have no common point and do not lie in one plane.\n       Skew lines do not exist in the plane, but in space they are common.</p>",
    {
     "fig": "s4-kocka",
     "caption": "The cube $ABCDEFGH$. The lines $AB$ (blue) and $CG$ (green) are skew, and so are the lines $AB$ and $EG$ (orange). The lines $CG$ and $EG$ intersect at the point $G$."
    },
    "<p><strong>A line and a plane:</strong> a line either lies in the plane, is parallel to it (they have no common point), or intersects it (one common point — the intersection).\n       A line is parallel to a plane if it is parallel to some line of that plane. <strong>Two planes</strong> are identical, distinct parallel planes, or intersecting — then they meet in a line.</p>",
    "<p><strong>In coordinates:</strong> a line has the parametric form $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$; a plane has the general equation $ax+by+cz+d=0$ with the normal vector $\\vec{n}=(a; b; c)$.\n       Lines whose direction vectors are multiples of each other are parallel or identical. A line is parallel to a plane or lies in it if $\\vec{u}\\cdot\\vec{n}=0$.\n       For calculations in a cube with edge $1$ we choose $A[0; 0; 0]$, $B[1; 0; 0]$, $D[0; 1; 0]$, $E[0; 0; 1]$.</p>"
   ],
   "examples": [
    {
     "task": "In the cube $ABCDEFGH$, determine the relative position of the lines $BG$ and $AH$.",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$ and $\\vec{AH}=H-A=(0; 1; 1)$ — the direction vectors are the same.",
      "The point $A$ does not lie on the line $BG$, so the lines do not coincide.",
      "<strong>The lines $BG$ and $AH$ are parallel</strong> (they lie in the plane $ABGH$)."
     ]
    },
    {
     "task": "Decide whether the point $Q[5; 1; -2]$ lies on the line $p: X=[1; 3; 0]+t\\,(2; -1; -1)$.",
     "steps": [
      "From the first coordinate: $1+2t=5$, so $t=2$.",
      "For $t=2$: $y=3-2=1$ ✓, $z=0-2=-2$ ✓.",
      "<strong>The point $Q$ lies on the line</strong> (parameter $t=2$)."
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "Angles and distances in space",
   "summary": "Distance between points, from a point to a line and to a plane, the angle between lines and between a line and a plane — mainly in a cube.",
   "theory": [
    "<p><strong>Distances:</strong> the distance between points is $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$. The distance of a point from a line is the length of the perpendicular to the line,\n       and the distance of a point $P$ from the plane $ax+by+cz+d=0$ is $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$.\n       In a cube with edge $a$: face diagonal $a\\sqrt2$, space diagonal $a\\sqrt3$.</p>",
    "<p>The <strong>angle between two lines</strong> (even skew ones) is the angle between their direction vectors, taken from $\\langle 0^\\circ; 90^\\circ\\rangle$:\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. The <strong>angle between a line and a plane</strong> is the angle between the line and its orthogonal projection onto the plane;\n       with the normal vector $\\vec{n}$ we have $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$.</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "The angle between the space diagonal $AG$ and the plane of the base is the angle between $AG$ and its projection $AC$. From the right triangle $ACG$: $\\mathrm{tg}\\,\\varphi=\\frac{a}{a\\sqrt2}$, so $\\varphi\\approx 35.26^\\circ$."
    },
    "<p>The <strong>cross product</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ is perpendicular to both vectors, and its magnitude is the area of the parallelogram spanned by them.\n       Therefore the distance of a point $P$ from the line $X=Q+t\\vec{u}$ is $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$, and a normal vector of the plane $QRS$ is $\\vec{QR}\\times\\vec{QS}$.</p>"
   ],
   "examples": [
    {
     "task": "The cube $ABCDEFGH$ has edge $a=6\\,\\text{cm}$. Calculate the distance of the vertex $A$ from the midpoint $K$ of the edge $GH$.",
     "steps": [
      "$A[0; 0; 0]$, $G[6; 6; 6]$, $H[0; 6; 6]$, so $K[3; 6; 6]$.",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Calculate the distance of the vertex $A$ from the plane $BDE$ in a cube with edge $a$.",
     "steps": [
      "$B[a; 0; 0]$, $D[0; a; 0]$, $E[0; 0; a]$ lie in the plane $x+y+z-a=0$.",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.",
      "It is one third of the space diagonal $AG$."
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "Prism, pyramid, cylinder, cone and sphere",
   "summary": "Properties of solids, right triangles inside solids, surface area and volume, cross-sections of a sphere.",
   "theory": [
    "<p>A <strong>prism</strong> and a <strong>cylinder</strong> have two congruent parallel bases: $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Cylinder: $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.\n       A <strong>pyramid</strong> and a <strong>cone</strong> have one base and an apex: $V=\\frac{1}{3}S_p\\cdot v$. A cone with slant height $s$: $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, where $s^2=r^2+v^2$.\n       <strong>Sphere</strong>: $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>",
    {
     "fig": "s4-ihlan",
     "caption": "A regular square pyramid: the height $v$, the slant height $v_s$ and half the edge $\\frac{a}{2}$ form a right triangle: $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. For the lateral edge $h$ we have $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$."
    },
    "<p>A <strong>regular square pyramid</strong> with base edge $a$ has $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ and $V=\\frac{1}{3}a^2v$.\n       The key to most problems is the right triangle — for example the height, half the diagonal of the base and the lateral edge: $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>",
    "<p>A <strong>cross-section of a sphere</strong> by a plane at distance $d$ from the centre is a disc with radius $\\rho=\\sqrt{r^2-d^2}$. A <strong>regular triangular prism</strong> has as its base\n       an equilateral triangle with area $\\frac{\\sqrt3}{4}a^2$.</p>"
   ],
   "examples": [
    {
     "task": "A regular square pyramid has base edge $a=10\\,\\text{cm}$ and height $v=12\\,\\text{cm}$. Calculate its surface area and volume.",
     "steps": [
      "Slant height: $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "A sphere with radius $r=10\\,\\text{cm}$ is cut by a plane at distance $6\\,\\text{cm}$ from the centre. What is the area of the cross-section?",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.",
      "$S=\\pi\\rho^2=64\\pi\\approx 201.06\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "Surface area and volume of more complex solids",
   "summary": "The frustum of a cone and of a pyramid, composite solids, similar solids and practical problems.",
   "theory": [
    "<p>A <strong>frustum of a cone</strong> with base radii $R$, $r$, height $v$ and slant height $s$: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, lateral surface $S_{pl}=\\pi s(R+r)$,\n       surface area $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. We find the slant height from the trapezoidal axial section: $s^2=v^2+(R-r)^2$.</p>",
    {
     "fig": "s4-zrezany",
     "caption": "A frustum of a cone is formed by cutting off the top part of a cone by a plane parallel to the base. The height $v$, the difference of the radii $R-r$ and the slant height $s$ form a right triangle."
    },
    "<p>A <strong>frustum of a pyramid</strong> with base areas $S_1$, $S_2$ and height $v$ has the volume $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$;\n       for a regular square frustum with edges $a_1$, $a_2$ we get $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.\n       We split a <strong>composite solid</strong> into known solids and add the volumes (subtracting cavities). Careful with the surface area: the faces where the parts touch are not part of the surface.</p>",
    "<p><strong>Similar solids</strong> with scale factor $k$ have surface areas in the ratio $k^2$ and volumes in the ratio $k^3$. If we double all the dimensions,\n       the surface area becomes 4 times larger and the volume 8 times larger. When metal is melted down and recast, the volume is preserved.</p>"
   ],
   "examples": [
    {
     "task": "A bucket has the shape of a frustum of a cone with radii $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ and height $v=30\\,\\text{cm}$. How many litres does it hold?",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14.9\\,\\ell$."
     ]
    },
    {
     "task": "A silo has the shape of a cylinder with radius $3\\,\\text{m}$ and height $8\\,\\text{m}$, topped by a hemisphere with the same radius. Calculate the volume of the silo.",
     "steps": [
      "Cylinder: $\\pi\\cdot 9\\cdot 8=72\\pi$.",
      "Hemisphere: $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.",
      "<strong>$V=90\\pi\\approx 282.74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "Statistical data sets, variables, tables and charts",
   "summary": "Population and variable, absolute and relative frequency, frequency tables, charts and reading them.",
   "theory": [
    "<p>A <strong>statistical data set</strong> (population) is the set of objects studied (statistical units); their number $n$ is the <strong>size of the data set</strong>.\n       The property observed is a <strong>statistical variable</strong>: <strong>qualitative</strong> (in words — colour, brand, field of study) or <strong>quantitative</strong> (numerical).\n       A quantitative variable is <strong>discrete</strong> if it takes only isolated values (number of siblings), or <strong>continuous</strong> if it can take any value from an interval (height, time).</p>",
    "<p>The <strong>absolute frequency</strong> $n_i$ of a value is the number of units with this value, and the <strong>relative frequency</strong> is $f_i=\\frac{n_i}{n}$ (often as a percentage).\n       The sum of all $n_i$ is $n$, the sum of the $f_i$ is $1$. We record the data in a <strong>frequency table</strong>.</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "Bar chart of the marks in a class of $28$ students. For example, $9$ students have the mark $2$, so the relative frequency is $\\frac{9}{28}\\approx 32.1\\,\\%$."
    },
    "<p><strong>Charts:</strong> bar chart (frequencies of values), pie chart (the sector for a value has the central angle $f_i\\cdot 360^\\circ$), histogram (for a continuous variable divided into intervals)\n       and line chart (development over time). When <strong>interpreting</strong> them, watch out for an axis that does not start at zero — small differences then look huge.</p>"
   ],
   "examples": [
    {
     "task": "A table shows how students travel to school: bus 12, car 5, bicycle 3, on foot 10. What part of the pie chart (central angle) does the bus take up?",
     "steps": [
      "$n=12+5+3+10=30$.",
      "$f=\\frac{12}{30}=0.4=40\\,\\%$.",
      "Central angle: $0.4\\cdot 360^\\circ=144^\\circ$."
     ]
    },
    {
     "task": "Using the bar chart above, calculate the average mark of the class.",
     "steps": [
      "$n=6+9+7+4+2=28$.",
      "Sum of the marks: $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.",
      "$\\bar{x}=\\frac{71}{28}\\approx 2.54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "Mean, median, mode and variance",
   "summary": "Measures of location and spread: mean, median, mode, quartiles, variance and standard deviation.",
   "theory": [
    "<p><strong>Measures of location:</strong> the arithmetic mean $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (weighted, from a table: $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),\n       the <strong>median</strong> — the middle value of the ordered data (for even $n$ the mean of the two middle values) and the <strong>mode</strong> — the most frequent value.\n       Unlike the mean, the median is not affected by extreme values (e.g. one very high salary).</p>",
    "<p><strong>Measures of spread:</strong> the range $R=x_{\\max}-x_{\\min}$, the <strong>variance</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       (the mean of the squared deviations from the mean, also $s^2=\\overline{x^2}-\\bar{x}^2$) and the <strong>standard deviation</strong> $s=\\sqrt{s^2}$, which has the same unit as the data.</p>",
    "<p><strong>Quartiles:</strong> the lower quartile $Q_1$ is the median of the lower half of the data, the upper quartile $Q_3$ the median of the upper half.\n       The middle half of the data lies between $Q_1$ and $Q_3$; their difference $Q_3-Q_1$ is the interquartile range. The five numbers (min, $Q_1$, median, $Q_3$, max) are shown by a box plot.</p>",
    {
     "fig": "s4-krabica",
     "caption": "Box plot of the data $2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$: minimum $2$, $Q_1=5$, median $7$, $Q_3=9$, maximum $14$."
    }
   ],
   "examples": [
    {
     "task": "Calculate the mean, the median and the mode of the data $3, 8, 5, 3, 6, 9, 3, 7$.",
     "steps": [
      "We put them in order: $3, 3, 3, 5, 6, 7, 8, 9$; $n=8$.",
      "$\\bar{x}=\\frac{44}{8}=5.5$.",
      "Median $=\\frac{5+6}{2}=5.5$, mode $=3$ (it occurs three times)."
     ]
    },
    {
     "task": "Calculate the variance and the standard deviation of the data $4, 6, 7, 9, 9$.",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$. Deviations: $-3, -1, 0, 2, 2$.",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3.6$.",
      "$s=\\sqrt{3.6}\\approx 1.90$."
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "Counting problems",
   "summary": "Variations, permutations and combinations with and without repetition in typical problems.",
   "theory": [
    "<p><strong>Multiplication rule of counting:</strong> if we choose the first thing in $m$ ways and for each of them the second thing in $n$ ways, there are $m\\cdot n$ pairs.\n       We use the <strong>addition rule</strong> when the possibilities exclude each other. In harder problems we split into cases (e.g. by the last digit) and add them up.</p>",
    "<table class=\"tbl\"><tr><th></th><th>without repetition</th><th>with repetition</th></tr>\n       <tr><td>variations of $k$ elements from $n$ (the order matters)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>permutations (arranging all of them)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>combinations of $k$ elements from $n$ (the order does not matter)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>How to decide:</strong> does the order matter (a code, assigning roles, a number)? If yes, it is variations or permutations; if not (choosing a group, drawing balls at once), it is combinations.\n       In numbers made of digits, zero must not be in the first place. Useful: $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (e.g. the number of handshakes between $n$ people).</p>"
   ],
   "examples": [
    {
     "task": "How many three-digit numbers with different digits can we form from the digits $0, 1, 2, 3, 4$?",
     "steps": [
      "Zero must not be in the first place: $4$ possibilities.",
      "In the second place the $4$ remaining digits (including zero), in the third $3$.",
      "<strong>$4\\cdot 4\\cdot 3=48$ numbers</strong>"
     ]
    },
    {
     "task": "From 8 boys and 6 girls we choose a four-member committee with 2 boys and 2 girls. How many possibilities are there?",
     "steps": [
      "We can choose the boys in $\\binom{8}{2}=28$ ways and the girls in $\\binom{6}{2}=15$ ways.",
      "The choices are independent, so we use the multiplication rule.",
      "<strong>$28\\cdot 15=420$ possibilities</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "Probability and independent events",
   "summary": "Classical probability, the complementary event, the union of events and the product of probabilities of independent events.",
   "theory": [
    "<p><strong>Classical definition:</strong> if an experiment has $n$ equally likely outcomes and the event $A$ occurs in $m$ of them, $P(A)=\\frac{m}{n}$.\n       It holds that $0\\le P(A)\\le 1$. We often find the numbers $m$ and $n$ by counting, e.g. when drawing $k$ balls at once the outcomes are the combinations $\\binom{n}{k}$.</p>",
    "<p><strong>Complementary event</strong> $A'$ (the event $A$ does not occur): $P(A')=1-P(A)$. In particular, we solve problems of the type “at least once” through the complementary event “not even once”.\n       <strong>Union</strong>: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$; for mutually exclusive events (they cannot occur at the same time) $P(A\\cap B)=0$.</p>",
    "<p>Events $A$ and $B$ are <strong>independent</strong> if the outcome of one does not change the probability of the other; then $P(A\\cap B)=P(A)\\cdot P(B)$.\n       Typical examples are repeated throws, shots by different shooters or drawing with replacement. The probability that an event with probability $p$ occurs at least once in $n$ independent trials is $1-(1-p)^n$.</p>"
   ],
   "examples": [
    {
     "task": "An urn contains balls: 5 white and 3 black. We draw two at once. What is the probability that both are white?",
     "steps": [
      "All pairs: $\\binom{8}{2}=28$, favourable: $\\binom{5}{2}=10$.",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0.357$."
     ]
    },
    {
     "task": "Two shooters hit a target with probabilities $0.8$ and $0.7$ (independently). What is the probability that the target is hit?",
     "steps": [
      "Complementary event: both miss, $P=0.2\\cdot 0.3=0.06$.",
      "<strong>$P=1-0.06=0.94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "Binomial distribution",
   "summary": "Repeated independent trials, the probability of k successes, expected value and variance.",
   "theory": [
    "<p>We repeat an experiment with two outcomes (success with probability $p$, failure with $1-p$) $n$ times independently. The random variable $X$ — the number of successes —\n       has the <strong>binomial distribution</strong> $X\\sim Bi(n; p)$ and $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ for $k=0, 1, \\dots, n$.\n       The binomial coefficient gives the number of ways the successful trials can be placed among the $n$ trials.</p>",
    "<p>The <strong>expected value</strong> (the expected number of successes) is $E(X)=np$, the <strong>variance</strong> $D(X)=np(1-p)$ and the standard deviation $\\sigma=\\sqrt{np(1-p)}$.\n       We calculate “at least one success” through the complementary event: $P(X\\ge 1)=1-(1-p)^n$, and “at most $k$” as the sum $P(X=0)+\\dots+P(X=k)$.</p>",
    {
     "fig": "s4-binom",
     "caption": "The bars show $P(X=k)$ for $Bi(n; p)$; the green bar is the most likely value. For larger $n$ the shape approaches the bell curve of the <strong>normal distribution</strong> (orange) with mean $np$ and standard deviation $\\sqrt{np(1-p)}$."
    }
   ],
   "examples": [
    {
     "task": "A student guesses the answers in a test with 5 questions, each with 4 options (one correct). What is the probability of getting exactly 2 answers right?",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$.",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.",
      "$P\\approx 0.2637$"
     ]
    },
    {
     "task": "A product is faulty with probability $0.1$. How many faulty products do we expect in a delivery of 50 items, and what is the variance?",
     "steps": [
      "$E(X)=np=50\\cdot 0.1=5$ products.",
      "$D(X)=np(1-p)=50\\cdot 0.1\\cdot 0.9=4.5$, $\\sigma\\approx 2.12$."
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "School-leaving exam: number sets, expressions and equations",
   "summary": "Mixed problems on numbers, simplifying expressions and equations from all years.",
   "theory": [
    "<p><strong>What you need to know — numbers:</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, divisibility (GCD, LCM, primes), set operations and $|A\\cup B|=|A|+|B|-|A\\cap B|$,\n         absolute value as a distance on the number line, intervals, powers $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, roots $\\sqrt[n]{a}=a^{1/n}$ and rationalising denominators.</p>",
    "<p><strong>Expressions:</strong> the formulas $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, factorising by taking out a common factor and by formulas,\n         cancelling rational expressions — always with <strong>conditions</strong> (denominator $\\neq 0$).</p>",
    "<p><strong>Equations:</strong> linear (equivalent transformations), quadratic $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ and Vieta's formulas, equations with the unknown in the denominator,\n         under a square root (squaring and a <strong>check</strong>), with absolute value (method of zero points), exponential and logarithmic ($\\log_a x=c \\Leftrightarrow x=a^c$).</p>"
   ],
   "examples": [
    {
     "task": "Solve the equation $\\sqrt{x+7}=x+1$.",
     "steps": [
      "Condition $x+1\\ge 0$. We square both sides: $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.",
      "$x_1=2$, $x_2=-3$.",
      "Check: $\\sqrt9=3$ ✓; for $-3$ the right-hand side is negative ✗. <strong>$K=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "Simplify $\\dfrac{x^2-9}{x^2+3x}$ and state the conditions.",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$, conditions $x\\neq 0$, $x\\neq -3$.",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "School-leaving exam: inequalities and systems of equations",
   "summary": "Mixed problems on inequalities and systems of equations and inequalities.",
   "theory": [
    "<p><strong>Inequalities:</strong> when multiplying or dividing by a negative number, the sign is reversed. We solve a quadratic inequality using the roots and the shape of the parabola:\n         for $a&gt;0$, $ax^2+bx+c&lt;0$ between the roots. We solve quotient and product inequalities by the <strong>method of zero points</strong> (a sign table),\n         and inequalities with absolute value by splitting into intervals or via $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$.</p>",
    "<p><strong>Systems of equations:</strong> the substitution and elimination methods, and with three unknowns successive elimination. A linear system of two equations has one, no or\n         infinitely many solutions (intersecting, parallel, identical lines). In non-linear systems we express an unknown from the linear equation and substitute.</p>",
    "<p><strong>Typical mistakes:</strong> forgotten conditions, dividing by an expression containing the unknown (it can be negative or zero), combining the results incorrectly — for a system of inequalities we take the <strong>intersection</strong>, for “or” the union.</p>"
   ],
   "examples": [
    {
     "task": "Solve the inequality $\\dfrac{x-2}{x+1}\\le 0$.",
     "steps": [
      "Zero points: $2$ (numerator) and $-1$ (denominator, which is excluded).",
      "Signs: on $(-\\infty; -1)$ $+$, on $(-1; 2)$ $-$, on $(2; \\infty)$ $+$.",
      "<strong>$K=(-1; 2\\rangle$</strong>"
     ]
    },
    {
     "task": "Solve the system $2x+3y=12$, $x-y=1$.",
     "steps": [
      "From the second equation $x=y+1$; we substitute: $2y+2+3y=12 \\Rightarrow y=2$.",
      "$x=3$. <strong>Solution $[3; 2]$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "School-leaving exam: functions and their graphs",
   "summary": "Mixed problems on functions: linear, quadratic, rational, exponential, logarithmic and their properties.",
   "theory": [
    "<p><strong>Properties of a function:</strong> domain and range, monotonicity, parity, boundedness, extrema, being one-to-one and the inverse function (symmetry about $y=x$).</p>",
    "<p><strong>Overview of functions:</strong> linear $y=kx+q$ ($k$ — gradient, $q$ — intercept on the $y$-axis); quadratic $y=a(x-m)^2+n$ with vertex $V[m; n]$;\n         linear fractional $y=\\frac{ax+b}{cx+d}$ (a hyperbola with asymptotes); exponential $y=a^x$ (increasing for $a&gt;1$, decreasing for $0&lt;a&lt;1$, $H=(0; \\infty)$)\n         and logarithmic $y=\\log_a x$ ($D=(0; \\infty)$, passes through the point $[1; 0]$); trigonometric functions with period $2\\pi$ (tangent $\\pi$).</p>",
    "<p><strong>Shifting graphs:</strong> $f(x-a)$ shifts the graph by $a$ to the right, $f(x)+b$ by $b$ upwards, $-f(x)$ is a reflection in the $x$-axis, $|f(x)|$ flips the negative parts upwards.</p>"
   ],
   "examples": [
    {
     "task": "Find the vertex of the parabola $y=x^2-6x+5$ and the range of the function.",
     "steps": [
      "Completing the square: $y=(x-3)^2-4$.",
      "Vertex $V[3; -4]$, and the parabola opens upwards.",
      "<strong>$H(f)=\\langle -4; \\infty)$</strong>"
     ]
    },
    {
     "task": "Find the domain of the function $f(x)=\\log_2(6-2x)$.",
     "steps": [
      "The argument of the logarithm must be positive: $6-2x&gt;0$.",
      "<strong>$x&lt;3$, so $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "School-leaving exam: plane geometry, solid geometry and coordinate geometry",
   "summary": "Mixed problems on geometry in the plane, in space and coordinate geometry.",
   "theory": [
    "<p><strong>Plane geometry:</strong> the angles in a triangle add up to $180^\\circ$, Pythagoras' and Euclid's theorems, similar triangles (criteria $SSS$, $SAS$, $AA$),\n         areas ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, Heron's formula), the disc ($S=\\pi r^2$, $o=2\\pi r$, sector $\\frac{\\alpha}{360^\\circ}\\pi r^2$), inscribed and central angles.</p>",
    "<p><strong>Solid geometry:</strong> volumes $V=S_pv$ (prism, cylinder), $V=\\frac{1}{3}S_pv$ (pyramid, cone), $V=\\frac{4}{3}\\pi r^3$ (sphere); surface areas; the relative position of lines and planes,\n         angles and distances — we always look for a suitable right triangle.</p>",
    "<p><strong>Coordinate geometry:</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, the midpoint of a segment, vectors and the dot product ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),\n         equations of a line (parametric, general $ax+by+c=0$, gradient–intercept $y=kx+q$), the distance of a point from a line, the circle $(x-m)^2+(y-n)^2=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "Find the general equation of the line passing through the points $A[1; 2]$ and $B[4; -4]$.",
     "steps": [
      "Direction vector $\\vec{AB}=(3; -6)\\sim(1; -2)$, normal vector $(2; 1)$.",
      "$2x+y+c=0$; we substitute $A$: $2+2+c=0$, $c=-4$.",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "A cylinder has volume $72\\pi\\,\\text{cm}^3$ and height $8\\,\\text{cm}$. What is the radius of its base?",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "School-leaving exam: trigonometric functions and trigonometry",
   "summary": "Mixed problems on trigonometric functions, equations and solving triangles.",
   "theory": [
    "<p><strong>Trigonometric functions:</strong> radian measure $180^\\circ=\\pi\\,\\text{rad}$, the unit circle, signs in the quadrants, values for $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$,\n         periodicity, parity ($\\cos$ even, $\\sin$ and $\\mathrm{tg}$ odd).</p>",
    "<p><strong>Formulas:</strong> $\\sin^2 x+\\cos^2 x=1$, $\\mathrm{tg}\\,x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,\n         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Trigonometric equations: substitution, taking out a common factor, the general solution with $k\\in\\mathbb{Z}$.</p>",
    "<p><strong>Trigonometry:</strong> in a right triangle the definitions of $\\sin$, $\\cos$, $\\mathrm{tg}$; in a general triangle the <strong>sine rule</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ and the <strong>cosine rule</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>"
   ],
   "examples": [
    {
     "task": "A triangle has sides $a=5$, $b=8$ and the angle $\\gamma=60^\\circ$. Calculate the side $c$.",
     "steps": [
      "Cosine rule: $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "If $\\cos x=-\\frac{3}{5}$ and $x\\in(\\frac{\\pi}{2}; \\pi)$, calculate $\\sin x$ and $\\mathrm{tg}\\,x$.",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$; in quadrant II sine is positive: $\\sin x=\\frac{4}{5}$.",
      "$\\mathrm{tg}\\,x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$."
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "School-leaving exam: sequences, combinatorics and probability",
   "summary": "Mixed problems on sequences, financial mathematics, combinatorics, probability and statistics.",
   "theory": [
    "<p><strong>Sequences:</strong> arithmetic $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$; geometric $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$);\n         infinite geometric series $s=\\frac{a_1}{1-q}$ for $|q|&lt;1$.</p>",
    "<p><strong>Financial mathematics:</strong> compound interest $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (with tax on interest the effective rate is lower), regular saving and repayments as the sum of a geometric sequence,\n         percentages and per mille.</p>",
    "<p><strong>Combinatorics and probability:</strong> variations, permutations, combinations (also with repetition), $P(A)=\\frac{m}{n}$, the complementary event, independent events, the binomial distribution.\n         <strong>Statistics:</strong> mean, median, mode, variance, standard deviation, reading tables and charts.</p>"
   ],
   "examples": [
    {
     "task": "A deposit of $2\\,000\\,€$ earns $3\\,\\%$ interest per year (compound interest). How much will be in the account after 5 years?",
     "steps": [
      "$K_5=2000\\cdot 1.03^5$.",
      "$1.03^5\\approx 1.159274$.",
      "<strong>$K_5\\approx 2\\,318.55\\,€$</strong>"
     ]
    },
    {
     "task": "In an arithmetic sequence, $a_3=7$ and $a_7=19$. Calculate $a_1$ and the sum of the first 10 terms.",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.",
      "$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$."
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "School-leaving exam: standard problems and complex examples",
   "summary": "Multi-step problems that combine several topics: optimisation, finance, sequences, coordinate geometry, probability and derivatives.",
   "theory": [
    "<p><strong>How to tackle a complex problem:</strong></p>\n       <ol><li>Read the problem twice and write down what is given and what is asked for (including units).</li>\n       <li>Make a sketch or a table; name the unknowns.</li>\n       <li>Split the problem into smaller steps — often it is a chain of familiar procedures (e.g. “set up the function → differentiate → find the maximum”).</li>\n       <li>Check the result: by substituting, by estimating the order of magnitude, by checking the conditions (a length is positive, a probability lies in $\\langle 0; 1\\rangle$).</li></ol>",
    "<p><strong>Common combinations of topics:</strong> optimisation (geometry + derivatives), interest and saving (percentages + geometric sequence + logarithms),\n       a triangle in coordinates (vectors + area + distance), choosing a group and probability (combinations + complementary event), the tangent to a graph (derivative + equation of a line).</p>",
    "<p><strong>Extra useful formulas:</strong> the area of a triangle $ABC$ in coordinates $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,\n       the tangent $y=f(x_0)+f'(x_0)(x-x_0)$, the number of years for compound interest $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>"
   ],
   "examples": [
    {
     "task": "From a square sheet of metal with side $30\\,\\text{cm}$ we cut congruent squares out of the corners and fold up an open box. What is the largest volume it can have?",
     "steps": [
      "With the side of the cut-out square $x$: $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ (the value $15$ does not belong to the interval).",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "After how many years does a deposit first double with annual interest of $4\\,\\%$?",
     "steps": [
      "We look for the smallest $n$ for which $1.04^n\\ge 2$.",
      "$n\\ge\\frac{\\ln 2}{\\ln 1.04}\\approx 17.67$.",
      "<strong>After 18 years.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ and $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$, so $f(-x)=-f(x)$.",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$. First $g({@2})={@3}\\cdot {@4}{@5}={@6}$, then $f({@7})={@8}{@9}^2{@10}={@11}$.",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$. First $f({@2})={@3}{@4}^2{@5}={@6}$, then $g({@7})={@8}\\cdot {@9}{@10}={@11}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ for $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ for $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ for $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ for $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, so $k={@5}$.",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$. The equation is then $({@2})^2=0$ with the double root ${@3}$.",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$. The condition {@1} gives {@2}.",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (the first hits and the second does not, or the other way round).",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Deviations from the mean: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$; within one period the solutions are $\\frac{\\pi}{3}$ and $-\\frac{\\pi}{3}$, the period of cosine is $2\\pi$.",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$ and $(-x)^2=x^2$, so $f(-x)=f(x)$.",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\mathrm{tg}\\,x=1$ or $\\mathrm{tg}\\,x=-1$, so $x=\\frac{\\pi}{4}+k\\pi$ or $x=-\\frac{\\pi}{4}+k\\pi$. Together these are points $\\frac{\\pi}{2}$ apart.",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, which holds for $\\frac{\\pi}{6}$; the period of tangent is $\\pi$.",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$; sine is positive in quadrants I and II, so $\\frac{\\pi}{4}$ and $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, period $2\\pi$.",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$; the solutions $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ repeat with period $\\pi$ as $\\pm\\frac{\\pi}{6}+k\\pi$.",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, from $S=\\frac{|AB|\\cdot v_c}{2}$ we get $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$. The inequality $f''(x)&gt;0$ gives ${@1}$, so the function is convex on {@2}.",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ has the roots ${@1}$ and ${@2}$. {@3} We compare the values: {@4}. {@5} of them is ${@6}$.",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ for $x={@2}$ and the second derivative changes sign there. $f({@3})={@4}$, the point of inflection is $[{@5}; {@6}]$.",
  "$f'(x)={@0}$.": "$f'(x)={@0}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$, the stationary points are ${@4}$ and ${@5}$. The derivative has the signs {@6} on the intervals $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. The {@11} is therefore at the point $x={@12}$ and $f({@13})={@14}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$. The derivative is {@4} between the roots ${@5}$ and ${@6}$ and {@7} outside them. The function is {@8} on {@9}.",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$. Since $\\cos 0=1$ and $\\mathrm{e}^0=1$, we have $f'(0)={@3}{@4}={@5}$.",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$. Since $\\sin 0=0$ and $\\mathrm{e}^0=1$, we have $f'(0)=0{@3}={@4}$.",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$ equals neither $f(1)=\\mathrm{e}$ nor $-\\mathrm{e}$.",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, the even powers “absorb” the change of sign.",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$, which is neither $f(x)$ nor $-f(x)$.",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$, the expression contains only odd powers.",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$ and $f(-1)={@1}$; neither of the equalities $f(-1)=f(1)$, $f(-1)=-f(1)$ holds.",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Tangent: $y={@5}+{@6}(x-{@7})$, so $y={@8}$.",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$ is the number $x$ for which $f(x)={@1}$. We solve $\\dfrac{{@2}}{{@3}}={@4}$: after multiplying by the denominators we get a linear equation with the solution $x={@5}$. Check: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ is {@1} in the ordered data set. Cumulative frequencies: {@2}. The median is ${@3}$.",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$. Weighted arithmetic mean: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "${@0} x={@1}$ for $x\\in\\{{@2}\\}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$, substitution $t={@2}^{x}$, where $t&gt;0$: ${@3}=0$, roots $t_1={@4}$, $t_2={@5}$. {@6}From ${@7}^{x}={@8}$ we get $x={@9}${@10}. $K=\\{{@11}\\}$.",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "(Enter the result as a fraction or as a decimal rounded to 3 decimal places.)",
  "(otočíme znak)": "(we reverse the sign)",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": ", area $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": ", the hypotenuse is ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": ", from ${@0}^{x}={@1}$ we get $x={@2}$",
  "0 alebo 5": "0 or 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · the points [1; {@2}] and [{@3}; 1] are symmetric about y = x",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0, the function increases</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">Topic: {@0}</span><br>{@1}",
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
  "ANANÁS": "ANNEAL",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "If substituting gives $\\frac{0}{0}$, factorise the numerator. One of the factors cancels with the denominator.",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "How long is the side parallel to the wall then (in metres)?",
  "Aká dlhá je prepona v cm?": "How long is the hypotenuse in cm?",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "How long is the base of the triangle on the $x$-axis?",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "How long must the side parallel to the wall be for the area to be the largest (in metres)?",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "What is the $y$-coordinate of the point with $x={@0}$?",
  "Aká je pravdepodobnosť, že obaja minú?": "What is the probability that both miss?",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "What is the probability that the first misses and the second hits?",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "What is the probability that the first hits and the second misses?",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "What is the probability that at least one hits the target?",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "What is the probability that exactly one hits the target?",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "What is the probability that there will be at least one girl in the selection? {@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "What is the probability that a six does not come up at all? Round the result to 4 decimal places.",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "What is the probability that a six comes up at least once? Round the result to 3 decimal places.",
  "Aká je pravdepodobnosť? {@0}": "What is the probability? {@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "So what is the value of the limit? Enter it as a fraction.",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "What is the height of the triangle (the y-coordinate of the intersection point of the two lines)?",
  "Aké je najmenšie celé číslo v prieniku?": "What is the smallest integer in the intersection?",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "What is the smallest integer that satisfies it?",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "What are the coordinates of the point $K$ (in cm)? Enter $x$; $y$; $z$.",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "What length (in cm) must the side of the cut-out squares have for the box to have the largest volume?",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "What is the value of the derivative of the term ${@0}$ at the point $0$?",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "What is the value of the denominator of the derivative $({@0})^2$ at the point ${@1}$?",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "What is the value of the inner function ${@0}$ at the point ${@1}$?",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "What is the value of the term $uv'$ at the point $0$?",
  "Aký je absolútny člen $q$?": "What is the constant term $q$?",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "What is the largest volume of the box in $\\text{cm}^3$?",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "What is the largest area of the plot (in $\\text{m}^2$)?",
  "Aký je obsah oblasti?": "What is the area of the region?",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "What is the area of the shape? Enter a fraction or an integer.",
  "Aký je parameter $p$?": "What is the parameter $p$?",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "What is the size of the data set $n$ (the number of all pupils)?",
  "Aký je stredový uhol výseče v stupňoch?": "What is the central angle of the sector in degrees?",
  "Aký je súčet vekov po príchode nového člena?": "What is the sum of the ages after the new member arrives?",
  "Aký je súčet vekov pôvodných členov?": "What is the sum of the ages of the original members?",
  "Aký je súčet známok všetkých žiakov?": "What is the sum of the marks of all the pupils?",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "What is the product of the factorials of the numbers of repeated letters?",
  "Aký je teda exponent ${@0}$?": "So what is the exponent ${@0}$?",
  "Aký je štatistický znak „{@0}“?": "What kind of statistical variable is “{@0}”?",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "What is the largest volume (in $\\text{cm}^3$) the box can have?",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "What is the largest area (in $\\text{m}^2$) the plot can have?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "What central angle (in degrees) will the sector “bus” have in the pie chart?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "What central angle (in degrees) will the sector “car” have in the pie chart?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "What central angle (in degrees) will the sector “bicycle” have in the pie chart?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "What central angle (in degrees) will the sector “on foot” have in the pie chart?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "What central angle (in degrees) will the sector “train” have in the pie chart?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "What central angle (in degrees) will the sector “{@0}” have in the pie chart?",
  "Akým číslom sa suma na účte každý rok vynásobí?": "By what number is the amount in the account multiplied each year?",
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
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "A basketball player scores a free throw with probability ${@0}$, the throws are independent. He shoots {@1} times; $X$ is the number of successful throws.",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "White and black can come in two orders. When drawing at once, rather count unordered pairs: you choose the white and the black ball independently.",
  "Binomické rozdelenie": "Binomial distribution",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "The point $T[{@0}; {@1}]$ lies on the circle $k: {@2}$. The tangent to the circle at the point $T$ has the equation ${@3}+c=0$. Calculate $c$.",
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
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "The integers ${@0}, \\dots, {@1}$ — there are ${@2}$ of them.",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "You choose the boys and the girls independently (combinations, because the order does not matter) and multiply the numbers.",
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
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "The functions $f(x)={@0}$ and $g(x)={@1}$ are given. Calculate $({@2})({@3})$.",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "The data set is: ${@0}$. Find its {@1}.",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "The domain $(0; \\infty)$ is not symmetric about zero, so the function can be neither even nor odd.",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "You are dividing by a negative number, so the inequality sign reverses.",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "The derivative is $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. What is $f'({@4})$?",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "Quotient rule: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. At the point ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "The derivative of sine is cosine without a minus: $(\\sin x)'=\\cos x$. The minus belongs to the derivative of cosine.",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "The derivative of a product is not the product of the derivatives: $(u\\cdot v)'=u'v+uv'$, not $u'\\cdot v'$.",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "Product rule: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Since $\\mathrm{e}^0=1$, we have $f'(0)={@3}$.",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "Product rule: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Since $\\ln 1=0$, we have $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "Chain rule: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. At the point ${@4}$ the inner function is ${@5}\\cdot {@6}{@7}={@8}$, so $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "The determinant of the system is $m^2-{@0}$, it is zero for $m=\\pm {@1}$ (otherwise the system has a unique solution). For $m={@2}$ the left-hand sides of the equations are proportional, but the right-hand sides ${@3}$ and ${@4}$ are not: the lines are parallel and distinct, no solution exists. For $m={@5}$ the second equation is $(-1)$ times the first: the lines coincide, there are infinitely many solutions. Answer: $m={@6}$.",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "The determinant of the vectors $\\vec{AB}$ and $\\vec{AC}$ gives the area of a parallelogram. The area of the triangle is half of it.",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "The discriminant is $D=b^2-4ac$. Do not forget the four in front of the product $ac$.",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "The discriminant is $D=b^2-4ac$. From the equation $D=0$ you still have to divide $c$ by four.",
  "Do vnútra intervalu patrí {@0}.": "Inside the interval lies {@0}.",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "The formula for the lateral surface $\\pi rs$ uses the slant height of the cone $s$, not the height $v$.",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "Substituting $y={@0}$ you get the equation ${@1}=0$. What is its discriminant?",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "Substituting gives $\\frac{0}{0}$. The denominator is a difference of squares: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. After cancelling $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "Substituting gives $\\frac{0}{0}$, which is not zero but an indeterminate form. Factorise the denominator as a difference of squares and cancel.",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "Substituting gave $\\frac{0}{0}$, which is not zero but an indeterminate form. Factorise the numerator and cancel.",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "You substituted the centre of the circle. The tangent does not pass through the centre, it passes through the point of tangency $T$.",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "You cannot substitute, the denominator tends to zero. Dividing by a number close to zero gives numbers that are very large in absolute value.",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "We substitute ${@0}^2 x=1-{@1}^2 x$ and simplify: ${@2}{@3}{@4}=0$.",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "Substitute $-x$ for $x$ and compare $f(-x)$ with $f(x)$ and with $-f(x)$. Also check whether the domain is symmetric about zero.",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "Substitute the point $P$ into the expression ${@0}$. What value do you get?",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "Substitute the point ${@0}$ into the left-hand side of the equation of the plane. What is the absolute value of the result?",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "Substitute the coordinates of the point $P$ into the equation of the plane and express $d$.",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "The tangent is perpendicular to the radius $ST$. Substitute the coordinates of the point $T$ into the given equation.",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "The square of the ratio of lengths applies to the surface area. But the volume is preserved, and it depends on the cube.",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "The second inequality has the solution $x\\le d$. What is the number $d$?",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "The second coordinate of the point of inflection is the function value $f({@0})$, not the value $f''({@1})$.",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "The second root of the numerator is $-c$; the product of the roots is ${@0}$.",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "Two shooters each fire one shot independently. The first hits the target with probability ${@0}$, the second with probability ${@1}$. What is the probability that {@2}?",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "There is a double root when $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "Lengths are not subtracted directly. The radius of the sphere is the hypotenuse of a right-angled triangle, use Pythagoras' theorem.",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "The side lengths of a right-angled triangle form an arithmetic sequence and its perimeter is ${@0}\\,\\text{cm}$. Calculate {@1}.",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">most likely k = {@3}</span>",
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
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "The exponential function and its inverse, the logarithmic function",
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
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "The function $f(x)=\\dfrac{{@0}}{{@1}}$ is one-to-one. Calculate $f^{-1}\\!\\left({@2}\\right)$.",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "The function $f(x)={@0}$ has exactly one {@1}. Find the point at which it attains it: enter $x$ and $f(x)$ (e.g. 2; -5).",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "A function is convex where $f''(x)&gt;0$. Calculate the second derivative and solve the linear inequality.",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "The positions are different, so it matters who is the chair and who is the treasurer. These are variations, not combinations.",
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
  "Graf": "Graph",
  "Graf funkcie sin x / x s dierou v bode 0": "Graph of the function sin x / x with a hole at 0",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "Graph of the function x cubed minus 3x with its extremes",
  "Graf racionálnej funkcie s asymptotami": "Graph of a rational function with asymptotes",
  "Grafy funkcií e na x a ln x s dotyčnicami": "Graphs of the functions e to the x and ln x with tangents",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "We draw the balls at once, i.e. without replacement. After a white one is drawn, there is one white ball fewer in the urn.",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "A sphere with radius $r={@0}\\,\\text{cm}$ is cut by a plane at a distance of ${@1}\\,\\text{cm}$ from the centre of the sphere. Calculate {@2}",
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
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "The value ${@0}$ is a root of $V'(x)$, but it does not belong to the admissible interval: the box would have no bottom.",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "The value ${@0}$ lies outside $\\langle -1; 1\\rangle$, it gives no solution.",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "You can find the value of the inverse function without its formula: you are looking for $x$ for which $f(x)$ gives the given number.",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "The values are integers obtained by counting, there is no other possible value between two neighbouring ones.",
  "Hodnoty sú slová (kategórie), nie čísla.": "The values are words (categories), not numbers.",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "The values of this variable are words (categories), not numbers.",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "The values of this variable are numbers, so the variable is quantitative.",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "We obtain the values by measuring and they can be any number from some interval.",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "We obtain the values by measuring, they can be any number from some interval (including decimals).",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "We obtain the values by counting, they are only integers. There is no other possible value between two neighbouring values.",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "We throw two dice at once. What is the probability that {@0}? {@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "The boundary of the interval of convexity is a point of inflection, where $f''(x)=0$. Check where the second derivative is zero.",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "The limits of the integral are the zero points of the parabola. The function is even, you can calculate $2\\int_0^{m}$.",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "A prism has two bases, the top and the bottom. Count the area of the base twice.",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "The edges increase by ${@0}\\,\\%$, but the {@1} grows faster: the scale factor must be raised to a power.",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "A player throws a die {@0} times. What is the probability that a six comes up at least once? Round the result to 3 decimal places.",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "A player throws a die {@0} times. The random variable $X$ is the number of throws in which a six came up.",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "A player recorded the number of points in individual matches: ${@0}$. What is the mode of this data set?",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "The auditorium of a summer amphitheatre has {@0} {@1} in the first row and each further row has {@2} {@3} more. At least how many rows must be built so that there are at least {@4} seats in total?",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "We are looking for the value of the function, not the point $x$ at which it is attained.",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "We are looking for $t$ such that $A+t\\vec{u}=Q$. From the first equation {@0} we get $t={@1}$. The other equations: {@2} and {@3} — {@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "We are looking for the smallest natural $n$ for which ${@0}^n\\ge {@1}$. Taking logarithms: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, so $n={@5}$.",
  "Ide o permutácie: ${@0}!={@1}$.": "These are permutations: ${@0}!={@1}$.",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "Look for the point of inflection where $f''(x)=0$ and the second derivative changes sign.",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "You integrated only from $0$ to ${@0}$, which is half of the shape. The lower limit is the other zero point of the parabola.",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "Integrate as a power, $\\frac{u^{n+1}}{n+1}$, and divide the result by the coefficient of $x$ inside the bracket.",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "The integral of a power is $\\frac{u^{{@0}}}{{@1}}$: the exponent increases by one and at the same time you divide by it.",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "The inverse of the exponential function is the logarithmic function. You are looking for $x$ for which ${@0}^{{@1}}{@2}={@3}$.",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "The inverse of the function $f(x)={@0}$ has the form $f^{-1}(x)=kx+q$. Enter $k$ and $q$ (e.g. 1/2; -3).",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "The inverse function undoes the operations in reverse order: multiplication becomes division. Swap $x$ and $y$ and express $y$.",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "Inverse function: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "The event “at least one success” is complementary to the event “no success”.",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "The event “at least one white” also includes the case when one is white and one is black. Use the complementary event “both black”.",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "The events “the first hits” and “the second hits” can occur at the same time: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Or use the complementary event.",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "The function $f(x)={@0}^{{@1}}{@2}$ is given. Calculate $f^{-1}({@3})$.",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "Is the function $f(x)={@0}$ even, odd, or neither?",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "One person can hold at most one position, so you choose the next position only from the remaining people.",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "One coordinate is not enough: the same $t$ must satisfy all three equations. Check $y$ and $z$ too.",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "We seat one person anywhere (we do not distinguish rotations) and arrange the other {@0}: $({@1}-1)!={@2}!={@3}$.",
  "KAJAK": "KAJAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "The candidates are the stationary points inside the interval and both end points. Calculate the function values at them and compare them.",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "Each handshake is a pair of people, the order does not matter: $\\binom{n}{2}$. Set up a quadratic equation.",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "You counted each diagonal twice, from both of its end vertices. Divide the result by two.",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "Multiply each mark by the number of pupils who got it, add the results and divide by the number of all pupils.",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "Every year the amount is multiplied by $1+\\frac{p}{100}$ — it is a geometric sequence.",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "We join each vertex with the $n-3$ non-adjacent vertices, and so we count each diagonal twice: $\\frac{n(n-3)}{2}$. {@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "If all the letters were different, there would be $n!$ of them. Swapping identical letters gives no new word, so divide by the factorials of the numbers of repeated letters.",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "The cube $ABCDEFGH$ has edge $a={@0}\\,\\text{cm}$.",
  "Kocka ABCDEFGH s vyznačenými priamkami": "Cube ABCDEFGH with lines marked",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "Cube with a space diagonal and its angle with the base plane",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "We distinguish the dice: $[1; 2]$ and $[2; 1]$ are two different outcomes. Count both orders.",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "The scale factor is $k={@0}$. How many times does the {@1} increase? Enter a number to 4 decimal places.",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "The scale factor is $k={@0}$. The {@1} changes $k^{{@2}}={@3}$ times, so it increases by ${@4}\\,\\%$.",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "A convex polygon has {@0} diagonals. How many vertices does it have?",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "The root $t_2={@0}$ is negative and the equation ${@1}^{x}={@2}$ has no solution.",
  "Koľko celých čísel ju spĺňa?": "How many integers satisfy it?",
  "Koľko celých čísel leží v prieniku?": "How many integers lie in the intersection?",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "How many euros will be in the account after {@0} years? Round the result to cents.",
  "Koľko je $f'(0)$?": "What is $f'(0)$?",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "What is $f'({@0})$? Enter an integer or a fraction.",
  "Koľko je $x=f^{-1}({@0})$?": "What is $x=f^{-1}({@0})$?",
  "Koľko je ${@0}!$?": "What is ${@0}!$?",
  "Koľko je spolu možností?": "How many possibilities are there in total?",
  "Koľko je trojíc, v ktorých sú len chlapci?": "How many triples consist of boys only?",
  "Koľko je všetkých trojíc?": "How many triples are there in total?",
  "Koľko je všetkých výberov dvoch gúľ?": "How many selections of two balls are there in total?",
  "Koľko percent to je?": "What percentage is that?",
  "Koľko percent žiakov odpovedalo „autobus“?": "What percentage of pupils answered “bus”?",
  "Koľko percent žiakov odpovedalo „auto“?": "What percentage of pupils answered “car”?",
  "Koľko percent žiakov odpovedalo „bicykel“?": "What percentage of pupils answered “bicycle”?",
  "Koľko percent žiakov odpovedalo „pešo“?": "What percentage of pupils answered “on foot”?",
  "Koľko percent žiakov odpovedalo „vlak“?": "What percentage of pupils answered “train”?",
  "Koľko percent žiakov odpovedalo „{@0}“?": "What percentage of pupils answered “{@0}”?",
  "Koľko rokov má nový člen?": "How old is the new member?",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "How many different “words” (even meaningless ones) can be formed by rearranging all the letters of the word {@0}?",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "How many diagonals does a convex {@0}-gon have?",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "How many {@0} {@1}numbers can be formed from the digits {@2} if the digits {@3}?",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "At least how many times must we throw a die for the probability that a six comes up at least once to be greater than ${@0}$?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "In how many ways can {@0} people sit in a row on {@1} chairs?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "In how many ways can {@0} people sit around a round table if we only distinguish who sits next to whom (rotating the whole arrangement changes nothing)?",
  "Koľkými spôsobmi vyberieme chlapcov?": "In how many ways can we choose the boys?",
  "Koľkými spôsobmi vyberieme dievčatá?": "In how many ways can we choose the girls?",
  "Krabicový graf": "Box plot",
  "Kružnica a priamka": "A circle and a line",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "Which of the roots satisfy the conditions? Enter all the solutions of the equation.",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "Which root of $V'(x)$ lies in the interval $(0; {@0})$?",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "Which expression gives all the solutions of the equation ${@0}$ in $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "The quadratic function $f'$ has the opposite sign to its leading coefficient between its roots.",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "A quadratic equation has a double root exactly when the discriminant is zero.",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "Does the point $Q{@0}$ lie on the line $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?",
  "Lokálne maximum": "Local maximum",
  "Lokálne minimum": "Local minimum",
  "MATEMATIKA": "MATEMATIKA",
  "Medián je priemer {@0}. a {@1}. hodnoty": "The median is the mean of the values in positions {@0} and {@1}",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "The median is the mean of the values in positions {@0} and {@1}: $\\frac{{@2}+{@3}}{2}={@4}$.",
  "Medián je {@0}. hodnota": "The median is the value in position {@0}",
  "Medián je {@0}. hodnota: ${@1}$.": "The median is the value in position {@0}: ${@1}$.",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "The median is not the middle one of the marks 1 to 5. It is the middle value when you line up the marks of all the pupils in order.",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "The denominator is zero for $x={@0}$ and the numerator is not zero there (because $ad-bc={@1}\\neq 0$), so $x={@2}$ is a vertical asymptote. For $x\\to\\pm\\infty$, $f(x)$ approaches the quotient of the coefficients of $x$: $\\frac{{@3}}{{@4}}={@5}$, the horizontal asymptote is $y={@6}$.",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "We factorise the denominator: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. After cancelling, $\\frac{1}{\\sqrt{x}+{@3}}$ remains. What is the value of $\\sqrt{x}+{@4}$ for $x={@5}$?",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "Skew lines do not lie in one plane. Try to find a face or a section of the cube in which both lines lie.",
  "Množina riešení sústavy troch lineárnych nerovníc": "Solution set of a system of three linear inequalities",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "Put the powers with the same exponent $x$ on one side, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, and then take logarithms of both sides.",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "The mode is the value with the highest frequency. Count how many times each value occurs.",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "On which interval is the function $f(x)={@0}$ convex?",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "On which intervals is the function $f(x)={@0}$ {@1}?",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "The order does not matter, these are combinations: we choose the boys in $\\binom{{@0}}{{@1}}={@2}$ ways and the girls in $\\binom{{@3}}{{@4}}={@5}$ ways. By the product rule there are ${@6}\\cdot {@7}={@8}$ possibilities in total.",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "In the first position we can put {@0} ({@1} {@2}), in the further positions {@3}. Altogether ${@4}={@5}$.",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "At a meeting every participant shook hands with every other participant exactly once. There were {@0} handshakes. How many people were at the meeting?",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "There is a stationary point on this interval at which $f'$ changes sign, so the function is not monotonic there.",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "There is only a hemisphere on the cylinder, its volume is half the volume of the sphere.",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "We deposited ${@0}\\,€$ in an account with an annual interest rate of ${@1}\\,\\%$, the interest is credited once a year and left in the account (we ignore tax). How many euros will be in the account after {@2} years? Round the result to cents.",
  "Najmenšie celé číslo v ňom je ${@0}$.": "The smallest integer in it is ${@0}$.",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "First find the values of $m$ for which the determinant $m\\cdot m-k\\cdot k$ is zero. Then substitute each of them for $m$ and compare the equations.",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "First find the intersection points, then integrate the difference “upper minus lower” function.",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "First decide whether the values are words or numbers. For numbers, distinguish counting (discrete) and measuring (continuous).",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "First calculate the slant height $s$ from the right-angled triangle with legs $v$ and $R-r$. The surface consists of two bases and the lateral surface $\\pi s(R+r)$.",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "First calculate the inner function: ${@0}({@1})$.",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "The value ${@0}$ occurs most often (three times), the other values at most twice. The mode is ${@1}$.",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "For example $f(1)={@0}$ and $f(-1)={@1}$; neither $f(-1)=f(1)$ nor $f(-1)=-f(1)$ holds.",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "Write the equation of the tangent to the graph of the function $f(x)={@0}$ at the point with $x$-coordinate $x_0={@1}$ in the form $y=kx+q$. Enter $k$ and $q$.",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "Sketch the lines and find the vertices of the region as intersection points of the boundary lines. The region is a triangle.",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "Let $u={@0}$, $v=\\ln x$. What is the value of the term $u'v={@1}\\ln x$ at the point $1$?",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "Let $u={@0}$, $v=\\mathrm{e}^x$. What is the value of the term $u'v$ at the point $0$?",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "Let $x$ be the length of the sides perpendicular to the wall. The side parallel to the wall has length ${@0}-2x$ and the area is $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ for $x={@4}$ and $S''=-4&lt;0$, so it is a maximum. The dimensions are ${@5}\\,\\text{m}$ and ${@6}\\,\\text{m}$, the area ${@7}\\,\\text{m}^2$.",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "An odd function satisfies $f(-x)=-f(x)$ for all $x$ in the domain. Substitute, for example, $x=1$ and $x=-1$ and compare.",
  "Newton-Leibnizova formula: {@0}": "Newton–Leibniz formula: {@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "Do not forget the coefficient ${@0}$ in the denominator: the expression is $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "Do not forget the middle term $Rr$ in the bracket: $R^2+Rr+r^2$.",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "Do not forget the middle term $a_1a_2$, i.e. $\\sqrt{S_1S_2}$.",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "They are not multiples of each other, so the planes intersect.",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Some letters repeat and swapping them does not create a new word. Divide by the factorials of the numbers of repeated letters.",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "Find the point of inflection of the function $f(x)={@0}$. Enter its coordinates $x$ and $y$ (e.g. 1; -4).",
  "Nájdi korene derivácie $f'(x)={@0}$.": "Find the roots of the derivative $f'(x)={@0}$.",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "Find the antiderivative ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) and substitute the limits.",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "Find the stationary points of the function, i.e. the roots of the equation $f'(x)={@0}=0$.",
  "O koľko percent sa {@0} zväčší? {@1}": "By what percentage does the {@0} increase? {@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "Both parts are odd functions, so their sum is too: $f(-x)=-f(x)$.",
  "Objem": "Volume",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "The volume of a sphere is $\\frac{4}{3}\\pi r^3$, do not forget the coefficient $\\frac{4}{3}$.",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "The volume is $V(x)=x({@0}-2x)^2$. For which $x$ from the interval $(0; {@1})$ is $V'(x)=0$?",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "The volume is $V(x)=x({@0}-2x)^2$. Factorise the derivative as $V'(x)=({@1}-2x)({@2}-cx)$. What is the number $c$?",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "The volume of a cone is a third of the volume of a cylinder with the same base and height. Add the volumes of the parts.",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "The volume of the cone is not $\\pi r^2 w$, but only a third of it.",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "The volume of the material is the difference of the volumes of two cylinders of the same height.",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "The volume of a hemisphere is half the volume of a sphere, i.e. $\\frac{2}{3}\\pi r^3$. Add the volumes of the parts.",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "The volume is preserved: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, so $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "The area is $S(x)=x({@0}-2x)$, where $x$ is the side perpendicular to the wall. For which $x$ is $S'(x)=0$?",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "Area of the cross-section: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "The area of an equilateral triangle with side $a$ is $\\frac{\\sqrt3}{4}a^2$. The lateral surface of the prism consists of three congruent rectangles.",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "The area of a triangle is half the product of the base and the height. Do not forget to divide by two.",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "Calculate the area from the vectors $\\vec{AB}$ and $\\vec{AC}$ (half the absolute value of the determinant), then the height from the formula $S=\\frac{c\\cdot v_c}{2}$.",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "We subtract the hollow from the volume of the full cylinder: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "A lead ball with radius ${@0}\\,\\text{cm}$ was melted down into identical small balls with radius ${@1}\\,\\text{cm}$. How many small balls were made (without loss of material)?",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "Complementary event (both miss): ${@0}\\cdot {@1}={@2}$, so $P=1-{@3}={@4}$.",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "The complementary event is $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Therefore $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "The complementary event “both black” has $\\binom{{@0}}{2}={@1}$ selections, so there are ${@2}-{@3}={@4}$ favourable ones.",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "Complementary event: a six does not come up at all, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. The required probability is $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "Check this expression: substitute $k=0$ and $k=1$ and see whether you get solutions of the equation. Also check whether the expression leaves out any solution from one period.",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "Let $x$ be the side perpendicular to the wall, express the other side from the length of the fence and the area as a function of $x$. Then look for where its derivative is zero.",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "The parabola $y={@0}$ and the line $y={@1}$ have two common points. Enter the coordinates of the one with the smaller $x$-coordinate (e.g. -1; 4).",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "Percentages do not add up. Raise the coefficient $k={@0}$ to the {@1} power and only then convert to a percentage.",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "You do not need fencing on all four sides: the wall forms one side, only three need to be fenced.",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "The lateral surface consists of three rectangles ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "After substituting $x={@0}$ the expression is $\\frac{0}{0}$, so we factorise the numerator: ${@1}={@2}{@3}$. For $x\\neq {@4}$ we cancel and get $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "After how many years does the deposit at least {@0} for the first time?",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "After removing the logarithms you get $({@0})({@1})={@2}$. Enter the roots of this quadratic equation.",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "After the arrival the choir has ${@0}$ members, so the new sum is ${@1}\\cdot {@2}$.",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "After the substitution $t={@0} x$ you get ${@1}=0$. Enter its roots (a fraction e.g. as 1/2).",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "After the substitution $t={@0}$ solve the equation ${@1}=0$. Enter its roots $t$.",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "After the substitution $t={@0}^{x}$ solve the equation ${@1}=0$. Enter its roots $t$.",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "After taking ${@0}$ out of the bracket: for which $x$ from {@1} is ${@2}=0$?",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "After cancelling, the expression ${@0}$ remains, and you still have to substitute $x={@1}$ into it.",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "After cancelling, $\\sqrt{x}+{@0}$ remains in the denominator, not just $\\sqrt{x}$. Substitute $x={@1}$ into the whole sum.",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "After cancelling the factor ${@0}$, ${@1}$ remains. What is the value of this expression for $x={@2}$?",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "After swapping the variables we have $x={@0}$. What is the coefficient $k$ of $x$ in the expression $y=kx+q$?",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "There are $\\binom{n}{2}=\\frac{n(n-1)}{2}$ handshakes. From the equation $\\frac{n(n-1)}{2}={@0}$ we get $n^2-n-{@1}=0$, the positive root is $n={@2}$.",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "The quotient of the leading coefficients decides only for the same degree. Here the numerator has a lower degree, so after dividing by the highest power of the denominator the whole numerator tends to zero.",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "Condition $x&gt;0$. Substitution $t={@0}$: ${@1}=0$, so $t_1={@2}$, $t_2={@3}$. From ${@4}={@5}$ we get $x={@6}^{{@7}}={@8}$ and from ${@9}={@10}$ we get $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "The conditions give $x&gt;c$. What is the number $c$?",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "Conditions: ${@0}&gt;0$ and ${@1}&gt;0$, so $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. The roots are ${@10}$ and ${@11}$; only $x={@12}$ satisfies the condition. $K=\\{{@13}\\}$.",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "The base is an equilateral triangle, not a square: its area is $\\frac{\\sqrt3}{4}a^2$.",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "The base is an equilateral triangle: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "By Vieta's formula the sum of the roots is $x_1+x_2=-p$, not $p$. Watch the sign.",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "The radius of the sphere, the distance of the plane from the centre and the radius of the cross-section form a right-angled triangle (the radius of the sphere is the hypotenuse).",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "Radius of the cross-section: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}",
  "Polož diskriminant rovný nule.": "Set the discriminant equal to zero.",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "Using $\\sin^2 x+\\cos^2 x=1$ rewrite the equation in terms of ${@0} x$ only.",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "Also compare the values of the function at the end points of the interval, the global extreme may be right there.",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "Compare the directions of the lines. If they are not parallel, find out whether they lie in one plane (e.g. in a face or a diagonal section of the cube).",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "Compare the degrees of the numerator and the denominator. For the same degree the leading coefficients decide.",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "Compare these values with the values at the stationary points inside the interval. What is the {@0} value?",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "Compare the distance of the centre from the line with the radius. The radius is the square root of the right-hand side of the equation of the circle, i.e. $r={@0}$, not ${@1}$. Also watch the signs of the coordinates of the centre.",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "We compare the right-hand sides: ${@0}={@1} \\Rightarrow {@2}=0$, roots $x={@3}$ and $x={@4}$. For $x={@5}$ we have $y={@6}\\cdot {@7}{@8}={@9}$. The intersection points are $[{@10}; {@11}]$ and $[{@12}; {@13}]$.",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "We need $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, i.e. $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. We take logarithms (the logarithm of a number less than 1 is negative, so the sign reverses): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. The smallest integer $n$ is ${@4}$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "Use $(u\\cdot v)'=u'v+uv'$ and $(\\ln x)'=\\frac{1}{x}$. Do not forget that $\\ln 1=0$.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "Use $(u\\cdot v)'=u'v+uv'$ and $(\\mathrm{e}^x)'=\\mathrm{e}^x$.",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "Use $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Use $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "Use $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. In the numerator the terms with $x$ are subtracted.",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "Use $\\sin 2x=2\\sin x\\cos x$, move everything to one side and take the common factor out of the bracket. Do not divide by it!",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "Use the complementary event: the probability that a six does not come up in any of the throws is $\\left(\\frac{5}{6}\\right)^n$.",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "Use the formula $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, where $Q$ is a point of the line. Or find a triangle in which the required distance is a height.",
  "Povrch": "Surface area",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "The surface area of a sphere is ${@0}\\pi\\,\\text{cm}^2$. Its volume can be written as $V=k\\pi\\,\\text{cm}^3$. Calculate $k$.",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "Watch the sign of the denominator: for $x$ just {@0} of ${@1}$ the denominator ${@2}$ is {@3}. Combine it with the sign of the numerator.",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "Careful, $R^2-r^2$ is not the same as $(R-r)^2$. Subtract the volumes of the two cylinders.",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "Careful, $\\cos\\pi=-1$, not $1$. So the values of the antiderivative at the limits do not cancel out to zero.",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "Careful, $\\ln 1=0$, because $\\mathrm{e}^0=1$. The value of the antiderivative at the lower limit is zero.",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "Careful, $\\ln 1=0$, not $1$ (because $\\mathrm{e}^0=1$). So the first term $u'v$ is zero at the point $1$.",
  "Počet pokusov n": "Number of trials n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "The number of diagonals of an $n$-gon is $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (all segments joining vertices minus the sides).",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "The number of arrangements of $n$ different elements is $n!$.",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "The numbers of seats form an arithmetic sequence with $a_1={@0}$, $d={@1}$. The sum $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ leads to the quadratic inequality ${@5}\\ge 0$. The positive root is approximately ${@6}$, so $n={@7}$. Check: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "You calculated in the opposite order. For $({@0})(x)$, {@1} (the inner function) is applied first and its result is substituted into {@2}.",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "Work with sums: sum = mean · count. Compare the sum before and after the new member arrives.",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "The probabilities of the individual throws do not add up (with 6 throws you would get certainty). Use the complementary event “not once”.",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "The probabilities of missing are ${@0}$ and ${@1}$. {@2}",
  "Pravdepodobnosť p": "Probability p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "A regular triangular prism has base edge $a={@0}\\,\\text{cm}$ and height $v={@1}\\,\\text{cm}$. Calculate its {@2}. {@3}",
  "Pravidelný štvorboký ihlan": "Regular square pyramid",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "A regular square pyramid has base edge $a={@0}\\,\\text{cm}$ and height $v={@1}\\,\\text{cm}$. Calculate {@2}.{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "A regular square frustum of a pyramid has base edges $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ and height $v={@2}\\,\\text{cm}$. Calculate its volume in $\\text{cm}^3$.{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "For $x\\to {@0}^{{@1}}$ we have $x {@2} {@3}$, so the denominator ${@4}$ is {@5} and tends to zero. The numerator ${@6}$ is {@7}, so the fraction grows in absolute value beyond all bounds with the sign {@8}: the limit is {@9}.",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "For $x\\to\\infty$ it is not the constant terms that decide but the terms with the highest power of $x$.",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "For $x\\to\\pm\\infty$ the coefficients of $x$ decide, not the constant terms.",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "For what value of the parameter $c$ does the equation $x^2{@0}+c=0$ have a double root?",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "For the binomial distribution $E(X)=np$ and $D(X)=np(1-p)$.",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "For the function $f(x)=({@0})\\,\\mathrm{e}^{x}$ calculate $f'(0)$.",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "For the function $f(x)=({@0})\\ln x$ calculate $f'(1)$.",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "For the function $f(x)=({@0})^{{@1}}$ calculate $f'({@2})$.",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "For the function $f(x)=\\dfrac{{@0}}{{@1}}$ calculate $f'({@2})$. Enter the result as an integer or a fraction.",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "For the function $f(x)={@0}{@1}$ calculate $f'(0)$.",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "For the roots from the interval $\\langle -1; 1\\rangle$ find all $x$ in degrees from {@0}.",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "For which $x$ is the bracket ${@0} {@1}$ zero?",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "For which values of the parameter $p$ does the equation $x^2+px+{@0}=0$ have a double root? Enter all the values separated by a semicolon.",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "For which values of the parameter $p$ does the equation $x^2{@0}+p=0$ have {@1}?",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "For a frustum of a pyramid $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; with square bases $\\sqrt{S_1S_2}=a_1a_2$.",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "Before finding the median, the data must be sorted by size.",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "You choose the chair from $n$ people, the vice-chair only from those remaining, the treasurer from those remaining after that.",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "Imagine the plane as a section of the cube. A line lies in it if two of its points lie in it; it is parallel if it is parallel to some line of the plane.",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "Imagine all the marks sorted from the best. The median is the middle value (for an even number, the mean of the two middle ones).",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "For $(f\\circ g)(x)=f(g(x))$ you first calculate the inner function $g$ and substitute its result into $f$.",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "When differentiating a power the exponent decreases by one: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "With a linear substitution the result must be divided by the coefficient of $x$, i.e. by ${@0}$.",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "For independent events the probabilities of occurring together are multiplied. For “at least one” use the complementary event.",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "At a round table, seatings that differ only by a rotation are the same. Fix one person.",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "Under a similarity with scale factor $k$ the {@0}. Convert the resulting multiple to a percentage.",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "Melting down preserves the volume. The ratio of the volumes of similar solids is the cube of the ratio of lengths.",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "Along a straight wall we want to fence a rectangular plot, the wall forms one of its sides. We have ${@0}\\,\\text{m}$ of fencing. {@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "With side $x$ of the cut-out square the box has the bottom $({@0}-2x)^2$ and height $x$: $V(x)=x({@1}-2x)^2$ for $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, in the interval it is zero only for $x={@7}$ (the sign changes there from $+$ to $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "When expressing $y$ you must divide the whole right-hand side by ${@0}$, including the constant term.",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "For a composite function multiply by the derivative of the inside: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "The line $p: {@0}=0$ intersects the circle $k: {@1}$ at two points. Enter the $x$-coordinates of both intersection points separated by a semicolon.",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "A line is parallel to a plane only if its direction vector is perpendicular to the normal vector of the plane ($\\vec u\\cdot\\vec n=0$). Calculate this scalar product.",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "A line lies in a plane only if two of its points lie in it. Check both end points.",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "A line intersects a plane only if $\\vec u\\cdot\\vec n\\neq 0$. Calculate the scalar product of the direction and normal vectors.",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "The lines $y={@0}$ and $y={@1}$ cross the $x$-axis at the points $[{@2}; 0]$ and $[{@3}; 0]$ and intersect each other at the point $[{@4}; {@5}]$. The region is a triangle with base ${@6}$ and height ${@7}$, its area is $\\frac{{@8}\\cdot {@9}}{2}={@10}$.",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "Favourable pairs: {@0} — ${@1}$ in total.",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "Favourable: $\\binom{{@0}}{2}={@1}$.",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "Favourable: ${@0}\\cdot {@1}={@2}$ (we choose the white and the black one independently).",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "The mean from a frequency table is weighted: multiply each mark by the number of pupils who got it.",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "The average age of the {@0} members of a choir is ${@1}$ years. When a new member joined the choir, the average age {@2} to ${@3}$ years. How old is the new member?",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "Intersections with the $x$-axis: ${@0}-x^2=0$, so $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "The intersection points are $x=0$ and one more point. What is its $x$?",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "Intersection points: $x^2={@0}$, so $x=0$ and $x={@1}$. On $\\langle 0; {@2}\\rangle$ the line lies above the parabola. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "The antiderivative is $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Calculate $F(1)$. Enter a fraction or an integer.",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "The antiderivative is $F(x)={@0}$. Calculate $F({@1})$.",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "The antiderivative is $F(x)={@0}x-\\frac{x^3}{3}$. Calculate $F({@1})$. Enter a fraction or an integer.",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "The first inequality has the solution $x&gt;c$. What is the number $c$?",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "First inequality: ${@0} {@1} {@2}$, after dividing by ${@3}$ {@4}$x&gt;{@5}$. Second: ${@6} {@7} {@8}$, hence {@9}$x\\le {@10}$. The intersection is $({@11}; {@12}\\rangle$. {@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "Exactly one can be either the first or the second shooter. Add the probabilities of both possibilities.",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "An even function satisfies $f(-x)=f(x)$ for all $x$ in the domain. Substitute, for example, $x=1$ and $x=-1$ and compare.",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "The relative frequency is $\\frac{n_i}{n}$; to get a percentage, multiply it by 100.",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "The cross-section does not have the radius of the sphere. First calculate the radius of the cross-section $\\rho$ from a right-angled triangle.",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "We solve ${@0}^{{@1}}{@2}={@3}$. What does the power ${@4}^{{@5}}$ equal?",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "A right circular cone has base radius $r={@0}\\,\\text{cm}$ and height $v={@1}\\,\\text{cm}$. Calculate {@2}. {@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "The plane $\\rho: {@0}+d=0$ passes through the point $P{@1}$. Calculate $d$.",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "The plane ${@0}$ has the normal vector $\\vec{n}={@1}$ and the equation ${@2}+d=0$. Calculate $d$.",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "The equation $x^2+px{@0}=0$ has the root $x_1={@1}$. Find the parameter $p$ and the second root $x_2$ (enter them in this order, e.g. -5; 3).",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "You probably divided the equation by the expression ${@0}$ and lost the solutions at which it is zero. Take it out of the bracket instead.",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "Parallel lines have direction vectors that are multiples of each other. Compare the direction vectors.",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "Parallel planes have normal vectors that are multiples of each other. Compare the normal vectors.",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "We split into cases by the last digit (it must be {@0}); the first digit must not be zero{@1}: {@2}. Altogether ${@3}$.",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "Factorise $f'(x)$, find the zero points and find out where the derivative changes sign.",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "The variance of the binomial distribution is $np(1-p)$, do not forget the factor $1-p$.",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "The range is the difference between the largest and the smallest value, not between the last and the first value in the list.",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "Seatings that differ only by a rotation of the table are the same. You counted each of them {@0} times this way.",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "Size of the data set $n={@0}={@1}$. Relative frequency: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "Intersecting lines have a common point and therefore lie in one plane. Can you find such a plane?",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "Intersecting planes have normal vectors that are not multiples of each other. Compare the normal vectors.",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "A pipe has the shape of a hollow cylinder with outer radius ${@0}\\,\\text{cm}$, inner radius ${@1}\\,\\text{cm}$ and length ${@2}\\,\\text{cm}$. Calculate the volume of the material in $\\text{cm}^3$. {@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "The word has {@0} letters, the repeated ones are {@1}. These are permutations with repetition: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "The gradient of the tangent is $f'(x_0)$. Substitute into $y=f(x_0)+f'(x_0)(x-x_0)$ and simplify.",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "The direction vectors $\\vec{{@0}}={@1}$ and $\\vec{{@2}}={@3}$ are multiples of each other and the point ${@4}$ does not lie on the line ${@5}$, so the lines are parallel.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "The direction vectors ${@0}$ and ${@1}$ are not multiples of each other, but the lines lie in one plane and intersect at the point ${@2}$. They are intersecting.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "The direction vectors ${@0}$ and ${@1}$ are not multiples of each other, so the lines are not parallel; nor do they lie in one plane, so they have no common point. They are skew.",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "A club has {@0} members. In how many ways can they elect a chair, a vice-chair and a treasurer (one person holds at most one position)?",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "Count the triples using combinations and use the complementary event “boys only”.",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "Slant height of the face: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "The slant height of the cone $s$ is the hypotenuse of a right-angled triangle with legs $r$ and $v$.",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "Slant height of the cone: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "Slant height: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "We denote the sides $a-d$, $a$, $a+d$ (the hypotenuse is the longest). From the perimeter $3a={@0}$, so $a={@1}$. Pythagoras' theorem: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. The sides are ${@8}$, ${@9}$, ${@10}$ cm{@11}.",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "The sides are $a-d$, $a$, $a+d$. Calculate $a$ from the perimeter.",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "Write the sides as $a-d$, $a$, $a+d$. The perimeter gives $a$, then Pythagoras' theorem gives the common difference $d$.",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "The centre is $S[{@0}; {@1}]$ and the vector $\\vec{ST}=({@2}; {@3})$ is perpendicular to the tangent, it is its normal vector — so the equation has the form ${@4}+c=0$. We substitute $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, so $c={@9}$.",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "The centre of the circle is $S[{@0}; {@1}]$, the radius $r={@2}$. Distance of the centre from the line: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Since $d{@10}r$, the line is {@11}.",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "Central angle: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.",
  "Stĺpcový graf známok": "Bar chart of marks",
  "Stĺpcový graf známok v triede": "Bar chart of marks in a class",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "Substitution $u={@0}$ (or the formula $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): the antiderivative is $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "They are multiples of each other, so the planes are parallel; the point ${@0}$ {@1} ${@2}$, so the planes are {@3}.",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "The coordinates of the point $P$ must satisfy the equation: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, so ${@6}+d=0$ and $d={@7}$.",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "The system of inequalities ${@0}$ and ${@1}$ has a solution in $\\mathbb{R}$. {@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "A system of equations with the parameter $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. For which value of $m$ {@4}?",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "The sum of logarithms is the logarithm of the product: $\\log_2 u+\\log_2 v=\\log_2(uv)$, not $\\log_2(u+v)$.",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "The sum with $d$ must be zero. What is $d$?",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "The sum of the ages of the original members is ${@0}\\cdot {@1}={@2}$. After the arrival the sum of the ages is ${@3}\\cdot {@4}={@5}$. The new member is ${@6}-{@7}={@8}$ years old.",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "The sum of the marks must be divided by the number of pupils $n$, not by the number of different marks.",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "We divide the sum of the squared deviations by the number of data values $n={@0}$, not by $n-1$ (that is how variance is defined in the theory).",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "The product of two odd functions is even: $(-x)\\sin(-x)=x\\sin x$.",
  "Súčin je nenulový, priamka rovinu pretína.": "The product is non-zero, so the line intersects the plane.",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "The product is odd only when both numbers are odd: $3\\cdot 3=9$ outcomes. There are $36-9=27$ favourable ones.",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "The product is zero, so the line is parallel to the plane; the point ${@0}$ {@1}.",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "The product of the roots is $x_1x_2={@0}$. What is the second root $x_2$?",
  "Tabuľka": "Table",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "That would be the case with simple interest. With compound interest the credited interest earns interest too, so the amount is multiplied every year.",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "That would be the case with simple interest. The interest stays in the account and earns interest the next year too, so the amount is multiplied every year.",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "The solid consists of a cylinder with radius ${@0}\\,\\text{dm}$ and height ${@1}\\,\\text{dm}$, topped by a cone with the same base and height ${@2}\\,\\text{dm}$. Calculate the volume of the solid in $\\text{dm}^3$. {@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "The solid consists of a cylinder with radius ${@0}\\,\\text{m}$ and height ${@1}\\,\\text{m}$ with a hemisphere of the same radius on its top base. Calculate the volume of the solid in $\\text{m}^3$. {@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "That is the square of the distance. Take the square root of the result.",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "That is the other common point. We are asking for the one with the smaller $x$-coordinate.",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "That is the other stationary point, at which the function has a local {@0}. At a maximum $f'$ changes sign from $+$ to $-$, at a minimum from $-$ to $+$.",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "That is the length of the side perpendicular to the wall. We are asking for the side parallel to the wall, its length is ${@0}-2x$.",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "That is only the lateral surface of the pyramid. The surface area also includes the square base.",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "That is only the lateral surface of the cone. The surface area also includes the circular base $\\pi r^2$.",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "That is only the lateral surface. The surface area also includes both circular bases.",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "That is the new average age. Work with the sums of the ages: sum = mean · count.",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "That is the volume of a prism with the same base and height. The volume of the pyramid is a third of it.",
  "To je objem valca. Objem kužeľa je jeho tretina.": "That is the volume of the cylinder. The volume of the cone is a third of it.",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "That is the area under the parabola. The shape lies between two curves, integrate the difference “upper minus lower”.",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "That is the area under the line. You still have to subtract the area under the parabola from it.",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "That is the ratio of the radii. Melting down preserves the volume, and the volume grows with the cube of the radius.",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "That is the frequency of the most common value. The mode is the value itself that occurs most often.",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "That is the probability of the complementary event $X=0$. Subtract it from one.",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "That is the probability of the complementary event that only boys are chosen. Subtract it from one.",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "That is the probability of the complementary event that the product is odd. Subtract it from one.",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "That is the probability of the complementary event that a six does not come up at all. Subtract it from one.",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "That is the probability of exactly one success. “At least one” also includes more successes, use the complementary event.",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "That is the probability that they do not both hit at the same time. Neither of them means that both miss.",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "That is the probability that both hit. “At least one” also includes the cases when only one hits.",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "That is the mean. The median is the middle value of the ordered data set.",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "That is the middle side. The hypotenuse is the longest side of the triangle.",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "That is the variance. The standard deviation is its square root.",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "That is the standard deviation. The variance is its square, $D(X)=np(1-p)$.",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "That is the standard deviation. The variance is not square-rooted.",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "That is the side of the cut-out square. We are asking for the volume of the box.",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "That is the central angle of the sector in degrees. A percentage is a part of $100$, not of $360$.",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "That is the angle between the line and the normal vector of the plane. The angle with the plane complements it to $90^\\circ$: with the normal, calculate $\\sin\\varphi$, not $\\cos\\varphi$.",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "That is the distance between the points ${@0}$ and ${@1}$. The distance from a line is measured perpendicular to the line.",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "These are the $y$-coordinates of the intersection points. Enter their $x$-coordinates.",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "These are the values of the substitution $t={@0}$. Calculate $x={@1}^{t}$ from the definition of the logarithm.",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "These are the values of the substitution $t={@0}^{x}$. Now go back to the unknown $x$.",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "Those are percentages. The central angle is the same part of the full angle $360^\\circ$, not of $100$.",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "These are all the segments joining pairs of vertices, including the sides of the polygon. The sides must be subtracted.",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "Identical lines have all points in common. Check whether both points of one line lie on the other.",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "Identical planes have all points in common. Check whether all three points of the second plane lie in the first.",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "A triangle has the vertices $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Calculate its area $S$ and the height $v_c$ to the side $AB$. Enter $S$ and $v_c$ (rounded to 2 decimal places) separated by a semicolon.",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "Here $f''(x)&lt;0$, so the function is concave there. When dividing an inequality by a negative number, do not forget to reverse the inequality sign.",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "Here the function is {@0}. Check the sign of $f'$: between the roots it has the opposite sign to the leading coefficient ${@1}$.",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "This condition corresponds to $D&gt;0$, i.e. two distinct real roots.",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "This condition corresponds to $D&lt;0$, then the equation has no real root.",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "This condition corresponds to $D=0$, i.e. one double root.",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "This condition corresponds to $D\\ge 0$, i.e. at least one real root.",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "This condition corresponds to $D\\le 0$: it includes the double root and the case without real roots.",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "The angle between two lines is at most $90^\\circ$. In the formula for $\\cos\\varphi$ the numerator contains the absolute value of the scalar product.",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "Calculate the angle between a line and a plane via the normal vector of the plane: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Or find the projection of the line onto the plane and a right-angled triangle.",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "The angle between lines is the angle between their direction vectors from the interval $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "Place the cube in a coordinate system, write down the coordinates of both points (the midpoint of an edge is the mean of its end points) and use the distance formula.",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "Simplify $f(-x)$: use $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ and $\\cos(-x)=\\cos x$. Then compare with both $f(x)$ and $-f(x)$.",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "Rearrange the equation into the form $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. What is the number $r$? Enter a fraction or an integer.",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "We rearrange: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. For $x\\to 0$ also $t={@6}x\\to 0$ and $\\frac{\\sin t}{t}\\to 1$. The limit is ${@7}{@8}$.",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "Find the asymptotes of the graph of the function $f(x)=\\dfrac{{@0}}{{@1}}$. Enter the number from the vertical asymptote $x=\\dots$ and then the number from the horizontal asymptote $y=\\dots$ (e.g. 2; -1/2).",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "Find the one-sided limit $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "State the conditions, write the sum of logarithms as the logarithm of a product and remove the logarithms. Compare the roots you find with the conditions.",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "Determine the relative position of the line $p: {@0}=0$ and the circle $k: {@1}$.",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "Ordered data set: ${@0}$ ($n={@1}$). {@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "In $P(X=1)$ the binomial coefficient $\\binom{{@0}}{1}={@1}$ is missing: the success can occur in any of the trials.",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "In the cube $ABCDEFGH$ (base $ABCD$, above it $EFGH$, edges $AE$, $BF$, $CG$, $DH$) determine the relative position of the lines ${@0}$ and ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "In the cube $ABCDEFGH$ determine the relative position of the line ${@0}$ and the plane ${@1}$.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "In the cube $ABCDEFGH$ determine the relative position of the planes ${@0}$ and ${@1}$.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "In the cube $ABCDEFGH$ calculate the angle between the line ${@0}$ and the plane ${@1}$ in degrees. Round the result to tenths of a degree.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "In the cube $ABCDEFGH$ calculate the angle between the lines ${@0}$ and ${@1}$ in degrees. Round the result to tenths of a degree.",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "In a cube with edge $1$ the direction vector of the line is $\\vec{u}={@0}$ and the plane ${@1}$ is a face of the cube with the normal vector $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, so $\\varphi\\approx {@6}^\\circ$.",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "In a cube with edge $1$ the direction vectors are $\\vec{u}=\\vec{{@0}}={@1}$ and $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, so $\\varphi\\approx {@8}^\\circ$.",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "A club has {@0} boys and {@1} {@2}. We choose three members at random for a competition. What is the probability that there will be at least one girl among them? {@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "At which of the points ${@0}$, ${@1}$ does the function have a {@2}?",
  "V percentách ${@0}\\,\\%$.": "As a percentage ${@0}\\,\\%$.",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "In the right-angled triangle with the height of the pyramid and the slant height of the face, the other leg is half of the base edge, not the whole edge.",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "In a row it matters who sits on which chair: rotation plays no role here, arrange all the people.",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "In the equation $y=ax+b$ swap $x$ and $y$ and express $y$.",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "In a group the order does not matter, these are combinations, not variations.",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "At a common point both functions have the same value: set the right-hand sides equal and solve the quadratic equation.",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "There are {@0} boys and {@1} girls in a class. In how many ways can we choose a group that will contain {@2} and {@3}?",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "An urn contains balls: {@0} {@1} and {@2} {@3}. We draw two at random at once. What is the probability that {@4}? {@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "Cylinder: $\\pi r^2v={@0}\\pi$. Cone: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Altogether $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "Cylinder: $\\pi r^2v={@0}\\pi$. Hemisphere: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Altogether $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "The range is the difference between the largest and the smallest value.",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "A deposit earns annual interest at a rate of ${@0}\\,\\%$ (compound interest, no tax). After how many years does it at least {@1} for the first time?",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "In the formula the height is divided by three: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "In the formula for the volume of a frustum of a cone the height is divided by three: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "Go back to $x$ and enter all the solutions (a fraction e.g. as 1/2).",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "We divide both sides by the expression ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Taking logarithms: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, so $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "Express the discriminant in terms of $p$ and, according to the required number of roots, decide whether it should be positive, zero or negative.",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "Express the trigonometric function, find the solutions in one period and add multiples of the period ($2\\pi$ for sine and cosine, $\\pi$ for tangent).",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "Express the volume as a function of the side of the cut-out square, differentiate it and find the stationary point in the admissible interval.",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "We swap $x$ and $y$: $x={@0}$, hence ${@1}y={@2}$ and $y=\\dfrac{{@3}}{{@4}}$. So $f^{-1}(x)={@5}x{@6}{@7}$, i.e. $k={@8}$ and $q={@9}$.",
  "Vypočítaj $F(-{@0})$.": "Calculate $F(-{@0})$.",
  "Vypočítaj $F(0)$.": "Calculate $F(0)$.",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "Calculate $F(1)-F(0)$. Enter a fraction or an integer.",
  "Vypočítaj $F({@0})$.": "Calculate $F({@0})$.",
  "Vypočítaj $F({@0})-F({@1})$.": "Calculate $F({@0})-F({@1})$.",
  "Vypočítaj $P(X=0)$. {@0}": "Calculate $P(X=0)$. {@0}",
  "Vypočítaj $P(X=1)$. {@0}": "Calculate $P(X=1)$. {@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "Calculate $P(X={@0})$. {@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "Calculate $P(X\\ge 1)$. {@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "Calculate $P(X\\le 1)$. {@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "Calculate $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calculate $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Enter the result as a fraction or an integer.",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "Calculate $\\int_0^{{@0}} x^2\\,dx$. Enter a fraction or an integer.",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "Calculate $\\int_0^{{@0}} {@1}\\,dx$.",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "Calculate $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Enter the result as an integer or a fraction.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "Calculate $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Enter the result as a fraction.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "Calculate $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "Calculate $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Enter the result as an integer or a fraction (e.g. -3/2).",
  "Vypočítaj $k$.": "Calculate $k$.",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "Calculate $t$ from the first coordinate and substitute it into the other two equations. Check both carefully.",
  "Vypočítaj $|AB|^2$.": "Calculate $|AB|^2$.",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "Calculate $|\\vec u\\cdot\\vec n|$ for $\\vec u=\\vec{{@0}}$ and the normal vector $\\vec n={@1}$ (cube with edge $1$).",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "Calculate $|{@0}K|$ in cm. {@1}",
  "Vypočítaj $|{@0}K|^2$.": "Calculate $|{@0}K|^2$.",
  "Vypočítaj absolútny člen $q$.": "Calculate the constant term $q$.",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "Calculate the arithmetic mean $\\bar{x}$.",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "Calculate the determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "Calculate the second derivative. For which $x$ is $f''(x)=0$?",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "Calculate the value at the right end point, $f({@0})$.",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "Calculate the value at the left end point, $f({@0})$.",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "Calculate the volume of the whole solid in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "Calculate the volume of the whole solid in $\\text{m}^3$. {@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calculate the volume of the hollow with radius ${@0}\\,\\text{cm}$ in $\\text{cm}^3$. {@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "Calculate the volume of the cone in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "Calculate the volume of the material in $\\text{cm}^3$. {@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Calculate the volume of the full cylinder with radius ${@0}\\,\\text{cm}$ in $\\text{cm}^3$. {@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "Calculate the volume of the hemisphere in $\\text{m}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "Calculate the volume in $\\text{cm}^3$. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "Calculate the volume in $\\text{cm}^3$.{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "Calculate the volume of the cylinder in $\\text{dm}^3$. {@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "Calculate the volume of the cylinder in $\\text{m}^3$. {@0}",
  "Vypočítaj obsah $S$.": "Calculate the area $S$.",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "Calculate the base area $S_p$ in $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "Calculate the area of the cross-section in $\\text{cm}^2$. {@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "Calculate the area in $\\text{cm}^2$.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calculate the area of the shape bounded by the parabola $y=x^2$ and the line $y={@0}$. Enter the result as a fraction or an integer.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "Calculate the area of the shape bounded by the parabola $y={@0}-x^2$ and the $x$-axis. Enter the result as a fraction or an integer.",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "Calculate the area of the part of the plane determined by the system of inequalities $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.",
  "Vypočítaj polomer gule v cm.": "Calculate the radius of the sphere in cm.",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "Calculate the radius of the cross-section $\\rho$ in cm.",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "Calculate the surface area of the pyramid in $\\text{cm}^2$.",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "Calculate the surface area in $\\text{cm}^2$. {@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "Calculate the mean, then the mean of the squared deviations from it. The standard deviation is the square root of the variance.",
  "Vypočítaj priemernú známku. {@0}": "Calculate the average mark. {@0}",
  "Vypočítaj rozptyl $D(X)$.": "Calculate the variance $D(X)$.",
  "Vypočítaj rozptyl $s^2$. {@0}": "Calculate the variance $s^2$. {@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "Calculate the scalar product of the direction vectors $\\vec{{@0}}\\cdot\\vec{{@1}}$ (cube with edge $1$).",
  "Vypočítaj smernicu $k=f'({@0})$.": "Calculate the gradient $k=f'({@0})$.",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "Calculate the standard deviation $s$. {@0}",
  "Vypočítaj stranu $s$ v cm.": "Calculate the slant height $s$ in cm.",
  "Vypočítaj stranu kužeľa $s$ v cm.": "Calculate the slant height of the cone $s$ in cm.",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "Calculate the expected value $E(X)$ (a fraction or a decimal to at least 2 places).",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "Calculate the sum $R^2+Rr+r^2$.",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "Calculate the sum $a_1^2+a_1a_2+a_2^2$.",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "Calculate the sum of the squared deviations from the mean.",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calculate the angle between the line and the plane in degrees. Round the result to tenths of a degree.",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Calculate the angle between the lines in degrees. Round the result to tenths of a degree.",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "Calculate the distance of the point ${@0}$ from the plane in cm. {@1}",
  "Vypočítaj výšku $v_c$. {@0}": "Calculate the height $v_c$. {@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "Calculate the {@0} value of the function $f(x)={@1}$ on the interval $\\langle {@2}; {@3}\\rangle$.",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "Calculate the {@0} of the data set ${@1}$. {@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "Calculate the {@0} in $\\text{cm}^2$. {@1}",
  "Vypočítaj {@0}. {@1}": "Calculate {@0}. {@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "You calculated $f\\!\\left({@0}\\right)$. But the value $f^{-1}(c)$ is the number $x$ for which $f(x)=c$.",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "Fill the positions one by one and use the product rule. The first digit must not be zero; with a divisibility condition start with the last digit and split into cases.",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "Solve each inequality separately (careful when dividing by a negative number) and take the intersection of the intervals.",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "Solve the equation $({@0})^2{@1}{@2}=0$. Enter all the solutions separated by a semicolon (a fraction e.g. as 1/2).",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Solve the equation $\\log_2({@0})+\\log_2({@1})={@2}$. Enter all the solutions separated by a semicolon.",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "Solve the equation ${@0}$ for {@1}. Enter all the solutions in degrees separated by a semicolon (e.g. 30; 150).",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "Solve the equation ${@0}$ for {@1}. Enter all the solutions in degrees separated by a semicolon.",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "Solve the equation ${@0}={@1}$. {@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "Solve the equation. How many vertices does the polygon have?",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "Solve the equation. How many people were at the meeting?",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "Solve the system of equations $x+y={@0}$, $x\\cdot y={@1}$. Enter all possible values of $x$ separated by a semicolon.",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "Solve the equation ${@0}^{x}{@1}{@2}=0$ in $\\mathbb{R}$. Enter all the solutions separated by a semicolon.",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "Use $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: multiply and divide the expression so that you get the same argument in the denominator as in the sine.",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "Use Vieta's formulas: the product of the roots is the constant term, the sum of the roots is $-p$. Or substitute the known root into the equation.",
  "Vzdialenosť h od nuly": "Distance h from zero",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "The formula $\\frac{\\sin t}{t}\\to 1$ holds only when the denominator is exactly the argument of the sine, i.e. ${@0}x$. Rearrange the expression first.",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "Choosing the boys and choosing the girls do not exclude each other, they combine. Use the product rule, not the sum rule.",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "The expression contains only $x^2$, so $f(-x)=f(x)$.",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "A product is faulty with probability ${@0}$, independently of the others. We choose {@1} {@2} at random; $X$ is the number of faulty ones.",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "A sector has the central angle $\\frac{n_i}{n}\\cdot 360^\\circ$.",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "The outcomes of the experiment are pairs of balls (combinations). Count all of them and the favourable ones; for “at least one” the complementary event is simpler.",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "Substitute the result into the outer function: ${@0}({@1})$.",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "The outcome is an ordered pair (first die, second die), there are 36 of them in total. Count the favourable pairs.",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Round the result to 2 decimal places.",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "Round the result to 4 decimal places.",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "We enlarge all the edges of a cube by ${@0}\\,\\%$. By what percentage does its {@1} increase? {@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "There are $\\binom{{@0}}{3}={@1}$ triples in total. The complementary event — only boys are chosen — has $\\binom{{@2}}{3}={@3}$ possibilities. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "There are $\\binom{{@0}}{2}={@1}$ selections of two balls in total. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "There are $6\\cdot 6=36$ outcomes in total. {@0} $P=\\frac{{@1}}{36}={@2}$.",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "From $\\frac{n(n-3)}{2}={@0}$ we get $n^2-3n-{@1}=0$ and the positive root $n={@2}$.",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "Calculate the common difference $d$ from Pythagoras' theorem.",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "From Vieta's formula $x_1x_2={@0}$ we get $x_2=\\frac{{@1}}{{@2}}={@3}$. From $x_1+x_2=-p$ we get $p=-({@4}{@5})={@6}$. Check by substituting: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "Calculate the parameter $t$ from one coordinate and check whether the same $t$ satisfies the other coordinates too.",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "Express $y$ from the linear equation and substitute it into the other one. You get a quadratic equation for $x$.",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "Express $p^2$ from the condition $D=0$. What is $p^2$?",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "Calculate the radius from the surface area $S=4\\pi r^2$ and substitute it into the volume formula $V=\\frac{4}{3}\\pi r^3$.",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "From the first equation $y={@0}$. We substitute: $x({@1})={@2} \\Rightarrow {@3}=0$, roots $x_1={@4}$, $x_2={@5}$. The solutions of the system are $[{@6}; {@7}]$ and $[{@8}; {@9}]$, so $x$ is ${@10}$ or ${@11}$.",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "Express the product $n(n-1)$ from the equation $\\frac{n(n-1)}{2}={@0}$. What is it?",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "Express the product $n(n-3)$ from the equation $\\frac{n(n-3)}{2}={@0}$. What is it?",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "From the equation ${@0}={@1}$ find the $x$-coordinates of the common points.",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "Find the centre and the radius from the equation of the circle, then calculate the distance of the centre from the line and compare it with the radius.",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "Express $y$ from the equation of the line, substitute it into the equation of the circle and solve the quadratic equation for $x$.",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "From the equation of the line we express $y={@0}$ and substitute it into the equation of the circle. After simplifying we get ${@1}=0$ with the roots $x_1={@2}$, $x_2={@3}$. The intersection points are $[{@4}; {@5}]$ and $[{@6}; {@7}]$.",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "From the equations ${@0}^{x}=t$ find all the solutions $x$ (remember that ${@1}^{x}&gt;0$).",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "You forgot to divide by the size of the normal vector $|\\vec n|=\\sqrt{{@0}}$.",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "You forgot the binomial coefficient $\\binom{{@0}}{{@1}}$: the successful trials can be spread among all the trials in different ways.",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "You forgot the term $u'v$: differentiate the linear function in the bracket too.",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "You forgot to multiply by the derivative of the inner function: $(\\sin kx)'=k\\cos kx$ and $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "You forgot to square the denominator: in the quotient rule the denominator is $v^2$.",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "You forgot to multiply by the derivative of the inner function: $({@0})'={@1}$.",
  "Zadaj všetky hodnoty $p$.": "Enter all the values of $p$.",
  "Zadaj všetky možné hodnoty $x$.": "Enter all possible values of $x$.",
  "Zadaj všetky riešenia rovnice.": "Enter all the solutions of the equation.",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "You also counted “numbers” starting with zero. Zero cannot be in the first position.",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "Write ${@0}^{x}$ as $({@1}^{x})^2$ and introduce the substitution $t={@2}^{x}$. Do not forget that $t$ must be positive.",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "Write the denominator as $(\\sqrt{x})^2-a^2$ and factorise it using the formula $A^2-B^2=(A-B)(A+B)$.",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "Write the condition via the complementary event $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ and solve it by taking logarithms.",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "Write the sum of the first $n$ terms of the arithmetic sequence and solve the inequality $s_n\\ge$ the required number. You are looking for the smallest natural $n$.",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "Introduce the substitution $t={@0}$, solve the quadratic equation and then go back to $x$ via the definition of the logarithm.",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "Differentiate the outer power (leave the inside as it is) and multiply by the derivative of the inner function.",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "Find the sign of $f'$ to the left and to the right of the point.",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "Find the sign of the denominator for $x$ just to the right or to the left of the given point and combine it with the sign of the numerator.",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "Find out which points of the cube lie in the planes. Three points can determine the same plane even if they are different vertices.",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "You only found the exponent ${@0}$. You still have to express $x$ from it.",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "Take logarithms of both sides and express $x$. {@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "Compound interest: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. The balance of the account forms a geometric sequence with ratio ${@6}$.",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "From a square piece of cardboard with side ${@0}\\,\\text{cm}$ we cut out congruent squares in the corners and fold the rest into an open box. {@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "The quotient of the leading coefficients remains: $\\frac{{@0}}{{@1}}{@2}$.",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "Set up the inequality $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ and solve it by taking logarithms. Round the result up.",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "Set up the equation of the plane (the normal vector is perpendicular to two vectors in the plane) and use the formula for the distance of a point from a plane.",
  "Zrezaný kužeľ": "Frustum of a cone",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "A frustum of a right circular cone has base radii $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ and height $v={@2}\\,\\text{cm}$. Calculate its {@3}. {@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "The vertical asymptote is at the zero point of the denominator. The horizontal asymptote is given by the limit for $x\\to\\infty$: the quotient of the coefficients of $x$.",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "The vertical asymptote is at the zero point of the denominator: solve the equation ${@0}=0$. Watch the sign.",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "We choose $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "We choose a cube with edge $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ and the points $E, F, G, H$ above them with coordinate $z=1$.",
  "Základ a": "Base a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "It matters who holds which position, so these are variations of the 3rd class of {@0} elements: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "Replacing $x$ with $-x$ just swaps the terms: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.",
  "ani sa cifry nesmú opakovať": "and the digits must not repeat",
  "aspoň jeden reálny koreň": "at least one real root",
  "aspoň jedna guľa je biela": "at least one ball is white",
  "auto": "car",
  "bicykel": "bicycle",
  "biele": "white",
  "bielych": "white",
  "deliteľných piatimi": "divisible by five",
  "dievčat": "girls",
  "dievčatá": "girls",
  "do známky {@0} je to {@1}": "up to mark {@0} it is {@1}",
  "dotyčnica (jeden spoločný bod)": "tangent (one common point)",
  "druh dopravy do práce": "mode of transport to work",
  "druhú": "second",
  "dva rôzne reálne korene": "two distinct real roots",
  "dĺžku prepony v cm": "the length of the hypotenuse in cm",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">as h → 0 the value approaches 1</span>",
  "farba očí žiaka": "pupil's eye colour",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0, the function decreases",
  "hmotnosť balíka": "weight of a parcel",
  "jeden chlapec": "one boy",
  "jedna guľa je biela a jedna čierna": "one ball is white and one black",
  "jeho objem v $\\text{cm}^3$": "its volume in $\\text{cm}^3$",
  "jeho obsah v $\\text{cm}^2$": "its area in $\\text{cm}^2$",
  "jeho povrch v $\\text{cm}^2$": "its surface area in $\\text{cm}^2$",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "ending in the digit {@0}: {@1}",
  "krajina, z ktorej prišiel turista": "country a tourist came from",
  "kvalitatívny": "qualitative",
  "kvantitatívny diskrétny": "quantitative discrete",
  "kvantitatívny spojitý": "quantitative continuous",
  "leží v rovine": "lies in the plane",
  "lokálne maximum": "local maximum",
  "lokálne minimum": "local minimum",
  "max": "max",
  "medián": "median",
  "mimobežné": "skew",
  "možností": "options",
  "má sústava nekonečne veľa riešení": "does the system have infinitely many solutions",
  "mínus": "minus",
  "môžu opakovať": "may repeat",
  "neleží v rovine": "does not lie in the plane",
  "nepárne, medián je {@0}. hodnota": "odd, the median is the value in position {@0}",
  "nepárnych": "odd",
  "nesečnica (žiadny spoločný bod)": "non-intersecting line (no common point)",
  "nesmú opakovať": "must not repeat",
  "obe gule sú biele": "both balls are white",
  "objem": "volume",
  "objem hranola v $\\text{cm}^3$": "volume of the prism in $\\text{cm}^3$",
  "objem mení $k^3$-krát": "volume changes $k^3$ times",
  "objem v $\\text{cm}^3$": "volume in $\\text{cm}^3$",
  "obsah jeho plášťa v $\\text{cm}^2$": "the area of its lateral surface in $\\text{cm}^2$",
  "obsah plášťa": "lateral surface area",
  "obsah rezu v $\\text{cm}^2$. {@0}": "area of the cross-section in $\\text{cm}^2$. {@0}",
  "obľúbený šport": "favourite sport",
  "opäť ľubovoľnú": "again any digit",
  "p; x₂": "p; x₂",
  "pešo": "on foot",
  "plus": "plus",
  "polomer rezu v cm.": "radius of the cross-section in cm.",
  "povrch": "surface area",
  "povrch hranola v $\\text{cm}^2$": "surface area of the prism in $\\text{cm}^2$",
  "povrch mení $k^2$-krát": "surface area changes $k^2$ times",
  "povrch v $\\text{cm}^2$": "surface area in $\\text{cm}^2$",
  "počet": "count",
  "počet gólov v zápase": "number of goals in a match",
  "počet strán knihy": "number of pages of a book",
  "počet súrodencov": "number of siblings",
  "počet vymeškaných hodín za polrok": "number of hours missed in a term",
  "počet áut v domácnosti": "number of cars in a household",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "for $t={@0}$ one of them does not hold, so the point does <strong>not lie</strong> on the line.",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "for $t={@0}$ both hold, so the point <strong>lies</strong> on the line.",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "the line is parallel to the plane and has no common point with it",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "the line intersects the plane (at one point)",
  "priamka leží v rovine": "the line lies in the plane",
  "práve jeden (dvojnásobný) koreň": "exactly one (double) root",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "even, the median is the mean of the values in positions {@0} and {@1}",
  "párnych": "even",
  "roviny sú rovnobežné rôzne": "the planes are parallel and distinct",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "the planes intersect (in a line)",
  "roviny sú totožné": "the planes are identical",
  "rovnobežné": "parallel",
  "rozptyl": "variance",
  "sedadiel": "seats",
  "sedadlo": "seat",
  "sedadlá": "seats",
  "sečnica (2 spoločné body)": "secant (2 common points)",
  "sečnica (dva spoločné body)": "secant (two common points)",
  "smerodajnú odchýlku": "standard deviation",
  "spotreba auta na 100 km": "fuel consumption of a car per 100 km",
  "stenovú výšku $v_s$ v cm": "the slant height of the face $v_s$ in cm",
  "strojnásobí": "triple",
  "sústava nemá riešenie": "does the system have no solution",
  "súčet je aspoň {@0}": "the sum is at least {@0}",
  "súčet je {@0}": "the sum is {@0}",
  "súčin je párny": "the product is even",
  "teplota vzduchu na poludnie": "air temperature at noon",
  "terč nezasiahne ani jeden z nich": "neither of them hits the target",
  "terč zasiahne aspoň jeden z nich": "at least one of them hits the target",
  "terč zasiahne práve jeden z nich": "exactly one of them hits the target",
  "tretiu": "third",
  "v rovine leží, takže v nej leží celá priamka": "lies in the plane, so the whole line lies in it",
  "v rovine neleží, preto nemajú spoločný bod": "does not lie in the plane, so they have no common point",
  "variačné rozpätie": "range",
  "vlak": "train",
  "vpravo": "to the right",
  "výrobkov": "products",
  "výrobky": "products",
  "výška žiaka": "pupil's height",
  "vľavo": "to the left",
  "vždy niektorú zo zvyšných": "always one of the remaining digits",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · distance of the centre d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "double",
  "značka mobilného telefónu": "brand of mobile phone",
  "známka": "mark",
  "znížil": "fell",
  "zvýšil": "rose",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0} The point $K$ is the midpoint of the edge ${@1}$. Calculate the distance between the points ${@2}$ and $K$ in cm. {@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0} The function is <strong>{@1}</strong>.",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0} The normal vectors are ${@1}$ and ${@2}$. {@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0} The normal vector of the plane ${@1}$ is $\\vec{n}={@2}$ (perpendicular to both $\\vec{{@3}{@4}}$ and $\\vec{{@5}{@6}}$), the direction vector of the line is $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0} Then ${@1}{@2}$ and $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0} The plane ${@1}$ has the normal vector $\\vec{n}={@2}$ and the equation ${@3}=0$. For ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0} The direction vector of the line is $\\vec{u}=\\vec{{@1}}={@2}$, the vector $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0} The correct one is ${@1}$, $k\\in\\mathbb{Z}$.",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0} Substitution $t={@1} x$: ${@2}=0$, roots $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Altogether $K=\\{{@7}\\}$.",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0} Calculate $P(X={@1})$. {@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0} Calculate $P(X\\ge 1)$. {@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0} Calculate the probability that $X\\le 1$. {@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0} Calculate the expected value $E(X)$ and the variance $D(X)$. Enter them in this order separated by a semicolon (as fractions or decimals rounded to at least 2 places).",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0} Calculate the distance of the vertex ${@1}$ from the line ${@2}$ in cm. {@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0} Calculate the distance of the vertex ${@1}$ from the plane ${@2}$ in cm. {@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0} Round the result to tenths.",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0} The variable is <strong>{@1}</strong>.",
  "{@0} chlapci": "{@0} boys",
  "{@0} dievčatá": "{@0} girls",
  "{@0} usporiadaného súboru. Aký je medián?": "{@0} of the ordered data set. What is the median?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0} shows the marks from a test in a class:{@1}What is the median mark?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0} shows the marks from a test in a class:{@1}Calculate the average mark. {@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}Introduce $t={@1} x$, solve the quadratic equation and keep only the roots from the interval $\\langle -1; 1\\rangle$.",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "First sort the data by size. For an even number of values the median is the mean of the two middle values.",
  "Útvar ohraničený parabolou a priamkou": "Shape bounded by a parabola and a line",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "Factorise the numerator ${@0}$ as ${@1}\\cdot(x+c)$. What is the number $c$?",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "The numerator of the derivative ${@0}({@1})-({@2})\\cdot {@3}$ is a constant after simplifying. Which one?",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "The numerator is a non-zero constant and the denominator tends to zero, so the fraction grows in absolute value beyond all bounds.",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "The numerator has a lower degree than the denominator, so only zero remains in the numerator and the limit is $0$.",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "The numerator changes sign, the denominator does not: $f(-x)=-f(x)$.",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "We divide both the numerator and the denominator by the highest power of the denominator, i.e. ${@0}$. All terms of the form $\\frac{c}{x^k}$ tend to zero. {@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "The term $uv'$ is $({@0})\\cdot\\frac{1}{x}$. So what is $f'(1)$?",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "The number $f({@0})$ is not the constant term $q$. Substitute into $y=f(x_0)+f'(x_0)(x-x_0)$ and multiply out the bracket.",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "The number from the horizontal asymptote $y=\\dots$ (the limit for $x\\to\\infty$)?",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "The number from the vertical asymptote $x=\\dots$ (the zero point of the denominator)?",
  "čas behu na 100 m": "100 m running time",
  "čierne": "black",
  "čiernych": "black",
  "ľubovoľnú cifru": "any digit",
  "ľubovoľnú cifru okrem nuly": "any digit except zero",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "Pupils said how they get to school:{@0}{@1} Round the result to tenths.",
  "Žiadny z nich neleží vo vnútri intervalu.": "Neither of them lies inside the interval.",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "A pupil guesses randomly in a test with {@0} questions; each question has four options and exactly one is correct. The random variable $X$ is the number of correct answers.",
  "žiadny reálny koreň": "no real root",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "“At most one” also includes the possibility that no success occurs. Add $P(X=0)$.",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "“At most one” means 0 or 1 success. Add these two probabilities.",
  "Graph of the function f": "Graph of the function f",
  "Two parallel lines cut by a transversal": "Two parallel lines cut by a transversal",
  "mark": "mark",
  "count": "count",
  "Bar chart of marks": "Bar chart of marks"
 }
});
