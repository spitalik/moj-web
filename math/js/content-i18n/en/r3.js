/* English: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/en/r3/ – needitovať ručne. */
CONTENT_I18N.add('en', {
 "decimal": ".",
 "lessons": {
  "r3-cisla1000": {
   "title": "Numbers to 1 000",
   "summary": "Hundreds, tens and ones, the number line and comparing three-digit numbers.",
   "theory": [
    "<p>A three-digit number has <strong>hundreds (H)</strong>, <strong>tens (T)</strong> and <strong>ones (O)</strong>.\n       The number 472 has 4 hundreds, 7 tens and 2 ones: $472 = 400 + 70 + 2$. Ten hundreds make <strong>a thousand</strong>: $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "The number line from 0 to 1 000. The number 350 lies halfway between 300 and 400, the number 720 is closer to 700."
    },
    "<p><strong>Comparing:</strong> first we compare the hundreds, if they are the same, the tens, and finally the ones.\n       $538 &gt; 497$, because 5 hundreds are more than 4. $642 &lt; 648$, because the hundreds and the tens are the same and $2 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Compare the numbers 806 and 860.",
     "steps": [
      "The hundreds are the same (8).",
      "Tens: 0 and 6, zero is less.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "Write the number that has 3 hundreds, 0 tens and 9 ones.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "We write a zero in the tens place.",
      "<strong>It is the number 309.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "Addition and subtraction to 1 000",
   "summary": "Mentally in parts and in columns on paper.",
   "theory": [
    "<p><strong>Mentally</strong> we calculate in parts: $356 + 230$ = first $356 + 200 = 556$, then $556 + 30 = 586$.\n       We calculate with whole hundreds just like with ones: $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p><strong>On paper</strong> we write the numbers in columns so that ones are under ones, tens under tens and hundreds under hundreds.\n       We work from the right: ones, tens, hundreds. If the sum in some place is more than 9, we carry the one to the place on the left.</p>",
    {
     "fig": "r3-stlpec",
     "caption": "Column addition $347 + 285 = 632$. The small ones at the top are the carried tens and hundreds."
    },
    "<p>We can always <strong>check subtraction by adding</strong>: if $632 - 285 = 347$, then $347 + 285 = 632$ must be true.</p>"
   ],
   "examples": [
    {
     "task": "Work out $468 + 275$.",
     "steps": [
      "Ones: $8 + 5 = 13$, write 3, carry 1.",
      "Tens: $6 + 7 + 1 = 14$, write 4, carry 1.",
      "Hundreds: $4 + 2 + 1 = 7$.",
      "<strong>Result: 743</strong>"
     ]
    },
    {
     "task": "Work out $700 - 340$.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "Check: $360 + 340 = 700$. <strong>Result: 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "Multiplication and division",
   "summary": "All the times tables, multiplying tens and division with remainders.",
   "theory": [
    "<p>We can find the times tables up to $10 \\cdot 10$ in a grid: the first factor is in the row, the second in the column, and the product is where they meet.\n       Division is the opposite of multiplication: from $6 \\cdot 7 = 42$ we know that $42 : 6 = 7$ and also $42 : 7 = 6$.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "The multiplication grid: row 6 and column 7 meet at the number 42, so $6 \\cdot 7 = 42$."
    },
    "<p><strong>Multiplying tens:</strong> $30 \\cdot 4$ is 3 tens times 4, so 12 tens, which is $120$.</p>",
    "<p><strong>Division with a remainder:</strong> not every division comes out exactly. $17 : 5 = 3$ <em>remainder</em> 2, because $3 \\cdot 5 = 15$\n       and 2 more are needed to make 17. The remainder must always be smaller than the divisor.</p>"
   ],
   "examples": [
    {
     "task": "Work out $8 \\cdot 7$ and $56 : 8$.",
     "steps": [
      "From the times tables: $8 \\cdot 7 = 56$.",
      "Division is the opposite of multiplication, so $56 : 8 = 7$."
     ]
    },
    {
     "task": "Divide with a remainder: $29 : 4$.",
     "steps": [
      "The largest multiple of 4 that is not greater than 29 is $7 \\cdot 4 = 28$.",
      "Remainder: $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$ remainder 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "Brackets and the order of operations",
   "summary": "What we work out first: brackets, multiplication and division, addition and subtraction.",
   "theory": [
    "<p>In a calculation with several operations, this order applies:</p>\n       <ol><li>first we work out what is in <strong>brackets</strong>,</li>\n       <li>then <strong>multiplication and division</strong>,</li>\n       <li>finally <strong>addition and subtraction</strong> (from left to right).</li></ol>",
    "<p>Compare: $2 + 3 \\cdot 4 = 2 + 12 = 14$, but $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. Brackets change the result!</p>",
    "<p>With only addition and subtraction we go from left to right: $20 - 5 - 3 = 15 - 3 = 12$. But if a part is in brackets,\n       we work it out first: $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "Work out $18 + 4 \\cdot 6$.",
     "steps": [
      "Multiplication comes first: $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>Result: 42</strong>"
     ]
    },
    {
     "task": "Work out $(15 - 7) \\cdot 3$.",
     "steps": [
      "Brackets first: $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>Result: 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "Multi-step word problems",
   "summary": "Problems solved with two or three calculations one after another.",
   "theory": [
    "<p>Some problems cannot be solved with one calculation. We go step by step: <strong>what we know</strong>,\n       <strong>what we need to find out first</strong> and <strong>what we are looking for at the end</strong>.</p>",
    "<p>Example: Mum bought 3 exercise books at 4 € each and paid with a 20 € note. How many euros did she get back?<br>\n       Step 1 – the price of the exercise books: $3 \\cdot 4 = 12$ €.<br>Step 2 – change: $20 - 12 = 8$ €.<br>Answer: Mum got 8 € back.</p>",
    "<p>We can also combine the steps into one number sentence: $20 - 3 \\cdot 4 = 20 - 12 = 8$ (multiplication comes first).\n       At the end we always check whether the answer makes sense.</p>"
   ],
   "examples": [
    {
     "task": "There were 34 people on a bus. At a stop 12 people got off and 9 people got on. How many people are on the bus now?",
     "steps": [
      "After getting off: $34 - 12 = 22$.",
      "After getting on: $22 + 9 = 31$.",
      "<strong>There are 31 people on the bus.</strong>"
     ]
    },
    {
     "task": "Emma has 2 packs of 8 stickers and 5 more loose ones. How many stickers does she have altogether?",
     "steps": [
      "In the packs: $2 \\cdot 8 = 16$.",
      "Altogether: $16 + 5 = 21$.",
      "<strong>Emma has 21 stickers.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "Perimeter of plane shapes",
   "summary": "The perimeter of a triangle, a square and a rectangle as the sum of the side lengths.",
   "theory": [
    "<p>The <strong>perimeter</strong> of a shape is the length of the line around it. We work it out by <strong>adding the lengths of all the sides</strong>.\n       We denote the perimeter by the letter $o$.</p>",
    {
     "fig": "r3-obvod",
     "caption": "A rectangle has two longer and two shorter sides, a triangle has three sides. The perimeter is the sum of all the sides."
    },
    "<p><strong>Triangle</strong> with sides $a, b, c$: $o = a + b + c$.<br>\n       <strong>Square</strong> with side $a$: $o = a + a + a + a = 4 \\cdot a$.<br>\n       <strong>Rectangle</strong> with sides $a, b$: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Work out the perimeter of a square with side $7\\,\\text{cm}$.",
     "steps": [
      "A square has 4 equal sides.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "A rectangle has sides $9\\,\\text{cm}$ and $4\\,\\text{cm}$. What is its perimeter?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "Units of length, mass, volume and time",
   "summary": "Millimetre to kilometre, gram and kilogram, litre and decilitre, second to week.",
   "theory": [
    "<p><strong>Length:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>Mass:</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>Volume:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, so $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>Time:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 day = 24 h, 1 week = 7 days.</p>",
    "<p>When converting to a <strong>smaller</strong> unit the number gets bigger (we multiply), when converting to a <strong>bigger</strong> unit it gets smaller (we divide).\n       For example $3\\,\\text{m} = 300\\,\\text{cm}$ and $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Convert $2\\,\\text{m}\\ 35\\,\\text{cm}$ to centimetres.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "A film started at 17:40 and ended at 19:10. How many minutes did it last?",
     "steps": [
      "From 17:40 to 18:00 is 20 minutes.",
      "From 18:00 to 19:00 is 60 minutes, from 19:00 to 19:10 another 10 minutes.",
      "$20 + 60 + 10 = 90$. <strong>The film lasted 90 minutes.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "Tables and simple data",
   "summary": "Reading data from a table and a bar chart, comparing and adding up.",
   "theory": [
    "<p>We often write data in a <strong>table</strong>. The first row holds the labels (for example days) and the numbers are below them.\n       An ice-cream shop wrote down how many ice creams it sold:</p>\n       <table class=\"tbl\"><tr><th>day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th></tr>\n       <tr><td>ice creams</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>We can draw the same data as a <strong>bar chart</strong>. The taller the bar, the bigger the number.</p>",
    {
     "fig": "r3-graf",
     "caption": "The tallest bar is on Friday (18), the shortest on Tuesday (8). On Friday they sold $18 - 8 = 10$ more ice creams than on Tuesday."
    },
    "<p>From the data we can find out where there is the <strong>most</strong> and the <strong>least</strong>, <strong>how much</strong> two numbers differ\n       (subtraction) and how much it is <strong>altogether</strong> (addition).</p>"
   ],
   "examples": [
    {
     "task": "How many ice creams did they sell on Monday and Wednesday altogether (see the table above)?",
     "steps": [
      "Monday 12, Wednesday 15.",
      "$12 + 15 = 27$.",
      "<strong>They sold 27 ice creams altogether.</strong>"
     ]
    },
    {
     "task": "How many more ice creams did they sell on Wednesday than on Thursday?",
     "steps": [
      "Wednesday 15, Thursday 10.",
      "$15 - 10 = 5$.",
      "<strong>On Wednesday they sold 5 more ice creams.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, so ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, so ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Check: ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Check: ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. The digit in the {@4} place is {@5}.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, then ${@2} + {@3} = {@4}$. Result: ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "Step 1 – the price: ${@0} \\cdot {@1} = {@2}$ €. Step 2 – the change: ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, write 3, carry 1",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, write 2, carry 1",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "If you can't remember, split the sum up: for example $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "Which digit does the number {@0} have in the {@1} place?",
  "Bez zátvoriek počítaj zľava doprava.": "Without brackets, work from left to right.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "Without brackets we work from the left: ${@0} - {@1} = {@2}$, then ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "Without brackets you work from left to right. First work out ${@0} - {@1}$, and only then subtract {@2}.",
  "Cesta vlakom k babke trvala 3 …": "The train journey to Grandma's took 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "You find the missing number in an addition by subtracting.",
  "Do hrnčeka sa zmestia asi 3 …": "A mug holds about 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "Fill in the missing number: $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "Fill in the correct sign: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "Fill in a suitable unit: {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "The two longer sides: what is $2 \\cdot {@0}$?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "The two shorter sides: what is $2 \\cdot {@0}$?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "Two sides of {@0} cm make $2 \\cdot {@1} = {@2}$ together. That leaves ${@3} - {@4} = {@5}$ for the other two sides, so one side is ${@6} : 2 = {@7}\\,\\text{cm}$.",
  "Dvere sú vysoké asi 2 …": "A door is about 2 … high",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "Don't add the values. 'How many more' is the difference – subtract the smaller number from the bigger one.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "Look for the smallest number (the shortest bar).",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "Look for the biggest number (the tallest bar).",
  "Hľadaj suseda v číselnom rade.": "Look for the neighbour on the number line.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "In the {@0} times table, look for the biggest multiple that still fits into {@1}. The remainder must be less than {@2}.",
  "Jablko váži asi 150 …": "An apple weighs about 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "The unit {@0} is too small here: {@1} {@2} would be far too little.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "The unit {@0} is too big here: {@1} {@2} would be far too much.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "How many centimetres do two sides of {@0} cm make together?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "How many centimetres are left for the other two sides? Work out ${@0} - {@1}$.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "How many tens did you get? Write a zero after this number.",
  "Koľko eur stál celý nákup?": "How many euros did the whole shopping cost?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "How many euros did they give back? Work out ${@0} - {@1}$.",
  "Koľko je ${@0} - {@1}$?": "What is ${@0} - {@1}$?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "How many are there in all the packets together?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "How long is one of the other sides? Work out ${@0} : 2$.",
  "Koľko minút je od {@0} do {@1}?": "How many minutes are there from {@0} to {@1}?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "How many minutes did the training last altogether? Work out ${@0} + {@1}$.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "How many saplings are left? Work out ${@0} - {@1}$.",
  "Koľko stromčekov záhradník zasadil?": "How many saplings did the gardener plant?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "How many {@0} do all three children have together? Work out ${@1} + {@2} + {@3}$.",
  "Koľko {@0} má {@1}?": "How many {@0} does {@1} have?",
  "Koľko {@0} {@1} {@2}?": "How many {@0} {@1} {@2}?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "How many people are on the bus after the others got on?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "How many people were left on the bus after some got off?",
  "Koľkokrát je {@0} v čísle {@1}?": "How many times does {@0} go into {@1}?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "How many times does {@0} {@1} go into {@2} {@3}?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "Which number is {@0} less than {@1}?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "Which number is {@0} more than {@1}?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "Which number has {@0} {@1}, {@2} {@3} and {@4} {@5}?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "What is the biggest multiple of {@0} that still fits into {@1}?",
  "Lyžička sirupu má asi 5 …": "A spoonful of syrup is about 5 …",
  "Mravec je dlhý asi 5 …": "An ant is about 5 … long",
  "Najmenšie číslo je {@0}, a to {@1}.": "The smallest number is {@0}, {@1}.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "Multiplication and division first: ${@0} \\cdot {@1} = {@2}$ and ${@3} : {@4} = {@5}$. Then ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "Multiplication first: ${@0} \\cdot {@1} = {@2}$. Then ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "First subtract the {@0}: what is ${@1} - {@2}$?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "First convert the bigger unit: ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "First convert {@0} to {@1} and then add the rest.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "First add the {@0}: what is ${@1} + {@2}$?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "First work out how many there are in all the packets.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "First work out how many saplings he planted.",
  "Najprv vypočítaj, čo je v zátvorke.": "First work out what is in the brackets.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "First find out how many each child has, and then add them all up.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "First find out how much the whole shopping cost. Then subtract it from the note.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "Brackets first: ${@0} + {@1} = {@2}$. Then ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "Brackets first: ${@0} - {@1} = {@2}$. Then ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "Brackets first: ${@0} {@1} {@2} = {@3}$. Then ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "Brackets first: what is ${@0} + {@1}$?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "Brackets first: what is ${@0} - {@1}$?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "Brackets first: what is ${@0} {@1} {@2}$?",
  "Najväčšie číslo je {@0}, a to {@1}.": "The biggest number is {@0}, {@1}.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "The biggest multiple of {@0} that is not more than {@1} is ${@2} \\cdot {@3} = {@4}$. Remainder: ${@5} - {@6} = {@7}$. So ${@8} : {@9} = {@10}$, remainder {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "You only wrote the quotient. Write the remainder after the semicolon too.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "You ignored the brackets. First add the numbers in the brackets and only then divide.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "You ignored the brackets. First work out ${@0} - {@1}$ and only then subtract it from {@2}.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "You ignored the brackets. Whatever is in the brackets comes first of all – even before multiplication.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "Find the right day and read the number next to it.",
  "Nákladné auto váži asi 8 …": "A lorry weighs about 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "Do multiplication and division before subtraction.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "Multiplication comes before addition and subtraction.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "How many more? Work out ${@0} - {@1}$.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "A rectangle and a triangle with side lengths",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "A rectangle has 4 sides: two longer and two shorter. Add them all up.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "A rectangle has a perimeter of ${@0}\\,\\text{cm}$ and one side of ${@1}\\,\\text{cm}$. How long is the other side (in cm)?",
  "Obvod rozdeľ na 4 rovnaké časti.": "Divide the perimeter into 4 equal parts.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "You only divided the perimeter into two parts. A square has four equal sides.",
  "Obvod trojuholníka je súčet jeho troch strán.": "The perimeter of a triangle is the sum of its three sides.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "The perimeter of a square is ${@0}\\,\\text{cm}$. How long is its side (in cm)?",
  "Obvod: koľko je ${@0} + {@1}$?": "Perimeter: what is ${@0} + {@1}$?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "Subtract both known sides from the perimeter and halve what is left.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "From {@0} to {@1} is {@2} minutes, and from {@3} to {@4} another {@5} minutes. Altogether ${@6} + {@7} = {@8}$ minutes.",
  "Od {@0} do {@1} je {@2} minút.": "From {@0} to {@1} is {@2} minutes.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "Subtract the hundreds, tens and ones one by one. Check the result by adding.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "You only subtracted the price of one thing. {@0} things were bought, so first work out the price of all of them.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "You only subtracted the {@0} cm side once. A rectangle has two sides like that.",
  "Pi": "Fri",
  "Platil": "He paid",
  "Platila": "She paid",
  "Po": "Mon",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "After some got off: ${@0} - {@1} = {@2}$. After others got on: ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "Tip: $5 \\cdot {@0} = {@1}$ plus {@2} more lots of {@3}, so ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "Compare from the left: first the hundreds, then the tens, then the ones.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "Then subtract the {@0}: what is ${@1} - {@2}$?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Then add the {@0}: what is ${@1} + {@2}$?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "First count the minutes up to the full hour and then the minutes after it.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "Work from the left: what is ${@0} - {@1}$?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "You worked with 100. For time, $1\\,\\text{{@0}} = {@1}$.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "You worked from left to right. Division comes before subtraction: first work out ${@0} : {@1}$.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "You worked from left to right. Multiplication comes first: first work out ${@0} \\cdot {@1}$.",
  "Predané zmrzliny": "Ice creams sold",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "The places before are the same, so the {@0} decide: {@1} and {@2}. So ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "Imagine the thing. Is it small or big? Does it take a short or a long time?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "Convert: ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "Convert: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "Pages read",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "Add the extra ones: what is ${@0} + {@1}$?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "Add the hundreds, tens and ones one by one, or work it out in columns on paper.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "Add the rest: what is ${@0} + {@1}$?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Add {@0}: what is ${@1} + {@2}$?",
  "Písomné sčítanie 347 plus 285": "Column addition 347 plus 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "The {@0} decide: {@1} and {@2}. So ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "Work with whole hundreds just like with ones: 4 hundreds + 3 hundreds = 7 hundreds.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "You are one lot of {@0} too low. Check how many times you added {@1}.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "You are one lot of {@0} too high. Check how many times you added {@1}.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "Check both sides: on the left do the brackets first, on the right the multiplication first.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "Remember how many {@0} make $1\\,\\text{{@1}}$.",
  "St": "Wed",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "Write the hundreds in the first place, the tens in the second and the ones in the third. If something is missing, write 0.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "The hundreds are the first digit from the left, the ones are the last.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "You multiplied the side by itself. The perimeter is the sum of all four sides.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "You multiplied the sides. The perimeter is the length of the line around the shape – you need to add the sides.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "The sides look similar, but the brackets change the order of working. Work out both sides separately.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "Add Monday and Tuesday: what is ${@0} + {@1}$?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "Add all the numbers. It helps to find pairs that make a round number first.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "You only added two sides. A rectangle has four sides – add each length twice.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "You added the numbers from the question. {@0} and {@1} are not what the children have, but how many more or fewer a child has. First find out how many each child has.",
  "Tabuľka násobilky do 10 krát 10": "Times table grid up to 10 times 10",
  "Taška zemiakov váži 5 …": "A bag of potatoes weighs 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "Now finish it: what is ${@0} {@1} {@2}$?",
  "Tlesknutie trvá asi 1 …": "A clap takes about 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "That is the price of the whole shopping. Now find out how many euros of change they gave back from the note.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "That is only the number in the packets. Add the {@0} extra as well.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "That is both of the other sides together. Now halve it.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "That is how many only {@0} has. The question is how many all three children have together.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "That is how many saplings the gardener planted. Now subtract the ones that dried up.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "A triangle has sides of ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ and ${@2}\\,\\text{cm}$. What is its perimeter (in cm)?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "Training started at {@0} and finished at {@1}. How many minutes did it last?",
  "Upečené koláče": "Cakes baked",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "The saplings that dried up are gone, so subtract them, don't add them.",
  "Ut": "Tue",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "There were {@0} people on a bus. At a stop, {@1} people got off and {@2} people got on. How many people are on the bus now?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "In the packets: ${@0} \\cdot {@1} = {@2}$. Altogether: ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "The ice-cream shop kept a record of how many ice creams it sold.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "In one column you subtracted the smaller digit from the bigger one, even though the bigger one was at the bottom. Then you need to borrow a ten from the next column.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "The bakery kept a record of how many cakes it baked.",
  "V piatok": "On Friday",
  "V pondelok": "On Monday",
  "V stredu": "On Wednesday",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "This day has the smallest number. We are looking for the biggest.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "This day has the biggest number. We are looking for the smallest.",
  "V utorok": "On Tuesday",
  "Vo vedre je 10 …": "There are 10 … in a bucket",
  "Vo štvrtok": "On Thursday",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "Divide with a remainder: ${@0} : {@1}$. Write the quotient and the remainder separated by a semicolon (e.g. 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "Work out $({@0} + {@1}) : {@2}$.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "Work out $({@0} {@1} {@2}) \\cdot {@3}$.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "Work out ${@0} - ({@1} - {@2})$.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "Work out ${@0} - {@1} - {@2}$.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "Work out ${@0} \\cdot {@1} - {@2} : {@3}$.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "Work out ${@0} {@1} {@2} \\cdot {@3}$.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "First work out ${@0} \\cdot {@1}$ and then write a zero after it.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "Work out both sides separately. On the left start with the brackets, on the right with the multiplication.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "Work out the perimeter of the rectangle (in cm).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "Got off → subtract. Got on → add.",
  "Vyučovacia hodina trvá 45 …": "A school lesson lasts 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "The distance between two towns is 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "Left: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Right: ${@6} + {@7} = {@8}$. So ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "You forgot the division. You don't subtract {@1} from {@0}, but the result of ${@2} : {@3}$.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "You forgot the zero in the tens place. Without it the digits move and you get a different number.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "You forgot to carry. When the sum in a column is 10 or more, write only the ones and add 1 to the next column on the left.",
  "Zabudol si pripočítať ešte ${@0}$.": "You forgot to add ${@0}$ as well.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "You only counted two sides. A square has four sides of the same length.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "Planted: ${@0} \\cdot {@1} = {@2}$. Left: ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "Find out how much two neighbouring numbers differ by.",
  "Zmení sa počet desiatok.": "The number of tens changes.",
  "Zmení sa počet stoviek.": "The number of hundreds changes.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "The sign is the wrong way round. Compare from the left – the first place where the numbers differ decides (the {@0}).",
  "Zošit je dlhý asi 30 …": "An exercise book is about 30 … long",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "Zuzka kept a record of how many pages of a book she read.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "The remainder is ${@0} - {@1}$. Write the quotient and the remainder separated by a semicolon.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "The remainder {@0} is bigger than the divisor {@1}, so {@2} goes into {@3} one more time. The remainder must always be less than the divisor.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "A gardener planted {@0} {@1} of {@2} {@3}. {@4} {@5}. How many saplings are left?",
  "balíčkov": "packets",
  "balíčky": "packets",
  "deň": "day",
  "gaštan": "chestnut",
  "gaštanov": "chestnuts",
  "gaštany": "chestnuts",
  "kartičiek": "cards",
  "kartičku": "card",
  "kartičky": "cards",
  "knihy": "books",
  "kníh": "books",
  "koláče": "cakes",
  "koláčov": "cakes",
  "lopty": "balls",
  "lôpt": "balls",
  "orech": "nut",
  "perá": "pens",
  "piatok": "Friday",
  "pier": "pens",
  "podiel; zvyšok": "quotient; remainder",
  "pondelok": "Monday",
  "predali": "did the shop sell",
  "prečítala Zuzka": "did Zuzka read",
  "radov": "rows",
  "rady": "rows",
  "stoviek": "hundreds",
  "stovku": "hundred",
  "stovky": "hundreds",
  "strany": "pages",
  "streda": "Wednesday",
  "stredu": "Wednesday",
  "stromček uschol": "sapling dried up",
  "stromčekov": "saplings",
  "stromčekov uschlo": "saplings dried up",
  "stromčeky": "saplings",
  "stromčeky uschli": "saplings dried up",
  "strán": "pages",
  "upiekli v pekárni": "did the bakery bake",
  "utorok": "Tuesday",
  "v piatok": "on Friday",
  "v pondelok": "on Monday",
  "v stredu": "on Wednesday",
  "v utorok": "on Tuesday",
  "vo štvrtok": "on Thursday",
  "zmrzliny": "ice creams",
  "zmrzlín": "ice creams",
  "zošitov": "exercise books",
  "zošity": "exercise books",
  "{@0} je v údajoch číslo {@1}.": "{@0} the data shows the number {@1}.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0} has {@1} fewer than {@2}, not than {@3}. Check whose number you are subtracting from.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0} has {@1} {@2} with {@3} {@4} in each, plus {@5} extra {@6}. How many {@7} are there altogether?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0} has {@1} {@2}. {@3} has {@4} more than {@5} and {@6} has {@7} fewer than {@8}. How many {@9} do they have altogether?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} times {@2} is {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0} {@1} {@2} {@3} at {@4} € each. {@5} with a {@6} € note. How many euros did they give back to {@7}?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Altogether: ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}How many {@1} {@2} altogether over all five days?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}How many {@1} {@2} {@3}?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}How many more {@1} {@2} {@3} than {@4}?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}On which day {@1} the fewest {@2}?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}On which day {@1} the most {@2}?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "You subtracted the times like ordinary numbers. An hour has only 60 minutes – count up to the full hour first.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "What do you work out first? Work out ${@0} \\cdot {@1}$.",
  "Číselný rad od 0 do 1000": "Number line from 0 to 1000",
  "Čísla klesajú vždy o {@0}: {@1}.": "The numbers go down by {@0} each time: {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "Don't add the numbers straight away. First convert ${@0}$ to the smaller unit $\\text{{@1}}$.",
  "Čísla rastú vždy o {@0}: {@1}.": "The numbers go up by {@0} each time: {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "You just added the numbers. {@0} lots of {@1} is multiplication.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "The number {@0} has {@1} {@2}. So what is ${@3} \\cdot {@4}$?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "We split the number {@0} into {@1}: {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "You read from the wrong end. The ones are the last digit on the right.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "You read from the wrong end. The hundreds are the first digit from the left.",
  "čokolád": "chocolate bars",
  "čokolády": "chocolate bars",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "The people who got on were added to the bus. Add their number, don't subtract it.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "The people who got off left the bus. Subtract their number, don't add it.",
  "Št": "Thu",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "A square has 4 equal sides: ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "A square has a side of ${@0}\\,\\text{cm}$. What is its perimeter (in cm)?",
  "štvrtok": "Thursday",
  "„O koľko viac“ zistíš odčítaním.": "You find 'how many more' by subtracting.",
  "rectangle": "rectangle",
  "Ice creams sold": "Ice creams sold",
  "Mon": "Mon",
  "Tue": "Tue",
  "Wed": "Wed",
  "Thu": "Thu",
  "Fri": "Fri",
  "Cakes baked": "Cakes baked",
  "Pages read": "Pages read"
 }
});
