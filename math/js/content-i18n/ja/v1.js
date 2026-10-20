/* 日本語: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/v1/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "v1-vektory": {
   "title": "Rⁿ のベクトルと一次従属",
   "summary": "ベクトルの演算、一次結合、線形包（張る空間）、一次従属と一次独立。",
   "theory": [
    "<p>$\\mathbb{R}^n$ の <strong>ベクトル</strong> とは、実数の順序付けられた $n$ 個の組 $u=(u_1, u_2, \\dots, u_n)$ のことです。ベクトルの和と実数（スカラー）倍は成分ごとに計算します：$u+v=(u_1+v_1, \\dots, u_n+v_n)$、$c\\,u=(c\\,u_1, \\dots, c\\,u_n)$。零ベクトルは $o=(0, \\dots, 0)$ と表します。</p>",
    "<p>ベクトル $u_1, \\dots, u_k$ の <strong>一次結合</strong>（線形結合）とは、$c_1, \\dots, c_k\\in\\mathbb{R}$ を係数として $c_1u_1+c_2u_2+\\dots+c_ku_k$ の形に書けるベクトルのことです。一次結合全体の集合を <strong>線形包</strong>（張る部分空間）といい、$\\mathcal{L}(u_1, \\dots, u_k)$ と表します。</p>",
    {
     "fig": "v1-linkomb",
     "caption": "ベクトル $u=(2, 1)$ と $v=(-1, 2)$ は平行ではないので、平面上のどのベクトルも $\\alpha u+\\beta v$ と書けます。係数 $\\alpha$ と $\\beta$ を動かして、結果の（オレンジ色の）ベクトルがどう変わるかを観察しましょう。"
    },
    "<p>$c_1u_1+\\dots+c_ku_k=o$ ならば $c_1=\\dots=c_k=0$ となるとき、ベクトル $u_1, \\dots, u_k$ は <strong>一次独立</strong> であるといいます。そうでないとき <strong>一次従属</strong> であるといい、これは少なくとも 1 つのベクトルが他のベクトルの一次結合で表せるときに限り起こります。</p>\n       <p>実際には、ベクトルを行列 $A$ の行として並べます：一次独立であるのは $h(A)=k$ のとき、かつそのときに限ります（階数 $h(A)$ については後のレッスンを参照）。$\\mathbb{R}^n$ の $n$ 個のベクトルなら、$\\det A\\neq 0$ かどうかを確かめれば十分です。$\\mathbb{R}^n$ の $n$ 個より多いベクトルは必ず一次従属であり、零ベクトルを含む集合はすべて一次従属です。</p>"
   ],
   "examples": [
    {
     "task": "ベクトル $u=(1, 2, 0)$、$v=(0, 1, 1)$、$w=(2, 5, 1)$ が一次従属かどうかを調べましょう。",
     "steps": [
      "ベクトルを行列の行として並べ、第 1 行に沿った余因子展開で行列式を計算します：",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "行列式は 0 なので、ベクトルは <strong>一次従属</strong> です。実際、$w=2u+v$ です。"
     ]
    },
    {
     "task": "ベクトル $w=(4, 7)$ をベクトル $u=(2, 1)$ と $v=(-1, 2)$ の一次結合で表しましょう。",
     "steps": [
      "$\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$ を満たす $\\alpha, \\beta$ を求めます。つまり連立方程式 $2\\alpha-\\beta=4$、$\\alpha+2\\beta=7$ を解きます。",
      "2 番目の式から $\\alpha=7-2\\beta$。代入すると $14-4\\beta-\\beta=4$ なので、$\\beta=2$、$\\alpha=3$ です。",
      "<strong>答え：</strong> $w=3u+2v$。"
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "行列と行列の演算",
   "summary": "行列の型、特別な行列、和、スカラー倍、転置、トレース。",
   "theory": [
    "<p>$m\\times n$ 型の <strong>行列</strong> とは、$m$ 行 $n$ 列に実数を並べた長方形の表 $A=(a_{ij})$ のことです。2 つの行列は、型が同じで、同じ位置の成分がすべて等しいとき等しいといいます。$n\\times n$ 型の行列は $n$ 次の <strong>正方行列</strong> です。成分 $a_{11}, a_{22}, \\dots, a_{nn}$ はその <strong>主対角線</strong>（対角成分）をなします。重要なのは、<strong>単位</strong>行列 $I$（対角成分が 1 で、他は 0）、<strong>零</strong>行列 $O$、<strong>対角</strong>行列、<strong>上（下）三角</strong>行列（対角線の下（上）がすべて 0）です。</p>",
    "<p>同じ型の行列の <strong>和</strong> と、行列の数による <strong>スカラー倍</strong> は成分ごとに計算します：$(A+B)_{ij}=a_{ij}+b_{ij}$、$(cA)_{ij}=c\\,a_{ij}$。$A+B=B+A$、$(A+B)+C=A+(B+C)$、$c(A+B)=cA+cB$、$(c+d)A=cA+dA$ が成り立ちます。$m\\times n$ 型の行列全体は、これらの演算によってベクトル空間になります。</p>",
    "<p>$m\\times n$ 型の行列の <strong>転置</strong>行列 $A^{T}$ は $n\\times m$ 型で、$(A^{T})_{ij}=a_{ji}$ です。つまり行が列になります。$(A^{T})^{T}=A$、$(A+B)^{T}=A^{T}+B^{T}$、$(cA)^{T}=cA^{T}$、$(AB)^{T}=B^{T}A^{T}$（順序が逆になる）が成り立ちます。</p>\n       <p>正方行列は、$A^{T}=A$ のとき <strong>対称</strong>行列、$A^{T}=-A$ のとき <strong>交代</strong>行列（歪対称行列）といいます（交代行列の対角成分は 0 です）。どの正方行列も、対称部分と交代部分の和 $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ にただ一通りに分解できます。<strong>トレース</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$ は対角成分の和です。任意の行列について、$\\operatorname{tr}(A^{T}A)$ はすべての成分の 2 乗の和になります。</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$、$B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$ のとき、$2A-B^{T}$ を計算しましょう。",
     "steps": [
      "$B$ は $3\\times 2$ 型なので、$B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$ は $A$ と同じ $2\\times 3$ 型です。",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>答え：</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$。"
     ]
    },
    {
     "task": "行列 $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ を対称行列と交代行列の和に分解しましょう。",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "対称部分：$S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$。",
      "交代部分：$K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$。検算：$S+K=A$。"
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "行列の階数と行基本変形",
   "summary": "行基本変形、階段行列、ガウスの消去法、行列の階数（ランク）。",
   "theory": [
    "<p><strong>行基本変形</strong> は次の 3 つです：(1) 2 つの行を入れ替える、(2) ある行を 0 でない数倍する、(3) ある行に別の行の定数倍を加える。$A$ からこのような変形を有限回行って $B$ が得られるとき、$A\\sim B$ と書きます（行列は行同値であるといいます）。$R_2-3R_1$ という記法は、第 2 行を「第 2 行から第 1 行の 3 倍を引いたもの」で置き換えることを意味します。</p>",
    "<p>0 でない各行が、その上の行よりも多くの 0 で始まり、零行が最後に並んでいるとき、行列は <strong>階段行列</strong>（階段形）であるといいます。行の最初の 0 でない成分をその行の <strong>主成分</strong>（ピボット）といいます。<strong>ガウスの消去法</strong> を使えば、どの行列も階段形に変形できます：その時点の列で主成分を選び、変形 (3) によってその下の成分をすべて 0 にします。さらに主成分を 1 にし、その上の成分も 0 にすると、簡約階段形が得られます（ガウス・ジョルダンの消去法）。</p>",
    {
     "fig": "v1-stupne",
     "caption": "階段形：主成分は下の行ほど右へずれていきます。この行列には 0 でない行が 3 つあるので、$h(A)=3$ です。"
    },
    "<p><strong>階数</strong>（ランク）$h(A)$ は、行列 $A$ の一次独立な行の最大個数です。行基本変形で階数は変わらないので、$h(A)$ は階段形の 0 でない行の個数に等しくなります。$h(A)=h(A^{T})$（行階数は列階数に等しい）と $h(A)\\le\\min(m, n)$ が成り立ちます。$n$ 次の正方行列については、$h(A)=n\\iff\\det A\\neq 0\\iff A$ は正則、が成り立ちます。</p>"
   ],
   "examples": [
    {
     "task": "行列 $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$ の階数を求めましょう。",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "階段形には 0 でない行が 2 つあるので、$h(A)=2$ です。"
     ]
    },
    {
     "task": "行列 $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ の階数が 2 になるのは、$a$ がどんな値のときですか。",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "$a=4$ のとき最後の行は零行になり、$h(A)=2$ です。$a\\neq 4$ のときは $h(A)=3$ です。"
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "3×3 の行列式とラプラス展開",
   "summary": "サラスの方法、小行列式と余因子、ラプラス展開（余因子展開）、行列式の性質。",
   "theory": [
    "<p>$n$ 次の正方行列の <strong>行列式</strong> とは、数 $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$ のことです。ここで和は集合 $\\{1, \\dots, n\\}$ のすべての $n!$ 個の置換 $\\pi$ についてとります。$n=3$ のときは <strong>サラスの方法</strong> が得られます：</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "サラスの方法：行列の右に、その最初の 2 列を書き足します。右下がりの対角線上の積はプラス、左下がりの対角線上の積はマイナスの符号をつけます。3 次の行列に <strong>だけ</strong> 使えます。"
    },
    "<p><strong>小行列式</strong> $M_{ij}$ は、第 $i$ 行と第 $j$ 列を取り除いてできる行列の行列式で、<strong>余因子</strong> は $A_{ij}=(-1)^{i+j}M_{ij}$ です。第 $i$ 行に沿った <strong>ラプラス展開</strong>：$\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$（列に沿った展開も同様）。0 ができるだけ多い行または列に沿って展開すると便利です。</p>",
    "<p><strong>性質：</strong> $\\det A^{T}=\\det A$。2 つの行を入れ替えると符号が変わる。ある行を $c$ 倍すると行列式も $c$ 倍になるので、$\\det(cA)=c^{n}\\det A$。ある行に別の行の定数倍を加えても行列式は変わらない。零行や比例する 2 つの行をもつ行列の行列式は 0。三角行列の行列式は対角成分の積。同じ次数の行列について $\\det(AB)=\\det A\\cdot\\det B$ が成り立ち、$A$ が正則ならば $\\det A^{-1}=\\frac{1}{\\det A}$ です。</p>"
   ],
   "examples": [
    {
     "task": "$\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$ を計算しましょう。",
     "steps": [
      "プラスの項：$2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$。",
      "マイナスの項：$3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$。",
      "<strong>答え：</strong> $\\det A=2-13=-11$。"
     ]
    },
    {
     "task": "$\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$ を計算しましょう。",
     "steps": [
      "第 3 行で 0 でない成分は $a_{32}=3$ だけです。第 3 行に沿って展開すると：$\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$。",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$（サラスの方法）。",
      "<strong>答え：</strong> $\\det A=-3\\cdot 6=-18$。"
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "逆行列：ガウス・ジョルダン法と余因子行列",
   "summary": "逆行列の存在、ガウス・ジョルダン法と余因子行列による計算、行列方程式。",
   "theory": [
    "<p>$n$ 次の正方行列 $A$ の <strong>逆行列</strong> $A^{-1}$ とは、$AA^{-1}=A^{-1}A=I$ を満たす行列のことです。逆行列が存在するのは $\\det A\\neq 0$ のとき、かつそのときに限ります（このとき行列は <strong>正則</strong> であるといいます）。行列式が 0 の行列は <strong>特異</strong>（非正則）です。$(A^{-1})^{-1}=A$、$(A^{T})^{-1}=(A^{-1})^{T}$、$(AB)^{-1}=B^{-1}A^{-1}$ が成り立ちます。</p>",
    "<p><strong>ガウス・ジョルダン法：</strong> 拡大行列 $(A\\mid I)$ を行基本変形で $(I\\mid B)$ の形に変形すると、$B=A^{-1}$ です。変形の途中で左側に零行が現れたら、行列 $A$ は特異です。</p>",
    "<p><strong>余因子行列</strong> $\\operatorname{adj}A$ は、余因子を並べた行列の転置です：$(\\operatorname{adj}A)_{ij}=A_{ji}$。$A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$、つまり $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ が成り立ちます。添字が入れ替わることに注意しましょう。$n=2$ のときは、おなじみの公式 $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$ が得られます。</p>",
    "<p><strong>行列方程式：</strong> $A$ が正則ならば、方程式 $AX=B$ はただ 1 つの解 $X=A^{-1}B$ をもち、方程式 $XA=B$ の解は $X=BA^{-1}$ です。行列の積は交換法則を満たさないので、どちら側から掛けるかが重要です。</p>"
   ],
   "examples": [
    {
     "task": "ガウス・ジョルダン法で $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$ の逆行列を求めましょう。",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>答え：</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$（検算：$AA^{-1}=I$）。"
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$ について、成分 $(A^{-1})_{13}$ を計算しましょう。",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$。ここで $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$ です。",
      "<strong>答え：</strong> $(A^{-1})_{13}=\\frac{1}{8}$。"
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "連立一次方程式",
   "summary": "ガウスの消去法、フロベニウスの定理（解の存在条件）、クラメルの公式、同次連立方程式。",
   "theory": [
    "<p>$n$ 個の未知数をもつ $m$ 個の一次方程式からなる連立方程式は、行列を使って $Ax=b$ と書けます。ここで $A$ は <strong>係数行列</strong>、$x=(x_1, \\dots, x_n)^{T}$、$b$ は右辺の列ベクトルです。$(A\\mid b)$ を <strong>拡大係数行列</strong> といいます。$b=o$ のとき、連立方程式は <strong>同次</strong> であるといいます。</p>",
    "<p><strong>フロベニウスの定理：</strong> 連立方程式 $Ax=b$ が解をもつのは、$h(A)=h(A\\mid b)$ のとき、かつそのときに限ります。$h(A)=h(A\\mid b)=n$ ならば解はただ 1 つです。$h(A)=h(A\\mid b)=h\\lt n$ ならば解は無数にあり、$n-h$ 個のパラメータに依存します。</p>",
    {
     "fig": "v1-priamky",
     "caption": "2 つの未知数をもつ 2 つの方程式は、平面上の 2 本の直線です：交わるか、平行で異なるか、一致するかのいずれかです。"
    },
    "<p><strong>ガウスの消去法：</strong> 拡大係数行列を階段形に変形し、下から順に後退代入で未知数を求めます。主成分のない未知数は自由パラメータになります。<strong>クラメルの公式：</strong> $A$ が正方行列で $D=\\det A\\neq 0$ ならば、$x_i=\\frac{D_i}{D}$ です。ここで $D_i$ は、$A$ の第 $i$ 列を列 $b$ で置き換えた行列の行列式です。</p>\n       <p><strong>同次連立方程式</strong> は、つねに自明な解 $x=o$ をもちます。自明でない解が存在するのは $h(A)\\lt n$ のとき、かつそのときに限ります（正方行列なら $\\det A=0$ のとき、かつそのときに限ります）。解全体の集合は、$\\mathbb{R}^n$ の $n-h(A)$ 次元の部分空間です。</p>"
   ],
   "examples": [
    {
     "task": "連立方程式 $x_1+x_2+x_3=6$、$2x_1-x_2+x_3=3$、$x_1+2x_2-x_3=2$ を解きましょう。",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$、次に $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "後退代入：$x_3=3$、$x_2=-4+2\\cdot 3=2$、$x_1=6-2-3=1$。<strong>解：</strong> $(1, 2, 3)$。"
     ]
    },
    {
     "task": "連立方程式 $x_1+2x_2-x_3=1$、$2x_1+4x_2+x_3=5$ を解きましょう。",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$。したがって $h(A)=h(A\\mid b)=2\\lt 3$ で、解は 1 個のパラメータをもち無数にあります。",
      "第 2 行から $x_3=1$。未知数 $x_2$ には主成分がないので、$x_2=t$ とおきます。第 1 行から $x_1=1-2t+1=2-2t$。",
      "<strong>解：</strong> $(2-2t, t, 1)$、$t\\in\\mathbb{R}$。"
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "ベクトル空間、基底と次元",
   "summary": "ベクトル空間と部分空間、基底、次元、基底に関するベクトルの座標。",
   "theory": [
    "<p>$\\mathbb{R}$ 上の <strong>ベクトル空間</strong> とは、和と実数倍が定義された集合 $V$ で、これらの演算の結果が $V$ からはみ出さず、通常の規則を満たすものです：和の交換法則と結合法則、零ベクトルと逆ベクトルの存在、分配法則、$(cd)u=c(du)$、$1\\cdot u=u$。例：$\\mathbb{R}^n$、$m\\times n$ 型の行列、次数が $n$ 以下の多項式（$P_n$）、区間上の実数値関数。</p>",
    "<p><strong>部分空間</strong> とは、和とスカラー倍について閉じている空でない部分集合 $W\\subseteq V$ のことです。このとき必ず $o\\in W$ となります。たとえば、原点を通る直線や平面、同次連立方程式の解全体の集合、あらゆる線形包は $\\mathbb{R}^3$ の部分空間です。原点を通らない平面は部分空間ではありません。</p>",
    "<p>空間 $V$ の <strong>基底</strong> とは、一次独立なベクトルの集合で、その線形包が $V$ 全体になるもののことです。どの基底も要素の個数は同じで、その個数を <strong>次元</strong> $\\dim V$ といいます。たとえば $\\dim\\mathbb{R}^n=n$（標準基底 $e_1, \\dots, e_n$）、$\\dim P_n=n+1$ で、$m\\times n$ 行列の空間の次元は $mn$ です。$n$ 次元の空間では、一次独立な $n$ 個のベクトルはどれも基底をなします。また $\\dim\\mathcal{L}(u_1, \\dots, u_k)$ は、$u_1, \\dots, u_k$ を行とする行列の階数に等しくなります。</p>",
    {
     "fig": "v1-baza",
     "caption": "基底 $b_1=(2, 1)$、$b_2=(-1, 2)$ は「斜めの」格子をつくります。基底 $B$ に関するベクトルの座標 $(c_1, c_2)$ は、$b_1$ の方向に何歩、$b_2$ の方向に何歩進めばよいかを表します。"
    },
    "<p>$B=(b_1, \\dots, b_n)$ が基底ならば、どのベクトルも $v=c_1b_1+\\dots+c_nb_n$ と <strong>ただ一通りに</strong> 表せます。数の組 $(c_1, \\dots, c_n)$ を、基底 $B$ に関するベクトル $v$ の <strong>座標</strong> といいます。座標は、基底ベクトルを列に並べた行列を係数行列とし、右辺を $v$ とする連立方程式を解いて求めます。</p>"
   ],
   "examples": [
    {
     "task": "基底 $b_1=(1, 0, 1)$、$b_2=(0, 1, 1)$、$b_3=(1, 1, 0)$ に関するベクトル $v=(3, 0, 1)$ の座標を求めましょう。",
     "steps": [
      "$v=c_1b_1+c_2b_2+c_3b_3$ から、連立方程式 $c_1+c_3=3$、$c_2+c_3=0$、$c_1+c_2=1$ が得られます。",
      "最初の 2 式を引くと $c_1-c_2=3$。これと $c_1+c_2=1$ から $c_1=2$、$c_2=-1$、$c_3=1$ です。",
      "<strong>答え：</strong> $(v)_B=(2, -1, 1)$。検算：$2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$。"
     ]
    },
    {
     "task": "部分空間 $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$ の基底と次元を求めましょう。",
     "steps": [
      "係数行列 $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ は階段形で、階数は 2 なので、$\\dim W=4-2=2$ です。",
      "自由な未知数：$x_3=s$、$x_4=t$。すると $x_2=-t$、$x_1=x_3-x_2=s+t$ なので、$x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$ です。",
      "<strong>答え：</strong> 基底 $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$、$\\dim W=2$。"
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "線形写像とその表現行列",
   "summary": "線形写像、その表現行列、写像の合成、平面上の幾何学的変換、核と像。",
   "theory": [
    "<p>ベクトル空間の間の写像 $f:V\\to W$ は、すべてのベクトル $u, v$ と数 $c$ について $f(u+v)=f(u)+f(v)$ かつ $f(cu)=c\\,f(u)$ が成り立つとき <strong>線形</strong> であるといいます。このとき $f(o)=o$ です。線形写像 $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ はどれも、ある $m\\times n$ 型の行列 $A$ をただ 1 つ用いて $f(x)=Ax$ と表せます。$A$ の列は標準基底のベクトルの像です：$A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$。合成写像 $g\\circ f$（まず $f$、次に $g$）には、行列の積 $A_gA_f$ が対応します。</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>$\\mathbb{R}^2$ の変換</th><th>行列</th></tr>\n       <tr><td>角 $\\varphi$ の回転</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>$x$ 軸に関する対称移動</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>直線 $y=x$ に関する対称移動</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>$x$ 軸への正射影</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>倍率 $k$ の相似拡大</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "角 $\\varphi$ の回転：ベクトル $e_1$（青）と $e_2$（緑）の像は、ちょうど回転行列の列になっています。破線の図形がもとの図形、実線の図形がその像です。"
    },
    "<p><strong>核</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$ は同次連立方程式 $Ax=o$ の解全体の集合です。<strong>像</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ は行列 $A$ の列の線形包です。どちらも部分空間で、$\\dim\\operatorname{Im}f=h(A)$ です。<strong>次元定理：</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$。写像が単射であるのは、$\\operatorname{Ker}f=\\{o\\}$ のとき、かつそのときに限ります。</p>"
   ],
   "examples": [
    {
     "task": "ベクトルをまず反時計回りに $90^\\circ$ 回転し、次に $x$ 軸に関して対称移動する写像の行列を求めましょう。ベクトル $(2, 1)$ の像は何ですか。",
     "steps": [
      "回転：$R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$、対称移動：$S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$。合成（まず $R$、次に $S$）の行列は $SR$ です。",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$。これは直線 $y=-x$ に関する対称移動です。",
      "<strong>像：</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$。"
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$ として、写像 $f(x)=Ax$ の核と像の次元を求めましょう。",
     "steps": [
      "第 3 行は最初の 2 行の和なので、$h(A)=2$、$\\dim\\operatorname{Im}f=2$ です。",
      "核：$x_1+x_2=0$、$x_2+x_3=0$。$x_3=t$ とすると $x_2=-t$、$x_1=t$ なので、$\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$ です。",
      "次元定理で検算：$\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$。"
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "固有値と固有ベクトル",
   "summary": "固有多項式、2×2 と 3×3 の行列の固有値と固有ベクトル、対角化と行列の累乗。",
   "theory": [
    "<p>$Av=\\lambda v$ を満たす零でないベクトル $v$ が存在するとき、数 $\\lambda$ を正方行列 $A$ の <strong>固有値</strong> といいます。このとき $v$ を $\\lambda$ に対する <strong>固有ベクトル</strong> といいます。幾何学的には、写像 $x\\mapsto Ax$ はベクトル $v$ の方向を保ち、$\\lambda$ 倍に伸ばすだけです（$\\lambda\\lt 0$ のときは向きも反転します）。</p>",
    "<p>固有値は <strong>固有多項式</strong> $p(\\lambda)=\\det(A-\\lambda I)$ の根です。$2\\times 2$ 行列では $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$ です。一般に、固有値の和は $\\operatorname{tr}A$、積は $\\det A$ に等しく、三角行列の固有値は対角成分です。$\\lambda$ に対する固有ベクトルは、同次連立方程式 $(A-\\lambda I)v=o$ の零でない解です。</p>",
    {
     "fig": "v1-matica",
     "caption": "行列 $A$ は単位正方形を、$Ae_1$ と $Ae_2$（行列の列）を辺とする平行四辺形に写します。その面積は $|\\det A|$ です。オレンジ色の直線は固有方向で、その上のベクトルは自分自身の定数倍に写されます。"
    },
    "<p><strong>対角化：</strong> $D$ を対角行列として $A=PDP^{-1}$ と書けるとき、$n$ 次の行列 $A$ は対角化可能であるといいます。これは $A$ が一次独立な $n$ 個の固有ベクトルをもつとき、かつそのときに限り起こります。それらの固有ベクトルが行列 $P$ の列になり、$D$ の対角には対応する固有値が同じ順に並びます。$A$ が相異なる $n$ 個の固有値をもてば十分です。また、実対称行列はつねに対角化可能です。応用：$A^k=PD^kP^{-1}$。</p>"
   ],
   "examples": [
    {
     "task": "行列 $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$ の固有値と固有ベクトルを求めましょう。",
     "steps": [
      "$\\operatorname{tr}A=7$、$\\det A=10$ なので、$\\lambda^2-7\\lambda+10=0$ となり、$\\lambda_1=2$、$\\lambda_2=5$ です。",
      "$\\lambda=5$：$A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$、方程式 $-v_1+v_2=0$、固有ベクトル $(1, 1)$。",
      "$\\lambda=2$：$A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$、方程式 $2v_1+v_2=0$、固有ベクトル $(1, -2)$。"
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$ について、対角化を利用して $A^3$ を計算しましょう。",
     "steps": [
      "前の例から $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$、$D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$、$P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$ です。",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>答え：</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$。"
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "内積、直交性と射影",
   "summary": "内積とノルム、ベクトルのなす角、正射影、グラム・シュミットの直交化法。",
   "theory": [
    "<p>$\\mathbb{R}^n$ の <strong>標準内積</strong> は $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$ です。内積は対称で、各引数について線形であり、$u\\neq o$ ならば $\\langle u, u\\rangle\\gt 0$ です。<strong>ノルム</strong>（長さ）は $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$、ベクトル間の距離は $\\|u-v\\|$ です。<strong>コーシー・シュワルツの不等式</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$ が成り立つので、零でないベクトルのなす角 $\\varphi$ を $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$ で正しく定義できます。</p>",
    "<p>$\\langle u, v\\rangle=0$ のとき、ベクトルは <strong>直交</strong> する（$u\\perp v$）といいます。零でない互いに直交するベクトルの組は一次独立です。さらにノルムがすべて 1 ならば、<strong>正規直交系</strong> といいます。ベクトル $v$ の $u\\neq o$ の方向への <strong>正射影</strong> は $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$ です。ベクトル $v-\\operatorname{proj}_u v$ は $u$ に垂直で、そのノルムは点 $v$ と直線 $\\mathcal{L}(u)$ の距離に等しくなります。</p>",
    {
     "fig": "v1-projekcia",
     "caption": "ベクトル $v$（青）の、方向 $u=(\\cos\\theta, \\sin\\theta)$ の直線への射影：緑のベクトルが $\\operatorname{proj}_u v$ で、破線の線分は直線に垂直です。"
    },
    "<p><strong>グラム・シュミットの直交化法</strong> は、一次独立なベクトル $u_1, \\dots, u_k$ から、同じ線形包をもつ直交するベクトルをつくります：$w_1=u_1$、$w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$。つまり各ベクトルから、すでに得られたベクトルへの射影を引きます。ノルムで割って $e_j=w_j/\\|w_j\\|$ とすれば、正規直交基底が得られます。</p>"
   ],
   "examples": [
    {
     "task": "ベクトル $v=(3, 1, 2)$ の方向 $u=(1, 1, 0)$ への正射影と、点 $v$ と直線 $\\mathcal{L}(u)$ の距離を求めましょう。",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$、$\\langle u, u\\rangle=2$ なので、$\\operatorname{proj}_u v=2u=(2, 2, 0)$ です。",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$。垂直であることの検算：$\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$。",
      "<strong>距離：</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$。"
     ]
    },
    {
     "task": "グラム・シュミットの直交化法でベクトル $u_1=(1, 1, 1)$ と $u_2=(1, 2, 3)$ を直交化しましょう。",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$、$\\langle w_1, w_1\\rangle=3$ なので、$w_2=u_2-2w_1=(-1, 0, 1)$ です。確かに $\\langle w_1, w_2\\rangle=0$ です。",
      "正規直交基底：$e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$、$e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$。"
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "二次形式と定値性",
   "summary": "二次形式の行列、定値性、シルベスターの判定法。",
   "theory": [
    "<p>$\\mathbb{R}^n$ 上の <strong>二次形式</strong> とは、関数 $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$ のことです。ここで $A$ は対称行列で、<strong>二次形式の行列</strong> といいます。$x_i^2$ の係数は $a_{ii}$、$x_ix_j$（$i\\neq j$）の係数は $2a_{ij}$ です。たとえば $Q=x_1^2+4x_1x_2-3x_2^2$ の行列は $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$ です。</p>",
    "<p>二次形式（およびその行列）は、すべての $x\\neq o$ に対して $Q(x)\\gt 0$ のとき <strong>正定値</strong>、すべての $x$ に対して $Q(x)\\ge 0$ のとき <strong>半正定値</strong> といいます。同様に <strong>負定値（半負定値）</strong> を定め、正の値も負の値もとるときは <strong>不定値</strong> といいます。固有値を使うと：すべて正 $\\iff$ 正定値、すべて 0 以上 $\\iff$ 半正定値、正負が混在 $\\iff$ 不定値。</p>",
    "<p><strong>シルベスターの判定法：</strong> $D_1=a_{11}$、$D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$、…、$D_n=\\det A$ を首座小行列式とします。二次形式が正定値 $\\iff$ すべての $k$ について $D_k\\gt 0$。負定値 $\\iff$ 符号が $D_1\\lt 0$、$D_2\\gt 0$、$D_3\\lt 0$、… と交互に変わる。$\\det A\\neq 0$ で、どちらの場合にも当てはまらなければ、不定値です。$\\det A=0$ のときは、首座小行列式だけでは半定値かどうかを判定できません。固有値か、すべての主小行列式を調べる必要があります。</p>"
   ],
   "examples": [
    {
     "task": "二次形式 $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$ の定値性を調べましょう。",
     "steps": [
      "二次形式の行列：$A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$。",
      "$D_1=2$、$D_2=2\\cdot 1-1\\cdot 1=1$、$D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$。",
      "首座小行列式はすべて正なので、二次形式は <strong>正定値</strong> です。"
     ]
    },
    {
     "task": "二次形式 $Q=x^2+4xy+ay^2$ が正定値になるのは、$a$ がどんな値のときですか。",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$、$D_1=1\\gt 0$、$D_2=a-4$。",
      "<strong>答え：</strong> 二次形式が正定値になるのは、ちょうど $a\\gt 4$ のときです。"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$：逆行列の第 $i$ 行は、行列 $A$ の第 $i$ <em>列</em>の余因子からなります。",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$、$D_1={@1}\\gt 0$、$D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$ です。よって $c={@5}$ です。",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$ です。$A$ と比べると、{@1}ことがわかります。",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$ なので、${@1}={@2}={@3}$ です。",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>よって $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$ です。",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ は同次連立方程式の解の集合なので、$\\dim W=n-h(A)$ です。係数行列の階数：<br>{@0}<br>$h(A)={@1}$ なので、$\\dim W={@2}-{@3}={@4}$ です。",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$。これらのベクトルのノルムは整数になります。",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$ なので、固有値の 1 つは $0$ で、もう 1 つは $\\operatorname{tr}A={@0}$ に等しい。よって両方とも{@1}で、1 つは 0 である",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$ なので、$A^{-1}=\\frac{1}{{@1}}{@2}={@3}$ です。",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$ です。公式 $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ より、第 {@3} 列の余因子が必要です：${@4}$。",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$ です。さらに $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$、${@5}$ です。よって $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$ です。",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ で、上のどの場合にも当てはまらない",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ で、転置しても行列式は変わりません。つまり積には $\\det A$ が 2 回現れます。",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$ で、$\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ は行列の列の数（定義域の次元）です。",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$、$\\|u\\|={@1}$、$\\|v\\|={@2}$ なので、$\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$ です。",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$ です。条件 $\\langle u, v\\rangle=0$ から $t={@2}$ となります。",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$、$\\langle u, u\\rangle={@2}$。",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$、$\\det A={@1}$ で、固有方程式は ${@2}{@3}=0$ です。",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$ なので、解はただ 1 つ",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$ なので、解は無数にある（{@1}）",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$ なので、連立方程式は解をもたない",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$、$\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$。",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$。$\\langle u_2, w_1\\rangle={@0}$、$\\langle w_1, w_1\\rangle={@1}$、係数は $\\frac{{@2}}{{@3}}={@4}$ です。",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$。結果は $w_1$ と直交しなければなりません。",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$。検算：$\\langle w_1, w_2\\rangle={@6}$。",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$。ここで $D_{{@2}}$ は、係数行列の第 {@3} 列を右辺の列で置き換えたものです。",
  "(mení orientáciu)": "（向きが反転）",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "（実際 ${@0}={@1}{@2} {@3} {@4}{@5}$）",
  "+ súčiny na zelených diagonálach": "+ 緑の対角線上の積",
  ", teda ${@0}{@1} {@2} = {@3}$": "、つまり ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "部分空間<strong>です</strong>：{@0}。",
  "<strong>Nie je</strong> podpriestor: {@0}.": "部分空間<strong>ではありません</strong>：{@0}。",
  "Aká je definitnosť formy?": "この形式の定値性は何ですか？",
  "Aká je dimenzia $W$?": "$W$ の次元はいくつですか？",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "核 $\\operatorname{Ker}f$ の次元はいくつですか？",
  "Aká je hodnosť matice $A$?": "行列 $A$ の階数はいくつですか？",
  "Aká je hodnosť matice sústavy $h(A)$?": "係数行列の階数 $h(A)$ はいくつですか？",
  "Aká je hodnosť matice sústavy?": "係数行列の階数はいくつですか？",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "拡大係数行列の階数 $h(A\\mid b)$ はいくつですか？",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "$(-1)^{{@0}+{@1}}$ の符号は何ですか？ $1$ または $-1$ を入力しましょう。",
  "Aký je absolútny člen $D_0$?": "定数項 $D_0$ はいくつですか？",
  "Aký je absolútny člen $b$?": "定数項 $b$ はいくつですか？",
  "Aký je determinant tejto podmatice?": "この小行列の行列式はいくつですか？",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "余因子をさらに行列 $A$ の行列式で割る必要があります。",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "交代行列は対角成分がすべて 0 で、$a_{ij}=-a_{ji}$ を満たします。すべての組について確かめましょう。",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "逆行列全体を計算する必要はありません：$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$（余因子の添字が入れ替わっています）。",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "クラメルの公式を使って、連立方程式 ${@1}$ の未知数 $x_{{@0}}$ を求めましょう。整数でない答えは分数で入力しましょう。",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "クラメルの公式より：$D={@0}={@1}$、$D_\\alpha={@2}={@3}$、$D_\\beta={@4}={@5}$、",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "$\\mathbb{R}^{{@2}}$ のベクトル $u={@0}$ と $v={@1}$ が与えられています。ベクトル ${@3}$ を計算しましょう。成分はセミコロンで区切りましょう。",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "行列式は 0 でないので、ベクトルは <strong>一次独立</strong> です。",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "行列式は 0 なので、ベクトルは <strong>一次従属</strong> です{@0}。",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "行列式は確かに 0 ですが、0 でない固有値の符号を見ましょう。$2\\times 2$ 行列では、それはトレースに等しくなります。",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "$u, v, w$ を行とする行列の行列式は、パラメータ $t$ の一次関数です。パラメータを含む行に沿って展開し、0 とおきましょう。",
  "Diagonálne prvky matice $D^{{@0}}$?": "行列 $D^{{@0}}$ の対角成分は？",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "対角成分 $(A^{T}A)_{jj}$ は行列 $A$ の第 $j$ 列の成分の 2 乗の和なので、$\\operatorname{tr}(A^{T}A)$ はすべての成分の 2 乗の和です：${@0}={@1}={@2}$。",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "線形包の次元は、与えられたベクトルを行とする行列の階数です：<br>{@0}<br>階段形には{@2}が {@1} 個あるので、$\\dim W={@3}$ です。",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "判別式は ${@0}{@1}$ なので、$\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$、つまり $\\lambda_1={@4}$、$\\lambda_2={@5}$ です。",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "形式の行列の対角成分以外には、$xy$ の係数の半分、つまり ${@1}$ ではなく ${@0}$ が入ります。",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "$x_3$ を下から 2 番目の行に代入して、$x_2$ を求めましょう。",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "形式 $Q={@0}$ は、$a\\gt c$ のとき、かつそのときに限り正定値です。数 $c$ を求めましょう（必要なら分数で）。",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "形式 $Q={@0}+ay^2$ は、$a\\gt c$ のとき、かつそのときに限り正定値です。数 $c$ を求めましょう（必要なら分数で）。",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "ガウスの消去法で行列を階段形にします：<br>{@0}<br>階段形には{@2}が {@1} 個あるので、$h(A)={@3}$ です。",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "ガウスの消去法で連立方程式 ${@0}$ を解きましょう。解は「x₁; x₂; x₃」の形で入力しましょう。",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "グラム・シュミットの直交化法で、ベクトル $u_1={@0}$ と $u_2={@1}$ を（この順に、正規化せずに）直交化しましょう。ベクトル $w_2$ を入力しましょう。",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "反例を探しましょう。零ベクトルは $W$ に属しますか？ $W$ の 2 つの元の和はまた $W$ に属しますか？ スカラー倍はどうですか？",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "不定値の形式は正の値も負の値もとります。シルベスターの判定法に従って、主小行列式の符号を確かめましょう。",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "核は同次連立方程式 $Ax=o$ の解の集合です。行列を変形し、自由な未知数をパラメータに選びましょう。",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "核は連立方程式 $Ax=o$ の解の集合です：<br>{@0}<br>$h(A)=2$ なので、$\\dim\\operatorname{Ker}f=3-2=1$ です。解は 0 でない 2 つの行の両方と直交するので、${@1}\\times{@2}={@3}${@4} の定数倍です。よって $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$ です。",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "集合 $W={@0}$ はベクトル空間 $\\mathbb{R}^3$ の部分空間ですか？",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "形式が正定値になるのは、すべての主小行列式が正のときだけです。",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "$x_ix_j$（$i\\neq j$）の係数は $a_{ij}$ と $a_{ji}$ に等しく分けられるので、$a_{ij}$ は係数の半分です。形式の行列：$A={@0}$。",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "対称行列では、$x_ix_j$ の係数は $a_{ij}$ と $a_{ji}$ に等しく分けられ、それぞれ半分ずつになります。",
  "Koľko riešení má sústava ${@0}$?": "連立方程式 ${@0}$ の解はいくつありますか？",
  "Koľko riešení má sústava?": "連立方程式の解はいくつありますか？",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "二次形式は $Q={@0}$ です。その対称行列の成分 $a_{12}, a_{13}, a_{23}$ を求めましょう（セミコロンで区切り、分数は $p/q$ の形で）。",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "二次形式は $Q={@0}$ です。その対称行列の成分 $a_{12}$ を求めましょう（分数は $p/q$ の形で）。",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "2 次の因数は $\\operatorname{tr}={@0}$、$\\det={@1}$ で、根は ${@2}$ と ${@3}$ です。固有値は ${@4}$ です。",
  "Lineárna kombinácia dvoch vektorov": "2 つのベクトルの一次結合",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "線形写像 $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ は $f{@0}={@1}$、$f{@2}={@3}$ を満たします。写像 $f$ の（標準基底に関する）行列 $A$ を求めましょう。成分は行ごとに入力しましょう。",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "行列 $-A^{3}$ は $(-1)\\cdot A^{3}$ であり、$\\det(-M)=(-1)^{{@0}}\\det M$ です。",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "行列 $A={@0}$ の固有値は ${@1}$ と ${@2}$ です。対角化を使って $A^{{@3}}$ を計算しましょう。成分は行ごとに入力しましょう。",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "行列 $B$ は、$A$ の最初の 2 行を入れ替え、最後の行を ${@0}$ 倍して得られます。",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "形式の行列は $A={@0}$ です。$D_1={@1}\\gt 0$、$D_2={@2}\\gt 0$ は $a$ によりません。第 3 行に沿った展開（またはサラスの方法）で $D_3=\\det A={@3}$ です。",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "形式の行列：$A={@0}$。主小行列式：${@1}$。{@2}ので、この形式は <strong>{@3}</strong> です。",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "この行列は三角行列ではないので、固有値は対角成分ではありません。$\\det(A-\\lambda I)$ を第 3 行に沿って展開しましょう。",
  "Matica v stupňovitom tvare": "階段形の行列",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "行列：$A_f={@0}$、$A_g={@1}$。合成写像の行列は $A_gA_f={@2}$ なので、$(g\\circ f)(v)={@3}{@4}={@5}$ です。",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "小行列式 $D_3=\\det A$ は $D_2\\,a+K$ の形です。数 $K$ はいくつですか？",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "小行列式には、展開に使う成分 $a_{{@0}{@1}}={@2}$ 自体をさらに掛ける必要があります。",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "小行列式：$M_{{@0}{@1}}={@2}={@3}$。よって $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$ です。",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "行列の累乗は成分ごとには計算できません。それができるのは対角行列 $D$ だけです。$A^k=PD^kP^{-1}$ を使いましょう。",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "まず $B$ を転置し（行 ↔ 列）、それから成分ごとに計算しましょう。",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "まず各ベクトルに（すべての成分に）係数を掛け、それから対応する成分どうしを足しましょう。",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "$v=c_1b_1+c_2b_2+c_3b_3$ を成分ごとに書きましょう。基底ベクトルを行列の列とする 3 つの方程式の連立方程式が得られます。",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "行列 $A-{@0}I$ を書きましょう（成分は行ごとに）。",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "行列 $B^{T}$ を書きましょう（成分は行ごとに）。",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "解が無数にあるのは $h(A)=h(A\\mid b)\\lt 3$ のときだけです。係数行列で 0 になった行の右辺も見ましょう。",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "同次連立方程式 ${@0}$ の自明でない解を 1 つ求めましょう。（0 でない定数倍ならどれでも正解です。）",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "$A={@1}$、$B={@2}$ のとき、${@0}X-A=B^{T}$ を満たす行列 $X$ を求めましょう。成分は行ごとに入力しましょう。",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "連立方程式 $(A-\\lambda I)v=o$ の 0 でない解を求めましょう（0 でない定数倍ならどれでも正解です）。",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "$\\mathbb{R}^3$ の基底 $b_1={@1}$、$b_2={@2}$、$b_3={@3}$ に関するベクトル $v={@0}$ の座標を求めましょう。「c₁; c₂; c₃」の形で入力しましょう。",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "固有ベクトルを求めて $P$ と $D$ を作り、$A^k=PD^kP^{-1}$ を使いましょう。対角行列の累乗は対角成分ごとに計算できます。",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "行列 $A={@0}$ の固有値を求めましょう。セミコロンで区切って入力しましょう。",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "行列 $A={@0}$ の固有値をすべて求めましょう。セミコロンで区切って入力しましょう（重複する固有値は重複の回数だけ入力しましょう）。",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "行列 $A={@1}$ の逆行列の第 {@0} 行を求めましょう。3 つの数をセミコロンで区切って入力しましょう。",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "${@0}=\\alpha{@1}+\\beta{@2}$ となる数 $\\alpha, \\beta$ を求めましょう。「α; β」の形で入力しましょう。",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "行列の積は可換ではありません。方程式 ${@0}$ からは、行列 $A^{-1}$ を{@1}掛ける必要があります。",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "2 つの条件をまとめると $A\\,(u\\mid v)=(f(u)\\mid f(v))$ です。行列 $(u\\mid v)$ の逆行列を求め、右から掛けましょう。",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "2×2 行列で表される写像による単位正方形の像",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "未知数の個数から引くのは方程式の個数ではなく、係数行列の階数です。従属な方程式があるかもしれません。",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "ベクトルを成分ごとに引き、$\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$ を使いましょう。",
  "Ortogonálna projekcia vektora na priamku": "ベクトルの直線への正射影",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "3 つの条件をすべて確かめましょう：零ベクトル、和について閉じていること、スカラー倍について閉じていること。すべて成り立てば部分空間です。",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "$W$ が零ベクトルを含むか、和と実数倍について閉じているかを確かめましょう。否定するには反例が 1 つあれば十分です。",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "変形すると独立な方程式が 2 つ残ります。未知数の 1 つをパラメータに選びましょう（または 2 つの行の外積を使いましょう）。",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "条件 $D = 0$ から ${@0}{@1} = {@2}$、つまり ${@3} = {@4}$ です。",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "条件 $D_3\\gt 0$ から $a\\gt {@0}$、つまり $c={@1}$ です。",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "$A^{T}$ を $A$ とも $-A$ とも成分ごとに比べましょう。どちらかの等式が成り立つかもしれません。",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "成分を比べると、連立方程式 ${@0}={@1}$、${@2}={@3}$ が得られます。",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "$\\det(cA)=c^{n}\\det A$、$\\det(AB)=\\det A\\det B$、$\\det A^{T}=\\det A$、$\\det A^{-1}=1/\\det A$ を使いましょう。",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "サラスの方法を使いましょう：「右下がり」の 3 つの積はプラス、「左下がり」の 3 つの積はマイナスです。",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "第 {@0} 行の余因子を使っています。余因子行列は転置されているので、逆行列の第 {@1} 行は第 {@2} 列の余因子からなります。",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "余因子 $A_{{@0}{@1}}$ を使っています。成分 $(A^{-1})_{{@2}{@3}}$ には、添字を入れ替えた余因子 $A_{{@4}{@5}}$ が必要です。",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "成分ごとに計算します：${@0}=({@1})={@2}$。",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "$A={@0}$、$B={@1}$ のとき、行列 ${@2}$ を計算しましょう。成分は行ごとに入力しましょう（4 つの数をセミコロンで区切って）。",
  "Pre ktoré $a$ je $D=0$?": "$D=0$ となるのは $a$ がいくつのときですか？",
  "Pre ktoré $t$ je $D=0$?": "$D=0$ となるのは $t$ がいくつのときですか？",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "内積が 0 になるのは $t$ がいくつのときですか？ 整数でない答えは分数で入力しましょう。",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "ベクトル $u={@0}$ と $v={@1}$ が直交するのは $t$ がいくつのときですか？ 整数でない答えは分数で入力しましょう。",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "行列 $A={@0}$ の階数が 2 になるのは、パラメータ $a$ がいくつのときですか？",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "ベクトル $u={@0}$、$v={@1}$、$w={@2}$ が一次従属になるのは、パラメータ $t$ がいくつのときですか？",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "$2\\times 2$ 行列では $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$ を解きましょう。",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "行列 $A={@0}$ について、逆行列の成分 $(A^{-1})_{{@1}{@2}}$ を計算しましょう。整数でない答えは分数で入力しましょう。",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "行列 $A={@0}$ について、トレース $\\operatorname{tr}(A^{T}A)$ を計算しましょう。",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "サラスの方法で行列式を計算し直しましょう：3 つの積を足し、3 つの積を引きます。ベクトルが一次独立なのは行列式が 0 でないときだけです。",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "3 次の行列では、$2\\times 2$ のように 2 本の対角線だけでは足りません。サラスの方法には 6 つの積があります：3 つが正、3 つが負です。",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "${@0}$ 次の行列を $c$ 倍すると、行列式は $c$ 倍ではなく $c^{n}$ 倍になります。",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "${@0}$ 次の行列を $c$ 倍すると、${@1}$ 個の行のそれぞれが $c$ 倍されます：$\\det(cA)=c^{n}\\det A$。",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "$A$ を反対側に移項すると符号が変わります：${@0}X=A+B^{T}$。",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "交差項 $c\\,x_ix_j$ については $a_{ij}=a_{ji}=c/2$ です。",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "$w_1$ への射影は $u_2$ に足すのではなく、$u_2$ から引きます。結果が $w_1$ と直交するか確かめましょう。",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "成分が 2 乗されていません。対角成分 $(A^{T}A)_{jj}$ は第 $j$ 列とそれ自身との内積、つまり 2 乗の和です。",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "成分 $(A^{T}A)_{jj}$ は、行列 $A$ の第 $j$ 列とそれ自身との内積です。",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "最初の 2 行は互いに比例していないので、$h(A)\\ge 2$ です。階数が 3 より小さくなるのは、$D=\\det A=0$ のとき、かつそのときに限ります。{@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "最初の 2 つの主小行列式は $a$ によりません。$D_3=\\det A$ は係数 $D_2$ をもつ $a$ の一次関数です。",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "解がただ 1 つになるのは $h(A)=h(A\\mid b)=3$ のときだけです。消去のあと、係数行列に零行ができていないか確かめましょう。",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "行基本変形で主成分の下の成分を 0 にし、0 でない行を数えましょう。",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "$n$ 個の未知数をもつ同次連立方程式の解は、次元 $n-h(A)$ の部分空間をなします。",
  "Riešenie je $X={@0}={@1}={@2}$.": "解は $X={@0}={@1}={@2}$ です。",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "$(A-\\lambda I)v=o$ を解きます。ここで $A-{@0}I={@1}$ です。{@2} 検算：$A{@3}={@4}={@5}\\cdot{@6}$。",
  "Rotácia útvaru okolo počiatku": "原点のまわりの図形の回転",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "方程式 $c_1b_1+c_2b_2+c_3b_3=v$ は、基底ベクトルを列とする行列をもつ連立方程式です：<br>{@0}<br>後退代入 – {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "方程式に行列 $A^{-1}$ を右から掛けましょう：$X=BA^{-1}$。",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "方程式に行列 $A^{-1}$ を左から掛けましょう：$X=A^{-1}B$。",
  "Rozhodni, aká je matica $A={@0}$.": "行列 $A={@0}$ がどのような行列か判定しましょう。",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "0 でない成分が 1 つだけの行または列に沿って行列式を展開しましょう。符号 $(-1)^{i+j}$ を忘れずに。",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "$\\det(A-\\lambda I)$ を第 3 行に沿って展開すると：$p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$。",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "行列式を第 3 行に沿って展開すると $D=Ca+D_0$ となります。係数 $C$（パラメータを含む成分の余因子）はいくつですか？",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "第 3 行に沿って展開すると $D=Ct+D_0$ となります。係数 $C$（パラメータを含む成分の余因子）はいくつですか？",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "第 3 行に沿った展開：$D = {@0}$、ここで ${@1}$ です。よって $D = {@2}$ です。",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "第 3 行に沿って展開すると因数 $(c-\\lambda)$ が得られます。$c$ はいくつですか？",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "拡大係数行列を階段形に変形し、未知数を下から順に求めましょう。",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "行列方程式もふつうの方程式と同じように扱いましょう：$X$ について解いてから、成分ごとに計算します。",
  "Sarrusovo pravidlo pre determinant 3×3": "3×3 行列式のサラスの方法",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "サラスの方法：$\\det A={@0}$。",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "サラスの方法：右下がりの対角線上の 3 つの積はプラス、左下がりの 3 つの積はマイナスです。",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "半定値の形式では $\\det A=0$、つまり少なくとも 1 つの固有値が 0 です。行列式を確かめましょう。",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "内積 $\\langle u, v\\rangle$ は $at+b$ の形です。係数 $a$ はいくつですか？",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "内積をさらに $\\langle u, u\\rangle=\\|u\\|^2$ で割る必要があります。",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "写像の行列の列は、ベクトル $e_1=(1, 0)$ と $e_2=(0, 1)$ の像です。「まず $f$、次に $g$」という合成には積 $A_gA_f$ が対応します。",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "右辺の列は、行列式の第 {@1} 行ではなく、第 {@0} <em>列</em>に入ります。",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "シルベスターの判定法：$D_1\\gt 0$ は常に成り立つので、条件は $D_2=\\det A\\gt 0$ から得られます。",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "対称行列は、主対角線に関して対称な位置にある成分のすべての組について $a_{ij}=a_{ji}$ を満たします。1 組ずつ比べましょう。",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "ベクトル $u={@0}$、$v={@1}$、$w={@2}$ は一次従属ですか、それとも一次独立ですか？",
  "Sú vektory lineárne závislé, alebo nezávislé?": "ベクトルは一次従属ですか、それとも一次独立ですか？",
  "Súradnice vektora v báze b₁, b₂": "基底 b₁, b₂ に関するベクトルの座標",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "連立方程式は ${@0}={@1}$、${@2}={@3}$ です。その行列式 $D$ を計算しましょう。",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "連立方程式が解をもたないのは、$c\\neq 0$ の行 $(0\\ 0\\ 0\\mid c)$ が現れるとき、つまり $h(A)\\neq h(A\\mid b)$ のときだけです。",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "左下がりの対角線上の積は、正の項に足すのではなく、正の項から引きます。",
  "Sčítaj ich: aký je vektor ${@0}$?": "それらを足しましょう。ベクトル ${@0}$ は何ですか？",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "よって、行列 $A^{-1}$ の第 {@0} 行は $\\frac{1}{{@1}}({@2})={@3}$ です。",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "それは $\\dim\\operatorname{Im}f=h(A)$ です。核の次元は列の数から階数を引いたものです。",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "それは空間 $\\mathbb{R}^{{@0}}$ 全体の次元です。部分空間の次元はもっと小さいこともあり、階数で決まります。",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "それは核の次元です。像の次元は行列の階数に等しくなります。",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "それは係数行列の階数です。解空間の次元は自由な未知数の個数 $n-h(A)$ です。",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "それはもとの行列の行の数です。階数は、階段形に変形したあとの 0 でない行の数です。",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "それは列の数です。階数は階段形の 0 でない行の数です。",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "それはベクトルの個数です。そのうちいくつかは他のベクトルの一次結合かもしれません。次元は、それらから作った行列の階数です。",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "これはベクトル $u$ の $v$ 方向への射影です。射影するのは $v$ を $u$ 方向へなので、結果はベクトル $u$ の定数倍になります。",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "行列を転置して、$A$ や $-A$ と比べましょう。対角成分も見ましょう。",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "2 元連立一次方程式の 3 つの場合",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "$\\mathbb{R}^3$ の 3 つのベクトルが一次独立であるのは、それらから作った行列の行列式が 0 でないとき、かつそのときに限ります。",
  "Uhol priamky θ (°)": "直線の角 θ (°)",
  "Uhol φ (°)": "角 φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "拡大係数行列を階段形に変形し、$h(A)$ を $h(A\\mid b)$ や未知数の個数と比べましょう。",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "拡大係数行列を階段形に変形しましょう。係数行列の階数 $h(A)$ はいくつですか？",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "拡大係数行列を階段形に変形しましょう。最後の行から $x_3$ を求めましょう。",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "二次形式 $Q={@0}$ の定値性を判定しましょう（最も正確な選択肢を選びましょう）。",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "$\\mathbb{R}^{{@1}}$ の部分空間 $W=\\mathcal{L}({@0})$ の次元を求めましょう。",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "部分空間 $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$ の次元を求めましょう。",
  "Urči hodnosť matice $A={@0}$.": "行列 $A={@0}$ の階数を求めましょう。",
  "Urči číslo $c$ (prípadne ako zlomok).": "数 $c$ を求めましょう（必要なら分数で）。",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "分母にあるのはノルム $\\|u\\|$ と $\\|v\\|$ で、その 2 乗ではありません。",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "第 3 行には 0 が 2 つあります。$\\det(A-\\lambda I)$ をこの行に沿って展開し、残りの $2\\times 2$ 行列式は二次方程式として解きましょう。",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "第 {@0} 行の 0 でない成分は $a_{{@1}{@2}}={@3}$ だけなので、この行に沿ったラプラス展開により $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$ となります。",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "第 {@0} 列の 0 でない成分は $a_{{@1}{@2}}={@3}$ だけなので、この列に沿ったラプラス展開により $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$ となります。",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "ベクトル $v={@0}$ をまず写像 $f$：{@1} で写し、その結果を写像 $g$：{@2} で写します。像 $(g\\circ f)(v)$ を「x; y」の形で求めましょう。",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "基底ベクトルは係数行列の行ではなく<em>列</em>に入ります：第 $i$ の方程式は第 $i$ 成分どうしを比べたものです。",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "ベクトルが直交するのは、内積が 0 のとき、かつそのときに限ります。",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "ベクトルが一次従属になるのは、$D={@0}=0$ のとき、かつそのときに限ります。{@1} $t={@2}$ のとき、$w$ はベクトル $u$ と $v$ の一次結合です。",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "ベクトルを行列の行に書き、その階数を求めましょう。",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "ベクトルを行列の行に書き、サラスの方法で行列式を計算します：${@0}={@1}$。",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "ベクトルを列に書きます：$A\\,U=P$、ここで $U={@0}$、$P={@1}$ です。$\\det U={@2}$ なので、$U^{-1}={@3}$、$A=PU^{-1}={@4}{@5}={@6}$ です。",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "固有ベクトルは同次連立方程式 $(A-\\lambda I)v=o$ の 0 でない解です。",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "固有ベクトル：$\\lambda={@1}$ に対して ${@0}$、$\\lambda={@3}$ に対して ${@2}$。よって $P={@4}$、$D={@5}$、$\\det P={@6}$、$P^{-1}={@7}$ です。",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "固有値が対角成分になるのは三角行列のときだけです。ここでは固有方程式 $\\det(A-\\lambda I)=0$ を解きましょう。",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "次元定理に出てくるのは定義域の次元、つまり行の数ではなく列の数 ${@0}$ です。",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "行を ${@0}$ 倍すると、行列式は ${@1}$ 倍になります。",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "$(A^{-1})_{{@0}{@1}}$ を計算しましょう。整数でない答えは分数で入力しましょう。",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "$A=PU^{-1}$ を計算しましょう（成分は行ごとに）。",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "$A^{-1}$ を計算しましょう（成分は行ごとに）。",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "$A^{{@0}}=PD^{{@1}}P^{-1}$ を計算しましょう（成分は行ごとに）。",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "$X={@0}$ を計算しましょう（成分は行ごとに）。",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "$\\cos\\varphi$ を計算しましょう（分数で）。",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "ベクトル $u={@0}$ と $v={@1}$ のなす角を $\\varphi$ として、$\\cos\\varphi$ を計算しましょう。答えは分数で入力しましょう。",
  "Vypočítaj $\\det A$.": "$\\det A$ を計算しましょう。",
  "Vypočítaj $\\langle u, u\\rangle$.": "$\\langle u, u\\rangle$ を計算しましょう。",
  "Vypočítaj $\\langle u, v\\rangle$.": "$\\langle u, v\\rangle$ を計算しましょう。",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "$w_1=u_1$ として、$\\langle u_2, w_1\\rangle$ を計算しましょう。",
  "Vypočítaj $\\langle v, u\\rangle$.": "$\\langle v, u\\rangle$ を計算しましょう。",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "$\\langle w_1, w_1\\rangle$ を計算しましょう。",
  "Vypočítaj $\\|u\\|$.": "$\\|u\\|$ を計算しましょう。",
  "Vypočítaj $\\|v\\|$.": "$\\|v\\|$ を計算しましょう。",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "$c_1$ を求めて、すべての座標を入力しましょう。",
  "Vypočítaj $c_2$.": "$c_2$ を求めましょう。",
  "Vypočítaj $f(v)$.": "$f(v)$ を計算しましょう。",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "$g\\bigl(f(v)\\bigr)$ を計算しましょう。",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "$x_{{@0}}$ を求めましょう。整数でない答えは分数で入力しましょう。",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "第 {@0} 列の余因子 $A_{1{@1}}$、$A_{2{@2}}$、$A_{3{@3}}$ を計算しましょう。",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "余因子 $A_{{@0}{@1}}$ を計算しましょう。",
  "Vypočítaj determinant $D$ matice sústavy.": "係数行列の行列式 $D$ を計算しましょう。",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "行列式 $D_\\alpha$ を計算しましょう（第 1 列を右辺で置き換えます）。",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "行列式 $D_\\beta$ を計算しましょう（第 2 列を右辺で置き換えます）。",
  "Vypočítaj determinant $D_{{@0}}$.": "行列式 $D_{{@0}}$ を計算しましょう。",
  "Vypočítaj determinant ${@0}$.": "行列式 ${@0}$ を計算しましょう。",
  "Vypočítaj determinant matice $A={@0}$.": "行列 $A={@0}$ の行列式を計算しましょう。",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "対角成分 $(A^{T}A)_{{@0}{@1}}$ を計算しましょう。",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "主小行列式 $D_{@0}$ を計算しましょう。",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "$U={@0}$ の逆行列を計算しましょう（成分は行ごとに）。",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "行列 $A+B^{T}$ を計算しましょう（成分は行ごとに）。",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "行列 $X$ を計算しましょう（成分は行ごとに）。",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "行列 ${@0}$ を計算しましょう（成分は行ごとに）。",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "小行列式 $M_{{@0}{@1}}$ を計算しましょう（第 {@2} 行と第 {@3} 列を取り除いた行列式）。",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "ベクトル $v={@0}$ のベクトル $u={@1}$ 方向への正射影を計算しましょう。成分はセミコロンで区切って入力しましょう（分数は $p/q$ の形で）。",
  "Vypočítaj rohový minor $D_2$.": "主小行列式 $D_2$ を計算しましょう。",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "トレース $\\operatorname{tr}(A^{T}A)$ を計算しましょう。",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "トレース $\\operatorname{tr}A$ を計算しましょう。",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "右下がりの対角線上の 3 つの積の和を計算しましょう。",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "左下がりの対角線上の 3 つの積の和を計算しましょう。",
  "Vypočítaj vektor ${@0}u$.": "ベクトル ${@0}u$ を計算しましょう。",
  "Vypočítaj vektor ${@0}{@1}v$.": "ベクトル ${@0}{@1}v$ を計算しましょう。",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "ベクトル $u={@0}$ と $v={@1}$ の距離 $\\|u-v\\|$ を計算しましょう。",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "固有方程式 $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$ を解きましょう。固有値を入力しましょう。",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "$A={@1}$、$B={@2}$ のとき、行列方程式 ${@0}$ を解きましょう。行列 $X$ の成分は行ごとに入力しましょう。",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "行の入れ替えで符号が変わり、行を ${@0}$ 倍すると行列式は ${@1}$ 倍になります：$\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "第 1 行から $x_1$ を求めて、解全体を入力しましょう。",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "方程式 $AU=P$ からは、行列 $U^{-1}$ を右から掛ける必要があります：$A=PU^{-1}$。行列の積は可換ではありません。",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "方程式から $X=\\tfrac{1}{{@0}}(A+B^{T})$ です。$B^{T}={@1}$、$A+B^{T}={@2}$ なので、$X={@3}$ です。",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "第 {@0} 行から ${@1}=0$ なので、固有ベクトルは ${@2}$ の定数倍です。",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "行列 $B$ の転置を忘れています。$B^{T}$ では、行列 $B$ の行が列として書かれます。",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "行列 $B$ の転置を忘れています。方程式にあるのは $B^{T}$ です。",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "ベクトルに係数を掛けるのを忘れています。まずベクトル $u$ と $v$ の各成分に、それぞれの数を掛けましょう。",
  "Zadaj $\\alpha$ a $\\beta$.": "$\\alpha$ と $\\beta$ を入力しましょう。",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "自明でない解を 1 つ入力しましょう（0 でない定数倍ならどれでも正解です）。",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "射影 $\\operatorname{proj}_u v$ を入力しましょう（分数は $p/q$ の形で）。",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "核の方向ベクトルを入力しましょう（0 でない定数倍ならどれでも正解です）。",
  "Zadaj vektor $w_2$.": "ベクトル $w_2$ を入力しましょう。",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "$\\lambda={@0}$ に対する固有ベクトルを入力しましょう（0 でない定数倍ならどれでも可）。",
  "Zadaj všetky vlastné čísla matice $A$.": "行列 $A$ の固有値をすべて入力しましょう。",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "行列 $A^{-1}$ の第 {@0} 行を入力しましょう。",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "等式を成分ごとに書きましょう。$\\alpha$ と $\\beta$ についての 2 つの方程式の連立方程式が得られます。",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "写像を逆の順序で使っています。$v$ にはまず $f$ が作用するので、合成写像の行列は $A_gA_f$ です（行列 $A_f$ がベクトルのすぐ隣にきます）。",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "写像 $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ は $f(x)=Ax$（$A={@0}$）で与えられています。核 $\\operatorname{Ker}f$ は直線です。その方向ベクトルを求めましょう（0 でない定数倍ならどれでも正解です）。",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "写像 $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ は行列 $A={@2}$ で与えられています。$\\dim\\operatorname{{@3}}f$ を求めましょう。",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "形式の対称行列を作り（交差項は係数の半分）、主小行列式を計算しましょう。",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "連立方程式を作り（基底ベクトルを列に）、階段形に変形しましょう。最後の行から $c_3$ を求めましょう。",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "残りの因数は、左上の $2\\times 2$ 小行列の固有多項式です。そのトレースはいくつですか？",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "形式が負定値になるのは、主小行列式の符号が交互に変わり、かつ $D_1\\lt 0$ のときだけです。",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "ベクトルが一次従属になるのは行列式が 0 のときだけです。サラスの方法で計算し直しましょう。符号に注意しましょう。",
  "ani symetrická, ani antisymetrická": "対称行列でも交代行列でもない",
  "antisymetrická": "反対称",
  "indefinitná": "不定値",
  "je podpriestor": "部分空間である",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "ベクトル $(1, {@0}, 0)$ と $({@1}, 0, 1)$ の線形包である",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "同次一次方程式の解の集合である。解の和も解の定数倍もまた解になる",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "同次連立方程式の解の集合である（原点を通る直線）",
  "jeden parameter": "パラメータ 1 つ",
  "kladne definitná": "正定値",
  "kladne semidefinitná": "半正定値",
  "kolmá projekcia na os $x$": "$x$ 軸への正射影",
  "kolmá projekcia na os $y$": "$y$ 軸への正射影",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "固有値が複素数 – 実の固有方向はない",
  "lineárne nezávislé": "一次独立",
  "lineárne závislé": "一次従属",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "たとえば $(1, 0, 0)$ と $(0, 1, 0)$ は属するが、その和 $(1, 1, 0)$ は属さない – 和について閉じていない",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "たとえば $(1, 0, 0)$ は属するが、$(-1)\\cdot(1, 0, 0)$ は属さない – スカラー倍について閉じていない",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "たとえば $(1, 1, 0)$ は属するが、$2\\neq 4$ なので $2\\cdot(1, 1, 0)=(2, 2, 0)$ は属さない",
  "nekladné": "0 以下",
  "nenulové riadky": "零でない行",
  "nenulový riadok": "零でない行",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "零ベクトルを含まない（$0\\neq {@0}$）",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "零ベクトルを含まない：第 1 成分が 0 になるのは $s=0$ のときだけだが、そのとき第 2 成分は ${@0}\\neq 0$",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "$A^{T}=A$ も $A^{T}=-A$ も成り立たないので、行列は対称行列でも交代行列でもない",
  "nezáporné": "0 以上",
  "nie je podpriestor": "部分空間ではない",
  "osová súmernosť podľa osi $x$": "$x$ 軸に関する対称移動",
  "osová súmernosť podľa osi $y$": "$y$ 軸に関する対称移動",
  "osová súmernosť podľa priamky $y=-x$": "直線 $y=-x$ に関する対称移動",
  "osová súmernosť podľa priamky $y=x$": "直線 $y=x$ に関する対称移動",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "$A^{T}=-A$ が成り立つので、行列は交代行列である",
  "platí $A^{T}=A$, teda matica je symetrická": "$A^{T}=A$ が成り立つので、行列は対称行列である",
  "práve jedno riešenie": "ただ 1 つの解",
  "rotácia o $180^\\circ$": "$180^\\circ$ の回転",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "反時計回りに $90^\\circ$ の回転",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "時計回りに $90^\\circ$ の回転",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "原点を中心とする $2$ 倍の相似拡大",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "せん断 $(x, y)\\mapsto(x+y, y)$",
  "sprava": "右から",
  "symetrická": "対称",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "基底 B に関する座標：({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = 標準基底で ({@2}; {@3})",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "よって $\\alpha=\\frac{{@0}}{{@1}}={@2}$、$\\beta=\\frac{{@3}}{{@4}}={@5}$ です。",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "主成分は強調表示、階段の下はすべて 0",
  "všetky rohové minory sú kladné": "すべての主小行列式が正である",
  "z {@0}. riadku: ${@1} = {@2}$": "第 {@0} 行から：${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "主小行列式の符号が交互に変わる（{@0}）",
  "záporne definitná": "負定値",
  "záporne semidefinitná": "半負定値",
  "zľava": "左から",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$ なので、解は直線をなします（パラメータ 1 つ）。解は階段形の 0 でない 2 つの行の両方と直交するので、それらの外積として得られます：${@1}\\times{@2}={@3}${@4}。すべての解は $t\\cdot{@5}$、$t\\in\\mathbb{R}$ です。",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$ なので $\\dim\\operatorname{Im}f={@2}$、次元定理より $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$ です。",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>フロベニウスの定理（階数の判定）より：{@1}。",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>後退代入 – {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "変形すると：{@0}<br>階数は 2 で、解は 0 でない 2 つの行の両方と直交するので、${@1}\\times{@2}={@3}${@4} の定数倍です。",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "数 $\\lambda={@0}$ は行列 $A={@1}$ の固有値です。これに対する固有ベクトルを求めましょう（0 でない定数倍ならどれでも正解です）。",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "${@0}$ 次の正方行列 $A$ は $\\det A={@1}$ です。{@2} ${@3}$ を計算しましょう。整数でない答えは分数で入力しましょう（例：$-3/4$）。",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "3 次の正方行列の階数が 3 になるのは、行列式が 0 でないとき、かつそのときに限ります。",
  "− súčiny na oranžových diagonálach": "− オレンジ色の対角線上の積"
 }
});
