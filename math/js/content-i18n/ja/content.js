/* 日本語: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/content/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "cisla": {
   "title": "数の式と計算の順序",
   "summary": "数、かっこ、そして正しい計算の順序。",
   "theory": [
    "<p>自然数は $1, 2, 3, 4, \\dots$ です。その集合を $\\mathbb{N}$ で表します。これに 0 を加えると 0 以上の整数になり、さらに負の数を加えると整数の集合 $\\mathbb{Z}$ ができます。</p>",
    {
     "fig": "numberline",
     "caption": "数直線：青い点は自然数で、0 の左側には負の整数があります。"
    },
    "<p><strong>計算の順序：</strong></p>\n       <ol><li>かっこの中の式、</li><li>累乗と根号、</li>\n       <li>かけ算とわり算（左から右へ）、</li><li>たし算とひき算（左から右へ）。</li></ol>"
   ],
   "examples": [
    {
     "task": "$2 + 3\\cdot 4 - 6 : 2$ を計算しなさい。",
     "steps": [
      "まずかけ算とわり算：$3\\cdot 4 = 12$、$6 : 2 = 3$。",
      "式は $2 + 12 - 3$ になります。",
      "左から右へ：$2 + 12 = 14$、次に $14 - 3 = 11$。",
      "<strong>答え：11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "分数と分数の計算",
   "summary": "約分、通分（倍分）、分数の計算。",
   "theory": [
    "<p>分数 $\\frac{a}{b}$ は分子 $a$ と分母 $b \\neq 0$ をもちます。分子と分母に同じ 0 でない数をかけても、分数の値は変わりません（<strong>倍分</strong>）。その逆の操作が<strong>約分</strong>です。</p>",
    {
     "fig": "fractions",
     "caption": "倍分しても値は変わりません：$\\frac{1}{2}=\\frac{3}{6}$ と $\\frac{2}{3}=\\frac{4}{6}$ は、色を塗った部分の長さが同じです。"
    },
    "<p><strong>たし算とひき算</strong>には共通の分母が必要です：$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$。</p>",
    "<p><strong>かけ算</strong>：$\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$。<strong>わり算</strong>は逆数をかけます：$\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$。</p>"
   ],
   "examples": [
    {
     "task": "$\\frac{1}{2}+\\frac{2}{3}$ を計算しなさい。",
     "steps": [
      "共通の分母は $2\\cdot 3 = 6$ です。",
      "$\\frac{1}{2}=\\frac{3}{6}$、$\\frac{2}{3}=\\frac{4}{6}$。",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$。",
      "<strong>答え：$\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "百分率と割合の計算",
   "summary": "百分率の計算、何％増し・何％引き。",
   "theory": [
    "<p>$p\\,\\%$ は $\\frac{p}{100}$ を意味します。数 $x$ の $p\\,\\%$ は $\\frac{p}{100}\\cdot x$ です。</p>",
    {
     "fig": "percent",
     "caption": "全体を 100 個に分けます。$25\\,\\%$ はそのうちの 25 個です。"
    },
    "<p>$p\\,\\%$ の<strong>増加</strong>は $1+\\frac{p}{100}$ をかけること、<strong>減少</strong>は $1-\\frac{p}{100}$ をかけることです。</p>",
    "<p>小数 $0.25$ は分数 $\\frac{1}{4}$ であり、$25\\,\\%$ でもあります。日本語では小数点をピリオド（.）で書きます。</p>"
   ],
   "examples": [
    {
     "task": "ある商品の価格は $80\\,€$ です。$15\\,\\%$ 値上がりするといくらになりますか。",
     "steps": [
      "かける数は $1+\\frac{15}{100}=1.15$ です。",
      "$80\\cdot 1.15 = 92$。",
      "<strong>答え：92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "集合と集合の演算",
   "summary": "要素、和集合、共通部分、差集合、要素の個数。",
   "theory": [
    "<p>集合とは、互いに区別できる要素の集まりです。$a\\in A$ は、要素 $a$ が集合 $A$ に属することを表します。空集合は $\\varnothing$ です。</p>",
    "<p>演算：<strong>和集合</strong> $A\\cup B$（少なくとも一方の集合に含まれる要素）、<strong>共通部分</strong> $A\\cap B$（両方の集合に含まれる要素）、<strong>差集合</strong> $A\\setminus B$（$A$ の要素のうち $B$ に含まれないもの）。</p>",
    {
     "fig": "venn",
     "caption": "$A=\\{1,2,3,4\\}$ と $B=\\{3,4,5\\}$ のベン図。共通部分は円が重なった部分にあります。"
    },
    "<p>要素の個数を $|A|$ で表します。$|A\\cup B| = |A|+|B|-|A\\cap B|$ が成り立ちます。共通部分の要素は 2 回数えているので、その分を引くのです。</p>"
   ],
   "examples": [
    {
     "task": "$A=\\{1,2,3,4\\}$、$B=\\{3,4,5\\}$ とします。$A\\cup B$、$A\\cap B$、$A\\setminus B$ を求めなさい。",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "平面図形の周の長さと面積",
   "summary": "長方形・三角形・円の周の長さと面積。",
   "theory": [
    "<p>辺が $a$ と $b$ の長方形の周の長さは $o=2(a+b)$、面積は $S=a\\cdot b$ です。</p>",
    "<p>底辺が $z$ で、その底辺に対する高さが $v$ の三角形の面積は $S=\\frac{z\\cdot v}{2}$ です。</p>",
    "<p>半径 $r$ の円の周の長さ（円周）は $o=2\\pi r$、面積は $S=\\pi r^2$ です。ここで $\\pi\\approx 3.14159$ です。</p>",
    {
     "fig": "shapes",
     "caption": "長方形の辺 $a$、$b$、三角形の底辺 $z$ と高さ $v$、円の半径 $r$。"
    }
   ],
   "examples": [
    {
     "task": "円の半径は $r=3\\,\\text{cm}$ です。この円の面積を求めなさい。",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$。",
      "$9\\pi\\approx 28.27\\,\\text{cm}^2$。"
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "三平方の定理",
   "summary": "直角三角形の辺の長さを求める。",
   "theory": [
    "<p>直角をはさむ 2 辺が $a$、$b$、斜辺が $c$ の直角三角形では、$a^2+b^2=c^2$ が成り立ちます。斜辺は直角の向かい側にあり、いつも最も長い辺です。</p>",
    {
     "fig": "pythagoras",
     "caption": "辺が $3, 4, 5$ の三角形：直角をはさむ辺の上の正方形の面積 $9+16$ を合わせると、斜辺の上の正方形の面積 $25$ になります。"
    },
    "<p>よく使われる整数の組：$(3,4,5)$、$(5,12,13)$、$(8,15,17)$、$(7,24,25)$ とその倍数。</p>"
   ],
   "examples": [
    {
     "task": "直角をはさむ 2 辺の長さが $6$ と $8$ です。斜辺の長さはいくつですか。",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$。",
      "$c=\\sqrt{100}=10$。"
     ]
    }
   ]
  },
  "linearne": {
   "title": "一次方程式",
   "summary": "等式の性質を使った変形と一次方程式。",
   "theory": [
    "<p>方程式は<strong>等式の性質</strong>を使って解きます：両辺に同じ数をたしたり両辺から同じ数をひいたりし、両辺に 0 でない同じ数をかけたり両辺を 0 でない同じ数でわったりします。</p>",
    "<p>$a\\neq 0$ のとき、方程式 $ax+b=c$ は次のように解きます：$ax=c-b$、よって $x=\\frac{c-b}{a}$。</p>",
    "<p>検算は、答えをもとの方程式に代入して行います。</p>"
   ],
   "examples": [
    {
     "task": "$3x+5=20$ を解きなさい。",
     "steps": [
      "両辺から $5$ をひく：$3x=15$。",
      "両辺を $3$ でわる：$x=5$。",
      "検算：$3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "二次方程式",
   "summary": "判別式、解の公式、解と係数の関係。",
   "theory": [
    "<p>二次方程式 $ax^2+bx+c=0$ ($a\\neq 0$) の解は $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$ です。ここで $D=b^2-4ac$ は<strong>判別式</strong>です。</p>",
    "<p>$D&gt;0$ ならば、方程式は異なる 2 つの実数解をもちます。$D=0$ ならば重解を 1 つもちます。$D&lt;0$ ならば実数解をもちません。</p>",
    {
     "fig": "parabola",
     "caption": "$y=x^2+px+q$ のグラフ（つまり $b=p$、$c=q$）。解は放物線と $x$ 軸の交点です。$p$ と $q$ を変えて、判別式の変化を観察しましょう。"
    },
    "<p><strong>解と係数の関係</strong>（$a=1$ のとき）：$x_1+x_2=-b$、$x_1\\cdot x_2=c$。</p>"
   ],
   "examples": [
    {
     "task": "$x^2-5x+6=0$ を解きなさい。",
     "steps": [
      "$a=1$、$b=-5$、$c=6$、$D=25-24=1$。",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$、よって $x_1=3$、$x_2=2$。",
      "確認：$3+2=5$、$3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "累乗と累乗根",
   "summary": "累乗と累乗根の計算のきまり。",
   "theory": [
    "<p>$a&gt;0$ と整数 $m,n$ について次が成り立ちます：$a^m\\cdot a^n=a^{m+n}$、$\\frac{a^m}{a^n}=a^{m-n}$、$(a^m)^n=a^{m\\cdot n}$。</p>",
    "<p>負の指数：$a^{-n}=\\frac{1}{a^n}$。0 乗：$a\\neq 0$ のとき $a^0=1$。</p>",
    "<p>累乗根は累乗の逆の操作です：$\\sqrt{a}=a^{1/2}$、$\\sqrt[n]{a}=a^{1/n}$。また $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$ が成り立ちます。</p>"
   ],
   "examples": [
    {
     "task": "$\\frac{2^5\\cdot 2^{-2}}{2}$ を簡単にしなさい。",
     "steps": [
      "分子：$2^5\\cdot 2^{-2}=2^{3}$。",
      "$\\frac{2^3}{2}=2^{2}$。",
      "<strong>答え：$4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "直角三角形と三角比",
   "summary": "直角三角形における正弦（sin）、余弦（cos）、正接（tan）。",
   "theory": [
    "<p>鋭角 $\\alpha$ をもつ直角三角形で：$\\sin\\alpha=\\frac{\\text{対辺}}{\\text{斜辺}}$、$\\cos\\alpha=\\frac{\\text{隣辺}}{\\text{斜辺}}$、$\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$。</p>",
    {
     "fig": "trigtriangle",
     "caption": "角 $\\alpha$ から見た直角三角形の辺の名前。"
    },
    "<p>基本の関係式：$\\sin^2\\alpha+\\cos^2\\alpha=1$。</p>",
    {
     "fig": "unitcircle",
     "caption": "単位円：円周上の点の座標は $(\\cos\\alpha, \\sin\\alpha)$ です。角を動かして、符号がどう変わるか観察しましょう。"
    },
    "<p>よく使う角の値：</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "$\\sin\\alpha=0.6$ で $\\alpha$ が鋭角のとき、$\\cos\\alpha$ を求めなさい。",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0.36=0.64$。",
      "$\\cos\\alpha=\\sqrt{0.64}=0.8$（鋭角なので余弦は正）。"
     ]
    }
   ]
  },
  "matice": {
   "title": "2×2 行列の行列式と逆行列",
   "summary": "行列の表し方、2×2 の行列式、逆行列。",
   "theory": [
    "<p>$m\\times n$ 型の行列とは、$m$ 個の行と $n$ 個の列に数を並べた表です。第 $i$ 行・第 $j$ 列の成分を $a_{ij}$ で表します。</p>",
    "<p>行列 $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ の行列式は $\\det A=ad-bc$ です。$\\det A\\neq 0$ ならば、逆行列 $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$ が存在します。</p>",
    {
     "fig": "parallelogram",
     "caption": "行列 $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ の列はベクトル $u=(2,1)$ と $v=(3,4)$ です。行列式の絶対値は、これらが作る平行四辺形の面積です：$|\\det|=5$。"
    },
    "<p>連立一次方程式は $Ax=b$ と書くことができ、逆行列を使って $x=A^{-1}b$ と解けます。</p>"
   ],
   "examples": [
    {
     "task": "$\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ を計算しなさい。",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$。"
     ]
    }
   ]
  },
  "sucin": {
   "title": "行列の積",
   "summary": "行列のかけ算の方法と、順序が大切な理由。",
   "theory": [
    "<p>積 $C=AB$ は、$A$ の列の数が $B$ の行の数と等しいときに存在します。第 $i$ 行・第 $j$ 列の成分は $c_{ij}=\\sum_k a_{ik}b_{kj}$ です。つまり、行列 $A$ の行と行列 $B$ の列の対応する成分をかけて、たし合わせます。</p>",
    {
     "fig": "matmul",
     "caption": "成分 $c_{11}$ は $A$ の第 1 行と $B$ の第 1 列からできます：$1\\cdot 0+2\\cdot 1=2$。"
    },
    "<p>行列の積は<strong>交換法則が成り立ちません</strong>：一般に $AB\\neq BA$ です。</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$、$B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$ のとき、$AB$ を計算しなさい。",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$、$c_{12}=1\\cdot 1+2\\cdot 0=1$。",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$、$c_{22}=3\\cdot 1+4\\cdot 0=3$。",
      "<strong>答え：</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "関数の微分",
   "summary": "瞬間の変化率、微分の公式、接線。",
   "theory": [
    "<p>微分係数 $f'(x_0)$ は、極限 $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$ が存在するときのその値です。図形的には、点 $x_0$ における $f$ のグラフの接線の傾きを表します。</p>",
    {
     "fig": "tangent",
     "caption": "$f(x)=x^3-2x$ のグラフと点 $x_0$ における接線。その傾きは $f'(x_0)=3x_0^2-2$ です。接線が水平になるところでは、微分係数は 0 です。"
    },
    "<p>公式：$(x^n)'=n\\,x^{n-1}$、$(c)'=0$、$(c\\,f)'=c\\,f'$、$(f+g)'=f'+g'$、$(f\\cdot g)'=f'g+fg'$、$(\\sin x)'=\\cos x$、$(\\cos x)'=-\\sin x$。</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$ のとき、$f'(2)$ を求めなさい。",
     "steps": [
      "$f'(x)=3x^2-2$。",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$。"
     ]
    }
   ]
  },
  "integraly": {
   "title": "積分の基礎",
   "summary": "不定積分と定積分、微分積分学の基本定理（ニュートン・ライプニッツの公式）。",
   "theory": [
    "<p>関数 $f$ の原始関数 $F$ は $F'(x)=f(x)$ を満たします。不定積分：$\\int f(x)\\,dx=F(x)+C$。$n\\neq -1$ のとき $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$ が成り立ちます。</p>",
    "<p>定積分は<strong>ニュートン・ライプニッツの公式</strong>で計算します：$\\int_a^b f(x)\\,dx=F(b)-F(a)$。図形的には、$a$ から $b$ までの $f$ のグラフの下の部分の面積です（$f$ が正のとき）。</p>",
    {
     "fig": "area",
     "caption": "$0$ から $b$ までの $f(x)=x^2$ のグラフの下の面積は $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$ です。"
    },
    "<p>線形性：$\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$。</p>"
   ],
   "examples": [
    {
     "task": "$\\int_0^2 3x^2\\,dx$ を計算しなさい。",
     "steps": [
      "原始関数：$F(x)=x^3$。",
      "$F(2)-F(0)=8-0=8$。",
      "<strong>答え：8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$、$B={@1}$ のとき、積 $AB$ の {@2} 行 {@3} 列の成分はいくつですか？",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$ なので、$\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$ です。",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — 答えは $p/q$ の形の分数で入力しましょう（例：5/6）。",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$ なので、$b={@3}$ です。",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$ なので、$c={@3}$ です。",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$ なので、$f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$ です。",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "数 $x$ の $p\\,\\%$ は $\\frac{p}{100}\\cdot x$ です。",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$ なので、$\\frac{{@2}}{100}\\cdot {@3}={@4}$ です。",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$ なので、$x={@4}$ です。",
  "25 štvorčekov zo 100": "100 マスのうち 25 マス",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "答え ${@0}^{\\square}$ の指数はいくつになりますか？",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "共通の分母（分母の積 ${@0}\\cdot {@1}$）はいくつですか？",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "解の和 $x_1 + x_2$ はいくつですか？（解と係数の関係から）",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "解の積 $x_1 \\cdot x_2$ はいくつですか？",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "導関数は $f'(x)=k\\,x^{{@0}}{@1}$ です。係数 $k$ はいくつですか？",
  "Determinant ako obsah rovnobežníka": "平行四辺形の面積としての行列式",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "もとの関数 $f$ に代入してしまいました。先に関数を微分してから代入しましょう。",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "もとの関数に代入してしまいました。先に原始関数 $F$ を求めて、それに代入しましょう。",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "上端だけを代入しました。$F({@0})$ からさらに $F({@1})$ を引きましょう。",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "直径 ${@0}$ を代入しました。公式 $\\pi r^2$ では半径は $r={@1}$ です。",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "2 つ目の積：${@0}\\cdot {@1}$ はいくつですか？",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "長さをそのまま引いてしまいました。三平方の定理は 2 乗について成り立ちます：$b^2=c^2-a^2$。",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "指数をたしてしまいました。累乗の累乗では指数をかけます。",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "指数をかけてしまいました。底が同じ累乗どうしのかけ算では指数をたします。",
  "Graf funkcie s dotyčnicou": "関数のグラフと接線",
  "Graf kvadratickej funkcie": "2 次関数のグラフ",
  "Horná hranica b": "上端 b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "積が $q$、和が $-p$ になる 2 つの数を探しましょう。",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "この恒等式は 2 乗について成り立ちます：$\\cos^2\\alpha = 1 - \\sin^2\\alpha$ であって、$\\cos\\alpha = 1 - \\sin\\alpha$ ではありません。",
  "Jednotková kružnica": "単位円",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "係数 {@0} を引いてしまいました。$x$ にはかけ算がついているので、両辺を {@1} でわりましょう。",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "解が 2 倍の大きさになりました。公式 $x=\\frac{-p\\pm\\sqrt{D}}{2}$ では 2 でわるのを忘れないようにしましょう。",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "{@0} の $1\\,\\%$ はいくつですか？",
  "Koľko je $F({@0}) - F({@1})$?": "$F({@0}) - F({@1})$ はいくつですか？",
  "Koľko je $F({@0})$?": "$F({@0})$ はいくつですか？",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "$\\cos\\alpha$（鋭角なので正の平方根）を小数第 3 位まで求めるといくつですか？",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "$\\cos^2\\alpha = 1 - \\sin^2\\alpha$ はいくつですか？分数で入力しましょう。",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "$\\pi\\cdot {@0}$ はいくつですか？（$\\pi\\approx 3{{@1}}14$ を使いましょう）",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "$\\sin^2\\alpha$ はいくつですか？分数で入力しましょう（例：9/25）。",
  "Koľko je $a^2 = {@0}^2$?": "$a^2 = {@0}^2$ はいくつですか？",
  "Koľko je $b = \\sqrt{{@0}}$?": "$b = \\sqrt{{@0}}$ はいくつですか？",
  "Koľko je $b^2 = {@0} - {@1}$?": "$b^2 = {@0} - {@1}$ はいくつですか？",
  "Koľko je $b^2 = {@0}^2$?": "$b^2 = {@0}^2$ はいくつですか？",
  "Koľko je $c = \\sqrt{{@0}}$?": "$c = \\sqrt{{@0}}$ はいくつですか？",
  "Koľko je $c^2 = {@0} + {@1}$?": "$c^2 = {@0} + {@1}$ はいくつですか？",
  "Koľko je $c^2 = {@0}^2$?": "$c^2 = {@0}^2$ はいくつですか？",
  "Koľko je $f'({@0})$?": "$f'({@0})$ はいくつですか？",
  "Koľko je $r^2 = {@0}^2$?": "$r^2 = {@0}^2$ はいくつですか？",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "$z\\cdot v = {@0}\\cdot {@1}$ はいくつですか？",
  "Koľko je ${@0} + {@1} - {@2}$?": "${@0} + {@1} - {@2}$ はいくつですか？",
  "Koľko je ${@0} - ({@1})$?": "${@0} - ({@1})$ はいくつですか？",
  "Koľko je ${@0} : {@1}$?": "${@0} : {@1}$ はいくつですか？",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "${@1}$ の ${@0}\\,\\%$ はいくつですか？",
  "Koľko je ${@0}\\cdot {@1}$?": "${@0}\\cdot {@1}$ はいくつですか？",
  "Koľko je ${@0}^{{@1}}$?": "${@0}^{{@1}}$ はいくつですか？",
  "Koľko je $|A| + |B|$?": "$|A| + |B|$ はいくつですか？",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "では、{@1} の ${@0}\\,\\%$ はいくつですか？",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "円の半径は $r={@0}$ です。その面積 $S$ を求めましょう（$\\pi\\approx 3{{@1}}14$ を使いましょう）。",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "和が {@0}、積が {@1} になる 2 つの数は何ですか？セミコロンで区切って入力しましょう。",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "行列は同じ位置の成分どうしをかけるのではありません。行列 $A$ の行と行列 $B$ の列をかけて、その積をたしましょう。",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "分母は共通にしましたが、分子を倍分していません。分子にも分母と同じ数をかけましょう。",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "集合 $A$ の要素は ${@0}$ 個、集合 $B$ の要素は ${@1}$ 個、その共通部分の要素は ${@2}$ 個です。$A\\cup B$ の要素は何個ですか？",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "まずかけ算とわり算：${@0}\\cdot {@1} = {@2}$、${@3} : {@4} = {@5}$。次に ${@6} + {@7} - {@8} = {@9}$。",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "まず両辺から定数を引き、次に $x$ の係数でわりましょう。",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "先にかけ算とわり算を計算し、そのあとでたし算とひき算をしましょう。",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "列の成分どうしをかけてしまいました。対角線にそってかけましょう：$a\\cdot d$ と $b\\cdot c$。",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "長方形の辺は $a={@0}$ と $b={@1}$ です。面積 $S$ はいくつですか？",
  "Obdĺžnik, trojuholník a kruh": "長方形、三角形、円",
  "Obsah kruhu je $\\pi r^2$.": "円の面積は $\\pi r^2$ です。",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "長方形の面積は、となり合う 2 辺の長さの積です。",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "三角形の面積は、底辺と高さの積の半分です。",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "直角をはさむ辺をそのままたしてしまいました。三平方の定理は 2 乗について成り立ちます：$c^2=a^2+b^2$。",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "鋭角 $\\alpha$ は $\\sin\\alpha=\\frac{{@0}}{{@1}}$ を満たします。$\\cos\\alpha$ を求めましょう（小数第 3 位まで）。",
  "Plocha pod grafom funkcie": "グラフの下の面積",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "$(x^n)'=n\\,x^{n-1}$ を使って、各項を別々に微分しましょう。",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ を使い、そのあとニュートン・ライプニッツの公式を使いましょう。",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "三平方の定理 $c^2=a^2+b^2$ を使いましょう。",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "恒等式 $\\sin^2\\alpha+\\cos^2\\alpha=1$ を使いましょう。",
  "Pozri si tabuľku hodnôt v teórii.": "理論にある値の表を見てみましょう。",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "左から右へ計算してしまいました。かけ算とわり算は、たし算とひき算より先に計算します。",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "直角三角形の直角をはさむ辺は $a={@0}$ と $b={@1}$ です。斜辺 $c$ の長さはいくつですか？",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "直角三角形の斜辺は $c={@0}$、直角をはさむ辺の 1 つは $a={@1}$ です。もう 1 つの辺 $b$ の長さはいくつですか？",
  "Pravouhlý trojuholník s popisom strán": "辺の名前をつけた直角三角形",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "$2\\times 2$ 行列では $\\det=ad-bc$ です。",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "関数 $f(x)={@0}x^{{@1}}{@2}$ について、$f'({@3})$ を求めましょう。",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "定数を右辺に移項しましょう。${@0}x$ はいくつですか？",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "底が同じ累乗どうしのかけ算では、指数をたします。",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "{@0} を反対側に移項するとき、符号を変えていません。両辺に同じ逆の操作をしましょう。",
  "Pri umocňovaní mocniny sa exponenty násobia.": "累乗の累乗では、指数をかけます。",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "原始関数は $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$ なので、$F({@3})-F({@4})={@5}$ です。",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "原始関数は $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$ です。$F({@3})$ はいくつですか？",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "共通部分の要素は 2 回数えられるので、それを引きましょう。",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "共通部分の要素を 2 回引いてしまいました。それらも和集合に含まれます。引くのは 1 回だけにしましょう。",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "共通部分の要素を 2 回数えてしまいました。それらは $A$ にも $B$ にも入っています。1 回引きましょう。",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "共通部分の要素は、この和の中で 2 回数えられています。${@0} - {@1}$ はいくつですか？",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "1 つ目の積：${@0}\\cdot {@1}$ はいくつですか？",
  "Pytagorova veta: štvorce nad stranami": "三平方の定理：辺の上の正方形",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "2 つ目の分数を分母 {@0} に倍分しましょう。分子はいくつになりますか？",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "1 つ目の分数を分母 {@0} に倍分しましょう。分子はいくつになりますか？",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "共通の分母は ${@0}$ です：$\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}。",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "辺をたしてしまいました。長方形の面積は辺をかけて求めます。",
  "Súčet: koľko je ${@0} + {@1}$?": "和：${@0} + {@1}$ はいくつですか？",
  "Súčin matíc: riadok krát stĺpec": "行列の積：行 × 列",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "主対角線上の積：$({@0})\\cdot({@1})$ はいくつですか？",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "もう一方の対角線上の積：$({@0})\\cdot({@1})$ はいくつですか？",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "積をたしてしまいました。行列式は差です：主対角線上の積から、もう一方の対角線上の積を引きます。",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "分子をたして、答えを分数 $p/q$ の形で書きましょう。",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "分子どうし、分母どうしをたしてしまいました。分数は共通の分母にそろえてからたします。分母はたしません。",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "それは $\\cos^2\\alpha$ です。最後に平方根をとりましょう。",
  "To je $b^2$. Na konci ešte odmocni.": "それは $b^2$ です。最後に平方根をとりましょう。",
  "To je $c^2$. Na konci ešte odmocni.": "それは $c^2$ です。最後に平方根をとりましょう。",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "それは角 ${@1}^\\circ$ の{@0}の値です。角が大きくなるとサインは 0 から 1 まで増え、コサインは 1 から 0 まで減ります。",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "それは周の長さ（すべての辺の和）です。面積はとなり合う 2 辺の積です。",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "それは円周の長さ $2\\pi r$ です。面積は $\\pi r^2$ です。",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "それは 100 % までの残りです。聞いているのは {@1} の ${@0}\\,\\%$ そのものです。",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "三角形は長方形の半分です。${@0} : 2$ はいくつですか？",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "三角形の底辺は $z={@0}$、高さは $v={@1}$ です。面積 $S$ はいくつですか？",
  "Uhol α (°)": "角 α (°)",
  "Vennov diagram dvoch množín": "2 つの集合のベン図",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "行列 $A$ の第 $i$ 行と行列 $B$ の第 $j$ 列をとり、成分ごとにかけましょう。",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "解と係数の関係：$x_1+x_2={@0}$、$x_1\\cdot x_2={@1}$。解は $x_1={@2}$ と $x_2={@3}$ です。",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "両辺を {@0} でわりましょう。$x$ はいくつですか？",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "$({@0}^{{@1}})^{{@2}}$ を計算しましょう。",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "$\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$ を計算しましょう。",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "${@0}\\,{@1}^\\circ$ を小数で求めましょう（小数第 3 位まで）。",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "${@0}^{{@1}}\\cdot {@2}^{{@3}}$ を計算しましょう。",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "行列式 $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$ を計算しましょう。",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "方程式 $x^2{@0}{@1} = 0$ を解きましょう。2 つの解をセミコロンで区切って入力しましょう（例：2; 3）。",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "方程式 ${@0}x{@1} = {@2}$ を解きましょう。",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "三平方の定理から $b^2=c^2-a^2$ を導きましょう。",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "行列 $B$ から行をとってしまいました。積の成分は、行列 $A$ の第 {@0} 行 × 行列 $B$ の第 {@1} 列です。",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "2 でわるのを忘れました。三角形は辺が $z$ と $v$ の長方形の半分です。",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "{@0} でわるのを忘れました：$\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$。",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "指数 {@0} を $x$ の前に出すのを忘れました：$(x^{{@1}})'={@2}x^{{@3}}$。",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "わり算を忘れました。引くのは {@0} ではなく、${@1} : {@2}$ の答えです。",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "半径を 2 乗するのを忘れました：面積は $\\pi\\cdot r\\cdot r$ です。",
  "Zlomky ako pruhy": "帯で表した分数",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "分数を共通の分母にそろえましょう：$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$。",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "底をかけてしまいました。底 {@0} はそのままで、指数だけをたします。",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">面積 = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "解 x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "コサイン",
  "kruh": "円",
  "napr. 5/6": "例：5/6",
  "nemá reálne korene (D &lt; 0)": "実数解はありません (D &lt; 0)",
  "obdĺžnik": "長方形",
  "odvesna": "直角をはさむ辺",
  "prepona": "斜辺",
  "prirodzené čísla ℕ": "自然数 ℕ",
  "priľahlá odvesna": "隣辺",
  "protiľahlá": "対辺",
  "sínusu": "サイン",
  "trojuholník": "三角形",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span>（接線の傾き）",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "負の整数",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "項 ${@0}x$ を微分していません。その導関数は {@1} です。",
  "Číselná os": "数直線",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "数をパーセントの数でわってしまいました。${@0}\\,\\%$ は 100 分の {@1} という意味なので、まず 1 % を求め（100 でわる）、次に {@2} をかけましょう。",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "100 個に分けた正方形のうち 25 個に色が塗られています",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
