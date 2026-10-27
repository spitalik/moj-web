/* English: grades 1–3 lessons (js/rocniky/r1.js, r2.js, r3.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    'r1-pozorovanie': {
      title: 'Observing objects and phenomena',
      summary: 'By observing, you find out the properties of objects and tell an object apart from a material.',
      theory: [
        `<p>Observing means watching something on purpose. When observing we use our <strong>senses</strong>: sight, hearing, touch, smell and taste.
       We never use taste or smell on unknown substances without an adult's permission.</p>`,
        `<p><strong>An object</strong> is something we can see and name, for example a ball, a chair or a book.
       <strong>A material</strong> is what an object is made of, for example wood, glass or plastic.</p>`,
        `<p>When we describe an object we talk about its <strong>properties</strong>: colour, shape, size, weight, hardness or whether it is shiny.
       A good description is precise and lets someone recognise the object from it.</p>`,
        `<ul>
         <li>A phenomenon is something that happens around us, for example rain, melting snow or falling leaves.</li>
         <li>When observing, we ask: what do I see, what do I hear, and what is changing?</li>
       </ul>`
      ],
      examples: [
        { task: 'Describe the properties of a ball.',
          steps: ['The ball is round and bouncy.', 'It has a bright colour and it bounces off the ground.', '<strong>Result: a round, bouncy object that bounces.</strong>'] },
        { task: 'Is wood an object or a material?',
          steps: ['Wood is not one particular shape, it is a material.', 'We can make a chair or a table from wood.', '<strong>Result: wood is a material.</strong>'] }
      ]
    },
    'r1-vlastnosti-materialov': {
      title: 'Material properties: hardness, elasticity, shape',
      summary: 'You compare materials by hardness, elasticity and whether they keep their shape.',
      theory: [
        `<p>Materials differ from each other. Two important properties are <strong>hardness</strong> and <strong>elasticity</strong>.</p>`,
        `<ul>
         <li><strong>A hard</strong> material is hard to scratch or squash, for example stone or metal.</li>
         <li><strong>A soft</strong> material can be easily cut or pressed, for example soap or soft wood.</li>
         <li><strong>An elastic</strong> material returns to its original shape after being pressed or stretched, for example rubber or a spring.</li>
       </ul>`,
        `<p><strong>The shape</strong> of some materials can be changed easily. Plasticine or clay stay in their new shape even after we let go.
       Such a material is not elastic.</p>`,
        `<p><strong>Experiment:</strong> try squeezing a rubber, a piece of plasticine and a wooden block. Write down which one returns to its original shape.</p>`,
        { fig: 'r1r5-pruznost', caption: 'An elastic rubber returns to its original shape after being squeezed, plasticine keeps its new shape.' }
      ],
      examples: [
        { task: 'Which material is harder, stone or soap?',
          steps: ['Stone is hard to cut, while soap is easy to cut.', '<strong>Result: stone is harder.</strong>'] },
        { task: 'Which material is elastic: plasticine or rubber?',
          steps: ['After being squeezed, rubber returns to its original shape.', 'Plasticine keeps its shape after being squeezed.', '<strong>Result: rubber is elastic.</strong>'] }
      ]
    },
    'r1-voda-vzduch': {
      title: 'Water, air and why they matter',
      summary: 'You describe the properties of water and air and explain why they are important for life.',
      theory: [
        `<p><strong>Water</strong> is a liquid. It has no shape of its own, it takes the shape of the container it is in. Water flows, so it is easy to pour.
       Without water, no animal or plant could survive.</p>`,
        `<p><strong>Air</strong> cannot be seen, but it is all around us. We feel it as wind or when we breathe.
       Air is important because we breathe it, and without it plants could not grow.</p>`,
        `<ul>
         <li>Water is needed for drinking, cooking, washing and for plants.</li>
         <li>We need air for breathing, and its movement creates wind.</li>
         <li>Air fills a balloon when we blow it up. The balloon gets bigger because air takes up space.</li>
       </ul>`,
        `<p><strong>Experiment:</strong> put a paper tissue into a glass, turn the glass upside down and push it into water. The tissue stays dry, because the air in the glass does not let the water in.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'A glass turned upside down and immersed in water stays dry, because the air inside takes up space and does not let the water in.' }
      ],
      examples: [
        { task: 'Why does a person need water?',
          steps: ['Water is in the body and helps it work.', 'Without water a person would not survive for long.', '<strong>Result: water is needed for life.</strong>'] },
        { task: 'What is inside an inflated balloon?',
          steps: ['The balloon was blown up, but we did not put anything into it.', 'Air is all around us, including inside the balloon.', '<strong>Result: there is air in the balloon.</strong>'] }
      ]
    },
    'r1-svetlo-tien-teplo': {
      title: 'Light, shadow and heat in everyday life',
      summary: 'You find out where light and heat come from and explain how a shadow forms.',
      theory: [
        `<p><strong>The sun</strong> gives us light and heat. Light helps us see, and heat warms us.
       A lamp and a candle also give light, and some of them also give heat.</p>`,
        `<p>When light hits an object that does not let light through, a <strong>shadow</strong> forms behind the object.
       A shadow is a dark place where the light does not reach.</p>`,
        `<ul>
         <li>Objects made of wood or stone cast a shadow.</li>
         <li>Glass and water let light pass through, so the shadow behind them is not dark.</li>
       </ul>`,
        `<p>On a hot summer day we look for the shade of a tree, because the sun does not warm us so much there. Heat reaches us mainly through the sun's rays, and the shade blocks them.</p>`,
        { fig: 'obr-tien', caption: 'A shadow forms where the light cannot reach, because an opaque object blocks it.' }
      ],
      examples: [
        { task: 'Why is there a shadow under a tree on a sunny day?',
          steps: ['The sun shines on the tree.', 'The tree is opaque, so light cannot pass through it.', '<strong>Result: a shadow forms behind the tree.</strong>'] },
        { task: 'Which object gives us both light and heat?',
          steps: ['An object that burns or shines gives light and heat.', 'The sun shines and warms us.', '<strong>Result: the sun.</strong>'] }
      ]
    },
    'r1-zmeny-prirody': {
      title: 'Observing changes in nature',
      summary: 'You describe how nature changes during the day and during the year.',
      theory: [
        `<p>Nature is constantly changing. Some changes are quick, for example rain or wind. Others are slower, for example a tree growing or the change of seasons.</p>`,
        `<ul>
         <li><strong>Spring</strong>: flowers grow, trees put out leaves, it is getting warmer.</li>
         <li><strong>Summer</strong>: it is the warmest, and the days are long.</li>
         <li><strong>Autumn</strong>: leaves turn yellow and fall, it is colder.</li>
         <li><strong>Winter</strong>: it is the coldest, snow often falls and plants are dormant.</li>
       </ul>`,
        `<p>During the day the light and the temperature change: morning is cooler, midday is the warmest, and in the evening it gets dark.
       Days and nights alternate because the Earth rotates.</p>`,
        `<p>You can record the changes in a nature diary, for example each week you write down how many leaves the tree has.</p>`,
        { fig: 'r1r5-zem-den-noc', caption: 'The Earth rotates around its axis. The side facing the Sun has day, the side facing away has night.' }
      ],
      examples: [
        { task: 'What is autumn like as a season?',
          steps: ['In autumn the leaves turn yellow and fall.', 'It is colder and the days are shorter.', '<strong>Result: autumn is the season when leaves fall.</strong>'] },
        { task: 'Why do days and nights alternate?',
          steps: ['The Earth rotates around its axis.', 'When our side faces the Sun, it is day.', '<strong>Result: the rotation of the Earth causes day and night to alternate.</strong>'] }
      ]
    },
    'r2-vlastnosti-latok': {
      title: 'Properties of substances and objects',
      summary: 'You identify the properties of substances, such as transparency, strength and the ability to conduct electricity.',
      theory: [
        `<p>Every substance has its own <strong>properties</strong>. Based on them we can choose what a certain object can be made of.
       For example, we do not make a window from wood, because wood is not transparent.</p>`,
        `<ul>
         <li><strong>A transparent</strong> substance lets light through, for example glass or clear water.</li>
         <li><strong>An opaque</strong> substance does not let light through, for example wood or stone.</li>
         <li><strong>A shiny</strong> substance reflects light, for example metal.</li>
         <li><strong>A conductor</strong> conducts electric current, for example metal. Plastic is an <strong>insulator</strong>, it does not conduct electric current.</li>
       </ul>`,
        `<p>When describing a substance we can ask: is it hard, soft, transparent, shiny, elastic? The more precisely you describe it, the easier it is to recognise.</p>`,
        `<p><strong>Experiment:</strong> in a dark room shine a torch at glass, wood and foil. Write down which substance lets the light through.</p>`,
        { fig: 'r1r5-priehladnost', caption: 'Glass lets light through, wood stops it, and metal reflects light.' }
      ],
      examples: [
        { task: 'Why are windows made of glass and not of wood?',
          steps: ['A window should be transparent, so that light passes through it.', 'Glass is transparent, wood is not.', '<strong>Result: glass is a transparent substance, so it is suitable for windows.</strong>'] },
        { task: 'Which substance conducts electric current: copper or plastic?',
          steps: ['Copper is a metal, and metals conduct current.', 'Plastic is an insulator and does not conduct current.', '<strong>Result: copper.</strong>'] }
      ]
    },
    'r2-skupenstva': {
      title: 'Solids, liquids and gases',
      summary: 'You distinguish solids, liquids and gases by their shape and volume.',
      theory: [
        `<p>Substances occur in three <strong>states of matter</strong>: solid, liquid and gas.</p>`,
        `<ul>
         <li><strong>A solid</strong> has a fixed shape and a fixed volume. An ice cube or a stone keeps its shape.</li>
         <li><strong>A liquid</strong> has a fixed volume, but its shape changes according to the container. Water in a glass has the shape of the glass.</li>
         <li><strong>A gas</strong> has neither a fixed shape nor a fixed volume. It fills the whole container it is in.</li>
       </ul>`,
        `<p>Air is a gas. When we blow up a balloon, we fill it with gas and the gas spreads through the whole balloon.</p>`,
        `<p>The state of matter can be observed. Take an ice cube, then water in a glass, and finally the air in a balloon, and compare them.</p>`,
        { fig: 'obr-skupenstva', caption: 'Changes of state: melting, solidifying, evaporation and condensation.' }
      ],
      examples: [
        { task: 'What state of matter is milk in a glass?',
          steps: ['Milk flows and takes the shape of the glass.', 'It has a fixed volume but not a fixed shape.', '<strong>Result: liquid.</strong>'] },
        { task: 'Which state of matter has a fixed shape?',
          steps: ['A solid keeps its shape.', 'Gases and liquids do not have a fixed shape.', '<strong>Result: solid.</strong>'] }
      ]
    },
    'r2-voda-vzduch': {
      title: 'Water and air',
      summary: 'By observing, you find out that air takes up space and that water flows and changes its shape.',
      theory: [
        `<p><strong>Water</strong> is a liquid. It flows, takes the shape of its container and can be poured from one container into another.
       Water can be frozen into ice and heated into steam.</p>`,
        `<p><strong>Air</strong> is a gas. Even though we cannot see it, it takes up space. That is why only a certain amount of air fits into a balloon.</p>`,
        `<ul>
         <li>Water seeps into sand and soil. Some substances dissolve in water, others do not.</li>
         <li>Air moves as wind. Wind can move leaves and turn a pinwheel.</li>
       </ul>`,
        `<p><strong>Experiment:</strong> put an empty glass upside down into a glass of water and observe whether the water gets inside. The air in the glass stops the water from entering.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'A glass turned upside down and immersed in water stays dry, because the air inside takes up space and does not let the water in.' }
      ],
      examples: [
        { task: 'Why does a glass turned upside down not fill with water?',
          steps: ['There is air in the glass.', 'Air takes up space and does not let the water in.', '<strong>Result: the air in the glass takes up space.</strong>'] },
        { task: 'What state of matter is water, and how does it behave?',
          steps: ['Water is a liquid.', 'It flows and takes the shape of its container.', '<strong>Result: water is a liquid that flows.</strong>'] }
      ]
    },
    'r2-zmeny-skupenstva': {
      title: 'State changes in everyday life',
      summary: 'You name melting, freezing, evaporation and condensation using examples from around you.',
      theory: [
        `<p>A substance can <strong>change</strong> from one state of matter to another. We see this most often with water.</p>`,
        `<ul>
         <li><strong>Melting</strong>: a solid changes into a liquid, for example ice into water when heated.</li>
         <li><strong>Freezing</strong>: a liquid changes into a solid, for example water into ice in the freezer.</li>
         <li><strong>Evaporation</strong>: a liquid changes into a gas (vapour), for example wet laundry dries.</li>
         <li><strong>Condensation</strong>: a gas (vapour) changes into a liquid, for example droplets on a cold glass.</li>
       </ul>`,
        `<p>During melting and evaporation a substance takes in heat. During freezing and condensation it gives heat away. That is why puddles cool down quickly in winter, and water dries quickly in summer.</p>`,
        { fig: 'r1r5-zmeny-voda', caption: 'Melting and evaporation require taking in heat, freezing and condensation give it away.' }
      ],
      examples: [
        { task: 'What is the name of the change when snow turns into water?',
          steps: ['Snow is a solid.', 'When it is heated, it changes into a liquid.', '<strong>Result: melting.</strong>'] },
        { task: 'What happens to wet laundry in the sun?',
          steps: ['Water from the laundry turns into vapour.', 'The vapour leaves into the air.', '<strong>Result: evaporation, the laundry dries.</strong>'] }
      ]
    },
    'r2-magnety': {
      title: 'Magnets and their effects',
      summary: 'You find out which objects a magnet attracts and describe the poles of a magnet.',
      theory: [
        `<p>A <strong>magnet</strong> attracts objects made of iron, steel and nickel. A magnet does not attract wood, plastic, paper or glass.</p>`,
        `<p>Every magnet has two <strong>poles</strong>: north and south. The strongest effect is at its ends.</p>`,
        `<ul>
         <li>Two like poles <strong>repel</strong> each other.</li>
         <li>Two unlike poles <strong>attract</strong> each other.</li>
       </ul>`,
        `<p>A magnet also acts through some substances, for example through paper or a thin layer of plastic. Through iron, however, the effect of the magnet passes with more difficulty.</p>`,
        { fig: 'obr-magnet', caption: 'Field lines of a bar magnet leave the north pole N and enter the south pole S.' }
      ],
      examples: [
        { task: 'Does a magnet attract a steel key?',
          steps: ['Steel contains iron.', 'A magnet attracts iron.', '<strong>Result: yes, a magnet attracts a steel key.</strong>'] },
        { task: 'What happens when we bring two magnets together with their north poles facing each other?',
          steps: ['Both poles are the same.', 'Like poles repel each other.', '<strong>Result: the magnets push away from each other.</strong>'] }
      ]
    },
    'r2-pokusy': {
      title: 'Simple observations and experiments',
      summary: 'You plan a simple experiment and record the observations and the conclusion.',
      theory: [
        `<p>An experiment is a way of testing our idea. First we ask a question, then we state a <strong>prediction</strong> (a hypothesis), we carry out the experiment and write down the results.</p>`,
        `<ol>
         <li><strong>Question</strong>: What do we want to find out? For example: Does sugar dissolve faster in warm or in cold water?</li>
         <li><strong>Prediction</strong>: What do we think will happen? For example: Sugar will dissolve faster in warm water.</li>
         <li><strong>Experiment and observation</strong>: We carry out the experiment and write down exactly what we see.</li>
         <li><strong>Conclusion</strong>: Did the experiment confirm our prediction? If not, it is not a problem, the result is information too.</li>
       </ol>`,
        `<p>When doing an experiment always follow the safety rules and work under the same conditions, so that the result is reliable.</p>`
      ],
      examples: [
        { task: 'What is the first step in a simple experiment?',
          steps: ['First we ask a question.', 'Then we state a prediction and carry out the experiment.', '<strong>Result: the first step is to ask a question.</strong>'] },
        { task: 'What do we write down after an experiment?',
          steps: ['We write down the observations, meaning what we saw.', 'At the end we write the conclusion.', '<strong>Result: the observations and the conclusion.</strong>'] }
      ]
    },
    'r3-latky': {
      title: 'Substances and their properties',
      summary: 'You compare substances by transparency, hardness, solubility and other properties.',
      theory: [
        `<p>Every object is made of some <strong>substance</strong>. The same substance can be found in different objects: chairs and pencils can both be made of wood.</p>`,
        `<ul>
         <li><strong>Transparency</strong>: through a transparent substance we can see, for example glass.</li>
         <li><strong>Hardness</strong>: a hard substance is hard to scratch, for example stone.</li>
         <li><strong>Solubility</strong>: a soluble substance dissolves in water and disappears, for example sugar or salt. Sand does not dissolve in water.</li>
         <li><strong>Magnetism</strong>: a magnet attracts iron and steel, not wood or plastic.</li>
       </ul>`,
        `<p>We compare the properties of substances by observing, measuring and writing down the results. For example, we can find out which substance dissolves faster.</p>`,
        `<p><strong>Experiment:</strong> put sugar, sand and a small pebble into three glasses of water. Watch where each one disappears and where it stays at the bottom.</p>`
      ],
      examples: [
        { task: 'Which substance dissolves in water: salt or sand?',
          steps: ['Salt dissolves in water and disappears.', 'Sand stays at the bottom, it does not dissolve.', '<strong>Result: salt.</strong>'] },
        { task: 'Which substance does a magnet attract: an iron nail, or a wooden stick?',
          steps: ['A magnet attracts iron.', 'A magnet does not attract wood.', '<strong>Result: the iron nail.</strong>'] }
      ]
    },
    'r3-merania': {
      title: 'Measuring length, time and temperature',
      summary: 'You choose a suitable instrument and unit and convert simple lengths.',
      theory: [
        `<p>When measuring we always find out <strong>how much</strong> of something there is, and compare it with a unit. Each quantity has its own unit and instrument.</p>`,
        `<ul>
         <li><strong>Length</strong>: we measure with a ruler or a metre stick. The units are centimetre (cm) and metre (m).</li>
         <li><strong>Time</strong>: we measure with a clock or a stopwatch. The units are second (s), minute (min) and hour (h).</li>
         <li><strong>Temperature</strong>: we measure with a thermometer. The unit is degree Celsius (°C).</li>
       </ul>`,
        `<p>One metre has <strong>100 centimetres</strong>. So when converting we multiply by a hundred: 3 m = 300 cm.</p>`,
        `<p>When measuring length, place the ruler at the start of the object and read off the end at the same level, so that the result is precise.</p>`,
        { fig: 'r1r5-pravitko', caption: 'We place the zero of the ruler at the start of the object and read off the end. The object is 7 cm long.' }
      ],
      examples: [
        { task: 'How many centimetres are 4 metres?',
          steps: ['One metre has 100 centimetres.', 'Four metres have $4 \\cdot 100 = 400$ centimetres.', '<strong>Result: 400 cm</strong>'] },
        { task: 'Which instrument would you use to measure the time of a run?',
          steps: ['Time is measured by an instrument that shows seconds and minutes.', 'A thermometer measures temperature, and a ruler measures length.', '<strong>Result: a stopwatch.</strong>'] }
      ]
    },
    'r3-teplo': {
      title: 'Heat and heating objects',
      summary: 'You explain how objects heat up and cool down, and why some of them heat up faster.',
      theory: [
        `<p><strong>Heat</strong> flows from a warmer object to a colder one. That is why cold soup in a pot warms up when we put it on the burner.</p>`,
        `<ul>
         <li><strong>Dark objects</strong> absorb more sunlight, so they heat up faster.</li>
         <li><strong>Light objects</strong> reflect more light, so they heat up more slowly.</li>
         <li><strong>Metals</strong> conduct heat quickly, so a spoon in hot soup heats up fast.</li>
       </ul>`,
        `<p>We measure heating with a thermometer. The temperature rises when an object takes in heat, and falls when it gives heat away.</p>`,
        { fig: 'r1r5-teplo-tok', caption: 'Heat passes from the warmer body to the colder one, not the other way round.' }
      ],
      examples: [
        { task: 'Which object heats up faster in the sun: a dark T-shirt or a white T-shirt?',
          steps: ['Dark objects absorb more sunlight.', 'White objects reflect the light and the heat.', '<strong>Result: the dark T-shirt heats up faster.</strong>'] },
        { task: 'Why does a metal spoon heat up quickly in hot soup?',
          steps: ['Metal conducts heat quickly.', 'Heat is transferred from the soup to the spoon.', '<strong>Result: metal conducts heat quickly.</strong>'] }
      ]
    },
    'r3-rozpustanie': {
      title: 'Dissolving substances in water',
      summary: 'You find out which substances dissolve in water and which factors speed up dissolving.',
      theory: [
        `<p><strong>Dissolving</strong> is when a substance breaks up in water into such tiny parts that we can no longer see them. The solution is then clear.</p>`,
        `<ul>
         <li><strong>Soluble</strong> substances: sugar, salt, cocoa.</li>
         <li><strong>Insoluble</strong> substances: sand, pebbles, oil (it floats on top of the water).</li>
       </ul>`,
        `<p>Dissolving goes faster when:</p>
       <ol>
         <li>the water is warm,</li>
         <li>we stir the substance,</li>
         <li>we first break the substance into smaller pieces.</li>
       </ol>`,
        `<p><strong>Experiment:</strong> put the same amount of sugar into two glasses, fill one with warm water and the other with cold water. Watch where the sugar dissolves faster.</p>`,
        { fig: 'r1r5-castice-teplota', caption: 'In warmer water the particles move faster, so the sugar dissolves faster.' }
      ],
      examples: [
        { task: 'Which substance dissolves in water: a pebble, or sugar?',
          steps: ['Sugar dissolves in water.', 'The pebble stays at the bottom.', '<strong>Result: sugar.</strong>'] },
        { task: 'Where does sugar dissolve faster: in warm or in cold water?',
          steps: ['The molecules of warm water move faster.', 'Faster-moving water dissolves the sugar sooner.', '<strong>Result: in warm water.</strong>'] }
      ]
    },
    'r3-pohyb': {
      title: 'Motion of objects and forces',
      summary: 'You describe how forces set objects in motion or stop them.',
      theory: [
        `<p>An object moves when something <strong>acts</strong> on it. This action is called a <strong>force</strong>. A force can be a push or a pull.</p>`,
        `<ul>
         <li><strong>Gravity</strong> pulls objects towards the ground. Thanks to it a ball falls down.</li>
         <li><strong>Friction</strong> acts between objects that touch each other. It slows down motion, for example of a ball on grass.</li>
         <li><strong>Magnetic force</strong> acts between a magnet and iron.</li>
       </ul>`,
        `<p>A force can set an object in motion, speed it up, slow it down, or change the direction of its motion.</p>`,
        `<p>A book lies on a table because the table pushes it upwards and gravity pulls it downwards. These two forces balance each other, so the book does not move.</p>`,
        { fig: 'r1r5-sily-stol', caption: 'The book lies on the table: the support pushes up with force N, gravity pulls down with force Fg. The forces balance.' }
      ],
      examples: [
        { task: 'Which force stops a ball rolling on grass?',
          steps: ['The grass and the ball touch and rub against each other.', 'This resistance slows the ball down.', '<strong>Result: friction.</strong>'] },
        { task: 'Why does a ball fall when we let go of it?',
          steps: ['Gravity acts on the ball.', 'It pulls the ball towards the ground.', '<strong>Result: gravity.</strong>'] }
      ]
    },
    'r3-zaznamenavanie': {
      title: 'Observing and recording experiment results',
      summary: 'You write the results of an experiment into a table and draw a conclusion from them.',
      theory: [
        `<p>When doing an experiment it is not enough just to watch. We must <strong>record</strong> the results, otherwise we would soon forget them.</p>`,
        `<ol>
         <li>We write down what we did and with what.</li>
         <li>During the experiment we record the measured values in a <strong>table</strong>.</li>
         <li>At the end we compare the results and write a <strong>conclusion</strong>.</li>
       </ol>`,
        `<p>A table has columns for the individual measurements, for example the time the sugar needs to dissolve and the temperature of the water. Thanks to the table we can see how two things are related.</p>`,
        `<p>Write precisely, not according to what you expect. If the result did not turn out as you expected, write that down too.</p>`
      ],
      examples: [
        { task: 'What is the best thing to do with the measured values during an experiment?',
          steps: ['We quickly forget the values if we do not write them down.', 'We write them into the table as soon as we measure them.', '<strong>Result: write them into the table.</strong>'] },
        { task: 'What belongs in the table for an experiment with dissolving?',
          steps: ['In the experiment we measure the time and the temperature of the water.', 'We write these values into the columns.', '<strong>Result: the dissolving time and the water temperature.</strong>'] }
      ]
    }
  }
});
