/* 日本語: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/r5/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "r5-prirodzene": {
   "title": "自然数とその性質",
   "summary": "大きな数の組と位、大小の比べ方、偶数と奇数。",
   "theory": [
    "<p><strong>自然数</strong>は $1, 2, 3, 4, \\dots$ のように、ものを数えるときに使う数です。いちばん小さい自然数は\n       1 で、いちばん大きい自然数はありません。どんな数にも 1 をたすことができ、その数の<strong>次の数</strong>が得られます。\n       1 小さい数は<strong>前の数</strong>です。</p>",
    "<p>大きな数の数字は、右から 3 けたずつの<strong>組</strong>に分けます：一の組、千の組、百万の組。\n       それぞれの組には百・十・一の位があります。数字の値は、その数字がある位によって決まります。</p>",
    {
     "fig": "r5-triedy",
     "caption": "数 $3\\,042\\,705$ では、数字 4 の値は $40\\,000$ です。一万の位にあるからです。"
    },
    "<p><strong>偶数</strong>は 2 でわり切れる数で、一の位が 0、2、4、6、8 のどれかです。それ以外の数は\n       <strong>奇数</strong>で、一の位が 1、3、5、7、9 のどれかです。偶数か奇数かは、一の位の数字だけで決まります。</p>"
   ],
   "examples": [
    {
     "task": "数字 5、0、8、2 を 1 回ずつ使って、いちばん大きい 4 けたの数といちばん小さい 4 けたの数をつくりなさい。",
     "steps": [
      "いちばん大きい数：大きい数字から順にならべます：$8\\,520$。",
      "いちばん小さい数：小さい数字から順にならべますが、先頭に 0 はおけません：$2\\,058$。"
     ]
    },
    {
     "task": "$499\\,999$ の次の数と前の数を答えなさい。",
     "steps": [
      "次の数：$499\\,999 + 1 = 500\\,000$。",
      "前の数：$499\\,999 - 1 = 499\\,998$。"
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "がい数（四捨五入）",
   "summary": "十の位・百の位・千の位までのがい数、計算の見積もり。",
   "theory": [
    "<p><strong>四捨五入</strong>では、数をいちばん近い「きりのよい」数におきかえます。記号 $\\doteq$\n       （「ほぼ等しい」と読みます）を使います：$3\\,467 \\doteq 3\\,470$（十の位まで）。</p>",
    "<p><strong>きまり：</strong>がい数にする位の<em>すぐ右</em>の数字を見ます。\n       0、1、2、3、4 なら<strong>切り捨て</strong>、5、6、7、8、9 なら<strong>切り上げ</strong>ます。\n       右側の数字は 0 にします。</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "数を動かして、どの十（緑の点）、どの百（弧）にいちばん近いかを観察しましょう。"
    },
    "<p><strong>見積もり：</strong>正確に計算する前に、数をがい数にして答えを見積もることができます。\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$。見積もりは計算のまちがいを見つけるのに役立ちます。</p>"
   ],
   "examples": [
    {
     "task": "$72\\,649$ を四捨五入して百の位までのがい数にしなさい。",
     "steps": [
      "百の位は 6 で、そのすぐ右は 4 です。",
      "4 は 5 より小さいので切り捨てます。百の位は 6 のままです。",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "$5\\,962$ を四捨五入して十の位までのがい数にしなさい。",
     "steps": [
      "十の位は 6 で、右は 2 なので切り捨てます。",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "百の位までなら $6\\,000$ になります。百の位の右が 6 だからです。"
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "ローマ数字",
   "summary": "大きな数や年号の書き方、ひき算のきまり、両方向への書きかえ。",
   "theory": [
    "<p>ローマ数字：$\\text{I} = 1$、$\\text{V} = 5$、$\\text{X} = 10$、$\\text{L} = 50$、$\\text{C} = 100$、\n       $\\text{D} = 500$、$\\text{M} = 1\\,000$。ふつうに書けるいちばん大きい数は $3\\,999 = \\text{MMMCMXCIX}$ です。</p>",
    "<p><strong>書き方のきまり：</strong></p>\n       <ol><li>記号は大きいものから小さいものへ順に書き、その値をたします：$\\text{MDCLX} = 1\\,660$。</li>\n       <li>I、X、C、M は続けて 3 回まで書けます。V、L、D はくり返しません。</li>\n       <li>大きい記号の前にある小さい記号はひきます。ひけるのは I、X、C だけで、すぐ上の 2 つの大きい記号の前にだけおけます。</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "ひき算をする 6 つの組。ほかの組（たとえば IL や IC）はまちがいです。"
    },
    "<p><strong>ローマ数字への書きかえ</strong>は、位ごとに行います：千、百、十、一。\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$。</p>"
   ],
   "examples": [
    {
     "task": "$2\\,026$ 年をローマ数字で書きなさい。",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$。",
      "$2\\,000 = \\text{MM}$、$20 = \\text{XX}$、$6 = \\text{VI}$。",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "$\\text{CDXLIX}$ はいくつですか。",
     "steps": [
      "まとまりに分けます：$\\text{CD} = 400$、$\\text{XL} = 40$、$\\text{IX} = 9$。",
      "$400 + 40 + 9 = 449$。",
      "注意：49 は IL ではなく XLIX です。",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "四則計算と計算の順序",
   "summary": "たし算、ひき算、かけ算、わり算、かっこ、くふうした計算。",
   "theory": [
    "<p>式を計算するときは<strong>計算の順序</strong>を守ります：まずかっこの中、次にかけ算とわり算\n       （左から右へ）、最後にたし算とひき算（左から右へ）。</p>",
    {
     "fig": "r5-poradie",
     "caption": "計算の順序。同じ段の計算は左から右へ行います。"
    },
    "<p><strong>くふうした計算：</strong>たし算とかけ算では、数の順序を入れかえたり、組み合わせを変えたりできます：\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$。\n       分配法則も役立ちます：$36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$。</p>",
    "<p><strong>用語：</strong>たされる数 + たす数 = 和、ひかれる数 − ひく数 = 差、因数 · 因数 = 積、\n       わられる数 : わる数 = 商。わからない数は逆の計算で求めます：$\\square\\cdot 8 = 96$ なら $\\square = 96 : 8 = 12$。</p>"
   ],
   "examples": [
    {
     "task": "$120 - 6\\cdot(14 - 5)$ を計算しなさい。",
     "steps": [
      "かっこ：$14 - 5 = 9$。",
      "かけ算：$6\\cdot 9 = 54$。",
      "ひき算：$120 - 54 = 66$。",
      "<strong>答え：66</strong>"
     ]
    },
    {
     "task": "$5\\cdot 63\\cdot 20$ をくふうして計算しなさい。",
     "steps": [
      "$5\\cdot 20 = 100$ を先にまとめます。",
      "$100\\cdot 63 = 6\\,300$。",
      "<strong>答え：$6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "倍数と約数",
   "summary": "倍数と約数とは何か、その見つけ方、2・3・5・10 でわり切れる数の見分け方。",
   "theory": [
    "<p>ある数の<strong>倍数</strong>は、その数に $1, 2, 3, \\dots$ をかけて得られます。6 の倍数は\n       $6, 12, 18, 24, \\dots$ で、限りなくあります。</p>",
    "<p>ある数の<strong>約数</strong>は、その数をわり切ることのできる数です。12 の約数は $1, 2, 3, 4, 6, 12$ です。\n       ペアで見つけます：$12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$。1 とその数自身は、いつも約数です。</p>",
    {
     "fig": "r5-delitele",
     "caption": "12 個の点は $1\\cdot 12$、$2\\cdot 6$、$3\\cdot 4$ の長方形にならべられます。たてと横の数が 12 の約数です。"
    },
    "<p><strong>わり切れる数の見分け方：</strong>一の位が 0、2、4、6、8 なら <strong>2</strong> でわり切れます。\n       一の位が 0 か 5 なら <strong>5</strong>、一の位が 0 なら <strong>10</strong> でわり切れます。\n       各位の数字の和が 3 でわり切れれば、<strong>3</strong> でわり切れます。</p>"
   ],
   "examples": [
    {
     "task": "18 の約数をすべて求めなさい。",
     "steps": [
      "ペアをさがします：$18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$。",
      "4 と 5 は約数ではなく、その先はペアがくり返します。",
      "<strong>約数：1、2、3、6、9、18。</strong>"
     ]
    },
    {
     "task": "$4\\,215$ は 3 でわり切れますか。",
     "steps": [
      "各位の数字の和：$4 + 2 + 1 + 5 = 12$。",
      "12 は 3 でわり切れます。",
      "<strong>はい、$4\\,215$ は 3 でわり切れます。</strong>（$4\\,215 : 3 = 1\\,405$）"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "分数の基本",
   "summary": "全体の一部、分子と分母、ある数の何分のいくつ、分数の大小。",
   "theory": [
    "<p>全体を<strong>等しい</strong>大きさに分けると、その 1 つ分が全体の一部になります：2 分の 1 $\\frac{1}{2}$、\n       3 分の 1 $\\frac{1}{3}$、4 分の 1 $\\frac{1}{4}$… 分数 $\\frac{3}{8}$ は、全体を 8 等分してそのうち 3 つをとることを意味します。</p>",
    "<p>分数の線の下の数は<strong>分母</strong>で、全体をいくつに分けたかをあらわします。\n       線の上の数は<strong>分子</strong>で、そのうちいくつをとるかをあらわします。</p>",
    {
     "fig": "r5-zlomky",
     "caption": "ケーキの $\\frac{1}{2}$、$\\frac{1}{4}$、$\\frac{3}{8}$ と、テープの $\\frac{2}{5}$。"
    },
    "<p><strong>ある数の何分のいくつ：</strong>20 の $\\frac{3}{4}$ は、20 を分母でわり（$20 : 4 = 5$、これが 4 分の 1）、\n       分子をかけて（$5\\cdot 3 = 15$）求めます。<br>\n       <strong>大小の比べ方：</strong>分母が同じなら、分子が大きいほうが大きい分数です：$\\frac{5}{7} &gt; \\frac{3}{7}$。\n       分子が同じなら、分母が小さいほうが大きい分数です：$\\frac{1}{3} &gt; \\frac{1}{5}$（3 分の 1 は 5 分の 1 より大きなひと切れです）。</p>"
   ],
   "examples": [
    {
     "task": "35 の $\\frac{2}{5}$ はいくつですか。",
     "steps": [
      "5 分の 1：$35 : 5 = 7$。",
      "5 分の 2：$7\\cdot 2 = 14$。",
      "<strong>35 の $\\frac{2}{5}$ は 14 です。</strong>"
     ]
    },
    {
     "task": "道のりの 3 分の 1 は 4 km です。道のり全体は何 km ですか。",
     "steps": [
      "道のり全体は 3 分の 1 が 3 つ分です。",
      "$3\\cdot 4 = 12$。",
      "<strong>道のり全体は 12 km です。</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "基本的な図形",
   "summary": "点、直線、半直線、線分、円周と円。",
   "theory": [
    "<p><strong>点</strong>は大文字（A、B、S）であらわします。異なる 2 点を通る<strong>直線</strong>はちょうど 1 本です。\n       直線はまっすぐで、はじまりもおわりもありません。小文字（$p$）か 2 つの点（直線 $AB$）であらわします。</p>",
    "<p><strong>半直線</strong>は、はじまりはありますがおわりはありません：半直線 $AB$ は点 A から始まり、点 B を通ってその先へ続きます。\n       <strong>線分</strong> $AB$ は直線のうち点 A と点 B の間の部分で、両はしの点があり、長さをはかることができます。</p>",
    {
     "fig": "r5-utvary",
     "caption": "点線は、線がどこまでも続くことを示しています。右は中心 S、半径 r、直径 d の円です。"
    },
    "<p><strong>円周</strong>は、どの点も中心 S から同じ距離にある線です。この距離が<strong>半径</strong> $r$ です。\n       <strong>直径</strong> $d$ は中心を通り、半径の 2 倍の長さです：$d = 2\\cdot r$。<strong>円</strong>は、円周とその内側全体をあわせたものです。</p>"
   ],
   "examples": [
    {
     "task": "円の直径は 14 cm です。半径は何 cm ですか。",
     "steps": [
      "半径は直径の半分です。",
      "$14 : 2 = 7$。",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "どの 3 点も一直線上にない 4 つの点があります。線分はいくつ引けますか。",
     "steps": [
      "点 A、B、C、D。それぞれの点を他のすべての点と結びます：AB、AC、AD、BC、BD、CD。",
      "<strong>6 本です。</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "正方形・長方形・三角形のまわりの長さ",
   "summary": "まわりの長さの計算、わからない辺の長さ、異なる単位での計算。",
   "theory": [
    "<p>多角形の<strong>まわりの長さ</strong>は、すべての辺の長さの和です。$o$ であらわします。</p>",
    {
     "fig": "r5-obvod",
     "caption": "正方形、長方形、三角形のまわりの長さの公式。"
    },
    "<p><strong>正方形：</strong>$o = 4\\cdot a$。<strong>長方形：</strong>$o = 2\\cdot(a + b)$。\n       <strong>三角形：</strong>$o = a + b + c$；正三角形なら $o = 3\\cdot a$。</p>",
    "<p>たす前に、すべての長さを<strong>同じ単位</strong>にそろえなければなりません。長方形の辺が $3\\,\\text{dm}$ と $12\\,\\text{cm}$ なら、\n       まず $3\\,\\text{dm} = 30\\,\\text{cm}$ になおし、それから $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$ とします。</p>"
   ],
   "examples": [
    {
     "task": "三角形の辺の長さは 7 cm、9 cm、12 cm です。まわりの長さを求めなさい。",
     "steps": [
      "$o = 7 + 9 + 12$。",
      "$o = 28\\,\\text{cm}$。"
     ]
    },
    {
     "task": "長方形のまわりの長さは 50 m で、1 つの辺は 15 m です。もう 1 つの辺は何 m ですか。",
     "steps": [
      "まわりの長さの半分は $a + b = 50 : 2 = 25$。",
      "$b = 25 - 15 = 10$。",
      "<strong>もう 1 つの辺は $10\\,\\text{m}$ です。</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "長さ・重さ・かさ・時間の単位",
   "summary": "単位の換算、複数の単位をふくむ量、適切な単位の選び方。",
   "theory": [
    "<p><strong>長さ：</strong>km、m、dm、cm、mm。<strong>重さ：</strong>t、kg、dag、g。\n       <strong>かさ（体積）：</strong>hl、l、dl、ml。<strong>時間：</strong>日、時間（h）、分（min）、秒（s）。</p>",
    {
     "fig": "r5-jednotky",
     "caption": "単位のはしご。矢印は、大きい単位 1 つが小さい単位いくつ分かを示しています。"
    },
    "<p><strong>小さい単位へ</strong>はかけ算をします：$3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$。\n       <strong>大きい単位へ</strong>はわり算をします：$4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$。\n       複数の単位をふくむ量は部分ごとに換算します：$2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$。</p>",
    "<p>時間には注意しましょう：「10」ではなく <strong>60</strong> です（1 時間は 60 分、1 分は 60 秒）。また 1 日は <strong>24</strong> 時間です。</p>"
   ],
   "examples": [
    {
     "task": "$3\\,\\text{l}\\ 4\\,\\text{dl}$ をデシリットルになおしなさい。",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$。",
      "$30 + 4 = 34$。",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "映画は 18:40 に始まり、20:15 に終わりました。何分間でしたか。",
     "steps": [
      "18:40 から 19:00 までは 20 分。",
      "19:00 から 20:00 までは 60 分、20:00 から 20:15 までは 15 分。",
      "$20 + 60 + 15 = 95$。",
      "<strong>映画は 95 分間でした。</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "文章題の解き方",
   "summary": "いくつかの段階で解く問題、全体の一部、和と差、切り上げ。",
   "theory": [
    "<p>文章題を解くときは：<strong>1.</strong> 問題を読み、わかっていることと求めることを書く；<strong>2.</strong>\n       どの順に計算するか考える；<strong>3.</strong> 計算する；<strong>4.</strong> 検算または見積もりをする；\n       <strong>5.</strong> 答えを文で書く。</p>",
    "<p><strong>線分図</strong>は、和と差の問題で役に立ちます。2 人の持っているお金が合わせて 50 € で、一方がもう一方より 8 € 多いなら、\n       まず差をひきます。そうすると 2 人は同じ金額になります。</p>",
    {
     "fig": "r5-model",
     "caption": "線分図：$50 - 8 = 42$、$42 : 2 = 21$。年下の人は 21 €、年上の人は $21 + 8 = 29$ € です。"
    },
    "<p><strong>あまり</strong>に注意しましょう：23 人の子どもが車に乗り、1 台に 4 人ずつ乗れるとき、$23 : 4 = 5$（あまり 3）台では足りません。\n       のこりの 3 人にはもう 1 台必要なので、車は 6 台いります。</p>"
   ],
   "examples": [
    {
     "task": "ゆいさんは 120 ユーロ持っていました。その 3 分の 1 をくつに、25 ユーロを本に使いました。何ユーロのこっていますか。",
     "steps": [
      "120 の 3 分の 1：$120 : 3 = 40$ ユーロ。",
      "使ったお金は合わせて $40 + 25 = 65$ ユーロ。",
      "のこりは $120 - 65 = 55$ ユーロ。",
      "<strong>答え：ゆいさんには 55 ユーロのこっています。</strong>"
     ]
    },
    {
     "task": "父は 42 才で、息子の 3 倍の年齢です。6 年後、息子は何才になりますか。",
     "steps": [
      "息子は今 $42 : 3 = 14$ 才です。",
      "6 年後：$14 + 6 = 20$。",
      "<strong>答え：息子は 20 才になります。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$ なので、答えは $1\\,000\\cdot {@0} = {@1}$ です。",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$ なので、${@3} : {@4} = {@5}$ です。",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$ なので、${@3}\\cdot {@4} = {@5}$ です。",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$ なので、$25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$ です。",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$、$\\text{{@2}} = {@3}$。和：${@4} + {@5} = {@6}$（ローマ数字では {@7}）。",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$ なので、$b = {@2} - {@3} = {@4}$。もう 1 つの辺は ${@5}\\,\\text{{@6}}$ です。",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$。1 辺は ${@2}\\,\\text{{@3}}$ です。",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$。3 つ目の辺は ${@4}\\,\\text{{@5}}$ です。",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$。直径は ${@2}\\,\\text{{@3}}$ です。",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$。まわりの長さは ${@4}\\,\\text{{@5}}$ です。",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$。まわりの長さは ${@3}\\,\\text{{@4}}$ です。",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$。半径は ${@2}\\,\\text{{@3}}$ です。",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$（これが ${@3}$）、つぎに ${@4}\\cdot {@5} = {@6}$。",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$、あまり {@3}。{@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$。ほかの数は {@3} でわるとあまりが出ます。",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$、${@2} \\doteq {@3}$。見積もり：${@4} {@5} {@6} = {@7}$。（正確な答えは ${@8}$ です。）",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "{@1} の ${@0}$ は ${@2} : {@3} = {@4}$。${@5}$ は ${@6}\\cdot {@7} = {@8}$。{@9}",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$、そこにのこりをたします：${@4} + {@5} = {@6}$。",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$。",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4：切り捨て、5 – 9：切り上げ。右の数字は 0 にします。",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = 三百四万二千七百五",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1}（十の位まで）</span> · <span class=\"c-accent\">{@2} ≐ {@3}（百の位まで）</span>",
  "Aké číslo je $\\text{{@0}}$?": "$\\text{{@0}}$ はどんな数ですか。",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "組 $\\text{{@0}}$ の大きさはいくつですか。",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "数 ${@1}$ の中の数字 {@0} は、どれだけの大きさを表していますか。",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "色をぬった部分は全体のどれだけですか。a/b の形の分数で書きましょう（例：2/5）。{@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "長方形のまわりの長さはいくつですか（{@0} で）。",
  "Aký je obvod obdĺžnika v centimetroch?": "長方形のまわりの長さは何 cm ですか。",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "8 € のちがいがなければ、2 人は同じ金がくになります：(50 − 8) : 2 = 21 €。",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "ちがいをのぞくと：${@0} - {@1} = {@2}$。これは弟の金がくの 2 倍です：${@3} : 2 = {@4}$。{@5} たしかめ：${@6} + {@7} = {@8}$。",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "点 {@0}。線分：{@1}。ぜんぶで {@2} 本。",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "全体は {@0} {@1}されていて（分母）、{@2}（分子）：${@3}$。",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "全体はその部分の {@0} {@1}です：${@2}\\cdot {@3} = {@4}$、つまり ${@5}\\,\\text{{@6}}$ です。",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "全体は同じ大きさの {@0} つの部分でできています。かけ算をしましょう。",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "ブラチスラバからコシツェまで電車でかかる時間はおよそ",
  "Cez dva body vieme viesť jedinú priamku.": "2 つの点を通る直線は 1 本だけひけます。",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "各位の数の和：${@0} = {@1}$。3 でわりきれます。",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "各位の数の和：${@0} = {@1}$。3 でわりきれません。",
  "Desatina": "10 分の 1",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "1 日は 24 時間です：${@0}\\cdot 24 = {@1}$、さらに ${@2} + {@3} = {@4}$ 時間。",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "日と時間をそのままたすことはできません。まず {@0} 日を時間になおしましょう。",
  "Do hrnčeka sa zmestí asi": "マグカップに入る量はおよそ",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "分母には、色をぬっていない部分だけでなく、すべての部分の数が入ります。",
  "Do vane sa zmestí asi": "浴そうに入る量はおよそ",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "{@1}の{@0}には ${@2}\\,\\text{{@3}}$ 入ります。{@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "□に入る数を書きましょう：$\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "□に入る数を書きましょう：$\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "2 日目に歩いたのは {@0} km ではなく、1 日目より {@1} km 多い道のりです。",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "2 日目：${@0} + {@1} = {@2}$ km。3 日目：${@3} : 2 = {@4}$ km。あわせて：${@5} + {@6} + {@7} = {@8}$ km。",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "兄弟 2 人はあわせて {@0} {@1}持っています。兄は弟より {@2} {@3}多く持っています。{@4}は何ユーロ持っていますか。",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "長方形にならべた 12 この点",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "{@0} の組は使えません。ひいてよいのは、I を V と X の前に、X を L と C の前に、C を D と M の前に書くときだけです。",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "組：${@0} = {@1}$。約数：{@2}。",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "組：${@0} = {@1}$。約数：{@2}。この数の約数は 2 つだけです。",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "ちがう 2 つの点を通る直線は、ちょうど 1 本です。",
  "Dĺžka triedy je asi": "教室の長さはおよそ",
  "Hmotnosť jablka je asi": "りんご 1 この重さはおよそ",
  "Hmotnosť nákladného auta je asi": "トラックの重さはおよそ",
  "Hmotnosť žiaka 5. ročníka je asi": "5 年生の児童の体重はおよそ",
  "Hrúbka zošita je asi": "ノートの厚さはおよそ",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "{@0} の九九で、{@1} をこえない最後の答えをさがしましょう。",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "さがしているのは{@0}数ですが、つくったのは{@1}数です。",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "反対です。直径は半径の 2 倍です：$d = 2\\cdot r$。",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "数 ${@0}$ は {@1} でわりきれますか。",
  "Je číslo ${@0}$ párne alebo nepárne?": "数 ${@0}$ は偶数ですか、奇数ですか。",
  "Jeden deň má 24 hodín.": "1 日は 24 時間です。",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "1 つ分は {@0} です。{@2} の ${@1}$ はいくつですか。",
  "Koľko eur je {@0} z {@1} eur?": "{@1} ユーロの{@0}は何ユーロですか。",
  "Koľko eur má mladší brat?": "弟は何ユーロ持っていますか。",
  "Koľko eur má starší brat?": "兄は何ユーロ持っていますか。",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "和 {@0} からちがい {@1} をひくと、何ユーロのこりますか。",
  "Koľko eur {@0} spolu?": "あわせて何ユーロ{@0}か。",
  "Koľko eur {@0} zostalo?": "何ユーロのこりましたか。",
  "Koľko gramov váži celý koláč?": "ケーキ全体の重さは何 g ですか。",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "{@0} 日と {@2} 時間は、何時間ですか。",
  "Koľko hodín majú {@0} {@1}?": "{@0} 日は何時間ですか。",
  "Koľko je ${@0}$ z čísla {@1}?": "{@1} の ${@0}$ はいくつですか。",
  "Koľko je polovica obvodu, teda $a + b$?": "まわりの長さの半分、つまり $a + b$ はいくつですか。",
  "Koľko kilometrov meria celá cesta?": "道のり全体は何 km ですか。",
  "Koľko kilometrov prešli druhý deň?": "2 日目に何 km 歩きましたか。",
  "Koľko kilometrov prešli tretí deň?": "3 日目に何 km 歩きましたか。",
  "Koľko kilometrov prešli za tri dni spolu?": "3 日間であわせて何 km 歩きましたか。",
  "Koľko litrov sa zmestí do celej nádrže?": "タンク全体には何 l 入りますか。",
  "Koľko minút trvala celá cesta?": "旅全体で何分かかりましたか。",
  "Koľko minút uplynie od {@0} do {@1}?": "{@0} から {@1} まで何分たちますか。",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "1 から {@1} まで（{@1} もふくむ）に、{@0} の倍数はいくつありますか。",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "{@1} 年後、{@0}は何さいになりますか。",
  "Koľko rokov má {@0} teraz?": "{@0}はいま何さいですか。",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "どの 3 つも一直線上にない {@0} この点があります。線分はいくつできますか。（どの 2 つの点も線分でむすびます。）",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "どの 3 つも一直線上にない {@0} この点があります。線分はいくつできますか。（どの 2 つの点も線分でむすびます。）",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "{@0} をいくつ分とれば {@1} になりますか。",
  "Kruh je kružnica aj s celou vnútornou časťou.": "円は、円周とその内側の部分をあわせたものです。",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "円周は線だけで、円はその内側の面もふくみます。",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "円の半径は ${@0}\\,\\text{{@1}}$ です。直径はいくつですか（{@2} で）。",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "円の直径は ${@0}\\,\\text{{@1}}$ です。半径はいくつですか（{@2} で）。",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "数 ${@0}$ で、{@1}のすぐ右にある数字は何ですか。",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "たすと $1\\,000$ になる 2 つの数はどれですか。",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "かけるとちょうど 100 になる 2 つの数はどれですか。",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "四捨五入して{@1}までのがい数にすると ${@2}$ になる自然数のうち、{@0}数はいくつですか。",
  "Ktoré z čísel je násobkom čísla {@0}?": "つぎの数のうち、{@0} の倍数はどれですか。",
  "Ktoré z čísel je {@0}?": "つぎの数のうち、{@0}数はどれですか。",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "{@1} をこえない {@0} の倍数のうち、いちばん大きいものはいくつですか。",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "数 ${@0}$ をローマ数字で正しく書いたものはどれですか。",
  "Mama": "お母さん",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "分母が同じなので、分子で決まります：${@0} {@1} {@2}$。",
  "Meníš na menšiu jednotku, preto násob.": "小さいたんいになおすので、かけ算をします。",
  "Meníš na väčšiu jednotku, preto deľ.": "大きいたんいになおすので、わり算をします。",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "ひく数はたし算ではわかりません。ひかれる数からちがいをひきましょう。",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "ひく数はひき算でわかります：${@0} - {@1} = {@2}$。",
  "Minul": "使いました",
  "Minula": "使いました",
  "Mladší má {@0} {@1}.": "弟は {@0} {@1}持っています。",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "${@0}$ にがい数で表すのは、${@1}$（切り上げ）から ${@2}$（切り捨て）までの数です。{@3}は ${@4}$ です。",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "農場でたまごを {@0} {@1}集めました。1 パックにはたまごが {@2} こ入ります。たまごをぜんぶ入れるには、パックはいくつひつようですか。",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "小さいたんいにはかけ算、大きいたんいにはわり算でなおします。",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "千の位には、0 ではないいちばん小さい数字をおきましょう。",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "遠足に {@0} {@1}が行きます。ボート 1 そうには {@3} {@4}が乗れます。子どもが全員いっしょに乗るには、ボートは何そうひつようですか。",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "のこりの分にもう 1 パックいるので、あわせて {@0} {@1}です。",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "のこりの分にもう 1 そうボートがいるので、あわせて {@0} {@1}です。",
  "Najmenšie": "いちばん小さいもの",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "まず、ちょうどの時こくまでを計算し、そのあとのこりをたしましょう。1 時間は 60 分です。",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "まず 2 つの数を算用数字になおしてから、たしましょう。",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "まずたんいをそろえます：${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$。つぎに $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$。",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "まず全体の金がくのうちの部分を計算し、つぎに使ったお金をぜんぶたして、それをひきましょう。",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "まず、それぞれの数を百の位までのがい数にしてから計算しましょう。",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "まず {@1} {@2}という情報から、いまの{@0}の年れいを調べ、そのあと {@3} をたしましょう。{@5} 年後の{@4}は、もう {@7}ではありません。",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "まず 1 つ分がいくつかを調べ（分母でわる）、つぎに分子をかけましょう。",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "まず子どもがいま何さいかを調べ（わり算）、そのあとたしましょう。",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "まずかっこ、つぎにかけ算、さいごにひき算です。",
  "Najväčšia číslica patrí na miesto tisícov.": "いちばん大きい数字は千の位におきます。",
  "Najväčšie": "いちばん大きいもの",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "線分図をかきましょう。和からちがいをひくと、のこりを兄弟 2 人で同じに分けます。",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "数字だけを書きました。数字の大きさは、その位によってかわります。正しい数の 0 をあとにつけましょう。",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "{@0} の約数をすべて書きましょう。セミコロンで区切りましょう。",
  "Napíš {@0} čísla ${@1}$.": "数 ${@1}$ の{@0}を書きましょう。",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "次の数は 1 大きい数です：${@0} + 1 = {@1}$。",
  "Nasledovník je číslo o 1 väčšie.": "次の数は 1 大きい数です。",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "わられる数はかけ算で求めます：${@0}\\cdot {@1} = {@2}$。",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "わられる数はわり算ではなく、かけ算で求めます。商にわる数をかけましょう。",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "わからない因数はわり算で求めます：${@0} : {@1} = {@2}$。",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "わからない因数はかけ算ではなく、わり算で求めます。積をわかっている因数でわりましょう。",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "いくつかの線分を 2 回数えました。線分 AB と BA は同じです。2 つの点の組は 1 回だけ数えましょう。",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "がい数にする位を見つけて、1 つ右に進みましょう。",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "倍数：{@0}、{@1}、{@2}、…、{@3}。最後は ${@4}\\cdot {@5} = {@6}$ で、つぎの ${@7}$ はもう {@8} より大きいです。ぜんぶで {@9} こです。",
  "Obdĺžnik má dve dvojice rovnakých strán.": "長方形には同じ長さの辺の組が 2 つあります。",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "長方形のまわりの長さは ${@0}\\,\\text{{@1}}$ で、1 つの辺は ${@2}\\,\\text{{@3}}$ です。もう 1 つの辺の長さはいくつですか（{@4} で）。",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "長方形の辺は ${@0}\\,\\text{dm}$ と ${@1}\\,\\text{cm}$ です。まわりの長さを cm で求めましょう。",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "まわりの長さは、となり合う 2 つの辺の和の 2 倍です。",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "長方形のまわりの長さは $2\\cdot(a + b)$ です。",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "まわりの長さには、どの辺も 2 回ずつ入っています。まず 2 でわってから、わかっている辺をひきましょう。",
  "Obvod štvorca, obdĺžnika a trojuholníka": "正方形、長方形、三角形のまわりの長さ",
  "Od obvodu odčítaj dĺžky známych strán.": "まわりの長さから、わかっている辺の長さをひきましょう。",
  "Od obvodu {@0} odčítaj {@1}.": "まわりの長さ {@0} から {@1} をひきましょう。",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "和からちがいを正しくひきましたが、のこりはさらに兄弟 2 人で同じに分けなければなりません。",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "和 {@0} から、わかっている辺 {@1} をひきましょう。",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "{@0} から {@1} までが {@2} 分、{@3} から {@4} までが {@5} 分です。あわせて ${@6} + {@7} = {@8}$ 分です。",
  "Od {@0} do {@1} uplynulo {@2} minút.": "{@0} から {@1} までに {@2} 分たちました。",
  "Odčítaj": "ひき",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "1 つの辺しかひいていません。まわりの長さから、わかっている 2 つの辺をひきましょう。",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "ゲームのお金しかひいていません。本の {@0} {@1}もひくのを忘れないようにしましょう。",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "本のお金しかひいていません。ゲームの金がくもひきましょう。それは全部のお金の{@0}です。",
  "Osmina": "8 分の 1",
  "Otec": "お父さん",
  "Podiel vynásob deliteľom.": "商にわる数をかけましょう。",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "半径は直径より短いので、直径は 2 でかけるのではなく、わります。",
  "Polovica": "半分",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "まわりの長さの半分は、となり合う 2 つの辺の和です。そこからさらに、わかっている辺をひきましょう。",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "長方形のまわりの長さの半分は、となり合う 2 つの辺の和です。",
  "Polovicu": "半分",
  "Polpriamka má jeden začiatočný bod.": "半直線には始まりの点が 1 つあります。",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "半直線は 1 つの点から始まり、一方向にだけ、おわりなくのびています。",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "半直線は 1 つの点から始まり、反対側にはおわりなくのびています。",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "点に文字で名前をつけ、すべての組をじゅんに書き出しましょう：まず A をふくむ組、つぎに B をふくむ組…",
  "Poradie operácií": "計算のじゅんじょ",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "左から数字をくらべ、はじめてちがう数字を見つけましょう。",
  "Posledná číslica je {@0}, je párna.": "一の位の数字は {@0} で、偶数です。",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "一の位の数字は {@0} で、0 でも 5 でもありません。",
  "Posledná číslica je {@0}, nie je 0.": "一の位の数字は {@0} で、0 ではありません。",
  "Posledná číslica je {@0}, nie je párna.": "一の位の数字は {@0} で、偶数ではありません。",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "一の位の数字は {@0} なので、この数は{@1}です。",
  "Posledná číslica je {@0}.": "一の位の数字は {@0} です。",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "{@0}がわかっているので、全体はそれより大きいです。部分はわるのではなく、かけましょう。",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "気をつけましょう。分母が大きいからといって、分数が大きいわけではありません。全体を多くの部分に分けるほど、1 つの部分は小さくなります。",
  "Pozri sa iba na poslednú číslicu.": "一の位の数字だけを見ましょう。",
  "Pozri sa na poslednú číslicu.": "一の位の数字を見ましょう。",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "がい数にする位のすぐ右の数字を見ましょう：0 – 4 は切り捨て、5 – 9 は切り上げ。",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "よく見ましょう。2 つの分数は分子も分母も同じです。",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "左から右へ計算してしまいました。かけ算はひき算より先です。まず {@0} にかっこの答えをかけて、それから {@1} からひきましょう。",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "左から右へ計算してしまいました。かけ算はたし算より先です。たす前に ${@0}\\cdot {@1}$ を計算しましょう。",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "かっこがないものとして計算してしまいました。{@0} はかっこの中の差全体にかかります。かっこを最初に計算しましょう。",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "前の数は 1 小さい数です：${@0} - 1 = {@1}$。",
  "Predchodca je číslo o 1 menšie.": "前の数は 1 小さい数です。",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "そのものを思いうかべて、知っているものとくらべましょう（たとえば小麦粉 1 kg、1 m は大また 1 歩、1 l はびん 1 本）。",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "時間を分になおしただけです。1 分はさらに 60 秒です。",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "秒を分になおしただけです。1 時間は 60 分なので、さらに 60 でわりましょう。",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "${@0}\\,\\text{dm}$ を cm になおしましょう。",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "${@0}\\,\\text{{@1}}$ を {@2} になおしましょう。",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "dm を cm になおしてから（$1\\,\\text{dm} = 10\\,\\text{cm}$）計算しましょう。",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "長さ、重さ、かさ、時間のたんいのなおし方",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "3 でわりきれるかどうかは、一の位の数字では決まりません。すべての数字をたして、その和が 3 でわりきれるかを調べましょう。",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "{@0} でわりきれるかどうかは、一の位の数字だけで決まります。もう一度その数字を見て、わりきれる数の見分け方とくらべましょう。",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "時間は 10 ずつではなおしません。1 時間は 60 分、1 分は 60 秒です。",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "時間は 100 ずつではなおしません：1 {@0} = 60 {@1} なので、60 でわりましょう。",
  "Priamka je nekonečná na obe strany.": "直線は両方向にかぎりなくのびています。",
  "Priamka má začiatok aj koniec.": "直線には始まりもおわりもあります。",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "直線にはおわりがなく、半直線には始まりがあり、線分には始まりもおわりもあります。",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "直線にはおわりがないので、長さもありません。",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "直線には始まりもおわりもありません。両はしは点線でのびているように表します。",
  "Priamka, polpriamka, úsečka a kružnica": "直線、半直線、線分、円",
  "Priamku môžeme odmerať pravítkom.": "直線はものさしではかることができます。",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "直径は半径より長いので、半径は 2 でわるのではなく、かけます。",
  "Priemer je dvakrát dlhší ako polomer.": "直径は半径の 2 倍の長さです。",
  "Priemer kružnice je polovica polomeru.": "円の直径は半径の半分です。",
  "Pripočítaj": "たし",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "さらに {@0} 時間をたしましょう：${@2} + {@3}$。",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "{@0} {@1}をたしましょう：${@2} + {@3}$。",
  "Pätina": "5 分の 1",
  "Pätinu": "5 分の 1",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "分母が同じなら分子をくらべます。分子が同じなら、分母が小さいほど 1 つの部分は大きくなります。",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "正三角形には同じ長さの辺が 3 つあります。",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "和を同じ 2 つに分けましたが、兄弟の金がくは同じではありません。まず和からちがいの {@0} {@1}をひきましょう。",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "位ごとに分けます：{@0}。あわせて ${@1} = {@2}$ です。",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "書き方を千、百、十、一の組に分けましょう。CM、XC、IV のような組はひき算を表します。",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "その位の右の数字で決まります：5 以上なら切り上げ、4 以下なら切り捨てです。",
  "Rozložíme po rádoch: {@0}.": "位ごとに分けます：{@0}。",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "位は右から数えましょう：最後が一の位、その前が十の位、百の位、千の位…",
  "Rímske číslice s odčítaním": "ひき算を使うローマ数字",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "S = 百、D = 十、J = 一（それぞれの組の中で）",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "わってみましょう：${@0} : {@1} = {@2}$、あまり {@3}。{@4} の倍数ならわりきれます。",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "1、2、3、… でじゅんにわってみて、積が {@0} になる組をさがしましょう。",
  "Spolu {@0} {@1}.": "ぜんぶで {@0} {@1}です。",
  "Spomeň si na malú násobilku čísla {@0}.": "{@0} の九九を思い出しましょう。",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "この書き方の大きさを計算しましょう。大きい記号のあとの小さい記号はたすので、ちがう数になります。",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "すべての部分を数えましょう。それが分母です。つぎに色をぬった部分を数えましょう。それが分子です。",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "色をぬっていない部分を数えました。分子は、色をぬった部分の数を表します。",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "正しいのは {@0}：{@1} です。ほかの書き方は、きまりに合っていないか、ちがう数を表しています。",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "兄は ${@0} + {@1} = {@2}$ {@3}持っています。",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "辺のたんいがちがいます。まず dm を cm になおしてから、たしましょう。",
  "Súčin vydeľ známym činiteľom.": "積を、わかっている因数でわりましょう。",
  "Sčítaj ${@0} + {@1}$.": "${@0} + {@1}$ をたしましょう。",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "となり合う 2 つの辺をたしましょう：${@0} + {@1}$。",
  "Sčítaj dĺžky všetkých troch strán.": "3 つの辺の長さをぜんぶたしましょう。",
  "Sčítaj hodnoty skupín {@0}.": "組 {@0} の大きさをたしましょう。",
  "Sčítaj všetky číslice čísla.": "数のすべての数字をたしましょう。",
  "Sčítaj známe strany: ${@0} + {@1}$.": "わかっている辺をたしましょう：${@0} + {@1}$。",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "2 つの辺しかたしていません。長方形には辺が 4 つあります：長さ $a$ が 2 つ、長さ $b$ が 2 つです。",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "2 つの辺しかたしていません。長方形には辺が 4 つあるので、となり合う 2 つの辺の和をさらに 2 倍しましょう。",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "たんいのちがう数をたしてしまいました。まず {@0} {@1}を {@2} になおしましょう。",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "いま：${@0} : {@1} = {@2}$ {@3}。{@4} 年後：${@6} + {@7} = {@8}$。",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "これは {@0} の最後の倍数で、倍数の個数ではありません。そこまでに {@1} を何回たしたかを調べましょう。",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "これは正確な答えです。問題は見積もりを聞いています。まず 2 つの数を百の位までのがい数にしてから計算しましょう。",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "これはいまの{@0}の年れいです。問題は {@1} 年後に何さいになるかを聞いています。",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "これは{@0}の金がくです。聞いているのは{@1}のほうです。",
  "Tretina": "3 分の 1",
  "Tretinu": "3 分の 1",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "3 日目に歩いたのは、1 日目ではなく 2 日目の半分です。",
  "Triedy a rády čísla 3 042 705": "3 042 705 の組と位",
  "Trojuholník má iba tri strany, nie štyri.": "三角形の辺は 4 つではなく、3 つだけです。",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "三角形のまわりの長さは ${@0}\\,\\text{{@1}}$ です。2 つの辺は ${@2}\\,\\text{{@3}}$ と ${@4}\\,\\text{{@5}}$ です。3 つ目の辺の長さはいくつですか（{@6} で）。",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "三角形の辺は ${@0}\\,\\text{{@1}}$、${@2}\\,\\text{{@3}}$、${@4}\\,\\text{{@5}}$ です。まわりの長さを {@6} で求めましょう。",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "ハイキングの人たちは 1 日目に {@0} km 歩きました。2 日目は 1 日目より {@1} km 多く、3 日目は 2 日目の半分を歩きました。3 日間で何 km 歩きましたか。",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "かごの中に{@1}が {@0} こあります。そのうち ${@2}$ が赤いりんごです。赤いりんごは何こですか。",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "かごの中に{@1}が {@0} こあります。そのうち ${@2}$ が赤いりんごです。赤いりんごは何こですか。",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "電車は {@0} に出発して、{@1} に着きました。何分かかりましたか。",
  "Vyber správny údaj: {@0} …": "正しい値をえらびましょう：{@0} …",
  "Vydeľ ${@0} : {@1}$.": "${@0} : {@1}$ を計算しましょう。",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "わってあまりを見ましょう。あまりがあれば、もう 1 つひつようです。",
  "Vydeľ {@0} menovateľom {@1}.": "{@0} を分母 {@1} でわりましょう。",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "数を分母でわり、その答えに分子をかけましょう。",
  "Vynásob ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$ を計算しましょう。",
  "Vynásob {@0} čitateľom {@1}.": "{@0} に分子 {@1} をかけましょう。",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "辺をその辺どうしでかけました。それは正方形の面積です。まわりの長さは 4 つの辺の長さの和です。",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "辺をかけました。それは面積で、まわりの長さではありません。まわりの長さはすべての辺の長さの和です。",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "$({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$ を計算しましょう。",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "${@0} - {@1}\\cdot({@2} - {@3})$ を計算しましょう。",
  "Vypočítaj ${@0}\\cdot 100$.": "${@0}\\cdot 100$ を計算しましょう。",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "計算して、答えを算用数字で書きましょう：$\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "辺が $a = {@0}\\,\\text{{@1}}$ と $b = {@2}\\,\\text{{@3}}$ の長方形のまわりの長さを求めましょう（{@4} で）。",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "1 辺が ${@0}\\,\\text{{@1}}$ の正三角形のまわりの長さを求めましょう（{@2} で）。",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "1 辺が ${@0}\\,\\text{{@1}}$ の正方形のまわりの長さを求めましょう（{@2} で）。",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "1 日ずつじゅんに計算し、さいごにぜんぶたしましょう。",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "くふうして $125\\cdot {@0}\\cdot 8$ を計算しましょう。",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "くふうして $25\\cdot {@0}\\cdot 4$ を計算しましょう。",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "くふうして ${@0}\\cdot {@1}$ を計算しましょう。",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "かっこ ${@0} + {@1}$ を計算しましょう。",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "かっこ ${@0} - {@1}$ を計算しましょう。",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "${@0}$、つまり 1 つ分だけを計算しました。さらに分子 {@1} をかけましょう。",
  "Vyučovacia hodina trvá": "学校のじゅぎょう 1 時間は",
  "Vzdialenosť z Bratislavy do Košíc je asi": "ブラチスラバからコシツェまでのきょりはおよそ",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "大きいたんいを小さいたんいになおしてから、もう一方をたしましょう。",
  "Výška dospelého človeka je asi": "大人の身長はおよそ",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "記号をぜんぶたしました。でも、大きい記号の前の小さい記号はひきます。たとえば IX は 11 ではなく 9 です。",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "どの数もけた数が同じなので、左からくらべます。{@0}は ${@1}$ です。",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "線に始まりやおわりがあるか、どちらもないかに注目しましょう。",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "数字 {@0} を使って、{@1} 4 けたの数をつくりましょう。どの数字もちょうど 1 回ずつ使います。",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "3 日目を忘れました。問題は 3 日間ぜんぶを聞いています。",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "ことばをとりちがえました。次の数は 1 大きく、前の数は 1 小さい数です。さがしているのは{@0}です。",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "分子と分母の役わりをとりちがえました。数を分母でわり、その答えに分子をかけましょう。",
  "Zaokrúhli ${@0}$ na stovky.": "${@0}$ を百の位までのがい数にしましょう。",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "2 つの数を百の位までのがい数にして、答えを見積もりましょう：${@0} {@1} {@2}$。",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "数 ${@0}$ を{@1}までのがい数にしましょう。",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "答えをがい数にしてしまいました。見積もりでは、まずそれぞれの数をがい数にしてから、その数で計算しましょう。",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "ちがう位でがい数にしました。{@0}までのがい数にするとは、{@1}より右の数字をすべて 0 にすることです。",
  "Zaokrúhľovanie na číselnej osi": "数直線でのがい数",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "数 ${@0}$ をローマ数字で書きましょう。",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "千、百、十、一をそれぞれ別に書きましょう。4 = IV、9 = IX、40 = XL、90 = XC、400 = CD、900 = CM をおぼえておきましょう。",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "{@1} の中に {@0} がいくつ入るかを調べましょう。",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "数字がどの位にあるか（一の位、十の位、百の位、千の位…）を調べましょう。",
  "Zlomky na koláčoch a páse": "ケーキと帯で表した分数",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "2 つの分数は等しくありません。分母をくらべましょう。",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "2 つの分数は等しくありません。分子をくらべましょう。",
  "Zlomky sú rovnaké.": "2 つの分数は等しいです。",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "記号の向きが反対です。分母が同じときは、分子が大きいほうが大きい分数です。",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "同じ記号を 4 回くり返してはいけません。また、ひいてよいのは I を V と X の前に、X を L と C の前に、C を D と M の前に書くときだけです。",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "I、X、C を 4 回続けて書いてはいけません。4、9、40、90、400、900 はひき算を使って書きましょう。",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "I、X、C、M は 3 回までしか続けて書けません。同じ記号を 4 つ書くかわりに、ひき算を使いましょう。",
  "Zvyšok sa delí na dve rovnaké časti.": "のこりを同じ 2 つに分けます。",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "かっこが先です。つぎにわり算とかけ算、たし算はさいごです。",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "かっこ：${@0} + {@1} = {@2}$。わり算とかけ算：${@3} : {@4} = {@5}$、${@6}\\cdot {@7} = {@8}$。たし算：${@9} + {@10} = {@11}$。",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "かっこ：${@0} - {@1} = {@2}$。かけ算：${@3}\\cdot {@4} = {@5}$。ひき算：${@6} - {@7} = {@8}$。",
  "cesty": "道のり",
  "dcéra": "むすめ",
  "dcére": "むすめ",
  "dcéry": "むすめ",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "12 の約数：1, 2, 3, 4, 6, 12",
  "desatina": "10 分の 1",
  "desatinu": "10 分の 1",
  "desatiny": "10 分の 1",
  "dni": "日",
  "dní": "日",
  "euro": "ユーロ",
  "hodinu": "時間",
  "koláč": "ケーキ",
  "koláča": "ケーキ",
  "lodičiek": "そう",
  "lodičky": "そう",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "小さい記号を大きい記号の前に書くとひく ― I は V、X の前、X は L、C の前、C は D、M の前だけ",
  "meria": "の長さは",
  "miliónov": "百万の位",
  "milióny": "百万",
  "minul": "使いました",
  "minula": "使いました",
  "mladšieho": "弟",
  "mladší": "弟",
  "nadol": "切り捨て",
  "nahor": "切り上げ",
  "najmenšie": "いちばん小さい",
  "najväčšie": "いちばん大きい",
  "napr. 1; 2; 4": "例：1; 2; 4",
  "napr. 2/5": "例：2/5",
  "napr. MCMXC": "例：MCMXC",
  "nasledovníka": "次の数",
  "nepárne": "奇数",
  "nie": "いいえ",
  "nádrže": "タンク",
  "obalov": "パック",
  "obaly": "パック",
  "odčítaj": "ひき",
  "odčítaš": "ひく",
  "osmina": "8 分の 1",
  "osminu": "8 分の 1",
  "osminy": "8 分の 1",
  "polovica": "半分",
  "polovice": "半分",
  "polovicu": "半分",
  "polpriamka": "半直線",
  "polpriamka AB": "半直線 AB",
  "predchodcu": "前の数",
  "priamka AB": "直線 AB",
  "priemer d = 2 · r": "直径 d = 2 · r",
  "pripočítaj": "たし",
  "pripočítaš": "たす",
  "párne": "偶数",
  "pásik": "帯",
  "pätina": "5 分の 1",
  "pätinu": "5 分の 1",
  "pätiny": "5 分の 1",
  "päťkrát": "5 ばい",
  "rokov": "さい",
  "roky": "さい",
  "rovnaké diely": "等分",
  "rovnakých dielov": "等分",
  "spolu 50 €": "あわせて 50 €",
  "staršia": "年上",
  "staršieho": "兄",
  "starší": "兄",
  "stotisícov": "十万の位",
  "syn": "むすこ",
  "syna": "むすこ",
  "synovi": "むすこ",
  "také časti": "つ分",
  "takých častí": "つ分",
  "tretina": "3 分の 1",
  "tretinu": "3 分の 1",
  "tretiny": "3 分の 1",
  "vajec": "こ",
  "vyfarbené sú {@0}": "色がついているのは {@0} こ",
  "vyfarbený je 1": "色がついているのは 1 こ",
  "vyfarbených je {@0}": "色がついているのは {@0} こ",
  "váži": "の重さは",
  "zmestia": "入ります",
  "zmestí": "入ります",
  "zátvorky": "かっこ",
  "zľava doprava": "左から右へ",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} だから、わりきれません。わったあまりは {@1} です。",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} だから、わりきれます：${@1} : {@2} = {@3}$。",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "もう一度 {@1} を{@0}ましょう：${@2} {@3} {@4}$。",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0} は $100 {@1} 1$ です。100 をかけてから、もう一度その数を{@2}ましょう。",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0}は {@1} {@2}で、{@5}の年れいの {@3}です。{@7} 年後、{@6}は何さいになりますか。",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0}は {@1} {@2}という意味ではありません。{@4} の{@3}は、わり算で求めます：${@5} : {@6}$。",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@1} の{@0}：${@2} : {@3} = {@4}$。使ったのはあわせて ${@6} + {@7} = {@8}$。のこりは ${@9} - {@10} = {@11}$ {@12}です。",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@1}の{@0}{@2} ${@3}\\,\\text{{@4}}$ です。{@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0}は {@2} {@3}{@1}。そのうち{@4}をゲームに、{@6} {@7}を本に{@5}。のこりは何ユーロですか。",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}。ほかの値は大きすぎるか小さすぎます。",
  "Úsečka AB začína v bode A a končí v bode B.": "線分 AB は点 A から始まり、点 B でおわります。",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "線分は両はしの点でおわり、その先にはのびません。",
  "Úsečka má dva krajné body.": "線分には両はしの点が 2 つあります。",
  "Úsečka má konečnú dĺžku.": "線分の長さにはかぎりがあります。",
  "Úsečkový model súčtu a rozdielu": "和と差の線分図",
  "Úsečku môžeme odmerať pravítkom.": "線分はものさしではかることができます。",
  "áno": "はい",
  "úsečka AB": "線分 AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "時こくをふつうの数のようにひいてしまいました。1 時間は 100 分ではなく 60 分です。まず、ちょうどの時こくまで計算しましょう。",
  "Červené sú {@0} jablká": "赤いりんごは {@0} こです",
  "Červených je {@0} jabĺk": "赤いりんごは {@0} こです",
  "Čiara má dva krajné body A a B – je to úsečka.": "線には両はしの点 A と B があるので、線分です。",
  "Čiara nemá začiatok ani koniec – je to priamka.": "線には始まりもおわりもないので、直線です。",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "線は点 A から始まり、反対側にのびているので、半直線です。",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "分子が同じです。全体を多くの部分に分けるほど、1 つの部分は小さくなります：${@0} {@1} {@2}$。",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "絵にあるのは何ですか。点線は、線がおわりなくのびていることを表します。",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "数をならべて書くだけではいけません。まず {@0} {@1}を {@2} になおしてから、{@3} をたしましょう。",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "1 {@0} = 100 {@1} のように、数をならべて書いてしまいました。正しくは 1 {@2} = 60 {@3} です。",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "{@0}のすぐ右の数字は {@1} なので、{@2}ます：${@3} \\doteq {@4}$。",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "右の数字は {@0} です。${@1}$ を{@2}までのがい数にしましょう。",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "{@0}の右の数字は 5 以上です。そのときは切り上げます。",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "{@0}の右の数字は 5 より小さいです。そのときは切り捨てます。",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "数字 {@0} は{@1}にあるので、その大きさは ${@2}\\cdot {@3} = {@4}$ です。",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "数字を小さいじゅんにならべますが、0 ははじめにおけないので 2 番目におきます：${@0}$。",
  "Číslice zoradíme od najmenšej: ${@0}$.": "数字を小さいじゅんにならべます：${@0}$。",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "数字を大きいじゅんにならべます：${@0}$。",
  "Číslo": "数",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "0 から始まる数は 4 けたになりません。千の位には、0 ではないいちばん小さい数字をおきましょう。",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "{@0} は $100 {@1} 1$ なので、1 だけではなく {@3} そのものを 1 回{@2}のです。",
  "čiara": "線",
  "Šestina": "6 分の 1",
  "Štvorec má 4 rovnaké strany.": "正方形には同じ長さの辺が 4 つあります。",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "正方形には同じ長さの辺が 4 つあるので、まわりの長さは 2 ではなく 4 でわります。",
  "Štvrtina": "4 分の 1",
  "Štvrtinu": "4 分の 1",
  "šestina": "6 分の 1",
  "šestinu": "6 分の 1",
  "šestiny": "6 分の 1",
  "štvrtina": "4 分の 1",
  "štvrtinu": "4 分の 1",
  "štvrtiny": "4 分の 1"
 }
});
