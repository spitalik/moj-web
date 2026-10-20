/* 日本語: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/v3/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "v3-pojem": {
   "title": "微分方程式とは、初期値問題、方向場",
   "summary": "方程式の階数、一般解と特殊解、初期値問題、解の存在と一意性の定理、方向場。",
   "theory": [
    "<p><strong>常微分方程式（ODE）</strong> とは、未知数が 1 変数の関数 $y = y(x)$ で、その導関数を含む方程式 $F(x, y, y', \\dots, y^{(n)}) = 0$ のことです。\n       方程式の <strong>階数</strong> は、実際に現れる最も高い導関数の階数です：\n       $y'' + (y')^{5} = x$ は 2 階の方程式で、累乗 $(y')^{5}$ は階数に影響しません。\n       $y, y', \\dots, y^{(n)}$ について一次であるとき、つまり\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$ の形のとき、方程式は <strong>線形</strong> であるといいます。</p>\n       <p>区間 $I$ 上の <strong>解</strong> とは、$I$ 上で $n$ 階までの導関数をもち、代入するとすべての $x\\in I$ について方程式を満たす関数のことです。\n       $n$ 階の方程式の <strong>一般解</strong> は、$n$ 個の独立な定数をもつ解の族 $y = \\varphi(x, C_1, \\dots, C_n)$ です。\n       定数を具体的に選ぶと <strong>特殊解</strong> が得られます。定数をどう選んでも一般解から得られない解を\n       <strong>特異解</strong> といいます。</p>",
    "<p>1 階の方程式に対する <strong>コーシー問題（初期値問題）</strong>：方程式 $y' = f(x, y)$ の解のうち、\n       <strong>初期条件</strong> $y(x_0) = y_0$ を満たすものを求める問題です。$n$ 階の方程式では $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$ を指定します。</p>\n       <p><strong>定理（ピカール・リンデレーフ）。</strong> 関数 $f$ と $\\frac{\\partial f}{\\partial y}$ が点 $[x_0; y_0]$ の近傍で連続ならば、\n       $x_0$ を含むある区間で、コーシー問題は <strong>ただ 1 つの</strong> 解をもちます。仮定がなければ一意性は成り立つとは限りません：\n       問題 $y' = 3y^{2/3}$、$y(0) = 0$ は、関数 $y = 0$ と $y = x^{3}$ の両方が解です（ここで $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$ は $y = 0$ で定義されません）。</p>",
    "<p><strong>方向場。</strong> 方程式 $y' = f(x, y)$ は、各点 $[x; y]$ で、そこを通る解の接線の傾きを定めます。\n       平面上の点に傾き $f(x, y)$ の短い線分をかき込むと、方向場が得られます。解のグラフ（<strong>積分曲線</strong>）は、\n       その各点で場に接しています。すべての線分が同じ傾き $k$ をもつ曲線 $f(x, y) = k$ を <strong>等傾線</strong>（アイソクライン）といいます。</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "方程式 $y' = x - y$ の方向場。破線の直線 $y = x$ は傾き $0$ の等傾線、緑の直線 $y = x - 1$ は傾き $1$ の等傾線であり、同時に解でもあります。初期値 $y(0)$ を動かしてみましょう：$x\\to\\infty$ のとき、すべての解が直線 $y = x - 1$ に近づきます。"
    }
   ],
   "examples": [
    {
     "task": "任意の $C_1, C_2$ について $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$ が方程式 $y'' - y' - 2y = 0$ の解であることを確かめましょう。この方程式は何階ですか。",
     "steps": [
      "方程式は 2 階導関数を含み、それより高い導関数は含まないので、<strong>2 階</strong> です。",
      "微分します：$y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$、$y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$。",
      "代入します：$(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$。",
      "等式はすべての $x$ とすべての $C_1, C_2$ について成り立ちます。関数は 2 つの独立な定数を含むので、<strong>一般解</strong> です。"
     ]
    },
    {
     "task": "$y = C\\mathrm{e}^{-x} + x - 1$ が方程式 $y' = x - y$ の一般解であることを示し、条件 $y(0) = 2$ のコーシー問題の解を求めましょう。",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$、$x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$。両辺は等しくなります。",
      "条件から：$y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$、よって $C = 3$。",
      "<strong>特殊解：$y = 3\\mathrm{e}^{-x} + x - 1$。</strong> これは図の $y(0) = 2$ の曲線です。"
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "変数分離形の方程式",
   "summary": "方程式 $y' = g(x)\\,h(y)$：変数の分離、定常解、$y' = f(ax + by + c)$ の形の方程式。",
   "theory": [
    "<p><strong>変数分離形</strong> の方程式は $y' = g(x)\\,h(y)$ の形をしています。ここで $g$ は区間 $I$ 上で連続、\n       $h$ は区間 $J$ 上で連続です。同値な微分形式 $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$ で書くこともできます。</p>\n       <p><strong>解き方：</strong></p>\n       <ol><li>関数 $h$ の零点を求めます。$h(c) = 0$ ならば、定数 $y = c$ は解です。これを <strong>定常解</strong> といいます。</li>\n       <li>$h(y)\\neq 0$ のとき、変数を分離します：$\\frac{dy}{h(y)} = g(x)\\,dx$。</li>\n       <li>積分します：$\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$。陰関数の形の解が得られるので、できれば陽関数の形で表します。</li>\n       <li>定数 $C$ を初期条件から決め、解がどの区間で存在するかを確かめます。</li></ol>",
    "<p><strong>解の見落としに注意。</strong> $h(y)$ で割ると定常解を失うことがあるので、それらは別に書き出す必要があります\n       （一般解の $C = 0$ の場合に含まれることもあります。たとえば $y' = ky$ では $y = C\\mathrm{e}^{kx}$ が $y = 0$ も与えます）。\n       右辺がきれいな形でも、非線形方程式の解は $\\mathbb{R}$ 全体で存在するとは限りません：問題 $y' = y^{2}$、$y(0) = 1$ の解は\n       $y = \\frac{1}{1 - x}$ で、区間 $(-\\infty; 1)$ でしか存在しません。</p>\n       <p><strong>$y' = f(ax + by + c)$ の形の方程式</strong> は、置換 $z = ax + by + c$ によって変数分離形の方程式 $z' = a + b\\,f(z)$ に変換できます。</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "方程式 $y' = xy$ の一般解は $y = C\\mathrm{e}^{x^{2}/2}$ です。緑の $x$ 軸は定常解 $y = 0$（$C = 0$ の場合）、青い曲線は条件 $y(0) = 1$ の解です。一意性の定理が保証するとおり、積分曲線どうしは交わりません。"
    }
   ],
   "examples": [
    {
     "task": "コーシー問題 $y' = xy^{2}$、$y(0) = 1$ を解き、解が存在する区間を求めましょう。",
     "steps": [
      "定常解は $y = 0$ ですが、条件 $y(0) = 1$ を満たしません。",
      "$y\\neq 0$ のとき：$\\frac{dy}{y^{2}} = x\\,dx$。積分すると $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$。",
      "条件から $-1 = C$ なので、$\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$、$y = \\frac{2}{2 - x^{2}}$ です。",
      "<strong>解 $y = \\frac{2}{2 - x^{2}}$ は区間 $(-\\sqrt{2}; \\sqrt{2})$ で存在します</strong>。この区間は点 $x_0 = 0$ を含みます。点 $\\pm\\sqrt{2}$ でグラフは垂直な漸近線をもちます。"
     ]
    },
    {
     "task": "コーシー問題 $y' = \\mathrm{e}^{x - y}$、$y(0) = \\ln 2$ を解きましょう。",
     "steps": [
      "右辺は積です：$y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$。変数を分離します：$\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$。",
      "積分します：$\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$。条件から $2 = 1 + C$ なので、$C = 1$。",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>。解は $\\mathbb{R}$ 全体で存在します。"
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "同次形の微分方程式",
   "summary": "方程式 $y' = \\varphi\\left(\\frac{y}{x}\\right)$、置換 $y = ux$、同次形に変換できる方程式。",
   "theory": [
    "<p>すべての $t \\gt 0$ について $f(tx, ty) = t^{k}f(x, y)$ となるとき、関数 $f(x, y)$ は <strong>$k$ 次の同次関数</strong> であるといいます。$f$ が $0$ 次の同次関数のとき、方程式 $y' = f(x, y)$ を\n       <strong>同次形</strong> といいます。このとき $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$ なので、方程式は次の形になります。\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       方程式 $M(x, y)\\,dx + N(x, y)\\,dy = 0$ は、$M$ と $N$ がともに同じ次数の同次関数であるとき同次形です\n       （たとえば $\\frac{x^{2} + y^{2}}{xy}$：分子も分母も次数は $2$ です）。</p>",
    "<p><strong>置換 $y = ux$</strong>。ここで $u = u(x)$ は新しい未知関数です。すると $y' = u + xu'$ となり、方程式は\n       $$xu' = \\varphi(u) - u,$$\n       になります。これは変数分離形の方程式です：$\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$。$\\varphi(u_0) = u_0$ ならば、直線 $y = u_0x$ は\n       解です。積分したあと、$u = \\frac{y}{x}$ をもとに戻します。</p>\n       <p><strong>同次形に変換できる方程式</strong>：行列式 $a_1b_2 - a_2b_1$ が 0 でない $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$。\n       $[x_0; y_0]$ を直線 $a_ix + b_iy + c_i = 0$ の交点として平行移動 $x = X + x_0$、$y = Y + y_0$ を行うと、定数項が消えます。</p>",
    {
     "fig": "v3-homogenne",
     "caption": "同次形の方程式では、原点を通る各直線 $y = ux$（破線）の上で方向場の向きが同じです。方程式 $y' = \\frac{x + y}{x - y}$ の解は、極座標で $r = C\\mathrm{e}^{\\varphi}$、つまり対数らせんです。"
    }
   ],
   "examples": [
    {
     "task": "$x \\gt 0$ について、方程式 $y' = \\dfrac{x^{2} + y^{2}}{xy}$ の一般解を求めましょう。",
     "steps": [
      "分子も分母も $2$ 次の同次式です。$x^{2}$ で割ると：$y' = \\frac{1 + u^{2}}{u}$。ここで $u = \\frac{y}{x}$。",
      "$y' = u + xu'$ を代入します：$u + xu' = \\frac{1}{u} + u$、よって $xu' = \\frac{1}{u}$。",
      "変数を分離します：$u\\,du = \\frac{dx}{x}$。積分すると $\\frac{u^{2}}{2} = \\ln x + C$。",
      "<strong>解：$y^{2} = x^{2}(2\\ln x + C_1)$</strong>。ここで $C_1 = 2C$。"
     ]
    },
    {
     "task": "コーシー問題 $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$、$y(1) = 0$ を解きましょう。",
     "steps": [
      "置換 $y = ux$：$u + xu' = u + \\mathrm{e}^{-u}$、よって $xu' = \\mathrm{e}^{-u}$。",
      "変数を分離します：$\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$ なので、$\\mathrm{e}^{u} = \\ln x + C$。",
      "条件 $u(1) = 0$ から：$1 = 0 + C$、よって $C = 1$、$u = \\ln(1 + \\ln x)$。",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong>（$x \\gt \\mathrm{e}^{-1}$）。"
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "1 階線形微分方程式とベルヌーイの方程式",
   "summary": "積分因子、定数変化法、解の構造 $y = y_h + y_p$、置換 $z = y^{1-n}$。",
   "theory": [
    "<p><strong>1 階線形微分方程式</strong> は $y' + p(x)\\,y = q(x)$ の形をしています。ここで $p, q$ は区間 $I$ 上で連続です。$q = 0$ のとき、方程式は\n       （線形方程式の意味で）<strong>斉次</strong> であり、変数分離形です：$y_h = C\\mathrm{e}^{-P(x)}$。ここで $P$ は $p$ の任意の原始関数です。\n       非斉次方程式の一般解は $y = y_h + y_p$、つまり斉次方程式の一般解と、非斉次方程式の 1 つの（特殊）解との和です。\n       コーシー問題は $I$ 全体でただ 1 つの解をもちます。</p>",
    "<p><strong>積分因子。</strong> 方程式に $\\mu(x) = \\mathrm{e}^{P(x)}$ を掛けます。すると左辺は積の導関数になります：\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       <strong>定数変化法</strong> でも同じ結果になります：解を $y = C(x)\\,\\mathrm{e}^{-P(x)}$ の形で探すと、代入したとき\n       $C(x)$ を含む項が打ち消し合い、$C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$ が残ります。</p>",
    "<p><strong>ベルヌーイの方程式</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$、$n\\neq 0, 1$。両辺を $y^{n}$ で割り、$z = y^{1-n}$ とおくと、\n       $z' = (1-n)\\,y^{-n}y'$ です。次の線形方程式が得られます。\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       $n \\gt 0$ のときは $y = 0$ も解ですが、割り算で失われます。たとえばロジスティック方程式 $y' = ry - \\frac{r}{K}y^{2}$ は $n = 2$ のベルヌーイの方程式です。</p>"
   ],
   "examples": [
    {
     "task": "コーシー問題 $y' + 2y = 4x$、$y(0) = 1$ を解きましょう。",
     "steps": [
      "$p = 2$、積分因子は $\\mu = \\mathrm{e}^{2x}$。方程式は $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$ になります。",
      "部分積分：$\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$ なので、$y = 2x - 1 + C\\mathrm{e}^{-2x}$。",
      "条件から：$-1 + C = 1$、$C = 2$。",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$。</strong> 検算：$y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$。"
     ]
    },
    {
     "task": "$x \\gt 0$ について、ベルヌーイの方程式 $y' + \\dfrac{y}{x} = xy^{2}$ の一般解を求めましょう。",
     "steps": [
      "$n = 2$ なので、$z = y^{-1}$、$z' = -y^{-2}y'$。方程式を $y^{2}$ で割ると：$y^{-2}y' + \\frac{1}{x}y^{-1} = x$、つまり $-z' + \\frac{z}{x} = x$。",
      "線形方程式 $z' - \\frac{z}{x} = -x$ の積分因子は $\\mu = \\frac{1}{x}$：$\\left(\\frac{z}{x}\\right)' = -1$ なので、$z = Cx - x^{2}$。",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>。さらに定常解 $y = 0$ もあります。"
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "完全微分方程式と積分因子",
   "summary": "$M_y = N_x$ を満たす方程式 $M\\,dx + N\\,dy = 0$、ポテンシャル関数 $F(x, y)$、1 変数だけに依存する積分因子。",
   "theory": [
    "<p>次を満たす関数 $F(x, y)$（ポテンシャル関数）が存在するとき、方程式 $M(x, y)\\,dx + N(x, y)\\,dy = 0$ は領域 $D$ で <strong>完全</strong> であるといいます。\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       つまり左辺は全微分 $dF$ です。すると各解に沿って $dF = 0$ となるので、<strong>一般積分</strong> は $F(x, y) = C$ です：\n       積分曲線は関数 $F$ の等高線です。</p>\n       <p><strong>判定法。</strong> $M, N$ が単連結な領域で連続微分可能ならば、方程式が完全であるのは次が成り立つとき、かつそのときに限ります。\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>$F$ の求め方。</strong> $M$ を $x$ について積分します（変数 $y$ は定数とみなします）：$F = \\int M\\,dx + \\varphi(y)$。\n       未知関数 $\\varphi$ は条件 $\\frac{\\partial F}{\\partial y} = N$ から決めます。この条件から $y$ だけに依存する $\\varphi'(y)$ が得られます。\n       $N$ を $y$ について積分することから始めてもかまいません。</p>\n       <p><strong>積分因子。</strong> 方程式が完全でないときは、$\\mu M\\,dx + \\mu N\\,dy = 0$ が完全になるような関数 $\\mu \\neq 0$、\n       つまり $(\\mu M)_y = (\\mu N)_x$ となるものを探します。簡単な 2 つの場合：</p>\n       <ul><li>$\\dfrac{M_y - N_x}{N} = \\omega(x)$ が $x$ だけに依存するならば、$\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$。</li>\n       <li>$\\dfrac{N_x - M_y}{M} = \\omega(y)$ が $y$ だけに依存するならば、$\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$。</li></ul>\n       <p>たとえば線形方程式 $y' + p(x)y = q(x)$ を $(p y - q)\\,dx + dy = 0$ と書くと、$\\omega = p(x)$ で、おなじみの因子 $\\mu = \\mathrm{e}^{\\int p\\,dx}$ が得られます。</p>",
    {
     "fig": "v3-exaktne",
     "caption": "方程式 $(2x - y)\\,dx + (2y - x)\\,dy = 0$ は $F(x, y) = x^{2} - xy + y^{2}$ をもつ完全微分方程式です。積分曲線は楕円 $F = C$ で、点 $[1; 2]$ を通る曲線は $C = 3$ に対応します。"
    }
   ],
   "examples": [
    {
     "task": "方程式 $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ を解き、点 $[1; 1]$ を通る積分曲線を求めましょう。",
     "steps": [
      "$M_y = 2x$、$N_x = 2x$ なので、方程式は完全です。",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$。",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$ なので、$\\varphi'(y) = 2y$、$\\varphi(y) = y^{2}$。",
      "一般積分は $x^{2}y + x^{3} + y^{2} = C$。点 $[1; 1]$ から $C = 3$。",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$。</strong>"
     ]
    },
    {
     "task": "方程式 $(y + x^{2})\\,dx - x\\,dy = 0$（$x \\gt 0$）の積分因子を求め、方程式を解きましょう。",
     "steps": [
      "$M_y = 1$、$N_x = -1$ なので、方程式は完全ではありません。$\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ は $x$ だけに依存します。",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$。新しい方程式：$\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$。ここで $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$ です。",
      "$F = -\\frac{y}{x} + x$（$F_x$ と $F_y$ を確かめましょう）。一般積分は $x - \\frac{y}{x} = C$。",
      "<strong>$y = x^{2} - Cx$。</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "1 階微分方程式の応用",
   "summary": "人口の増加と放射性崩壊、ニュートンの冷却の法則、ロジスティック方程式、RC 回路、溶液の混合。",
   "theory": [
    "<p><strong>指数関数的な増加と減少。</strong> ある量の変化の速さがその時点の値に比例するとき、$y' = ky$ が成り立つので、\n       $y(t) = y_0\\mathrm{e}^{kt}$ です。$k \\gt 0$ のときは増加（人口、連続複利）で、倍になるまでの時間は $\\frac{\\ln 2}{k}$ です。\n       $k \\lt 0$ のときは減少です。<strong>半減期</strong> $T$ の放射性同位体では $k = -\\frac{\\ln 2}{T}$ なので、$m(t) = m_0\\cdot 2^{-t/T}$ です。</p>\n       <p><strong>ニュートンの冷却の法則。</strong> 温度が一定 $T_o$ の環境にある物体の温度は、温度差に比例する速さで変化します：\n       $T' = -k(T - T_o)$、$k \\gt 0$。解は $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$ です。定数 $k$ はふつう、もう 1 回の測定から求めます。</p>",
    {
     "fig": "v3-rast",
     "caption": "青い曲線は $y' = ky$、$y(0) = 1$ の解、緑の曲線は同じ $k$ と環境収容力 $K$（破線）をもつロジスティック方程式の解です。最初はほとんど同じですが、ロジスティック曲線は値 $K$ に落ち着きます。"
    },
    "<p><strong>ロジスティック方程式</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$ は、資源が限られた中での増加を表します。$K$ は環境収容力です。\n       この方程式は変数分離形（ベルヌーイの方程式でもあります）で、その解は\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       定常解は $P = 0$（不安定）と $P = K$（安定）です。個体数が最も速く増えるのは $P = \\frac{K}{2}$ のときで、それは時刻 $t = \\frac{\\ln A}{r}$ です。</p>",
    "<p><strong>RC 回路。</strong> 電圧 $U$ の電源から抵抗 $R$ を通してコンデンサーを充電するとき、電荷について $Rq' + \\frac{q}{C} = U$ が成り立ちます。\n       初期電荷が 0 ならば、コンデンサーの電圧は $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$ です。ここで $\\tau = RC$ は <strong>時定数</strong> です\n       （時間 $\\tau$ でコンデンサーは電圧 $U$ の約 $63\\,\\%$ まで充電されます）。</p>\n       <p><strong>溶液の混合。</strong> タンクに $V$ リットルの溶液が入っています。そこへ濃度 $c$ の溶液が毎分 $q$ リットル流れ込み、同じ速さで\n       よく混ざった溶液が流れ出ます。物質の量 $x(t)$ について、「流入量 − 流出量」の収支が成り立ちます：\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "温度 $90\\,{}^\\circ\\mathrm{C}$ のコーヒーが、室温 $20\\,{}^\\circ\\mathrm{C}$ の部屋に置かれています。$10$ 分後には $60\\,{}^\\circ\\mathrm{C}$ になりました。$40\\,{}^\\circ\\mathrm{C}$ まで冷めるのはいつですか。",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$。測定から $60 = 20 + 70\\,\\mathrm{e}^{-10k}$ なので、$\\mathrm{e}^{-10k} = \\frac{4}{7}$、$k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0.0560$ です。",
      "条件 $40 = 20 + 70\\,\\mathrm{e}^{-kt}$ から $\\mathrm{e}^{-kt} = \\frac{2}{7}$ なので、$t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3.5}{\\ln 1.75}$ です。",
      "<strong>$t \\approx 22.4$ 分。</strong>"
     ]
    },
    {
     "task": "タンクに $100$ リットルの水が入っていて、$5\\,\\mathrm{kg}$ の塩が溶けています。そこへ濃度 $0.2\\,\\mathrm{kg/l}$ の溶液が毎分 $4$ リットル流れ込み、同じ速さでよく混ざった溶液が流れ出ます。$25$ 分後、タンクには何 kg の塩がありますか。",
     "steps": [
      "収支：$x' = 0.2\\cdot 4 - \\frac{4}{100}x = 0.8 - 0.04x$、$x(0) = 5$。",
      "定数係数の線形方程式です。平衡値は $x = 20$ なので、$x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0.04t} = 20 - 15\\,\\mathrm{e}^{-0.04t}$ です。",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14.48\\,\\mathrm{kg}$。</strong> $t\\to\\infty$ のとき、塩の量は $20\\,\\mathrm{kg}$ に近づきます。"
     ]
    }
   ],
   "strings": {
    "rok": "年",
    "roky": "年",
    "rokov": "年",
    "deň": "日",
    "dni": "日",
    "dní": "日",
    "hodina": "時間",
    "hodiny": "時間",
    "hodín": "時間"
   }
  },
  "v3-charakteristicka": {
   "title": "定数係数の 2 階線形微分方程式",
   "summary": "基本解、ロンスキアン、特性方程式とその根の 3 つの型。",
   "theory": [
    "<p>区間 $I$ 上で連続な係数をもつ <strong>2 階線形斉次微分方程式</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ には、次の性質があります：</p>\n       <ul><li><strong>重ね合わせの原理：</strong> 解の一次結合はまた解になります。解全体は $2$ 次元のベクトル空間をなします。</li>\n       <li><strong>基本解</strong> とは、一次独立な 2 つの解の組 $y_1, y_2$ のことです。一般解は $y = C_1y_1 + C_2y_2$ です。</li>\n       <li><strong>ロンスキアン</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$。解 $y_1, y_2$ が一次独立であるのは、\n       $W(x)\\neq 0$ のとき、かつそのときに限ります（1 点で確かめれば十分です）。<strong>リウヴィルの公式</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$ が成り立ちます。</li></ul>",
    "<p><strong>定数係数。</strong> $y'' + py' + qy = 0$ に対して $y = \\mathrm{e}^{\\lambda x}$ を試します。代入して $\\mathrm{e}^{\\lambda x}$ で割ると、\n       <strong>特性方程式</strong> $\\lambda^{2} + p\\lambda + q = 0$ が得られます。その根によって次のようになります：</p>\n       <table class=\"tbl\"><tr><th>根</th><th>基本解</th><th>一般解</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ 実数</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ 重根</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$、$\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>複素数の根の場合は、複素数の解 $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$ の実部と虚部をとります。\n       高階の方程式でも同じ方法が使えます：$k$ 重根 $\\lambda$ には関数 $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$ が対応します。</p>",
    {
     "fig": "v3-rad2",
     "caption": "初期条件 $y(0) = 1$、$y'(0) = 0$ のもとでの方程式 $y'' + py' + qy = 0$ の解。根が複素数のときは解は振動し、実数のときは振動しません。根の実部の符号によって、解が減衰するか増大するかが決まります。"
    }
   ],
   "examples": [
    {
     "task": "コーシー問題 $y'' - y' - 6y = 0$、$y(0) = 1$、$y'(0) = 8$ を解きましょう。",
     "steps": [
      "特性方程式 $\\lambda^{2} - \\lambda - 6 = 0$ の根は $\\lambda_1 = 3$、$\\lambda_2 = -2$ です。",
      "一般解は $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$、導関数は $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$。",
      "条件：$C_1 + C_2 = 1$、$3C_1 - 2C_2 = 8$。ここから $C_1 = 2$、$C_2 = -1$。",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$。</strong>"
     ]
    },
    {
     "task": "方程式 $y'' + 4y' + 13y = 0$ の基本解を求め、そのロンスキアンを計算しましょう。",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$、$D = 16 - 52 = -36$、根は $\\lambda = -2\\pm 3\\mathrm{i}$。",
      "基本解：$y_1 = \\mathrm{e}^{-2x}\\cos 3x$、$y_2 = \\mathrm{e}^{-2x}\\sin 3x$。",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>。これはリウヴィルの公式 $W(x) = W(0)\\,\\mathrm{e}^{-4x}$ と一致します。"
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "2 階非斉次微分方程式",
   "summary": "解の構造 $y = y_h + y_p$、特別な右辺に対する未定係数法、定数変化法。",
   "theory": [
    "<p>方程式 $y'' + py' + qy = f(x)$ の一般解は $y = y_h + y_p$ です。ここで $y_h = C_1y_1 + C_2y_2$ は対応する斉次方程式の一般解、\n       $y_p$ は非斉次方程式の任意の 1 つの（特殊）解です。$f = f_1 + f_2$ ならば、$f_1$ と $f_2$ に対する特殊解を\n       別々に求めて足し合わせることができます（<strong>重ね合わせの原理</strong>）。</p>",
    "<p><strong>未定係数法</strong>（特別な右辺）。多項式 $P_m, Q_n$ を用いて $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$ と書けるとき、\n       特殊解を次の形で探します。\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       ここで $R_N, S_N$ は未知の係数をもつ $N$ 次の多項式、$k$ は特性方程式の根としての数 $\\alpha + \\beta\\mathrm{i}$ の重複度です\n       （根でなければ $k = 0$）。係数は方程式に代入して比較することで決めます。</p>\n       <table class=\"tbl\"><tr><th>右辺 $f(x)$</th><th>$y_p$ の形（共鳴でない場合）</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$（$q\\neq 0$ のとき）</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>$\\alpha + \\beta\\mathrm{i}$ が特性方程式の根であるとき（<strong>共鳴</strong>）は、形に $x$ を掛けます。重根のときは $x^{2}$ を掛けます。</p>",
    "<p><strong>定数変化法</strong> は、任意の連続な右辺に使えます。解を $y = C_1(x)y_1 + C_2(x)y_2$ の形で、条件\n       $C_1'y_1 + C_2'y_2 = 0$ のもとで探します。代入すると連立方程式\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       が得られ、その解は $C_1' = -\\frac{y_2 f}{W}$、$C_2' = \\frac{y_1 f}{W}$ です（$W$ はロンスキアン）。この方法は、たとえば右辺が\n       $\\frac{1}{\\cos x}$、$\\mathrm{tg}\\,x$、$\\ln x$、$\\frac{\\mathrm{e}^{x}}{x}$ のときに必要になります。</p>"
   ],
   "examples": [
    {
     "task": "方程式 $y'' - 3y' + 2y = \\mathrm{e}^{x}$ の一般解を求めましょう。",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ の根は $1$ と $2$ なので、$y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$ です。",
      "数 $\\alpha = 1$ は単根（共鳴）なので、$y_p = Ax\\mathrm{e}^{x}$ とおきます。すると $y_p' = A(1 + x)\\mathrm{e}^{x}$、$y_p'' = A(2 + x)\\mathrm{e}^{x}$。",
      "代入します：$A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$、よって $A = -1$。",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$。</strong>"
     ]
    },
    {
     "task": "定数変化法で、区間 $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$ 上の方程式 $y'' + y = \\dfrac{1}{\\cos x}$ を解きましょう。",
     "steps": [
      "$y_1 = \\cos x$、$y_2 = \\sin x$、$W = \\cos^{2} x + \\sin^{2} x = 1$。",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$ なので $C_1 = \\ln(\\cos x) + K_1$。$C_2' = \\frac{\\cos x}{\\cos x} = 1$ なので $C_2 = x + K_2$。",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$。</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "振動：減衰なし・減衰・強制振動",
   "summary": "方程式 $mx'' + cx' + kx = F(t)$、減衰振動・臨界減衰・過減衰、強制振動と共振。",
   "theory": [
    "<p>ばね定数 $k$ のばねにつけた質量 $m$ の物体が、速度に比例する抵抗力（係数 $c$）で減衰し、外力 $F(t)$ を受けるとき、運動は次の方程式にしたがいます。\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       ここで $\\omega_0 = \\sqrt{k/m}$ は <strong>固有角振動数</strong>、$\\delta = \\frac{c}{2m}$ は <strong>減衰係数</strong> です。\n       同じ方程式は、直列 $RLC$ 回路の電荷も表します：$Lq'' + Rq' + \\frac{1}{C}q = U(t)$。</p>\n       <p><strong>減衰のない振動</strong>（$c = 0$、$F = 0$）：$x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$。振幅は\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$、周期は $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$ です。</p>",
    "<p><strong>減衰振動</strong>（$F = 0$）。特性方程式 $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ の根は $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$ です：</p>\n       <ul><li>$\\delta \\lt \\omega_0$（<strong>減衰振動（不足減衰）</strong>、$c^{2} \\lt 4mk$）：$x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$、\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$。振幅が指数関数的に小さくなる振動です。</li>\n       <li>$\\delta = \\omega_0$（<strong>臨界減衰</strong>、$c = 2\\sqrt{mk}$）：$x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$。</li>\n       <li>$\\delta \\gt \\omega_0$（<strong>過減衰</strong>）：減少する 2 つの指数関数の和で、振動しない運動です。</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "$\\omega_0 = 2$、$x(0) = 1$、$x'(0) = 0$ のときの変位 $x(t)$。破線の曲線 $\\pm\\mathrm{e}^{-\\delta t}$ が減衰振動をはさんでいます。$\\delta = 2$ で臨界減衰になります。"
    },
    "<p><strong>強制振動</strong>、$F(t) = F_0\\cos\\omega t$。減衰がなく $\\omega\\neq\\omega_0$ のとき、特殊解は\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$ です。$\\omega = \\omega_0$ のときは <strong>共振</strong> が起こります：$x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$\n       となり、振幅は限りなく大きくなります。減衰があると自由振動は消え、定常状態が残ります。その振幅は\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       で、$\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$ のとき最大になります（$\\omega_0^{2} \\gt 2\\delta^{2}$ の場合）。</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "$\\omega_0 = 2$、$F_0/m = 1$ のときの共振曲線 $A(\\omega)$。減衰が小さいと、最大値は鋭く、固有振動数（破線）の近くにあります。"
    }
   ],
   "examples": [
    {
     "task": "質量 $1\\,\\mathrm{kg}$ の物体が、ばね定数 $16\\,\\mathrm{N/m}$ のばねにつけられ、係数 $c = 4\\,\\mathrm{kg/s}$ で減衰します。最初に $0.1\\,\\mathrm{m}$ だけ変位させ、静かに手を放します。$x(t)$ を求めましょう。",
     "steps": [
      "$x'' + 4x' + 16x = 0$ なので、$\\delta = 2$、$\\omega_0 = 4$。$\\delta \\lt \\omega_0$ なので、減衰振動（不足減衰）です。",
      "根は $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$、$\\omega_d = 2\\sqrt{3}$、$x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$。",
      "$x(0) = C_1 = 0.1$。$x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$ なので、$C_2 = \\frac{0.1}{\\sqrt{3}}$。",
      "<strong>$x(t) = 0.1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$。</strong>"
     ]
    },
    {
     "task": "問題 $x'' + 9x = 6\\cos 3t$、$x(0) = 0$、$x'(0) = 0$ を解きましょう。",
     "steps": [
      "外力の振動数が固有振動数に等しい（$\\omega = \\omega_0 = 3$）ので、共振が起こります：$x_p = t(A\\cos 3t + B\\sin 3t)$。",
      "代入すると $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$ となるので、$A = 0$、$B = 1$、$x_p = t\\sin 3t$。",
      "一般解は $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$。条件から $C_1 = 0$、$3C_2 = 0$。",
      "<strong>$x(t) = t\\sin 3t$</strong>。振幅は時間に比例して大きくなります。"
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "連立線形微分方程式と相図",
   "summary": "連立方程式 $\\mathbf{x}' = A\\mathbf{x}$、固有値と固有ベクトルによる解法、平衡点の分類。",
   "theory": [
    "<p>定数係数の 1 階連立線形微分方程式は $\\mathbf{x}' = A\\mathbf{x}$ の形をしています。ここで $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$、$A$ は\n       正方行列です。解全体は $n$ 次元のベクトル空間をなします。一次独立な $n$ 個の解を列とする行列を\n       <strong>基本行列</strong> といいます。$n$ 階の方程式はどれも連立方程式として書けます（たとえば $y'' + py' + qy = 0$ では $x_1 = y$、$x_2 = y'$ とおきます）。\n       逆に、$2\\times 2$ の連立方程式は <strong>消去法</strong> で 1 つの 2 階方程式に変換できます。</p>",
    "<p><strong>行列による方法。</strong> 解を $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$ の形で探します。代入すると $A\\mathbf{v} = \\lambda\\mathbf{v}$：$\\lambda$ は\n       行列 $A$ の <strong>固有値</strong>（方程式 $\\det(A - \\lambda I) = 0$ の根）、$\\mathbf{v}$ は対応する固有ベクトルです。</p>\n       <ul><li>相異なる実数 $\\lambda_1, \\lambda_2$：$\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$。</li>\n       <li>ベクトル $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$ をもつ複素数 $\\lambda = \\alpha\\pm\\beta\\mathrm{i}$：実数の解は\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$ の実部と虚部、つまり $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ と $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$ です。</li>\n       <li>固有ベクトルが $\\mathbf{v}$ 1 つだけの重根 $\\lambda$：2 つ目の解は $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$ です。ここで $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$。</li></ul>",
    "<p>平面の連立方程式の <strong>相図</strong> は、$xy$ 平面上に軌道 $(x(t), y(t))$ を描いたものです。点 $\\mathbf{0}$ は平衡点（定常点）で、\n       $\\det A\\neq 0$ のときはただ 1 つです。その型は固有値、またはトレース $\\mathrm{tr}\\,A$ と行列式で決まります：</p>\n       <table class=\"tbl\"><tr><th>固有値</th><th>型</th><th>安定性</th></tr>\n       <tr><td>実数、異符号（$\\det A \\lt 0$）</td><td>鞍点</td><td>不安定</td></tr>\n       <tr><td>実数、同符号</td><td>結節点</td><td>$\\lambda \\lt 0$ のとき安定</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$、$\\alpha\\neq 0$</td><td>渦状点（らせん）</td><td>$\\alpha \\lt 0$ のとき安定</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>渦心点（閉曲線）</td><td>安定だが漸近安定ではない</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "連立方程式 $x' = a_{11}x + a_{12}y$、$y' = a_{21}x + a_{22}y$ の相図。オレンジ色の直線は（固有値が実数のとき）固有ベクトルの方向で、小さな三角形は $t$ が増えるときの運動の向きを示します。行列の成分を変えて、表のすべての型を見てみましょう。"
    }
   ],
   "examples": [
    {
     "task": "初期条件 $x(0) = 3$、$y(0) = 1$ のもとで、連立方程式 $x' = x + 2y$、$y' = 2x + y$ を解きましょう。",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$ なので、$\\lambda_1 = 3$、$\\lambda_2 = -1$。",
      "固有ベクトル：$\\lambda_1 = 3$ に対して $\\mathbf{v}_1 = (1, 1)^{T}$、$\\lambda_2 = -1$ に対して $\\mathbf{v}_2 = (1, -1)^{T}$。",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$。条件：$C_1 + C_2 = 3$、$C_1 - C_2 = 1$ なので、$C_1 = 2$、$C_2 = 1$。",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$、$y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$。</strong> 固有値は異符号なので、平衡点は鞍点です。"
     ]
    },
    {
     "task": "連立方程式 $x' = y$、$y' = -5x - 2y$ の平衡点の型を求め、2 階の方程式と比べましょう。",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$、$\\mathrm{tr}\\,A = -2$、$\\det A = 5$、特性方程式は $\\lambda^{2} + 2\\lambda + 5 = 0$。",
      "固有値 $-1\\pm 2\\mathrm{i}$ の実部は負です：<strong>安定な渦状点</strong> で、軌道はらせんを描いて原点に近づきます。",
      "この連立方程式は方程式 $x'' + 2x' + 5x = 0$（減衰振動）を書き直したもので、その解は $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$ です。"
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "ラプラス変換",
   "summary": "定義、変換表、導関数の変換、部分分数分解による逆変換、初期値問題の解法。",
   "theory": [
    "<p><strong>ラプラス変換</strong> は、$t \\ge 0$ で定義された関数 $f(t)$ に、複素（ここでは実）変数 $s$ の関数を対応させます：\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       $f$ が区分的に連続で <strong>指数位数</strong>、つまり $|f(t)| \\le M\\mathrm{e}^{s_0t}$ ならば、積分は $s \\gt s_0$ で収束します。\n       たとえば $s \\gt a$ のとき $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$ です。変換は線形で、\n       連続関数に対しては単射なので、像 $F$ に対してただ 1 つの原像 $f = \\mathcal{L}^{-1}\\{F\\}$ が存在します。</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>ここで $u$ はヘヴィサイド関数（単位ステップ関数）です。たたみ込み $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ の像は積 $F(s)G(s)$ です。</p>",
    "<p><strong>初期値問題の解法。</strong> 導関数の像の公式によって、定数係数の線形微分方程式は $Y(s)$ についての代数方程式に変わり、\n       初期条件は自動的にその中に組み込まれます。そこから $Y(s)$（ふつうは有理関数）を求め、\n       <strong>部分分数</strong> に分解し、変換表を使って $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$ を求めます。この方法は、右辺が不連続な場合や衝撃的な場合に特に便利です。</p>",
    {
     "fig": "v3-laplace",
     "caption": "解き方の流れ：変換、像の領域での代数的な変形、逆変換。"
    }
   ],
   "examples": [
    {
     "task": "関数 $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$ のラプラス変換を求めましょう。",
     "steps": [
      "線形性と変換表を使います：$\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$、$\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$、$\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$。",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong>（$s \\gt 2$）。"
     ]
    },
    {
     "task": "ラプラス変換を使って、問題 $y'' + 3y' + 2y = 0$、$y(0) = 1$、$y'(0) = 0$ を解きましょう。",
     "steps": [
      "変換します：$s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$、よって $(s^{2} + 3s + 2)Y = s + 3$。",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$（部分分数分解。たとえば隠蔽法（カバーアップ法）による）。",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$。</strong> 検算：$y(0) = 1$、$y'(0) = -2 + 2 = 0$。"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$。特性方程式は $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$ で、$\\mathrm{tr}\\,A = {@2}$、$\\det A = {@3}$ です。根は $\\lambda_1 = {@4}$ と $\\lambda_2 = {@5}$ です。",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$、${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$、${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$、$N_x = {@1}$ なので、$\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ は $x$ だけの関数です。よって $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$、$k = {@10}$ です。確認：$(\\mu M)_y = {@11}$、$(\\mu N)_x = {@12}$。",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$、$A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$ です。$P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$ なので、約 ${@8}$ 個体です。",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$、$A = \\frac{{@2}}{{@3}}$ です。条件 $P = \\frac{K}{2}$ は $A\\mathrm{e}^{-{@4}t} = 1$ を意味するので、$t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ 年です。",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$ で、測定から $k = {@2} \\approx {@3}$ です。条件 ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ から $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ 分です。",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$（2 重根）",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$、$\\mathcal{L}\\{y'\\} = sY{@2}$ です。代入すると $({@3})Y = {@4}{@5}{@6}$ なので、${@7}$ です。",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$、$\\det A = {@1}$、特性方程式の判別式は $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$ です。{@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$、解は $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ で、$C_1 = x(0) = {@3}$、${@4}C_2 = x'(0) = {@5}$ なので $C_2 = {@6}$ です。振幅は $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$ です。",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$ です。条件 $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ から $\\mathrm{e}^{-t/\\tau} = {@2}$ なので、$t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$ です。",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$、つまり $\\varphi$ は定数で、それを 0 に選びます",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$、つまり $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$ です。条件 $2^{-t/{@1}} = {@2}$ の対数をとると $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$ です。",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$、$y_p'' = 2A$ です。代入して係数を比べると：$x^{2}$ の係数：${@0} = {@1}$、$A = {@2}$。$x$ の係数：${@3} = {@4}$、$B = {@5}$。定数項：${@6} = {@7}$、$C = {@8}$。",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$、$y_p'' = 0$ です。代入すると ${@0}{@1} = {@2}$。係数を比べると、$x$ の係数は ${@3} = {@4}$ なので $A = {@5}$、定数項は ${@6} = {@7}$ なので $B = {@8}$ です。",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$ なので、$K = {@1}$、$m = {@2}$ です。これはリウヴィルの公式 $W(x) = W(0)\\,\\mathrm{e}^{-px}$（$p = {@3}$）と一致します。",
  ", teda $a = {@0}$": "、つまり $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "分子の定数項が同次性をくずしています。このような方程式は、まず 2 直線の交点へ平行移動する必要があります。",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "平衡状態、つまり $x' = 0$ となる塩の量（kg）はいくつですか？",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "コンデンサーの電圧（ボルト）はいくつになりますか？ {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "方程式 $y' = {@0}$ の方向場の線分は、点 $[{@1}; {@2}]$ でどんな傾きをもちますか？",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "物体の温度は何度になりますか？ 小数第 1 位まで四捨五入しましょう。",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "$Y(s)$ における $\\frac{1}{{@0}}$ の係数全体、つまり $A$ はいくつですか？",
  "Aký je súčin koreňov?": "根の積はいくつですか？",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "振幅は和 $|C_1| + |C_2|$ ではなく $\\sqrt{C_1^{2} + C_2^{2}}$ です（同じ振動数のコサインとサインの合成）。",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "振動数による強制振動の振幅の変化",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "ベルヌーイの微分方程式 $y'{@0} = {@1}$ を、置換 $z = y^{k}$ によって定数係数の線形方程式 $z' + Pz = Q$ に変換します。$k$、$P$、$Q$ を求めましょう（分数は $a/b$ の形で）。",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "特性方程式 ${@0}$ の判別式は $D = {@1}$ で、根は {@2} です。{@3}、一般解は ${@4}$ です。",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "特性方程式 ${@0}$ の根は $\\lambda_1 = {@1}$、$\\lambda_2 = {@2}$ です。$\\mathbf{v} = (1, m)^{T}$ について $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ の第 1 行から ${@3} - \\lambda{@4} = 0$ なので、$\\mathbf{v}_1 = {@5}$、$\\mathbf{v}_2 = {@6}$ です。$t = 0$ のとき $C_1 + C_2 = {@7}$、${@8} = {@9}$ で、ここから $C_1 = {@10}$、$C_2 = {@11}$ です。",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "特性方程式 ${@0}$ の根は ${@1}$ と ${@2}$ なので、${@3}$ は単根（共振）で、$y_p$ の形には因数 $x$ がつきます。$y_p' = A(1{@4}){@5}$、$y_p'' = A({@6}{@7}){@8}$。代入すると $x$ を含む項は打ち消し合い、$A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$ が残るので、$A = {@16}$ です。",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "特性方程式 ${@0}$ の根は {@1} なので、${@2}$ です。$y$ と $y'$ に $x = 0$ を代入すると連立方程式 {@3} が得られ、その解は $C_1 = {@4}$、$C_2 = {@5}$ です。",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "特性方程式 ${@0}$ は{@1}をもちます。右辺は{@2}{@3}なので $\\alpha = {@4}$ で、これは特性方程式の{@5}（$k = {@6}$）。よって $y_p = {@7}$ です。",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "特性方程式（$y''$ の係数で割ったもの）は $\\lambda^{2} + p\\lambda + q = 0$ です。その根の和はいくつですか？",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "${@0}$ で割っただけですが、解には $x^{2}$、つまり $x_0^{2}$ があります。",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "$(C_1 + C_2x){@0}$ の導関数の $x = 0$ での値は ${@1}C_1 + C_2$ です。指数関数の微分から出る項を忘れています。",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "$C_2\\sin {@0}t$ の導関数は ${@1}C_2\\cos {@2}t$ なので、$C_2$ は $x'(0)$ ではなく $\\frac{x'(0)}{\\omega_0}$ です。",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "$y_p$ の導関数は 0 ではありません。$y_p' = {@0}A{@1}$ と $y_p'' = {@2}A{@3}$ も代入する必要があります。",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "行列式が負なので、固有値は符号の異なる実数です：鞍点。",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "一般解に $x = 0$ と $y = y_0$ を代入して、$C$ を求めましょう。",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "$y = \\mathrm{e}^{\\lambda x}$ を代入すると、{@0}${@1}$ が得られます。解と係数の関係より $\\lambda_1 + \\lambda_2 = {@2}$、$\\lambda_1\\lambda_2 = {@3}$ で、根は {@4} です。一般解は ${@5}$ です。",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "$x = 0$ を代入します：$y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$、ここから $C = {@3}$ です。初期値問題の解は $y = {@4}$ です。",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "$x_p = A\\cos {@0}$ を代入します：$x_p'' = -{@1}A\\cos {@2}$ なので、$({@3} - {@4})A = {@5}$、$A = {@6}$ です。{@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "代入します：$C\\cdot {@0}^{2}{@1} = {@2}$ なので、${@3}C = {@4}$、$C = {@5}$ です。",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "代入します：${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$ なので、$\\frac{C}{{@4}} = {@5}$、$C = {@6}$ です。（確認：方程式の左辺は $(xy)'$ で、$xy = {@7} + C$ です。）",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "解 $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ に $P = \\frac{K}{2}$ を代入しましょう。$A\\mathrm{e}^{-rt} = 1$ が得られます。",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "$t = 0$ を代入し、定数についての連立方程式を解きましょう。$C_1$ と $C_2$ を入力しましょう。",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "$x$ の代わりに $tx$、$y$ の代わりに $ty$ を代入しましょう。同次形の方程式なら右辺は変わりません。",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "$y_1, y_2, y_1', y_2'$ に $x = 0$ を代入しましょう。",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "一般解とその導関数に $x = 0$ を代入し、できた連立方程式から $C_1$ を求めましょう。",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "一般解に $x = x_0$、$y = y_0$ を代入して、$C$ を求めましょう。",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "一般解に $x = x_0$、$y = y_0$ を代入し、$C$ についての一次方程式を解きましょう。",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "$x_p$ を方程式に代入しましょう：$(\\omega_0^{2} - \\omega^{2})A = F_0$。",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "$y_p = Ax + B$ を方程式に代入し、$x$ の係数と定数項を比べましょう。",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "$y_p = A{@0}$ を方程式に代入して、$A$ を求めましょう。",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "$y_p$ を方程式に代入し、コサインとサインの係数を比べましょう。$A$、$B$ についての 2 つの方程式の連立方程式が得られます。",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "定数 $y_p = K$ を方程式に代入し（$y_p' = 0$）、注意して $K$ を求めましょう。",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "コサインの 2 階導関数は負になります：$x_p'' = -{@0}A\\cos {@1}$。",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "指数関数的に減少するのは物体の温度そのものではなく、周囲の温度との差 $T - T_o$ です。",
  "Exponenciálny a logistický rast": "指数関数的成長とロジスティック成長",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "指数は根の実部 $\\alpha = -\\frac{p}{2}$ です。その符号を確かめましょう。",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "関数 $1 + y^{2}$ は 0 にならないので、定常解は存在しません。変数を分離すると $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$ なので、$\\mathrm{arctg}\\,y = {@1} + C$、$y = \\mathrm{tg}({@2} + C)$ です。定数は引数の中にあります。たとえば $y = \\mathrm{tg}({@3}) + C$ は $C\\neq 0$ のとき方程式を満たしません。",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "関数 ${@0}$ は方程式 ${@1} = 0$ の基本解をなします。そのロンスキアンは $W(x) = K\\mathrm{e}^{mx}$ の形です。$K$ と $m$ を求めましょう。",
  "Fázový portrét lineárnej sústavy": "線形系の相図",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "三角関数が現れるのは根が複素数（$D \\lt 0$）のときです。ここでの判別式はいくつですか？",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "同次方程式 $y'{@0} = 0$ から $y' = {@1}$ です。指数の符号を確かめましょう。",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "同次方程式 $y'{@0} = 0$ の解は $y_h = C{@1}$ です。特殊解を定数 $y_p = K$ として求めます：${@2}K = {@3}$ なので $K = {@4}$ です。一般解は ${@5}$ です。",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "最も高い導関数の階数を探しましょう。かっこの外の指数、たとえば $(y')^{3}$ は階数を上げません。",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "積分因子は $\\mu = {@0}$ です：$(y{@1})' = {@2}$。積分すると $y{@3} = {@4} + B$ なので、$y = {@5} + B{@6}$ です（特殊解は $y_p = A{@7}$ を代入しても求められます：$A({@8}{@9}) = {@10}$、$A = {@11}$）。条件から ${@12} + B = {@13}$ なので $B = {@14}$ です。答え：$A = {@15}$、$B = {@16}$。",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "積分因子は ${@0}$ で、解は $y = {@1} + \\frac{C}{{@2}}$ の形です。初期条件から $C$ を求めましょう。",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "$M$ を $x$ で積分し（$\\varphi(y)$ を除く）、$F$ のこの部分の点 $[{@0}; {@1}]$ での値を計算しましょう。",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "$M$ を $x$ で積分し、未知関数 $\\varphi(y)$ を加え、$F_y$ と $N$ を比べて求めましょう。最後に点を代入しましょう。",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "積分すると $\\mathrm{arctg}\\,y = \\dots$ になります。$y$ について解くには、アークタンジェントの逆関数を使う必要があります。",
  "Integrálne krivky rovnice y' = xy": "方程式 y' = xy の積分曲線",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "部分分数分解の係数に、初期条件から出る項を足しましょう。",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "それぞれの関数を微分して方程式に代入しましょう。解はすべての $x$ について方程式を満たさなければなりません。",
  "Keďže $c^{2} = 4mk$": "$c^{2} = 4mk$ なので",
  "Keďže $c^{2} \\gt 4mk$": "$c^{2} \\gt 4mk$ なので",
  "Keďže $c^{2} \\lt 4mk$": "$c^{2} \\lt 4mk$ なので",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "${@0}\\neq {@1}$ なので、共振ではありません。",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "$A$ が正なのは、振動が外力と同位相であることを意味します。",
  "Koeficient p": "係数 p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "（質量で割ったあとの）$x'$ の係数は $\\delta$ ではなく $2\\delta$ です。まず 2 で割りましょう。",
  "Koeficient q": "係数 q",
  "Koeficient rastu k": "成長率 k",
  "Koeficient útlmu δ": "減衰係数 δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "係数は最高次から順に求めましょう：まず $x^{2}$ の項から $A$、次に $B$、最後に $C$ です。",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "定数 $A$ は条件 $P(0) = \\frac{K}{1 + A} = P_0$ から求まるので、$\\frac{K}{P_0}$ ではなく $A = \\frac{K - P_0}{P_0}$ です。",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "解の定数 $C$ は積分因子 ${@0}$ で割られています。$x = 2$ のときも割る必要があります。",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "崩壊定数は $\\frac{1}{T}$ ではなく $k = \\frac{\\ln 2}{T}$ です。時間 $T$ で量はちょうど半分にならなければなりません。",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "定数は積分のときに、つまり等式 $\\mathrm{arctg}\\,y = \\dots + C$ の中で現れます。そこから $y$ を求めると、$C$ はどこに入りますか？",
  "Koľko gramov izotopu zostane? {@0}": "同位体は何グラム残りますか？ {@0}",
  "Koľko je $y({@0})^{2}$?": "$y({@0})^{2}$ はいくつですか？",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "個体数はいくつになりますか？ 整数に四捨五入しましょう。",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "${@0}$ 分後、タンクには塩が何キログラムありますか？ {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "${@0}$ {@1}の間に、半減期の何倍の時間が経過しますか？ {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "方程式 $y' = {@0}(1 + y^{2})$ の一般解はどの関数ですか？",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "方程式 $y'{@0} = {@1}$ の一般解はどの関数ですか？",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "方程式 ${@0} = 0$ の一般解はどの関数ですか？",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "方程式 ${@0}$ の解はどの関数ですか？",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "同次形、つまり $y' = \\varphi\\left(\\frac{y}{x}\\right)$ の形に書ける方程式はどれですか？",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "初期値問題 ${@0} = 0$、$y(0) = {@1}$、$y'(0) = {@2}$ の解のラプラス変換 $Y(s)$ はどれですか？",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "ラプラス変換を使って初期値問題 $y'{@0} = {@1}$、$y(0) = {@2}$ を解きましょう。解は $y(t) = A{@3} + B{@4}$ の形です。$A$ と $B$ を求めましょう。",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "リウヴィルの公式：$W(x) = W(0)\\mathrm{e}^{-px}$。",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "分母は方程式の特性多項式です。$s$ の係数は方程式の $y'$ の係数と同じ符号です。",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "分母を因数分解します：${@0} = (s{@1})(s{@2})$。部分分数分解：$F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$。留数（隠蔽）法で：$A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$、$B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$。よって $f(t) = {@17}{@18}$ です。",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "$y_p$ の形の $x$ の累乗の指数は、数 ${@0}$ の特性方程式の根としての重複度に等しくなります。この重複度を確かめましょう。",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "定数が掛け算の形で現れるのは方程式 $y' = g(x)y$ の場合です（対数を経由）。ここでは $\\frac{1}{1 + y^{2}}$ を積分するので、定数は引数の中に足し算の形で入ります。",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "まず $\\det A$ の符号を確かめましょう。固有値の符号が異なるかどうかがそれで決まります。",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "まず測定から $k$ を求め、それから対数をとって $T(t) = T^{*}$ を解きましょう。",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "$f(t) = {@0}$ に対して $F(s) = \\mathcal{L}\\{f\\}(s)$ とします。$F({@1})$ を計算しましょう（分数で正確に、または小数第 3 位まで）。",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "電気容量 ${@0}\\,\\mu\\mathrm{F}$ の帯電していないコンデンサーを、抵抗 ${@2}\\,\\mathrm{k\\Omega}$ の抵抗器を通して電圧 ${@1}\\,\\mathrm{V}$ の電源で充電します。",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "$M$ の $x$ での積分と $N$ の $y$ での積分を足してはいけません。$x$ と $y$ の両方を含む項を 2 回数えることになります。$N$ からは、まだ足りない項だけをとりましょう。",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "減衰のない振動子 $x'' + {@0}x = 0$ の初期条件は $x(0) = {@1}$、$x'(0) = {@2}$ です。振動の振幅を求めましょう。{@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "減衰のない振動子に周期的な外力がはたらきます：$x'' + {@0}x = {@1}$。定常的な強制振動は $x_p = A\\cos {@2}$ の形です。$A$ を求めましょう（分数または整数で）。",
  "Nosná kapacita K": "環境収容力 K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "タンクには{@1}が ${@0}$ リットル入っています。そこへ{@2}流れ込み、よく混ざった溶液が同じ速さで流れ出ます。${@3}$ 分後、タンクには塩が何キログラムありますか？ {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "微分方程式 ${@0}$ の特性方程式の根を求めましょう。セミコロンで区切って入力しましょう。",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "固有値と $(1, m)^{T}$ の形の固有ベクトルを求め、$t = 0$ を代入して $C_1$、$C_2$ についての連立方程式を解きましょう。",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "連立方程式 {@0} の係数行列の固有値を求めましょう。セミコロンで区切って入力しましょう。",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "関数 $F(s) = \\dfrac{{@0}}{{@1}}$ の逆ラプラス変換 $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ を求めましょう。結果は $f(t) = A{@2} + B{@3}$ の形です。$A$ と $B$ を求めましょう。",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "体積は変わらないので、タンク内の濃度は $\\frac{x}{{@0}}$ です。収支：$x' = {@1}-\\frac{{@2}}{{@3}}x$、$x(0) = {@4}$。平衡値は $cV = {@5}$ なので、$x(t) = {@6}$、$x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$ です。",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "指数関数のラプラス変換は $\\frac{1}{s + a}$ ではなく $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$ です。",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "累乗のラプラス変換は $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$ です。階乗を忘れています。",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "変数を分離します：$y\\,dy = {@0}\\,dx$ なので $\\frac{y^{2}}{2} = {@1} + C$、つまり $y^{2} = {@2} + 2C$ です。条件から $2C = {@3}$ なので、$y^{2} = {@4} + {@5}$ です。$y(0) \\gt 0$ なので正の平方根をとります：$y = \\sqrt{{@6} + {@7}}$、$y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$。",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "変数を分離して $\\frac{dy}{y^{2}} = k\\,dx$ とし、$\\int y^{-2}\\,dy = -\\frac{1}{y}$ であることを覚えておきましょう。",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "変数を分離して $y\\,dy = kx\\,dx$ とし、積分しましょう。平方根の符号は初期条件から決めましょう。",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "和の平方根は平方根の和ではありません：$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$。まず根号の中を足しましょう。",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "塩の流出量は濃度 × 流量、つまり $\\frac{x}{V}\\cdot q$ です。したがって指数にも流量 $q$ が入らなければなりません。",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "代入して確かめましょう：$y = {@0}x$ のとき $xy' = {@1}x$ ですが、右辺 ${@2}y$ は異なります。",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "確認：$\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$。$M$ を $x$ で積分すると $F = {@1} + \\varphi(y)$。条件 $F_y = N$ から{@2}。よって $F(x, y) = {@3}$、$C = F({@4}, {@5}) = {@6}$ です。",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "特殊解を $A\\mathrm{e}^{cx}$ の形で求め（方程式に代入）、定数 $B$ は初期条件から求めましょう。",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "方程式 ${@0} = {@1}$ の特殊解を $y_p = Ax + B$ の形で求めます。$A$ と $B$ を求めましょう。",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "方程式 ${@0} = {@1}$ の特殊解を $y_p = Ax^{2} + Bx + C$ の形で求めます。$A$、$B$、$C$ を求めましょう。",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "方程式 ${@0} = {@1}$ の特殊解を $y_p = A{@2} + B{@3}$ の形で求めます。$A$ と $B$ を求めましょう。",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "減衰のない振動の周期は $T = 2\\pi\\sqrt{m/k}$ です。",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "$x_p$ を代入すると $KA\\cos {@0} = {@1}\\cos {@2}$ になります。$K$ を求めましょう。",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "$y_p = Ax{@0}$ を代入すると $A(2r + p){@1}$ が残ります。$2r + p$ を計算しましょう。",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "$y_p = A{@0}$ を代入すると $A(c + a) = b$ になります。微分から $c$ が出て、項 ${@1}$ からは $-a$ ではなく $+a$ が加わります。",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "$y_p = A{@0}$ を代入すると $A(c^{2} + pc + q){@1}$ になります。かっこの中の値を計算しましょう。",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "$z' = (1-n)y^{-n}y'$ を代入したら、方程式全体に $1 - n$ を掛ける必要があります。つまり係数 $p$ と $q$ にも掛けます。",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "代入すると、${@0}$ の係数についての方程式は $uA{@1} = {@2}$ の形になります。$u$ を求めましょう。",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "積分すると $-\\frac{1}{u} = \\ln x + C$ になります。$C$ を求めましょう（分数または整数）。",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "積分すると $\\frac{u^{2}}{2}$ になります。$u^{2}$ を求めるときは両辺に 2 を掛ける必要があり、対数の項にも掛けます。",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "積分して 2 を掛けると $y^{2} = {@0} + K$ になります。初期条件から定数 $K$ を求めましょう。",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "積分すると $-\\frac{1}{y} = {@0} + C$ になります。初期条件から $C$ を求めましょう（分数または整数）。",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "置換 $y = ux$ をして積分したら、$u^{2}$ を求めて $u({@0})^{2}$ を計算しましょう。{@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "置換 $y = ux$ をすると $u = {@0} + C$ になります。初期条件から $C$ を求めましょう。",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "変換して $Y(s)$ を求めたら、分数 ${@0}$ を部分分数に分解しましょう。$\\frac{1}{{@1}}$ の係数はいくつですか？",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "$x$ で割ると：$y' + \\frac{{@0}}{x}y = {@1}$。積分因子は $\\mathrm{e}^{{@2}\\ln x} = {@3}$ で、方程式は $({@4}y)' = {@5}$ になるので、${@6}y = {@7} + C$、$y = {@8} + \\frac{C}{{@9}}$ です。条件から $1 + C = {@10}$、$C = {@11}$。よって $y(2) = {@12}{@13}$ です。",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "$x^{2}$ で割ると：$y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$。置換 $y = ux$：$u + xu' = u^{2} + u$ なので $\\frac{du}{u^{2}} = \\frac{dx}{x}$ です（解 $u = 0$ は条件を満たしません）。積分すると $-\\frac{1}{u} = \\ln x + C$、条件から $C = {@0}$。ここから $u = \\frac{{@1}}{1{@2}}$、$y = \\frac{{@3}}{1{@4}}$ なので、$y({@5}) \\approx {@6}$ です。",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "$xy$ で割ると：$y' = \\frac{y}{x} + {@0}\\frac{x}{y}$。置換 $y = ux$：$u + xu' = u + \\frac{{@1}}{u}$ なので $u\\,du = {@2}\\frac{dx}{x}$、$\\frac{u^{2}}{2} = {@3} + C$ です。条件 $u(1) = {@4}$ から $u^{2} = {@5} + {@6}$ で、$y \\gt 0$ なので $y = x\\sqrt{{@7} + {@8}}$ です。よって $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$ です。",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "${@0}$ で割ると：$x'' + {@1}x' + {@2}x = 0$。",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "割合 ${@0}\\,\\%$ にあたるのは、指数関数そのものではなく式 $1 - \\mathrm{e}^{-t/\\tau}$ です。",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "完全微分方程式の条件は $M_y = N_x$ です。$M_y = {@0}$、$N_x = {@1}a{@2}{@3}$ です。{@4}の係数を比べると ${@5}a = {@6}${@7} が得られます。するとポテンシャル関数は $F = {@8}$ です。",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "リウヴィルの公式より $W(x) = W(0)\\mathrm{e}^{-px}$ です。指数の符号を確かめましょう。",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "ニュートンの冷却の法則より $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$ です。測定から $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$ なので、$k = {@5} \\approx {@6}$ です。$T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$。",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "解と係数の関係より、根の和は $-p$ です。",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "変換表と線形性より、$s \\gt {@1}$ のとき $F(s) = {@0}$ です。$s = {@2}$ を代入すると：$F({@3}) = {@4} = {@5} \\approx {@6}$。",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "物体の運動は方程式 ${@0}x'' + {@1}x' + {@2}x = 0$ に従います（質量 ${@3}\\,\\mathrm{kg}$、減衰 ${@4}\\,\\mathrm{kg/s}$、ばね定数 ${@5}\\,\\mathrm{N/m}$）。どのような運動ですか？",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "放射性同位体の半減期は ${@0}$ {@1}です。試料には最初に同位体が ${@2}\\,\\mathrm{g}$ 含まれています。${@3}$ {@4}後、同位体は何グラム残りますか？ {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "放射性同位体の半減期は ${@0}$ {@1}です。量がもとの量の ${@3}\\,\\%$ に減るのは何{@2}後ですか？ {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "個体数はロジスティック方程式 $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$（$t$ の単位は年）に従い、最初の個体数は ${@2}$ です。",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "$c^{2}$ と $4mk$ を比べるか、減衰係数 $\\delta = \\frac{c}{2m}$ と固有角振動数 $\\omega_0 = \\sqrt{k/m}$ を比べましょう。",
  "Porovnaj absolútne členy a urči $B$.": "定数項を比べて $B$ を求めましょう。",
  "Porovnaj absolútne členy a urči $C$.": "定数項を比べて $C$ を求めましょう。",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "$x$ の係数を比べて $A$ を求めましょう。",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "$x$ の係数を比べて $B$ を求めましょう。",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "$x^{2}$ の係数を比べて $A$ を求めましょう。",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "$W = y_1y_2' - y_1'y_2$ を使いましょう。指数はリウヴィルの公式 $W(x) = W(0)\\mathrm{e}^{-px}$ で確かめられます。",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "$\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$、$\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$、$\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$、$\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$ を使いましょう。",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ と $\\mathcal{L}\\{y'\\} = sY - y(0)$ を使って、$Y$ を求めましょう。",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "連立方程式 $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$ の第 1 行を使いましょう。",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "公式 $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$（$A = \\frac{K - P_0}{P_0}$）を使いましょう。",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "$y'(0)$ の符号に注意しましょう：$\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ で、右辺に移項すると $+y'(0)$ になります。",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "符号に注意しましょう：$\\int u^{-2}\\,du = -\\frac{1}{u}$。",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "符号に注意しましょう：$\\int y^{-2}\\,dy$ は $\\frac{1}{y}$ ではなく $-\\frac{1}{y}$ です。",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "右辺は 0 次ではなく 2 次の同次式です：$tx$、$ty$ を代入すると $t^{2}$ 倍になります。$\\varphi\\left(\\frac{y}{x}\\right)$ の形には 0 次が必要です。",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "右辺は定数（0 次の多項式）だけなので、多項式 $Ax + B$ はここでは必要ありません。",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "$x_p = Bt{@0} {@1}$ のとき $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ です（$t$ を含む項は打ち消し合います）。比べると ${@7}{@8}B = {@9}$ なので $B = {@10}$ です。振幅 $|B|t$ は時間とともに直線的に増加します。",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "$y = \\cos {@0}x$ のとき $y'' = -{@1}\\cos {@2}x$ なので、$y'' + {@3}y = 0$ です。$\\cos {@4}x$ なら $y'' = -{@5}\\cos {@6}x$ となり、指数関数の 2 階導関数は正です。",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "$y = \\mathrm{e}^{-{@0}x}$ のとき $y'' = {@1}\\mathrm{e}^{-{@2}x}$ なので、$y'' - {@3}y = 0$ です。$\\sin {@4}x$ では $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$ になります。",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "$y = x^{{@0}}$ のとき $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$ です。$y = {@6}x$ なら $xy' = {@7}x$ ですが、${@8}y = {@9}x$ です。",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "$y' + py = qy^{n}$ では $z = y^{1-n}$ とおき、$z' + (1-n)pz = (1-n)q$ になります。",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "$y\\neq 0$ のとき変数を分離します：$\\frac{dy}{y} = {@0}\\,dx$ なので $\\ln|y| = {@1} + c$、$y = C\\mathrm{e}^{{@2}}$ です（解 $y = 0$ は $C = 0$ の場合に含まれます）。条件から $C = {@3}$ なので、$y = {@4}$、$y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$ です。",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "$y_p = A\\mathrm{e}^{cx}$ を代入すると $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$ になります。",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "パラメータ $a$ がいくつのとき、方程式 $({@0})\\,dx + ({@1})\\,dy = 0$ は完全微分方程式になりますか？",
  "Pre dva rôzne reálne korene": "異なる 2 つの実数の根の場合",
  "Pre dvojnásobný koreň": "2 重根の場合",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "共役複素数の根 $\\alpha\\pm\\beta\\mathrm{i}$ の場合",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "1 次の多項式には完全な多項式 $Ax + B$ が必要で、$Ax$ だけでは足りません。",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "方程式を $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ の形に書き直して、$\\delta$ を求めましょう。",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "方程式を $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ の形に書き直しましょう。すると $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$ です。",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "$x = 0$ では $C\\cdot\\mathrm{e}^{0} = C$ ですが、解にはさらに定数項 ${@0}$ があり、それを $y_0$ から引く必要があります。",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "$x = 0$ では両方の指数関数が 1 になるので、$y(0) = A + B$ です。$y(0)$ から $A$ の値を引く必要があります。",
  "Pri $x = 1$ je $u(1) = y(1)$.": "$x = 1$ では $u(1) = y(1)$ です。",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "$y = \\cos \\omega x$ のとき $y'' = -\\omega^{2}y$ です。方程式の係数 ${@0}$ は $\\omega$ ではなく $\\omega^{2}$ です。",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "$y = \\mathrm{e}^{rx}$ のとき $y'' = r^{2}y$ です。方程式の係数 ${@0}$ は $r$ ではなく $r^{2}$ です。",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "定数項で $y_p'' = 2A$ を忘れています。2 階導関数も定数を生みます。",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "積の微分で $x\\mathrm{e}^{rx}$ を微分すると、$y_p''$ には $rA\\mathrm{e}^{rx}$ だけでなく項 $2rA\\mathrm{e}^{rx}$ が出てきます。",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "${@0}$ を $x$ で微分すると係数 ${@1}a$ が出てきます。係数の等式をさらに ${@2}$ で割る必要があります。",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "積 ${@0}\\cdot(\\dots)$ を微分すると、指数関数の微分から項 ${@1}C_1$ も出てきます。",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "積 $t{@0} {@1}$ を 2 回微分すると、$t$ を含まない同じ項が 2 つ出てきて、合わせて $2\\omega_0$ 倍になります。",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "2 重根では指数関数が 1 つしかありません。もう 1 つの独立な解は $x$ を掛けて得られます。",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "2 重根では指数関数に $x^{2}$ ではなく $x$ を掛けます（$x^{2}$ は 3 重根の場合です）。",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "${@0}$ を積分するときに指数で割るのを忘れています：$\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$。",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "根が複素数のとき、実数の指数関数は解になりません。$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$ の形を使いましょう。",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "根 $\\alpha\\pm\\beta\\mathrm{i}$ では、指数には実部 $\\alpha$、三角関数には虚部 $\\beta$ が入ります。取り違えています。",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "定数項を比べるときに、導関数から出る項 ${@0} = {@1}$ を忘れています。",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "定数項を方程式の反対側に移項するときに、符号を変えていません。",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "単根 $r$ による共振では、$y_p = Ax\\mathrm{e}^{rx}$ を代入すると式 $A(2r + p)\\,\\mathrm{e}^{rx}$ になります。",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "$2^{-t/T} = p$ を解くときは、対数を $\\ln 2$ で割る必要があります（または底が 2 の対数を使います）。",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "分数 $\\frac{C}{x_0}$ から $C$ を求めるときは、$x_0$ で割るのではなく掛けます。",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "隠蔽法では残りの分数に $s = a$ を代入します。すると分母には $b - a$ ではなく $a - b$ が残ります。",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "$ax^{n}$ の原始関数は $\\frac{a}{n+1}x^{n+1}$ です。",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "初期値問題 $y'{@0} = {@1}$、$y(0) = {@2}$ の解は $y = A{@3} + B{@4}$ の形です。$A$ と $B$ を求めましょう。",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "初期値問題 ${@0} = 0$、$y(0) = {@1}$、$y'(0) = {@2}$ の解を ${@3}$ の形に書きます。$C_1$ と $C_2$ を求めましょう。",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "解は $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$ です。$\\mathrm{e}^{-k}$ は 2 回目の測定から求めましょう。",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "解は和 $y_h + y_p$ です。定数の特殊解には指数関数を掛けません。",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "解は $y_h$（$y$ の係数の符号を変えた指数をもつ指数関数）と定数の特殊解の和です。",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "解は $\\mathrm{e}^{\\lambda x}$ の形で、$\\lambda$ は特性方程式の根です。根の符号を確かめましょう。",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "解は $G(0) = 0$ として $y = C\\mathrm{e}^{G(x)}$ の形です。初期条件から $C$ を求めましょう。",
  "Riešenie rovnice y″ + py′ + qy = 0": "方程式 y″ + py′ + qy = 0 の解",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "方程式 $2^{-t/T} = p$ を対数をとって解きましょう：$t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$。",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "方程式 $({@0})\\,dx + ({@1})\\,dy = 0$ は完全微分方程式です。その一般解を $F(0, 0) = 0$ として $F(x, y) = C$ の形に書きます。点 $[{@2}; {@3}]$ を通る積分曲線の $C$ を求めましょう。",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "方程式 $({@0})\\,dx {@1} {@2}\\,dy = 0$（$x \\gt 0$）は完全微分方程式ではありません。$\\mu = x^{k}$ の形の積分因子をもちます。$k$ を求めましょう。",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "方程式 $x'' + {@0}x = {@1}$ は共振を表します。その特殊解は $x_p = Bt{@2} {@3}$ の形です。$B$ を求めましょう。",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "方程式 $y' = f(x, y)$ は、点 $[x; y]$ での接線の傾きが $f(x, y)$ であることを表します。点の座標を代入しましょう。",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "方程式 $y' = {@0}$ は分子も分母も同じ次数の同次関数なので、$x \\to tx$、$y \\to ty$ を代入すると $t$ が約分され、右辺は $\\frac{y}{x}$ だけで決まります。ほかの方程式は次数の異なる項や定数項を含むので、$tx$ と $ty$ を代入しても $t$ は約分されません。",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "方程式 ${@0} = {@1}$ は $y_p = Ax{@2}$ の形の特殊解をもちます。$A$ を求めましょう。",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "方程式 ${@0} = {@1}$ は $y_p = A{@2}$ の形の特殊解をもちます。$A$ を求めましょう。",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "方程式 ${@0}x'' + {@1}x = 0$ では $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$ です。周期は $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$ です。",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "方程式は同次形です：$y' = \\frac{y}{x}{@0}$。置換 $y = ux$ により $u + xu' = u{@1}$ なので、$u' = {@2}\\frac{{@3}}{x}$、$u = {@4} + C$ です。条件 $u(1) = {@5}$ から $C = {@6}$ なので、$y = x({@7}{@8})$、$y({@9}) = {@10}({@11}{@12}) \\approx {@13}$ です。",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "方程式は $y' = g(x)\\,y$ の形です。変数を分離して $\\frac{dy}{y} = g(x)\\,dx$ とし、積分しましょう。$y = C\\mathrm{e}^{G(x)}$ が得られます。",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "差 $M_y - N_x$ は、変数 $x$ だけでなく関数 $N = {@0}$ で割る必要があります。",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "判別式 $c^{2} - 4mk$ の符号で決まります。計算し直しましょう：減衰の 2 乗と積 $mk$ の 4 倍を比べます。",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "特性方程式の判別式の符号、つまり $c^{2}$ と $4mk$ の比較で決まります：$c^{2} = {@0}$、$4mk = {@1}$。{@2}、{@3}です。（同じことですが、$\\delta = \\frac{c}{2m} = {@4}$、$\\omega_0 = \\sqrt{k/m} = {@5}$ です。）",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "$F$ を部分分数 $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ に分解して、$A$ を求めましょう。",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "分母を積 $(s - a)(s - b)$ に因数分解し、$F$ を部分分数 $\\frac{A}{s-a} + \\frac{B}{s-b}$ に分解しましょう。すると $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$ です。",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "崩壊は方程式 $m' = -km$ に従うので、$k = \\frac{\\ln 2}{T}$ として $m(t) = m_0\\mathrm{e}^{-kt}$、つまり $m(t) = m_0\\cdot 2^{-t/T}$ です。$m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$。",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "階数は、導関数が何乗されているかではなく、方程式に現れる最も高い導関数で決まります。方程式に現れる最も高い導関数は{@0}なので、この方程式は <strong>{@1} 階</strong>です。",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "ラプラス変換による初期値問題の解法の流れ",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "鞍点になるのは行列式が負（符号の異なる実数の固有値）のときだけです。$\\det A$ を計算し直しましょう。",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "点 $[x; y]$ での場の傾きは右辺の値 $f(x, y)$ です：$f({@0}, {@1}) = {@2} = {@3}$。点 $[{@4}; {@5}]$ を通る積分曲線は、その点で傾き ${@6}$ の接線をもちます。",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "同次形の方程式 y' = (x + y)/(x − y) の方向場",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "方程式 y' = x − y の方向場と積分曲線",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "安定性はトレース $\\mathrm{tr}\\,A$（固有値の和、または実部の 2 倍）の符号で決まります。確かめましょう。",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "定常解 $y = 0$ は条件を満たしません。$y\\neq 0$ のとき：$\\frac{dy}{y^{2}} = {@0}\\,dx$ なので、$-\\frac{1}{y} = {@1} + C$ です。条件から $C = {@2}$。ここから $y = \\frac{{@3}}{1{@4}}$ で、これは区間 $\\langle 0; {@5}\\rangle$ で定義されています（そこでは分母が正）。代入すると $y({@6}) = \\frac{{@7}}{{@8}}{@9}$。",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "渦心点になるのはトレースが 0 のときだけです。それ以外では軌道は点に近づくか、点から遠ざかります。",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "置換は $y^{n-1}$ ではなく $z = y^{1-n}$ です。この指数は、方程式を割ったあとの累乗 $y^{n}$ を消すためのものです。",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "連立方程式 {@0} の初期条件は $x(0) = {@1}$、$y(0) = {@2}$ です。解を $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$ の形に書きます。ここで $\\lambda_1 \\gt \\lambda_2$ で、固有ベクトルの第 1 成分は $1$ です。$C_1$ と $C_2$ を求めましょう。",
  "Sčítaj: $F({@0}) = ?$": "足しましょう：$F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "質量 ${@0}\\,\\mathrm{kg}$ の物体が、ばね定数 ${@1}\\,\\mathrm{N/m}$ のばねで減衰なしに振動しています。振動の周期は何秒ですか？ {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "温度 ${@0}{@1}$ の物体を温度 ${@2}{@3}$ の部屋に置きます。${@4}$ 分後、その温度は ${@5}{@6}$ です。",
  "Tlmený harmonický oscilátor": "減衰調和振動子",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "減衰振動子は方程式 ${@0}x'' + {@1}x' + {@2}x = 0$ に従います。その減衰振動の角振動数 $\\omega_d$ を求めましょう。{@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "これは指数（累乗）であって、導関数の階数ではありません。階数は方程式に現れる最も高い導関数で決まります。",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "これは減衰のない振動子の固有角振動数 $\\omega_0$ です。減衰があると振動数は下がります：$\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$。",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "これはコンデンサーの放電です。充電では電圧は 0 から $U$ に向かって増加します：$u_C = U(1 - \\mathrm{e}^{-t/\\tau})$。",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "方程式を変換し（$\\mathcal{L}\\{y'\\} = sY - y(0)$）、$Y(s)$ を求めて部分分数に分解しましょう。",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "変換すると：$sY{@0}{@1} = {@2}$ なので、$Y = {@3}{@4}$ です。分解：${@5} = {@6}{@7}$。逆変換すると $y = ({@8}{@9}){@10}{@11}$ なので、$A = {@12}$、$B = {@13}$ です。",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "ここでは $n = {@0}$ で、置換は $z = y^{1-n}$ なので $k = 1 - {@1} = {@2}$ です。方程式を $y^{{@3}}$ で割ると $y^{-n}y'{@4} = {@5}$ になります。$z' = (1-n)y^{-n}y'$ なので、方程式に $1 - n = {@6}$ を掛けると $z'{@7} = {@8}$ です。よって $P = (1-n)p = {@9}$、$Q = (1-n)q = {@10}$ です。",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "$(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ の形になるのは 2 重根（$D = 0$）のときだけです。ここでの判別式はいくつですか？",
  "Urči $A$ (zlomok alebo celé číslo).": "$A$ を求めましょう（分数または整数）。",
  "Urči $A$.": "$A$ を求めましょう。",
  "Urči $C = F({@0}, {@1})$.": "$C = F({@0}, {@1})$ を求めましょう。",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "解 $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$ の $C_1$ を求めましょう。",
  "Urči $C_2$ (zlomok alebo celé číslo).": "$C_2$ を求めましょう（分数または整数）。",
  "Urči $C_2$.": "$C_2$ を求めましょう。",
  "Urči $\\omega_0^{2}$.": "$\\omega_0^{2}$ を求めましょう。",
  "Urči $\\omega_d$. {@0}": "$\\omega_d$ を求めましょう。{@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "条件 $F_y = N$ から $\\varphi(0) = 0$ となる $\\varphi(y)$ を求め、$\\varphi({@0})$ を計算しましょう。",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "$y({@0})$ を求めましょう（符号は初期条件に合わせて）。",
  "Urči amplitúdu kmitov. {@0}": "振動の振幅を求めましょう。{@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "置換 $z = y^{k}$ の指数 $k$ を求めましょう（分数は $a/b$ の形で）。",
  "Urči exponent $m$.": "指数 $m$ を求めましょう。",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "$G(x) = \\int_0^x g(t)\\,dt$ として、指数の値 $G({@0})$ を求めましょう。{@1}",
  "Urči koeficient $P$ pri $z$.": "$z$ の係数 $P$ を求めましょう。",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "解 $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ の定数 $A$ を求めましょう。",
  "Urči oba korene (oddelené bodkočiarkou).": "2 つの根を求めましょう（セミコロンで区切って）。",
  "Urči pravú stranu $Q$.": "右辺 $Q$ を求めましょう。",
  "Urči rád diferenciálnej rovnice ${@0}$.": "微分方程式 ${@0}$ の階数を求めましょう。",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "連立方程式 {@0} の平衡点 $[0; 0]$ の種類を判定しましょう。",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "大きい方の固有値 $\\lambda_1$ を求めましょう。",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "未定係数法で方程式 ${@0} = {@1}$ の特殊解を求めるとき、どの形でおけばよいですか？",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "分子には次数の異なる項があるので（$x^{2}$ は 2 次、$y$ は 1 次）、代入しても $t$ は約分されません。",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "$2\\times 2$ 行列の固有値は方程式 $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ の根です。",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "固有値は実部 ${@0}$ の複素数です：{@1}。",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "固有値は同符号の実数で（積 ${@0} \\gt 0$）、その和は ${@1}$ です：{@2}。",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "固有値は純虚数です：渦心点。",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "$\\lambda_1$ に対する固有ベクトルは $(1, m_1)^{T}$ の形です。$m_1$ を求めましょう。",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "$\\lambda_2$ に対する固有ベクトルは $(1, m_2)^{T}$ の形です。$m_2$ を求めましょう。",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "関数 F(x, y) = x² − xy + y² の等高線",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "方程式を $x$ で割り、積分因子 $\\mu = \\mathrm{e}^{\\int p\\,dx}$ を使いましょう。$p = \\frac{n}{x}$ のとき $\\mu = x^{n}$ です。",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "方程式を $x^{2}$ で割り、$y = ux$ を代入して、変数を分離しましょう：$\\frac{du}{u^{2}} = \\frac{dx}{x}$。",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "方程式を $xy$ で割ると $y' = \\frac{y}{x} + k\\frac{x}{y}$ になります。それから置換 $y = ux$ を使いましょう。",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "$y$ を求めて $y({@0})$ を計算しましょう（分数または整数）。",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "求めたのは $\\frac{C}{{@0}}$ で、$C$ そのものではありません。方程式にさらに ${@1}$ を掛けましょう。",
  "Vypočítaj $M_y - N_x$.": "$M_y - N_x$ を計算しましょう。",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "$W(0)$、つまり $K$ の値を計算しましょう。",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "$\\frac{M_y - N_x}{N}$ を計算しましょう。$\\frac{k}{x}$ になれば、積分因子は $\\mathrm{e}^{k\\ln x} = x^{k}$ です。",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "$\\frac{\\partial M}{\\partial y}$ と $\\frac{\\partial N}{\\partial x}$ を計算し、同じ累乗の係数を比べましょう。",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "$\\mathrm{e}^{-{@0}k}$ を計算しましょう。小数第 4 位まで四捨五入しましょう。",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "$\\tau = RC$ を計算し（キロオーム × マイクロファラド = ミリ秒）、$u_C = U(1 - \\mathrm{e}^{-t/\\tau})$ に代入しましょう。",
  "Vypočítaj $u({@0})$. {@1}": "$u({@0})$ を計算しましょう。{@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "$y(2)$ を計算しましょう（分数または小数）。",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "$y({@0}) = C\\mathrm{e}^{G({@1})}$ を計算しましょう。{@2}",
  "Vypočítaj $y({@0})$. {@1}": "$y({@0})$ を計算しましょう。{@1}",
  "Vypočítaj determinant $\\det A$.": "行列式 $\\det A$ を計算しましょう。",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "指数関数の項 ${@0}$ のラプラス変換の $s = {@1}$ での値を計算しましょう（分数）。",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "三角関数の項のラプラス変換の $s = {@0}$ での値を計算しましょう（分数）。",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "項 ${@0}$ のラプラス変換の $s = {@1}$ での値を計算しましょう（分数）。",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "振動の周期を秒で求めましょう。{@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "係数行列のトレース $\\mathrm{tr}\\,A$ を計算しましょう。",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "トレース、行列式、判別式 $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ を計算し、解説の表を使いましょう。",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "固有角振動数 $\\omega_0$（$\\mathrm{s^{-1}}$）を計算しましょう。小数第 3 位まで四捨五入しましょう。",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "時定数 $\\tau = RC$ をミリ秒で計算しましょう。",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "計算したのは $y$ ではなく $u = \\frac{y}{x}$ です。もとに戻す置換 $y = ux$ を忘れずに。",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "計算したのは $y$ ではなく $u = \\frac{y}{x}$ の値です。もとに戻す置換 $y = ux$ を忘れずに。",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "計算したのは $y$ ではなく補助関数 $u = \\frac{y}{x}$ の値です。もとに戻す置換 $y = ux$ を忘れずに。",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "$1 - \\mathrm{e}^{-t/\\tau} = p$ を $t$ について解きましょう：$t = -\\tau\\ln(1 - p)$。",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "$\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ を解いて、固有値を入力しましょう（セミコロンで区切って）。",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "初期値問題 $x^{2}y' = y^{2} + xy$、$y(1) = {@0}$（$x \\gt 0$）を解いて、$y({@1})$ を計算しましょう。{@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "初期値問題 $xy'{@0} = {@1}$、$y(1) = {@2}$ を $x \\gt 0$ で解いて、$y(2)$ を計算しましょう。答えは正確に入力しましょう（分数または小数）。",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "初期値問題 $xyy' = y^{2}{@0}$、$y(1) = {@1}$（$x \\gt 0$）を解いて、$y({@2})$ を計算しましょう。{@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "初期値問題 $y' = {@0}$、$y(0) = {@1}$ を解いて、$y({@2})$ を計算しましょう。答えは分数または整数で入力しましょう。",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "初期値問題 $y' = {@0}$、$y(0) = {@1}$ を解いて、$y({@2})$ を計算しましょう。{@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "初期値問題 $yy' = {@0}$、$y(0) = {@1}$ を解いて、$y({@2})$ を計算しましょう。",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "初期値問題 ${@0}$、$y(1) = {@1}$（$x \\gt 0$）を解いて、$y({@2})$ を計算しましょう。{@3}",
  "Vyrieš sústavu a urči $A$.": "連立方程式を解いて $A$ を求めましょう。",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "$\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ を利用して、$y$ を求めましょう。",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "式 $\\frac{M_y - N_x}{N}$ は $\\frac{k}{x}$ の形です。$k$ を求めましょう。",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "式 $\\sqrt{m/k}$ は $\\frac{1}{\\omega_0}$ です。周期はさらにその $2\\pi$ 倍です。",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "0 を含まない区間での方程式 $xy' + y ={@0}$ の一般解は $y = {@1} + \\frac{C}{x}$ です。初期条件 $y({@2}) = {@3}$ に対する $C$ を求めましょう。",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "方程式 $xy' = 2y{@0}$ の一般解は $y = Cx^{2}{@1}$ です。初期条件 $y({@2}) = {@3}$ に対する $C$ を求めましょう。答えは整数または分数で入力しましょう。",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "方程式 $y' = {@0}{@1}$ の一般解は $y = C{@2}{@3}$ です。解が初期条件 $y(0) = {@4}$ を満たすように定数 $C$ を求めましょう。",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "ロンスキアンは $W = y_1y_2' - y_1'y_2$ です。項の順序で $K$ の符号が決まります。",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "ロンスキアンは因数 $\\mathrm{e}^{\\alpha x}$ をもつ 2 つの関数の積からなるので、指数は $2\\alpha$ です。",
  "Y(s) vyjadrené": "Y(s) を求める",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "測定から $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$ の定数 $k$ を求めましょう。小数第 4 位まで四捨五入しましょう。",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "半減期ごとに量は半分になります：$m(t) = m_0\\cdot 2^{-t/T}$。",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "電圧が求める値に達するのは何ミリ秒後ですか？ {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "温度が求める値まで下がるのは何分後ですか？ 小数第 1 位まで四捨五入しましょう。",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "個体数が環境収容力の半分に達するのは何年後ですか？ {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "2 階導関数を忘れています：$y_p'' = -{@0}y_p$ なので、コサインについての方程式の $A$ の係数は $q - {@1}$ です。",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "関数 $\\varphi(y)$ を忘れています。$M$ を $x$ で積分したあと、条件 $F_y = N$ からそれを決める必要があります。",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "一般解の定数項 ${@0}$ を忘れています。まずそれを反対側に移項しましょう。",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "定数 $C$ を忘れています。初期条件 $y(0)$ から $C$ が求まり、それを指数関数に掛ける必要があります。",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "塩の流入 $cq$ を忘れています。それがなければタンクの塩は減るだけです。解は平衡値 $cV$ に近づきます。",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "初期条件を忘れています：$\\mathcal{L}\\{y'\\} = sY - y(0)$ なので、$Y(s)$ には項 $\\frac{y(0)}{s - a}$ もあります。",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "因数 $s{@0}$ を隠して、$s = {@1}$ を代入しましょう。",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "質量とばね定数を取り違えています：$\\omega_0 = \\sqrt{k/m}$ で、周期は $2\\pi\\omega_0$ ではなく $\\frac{2\\pi}{\\omega_0}$ です。",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "変換を取り違えています：$\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$、$\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$ です。",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "座標を取り違えています。点 $[x; y]$ では第 1 座標が $x$、第 2 座標が $y$ です。$f(x, y)$ の正しい場所に代入しましょう。",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "$y''$ を $\\lambda^{2}$ に、$y'$ を $\\lambda$ に、$y$ を $1$ に置き換えて、二次方程式を解きましょう。",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "解を $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$ と書き、定数を条件から求めましょう。振幅は $\\sqrt{C_1^{2} + C_2^{2}}$ です。",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "方程式を $y' = \\frac{y}{x} + a$ の形に書き、$y = ux$、$y' = u + xu'$ を代入して積分しましょう。",
  "Začiatočná hodnota y(0)": "初期値 y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "$x_p$ を 2 回微分して（$t$ と三角関数の積）代入しましょう。$\\omega = \\omega_0$ のときは $t$ を含まない項だけが残ります。",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "一般解を微分し、$y$ と $y'$ に $x = 0$ を代入して、2 つの一次方程式の連立方程式を解きましょう。",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "右辺の指数にある数 $\\alpha$ が特性方程式の何重の根かを調べ、その回数だけ基本の形に $x$ を掛けましょう。",
  "Zo začiatočnej podmienky urči $B$.": "初期条件から $B$ を求めましょう。",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "収支の式 $x' = (\\text{流入量}) - (\\text{流出量}) = cq - \\frac{q}{V}x$ を立てて、線形方程式を解きましょう。",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "特性方程式を立て、判別式から根の種類を判定し、それに対応する解の形を使いましょう。",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "$A$ が負なのは、振動が外力と逆位相であることを意味します（外力の振動数が固有振動数より大きい）。",
  "absolútnom člene": "定数項",
  "algebra": "代数",
  "algebraická rovnica": "代数方程式",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "2 階導関数",
  "dvojnásobný koreň ${@0}$": "2 重根 ${@0}$ ",
  "je dvojnásobným koreňom": "2 重根です",
  "je jednoduchým koreňom": "単根です",
  "k = 0: veličina sa nemení": "k = 0：量は変化しない",
  "konštanta": "定数",
  "korene ${@0}$ a ${@1}$": "根 ${@0}$ と ${@1}$ ",
  "kritické tlmenie": "臨界減衰",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "臨界減衰：振動せずに最も速く戻る",
  "krát ${@0}$": "に ${@0}$ を掛けたもの",
  "litre": "リットル",
  "litrov": "リットル",
  "logistická krivka s K = {@0}": "K = {@0} のロジスティック曲線",
  "nadkritické tlmenie (aperiodický pohyb)": "過減衰（非周期運動）",
  "nadkritické tlmenie: aperiodický pohyb": "過減衰：非周期運動",
  "neizolovaný rovnovážny bod (det A = 0)": "孤立していない平衡点 (det A = 0)",
  "nestabilné ohnisko": "不安定な渦状点",
  "nestabilný degenerovaný uzol": "不安定な退化結節点",
  "nestabilný uzol": "不安定な結節点",
  "netlmené kmity, ω₀ = 2": "減衰のない振動、ω₀ = 2",
  "nie je koreňom": "根ではありません",
  "po vydelení číslom ${@0}$": "${@0}$ で割ると、",
  "podkritické tlmenie (tlmené kmity)": "減衰振動（不足減衰）",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "不足減衰：減衰振動、ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "1 次の多項式",
  "polčas ln 2 / |k| = {@0}": "半減期 ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "像 Y(s) について",
  "prvá": "1 階導関数",
  "riešenie y(t)": "解 y(t)",
  "rovnica pre y(t)": "y(t) の方程式",
  "rozklad na parciálne zlomky": "部分分数分解",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "濃度 ${@0}\\,\\mathrm{kg/l}$ の溶液が{@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "塩 ${@0}\\,\\mathrm{kg}$ が溶けた溶液",
  "rýchlosťou ${@0}$ {@1} za minútu": "毎分 ${@0}$ {@1}の割合で",
  "sedlo": "鞍点",
  "stabilné ohnisko": "安定な渦状点",
  "stabilný uzol": "安定な結節点",
  "tabuľka obrazov": "変換表",
  "tretia": "3 階導関数",
  "začiatočná úloha": "初期値問題",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$、$y_p' = {@2}(-A{@3} + B{@4})$ です。代入して係数を比べます：${@5}$ の係数：${@6} = {@7}$、${@8}$ の係数：${@9} = {@10}$。連立方程式の解は $A = {@11}$、$B = {@12}$ です。",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} スイッチを入れてから ${@1}\\,\\mathrm{ms}$ 後、コンデンサーの電圧はいくつですか？ 答えはボルトで小数第 2 位まで四捨五入しましょう。",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} 置いてから ${@1}$ 分後の温度は何度ですか？ 答えは小数第 1 位まで四捨五入しましょう。",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} ${@1}$ 年後の個体数はいくつですか？ 答えは整数に四捨五入しましょう。",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} コンデンサーの電圧が電源電圧の ${@1}\\,\\%$ に達するのは何ミリ秒後ですか？ {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} 置いてから何分後に物体の温度が ${@1}{@2}$ まで下がりますか？ 答えは小数第 1 位まで四捨五入しましょう。",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} 環境収容力の半分（そのとき増加が最も速い）に達するのは何年後ですか？ {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}$x'' + 2\\delta x' + \\omega_0^{2}x = 0$ の形と比べると、$2\\delta = {@1}$、$\\delta = {@2}$、$\\omega_0^{2} = {@3}$ です。特性方程式の根は $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$ なので、$\\omega_d = \\sqrt{{@7}} \\approx {@8}$ です。",
  "· riešením je priamka y = x − 1": "· 直線 y = x − 1 が解",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "時定数は $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$ です。$u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$ なので、$u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$ です。",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "固有値が実数（結節点）か複素数（渦状点、渦心点）かは、判別式 $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ の符号で決まります。",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "項 $\\frac{y}{x}$ は問題ありませんが、2 番目の項は比 $\\frac{y}{x}$ だけでは決まりません。",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "項 $p\\,y'$ は $p(sY - y(0))$ に変換されます。右辺に移項すると $+p\\,y(0)$ になります。符号を確かめましょう。",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "${@1}^{2}{@2}{@3} = {@4}\\neq 0$ なので、数 ${@0}$ は特性方程式の根ではありません。$y_p = A{@5}$ のとき $y_p' = {@6}A{@7}$、$y_p'' = {@8}A{@9}$ で、代入すると $A\\cdot {@10}\\,{@11} = {@12}{@13}$ なので、$A = {@14}$ です。",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "右辺の指数にある数 ${@0}$ は特性方程式の根です（共振）。形に $x$ を何回掛ける必要がありますか？",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "数 ${@0}\\mathrm{i}$ は特性方程式の根ではないので、共振ではありません。",
  "čas zdvojnásobenia ln 2 / k = {@0}": "倍増時間 ln 2 / k = {@0}",
  "čistej vody": "純水",
  "čistá voda {@0}": "純水が{@0}",
  "štvrtá": "4 階導関数",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0}（2 重根）",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i（複素数の根）",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1}（異なる実数の根）",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">ω = {@1} で最大、振幅 {@2}</span>（F₀/m = 1 のとき）",
  "liter": "リットル"
 }
});
