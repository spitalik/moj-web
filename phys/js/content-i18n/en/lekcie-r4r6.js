/* English: lessons of grades 4–6 (js/rocniky/r4.js, r5.js, r6.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    'r4-svetlo-tien': {
      title: 'Light, shadow and light sources',
      summary: 'You tell a light source apart from an illuminated object and explain how a shadow forms.',
      theory: [
        `<p>Light travels in straight lines. An object that sends out light itself is a <strong>light source</strong>, for example the sun, a light bulb or a candle.
       The Moon, a table or a book do not send out light. They only reflect it, and that is why we can see them.</p>`,
        `<p>When light hits an <strong>opaque</strong> object, a <strong>shadow</strong> forms behind it. Light cannot reach behind the object,
       because it cannot bend around it.</p>`,
        `<ul>
         <li>Opaque objects, for example wood or stone, stop light and cast a dark shadow.</li>
         <li>Transparent objects, for example clear glass or water, let light through. The shadow behind them is weak or missing.</li>
       </ul>`,
        `<p>The size of a shadow depends on distance. When the object moves closer to the light source, the shadow gets bigger.
       When it moves away from the source, the shadow gets smaller.</p>`,
        { fig: 'obr-tien', caption: 'A shadow forms where light cannot reach, because an opaque body blocks it.' }
      ],
      examples: [
        { task: 'Which object is a light source: a candle, a book or a tree?',
          steps: ['A light source sends out light. A book and a tree only reflect light.', 'A candle burns and sends out light.', '<strong>Result: the candle</strong>'] },
        { task: 'Why is there a shadow behind a tree on a sunny day?',
          steps: ['The sun is a light source.', 'The tree is opaque, so light cannot pass through it.', '<strong>Result: light does not reach behind the tree, so a shadow forms there.</strong>'] }
      ]
    },
    'r4-zvuk': {
      title: 'Sound and how it is made',
      summary: 'You explain that sound is made by vibrating bodies, and you tell pitch and loudness apart.',
      theory: [
        `<p>Sound is made by <strong>vibration</strong>, that is, by a body moving back and forth. When we hit a tuning fork or pluck a tight guitar string,
       the body vibrates quickly and sets the surrounding air moving.</p>`,
        `<p>The vibration reaches our ears through the air as a <strong>sound wave</strong>. Sound needs a material medium, for example air, water or a solid.
       It does not travel in a vacuum, so explosions cannot be heard in outer space.</p>`,
        `<ul>
         <li><strong>Pitch</strong> depends on the speed of vibration. Faster vibration sounds higher.</li>
         <li><strong>Loudness</strong> depends on the size of the vibrations. A larger swing sounds louder.</li>
       </ul>`,
        `<p>In air, sound travels at about $340\\,\\text{m/s}$. Light travels much faster, almost instantly.
       That is why during a storm we see the lightning first and only then hear the thunder.</p>`,
        { fig: 'r1r5-zvuk-vlna', caption: 'A higher tone has faster vibration (a shorter period). A louder sound has a larger swing, that is, a larger amplitude.' }
      ],
      examples: [
        { task: 'Why do we see lightning first and only then hear thunder during a storm?',
          steps: ['Light travels almost instantly.', 'Sound travels through air much more slowly.', '<strong>Result: the sound reaches us later than the light.</strong>'] },
        { task: 'What must a body do to make a sound?',
          steps: ['Sound is made by the vibration of a body.', '<strong>Result: the body must vibrate.</strong>'] }
      ]
    },
    'r4-magnety': {
      title: 'Magnetic properties of objects',
      summary: 'You tell apart objects that a magnet attracts from those it does not attract.',
      theory: [
        `<p>A magnet <strong>attracts</strong> objects made of iron, nickel and cobalt, for example a nail or a steel paper clip. We call such metals magnetic.
       Wood, plastic, glass and most other metals, for example copper, are not attracted by a magnet.</p>`,
        `<p>Every magnet has two <strong>poles</strong>: north and south. Opposite poles attract each other, and like poles repel each other.</p>`,
        `<p>The magnetic effect also passes through paper or a thin layer of plastic. That is why a magnet can attract a nail lying under a sheet of paper.</p>`,
        `<p>We can find out a property of an object with a simple experiment: we bring a magnet close and observe whether the object moves.</p>`,
        { fig: 'obr-magnet', caption: 'The field lines of a bar magnet leave the north pole N and enter the south pole S.' }
      ],
      examples: [
        { task: 'Which objects does a magnet attract: a nail, a rubber and a plastic ruler?',
          steps: ['The nail is made of iron, and a magnet attracts it.', 'A rubber and a plastic ruler are not attracted by a magnet.', '<strong>Result: only the nail.</strong>'] },
        { task: 'Two magnets are brought close together with opposite poles facing each other. What happens?',
          steps: ['Opposite poles attract each other.', '<strong>Result: the magnets attract each other.</strong>'] }
      ]
    },
    'r4-elektricke-zariadenia': {
      title: 'Simple electrical devices',
      summary: 'You know the parts of a simple electric circuit and what each of them does.',
      theory: [
        `<p>A simple electric circuit consists of a <strong>source</strong> (a battery), a <strong>consumer</strong> (a light bulb, a bell, a fan),
       <strong>conductors</strong> (usually copper wires) and a <strong>switch</strong>.</p>`,
        `<ul>
         <li>The source supplies electrical energy.</li>
         <li>The consumer converts electrical energy into another form, for example light, heat or motion.</li>
         <li>The switch closes or opens the circuit.</li>
       </ul>`,
        `<p>Electric current flows only in a <strong>closed</strong> circuit. If the circuit is broken, for example by an open switch, the light bulb does not light up.</p>`,
        `<p>Conductors let electric current through, for example metals. Insulators, for example plastic or rubber, do not let current through. That is why wires have a plastic coating and the handles of tools are made of rubber.</p>`,
        { fig: 'r1r5-obvod-spinac', caption: 'When the switch is open, the circuit is broken, no current flows and the light bulb does not light up.' }
      ],
      examples: [
        { task: 'Which part of the circuit supplies energy?',
          steps: ['The source supplies electrical energy, and the consumer uses it up.', '<strong>Result: the battery (the source).</strong>'] },
        { task: 'Why does the light bulb not light up after the switch is turned off?',
          steps: ['The open switch breaks the circuit.', 'Current does not flow in a broken circuit.', '<strong>Result: the bulb does not light, because no current flows.</strong>'] }
      ]
    },
    'r4-energia': {
      title: 'Energy and how it is used',
      summary: 'You recognise which other form of energy the energy changes into in common devices.',
      theory: [
        `<p><strong>Energy</strong> cannot be created from nothing or destroyed. It only changes from one form into another. The unit of energy is the joule, symbol $\\text{J}$.</p>`,
        `<ul>
         <li><strong>Electrical</strong> energy: a power socket, a battery, a charger.</li>
         <li><strong>Chemical</strong> energy: stored in a battery or in food.</li>
         <li><strong>Motion</strong> energy: a running person, a spinning fan.</li>
         <li><strong>Light</strong> energy: the sun, a light bulb, a display.</li>
         <li><strong>Heat</strong> energy: hot water, a warm radiator.</li>
         <li><strong>Sound</strong> energy: music from a speaker, a voice.</li>
       </ul>`,
        `<p>Devices usually do not convert energy into just one form. A light bulb gives off light, but most of its energy turns into heat. That is why it is hot after it is switched on.</p>`,
        `<p>A fan converts electrical energy into the motion of its blades. A loudspeaker converts electrical energy into sound.</p>`,
        { fig: 'r1r5-premeny-energie', caption: 'A fan converts electrical energy into motion, a light bulb converts it into light and heat.' }
      ],
      examples: [
        { task: 'What energy conversion does an electric fan make?',
          steps: ['The fan is a consumer of electrical energy.', 'The motor turns and the blades move.', '<strong>Result: electrical energy is converted into motion energy.</strong>'] },
        { task: 'What energy conversion does a light bulb make?',
          steps: ['The bulb receives electrical energy.', 'It gives off light and at the same time heats up.', '<strong>Result: electrical energy is converted into light and heat.</strong>'] }
      ]
    },
    'r4-bezpecnost': {
      title: 'Safe behaviour with electrical appliances',
      summary: 'You know which behaviour with electrical appliances is safe and which is not.',
      theory: [
        `<p>Electricity is useful, but it can be dangerous. Current passing through the body can cause a serious injury.
       That is why you should handle electrical equipment only as instructed by adults.</p>`,
        `<ol>
         <li>Never touch a socket or a plug with wet hands.</li>
         <li>Unplug a device by holding the plug, not the cord.</li>
         <li>If the cord is damaged or wires are exposed, do not use the device and tell an adult.</li>
       </ol>`,
        `<p>Water conducts electric current very well, so combining water and electrical appliances is very dangerous.
       Do not use a hair dryer, a charger or any other appliance in the bathroom or near water.</p>`,
        `<p>If you see a person touching a live wire, do not touch them. First call an adult or the emergency services,
       so that the current is switched off.</p>`
      ],
      examples: [
        { task: 'How do you correctly unplug an iron from the socket?',
          steps: ['Pulling the cord can damage the wires.', 'The correct way is to hold the plug and pull it out.', '<strong>Result: we pull the plug, not the cord.</strong>'] },
        { task: 'Can you charge a phone in a damp bathroom?',
          steps: ['Water conducts electric current well.', '<strong>Result: no, charging in damp conditions is not safe.</strong>'] }
      ]
    },
    'r5-vlastnosti-latok': {
      title: 'Properties of substances and bodies',
      summary: 'You tell a substance apart from a body and know the basic properties of materials.',
      theory: [
        `<p>A <strong>substance</strong> is a material that something is made of, for example wood, iron or water.
       A <strong>body</strong> is a particular object made of one or more substances, for example a table, a key or a bottle.</p>`,
        `<p>We find out the properties of substances by observing and measuring: colour, shine, hardness, elasticity, solubility in water, or whether they conduct heat and electric current.</p>`,
        `<ul>
         <li><strong>Hardness</strong>: resistance to scratching.</li>
         <li><strong>Elasticity</strong>: the ability to return to the original shape after being pressed or bent.</li>
         <li><strong>Solubility</strong>: the ability to dissolve in water. Salt dissolves, sand does not.</li>
       </ul>`,
        `<p>Bodies made of the same substance can have different shapes and sizes. However, the properties of the substance do not change: two pieces of wood have the same properties of wood.</p>`
      ],
      examples: [
        { task: 'Is a key a body or a substance?',
          steps: ['A key is a particular object.', '<strong>Result: a body, made of metal.</strong>'] },
        { task: 'Which substance dissolves in water: salt or sand?',
          steps: ['Salt dissolves in water.', 'Sand does not dissolve in water.', '<strong>Result: salt.</strong>'] }
      ]
    },
    'r5-skupenstva': {
      title: 'Solid, liquid and gaseous substances',
      summary: 'You compare solid, liquid and gaseous substances by their shape and volume.',
      theory: [
        `<p>Substances occur in three basic <strong>states</strong>: <strong>solid</strong>, <strong>liquid</strong> and <strong>gaseous</strong>.
       We tell them apart by whether they have a fixed shape and a fixed volume.</p>`,
        `<ul>
         <li><strong>A solid</strong>: fixed shape and volume, for example a stone or an ice cube.</li>
         <li><strong>A liquid</strong>: fixed volume, but its shape changes with the container, for example water in a glass.</li>
         <li><strong>A gas</strong>: neither fixed shape nor fixed volume, it fills the whole container, for example air in a balloon.</li>
       </ul>`,
        `<p>The particles of solids are close to each other, so they are hard to compress. The particles of gases are far apart, so gases can be compressed.</p>`,
        `<p><strong>Experiment:</strong> pour water into a tall glass and then into a wide glass. The water always takes the shape of the container, but its volume does not change.</p>`,
        { fig: 'r1r5-castice-skupenstva', caption: 'Solids have their particles firmly arranged, liquids have their particles close together but not in order, and gases have their particles far apart.' }
      ],
      examples: [
        { task: 'What properties does water in a glass have?',
          steps: ['Water is a liquid, it changes shape according to the container.', 'Its volume does not change.', '<strong>Result: fixed volume, changing shape.</strong>'] },
        { task: 'Why can air be pressed into a football?',
          steps: ['The particles of a gas are far apart.', '<strong>Result: when pressed, the particles come closer together.</strong>'] }
      ]
    },
    'r5-telesa': {
      title: 'Bodies and their materials',
      summary: 'You explain what bodies are made of and choose a material suitable for a given purpose.',
      theory: [
        `<p>A body is an object made of substances. Many bodies are made of several substances. Scissors have metal blades and plastic handles.</p>`,
        `<p>When making objects we choose a substance according to what we want from the object. If we need the object to be transparent, we choose glass.
       If we want the object not to heat up easily, we choose a material that conducts heat poorly.</p>`,
        `<ul>
         <li>Metals conduct heat and electric current well, so they are suitable for pots and cables.</li>
         <li>Plastics and wood conduct heat poorly, so they are suitable for pot handles.</li>
       </ul>`,
        `<p>When assessing a body, always ask yourself: what substance is it made of, and why was this particular substance chosen?</p>`
      ],
      examples: [
        { task: 'Why are the handles of pots made of plastic or wood?',
          steps: ['Plastic and wood conduct heat poorly.', '<strong>Result: the handle does not heat up as quickly as metal, so it is easy to hold.</strong>'] },
        { task: 'Is a glass a body or a substance?',
          steps: ['A glass is a particular object.', '<strong>Result: a body.</strong>'] }
      ]
    },
    'r5-hustota': {
      title: 'Mass, volume and density: basic ideas',
      summary: 'You tell mass and volume apart and calculate the density of a substance.',
      theory: [
        `<p><strong>Mass</strong> $m$ tells us how much substance a body contains. Its unit is the gram $\\text{g}$ or the kilogram $\\text{kg}$. We measure mass with scales.</p>`,
        `<p><strong>Volume</strong> $V$ is the space that a body takes up. Units are, for example, $\\text{cm}^3$ or millilitres, where $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       We measure the volume of a liquid with a measuring cylinder.</p>`,
        `<p><strong>Density</strong> $\\rho$ tells us what mass one $\\text{cm}^3$ of a substance has. We calculate it as a quotient: $\\rho = \\frac{m}{V}$.
       Density is a property of the substance, not of the body. Water has a density of about $1\\,\\text{g/cm}^3$.</p>`,
        `<ul>
         <li>A body with a higher density than water sinks, for example a stone.</li>
         <li>A body with a lower density than water floats, for example wood.</li>
       </ul>`,
        { fig: 'r1r5-hustota-voda', caption: 'A body with a higher density than water sinks (a stone), a body with a lower density floats (wood).' }
      ],
      examples: [
        { task: 'A cube has a mass of $48\\,\\text{g}$ and a volume of $16\\,\\text{cm}^3$. What is its density?',
          steps: ['$\\rho=\\frac{m}{V}=\\frac{48}{16}$', '<strong>Result: $3\\,\\text{g/cm}^3$</strong>'] },
        { task: 'A substance has a density of $2\\,\\text{g/cm}^3$, and a body made of it has a volume of $10\\,\\text{cm}^3$. What is its mass?',
          steps: ['$m=\\rho\\cdot V=2\\cdot 10$', '<strong>Result: $20\\,\\text{g}$</strong>'] }
      ]
    },
    'r5-merania': {
      title: 'Measuring length, volume and mass',
      summary: 'You read a measurement result correctly and calculate the difference between measured values.',
      theory: [
        `<p>We measure length with a ruler or a tape measure. We place the zero of the scale exactly at the start of the body and read the end.
       A common mistake is to start measuring from the number 1, not from zero.</p>`,
        `<p>We measure the volume of a liquid with a measuring cylinder. We put our eye at the level of the liquid and read the lower edge of the surface, the so-called <strong>meniscus</strong>.
       If we look from above or from below, the result is distorted.</p>`,
        `<p>We measure mass with scales. Before measuring, we zero the scales so that the mass of the container is not counted.</p>`,
        `<p>The volume of a body that sinks can be found using water: we read the water level before and after immersion. The difference of the levels is the volume of the body.</p>`,
        { fig: 'r1r5-hladina', caption: 'The volume of a submerged body is the difference between the water levels after and before immersion.' }
      ],
      examples: [
        { task: 'A stick lies on a ruler from 2 cm to 9 cm. What is its length?',
          steps: ['The length is the difference between the end and the start numbers: $9 - 2$.', '<strong>Result: 7 cm</strong>'] },
        { task: 'A measuring cylinder contains $50\\,\\text{ml}$ of water. After a cube is submerged, the level rises to $72\\,\\text{ml}$. What is the volume of the cube?',
          steps: ['The volume of the cube is the rise of the level: $72 - 50$.', '<strong>Result: $22\\,\\text{ml}$</strong>'] }
      ]
    },
    'r5-jednotky': {
      title: 'Units of physical quantities',
      summary: 'You convert units of length, mass and volume.',
      theory: [
        `<p>A physical quantity is what we measure, for example length, mass, time or temperature. Every quantity has a <strong>unit</strong>
       with which we compare it. Basic SI units are, for example, the metre $\\text{m}$, the kilogram $\\text{kg}$ and the second $\\text{s}$.</p>`,
        `<ul>
         <li>Length: $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Mass: $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Volume: $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
        `<p>Converting to a <strong>smaller</strong> unit gives a bigger number, so we multiply: $2\\,\\text{km}=2000\\,\\text{m}$.
       Converting to a <strong>bigger</strong> unit gives a smaller number, so we divide: $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
        `<p>Watch out for a common mistake: $1\\,\\text{m}$ is not $10\\,\\text{cm}$, but $100\\,\\text{cm}$.</p>`
      ],
      examples: [
        { task: 'Convert $3{,}5\\,\\text{m}$ to centimetres.',
          steps: ['A metre has 100 cm, and converting to a smaller unit means multiplying the number.', '$3{,}5\\cdot 100=350$', '<strong>Result: 350 cm</strong>'] },
        { task: 'Convert $4\\,500\\,\\text{g}$ to kilograms.',
          steps: ['A kilogram has 1000 g, and converting to a bigger unit means dividing the number.', '$4500 : 1000=4{,}5$', '<strong>Result: $4{,}5\\,\\text{kg}$</strong>'] }
      ]
    },
    'r5-teplota': {
      title: 'Temperature and measuring temperature',
      summary: 'You read temperature in degrees Celsius and calculate its changes.',
      theory: [
        `<p>We measure temperature with a <strong>thermometer</strong>. On the Celsius scale there are two fixed points: melting ice has a temperature of $0\\,{}^\\circ\\text{C}$,
       and water boils at $100\\,{}^\\circ\\text{C}$ at normal pressure.</p>`,
        `<ul>
         <li>A thermometer contains a liquid, for example alcohol, which expands when heated. We read the temperature from the length of the column.</li>
         <li>We leave the thermometer in place for at least a few minutes so that it shows the correct temperature.</li>
         <li>The thermometer must not touch the bottom of the container, because it would show the temperature of the bottom, not of the liquid.</li>
       </ul>`,
        `<p>Temperature changes. If the temperature rises, we add the change. If it falls, we subtract it. Negative temperatures are below zero,
       for example $-5\\,{}^\\circ\\text{C}$ is 5 degrees colder than melting ice.</p>`,
        { fig: 'r1r5-teplomer', caption: 'The Celsius scale has two fixed points: melting ice at 0 °C and boiling water at 100 °C. Negative temperatures are below zero.' }
      ],
      examples: [
        { task: 'In the morning it was $-4\\,{}^\\circ\\text{C}$, and by noon the temperature had risen by $9\\,{}^\\circ\\text{C}$. What is the temperature at noon?',
          steps: ['$-4+9=5$', '<strong>Result: $5\\,{}^\\circ\\text{C}$</strong>'] },
        { task: 'Water had a temperature of $20\\,{}^\\circ\\text{C}$ and was heated to $100\\,{}^\\circ\\text{C}$. By how many degrees did it warm up?',
          steps: ['$100-20=80$', '<strong>Result: by $80\\,{}^\\circ\\text{C}$</strong>'] }
      ]
    },
    'r5-pozorovanie': {
      title: 'Observation, measurement and simple experiments',
      summary: 'You plan a simple experiment, record the results and draw a conclusion.',
      theory: [
        `<p>When investigating, we proceed step by step: we observe, ask a question, state a <strong>hypothesis</strong>, carry out an experiment,
       record the results and formulate a conclusion. A hypothesis is a testable assumption, not a finished conclusion.</p>`,
        `<ol>
         <li>Decide what you want to find out.</li>
         <li>In the experiment, change only one thing at a time.</li>
         <li>Write the results into a table straight away.</li>
         <li>Repeat the experiment so that the results can be compared.</li>
       </ol>`,
        `<p>The quantity that we change is called the <strong>variable</strong>. Things that we keep the same are controlled. If we change several things at once, we cannot tell what caused the result.</p>`,
        `<p>We always write measured values with a unit, for example $25\\,\\text{cm}$, not just $25$.</p>`
      ],
      examples: [
        { task: 'You want to find out whether salt dissolves faster in warm water than in cold water. What is the variable?',
          steps: ['We change the temperature of the water.', 'We keep the amount of salt and water the same.', '<strong>Result: the variable is the temperature of the water.</strong>'] },
        { task: 'How can the accuracy of a measurement be increased?',
          steps: ['We repeat the experiment several times.', 'We average the results.', '<strong>Result: repeat the experiment and average the results.</strong>'] }
      ]
    },
    'r6-hustota': {
      title: 'Density of substances and how to calculate it',
      summary: 'What density tells us and how we calculate it from mass and volume.',
      theory: [
        `<p>Two bodies of the same size can have very different masses. A lead ball is much heavier than a wooden ball of the same volume.
       The difference is caused not by shape or size, but by the <strong>substance</strong> the body is made of. This property of a substance is described by <strong>density</strong>.</p>`,
        `<p><strong>Density</strong> shows what mass a unit of volume of a given substance has. It is denoted $\\rho$ (rho) and calculated by the formula
       $\\rho = \\frac{m}{V}$, where $m$ is the mass and $V$ the volume. So we divide the mass by the volume.</p>`,
        `<ul>
         <li>Units: $\\text{g/cm}^3$ (in practice) and $\\text{kg/m}^3$ (in SI).</li>
         <li>Conversion: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, because $1\\,\\text{g}=0{,}001\\,\\text{kg}$ and $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
        `<p>Density is a property of the substance, not of the body. All pieces of the same substance have the same density, whether they are large or small.
       It helps us tell apart substances that look similar, and later it explains why some bodies float and others sink.</p>`,
        `<p>Approximate densities: water $1\\,\\text{g/cm}^3$, oil approximately $0{,}9\\,\\text{g/cm}^3$, aluminium $2{,}7\\,\\text{g/cm}^3$, iron $7{,}8\\,\\text{g/cm}^3$.
       Wood is lighter than water, for example pine has approximately $0{,}5\\,\\text{g/cm}^3$.</p>`,
        { fig: 'r6r9-hustota', caption: 'Density shows what mass a unit of volume of a substance has. For the same volume, iron is much heavier than water.' }
      ],
      examples: [
        { task: 'A block of aluminium has a mass of $135\\,\\text{g}$ and a volume of $50\\,\\text{cm}^3$. Calculate its density.',
          steps: ['We use the formula $\\rho = \\frac{m}{V}$.', '$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$', '<strong>Result: 2.7 g/cm³</strong>'] },
        { task: 'What mass does $200\\,\\text{cm}^3$ of water have? The density of water is $1\\,\\text{g/cm}^3$.',
          steps: ['From the formula $\\rho = \\frac{m}{V}$ we get $m = \\rho\\cdot V$.', '$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$', '<strong>Result: 200 g</strong>'] }
      ]
    },
    'r6-vlastnosti': {
      title: 'Properties of liquids and gases',
      summary: 'How liquids and gases differ in shape, volume and compressibility.',
      theory: [
        `<p>Substances occur in three states: solid, liquid and gaseous. Solid bodies have a fixed shape and a fixed volume.
       <strong>Liquids</strong> have a fixed volume, but they adapt their shape to the container. <strong>Gases</strong> have neither a fixed shape nor a fixed volume: they expand and fill the whole container.</p>`,
        `<p>Why is that? The particles in a liquid are close together and held, but they can slide past each other, so a liquid flows.
       The particles of a gas are far apart and move freely, so they spread out over the whole available space.</p>`,
        `<p><strong>Compressibility:</strong> liquids practically cannot be compressed, because their particles are already close together. Gases can be compressed,
       because there is a lot of free space between their particles. Air in a bicycle pump is therefore compressed, while water in a closed container is not.</p>`,
        `<ul>
         <li><strong>Shape:</strong> a liquid adapts to the container, a gas fills the whole container.</li>
         <li><strong>Volume:</strong> a liquid has a fixed volume, the volume of a gas equals the volume of its container.</li>
         <li><strong>Compressibility:</strong> a liquid is almost incompressible, a gas can be compressed.</li>
       </ul>`,
        `<p>Liquids and gases together are called <strong>fluids</strong>. Fluids can be poured and flow, so in them we observe pressure and buoyant force.</p>`,
        { fig: 'r6r9-castice', caption: 'The particles of a solid stay in fixed places, the particles of a liquid stick together and slide past each other, and the particles of a gas move freely.' }
      ],
      examples: [
        { task: 'Explain why air in a syringe can be compressed, but water cannot.',
          steps: ['The particles of air are far apart, with free space between them.', 'The particles of water are close together, with no room to press them closer.', '<strong>Result: air is compressible, water is almost not.</strong>'] },
        { task: 'A litre of water is poured from a wide container into a tall, narrow glass. What volume does the water have now?',
          steps: ['Water changes its shape according to the container.', 'The volume of a liquid does not change when it is poured.', '<strong>Result: still 1 litre.</strong>'] }
      ]
    },
    'r6-tlak': {
      title: 'Pressure in liquids and gases',
      summary: 'Pressure as force per area, and pressure in a liquid, which grows with depth.',
      theory: [
        `<p><strong>Pressure</strong> is the force acting perpendicular to a surface, expressed per unit area. Formula: $p=\\frac{F}{S}$, where $F$ is the force in newtons
       and $S$ the area of the surface in $\\text{m}^2$. The unit of pressure is the pascal: $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
        `<p>The same force produces greater pressure on a smaller area. That is why a sharp nail easily goes into wood and a blunt one does not: on the small tip the pressure is large.</p>`,
        `<p><strong>Pressure in a liquid</strong> increases with depth. The deeper we go, the more liquid is above us, pressing on the layers below.
       Formula: $p=\\rho\\cdot g\\cdot h$, where $\\rho$ is the density of the liquid, $h$ the depth below the surface, and $g\\approx 10\\,\\text{N/kg}$ (rounded in elementary school).</p>`,
        `<p>A liquid presses on the walls of the container, on the bottom and upwards. The pressure in a liquid acts equally in all directions at the same depth.</p>`,
        `<p>A gas in a closed container also presses on the walls in all directions. When we compress the gas, its pressure rises.</p>`,
        { fig: 'obr-tlak', caption: 'Pressure in a liquid increases with depth: the deeper we go, the greater the force acting on the wall.' }
      ],
      examples: [
        { task: 'A force of $600\\,\\text{N}$ acts perpendicular to an area of $0{,}5\\,\\text{m}^2$. What pressure does it cause?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$', '$p=1200\\,\\text{Pa}$', '<strong>Result: 1200 Pa</strong>'] },
        { task: 'What is the pressure in water at a depth of $3\\,\\text{m}$? The density of water is $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.',
          steps: ['$p=\\rho\\cdot g\\cdot h$', '$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$', '<strong>Result: 30 000 Pa = 30 kPa</strong>'] }
      ]
    },
    'r6-atmosfera': {
      title: 'Atmospheric pressure',
      summary: 'Why the air presses on us and how pressure changes with altitude.',
      theory: [
        `<p>The air around the Earth has mass, and therefore it presses on us. This pressure is called <strong>atmospheric pressure</strong>. At sea level it is about $101\\,\\text{kPa}$,
       which corresponds to the weight of the air above one square metre, approximately 10 tonnes.</p>`,
        `<p>Meteorologists use the hectopascal: $1\\,\\text{hPa}=100\\,\\text{Pa}$, so $1\\,\\text{kPa}=10\\,\\text{hPa}$. Normal pressure is about $1013\\,\\text{hPa}$.
       Pressure is measured with a <strong>barometer</strong>.</p>`,
        `<p>Why can we drink through a straw? When we suck, we reduce the pressure in our mouth. Atmospheric pressure acts on the surface of the drink and pushes it up into the straw.
       So we do not suck the drink up, the air pushes it.</p>`,
        `<p>As height above sea level increases, the pressure drops, because there is less air above us. That is why air pressure falls in the mountains and water boils at a lower temperature.</p>`,
        { fig: 'r6r9-atmosfera', caption: 'The higher we go, the less air is above us, and therefore atmospheric pressure falls.' }
      ],
      examples: [
        { task: 'A barometer shows a pressure of $1013\\,\\text{hPa}$. How many kilopascals is that?',
          steps: ['$1\\,\\text{kPa}=10\\,\\text{hPa}$, so we divide the result by ten.', '$1013 : 10 = 101{,}3$', '<strong>Result: 101.3 kPa</strong>'] },
        { task: 'How does atmospheric pressure change when we climb a high mountain?',
          steps: ['There is less air above us pressing on us.', 'So the air pressure falls.', '<strong>Result: the pressure falls</strong>'] }
      ]
    },
    'r6-vztlak': {
      title: 'Buoyant force and floating of bodies',
      summary: 'Why a liquid makes bodies feel lighter and when a body floats.',
      theory: [
        `<p>A ball submerged in water rises to the surface. A liquid acts on a submerged body with a force directed upwards. This force is called the <strong>buoyant force</strong>.
       It arises because the pressure in a liquid increases with depth: the bottom surface of the body is pressed more strongly than the top one.</p>`,
        `<p><strong>Archimedes' principle:</strong> the buoyant force equals the weight of the liquid displaced by the body. Formula: $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       where $\\rho_k$ is the density of the liquid and $V_p$ the volume of the submerged part of the body.</p>`,
        `<ul>
         <li>The weight of the body is greater than the buoyant force: the body sinks.</li>
         <li>Weight and buoyant force are equal: the body hovers or floats submerged.</li>
         <li>The buoyant force is greater than the weight: the body rises and floats on the surface, with only part of it submerged.</li>
       </ul>`,
        `<p>A steel ship floats because it is large and hollow. Its average density is smaller than the density of water, so it displaces enough water to support its weight.</p>`,
        { fig: 'obr-vztlak', caption: 'The buoyant force Fvz points upwards, the weight Fg points downwards. A submerged body is lighter by the weight of the displaced liquid.' }
      ],
      examples: [
        { task: 'A cube with a volume of $1\\,\\text{dm}^3$ is fully submerged in water. Water has a density of $1\\,\\text{kg/dm}^3$. What is the buoyant force?',
          steps: ['The displaced water has a mass of $\\rho\\cdot V = 1\\,\\text{kg}$.', 'Its weight is $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.', '<strong>Result: the buoyant force is 10 N.</strong>'] },
        { task: 'A body with a mass of $3\\,\\text{kg}$ floats on water. What is the magnitude of the buoyant force?',
          steps: ['The body floats, so the buoyant force equals its weight.', '$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$', '<strong>Result: 30 N</strong>'] }
      ]
    },
    'r6-teplo': {
      title: 'Temperature, heat and heat exchange',
      summary: 'The difference between temperature and heat, and the direction in which heat flows.',
      theory: [
        `<p><strong>Temperature</strong> shows how hot a body is. It is measured in degrees Celsius (°C). The faster the particles of a substance move, the hotter the substance is.
       A thermometer must reach the temperature of its surroundings, so it shows the temperature of the surroundings.</p>`,
        `<p><strong>Heat</strong> is the energy that is transferred between bodies because of a temperature difference. The unit of heat is the joule (J).
       Heat always flows from a warmer body to a colder one, never the other way round. A refrigerator is an exception, because cooling requires work.</p>`,
        `<p><strong>Heat exchange</strong> lasts until the temperatures of the bodies even out. Then <em>thermal equilibrium</em> occurs.
       Heat is transferred in three ways: by <em>conduction</em> (a metal spoon in tea), by <em>convection</em> (liquids and gases) and by <em>radiation</em> (heat from the Sun).</p>`,
        `<p>If we mix equal amounts of water at different temperatures and neglect heat losses, the resulting temperature is the arithmetic mean of the two temperatures.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'Heat flows from a warmer body to a colder one. It is transferred by conduction, convection or radiation.' }
      ],
      examples: [
        { task: 'We mix equal amounts of water at 80 °C and 20 °C. What will the resulting temperature be?',
          steps: ['With equal amounts, the resulting temperature is the mean of the two temperatures.', '$\\frac{80+20}{2}=50$', '<strong>Result: 50 °C</strong>'] },
        { task: 'In which direction does heat flow between a cup of tea at 70 °C and air at 22 °C?',
          steps: ['Heat always flows from the warmer body to the colder one.', 'The tea has a higher temperature, so heat passes from the tea into the air.', '<strong>Result: from the tea to the surroundings</strong>'] }
      ]
    },
    'r6-skupenstva': {
      title: 'Changes of state of substances',
      summary: 'Melting, freezing, evaporation, condensation, sublimation and what happens to the particles in each.',
      theory: [
        `<p>Substances occur in solid, liquid and gaseous states. During a change of state the substance does not turn into a different substance;
       only the arrangement and motion of its particles change.</p>`,
        `<ul>
         <li><strong>Melting</strong>: solid to liquid (ice melts into water).</li>
         <li><strong>Freezing</strong>: liquid to solid (water freezes).</li>
         <li><strong>Evaporation</strong>: liquid to gas (wet laundry dries).</li>
         <li><strong>Condensation</strong>: gas to liquid (dew on the grass).</li>
         <li><strong>Sublimation</strong>: solid directly to gas (dry ice, naphthalene).</li>
         <li><strong>Desublimation</strong>: gas directly to solid (frost in the freezer).</li>
       </ul>`,
        `<p><strong>Why?</strong> During melting the substance must absorb energy so that its particles can break free from the solid arrangement. During freezing, on the other hand, energy is released.</p>`,
        `<ol>
         <li>Ice at a temperature of $-5\\,{}^\\circ\\text{C}$ first warms up to $0\\,{}^\\circ\\text{C}$ when heated.</li>
         <li>At $0\\,{}^\\circ\\text{C}$ it melts, and its temperature does not change until all of it has melted.</li>
         <li>Only then does the water warm up further.</li>
       </ol>`,
        { fig: 'obr-skupenstva', caption: 'Changes of state: melting, freezing, evaporation and condensation.' }
      ],
      examples: [
        { task: 'Water from the freezer turns into ice. What is this process called?',
          steps: ['Water changes from the liquid to the solid state.', 'The change from liquid to solid is called freezing.', '<strong>Result: freezing</strong>'] },
        { task: 'Frost forms on a cold surface directly from water vapour, without passing through the liquid. What is this process called?',
          steps: ['The vapour passes directly into the solid state.', 'The change from gas to solid is called desublimation.', '<strong>Result: desublimation</strong>'] }
      ]
    },
    'r6-var': {
      title: 'Evaporation, condensation and boiling',
      summary: 'The difference between evaporation and boiling, and why liquids cool down.',
      theory: [
        `<p><strong>Evaporation</strong> takes place on the surface of a liquid at any temperature. The fastest particles escape from the surface into the surroundings.
       Evaporation is faster at a higher temperature, over a larger surface, and in wind, which carries the vapour away.</p>`,
        `<p><strong>Evaporation cools.</strong> The fastest particles leave the liquid, so the remainder has a lower average energy.
       That is why wind cools us after a swim: water evaporates from the skin and takes away heat.</p>`,
        `<p><strong>Boiling</strong> is the change of a liquid into a gas throughout its whole volume, not only on the surface. It happens at a certain <em>boiling point</em>, which depends on pressure.
       At normal pressure water boils at 100 °C. On a high mountain the pressure is lower, so water boils at a lower temperature.</p>`,
        `<p><strong>Condensation</strong> is the opposite change: vapour turns into a liquid. During condensation heat is released into the surroundings,
       which is why a scald from steam is worse than a scald from boiling water. Dew, fog and clouds form by condensation of water vapour.</p>`,
        { fig: 'r6r9-var', caption: 'Evaporation takes place only on the surface, while boiling takes place throughout the volume of the liquid, where bubbles of vapour form.' }
      ],
      examples: [
        { task: 'Why does wet laundry dry faster in the sun and in the wind?',
          steps: ['Higher temperature and wind speed up evaporation.', 'Water particles from the laundry escape into the air more easily.', '<strong>Result: heat and wind speed up evaporation.</strong>'] },
        { task: 'Water boils at 100 °C at normal pressure. At what temperature will it boil on the top of a high mountain, where the pressure is lower?',
          steps: ['The lower the pressure, the lower the boiling point.', 'On a high mountain water boils at a temperature below 100 °C.', '<strong>Result: at a temperature lower than 100 °C</strong>'] }
      ]
    }
  }
});
