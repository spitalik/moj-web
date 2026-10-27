/* English: university lessons, levels v1–v4 (js/rocniky/v1.js, v2.js, v3.js, v4.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    'v1-kinematika': {
      title: 'Kinematics: position, velocity and acceleration',
      summary: 'A description of motion without its causes: how position, velocity and acceleration change with time.',
      theory: [
        `<p>Kinematics describes the motion of bodies without asking what causes it. The basic quantity is the <strong>position</strong> $x(t)$, i.e. the coordinate of the body relative to a chosen origin and direction.</p>`,
        `<p><strong>Velocity</strong> is the change of position per unit time: $v=\\frac{\\Delta x}{\\Delta t}$. It is a vector, so it also carries a sign that determines the direction of motion. <strong>Acceleration</strong> is the change of velocity per unit time: $a=\\frac{\\Delta v}{\\Delta t}$, in units of $\\text{m/s}^2$.</p>`,
        `<p>In <strong>uniformly accelerated motion</strong> the acceleration is constant. The velocity then changes linearly, $v=v_0+a\\,t$, and the position changes with the square of time: $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
        `<p><strong>Why we multiply by time:</strong> acceleration tells us by how many metres per second the velocity changes every second. In time $t$ it therefore changes by $a\\,t$. If $a$ and $v_0$ have the same sign, the body speeds up, otherwise it slows down.</p>`,
        { fig: 'v1v4-kinematika-vt', caption: 'For uniformly accelerated motion the velocity-time graph is a straight line: its slope is the acceleration a and its starting point is the initial velocity v₀.' }
      ],
      examples: [
        { task: 'A car is at rest ($v_0=0$) and speeds up with a constant acceleration $a=2\\,\\text{m/s}^2$. What will its velocity be after $5\\,\\text{s}$?',
          steps: ['We substitute into $v=v_0+a\\,t$: $v=0+2\\cdot 5$.', '<strong>Result: $v=10\\,\\text{m/s}$</strong>'] },
        { task: 'A train has velocity $v_0=12\\,\\text{m/s}$ and brakes with acceleration $a=-3\\,\\text{m/s}^2$. What is its velocity after $2\\,\\text{s}$?',
          steps: ['$v=v_0+a\\,t=12+(-3)\\cdot 2$.', '$v=12-6$.', '<strong>Result: $v=6\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-newton': {
      title: 'Newton\'s laws of motion',
      summary: 'First, second and third law: when a body does not move uniformly and how force relates to acceleration.',
      theory: [
        `<p><strong>First law</strong> (of inertia): a body stays at rest or in uniform rectilinear motion as long as no nonzero net force acts on it. Inertia is a property of mass, not a result of a force.</p>`,
        `<p><strong>Second law</strong>: acceleration is proportional to the net force and inversely proportional to mass, $\\vec a=\\frac{\\vec F}{m}$, i.e. $\\vec F=m\\,\\vec a$. The net force is the vector sum of all forces acting on the body; forces in opposite directions are subtracted.</p>`,
        `<p><strong>Third law</strong>: if body A acts on body B with a force, B acts on A with an equally large force in the opposite direction. These two forces act on <em>different</em> bodies, so they do not cancel each other out.</p>`,
        `<p><strong>Why this is so:</strong> force is the cause of a change in motion. For a larger mass, a larger force is needed for the same acceleration, because mass resists changes in velocity.</p>`,
        { fig: 'v1v4-sily-dve', caption: 'Forces in opposite directions are subtracted. The net force F₁ − F₂ gives the body the acceleration a = (F₁ − F₂)/m.' }
      ],
      examples: [
        { task: 'A body with mass $m=4\\,\\text{kg}$ is pulled by a force $F=20\\,\\text{N}$, and friction $F_t=8\\,\\text{N}$ acts against it along the same line. What is the acceleration?',
          steps: ['Net force: $F_v=20-8=12\\,\\text{N}$.', 'Acceleration: $a=\\frac{F_v}{m}=\\frac{12}{4}$.', '<strong>Result: $a=3\\,\\text{m/s}^2$</strong>'] },
        { task: 'A net force of $12\\,\\text{N}$ acts on a body with mass $m=3\\,\\text{kg}$. What is the acceleration?',
          steps: ['$a=\\frac{F}{m}=\\frac{12}{3}$.', '<strong>Result: $a=4\\,\\text{m/s}^2$</strong>'] }
      ]
    },
    'v1-hybnost': {
      title: 'Forces, momentum and angular momentum',
      summary: 'Momentum as a measure of motion, impulse of force and angular momentum when rotating about a point.',
      theory: [
        `<p>The <strong>momentum</strong> of a body is the product of its mass and velocity: $\\vec p=m\\,\\vec v$. A heavy, fast body has large momentum and is harder to stop.</p>`,
        `<p>Newton's second law can also be written using momentum: $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. The product $\\vec F\\,\\Delta t$ is called the <strong>impulse of force</strong> and equals the change of momentum: $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
        `<p><strong>Angular momentum</strong> of a particle about a fixed point $O$ is the vector product of position and momentum: $\\vec L=\\vec r\\times\\vec p$, with magnitude $L=r\\,p\\sin\\alpha$, where $\\alpha$ is the angle between $\\vec r$ and $\\vec p$.</p>`,
        `<p><strong>Why this holds:</strong> a force changes momentum only if it acts long enough. A short strike gives a small impulse even with a large force. Angular momentum changes only when a torque $\\vec M=\\vec r\\times\\vec F$ acts on the body.</p>`
      ],
      examples: [
        { task: 'A bullet with mass $m=0{,}02\\,\\text{kg}$ flies at velocity $v=300\\,\\text{m/s}$. What is its momentum?',
          steps: ['$p=m\\,v=0{,}02\\cdot 300$.', '<strong>Result: $p=6\\,\\text{kg\\,m/s}$</strong>'] },
        { task: 'A force $F=50\\,\\text{N}$ acts on a body for $4\\,\\text{s}$. What is the change of its momentum?',
          steps: ['Impulse of force: $\\Delta p=F\\,\\Delta t=50\\cdot 4$.', '<strong>Result: $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>'] }
      ]
    },
    'v1-praca-energia': {
      title: 'Work, energy and power',
      summary: 'Work of a force, kinetic energy of a body, and power as work per unit time.',
      theory: [
        `<p><strong>Work</strong> of a constant force for a displacement $\\vec s$ is $W=F\\,s\\cos\\alpha$, where $\\alpha$ is the angle between the force and the displacement. A force perpendicular to the displacement does no work.</p>`,
        `<p><strong>Kinetic energy</strong> of a body is $E_k=\\frac{1}{2}m v^2$. The work of the net force equals the change of kinetic energy: $W=\\Delta E_k$. This is the work-energy theorem.</p>`,
        `<p><strong>Power</strong> is the work done per unit time: $P=\\frac{W}{t}$, in watts, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
        `<p><strong>Why there is $v^2$:</strong> at twice the velocity a body has four times the energy, because stopping it requires four times the work. That is why accidents at higher speed are so dangerous.</p>`,
        { fig: 'v1v4-praca-uhol', caption: 'Only the component of the force parallel to the displacement does work, F·cos α. The component perpendicular to the displacement does no work.' }
      ],
      examples: [
        { task: 'A body with mass $m=2\\,\\text{kg}$ moves at velocity $v=3\\,\\text{m/s}$. What is its kinetic energy?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.', '<strong>Result: $E_k=9\\,\\text{J}$</strong>'] },
        { task: 'A force $F=10\\,\\text{N}$ moves a body by $s=6\\,\\text{m}$ in the direction of the force. How much work is done?',
          steps: ['The angle is $\\alpha=0^\\circ$, so $\\cos\\alpha=1$.', '$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.', '<strong>Result: $W=60\\,\\text{J}$</strong>'] }
      ]
    },
    'v1-gravitacne-pole': {
      title: 'Gravitational field',
      summary: 'Newton\'s law of gravitation, gravitational acceleration and how it changes with distance from the centre of a planet.',
      theory: [
        `<p><strong>Newton's law of gravitation</strong>: two bodies with masses $m_1$ and $m_2$ at distance $r$ attract each other with force $F=G\\frac{m_1 m_2}{r^2}$, where $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$.</p>`,
        `<p><strong>Gravitational field</strong> is the region in which a gravitational force acts on a material body. The field strength, i.e. the <em>gravitational acceleration</em>, is $g=\\frac{F}{m}=G\\frac{M}{r^2}$, where $M$ is the mass of the source of the field.</p>`,
        `<p><strong>Why it decreases with distance:</strong> the gravitational effect spreads over an ever larger sphere of area $4\\pi r^2$. Therefore the gravitational acceleration changes with the square of the distance from the centre, not linearly.</p>`,
        `<p>At the surface of the Earth $g\\approx 9{,}81\\,\\text{m/s}^2$. At distance $r$ from the centre of the Earth, $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$, where $R$ is the radius of the Earth.</p>`,
        { fig: 'v1v4-gravitacia-r', caption: 'The gravitational acceleration falls with the square of the distance from the centre: at distance 2R it is one quarter of the surface value.' }
      ],
      examples: [
        { task: 'What is the gravitational acceleration at a height where the distance from the centre of the Earth is twice the radius of the Earth?',
          steps: ['The ratio of distances is $\\frac{r}{R}=2$, so $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.', '$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.', '<strong>Result: approximately $2{,}45\\,\\text{m/s}^2$</strong>'] },
        { task: 'Two bodies with masses $m_1=10\\,\\text{kg}$ and $m_2=5\\,\\text{kg}$ are at distance $r$. How does the force change if the distance is doubled?',
          steps: ['The force is proportional to $\\frac{1}{r^2}$, at $2r$ it decreases four times.', '<strong>Result: the force decreases to one quarter</strong>'] }
      ]
    },
    'v1-rotacia': {
      title: 'Rotation of a rigid body',
      summary: 'Angular velocity, moment of inertia and torque when a body rotates about an axis.',
      theory: [
        `<p>A <strong>rigid body</strong> does not change its shape when rotating about an axis: all its points rotate with the same <strong>angular velocity</strong> $\\omega$ in radians per second. If the body makes $f$ revolutions per second, then $\\omega=2\\pi f$, because one full turn corresponds to the angle $2\\pi$.</p>`,
        `<p>The tangential velocity of a point at distance $r$ from the axis is $v=\\omega\\,r$. Points farther from the axis move faster at the same angular velocity.</p>`,
        `<p><strong>Moment of inertia</strong> $I=\\sum m_i r_i^2$ is the rotational equivalent of mass. It depends not only on the mass but also on how far from the axis it is distributed. Newton's second law for rotation has the form $M=I\\,\\alpha$, where $M$ is the torque and $\\alpha$ the angular acceleration.</p>`,
        `<p><strong>Why there is a 2:</strong> the angle is measured in radians and one revolution is $2\\pi$ radians, not $\\pi$. That is why the frequency in hertz is multiplied by two pi.</p>`,
        { fig: 'v1v4-rotacia', caption: 'A point on a rigid body at distance r from the axis moves along a circle with tangential velocity v = ω·r.' }
      ],
      examples: [
        { task: 'A disc rotates with frequency $f=3\\,\\text{Hz}$. What is its angular velocity?',
          steps: ['$\\omega=2\\pi f=2\\pi\\cdot 3$.', '<strong>Result: $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>'] },
        { task: 'A point on a wheel is at distance $r=0{,}5\\,\\text{m}$ from the axis and the angular velocity is $\\omega=4\\,\\text{rad/s}$. What is its tangential velocity?',
          steps: ['$v=\\omega\\,r=4\\cdot 0{,}5$.', '<strong>Result: $v=2\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-sustavy': {
      title: 'Mechanics of particle systems',
      summary: 'The centre of mass of a system of particles as a weighted average of their positions, and the motion of the centre of mass.',
      theory: [
        `<p>A <strong>system of particles</strong> can be described by one significant point, its <strong>centre of mass</strong>. For two particles on the axis $x$ its position is $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$. It is a weighted average, in which the heavier particle pulls the centre of mass towards itself.</p>`,
        `<p>The centre of mass moves like a single particle with total mass $M=\\sum m_i$, on which the net external force acts: $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. Internal forces between the particles cancel each other out, so they do not change the motion of the centre of mass.</p>`,
        `<p><strong>Why the centre of mass and not an ordinary average:</strong> if the particles had equal masses, the arithmetic mean would result. With different masses, each coordinate must be weighted by its mass.</p>`,
        `<p>The kinetic energy of a system can be split into the energy of motion of the centre of mass and the energy of motion of the particles relative to the centre of mass. Thanks to this, complex motions can be broken down into simpler parts.</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: 'The centre of mass T lies closer to the heavier particle. Its coordinate is the weighted average of the coordinates of the particles.' }
      ],
      examples: [
        { task: 'A particle with mass $1\\,\\text{kg}$ is at point $x_1=0\\,\\text{m}$ and a particle with mass $3\\,\\text{kg}$ is at point $x_2=4\\,\\text{m}$. Where is the centre of mass?',
          steps: ['$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.', '<strong>Result: $x_T=3\\,\\text{m}$</strong>'] },
        { task: 'Two equally heavy particles are at points $x_1=2\\,\\text{m}$ and $x_2=8\\,\\text{m}$. Where is the centre of mass?',
          steps: ['For equal masses the centre of mass is the arithmetic mean: $x_T=\\frac{2+8}{2}$.', '<strong>Result: $x_T=5\\,\\text{m}$</strong>'] }
      ]
    },
    'v1-lagrange': {
      title: 'Lagrangian and Hamiltonian mechanics',
      summary: 'The Lagrangian as the difference of kinetic and potential energy, and the Hamiltonian as the total energy.',
      theory: [
        `<p>The <strong>Lagrangian</strong> of a system is $L=T-V$, where $T$ is the kinetic and $V$ the potential energy. Instead of tracking individual forces, it is enough to know these two energies and how they depend on the generalized coordinates $q$ and velocities $\\dot q$.</p>`,
        `<p>The <strong>Euler-Lagrange equations</strong> give the equations of motion: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. The advantage is that we may choose the coordinates freely, as long as they suit the problem, for example the angle of a pendulum.</p>`,
        `<p>For conservative forces the <strong>Hamiltonian</strong> is $H=T+V$, i.e. the total energy. By introducing the momenta $p=\\frac{\\partial L}{\\partial \\dot q}$, the equations of motion are written as pairs of first-order equations, the so-called Hamilton equations.</p>`,
        `<p><strong>Why the negative sign in $L$:</strong> potential energy acts against the motion and is therefore subtracted in the Lagrangian, while in the Hamiltonian it is added to the kinetic energy.</p>`
      ],
      examples: [
        { task: 'A particle with mass $m=2\\,\\text{kg}$ has velocity $v=3\\,\\text{m/s}$ at height $h=1\\,\\text{m}$. What is its Lagrangian if $g=10\\,\\text{m/s}^2$?',
          steps: ['$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.', '$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.', '<strong>Result: $L=T-V=9-20=-11\\,\\text{J}$</strong>'] },
        { task: 'The same particle has the Hamiltonian $H=T+V$. What is its value?',
          steps: ['$H=9+20$.', '<strong>Result: $H=29\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-teplota-tlak': {
      title: 'Temperature, pressure, heat and internal energy',
      summary: 'Thermodynamic temperature in kelvins, pressure as force per area and internal energy as the sum of the energies of particles.',
      theory: [
        `<p><strong>Thermodynamic temperature</strong> $T$ is measured in kelvins. It is proportional to the average kinetic energy of particles, so it cannot be negative. The conversion from degrees Celsius is $T=t+273{,}15$, where $0\\,\\text{K}$ is absolute zero.</p>`,
        `<p><strong>Pressure</strong> is the force acting perpendicularly on a unit area: $p=\\frac{F}{S}$, in pascals, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. A gas pushes on the walls of its container because its particles strike them and transfer momentum to them.</p>`,
        `<p><strong>Internal energy</strong> $U$ is the sum of the kinetic and potential energies of all particles of the system. Heat $Q$ is the energy transferred between bodies because of a temperature difference; it is not a "content" of a body.</p>`,
        `<p><strong>Why kelvin:</strong> the Celsius scale has an arbitrarily chosen zero. For formulas related to energy or to ratios we must use the zero at which energy vanishes, i.e. kelvins.</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: 'The temperature conversion is T = t + 273.15. Absolute zero corresponds to 0 K, that is −273.15 °C.' }
      ],
      examples: [
        { task: 'What is the temperature $t=27\\,{}^\\circ\\text{C}$ in kelvins?',
          steps: ['$T=t+273{,}15=27+273{,}15$.', '<strong>Result: $T=300{,}15\\,\\text{K}$</strong>'] },
        { task: 'A force $F=600\\,\\text{N}$ acts perpendicularly on an area $S=0{,}2\\,\\text{m}^2$. What is the pressure?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.', '<strong>Result: $p=3000\\,\\text{Pa}$</strong>'] }
      ]
    },
    'v2-stavove-rovnice': {
      title: 'Equations of state',
      summary: 'The equation of state of an ideal gas, pV = nRT, and its use in calculating pressure.',
      theory: [
        `<p>The <strong>equation of state</strong> of an ideal gas relates pressure $p$, volume $V$, amount of substance $n$ and temperature $T$: $pV=nRT$, where $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$.</p>`,
        `<p>An ideal gas is a model in which particles have no volume of their own and do not interact with each other, except in collisions. For a sufficiently dilute gas at ordinary temperatures the model is very accurate.</p>`,
        `<p><strong>How to use it:</strong> if we know three quantities, we can express the fourth. For example, the pressure is $p=\\frac{nRT}{V}$. When one quantity changes, the others change according to proportionalities: at constant temperature the pressure is inversely proportional to the volume.</p>`,
        `<p><strong>Watch the units:</strong> temperature must be in kelvins and volume in cubic metres, otherwise the result will not be in pascals. Litres and cubic decimetres are converted by dividing by $1000$.</p>`,
        { fig: 'v1v4-izoterma', caption: 'At constant temperature the product pV is constant, so the pressure as a function of volume forms a hyperbola: twice the volume means half the pressure.' }
      ],
      examples: [
        { task: 'A gas has $n=1\\,\\text{mol}$, temperature $T=300\\,\\text{K}$ and volume $V=2\\,\\text{dm}^3$. What is the pressure in kPa?',
          steps: ['$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.', '$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.', '<strong>Result: $p\\approx 1247\\,\\text{kPa}$</strong>'] },
        { task: 'At constant temperature the volume of a gas doubles. How does the pressure change?',
          steps: ['At constant $T$ and $n$ we have $p\\,V=\\text{const.}$', 'If $V\\to 2V$, then $p\\to \\frac{p}{2}$.', '<strong>Result: the pressure drops to half</strong>'] }
      ]
    },
    'v2-prvy-zakon': {
      title: 'The first and second law of thermodynamics',
      summary: 'Conservation of energy in thermal processes and the direction in which natural processes take place.',
      theory: [
        `<p>The <strong>first law of thermodynamics</strong> is the law of conservation of energy: the change of internal energy equals the heat supplied minus the work done by the gas: $\\Delta U=Q-W$, where $W$ is the work done by the gas.</p>`,
        `<p>If the gas does work, its internal energy decreases, because energy leaves into the surroundings. If work is done on the gas, the formula must be rewritten as $\\Delta U=Q+W_{\\text{on gas}}$. It is always important which sign convention is used.</p>`,
        `<p><strong>The second law of thermodynamics</strong> says that heat passes spontaneously only from a warmer body to a colder one, and that a heat engine cannot convert all heat into work. The direction of natural processes is determined by the increase of entropy.</p>`,
        `<p><strong>Why this matters:</strong> the first law says how much energy is conserved, and the second law says in which direction processes proceed. Without the second law one could build a perpetual motion machine of the second kind.</p>`,
        { fig: 'v1v4-prvy-zakon', caption: 'The heat Q supplied increases the internal energy of the gas, while the work W done by the gas carries energy away: ΔU = Q − W.' }
      ],
      examples: [
        { task: 'Heat $Q=300\\,\\text{J}$ is supplied to a gas and the gas does work $W=120\\,\\text{J}$. What is the change of its internal energy?',
          steps: ['$\\Delta U=Q-W=300-120$.', '<strong>Result: $\\Delta U=180\\,\\text{J}$</strong>'] },
        { task: 'When the gas is compressed it receives work $W_{\\text{on gas}}=50\\,\\text{J}$ and releases heat $Q=-20\\,\\text{J}$. What is the change of internal energy?',
          steps: ['$\\Delta U=Q+W_{\\text{on gas}}=-20+50$.', '<strong>Result: $\\Delta U=30\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-entropia': {
      title: 'Entropy and thermal processes',
      summary: 'Entropy as a measure of irreversibility and its change in a reversible isothermal process.',
      theory: [
        `<p><strong>Entropy</strong> $S$ is a quantity that measures the number of possible microstates of a system for a given macrostate. When heat $Q$ is reversibly absorbed at constant temperature $T$, entropy changes by $\\Delta S=\\frac{Q}{T}$, in units of $\\text{J/K}$.</p>`,
        `<p>Heat supplied at a low temperature increases entropy more than the same heat at a high temperature. That is why the formula divides by temperature and does not simply add up the heat.</p>`,
        `<p><strong>The second law of thermodynamics in terms of entropy:</strong> in an isolated system entropy never decreases; in reversible processes it stays constant, and in irreversible ones it grows. Spontaneous processes proceed towards higher entropy.</p>`,
        `<p><strong>Why it is so:</strong> a highly ordered state has few microstates, and the system naturally moves into states of which there are more. Entropy is therefore a measure of how much irreversible disorder arises in the system.</p>`
      ],
      examples: [
        { task: 'A gas at constant temperature $T=300\\,\\text{K}$ reversibly absorbs heat $Q=600\\,\\text{J}$. What is the change of its entropy?',
          steps: ['$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.', '<strong>Result: $\\Delta S=2\\,\\text{J/K}$</strong>'] },
        { task: 'How does the entropy change if the same heat $Q=600\\,\\text{J}$ is supplied at temperature $T=600\\,\\text{K}$?',
          steps: ['$\\Delta S=\\frac{600}{600}=1$.', '<strong>Result: $\\Delta S=1\\,\\text{J/K}$, which is less than at the lower temperature</strong>'] }
      ]
    },
    'v2-tepelne-motory': {
      title: 'Heat engines and refrigerators',
      summary: 'Efficiency of a heat engine, the Carnot cycle, and the limit set by the temperatures of the heater and the cooler.',
      theory: [
        `<p>A <strong>heat engine</strong> takes heat from a heater, converts part of it into work and passes the rest to a cooler. Its efficiency is $\\eta=\\frac{W}{Q_h}$, i.e. the ratio of the work done to the heat taken from the heater.</p>`,
        `<p>The <strong>Carnot cycle</strong> is the best possible reversible cycle between two temperatures. Its efficiency is $\\eta=1-\\frac{T_c}{T_h}$, where the temperatures must be in kelvins.</p>`,
        `<p>A <strong>refrigerator</strong> is a heat engine run in reverse: by doing work it moves heat from a colder space into a warmer one. For this reason one does not speak of its efficiency but of its coefficient of performance.</p>`,
        `<p><strong>Why efficiency is not 100 %:</strong> even an ideal engine must pass part of the heat to the cooler so that the cycle can close. The larger the temperature difference, the higher the possible efficiency.</p>`,
        { fig: 'v1v4-tepelny-motor', caption: 'The engine takes heat Q_h from the heater, converts part of it into work W and passes the rest Q_c to the cooler.' }
      ],
      examples: [
        { task: 'A heat engine operates between a heater at temperature $T_h=500\\,\\text{K}$ and a cooler at $T_c=300\\,\\text{K}$. What is its ideal efficiency?',
          steps: ['$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.', '$\\eta=1-0{,}6=0{,}4$.', '<strong>Result: $\\eta=40\\,\\%$</strong>'] },
        { task: 'An engine with efficiency $25\\,\\%$ receives heat $Q_h=800\\,\\text{J}$ from the heater. How much work does it do?',
          steps: ['$W=\\eta\\,Q_h=0{,}25\\cdot 800$.', '<strong>Result: $W=200\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-kinetika-plynov': {
      title: 'Kinetic theory of gases',
      summary: 'The molecular view of a gas: the average kinetic energy of particles is proportional to absolute temperature.',
      theory: [
        `<p>The <strong>kinetic theory of gases</strong> explains pressure and temperature through the motion of molecules. Pressure arises from collisions of molecules with the walls of the container, and temperature is a measure of their average kinetic energy.</p>`,
        `<p>The average kinetic energy of one molecule of an ideal gas is $\\overline{E_k}=\\frac{3}{2}k\\,T$, where $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ is the Boltzmann constant. It depends only on temperature, not on the kind of gas.</p>`,
        `<p><strong>Why the factor $\\frac{3}{2}$:</strong> a molecule can move in three directions and each direction contributes half of $k\\,T$ to the energy. Three degrees of freedom together give $\\frac{3}{2}k\\,T$.</p>`,
        `<p><strong>Why kelvin:</strong> the formula is directly proportional to absolute temperature. At $0\\,\\text{K}$ the kinetic energy of the molecules should be zero, which is why a Celsius degree is never used in this formula.</p>`
      ],
      examples: [
        { task: 'What is the average kinetic energy of a gas molecule at temperature $T=300\\,\\text{K}$? Use $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$.',
          steps: ['$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.', '$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.', '<strong>Result: approximately $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>'] },
        { task: 'If the temperature of a gas doubles, how does the average kinetic energy of a molecule change?',
          steps: ['The energy is directly proportional to $T$.', '<strong>Result: it doubles</strong>'] }
      ]
    },
    'v2-boltzmann': {
      title: 'Boltzmann distribution',
      summary: 'Distribution of particles among energy levels at a given temperature and the exponential decrease of occupation.',
      theory: [
        `<p>In thermal equilibrium particles distribute themselves among energy levels so that higher levels are less occupied. The ratio of the number of particles on levels $E_2$ and $E_1$ is $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$, assuming equal degeneracies of the levels.</p>`,
        `<p>The exponential means that a small energy difference between levels has a large effect when the temperature is low. At high temperature the levels become more evenly matched and the occupation approaches a uniform distribution.</p>`,
        `<p><strong>Why exactly an exponential:</strong> the probability of a state with energy $E$ decreases by a fixed factor for every equal increment of energy added as $E$ grows. This is exactly what leads to an exponential dependence.</p>`,
        `<p>The result shows that temperature is not only a measure of heat, but also a scale that determines which states are accessible. This distribution is the basis of all statistical calculations of macroscopic properties.</p>`,
        { fig: 'v1v4-boltzmann', caption: 'A level lying ΔE = k·T above the ground level is occupied, at temperature T, about e⁻¹ ≈ 0.37 times as much as the ground level.' }
      ],
      examples: [
        { task: 'A level lies $\\Delta E=kT$ above the ground level. What is the ratio $\\frac{N_2}{N_1}$?',
          steps: ['$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.', '<strong>Result: $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>'] },
        { task: 'A level lies $2\\,kT$ higher. What is the occupation ratio?',
          steps: ['$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.', '<strong>Result: approximately $0{,}135$</strong>'] }
      ]
    },
    'v2-statisticke': {
      title: 'Statistical explanation of macroscopic phenomena',
      summary: 'Boltzmann\'s relation between entropy and the number of microstates, and why macroscopic phenomena have a probabilistic character.',
      theory: [
        `<p><strong>Boltzmann's relation</strong> links entropy with the number of microstates $W$ that correspond to a given macrostate: $S=k\\ln W$. The natural logarithm means that entropy is additive when two independent systems are combined.</p>`,
        `<p>For $N$ independent particles, each of which can be in one of two states, the number of microstates is $W=2^N$. The entropy is then $S=k\\,N\\ln 2$, which grows in proportion to the number of particles.</p>`,
        `<p><strong>Why macroscopic phenomena are probabilistic:</strong> macrostates with a large number of microstates occur much more often. For a mole of particles the difference in probabilities is so enormous that a spontaneous decrease of entropy is practically never observed.</p>`,
        `<p><strong>Why the logarithm:</strong> the number of microstates grows exponentially with the number of particles; the logarithm of it turns it into a linear quantity that can reasonably be added and compared.</p>`
      ],
      examples: [
        { task: 'A system has $N=3$ independent particles, each with two states. How many microstates $W$ does it have?',
          steps: ['$W=2^N=2^3$.', '<strong>Result: $W=8$</strong>'] },
        { task: 'What is the value of $S/k$ for $N=4$ particles with two states each? Round to 2 decimal places.',
          steps: ['$W=2^4=16$, so $\\frac{S}{k}=\\ln 16$.', '$\\ln 16=4\\ln 2\\approx 2{,}77$.', '<strong>Result: $\\frac{S}{k}\\approx 2{,}77$</strong>'] }
      ]
    },
    'v3-elektricke-pole': {
      title: 'Electric field and electric potential',
      summary: 'Field strength and potential of a point charge, the superposition principle and work in an electric field.',
      theory: [
        `<p>The <strong>electric field strength</strong> at a point is the force on a positive test charge divided by its magnitude: $\\vec E=\\frac{\\vec F}{q}$, in units of $\\text{V/m}$. The field is a property of space, not a property of the test charge.</p>`,
        `<p>For a point charge $Q$ at distance $r$ we have $E=k\\frac{Q}{r^2}$, where $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$. The direction of the field is radial: away from a positive charge and towards a negative one.</p>`,
        `<p><strong>Electric potential</strong> is energy per unit charge: $V=k\\frac{Q}{r}$. The work done in moving a charge $q$ between two points is $W=q\\,\\Delta V$ and does not depend on the path, only on the starting and ending points.</p>`,
        `<p><strong>Superposition:</strong> the fields of several charges are added as vectors, while their potentials are added as scalars. That is why the potential is simpler to calculate than the field strength.</p>`,
        { fig: 'v1v4-elektricke-pole', caption: 'Field lines of a positive point charge emerge radially outwards. The field strength falls with the square of the distance.' }
      ],
      examples: [
        { task: 'A point charge $Q=2\\,\\mu\\text{C}$ is at distance $r=3\\,\\text{m}$. What is the field strength in kV/m? Use $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$.',
          steps: ['$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.', '$E\\approx 2{,}00\\,\\text{kV/m}$', '<strong>Result: approximately $2{,}00\\,\\text{kV/m}$</strong>'] },
        { task: 'How does the field strength of a point charge change if the distance is doubled?',
          steps: ['The field strength is proportional to $\\frac{1}{r^2}$.', '$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.', '<strong>Result: it falls to one quarter</strong>'] }
      ]
    },
    'v3-gauss': {
      title: 'Gauss\'s law',
      summary: 'Electric flux through a closed surface and its relation to the charge inside the surface.',
      theory: [
        `<p>The <strong>electric flux</strong> through a surface $S$ is $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$, i.e. the sum of the components of the field perpendicular to the surface. Its unit is $\\text{N\\,m}^2/\\text{C}$.</p>`,
        `<p><strong>Gauss's law</strong> states that the flux through a closed surface is proportional to the charge inside the surface: $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{inside}}}{\\varepsilon_0}$, where $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$.</p>`,
        `<p><strong>Why it holds:</strong> field lines emerge from positive charges and enter negative ones. The flux through a closed surface therefore captures exactly as many field lines as there is charge inside, regardless of the shape of the surface.</p>`,
        `<p>Gauss's law is convenient for symmetric problems, for example a sphere or an infinite plane of charge. On a suitably chosen surface the field can be taken out of the integral and the calculation is simple.</p>`,
        { fig: 'v1v4-gauss', caption: 'The total flux through a closed surface depends only on the charge inside the surface, Φ = Q/ε₀, regardless of the shape of the surface.' }
      ],
      examples: [
        { task: 'A charge $Q=1\\,\\mu\\text{C}$ passes through a closed surface. What is the total flux through the surface, if $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$?',
          steps: ['$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.', '$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$', '<strong>Result: approximately $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>'] },
        { task: 'The charge inside the surface doubles. How does the flux change?',
          steps: ['The flux is directly proportional to the charge.', '<strong>Result: it doubles</strong>'] }
      ]
    },
    'v3-elektricky-prud': {
      title: 'Electric current and electric circuits',
      summary: 'Ohm\'s law, resistors in series and in parallel, and the total current from the source.',
      theory: [
        `<p><strong>Electric current</strong> is the amount of charge passing through a cross-section per unit time: $I=\\frac{\\Delta Q}{\\Delta t}$, in amperes. The direction of current is conventionally taken as the direction of motion of positive charges.</p>`,
        `<p><strong>Ohm's law</strong>: the voltage across a conductor is proportional to the current, $U=R\\,I$, where $R$ is the resistance in ohms. In a series connection the resistances add, $R=R_1+R_2$.</p>`,
        `<p>In a <strong>parallel connection</strong> the voltage across both branches is the same and the currents add. The equivalent resistance is smaller than the smallest of the resistances: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
        `<p><strong>Why the parallel resistance is smaller:</strong> the second branch gives the current another path, so at the same voltage a larger total current flows. The source therefore delivers more current than it would through one branch alone.</p>`,
        { fig: 'v1v4-paralelne', caption: 'In a parallel connection the voltage across both branches is the same, and the total current I is the sum of the branch currents.' }
      ],
      examples: [
        { task: 'Two resistors $R_1=6\\,\\Omega$ and $R_2=3\\,\\Omega$ are connected in parallel to a voltage $U=6\\,\\text{V}$. What total current does the source supply?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, so $R=2\\,\\Omega$.', '$I=\\frac{U}{R}=\\frac{6}{2}$.', '<strong>Result: $I=3\\,\\text{A}$</strong>'] },
        { task: 'Resistors $4\\,\\Omega$ and $6\\,\\Omega$ are connected in series to a voltage of $10\\,\\text{V}$. What current flows?',
          steps: ['$R=4+6=10\\,\\Omega$.', '$I=\\frac{10}{10}$.', '<strong>Result: $I=1\\,\\text{A}$</strong>'] }
      ]
    },
    'v3-magneticke-pole': {
      title: 'Magnetic field and magnetic force',
      summary: 'The Lorentz force on a moving charge and on a conductor carrying current in a magnetic field.',
      theory: [
        `<p>The <strong>magnetic flux density</strong> $\\vec B$ describes the magnetic field; its unit is the tesla, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. The field exerts a force only on moving charges; a static charge does not respond to the magnetic force.</p>`,
        `<p>The <strong>Lorentz force</strong> on a charge $q$ moving with velocity $\\vec v$ is $\\vec F=q\\,\\vec v\\times\\vec B$. Its magnitude is $F=q\\,v\\,B\\sin\\alpha$, where $\\alpha$ is the angle between $\\vec v$ and $\\vec B$.</p>`,
        `<p><strong>Direction of the force</strong> is found with the right-hand rule: the fingers point in the direction of velocity, the palm in the direction of the field, and the thumb in the direction of the force for a positive charge. For a negative charge the force is opposite.</p>`,
        `<p><strong>Why the force is perpendicular to the velocity:</strong> the magnetic force does no work, it only changes the direction of motion. A particle in a perpendicular field therefore moves in a circle rather than accelerating. This is why magnetic fields are used to bend the paths of particles.</p>`,
        { fig: 'v1v4-lorentz', caption: 'The Lorentz force on a positive charge flying perpendicular to the field is perpendicular both to the velocity and to the field. It changes the direction of motion, not its speed.' }
      ],
      examples: [
        { task: 'An electron flies perpendicular to a field with flux density $B=0{,}2\\,\\text{T}$ at speed $v=10^{5}\\,\\text{m/s}$. What is the magnitude of the force, if $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$?',
          steps: ['$\\alpha=90^\\circ$, so $\\sin\\alpha=1$.', '$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.', '<strong>Result: $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>'] },
        { task: 'A particle with charge $q=2\\,\\mu\\text{C}$ flies at speed $v=300\\,\\text{m/s}$ perpendicular to a field $B=0{,}5\\,\\text{T}$. What is the force in micronewtons?',
          steps: ['$F=qvB=2\\cdot 300\\cdot 0{,}5$ in units of $\\mu\\text{N}$.', '<strong>Result: $F=300\\,\\mu\\text{N}$</strong>'] }
      ]
    },
    'v3-indukcia': {
      title: 'Electromagnetic induction',
      summary: 'Faraday\'s law: a voltage arises when the magnetic flux through a loop changes.',
      theory: [
        `<p>The <strong>magnetic flux</strong> through a surface $S$ is $\\Phi=B\\,S\\cos\\alpha$, where $\\alpha$ is the angle between the field and the normal of the surface. Its unit is the weber, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
        `<p><strong>Faraday's law of induction</strong>: a voltage proportional to the rate of change of flux arises in a closed loop, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. The negative sign expresses Lenz's rule, that the induced current opposes the change of flux.</p>`,
        `<p><strong>How a voltage arises:</strong> by changing the flux density, by changing the area, or by rotating the loop in the field. If the flux is constant, no voltage arises, even if the field is strong.</p>`,
        `<p><strong>Why there is division by time:</strong> the voltage depends on how fast the flux changes, not on its magnitude. A rapid change gives a larger voltage than a slow one, even for the same total change of flux.</p>`,
        { fig: 'v1v4-tok-indukcia', caption: 'The magnetic flux through a surface is Φ = B·S·cos α, where α is the angle between the field B and the normal n of the surface.' }
      ],
      examples: [
        { task: 'The area of a loop $S=0{,}5\\,\\text{m}^2$ is perpendicular to a field that changes by $\\Delta B=4\\,\\text{T}$ in $2\\,\\text{s}$. What voltage is induced?',
          steps: ['$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.', '<strong>Result: $U_i=1\\,\\text{V}$</strong>'] },
        { task: 'The flux through a surface is constant. What voltage is induced?',
          steps: ['The voltage is proportional to the change of flux, $\\Delta\\Phi=0$.', '<strong>Result: $U_i=0\\,\\text{V}$</strong>'] }
      ]
    },
    'v3-maxwell': {
      title: 'Maxwell\'s equations',
      summary: 'Four equations linking electric and magnetic fields, and their use for a conductor carrying current.',
      theory: [
        `<p><strong>Maxwell's equations</strong> in integral form are four: Gauss's law for the electric field, Gauss's law for the magnetic field (magnetic charges do not exist), Faraday's law of induction, and the Ampère-Maxwell law. Together they describe all classical electromagnetic phenomena.</p>`,
        `<p>The <strong>Ampère-Maxwell law</strong> states that the circulation of the magnetic field along a closed curve is proportional to the current through it and to the rate of change of electric flux: $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. For stationary processes only the current term remains.</p>`,
        `<p>From Ampère's law for a long straight conductor carrying current $I$ at distance $r$ it follows that $B=\\frac{\\mu_0 I}{2\\pi r}$, where $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.</p>`,
        `<p><strong>Why the displacement current matters:</strong> without the term involving the change of electric flux the law would not agree with conservation of charge. Maxwell added it, and from the equations the existence of electromagnetic waves followed.</p>`,
        { fig: 'v1v4-ampere', caption: 'Around a straight conductor carrying current, the field lines of the magnetic flux density are circles. The flux density B falls with the distance r.' }
      ],
      examples: [
        { task: 'A straight conductor carries a current $I=10\\,\\text{A}$. What is the magnetic flux density at distance $r=0{,}2\\,\\text{m}$? Give the result in microtesla.',
          steps: ['$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.', '$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.', '<strong>Result: $B=10\\,\\mu\\text{T}$</strong>'] },
        { task: 'How does the flux density of a current-carrying conductor change if the distance from it is doubled?',
          steps: ['$B$ is proportional to $\\frac{1}{r}$.', '<strong>Result: it falls to half</strong>'] }
      ]
    },
    'v3-em-vlny': {
      title: 'Electromagnetic waves',
      summary: 'A wave as an alternating electric and magnetic field, perpendicular to the direction of propagation, travelling at the speed of light c.',
      theory: [
        `<p>A changing electric field creates a magnetic field, and a changing magnetic field creates an electric field. Their mutual support propagates through space as an <strong>electromagnetic wave</strong>. In a vacuum its speed is $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        `<p>A wave has frequency $f$ and wavelength $\\lambda$. The relation $c=\\lambda\\,f$ holds, from which $\\lambda=\\frac{c}{f}$ follows. The higher the frequency, the shorter the wavelength.</p>`,
        `<p>The electric and magnetic fields in a wave are perpendicular to each other, and both are perpendicular to the direction of propagation. Therefore an electromagnetic wave is <em>transverse</em>.</p>`,
        `<p><strong>Why this matters:</strong> radio waves, light and X-rays are of the same nature. They differ only in frequency, and hence in wavelength, and their different uses are related to this.</p>`,
        { fig: 'v1v4-em-vlna', caption: 'The electric and magnetic components of the wave oscillate in phase, are perpendicular to each other, and both are perpendicular to the direction of propagation c.' }
      ],
      examples: [
        { task: 'A transmitter operates at frequency $f=100\\,\\text{MHz}$. What is the wavelength of the wave in air?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.', '<strong>Result: $\\lambda=3\\,\\text{m}$</strong>'] },
        { task: 'The wavelength is $\\lambda=0{,}5\\,\\text{m}$. What is the frequency of the wave?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.', '<strong>Result: $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>'] }
      ]
    },
    'v3-sirenie': {
      title: 'Propagation of electromagnetic radiation',
      summary: 'The speed of light in a medium, the index of refraction and the influence of the permittivity and permeability of the medium.',
      theory: [
        `<p>In a vacuum electromagnetic radiation travels at speed $c$; in a medium its speed is lower. The <strong>index of refraction</strong> $n=\\frac{c}{v}$ tells how many times the speed in the medium is lower.</p>`,
        `<p>For a non-magnetic medium with relative permittivity $\\varepsilon_r$ and permeability $\\mu_r=1$ we have $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$. A dielectric with a larger permittivity therefore slows the wave down.</p>`,
        `<p><strong>Why the wave slows down:</strong> the electric field of the wave polarizes the atoms of the material, their oscillations are delayed, and the resulting wave travels more slowly. The frequency does not change on entering the material; the speed and the wavelength do.</p>`,
        `<p>This very effect explains the refraction of light at the boundary of two media, as well as the principle of lenses and optical fibres.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'On entering a material the speed of the wave decreases, so its wavelength shortens. The frequency remains the same.' }
      ],
      examples: [
        { task: 'A medium has relative permittivity $\\varepsilon_r=4$. What is its index of refraction?',
          steps: ['$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.', '<strong>Result: $n=2$</strong>'] },
        { task: 'What is the speed of light in a medium with index of refraction $n=2$, if $c=3\\cdot 10^{8}\\,\\text{m/s}$?',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.', '<strong>Result: $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-vlnenie': {
      title: 'Mechanical and electromagnetic waves',
      summary: 'What a wave transports, and why mechanical waves need a material medium while electromagnetic waves do not.',
      theory: [
        `<p>A wave is the propagation of oscillations through space. The material itself does not travel along with it; what is transferred is <strong>energy</strong> and <strong>information</strong>. Depending on what oscillates, waves are divided into <strong>mechanical</strong> (matter oscillates, e.g. sound, water waves, seismic waves) and <strong>electromagnetic</strong> (the electric and magnetic field oscillates, e.g. light, radio waves, X-rays).</p>`,
        `<p>Mechanical waves need a <strong>material medium</strong>, because each particle sets its neighbour oscillating. That is why sound does not propagate in a vacuum. Electromagnetic waves propagate even in a vacuum, because oscillations of the field need no particle to pass them on.</p>`,
        `<p>According to the direction of oscillations we distinguish <strong>transverse</strong> waves (oscillations perpendicular to the direction of propagation, e.g. a wave on a string and light) and <strong>longitudinal</strong> waves (oscillations along the direction of propagation, e.g. sound in gases). The speed of sound in air is approximately $340\\,\\text{m/s}$, and the speed of light in a vacuum is $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$.</p>`,
        { fig: 'obr-vlna', caption: 'Transverse wave: the wavelength λ is the distance between two neighbouring points in the same phase.' }
      ],
      examples: [
        { task: 'Sunlight arrives at Earth through empty space. Is this a mechanical or an electromagnetic wave?',
          steps: ['There is no matter between the Sun and the Earth, so the wave propagates in a vacuum.', '<strong>Result: it is an electromagnetic wave.</strong>'] },
        { task: 'Why can sound not be heard in empty space between two spaceships?',
          steps: ['Sound is a mechanical wave and needs a material medium.', 'In a vacuum there are no particles, so the oscillations have no one to pass them on to.', '<strong>Result: sound does not propagate in a vacuum.</strong>'] }
      ]
    },
    'v4-frekvencia': {
      title: 'Frequency, wavelength and amplitude',
      summary: 'Quantities describing a wave and the relation v = λ·f between them.',
      theory: [
        `<p>A wave is described by three basic quantities: the <strong>amplitude</strong> $A$ (the largest displacement from the equilibrium position), the <strong>frequency</strong> $f$ (the number of oscillations per second, unit $\\text{Hz}$) and the <strong>wavelength</strong> $\\lambda$ (the distance between two nearest points that oscillate in phase).</p>`,
        `<p>The period $T=\\frac{1}{f}$ is the time of one oscillation. The amplitude is related to the <em>strength</em> of the wave (e.g. the loudness of sound or the brightness of light), while the frequency determines the pitch of a tone or the colour of light.</p>`,
        `<p>The speed of propagation of a wave is $v=\\lambda\\cdot f$. When it enters another medium the speed and the wavelength change, but <strong>the frequency does not change</strong>: it is determined by the source of oscillations, not by the medium.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'On entering a material the speed of the wave decreases, so its wavelength shortens. The frequency remains the same.' }
      ],
      examples: [
        { task: 'A wave has frequency $f=50\\,\\text{Hz}$ and wavelength $\\lambda=6\\,\\text{m}$. What is its speed?',
          steps: ['$v=\\lambda\\cdot f=6\\cdot 50$.', '<strong>Result: $v=300\\,\\text{m/s}$</strong>'] },
        { task: 'What is the period of a wave with frequency $f=4\\,\\text{Hz}$?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{4}$.', '<strong>Result: $T=0{,}25\\,\\text{s}$</strong>'] }
      ]
    },
    'v4-interferencia': {
      title: 'Interference and diffraction',
      summary: 'Adding waves: when they reinforce and when they cancel, and why waves bend around obstacles.',
      theory: [
        `<p><strong>Principle of superposition:</strong> the resulting oscillation at a point is the sum of the oscillations of all waves arriving there. If the waves oscillate in phase (coherently), the result depends on the <strong>path difference</strong> $\\Delta d$.</p>`,
        `<p><strong>Reinforcement</strong> occurs if the path difference is an integer multiple of the wavelength: $\\Delta d=m\\,\\lambda$. <strong>Cancellation</strong> occurs if the path difference is an odd multiple of half the wavelength: $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
        `<p><strong>Diffraction</strong> is the bending of a wave around an obstacle or through a narrow slit. It is more pronounced if the size of the obstacle is comparable with the wavelength. That is why sound bends easily around a corner, while light produces a sharp shadow.</p>`,
        { fig: 'v1v4-interferencia', caption: 'Waves in phase reinforce each other at a path difference m·λ; in antiphase they cancel each other at (m + ½)·λ.' }
      ],
      examples: [
        { task: 'Two coherent waves with wavelength $\\lambda=0{,}5\\,\\text{m}$ have a path difference $\\Delta d=1{,}25\\,\\text{m}$. Does reinforcement or cancellation occur?',
          steps: ['$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.', 'The number $2{,}5$ is an odd multiple of half: $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.', '<strong>Result: cancellation.</strong>'] }
      ]
    },
    'v4-polarizacia': {
      title: 'Polarization of light',
      summary: 'The transverse nature of light, the polarizer and Malus\'s law for the intensity behind the analyzer.',
      theory: [
        `<p>Light is a transverse wave: the electric field oscillates perpendicular to the direction of propagation. <strong>Polarized</strong> light has oscillations in a single plane. An ordinary source (a light bulb, the Sun) emits unpolarized light, in which the plane of oscillation changes randomly.</p>`,
        `<p>A polarizer transmits only the component of oscillations in its own direction. When <strong>unpolarized</strong> light passes through the first polarizer, its intensity is reduced to one half.</p>`,
        `<p><strong>Malus's law:</strong> if linearly polarized light of intensity $I_0$ falls on an analyzer rotated by an angle $\\varphi$, the intensity behind it is $I=I_0\\cos^2\\varphi$. The cosine is squared because only the component of the field along the axis is transmitted, and intensity is proportional to the square of the amplitude.</p>`,
        { fig: 'v1v4-polarizacia', caption: 'The analyzer transmits only the component of oscillations along its own direction, E·cos φ. The intensity is proportional to cos²φ.' }
      ],
      examples: [
        { task: 'Linearly polarized light with intensity $I_0=80$ passes through an analyzer rotated by $60^\\circ$. What is its intensity behind it?',
          steps: ['$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.', '$I=80\\cdot 0{,}25=20$.', '<strong>Result: $I=20$</strong>'] }
      ]
    },
    'v4-geometricka-optika': {
      title: 'Geometric and wave optics',
      summary: 'Index of refraction, the speed of light in materials and Snell\'s law of refraction.',
      theory: [
        `<p><strong>Geometric optics</strong> describes light as rays that travel in straight lines, are reflected according to the law of reflection ($\\alpha=\\alpha'$) and are refracted at the boundary between media. Wave optics explains phenomena that rays do not capture, for example interference and diffraction.</p>`,
        `<p>The <strong>index of refraction</strong> $n=\\frac{c}{v}$ states how many times slower light is in a material than in a vacuum. In water $n\\approx 1{,}33$, in glass about $1{,}5$. The speed of light in a material is $v=\\frac{c}{n}$.</p>`,
        `<p><strong>Snell's law</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ tells how a ray is refracted. Entering an optically denser medium ($n_2>n_1$) bends the ray towards the normal, while entering a less dense one bends it away from the normal.</p>`,
        { fig: 'v1v4-lom', caption: 'On entering an optically denser medium the ray is refracted towards the normal, so β is smaller than α (n₂ > n₁).' }
      ],
      examples: [
        { task: 'What is the speed of light in glass with index of refraction $n=1{,}5$? Use $c=3\\cdot 10^{8}\\,\\text{m/s}$.',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.', '<strong>Result: $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-zobrazovanie': {
      title: 'Imaging with lenses and mirrors',
      summary: 'The imaging equation for a converging lens and determining the position of the image.',
      theory: [
        `<p>A converging lens concentrates parallel rays into a <strong>focus</strong> at distance $f$. An object at distance $a$ in front of the lens forms an image at distance $b$ behind it.</p>`,
        `<p>The <strong>imaging equation</strong> holds for thin lenses and mirrors: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. It is a relation among three quantities, so if we know two of them, we calculate the third.</p>`,
        `<p>If $a>f$, the image is real and inverted. Beware of a mistake: we add the reciprocals, not the distances themselves. The relation $b=a+f$ does not hold.</p>`,
        { fig: 'v1v4-zobrazenie', caption: 'An object at twice the focal length gives a real, inverted image of the same size at distance 2f.' }
      ],
      examples: [
        { task: 'An object is at distance $a=30\\,\\text{cm}$ in front of a converging lens with focal length $f=15\\,\\text{cm}$. Where does the image form?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.', '<strong>Result: $b=30\\,\\text{cm}$</strong>'] }
      ]
    },
    'v4-lasery': {
      title: 'Lasers and optical instruments',
      summary: 'Properties of laser light, calculation of frequency and the magnification of a magnifying glass.',
      theory: [
        `<p>A <strong>laser</strong> (light amplification by stimulated emission of radiation) produces light with properties that ordinary sources lack: it is <strong>monochromatic</strong> (a single wavelength), <strong>coherent</strong> (oscillations in phase), and forms a <strong>narrow beam</strong>. That is why it can be focused into a small spot.</p>`,
        `<p>For any light $c=\\lambda\\cdot f$, so the frequency is $f=\\frac{c}{\\lambda}$. In optics the wavelength is usually given in nanometres: $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
        `<p><strong>Optical instruments</strong> use lenses for magnification. A magnifying glass with focal length $f$ gives, for comfortable observation, a magnification $Z=\\frac{d}{f}$, where $d\\approx 250\\,\\text{mm}$ is the distance of distinct vision. A shorter focal length means a larger magnification.</p>`
      ],
      examples: [
        { task: 'Red laser light has wavelength $\\lambda=650\\,\\text{nm}$. What is its frequency in units of $10^{14}\\,\\text{Hz}$?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.', '<strong>Result: approximately $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>'] }
      ]
    },
    'v4-vlakna': {
      title: 'Basics of optical fibres',
      summary: 'Total internal reflection at the boundary of the core and the cladding, and the critical angle.',
      theory: [
        `<p>An optical fibre guides light inside a thin core with index of refraction $n_1$, surrounded by a cladding with a lower index $n_2&lt;n_1$. The light is kept in the core by <strong>total internal reflection</strong>, not refraction, so it is hardly lost.</p>`,
        `<p>Total internal reflection occurs if the angle of incidence exceeds the <strong>critical angle</strong> $\\alpha_c$, for which $\\sin\\alpha_c=\\frac{n_2}{n_1}$. For a larger difference of indices the critical angle is smaller and the fibre captures more light.</p>`,
        `<p>The signal is transmitted as pulses of light. Fibres are used in the internet and in telecommunications, because light can carry a lot of information over long distances and is not disturbed by electromagnetic fields.</p>`,
        { fig: 'v1v4-vlakno', caption: 'Light is kept in the core by total internal reflection, because it strikes at an angle greater than the critical angle, where sin α_c = n₂/n₁.' }
      ],
      examples: [
        { task: 'The core of a fibre has $n_1=1{,}5$ and the cladding $n_2=1{,}0$. What is the sine of the critical angle?',
          steps: ['$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.', '<strong>Result: $\\sin\\alpha_c\\approx 0{,}67$</strong>'] }
      ]
    }
  }
});
