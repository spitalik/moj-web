/* English: grades 7–9 lessons (js/rocniky/r7.js, r8.js, r9.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    'r7-pohyb': {
      title: 'Motion of bodies and how we describe it',
      summary: 'Motion and rest are relative and depend on the reference system.',
      theory: [
        `<p>Motion and rest are <strong>relative</strong>: they depend on what we compare them with. The body with respect to which we describe motion is called the
       <strong>reference body</strong>. Together with clocks it forms a <strong>reference system</strong>.</p>`,
        `<p>A passenger sitting in a moving train is at rest relative to the train, but moving relative to the trees by the railway. Both statements are true,
       each in a different reference system. Therefore, when we describe motion, we always say what we describe it relative to.</p>`,
        `<ul>
         <li><strong>Trajectory</strong>: the line that a body traces while moving.</li>
         <li><strong>Path</strong> $s$: the length of the trajectory between two places. It is measured in metres.</li>
         <li><strong>Point mass</strong>: a body whose dimensions we neglect when describing its motion.</li>
       </ul>`,
        `<p>Path is the length of the whole route, not the distance between the start and the end. If we walk 3 m east and then 4 m north,
       the path is $7\\,\\text{m}$, although the distance from the start is only $5\\,\\text{m}$.</p>`,
        { fig: 'obr-draha', caption: 'Path is the whole route, distance is the straight line between the start and the end.' }
      ],
      examples: [
        { task: 'A passenger sits in a fast train. Is he at rest or in motion?',
          steps: ['Relative to the train he is sitting in, he does not move.', 'Relative to the trees by the railway, he is moving.', '<strong>Result: at rest relative to the train, in motion relative to the surroundings.</strong>'] },
        { task: 'A pedestrian walked 3 m east and then 4 m north. What is his path?',
          steps: ['The path is the length of the whole route, so we add both sections.', '$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$', '<strong>Result: 7 m</strong>'] }
      ]
    },
    'r7-draha': {
      title: 'Path, time and average speed',
      summary: 'Calculating speed, path and time, and converting between m/s and km/h.',
      theory: [
        `<p><strong>Speed</strong> tells us what path a body covers in a unit of time. Formula: $v=\\frac{s}{t}$, where $s$ is the path and $t$ the time.
       The SI unit is $\\text{m/s}$; in road traffic $\\text{km/h}$ is used.</p>`,
        `<p>From this formula we derive two more: $s=v\\cdot t$ and $t=\\frac{s}{v}$. Always check the units before calculating.
       If the path is in kilometres and the time in minutes, we must convert one of the quantities.</p>`,
        `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$: to convert from metres per second to kilometres per hour, we multiply by $3{,}6$.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$: to convert from kilometres per hour to metres per second, we divide by $3{,}6$.</li>
       </ul>`,
        `<p><strong>Average speed</strong> is not equal to the average of speeds. It is calculated as the total path divided by the total time:
       $v_p=\\frac{s_{\\text{celk}}}{t_{\\text{celk}}}$. If a car stopped for a while on part of the route, its average speed is lower than its highest speed.</p>`,
        { fig: 'obr-draha', caption: 'Path is the whole route, distance is the straight line between the start and the end.' }
      ],
      examples: [
        { task: 'A car covered $120\\,\\text{km}$ in $2\\,\\text{h}$. What was its average speed?',
          steps: ['$v=\\frac{s}{t}=\\frac{120}{2}$', '$v=60\\,\\text{km/h}$', '<strong>Result: 60 km/h</strong>'] },
        { task: 'A cyclist moves at $5\\,\\text{m/s}$. What is this speed in $\\text{km/h}$?',
          steps: ['To convert from m/s to km/h we multiply by 3.6.', '$5\\cdot 3{,}6=18\\,\\text{km/h}$', '<strong>Result: 18 km/h</strong>'] }
      ]
    },
    'r7-rovnomerny': {
      title: 'Uniform and non-uniform motion',
      summary: 'When the speed does not change, and how to calculate motion whose speed changes.',
      theory: [
        `<p><strong>Uniform motion</strong>: a body covers the same path in every equal time interval, so its speed does not change.
       In a graph of path against time this is a straight line, and its slope corresponds to the speed.</p>`,
        `<p><strong>Non-uniform motion</strong>: the speed changes, the body speeds up or slows down. An example is a train pulling away or a stone falling to the ground.</p>`,
        `<p>For uniform motion the formula $s=v\\cdot t$ holds, where $v$ is the constant speed. For non-uniform motion we can use the
       <strong>average speed</strong>: total path divided by total time. It shows only the overall result, not how the speed changed.</p>`,
        `<ol>
         <li>If a body covers equal paths in equal times, the motion is uniform.</li>
         <li>If the paths covered in equal times change, the motion is non-uniform.</li>
         <li>We never calculate the average speed as the average of two speeds.</li>
       </ol>`,
        { fig: 'r6r9-rovnomerny', caption: 'In uniform motion the graph of path against time is a straight line and its slope is the speed. When accelerating it is a curve.' }
      ],
      examples: [
        { task: 'A pedestrian walks at a constant speed of $4\\,\\text{km/h}$. What path does he cover in $3\\,\\text{h}$?',
          steps: ['The motion is uniform, so $s=v\\cdot t$.', '$s=4\\cdot 3=12\\,\\text{km}$', '<strong>Result: 12 km</strong>'] },
        { task: 'A body covers 5 m every second. What kind of motion is it, and what path does it cover in 6 s?',
          steps: ['In equal times it covers equal paths, so the motion is uniform.', '$s = 5\\cdot 6 = 30\\,\\text{m}$', '<strong>Result: uniform motion, 30 m</strong>'] }
      ]
    },
    'r7-sila': {
      title: 'Force and its effects',
      summary: 'What a force is, what effects it has, and how forces with the same or opposite directions are added.',
      theory: [
        `<p><strong>Force</strong> is the mutual interaction of bodies. We do not see a force, we see its effects. It is denoted by $F$ and its unit is the newton: $1\\,\\text{N}$.</p>`,
        `<ul>
         <li>It can <strong>change the speed</strong> of a body: start it moving, slow it down or stop it.</li>
         <li It can <strong>change the direction</strong> of motion, for example when a bicycle turns a corner.</li>
         <li It can <strong>change the shape</strong> of a body: squeezing a sponge or stretching a rubber band.</li>
       </ul>`,
        `<p>A force is a <strong>vector</strong>: it has a magnitude, a direction and a point of application. We draw it as an arrow. If forces act on a body in the same direction,
       we add them. If they act in opposite directions, we subtract the smaller from the larger, and the resulting force has the direction of the larger one.</p>`,
        `<p>Forces always occur in pairs: if a hand pushes on a wall, the wall pushes back on the hand with an equally large force in the opposite direction.
       However, these two forces act on different bodies, so they do not cancel each other out.</p>`,
        { fig: 'obr-sily', caption: 'Forces acting on a body on a horizontal surface: pulling force F, friction Ftr and the normal force of the surface N.' }
      ],
      examples: [
        { task: 'Two students pull a cart in the same direction with forces $30\\,\\text{N}$ and $20\\,\\text{N}$. What is the resulting force?',
          steps: ['The forces have the same direction, so we add them.', '$30 + 20 = 50$', '<strong>Result: 50 N</strong>'] },
        { task: 'The same cart is pulled by the first student with a force of $30\\,\\text{N}$ to the right and by the second with a force of $20\\,\\text{N}$ to the left. What is the resulting force?',
          steps: ['The forces have opposite directions, so we subtract them.', '$30 - 20 = 10$, the resulting force points to the right.', '<strong>Result: 10 N to the right</strong>'] }
      ]
    },
    'r7-tiaz': {
      title: 'Gravitational force and weight',
      summary: 'Why bodies fall on Earth, and how mass differs from weight.',
      theory: [
        `<p>All bodies attract each other with a <strong>gravitational force</strong>. The greater the masses and the closer the bodies, the greater the attractive force.
       Earth's gravity keeps us on its surface, and the Moon orbits the Earth.</p>`,
        `<p><strong>Weight</strong> $F_G$ is the force with which the Earth attracts a body towards itself. We calculate it from the formula $F_G=m\\cdot g$, where $m$ is the mass in kilograms
       and $g$ is the gravitational acceleration. On Earth $g\\approx 10\\,\\text{N/kg}$ (more precisely $9{,}81\\,\\text{N/kg}$).</p>`,
        `<p><strong>Mass and weight are not the same.</strong> Mass in kilograms tells how much matter a body contains, and it is the same everywhere.
       Weight in newtons depends on the place. On the Moon $g\\approx 1{,}6\\,\\text{N/kg}$, so a body with a mass of $5\\,\\text{kg}$ weighs about $8\\,\\text{N}$ there.</p>`,
        `<ul>
         <li>Weight is a force, measured with a spring balance in newtons.</li>
         <li>Mass is measured with scales in kilograms.</li>
       </ul>`,
        { fig: 'r6r9-tiaz', caption: 'The same mass has a smaller weight on the Moon, because the gravitational acceleration there is smaller.' }
      ],
      examples: [
        { task: 'What is the weight of a body with a mass of $4\\,\\text{kg}$ on Earth? Use $g=10\\,\\text{N/kg}$.',
          steps: ['$F_G=m\\cdot g$', '$F_G=4\\cdot 10=40\\,\\text{N}$', '<strong>Result: 40 N</strong>'] },
        { task: 'A body has a weight of $60\\,\\text{N}$ on Earth. What is its mass?',
          steps: ['$m=\\frac{F_G}{g}$', '$m=\\frac{60}{10}=6\\,\\text{kg}$', '<strong>Result: 6 kg</strong>'] }
      ]
    },
    'r7-trenie': {
      title: 'Friction and resistance of the medium',
      summary: 'When friction is greater, how to increase or decrease it, and what slows bodies down in fluids.',
      theory: [
        `<p><strong>Friction</strong> arises on the contact surface of two bodies and acts against motion, or against the attempt to move. That is why a box that we push across the floor
       stops when we stop pushing.</p>`,
        `<ul>
         <li>Friction is greater the rougher the surfaces are.</li>
         <li>Friction is greater the harder one body presses on the other.</li>
         <li>Friction does not depend on the size of the contact area.</li>
       </ul>`,
        `<p><strong>Resistance of the medium</strong> (air, water) slows down the motion of a body. It depends on the shape of the body, its speed and the density of the medium.
       A parachute has a large air resistance, so it falls slowly. A swimmer with a streamlined body experiences less resistance from the water.</p>`,
        `<p>Sometimes we want to increase friction, for example with car tyres on the road or when walking. At other times we want to reduce it, for example in bearings.
       Lubricant creates a thin layer between the surfaces, and so it reduces friction.</p>`,
        { fig: 'obr-sily', caption: 'Forces acting on a body on a horizontal surface: pulling force F, friction Ftr and the normal force of the surface N.' }
      ],
      examples: [
        { task: 'A cabinet is pulled by a force of $300\\,\\text{N}$ in the direction of motion, and friction of $120\\,\\text{N}$ acts against the motion. What is the resulting force in the direction of motion?',
          steps: ['Friction acts against the motion, so we subtract it.', '$300-120=180$', '<strong>Result: 180 N</strong>'] },
        { task: 'Which measure increases friction: winter tyres, or lubricant in a bearing?',
          steps: ['Winter tyres have a rougher surface, so friction increases.', 'Lubricant between the surfaces reduces friction.', '<strong>Result: winter tyres</strong>'] }
      ]
    },
    'r7-svetlo': {
      title: 'Light and how it travels',
      summary: 'Rectilinear propagation of light, the speed of light, shadows and eclipses.',
      theory: [
        `<p>Light is electromagnetic radiation that we perceive with our eyes. A light source emits light in all directions.
       We see a body that does not emit light itself because it reflects light into our eyes.</p>`,
        `<p>In one medium light travels in a <strong>straight line</strong>. That is why a shadow forms behind an opaque object: the object blocks the light behind it.
       A large light source also creates a penumbra, where only part of the source is visible.</p>`,
        `<p>The speed of light in a vacuum is $c=300\\,000\\,\\text{km/s}$, that is $3\\cdot 10^8\\,\\text{m/s}$. In air it is almost the same,
       in water and glass it is lower. Light from the Moon reaches us in about $1{,}3\\,\\text{s}$, light from the Sun in about 8 minutes.</p>`,
        `<p>A solar eclipse occurs when the Moon gets between the Sun and the Earth and casts its shadow on the Earth. A lunar eclipse occurs when the Earth gets between the Sun and the Moon.</p>`,
        { fig: 'r6r9-zatmenie', caption: 'In a solar eclipse the Moon lies between the Sun and the Earth and casts a shadow on the Earth.' }
      ],
      examples: [
        { task: 'Light travels at $300\\,000\\,\\text{km/s}$. What distance does it cover in $10\\,\\text{s}$?',
          steps: ['$s=c\\cdot t$', '$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$', '<strong>Result: 3 000 000 km</strong>'] },
        { task: 'Why is there a shadow behind a tree in the sun?',
          steps: ['The tree is opaque and light travels in a straight line.', 'Light cannot pass through the tree, so it stays dark behind it.', '<strong>Result: the tree blocks the light because light travels in a straight line</strong>'] }
      ]
    },
    'r7-odraz': {
      title: 'Reflection and refraction of light',
      summary: 'The law of reflection, angles measured from the normal, and bending of a ray when it enters another medium.',
      theory: [
        `<p>A light ray falls on the boundary between two media. Part of it is reflected back, and part passes into the second medium.
       Angles are always measured from the <strong>normal</strong>, that is the line perpendicular to the surface, not from the surface itself.</p>`,
        `<p><strong>Law of reflection:</strong> the angle of incidence $\\alpha$ equals the angle of reflection $\\beta$, that is $\\alpha=\\beta$.
       The reflected ray lies in the plane formed by the incident ray and the normal.</p>`,
        `<ul>
         <li>When passing into a medium where light is slower (e.g. from air into water), the ray bends <strong>towards the normal</strong>.</li>
         <li>When passing into a medium where light is faster (e.g. from water into air), the ray bends <strong>away from the normal</strong>.</li>
       </ul>`,
        `<p>That is why a pencil placed in a glass of water looks broken, and the bottom of a pool looks shallower than it really is.</p>`,
        { fig: 'obr-odraz', caption: 'When light reflects from a plane mirror, the law of reflection holds.' }
      ],
      examples: [
        { task: 'A ray falls on a plane mirror so that it forms an angle of $35^\\circ$ with the normal. What angle does the reflected ray form with the normal?',
          steps: ['According to the law of reflection, the angle of reflection equals the angle of incidence.', '$\\beta=\\alpha=35^\\circ$', '<strong>Result: 35°</strong>'] },
        { task: 'A ray falls on a mirror so that it forms an angle of $60^\\circ$ with the surface of the mirror. What is the angle of incidence measured from the normal?',
          steps: ['Angles are measured from the normal, not from the surface.', '$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$', '<strong>Result: 30°</strong>'] }
      ]
    },
    'r7-zrkadla': {
      title: 'Mirrors, lenses and optical phenomena',
      summary: 'The image in a plane mirror, converging and diverging lenses, and phenomena such as a rainbow or a mirage.',
      theory: [
        `<p>A <strong>plane mirror</strong> forms a virtual image: we see it behind the mirror, and it cannot be captured on a screen.
       The image is the same size, upright, and the same distance behind the mirror as the object is in front of it.</p>`,
        `<p>If you stand 2 m from a mirror, your image is 4 m away from you. The distance between an object and its image
       is twice the distance of the object from the mirror.</p>`,
        `<p><strong>Lenses</strong> refract light. A <strong>converging lens</strong> is thicker in the middle and gathers parallel rays into one point (the focus).
       A <strong>diverging lens</strong> is thinner in the middle and spreads the rays apart. Converging lenses are used in magnifying glasses, cameras and glasses for long-sightedness.</p>`,
        `<p><strong>Optical phenomena:</strong> a rainbow forms when white light is split into colours in water droplets. A mirage forms by refraction of light in warm air
       above a hot road surface, so we see the reflection of the sky as if there were water on the ground.</p>`,
        { fig: 'r6r9-zrkadlo', caption: 'The image in a plane mirror is virtual and as far behind the mirror as the object is in front of it.' }
      ],
      examples: [
        { task: 'An object stands 3 m in front of a plane mirror. What is the distance between the object and its image?',
          steps: ['The image is behind the mirror at the same distance as the object is in front of it.', '$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$', '<strong>Result: 6 m</strong>'] },
        { task: 'Which lens gathers parallel rays into one point?',
          steps: ['A lens that gathers rays into a point is thicker in the middle.', 'A lens that is thicker in the middle is a converging lens.', '<strong>Result: a converging lens</strong>'] }
      ]
    },
    'r8-praca': {
      title: 'Mechanical work and power',
      summary: 'When a force does work, how to calculate it, and how fast it is done.',
      theory: [
        `<p><strong>Mechanical work</strong> is done when a force acts on a body and the body moves in the direction of this force.
       If we do not move the body, the work is zero: pushing against a wall does no work.</p>`,
        `<p>We calculate work with the formula $W = F\\cdot s$, where $F$ is the force in newtons (N) and $s$ is the path in metres (m).
       The unit of work is the <strong>joule</strong> (J): $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
        `<p><strong>Power</strong> tells how fast work is done. It is calculated as work divided by time: $P = \\frac{W}{t}$,
       where $t$ is the time in seconds. The unit of power is the <strong>watt</strong> (W): $1\\,\\text{W} = 1\\,\\text{J/s}$.
       Two motors can do the same work, but the stronger one finishes it in a shorter time.</p>`,
        `<ol>
         <li>Find the force and the path in N and m.</li>
         <li>Multiply them: $W = F\\cdot s$.</li>
         <li>If power is asked for, divide the result by time: $P = W : t$.</li>
       </ol>`,
        { fig: 'r6r9-praca', caption: 'Work is done only when the body moves in the direction of the force. Pushing a wall that does not move does no work.' }
      ],
      examples: [
        { task: 'Two boys push a cart with a force $F = 150\\,\\text{N}$ and move it by $s = 8\\,\\text{m}$. How much work is done?',
          steps: ['We substitute into the formula: $W = F\\cdot s = 150\\cdot 8$.', '<strong>Result: W = 1200 J</strong>'] },
        { task: 'A lifting motor does work $W = 3000\\,\\text{J}$ in $t = 20\\,\\text{s}$. What is its power?',
          steps: ['$P = \\frac{W}{t} = \\frac{3000}{20}$.', '<strong>Result: P = 150 W</strong>'] }
      ]
    },
    'r8-mechanicka-energia': {
      title: 'Mechanical energy and its transformations',
      summary: 'Energy is the ability to do work, and it transforms from one form into another.',
      theory: [
        `<p><strong>Energy</strong> is the ability of a body to do work. It is denoted by $E$ and its unit is the same as for work: the joule (J).
       Energy cannot be created from nothing or destroyed. It can only be transformed from one form into another.</p>`,
        `<p><strong>Law of conservation of energy:</strong> the total energy of a closed system does not change. If one form of energy decreases,
       another form increases by the same amount.</p>`,
        `<ul>
         <li>A stone falling from a height: potential energy changes into kinetic energy.</li>
         <li>A pendulum swinging back up: kinetic energy changes back into potential energy.</li>
         <li>A car with brakes: kinetic energy changes into internal energy (heat).</li>
       </ul>`,
        `<p>When friction occurs, part of the mechanical energy always changes into heat. The energy is not lost, it only spreads into the surroundings
       and is hard to use.</p>`,
        { fig: 'obr-energia', caption: 'When sliding without friction, potential energy changes into kinetic energy and back.' }
      ],
      examples: [
        { task: 'What happens to the energy when a book falls from a table to the floor?',
          steps: ['On the table the book has potential energy. While falling it moves, so it has kinetic energy.', 'On impact, part of the energy changes into sound and heat.', '<strong>Result: potential energy changes into kinetic, sound and thermal energy.</strong>'] },
        { task: 'What energy transformation takes place when a bicycle brakes?',
          steps: ['The bicycle is moving, so it has kinetic energy.', 'The brakes create heat through friction against the rim.', '<strong>Result: kinetic energy changes into internal energy (heat).</strong>'] }
      ]
    },
    'r8-polohova-pohybova': {
      title: 'Potential and kinetic energy',
      summary: 'Calculating the energy of a body at a height and in motion.',
      theory: [
        `<p>A body raised above the ground has <strong>potential energy</strong>. The heavier and higher it is, the more energy it has.
       It is calculated as $E_p = m\\cdot g\\cdot h$, where $m$ is the mass in kilograms, $g \\approx 10\\,\\text{m/s}^2$ is the gravitational acceleration
       and $h$ is the height in metres.</p>`,
        `<p>A body in motion has <strong>kinetic energy</strong>. It is calculated as $E_k = \\frac{1}{2}\\,m\\,v^2$,
       where $v$ is the speed in m/s. The speed is squared, so twice the speed means four times the kinetic energy.</p>`,
        `<p>These energies depend on mass, height and speed, not on the shape of the body. That is why a car is harder to stop at a higher speed:
       it has much greater kinetic energy.</p>`,
        `<ol>
         <li>Find the mass in kg, the height in m or the speed in m/s.</li>
         <li>Choose the formula according to whether the body is high up or moving.</li>
         <li>Substitute and calculate; the result is in joules.</li>
       </ol>`,
        { fig: 'r6r9-kinetika', caption: 'Kinetic energy grows with the square of the speed: twice the speed means four times the energy.' }
      ],
      examples: [
        { task: 'A stone with mass $m = 2\\,\\text{kg}$ lies on the roof of a building $h = 5\\,\\text{m}$ high. What is its potential energy when $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.', '<strong>Result: E_p = 100 J</strong>'] },
        { task: 'A cart with mass $m = 4\\,\\text{kg}$ moves at a speed of $v = 3\\,\\text{m/s}$. What is its kinetic energy?',
          steps: ['$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.', '$\\frac{1}{2}\\cdot 4 = 2$ and $3^2 = 9$, so $E_k = 2\\cdot 9$.', '<strong>Result: E_k = 18 J</strong>'] }
      ]
    },
    'r8-jednoduche-stroje': {
      title: 'Simple machines',
      summary: 'A lever, a pulley and an inclined plane make work easier, but they do not reduce the work itself.',
      theory: [
        `<p><strong>Simple machines</strong> (lever, pulley, inclined plane) make it possible to lift a heavier load with a smaller force.
       However, the golden rule of mechanics applies: work cannot be saved. We trade a smaller force for a longer path.</p>`,
        `<p>A <strong>lever</strong> is a bar that rotates about an axis. The distance of the force from the axis is the <em>lever arm</em> of the force $r$.
       The lever is in balance when $F_1\\cdot r_1 = F_2\\cdot r_2$. A longer lever arm means a smaller force is needed.</p>`,
        `<p><strong>Pulleys:</strong> a fixed pulley only changes the direction of the force. A movable pulley halves the force, but the path
       doubles. <strong>Inclined plane:</strong> the smaller the slope, the smaller the force needed, but the path is longer.</p>`,
        `<ol>
         <li>Determine which force is the load and which force is pulling.</li>
         <li>Measure the lever arms (distances from the axis).</li>
         <li>Use the balance of the lever and calculate the unknown force.</li>
       </ol>`,
        { fig: 'obr-paka', caption: 'A lever is in balance when the product of force and arm on one side equals the product on the other.' }
      ],
      examples: [
        { task: 'On a lever, the lever arm of the force is $r_1 = 2\\,\\text{m}$ and we lift a load with a force $F_2 = 300\\,\\text{N}$ on the lever arm $r_2 = 0{,}5\\,\\text{m}$. With what force do we act on the arm $r_1$?',
          steps: ['Balance: $F_1\\cdot r_1 = F_2\\cdot r_2$.', '$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.', '<strong>Result: F_1 = 75 N</strong>'] },
        { task: 'We lift a load with a weight of $200\\,\\text{N}$ with a movable pulley. What force do we pull with if we neglect friction?',
          steps: ['A movable pulley halves the force: $F = \\frac{200}{2}$.', '<strong>Result: F = 100 N, but we must pull along twice the path.</strong>'] }
      ]
    },
    'r8-vnutorna-energia': {
      title: 'Internal energy and heat exchange',
      summary: 'Internal energy of a body, heat transfer and calculating heat when heating.',
      theory: [
        `<p>Every body has <strong>internal energy</strong>. It is made up of the kinetic and potential energies of its particles (atoms and molecules).
       The faster the particles move, the warmer the body is and the greater its internal energy.</p>`,
        `<p><strong>Heat</strong> is the energy that bodies exchange because of a difference in temperature. It always flows from the warmer body
       to the colder one, until the temperatures equalise. Heat is not a property of a body, but transferred energy.</p>`,
        `<ul>
         <li><strong>Conduction:</strong> heat is passed from particle to particle, for example a spoon in a hot cup of tea.</li>
         <li><strong>Convection:</strong> heated air or water rises, for example near a radiator.</li>
         <li><strong>Radiation:</strong> heat travels even without a substance, for example from the Sun.</li>
       </ul>`,
        `<p>The amount of heat needed for heating is calculated from $Q = m\\cdot c\\cdot \\Delta t$. The value $c$ is the specific heat capacity:
       for water $c = 4200\\,\\text{J/(kg\\cdot K)}$. The change in temperature $\\Delta t$ is the difference between the final and initial temperature.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'Heat flows from a warmer body to a colder one. It is transferred by conduction, convection or radiation.' }
      ],
      examples: [
        { task: 'How much heat is needed to heat $m = 2\\,\\text{kg}$ of water by 10 °C? Use $c = 4200\\,\\text{J/(kg\\cdot K)}$.',
          steps: ['$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.', '<strong>Result: Q = 84 000 J = 84 kJ</strong>'] },
        { task: 'A cup of hot tea gradually cools down. How does it pass heat to the surroundings?',
          steps: ['Heat passes from the tea through the wall of the cup by conduction.', 'Warm air above the cup rises, which is convection. Heat is also emitted by radiation.', '<strong>Result: by conduction, convection and radiation.</strong>'] }
      ]
    },
    'r8-naboj': {
      title: 'Electric charge',
      summary: 'Two kinds of charge, electrification by friction, and the charge of an electron.',
      theory: [
        `<p>All bodies are made of atoms. An atom has a positively charged nucleus and negatively charged electrons.
       <strong>Electric charge</strong> is a property of bodies that shows up as a force. It is denoted by $Q$ and its unit is the coulomb (C).</p>`,
        `<p>There are two kinds of charge: positive and negative. Like charges repel, opposite charges attract.
       A neutral body has the same number of positive and negative charges.</p>`,
        `<p><strong>Electrification by friction:</strong> during friction electrons pass from one body to the other. The body that gains electrons
       becomes negatively charged. The body that loses them becomes positively charged. Charge cannot be created or destroyed, only transferred.</p>`,
        `<ul>
         <li>The elementary charge $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ is carried by one electron.</li>
         <li>The charge of a body with $n$ extra electrons is $Q = -n\\,e$; with $n$ electrons fewer it is $Q = +n\\,e$.</li>
       </ul>`,
        { fig: 'r6r9-naboj', caption: 'Like charges repel, opposite charges attract.' }
      ],
      examples: [
        { task: 'A body lost 3 electrons. What is its charge in multiples of the elementary charge $e$?',
          steps: ['Losing electrons creates a shortage of negative charge, so the body is positive.', 'The charge is $Q = +3e$.', '<strong>Result: +3e</strong>'] },
        { task: 'Two balls repel each other after touching. What does this mean for their charges?',
          steps: ['Repulsion occurs only between like charges.', '<strong>Result: both balls have charges of the same sign.</strong>'] }
      ]
    },
    'r8-prud-napatie': {
      title: 'Electric current and voltage',
      summary: 'Current as charge per time, voltage as the driving push, and how they are measured.',
      theory: [
        `<p><strong>Electric current</strong> is the orderly motion of charged particles, in metals mainly electrons. It is denoted by $I$ and its unit is the ampere (A).
       If a charge $Q$ passes through the cross-section of a conductor in time $t$, the current is $I = \\frac{Q}{t}$. Hence $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
        `<p>By convention, the direction of current is given as the motion of positive charge from the positive terminal of the source to the negative terminal. Electrons move in the opposite direction.</p>`,
        `<p><strong>Electric voltage</strong> $U$ is the potential difference that drives electrons in a circuit. A source (a battery) creates it between its terminals.
       The unit is the volt (V).</p>`,
        `<ol>
         <li>Current is measured with an <strong>ammeter</strong>, connected in series with the appliance.</li>
         <li>Voltage is measured with a <strong>voltmeter</strong>, connected in parallel with the appliance.</li>
       </ol>`,
        { fig: 'r6r9-merania', caption: 'An ammeter is connected in series with the appliance, and a voltmeter in parallel with it.' }
      ],
      examples: [
        { task: 'A charge $Q = 20\\,\\text{C}$ passes through a conductor in $t = 10\\,\\text{s}$. What is the current?',
          steps: ['$I = \\frac{Q}{t} = \\frac{20}{10}$.', '<strong>Result: I = 2 A</strong>'] },
        { task: 'Which instrument measures current and which measures voltage, and how are they connected?',
          steps: ['An ammeter connected in series measures current.', 'A voltmeter connected in parallel measures voltage.', '<strong>Result: the ammeter measures current, the voltmeter measures voltage.</strong>'] }
      ]
    },
    'r8-odpor': {
      title: 'Electric circuit and electrical resistance',
      summary: 'What makes up a circuit, and how resistance slows down the current.',
      theory: [
        `<p>An <strong>electric circuit</strong> is a closed path along which current flows. It consists of a source, appliances, conductors and a switch.
       If the circuit is broken (for example by an open switch), no current flows.</p>`,
        `<p><strong>Electrical resistance</strong> $R$ slows down the motion of electrons in a conductor. It is caused by collisions of electrons with atoms of the substance.
       Its unit is the ohm ($\\Omega$). Resistance depends on the material, length, cross-section and temperature of the conductor.</p>`,
        `<p>The relationship between voltage, current and resistance is $R = \\frac{U}{I}$. At the same voltage, a larger resistance means a smaller current.</p>`,
        `<ol>
         <li>Find the voltage $U$ in volts and the current $I$ in amperes.</li>
         <li>Calculate the resistance using $R = \\frac{U}{I}$.</li>
       </ol>`,
        { fig: 'r6r9-odpor', caption: 'At the same voltage a larger resistance lets through a smaller current: at 12 V the current is 6 A at 2 Ω and 2 A at 6 Ω.' }
      ],
      examples: [
        { task: 'A bulb at a voltage $U = 12\\,\\text{V}$ carries a current $I = 2\\,\\text{A}$. What is its resistance?',
          steps: ['$R = \\frac{U}{I} = \\frac{12}{2}$.', '<strong>Result: R = 6 Ω</strong>'] },
        { task: 'Which conductor slows the current more: one with a larger resistance or one with a smaller resistance?',
          steps: ['A larger resistance means that electrons pass through with more difficulty.', '<strong>Result: the conductor with the larger resistance.</strong>'] }
      ]
    },
    'r8-vodice': {
      title: 'Electrical conductors and insulators',
      summary: 'Which substances conduct current and why, and what they are used for.',
      theory: [
        `<p>A <strong>conductor</strong> is a substance in which electrons can move freely. Typical conductors are metals, for example copper, aluminium
       and iron, and graphite. An <strong>insulator</strong> (non-conductor) has its electrons tightly bound and does not conduct current: for example plastic, rubber, glass or dry wood.</p>`,
        `<ul>
         <li>Metal: a good conductor, used to conduct current.</li>
         <li>Plastic and rubber: insulators, used as coverings for conductors.</li>
         <li>A salt solution in water: conducts current, because charged particles move in it.</li>
         <li>Pure distilled water: practically an insulator.</li>
       </ul>`,
        `<p>We use conductors to transmit current, for example copper in cables. Insulators cover them, so that we do not touch a live conductor
       and current does not flow where it should not.</p>`,
        `<p>Semiconductors, for example silicon, lie between conductors and insulators. They conduct current only under certain conditions, and that is why they are used in electronics.</p>`,
        { fig: 'r6r9-vodice', caption: 'Conductors have free electrons and conduct current. Insulators have tightly bound electrons and do not conduct current.' }
      ],
      examples: [
        { task: 'Why is a copper wire covered with plastic?',
          steps: ['Copper conducts current, plastic is not a conductor.', 'The plastic prevents contact with the conductor and leakage of current.', '<strong>Result: plastic is an insulator and protects against injury.</strong>'] },
        { task: 'Does salt water conduct current?',
          steps: ['Salt dissolves in water and forms charged particles that can carry charge.', '<strong>Result: a salt solution conducts current, it is a conductor.</strong>'] }
      ]
    },
    'r8-bezpecnost': {
      title: 'Safety when using electrical devices',
      summary: 'Rules that protect against injury from electric current and against fire.',
      theory: [
        `<p>Electric current passing through the body can cause burns, heart failure or death. That is why we follow safety rules.
       The danger is greater when the skin is wet, because water increases the conduction of current.</p>`,
        `<ul>
         <li>Do not touch electrical devices with wet hands or on a wet floor.</li>
         <li>Do not use damaged cables and plugs; never pull on the cord.</li>
         <li>Do not put objects into sockets, especially metal ones.</li>
         <li>If a device is faulty, unplug it from the socket and call a professional.</li>
       </ul>`,
        `<p>A <strong>fuse</strong> or a <strong>circuit breaker</strong> interrupts the circuit when the current is too high, for example in a short circuit or an overload.
       In this way they prevent conductors from overheating and causing a fire.</p>`,
        `<p><strong>Earthing:</strong> metal casings of appliances are connected to the ground. In case of a fault, the casing is not live and touching it is not dangerous.</p>`
      ],
      examples: [
        { task: 'Peter pulled a plug out of a socket with a wet hand. What is dangerous in such a case?',
          steps: ['Water on the skin increases conduction, and current can pass through the body.', '<strong>Result: there is a risk of electric shock. Never hold a plug with wet hands.</strong>'] },
        { task: 'Which element protects a conductor from overheating during a short circuit?',
          steps: ['During a short circuit the current is very large and the conductor heats up quickly.', 'The fuse blows or the circuit breaker switches off the circuit.', '<strong>Result: a fuse or a circuit breaker.</strong>'] }
      ]
    },
    'r9-obvody': {
      title: 'Electric circuits and their properties',
      summary: 'A source, an appliance, a switch and conductors in a closed circuit.',
      theory: [
        `<p>An <strong>electric circuit</strong> consists of a source (battery, accumulator), appliances (bulb, resistor, motor), a switch and conductors.
       Current flows only when the circuit is <strong>closed</strong>, that is, when one can travel around the entire loop from one terminal of the source to the other.</p>`,
        `<ul>
         <li><strong>Source</strong> supplies energy to the charged particles.</li>
         <li><strong>Appliance</strong> converts electrical energy into another form: light, heat or motion.</li>
         <li><strong>Switch</strong> closes or opens the circuit.</li>
         <li><strong>Conductors</strong> connect the components into one whole.</li>
       </ul>`,
        `<p>We draw a circuit as a <strong>diagram</strong>, in which each component has its own symbol. The diagram shows how the components are connected,
       not what they look like.</p>`,
        `<p>When we open the switch, the circuit is interrupted: no current flows and the bulb goes out. A circuit works only when it is completely closed.</p>`,
        { fig: 'obr-obvod', caption: 'Series and parallel connection of appliances on one source.' }
      ],
      examples: [
        { task: 'What happens to the bulb when we open the switch?',
          steps: ['The circuit is interrupted and no current flows.', '<strong>Result: the bulb goes out.</strong>'] },
        { task: 'Which component in the circuit converts electrical energy into light?',
          steps: ['Light is produced in the filament of the bulb.', '<strong>Result: the bulb (an appliance).</strong>'] }
      ]
    },
    'r9-zapojenie': {
      title: 'Series and parallel connection',
      summary: 'How the total resistance changes when resistors are connected one after another or side by side.',
      theory: [
        `<p>Two resistors are connected <strong>in series</strong> (one after another), or <strong>in parallel</strong> (side by side).
       In series the current must pass through both resistors. In a parallel connection the current splits into two branches.</p>`,
        `<ul>
         <li><strong>Series connection:</strong> the current is the same throughout the circuit, the voltage is shared between the resistors.
             The total resistance is the sum: $R = R_1 + R_2$.</li>
         <li><strong>Parallel connection:</strong> the voltage is the same across both branches, the current splits.
             It holds that $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$.</li>
       </ul>`,
        `<p>In a parallel connection the total resistance is always <strong>smaller</strong> than the smallest of the branch resistances. There is a logical reason:
       each additional branch is another path for the current. That is why appliances connected in parallel at home draw a larger current from the mains.</p>`,
        `<ol>
         <li>Determine whether the resistors are one after another (series) or side by side (parallel).</li>
         <li>In series add the resistances; in parallel add their reciprocals.</li>
       </ol>`,
        { fig: 'obr-obvod', caption: 'Series and parallel connection of appliances on one source.' }
      ],
      examples: [
        { task: 'Resistors $R_1 = 6\\,\\Omega$ and $R_2 = 3\\,\\Omega$ are connected in parallel. What is the total resistance?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.', '$R=\\frac{6}{3}=2\\,\\Omega$.', '<strong>Result: R = 2 Ω</strong>'] },
        { task: 'Resistors $R_1 = 4\\,\\Omega$ and $R_2 = 5\\,\\Omega$ are connected in series. What is the total resistance?',
          steps: ['In series the resistances are added: $R = R_1 + R_2$.', '<strong>Result: R = 9 Ω</strong>'] }
      ]
    },
    'r9-vypocty': {
      title: 'Calculating current, voltage and resistance',
      summary: 'From two known quantities we calculate the third.',
      theory: [
        `<p>In a circuit there are three basic quantities: current $I$ (A), voltage $U$ (V) and resistance $R$ (Ω). If we know two of them, we can calculate the third.
       The relationships are $I=\\frac{U}{R}$, $U=I\\cdot R$ and $R=\\frac{U}{I}$.</p>`,
        `<ol>
         <li>Write down what is given and what we are looking for.</li>
         <li>Choose the formula in which the quantity sought stands alone.</li>
         <li>Substitute the units V, A and Ω; when converting, use multiples.</li>
         <li>Check the units of the result.</li>
       </ol>`,
        `<p><strong>Watch the units:</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ and $1\\,\\text{k}\\Omega=1000\\,\\Omega$. If a value is in milliamperes or kilohms,
       first rewrite it in the basic unit.</p>`,
        { fig: 'r6r9-trojuholnik', caption: 'Cover the quantity sought and the rest shows the formula, for example U = I · R.' }
      ],
      examples: [
        { task: 'The voltage across a resistor with resistance $R = 4\\,\\Omega$ is $U = 12\\,\\text{V}$. What current flows through it?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Result: I = 3 A</strong>'] },
        { task: 'An appliance carries a current $I = 0{,}5\\,\\text{A}$ at a voltage $U = 230\\,\\text{V}$. What is its resistance?',
          steps: ['$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.', 'Dividing by a decimal number: $\\frac{230}{0{,}5}=\\frac{460}{1}$.', '<strong>Result: R = 460 Ω</strong>'] }
      ]
    },
    'r9-ohmov-zakon': {
      title: 'Ohm\'s law',
      summary: 'Current is proportional to voltage and inversely proportional to resistance.',
      theory: [
        `<p><strong>Ohm's law</strong> states: the current flowing through a conductor is directly proportional to the voltage and inversely proportional to the resistance.
       It is written as $I=\\frac{U}{R}$, at a constant temperature of the conductor.</p>`,
        `<ul>
         <li>At constant resistance: doubling the voltage doubles the current.</li>
         <li>At constant voltage: doubling the resistance halves the current.</li>
       </ul>`,
        `<p>The dependence of current on voltage for a constant resistance is a <strong>straight line passing through the origin</strong> on a graph.
       A steeper line means a smaller resistance, because at the same voltage a larger current flows.</p>`,
        `<p>The law holds exactly for metal conductors at a constant temperature. When a metal is heated strongly, its resistance increases, so the dependence is no longer linear.</p>`,
        { fig: 'obr-ohm', caption: 'At constant resistance the graph of voltage against current is a straight line passing through the origin.' }
      ],
      examples: [
        { task: 'The voltage across a resistor increased from $4\\,\\text{V}$ to $12\\,\\text{V}$. The resistance did not change. How many times did the current increase?',
          steps: ['The ratio of the voltages is $\\frac{12}{4}=3$.', 'The current is directly proportional to the voltage, so it also increases $3$ times.', '<strong>Result: 3 times</strong>'] },
        { task: 'At a voltage of $230\\,\\text{V}$ a resistor draws a current of $2\\,\\text{A}$. What current does it draw at twice the resistance and the same voltage?',
          steps: ['The resistance is doubled, and the current is inversely proportional to the resistance.', '$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.', '<strong>Result: 1 A</strong>'] }
      ]
    },
    'r9-praca-vykon': {
      title: 'Electrical work and electrical power',
      summary: 'How much energy an appliance draws over time, and how it is calculated in kWh.',
      theory: [
        `<p><strong>Electrical power</strong> is $P=U\\cdot I$ and its unit is the watt (W). It tells how much energy the appliance converts per second.
       If we know the resistance, $P=I^2\\,R$ or $P=\\frac{U^2}{R}$ also holds.</p>`,
        `<p><strong>Electrical work</strong> (energy consumed) is $W=P\\cdot t=U\\cdot I\\cdot t$, where $t$ is the time in seconds. The unit is the joule (J),
       because $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
        `<p>In households energy is billed in <strong>kilowatt-hours</strong> (kWh). We calculate it as the power in kilowatts multiplied by the time in hours:
       $E = P\\cdot t$, where $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<ol>
         <li>Power in kilowatts: $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Energy in kWh: power in kW multiplied by time in hours.</li>
       </ol>`
      ],
      examples: [
        { task: 'A bulb is connected to a voltage of $230\\,\\text{V}$ and a current of $0{,}5\\,\\text{A}$ flows through it. What is its power?',
          steps: ['$P = U\\cdot I = 230\\cdot 0{,}5$.', '<strong>Result: P = 115 W</strong>'] },
        { task: 'A washing machine has a power of $2\\,\\text{kW}$ and runs for $1{,}5\\,\\text{h}$. How much energy does it consume in kWh?',
          steps: ['$E = P\\cdot t = 2\\cdot 1{,}5$.', '<strong>Result: E = 3 kWh</strong>'] }
      ]
    },
    'r9-magnetizmus': {
      title: 'Magnetic field and magnetic effects of electric current',
      summary: 'A magnetic field forms around a wire carrying current, and its direction is found with the right-hand rule.',
      theory: [
        `<p>A <strong>magnetic field</strong> forms around a conductor through which an electric current flows. The connection between electricity and magnetism
       was discovered in 1820 by the Danish physicist Ørsted: a compass needle deflected when current was switched on in a nearby wire.</p>`,
        `<p>The <strong>direction of the field</strong> is determined by the right-hand rule: the thumb points in the direction of the current and the curled fingers
       show the direction of the magnetic field lines around the conductor. If we reverse the current, the direction of the field also reverses.</p>`,
        `<p>If we wind the conductor into a <strong>coil</strong>, the fields of the individual turns add up and a stronger field forms inside the coil.
       We increase the strength of the field with a larger current or a larger number of turns.</p>`,
        `<ul>
         <li>Without current there is no magnetic field around a wire.</li>
         <li>A magnetic field exerts a force on magnets and on other conductors carrying current.</li>
         <li>The field is weaker farther from the wire.</li>
       </ul>`,
        { fig: 'obr-magnet-vodic', caption: 'Around a conductor with current there is a magnetic field in the form of circles around the conductor.' }
      ],
      examples: [
        { task: 'How does the direction of the magnetic field around a wire change if we reverse the direction of the current?',
          steps: ['The direction of the field is determined by the direction of the current (right-hand rule).', '<strong>Result: the direction of the field reverses.</strong>'] },
        { task: 'Why does a compass needle deflect near a wire carrying current?',
          steps: ['A compass needle is a small magnet that turns in a magnetic field.', '<strong>Result: a magnetic field around the wire with current acts on the needle.</strong>'] }
      ]
    },
    'r9-elektromagnet': {
      title: 'Electromagnet and electric motor',
      summary: 'A coil with a core as a temporary magnet, and a motor that converts electrical energy into motion.',
      theory: [
        `<p>An <strong>electromagnet</strong> is a coil with a core of soft iron. When current flows through the coil, the core becomes magnetised.
       After the current is switched off, the magnetism disappears. We increase the strength of an electromagnet with a larger current or a larger number of turns.</p>`,
        `<p>An <strong>electric motor</strong> converts electrical energy into kinetic (mechanical) energy. It uses the force that a magnetic field exerts on a conductor carrying current:
       a coil in a magnetic field rotates.</p>`,
        `<ul>
         <li>Electromagnets are used in bells, relays and lifting magnets in scrapyards.</li>
         <li>Electric motors drive washing machines, drills and fans.</li>
       </ul>`,
        `<ol>
         <li>Current flows through the coil of the motor.</li>
         <li>The magnetic field exerts a force on the wires of the coil.</li>
         <li>The coil rotates.</li>
         <li>The commutator reverses the direction of the current so that the coil keeps rotating.</li>
       </ol>`,
        { fig: 'r6r9-elektromagnet', caption: 'A coil with an iron core is magnetic only when current flows through it.' }
      ],
      examples: [
        { task: 'Why does an electromagnet in a scrapyard lift iron scrap, but release it when the current is switched off?',
          steps: ['When the current is on, the core is magnetic and attracts iron.', 'After the current is switched off, the magnetic field disappears.', '<strong>Result: the magnetism of an electromagnet depends on the current.</strong>'] },
        { task: 'What energy conversion takes place in the electric motor of a washing machine?',
          steps: ['Electrical energy passes through the coils of the motor.', 'The drum starts to rotate.', '<strong>Result: electrical energy into kinetic (mechanical) energy.</strong>'] }
      ]
    },
    'r9-premeny-zdroje': {
      title: 'Energy transformations and sources',
      summary: 'How energy changes in power plants, and how renewable sources differ from non-renewable ones.',
      theory: [
        `<p>Energy can be converted from one form into another. Energy sources are divided into <strong>renewable</strong>, which are naturally replenished
       (sun, wind, water, biomass, geothermal energy), and <strong>non-renewable</strong>, whose reserves are used up
       (coal, oil, natural gas, nuclear fuel).</p>`,
        `<ul>
         <li><strong>Coal power plant:</strong> chemical energy of the fuel, thermal, mechanical (turbine), electrical.</li>
         <li><strong>Hydroelectric power plant:</strong> potential energy of water, kinetic, mechanical (turbine), electrical.</li>
         <li><strong>Solar panel:</strong> radiant energy from the Sun is converted into electrical energy.</li>
         <li><strong>Wind power plant:</strong> kinetic energy of the wind, mechanical, electrical.</li>
       </ul>`,
        `<p>At each conversion part of the energy turns into heat and is dispersed into the surroundings. The total energy is conserved,
       but the useful energy decreases.</p>`,
        { fig: 'r6r9-elektrarna', caption: 'A coal power plant converts the chemical energy of the fuel step by step into thermal, mechanical and electrical energy.' }
      ],
      examples: [
        { task: 'What energy conversion does a solar panel perform?',
          steps: ['The panel receives radiant energy from the Sun.', 'It converts it into electrical energy.', '<strong>Result: radiant energy into electrical energy.</strong>'] },
        { task: 'Why is coal a non-renewable source?',
          steps: ['It formed over millions of years from plants.', 'We use it faster than it can be replenished.', '<strong>Result: it is non-renewable, because it cannot be replenished in time.</strong>'] }
      ]
    },
    'r9-energia-priroda': {
      title: 'Energy in nature and technology',
      summary: 'The efficiency of a device, and energy that cannot be fully used.',
      theory: [
        `<p>The <strong>efficiency</strong> of a device shows what part of the supplied energy is converted into useful work or energy:
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, where $E_u$ is the useful energy and $E_d$ the supplied energy.</p>`,
        `<p>Efficiency is always less than 100 %. Part of the energy turns into heat, which disperses into the surroundings.
       A filament bulb has a low efficiency, because it emits most of its energy as heat.</p>`,
        `<ul>
         <li>An LED bulb is more efficient than a classic bulb, because less energy is converted into heat.</li>
         <li>In a car's combustion engine, a large part of the energy from burning the fuel is lost as heat.</li>
       </ul>`,
        `<p>Energy is not lost in nature, it only spreads out as heat, which is then hard to use. That is why people try to increase the efficiency of machines.</p>`,
        { fig: 'r6r9-ucinnost', caption: 'Efficiency is the ratio of useful energy to supplied energy. The rest of the energy is lost as heat.' }
      ],
      examples: [
        { task: 'A motor receives 400 J of energy and converts 100 J into motion. What is its efficiency?',
          steps: ['$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.', '$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.', '<strong>Result: 25 %</strong>'] },
        { task: 'A heater with an efficiency of $90\\,\\%$ receives $1000\\,\\text{J}$. How much energy is lost?',
          steps: ['The useful energy is $0{,}9\\cdot 1000 = 900\\,\\text{J}$.', 'The rest is lost: $1000 - 900 = 100\\,\\text{J}$.', '<strong>Result: 100 J</strong>'] }
      ]
    },
    'r9-opakovanie': {
      title: 'Review and practical physics problems',
      summary: 'An overview of the formulas from grade 9 and a method for practical problems.',
      theory: [
        `<p>For every problem, first write down what is given and what we are looking for. Then choose the formula, convert the units and substitute.
       At the end check the units of the result and whether the value is reasonable.</p>`,
        `<ol>
         <li>Determine the phenomenon: electric circuit, energy, power, magnetism.</li>
         <li>Choose the correct formula.</li>
         <li>Convert the units (mA to A, kW to W, minutes to seconds, kWh to J).</li>
         <li>Substitute, calculate and check the units.</li>
       </ol>`,
        `<ul>
         <li>Ohm's law: $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Power and work: $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Potential energy: $E_p=m\\,g\\,h$, with $g\\approx 10\\,\\text{m/s}^2$.</li>
         <li>Efficiency: $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
      ],
      examples: [
        { task: 'A motor with a power of $1500\\,\\text{W}$ runs for $2\\,\\text{h}$. How much energy does it consume in kWh?',
          steps: ['Power in kilowatts: $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.', '$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.', '<strong>Result: E = 3 kWh</strong>'] },
        { task: 'A body with a mass of $3\\,\\text{kg}$ is at a height of $4\\,\\text{m}$. What is its potential energy when $g = 10\\,\\text{m/s}^2$?',
          steps: ['$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.', '<strong>Result: E_p = 120 J</strong>'] }
      ]
    }
  }
});
