/* English: lessons of levels v5–v8 (js/rocniky/v5.js, v6.js, v7.js, v8.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    'v5-dualizmus': {
      title: 'Wave-particle duality',
      summary: 'Light and particles behave both as waves and as particles; the de Broglie wavelength.',
      theory: [
        `<p>The photoelectric effect and the Compton effect showed that light behaves as a stream of particles (photons) with energy $E=h\\,f$. Interference and diffraction, on the other hand, show wave properties. We speak of <strong>wave-particle duality</strong>: every quantum object has both properties, but a given measurement reveals only one of them.</p>`,
        `<p>Louis de Broglie proposed that particles with momentum $p$ also have a wavelength $\\lambda=\\frac{h}{p}$. For a free electron with speed $v$ (non-relativistically) we have $p=m_e\\,v$. The heavier or faster a particle is, the shorter its wavelength.</p>`,
        `<p>That is why macroscopic bodies (e.g. a small ball) have a wavelength so small that it cannot be observed, while electrons in a crystal produce a diffraction pattern similar to an X-ray one. The constant $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ determines where quantum effects show up.</p>`,
        { fig: 'v5v8-dualizmus', caption: 'The de Broglie wavelength λ = h/p: the larger the momentum, the shorter the wave.' }
      ],
      examples: [
        { task: 'An electron moves with speed $v=2\\cdot 10^{6}\\,\\text{m/s}$. What is its de Broglie wavelength? Use $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$.',
          steps: ['$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.', '$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.', '<strong>Result: $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>'] }
      ]
    },
    'v5-vlnova-funkcia': {
      title: 'Wave function and probability',
      summary: 'The wave function ψ, the probability density |ψ|² and the probability for an interval.',
      theory: [
        `<p>The state of a quantum particle is described by the <strong>wave function</strong> $\\psi(x,t)$. By itself it is not measurable. Its square $|\\psi|^2$ is the <strong>probability density</strong>: the probability that the particle lies in a small neighbourhood of point $x$ is $|\\psi|^2\\,dx$.</p>`,
        `<p>The probability of finding the particle in a finite interval $[x_1,x_2]$ is the integral $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$. The total probability is 1, so $\\int|\\psi|^2\\,dx=1$. Such a function is called normalised.</p>`,
        `<p>Therefore quantum mechanics gives only the <em>probabilities</em> of measurement outcomes, not exact values for a single particle. If the density is uniform, the probability equals the ratio of the length of the interval to the length of the whole region.</p>`,
        { fig: 'v5v8-pravdepodobnost', caption: 'For uniform density |ψ|² the probability is proportional to the length of the interval: P = a/L.' }
      ],
      examples: [
        { task: 'A particle is spread with uniform density over a segment of length $L=20\\,\\text{nm}$. What is the probability that it lies in the interval from $0$ to $5\\,\\text{nm}$?',
          steps: ['The density is constant, $|\\psi|^2=\\frac{1}{L}$.', '$P=\\frac{5}{20}=\\frac{1}{4}$.', '<strong>Result: $P=0{,}25$</strong>'] }
      ]
    },
    'v5-schrodinger': {
      title: 'Schrödinger equation',
      summary: 'The time-independent Schrödinger equation and the energies of a particle in an infinitely deep well.',
      theory: [
        `<p><strong>The Schrödinger equation</strong> describes the evolution of the wave function. Its time-independent form $\\hat{H}\\psi=E\\psi$ says that for stationary states the energy $E$ is constant and the wave function is an eigenfunction of the energy operator $\\hat{H}$.</p>`,
        `<p>Consider a particle in an <strong>infinitely deep potential well</strong> of width $L$. The wave function must vanish at the edges of the well, so only an integer number of half wavelengths fits into it. The result is discrete energies $E_n=\\frac{n^2 h^2}{8 m L^2}$, where $n=1,2,3,\\dots$</p>`,
        `<p>The energy grows with the square of $n$ and falls with the square of the well width. Therefore, for an electron in a well of width $1\\,\\text{nm}$ the lowest energy is $E_1=0{,}376\\,\\text{eV}$, while in a wider well the levels lie closer together.</p>`,
        { fig: 'v5v8-jama', caption: 'A particle in an infinitely deep well has only discrete levels; the energy grows with n².' }
      ],
      examples: [
        { task: 'An electron is in a well of width $L=1\\,\\text{nm}$ in the state $n=2$. What is its energy? For $n=1$ we have $E_1=0{,}376\\,\\text{eV}$.',
          steps: ['$E_n=E_1\\cdot\\frac{n^2}{L^2}$ with $L$ in nanometres.', '$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.', '<strong>Result: $E_2\\approx 1{,}5\\,\\text{eV}$</strong>'] }
      ]
    },
    'v5-operatory': {
      title: 'Operators and observables',
      summary: 'Operators in quantum mechanics; eigenfunctions and eigenvalues as measurement results.',
      theory: [
        `<p>Every physical quantity ($x$, momentum, energy) corresponds to an <strong>operator</strong>, that is, a rule which turns one function into another. For example, momentum corresponds to $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$ and energy to the Hamiltonian $\\hat{H}$.</p>`,
        `<p>If an operator $\\hat{A}$ acting on a function $\\psi$ gives $\\hat{A}\\psi=a\\,\\psi$, then $\\psi$ is an <strong>eigenfunction</strong> and the number $a$ is an <strong>eigenvalue</strong>. A measurement of the quantity $A$ always gives one of its eigenvalues; the state becomes the corresponding eigenfunction upon measurement.</p>`,
        `<p>Observables have real eigenvalues because their operators are Hermitian. Therefore the results of measurements are always real numbers.</p>`
      ],
      examples: [
        { task: 'The operator $\\hat{D}=\\frac{d}{dx}$ acts on $\\psi=e^{3x}$. What is the eigenvalue?',
          steps: ['$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.', 'We have $\\hat{D}\\psi=3\\psi$.', '<strong>Result: the eigenvalue is $3$</strong>'] }
      ]
    },
    'v5-kvantovanie': {
      title: 'Energy quantisation',
      summary: 'Why a bound particle has only discrete energies, illustrated by the harmonic oscillator.',
      theory: [
        `<p>If a particle is <strong>bound</strong> (e.g. in a well or in an oscillating system), its wave function must vanish at the edges of the region. This condition restricts the possible energies to <strong>discrete levels</strong>. A free particle, in contrast, has continuous energies.</p>`,
        `<p>The quantum harmonic oscillator has levels $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$, where $n=0,1,2,\\dots$ and $\\omega$ is the angular frequency. Neighbouring levels are equally spaced by $\\hbar\\omega$.</p>`,
        `<p>The lowest level ($n=0$) does not have zero energy, but $\\frac{1}{2}\\hbar\\omega$. This zero-point energy is a consequence of the uncertainty principle: a particle cannot be at rest at a single point.</p>`,
        { fig: 'v5v8-oscilator', caption: 'The levels of the oscillator are equally spaced, and the lowest one is not zero but ½ħω.' }
      ],
      examples: [
        { task: 'What is the energy of the oscillator in the state $n=3$, in units of $\\hbar\\omega$?',
          steps: ['$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.', '<strong>Result: $E_3=3{,}5\\,\\hbar\\omega$</strong>'] }
      ]
    },
    'v5-spin': {
      title: 'Angular momentum and spin',
      summary: 'Orbital angular momentum, the quantum number l, the number of states and the spin of the electron.',
      theory: [
        `<p>The orbital angular momentum of an electron in an atom is quantised: its magnitude is $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$, where $l=0,1,2,\\dots$ is the <strong>orbital quantum number</strong>. Its projection onto a chosen axis can take the values $L_z=m_l\\hbar$.</p>`,
        `<p>The magnetic quantum number $m_l$ takes values from $-l$ to $+l$ including zero, so for a given $l$ there are exactly $2l+1$ possible states. For $l=0$ there is one state, for $l=1$ there are three.</p>`,
        `<p><strong>Spin</strong> is the intrinsic angular momentum of the electron, which has no classical picture of a spinning ball. The electron has spin quantum number $s=\\tfrac{1}{2}$, so there are two possible orientations. Together with the orbital momentum it determines the structure of atomic levels.</p>`,
        { fig: 'v5v8-moment', caption: 'The magnetic quantum number m_l takes 2l + 1 values, from −l to +l.' }
      ],
      examples: [
        { task: 'An electron has orbital quantum number $l=2$. How many different values of $m_l$ are possible?',
          steps: ['The values of $m_l$ run from $-2$ to $+2$: $-2,-1,0,1,2$.', '<strong>Result: $2l+1=5$ values</strong>'] }
      ]
    },
    'v5-vodik': {
      title: 'The hydrogen atom and quantum states',
      summary: 'Energy levels of the hydrogen atom and the energy of a photon emitted in a transition between them.',
      theory: [
        `<p>The energies of an electron in the hydrogen atom are $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$, where $n=1,2,3,\\dots$ is the principal quantum number. The negative sign means that the electron is bound; as $n\\to\\infty$ the energy approaches zero.</p>`,
        `<p>When an electron drops from a higher level $n_i$ to a lower one $n_f$, the atom emits a photon with energy $E_f=E_{n_i}-E_{n_f}$ in absolute value. Absorption of a photon is the reverse process. That is why the spectrum of hydrogen consists of lines, not a continuous band.</p>`,
        `<p>The most important is the series of transitions to $n_f=2$ (the Balmer series), which lies in the visible region of light. Transitions to $n_f=1$ give ultraviolet radiation.</p>`,
        { fig: 'v5v8-vodik', caption: 'On a transition to a lower level the atom emits a photon with energy equal to the difference of the levels.' }
      ],
      examples: [
        { task: 'An electron in a hydrogen atom goes from $n=3$ to $n=2$. What energy does the emitted photon have?',
          steps: ['$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ and $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.', '$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.', '<strong>Result: $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>'] }
      ]
    },
    'v5-neurcitost': {
      title: 'Tunnelling and the uncertainty principle',
      summary: 'The Heisenberg uncertainty principle and tunnelling through a barrier that a particle cannot classically cross.',
      theory: [
        `<p><strong>The Heisenberg uncertainty principle</strong> states that the position and momentum of a particle cannot be determined simultaneously with arbitrary precision: $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. This is a property of waves, not a shortcoming of the measuring technique. The more precisely we know the position, the larger the uncertainty of the momentum.</p>`,
        `<p><strong>Tunnelling</strong> means that a particle passes through a potential barrier that it could not classically cross because it does not have enough energy. The wave function decreases exponentially inside the barrier, but not to zero, so there is a nonzero probability of finding the particle on the other side of the barrier.</p>`,
        `<p>Tunnelling explains alpha radioactive decay, the operation of the scanning tunnelling microscope and the electric current in some semiconductor devices.</p>`,
        { fig: 'v5v8-tunel', caption: 'A particle with energy lower than the height of the barrier has an exponentially decaying wave inside the barrier and can tunnel through it.' }
      ],
      examples: [
        { task: 'The position of an electron is known with an uncertainty $\\Delta x=1\\,\\text{pm}$. What is the smallest uncertainty of its momentum? Use $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$.',
          steps: ['$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.', '$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.', '<strong>Result: $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v6-specialna': {
      title: 'Special relativity',
      summary: 'Two postulates, time dilation and the Lorentz factor.',
      theory: [
        `<p>Special relativity rests on two postulates: (1) the laws of physics are the same in all inertial reference frames, (2) the speed of light in vacuum $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$ is the same for every observer, regardless of the motion of the source.</p>`,
        `<p>It follows from the second postulate that time is not absolute. Moving clocks run slower: the interval $\\Delta t$ measured in the frame relative to which the clocks move is longer than the proper time $\\Delta t_0$ in their rest frame. We have $\\Delta t=\\gamma\\,\\Delta t_0$, where $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ is the <strong>Lorentz factor</strong>.</p>`,
        `<p>The effect is negligible at everyday speeds, because $\\gamma$ is close to 1. At speeds close to $c$ it grows very rapidly. Particles in cosmic rays, for example, live longer than classical physics would allow.</p>`,
        { fig: 'v5v8-gama', caption: 'The Lorentz factor γ is close to 1 at low speeds and grows steeply as the speed approaches c.' }
      ],
      examples: [
        { task: 'A particle moves with speed $v=0{,}6\\,c$. What is its Lorentz factor?',
          steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.', '$\\sqrt{0{,}64}=0{,}8$, so $\\gamma=\\frac{1}{0{,}8}$.', '<strong>Result: $\\gamma=1{,}25$</strong>'] }
      ]
    },
    'v6-lorentz': {
      title: 'Lorentz transformations',
      summary: 'How the spatial and time coordinates of an event change when we move to another inertial frame.',
      theory: [
        `<p>The Galilean transformation $x'=x-vt$ holds only at low speeds. At speeds close to $c$ we need the <strong>Lorentz transformations</strong>, which preserve the speed of light. For a frame $S'$ moving with speed $v$ in the positive direction of the $x$ axis, $x'=\\gamma\\,(x-\\beta\\,ct)$ and $ct'=\\gamma\\,(ct-\\beta\\,x)$, where $\\beta=\\frac{v}{c}$.</p>`,
        `<p>Space and time are thus mixed: an event that is simultaneous in one frame need not be simultaneous in another. This <strong>relativity of simultaneity</strong> is a direct consequence of the finite speed of light.</p>`,
        `<p>For the inverse transformation the sign of the velocity changes. As $v\\to 0$ we have $\\gamma\\to 1$ and recover the classical relation $x'=x-vt$, so the Lorentz transformations contain classical physics as a limiting case.</p>`,
        { fig: 'v5v8-lorentz', caption: 'The axes x′ and ct′ of frame S′ are tilted; the Lorentz transformation recalculates the coordinates of the event.' }
      ],
      examples: [
        { task: 'In frame $S$ an event has coordinates $x=8\\,\\text{m}$ and $ct=4\\,\\text{m}$. Frame $S\'$ moves with speed $0{,}6\\,c$ in the positive direction of the $x$ axis. What is $x\'$ in $S\'$?',
          steps: ['$\\gamma=1{,}25$, $\\beta=0{,}6$.', '$x\'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.', '<strong>Result: $x\'=7\\,\\text{m}$</strong>'] }
      ]
    },
    'v6-energia': {
      title: 'Relativistic energy and momentum',
      summary: 'Total and kinetic energy of a particle at high speeds.',
      theory: [
        `<p>In relativity a particle has rest energy $E_0=mc^2$ even when it stands still. The total energy of a moving particle is $E=\\gamma\\,mc^2$. As $v\\to 0$ we have $\\gamma\\to 1$ and the total energy approaches the rest energy.</p>`,
        `<p><strong>Kinetic energy</strong> is the difference $E_k=E-E_0=(\\gamma-1)\\,mc^2$. It is the energy that the work must supply to accelerate the particle from rest to speed $v$. At speeds close to $c$ the kinetic energy grows without bound, so no particle with nonzero rest mass can reach the speed of light.</p>`,
        `<p>The relativistic momentum is $p=\\gamma\\,m\\,v$. For energy and momentum the relation $E^2=(pc)^2+(mc^2)^2$ also holds; it is suitable for photons, where $m=0$.</p>`,
        { fig: 'v5v8-energia', caption: 'The total energy γmc² is the rest energy mc² plus the kinetic energy (γ − 1)mc².' }
      ],
      examples: [
        { task: 'An electron ($m\\,c^2=0{,}511\\,\\text{MeV}$) moves with speed $0{,}8\\,c$. What is its kinetic energy?',
          steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.', '$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.', '<strong>Result: $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>'] }
      ]
    },
    'v6-ekvivalencia': {
      title: 'Equivalence of mass and energy',
      summary: 'The relation E = mc² and converting mass to energy and back.',
      theory: [
        `<p>The best-known result of relativity is the relation $E=mc^2$: mass is a form of energy, and energy has a corresponding mass $m=\\frac{E}{c^2}$. It is not just a formula for motion, but a property of every body, even one at rest.</p>`,
        `<p>Small changes of mass mean large amounts of energy, because $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ is a very large number. Nuclear reactions release energy precisely because the sum of the masses of the products is smaller by a small fraction than that of the original nuclei.</p>`,
        `<p>When converting, watch the units: mass in kilograms, speed in metres per second, energy in joules. A terajoule is $1\\,\\text{TJ}=10^{12}\\,\\text{J}$.</p>`
      ],
      examples: [
        { task: 'How much energy is released by the complete conversion of $1\\,\\text{g}$ of matter? Give the result in terajoules.',
          steps: ['$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.', '$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.', '<strong>Result: $90\\,\\text{TJ}$</strong>'] }
      ]
    },
    'v6-interval': {
      title: 'Spacetime intervals',
      summary: 'The invariant interval in a spacetime diagram and proper time.',
      theory: [
        `<p>Relativity joins space and time into a four-dimensional <strong>spacetime</strong>. Events are points in it, and their distance is not an ordinary one. The <strong>interval</strong> between two events with a time difference $\\Delta t$ and a spatial difference $\\Delta x$ is $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$.</p>`,
        `<p>The interval has the same value in every inertial frame, which is why it is called <strong>invariant</strong>. If $\\Delta s^2>0$, the interval is timelike and there exists a frame in which both events occur at the same place. The proper time is then $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$.</p>`,
        `<p>In units where $c=1$ (lengths measured in light-seconds) it suffices to compute $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$. The result is always less than or equal to $\\Delta t$, which is again time dilation.</p>`,
        { fig: 'v5v8-interval', caption: 'For a timelike interval the proper time Δτ = √(Δt² − Δx²) is shorter than Δt.' }
      ],
      examples: [
        { task: 'Two events are separated in time by $\\Delta t=5\\,\\text{s}$ and in space by $\\Delta x=3\\,\\text{ls}$ (light-seconds). What is the proper time $\\Delta\\tau$?',
          steps: ['$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.', '<strong>Result: $\\Delta\\tau=4\\,\\text{s}$</strong>'] }
      ]
    },
    'v6-vseobecna': {
      title: 'General relativity',
      summary: 'The equivalence principle, gravity as curvature of spacetime and the Schwarzschild radius.',
      theory: [
        `<p>General relativity (1915) rests on the <strong>equivalence principle</strong>: locally it is impossible to distinguish acceleration from gravity. A person in a lift that is freely falling in a gravitational field feels no weight, just like an astronaut in orbit.</p>`,
        `<p>From this Einstein concluded that gravity is not a force in the classical sense, but the <strong>curvature of spacetime</strong> caused by mass and energy. Bodies move along the shortest possible paths, so-called geodesics, which are curved in curved space.</p>`,
        `<p>A strong gravitational field slows down time: clocks close to a massive body run slower than those far from it. For a mass $M$ the <strong>Schwarzschild radius</strong> is $r_s=\\frac{2GM}{c^2}$. For the Earth it is about $9$ mm, for the Sun about $3\\,\\text{km}$.</p>`
      ],
      examples: [
        { task: 'What is the Schwarzschild radius of the Sun, if $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ and $c=3\\cdot 10^{8}\\,\\text{m/s}$?',
          steps: ['$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.', '$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.', '<strong>Result: $r_s\\approx 2{,}95\\,\\text{km}$</strong>'] }
      ]
    },
    'v6-zakrivenie': {
      title: 'Curvature of spacetime',
      summary: 'How mass curves spacetime and which phenomena prove it.',
      theory: [
        `<p>Imagine an elastic sheet on which you place a heavy ball. The sheet bends and small balls roll towards it. Similarly, mass curves spacetime and bodies move along curved paths. The analogy is only illustrative, not an exact model.</p>`,
        `<p>The most direct proof is the <strong>bending of light</strong> when it passes close to the Sun. Light travels along the shortest path, which in curved spacetime is not a straight line. A star behind the Sun therefore appears displaced to an observer. This effect was measured by Eddington in 1919.</p>`,
        `<p>Other phenomena, for example the gravitational shift of spectral lines or the slowing of time close to matter, can be measured with the precision needed for navigating GPS satellites. Phenomena unrelated to gravity or spacetime, for example the splitting of white light in a prism, cannot be explained by curvature.</p>`,
        { fig: 'v5v8-zakrivenie', caption: 'Mass curves spacetime and bodies move along curved paths. The grid is only an illustrative analogy.' }
      ],
      examples: [
        { task: 'Which phenomenon is a consequence of the curvature of spacetime: the bending of light passing the Sun, or the change of colour of light in a prism?',
          steps: ['The curvature of spacetime describes gravity, which affects the path of light.', 'The splitting of light in a prism is a consequence of the dependence of the refractive index on wavelength.', '<strong>Result: the bending of light around the Sun</strong>'] }
      ]
    },
    'v6-gravvlny': {
      title: 'Gravitational waves and black holes',
      summary: 'Gravitational waves as ripples of spacetime and the event horizon of a black hole.',
      theory: [
        `<p><strong>Gravitational waves</strong> are ripples of spacetime that propagate at the speed of light. They arise when large masses accelerate, for example when two black holes merge. The first direct observation was made in 2015 by the LIGO interferometer.</p>`,
        `<p>A <strong>black hole</strong> is a region where the escape velocity is greater than $c$, so light cannot escape from it. Its boundary is the <strong>event horizon</strong> at the Schwarzschild radius $r_s=\\frac{2GM}{c^2}$. Inside the horizon all paths lead towards the centre.</p>`,
        `<p>The radius of the horizon grows in direct proportion to the mass. A black hole with the mass of the Sun has a horizon of about $3\\,\\text{km}$, and a black hole with ten times the mass of the Sun has a horizon of about $30\\,\\text{km}$.</p>`,
        { fig: 'v5v8-horizont', caption: 'The radius of the event horizon is r_s = 2GM/c²; light from inside the horizon cannot escape.' }
      ],
      examples: [
        { task: 'What is the radius of the horizon of a black hole with mass $10\\,M_{\\odot}$, if for the Sun $r_s\\approx 2{,}95\\,\\text{km}$?',
          steps: ['The radius is proportional to the mass: $r_s=2{,}95\\,\\text{km}\\cdot 10$.', '<strong>Result: $r_s\\approx 29{,}5\\,\\text{km}$</strong>'] }
      ]
    },
    'v7-atom': {
      title: 'Structure of the atom and the electron shells',
      summary: 'The nucleus, the electron shells, and the distribution of electrons into shells and their capacity.',
      theory: [
        `<p>An atom has a <strong>nucleus</strong> made of protons and neutrons (together called nucleons) and an <strong>electron shell</strong>. The number of protons is the atomic number $Z$ and determines the chemical element. A neutral atom has the same number of electrons.</p>`,
        `<p>Electrons are not distributed arbitrarily. They stay in <strong>shells</strong> with number $n = 1, 2, 3, \\dots$ (labelled K, L, M). A shell with number $n$ holds at most $2n^2$ electrons: K holds 2, L holds 8, M holds 18.</p>`,
        `<p><strong>Why exactly this many?</strong> Electrons are described by quantum mechanics. Every electron state is determined by a set of quantum numbers, and the Pauli principle forbids two electrons in an atom from having the same state. Shells fill from the inside outwards, and the outermost (valence) shell determines the chemical properties of the element.</p>`,
        `<ol><li>From the periodic table find $Z$, and thereby the number of electrons.</li><li>Distribute them into shells: first K, then L, then M.</li><li>The last occupied shell is the valence shell.</li></ol>`,
        { fig: 'obr-atom', caption: 'A simplified model of the atom: a positive nucleus and electrons on orbits.' }
      ],
      examples: [
        { task: 'What is the maximum number of electrons in shell L (number $n = 2$)?',
          steps: ['Substitute $n = 2$ into the formula $2n^2$.', '$2\\cdot 2^2 = 8$.', '<strong>Result: 8 electrons</strong>'] },
        { task: 'Carbon has $Z = 6$. How many electrons are in its K and L shells?',
          steps: ['Shell K holds 2 electrons.', 'The remaining $6 - 2 = 4$ electrons go to shell L.', '<strong>Result: 2 in K and 4 in L</strong>'] }
      ]
    },
    'v7-spektra': {
      title: 'Atomic spectra and energy levels',
      summary: 'Transitions of electrons between levels and the energy of the emitted photons.',
      theory: [
        `<p>An atom can have only certain <strong>energy levels</strong>. When an electron drops from a higher level to a lower one, it emits a <strong>photon</strong> with energy equal to the difference of the levels. Conversely, a photon of the right energy can excite an electron to a higher level.</p>`,
        `<p>The energy of a photon is $E = h f = \\dfrac{h c}{\\lambda}$, where $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ is the Planck constant. In atomic physics energy is given in electronvolts: $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
        `<p>For the hydrogen atom $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$. The ground state ($n = 1$) is the lowest, and the levels approach zero from below. In a transition from $n_i$ to $n_f$ a photon with energy $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$ is produced.</p>`,
        `<p><strong>Why are the spectra made of lines?</strong> The levels are discrete, so photons have only a few precise energies. On a spectrogram we therefore see sharp lines, not a continuous rainbow. Each element has its own set of lines, which is why its spectrum is like a fingerprint.</p>`,
        { fig: 'v5v8-vodik', caption: 'On a transition to a lower level the atom emits a photon with energy equal to the difference of the levels.' }
      ],
      examples: [
        { task: 'An electron in a hydrogen atom goes from level $n=3$ to $n=2$. What energy does the emitted photon have?',
          steps: ['The difference of the levels: $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.', '$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, so $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.', '<strong>Result: approximately 1.89 eV</strong>'] },
        { task: 'Which transition emits a photon with the larger energy: $2\\to 1$, or $3\\to 2$?',
          steps: ['Transition $2\\to 1$: $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.', 'The transition $3\\to 2$ gives approximately $1{,}89\\,\\text{eV}$.', '<strong>Result: the transition $2\\to 1$</strong>'] }
      ]
    },
    'v7-jadro': {
      title: 'Structure of the atomic nucleus',
      summary: 'Protons, neutrons, nuclide notation, isotopes and the size of the nucleus.',
      theory: [
        `<p>The nucleus consists of protons (charge $+e$) and neutrons (no charge). Together they are called nucleons. A nuclide is written as $^{A}_{Z}\\mathrm{X}$: $A$ is the mass number, $Z$ is the atomic number, and the number of neutrons is $N = A - Z$.</p>`,
        `<p>The radius of the nucleus grows approximately with the cube root of the mass number: $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. Nuclei are therefore very small (of the order of femtometres), but they have almost the same density.</p>`,
        `<p><strong>Why does the nucleus not fly apart?</strong> Protons repel each other electrically, but the strong nuclear interaction acts as well. It is a short-range attractive force that is stronger than the electric repulsion. Stable heavier nuclei have more neutrons than protons (e.g. $^{208}_{82}\\mathrm{Pb}$).</p>`,
        `<ul><li><strong>Isotopes</strong> have the same $Z$ but different $N$ (e.g. $^{12}_{6}\\mathrm{C}$ and $^{14}_{6}\\mathrm{C}$).</li><li><strong>Isobars</strong> have the same $A$ but different $Z$.</li></ul>`,
        { fig: 'v5v8-nuklidy', caption: 'Light stable nuclei have N ≈ Z, while heavier stable nuclei have more neutrons than protons.' }
      ],
      examples: [
        { task: 'How many protons and neutrons does the nucleus $^{238}_{92}\\mathrm{U}$ have?',
          steps: ['The atomic number is $Z=92$.', '$N = A - Z = 238 - 92 = 146$.', '<strong>Result: 92 protons and 146 neutrons</strong>'] },
        { task: 'How does the radius of a nucleus change if its mass number increases eightfold?',
          steps: ['$r \\propto A^{1/3}$, so $r$ changes as $\\sqrt[3]{A}$.', '$\\sqrt[3]{8}=2$, so the radius doubles.', '<strong>Result: the radius doubles</strong>'] }
      ]
    },
    'v7-radioaktivita': {
      title: 'Radioactivity and nuclear transformations',
      summary: 'Types of decay, the decay law, half-life and activity.',
      theory: [
        `<p>Unstable nuclei transform spontaneously. In <strong>alpha</strong> decay a helium nucleus $^{4}_{2}\\mathrm{He}$ is ejected. In <strong>beta-minus</strong> decay a neutron turns into a proton, and an electron and an antineutrino are produced. In <strong>gamma</strong> radiation the nucleus only gets rid of excess energy; neither $Z$ nor $A$ changes. In every transformation the conservation of the nucleon number and of the proton number holds.</p>`,
        `<p>The decay of a single nucleus is random, but for a large number of nuclei the decay law $N(t) = N_0\\cdot 2^{-t/T}$ holds. The time $T$ is the <em>half-life</em>, in which half of the nuclei decay. The law follows from the assumption that the probability of decay in a short time $dt$ is proportional to the number of nuclei: $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
        `<p><strong>Activity</strong> $A = \\lambda N$ gives the number of decays per second. The unit is the becquerel, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$. The decay constant is $\\lambda = \\dfrac{\\ln 2}{T}$.</p>`,
        `<ol><li>Calculate the number of half-lives $k = t/T$.</li><li>Divide the number of nuclei by $2^{k}$, not just by two.</li></ol>`,
        { fig: 'v5v8-rozpad', caption: 'The number of undecayed nuclei decreases exponentially: half remains after each half-life.' }
      ],
      examples: [
        { task: 'A radioisotope has a half-life of 8 days. What percentage of the nuclei remains after 24 days?',
          steps: ['The number of half-lives is $k = 24/8 = 3$.', '$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, so 12.5% remains.', '<strong>Result: 12.5%</strong>'] },
        { task: 'A sample has $4\\cdot 10^{6}$ nuclei and a half-life of 2 h. How many nuclei remain after 6 h?',
          steps: ['In 6 h, $k = 6/2 = 3$ half-lives pass.', '$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.', '<strong>Result: 500,000 nuclei</strong>'] }
      ]
    },
    'v7-stiepenie-fuzia': {
      title: 'Nuclear fission and fusion',
      summary: 'Mass defect, binding energy and the energy released by fission or fusion.',
      theory: [
        `<p>A nucleus has a smaller mass than the sum of the masses of its nucleons. This difference is the <em>mass defect</em> $\\Delta m$. According to the relation $E = \\Delta m\\, c^2$ the corresponding energy is released. For practical calculations $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$.</p>`,
        `<p>The largest binding energy per nucleon is found in nuclei around iron ($A\\approx 56$). Therefore heavy nuclei can undergo <strong>fission</strong> into medium-heavy nuclei, and light nuclei can <strong>merge</strong> (fusion). Both paths lead to greater binding energy and release energy.</p>`,
        `<p>In the fission of $^{235}_{92}\\mathrm{U}$ by a neutron, two fragments, 2 to 3 neutrons and approximately 200 MeV of energy are produced. These neutrons can trigger a chain reaction, which must be controlled in a reactor.</p>`,
        `<p>Fusion requires an extremely high temperature so that positively charged nuclei approach each other within the range of the strong interaction. In the reaction $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$ approximately 17.6 MeV is released.</p>`,
        { fig: 'v5v8-vazba', caption: 'The binding energy per nucleon peaks at iron: light nuclei fuse, heavy nuclei split.' }
      ],
      examples: [
        { task: 'In a nuclear reaction a mass defect $\\Delta m = 0{,}2\\,\\text{u}$ arises. What energy is that?',
          steps: ['$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.', '$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.', '<strong>Result: 186.3 MeV</strong>'] },
        { task: 'Why is fusion on Earth more demanding than fission?',
          steps: ['The nuclei are positively charged and repel each other.', 'Extreme temperature and pressure are needed to bring them into the range of the strong interaction.', '<strong>Result: fusion requires extreme conditions</strong>'] }
      ]
    },
    'v7-ziarenie-latka': {
      title: 'Interaction of radiation with matter',
      summary: 'Attenuation of radiation, the half-value thickness and the main processes for gamma radiation.',
      theory: [
        `<p>Radiation loses energy when it passes through matter. Alpha particles are stopped already by a sheet of paper, beta particles pass through a few millimetres of aluminium, and gamma radiation penetrates deeply and is attenuated only gradually.</p>`,
        `<p>For a narrow beam of photons the exponential attenuation $I(x) = I_0\\,e^{-\\mu x}$ holds, where $\\mu$ is the attenuation coefficient. More practical is the <em>half-value thickness</em> $d_{1/2}$, that is, the layer that reduces the intensity to half. Then $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
        `<p>For gamma radiation three processes are important: the <strong>photoelectric effect</strong> (the photon is absorbed, dominant at low energies), <strong>Compton scattering</strong> (the photon loses part of its energy) and <strong>pair production</strong> of an electron and a positron (from energy 1.022 MeV). Heavy and dense materials, for example lead, shield better.</p>`,
        `<ul><li>Ionising radiation knocks electrons out of atoms, so it can damage cells.</li><li>Protection is chosen according to the type of radiation: paper or the hand against alpha, plexiglass against beta, lead or concrete against gamma.</li></ul>`,
        { fig: 'v5v8-zoslabenie', caption: 'Each half-value thickness reduces the radiation intensity by half.' }
      ],
      examples: [
        { task: 'A lead layer has a half-value thickness of 1.2 cm. What percentage of the radiation passes through a layer 3.6 cm thick?',
          steps: ['$x/d_{1/2}=3{,}6/1{,}2=3$ half-value thicknesses.', '$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.', '<strong>Result: 12.5%</strong>'] },
        { task: 'The intensity of the radiation dropped to a quarter. How many half-value thicknesses did the layer have?',
          steps: ['$\\dfrac{1}{4}=2^{-2}$.', 'So the layer had 2 half-value thicknesses.', '<strong>Result: 2</strong>'] }
      ]
    },
    'v7-jadrova-energetika': {
      title: 'Nuclear power and radiation detection',
      summary: 'The principle of a nuclear reactor, power plant efficiency and measurement of radiation dose.',
      theory: [
        `<p>A nuclear reactor uses the fission of $^{235}_{92}\\mathrm{U}$ in a controlled chain reaction. The heat from the reactor heats water, steam is produced, and the steam drives a turbine with a generator that produces electricity.</p>`,
        `<p>The efficiency of the power plant is $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$, where $P_{\\text{t}}$ is the thermal power of the reactor. Part of the heat cannot be converted into work and is therefore removed into the cooling water. Nuclear power plants usually have an efficiency of about 33%.</p>`,
        `<p><strong>Control:</strong> control rods made of materials that absorb neutrons (e.g. boron, cadmium). A <strong>moderator</strong> (water, graphite) slows the neutrons down so that they can split nuclei more effectively.</p>`,
        `<p><strong>Dosimetry:</strong> the absorbed dose $D = E/m$ is given in grays, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. Detectors such as the Geiger–Müller tube or a scintillator react to individual particles and photons.</p>`,
        { fig: 'v5v8-reaktor', caption: 'The power plant converts the heat of the reactor into work; the remaining heat goes to the cooling water.' }
      ],
      examples: [
        { task: 'A reactor has a thermal power of 3000 MW and an efficiency of 33%. What is its electrical power?',
          steps: ['$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.', '$0{,}33\\cdot 3000=990\\,\\text{MW}$.', '<strong>Result: 990 MW</strong>'] },
        { task: 'As a result of irradiation a body absorbed an energy of 0.5 J. The mass of the body is 50 kg. What is the absorbed dose?',
          steps: ['$D = E/m$.', '$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.', '<strong>Result: 0.01 Gy</strong>'] }
      ]
    },
    'v8-castice': {
      title: 'Elementary particles and their properties',
      summary: 'Characteristics of particles, fermions and bosons, baryons and mesons.',
      theory: [
        `<p>According to current knowledge, elementary particles have no internal structure. They are characterised by their <strong>mass</strong>, <strong>electric charge</strong>, <strong>spin</strong> (intrinsic angular momentum) and, for quarks and gluons, also by <strong>colour</strong>.</p>`,
        `<p>According to spin we divide particles into <em>fermions</em> (spin $\\tfrac{1}{2}$, they make up matter and obey the Pauli principle) and <em>bosons</em> (integer spin, they mediate interactions, e.g. the photon with spin 1).</p>`,
        `<p>Hadrons are composed of quarks. <strong>Baryons</strong> contain three quarks (proton $uud$, neutron $udd$). <strong>Mesons</strong> contain a quark–antiquark pair (e.g. $\\pi^{+}=u\\bar{d}$). Leptons (electron, muon, tau and neutrinos) do not take part in the strong interaction.</p>`,
        `<ul><li>Proton: mass approximately 938 MeV/$c^2$, charge $+e$.</li><li>Neutron: mass approximately 940 MeV/$c^2$, charge $0$.</li><li>Electron: mass approximately 0.511 MeV/$c^2$, charge $-e$.</li></ul>`,
        { fig: 'v5v8-kvarky', caption: 'The proton (uud) and the neutron (udd) are made of three quarks; the sum of their charges is the charge of the particle.' }
      ],
      examples: [
        { task: 'Of which quarks is the neutron composed?',
          steps: ['The neutron is a baryon, so it contains three quarks.', 'Its charge must be 0: two $d$ quarks and one $u$ quark give $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$.', '<strong>Result: $udd$</strong>'] },
        { task: 'Is the electron a baryon?',
          steps: ['A baryon is composed of three quarks.', 'The electron is a lepton and contains no quarks.', '<strong>Result: no</strong>'] }
      ]
    },
    'v8-kvarky-leptony': {
      title: 'Quarks and leptons',
      summary: 'Generations of fermions and the fractional charges of quarks.',
      theory: [
        `<p>Six quarks are divided into three generations: $(u,d)$, $(c,s)$ and $(t,b)$. The quarks $u$, $c$, $t$ carry charge $+\\tfrac{2}{3}e$ and the quarks $d$, $s$, $b$ carry charge $-\\tfrac{1}{3}e$. They are the only particles with a nonzero fractional charge.</p>`,
        `<p>Leptons also form three generations of pairs: $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ and $(\\tau,\\nu_\\tau)$. Charged leptons have charge $-e$. Neutrinos are neutral and interact very weakly with matter.</p>`,
        `<p>Free hadrons have a total charge that is an integer multiple of $e$. Therefore quarks combine in triplets (baryons) or in quark–antiquark pairs (mesons). This sum is a useful check when writing reactions.</p>`,
        `<ol><li>Find the charge of each quark in units of $e$.</li><li>Add them up.</li><li>The result must be an integer.</li></ol>`,
        { fig: 'v5v8-generacie', caption: 'Fermions come in three generations; higher generations are heavier and less stable.' }
      ],
      examples: [
        { task: 'What is the charge of the particle $uud$?',
          steps: ['$u$ has $+\\tfrac{2}{3}$, $d$ has $-\\tfrac{1}{3}$.', '$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.', '<strong>Result: $+e$ (proton)</strong>'] },
        { task: 'What charge does the baryon $uds$ (the Λ particle) have?',
          steps: ['$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.', '<strong>Result: charge 0</strong>'] }
      ]
    },
    'v8-fotony': {
      title: 'Photons and other mediating particles',
      summary: 'Gauge bosons as carriers of interactions and their properties.',
      theory: [
        `<p>Interactions between particles take place through the exchange of <strong>gauge bosons</strong>. The photon $\\gamma$ carries the electromagnetic force, gluons $g$ the strong force, and the bosons $W^{\\pm}$ and $Z^{0}$ the weak force.</p>`,
        `<p>The photon has neither mass nor charge, and its spin is 1. The gluon is also massless, but it carries <em>colour</em> charge, so it binds to itself as well. This is the reason why quarks cannot be isolated and are confined inside hadrons.</p>`,
        `<p>The $W$ and $Z$ bosons are very heavy (masses approximately 80 and 91 GeV/$c^2$), therefore the range of the weak interaction is short, of the order of $10^{-18}\\,\\text{m}$. The range is inversely proportional to the mass of the mediating particle.</p>`,
        `<p>The graviton is a hypothetical boson of gravity. It has not yet been confirmed experimentally and is not included in the Standard Model.</p>`,
        { fig: 'v5v8-interakcie', caption: 'The four fundamental interactions: each is transmitted by the exchange of its boson and has a different range.' }
      ],
      examples: [
        { task: 'Which particle mediates the strong interaction?',
          steps: ['The strong interaction is mediated by gluons.', '<strong>Result: the gluon</strong>'] },
        { task: 'Why does the weak interaction have such a short range?',
          steps: ['The mediating bosons $W$ and $Z$ have a large mass.', 'The range is inversely proportional to the mass, so the large mass shortens the range.', '<strong>Result: the large mass of the bosons shortens the range</strong>'] }
      ]
    },
    'v8-standardny-model': {
      title: 'The Standard Model of particle physics',
      summary: 'Overview of particles and interactions in the Standard Model and their counts.',
      theory: [
        `<p>The Standard Model describes three of the four fundamental interactions (electromagnetic, weak and strong) and all elementary particles known so far. It does not yet include gravity.</p>`,
        `<p>Matter is formed by 12 fermions: 6 quarks and 6 leptons in three generations. Each further generation is heavier and less stable. Stable matter consists only of particles of the first generation.</p>`,
        `<p>Particles acquire mass through the <em>Higgs mechanism</em>. Conservation laws (charge, colour, lepton numbers) and symmetries determine which processes are allowed.</p>`,
        `<ul><li>Gauge bosons: the photon $\\gamma$, eight gluons $g$, the bosons $W^{\\pm}$ and $Z^{0}$.</li><li>The Higgs boson $H^{0}$.</li></ul>`,
        { fig: 'v5v8-generacie', caption: 'Fermions come in three generations; higher generations are heavier and less stable.' }
      ],
      examples: [
        { task: 'How many fermions does the Standard Model have in the first two generations?',
          steps: ['Each generation contains 2 quarks and 2 leptons, so 4 fermions.', '$2\\cdot 4 = 8$.', '<strong>Result: 8</strong>'] },
        { task: 'How many gauge bosons are there in the Standard Model?',
          steps: ['The photon (1), the gluons (8) and the bosons $W^{+}$, $W^{-}$, $Z^{0}$ (3).', '$1+8+3=12$.', '<strong>Result: 12</strong>'] }
      ]
    },
    'v8-interakcie': {
      title: 'Strong, weak and electromagnetic interactions',
      summary: 'Range, action and relative strength of three interactions.',
      theory: [
        `<p><strong>The strong interaction</strong> holds quarks together in protons and neutrons, and nucleons together in the nucleus. It has the shortest range, of the order of $10^{-15}\\,\\text{m}$, and is the strongest of the four interactions.</p>`,
        `<p><strong>The electromagnetic interaction</strong> acts between charges. It causes electric and magnetic forces and the binding of electrons in atoms. Its range is infinite and the force decreases with the square of the distance.</p>`,
        `<p><strong>The weak interaction</strong> is responsible for beta decay, in which a $d$ quark turns into a $u$ quark and a $W^{-}$ boson is emitted. Its range is very short, of the order of $10^{-18}\\,\\text{m}$. It changes the flavour of quarks, which the other interactions cannot do.</p>`,
        `<p>The relative strengths (for two particles in a nucleus) are approximately 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$ in the order strong, electromagnetic, weak and gravitational. Gravity is the weakest and is negligible in the microworld.</p>`,
        { fig: 'v5v8-interakcie', caption: 'The four fundamental interactions: each is transmitted by the exchange of its boson and has a different range.' }
      ],
      examples: [
        { task: 'Which interaction is responsible for beta decay?',
          steps: ['In beta decay a $d$ quark changes into a $u$ quark.', 'A change of quark flavour is the domain of the weak interaction.', '<strong>Result: the weak interaction</strong>'] },
        { task: 'Which interaction holds the electrons in an atom?',
          steps: ['Electrons have a negative charge and the nucleus has a positive one.', '<strong>Result: the electromagnetic interaction</strong>'] }
      ]
    },
    'v8-urychlovace': {
      title: 'Particle accelerators and detectors',
      summary: 'Acceleration of charged particles, collisions and reconstruction of events in a detector.',
      theory: [
        `<p>An accelerator speeds up charged particles with an electric field. A particle with charge $q = z\\,e$ passing through a voltage $U$ gains kinetic energy $E_k = z\\,e\\,U$. If the voltage is in megavolts, the energy comes out in MeV.</p>`,
        `<p>Large accelerators, for example the LHC at CERN with a circumference of 27 km, keep the beams on a circular path with strong magnets, and the particles are accelerated in stages. Proton–proton collisions reach energies of the order of TeV.</p>`,
        `<p>Detectors record particle tracks. A tracking detector in a magnetic field shows the curvature of a path, from which the momentum is determined. Calorimeters measure energy and muon chambers track muons. From such data we reconstruct what particle was produced.</p>`,
        `<p>According to the relation $E = m\\,c^2$ the kinetic energy of a collision can be converted into the mass of new particles. Therefore very heavy particles are produced in high-energy collisions.</p>`,
        { fig: 'v5v8-urychlovac', caption: 'A particle with charge ze passes through voltage U and gains energy zeU; it is accelerated by an electric field.' }
      ],
      examples: [
        { task: 'A proton is accelerated by a voltage of 5 MV. What kinetic energy does it have?',
          steps: ['For a proton $z=1$, so $E_k = e\\,U$.', '$E_k = 5\\,\\text{MeV}$.', '<strong>Result: 5 MeV</strong>'] },
        { task: 'A particle with charge $+2e$ passes through a voltage of 3 MV. What energy does it gain?',
          steps: ['$z=2$, so $E_k = 2\\cdot 3\\,\\text{MeV}$.', '<strong>Result: 6 MeV</strong>'] }
      ]
    },
    'v8-higgs': {
      title: 'The Higgs boson and open questions',
      summary: 'The Higgs field, the discovery of the Higgs boson and unsolved problems of modern physics.',
      theory: [
        `<p>The Higgs boson was discovered in 2012 at the LHC. It is a quantum of the Higgs field, which is present throughout the universe. Particles interacting with this field acquire mass; the more strongly they interact, the heavier they are.</p>`,
        `<p>The mass of the Higgs boson is approximately 125 GeV/$c^2$, which is about 133 times the mass of the proton. The boson was confirmed through its decays into two photons or into $Z$ bosons.</p>`,
        `<p>Open questions: <strong>dark matter</strong> makes up about 27% of the energy content of the universe, and the Standard Model does not describe it. The <strong>neutrino masses</strong> are small but nonzero, which the original model did not predict. The Standard Model also does not include <strong>gravity</strong> and does not explain why there is more matter than antimatter in the universe.</p>`
      ],
      examples: [
        { task: 'How many times heavier is the Higgs boson than the proton (the mass of the proton is approximately 0.94 GeV/$c^2$)?',
          steps: ['$125/0{,}94\\approx 133$.', '<strong>Result: about 133 times</strong>'] },
        { task: 'What fraction of the energy content of the universe is dark matter, approximately?',
          steps: ['Dark matter makes up approximately 27% and ordinary matter only about 5%.', '<strong>Result: about 27%</strong>'] }
      ]
    }
  }
});
