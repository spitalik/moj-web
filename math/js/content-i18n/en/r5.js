/* English: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/r5/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "r5-prirodzene": {
   "title": "Natural numbers and their properties",
   "summary": "Periods and places of large numbers, comparing, even and odd numbers.",
   "theory": [
    "<p><strong>Natural numbers</strong> are $1, 2, 3, 4, \\dots$ – the numbers we use to count objects. The smallest natural number\n       is 1, there is no largest one: we can add 1 to any number and get its <strong>successor</strong>.\n       The number that is 1 less is its <strong>predecessor</strong>.</p>",
    "<p>We split the digits of a large number from the right into <strong>periods</strong> of three: ones, thousands, millions.\n       Each period has hundreds, tens and ones. The value of a digit depends on the place where it stands.</p>",
    {
     "fig": "r5-triedy",
     "caption": "In the number $3\\,042\\,705$ the digit 4 has the value $40\\,000$, because it stands in the ten thousands place."
    },
    "<p><strong>Even numbers</strong> are divisible by two and end in the digit 0, 2, 4, 6 or 8. The other numbers are\n       <strong>odd</strong> – they end in the digit 1, 3, 5, 7 or 9. Only the last digit decides whether a number is even or odd.</p>"
   ],
   "examples": [
    {
     "task": "From the digits 5, 0, 8, 2 (use each once) make the largest and the smallest four-digit number.",
     "steps": [
      "Largest: we order the digits from the largest: $8\\,520$.",
      "Smallest: we order them from the smallest, but 0 cannot be at the start: $2\\,058$."
     ]
    },
    {
     "task": "What are the successor and the predecessor of the number $499\\,999$?",
     "steps": [
      "Successor: $499\\,999 + 1 = 500\\,000$.",
      "Predecessor: $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "Rounding numbers",
   "summary": "Rounding to tens, hundreds and thousands, estimating the result.",
   "theory": [
    "<p>When <strong>rounding</strong> we replace a number with the nearest “round” number. We write it with the sign $\\doteq$\n       (read “is approximately equal to”): $3\\,467 \\doteq 3\\,470$ (to the nearest ten).</p>",
    "<p><strong>Rule:</strong> we look at the digit <em>just to the right</em> of the place we are rounding to.\n       If it is 0, 1, 2, 3 or 4, we round <strong>down</strong>. If it is 5, 6, 7, 8 or 9, we round <strong>up</strong>.\n       We replace the digits to the right with zeros.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "Move the number and watch which ten (green dot) and which hundred (arc) it is closest to."
    },
    "<p><strong>Estimating:</strong> before calculating exactly, we can round the numbers and estimate the result.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. An estimate helps us spot a mistake in the calculation.</p>"
   ],
   "examples": [
    {
     "task": "Round the number $72\\,649$ to the nearest hundred.",
     "steps": [
      "The hundreds digit is 6, the digit just to the right is 4.",
      "4 is less than 5, so we round down: the hundreds stay 6.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "Round the number $5\\,962$ to the nearest ten.",
     "steps": [
      "The tens digit is 6, to the right is 2 – we round down.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "To the nearest hundred it would be $6\\,000$, because the digit after the hundreds is 6."
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "Roman numerals",
   "summary": "Writing large numbers and years, the subtraction rules, converting both ways.",
   "theory": [
    "<p>Roman numerals: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. The largest number we usually write with them is $3\\,999 = \\text{MMMCMXCIX}$.</p>",
    "<p><strong>Rules for writing:</strong></p>\n       <ol><li>We write the symbols from the largest to the smallest and add their values: $\\text{MDCLX} = 1\\,660$.</li>\n       <li>The symbols I, X, C, M can appear in a row at most three times. V, L, D are never repeated.</li>\n       <li>A smaller symbol before a bigger one is subtracted. This can only be I, X or C, and only before the two nearest bigger symbols.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "The six pairs in which we subtract. Other pairs (for example IL or IC) are wrong."
    },
    "<p>We <strong>convert to Roman numerals</strong> place by place: thousands, hundreds, tens, ones.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "Write the year $2\\,026$ in Roman numerals.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "Which number is $\\text{CDXLIX}$?",
     "steps": [
      "We split it into groups: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "Careful: 49 is not IL, but XLIX.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "Arithmetic operations and the order of operations",
   "summary": "Addition, subtraction, multiplication, division, brackets and clever calculating.",
   "theory": [
    "<p>When evaluating an expression we follow the <strong>order of operations</strong>: first we work out the brackets, then multiplication and division\n       (from left to right) and finally addition and subtraction (from left to right).</p>",
    {
     "fig": "r5-poradie",
     "caption": "The order of operations. Operations on the same level are done from left to right."
    },
    "<p><strong>Clever calculating:</strong> when adding and multiplying we can swap the numbers and group them differently:\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       Expanding a bracket also helps: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>Names:</strong> addend + addend = sum, minuend − subtrahend = difference, factor · factor = product,\n       dividend : divisor = quotient. We find an unknown term with the inverse operation: if $\\square\\cdot 8 = 96$, then $\\square = 96 : 8 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $120 - 6\\cdot(14 - 5)$.",
     "steps": [
      "Brackets: $14 - 5 = 9$.",
      "Multiplication: $6\\cdot 9 = 54$.",
      "Subtraction: $120 - 54 = 66$.",
      "<strong>Result: 66</strong>"
     ]
    },
    {
     "task": "Work out $5\\cdot 63\\cdot 20$ the clever way.",
     "steps": [
      "We combine $5\\cdot 20 = 100$.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>Result: $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "Multiples and factors",
   "summary": "What a multiple and a factor of a number are, how to find them, and the divisibility rules for 2, 3, 5 and 10.",
   "theory": [
    "<p>We get the <strong>multiples</strong> of a number by multiplying it by $1, 2, 3, \\dots$. The multiples of 6 are\n       $6, 12, 18, 24, \\dots$ – there are infinitely many of them.</p>",
    "<p>A <strong>factor</strong> (divisor) of a number is a number that divides it without a remainder. The factors of 12 are $1, 2, 3, 4, 6, 12$.\n       We look for them in pairs: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. The number 1 and the number itself are always factors.</p>",
    {
     "fig": "r5-delitele",
     "caption": "We can arrange 12 dots into the rectangles $1\\cdot 12$, $2\\cdot 6$ and $3\\cdot 4$. The dimensions are the factors of 12."
    },
    "<p><strong>Divisibility rules:</strong> a number is divisible by <strong>2</strong> if it ends in the digit 0, 2, 4, 6, 8;\n       by <strong>5</strong> if it ends in 0 or 5; by <strong>10</strong> if it ends in 0; by <strong>3</strong> if its\n       digit sum (the sum of its digits) is divisible by three.</p>"
   ],
   "examples": [
    {
     "task": "Find all the factors of 18.",
     "steps": [
      "We look for pairs: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4 and 5 are not factors; after that the pairs repeat.",
      "<strong>Factors: 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "Is the number $4\\,215$ divisible by three?",
     "steps": [
      "Digit sum: $4 + 2 + 1 + 5 = 12$.",
      "12 is divisible by three.",
      "<strong>Yes, $4\\,215$ is divisible by three.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "Fractions – the basic ideas",
   "summary": "Part of a whole, numerator and denominator, a fraction of a number, comparing fractions.",
   "theory": [
    "<p>When we divide a whole into <strong>equal</strong> parts, one part is a fraction of it: a half $\\frac{1}{2}$,\n       a third $\\frac{1}{3}$, a quarter $\\frac{1}{4}$… The fraction $\\frac{3}{8}$ means: we divide the whole into 8 equal parts and take 3.</p>",
    "<p>The number below the fraction bar is the <strong>denominator</strong> – it tells us how many parts we divided the whole into.\n       The number above the bar is the <strong>numerator</strong> – it tells us how many parts we take.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "The fractions $\\frac{1}{2}$, $\\frac{1}{4}$ and $\\frac{3}{8}$ of a cake and $\\frac{2}{5}$ of a strip."
    },
    "<p><strong>A fraction of a number:</strong> we work out $\\frac{3}{4}$ of 20 by dividing 20 by the denominator ($20 : 4 = 5$, that is one quarter)\n       and multiplying by the numerator ($5\\cdot 3 = 15$).<br>\n       <strong>Comparing:</strong> with the same denominator, the fraction with the bigger numerator is bigger: $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       With the same numerator, the fraction with the smaller denominator is bigger: $\\frac{1}{3} &gt; \\frac{1}{5}$ (a third is a bigger piece than a fifth).</p>"
   ],
   "examples": [
    {
     "task": "What is $\\frac{2}{5}$ of 35?",
     "steps": [
      "One fifth: $35 : 5 = 7$.",
      "Two fifths: $7\\cdot 2 = 14$.",
      "<strong>$\\frac{2}{5}$ of 35 is 14.</strong>"
     ]
    },
    {
     "task": "A third of a journey is 4 km. How long is the whole journey?",
     "steps": [
      "The whole journey is 3 thirds.",
      "$3\\cdot 4 = 12$.",
      "<strong>The whole journey is 12 km.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "Basic geometric figures",
   "summary": "Point, line, ray, line segment, circle and disc.",
   "theory": [
    "<p>We label a <strong>point</strong> with a capital letter (A, B, S). Through two different points there passes exactly one <strong>line</strong> –\n       it is straight and has no beginning and no end. We label it with a small letter ($p$) or with two points (line $AB$).</p>",
    "<p>A <strong>ray</strong> has a beginning but no end: the ray $AB$ starts at point A and goes on through point B.\n       The <strong>line segment</strong> $AB$ is the part of a line between the points A and B; it has two end points and can be measured.</p>",
    {
     "fig": "r5-utvary",
     "caption": "A dashed line shows that the line goes on without end. On the right, a circle with centre S, radius r and diameter d."
    },
    "<p>A <strong>circle</strong> is a curve whose points are all the same distance from the centre S – this distance is the <strong>radius</strong> $r$.\n       The <strong>diameter</strong> $d$ passes through the centre and is twice as long: $d = 2\\cdot r$. A <strong>disc</strong> is a circle together with the whole region inside it.</p>"
   ],
   "examples": [
    {
     "task": "A circle has a diameter of 14 cm. What is its radius?",
     "steps": [
      "The radius is half the diameter.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "How many line segments do 4 points determine if no three of them lie on one line?",
     "steps": [
      "Points A, B, C, D. We join each one with every other: AB, AC, AD, BC, BD, CD.",
      "<strong>There are 6 of them.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "Perimeter of a square, a rectangle and a triangle",
   "summary": "Working out the perimeter, a missing side and calculating with different units.",
   "theory": [
    "<p>The <strong>perimeter</strong> of a polygon is the sum of the lengths of all its sides. We denote it $o$.</p>",
    {
     "fig": "r5-obvod",
     "caption": "Formulas for the perimeter of a square, a rectangle and a triangle."
    },
    "<p><strong>Square:</strong> $o = 4\\cdot a$. <strong>Rectangle:</strong> $o = 2\\cdot(a + b)$.\n       <strong>Triangle:</strong> $o = a + b + c$; an equilateral triangle has $o = 3\\cdot a$.</p>",
    "<p>Before adding, all the lengths must be in the <strong>same unit</strong>. If a rectangle has sides $3\\,\\text{dm}$ and $12\\,\\text{cm}$,\n       we first convert $3\\,\\text{dm} = 30\\,\\text{cm}$ and then $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "A triangle has sides 7 cm, 9 cm and 12 cm. Work out its perimeter.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "A rectangle has a perimeter of 50 m and one side of 15 m. How long is the other side?",
     "steps": [
      "Half the perimeter is $a + b = 50 : 2 = 25$.",
      "$b = 25 - 15 = 10$.",
      "<strong>The other side measures $10\\,\\text{m}$.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "Units of length, mass, volume and time",
   "summary": "Converting units, compound measurements and choosing a suitable unit.",
   "theory": [
    "<p><strong>Length:</strong> km, m, dm, cm, mm. <strong>Mass:</strong> t, kg, dag, g.\n       <strong>Volume:</strong> hl, l, dl, ml. <strong>Time:</strong> day, hour (h), minute (min), second (s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "Unit ladders. The arrow shows how many smaller units replace one bigger unit."
    },
    "<p><strong>To a smaller unit</strong> we multiply: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>To a bigger unit</strong> we divide: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       We convert a compound measurement part by part: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>Be careful with time: it is not “ten” but <strong>60</strong> (an hour has 60 minutes, a minute 60 seconds) and a day has <strong>24</strong> hours.</p>"
   ],
   "examples": [
    {
     "task": "Convert $3\\,\\text{l}\\ 4\\,\\text{dl}$ to decilitres.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "A film started at 18:40 and ended at 20:15. How many minutes did it last?",
     "steps": [
      "From 18:40 to 19:00 is 20 minutes.",
      "From 19:00 to 20:00 is 60 minutes, from 20:00 to 20:15 is 15 minutes.",
      "$20 + 60 + 15 = 95$.",
      "<strong>The film lasted 95 minutes.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "Solving word problems",
   "summary": "Multi-step problems, parts of a whole, sum and difference, rounding up.",
   "theory": [
    "<p>When solving a word problem: <strong>1.</strong> read the problem and write down what you know and what you are looking for; <strong>2.</strong> think about\n       the order in which you will calculate; <strong>3.</strong> calculate; <strong>4.</strong> check or estimate;\n       <strong>5.</strong> write the answer as a full sentence.</p>",
    "<p>A <strong>bar model</strong> helps with problems about a sum and a difference. If two people have 50 € together and one has 8 € more,\n       we first take away the difference – then both have the same amount.</p>",
    {
     "fig": "r5-model",
     "caption": "Bar model: $50 - 8 = 42$, $42 : 2 = 21$. The younger one has 21 €, the older one $21 + 8 = 29$ €."
    },
    "<p>Watch out for the <strong>remainder</strong>: if 23 children are to get into cars and 4 fit in each, $23 : 4 = 5$ (remainder 3) cars are not enough.\n       The remaining 3 children need another car, so 6 cars are needed.</p>"
   ],
   "examples": [
    {
     "task": "Lucy had 120 euros. She spent a third on shoes and 25 euros on books. How many euros does she have left?",
     "steps": [
      "A third of 120: $120 : 3 = 40$ euros.",
      "Altogether she spent $40 + 25 = 65$ euros.",
      "Left: $120 - 65 = 55$ euros.",
      "<strong>Answer: Lucy has 55 euros left.</strong>"
     ]
    },
    {
     "task": "A father is 42 years old and three times as old as his son. How old will the son be in 6 years?",
     "steps": [
      "The son is now $42 : 3 = 14$ years old.",
      "In 6 years: $14 + 6 = 20$.",
      "<strong>Answer: The son will be 20 years old.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$, so the result is $1\\,000\\cdot {@0} = {@1}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, so ${@3} : {@4} = {@5}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, so ${@3}\\cdot {@4} = {@5}$.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$, so $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Sum: ${@4} + {@5} = {@6}$ (in Roman numerals {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$, so $b = {@2} - {@3} = {@4}$; the other side is ${@5}\\,\\text{{@6}}$ long.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$; the side is ${@2}\\,\\text{{@3}}$ long.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$; the third side is ${@4}\\,\\text{{@5}}$ long.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$; the diameter is ${@2}\\,\\text{{@3}}$.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$; the perimeter is ${@4}\\,\\text{{@5}}$.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$; the perimeter is ${@3}\\,\\text{{@4}}$.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$; the radius is ${@2}\\,\\text{{@3}}$.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (that is ${@3}$), then ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, remainder {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. The other numbers leave a remainder when divided by {@3}.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Estimate: ${@4} {@5} {@6} = {@7}$. (The exact result is ${@8}$.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "${@0}$ of {@1} is ${@2} : {@3} = {@4}$. ${@5}$ is ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ and we add the rest: ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4: down, 5 – 9: up. Replace the digits to the right with zeros.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = three million forty-two thousand seven hundred and five",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (to the nearest ten)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (to the nearest hundred)</span>",
  "Aké číslo je $\\text{{@0}}$?": "Which number is $\\text{{@0}}$?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "What is the value of the group $\\text{{@0}}$?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "What is the value of the digit {@0} in the number ${@1}$?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "What part of the whole do the shaded pieces make? Write it as a fraction in the form a/b (for example 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "What is the perimeter of the rectangle (in {@0})?",
  "Aký je obvod obdĺžnika v centimetroch?": "What is the perimeter of the rectangle in centimetres?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "Without the difference of €8 they would both have the same: (50 − 8) : 2 = €21.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "Without the difference: ${@0} - {@1} = {@2}$, which is twice what the younger one has: ${@3} : 2 = {@4}$. {@5} Check: ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "Points {@0}. Line segments: {@1}. Altogether {@2}.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "The whole is divided into {@0} {@1} (denominator), {@2} (numerator): ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "The whole has {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, so ${@5}\\,\\text{{@6}}$.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "The whole is made up of {@0} equal parts. Multiply.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "The train journey from Bratislava to Kosice takes about",
  "Cez dva body vieme viesť jedinú priamku.": "Through two points we can draw only one straight line.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "Digit sum: ${@0} = {@1}$, it is divisible by three.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "Digit sum: ${@0} = {@1}$, it is not divisible by three.",
  "Desatina": "A tenth",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "A day has 24 hours: ${@0}\\cdot 24 = {@1}$, plus ${@2} + {@3} = {@4}$ hours.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "You can't just add days and hours. First convert {@0} {@1} into hours.",
  "Do hrnčeka sa zmestí asi": "A mug holds about",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "The denominator is the number of all the pieces, not just the unshaded ones.",
  "Do vane sa zmestí asi": "A bath holds about",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "Exactly {@0} of the {@1} holds ${@2}\\,\\text{{@3}}$. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "Fill in the missing number: $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "Fill in the missing number: $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "On the second day they did not walk {@0} km, but {@1} km more than on the first day.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "Second day: ${@0} + {@1} = {@2}$ km. Third day: ${@3} : 2 = {@4}$ km. Altogether: ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "Two brothers have {@0} {@1} altogether. The older one has {@2} {@3} more than the younger one. How many euros does the {@4} brother have?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "Twelve dots arranged in rectangles",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "The pair {@0} is not allowed: you may only subtract I before V and X, X before L and C, C before D and M.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "Pairs: ${@0} = {@1}$. Factors: {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "Pairs: ${@0} = {@1}$. Factors: {@2}. The number has only two factors.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "Exactly one straight line passes through two different points.",
  "Dĺžka triedy je asi": "The length of a classroom is about",
  "Hmotnosť jablka je asi": "The mass of an apple is about",
  "Hmotnosť nákladného auta je asi": "The mass of a lorry is about",
  "Hmotnosť žiaka 5. ročníka je asi": "The mass of a Year 6 pupil is about",
  "Hrúbka zošita je asi": "The thickness of an exercise book is about",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "In the {@0} times table, find the last result that is not more than {@1}.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "You are looking for the {@0} number, but you made the {@1} one.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "It's the other way round: the diameter is twice the radius, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "Is the number ${@0}$ divisible by {@1}?",
  "Je číslo ${@0}$ párne alebo nepárne?": "Is the number ${@0}$ even or odd?",
  "Jeden deň má 24 hodín.": "One day has 24 hours.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "One part is {@0}. What is ${@1}$ of {@2}?",
  "Koľko eur je {@0} z {@1} eur?": "How many euros is {@0} of {@1} euros?",
  "Koľko eur má mladší brat?": "How many euros does the younger brother have?",
  "Koľko eur má starší brat?": "How many euros does the older brother have?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "How many euros are left when you subtract the difference {@1} from the sum {@0}?",
  "Koľko eur {@0} spolu?": "How many euros were {@0} altogether?",
  "Koľko eur {@0} zostalo?": "How many euros were left for {@0}?",
  "Koľko gramov váži celý koláč?": "How many grams does the whole cake weigh?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "How many hours are there in {@0} {@1} and {@2} {@3}?",
  "Koľko hodín majú {@0} {@1}?": "How many hours are there in {@0} {@1}?",
  "Koľko je ${@0}$ z čísla {@1}?": "What is ${@0}$ of {@1}?",
  "Koľko je polovica obvodu, teda $a + b$?": "What is half the perimeter, that is $a + b$?",
  "Koľko kilometrov meria celá cesta?": "How many kilometres long is the whole journey?",
  "Koľko kilometrov prešli druhý deň?": "How many kilometres did they walk on the second day?",
  "Koľko kilometrov prešli tretí deň?": "How many kilometres did they walk on the third day?",
  "Koľko kilometrov prešli za tri dni spolu?": "How many kilometres did they walk in the three days altogether?",
  "Koľko litrov sa zmestí do celej nádrže?": "How many litres does the whole tank hold?",
  "Koľko minút trvala celá cesta?": "How many minutes did the whole journey take?",
  "Koľko minút uplynie od {@0} do {@1}?": "How many minutes pass from {@0} to {@1}?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "How many multiples of {@0} are there between 1 and {@1} (inclusive)?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "How old will {@0} be in {@1} {@2}?",
  "Koľko rokov má {@0} teraz?": "How old is {@0} now?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "How many line segments are determined by {@0} points, no three of which lie on one straight line? (We join every two points with a line segment.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "How many line segments are determined by {@0} points, no three of which lie on one straight line? (We join every two points with a line segment.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "How many times do you need to take {@0} to get {@1}?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "A disc is a circle together with the whole inside.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "A circle is just a line; a disc also includes the area inside.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "A circle has a radius of ${@0}\\,\\text{{@1}}$. What is its diameter (in {@2})?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "A circle has a diameter of ${@0}\\,\\text{{@1}}$. What is its radius (in {@2})?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "Which digit is just to the right of the {@1} place in the number ${@0}$?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "Which two numbers add up to $1\\,000$?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "Which two numbers give a nice product of 100?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "What is the {@0} whole number that rounds to ${@2}$ when rounded to the nearest {@1}?",
  "Ktoré z čísel je násobkom čísla {@0}?": "Which of the numbers is a multiple of {@0}?",
  "Ktoré z čísel je {@0}?": "Which of the numbers is the {@0}?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "What is the largest multiple of {@0} that is not more than {@1}?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "Which way of writing ${@0}$ in Roman numerals is correct?",
  "Mama": "Mum",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "The denominators are the same, so the numerator decides: ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "You are changing to a smaller unit, so multiply.",
  "Meníš na väčšiu jednotku, preto deľ.": "You are changing to a bigger unit, so divide.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "You can't find the subtrahend by adding. Subtract the difference from the minuend.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "We find the subtrahend by subtracting: ${@0} - {@1} = {@2}$.",
  "Minul": "Spent",
  "Minula": "Spent",
  "Mladší má {@0} {@1}.": "The younger one has {@0} {@1}.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "To ${@0}$ we round the numbers from ${@1}$ (rounding up) to ${@2}$ (rounding down). {@3} is ${@4}$.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "On the farm they collected {@0} {@1}. One box holds {@2} eggs. How many boxes do they need for all the eggs?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "To change to a smaller unit we multiply, to a bigger unit we divide.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "Put the smallest digit that is not 0 in the thousands place.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "{@0} {@1} are going on a trip. {@3} {@4} {@2} in one boat. How many boats do they need so that all the children can ride at the same time?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "The rest need one more box, {@0} {@1} altogether.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "The rest need one more boat, {@0} {@1} altogether.",
  "Najmenšie": "The smallest",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "First count on to the full hour, then add the rest. An hour has 60 minutes.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "First change both numbers into ordinary (Arabic) numerals, then add.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "First the same units: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Then $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "First work out the part of the whole amount, then add up all the spending and subtract it.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "First round each number to the nearest hundred, and only then calculate.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "First work out {@0} age now from the {@1} {@2}, and only then add {@3}. In {@5} {@6}, {@4} will no longer be {@7} as old.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "First find out how much one part is (divide by the denominator), then multiply by the numerator.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "First find out how old the child is now (division), then add.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "Brackets first, then multiplication, and subtraction last.",
  "Najväčšia číslica patrí na miesto tisícov.": "The largest digit goes in the thousands place.",
  "Najväčšie": "The largest",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "Draw a bar model. Subtract the difference from the sum – the brothers share the rest equally.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "You wrote only the digit itself. The value of a digit depends on its place – add the right number of zeros after it.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "Write all the factors of {@0}. Separate them with semicolons.",
  "Napíš {@0} čísla ${@1}$.": "Write the {@0} of the number ${@1}$.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "The successor is 1 more: ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "The successor is the number that is 1 more.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "We find the unknown dividend by multiplying: ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "You find the unknown dividend by multiplying, not dividing: multiply the quotient by the divisor.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "We find the unknown factor by dividing: ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "You find the unknown factor by dividing, not multiplying: divide the product by the known factor.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "You counted some line segments twice. The segment AB is the same as BA – count each pair of points only once.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "Find the place you are rounding to and move one place to the right.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "Multiples: {@0}, {@1}, {@2}, …, {@3}. The last one is ${@4}\\cdot {@5} = {@6}$; the next one, ${@7}$, is already more than {@8}. There are {@9} of them.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "A rectangle has two pairs of equal sides.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "A rectangle has a perimeter of ${@0}\\,\\text{{@1}}$ and one side of ${@2}\\,\\text{{@3}}$. How long is the other side (in {@4})?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "A rectangle has sides of ${@0}\\,\\text{dm}$ and ${@1}\\,\\text{cm}$. Work out its perimeter in centimetres.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "The perimeter is twice the sum of two adjacent sides.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "The perimeter of a rectangle is $2\\cdot(a + b)$.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "The perimeter contains each side twice. First divide it by two, and only then subtract the known side.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "Perimeter of a square, a rectangle and a triangle",
  "Od obvodu odčítaj dĺžky známych strán.": "Subtract the lengths of the known sides from the perimeter.",
  "Od obvodu {@0} odčítaj {@1}.": "From the perimeter {@0} subtract {@1}.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "You correctly subtracted the difference from the sum, but the brothers still have to split the rest into two equal parts.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "From the sum {@0} subtract the known side {@1}.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "From {@0} to {@1} is {@2} min, from {@3} to {@4} is {@5} min. Altogether ${@6} + {@7} = {@8}$ minutes.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "From {@0} to {@1}, {@2} minutes passed.",
  "Odčítaj": "Subtract",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "You subtracted only one side. Subtract both known sides from the perimeter.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "You subtracted only the money for the game. Don't forget to subtract the {@0} {@1} for the book as well.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "You subtracted only the money for the book. Subtract the amount for the game too – it is {@0} of all the money.",
  "Osmina": "An eighth",
  "Otec": "Dad",
  "Podiel vynásob deliteľom.": "Multiply the quotient by the divisor.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "The radius is shorter than the diameter, so the diameter needs to be divided by two, not multiplied.",
  "Polovica": "Half",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "Half the perimeter is the sum of the two adjacent sides. Now subtract the known side from it.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "Half the perimeter of a rectangle is the sum of two adjacent sides.",
  "Polovicu": "Half",
  "Polpriamka má jeden začiatočný bod.": "A ray has one starting point.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "A ray starts at one point and goes on without end in one direction only.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "A ray starts at one point and goes on without end in the other direction.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "Name the points with letters and list all the pairs systematically: first with point A, then with point B…",
  "Poradie operácií": "Order of operations",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "Compare the digits from the left until you find the first one that is different.",
  "Posledná číslica je {@0}, je párna.": "The last digit is {@0}, it is even.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "The last digit is {@0}, it is not 0 or 5.",
  "Posledná číslica je {@0}, nie je 0.": "The last digit is {@0}, it is not 0.",
  "Posledná číslica je {@0}, nie je párna.": "The last digit is {@0}, it is not even.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "The last digit is {@0}, so the number is {@1}.",
  "Posledná číslica je {@0}.": "The last digit is {@0}.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "You know {@0}, so the whole is bigger. The part needs to be multiplied, not divided.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "Careful: a bigger denominator does not mean a bigger fraction. The more pieces you divide the whole into, the smaller the pieces are.",
  "Pozri sa iba na poslednú číslicu.": "Look only at the last digit.",
  "Pozri sa na poslednú číslicu.": "Look at the last digit.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Look at the digit just to the right of the place you are rounding to: 0 – 4 round down, 5 – 9 round up.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "Look carefully: both fractions have the same numerator and the same denominator.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "You worked from left to right. Multiplication comes before subtraction: first multiply {@0} by the result of the brackets, and only then subtract from {@1}.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "You worked from left to right. Multiplication comes before addition: work out ${@0}\\cdot {@1}$ before you add.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "You worked as if the brackets were not there. The number {@0} multiplies the whole difference in the brackets – work out the brackets first.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "The predecessor is 1 less: ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "The predecessor is the number that is 1 less.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "Imagine the object and compare it with something you know (for example 1 kg of flour, 1 m – a big step, 1 l – a bottle).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "You converted the hours only into minutes. Each minute also has 60 seconds.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "You converted the seconds only into minutes. An hour has 60 minutes, so divide by sixty once more.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "Convert ${@0}\\,\\text{dm}$ into centimetres.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "Convert ${@0}\\,\\text{{@1}}$ into {@2}.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "Convert the decimetres into centimetres ($1\\,\\text{dm} = 10\\,\\text{cm}$) and only then calculate.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "Converting units of length, mass, volume and time",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "For divisibility by three, the last digit does not decide. Add up all the digits and check whether the digit sum is divisible by three.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "For divisibility by {@0}, only the last digit decides. Look at it once more and compare it with the divisibility rule.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "Time is not converted in tens: an hour has 60 minutes and a minute has 60 seconds.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "Time is not converted in hundreds: 1 {@0} = 60 {@1}, so divide by sixty.",
  "Priamka je nekonečná na obe strany.": "A straight line goes on for ever in both directions.",
  "Priamka má začiatok aj koniec.": "A straight line has a beginning and an end.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "A straight line has no end, a ray has a beginning, a line segment has a beginning and an end.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "A straight line has no end, so it has no length either.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "A straight line has no beginning and no end – it would continue as a dashed line on both sides.",
  "Priamka, polpriamka, úsečka a kružnica": "Straight line, ray, line segment and circle",
  "Priamku môžeme odmerať pravítkom.": "We can measure a straight line with a ruler.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "The diameter is longer than the radius, so the radius needs to be multiplied by two, not divided.",
  "Priemer je dvakrát dlhší ako polomer.": "The diameter is twice as long as the radius.",
  "Priemer kružnice je polovica polomeru.": "The diameter of a circle is half the radius.",
  "Pripočítaj": "Add",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "Now add {@0} {@1}: ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "Add {@0} {@1}: ${@2} + {@3}$.",
  "Pätina": "A fifth",
  "Pätinu": "A fifth",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "Same denominator: compare the numerators. Same numerator: a smaller denominator means bigger pieces.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "An equilateral triangle has 3 equal sides.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "You split the sum into two equal parts, but the brothers don't have the same amount. First subtract the difference of {@0} {@1} from the sum.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "We split it by place value: {@0}. Altogether ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "Split the numeral into groups of thousands, hundreds, tens and ones. Pairs such as CM, XC, IV mean subtraction.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "The digit to the right of the place decides: for 5 or more round up, for 4 or less round down.",
  "Rozložíme po rádoch: {@0}.": "We break it down by place value: {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "Count the places from the right: the last place is the ones, before it the tens, hundreds, thousands…",
  "Rímske číslice s odčítaním": "Roman numerals with subtraction",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "S = hundreds, D = tens, J = ones of each class",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "Try dividing: ${@0} : {@1} = {@2}$, remainder {@3}. A multiple of {@4} can be divided without a remainder.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "Try dividing by 1, 2, 3, … and look for pairs whose product is {@0}.",
  "Spolu {@0} {@1}.": "Altogether {@0} {@1}.",
  "Spomeň si na malú násobilku čísla {@0}.": "Think of the {@0} times table.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "Work out the value of this numeral – a smaller symbol after a bigger one is added, so you get a different number.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "Count all the pieces – that is the denominator. Then count the shaded pieces – that is the numerator.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "You counted the unshaded pieces. The numerator tells you how many pieces are shaded.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "The correct one is {@0}: {@1}. The other numerals break the rules or have a different value.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "The older one has ${@0} + {@1} = {@2}$ {@3}.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "The sides are in different units. First convert the decimetres into centimetres, and only then add.",
  "Súčin vydeľ známym činiteľom.": "Divide the product by the known factor.",
  "Sčítaj ${@0} + {@1}$.": "Add ${@0} + {@1}$.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "Add two adjacent sides: ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "Add the lengths of all three sides.",
  "Sčítaj hodnoty skupín {@0}.": "Add the values of the groups {@0}.",
  "Sčítaj všetky číslice čísla.": "Add up all the digits of the number.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "Add the known sides: ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "You added only two sides. A rectangle has four sides – two of length $a$ and two of length $b$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "You added only two sides. A rectangle has four sides – multiply the sum of two adjacent sides by two.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "You added numbers in different units. First convert {@0} {@1} into {@2}.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "Now: ${@0} : {@1} = {@2}$ {@3}. In {@4} {@5}: ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "That is the last multiple of {@0}, not the number of multiples. Find out how many times you had to add {@1} to get to it.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "That is the exact result. The task asks for an estimate: first round both numbers to the nearest hundred, and only then calculate.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "That is {@0} age now. The task asks how old they will be in {@1} {@2}.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "That is what the {@0} brother has. We are asking about the {@1} one.",
  "Tretina": "A third",
  "Tretinu": "A third",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "On the third day they walked half of what they walked on the second day, not the first.",
  "Triedy a rády čísla 3 042 705": "Classes and places of the number 3 042 705",
  "Trojuholník má iba tri strany, nie štyri.": "A triangle has only three sides, not four.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "A triangle has a perimeter of ${@0}\\,\\text{{@1}}$. Two of its sides are ${@2}\\,\\text{{@3}}$ and ${@4}\\,\\text{{@5}}$ long. How long is the third side (in {@6})?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "A triangle has sides ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ and ${@4}\\,\\text{{@5}}$. Work out its perimeter in {@6}.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "Hikers walked {@0} km on the first day. On the second day they walked {@1} km more than on the first day, and on the third day half of what they walked on the second day. How many kilometres did they walk in the three days?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "There are {@0} {@1} in the basket. ${@2}$ of them are red. How many apples are red?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "There are {@0} {@1} in the basket. ${@2}$ of them are red. How many apples are red?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "A train left at {@0} and arrived at its destination at {@1}. How many minutes did the journey take?",
  "Vyber správny údaj: {@0} …": "Choose the right value: {@0} …",
  "Vydeľ ${@0} : {@1}$.": "Divide ${@0} : {@1}$.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "Divide and look at the remainder. If something is left over, you need one more.",
  "Vydeľ {@0} menovateľom {@1}.": "Divide {@0} by the denominator {@1}.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "Divide the number by the denominator and multiply the result by the numerator.",
  "Vynásob ${@0}\\cdot {@1}$.": "Multiply ${@0}\\cdot {@1}$.",
  "Vynásob {@0} čitateľom {@1}.": "Multiply {@0} by the numerator {@1}.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "You multiplied the side by itself – that is the area of the square. The perimeter is the sum of the lengths of all four sides.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "You multiplied the sides – that is the area, not the perimeter. The perimeter is the sum of the lengths of all the sides.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "Work out $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "Work out ${@0} - {@1}\\cdot({@2} - {@3})$.",
  "Vypočítaj ${@0}\\cdot 100$.": "Work out ${@0}\\cdot 100$.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "Work it out and write the result in ordinary (Arabic) numerals: $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "Work out the perimeter of a rectangle with sides $a = {@0}\\,\\text{{@1}}$ and $b = {@2}\\,\\text{{@3}}$ (in {@4}).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Work out the perimeter of an equilateral triangle with side ${@0}\\,\\text{{@1}}$ (in {@2}).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Work out the perimeter of a square with side ${@0}\\,\\text{{@1}}$ (in {@2}).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "Work out each day in turn and add everything up at the end.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "Work out cleverly $125\\cdot {@0}\\cdot 8$.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "Work out cleverly $25\\cdot {@0}\\cdot 4$.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "Work out cleverly ${@0}\\cdot {@1}$.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "Work out the brackets ${@0} + {@1}$.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "Work out the brackets ${@0} - {@1}$.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "You only worked out ${@0}$, which is one piece. Now multiply it by the numerator {@1}.",
  "Vyučovacia hodina trvá": "A school lesson lasts",
  "Vzdialenosť z Bratislavy do Košíc je asi": "The distance from Bratislava to Kosice is about",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "Convert the bigger unit into the smaller one and then add the other part.",
  "Výška dospelého človeka je asi": "The height of an adult is about",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "You added all the symbols. But a smaller symbol before a bigger one is subtracted: for example IX is 9, not 11.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "All the numbers have the same number of digits, so we compare them from the left. {@0} is ${@1}$.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "Notice whether the line has a beginning, an end, or neither.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "From the digits {@0} make the {@1} four-digit number. Use each digit exactly once.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "You forgot the third day. The task asks about all three days.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "You mixed up the terms: the successor is 1 more, the predecessor is 1 less. You are looking for the {@0}.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "You swapped the roles of the numerator and the denominator: divide the number by the denominator and multiply the result by the numerator.",
  "Zaokrúhli ${@0}$ na stovky.": "Round ${@0}$ to the nearest hundred.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "Round both numbers to the nearest hundred and estimate the result: ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "Round the number ${@0}$ to the nearest {@1}.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "You rounded only the result. When estimating, first round each number separately and then calculate with the rounded numbers.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "You rounded to a different place. Rounding to the nearest {@0} means replacing all the digits to the right of the {@1} place with zeros.",
  "Zaokrúhľovanie na číselnej osi": "Rounding on the number line",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "Write the number ${@0}$ in Roman numerals.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "Write the thousands, hundreds, tens and ones separately. Remember: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "Find out how many times {@0} goes into {@1} whole.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "Find out which place the digit is in (ones, tens, hundreds, thousands…).",
  "Zlomky na koláčoch a páse": "Fractions of cakes and a strip",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "The fractions are not equal – compare their denominators.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "The fractions are not equal – compare their numerators.",
  "Zlomky sú rovnaké.": "The fractions are equal.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "The sign is the wrong way round. With the same denominator, the fraction with the bigger numerator is bigger.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "A symbol must not be repeated four times, and we may only subtract I before V and X, X before L and C, C before D and M.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "The symbols I, X, C must not be repeated four times in a row. For 4, 9, 40, 90, 400 and 900 use the subtraction form.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "The symbols I, X, C, M can appear in a row at most three times. Instead of four of the same symbol, use subtraction.",
  "Zvyšok sa delí na dve rovnaké časti.": "The rest is split into two equal parts.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "Brackets come first. Then division and multiplication, and addition only at the end.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "Brackets: ${@0} + {@1} = {@2}$. Division and multiplication: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Addition: ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "Brackets: ${@0} - {@1} = {@2}$. Multiplication: ${@3}\\cdot {@4} = {@5}$. Subtraction: ${@6} - {@7} = {@8}$.",
  "cesty": "journey",
  "dcéra": "her daughter",
  "dcére": "her daughter",
  "dcéry": "her daughter's",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "factors of 12: 1, 2, 3, 4, 6, 12",
  "desatina": "a tenth",
  "desatinu": "a tenth",
  "desatiny": "a tenth",
  "dni": "days",
  "dní": "days",
  "euro": "euro",
  "hodinu": "hour",
  "koláč": "cake",
  "koláča": "cake",
  "lodičiek": "boats",
  "lodičky": "boats",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "a smaller symbol before a bigger one is subtracted – only I before V, X; X before L, C; C before D, M",
  "meria": "measures",
  "miliónov": "millions",
  "milióny": "millions",
  "minul": "spent",
  "minula": "spent",
  "mladšieho": "younger",
  "mladší": "younger",
  "nadol": "down",
  "nahor": "up",
  "najmenšie": "smallest",
  "najväčšie": "largest",
  "napr. 1; 2; 4": "e.g. 1; 2; 4",
  "napr. 2/5": "e.g. 2/5",
  "napr. MCMXC": "e.g. MCMXC",
  "nasledovníka": "successor",
  "nepárne": "odd",
  "nie": "no",
  "nádrže": "tank",
  "obalov": "boxes",
  "obaly": "boxes",
  "odčítaj": "subtract",
  "odčítaš": "subtract",
  "osmina": "an eighth",
  "osminu": "an eighth",
  "osminy": "an eighth",
  "polovica": "half",
  "polovice": "half",
  "polovicu": "half",
  "polpriamka": "ray",
  "polpriamka AB": "ray AB",
  "predchodcu": "predecessor",
  "priamka AB": "line AB",
  "priemer d = 2 · r": "diameter d = 2 · r",
  "pripočítaj": "add",
  "pripočítaš": "add",
  "párne": "even",
  "pásik": "strip",
  "pätina": "a fifth",
  "pätinu": "a fifth",
  "pätiny": "a fifth",
  "päťkrát": "five times",
  "rokov": "years",
  "roky": "years",
  "rovnaké diely": "equal pieces",
  "rovnakých dielov": "equal pieces",
  "spolu 50 €": "€50 altogether",
  "staršia": "older",
  "staršieho": "older",
  "starší": "older",
  "stotisícov": "hundred thousands",
  "syn": "his son",
  "syna": "his son's",
  "synovi": "his son",
  "také časti": "such parts",
  "takých častí": "such parts",
  "tretina": "a third",
  "tretinu": "a third",
  "tretiny": "a third",
  "vajec": "eggs",
  "vyfarbené sú {@0}": "{@0} are shaded",
  "vyfarbený je 1": "1 is shaded",
  "vyfarbených je {@0}": "{@0} are shaded",
  "váži": "weighs",
  "zmestia": "fit",
  "zmestí": "fit",
  "zátvorky": "brackets",
  "zľava doprava": "left to right",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} So no, the remainder after dividing is {@1}.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} So yes: ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@0} {@1} once more: ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0} is $100 {@1} 1$. Multiply by a hundred and then {@2} the number once more.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} is {@1} {@2} old and {@3} as old as {@5}. How old will {@6} be in {@7} {@8}?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0} does not mean {@1} {@2}. {@3} of {@4} is found by dividing: ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@0} of {@1}: ${@2} : {@3} = {@4}$. {@5} altogether: ${@6} + {@7} = {@8}$. Left: ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@0} of the {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0} {@1} {@2} {@3}. {@4} of it went on a game and {@6} {@7} on a book. How many euros were left for {@8}?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. The other values are too big or too small.",
  "Úsečka AB začína v bode A a končí v bode B.": "The line segment AB starts at point A and ends at point B.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "A line segment ends at both end points and does not go on beyond them.",
  "Úsečka má dva krajné body.": "A line segment has two end points.",
  "Úsečka má konečnú dĺžku.": "A line segment has a finite length.",
  "Úsečkový model súčtu a rozdielu": "Bar model of a sum and a difference",
  "Úsečku môžeme odmerať pravítkom.": "We can measure a line segment with a ruler.",
  "áno": "yes",
  "úsečka AB": "line segment AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "You subtracted the times like ordinary numbers. But an hour has 60 minutes, not 100 – first count on to the full hour.",
  "Červené sú {@0} jablká": "{@0} apples are red",
  "Červených je {@0} jabĺk": "{@0} apples are red",
  "Čiara má dva krajné body A a B – je to úsečka.": "The line has two end points A and B – it is a line segment.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "The line has no beginning and no end – it is a straight line.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "The line starts at point A and goes on in the other direction – it is a ray.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "The numerators are the same. The more pieces we divide the whole into, the smaller the pieces: ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "What is in the picture? A dashed line means that the line goes on without end.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "It isn't enough to write the numbers next to each other. First convert {@0} {@1} into {@2}, then add {@3}.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "You wrote the numbers next to each other as if 1 {@0} = 100 {@1}. But 1 {@2} = 60 {@3}.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "The digit just to the right of the {@0} place is {@1}, so we round {@2}: ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "The digit to the right is {@0}. Round ${@1}$ to the nearest {@2}.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "The digit to the right of the {@0} place is 5 or more – in that case we round up.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "The digit to the right of the {@0} place is less than 5 – in that case we round down.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "The digit {@0} is in the {@1} place, so its value is ${@2}\\cdot {@3} = {@4}$.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "We arrange the digits from the smallest, but 0 cannot be at the start, so it goes in the second place: ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "We arrange the digits from the smallest: ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "We arrange the digits from the largest to the smallest: ${@0}$.",
  "Číslo": "Number",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "A number cannot start with zero – it would not be a four-digit number. Put the smallest digit that is not 0 in the first place.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "The number {@0} is $100 {@1} 1$, so you {@2} the whole number {@3} once, not just 1.",
  "čiara": "line",
  "Šestina": "A sixth",
  "Štvorec má 4 rovnaké strany.": "A square has 4 equal sides.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "A square has four equal sides, so divide the perimeter by four, not by two.",
  "Štvrtina": "A quarter",
  "Štvrtinu": "A quarter",
  "šestina": "a sixth",
  "šestinu": "a sixth",
  "šestiny": "a sixth",
  "štvrtina": "a quarter",
  "štvrtinu": "a quarter",
  "štvrtiny": "a quarter"
 }
});
