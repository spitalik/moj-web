/* 日本語: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/v7/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "v7-chyby": {
   "title": "誤差と計算の精度",
   "summary": "絶対誤差と相対誤差、有効数字、浮動小数点数とマシンイプシロン、誤差の伝播、問題の条件数、減算による桁落ち。",
   "theory": [
    "<p>数値計算の結果は、ほとんど常に <strong>近似値</strong> にすぎません。誤差にはいくつかの原因があります：<em>モデル</em>\n       （現実を単純化した記述）、<em>入力データ</em>（測定）、<em>方法</em>（級数や極限のような無限の過程を有限の過程で置き換える：方法の誤差、\n       あるいは離散化誤差）、そして有限の桁数で計算するときの <em>丸め</em> です。</p>\n       <p>$x$ を真の値、$\\tilde{x}$ をその近似値とすると、<strong>絶対誤差</strong> は $\\Delta = |x-\\tilde{x}|$、<strong>相対誤差</strong> は\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$（$x\\neq 0$ のとき）で、しばしば百分率で表します。ふつう真の値はわからないので、誤差の <em>評価</em>（誤差限界）を扱います：\n       $|x-\\tilde{x}|\\le\\varepsilon$ となる数 $\\varepsilon$ で、$x=\\tilde{x}\\pm\\varepsilon$ と書きます。相対誤差は単位によらないので、より重要です：\n       1 mmの誤差は橋の長さにとっては無視できますが、金属板の厚さにとっては非常に大きな誤差です。</p>",
    "<p><strong>有効数字。</strong> 近似値 $\\tilde{x}$ の $10^{-k}$ の位の数字は、$|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$ のとき <em>有効</em>（信頼できる）であるといいます。\n       有効数字の桁数は、左から最初の $0$ でない数字から最後の有効な数字までを数えます。たとえば誤差がたかだか $0.004$ の $\\tilde{x}=23.4718$ は小数第2位までが有効で\n       （$0.004\\le 0.005$）、有効数字は2, 3, 4, 7の4桁です。小数第 $k$ 位への <strong>四捨五入</strong> で生じる誤差はたかだか $\\frac{1}{2}\\cdot 10^{-k}$ なので、\n       正しく四捨五入された数では、書かれた数字はすべて有効です。</p>",
    "<p><strong>浮動小数点数。</strong> コンピュータは実数を浮動小数点形式 $\\pm m\\cdot\\beta^{e}$ で記憶します。ここで $\\beta$ は基数、仮数 $m$ は決まった桁数\n       $t$ をもち、指数 $e$ は限られた範囲にあります。IEEE 754 規格の倍精度（double）では $\\beta=2$、仮数 $t=53$ ビット、指数は\n       およそ $-1022$ から $1023$ までです。浮動小数点数の集合は有限で、その範囲を外れると <em>オーバーフロー</em>（大きすぎる数）や <em>アンダーフロー</em>（小さすぎる数）が起こります。</p>\n       <p><strong>マシンイプシロン</strong> $\\varepsilon_M$ とは、1とその次に大きい浮動小数点数との距離のことです。double では $\\varepsilon_M=2^{-52}\\approx 2.22\\cdot 10^{-16}$ です。\n       実数を浮動小数点数に丸めると $\\mathrm{fl}(x)=x(1+\\eta)$ となり、$|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$（単位丸め誤差）です。\n       したがって double は10進でおよそ15〜16桁の有効数字をもちます。$0.1$ でさえ2進法では有限の表記をもたないので、たとえば $0.1+0.2$ は正確には $0.3$ になりません。</p>",
    "<p><strong>誤差の伝播。</strong> 入力の誤差の評価について、（1次の近似で）次が成り立ちます。\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       関数 $y=f(x)$ については $\\Delta y\\approx|f'(x)|\\,\\Delta x$、多変数関数については $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$ です。\n       つまり、加減では絶対誤差が足し合わされ、乗除では相対誤差が足し合わされます。</p>\n       <p><strong>条件。</strong> 入力の小さな相対変化が結果の小さな相対変化しか引き起こさないとき、問題は <em>良条件</em> であるといいます。その尺度が\n       <strong>条件数</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ で、$\\delta y\\approx\\kappa\\,\\delta x$ が成り立ちます。たとえば $f(x)=\\ln x$ では $\\kappa=\\frac{1}{|\\ln x|}$ で、\n       $x$ が1に近いと大きな数になります：1に近い数の対数は悪条件の問題です。条件は <em>問題</em> の性質であり、<em>安定性</em> は\n       <em>アルゴリズム</em> の性質です。安定なアルゴリズムは、問題の条件に見合う以上に丸め誤差を拡大しません。</p>",
    "<p><strong>減算による桁落ち。</strong> 近い2つの数の差は悪条件です：$\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$ で、分母が小さいからです。\n       共通する上位の桁が引き算で消え、残った桁は誤差を含んでいます（いわゆる <em>桁落ち</em>）。引き算をなくす代数的な変形が役に立ちます：\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "円周率 $\\pi$ を値 $3.14$ で置き換えます。近似の絶対誤差、相対誤差、有効数字の桁数を求めなさい。",
     "steps": [
      "$\\Delta=|\\pi-3.14|=|3.14159\\ldots-3.14|\\approx 0.00159$。",
      "$\\delta=\\frac{0.00159}{3.14159}\\approx 0.000507=0.0507\\,\\%$。",
      "$0.00159\\le 0.005=\\frac{1}{2}\\cdot 10^{-2}$ なので、小数第2位までが有効です。近似値 $3.14$ の <strong>有効数字は3桁</strong> です。"
     ]
    },
    {
     "task": "方程式 $x^2-200x+1=0$ の小さいほうの解は $x=100-\\sqrt{9999}$ です。有効数字4桁の算術で、そのまま計算した場合と、引き算をなくす変形をした後の場合について計算しなさい。",
     "steps": [
      "有効数字4桁では $\\sqrt{9999}=99.99499\\ldots\\approx 100.0$ です。そのまま計算すると $100-100.0=0$ となり、すべての桁が失われ、相対誤差は100 %です。",
      "式を変形します：$100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$。",
      "すると $\\frac{1}{100+100.0}=\\frac{1}{200.0}=0.005000$ です。真の値は $0.0050001250\\ldots$ なので、結果の4桁はすべて有効です。",
      "問題そのものは良条件で、悪かったのはアルゴリズム（近い数どうしの引き算）だけです。"
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "方程式の数値解法",
   "summary": "解の分離、二分法、反復法（不動点反復）、ニュートン法と割線法、収束の次数と停止条件。",
   "theory": [
    "<p>公式では表せない方程式 $f(x)=0$ の解 $\\xi$ を求めます（たとえば $x=\\cos x$ や $x^5-x-1=0$）。まず解を <strong>分離</strong> します。つまり、解がちょうど1つだけある区間\n       $[a, b]$ を見つけます。<strong>中間値の定理</strong>（ボルツァーノの定理）により、$f(a)\\,f(b)&lt;0$ である連続関数は区間 $(a, b)$ に少なくとも1つの解をもちます。さらに\n       $f'$ が $[a, b]$ で符号を変えなければ、解はただ1つです。</p>\n       <p><strong>二分法（区間の二等分）。</strong> 中点 $c=\\frac{a+b}{2}$ を計算します。$f(a)\\,f(c)&lt;0$ ならば $[a, c]$ で、そうでなければ $[c, b]$ で続けます。各段階で\n       区間は半分になり、$n$ 回後の長さは $\\frac{b-a}{2^n}$ です。長さを $\\varepsilon$ 以下にするには $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ 回が必要です。\n       この方法は遅いですが、<em>常に</em> 収束し、必要なのは関数値の符号だけです。</p>",
    "<p><strong>反復法（不動点反復）。</strong> 方程式を $x=g(x)$ の形に書き直し、$x_{k+1}=g(x_k)$ を計算します。$g$ が区間 $I$ をそれ自身に写し、\n       $I$ 上で $|g'(x)|\\le q&lt;1$ ならば、$g$ は $I$ にただ1つの <em>不動点</em> $\\xi$ をもち、どの初期値 $x_0\\in I$ から始めても数列はそこに収束します（バナッハの不動点定理）。\n       次の評価が成り立ちます。\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       形の選び方が重要です：方程式 $x^2-2=0$ は $x=\\frac{2}{x}$（反復は振動し、$|g'(\\sqrt{2})|=1$）とも、$x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$（非常に速く収束）とも書けます。</p>",
    "<p><strong>ニュートン法（接線法）。</strong> 点 $x_k$ で関数のグラフを接線で置き換え、その接線と $x$ 軸との交点を次の近似値とします：\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       単純解（$f'(\\xi)\\neq 0$）で初期値が解に十分近ければ <strong>2次収束</strong> します：$|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$。\n       有効数字の桁数が各段階でおよそ2倍になります。<em>フーリエの条件：</em> $f'$ と $f''$ が $[a, b]$ で符号を変えず、$f(x_0)\\,f''(x_0)&gt;0$ となる端点から始めれば、\n       反復は単調に収束します。悪い初期値から始めると遠くへ飛んでしまうことがあり、重解では1次収束しかしません。</p>",
    {
     "fig": "v7-newton",
     "caption": "$f(x)=x^2-2$ に対するニュートン法：点 $(x_k, f(x_k))$ から接線を引き、その $x$ 軸との交点が $x_{k+1}$ です。わずか3回で、$\\sqrt{2}$ の近似の誤差は $10^{-6}$ から $10^{-12}$ 程度になります。"
    },
    "<p><strong>割線法</strong> は、導関数を直前の2つの近似値から作る差分商で置き換えます：\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       導関数を必要とせず、次数 $\\frac{1+\\sqrt{5}}{2}\\approx 1.618$ で収束します。割線を常に符号の異なる2点を通るように引くと（二分法のように）、\n       <em>はさみうち法</em>（regula falsi）になります。これは常に収束しますが、ふつうは1次収束にとどまります。</p>\n       <p><strong>収束の次数。</strong> $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$ のとき、方法の次数は $p$ であるといいます。$p=1$（1次収束）では $C&lt;1$ でなければなりません。二分法と反復法は\n       1次、割線法は $1.618$ 次、ニュートン法は2次です。<strong>停止条件：</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$、相対的には $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$、\n       $|f(x_k)|&lt;\\delta$、そして必ず最大反復回数も設けます。関数が非常に平らな場合、$|f(x_k)|$ が小さいだけでは解に近いことは保証されません。</p>"
   ],
   "examples": [
    {
     "task": "ニュートン法を使って、関数 $f(x)=x^2-5$ の根として $\\sqrt{5}$ を求めなさい。点 $x_0=2$ から始め、2回反復しなさい。",
     "steps": [
      "$f'(x)=2x$ なので、$x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$。",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2.25$。",
      "$x_2=2.25-\\frac{2.25^2-5}{4.5}=2.25-\\frac{0.0625}{4.5}\\approx 2.236111$。",
      "正確には $\\sqrt{5}=2.236068\\ldots$：誤差は $0.014$ から $0.00004$ に減り、2次収束に対応しています。"
     ]
    },
    {
     "task": "二分法で、区間 $[1, 2]$ にある方程式 $x^3-x-1=0$ の解の位置を絞り込みなさい（3回）。区間の長さを $10^{-6}$ 以下にするには何回必要ですか。",
     "steps": [
      "$f(1)=-1&lt;0$、$f(2)=5&gt;0$ なので、解は $[1, 2]$ にあります。",
      "$f(1.5)=0.875&gt;0$ → $[1, 1.5]$。$f(1.25)\\approx-0.297&lt;0$ → $[1.25, 1.5]$。$f(1.375)\\approx 0.225&gt;0$ → $[1.25, 1.375]$。",
      "$n$ 回後の区間の長さは $2^{-n}$ です。条件 $2^{-n}\\le 10^{-6}$ から $n\\ge 6\\log_2 10\\approx 19.93$、つまり <strong>20回</strong> です。",
      "解は $\\xi\\approx 1.3247$ です。ニュートン法なら同じ精度に4〜5回で到達します。"
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "補間と近似",
   "summary": "ラグランジュ形とニュートン形の補間多項式、差商、補間誤差、ルンゲ現象と最小二乗法。",
   "theory": [
    "<p><strong>補間の問題。</strong> 互いに異なる <em>節点</em> $x_0, x_1, \\dots, x_n$ と値 $y_0, y_1, \\dots, y_n$（たとえば測定値や表の値）が与えられています。\n       すべての $i$ について $P_n(x_i)=y_i$ となる、次数 $n$ 以下の多項式 $P_n$ を求めます。このような多項式は存在し、<strong>ただ1つ</strong> です：条件は\n       ヴァンデルモンド行列をもつ連立方程式になり、その行列式 $\\prod_{i&lt;j}(x_j-x_i)$ は $0$ ではないからです。この多項式を使って節点の間の値を計算します。</p>",
    "<p><strong>ラグランジュ形。</strong> 各節点に対して、その節点では1、ほかの節点では0になる基底多項式を作ります：\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       節点が2つなら <em>線形補間</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$ が得られます。ラグランジュ形はわかりやすいですが、節点を追加するとすべてを計算し直す必要があります。</p>",
    "<p><strong>ニュートン形と差商。</strong> 差商を漸化式で定義します：\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       すると\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       差商は三角形の表で計算し、節点を追加するには項を1つ加えるだけで済みます。多項式の値はホーナー法で効率よく計算します。</p>",
    "<p><strong>補間誤差。</strong> $f$ が $n+1$ 階の連続な導関数をもつならば、各 $x$ に対して、$x$ と節点を含む最小の区間の中に次を満たす $\\xi$ が存在します。\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       ここから評価 $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$ が得られます。ここで $M_{n+1}=\\max|f^{(n+1)}|$ です。刻み幅 $h$ の線形補間では、誤差はたかだか $\\frac{M_2h^2}{8}$ です。\n       等間隔の節点で次数を上げても良くなるとは限りません：$[-1, 1]$ 上の関数 $\\frac{1}{1+25x^2}$ では、多項式が端の近くで激しく振動します（<strong>ルンゲ現象</strong>）。\n       解決策は、端に向かって密になるチェビシェフ節点か、区分的な多項式補間（スプライン）です。</p>",
    "<p><strong>最小二乗法。</strong> 測定データには誤差が含まれるので、データを通る高次の多項式ではなく、データを\n       <em>近似</em> する単純な関数を求めます。直線 $y=ax+b$ を、偏差の2乗の和 $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ が最小になるように選びます。条件\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ から <strong>正規方程式</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i$$\n       が得られ、その解は $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$、$b=\\frac{\\sum y_i-a\\sum x_i}{n}$ です。この直線はデータの重心 $(\\bar{x}, \\bar{y})$ を通ります。</p>"
   ],
   "examples": [
    {
     "task": "点 $(0, 1)$、$(1, 3)$、$(3, 2)$ を通る補間多項式の $x=2$ での値を、ラグランジュ形とニュートン形の両方で求めなさい。",
     "steps": [
      "ラグランジュ形：$\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$、$\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$、$\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$。",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3.333$。",
      "ニュートン形：$f[0, 1]=\\frac{3-1}{1}=2$、$f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$、$f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$。",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$、よって $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$。同じ多項式で、書き方が違うだけです。"
     ]
    },
    {
     "task": "最小二乗法を使って、点 $(0, 1)$、$(1, 2)$、$(2, 4)$、$(3, 4)$ に当てはまる直線を求めなさい。",
     "steps": [
      "$n=4$、$\\sum x_i=6$、$\\sum y_i=11$、$\\sum x_i^2=14$、$\\sum x_iy_i=0+2+8+12=22$。",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1.1$。",
      "$b=\\frac{11-1.1\\cdot 6}{4}=\\frac{4.4}{4}=1.1$。",
      "求める直線は $y=1.1x+1.1$ で、重心 $(1.5, 2.75)$ を通ります。"
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "数値微分と数値積分",
   "summary": "前進差分と中心差分、刻み幅の選び方、中点則・台形則・シンプソン則、精度の次数と誤差の評価。",
   "theory": [
    "<p><strong>数値微分。</strong> テイラー展開 $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ から、次の公式が得られます。\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{前進差分、誤差 }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{中心差分、誤差 }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       前進差分（および後退差分 $\\frac{f(x)-f(x-h)}{h}$）の <strong>精度の次数は1</strong>、中心差分は <strong>2次</strong> です：刻み幅を半分にすると、誤差はそれぞれ約\n       2分の1、4分の1になります。2階導関数には $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$ を使い、誤差は $O(h^2)$ です。</p>",
    "<p><strong>刻み幅の選び方。</strong> 刻み幅はいくらでも小さくできるわけではありません。分子では近い2つの値を引き算するので、丸め誤差は $\\frac{\\varepsilon_M|f(x)|}{h}$ 程度になり、\n       $h$ が小さくなるほど <em>大きく</em> なります。前進差分の全誤差 $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$ が最小になるのはおよそ $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$ のとき、\n       中心差分ではおよそ $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$ のときです。つまり数値微分は、数値積分とは違って悪条件の問題なのです。</p>",
    "<p><strong>数値積分公式（求積公式）。</strong> 区間 $[a, b]$ を刻み幅 $h=\\frac{b-a}{n}$ で $n$ 個の小区間に分け、節点を $x_i=a+ih$、$f_i=f(x_i)$ とします。各小区間で\n       関数を多項式で置き換え、それを正確に積分します：</p>\n       <ul><li><strong>中点則（長方形公式）</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$、誤差 $\\frac{(b-a)h^2}{24}f''(\\xi)$；</li>\n       <li><strong>台形則</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$、誤差 $-\\frac{(b-a)h^2}{12}f''(\\xi)$；</li>\n       <li><strong>シンプソン則</strong>（$n$ は偶数、2つずつの小区間で放物線）$S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$、誤差 $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$。</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "$[0, 4]$ 上の $f(x)=2+\\sin 1.5x+0.3x$ に対する台形則。小区間の数を増やして、誤差がほぼ刻み幅の2乗に比例して減っていく様子を観察しましょう。$n$ が偶数のときは、シンプソン則の結果も表示されます。"
    },
    "<p><strong>精度の次数。</strong> 複合公式の誤差は $Ch^p$ のようにふるまいます。中点則と台形則は $p=2$（刻み幅を半分にすると誤差は4分の1）、\n       シンプソン則は $p=4$（16分の1）で、3次以下の多項式に対しては正確です。中点則の誤差は台形則の誤差のおよそ半分で符号が逆なので、\n       $S_{2n}=\\frac{2M_n+T_n}{3}$ となります。刻み幅 $h$ と $\\frac{h}{2}$ での2回の計算から、<strong>ルンゲの法則</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$ で誤差を評価でき、\n       改良した結果 $\\frac{4T_{2n}-T_n}{3}$ はちょうどシンプソンの公式になります（リチャードソン補外。ロンバーグ積分法はこれに基づいています）。</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=e^x$ について、刻み幅 $h=0.1$ の前進差分と中心差分で $f'(0)$ を見積もり、誤差を比べなさい。",
     "steps": [
      "前進差分：$\\frac{e^{0.1}-1}{0.1}=\\frac{0.105171}{0.1}\\approx 1.051709$、誤差 $\\approx 0.0517$。",
      "中心差分：$\\frac{e^{0.1}-e^{-0.1}}{0.2}\\approx\\frac{1.105171-0.904837}{0.2}\\approx 1.001668$、誤差 $\\approx 0.0017$。",
      "正確には $f'(0)=1$ です。誤差の評価 $\\frac{h}{2}f''=0.05$ と $\\frac{h^2}{6}f'''\\approx 0.0017$ は結果とよく一致しています。"
     ]
    },
    {
     "task": "$\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0.785398$ を、$n=2$ の台形則とシンプソン則で計算しなさい。",
     "steps": [
      "$h=0.5$、$f(0)=1$、$f(0.5)=0.8$、$f(1)=0.5$。",
      "$T_2=\\frac{0.5}{2}(1+2\\cdot 0.8+0.5)=0.25\\cdot 3.1=0.775$、誤差 $\\approx 0.0104$。",
      "$S_2=\\frac{0.5}{3}(1+4\\cdot 0.8+0.5)=\\frac{0.5\\cdot 4.7}{3}\\approx 0.783333$、誤差 $\\approx 0.0021$。",
      "関数値を求める回数が同じでも、シンプソン則のほうがはるかに正確です。"
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "微分方程式の数値解法",
   "summary": "初期値問題（コーシー問題）、オイラー法、ホイン法（改良オイラー法）、4次のルンゲ＝クッタ法、局所誤差と大域誤差、刻み幅の選び方と安定性。",
   "theory": [
    "<p>ふつう解析的には解けない <strong>初期値問題</strong>（コーシー問題）$y'=f(x, y)$、$y(x_0)=y_0$ を解きます。<strong>刻み幅</strong> $h$ と節点 $x_k=x_0+kh$ を選び、順に\n       近似値 $y_k\\approx y(x_k)$ を計算します。1段法は $y_{k+1}$ を組 $(x_k, y_k)$ だけから計算します。<strong>局所誤差</strong> は1ステップの誤差\n       （$y_k$ が正確だと仮定したもの）、<strong>大域誤差</strong> $y(x_k)-y_k$ は節点に蓄積した誤差です。局所誤差が $O(h^{p+1})$ ならば、$\\frac{X-x_0}{h}$ ステップ後の\n       大域誤差は $O(h^p)$ で、その方法の <strong>次数</strong> は $p$ であるといいます。</p>",
    "<p><strong>オイラー法。</strong> 小区間 $[x_k, x_{k+1}]$ で、解を方向場から得られる傾き $f(x_k, y_k)$ の接線で置き換えます：\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       これは最も単純な1次の方法です：局所誤差は $\\frac{h^2}{2}y''(\\xi)$、大域誤差は $O(h)$ です。刻み幅を半分にしても誤差はおよそ半分にしかならないので、実用上は\n       より正確な方法の出発点として使われることが多いです。</p>",
    {
     "fig": "v7-euler",
     "caption": "$[0, 2]$ 上の問題 $y'=y$、$y(0)=1$ と厳密解 $y=e^x$（黒い曲線）。オイラー法（青）は系統的に遅れ、ホイン法（緑）は同じ刻み幅でもはるかに正確です。ステップ数を増やして、誤差がどれだけ速く減るかを比べましょう。"
    },
    "<p><strong>ホイン法（改良オイラー法）</strong> は予測子・修正子型の方法です：オイラーのステップで小区間の終点での値を予測し、傾きを平均します：\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       これは台形則に対応し、<strong>2次</strong> の方法です。似たものに <em>修正オイラー法（中点法）</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$ があります。</p>\n       <p><strong>4次のルンゲ＝クッタ法（RK4）</strong> は、各ステップで4つの傾きを計算し、\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       それらの重み付き平均 $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$ をとります。シンプソン則に相当する方法です。刻み幅を半分にすると、誤差はおよそ16分の1になります。</p>",
    "<p><strong>刻み幅と誤差。</strong> $p$ 次の方法では、大域誤差はおよそ $Ch^p$ です。刻み幅 $h$ と $\\frac{h}{2}$ での2回の計算から、<strong>ルンゲの法則</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$ で誤差を評価します。現代のプログラムは刻み幅を自動調整します（適応刻み幅。たとえば次数の異なるルンゲ＝クッタ法の組）。\n       刻み幅を小さくすれば常に結果が良くなるわけではありません。演算回数も丸め誤差も増えるからです。</p>\n       <p><strong>安定性。</strong> $\\lambda&lt;0$ のテスト方程式 $y'=\\lambda y$ に対して、オイラー法は $y_{k+1}=(1+h\\lambda)y_k$ を与えます。数値解が0に向かって減少するのは\n       $|1+h\\lambda|&lt;1$、つまり $h&lt;\\frac{2}{|\\lambda|}$ のときだけです。刻み幅がそれより大きいと、厳密解は速く減衰するのに、数値解は振動しながら増大します。時間スケールが大きく異なる方程式\n       （<em>硬い</em> 方程式）は、そのため陰的な方法で解きます。たとえば後退（陰的）オイラー法 $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$ は、どんな $h&gt;0$ に対しても安定です。</p>"
   ],
   "examples": [
    {
     "task": "問題 $y'=y$、$y(0)=1$ を、刻み幅 $h=0.5$ のオイラー法とホイン法で $x=1$ まで解き、$e\\approx 2.71828$ と比べなさい。",
     "steps": [
      "オイラー法：$y_1=1+0.5\\cdot 1=1.5$、$y_2=1.5+0.5\\cdot 1.5=2.25$、誤差 $\\approx 0.468$。",
      "ホイン法、1ステップ目：予測子 $\\tilde{y}_1=1.5$、$y_1=1+0.25\\,(1+1.5)=1.625$。",
      "ホイン法、2ステップ目：$\\tilde{y}_2=1.625+0.5\\cdot 1.625=2.4375$、$y_2=1.625+0.25\\,(1.625+2.4375)=2.640625$、誤差 $\\approx 0.078$。",
      "同じ刻み幅で、ホイン法はおよそ6倍正確です。"
     ]
    },
    {
     "task": "問題 $y'=x+y$、$y(0)=1$ について、刻み幅 $h=0.1$ で RK4 を1ステップ実行しなさい。厳密解は $y=2e^x-x-1$ です。",
     "steps": [
      "$k_1=f(0, 1)=1$、$k_2=f(0.05,\\ 1+0.05\\cdot 1)=0.05+1.05=1.1$。",
      "$k_3=f(0.05,\\ 1+0.05\\cdot 1.1)=0.05+1.055=1.105$、$k_4=f(0.1,\\ 1+0.1\\cdot 1.105)=0.1+1.1105=1.2105$。",
      "$y_1=1+\\frac{0.1}{6}(1+2.2+2.21+1.2105)=1+\\frac{0.66205}{6}\\approx 1.1103417$。",
      "正確には $y(0.1)=2e^{0.1}-1.1\\approx 1.1103418$ で、誤差はおよそ $10^{-7}$ です。"
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "行列計算のアルゴリズム",
   "summary": "ピボット選択付きガウスの消去法、LU分解、直接法の計算量、ヤコビ法とガウス＝ザイデル法、絶対値最大の固有値を求めるべき乗法。",
   "theory": [
    "<p><strong>ガウスの消去法</strong> は、$n\\times n$ の正則行列をもつ連立方程式 $Ax=b$ を2段階で解きます。<em>前進消去</em> では、$k=1, \\dots, n-1$ について\n       行 $i&gt;k$ から第 $k$ 行の <strong>乗数</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ 倍を引きます。こうして対角線より下に0が並び、行列は\n       上三角行列になります。<em>後退代入</em> では、下から上へ代入して $x_n, x_{n-1}, \\dots, x_1$ を計算します。</p>\n       <p><em>ピボット</em>（軸要素）$a_{kk}$ が0または非常に小さいと、乗数が巨大になって丸め誤差が増大します。そのため\n       <strong>部分ピボット選択</strong> を使います：第 $k$ ステップの前に、第 $k$ 列の対角成分とその下の成分の中で $|a_{kk}|$ が最大になるように行を入れ替えます。すると $|l_{ik}|\\le 1$ になります。</p>",
    "<p><strong>LU分解。</strong> 前進消去の乗数は対角成分が1の下三角行列 $L$ をなし、最後に得られる上三角行列が $U$ です。\n       $A=LU$ が成り立ちます（ピボット選択をする場合は $PA=LU$、$P$ は置換行列）。すると連立方程式は2つの三角連立方程式で解けます：\n       $$Ly=b\\ \\text{（前進代入）},\\qquad Ux=y\\ \\text{（後退代入）}.$$\n       同じ行列で右辺だけが異なる連立方程式を何度も解くときに、分解が役立ちます。行列式 $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$ も得られます。\n       対称正定値行列には、より効率的な <em>コレスキー分解</em> $A=LL^{T}$ があります。</p>",
    "<p><strong>計算量。</strong> ガウスの消去法の前進消去にはおよそ $\\frac{2}{3}n^3$ 回の算術演算が必要で、三角行列の代入はそれぞれ約 $n^2$ 回です。サイズが2倍になると、\n       消去の時間はおよそ8倍になります。連立方程式を解くために逆行列（約 $2n^3$ 回の演算）を計算する必要はありません。帯幅 $w$ の <em>帯行列</em> では\n       コストは $O(nw^2)$ に、三重対角行列では $O(n)$ に減ります。大きな <em>疎行列</em>（成分のほとんどが0）では消去によって0が埋まってしまうので、反復法が使われます。</p>",
    "<p><strong>反復法。</strong> 第 $i$ 式から $x_i$ を求める形にし、前の近似値を代入します。<strong>ヤコビ法</strong> は前のステップの値だけを使い、\n       <strong>ガウス＝ザイデル法</strong> はすでに計算し直した成分をすぐに使います：\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       行列が <strong>狭義優対角</strong>（すべての行で $|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$）ならば、どちらの方法もどんな初期値からでも収束します。ガウス＝ザイデル法は対称\n       正定値行列でも収束します。1ステップのコストは、行列の0でない成分の個数程度の演算です。$\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ となるか、残差 $\\|b-Ax^{(k)}\\|$ が小さくなったら停止します。</p>",
    "<p><strong>べき乗法。</strong> 行列 $A$ の固有値が $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ であるとします（絶対値最大の固有値 $\\lambda_1$ はただ1つ）。\n       掛け算を繰り返す $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ と固有ベクトル $v_1$ の方向の成分が強められ、$x^{(k)}$ は速さ $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$ で $\\pm v_1$ に近づきます。\n       固有値は <strong>レイリー商</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ か、対応する成分の比 $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$ で見積もります。\n       絶対値最小の固有値は <em>逆べき乗法</em>（$A^{-1}$ に対するべき乗法。各ステップでLU分解を使って連立方程式を解きます）で求めます。この原理は\n       ウェブページの評価 PageRank の基礎にもなっています。</p>"
   ],
   "examples": [
    {
     "task": "行列 $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ のLU分解を求め、$b=(4,\\ 10,\\ 24)^{T}$ について $Ax=b$ を解きなさい。",
     "steps": [
      "第1ステップ：$l_{21}=\\frac{4}{2}=2$、$l_{31}=\\frac{8}{2}=4$；行は $(0, 1, 1)$ と $(0, 3, 5)$ に変わります。",
      "第2ステップ：$l_{32}=\\frac{3}{1}=3$；第3行は $(0, 0, 2)$。よって $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$、$U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$。",
      "$Ly=b$：$y_1=4$、$y_2=10-2\\cdot 4=2$、$y_3=24-4\\cdot 4-3\\cdot 2=2$。",
      "$Ux=y$：$x_3=\\frac{2}{2}=1$、$x_2=2-1=1$、$x_1=\\frac{4-1-1}{2}=1$。解は $x=(1,\\ 1,\\ 1)^{T}$ で、さらに $\\det A=2\\cdot 1\\cdot 2=4$ です。"
     ]
    },
    {
     "task": "連立方程式 $4x_1-x_2=7$、$x_1+3x_2=5$（解は $x=(2,\\ 1)$）を、点 $(0,\\ 0)$ からヤコビ法とガウス＝ザイデル法でそれぞれ2ステップ解きなさい。",
     "steps": [
      "反復の式：$x_1=\\frac{7+x_2}{4}$、$x_2=\\frac{5-x_1}{3}$。行列は優対角（$4&gt;1$、$3&gt;1$）なので、どちらの方法も収束します。",
      "ヤコビ法：$x^{(1)}=(1.75,\\ 1.6667)$、$x^{(2)}=\\left(\\frac{7+1.6667}{4},\\ \\frac{5-1.75}{3}\\right)=(2.1667,\\ 1.0833)$。",
      "ガウス＝ザイデル法：$x_1^{(1)}=1.75$、すぐに $x_2^{(1)}=\\frac{5-1.75}{3}=1.0833$；$x_1^{(2)}=\\frac{7+1.0833}{4}=2.0208$、$x_2^{(2)}=\\frac{5-2.0208}{3}=0.9931$。",
      "2ステップ後の誤差は、ガウス＝ザイデル法で約 $0.02$、ヤコビ法で約 $0.17$ です。"
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$。（正確な値は ${@5}$ です。）",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm²。",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$ です。べき乗では相対誤差に指数が掛かります：$\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$、つまり約 ${@6}\\,\\%$ です。",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$ です。$\\pi$ の近くでは正弦が小さく、問題の条件が悪くなります。",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ は増加関数なので、$M_2=e^{{@0}}\\approx {@1}$ です。",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$ なので、$\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$ です。近い数どうしの引き算は条件が悪い計算です。",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$ なので、$x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$ です。（正確には $\\sqrt{{@5}}\\approx {@6}$。）",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$ なので、$\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$ です。{@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$。正確には $f'({@8})\\approx {@9}$ で、誤差は約 ${@10}$ です。",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$。正確には $f'({@8})\\approx {@9}$ で、誤差は約 ${@10}$ です。",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$、$f'(x)=3x^2{@2}$。$f({@3})={@4}$、$f'({@5})={@6}$。$x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$。",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$、$f(x_1)={@1}$。$x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$。（正確には $\\sqrt{{@6}}\\approx {@7}$。）",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$、予測子 $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$、$f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$。$y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$。",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$、$f({@2})={@3}&gt;0$。{@4}。得られる区間は $[{@5};\\ {@6}]$ です。",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$、$f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$、$f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$。",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$、{@4}{@5}。正確な値は ${@6}$ で、誤差は約 ${@7}$ です。",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$、$k_2=f({@2};\\ {@3})={@4}$、$k_3=f({@5};\\ {@6})={@7}$、$k_4=f({@8};\\ {@9})={@10}$。$y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$。",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$、$\\sum x_i={@1}$、$\\sum y_i={@2}$、$\\sum x_i^2={@3}$、$\\sum x_iy_i={@4}$。$a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}。",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$、$Ax^{(1)}=({@2};\\ {@3})^{T}$。レイリー商：$\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$。正確な絶対値最大の固有値は $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$ です。",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$、$x_2=g(x_1)\\approx {@2}\\approx {@3}$。（ラジアンで計算し、途中の結果は丸めません。）",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$。$y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$。",
  "${@0}$, teda $M_2=1$.": "${@0}$ なので、$M_2=1$ です。",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$、絶対誤差 $\\Delta\\approx {@2}$。相対誤差 $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$、つまり約 ${@7}\\,\\%$ です。",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$ なので、$\\Delta=|{@2}-{@3}|\\approx {@4}$ です。",
  "(tu len $f_1$)": "（ここでは $f_1$ だけ）",
  ", ale ${@0}&gt;{@1}$": "、しかし ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "絶対誤差は $|x-\\tilde{x}|$ です。定数の値は十分なけた数で（電卓から）とりましょう。",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "誤差がおよそ $Ch^p$ なら、刻み幅を $k$ 分の 1 にすると誤差は $k^p$ 分の 1 になります。台形則と中点則は $p=2$、シンプソン則は $p=4$ です。",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "面積の絶対誤差の限界はいくらですか？ {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "$x^{{@0}}$ の相対誤差は何パーセントですか？ {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "相対誤差は何パーセントですか？ {@0}",
  "Aký interval dostaneš po druhom kroku?": "2回目のステップのあと、どんな区間が得られますか？",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "1回目のステップのあと、どんな区間が得られますか？（両端の点をセミコロンで区切る）",
  "Aký je krok $h$?": "刻み幅 $h$ はいくつですか？",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "乗数 $l_{21}$（2番目の式から引く1番目の式の倍数）はいくつですか？",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "消去の2回目のステップでの乗数 $l_{32}$ はいくつですか？",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "近似値 $\\tilde{x}={@0}$ の絶対誤差は多くても ${@1}$ です。有効数字は何けたですか？",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "中心差分：$f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$。三角関数はラジアンで計算しましょう。",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "誤差は $h^{p}$ に比例するので、$k\\cdot p$ 分の 1 ではなく $k^{p}$ 分の 1 になります。",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "線形補間の誤差は $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$ です。$f''(\\xi)$ には区間での2階導関数の絶対値の最大値を代入しましょう。",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "誤差は $h$ そのものではなく $h^{p}$ に比例します。ここで $p$ は方法の精度の次数です。",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "誤差は刻み幅に比例して小さくなるわけではありません：方法の次数は {@0} なので、誤差は $h^{{@1}}$ に比例します。",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "{@0}の誤差は $h^{{@1}}$ に比例します（精度の次数 {@2}）。刻み幅 $\\frac{h}{{@3}}$ では ${@4}^{{@5}}={@6}$ 分の 1 になります。",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "辺の誤差どうしを掛けるのではありません。線形の評価は $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$ です。",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "$10^{-j}$ の位の数字が有効なのは、誤差が $\\frac{1}{2}\\cdot 10^{-j}$ を超えないときです。${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3} なので、{@4}。小数点より前の {@5} {@6}と合わせて、{@7}。",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "$x^2 - a$ の導関数は $x$ ではなく $2x$ です。",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "前進差分：$f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$。三角関数はラジアンで計算しましょう。",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "$x_0$ を $g$ に代入し、その結果をもう一度 $g$ に代入しましょう。途中の結果は丸めません。",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "$\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$ に代入しましょう。$x-c$ の導関数は 1 です。",
  "Dosaď do vzorca {@0} diferencie. {@1}": "{@0}差分の公式に代入しなさい。{@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "オイラー法のステップ：$y_{k+1}=y_k+h\\,f(x_k, y_k)$、ただし $x_k=kh$。2ステップ計算しましょう。",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "y' = y, y(0) = 1 に対するオイラー法とホイン法",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "オイラー法は1次、ホイン法は2次、RK4 は4次です。誤差はおよそ $Ch^p$ です。",
  "Eulerovou metódou": "オイラー法で",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "関数 $f(x)={@0}$ を区間 $[{@1};\\ {@2}]$ で線形補間で置き換えます。公式 $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$ を使って、点 $x={@3}$ での補間誤差の上界を求めなさい。{@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "ある計算機で、未知数 ${@0}$ 個の連立方程式のガウスの消去法に ${@1}$ 秒かかります。未知数 ${@2}$ 個の連立方程式（密行列）ではおよそ何秒かかりますか？",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "ガウスの消去法で連立方程式 {@0} を解きなさい。$x_1; x_2; x_3$ をセミコロンで区切って入力しなさい。",
  "Gaussovou–Seidelovou": "ガウス＝ザイデル",
  "Heunovou metódou": "ホイン法で",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "値は $x={@0}\\pm {@1}$ です。式 $x^{{@2}}$ の相対誤差をパーセントで見積もりなさい。{@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "$2^n$ がそれ以上になる最小の $n$ を探しましょう。",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "誤差が $\\frac{1}{2}\\cdot 10^{-k}$ を超えない最小の位 $10^{-k}$ を探しましょう。",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "2次の補間多項式は点 {@0} を通ります。点 $x={@1}$ でのその値を求めなさい。{@2}",
  "Jacobiho": "ヤコビ",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "電卓が度数法になっています。数値計算法では三角関数をラジアンで計算します。",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "電卓が度数法になっています。三角関数を微分するときはラジアンで計算します。",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "二分法の各ステップは区間を半分にするだけなので、底が 10 ではなく 2 の対数が必要です。",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "根は長さ ${@0}$ の区間にあります。得られる区間の長さを ${@1}$ 以下にするには、二分法のステップが少なくとも何回必要ですか？",
  "Koľko desatinných miest je platných?": "小数点以下何けたが有効ですか？",
  "Koľko najmenej krokov bisekcie treba?": "二分法のステップは少なくとも何回必要ですか？",
  "Koľko platných cifier má aproximácia celkovo?": "近似値の有効数字は全部で何けたですか？",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "区間を何分の 1 にする必要がありますか、つまり $\\frac{b-a}{\\varepsilon}$ はいくつですか？",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "台形則では両端の値 $f_0$ と $f_n$ の重みは $\\frac{h}{2}$、内部の値は $h$ です。両端の点は半分だけ数える必要があります。",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "刻み幅 $h$ を{@0}します。（滑らかな関数では）{@1}の誤差はおよそ何分の 1 になりますか？",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "2乗で増えるのは三角行列の代入の計算量だけです。消去の前進消去の計算量は $O(n^3)$ です。",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "点 ${@0}$ でのラグランジュ基底多項式：{@1}。$P({@2})={@3}\\approx {@4}$。",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "0 から 4 までの区間での関数に対する台形則",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "台形則：$T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$、$h=\\frac{b-a}{n}$。",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "線形補間：$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$。",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "方法の次数は {@0} で、大域誤差はおよそ $Ch^{{@1}}$ です。刻み幅 $\\frac{h}{{@2}}$ では ${@3}^{{@4}}={@5}$ 分の 1 になります：$\\frac{{@6}}{{@7}}={@8}$。",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "最小二乗法で点 {@0} に直線 $y=ax+b$ をあてはめなさい。{@1}を求めなさい。{@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "べき乗法で対称行列 $A={@0}$ の絶対値最大の固有値を推定します。初期ベクトル $x^{(0)}=(1;\\ 1)^{T}$ から $x^{(1)}=Ax^{(0)}$ とレイリー商 $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$ を計算しなさい。{@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "乗数 $l_{32}$ は、もとの成分 $a_{32}$ からではなく、消去の1回目のステップのあとの行列から計算します。",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "乗数 $l_{ik}=\\frac{a_{ik}}{a_{kk}}$（現在の、すでに変形した行列から）。$i$ 行目から $k$ 行目の $l_{ik}$ 倍を引きます。得られる上三角行列が $U$ です。",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "乗数は商 $l_{21} = \\frac{a_{21}}{a_{11}}$ です。成分をピボットで割る必要があります。",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "乗数は商 $l_{31} = \\frac{a_{31}}{a_{11}}$ です。成分をピボットで割る必要があります。",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "乗数：$l_{21}=\\frac{{@0}}{{@1}}={@2}$、$l_{31}=\\frac{{@3}}{{@4}}={@5}$。1回目のステップのあと、2行目は $(0, {@6}, {@7})$、3行目は $(0, {@8}, {@9})$ になります。$l_{32}={@10}$、$u_{33}={@11}$。$L={@12}$、$U={@13}${@14}。",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "まずオイラー法の予測子 $\\tilde{y}_1=y_0+hf(x_0, y_0)$、次に $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$。",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "まず1階の差商 $f[x_0, x_1]$ と $f[x_1, x_2]$ を計算し、次にその差を $x_2-x_0$ で割りましょう。",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "ニュートン法のステップは $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$ です。分数は足すのではなく引きます。",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "ニュートン法のステップは $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$ です。",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "ニュートン法：y = x² − 2 のグラフの接線",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "ニュートン法で、関数 $f(x)=x^2-{@1}$ の根として $\\sqrt{{@0}}$ を求めます。初期値 $x_0={@2}$ から $x_1$ を計算しなさい。{@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "正規方程式：$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$、$a\\sum x_i+bn=\\sum y_i$。ここから $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$。",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "行列 $A={@0}$ の LU 分解（行の交換なし、$L$ の対角成分は 1）を求め、{@1}を求めなさい。",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "$\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ がまだ成り立つ最小の位 $10^{-k}$ を求め、最初の 0 でない数字からその位までの数字を数えましょう。",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "中点則（長方形公式）：$M_n=h\\sum f(\\text{小区間の中点})$、$h=\\frac{b-a}{n}$。",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "関数 $f(x)={@0}$ の点 $x={@1}$ での微分係数を、刻み幅 $h={@3}$ の{@2}差分で推定しなさい。{@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "$\\delta(x^n)\\approx|n|\\,\\delta x$ が成り立ちます。ここで $\\delta x=\\frac{\\Delta x}{|x|}$ です。",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "$n$ ステップ後、区間の長さは $\\frac{{@0}}{2^n}$ です。$2^n\\ge\\frac{{@1}}{{@2}}={@3}$ が必要なので、$n\\ge\\log_2 {@4}\\approx {@5}$ です。最小の整数は $n={@6}$ です。",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "間違ったほうの半分を残しています。根は、両端で $f$ の符号が異なるほうの半分にあります。",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$ として $P(x)=\\sum y_i\\ell_i(x)$ を使うか、差商を使ったニュートン形を使いましょう。",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "$\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$ を使いましょう。ここでは $a-b=1$ です。",
  "Počet krokov": "ステップ数",
  "Počet krokov n": "ステップ数 n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "演算回数はおよそ $\\frac{2}{3}n^3$ で、時間はサイズの3乗に比例して増えます。サイズが ${@0}$ 倍になったので、時間は ${@1}^3={@2}$ 倍です：${@3}\\cdot {@4}={@5}$ 秒。",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "$f(x)=\\ln x$ では $\\kappa=\\frac{1}{|\\ln x|}$ となります。",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "$f(x)=\\sin x$ では $\\kappa=|x\\cot x|$ です。ラジアンで計算しましょう。",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "点 {@0} について、2階の差商 $f[x_0, x_1, x_2]$（ニュートン形での $(x-x_0)(x-x_1)$ の係数）を求めなさい。{@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "2変数関数では $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$ です。$S=ab$ では偏導関数は $b$ と $a$ です。",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "ガウス＝ザイデル法では、2番目と3番目の式ですでに新しい値を使いました。",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "ヤコビ法では、どこにも初期値の値を代入します。",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "ヤコビ法では、すべての式に初期値 $x^{(0)}$ の値だけを代入し、計算したばかりの成分は使いません。",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "中心差分では点 $x-h$ と $x+h$ の距離は $2h$ です。値の差は $h$ ではなく $2h$ で割る必要があります。",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "2階の差商では、$x_2 - x_1$ ではなく両端の節点の差 $x_2 - x_0$ で割ります。",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "乗数 $l_{21}={@0}$、$l_{31}={@1}$、$l_{32}={@2}$ による前進消去で、上三角行列 $U={@3}$ と右辺 $y=({@4})^{T}$ が得られます。後退代入：$x_3={@5}$、$x_2={@6}$、$x_1={@7}$。",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4：$k_1=f(x_0, y_0)$、$k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$、$k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$、$k_4=f(x_0+h, y_0+hk_3)$、$y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$。",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "レイリー商をベクトル $x^{(0)}$ で計算しています。問題は $x^{(1)}$ に対する商を求めているので、さらに $Ax^{(1)}$ を計算する必要があります。",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "相対誤差は $\\frac{|x-\\tilde{x}|}{|x|}$ です。パーセントにするには 100 を掛けます。",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "したがって入力の相対誤差は約 {@0} 倍に拡大されます——問題の条件が悪いのです。",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "不等式 $\\frac{b-a}{2^n}\\le\\varepsilon$、つまり $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ を解き、切り上げましょう。",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "ある問題を{@0}刻み幅 $h$ で解くと、終点での大域誤差はおよそ ${@1}$ です。刻み幅 $\\frac{h}{{@2}}$ では、どのくらいの誤差が見込まれますか？ {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "方程式 $x^2-{@0}=0$ は区間 $[{@1};\\ {@2}]$ に根をもちます。二分法を2ステップ行い、得られる区間を両端の点の組としてセミコロンで区切って入力しなさい（例：1.25; 1.5）。",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "方程式を、$g(x)={@0}$（方程式 ${@1}$）とする反復法 $x_{k+1}=g(x_k)$ で、初期値 $x_0={@2}$ から解きます。$x_2$ を計算しなさい。{@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "1階の差商の差を、さらに両端の節点の差 $x_2 - x_0$ で割る必要があります。",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "値の差 $y_1 - y_0$ を刻み幅 $x_1 - x_0 = {@0}$ で割ってから $(x - x_0)$ を掛ける必要があります。",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "式に平方根の和を掛けて変形します：$\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$。",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "シンプソン則の精度の次数は、台形則の 2 ではなく 4 です。",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "シンプソン則：$S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$、$n$ は偶数。",
  "Simpsonovej metódy": "シンプソン則",
  "Simpsonovou metódou": "シンプソン則で",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "RK4 では傾き $k_2$ と $k_3$ の重みは2倍です：$y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$。",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "傾きは平均します：掛けるのは $h$ ではなく $\\frac{h}{2}$ です。",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "2回目のステップでは、傾きを新しい点 $(x_1, y_1)$ で計算し直す必要があります。最初の傾きで長さ $2h$ のステップを1回行うだけでは不十分です。",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "小数点以下の有効なけたしか数えていません。有効数字には小数点より前の数字も含まれます。",
  "Spätným chodom urči najprv $x_3$.": "後退代入で、まず $x_3$ を求めなさい。",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "長方形の辺を $\\pm {@0}$ cm の精度で測りました：$a={@1}$ cm、$b={@2}$ cm。線形近似を使って、面積 $S=ab$ の絶対誤差の限界（cm²）を見積もりなさい。{@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "中点則では、小区間の左端ではなく中点での値を使います。",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "小区間の中点：{@0}。$M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "連立方程式 {@0} を{@1}法で初期値 $x^{(0)}={@2}$ から解きなさい。1回目の反復 $x^{(1)}$ を計算し、その3つの成分をそれぞれ小数第4位に丸めて、セミコロンで区切って入力しなさい。",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "対角成分の積が行列式になるのは三角行列のときだけです。$A$ ではなく行列 $U$ の対角成分を掛けましょう。",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "これはヤコビ法のステップです。ガウス＝ザイデル法では、新しい値 $x_1^{(1)}, x_2^{(1)}$ をすぐに次の式に代入します。",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "これは絶対誤差です。相対誤差は絶対誤差を値 $|x|$ で割って得られます（パーセントならさらに 100 倍）。",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "これはまだ $x_1$ です。結果をもう一度 $g$ に代入しましょう。",
  "Toto je až $y_1$. Urob ešte druhý krok.": "これはまだ $y_1$ です。2回目のステップも行いましょう。",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "これはオイラー法の予測子 $\\tilde{y}_1$ にすぎません。ホイン法では、2つの傾きの平均でこれを修正します。",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "これは分子 $(x^{(1)})^{T}Ax^{(1)}$ だけです。さらに $(x^{(1)})^{T}x^{(1)}$ で割りましょう。",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "これは台形則です。シンプソン則は重み $1, 4, 2, 4, \\dots, 4, 1$ を使い、$\\frac{h}{3}$ を掛けます。",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "これは隣り合う2つの節点だけによる線形補間です。2次多項式は3つの点をすべて使います。",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "これは区間内で最も悪い点での評価 $\\frac{M_2h^2}{8}$ です。問題は特定の点 $x$ について問うています。",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "これは平均 $\\bar{y}$ です。切片は $b = \\frac{\\sum y_i - a\\sum x_i}{n}$ なので、$a\\bar{x}$ も引く必要があります。",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "これはもとの成分 $a_{22}$ です。2行目から、まず1行目の $l_{21}$ 倍を引く必要があります。",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "これはもとの成分 $a_{23}$ です。2行目から、まず1行目の $l_{21}$ 倍を引く必要があります。",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "これはもとの成分 $a_{33}$ です。3行目は消去の両方のステップで変形する必要があります。",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "これは相対誤差（誤差と値の比）です。絶対誤差は差 $|x-\\tilde{x}|$ そのものです。",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "これは $x$ 自体の相対誤差です。べき乗では相対誤差に指数 ${@0}$ が掛かります。",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "方程式 $x^3{@0}-{@1}=0$ について、初期値 $x_0={@2}$ からニュートン法を1ステップ行いなさい。{@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "問題 {@1} について、刻み幅 $h={@0}$ で4次のルンゲ＝クッタ法を1ステップ行いなさい。{@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "$f(x)=x^2-{@0}$ について、初期点 $x_0={@1}$、$x_1={@2}$ から割線法を1ステップ行いなさい。{@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "区間での $M_2 = \\max|f''|$ を求めなさい。{@0}",
  "Urči $u_{22}$.": "$u_{22}$ を求めなさい。",
  "Urči $u_{23}$.": "$u_{23}$ を求めなさい。",
  "Urči $u_{33}$.": "$u_{33}$ を求めなさい。",
  "Urči multiplikátor $l_{21}$.": "乗数 $l_{21}$ を求めなさい。",
  "Urči multiplikátor $l_{31}$.": "乗数 $l_{31}$ を求めなさい。",
  "Urči multiplikátor $l_{32}$.": "乗数 $l_{32}$ を求めなさい。",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "点 $x={@0}$（ラジアン）での $f(x)=\\sin x$ の計算の条件数 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ を求めなさい。{@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "点 $x={@1}$ での $f(x)=x-{@0}$ の計算の条件数 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ を求めなさい。{@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "点 $x={@0}$ での関数 $f(x)=\\ln x$ の計算の条件数 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ を求めなさい。{@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "各ステップで区間の中点での値を計算し、両端で関数の符号が異なるほうの半分を残しましょう。",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "公式にはさらに 2 での割り算があります：$\\frac{M_2}{2!}$。",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "割線法の公式では、補正 $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ を $x_1$ から引きます。",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "1列目、次に2列目の対角成分より下の成分を 0 にし、最後の式から順に解きましょう。",
  "Vypočítaj $Ax^{(1)}$.": "$Ax^{(1)}$ を計算しなさい。",
  "Vypočítaj $P_1({@0})$. {@1}": "$P_1({@0})$ を求めなさい。{@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "$\\det A = u_{11}u_{22}u_{33}$ を計算しなさい。",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "$\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ を{@3}、$n={@4}$ 個の小区間で計算しなさい。{@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "$\\ell_{@0}({@1})$ を求めなさい。{@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "$\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$ を計算しなさい。{@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "$\\sqrt{{@0}}-\\sqrt{{@1}}$ を数値的に安定な方法で（近い数どうしの引き算をせずに）計算しなさい。{@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "$\\sum x_i$ と $\\sum y_i$ を計算しなさい（セミコロンで区切る）。",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "$\\sum x_i^2$ と $\\sum x_iy_i$ を計算しなさい（セミコロンで区切る）。",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "区間の中点での $f$ の値、つまり $f({@0})$ を求めなさい。{@1}",
  "Vypočítaj $f'(x_0)$.": "$f'(x_0)$ を求めなさい。",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "$f(x_0)$ と $f'(x_0)$ を計算し、$x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$ に代入しましょう。",
  "Vypočítaj $f(x_0)$.": "$f(x_0)$ を求めなさい。",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "$f(x_0, y_0)$ を求めなさい。{@0}",
  "Vypočítaj $f(x_1)$.": "$f(x_1)$ を求めなさい。",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "$f(x_1, \\tilde{y}_1)$ を求めなさい。{@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "$f(x_1, y_1)$ を求めなさい。{@0}",
  "Vypočítaj $f({@0})$. {@1}": "$f({@0})$ を求めなさい。{@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "$f[x_0, x_1, x_2]$ を求めなさい。{@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "$f[x_0, x_1]$ を求めなさい。{@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "$f[x_1, x_2]$ を求めなさい。{@0}",
  "Vypočítaj $k_{@0}$. {@1}": "$k_{@0}$ を求めなさい。{@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "$x^{(1)} = Ax^{(0)}$ を計算しなさい（2つの成分をセミコロンで区切る）。",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "$x^{(1)}=Ax^{(0)}$、次に $Ax^{(1)}$ を計算し、内積 $x^{(1)}\\cdot Ax^{(1)}$ と $x^{(1)}\\cdot x^{(1)}$ の商を求めましょう。",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "$x_1 = g(x_0)$ を計算しなさい。{@0}",
  "Vypočítaj $x_1$. {@0}": "$x_1$ を求めなさい。{@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "$x_2 = g(x_1)$ を計算しなさい。{@0}",
  "Vypočítaj $x_2$. {@0}": "$x_2$ を求めなさい。{@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "$x_{@0}^{(1)}$ を求めなさい。{@1}",
  "Vypočítaj $y_1$. {@0}": "$y_1$ を求めなさい。{@0}",
  "Vypočítaj $y_2$. {@0}": "$y_2$ を求めなさい。{@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "$|(x-x_0)(x-x_1)|$ を計算しなさい。{@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "レイリー商を求めなさい。{@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "絶対誤差 $|x-\\tilde{x}|$ を求めなさい。{@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "切片 $b$ を求めなさい。{@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "分母 $\\sqrt{{@0}}+\\sqrt{{@1}}$ を計算しなさい。{@2}",
  "Vypočítaj odhad chyby. {@0}": "誤差の評価を計算しなさい。{@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "予測子 $\\tilde{y}_1$ を求めなさい。{@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "辺 $a$ の誤差の寄与、つまり $b\\,\\Delta a$ を求めなさい。{@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "辺 $b$ の誤差の寄与、つまり $a\\,\\Delta b$ を求めなさい。{@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "$x$ の相対誤差をパーセントで求めなさい。{@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "傾き $\\frac{y_1-y_0}{x_1-x_0}$ を求めなさい。{@0}",
  "Vypočítaj smernicu $a$. {@0}": "傾き $a$ を求めなさい。{@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "小区間の中点での関数の値の和を求めなさい。{@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "奇数番目の節点での値の和 $f_1{@0}$（重み 4）を求めなさい。{@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "内部の値の和 {@0} を求めなさい。{@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "積分の最終的な値を求めなさい。{@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "公式 $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ が成り立つのは原点を通る直線（$b = 0$）のときだけです。両方の正規方程式を使いましょう。",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "割線法の公式：$x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$。",
  "Výsledok zaokrúhli na {@0} {@1}.": "結果は小数点以下 {@0} {@1}に丸めなさい。",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "$i$ 番目の式から $x_i$ を表し、$x^{(0)}$ の成分の値を代入しましょう。",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "$i$ 番目の式から $x_i$ を表し、すでに計算し直した成分 $x_1, \\dots, x_{i-1}$ と、残りの古い値を代入しましょう。",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "表から ${@0}\\approx {@1}$ と ${@2}\\approx {@3}$ がわかっています。線形補間で、点 $x={@5}$ での関数 ${@4}$ の値を推定しなさい。{@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "分子の因数 $x$ を忘れています：$\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ であり、$\\left|\\frac{f'(x)}{f(x)}\\right|$ ではありません。",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "分子の因数 $x$ を忘れています：$\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$。",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "因数 $x$ を忘れています：$\\kappa = |x\\cot x|$ であり、$|\\cot x|$ ではありません。",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "解全体 $x_1; x_2; x_3$ を入力しなさい。",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "重みを取り違えています：シンプソン則では奇数番目の節点 $f_1, f_3, \\dots$ の重みが 4、偶数番目の内部の節点の重みが 2 です。",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "一方の辺の誤差しか数えていません。$b\\,\\Delta a$ に $a\\,\\Delta b$ も足しましょう。",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "ガウスの消去法の計算量は $O(n^3)$、より正確には約 $\\frac{2}{3}n^3$ 回の演算です。",
  "absolútny člen $b$": "切片 $b$",
  "centrálnej": "中心",
  "centrálnej diferencie": "中心差分",
  "centrálnou": "中心",
  "ciframi": "けた",
  "cifrou": "けた",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "$U$ の対角成分の積としての行列式 $\\det A$",
  "doprednej": "前進",
  "doprednej diferencie": "前進差分",
  "doprednou": "前進",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">オイラー y(2) ≈ {@1}（誤差 {@2}）</span> · <span class=\"c-ok\">ホイン y(2) ≈ {@3}（誤差 {@4}）</span> · 正確には e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · 正確には I = {@2} · 誤差 {@3}",
  "je platné 1 desatinné miesto": "小数点以下 1 けたが有効です",
  "je to <strong>1</strong> platná cifra": "有効数字は <strong>1</strong> けたです",
  "je to <strong>{@0}</strong> platných cifier": "有効数字は <strong>{@0}</strong> けたです",
  "lichobežníkovej metódy": "台形則",
  "lichobežníkovou metódou": "台形則で",
  "metódou RK4": "RK4 法で",
  "na polovicu": "半分に",
  "nie je platné žiadne desatinné miesto": "小数点以下に有効なけたはありません",
  "obdĺžnikovej (stredovej) metódy": "中点則（長方形公式）",
  "obdĺžnikovou (stredovou) metódou": "中点則（長方形公式）で",
  "prvok ${@0}$": "成分 ${@0}$",
  "smernicu $a$": "傾き $a$",
  "sú platné {@0} desatinné miesta": "小数点以下 {@0} けたが有効です",
  "sú to <strong>{@0}</strong> platné cifry": "有効数字は <strong>{@0}</strong> けたです",
  "uzly {@0}.": "節点 {@0}。",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$。誤差の評価：$\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$。",
  "{@0}-krát": "{@0} 分の 1 に",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}、誤差 {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">誤差 |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· シンプソン則：n は偶数でなければならない",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "問題 {@0} をオイラー法で、刻み幅 $h={@1}$ で解きなさい。$y_2\\approx y({@2})$ を求めなさい。{@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "問題 {@0} をホイン法（改良オイラー法）で、刻み幅 $h={@1}$ で解きなさい。$y_1\\approx y({@2})$ を求めなさい。{@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "時間は未知数の個数に比例して増えるわけではありません：消去には約 $\\frac{2}{3}n^3$ 回の演算が必要です。",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "数 ${@0}$ を近似値 ${@1}$ で置き換えます。この近似の絶対誤差はいくらですか？ {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "数 ${@0}$ を近似値 ${@1}$ で置き換えます。相対誤差は何パーセントですか？ {@2}",
  "Štart x₀": "初期値 x₀"
 }
});
