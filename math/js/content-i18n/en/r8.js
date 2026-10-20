/* English: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/r8/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "r8-cisla": {
   "title": "Integers and rational numbers",
   "summary": "Negative numbers, opposite numbers, absolute value and calculating with signed fractions.",
   "theory": [
    "<p>We use the <strong>natural numbers</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ for counting objects. If we add zero\n       and the opposite numbers ($-1, -2, -3, \\dots$), we get the <strong>integers</strong> $\\mathbb{Z}$. The <strong>rational numbers</strong> $\\mathbb{Q}$\n       are all the numbers that can be written as a fraction $\\frac{p}{q}$ ($p$ an integer, $q$ a natural number), for example $\\frac{3}{4}$,\n       $-2.5 = -\\frac{5}{2}$ or $7 = \\frac{7}{1}$.</p>",
    {
     "fig": "r8-obory",
     "caption": "Every natural number is an integer and every integer is a rational number: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>The <strong>opposite</strong> of a number $a$ is $-a$: the opposite of $5$ is $-5$, the opposite of $-3$ is $3$. The <strong>absolute value</strong> $|a|$\n       is the distance of the number from zero on the number line, so it is never negative: $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>Calculating with signs:</strong> subtracting a number means adding its opposite: $4 - (-6) = 4 + 6 = 10$.\n       In multiplication and division, the same signs give a positive result and different signs a negative one: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $-8 - (-5) + 2\\cdot(-3)$.",
     "steps": [
      "First the multiplication: $2\\cdot(-3) = -6$ (different signs, the result is negative).",
      "We replace subtracting a negative number with adding: $-8 - (-5) = -8 + 5 = -3$.",
      "Finally $-3 + (-6) = -9$.",
      "<strong>Result: $-9$</strong>"
     ]
    },
    {
     "task": "Compare the numbers $-\\frac{3}{4}$ and $-0.7$.",
     "steps": [
      "We convert the fraction to a decimal: $-\\frac{3}{4} = -0.75$.",
      "The number $-0.75$ is further from zero on the negative side, so it lies further to the left on the number line.",
      "<strong>$-\\frac{3}{4} &lt; -0.7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "Powers and roots",
   "summary": "Squares and cubes, square roots, estimating a square root and writing large numbers.",
   "theory": [
    "<p>A <strong>power</strong> $a^n$ is a short way of writing a product of $n$ equal factors: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       The number $a$ is the <em>base</em> and $n$ is the <em>exponent</em> (index). For example $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "A square number is the area of a square: a square with side 3 has $3^2 = 9$ small squares. A cube number is the volume of a cube: a cube with edge 2 is made of $2^3 = 8$ small cubes."
    },
    "<p><strong>Watch the sign:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, but $-3^2 = -(3\\cdot 3) = -9$.\n       An even power of a negative number is positive, an odd power is negative: $(-2)^3 = -8$.</p>",
    "<p>The <strong>square root</strong> of a non-negative number $a$ is the non-negative number $b$ for which $b^2 = a$. We write $\\sqrt{a} = b$,\n       for example $\\sqrt{49} = 7$ and $\\sqrt{0.09} = 0.3$. We write large numbers in the form $a\\cdot 10^n$, where $1 \\le a &lt; 10$:\n       $45\\,000 = 4.5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $(-2)^3 + 3^2 - \\sqrt{64}$.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$ and $\\sqrt{64} = 8$, because $8^2 = 64$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>Result: $-7$</strong>"
     ]
    },
    {
     "task": "Between which two consecutive natural numbers does $\\sqrt{50}$ lie?",
     "steps": [
      "We look for squares around 50: $7^2 = 49$ and $8^2 = 64$.",
      "Since $49 &lt; 50 &lt; 64$, we have $7 &lt; \\sqrt{50} &lt; 8$.",
      "<strong>$\\sqrt{50}$ lies between 7 and 8</strong> (very close to 7)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "Expressions with variables",
   "summary": "What a variable is, substituting into an expression and writing a description in words as an expression.",
   "theory": [
    "<p>A <strong>variable</strong> is a letter (for example $x$, $a$, $n$) that stands for any number. An <strong>algebraic expression</strong>\n       joins numbers and variables with operations, for example $3x + 5$ or $2(a - 1)$. We do not write the multiplication sign between a number and a variable:\n       $3x$ means $3\\cdot x$.</p>",
    "<p>We find the <strong>value of an expression</strong> by substituting a number for the variable. We substitute a negative number in brackets:\n       for $x = -2$ we get $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "A rectangle with sides $a$ and $a + 3$ has perimeter $o = 2a + 2(a + 3)$ and area $S = a(a + 3)$. For $a = 4$, $o = 22$ and $S = 28$."
    },
    "<p><strong>Writing words as expressions:</strong> “twice the number $x$” is $2x$, “the number 5 more than $x$” is $x + 5$, “a third of the number $x$” is $\\frac{x}{3}$,\n       “the square of the sum of $a$ and $b$” is $(a + b)^2$.</p>"
   ],
   "examples": [
    {
     "task": "Find the value of the expression $2x^2 - 5x + 1$ for $x = -3$.",
     "steps": [
      "We substitute $-3$ in brackets: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$, so $2\\cdot 9 = 18$; then $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>The value of the expression is 34.</strong>"
     ]
    },
    {
     "task": "Write as an expression: “the number 4 less than three times the number $n$”.",
     "steps": [
      "Three times the number $n$ is $3n$.",
      "“4 less” means subtracting 4.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "Simplifying algebraic expressions",
   "summary": "Like terms, expanding brackets and the formulas for the square of a binomial.",
   "theory": [
    "<p><strong>Like terms</strong> have the same variable with the same exponent, for example $3x$ and $-5x$ or $2x^2$ and $x^2$.\n       We add them by adding their coefficients: $3x - 5x + 2 = -2x + 2$. We cannot add unlike terms (for example $x^2$ and $x$).</p>",
    "<p><strong>Expanding a bracket:</strong> we multiply each term in the bracket by the number in front of it: $3(2x - 4) = 6x - 12$.\n       A minus in front of a bracket changes the signs of all the terms: $-(x - 5) = -x + 5$. We multiply two binomials “each term by each term”:\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "A square with side $a + b$ is made of a square $a^2$, a square $b^2$ and two rectangles $ab$. So $(a + b)^2 = a^2 + 2ab + b^2$."
    },
    "<p><strong>Formulas</strong> worth knowing by heart: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$\n       and $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "Simplify the expression $4(x - 3) - 2(x - 5)$.",
     "steps": [
      "Expand: $4x - 12 - 2x + 10$ (the minus in front of the second bracket turns $-5$ into $+10$).",
      "Collect like terms: $4x - 2x = 2x$ and $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "Expand $(x - 4)^2$.",
     "steps": [
      "We use the formula $(a - b)^2 = a^2 - 2ab + b^2$, where $a = x$ and $b = 4$.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "Linear equations",
   "summary": "Equivalent transformations, equations with brackets and checking the solution.",
   "theory": [
    "<p>An <strong>equation</strong> states that two expressions are equal and contains an unknown, for example $2x + 3 = 9$. To <strong>solve an equation</strong>\n       means to find the number (the root) which makes the equality true when substituted. The root of this equation is $x = 3$, because $2\\cdot 3 + 3 = 9$.</p>",
    {
     "fig": "r8-vahy",
     "caption": "An equation is like balanced scales: on the left are two bags of unknown mass $x$ and three weights, on the right nine weights. If we take 3 weights off both pans, the scales stay balanced: $2x = 6$, so $x = 3$."
    },
    "<p><strong>Equivalent transformations</strong> do not change the solution of an equation: we can add (or subtract) the same number\n       or expression to (or from) both sides, and we can multiply or divide both sides by the same non-zero number. The aim is to get the unknown on its own on one side.</p>",
    "<p><strong>Method:</strong> 1. remove the brackets, 2. move the terms with the unknown to one side and the numbers to the other,\n       3. divide both sides by the coefficient of the unknown, 4. <strong>check</strong> by substituting into the original equation.</p>"
   ],
   "examples": [
    {
     "task": "Solve the equation $5x - 7 = 2x + 8$.",
     "steps": [
      "Subtract $2x$ from both sides: $3x - 7 = 8$.",
      "Add 7 to both sides: $3x = 15$.",
      "Divide both sides by 3: $x = 5$.",
      "Check: left side $5\\cdot 5 - 7 = 18$, right side $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "Solve the equation $3(x + 2) = x - 4$.",
     "steps": [
      "Expand the bracket: $3x + 6 = x - 4$.",
      "Subtract $x$ and then 6: $2x = -10$.",
      "Divide by 2: $x = -5$.",
      "Check: $3\\cdot(-5 + 2) = -9$ and $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "Word problems solved with equations",
   "summary": "How to form an equation from a text: numbers, ages, perimeter and sharing money.",
   "theory": [
    "<p>We solve a word problem with an equation in five steps:</p>\n       <ol><li>We label the unknown quantity with a letter (for example $x$) and write down what it means.</li>\n       <li>We express the other quantities in terms of $x$.</li><li>We form an equation according to what is equal in the problem.</li>\n       <li>We solve the equation.</li><li>We check <em>against the text of the problem</em> and write the answer.</li></ol>",
    "<p>Useful expressions: “5 more” is $x + 5$, “three times as many” is $3x$, “three consecutive numbers” are $x$, $x + 1$, $x + 2$,\n       “the perimeter of a rectangle” is $2a + 2b$.</p>",
    "<p>We check against the problem, not by substituting into our own equation. If we had formed the equation wrongly, a check in the equation would not reveal the mistake.</p>"
   ],
   "examples": [
    {
     "task": "The sum of three consecutive natural numbers is 48. What are the numbers?",
     "steps": [
      "We call the smallest number $x$; the others are $x + 1$ and $x + 2$.",
      "Equation: $x + (x + 1) + (x + 2) = 48$, so $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "Check: $15 + 16 + 17 = 48$ ✓",
      "<strong>Answer: The numbers are 15, 16 and 17.</strong>"
     ]
    },
    {
     "task": "A mother is 26 years older than her daughter. Together they are 50 years old. How old is the daughter?",
     "steps": [
      "The daughter's age is $x$, the mother's age $x + 26$.",
      "Equation: $x + (x + 26) = 50$, so $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "Check: the mother is $12 + 26 = 38$ years old and $12 + 38 = 50$ ✓",
      "<strong>Answer: The daughter is 12 years old.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "Circles and discs",
   "summary": "Radius and diameter, circumference, the area of a circle, sectors and rings.",
   "theory": [
    "<p>A <strong>circle</strong> $k$ with centre $S$ and radius $r$ is the set of all points in the plane at distance $r$ from the point $S$ –\n       it is just a “line”. A <strong>disc</strong> is the circle together with the whole region inside it. A <strong>diameter</strong> is a line segment that passes\n       through the centre and joins two points of the circle; its length is $d = 2r$.</p>",
    {
     "fig": "r8-kruh",
     "caption": "Centre $S$, radius $r$, diameter $d = 2r$ and a sector with angle $\\alpha$."
    },
    "<p>The <strong>circumference</strong> (the perimeter of a circle) is $o = 2\\pi r = \\pi d$, the <strong>area of a circle</strong> is $S = \\pi r^2$.\n       The number $\\pi$ is the ratio of the circumference to the diameter of any circle, $\\pi \\approx 3.14$.</p>",
    "<p>A <strong>sector</strong> with angle $\\alpha$ is the part of a disc between two radii; its area is $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$.\n       A <strong>ring</strong> (annulus) is the region between two concentric circles with radii $R &gt; r$: $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "A bicycle wheel has a diameter of $70\\,\\text{cm}$. How far does it travel in one turn? Use $\\pi \\approx 3.14$.",
     "steps": [
      "In one turn the wheel travels the length of its circumference: $o = \\pi d$.",
      "$o \\approx 3.14\\cdot 70 = 219.8\\,\\text{cm}$.",
      "<strong>The wheel travels about $219.8\\,\\text{cm}$, which is roughly $2.2\\,\\text{m}$.</strong>"
     ]
    },
    {
     "task": "Work out the area of a quarter circle with radius $10\\,\\text{cm}$ ($\\pi \\approx 3.14$).",
     "steps": [
      "A quarter circle is a sector with angle $90^\\circ$, that is $\\frac{90}{360} = \\frac{1}{4}$ of the circle.",
      "Area of the whole circle: $S = \\pi r^2 \\approx 3.14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>A quarter: $314 : 4 = 78.5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "Prisms – surface area and volume",
   "summary": "The base and lateral surface of a prism, the net of a cuboid, surface area and volume of a cuboid, a cube and a triangular prism.",
   "theory": [
    "<p>A <strong>prism</strong> is a solid with two congruent parallel <strong>bases</strong> (polygons) and a <strong>lateral surface</strong>\n       made of rectangles – the side faces. Depending on the shape of the base we speak of a triangular, quadrilateral, hexagonal… prism.\n       A cuboid and a cube are quadrilateral prisms.</p>",
    {
     "fig": "r8-siet",
     "caption": "The net of a cuboid with dimensions $a$, $b$, $c$: two bases $a\\times b$ (blue) and the four side faces of the lateral surface (green)."
    },
    "<p>The <strong>volume</strong> of a prism: $V = S_p\\cdot v$ (area of the base times the height). For a cuboid $V = a\\cdot b\\cdot c$, for a cube $V = a^3$.\n       We measure volume in cubic units; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ and $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p>The <strong>surface area</strong> is the sum of the areas of all the faces: $S = 2\\cdot S_p + S_{pl}$, where the area of the lateral surface is $S_{pl} = o_p\\cdot v$\n       (perimeter of the base times the height). For a cuboid $S = 2(ab + bc + ac)$, for a cube $S = 6a^2$.</p>"
   ],
   "examples": [
    {
     "task": "A cuboid has dimensions $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$. Work out its surface area and volume.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "A triangular prism has as its base a right-angled triangle with legs $3\\,\\text{cm}$ and $4\\,\\text{cm}$ (the hypotenuse is $5\\,\\text{cm}$) and a height of $10\\,\\text{cm}$. Work out its surface area and volume.",
     "steps": [
      "Area of the base: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "Volume: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "Lateral surface: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "Surface area: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "Charts, tables and statistics",
   "summary": "Bar charts and pie charts, the mean, the mode and the median.",
   "theory": [
    "<p>We collect data in <strong>tables</strong> and show it in <strong>charts</strong>. A bar chart is good for comparing counts,\n       a pie chart shows what part of the whole each group makes up.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "Bar chart: test marks (1 = best, 5 = worst) in a class of 23 pupils. Most pupils got a 2."
    },
    {
     "fig": "r8-kolac",
     "caption": "Pie chart: how pupils get to school. Half walk, 30 % go by bus and 20 % by bike."
    },
    "<p>The <strong>mean</strong> (arithmetic average) is the sum of all the values divided by how many there are. The <strong>mode</strong> is the value that occurs\n       most often. The <strong>median</strong> is the middle value when the data are put in order of size; with an even number of values it is\n       the mean of the two middle values.</p>"
   ],
   "examples": [
    {
     "task": "The temperatures over five days were $12$, $15$, $9$, $15$ and $14\\,{}^\\circ\\text{C}$. Find the mean, the mode and the median.",
     "steps": [
      "Mean: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "Mode: $15\\,{}^\\circ\\text{C}$ occurs most often.",
      "Median: in order $9, 12, 14, 15, 15$; the middle value is $14\\,{}^\\circ\\text{C}$."
     ]
    },
    {
     "task": "Use the chart of marks to work out the mean mark of the class.",
     "steps": [
      "Sum of all the marks: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "Number of pupils: $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>Mean: $56 : 23 \\approx 2.43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, so $p = {@6}$ and $q = {@7}$.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Lateral surface: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, surface area $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. We multiply both sides by {@4}: $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$ and $\\sqrt{{@2}} = {@3}$, so ${@4} - {@5} = {@6}$.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$, because ${@2}^2 = {@3}$.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ means $a\\cdot a\\cdot a$, not $3\\cdot a$.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ and the signs are {@3}: ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ and the signs are {@3}: ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$ and ${@2}^2 = {@3}$. Since ${@4} &lt; {@5} &lt; {@6}$, we get ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$ and $|{@2}| = {@3}$, so ${@4} - {@5} = {@6}$.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$ and $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "The absolute value is the distance from zero, so it is never negative.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "If you multiply an equation by {@0}, multiply every term on both sides, including the number ${@1}$. It is easier to get the fraction on its own first.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "A fish tank in the shape of a cuboid has inside dimensions of {@0} cm, {@1} cm and {@2} cm. How many litres of water does it hold?",
  "Aká dlhá je dlhšia strana (v cm)?": "How long is the longer side (in cm)?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "How long is the other side $a + {@0}$ for $a = {@1}$ (in cm)?",
  "Aká dlhá je kratšia strana (v cm)?": "How long is the shorter side (in cm)?",
  "Aké je najväčšie z čísel?": "What is the largest of the numbers?",
  "Aké je {@0}. číslo v poradí?": "What is the number in position {@0}?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "What is the number $a$? It should have a single non-zero digit before the decimal point.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "What fraction of a full turn is the angle ${@0}^\\circ$? Enter it as a fraction.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "What is the lowest common denominator of the fractions ${@0}$ and ${@1}$?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "What is the volume of the prism $V = S_p\\cdot v$ (in cm³)?",
  "Aký je objem kvádra (v cm³)?": "What is the volume of the cuboid (in cm³)?",
  "Aký je obsah celého kruhu (v cm²)?": "What is the area of the whole circle (in cm²)?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "What is the area of the lateral surface – the perimeter of the base times the height (in cm²)?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "What is the area of the base $S_p$ (in cm²)?",
  "Aký je polomer kruhu (v cm)?": "What is the radius of the circle (in cm)?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "What is the surface area of the prism – two bases and the lateral surface (in cm²)?",
  "Aký je súčet všetkých čísel?": "What is the sum of all the numbers?",
  "Aký obsah má jedna stena kocky (v cm²)?": "What is the area of one face of the cube (in cm²)?",
  "Babka": "Grandma",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "Without brackets, only the number {@0} is squared and the minus stays in front of the result: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "You are missing the terms with $x$: every term of the first bracket must be multiplied by every term of the second, not just first by first and last by last.",
  "Dcéra": "Her daughter",
  "Dedko": "Grandpa",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "You only divided by $\\pi$, which gives you the diameter. The radius is half of it.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "We move the decimal point {@0} {@1} to the left so that a single non-zero digit is left in front of it: ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "The chart shows how many books readers borrowed from the library on each day.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "The longer side is ${@0} + {@1} = {@2}\\,\\text{cm}$.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "You put the diameter into the formula $S = \\pi r^2$. Work out the radius first – half of the diameter.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "Substitute $x = {@0}$ into the term ${@1}$. What is ${@2}$?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "Substitute both variables at once, with negative numbers in brackets.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "The square $x^2$ means $x\\cdot x$, not $2\\cdot x$.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "A square number as a square, a cube number as a cube",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "A square is a product of two equal factors. Minus times minus is plus.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "Squaring is not doubling: to square a number means to multiply it by itself.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "Squaring is not doubling: squaring means multiplying by itself.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "The other side is the whole expression $a + {@0}$, so put it in brackets: you multiply $a\\cdot(a + {@1})$.",
  "Dvojnásobok": "Twice",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "The exponent is not the number of digits, but the number of places you move the decimal point.",
  "Filip": "Filip",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "A prism has two bases (top and bottom), and both must be included in the surface area.",
  "Hľadaj najvyšší stĺpec.": "Look for the tallest bar.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "Look for the non-negative number whose square is the number under the root.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "Look for the number which, multiplied by itself three times, gives the volume.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "We are looking for the number whose cube is {@0}: ${@1}^3 = {@2}$, so $a = {@3}\\,\\text{cm}$.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "One face has an area of ${@0} : 6 = {@1}\\,\\text{cm}^2$, so $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "One side of a rectangle is {@0} cm longer than the other. The perimeter of the rectangle is {@1} cm. How long is the {@2} side (in cm)?",
  "K obom stranám pripočítame {@0}": "We add {@0} to both sides",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "Each face appears twice on a cuboid. What is the surface area of the cuboid (in cm²)?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "Multiply every term of the first bracket by every term of the second. Then collect the terms with $x$.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "When you move a number to the other side of an equation, change its sign.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "When you move a number to the other side of an equation, change its sign. Do the same operation on both sides.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "A cube has 6 faces, and each one is a square with side $a$.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "A cube has 6 faces, not 4. Don't forget the top and bottom faces.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "A cube has 6 identical square faces: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "A cube has a volume of ${@0}\\,\\text{cm}^3$. How long is its edge (in cm)?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "A cube has a surface area of ${@0}\\,\\text{cm}^2$. How long is its edge (in cm)?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "You get rid of the coefficient ${@0}$ of $x$ by dividing, not subtracting: ${@1}x$ means ${@2}\\cdot x$.",
  "Koľko je $R^2 - r^2$?": "What is $R^2 - r^2$?",
  "Koľko je $\\sqrt{{@0}}$?": "What is $\\sqrt{{@0}}$?",
  "Koľko je $r^2$?": "What is $r^2$?",
  "Koľko je ${@0}$?": "What is ${@0}$?",
  "Koľko je ${@0}^2$?": "What is ${@0}^2$?",
  "Koľko je ${@0}{@1}$?": "What is ${@0}{@1}$?",
  "Koľko je $|{@0}|$?": "What is $|{@0}|$?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "What is in the brackets: ${@0}{@1}$?",
  "Koľko je čísel?": "How many numbers are there?",
  "Koľko kníh si požičali za celý týždeň?": "How many books were borrowed during the whole week?",
  "Koľko rokov má {@0}?": "How old is {@0}?",
  "Koľko žiakov hlasovalo spolu?": "How many pupils voted altogether?",
  "Koľko žiakov odpovedalo spolu?": "How many pupils answered altogether?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "The shorter side is $x$, the longer one $x + {@0}$. Equation: $2x + 2(x + {@1}) = {@2}$, so $4x + {@3} = {@4}$, $4x = {@5}$ and $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "The shorter side is $x$, the longer one $x + {@0}$. Use the equation $2x + 2(x + {@1}) = {@2}$ to work out $4x$.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "The shorter side is ${@0}\\,\\text{cm}$.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "A circle has {@0}. Work out its area in cm². {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "A circle has {@0}. Work out its circumference in cm. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "Circle with centre, radius, diameter and sector",
  "Kruhový diagram dopravy do školy": "Pie chart of how pupils travel to school",
  "Ktoré ovocie dostalo najviac hlasov?": "Which fruit got the most votes?",
  "Ktorý výraz sa rovná ${@0}$?": "Which expression is equal to ${@0}$?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "Which expression matches the description: <em>{@0}</em>?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "Which sport is the most popular among the pupils?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "Every face of a cuboid appears twice (top and bottom, front and back, left and right). Double the sum $ab + bc + ac$.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "A cuboid has dimensions $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Work out its surface area (in cm²) and volume (in cm³). Enter them separated by a semicolon.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "A cuboid has three pairs of identical faces: $ab$, $bc$ and $ac$. The volume is the product of all three dimensions.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "Only look for the median in an ordered list. First put the numbers in order from smallest to largest.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "The median is the mean of these two numbers. What is it?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "Between which two consecutive natural numbers does $\\sqrt{{@0}}$ lie? Enter the smaller and the larger number separated by a semicolon.",
  "Množiny prirodzených, celých a racionálnych čísel": "Sets of natural numbers, integers and rational numbers",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "The mode is the value that occurs most often.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "The mode is not the largest number, but the value that occurs most often.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "Only $x$ is halved; the number {@0} is subtracted from the half afterwards.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "The numbers ${@0}$ and ${@1}$ lie on the number line. What is the distance between them?",
  "Najmenšie číslo je {@0}.": "The smallest number is {@0}.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "Call the smallest number $x$ and add up all the numbers. The equation has the form ${@0}x + \\square = {@1}$. What number goes in the box?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "Call the smallest number $x$; the next ones are $x + 1$, $x + 2$, … Add them up and set them equal to the sum.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "First get the fraction on its own, then multiply both sides by the denominator.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "First expand the bracket, then solve it like an ordinary equation.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "First work out the power, then multiply and finally add. Put a negative number in brackets.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "First find the absolute values of both numbers (their distances from zero, which are never negative) and only then subtract.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "First work out each square root separately.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "First work out what is in the brackets, then multiply.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "The tallest bar has the value {@0} and belongs to the option “{@1}”. This value is the mode of the data.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "The largest number is $x + {@0} = {@1}$.",
  "Natália": "Natalia",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "Find two square numbers that the number under the root lies between.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "You should multiply the number $x$, not the number {@0}.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "The whole sum is multiplied, so it must go in brackets. Without brackets only $x$ would be multiplied.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "The whole sum is multiplied, so $x$ as well, not just the number {@0}.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "Only $x$ is multiplied; the number {@0} is subtracted afterwards, from {@1} $x$. Brackets would mean {@2} the whole difference.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "How many places to the left do you need to move the decimal point? That is the exponent $n$.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "A rectangle has sides $a$ and $a + {@0}$ centimetres long. Work out its {@1} for $a = {@2}$.",
  "Obdĺžnik so stranami a a a plus 3": "Rectangle with sides a and a plus 3",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "Divide both sides by ${@0}$. What is $x$?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "Multiply both sides by {@0}. What is $x$?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "Both numbers lie on the same side of zero, so subtract their distances from zero, don't add them.",
  "Objem kocky je $a^3$.": "The volume of a cube is $a^3$.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "You don't divide the volume by three. You are looking for a number which, multiplied by itself three times, gives the volume.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "The area of one face is $a^2$, not $a$. The face is a square.",
  "Obsah kruhu je $S = \\pi r^2$.": "The area of a circle is $S = \\pi r^2$.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "The area of a ring is not $\\pi(R - r)^2$. Subtract the area of the small circle from the area of the big one: $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "The area of a rectangle is the product of its sides.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "The area of a right-angled triangle is half the product of its legs – don't forget to divide by two.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "The areas of the circles must be subtracted, not added: the small circle in the middle is missing.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "The circumference is $2\\pi r$ – you forgot the 2 (or you put the radius instead of the diameter into $\\pi d$).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "The circumference of a circle is $o = 2\\pi r = \\pi d$.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "The circumference of a circle is ${@0}\\,\\text{cm}$. What is its radius in cm? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "You can't just divide the perimeter by four, because the sides of the rectangle are not the same length.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "The perimeter of a rectangle is $2a + 2b$; for the other side substitute $a + {@0}$.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "The perimeter of a rectangle is $2a + 2b$. Call the shorter side $x$.",
  "Od oboch strán odčítame {@0}": "We subtract {@0} from both sides",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "Subtract the area of the small circle from the area of the big circle.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "You are subtracting from a negative number, so you move even further left of zero on the number line.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "The square root is not half of the number. Look for the number which, multiplied by itself, gives {@0}.",
  "Odčítaj hodnoty dvoch stĺpcov.": "Subtract the values of the two bars.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "Subtract the absolute values you got. What is the result?",
  "Odčítaj získané čísla. Aký je výsledok?": "Subtract the numbers you got. What is the result?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "Subtract the numbers and take the result without its sign. If they lie on opposite sides of zero, their distances from zero add up.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "Replace subtracting with adding the opposite number.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "Subtracting a negative number means adding the opposite, positive number: $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "Subtracting a number means adding the opposite number: ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "The description matches the expression ${@0}$. When writing it, work from the end of the sentence: first decide what the “main” operation is (sum, difference, power…), then its parts.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "Get the fraction on its own. What is $\\frac{x}{{@0}}$?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "The base is a right-angled triangle, and its area is half the product of the legs. The lateral surface is the perimeter of the base times the height.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "Using the formula ${@0}$ with $a = x$, $b = {@1}$: ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "The radius is half of the diameter: $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "Half of the number $x$ is $x$ divided by two, not $2x$.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "The last term $b^2$ is a square, and a square is always positive.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "The last term is the square of the number {@0}, not the number itself.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "The last term is the product ${@0}\\cdot {@1}$, not just the number {@2}.",
  "Použi $\\pi \\approx 3{,}14$.": "Use $\\pi \\approx 3.14$.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "Divide the surface area by six to get the area of one face. Then take the square root.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "Careful: the formula $S = \\pi r^2$ uses the radius, not the diameter.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "Careful: $(x + a)^2$ is not $x^2 + a^2$ – the double product $2ax$ is missing.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "There is an odd number of numbers ({@0}), so the median is the middle one, number {@1} in order: {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "There is an even number of numbers ({@0}), so the median is the mean of numbers {@1} and {@2} in order: $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "You are working out the area of the circle ($\\pi r^2$), but the question asks for the circumference.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "Imagine moving along the number line: a positive number moves you to the right, a negative one to the left.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "Move the terms with $x$ to the left-hand side and collect them. What will the coefficient of $x$ be?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "Move the terms with $x$ to the left and the numbers to the right. In the form $ax = b$: what are $a$ and $b$? Enter them separated by a semicolon.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "Move the numbers to the right-hand side and collect them. What number will be on the right-hand side?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "Convert the fraction to a decimal. Of two negative numbers, the larger one is the one closer to zero.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "Division follows the same sign rule as multiplication.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "When multiplying fractions you don't need a common denominator: multiply numerator by numerator and denominator by denominator.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "When you move a term with $x$ to the other side of an equation, you have to change its sign.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "When you move a number to the other side of an equation, you have to change its sign.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "With an even number of numbers there are two numbers in the middle. The median is their mean.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "In a difference the order matters: first you write what you are subtracting from.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "Expanding gives two terms with $x$: $x$ times the number from the second bracket and the number from the first bracket times $x$. Collect them. What is the coefficient $p$ of $x$?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "When adding and subtracting fractions you need a common denominator. Don't forget the signs.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "When squaring a difference, it is not enough to square each term separately – the middle term $-2ab$ is missing.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "When squaring a sum, it is not enough to square each term separately – the middle term $2ab$ is missing.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "With negative numbers it is not the larger absolute value that decides: the larger number is the one closer to zero.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "Adding a negative number is the same as subtracting its absolute value: ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "Five times",
  "Päťnásobok": "Five times",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "The same signs give a positive product, different signs a negative one.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "The difference of square roots is not the square root of the difference. First work out each square root separately and only then subtract.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "Decide which operation is done last. If a whole sum or difference is multiplied or squared, you need brackets.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "We convert the dimensions to decimetres: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "Convert the dimensions to decimetres, because $1\\,\\text{dm}^3 = 1$ litre.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "Expand $(x{@0})(x{@1})$ and write the result in the form $x^2 + px + q$. Enter $p$ and $q$ separated by a semicolon.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "Expand ${@0}({@1})$ (including the sign in front of the bracket). Enter the coefficient of $x$ and the number on its own.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "Expand ${@0}({@1})$. Enter the coefficient of $x$ and the number on its own separated by a semicolon.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Expand and simplify ${@0}$ to the form $ax + b$. Enter $a$ and $b$ separated by a semicolon.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "Expand the bracket ${@0}(x{@1})$. What number (without $x$) do you get?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "We expand: ${@0}{@1} = {@2}{@3}$. Terms with $x$ to the left, numbers to the right: ${@4} = {@5}$, so $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "We expand: ${@0}{@1}{@2}$. We collect like terms: ${@3}$, so $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "Convert both fractions to the denominator {@0} and {@1} their numerators. What numerator do you get?",
  "S – stred": "S – centre",
  "Sieť kvádra": "Net of a cuboid",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Collect like terms. Enter $a$ and $b$ separated by a semicolon.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "The common denominator is {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "Altogether that makes {@0} equal parts: {@1} has one part and {@2} has {@3}. So divide the total by {@4}.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "Together they are {@0} {@1} old, but they are not the same age, so you can't just halve the total. Take the difference of {@2} {@3} into account.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "The face is a square. How long is its side, that is the edge of the cube (in cm)?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "The middle term is double the product, $2ab$, not just $ab$.",
  "Stĺpcový diagram známok z písomky": "Bar chart of test marks",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "Call the amount {@1} {@0} $x$. “{@2} as much” means multiplying by {@3}.",
  "Syn": "His son",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "The sum is ${@0} = {@1}$ and there are {@2} numbers. Mean: ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "Divide the sum by how many numbers there are altogether. Count them again.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "The sum divided by how many numbers there are is their mean, not the number you are looking for. Write an equation with all the numbers $x$, $x + 1$, …",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "The sum of {@0} consecutive natural numbers is {@1}. Which of them is the {@2}?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "The product $(+b)\\cdot(-b)$ is negative, so there is a minus in front of $b^2$.",
  "Sčítaj hodnoty všetkých stĺpcov.": "Add up the values of all the bars.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "Add up the coefficients of all the terms with $x$. What is $a$?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "Add the two results. What is the value of the expression?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "Add up the numbers on their own (without $x$). What is $b$?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "Add up all the terms. What is the value of the expression?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "Add up all the numbers and divide the sum by how many there are.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "Add the coefficients of $x$ and the numbers on their own separately. The sign in front of a term belongs to it.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "You only added two sides. A rectangle has four sides, so count each length twice.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "We add up the values of all the bars: ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "That would be the result of $(x - b)^2$. In the product of a sum and a difference the middle terms cancel each other out.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "That is the result of the product $(a + b)(a - b)$. The square of a difference also has the middle term $-2ab$, and the last term is positive.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "That is the mean. The median is the middle value of the numbers in order.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "That is the length of the other side. The question asks for the {@0} side.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "That is only the lateral surface. The surface area also includes both bases.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "That is the smallest of the numbers, but the question asks for the largest. Add to it how much larger the largest number is.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "That is the largest of the numbers, but the question asks for the smallest.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "That is the volume of the cube ($a^3$). The surface area is the sum of the areas of all the faces.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "That is the area of the whole circle. A sector is only part of it, depending on the size of the angle at the centre.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "That is the area of one face. You get the edge by taking its square root.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "That is the circumference ($2\\pi r$), or you worked out $r^2$ as $2r$. The area is $\\pi r^2 = \\pi\\cdot r\\cdot r$.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "That is the surface area of the cube ($6a^2$). The volume is $a^3$.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "That is how many times the most common value occurs. The mode is the value itself.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "That is the amount {@1} {@0}. The question asks how much {@3} {@2}.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "That is the sum of the numbers. You get the mean by dividing the sum by how many numbers there are.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "That is {@0} age, but the question asks for {@1} age.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "A cube is a product of three equal factors. An odd power of a negative number is negative.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "Cubing is not tripling: you have to write the number three times as a factor and multiply.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "A triangular prism has a base that is a right-angled triangle with legs ${@0}\\,\\text{cm}$ and ${@1}\\,\\text{cm}$ (the hypotenuse is ${@2}\\,\\text{cm}$) and a height of ${@3}\\,\\text{cm}$.",
  "Trojnásobok": "Three times",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "The angle ${@0}^\\circ$ is $\\frac{{@1}}{360}$ of a full turn, so the sector is {@2} of the circle: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3.14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "You have to square the whole difference, not just the number $x$.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "The whole difference is squared, not each number separately. Put the difference in brackets.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "We square the whole number $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "Find the median of the numbers {@0}.",
  "Urči modus súboru údajov {@0}.": "Find the mode of the data set {@0}.",
  "Usporiadame: {@0}. {@1}": "In order: {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "On which day were the most books borrowed?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "The longer side appears twice in the perimeter, so the difference of {@0} cm must also be counted twice.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "Call the younger person's age $x$; the older person's age is $x$ plus the difference. The two ages add up to the given number.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "Let {@0} age be $x$. Use the equation $x + (x + {@1}) = {@2}$ to work out $2x$.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "Let {@0} age be $x$; then {@1} age is $x + {@2}$. Equation: $x + (x + {@3}) = {@4}$, so $2x = {@5}$ and $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "Take this part of the area of the whole circle. What is the area of the sector (in cm²)?",
  "Vnuk": "His grandson",
  "Vnučka": "Her granddaughter",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "The formula $o = 2\\pi r$ uses the radius. If you know the diameter, $o = \\pi d$ is enough – don't double the diameter.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "Divide the right-hand side by the coefficient of $x$. What is $x$?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "Divide the sum by how many numbers there are. What is the mean?",
  "Vydeľ. Aké je $x$?": "Divide. What is $x$?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "Multiply the denominators. What denominator do you get?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "Multiply the numbers on their own from both brackets. What is $q$?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "Multiply the numerators. What numerator do you get (before simplifying)?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "Multiply by $3.14$. What is the area of the circle (in cm²)?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "Multiply by $3.14$. What is the area of the ring (in cm²)?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "Work out $\\sqrt{{@0}} - \\sqrt{{@1}}$.",
  "Vypočítaj $\\sqrt{{@0}}$.": "Work out $\\sqrt{{@0}}$.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "Work out ${@0}$. Enter the result as a fraction in its simplest form (e.g. -5/6) or as a whole number.",
  "Vypočítaj ${@0}^2$.": "Work out ${@0}^2$.",
  "Vypočítaj ${@0}^3$.": "Work out ${@0}^3$.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "Work out $|{@0}| - |{@1}|$.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "Work out the mean of the numbers {@0}.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "Work out the value of the expression ${@0}$ for $x = {@1}$.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "Work out the value of the expression ${@0}(x{@1})$ for $x = {@2}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "Work out the value of the expression ${@0}{@1}$ for $x = {@2}$ and $y = {@3}$.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "Work out the value of the expression ${@0}{@1}$ for $x = {@2}$.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "Work out the volume of a cube with edge ${@0}\\,\\text{cm}$ (in cm³).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "Work out the area of the whole circle and take the same fraction of it as the angle of the sector is of $360^\\circ$.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "Work out the area of a sector with radius $r = {@0}\\,\\text{cm}$ and angle at the centre ${@1}^\\circ$ (in cm²). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "Work out the area of a ring with radii $R = {@0}\\,\\text{cm}$ and $r = {@1}\\,\\text{cm}$ (in cm²). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "Work out the area of the rectangle $a\\cdot b$ (in cm²).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "Work out the areas of the three different faces $ab$, $bc$ and $ac$ and add them up (in cm²).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "Work out the perimeter of the rectangle $2a + 2b$ (in cm).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "Work out the surface area of a cube with edge ${@0}\\,\\text{cm}$ (in cm²).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "You worked out $2x$, which is double the age you are looking for. Now divide by two.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "You worked out the area. The perimeter is the sum of the lengths of all four sides.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "You worked out the perimeter. The area of a rectangle is the product of the lengths of its sides.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "Solve the equation $\\frac{x}{{@0}}{@1} = {@2}$.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "Solve the equation ${@0}(x{@1}) = {@2}{@3}$.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "Solve the equation ${@0}{@1} = {@2}{@3}$.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "Solve the equation. What is $x$ (the smallest number)?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "Solve the equation. How many euros has {@1} {@0}?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "You took part of the circumference ($2\\pi r$), which is the length of the arc. For the area of a sector, start from the area of the circle $\\pi r^2$.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "The distance between two numbers is the absolute value of their difference: $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "Divide the formula $o = 2\\pi r$ by $2\\pi \\approx 6.28$.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "Balanced scales: two bags x and three weights on the left, nine weights on the right",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "Multiply the result in the brackets by ${@0}$. What is the value of the expression?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "Check whether the minus is inside the brackets. Only what is directly under the exponent is squared.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "From $o = 2\\pi r$ we get $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6.28} = {@1}\\,\\text{cm}$.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "Substitute the number for $x$; if it is negative, put it in brackets.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "You swapped the numbers: you multiply by {@0} and add {@1}.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Write the result $\\frac{{@0}}{{@1}}$ in its simplest form (or as a whole number).",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "Write the fraction $\\frac{{@0}}{{@1}}$ in its simplest form (or as a whole number).",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "Write the number ${@0}$ in the form $a\\cdot 10^n$, where $1 \\le a &lt; 10$. Enter $a$ and $n$ separated by a semicolon.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "Get rid of the number ${@0}$ on the left-hand side so that only ${@1}x$ is left. What number will be on the right-hand side?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "Simplify the expression ${@0}$ to the form $ax + b$. Enter the numbers $a$ and $b$ separated by a semicolon.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Don't subtract fractions by subtracting the numerators and the denominators separately. First convert them to a common denominator.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Don't add fractions by adding the numerators and the denominators separately. First convert them to a common denominator.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "You get rid of the fraction $\\frac{x}{{@0}}$ by multiplying by {@1}, not by dividing.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "We convert the fraction to a decimal: ${@0} = {@1}$. We are comparing ${@2}$ and ${@3}$, so ${@4} {@5} {@6}$.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "${@0}$ means the product of the number ${@1}$ and the variable $x$, not their sum. Put the substituted number in brackets and multiply.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "A negative number in front of a bracket changes the sign of every term in the bracket, including the number at the end.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "Put a negative number in brackets when squaring it: $({@0})^2$ is a positive number.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "Brackets would mean that you take the whole sum {@0} times. Here you first take {@1} the number $x$ and only then add {@2}.",
  "a $x + 2$": "and $x + 2$",
  "autobusom 30 %": "by bus 30%",
  "babka": "Grandma",
  "babky": "Grandma's",
  "banán": "banana",
  "beh": "running",
  "d = 2r – priemer": "d = 2r – diameter",
  "dedka": "Grandpa's",
  "dedko": "Grandpa",
  "dlhšia": "longer",
  "dlhšiu": "longer",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "the square of the difference of the number $x$ and the number {@0}",
  "dvojnásobku": "twice",
  "dvojnásobok": "twice",
  "futbal": "football",
  "hokej": "ice hockey",
  "hruška": "pear",
  "jahoda": "strawberry",
  "k – kružnica": "k – circle",
  "kratšia": "shorter",
  "kratšiu": "shorter",
  "mama": "Mum",
  "mamy": "Mum's",
  "miest": "places",
  "na bicykli 20 %": "by bike 20%",
  "napr. -2; 8": "e.g. -2; 8",
  "napr. 4; 5": "e.g. 4; 5",
  "napr. 6; -9": "e.g. 6; -9",
  "objem (v cm³)": "volume (in cm³)",
  "obsah (v cm²)": "area (in cm²)",
  "obvod (v cm)": "perimeter (in cm)",
  "otca": "Dad's",
  "otec": "Dad",
  "pešo 50 %": "on foot 50%",
  "plávanie": "swimming",
  "podstava": "base",
  "polomer $r = {@0}\\,\\text{cm}$": "a radius $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "surface area (in cm²)",
  "povrch; objem": "surface area; volume",
  "priemer $d = {@0}\\,\\text{cm}$": "a diameter $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "five times",
  "päťnásobok": "five times",
  "r – polomer": "r – radius",
  "rovnaké, výsledok je kladný": "the same, so the result is positive",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "the difference of {@0} the number $x$ and the number {@1}",
  "rôzne, výsledok je záporný": "different, so the result is negative",
  "slivka": "plum",
  "stĺpcový diagram": "bar chart",
  "sčítaj": "add",
  "tenis": "tennis",
  "tri štvrtiny": "three quarters",
  "troch": "three",
  "trojnásobku": "three times",
  "trojnásobok": "three times",
  "ušetril": "saved",
  "ušetrila": "saved",
  "vnuk": "his grandson",
  "vnuka": "his grandson's",
  "vnučka": "her granddaughter",
  "vnučky": "her granddaughter's",
  "výsek s uhlom α": "sector with angle α",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} How much taller is the “{@1}” bar than the “{@2}” bar? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} Work out its surface area (in cm²) and volume (in cm³), separated by a semicolon.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} Work out its {@1}.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0} and {@1} saved {@2} € altogether. {@3} {@4} {@5} as much as {@6}. How many euros has {@8} {@7}?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0} is {@1} {@2} {@3} than {@4}. Together they are {@5} {@6} old. How old is {@7}?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0} has $x$ euros, {@1} has ${@2}x$ euros. How many $x$ is that altogether, that is, what number goes into the equation $\\square\\, x = {@3}$?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0} is ${@1} + {@2} = {@3}$ {@4} old.",
  "{@0} má {@1} {@2}.": "{@0} is {@1} {@2} old.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "{@0} the sum of the number $x$ and the number {@1}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "“{@0}” means multiplying by {@1}, not adding {@2}.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}: $x$, {@1}: ${@2}x$. Equation: $x + {@3}x = {@4}$, so ${@5}x = {@6}$ and $x = {@7}$. {@8} {@9} {@10} €.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}: ${@1}x = {@2}$. We divide both sides by ${@3}$: $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "We multiply numerator by numerator and denominator by denominator: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "The term ${@0}$ has the coefficient ${@1}$ – don't forget to include it.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "We put the terms with $x$ on the left and the numbers on the right: ${@0}{@1} = {@2}{@3}$, so ${@4} = {@5}$ and $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "Move the terms with $x$ to one side and the numbers to the other. Finally divide by the coefficient of $x$.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "Terms with $x$: ${@0}{@1}{@2} = {@3}$. Numbers: ${@4}{@5} = {@6}$. Result: ${@7}$, so $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "There are {@0} numbers. In which position is the middle number?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "The numbers lie on opposite sides of zero, so their distances from zero add up – don't subtract them.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "The numbers have different signs, so don't add their absolute values – subtract the smaller from the larger. The sign of the result comes from the number with the larger absolute value.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "First put the numbers in order from smallest to largest.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "We call the numbers $x$, $x + 1${@0}. Equation: ${@1}x + {@2} = {@3}$, so ${@4}x = {@5}$ and $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "Put the numbers in order, starting with the smallest. What is the number in position {@0}?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "Put the numbers in order, starting with the smallest. Which number is in this position? That is the median.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "The number $a$ must satisfy $1 \\le a &lt; 10$, so it has a single digit before the decimal point.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "The number $a$ has a single digit before the decimal point. The exponent $n$ tells you how many places you move the point.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "The number $q$ comes from multiplying the numbers on their own from the brackets, not adding them.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "The number ${@0}$ multiplies everything in the brackets, not just $x$.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "The number under the root has two decimal places, so the result will have one: try $\\sqrt{{@0}}$ and divide by 10.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "The number in front of the bracket multiplies both terms in the bracket – not just $x$, but the number on its own too.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "The number {@0} occurs three times, the other numbers only once. The mode is {@1}.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "Multiply every term in the bracket by the number in front of it, together with its sign. Then collect like terms.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "Multiply every term in the bracket by the number in front of it, including the number on its own at the end.",
  "číslo o {@0} menšie ako polovica čísla $x$": "a number {@0} less than half of the number $x$",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "a number {@0} greater than {@1} the number $x$",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "Square with side a plus b divided into four parts",
  "Štvornásobok": "Four times",
  "štvornásobku": "four times",
  "štvornásobok": "four times",
  "štyroch": "four",
  "Žiaci hlasovali o obľúbenom ovocí.": "The pupils voted for their favourite fruit.",
  "Žiaci uviedli svoj obľúbený šport.": "The pupils named their favourite sport.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "“{@0} less” means subtracting {@1} from the half – the order is the other way round.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "“{@0} greater” means adding {@1}, not subtracting it.",
  "ℕ – prirodzené": "ℕ – natural numbers",
  "ℚ – racionálne čísla": "ℚ – rational numbers",
  "ℤ – celé čísla": "ℤ – integers",
  "football": "football",
  "ice hockey": "ice hockey",
  "tennis": "tennis",
  "swimming": "swimming",
  "running": "running",
  "bar chart": "bar chart",
  "Mon": "Mon",
  "Tue": "Tue",
  "Wed": "Wed",
  "Thu": "Thu",
  "Fri": "Fri",
  "jablko": "apple",
  "pear": "pear",
  "banana": "banana",
  "plum": "plum",
  "strawberry": "strawberry",
  "apple": "apple"
 }
});
