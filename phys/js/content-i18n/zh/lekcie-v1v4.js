/* 简体中文：大学课程，等级 v1–v4（js/rocniky/v1.js, v2.js, v3.js, v4.js）。结构与键：js/content-i18n.js。 */
CONTENT_I18N.add('zh', {
  lessons: {
    'v1-kinematika': {
      title: '运动学：位置、速度与加速度',
      summary: '不考虑成因的运动描述：位置、速度和加速度如何随时间变化。',
      theory: [
        `<p>运动学描述物体的运动，而不追究运动的成因。基本量是<strong>位置</strong> $x(t)$，即物体相对于选定原点和方向的坐标。</p>`,
        `<p><strong>速度</strong>是单位时间内位置的变化：$v=\\frac{\\Delta x}{\\Delta t}$。它是矢量，因此带有决定运动方向的正负号。<strong>加速度</strong>是单位时间内速度的变化：$a=\\frac{\\Delta v}{\\Delta t}$，单位为 $\\text{m/s}^2$。</p>`,
        `<p>在<strong>匀变速直线运动</strong>中加速度为常量。速度随之线性变化，$v=v_0+a\\,t$，位置则随时间的平方变化：$x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$。</p>`,
        `<p><strong>为什么要乘以时间：</strong>加速度表示每一秒速度变化多少米每秒。因此在时间 $t$ 内速度变化 $a\\,t$。若 $a$ 与 $v_0$ 符号相同，物体加速；否则减速。</p>`,
        { fig: 'v1v4-kinematika-vt', caption: '匀变速运动的速度-时间图像是一条直线：其斜率为加速度 a，起点为初速度 v₀。' }
      ],
      examples: [
        { task: '汽车静止（$v_0=0$），以恒定加速度 $a=2\\,\\text{m/s}^2$ 加速。经过 $5\\,\\text{s}$ 后其速度是多少？',
          steps: ['代入 $v=v_0+a\\,t$：$v=0+2\\cdot 5$。', '<strong>结果：$v=10\\,\\text{m/s}$</strong>'] },
        { task: '火车的速度为 $v_0=12\\,\\text{m/s}$，以加速度 $a=-3\\,\\text{m/s}^2$ 制动。经过 $2\\,\\text{s}$ 后其速度是多少？',
          steps: ['$v=v_0+a\\,t=12+(-3)\\cdot 2$。', '$v=12-6$。', '<strong>结果：$v=6\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-newton': {
      title: '牛顿运动定律',
      summary: '第一、第二和第三定律：物体何时不做匀速运动，以及力与加速度之间的关系。',
      theory: [
        `<p><strong>第一定律</strong>（惯性定律）：只要作用于物体的合力不为零，物体就保持静止或做匀速直线运动。惯性是质量的性质，而不是力的结果。</p>`,
        `<p><strong>第二定律</strong>：加速度与合力成正比，与质量成反比，$\\vec a=\\frac{\\vec F}{m}$，即 $\\vec F=m\\,\\vec a$。合力是作用于物体的所有力的矢量和；方向相反的力相减。</p>`,
        `<p><strong>第三定律</strong>：若物体 A 对物体 B 施加一个力，则 B 对 A 施加一个大小相等、方向相反的力。这两个力作用于<em>不同</em>的物体，因此不会互相抵消。</p>`,
        `<p><strong>道理何在：</strong>力是运动变化的原因。质量越大，获得相同加速度所需的力也越大，因为质量阻碍速度的变化。</p>`,
        { fig: 'v1v4-sily-dve', caption: '方向相反的力相减。合力 F₁ − F₂ 使物体获得加速度 a = (F₁ − F₂)/m。' }
      ],
      examples: [
        { task: '质量 $m=4\\,\\text{kg}$ 的物体受到拉力 $F=20\\,\\text{N}$，同一直线上有摩擦力 $F_t=8\\,\\text{N}$ 与之反向作用。加速度是多少？',
          steps: ['合力：$F_v=20-8=12\\,\\text{N}$。', '加速度：$a=\\frac{F_v}{m}=\\frac{12}{4}$。', '<strong>结果：$a=3\\,\\text{m/s}^2$</strong>'] },
        { task: '合力 $12\\,\\text{N}$ 作用于质量 $m=3\\,\\text{kg}$ 的物体。加速度是多少？',
          steps: ['$a=\\frac{F}{m}=\\frac{12}{3}$。', '<strong>结果：$a=4\\,\\text{m/s}^2$</strong>'] }
      ]
    },
    'v1-hybnost': {
      title: '力、动量与角动量',
      summary: '动量作为运动的度量，力的冲量，以及绕某点转动时的角动量。',
      theory: [
        `<p>物体的<strong>动量</strong>是其质量与速度的乘积：$\\vec p=m\\,\\vec v$。质量大且速度快的物体动量大，也更难停下。</p>`,
        `<p>牛顿第二定律也可以用动量表示：$\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$。乘积 $\\vec F\\,\\Delta t$ 称为<strong>力的冲量</strong>，它等于动量的变化：$\\Delta \\vec p=\\vec F\\,\\Delta t$。</p>`,
        `<p>质点相对于固定点 $O$ 的<strong>角动量</strong>是位置矢量与动量的矢量积：$\\vec L=\\vec r\\times\\vec p$，其大小为 $L=r\\,p\\sin\\alpha$，其中 $\\alpha$ 为 $\\vec r$ 与 $\\vec p$ 之间的夹角。</p>`,
        `<p><strong>道理何在：</strong>力只有作用足够长的时间才会改变动量。短促的冲击即使力很大，冲量也很小。只有当力矩 $\\vec M=\\vec r\\times\\vec F$ 作用于物体时，角动量才会改变。</p>`
      ],
      examples: [
        { task: '质量 $m=0{,}02\\,\\text{kg}$ 的子弹以速度 $v=300\\,\\text{m/s}$ 飞行。其动量是多少？',
          steps: ['$p=m\\,v=0{,}02\\cdot 300$。', '<strong>结果：$p=6\\,\\text{kg\\,m/s}$</strong>'] },
        { task: '力 $F=50\\,\\text{N}$ 作用于物体 $4\\,\\text{s}$。其动量的变化是多少？',
          steps: ['力的冲量：$\\Delta p=F\\,\\Delta t=50\\cdot 4$。', '<strong>结果：$\\Delta p=200\\,\\text{kg\\,m/s}$</strong>'] }
      ]
    },
    'v1-praca-energia': {
      title: '功、能量与功率',
      summary: '力的功、物体的动能，以及作为单位时间内做功的功率。',
      theory: [
        `<p>恒力沿位移 $\\vec s$ 所做的<strong>功</strong>为 $W=F\\,s\\cos\\alpha$，其中 $\\alpha$ 为力与位移之间的夹角。与位移垂直的力不做功。</p>`,
        `<p>物体的<strong>动能</strong>为 $E_k=\\frac{1}{2}m v^2$。合力所做的功等于动能的变化：$W=\\Delta E_k$。这就是动能定理。</p>`,
        `<p><strong>功率</strong>是单位时间内所做的功：$P=\\frac{W}{t}$，单位为瓦特，$1\\,\\text{W}=1\\,\\text{J/s}$。</p>`,
        `<p><strong>为什么有 $v^2$：</strong>速度加倍时，物体的能量变为四倍，因为使其停下需要四倍的功。因此速度越高，事故越危险。</p>`,
        { fig: 'v1v4-praca-uhol', caption: '只有与位移平行的力分量做功，即 F·cos α。与位移垂直的分量不做功。' }
      ],
      examples: [
        { task: '质量 $m=2\\,\\text{kg}$ 的物体以速度 $v=3\\,\\text{m/s}$ 运动。其动能是多少？',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$。', '<strong>结果：$E_k=9\\,\\text{J}$</strong>'] },
        { task: '力 $F=10\\,\\text{N}$ 沿力的方向使物体移动 $s=6\\,\\text{m}$。做了多少功？',
          steps: ['夹角为 $\\alpha=0^\\circ$，所以 $\\cos\\alpha=1$。', '$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$。', '<strong>结果：$W=60\\,\\text{J}$</strong>'] }
      ]
    },
    'v1-gravitacne-pole': {
      title: '引力场',
      summary: '牛顿万有引力定律，重力加速度及其随离行星中心距离的变化。',
      theory: [
        `<p><strong>牛顿万有引力定律</strong>：质量分别为 $m_1$ 和 $m_2$、相距为 $r$ 的两个物体以力 $F=G\\frac{m_1 m_2}{r^2}$ 相互吸引，其中 $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$。</p>`,
        `<p><strong>引力场</strong>是一个区域，在其中物质物体受到引力作用。场强，即<em>重力加速度</em>，为 $g=\\frac{F}{m}=G\\frac{M}{r^2}$，其中 $M$ 为产生该场的物体的质量。</p>`,
        `<p><strong>为什么随距离减小：</strong>引力作用分布在面积为 $4\\pi r^2$ 的越来越大的球面上。因此重力加速度随距中心距离的平方变化，而不是线性变化。</p>`,
        `<p>在地球表面 $g\\approx 9{,}81\\,\\text{m/s}^2$。在距地心 $r$ 处，$g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$，其中 $R$ 为地球半径。</p>`,
        { fig: 'v1v4-gravitacia-r', caption: '重力加速度随距地心距离的平方下降：在距离 2R 处为表面值的四分之一。' }
      ],
      examples: [
        { task: '在距地心距离为地球半径两倍的高度，重力加速度是多少？',
          steps: ['距离之比为 $\\frac{r}{R}=2$，所以 $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$。', '$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$。', '<strong>结果：约 $2{,}45\\,\\text{m/s}^2$</strong>'] },
        { task: '质量分别为 $m_1=10\\,\\text{kg}$ 和 $m_2=5\\,\\text{kg}$ 的两个物体相距 $r$。若距离加倍，力如何变化？',
          steps: ['力与 $\\frac{1}{r^2}$ 成正比，在 $2r$ 处减小为四分之一。', '<strong>结果：力减小为原来的四分之一</strong>'] }
      ]
    },
    'v1-rotacia': {
      title: '刚体的转动',
      summary: '物体绕轴转动时的角速度、转动惯量和力矩。',
      theory: [
        `<p><strong>刚体</strong>绕轴转动时形状不变：其所有点都以相同的<strong>角速度</strong> $\\omega$（弧度每秒）转动。若物体每秒转 $f$ 圈，则 $\\omega=2\\pi f$，因为一整圈对应的角度为 $2\\pi$。</p>`,
        `<p>距轴为 $r$ 处的点的切向速度为 $v=\\omega\\,r$。在角速度相同的情况下，离轴越远的点运动得越快。</p>`,
        `<p><strong>转动惯量</strong> $I=\\sum m_i r_i^2$ 是质量在转动中的等效量。它不仅取决于质量，还取决于质量离轴的分布距离。转动的牛顿第二定律形式为 $M=I\\,\\alpha$，其中 $M$ 为力矩，$\\alpha$ 为角加速度。</p>`,
        `<p><strong>为什么有因子 2：</strong>角度以弧度计量，一整圈为 $2\\pi$ 弧度，而非 $\\pi$。因此赫兹表示的频率要乘以两倍圆周率。</p>`,
        { fig: 'v1v4-rotacia', caption: '刚体上距轴为 r 处的点沿圆周运动，切向速度 v = ω·r。' }
      ],
      examples: [
        { task: '圆盘以频率 $f=3\\,\\text{Hz}$ 转动。其角速度是多少？',
          steps: ['$\\omega=2\\pi f=2\\pi\\cdot 3$。', '<strong>结果：$\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>'] },
        { task: '车轮上的一点距轴 $r=0{,}5\\,\\text{m}$，角速度为 $\\omega=4\\,\\text{rad/s}$。其切向速度是多少？',
          steps: ['$v=\\omega\\,r=4\\cdot 0{,}5$。', '<strong>结果：$v=2\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-sustavy': {
      title: '质点系力学',
      summary: '质点系的质心作为各质点位置的加权平均，以及质心的运动。',
      theory: [
        `<p><strong>质点系</strong>可以用一个重要的点来描述，即其<strong>质心</strong>。对于 $x$ 轴上的两个质点，其位置为 $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$。这是加权平均，较重的质点把质心拉向自己。</p>`,
        `<p>质心的运动如同总质量为 $M=\\sum m_i$ 的单个质点，受合外力作用：$M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$。质点之间的内力相互抵消，因此不改变质心的运动。</p>`,
        `<p><strong>为什么用质心而不是普通平均：</strong>若质点质量相等，则得到算术平均。质量不同时，每个坐标都必须按其质量加权。</p>`,
        `<p>系统的动能可以分解为质心运动的能量与质点相对质心运动的能量。由此，复杂运动可以分解为较简单的部分。</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: '质心 T 更靠近较重的质点。其坐标是各质点坐标的加权平均。' }
      ],
      examples: [
        { task: '质量为 $1\\,\\text{kg}$ 的质点位于 $x_1=0\\,\\text{m}$，质量为 $3\\,\\text{kg}$ 的质点位于 $x_2=4\\,\\text{m}$。质心在哪里？',
          steps: ['$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$。', '<strong>结果：$x_T=3\\,\\text{m}$</strong>'] },
        { task: '两个质量相等的质点位于 $x_1=2\\,\\text{m}$ 和 $x_2=8\\,\\text{m}$。质心在哪里？',
          steps: ['质量相等时质心为算术平均：$x_T=\\frac{2+8}{2}$。', '<strong>结果：$x_T=5\\,\\text{m}$</strong>'] }
      ]
    },
    'v1-lagrange': {
      title: '拉格朗日力学与哈密顿力学',
      summary: '拉格朗日量作为动能与势能之差，哈密顿量作为总能量。',
      theory: [
        `<p>系统的<strong>拉格朗日量</strong>为 $L=T-V$，其中 $T$ 为动能，$V$ 为势能。无需逐一追踪各个力，只需知道这两种能量及其对广义坐标 $q$ 和速度 $\\dot q$ 的依赖关系即可。</p>`,
        `<p><strong>欧拉-拉格朗日方程</strong>给出运动方程：$\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$。其优点是坐标可以自由选择，只要适合所研究的问题即可，例如摆的角度。</p>`,
        `<p>对于保守力，<strong>哈密顿量</strong>为 $H=T+V$，即总能量。引入动量 $p=\\frac{\\partial L}{\\partial \\dot q}$ 后，运动方程可写成一阶方程组，即所谓的哈密顿方程。</p>`,
        `<p><strong>为什么 $L$ 中是负号：</strong>势能阻碍运动，因此在拉格朗日量中被减去，而在哈密顿量中则与动能相加。</p>`
      ],
      examples: [
        { task: '质量 $m=2\\,\\text{kg}$ 的质点在高度 $h=1\\,\\text{m}$ 处的速度为 $v=3\\,\\text{m/s}$。若 $g=10\\,\\text{m/s}^2$，其拉格朗日量是多少？',
          steps: ['$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$。', '$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$。', '<strong>结果：$L=T-V=9-20=-11\\,\\text{J}$</strong>'] },
        { task: '同一质点的哈密顿量为 $H=T+V$。其值是多少？',
          steps: ['$H=9+20$。', '<strong>结果：$H=29\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-teplota-tlak': {
      title: '温度、压强、热量与内能',
      summary: '以开尔文为单位的热力学温度，作为单位面积上的力的压强，以及作为粒子能量之和的内能。',
      theory: [
        `<p><strong>热力学温度</strong> $T$ 以开尔文为单位。它与粒子的平均动能成正比，因此不可能为负。由摄氏度换算为 $T=t+273{,}15$，其中 $0\\,\\text{K}$ 为绝对零度。</p>`,
        `<p><strong>压强</strong>是垂直作用于单位面积上的力：$p=\\frac{F}{S}$，单位为帕斯卡，$1\\,\\text{Pa}=1\\,\\text{N/m}^2$。气体压迫容器壁，是因为其粒子撞击器壁并把动量传递给器壁。</p>`,
        `<p><strong>内能</strong> $U$ 是系统所有粒子的动能与势能之和。热量 $Q$ 是由于温差而在物体之间传递的能量，它并不是物体所“含有”的东西。</p>`,
        `<p><strong>为什么用开尔文：</strong>摄氏度的零点是任意选定的。对于与能量或比值有关的公式，必须使用能量为零的零点，即开尔文。</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: '温度换算为 T = t + 273,15。绝对零度对应 0 K，即 −273,15 °C。' }
      ],
      examples: [
        { task: '温度 $t=27\\,{}^\\circ\\text{C}$ 换算为开尔文是多少？',
          steps: ['$T=t+273{,}15=27+273{,}15$。', '<strong>结果：$T=300{,}15\\,\\text{K}$</strong>'] },
        { task: '力 $F=600\\,\\text{N}$ 垂直作用于面积 $S=0{,}2\\,\\text{m}^2$ 上。压强是多少？',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}2}$。', '<strong>结果：$p=3000\\,\\text{Pa}$</strong>'] }
      ]
    },
    'v2-stavove-rovnice': {
      title: '状态方程',
      summary: '理想气体的状态方程 pV = nRT 及其在计算压强中的应用。',
      theory: [
        `<p>理想气体的<strong>状态方程</strong>联系压强 $p$、体积 $V$、物质的量 $n$ 和温度 $T$：$pV=nRT$，其中 $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$。</p>`,
        `<p>理想气体是一种模型：其中粒子没有自身体积，除碰撞外彼此之间不发生相互作用。对于常温下足够稀薄的气体，该模型非常精确。</p>`,
        `<p><strong>如何使用：</strong>若已知三个量，即可求出第四个量。例如压强为 $p=\\frac{nRT}{V}$。当一个量变化时，其他量按比例关系变化：温度不变时，压强与体积成反比。</p>`,
        `<p><strong>注意单位：</strong>温度必须用开尔文，体积必须用立方米，否则结果将不是帕斯卡。升和立方分米需除以 $1000$ 换算。</p>`,
        { fig: 'v1v4-izoterma', caption: '温度不变时 pV 乘积为常数，因此压强随体积的变化构成双曲线：体积加倍意味着压强减半。' }
      ],
      examples: [
        { task: '气体的 $n=1\\,\\text{mol}$，温度 $T=300\\,\\text{K}$，体积 $V=2\\,\\text{dm}^3$。压强是多少千帕？',
          steps: ['$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$。', '$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$。', '<strong>结果：$p\\approx 1247\\,\\text{kPa}$</strong>'] },
        { task: '温度不变时，气体的体积加倍。压强如何变化？',
          steps: ['在 $T$ 和 $n$ 不变时，有 $p\\,V=\\text{常数}$。', '若 $V\\to 2V$，则 $p\\to \\frac{p}{2}$。', '<strong>结果：压强降为一半</strong>'] }
      ]
    },
    'v2-prvy-zakon': {
      title: '热力学第一定律与第二定律',
      summary: '热过程中的能量守恒，以及自然过程进行的方向。',
      theory: [
        `<p><strong>热力学第一定律</strong>是能量守恒定律：内能的变化等于所供给的热量减去气体所做的功：$\\Delta U=Q-W$，其中 $W$ 为气体所做的功。</p>`,
        `<p>若气体做功，其内能减少，因为能量流向周围环境。若对气体做功，则公式应改写为 $\\Delta U=Q+W_{\\text{作用于气体}}$。使用哪种符号约定始终很重要。</p>`,
        `<p><strong>热力学第二定律</strong>指出，热量只能自发地从较热的物体传向较冷的物体，热机不能把所有热量都转化为功。自然过程的方向由熵的增加决定。</p>`,
        `<p><strong>为什么这很重要：</strong>第一定律说明守恒的能量有多少，第二定律说明过程朝哪个方向进行。没有第二定律，就可以制造出第二类永动机。</p>`,
        { fig: 'v1v4-prvy-zakon', caption: '所供给的热量 Q 增加气体的内能，而气体所做的功 W 将能量带走：ΔU = Q − W。' }
      ],
      examples: [
        { task: '给气体供热 $Q=300\\,\\text{J}$，气体做功 $W=120\\,\\text{J}$。其内能的变化是多少？',
          steps: ['$\\Delta U=Q-W=300-120$。', '<strong>结果：$\\Delta U=180\\,\\text{J}$</strong>'] },
        { task: '气体在压缩时获得功 $W_{\\text{作用于气体}}=50\\,\\text{J}$，并放出热量 $Q=-20\\,\\text{J}$。其内能的变化是多少？',
          steps: ['$\\Delta U=Q+W_{\\text{作用于气体}}=-20+50$。', '<strong>结果：$\\Delta U=30\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-entropia': {
      title: '熵与热过程',
      summary: '作为不可逆性度量的熵，及其在可逆等温过程中的变化。',
      theory: [
        `<p><strong>熵</strong> $S$ 是衡量在给定宏观状态下系统可能微观状态数目的物理量。当热量 $Q$ 在恒定温度 $T$ 下被可逆地吸收时，熵的变化为 $\\Delta S=\\frac{Q}{T}$，单位为 $\\text{J/K}$。</p>`,
        `<p>在低温下供给的热量比在高温下供给相同热量所引起的熵增加得更多。因此公式要除以温度，而不是简单地把热量相加。</p>`,
        `<p><strong>用熵表述的热力学第二定律：</strong>在孤立系统中熵永不减少；在可逆过程中熵保持不变，在不可逆过程中熵增加。自发过程朝着熵增加的方向进行。</p>`,
        `<p><strong>为什么如此：</strong>高度有序的状态所对应的微观状态很少，而系统自然地趋向于微观状态更多的状态。因此熵是衡量系统中产生了多少不可逆无序的尺度。</p>`
      ],
      examples: [
        { task: '气体在恒定温度 $T=300\\,\\text{K}$ 下可逆地吸收热量 $Q=600\\,\\text{J}$。其熵的变化是多少？',
          steps: ['$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$。', '<strong>结果：$\\Delta S=2\\,\\text{J/K}$</strong>'] },
        { task: '若相同的热量 $Q=600\\,\\text{J}$ 在温度 $T=600\\,\\text{K}$ 下供给，熵如何变化？',
          steps: ['$\\Delta S=\\frac{600}{600}=1$。', '<strong>结果：$\\Delta S=1\\,\\text{J/K}$，比低温时的值小</strong>'] }
      ]
    },
    'v2-tepelne-motory': {
      title: '热机与制冷机',
      summary: '热机效率、卡诺循环，以及由加热器和冷却器温度决定的极限。',
      theory: [
        `<p><strong>热机</strong>从加热器吸取热量，将其中一部分转化为功，并将其余部分传给冷却器。其效率为 $\\eta=\\frac{W}{Q_h}$，即所做的功与从加热器吸取的热量之比。</p>`,
        `<p><strong>卡诺循环</strong>是两个温度之间可能的最佳可逆循环。其效率为 $\\eta=1-\\frac{T_c}{T_h}$，其中温度必须用开尔文。</p>`,
        `<p><strong>制冷机</strong>是反向运行的热机：通过做功将热量从较冷的空间搬运到较热的空间。因此对它谈的不是效率，而是制冷系数。</p>`,
        `<p><strong>为什么效率不能达到 100 %：</strong>即使是理想热机，也必须将部分热量传给冷却器，循环才能闭合。温差越大，可能达到的效率越高。</p>`,
        { fig: 'v1v4-tepelny-motor', caption: '热机从加热器吸取热量 Q_h，将其中一部分转化为功 W，并将其余部分 Q_c 传给冷却器。' }
      ],
      examples: [
        { task: '热机工作于温度 $T_h=500\\,\\text{K}$ 的加热器与 $T_c=300\\,\\text{K}$ 的冷却器之间。其理想效率是多少？',
          steps: ['$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$。', '$\\eta=1-0{,}6=0{,}4$。', '<strong>结果：$\\eta=40\\,\\%$</strong>'] },
        { task: '效率为 $25\\,\\%$ 的热机从加热器获得热量 $Q_h=800\\,\\text{J}$。它做了多少功？',
          steps: ['$W=\\eta\\,Q_h=0{,}25\\cdot 800$。', '<strong>结果：$W=200\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-kinetika-plynov': {
      title: '气体动理论',
      summary: '气体的分子图像：粒子的平均动能与热力学温度成正比。',
      theory: [
        `<p><strong>气体动理论</strong>通过分子的运动解释压强和温度。压强来自分子与容器壁的碰撞，温度则是其平均动能的量度。</p>`,
        `<p>理想气体中单个分子的平均动能为 $\\overline{E_k}=\\frac{3}{2}k\\,T$，其中 $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ 为玻尔兹曼常数。它只取决于温度，与气体种类无关。</p>`,
        `<p><strong>为什么是 $\\frac{3}{2}$：</strong>分子可以沿三个方向运动，每个方向对能量的贡献为 $k\\,T$ 的一半。三个自由度合起来给出 $\\frac{3}{2}k\\,T$。</p>`,
        `<p><strong>为什么用开尔文：</strong>该公式与热力学温度严格成正比。在 $0\\,\\text{K}$ 时分子的动能应为零，因此这个公式中从不使用摄氏度。</p>`
      ],
      examples: [
        { task: '温度为 $T=300\\,\\text{K}$ 时，气体分子的平均动能是多少？取 $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$。',
          steps: ['$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$。', '$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$。', '<strong>结果：约 $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>'] },
        { task: '若气体温度加倍，分子的平均动能如何变化？',
          steps: ['能量与 $T$ 成正比。', '<strong>结果：加倍</strong>'] }
      ]
    },
    'v2-boltzmann': {
      title: '玻尔兹曼分布',
      summary: '给定温度下粒子在能级之间的分布，以及占据数的指数下降。',
      theory: [
        `<p>在热平衡时，粒子在各能级之间的分布使较高能级的占据较少。假设能级简并度相同，能级 $E_2$ 与 $E_1$ 上粒子数之比为 $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$。</p>`,
        `<p>指数意味着：温度较低时，能级之间的微小能量差会产生很大影响。在高温下能级趋于接近，占据趋向均匀分布。</p>`,
        `<p><strong>为什么恰好是指数：</strong>能量为 $E$ 的状态的概率，随 $E$ 增大，每增加一份固定的能量就按固定倍数减小。正是这一点导致了指数依赖关系。</p>`,
        `<p>该结果表明，温度不仅是热量的量度，也是决定哪些状态可以到达的尺度。这一分布是计算宏观性质的所有统计方法的基础。</p>`,
        { fig: 'v1v4-boltzmann', caption: '比基态高 ΔE = k·T 的能级在温度 T 下的占据数，约为基态的 e⁻¹ ≈ 0,37 倍。' }
      ],
      examples: [
        { task: '某能级比基态高 $\\Delta E=kT$。比值 $\\frac{N_2}{N_1}$ 是多少？',
          steps: ['$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$。', '<strong>结果：$\\frac{N_2}{N_1}\\approx 0{,}368$</strong>'] },
        { task: '某能级高出 $2\\,kT$。占据比是多少？',
          steps: ['$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$。', '<strong>结果：约 $0{,}135$</strong>'] }
      ]
    },
    'v2-statisticke': {
      title: '宏观现象的统计解释',
      summary: '玻尔兹曼关于熵与微观状态数之间的关系，以及宏观现象为何具有概率性质。',
      theory: [
        `<p><strong>玻尔兹曼关系式</strong>将熵与对应于给定宏观状态的微观状态数 $W$ 联系起来：$S=k\\ln W$。自然对数表示当两个独立系统合并时，熵具有可加性。</p>`,
        `<p>对于 $N$ 个独立粒子，每个粒子可处于两种状态之一，微观状态数为 $W=2^N$。此时熵为 $S=k\\,N\\ln 2$，与粒子数成正比增长。</p>`,
        `<p><strong>为什么宏观现象是概率性的：</strong>微观状态数多的宏观状态出现得更为频繁。对于一摩尔粒子，概率之差是如此巨大，以至于实际上从未观察到熵的自发减少。</p>`,
        `<p><strong>为什么用对数：</strong>微观状态数随粒子数指数增长；取对数后得到一个线性量，可以合理地进行相加和比较。</p>`
      ],
      examples: [
        { task: '系统有 $N=3$ 个独立粒子，每个粒子有两种状态。它有多少个微观状态 $W$？',
          steps: ['$W=2^N=2^3$。', '<strong>结果：$W=8$</strong>'] },
        { task: '对于 $N=4$ 个各有两种状态的粒子，$S/k$ 的值是多少？取两位小数。',
          steps: ['$W=2^4=16$，所以 $\\frac{S}{k}=\\ln 16$。', '$\\ln 16=4\\ln 2\\approx 2{,}77$。', '<strong>结果：$\\frac{S}{k}\\approx 2{,}77$</strong>'] }
      ]
    },
    'v3-elektricke-pole': {
      title: '电场与电势',
      summary: '点电荷的场强与电势，叠加原理，以及电场中的功。',
      theory: [
        `<p>某点的<strong>电场强度</strong>是作用于正检验电荷上的力除以其电荷量：$\\vec E=\\frac{\\vec F}{q}$，单位为 $\\text{V/m}$。电场是空间的性质，而非检验电荷的性质。</p>`,
        `<p>对于距离为 $r$ 的点电荷 $Q$，有 $E=k\\frac{Q}{r^2}$，其中 $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$。场的方向是径向的：自正电荷向外，指向负电荷。</p>`,
        `<p><strong>电势</strong>是单位电荷的能量：$V=k\\frac{Q}{r}$。将电荷 $q$ 从一点移到另一点所做的功为 $W=q\\,\\Delta V$，它与路径无关，只取决于起点和终点。</p>`,
        `<p><strong>叠加：</strong>多个电荷的场按矢量相加，而它们的电势按标量相加。因此电势比场强更容易计算。</p>`,
        { fig: 'v1v4-elektricke-pole', caption: '正点电荷的电场线从电荷径向向外发出。场强随距离的平方减小。' }
      ],
      examples: [
        { task: '点电荷 $Q=2\\,\\mu\\text{C}$ 位于距离 $r=3\\,\\text{m}$ 处。场强是多少 kV/m？取 $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$。',
          steps: ['$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$。', '$E\\approx 2{,}00\\,\\text{kV/m}$', '<strong>结果：约 $2{,}00\\,\\text{kV/m}$</strong>'] },
        { task: '若距离加倍，点电荷的场强如何变化？',
          steps: ['场强与 $\\frac{1}{r^2}$ 成正比。', '$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$。', '<strong>结果：降为四分之一</strong>'] }
      ]
    },
    'v3-gauss': {
      title: '高斯定律',
      summary: '穿过闭合曲面的电通量及其与曲面内电荷的关系。',
      theory: [
        `<p>穿过曲面 $S$ 的<strong>电通量</strong>为 $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$，即场垂直于曲面的分量之和。其单位为 $\\text{N\\,m}^2/\\text{C}$。</p>`,
        `<p><strong>高斯定律</strong>指出，穿过闭合曲面的通量与曲面内的电荷成正比：$\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{内}}}{\\varepsilon_0}$，其中 $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$。</p>`,
        `<p><strong>为什么成立：</strong>电场线从正电荷发出，并进入负电荷。因此穿过闭合曲面的通量恰好捕获与其内部电荷数量相对应的电场线，与曲面形状无关。</p>`,
        `<p>高斯定律对于对称问题很方便，例如球体或无限大的均匀带电平面。在适当选取的曲面上，场可以提到积分号外，计算十分简单。</p>`,
        { fig: 'v1v4-gauss', caption: '穿过闭合曲面的总通量只取决于曲面内的电荷，Φ = Q/ε₀，与曲面形状无关。' }
      ],
      examples: [
        { task: '电荷 $Q=1\\,\\mu\\text{C}$ 穿过一个闭合曲面。若 $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$，穿过该曲面的总通量是多少？',
          steps: ['$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$。', '$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$', '<strong>结果：约 $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>'] },
        { task: '曲面内的电荷加倍。通量如何变化？',
          steps: ['通量与电荷成正比。', '<strong>结果：加倍</strong>'] }
      ]
    },
    'v3-elektricky-prud': {
      title: '电流与电路',
      summary: '欧姆定律，串联与并联电阻，以及电源输出的总电流。',
      theory: [
        `<p><strong>电流</strong>是单位时间内通过横截面的电荷量：$I=\\frac{\\Delta Q}{\\Delta t}$，单位为安培。电流方向约定为正电荷运动的方向。</p>`,
        `<p><strong>欧姆定律</strong>：导体两端的电压与电流成正比，$U=R\\,I$，其中 $R$ 为电阻，单位为欧姆。串联时电阻相加，$R=R_1+R_2$。</p>`,
        `<p>在<strong>并联</strong>中，两条支路上的电压相同，电流相加。等效电阻小于其中最小的电阻：$\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$。</p>`,
        `<p><strong>为什么并联电阻更小：</strong>第二条支路为电流提供了另一条通路，因此在相同电压下总电流更大。电源因此输出的电流比仅通过一条支路时更大。</p>`,
        { fig: 'v1v4-paralelne', caption: '并联时两条支路上的电压相同，总电流 I 为各支路电流之和。' }
      ],
      examples: [
        { task: '两个电阻 $R_1=6\\,\\Omega$ 和 $R_2=3\\,\\Omega$ 并联接在电压 $U=6\\,\\text{V}$ 上。电源输出的总电流是多少？',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$，所以 $R=2\\,\\Omega$。', '$I=\\frac{U}{R}=\\frac{6}{2}$。', '<strong>结果：$I=3\\,\\text{A}$</strong>'] },
        { task: '电阻 $4\\,\\Omega$ 与 $6\\,\\Omega$ 串联接在电压 $10\\,\\text{V}$ 上。电流为多少？',
          steps: ['$R=4+6=10\\,\\Omega$。', '$I=\\frac{10}{10}$。', '<strong>结果：$I=1\\,\\text{A}$</strong>'] }
      ]
    },
    'v3-magneticke-pole': {
      title: '磁场与磁力',
      summary: '磁场中运动电荷和载流导线所受的洛伦兹力。',
      theory: [
        `<p><strong>磁感应强度</strong> $\\vec B$ 描述磁场，其单位为特斯拉，$1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$。磁场仅对运动的电荷施加力；静止电荷不受磁力作用。</p>`,
        `<p>以速度 $\\vec v$ 运动的电荷 $q$ 所受的<strong>洛伦兹力</strong>为 $\\vec F=q\\,\\vec v\\times\\vec B$。其大小为 $F=q\\,v\\,B\\sin\\alpha$，其中 $\\alpha$ 为 $\\vec v$ 与 $\\vec B$ 之间的夹角。</p>`,
        `<p><strong>力的方向</strong>用右手定则确定：四指指向速度方向，手掌指向磁场方向，对于正电荷，拇指指向力的方向。对于负电荷，力的方向相反。</p>`,
        `<p><strong>为什么力与速度垂直：</strong>磁力不做功，只改变运动方向。因此在垂直磁场中运动的粒子做圆周运动，而不是加速。这正是利用磁场使粒子轨迹弯曲的原因。</p>`,
        { fig: 'v1v4-lorentz', caption: '垂直于磁场飞行的正电荷所受洛伦兹力，既垂直于速度，也垂直于磁场。它改变运动方向，而不改变速率。' }
      ],
      examples: [
        { task: '电子以速率 $v=10^{5}\\,\\text{m/s}$ 垂直于磁感应强度 $B=0{,}2\\,\\text{T}$ 的磁场飞行。若 $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$，力的大小是多少？',
          steps: ['$\\alpha=90^\\circ$，所以 $\\sin\\alpha=1$。', '$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$。', '<strong>结果：$F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>'] },
        { task: '电荷 $q=2\\,\\mu\\text{C}$ 的粒子以速率 $v=300\\,\\text{m/s}$ 垂直于磁场 $B=0{,}5\\,\\text{T}$ 飞行。以微牛顿为单位，力是多少？',
          steps: ['$F=qvB=2\\cdot 300\\cdot 0{,}5$，单位为 $\\mu\\text{N}$。', '<strong>结果：$F=300\\,\\mu\\text{N}$</strong>'] }
      ]
    },
    'v3-indukcia': {
      title: '电磁感应',
      summary: '法拉第定律：穿过回路的磁通量发生变化时产生电压。',
      theory: [
        `<p>穿过曲面 $S$ 的<strong>磁通量</strong>为 $\\Phi=B\\,S\\cos\\alpha$，其中 $\\alpha$ 为磁场与曲面法线之间的夹角。其单位为韦伯，$1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$。</p>`,
        `<p><strong>法拉第电磁感应定律</strong>：闭合回路中产生与磁通量变化率成正比的电压，$U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$。负号体现楞次定律，即感应电流阻碍磁通量的变化。</p>`,
        `<p><strong>电压如何产生：</strong>通过改变磁感应强度、改变面积，或在磁场中转动回路。若磁通量恒定，即使磁场很强，也不产生电压。</p>`,
        `<p><strong>为什么要除以时间：</strong>电压取决于磁通量变化的快慢，而非其大小。即使总变化量相同，快速变化也比缓慢变化产生更大的电压。</p>`,
        { fig: 'v1v4-tok-indukcia', caption: '穿过曲面的磁通量为 Φ = B·S·cos α，其中 α 为磁感应强度 B 与曲面法线 n 之间的夹角。' }
      ],
      examples: [
        { task: '回路面积 $S=0{,}5\\,\\text{m}^2$ 与磁场垂直，磁场在 $2\\,\\text{s}$ 内变化了 $\\Delta B=4\\,\\text{T}$。感应电压是多少？',
          steps: ['$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$。', '<strong>结果：$U_i=1\\,\\text{V}$</strong>'] },
        { task: '穿过曲面的磁通量恒定。感应电压是多少？',
          steps: ['电压与磁通量的变化成正比，$\\Delta\\Phi=0$。', '<strong>结果：$U_i=0\\,\\text{V}$</strong>'] }
      ]
    },
    'v3-maxwell': {
      title: '麦克斯韦方程组',
      summary: '联系电场与磁场的四个方程，及其在载流导体中的应用。',
      theory: [
        `<p><strong>麦克斯韦方程组</strong>的积分形式共四个方程：电场的高斯定律、磁场的高斯定律（不存在磁单极子）、法拉第电磁感应定律以及安培-麦克斯韦定律。它们共同描述了所有经典电磁现象。</p>`,
        `<p><strong>安培-麦克斯韦定律</strong>指出，磁场沿闭合曲线的环量与穿过该曲线的电流以及电通量的变化率成正比：$\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$。对于稳恒过程，只剩下电流项。</p>`,
        `<p>由长直载流导线（电流为 $I$）的安培定律可知，距离 $r$ 处的磁感应强度为 $B=\\frac{\\mu_0 I}{2\\pi r}$，其中 $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$。</p>`,
        `<p><strong>为什么位移电流重要：</strong>若没有包含电通量变化的项，该定律将与电荷守恒不相符。麦克斯韦补充了这一项，并由方程推导出电磁波的存在。</p>`,
        { fig: 'v1v4-ampere', caption: '载流直导线周围，磁感应强度的磁场线是同心圆。磁感应强度 B 随距离 r 增大而减小。' }
      ],
      examples: [
        { task: '直导线中的电流 $I=10\\,\\text{A}$。在距离 $r=0{,}2\\,\\text{m}$ 处磁感应强度是多少？结果以微特斯拉给出。',
          steps: ['$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$。', '$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$。', '<strong>结果：$B=10\\,\\mu\\text{T}$</strong>'] },
        { task: '若与载流导线的距离加倍，其磁感应强度如何变化？',
          steps: ['$B$ 与 $\\frac{1}{r}$ 成正比。', '<strong>结果：减小为一半</strong>'] }
      ]
    },
    'v3-em-vlny': {
      title: '电磁波',
      summary: '波是垂直于传播方向的交变电场与磁场，以光速 c 传播。',
      theory: [
        `<p>变化的电场产生磁场，变化的磁场产生电场。它们相互激发，以<strong>电磁波</strong>的形式在空间中传播。在真空中其速度为 $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$。</p>`,
        `<p>波具有频率 $f$ 和波长 $\\lambda$。关系式 $c=\\lambda\\,f$ 成立，由此得 $\\lambda=\\frac{c}{f}$。频率越高，波长越短。</p>`,
        `<p>电磁波中的电场与磁场相互垂直，且两者都垂直于传播方向。因此电磁波是<em>横波</em>。</p>`,
        `<p><strong>为什么重要：</strong>无线电波、光和 X 射线本质相同，只是频率不同，因而波长不同，它们的各种用途也与此相关。</p>`,
        { fig: 'v1v4-em-vlna', caption: '波的电场与磁场分量同相振荡，二者互相垂直，并且都垂直于传播方向 c。' }
      ],
      examples: [
        { task: '发射机工作频率为 $f=100\\,\\text{MHz}$。空气中该波的波长是多少？',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$。', '<strong>结果：$\\lambda=3\\,\\text{m}$</strong>'] },
        { task: '波长为 $\\lambda=0{,}5\\,\\text{m}$。该波的频率是多少？',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$。', '<strong>结果：$f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>'] }
      ]
    },
    'v3-sirenie': {
      title: '电磁辐射的传播',
      summary: '介质中的光速、折射率，以及介质的介电常数与磁导率的影响。',
      theory: [
        `<p>在真空中电磁辐射以速度 $c$ 传播；在介质中其速度较小。<strong>折射率</strong> $n=\\frac{c}{v}$ 表示介质中的速度比真空中小多少倍。</p>`,
        `<p>对于相对介电常数为 $\\varepsilon_r$、相对磁导率 $\\mu_r=1$ 的非磁性介质，有 $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$。因此介电常数较大的电介质会减慢波的速度。</p>`,
        `<p><strong>为什么波会减慢：</strong>波的电场使材料中的原子极化，其振荡产生延迟，结果波传播得更慢。进入材料时频率不变，改变的是速度和波长。</p>`,
        `<p>正是这种效应解释了光在两种介质分界面上的折射，以及透镜和光纤的原理。</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: '进入介质时波速减小，因此波长缩短。频率保持不变。' }
      ],
      examples: [
        { task: '某介质的相对介电常数为 $\\varepsilon_r=4$。其折射率是多少？',
          steps: ['$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$。', '<strong>结果：$n=2$</strong>'] },
        { task: '若 $c=3\\cdot 10^{8}\\,\\text{m/s}$，在折射率为 $n=2$ 的介质中光速是多少？',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$。', '<strong>结果：$v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-vlnenie': {
      title: '机械波与电磁波',
      summary: '波传递什么，以及为什么机械波需要物质介质而电磁波不需要。',
      theory: [
        `<p>波动是振动在空间中的传播。物质本身并不随之移动，被传递的是<strong>能量</strong>和<strong>信息</strong>。根据振动的对象，波可分为<strong>机械波</strong>（物质在振动，例如声波、水波、地震波）和<strong>电磁波</strong>（电场与磁场在振动，例如光、无线电波、X 射线）。</p>`,
        `<p>机械波需要<strong>物质介质</strong>，因为每个质点都会使其邻近的质点振动。因此声音不能在真空中传播。电磁波即使在真空中也能传播，因为场的振荡不需要任何粒子来传递。</p>`,
        `<p>根据振动方向，我们区分<strong>横波</strong>（振动垂直于传播方向，例如弦上的波和光）与<strong>纵波</strong>（振动沿传播方向，例如气体中的声波）。空气中的声速约为 $340\\,\\text{m/s}$，真空中的光速为 $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$。</p>`,
        { fig: 'obr-vlna', caption: '横波：波长 λ 是同相位的两个相邻点之间的距离。' }
      ],
      examples: [
        { task: '阳光穿过空旷的宇宙空间到达地球。这是机械波还是电磁波？',
          steps: ['太阳与地球之间没有物质，因此波在真空中传播。', '<strong>结果：这是电磁波。</strong>'] },
        { task: '为什么在两艘太空飞船之间的真空中听不到声音？',
          steps: ['声音是机械波，需要物质介质。', '真空中没有任何粒子，因此振动无法传递给其他粒子。', '<strong>结果：声音不能在真空中传播。</strong>'] }
      ]
    },
    'v4-frekvencia': {
      title: '频率、波长与振幅',
      summary: '描述波的量，以及它们之间的关系 v = λ·f。',
      theory: [
        `<p>波用三个基本量描述：<strong>振幅</strong> $A$（离开平衡位置的最大位移）、<strong>频率</strong> $f$（每秒振动次数，单位 $\\text{Hz}$）以及<strong>波长</strong> $\\lambda$（两个最近的同相振动点之间的距离）。</p>`,
        `<p>周期 $T=\\frac{1}{f}$ 是一次振动所需的时间。振幅与波的<em>强度</em>有关（例如声音的响度或光的亮度），而频率决定音调的高低或光的颜色。</p>`,
        `<p>波的传播速度为 $v=\\lambda\\cdot f$。进入另一种介质时，速度和波长都会改变，但<strong>频率不变</strong>：它由振动源决定，而不是由介质决定。</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: '进入介质时波速减小，因此波长缩短。频率保持不变。' }
      ],
      examples: [
        { task: '波的频率为 $f=50\\,\\text{Hz}$，波长为 $\\lambda=6\\,\\text{m}$。其速度是多少？',
          steps: ['$v=\\lambda\\cdot f=6\\cdot 50$。', '<strong>结果：$v=300\\,\\text{m/s}$</strong>'] },
        { task: '频率为 $f=4\\,\\text{Hz}$ 的波的周期是多少？',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{4}$。', '<strong>结果：$T=0{,}25\\,\\text{s}$</strong>'] }
      ]
    },
    'v4-interferencia': {
      title: '干涉与衍射',
      summary: '波的叠加：何时加强、何时减弱，以及波为何能绕过障碍物。',
      theory: [
        `<p><strong>叠加原理：</strong>某点的合振动是到达该点的所有波的振动之和。若波是相干的（同相位），结果取决于<strong>光程差</strong> $\\Delta d$。</p>`,
        `<p>当光程差为波长的整数倍时发生<strong>加强</strong>：$\\Delta d=m\\,\\lambda$。当光程差为半波长的奇数倍时发生<strong>减弱</strong>：$\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$。</p>`,
        `<p><strong>衍射</strong>是波绕过障碍物或穿过狭缝时发生的弯曲。当障碍物的尺寸与波长相当时，衍射更为明显。因此声音很容易绕过拐角传播，而光则会形成清晰的阴影。</p>`,
        { fig: 'v1v4-interferencia', caption: '同相的波在光程差为 m·λ 时加强，反相的波在光程差为 (m + ½)·λ 时减弱。' }
      ],
      examples: [
        { task: '两束相干波的波长为 $\\lambda=0{,}5\\,\\text{m}$，光程差为 $\\Delta d=1{,}25\\,\\text{m}$。该点是加强还是减弱？',
          steps: ['$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$。', '数 $2{,}5$ 是半波长的奇数倍：$2{,}5=\\left(2+\\tfrac{1}{2}\\right)$。', '<strong>结果：减弱。</strong>'] }
      ]
    },
    'v4-polarizacia': {
      title: '光的偏振',
      summary: '光的横波性、偏振器，以及通过检偏器后强度的马吕斯定律。',
      theory: [
        `<p>光是横波：电场垂直于传播方向振动。<strong>偏振</strong>光的振动位于单一平面内。普通光源（灯泡、太阳）发出非偏振光，其振动平面随机变化。</p>`,
        `<p>偏振器只让其方向上的振动分量通过。当<strong>非偏振</strong>光通过第一个偏振器时，其强度减半。</p>`,
        `<p><strong>马吕斯定律：</strong>若强度为 $I_0$ 的线偏振光入射到转过角度 $\\varphi$ 的检偏器上，则通过后的强度为 $I=I_0\\cos^2\\varphi$。之所以是余弦的平方，是因为只有电场在检偏器轴方向的分量能通过，而强度与振幅的平方成正比。</p>`,
        { fig: 'v1v4-polarizacia', caption: '检偏器只允许其方向上的振动分量 E·cos φ 通过。强度与 cos²φ 成正比。' }
      ],
      examples: [
        { task: '强度为 $I_0=80$ 的线偏振光通过转过 $60^\\circ$ 的检偏器。通过后的强度是多少？',
          steps: ['$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$。', '$I=80\\cdot 0{,}25=20$。', '<strong>结果：$I=20$</strong>'] }
      ]
    },
    'v4-geometricka-optika': {
      title: '几何光学与波动光学',
      summary: '折射率、光在各种物质中的速度以及斯涅耳折射定律。',
      theory: [
        `<p><strong>几何光学</strong>将光描述为沿直线传播的光线，按反射定律（$\\alpha=\\alpha'$）反射，并在介质分界面上折射。波动光学解释光线无法解释的现象，例如干涉和衍射。</p>`,
        `<p><strong>折射率</strong> $n=\\frac{c}{v}$ 表示光在介质中比真空中慢多少倍。在水中 $n\\approx 1{,}33$，在玻璃中约为 $1{,}5$。光在介质中的速度为 $v=\\frac{c}{n}$。</p>`,
        `<p><strong>斯涅耳定律</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$ 描述光线如何折射。进入光密介质（$n_2>n_1$）时光线向法线偏折，进入光疏介质时则远离法线。</p>`,
        { fig: 'v1v4-lom', caption: '光进入光密介质时向法线偏折，因此 β 小于 α（n₂ > n₁）。' }
      ],
      examples: [
        { task: '折射率为 $n=1{,}5$ 的玻璃中光速是多少？取 $c=3\\cdot 10^{8}\\,\\text{m/s}$。',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$。', '<strong>结果：$v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-zobrazovanie': {
      title: '透镜与反射镜成像',
      summary: '凸透镜的成像公式及像的位置的确定。',
      theory: [
        `<p>凸透镜将平行光线会聚于距离为 $f$ 的<strong>焦点</strong>。位于透镜前距离 $a$ 处的物体，会在透镜后距离 $b$ 处形成像。</p>`,
        `<p><strong>成像公式</strong>适用于薄透镜和反射镜：$\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$。它是三个量之间的关系，因此只要知道其中两个，就能算出第三个。</p>`,
        `<p>若 $a>f$，像为实像且是倒立的。注意不要出错：相加的是倒数，而不是距离本身。$b=a+f$ 并不成立。</p>`,
        { fig: 'v1v4-zobrazenie', caption: '位于两倍焦距处的物体会得到实像：倒立、与物体等大，位于距离 2f 处。' }
      ],
      examples: [
        { task: '物体位于凸透镜前 $a=30\\,\\text{cm}$ 处，透镜焦距为 $f=15\\,\\text{cm}$。像在哪里？',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$。', '<strong>结果：$b=30\\,\\text{cm}$</strong>'] }
      ]
    },
    'v4-lasery': {
      title: '激光与光学仪器',
      summary: '激光的性质、频率的计算以及放大镜的放大倍数。',
      theory: [
        `<p><strong>激光</strong>（通过受激辐射放大光）发出的光具有普通光源所没有的性质：它是<strong>单色的</strong>（单一波长）、<strong>相干的</strong>（振动同相）并形成<strong>窄束</strong>。因此可以聚焦到很小的光斑上。</p>`,
        `<p>对于任何光都有 $c=\\lambda\\cdot f$，因此频率为 $f=\\frac{c}{\\lambda}$。光学中波长通常以纳米给出：$1\\,\\text{nm}=10^{-9}\\,\\text{m}$。</p>`,
        `<p><strong>光学仪器</strong>利用透镜进行放大。焦距为 $f$ 的放大镜在舒适观察时的放大倍数为 $Z=\\frac{d}{f}$，其中 $d\\approx 250\\,\\text{mm}$ 为明视距离。焦距越短，放大倍数越大。</p>`
      ],
      examples: [
        { task: '红色激光的波长为 $\\lambda=650\\,\\text{nm}$。以 $10^{14}\\,\\text{Hz}$ 为单位，其频率是多少？',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$。', '<strong>结果：约 $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>'] }
      ]
    },
    'v4-vlakna': {
      title: '光纤基础',
      summary: '纤芯与包层分界面上的全反射及临界角。',
      theory: [
        `<p>光纤在折射率为 $n_1$ 的细纤芯内部导光，纤芯外包覆折射率较低的包层 $n_2&lt;n_1$。光在纤芯中依靠<strong>全反射</strong>而非折射保持传播，因此几乎不损失。</p>`,
        `<p>当入射角超过<strong>临界角</strong> $\\alpha_c$ 时发生全反射，其中 $\\sin\\alpha_c=\\frac{n_2}{n_1}$。折射率差越大，临界角越小，光纤能够捕获的光也越多。</p>`,
        `<p>信号通过光脉冲传输。光纤用于互联网和电信，因为光能在长距离上携带大量信息，并且不受电磁场的干扰。</p>`,
        { fig: 'v1v4-vlakno', caption: '光在纤芯中依靠全反射传播，因为其入射角大于临界角，此时 sin α_c = n₂/n₁。' }
      ],
      examples: [
        { task: '纤芯的 $n_1=1{,}5$，包层的 $n_2=1{,}0$。临界角的正弦是多少？',
          steps: ['$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$。', '<strong>结果：$\\sin\\alpha_c\\approx 0{,}67$</strong>'] }
      ]
    }
  }
});
