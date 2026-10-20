/* English: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/r6/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "r6-desatinne": {
   "title": "Decimals and operations with them",
   "summary": "Writing, comparing and rounding decimals; addition, subtraction, multiplication and division.",
   "theory": [
    "<p>In a <strong>decimal</strong> the decimal point separates the whole part from the decimal part. The number $2.75$ has 2 ones, 7 tenths and 5 hundredths,\n       so $2.75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. We can add or leave out zeros at the end of the decimal part: $2.4 = 2.40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "The part of the number line from 2 to 3. Between two whole numbers there are 10 tenths and 100 hundredths."
    },
    "<p><strong>Addition and subtraction:</strong> we write the numbers one under the other so that the <em>decimal points line up</em>, and fill in missing places with zeros.\n       <strong>Multiplication:</strong> we multiply as with whole numbers, and the result has as many decimal places as both factors have together: $1.2\\cdot 0.3 = 0.36$.\n       Multiplying by 10, 100, 1 000 moves the decimal point 1, 2, 3 places to the right, dividing moves it to the left.</p>",
    "<p><strong>Dividing by a whole number:</strong> we divide as usual and write the decimal point in the quotient at the moment we pass it in the dividend: $7.5 : 3 = 2.5$.\n       <strong>Rounding:</strong> we look at the digit just after the place we are rounding to. If it is 0 to 4, we round down; if 5 to 9, we round up: $3.462 \\doteq 3.5$ (to one decimal place).</p>"
   ],
   "examples": [
    {
     "task": "Work out $12.5 + 3.78$.",
     "steps": [
      "Line up the decimal points: $12.50 + 3.78$.",
      "Add place by place: $12.50 + 3.78 = 16.28$.",
      "<strong>Result: 16.28</strong>"
     ]
    },
    {
     "task": "Work out $2.4\\cdot 1.5$.",
     "steps": [
      "Without the decimal points: $24\\cdot 15 = 360$.",
      "The factors have 2 decimal places together, so the result is $3.60 = 3.6$.",
      "<strong>Result: 3.6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "Fractions and their basic uses",
   "summary": "What a fraction is, part of a whole, simplifying and expanding, converting to a decimal, comparing.",
   "theory": [
    "<p>A <strong>fraction</strong> $\\frac{a}{b}$ describes part of a whole: we divide the whole into $b$ equal parts (the <em>denominator</em>) and take $a$ of them (the <em>numerator</em>).\n       The fraction bar means division: $\\frac{3}{4} = 3 : 4 = 0.75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "Shaded parts of circles: one half, three quarters and three eighths."
    },
    "<p><strong>A fraction of a number:</strong> we work out $\\frac{3}{4}$ of 20 by dividing 20 by the denominator and multiplying by the numerator: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>Expanding and simplifying:</strong> if we multiply or divide both the numerator and the denominator by the same number (other than zero), the value of the fraction does not change:\n       $\\frac{12}{18} = \\frac{2}{3}$ (we divide by six). A fraction is in its <em>simplest form</em> when it cannot be simplified any further.\n       The easiest way to compare two fractions is to give them a common denominator.</p>"
   ],
   "examples": [
    {
     "task": "What is $\\frac{2}{5}$ of 35?",
     "steps": [
      "One fifth: $35 : 5 = 7$.",
      "Two fifths: $7\\cdot 2 = 14$.",
      "<strong>Result: 14</strong>"
     ]
    },
    {
     "task": "Compare the fractions $\\frac{3}{4}$ and $\\frac{5}{6}$.",
     "steps": [
      "The common denominator is 12: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$, so $\\frac{3}{4} &lt; \\frac{5}{6}$."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "Divisibility, prime and composite numbers",
   "summary": "Factors and multiples, divisibility rules, prime numbers, composite numbers and prime factorisation.",
   "theory": [
    "<p>A number $a$ is <strong>divisible</strong> by a number $b$ if the division $a : b$ leaves no remainder. Then $b$ is a <em>factor</em> (divisor) of $a$ and $a$ is a <em>multiple</em> of $b$.\n       For example the factors of 12 are 1, 2, 3, 4, 6 and 12.</p>",
    "<p><strong>Divisibility rules.</strong> A number is divisible by</p>\n       <ul><li><strong>2</strong> if its last digit is even (0, 2, 4, 6, 8),</li>\n       <li><strong>3</strong> if its digit sum is divisible by 3; <strong>9</strong> if its digit sum is divisible by 9,</li>\n       <li><strong>4</strong> if the number formed by its last two digits is divisible by 4,</li>\n       <li><strong>5</strong> if it ends in 0 or 5; <strong>10</strong> if it ends in 0,</li>\n       <li><strong>6</strong> if it is divisible by both 2 and 3.</li></ul>",
    "<p>A <strong>prime number</strong> is a natural number that has exactly two factors: 1 and itself (2, 3, 5, 7, 11, …).\n       A <strong>composite number</strong> has more than two factors (4, 6, 8, 9, …). The number 1 is neither prime nor composite.\n       Every composite number can be written as a product of primes (<em>prime factors</em>): $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "The sieve of Eratosthenes: from the numbers 1 to 60 we cross out the multiples of 2, 3, 5 and 7 (but not those numbers themselves). The primes are left; they are shaded."
    }
   ],
   "examples": [
    {
     "task": "Is the number 4 716 divisible by 3? And by 4?",
     "steps": [
      "Digit sum: $4 + 7 + 1 + 6 = 18$, and 18 is divisible by 3, so <strong>yes</strong>.",
      "The last two digits are 16 and $16 : 4 = 4$, so it is also divisible by 4: <strong>yes</strong>."
     ]
    },
    {
     "task": "Write the number 90 as a product of prime factors.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, 5 is a prime.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "Greatest common divisor and least common multiple",
   "summary": "GCD and LCM using prime factorisation, coprime numbers and word problems.",
   "theory": [
    "<p>The <strong>greatest common divisor</strong> of the numbers $a$, $b$ – written $D(a, b)$ or GCD – is the largest number that divides both numbers.\n       The <strong>least common multiple</strong> – $n(a, b)$ or LCM – is the smallest non-zero number that is a multiple of both numbers.</p>",
    {
     "fig": "r6-strom",
     "caption": "Prime factorisation of 60 and 84. The common factors are 2, 2 and 3, so D(60, 84) = 12; n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>Method using factorisation:</strong> we write both numbers as products of prime factors. The GCD is the product of the <em>common</em> prime factors (each as many times as it appears in both).\n       The LCM is the product of <em>all</em> the prime factors that appear in at least one of the numbers (each as many times as it appears in the number where it occurs more often).\n       A useful check: $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>",
    "<p>Numbers whose GCD is 1 are called <strong>coprime</strong> (e.g. 8 and 15). If they have a common divisor greater than 1, they are <strong>not coprime</strong>.\n       We use the GCD when we divide something into equal parts that are as large as possible; the LCM when we look for when two repeating things meet again.</p>"
   ],
   "examples": [
    {
     "task": "Find $D(24, 36)$ and $n(24, 36)$.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "GCD: $2^2\\cdot 3 = 12$.",
      "LCM: $2^3\\cdot 3^2 = 72$.",
      "Check: $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "Two traffic lights turn green at the same time. The first changes colours in a 40-second cycle, the second in a 60-second cycle. After how many seconds will they both be at the start of a cycle together again?",
     "steps": [
      "We are looking for the least common multiple: $n(40, 60)$.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, so $n = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>After 120 seconds (2 minutes).</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "Integers and negative numbers",
   "summary": "Positive and negative numbers on the number line, opposite numbers, absolute value, comparing, adding and subtracting.",
   "theory": [
    "<p>The <strong>integers</strong> are $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ We use negative numbers for example for temperatures below zero ($-5\\,{}^\\circ\\mathrm{C}$),\n       for debts or for heights below sea level. Zero is neither positive nor negative.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "The numbers 4 and −4 are opposites: they lie the same distance from zero, on opposite sides. Both have absolute value 4."
    },
    "<p>The <strong>opposite</strong> of a number $a$ is $-a$ (the opposite of 4 is $-4$, the opposite of $-7$ is 7). The <strong>absolute value</strong> $|a|$ is the distance of the number from zero: $|-6| = 6$, $|6| = 6$.\n       <strong>Comparing:</strong> on the number line, the number further to the right is bigger. So $-2 &gt; -5$, and every negative number is less than 0.</p>",
    "<p><strong>Adding and subtracting:</strong> adding a positive number means moving to the right on the number line, adding a negative number means moving to the left.\n       Subtracting a number is the same as adding its opposite: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $-8 + 3$.",
     "steps": [
      "We start at $-8$ and move 3 to the right.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "In the morning it was $-6\\,{}^\\circ\\mathrm{C}$, at noon $2\\,{}^\\circ\\mathrm{C}$. By how many degrees did it get warmer?",
     "steps": [
      "Difference: $2 - (-6) = 2 + 6 = 8$.",
      "<strong>It got 8 °C warmer.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "Angles and measuring angles",
   "summary": "Types of angles, the protractor, degrees and minutes, adjacent and vertically opposite angles, calculating with angles.",
   "theory": [
    "<p>An <strong>angle</strong> is formed by two rays (the <em>arms</em>) with a common starting point (the <em>vertex</em>). We measure the size of an angle in <strong>degrees</strong>;\n       one degree has 60 minutes: $1^\\circ = 60'$. We label angles with the Greek letters $\\alpha, \\beta, \\gamma$ or write $\\angle AVB$.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "An acute angle is less than 90°, a right angle is 90°, an obtuse angle is between 90° and 180°, a straight angle is 180°."
    },
    "<p><strong>Measuring with a protractor:</strong> we place the centre of the protractor on the vertex of the angle and the zero on one arm, and read off the scale where the other arm passes.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "A protractor placed on an angle of 50°."
    },
    "<p><strong>Adjacent angles on a straight line</strong> share one arm and their other arms form a straight line; their sum is $180^\\circ$.\n       <strong>Vertically opposite angles</strong> lie opposite each other where two lines cross, and they are equal.\n       When adding angles we add the degrees and the minutes separately; we exchange 60 minutes for 1 degree.</p>"
   ],
   "examples": [
    {
     "task": "The angle $\\alpha$ is $48^\\circ$. How big is the angle adjacent to it on a straight line?",
     "steps": [
      "Adjacent angles on a straight line add up to $180^\\circ$.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>The adjacent angle is 132°.</strong>"
     ]
    },
    {
     "task": "Add $35^\\circ\\,40' + 27^\\circ\\,35'$.",
     "steps": [
      "Degrees: $35 + 27 = 62$, minutes: $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$, so altogether $63^\\circ\\,15'$."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "Triangles and their properties",
   "summary": "The angle sum of a triangle, types of triangles by sides and by angles, the triangle inequality.",
   "theory": [
    "<p>A <strong>triangle</strong> $ABC$ has three vertices, three sides $a = |BC|$, $b = |AC|$, $c = |AB|$ and three interior angles $\\alpha, \\beta, \\gamma$.\n       The <strong>sum of the interior angles</strong> of every triangle is $\\alpha + \\beta + \\gamma = 180^\\circ$.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "At the top, classified by sides (the dashes mark equal sides); at the bottom, by angles."
    },
    "<p><strong>By sides:</strong> scalene (all sides different), isosceles (two sides – the legs – equal, the base angles are equal),\n       equilateral (all sides equal, each angle is $60^\\circ$).\n       <strong>By angles:</strong> acute (all angles acute), right-angled (one right angle), obtuse (one obtuse angle).</p>",
    "<p><strong>The triangle inequality:</strong> the sum of the lengths of any two sides is always greater than the length of the third side.\n       It is enough to check that the two shorter sides together are longer than the longest one. For example we cannot construct a triangle with sides 3 cm, 4 cm and 8 cm, because $3 + 4 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "In a triangle $\\alpha = 52^\\circ$ and $\\beta = 71^\\circ$. Work out $\\gamma$.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "Can a triangle with sides 5 cm, 6 cm and 10 cm be constructed?",
     "steps": [
      "The two shorter sides: $5 + 6 = 11$.",
      "$11 &gt; 10$, the inequality holds.",
      "<strong>Yes, it can.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "Perimeter and area of a square and a rectangle",
   "summary": "Formulas for perimeter and area, finding a missing side, units of area and converting them.",
   "theory": [
    "<p>The <strong>perimeter</strong> is the length of the boundary of a shape; we measure it in units of length (mm, cm, m). The <strong>area</strong> tells us how many squares\n       with side 1 unit fit into the shape; we measure it in units of area ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$).</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "A 5 cm × 3 cm rectangle holds 3 rows of 5 squares with an area of 1 cm² each, 15 cm² altogether."
    },
    "<p><strong>Rectangle</strong> with sides $a$, $b$: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       <strong>Square</strong> with side $a$: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       If we know the area and one side of a rectangle, we get the other side by dividing: $b = S : a$.</p>",
    "<p><strong>Units of area:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       For units of area the conversion factor is 100, not 10, because a square with side 1 cm contains $10\\cdot 10$ squares with side 1 mm.</p>"
   ],
   "examples": [
    {
     "task": "A garden is a 14 m × 9 m rectangle. How many metres of fencing are needed to fence it, and what is its area?",
     "steps": [
      "Perimeter: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "Area: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>46 m of fencing is needed; the garden has an area of 126 m².</strong>"
     ]
    },
    {
     "task": "A square has a perimeter of 36 cm. What is its area?",
     "steps": [
      "Side: $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "Reflection symmetry",
   "summary": "The image of a point and a shape in a reflection, symmetrical shapes and their lines of symmetry.",
   "theory": [
    "<p>A <strong>reflection</strong> in the line (mirror line) $o$ maps each point $A$ to its <em>image</em> $A'$ so that the line segment $AA'$ is perpendicular to the mirror line\n       and the mirror line cuts it in half. So the point $A$ and its image are the same distance from the line, each on a different side. Points on the line map onto themselves.</p>",
    {
     "fig": "r6-osova",
     "caption": "The blue shape and its image (green) in the line o. Point A is 4 squares to the left of the line, its image A′ is 4 squares to the right."
    },
    "<p>We construct the image of a shape by reflecting its vertices and joining them. The image has the same shape and size as the original; it is only “flipped over” as in a mirror.</p>",
    "<p>A shape is <strong>symmetrical</strong> if there is a line in which it reflects onto itself (if we fold the paper along it, the two halves match).\n       Such a line is called a <em>line of symmetry</em>. A square has 4 lines of symmetry, a rectangle 2, an equilateral triangle 3, an isosceles triangle 1 and a circle infinitely many.</p>"
   ],
   "examples": [
    {
     "task": "The line $o$ is a vertical line in column 6. Point $A$ lies in column 2. In which column does its image lie?",
     "steps": [
      "Point $A$ is $6 - 2 = 4$ columns away from the line.",
      "The image is 4 columns on the other side: $6 + 4 = 10$.",
      "<strong>The image lies in column 10.</strong>"
     ]
    },
    {
     "task": "How many lines of symmetry does a rectangle that is not a square have?",
     "steps": [
      "A line of symmetry passes through the midpoints of two opposite sides – there are two such lines.",
      "A diagonal is not a line of symmetry: after folding, the halves do not match.",
      "<strong>2 lines.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, so we divide by a hundred: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, so ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$, so ${@0}^\\circ = {@1}'$ and altogether ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$, so $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$, so the triangle can be constructed.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$, so the triangle cannot be constructed.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ (a move of {@3} to the right).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ (a move of {@3} to the left).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, remainder {@2}. So ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ and ${@2} = {@3}$ have no common prime factor, $D({@4}, {@5}) = 1$. They are coprime.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. The GCD is the product of the common prime factors: $D({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$, so apart from 1 and {@3} it also has the divisor {@4}. It is a composite number.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. In the evening it was {@4} °C.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$ and $|{@2}| = {@3}$, so the sum is ${@4} + {@5} = {@6}$.",
  "4 dieliky": "4 units",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "Absolute value is the distance from zero, so it is never negative.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "Absolute value is never negative. First work out how far each number is from zero, and only then add.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "If there are 60 or more minutes, swap 60 minutes for 1 degree.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "If the sum of the two shorter sides equals the longest side, the sides would lie on one straight line and no triangle is formed.",
  "Aká dlhá je strana štvorca (v cm)?": "How long is the side of the square (in cm)?",
  "Aké je číslo opačné k číslu {@0}?": "What is the opposite number of {@0}?",
  "Aké je číslo {@0}?": "What is the number {@0}?",
  "Aký bude čitateľ rozšíreného zlomku?": "What will the numerator of the expanded fraction be?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "What is the least common multiple of {@0} and {@1}?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "What is the greatest common divisor of {@0} and {@1}?",
  "Aký je obsah štvorca (v cm²)?": "What is the area of the square (in cm²)?",
  "Aký je obvod (v {@0})?": "What is the perimeter (in {@0})?",
  "Aký je obvod štvorca (v cm)?": "What is the perimeter of the square (in cm)?",
  "Aký je súčet dvoch susedných strán?": "What is the sum of two neighbouring sides?",
  "Aký je súčet známych číslic?": "What is the sum of the known digits?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "What kind of angle measures ${@0}^\\circ$?",
  "Aký veľký je jeden uhol pri základni?": "How big is one base angle?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "What number do you need to expand the fraction $\\frac{{@0}}{{@1}}$ by so that the denominator is {@2}?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "Point $A$ is $|{@0} - {@1}| = {@2}$ {@3} away from the line. The image is the same distance away on the other side of the line: ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "You cannot multiply the whole part and the decimal part separately – tenths spill over into whole numbers. Multiply the numbers without the decimal point and then place the point.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "The digit sum is {@0}, which is divisible by 3.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "The digit sum is {@0}, which is divisible by 9.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "The digit sum is {@0}, which is not divisible by 3.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "The digit sum is {@0}, which is not divisible by 9.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "The divisors of {@0} are {@1}. There are {@2} of them.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "Every number has the divisor 1. Numbers are not coprime if they have a common divisor greater than 1.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "We divide as with whole numbers and write the decimal point in the quotient when we pass it in the dividend: ${@0} : {@1} = {@2}$. Check: ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "We keep dividing by prime numbers: ${@0}$. So ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "The decimal points must be lined up. Fill in the missing places with zeros.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "Divide step by step, starting from the highest place. When you pass the decimal point of the dividend, write a decimal point in the result too.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "Divide the number by the smallest prime number that goes into it (2, 3, 5, 7, …) and carry on with the quotient until you get 1.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "Fill in the correct sign: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "Work out the third angle and look at the largest of them.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "Types of triangles by sides and by angles",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "The two shorter sides: ${@0} + {@1} = {@2}$, the longest is {@3}.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "Two sides are the same length, so the triangle is isosceles.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "Two ribbons are {@0} cm and {@1} cm long. We want to cut them, with nothing left over, into pieces of equal length that are as long as possible (in whole centimetres). How many centimetres long will one piece be?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "Can a triangle with sides {@0} cm, {@1} cm and {@2} cm be constructed?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "The length of a piece must be a divisor of both lengths. Which common divisor is the greatest?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "The length of a piece must divide both {@0} and {@1} and be as large as possible, so we are looking for $D({@2}, {@3})$.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "Look for pairs of numbers whose product is the given number: 1 and the number itself, then 2 and …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "We are looking for the least common multiple: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. The buses will leave together again in {@8} minutes, so at {@9}:{@10}.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "We look for the number that gives {@0} when multiplied by itself: $a = {@1}\\,\\text{cm}$. Perimeter: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "Only an equilateral triangle has 3 lines of symmetry. An isosceles triangle has only two equal sides.",
  "Je menší ako 90°, preto je ostrý.": "It is less than 90°, so it is acute.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "It is even and its digit sum {@0} is divisible by 3.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "It is even, but its digit sum {@0} is not divisible by 3.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "Is the capital letter <strong style=\"font-size:1.6em\">{@0}</strong> (in a simple form without serifs) symmetrical about a line?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "It is greater than 90° and less than 180°, so it is obtuse.",
  "Je číslo {@0} deliteľné číslom {@1}?": "Is {@0} divisible by {@1}?",
  "Jeden kúsok bude merať {@0} cm.": "One piece will be {@0} cm long.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "One degree has 60 minutes, not 100 – divide the number of minutes by sixty.",
  "Jeden stupeň má 60 minút, nie 100.": "One degree has 60 minutes, not 100.",
  "Jeden stupeň má 60 minút.": "One degree has 60 minutes.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "Check: GCD · LCM = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "A parallelogram has no lines of symmetry. When you fold it along any line, it does not match up with itself.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "A rhombus has 2 lines of symmetry: both of its diagonals.",
  "Koľko celých stupňov je v ${@0}'$?": "How many whole degrees are there in ${@0}'$?",
  "Koľko deliteľov má číslo {@0}?": "How many divisors does {@0} have?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "How many decimal places do the factors ${@0}$ and ${@1}$ have altogether?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "What is $\\frac{1}{{@0}}$ of {@1}?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "What is $\\frac{{@0}}{{@1}}$ of {@2}?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "What is half the perimeter, i.e. $a + b$ (in cm)?",
  "Koľko minút je ${@0}$?": "How many minutes is ${@0}$?",
  "Koľko minút je ${@0}^\\circ$?": "How many minutes are there in ${@0}^\\circ$?",
  "Koľko minút zostane?": "How many minutes are left over?",
  "Koľko osí súmernosti má {@0}?": "How many lines of symmetry does the {@0} have?",
  "Koľko riadkov je bod A vzdialený od osi?": "How many rows is point A away from the line?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "How many degrees do the two base angles have together?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "How many degrees do the angles $\\alpha$ and $\\beta$ have together?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "How many degrees are left after subtracting (don't forget the borrowed degree)?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "How many degrees are missing to reach the angle sum of a triangle?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "How many columns is point A away from the line?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "How many times does 60 go into the number of minutes?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "A circle has infinitely many lines of symmetry: every straight line that passes through its centre.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "Circles divided into parts: one half, three quarters, three eighths",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "You simplified correctly, but the fraction is not in its simplest form yet – the numerator and denominator can still be divided by a common number.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "Which digit is in the number ${@0}$ just after the {@1} place?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "Which number times itself gives the area? That is the side.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "Which number multiplied by itself gives {@0}?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "What is the smallest digit you need to write in place of $\\square$ so that the number ${@0}$ is divisible by {@1}?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "What is the smallest digit you need to add to {@0} so that the sum is divisible by {@1}?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "Pieces of this length could be cut with nothing left over, but they are not the longest possible.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "Neighbouring units of area differ by a factor of 100.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "Measuring an angle with a protractor: an angle of 50 degrees",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "There are not enough minutes, so we swap 1 degree: ${@0} = {@1}$. Then ${@2} - {@3} = {@4}$ and ${@5} - {@6} = {@7}$, and the result is ${@8}$.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "There are not enough minutes, so swap 1 degree for 60 minutes. How many minutes will the first angle have then?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "There cannot be 60 or more minutes. Swap 60 minutes for 1 degree.",
  "Má 180°, ramená tvoria priamku, je priamy.": "It measures 180°, its arms form a straight line, so it is a straight angle.",
  "Má presne 90°, je pravý.": "It measures exactly 90°, so it is a right angle.",
  "NSD; nsn": "GCD; LCM",
  "Na deliteľnosť 6 treba oboje.": "For divisibility by 6 you need both.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "On the number line the greater number is further to the right. Every negative number is less than zero and less than every positive number.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "On the number line {@0} lies further to the right, so it is greater. Therefore ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "The lowest night-time temperature was {@0} °C, the highest daytime temperature {@1} °C. How many degrees warmer was it during the day?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "First one part: ${@0} : {@1} = {@2}$. Then {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "First work out the side from the perimeter (a square has 4 equal sides).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "The greatest common divisor of {@0} and {@1} is {@2}. We simplify by it: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "Don't forget that 1 and the number {@0} itself are always divisors too.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "It is not even, but its digit sum {@0} is divisible by 3.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "It is not even and its digit sum {@0} is not divisible by 3.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "No. The letter {@0} has neither a vertical nor a horizontal line of symmetry; when folded, the halves do not match.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "Find the greatest number that divides both the numerator and the denominator.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "We multiply without the decimal points: ${@0}\\cdot {@1} = {@2}$. The factors have {@3} {@4} altogether, so ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "How many degrees warmer was it during the day?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "By how many degrees does the temperature rise from 0 °C to {@0} °C?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "By how many degrees does the temperature rise from {@0} °C to 0 °C?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "A rectangle (that is not a square) has 2 lines of symmetry, which join the midpoints of opposite sides. The diagonals are not lines of symmetry.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "A 5 cm by 3 cm rectangle divided into 1 cm² squares",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "A rectangle has an area of ${@0}\\,\\text{cm}^2$ and one side of ${@1}\\,\\text{cm}$. How long is the other side (in cm)?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "A rectangle has sides $a = {@0}\\,\\text{cm}$ and $b = {@1}\\,\\text{cm}$. Work out its area in cm².",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "A rectangle has sides $a = {@0}\\,\\text{cm}$ and $b = {@1}\\,\\text{cm}$. Work out its perimeter in cm.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "Both numbers are divisible by {@0}, so $D({@1}, {@2}) = {@3} &gt; 1$. They are not coprime.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "The area is the product of the sides, so you get the other side by dividing.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "The area is the product of the sides, so you get the other side by dividing, not by subtracting.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "You don't divide the area by four as you do with the perimeter. The side is the number that gives the area when multiplied by itself.",
  "Obsah obdĺžnika: S = a · b.": "Area of a rectangle: S = a · b.",
  "Obsah štvorca je strana krát strana.": "The area of a square is side times side.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "The perimeter is not the side of the square. First divide it by four – that gives you the side.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "Perimeter of a rectangle: o = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "Getting colder means subtracting.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "You subtracted both sides of length a from the perimeter. You are left with two sides b – now divide the result by two.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "You are subtracting the negative temperature {@1} °C from the temperature {@0} °C. Subtracting a negative number means adding its opposite.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "Subtract the lower temperature from the higher one. Subtracting a negative number means adding its opposite.",
  "Odčítaj minúty.": "Subtract the minutes.",
  "Odčítaj stupne.": "Subtract the degrees.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "You are subtracting a positive number – on the number line you move to the left.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "Subtracting a negative number means adding the opposite number: minus and minus make plus.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "Subtracting a negative number means adding its opposite: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "Subtracting a number is the same as adding its opposite. Use the number line to help you.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "Besides the lines through the midpoints of opposite sides, the diagonals of a square are also lines of symmetry.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "The opposite number lies the same distance from zero on the line, but on the other side: for {@0} it is {@1}.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "The opposite number is the same distance from zero, but has the opposite sign.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "The line of symmetry $o$ (dashed line) is a horizontal line in row {@0}. Point $A$ is in row {@1}. Which row is its image $A'$ in?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "The line of symmetry $o$ (dashed line) is a vertical line in column {@0}. Point $A$ is in column {@1}. Which column is its image $A'$ in?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "A line of symmetry passes through every vertex of an equilateral triangle, not just one.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "An acute-angled triangle has all three angles less than 90°. Don't forget to work out the third angle as well.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "An acute angle is smaller than a right angle, so it is less than 90°.",
  "Ostrý, pravý, tupý a priamy uhol": "Acute, right, obtuse and straight angles",
  "Oteplenie znamená pripočítať.": "Getting warmer means adding.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "Check the triangle inequality: the sum of the two shorter sides must be greater than the longest side.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "Half the perimeter is $a + b = {@0} : 2 = {@1}$, so $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "Half the perimeter is the sum of two neighbouring sides.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "Compare the angle with a right angle (90°, the corner of an exercise book) and with a straight angle (180°).",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "The last digit is {@0}, which is 0 or 5.",
  "Posledná číslica je {@0}, je to 0.": "The last digit is {@0}, which is 0.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "The last digit is {@0}, which is neither 0 nor 5.",
  "Posledná číslica je {@0}, nie je to 0.": "The last digit is {@0}, which is not 0.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "You moved the decimal point the wrong way. When you divide by {@0}, the number gets smaller.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "You moved the decimal point the wrong way. When you multiply by {@0}, the number gets bigger.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "Use the divisibility rule for the given number (last digit, digit sum or last two digits).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Look at the first digit after the place you are rounding to: 0 – 4 round down, 5 – 9 round up.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "Look carefully – both numbers are the same.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "Check whether all three sides are the same length – such a triangle has a more precise name.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "The number of zeros in 10, 100 or 1 000 tells you how many places the decimal point moves.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "Work out the degrees and the minutes separately. 60 minutes make 1 degree.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "You borrowed 1 degree for the minutes, but you didn't take it away from the degrees.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "A right-angled triangle has one angle of exactly 90°. Work out the third angle and check.",
  "Pravý uhol má presne 90° – ako roh zošita.": "A right angle measures exactly 90° – like the corner of an exercise book.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "Imagine a mirror placed vertically or horizontally through the middle of the letter.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "Imagine folding the shape along a line. In how many ways do the two halves match exactly?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "Convert: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "So no, {@0} is not divisible by {@1}.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "So yes, {@0} is divisible by {@1}.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "Convert both fractions to a common denominator and compare the numerators.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "When dividing by {@0}, we move the decimal point {@1} {@2} to the left: {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "For divisibility by 10 the last digit decides – it must be 0.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "For divisibility by 2 only the last digit decides – it must be even.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "For divisibility by 3 it is not the last digit that decides, but the digit sum. Add up all the digits.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "For divisibility by 4 it is not enough for the number to be even. The number formed by the last two digits decides.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "For divisibility by 5 the last digit decides – it must be 0 or 5.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "For divisibility by 9 the digit sum decides – it must be divisible by 9; divisibility by 3 is not enough.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "When multiplying by {@0}, we move the decimal point {@1} {@2} to the right: {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "For units of area the conversion factor is not 10, but $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "For units of area the conversion factor is not 10, but $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "When borrowing, you swap 1 degree for 60 minutes, not 100.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "With negative numbers, the greater one is the one closer to zero. It doesn't matter which has the bigger digit.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "A straight angle measures 180°; its arms lie on one straight line.",
  "Pripočítaj ešte ${@0}'$.": "Now add ${@0}'$.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "You are adding a positive number – on the number line you move to the right.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "Adding a negative number means subtracting: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "Adding a negative number means moving to the left on the number line, i.e. subtracting.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "A prime number has only two divisors. Try whether {@0} can be divided exactly by any of the numbers 2, 3, 5, 7.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "A prime number has exactly two divisors and a composite number more than two. How many divisors does the number 1 have?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "An isosceles triangle (not equilateral) has 1 line of symmetry: it passes through the apex and the midpoint of the base.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "An isosceles triangle has two sides of the same length.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "An equilateral triangle has 3 lines of symmetry; each passes through a vertex and the midpoint of the opposite side.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "An equilateral triangle has all three sides the same length.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "Temperature difference: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. It was {@5} °C warmer during the day.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "The digit just after this place decides; it is {@0}. It is 5 or more, so we round up: ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "The digit just after this place decides; it is {@0}. It is less than 5, so we round down: ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "The factorisation is not finished: {@0} is not a prime number. Keep dividing by prime numbers.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "Write both numbers as products of prime factors. The GCD is made of the common prime factors, the LCM of all of them (each as many times as it appears most often).",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "Write the numbers {@0} and {@1} as products of prime factors. What is their greatest common divisor?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "Write the number {@0} as a product of prime numbers. Write the prime factors from the smallest, separated by semicolons (including repeated ones).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "We expand to the denominator {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Or we divide ${@6} : {@7}$.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "In the morning it was {@0} °C. By the evening it had got colder by {@1} °C. What was the temperature in the evening (in °C)?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "In the morning it was {@0} °C. By the evening it had got warmer by {@1} °C. What was the temperature in the evening (in °C)?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "A scalene triangle has all three sides of different lengths. Compare the lengths again.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "A scalene triangle has no line of symmetry; no two of its sides are the same length.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "With this digit the number really will be divisible, but you are looking for the smallest such digit.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "Simplify the fraction $\\frac{{@0}}{{@1}}$ to its simplest form. Write the answer as a/b.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "Try to find a common divisor greater than 1 – for example, check whether both numbers are divisible by 2, 3, 5 or 7.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "Try whether the number can be divided exactly by 2, 3, 5 or 7.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "The common denominator is {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ and $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Since ${@9} {@10} {@11}$, we have $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Count how many rows point A is from the line, and count the same number on the other side.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "Count how many sides have the same length.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "Count how many columns point A is from the line, and count the same number on the other side.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "Side: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Area: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "You multiplied the side by two. The area of a square is side times side, not side times 2.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "You added the sides. The area of a rectangle is the product of the lengths of its sides.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "Factor trees of the numbers 60 and 84",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "Degrees: ${@0} + {@1} = {@2}$, minutes: ${@3} + {@4} = {@5}$. Since ${@6}' = 1^\\circ\\,{@7}'$, the result is ${@8}$.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "Degrees: ${@0} + {@1} = {@2}$, minutes: ${@3} + {@4} = {@5}$. The result is ${@6}$.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "Degrees: ${@0} - {@1} = {@2}$, minutes: ${@3} - {@4} = {@5}$. The result is ${@6}$.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "Are the numbers {@0} and {@1} coprime or not coprime?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "The sum equals the longest side, so the sides would lie on one straight line. The triangle cannot be constructed.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "The angle sum is $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "The angles in a triangle add up to 180°, not 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "The interior angles of a triangle add up to 180°, not 360°.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "The interior angles of a triangle add up to 180°.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "The sum of the known digits is {@0}. The digit sum must be divisible by {@1}: the smallest suitable digit is {@2}, because ${@3} + {@4} = {@5}$.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "The product {@0}·{@1} is a common multiple, but not the least one. The buses meet sooner.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "The product {@0}·{@1} is a common multiple, but not the least one. For the LCM, take each prime factor only as many times as it appears in the number where it appears most often.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "Add the two shorter sides and compare their sum with the longest side. It is enough for the sum to be greater.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "Add the two shorter sides and compare with the longest side. The sum must be greater.",
  "Sčítaj minúty.": "Add the minutes.",
  "Sčítaj stupne.": "Add the degrees.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "Add up the known digits. Add the smallest possible digit to the sum so that the sum is divisible by {@0}.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "You added only two sides. A rectangle has four sides – now multiply the sum of the neighbouring sides by two.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "This makes the digit sum divisible by 3, but for divisibility by 9 it must be divisible by 9.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "That is the size of the adjacent angle. Vertically opposite angles lie opposite each other and are equal.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "This is the least common multiple. A piece must be shorter than the ribbons – you are looking for the greatest common divisor.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "This is the greatest common divisor. The time when they leave together must be a multiple of both intervals – you are looking for the least common multiple.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "This is the perimeter of the square. Work out the area as side times side.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "This is the perimeter. Work out the area of a rectangle as the product of the lengths of its sides.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "This is the side of the square. Now use it to work out the area.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "This is the side of the square. Now use it to work out the perimeter.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "This is the distance of point A from the line. The image lies the same distance away on the other side of the line – find its number.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "This is how many degrees the two base angles have together. They are equal, so now halve the result.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "Third angle: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. The largest angle measures ${@3}^\\circ$, it is a right angle, so the triangle is right-angled.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "Third angle: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. The largest angle measures ${@3}^\\circ$, it is obtuse, so the triangle is obtuse-angled.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "Third angle: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. The largest angle measures ${@3}^\\circ$, all the angles are acute, so the triangle is acute-angled.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "A triangle has two interior angles of ${@0}^\\circ$ and ${@1}^\\circ$. What type of triangle is it by its angles?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "A triangle has sides {@0} cm, {@1} cm and {@2} cm. What type is it by its sides?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "An obtuse-angled triangle has one angle greater than 90°. Work out the third angle and check.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "An obtuse angle is greater than 90° and at the same time less than 180°.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "Only the number 1 has this property. Every larger natural number is either a prime number or a composite number.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "The diagonals of a rectangle are not lines of symmetry – when you fold along a diagonal, the halves do not match.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "The base angles of an isosceles triangle are equal and all three angles add up to 180°.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "The base angles are equal: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "The angle $\\alpha$ measures ${@0}^\\circ$. How big is the angle adjacent to it on a straight line (in degrees)?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "The angle $\\alpha$ measures ${@0}^\\circ$. How big is the angle vertically opposite to it (in degrees)?",
  "Uhol má {@0}°.": "The angle measures {@0}°.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "Place the decimal point: what is ${@0}\\cdot {@1}$?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "Find the greatest common divisor and the least common multiple of {@0} and {@1}. Write them in the order GCD; LCM.",
  "V ktorom riadku leží obraz $A'$?": "Which row is the image $A'$ in?",
  "V ktorom stĺpci leží obraz $A'$?": "Which column is the image $A'$ in?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "In an isosceles triangle, the angle opposite the base (at the apex) measures ${@0}^\\circ$. How big is each of the base angles?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "In triangle $ABC$, $\\alpha = {@0}^\\circ$ and $\\beta = {@1}^\\circ$. How big is the angle $\\gamma$ (in degrees)?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "Adjacent angles on a straight line make a straight angle together; vertically opposite angles are equal.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "Adjacent angles on a straight line add up to $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "Adjacent angles on a straight line don't make up a right angle, but a straight angle (180°).",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "Adjacent angles on a straight line together form a straight angle, i.e. 180°, not 360°.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "Vertically opposite angles are equal, so it also measures ${@0}^\\circ$.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "Divide the number of minutes by 60. The quotient is the degrees, the remainder is the minutes.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "Divide both the numerator and the denominator by {@0}. What fraction do you get (a/b)?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "Write ${@0}'$ in degrees and minutes. Write it in the form degrees; minutes.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "Multiply the prime factors that appear in both factorisations.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "Multiply the numbers without the decimal points and then count the decimal places of both factors.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "Multiply the numbers without the decimal points: ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "You multiplied the sides – that is the area. The perimeter is the sum of the lengths of all four sides.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "Work out ${@0} {@1} {@2}$. Write the result in the form degrees; minutes.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "Work out ${@0}\\cdot {@1}$.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "Work out $|{@0}| + |{@1}|$.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "You worked out only one part. Now multiply it by the numerator {@0}.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "The greater number is the one further to the right on the number line. Careful: −2 is greater than −9.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "All the sides are the same length, so the triangle is equilateral.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "All three sides have different lengths, so the triangle is scalene.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "From the bus station, bus A leaves every {@0} minutes and bus B every {@1} minutes. At 7:00 both buses left together. How many minutes later will they leave together again?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "To convert from a smaller unit to a larger one, we divide by 100.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "The digit after this place is {@0}. Round ${@1}$ to {@2}.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "You mixed up the numerator and the denominator: divide the number by the denominator and multiply the result by the numerator.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "You rounded to a different place. Rounding to {@0} means that the last digit you keep is in the {@1} place.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Write $\\frac{{@0}}{{@1}}$ as a decimal.",
  "Zapíš výsledok v poradí NSD; nsn.": "Write the result in the order GCD; LCM.",
  "Zapíš výsledok v tvare stupne; minúty.": "Write the result in the form degrees; minutes.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "Write the fraction $\\frac{{@0}}{{@1}}$ as a decimal.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "You lined the numbers up from the right like whole numbers. The decimal points must be lined up – write the number {@0} as {@1}0.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "We line up the decimal points and fill in zeros: ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "Find out whether there is a number greater than 1 that divides both numbers.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "A fraction bar is not a decimal point. A fraction means division: divide the numerator by the denominator.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "The fractions are not equal. Convert them to a common denominator and compare the numerators.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "You cannot compare fractions with different denominators just by their numerators or just by their denominators. Convert them to a common denominator.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "Expand the fraction so that the denominator is 10, 100 or 1 000, or divide the numerator by the denominator.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "A composite number has a divisor other than 1 and itself. Try to find such a divisor of {@0} – if there is none, the number is not composite.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "You reflected the point in the centre of the grid, not in the line o.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "A garden is a rectangle measuring {@0} m by {@1} m. What is the area of the garden in m²?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "A garden is a rectangle measuring {@0} m by {@1} m. How many metres of fencing are needed to fence it?",
  "ani prvočíslo, ani zložené": "neither prime nor composite",
  "desatinné miesta": "decimal places",
  "desatinné miesto": "decimal place",
  "desatinných miest": "decimal places",
  "desatín": "tenths",
  "jednotky (celé čísla)": "ones (whole numbers)",
  "kladné": "positive",
  "kosodĺžnik (rovnobežník)": "parallelogram (rhomboid)",
  "kosoštvorec": "rhombus",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "small divisions are hundredths (0.01), large ones are tenths (0.1)",
  "miesta": "places",
  "miesto": "place",
  "napr. 2/3": "e.g. 2/3",
  "napr. 2; 2; 3": "e.g. 2; 2; 3",
  "nekonečne veľa": "infinitely many",
  "nesúdeliteľné": "coprime",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "the LCM contains all the prime factors: $n({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "acute-angled",
  "ostrý (30°)": "acute (30°)",
  "podľa strán": "by sides",
  "podľa uhlov": "by angles",
  "pravouhlý": "right-angled",
  "pravý (90°)": "right (90°)",
  "priamy": "straight",
  "priamy (180°)": "straight (180°)",
  "prvočíslo": "prime number",
  "riadkov": "rows",
  "rovnoramenný": "isosceles",
  "rovnoramenný trojuholník": "isosceles triangle",
  "rovnostranný": "equilateral",
  "rovnostranný trojuholník": "equilateral triangle",
  "rôznostranný": "scalene",
  "rôznostranný trojuholník": "scalene triangle",
  "stotiny": "hundredths",
  "stotín": "hundredths",
  "stred uhlomera = vrchol uhla": "centre of the protractor = vertex of the angle",
  "stupne; minúty": "degrees; minutes",
  "stĺpce": "columns",
  "stĺpcov": "columns",
  "stĺpec": "column",
  "súdeliteľné": "not coprime",
  "tupouhlý": "obtuse-angled",
  "tupý (135°)": "obtuse (135°)",
  "zložené číslo": "composite number",
  "záporné": "negative",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "Yes. The letter {@0} has a horizontal line of symmetry.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "Yes. The letter {@0} has both a vertical and a horizontal line of symmetry.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "Yes. The letter {@0} has a vertical line of symmetry.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "A shape and its image in a reflection on a squared grid",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "The time when they leave together must be a multiple of both intervals. Look for the smallest such number.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "Number line from 2 to 3 with tenths and hundredths",
  "Číselná os s celými číslami od −6 do 6": "Number line with whole numbers from −6 to 6",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "The numbers are not equal. Find out which of them lies further to the right on the number line.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "Numbers from 1 to 60 with the prime numbers coloured in",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "The digit after this place is {@0}, which is 5 or more – so you round up.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "The digit after this place is {@0}, which is less than 5 – so you round down.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "The number 1 has only one divisor (itself), so it is neither a prime number nor a composite number.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "A number is divisible by 6 only if it is divisible by both 2 and 3. Check both conditions.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Divide the number by the denominator and multiply the result by the numerator.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "The number formed by the last two digits is {@0}, which is divisible by 4.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "The number formed by the last two digits is {@0}, which is not divisible by 4.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "The number {@0} has only two divisors: 1 and {@1}. It is a prime number.",
  "časti": "parts",
  "častí": "parts",
  "časť": "part",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "A square has 4 lines of symmetry: 2 join the midpoints of opposite sides and 2 lie on the diagonals.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "A square has an area of ${@0}\\,\\text{cm}^2$. What is its perimeter in cm?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "A square has a perimeter of ${@0}\\,\\text{cm}$. What is its area in cm²?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "A square has a side of ${@0}\\,\\text{cm}$. What is its area in cm²?",
  "štvorčeková sieť s osou a bodom A": "squared grid with a line and point A"
 }
});
