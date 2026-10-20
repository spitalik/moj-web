/* English: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/r4/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "r4-cisla10000": {
   "title": "Numbers to 10 000 and beyond",
   "summary": "Thousands, hundreds, tens and ones; reading, writing and comparing large numbers.",
   "theory": [
    "<p>Every digit in a number has its own <strong>place (place value)</strong>: ones, tens, hundreds, thousands, ten thousands…\n       Ten ones make one ten, ten tens make a hundred, ten hundreds make a thousand and ten thousands make $10\\,000$.</p>",
    {
     "fig": "r4-rady",
     "caption": "The number $47\\,385$ has 4 ten thousands, 7 thousands, 3 hundreds, 8 tens and 5 ones."
    },
    "<p>We write large numbers with a space after every three digits from the right: $8\\,206$, $35\\,000$. This makes them easier to read:\n       <em>eight thousand two hundred and six</em>, <em>thirty-five thousand</em>.</p>",
    "<p><strong>Comparing:</strong> the number with more digits is bigger. If they have the same number of digits, we compare\n       from the left – first the thousands, then the hundreds, tens and ones. For example $5\\,382 &gt; 5\\,297$, because 3 hundreds are more than 2 hundreds.</p>"
   ],
   "examples": [
    {
     "task": "Write as a number: 6 thousands, 0 hundreds, 4 tens and 9 ones.",
     "steps": [
      "We write a zero in the hundreds place so that the digits do not shift.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>The number is $6\\,049$.</strong>"
     ]
    },
    {
     "task": "Compare the numbers $7\\,615$ and $7\\,651$.",
     "steps": [
      "Both numbers have four digits and both have 7 thousands and 6 hundreds.",
      "Tens: 1 is less than 5.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "Column addition and subtraction",
   "summary": "Adding and subtracting numbers with several digits in columns.",
   "theory": [
    "<p>In column addition we write the numbers <strong>one under the other</strong> so that ones are under ones, tens under\n       tens and so on. We work <strong>from the right</strong>, starting with the ones. When the sum in a column is more than 9, we write only the ones\n       and carry 1 to the next column.</p>",
    {
     "fig": "r4-scitanie",
     "caption": "Column addition $3\\,476 + 2\\,858 = 6\\,334$. The small ones at the top are the carried digits."
    },
    "<p>In column subtraction we also start with the ones. If the top digit is smaller than the bottom one, we add 10 to it\n       and carry 1 to the next column, where we add it to the bottom digit.</p>",
    "<p><strong>Check:</strong> we check the result of a subtraction by adding. If $5\\,203 - 1\\,868 = 3\\,335$,\n       then $3\\,335 + 1\\,868 = 5\\,203$ must be true.</p>"
   ],
   "examples": [
    {
     "task": "Work out $4\\,587 + 3\\,765$ in columns.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "Ones: $7 + 5 = 12$, write 2, carry 1. Tens: $8 + 6 + 1 = 15$, write 5, carry 1.",
      "Hundreds: $5 + 7 + 1 = 13$, write 3, carry 1. Thousands: $4 + 3 + 1 = 8$.",
      "<strong>Result: $8\\,352$</strong>"
     ]
    },
    {
     "task": "Work out $6\\,042 - 2\\,718$ in columns.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "Ones: 2 is less than 8, so $12 - 8 = 4$, carry 1.",
      "Tens: $1 + 1 = 2$, $4 - 2 = 2$. Hundreds: 0 is less than 7, so $10 - 7 = 3$, carry 1.",
      "Thousands: $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>Result: $3\\,324$</strong>. Check: $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "Written multiplication and division",
   "summary": "Multiplying by a one-digit and a two-digit number, dividing by a one-digit number with a remainder.",
   "theory": [
    "<p><strong>Written multiplication by a one-digit number:</strong> we multiply the ones, tens, hundreds… in turn.\n       If the result is more than 9, we write the ones, carry the tens and add them to the next product.</p>",
    "<p><strong>Multiplying by a two-digit number:</strong> first we multiply by the ones, then by the tens. We write the second partial\n       product shifted one place to the left. Finally we add the partial products.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$: first $243\\cdot 2 = 486$, then $243\\cdot 3 = 729$ shifted to the left (meaning $7\\,290$). Together $7\\,776$."
    },
    "<p><strong>Written division:</strong> we divide from the left. We take enough digits to be able to divide, find the result and the remainder,\n       bring down the next digit and carry on. If something is left at the end, it is the <strong>remainder</strong>, which is always smaller than the divisor.\n       Check: $\\text{quotient}\\cdot\\text{divisor} + \\text{remainder} = \\text{dividend}$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $1\\,627\\cdot 4$ on paper.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, write 8, carry 2. $4\\cdot 2 + 2 = 10$, write 0, carry 1.",
      "$4\\cdot 6 + 1 = 25$, write 5, carry 2. $4\\cdot 1 + 2 = 6$.",
      "<strong>Result: $6\\,508$</strong>"
     ]
    },
    {
     "task": "Work out $947 : 6$ on paper.",
     "steps": [
      "$9 : 6 = 1$, remainder 3.",
      "Bring down 4: $34 : 6 = 5$, remainder 4.",
      "Bring down 7: $47 : 6 = 7$, remainder 5.",
      "<strong>$947 : 6 = 157$ remainder 5.</strong> Check: $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "Word problems with several operations",
   "summary": "Problems solved in several steps: shopping, sharing into groups, comparing.",
   "theory": [
    "<p>Some word problems cannot be solved with one calculation. We go in steps:</p>\n       <ol><li>What do we know? What are we looking for?</li><li>What do I need to find out first so that I can answer?</li>\n       <li>I work out each step and write it down.</li><li>I write the answer and check whether it makes sense.</li></ol>",
    "<p><strong>Useful words:</strong> <em>… more / fewer</em> – we add or subtract;\n       <em>… times more / less</em> – we multiply or divide; <em>shared equally</em>, <em>… each</em> – we divide;\n       <em>left over</em>, <em>change</em> – we subtract.</p>",
    "<p>We can also write the steps as one expression with brackets, for example $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       Remember the order of operations: first multiplication and division, then addition and subtraction.</p>"
   ],
   "examples": [
    {
     "task": "Mum bought 3 books at 12 euros each and paid with a 50-euro note. How much change did she get?",
     "steps": [
      "First we find the price of the books: $3\\cdot 12 = 36$ euros.",
      "Then the change: $50 - 36 = 14$ euros.",
      "As one expression: $50 - 3\\cdot 12 = 14$.",
      "<strong>Answer: Mum got 14 euros change.</strong>"
     ]
    },
    {
     "task": "4 classes of 23 pupils went on a trip. They travelled by coach, with 46 pupils in each. How many coaches went?",
     "steps": [
      "Number of pupils: $4\\cdot 23 = 92$.",
      "Number of coaches: $92 : 46 = 2$.",
      "<strong>Answer: 2 coaches went.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "Roman numerals",
   "summary": "The symbols I, V, X, L, C, D, M and writing numbers in Roman numerals.",
   "theory": [
    "<p>The ancient Romans wrote numbers with seven letters. We still find Roman numerals today on clocks, in the names of centuries\n       and on buildings.</p>",
    {
     "fig": "r4-rimske",
     "caption": "Roman numerals and their values."
    },
    "<p><strong>Rules:</strong> we add the values of the symbols: $\\text{XVI} = 10 + 5 + 1 = 16$. The same symbol (I, X, C, M)\n       can be written at most three times in a row: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>If a smaller symbol stands <strong>before</strong> a bigger one, we subtract it: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. That is why we do not write 4 as IIII, but as IV.</p>"
   ],
   "examples": [
    {
     "task": "Which number is written in Roman numerals as $\\text{LXXIV}$?",
     "steps": [
      "We split it up: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "Write the number 39 in Roman numerals.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "Angles, triangles and quadrilaterals",
   "summary": "Acute, right and obtuse angles; the triangle, the rectangle, the square and other quadrilaterals.",
   "theory": [
    "<p>An <strong>angle</strong> is made by two arms that start from one point – the <strong>vertex</strong>.\n       A right angle has the shape of the corner of an exercise book. An angle smaller than a right angle is <strong>acute</strong>, an angle bigger than a right angle\n       (but not yet a straight line) is <strong>obtuse</strong>.</p>",
    {
     "fig": "r4-uhly",
     "caption": "An acute, a right and an obtuse angle. We mark a right angle with a small square."
    },
    "<p>A <strong>triangle</strong> has 3 sides, 3 vertices and 3 angles. A <strong>quadrilateral</strong> has 4 sides, 4 vertices and 4 angles.\n       A <strong>rectangle</strong> is a quadrilateral with 4 right angles; its opposite sides are the same length.\n       A <strong>square</strong> is a rectangle whose 4 sides are all the same length.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "All the angles of a square and a rectangle are right angles. Every square is also a rectangle."
    }
   ],
   "examples": [
    {
     "task": "Is the angle between the hands of a clock at 3:00 acute, right or obtuse?",
     "steps": [
      "The short hand points to 3, the long hand to 12.",
      "Between them is a quarter of a circle – the shape of the corner of an exercise book.",
      "<strong>It is a right angle.</strong>"
     ]
    },
    {
     "task": "One side of a rectangle is 7 cm long and another is 4 cm. How long are the other two sides?",
     "steps": [
      "The opposite sides of a rectangle are the same length.",
      "<strong>The other sides measure 7 cm and 4 cm.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "Perimeter and area",
   "summary": "Perimeter as the length of the edge, area as the number of squares that cover the shape.",
   "theory": [
    "<p>The <strong>perimeter</strong> of a shape is the length of its edge – the sum of the lengths of all its sides. The perimeter of a rectangle with sides\n       $a$ and $b$ is $a + b + a + b$, so $2\\cdot(a + b)$. The perimeter of a square with side $a$ is $4\\cdot a$.</p>",
    "<p>The <strong>area</strong> tells us how much space a shape takes up. We find it by counting the squares that cover it.\n       A square with side 1 cm has an area of 1 square centimetre ($1\\,\\text{cm}^2$).</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "A 4 cm × 3 cm rectangle: the perimeter is the length of the blue edge, the area is the number of squares inside."
    },
    "<p>For a rectangle we do not need to count the squares one by one: each row has as many as the length of one side,\n       and there are as many rows as the length of the other side. That is why area $= a\\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Work out the perimeter of a rectangle with sides 8 cm and 5 cm.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>The perimeter is $26\\,\\text{cm}$.</strong>"
     ]
    },
    {
     "task": "A square has a perimeter of 36 cm. How long is its side?",
     "steps": [
      "A square has 4 sides of the same length, 36 cm altogether.",
      "$36 : 4 = 9$.",
      "<strong>The side is $9\\,\\text{cm}$ long.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "Converting units and working with data",
   "summary": "Units of length, mass, volume and time; reading data from a table and a chart.",
   "theory": [
    "<p><strong>Length:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>Mass:</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>Volume:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>Time:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 day = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "When we change a bigger unit into a smaller one, the number gets bigger – we multiply. The other way round, we divide."
    },
    "<p>We often read <strong>data</strong> from a table or a bar chart. The height of a bar shows the value –\n       we read it off the vertical axis. With the data we can then compare (how many more) and add up (how many altogether).</p>"
   ],
   "examples": [
    {
     "task": "How many centimetres are 4 m 35 cm?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "How many kilograms are $6\\,000\\,\\text{g}$?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$; we are changing to a bigger unit, so we divide.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, so ${@3} : {@4} = {@5}$. That gives ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, so ${@3}\\cdot {@4} = {@5}$. That gives ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, the perimeter is ${@4}\\,\\text{{@5}}$.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, the perimeter is ${@2}\\,\\text{{@3}}$.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. Where there are 0 of something, we write a zero in that place.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, we don't write a zero at the start",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, write {@3}",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, because ${@3}\\cdot {@4} = {@5}$, remainder {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. {@2} {@3} voted.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, then we add ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12 squares = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "If it had two right angles, its arms would be parallel and would never meet.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "What is this shape called? Choose the most precise name.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "How do you write {@0} in Roman numerals?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "How long is the horizontal side of the rectangle (in cm)?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "How long is the vertical side of the rectangle (in cm)?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "Which number is written in Roman numerals as $\\text{{@0}}$?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "What is the value of the Roman numeral $\\text{{@0}}$?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "What is the value of the part $\\text{{@0}}$?",
  "Aký je tento uhol?": "What kind of angle is this?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "We find the missing addend by subtracting: ${@0} - {@1} = {@2}$.",
  "Desiatky": "Tens",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "The children in a class voted for their favourite fruit. Each child voted once.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "Divide from the left; the remainder at the end must be smaller than {@0}.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "Divide from the left. Take enough digits to be able to divide, then bring down the next ones one by one.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "You counted only two sides in the perimeter. The perimeter is made up of all four sides.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "Going right (to a smaller unit) we multiply, going left (to a bigger unit) we divide.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "Move the second product one place to the left (it means ${@0}$) and add: what is ${@1} + {@2}$?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "You did not move the second partial product one place to the left. You are multiplying by tens, so it means ten times more.",
  "Dvakrát": "Twice",
  "Hodina má 60 minút a minúta 60 sekúnd.": "An hour has 60 minutes and a minute has 60 seconds.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "The Roman numeral with the value {@0} is {@1}, not {@2}.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "Don't add the values. “How many more” is a difference – subtract the smaller value from the bigger one.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "Add the values of the symbols. If a smaller symbol comes before a bigger one (e.g. IV, IX, XL, XC), subtract it.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "We are looking for how much was taken away: ${@0} - {@1} = {@2}$. Check: ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10 – and then L, C, D, M.",
  "Jakub": "Jack",
  "Je toto tvrdenie pravdivé? „{@0}“": "Is this statement true? “{@0}”",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "One triangle has 3 angles, two have $2\\cdot 3 = 6$ angles.",
  "Jednotky": "Ones",
  "Každý obdĺžnik je štvorec.": "Every rectangle is a square.",
  "Každý uhol má 2 ramená a 1 vrchol.": "Every angle has 2 arms and 1 vertex.",
  "Každý štvorec je obdĺžnik.": "Every square is a rectangle.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "Each little square in the grid has a side of 1 cm. Find the perimeter (in cm) and the area (in cm²) of the shaded rectangle. Write them as “perimeter; area”. {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "How many buses with {@0} seats are needed so that everyone fits?",
  "Koľko detí hlasovalo za {@0}?": "How many children voted for {@0}?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "How many euros do they have altogether? Work out ${@0} + {@1} + {@2}$.",
  "Koľko eur má {@0}?": "How many euros does {@0} have?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "How many euros did they give back? Work out ${@0} - {@1}$.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "What is ${@0} + {@1}$ (two adjacent sides)?",
  "Koľko je riadkov?": "How many rows are there?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "How many kilograms of potatoes were left after the sale?",
  "Koľko pravých uhlov má obdĺžnik?": "How many right angles does a rectangle have?",
  "Koľko pravých uhlov má štvorec?": "How many right angles does a square have?",
  "Koľko ramien má jeden uhol?": "How many arms does one angle have?",
  "Koľko uhlov majú spolu dva trojuholníky?": "How many angles do two triangles have altogether?",
  "Koľko uhlov má trojuholník?": "How many angles does a triangle have?",
  "Koľko vrcholov má štvoruholník?": "How many vertices does a quadrilateral have?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "How many {@0} kg sacks can be filled with them?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "How many people are going on the trip altogether (pupils and teachers)?",
  "Koľko štvorčekov je v jednom riadku?": "How many little squares are there in one row?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "How many 1 cm × 1 cm squares cover the shaded rectangle? (Give the area in cm².) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "How many times does {@0} go into {@1}?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "Which digit is in the {@1} place in the number ${@0}$?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "Which number is {@0} less than ${@1}$?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "Which number is {@0} more than ${@1}$?",
  "Lucia": "Lucy",
  "Martin": "Martin",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "You are changing to a smaller unit – the number gets bigger, so multiply.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "You are changing to a bigger unit – the number gets smaller, so divide.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "A smaller symbol before a bigger one is subtracted, not added. For example IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "It has 3 sides and 3 vertices – it is a triangle.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "It has 4 right angles and all its sides are the same length – it is a square.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "It has 4 right angles, but its adjacent sides have different lengths – it is a rectangle.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "It has 4 sides, but its angles are not right angles – it is a general quadrilateral.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "{@0} classes of {@1} pupils each are going on a trip, together with {@2} teachers. One bus has {@3} seats. How many buses do they need to book so that everyone fits?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "First ${@0}\\cdot {@1} = {@2}$, then ${@3}\\cdot {@4} = {@5}$ (we write it one place to the left, it means ${@6}$). We add: ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "First the cost of the shopping: ${@0}\\cdot {@1} = {@2}$ {@3}. Then the change: ${@4} - {@5} = {@6}$. {@7} got {@8} {@9} back.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "First multiply by the ones: what is ${@0}\\cdot {@1}$?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "First change the bigger unit into the smaller one and then add the rest.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "First change the bigger unit: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "First find out how many kilograms were left, then find out how many times one sack goes into that.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "First find out how much all the shopping cost, then subtract that from the banknote.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "Write the numbers one under the other, ones under ones, and add from the right. Don't forget the numbers you carry.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "Write the digits one after another in the order thousands, hundreds, tens, ones. Don't forget the zeros.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "Multiply from the right: first the ones, then the tens, hundreds… Carry the tens from each product.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "A 4 by 3 rectangle on a square grid",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "A rectangle has two longer and two shorter sides. Add all four.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "A rectangle has opposite sides of the same length.",
  "Obdĺžnik má všetky 4 uhly pravé.": "A rectangle has all 4 angles right angles.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "The rectangle has {@0} {@1} of {@2} squares: ${@3}\\cdot {@4} = {@5}$. The area is ${@6}\\,\\text{cm}^2$.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "A rectangle can have adjacent sides of different lengths, for example 5 cm and 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "A rectangle on a square grid",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "Area: what is ${@0}\\cdot {@1}$?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "The perimeter is the length of the edge, the area is the number of squares inside.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "The perimeter is not the number of squares along the edge, but the length of the edge. Add the lengths of all the sides.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "The perimeter is made up of 4 equal sides: ${@0} : 4 = {@1}$, the side is ${@2}\\,\\text{{@3}}$.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "The perimeter is made up of two such pairs of sides: what is $2\\cdot {@0}$?",
  "Obvod štvorca vydeľ štyrmi.": "Divide the perimeter of the square by four.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "Perimeter: what is $2\\cdot({@0} + {@1})$?",
  "Od menšenca odčítaj rozdiel.": "Subtract the difference from the number you start with.",
  "Od súčtu odčítaj známy sčítanec.": "Subtract the known addend from the sum.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "Subtract from the right. If the top digit is smaller, add 10 to it and carry 1 to the next column.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "Subtract {@0}. Watch out for crossing a place value.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "You subtracted the price of only one item. {@0} items were bought, so first work out the cost of all the shopping.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "An acute angle is smaller than the corner of an exercise book. Compare this angle with the corner of an exercise book.",
  "Ostrý, pravý a tupý uhol": "Acute, right and obtuse angles",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "First compare the number of digits, then the digits from left to right.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "Compare the angle with the corner of an exercise book (a right angle).",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "We compare place by place from the left. The first different digit decides: ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "Then by the tens: what is ${@0}\\cdot {@1}$?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "See which line the bar reaches and read the number on the left.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "Number of people: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, remainder {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "You worked with 100. For time, $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "A right angle has exactly the shape of the corner of an exercise book and is marked with a little square. Compare this angle with the corner of an exercise book.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "Imagine the shape and count its vertices, sides or angles.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Convert: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "Convert: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "Converting units of length and mass",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "Read the value of each bar and add them all up.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "Read both values and subtract the smaller from the bigger.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "Add the votes for {@0}: what is the total now?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "Add {@0}. Watch out for crossing a place value.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "Bring down {@0}: how many times does {@1} go into {@2}?",
  "Písomné násobenie 243 krát 32": "Written multiplication 243 times 32",
  "Písomné sčítanie 3476 plus 2858": "Column addition 3476 plus 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "You shared out all the potatoes into sacks, even the ones that were sold. First subtract how many were sold.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "Split the number into tens and ones. Remember: 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "We split it up: {@0}. Altogether ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "You counted the places from the left. The ones are the last digit on the right; move left from there.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "We read the places from the right: ones, tens, hundreds, thousands, ten thousands. In the {@0} place there is the digit {@1}.",
  "Rímske číslice a ich hodnoty": "Roman numerals and their values",
  "Samuel": "Samuel",
  "Skúška: ${@0} + {@1} = {@2}$.": "Check: ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "Put both parts together: how do you write {@0}?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "Remember: a rectangle has 4 right angles, and a square also has all its sides the same.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "Count the sides and check whether the angles are right angles (a little square in the corner).",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "Count the sides of the shape. A triangle has 3 sides, a quadrilateral has 4.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "Count all the people including the teachers. If someone is left over after dividing, they need another bus.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "Count the squares in one row and multiply by the number of rows.",
  "Stovky": "Hundreds",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "You multiplied the side by itself – that would be the area. The perimeter is the sum of all four sides.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "You added the sides. The area is the number of squares: squares in a row times the number of rows.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "You multiplied the sides – that would be the area. The perimeter is the length of the edge, so the sides need to be added.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "The sides are {@0} cm and {@1} cm. Perimeter: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Area: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "Bar chart of the vote",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "The “{@0}” bar reaches the line {@1}. {@2} {@3} voted.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "Add the values of all the parts. Which number is $\\text{{@0}}$?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "You added only two sides. A rectangle has four sides, so multiply the sum of two adjacent sides by two.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "Place value table for the number 47 385",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "You can write the same symbol at most three times in a row. Instead of four of the same symbol, use subtraction, for example 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "This shape has right angles (a little square in the corner), so it has a more precise name.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "This shape has no right angles. Both a square and a rectangle have all their angles right angles.",
  "Tisíce": "Thousands",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "That is the cost of all the shopping. Now find out how many euros of change they gave from the banknote.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "That is the perimeter – the length of the edge. The area is the number of squares inside.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "That is the number of kinds of fruit. Add up how many children voted for each fruit.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "Those are the kilograms that were left. Now find out how many {@0} kg sacks can be filled with them.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "Only {@0} has that much. We are asking how much all three children have altogether.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "That is how many angles one triangle has. There are two triangles.",
  "Treba {@0} {@1}.": "You need {@0} {@1}.",
  "Trikrát": "Three times",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "A triangle has 3 vertices and so also 3 angles.",
  "Trojuholník môže mať dva pravé uhly.": "A triangle can have two right angles.",
  "Tupý uhol je menší ako pravý uhol.": "An obtuse angle is smaller than a right angle.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "An obtuse angle is bigger than a right angle; the smaller one is an acute angle.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "An obtuse angle is bigger than the corner of an exercise book. Compare this angle with the corner of an exercise book.",
  "Uhol je menší ako roh zošita, je ostrý.": "The angle is smaller than the corner of an exercise book, so it is acute.",
  "Uhol je väčší ako roh zošita, je tupý.": "The angle is bigger than the corner of an exercise book, so it is obtuse.",
  "Uhol má tvar rohu zošita, je pravý.": "The angle has the shape of the corner of an exercise book, so it is a right angle.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "In one of the columns you subtracted the top digit from the bottom one because it was smaller. In that case add 10 to the top digit and carry 1.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "The shop had {@0} kg of potatoes. They sold {@1} kg and shared the rest into {@2} kg sacks. How many sacks did they fill?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "There is a zero missing in your quotient. When you can't divide after bringing down a digit, write 0 in the quotient and bring down the next digit.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "You left out a zero. If a place is missing, write 0 in it, otherwise the digits shift.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "Multiply by the ones first, then by the tens. Move the second result one place to the left and add the two together.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "You multiplied only by the ones. Multiply by the tens ({@0}) as well and add the two partial products.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "Work out the perimeter of a rectangle with sides ${@0}\\,\\text{{@1}}$ and ${@2}\\,\\text{{@3}}$. Give the result in {@4}.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "Work out the perimeter of a square with side ${@0}\\,\\text{{@1}}$. Give the result in {@2}.",
  "Vypočítaj písomne ${@0} + {@1}$.": "Work out in columns ${@0} + {@1}$.",
  "Vypočítaj písomne ${@0} - {@1}$.": "Work out in columns ${@0} - {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$.": "Work out by long division ${@0} : {@1}$.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Work out by long division ${@0} : {@1}$. Write the quotient and the remainder separated by a semicolon.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "Work out by long multiplication ${@0}\\cdot {@1}$.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "For {@0}: {@1}, for {@2}: {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "You forgot the 1 you carried. After borrowing, add it to the bottom digit in the next column.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "You forgot the numbers you carry. When a column adds up to 10 or more, add 1 in the next column to the left.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "You forgot to add another ${@0}\\,\\text{{@1}}$.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "You forgot to add the tens you carried. Add the tens from each product to the product in the next place.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "Write the perimeter and the area as “perimeter; area”.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "Write the quotient from the numbers you got in each step, and the remainder from the last step.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "Write the quotient from the numbers you got in each step.",
  "Zapíš rímskymi číslicami číslo {@0}.": "Write the number {@0} in Roman numerals.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "Write the result from the digits you got in the columns.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "Write the result: from each column the ones of the sum; the tens were carried on.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "Write the result: from each product the ones; the tens were carried on.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "Write as a number: {@0} {@1}, {@2} {@3}, {@4} {@5} and {@6} {@7}.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "Start from the last digit on the right – those are the ones – and move to the left.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "Find out how many times 60 goes into the given number.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "The sign = only goes between two equal numbers. These numbers differ in at least one digit.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "The sign is the wrong way round. Compare from the left – the first digit in which the numbers differ decides.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "The sign is the wrong way round. The number with more digits is bigger.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "The people left over need one more bus, so you need {@0} {@1}.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "Potatoes left: ${@0} - {@1} = {@2}$ kg. Number of sacks: ${@3} : {@4} = {@5}$.",
  "autobus": "bus",
  "autobusy": "buses",
  "banány": "bananas",
  "dag": "dag",
  "desaťtisíce": "ten thousands",
  "desaťtisícov": "ten thousands",
  "dvakrát": "twice",
  "eur": "euros",
  "eurá": "euros",
  "hrušky": "pears",
  "jahody": "strawberries",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "add the 1 you carried to the bottom digit (${@0} + 1 = {@1}$).",
  "napr. III": "e.g. III",
  "napr. XIV": "e.g. XIV",
  "napr. XX": "e.g. XX",
  "nepravda": "false",
  "obsah: 3 riadky po 4 štvorčekoch": "area: 3 rows of 4 squares",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "perimeter: 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "perimeter; area",
  "opíšeme {@0}": "copy down {@0}",
  "ostrý": "acute",
  "pravda": "true",
  "pravý": "right",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "bring down {@0}: ${@1} : {@2} = {@3}$, because ${@4}\\cdot {@5} = {@6}$, remainder {@7}",
  "píšeme {@0}": "write {@0}",
  "píšeme {@0} a 1 si pamätáme": "write {@0} and carry 1",
  "píšeme {@0} a {@1} si pamätáme": "write {@0} and carry {@1}",
  "riadky": "rows",
  "riadok": "row",
  "slivky": "plums",
  "stovka": "hundred",
  "tisíce": "thousands",
  "tisícka": "thousand",
  "tisícky": "thousands",
  "tisícok": "thousands",
  "tisícov": "thousands",
  "trikrát": "three times",
  "tričiek": "T-shirts",
  "tričká": "T-shirts",
  "tupý": "obtuse",
  "uhol": "angle",
  "všeobecný štvoruholník": "general quadrilateral",
  "všetci traja": "all three",
  "všetky tri": "all three",
  "zaplatil": "paid",
  "zaplatila": "paid",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} How many children voted altogether?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} How many children voted for {@1}?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} How many more children voted for {@1} than for {@2}?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} The quotient is ${@1}$, the remainder is {@2}. Check: ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} The result is ${@1}$. Check: ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} is less than {@1}, so ${@2} - {@3} = {@4}$, write {@5} and carry 1",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} is less than {@1}, so work out ${@2} - {@3}$. What is it?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0} has saved {@1} {@2}. {@3} has {@4} {@5} more than {@6} and {@7} has {@8} as much as {@9}. How many euros do {@10} have altogether?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0} has {@1} as much as {@2}, not as much as {@3}. Multiply the amount {@4} has.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0} {@1} {@2} {@3} at {@4} {@5} each and {@6} with a {@7}-euro note. How many euros of change did {@8} get?",
  "{@0}. Spolu {@1}.": "{@0}. Altogether {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Altogether: ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}: what is ${@1} + {@2} + 1$? (You carried the 1 from the previous column.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}: what is ${@1} + {@2}$?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}: what is ${@1}\\cdot {@2} + {@3}$? (You carried {@4} from the previous place.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}: what is ${@1}\\cdot {@2}$?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "Yes, the opposite sides of a rectangle are the same length.",
  "Áno, to je vlastnosť štvorca.": "Yes, that is a property of a square.",
  "útvar": "shape",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "Don't add the numbers straight away. First change ${@0}\\,\\text{{@1}}$ into the smaller unit $\\text{{@2}}$.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "Don't add the numbers. You find the missing addend by subtracting: subtract the known addend from the sum.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "Don't add the numbers. You find the unknown number by subtracting: subtract the difference from the number you start with.",
  "Čísla sú rovnaké.": "The numbers are equal.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "The number with more digits is bigger, so ${@0} {@1} {@2}$.",
  "čerešne": "cherries",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "A square really is a rectangle too, but we are looking for the most precise name. Check whether all the sides are the same length.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "A square has 4 right angles and equal opposite sides, so it is a special rectangle.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "A square has a perimeter of ${@0}\\,\\text{{@1}}$. How long is its side (in {@2})?",
  "Štvorec má všetky 4 uhly pravé.": "A square has all 4 angles right angles.",
  "Štvorec má všetky strany rovnako dlhé.": "A square has all its sides the same length.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "A square has all its sides the same length. Here the adjacent sides have different lengths.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "Square, rectangle, triangle and general quadrilateral",
  "Štvoruholník má 4 strany a 4 vrcholy.": "A quadrilateral has 4 sides and 4 vertices.",
  "Štyrikrát": "Four times",
  "štyrikrát": "four times",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "“… more” means add, “… times as much” means multiply. Then add everything up.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "“{@0} as much” means multiply, not add {@1}.",
  "jablká": "apples"
 }
});
