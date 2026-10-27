/* English: lessons of grades 1–4 of secondary school (js/rocniky/s1.js, s2.js, s3.js, s4.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    's1-veliciny': {
      title: 'Physical quantities, units and measurement',
      summary: 'Number and unit, the SI system, prefixes and unit conversions.',
      theory: [
        `<p>A physical quantity is a property of a body or a phenomenon that we can <strong>measure</strong> and express as a number with a unit. For example, length $s = 12\\,\\text{m}$: the number $12$ tells us how many times we used the unit, and $\\text{m}$ tells us which unit we used. A value without a unit has no meaning.</p>`,
        `<p>The International System of Units (SI) has seven base units. For this grade these are enough: metre $\\text{m}$ (length), kilogram $\\text{kg}$ (mass), second $\\text{s}$ (time) and kelvin $\\text{K}$ (temperature). Derived units are built by combining base units: speed has the unit $\\text{m/s}$ and force $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$.</p>`,
        `<p><strong>Prefixes</strong> shorten the notation of very large and very small numbers. For example $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ and $1\\,\\text{g}=10^{-3}\\,\\text{kg}$. When converting, it is enough to know how many times the new unit is larger or smaller, and then multiply or divide accordingly.</p>`,
        `<p>Every measurement has an <strong>error</strong>, so we write the result with an appropriate number of significant digits and always state the unit. The notation $s = 12{,}0\\,\\text{m}$ says more than $s = 12\\,\\text{m}$, because it implies precision to the tenth of a metre.</p>`
      ],
      examples: [
        { task: 'Convert $3{,}5\\,\\text{km}$ to metres.',
          steps: ['The prefix k means thousand, so $1\\,\\text{km}=10^3\\,\\text{m}$.', '$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.', '<strong>Result: 3500 m</strong>'] },
        { task: 'How many seconds are in $2\\,\\text{h}$?',
          steps: ['One hour has $60\\,\\text{min}$ and one minute has $60\\,\\text{s}$.', 'One hour therefore has $60\\cdot 60=3600\\,\\text{s}$.', '$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.', '<strong>Result: 7200 s</strong>'] }
      ]
    },
    's1-pohyb': {
      title: 'Uniform and non-uniform motion',
      summary: 'Distance, time and speed; average speed when the motion changes.',
      theory: [
        `<p>We describe the motion of a body relative to some <strong>reference body</strong>. The distance $s$ is the length of the path the body has travelled, and the time $t$ is the duration of the motion. <strong>Average speed</strong> is the ratio of distance to time: $\\bar v=\\frac{s}{t}$, unit $\\text{m/s}$ or $\\text{km/h}$.</p>`,
        `<p><strong>Uniform motion</strong> is motion with a constant speed. In equal times the body covers equal distances, so $s=v\\,t$ holds. In a distance-time graph it is a straight line.</p>`,
        `<p><strong>Non-uniform motion</strong> means that the speed changes. The average speed of the whole journey is not the arithmetic mean of the speeds, but the total distance divided by the total time: $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
        `<p><strong>Why is it so?</strong> If we drive for 2 hours at $60\\,\\text{km/h}$ and then for 1 hour at $30\\,\\text{km/h}$, we cover $120+30=150\\,\\text{km}$ in $3$ hours. The mean of the speeds would give $45\\,\\text{km/h}$, but the real average speed is $50\\,\\text{km/h}$, because we travelled faster for longer.</p>`,
        { fig: "s1s4-priemerna-rychlost", caption: "The area under the v–t graph is the distance. Average speed is the total distance divided by the total time, not the mean of the speeds." }
      ],
      examples: [
        { task: 'A car covers $120\\,\\text{km}$ in $2\\,\\text{h}$. What is its average speed?',
          steps: ['$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.', '<strong>Result: 60 km/h</strong>'] },
        { task: 'A cyclist rides for $2\\,\\text{h}$ at $20\\,\\text{km/h}$ and then for $2\\,\\text{h}$ at $10\\,\\text{km/h}$. What is the average speed?',
          steps: ['First section: $s_1=20\\cdot 2=40\\,\\text{km}$, second: $s_2=10\\cdot 2=20\\,\\text{km}$.', 'In total $60\\,\\text{km}$ in $4\\,\\text{h}$.', '<strong>Result: 15 km/h</strong>'] }
      ]
    },
    's1-zrychlenie': {
      title: 'Speed and acceleration',
      summary: 'Change of speed over time and uniformly accelerated motion.',
      theory: [
        `<p><strong>Acceleration</strong> is the change of speed per unit time: $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. Its unit is $\\text{m/s}^2$. If the speed increases by $2\\,\\text{m/s}$ every second, the acceleration is $2\\,\\text{m/s}^2$.</p>`,
        `<p>Acceleration is not only speeding up. Positive $a$ means that the speed increases, negative $a$ means braking. Acceleration also occurs when the direction of motion changes while the magnitude of the speed stays the same, for example when moving along a circle.</p>`,
        `<p>In <strong>uniformly accelerated motion</strong> the speed grows in proportion to time: $v=v_0+a\\,t$. The average speed is $\\frac{v_0+v}{2}$, therefore the distance is $s=v_0\\,t+\\frac{1}{2}a\\,t^2$. The term with $\\frac{1}{2}$ is important, because the speed keeps changing during the trip.</p>`,
        `<p>In free fall near the surface of the Earth the acceleration points downwards and has a magnitude of about $g\\approx 9{,}81\\,\\text{m/s}^2$. A body falling from rest increases its speed by about $9{,}81\\,\\text{m/s}$ every second.</p>`,
        { fig: "s1s4-v-t-zrychlenie", caption: "The slope of the v–t graph is the acceleration, and the area under the graph is the distance. For uniformly accelerated motion the graph is a straight line." }
      ],
      examples: [
        { task: 'A car speeds up from rest to $20\\,\\text{m/s}$ in $5\\,\\text{s}$. What is its acceleration?',
          steps: ['$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.', '<strong>Result: 4 m/s²</strong>'] },
        { task: 'A body has a speed of $2\\,\\text{m/s}$ and an acceleration of $3\\,\\text{m/s}^2$. What will its speed be after $4\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=2+3\\cdot 4$.', '<strong>Result: 14 m/s</strong>'] }
      ]
    },
    's1-newton': {
      title: `Newton's laws of motion`,
      summary: 'Inertia, the relation F = m·a and the principle of action and reaction.',
      theory: [
        `<p><strong>Newton's first law (inertia):</strong> a body stays at rest or in uniform straight-line motion unless a force acts on it, or if the resultant of all forces is zero. That is why, when a bus brakes suddenly, the passengers lurch forward: their bodies want to keep moving.</p>`,
        `<p><strong>Newton's second law:</strong> the resultant force gives the body an acceleration that is directly proportional to the force and inversely proportional to the mass: $F=m\\,a$. The unit of force is the newton, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. With the same force, a heavier body speeds up more slowly.</p>`,
        `<p><strong>Newton's third law (action and reaction):</strong> if body A acts on body B with a force, body B acts on A with a force of the same magnitude and opposite direction. These forces act on <em>different</em> bodies, so they are never subtracted from each other. A horse pulls a cart and the cart pulls the horse back.</p>`,
        `<p><strong>Resultant</strong> of several forces on one line: forces in the same direction add up, forces in opposite directions subtract. The resulting acceleration points in the direction of the resultant.</p>`,
        { fig: "s1s4-akcia-reakcia", caption: "Action and reaction forces have the same magnitude and opposite directions, but they act on different bodies, so they are not subtracted." }
      ],
      examples: [
        { task: 'A body of mass $4\\,\\text{kg}$ moves with an acceleration of $3\\,\\text{m/s}^2$. What is the resultant force acting on it?',
          steps: ['$F=m\\,a=4\\cdot 3$.', '<strong>Result: 12 N</strong>'] },
        { task: 'Two forces of $7\\,\\text{N}$ and $3\\,\\text{N}$ act on a body in opposite directions. What is their resultant?',
          steps: ['The forces point in opposite directions, so they subtract: $7-3=4$.', '<strong>Result: 4 N in the direction of the larger force</strong>'] }
      ]
    },
    's1-gravitacia': {
      title: 'Gravitational force and weight',
      summary: 'Mass and weight, gravitational acceleration on Earth and on the Moon.',
      theory: [
        `<p><strong>Gravitational force</strong> is the attractive force between all bodies. The heavier the bodies and the closer they are, the greater the force. For bodies on the surface of the Earth we observe it as <strong>weight</strong>.</p>`,
        `<p><strong>Weight</strong> is the force with which the Earth attracts a body: $F_g=m\\,g$, where $g\\approx 9{,}81\\,\\text{m/s}^2$ is the gravitational acceleration. The mass $m$ in kilograms is a property of the body and does not change. Weight in newtons depends on the place: on the Moon, where $g\\approx 1{,}62\\,\\text{m/s}^2$, it is about six times smaller.</p>`,
        `<p><strong>Why do all bodies fall equally fast?</strong> Weight is proportional to mass, and so is inertia. The acceleration $a=\\frac{F_g}{m}=g$ therefore does not depend on the mass. In a fall without air resistance, a stone and a grain of pollen fall equally fast.</p>`,
        `<p>Do not confuse the terms: <strong>mass</strong> is measured in kilograms and is the amount of matter in a body, <strong>weight</strong> is a force and is measured in newtons.</p>`,
        { fig: "s1s4-tiaz-zem-mesiac", caption: "The same mass has about six times smaller weight on the Moon, because the gravitational acceleration there is smaller." }
      ],
      examples: [
        { task: 'What is the weight of a body with mass $5\\,\\text{kg}$ on Earth?',
          steps: ['$F_g=m\\,g=5\\cdot 9{,}81$.', '<strong>Result: approximately 49.1 N</strong>'] },
        { task: 'What is the weight of the same body on the Moon, where $g\\approx 1{,}62\\,\\text{m/s}^2$? What is its mass?',
          steps: ['$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.', 'The mass does not change, it stays $5\\,\\text{kg}$.', '<strong>Result: 8.1 N, mass 5 kg</strong>'] }
      ]
    },
    's1-praca-energia': {
      title: 'Work, power and energy',
      summary: 'Mechanical work, power and kinetic energy of a body.',
      theory: [
        `<p><strong>Mechanical work</strong> is the energy transferred by a force when a body is displaced. If the force points in the direction of motion, it is calculated as $W=F\\,s$. The unit is the joule, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. The same work can be done by a large force over a short distance or by a small force over a long distance.</p>`,
        `<p><strong>Power</strong> tells how quickly work is done: $P=\\frac{W}{t}$. The unit is the watt, $1\\,\\text{W}=1\\,\\text{J/s}$. Two motors can do the same work, but the one with the greater power does it in a shorter time.</p>`,
        `<p><strong>Kinetic energy</strong> is the energy of motion: $E_k=\\frac{1}{2}m\\,v^2$. It depends on the square of the speed, so twice the speed means four times the energy. That is why the braking distance of a car is much longer at higher speed.</p>`,
        `<p>Work and energy are connected: work done on a body changes its energy. If $W$ is positive, the energy of the body increases.</p>`,
        { fig: "obr-energia", caption: "When sliding without friction, potential energy is converted into kinetic energy and back." }
      ],
      examples: [
        { task: 'A force of $50\\,\\text{N}$ moves a trolley by $4\\,\\text{m}$ in the direction of the force. What work is done?',
          steps: ['$W=F\\,s=50\\cdot 4$.', '<strong>Result: 200 J</strong>'] },
        { task: 'A body of mass $2\\,\\text{kg}$ moves with a speed of $3\\,\\text{m/s}$. What is its kinetic energy?',
          steps: ['$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.', '<strong>Result: 9 J</strong>'] }
      ]
    },
    's1-zakony-zachovania': {
      title: 'Conservation laws for energy and momentum',
      summary: 'Momentum of a body and the conversion of potential energy into kinetic energy.',
      theory: [
        `<p>The <strong>momentum</strong> of a body is the product of its mass and velocity: $p=m\\,v$, unit $\\text{kg\\,m/s}$. Momentum is a vector, so it has the direction of the velocity. A heavier body with the same speed has greater momentum, so it is harder to stop.</p>`,
        `<p><strong>Law of conservation of momentum:</strong> if no external forces act on a system, the total momentum of the bodies in it does not change. Two skaters who push off from each other move in opposite directions. The lighter skater gets the greater speed, because the sum of their momenta must remain zero.</p>`,
        `<p><strong>Law of conservation of mechanical energy:</strong> if friction and the resistance of the medium are absent, the sum of kinetic and potential energy $E_k+E_p$ does not change. In free fall the potential energy $E_p=m\\,g\\,h$ is converted into kinetic energy $\\frac{1}{2}m\\,v^2$. Hence $v=\\sqrt{2gh}$: the speed does not depend on the mass.</p>`,
        `<p>In reality, friction and air resistance convert part of the mechanical energy into heat. The mechanical energy then decreases, but the total energy of the system remains conserved.</p>`,
        { fig: "s1s4-hybnost", caption: "The sum of the momenta of the system stays zero: the lighter body moves faster, the heavier one more slowly." }
      ],
      examples: [
        { task: 'A bullet of mass $0{,}01\\,\\text{kg}$ flies with a speed of $500\\,\\text{m/s}$. What is its momentum?',
          steps: ['$p=m\\,v=0{,}01\\cdot 500$.', '<strong>Result: 5 kg·m/s</strong>'] },
        { task: 'A body falls from rest from a height of $5\\,\\text{m}$ without air resistance. With what speed does it hit the ground? Use $g=10\\,\\text{m/s}^2$.',
          steps: ['$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, so $v^2=2gh=2\\cdot 10\\cdot 5=100$.', '<strong>Result: v = 10 m/s</strong>'] }
      ]
    },
    's1-tlak': {
      title: 'Pressure, properties of liquids and gases',
      summary: 'Pressure of solids, hydrostatic pressure and Pascal law.',
      theory: [
        `<p><strong>Pressure</strong> is the ratio of the force perpendicular to a surface to the area of that surface: $p=\\frac{F}{S}$. The unit is the pascal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. We press harder with a sharp tip, because the same force acts on a smaller area.</p>`,
        `<p><strong>Hydrostatic pressure</strong> in a liquid increases with depth: $p=\\rho\\,g\\,h$, where $\\rho$ is the density of the liquid (water $1000\\,\\text{kg/m}^3$) and $h$ is the depth below the surface. This pressure does not depend on the shape of the vessel, only on the depth and density.</p>`,
        `<p><strong>Pascal's law:</strong> pressure applied to an enclosed liquid is transmitted unchanged to every part of the liquid. That is why a hydraulic press can lift a car: a small force on a small piston creates a pressure that acts on a large piston with a larger force.</p>`,
        `<p><strong>Gases</strong> exert pressure by the impacts of molecules on the walls of the container. Atmospheric pressure at sea level is about $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$ and it decreases with increasing altitude.</p>`,
        { fig: "obr-tlak", caption: "Pressure in a liquid increases with depth: the deeper the body, the greater the force acting on the wall." }
      ],
      examples: [
        { task: 'A block with a weight of $600\\,\\text{N}$ stands on a floor with an area of $0{,}5\\,\\text{m}^2$. What pressure does it exert?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.', '<strong>Result: 1200 Pa</strong>'] },
        { task: 'What is the hydrostatic pressure of water at a depth of $3\\,\\text{m}$? Use $\\rho=1000\\,\\text{kg/m}^3$ and $g=10\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.', '<strong>Result: 30 kPa</strong>'] }
      ]
    },
    's2-molekuly': {
      title: 'Molecular structure of matter',
      summary: 'Particles of matter, amount of substance and molar mass.',
      theory: [
        `<p>Every substance is made of very small particles: atoms or molecules. They are in constant disordered motion and act on each other with attractive and repulsive forces. These forces determine whether the substance is solid, liquid or gaseous.</p>`,
        `<p>Evidence of molecular motion is the <strong>Brownian motion</strong>: tiny particles suspended in a liquid tremble irregularly, because molecules of the liquid hit them from all sides. We cannot see the motion of the molecules themselves, but we can see its consequences.</p>`,
        `<p>The amount of substance is given in moles. One mole contains $N_A\\approx 6{,}02\\cdot 10^{23}$ particles (the Avogadro constant). The <strong>molar mass</strong> $M$ is the mass of one mole, in grams per mole. For example, water has $M=18\\,\\text{g/mol}$, which is the mass of $6{,}02\\cdot 10^{23}$ water molecules.</p>`,
        `<p>Relations: amount of substance $n=\\frac{m}{M}$ and number of particles $N=n\\,N_A$. Therefore even a very small amount of substance contains an enormous number of particles.</p>`,
        { fig: "s1s4-brownov-pohyb", caption: "Brownian motion: the grain trembles irregularly, because molecules of the liquid hit it from all sides." }
      ],
      examples: [
        { task: 'How many moles are in $36\\,\\text{g}$ of water, if $M=18\\,\\text{g/mol}$?',
          steps: ['$n=\\frac{m}{M}=\\frac{36}{18}$.', '<strong>Result: 2 mol</strong>'] },
        { task: 'How many molecules are in $2\\,\\text{mol}$ of water?',
          steps: ['$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.', '<strong>Result: approximately $1{,}2\\cdot 10^{24}$ molecules</strong>'] }
      ]
    },
    's2-teplo': {
      title: 'Temperature, heat and internal energy',
      summary: 'Temperature, kelvin, internal energy and the heat needed for heating.',
      theory: [
        `<p><strong>Temperature</strong> is a measure of the average kinetic energy of the disordered motion of particles. A warmer body has particles that move faster on average. The Celsius scale has zero at the melting point of ice, the absolute scale in kelvins has zero at absolute zero. $T=t+273{,}15$ holds, and the size of one degree is the same.</p>`,
        `<p>The <strong>internal energy</strong> $U$ of a body is the sum of the kinetic and potential energies of all its particles. It changes in two ways: by work (for example by friction) or by transfer of heat.</p>`,
        `<p><strong>Heat</strong> is the energy that flows from a warmer body to a cooler one. Heat is not a substance and bodies do not "contain" it. The heat needed to warm a body is $Q=m\\,c\\,\\Delta T$, where $c$ is the specific heat capacity. Water has $c=4200\\,\\text{J/(kg\\,K)}$, aluminium $900\\,\\text{J/(kg\\,K)}$. That is why water warms up slowly and keeps its heat for a long time.</p>`,
        `<p>We calculate a change of temperature in kelvins and in degrees Celsius in the same way, because $\\Delta T=\\Delta t$. Conversion to absolute temperature is needed only for a specific temperature value.</p>`,
        { fig: "s1s4-merna-kapacita", caption: "For the same mass and the same change of temperature, water needs almost five times more heat than aluminium." }
      ],
      examples: [
        { task: 'How much heat is needed to warm $2\\,\\text{kg}$ of water by $10\\,\\text{K}$? Use $c=4200\\,\\text{J/(kg\\,K)}$.',
          steps: ['$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.', '<strong>Result: 84 000 J = 84 kJ</strong>'] },
        { task: 'What is the temperature $25\\,{}^\\circ\\text{C}$ in kelvins?',
          steps: ['$T=t+273{,}15=25+273{,}15$.', '<strong>Result: 298.15 K</strong>'] }
      ]
    },
    's2-skupenstva': {
      title: 'Changes of state',
      summary: 'Melting, freezing, evaporation and condensation, and latent heat.',
      theory: [
        `<p>A substance can be solid, liquid or gaseous. A transition between states requires energy or releases it. During melting and evaporation the <strong>temperature does not change</strong>: the supplied heat is used to weaken the bonds between molecules, not to increase their speed.</p>`,
        `<p><strong>Latent heat</strong> is the heat needed to change one kilogram of a substance without changing its temperature. For melting it is the specific latent heat of fusion $L_t$, for evaporation $L_v$. For ice $L_t\\approx 334\\,\\text{kJ/kg}$, for water $L_v\\approx 2260\\,\\text{kJ/kg}$. The heat needed to change a body of mass $m$ is $Q=m\\,L$.</p>`,
        `<p>During <strong>freezing</strong> and <strong>condensation</strong> the same amounts of heat are released. That is why steam at $100\\,{}^\\circ\\text{C}$ is more dangerous than water at the same temperature: when it condenses on the skin, it hands over a huge amount of heat.</p>`,
        `<p>Evaporation also causes cooling: the fastest molecules leave the surface, so the remaining liquid gets colder. That is why we feel cooler after a bath.</p>`,
        { fig: "s1s4-ohrev-latky", caption: "During melting and evaporation the temperature stays constant: the supplied heat is used to change the state, not to heat the substance." }
      ],
      examples: [
        { task: 'How much heat is needed to melt $2\\,\\text{kg}$ of ice at $0\\,{}^\\circ\\text{C}$? Use $L_t=334\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_t=2\\cdot 334$.', '<strong>Result: 668 kJ</strong>'] },
        { task: 'How much heat is released when $0{,}5\\,\\text{kg}$ of steam condenses into water at $100\\,{}^\\circ\\text{C}$? Use $L_v=2260\\,\\text{kJ/kg}$.',
          steps: ['$Q=m\\,L_v=0{,}5\\cdot 2260$.', '<strong>Result: 1130 kJ</strong>'] }
      ]
    },
    's2-ideal': {
      title: 'Ideal gas and the equation of state',
      summary: 'Model of an ideal gas, the equation of state and isothermal process.',
      theory: [
        `<p>An <strong>ideal gas</strong> is a model: the molecules are small points, no forces act between them, and they bounce off the walls of the container and off each other elastically. Real gases at low pressure and high temperature behave almost ideally.</p>`,
        `<p>The <strong>equation of state</strong> of an ideal gas: $p\\,V=n\\,R\\,T$, where $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ is the molar gas constant, and the temperature $T$ is substituted in kelvins. If we raise the temperature in a closed container, the molecules hit the walls harder and more often, and the pressure rises.</p>`,
        `<p>An <strong>isothermal process</strong> takes place at constant temperature. Then $p\\,V=\\text{const.}$, that is $p_1V_1=p_2V_2$: when the pressure doubles, the volume halves. Similarly, at constant pressure the volume is proportional to temperature, and at constant volume the pressure is proportional to temperature.</p>`,
        `<p>In every calculation we must pay attention to units: pressure in pascals, volume in cubic metres and temperature in kelvins.</p>`,
        { fig: "s1s4-izoterma", caption: "At constant temperature the product p·V is constant: when the volume halves, the pressure doubles." }
      ],
      examples: [
        { task: 'A gas has a volume of $4\\,\\text{l}$ and a pressure of $200\\,\\text{kPa}$ at constant temperature. What will its volume be at a pressure of $400\\,\\text{kPa}$?',
          steps: ['$p_1V_1=p_2V_2$, so $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.', '<strong>Result: 2 l</strong>'] },
        { task: 'What pressure does $1\\,\\text{mol}$ of gas have at $T=300\\,\\text{K}$ and volume $V=0{,}025\\,\\text{m}^3$? Use $R=8{,}31\\,\\text{J/(mol\\,K)}$.',
          steps: ['$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.', '<strong>Result: 99 720 Pa</strong>'] }
      ]
    },
    's2-termo': {
      title: 'Thermodynamic laws and heat engines',
      summary: 'First law of thermodynamics, second law and the efficiency of a heat engine.',
      theory: [
        `<p>The <strong>first law of thermodynamics</strong> is the law of conservation of energy for thermal processes: $\\Delta U=Q-A$. The change of internal energy $\\Delta U$ equals the heat $Q$ supplied to the system minus the work $A$ done by the system on its surroundings. If a gas expands and does work, its internal energy decreases, unless we supply enough heat to it.</p>`,
        `<p>The <strong>second law of thermodynamics</strong> says that heat flows spontaneously from a warmer body to a cooler one, never the other way round. It follows that no heat engine can convert all heat into work. Part of the heat must go to the cooler.</p>`,
        `<p>A <strong>heat engine</strong> takes heat $Q_1$ from the heater, converts part of it into work $A$, and gives the rest $Q_2$ to the cooler. The <strong>efficiency</strong> is $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$. It is always less than 1, that is less than 100 %.</p>`,
        `<p>The highest possible efficiency belongs to the ideal Carnot cycle: $\\eta_{\\max}=1-\\frac{T_2}{T_1}$, where the temperatures $T_1$ of the heater and $T_2$ of the cooler are in kelvins. That is why engines improve when the heater temperature is raised.</p>`,
        { fig: "s1s4-tepelny-motor", caption: "The engine takes heat Q₁ from the heater, converts part of it into work A and gives the rest Q₂ to the cooler. The efficiency A/Q₁ is less than 1." }
      ],
      examples: [
        { task: 'A gas receives $300\\,\\text{J}$ of heat and does work of $120\\,\\text{J}$. What is the change of its internal energy?',
          steps: ['$\\Delta U=Q-A=300-120$.', '<strong>Result: 180 J (the internal energy increased)</strong>'] },
        { task: 'An engine takes $1000\\,\\text{J}$ from the heater and does work of $250\\,\\text{J}$. What is its efficiency?',
          steps: ['$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.', '<strong>Result: 25 %</strong>'] }
      ]
    },
    's2-kmitanie': {
      title: 'Mechanical oscillations and resonance',
      summary: 'Period, frequency, pendulum and resonance.',
      theory: [
        `<p><strong>Oscillatory motion</strong> is motion about an equilibrium position that repeats periodically. Examples are a weight on a spring or a pendulum. The <strong>period</strong> $T$ is the time of one oscillation, the <strong>frequency</strong> $f$ is the number of oscillations per second: $f=\\frac{1}{T}=\\frac{n}{t}$. The unit of frequency is the hertz, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
        `<p><strong>Harmonic oscillation</strong> has displacement $y=A\\sin(\\omega t)$, where $A$ is the amplitude and $\\omega=2\\pi f$ is the angular frequency. A sinusoidal course arises in a spring where the force is directly proportional to the displacement.</p>`,
        `<p>The period depends on the properties of the oscillating system. For a spring $T=2\\pi\\sqrt{\\frac{m}{k}}$: a heavier weight oscillates more slowly, a stiffer spring oscillates faster. For a mathematical pendulum $T=2\\pi\\sqrt{\\frac{l}{g}}$, where $l$ is the length of the suspension (for small displacements).</p>`,
        `<p><strong>Resonance</strong> occurs when an external periodic force oscillates with the natural frequency of the body. Each impulse adds to the previous oscillation and the amplitude grows. That is why a swing goes higher when we push it in the rhythm of its swinging.</p>`,
        { fig: "s1s4-kmitanie", caption: "Harmonic oscillation: the amplitude A is the largest displacement, the period T is the time of one oscillation." }
      ],
      examples: [
        { task: 'A weight performs $40$ oscillations in $20\\,\\text{s}$. What are its period and frequency?',
          steps: ['$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.', '$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.', '<strong>Result: T = 0.5 s, f = 2 Hz</strong>'] },
        { task: 'A body oscillates with a frequency of $5\\,\\text{Hz}$. What is its period?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{5}$.', '<strong>Result: 0.2 s</strong>'] }
      ]
    },
    's2-vlnenie': {
      title: 'Mechanical waves and sound',
      summary: 'Wavelength, wave speed and sound as a mechanical wave.',
      theory: [
        `<p><strong>A wave</strong> is the propagation of oscillations through a medium. Energy and the shape of the wave are transferred, but the particles of the medium only oscillate about their equilibrium positions. A mechanical wave needs a material medium, which is why sound cannot be heard in a vacuum.</p>`,
        `<p>The wavelength $\\lambda$ is the distance between two nearest points with the same phase, for example two crests. In one period $T$ the wave advances by $\\lambda$, therefore the propagation speed is $v=\\frac{\\lambda}{T}=\\lambda\\,f$.</p>`,
        `<p><strong>Sound</strong> is a longitudinal mechanical wave. Humans hear frequencies from about $20\\,\\text{Hz}$ to $20\\,\\text{kHz}$. The pitch of a tone depends on the frequency, the loudness on the amplitude. In dry air at $20\\,{}^\\circ\\text{C}$ sound travels at about $340\\,\\text{m/s}$, and faster in water and in steel.</p>`,
        `<p><strong>An echo</strong> arises when sound is reflected from an obstacle. The sound travels there and back, so the distance to the obstacle is $s=\\frac{v\\,t}{2}$, where $t$ is the time between emitting the sound and its return.</p>`,
        { fig: "obr-vlna", caption: "Transverse wave: the wavelength λ is the distance between two neighbouring points in the same phase." }
      ],
      examples: [
        { task: 'A wave with a frequency of $50\\,\\text{Hz}$ has a wavelength of $4\\,\\text{m}$. At what speed does it travel?',
          steps: ['$v=\\lambda\\,f=4\\cdot 50$.', '<strong>Result: 200 m/s</strong>'] },
        { task: 'An echo arrived $2\\,\\text{s}$ after the shot. How far away is the obstacle? Use $v=340\\,\\text{m/s}$.',
          steps: ['$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.', '<strong>Result: $s=340\\,\\text{m}$</strong>'] }
      ]
    },
    's3-naboj': {
      title: 'Electric charge and electric field',
      summary: 'Charges attract and repel; the field around a point charge and its intensity.',
      theory: [
        `<p>Electric charge $Q$ is a property of bodies. It is measured in coulombs ($\\text{C}$). Like charges <strong>repel</strong>, opposite charges <strong>attract</strong>. The smallest charge in nature is the charge of an electron, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
        `<p>An <strong>electric field</strong> is the space around a charged body that exerts a force on another charge. We describe its strength by the <em>intensity</em> $E = \\frac{F}{q}$: the force with which the field acts on a small positive charge $q$, divided by this charge. The unit is $\\text{N/C}$, which is the same as $\\text{V/m}$.</p>`,
        `<p>For a point charge $Q$ at distance $r$, $E = k\\frac{Q}{r^2}$, where $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$. The intensity falls with the <strong>square</strong> of the distance: at twice the distance the field is one quarter as strong. That is why the field weakens quickly with distance.</p>`,
        `<ol><li>Write down the charge and the distance and convert them to SI units (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li>
         <li>Substitute into $E = k\\frac{Q}{r^2}$.</li><li>Write the result in $\\text{N/C}$.</li></ol>`,
        { fig: "s1s4-pole-naboja", caption: "The intensity of the field of a point charge falls with the square of the distance: at twice the distance it is a quarter." }
      ],
      examples: [
        { task: 'A point charge $Q = 2\\,\\text{nC}$. What is the field intensity at a distance $r = 0{,}5\\,\\text{m}$?',
          steps: ['Convert the charge: $Q = 2\\cdot 10^{-9}\\,\\text{C}$.',
            '$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.',
            '<strong>Result: $E = 72\\,\\text{N/C}$.</strong>'] },
        { task: 'How does the field intensity change if we double the distance from the charge?',
          steps: ['In the formula there is $r^2$, so at $2r$ the denominator is four times larger.', '<strong>The intensity falls to one quarter.</strong>'] }
      ]
    },
    's3-prud-napatie': {
      title: 'Electric current, voltage and resistance',
      summary: 'Current is charge per time, voltage is work per charge, resistance slows the movement of charges.',
      theory: [
        `<p><strong>Electric current</strong> $I$ is the charge that passes through a cross-section of a conductor per unit time: $I = \\frac{Q}{t}$. The unit is the ampere ($\\text{A}$). Current flows only when charges can move and a force acts on them.</p>`,
        `<p><strong>Electric voltage</strong> $U$ tells us the work $W$ done by the field when moving the charge $Q$: $U = \\frac{W}{Q}$. The unit is the volt ($\\text{V}$). Voltage is what "pushes" the charges around the circuit.</p>`,
        `<p><strong>Electrical resistance</strong> $R$ is the ability of a conductor to slow down the movement of charges. The unit is the ohm ($\\Omega$). Resistance depends on the material, the length and cross-section of the conductor, and on temperature: a longer and thinner conductor has greater resistance.</p>`,
        `<p>Why the current is limited: voltage sets the charges in motion, but collisions with the atoms of the conductor slow them down. The result is a steady current that depends on both the voltage and the resistance.</p>`,
        { fig: "s1s4-jednoduchy-obvod", caption: "Current flows from the positive terminal of the source through the resistor back to the negative terminal. The voltage U is across the terminals of the source." }
      ],
      examples: [
        { task: 'A charge of 12 C passes through a conductor in 4 s. What is the current?',
          steps: ['We substitute into $I = \\frac{Q}{t}$.', '$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.', '<strong>Result: the current is 3 A.</strong>'] },
        { task: 'When a charge of 5 C is moved, the field does work of 30 J. What is the voltage?',
          steps: ['$U = \\frac{W}{Q}$.', '$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.', '<strong>Result: the voltage is 6 V.</strong>'] }
      ]
    },
    's3-ohm': {
      title: `Ohm's law and electric circuits`,
      summary: 'Current, voltage and resistance; series and parallel connection of resistors.',
      theory: [
        `<p><strong>Ohm's law</strong> says that the current in a conductor is directly proportional to the voltage and inversely proportional to the resistance: $I = \\frac{U}{R}$, so $U = R\\,I$ and $R = \\frac{U}{I}$. It holds for metal conductors at constant temperature.</p>`,
        `<p><strong>Series connection</strong>: the devices are one after another, the same current flows through them and the voltages add up: $U = U_1 + U_2$, resistances $R = R_1 + R_2$. If one device stops working, the whole circuit is interrupted.</p>`,
        `<p><strong>Parallel connection</strong>: the devices are side by side, each has the same voltage and the currents add up: $I = I_1 + I_2$ and $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. The total resistance is smaller than the smallest of the branches, which is why household appliances are connected in parallel: each gets the full voltage, and one of them switching off does not switch off the others.</p>`,
        `<p>When solving a circuit, first determine which parts are in series and which in parallel, then replace the arrangement with a single resistance and apply Ohm's law.</p>`,
        { fig: "obr-ohm", caption: "At constant resistance the graph of voltage against current is a straight line through the origin." }
      ],
      examples: [
        { task: 'A resistor of $6\\,\\Omega$ is connected to a voltage of 12 V. What current flows through it?',
          steps: ['$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.', '<strong>Result: I = 2 A.</strong>'] },
        { task: 'Two resistors of $4\\,\\Omega$ are connected in parallel. What is the total resistance?',
          steps: ['$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.', '<strong>Result: R = 2 Ω.</strong>'] }
      ]
    },
    's3-praca-vykon': {
      title: 'Electrical work and power',
      summary: 'Power of an appliance, energy in joules and kilowatt-hours.',
      theory: [
        `<p><strong>Electrical power</strong> $P$ states how quickly an appliance converts electrical energy: $P = U\\,I = \\frac{W}{t}$. The unit is the watt ($\\text{W}$), where $1\\,\\text{W} = 1\\,\\text{J/s}$.</p>`,
        `<p><strong>Electrical work</strong> (energy) $W$ over time $t$ is $W = P\\,t = U\\,I\\,t$. The unit is the joule ($\\text{J}$). On electricity bills the kilowatt-hour is used: $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<p>Why this holds: voltage gives the energy per coulomb, and current gives how many coulombs pass per second. Their product is the energy per second, that is the power.</p>`,
        `<p>The rating plate of an appliance shows its power (for example 2000 W). You find the energy by multiplying the power in kilowatts by the time in hours.</p>`
      ],
      examples: [
        { task: 'A light bulb is connected to 230 V and a current of 0.5 A flows through it. What is its power?',
          steps: ['$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.', '<strong>Result: P = 115 W.</strong>'] },
        { task: 'A hair dryer with a power of 1.5 kW runs for 2 hours. How many kWh of energy does it use?',
          steps: ['$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.', '<strong>Result: 3 kWh.</strong>'] }
      ]
    },
    's3-magnetizmus': {
      title: 'Magnetic field and electromagnetic induction',
      summary: 'Magnetic field of a conductor and a coil, and voltage induced by a changing magnetic flux.',
      theory: [
        `<p>A <strong>magnetic field</strong> arises around magnets and around a conductor carrying current. Its direction is shown by field lines, which leave the north pole and enter the south pole. Magnetic induction $B$ is measured in teslas ($\\text{T}$).</p>`,
        `<p>A long straight conductor carrying current $I$ produces at distance $r$ the field $B = \\frac{\\mu_0 I}{2\\pi r}$. Inside a <strong>coil</strong> with $N$ turns over length $l$ the field is approximately uniform: $B = \\mu_0\\frac{N}{l}I$, where $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.</p>`,
        `<p><strong>Electromagnetic induction:</strong> if the magnetic flux through a closed loop of conductor changes, a voltage is induced in it. According to Lenz's law, the induced current flows in the direction that opposes the change which caused it. That is why a coil resists when a magnet is brought close to it.</p>`,
        `<p>Why this holds: the changing magnetic field exerts a force on the free charges in the conductor, and they start to move. If the induced current supported the change, energy would appear from nothing, which contradicts the law of conservation of energy.</p>`,
        { fig: "obr-magnet-vodic", caption: "Around a conductor carrying current there is a magnetic field in the form of circles around the conductor." }
      ],
      examples: [
        { task: 'A coil has 500 turns over a length of 0.25 m and a current of 2 A flows through it. What is the induction inside it?',
          steps: ['$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.',
            '$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.',
            '<strong>Result: B ≈ 5.0 mT.</strong>'] },
        { task: 'A straight conductor carries a current of 4 A. What is the induction at a distance of 0.2 m from the conductor?',
          steps: ['$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.', '<strong>Result: B ≈ 4.0·10⁻⁶ T.</strong>'] }
      ]
    },
    's3-transformator': {
      title: 'Electric motors, generators and transformers',
      summary: 'A motor converts electricity into motion, a generator does the opposite, and a transformer changes voltage.',
      theory: [
        `<p>An <strong>electric motor</strong> converts electrical energy into mechanical energy. A force acts on a conductor carrying current in a magnetic field. If the conductor is wound into a coil, the force turns it and the coil becomes the rotor of the motor.</p>`,
        `<p>A <strong>generator</strong> is the opposite of a motor: when a coil rotates in a magnetic field, the magnetic flux changes periodically and an alternating voltage is induced in the coil.</p>`,
        `<p>A <strong>transformer</strong> changes the voltage of alternating current. For an ideal transformer $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$, where $N_1$ and $N_2$ are the numbers of turns of the primary and secondary windings. If the secondary winding has more turns, the voltage rises; if it has fewer, the voltage falls.</p>`,
        `<p>Why the voltage is raised for transmission: at the same power $P = U\\,I$, a higher voltage means a smaller current, and therefore smaller heat losses in the power lines. That is why electricity is transmitted at high voltage and transformed down at the place of use.</p>`,
        { fig: "s1s4-transformator", caption: "Ideal transformer: the voltages change in the ratio of the numbers of turns, U₁/U₂ = N₁/N₂." }
      ],
      examples: [
        { task: 'A transformer has 200 turns on the primary side and 1000 on the secondary side. What is the voltage on the secondary side if the primary voltage is 230 V?',
          steps: ['$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.', '$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.', '<strong>Result: 1150 V (the transformer raises the voltage).</strong>'] },
        { task: 'A transformer lowers the voltage from 230 V to 23 V. How many turns does the secondary winding have if the primary has 1000?',
          steps: ['$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.', '$N_2 = \\frac{1000}{10}=100$.', '<strong>Result: 100 turns.</strong>'] }
      ]
    },
    's3-striedavy': {
      title: 'Alternating current',
      summary: 'Sinusoidal voltage, period, frequency and the effective value in the mains.',
      theory: [
        `<p><strong>Alternating current</strong> periodically changes both its direction and its magnitude. The voltage varies sinusoidally with time: $u = U_{max}\\sin(\\omega t)$, where $U_{max}$ is the amplitude and $\\omega = 2\\pi f$ is the angular frequency.</p>`,
        `<p>The duration of one period is $T = \\frac{1}{f}$. In the public mains the frequency is $f = 50\\,\\text{Hz}$, so the period is $T = 0{,}02\\,\\text{s}$. The voltage repeats 50 times per second.</p>`,
        `<p>The <strong>effective value</strong> is the value of direct voltage that would produce the same heating effect in a device. For a sinusoidal voltage $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, so $U_{max} = U_{ef}\\sqrt{2}$. A mains with an effective voltage of 230 V has an amplitude of about $325\\,\\text{V}$.</p>`,
        `<p>Why we use effective values: appliances (a light bulb, a hair dryer) respond to the average power, not to the peaks. That is why effective values are stated on labels and shown by voltmeters.</p>`,
        { fig: "s1s4-striedavy-prud", caption: "Sinusoidal voltage: the effective value is the amplitude divided by √2. The period is T = 1/f; at 50 Hz it is 0.02 s." }
      ],
      examples: [
        { task: 'The effective voltage of the mains is 230 V. What is the amplitude of the voltage?',
          steps: ['$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.', '<strong>Result: approximately 325 V.</strong>'] },
        { task: 'The mains has a frequency of 50 Hz. What is its period?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.', '<strong>Result: T = 0.02 s.</strong>'] }
      ]
    },
    's3-odraz-lom': {
      title: 'Reflection and refraction of light',
      summary: 'Law of reflection, refractive index and Snell law when light passes between media.',
      theory: [
        `<p><strong>Reflection of light</strong>: the angle of incidence equals the angle of reflection. Both angles are measured from the <em>normal</em> to the surface, not from the surface itself. If a ray hits a mirror at an angle of 30° to the surface, the angle of incidence measured from the normal is $60^\\circ$.</p>`,
        `<p><strong>Refraction of light</strong>: when light passes into another medium, its speed changes and the ray bends. The refractive index is $n = \\frac{c}{v}$, where $c = 3\\cdot 10^{8}\\,\\text{m/s}$ is the speed of light in a vacuum and $v$ is the speed in the substance. A larger index means slower light.</p>`,
        `<p><strong>Snell's law</strong>: $n_1\\sin\\alpha = n_2\\sin\\beta$, where $\\alpha$ is the angle of incidence and $\\beta$ the angle of refraction, both measured from the normal. If $n_2 > n_1$, the ray bends towards the normal, that is $\\beta < \\alpha$.</p>`,
        `<p>Why the ray bends: one side of the wavefront slows down in the slower medium before the other side, which changes the direction of propagation. At normal incidence the direction does not change.</p>`,
        { fig: "obr-odraz", caption: "When light is reflected from a plane mirror, the law of reflection holds." }
      ],
      examples: [
        { task: 'Light passes from air into glass with refractive index $n = 1{,}5$. What is the speed of light in the glass?',
          steps: ['$n=\\frac{c}{v}$, so $v=\\frac{c}{n}$.', '$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.', '<strong>Result: 2·10⁸ m/s.</strong>'] },
        { task: 'A ray hits the boundary perpendicularly. What is the angle of refraction?',
          steps: ['Perpendicular incidence means $\\alpha=0^\\circ$, so $\\sin\\alpha=0$.', '$n_1\\cdot 0 = n_2\\sin\\beta$, so $\\sin\\beta = 0$.', '<strong>Result: $\\beta = 0^\\circ$, the ray does not change direction.</strong>'] }
      ]
    },
    's3-sosovky': {
      title: 'Mirrors, lenses and imaging',
      summary: 'Imaging equation of a thin lens, image distance and magnification.',
      theory: [
        `<p>The <strong>focal length</strong> $f$ is the distance of the focus from the centre of a lens (or from the vertex of a mirror). A converging lens has a positive focal length: it collects rays into a focus.</p>`,
        `<p>The <strong>imaging equation of a thin lens</strong>: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$, where $a$ is the distance of the object and $b$ the distance of the image. If the object is farther than twice the focal length, the image is real, reduced and inverted.</p>`,
        `<p><strong>Magnification</strong> tells how many times the image is larger or smaller than the object: $|k| = \\frac{b}{a}$. If $|k| < 1$, the image is reduced; if $|k| > 1$, it is enlarged.</p>`,
        `<p>A <strong>plane mirror</strong> creates a virtual image the same size as the object and the same distance behind the mirror. The imaging equation can also be used for spherical mirrors, only with different signs of the distances.</p>`,
        `<p>Why this holds: rays from a point of the object converge to a point of the image behind the lens, and the similar triangles formed by the rays give the relations above.</p>`,
        { fig: "s1s4-sosovka-2f", caption: "An object at twice the focal length gives a real, inverted image of the same size on the other side of the lens." }
      ],
      examples: [
        { task: 'The object is 30 cm in front of a converging lens with a focal length of 10 cm. What is the image distance?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.', '$b = 15\\,\\text{cm}$.', '<strong>Result: the image forms 15 cm behind the lens.</strong>'] },
        { task: 'The object is 30 cm in front of the lens and the image is 15 cm behind it. How many times is the image smaller?',
          steps: ['$|k| = \\frac{b}{a} = \\frac{15}{30}$.', '<strong>Result: |k| = 0.5, the image is reduced to half.</strong>'] }
      ]
    },
    's4-interferencia': {
      title: 'Wave properties of light: interference and diffraction',
      summary: 'Superposition of waves, bright and dark fringes at a double slit and bending of waves around an obstacle.',
      theory: [
        `<p>Light has wave properties. Visible light has a wavelength $\\lambda$ of roughly $380\\,\\text{nm}$ to $750\\,\\text{nm}$. Waves can <strong>superpose</strong>, and this phenomenon is called interference.</p>`,
        `<p><strong>Interference</strong> at a double slit: if the waves reinforce each other (the path difference is an integer multiple of $\\lambda$), a <strong>bright fringe</strong> appears. If they cancel out (the path difference is $\\left(k+\\frac{1}{2}\\right)\\lambda$), a <strong>dark fringe</strong> appears.</p>`,
        `<p>For bright fringes on a screen at distance $L$ from slits with spacing $d$ we have approximately $y_k = k\\,\\frac{\\lambda L}{d}$, where $k = 0, 1, 2, \\dots$ is the order of the fringe. With a longer wavelength or a greater distance to the screen, the fringes are further apart.</p>`,
        `<p><strong>Diffraction</strong> is the bending of a wave around an obstacle or through a narrow slit. It is more pronounced when the size of the obstacle is close to the wavelength. That is why sound bends around a corner of a room better than light does.</p>`,
        { fig: "s1s4-interferencia", caption: "Bright fringes appear in directions where the path difference is a whole-number multiple of λ: y_k = k·λL/d." }
      ],
      examples: [
        { task: 'The slits are $d = 0{,}5\\,\\text{mm}$ apart, the light has $\\lambda = 500\\,\\text{nm}$ and the screen is $L = 1\\,\\text{m}$ away. What is the distance of the first bright fringe ($k=1$)?',
          steps: ['$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.',
            '$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.',
            '<strong>Result: 1 mm from the centre.</strong>'] },
        { task: 'With the same setup, which wavelength gives wider fringes: 400 nm, or 700 nm?',
          steps: ['The spacing of the fringes $y_k$ is proportional to $\\lambda$.', '<strong>The 700 nm light gives wider fringes.</strong>'] }
      ]
    },
    's4-ziarenie': {
      title: 'Electromagnetic radiation and spectra',
      summary: 'Wavelength, frequency and energy of a photon; line and continuous spectra.',
      theory: [
        `<p>Electromagnetic radiation consists of waves that travel in a vacuum at the speed $c = 3\\cdot 10^{8}\\,\\text{m/s}$. Wavelength and frequency are related by $c = \\lambda f$. Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays are just different parts of the same phenomenon.</p>`,
        `<p><strong>Photon energy</strong>: light is emitted and absorbed in quanta called photons. The energy of a photon is $E = h f = \\frac{h c}{\\lambda}$, where $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$. In atomic calculations the electronvolt is convenient ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$), together with the relation $hc \\approx 1240\\,\\text{eV·nm}$.</p>`,
        `<p><strong>Spectra</strong>: solids heated to incandescence emit a continuous spectrum, thin gases emit a line spectrum. Each element has its own lines, which is why spectra are used to determine the chemical composition of stars.</p>`,
        `<p>Why spectra are made of lines: the energy levels of atoms are discrete, so an atom emits or absorbs only photons whose energy equals the difference between two levels. A higher photon energy means a shorter wavelength.</p>`,
        { fig: "s1s4-spektrum", caption: "Electromagnetic radiation is one phenomenon with different wavelengths. Visible light is only a narrow band." }
      ],
      examples: [
        { task: 'A photon has a wavelength of 248 nm. What is its energy in electronvolts?',
          steps: ['$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.', '<strong>Result: E = 5 eV.</strong>'] },
        { task: 'Light has a frequency of $6\\cdot 10^{14}\\,\\text{Hz}$. What is its wavelength?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Result: 500 nm.</strong>'] }
      ]
    },
    's4-atom': {
      title: 'Models of the atom and quantum phenomena',
      summary: 'Bohr model of hydrogen: quantized levels and the energy of a photon emitted in a transition between them.',
      theory: [
        `<p>According to the Rutherford model, an atom has a small positive nucleus with electrons around it. However, according to classical physics an electron moving around the nucleus should keep radiating and fall into the nucleus, which does not happen. The Bohr model therefore introduced <strong>quantized levels</strong>, on which an electron does not radiate energy.</p>`,
        `<p>The energy of an electron in a hydrogen atom is quantized: $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, where $n = 1, 2, 3, \\dots$ is the principal quantum number. The higher $n$, the more weakly the electron is bound and the closer its energy is to zero.</p>`,
        `<p><strong>Transition between levels</strong>: when an atom drops from a higher level $n_i$ to a lower level $n_f$, it emits a photon with energy $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$. The opposite transition absorbs a photon of the same energy.</p>`,
        `<p>Why this holds: the wavelength of the emitted light corresponds to the difference between levels, so hydrogen emits only a line spectrum. Similarly, the photoelectric effect shows that light carries energy in quanta and therefore also has particle properties.</p>`,
        { fig: "obr-atom", caption: "Simplified model of an atom: a positive nucleus and electrons in orbits around it." }
      ],
      examples: [
        { task: 'An electron in a hydrogen atom drops from level $n=3$ to $n=2$. What energy does it emit?',
          steps: ['$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.',
            '$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, so $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.',
            '<strong>Result: approximately 1.89 eV.</strong>'] },
        { task: 'What is the energy of the electron on level $n=1$?',
          steps: ['$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.', '<strong>Result: E₁ = −13.6 eV.</strong>'] }
      ]
    },
    's4-radioaktivita': {
      title: 'Radioactivity and nuclear reactions',
      summary: 'Decay of nuclei, half-life and writing a nuclear reaction.',
      theory: [
        `<p><strong>Radioactivity</strong> is the spontaneous decay of unstable nuclei. It produces radiation: $\\alpha$ (helium nuclei), $\\beta$ (electrons or positrons) and $\\gamma$ (high-energy photons). The decay of an individual nucleus is random, but with a large number of nuclei the behaviour is predictable.</p>`,
        `<p>The <strong>half-life</strong> $T_{1/2}$ is the time after which half of the original nuclei have decayed. The number of undecayed nuclei after time $t$ is $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>Why the decrease is geometric: after each half-life the quantity is reduced to one half, not by the same amount. After the first half-life half remains, after the second a quarter. The activity $A = \\lambda N$ gives the number of decays per second (unit becquerel, $\\text{Bq}$).</p>`,
        `<p><strong>Nuclear reactions</strong> are written with a balance of the mass number (upper index) and the atomic number (lower index): the sum on the left side equals the sum on the right side.</p>`,
        { fig: "s1s4-polcas-rozpadu", caption: "After each half-life the number of undecayed nuclei halves: the decrease is geometric, not linear." }
      ],
      examples: [
        { task: 'A radioactive element has a half-life of 4 days. What percentage of the original amount remains after 8 days?',
          steps: ['In 8 days $\\frac{8}{4}=2$ half-lives pass.', 'What remains is $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$ of the original amount.', '<strong>Result: 25 %.</strong>'] },
        { task: 'The nucleus $^{238}_{92}\\text{U}$ decays by alpha decay. What are the mass number and the atomic number of the new nucleus?',
          steps: ['The alpha particle is $^{4}_{2}\\text{He}$, it carries away 4 nucleons and 2 protons.', '$238-4=234$, $92-2=90$.', '<strong>Result: $^{234}_{90}\\text{Th}$ (thorium).</strong>'] }
      ]
    },
    's4-jadro': {
      title: 'Fission and fusion of nuclei',
      summary: 'Mass defect and energy released in fission of heavy nuclei and fusion of light nuclei.',
      theory: [
        `<p>A nucleus has a smaller mass than the sum of the masses of its nucleons. The difference is the <strong>mass defect</strong> $\\Delta m$, and it corresponds to the binding energy according to Einstein's relation $\\Delta E = \\Delta m\\,c^2$.</p>`,
        `<p>If mass is measured in atomic mass units ($1\\,\\text{u}$), a practical relation holds: a mass defect of $1\\,\\text{u}$ corresponds to an energy of about $931{,}5\\,\\text{MeV}$.</p>`,
        `<p><strong>Fission</strong>: a heavy nucleus (for example uranium-235) splits into two medium-heavy nuclei and releases energy. <strong>Fusion</strong>: light nuclei join into a heavier nucleus and again energy is released. The Sun gets its energy from the fusion of hydrogen into helium.</p>`,
        `<p>Why energy is released: nuclei are most tightly bound around iron. Moving towards it, whether by splitting a heavy nucleus or joining light ones, releases the difference in binding energies.</p>`,
        { fig: "s1s4-vazbova-energia", caption: "The binding energy per nucleon is largest around iron, which is why both fission of heavy nuclei and fusion of light nuclei release energy." }
      ],
      examples: [
        { task: 'In a certain process the mass defect is $\\Delta m = 0{,}2\\,\\text{u}$. How many MeV of energy are released?',
          steps: ['$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.', '<strong>Result: approximately 186 MeV.</strong>'] },
        { task: 'In the reaction D + T → He + n the masses before the reaction total 5.0301 u and after the reaction 5.0113 u. How many MeV are released?',
          steps: ['$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.', '$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.', '<strong>Result: approximately 17.5 MeV.</strong>'] }
      ]
    },
    's4-astrofyzika': {
      title: 'Basics of astrophysics and cosmology',
      summary: 'Distance of stars by parallax, Hubble law of expansion and Wien law of radiation.',
      theory: [
        `<p><strong>Distances in space</strong> are measured in light-years or parsecs: $1\\,\\text{pc}\\approx 3{,}26\\,\\text{ly}$. With <strong>parallax</strong>, a star appears shifted against distant stars as the Earth orbits the Sun. The distance in parsecs is $d = \\frac{1}{p}$, where $p$ is the annual parallax in arcseconds.</p>`,
        `<p><strong>Hubble's law</strong>: distant galaxies move away from us at a speed $v = H_0\\,d$, where $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$. The more distant the galaxy, the faster it recedes. This is evidence that the universe is expanding.</p>`,
        `<p><strong>Wien's law</strong>: the surface temperature of a star determines the wavelength at which it radiates most strongly: $\\lambda_{max} = \\frac{b}{T}$, where $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$. Cooler stars glow red, hotter ones blue.</p>`,
        `<p>Why this works: parallax is the geometry of the Earth–Sun–star triangle, and Hubble found that the shift of spectral lines towards red increases with distance. From both measurements we can estimate distances as well as the age of the universe.</p>`,
        { fig: "s1s4-paralaxa", caption: "Parallax: seen from two points of the Earth's orbit, a star appears shifted against more distant stars. The distance in parsecs is d = 1/p." }
      ],
      examples: [
        { task: 'A galaxy recedes from us at 3500 km/s. What is its distance for $H_0 = 70\\,\\text{km/(s·Mpc)}$?',
          steps: ['$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.', '<strong>Result: 50 Mpc.</strong>'] },
        { task: 'The surface of a star has a temperature of 5800 K. At what wavelength does it radiate most strongly?',
          steps: ['$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Result: 500 nm (green region).</strong>'] }
      ]
    },
    's4-opakovanie': {
      title: 'Review of mechanics, electricity and other topics',
      summary: 'Review the main formulas of mechanics and electricity and check the units.',
      theory: [
        `<p>Revision connects things you learn separately. Mechanics: $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$. Electricity: $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Always first find out what is given and what is asked, and only then choose the formula.</p>`,
        `<p><strong>Checking units:</strong> force in newtons ($\\text{N} = \\text{kg·m/s}^2$), energy in joules, voltage in volts. If the units on both sides do not match, the error is in the procedure.</p>`,
        `<p><strong>Common mistakes:</strong> do not forget the $\\frac{1}{2}$ and the square of the speed in kinetic energy; convert km/h to m/s by dividing by $3{,}6$; in a parallel connection add the reciprocals of the resistances.</p>`,
        `<p>Why this helps: physics is one system of laws. Energy is conserved across areas, for example electrical energy is converted into mechanical energy in a motor, so the same way of thinking works everywhere.</p>`
      ],
      examples: [
        { task: 'A car with a mass of 1000 kg moves at 20 m/s. What is its kinetic energy?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.', '$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.', '<strong>Result: 200 kJ.</strong>'] },
        { task: 'A device has a voltage of 12 V and a resistance of 4 Ω. What current flows through it?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Result: 3 A.</strong>'] }
      ]
    },
    's4-maturita': {
      title: 'Preparing for the final exam, especially if you choose physics',
      summary: 'Approach to solving problems, units, estimating the result and rounding.',
      theory: [
        `<p>In the physics final exam, most points are lost for <strong>wrong units</strong> and for substituting without checking. A procedure that pays off: write down the given quantities, write the quantity sought, choose the formula, convert the units to SI and only then calculate.</p>`,
        `<ol><li>Write down the given and the sought quantities.</li><li>Choose a formula and check that it applies to this process.</li><li>Convert the units to SI.</li>
         <li>Calculate and round only at the end.</li><li>Check the unit and the order of magnitude of the result.</li></ol>`,
        `<p><strong>Checking the result:</strong> check that the order of magnitude is reasonable (the speed of a car cannot be $10^{6}\\,\\text{m/s}$), that the sign is correct and that the result has the correct unit. A quick estimate before calculating saves you from decimal-point mistakes.</p>`,
        `<p><strong>Rounding:</strong> calculate with full precision and round only at the end, to the number of significant digits given in the problem (usually 2 or 3). Rounding in intermediate steps shifts the result.</p>`,
        `<p>Why this works: the final exam assesses a way of thinking, not just a number. Correct units and checking show understanding, even if you slip by a small value in the calculation.</p>`
      ],
      examples: [
        { task: 'A body with a mass of 2 kg has a speed of 36 km/h. What is its kinetic energy?',
          steps: ['Convert the units: $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.', '$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.', '<strong>Result: 100 J.</strong>'] },
        { task: 'A force of 500 N acts on an area of 25 cm². What pressure results, in kPa?',
          steps: ['Convert the area: $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.', '$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.', '<strong>Result: 200 kPa.</strong>'] }
      ]
    }
  }
});
