/* English: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/content/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "cisla": {
   "title": "Numerical expressions and the order of operations",
   "summary": "Numbers, brackets and the correct order of calculations.",
   "theory": [
    "<p>The natural numbers are $1, 2, 3, 4, \\dots$. We denote their set by $\\mathbb{N}$. If we add zero to them, we get the non-negative integers; adding the negative numbers gives the set of integers $\\mathbb{Z}$.</p>",
    {
     "fig": "numberline",
     "caption": "The number line: the blue points are natural numbers, the negative integers lie to the left of zero."
    },
    "<p><strong>Order of operations:</strong></p>\n       <ol><li>expressions in brackets,</li><li>powers and roots,</li>\n       <li>multiplication and division from left to right,</li><li>addition and subtraction from left to right.</li></ol>"
   ],
   "examples": [
    {
     "task": "Work out $2 + 3\\cdot 4 - 6 : 2$.",
     "steps": [
      "First multiplication and division: $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "The expression becomes $2 + 12 - 3$.",
      "From left to right: $2 + 12 = 14$, then $14 - 3 = 11$.",
      "<strong>Result: 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "Fractions and operations with fractions",
   "summary": "Simplifying, expanding and calculating with fractions.",
   "theory": [
    "<p>A fraction $\\frac{a}{b}$ has numerator $a$ and denominator $b \\neq 0$. The value of a fraction does not change if we multiply both the numerator and the denominator by the same non-zero number (<strong>expanding</strong>, or finding an equivalent fraction). The reverse process is <strong>simplifying</strong>.</p>",
    {
     "fig": "fractions",
     "caption": "Expanding does not change the value: $\\frac{1}{2}=\\frac{3}{6}$ and $\\frac{2}{3}=\\frac{4}{6}$ have shaded parts of the same length."
    },
    "<p><strong>Addition and subtraction</strong> need a common denominator: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>Multiplication</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. For <strong>division</strong> we multiply by the reciprocal: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $\\frac{1}{2}+\\frac{2}{3}$.",
     "steps": [
      "The common denominator is $2\\cdot 3 = 6$.",
      "$\\frac{1}{2}=\\frac{3}{6}$ and $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>Result: $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "Percentages",
   "summary": "Calculating percentages, percentage increase and decrease.",
   "theory": [
    "<p>$p\\,\\%$ means $\\frac{p}{100}$. A percentage of a number $x$ is $\\frac{p}{100}\\cdot x$.</p>",
    {
     "fig": "percent",
     "caption": "The whole is 100 parts. $25\\,\\%$ means 25 of them."
    },
    "<p>An <strong>increase</strong> by $p\\,\\%$ is multiplication by $1+\\frac{p}{100}$, a <strong>decrease</strong> is multiplication by $1-\\frac{p}{100}$.</p>",
    "<p>The decimal $0.25$ is the fraction $\\frac{1}{4}$ and also $25\\,\\%$. In English we write a decimal point.</p>"
   ],
   "examples": [
    {
     "task": "An item costs $80\\,€$. How much does it cost after a $15\\,\\%$ increase?",
     "steps": [
      "The multiplier is $1+\\frac{15}{100}=1.15$.",
      "$80\\cdot 1.15 = 92$.",
      "<strong>Result: 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "Sets and set operations",
   "summary": "Elements, union, intersection, difference and the number of elements.",
   "theory": [
    "<p>A set is a collection of distinct elements. The notation $a\\in A$ means that the element $a$ belongs to the set $A$. The empty set is $\\varnothing$.</p>",
    "<p>Operations: <strong>union</strong> $A\\cup B$ (elements in at least one of the sets), <strong>intersection</strong> $A\\cap B$ (elements in both sets), <strong>difference</strong> $A\\setminus B$ (elements of $A$ that are not in $B$).</p>",
    {
     "fig": "venn",
     "caption": "Venn diagram for $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5\\}$. The intersection lies where the circles overlap."
    },
    "<p>We denote the number of elements by $|A|$. It holds that $|A\\cup B| = |A|+|B|-|A\\cap B|$: we counted the elements of the intersection twice, so we subtract them.</p>"
   ],
   "examples": [
    {
     "task": "Let $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5\\}$. Find $A\\cup B$, $A\\cap B$ and $A\\setminus B$.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "Perimeter and area of plane shapes",
   "summary": "Perimeter and area of a rectangle, a triangle and a circle.",
   "theory": [
    "<p>A rectangle with sides $a$ and $b$ has perimeter $o=2(a+b)$ and area $S=a\\cdot b$.</p>",
    "<p>A triangle with base $z$ and height $v$ onto this base has area $S=\\frac{z\\cdot v}{2}$.</p>",
    "<p>A circle with radius $r$ has circumference $o=2\\pi r$ and area $S=\\pi r^2$, where $\\pi\\approx 3.14159$.</p>",
    {
     "fig": "shapes",
     "caption": "Sides $a$, $b$ of the rectangle, base $z$ and height $v$ of the triangle, radius $r$ of the circle."
    }
   ],
   "examples": [
    {
     "task": "A circle has radius $r=3\\,\\text{cm}$. Work out its area.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28.27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "Pythagoras' theorem",
   "summary": "Finding the sides of a right-angled triangle.",
   "theory": [
    "<p>In a right-angled triangle with legs $a$, $b$ and hypotenuse $c$, $a^2+b^2=c^2$. The hypotenuse lies opposite the right angle and is always the longest side.</p>",
    {
     "fig": "pythagoras",
     "caption": "A triangle with sides $3, 4, 5$: the areas of the squares on the legs $9+16$ together give the area of the square on the hypotenuse $25$."
    },
    "<p>Well-known whole-number triples: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ and their multiples.</p>"
   ],
   "examples": [
    {
     "task": "The legs have lengths $6$ and $8$. How long is the hypotenuse?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "Linear equations",
   "summary": "Equivalent transformations and equations of the first degree.",
   "theory": [
    "<p>We solve equations by <strong>equivalent transformations</strong>: we add the same number to both sides or subtract it from both sides, and we multiply or divide both sides by a non-zero number.</p>",
    "<p>We solve the equation $ax+b=c$ with $a\\neq 0$ like this: $ax=c-b$, so $x=\\frac{c-b}{a}$.</p>",
    "<p>We check the answer by substituting it into the original equation.</p>"
   ],
   "examples": [
    {
     "task": "Solve $3x+5=20$.",
     "steps": [
      "Subtract $5$: $3x=15$.",
      "Divide by $3$: $x=5$.",
      "Check: $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "Quadratic equations",
   "summary": "The discriminant, the quadratic formula and Vieta's formulas.",
   "theory": [
    "<p>The quadratic equation $ax^2+bx+c=0$ ($a\\neq 0$) has roots $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$, where $D=b^2-4ac$ is the <strong>discriminant</strong>.</p>",
    "<p>If $D&gt;0$, the equation has two different real roots. If $D=0$, it has one double root. If $D&lt;0$, it has no real roots.</p>",
    {
     "fig": "parabola",
     "caption": "The graph of $y=x^2+px+q$ (so $b=p$, $c=q$). The roots are where the parabola crosses the $x$-axis. Change $p$ and $q$ and watch the discriminant."
    },
    "<p><strong>Vieta's formulas</strong> (for $a=1$): $x_1+x_2=-b$ and $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "Solve $x^2-5x+6=0$.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, so $x_1=3$, $x_2=2$.",
      "Check: $3+2=5$ and $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "Powers and roots",
   "summary": "Rules for calculating with powers and roots.",
   "theory": [
    "<p>For $a&gt;0$ and integers $m,n$: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>Negative exponent: $a^{-n}=\\frac{1}{a^n}$. Zero exponent: $a^0=1$ for $a\\neq 0$.</p>",
    "<p>A root is the inverse operation of a power: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. Also $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>"
   ],
   "examples": [
    {
     "task": "Simplify $\\frac{2^5\\cdot 2^{-2}}{2}$.",
     "steps": [
      "Numerator: $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>Result: $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "Trigonometric functions in a right-angled triangle",
   "summary": "Sine, cosine and tangent in a right-angled triangle.",
   "theory": [
    "<p>In a right-angled triangle with an acute angle $\\alpha$: $\\sin\\alpha=\\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\alpha=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "Names of the sides of a right-angled triangle relative to the angle $\\alpha$."
    },
    "<p>The basic identity: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "The unit circle: a point on it has coordinates $(\\cos\\alpha, \\sin\\alpha)$. Move the angle and watch how the signs change."
    },
    "<p>Values for standard angles:</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "If $\\sin\\alpha=0.6$ and $\\alpha$ is an acute angle, work out $\\cos\\alpha$.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0.36=0.64$.",
      "$\\cos\\alpha=\\sqrt{0.64}=0.8$ (the angle is acute, so the cosine is positive)."
     ]
    }
   ]
  },
  "matice": {
   "title": "Determinant and inverse of a 2×2 matrix",
   "summary": "Matrix notation, the 2×2 determinant and the inverse matrix.",
   "theory": [
    "<p>An $m\\times n$ matrix is a table of numbers with $m$ rows and $n$ columns. The entry in row $i$ and column $j$ is denoted $a_{ij}$.</p>",
    "<p>The determinant of the matrix $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ is $\\det A=ad-bc$. If $\\det A\\neq 0$, the inverse matrix exists: $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    {
     "fig": "parallelogram",
     "caption": "The columns of the matrix $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ are the vectors $u=(2,1)$ and $v=(3,4)$. The absolute value of the determinant is the area of the parallelogram they span: $|\\det|=5$."
    },
    "<p>A system of linear equations can be written as $Ax=b$ and solved using the inverse matrix: $x=A^{-1}b$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$.",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$."
     ]
    }
   ]
  },
  "sucin": {
   "title": "Matrix multiplication",
   "summary": "How matrices are multiplied and why the order matters.",
   "theory": [
    "<p>The product $C=AB$ exists if the number of columns of $A$ equals the number of rows of $B$. The entry in row $i$ and column $j$ is $c_{ij}=\\sum_k a_{ik}b_{kj}$: we multiply a row of $A$ by a column of $B$ and add up.</p>",
    {
     "fig": "matmul",
     "caption": "The entry $c_{11}$ comes from row 1 of $A$ and column 1 of $B$: $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>Matrix multiplication is <strong>not commutative</strong>: in general $AB\\neq BA$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. Work out $AB$.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>Result:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "The derivative of a function",
   "summary": "Instantaneous rate of change, differentiation rules and the tangent line.",
   "theory": [
    "<p>The derivative $f'(x_0)$ is the limit $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, if it exists. Geometrically it is the slope of the tangent to the graph of $f$ at the point $x_0$.</p>",
    {
     "fig": "tangent",
     "caption": "The graph of $f(x)=x^3-2x$ and the tangent at the point $x_0$. Its slope is $f'(x_0)=3x_0^2-2$. Where the tangent is horizontal, the derivative is zero."
    },
    "<p>Rules: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$. Work out $f'(2)$.",
     "steps": [
      "$f'(x)=3x^2-2$.",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$."
     ]
    }
   ]
  },
  "integraly": {
   "title": "Basics of integral calculus",
   "summary": "Indefinite and definite integrals, the Newton–Leibniz formula.",
   "theory": [
    "<p>An antiderivative $F$ of a function $f$ satisfies $F'(x)=f(x)$. Indefinite integral: $\\int f(x)\\,dx=F(x)+C$. For $n\\neq -1$, $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>",
    "<p>We evaluate a definite integral using the <strong>Newton–Leibniz formula</strong> (the fundamental theorem of calculus): $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Geometrically it is the area under the graph of $f$ from $a$ to $b$ (for positive $f$).</p>",
    {
     "fig": "area",
     "caption": "The area under the graph of $f(x)=x^2$ from $0$ to $b$ is $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$."
    },
    "<p>Linearity: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $\\int_0^2 3x^2\\,dx$.",
     "steps": [
      "Antiderivative: $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>Result: 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$. What is the entry of the product $AB$ in row {@2} and column {@3}?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, so $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — give the result as a fraction in the form $p/q$ (e.g. 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$, so $b={@3}$.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$, so $c={@3}$.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$, so $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "$p\\,\\%$ of a number $x$ is $\\frac{p}{100}\\cdot x$.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$, so $\\frac{{@2}}{100}\\cdot {@3}={@4}$.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$, so $x={@4}$.",
  "25 štvorčekov zo 100": "25 squares out of 100",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "What exponent will the result ${@0}^{\\square}$ have?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "What is the common denominator (the product of the denominators ${@0}\\cdot {@1}$)?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "What is the sum of the roots $x_1 + x_2$ (using Vieta's formulas)?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "What is the product of the roots $x_1 \\cdot x_2$?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "The derivative is $f'(x)=k\\,x^{{@0}}{@1}$. What is the coefficient $k$?",
  "Determinant ako obsah rovnobežníka": "The determinant as the area of a parallelogram",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "You substituted into the original function $f$. Differentiate the function first and only then substitute.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "You substituted into the original function. First find the antiderivative $F$ and substitute into that.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "You only substituted the upper limit. You still need to subtract $F({@1})$ from $F({@0})$.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "You used the diameter ${@0}$. In the formula $\\pi r^2$ the radius is $r={@1}$.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "Second product: what is ${@0}\\cdot {@1}$?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "You just subtracted the lengths. Pythagoras' theorem works with squares: $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "You added the exponents. When raising a power to a power, the exponents are multiplied.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "You multiplied the exponents. When multiplying powers with the same base, the exponents are added.",
  "Graf funkcie s dotyčnicou": "Graph of a function with a tangent",
  "Graf kvadratickej funkcie": "Graph of a quadratic function",
  "Horná hranica b": "Upper limit b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "Look for two numbers whose product is $q$ and whose sum is $-p$.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "The identity works with squares: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, not $\\cos\\alpha = 1 - \\sin\\alpha$.",
  "Jednotková kružnica": "The unit circle",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "You subtracted the coefficient {@0}. Next to $x$ there is multiplication, so divide both sides by {@1}.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "Your roots came out twice as big. In the formula $x=\\frac{-p\\pm\\sqrt{D}}{2}$ don't forget to divide by two.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "What is $1\\,\\%$ of {@0}?",
  "Koľko je $F({@0}) - F({@1})$?": "What is $F({@0}) - F({@1})$?",
  "Koľko je $F({@0})$?": "What is $F({@0})$?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "What is $\\cos\\alpha$ (acute angle, positive square root) to 3 decimal places?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "What is $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Give it as a fraction.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "What is $\\pi\\cdot {@0}$ (use $\\pi\\approx 3{{@1}}14$)?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "What is $\\sin^2\\alpha$? Give it as a fraction (e.g. 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "What is $a^2 = {@0}^2$?",
  "Koľko je $b = \\sqrt{{@0}}$?": "What is $b = \\sqrt{{@0}}$?",
  "Koľko je $b^2 = {@0} - {@1}$?": "What is $b^2 = {@0} - {@1}$?",
  "Koľko je $b^2 = {@0}^2$?": "What is $b^2 = {@0}^2$?",
  "Koľko je $c = \\sqrt{{@0}}$?": "What is $c = \\sqrt{{@0}}$?",
  "Koľko je $c^2 = {@0} + {@1}$?": "What is $c^2 = {@0} + {@1}$?",
  "Koľko je $c^2 = {@0}^2$?": "What is $c^2 = {@0}^2$?",
  "Koľko je $f'({@0})$?": "What is $f'({@0})$?",
  "Koľko je $r^2 = {@0}^2$?": "What is $r^2 = {@0}^2$?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "What is $z\\cdot v = {@0}\\cdot {@1}$?",
  "Koľko je ${@0} + {@1} - {@2}$?": "What is ${@0} + {@1} - {@2}$?",
  "Koľko je ${@0} - ({@1})$?": "What is ${@0} - ({@1})$?",
  "Koľko je ${@0} : {@1}$?": "What is ${@0} : {@1}$?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "What is ${@0}\\,\\%$ of ${@1}$?",
  "Koľko je ${@0}\\cdot {@1}$?": "What is ${@0}\\cdot {@1}$?",
  "Koľko je ${@0}^{{@1}}$?": "What is ${@0}^{{@1}}$?",
  "Koľko je $|A| + |B|$?": "What is $|A| + |B|$?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "So what is ${@0}\\,\\%$ of {@1}?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "A circle has radius $r={@0}$. Work out its area $S$ (use $\\pi\\approx 3{{@1}}14$).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "Which two numbers have sum {@0} and product {@1}? Enter them separated by a semicolon.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "Matrices are not multiplied entry by entry in the same position. Multiply a row of matrix $A$ by a column of matrix $B$ and add the products.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "You changed the denominator to the common one but did not scale up the numerators. Multiply the numerator by the same number as the denominator.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "Set $A$ has ${@0}$ elements, set $B$ has ${@1}$ elements and their intersection has ${@2}$ elements. How many elements does $A\\cup B$ have?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "Multiplication and division first: ${@0}\\cdot {@1} = {@2}$ and ${@3} : {@4} = {@5}$. Then ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "First subtract the constant on both sides, then divide by the coefficient of $x$.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "Do multiplication and division first, and only then addition and subtraction.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "You multiplied the entries in the columns. Multiply along the diagonals: $a\\cdot d$ and $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "A rectangle has sides $a={@0}$ and $b={@1}$. What is its area $S$?",
  "Obdĺžnik, trojuholník a kruh": "Rectangle, triangle and circle",
  "Obsah kruhu je $\\pi r^2$.": "The area of a circle is $\\pi r^2$.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "The area of a rectangle is the product of the lengths of two adjacent sides.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "The area of a triangle is half the product of the base and the height.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "You just added the legs. Pythagoras' theorem works with squares: $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "An acute angle $\\alpha$ satisfies $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Work out $\\cos\\alpha$ (to 3 decimal places).",
  "Plocha pod grafom funkcie": "The area under the graph of a function",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "Use $(x^n)'=n\\,x^{n-1}$ and differentiate each term separately.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "Use $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ and then the Newton–Leibniz formula.",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "Use Pythagoras' theorem $c^2=a^2+b^2$.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "Use the identity $\\sin^2\\alpha+\\cos^2\\alpha=1$.",
  "Pozri si tabuľku hodnôt v teórii.": "Look at the table of values in the theory.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "You worked from left to right. Multiplication and division come before addition and subtraction.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "A right-angled triangle has legs $a={@0}$ and $b={@1}$. How long is the hypotenuse $c$?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "A right-angled triangle has hypotenuse $c={@0}$ and leg $a={@1}$. How long is the other leg $b$?",
  "Pravouhlý trojuholník s popisom strán": "A right-angled triangle with labelled sides",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "For a $2\\times 2$ matrix, $\\det=ad-bc$.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "For the function $f(x)={@0}x^{{@1}}{@2}$ work out $f'({@3})$.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "Move the constant to the right-hand side. What is ${@0}x$?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "When multiplying powers with the same base, the exponents are added.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "When you moved the number {@0} to the other side, you did not change its sign. Do the same inverse operation on both sides.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "When raising a power to a power, the exponents are multiplied.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "The antiderivative is $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, so $F({@3})-F({@4})={@5}$.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "The antiderivative is $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. What is $F({@3})$?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "The elements of the intersection are counted twice, so subtract them.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "You subtracted the elements of the intersection twice. They belong to the union – subtract them only once.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "You counted the elements of the intersection twice – they are in both $A$ and $B$. Subtract them once.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "The elements of the intersection are in this sum twice. What is ${@0} - {@1}$?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "First product: what is ${@0}\\cdot {@1}$?",
  "Pytagorova veta: štvorce nad stranami": "Pythagoras' theorem: squares on the sides",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Scale up the second fraction to the denominator {@0}. What will its numerator be?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Scale up the first fraction to the denominator {@0}. What will its numerator be?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "The common denominator is ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "You added the sides. You get the area of a rectangle by multiplying them.",
  "Súčet: koľko je ${@0} + {@1}$?": "Sum: what is ${@0} + {@1}$?",
  "Súčin matíc: riadok krát stĺpec": "Matrix multiplication: row times column",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "Product on the main diagonal: what is $({@0})\\cdot({@1})$?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "Product on the other diagonal: what is $({@0})\\cdot({@1})$?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "You added the products. The determinant is a difference: the product on the main diagonal minus the product on the other diagonal.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "Add the numerators and write the result as a fraction $p/q$.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "You added both the numerators and the denominators. Fractions are added only after converting them to a common denominator – the denominators are not added.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "That is $\\cos^2\\alpha$. Take the square root at the end.",
  "To je $b^2$. Na konci ešte odmocni.": "That is $b^2$. Take the square root at the end.",
  "To je $c^2$. Na konci ešte odmocni.": "That is $c^2$. Take the square root at the end.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "That is the {@0} of the angle ${@1}^\\circ$. As the angle grows, sine increases from 0 to 1 and cosine decreases from 1 to 0.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "That is the perimeter (the sum of all the sides). The area is the product of two adjacent sides.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "That is the circumference of the circle $2\\pi r$. The area is $\\pi r^2$.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "That is the rest up to 100 %. We are asking for just ${@0}\\,\\%$ of {@1}.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "A triangle is half of a rectangle. What is ${@0} : 2$?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "A triangle has base $z={@0}$ and height $v={@1}$. What is its area $S$?",
  "Uhol α (°)": "Angle α (°)",
  "Vennov diagram dvoch množín": "Venn diagram of two sets",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "Take the $i$-th row of matrix $A$ and the $j$-th column of matrix $B$ and multiply them entry by entry.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "Vieta's formulas: $x_1+x_2={@0}$ and $x_1\\cdot x_2={@1}$. The roots are $x_1={@2}$ and $x_2={@3}$.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "Divide both sides by {@0}. What is $x$?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "Work out $({@0}^{{@1}})^{{@2}}$.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "Work out $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "Work out ${@0}\\,{@1}^\\circ$ as a decimal (to 3 decimal places).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "Work out ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "Work out the determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "Solve the equation $x^2{@0}{@1} = 0$. Enter both roots separated by a semicolon (e.g. 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "Solve the equation ${@0}x{@1} = {@2}$.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "From Pythagoras' theorem, express $b^2=c^2-a^2$.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "You took a row from matrix $B$. The entry of the product is row {@0} of matrix $A$ times column {@1} of matrix $B$.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "You forgot to divide by two. A triangle is half of a rectangle with sides $z$ and $v$.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "You forgot to divide by {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "You forgot to bring the exponent {@0} down in front of $x$: $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "You forgot about the division. You don't subtract {@0}, but the result of ${@1} : {@2}$.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "You forgot to square the radius: the area is $\\pi\\cdot r\\cdot r$.",
  "Zlomky ako pruhy": "Fractions as bars",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "Put the fractions over a common denominator: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "You multiplied the bases. The base {@0} stays the same; only the exponents are added.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">area = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "roots x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "cosine",
  "kruh": "circle",
  "napr. 5/6": "e.g. 5/6",
  "nemá reálne korene (D &lt; 0)": "no real roots (D &lt; 0)",
  "obdĺžnik": "rectangle",
  "odvesna": "leg",
  "prepona": "hypotenuse",
  "prirodzené čísla ℕ": "natural numbers ℕ",
  "priľahlá odvesna": "adjacent side",
  "protiľahlá": "opposite",
  "sínusu": "sine",
  "trojuholník": "triangle",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (gradient of the tangent)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "negative integers",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "You did not differentiate the term ${@0}x$. Its derivative is {@1}.",
  "Číselná os": "Number line",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "You divided the number by the percentage. ${@0}\\,\\%$ means {@1} hundredths, so first find 1 % (divide by 100) and then multiply by {@2}.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "A square divided into 100 parts, 25 of them shaded",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
