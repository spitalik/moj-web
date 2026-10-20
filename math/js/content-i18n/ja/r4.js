/* 日本語: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/r4/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "r4-cisla10000": {
   "title": "10 000 までの数とそれより大きい数",
   "summary": "千の位・百の位・十の位・一の位；大きな数の読み方、書き方、大小。",
   "theory": [
    "<p>数の中のそれぞれの数字には、自分の<strong>位</strong>があります：一の位、十の位、百の位、千の位、一万の位…\n       1 が 10 こで 10、10 が 10 こで 100、100 が 10 こで 1000、1000 が 10 こで $10\\,000$（一万）です。</p>",
    {
     "fig": "r4-rady",
     "caption": "数 $47\\,385$ は、一万が 4 こ、千が 7 こ、百が 3 こ、十が 8 こ、一が 5 こです。"
    },
    "<p>このアプリでは、大きな数を右から 3 けたごとに区切って書きます：$8\\,206$、$35\\,000$。こうすると読みやすくなります：\n       <em>八千二百六</em>、<em>三万五千</em>。</p>",
    "<p><strong>大小のくらべ方：</strong>けた数の多い数のほうが大きいです。けた数が同じなら、左から\n       くらべます。まず千の位、つぎに百の位、十の位、一の位です。たとえば $5\\,382 &gt; 5\\,297$、百が 3 こは百が 2 こより多いからです。</p>"
   ],
   "examples": [
    {
     "task": "千が 6 こ、百が 0 こ、十が 4 こ、一が 9 こでできた数を、数字で書きましょう。",
     "steps": [
      "数字の位がずれないように、百の位には 0 を書きます。",
      "$6\\,000 + 40 + 9 = 6\\,049$。",
      "<strong>答えは $6\\,049$ です。</strong>"
     ]
    },
    {
     "task": "$7\\,615$ と $7\\,651$ をくらべましょう。",
     "steps": [
      "どちらも 4 けたの数で、千が 7 こ、百が 6 こです。",
      "十の位：1 は 5 より小さいです。",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "たし算とひき算の筆算",
   "summary": "何けたもある数のたし算とひき算を、たてにならべて計算する。",
   "theory": [
    "<p>たし算の筆算では、一の位は一の位の下、十の位は十の位の下…となるように、数を<strong>たてにならべて</strong>書きます。\n       <strong>右から</strong>、一の位から計算します。列の和が 9 をこえたら、一の位の数字だけを書き、\n       1 を次の列にくり上げます。</p>",
    {
     "fig": "r4-scitanie",
     "caption": "たし算の筆算 $3\\,476 + 2\\,858 = 6\\,334$。上の小さな 1 は、くり上げた数です。"
    },
    "<p>ひき算の筆算でも一の位から計算します。上の数字が下の数字より小さいときは、上の数字に 10 をたし、\n       次の列ではくり下げた 1 を下の数字にたします。</p>",
    "<p><strong>たしかめ：</strong>ひき算の答えはたし算でたしかめます。$5\\,203 - 1\\,868 = 3\\,335$ なら、\n       $3\\,335 + 1\\,868 = 5\\,203$ になるはずです。</p>"
   ],
   "examples": [
    {
     "task": "$4\\,587 + 3\\,765$ を筆算で計算しましょう。",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "一の位：$7 + 5 = 12$、2 を書いて 1 くり上げ。十の位：$8 + 6 + 1 = 15$、5 を書いて 1 くり上げ。",
      "百の位：$5 + 7 + 1 = 13$、3 を書いて 1 くり上げ。千の位：$4 + 3 + 1 = 8$。",
      "<strong>答え：$8\\,352$</strong>"
     ]
    },
    {
     "task": "$6\\,042 - 2\\,718$ を筆算で計算しましょう。",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "一の位：2 は 8 より小さいので $12 - 8 = 4$、1 をおぼえておきます。",
      "十の位：$1 + 1 = 2$、$4 - 2 = 2$。百の位：0 は 7 より小さいので $10 - 7 = 3$、1 をおぼえておきます。",
      "千の位：$2 + 1 = 3$、$6 - 3 = 3$。",
      "<strong>答え：$3\\,324$</strong>。たしかめ：$3\\,324 + 2\\,718 = 6\\,042$。"
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "かけ算とわり算の筆算",
   "summary": "1 けた・2 けたの数をかけるかけ算、1 けたの数でわるあまりのあるわり算。",
   "theory": [
    "<p><strong>1 けたの数をかける筆算：</strong>一の位、十の位、百の位…とじゅんにかけます。\n       答えが 9 をこえたら、一の位を書き、十の位の数はおぼえておいて次の積にたします。</p>",
    "<p><strong>2 けたの数をかける筆算：</strong>まず一の位の数をかけ、つぎに十の位の数をかけます。2 つめの部分の\n       積は 1 けた左にずらして書きます。さいごに部分の積をたします。</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$：まず $243\\cdot 2 = 486$、つぎに $243\\cdot 3 = 729$ を左にずらして書きます（$7\\,290$ という意味）。合わせて $7\\,776$。"
    },
    "<p><strong>わり算の筆算：</strong>左からわります。われるだけの数字をとり、商とあまりを出し、\n       次の数字をおろして続けます。さいごにのこった数が<strong>あまり</strong>で、あまりはいつもわる数より小さくなります。\n       たしかめ：$\\text{商}\\cdot\\text{わる数} + \\text{あまり} = \\text{わられる数}$。</p>"
   ],
   "examples": [
    {
     "task": "$1\\,627\\cdot 4$ を筆算で計算しましょう。",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$、8 を書いて 2 くり上げ。$4\\cdot 2 + 2 = 10$、0 を書いて 1 くり上げ。",
      "$4\\cdot 6 + 1 = 25$、5 を書いて 2 くり上げ。$4\\cdot 1 + 2 = 6$。",
      "<strong>答え：$6\\,508$</strong>"
     ]
    },
    {
     "task": "$947 : 6$ を筆算で計算しましょう。",
     "steps": [
      "$9 : 6 = 1$ あまり 3。",
      "4 をおろします：$34 : 6 = 5$ あまり 4。",
      "7 をおろします：$47 : 6 = 7$ あまり 5。",
      "<strong>$947 : 6 = 157$ あまり 5。</strong>たしかめ：$157\\cdot 6 + 5 = 947$。"
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "いくつかの計算を使う文章題",
   "summary": "何段階かに分けて解く問題：買い物、グループ分け、くらべること。",
   "theory": [
    "<p>1 つの式では解けない文章題もあります。段階を追って進めます：</p>\n       <ol><li>何がわかっている？何をもとめる？</li><li>答えるために、まず何を知る必要がある？</li>\n       <li>それぞれの段階を計算して書く。</li><li>答えを書き、意味が通るかたしかめる。</li></ol>",
    "<p><strong>手がかりになる言葉：</strong><em>… 多い／少ない</em> – たし算かひき算；\n       <em>… 倍</em>、<em>… 分の 1</em> – かけ算かわり算；<em>同じ数ずつ分けた</em>、<em>… ずつ</em> – わり算；\n       <em>のこり</em>、<em>おつり</em> – ひき算。</p>",
    "<p>いくつかの段階を、かっこを使った 1 つの式にまとめることもできます。たとえば $50 - 3\\cdot 12 = 50 - 36 = 14$。\n       計算の順じょをわすれずに：まずかけ算とわり算、つぎにたし算とひき算です。</p>"
   ],
   "examples": [
    {
     "task": "お母さんが 1 さつ 12 ユーロの本を 3 さつ買い、50 ユーロさつではらいました。おつりは何ユーロですか。",
     "steps": [
      "まず本の代金をもとめます：$3\\cdot 12 = 36$ ユーロ。",
      "つぎにおつり：$50 - 36 = 14$ ユーロ。",
      "1 つの式にまとめると：$50 - 3\\cdot 12 = 14$。",
      "<strong>答え：おつりは 14 ユーロです。</strong>"
     ]
    },
    {
     "task": "1 クラス 23 人の 4 クラスが遠足に行きました。バスで行き、1 台に 46 人ずつ乗りました。バスは何台でしたか。",
     "steps": [
      "児童の人数：$4\\cdot 23 = 92$。",
      "バスの台数：$92 : 46 = 2$。",
      "<strong>答え：バスは 2 台でした。</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "ローマ数字",
   "summary": "記号 I, V, X, L, C, D, M と、ローマ数字での数の書き方。",
   "theory": [
    "<p>古代ローマの人々は、7 つの文字で数を書きました。ローマ数字は今でも時計や、世紀の名前、\n       建物などで見ることができます。</p>",
    {
     "fig": "r4-rimske",
     "caption": "ローマ数字とその値。"
    },
    "<p><strong>きまり：</strong>記号の値をたします：$\\text{XVI} = 10 + 5 + 1 = 16$。同じ記号（I, X, C, M）は\n       続けて 3 回までしか書けません：$\\text{III} = 3$、$\\text{XXX} = 30$。</p>",
    "<p>小さい記号が大きい記号の<strong>前</strong>にあるときは、その分をひきます：$\\text{IV} = 4$、$\\text{IX} = 9$、$\\text{XL} = 40$、\n       $\\text{XC} = 90$。だから 4 は IIII ではなく IV と書きます。</p>"
   ],
   "examples": [
    {
     "task": "ローマ数字 $\\text{LXXIV}$ はいくつですか。",
     "steps": [
      "分けて考えます：$\\text{L} = 50$、$\\text{XX} = 20$、$\\text{IV} = 4$。",
      "$50 + 20 + 4 = 74$。",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "39 をローマ数字で書きましょう。",
     "steps": [
      "$39 = 30 + 9$。",
      "$30 = \\text{XXX}$、$9 = \\text{IX}$。",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "角、三角形、四角形",
   "summary": "鋭角・直角・鈍角；三角形、長方形、正方形などの四角形。",
   "theory": [
    "<p><strong>角</strong>は、1 つの点 – <strong>頂点</strong> – から出る 2 本の辺でできています。\n       直角はノートのかどの形です。直角より小さい角を<strong>鋭角</strong>、直角より大きい角\n       （でもまだ一直線ではない角）を<strong>鈍角</strong>といいます。</p>",
    {
     "fig": "r4-uhly",
     "caption": "鋭角、直角、鈍角。直角は小さな四角の印であらわします。"
    },
    "<p><strong>三角形</strong>には辺が 3 つ、頂点が 3 つ、角が 3 つあります。<strong>四角形</strong>には辺が 4 つ、頂点が 4 つ、角が 4 つあります。\n       <strong>長方形</strong>は 4 つの角がすべて直角の四角形で、向かい合う辺の長さは同じです。\n       <strong>正方形</strong>は、4 つの辺の長さがすべて同じ長方形です。</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "正方形と長方形は、どの角も直角です。正方形はどれも長方形でもあります。"
    }
   ],
   "examples": [
    {
     "task": "3 時ちょうどの時計の 2 本のはりの間の角は、鋭角、直角、鈍角のどれですか。",
     "steps": [
      "短いはりは 3 を、長いはりは 12 をさしています。",
      "その間は円の 4 分の 1 で、ノートのかどの形です。",
      "<strong>直角です。</strong>"
     ]
    },
    {
     "task": "長方形の 1 つの辺は 7 cm、もう 1 つの辺は 4 cm です。のこりの 2 つの辺の長さは何 cm ですか。",
     "steps": [
      "長方形の向かい合う辺の長さは同じです。",
      "<strong>のこりの辺は 7 cm と 4 cm です。</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "まわりの長さと面積",
   "summary": "まわりの長さはふちの長さ、面積は図形をしきつめる正方形の数。",
   "theory": [
    "<p>図形の<strong>まわりの長さ</strong>は、そのふちの長さ、つまりすべての辺の長さの和です。辺が\n       $a$ と $b$ の長方形のまわりの長さは $a + b + a + b$、つまり $2\\cdot(a + b)$ です。1 辺が $a$ の正方形のまわりの長さは $4\\cdot a$ です。</p>",
    "<p><strong>面積</strong>は、図形がどれだけの広さをしめているかをあらわします。図形をしきつめる小さな正方形の数を数えてもとめます。\n       1 辺 1 cm の正方形の面積は 1 平方センチメートル（$1\\,\\text{cm}^2$）です。</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "4 cm × 3 cm の長方形：まわりの長さは青いふちの長さ、面積は中にある正方形の数です。"
    },
    "<p>長方形では、正方形を 1 こずつ数えなくてもかまいません。1 列には一方の辺の長さと同じ数だけ正方形があり、\n       列の数はもう一方の辺の長さと同じです。だから 面積 $= a\\cdot b$ です。</p>"
   ],
   "examples": [
    {
     "task": "辺が 8 cm と 5 cm の長方形のまわりの長さをもとめましょう。",
     "steps": [
      "$o = 8 + 5 + 8 + 5$。",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$。",
      "<strong>まわりの長さは $26\\,\\text{cm}$ です。</strong>"
     ]
    },
    {
     "task": "正方形のまわりの長さは 36 cm です。1 辺の長さは何 cm ですか。",
     "steps": [
      "正方形には同じ長さの辺が 4 つあり、合わせて 36 cm です。",
      "$36 : 4 = 9$。",
      "<strong>1 辺は $9\\,\\text{cm}$ です。</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "単位のかんさんとデータの読み取り",
   "summary": "長さ・重さ・かさ・時間の単位；表やグラフからデータを読み取る。",
   "theory": [
    "<p><strong>長さ：</strong>$1\\,\\text{km} = 1\\,000\\,\\text{m}$、$1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$、\n       $1\\,\\text{dm} = 10\\,\\text{cm}$、$1\\,\\text{cm} = 10\\,\\text{mm}$。<br>\n       <strong>重さ：</strong>$1\\,\\text{t} = 1\\,000\\,\\text{kg}$、$1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$。<br>\n       <strong>かさ：</strong>$1\\,\\text{hl} = 100\\,\\text{l}$、$1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$。<br>\n       <strong>時間：</strong>$1\\,\\text{h} = 60\\,\\text{min}$、$1\\,\\text{min} = 60\\,\\text{s}$、1 日 = 24 h。</p>",
    {
     "fig": "r4-jednotky",
     "caption": "大きい単位を小さい単位になおすと、数は大きくなります – かけ算をします。その反対はわり算です。"
    },
    "<p><strong>データ</strong>はよく表やぼうグラフから読み取ります。ぼうの高さが値をあらわし、\n       たてのじくの目もりで読みます。データから、くらべたり（いくつ多いか）、たしたり（あわせていくつか）できます。</p>"
   ],
   "examples": [
    {
     "task": "4 m 35 cm は何センチメートルですか。",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$。",
      "$400 + 35 = 435$。",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "$6\\,000\\,\\text{g}$ は何キログラムですか。",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$、大きい単位になおすので、わり算をします。",
      "$6\\,000 : 1\\,000 = 6$。",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$ だから、${@3} : {@4} = {@5}$。つまり ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$ です。",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$ だから、${@3}\\cdot {@4} = {@5}$。つまり ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$ です。",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$。",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$。まわりの長さは ${@4}\\,\\text{{@5}}$ です。",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$。まわりの長さは ${@2}\\,\\text{{@3}}$ です。",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$。0 この位には 0 を書きます。",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$、はじめの 0 は書かない",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$、{@3} を書く",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$、${@3}\\cdot {@4} = {@5}$ だから、あまり {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$。{@2} {@3}が投票しました。",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$、さらに ${@4}\\,\\text{{@5}}$ をたします：${@6} + {@7} = {@8}$。",
  "= 12 štvorčekov = 12 cm²": "= 12 マス = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "もし直角が 2 つあったら、2 つの辺は平行になって、交わりません。",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "この図形の名前は何ですか。いちばん正確な名前をえらびましょう。",
  "Ako zapíšeš rímskymi číslicami {@0}?": "{@0} をローマ数字でどう書きますか。",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "長方形の横の辺の長さは何 cm ですか。",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "長方形のたての辺の長さは何 cm ですか。",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "ローマ数字 $\\text{{@0}}$ はどんな数を表していますか。",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "ローマ数字 $\\text{{@0}}$ の大きさはいくつですか。",
  "Akú hodnotu má časť $\\text{{@0}}$?": "部分 $\\text{{@0}}$ の大きさはいくつですか。",
  "Aký je tento uhol?": "この角はどんな角ですか。",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "たりないたされる数はひき算でわかります：${@0} - {@1} = {@2}$。",
  "Desiatky": "十の位",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "クラスの子どもたちが、いちばんすきなくだものに投票しました。1 人 1 回だけ投票しました。",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "左からわり、さいごのあまりは {@0} より小さくなければなりません。",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "左からわりましょう。われるだけのけた数をとり、じゅんにつぎの数字をおろしていきます。",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "まわりの長さに 2 つの辺しか入れていません。まわりの長さは 4 つの辺ぜんぶでできています。",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "右へ（小さいたんいへ）はかけ算、左へ（大きいたんいへ）はわり算をします。",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "2 つ目の積を 1 つ左にずらして（${@0}$ という意味です）、たしましょう：${@1} + {@2}$ はいくつですか。",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "2 つ目の部分の積を 1 つ左にずらしていません。十の位の数をかけているので、10 倍の大きさになります。",
  "Dvakrát": "2 ばい",
  "Hodina má 60 minút a minúta 60 sekúnd.": "1 時間は 60 分、1 分は 60 秒です。",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "大きさ {@0} を表すローマ数字は {@1} で、{@2} ではありません。",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "数をたしてはいけません。「いくつ多い」はちがいなので、大きいほうから小さいほうをひきましょう。",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "記号の大きさをたしましょう。小さい記号が大きい記号の前にあるとき（例：IV、IX、XL、XC）は、それをひきます。",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "ひいた数をさがします：${@0} - {@1} = {@2}$。たしかめ：${@3} - {@4} = {@5}$。",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1、V = 5、X = 10、さらに L、C、D、M。",
  "Jakub": "だいきさん",
  "Je toto tvrdenie pravdivé? „{@0}“": "つぎの文は正しいですか。「{@0}」",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "三角形 1 つには角が 3 つあるので、2 つでは $2\\cdot 3 = 6$ こです。",
  "Jednotky": "一の位",
  "Každý obdĺžnik je štvorec.": "長方形はどれも正方形です。",
  "Každý uhol má 2 ramená a 1 vrchol.": "どの角にも辺が 2 つと頂点が 1 つあります。",
  "Každý štvorec je obdĺžnik.": "正方形はどれも長方形です。",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "方眼の 1 マスは 1 辺が 1 cm です。色をぬった長方形のまわりの長さ（cm）と面積（cm²）を求めて、「まわりの長さ; 面積」の形で書きましょう。{@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "{@0} 人乗りのバスが何台あれば、全員が乗れますか。",
  "Koľko detí hlasovalo za {@0}?": "{@0}に投票した子どもは何人ですか。",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "あわせて何ユーロ持っていますか。${@0} + {@1} + {@2}$ を計算しましょう。",
  "Koľko eur má {@0}?": "{@0}は何ユーロ持っていますか。",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "おつりは何ユーロですか。${@0} - {@1}$ を計算しましょう。",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "${@0} + {@1}$（となり合う 2 つの辺）はいくつですか。",
  "Koľko je riadkov?": "行はいくつありますか。",
  "Koľko kilogramov zemiakov zostalo po predaji?": "売ったあと、じゃがいもは何 kg のこりましたか。",
  "Koľko pravých uhlov má obdĺžnik?": "長方形には直角がいくつありますか。",
  "Koľko pravých uhlov má štvorec?": "正方形には直角がいくつありますか。",
  "Koľko ramien má jeden uhol?": "1 つの角には辺がいくつありますか。",
  "Koľko uhlov majú spolu dva trojuholníky?": "三角形 2 つで、角はあわせていくつありますか。",
  "Koľko uhlov má trojuholník?": "三角形には角がいくつありますか。",
  "Koľko vrcholov má štvoruholník?": "四角形には頂点がいくつありますか。",
  "Koľko vriec po {@0} kg sa z nich naplní?": "そこから {@0} kg 入りのふくろがいくつできますか。",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "遠足に行くのは、ぜんぶで何人ですか（児童と先生）。",
  "Koľko štvorčekov je v jednom riadku?": "1 行にはマスがいくつありますか。",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "色をぬった長方形には、1 cm × 1 cm のマスがいくつありますか。（面積を cm² で書きましょう。）{@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "{@1} の中に {@0} は何回入りますか。",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "数 ${@0}$ の{@1}の数字は何ですか。",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "${@1}$ より {@0} 小さい数はいくつですか。",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "${@1}$ より {@0} 大きい数はいくつですか。",
  "Lucia": "ゆかさん",
  "Martin": "しょうさん",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "小さいたんいになおすので、数は大きくなります。かけましょう。",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "大きいたんいになおすので、数は小さくなります。わりましょう。",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "大きい記号の前にある小さい記号は、たすのではなくひきます。たとえば IV = 5 − 1 = 4 です。",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "辺が 3 つ、頂点が 3 つあるので、三角形です。",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "直角が 4 つあり、辺がすべて同じ長さなので、正方形です。",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "直角が 4 つありますが、となり合う辺の長さがちがうので、長方形です。",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "辺は 4 つありますが、角が直角ではないので、ふつうの四角形です。",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "遠足に {@0} クラスが行きます。1 クラスは {@1} 人で、先生が {@2} 人いっしょに行きます。バス 1 台には {@3} 人乗れます。全員が乗るには、バスを何台たのめばよいですか。",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "まず ${@0}\\cdot {@1} = {@2}$、つぎに ${@3}\\cdot {@4} = {@5}$（1 つ左にずらして書きます。${@6}$ という意味です）。たします：${@7} + {@8} = {@9}$。",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "まず代金：${@0}\\cdot {@1} = {@2}$ {@3}。つぎにおつり：${@4} - {@5} = {@6}$。おつりは {@8} {@9}です。",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "まず一の位をかけましょう：${@0}\\cdot {@1}$ はいくつですか。",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "まず大きいたんいを小さいたんいになおして、それからのこりをたしましょう。",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "まず大きいたんいをなおしましょう：${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "まず何 kg のこったかを調べ、それからその中にふくろ 1 つ分が何回入るかを調べましょう。",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "まず買い物ぜんぶの代金を調べて、それをおさつの金がくからひきましょう。",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "数をたてにならべて書き、一の位は一の位の下にそろえて、右からたしましょう。くり上がりを忘れないようにしましょう。",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "千の位、百の位、十の位、一の位のじゅんに数字をならべて書きましょう。0 を忘れないようにしましょう。",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "右からかけましょう：まず一の位、つぎに十の位、百の位… 積の十の位はくり上げます。",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "方眼の上の 4 × 3 の長方形",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "長方形には長い辺が 2 つ、短い辺が 2 つあります。4 つぜんぶたしましょう。",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "長方形の向かい合う辺は同じ長さです。",
  "Obdĺžnik má všetky 4 uhly pravé.": "長方形の 4 つの角はすべて直角です。",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "長方形には、{@2} マスずつの{@1}が {@0} つあります：${@3}\\cdot {@4} = {@5}$。面積は ${@6}\\,\\text{cm}^2$ です。",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "長方形は、となり合う辺の長さがちがってもかまいません。たとえば 5 cm と 2 cm です。",
  "Obdĺžnik v štvorcovej sieti": "方眼の上の長方形",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "面積：${@0}\\cdot {@1}$ はいくつですか。",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "まわりの長さはふちの長さ、面積は中にあるマスの数です。",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "まわりの長さは、ふちにあるマスの数ではなく、ふちの長さです。すべての辺の長さをたしましょう。",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "まわりの長さは同じ長さの 4 つの辺でできています：${@0} : 4 = {@1}$。1 辺は ${@2}\\,\\text{{@3}}$ です。",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "まわりの長さは、このような辺の組 2 つでできています：$2\\cdot {@0}$ はいくつですか。",
  "Obvod štvorca vydeľ štyrmi.": "正方形のまわりの長さを 4 でわりましょう。",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "まわりの長さ：$2\\cdot({@0} + {@1})$ はいくつですか。",
  "Od menšenca odčítaj rozdiel.": "ひかれる数からちがいをひきましょう。",
  "Od súčtu odčítaj známy sčítanec.": "和から、わかっているたされる数をひきましょう。",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "右からひきましょう。上の数字のほうが小さいときは、10 をたして、つぎの列で 1 をおぼえておきます。",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "{@0} をひきましょう。くり下がりに気をつけましょう。",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "品物 1 つの代金しかひいていません。買った品物は {@0} こなので、まず買い物ぜんぶの代金を計算しましょう。",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "鋭角はノートのかどより小さい角です。この角をノートのかどとくらべましょう。",
  "Ostrý, pravý a tupý uhol": "鋭角、直角、鈍角",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "まずけた数をくらべ、つぎに左から右へ数字をくらべましょう。",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "角をノートのかど（直角）とくらべましょう。",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "左から位ごとにくらべます。はじめてちがう数字で決まります：${@0} {@1} {@2}$。",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "つぎに十の位をかけましょう：${@0}\\cdot {@1}$ はいくつですか。",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "ぼうがどの線までとどいているかを見て、左の数を読みましょう。",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "人数：${@0}\\cdot {@1} + {@2} = {@3}$。${@4} : {@5} = {@6}$、あまり {@7}。",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "100 として計算しました。時間では $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$ です。",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "直角はノートのかどとちょうど同じ形で、小さな四角でしるしをつけます。この角をノートのかどとくらべましょう。",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "図形を思いうかべて、頂点、辺、角の数を数えましょう。",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "たんいをなおしましょう：${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "たんいをなおしましょう：${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "長さと重さのたんいのなおし方",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "それぞれのぼうの数を読んで、ぜんぶたしましょう。",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "2 つの数を読んで、大きいほうから小さいほうをひきましょう。",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "{@0}の票をたしましょう：いまあわせていくつですか。",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "{@0} をたしましょう。くり上がりに気をつけましょう。",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "{@0} をおろしましょう：{@2} の中に {@1} は何回入りますか。",
  "Písomné násobenie 243 krát 32": "かけ算の筆算 243 かける 32",
  "Písomné sčítanie 3476 plus 2858": "たし算の筆算 3476 たす 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "売ったじゃがいもまで、ぜんぶふくろに分けてしまいました。まず売った分をひきましょう。",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "数を十の位と一の位に分けましょう。4 = IV、9 = IX、40 = XL、90 = XC をおぼえておきましょう。",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "分けます：{@0}。あわせて ${@1} = \\text{{@2}}$ です。",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "位を左から数えてしまいました。一の位はいちばん右の数字です。そこから左へ進みましょう。",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "位は右から読みます：一の位、十の位、百の位、千の位、一万の位。{@0}の数字は {@1} です。",
  "Rímske číslice a ich hodnoty": "ローマ数字とその大きさ",
  "Samuel": "りくさん",
  "Skúška: ${@0} + {@1} = {@2}$.": "たしかめ：${@0} + {@1} = {@2}$。",
  "Spoj obe časti: ako zapíšeš {@0}?": "2 つの部分を合わせましょう：{@0} はどう書きますか。",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "思い出しましょう：長方形には直角が 4 つあり、正方形はそれに加えて辺がすべて同じ長さです。",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "辺を数えて、角が直角かどうか（かどの小さな四角）を見ましょう。",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "図形の辺を数えましょう。三角形は辺が 3 つ、四角形は 4 つです。",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "先生もふくめて全員の人数を数えましょう。わったあと、のこった人がいれば、もう 1 台バスがいります。",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "1 行のマスの数を数えて、行の数をかけましょう。",
  "Stovky": "百の位",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "辺をその辺どうしでかけてしまいました。それは面積です。まわりの長さは 4 つの辺の長さの和です。",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "辺をたしてしまいました。面積はマスの数です：1 行のマスの数 × 行の数。",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "辺をかけてしまいました。それは面積です。まわりの長さはふちの長さなので、辺をたします。",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "辺は {@0} cm と {@1} cm です。まわりの長さ：$2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$。面積：${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$。",
  "Stĺpcový diagram hlasovania": "投票のぼうグラフ",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "「{@0}」のぼうは {@1} の線までとどいています。{@2} {@3}が投票しました。",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "すべての部分の大きさをたしましょう。$\\text{{@0}}$ はどんな数ですか。",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "2 つの辺しかたしていません。長方形には辺が 4 つあるので、となり合う 2 つの辺の和をさらに 2 倍しましょう。",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "47 385 の位取り表",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "同じ記号は 3 回までしか続けて書けません。同じ記号を 4 つ書くかわりに、ひき算を使います。たとえば 4 = IV です。",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "この図形には直角（かどの小さな四角）があるので、もっと正確な名前があります。",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "この図形には直角がありません。正方形も長方形も、角がすべて直角です。",
  "Tisíce": "千の位",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "それは買い物ぜんぶの代金です。おさつからおつりがいくらかを調べましょう。",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "それはまわりの長さ、つまりふちの長さです。面積は中にあるマスの数です。",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "それはくだものの種類の数です。それぞれのくだものに投票した子どもの数をたしましょう。",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "それはのこった kg です。そこから {@0} kg 入りのふくろがいくつできるかを調べましょう。",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "それは{@0}の分だけです。3 人ぜんぶでいくらかを聞いています。",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "それは三角形 1 つの角の数です。三角形は 2 つあります。",
  "Treba {@0} {@1}.": "{@0} {@1}ひつようです。",
  "Trikrát": "3 ばい",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "三角形には頂点が 3 つあるので、角も 3 つあります。",
  "Trojuholník môže mať dva pravé uhly.": "三角形には直角が 2 つあることもあります。",
  "Tupý uhol je menší ako pravý uhol.": "鈍角は直角より小さい角です。",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "鈍角は直角より大きい角です。直角より小さいのは鋭角です。",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "鈍角はノートのかどより大きい角です。この角をノートのかどとくらべましょう。",
  "Uhol je menší ako roh zošita, je ostrý.": "角はノートのかどより小さいので、鋭角です。",
  "Uhol je väčší ako roh zošita, je tupý.": "角はノートのかどより大きいので、鈍角です。",
  "Uhol má tvar rohu zošita, je pravý.": "角はノートのかどと同じ形なので、直角です。",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "どこかの列で、上の数字が小さかったので、下の数字から上の数字をひいてしまいました。そのときは、上の数字に 10 をたし、1 をおぼえておきます。",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "お店にじゃがいもが {@0} kg ありました。{@1} kg 売れて、のこりを {@2} kg ずつふくろに分けました。ふくろはいくつできましたか。",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "商に 0 がぬけています。数字をおろしてもわれないときは、商に 0 を書いて、つぎの数字をおろしましょう。",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "0 をぬかしました。ない位があるときは、その位に 0 を書きましょう。そうしないと数字がずれてしまいます。",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "まず一の位をかけ、つぎに十の位をかけましょう。2 つ目の答えを 1 つ左にずらして、2 つをたします。",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "一の位しかかけていません。十の位（{@0}）もかけて、2 つの部分の積をたしましょう。",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "たての辺が ${@0}\\,\\text{{@1}}$、横の辺が ${@2}\\,\\text{{@3}}$ の長方形のまわりの長さを求めましょう。答えは {@4} で書きましょう。",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "1 辺が ${@0}\\,\\text{{@1}}$ の正方形のまわりの長さを求めましょう。答えは {@2} で書きましょう。",
  "Vypočítaj písomne ${@0} + {@1}$.": "${@0} + {@1}$ を筆算で計算しましょう。",
  "Vypočítaj písomne ${@0} - {@1}$.": "${@0} - {@1}$ を筆算で計算しましょう。",
  "Vypočítaj písomne ${@0} : {@1}$.": "${@0} : {@1}$ を筆算で計算しましょう。",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "${@0} : {@1}$ を筆算で計算しましょう。商とあまりをセミコロンで区切って書きましょう。",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$ を筆算で計算しましょう。",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "{@0}：{@1}、{@2}：{@3}。${@4} - {@5} = {@6}$。",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "おぼえておいた 1 を忘れました。くり下げたら、つぎの列の下の数字に 1 をたしましょう。",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "くり上がりを忘れました。列の和が 10 以上になったら、1 を左どなりの列にたしましょう。",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "${@0}\\,\\text{{@1}}$ をたすのを忘れました。",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "くり上げた十の位をたすのを忘れました。積の十の位は、つぎの位の積にたしましょう。",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "まわりの長さと面積を「まわりの長さ; 面積」の形で書きましょう。",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "それぞれのだんで出た数をならべて商を書き、さいごのだんで出たのこりをあまりとして書きましょう。",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "それぞれのだんで出た数をならべて商を書きましょう。",
  "Zapíš rímskymi číslicami číslo {@0}.": "数 {@0} をローマ数字で書きましょう。",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "それぞれの列で出た数字で答えを書きましょう。",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "答えを書きましょう：それぞれの列からは和の一の位を書き、十の位はくり上げました。",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "答えを書きましょう：それぞれの積からは一の位を書き、十の位はくり上げました。",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "数字で書きましょう：1000 が {@0} こ、100 が {@2} こ、10 が {@4} こ、1 が {@6} こ。",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "いちばん右の数字（一の位）から始めて、左へ進みましょう。",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "その数の中に 60 が何回入るかを調べましょう。",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "記号 = は、同じ数のあいだにだけ入ります。この 2 つの数は、少なくとも 1 つの数字がちがいます。",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "記号の向きが反対です。左からくらべましょう。はじめてちがう数字で決まります。",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "記号の向きが反対です。けた数の多い数のほうが大きいです。",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "のこった人のためにもう 1 台バスがいるので、{@0} {@1}ひつようです。",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "のこりのじゃがいも：${@0} - {@1} = {@2}$ kg。ふくろの数：${@3} : {@4} = {@5}$。",
  "autobus": "台",
  "autobusy": "台",
  "banány": "バナナ",
  "dag": "dag",
  "desaťtisíce": "一万の位",
  "desaťtisícov": "一万の位",
  "dvakrát": "2 ばい",
  "eur": "ユーロ",
  "eurá": "ユーロ",
  "hrušky": "なし",
  "jahody": "いちご",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "下の数字に、おぼえておいた 1 をたす（${@0} + 1 = {@1}$）。",
  "napr. III": "例：III",
  "napr. XIV": "例：XIV",
  "napr. XX": "例：XX",
  "nepravda": "まちがい",
  "obsah: 3 riadky po 4 štvorčekoch": "面積：4 マスずつの行が 3 つ",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "まわりの長さ：4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "まわりの長さ; 面積",
  "opíšeme {@0}": "{@0} をそのまま書く",
  "ostrý": "鋭角",
  "pravda": "正しい",
  "pravý": "直角",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "{@0} をおろす：${@1} : {@2} = {@3}$、${@4}\\cdot {@5} = {@6}$ だから、あまり {@7}",
  "píšeme {@0}": "{@0} を書く",
  "píšeme {@0} a 1 si pamätáme": "{@0} を書いて 1 くり上げる",
  "píšeme {@0} a {@1} si pamätáme": "{@0} を書いて {@1} くり上げる",
  "riadky": "行",
  "riadok": "行",
  "slivky": "プラム",
  "stovka": "百の位",
  "tisíce": "千の位",
  "tisícka": "千の位",
  "tisícky": "千の位",
  "tisícok": "千の位",
  "tisícov": "千の位",
  "trikrát": "3 ばい",
  "tričiek": "Tシャツ",
  "tričká": "Tシャツ",
  "tupý": "鈍角",
  "uhol": "角",
  "všeobecný štvoruholník": "ふつうの四角形",
  "všetci traja": "3 人",
  "všetky tri": "3 人",
  "zaplatil": "はらいました",
  "zaplatila": "はらいました",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} 全部で何人の子どもが投票しましたか。",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} {@1}に投票した子どもは何人ですか。",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} {@1}に投票した子どもは、{@2}に投票した子どもより何人多いですか。",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} 商は ${@1}$、あまりは {@2} です。たしかめ：${@3}\\cdot {@4} + {@5} = {@6}$。",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} 答えは ${@1}$ です。たしかめ：${@2}\\cdot {@3} = {@4}$。",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0} は {@1} より小さいので、${@2} - {@3} = {@4}$、{@5} を書いて 1 をおぼえておく",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0} は {@1} より小さいので、${@2} - {@3}$ を計算しましょう。いくつですか。",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0}は {@1} {@2}ためています。{@3}は{@6}より {@4} {@5}多く、{@7}は{@9}の {@8}持っています。{@10}あわせて何ユーロ持っていますか。",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0}が持っているのは{@2}の {@1}で、{@3}の {@1}ではありません。{@4}の金がくにかけましょう。",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0}は 1 つ {@4} {@5}の{@3}を {@2} つ{@1}。{@7} ユーロさつで{@6}。おつりは何ユーロですか。",
  "{@0}. Spolu {@1}.": "{@0}。あわせて {@1}。",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}：${@1} + {@2} = {@3}$。{@4}：${@5}\\cdot {@6} = {@7}$。あわせて：${@8} + {@9} + {@10} = {@11}$ {@12}。",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}：${@1} + {@2} + 1$ はいくつですか。（1 は前の列からくり上げたものです。）",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}：${@1} + {@2}$ はいくつですか。",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}：${@1}\\cdot {@2} + {@3}$ はいくつですか。（{@4} は前の位からくり上げたものです。）",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}：${@1}\\cdot {@2}$ はいくつですか。",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "はい、長方形の向かい合う辺は同じ長さです。",
  "Áno, to je vlastnosť štvorca.": "はい、それは正方形の性質です。",
  "útvar": "図形",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "すぐに数をたしてはいけません。まず ${@0}\\,\\text{{@1}}$ を小さいたんい $\\text{{@2}}$ になおしましょう。",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "数をたしてはいけません。たりないたされる数はひき算でわかります：和から、わかっているたされる数をひきましょう。",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "数をたしてはいけません。求める数はひき算でわかります：ひかれる数からちがいをひきましょう。",
  "Čísla sú rovnaké.": "2 つの数は同じです。",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "けた数の多い数のほうが大きいので、${@0} {@1} {@2}$ です。",
  "čerešne": "さくらんぼ",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "正方形はたしかに長方形でもありますが、いちばん正確な名前をさがしています。辺がすべて同じ長さかどうかを見ましょう。",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "正方形には直角が 4 つあり、向かい合う辺が同じ長さなので、とくべつな長方形です。",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "正方形のまわりの長さは ${@0}\\,\\text{{@1}}$ です。1 辺の長さはいくつですか（{@2} で）。",
  "Štvorec má všetky 4 uhly pravé.": "正方形の 4 つの角はすべて直角です。",
  "Štvorec má všetky strany rovnako dlhé.": "正方形の辺はすべて同じ長さです。",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "正方形の辺はすべて同じ長さです。ここではとなり合う辺の長さがちがいます。",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "正方形、長方形、三角形、ふつうの四角形",
  "Štvoruholník má 4 strany a 4 vrcholy.": "四角形には辺が 4 つ、頂点が 4 つあります。",
  "Štyrikrát": "4 ばい",
  "štyrikrát": "4 ばい",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "「… 多い」はたし算、「… ばい」はかけ算です。そのあと、ぜんぶたしましょう。",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "「{@0}」はかけ算をするという意味で、{@1} をたすのではありません。"
 }
});
