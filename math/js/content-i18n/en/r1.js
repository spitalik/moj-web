/* English: grade 1 (js/rocniky/r1.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    'r1-cisla20': {
      title: 'Numbers to 20',
      summary: 'Reading, writing and comparing numbers from 0 to 20.',
      theory: [
        `<p>We can read the numbers from 0 to 20 and write them with digits: 0 (zero), 1 (one), 2 (two) … 10 (ten) … 20 (twenty).
         The numbers from 11 to 19 have <strong>1 ten</strong> and some <strong>ones</strong>: for example $14 = 10 + 4$.</p>`,
        { fig: 'r1-rad20', caption: 'The number line from 0 to 20. The further right, the bigger the number.' },
        `<p><strong>Comparing:</strong> the sign $&lt;$ means “is less than”, the sign $&gt;$ means “is greater than” and $=$ means “is equal to”.
         The open side of the sign always faces the bigger number: $7 &lt; 12$, $15 &gt; 9$.</p>`
      ],
      examples: [
        { task: 'Compare the numbers 13 and 8.',
          steps: ['On the number line, 13 lies further right than 8.', 'So $13 &gt; 8$.'] },
        { task: 'How many tens and ones does the number 17 have?',
          steps: ['$17 = 10 + 7$.', '<strong>1 ten and 7 ones.</strong>'] }
      ]
    },
    'r1-scitanie': {
      title: 'Addition and subtraction to 20',
      summary: 'Adding and taking away, bridging through ten.',
      theory: [
        `<p><strong>Addition</strong> means putting together: $5 + 3 = 8$. The numbers we add are <em>addends</em>, the result is the <em>sum</em>.
         The order of the addends does not matter: $3 + 5 = 5 + 3$.</p>`,
        `<p><strong>Subtraction</strong> means taking away: $8 - 3 = 5$. Subtraction is the opposite of addition: if $5 + 3 = 8$, then $8 - 3 = 5$ and $8 - 5 = 3$.</p>`,
        `<p><strong>Bridging through ten:</strong> for $8 + 5$ we first make ten ($8 + 2 = 10$) and then add the rest ($10 + 3 = 13$).</p>`,
        { fig: 'r1-desiatka', caption: 'Two ten frames: 8 blue and 5 green. Two green ones fill the first ten, the other 3 go into the second: $8 + 5 = 13$.' }
      ],
      examples: [
        { task: 'Work out $8 + 5$.',
          steps: ['Make ten: $8 + 2 = 10$.', '3 of the 5 are left: $10 + 3 = 13$.', '<strong>Result: 13</strong>'] },
        { task: 'Work out $14 - 6$.',
          steps: ['First take away 4 to get to ten: $14 - 4 = 10$.', '2 of the 6 are still to take away: $10 - 2 = 8$.', '<strong>Result: 8</strong>'] }
      ]
    },
    'r1-rozklad': {
      title: 'The number line and splitting numbers',
      summary: 'Which number comes before and after, splitting a number into two parts.',
      theory: [
        `<p>The <strong>number line</strong> puts numbers in order one after another: 0, 1, 2, 3, … The number just before a given number is 1 less,
         the number just after it is 1 more.</p>`,
        `<p><strong>Splitting a number</strong> means writing it as the sum of two smaller numbers. We can split 6, for example,
         as $1 + 5$, $2 + 4$ or $3 + 3$.</p>`,
        { fig: 'r1-domcek', caption: 'The number house of 6: each floor has two numbers that make 6 together.' }
      ],
      examples: [
        { task: 'Which number comes after 15 on the number line?',
          steps: ['The number after is always 1 more.', '$15 + 1 = 16$.', '<strong>Result: 16</strong>'] },
        { task: 'Complete the split: $9 = 4 + \\square$.',
          steps: ['We look for how many are missing from 4 to 9.', '$9 - 4 = 5$.', '<strong>$9 = 4 + 5$</strong>'] }
      ]
    },
    'r1-slovne': {
      title: 'Simple word problems',
      summary: 'How to turn a story into a sum and write the answer.',
      theory: [
        `<p>We solve a word problem in steps:</p>
         <ol><li>read the problem,</li><li>find out what we know and what we are looking for,</li><li>write the number sentence,</li>
         <li>work it out,</li><li>write the answer as a full sentence.</li></ol>`,
        `<p>Words like <em>added, got, altogether, … more</em> usually mean <strong>addition</strong>.
         Words like <em>ate, gave away, left, how many more</em> usually mean <strong>subtraction</strong>.</p>`
      ],
      examples: [
        { task: 'Emma had 7 sweets and got 5 more. How many sweets does she have now?',
          steps: ['We know: she had 7 sweets and got 5. We are looking for how many she has altogether.', 'Number sentence: $7 + 5 = 12$.', '<strong>Answer: Emma has 12 sweets.</strong>'] },
        { task: 'John has 9 marbles, Mike has 4 marbles. How many more marbles does John have?',
          steps: ['We are comparing, so we take the smaller number away from the bigger one.', 'Number sentence: $9 - 4 = 5$.', '<strong>Answer: John has 5 more marbles.</strong>'] }
      ],
      strings: {
        // mená, veci podľa počtu (1 / 2–4 / 5+) a slovesá podľa rodu
        'Ema': 'Emma', 'Jano': 'John', 'Miro': 'Mike', 'Tomáš': 'Thomas',
        'jablko': 'apple', 'jablká': 'apples', 'jabĺk': 'apples',
        'cukrík': 'sweet', 'cukríky': 'sweets', 'cukríkov': 'sweets',
        'pastelku': 'crayon', 'pastelky': 'crayons', 'pasteliek': 'crayons',
        'guličku': 'marble', 'guličky': 'marbles', 'guličiek': 'marbles',
        'nálepku': 'sticker', 'nálepky': 'stickers', 'nálepiek': 'stickers',
        'mal': 'had', 'mala': 'had', 'dostal': 'got', 'dostala': 'got', 'dal': 'gave', 'dala': 'gave',
        'mu': 'does he have', 'jej': 'does she have',
        '{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?': '{@0} {@1} {@2} {@3} and {@4} {@5} more. How many {@6} does {@0} have now?',
        'Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.': 'Something is added, so we add: ${@0} + {@1} = {@2}$. {@3} has {@4} {@5}.',
        'Keď niečo pribudne, sčítavame.': 'When something is added, we add.',
        '{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?': '{@0} {@1} {@2} {@3} and {@4} {@5} {@6} to friends. How many {@7} {@8} left?',
        'Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.': 'Something is taken away, so we subtract: ${@0} - {@1} = {@2}$. There are {@4} {@5} left.',
        'Keď niečo ubudne, odčítavame.': 'When something is taken away, we subtract.',
        '{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?': '{@0} has {@1} {@2}, {@3} has {@4} {@5}. How many more {@6} does {@7} have?',
        'Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.': 'We are comparing: ${@0} - {@1} = {@2}$. {@3} has {@4} more {@5}.',
        'Otázka „o koľko viac“ sa rieši odčítaním.': 'The question “how many more” is solved by subtracting.',
        '{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?': '{@0} has {@1} {@2}. {@3} has {@4} more {@5}. How many {@6} does {@7} have?',
        '„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.': '“{@0} more” means adding {@1}: ${@2} + {@3} = {@4}$. {@5} has {@6} {@7}.',
        '„O … viac“ znamená k číslu pripočítať.': '“… more” means adding to the number.'
      }
    },
    'r1-utvary': {
      title: 'Flat shapes and solids',
      summary: 'Circle, triangle, square, rectangle and the solids around us.',
      theory: [
        `<p><strong>Flat shapes</strong> are flat, we can draw them on paper: a <strong>circle</strong>, a <strong>triangle</strong>
         (3 sides, 3 corners), a <strong>square</strong> (4 sides of the same length) and a <strong>rectangle</strong> (4 sides, opposite sides have the same length).</p>`,
        { fig: 'r1-rovinne', caption: 'Flat shapes.' },
        `<p><strong>Solid shapes (solids)</strong> can be held in our hands: a <strong>cube</strong> (a dice), a <strong>cuboid</strong> (a box),
         a <strong>sphere</strong> (a ball), a <strong>cylinder</strong> (a tin) and a <strong>cone</strong> (an ice-cream cone).</p>`,
        { fig: 'r1-telesa', caption: 'Solid shapes. The dashed line shows an edge at the back.' }
      ],
      examples: [
        { task: 'How many corners does a triangle have, and how many does a square have?',
          steps: ['A corner (vertex) is where two sides meet.', 'A triangle has 3 corners, a square has 4 corners.'] },
        { task: 'Which solid does a ball look like?',
          steps: ['A ball is round on all sides.', '<strong>A ball has the shape of a sphere.</strong>'] }
      ]
    },
    'r1-meranie': {
      title: 'Position and measuring',
      summary: 'Left, right, between; comparing and measuring length.',
      theory: [
        `<p><strong>Position:</strong> we use the words left – right, up – down, in front of – behind, next to and between.
         In the row 🐶 🐱 🐰 the cat is <em>between</em> the dog and the rabbit, and the dog is to the <em>left</em> of the cat.</p>`,
        `<p><strong>Measuring length:</strong> we can measure length in steps, hand spans or cubes. We measure more precisely with a ruler,
         in centimetres (cm). When comparing we say longer – shorter, taller – lower.</p>`,
        { fig: 'r1-meranie', caption: 'The pencil measures 7 cubes, the eraser 3 cubes. The pencil is 4 cubes longer.' }
      ],
      examples: [
        { task: 'In the row 🍎 🍐 🍌 🍇, which fruit is just to the right of the pear?',
          steps: ['The pear 🍐 is second from the left.', 'Just to the right of it is the banana 🍌.'] },
        { task: 'One ribbon is 9 cm long, the other 5 cm. How much longer is the first ribbon?',
          steps: ['We are comparing, so we subtract: $9 - 5 = 4$.', '<strong>The first ribbon is 4 cm longer.</strong>'] }
      ],
      // zvieratá vo všetkých pádoch (nominatív, genitív, inštrumentál) a kocky podľa počtu
      strings: {
        'pes': 'dog', 'psa': 'dog', 'psom': 'dog',
        'mačka': 'cat', 'mačky': 'cat', 'mačkou': 'cat',
        'zajac': 'rabbit', 'zajaca': 'rabbit', 'zajacom': 'rabbit',
        'medveď': 'bear', 'medveďa': 'bear', 'medveďom': 'bear',
        'líška': 'fox', 'líšky': 'fox', 'líškou': 'fox',
        'žaba': 'frog', 'žaby': 'frog', 'žabou': 'frog',
        'myš': 'mouse', 'myši': 'mouse', 'myšou': 'mouse',
        'kocku': 'cube', 'kocky': 'cubes', 'kociek': 'cubes'
      }
    }
  },
  strings: {
    // obrázky
    'Číselný rad od 0 do 20': 'Number line from 0 to 20',
    'Desiatkové rámčeky: 8 plus 5': 'Ten frames: 8 plus 5',
    'Domček rozkladu čísla 6': 'Number house of 6',
    'Rovinné útvary': 'Flat shapes',
    'Priestorové útvary': 'Solid shapes',
    'Meranie kockami': 'Measuring with cubes',
    'ceruzka': 'pencil',
    'guma': 'eraser',
    'kruh': 'circle', 'trojuholník': 'triangle', 'štvorec': 'square', 'obdĺžnik': 'rectangle',
    'kocka': 'cube', 'kváder': 'cuboid', 'guľa': 'sphere', 'valec': 'cylinder', 'kužeľ': 'cone',

    // r1-cisla20
    'Doplň správny znak: ${@0} \\;\\square\\; {@1}$': 'Fill in the correct sign: ${@0} \\;\\square\\; {@1}$',
    'Čísla sú rovnaké, preto ${@0} = {@1}$.': 'The numbers are the same, so ${@0} = {@1}$.',
    'Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.': 'The number {@0} lies further right on the number line, so it is bigger. That is why ${@1} {@2} {@3}$.',
    'Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.': 'The bigger number lies further right on the number line. The open side of the sign faces the bigger number.',
    'Koľko {@0} má číslo {@1}?': 'How many {@0} does the number {@1} have?',
    'jednotka': 'one', 'jednotky': 'ones', 'jednotiek': 'ones',
    'desiatka': 'ten', 'desiatky': 'tens', 'desiatok': 'tens',
    '${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.': '${@0} = {@1} + {@2}$, so {@3} {@4} and {@5} {@6}.',
    'Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.': 'Split the number into tens and ones, for example $14 = 10 + 4$.',
    'Ktoré číslo je o 1 {@0} ako {@1}?': 'Which number is 1 {@0} than {@1}?',
    'väčšie': 'more', 'menšie': 'less',
    '{@0} číslom {@1} je v číselnom rade číslo {@2}.': '{@0} {@1} on the number line comes {@2}.',
    'Hneď za': 'Right after', 'Hneď pred': 'Right before',
    'Na číselnom rade sa posuň o jedno miesto doprava.': 'Move one place to the right on the number line.',
    'Na číselnom rade sa posuň o jedno miesto doľava.': 'Move one place to the left on the number line.',

    // r1-scitanie
    'Vypočítaj ${@0} + {@1}$.': 'Work out ${@0} + {@1}$.',
    'Vypočítaj ${@0} - {@1}$.': 'Work out ${@0} - {@1}$.',
    'Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.': 'Make ten: ${@0} + {@1} = 10$, then $10 + {@2} = {@3}$.',
    'Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.': 'First take away down to ten: ${@0} - {@1} = 10$, then $10 - {@2} = {@3}$.',
    'Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.': 'If you go past 10, first make ten and then add the rest.',
    'Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?': 'Subtraction is the opposite of addition: how many do you have to add to {@0} to get {@1}?',
    'Doplň chýbajúce číslo: ${@0} + \\square = {@1}$': 'Fill in the missing number: ${@0} + \\square = {@1}$',
    'Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.': 'We look for how many are missing from {@0} to {@1}: ${@2} - {@3} = {@4}$.',
    'Chýbajúce číslo zistíš odčítaním.': 'You find the missing number by subtracting.',

    // r1-rozklad
    'Rozlož číslo {@0}: ${@1} = {@2} + \\square$': 'Split the number {@0}: ${@1} = {@2} + \\square$',
    '${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.': '${@0} - {@1} = {@2}$, so ${@3} = {@4} + {@5}$.',
    'Koľko chýba od {@0} do {@1}?': 'How many are missing from {@0} to {@1}?',
    'Doplň číslo, ktoré chýba v číselnom rade: {@0}': 'Fill in the number missing from the sequence: {@0}',
    'Čísla {@0} vždy o 1: {@1}.': 'The numbers {@0} by 1 each time: {@1}.',
    'rastú': 'go up', 'klesajú': 'go down',
    'Zisti, či čísla rastú alebo klesajú, a o koľko.': 'Find out whether the numbers go up or down, and by how much.',
    'Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?': 'Which number lies between {@0} and {@1} on the number line?',
    'Za číslom {@0} nasleduje {@1} a za ním {@2}.': 'After {@0} comes {@1}, and after that {@2}.',
    'Hľadaj číslo, ktoré je o 1 väčšie ako prvé.': 'Look for the number that is 1 more than the first one.',

    // r1-utvary
    'Ako sa volá {@0}?': 'What is {@0} called?',
    'toto teleso': 'this solid', 'tento útvar': 'this shape',
    'obrázok útvaru': 'picture of a shape',
    'Na obrázku je {@0}.': 'The picture shows a {@0}.',
    'Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.': 'Think of a ball, a tin, a box, a dice or an ice-cream cone.',
    'Spočítaj strany a vrcholy útvaru.': 'Count the sides and corners of the shape.',
    'Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.': 'A corner (vertex) is a point of the shape, a side is the line between two corners.',
    'Koľko vrcholov má trojuholník?': 'How many corners does a triangle have?',
    'Trojuholník má 3 vrcholy a 3 strany.': 'A triangle has 3 corners and 3 sides.',
    'Koľko strán má trojuholník?': 'How many sides does a triangle have?',
    'Trojuholník má 3 strany.': 'A triangle has 3 sides.',
    'Koľko strán má štvorec?': 'How many sides does a square have?',
    'Štvorec má 4 rovnako dlhé strany.': 'A square has 4 sides of the same length.',
    'Koľko vrcholov má obdĺžnik?': 'How many corners does a rectangle have?',
    'Obdĺžnik má 4 vrcholy.': 'A rectangle has 4 corners.',
    'Koľko stien má kocka?': 'How many faces does a cube have?',
    'Kocka má 6 stien a každá stena je štvorec.': 'A cube has 6 faces and each face is a square.',
    'Koľko vrcholov má kocka?': 'How many corners does a cube have?',
    'Kocka má 8 vrcholov: 4 hore a 4 dole.': 'A cube has 8 corners: 4 at the top and 4 at the bottom.',
    'Koľko vrcholov má kruh?': 'How many corners does a circle have?',
    'Kruh nemá žiadne vrcholy, jeho okraj je oblý.': 'A circle has no corners, its edge is round.',

    // r1-meranie
    'Vľavo je začiatok radu, vpravo jeho koniec.': 'The left is the start of the row, the right is its end.',
    'Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?': 'The animals are standing in a row: {@0} Who is standing just to the right of the {@1}?',
    'Hneď vpravo od {@0} stojí {@1}.': 'Just to the right of the {@0} is the {@1}.',
    'Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?': 'The animals are standing in a row: {@0} Who is standing just to the left of the {@1}?',
    'Hneď vľavo od {@0} stojí {@1}.': 'Just to the left of the {@0} is the {@1}.',
    'Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?': 'The animals are standing in a row: {@0} Who is standing between the {@1} and the {@2}?',
    'Medzi {@0} a {@1} stojí {@2}.': 'Between the {@0} and the {@1} is the {@2}.',
    'O koľko kociek je modrý pás dlhší ako zelený? {@0}': 'How many cubes longer is the blue strip than the green one? {@0}',
    'Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.': 'The blue strip has {@0} {@1}, the green one {@2}. ${@3} - {@4} = {@5}$.',
    'Spočítaj kocky v oboch pásoch a odčítaj.': 'Count the cubes in both strips and subtract.',
    'modrý': 'blue', 'zelený': 'green',
    'dva pásy z kociek': 'two strips of cubes',
    'Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?': 'The red ribbon is {@0} cm long, the blue one {@1} cm. How many centimetres longer is the red ribbon?',
    '${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.': '${@0} - {@1} = {@2}$, the red ribbon is {@3} cm longer.',
    'Rozdiel dĺžok zistíš odčítaním.': 'You find the difference in length by subtracting.'
  }
});
