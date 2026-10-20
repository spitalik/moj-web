/* 日本語: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/r8/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "r8-cisla": {
   "title": "整数と有理数",
   "summary": "負の数、反対の数、絶対値、符号のついた分数の計算。",
   "theory": [
    "<p><strong>自然数</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ は、ものを数えるときに使います。これに 0 と\n       その反対の数（$-1, -2, -3, \\dots$）を加えると<strong>整数</strong> $\\mathbb{Z}$ になります。<strong>有理数</strong> $\\mathbb{Q}$\n       は、分数 $\\frac{p}{q}$（$p$ は整数、$q$ は自然数）の形に書けるすべての数です。たとえば $\\frac{3}{4}$、\n       $-2.5 = -\\frac{5}{2}$、$7 = \\frac{7}{1}$。</p>",
    {
     "fig": "r8-obory",
     "caption": "自然数はどれも整数であり、整数はどれも有理数です：$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$。"
    },
    "<p>数 $a$ の<strong>反対の数</strong>は $-a$ です：$5$ の反対の数は $-5$、$-3$ の反対の数は $3$ です。<strong>絶対値</strong> $|a|$\n       は数直線上での 0 からの距離なので、負になることはありません：$|-7| = 7$、$|7| = 7$。</p>",
    "<p><strong>符号のある計算：</strong>ある数をひくことは、その反対の数をたすことです：$4 - (-6) = 4 + 6 = 10$。\n       かけ算とわり算では、同じ符号どうしなら答えは正、ちがう符号どうしなら負になります：$(-3)\\cdot(-4) = 12$、$(-20) : 5 = -4$。</p>"
   ],
   "examples": [
    {
     "task": "$-8 - (-5) + 2\\cdot(-3)$ を計算しなさい。",
     "steps": [
      "まずかけ算：$2\\cdot(-3) = -6$（符号がちがうので答えは負）。",
      "負の数をひくことは、たし算になおします：$-8 - (-5) = -8 + 5 = -3$。",
      "最後に $-3 + (-6) = -9$。",
      "<strong>答え：$-9$</strong>"
     ]
    },
    {
     "task": "$-\\frac{3}{4}$ と $-0.7$ の大小を比べなさい。",
     "steps": [
      "分数を小数になおします：$-\\frac{3}{4} = -0.75$。",
      "$-0.75$ は負の側で 0 からより遠いので、数直線上でより左にあります。",
      "<strong>$-\\frac{3}{4} &lt; -0.7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "累乗と平方根",
   "summary": "2 乗と 3 乗、平方根、平方根の見積もり、大きな数の表し方。",
   "theory": [
    "<p><strong>累乗</strong> $a^n$ は、同じ数 $n$ こをかけた積を短く書いたものです：$a^n = a\\cdot a\\cdot\\ldots\\cdot a$。\n       $a$ を<em>底</em>、$n$ を<em>指数</em>といいます。たとえば $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$。</p>",
    {
     "fig": "r8-mocniny",
     "caption": "2 乗は正方形の面積です：1 辺 3 の正方形には $3^2 = 9$ この小さな正方形があります。3 乗は立方体の体積です：1 辺 2 の立方体は $2^3 = 8$ この小さな立方体でできています。"
    },
    "<p><strong>符号に注意：</strong>$(-3)^2 = (-3)\\cdot(-3) = 9$ ですが、$-3^2 = -(3\\cdot 3) = -9$ です。\n       負の数の偶数乗は正、奇数乗は負になります：$(-2)^3 = -8$。</p>",
    "<p>0 以上の数 $a$ の<strong>平方根</strong>（正の平方根）とは、$b^2 = a$ となる 0 以上の数 $b$ のことです。$\\sqrt{a} = b$ と書きます。\n       たとえば $\\sqrt{49} = 7$、$\\sqrt{0.09} = 0.3$。大きな数は $1 \\le a &lt; 10$ として $a\\cdot 10^n$ の形で書きます：\n       $45\\,000 = 4.5\\cdot 10^4$。</p>"
   ],
   "examples": [
    {
     "task": "$(-2)^3 + 3^2 - \\sqrt{64}$ を計算しなさい。",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$。",
      "$3^2 = 9$、$8^2 = 64$ だから $\\sqrt{64} = 8$。",
      "$-8 + 9 - 8 = -7$。",
      "<strong>答え：$-7$</strong>"
     ]
    },
    {
     "task": "$\\sqrt{50}$ は、となり合うどの 2 つの自然数の間にありますか。",
     "steps": [
      "50 に近い 2 乗の数をさがします：$7^2 = 49$、$8^2 = 64$。",
      "$49 &lt; 50 &lt; 64$ なので、$7 &lt; \\sqrt{50} &lt; 8$ です。",
      "<strong>$\\sqrt{50}$ は 7 と 8 の間にあります</strong>（7 にとても近い）。"
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "文字を使った式",
   "summary": "文字とは何か、式への代入、言葉で表されたことを式で表す。",
   "theory": [
    "<p><strong>文字</strong>（たとえば $x$、$a$、$n$）は、いろいろな数の代わりに使います。<strong>文字を使った式</strong>は、\n       数と文字を計算の記号で結んだもので、たとえば $3x + 5$ や $2(a - 1)$ です。数と文字の間のかけ算の記号は\n       省きます：$3x$ は $3\\cdot x$ を意味します。</p>",
    "<p><strong>式の値</strong>は、文字に数を代入して求めます。負の数はかっこをつけて代入します：\n       $x = -2$ のとき $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$。</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "辺が $a$ と $a + 3$ の長方形のまわりの長さは $o = 2a + 2(a + 3)$、面積は $S = a(a + 3)$ です。$a = 4$ のとき $o = 22$、$S = 28$。"
    },
    "<p><strong>言葉を式に：</strong>「$x$ の 2 倍」は $2x$、「$x$ より 5 大きい数」は $x + 5$、「$x$ の 3 分の 1」は $\\frac{x}{3}$、\n       「$a$ と $b$ の和の 2 乗」は $(a + b)^2$ です。</p>"
   ],
   "examples": [
    {
     "task": "$x = -3$ のときの式 $2x^2 - 5x + 1$ の値を求めなさい。",
     "steps": [
      "$-3$ をかっこをつけて代入します：$2\\cdot(-3)^2 - 5\\cdot(-3) + 1$。",
      "$(-3)^2 = 9$ なので $2\\cdot 9 = 18$；また $-5\\cdot(-3) = 15$。",
      "$18 + 15 + 1 = 34$。",
      "<strong>式の値は 34 です。</strong>"
     ]
    },
    {
     "task": "「$n$ の 3 倍より 4 小さい数」を式で表しなさい。",
     "steps": [
      "$n$ の 3 倍は $3n$ です。",
      "「4 小さい」は 4 をひくことです。",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "文字式の計算",
   "summary": "同類項、かっこのはずし方（展開）、2 項式の 2 乗の公式。",
   "theory": [
    "<p><strong>同類項</strong>は、同じ文字を同じ指数でふくむ項です。たとえば $3x$ と $-5x$、$2x^2$ と $x^2$。\n       同類項は係数をたしてまとめます：$3x - 5x + 2 = -2x + 2$。同類項でない項（たとえば $x^2$ と $x$）はまとめられません。</p>",
    "<p><strong>かっこをはずす：</strong>かっこの前の数を、かっこの中のすべての項にかけます：$3(2x - 4) = 6x - 12$。\n       かっこの前のマイナスは、すべての項の符号を変えます：$-(x - 5) = -x + 5$。2 つの 2 項式は「すべての項どうし」をかけます：\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$。</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "1 辺 $a + b$ の正方形は、正方形 $a^2$、正方形 $b^2$、長方形 $ab$ 2 つでできています。だから $(a + b)^2 = a^2 + 2ab + b^2$。"
    },
    "<p>覚えておくと便利な<strong>乗法公式</strong>：$(a + b)^2 = a^2 + 2ab + b^2$、$(a - b)^2 = a^2 - 2ab + b^2$、\n       $(a + b)(a - b) = a^2 - b^2$。</p>"
   ],
   "examples": [
    {
     "task": "式 $4(x - 3) - 2(x - 5)$ を簡単にしなさい。",
     "steps": [
      "かっこをはずします：$4x - 12 - 2x + 10$（2 つめのかっこの前のマイナスで $-5$ が $+10$ になります）。",
      "同類項をまとめます：$4x - 2x = 2x$、$-12 + 10 = -2$。",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "$(x - 4)^2$ を展開しなさい。",
     "steps": [
      "公式 $(a - b)^2 = a^2 - 2ab + b^2$ を、$a = x$、$b = 4$ として使います。",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$。",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "一次方程式",
   "summary": "等式の性質を使った変形、かっこのある方程式、検算。",
   "theory": [
    "<p><strong>方程式</strong>は、わからない数をふくむ 2 つの式が等しいことを表したもので、たとえば $2x + 3 = 9$ です。<strong>方程式を解く</strong>\n       とは、代入すると等式が成り立つ数（解）を求めることです。この方程式の解は $x = 3$ です。$2\\cdot 3 + 3 = 9$ だからです。</p>",
    {
     "fig": "r8-vahy",
     "caption": "方程式はつり合った天びんのようなものです：左には重さ $x$ のふくろ 2 つとおもり 3 こ、右にはおもり 9 こ。両方の皿からおもりを 3 こずつ取っても天びんはつり合ったままです：$2x = 6$、よって $x = 3$。"
    },
    "<p><strong>等式の性質</strong>を使った変形は、方程式の解を変えません：両辺に同じ数や式をたしたり（ひいたり）、\n       両辺に 0 でない同じ数をかけたり、両辺を 0 でない同じ数でわったりできます。目標は、わからない数を一方の辺に 1 つだけにすることです。</p>",
    "<p><strong>手順：</strong>1. かっこをはずす、2. わからない数をふくむ項を一方の辺に、数をもう一方の辺に移す、\n       3. 両辺をわからない数の係数でわる、4. もとの方程式に代入して<strong>検算</strong>する。</p>"
   ],
   "examples": [
    {
     "task": "方程式 $5x - 7 = 2x + 8$ を解きなさい。",
     "steps": [
      "両辺から $2x$ をひきます：$3x - 7 = 8$。",
      "両辺に 7 をたします：$3x = 15$。",
      "両辺を 3 でわります：$x = 5$。",
      "検算：左辺 $5\\cdot 5 - 7 = 18$、右辺 $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "方程式 $3(x + 2) = x - 4$ を解きなさい。",
     "steps": [
      "かっこをはずします：$3x + 6 = x - 4$。",
      "$x$ をひき、次に 6 をひきます：$2x = -10$。",
      "2 でわります：$x = -5$。",
      "検算：$3\\cdot(-5 + 2) = -9$、$-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "方程式を使った文章題",
   "summary": "文章から方程式をつくる：数、年齢、まわりの長さ、お金の分け方。",
   "theory": [
    "<p>文章題は、次の 5 つの段階で方程式を使って解きます：</p>\n       <ol><li>わからない量を文字（たとえば $x$）で表し、それが何を意味するかを書く。</li>\n       <li>ほかの量を $x$ を使って表す。</li><li>問題の中で等しいものに注目して方程式をつくる。</li>\n       <li>方程式を解く。</li><li><em>問題文にもどって</em>検算し、答えを書く。</li></ol>",
    "<p>便利な表し方：「5 多い」は $x + 5$、「3 倍」は $3x$、「連続する 3 つの数」は $x$、$x + 1$、$x + 2$、\n       「長方形のまわりの長さ」は $2a + 2b$。</p>",
    "<p>検算は、自分のつくった方程式に代入するのではなく、問題文にもとづいて行います。方程式をまちがえてつくっていたら、方程式での検算ではまちがいに気づけないからです。</p>"
   ],
   "examples": [
    {
     "task": "連続する 3 つの自然数の和は 48 です。その 3 つの数を求めなさい。",
     "steps": [
      "いちばん小さい数を $x$ とすると、ほかの数は $x + 1$ と $x + 2$ です。",
      "方程式：$x + (x + 1) + (x + 2) = 48$、つまり $3x + 3 = 48$。",
      "$3x = 45$、$x = 15$。",
      "検算：$15 + 16 + 17 = 48$ ✓",
      "<strong>答え：15、16、17 です。</strong>"
     ]
    },
    {
     "task": "母は娘より 26 才年上です。2 人の年齢の和は 50 才です。娘は何才ですか。",
     "steps": [
      "娘の年齢を $x$ とすると、母の年齢は $x + 26$ です。",
      "方程式：$x + (x + 26) = 50$、つまり $2x + 26 = 50$。",
      "$2x = 24$、$x = 12$。",
      "検算：母は $12 + 26 = 38$ 才で、$12 + 38 = 50$ ✓",
      "<strong>答え：娘は 12 才です。</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "円と円周",
   "summary": "半径と直径、円周の長さ、円の面積、おうぎ形と円環。",
   "theory": [
    "<p>中心 $S$、半径 $r$ の<strong>円周</strong> $k$ は、平面上で点 $S$ からの距離が $r$ であるすべての点の集まりで、\n       「線」だけです。<strong>円</strong>は、円周とその内側の面全体をあわせたものです。<strong>直径</strong>は中心を通って\n       円周上の 2 点を結ぶ線分で、その長さは $d = 2r$ です。</p>",
    {
     "fig": "r8-kruh",
     "caption": "中心 $S$、半径 $r$、直径 $d = 2r$、中心角 $\\alpha$ のおうぎ形。"
    },
    "<p><strong>円周の長さ</strong>は $o = 2\\pi r = \\pi d$、<strong>円の面積</strong>は $S = \\pi r^2$ です。\n       $\\pi$ は、どんな円でも円周の長さと直径の比で、$\\pi \\approx 3.14$ です。</p>",
    "<p>中心角 $\\alpha$ の<strong>おうぎ形</strong>は、2 本の半径で区切られた円の一部で、その面積は $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$ です。\n       <strong>円環</strong>は、半径 $R &gt; r$ の 2 つの同心円の間の部分で、面積は $S = \\pi (R^2 - r^2)$ です。</p>"
   ],
   "examples": [
    {
     "task": "自転車の車輪の直径は $70\\,\\text{cm}$ です。1 回転で進む道のりはいくらですか。$\\pi \\approx 3.14$ を使いなさい。",
     "steps": [
      "1 回転で、車輪は円周の長さだけ進みます：$o = \\pi d$。",
      "$o \\approx 3.14\\cdot 70 = 219.8\\,\\text{cm}$。",
      "<strong>車輪は約 $219.8\\,\\text{cm}$、つまりおよそ $2.2\\,\\text{m}$ 進みます。</strong>"
     ]
    },
    {
     "task": "半径 $10\\,\\text{cm}$ の円の 4 分の 1 の面積を求めなさい（$\\pi \\approx 3.14$）。",
     "steps": [
      "円の 4 分の 1 は中心角 $90^\\circ$ のおうぎ形で、円の $\\frac{90}{360} = \\frac{1}{4}$ です。",
      "円全体の面積：$S = \\pi r^2 \\approx 3.14\\cdot 100 = 314\\,\\text{cm}^2$。",
      "<strong>4 分の 1：$314 : 4 = 78.5\\,\\text{cm}^2$。</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "角柱の表面積と体積",
   "summary": "角柱の底面と側面、直方体の展開図、直方体・立方体・三角柱の表面積と体積。",
   "theory": [
    "<p><strong>角柱</strong>は、合同で平行な 2 つの<strong>底面</strong>（多角形）と、長方形の面でできた<strong>側面</strong>\n       をもつ立体です。底面の形によって、三角柱、四角柱、六角柱…といいます。\n       直方体と立方体は四角柱です。</p>",
    {
     "fig": "r8-siet",
     "caption": "たて・横・高さが $a$、$b$、$c$ の直方体の展開図：$a\\times b$ の 2 つの底面（青）と側面の 4 つの面（緑）。"
    },
    "<p>角柱の<strong>体積</strong>：$V = S_p\\cdot v$（底面積 × 高さ）。直方体は $V = a\\cdot b\\cdot c$、立方体は $V = a^3$ です。\n       体積は立方の単位ではかります。$1\\,\\text{dm}^3 = 1\\,\\text{l}$、$1\\,\\text{cm}^3 = 1\\,\\text{ml}$ です。</p>",
    "<p><strong>表面積</strong>はすべての面の面積の和です：$S = 2\\cdot S_p + S_{pl}$。ここで側面積は $S_{pl} = o_p\\cdot v$\n       （底面のまわりの長さ × 高さ）です。直方体は $S = 2(ab + bc + ac)$、立方体は $S = 6a^2$ です。</p>"
   ],
   "examples": [
    {
     "task": "直方体の辺の長さは $a = 5\\,\\text{cm}$、$b = 3\\,\\text{cm}$、$c = 4\\,\\text{cm}$ です。表面積と体積を求めなさい。",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$。",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$。"
     ]
    },
    {
     "task": "三角柱の底面は、直角をはさむ辺が $3\\,\\text{cm}$ と $4\\,\\text{cm}$（斜辺は $5\\,\\text{cm}$）の直角三角形で、高さは $10\\,\\text{cm}$ です。表面積と体積を求めなさい。",
     "steps": [
      "底面積：$S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$。",
      "体積：$V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$。",
      "側面積：$S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$。",
      "表面積：$S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$。"
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "グラフ、表、統計",
   "summary": "棒グラフと円グラフ、平均値、最頻値、中央値。",
   "theory": [
    "<p>データは<strong>表</strong>にまとめ、<strong>グラフ</strong>で表します。棒グラフは数の比較に向いていて、\n       円グラフはそれぞれのグループが全体のどれだけの割合をしめるかを示します。</p>",
    {
     "fig": "r8-stlpce",
     "caption": "棒グラフ：23 人のクラスのテストの評価（1 が最もよく、5 が最も低い）。いちばん多かったのは評価 2 です。"
    },
    {
     "fig": "r8-kolac",
     "caption": "円グラフ：生徒の通学方法。半分は徒歩、30 % はバス、20 % は自転車です。"
    },
    "<p><strong>平均値</strong>は、すべての値の合計を値の個数でわったものです。<strong>最頻値</strong>は、いちばん多く現れる値です。\n       <strong>中央値</strong>は、データを大きさの順にならべたときのまん中の値です。データの個数が偶数のときは、\n       まん中の 2 つの値の平均です。</p>"
   ],
   "examples": [
    {
     "task": "5 日間の気温は $12$、$15$、$9$、$15$、$14\\,{}^\\circ\\text{C}$ でした。平均値、最頻値、中央値を求めなさい。",
     "steps": [
      "平均値：$\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$。",
      "最頻値：いちばん多く現れるのは $15\\,{}^\\circ\\text{C}$。",
      "中央値：$9, 12, 14, 15, 15$ とならべると、まん中の値は $14\\,{}^\\circ\\text{C}$。"
     ]
    },
    {
     "task": "評価のグラフから、クラスの評価の平均を求めなさい。",
     "steps": [
      "すべての評価の合計：$1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$。",
      "生徒の人数：$5 + 8 + 6 + 3 + 1 = 23$。",
      "<strong>平均：$56 : 23 \\approx 2.43$。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$ なので、$p = {@6}$、$q = {@7}$ です。",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$。$V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$。側面積：$({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$、表面積 $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$。",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$。両辺に {@4} をかけます：$x = {@5}$。",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$、$\\sqrt{{@2}} = {@3}$ なので、${@4} - {@5} = {@6}$ です。",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "${@2}^2 = {@3}$ なので、$\\sqrt{{@0}} = {@1}$ です。",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$ は $3\\cdot a$ ではなく、$a\\cdot a\\cdot a$ という意味です。",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ で、符号は{@3}：${@4} : {@5} = {@6}$。",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ で、符号は{@3}：${@4}\\cdot {@5} = {@6}$。",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$、${@2}^2 = {@3}$ です。${@4} &lt; {@5} &lt; {@6}$ なので、${@7} &lt; \\sqrt{{@8}} &lt; {@9}$ です。",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$、$|{@2}| = {@3}$ なので、${@4} - {@5} = {@6}$ です。",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": "、$x + 2$、$x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "絶対値は 0 からのきょりなので、負になることはありません。",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "方程式に {@0} をかけるなら、両辺のすべての項にかけましょう。数 ${@1}$ にもかけます。先に分数の項だけを残すほうが簡単です。",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "直方体の形の水そうの内のりは {@0} cm、{@1} cm、{@2} cm です。水は何 L 入りますか。",
  "Aká dlhá je dlhšia strana (v cm)?": "長いほうの辺は何 cm ですか。",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "$a = {@1}$ のとき、もう 1 つの辺 $a + {@0}$ は何 cm ですか。",
  "Aká dlhá je kratšia strana (v cm)?": "短いほうの辺は何 cm ですか。",
  "Aké je najväčšie z čísel?": "いちばん大きい数はいくつですか。",
  "Aké je {@0}. číslo v poradí?": "{@0} 番目の数はいくつですか。",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "$a$ はいくつですか。小数点の前には 0 でない数字が 1 つだけあるようにします。",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "${@0}^\\circ$ の角は、1 回転の角のどれだけですか。分数で入力しましょう。",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "分数 ${@0}$ と ${@1}$ の最小公分母はいくつですか。",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "角柱の体積 $V = S_p\\cdot v$ は何 cm³ ですか。",
  "Aký je objem kvádra (v cm³)?": "直方体の体積は何 cm³ ですか。",
  "Aký je obsah celého kruhu (v cm²)?": "円全体の面積は何 cm² ですか。",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "側面積（底面のまわりの長さ × 高さ）は何 cm² ですか。",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "底面積 $S_p$ は何 cm² ですか。",
  "Aký je polomer kruhu (v cm)?": "円の半径は何 cm ですか。",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "角柱の表面積（2 つの底面と側面）は何 cm² ですか。",
  "Aký je súčet všetkých čísel?": "すべての数の和はいくつですか。",
  "Aký obsah má jedna stena kocky (v cm²)?": "立方体の 1 つの面の面積は何 cm² ですか。",
  "Babka": "おばあさん",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "かっこがないので、2 乗するのは数 {@0} だけで、マイナスは答えの前に残ります：$-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$。",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "$x$ の項がたりません。1 つ目のかっこのすべての項に 2 つ目のかっこのすべての項をかけます。最初どうし、最後どうしだけではありません。",
  "Dcéra": "むすめ",
  "Dedko": "おじいさん",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "$\\pi$ でわっただけです。それでは直径になります。半径はその半分です。",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "小数点の前に 0 でない数字が 1 つだけ残るように、小数点を左へ {@0} {@1}動かします：${@2} = {@3}\\cdot 10^{{@4}}$。",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "グラフは、図書館で各曜日に借りられた本の数を表しています。",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "長いほうの辺は ${@0} + {@1} = {@2}\\,\\text{cm}$ です。",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "公式 $S = \\pi r^2$ に直径を入れてしまいました。まず半径（直径の半分）を求めましょう。",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "項 ${@1}$ に $x = {@0}$ を代入しましょう。${@2}$ はいくつですか。",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "2 つの文字に同時に代入しましょう。負の数はかっこに入れます。",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "$x^2$ は $2\\cdot x$ ではなく、$x\\cdot x$ という意味です。",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "2 乗を正方形として、3 乗を立方体として表す",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "2 乗は同じ数を 2 つかけた積です。マイナス × マイナスはプラスです。",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "2 乗は 2 倍ではありません。2 乗するとは、その数自身をかけることです。",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "2 乗は 2 倍ではありません。2 乗するとは、その数自身をかけることです。",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "もう 1 つの辺は式 $a + {@0}$ 全体なので、かっこに入れます：$a\\cdot(a + {@1})$ をかけます。",
  "Dvojnásobok": "2 倍",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "指数は数のけた数ではなく、小数点を動かすけた数です。",
  "Filip": "ふみやさん",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "角柱には底面が 2 つ（上と下）あり、両方を表面積に入れます。",
  "Hľadaj najvyšší stĺpec.": "いちばん高いぼうをさがしましょう。",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "2 乗すると根号の中の数になる、負でない数をさがしましょう。",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "3 回かけあわせると体積になる数をさがしましょう。",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "3 乗すると {@0} になる数をさがします：${@1}^3 = {@2}$ なので、$a = {@3}\\,\\text{cm}$ です。",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "1 つの面の面積は ${@0} : 6 = {@1}\\,\\text{cm}^2$ なので、$a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$ です。",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "長方形の 1 つの辺は、もう 1 つの辺より {@0} cm 長いです。長方形のまわりの長さは {@1} cm です。{@2}辺の長さは何 cm ですか。",
  "K obom stranám pripočítame {@0}": "両辺に {@0} をたします",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "直方体には同じ面が 2 つずつあります。直方体の表面積は何 cm² ですか。",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "1 つ目のかっこのすべての項に 2 つ目のかっこのすべての項をかけましょう。そのあと $x$ の項をまとめます。",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "数を方程式の反対側に移すときは、符号を変えましょう。",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "数を方程式の反対側に移すときは、符号を変えましょう。両辺に同じ操作をします。",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "立方体には面が 6 つあり、どれも 1 辺 $a$ の正方形です。",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "立方体の面は 4 つではなく 6 つです。上と下の面を忘れないようにしましょう。",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "立方体には合同な正方形の面が 6 つあります：$S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$。",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "立方体の体積は ${@0}\\,\\text{cm}^3$ です。1 辺の長さは何 cm ですか。",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "立方体の表面積は ${@0}\\,\\text{cm}^2$ です。1 辺の長さは何 cm ですか。",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "$x$ の係数 ${@0}$ は、ひき算ではなくわり算でとりのぞきます：${@1}x$ は ${@2}\\cdot x$ という意味です。",
  "Koľko je $R^2 - r^2$?": "$R^2 - r^2$ はいくつですか。",
  "Koľko je $\\sqrt{{@0}}$?": "$\\sqrt{{@0}}$ はいくつですか。",
  "Koľko je $r^2$?": "$r^2$ はいくつですか。",
  "Koľko je ${@0}$?": "${@0}$ はいくつですか。",
  "Koľko je ${@0}^2$?": "${@0}^2$ はいくつですか。",
  "Koľko je ${@0}{@1}$?": "${@0}{@1}$ はいくつですか。",
  "Koľko je $|{@0}|$?": "$|{@0}|$ はいくつですか。",
  "Koľko je v zátvorke: ${@0}{@1}$?": "かっこの中 ${@0}{@1}$ はいくつですか。",
  "Koľko je čísel?": "数はいくつありますか。",
  "Koľko kníh si požičali za celý týždeň?": "1 週間ぜんぶで、本は何さつ借りられましたか。",
  "Koľko rokov má {@0}?": "{@0}は何さいですか。",
  "Koľko žiakov hlasovalo spolu?": "投票した生徒はぜんぶで何人ですか。",
  "Koľko žiakov odpovedalo spolu?": "答えた生徒はぜんぶで何人ですか。",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "短いほうの辺を $x$、長いほうを $x + {@0}$ とします。方程式：$2x + 2(x + {@1}) = {@2}$ なので、$4x + {@3} = {@4}$、$4x = {@5}$、$x = {@6}$。{@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "短いほうの辺を $x$、長いほうを $x + {@0}$ とします。方程式 $2x + 2(x + {@1}) = {@2}$ から、$4x$ がいくつかを計算しましょう。",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "短いほうの辺は ${@0}\\,\\text{cm}$ です。",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "円の{@0}です。面積を cm² で求めましょう。{@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "円の{@0}です。円周の長さを cm で求めましょう。{@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "中心、半径、直径、おうぎ形をかいた円",
  "Kruhový diagram dopravy do školy": "通学方法の円グラフ",
  "Ktoré ovocie dostalo najviac hlasov?": "いちばん票が多かったくだものはどれですか。",
  "Ktorý výraz sa rovná ${@0}$?": "${@0}$ と等しい式はどれですか。",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "<em>{@0}</em> を表す式はどれですか。",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "生徒にいちばん人気のあるスポーツはどれですか。",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "直方体には同じ面が 2 つずつあります（上と下、前と後ろ、左と右）。和 $ab + bc + ac$ をさらに 2 倍しましょう。",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "直方体の大きさは $a = {@0}\\,\\text{cm}$、$b = {@1}\\,\\text{cm}$、$c = {@2}\\,\\text{cm}$ です。表面積（cm²）と体積（cm³）を求めましょう。セミコロンで区切って入力しましょう。",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "直方体には合同な面の組が 3 つあります：$ab$、$bc$、$ac$。体積は 3 つの長さの積です。",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "中央値は、小さいじゅんにならべてからさがします。まず数を小さいほうから大きいほうへならべましょう。",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "中央値はこの 2 つの数の平均です。いくつですか。",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "$\\sqrt{{@0}}$ は、連続するどの 2 つの自然数のあいだにありますか。小さいほうと大きいほうをセミコロンで区切って入力しましょう。",
  "Množiny prirodzených, celých a racionálnych čísel": "自然数、整数、有理数の集合",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "最頻値は、いちばん多く出てくる値です。",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "最頻値はいちばん大きい数ではなく、いちばん多く出てくる値です。",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "半分にするのは $x$ だけで、{@0} は半分からひきます。",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "数直線上に ${@0}$ と ${@1}$ があります。そのきょりはいくつですか。",
  "Najmenšie číslo je {@0}.": "いちばん小さい数は {@0} です。",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "いちばん小さい数を $x$ として、すべての数をたしましょう。方程式は ${@0}x + \\square = {@1}$ の形になります。□に入る数はいくつですか。",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "いちばん小さい数を $x$ とすると、つぎの数は $x + 1$、$x + 2$、… です。それらをたして、和と等しいとおきましょう。",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "まず分数の項だけを残し、そのあと両辺に分母をかけましょう。",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "まずかっこをはずし、そのあとふつうの方程式と同じように解きましょう。",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "まず累乗、つぎにかけ算、さいごにたし算です。負の数はかっこに入れます。",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "まず 2 つの数の絶対値（0 からのきょりで、負ではない）を求めてから、ひきましょう。",
  "Najprv vypočítaj každú odmocninu zvlášť.": "まずそれぞれの平方根を別々に計算しましょう。",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "まずかっこの中を計算して、それからかけましょう。",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "いちばん高いぼうの値は {@0} で、「{@1}」のものです。この値がデータの最頻値です。",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "いちばん大きい数は $x + {@0} = {@1}$ です。",
  "Natália": "なつみさん",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "根号の中の数をはさむ、自然数の 2 乗を 2 つさがしましょう。",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "かけるのは数 {@0} ではなく、$x$ です。",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "和全体にかけるので、かっこに入れる必要があります。かっこがないと $x$ にしかかかりません。",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "和全体にかけるので、数 {@0} だけでなく $x$ にもかけます。",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "かけるのは $x$ だけで、{@0} は {@1} からひきます。かっこがあると、差全体の{@2}という意味になります。",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "小数点を左へ何けた動かせばよいですか。それが指数 $n$ です。",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "長方形の辺の長さは $a$ cm と $a + {@0}$ cm です。$a = {@2}$ のとき、{@1}を求めましょう。",
  "Obdĺžnik so stranami a a a plus 3": "辺が a と a たす 3 の長方形",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "両辺を ${@0}$ でわりましょう。$x$ はいくつですか。",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "両辺に {@0} をかけましょう。$x$ はいくつですか。",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "2 つの数は 0 の同じ側にあるので、0 からのきょりはたすのではなく、ひきましょう。",
  "Objem kocky je $a^3$.": "立方体の体積は $a^3$ です。",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "体積は 3 でわるのではありません。3 回かけあわせると体積になる数をさがしましょう。",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "1 つの面の面積は $a$ ではなく $a^2$ です。面は正方形です。",
  "Obsah kruhu je $S = \\pi r^2$.": "円の面積は $S = \\pi r^2$ です。",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "ドーナツ形の面積は $\\pi(R - r)^2$ ではありません。大きい円の面積から小さい円の面積をひきましょう：$\\pi R^2 - \\pi r^2$。",
  "Obsah obdĺžnika je súčin jeho strán.": "長方形の面積は辺の積です。",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "直角三角形の面積は直角をはさむ 2 辺の積の半分です。2 でわるのを忘れないようにしましょう。",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "円の面積はたすのではなく、ひきます。真ん中の小さい円の部分はありません。",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "円周の長さは $2\\pi r$ です。2 を忘れたか、$\\pi d$ に直径ではなく半径を入れました。",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "円周の長さは $o = 2\\pi r = \\pi d$ です。",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "円周の長さは ${@0}\\,\\text{cm}$ です。半径は何 cm ですか。{@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "まわりの長さは 4 でわるだけではいけません。長方形の辺は同じ長さではありません。",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "長方形のまわりの長さは $2a + 2b$ です。もう 1 つの辺には $a + {@0}$ を入れましょう。",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "長方形のまわりの長さは $2a + 2b$ です。短いほうの辺を $x$ としましょう。",
  "Od oboch strán odčítame {@0}": "両辺から {@0} をひきます",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "大きい円の面積から小さい円の面積をひきましょう。",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "負の数からひいているので、数直線では 0 からさらに左へ進みます。",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "平方根は数の半分ではありません。2 乗すると {@0} になる数をさがしましょう。",
  "Odčítaj hodnoty dvoch stĺpcov.": "2 本のぼうの値をひきましょう。",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "求めた絶対値をひきましょう。答えはいくつですか。",
  "Odčítaj získané čísla. Aký je výsledok?": "求めた数をひきましょう。答えはいくつですか。",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "数をひいて、答えの符号をとりましょう。0 の反対側にあるときは、0 からのきょりをたします。",
  "Odčítanie nahraď pripočítaním opačného čísla.": "ひき算を、反対の数のたし算になおしましょう。",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "負の数をひくことは、反対の正の数をたすことです：$-{@0} = +{@1}$。",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "ある数をひくことは、反対の数をたすことです：${@0} - {@1} = {@2} + {@3} = {@4}$。",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "その説明は式 ${@0}$ にあたります。式に書くときは、まず「いちばん外側」の計算（和、差、累乗…）を決め、それからその部分を考えましょう。",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "分数の項だけを残しましょう。$\\frac{x}{{@0}}$ はいくつですか。",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "底面は直角三角形で、その面積は直角をはさむ 2 辺の積の半分です。側面積は底面のまわりの長さ × 高さです。",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "公式 ${@0}$ で $a = x$、$b = {@1}$ とすると：${@2} = {@3}$。",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "半径は直径の半分です：$r = {@0}\\,\\text{cm}$。",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "$x$ の半分は $x$ を 2 でわったもので、$2x$ ではありません。",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "最後の項 $b^2$ は 2 乗なので、いつも正です。",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "最後の項は数 {@0} そのものではなく、その 2 乗です。",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "最後の項は数 {@2} そのものではなく、積 ${@0}\\cdot {@1}$ です。",
  "Použi $\\pi \\approx 3{,}14$.": "$\\pi \\approx 3.14$ を使いましょう。",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "表面積を 6 でわると 1 つの面の面積になります。そのあと平方根をとりましょう。",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "気をつけましょう。公式 $S = \\pi r^2$ に入るのは直径ではなく半径です。",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "気をつけましょう：$(x + a)^2$ は $x^2 + a^2$ ではありません。積の 2 倍 $2ax$ がたりません。",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "数の個数は奇数（{@0}）なので、中央値は真ん中の {@1} 番目の数：{@2} です。",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "数の個数は偶数（{@0}）なので、中央値は {@1} 番目と {@2} 番目の数の平均です：$\\frac{{@3} + {@4}}{2} = {@5}$。",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "円の面積（$\\pi r^2$）を計算しています。問題は円周の長さを聞いています。",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "数直線上の移動を考えましょう：正の数は右へ、負の数は左へ動かします。",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "$x$ の項を左辺に移してまとめましょう。$x$ の係数はいくつになりますか。",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "$x$ の項を左辺に、数を右辺に移しましょう。$ax = b$ の形にすると、$a$ と $b$ はいくつですか。セミコロンで区切って入力しましょう。",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "数を右辺に移してまとめましょう。右辺の数はいくつになりますか。",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "分数を小数になおしましょう。2 つの負の数では、0 に近いほうが大きいです。",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "わり算でも、かけ算と同じ符号のきまりが成り立ちます。",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "分数のかけ算では通分はいりません。分子どうし、分母どうしをかけます。",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "$x$ の項を方程式の反対側に移すときは、符号を変えなければなりません。",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "数を方程式の反対側に移すときは、符号を変えなければなりません。",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "数の個数が偶数のときは、真ん中に 2 つの数があります。中央値はその平均です。",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "差では順番が大切です：ひかれるほうを先に書きます。",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "展開すると $x$ の項が 2 つできます：$x$ × 2 つ目のかっこの数と、1 つ目のかっこの数 × $x$。それをまとめましょう。$x$ の係数 $p$ はいくつですか。",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "分数のたし算とひき算では通分が必要です。符号を忘れないようにしましょう。",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "差の 2 乗では、それぞれの項を 2 乗するだけでは足りません。真ん中の項 $-2ab$ がたりません。",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "和の 2 乗では、それぞれの項を 2 乗するだけでは足りません。真ん中の項 $2ab$ がたりません。",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "負の数では、絶対値が大きいかどうかでは決まりません。0 に近いほうが大きいです。",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "負の数をたすことは、その絶対値をひくことと同じです：${@0} + {@1} = {@2} - {@3} = {@4}$。",
  "Päťkrát": "5 ばい",
  "Päťnásobok": "5 倍",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "同じ符号なら積は正、ちがう符号なら負です。",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "平方根の差は、差の平方根ではありません。まずそれぞれの平方根を計算してから、ひきましょう。",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "最後に行う計算がどれかを決めましょう。和や差の全体にかけたり 2 乗したりするなら、かっこが必要です。",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "長さを dm になおします：${@0}\\,\\text{dm}$、${@1}\\,\\text{dm}$、${@2}\\,\\text{dm}$。$V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$。",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "長さを dm になおしましょう。$1\\,\\text{dm}^3 = 1$ L だからです。",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "$(x{@0})(x{@1})$ を展開して、$x^2 + px + q$ の形で書きましょう。$p$ と $q$ をセミコロンで区切って入力しましょう。",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "${@0}({@1})$ を展開しましょう（かっこの前の符号もふくめて）。$x$ の係数と定数項を入力しましょう。",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "${@0}({@1})$ を展開しましょう。$x$ の係数と定数項をセミコロンで区切って入力しましょう。",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "${@0}$ を展開して整理し、$ax + b$ の形にしましょう。$a$ と $b$ をセミコロンで区切って入力しましょう。",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "かっこ ${@0}(x{@1})$ を展開しましょう。（$x$ のつかない）数はいくつになりますか。",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "展開します：${@0}{@1} = {@2}{@3}$。$x$ の項を左辺に、数を右辺に：${@4} = {@5}$ なので、$x = {@6}$ です。",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "展開します：${@0}{@1}{@2}$。同類項をまとめます：${@3}$ なので、$a = {@4}$、$b = {@5}$ です。",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "2 つの分数を分母 {@0} に倍分し、分子を{@1}ましょう。分子はいくつになりますか。",
  "S – stred": "S – 中心",
  "Sieť kvádra": "直方体の展開図",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "同類項をまとめましょう。$a$ と $b$ をセミコロンで区切って入力しましょう。",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "共通の分母は {@0} です：${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$。",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "ぜんぶで同じ大きさの {@0} つ分です：{@1}が 1 つ分、{@2}が {@3}。だから和を {@4} でわりましょう。",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "2 人あわせて {@0} {@1}ですが、同じ年れいではないので、和を半分にするだけではいけません。年れいのちがい {@2} {@3}を考えましょう。",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "面は正方形です。その 1 辺、つまり立方体の 1 辺の長さは何 cm ですか。",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "真ん中の項は積の 2 倍 $2ab$ で、$ab$ だけではありません。",
  "Stĺpcový diagram známok z písomky": "テストの成績のぼうグラフ",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "{@1}がためた金がくを $x$ とします。「{@2}」は {@3} 倍という意味です。",
  "Syn": "むすこ",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "和は ${@0} = {@1}$、数の個数は {@2} です。平均：${@3} : {@4} = {@5}$。",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "和はすべての数の個数でわらなければなりません。もう一度数えましょう。",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "和を数の個数でわったものは平均で、求める数ではありません。すべての数 $x$、$x + 1$、… を使って方程式をつくりましょう。",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "連続する{@0}の自然数の和は {@1} です。そのうち{@2}数はいくつですか。",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "積 $(+b)\\cdot(-b)$ は負なので、$b^2$ の前はマイナスです。",
  "Sčítaj hodnoty všetkých stĺpcov.": "すべてのぼうの値をたしましょう。",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "$x$ のすべての項の係数をたしましょう。$a$ はいくつですか。",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "2 つの答えをたしましょう。式の値はいくつですか。",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "（$x$ のつかない）数だけをたしましょう。$b$ はいくつですか。",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "すべての項をたしましょう。式の値はいくつですか。",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "すべての数をたして、その和を数の個数でわりましょう。",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "$x$ の係数と数を別々にたしましょう。項の前の符号はその項のものです。",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "2 つの辺しかたしていません。長方形には辺が 4 つあるので、それぞれの長さを 2 回ずつ入れましょう。",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "すべてのぼうの値をたします：${@0} = {@1}$。",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "それは $(x - b)^2$ の答えです。和と差の積では、真ん中の項が打ち消し合います。",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "それは積 $(a + b)(a - b)$ の答えです。差の 2 乗では、さらに真ん中の項 $-2ab$ があり、最後の項は正です。",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "それは平均値です。中央値は、ならべた数の真ん中の値です。",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "それはもう一方の辺の長さです。問題は{@0}辺を聞いています。",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "それは側面積だけです。表面積には 2 つの底面も入ります。",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "それはいちばん小さい数で、問題はいちばん大きい数を聞いています。それに、いちばん大きい数との差をたしましょう。",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "それはいちばん大きい数で、問題はいちばん小さい数を聞いています。",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "それは立方体の体積（$a^3$）です。表面積はすべての面の面積の和です。",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "それは円全体の面積です。おうぎ形は、中心角の大きさに応じたその一部です。",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "それは 1 つの面の面積です。1 辺は、その平方根をとると求められます。",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "それは円周の長さ（$2\\pi r$）か、$r^2$ を $2r$ として計算しました。面積は $\\pi r^2 = \\pi\\cdot r\\cdot r$ です。",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "それは立方体の表面積（$6a^2$）です。体積は $a^3$ です。",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "それはいちばん多い値がくり返される回数です。最頻値はその値そのものです。",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "それは{@1}がためた金がくです。問題は{@3}がいくらためたかを聞いています。",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "それは数の和です。平均は、和を数の個数でわると求められます。",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "それは{@0}の年れいで、問題は{@1}の年れいを聞いています。",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "3 乗は同じ数を 3 つかけた積です。負の数の奇数乗は負になります。",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "3 乗は 3 倍ではありません。その数を因数として 3 回書いて、かけあわせます。",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "三角柱の底面は、直角をはさむ辺が ${@0}\\,\\text{cm}$ と ${@1}\\,\\text{cm}$（斜辺は ${@2}\\,\\text{cm}$）の直角三角形で、高さは ${@3}\\,\\text{cm}$ です。",
  "Trojnásobok": "3 倍",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "${@0}^\\circ$ の角は 1 回転の角の $\\frac{{@1}}{360}$ なので、おうぎ形は円の{@2}です：$S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3.14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$。",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "$x$ だけでなく、差全体を 2 乗しなければなりません。",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "それぞれの数ではなく、差全体を 2 乗します。差をかっこに入れましょう。",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "数 $-{@0}$ 全体を 2 乗します：$(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$。",
  "Urči medián čísel {@0}.": "{@0} の中央値を求めましょう。",
  "Urči modus súboru údajov {@0}.": "データ {@0} の最頻値を求めましょう。",
  "Usporiadame: {@0}. {@1}": "ならべます：{@0}。{@1}",
  "V ktorý deň si požičali najviac kníh?": "本がいちばん多く借りられたのは何曜日ですか。",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "まわりの長さには長いほうの辺が 2 回入るので、ちがいの {@0} cm も 2 回入れましょう。",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "年下の年れいを $x$ とすると、年上の年れいは $x$ に年れいの差をたしたものです。2 人の年れいの和は、あたえられた数と等しくなります。",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "{@0}の年れいを $x$ とします。方程式 $x + (x + {@1}) = {@2}$ から、$2x$ がいくつかを計算しましょう。",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "{@0}の年れいを $x$ とすると、{@1}の年れいは $x + {@2}$ です。方程式：$x + (x + {@3}) = {@4}$ なので、$2x = {@5}$、$x = {@6}$。{@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "円全体の面積からその部分をとりましょう。おうぎ形の面積は何 cm² ですか。",
  "Vnuk": "まご",
  "Vnučka": "まご",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "公式 $o = 2\\pi r$ に入るのは半径です。直径がわかっているなら $o = \\pi d$ でよく、直径を 2 倍しないようにしましょう。",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "右辺を $x$ の係数でわりましょう。$x$ はいくつですか。",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "和を数の個数でわりましょう。平均はいくつですか。",
  "Vydeľ. Aké je $x$?": "わりましょう。$x$ はいくつですか。",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "分母どうしをかけましょう。分母はいくつになりますか。",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "2 つのかっこの数（定数）どうしをかけましょう。$q$ はいくつですか。",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "分子どうしをかけましょう。（約分する前の）分子はいくつになりますか。",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "$3.14$ をかけましょう。円の面積は何 cm² ですか。",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "$3.14$ をかけましょう。ドーナツ形の面積は何 cm² ですか。",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "$\\sqrt{{@0}} - \\sqrt{{@1}}$ を計算しましょう。",
  "Vypočítaj $\\sqrt{{@0}}$.": "$\\sqrt{{@0}}$ を計算しましょう。",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "${@0}$ を計算しましょう。答えは既約分数（例：-5/6）か整数で入力しましょう。",
  "Vypočítaj ${@0}^2$.": "${@0}^2$ を計算しましょう。",
  "Vypočítaj ${@0}^3$.": "${@0}^3$ を計算しましょう。",
  "Vypočítaj $|{@0}| - |{@1}|$.": "$|{@0}| - |{@1}|$ を計算しましょう。",
  "Vypočítaj aritmetický priemer čísel {@0}.": "{@0} の平均値を求めましょう。",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "$x = {@1}$ のとき、式 ${@0}$ の値を求めましょう。",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "$x = {@2}$ のとき、式 ${@0}(x{@1})$ の値を求めましょう。",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "$x = {@2}$、$y = {@3}$ のとき、式 ${@0}{@1}$ の値を求めましょう。",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "$x = {@2}$ のとき、式 ${@0}{@1}$ の値を求めましょう。",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "1 辺が ${@0}\\,\\text{cm}$ の立方体の体積（cm³）を求めましょう。",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "円全体の面積を計算し、おうぎ形の角が $360^\\circ$ のどれだけかに応じて、その一部をとりましょう。",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "半径 $r = {@0}\\,\\text{cm}$、中心角 ${@1}^\\circ$ のおうぎ形の面積（cm²）を求めましょう。{@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "半径 $R = {@0}\\,\\text{cm}$ と $r = {@1}\\,\\text{cm}$ のドーナツ形の面積（cm²）を求めましょう。{@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "長方形の面積 $a\\cdot b$（cm²）を求めましょう。",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "3 つのちがう面の面積 $ab$、$bc$、$ac$ を計算してたしましょう（cm²）。",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "長方形のまわりの長さ $2a + 2b$（cm）を求めましょう。",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "1 辺が ${@0}\\,\\text{cm}$ の立方体の表面積（cm²）を求めましょう。",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "$2x$、つまり求める年れいの 2 倍を計算しました。さらに 2 でわりましょう。",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "面積を計算しました。まわりの長さは 4 つの辺の長さの和です。",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "まわりの長さを計算しました。長方形の面積は辺の長さの積です。",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "方程式 $\\frac{x}{{@0}}{@1} = {@2}$ を解きましょう。",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "方程式 ${@0}(x{@1}) = {@2}{@3}$ を解きましょう。",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "方程式 ${@0}{@1} = {@2}{@3}$ を解きましょう。",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "方程式を解きましょう。$x$（いちばん小さい数）はいくつですか。",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "方程式を解きましょう。{@1}は何ユーロ{@0}か。",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "円周の長さ（$2\\pi r$）の一部をとりました。それは弧の長さです。おうぎ形の面積では、円の面積 $\\pi r^2$ から考えましょう。",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "2 つの数のきょりは、その差の絶対値です：$|{@0} - {@1}| = |{@2}| = {@3}$。",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "公式 $o = 2\\pi r$ を $2\\pi \\approx 6.28$ でわりましょう。",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "つりあっている天びん：左にふくろ x が 2 つとおもりが 3 つ、右におもりが 9 つ",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "かっこの答えに ${@0}$ をかけましょう。式の値はいくつですか。",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "マイナスがかっこの中にあるかどうかに注意しましょう。2 乗するのは、指数のすぐ下にあるものだけです。",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "$o = 2\\pi r$ から $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6.28} = {@1}\\,\\text{cm}$ を求めます。",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "$x$ に数を代入しましょう。負の数ならかっこに入れます。",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "数をとりちがえました。かけるのは {@0}、たすのは {@1} です。",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "答え $\\frac{{@0}}{{@1}}$ を既約分数（または整数）で書きましょう。",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "分数 $\\frac{{@0}}{{@1}}$ を既約分数（または整数）で書きましょう。",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "数 ${@0}$ を $a\\cdot 10^n$（$1 \\le a &lt; 10$）の形で書きましょう。$a$ と $n$ をセミコロンで区切って入力しましょう。",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "左辺の数 ${@0}$ をとりのぞいて、${@1}x$ だけが残るようにしましょう。右辺の数はいくつになりますか。",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "式 ${@0}$ を整理して $ax + b$ の形にしましょう。$a$ と $b$ をセミコロンで区切って入力しましょう。",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "分数のひき算は、分子どうし、分母どうしを別々にひくのではありません。まず通分しましょう。",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "分数のたし算は、分子どうし、分母どうしを別々にたすのではありません。まず通分しましょう。",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "分数 $\\frac{x}{{@0}}$ は、わるのではなく {@1} をかけるととりのぞけます。",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "分数を小数になおします：${@0} = {@1}$。${@2}$ と ${@3}$ をくらべるので、${@4} {@5} {@6}$ です。",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "${@0}$ は数 ${@1}$ と文字 $x$ の和ではなく、積です。代入した数をかっこに入れてかけましょう。",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "かっこの前の負の数は、かっこの中のすべての項の符号を変えます。最後の数も変わります。",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "負の数を 2 乗するときはかっこに入れましょう：$({@0})^2$ は正の数です。",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "かっこがあると、和全体を {@0} 回とることになります。ここでは先に $x$ の{@1}をとり、それに {@2} をたします。",
  "a $x + 2$": "、$x + 2$",
  "autobusom 30 %": "バス 30 %",
  "babka": "おばあさん",
  "babky": "おばあさん",
  "banán": "バナナ",
  "beh": "ランニング",
  "d = 2r – priemer": "d = 2r – 直径",
  "dedka": "おじいさん",
  "dedko": "おじいさん",
  "dlhšia": "長いほうの",
  "dlhšiu": "長いほうの",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "数 $x$ と数 {@0} の差の 2 乗",
  "dvojnásobku": "2 倍",
  "dvojnásobok": "2 倍",
  "futbal": "サッカー",
  "hokej": "アイスホッケー",
  "hruška": "なし",
  "jahoda": "いちご",
  "k – kružnica": "k – 円周",
  "kratšia": "短いほうの",
  "kratšiu": "短いほうの",
  "mama": "お母さん",
  "mamy": "お母さん",
  "miest": "けた",
  "na bicykli 20 %": "自転車 20 %",
  "napr. -2; 8": "例：-2; 8",
  "napr. 4; 5": "例：4; 5",
  "napr. 6; -9": "例：6; -9",
  "objem (v cm³)": "体積（cm³）",
  "obsah (v cm²)": "面積（cm²）",
  "obvod (v cm)": "まわりの長さ（cm）",
  "otca": "お父さん",
  "otec": "お父さん",
  "pešo 50 %": "徒歩 50 %",
  "plávanie": "水泳",
  "podstava": "底面",
  "polomer $r = {@0}\\,\\text{cm}$": "半径 $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "表面積（cm²）",
  "povrch; objem": "表面積; 体積",
  "priemer $d = {@0}\\,\\text{cm}$": "直径 $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "5 倍",
  "päťnásobok": "5 倍",
  "r – polomer": "r – 半径",
  "rovnaké, výsledok je kladný": "同じなので、答えは正です",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "数 $x$ の{@0}と数 {@1} の差",
  "rôzne, výsledok je záporný": "ちがうので、答えは負です",
  "slivka": "プラム",
  "stĺpcový diagram": "ぼうグラフ",
  "sčítaj": "たし",
  "tenis": "テニス",
  "tri štvrtiny": "4 分の 3",
  "troch": "3 つ",
  "trojnásobku": "3 倍",
  "trojnásobok": "3 倍",
  "ušetril": "ためました",
  "ušetrila": "ためました",
  "vnuk": "まご",
  "vnuka": "まご",
  "vnučka": "まご",
  "vnučky": "まご",
  "výsek s uhlom α": "角 α のおうぎ形",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} 「{@1}」のぼうは「{@2}」のぼうよりいくつ高いですか。{@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} 表面積（cm²）と体積（cm³）を求め、セミコロンで区切りましょう。",
  "{@0} Vypočítaj jeho {@1}.": "{@0} {@1}を求めましょう。",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0}と{@1}はあわせて {@2} € ためました。{@3}は{@6}の {@5}{@4}。{@8}は何ユーロためましたか。",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0}は{@4}より {@1} さい年上です。2 人の年れいの和は {@5} {@6}です。{@7}は何さいですか。",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0}は $x$ ユーロ、{@1}は ${@2}x$ ユーロ持っています。あわせて $x$ がいくつ分ですか。つまり、方程式 $\\square\\, x = {@3}$ の□に入る数はいくつですか。",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0}は ${@1} + {@2} = {@3}$ {@4}です。",
  "{@0} má {@1} {@2}.": "{@0}は {@1} {@2}です。",
  "{@0} súčtu čísla $x$ a čísla {@1}": "数 $x$ と数 {@1} の和の{@0}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0}は {@1} をかけるという意味で、{@2} をたすのではありません。",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}：$x$、{@1}：${@2}x$。方程式：$x + {@3}x = {@4}$ なので、${@5}x = {@6}$、$x = {@7}$。{@8}は {@10} € {@9}。",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}：${@1}x = {@2}$。両辺を ${@3}$ でわります：$x = {@4}$。",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "分子どうし、分母どうしをかけます：${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$。",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "項 ${@0}$ の係数は ${@1}$ です。入れるのを忘れないようにしましょう。",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "$x$ の項を左辺に、数を右辺に移します：${@0}{@1} = {@2}{@3}$ なので、${@4} = {@5}$、$x = {@6}$。",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "$x$ の項を一方の辺に、数をもう一方の辺に移しましょう。さいごに $x$ の係数でわります。",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "$x$ の項：${@0}{@1}{@2} = {@3}$。数：${@4}{@5} = {@6}$。答え：${@7}$ なので、$a = {@8}$、$b = {@9}$。",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "数は {@0} こあります。真ん中の数は何番目ですか。",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "2 つの数は 0 の反対側にあるので、0 からのきょりはひくのではなく、たします。",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "2 つの数は符号がちがうので、絶対値をたすのではなく、大きいほうから小さいほうをひきます。答えの符号は、絶対値の大きいほうの数の符号です。",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "まず数を小さいほうから大きいほうへならべましょう。",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "$x$、$x + 1${@0} とします。方程式：${@1}x + {@2} = {@3}$ なので、${@4}x = {@5}$、$x = {@6}$。{@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "数を小さいほうからならべましょう。{@0} 番目の数はいくつですか。",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "数を小さいほうからならべましょう。その位置にある数はいくつですか。それが中央値です。",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "$a$ は $1 \\le a &lt; 10$ を満たさなければならないので、小数点の前には数字が 1 つだけです。",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "$a$ の小数点の前には数字が 1 つだけです。指数 $n$ は、小数点を何けた動かすかを表します。",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "$q$ は、かっこの数どうしをたすのではなく、かけてできます。",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "${@0}$ は $x$ だけでなく、かっこの中全体にかかります。",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "根号の中の数は小数第 2 位まであるので、答えは小数第 1 位までになります：$\\sqrt{{@0}}$ を求めて、10 でわってみましょう。",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "かっこの前の数は、$x$ だけでなく、かっこの中の 2 つの項の両方にかかります。",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "数 {@0} は 3 回出てきて、ほかの数は 1 回だけです。最頻値は {@1} です。",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "かっこの前の数を、符号もふくめてかっこの中のすべての項にかけましょう。そのあと同類項をまとめます。",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "かっこの前の数を、最後の数もふくめてかっこの中のすべての項にかけましょう。",
  "číslo o {@0} menšie ako polovica čísla $x$": "数 $x$ の半分より {@0} 小さい数",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "数 $x$ の{@1}より {@0} 大きい数",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "1 辺が a たす b の正方形を 4 つに分けたもの",
  "Štvornásobok": "4 倍",
  "štvornásobku": "4 倍",
  "štvornásobok": "4 倍",
  "štyroch": "4 つ",
  "Žiaci hlasovali o obľúbenom ovocí.": "生徒たちが好きなくだものに投票しました。",
  "Žiaci uviedli svoj obľúbený šport.": "生徒たちが好きなスポーツを答えました。",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "「{@0} 小さい」は半分から {@1} をひくという意味で、順番が反対です。",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "「{@0} 大きい」は {@1} をたすという意味で、ひくのではありません。",
  "ℕ – prirodzené": "ℕ – 自然数",
  "ℚ – racionálne čísla": "ℚ – 有理数",
  "ℤ – celé čísla": "ℤ – 整数"
 }
});
