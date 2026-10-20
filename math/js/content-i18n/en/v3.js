/* English: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/v3/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "v3-pojem": {
   "title": "Differential Equations, the Initial Value Problem, Direction Fields",
   "summary": "Order of an equation, general and particular solutions, the initial value problem, the existence and uniqueness theorem, direction fields.",
   "theory": [
    "<p>An <strong>ordinary differential equation (ODE)</strong> is an equation $F(x, y, y', \\dots, y^{(n)}) = 0$ in which the unknown is a function\n       of one variable $y = y(x)$ and in which derivatives of this function appear. The <strong>order</strong> of the equation is the order of the highest derivative\n       that actually occurs in it: $y'' + (y')^{5} = x$ is a 2nd-order equation; the power $(y')^{5}$ does not change the order.\n       The equation is <strong>linear</strong> if it is linear in $y, y', \\dots, y^{(n)}$, i.e. it has the form\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$.</p>\n       <p>A <strong>solution</strong> on an interval $I$ is a function that has derivatives up to order $n$ on $I$ and, when substituted, satisfies the equation for every $x\\in I$.\n       The <strong>general solution</strong> of an $n$-th-order equation is a family of solutions $y = \\varphi(x, C_1, \\dots, C_n)$ with $n$ independent constants;\n       a <strong>particular solution</strong> is obtained by a specific choice of the constants. A solution that cannot be obtained from the general one for any choice of the constants\n       is called <strong>singular</strong>.</p>",
    "<p>The <strong>Cauchy (initial value) problem</strong> for a first-order equation: find a solution of the equation $y' = f(x, y)$ that satisfies\n       the <strong>initial condition</strong> $y(x_0) = y_0$. For an $n$-th-order equation we prescribe $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$.</p>\n       <p><strong>Existence and uniqueness theorem (Picard).</strong> If the functions $f$ and $\\frac{\\partial f}{\\partial y}$ are continuous in a neighbourhood of the point $(x_0, y_0)$, there is\n       an interval around $x_0$ on which the initial value problem has <strong>exactly one</strong> solution. Without these assumptions uniqueness may fail:\n       the problem $y' = 3y^{2/3}$, $y(0) = 0$ is solved both by $y = 0$ and by $y = x^{3}$ (here $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ is not defined at $y = 0$).</p>",
    "<p><strong>Direction field.</strong> At every point $(x, y)$, the equation $y' = f(x, y)$ prescribes the slope of the tangent to the solution passing through it.\n       If we draw short segments with slope $f(x, y)$ at points of the plane, we get the direction field (slope field). The graph of a solution (an <strong>integral curve</strong>)\n       is tangent to the field at each of its points. The curves $f(x, y) = k$, along which all segments have the same slope $k$, are called <strong>isoclines</strong>.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "The direction field of the equation $y' = x - y$. The dashed line $y = x$ is the isocline with slope $0$; the green line $y = x - 1$ is the isocline with slope $1$ and also a solution. Move the initial value $y(0)$: all solutions approach the line $y = x - 1$ as $x\\to\\infty$."
    }
   ],
   "examples": [
    {
     "task": "Verify that $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ is a solution of the equation $y'' - y' - 2y = 0$ for any $C_1, C_2$. What is the order of the equation?",
     "steps": [
      "The equation contains the second derivative and no higher one, so it is of <strong>2nd order</strong>.",
      "Differentiate: $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "Substitute: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "The equality holds for all $x$ and all $C_1, C_2$. The function contains two independent constants, so it is the <strong>general solution</strong>."
     ]
    },
    {
     "task": "Show that $y = C\\mathrm{e}^{-x} + x - 1$ is the general solution of the equation $y' = x - y$, and find the solution of the initial value problem with the condition $y(0) = 2$.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$ and $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. Both sides are equal.",
      "From the condition: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, so $C = 3$.",
      "<strong>Particular solution: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> This is the curve in the figure for $y(0) = 2$."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "Separable Equations",
   "summary": "The equation $y' = g(x)\\,h(y)$: separating the variables, stationary solutions, equations of the type $y' = f(ax + by + c)$.",
   "theory": [
    "<p>An equation with <strong>separable variables</strong> has the form $y' = g(x)\\,h(y)$, where $g$ is continuous on an interval $I$\n       and $h$ is continuous on an interval $J$. Equivalently, it can be written in differential form $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$.</p>\n       <p><strong>Procedure:</strong></p>\n       <ol><li>Find the zeros of the function $h$. If $h(c) = 0$, the constant $y = c$ is a solution, a so-called <strong>stationary solution</strong> (equilibrium solution).</li>\n       <li>For $h(y)\\neq 0$, separate the variables: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>Integrate: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. We get the solution in implicit form, which we express explicitly if possible.</li>\n       <li>Determine the constant $C$ from the initial condition and check on which interval the solution exists.</li></ol>",
    "<p><strong>Watch out for lost solutions.</strong> Dividing by $h(y)$ can lose stationary solutions, so they must be listed separately\n       (sometimes they are contained in the general solution for $C = 0$; for example, for $y' = ky$ the formula $y = C\\mathrm{e}^{kx}$ also gives $y = 0$).\n       The solution of a nonlinear equation need not exist on all of $\\mathbb{R}$, even if the right-hand side is nice: the solution of the problem $y' = y^{2}$, $y(0) = 1$\n       is $y = \\frac{1}{1 - x}$ and exists only on the interval $(-\\infty, 1)$.</p>\n       <p><strong>Equations of the type $y' = f(ax + by + c)$</strong> are turned into the separable equation $z' = a + b\\,f(z)$ by the substitution $z = ax + by + c$.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "The equation $y' = xy$ has the general solution $y = C\\mathrm{e}^{x^{2}/2}$. The green $x$-axis is the stationary solution $y = 0$ (for $C = 0$), the blue curve is the solution with the condition $y(0) = 1$. The integral curves do not cross, as the uniqueness theorem guarantees."
    }
   ],
   "examples": [
    {
     "task": "Solve the initial value problem $y' = xy^{2}$, $y(0) = 1$, and determine the interval on which the solution exists.",
     "steps": [
      "The stationary solution is $y = 0$, but it does not satisfy the condition $y(0) = 1$.",
      "For $y\\neq 0$: $\\frac{dy}{y^{2}} = x\\,dx$; after integrating, $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.",
      "From the condition $-1 = C$, so $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ and $y = \\frac{2}{2 - x^{2}}$.",
      "<strong>The solution $y = \\frac{2}{2 - x^{2}}$ exists on the interval $(-\\sqrt{2}, \\sqrt{2})$</strong>, which contains the point $x_0 = 0$; at the points $\\pm\\sqrt{2}$ the graph has vertical asymptotes."
     ]
    },
    {
     "task": "Solve the initial value problem $y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$.",
     "steps": [
      "The right-hand side is a product: $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. Separate the variables: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "Integrate: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. From the condition $2 = 1 + C$, so $C = 1$.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>; the solution exists on all of $\\mathbb{R}$."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "Homogeneous Differential Equations",
   "summary": "Equations $y' = \\varphi\\left(\\frac{y}{x}\\right)$, the substitution $y = ux$ and equations reducible to homogeneous ones.",
   "theory": [
    "<p>A function $f(x, y)$ is <strong>homogeneous of degree $k$</strong> if $f(tx, ty) = t^{k}f(x, y)$ for all $t \\gt 0$. The equation $y' = f(x, y)$ is called\n       <strong>homogeneous</strong> if $f$ is homogeneous of degree $0$; then $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$, so the equation has the form\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       The equation $M(x, y)\\,dx + N(x, y)\\,dy = 0$ is homogeneous if $M$ and $N$ are both homogeneous functions of the same degree\n       (for example $\\frac{x^{2} + y^{2}}{xy}$: both the numerator and the denominator have degree $2$).</p>",
    "<p><strong>The substitution $y = ux$</strong>, where $u = u(x)$ is a new unknown function. Then $y' = u + xu'$ and the equation becomes\n       $$xu' = \\varphi(u) - u,$$\n       which is a separable equation: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. If $\\varphi(u_0) = u_0$, the line $y = u_0x$\n       is a solution. After integrating we substitute back $u = \\frac{y}{x}$.</p>\n       <p><strong>Equations reducible to homogeneous ones</strong>: $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$ with a nonzero determinant\n       $a_1b_2 - a_2b_1$. By the shift $x = X + x_0$, $y = Y + y_0$, where $(x_0, y_0)$ is the intersection of the lines $a_ix + b_iy + c_i = 0$, the constant terms disappear.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "For a homogeneous equation, the direction field has the same direction along each line $y = ux$ through the origin (dashed lines). The equation $y' = \\frac{x + y}{x - y}$ has, in polar coordinates, the solutions $r = C\\mathrm{e}^{\\varphi}$, i.e. logarithmic spirals."
    }
   ],
   "examples": [
    {
     "task": "Find the general solution of the equation $y' = \\dfrac{x^{2} + y^{2}}{xy}$ for $x \\gt 0$.",
     "steps": [
      "The numerator and the denominator are both homogeneous of degree $2$. After dividing by $x^{2}$: $y' = \\frac{1 + u^{2}}{u}$, where $u = \\frac{y}{x}$.",
      "Substitute $y' = u + xu'$: $u + xu' = \\frac{1}{u} + u$, so $xu' = \\frac{1}{u}$.",
      "Separate the variables: $u\\,du = \\frac{dx}{x}$; after integrating, $\\frac{u^{2}}{2} = \\ln x + C$.",
      "<strong>Solution: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, where $C_1 = 2C$."
     ]
    },
    {
     "task": "Solve the initial value problem $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$.",
     "steps": [
      "Substitution $y = ux$: $u + xu' = u + \\mathrm{e}^{-u}$, so $xu' = \\mathrm{e}^{-u}$.",
      "Separate the variables: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, so $\\mathrm{e}^{u} = \\ln x + C$.",
      "From the condition $u(1) = 0$: $1 = 0 + C$, so $C = 1$ and $u = \\ln(1 + \\ln x)$.",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong> for $x \\gt \\mathrm{e}^{-1}$."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "First-Order Linear Equations and the Bernoulli Equation",
   "summary": "The integrating factor, variation of the constant, the structure of the solution $y = y_h + y_p$ and the substitution $z = y^{1-n}$.",
   "theory": [
    "<p>A <strong>first-order linear equation</strong> has the form $y' + p(x)\\,y = q(x)$, where $p, q$ are continuous on an interval $I$. If $q = 0$, the equation is\n       <strong>homogeneous</strong> (in the sense of linear equations) and separable: $y_h = C\\mathrm{e}^{-P(x)}$, where $P$ is any antiderivative of $p$.\n       The general solution of the nonhomogeneous equation is $y = y_h + y_p$, the sum of the general solution of the homogeneous equation and one (particular) solution\n       of the nonhomogeneous equation. The initial value problem has exactly one solution on all of $I$.</p>",
    "<p><strong>Integrating factor.</strong> We multiply the equation by $\\mu(x) = \\mathrm{e}^{P(x)}$. The left-hand side then becomes the derivative of a product:\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       <strong>Variation of the constant</strong> (variation of parameters) leads to the same result: we look for the solution in the form $y = C(x)\\,\\mathrm{e}^{-P(x)}$; after substituting,\n       the terms with $C(x)$ cancel and we are left with $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$.</p>",
    "<p><strong>The Bernoulli equation</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. We divide it by $y^{n}$ and introduce $z = y^{1-n}$,\n       so that $z' = (1-n)\\,y^{-n}y'$. We get the linear equation\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       For $n \\gt 0$, $y = 0$ is also a solution, which is lost by the division. For example, the logistic equation $y' = ry - \\frac{r}{K}y^{2}$ is a Bernoulli equation with $n = 2$.</p>"
   ],
   "examples": [
    {
     "task": "Solve the initial value problem $y' + 2y = 4x$, $y(0) = 1$.",
     "steps": [
      "$p = 2$, integrating factor $\\mu = \\mathrm{e}^{2x}$. The equation becomes $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$.",
      "By parts: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, so $y = 2x - 1 + C\\mathrm{e}^{-2x}$.",
      "From the condition: $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Check: $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "Find the general solution of the Bernoulli equation $y' + \\dfrac{y}{x} = xy^{2}$ for $x \\gt 0$.",
     "steps": [
      "$n = 2$, so $z = y^{-1}$ and $z' = -y^{-2}y'$. After dividing the equation by $y^{2}$: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, i.e. $-z' + \\frac{z}{x} = x$.",
      "The linear equation $z' - \\frac{z}{x} = -x$ has the integrating factor $\\mu = \\frac{1}{x}$: $\\left(\\frac{z}{x}\\right)' = -1$, so $z = Cx - x^{2}$.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, and in addition the stationary solution $y = 0$."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "Exact Equations and Integrating Factors",
   "summary": "The equation $M\\,dx + N\\,dy = 0$ with $M_y = N_x$, the potential function $F(x, y)$ and an integrating factor depending on one variable.",
   "theory": [
    "<p>The equation $M(x, y)\\,dx + N(x, y)\\,dy = 0$ is <strong>exact</strong> on a region $D$ if there is a function $F(x, y)$ (a potential function) such that\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       i.e. the left-hand side is the total differential $dF$. Along every solution we then have $dF = 0$, so the <strong>general integral</strong> is $F(x, y) = C$:\n       the integral curves are the level curves of the function $F$.</p>\n       <p><strong>Criterion.</strong> If $M, N$ are continuously differentiable on a simply connected region, the equation is exact exactly when\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>Computing $F$.</strong> We integrate $M$ with respect to $x$ (treating $y$ as a constant): $F = \\int M\\,dx + \\varphi(y)$.\n       We determine the unknown function $\\varphi$ from the condition $\\frac{\\partial F}{\\partial y} = N$, which gives $\\varphi'(y)$ depending only on $y$.\n       We could just as well start by integrating $N$ with respect to $y$.</p>\n       <p><strong>Integrating factor.</strong> If the equation is not exact, we look for a function $\\mu \\neq 0$ such that $\\mu M\\,dx + \\mu N\\,dy = 0$ is exact,\n       i.e. $(\\mu M)_y = (\\mu N)_x$. In two simple cases:</p>\n       <ul><li>if $\\dfrac{M_y - N_x}{N} = \\omega(x)$ depends only on $x$, then $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>\n       <li>if $\\dfrac{N_x - M_y}{M} = \\omega(y)$ depends only on $y$, then $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>For example, the linear equation $y' + p(x)y = q(x)$, written as $(p y - q)\\,dx + dy = 0$, has $\\omega = p(x)$ and the familiar factor $\\mu = \\mathrm{e}^{\\int p\\,dx}$.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "The equation $(2x - y)\\,dx + (2y - x)\\,dy = 0$ is exact with $F(x, y) = x^{2} - xy + y^{2}$. The integral curves are the ellipses $F = C$; the curve through the point $(1, 2)$ corresponds to $C = 3$."
    }
   ],
   "examples": [
    {
     "task": "Solve the equation $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ and find the integral curve passing through the point $(1, 1)$.",
     "steps": [
      "$M_y = 2x$ and $N_x = 2x$, so the equation is exact.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$, so $\\varphi'(y) = 2y$ and $\\varphi(y) = y^{2}$.",
      "General integral $x^{2}y + x^{3} + y^{2} = C$. The point $(1, 1)$ gives $C = 3$.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "Find an integrating factor of the equation $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) and solve the equation.",
     "steps": [
      "$M_y = 1$, $N_x = -1$, so the equation is not exact. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ depends only on $x$.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. New equation: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, where $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.",
      "$F = -\\frac{y}{x} + x$ (check both $F_x$ and $F_y$), general integral $x - \\frac{y}{x} = C$.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "Applications of First-Order Equations",
   "summary": "Population growth and radioactive decay, Newton's law of cooling, the logistic equation, the RC circuit and mixing solutions.",
   "theory": [
    "<p><strong>Exponential growth and decay.</strong> If the rate of change of a quantity is proportional to its current value, then $y' = ky$, so\n       $y(t) = y_0\\mathrm{e}^{kt}$. For $k \\gt 0$ this is growth (a population, compound interest with continuous compounding), and the doubling time is $\\frac{\\ln 2}{k}$.\n       For $k \\lt 0$ it is decay; a radioactive isotope with <strong>half-life</strong> $T$ has $k = -\\frac{\\ln 2}{T}$, and hence $m(t) = m_0\\cdot 2^{-t/T}$.</p>\n       <p><strong>Newton's law of cooling.</strong> The temperature of a body in surroundings with constant temperature $T_o$ changes at a rate proportional to the temperature difference:\n       $T' = -k(T - T_o)$, $k \\gt 0$. The solution is $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; the constant $k$ is usually found from one additional measurement.</p>",
    {
     "fig": "v3-rast",
     "caption": "The blue curve is the solution of $y' = ky$, $y(0) = 1$; the green one is the solution of the logistic equation with the same $k$ and carrying capacity $K$ (dashed line). At first they are almost identical, but the logistic curve levels off at the value $K$."
    },
    "<p>The <strong>logistic equation</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ describes growth with limited resources; $K$ is the carrying capacity of the environment.\n       It is separable (and also a Bernoulli equation), and its solution is\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       The stationary solutions are $P = 0$ (unstable) and $P = K$ (stable). The population grows fastest at $P = \\frac{K}{2}$, which happens at the time $t = \\frac{\\ln A}{r}$.</p>",
    "<p><strong>RC circuit.</strong> For the charge of a capacitor being charged from a source with voltage $U$ through a resistor $R$ we have $Rq' + \\frac{q}{C} = U$.\n       With zero initial charge, the voltage across the capacitor is $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, where $\\tau = RC$ is the <strong>time constant</strong>\n       (in the time $\\tau$ the capacitor charges to about $63\\,\\%$ of the voltage $U$).</p>\n       <p><strong>Mixing solutions.</strong> A tank contains $V$ litres of solution; $q$ litres per minute of a solution with concentration $c$ flow in, and the perfectly mixed solution\n       flows out at the same rate. For the amount of substance $x(t)$ the balance “inflow minus outflow” holds:\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "Coffee at a temperature of $90\\,{}^\\circ\\mathrm{C}$ stands in a room at $20\\,{}^\\circ\\mathrm{C}$. After $10$ minutes it is at $60\\,{}^\\circ\\mathrm{C}$. When will it cool down to $40\\,{}^\\circ\\mathrm{C}$?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. From the measurement $60 = 20 + 70\\,\\mathrm{e}^{-10k}$, so $\\mathrm{e}^{-10k} = \\frac{4}{7}$ and $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0.0560$.",
      "The condition $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ gives $\\mathrm{e}^{-kt} = \\frac{2}{7}$, so $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3.5}{\\ln 1.75}$.",
      "<strong>$t \\approx 22.4$ minutes.</strong>"
     ]
    },
    {
     "task": "A tank contains $100$ litres of water in which $5\\,\\mathrm{kg}$ of salt is dissolved. A solution with concentration $0.2\\,\\mathrm{kg/l}$ flows in at $4$ litres per minute, and the mixed solution flows out at the same rate. How much salt is in the tank after $25$ minutes?",
     "steps": [
      "Balance: $x' = 0.2\\cdot 4 - \\frac{4}{100}x = 0.8 - 0.04x$, $x(0) = 5$.",
      "A linear equation with constant coefficients: the equilibrium value is $x = 20$, so $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0.04t} = 20 - 15\\,\\mathrm{e}^{-0.04t}$.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14.48\\,\\mathrm{kg}$.</strong> As $t\\to\\infty$, the amount approaches $20\\,\\mathrm{kg}$."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "Second-Order Linear Equations with Constant Coefficients",
   "summary": "Fundamental system, the Wronskian, the characteristic equation and the three types of its roots.",
   "theory": [
    "<p>A <strong>second-order linear homogeneous equation</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ with coefficients continuous on an interval $I$ has these properties:</p>\n       <ul><li><strong>Superposition principle:</strong> every linear combination of solutions is again a solution; the solutions form a vector space of dimension $2$.</li>\n       <li>A <strong>fundamental system</strong> is a pair of linearly independent solutions $y_1, y_2$; the general solution is $y = C_1y_1 + C_2y_2$.</li>\n       <li>The <strong>Wronskian</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. The solutions $y_1, y_2$ are linearly independent exactly\n       when $W(x)\\neq 0$ (at one point is enough). <strong>Liouville's formula</strong> (Abel's identity) holds: $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$.</li></ul>",
    "<p><strong>Constant coefficients.</strong> For $y'' + py' + qy = 0$ we try $y = \\mathrm{e}^{\\lambda x}$. After substituting and dividing by $\\mathrm{e}^{\\lambda x}$ we get the\n       <strong>characteristic equation</strong> $\\lambda^{2} + p\\lambda + q = 0$. Depending on its roots:</p>\n       <table class=\"tbl\"><tr><th>roots</th><th>fundamental system</th><th>general solution</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ real</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ double</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>For complex roots we take the real and imaginary parts of the complex solution $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$.\n       The same procedure works for higher-order equations: a root $\\lambda$ of multiplicity $k$ corresponds to the functions $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$.</p>",
    {
     "fig": "v3-rad2",
     "caption": "The solution of the equation $y'' + py' + qy = 0$ with the initial conditions $y(0) = 1$, $y'(0) = 0$. With complex roots the solution oscillates, with real roots it does not; the sign of the real part of the roots decides whether the solution is damped or grows."
    }
   ],
   "examples": [
    {
     "task": "Solve the initial value problem $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$.",
     "steps": [
      "The characteristic equation $\\lambda^{2} - \\lambda - 6 = 0$ has the roots $\\lambda_1 = 3$, $\\lambda_2 = -2$.",
      "General solution $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, derivative $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "Conditions: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$, hence $C_1 = 2$, $C_2 = -1$.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "Find a fundamental system of the equation $y'' + 4y' + 13y = 0$ and compute its Wronskian.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, roots $\\lambda = -2\\pm 3\\mathrm{i}$.",
      "Fundamental system: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, in agreement with Liouville's formula $W(x) = W(0)\\,\\mathrm{e}^{-4x}$."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "Nonhomogeneous Second-Order Equations",
   "summary": "The structure of the solution $y = y_h + y_p$, the method of undetermined coefficients for a special right-hand side, and variation of constants.",
   "theory": [
    "<p>The general solution of the equation $y'' + py' + qy = f(x)$ is $y = y_h + y_p$, where $y_h = C_1y_1 + C_2y_2$ is the general solution of the corresponding homogeneous equation\n       and $y_p$ is any one (particular) solution of the nonhomogeneous equation. If $f = f_1 + f_2$, we can look for particular solutions for $f_1$ and $f_2$\n       separately and add them (<strong>superposition principle</strong>).</p>",
    "<p><strong>Method of undetermined coefficients</strong> (special right-hand side). If $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$\n       with polynomials $P_m, Q_n$, we look for a particular solution in the form\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       where $R_N, S_N$ are polynomials of degree $N$ with unknown coefficients and $k$ is the multiplicity of the number $\\alpha + \\beta\\mathrm{i}$ as a root of the characteristic equation\n       ($k = 0$ if it is not a root). We find the coefficients by substituting into the equation and comparing.</p>\n       <table class=\"tbl\"><tr><th>right-hand side $f(x)$</th><th>form of $y_p$ (if there is no resonance)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ (if $q\\neq 0$)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>If $\\alpha + \\beta\\mathrm{i}$ is a root of the characteristic equation (<strong>resonance</strong>), we multiply the form by $x$, and for a double root by $x^{2}$.</p>",
    "<p><strong>Variation of constants</strong> (variation of parameters) works for any continuous right-hand side. We look for the solution in the form $y = C_1(x)y_1 + C_2(x)y_2$ with the condition\n       $C_1'y_1 + C_2'y_2 = 0$. Substituting gives the system\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       whose solution is $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$, where $W$ is the Wronskian. We need this method, for example, for the right-hand sides\n       $\\frac{1}{\\cos x}$, $\\tan x$, $\\ln x$ or $\\frac{\\mathrm{e}^{x}}{x}$.</p>"
   ],
   "examples": [
    {
     "task": "Find the general solution of the equation $y'' - 3y' + 2y = \\mathrm{e}^{x}$.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ has the roots $1$ and $2$, so $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.",
      "The number $\\alpha = 1$ is a simple root (resonance), so $y_p = Ax\\mathrm{e}^{x}$. Then $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$.",
      "Substitute: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, so $A = -1$.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "Use variation of constants to solve the equation $y'' + y = \\dfrac{1}{\\cos x}$ on the interval $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$, so $C_1 = \\ln(\\cos x) + K_1$; $C_2' = \\frac{\\cos x}{\\cos x} = 1$, so $C_2 = x + K_2$.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "Oscillations: Undamped, Damped and Forced",
   "summary": "The equation $mx'' + cx' + kx = F(t)$, underdamping, critical damping and overdamping, forced oscillations and resonance.",
   "theory": [
    "<p>A body of mass $m$ on a spring with stiffness $k$, damped by a force proportional to its velocity (coefficient $c$) and driven by an external force $F(t)$, obeys the equation\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       where $\\omega_0 = \\sqrt{k/m}$ is the <strong>natural angular frequency</strong> and $\\delta = \\frac{c}{2m}$ is the <strong>damping coefficient</strong>.\n       The same equation describes the charge in a series $RLC$ circuit: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>Undamped oscillations</strong> ($c = 0$, $F = 0$): $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$ with amplitude\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$ and period $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$.</p>",
    "<p><strong>Damped oscillations</strong> ($F = 0$). The characteristic equation $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ has the roots $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$:</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>underdamping</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; oscillations with an exponentially decreasing amplitude;</li>\n       <li>$\\delta = \\omega_0$ (<strong>critical damping</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>overdamping</strong>): the sum of two decreasing exponentials, an aperiodic motion.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "The displacement $x(t)$ for $\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$. The dashed curves $\\pm\\mathrm{e}^{-\\delta t}$ bound the damped oscillations. Critical damping occurs at $\\delta = 2$."
    },
    "<p><strong>Forced oscillations</strong>, $F(t) = F_0\\cos\\omega t$. Without damping and for $\\omega\\neq\\omega_0$ the particular solution is\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$. At $\\omega = \\omega_0$ <strong>resonance</strong> occurs: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$,\n       and the amplitude grows without bound. With damping, the free oscillations die out and a steady state remains with the amplitude\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       which is largest at $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ (if $\\omega_0^{2} \\gt 2\\delta^{2}$).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "The resonance curve $A(\\omega)$ for $\\omega_0 = 2$ and $F_0/m = 1$. With small damping the maximum is sharp and close to the natural frequency (dashed line)."
    }
   ],
   "examples": [
    {
     "task": "A body of mass $1\\,\\mathrm{kg}$ on a spring with stiffness $16\\,\\mathrm{N/m}$ is damped with coefficient $c = 4\\,\\mathrm{kg/s}$. At the start it is displaced by $0.1\\,\\mathrm{m}$ and released from rest. Find $x(t)$.",
     "steps": [
      "$x'' + 4x' + 16x = 0$, so $\\delta = 2$, $\\omega_0 = 4$. Since $\\delta \\lt \\omega_0$, this is underdamping.",
      "Roots $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.",
      "$x(0) = C_1 = 0.1$; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, so $C_2 = \\frac{0.1}{\\sqrt{3}}$.",
      "<strong>$x(t) = 0.1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "Solve the problem $x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$.",
     "steps": [
      "The driving frequency equals the natural one ($\\omega = \\omega_0 = 3$), so resonance occurs: $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "Substituting gives $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$, so $A = 0$, $B = 1$, $x_p = t\\sin 3t$.",
      "General solution $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$; from the conditions $C_1 = 0$ and $3C_2 = 0$.",
      "<strong>$x(t) = t\\sin 3t$</strong>; the amplitude grows linearly with time."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "Systems of Linear Differential Equations and the Phase Portrait",
   "summary": "The system $\\mathbf{x}' = A\\mathbf{x}$, solution using eigenvalues and eigenvectors, classification of the equilibrium point.",
   "theory": [
    "<p>A system of first-order linear equations with constant coefficients has the form $\\mathbf{x}' = A\\mathbf{x}$, where $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ and $A$ is\n       a square matrix. The solutions form a vector space of dimension $n$; a matrix whose columns are $n$ linearly independent solutions is called a\n       <strong>fundamental matrix</strong>. Every $n$-th-order equation can be written as a system (e.g. for $y'' + py' + qy = 0$ we set $x_1 = y$, $x_2 = y'$),\n       and conversely a $2\\times 2$ system can be turned into a single second-order equation by the <strong>elimination method</strong>.</p>",
    "<p><strong>Matrix method.</strong> We look for a solution $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$. Substituting gives $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$ is an\n       <strong>eigenvalue</strong> of the matrix $A$ (a root of the equation $\\det(A - \\lambda I) = 0$) and $\\mathbf{v}$ is a corresponding eigenvector.</p>\n       <ul><li>Distinct real $\\lambda_1, \\lambda_2$: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>Complex $\\lambda = \\alpha\\pm\\beta\\mathrm{i}$ with the vector $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$: the real solutions are the real and imaginary parts of\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$, i.e. $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ and $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>\n       <li>A double $\\lambda$ with a single eigenvector $\\mathbf{v}$: the second solution is $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$, where $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>",
    "<p>The <strong>phase portrait</strong> of a planar system shows the trajectories $(x(t), y(t))$ in the $xy$-plane. The point $\\mathbf{0}$ is an equilibrium (stationary) point, and for\n       $\\det A\\neq 0$ it is the only one. Its type is determined by the eigenvalues, or by the trace $\\mathrm{tr}\\,A$ and the determinant:</p>\n       <table class=\"tbl\"><tr><th>eigenvalues</th><th>type</th><th>stability</th></tr>\n       <tr><td>real, of opposite signs ($\\det A \\lt 0$)</td><td>saddle</td><td>unstable</td></tr>\n       <tr><td>real, of the same sign</td><td>node</td><td>stable for $\\lambda \\lt 0$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>focus (spirals)</td><td>stable for $\\alpha \\lt 0$</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>centre (closed curves)</td><td>stable, but not asymptotically</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "Phase portrait of the system $x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$. The orange lines are the eigenvector directions (for real eigenvalues), and the small triangles show the direction of motion as $t$ increases. Change the matrix entries to go through all the types in the table."
    }
   ],
   "examples": [
    {
     "task": "Solve the system $x' = x + 2y$, $y' = 2x + y$ with the initial condition $x(0) = 3$, $y(0) = 1$.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, so $\\lambda_1 = 3$, $\\lambda_2 = -1$.",
      "Eigenvectors: for $\\lambda_1 = 3$, $\\mathbf{v}_1 = (1, 1)^{T}$; for $\\lambda_2 = -1$, $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Conditions: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, so $C_1 = 2$, $C_2 = 1$.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> The eigenvalues have opposite signs, so the equilibrium point is a saddle."
     ]
    },
    {
     "task": "Determine the type of the equilibrium point of the system $x' = y$, $y' = -5x - 2y$ and compare it with a second-order equation.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, characteristic equation $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "The eigenvalues $-1\\pm 2\\mathrm{i}$ have a negative real part: a <strong>stable focus</strong>; the trajectories spiral in towards the origin.",
      "The system is a way of writing the equation $x'' + 2x' + 5x = 0$ (damped oscillations); its solution is $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "The Laplace Transform",
   "summary": "Definition, table of transforms, the transform of a derivative, inverse transform via partial fractions and solving initial value problems.",
   "theory": [
    "<p>The <strong>Laplace transform</strong> assigns to a function $f(t)$ defined for $t \\ge 0$ a function of a complex (for us, real) variable $s$:\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       The integral converges for $s \\gt s_0$ if $f$ is piecewise continuous and of <strong>exponential order</strong>, i.e. $|f(t)| \\le M\\mathrm{e}^{s_0t}$.\n       For example, $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ for $s \\gt a$. The transform is linear\n       and one-to-one for continuous functions, so for a transform $F$ there is a unique original $f = \\mathcal{L}^{-1}\\{F\\}$.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>Here $u$ is the Heaviside function (unit step). The transform of the convolution $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ is the product $F(s)G(s)$.</p>",
    "<p><strong>Solving an initial value problem.</strong> The rule for the transform of a derivative turns a linear equation with constant coefficients into an algebraic equation for $Y(s)$,\n       and the initial conditions are built into it automatically. From it we express $Y(s)$ (usually a rational function), decompose it into\n       <strong>partial fractions</strong> and use the table to find $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$. The method is especially convenient for discontinuous or impulse right-hand sides.</p>",
    {
     "fig": "v3-laplace",
     "caption": "The solution procedure: transform, algebraic manipulation in the transform domain, and inverse transform."
    }
   ],
   "examples": [
    {
     "task": "Find the Laplace transform of the function $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$.",
     "steps": [
      "We use linearity and the table: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong> for $s \\gt 2$."
     ]
    },
    {
     "task": "Use the Laplace transform to solve the problem $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$.",
     "steps": [
      "Transform: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, so $(s^{2} + 3s + 2)Y = s + 3$.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (partial fractions, e.g. by the cover-up method).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Check: $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. The characteristic equation is $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, where $\\mathrm{tr}\\,A = {@2}$ and $\\det A = {@3}$. The roots are $\\lambda_1 = {@4}$ and $\\lambda_2 = {@5}$.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ and ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ and ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$, so $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ depends only on $x$. Therefore $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Check: $(\\mu M)_y = {@11}$ and $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ with $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, so about ${@8}$ individuals.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. The condition $P = \\frac{K}{2}$ means $A\\mathrm{e}^{-{@4}t} = 1$, so $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ years.",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$; from the measurement $k = {@2} \\approx {@3}$. From the condition ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ we get $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minutes.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (double root)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ and $\\mathcal{L}\\{y'\\} = sY{@2}$. After substituting, $({@3})Y = {@4}{@5}{@6}$, so ${@7}$.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, the discriminant of the characteristic equation is $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$, the solution is $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ with $C_1 = x(0) = {@3}$ and ${@4}C_2 = x'(0) = {@5}$, so $C_2 = {@6}$. Amplitude $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. From the condition $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ we get $\\mathrm{e}^{-t/\\tau} = {@2}$, so $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$, so $\\varphi$ is a constant, which we choose to be zero",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$, so $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. From the condition $2^{-t/{@1}} = {@2}$, taking logarithms, $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. After substituting and comparing coefficients: for $x^{2}$: ${@0} = {@1}$, $A = {@2}$; for $x$: ${@3} = {@4}$, $B = {@5}$; constant term: ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. We substitute: ${@0}{@1} = {@2}$. Comparing coefficients: for $x$, ${@3} = {@4}$, so $A = {@5}$; constant term ${@6} = {@7}$, so $B = {@8}$.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$, so $K = {@1}$ and $m = {@2}$. This agrees with Liouville's formula: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ with $p = {@3}$.",
  ", teda $a = {@0}$": ", so $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "The constant term in the numerator spoils homogeneity. Such an equation must first be shifted to the intersection of the lines.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "What amount of salt (in kg) is the equilibrium, i.e. gives $x' = 0$?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "What will the voltage across the capacitor be (in volts)? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "What is the slope of the direction field segment of the equation $y' = {@0}$ at the point $[{@1}; {@2}]$?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "What will the temperature of the body be? Round to tenths of a degree.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "What is the total coefficient of $\\frac{1}{{@0}}$ in $Y(s)$, i.e. $A$?",
  "Aký je súčin koreňov?": "What is the product of the roots?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "The amplitude is not the sum $|C_1| + |C_2|$, but $\\sqrt{C_1^{2} + C_2^{2}}$ (combining a cosine and a sine with the same frequency).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "Amplitude of forced oscillations as a function of frequency",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "The Bernoulli equation $y'{@0} = {@1}$ is transformed by the substitution $z = y^{k}$ into a linear equation $z' + Pz = Q$ with constant coefficients. Find $k$, $P$ and $Q$ (write fractions in the form $a/b$).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "The characteristic equation ${@0}$ has discriminant $D = {@1}$ and roots {@2}. {@3} the general solution is ${@4}$.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "The characteristic equation ${@0}$ has roots $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. From the first row of $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ for $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, so $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. For $t = 0$: $C_1 + C_2 = {@7}$ and ${@8} = {@9}$, hence $C_1 = {@10}$, $C_2 = {@11}$.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "The characteristic equation ${@0}$ has roots ${@1}$ and ${@2}$, so ${@3}$ is a simple root (resonance) and the form of $y_p$ contains the factor $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. After substituting, the terms with $x$ cancel and what remains is $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, so $A = {@16}$.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "The characteristic equation ${@0}$ has roots {@1}, so ${@2}$. Substituting $x = 0$ into $y$ and $y'$ gives the system {@3}, whose solution is $C_1 = {@4}$, $C_2 = {@5}$.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "The characteristic equation ${@0}$ has {@1}. The right-hand side is {@2}{@3}, so $\\alpha = {@4}$, which {@5} of the characteristic equation ($k = {@6}$). Therefore $y_p = {@7}$.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "The characteristic equation (after dividing by the coefficient of $y''$) is $\\lambda^{2} + p\\lambda + q = 0$. What is the sum of its roots?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "You divided only by ${@0}$, but the solution contains $x^{2}$, i.e. $x_0^{2}$.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "The derivative of $(C_1 + C_2x){@0}$ at $x = 0$ has the value ${@1}C_1 + C_2$; you forgot the term from the derivative of the exponential.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "The derivative of $C_2\\sin {@0}t$ is ${@1}C_2\\cos {@2}t$, so $C_2 = \\frac{x'(0)}{\\omega_0}$, not $x'(0)$.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "The derivatives of $y_p$ are not zero: $y_p' = {@0}A{@1}$ and $y_p'' = {@2}A{@3}$ must be substituted too.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "The determinant is negative, the eigenvalues are real with opposite signs: a saddle.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "Substitute $x = 0$ and $y = y_0$ into the general solution and express $C$.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "Substituting $y = \\mathrm{e}^{\\lambda x}$ we get {@0}${@1}$. By Vieta's formulas $\\lambda_1 + \\lambda_2 = {@2}$ and $\\lambda_1\\lambda_2 = {@3}$, the roots are {@4}. The general solution is ${@5}$.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "We substitute $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, hence $C = {@3}$. The solution of the initial value problem is $y = {@4}$.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "We substitute $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, so $({@3} - {@4})A = {@5}$ and $A = {@6}$. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "We substitute: $C\\cdot {@0}^{2}{@1} = {@2}$, so ${@3}C = {@4}$ and $C = {@5}$.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "We substitute: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, so $\\frac{C}{{@4}} = {@5}$ and $C = {@6}$. (Check: the left-hand side of the equation is $(xy)'$ and $xy = {@7} + C$.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "Substitute $P = \\frac{K}{2}$ into the solution $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; you get $A\\mathrm{e}^{-rt} = 1$.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "Substitute $t = 0$ and solve the system for the constants. Enter $C_1$ and $C_2$.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "Substitute $tx$ for $x$ and $ty$ for $y$. For a homogeneous equation the right-hand side does not change.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "Substitute $x = 0$ into $y_1, y_2, y_1', y_2'$.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "Substitute $x = 0$ into the general solution and its derivative and find $C_1$ from the resulting system.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "Substitute $x = x_0$, $y = y_0$ into the general solution and express $C$.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "Substitute $x = x_0$, $y = y_0$ into the general solution and solve the linear equation for $C$.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "Substitute $x_p$ into the equation: $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "Substitute $y_p = Ax + B$ into the equation and compare the coefficients of $x$ and the constant terms.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "Substitute $y_p = A{@0}$ into the equation and find $A$.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "Substitute $y_p$ into the equation and compare the coefficients of the cosine and the sine; you get a system of two equations for $A$, $B$.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "Substitute the constant $y_p = K$ into the equation ($y_p' = 0$) and carefully express $K$.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "The second derivative of the cosine is negative: $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "It is not the temperature of the body itself that decreases exponentially, but its difference from the ambient temperature $T - T_o$.",
  "Exponenciálny a logistický rast": "Exponential and logistic growth",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "The exponent is the real part of the roots $\\alpha = -\\frac{p}{2}$; check its sign.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "The function $1 + y^{2}$ has no zeros, so there are no stationary solutions. We separate the variables: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, so $\\mathrm{arctg}\\,y = {@1} + C$ and $y = \\mathrm{tg}({@2} + C)$. The constant is inside the argument; for example $y = \\mathrm{tg}({@3}) + C$ does not satisfy the equation for $C\\neq 0$.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "The functions ${@0}$ form a fundamental system of the equation ${@1} = 0$. Their Wronskian has the form $W(x) = K\\mathrm{e}^{mx}$. Find $K$ and $m$.",
  "Fázový portrét lineárnej sústavy": "Phase portrait of a linear system",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "Trigonometric functions belong to complex roots ($D \\lt 0$). What is the discriminant here?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "The homogeneous equation $y'{@0} = 0$ gives $y' = {@1}$; check the sign in the exponent.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "The homogeneous equation $y'{@0} = 0$ has the solution $y_h = C{@1}$. We look for a particular solution as a constant $y_p = K$: ${@2}K = {@3}$, so $K = {@4}$. The general solution is ${@5}$.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "Look for the highest order of a derivative. An exponent outside the brackets, for example $(y')^{3}$, does not increase the order.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "The integrating factor is $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrating, $y{@3} = {@4} + B$, so $y = {@5} + B{@6}$ (the particular solution can also be found by substituting $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). From the condition ${@12} + B = {@13}$, so $B = {@14}$. Answer: $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "The integrating factor is ${@0}$ and the solution has the form $y = {@1} + \\frac{C}{{@2}}$. Find $C$ from the initial condition.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "Integrate $M$ with respect to $x$ (without $\\varphi(y)$) and evaluate this part of $F$ at the point $[{@0}; {@1}]$.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "Integrate $M$ with respect to $x$, add the unknown function $\\varphi(y)$ and determine it by comparing $F_y$ with $N$. Finally substitute the point.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "The integral gives $\\mathrm{arctg}\\,y = \\dots$; to express $y$ you must use the inverse function of the arctangent.",
  "Integrálne krivky rovnice y' = xy": "Integral curves of the equation y' = xy",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "Add the term from the initial condition to the coefficient from the decomposition.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "Differentiate each function and substitute into the equation. A solution must satisfy the equation for all $x$.",
  "Keďže $c^{2} = 4mk$": "Since $c^{2} = 4mk$",
  "Keďže $c^{2} \\gt 4mk$": "Since $c^{2} \\gt 4mk$",
  "Keďže $c^{2} \\lt 4mk$": "Since $c^{2} \\lt 4mk$",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "Since ${@0}\\neq {@1}$, there is no resonance.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "A positive $A$ means that the oscillations are in phase with the driving force.",
  "Koeficient p": "Coefficient p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "The coefficient of $x'$ (after dividing by the mass) is $2\\delta$, not $\\delta$. First divide it by two.",
  "Koeficient q": "Coefficient q",
  "Koeficient rastu k": "Growth rate k",
  "Koeficient útlmu δ": "Damping coefficient δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "Compute the coefficients one by one from the highest power: first $A$ from the term with $x^{2}$, then $B$, finally $C$.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "The constant $A$ comes from the condition $P(0) = \\frac{K}{1 + A} = P_0$, so $A = \\frac{K - P_0}{P_0}$, not $\\frac{K}{P_0}$.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "The constant $C$ in the solution is divided by the integrating factor ${@0}$; at $x = 2$ it must be divided too.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "The decay constant is not $\\frac{1}{T}$, but $k = \\frac{\\ln 2}{T}$: in time $T$ the amount must drop to exactly half.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "The constant arises when integrating, i.e. in the equality $\\mathrm{arctg}\\,y = \\dots + C$. When you express $y$ from it, where does $C$ end up?",
  "Koľko gramov izotopu zostane? {@0}": "How many grams of the isotope will remain? {@0}",
  "Koľko je $y({@0})^{2}$?": "What is $y({@0})^{2}$?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "How many individuals will the population have? Round to a whole number.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "How many kilograms of salt will be in the tank after ${@0}$ minutes? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "How many half-lives pass in ${@0}$ {@1}? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "Which function is the general solution of the equation $y' = {@0}(1 + y^{2})$?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "Which function is the general solution of the equation $y'{@0} = {@1}$?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "Which function is the general solution of the equation ${@0} = 0$?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "Which of the functions is a solution of the equation ${@0}$?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "Which of the equations is homogeneous, i.e. can be written in the form $y' = \\varphi\\left(\\frac{y}{x}\\right)$?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "Which is the Laplace transform $Y(s)$ of the solution of the problem ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "Use the Laplace transform to solve the problem $y'{@0} = {@1}$, $y(0) = {@2}$. The solution has the form $y(t) = A{@3} + B{@4}$; find $A$ and $B$.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "Liouville's formula: $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "The denominator is the characteristic polynomial of the equation: the coefficients of $s$ have the same signs as those of $y'$ in the equation.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "We factor the denominator: ${@0} = (s{@1})(s{@2})$. Partial fraction decomposition: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Cover-up method: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Therefore $f(t) = {@17}{@18}$.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "The power of $x$ in the form of $y_p$ equals the multiplicity of the number ${@0}$ as a root of the characteristic equation. Check this multiplicity.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "A multiplicative constant arises for equations $y' = g(x)y$ (through the logarithm). Here you integrate $\\frac{1}{1 + y^{2}}$, so the constant is additive in the argument.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "First check the sign of $\\det A$: it decides whether the eigenvalues have opposite signs.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "First find $k$ from the measurement, then solve $T(t) = T^{*}$ by taking logarithms.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "Let $F(s) = \\mathcal{L}\\{f\\}(s)$ for $f(t) = {@0}$. Compute $F({@1})$ (exactly as a fraction, or to 3 decimal places).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "An uncharged capacitor with capacitance ${@0}\\,\\mu\\mathrm{F}$ is charged from a source with voltage ${@1}\\,\\mathrm{V}$ through a resistor with resistance ${@2}\\,\\mathrm{k\\Omega}$.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "Don't add the integral of $M$ with respect to $x$ and the integral of $N$ with respect to $y$: you would count the mixed terms twice. From $N$ take only the terms that are still missing.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "An undamped oscillator $x'' + {@0}x = 0$ has the initial conditions $x(0) = {@1}$, $x'(0) = {@2}$. Find the amplitude of the oscillations. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "An undamped oscillator is driven by a periodic force: $x'' + {@0}x = {@1}$. The steady-state forced oscillations have the form $x_p = A\\cos {@2}$. Find $A$ (as a fraction or an integer).",
  "Nosná kapacita K": "Carrying capacity K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "A tank contains ${@0}$ litres of {@1}. It is fed with {@2}, and the perfectly mixed solution flows out at the same rate. How many kilograms of salt will be in the tank after ${@3}$ minutes? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "Find the roots of the characteristic equation of the differential equation ${@0}$. Enter them separated by semicolons.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "Find the eigenvalues and the eigenvectors in the form $(1, m)^{T}$, then substitute $t = 0$ and solve the system for $C_1$, $C_2$.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "Find the eigenvalues of the matrix of the system {@0}. Enter them separated by semicolons.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "Find the inverse transform $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ of the function $F(s) = \\dfrac{{@0}}{{@1}}$. The result has the form $f(t) = A{@2} + B{@3}$; find $A$ and $B$.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "The volume does not change, the concentration in the tank is $\\frac{x}{{@0}}$. Balance: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. The equilibrium value is $cV = {@5}$, so $x(t) = {@6}$ and $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "The transform of an exponential is $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, not $\\frac{1}{s + a}$.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "The transform of a power is $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; you forgot the factorial.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "We separate the variables: $y\\,dy = {@0}\\,dx$, so $\\frac{y^{2}}{2} = {@1} + C$, i.e. $y^{2} = {@2} + 2C$. From the condition $2C = {@3}$, so $y^{2} = {@4} + {@5}$. Since $y(0) \\gt 0$, we take the positive square root: $y = \\sqrt{{@6} + {@7}}$ and $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "Separate the variables $\\frac{dy}{y^{2}} = k\\,dx$ and remember that $\\int y^{-2}\\,dy = -\\frac{1}{y}$.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "Separate the variables $y\\,dy = kx\\,dx$ and integrate. Determine the sign of the square root from the initial condition.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "The square root of a sum is not the sum of the square roots: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. First add under the root.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "The outflow of salt is concentration times flow rate, i.e. $\\frac{x}{V}\\cdot q$. So the exponent must also contain the flow rate $q$.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "Check by substituting: for $y = {@0}x$ we have $xy' = {@1}x$, but the right-hand side ${@2}y$ is different.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "Check: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrating $M$ with respect to $x$: $F = {@1} + \\varphi(y)$. The condition $F_y = N$ gives {@2}. Therefore $F(x, y) = {@3}$ and $C = F({@4}, {@5}) = {@6}$.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "Look for the particular solution in the form $A\\mathrm{e}^{cx}$ (substitute into the equation), determine the constant $B$ from the initial condition.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "We look for a particular solution of the equation ${@0} = {@1}$ in the form $y_p = Ax + B$. Find $A$ and $B$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "We look for a particular solution of the equation ${@0} = {@1}$ in the form $y_p = Ax^{2} + Bx + C$. Find $A$, $B$ and $C$.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "We look for a particular solution of the equation ${@0} = {@1}$ in the form $y_p = A{@2} + B{@3}$. Find $A$ and $B$.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "The period of undamped oscillations is $T = 2\\pi\\sqrt{m/k}$.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "After substituting $x_p$ you get $KA\\cos {@0} = {@1}\\cos {@2}$. Find $K$.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "After substituting $y_p = Ax{@0}$, what remains is $A(2r + p){@1}$. Compute $2r + p$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "After substituting $y_p = A{@0}$ you get $A(c + a) = b$: the derivative gives $c$ and the term ${@1}$ adds $+a$, not $-a$.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "After substituting $y_p = A{@0}$ you get $A(c^{2} + pc + q){@1}$. Compute the value of the bracket.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "After substituting $z' = (1-n)y^{-n}y'$, the whole equation must be multiplied by $1 - n$, including the coefficients $p$ and $q$.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "After substituting, the equation for the coefficients of ${@0}$ has the form $uA{@1} = {@2}$. Find $u$.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "After integrating you have $-\\frac{1}{u} = \\ln x + C$. Find $C$ (a fraction or an integer).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "After integrating you have $\\frac{u^{2}}{2}$; when expressing $u^{2}$ you must multiply both sides by two, including the term with the logarithm.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "After integrating and multiplying by two you get $y^{2} = {@0} + K$. Find the constant $K$ from the initial condition.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "After integrating you have $-\\frac{1}{y} = {@0} + C$. Find $C$ from the initial condition (a fraction or an integer).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "After the substitution $y = ux$ and integrating, express $u^{2}$ and compute $u({@0})^{2}$. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "After the substitution $y = ux$ you get $u = {@0} + C$. Find $C$ from the initial condition.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "After transforming and expressing $Y(s)$, decompose the fraction ${@0}$ into partial fractions. What is the coefficient of $\\frac{1}{{@1}}$?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "After dividing by $x$: $y' + \\frac{{@0}}{x}y = {@1}$. The integrating factor is $\\mathrm{e}^{{@2}\\ln x} = {@3}$, the equation becomes $({@4}y)' = {@5}$, so ${@6}y = {@7} + C$ and $y = {@8} + \\frac{C}{{@9}}$. From the condition $1 + C = {@10}$, $C = {@11}$. Then $y(2) = {@12}{@13}$.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "After dividing by $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitution $y = ux$: $u + xu' = u^{2} + u$, so $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (the solution $u = 0$ does not satisfy the condition). We integrate: $-\\frac{1}{u} = \\ln x + C$, from the condition $C = {@0}$. Hence $u = \\frac{{@1}}{1{@2}}$ and $y = \\frac{{@3}}{1{@4}}$, so $y({@5}) \\approx {@6}$.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "After dividing by $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitution $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, so $u\\,du = {@2}\\frac{dx}{x}$ and $\\frac{u^{2}}{2} = {@3} + C$. From the condition $u(1) = {@4}$ we get $u^{2} = {@5} + {@6}$, and since $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Then $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "After dividing by ${@0}$: $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "The share of ${@0}\\,\\%$ belongs to the expression $1 - \\mathrm{e}^{-t/\\tau}$, not to the exponential itself.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "The exactness condition is $M_y = N_x$. We have $M_y = {@0}$ and $N_x = {@1}a{@2}{@3}$. Comparing the coefficients of {@4} we get ${@5}a = {@6}${@7}. The potential function is then $F = {@8}$.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "By Liouville's formula $W(x) = W(0)\\mathrm{e}^{-px}$; check the sign of the exponent.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "By Newton's law, $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. From the measurement $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, so $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "By Vieta's formulas the sum of the roots is $-p$.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "By the table and linearity, $F(s) = {@0}$ for $s \\gt {@1}$. Substituting $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "The motion of a body is governed by the equation ${@0}x'' + {@1}x' + {@2}x = 0$ (mass ${@3}\\,\\mathrm{kg}$, damping ${@4}\\,\\mathrm{kg/s}$, stiffness ${@5}\\,\\mathrm{N/m}$). What type of motion is it?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "The half-life of a radioactive isotope is ${@0}$ {@1}. A sample initially contains ${@2}\\,\\mathrm{g}$ of the isotope. How many grams of the isotope will remain after ${@3}$ {@4}? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "The half-life of a radioactive isotope is ${@0}$ {@1}. In how many {@2} will its amount drop to ${@3}\\,\\%$ of the original amount? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "A population is governed by the logistic equation $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ in years) and initially has ${@2}$ individuals.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "Compare $c^{2}$ with $4mk$, or the damping coefficient $\\delta = \\frac{c}{2m}$ with the natural frequency $\\omega_0 = \\sqrt{k/m}$.",
  "Porovnaj absolútne členy a urči $B$.": "Compare the constant terms and find $B$.",
  "Porovnaj absolútne členy a urči $C$.": "Compare the constant terms and find $C$.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "Compare the coefficients of $x$ and find $A$.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "Compare the coefficients of $x$ and find $B$.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "Compare the coefficients of $x^{2}$ and find $A$.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "Use $W = y_1y_2' - y_1'y_2$. You can check the exponent with Liouville's formula $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "Use $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "Use $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ and $\\mathcal{L}\\{y'\\} = sY - y(0)$ and express $Y$.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "Use the first row of the system $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "Use the formula $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, where $A = \\frac{K - P_0}{P_0}$.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "Watch the sign of $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$; after moving it to the right-hand side it is $+y'(0)$.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "Watch the sign: $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "Watch the sign: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, not $\\frac{1}{y}$.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "The right-hand side is homogeneous of degree 2, not 0: after substituting $tx$, $ty$ it gets multiplied by $t^{2}$. The form $\\varphi\\left(\\frac{y}{x}\\right)$ requires degree 0.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "The right-hand side contains only a constant (a polynomial of degree 0); the polynomial $Ax + B$ is not needed here.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "For $x_p = Bt{@0} {@1}$ we have $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (the terms with $t$ cancel). Comparing, ${@7}{@8}B = {@9}$, so $B = {@10}$. The amplitude $|B|t$ grows linearly with time.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "For $y = \\cos {@0}x$ we have $y'' = -{@1}\\cos {@2}x$, and so $y'' + {@3}y = 0$. For $\\cos {@4}x$ we would get $y'' = -{@5}\\cos {@6}x$; an exponential has a positive second derivative.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "For $y = \\mathrm{e}^{-{@0}x}$ we have $y'' = {@1}\\mathrm{e}^{-{@2}x}$, and so $y'' - {@3}y = 0$. For $\\sin {@4}x$ we get $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "For $y = x^{{@0}}$ we have $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. For $y = {@6}x$ we would get $xy' = {@7}x$, but ${@8}y = {@9}x$.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "For $y' + py = qy^{n}$ we have $z = y^{1-n}$ and $z' + (1-n)pz = (1-n)q$.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "For $y\\neq 0$ we separate the variables: $\\frac{dy}{y} = {@0}\\,dx$, so $\\ln|y| = {@1} + c$ and $y = C\\mathrm{e}^{{@2}}$ (the solution $y = 0$ is included for $C = 0$). From the condition $C = {@3}$, so $y = {@4}$ and $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "For $y_p = A\\mathrm{e}^{cx}$, substituting gives $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "For which value of the parameter $a$ is the equation $({@0})\\,dx + ({@1})\\,dy = 0$ exact?",
  "Pre dva rôzne reálne korene": "For two distinct real roots",
  "Pre dvojnásobný koreň": "For a double root",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "For complex conjugate roots $\\alpha\\pm\\beta\\mathrm{i}$",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "A polynomial of degree 1 requires the complete polynomial $Ax + B$; $Ax$ alone is not enough.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "Rewrite the equation in the form $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ and find $\\delta$.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Rewrite the equation in the form $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; then $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "At $x = 0$ we have $C\\cdot\\mathrm{e}^{0} = C$, but the solution also contains the constant term ${@0}$, which you must subtract from $y_0$.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "At $x = 0$ both exponentials equal 1, so $y(0) = A + B$. The value $A$ must be subtracted from $y(0)$.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "At $x = 1$ we have $u(1) = y(1)$.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "For $y = \\cos \\omega x$ we have $y'' = -\\omega^{2}y$; the coefficient ${@0}$ in the equation is $\\omega^{2}$, not $\\omega$.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "For $y = \\mathrm{e}^{rx}$ we have $y'' = r^{2}y$; the coefficient ${@0}$ in the equation is $r^{2}$, not $r$.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "For the constant term you forgot $y_p'' = 2A$: the second derivative also contributes a constant.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "Differentiating $x\\mathrm{e}^{rx}$ by the product rule gives the term $2rA\\mathrm{e}^{rx}$ in $y_p''$, not just $rA\\mathrm{e}^{rx}$.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "Differentiating ${@0}$ with respect to $x$ gives the coefficient ${@1}a$; the equality of coefficients must still be divided by ${@2}$.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "Differentiating the product ${@0}\\cdot(\\dots)$ also gives the term ${@1}C_1$ from the derivative of the exponential.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "Differentiating the product $t{@0} {@1}$ twice gives two equal terms without $t$, together $2\\omega_0$ times.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "With a double root you have only one exponential; you get the second independent solution by multiplying by $x$.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "With a double root the exponential is multiplied by $x$, not $x^{2}$ (that would be for a triple root).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "When integrating ${@0}$ you forgot to divide by the exponent: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "With complex roots, real exponentials are not solutions; use the form $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "For roots $\\alpha\\pm\\beta\\mathrm{i}$, the exponent contains the real part $\\alpha$ and the trigonometric functions contain the imaginary part $\\beta$; you swapped them.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "When comparing the constant terms you forgot the term ${@0} = {@1}$, which comes from the derivative.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "When moving the constant term to the other side of the equation you did not change its sign.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "With resonance at a simple root $r$, substituting $y_p = Ax\\mathrm{e}^{rx}$ gives the expression $A(2r + p)\\,\\mathrm{e}^{rx}$.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "When solving $2^{-t/T} = p$ the logarithm must be divided by $\\ln 2$ (or use the base-2 logarithm).",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "When expressing $C$ from the fraction $\\frac{C}{x_0}$ you must multiply by $x_0$, not divide.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "In the cover-up method you substitute $s = a$ into the rest of the fraction; the denominator is then $a - b$, not $b - a$.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "The antiderivative of $ax^{n}$ is $\\frac{a}{n+1}x^{n+1}$.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "The solution of the initial value problem $y'{@0} = {@1}$, $y(0) = {@2}$ has the form $y = A{@3} + B{@4}$. Find $A$ and $B$.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "We write the solution of the initial value problem ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ in the form ${@3}$. Find $C_1$ and $C_2$.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "The solution is $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; find $\\mathrm{e}^{-k}$ from the second measurement.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "The solution is the sum $y_h + y_p$: the constant particular solution is not multiplied by the exponential.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "The solution is the sum of $y_h$ (an exponential with the negated coefficient of $y$) and the constant particular solution.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "The solution has the form $\\mathrm{e}^{\\lambda x}$, where $\\lambda$ is a root of the characteristic equation; check the signs of the roots.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "The solution has the form $y = C\\mathrm{e}^{G(x)}$ with $G(0) = 0$. Find $C$ from the initial condition.",
  "Riešenie rovnice y″ + py′ + qy = 0": "Solution of the equation y″ + py′ + qy = 0",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "Solve the equation $2^{-t/T} = p$ by taking logarithms: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "The equation $({@0})\\,dx + ({@1})\\,dy = 0$ is exact. We write its general integral in the form $F(x, y) = C$, where $F(0, 0) = 0$. Find $C$ for the integral curve passing through the point $[{@2}; {@3}]$.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "The equation $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) is not exact. It has an integrating factor of the form $\\mu = x^{k}$. Find $k$.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "The equation $x'' + {@0}x = {@1}$ describes resonance. Its particular solution has the form $x_p = Bt{@2} {@3}$. Find $B$.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "The equation $y' = f(x, y)$ says that the slope of the tangent at the point $[x; y]$ is $f(x, y)$. Substitute the coordinates of the point.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "The equation $y' = {@0}$ has homogeneous functions of the same degree in both the numerator and the denominator, so after substituting $x \\to tx$, $y \\to ty$ the $t$ cancels and the right-hand side depends only on $\\frac{y}{x}$. The other equations contain terms of different degrees or a constant term, so after substituting $tx$ and $ty$ the $t$ does not cancel.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "The equation ${@0} = {@1}$ has a particular solution of the form $y_p = Ax{@2}$. Find $A$.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "The equation ${@0} = {@1}$ has a particular solution of the form $y_p = A{@2}$. Find $A$.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "The equation ${@0}x'' + {@1}x = 0$ has $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. The period is $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "The equation is homogeneous: $y' = \\frac{y}{x}{@0}$. The substitution $y = ux$ gives $u + xu' = u{@1}$, so $u' = {@2}\\frac{{@3}}{x}$ and $u = {@4} + C$. From the condition $u(1) = {@5}$ we get $C = {@6}$, so $y = x({@7}{@8})$ and $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "The equation has the form $y' = g(x)\\,y$. Separate the variables $\\frac{dy}{y} = g(x)\\,dx$ and integrate; you get $y = C\\mathrm{e}^{G(x)}$.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "The difference $M_y - N_x$ must still be divided by the function $N = {@0}$, not just by the variable $x$.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "The sign of the discriminant $c^{2} - 4mk$ decides. Recompute it: you are comparing the square of the damping with four times the product $mk$.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "The sign of the discriminant of the characteristic equation decides, i.e. the comparison of $c^{2}$ and $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, this is {@3}. (Equivalently $\\delta = \\frac{c}{2m} = {@4}$ and $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "Decompose $F$ into partial fractions $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ and find $A$.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "Factor the denominator as $(s - a)(s - b)$ and decompose $F$ into partial fractions $\\frac{A}{s-a} + \\frac{B}{s-b}$; then $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "Decay is governed by the equation $m' = -km$, so $m(t) = m_0\\mathrm{e}^{-kt}$ with $k = \\frac{\\ln 2}{T}$, i.e. $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "The order is determined by the highest derivative that occurs in the equation, not by the power to which a derivative is raised. The highest derivative in the equation is the {@0} derivative, so the equation is of <strong>order {@1}</strong>.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "Scheme for solving an initial value problem with the Laplace transform",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "A saddle occurs only for a negative determinant (real eigenvalues with opposite signs). Recompute $\\det A$.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "The slope of the field at the point $[x; y]$ is the value of the right-hand side $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. The integral curve passing through the point $[{@4}; {@5}]$ has a tangent with slope ${@6}$ there.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "Direction field of the homogeneous equation y' = (x + y)/(x − y)",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "Direction field of the equation y' = x − y with an integral curve",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "Stability is determined by the sign of the trace $\\mathrm{tr}\\,A$ (the sum, or twice the real part, of the eigenvalues). Check it.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "The stationary solution $y = 0$ does not satisfy the condition. For $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, so $-\\frac{1}{y} = {@1} + C$. From the condition $C = {@2}$. Hence $y = \\frac{{@3}}{1{@4}}$, which is defined on the interval $\\langle 0; {@5}\\rangle$ (the denominator is positive there). Substituting, $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "A centre occurs only when the trace is zero; otherwise the trajectories approach the point or move away from it.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "The substitution is $z = y^{1-n}$, not $y^{n-1}$: the exponent must remove the power $y^{n}$ after dividing the equation.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "The system {@0} has the initial condition $x(0) = {@1}$, $y(0) = {@2}$. We write the solution in the form $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, where $\\lambda_1 \\gt \\lambda_2$ and the eigenvectors have first component $1$. Find $C_1$ and $C_2$.",
  "Sčítaj: $F({@0}) = ?$": "Add: $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "A body of mass ${@0}\\,\\mathrm{kg}$ oscillates without damping on a spring with stiffness ${@1}\\,\\mathrm{N/m}$. What is the period of the oscillations in seconds? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "A body with temperature ${@0}{@1}$ is placed in a room with temperature ${@2}{@3}$. After ${@4}$ minutes its temperature is ${@5}{@6}$.",
  "Tlmený harmonický oscilátor": "Damped harmonic oscillator",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "A damped oscillator is governed by the equation ${@0}x'' + {@1}x' + {@2}x = 0$. Find the angular frequency $\\omega_d$ of its damped oscillations. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "This is an exponent (a power), not the order of a derivative. The order is determined by the highest derivative that occurs in the equation.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "This is the natural frequency of the undamped oscillator $\\omega_0$. Damping lowers the frequency: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "This is the discharging of a capacitor. When charging, the voltage grows from zero to $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "Transform the equation ($\\mathcal{L}\\{y'\\} = sY - y(0)$), express $Y(s)$ and decompose it into partial fractions.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "Transforming: $sY{@0}{@1} = {@2}$, so $Y = {@3}{@4}$. Decomposition: ${@5} = {@6}{@7}$. By the inverse transform $y = ({@8}{@9}){@10}{@11}$, so $A = {@12}$, $B = {@13}$.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "Here $n = {@0}$, the substitution is $z = y^{1-n}$, so $k = 1 - {@1} = {@2}$. Dividing the equation by $y^{{@3}}$ gives $y^{-n}y'{@4} = {@5}$. Since $z' = (1-n)y^{-n}y'$, after multiplying the equation by $1 - n = {@6}$ we have $z'{@7} = {@8}$. So $P = (1-n)p = {@9}$ and $Q = (1-n)q = {@10}$.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "The form $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ belongs only to a double root ($D = 0$). What is the discriminant here?",
  "Urči $A$ (zlomok alebo celé číslo).": "Find $A$ (a fraction or an integer).",
  "Urči $A$.": "Find $A$.",
  "Urči $C = F({@0}, {@1})$.": "Find $C = F({@0}, {@1})$.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "Find $C_1$ in the solution $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "Find $C_2$ (a fraction or an integer).",
  "Urči $C_2$.": "Find $C_2$.",
  "Urči $\\omega_0^{2}$.": "Find $\\omega_0^{2}$.",
  "Urči $\\omega_d$. {@0}": "Find $\\omega_d$. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "Find $\\varphi(y)$ with $\\varphi(0) = 0$ from the condition $F_y = N$ and compute $\\varphi({@0})$.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "Find $y({@0})$ (the sign according to the initial condition).",
  "Urči amplitúdu kmitov. {@0}": "Find the amplitude of the oscillations. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "Find the exponent $k$ in the substitution $z = y^{k}$ (a fraction in the form $a/b$).",
  "Urči exponent $m$.": "Find the exponent $m$.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "Find the value of the exponent $G({@0})$, where $G(x) = \\int_0^x g(t)\\,dt$. {@1}",
  "Urči koeficient $P$ pri $z$.": "Find the coefficient $P$ of $z$.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "Find the constant $A$ in the solution $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.",
  "Urči oba korene (oddelené bodkočiarkou).": "Find both roots (separated by a semicolon).",
  "Urči pravú stranu $Q$.": "Find the right-hand side $Q$.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "Find the order of the differential equation ${@0}$.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "Determine the type of the equilibrium point $[0; 0]$ of the system {@0}.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "Find the larger eigenvalue $\\lambda_1$.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "In what form should the particular solution of the equation ${@0} = {@1}$ be sought by the method of undetermined coefficients?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "The numerator contains terms of different degrees ($x^{2}$ has degree 2, $y$ degree 1), so the $t$ does not cancel after substituting.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "The eigenvalues of a $2\\times 2$ matrix are the roots of the equation $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "The eigenvalues are complex with real part ${@0}$: {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "The eigenvalues are real with the same sign (product ${@0} \\gt 0$), their sum is ${@1}$: {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "The eigenvalues are purely imaginary: a centre.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "An eigenvector for $\\lambda_1$ has the form $(1, m_1)^{T}$. Find $m_1$.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "An eigenvector for $\\lambda_2$ has the form $(1, m_2)^{T}$. Find $m_2$.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "Level curves of the function F(x, y) = x² − xy + y²",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "Divide the equation by $x$ and use the integrating factor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; for $p = \\frac{n}{x}$, $\\mu = x^{n}$.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "Divide the equation by $x^{2}$, substitute $y = ux$ and separate the variables $\\frac{du}{u^{2}} = \\frac{dx}{x}$.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "Divide the equation by $xy$; you get $y' = \\frac{y}{x} + k\\frac{x}{y}$. Then use the substitution $y = ux$.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "Express $y$ and compute $y({@0})$ (a fraction or an integer).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "You expressed $\\frac{C}{{@0}}$, but not $C$ itself: multiply the equation by ${@1}$ as well.",
  "Vypočítaj $M_y - N_x$.": "Compute $M_y - N_x$.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "Compute $W(0)$, i.e. the value of $K$.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "Compute $\\frac{M_y - N_x}{N}$. If it comes out as $\\frac{k}{x}$, the integrating factor is $\\mathrm{e}^{k\\ln x} = x^{k}$.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "Compute $\\frac{\\partial M}{\\partial y}$ and $\\frac{\\partial N}{\\partial x}$ and compare the coefficients of equal powers.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "Compute $\\mathrm{e}^{-{@0}k}$. Round to 4 decimal places.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Compute $\\tau = RC$ (kilohms times microfarads give milliseconds) and substitute into $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Vypočítaj $u({@0})$. {@1}": "Compute $u({@0})$. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "Compute $y(2)$ (a fraction or a decimal number).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "Compute $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "Compute $y({@0})$. {@1}",
  "Vypočítaj determinant $\\det A$.": "Compute the determinant $\\det A$.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Compute the transform of the exponential term ${@0}$ at $s = {@1}$ (a fraction).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "Compute the transform of the trigonometric term at $s = {@0}$ (a fraction).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "Compute the transform of the term ${@0}$ at $s = {@1}$ (a fraction).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "Compute the period of the oscillations in seconds. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "Compute the trace of the matrix of the system $\\mathrm{tr}\\,A$.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "Compute the trace, the determinant and the discriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ and use the table from the theory.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "Compute the natural angular frequency $\\omega_0$ (in $\\mathrm{s^{-1}}$). Round to 3 decimal places.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "Compute the time constant $\\tau = RC$ in milliseconds.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "You computed $u = \\frac{y}{x}$, not $y$. Don't forget the back substitution $y = ux$.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "You computed the value of $u = \\frac{y}{x}$, not $y$. Don't forget the back substitution $y = ux$.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "You computed the value of the auxiliary function $u = \\frac{y}{x}$, not $y$. Don't forget the back substitution $y = ux$.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "Solve $1 - \\mathrm{e}^{-t/\\tau} = p$ for $t$: $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "Solve $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ and enter the eigenvalues (separated by a semicolon).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "Solve the initial value problem $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (for $x \\gt 0$), and compute $y({@1})$. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "Solve the initial value problem $xy'{@0} = {@1}$, $y(1) = {@2}$, for $x \\gt 0$ and compute $y(2)$. Enter the result exactly (a fraction or a decimal number).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Solve the initial value problem $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (for $x \\gt 0$), and compute $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "Solve the initial value problem $y' = {@0}$, $y(0) = {@1}$, and compute $y({@2})$. Enter the result as a fraction or an integer.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "Solve the initial value problem $y' = {@0}$, $y(0) = {@1}$, and compute $y({@2})$. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "Solve the initial value problem $yy' = {@0}$, $y(0) = {@1}$, and compute $y({@2})$.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "Solve the initial value problem ${@0}$, $y(1) = {@1}$ (for $x \\gt 0$), and compute $y({@2})$. {@3}",
  "Vyrieš sústavu a urči $A$.": "Solve the system and find $A$.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "Use $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ and express $y$.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "The expression $\\frac{M_y - N_x}{N}$ has the form $\\frac{k}{x}$. Find $k$.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "The expression $\\sqrt{m/k}$ is $\\frac{1}{\\omega_0}$; the period is $2\\pi$ times larger still.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "The general solution of the equation $xy' + y ={@0}$ on an interval not containing zero is $y = {@1} + \\frac{C}{x}$. Find $C$ for the initial condition $y({@2}) = {@3}$.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "The general solution of the equation $xy' = 2y{@0}$ is $y = Cx^{2}{@1}$. Find $C$ for the initial condition $y({@2}) = {@3}$. Enter the result as an integer or a fraction.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "The general solution of the equation $y' = {@0}{@1}$ is $y = C{@2}{@3}$. Find the constant $C$ so that the solution satisfies the initial condition $y(0) = {@4}$.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "The Wronskian is $W = y_1y_2' - y_1'y_2$; the order of the terms decides the sign of $K$.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "The Wronskian is a product of two functions with the factor $\\mathrm{e}^{\\alpha x}$, so its exponent contains $2\\alpha$.",
  "Y(s) vyjadrené": "Y(s) expressed",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "From the measurement find the constant $k$ in $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Round to 4 decimal places.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "With each half-life the amount drops to half: $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "In how many milliseconds will the voltage reach the required value? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "In how many minutes will the temperature drop to the required value? Round to tenths of a minute.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "In how many years will the population reach half of the carrying capacity? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "You forgot the second derivative: $y_p'' = -{@0}y_p$, so the coefficient of $A$ in the equation for the cosine is $q - {@1}$.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "You forgot the function $\\varphi(y)$: after integrating $M$ with respect to $x$ it must be determined from the condition $F_y = N$.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "You forgot the constant term ${@0}$ in the general solution; first move it to the other side.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "You forgot the constant $C$: the initial condition $y(0)$ gives $C$, by which the exponential must be multiplied.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "You forgot the inflow of salt $cq$: without it the salt in the tank would only decrease. The solution approaches the equilibrium value $cV$.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "You forgot the initial condition: $\\mathcal{L}\\{y'\\} = sY - y(0)$, so $Y(s)$ also contains the term $\\frac{y(0)}{s - a}$.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "Cover the factor $s{@0}$ and substitute $s = {@1}$.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "You swapped the mass and the stiffness: $\\omega_0 = \\sqrt{k/m}$, and the period is $\\frac{2\\pi}{\\omega_0}$, not $2\\pi\\omega_0$.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "You swapped the transforms: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ and $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "You swapped the coordinates: at the point $[x; y]$ the first coordinate is $x$ and the second is $y$. Substitute them into $f(x, y)$ in the right places.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "Replace $y''$ with $\\lambda^{2}$, $y'$ with $\\lambda$ and $y$ with $1$, and solve the quadratic equation.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "Write the solution as $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, find the constants from the conditions; the amplitude is $\\sqrt{C_1^{2} + C_2^{2}}$.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "Write the equation in the form $y' = \\frac{y}{x} + a$, substitute $y = ux$, $y' = u + xu'$ and integrate.",
  "Začiatočná hodnota y(0)": "Initial value y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "Differentiate $x_p$ twice (a product of $t$ and a trigonometric function) and substitute. For $\\omega = \\omega_0$ only the term without $t$ remains.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "Differentiate the general solution, substitute $x = 0$ into both $y$ and $y'$ and solve the system of two linear equations.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "Find out how many times the number $\\alpha$ from the exponent of the right-hand side is a root of the characteristic equation, and multiply the basic form by $x$ that many times.",
  "Zo začiatočnej podmienky urči $B$.": "Find $B$ from the initial condition.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "Set up the balance $x' = (\\text{inflow of substance}) - (\\text{outflow of substance}) = cq - \\frac{q}{V}x$ and solve the linear equation.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "Set up the characteristic equation, determine the type of roots from the discriminant and use the corresponding form of the solution.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "A negative $A$ means that the oscillations are in antiphase with the driving force (the driving frequency is higher than the natural one).",
  "absolútnom člene": "the constant term",
  "algebra": "algebra",
  "algebraická rovnica": "algebraic equation",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "second",
  "dvojnásobný koreň ${@0}$": "double root ${@0}$",
  "je dvojnásobným koreňom": "is a double root",
  "je jednoduchým koreňom": "is a simple root",
  "k = 0: veličina sa nemení": "k = 0: the quantity does not change",
  "konštanta": "a constant",
  "korene ${@0}$ a ${@1}$": "roots ${@0}$ and ${@1}$",
  "kritické tlmenie": "critical damping",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "critical damping: fastest return without oscillation",
  "krát ${@0}$": "times ${@0}$",
  "litre": "litres",
  "litrov": "litres",
  "logistická krivka s K = {@0}": "logistic curve with K = {@0}",
  "nadkritické tlmenie (aperiodický pohyb)": "overdamping (aperiodic motion)",
  "nadkritické tlmenie: aperiodický pohyb": "overdamping: aperiodic motion",
  "neizolovaný rovnovážny bod (det A = 0)": "non-isolated equilibrium point (det A = 0)",
  "nestabilné ohnisko": "unstable focus",
  "nestabilný degenerovaný uzol": "unstable degenerate node",
  "nestabilný uzol": "unstable node",
  "netlmené kmity, ω₀ = 2": "undamped oscillations, ω₀ = 2",
  "nie je koreňom": "is not a root",
  "po vydelení číslom ${@0}$": "after dividing by ${@0}$",
  "podkritické tlmenie (tlmené kmity)": "underdamping (damped oscillations)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "underdamping: damped oscillations, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "a polynomial of degree 1",
  "polčas ln 2 / |k| = {@0}": "half-life ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "for the transform Y(s)",
  "prvá": "first",
  "riešenie y(t)": "solution y(t)",
  "rovnica pre y(t)": "equation for y(t)",
  "rozklad na parciálne zlomky": "partial fraction decomposition",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "a solution with concentration ${@0}\\,\\mathrm{kg/l}$ {@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "a solution containing ${@0}\\,\\mathrm{kg}$ of salt",
  "rýchlosťou ${@0}$ {@1} za minútu": "at a rate of ${@0}$ {@1} per minute",
  "sedlo": "saddle",
  "stabilné ohnisko": "stable focus",
  "stabilný uzol": "stable node",
  "tabuľka obrazov": "table of transforms",
  "tretia": "third",
  "začiatočná úloha": "initial value problem",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$ and $y_p' = {@2}(-A{@3} + B{@4})$. After substituting we compare coefficients: for ${@5}$: ${@6} = {@7}$, for ${@8}$: ${@9} = {@10}$. The solution of the system is $A = {@11}$, $B = {@12}$.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} What will the voltage across the capacitor be ${@1}\\,\\mathrm{ms}$ after switching on? Round the result in volts to 2 decimal places.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} What will its temperature be ${@1}$ minutes after it was placed there? Round the result to tenths of a degree.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} How many individuals will the population have after ${@1}$ years? Round the result to a whole number.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} In how many milliseconds will the voltage across the capacitor reach ${@1}\\,\\%$ of the source voltage? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} How many minutes after being placed there will the temperature of the body drop to ${@1}{@2}$? Round the result to tenths of a minute.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} In how many years will it reach half of the carrying capacity (when it grows fastest)? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}Comparing with the form $x'' + 2\\delta x' + \\omega_0^{2}x = 0$, we have $2\\delta = {@1}$, $\\delta = {@2}$ and $\\omega_0^{2} = {@3}$. The roots of the characteristic equation are $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, so $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.",
  "· riešením je priamka y = x − 1": "· the line y = x − 1 is a solution",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "The time constant is $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, so $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "Whether the eigenvalues are real (node) or complex (focus, centre) is decided by the sign of the discriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "The term $\\frac{y}{x}$ is fine, but the second term does not depend only on the ratio $\\frac{y}{x}$.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "The term $p\\,y'$ transforms to $p(sY - y(0))$; after moving it to the right-hand side it gives $+p\\,y(0)$. Check the sign.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "The number ${@0}$ is not a root of the characteristic equation, because ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. For $y_p = A{@5}$ we have $y_p' = {@6}A{@7}$ and $y_p'' = {@8}A{@9}$; after substituting, $A\\cdot {@10}\\,{@11} = {@12}{@13}$, so $A = {@14}$.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "The number ${@0}$ from the exponent of the right-hand side is a root of the characteristic equation (resonance); how many times must the form be multiplied by $x$?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "The number ${@0}\\mathrm{i}$ is not a root of the characteristic equation, so there is no resonance.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "doubling time ln 2 / k = {@0}",
  "čistej vody": "pure water",
  "čistá voda {@0}": "pure water {@0}",
  "štvrtá": "fourth",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (double root)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (complex roots)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (distinct real roots)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum at ω = {@1}, amplitude {@2}</span> (for F₀/m = 1)",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Round the result to 2 decimal places."
 }
});
