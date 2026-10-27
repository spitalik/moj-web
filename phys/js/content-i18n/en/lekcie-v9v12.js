/* English: university-level lessons of levels v9–v12 (js/rocniky/v9.js, v10.js, v11.js, v12.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('en', {
  lessons: {
    'v9-kryst-struktury': {
      title: 'Crystal structures',
      summary: 'The unit cell, the types of cubic lattices and the number of atoms per cell.',
      theory: [
        `<p>A crystal is a substance in which atoms are arranged regularly in a spatial <em>lattice</em>. The smallest unit which, repeated by translations, builds the whole lattice is the <strong>unit cell</strong>.</p>`,
        `<p>The three basic cubic cells are: <em>simple cubic</em> (atoms only at the corners), <em>body-centred cubic</em> (besides the corners also an atom in the centre) and <em>face-centred cubic</em> (besides the corners also atoms in the centres of the faces).</p>`,
        `<p>An atom in the centre belongs to the cell entirely, an atom on a face belongs to it by one half and an atom at a corner by one eighth. Therefore a simple cubic cell has 1 atom, a body-centred cell 2 atoms and a face-centred cell 4 atoms.</p>`,
        `<p>The arrangement affects the mechanical properties. Metals with a face-centred lattice (Al, Cu, Au) are ductile, because their atomic planes can slide past each other easily.</p>`,
        { fig: 'v9v12-bunka', caption: 'Unit cell: simple, body-centred and face-centred cubic lattices, and the number of atoms that belong to each of them.' }
      ],
      examples: [
        { task: 'How many atoms belong to one unit cell of a face-centred lattice?',
          steps: ['Eight corner atoms, each belonging to the cell by one eighth: $8\\cdot\\tfrac{1}{8}=1$.', 'Six face atoms, each belonging to the cell by one half: $6\\cdot\\tfrac{1}{2}=3$.', '<strong>Result: $1+3=4$ atoms</strong>'] },
        { task: 'How many atoms does a body-centred cubic cell have?',
          steps: ['The corners give $8\\cdot\\tfrac{1}{8}=1$ atom.', 'The atom in the centre belongs to the cell entirely, so it adds 1.', '<strong>Result: 2 atoms</strong>'] }
      ]
    },
    'v9-vazby': {
      title: 'Atomic bonds in solids',
      summary: 'Ionic, covalent, metallic and van der Waals bonds and their consequences.',
      theory: [
        `<p>Atoms join into a solid when this lowers the total energy of the system. A bond forms by the redistribution or the sharing of valence electrons.</p>`,
        `<ul><li><strong>Ionic</strong>: electrons pass from one atom to another and oppositely charged ions form (e.g. NaCl). These substances are hard, brittle and have a high melting point.</li><li><strong>Covalent</strong>: atoms share electron pairs (diamond, silicon). The bonds are strong and the substances are hard.</li><li><strong>Metallic</strong>: valence electrons form a common "electron gas" that belongs to all atoms (Cu, Fe). Metals are ductile and conduct current.</li><li><strong>Van der Waals</strong>: weak attractive forces between temporary dipoles (e.g. solid CO₂ or graphite layers). They are easily broken.</li></ul>`,
        `<p>Properties of a solid, such as hardness, conductivity and melting point, are a direct consequence of the bond type. Once we know the bond, we can predict how the material will behave.</p>`
      ],
      examples: [
        { task: 'Which bond is present in copper metal?',
          steps: ['Copper atoms release their valence electrons into a common "sea".', '<strong>Result: metallic bond</strong>'] },
        { task: 'Why is diamond very hard?',
          steps: ['Each carbon atom is covalently bonded to four neighbours.', 'Such a rigid network requires a lot of energy to break.', '<strong>Result: strong covalent bonds throughout the crystal</strong>'] }
      ]
    },
    'v9-elektricke-tepelne': {
      title: 'Electrical and thermal properties of materials',
      summary: 'Resistivity, the temperature dependence of resistance and thermal conductivity.',
      theory: [
        `<p>The resistance of a conductor is $R = \\rho\\dfrac{l}{S}$, where $\\rho$ is the <em>resistivity</em> of the material, $l$ the length and $S$ the cross-section. The resistivity of copper is approximately $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$. A longer and thinner conductor has a larger resistance.</p>`,
        `<p>A metal conducts current because its valence electrons move freely in the lattice. When the temperature rises, the vibrations of the lattice ions scatter this motion, so the resistance of a metal increases with temperature. In contrast, in semiconductors and insulators more carriers are released as the temperature rises and the resistance decreases.</p>`,
        `<p><strong>Thermal conductivity:</strong> in metals heat is carried mainly by free electrons, in non-metals by lattice vibrations (phonons). That is why copper is an excellent heat conductor, while glass and ceramics insulate against heat.</p>`
      ],
      examples: [
        { task: `A copper wire of length 50 m and cross-section 2 mm² has what resistance? The resistivity of copper is $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.`,
          steps: ['Convert the cross-section: $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.', '$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.', '<strong>Result: approximately 0.43 Ω</strong>'] },
        { task: 'Which conductor has the larger resistance: the longer one or the shorter one, with the same cross-section and material?',
          steps: ['The resistance is proportional to the length $l$.', '<strong>Result: the longer one</strong>'] }
      ]
    },
    'v9-pasova-teoria': {
      title: 'Band theory of solids',
      summary: 'Energy bands in a crystal and the division of materials into conductors, semiconductors and insulators.',
      theory: [
        `<p>When a large number of atoms come together, the discrete energy levels of the electrons broaden into <em>bands</em>, that is sets of very closely spaced levels. Between the bands there may lie a <strong>forbidden band</strong> of width $E_g$, in which electrons cannot be found.</p>`,
        `<p>The highest occupied band is the <em>valence</em> band, and above it lies the <em>conduction</em> band. Electrons fill the bands from the bottom up, and the Pauli principle forbids two electrons from occupying one state. A completely filled band does not conduct current, because the electrons in it have nowhere to move.</p>`,
        `<ul><li><strong>Conductor</strong> (metal): there is no forbidden band, the bands overlap and the conduction band is partly filled.</li><li><strong>Semiconductor</strong>: $E_g$ is approximately 0.1 to 3 eV (silicon has 1.1 eV). At room temperature a few electrons reach the conduction band.</li><li><strong>Insulator</strong>: $E_g$ is larger than 3 eV (diamond has 5.5 eV).</li></ul>`,
        { fig: 'v9v12-pasy', caption: 'In a conductor the bands overlap, in a semiconductor there is a narrow forbidden band E_g, and in an insulator a wide one.' }
      ],
      examples: [
        { task: 'A material has a forbidden band width $E_g = 0{,}67\\,\\text{eV}$. Is it a conductor, a semiconductor or an insulator?',
          steps: ['The value lies between 0.1 and 3 eV and is not zero.', '<strong>Result: a semiconductor (e.g. germanium)</strong>'] },
        { task: 'Why does diamond ($E_g=5{,}5\\,\\text{eV}$) not conduct current?',
          steps: ['The forbidden band is very wide.', 'At ordinary temperatures the electrons do not reach the conduction band.', '<strong>Result: it is an insulator</strong>'] }
      ]
    },
    'v9-polovodice': {
      title: 'Semiconductors and transistors',
      summary: 'Doping of silicon, the PN junction and the principle of the transistor.',
      theory: [
        `<p>Pure silicon has four valence electrons and bonds covalently. At room temperature a small fraction of the electrons is released into the conduction band and leaves behind <em>holes</em>, places into which an electron can move. This is called intrinsic conduction.</p>`,
        `<p><strong>Doping</strong> increases the conductivity. An element with five valence electrons (phosphorus, arsenic, antimony) donates an extra free electron and an $n$-type semiconductor is formed, in which the carriers are electrons. An element with three valence electrons (boron, aluminium, gallium) creates holes and a $p$-type semiconductor is formed.</p>`,
        `<p>A <strong>PN junction</strong> is formed by joining both types. In the forward direction current flows, in the reverse direction practically none. A transistor consists of two such junctions, and a small current in one circuit controls a large current in the other.</p>`,
        `<p>A transistor serves as an amplifier and as a switch. All digital circuits in computers and mobile phones are built from billions of transistors.</p>`,
        { fig: 'v9v12-pn', caption: 'At the PN junction holes from the p-region meet electrons from the n-region.' }
      ],
      examples: [
        { task: 'We add phosphorus to silicon. What type of semiconductor is formed?',
          steps: ['Phosphorus has 5 valence electrons, so one of them is extra.', '<strong>Result: an $n$-type semiconductor</strong>'] },
        { task: 'Why does a diode hardly conduct current in the reverse direction?',
          steps: ['A region without free carriers forms at the PN junction.', 'When the reverse voltage increases, this region only widens.', '<strong>Result: practically no current passes</strong>'] }
      ]
    },
    'v9-supravodivost': {
      title: 'Superconductivity',
      summary: 'Zero resistance below the critical temperature, the Meissner effect and high-temperature superconductors.',
      theory: [
        `<p>Superconductivity is a state in which a material loses its electrical resistance completely below the <em>critical temperature</em> $T_c$. Current can flow in it without losses.</p>`,
        `<p><strong>Meissner effect</strong>: a superconductor expels a magnetic field from its interior. That is why a superconductor levitates above a magnet.</p>`,
        `<p>Classical superconductors, such as lead or niobium, have $T_c$ of several kelvins and are cooled with liquid helium ($4{,}2\\,\\text{K}$). High-temperature superconductors (cuprates, e.g. YBCO with $T_c\\approx 92\\,\\text{K}$) can be cooled with the cheaper liquid nitrogen ($77\\,\\text{K}$).</p>`,
        `<p>According to BCS theory, electrons in a crystal pair up into <em>Cooper pairs</em> thanks to the exchange of lattice vibrations. These pairs move without scattering, which is why the resistance is zero.</p>`,
        { fig: 'v9v12-supra', caption: 'Below the critical temperature Tc the resistance of a superconductor drops to zero, whereas a normal metal has a resistance that grows with temperature.' }
      ],
      examples: [
        { task: 'The critical temperature of niobium is $T_c=9{,}2\\,\\text{K}$. What is it in degrees Celsius?',
          steps: ['$t = T - 273{,}15$.', '$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.', '<strong>Result: approximately -263.95 °C</strong>'] },
        { task: 'Why does a superconductor levitate above a magnet?',
          steps: ['The magnetic field cannot penetrate the superconductor (Meissner effect).', 'Induced currents in the surface create a field that repels the magnet.', '<strong>Result: the repulsive force lifts the superconductor</strong>'] }
      ]
    },
    'v9-magneticke': {
      title: 'Magnetic materials',
      summary: 'Diamagnetism, paramagnetism and ferromagnetism, domains and the Curie temperature.',
      theory: [
        `<p>According to their behaviour in a magnetic field, substances are divided into <strong>diamagnetic</strong> (weakly repelled, e.g. copper, zinc), <strong>paramagnetic</strong> (weakly attracted, e.g. aluminium, platinum) and <strong>ferromagnetic</strong> (strongly attracted, e.g. iron, nickel, cobalt).</p>`,
        `<p>In ferromagnets the magnetic moments of the atoms align into jointly oriented regions called <em>domains</em>. Without a field the domains are randomly oriented and the net moment is zero. An external field aligns them and the material becomes magnetised.</p>`,
        `<p>Above the <em>Curie temperature</em> $T_C$ the thermal motion of the atoms destroys the domains and ferromagnetism disappears. Iron has $T_C\\approx 770\\,{}^{\\circ}\\text{C}$.</p>`,
        `<p>Soft magnetic materials, for example transformer sheets, are easily magnetised and demagnetised. Hard materials, for example permanent magnets, retain their magnetisation.</p>`,
        { fig: 'v9v12-domeny', caption: 'In a ferromagnet the domains are randomly oriented without a field; in an external field they align and the material becomes magnetised.' }
      ],
      examples: [
        { task: 'Why does a paper clip stick to a magnet, but a copper wire does not?',
          steps: ['The clip is made of steel, which contains iron; its domains align in the field of the magnet.', 'Copper is diamagnetic and its response is weak and repulsive.', '<strong>Result: the clip is ferromagnetic</strong>'] },
        { task: 'Iron has a Curie temperature of 770 °C. What happens when it is heated to 800 °C?',
          steps: ['800 °C is above the Curie temperature.', 'The domains break down and the iron loses its permanent magnetisation.', '<strong>Result: it stops being ferromagnetic</strong>'] }
      ]
    },
    'v9-nanomaterialy': {
      title: 'Nanomaterials and quantum materials',
      summary: 'The surface-to-volume ratio in nanomaterials and examples of quantum materials.',
      theory: [
        `<p>Nanomaterials have at least one dimension in the range of approximately 1 to 100 nm. As the size decreases, the surface-to-volume ratio grows and a large fraction of the atoms lies on the surface. Properties such as colour, melting point or reactivity can therefore differ markedly from a large piece of the same substance.</p>`,
        `<p>For a cube with edge $a$ we have $S = 6a^2$ and $V = a^3$, so $\\dfrac{S}{V}=\\dfrac{6}{a}$. The ratio decreases as the edge grows, which is why the edge stands in the denominator. When the edge is reduced tenfold, the ratio increases tenfold.</p>`,
        `<p><strong>Quantum materials</strong> show the effects of quantum mechanics on a macroscopic scale. Examples are graphene (a single layer of carbon atoms with very high electron mobility), quantum dots (their size determines the colour of the emitted light) and topological insulators.</p>`,
        { fig: 'v9v12-nano', caption: 'Dividing a cube into smaller cubes keeps the volume but enlarges the surface. The ratio S/V grows as the size decreases.' }
      ],
      examples: [
        { task: 'A cube has an edge $a=2\\,\\text{nm}$. What is the ratio $S/V$?',
          steps: ['$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.', '$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.', '<strong>Result: 3 nm⁻¹</strong>'] },
        { task: 'How does the ratio $S/V$ change if the edge is doubled?',
          steps: ['$S/V = 6/a$ is inversely proportional to the edge.', 'Doubling the edge halves the ratio.', '<strong>Result: it is halved</strong>'] }
      ]
    },
    'v10-hviezdy': {
      title: 'Formation, evolution and structure of stars',
      summary: 'How a star forms, why it stays in equilibrium and how its luminosity depends on radius and temperature.',
      theory: [
        `<p>A star forms from a condensed region of interstellar gas and dust, a so-called nebula. Gravity compresses the material and the gas heats up. When the temperature in the core reaches roughly tens of millions of kelvins, thermonuclear fusion begins, in which hydrogen is converted into helium.</p>`,
        `<p><strong>Why does a star not collapse?</strong> Gravity tries to compress the star inwards, while the pressure of the hot gas and radiation acts in the opposite direction. When these two effects are in balance, we speak of <em>hydrostatic equilibrium</em>. The star is stable as long as this balance lasts.</p>`,
        `<p><strong>Luminosity</strong> $L$ is the total power radiated by the star. According to the Stefan–Boltzmann law $L=4\\pi R^2\\sigma T^4$, where $R$ is the radius and $T$ the surface temperature. Luminosity grows with the square of the radius but with the fourth power of the temperature, so a small change in temperature changes the brightness markedly.</p>`,
        `<p>Stars are arranged in the <strong>Hertzsprung–Russell diagram</strong>: the temperature (or colour) is on the horizontal axis and the luminosity on the vertical axis. Most stars, including the Sun, lie in the main sequence, where a star burns hydrogen in its core.</p>`,
        { fig: 'v9v12-hr', caption: 'Hertzsprung–Russell diagram: main-sequence stars burn hydrogen, giants are brighter, and white dwarfs are fainter at high temperature.' }
      ],
      examples: [
        { task: 'A star has three times the radius of the Sun and twice its surface temperature. How many times more luminous is it?',
          steps: [
            'Ratio of luminosities: $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.',
            '$=3^2\\cdot 2^4=9\\cdot 16=144$.',
            '<strong>Result: 144 times</strong>'
          ] }
      ]
    },
    'v10-galaxie': {
      title: 'Galaxies and their evolution',
      summary: 'The main types of galaxies and how they differ in their stars, gas and shape.',
      theory: [
        `<p>A galaxy is a gravitationally bound system of stars, gas, dust and dark matter. Galaxies are divided mainly by shape: <strong>elliptical</strong> (smooth, consisting of old stars), <strong>spiral</strong> (a flat disc with arms) and <strong>irregular</strong>.</p>`,
        `<p>The shape of a galaxy is closely related to how much gas remains in it. Gas is the raw material for new stars: in the spiral arms young blue stars are constantly being born, while in elliptical galaxies the gas is almost used up and star formation has faded.</p>`,
        `<p>Galaxies grow by gradually clumping matter together, and they often grow through <strong>collisions and mergers</strong> with other galaxies. Gravitational interaction can reshape both galaxies and trigger a new wave of star formation.</p>`
      ],
      examples: [
        { task: 'A galaxy has a smooth elliptical shape and almost no gas. Which stars dominate in it?',
          steps: ['Star formation in a galaxy depends on the supply of gas.', 'Without gas no new stars are born, so old, reddish stars remain.', '<strong>Result: old stars</strong>'] }
      ]
    },
    'v10-cierne-diery': {
      title: 'Black holes and neutron stars',
      summary: 'What determines the radius of a black hole, and why a neutron star or a black hole forms after the fuel is exhausted.',
      theory: [
        `<p>When a star of sufficient mass exhausts its nuclear fuel, its core collapses. If the remaining mass does not exceed approximately 1.4 solar masses, a <strong>neutron star</strong> forms: a dense sphere with a radius of about 10 km, held up by neutron pressure.</p>`,
        `<p>A <strong>black hole</strong> forms if the mass is larger. Gravity near it is so strong that not even light can escape beyond the boundary called the <em>event horizon</em>. The radius of this boundary is the Schwarzschild radius.</p>`,
        `<p>The Schwarzschild radius is $r_s=\\frac{2GM}{c^2}$, where $G$ is the gravitational constant, $M$ the mass and $c$ the speed of light. For the mass of the Sun it is approximately $2{,}95\\,\\text{km}$. The radius is proportional to the mass, so a black hole twice as heavy has a twice as large horizon.</p>`,
        { fig: 'v9v12-cierna-diera', caption: 'The Schwarzschild radius is proportional to the mass. A black hole twice as heavy has a twice as large horizon.' }
      ],
      examples: [
        { task: 'What is the Schwarzschild radius of a black hole with mass $5\\,M_\\odot$?',
          steps: ['$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.', '$r_s\\approx 14{,}75\\,\\text{km}$.', '<strong>Result: approximately 14.75 km</strong>'] }
      ]
    },
    'v10-exoplanety': {
      title: 'Exoplanets and planetary systems',
      summary: 'How astronomers find planets around other stars and what they learn from the observations.',
      theory: [
        `<p>An <strong>exoplanet</strong> is a planet orbiting a star other than the Sun. It is seen directly only rarely, so it is searched for indirectly, most often by the transit method or by measuring the motion of the star.</p>`,
        `<p><strong>Transit method:</strong> when a planet passes in front of its star, the brightness of the star drops briefly. The drop is proportional to the area the planet covers: $\\Delta\\text{jas}=\\left(\\frac{r_p}{R}\\right)^2$. Note that it is the square of the ratio of the radii.</p>`,
        `<p><strong>Doppler method:</strong> the planet gravitationally pulls the star, and the star moves slightly back and forth as seen by the observer. The shift of the spectral lines reveals this motion even when the planet cannot be seen.</p>`,
        { fig: 'v9v12-tranzit', caption: 'During a planetary transit the brightness of the star briefly drops by the ratio of the areas, that is by (r_p/R)².' }
      ],
      examples: [
        { task: `A planet has a radius one tenth of the radius of its star. By what percentage does the brightness of the star drop during a transit?`,
          steps: ['$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.', 'The brightness drops by $1\\,\\%$.', '<strong>Result: 1%</strong>'] }
      ]
    },
    'v10-rozpinanie': {
      title: 'Expansion of the universe',
      summary: `Hubble's law: the farther a galaxy lies, the faster it recedes from us.`,
      theory: [
        `<p>Edwin Hubble found that the spectra of distant galaxies are shifted towards red. This <em>redshift</em> means that the galaxies are receding from us. The farther the galaxy, the larger its shift.</p>`,
        `<p><strong>Hubble's law:</strong> $v=H_0\\,d$, where $v$ is the recession velocity, $d$ the distance and $H_0$ the Hubble constant. Its value is approximately $70\\,\\text{km/s/Mpc}$, where $1\\,\\text{Mpc}\\approx 3{,}26$ million light-years.</p>`,
        `<p>It is important to understand that <strong>the galaxies do not move through space</strong>; it is the space between them that expands. Therefore more distant galaxies recede faster, even if they have no velocity of their own.</p>`,
        { fig: 'v9v12-hubble', caption: "Hubble's law: the recession velocity of galaxies is proportional to their distance." }
      ],
      examples: [
        { task: 'A galaxy is $100\\,\\text{Mpc}$ away. What is its recession velocity?',
          steps: ['$v=H_0\\,d=70\\cdot 100$.', '<strong>Result: 7000 km/s</strong>'] }
      ]
    },
    'v10-velky-tresk': {
      title: 'The Big Bang and the cosmic microwave background',
      summary: 'How the universe emerged from a hot phase, and why we observe a faint radiation coming from all directions today.',
      theory: [
        `<p>According to the <strong>Big Bang</strong> model, the universe was once very dense and hot. Since then it has been expanding and cooling. It was not an explosion in empty space, but the expansion of space itself.</p>`,
        `<p>Shortly after the beginning the universe was filled with radiation, and it became transparent when atoms formed. This radiation has since only been stretched, and today we see it as the <strong>cosmic microwave background</strong> with a temperature of approximately $2{,}725\\,\\text{K}$.</p>`,
        `<p>Expansion increases the wavelengths of radiation in the same ratio as the scale of the universe. Therefore the temperature of the radiation in the past was proportional to $(1+z)$, where $z$ is the redshift. At $z=1$ the temperature was twice today's value.</p>`,
        { fig: 'v9v12-natiahnutie', caption: "The expansion of the universe stretches the wavelength of radiation, so today's microwave background has a lower temperature." }
      ],
      examples: [
        { task: 'What was the temperature of the radiation at redshift $z=3$?',
          steps: ['$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.', '$=10{,}9\\,\\text{K}$.', '<strong>Result: approximately 10.9 K</strong>'] }
      ]
    },
    'v10-temna-hmota': {
      title: 'Dark matter and dark energy',
      summary: 'The evidence for invisible matter and energy and their share of the total density of the universe.',
      theory: [
        `<p><strong>Dark matter</strong> is connected with gravity but neither emits nor absorbs light. The evidence for it is the speed of stars at the edges of galaxies, which without it would be too large for the galaxy to stay together.</p>`,
        `<p><strong>Dark energy</strong> is the component that accelerates the expansion of the universe. Observations of distant supernovae showed that the expansion is currently speeding up.</p>`,
        `<p>The shares of the present universe are approximately: ordinary matter $\\approx 5\\,\\%$, dark matter $\\approx 27\\,\\%$ and dark energy $\\approx 68\\,\\%$. If the universe is flat, the total density is $\\Omega=1$ and $\\Omega_\\Lambda=1-\\Omega_m$ holds.</p>`,
        { fig: 'v9v12-zlozenie', caption: 'Shares of the present universe: ordinary matter about 5 %, dark matter 27 %, dark energy 68 %.' }
      ],
      examples: [
        { task: 'The matter density is $\\Omega_m=0{,}3$. What share does dark energy make up in a flat universe?',
          steps: ['$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.', '<strong>Result: 0.7</strong>'] }
      ]
    },
    'v10-kozmologicke-modely': {
      title: 'Cosmological models of the universe',
      summary: 'How the total density determines whether the universe is open, flat or closed.',
      theory: [
        `<p>A cosmological model describes the geometry and the evolution of the universe. The key quantity is the ratio of the total mean density $\\rho$ to the <em>critical density</em> $\\rho_c$, denoted $\\Omega=\\rho/\\rho_c$.</p>`,
        `<ol>
        <li>$\\Omega &lt; 1$: an <strong>open</strong> universe, which expands forever.</li>
        <li>$\\Omega = 1$: a <strong>flat</strong> universe, whose space has Euclidean geometry.</li>
        <li>$\\Omega &gt; 1$: a <strong>closed</strong> universe, which has positive curvature.</li>
      </ol>`,
        `<p>Observations of the cosmic background radiation show that the present universe is very close to flat. The modern model, which includes dark energy, therefore assumes a total density close to one.</p>`
      ],
      examples: [
        { task: 'The universe has $\\Omega=0{,}4$. What is its model?',
          steps: ['We compare: $0{,}4&lt;1$.', '<strong>Result: an open universe</strong>'] }
      ]
    },
    'v11-hydrostatika': {
      title: 'Hydrostatics',
      summary: 'Pressure in a still liquid depends only on depth and density, not on the shape of the vessel.',
      theory: [
        `<p><strong>Hydrostatics</strong> studies liquids at rest. The pressure in a liquid at depth $h$ is $p=\\rho g h$, where $\\rho$ is the density of the liquid and $g$ the gravitational acceleration. This is the <em>gauge pressure</em>, that is the pressure above atmospheric pressure.</p>`,
        `<p>The pressure does not depend on the shape of the vessel. In a wide and in a narrow vessel of the same depth the pressure at the bottom is the same. This apparent paradox is explained by the fact that the weight of the liquid is carried by the walls of the vessel, not by its bottom.</p>`,
        `<p>The total (absolute) pressure is $p=p_0+\\rho g h$, where $p_0$ is the atmospheric pressure. The pressure difference in a liquid is proportional to the height difference, so the pressure increases downward.</p>`,
        `<p><strong>Pascal's law:</strong> pressure applied to an enclosed liquid is transmitted equally in all directions. It is used in hydraulic lifts, where a small force on a small piston lifts a large load on a large piston.</p>`,
        { fig: 'v9v12-nadoba', caption: 'The pressure in a liquid depends on the depth h, not on the shape of the vessel. The pressure at the bottom of both vessels is the same.' }
      ],
      examples: [
        { task: 'What is the gauge pressure of water at a depth of $4\\,\\text{m}$? The density of water is $1000\\,\\text{kg/m}^3$ and $g=9{,}81\\,\\text{m/s}^2$.',
          steps: ['$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.', '<strong>Result: 39.24 kPa</strong>'] }
      ]
    },
    'v11-tlak-vztlak': {
      title: 'Pressure and buoyancy',
      summary: `Archimedes' principle: a submerged body experiences a buoyant force equal to the weight of the displaced liquid.`,
      theory: [
        `<p>A body submerged in a liquid is made lighter by a force directed upwards. This <strong>buoyant force</strong> is given by Archimedes' principle: $F_{vz}=\\rho_k\\,g\\,V$, where $\\rho_k$ is the density of the liquid and $V$ the volume of the submerged part of the body.</p>`,
        `<p>The buoyant force does not depend on the depth or on the density of the body, only on the volume of the displaced liquid. This is called the weight of the displaced liquid.</p>`,
        `<p>Floating is decided by comparing densities. A body with a density smaller than that of the liquid floats and sinks only so far that the displaced liquid has a weight equal to that of the whole body. A body with a greater density sinks to the bottom.</p>`,
        { fig: 'obr-vztlak', caption: 'The buoyant force F_vz points upwards and the weight F_g downwards. A submerged body is made lighter by the weight of the displaced liquid.' }
      ],
      examples: [
        { task: 'A body of volume $3\\,\\text{dm}^3$ is fully submerged in water. What is the buoyant force?',
          steps: ['$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.', '$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.', '<strong>Result: 29.43 N</strong>'] }
      ]
    },
    'v11-kontinuita': {
      title: 'Equation of continuity',
      summary: 'If a liquid neither escapes nor accumulates along the flow, the product of cross-section and velocity is constant.',
      theory: [
        `<p>In a steady flow of an incompressible liquid, mass neither accumulates nor disappears. Therefore the same volume must flow through every cross-section in a unit of time: $S_1 v_1 = S_2 v_2 = \\text{const.}$</p>`,
        `<p>The quantity $Q=S\\,v$ is called the <strong>volume flow rate</strong>. Where a pipe is narrower, the water flows faster. That is why a river speeds up in a narrow section and slows down on a wide plain.</p>`,
        `<p>The equation of continuity is the law of conservation of mass for a liquid flow. It holds exactly for an incompressible liquid and approximately for gases at low velocities.</p>`,
        { fig: 'v9v12-kontinuita', caption: 'For an incompressible liquid S₁v₁ = S₂v₂ holds. Where the cross-section is smaller, the liquid flows faster.' }
      ],
      examples: [
        { task: 'A pipe narrows from a cross-section of $6\\,\\text{cm}^2$ to $2\\,\\text{cm}^2$. The water in the wider section flows at $1{,}5\\,\\text{m/s}$. What is the velocity in the narrower section?',
          steps: ['$S_1 v_1=S_2 v_2$, therefore $v_2=\\frac{6\\cdot 1{,}5}{2}$.', '<strong>Result: 4.5 m/s</strong>'] }
      ]
    },
    'v11-bernoulli': {
      title: `Bernoulli's equation`,
      summary: 'Energy in a flowing liquid is conserved: where the velocity is higher, the pressure is lower.',
      theory: [
        `<p><strong>Bernoulli's equation</strong> expresses the conservation of energy for an ideal, incompressible and frictionless liquid in a flow: $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{const.}$ The terms on the left are the pressure, the kinetic and the potential energy per unit volume.</p>`,
        `<p>For a horizontal pipe ($h$ is the same everywhere) we have $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$. If the velocity increases at one point, the pressure there decreases.</p>`,
        `<p>This phenomenon is called the <strong>Venturi effect</strong> and is used in carburettors, Venturi flow meters and vacuum pumps. It arises mainly in narrowed parts of a pipe.</p>`,
        { fig: 'v9v12-venturi', caption: 'At the narrowed point the velocity increases and the pressure drops. The levels in the manometer tubes show this.' }
      ],
      examples: [
        { task: 'Water flows through a horizontal pipe. At the narrow point the velocity is $6\\,\\text{m/s}$, at the wide point $2\\,\\text{m/s}$. What is the pressure difference $p_1-p_2$ in kPa?',
          steps: ['$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.', '$=16\\,000\\,\\text{Pa}$.', '<strong>Result: 16 kPa</strong>'] }
      ]
    },
    'v11-viskozita': {
      title: 'Viscosity and laminar flow',
      summary: `Internal friction of liquids, Stokes' law and the resistance to slow motion of a small sphere.`,
      theory: [
        `<p><strong>Viscosity</strong> (dynamic viscosity $\\eta$) is a measure of the internal friction of a liquid. Honey has a higher viscosity than water, because its layers slide against each other with more difficulty. The unit is $\\text{Pa}\\cdot\\text{s}$.</p>`,
        `<p><strong>Laminar flow</strong> is smooth: the layers of liquid slide past one another without mixing. During slow motion of a body in a liquid a resistance proportional to the velocity arises: <em>Stokes' law</em> $F=6\\pi\\eta r v$ for a sphere of radius $r$.</p>`,
        `<p>Beware of the difference between radius and diameter: the formula contains the radius $r$. If you substitute the diameter, the force comes out twice as large.</p>`,
        { fig: 'v9v12-vrstvy', caption: 'In laminar flow the layers of liquid slide past each other, and internal friction causes the resistance.' }
      ],
      examples: [
        { task: 'A sphere of radius $1\\,\\text{cm}$ moves at a velocity of $0{,}5\\,\\text{m/s}$ in a liquid with $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$. What is the resistance?',
          steps: ['$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.', '$F\\approx 0{,}188\\,\\text{N}$.', '<strong>Result: approximately 188 mN</strong>'] }
      ]
    },
    'v11-turbulencia': {
      title: 'Turbulence',
      summary: 'The Reynolds number decides whether the flow is smooth or swirling.',
      theory: [
        `<p>At higher velocities and larger diameters laminar flow breaks down into <strong>turbulent</strong> flow: eddies and mixing arise, which change randomly in time and space.</p>`,
        `<p>The type of flow is decided by the <strong>Reynolds number</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$, where $d$ is a characteristic dimension (for example the diameter of a pipe). For a pipe, approximately: $\\text{Re}&lt;2300$ laminar, $\\text{Re}&gt;4000$ turbulent, and transitional flow lies in between.</p>`,
        `<p>Turbulence increases the resistance of the flow and the mixing of substances. In practice we therefore try to keep the flow smooth, for example over aircraft wings, or conversely we induce turbulence so that fuel mixes better.</p>`,
        { fig: 'v9v12-profil', caption: 'In laminar flow the velocity across the cross-section is parabolic; in turbulent flow the profile is flatter.' }
      ],
      examples: [
        { task: `Water ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) flows through a pipe of diameter $0{,}05\\,\\text{m}$ at a velocity of $1\\,\\text{m/s}$. What is the Reynolds number?`,
          steps: ['$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.', '<strong>Result: Re = 50 000, the flow is turbulent</strong>'] }
      ]
    },
    'v11-aerodynamika': {
      title: 'Gas flow and aerodynamics',
      summary: 'Aerodynamic drag and lift: what they depend on and why they grow with the square of the velocity.',
      theory: [
        `<p>At ordinary speeds gases are almost incompressible and in many respects can be described by the same laws as liquids. Bodies moving through air are slowed down by <strong>aerodynamic drag</strong>.</p>`,
        `<p>The drag is given by $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$, where $c_w$ is the drag coefficient (the shape of the body), $\\rho$ the density of air, $S$ the frontal area and $v$ the velocity. Drag grows with the <strong>square</strong> of the velocity: twice the speed means four times the drag.</p>`,
        `<p>The wing of an aircraft or a vehicle creates <strong>lift</strong>, because the flow above it is faster and the pressure there is lower (Bernoulli). The streamlined shape is therefore designed so that the drag is as small as possible and the lift as large as possible.</p>`,
        { fig: 'v9v12-krido', caption: 'Above the wing the flow is faster and the pressure lower, below the wing the pressure is higher. The pressure difference creates lift.' }
      ],
      examples: [
        { task: 'A car has a frontal area of $2\\,\\text{m}^2$, a drag coefficient $c_w=0{,}5$ and travels at $20\\,\\text{m/s}$. What is the air drag? The density of air is $1{,}2\\,\\text{kg/m}^3$.',
          steps: ['$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.', '$=0{,}6\\cdot 400=240\\,\\text{N}$.', '<strong>Result: 240 N</strong>'] }
      ]
    },
    'v12-modelovanie': {
      title: 'Mathematical modelling of physical phenomena',
      summary: 'How to build a mathematical model from a physical argument and check whether it agrees with observation.',
      theory: [
        `<p>A <strong>model</strong> is a simplified mathematical description of a phenomenon. First we identify the quantities that influence the result, then we write down the relations between them, and finally we check whether the calculation agrees with measurement or with a reasonable expectation.</p>`,
        `<p>A typical example is <strong>radioactive decay</strong>. The number of undecayed nuclei decreases in proportion to their current number, which leads to an exponential law. With a half-life $T_{1/2}$ we have $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$.</p>`,
        `<p>The model has limitations: it assumes that the decay is random and independent of the environment. An actual measurement may therefore show small deviations, which average out for a large number of nuclei.</p>`,
        { fig: 'v9v12-rozpad', caption: 'At each half-life the number of undecayed nuclei halves; the exponential law is N = N₀(1/2)^(t/T½).' }
      ],
      examples: [
        { task: 'A sample initially contains $800$ nuclei and the half-life is $10$ years. How many nuclei remain after $30$ years?',
          steps: ['After $30$ years there have been $3$ half-lives.', '$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.', '<strong>Result: 100 nuclei</strong>'] }
      ]
    },
    'v12-diferencialne-rovnice': {
      title: 'Differential equations',
      summary: 'Equations of motion are differential equations; we solve them by integration and an initial condition.',
      theory: [
        `<p>Newton's second law $F=ma$ is a differential equation, because acceleration is the derivative of velocity: $a=\\frac{dv}{dt}$. The quantities are not expressed directly here, but through their <em>change</em> in time.</p>`,
        `<p>The <strong>solution</strong> is found by integration. From $\\frac{dv}{dt}=a$ we get $v(t)=at+C$. The constant $C$ is determined from the <em>initial condition</em>, for example $v(0)=v_0$. Therefore a differential equation is always solved together with such a condition.</p>`,
        `<p>Differential equations describe almost all dynamic phenomena: the motion of bodies, electrical circuits, the spread of heat or waves. Their solution is unique only when we know enough initial conditions.</p>`,
        { fig: 'v9v12-rovnice', caption: 'The equation dv/dt = a has infinitely many solutions v = at + C. The initial condition selects one of them.' }
      ],
      examples: [
        { task: 'Solve $\\frac{dv}{dt}=2$ with the condition $v(0)=5$. What is the velocity at time $t=4$?',
          steps: ['$v(t)=2t+C$, and from $v(0)=5$ we have $C=5$.', '$v(t)=2t+5$, therefore $v(4)=8+5$.', '<strong>Result: 13</strong>'] }
      ]
    },
    'v12-vektory': {
      title: 'Vector analysis and tensors',
      summary: 'Scalar and vector products, which describe the work of a force and the moment of a force; the tensor as a generalisation.',
      theory: [
        `<p>A <strong>vector</strong> has a magnitude and a direction; we write it by its components $\\vec a=(a_1,a_2,a_3)$. Vectors are added component by component. The magnitude is $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$.</p>`,
        `<p>The <strong>scalar product</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ is a number. It is used for the work of a force: $W=\\vec F\\cdot\\vec s$. Also $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$ holds, so it is zero for mutually perpendicular vectors.</p>`,
        `<p>The <strong>vector product</strong> $\\vec a\\times\\vec b$ is a vector perpendicular to both original vectors, for example the moment of a force $\\vec M=\\vec r\\times\\vec F$. A <strong>tensor</strong> is a generalisation: for example, the stress tensor in a solid assigns a force vector to each plane.</p>`,
        { fig: 'v9v12-moment', caption: 'The moment of force M = r × F is a vector perpendicular to both the position vector r and the force F.' }
      ],
      examples: [
        { task: 'Calculate $\\vec a\\cdot\\vec b$ for $\\vec a=(1,2,3)$ and $\\vec b=(4,-5,6)$.',
          steps: ['$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.', '$=4-10+18=12$.', '<strong>Result: 12</strong>'] }
      ]
    },
    'v12-fourier': {
      title: 'Fourier analysis',
      summary: 'A periodic signal is decomposed into sinusoidal components, and we find which frequencies it contains.',
      theory: [
        `<p>Every periodic waveform with period $T$ can be written as a sum of sines and cosines with multiples of the fundamental frequency $\\omega=\\frac{2\\pi}{T}$. This sum is a <strong>Fourier series</strong>; its terms are called harmonic components.</p>`,
        `<p>The coefficients of the expansion are found by integration: we multiply the signal by the appropriate function and integrate the result over one period. Thanks to the <em>orthogonality</em> of sines and cosines, the other terms vanish.</p>`,
        `<p>A square-wave signal with amplitude $A$ has only odd harmonics, and the amplitude of the $n$-th one is $\\frac{4A}{n\\pi}$. The Fourier expansion shows which frequencies must be transmitted so that the signal is not distorted, and it is the basis of spectral analysis.</p>`,
        { fig: 'v9v12-fourier', caption: 'A square-wave signal can be composed of sines. The first harmonic has amplitude 4A/π.' }
      ],
      examples: [
        { task: 'What is the amplitude of the first harmonic of a square-wave signal with amplitude $A=3$?',
          steps: ['For the first harmonic $n=1$ and the formula $\\frac{4A}{n\\pi}$.', '$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.', '<strong>Result: approximately 3.82</strong>'] }
      ]
    },
    'v12-numericke-metody': {
      title: 'Numerical solution of physical problems',
      summary: `When an equation cannot be solved with a formula, we solve it in small steps, for example by Euler's method.`,
      theory: [
        `<p>Many differential equations have no solution in the form of a formula. In such cases we solve them <strong>numerically</strong>: the time is divided into steps of length $h$, and in each step we estimate the change of the quantity.</p>`,
        `<p><strong>Euler's method</strong> for the equation $\\frac{dy}{dt}=f(t,y)$ computes $y_{n+1}=y_n+h\\,f(t_n,y_n)$. It is simple, but the error decreases only linearly with the step, so in practice more accurate methods are used, for example Runge–Kutta.</p>`,
        `<p>Choosing the step is a compromise: a small step gives a more accurate result but requires more calculation. Too large a step may cause instability, where the deviations grow and the solution becomes meaningless.</p>`,
        { fig: 'v9v12-euler', caption: "Euler's method with step h = 0.5 approximates the equation dy/dt = y by a polyline that lies below the exact curve." }
      ],
      examples: [
        { task: `Solve $\\frac{dy}{dt}=-y$ with $y(0)=10$ by Euler's method using the step $h=0{,}1$. What is the value of $y_1$?`,
          steps: ['$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.', '$=10-1=9$.', '<strong>Result: 9</strong>'] }
      ]
    },
    'v12-pocitacove-simulacie': {
      title: 'Computer simulations',
      summary: 'A simulation proceeds in steps; the step length and the total time determine the number of calculations.',
      theory: [
        `<p>A <strong>computer simulation</strong> repeatedly applies the law of motion over small time steps. At the start we have the state of the system (positions, velocities), and in each step a new state is calculated.</p>`,
        `<p>The number of steps for a time $t$ and a step $h$ is $N=\\frac{t}{h}$. If we halve the step, the calculation takes twice as long, but the accuracy increases. This cannot be chosen freely by hand; on a computer it is a key decision.</p>`,
        `<p>Simulations are used wherever there is no solution in the form of a formula: the motion of planets in a three-body system, the air flow around a wing, or the spread of heat in a material.</p>`
      ],
      examples: [
        { task: 'A simulation of a fall is to last $10\\,\\text{s}$ and the step is $0{,}05\\,\\text{s}$. How many steps are needed?',
          steps: ['$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.', '<strong>Result: 200 steps</strong>'] }
      ]
    },
    'v12-konecne-prvky': {
      title: 'The finite element method',
      summary: 'A complex body is divided into simple elements, and their properties are assembled into one system of equations.',
      theory: [
        `<p>The <strong>finite element method (FEM)</strong> divides a complex structure into many simple parts (elements), for example triangles. For each element we write a simple equation that relates the forces and displacements of its nodes.</p>`,
        `<p>The elements are then joined into a <strong>global system of equations</strong>, which is solved by a computer. For springs or rods: in a <em>series</em> connection the compliances add, so $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$. In a <em>parallel</em> connection the stiffnesses add: $k=k_1+k_2$.</p>`,
        `<p>FEM is used in strength analysis, fluid flow and heat conduction. The result is approximate; its accuracy grows with the number and fineness of the elements.</p>`,
        { fig: 'v9v12-pruziny', caption: 'Springs connected in series have a smaller stiffness; springs connected in parallel have stiffnesses that add.' }
      ],
      examples: [
        { task: 'Two springs with stiffnesses $k_1=6\\,\\text{N/m}$ and $k_2=3\\,\\text{N/m}$ are connected in series. What is the equivalent stiffness?',
          steps: ['$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.', '$k=2\\,\\text{N/m}$.', '<strong>Result: 2 N/m</strong>'] }
      ]
    },
    'v12-komplexne-systemy': {
      title: 'Modelling complex systems',
      summary: 'Many simple particles with mutual couplings lead to complex behaviour, and the number of couplings grows quickly.',
      theory: [
        `<p>A <strong>complex system</strong> consists of many parts that interact with each other. The behaviour of the whole often does not follow from the sum of the properties of the individual parts, but from their mutual couplings. We speak of <em>emergent</em> behaviour.</p>`,
        `<p>The number of mutual couplings grows quickly. For $N$ particles, where each acts on every other one once, $\\binom{N}{2}=\\frac{N(N-1)}{2}$ pairs arise. For $N=100$ this is already $4950$ couplings.</p>`,
        `<p>For modelling, for example, <strong>agent-based models</strong> are used (each particle follows simple rules), or <strong>Monte Carlo</strong> simulations, which randomly sample the possible states. The result is always an estimate that must be verified.</p>`
      ],
      examples: [
        { task: 'There are $5$ particles in the system, and each acts on every other one once. How many different pairs arise?',
          steps: ['$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.', '<strong>Result: 10 pairs</strong>'] }
      ]
    }
  }
});
