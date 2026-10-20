/* 中文: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/v1/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "v1-vektory": {
   "title": "Rⁿ 中的向量与线性相关",
   "summary": "向量的运算、线性组合、线性张成、线性相关与线性无关。",
   "theory": [
    "<p>$\\mathbb{R}^n$ 中的<strong>向量</strong>是由实数组成的有序 $n$ 元组 $u=(u_1, u_2, \\dots, u_n)$。向量的加法以及与实数（标量）的乘法都按分量进行：$u+v=(u_1+v_1, \\dots, u_n+v_n)$，$c\\,u=(c\\,u_1, \\dots, c\\,u_n)$。零向量记作 $o=(0, \\dots, 0)$。</p>",
    "<p>向量 $u_1, \\dots, u_k$ 的<strong>线性组合</strong>是指形如 $c_1u_1+c_2u_2+\\dots+c_ku_k$ 的任意向量，其中 $c_1, \\dots, c_k\\in\\mathbb{R}$ 为系数。所有线性组合构成的集合称为<strong>线性张成</strong>（生成的子空间），记作 $\\mathcal{L}(u_1, \\dots, u_k)$。</p>",
    {
     "fig": "v1-linkomb",
     "caption": "向量 $u=(2, 1)$ 与 $v=(-1, 2)$ 不平行，因此平面上的每个向量都可以写成 $\\alpha u+\\beta v$。拖动系数 $\\alpha$ 和 $\\beta$，观察得到的（橙色）向量如何变化。"
    },
    "<p>如果由等式 $c_1u_1+\\dots+c_ku_k=o$ 可以推出 $c_1=\\dots=c_k=0$，则称向量 $u_1, \\dots, u_k$ <strong>线性无关</strong>。否则称它们<strong>线性相关</strong>；这种情况当且仅当其中至少有一个向量可以表示为其余向量的线性组合。</p>\n       <p>实际操作中，我们把向量写成矩阵 $A$ 的各行：它们线性无关当且仅当 $h(A)=k$（秩的概念见后面的课程）。对于 $\\mathbb{R}^n$ 中的 $n$ 个向量，只需检验是否 $\\det A\\neq 0$。$\\mathbb{R}^n$ 中多于 $n$ 个向量总是线性相关的，任何包含零向量的向量组也都线性相关。</p>"
   ],
   "examples": [
    {
     "task": "判断向量 $u=(1, 2, 0)$、$v=(0, 1, 1)$ 和 $w=(2, 5, 1)$ 是否线性相关。",
     "steps": [
      "把向量写成矩阵的各行，并按第 1 行展开计算行列式：",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "行列式为零，因此这些向量<strong>线性相关</strong>。事实上，$w=2u+v$。"
     ]
    },
    {
     "task": "把向量 $w=(4, 7)$ 表示成向量 $u=(2, 1)$ 和 $v=(-1, 2)$ 的线性组合。",
     "steps": [
      "求 $\\alpha, \\beta$ 使 $\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$，即方程组 $2\\alpha-\\beta=4$，$\\alpha+2\\beta=7$。",
      "由第二个方程得 $\\alpha=7-2\\beta$；代入得 $14-4\\beta-\\beta=4$，所以 $\\beta=2$，$\\alpha=3$。",
      "<strong>结果：</strong>$w=3u+2v$。"
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "矩阵及其运算",
   "summary": "矩阵的型、特殊矩阵、加法、数乘、转置与迹。",
   "theory": [
    "<p>$m\\times n$ 型<strong>矩阵</strong>是由实数组成的、有 $m$ 行 $n$ 列的矩形数表 $A=(a_{ij})$。两个矩阵相等，是指它们型相同且对应位置上的元素相等。$n\\times n$ 型矩阵称为 $n$ 阶<strong>方阵</strong>；元素 $a_{11}, a_{22}, \\dots, a_{nn}$ 构成它的<strong>主对角线</strong>。重要的矩阵有：<strong>单位</strong>矩阵 $I$（对角线上为 1，其余为 0）、<strong>零</strong>矩阵 $O$、<strong>对角</strong>矩阵以及<strong>上（下）三角</strong>矩阵（对角线以下（以上）全为 0）。</p>",
    "<p>同型矩阵的<strong>和</strong>以及矩阵与数的<strong>乘积</strong>都按元素计算：$(A+B)_{ij}=a_{ij}+b_{ij}$，$(cA)_{ij}=c\\,a_{ij}$。成立 $A+B=B+A$，$(A+B)+C=A+(B+C)$，$c(A+B)=cA+cB$，$(c+d)A=cA+dA$。所有 $m\\times n$ 型矩阵在这些运算下构成一个向量空间。</p>",
    "<p>$m\\times n$ 型矩阵的<strong>转置</strong>矩阵 $A^{T}$ 是 $n\\times m$ 型的，且 $(A^{T})_{ij}=a_{ji}$——行变成列。成立 $(A^{T})^{T}=A$，$(A+B)^{T}=A^{T}+B^{T}$，$(cA)^{T}=cA^{T}$ 以及 $(AB)^{T}=B^{T}A^{T}$（顺序颠倒）。</p>\n       <p>若 $A^{T}=A$，则方阵称为<strong>对称</strong>矩阵；若 $A^{T}=-A$，则称为<strong>反对称</strong>矩阵（此时对角线上全为 0）。每个方阵都可以唯一地分解为对称部分与反对称部分之和 $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$。<strong>迹</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ 是对角线元素之和；对任意矩阵，$\\operatorname{tr}(A^{T}A)$ 等于其所有元素的平方和。</p>"
   ],
   "examples": [
    {
     "task": "设 $A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$，$B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$，计算 $2A-B^{T}$。",
     "steps": [
      "$B$ 是 $3\\times 2$ 型，所以 $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ 是 $2\\times 3$ 型，与 $A$ 相同。",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>结果：</strong>$2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$。"
     ]
    },
    {
     "task": "把矩阵 $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ 分解为一个对称矩阵与一个反对称矩阵之和。",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "对称部分：$S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$。",
      "反对称部分：$K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$。检验：$S+K=A$。"
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "矩阵的秩与初等行变换",
   "summary": "初等行变换、行阶梯形、高斯消元法与矩阵的秩。",
   "theory": [
    "<p><strong>初等行变换</strong>包括：(1) 交换两行，(2) 用非零数乘某一行，(3) 把另一行的倍数加到某一行上。若 $B$ 可由 $A$ 经有限次这样的变换得到，就记作 $A\\sim B$（两矩阵行等价）。记号 $R_2-3R_1$ 表示用第二行减去第一行的三倍来替换第二行。</p>",
    "<p>如果每个非零行开头的零比上一行多，并且零行都在最下方，则称矩阵为<strong>行阶梯形</strong>。一行中第一个非零元素称为该行的<strong>主元</strong>。<strong>高斯消元法</strong>可以把任何矩阵化为行阶梯形：在当前列中选定主元，再用变换 (3) 把它下方的元素全部消为零。如果进一步把主元化为 1，并把主元上方的元素也消为零，就得到行最简形（高斯–若尔当消元法）。</p>",
    {
     "fig": "v1-stupne",
     "caption": "行阶梯形：主元自上而下逐行向右移动。该矩阵有三个非零行，因此 $h(A)=3$。"
    },
    "<p><strong>秩</strong> $h(A)$ 是矩阵 $A$ 中线性无关的行的最大个数。初等行变换不改变秩，因此 $h(A)$ 等于行阶梯形中非零行的个数。成立 $h(A)=h(A^{T})$（行秩等于列秩）以及 $h(A)\\le\\min(m, n)$。对于 $n$ 阶方阵：$h(A)=n\\iff\\det A\\neq 0\\iff A$ 可逆（非奇异）。</p>"
   ],
   "examples": [
    {
     "task": "求矩阵 $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$ 的秩。",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "行阶梯形有两个非零行，所以 $h(A)=2$。"
     ]
    },
    {
     "task": "当 $a$ 取何值时，矩阵 $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ 的秩为 2？",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "当 $a=4$ 时最后一行为零行，$h(A)=2$；当 $a\\neq 4$ 时 $h(A)=3$。"
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "三阶行列式与拉普拉斯展开",
   "summary": "萨吕斯法则（对角线法则）、余子式与代数余子式、拉普拉斯展开、行列式的性质。",
   "theory": [
    "<p>$n$ 阶方阵的<strong>行列式</strong>是数 $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$，其中求和遍及集合 $\\{1, \\dots, n\\}$ 的全部 $n!$ 个排列 $\\pi$。当 $n=3$ 时得到<strong>萨吕斯法则</strong>（对角线法则）：</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "萨吕斯法则：在矩阵右侧补写它的前两列。沿右下方向的对角线乘积取正号，沿左下方向的取负号。该法则<strong>只</strong>适用于三阶矩阵。"
    },
    "<p><strong>余子式</strong> $M_{ij}$ 是删去第 $i$ 行和第 $j$ 列后所得矩阵的行列式，<strong>代数余子式</strong>为 $A_{ij}=(-1)^{i+j}M_{ij}$。按第 $i$ 行的<strong>拉普拉斯展开</strong>：$\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$（按列展开同理）。最好按零最多的行或列展开。</p>",
    "<p><strong>性质：</strong>$\\det A^{T}=\\det A$；交换两行，行列式变号；某一行乘以数 $c$，行列式也乘以 $c$，因此 $\\det(cA)=c^{n}\\det A$；把另一行的倍数加到某一行上，行列式不变；有零行或有两行成比例的矩阵，其行列式为 0；三角矩阵的行列式等于对角线元素之积。对于同阶矩阵，$\\det(AB)=\\det A\\cdot\\det B$；若 $A$ 可逆，则 $\\det A^{-1}=\\frac{1}{\\det A}$。</p>"
   ],
   "examples": [
    {
     "task": "计算 $\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$。",
     "steps": [
      "正项：$2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$。",
      "负项：$3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$。",
      "<strong>结果：</strong>$\\det A=2-13=-11$。"
     ]
    },
    {
     "task": "计算 $\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$。",
     "steps": [
      "第 3 行只有一个非零元素 $a_{32}=3$。按第 3 行展开：$\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$。",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$（萨吕斯法则）。",
      "<strong>结果：</strong>$\\det A=-3\\cdot 6=-18$。"
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "逆矩阵：高斯–若尔当法与伴随矩阵",
   "summary": "逆矩阵的存在性，用高斯–若尔当法和伴随矩阵求逆，矩阵方程。",
   "theory": [
    "<p>$n$ 阶方阵 $A$ 的<strong>逆</strong>矩阵 $A^{-1}$ 满足 $AA^{-1}=A^{-1}A=I$。它存在当且仅当 $\\det A\\neq 0$（矩阵<strong>可逆</strong>，即非奇异）；行列式为零的矩阵称为<strong>奇异</strong>矩阵。成立 $(A^{-1})^{-1}=A$，$(A^{T})^{-1}=(A^{-1})^{T}$ 以及 $(AB)^{-1}=B^{-1}A^{-1}$。</p>",
    "<p><strong>高斯–若尔当法：</strong>用初等行变换把增广矩阵 $(A\\mid I)$ 化为 $(I\\mid B)$ 的形式，则 $B=A^{-1}$。如果变换过程中左边出现零行，则矩阵 $A$ 是奇异的。</p>",
    "<p><strong>伴随矩阵</strong> $\\operatorname{adj}A$ 是代数余子式矩阵的转置：$(\\operatorname{adj}A)_{ij}=A_{ji}$。成立 $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$，即 $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$——注意下标要交换。当 $n=2$ 时得到熟知的公式 $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$。</p>",
    "<p><strong>矩阵方程：</strong>若 $A$ 可逆，则方程 $AX=B$ 有唯一解 $X=A^{-1}B$，方程 $XA=B$ 的解为 $X=BA^{-1}$。由于矩阵乘法不满足交换律，从哪一侧相乘是有区别的。</p>"
   ],
   "examples": [
    {
     "task": "用高斯–若尔当法求 $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$ 的逆矩阵。",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>结果：</strong>$A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$（检验：$AA^{-1}=I$）。"
     ]
    },
    {
     "task": "设 $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$，求元素 $(A^{-1})_{13}$。",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$，其中 $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$。",
      "<strong>结果：</strong>$(A^{-1})_{13}=\\frac{1}{8}$。"
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "线性方程组",
   "summary": "高斯消元法、弗罗贝尼乌斯定理、克拉默法则与齐次方程组。",
   "theory": [
    "<p>含 $n$ 个未知数、$m$ 个方程的线性方程组可写成矩阵形式 $Ax=b$，其中 $A$ 是<strong>系数矩阵</strong>，$x=(x_1, \\dots, x_n)^{T}$，$b$ 是右端常数列；$(A\\mid b)$ 是<strong>增广矩阵</strong>。若 $b=o$，则方程组称为<strong>齐次</strong>方程组。</p>",
    "<p><strong>弗罗贝尼乌斯定理</strong>（克罗内克–卡佩利定理）：方程组 $Ax=b$ 有解当且仅当 $h(A)=h(A\\mid b)$。若 $h(A)=h(A\\mid b)=n$，则解唯一；若 $h(A)=h(A\\mid b)=h\\lt n$，则有无穷多解，解依赖于 $n-h$ 个参数。</p>",
    {
     "fig": "v1-priamky",
     "caption": "两个二元方程就是平面上的两条直线：它们相交、平行（不重合）或重合。"
    },
    "<p><strong>高斯消元法：</strong>把增广矩阵化为行阶梯形，再自下而上回代求出未知数；没有主元的未知数是自由参数。<strong>克拉默法则：</strong>若 $A$ 是方阵且 $D=\\det A\\neq 0$，则 $x_i=\\frac{D_i}{D}$，其中 $D_i$ 是把 $A$ 的第 $i$ 列换成列 $b$ 后所得矩阵的行列式。</p>\n       <p><strong>齐次方程组</strong>总有平凡解 $x=o$。非平凡解存在当且仅当 $h(A)\\lt n$（对方阵而言，当且仅当 $\\det A=0$）。全部解构成 $\\mathbb{R}^n$ 的一个 $n-h(A)$ 维子空间。</p>"
   ],
   "examples": [
    {
     "task": "解方程组 $x_1+x_2+x_3=6$，$2x_1-x_2+x_3=3$，$x_1+2x_2-x_3=2$。",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$，然后 $R_3+3R_2$：$\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$。",
      "回代：$x_3=3$，$x_2=-4+2\\cdot 3=2$，$x_1=6-2-3=1$。<strong>解：</strong>$(1, 2, 3)$。"
     ]
    },
    {
     "task": "解方程组 $x_1+2x_2-x_3=1$，$2x_1+4x_2+x_3=5$。",
     "steps": [
      "$R_2-2R_1$：$\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$，所以 $h(A)=h(A\\mid b)=2\\lt 3$——有无穷多解，含一个参数。",
      "由第 2 行得 $x_3=1$。未知数 $x_2$ 没有主元，取 $x_2=t$；由第 1 行得 $x_1=1-2t+1=2-2t$。",
      "<strong>解：</strong>$(2-2t, t, 1)$，$t\\in\\mathbb{R}$。"
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "向量空间、基与维数",
   "summary": "向量空间与子空间、基、维数以及向量在基下的坐标。",
   "theory": [
    "<p>$\\mathbb{R}$ 上的<strong>向量空间</strong>是一个集合 $V$，其上定义了加法和与实数的乘法，运算结果仍在 $V$ 中，并满足通常的规则：加法的交换律和结合律、零向量和负向量的存在、分配律、$(cd)u=c(du)$ 以及 $1\\cdot u=u$。例如：$\\mathbb{R}^n$、$m\\times n$ 型矩阵、次数不超过 $n$ 的多项式（$P_n$）、区间上的实函数。</p>",
    "<p><strong>子空间</strong>是对加法和数乘封闭的非空子集 $W\\subseteq V$；此时必有 $o\\in W$。例如，$\\mathbb{R}^3$ 的子空间有：过原点的直线和平面、齐次方程组的解集以及任何线性张成。不过原点的平面不是子空间。</p>",
    "<p>空间 $V$ 的<strong>基</strong>是一个线性无关的向量组，它的线性张成就是整个 $V$。所有的基含有相同个数的向量——这个数就是<strong>维数</strong> $\\dim V$。例如 $\\dim\\mathbb{R}^n=n$（标准基 $e_1, \\dots, e_n$），$\\dim P_n=n+1$，$m\\times n$ 矩阵空间的维数是 $mn$。在 $n$ 维空间中，任意 $n$ 个线性无关的向量都构成一组基，而 $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ 等于以 $u_1, \\dots, u_k$ 为行的矩阵的秩。</p>",
    {
     "fig": "v1-baza",
     "caption": "基 $b_1=(2, 1)$，$b_2=(-1, 2)$ 构成一张“斜的”网格。向量在基 $B$ 下的坐标 $(c_1, c_2)$ 表示沿 $b_1$ 方向和沿 $b_2$ 方向各要走多少步。"
    },
    "<p>若 $B=(b_1, \\dots, b_n)$ 是一组基，则每个向量都可以<strong>唯一地</strong>写成 $v=c_1b_1+\\dots+c_nb_n$；数 $(c_1, \\dots, c_n)$ 就是向量 $v$ 在基 $B$ 下的<strong>坐标</strong>。求坐标时，解一个方程组：其系数矩阵的各列是基向量，右端是 $v$。</p>"
   ],
   "examples": [
    {
     "task": "求向量 $v=(3, 0, 1)$ 在基 $b_1=(1, 0, 1)$，$b_2=(0, 1, 1)$，$b_3=(1, 1, 0)$ 下的坐标。",
     "steps": [
      "由 $v=c_1b_1+c_2b_2+c_3b_3$ 得方程组 $c_1+c_3=3$，$c_2+c_3=0$，$c_1+c_2=1$。",
      "前两个方程相减得 $c_1-c_2=3$；与 $c_1+c_2=1$ 联立得 $c_1=2$，$c_2=-1$，$c_3=1$。",
      "<strong>结果：</strong>$(v)_B=(2, -1, 1)$。检验：$2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$。"
     ]
    },
    {
     "task": "求子空间 $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$ 的一组基和维数。",
     "steps": [
      "系数矩阵 $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ 已是行阶梯形，秩为 2，所以 $\\dim W=4-2=2$。",
      "自由未知数：$x_3=s$，$x_4=t$。于是 $x_2=-t$，$x_1=x_3-x_2=s+t$，即 $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$。",
      "<strong>结果：</strong>基为 $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$，$\\dim W=2$。"
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "线性映射及其矩阵",
   "summary": "线性映射、映射的矩阵、映射的复合、平面上的几何变换、核与像。",
   "theory": [
    "<p>向量空间之间的映射 $f:V\\to W$ 称为<strong>线性</strong>的，如果对所有向量 $u, v$ 和数 $c$ 都有 $f(u+v)=f(u)+f(v)$ 且 $f(cu)=c\\,f(u)$；此时 $f(o)=o$。每个线性映射 $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ 都可以唯一地写成 $f(x)=Ax$，其中 $A$ 是 $m\\times n$ 型矩阵，它的各列是标准基向量的像：$A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$。复合映射 $g\\circ f$（先 $f$ 后 $g$）对应矩阵乘积 $A_gA_f$。</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>$\\mathbb{R}^2$ 中的变换</th><th>矩阵</th></tr>\n       <tr><td>旋转角 $\\varphi$</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>关于 $x$ 轴对称</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>关于直线 $y=x$ 对称</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>向 $x$ 轴的正交投影</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>位似变换，系数为 $k$</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "旋转角 $\\varphi$：向量 $e_1$（蓝色）和 $e_2$（绿色）的像恰好是旋转矩阵的各列。虚线图形是原像，实线图形是它的像。"
    },
    "<p><strong>核</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ 是齐次方程组 $Ax=o$ 的解集；<strong>像</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ 是矩阵 $A$ 各列的线性张成。两者都是子空间，且 $\\dim\\operatorname{Im}f=h(A)$。<strong>秩–零化度定理</strong>（核与像的维数定理）：$\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$。映射是单射当且仅当 $\\operatorname{Ker}f=\\{o\\}$。</p>"
   ],
   "examples": [
    {
     "task": "求这样一个变换的矩阵：先把向量逆时针旋转 $90^\\circ$，再作关于 $x$ 轴的对称。向量 $(2, 1)$ 的像是什么？",
     "steps": [
      "旋转：$R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$，对称：$S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$。复合（先 $R$ 后 $S$）的矩阵是 $SR$。",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$——这是关于直线 $y=-x$ 的对称。",
      "<strong>像：</strong>$SR\\,(2, 1)^{T}=(-1, -2)^{T}$。"
     ]
    },
    {
     "task": "求映射 $f(x)=Ax$ 的核以及像的维数，其中 $A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$。",
     "steps": [
      "第三行是前两行之和，所以 $h(A)=2$，$\\dim\\operatorname{Im}f=2$。",
      "核：$x_1+x_2=0$，$x_2+x_3=0$。取 $x_3=t$，则 $x_2=-t$，$x_1=t$，所以 $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$。",
      "用维数定理检验：$\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$。"
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "特征值与特征向量",
   "summary": "特征多项式，2×2 和 3×3 矩阵的特征值与特征向量，对角化与矩阵的幂。",
   "theory": [
    "<p>如果存在非零向量 $v$ 使 $Av=\\lambda v$，则数 $\\lambda$ 称为方阵 $A$ 的<strong>特征值</strong>；向量 $v$ 称为属于 $\\lambda$ 的<strong>特征向量</strong>。几何意义：变换 $x\\mapsto Ax$ 保持向量 $v$ 的方向，只是把它拉伸 $\\lambda$ 倍（当 $\\lambda\\lt 0$ 时还会反向）。</p>",
    "<p>特征值是<strong>特征多项式</strong> $p(\\lambda)=\\det(A-\\lambda I)$ 的根。对 $2\\times 2$ 矩阵，$p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$。一般地，特征值之和等于 $\\operatorname{tr}A$，特征值之积等于 $\\det A$；三角矩阵的特征值就是对角线上的元素。属于 $\\lambda$ 的特征向量是齐次方程组 $(A-\\lambda I)v=o$ 的非零解。</p>",
    {
     "fig": "v1-matica",
     "caption": "矩阵 $A$ 把单位正方形映成以 $Ae_1$ 和 $Ae_2$（矩阵的列）为边的平行四边形，其面积为 $|\\det A|$。橙色直线是特征方向——其上的向量被映成自身的倍数。"
    },
    "<p><strong>对角化：</strong>如果 $A=PDP^{-1}$，其中 $D$ 是对角矩阵，则称 $n$ 阶矩阵 $A$ 可对角化。这当且仅当 $A$ 有 $n$ 个线性无关的特征向量；它们构成矩阵 $P$ 的各列，$D$ 的对角线上按相同顺序排列相应的特征值。$A$ 有 $n$ 个互不相同的特征值就足够了；每个实对称矩阵都可对角化。应用：$A^k=PD^kP^{-1}$。</p>"
   ],
   "examples": [
    {
     "task": "求矩阵 $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$ 的特征值和特征向量。",
     "steps": [
      "$\\operatorname{tr}A=7$，$\\det A=10$，所以 $\\lambda^2-7\\lambda+10=0$，$\\lambda_1=2$，$\\lambda_2=5$。",
      "$\\lambda=5$：$A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$，方程 $-v_1+v_2=0$，特征向量 $(1, 1)$。",
      "$\\lambda=2$：$A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$，方程 $2v_1+v_2=0$，特征向量 $(1, -2)$。"
     ]
    },
    {
     "task": "利用对角化计算 $A^3$，其中 $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$。",
     "steps": [
      "由上一例，$P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$，$D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$，$P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$。",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>结果：</strong>$A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$。"
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "内积、正交与投影",
   "summary": "内积与范数、向量的夹角、正交投影与格拉姆–施密特正交化。",
   "theory": [
    "<p>$\\mathbb{R}^n$ 中的<strong>标准内积</strong>（数量积）为 $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$。它是对称的，对每个变元都是线性的，并且当 $u\\neq o$ 时 $\\langle u, u\\rangle\\gt 0$。<strong>范数</strong>（长度）为 $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$，两向量的距离为 $\\|u-v\\|$。<strong>柯西–施瓦茨不等式</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$ 成立，因此非零向量的夹角 $\\varphi$ 有良好定义：$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$。</p>",
    "<p>若 $\\langle u, v\\rangle=0$，则称向量<strong>正交</strong>（$u\\perp v$）。两两正交的非零向量组是线性无关的；如果它们的范数还都是 1，就称为<strong>标准正交</strong>向量组。向量 $v$ 在方向 $u\\neq o$ 上的<strong>正交投影</strong>为 $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$；向量 $v-\\operatorname{proj}_u v$ 垂直于 $u$，它的范数就是点 $v$ 到直线 $\\mathcal{L}(u)$ 的距离。</p>",
    {
     "fig": "v1-projekcia",
     "caption": "向量 $v$（蓝色）在方向为 $u=(\\cos\\theta, \\sin\\theta)$ 的直线上的投影：绿色向量是 $\\operatorname{proj}_u v$，虚线段垂直于该直线。"
    },
    "<p><strong>格拉姆–施密特正交化</strong>把线性无关的向量 $u_1, \\dots, u_k$ 变成线性张成相同的正交向量组：$w_1=u_1$，$w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$，即从每个向量中减去它在已得到的各向量上的投影。再除以各自的范数 $e_j=w_j/\\|w_j\\|$，就得到一组标准正交基。</p>"
   ],
   "examples": [
    {
     "task": "求向量 $v=(3, 1, 2)$ 在方向 $u=(1, 1, 0)$ 上的正交投影，以及点 $v$ 到直线 $\\mathcal{L}(u)$ 的距离。",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$，$\\langle u, u\\rangle=2$，所以 $\\operatorname{proj}_u v=2u=(2, 2, 0)$。",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$；检验垂直：$\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$。",
      "<strong>距离：</strong>$\\|(1, -1, 2)\\|=\\sqrt{6}$。"
     ]
    },
    {
     "task": "用格拉姆–施密特方法把向量 $u_1=(1, 1, 1)$ 和 $u_2=(1, 2, 3)$ 正交化。",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$，$\\langle w_1, w_1\\rangle=3$，所以 $w_2=u_2-2w_1=(-1, 0, 1)$；确实 $\\langle w_1, w_2\\rangle=0$。",
      "标准正交基：$e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$，$e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$。"
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "二次型与正定性",
   "summary": "二次型的矩阵、正定性（定性）、西尔维斯特判别法。",
   "theory": [
    "<p>$\\mathbb{R}^n$ 上的<strong>二次型</strong>是函数 $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$，其中 $A$ 是对称矩阵——<strong>二次型的矩阵</strong>。$x_i^2$ 的系数是 $a_{ii}$，$x_ix_j$（$i\\neq j$）的系数是 $2a_{ij}$。例如 $Q=x_1^2+4x_1x_2-3x_2^2$ 的矩阵为 $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$。</p>",
    "<p>如果对每个 $x\\neq o$ 都有 $Q(x)\\gt 0$，则二次型（及其矩阵）称为<strong>正定</strong>的；如果对所有 $x$ 都有 $Q(x)\\ge 0$，则称为<strong>半正定</strong>的；类似地有<strong>负定（半负定）</strong>；如果既取正值又取负值，则称为<strong>不定</strong>的。用特征值判断：全部为正 $\\iff$ 正定，全部非负 $\\iff$ 半正定，有正有负 $\\iff$ 不定。</p>",
    "<p><strong>西尔维斯特判别法：</strong>设 $D_1=a_{11}$，$D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$，…，$D_n=\\det A$ 为顺序主子式。二次型正定 $\\iff$ 对所有 $k$ 有 $D_k\\gt 0$；负定 $\\iff$ 符号交替 $D_1\\lt 0$，$D_2\\gt 0$，$D_3\\lt 0$，… 如果 $\\det A\\neq 0$ 且两种情形都不成立，则二次型不定。当 $\\det A=0$ 时，仅凭顺序主子式不足以判断半定性——需要用特征值或全部主子式。</p>"
   ],
   "examples": [
    {
     "task": "判断二次型 $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$ 的正定性。",
     "steps": [
      "二次型的矩阵：$A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$。",
      "$D_1=2$，$D_2=2\\cdot 1-1\\cdot 1=1$，$D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$。",
      "所有顺序主子式都为正，二次型<strong>正定</strong>。"
     ]
    },
    {
     "task": "当 $a$ 取何值时，二次型 $Q=x^2+4xy+ay^2$ 正定？",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$，$D_1=1\\gt 0$，$D_2=a-4$。",
      "<strong>结果：</strong>二次型正定当且仅当 $a\\gt 4$。"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$：$A^{-1}$ 的第 $i$ 行由矩阵 $A$ 第 $i$ <em>列</em>元素的代数余子式构成。",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$，$D_1={@1}\\gt 0$，$D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$。因此 $c={@5}$。",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$。与 $A$ 比较可知，{@1}。",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$，所以 ${@1}={@2}={@3}$。",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$。<br>$D_{{@2}}={@3}={@4}$。<br>因此 $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$。",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ 是齐次方程组的解集，因此 $\\dim W=n-h(A)$。方程组系数矩阵的秩：<br>{@0}<br>$h(A)={@1}$，所以 $\\dim W={@2}-{@3}={@4}$。",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$；这些向量的范数都是整数。",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$，一个特征值为 $0$，另一个等于 $\\operatorname{tr}A={@0}$；因此两者都{@1}，且其中一个为零",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$，因此 $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$。",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$。由公式 $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$，需要第 {@3} 列元素的代数余子式：${@4}$。",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$。又 $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$，且 ${@5}$。因此 $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$。",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$，且不属于前面任何一种情形",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$，而转置不改变行列式。因此乘积中 $\\det A$ 出现两次。",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$，而 $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ 等于矩阵的列数（定义域的维数）。",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$，$\\|u\\|={@1}$，$\\|v\\|={@2}$，因此 $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$。",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$。由条件 $\\langle u, v\\rangle=0$ 得 $t={@2}$。",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$，$\\langle u, u\\rangle={@2}$。",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$。",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$，$\\det A={@1}$，特征方程为 ${@2}{@3}=0$。",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$，有唯一解",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$，有无穷多解（{@1}）",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$，方程组无解",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$，$\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$。",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$。$\\langle u_2, w_1\\rangle={@0}$，$\\langle w_1, w_1\\rangle={@1}$，系数 $\\frac{{@2}}{{@3}}={@4}$。",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$；结果必须与 $w_1$ 正交。",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$。检验：$\\langle w_1, w_2\\rangle={@6}$。",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$，其中 $D_{{@2}}$ 是把方程组系数矩阵的第 {@3} 列换成常数项列得到的。",
  "(mení orientáciu)": "（改变定向）",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "（确实 ${@0}={@1}{@2} {@3} {@4}{@5}$）",
  "+ súčiny na zelených diagonálach": "+ 绿色对角线上的乘积",
  ", teda ${@0}{@1} {@2} = {@3}$": "，因此 ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "<strong>是</strong>子空间：{@0}。",
  "<strong>Nie je</strong> podpriestor: {@0}.": "<strong>不是</strong>子空间：{@0}。",
  "Aká je definitnosť formy?": "这个二次型的定性是什么？",
  "Aká je dimenzia $W$?": "$W$ 的维数是多少？",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "核 $\\operatorname{Ker}f$ 的维数是多少？",
  "Aká je hodnosť matice $A$?": "矩阵 $A$ 的秩是多少？",
  "Aká je hodnosť matice sústavy $h(A)$?": "系数矩阵的秩 $h(A)$ 是多少？",
  "Aká je hodnosť matice sústavy?": "系数矩阵的秩是多少？",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "增广矩阵的秩 $h(A\\mid b)$ 是多少？",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "$(-1)^{{@0}+{@1}}$ 的符号是什么？输入 $1$ 或 $-1$。",
  "Aký je absolútny člen $D_0$?": "常数项 $D_0$ 是多少？",
  "Aký je absolútny člen $b$?": "常数项 $b$ 是多少？",
  "Aký je determinant tejto podmatice?": "这个子矩阵的行列式是多少？",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "代数余子式还要除以矩阵 $A$ 的行列式。",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "反对称矩阵的对角线上都是零，并且满足 $a_{ij}=-a_{ji}$。对所有元素对逐一验证。",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "不必算出整个逆矩阵：$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$（代数余子式的下标要交换）。",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "用克拉默法则求方程组 ${@1}$ 中的未知数 $x_{{@0}}$。非整数结果请写成分数。",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "由克拉默法则：$D={@0}={@1}$，$D_\\alpha={@2}={@3}$，$D_\\beta={@4}={@5}$，",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "已知 $\\mathbb{R}^{{@2}}$ 中的向量 $u={@0}$ 和 $v={@1}$。求向量 ${@3}$。各分量用分号隔开。",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "行列式不为零，这些向量<strong>线性无关</strong>。",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "行列式为零，这些向量<strong>线性相关</strong>{@0}。",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "行列式虽然为零，但要看非零特征值的符号：对于 $2\\times 2$ 矩阵，它等于迹。",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "以 $u, v, w$ 为行的矩阵的行列式是参数 $t$ 的线性函数——按含参数的那一行展开，并令其等于零。",
  "Diagonálne prvky matice $D^{{@0}}$?": "矩阵 $D^{{@0}}$ 的对角元素是什么？",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "对角元素 $(A^{T}A)_{jj}$ 是矩阵 $A$ 第 $j$ 列各元素的平方和，因此 $\\operatorname{tr}(A^{T}A)$ 是所有元素的平方和：${@0}={@1}={@2}$。",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "线性张成的维数等于以这些向量为行的矩阵的秩：<br>{@0}<br>阶梯形中有 {@1} {@2}，因此 $\\dim W={@3}$。",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "判别式 ${@0}{@1}$，因此 $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$，即 $\\lambda_1={@4}$，$\\lambda_2={@5}$。",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "二次型矩阵的非对角元素是 $xy$ 系数的一半，即 ${@0}$，而不是 ${@1}$。",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "把 $x_3$ 代入倒数第二行，求出 $x_2$。",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "二次型 $Q={@0}$ 正定当且仅当 $a\\gt c$。求数 $c$（必要时写成分数）。",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "二次型 $Q={@0}+ay^2$ 正定当且仅当 $a\\gt c$。求数 $c$（必要时写成分数）。",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "用高斯消元法把矩阵化为阶梯形：<br>{@0}<br>阶梯形中有 {@1} {@2}，因此 $h(A)={@3}$。",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "用高斯消元法解方程组 ${@0}$。按“x₁; x₂; x₃”的格式输入解。",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "用格拉姆–施密特方法将向量 $u_1={@0}$ 和 $u_2={@1}$ 正交化（按此顺序，不单位化）。输入向量 $w_2$。",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "找一个反例：零向量属于 $W$ 吗？$W$ 中两个元素的和还在 $W$ 中吗？数乘呢？",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "不定二次型既能取正值也能取负值。按西尔维斯特判据检查顺序主子式的符号。",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "核是齐次方程组 $Ax=o$ 的解集。化简矩阵，并取一个自由未知数作为参数。",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "核是方程组 $Ax=o$ 的解集：<br>{@0}<br>$h(A)=2$，因此 $\\dim\\operatorname{Ker}f=3-2=1$。解与两个非零行都正交，所以是 ${@1}\\times{@2}={@3}${@4} 的倍数。因此 $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$。",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "集合 $W={@0}$ 是向量空间 $\\mathbb{R}^3$ 的子空间吗？",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "只有当所有顺序主子式都为正时，二次型才是正定的。",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "$x_ix_j$（$i\\neq j$）的系数平均分给 $a_{ij}$ 和 $a_{ji}$，因此 $a_{ij}$ 是该系数的一半。二次型矩阵：$A={@0}$。",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "在对称矩阵中，$x_ix_j$ 的系数平均分给 $a_{ij}$ 和 $a_{ji}$，各得一半。",
  "Koľko riešení má sústava ${@0}$?": "方程组 ${@0}$ 有多少个解？",
  "Koľko riešení má sústava?": "这个方程组有多少个解？",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "二次型为 $Q={@0}$。求它的对称矩阵的元素 $a_{12}, a_{13}, a_{23}$（用分号隔开）（分数写成 $p/q$）。",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "二次型为 $Q={@0}$。求它的对称矩阵的元素 $a_{12}$（分数写成 $p/q$）。",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "二次因式满足 $\\operatorname{tr}={@0}$，$\\det={@1}$，根为 ${@2}$ 和 ${@3}$。特征值为 ${@4}$。",
  "Lineárna kombinácia dvoch vektorov": "两个向量的线性组合",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "线性映射 $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ 满足 $f{@0}={@1}$ 和 $f{@2}={@3}$。求映射 $f$ 的矩阵 $A$（在标准基下）。按行输入元素。",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "矩阵 $-A^{3}$ 等于 $(-1)\\cdot A^{3}$，而 $\\det(-M)=(-1)^{{@0}}\\det M$。",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "矩阵 $A={@0}$ 的特征值为 ${@1}$ 和 ${@2}$。利用对角化计算 $A^{{@3}}$。按行输入元素。",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "矩阵 $B$ 由 $A$ 交换前两行并将最后一行乘以 ${@0}$ 得到。",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "二次型矩阵 $A={@0}$。$D_1={@1}\\gt 0$，$D_2={@2}\\gt 0$ 与 $a$ 无关。按第 3 行展开（或用萨吕法则）得 $D_3=\\det A={@3}$。",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "二次型矩阵：$A={@0}$。顺序主子式：${@1}$。由于{@2}，该二次型是<strong>{@3}</strong>的。",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "这个矩阵不是三角矩阵，因此特征值不是它的对角元素。将 $\\det(A-\\lambda I)$ 按第 3 行展开。",
  "Matica v stupňovitom tvare": "阶梯形矩阵",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "矩阵：$A_f={@0}$，$A_g={@1}$。复合映射的矩阵为 $A_gA_f={@2}$，因此 $(g\\circ f)(v)={@3}{@4}={@5}$。",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "子式 $D_3=\\det A$ 的形式为 $D_2\\,a+K$。数 $K$ 是多少？",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "余子式还要乘以展开所依据的元素本身 $a_{{@0}{@1}}={@2}$。",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "余子式：$M_{{@0}{@1}}={@2}={@3}$。因此 $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$。",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "矩阵的幂不能逐元素计算，这只对对角矩阵 $D$ 成立。使用 $A^k=PD^kP^{-1}$。",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "先把 $B$ 转置（行 ↔ 列），再逐元素计算。",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "先把每个向量乘以它的系数（每个分量都乘），再把对应分量相加。",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "把 $v=c_1b_1+c_2b_2+c_3b_3$ 按分量写出：得到三个方程组成的方程组，其系数矩阵的列就是基向量。",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "写出矩阵 $A-{@0}I$（按行输入元素）。",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "写出矩阵 $B^{T}$（按行输入元素）。",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "只有当 $h(A)=h(A\\mid b)\\lt 3$ 时才有无穷多解。还要看系数矩阵中为零的那一行的右端。",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "求齐次方程组 ${@0}$ 的一个非平凡解。（任意非零倍数都算对。）",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "已知 $A={@1}$，$B={@2}$，求满足 ${@0}X-A=B^{T}$ 的矩阵 $X$。按行输入元素。",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "求方程组 $(A-\\lambda I)v=o$ 的一个非零解（任意非零倍数都算对）。",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "求向量 $v={@0}$ 在 $\\mathbb{R}^3$ 的基 $b_1={@1}$，$b_2={@2}$，$b_3={@3}$ 下的坐标。按“c₁; c₂; c₃”的格式输入。",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "求出特征向量，组成 $P$ 和 $D$，再用 $A^k=PD^kP^{-1}$；对角矩阵的幂只需对对角元素逐个求幂。",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "求矩阵 $A={@0}$ 的特征值。用分号隔开输入。",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "求矩阵 $A={@0}$ 的所有特征值。用分号隔开输入（重特征值按重数重复输入）。",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "求矩阵 $A={@1}$ 的逆矩阵的第 {@0} 行。输入三个数，用分号隔开。",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "求数 $\\alpha, \\beta$，使 ${@0}=\\alpha{@1}+\\beta{@2}$。按“α; β”的格式输入。",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "矩阵乘法不满足交换律。由方程 ${@0}$ 应当{@1}乘以矩阵 $A^{-1}$。",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "两个条件合起来：$A\\,(u\\mid v)=(f(u)\\mid f(v))$。求矩阵 $(u\\mid v)$ 的逆，并从右侧相乘。",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "单位正方形在 2×2 矩阵所给映射下的像",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "不是用未知数个数减去方程个数，而是减去系数矩阵的秩：有些方程可能是相关的。",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "把向量按分量相减，再用 $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$。",
  "Ortogonálna projekcia vektora na priamku": "向量在直线上的正交投影",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "验证全部三个条件：含零向量、对加法封闭、对数乘封闭。若都成立，就是子空间。",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "验证 $W$ 是否含零向量，以及是否对加法和实数数乘封闭。要否定，只需一个反例。",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "化简后剩下两个独立方程。取一个未知数作为参数（或用两行的向量积）。",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "条件 $D = 0$ 给出 ${@0}{@1} = {@2}$，因此 ${@3} = {@4}$。",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "条件 $D_3\\gt 0$ 给出 $a\\gt {@0}$，因此 $c={@1}$。",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "把 $A^{T}$ 与 $A$ 以及 $-A$ 逐个元素比较。也许其中一个等式成立。",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "比较各分量得方程组 ${@0}={@1}$，${@2}={@3}$。",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "使用 $\\det(cA)=c^{n}\\det A$，$\\det(AB)=\\det A\\det B$，$\\det A^{T}=\\det A$ 和 $\\det A^{-1}=1/\\det A$。",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "用萨吕法则：三个“向右下”的乘积取正号，三个“向左下”的乘积取负号。",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "你用了第 {@0} 行的代数余子式。伴随矩阵是转置的：逆矩阵的第 {@1} 行由第 {@2} 列的代数余子式构成。",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "你用了代数余子式 $A_{{@0}{@1}}$。求元素 $(A^{-1})_{{@2}{@3}}$ 需要下标交换后的代数余子式 $A_{{@4}{@5}}$。",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "按分量计算：${@0}=({@1})={@2}$。",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "对于 $A={@0}$ 和 $B={@1}$，求矩阵 ${@2}$。按行输入元素（4 个数，用分号隔开）。",
  "Pre ktoré $a$ je $D=0$?": "$a$ 为何值时 $D=0$？",
  "Pre ktoré $t$ je $D=0$?": "$t$ 为何值时 $D=0$？",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "$t$ 为何值时数量积为零？非整数结果请写成分数。",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "$t$ 为何值时向量 $u={@0}$ 与 $v={@1}$ 正交？非整数结果请写成分数。",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "参数 $a$ 取何值时矩阵 $A={@0}$ 的秩为 2？",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "参数 $t$ 取何值时向量 $u={@0}$，$v={@1}$，$w={@2}$ 线性相关？",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "对于 $2\\times 2$ 矩阵，解 $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$。",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "对于矩阵 $A={@0}$，求逆矩阵的元素 $(A^{-1})_{{@1}{@2}}$。非整数结果请写成分数。",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "对于矩阵 $A={@0}$，求迹 $\\operatorname{tr}(A^{T}A)$。",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "用萨吕法则重新计算行列式：三个乘积相加，三个乘积相减。只有行列式不为零时向量才线性无关。",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "三阶矩阵不能像 $2\\times 2$ 那样只用两条对角线。萨吕法则有六个乘积：三正三负。",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "把 ${@0}$ 阶矩阵乘以数 $c$ 时，行列式乘以 $c^{n}$，而不只是 $c$。",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "把 ${@0}$ 阶矩阵乘以数 $c$ 时，${@1}$ 行中的每一行都乘以 $c$：$\\det(cA)=c^{n}\\det A$。",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "把 $A$ 移到等式另一边时要变号：${@0}X=A+B^{T}$。",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "对于交叉项 $c\\,x_ix_j$，$a_{ij}=a_{ji}=c/2$。",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "对 $w_1$ 的投影应从 $u_2$ 中减去，而不是加上。检验结果是否与 $w_1$ 正交。",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "元素没有平方。对角元素 $(A^{T}A)_{jj}$ 是第 $j$ 列与自身的数量积，即平方和。",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "元素 $(A^{T}A)_{jj}$ 是矩阵 $A$ 的第 $j$ 列与自身的数量积。",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "前两行不成比例，因此 $h(A)\\ge 2$。秩小于 3 当且仅当 $D=\\det A=0$。{@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "前两个顺序主子式与 $a$ 无关；$D_3=\\det A$ 是 $a$ 的线性函数，系数为 $D_2$。",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "只有当 $h(A)=h(A\\mid b)=3$ 时方程组才有唯一解。检查消元后系数矩阵中是否出现零行。",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "用行变换把主元下方的元素化为零，然后数一数非零行。",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "含 $n$ 个未知数的齐次方程组的解构成 $n-h(A)$ 维子空间。",
  "Riešenie je $X={@0}={@1}={@2}$.": "解为 $X={@0}={@1}={@2}$。",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "解 $(A-\\lambda I)v=o$，其中 $A-{@0}I={@1}$。{@2} 检验：$A{@3}={@4}={@5}\\cdot{@6}$。",
  "Rotácia útvaru okolo počiatku": "图形绕原点旋转",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "方程 $c_1b_1+c_2b_2+c_3b_3=v$ 是一个方程组，其矩阵的列是基向量：<br>{@0}<br>回代——{@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "方程两边从右侧乘以矩阵 $A^{-1}$：$X=BA^{-1}$。",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "方程两边从左侧乘以矩阵 $A^{-1}$：$X=A^{-1}B$。",
  "Rozhodni, aká je matica $A={@0}$.": "判断矩阵 $A={@0}$ 是哪一类。",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "按只有一个非零元素的行或列展开行列式。别忘了符号 $(-1)^{i+j}$。",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "将 $\\det(A-\\lambda I)$ 按第 3 行展开：$p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$。",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "按第 3 行展开行列式得 $D=Ca+D_0$。系数 $C$（含参数元素的代数余子式）是多少？",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "按第 3 行展开得 $D=Ct+D_0$。系数 $C$（含参数元素的代数余子式）是多少？",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "按第 3 行展开：$D = {@0}$，其中 ${@1}$。因此 $D = {@2}$。",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "按第 3 行展开会得到因子 $(c-\\lambda)$。$c$ 是多少？",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "把增广矩阵化为阶梯形，再自下而上求出未知数。",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "像处理普通方程一样处理矩阵方程：先把 $X$ 单独留在一边，再逐元素计算。",
  "Sarrusovo pravidlo pre determinant 3×3": "三阶行列式的萨吕法则",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "萨吕法则：$\\det A={@0}$。",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "萨吕法则：向右下的三条对角线上的乘积取正号，向左下的三条取负号。",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "半定二次型满足 $\\det A=0$，即至少有一个特征值为零。检查行列式。",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "数量积 $\\langle u, v\\rangle$ 的形式为 $at+b$。系数 $a$ 是多少？",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "数量积还要除以 $\\langle u, u\\rangle=\\|u\\|^2$。",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "映射矩阵的列是向量 $e_1=(1, 0)$ 和 $e_2=(0, 1)$ 的像。复合“先 $f$ 后 $g$”对应乘积 $A_gA_f$。",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "常数项列应放在行列式的第 {@0} <em>列</em>，而不是第 {@1} 行。",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "西尔维斯特判据：$D_1\\gt 0$ 总成立，条件由 $D_2=\\det A\\gt 0$ 给出。",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "对称矩阵对所有关于主对角线对称的元素对满足 $a_{ij}=a_{ji}$。逐对比较它们。",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "向量 $u={@0}$，$v={@1}$ 和 $w={@2}$ 是线性相关还是线性无关？",
  "Sú vektory lineárne závislé, alebo nezávislé?": "这些向量是线性相关还是线性无关？",
  "Súradnice vektora v báze b₁, b₂": "向量在基 b₁, b₂ 下的坐标",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "方程组为 ${@0}={@1}$，${@2}={@3}$。计算它的行列式 $D$。",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "只有出现形如 $(0\\ 0\\ 0\\mid c)$（$c\\neq 0$）的行，即 $h(A)\\neq h(A\\mid b)$ 时，方程组才无解。",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "向左下的对角线上的乘积应从正项中减去，而不是加上。",
  "Sčítaj ich: aký je vektor ${@0}$?": "把它们相加：向量 ${@0}$ 是什么？",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "因此矩阵 $A^{-1}$ 的第 {@0} 行为 $\\frac{1}{{@1}}({@2})={@3}$。",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "这是 $\\dim\\operatorname{Im}f=h(A)$。核的维数是列数减去秩。",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "这是整个空间 $\\mathbb{R}^{{@0}}$ 的维数。子空间的维数可以更小，由秩决定。",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "这是核的维数。像的维数等于矩阵的秩。",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "这是系数矩阵的秩。解空间的维数是自由未知数的个数 $n-h(A)$。",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "这是原矩阵的行数。秩是化为阶梯形之后非零行的个数。",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "这是列数。秩是阶梯形中非零行的个数。",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "这是向量的个数。其中有些可能是其余向量的线性组合；维数是由它们组成的矩阵的秩。",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "这是向量 $u$ 在 $v$ 方向上的投影。我们要把 $v$ 投影到 $u$ 的方向上，因此结果是向量 $u$ 的倍数。",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "把矩阵转置，再与 $A$ 和 $-A$ 比较。也看看对角线。",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "二元一次方程组的三种情况",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "$\\mathbb{R}^3$ 中的三个向量线性无关，当且仅当由它们组成的矩阵的行列式不为零。",
  "Uhol priamky θ (°)": "直线的角 θ (°)",
  "Uhol φ (°)": "角 φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "把增广矩阵化为阶梯形，比较 $h(A)$、$h(A\\mid b)$ 与未知数的个数。",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "把增广矩阵化为阶梯形。系数矩阵的秩 $h(A)$ 是多少？",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "把增广矩阵化为阶梯形。由最后一行求出 $x_3$。",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "判断二次型 $Q={@0}$ 的定性（选择最准确的选项）。",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "求空间 $\\mathbb{R}^{{@1}}$ 的子空间 $W=\\mathcal{L}({@0})$ 的维数。",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "求子空间 $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$ 的维数。",
  "Urči hodnosť matice $A={@0}$.": "求矩阵 $A={@0}$ 的秩。",
  "Urči číslo $c$ (prípadne ako zlomok).": "求数 $c$（必要时写成分数）。",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "分母是范数 $\\|u\\|$ 和 $\\|v\\|$，而不是它们的平方。",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "第三行有两个零——按它展开 $\\det(A-\\lambda I)$，剩下的 $2\\times 2$ 行列式按二次方程求解。",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "第 {@0} 行只有一个非零元素 $a_{{@1}{@2}}={@3}$，因此按这一行作拉普拉斯展开得 $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$。",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "第 {@0} 列只有一个非零元素 $a_{{@1}{@2}}={@3}$，因此按这一列作拉普拉斯展开得 $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$。",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "先用映射 $f$ 作用于向量 $v={@0}$：{@1}，再用映射 $g$ 作用于结果：{@2}。按“x; y”的格式求像 $(g\\circ f)(v)$。",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "基向量应放在方程组系数矩阵的<em>列</em>中，而不是行中：第 $i$ 个方程比较的是第 $i$ 个分量。",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "两个向量正交当且仅当它们的数量积为零。",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "向量线性相关当且仅当 $D={@0}=0$。{@1} 当 $t={@2}$ 时，$w$ 是向量 $u$ 和 $v$ 的线性组合。",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "把向量写成矩阵的各行，求矩阵的秩。",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "把向量写成矩阵的各行，用萨吕法则计算行列式：${@0}={@1}$。",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "把向量写成列：$A\\,U=P$，其中 $U={@0}$，$P={@1}$。由于 $\\det U={@2}$，$U^{-1}={@3}$，所以 $A=PU^{-1}={@4}{@5}={@6}$。",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "特征向量是齐次方程组 $(A-\\lambda I)v=o$ 的非零解。",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "特征向量：$\\lambda={@1}$ 对应 ${@0}$，$\\lambda={@3}$ 对应 ${@2}$。因此 $P={@4}$，$D={@5}$，$\\det P={@6}$，$P^{-1}={@7}$。",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "只有三角矩阵的特征值才是对角元素。这里要解特征方程 $\\det(A-\\lambda I)=0$。",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "维数定理中用的是定义域的维数，即列数 ${@0}$，而不是行数。",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "把一行乘以 ${@0}$，行列式就乘以 ${@1}$。",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "计算 $(A^{-1})_{{@0}{@1}}$。非整数结果请写成分数。",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "计算 $A=PU^{-1}$（按行输入元素）。",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "计算 $A^{-1}$（按行输入元素）。",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "计算 $A^{{@0}}=PD^{{@1}}P^{-1}$（按行输入元素）。",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "计算 $X={@0}$（按行输入元素）。",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "计算 $\\cos\\varphi$（写成分数）。",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "设 $\\varphi$ 为向量 $u={@0}$ 与 $v={@1}$ 的夹角，求 $\\cos\\varphi$。结果写成分数。",
  "Vypočítaj $\\det A$.": "计算 $\\det A$。",
  "Vypočítaj $\\langle u, u\\rangle$.": "计算 $\\langle u, u\\rangle$。",
  "Vypočítaj $\\langle u, v\\rangle$.": "计算 $\\langle u, v\\rangle$。",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "计算 $\\langle u_2, w_1\\rangle$，其中 $w_1=u_1$。",
  "Vypočítaj $\\langle v, u\\rangle$.": "计算 $\\langle v, u\\rangle$。",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "计算 $\\langle w_1, w_1\\rangle$。",
  "Vypočítaj $\\|u\\|$.": "计算 $\\|u\\|$。",
  "Vypočítaj $\\|v\\|$.": "计算 $\\|v\\|$。",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "求出 $c_1$，并输入全部坐标。",
  "Vypočítaj $c_2$.": "计算 $c_2$。",
  "Vypočítaj $f(v)$.": "计算 $f(v)$。",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "计算 $g\\bigl(f(v)\\bigr)$。",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "计算 $x_{{@0}}$。非整数结果请写成分数。",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "计算第 {@0} 列元素的代数余子式：$A_{1{@1}}$，$A_{2{@2}}$，$A_{3{@3}}$。",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "计算代数余子式 $A_{{@0}{@1}}$。",
  "Vypočítaj determinant $D$ matice sústavy.": "计算方程组系数矩阵的行列式 $D$。",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "计算行列式 $D_\\alpha$（把第一列换成常数项）。",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "计算行列式 $D_\\beta$（把第二列换成常数项）。",
  "Vypočítaj determinant $D_{{@0}}$.": "计算行列式 $D_{{@0}}$。",
  "Vypočítaj determinant ${@0}$.": "计算行列式 ${@0}$。",
  "Vypočítaj determinant matice $A={@0}$.": "计算矩阵 $A={@0}$ 的行列式。",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "计算对角元素 $(A^{T}A)_{{@0}{@1}}$。",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "计算顺序主子式 $D_{@0}$。",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "求 $U={@0}$ 的逆矩阵（按行输入元素）。",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "计算矩阵 $A+B^{T}$（按行输入元素）。",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "计算矩阵 $X$（按行输入元素）。",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "计算矩阵 ${@0}$（按行输入元素）。",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "计算余子式 $M_{{@0}{@1}}$（划去第 {@2} 行和第 {@3} 列后的行列式）。",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "求向量 $v={@0}$ 在向量 $u={@1}$ 方向上的正交投影。各分量用分号隔开（分数写成 $p/q$）。",
  "Vypočítaj rohový minor $D_2$.": "计算顺序主子式 $D_2$。",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "计算迹 $\\operatorname{tr}(A^{T}A)$。",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "计算迹 $\\operatorname{tr}A$。",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "计算向右下的三条对角线上的乘积之和。",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "计算向左下的三条对角线上的乘积之和。",
  "Vypočítaj vektor ${@0}u$.": "计算向量 ${@0}u$。",
  "Vypočítaj vektor ${@0}{@1}v$.": "计算向量 ${@0}{@1}v$。",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "求向量 $u={@0}$ 与 $v={@1}$ 的距离 $\\|u-v\\|$。",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "解特征方程 $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$。输入特征值。",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "解矩阵方程 ${@0}$，其中 $A={@1}$，$B={@2}$。按行输入矩阵 $X$ 的元素。",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "交换两行改变符号，把一行乘以 ${@0}$ 使行列式乘以 ${@1}$：$\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "由第一行求出 $x_1$，并输入完整的解。",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "由方程 $AU=P$ 应从右侧乘以矩阵 $U^{-1}$：$A=PU^{-1}$。矩阵乘法不满足交换律。",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "由方程得 $X=\\tfrac{1}{{@0}}(A+B^{T})$。有 $B^{T}={@1}$，$A+B^{T}={@2}$，因此 $X={@3}$。",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "由第 {@0} 行：${@1}=0$，因此特征向量是 ${@2}$ 的倍数。",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "你忘了把矩阵 $B$ 转置：$B^{T}$ 中矩阵 $B$ 的行写成了列。",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "你忘了把矩阵 $B$ 转置：方程中是 $B^{T}$。",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "你忘了把向量乘以它们的系数。先把向量 $u$ 和 $v$ 的每个分量乘以相应的数。",
  "Zadaj $\\alpha$ a $\\beta$.": "输入 $\\alpha$ 和 $\\beta$。",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "输入一个非平凡解（任意非零倍数都算对）。",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "输入投影 $\\operatorname{proj}_u v$（分数写成 $p/q$）。",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "输入核的方向向量（任意非零倍数都算对）。",
  "Zadaj vektor $w_2$.": "输入向量 $w_2$。",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "输入 $\\lambda={@0}$ 对应的特征向量（任意非零倍数）。",
  "Zadaj všetky vlastné čísla matice $A$.": "输入矩阵 $A$ 的所有特征值。",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "输入矩阵 $A^{-1}$ 的第 {@0} 行。",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "按分量写出等式——得到关于 $\\alpha$ 和 $\\beta$ 的二元方程组。",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "你把映射的顺序弄反了。先对 $v$ 作用 $f$，所以复合映射的矩阵是 $A_gA_f$（矩阵 $A_f$ 紧挨着向量）。",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "映射 $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ 由 $f(x)=Ax$ 给出，其中 $A={@0}$。核 $\\operatorname{Ker}f$ 是一条直线。求它的方向向量（任意非零倍数都算对）。",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "映射 $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ 由矩阵 $A={@2}$ 给出。求 $\\dim\\operatorname{{@3}}f$。",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "写出二次型的对称矩阵（交叉项取系数的一半），并计算顺序主子式。",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "写出方程组（基向量放在列中）并化为阶梯形。由最后一行求出 $c_3$。",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "剩下的因子是左上角 $2\\times 2$ 子矩阵的特征多项式。它的迹是多少？",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "只有当顺序主子式的符号交替且 $D_1\\lt 0$ 时，二次型才是负定的。",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "只有行列式为零时向量才线性相关。用萨吕法则重新计算，注意符号。",
  "ani symetrická, ani antisymetrická": "既不对称，也不反对称",
  "antisymetrická": "反对称",
  "indefinitná": "不定",
  "je podpriestor": "是子空间",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "它是向量 $(1, {@0}, 0)$ 和 $({@1}, 0, 1)$ 的线性张成",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "它是一个齐次线性方程的解集——解的和与解的倍数仍然是解",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "它是一个齐次方程组的解集（过原点的直线）",
  "jeden parameter": "一个参数",
  "kladne definitná": "正定",
  "kladne semidefinitná": "半正定",
  "kolmá projekcia na os $x$": "向 $x$ 轴的正交投影",
  "kolmá projekcia na os $y$": "向 $y$ 轴的正交投影",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "复特征值——没有实的特征方向",
  "lineárne nezávislé": "线性无关",
  "lineárne závislé": "线性相关",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "例如 $(1, 0, 0)$ 和 $(0, 1, 0)$ 属于它，但它们的和 $(1, 1, 0)$ 不属于——对加法不封闭",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "例如 $(1, 0, 0)$ 属于它，但 $(-1)\\cdot(1, 0, 0)$ 不属于——对数乘不封闭",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "例如 $(1, 1, 0)$ 属于它，但 $2\\cdot(1, 1, 0)=(2, 2, 0)$ 不属于，因为 $2\\neq 4$",
  "nekladné": "非正",
  "nenulové riadky": "个非零行",
  "nenulový riadok": "个非零行",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "不含零向量（$0\\neq {@0}$）",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "不含零向量：第一个分量仅当 $s=0$ 时为 0，但此时第二个分量为 ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "既不满足 $A^{T}=A$，也不满足 $A^{T}=-A$，因此矩阵既不对称也不反对称",
  "nezáporné": "非负",
  "nie je podpriestor": "不是子空间",
  "osová súmernosť podľa osi $x$": "关于 $x$ 轴的轴对称",
  "osová súmernosť podľa osi $y$": "关于 $y$ 轴的轴对称",
  "osová súmernosť podľa priamky $y=-x$": "关于直线 $y=-x$ 的轴对称",
  "osová súmernosť podľa priamky $y=x$": "关于直线 $y=x$ 的轴对称",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "满足 $A^{T}=-A$，因此矩阵是反对称的",
  "platí $A^{T}=A$, teda matica je symetrická": "满足 $A^{T}=A$，因此矩阵是对称的",
  "práve jedno riešenie": "唯一解",
  "rotácia o $180^\\circ$": "旋转 $180^\\circ$",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "逆时针旋转 $90^\\circ$",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "顺时针旋转 $90^\\circ$",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "以原点为中心、系数为 $2$ 的位似",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "错切 $(x, y)\\mapsto(x+y, y)$",
  "sprava": "从右侧",
  "symetrická": "对称",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "在基 B 下的坐标：({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = 标准基下的 ({@2}; {@3})",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "因此 $\\alpha=\\frac{{@0}}{{@1}}={@2}$，$\\beta=\\frac{{@3}}{{@4}}={@5}$。",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "主元已突出显示，阶梯下方全是零",
  "všetky rohové minory sú kladné": "所有顺序主子式都为正",
  "z {@0}. riadku: ${@1} = {@2}$": "由第 {@0} 行：${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "顺序主子式的符号交替（{@0}）",
  "záporne definitná": "负定",
  "záporne semidefinitná": "半负定",
  "zľava": "从左侧",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$，解构成一条直线（一个参数）。解与阶梯形的两个非零行都正交，因此可以取它们的向量积：${@1}\\times{@2}={@3}${@4}。所有解为 $t\\cdot{@5}$，$t\\in\\mathbb{R}$。",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$，因此 $\\dim\\operatorname{Im}f={@2}$，由维数定理 $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$。",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>由弗罗贝尼乌斯定理：{@1}。",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>回代——{@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "化简：{@0}<br>秩为 2，解与两个非零行都正交，因此是 ${@1}\\times{@2}={@3}${@4} 的倍数。",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "数 $\\lambda={@0}$ 是矩阵 $A={@1}$ 的特征值。求它对应的一个特征向量（任意非零倍数都算对）。",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "${@0}$ 阶方阵 $A$ 满足 $\\det A={@1}$。{@2} 计算 ${@3}$。非整数结果请写成分数，例如 $-3/4$。",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "三阶方阵的秩为 3 当且仅当它的行列式不为零。",
  "− súčiny na oranžových diagonálach": "− 橙色对角线上的乘积",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "这是距离的平方。结果还要开方。"
 }
});
