/* 日本語: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/r6/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "r6-desatinne": {
   "title": "小数と小数の計算",
   "summary": "小数の書き方、大小、四捨五入；たし算、ひき算、かけ算、わり算。",
   "theory": [
    "<p><strong>小数</strong>では、小数点が整数部分と小数部分を分けます。$2.75$ は 2 と、0.1 が 7 こ、0.01 が 5 こです。\n       つまり $2.75 = 2 + \\frac{7}{10} + \\frac{5}{100}$。小数部分の最後の 0 は、つけても省いてもかまいません：$2.4 = 2.40$。</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "2 から 3 までの数直線の一部。2 つの整数の間には、0.1 が 10 こ、0.01 が 100 こあります。"
    },
    "<p><strong>たし算とひき算：</strong><em>小数点の位置をそろえて</em>たてに書き、足りない位には 0 をおぎないます。\n       <strong>かけ算：</strong>整数と同じようにかけ、積の小数部分のけた数は、かける 2 つの数の小数部分のけた数の和になります：$1.2\\cdot 0.3 = 0.36$。\n       10、100、1 000 をかけると小数点は右へ 1、2、3 けた移り、わると左へ移ります。</p>",
    "<p><strong>自然数でわるわり算：</strong>ふつうどおりにわり、わられる数の小数点をこえたところで商に小数点をうちます：$7.5 : 3 = 2.5$。\n       <strong>四捨五入：</strong>がい数にする位のすぐ次の数字を見ます。0 から 4 なら切り捨て、5 から 9 なら切り上げます：$3.462 \\doteq 3.5$（小数第 1 位まで）。</p>"
   ],
   "examples": [
    {
     "task": "$12.5 + 3.78$ を計算しなさい。",
     "steps": [
      "小数点をそろえます：$12.50 + 3.78$。",
      "位ごとにたします：$12.50 + 3.78 = 16.28$。",
      "<strong>答え：16.28</strong>"
     ]
    },
    {
     "task": "$2.4\\cdot 1.5$ を計算しなさい。",
     "steps": [
      "小数点をとって計算：$24\\cdot 15 = 360$。",
      "かける数の小数部分は合わせて 2 けたなので、積は $3.60 = 3.6$ です。",
      "<strong>答え：3.6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "分数とその基本的な使い方",
   "summary": "分数とは何か、全体の一部、約分と倍分、小数への変換、大小の比較。",
   "theory": [
    "<p><strong>分数</strong> $\\frac{a}{b}$ は全体の一部をあらわします：全体を $b$ 等分し（<em>分母</em>）、そのうち $a$ こをとります（<em>分子</em>）。\n       分数の線はわり算を意味します：$\\frac{3}{4} = 3 : 4 = 0.75$。</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "円の色をぬった部分：2 分の 1、4 分の 3、8 分の 3。"
    },
    "<p><strong>ある数の何分のいくつ：</strong>20 の $\\frac{3}{4}$ は、20 を分母でわり、分子をかけて求めます：$20 : 4 = 5$、$5\\cdot 3 = 15$。</p>",
    "<p><strong>倍分と約分：</strong>分子と分母に同じ数（0 以外）をかけたり、同じ数でわったりしても、分数の値は変わりません：\n       $\\frac{12}{18} = \\frac{2}{3}$（6 で約分）。それ以上約分できない分数を<em>既約分数</em>といいます。\n       2 つの分数は、通分して分母をそろえると比べやすくなります。</p>"
   ],
   "examples": [
    {
     "task": "35 の $\\frac{2}{5}$ はいくつですか。",
     "steps": [
      "5 分の 1：$35 : 5 = 7$。",
      "5 分の 2：$7\\cdot 2 = 14$。",
      "<strong>答え：14</strong>"
     ]
    },
    {
     "task": "分数 $\\frac{3}{4}$ と $\\frac{5}{6}$ の大小を比べなさい。",
     "steps": [
      "共通の分母は 12：$\\frac{3}{4} = \\frac{9}{12}$、$\\frac{5}{6} = \\frac{10}{12}$。",
      "$9 &lt; 10$ なので、$\\frac{3}{4} &lt; \\frac{5}{6}$。"
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "約数・倍数、素数と合成数",
   "summary": "約数と倍数、わり切れるかの見分け方、素数、合成数、素因数分解。",
   "theory": [
    "<p>$a : b$ のわり算にあまりが出ないとき、$a$ は $b$ で<strong>わり切れる</strong>といいます。このとき $b$ は $a$ の<em>約数</em>で、$a$ は $b$ の<em>倍数</em>です。\n       たとえば 12 の約数は 1、2、3、4、6、12 です。</p>",
    "<p><strong>わり切れるかの見分け方。</strong>ある数が次の数でわり切れるのは</p>\n       <ul><li><strong>2</strong>：一の位が偶数（0、2、4、6、8）のとき、</li>\n       <li><strong>3</strong>：各位の数字の和が 3 でわり切れるとき；<strong>9</strong>：各位の数字の和が 9 でわり切れるとき、</li>\n       <li><strong>4</strong>：下 2 けたの数が 4 でわり切れるとき、</li>\n       <li><strong>5</strong>：一の位が 0 か 5 のとき；<strong>10</strong>：一の位が 0 のとき、</li>\n       <li><strong>6</strong>：2 でも 3 でもわり切れるとき。</li></ul>",
    "<p><strong>素数</strong>は、約数がちょうど 2 つ（1 とその数自身）の自然数です（2、3、5、7、11、…）。\n       <strong>合成数</strong>は約数が 3 つ以上ある数です（4、6、8、9、…）。1 は素数でも合成数でもありません。\n       合成数はどれも素数の積（<em>素因数</em>の積）に分解できます：$60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$。</p>",
    {
     "fig": "r6-eratosten",
     "caption": "エラトステネスのふるい：1 から 60 までの数から、2、3、5、7 の倍数（それ自身はのぞく）を消していきます。のこった数が素数で、色がぬってあります。"
    }
   ],
   "examples": [
    {
     "task": "4 716 は 3 でわり切れますか。4 ではどうですか。",
     "steps": [
      "各位の数字の和：$4 + 7 + 1 + 6 = 18$、18 は 3 でわり切れるので<strong>はい</strong>。",
      "下 2 けたは 16 で $16 : 4 = 4$ なので、4 でもわり切れます：<strong>はい</strong>。"
     ]
    },
    {
     "task": "90 を素因数分解しなさい。",
     "steps": [
      "$90 : 2 = 45$、$45 : 3 = 15$、$15 : 3 = 5$、5 は素数です。",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "最大公約数と最小公倍数",
   "summary": "素因数分解を使った最大公約数と最小公倍数、互いに素な数、文章題。",
   "theory": [
    "<p>数 $a$、$b$ の<strong>最大公約数</strong>（$D(a, b)$ と書きます）は、両方の数をわり切るいちばん大きい数です。\n       <strong>最小公倍数</strong>（$n(a, b)$ と書きます）は、両方の数の倍数になっている 0 でないいちばん小さい数です。</p>",
    {
     "fig": "r6-strom",
     "caption": "60 と 84 の素因数分解。共通の素因数は 2、2、3 なので D(60, 84) = 12；n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420。"
    },
    "<p><strong>素因数分解を使う方法：</strong>両方の数を素因数分解します。最大公約数は<em>共通の</em>素因数の積です（それぞれ、両方に含まれる回数だけ）。\n       最小公倍数は、少なくとも一方の数に現れる<em>すべての</em>素因数の積です（それぞれ、多く含まれるほうの回数だけ）。\n       便利なたしかめ：$D(a, b)\\cdot n(a, b) = a\\cdot b$。</p>",
    "<p>最大公約数が 1 である 2 つの数は<strong>互いに素</strong>であるといいます（例：8 と 15）。1 より大きい公約数をもつときは、互いに素ではありません。\n       最大公約数は、何かをできるだけ大きな同じ大きさに分けるときに使います。最小公倍数は、くり返し起こることが次にいつ重なるかを求めるときに使います。</p>"
   ],
   "examples": [
    {
     "task": "$D(24, 36)$ と $n(24, 36)$ を求めなさい。",
     "steps": [
      "$24 = 2^3\\cdot 3$、$36 = 2^2\\cdot 3^2$。",
      "最大公約数：$2^2\\cdot 3 = 12$。",
      "最小公倍数：$2^3\\cdot 3^2 = 72$。",
      "たしかめ：$12\\cdot 72 = 864 = 24\\cdot 36$。"
     ]
    },
    {
     "task": "2 つの信号が同時に青になりました。1 つめは 40 秒、2 つめは 60 秒の周期で色が変わります。次に 2 つが同時に周期の始まりになるのは何秒後ですか。",
     "steps": [
      "最小公倍数 $n(40, 60)$ を求めます。",
      "$40 = 2^3\\cdot 5$、$60 = 2^2\\cdot 3\\cdot 5$、よって $n = 2^3\\cdot 3\\cdot 5 = 120$。",
      "<strong>120 秒後（2 分後）です。</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "整数と負の数",
   "summary": "数直線上の正の数と負の数、反対の数、絶対値、大小、たし算とひき算。",
   "theory": [
    "<p><strong>整数</strong>は $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ です。負の数は、たとえば氷点下の気温（$-5\\,{}^\\circ\\mathrm{C}$）、\n       借金、海面より低い土地の高さなどで使います。0 は正の数でも負の数でもありません。</p>",
    {
     "fig": "r6-os-cele",
     "caption": "4 と −4 は反対の数です。0 から同じ距離で、反対側にあります。どちらも絶対値は 4 です。"
    },
    "<p>数 $a$ の<strong>反対の数</strong>は $-a$ です（4 の反対の数は $-4$、$-7$ の反対の数は 7）。<strong>絶対値</strong> $|a|$ は 0 からその数までの距離です：$|-6| = 6$、$|6| = 6$。\n       <strong>大小：</strong>数直線上で右にあるほど大きい数です。だから $-2 &gt; -5$ で、負の数はどれも 0 より小さいです。</p>",
    "<p><strong>たし算とひき算：</strong>正の数をたすことは数直線上を右へ、負の数をたすことは左へ進むことです。\n       ある数をひくことは、その反対の数をたすことと同じです：$3 - (-4) = 3 + 4 = 7$、$-2 - 5 = -2 + (-5) = -7$。</p>"
   ],
   "examples": [
    {
     "task": "$-8 + 3$ を計算しなさい。",
     "steps": [
      "$-8$ から始めて、右へ 3 進みます。",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "朝の気温は $-6\\,{}^\\circ\\mathrm{C}$、昼は $2\\,{}^\\circ\\mathrm{C}$ でした。気温は何度上がりましたか。",
     "steps": [
      "差：$2 - (-6) = 2 + 6 = 8$。",
      "<strong>8 °C 上がりました。</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "角と角の大きさのはかり方",
   "summary": "角の種類、分度器、度と分、となり合う角（補角）と対頂角、角の計算。",
   "theory": [
    "<p><strong>角</strong>は、始点（<em>頂点</em>）が共通な 2 本の半直線（<em>辺</em>）でできています。角の大きさは<strong>度</strong>ではかります。\n       1 度は 60 分です：$1^\\circ = 60'$。角はギリシャ文字 $\\alpha, \\beta, \\gamma$ や $\\angle AVB$ のように書きます。</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "鋭角は 90° より小さく、直角は 90°、鈍角は 90° と 180° の間、平角は 180° です。"
    },
    "<p><strong>分度器ではかる：</strong>分度器の中心を角の頂点に合わせ、0 の線を一方の辺に合わせて、もう一方の辺が通る目もりを読みます。</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "大きさ 50° の角に分度器を当てたところ。"
    },
    "<p><strong>となり合う角</strong>（補角の関係にある角）は 1 本の辺を共有し、のこりの辺が一直線になります。2 つの和は $180^\\circ$ です。\n       <strong>対頂角</strong>は 2 本の直線が交わるときに向かい合ってできる角で、大きさは等しくなります。\n       角をたすときは、度と分を別々にたします。60 分は 1 度にくり上げます。</p>"
   ],
   "examples": [
    {
     "task": "角 $\\alpha$ は $48^\\circ$ です。そのとなり合う角（補角）は何度ですか。",
     "steps": [
      "となり合う角の和は $180^\\circ$ です。",
      "$180^\\circ - 48^\\circ = 132^\\circ$。",
      "<strong>となり合う角は 132° です。</strong>"
     ]
    },
    {
     "task": "$35^\\circ\\,40' + 27^\\circ\\,35'$ を計算しなさい。",
     "steps": [
      "度：$35 + 27 = 62$、分：$40 + 35 = 75$。",
      "$75' = 1^\\circ\\,15'$ なので、合わせて $63^\\circ\\,15'$。"
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "三角形とその性質",
   "summary": "三角形の内角の和、辺と角による三角形の種類、三角形の成立条件。",
   "theory": [
    "<p><strong>三角形</strong> $ABC$ には 3 つの頂点、3 つの辺 $a = |BC|$、$b = |AC|$、$c = |AB|$、3 つの内角 $\\alpha, \\beta, \\gamma$ があります。\n       どんな三角形でも<strong>内角の和</strong>は $\\alpha + \\beta + \\gamma = 180^\\circ$ です。</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "上は辺による分類（印は長さが等しい辺を示します）、下は角による分類です。"
    },
    "<p><strong>辺による分類：</strong>不等辺三角形（3 辺がすべてちがう）、二等辺三角形（2 辺が等しく、底角が等しい）、\n       正三角形（3 辺がすべて等しく、どの角も $60^\\circ$）。\n       <strong>角による分類：</strong>鋭角三角形（すべての角が鋭角）、直角三角形（1 つの角が直角）、鈍角三角形（1 つの角が鈍角）。</p>",
    "<p><strong>三角形の成立条件（三角不等式）：</strong>どの 2 辺の長さの和も、のこりの 1 辺の長さより必ず大きくなります。\n       短い 2 辺の和がいちばん長い辺より長いことをたしかめれば十分です。たとえば 3 cm、4 cm、8 cm の辺では三角形はかけません。$3 + 4 &lt; 8$ だからです。</p>"
   ],
   "examples": [
    {
     "task": "三角形で $\\alpha = 52^\\circ$、$\\beta = 71^\\circ$ です。$\\gamma$ を求めなさい。",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$。",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "辺の長さが 5 cm、6 cm、10 cm の三角形はかけますか。",
     "steps": [
      "短い 2 辺：$5 + 6 = 11$。",
      "$11 &gt; 10$ なので、条件を満たします。",
      "<strong>はい、かけます。</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "正方形と長方形のまわりの長さと面積",
   "summary": "まわりの長さと面積の公式、わからない辺の求め方、面積の単位とその換算。",
   "theory": [
    "<p><strong>まわりの長さ</strong>は図形の境界の長さで、長さの単位（mm、cm、m）ではかります。<strong>面積</strong>は、1 辺が 1 単位の小さな正方形が\n       図形にいくつ入るかをあらわし、面積の単位（$\\text{mm}^2$、$\\text{cm}^2$、$\\text{m}^2$）ではかります。</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "5 cm × 3 cm の長方形には、面積 1 cm² の正方形が 5 こずつ 3 列、合わせて 15 cm² 入ります。"
    },
    "<p>辺が $a$、$b$ の<strong>長方形</strong>：$o = 2\\cdot(a + b)$、$S = a\\cdot b$。\n       1 辺が $a$ の<strong>正方形</strong>：$o = 4\\cdot a$、$S = a\\cdot a = a^2$。\n       長方形の面積と 1 つの辺がわかっていれば、もう 1 つの辺はわり算で求められます：$b = S : a$。</p>",
    "<p><strong>面積の単位：</strong>$1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$、$1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$、$1\\,\\text{m}^2 = 100\\,\\text{dm}^2$。\n       面積の単位では、換算の数は 10 ではなく 100 です。1 辺 1 cm の正方形には、1 辺 1 mm の正方形が $10\\cdot 10$ こ入るからです。</p>"
   ],
   "examples": [
    {
     "task": "庭は 14 m × 9 m の長方形です。まわりを囲むのに何 m のフェンスが必要ですか。また、庭の面積はいくつですか。",
     "steps": [
      "まわりの長さ：$o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$。",
      "面積：$S = 14\\cdot 9 = 126\\,\\text{m}^2$。",
      "<strong>フェンスは 46 m 必要で、庭の面積は 126 m² です。</strong>"
     ]
    },
    {
     "task": "正方形のまわりの長さは 36 cm です。面積はいくつですか。",
     "steps": [
      "1 辺：$a = 36 : 4 = 9\\,\\text{cm}$。",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$。"
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "線対称",
   "summary": "線対称な移動による点と図形の像、線対称な図形とその対称の軸。",
   "theory": [
    "<p>軸 $o$ についての<strong>線対称な移動</strong>は、それぞれの点 $A$ に、その<em>像</em> $A'$ を対応させます。線分 $AA'$ は軸に垂直で、\n       軸によって 2 等分されます。つまり点 $A$ とその像は、軸から同じ距離にあり、反対側にあります。軸上の点は自分自身にうつります。</p>",
    {
     "fig": "r6-osova",
     "caption": "青い図形と、軸 o についてのその像（緑）。点 A は軸の左 4 ますにあり、その像 A′ は右 4 ますにあります。"
    },
    "<p>図形の像は、頂点の像を求めてそれらを結んでかきます。像はもとの図形と形も大きさも同じで、鏡にうつしたように「裏返し」になっているだけです。</p>",
    "<p>ある直線について自分自身にうつる図形を<strong>線対称な図形</strong>といいます（その直線で紙を折ると、2 つの半分がぴったり重なります）。\n       その直線を<em>対称の軸</em>といいます。正方形には 4 本、長方形には 2 本、正三角形には 3 本、二等辺三角形には 1 本、円には限りなく多くの対称の軸があります。</p>"
   ],
   "examples": [
    {
     "task": "軸 $o$ は 6 列目のたての直線です。点 $A$ は 2 列目にあります。その像は何列目にありますか。",
     "steps": [
      "点 $A$ は軸から $6 - 2 = 4$ 列はなれています。",
      "像は反対側に 4 列はなれたところです：$6 + 4 = 10$。",
      "<strong>像は 10 列目にあります。</strong>"
     ]
    },
    {
     "task": "正方形でない長方形には、対称の軸が何本ありますか。",
     "steps": [
      "軸は向かい合う 2 辺の中点を通ります。そのような直線は 2 本あります。",
      "対角線は軸ではありません。折っても 2 つの半分は重なりません。",
      "<strong>2 本です。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$ なので、100 でわります：${@2} : 100 = {@3}\\,\\text{{@4}}^2$。",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$ なので、${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$。",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$ なので、${@0}^\\circ = {@1}'$、あわせて ${@2}' + {@3}' = {@4}'$。",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$ なので、$b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$。",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$ なので、三角形はかけます。",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$ なので、三角形はかけません。",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$（右へ {@3} 進む）。",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$（左へ {@3} 進む）。",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$、あまり {@2}。つまり ${@3}' = {@4}$ です。",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ と ${@2} = {@3}$ には共通の素因数がないので、$D({@4}, {@5}) = 1$。たがいに素です。",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$、${@2} = {@3}$。最大公約数は共通の素因数の積です：$D({@4}, {@5}) = {@6}{@7}$。",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$ なので、1 と {@3} のほかに約数 {@4} もあります。合成数です。",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$。夜の気温は {@4} °C でした。",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$、$|{@2}| = {@3}$ なので、和は ${@4} + {@5} = {@6}$ です。",
  "4 dieliky": "4 目もり",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "絶対値は 0 からのきょりなので、負になることはありません。",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "絶対値は負になりません。まずそれぞれの数の 0 からのきょりを求めてから、たしましょう。",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "分が 60 以上になったら、60 分を 1 度にかえましょう。",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "短い 2 辺の和がいちばん長い辺と等しいと、辺が一直線上にならんでしまい、三角形はできません。",
  "Aká dlhá je strana štvorca (v cm)?": "正方形の 1 辺の長さは何 cm ですか。",
  "Aké je číslo opačné k číslu {@0}?": "{@0} の反対の数は何ですか。",
  "Aké je číslo {@0}?": "数 {@0} は何ですか。",
  "Aký bude čitateľ rozšíreného zlomku?": "倍分した分数の分子はいくつになりますか。",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "{@0} と {@1} の最小公倍数はいくつですか。",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "{@0} と {@1} の最大公約数はいくつですか。",
  "Aký je obsah štvorca (v cm²)?": "正方形の面積は何 cm² ですか。",
  "Aký je obvod (v {@0})?": "まわりの長さはいくつですか（{@0} で）。",
  "Aký je obvod štvorca (v cm)?": "正方形のまわりの長さは何 cm ですか。",
  "Aký je súčet dvoch susedných strán?": "となり合う 2 つの辺の和はいくつですか。",
  "Aký je súčet známych číslic?": "わかっている数字の和はいくつですか。",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "${@0}^\\circ$ の角はどんな角ですか。",
  "Aký veľký je jeden uhol pri základni?": "底角の 1 つは何度ですか。",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "分母を {@2} にするには、分数 $\\frac{{@0}}{{@1}}$ を何倍に倍分すればよいですか。",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "点 $A$ は軸から $|{@0} - {@1}| = {@2}$ {@3}はなれています。像は軸の反対側に同じだけはなれています：${@4} {@5} {@6} = {@7}$。",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "整数部分と小数部分を別々にかけてはいけません。小数部分が整数部分にくり上がります。小数点をとってかけてから、小数点をうちましょう。",
  "Ciferný súčet je {@0}, je deliteľný 3.": "各位の数の和は {@0} で、3 でわりきれます。",
  "Ciferný súčet je {@0}, je deliteľný 9.": "各位の数の和は {@0} で、9 でわりきれます。",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "各位の数の和は {@0} で、3 でわりきれません。",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "各位の数の和は {@0} で、9 でわりきれません。",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "{@0} の約数は {@1} です。ぜんぶで {@2} こです。",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "約数 1 はどの数にもあります。1 より大きい共通の約数がある数どうしは、たがいに素ではありません。",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "整数と同じようにわり、わられる数の小数点をこえたら商にも小数点をうちます：${@0} : {@1} = {@2}$。たしかめ：${@3}\\cdot {@4} = {@5}$。",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "素数でじゅんにわっていきます：${@0}$。つまり ${@1} = {@2}{@3}$ です。",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "小数点は上下にそろえなければなりません。足りない位には 0 を書きましょう。",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "大きい位からじゅんにわりましょう。わられる数の小数点をこえたら、商にも小数点をうちます。",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "わりきれるいちばん小さい素数（2、3、5、7、…）でわり、1 になるまで商をわり続けましょう。",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "正しい記号を入れましょう：$\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "3 つ目の角を求めて、いちばん大きい角を見ましょう。",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "辺による三角形の分類と角による分類",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "短い 2 辺：${@0} + {@1} = {@2}$、いちばん長い辺は {@3}。",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "2 つの辺の長さが等しいので、二等辺三角形です。",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "2 本のリボンの長さは {@0} cm と {@1} cm です。あまりが出ないように、同じ長さで、できるだけ長く（cm の整数で）切り分けます。1 本の長さは何 cm になりますか。",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "辺の長さが {@0} cm、{@1} cm、{@2} cm の三角形はかけますか。",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "1 本の長さは、両方の長さの約数でなければなりません。いちばん大きい公約数はどれですか。",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "1 本の長さは {@0} も {@1} もわりきり、できるだけ大きくなければならないので、$D({@2}, {@3})$ を求めます。",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "積がその数になる数の組をさがしましょう：1 とその数、つぎに 2 と…",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "最小公倍数を求めます：${@0} = {@1}$、${@2} = {@3}$、$n({@4}, {@5}) = {@6} = {@7}$。2 つの路線がつぎに同時に出発するのは {@8} 分後、つまり {@9}:{@10} です。",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "同じ数を 2 回かけて {@0} になる数をさがします：$a = {@1}\\,\\text{cm}$。まわりの長さ：$o = 4\\cdot {@2} = {@3}\\,\\text{cm}$。",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "対称の軸が 3 本あるのは正三角形だけです。二等辺三角形は 2 つの辺だけが等しいです。",
  "Je menší ako 90°, preto je ostrý.": "90° より小さいので、鋭角です。",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "偶数で、各位の数の和 {@0} は 3 でわりきれます。",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "偶数ですが、各位の数の和 {@0} は 3 でわりきれません。",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "大文字の活字 <strong style=\"font-size:1.6em\">{@0}</strong>（飾りのない形）は線対称ですか。",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "90° より大きく 180° より小さいので、鈍角です。",
  "Je číslo {@0} deliteľné číslom {@1}?": "{@0} は {@1} でわりきれますか。",
  "Jeden kúsok bude merať {@0} cm.": "1 本の長さは {@0} cm です。",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "1 度は 100 分ではなく 60 分です。分の数を 60 でわりましょう。",
  "Jeden stupeň má 60 minút, nie 100.": "1 度は 100 分ではなく 60 分です。",
  "Jeden stupeň má 60 minút.": "1 度は 60 分です。",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "たしかめ：最大公約数 · 最小公倍数 = {@0} · {@1}。",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "平行四辺形には対称の軸がありません。どの直線で折っても、ぴったり重なりません。",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "ひし形には対称の軸が 2 本あります：2 本の対角線です。",
  "Koľko celých stupňov je v ${@0}'$?": "${@0}'$ は何度ですか（整数の度で）。",
  "Koľko deliteľov má číslo {@0}?": "{@0} の約数はいくつありますか。",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "因数 ${@0}$ と ${@1}$ の小数部分のけた数は、あわせていくつですか。",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "{@1} の $\\frac{1}{{@0}}$ はいくつですか。",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "{@2} の $\\frac{{@0}}{{@1}}$ はいくつですか。",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "まわりの長さの半分、つまり $a + b$ は何 cm ですか。",
  "Koľko minút je ${@0}$?": "${@0}$ は何分ですか。",
  "Koľko minút je ${@0}^\\circ$?": "${@0}^\\circ$ は何分ですか。",
  "Koľko minút zostane?": "何分のこりますか。",
  "Koľko osí súmernosti má {@0}?": "{@0}には対称の軸が何本ありますか。",
  "Koľko riadkov je bod A vzdialený od osi?": "点 A は軸から何マスはなれていますか（行）。",
  "Koľko stupňov majú spolu oba uhly pri základni?": "2 つの底角をあわせると何度ですか。",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "角 $\\alpha$ と $\\beta$ をあわせると何度ですか。",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "ひいたあと何度のこりますか（かりた 1 度を忘れないようにしましょう）。",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "三角形の角の和まで、あと何度ですか。",
  "Koľko stĺpcov je bod A vzdialený od osi?": "点 A は軸から何マスはなれていますか（列）。",
  "Koľkokrát sa 60 zmestí do počtu minút?": "分の数の中に 60 は何回入りますか。",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "円には対称の軸がかぎりなくあります：中心を通るすべての直線です。",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "いくつかに分けた円：2 分の 1、4 分の 3、8 分の 3",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "正しく約分しましたが、まだ既約分数ではありません。分子と分母はまだ同じ数でわれます。",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "数 ${@0}$ で、{@1}のすぐあとにある数字は何ですか。",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "同じ数を 2 回かけると面積になる数は何ですか。それが 1 辺です。",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "同じ数を 2 回かけて {@0} になる数は何ですか。",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "${@0}$ が {@1} でわりきれるようにするには、$\\square$ にいちばん小さいどの数字を入れればよいですか。",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "{@0} にいちばん小さいどの数字をたせば、和が {@1} でわりきれますか。",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "この長さでもあまりなく切れますが、いちばん長い長さではありません。",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "となり合う面積のたんいのあいだは 100 倍です。",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "分度器で角をはかる：50 度の角",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "分が足りないので、1 度をくずします：${@0} = {@1}$。つぎに ${@2} - {@3} = {@4}$、${@5} - {@6} = {@7}$ で、答えは ${@8}$ です。",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "分が足りないので、1 度を 60 分にくずしましょう。すると、はじめの角は何分になりますか。",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "分が 60 以上になってはいけません。60 分を 1 度にかえましょう。",
  "Má 180°, ramená tvoria priamku, je priamy.": "180° で、2 つの辺が一直線になっているので、平角です。",
  "Má presne 90°, je pravý.": "ちょうど 90° なので、直角です。",
  "NSD; nsn": "最大公約数; 最小公倍数",
  "Na deliteľnosť 6 treba oboje.": "6 でわりきれるには、両方がひつようです。",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "数直線では、大きい数ほど右にあります。負の数はどれも 0 より小さく、どの正の数よりも小さいです。",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "数直線では {@0} のほうが右にあるので、大きいです。だから ${@1} {@2} {@3}$ です。",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "夜のいちばん低い気温は {@0} °C、昼のいちばん高い気温は {@1} °C でした。昼は何度高かったですか。",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "まず 1 つ分：${@0} : {@1} = {@2}$。つぎに {@3} {@4}：${@5}\\cdot {@6} = {@7}$。",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "まずまわりの長さから 1 辺を求めましょう（正方形の 4 つの辺は等しい）。",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "{@0} と {@1} の最大公約数は {@2} です。それで約分します：$\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$。",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "1 とその数 {@0} もかならず約数であることを忘れないようにしましょう。",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "奇数で、各位の数の和 {@0} は 3 でわりきれます。",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "奇数で、各位の数の和 {@0} は 3 でわりきれません。",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "いいえ。{@0} にはたての対称の軸も横の対称の軸もなく、折っても半分どうしが重なりません。",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "分子と分母の両方をわれる、いちばん大きい数を見つけましょう。",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "小数点をとってかけます：${@0}\\cdot {@1} = {@2}$。因数の小数部分はあわせて {@3} {@4}なので、${@5}\\cdot {@6} = {@7}$ です。",
  "O koľko stupňov bolo cez deň teplejšie?": "昼は何度高かったですか。",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "0 °C から {@0} °C まで、気温は何度上がりますか。",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "{@0} °C から 0 °C まで、気温は何度上がりますか。",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "（正方形でない）長方形には対称の軸が 2 本あり、向かい合う辺の真ん中どうしをむすびます。対角線は対称の軸ではありません。",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "1 cm² の正方形に分けた 5 cm × 3 cm の長方形",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "長方形の面積は ${@0}\\,\\text{cm}^2$ で、1 つの辺は ${@1}\\,\\text{cm}$ です。もう 1 つの辺の長さは何 cm ですか。",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "長方形の辺は $a = {@0}\\,\\text{cm}$、$b = {@1}\\,\\text{cm}$ です。面積を cm² で求めましょう。",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "長方形の辺は $a = {@0}\\,\\text{cm}$、$b = {@1}\\,\\text{cm}$ です。まわりの長さを cm で求めましょう。",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "どちらの数も {@0} でわりきれるので、$D({@1}, {@2}) = {@3} &gt; 1$。たがいに素ではありません。",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "面積は辺の積なので、もう 1 つの辺はわり算で求めます。",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "面積は辺の積なので、もう 1 つの辺はひき算ではなく、わり算で求めます。",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "面積はまわりの長さのように 4 でわるのではありません。1 辺は、同じ数を 2 回かけると面積になる数です。",
  "Obsah obdĺžnika: S = a · b.": "長方形の面積：S = a · b。",
  "Obsah štvorca je strana krát strana.": "正方形の面積は 1 辺 × 1 辺です。",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "まわりの長さは正方形の 1 辺ではありません。まず 4 でわると 1 辺になります。",
  "Obvod obdĺžnika: o = 2 · (a + b).": "長方形のまわりの長さ：o = 2 · (a + b)。",
  "Ochladenie znamená odčítať.": "気温が下がるときは、ひき算をします。",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "まわりの長さから長さ a の辺を 2 つひきました。のこりは辺 b が 2 つなので、さらに 2 でわりましょう。",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "気温 {@0} °C から負の気温 {@1} °C をひいています。負の数をひくことは、反対の数をたすことと同じです。",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "高い気温から低い気温をひきましょう。負の数をひくことは、反対の数をたすことと同じです。",
  "Odčítaj minúty.": "分をひきましょう。",
  "Odčítaj stupne.": "度をひきましょう。",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "正の数をひいているので、数直線では左へ進みます。",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "負の数をひくことは、反対の数をたすことです：マイナスとマイナスでプラスになります。",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "負の数をひくことは、反対の数をたすことです：${@0} - ({@1}) = {@2} + {@3} = {@4}$。",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "ある数をひくことは、その反対の数をたすことと同じです。数直線を使って考えましょう。",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "向かい合う辺の真ん中を通る直線のほかに、正方形の対角線も対称の軸です。",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "反対の数は、数直線上で 0 から同じきょりにあり、0 の反対側にあります：{@0} の反対の数は {@1} です。",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "反対の数は、0 からのきょりが同じで、符号が反対です。",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "対称の軸 $o$（点線）は {@0} 行目の横の直線です。点 $A$ は {@1} 行目にあります。その像 $A'$ は何行目にありますか。",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "対称の軸 $o$（点線）は {@0} 列目のたての直線です。点 $A$ は {@1} 列目にあります。その像 $A'$ は何列目にありますか。",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "正三角形では、対称の軸は 1 つの頂点だけでなく、どの頂点も通ります。",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "鋭角三角形は 3 つの角がすべて 90° より小さい三角形です。3 つ目の角も求めるのを忘れないようにしましょう。",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "鋭角は直角より小さい、つまり 90° より小さい角です。",
  "Ostrý, pravý, tupý a priamy uhol": "鋭角、直角、鈍角、平角",
  "Oteplenie znamená pripočítať.": "気温が上がるときは、たし算をします。",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "三角形の成立条件をたしかめましょう：短い 2 辺の和が、いちばん長い辺より大きくなければなりません。",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "まわりの長さの半分は $a + b = {@0} : 2 = {@1}$ なので、$b = {@2} - {@3} = {@4}\\,\\text{cm}$ です。",
  "Polovica obvodu je súčet dvoch susedných strán.": "まわりの長さの半分は、となり合う 2 つの辺の和です。",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "角を直角（90°、ノートのかど）や平角（180°）とくらべましょう。",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "一の位の数字は {@0} で、0 か 5 です。",
  "Posledná číslica je {@0}, je to 0.": "一の位の数字は {@0} で、0 です。",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "一の位の数字は {@0} で、0 でも 5 でもありません。",
  "Posledná číslica je {@0}, nie je to 0.": "一の位の数字は {@0} で、0 ではありません。",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "小数点を反対の向きに動かしました。{@0} でわると、数は小さくなります。",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "小数点を反対の向きに動かしました。{@0} をかけると、数は大きくなります。",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "その数でわりきれるかの見分け方を使いましょう（一の位の数字、各位の数の和、下 2 けた）。",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "がい数にする位のすぐあとの数字を見ましょう：0 – 4 は切り捨て、5 – 9 は切り上げ。",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "よく見ましょう。2 つの数は同じです。",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "3 つの辺がすべて同じ長さではないか見ましょう。そのような三角形には、もっと正確な名前があります。",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "10、100、1 000 の 0 の数が、小数点を何けた動かすかを表します。",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "度と分を別々に計算しましょう。60 分は 1 度です。",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "1 度を分にくずしましたが、度の数を 1 へらしていません。",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "直角三角形には、ちょうど 90° の角が 1 つあります。3 つ目の角を求めてたしかめましょう。",
  "Pravý uhol má presne 90° – ako roh zošita.": "直角はちょうど 90° で、ノートのかどと同じです。",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "文字の真ん中に、たてか横に鏡を立てたところを想像しましょう。",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "図形を直線にそって折ることを想像しましょう。半分どうしがぴったり重なる折り方は何通りありますか。",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "たんいをなおしましょう：${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "だから、いいえ。{@0} は {@1} でわりきれません。",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "だから、はい。{@0} は {@1} でわりきれます。",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "2 つの分数を通分して、分子をくらべましょう。",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "{@0} でわるときは、小数点を左へ {@1} {@2}動かします：{@3}。",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "10 でわりきれるかどうかは、一の位の数字で決まります。0 でなければなりません。",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "2 でわりきれるかどうかは、一の位の数字だけで決まります。偶数でなければなりません。",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "3 でわりきれるかどうかは、一の位の数字ではなく各位の数の和で決まります。すべての数字をたしましょう。",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "4 でわりきれるには、偶数であるだけでは足りません。下 2 けたの数で決まります。",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "5 でわりきれるかどうかは、一の位の数字で決まります。0 か 5 でなければなりません。",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "9 でわりきれるかどうかは各位の数の和で決まります。和が 9 でわりきれなければならず、3 でわりきれるだけでは足りません。",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "{@0} をかけるときは、小数点を右へ {@1} {@2}動かします：{@3}。",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "面積のたんいのあいだは 10 倍ではなく、$10\\cdot 10 = 100$ 倍です：$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$。",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "面積のたんいのあいだは 10 倍ではなく、$10\\cdot 10 = 100$ 倍です：$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$。",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "くり下げるとき、1 度は 100 分ではなく 60 分にかえます。",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "負の数では、0 に近いほうが大きい数です。数字が大きいかどうかでは決まりません。",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "平角は 180° で、2 つの辺が一直線上にあります。",
  "Pripočítaj ešte ${@0}'$.": "さらに ${@0}'$ をたしましょう。",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "正の数をたしているので、数直線では右へ進みます。",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "負の数をたすことは、ひくことと同じです：${@0} + ({@1}) = {@2} - {@3} = {@4}$。",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "負の数をたすことは、数直線上で左へ進むこと、つまりひくことです。",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "素数には約数が 2 つしかありません。{@0} が 2、3、5、7 のどれかでわりきれないか調べましょう。",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "素数には約数がちょうど 2 つ、合成数には 2 つより多くあります。1 には約数がいくつありますか。",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "（正三角形でない）二等辺三角形には対称の軸が 1 本あり、頂点と底辺の真ん中を通ります。",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "二等辺三角形には同じ長さの辺が 2 つあります。",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "正三角形には対称の軸が 3 本あり、どれも頂点と向かい合う辺の真ん中を通ります。",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "正三角形は 3 つの辺がすべて同じ長さです。",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "気温の差：${@0} - ({@1}) = {@2} + {@3} = {@4}$。昼は {@5} °C 高かったです。",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "その位のすぐあとの数字は {@0} で、5 以上なので切り上げます：${@1} \\doteq {@2}$。",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "その位のすぐあとの数字は {@0} で、5 より小さいので切り捨てます：${@1} \\doteq {@2}$。",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "素因数分解がおわっていません：{@0} は素数ではありません。素数でわり続けましょう。",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "2 つの数を素因数分解しましょう。最大公約数は共通の素因数、最小公倍数はすべての素因数（いちばん多く出てくる回数で）からできます。",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "{@0} と {@1} を素因数分解しましょう。最大公約数はいくつですか。",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "{@0} を素数の積に分解しましょう。素因数を小さいじゅんに、セミコロンで区切って書きましょう（くり返すものもすべて）。",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "分母を {@0} に倍分します：$\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$。（または ${@6} : {@7}$ を計算します。）",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "朝の気温は {@0} °C でした。夜までに {@1} °C 下がりました。夜の気温は何 °C でしたか。",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "朝の気温は {@0} °C でした。夜までに {@1} °C 上がりました。夜の気温は何 °C でしたか。",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "不等辺三角形は 3 つの辺の長さがすべてちがいます。もう一度長さをくらべましょう。",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "不等辺三角形には対称の軸がありません。同じ長さの辺が 1 組もないからです。",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "この数字でもたしかにわりきれますが、さがしているのはそのような数字のうちいちばん小さいものです。",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "分数 $\\frac{{@0}}{{@1}}$ を約分して既約分数にしましょう。答えは a/b の形で書きましょう。",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "1 より大きい公約数をさがしましょう。たとえば、2 つの数が 2、3、5、7 でわりきれるか見ましょう。",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "その数が 2、3、5、7 でわりきれるか調べましょう。",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "共通の分母は {@0} です：$\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$、$\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$。${@9} {@10} {@11}$ なので、$\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$ です。",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "点 A が軸から何マスはなれているかを数え、反対側に同じ数だけ数えましょう。",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "同じ長さの辺がいくつあるかを数えましょう。",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "点 A が軸から何マスはなれているかを数え、反対側に同じ数だけ数えましょう。",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "1 辺：$a = {@0} : 4 = {@1}\\,\\text{cm}$。面積：$S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$。",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "1 辺に 2 をかけてしまいました。正方形の面積は 1 辺 × 1 辺で、1 辺 × 2 ではありません。",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "辺をたしてしまいました。長方形の面積は辺の長さの積です。",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "60 と 84 の素因数分解の樹形図",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "度：${@0} + {@1} = {@2}$、分：${@3} + {@4} = {@5}$。${@6}' = 1^\\circ\\,{@7}'$ なので、答えは ${@8}$ です。",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "度：${@0} + {@1} = {@2}$、分：${@3} + {@4} = {@5}$。答えは ${@6}$ です。",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "度：${@0} - {@1} = {@2}$、分：${@3} - {@4} = {@5}$。答えは ${@6}$ です。",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "{@0} と {@1} はたがいに素ですか、そうではありませんか。",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "和がいちばん長い辺と等しいので、辺が一直線上にならんでしまいます。三角形はかけません。",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "角の和は $180^\\circ$ です：$\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "三角形の角の和は 360° ではなく 180° です。",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "三角形の内角の和は 360° ではなく 180° です。",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "三角形の内角の和は 180° です。",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "わかっている数字の和は {@0} です。各位の数の和が {@1} でわりきれなければならないので、いちばん小さい数字は {@2} です。${@3} + {@4} = {@5}$ だからです。",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "積 {@0}·{@1} は公倍数ですが、最小ではありません。2 つの路線はもっと早く同時に出発します。",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "積 {@0}·{@1} は公倍数ですが、最小ではありません。最小公倍数では、それぞれの素因数を、それがいちばん多くふくまれる数での回数だけとります。",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "短い 2 辺をたして、その和をいちばん長い辺とくらべましょう。和が大きければかけます。",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "短い 2 辺をたして、いちばん長い辺とくらべましょう。和のほうが大きくなければなりません。",
  "Sčítaj minúty.": "分をたしましょう。",
  "Sčítaj stupne.": "度をたしましょう。",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "わかっている数字をたしましょう。和が {@0} でわりきれるように、できるだけ小さい数字をたしましょう。",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "2 つの辺しかたしていません。長方形には辺が 4 つあるので、となり合う辺の和をさらに 2 倍しましょう。",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "これで各位の数の和は 3 でわりきれますが、9 でわりきれるには 9 でわりきれなければなりません。",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "それはとなり合う角（補角）の大きさです。対頂角は向かい合っていて、大きさが等しいです。",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "それは最小公倍数です。1 本はリボンより短くなければなりません。さがしているのは最大公約数です。",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "それは最大公約数です。同時に出発する時間は、両方の間かくの倍数でなければなりません。さがしているのは最小公倍数です。",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "それは正方形のまわりの長さです。面積は 1 辺 × 1 辺で求めます。",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "それはまわりの長さです。長方形の面積は辺の長さの積で求めます。",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "それは正方形の 1 辺です。そこから面積を求めましょう。",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "それは正方形の 1 辺です。そこからまわりの長さを求めましょう。",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "それは点 A と軸とのきょりです。像は軸の反対側に同じきょりだけはなれています。その番号を求めましょう。",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "それは 2 つの底角をあわせた大きさです。底角は等しいので、さらに半分にしましょう。",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "3 つ目の角：$180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。いちばん大きい角は ${@3}^\\circ$ で直角なので、直角三角形です。",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "3 つ目の角：$180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。いちばん大きい角は ${@3}^\\circ$ で鈍角なので、鈍角三角形です。",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "3 つ目の角：$180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$。いちばん大きい角は ${@3}^\\circ$ で、すべての角が鋭角なので、鋭角三角形です。",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "三角形の 2 つの内角は ${@0}^\\circ$ と ${@1}^\\circ$ です。角による分類では、どんな三角形ですか。",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "三角形の辺は {@0} cm、{@1} cm、{@2} cm です。辺による分類では、どんな三角形ですか。",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "鈍角三角形には 90° より大きい角が 1 つあります。3 つ目の角を求めてたしかめましょう。",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "鈍角は 90° より大きく、180° より小さい角です。",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "この性質をもつのは 1 だけです。1 より大きい自然数は、素数か合成数のどちらかです。",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "長方形の対角線は対称の軸ではありません。対角線で折っても、半分どうしは重なりません。",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "二等辺三角形の底角は等しく、3 つの角の和は 180° です。",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "底角は等しいです：$(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$。",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "角 $\\alpha$ の大きさは ${@0}^\\circ$ です。そのとなりの角（補角）は何度ですか。",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "角 $\\alpha$ の大きさは ${@0}^\\circ$ です。その対頂角は何度ですか。",
  "Uhol má {@0}°.": "角の大きさは {@0}° です。",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "小数点をうちましょう：${@0}\\cdot {@1}$ はいくつですか。",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "{@0} と {@1} の最大公約数と最小公倍数を求めましょう。「最大公約数; 最小公倍数」のじゅんに書きましょう。",
  "V ktorom riadku leží obraz $A'$?": "像 $A'$ は何行目にありますか。",
  "V ktorom stĺpci leží obraz $A'$?": "像 $A'$ は何列目にありますか。",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "二等辺三角形で、底辺に向かい合う角（頂角）は ${@0}^\\circ$ です。底角はそれぞれ何度ですか。",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "三角形 $ABC$ で $\\alpha = {@0}^\\circ$、$\\beta = {@1}^\\circ$ です。角 $\\gamma$ は何度ですか。",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "となり合う角（補角）はあわせて平角になり、対頂角は等しくなります。",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "となり合う角はあわせて $180^\\circ$ です：$180^\\circ - {@0}^\\circ = {@1}^\\circ$。",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "となり合う角は、あわせて直角ではなく平角（180°）になります。",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "となり合う角はあわせて平角、つまり 360° ではなく 180° になります。",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "対頂角は大きさが等しいので、これも ${@0}^\\circ$ です。",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "分の数を 60 でわりましょう。商が度、あまりが分です。",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "分子と分母を {@0} でわりましょう。どんな分数になりますか（a/b）。",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "${@0}'$ を度と分で表しましょう。「度; 分」の形で書きましょう。",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "両方の分解に出てくる素因数をかけましょう。",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "小数点をとって数をかけ、そのあと 2 つの因数の小数部分のけた数をたしましょう。",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "小数点をとって数をかけましょう：${@0}\\cdot {@1}$。",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "辺をかけてしまいました。それは面積です。まわりの長さは 4 つの辺の長さの和です。",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "${@0} {@1} {@2}$ を計算しましょう。答えは「度; 分」の形で書きましょう。",
  "Vypočítaj ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$ を計算しましょう。",
  "Vypočítaj $|{@0}| + |{@1}|$.": "$|{@0}| + |{@1}|$ を計算しましょう。",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "1 つ分しか計算していません。さらに分子 {@0} をかけましょう。",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "数直線でより右にある数のほうが大きいです。気をつけましょう：−2 は −9 より大きいです。",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "すべての辺が同じ長さなので、正三角形です。",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "3 つの辺の長さがすべてちがうので、不等辺三角形です。",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "バスターミナルから、A 線は {@0} 分ごと、B 線は {@1} 分ごとに出発します。7:00 に 2 つの路線が同時に出発しました。つぎに同時に出発するのは何分後ですか。",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "小さいたんいから大きいたんいにするときは、100 でわります。",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "その位のあとの数字は {@0} です。${@1}$ を{@2}までのがい数にしましょう。",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "分子と分母をとりちがえました。数を分母でわり、その答えに分子をかけましょう。",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "ちがう位でがい数にしました。{@0}までのがい数にするとは、のこす最後の数字が{@1}にあるということです。",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "$\\frac{{@0}}{{@1}}$ を小数で表しましょう。",
  "Zapíš výsledok v poradí NSD; nsn.": "答えを「最大公約数; 最小公倍数」のじゅんに書きましょう。",
  "Zapíš výsledok v tvare stupne; minúty.": "答えを「度; 分」の形で書きましょう。",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "分数 $\\frac{{@0}}{{@1}}$ を小数で表しましょう。",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "整数のように右はしをそろえてしまいました。小数点を上下にそろえなければなりません。{@0} は {@1}0 と書きましょう。",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "小数点を上下にそろえ、0 をおぎないます：${@0} {@1} {@2} = {@3}$。",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "2 つの数をどちらもわりきれる、1 より大きい数があるか調べましょう。",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "分数の線は小数点ではありません。分数はわり算を表します：分子を分母でわりましょう。",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "2 つの分数は等しくありません。通分して分子をくらべましょう。",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "分母のちがう分数は、分子だけ、分母だけではくらべられません。通分しましょう。",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "分母が 10、100、1 000 になるように倍分するか、分子を分母でわりましょう。",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "合成数には、1 とその数のほかにも約数があります。{@0} のそのような約数をさがしましょう。なければ合成数ではありません。",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "軸 o ではなく、方眼の中心について点をうつしてしまいました。",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "長方形の庭の大きさは {@0} m と {@1} m です。庭の面積は何 m² ですか。",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "長方形の庭の大きさは {@0} m と {@1} m です。まわりをフェンスでかこむには、フェンスが何 m ひつようですか。",
  "ani prvočíslo, ani zložené": "素数でも合成数でもない",
  "desatinné miesta": "けた",
  "desatinné miesto": "けた",
  "desatinných miest": "けた",
  "desatín": "小数第 1 位",
  "jednotky (celé čísla)": "一の位（整数）",
  "kladné": "正",
  "kosodĺžnik (rovnobežník)": "平行四辺形",
  "kosoštvorec": "ひし形",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "小さい目もりは 0.01、大きい目もりは 0.1",
  "miesta": "けた",
  "miesto": "けた",
  "napr. 2/3": "例：2/3",
  "napr. 2; 2; 3": "例：2; 2; 3",
  "nekonečne veľa": "かぎりなく多い",
  "nesúdeliteľné": "たがいに素",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "最小公倍数はすべての素因数をふくみます：$n({@0}, {@1}) = {@2} = {@3}$。",
  "ostrouhlý": "鋭角三角形",
  "ostrý (30°)": "鋭角（30°）",
  "podľa strán": "辺による分類",
  "podľa uhlov": "角による分類",
  "pravouhlý": "直角三角形",
  "pravý (90°)": "直角（90°）",
  "priamy": "平角",
  "priamy (180°)": "平角（180°）",
  "prvočíslo": "素数",
  "riadkov": "行",
  "rovnoramenný": "二等辺三角形",
  "rovnoramenný trojuholník": "二等辺三角形",
  "rovnostranný": "正三角形",
  "rovnostranný trojuholník": "正三角形",
  "rôznostranný": "不等辺三角形",
  "rôznostranný trojuholník": "不等辺三角形",
  "stotiny": "小数第 2 位",
  "stotín": "小数第 2 位",
  "stred uhlomera = vrchol uhla": "分度器の中心 = 角の頂点",
  "stupne; minúty": "度; 分",
  "stĺpce": "列",
  "stĺpcov": "列",
  "stĺpec": "列",
  "súdeliteľné": "たがいに素ではない",
  "tupouhlý": "鈍角三角形",
  "tupý (135°)": "鈍角（135°）",
  "zložené číslo": "合成数",
  "záporné": "負",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "はい。{@0} には横の対称の軸があります。",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "はい。{@0} にはたての対称の軸も横の対称の軸もあります。",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "はい。{@0} にはたての対称の軸があります。",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "方眼の上の図形と、線対称な像",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "同時に出発する時間は、両方の間かくの倍数でなければなりません。そのうちいちばん小さいものをさがしましょう。",
  "Číselná os od 2 do 3 s desatinami a stotinami": "0.1 と 0.01 の目もりがある 2 から 3 までの数直線",
  "Číselná os s celými číslami od −6 do 6": "−6 から 6 までの整数の数直線",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "2 つの数は等しくありません。数直線でどちらがより右にあるか調べましょう。",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "1 から 60 までの数（素数に色がついています）",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "その位のあとの数字は {@0} で、5 以上なので切り上げます。",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "その位のあとの数字は {@0} で、5 より小さいので切り捨てます。",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "1 の約数は 1 つ（自分自身）だけなので、素数でも合成数でもありません。",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "6 でわりきれるのは、2 でも 3 でもわりきれるときだけです。両方の条件をたしかめましょう。",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "数を分母でわり、その答えに分子をかけましょう。",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "下 2 けたの数は {@0} で、4 でわりきれます。",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "下 2 けたの数は {@0} で、4 でわりきれません。",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "{@0} の約数は 1 と {@1} の 2 つだけです。素数です。",
  "časti": "つ分",
  "častí": "つ分",
  "časť": "つ分",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "正方形には対称の軸が 4 本あります：2 本は向かい合う辺の真ん中どうしをむすび、2 本は対角線上にあります。",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "正方形の面積は ${@0}\\,\\text{cm}^2$ です。まわりの長さは何 cm ですか。",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "正方形のまわりの長さは ${@0}\\,\\text{cm}$ です。面積は何 cm² ですか。",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "正方形の 1 辺は ${@0}\\,\\text{cm}$ です。面積は何 cm² ですか。",
  "štvorčeková sieť s osou a bodom A": "軸と点 A のある方眼"
 }
});
