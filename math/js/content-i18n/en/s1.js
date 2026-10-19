/* English: secondary school year 1 (js/rocniky/s1.js and the s1 lessons in content.js). Structure and keys: js/content-i18n.js.
   The interval notation of the app (⟨a; b⟩, (a; b)) is kept, because the exercise generators build it in KaTeX. */
CONTENT_I18N.add('en', {
  lessons: {
    'mnoziny': {
      title: 'Sets and set operations',
      summary: 'Elements, union, intersection, difference and the number of elements.',
      theory: [
        `<p>A set is a collection of distinct elements. The notation $a\\in A$ means that the element $a$ belongs to the set $A$. The empty set is $\\varnothing$.</p>`,
        `<p>Operations: the <strong>union</strong> $A\\cup B$ (elements of at least one of the sets), the <strong>intersection</strong> $A\\cap B$ (elements of both sets), the <strong>difference</strong> $A\\setminus B$ (elements of $A$ that are not in $B$).</p>`,
        { fig: 'venn', caption: 'Venn diagram for $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5\\}$. The intersection lies where the circles overlap.' },
        `<p>The number of elements is written $|A|$. It holds that $|A\\cup B| = |A|+|B|-|A\\cap B|$: the elements of the intersection were counted twice, so we subtract them.</p>`
      ],
      examples: [
        { task: 'Let $A=\\{1,2,3,4\\}$ and $B=\\{3,4,5\\}$. Find $A\\cup B$, $A\\cap B$ and $A\\setminus B$.',
          steps: ['$A\\cup B=\\{1,2,3,4,5\\}$',
                  '$A\\cap B=\\{3,4\\}$',
                  '$A\\setminus B=\\{1,2\\}$'] }
      ]
    },
    's1-obory': {
      title: 'Number sets and intervals',
      summary: 'The numbers N, Z, Q, R, repeating decimals, intervals and operations with them.',
      theory: [
        `<p>The number sets fit inside each other: $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$.
         The <strong>natural</strong> numbers are $\\mathbb{N}=\\{1, 2, 3, \\dots\\}$ (with zero added we write $\\mathbb{N}_0$), the <strong>integers</strong> $\\mathbb{Z}$ also contain zero and the negative numbers,
         the <strong>rational</strong> numbers $\\mathbb{Q}$ are all quotients $\\frac{p}{q}$ with $p\\in\\mathbb{Z}$ and $q\\in\\mathbb{N}$.
         Real numbers that are not rational are called <strong>irrational</strong> (e.g. $\\sqrt2$, $\\pi$).</p>`,
        { fig: 's1-obory', caption: 'Each set is part of the next one. Irrational numbers lie in $\\mathbb{R}$ outside $\\mathbb{Q}$.' },
        `<p>Rational numbers have a <strong>terminating or repeating</strong> decimal expansion and vice versa, e.g. $\\frac{3}{8}=0.375$ and $\\frac{4}{11}=0.\\overline{36}$.
         Irrational numbers have an infinite, non-repeating expansion. We prove that $\\sqrt2\\notin\\mathbb{Q}$ <strong>by contradiction</strong>: if $\\sqrt2=\\frac{p}{q}$ in lowest terms,
         then $p^2=2q^2$, so $p$ is even, $p=2k$. Substituting gives $4k^2=2q^2$, i.e. $q^2=2k^2$, and $q$ is even too. So the fraction can be reduced by two, which is a contradiction.</p>`,
        `<p><strong>Intervals</strong> are subsets of $\\mathbb{R}$ given by their endpoints. An angle bracket means the endpoint belongs to the interval, a round bracket means it does not:</p>
         <table class="tbl tbl-auto">
           <tr><td>$\\langle a; b\\rangle$</td><td>$a\\le x\\le b$</td><td>closed</td></tr>
           <tr><td>$(a; b)$</td><td>$a&lt;x&lt;b$</td><td>open</td></tr>
           <tr><td>$\\langle a; b)$, $(a; b\\rangle$</td><td>$a\\le x&lt;b$, $a&lt;x\\le b$</td><td>half-open</td></tr>
           <tr><td>$(-\\infty; b\\rangle$, $(a; \\infty)$</td><td>$x\\le b$, $x&gt;a$</td><td>unbounded</td></tr>
         </table>
         <p>At $-\\infty$ and $\\infty$ we always write a round bracket, infinity is not a number. The intersection, union and difference of intervals are easiest to read from a picture on the number line.</p>`,
        { fig: 's1-intervaly', caption: 'For $A=\\langle -2; 3)$ and $B=(1; \\infty)$ we get $A\\cap B=(1; 3)$, $A\\cup B=\\langle -2; \\infty)$ and $A\\setminus B=\\langle -2; 1\\rangle$. Filled circle: the point belongs to the interval, empty circle: it does not.' }
      ],
      examples: [
        { task: 'Write the number $0.\\overline{36}$ as a fraction in lowest terms.',
          steps: ['Let $x=0.\\overline{36}$. The repeating block has two digits, so we multiply by 100: $100x=36.\\overline{36}$.',
                  'Subtract: $100x-x=36$, so $99x=36$.',
                  '$x=\\frac{36}{99}=\\frac{4}{11}$.',
                  '<strong>Result: $\\frac{4}{11}$</strong>'] },
        { task: 'Let $A=\\langle -2; 3)$ and $B=(1; \\infty)$. Find $A\\cap B$, $A\\cup B$ and $A\\setminus B$.',
          steps: ['Mark both intervals on the number line (see the picture).',
                  'The common part goes from 1 (not in $B$) to 3 (not in $A$): $A\\cap B=(1; 3)$.',
                  'Together they cover everything from $-2$ to the right: $A\\cup B=\\langle -2; \\infty)$.',
                  'From $A$ we remove the numbers greater than 1; the point 1 is not in $B$, so it stays in the difference: $A\\setminus B=\\langle -2; 1\\rangle$.'] }
      ]
    },
    's1-absolutna': {
      title: 'Absolute value',
      summary: 'Absolute value as distance, equations and inequalities with absolute value.',
      theory: [
        `<p>The <strong>absolute value</strong> of a real number: $|a|=a$ for $a\\ge 0$ and $|a|=-a$ for $a&lt;0$. For example $|7|=7$, $|-7|=7$, $|0|=0$.
         Always $|a|\\ge 0$, $|a\\cdot b|=|a|\\cdot|b|$, and the <strong>triangle inequality</strong> $|a+b|\\le|a|+|b|$ holds.</p>`,
        `<p>Geometrically, $|a|$ is the distance of the number $a$ from zero, and $|x-a|$ is the <strong>distance between the numbers $x$ and $a$</strong> on the number line. Therefore:</p>
         <ul><li>$|x-a|=r$ (for $r&gt;0$) has two solutions $x=a-r$ and $x=a+r$; for $r=0$ one ($x=a$), for $r&lt;0$ none,</li>
         <li>$|x-a|\\le r$ exactly when $x\\in\\langle a-r; a+r\\rangle$,</li>
         <li>$|x-a|&gt;r$ exactly when $x\\in(-\\infty; a-r)\\cup(a+r; \\infty)$.</li></ul>`,
        { fig: 's1-vzdialenost', caption: 'The points at distance $r$ from the number $a$ solve the equation $|x-a|=r$, the whole segment between them solves the inequality $|x-a|\\le r$. Change $a$ and $r$.' },
        `<p>We read $|x+3|$ as $|x-(-3)|$, i.e. the distance from $-3$. If the absolute value contains $|px+q|$, we first take out $|p|$: $|2x-6|=2\\,|x-3|$.</p>`
      ],
      examples: [
        { task: 'Solve the equation $|2x-3|=7$.',
          steps: ['The expression inside the absolute value equals $7$ or $-7$.',
                  '$2x-3=7$ gives $x=5$; $2x-3=-7$ gives $x=-2$.',
                  '<strong>Solutions: $x_1=-2$, $x_2=5$</strong>'] },
        { task: 'Solve the inequality $|x+1|\\le 4$.',
          steps: ['$|x+1|=|x-(-1)|$ is the distance of $x$ from $-1$.',
                  'The numbers at distance at most 4 go from $-1-4=-5$ to $-1+4=3$ inclusive.',
                  '<strong>$x\\in\\langle -5; 3\\rangle$</strong>'] }
      ]
    },
    's1-delitelnost': {
      title: 'Divisibility, primes, GCD and LCM',
      summary: 'Divisibility rules with proof, prime factorisation, GCD, LCM and fractions.',
      theory: [
        `<p>A number $a\\in\\mathbb{N}$ <strong>divides</strong> a number $b$ (we write $a\\mid b$) if there is $k\\in\\mathbb{Z}$ such that $b=k\\cdot a$.
         A <strong>prime</strong> has exactly two divisors: 1 and itself ($2, 3, 5, 7, 11, \\dots$). The number 1 is neither prime nor composite.
         <strong>Fundamental theorem of arithmetic:</strong> every natural number greater than 1 can be written as a product of primes in exactly one way (up to order).</p>`,
        { fig: 's1-strom', caption: 'Factorising 360: we keep splitting off the smallest prime that divides the number. The prime factors are circled.' },
        `<p><strong>Divisibility rules:</strong> by 2, 5, 10 from the last digit; by 4 from the last two digits; by 8 from the last three digits;
         by 3 and 9 from the digit sum; by 11 from the alternating digit sum. <em>Why does the rule for 3 and 9 work?</em> For a three-digit number
         $\\overline{abc}=100a+10b+c=(99a+9b)+(a+b+c)$. The first bracket is divisible by nine, so the number is divisible by 9 (or 3) exactly when its digit sum $a+b+c$ is.
         Similarly $100a+10b+c=(99a+11b)+(a-b+c)$ justifies the rule for 11.</p>`,
        `<p>The <strong>GCD</strong> (greatest common divisor) is the product of the common prime factors with the <em>smaller</em> exponents,
         the <strong>LCM</strong> (least common multiple) is the product of all prime factors with the <em>larger</em> exponents. It holds that $\\mathrm{gcd}(a, b)\\cdot\\mathrm{lcm}(a, b)=a\\cdot b$.
         If $\\mathrm{gcd}(a, b)=1$, the numbers are <strong>coprime</strong>. We use the GCD to reduce fractions to lowest terms and the LCM as a common denominator.
         The number $p_1^{e_1}\\cdots p_k^{e_k}$ has $(e_1+1)\\cdots(e_k+1)$ divisors.</p>`
      ],
      examples: [
        { task: 'Factorise 360 into primes and find the number of its divisors.',
          steps: ['$360=2\\cdot 180=2^2\\cdot 90=2^3\\cdot 45=2^3\\cdot 3^2\\cdot 5$.',
                  'A divisor has the form $2^i\\cdot 3^j\\cdot 5^k$ with $i\\in\\{0,1,2,3\\}$, $j\\in\\{0,1,2\\}$, $k\\in\\{0,1\\}$.',
                  '<strong>Number of divisors: $4\\cdot 3\\cdot 2=24$</strong>'] },
        { task: 'Find $\\mathrm{gcd}(84, 90)$ and $\\mathrm{lcm}(84, 90)$.',
          steps: ['$84=2^2\\cdot 3\\cdot 7$, $90=2\\cdot 3^2\\cdot 5$.',
                  'Common prime factors with the smaller exponents: $\\mathrm{gcd}=2\\cdot 3=6$.',
                  'All prime factors with the larger exponents: $\\mathrm{lcm}=2^2\\cdot 3^2\\cdot 5\\cdot 7=1260$.',
                  'Check: $6\\cdot 1260=7560=84\\cdot 90$ ✓'] }
      ]
    },
    'mocniny': {
      title: 'Powers and roots',
      summary: 'Rules for calculating with powers and roots.',
      theory: [
        `<p>For $a&gt;0$ and integers $m,n$: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>`,
        `<p>Negative exponent: $a^{-n}=\\frac{1}{a^n}$. Zero exponent: $a^0=1$ for $a\\neq 0$.</p>`,
        `<p>A root is the inverse operation of a power: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. It holds that $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.</p>`
      ],
      examples: [
        { task: 'Simplify $\\frac{2^5\\cdot 2^{-2}}{2}$.',
          steps: ['Numerator: $2^5\\cdot 2^{-2}=2^{3}$.',
                  '$\\frac{2^3}{2}=2^{2}$.',
                  '<strong>Result: $4$</strong>'] }
      ]
    },
    's1-vyrazy': {
      title: 'Simplifying algebraic expressions',
      summary: 'Formulas for squares and cubes, rational expressions and when they are defined.',
      theory: [
        `<p>An <strong>algebraic expression</strong> contains numbers, variables, operations and brackets. An expression makes sense only for values of the variables for which we do not divide by zero
         (or take the square root of a negative number) – we always write these <strong>conditions</strong> when simplifying the expression. Expanding removes brackets,
         factoring out creates them: $6x^2-9x=3x(2x-3)$.</p>`,
        `<p><strong>Formulas</strong> (valid for all real $a$, $b$):</p>
         <ul><li>$(a\\pm b)^2=a^2\\pm 2ab+b^2$, $\\quad a^2-b^2=(a-b)(a+b)$,</li>
         <li>$(a\\pm b)^3=a^3\\pm 3a^2b+3ab^2\\pm b^3$,</li>
         <li>$a^3+b^3=(a+b)(a^2-ab+b^2)$, $\\quad a^3-b^3=(a-b)(a^2+ab+b^2)$.</li></ul>`,
        { fig: 's1-stvorec', caption: 'A square with side $a+b$ consists of the squares $a^2$, $b^2$ and two rectangles $ab$, hence $(a+b)^2=a^2+2ab+b^2$.' },
        `<p><strong>Rational expressions</strong> can be cancelled only by a <em>factor</em>: we first factorise the numerator and the denominator and cancel the common factor.
         E.g. $\\frac{x^2-9}{x^2+3x}=\\frac{(x-3)(x+3)}{x(x+3)}=\\frac{x-3}{x}$ for $x\\neq 0$, $x\\neq -3$. The conditions come from the <em>original</em> expression.
         We add and subtract via a common denominator, as with fractions.</p>`
      ],
      examples: [
        { task: 'Simplify the expression $(2x-3)^2-(x+1)(x-1)$.',
          steps: ['$(2x-3)^2=4x^2-12x+9$ and $(x+1)(x-1)=x^2-1$.',
                  '$4x^2-12x+9-(x^2-1)=4x^2-12x+9-x^2+1$.',
                  '<strong>$3x^2-12x+10$</strong>'] },
        { task: 'Simplify $\\frac{x^2-4}{x^2-2x}$ and state the conditions.',
          steps: ['Denominator: $x^2-2x=x(x-2)\\neq 0$, so $x\\neq 0$ and $x\\neq 2$.',
                  'Numerator: $x^2-4=(x-2)(x+2)$.',
                  '$\\frac{(x-2)(x+2)}{x(x-2)}=\\frac{x+2}{x}$.',
                  '<strong>$\\frac{x+2}{x}$ for $x\\neq 0$, $x\\neq 2$</strong>'] }
      ]
    },
    's1-mnohoclen': {
      title: 'Polynomials and factorisation',
      summary: 'Degree of a polynomial, factoring out, grouping, factorising a trinomial and the remainder theorem.',
      theory: [
        `<p>A <strong>polynomial</strong> of degree $n$ in the variable $x$ is an expression $a_nx^n+a_{n-1}x^{n-1}+\\dots+a_1x+a_0$ with $a_n\\neq 0$.
         When adding we combine terms with the same power, when multiplying we multiply every term by every term; the degree of a product is the sum of the degrees.
         A number $c$ is a <strong>root</strong> of the polynomial $p$ if $p(c)=0$.</p>`,
        `<p>We <strong>factorise</strong> in these steps:</p>
         <ol><li><em>factoring out:</em> $4x^3-6x^2=2x^2(2x-3)$,</li>
         <li><em>formulas:</em> $9x^2-25=(3x-5)(3x+5)$, $\\ x^3-8=(x-2)(x^2+2x+4)$,</li>
         <li><em>grouping:</em> $x^3+2x^2-9x-18=x^2(x+2)-9(x+2)=(x+2)(x-3)(x+3)$,</li>
         <li><em>quadratic trinomial:</em> $x^2+px+q=(x-x_1)(x-x_2)$, where $x_1+x_2=-p$ and $x_1x_2=q$.</li></ol>`,
        `<p><strong>Remainder theorem:</strong> the remainder when the polynomial $p(x)$ is divided by $(x-c)$ is $p(c)$. If $p(c)=0$, then $p(x)=(x-c)\\cdot q(x)$ – a root gives us a factor.
         We compute $p(c)$ quickly with <strong>Horner's scheme</strong>: start with the leading coefficient, then repeatedly multiply by $c$ and add the next coefficient.</p>`
      ],
      examples: [
        { task: 'Factorise $x^3-4x^2-9x+36$.',
          steps: ['Group: $x^2(x-4)-9(x-4)$.',
                  'Factor out $(x-4)$: $(x-4)(x^2-9)$.',
                  '<strong>$(x-4)(x-3)(x+3)$</strong>, the roots are $4$, $3$, $-3$.'] },
        { task: 'Factorise $2x^2-8x-10$.',
          steps: ['Factor out 2: $2(x^2-4x-5)$.',
                  'We look for numbers with sum $4$ and product $-5$: they are $5$ and $-1$.',
                  '<strong>$2(x-5)(x+1)$</strong>'] }
      ]
    },
    'linearne': {
      title: 'Linear equations',
      summary: 'Equivalent transformations and first-degree equations.',
      theory: [
        `<p>We solve equations with <strong>equivalent transformations</strong>: we add the same number to both sides or subtract it from both sides, and we multiply or divide both sides by a non-zero number.</p>`,
        `<p>We solve the equation $ax+b=c$ with $a\\neq 0$ like this: $ax=c-b$, so $x=\\frac{c-b}{a}$.</p>`,
        `<p>We check the result by substituting it into the original equation.</p>`
      ],
      examples: [
        { task: 'Solve $3x+5=20$.',
          steps: ['Subtract $5$: $3x=15$.',
                  'Divide by $3$: $x=5$.',
                  'Check: $3\\cdot 5+5=20$ ✓'] }
      ]
    },
    's1-menovatel': {
      title: 'Equations with the unknown in the denominator',
      summary: 'Conditions, multiplying by the common denominator and checking the roots.',
      theory: [
        `<p>If the unknown is in a denominator, the equation makes sense only for those $x$ for which all denominators are non-zero. We state these <strong>conditions</strong> at the start,
         e.g. for $\\frac{3}{x-2}=\\frac{1}{x+1}$ we need $x\\neq 2$ and $x\\neq -1$.</p>`,
        `<p>Then we multiply the equation by the <strong>common denominator</strong> (preferably the least one). This step is equivalent only where the denominator is non-zero –
         so a “root” may appear that does not satisfy the conditions. Such a root <strong>is not a solution</strong>, and if there is no other, the equation has no solution.</p>`,
        `<p>Procedure: 1. conditions, 2. multiplying by the common denominator, 3. solving the resulting equation, 4. comparing with the conditions (or checking by substitution).
         Denominators like $x^2-9$ are factorised first: $x^2-9=(x-3)(x+3)$ – the common denominator is then obvious.</p>`
      ],
      examples: [
        { task: 'Solve the equation $\\frac{x+3}{x-1}=2$.',
          steps: ['Condition: $x\\neq 1$.',
                  'Multiply by $(x-1)$: $x+3=2x-2$.',
                  '$x=5$, it satisfies the condition.',
                  'Check: $\\frac{8}{4}=2$ ✓ <strong>$x=5$</strong>'] },
        { task: 'Solve the equation $\\frac{1}{x-2}+\\frac{2}{x+2}=\\frac{4}{x^2-4}$.',
          steps: ['$x^2-4=(x-2)(x+2)$, conditions $x\\neq 2$, $x\\neq -2$.',
                  'Multiply by $(x-2)(x+2)$: $(x+2)+2(x-2)=4$.',
                  '$3x-2=4$, so $x=2$.',
                  'The number 2 does not satisfy the condition, so <strong>the equation has no solution</strong>.'] }
      ]
    },
    's1-nerovnice': {
      title: 'Linear inequalities, product and quotient form',
      summary: 'Equivalent transformations of inequalities, zero points and the sign table.',
      theory: [
        `<p>We solve inequalities much like equations, with one difference: when <strong>multiplying or dividing by a negative number, the inequality sign reverses</strong>.
         For example $-3x+2&lt;8 \\Leftrightarrow -3x&lt;6 \\Leftrightarrow x&gt;-2$, so $x\\in(-2; \\infty)$. The solution of a system of inequalities is the <em>intersection</em> of the solutions of the individual inequalities.</p>`,
        `<p><strong>Product form</strong>, e.g. $(x+2)(x-3)\\le 0$: a product is negative when its factors have opposite signs. We find the <strong>zero points</strong> of the factors ($-2$ and $3$),
         which split the number line into intervals. On each of them every factor keeps its sign, so it is enough to substitute one number.</p>`,
        { fig: 's1-znamienka', caption: 'Sign table for $\\frac{x+2}{x-3}$. The quotient is negative on $(-2; 3)$. The solution of $\\frac{x+2}{x-3}\\le 0$ is $\\langle -2; 3)$: the point $-2$ belongs (the quotient is 0), the point $3$ does not (division by zero).' },
        `<p>The <strong>quotient form</strong> $\\frac{x-a}{x-b}$ has the same signs as the product $(x-a)(x-b)$, but <strong>the zero point of the denominator never belongs to the solution</strong>.
         We never multiply an inequality with the unknown in the denominator by the denominator (we do not know its sign) – we rewrite it as “an expression compared with zero”.</p>`
      ],
      examples: [
        { task: 'Solve the inequality $2(x-3)-5\\ge 4x+1$.',
          steps: ['$2x-11\\ge 4x+1$.',
                  '$-2x\\ge 12$. Divide by $-2$, the sign reverses: $x\\le -6$.',
                  '<strong>$x\\in(-\\infty; -6\\rangle$</strong>'] },
        { task: 'Solve the inequality $\\frac{x+2}{3-x}\\ge 0$.',
          steps: ['Zero points: $-2$ (numerator), $3$ (denominator, $x\\neq 3$).',
                  'On $(-\\infty; -2)$: $\\frac{-}{+}&lt;0$; on $(-2; 3)$: $\\frac{+}{+}&gt;0$; on $(3; \\infty)$: $\\frac{+}{-}&lt;0$.',
                  'We add the point $-2$ (the quotient is 0), but not the point $3$.',
                  '<strong>$x\\in\\langle -2; 3)$</strong>'] }
      ]
    },
    's1-slovne': {
      title: 'Word problems solved with equations',
      summary: 'Motion, work together, mixtures and ages: from the text to an equation.',
      theory: [
        `<p>Procedure: 1. choose the unknown (what exactly it stands for and in which units), 2. express the other quantities using it, 3. set up an equation
         from the information not used yet, 4. solve it, 5. <strong>check against the text</strong>, not by substituting into the equation, 6. write the answer.</p>`,
        `<p><strong>Motion:</strong> $s=v\\cdot t$. When moving towards each other the speeds add up, when catching up they subtract. A boat goes downstream at speed $v+w$, upstream at $v-w$.<br>
         <strong>Work together:</strong> whoever does the whole job in $t_1$ hours does $\\frac{1}{t_1}$ of the job per hour; together in time $t$ we have $\\frac{t}{t_1}+\\frac{t}{t_2}=1$.</p>`,
        `<p><strong>Mixtures:</strong> the amount of pure substance is preserved when mixing: $p_1\\,m_1+p_2\\,m_2=p\\,(m_1+m_2)$, where $p$ is the concentration.<br>
         <strong>Ages:</strong> in $n$ years everybody is $n$ years older – the age difference does not change.</p>`
      ],
      examples: [
        { task: 'One pump empties a tank in 6 hours, another in 3 hours. How many hours do they need together?',
          steps: ['In one hour the first does $\\frac16$ of the job, the second $\\frac13$.',
                  'Equation: $\\frac{t}{6}+\\frac{t}{3}=1$, multiply by 6: $t+2t=6$.',
                  '<strong>$t=2$ hours</strong>'] },
        { task: 'How many litres of an 80 % solution must be added to 6 litres of a 20 % solution to get a 40 % solution?',
          steps: ['Unknown $x$ = litres of the 80 % solution.',
                  'Pure substance: $0.2\\cdot 6+0.8x=0.4(6+x)$.',
                  '$1.2+0.8x=2.4+0.4x$, so $0.4x=1.2$.',
                  '<strong>$x=3$ litres</strong>'] }
      ],
      strings: {
        // vek: rodič a dieťa, „koľkokrát starší“, roky a hodiny podľa počtu
        'Otec': 'The father', 'otec': 'the father', 'Mama': 'The mother', 'mama': 'the mother',
        'syn': 'the son', 'syna': 'the son', 'dcéra': 'the daughter', 'dcéry': 'the daughter',
        'starší': 'older', 'staršia': 'older',
        'dvakrát': 'twice', 'trikrát': 'three times', 'štyrikrát': 'four times',
        'päťkrát': 'five times', 'šesťkrát': 'six times', 'sedemkrát': 'seven times',
        'rok': 'year', 'roky': 'years', 'rokov': 'years',
        'hodinu': 'hour', 'hodiny': 'hours', 'hodín': 'hours',
        '{@0} je teraz {@1} {@2} ako {@3}. O {@4} {@5} bude {@6} {@7}. Koľko rokov má teraz {@8}?':
          (v) => `${v[0]} is now ${v[1]} as old as ${v[3]}. In ${v[4]} ${v[5]}, ${v[0].toLowerCase()} will be ${v[6]} as old. How old is ${v[8]} now?`,
        'Nech {@0} má $x$ rokov, {@1} ${@2}x$. O {@3} {@4}: ${@5}x+{@6}={@7}(x+{@8})$, teda {@9}. ({@10} má {@11} rokov, o {@12} {@13} bude mať {@14} a {@15} {@16}.)':
          'Let {@0} be $x$ years old, {@1} ${@2}x$. In {@3} {@4}: ${@5}x+{@6}={@7}(x+{@8})$, so {@9}. ({@10} is {@11} years old; in {@12} {@13} {@1} will be {@14} and {@15} {@16}.)'
      }
    },
    's1-uhly': {
      title: 'Angles, triangles and quadrilaterals',
      summary: 'Basic figures, pairs of angles at parallel lines, the angle sum of a polygon.',
      theory: [
        `<p><strong>Basic figures:</strong> point, line, ray, segment, half-plane and angle (the part of the plane bounded by two rays with a common starting point – the vertex).
         Two lines in a plane are <em>parallel</em> (no common point, or they coincide) or <em>intersecting</em> (one common point); perpendicular lines form a right angle.
         The distance of a point from a line is the length of the perpendicular from the point to the line.</p>`,
        `<p><strong>Pairs of angles:</strong> <em>vertical</em> angles are equal, <em>adjacent</em> (supplementary) angles add up to $180^\\circ$.
         If a transversal crosses two <strong>parallel lines</strong>, the <em>corresponding</em> angles (same position at both intersections)
         and the <em>alternate</em> angles (on opposite sides of the transversal, one at $p$ and the other at $q$) are equal too.</p>`,
        { fig: 's1-priecka', caption: 'The angles $\\alpha$ are vertical, corresponding and alternate to each other, so they have the same size. The angle adjacent to $\\alpha$ has size $180^\\circ-\\alpha$.' },
        `<p><strong>Triangle:</strong> the interior angles add up to $180^\\circ$ (draw the parallel to the opposite side through a vertex and use alternate angles).
         An exterior angle equals the sum of the two interior angles at the other vertices. <strong>Triangle inequality:</strong> each side is shorter than the sum of the other two.
         The larger angle lies opposite the longer side. The interior angles of an $n$-gon add up to $(n-2)\\cdot 180^\\circ$ (the diagonals from one vertex split it into $n-2$ triangles).</p>`,
        `<p><strong>Quadrilaterals:</strong> a <em>parallelogram</em> has opposite sides parallel and equal, its diagonals bisect each other and adjacent angles add up to $180^\\circ$;
         special cases are the <em>rectangle</em>, the <em>rhombus</em> (perpendicular diagonals) and the <em>square</em>. A <em>trapezium</em> has exactly one pair of parallel sides (the bases).</p>`
      ],
      examples: [
        { task: 'In the triangle $ABC$, $\\alpha=48^\\circ$ and the exterior angle at the vertex $B$ is $115^\\circ$. Find $\\beta$ and $\\gamma$.',
          steps: ['The interior and the exterior angle at $B$ are adjacent: $\\beta=180^\\circ-115^\\circ=65^\\circ$.',
                  'Exterior angle = $\\alpha+\\gamma$, so $\\gamma=115^\\circ-48^\\circ=67^\\circ$.',
                  'Check: $48^\\circ+65^\\circ+67^\\circ=180^\\circ$ ✓'] },
        { task: 'How large is an interior angle of a regular octagon?',
          steps: ['Sum of the interior angles: $(8-2)\\cdot 180^\\circ=1080^\\circ$.',
                  'All angles are equal: $1080^\\circ:8=135^\\circ$.'] }
      ]
    },
    's1-obsahy': {
      title: 'Perimeter, area and Pythagoras’ theorem',
      summary: 'Areas of polygons and parts of a circle, Pythagoras’ theorem and its converse.',
      theory: [
        `<p><strong>Areas:</strong> triangle $S=\\frac{a\\cdot v_a}{2}$, parallelogram $S=a\\cdot v_a$, trapezium $S=\\frac{(a+c)\\cdot v}{2}$,
         rhombus and kite $S=\\frac{u_1\\cdot u_2}{2}$ (the diagonals are perpendicular). For a triangle with sides $a, b, c$ we can use <em>Heron's formula</em>
         $S=\\sqrt{s(s-a)(s-b)(s-c)}$, where $s=\\frac{a+b+c}{2}$. (Heights are written $v$, diagonals $u$.)</p>`,
        `<p>A <strong>circle</strong> with radius $r$: circumference $o=2\\pi r$, area $S=\\pi r^2$. A <strong>sector</strong> with central angle $\\alpha$ is $\\frac{\\alpha}{360^\\circ}$ of the circle:
         $S=\\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$ and the arc length is $l=2\\pi r\\cdot\\frac{\\alpha}{360^\\circ}$. An <strong>annulus</strong> has area $\\pi(R^2-r^2)$.</p>`,
        `<p><strong>Pythagoras’ theorem:</strong> in a right triangle with hypotenuse $c$, $a^2+b^2=c^2$. Proof: split a square with side $a+b$ into a square with side $c$
         and four congruent right triangles: $(a+b)^2=c^2+4\\cdot\\frac{ab}{2}$, hence $a^2+b^2=c^2$. The <strong>converse</strong> holds too: if $a^2+b^2=c^2$, the triangle is right-angled.
         Useful consequences: the diagonal of a square $u=a\\sqrt2$, the height of an equilateral triangle $v=\\frac{a\\sqrt3}{2}$.</p>`,
        { fig: 's1-lichobeznik', caption: 'In an isosceles trapezium the height cuts off a right triangle with legs $x=\\frac{a-c}{2}$ and $v$ and hypotenuse $b$, so $v^2=b^2-x^2$.' }
      ],
      examples: [
        { task: 'An isosceles trapezium has bases $a=14$ cm, $c=6$ cm and legs $b=5$ cm. Find its area.',
          steps: ['$x=\\frac{14-6}{2}=4$ cm.',
                  '$v=\\sqrt{5^2-4^2}=\\sqrt{9}=3$ cm.',
                  '$S=\\frac{(14+6)\\cdot 3}{2}=30\\,\\text{cm}^2$.'] },
        { task: 'A rhombus has diagonals 10 cm and 24 cm. Find its perimeter and area.',
          steps: ['The diagonals bisect each other and are perpendicular: the halves 5 cm and 12 cm are the legs of a right triangle whose hypotenuse is the side of the rhombus.',
                  '$a=\\sqrt{25+144}=13$ cm, perimeter $o=4\\cdot 13=52$ cm.',
                  '$S=\\frac{10\\cdot 24}{2}=120\\,\\text{cm}^2$.'] }
      ]
    },
    's1-zhodnost': {
      title: 'Congruent triangles and constructions',
      summary: 'The SSS, SAS, ASA and SsA theorems, loci and the Thales circle.',
      theory: [
        `<p>Two figures are <strong>congruent</strong> if one can be moved so that it coincides with the other. For congruent triangles $\\triangle ABC\\cong\\triangle KLM$
         the order of the letters tells which vertices correspond: $A\\leftrightarrow K$, $B\\leftrightarrow L$, $C\\leftrightarrow M$; corresponding sides and angles are equal.</p>`,
        `<p><strong>Congruence theorems for triangles</strong> – two triangles are congruent if they agree in:</p>
         <ul><li><strong>SSS</strong> – all three sides,</li>
         <li><strong>SAS</strong> – two sides and the angle between them,</li>
         <li><strong>ASA</strong> – one side and the two angles adjacent to it,</li>
         <li><strong>SsA</strong> – two sides and the angle opposite the <em>longer</em> of them.</li></ul>
         <p>Agreement in three angles is not enough (the triangles are only similar), and two sides with the angle opposite the shorter side do not determine the triangle uniquely either.</p>`,
        { fig: 's1-vety', caption: 'The highlighted parts are enough to determine the triangle. In SsA the given angle $\\alpha$ is opposite the longer side $a$.' },
        `<p><strong>Loci (sets of points with a given property)</strong> are the basis of constructions: the points equidistant from $A$ and $B$ form the <em>perpendicular bisector</em> of $AB$;
         the points inside an angle equidistant from its arms form the <em>angle bisector</em>; the points at distance $r$ from $S$ form a <em>circle</em>;
         the points at distance $d$ from a line $p$ form a <em>pair of parallel lines</em>. The points $X$ from which the segment $AB$ is seen at a right angle lie on the <strong>Thales circle</strong>
         with diameter $AB$ (without the points $A$, $B$).</p>`,
        { fig: 's1-tales', caption: 'A right triangle with hypotenuse $AB$ and height $v$: the vertex $C$ lies on the Thales circle and on the line $p$ parallel to $AB$ at distance $v$. In one half-plane there are two solutions $C_1$, $C_2$ if $v$ is less than the radius.' }
      ],
      examples: [
        { task: 'Are the triangles $ABC$ with $a=5$ cm, $b=7$ cm, $\\gamma=40^\\circ$ determined uniquely?',
          steps: ['The angle $\\gamma$ is at the vertex $C$, i.e. between the sides $a=BC$ and $b=CA$.',
                  'These are two sides and the angle between them – the <strong>SAS</strong> theorem.',
                  'All such triangles are congruent.'] },
        { task: 'Construct a right triangle $ABC$ with hypotenuse $|AB|=6$ cm and height $v_c=2$ cm. How many solutions does the task have in one half-plane determined by the line $AB$?',
          steps: ['$C$ lies on the Thales circle over $AB$ with its centre at the midpoint of $AB$ and radius 3 cm.',
                  '$C$ also lies on the line parallel to $AB$ at distance 2 cm.',
                  'Since $2&lt;3$, the parallel line crosses the semicircle at two points: <strong>2 solutions</strong> (mirror images, so congruent).'] }
      ]
    },
    's1-umernost': {
      title: 'Ratio, scale and proportionality',
      summary: 'Dividing in a ratio, map scale, direct and inverse proportionality.',
      theory: [
        `<p>A <strong>ratio</strong> $a:b$ compares two quantities by division; the ratio does not change if both terms are multiplied by the same non-zero number ($12:18=2:3$).
         When <strong>dividing a whole in the ratio</strong> $a:b:c$ we split it into $a+b+c$ equal parts. We <strong>change a number $x$ in the ratio</strong> $p:q$ by multiplying it by the fraction $\\frac{p}{q}$
         (for $p&gt;q$ it is an enlargement, for $p&lt;q$ a reduction).</p>`,
        `<p>A <strong>scale</strong> $1:n$ means that 1 cm on the map corresponds to $n$ cm in reality. E.g. at the scale $1:50\\,000$, 1 cm on the map is $50\\,000$ cm $=500$ m.</p>`,
        `<p><strong>Direct proportionality</strong> $y=kx$ ($k&gt;0$): however many times $x$ increases, $y$ increases the same number of times; the quotient $\\frac{y}{x}$ is constant and the graph is part of a line through the origin.
         <strong>Inverse proportionality</strong> $y=\\frac{k}{x}$: however many times $x$ increases, $y$ decreases the same number of times; the product $x\\cdot y$ is constant and the graph is part of a hyperbola.</p>`,
        { fig: 's1-umernost', caption: 'Direct proportionality $y=kx$ and inverse proportionality $y=\\frac{k}{x}$ for $x&gt;0$. Change the coefficient $k$ and watch the points at $x=2$.' }
      ],
      examples: [
        { task: 'Divide €960 in the ratio $3:4:5$.',
          steps: ['Number of parts: $3+4+5=12$, one part is $960:12=80$ €.',
                  '<strong>$240$ €, $320$ € and $400$ €</strong>'] },
        { task: 'Six equally powerful machines dig a pit in 10 hours. How many hours do 4 machines need?',
          steps: ['Fewer machines need more time – inverse proportionality, the product is constant.',
                  '$6\\cdot 10=4\\cdot t$, so $t=15$.',
                  '<strong>15 hours.</strong>'] }
      ],
      strings: {
        // robotníci a dni podľa počtu
        'deň': 'day', 'dni': 'days', 'dní': 'days',
        'robotník': 'worker', 'robotníci': 'workers', 'robotníkov': 'workers',
        'urobí': 'do', 'urobia': 'do', 'urobili': 'do', 'urobilo': 'do',
        '{@0} rovnako výkonní robotníci {@1}': '{@0} equally productive workers {@1}',
        '{@0} rovnako výkonných robotníkov {@1}': '{@0} equally productive workers {@1}',
        '{@0} prácu za {@1} {@2}. Za koľko dní by rovnakú prácu {@3} {@4} {@5}?': '{@0} a job in {@1} {@2}. In how many days would {@4} {@5} {@3} the same job?'
      }
    },
    's1-percenta': {
      title: 'Percentages, rounding and estimation',
      summary: 'Base, percentage part, successive changes, rounding and estimating results.',
      theory: [
        `<p>One per cent is one hundredth of the whole. The <strong>base</strong> $z$ is the whole (100 %), the <strong>percentage part</strong> $\\check{c}$ corresponds to the <strong>rate</strong> $p$:
         $\\check{c}=\\frac{p}{100}\\cdot z$. Hence $z=\\frac{\\check{c}\\cdot 100}{p}$ and $p=\\frac{\\check{c}}{z}\\cdot 100$.</p>`,
        `<p>A <strong>change by $p$ %</strong> means multiplying by $1\\pm\\frac{p}{100}$. Successive changes <em>multiply, they do not add up</em>: a price rise of 20 % followed by a 20 % reduction
         gives $1.2\\cdot 0.8=0.96$, i.e. a total reduction of 4 %. We find the original price from the reduced one by dividing: if an item costs €60 after a 25 % discount, the original price is $60:0.75=80$ €.
         We distinguish a <em>per cent</em> from a <em>percentage point</em>: an interest rate rising from 2 % to 3 % rises by 1 percentage point, but by 50 %.</p>`,
        `<p><strong>Rounding:</strong> if the first dropped digit is 0 – 4, we round down, if it is 5 – 9, up ($3\\,476.52\\approx 3\\,500$ to hundreds, $\\approx 3\\,476.5$ to tenths).
         <em>Significant figures</em> are counted from the first non-zero digit: $0.004\\,718\\approx 0.0047$ to 2 significant figures.
         We <strong>estimate</strong> a result with rounded numbers to check its order of magnitude: $398\\cdot 51\\approx 400\\cdot 50=20\\,000$.</p>`
      ],
      examples: [
        { task: 'The price of an item rose by 10 % and then fell by 10 %. By what percentage did it change compared with the original price?',
          steps: ['Overall multiplier: $1.1\\cdot 0.9=0.99$.',
                  'The new price is 99 % of the original.',
                  '<strong>The price fell by 1 %.</strong>'] },
        { task: '18 % of the pupils of a school, which is 63 pupils, attend a club. How many pupils does the school have?',
          steps: ['$\\check{c}=63$, $p=18$, we are looking for the base.',
                  '1 % is $63:18=3.5$ pupils, 100 % is $350$.',
                  '<strong>The school has 350 pupils.</strong>'] }
      ],
      strings: {
        // rády pri zaokrúhľovaní: „to the nearest …“
        'tisícky': 'thousand', 'stovky': 'hundred', 'desiatky': 'ten', 'jednotky': 'whole number',
        'desatiny': 'tenth', 'stotiny': 'hundredth'
      }
    }
  },
  strings: {
    // obrázky
    'Vennov diagram dvoch množín': 'Venn diagram of two sets',
    'iracionálne čísla': 'irrational numbers',
    '−0,75': '−0.75',
    '0,(3)': '0.(3)',
    'Číselné obory N, Z, Q a R ako do seba vnorené množiny': 'The number sets N, Z, Q and R as nested sets',
    'Prienik dvoch intervalov na číselnej osi': 'Intersection of two intervals on the number line',
    'Absolútna hodnota ako vzdialenosť na číselnej osi': 'Absolute value as distance on the number line',
    '{@0} = {@1} ⇔ x = {@2} alebo x = {@3} · <span class="c-accent">{@4} ≤ {@5} ⇔ x ∈ ⟨{@6}; {@7}⟩</span>': '{@0} = {@1} ⇔ x = {@2} or x = {@3} · <span class="c-accent">{@4} ≤ {@5} ⇔ x ∈ ⟨{@6}; {@7}⟩</span>',
    'Strom rozkladu čísla 360 na prvočinitele': 'Factor tree of 360',
    'Štvorec so stranou a plus b rozdelený na štyri časti': 'A square with side a plus b divided into four parts',
    'podiel': 'quotient',
    'Tabuľka znamienok pre podiel (x + 2) / (x − 3)': 'Sign table for the quotient (x + 2) / (x − 3)',
    'Dve rovnobežky preťaté priečkou': 'Two parallel lines cut by a transversal',
    'Rovnoramenný lichobežník s vyznačenou výškou': 'Isosceles trapezium with its height marked',
    'sss': 'SSS', 'sus': 'SAS', 'usu': 'ASA', 'Ssu': 'SsA',
    'Štyri vety o zhodnosti trojuholníkov': 'Four congruence theorems for triangles',
    'Talesova kružnica': 'Thales circle',
    'Konštrukcia pravouhlého trojuholníka pomocou Talesovej kružnice': 'Constructing a right triangle with the Thales circle',
    'Grafy priamej a nepriamej úmernosti': 'Graphs of direct and inverse proportionality',
    '<span class="c-accent">priama: y = {@0}·x</span> · <span class="c-ok">nepriama: y = {@1}/x</span> · pre x = 2: y = {@2} a y = {@3}': '<span class="c-accent">direct: y = {@0}·x</span> · <span class="c-ok">inverse: y = {@1}/x</span> · for x = 2: y = {@2} and y = {@3}',

    // spoločné
    'napr. -2; 5': 'e.g. -2; 5',
    'napr. -2; 3': 'e.g. -2; 3',
    'napr. -3; 2; 3': 'e.g. -3; 2; 3',
    '${@0}={@1}$ a $x={@2}$': '${@0}={@1}$ and $x={@2}$',

    // mnoziny
    'Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?': 'The set $A$ has ${@0}$ elements, the set $B$ has ${@1}$ elements and their intersection has ${@2}$ elements. How many elements does $A\\cup B$ have?',
    'Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.': 'The elements of the intersection are counted twice, so subtract them.',

    // s1-obory
    'Ktorá je najmenšia z množín $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, do ktorej patrí číslo ${@0}$?': 'What is the smallest of the sets $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$ that contains the number ${@0}$?',
    '{@0} Najmenšia vyhovujúca množina je {@1}.': '{@0} The smallest such set is {@1}.',
    'Číslo najprv zjednoduš (vykráť, odmocni). Zlomok, ktorý nie je celým číslom, patrí do $\\mathbb{Q}$; odmocnina z čísla, ktoré nie je štvorcom, je iracionálna.': 'Simplify the number first (cancel, take the root). A fraction that is not an integer belongs to $\\mathbb{Q}$; the square root of a number that is not a square is irrational.',
    '${@0}$ je kladné celé číslo, teda prirodzené.': '${@0}$ is a positive integer, so it is natural.',
    '$-{@0}$ je záporné celé číslo, do $\\mathbb{N}$ nepatrí.': '$-{@0}$ is a negative integer, it does not belong to $\\mathbb{N}$.',
    'Nula je celé číslo, do $\\mathbb{N}=\\{1, 2, 3, \\dots\\}$ však nepatrí.': 'Zero is an integer, but it does not belong to $\\mathbb{N}=\\{1, 2, 3, \\dots\\}$.',
    'Zlomok sa dá vykrátiť: ${@0}\\frac{{@1}}{{@2}}={@3}$.': 'The fraction can be cancelled: ${@0}\\frac{{@1}}{{@2}}={@3}$.',
    'Je to podiel dvoch celých čísel, ktorý po krátení nie je celým číslom.': 'It is a quotient of two integers which is not an integer after cancelling.',
    'Konečný desatinný rozvoj má racionálne číslo: je to zlomok s menovateľom 10, 100, 1000, …': 'A terminating decimal is a rational number: it is a fraction with denominator 10, 100, 1000, …',
    'Periodický rozvoj má racionálne číslo: $0{,}\\overline{{@0}}={@1}$.': 'A repeating decimal is a rational number: $0.\\overline{{@0}}={@1}$.',
    '${@0}$ nie je druhou mocninou celého čísla, preto je $\\sqrt{{@1}}$ iracionálne.': '${@0}$ is not the square of an integer, so $\\sqrt{{@1}}$ is irrational.',
    'Číslo $\\pi$ je iracionálne, a teda aj každý jeho nenulový racionálny násobok.': 'The number $\\pi$ is irrational, and so is every non-zero rational multiple of it.',
    'Ak by bolo racionálne, aj $\\sqrt{{@0}}$ by bola racionálna. Súčet racionálneho a iracionálneho čísla je iracionálny.': 'If it were rational, $\\sqrt{{@0}}$ would be rational too. The sum of a rational and an irrational number is irrational.',
    'Označme $x={@0}$. Perióda má dve cifry, preto $100x={@1}{,}\\overline{{@2}{@3}}$. Odčítaním $100x-x={@4}$, teda $99x={@5}$ a $x=\\frac{{@6}}{99}{@7}$.': 'Let $x={@0}$. The repeating block has two digits, so $100x={@1}.\\overline{{@2}{@3}}$. Subtracting gives $100x-x={@4}$, so $99x={@5}$ and $x=\\frac{{@6}}{99}{@7}$.',
    'Označme $x={@0}$. Potom $10x={@1}{,}\\overline{{@2}}$ a $100x={@3}{@4}{,}\\overline{{@5}}$. Odčítaním $100x-10x={@6}-{@7}$, teda $90x={@8}$ a $x=\\frac{{@9}}{90}{@10}$.': 'Let $x={@0}$. Then $10x={@1}.\\overline{{@2}}$ and $100x={@3}{@4}.\\overline{{@5}}$. Subtracting gives $100x-10x={@6}-{@7}$, so $90x={@8}$ and $x=\\frac{{@9}}{90}{@10}$.',
    'čitateľ; menovateľ': 'numerator; denominator',
    'Zapíš periodické číslo ${@0}$ ako zlomok v základnom tvare. Zadaj čitateľa a menovateľa oddelené bodkočiarkou.': 'Write the repeating decimal ${@0}$ as a fraction in lowest terms. Enter the numerator and the denominator separated by a semicolon.',
    'Číslo označ $x$ a vynásob ho takou mocninou 10, aby sa perióda posunula pred desatinnú čiarku. Potom odčítaj, aby perióda zmizla.': 'Call the number $x$ and multiply it by a power of 10 that moves the repeating block in front of the decimal point. Then subtract so that the repeating part disappears.',
    'bod ${@0}$ do neho patrí': 'the point ${@0}$ belongs to it',
    'bod ${@0}$ do neho nepatrí': 'the point ${@0}$ does not belong to it',
    'Prienik tvoria čísla, ktoré ležia v oboch intervaloch. Začína sa v ${@0}$ (ľavý krajný bod $B$, {@1}) a končí v ${@2}$ (pravý krajný bod $A$, {@3}).': 'The intersection consists of the numbers that lie in both intervals. It starts at ${@0}$ (the left endpoint of $B$, {@1}) and ends at ${@2}$ (the right endpoint of $A$, {@3}).',
    'Intervaly sa prekrývajú, zjednotenie je preto jediný interval od ľavého konca $A$ po pravý koniec $B$.': 'The intervals overlap, so the union is a single interval from the left end of $A$ to the right end of $B$.',
    'Z intervalu $A$ odoberieme čísla, ktoré ležia v $B$. Zostane časť od ${@0}$ po ${@1}$; bod ${@2}$ {@3}.': 'From the interval $A$ we remove the numbers that lie in $B$. The part from ${@0}$ to ${@1}$ remains; the point ${@2}$ {@3}.',
    'Z intervalu $B$ odoberieme čísla, ktoré ležia v $A$. Zostane časť od ${@0}$ ďalej; bod ${@1}$ {@2}.': 'From the interval $B$ we remove the numbers that lie in $A$. The part from ${@0}$ onwards remains; the point ${@1}$ {@2}.',
    'patrí do $B$, preto ho odoberieme': 'belongs to $B$, so we remove it',
    'do $B$ nepatrí, preto v rozdiele zostáva': 'does not belong to $B$, so it stays in the difference',
    'patrí do $A$, preto ho odoberieme': 'belongs to $A$, so we remove it',
    'do $A$ nepatrí, preto v rozdiele zostáva': 'does not belong to $A$, so it stays in the difference',
    'Dané sú intervaly $A={@0}$ a $B={@1}$. Urči ${@2}$.': 'Given the intervals $A={@0}$ and $B={@1}$, find ${@2}$.',
    '{@0} Teda ${@1}={@2}$.': '{@0} So ${@1}={@2}$.',
    'Nakresli oba intervaly nad jednu číselnú os. Pri každom krajnom bode zisti, či do výsledku patrí.': 'Draw both intervals above one number line. For each endpoint, decide whether it belongs to the result.',
    'interval ${@0}$': 'the interval ${@0}$',
    'množina $\\{x\\in\\mathbb{R};\\ {@0} {@1} x {@2} {@3}\\}$': 'the set $\\{x\\in\\mathbb{R};\\ {@0} {@1} x {@2} {@3}\\}$',
    'Koľko celých čísel obsahuje {@0}?': 'How many integers does {@0} contain?',
    'Najmenšie celé číslo, ktoré do intervalu patrí, je ${@0}$, najväčšie ${@1}$. Spolu je to ${@2}-{@3}+1={@4}$ {@5}.': 'The smallest integer in the interval is ${@0}$, the largest ${@1}$. Altogether that is ${@2}-{@3}+1={@4}$ {@5}.',
    'celé číslo': 'integer', 'celé čísla': 'integers', 'celých čísel': 'integers',
    'Nájdi najmenšie a najväčšie celé číslo v intervale. Pozor na krajné body, ktoré do intervalu nepatria.': 'Find the smallest and the largest integer in the interval. Watch out for endpoints that do not belong to it.',

    // s1-absolutna
    'Vypočítaj $|{@0}-{@1}|-|{@2}-{@3}|$.': 'Work out $|{@0}-{@1}|-|{@2}-{@3}|$.',
    '$|{@0}-{@1}|=|{@2}|={@3}$ a $|{@4}-{@5}|=|{@6}|={@7}$, teda výsledok je ${@8}-{@9}={@10}$.': '$|{@0}-{@1}|=|{@2}|={@3}$ and $|{@4}-{@5}|=|{@6}|={@7}$, so the result is ${@8}-{@9}={@10}$.',
    'Najprv vypočítaj výrazy vnútri absolútnych hodnôt, potom vezmi ich absolútne hodnoty.': 'First work out the expressions inside the absolute values, then take their absolute values.',
    'Vypočítaj $\\big||{@0}|-{@1}\\cdot|{@2}|\\big|$.': 'Work out $\\big||{@0}|-{@1}\\cdot|{@2}|\\big|$.',
    '$|{@0}|={@1}$ a $|{@2}|={@3}$. Vnútri: ${@4}-{@5}\\cdot {@6}={@7}$, a $|{@8}|={@9}$.': '$|{@0}|={@1}$ and $|{@2}|={@3}$. Inside: ${@4}-{@5}\\cdot {@6}={@7}$, and $|{@8}|={@9}$.',
    'Postupuj zvnútra von. Výsledok absolútnej hodnoty nikdy nie je záporný.': 'Work from the inside out. An absolute value is never negative.',
    'Vyrieš rovnicu $|{@0}|={@1}$. Zadaj obe riešenia oddelené bodkočiarkou.': 'Solve the equation $|{@0}|={@1}$. Enter both solutions separated by a semicolon.',
    'Výraz v absolútnej hodnote sa rovná ${@0}$ alebo ${@1}$. Z ${@2}={@3}$ dostaneme $x={@4}$, z ${@5}={@6}$ dostaneme $x={@7}$.': 'The expression inside the absolute value equals ${@0}$ or ${@1}$. From ${@2}={@3}$ we get $x={@4}$, from ${@5}={@6}$ we get $x={@7}$.',
    'Rovnica $|V|=r$ s $r&gt;0$ sa rozpadne na dve lineárne rovnice $V=r$ a $V=-r$.': 'The equation $|V|=r$ with $r&gt;0$ splits into two linear equations $V=r$ and $V=-r$.',
    'Vyrieš nerovnicu ${@0} {@1} {@2}$ v $\\mathbb{R}$.': 'Solve the inequality ${@0} {@1} {@2}$ in $\\mathbb{R}$.',
    'Vyberieme {@0} pred absolútnu hodnotu a vydelíme: ${@1} {@2} {@3}$.': 'We take {@0} out of the absolute value and divide: ${@1} {@2} {@3}$.',
    'Výraz ${@0}$ je vzdialenosť čísla $x$ od ${@1}$. Vzdialenosť {@2} ako {@3}${@4}$ majú čísla': 'The expression ${@0}$ is the distance of $x$ from ${@1}$. A distance {@2} than {@3}${@4}$ is found for the numbers',
    'menšia': 'less', 'väčšia': 'greater', 'alebo rovná': 'or equal to',
    'medzi ${@0}$ a ${@1}$': 'between ${@0}$ and ${@1}$',
    'naľavo od ${@0}$ a napravo od ${@1}$': 'to the left of ${@0}$ and to the right of ${@1}$',
    'vrátane krajných bodov': 'including the endpoints',
    'bez krajných bodov': 'excluding the endpoints',
    '{@0}{@1}. Riešenie: {@2}.': '{@0}{@1}. Solution: {@2}.',
    '$|x-a|$ je vzdialenosť $x$ od $a$. Nájdi body vo vzdialenosti $r$ od $a$ a rozhodni, či hľadáš čísla bližšie alebo ďalej.': '$|x-a|$ is the distance of $x$ from $a$. Find the points at distance $r$ from $a$ and decide whether you are looking for numbers closer or further away.',
    'Koľko celých čísel $x$ spĺňa nerovnicu ${@0} {@1} {@2}$?': 'How many integers $x$ satisfy the inequality ${@0} {@1} {@2}$?',
    'Riešením je interval ${@0}$. Celé čísla v ňom sú od ${@1}$ po ${@2}$, spolu {@3}.': 'The solution is the interval ${@0}$. The integers in it go from ${@1}$ to ${@2}$, {@3} altogether.',
    'Prepíš nerovnicu na interval okolo stredu $a$ a spočítaj celé čísla v ňom.': 'Rewrite the inequality as an interval around the centre $a$ and count the integers in it.',

    // s1-delitelnost
    'Rozlož číslo ${@0}$ na súčin prvočísel v tvare $2^a\\cdot 3^b\\cdot 5^c$. Zadaj exponenty $a; b; c$ (ak prvočíslo v rozklade nie je, jeho exponent je 0).': 'Factorise the number ${@0}$ into primes in the form $2^a\\cdot 3^b\\cdot 5^c$. Enter the exponents $a; b; c$ (if a prime does not appear, its exponent is 0).',
    'Postupne delíme: ${@0}={@1}$, teda $a={@2}$, $b={@3}$, $c={@4}$.': 'We keep dividing: ${@0}={@1}$, so $a={@2}$, $b={@3}$, $c={@4}$.',
    'Deľ číslom 2, kým sa dá, potom číslom 3, potom 5. Počítaj, koľkokrát si delil.': 'Divide by 2 as long as you can, then by 3, then by 5. Count how many times you divided.',
    'Koľko deliteľov (vrátane čísla 1 a samotného čísla) má číslo ${@0}$?': 'How many divisors (including 1 and the number itself) does the number ${@0}$ have?',
    '${@0}={@1}$. Každý deliteľ vznikne voľbou exponentu každého prvočísla od 0 po jeho exponent v rozklade, preto je deliteľov ${@2}={@3}$.': '${@0}={@1}$. Each divisor comes from choosing the exponent of every prime from 0 up to its exponent in the factorisation, so there are ${@2}={@3}$ divisors.',
    'Rozlož číslo na prvočinitele. Ak $n=p^a\\cdot q^b\\cdots$, má $(a+1)(b+1)\\cdots$ deliteľov.': 'Factorise the number into primes. If $n=p^a\\cdot q^b\\cdots$, it has $(a+1)(b+1)\\cdots$ divisors.',
    'NSD; nsn': 'GCD; LCM',
    'Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel ${@0}$ a ${@1}$. Zadaj ich v poradí NSD; nsn.': 'Find the greatest common divisor and the least common multiple of ${@0}$ and ${@1}$. Enter them in the order GCD; LCM.',
    '${@0}={@1}$ a ${@2}={@3}$. $\\mathrm{NSD}({@4}, {@5})={@6}{@7}$ (spoločné prvočinitele s menšími exponentmi),': '${@0}={@1}$ and ${@2}={@3}$. $\\mathrm{gcd}({@4}, {@5})={@6}{@7}$ (common prime factors with the smaller exponents),',
    '$\\mathrm{nsn}({@0}, {@1})=\\frac{{@2}\\cdot {@3}}{{@4}}={@5}$.': '$\\mathrm{lcm}({@0}, {@1})=\\frac{{@2}\\cdot {@3}}{{@4}}={@5}$.',
    'Rozlož obe čísla na prvočinitele. Pre nsn môžeš použiť vzťah $\\mathrm{nsn}(a, b)=\\frac{a\\cdot b}{\\mathrm{NSD}(a, b)}$.': 'Factorise both numbers into primes. For the LCM you can use $\\mathrm{lcm}(a, b)=\\frac{a\\cdot b}{\\mathrm{gcd}(a, b)}$.',
    'Ktorú cifru treba napísať namiesto $\\ast$, aby číslo ${@0}$ bolo deliteľné deviatimi?': 'Which digit must replace $\\ast$ so that the number ${@0}$ is divisible by nine?',
    'Ciferný súčet známych cifier je ${@0}$. Najbližší násobok 9, ktorý vieme dosiahnuť pridaním jednej cifry, je ${@1}$, preto chýba cifra ${@2}$. Číslo ${@3}$ je deliteľné deviatimi.': 'The digit sum of the known digits is ${@0}$. The nearest multiple of 9 we can reach by adding one digit is ${@1}$, so the missing digit is ${@2}$. The number ${@3}$ is divisible by nine.',
    'Číslo je deliteľné 9 práve vtedy, keď je 9 deliteľný jeho ciferný súčet.': 'A number is divisible by 9 exactly when its digit sum is divisible by 9.',
    'Ktorú cifru treba napísať namiesto $\\ast$, aby číslo ${@0}$ bolo deliteľné jedenástimi?': 'Which digit must replace $\\ast$ so that the number ${@0}$ is divisible by eleven?',
    'Striedavý súčet cifier (zľava so znamienkami $+,-,+,-,+$) musí byť deliteľný 11. Pre cifru ${@0}$ je to ${@1}={@2}$, čo je násobok 11. Iná cifra 0 až 9 nevyhovuje.': 'The alternating digit sum (from the left with the signs $+,-,+,-,+$) must be divisible by 11. For the digit ${@0}$ it is ${@1}={@2}$, which is a multiple of 11. No other digit 0 to 9 works.',
    'Číslo je deliteľné 11 práve vtedy, keď je 11 deliteľný striedavý súčet jeho cifier.': 'A number is divisible by 11 exactly when the alternating sum of its digits is divisible by 11.',
    'Vypočítaj $\\frac{{@0}}{{@1}} {@2} \\frac{{@3}}{{@4}}$. Výsledok zadaj ako zlomok v základnom tvare (napr. 7/12).': 'Work out $\\frac{{@0}}{{@1}} {@2} \\frac{{@3}}{{@4}}$. Enter the result as a fraction in lowest terms (e.g. 7/12).',
    'Spoločný menovateľ je $\\mathrm{nsn}({@0}, {@1})={@2}$: $\\frac{{@3}}{{@4}} {@5} \\frac{{@6}}{{@7}}=\\frac{{@8}}{{@9}}{@10}$.': 'The common denominator is $\\mathrm{lcm}({@0}, {@1})={@2}$: $\\frac{{@3}}{{@4}} {@5} \\frac{{@6}}{{@7}}=\\frac{{@8}}{{@9}}{@10}$.',
    'Ako spoločného menovateľa použi najmenší spoločný násobok menovateľov, nie ich súčin.': 'Use the least common multiple of the denominators as the common denominator, not their product.',
    'Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 6.00 odišli oba autobusy naraz. Najskôr o koľko minút odídu opäť súčasne?': 'Bus line A leaves the bus station every {@0} minutes and line B every {@1} minutes. At 6:00 both buses left together. After how many minutes, at the earliest, will they leave together again?',
    'Hľadáme najmenší spoločný násobok: ${@0}={@1}$, ${@2}={@3}$, $\\mathrm{nsn}({@4}, {@5})={@6}$. Opäť odídu spolu o {@7} minút.': 'We are looking for the least common multiple: ${@0}={@1}$, ${@2}={@3}$, $\\mathrm{lcm}({@4}, {@5})={@6}$. They leave together again after {@7} minutes.',
    'Časy odchodov linky A sú násobky jej intervalu. Hľadáme najmenší čas, ktorý je násobkom oboch intervalov.': 'The departure times of line A are multiples of its interval. We want the smallest time that is a multiple of both intervals.',
    'Dve laty dlhé {@0} cm a {@1} cm chceme bez zvyšku rozrezať na čo najdlhšie kúsky rovnakej dĺžky (v celých centimetroch). {@2}': 'We want to cut two laths, {@0} cm and {@1} cm long, without waste into pieces of equal length that are as long as possible (in whole centimetres). {@2}',
    'Koľko kúskov dostaneme spolu?': 'How many pieces do we get altogether?',
    'Aký dlhý bude jeden kúsok (v cm)?': 'How long will one piece be (in cm)?',
    'Dĺžka kúska musí deliť obe dĺžky a má byť čo najväčšia: $\\mathrm{NSD}({@0}, {@1})={@2}$ cm.{@3}': 'The length of a piece must divide both lengths and be as large as possible: $\\mathrm{gcd}({@0}, {@1})={@2}$ cm.{@3}',
    'Kúskov bude ${@0}:{@1}+{@2}:{@3}={@4}+{@5}={@6}$.': 'There will be ${@0}:{@1}+{@2}:{@3}={@4}+{@5}={@6}$ pieces.',
    'Dĺžka kúska je spoločný deliteľ oboch dĺžok. Ktorý je najväčší?': 'The length of a piece is a common divisor of both lengths. Which one is the greatest?',

    // mocniny
    'Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.': 'Work out ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.',
    'Pri násobení mocnín rovnakého základu sa exponenty sčítajú.': 'When multiplying powers with the same base, add the exponents.',
    'Vypočítaj $({@0}^{{@1}})^{{@2}}$.': 'Work out $({@0}^{{@1}})^{{@2}}$.',
    'Pri umocňovaní mocniny sa exponenty násobia.': 'When raising a power to a power, multiply the exponents.',

    // s1-vyrazy
    '$({@0})^2={@1}$ a $({@2})({@3})={@4}$. Po odčítaní: ${@5}$.': '$({@0})^2={@1}$ and $({@2})({@3})={@4}$. After subtracting: ${@5}$.',
    '$({@0})({@1})={@2}$ a $({@3})^2={@4}$. Po odčítaní: ${@5}$.': '$({@0})({@1})={@2}$ and $({@3})^2={@4}$. After subtracting: ${@5}$.',
    'Uprav výraz ${@0}$ na tvar $Ax^2+Bx+C$ a zadaj koeficienty $A; B; C$.': 'Simplify the expression ${@0}$ to the form $Ax^2+Bx+C$ and enter the coefficients $A; B; C$.',
    '{@0} Pri odčítaní celú druhú zátvorku odčítame, preto sa všetky jej znamienka zmenia.': '{@0} When subtracting, we subtract the whole second bracket, so all its signs change.',
    'Použi $(a+b)^2=a^2+2ab+b^2$ a $(a+b)(a-b)=a^2-b^2$. Odčítaný výraz daj do zátvorky.': 'Use $(a+b)^2=a^2+2ab+b^2$ and $(a+b)(a-b)=a^2-b^2$. Put the subtracted expression in brackets.',
    'Pre reálne čísla $a$, $b$ platí $a+b={@0}$ a $a\\cdot b={@1}$. Bez výpočtu čísel $a$, $b$ urči hodnotu výrazu ${@2}$.': 'For real numbers $a$, $b$ we have $a+b={@0}$ and $a\\cdot b={@1}$. Without finding $a$ and $b$, determine the value of ${@2}$.',
    'Výraz vyjadríme pomocou $a+b$ a $ab$: {@0}.': 'We express it using $a+b$ and $ab$: {@0}.',
    'Vyjadri hľadaný výraz len pomocou súčtu $a+b$ a súčinu $ab$, napr. $(a+b)^2=a^2+2ab+b^2$.': 'Express the required expression only in terms of the sum $a+b$ and the product $ab$, e.g. $(a+b)^2=a^2+2ab+b^2$.',
    'Pre ktoré reálne čísla $x$ nemá výraz ${@0}$ zmysel? Zadaj všetky také čísla oddelené bodkočiarkou.': 'For which real numbers $x$ is the expression ${@0}$ not defined? Enter all such numbers separated by a semicolon.',
    'Výraz nemá zmysel tam, kde je niektorý menovateľ nulový. ${@0}={@1}$, súčin je nulový pre $x={@2}$ alebo $x={@3}$.': 'The expression is not defined where a denominator is zero. ${@0}={@1}$, the product is zero for $x={@2}$ or $x={@3}$.',
    'Menovateľ rozlož na súčin. Súčin je nulový práve vtedy, keď je nulový niektorý činiteľ.': 'Factorise the denominator. A product is zero exactly when one of its factors is zero.',
    '$\\frac{({@0})({@1})}{x({@2})}=\\frac{{@3}}{x}$ pre $x\\neq 0$, $x\\neq {@4}$': '$\\frac{({@0})({@1})}{x({@2})}=\\frac{{@3}}{x}$ for $x\\neq 0$, $x\\neq {@4}$',
    '$\\frac{({@0})^2}{({@1})({@2})}=\\frac{{@3}}{{@4}}$ pre $x\\neq \\pm {@5}$': '$\\frac{({@0})^2}{({@1})({@2})}=\\frac{{@3}}{{@4}}$ for $x\\neq \\pm {@5}$',
    '$\\frac{{@0}({@1})}{({@2})^2}=\\frac{{@3}}{{@4}}$ pre $x\\neq {@5}$': '$\\frac{{@0}({@1})}{({@2})^2}=\\frac{{@3}}{{@4}}$ for $x\\neq {@5}$',
    '$\\frac{x({@0})}{{@1}({@2})}=\\frac{x}{{@3}}$ pre $x\\neq {@4}$': '$\\frac{x({@0})}{{@1}({@2})}=\\frac{x}{{@3}}$ for $x\\neq {@4}$',
    'Zjednoduš výraz ${@0}$ (pre všetky $x$, pre ktoré má zmysel).': 'Simplify the expression ${@0}$ (for all $x$ for which it is defined).',
    'Čitateľ aj menovateľ rozložíme na súčin a vykrátime spoločného činiteľa: {@0}.': 'We factorise the numerator and the denominator and cancel the common factor: {@0}.',
    'Krátiť sa dá len spoločný činiteľ súčinu. Rozlož čitateľ aj menovateľ (vyberanie, vzorce).': 'Only a common factor of a product can be cancelled. Factorise the numerator and the denominator (factoring out, formulas).',

    // s1-mnohoclen
    'Rozlož trojčlen ${@0}$ na súčin v tvare ${@1}(x-x_1)(x-x_2)$. Zadaj čísla $x_1; x_2$.': 'Factorise the trinomial ${@0}$ in the form ${@1}(x-x_1)(x-x_2)$. Enter the numbers $x_1; x_2$.',
    'Vyberieme ${@0}$: ${@1}({@2})$.': 'Factor out ${@0}$: ${@1}({@2})$.',
    '{@0}Hľadáme čísla so súčtom ${@1}$ a súčinom ${@2}$: sú to ${@3}$ a ${@4}$.': '{@0}We look for numbers with sum ${@1}$ and product ${@2}$: they are ${@3}$ and ${@4}$.',
    'Teda ${@0}={@1}({@2})({@3})$.': 'So ${@0}={@1}({@2})({@3})$.',
    'Ak $x^2+px+q=(x-x_1)(x-x_2)$, potom $x_1+x_2=-p$ a $x_1\\cdot x_2=q$.': 'If $x^2+px+q=(x-x_1)(x-x_2)$, then $x_1+x_2=-p$ and $x_1\\cdot x_2=q$.',
    'Rozlož mnohočlen $p(x)={@0}$ na súčin lineárnych činiteľov a zadaj všetky jeho korene oddelené bodkočiarkou.': 'Factorise the polynomial $p(x)={@0}$ into linear factors and enter all its roots separated by a semicolon.',
    'Zoskupíme: $p(x)=x^2({@0}){@1}({@2})=({@3})(x^2-{@4})=({@5})({@6})({@7})$. Korene sú ${@8}$, ${@9}$ a ${@10}$.': 'Group: $p(x)=x^2({@0}){@1}({@2})=({@3})(x^2-{@4})=({@5})({@6})({@7})$. The roots are ${@8}$, ${@9}$ and ${@10}$.',
    'Zoskup prvé dva a posledné dva členy a z každej dvojice vyber, čo sa dá. Potom použi $a^2-b^2=(a-b)(a+b)$.': 'Group the first two and the last two terms and factor out what you can from each pair. Then use $a^2-b^2=(a-b)(a+b)$.',
    'Aký zvyšok dostaneme pri delení mnohočlena $p(x)={@0}$ dvojčlenom $({@1})$?': 'What is the remainder when the polynomial $p(x)={@0}$ is divided by $({@1})$?',
    'Podľa vety o zvyšku je zvyšok $p({@0})$. Hornerovou schémou: ${@1}$, ${@2}\\cdot {@3}{@4}={@5}$, ${@6}\\cdot {@7}{@8}={@9}$, ${@10}\\cdot {@11}{@12}={@13}$. Zvyšok je ${@14}$.': 'By the remainder theorem the remainder is $p({@0})$. With Horner\'s scheme: ${@1}$, ${@2}\\cdot {@3}{@4}={@5}$, ${@6}\\cdot {@7}{@8}={@9}$, ${@10}\\cdot {@11}{@12}={@13}$. The remainder is ${@14}$.',
    'Zvyšok po delení $(x-c)$ je hodnota $p(c)$. Pozor na znamienko: pri $(x+2)$ je $c=-2$.': 'The remainder after dividing by $(x-c)$ is the value $p(c)$. Watch the sign: for $(x+2)$, $c=-2$.',
    'Podľa vzorca $a^3{@0}b^3=(a{@1}b)(a^2{@2}ab+b^2)$ pre $a=x$, $b={@3}$.': 'By the formula $a^3{@0}b^3=(a{@1}b)(a^2{@2}ab+b^2)$ with $a=x$, $b={@3}$.',
    'Je to rozdiel štvorcov $({@0})^2-{@1}^2$, teda $({@2}-{@3})({@4}+{@5})$.': 'It is a difference of squares $({@0})^2-{@1}^2$, so $({@2}-{@3})({@4}+{@5})$.',
    'Prvý a posledný člen sú štvorce $({@0})^2$ a ${@1}^2$, prostredný člen je ich dvojnásobný súčin, teda ide o $(a{@2}b)^2$.': 'The first and the last term are the squares $({@0})^2$ and ${@1}^2$, the middle term is twice their product, so it is $(a{@2}b)^2$.',
    'Ktorý zápis je rozkladom výrazu ${@0}$ na súčin?': 'Which expression is the factorisation of ${@0}$?',
    '{@0} Správne: ${@1}={@2}$. Overiť to môžeš roznásobením.': '{@0} Correct: ${@1}={@2}$. You can check it by expanding.',
    'Zisti, či ide o rozdiel štvorcov, štvorec dvojčlena alebo súčet/rozdiel tretích mocnín. Každú možnosť môžeš overiť roznásobením.': 'Decide whether it is a difference of squares, the square of a binomial or a sum/difference of cubes. You can check each option by expanding.',

    // linearne
    'Vyrieš rovnicu ${@0}x{@1} = {@2}$.': 'Solve the equation ${@0}x{@1} = {@2}$.',
    '${@0}x={@1}{@2}={@3}$, teda $x={@4}$.': '${@0}x={@1}{@2}={@3}$, so $x={@4}$.',
    'Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.': 'First subtract the constant on both sides, then divide by the coefficient of $x$.',

    // s1-menovatel
    'Vyrieš rovnicu $\\frac{{@0}}{{@1}}={@2}$.': 'Solve the equation $\\frac{{@0}}{{@1}}={@2}$.',
    'Podmienka $x\\neq {@0}$. Vynásobíme $({@1})$: ${@2}={@3}$, teda {@4}. Podmienku spĺňa.': 'Condition $x\\neq {@0}$. Multiply by $({@1})$: ${@2}={@3}$, so {@4}. It satisfies the condition.',
    'Napíš podmienku a obe strany vynásob menovateľom.': 'Write the condition and multiply both sides by the denominator.',
    'Vyrieš rovnicu $\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$.': 'Solve the equation $\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$.',
    'Podmienky $x\\neq {@0}$, $x\\neq {@1}$. Vynásobíme oboma menovateľmi: ${@2}({@3})={@4}({@5})$, teda ${@6}={@7}$,': 'Conditions $x\\neq {@0}$, $x\\neq {@1}$. Multiply by both denominators: ${@2}({@3})={@4}({@5})$, so ${@6}={@7}$,',
    '{@0}. Podmienky sú splnené.': '{@0}. The conditions are satisfied.',
    'Rovnosť dvoch zlomkov môžeš „vynásobiť do kríža“: $\\frac{a}{b}=\\frac{c}{d}\\Leftrightarrow ad=bc$ pre $b, d\\neq 0$.': 'You can cross-multiply an equality of two fractions: $\\frac{a}{b}=\\frac{c}{d}\\Leftrightarrow ad=bc$ for $b, d\\neq 0$.',
    'Rovnica nemá riešenie.': 'The equation has no solution.',
    'Vyrieš rovnicu $\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}{@4}$.': 'Solve the equation $\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}{@4}$.',
    'Podmienka $x\\neq {@0}$. Vynásobíme $({@1})$: ${@2}={@3}{@4}({@5})$, teda {@6}.': 'Condition $x\\neq {@0}$. Multiply by $({@1})$: ${@2}={@3}{@4}({@5})$, so {@6}.',
    'Toto číslo však nespĺňa podmienku $x\\neq {@0}$, preto rovnica nemá riešenie.': 'But this number does not satisfy the condition $x\\neq {@0}$, so the equation has no solution.',
    'Podmienku spĺňa, je to riešenie.': 'It satisfies the condition, so it is a solution.',
    'Nezabudni na podmienku. Koreň, ktorý ju nespĺňa, riešením nie je.': 'Do not forget the condition. A root that does not satisfy it is not a solution.',
    'Vyrieš rovnicu $\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}=\\frac{{@4}}{x^2-{@5}}$.': 'Solve the equation $\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}=\\frac{{@4}}{x^2-{@5}}$.',
    '$x^2-{@0}=({@1})({@2})$, podmienky $x\\neq\\pm {@3}$. Vynásobíme: ${@4}({@5})+{@6}({@7})={@8}$,': '$x^2-{@0}=({@1})({@2})$, conditions $x\\neq\\pm {@3}$. Multiply: ${@4}({@5})+{@6}({@7})={@8}$,',
    'teda ${@0}={@1}$ a $x={@2}$. Podmienky sú splnené.': 'so ${@0}={@1}$ and $x={@2}$. The conditions are satisfied.',
    'Rozlož $x^2-a^2=(x-a)(x+a)$; to je spoločný menovateľ všetkých zlomkov.': 'Factorise $x^2-a^2=(x-a)(x+a)$; that is the common denominator of all the fractions.',

    // s1-nerovnice
    'Roznásobíme: ${@0}': 'Expand: ${@0}',
    '{@0}Členy s $x$ prevedieme doľava, čísla doprava: ${@1} {@2} {@3}$.': '{@0}Move the terms with $x$ to the left and the numbers to the right: ${@1} {@2} {@3}$.',
    'Delíme záporným číslom ${@0}$, znak nerovnosti sa obráti:': 'Divide by the negative number ${@0}$, the inequality sign reverses:',
    'Delíme číslom ${@0}$:': 'Divide by ${@0}$:',
    '$x {@0} {@1}$, teda $x\\in{@2}$.': '$x {@0} {@1}$, so $x\\in{@2}$.',
    'Pri delení alebo násobení záporným číslom obráť znak nerovnosti. Ostrá nerovnosť znamená okrúhlu zátvorku.': 'When dividing or multiplying by a negative number, reverse the inequality sign. A strict inequality means a round bracket.',
    'Vyrieš nerovnicu ${@0}{@1} {@2} 0$.': 'Solve the inequality ${@0}{@1} {@2} 0$.',
    'Nulové body sú ${@0}$ a ${@1}$. Na intervaloch $(-\\infty; {@2})$, $({@3}; {@4})$, $({@5}; \\infty)$ má súčin postupne znamienka ${@6}$.': 'The zero points are ${@0}$ and ${@1}$. On the intervals $(-\\infty; {@2})$, $({@3}; {@4})$, $({@5}; \\infty)$ the product has the signs ${@6}$.',
    '{@0}Riešenie: {@1}.': '{@0}Solution: {@1}.',
    'Nulové body pridáme, lebo v nich je súčin rovný 0.': 'We add the zero points, because the product equals 0 there.',
    'Nulové body nepatria, nerovnosť je ostrá.': 'The zero points do not belong, the inequality is strict.',
    'Nájdi nulové body oboch činiteľov a v každom z troch intervalov urči znamienko súčinu (dosaď ľubovoľné číslo).': 'Find the zero points of both factors and determine the sign of the product on each of the three intervals (substitute any number).',
    'Vyrieš nerovnicu $\\frac{{@0}}{{@1}} {@2} 0$.': 'Solve the inequality $\\frac{{@0}}{{@1}} {@2} 0$.',
    'Nulový bod čitateľa je ${@0}$, menovateľa ${@1}$ (podmienka $x\\neq {@2}$). Na intervaloch $(-\\infty; {@3})$, $({@4}; {@5})$, $({@6}; \\infty)$ má podiel znamienka ${@7}$.': 'The zero point of the numerator is ${@0}$, of the denominator ${@1}$ (condition $x\\neq {@2}$). On the intervals $(-\\infty; {@3})$, $({@4}; {@5})$, $({@6}; \\infty)$ the quotient has the signs ${@7}$.',
    '{@0} Riešenie: {@1}.': '{@0} Solution: {@1}.',
    'Bod ${@0}$ pridáme (podiel je 0), bod ${@1}$ nie.': 'We add the point ${@0}$ (the quotient is 0), but not the point ${@1}$.',
    'Krajné body nepatria.': 'The endpoints do not belong.',
    'Podiel má rovnaké znamienko ako súčin čitateľa a menovateľa. Nulový bod menovateľa do riešenia nikdy nepatrí.': 'A quotient has the same sign as the product of the numerator and the denominator. The zero point of the denominator never belongs to the solution.',
    'Koľko celých čísel vyhovuje nerovnici ${@0} {@1} 0$?': 'How many integers satisfy the inequality ${@0} {@1} 0$?',
    'Výraz je záporný medzi nulovými bodmi ${@0}$ a ${@1}$. {@2}': 'The expression is negative between the zero points ${@0}$ and ${@1}$. {@2}',
    'Číslo ${@0}$ nepatrí (menovateľ je 0), číslo ${@1}$ patrí.': 'The number ${@0}$ does not belong (the denominator is 0), the number ${@1}$ does.',
    'Oba nulové body patria.': 'Both zero points belong.',
    'Krajné body nepatria (v čísle ${@0}$ je menovateľ nulový).': 'The endpoints do not belong (at ${@0}$ the denominator is zero).',
    'Vyhovuje jediné celé číslo ${@0}$.': 'Only one integer works: ${@0}$.',
    'Vyhovujú celé čísla ${@0}$, spolu {@1}.': 'The integers ${@0}$ work, {@1} altogether.',
    'Urči interval riešení a potom spočítaj celé čísla v ňom. Dávaj pozor na krajné body.': 'Find the solution interval and then count the integers in it. Watch the endpoints.',

    // s1-slovne
    'Cyklista vyrazil z mesta rýchlosťou ${@0}\\,\\text{km/h}$. O {@1} {@2} neskôr za ním po tej istej ceste vyrazil motocyklista rýchlosťou ${@3}\\,\\text{km/h}$. Za koľko hodín od svojho vyrazenia dobehne motocyklista cyklistu?': 'A cyclist set off from a town at ${@0}\\,\\text{km/h}$. {@1} {@2} later a motorcyclist set off after him along the same road at ${@3}\\,\\text{km/h}$. How many hours after setting off does the motorcyclist catch up with the cyclist?',
    'Nech motocyklista ide $t$ hodín, cyklista dovtedy ide $t+{@0}$ hodín a prejdú rovnakú dráhu: ${@1}t={@2}(t+{@3})$. Odtiaľ ${@4}t={@5}$ a $t={@6}\\,\\text{h}$.': 'Let the motorcyclist ride for $t$ hours; by then the cyclist has ridden $t+{@0}$ hours and they have covered the same distance: ${@1}t={@2}(t+{@3})$. Hence ${@4}t={@5}$ and $t={@6}\\,\\text{h}$.',
    'V okamihu dobehnutia prešli obaja rovnakú dráhu. Cyklista išiel o niekoľko hodín dlhšie.': 'At the moment of catching up both have covered the same distance. The cyclist has been riding a few hours longer.',
    'Loď preplávala {@0} km po prúde rieky za {@1} h a späť proti prúdu za {@2} h. Aká je rýchlosť lode v stojatej vode $v$ a rýchlosť prúdu $w$ (v km/h)? Zadaj $v; w$.': 'A boat sailed {@0} km downstream in {@1} h and back upstream in {@2} h. What is the speed of the boat in still water $v$ and the speed of the current $w$ (in km/h)? Enter $v; w$.',
    'Po prúde: $v+w={@0}:{@1}={@2}$, proti prúdu: $v-w={@3}:{@4}={@5}$. Sčítaním $2v={@6}$, teda $v={@7}\\,\\text{km/h}$ a $w={@8}\\,\\text{km/h}$.': 'Downstream: $v+w={@0}:{@1}={@2}$, upstream: $v-w={@3}:{@4}={@5}$. Adding gives $2v={@6}$, so $v={@7}\\,\\text{km/h}$ and $w={@8}\\,\\text{km/h}$.',
    'Po prúde sa rýchlosti sčítajú ($v+w$), proti prúdu odčítajú ($v-w$). Z dráhy a času vypočítaj obe a vyrieš sústavu.': 'Downstream the speeds add up ($v+w$), upstream they subtract ($v-w$). Work out both from the distance and the time and solve the system.',
    'Prvé čerpadlo napustí bazén za {@0} h, druhé za {@1} h. Za koľko hodín ho napustia, ak pracujú súčasne?': 'The first pump fills a pool in {@0} h, the second in {@1} h. How many hours do they need if they work at the same time?',
    'Za hodinu napustí prvé $\\frac{1}{{@0}}$, druhé $\\frac{1}{{@1}}$ bazéna. Rovnica $\\frac{t}{{@2}}+\\frac{t}{{@3}}=1$ dáva $t=\\frac{{@4}\\cdot {@5}}{{@6}+{@7}}={@8}\\,\\text{h}$.': 'In one hour the first fills $\\frac{1}{{@0}}$, the second $\\frac{1}{{@1}}$ of the pool. The equation $\\frac{t}{{@2}}+\\frac{t}{{@3}}=1$ gives $t=\\frac{{@4}\\cdot {@5}}{{@6}+{@7}}={@8}\\,\\text{h}$.',
    'Vyjadri, akú časť bazéna napustí každé čerpadlo za $t$ hodín. Spolu to musí byť celý bazén, teda 1.': 'Express what part of the pool each pump fills in $t$ hours. Together it must be the whole pool, i.e. 1.',
    'Dvaja maliari spolu vymaľujú halu za {@0} h. Prvý by ju sám vymaľoval za {@1} h. Za koľko hodín by ju vymaľoval sám druhý maliar?': 'Two painters together paint a hall in {@0} h. The first alone would paint it in {@1} h. How many hours would the second painter need alone?',
    'Nech druhý potrebuje $x$ hodín. Rovnica $\\frac{{@0}}{{@1}}+\\frac{{@2}}{x}=1$, teda $\\frac{{@3}}{x}={@4}$ a $x={@5}\\,\\text{h}$.': 'Let the second need $x$ hours. The equation $\\frac{{@0}}{{@1}}+\\frac{{@2}}{x}=1$, so $\\frac{{@3}}{x}={@4}$ and $x={@5}\\,\\text{h}$.',
    'Prvý maliar urobí za spoločný čas časť práce $\\frac{t}{t_1}$; zvyšok urobí druhý.': 'In the joint time the first painter does the part $\\frac{t}{t_1}$ of the job; the second does the rest.',
    'Koľko litrov {@0} % roztoku soli treba pridať k {@1} litrom {@2} % roztoku, aby vznikol {@3} % roztok?': 'How many litres of a {@0} % salt solution must be added to {@1} litres of a {@2} % solution to get a {@3} % solution?',
    'Množstvo soli sa zachová: ${@0}\\cdot {@1}+{@2}\\,x={@3}({@4}+x)$. Upravíme: ${@5}\\,x={@6}$, teda $x={@7}$. Treba pridať {@8} l roztoku.': 'The amount of salt is preserved: ${@0}\\cdot {@1}+{@2}\\,x={@3}({@4}+x)$. Simplify: ${@5}\\,x={@6}$, so $x={@7}$. We need to add {@8} l of the solution.',
    'Porovnaj množstvo čistej soli pred zmiešaním a po ňom: $p_1m_1+p_2m_2=p(m_1+m_2)$.': 'Compare the amount of pure salt before and after mixing: $p_1m_1+p_2m_2=p(m_1+m_2)$.',
    'Označ vek dieťaťa $x$. O $n$ rokov budú obaja o $n$ rokov starší.': 'Call the child’s age $x$. In $n$ years both will be $n$ years older.',

    // s1-uhly
    'Priamky $p$ a $q$ sú rovnobežné. Urči veľkosť uhla $\\varphi$ v stupňoch. {@0}': 'The lines $p$ and $q$ are parallel. Find the size of the angle $\\varphi$ in degrees. {@0}',
    'Uhly sú pri tom istom priesečníku a sú {@0}.': 'The angles are at the same intersection and they are {@0}.',
    'vrcholové, teda zhodné': 'vertical, so equal',
    'susedné, ich súčet je $180^\\circ$': 'adjacent, their sum is $180^\\circ$',
    'Uhly sú {@0} pri rovnobežkách, teda zhodné.': 'The angles are {@0} angles at parallel lines, so they are equal.',
    'Uhol súhlasný s $\\varphi$ pri druhom priesečníku je s daným uhlom {@0}, preto {@1}.': 'The angle corresponding to $\\varphi$ at the other intersection is {@0} to the given angle, so {@1}.',
    'vrcholový': 'vertical', 'susedný': 'adjacent',
    'sú zhodné': 'they are equal',
    'má $\\varphi$ veľkosť $180^\\circ$ mínus daný uhol': '$\\varphi$ is $180^\\circ$ minus the given angle',
    'Vrcholové, súhlasné a striedavé uhly sú zhodné; susedné uhly majú súčet $180^\\circ$.': 'Vertical, corresponding and alternate angles are equal; adjacent angles add up to $180^\\circ$.',
    'vrcholové': 'vertical', 'susedné': 'adjacent', 'súhlasné': 'corresponding', 'striedavé': 'alternate',
    'majú spoločný vrchol a ich ramená sú opačné polpriamky': 'have a common vertex and their arms are opposite rays',
    'majú spoločný vrchol aj jedno rameno a zvyšné ramená sú opačné polpriamky': 'have a common vertex and one common arm, and the other arms are opposite rays',
    'ležia pri rôznych rovnobežkách v rovnakej polohe vzhľadom na priečku': 'lie at different parallel lines in the same position with respect to the transversal',
    'ležia pri rôznych rovnobežkách na opačných stranách priečky a v opačnej polohe': 'lie at different parallel lines on opposite sides of the transversal and in opposite positions',
    'Ako nazývame dvojicu uhlov $\\alpha$ a $\\beta$? {@0}': 'What do we call the pair of angles $\\alpha$ and $\\beta$? {@0}',
    'Uhly $\\alpha$ a $\\beta$ {@0}, sú to uhly <strong>{@1}</strong>.': 'The angles $\\alpha$ and $\\beta$ {@0}; they are <strong>{@1}</strong> angles.',
    'Zisti, či majú uhly spoločný vrchol. Ak nie, porovnaj ich polohu vzhľadom na priečku $t$.': 'Check whether the angles have a common vertex. If not, compare their positions with respect to the transversal $t$.',
    'V trojuholníku $ABC$ je $\\alpha={@0}^\\circ$ a $\\beta={@1}^\\circ$. Urči veľkosť uhla $\\gamma$ v stupňoch.': 'In the triangle $ABC$, $\\alpha={@0}^\\circ$ and $\\beta={@1}^\\circ$. Find the size of the angle $\\gamma$ in degrees.',
    'Súčet vnútorných uhlov trojuholníka je $180^\\circ$.': 'The interior angles of a triangle add up to $180^\\circ$.',
    'V trojuholníku $ABC$ je $\\alpha={@0}^\\circ$ a vonkajší uhol pri vrchole $B$ má veľkosť ${@1}^\\circ$. Urči veľkosť uhla $\\gamma$ v stupňoch.': 'In the triangle $ABC$, $\\alpha={@0}^\\circ$ and the exterior angle at the vertex $B$ is ${@1}^\\circ$. Find the size of the angle $\\gamma$ in degrees.',
    'Vonkajší uhol pri $B$ sa rovná súčtu vnútorných uhlov pri $A$ a $C$: ${@0}^\\circ={@1}^\\circ+\\gamma$, teda $\\gamma={@2}^\\circ$.': 'The exterior angle at $B$ equals the sum of the interior angles at $A$ and $C$: ${@0}^\\circ={@1}^\\circ+\\gamma$, so $\\gamma={@2}^\\circ$.',
    'Vonkajší uhol trojuholníka sa rovná súčtu dvoch vnútorných uhlov pri zvyšných vrcholoch.': 'An exterior angle of a triangle equals the sum of the two interior angles at the other vertices.',
    'Rovnoramenný trojuholník má pri hlavnom vrchole (medzi ramenami) uhol ${@0}^\\circ$. Akú veľkosť má uhol pri základni?': 'An isosceles triangle has an angle of ${@0}^\\circ$ at the apex (between the legs). How large is a base angle?',
    'Uhly pri základni sú zhodné: $\\frac{180^\\circ-{@0}^\\circ}{2}={@1}^\\circ$.': 'The base angles are equal: $\\frac{180^\\circ-{@0}^\\circ}{2}={@1}^\\circ$.',
    'V rovnoramennom trojuholníku sú uhly pri základni zhodné.': 'In an isosceles triangle the base angles are equal.',
    'Uhol pri základni rovnoramenného trojuholníka má ${@0}^\\circ$. Akú veľkosť má uhol pri hlavnom vrchole?': 'A base angle of an isosceles triangle is ${@0}^\\circ$. How large is the angle at the apex?',
    'Oba uhly pri základni sú zhodné a spolu s uhlom pri hlavnom vrchole dávajú $180^\\circ$.': 'Both base angles are equal and together with the apex angle they make $180^\\circ$.',
    'Áno, existuje.': 'Yes, it exists.',
    'Nie, neexistuje.': 'No, it does not exist.',
    'Existuje trojuholník so stranami dĺžok {@0} cm?': 'Is there a triangle with sides of lengths {@0} cm?',
    'Stačí porovnať najdlhšiu stranu so súčtom zvyšných dvoch: ${@0}+{@1}={@2}$ {@3} ${@4}$.': 'It is enough to compare the longest side with the sum of the other two: ${@0}+{@1}={@2}$ {@3} ${@4}$.',
    'Trojuholníková nerovnosť platí, trojuholník existuje.': 'The triangle inequality holds, the triangle exists.',
    'Trojuholníková nerovnosť neplatí (musí byť ostrá), trojuholník neexistuje.': 'The triangle inequality does not hold (it must be strict), the triangle does not exist.',
    'Trojuholník existuje práve vtedy, keď je najdlhšia strana kratšia ako súčet dvoch kratších.': 'A triangle exists exactly when the longest side is shorter than the sum of the two shorter ones.',
    'Aký je súčet vnútorných uhlov {@0}-uholníka (v stupňoch)?': 'What is the sum of the interior angles of a {@0}-gon (in degrees)?',
    'Uhlopriečky z jedného vrcholu ho rozdelia na ${@0}-2={@1}$ trojuholníkov: ${@2}\\cdot 180^\\circ={@3}^\\circ$.': 'The diagonals from one vertex split it into ${@0}-2={@1}$ triangles: ${@2}\\cdot 180^\\circ={@3}^\\circ$.',
    'Súčet vnútorných uhlov $n$-uholníka je $(n-2)\\cdot 180^\\circ$.': 'The interior angles of an $n$-gon add up to $(n-2)\\cdot 180^\\circ$.',
    'Akú veľkosť má vnútorný uhol pravidelného {@0}-uholníka (v stupňoch)?': 'How large is an interior angle of a regular {@0}-gon (in degrees)?',
    'Súčet uhlov je ${@0}\\cdot 180^\\circ={@1}^\\circ$, jeden uhol má ${@2}^\\circ:{@3}={@4}^\\circ$.': 'The angle sum is ${@0}\\cdot 180^\\circ={@1}^\\circ$, one angle is ${@2}^\\circ:{@3}={@4}^\\circ$.',
    'Vypočítaj súčet vnútorných uhlov a vydeľ ho počtom uhlov.': 'Work out the sum of the interior angles and divide it by the number of angles.',
    'Vnútorný uhol pravidelného mnohouholníka má ${@0}^\\circ$. Koľko má tento mnohouholník vrcholov?': 'An interior angle of a regular polygon is ${@0}^\\circ$. How many vertices does the polygon have?',
    'Vonkajší uhol má $180^\\circ-{@0}^\\circ={@1}^\\circ$ a súčet vonkajších uhlov konvexného mnohouholníka je $360^\\circ$, preto $n=360:{@2}={@3}$.': 'An exterior angle is $180^\\circ-{@0}^\\circ={@1}^\\circ$ and the exterior angles of a convex polygon add up to $360^\\circ$, so $n=360:{@2}={@3}$.',
    'Rovnica $\\frac{(n-2)\\cdot 180}{n}=\\text{uhol}$, alebo rýchlejšie cez vonkajšie uhly, ktorých súčet je $360^\\circ$.': 'Use the equation $\\frac{(n-2)\\cdot 180}{n}=\\text{angle}$, or faster the exterior angles, which add up to $360^\\circ$.',
    'rovnobežníku': 'parallelogram', 'kosoštvorci': 'rhombus',
    'V {@0} $ABCD$ má vnútorný uhol pri vrchole $A$ veľkosť ${@1}^\\circ$. Akú veľkosť má vnútorný uhol pri vrchole ${@2}$?': 'In the {@0} $ABCD$ the interior angle at the vertex $A$ is ${@1}^\\circ$. How large is the interior angle at the vertex ${@2}$?',
    'Uhly pri $A$ a $C$ sú protiľahlé, v rovnobežníku sú zhodné: ${@0}^\\circ$.': 'The angles at $A$ and $C$ are opposite, in a parallelogram they are equal: ${@0}^\\circ$.',
    'Uhly pri $A$ a $B$ sú susedné uhly rovnobežníka (pri rovnobežkách $AD$ a $BC$), ich súčet je $180^\\circ$: $180^\\circ-{@0}^\\circ={@1}^\\circ$.': 'The angles at $A$ and $B$ are adjacent angles of the parallelogram (at the parallel lines $AD$ and $BC$), their sum is $180^\\circ$: $180^\\circ-{@0}^\\circ={@1}^\\circ$.',
    'V rovnobežníku sú protiľahlé uhly zhodné a susedné uhly majú súčet $180^\\circ$.': 'In a parallelogram opposite angles are equal and adjacent angles add up to $180^\\circ$.',

    // s1-obsahy
    'Rovnoramenný lichobežník má základne $a={@0}$ cm, $c={@1}$ cm a ramená $b={@2}$ cm. Vypočítaj jeho obsah v $\\text{cm}^2$.': 'An isosceles trapezium has bases $a={@0}$ cm, $c={@1}$ cm and legs $b={@2}$ cm. Find its area in $\\text{cm}^2$.',
    '$x=\\frac{a-c}{2}={@0}$ cm, výška $v=\\sqrt{{@1}^2-{@2}^2}=\\sqrt{{@3}}={@4}$ cm. $S=\\frac{({@5}+{@6})\\cdot {@7}}{2}={@8}\\,\\text{cm}^2$.': '$x=\\frac{a-c}{2}={@0}$ cm, height $v=\\sqrt{{@1}^2-{@2}^2}=\\sqrt{{@3}}={@4}$ cm. $S=\\frac{({@5}+{@6})\\cdot {@7}}{2}={@8}\\,\\text{cm}^2$.',
    'Výškou odrež pravouhlý trojuholník s preponou $b$ a odvesnou $\\frac{a-c}{2}$. Výšku dopočítaj Pytagorovou vetou.': 'Use the height to cut off a right triangle with hypotenuse $b$ and leg $\\frac{a-c}{2}$. Find the height with Pythagoras’ theorem.',
    'Rovnoramenný lichobežník má základne $a={@0}$ cm a $c={@1}$ cm a výšku $v={@2}$ cm. Vypočítaj jeho obvod v cm.': 'An isosceles trapezium has bases $a={@0}$ cm and $c={@1}$ cm and height $v={@2}$ cm. Find its perimeter in cm.',
    '$x=\\frac{a-c}{2}={@0}$ cm, rameno $b=\\sqrt{{@1}^2+{@2}^2}=\\sqrt{{@3}}={@4}$ cm. $o={@5}+{@6}+2\\cdot {@7}={@8}$ cm.': '$x=\\frac{a-c}{2}={@0}$ cm, leg $b=\\sqrt{{@1}^2+{@2}^2}=\\sqrt{{@3}}={@4}$ cm. $o={@5}+{@6}+2\\cdot {@7}={@8}$ cm.',
    'Rameno je prepona pravouhlého trojuholníka s odvesnami $v$ a $\\frac{a-c}{2}$.': 'The leg is the hypotenuse of a right triangle with legs $v$ and $\\frac{a-c}{2}$.',
    'obvod (v cm)': 'perimeter (in cm)',
    'obsah (v $\\text{cm}^2$)': 'area (in $\\text{cm}^2$)',
    'výšku (v cm, na dve desatinné miesta)': 'height (in cm, to two decimal places)',
    'Kosoštvorec má uhlopriečky dĺžok {@0} cm a {@1} cm. Vypočítaj jeho {@2}.': 'A rhombus has diagonals of lengths {@0} cm and {@1} cm. Find its {@2}.',
    'Strana: $a=\\sqrt{{@0}^2+{@1}^2}={@2}$ cm (polovice uhlopriečok sú odvesny).': 'Side: $a=\\sqrt{{@0}^2+{@1}^2}={@2}$ cm (the halves of the diagonals are the legs).',
    '$S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$ a zároveň $S=a\\cdot v$, preto $v=\\frac{{@3}}{{@4}}\\approx {@5}$ cm.': '$S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$ and also $S=a\\cdot v$, so $v=\\frac{{@3}}{{@4}}\\approx {@5}$ cm.',
    'Uhlopriečky kosoštvorca sú na seba kolmé a rozpoľujú sa. Obsah je $\\frac{u_1u_2}{2}$, ale aj $a\\cdot v$.': 'The diagonals of a rhombus are perpendicular and bisect each other. The area is $\\frac{u_1u_2}{2}$, but also $a\\cdot v$.',
    'Rovnoramenný trojuholník má základňu {@0} cm a ramená {@1} cm. Vypočítaj jeho obsah v $\\text{cm}^2$.': 'An isosceles triangle has a base of {@0} cm and legs of {@1} cm. Find its area in $\\text{cm}^2$.',
    'Výška na základňu ju rozpolí: $v=\\sqrt{{@0}^2-{@1}^2}=\\sqrt{{@2}}={@3}$ cm. $S=\\frac{{@4}\\cdot {@5}}{2}={@6}\\,\\text{cm}^2$.': 'The height to the base bisects it: $v=\\sqrt{{@0}^2-{@1}^2}=\\sqrt{{@2}}={@3}$ cm. $S=\\frac{{@4}\\cdot {@5}}{2}={@6}\\,\\text{cm}^2$.',
    'Výška na základňu rovnoramenného trojuholníka ju delí na polovice. Použi Pytagorovu vetu.': 'The height to the base of an isosceles triangle splits it in half. Use Pythagoras’ theorem.',
    'je pravouhlý': 'it is right-angled',
    'nie je pravouhlý': 'it is not right-angled',
    'Trojuholník má strany {@0} cm. Rozhodni, či je pravouhlý.': 'A triangle has sides {@0} cm. Decide whether it is right-angled.',
    'Najdlhšia strana je {@0} cm. ${@1}^2+{@2}^2={@3}$ a ${@4}^2={@5}$.': 'The longest side is {@0} cm. ${@1}^2+{@2}^2={@3}$ and ${@4}^2={@5}$.',
    'Rovnosť platí, podľa obrátenej Pytagorovej vety je trojuholník pravouhlý.': 'The equality holds, so by the converse of Pythagoras’ theorem the triangle is right-angled.',
    'Rovnosť neplatí, trojuholník nie je pravouhlý.': 'The equality does not hold, the triangle is not right-angled.',
    'Porovnaj štvorec najdlhšej strany so súčtom štvorcov dvoch kratších strán.': 'Compare the square of the longest side with the sum of the squares of the two shorter sides.',
    'Vypočítaj výšku rovnostranného trojuholníka so stranou ${@0}$ cm (v cm, na dve desatinné miesta).': 'Find the height of an equilateral triangle with side ${@0}$ cm (in cm, to two decimal places).',
    'Výška rozpolí stranu: $v=\\sqrt{{@0}^2-\\left({@1}\\right)^2}=\\frac{{@2}\\sqrt3}{2}\\approx {@3}$ cm.': 'The height bisects the side: $v=\\sqrt{{@0}^2-\\left({@1}\\right)^2}=\\frac{{@2}\\sqrt3}{2}\\approx {@3}$ cm.',
    'Výška rovnostranného trojuholníka ho delí na dva pravouhlé trojuholníky s odvesnou $\\frac{a}{2}$ a preponou $a$.': 'The height of an equilateral triangle splits it into two right triangles with leg $\\frac{a}{2}$ and hypotenuse $a$.',
    'Vypočítaj obsah kruhového výseku s polomerom ${@0}$ cm a stredovým uhlom ${@1}^\\circ$ (v $\\text{cm}^2$, $\\pi\\approx 3{,}14$, na dve desatinné miesta).': 'Find the area of a sector with radius ${@0}$ cm and central angle ${@1}^\\circ$ (in $\\text{cm}^2$, $\\pi\\approx 3.14$, to two decimal places).',
    'Výsek so stredovým uhlom $\\alpha$ je $\\frac{\\alpha}{360^\\circ}$ celého kruhu.': 'A sector with central angle $\\alpha$ is $\\frac{\\alpha}{360^\\circ}$ of the whole circle.',
    'Vypočítaj dĺžku kruhového oblúka s polomerom ${@0}$ cm a stredovým uhlom ${@1}^\\circ$ (v cm, $\\pi\\approx 3{,}14$, na dve desatinné miesta).': 'Find the length of an arc with radius ${@0}$ cm and central angle ${@1}^\\circ$ (in cm, $\\pi\\approx 3.14$, to two decimal places).',
    'Oblúk so stredovým uhlom $\\alpha$ je $\\frac{\\alpha}{360^\\circ}$ obvodu kružnice.': 'An arc with central angle $\\alpha$ is $\\frac{\\alpha}{360^\\circ}$ of the circumference.',
    'Vypočítaj obsah medzikružia s polomermi $R={@0}$ cm a $r={@1}$ cm (v $\\text{cm}^2$, $\\pi\\approx 3{,}14$).': 'Find the area of an annulus with radii $R={@0}$ cm and $r={@1}$ cm (in $\\text{cm}^2$, $\\pi\\approx 3.14$).',
    'Od obsahu veľkého kruhu odčítaj obsah malého.': 'Subtract the area of the small circle from the area of the big one.',

    // s1-zhodnost
    'Sú dané všetky tri strany (trojuholníková nerovnosť platí).': 'All three sides are given (the triangle inequality holds).',
    'Uhol ${@0}$ leží oproti strane ${@1}$, teda medzi stranami ${@2}$ a ${@3}$ – je nimi zovretý.': 'The angle ${@0}$ lies opposite the side ${@1}$, i.e. between the sides ${@2}$ and ${@3}$ – it is enclosed by them.',
    'Uhly ${@0}$ a ${@1}$ ležia pri koncových bodoch strany ${@2}$, sú k nej priľahlé.': 'The angles ${@0}$ and ${@1}$ lie at the endpoints of the side ${@2}$, they are adjacent to it.',
    'Uhol ${@0}$ leží oproti väčšej zo strán (${@1}={@2}$ cm &gt; ${@3}={@4}$ cm).': 'The angle ${@0}$ lies opposite the longer of the sides (${@1}={@2}$ cm &gt; ${@3}={@4}$ cm).',
    'žiadna z viet': 'none of them',
    'Sú dané len uhly. Trojuholníky s rovnakými uhlami môžu mať rôzne veľké strany – sú podobné, nie nutne zhodné.': 'Only angles are given. Triangles with the same angles can have sides of different sizes – they are similar, not necessarily congruent.',
    'Uhol ${@0}$ leží oproti <em>menšej</em> strane ${@1}$. Také údaje môžu určovať dva rôzne trojuholníky, nejde o vetu Ssu.': 'The angle ${@0}$ lies opposite the <em>shorter</em> side ${@1}$. Such data can determine two different triangles, it is not the SsA theorem.',
    'O trojuholníku $ABC$ vieme: ${@0}$. Ktorá veta o zhodnosti zaručuje, že všetky trojuholníky s týmito údajmi sú navzájom zhodné?': 'About the triangle $ABC$ we know: ${@0}$. Which congruence theorem guarantees that all triangles with these data are congruent?',
    '{@0} Odpoveď: <strong>{@1}</strong>.': '{@0} Answer: <strong>{@1}</strong>.',
    'Uhol $\\alpha$ leží oproti strane $a$ (pri vrchole $A$). Zisti, či je uhol zovretý danými stranami, priľahlý k danej strane, alebo oproti niektorej z nich.': 'The angle $\\alpha$ lies opposite the side $a$ (at the vertex $A$). Decide whether the angle is enclosed by the given sides, adjacent to the given side, or opposite one of them.',
    'Konštruujeme pravouhlý trojuholník $ABC$ s preponou $|AB|={@0}$ cm a výškou $v_c={@1}$ cm. Koľko riešení má úloha v jednej polrovine určenej priamkou $AB$?': 'We construct a right triangle $ABC$ with hypotenuse $|AB|={@0}$ cm and height $v_c={@1}$ cm. How many solutions does the task have in one half-plane determined by the line $AB$?',
    'Vrchol $C$ leží na Talesovej kružnici nad $AB$ s polomerom ${@0}$ cm a na rovnobežke s $AB$ vo vzdialenosti ${@1}$ cm.': 'The vertex $C$ lies on the Thales circle over $AB$ with radius ${@0}$ cm and on the line parallel to $AB$ at distance ${@1}$ cm.',
    'Keďže ${@0}&lt;{@1}$, rovnobežka pretína polkružnicu v dvoch bodoch.': 'Since ${@0}&lt;{@1}$, the parallel line crosses the semicircle at two points.',
    'Keďže ${@0}={@1}$, rovnobežka sa polkružnice dotýka v jednom bode (trojuholník je rovnoramenný).': 'Since ${@0}={@1}$, the parallel line touches the semicircle at one point (the triangle is isosceles).',
    'Keďže ${@0}&gt;{@1}$, rovnobežka polkružnicu nepretína, úloha nemá riešenie.': 'Since ${@0}&gt;{@1}$, the parallel line does not meet the semicircle, the task has no solution.',
    'Počet riešení: {@0}.': 'Number of solutions: {@0}.',
    'Porovnaj výšku s polomerom Talesovej kružnice, ktorý je polovicou prepony.': 'Compare the height with the radius of the Thales circle, which is half the hypotenuse.',
    'Konštruujeme trojuholník $ABC$, ak $|AB|={@0}$ cm, výška $v_c={@1}$ cm a ťažnica $t_c={@2}$ cm. Koľko riešení má úloha v jednej polrovine určenej priamkou $AB$?': 'We construct a triangle $ABC$ with $|AB|={@0}$ cm, height $v_c={@1}$ cm and median $t_c={@2}$ cm. How many solutions does the task have in one half-plane determined by the line $AB$?',
    'Vrchol $C$ leží na kružnici so stredom v strede $S$ strany $AB$ a polomerom $t_c={@0}$ cm a na rovnobežke s $AB$ vo vzdialenosti ${@1}$ cm.': 'The vertex $C$ lies on the circle with centre at the midpoint $S$ of the side $AB$ and radius $t_c={@0}$ cm, and on the line parallel to $AB$ at distance ${@1}$ cm.',
    'Keďže ${@0}&gt;{@1}$, kružnica pretína rovnobežku v dvoch bodoch.': 'Since ${@0}&gt;{@1}$, the circle crosses the parallel line at two points.',
    'Keďže $t_c=v_c$, kružnica sa rovnobežky dotýka (ťažnica splýva s výškou).': 'Since $t_c=v_c$, the circle touches the parallel line (the median coincides with the height).',
    'Ťažnica nemôže byť kratšia ako výška, úloha nemá riešenie.': 'A median cannot be shorter than the height, the task has no solution.',
    'Vrchol $C$ je vo vzdialenosti $t_c$ od stredu strany $AB$ a vo vzdialenosti $v_c$ od priamky $AB$.': 'The vertex $C$ is at distance $t_c$ from the midpoint of the side $AB$ and at distance $v_c$ from the line $AB$.',
    'majú rovnakú vzdialenosť od bodov $A$ a $B$': 'are equidistant from the points $A$ and $B$',
    'os úsečky $AB$': 'the perpendicular bisector of $AB$',
    'ležia vnútri uhla $AVB$ a majú rovnakú vzdialenosť od oboch jeho ramien': 'lie inside the angle $AVB$ and are equidistant from both its arms',
    'os uhla $AVB$': 'the bisector of the angle $AVB$',
    'majú od bodu $S$ vzdialenosť 3 cm': 'are at distance 3 cm from the point $S$',
    'kružnica so stredom $S$ a polomerom 3 cm': 'the circle with centre $S$ and radius 3 cm',
    'sú vrcholmi pravého uhla $AXB$': 'are vertices of a right angle $AXB$',
    'Talesova kružnica nad priemerom $AB$ bez bodov $A$, $B$': 'the Thales circle with diameter $AB$ without the points $A$, $B$',
    'majú od priamky $p$ vzdialenosť 2 cm': 'are at distance 2 cm from the line $p$',
    'dve rovnobežky s $p$ vo vzdialenosti 2 cm': 'two lines parallel to $p$ at distance 2 cm',
    'majú od bodu $S$ vzdialenosť najviac 3 cm': 'are at distance at most 3 cm from the point $S$',
    'kruh so stredom $S$ a polomerom 3 cm': 'the disc with centre $S$ and radius 3 cm',
    'Čo tvorí množina všetkých bodov $X$ roviny, ktoré {@0}?': 'What is the set of all points $X$ of the plane that {@0}?',
    'Množinou všetkých takých bodov je {@0}.': 'The set of all such points is {@0}.',
    'Spomeň si na základné množiny bodov: os úsečky, os uhla, kružnica, rovnobežky a Talesova kružnica.': 'Recall the basic loci: the perpendicular bisector, the angle bisector, the circle, parallel lines and the Thales circle.',
    'Platí $\\triangle ABC\\cong\\triangle {@0}$, pričom $|AB|={@1}$ cm, $|BC|={@2}$ cm a $|CA|={@3}$ cm. Akú dĺžku má strana ${@4}{@5}$ (v cm)?': 'We have $\\triangle ABC\\cong\\triangle {@0}$ with $|AB|={@1}$ cm, $|BC|={@2}$ cm and $|CA|={@3}$ cm. How long is the side ${@4}{@5}$ (in cm)?',
    'Zápis určuje dvojice vrcholov $A\\leftrightarrow {@0}$, $B\\leftrightarrow {@1}$, $C\\leftrightarrow {@2}$. Strane ${@3}{@4}$ zodpovedá strana ${@5}{@6}$, teda $|{@7}{@8}|={@9}$ cm.': 'The notation gives the pairs of vertices $A\\leftrightarrow {@0}$, $B\\leftrightarrow {@1}$, $C\\leftrightarrow {@2}$. The side ${@3}{@4}$ corresponds to the side ${@5}{@6}$, so $|{@7}{@8}|={@9}$ cm.',
    'V zápise zhodnosti si zodpovedajú vrcholy na rovnakých miestach: prvý s prvým, druhý s druhým, tretí s tretím.': 'In the congruence notation, vertices in the same positions correspond: first with first, second with second, third with third.',
    'Platí $\\triangle ABC\\cong\\triangle {@0}$, pričom $\\alpha={@1}^\\circ$ a $\\beta={@2}^\\circ$. Akú veľkosť má vnútorný uhol trojuholníka ${@3}$ pri vrchole ${@4}$?': 'We have $\\triangle ABC\\cong\\triangle {@0}$ with $\\alpha={@1}^\\circ$ and $\\beta={@2}^\\circ$. How large is the interior angle of the triangle ${@3}$ at the vertex ${@4}$?',
    'Vrcholu ${@0}$ zodpovedá vrchol ${@1}${@2}. Uhol pri ${@3}$ má teda ${@4}^\\circ$.': 'The vertex ${@0}$ corresponds to the vertex ${@1}${@2}. So the angle at ${@3}$ is ${@4}^\\circ$.',
    'Zisti, ktorému vrcholu trojuholníka $ABC$ zodpovedá daný vrchol. Tretí uhol dopočítaš zo súčtu $180^\\circ$.': 'Find which vertex of the triangle $ABC$ corresponds to the given vertex. The third angle follows from the sum $180^\\circ$.',

    // s1-umernost
    'prvý; druhý; tretí': 'first; second; third',
    'Traja kamaráti si rozdelili {@0} € v pomere ${@1}:{@2}:{@3}$. Koľko eur dostal každý? Zadaj sumy v poradí oddelené bodkočiarkou.': 'Three friends shared €{@0} in the ratio ${@1}:{@2}:{@3}$. How many euros did each get? Enter the amounts in order, separated by semicolons.',
    'Dielov je ${@0}+{@1}+{@2}={@3}$, jeden diel je ${@4}:{@5}={@6}$ €. Sumy: ${@7}\\cdot {@8}={@9}$, ${@10}\\cdot {@11}={@12}$, ${@13}\\cdot {@14}={@15}$ €.': 'There are ${@0}+{@1}+{@2}={@3}$ parts, one part is ${@4}:{@5}={@6}$ €. The amounts: ${@7}\\cdot {@8}={@9}$, ${@10}\\cdot {@11}={@12}$, ${@13}\\cdot {@14}={@15}$ €.',
    'Sčítaj členy pomeru – to je počet dielov. Celok vydeľ počtom dielov.': 'Add the terms of the ratio – that is the number of parts. Divide the whole by the number of parts.',
    'väčšia; menšia': 'greater; smaller',
    'Dve čísla sú v pomere ${@0}:{@1}$ a ich rozdiel je {@2}. Urči obe čísla (najprv väčšie, potom menšie).': 'Two numbers are in the ratio ${@0}:{@1}$ and their difference is {@2}. Find both numbers (the greater first, then the smaller).',
    'Čísla sú ${@0}k$ a ${@1}k$. Rozdiel: ${@2}k={@3}$, teda $k={@4}$. Čísla sú ${@5}$ a ${@6}$.': 'The numbers are ${@0}k$ and ${@1}k$. Difference: ${@2}k={@3}$, so $k={@4}$. The numbers are ${@5}$ and ${@6}$.',
    'Čísla v pomere $a:b$ zapíš ako $ak$ a $bk$ a zostav rovnicu.': 'Write numbers in the ratio $a:b$ as $ak$ and $bk$ and set up an equation.',
    'Na mape s mierkou $1:{@0}$ je vzdialenosť dvoch obcí ${@1}$ cm. Aká je skutočná vzdialenosť v kilometroch?': 'On a map with scale $1:{@0}$ the distance between two villages is ${@1}$ cm. What is the real distance in kilometres?',
    'Skutočnosť je ${@0}$-krát väčšia: ${@1}\\cdot {@2}={@3}$ cm $={@4}$ km (1 km = 100 000 cm).': 'Reality is ${@0}$ times larger: ${@1}\\cdot {@2}={@3}$ cm $={@4}$ km (1 km = 100 000 cm).',
    'Vzdialenosť z mapy vynásob číslom $n$ a výsledok v centimetroch preveď na kilometre.': 'Multiply the map distance by $n$ and convert the result from centimetres to kilometres.',
    'Skutočná vzdialenosť dvoch miest je ${@0}$ km. Akú dlhú úsečku (v cm) nakreslíme na mape s mierkou $1:{@1}$?': 'The real distance between two places is ${@0}$ km. How long a segment (in cm) do we draw on a map with scale $1:{@1}$?',
    '${@0}$ km $={@1}$ cm. Na mape: ${@2}:{@3}={@4}$ cm.': '${@0}$ km $={@1}$ cm. On the map: ${@2}:{@3}={@4}$ cm.',
    'Skutočnú vzdialenosť preveď na centimetre a vydeľ číslom $n$.': 'Convert the real distance to centimetres and divide by $n$.',
    'Úsečka dlhá ${@0}$ cm na mape zodpovedá skutočnej vzdialenosti ${@1}$ km. Aká je mierka mapy $1:n$? Zadaj $n$.': 'A segment ${@0}$ cm long on the map corresponds to a real distance of ${@1}$ km. What is the scale of the map $1:n$? Enter $n$.',
    '${@0}$ km $={@1}$ cm, $n={@2}:{@3}={@4}$. Mierka je $1:{@5}$.': '${@0}$ km $={@1}$ cm, $n={@2}:{@3}={@4}$. The scale is $1:{@5}$.',
    'Obe vzdialenosti vyjadri v rovnakých jednotkách a vydeľ skutočnú vzdialenosť vzdialenosťou na mape.': 'Express both distances in the same units and divide the real distance by the map distance.',
    '{@0} kg ovocia stojí ${@1}$ €. Koľko eur zaplatíme za {@2} kg toho istého ovocia?': '{@0} kg of fruit costs ${@1}$ €. How many euros do we pay for {@2} kg of the same fruit?',
    'Priama úmernosť: cena za 1 kg je ${@0}:{@1}={@2}$ €, za {@3} kg zaplatíme ${@4}\\cdot {@5}={@6}$ €.': 'Direct proportionality: the price of 1 kg is ${@0}:{@1}={@2}$ €, for {@3} kg we pay ${@4}\\cdot {@5}={@6}$ €.',
    'Koľkokrát viac kilogramov, toľkokrát vyššia cena. Vypočítaj cenu za 1 kg.': 'However many times more kilograms, that many times higher the price. Work out the price of 1 kg.',
    'Nepriama úmernosť: súčin počtu robotníkov a dní je stály. ${@0}\\cdot {@1}={@2}\\cdot x$, teda $x={@3}$ ({@4}).': 'Inverse proportionality: the product of the number of workers and days is constant. ${@0}\\cdot {@1}={@2}\\cdot x$, so $x={@3}$ ({@4}).',
    'Viac robotníkov potrebuje menej času. Stály je súčin (robotníci × dni).': 'More workers need less time. The product (workers × days) is constant.',
    'priama úmernosť': 'direct proportionality',
    'nepriama úmernosť': 'inverse proportionality',
    'ani priama, ani nepriama úmernosť': 'neither direct nor inverse proportionality',
    'Aký vzťah je medzi veličinami: {@0}?': 'What is the relationship between the quantities: {@0}?',
    'cena nakúpeného tovaru a jeho množstvo pri stálej cene za kus': 'the cost of goods bought and their quantity at a fixed price per item',
    'dráha prejdená stálou rýchlosťou a čas jazdy': 'the distance travelled at a constant speed and the travel time',
    'obvod štvorca a dĺžka jeho strany': 'the perimeter of a square and the length of its side',
    'počet rovnako výkonných robotníkov a čas potrebný na danú prácu': 'the number of equally productive workers and the time needed for a given job',
    'rýchlosť auta a čas potrebný na prejdenie danej trasy': 'the speed of a car and the time needed to cover a given route',
    'počet rovnakých dielov, na ktoré rozdelíme koláč, a veľkosť jedného dielu': 'the number of equal pieces a cake is cut into and the size of one piece',
    'obsah štvorca a dĺžka jeho strany': 'the area of a square and the length of its side',
    'vek človeka a jeho výška': 'a person’s age and their height',
    'cena taxíka (nástupné plus cena za km) a počet prejdených km': 'the price of a taxi ride (fixed fee plus a price per km) and the number of km travelled',
    'Ak jednu veličinu zväčšíme $k$-krát, aj druhá sa zväčší $k$-krát; ich podiel je stály. Ide o priamu úmernosť.': 'If one quantity is multiplied by $k$, the other is multiplied by $k$ too; their quotient is constant. It is direct proportionality.',
    'Ak jednu veličinu zväčšíme $k$-krát, druhá sa $k$-krát zmenší; ich súčin je stály. Ide o nepriamu úmernosť.': 'If one quantity is multiplied by $k$, the other is divided by $k$; their product is constant. It is inverse proportionality.',
    'Ani podiel, ani súčin veličín nie je stály (napr. pri dvojnásobnej hodnote jednej veličiny sa druhá nezmení dvojnásobne ani na polovicu). Nejde o úmernosť.': 'Neither the quotient nor the product of the quantities is constant (e.g. when one quantity doubles, the other neither doubles nor halves). It is not a proportionality.',
    'Skús jednu veličinu zdvojnásobiť. Zdvojnásobí sa druhá, klesne na polovicu, alebo ani jedno?': 'Try doubling one quantity. Does the other double, halve, or neither?',
    '{@0} číslo {@1} v pomere ${@2}:{@3}$.': '{@0} the number {@1} in the ratio ${@2}:{@3}$.',
    'Zväčši': 'Enlarge', 'Zmenši': 'Reduce',
    'Zmena v pomere ${@0}:{@1}$ znamená násobenie zlomkom $\\frac{{@2}}{{@3}}$: ${@4}\\cdot\\frac{{@5}}{{@6}}={@7}$.': 'A change in the ratio ${@0}:{@1}$ means multiplying by the fraction $\\frac{{@2}}{{@3}}$: ${@4}\\cdot\\frac{{@5}}{{@6}}={@7}$.',
    'Zmeniť číslo v pomere $p:q$ znamená vynásobiť ho číslom $\\frac{p}{q}$.': 'Changing a number in the ratio $p:q$ means multiplying it by $\\frac{p}{q}$.',

    // s1-percenta
    '{@0} % z neznámeho čísla je {@1}. Urči toto číslo.': '{@0} % of an unknown number is {@1}. Find the number.',
    'Percentová časť je ${@0}$, počet percent ${@1}$, hľadáme základ: $z=\\frac{{@2}\\cdot 100}{{@3}}={@4}$.': 'The percentage part is ${@0}$, the rate ${@1}$, we are looking for the base: $z=\\frac{{@2}\\cdot 100}{{@3}}={@4}$.',
    'Najprv zisti, koľko je 1 %, potom 100 %.': 'First find out how much 1 % is, then 100 %.',
    'Koľko percent je {@0} z {@1}?': 'What percentage of {@1} is {@0}?',
    'Percentovú časť vydeľ základom a vynásob 100.': 'Divide the percentage part by the base and multiply by 100.',
    'zdražel': 'went up', 'zlacnel': 'went down',
    'Tovar najprv {@0} o {@1} % a potom {@2} o {@3} %. O koľko percent sa zmenila jeho cena oproti pôvodnej? (Zníženie zadaj záporným číslom.)': 'The price of an item first {@0} by {@1} % and then {@2} by {@3} %. By what percentage did its price change compared with the original? (Enter a decrease as a negative number.)',
    'Celkový násobiteľ: ${@0}\\cdot {@1}={@2}$. Zmena je ${@3}\\,\\%${@4}.': 'Overall multiplier: ${@0}\\cdot {@1}={@2}$. The change is ${@3}\\,\\%${@4}.',
    '(zlacnenie)': '(a decrease)', '(zdraženie)': '(an increase)',
    'Každú zmenu vyjadri násobiteľom (napr. $+20\\,\\%$ je $1{,}2$, $-15\\,\\%$ je $0{,}85$) a násobitele vynásob.': 'Express each change as a multiplier (e.g. $+20\\,\\%$ is $1.2$, $-15\\,\\%$ is $0.85$) and multiply the multipliers.',
    'Po zľave {@0} % stojí bicykel {@1} €. Aká bola pôvodná cena (v eurách)?': 'After a {@0} % discount a bicycle costs €{@1}. What was the original price (in euros)?',
    'Zľavnená cena je ${@0}\\,\\%$ pôvodnej: $z\\cdot {@1}={@2}$, teda $z={@3}:{@4}={@5}$ €.': 'The discounted price is ${@0}\\,\\%$ of the original: $z\\cdot {@1}={@2}$, so $z={@3}:{@4}={@5}$ €.',
    'Pozor, zľava sa počíta z pôvodnej ceny. Zľavnená cena je $(100-p)\\,\\%$ pôvodnej.': 'Careful, the discount is calculated from the original price. The discounted price is $(100-p)\\,\\%$ of the original.',
    'Cena výrobku vrátane 20 % DPH je {@0} €. Aká je cena bez DPH (v eurách)?': 'The price of a product including 20 % VAT is €{@0}. What is the price without VAT (in euros)?',
    'Cena s DPH je $120\\,\\%$ ceny bez DPH: $z={@0}:1{,}2={@1}$ €. (Nie je to ${@2}$ mínus 20 % z ${@3}$!)': 'The price with VAT is $120\\,\\%$ of the price without VAT: $z={@0}:1.2={@1}$ €. (It is not ${@2}$ minus 20 % of ${@3}$!)',
    'DPH sa pripočítava k cene bez dane, ktorá je základom (100 %).': 'VAT is added to the price without tax, which is the base (100 %).',
    'Zaokrúhli číslo ${@0}$ na {@1}.': 'Round the number ${@0}$ to the nearest {@1}.',
    'Prvá vynechaná cifra (hneď za miestom, na ktoré zaokrúhľujeme) je ${@0}$, preto zaokrúhľujeme {@1}: ${@2}\\approx {@3}$.': 'The first dropped digit (right after the place we round to) is ${@0}$, so we round {@1}: ${@2}\\approx {@3}$.',
    'nahor': 'up', 'nadol': 'down',
    'Rozhoduje prvá vynechaná cifra: 0 až 4 nadol, 5 až 9 nahor.': 'The first dropped digit decides: 0 to 4 down, 5 to 9 up.',
    'Zaokrúhli číslo ${@0}$ na {@1} {@2}.': 'Round the number ${@0}$ to {@1} {@2}.',
    'platnú cifru': 'significant figure', 'platné cifry': 'significant figures', 'platných cifier': 'significant figures',
    'Platné cifry počítame od prvej nenulovej cifry, nuly pred ňou sa nerátajú. Ponecháme {@0} a podľa nasledujúcej cifry zaokrúhlime: ${@1}\\approx {@2}$.': 'Significant figures are counted from the first non-zero digit, the zeros before it do not count. We keep {@0} and round according to the next digit: ${@1}\\approx {@2}$.',
    'prvú platnú cifru': 'the first significant figure',
    'prvé {@0} platné cifry': 'the first {@0} significant figures',
    'Nuly na začiatku desatinného čísla nie sú platné cifry.': 'Zeros at the start of a decimal number are not significant figures.',
    'Bez kalkulačky odhadni výsledok ${@0}\\cdot {@1}$. Ktorá hodnota je najbližšia?': 'Without a calculator, estimate ${@0}\\cdot {@1}$. Which value is the closest?',
    'Zaokrúhlime na jednu platnú cifru: ${@0}\\approx {@1}$, ${@2}\\approx {@3}$, ${@4}\\cdot {@5}={@6}$. (Presne: ${@7}$.)': 'Round to one significant figure: ${@0}\\approx {@1}$, ${@2}\\approx {@3}$, ${@4}\\cdot {@5}={@6}$. (Exactly: ${@7}$.)',
    'Zaokrúhli oba činitele na jednu platnú cifru a vynásob ich.': 'Round both factors to one significant figure and multiply them.',
    // typické chyby a kroky riešenia (mistakes, steps, choiceHints)
    // s1-obory
    "Zlomok $\\frac{{@0}}{99}$ ešte vykráť na základný tvar.": 'Reduce the fraction $\\frac{{@0}}{99}$ to lowest terms.',
    "Perióda sa opakuje donekonečna, preto ${@0}$ nie je $\\frac{{@1}}{100}$. Odčítaním $100x-x$ sa perióda odstráni.": 'The repeating block goes on forever, so ${@0}$ is not $\\frac{{@1}}{100}$. Subtracting $100x-x$ removes the repeating part.',
    "Označ $x={@0}$. Koľko je $100x-x=99x$?": 'Let $x={@0}$. What is $100x-x=99x$?',
    "Vyjadri $x$ ako zlomok a vykráť ho. Zadaj čitateľa a menovateľa.": 'Express $x$ as a fraction and reduce it. Enter the numerator and the denominator.',
    "Toto je výsledok inej operácie. Prienik tvoria čísla z oboch intervalov naraz, zjednotenie čísla aspoň z jedného a rozdiel čísla z prvého intervalu, ktoré nie sú v druhom.": 'This is the result of a different operation. The intersection consists of the numbers in both intervals, the union of the numbers in at least one of them and the difference of the numbers of the first interval that are not in the second.',
    "Interval má správne krajné body, ale skontroluj ľavý z nich: patrí do výsledku, alebo nie?": 'The endpoints are right, but check the left one: does it belong to the result or not?',
    "Interval má správne krajné body, ale skontroluj pravý z nich: patrí do výsledku, alebo nie?": 'The endpoints are right, but check the right one: does it belong to the result or not?',
    "Interval má správne krajné body, ale skontroluj, či do výsledku patria.": 'The endpoints are right, but check whether they belong to the result.',
    "Zlomok $\\frac{{@0}}{90}$ ešte vykráť na základný tvar.": 'Reduce the fraction $\\frac{{@0}}{90}$ to lowest terms.',
    "Perióda nezačína hneď za desatinnou čiarkou, opakuje sa len cifra {@0}. Najprv vynásob číslo desiatimi, aby perióda začínala hneď za čiarkou.": 'The repeating block does not start right after the decimal point, only the digit {@0} repeats. First multiply the number by ten so that the repeating block starts right after the point.',
    "Označ $x={@0}$. Koľko je $100x-10x=90x$?": 'Let $x={@0}$. What is $100x-10x=90x$?',
    "Aké je najmenšie celé číslo, ktoré do množiny patrí?": 'What is the smallest integer in the set?',
    "Aké je najväčšie celé číslo, ktoré do množiny patrí?": 'What is the largest integer in the set?',
    "Koľko celých čísel je od najmenšieho po najväčšie (vrátane oboch)?": 'How many integers are there from the smallest to the largest (both included)?',
    "Krajný bod, ktorý do množiny nepatrí (okrúhla zátvorka alebo ostrá nerovnosť), nepočítaj.": 'Do not count an endpoint that is not in the set (round bracket or strict inequality).',
    "Dĺžka intervalu nie je počet celých čísel v ňom. Nájdi najmenšie a najväčšie celé číslo, ktoré do neho patrí.": 'The length of the interval is not the number of integers in it. Find the smallest and the largest integer that belong to it.',
    // s1-absolutna
    "Skontroluj krajné body: pri neostrej nerovnosti do riešenia patria, pri ostrej nie.": 'Check the endpoints: with a non-strict inequality they belong to the solution, with a strict one they do not.',
    "Hľadáš čísla, ktoré majú od ${@0}$ veľkú vzdialenosť, teda tie mimo úsečky medzi krajnými bodmi.": 'You are looking for numbers far from ${@0}$, i.e. those outside the segment between the endpoints.',
    "Hľadáš čísla, ktoré majú od ${@0}$ malú vzdialenosť, teda tie medzi dvoma krajnými bodmi, nie mimo nich.": 'You are looking for numbers close to ${@0}$, i.e. those between the two endpoints, not outside them.',
    "Výraz ${@0}$ je vzdialenosť čísla $x$ od čísla ${@1}$. Pozor na znamienko stredu.": 'The expression ${@0}$ is the distance of $x$ from the number ${@1}$. Watch the sign of the centre.',
    "Vyrieš rovnicu ${@0}={@1}$.": 'Solve the equation ${@0}={@1}$.',
    "Zadaj obe riešenia pôvodnej rovnice.": 'Enter both solutions of the original equation.',
    "Druhé riešenie nie je opačné číslo k prvému. Vyrieš zvlášť rovnicu ${@0}={@1}$.": 'The second solution is not the opposite of the first one. Solve the equation ${@0}={@1}$ separately.',
    "Koľko je výraz vnútri, $|{@0}|-{@1}\\cdot|{@2}|$?": 'What is the inner expression $|{@0}|-{@1}\\cdot|{@2}|$?',
    "Akú absolútnu hodnotu má tento výsledok?": 'What is the absolute value of this result?',
    "Najprv vypočítaj absolútne hodnoty čísel ${@0}$ a ${@1}$, až potom násob a odčítaj.": 'First find the absolute values of ${@0}$ and ${@1}$, only then multiply and subtract.',
    "Aké je najmenšie celé číslo, ktoré nerovnicu spĺňa?": 'What is the smallest integer that satisfies the inequality?',
    "Aké je najväčšie celé číslo, ktoré nerovnicu spĺňa?": 'What is the largest integer that satisfies the inequality?',
    "Koľko celých čísel je spolu?": 'How many integers are there in total?',
    "Pri ostrej nerovnosti krajné body ${@0}$ a ${@1}$ do riešenia nepatria, nepočítaj ich.": 'With a strict inequality the endpoints ${@0}$ and ${@1}$ do not belong to the solution, do not count them.',
    "Pri neostrej nerovnosti krajné body ${@0}$ a ${@1}$ do riešenia patria, započítaj ich.": 'With a non-strict inequality the endpoints ${@0}$ and ${@1}$ belong to the solution, count them too.',
    "Koľko je $|{@0}-{@1}|$?": 'What is $|{@0}-{@1}|$?',
    "Odčítaj získané hodnoty. Aký je výsledok?": 'Subtract the values. What is the result?',
    "Absolútna hodnota záporného čísla je kladné číslo. Výraz vnútri absolútnej hodnoty najprv vypočítaj a potom z neho vezmi absolútnu hodnotu.": 'The absolute value of a negative number is positive. First evaluate the expression inside, then take its absolute value.',
    // s1-delitelnost
    "Aký je ciferný súčet známych cifier?": 'What is the sum of the known digits?',
    "Ktorú cifru treba pridať, aby bol ciferný súčet násobkom 9?": 'Which digit makes the digit sum a multiple of 9?',
    "S touto cifrou je číslo deliteľné tromi, ale nie deviatimi. Ciferný súčet musí byť násobkom 9.": 'With this digit the number is divisible by three but not by nine. The digit sum must be a multiple of 9.',
    "Aký je najväčší spoločný deliteľ čísel ${@0}$ a ${@1}$?": 'What is the greatest common divisor of ${@0}$ and ${@1}$?',
    "Aký je ich najmenší spoločný násobok?": 'What is their least common multiple?',
    "Súčin čísel je ich spoločný násobok, ale nie najmenší. Vydeľ ho ich najväčším spoločným deliteľom.": 'The product of the numbers is a common multiple, but not the least one. Divide it by their greatest common divisor.',
    "Exponent prvočísla v deliteli môže byť aj 0. Násob preto čísla o 1 väčšie ako exponenty.": 'The exponent of a prime in a divisor can also be 0. So multiply the numbers that are 1 greater than the exponents.',
    "Počty možností pre jednotlivé prvočísla sa násobia, nie sčítajú.": 'The numbers of choices for the individual primes are multiplied, not added.',
    "Súčin intervalov je spoločný násobok, ale nemusí byť najmenší. Hľadaj najmenší spoločný násobok.": 'The product of the intervals is a common multiple, but not necessarily the least one. Look for the least common multiple.',
    "Toto je najväčší spoločný deliteľ. Autobusy odídu spolu v čase, ktorý je násobkom oboch intervalov.": 'This is the greatest common divisor. The buses leave together at a time that is a multiple of both intervals.',
    "Koľkokrát za sebou môžeš číslo ${@0}$ vydeliť dvoma bez zvyšku? To je exponent $a$.": 'How many times in a row can you divide ${@0}$ by two without a remainder? That is the exponent $a$.',
    "Výsledok deľ tromi, kým sa dá. Koľkokrát? To je exponent $b$.": 'Divide the result by three as long as possible. How many times? That is the exponent $b$.',
    "Zvyšok deľ piatimi. Koľkokrát? To je exponent $c$.": 'Divide what is left by five. How many times? That is the exponent $c$.',
    "Zadaj exponenty $a; b; c$.": 'Enter the exponents $a; b; c$.',
    "Toto je dĺžka jedného kúska. Úloha sa pýta, koľko kúskov dostaneme z oboch lát spolu.": 'This is the length of one piece. The question asks how many pieces we get from both slats together.',
    "Aký je najmenší spoločný menovateľ?": 'What is the least common denominator?',
    "sčítaj": 'add', "odčítaj": 'subtract',
    "Rozšír oba zlomky na tento menovateľ a {@0} čitatele. Aký čitateľ dostaneš?": 'Rewrite both fractions with this denominator and {@0} the numerators. What numerator do you get?',
    "Zapíš výsledok v základnom tvare.": 'Write the result in lowest terms.',
    "Zlomky nesčítavaj ani neodčítavaj po čitateľoch a menovateľoch zvlášť. Najprv ich preveď na spoločného menovateľa.": 'Do not add or subtract the numerators and the denominators separately. First rewrite the fractions with a common denominator.',
    "Kúsok musí deliť obe dĺžky, hľadáš teda spoločného deliteľa, nie násobok.": 'A piece must divide both lengths, so you are looking for a common divisor, not a multiple.',
    // s1-vyrazy
    "Toto je $a^2+b^2$. Pri $(a-b)^2$ treba od neho ešte odčítať $2ab$.": 'This is $a^2+b^2$. For $(a-b)^2$ you still have to subtract $2ab$.',
    "Koľko je $(a+b)^{@0}$?": 'What is $(a+b)^{@0}$?',
    "Odčítaj potrebný násobok súčinu $ab$. Akú hodnotu má výraz ${@0}$?": 'Subtract the right multiple of the product $ab$. What is the value of ${@0}$?',
    "Vyber pred zátvorku spoločný činiteľ $ab$ – súčin a súčet sa potom násobia, nesčítavajú.": 'Factor out the common factor $ab$ – the product and the sum are then multiplied, not added.',
    "Krátiť sa dá len spoločný činiteľ celého čitateľa a celého menovateľa, nie jednotlivé sčítance. Oba najprv rozlož na súčin.": 'You can only cancel a common factor of the whole numerator and the whole denominator, not individual terms. Factorise both first.',
    "Výsledok je obrátený. Skontroluj, ktorý činiteľ ostal v čitateli a ktorý v menovateli.": 'The result is upside down. Check which factor stayed in the numerator and which in the denominator.',
    "Čitateľ je druhá mocnina dvojčlena, po vykrátení jedného činiteľa v ňom jeden ostane.": 'The numerator is the square of a binomial; after cancelling one factor, one remains.',
    "Pred druhou časťou je mínus: odčítaš celý výsledok, preto sa zmenia znamienka všetkých jeho členov.": 'There is a minus before the second part: you subtract the whole result, so the signs of all its terms change.',
    "Pri umocnení dvojčlena nezabudni na stredný člen $2ab$.": 'When squaring a binomial, do not forget the middle term $2ab$.',
    "Uprav ${@0}$ na tvar $Ax^2+Bx+C$. Zadaj koeficienty.": 'Write ${@0}$ in the form $Ax^2+Bx+C$. Enter the coefficients.',
    "Od prvého výsledku odčítaj druhý. Zadaj koeficienty $A; B; C$.": 'Subtract the second result from the first. Enter the coefficients $A; B; C$.',
    "Pozor na znamienko: čitateľ aj menovateľ obsahujú ten istý činiteľ, nie opačný.": 'Watch the sign: the numerator and the denominator contain the same factor, not opposite ones.',
    "Z menovateľa po vykrátení ostane číslo.": 'A number remains in the denominator after cancelling.',
    "$(a+b)^3$ nie je $a^3+b^3$, obsahuje aj členy $3a^2b+3ab^2$.": '$(a+b)^3$ is not $a^3+b^3$, it also contains the terms $3a^2b+3ab^2$.',
    "Menovateľ je druhá mocnina rozdielu, nie súčin súčtu a rozdielu.": 'The denominator is the square of a difference, not the product of a sum and a difference.',
    "Z čitateľa vyberieš pred zátvorku len číslo, po vykrátení v ňom $x$ neostane.": 'Only a number can be factored out of the numerator; no $x$ remains in it after cancelling.',
    "Výsledok je zlomok: v menovateli ostane jeden činiteľ.": 'The result is a fraction: one factor remains in the denominator.',
    "Vykrátil si nesprávny činiteľ. Rozlož čitateľ aj menovateľ a nájdi činiteľ, ktorý majú spoločný.": 'You cancelled the wrong factor. Factorise the numerator and the denominator and find the factor they share.',
    "$(a+b)^2$ nie je $a^2+b^2$, obsahuje aj člen $2ab$.": '$(a+b)^2$ is not $a^2+b^2$, it also contains the term $2ab$.',
    // s1-mnohoclen
    "Hornerova schéma pre $c={@0}$ začína číslom ${@1}$. Aké je druhé číslo (koeficient vynásob $c$ a pripočítaj ďalší)?": "Horner's scheme for $c={@0}$ starts with ${@1}$. What is the second number (multiply by $c$ and add the next coefficient)?",
    "Aké je tretie číslo?": 'What is the third number?',
    "Aké je posledné číslo, teda zvyšok?": 'What is the last number, i.e. the remainder?',
    "Zvyšok po delení $(x-c)$ je $p(c)$. Dvojčlen $({@0})$ má tvar $x-c$ pre $c={@1}$, pozor na znamienko.": 'The remainder after dividing by $(x-c)$ is $p(c)$. The binomial $({@0})$ has the form $x-c$ with $c={@1}$, watch the sign.',
    "Zoskupením prvých dvoch a posledných dvoch členov dostaneš spoločný činiteľ $(x-c)$. Aké je $c$?": 'Grouping the first two and the last two terms gives a common factor $(x-c)$. What is $c$?',
    "Druhý činiteľ je $x^2-{@0}$. Aké má korene?": 'The other factor is $x^2-{@0}$. What are its roots?',
    "Zadaj všetky korene mnohočlena.": 'Enter all roots of the polynomial.',
    "Pozor na znamienko: činiteľ $(x-c)$ je nulový pre $x=c$, nie pre $x=-c$.": 'Watch the sign: the factor $(x-c)$ is zero for $x=c$, not for $x=-c$.',
    "Korene činiteľa $x^2-{@0}$ sú čísla, ktorých druhá mocnina je {@1}.": 'The roots of the factor $x^2-{@0}$ are the numbers whose square is {@1}.',
    "{@0}Aký súčet $x_1+x_2$ musia mať hľadané čísla?": '{@0}What sum $x_1+x_2$ must the numbers have?',
    "Najprv vyber ${@0}$ pred zátvorku.": 'First factor out ${@0}$. ',
    "Aký súčin $x_1\\cdot x_2$ musia mať?": 'What product $x_1\\cdot x_2$ must they have?',
    "Ktoré dve čísla to sú?": 'Which two numbers are they?',
    "Pozri sa na znamienko stredného člena, to rozhoduje o znamienku v zátvorke.": 'Look at the sign of the middle term, it decides the sign in the bracket.',
    "To je rozklad rozdielu štvorcov. Zadaný výraz má tri členy.": 'That is the factorisation of a difference of squares. The given expression has three terms.',
    "Zamenil si koeficient pri $x$ a absolútny člen. Over roznásobením.": 'You swapped the coefficient of $x$ and the constant term. Check by expanding.',
    "Druhá mocnina dvojčlena má aj stredný člen $2ab$, zadaný výraz ho nemá.": 'The square of a binomial also has the middle term $2ab$; the given expression does not.',
    "Roznásob a porovnaj: dostaneš opačné znamienka, ako má zadaný výraz.": 'Expand and compare: you get the opposite signs to the given expression.',
    "Pozor na znamienko stredného člena v druhej zátvorke: je opačné ako znamienko v prvej zátvorke.": 'Watch the sign of the middle term in the second bracket: it is opposite to the sign in the first bracket.',
    "Tretia mocnina dvojčlena má aj stredné členy $3a^2b$ a $3ab^2$, zadaný výraz má len dva členy.": 'The cube of a binomial also has the middle terms $3a^2b$ and $3ab^2$; the given expression has only two terms.',
    "V druhej zátvorke chýba stredný člen $ab$. Over roznásobením.": 'The middle term $ab$ is missing in the second bracket. Check by expanding.',
    // s1-menovatel
    "Vynásob „do kríža“ a členy s $x$ daj naľavo, čísla napravo. Aký koeficient bude pri $x$?": 'Cross-multiply and move the terms with $x$ to the left and the numbers to the right. What is the coefficient of $x$?',
    "Aké číslo bude na pravej strane?": 'What number is on the right-hand side?',
    "Aké je $x$? Over aj podmienky.": 'What is $x$? Check the conditions too.',
    "Pri násobení „do kríža“ násob čitateľa jedného zlomku menovateľom druhého zlomku, nie svojím vlastným.": 'When cross-multiplying, multiply the numerator of one fraction by the denominator of the other fraction, not by its own.',
    "Pre $x={@0}$ je menovateľ nulový. Také číslo riešením byť nemôže, porovnaj koreň s podmienkou.": 'For $x={@0}$ the denominator is zero. Such a number cannot be a solution; compare the root with the condition.',
    "Vypočítaný koreň porovnaj s podmienkou. Ak ju spĺňa, je to riešenie.": 'Compare the root you found with the condition. If it satisfies it, it is a solution.',
    "Pre ktoré číslo $x$ nemá rovnica zmysel (podmienka)?": 'For which number $x$ does the equation make no sense (condition)?',
    "Vynásob obe strany menovateľom $({@0})$. Pravú stranu zapíš v tvare $px+q$: zadaj $p; q$.": 'Multiply both sides by the denominator $({@0})$. Write the right-hand side in the form $px+q$: enter $p; q$.',
    "Vyrieš vzniknutú lineárnu rovnicu. Aké je $x$?": 'Solve the resulting linear equation. What is $x$?',
    "Číslom ${@0}$ vynásob celý menovateľ $({@1})$, teda aj jeho druhý člen.": 'Multiply the whole denominator $({@1})$ by ${@0}$, including its second term.',
    "Spoločný menovateľ je $x^2-{@0}$. Pre ktoré $x$ nemá rovnica zmysel? Zadaj obe čísla.": 'The common denominator is $x^2-{@0}$. For which $x$ does the equation make no sense? Enter both numbers.',
    "Vynásob rovnicu spoločným menovateľom a uprav ľavú stranu na tvar $px+q$. Zadaj $p; q$.": 'Multiply the equation by the common denominator and write the left-hand side as $px+q$. Enter $p; q$.',
    "Aké je $x$?": 'What is $x$?',
    "Každý čitateľ vynásob tým činiteľom, ktorý jeho menovateľu chýba do spoločného menovateľa – nie jeho vlastným menovateľom.": 'Multiply each numerator by the factor its denominator is missing to the common denominator – not by its own denominator.',
    // s1-nerovnice
    "Aké sú nulové body čitateľa a menovateľa? Zadaj ich oddelené bodkočiarkou.": 'What are the zeros of the numerator and the denominator? Enter them separated by a semicolon.',
    "Urči znamienko podielu na každom z troch intervalov a vyber riešenie.": 'Find the sign of the quotient on each of the three intervals and choose the solution.',
    "Intervaly máš správne, skontroluj krajné body: nulový bod menovateľa nepatrí nikdy, nulový bod čitateľa len pri neostrej nerovnosti.": 'The intervals are right, check the endpoints: the zero of the denominator never belongs, the zero of the numerator only with a non-strict inequality.',
    "Vybral si intervaly s opačným znamienkom podielu. Over znamienko dosadením jedného čísla z každého intervalu.": 'You chose the intervals where the quotient has the opposite sign. Check the sign by substituting one number from each interval.',
    "Členy s $x$ preveď doľava, čísla doprava. Aký koeficient bude pri $x$?": 'Move the terms with $x$ to the left and the numbers to the right. What is the coefficient of $x$?',
    "Vydeľ koeficientom pri $x$ (pozor na znamienko). Aké je riešenie?": 'Divide by the coefficient of $x$ (watch the sign). What is the solution?',
    "Delíš kladným číslom, znak nerovnosti sa preto nemení.": 'You are dividing by a positive number, so the inequality sign does not change.',
    "Skontroluj krajný bod: pri ostrej nerovnosti do riešenia nepatrí (okrúhla zátvorka), pri neostrej patrí.": 'Check the endpoint: with a strict inequality it does not belong to the solution (round bracket), with a non-strict one it does.',
    "Aké sú nulové body činiteľov? Zadaj ich oddelené bodkočiarkou.": 'What are the zeros of the factors? Enter them separated by a semicolon.',
    "Urči znamienko súčinu na každom z troch intervalov a vyber riešenie.": 'Find the sign of the product on each of the three intervals and choose the solution.',
    "Intervaly máš správne, skontroluj krajné body: nulové body patria do riešenia len pri neostrej nerovnosti.": 'The intervals are right, check the endpoints: the zeros belong to the solution only with a non-strict inequality.',
    "Vybral si intervaly s opačným znamienkom súčinu. Over znamienko dosadením jedného čísla z každého intervalu.": 'You chose the intervals where the product has the opposite sign. Check the sign by substituting one number from each interval.',
    "Delil si záporným číslom ${@0}$, vtedy sa znak nerovnosti obráti.": 'You divided by the negative number ${@0}$; then the inequality sign is reversed.',
    "Pri ostrej nerovnosti nulové body do riešenia nepatria, nepočítaj ich.": 'With a strict inequality the zeros do not belong to the solution, do not count them.',
    "Pri neostrej nerovnosti patria do riešenia aj nulové body, výraz je v nich rovný nule.": 'With a non-strict inequality the zeros also belong to the solution, the expression equals zero there.',
    "Nulový bod menovateľa do riešenia nikdy nepatrí, výraz v ňom nie je definovaný.": 'The zero of the denominator never belongs to the solution, the expression is not defined there.',
    "Pri neostrej nerovnosti patrí do riešenia aj nulový bod čitateľa, výraz je v ňom rovný nule.": 'With a non-strict inequality the zero of the numerator also belongs to the solution, the expression equals zero there.',
    // s1-slovne
    "Aká je rýchlosť lode po prúde, $v+w$ (v km/h)?": 'What is the speed of the boat downstream, $v+w$ (in km/h)?',
    "Aká je rýchlosť lode proti prúdu, $v-w$ (v km/h)?": 'What is the speed of the boat upstream, $v-w$ (in km/h)?',
    "Vyrieš sústavu. Zadaj $v; w$.": 'Solve the system. Enter $v; w$.',
    "Toto sú rýchlosti po prúde a proti prúdu. Rýchlosť lode $v$ a prúdu $w$ z nich ešte vypočítaj.": 'These are the speeds downstream and upstream. You still have to work out the speed of the boat $v$ and of the current $w$ from them.',
    "Vek dieťaťa označ $x$. Z rovnice ${@0}x+{@1}={@2}(x+{@3})$ vypočítaj, aký koeficient bude pri $x$ po prevedení členov s $x$ doľava.": "Let $x$ be the child's age. From the equation ${@0}x+{@1}={@2}(x+{@3})$ find the coefficient of $x$ after moving the terms with $x$ to the left.",
    "Koľko rokov má dieťa teraz?": 'How old is the child now?',
    "O {@0} {@1} bude starší aj rodič, nielen dieťa. Číslo {@2} pripočítaj k obom vekom.": 'In {@0} {@1} the parent will be older too, not only the child. Add {@2} to both ages.',
    "Toto je vek rodiča. Úloha sa pýta na vek dieťaťa.": "This is the parent's age. The question asks for the child's age.",
    "Časy práce sa neodčítavajú. Vyjadri, akú časť haly vymaľuje prvý maliar za spoločný čas, zvyšok urobí druhý.": 'Working times are not subtracted. Work out what part of the hall the first painter paints in the joint time; the second one does the rest.',
    "Koľko litrov čistej soli je v {@0} l {@1} % roztoku?": 'How many litres of pure salt are there in {@0} l of a {@1} % solution?',
    "Zostav rovnicu pre množstvo soli. Koľko litrov {@0} % roztoku treba pridať?": 'Set up an equation for the amount of salt. How many litres of the {@0} % solution must be added?',
    "Po pridaní roztoku sa zväčší aj celkový objem: výsledný roztok má ${@0}+x$ litrov.": 'Adding the solution also increases the total volume: the final solution has ${@0}+x$ litres.',
    "Rovnaké množstvo by stačilo, len keby bola výsledná koncentrácia presne v strede medzi {@0} % a {@1} %. Zostav rovnicu pre množstvo soli.": 'The same amount would only do if the final concentration were exactly halfway between {@0} % and {@1} %. Set up an equation for the amount of salt.',
    "Keď čerpadlá pracujú spolu, napustia bazén rýchlejšie ako každé samo. Časy sa nesčítavajú.": 'Working together, the pumps fill the pool faster than each one alone. The times are not added.',
    "Spoločný čas nie je priemer časov: musí byť kratší ako čas rýchlejšieho čerpadla.": 'The joint time is not the average of the times: it must be shorter than the time of the faster pump.',
    "Aký náskok (v km) má cyklista v okamihu, keď motocyklista vyráža?": 'What lead (in km) does the cyclist have when the motorcyclist sets off?',
    "O koľko kilometrov sa náskok zmenší za každú hodinu?": 'By how many kilometres does the lead shrink every hour?',
    "Za koľko hodín motocyklista dobehne cyklistu?": 'After how many hours does the motorcyclist catch up with the cyclist?',
    "Toto je čas cyklistu, ktorý vyrazil skôr. Úloha sa pýta na čas od vyrazenia motocyklistu.": 'This is the time of the cyclist, who set off earlier. The question asks for the time since the motorcyclist set off.',
    "Pri dobiehaní sa náskok zmenšuje o rozdiel rýchlostí, nie o ich súčet.": 'When catching up, the lead shrinks by the difference of the speeds, not by their sum.',
    // s1-uhly
    "Aký veľký je vonkajší uhol tohto mnohouholníka?": 'How large is an exterior angle of this polygon?',
    "Koľko má mnohouholník vrcholov?": 'How many vertices does the polygon have?',
    "Súčet $360^\\circ$ majú vonkajšie uhly, nie vnútorné. Najprv vypočítaj vonkajší uhol.": 'It is the exterior angles that add up to $360^\\circ$, not the interior ones. First find the exterior angle.',
    "Vrcholy $A$ a $B$ sú susedné, nie protiľahlé. Susedné uhly rovnobežníka majú súčet $180^\\circ$.": 'The vertices $A$ and $B$ are adjacent, not opposite. Adjacent angles of a parallelogram add up to $180^\\circ$.',
    "Vrcholy $A$ a $C$ sú protiľahlé, nie susedné. Protiľahlé uhly rovnobežníka sú zhodné.": 'The vertices $A$ and $C$ are opposite, not adjacent. Opposite angles of a parallelogram are equal.',
    "Rovnoramenný trojuholník má pri základni dva zhodné uhly, od $180^\\circ$ odčítaj oba.": 'An isosceles triangle has two equal base angles; subtract both from $180^\\circ$.',
    "Súhlasné a striedavé uhly ležia pri dvoch rôznych priesečníkoch. Tieto uhly majú spoločný vrchol.": 'Corresponding and alternate angles lie at two different intersections. These angles share a vertex.',
    "Susedné uhly majú jedno rameno spoločné. Ramená týchto uhlov sú navzájom opačné polpriamky.": 'Adjacent angles share one arm. The arms of these angles are opposite rays.',
    "Vrcholové uhly ležia oproti sebe a nemajú spoločné rameno. Tieto uhly majú jedno rameno spoločné.": 'Vertical angles lie opposite each other and share no arm. These angles share one arm.',
    "Vrcholové a susedné uhly majú spoločný vrchol. Tieto uhly ležia pri dvoch rôznych priesečníkoch.": 'Vertical and adjacent angles share a vertex. These angles lie at two different intersections.',
    "Striedavé uhly ležia na opačných stranách priečky. Tieto uhly majú pri oboch priesečníkoch rovnakú polohu.": 'Alternate angles lie on opposite sides of the transversal. These angles are in the same position at both intersections.',
    "Súhlasné uhly majú pri oboch priesečníkoch rovnakú polohu. Tieto ležia na opačných stranách priečky.": 'Corresponding angles are in the same position at both intersections. These lie on opposite sides of the transversal.',
    "Tieto uhly sú zhodné, netreba ich odčítať od $180^\\circ$.": 'These angles are equal, there is no need to subtract from $180^\\circ$.',
    "Tieto uhly nie sú zhodné: jeden je ostrý a druhý tupý, spolu majú $180^\\circ$.": 'These angles are not equal: one is acute and the other obtuse, together they make $180^\\circ$.',
    "Aký je súčet vnútorných uhlov (v stupňoch)?": 'What is the sum of the interior angles (in degrees)?',
    "Aký veľký je jeden vnútorný uhol?": 'How large is one interior angle?',
    "Toto je vonkajší uhol pravidelného mnohouholníka. Vnútorný uhol je s ním susedný.": 'This is the exterior angle of the regular polygon. The interior angle is adjacent to it.',
    "Na koľko trojuholníkov rozdelia {@0}-uholník uhlopriečky z jedného vrcholu?": 'Into how many triangles do the diagonals from one vertex divide a {@0}-gon?',
    "Uhlopriečky z jedného vrcholu rozdelia $n$-uholník na $n-2$ trojuholníkov, nie na $n$.": 'The diagonals from one vertex divide an $n$-gon into $n-2$ triangles, not $n$.',
    "Aký veľký je vnútorný uhol $\\beta$ (susedný s vonkajším uhlom)?": 'How large is the interior angle $\\beta$ (adjacent to the exterior angle)?',
    "Aký veľký je uhol $\\gamma$?": 'How large is the angle $\\gamma$?',
    "Daný uhol pri $B$ je vonkajší, nie vnútorný. Vnútorný uhol $\\beta$ je s ním susedný.": 'The given angle at $B$ is exterior, not interior. The interior angle $\\beta$ is adjacent to it.',
    "Vonkajší uhol sa rovná súčtu $\\alpha+\\gamma$, preto $\\gamma$ dostaneš odčítaním, nie sčítaním.": 'The exterior angle equals $\\alpha+\\gamma$, so you get $\\gamma$ by subtracting, not adding.',
    "Porovnaj najdlhšiu stranu so súčtom dvoch kratších. Ak je kratšia ako tento súčet, trojuholník existuje.": 'Compare the longest side with the sum of the two shorter ones. If it is shorter than this sum, the triangle exists.',
    "Súčet dvoch kratších strán sa rovná tretej strane, vrcholy by ležali na jednej priamke. Trojuholníková nerovnosť musí byť ostrá.": 'The sum of the two shorter sides equals the third side, the vertices would lie on one line. The triangle inequality must be strict.',
    "Porovnaj najdlhšiu stranu so súčtom dvoch kratších strán.": 'Compare the longest side with the sum of the two shorter sides.',
    "Koľko stupňov spolu majú oba uhly pri základni?": 'How many degrees do the two base angles have together?',
    "Aký veľký je jeden uhol pri základni?": 'How large is one base angle?',
    "Toto je súčet oboch uhlov pri základni. Uhly sú zhodné, výsledok ešte rozdeľ na polovicu.": 'This is the sum of both base angles. The angles are equal, so halve the result.',
    // s1-obsahy
    "Aká dlhá je odvesna $x=\\frac{a-c}{2}$ (v cm)?": 'How long is the leg $x=\\frac{a-c}{2}$ (in cm)?',
    "Vypočítaj rameno $b$ Pytagorovou vetou (v cm).": 'Work out the leg $b$ with Pythagoras\' theorem (in cm).',
    "Vypočítaj výšku $v$ Pytagorovou vetou (v cm).": 'Work out the height $v$ with Pythagoras\' theorem (in cm).',
    "Aký je obvod lichobežníka (v cm)?": 'What is the perimeter of the trapezium (in cm)?',
    "Aký je obsah lichobežníka (v $\\text{cm}^2$)?": 'What is the area of the trapezium (in $\\text{cm}^2$)?',
    "Výška nie je rameno. Rameno je šikmé, dopočítaj ho Pytagorovou vetou.": 'The height is not the leg. The leg is slanted, work it out with Pythagoras\' theorem.',
    "Lichobežník má dve ramená, obe patria do obvodu.": 'A trapezium has two legs, both belong to the perimeter.',
    "Obsah lichobežníka je $\\frac{(a+c)\\cdot v}{2}$, nezabudni deliť dvoma.": 'The area of a trapezium is $\\frac{(a+c)\\cdot v}{2}$, do not forget to divide by two.',
    "Rameno nie je výška lichobežníka. Výšku dopočítaj z pravouhlého trojuholníka s preponou $b$.": 'The leg is not the height of the trapezium. Work out the height from the right triangle with hypotenuse $b$.',
    "Aká dlhá je strana kosoštvorca (v cm)?": 'How long is the side of the rhombus (in cm)?',
    "Aký je obvod kosoštvorca (v cm)?": 'What is the perimeter of the rhombus (in cm)?',
    "Polovice uhlopriečok sú odvesny pravouhlého trojuholníka. Aký obsah má jeden z týchto štyroch trojuholníkov (v $\\text{cm}^2$)?": 'Half-diagonals are the legs of a right triangle. What is the area of one of these four triangles (in $\\text{cm}^2$)?',
    "Aký je obsah kosoštvorca (v $\\text{cm}^2$)?": 'What is the area of the rhombus (in $\\text{cm}^2$)?',
    "Z $S=a\\cdot v$ vypočítaj výšku (v cm, na dve desatinné miesta).": 'From $S=a\\cdot v$ work out the height (in cm, to two decimal places).',
    "Uhlopriečky nie sú strany kosoštvorca. Stranu vypočítaj z polovíc uhlopriečok Pytagorovou vetou.": 'The diagonals are not the sides of the rhombus. Work out the side from the half-diagonals with Pythagoras\' theorem.',
    "Obsah kosoštvorca je polovica súčinu uhlopriečok.": 'The area of a rhombus is half the product of the diagonals.',
    "Obsah kosoštvorca je polovica súčinu uhlopriečok, nezabudni deliť dvoma.": 'The area of a rhombus is half the product of the diagonals, do not forget to divide by two.',
    "Výška rozpolí stranu. Koľko je $\\left(\\frac{a}{2}\\right)^2$?": 'The height halves the side. What is $\\left(\\frac{a}{2}\\right)^2$?',
    "Koľko je $v^2=a^2-\\left(\\frac{a}{2}\\right)^2$?": 'What is $v^2=a^2-\\left(\\frac{a}{2}\\right)^2$?',
    "Aká je výška (v cm, na dve desatinné miesta)?": 'What is the height (in cm, to two decimal places)?',
    "Strana trojuholníka je prepona: druhú mocninu polovice strany od jej druhej mocniny odčítaj, nepripočítaj.": 'The side of the triangle is the hypotenuse: subtract the square of half the side from its square, do not add it.',
    "Strany len pripomínajú pytagorovskú trojicu. Over výpočtom, či platí presná rovnosť $a^2+b^2=c^2$.": 'The sides only resemble a Pythagorean triple. Check by calculation whether $a^2+b^2=c^2$ holds exactly.',
    "Over to výpočtom: najdlhšia strana je prepona. Porovnaj jej druhú mocninu so súčtom druhých mocnín dvoch kratších strán.": 'Check it by calculation: the longest side is the hypotenuse. Compare its square with the sum of the squares of the two shorter sides.',
    "Výška rozpolí základňu. Aká dlhá je polovica základne (v cm)?": 'The height halves the base. How long is half of the base (in cm)?',
    "Vypočítaj výšku na základňu Pytagorovou vetou (v cm).": 'Work out the height to the base with Pythagoras\' theorem (in cm).',
    "Aký je obsah trojuholníka (v $\\text{cm}^2$)?": 'What is the area of the triangle (in $\\text{cm}^2$)?',
    "Rameno nie je výška. Výšku na základňu vypočítaj Pytagorovou vetou.": 'The leg is not the height. Work out the height to the base with Pythagoras\' theorem.',
    "Obsah trojuholníka je polovica súčinu základne a výšky.": 'The area of a triangle is half the product of the base and the height.',
    "Obvod kružnice je $2\\pi r$, nezabudni na dvojku.": 'The circumference is $2\\pi r$, do not forget the two.',
    "Toto je obsah výseku. Dĺžka oblúka vychádza z obvodu kružnice $2\\pi r$.": 'This is the area of the sector. The arc length comes from the circumference $2\\pi r$.',
    "Toto je obsah celého kruhu. Výsek je len jeho časť $\\frac{\\alpha}{360^\\circ}$.": 'This is the area of the whole circle. The sector is only the part $\\frac{\\alpha}{360^\\circ}$ of it.',
    "Toto je dĺžka oblúka. Obsah výseku vychádza z obsahu kruhu $\\pi r^2$.": 'This is the arc length. The area of the sector comes from the area of the circle $\\pi r^2$.',
    "Koľko je $R^2-r^2$?": 'What is $R^2-r^2$?',
    "Vynásob číslom $\\pi\\approx 3{,}14$. Aký je obsah medzikružia (v $\\text{cm}^2$)?": 'Multiply by $\\pi\\approx 3.14$. What is the area of the annulus (in $\\text{cm}^2$)?',
    "Obsah medzikružia nie je $\\pi(R-r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého.": 'The area of an annulus is not $\\pi(R-r)^2$. Subtract the area of the small circle from the area of the large one.',
    // s1-zhodnost
    "Uhol ${@0}$ neleží oproti žiadnej z daných strán. Pozri sa, kde leží vzhľadom na strany ${@1}$ a ${@2}$.": 'The angle ${@0}$ is not opposite either of the given sides. Look where it lies relative to the sides ${@1}$ and ${@2}$.',
    "Je daná len jedna strana. Veta sus potrebuje dve strany a uhol nimi zovretý.": 'Only one side is given. SAS needs two sides and the angle between them.',
    "Uhol ${@0}$ nie je zovretý danými stranami, leží oproti strane ${@1}$.": 'The angle ${@0}$ is not between the given sides, it is opposite the side ${@1}$.',
    "Uhol leží oproti väčšej z daných strán, a to na jednoznačné určenie trojuholníka stačí.": 'The angle is opposite the longer of the given sides, and that is enough to determine the triangle uniquely.',
    "Veta usu potrebuje aj stranu. Samotné uhly určujú len tvar trojuholníka, nie jeho veľkosť.": 'ASA also needs a side. The angles alone determine only the shape of the triangle, not its size.',
    "Pri vete Ssu musí uhol ležať oproti väčšej z daných strán. Tu leží oproti menšej.": 'For SsA the angle must be opposite the longer of the given sides. Here it is opposite the shorter one.',
    "Ťažnica je vzdialenosť bodu $C$ od stredu strany $AB$. Nemôže byť kratšia ako výška, ktorá je najkratšou vzdialenosťou bodu $C$ od priamky $AB$.": 'The median is the distance of $C$ from the midpoint of $AB$. It cannot be shorter than the height, which is the shortest distance of $C$ from the line $AB$.',
    "Polomer Talesovej kružnice je polovica prepony, výšku porovnávaj s ním, nie s celou preponou.": 'The radius of the Thales circle is half the hypotenuse; compare the height with it, not with the whole hypotenuse.',
    "Počet riešení závisí od toho, či je výška menšia, rovná alebo väčšia ako polomer Talesovej kružnice.": 'The number of solutions depends on whether the height is less than, equal to or greater than the radius of the Thales circle.',
    "Vrcholy si zodpovedajú podľa poradia v zápise zhodnosti, nie podľa abecedy.": 'The vertices correspond according to their order in the congruence statement, not alphabetically.',
    // s1-umernost
    "Koľko eur stojí 1 kg ovocia?": 'How many euros does 1 kg of fruit cost?',
    "Koľko eur zaplatíme za {@0} kg?": 'How many euros do we pay for {@0} kg?',
    "Cena ${@0}$ € je za {@1} kg, nie za 1 kg. Najprv zisti cenu jedného kilogramu.": 'The price €${@0}$ is for {@1} kg, not for 1 kg. First find the price of one kilogram.',
    "Zlomok si obrátil: zmeniť v pomere ${@0}:{@1}$ znamená vynásobiť zlomkom s čitateľom {@2} a menovateľom {@3}.": 'You turned the fraction upside down: changing in the ratio ${@0}:{@1}$ means multiplying by the fraction with numerator {@2} and denominator {@3}.',
    "Keď jednu veličinu zdvojnásobíš, druhá sa nezdvojnásobí, ale zmenší.": 'When you double one quantity, the other one does not double, it decreases.',
    "Keď jednu veličinu zdvojnásobíš, druhá neklesne na polovicu. Zmenia sa obe rovnakým smerom.": 'When you double one quantity, the other one does not halve. Both change in the same direction.',
    "Obe veličiny síce rastú spolu, ale pri dvojnásobku jednej sa druhá nezdvojnásobí. Podiel veličín nie je stály.": 'Both quantities do grow together, but when one doubles, the other does not double. Their ratio is not constant.',
    "Za koľko dní by prácu urobil jeden robotník?": 'How many days would one worker need for the job?',
    "Vydeľ tento počet dní počtom robotníkov v druhej skupine. Koľko dní to bude?": 'Divide this number of days by the number of workers in the second group. How many days is it?',
    "Ide o nepriamu úmernosť: stály je súčin počtu robotníkov a dní, nie ich podiel.": 'This is inverse proportion: the product of the number of workers and days is constant, not their ratio.',
    "Koľko centimetrov je skutočná vzdialenosť?": 'How many centimetres is the real distance?',
    "Preveď ju na kilometre.": 'Convert it to kilometres.',
    "Koľko dielov je spolu?": 'How many parts are there in total?',
    "Koľko eur je jeden diel?": 'How many euros is one part?',
    "Koľko eur dostal každý? Zadaj sumy v poradí.": 'How many euros did each get? Enter the amounts in order.',
    "Suma sa nedelí každému rovnako, ale podľa pomeru: každý dostane toľko dielov, koľko udáva jeho číslo v pomere.": 'The amount is not shared equally but in the ratio: each gets as many parts as his number in the ratio says.',
    "Čísla zapíš ako ${@0}k$ a ${@1}k$. Aké je $k$?": 'Write the numbers as ${@0}k$ and ${@1}k$. What is $k$?',
    "Urči obe čísla (najprv väčšie, potom menšie).": 'Find both numbers (the larger first, then the smaller).',
    "Rozdiel čísel nie je jeden diel. Rozdiel zodpovedá toľkým dielom, o koľko sa líšia čísla pomeru.": 'The difference of the numbers is not one part. It corresponds to as many parts as the difference of the ratio numbers.',
    // s1-percenta
    "Koľko je 1 % neznámeho čísla?": 'What is 1 % of the unknown number?',
    "Koľko je 100 %?": 'What is 100 %?',
    "Číslo {@0} je len {@1} % hľadaného čísla, nie celok. Zisti, koľko je 1 %, a vynásob 100.": 'The number {@0} is only {@1} % of the unknown number, not the whole. Find 1 % and multiply by 100.',
    "DPH sa počíta z ceny bez dane, nie z ceny s daňou. Cena s DPH je $120\\,\\%$ ceny bez DPH.": 'VAT is calculated from the price without tax, not from the price with tax. The price with VAT is $120\\,\\%$ of the price without VAT.',
    "Skontroluj rád výsledku: spočítaj nuly v zaokrúhlených činiteľoch.": 'Check the order of magnitude: count the zeros in the rounded factors.',
    "Koľko percent pôvodnej ceny je zľavnená cena?": 'What percentage of the original price is the discounted price?',
    "Aká bola pôvodná cena (v eurách)?": 'What was the original price (in euros)?',
    "Zľava sa počíta z pôvodnej ceny, nie zo zľavnenej. Zľavnená cena je ${@0}\\,\\%$ pôvodnej.": 'The discount is calculated from the original price, not from the discounted one. The discounted price is ${@0}\\,\\%$ of the original.',
    "Aký je celkový násobiteľ ceny (súčin oboch násobiteľov)?": 'What is the overall multiplier of the price (the product of both multipliers)?',
    "O koľko percent sa cena zmenila? (Zníženie zadaj záporným číslom.)": 'By what percentage did the price change? (Enter a decrease as a negative number.)',
    "Percentá zmien sa nesčítavajú: druhá zmena sa počíta z už zmenenej ceny. Zmeny vyjadri násobiteľmi a vynásob ich.": 'Percentage changes do not add up: the second change is calculated from the already changed price. Express the changes as multipliers and multiply them.',
    "desatinné miesto": 'decimal place', "desatinné miesta": 'decimal places', "desatinných miest": 'decimal places',
    "Zaokrúhlil si na {@0} {@1}. Platné cifry sa počítajú až od prvej nenulovej cifry.": 'You rounded to {@0} {@1}. Significant figures are counted from the first non-zero digit.',
    "Delíš v opačnom poradí: časť vydeľ celkom (základom), nie celok časťou.": 'You are dividing the wrong way round: divide the part by the whole (the base), not the whole by the part.',
    "Cifry si len odrezal. Ak je prvá vynechaná cifra 5 až 9, zaokrúhľuje sa nahor.": 'You only cut off the digits. If the first dropped digit is 5 to 9, round up.'
  }
});
