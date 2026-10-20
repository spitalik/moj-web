/* 日本語: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/r3/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "r3-cisla1000": {
   "title": "1 000 までの数",
   "summary": "百の位・十の位・一の位、数直線、3 けたの数の大小。",
   "theory": [
    "<p>3 けたの数には<strong>百の位（百）</strong>、<strong>十の位（十）</strong>、<strong>一の位（一）</strong>があります。\n       472 は 100 が 4 こ、10 が 7 こ、1 が 2 こです：$472 = 400 + 70 + 2$。100 が 10 こで<strong>千</strong>：$1\\,000$ です。</p>",
    {
     "fig": "r3-rad1000",
     "caption": "0 から 1 000 までの数直線。350 は 300 と 400 のちょうどまん中にあり、720 は 700 に近いところにあります。"
    },
    "<p><strong>大小のくらべ方：</strong>まず百の位をくらべ、同じなら十の位、さいごに一の位をくらべます。\n       $538 &gt; 497$、100 が 5 こは 4 こより多いからです。$642 &lt; 648$、百の位も十の位も同じで $2 &lt; 8$ だからです。</p>"
   ],
   "examples": [
    {
     "task": "806 と 860 をくらべましょう。",
     "steps": [
      "百の位は同じ（8）です。",
      "十の位は 0 と 6 で、0 のほうが小さいです。",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "100 が 3 こ、10 が 0 こ、1 が 9 こでできている数を書きましょう。",
     "steps": [
      "$300 + 0 + 9 = 309$。",
      "十の位には 0 を書きます。",
      "<strong>309 です。</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "1 000 までのたし算とひき算",
   "summary": "分けて考える暗算と、たてにならべる筆算。",
   "theory": [
    "<p><strong>暗算</strong>では分けて計算します：$356 + 230$ は、まず $356 + 200 = 556$、つぎに $556 + 30 = 586$。\n       何百の計算は、一の位と同じように考えます：$400 + 500 = 900$、$800 - 300 = 500$。</p>",
    "<p><strong>筆算</strong>では、一の位は一の位、十の位は十の位、百の位は百の位の下になるように、数をたてにならべて書きます。\n       右から計算します：一の位、十の位、百の位。ある位の和が 9 をこえたら、1 を左の位にくり上げます。</p>",
    {
     "fig": "r3-stlpec",
     "caption": "筆算 $347 + 285 = 632$。上の小さな 1 は、くり上げた十と百です。"
    },
    "<p>ひき算の答えは、いつも<strong>たし算でたしかめる</strong>ことができます：$632 - 285 = 347$ なら、$347 + 285 = 632$ になるはずです。</p>"
   ],
   "examples": [
    {
     "task": "$468 + 275$ を計算しましょう。",
     "steps": [
      "一の位：$8 + 5 = 13$、3 を書いて 1 くり上げます。",
      "十の位：$6 + 7 + 1 = 14$、4 を書いて 1 くり上げます。",
      "百の位：$4 + 2 + 1 = 7$。",
      "<strong>答え：743</strong>"
     ]
    },
    {
     "task": "$700 - 340$ を計算しましょう。",
     "steps": [
      "$700 - 300 = 400$。",
      "$400 - 40 = 360$。",
      "たしかめ：$360 + 340 = 700$。<strong>答え：360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "かけ算とわり算",
   "summary": "九九のすべて、何十のかけ算、あまりのあるわり算。",
   "theory": [
    "<p>$10 \\cdot 10$ までのかけ算は表で見つけられます：行にかけられる数、列にかける数があり、交わったところが積です。\n       わり算はかけ算の反対です：$6 \\cdot 7 = 42$ から、$42 : 6 = 7$ も $42 : 7 = 6$ もわかります。</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "九九の表：6 の行と 7 の列は 42 で交わります。つまり $6 \\cdot 7 = 42$ です。"
    },
    "<p><strong>何十のかけ算：</strong>$30 \\cdot 4$ は 10 が 3 こ の 4 つ分なので、10 が 12 こ、つまり $120$ です。</p>",
    "<p><strong>あまりのあるわり算：</strong>わり算はいつもわり切れるとはかぎりません。$17 : 5 = 3$ <em>あまり</em> 2、なぜなら $3 \\cdot 5 = 15$\n       で、17 まであと 2 たりないからです。あまりはいつもわる数より小さくなければなりません。</p>"
   ],
   "examples": [
    {
     "task": "$8 \\cdot 7$ と $56 : 8$ を計算しましょう。",
     "steps": [
      "九九から：$8 \\cdot 7 = 56$。",
      "わり算はかけ算の反対なので、$56 : 8 = 7$。"
     ]
    },
    {
     "task": "$29 : 4$ をあまりを出して計算しましょう。",
     "steps": [
      "29 をこえない 4 のいちばん大きいばい数は $7 \\cdot 4 = 28$ です。",
      "あまり：$29 - 28 = 1$。",
      "<strong>$29 : 4 = 7$ あまり 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "かっこと計算の順じょ",
   "summary": "先に計算するのはどれ？かっこ、かけ算・わり算、たし算・ひき算。",
   "theory": [
    "<p>いくつかの計算がまじった式では、次の順じょで計算します：</p>\n       <ol><li>まず<strong>かっこ</strong>の中を計算する、</li>\n       <li>つぎに<strong>かけ算とわり算</strong>、</li>\n       <li>さいごに<strong>たし算とひき算</strong>（左から右へ）。</li></ol>",
    "<p>くらべてみましょう：$2 + 3 \\cdot 4 = 2 + 12 = 14$ ですが、$(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$ です。かっこで答えがかわります！</p>",
    "<p>たし算とひき算だけのときは、左から右へ計算します：$20 - 5 - 3 = 15 - 3 = 12$。でも、かっこがあれば\n       そこを先に計算します：$20 - (5 - 3) = 20 - 2 = 18$。</p>"
   ],
   "examples": [
    {
     "task": "$18 + 4 \\cdot 6$ を計算しましょう。",
     "steps": [
      "かけ算が先です：$4 \\cdot 6 = 24$。",
      "$18 + 24 = 42$。",
      "<strong>答え：42</strong>"
     ]
    },
    {
     "task": "$(15 - 7) \\cdot 3$ を計算しましょう。",
     "steps": [
      "まずかっこ：$15 - 7 = 8$。",
      "$8 \\cdot 3 = 24$。",
      "<strong>答え：24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "いくつかの手順で解く文章題",
   "summary": "2 つや 3 つの式をじゅんに使って解く問題。",
   "theory": [
    "<p>1 つの式では解けない問題もあります。じゅんを追って考えます：<strong>わかっていること</strong>、\n       <strong>先に知る必要があること</strong>、<strong>さいごにもとめること</strong>。</p>",
    "<p>例：お母さんが 1 さつ 4 € のノートを 3 さつ買い、20 € さつではらいました。おつりは何ユーロですか。<br>\n       1 つめの手順 – ノートの代金：$3 \\cdot 4 = 12$ €。<br>2 つめの手順 – おつり：$20 - 12 = 8$ €。<br>答え：おつりは 8 € です。</p>",
    "<p>手順を 1 つの式にまとめることもできます：$20 - 3 \\cdot 4 = 20 - 12 = 8$（かけ算が先）。\n       さいごに、答えが意味の通るものか、いつもたしかめましょう。</p>"
   ],
   "examples": [
    {
     "task": "バスに 34 人乗っていました。バス停で 12 人がおり、9 人が乗りました。いまバスには何人乗っていますか。",
     "steps": [
      "おりたあと：$34 - 12 = 22$。",
      "乗ったあと：$22 + 9 = 31$。",
      "<strong>バスには 31 人乗っています。</strong>"
     ]
    },
    {
     "task": "さくらさんは 8 まい入りのシールのふくろを 2 つと、ばらのシールを 5 まい持っています。シールはぜんぶで何まいですか。",
     "steps": [
      "ふくろの中：$2 \\cdot 8 = 16$。",
      "ぜんぶで：$16 + 5 = 21$。",
      "<strong>さくらさんのシールは 21 まいです。</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "平面図形のまわりの長さ",
   "summary": "三角形・正方形・長方形のまわりの長さは、辺の長さの和。",
   "theory": [
    "<p>図形の<strong>まわりの長さ</strong>は、その図形をぐるりと一周する線の長さです。<strong>すべての辺の長さをたして</strong>もとめます。\n       まわりの長さは文字 $o$ であらわします。</p>",
    {
     "fig": "r3-obvod",
     "caption": "長方形には長い辺が 2 つとみじかい辺が 2 つ、三角形には辺が 3 つあります。まわりの長さはすべての辺の和です。"
    },
    "<p>辺が $a, b, c$ の<strong>三角形</strong>：$o = a + b + c$。<br>\n       1 辺が $a$ の<strong>正方形</strong>：$o = a + a + a + a = 4 \\cdot a$。<br>\n       辺が $a, b$ の<strong>長方形</strong>：$o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$。</p>"
   ],
   "examples": [
    {
     "task": "1 辺が $7\\,\\text{cm}$ の正方形のまわりの長さをもとめましょう。",
     "steps": [
      "正方形には同じ長さの辺が 4 つあります。",
      "$o = 4 \\cdot 7 = 28$。",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "長方形の辺の長さは $9\\,\\text{cm}$ と $4\\,\\text{cm}$ です。まわりの長さはいくつですか。",
     "steps": [
      "$o = 9 + 4 + 9 + 4$。",
      "$o = 18 + 8 = 26$。",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "長さ・重さ・かさ・時間のたんい",
   "summary": "ミリメートルからキロメートル、グラムとキログラム、リットルとデシリットル、秒から週まで。",
   "theory": [
    "<p><strong>長さ：</strong>$1\\,\\text{cm} = 10\\,\\text{mm}$、$1\\,\\text{dm} = 10\\,\\text{cm}$、$1\\,\\text{m} = 100\\,\\text{cm}$、\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$。</p>",
    "<p><strong>重さ：</strong>$1\\,\\text{kg} = 1\\,000\\,\\text{g}$、$1\\,\\text{t} = 1\\,000\\,\\text{kg}$。<br>\n       <strong>かさ：</strong>$1\\,\\text{l} = 10\\,\\text{dl}$、$1\\,\\text{dl} = 100\\,\\text{ml}$、つまり $1\\,\\text{l} = 1\\,000\\,\\text{ml}$。</p>",
    "<p><strong>時間：</strong>$1\\,\\text{min} = 60\\,\\text{s}$、$1\\,\\text{h} = 60\\,\\text{min}$、1 日 = 24 h、1 週間 = 7 日。</p>",
    "<p><strong>小さい</strong>たんいになおすときは数を大きくし（かける）、<strong>大きい</strong>たんいになおすときは数を小さくします（わる）。\n       たとえば $3\\,\\text{m} = 300\\,\\text{cm}$、$40\\,\\text{mm} = 4\\,\\text{cm}$。</p>"
   ],
   "examples": [
    {
     "task": "$2\\,\\text{m}\\ 35\\,\\text{cm}$ をセンチメートルになおしましょう。",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$。",
      "$200 + 35 = 235$。",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "映画は 17:40 に始まり、19:10 におわりました。何分間でしたか。",
     "steps": [
      "17:40 から 18:00 までは 20 分です。",
      "18:00 から 19:00 までは 60 分、19:00 から 19:10 まではさらに 10 分です。",
      "$20 + 60 + 10 = 90$。<strong>映画は 90 分間でした。</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "表とかんたんなデータ",
   "summary": "表やぼうグラフからデータを読み取り、くらべたり合計したりする。",
   "theory": [
    "<p>データはよく<strong>表</strong>に書きます。いちばん上の行に名前（たとえば曜日）、その下に数を書きます。\n       おかし屋さんが、売れたアイスクリームの数を書きました：</p>\n       <table class=\"tbl\"><tr><th>曜日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th></tr>\n       <tr><td>アイス</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>同じデータを<strong>ぼうグラフ</strong>にかくこともできます。ぼうが高いほど、数は大きいです。</p>",
    {
     "fig": "r3-graf",
     "caption": "いちばん高いぼうは金曜日（18）、いちばん低いのは火曜日（8）です。金曜日は火曜日より $18 - 8 = 10$ こ多く売れました。"
    },
    "<p>データから、どこが<strong>いちばん多い</strong>か、<strong>いちばん少ない</strong>か、2 つの数が<strong>いくつちがう</strong>か\n       （ひき算）、<strong>あわせて</strong>いくつか（たし算）がわかります。</p>"
   ],
   "examples": [
    {
     "task": "月曜日と水曜日にあわせていくつアイスが売れましたか（上の表を見ましょう）。",
     "steps": [
      "月曜日 12、水曜日 15。",
      "$12 + 15 = 27$。",
      "<strong>あわせて 27 こ売れました。</strong>"
     ]
    },
    {
     "task": "水曜日は木曜日より何こ多くアイスが売れましたか。",
     "steps": [
      "水曜日 15、木曜日 10。",
      "$15 - 10 = 5$。",
      "<strong>水曜日のほうが 5 こ多く売れました。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$ だから、${@2} : {@3} = {@4}$。${@5} = {@6}$ です。",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$ だから、${@2} \\cdot {@3} = {@4}$。${@5} = {@6}$ です。",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$。たしかめ：${@3} + {@4} = {@5}$。",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$。たしかめ：${@3} - {@4} = {@5}$。",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$。{@4}の数字は {@5} です。",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$、つぎに ${@2} + {@3} = {@4}$。答え：${@5}$。",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1 だんめ – 代金：${@0} \\cdot {@1} = {@2}$ €。2 だんめ – おつり：${@3} - {@4} = {@5}$ €。",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13、3 を書いて 1 くり上げる",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12、2 を書いて 1 くり上げる",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "思い出せないときは、計算を分けましょう。たとえば $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$ です。",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "{@0} の{@1}の数字は何ですか。",
  "Bez zátvoriek počítaj zľava doprava.": "かっこがないときは、左から右へ計算しましょう。",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "かっこがないので、左から計算します：${@0} - {@1} = {@2}$、つぎに ${@3} - {@4} = {@5}$。",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "かっこがないときは、左から右へ計算します。先に ${@0} - {@1}$ を計算してから、{@2} をひきましょう。",
  "Cesta vlakom k babke trvala 3 …": "おばあちゃんの家まで電車で 3 …",
  "Chýbajúci sčítanec zistíš odčítaním.": "たりないたされる数は、ひき算でわかります。",
  "Do hrnčeka sa zmestia asi 3 …": "マグカップに入るのはおよそ 3 …",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "□に入る数を書きましょう：$\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "正しい記号を入れましょう：$({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "あてはまるたんいを入れましょう：{@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "長いほうの 2 つの辺：$2 \\cdot {@0}$ はいくつですか。",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "短いほうの 2 つの辺：$2 \\cdot {@0}$ はいくつですか。",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "{@0} cm の辺 2 つで $2 \\cdot {@1} = {@2}$ です。のこりの 2 つの辺には ${@3} - {@4} = {@5}$ がのこるので、1 つの辺は ${@6} : 2 = {@7}\\,\\text{cm}$ です。",
  "Dvere sú vysoké asi 2 …": "ドアの高さはおよそ 2 …",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "数をたしてはいけません。「いくつ多い」はちがいなので、大きい数から小さい数をひきましょう。",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "いちばん小さい数（いちばん低いぼう）をさがしましょう。",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "いちばん大きい数（いちばん高いぼう）をさがしましょう。",
  "Hľadaj suseda v číselnom rade.": "数直線で、となりの数をさがしましょう。",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "{@0} の九九で、{@1} をこえない、いちばん大きい答えをさがしましょう。あまりは {@2} より小さくなければなりません。",
  "Jablko váži asi 150 …": "りんご 1 この重さはおよそ 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "たんい {@0} ではここでは小さすぎます：{@1} {@2} では少なすぎます。",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "たんい {@0} ではここでは大きすぎます：{@1} {@2} では多すぎます。",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "{@0} cm の辺 2 つで、あわせて何 cm ですか。",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "のこりの 2 つの辺には何 cm のこりますか。${@0} - {@1}$ を計算しましょう。",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "10 がいくつになりましたか。その数に 0 をつけましょう。",
  "Koľko eur stál celý nákup?": "買い物ぜんぶで何ユーロでしたか。",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "おつりは何ユーロでしたか。${@0} - {@1}$ を計算しましょう。",
  "Koľko je ${@0} - {@1}$?": "${@0} - {@1}$ はいくつですか。",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "パックぜんぶで、あわせていくつありますか。",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "のこりの辺 1 つの長さはいくつですか。${@0} : 2$ を計算しましょう。",
  "Koľko minút je od {@0} do {@1}?": "{@0} から {@1} までは何分ですか。",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "練習はぜんぶで何分でしたか。${@0} + {@1}$ を計算しましょう。",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "のこった木は何本ですか。${@0} - {@1}$ を計算しましょう。",
  "Koľko stromčekov záhradník zasadil?": "庭師さんが植えた木は何本ですか。",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "3 人の{@0}をあわせるといくつですか。${@1} + {@2} + {@3}$ を計算しましょう。",
  "Koľko {@0} má {@1}?": "{@1}の{@0}はいくつですか。",
  "Koľko {@0} {@1} {@2}?": "{@2}に{@1}{@0}の数はいくつですか。",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "人が乗ってきたあと、バスには何人いますか。",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "人がおりたあと、バスには何人のこっていますか。",
  "Koľkokrát je {@0} v čísle {@1}?": "{@1} の中に {@0} はいくつありますか。",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "{@2} {@3} の中に {@0} {@1} は何回入りますか。",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "{@1} より {@0} 小さい数はいくつですか。",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "{@1} より {@0} 大きい数はいくつですか。",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "100 が {@0} こ、10 が {@2} こ、1 が {@4} こでできている数はいくつですか。",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "{@1} をこえない {@0} の九九の答えで、いちばん大きいものはいくつですか。",
  "Lyžička sirupu má asi 5 …": "シロップ小さじ 1 ぱいはおよそ 5 …",
  "Mravec je dlhý asi 5 …": "アリの長さはおよそ 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "いちばん小さい数は {@0} で、{@1}です。",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "まずかけ算とわり算：${@0} \\cdot {@1} = {@2}$、${@3} : {@4} = {@5}$。つぎに ${@6} - {@7} = {@8}$。",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "まずかけ算：${@0} \\cdot {@1} = {@2}$。つぎに ${@3} {@4} {@5} = {@6}$。",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "まず{@0}をひきましょう：${@1} - {@2}$ はいくつですか。",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "まず大きいたんいをなおしましょう：${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "まず {@0} を {@1} になおしてから、のこりをたしましょう。",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "まず{@0}をたしましょう：${@1} + {@2}$ はいくつですか。",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "まずパックぜんぶでいくつあるかを計算しましょう。",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "まず植えた木が何本かを計算しましょう。",
  "Najprv vypočítaj, čo je v zátvorke.": "まずかっこの中を計算しましょう。",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "まずそれぞれの子どもがいくつ持っているかを調べ、それからぜんぶたしましょう。",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "まず買い物ぜんぶの代金を調べましょう。それから、さつの金がくからひきます。",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "まずかっこ：${@0} + {@1} = {@2}$。つぎに ${@3} : {@4} = {@5}$。",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "まずかっこ：${@0} - {@1} = {@2}$。つぎに ${@3} - {@4} = {@5}$。",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "まずかっこ：${@0} {@1} {@2} = {@3}$。つぎに ${@4} \\cdot {@5} = {@6}$。",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "まずかっこ：${@0} + {@1}$ はいくつですか。",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "まずかっこ：${@0} - {@1}$ はいくつですか。",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "まずかっこ：${@0} {@1} {@2}$ はいくつですか。",
  "Najväčšie číslo je {@0}, a to {@1}.": "いちばん大きい数は {@0} で、{@1}です。",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "{@1} をこえない {@0} の九九の答えで、いちばん大きいものは ${@2} \\cdot {@3} = {@4}$ です。あまり：${@5} - {@6} = {@7}$。だから ${@8} : {@9} = {@10}$ あまり {@11} です。",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "商だけを書きました。セミコロンのあとに、あまりも書きましょう。",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "かっこを見落としました。先にかっこの中の数をたしてから、わりましょう。",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "かっこを見落としました。先に ${@0} - {@1}$ を計算してから、それを {@2} からひきましょう。",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "かっこを見落としました。かっこの中は、かけ算よりも先に、いちばんはじめに計算します。",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "正しい曜日を見つけて、そこにある数を読みましょう。",
  "Nákladné auto váži asi 8 …": "トラックの重さはおよそ 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "ひき算より先に、かけ算とわり算をしましょう。",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "かけ算は、たし算やひき算より先に計算します。",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "いくつ多いですか。${@0} - {@1}$ を計算しましょう。",
  "Obdĺžnik a trojuholník s dĺžkami strán": "辺の長さを書いた長方形と三角形",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "長方形には辺が 4 つあります：長い辺が 2 つ、短い辺が 2 つ。ぜんぶたしましょう。",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "長方形のまわりの長さは ${@0}\\,\\text{cm}$ で、1 つの辺は ${@1}\\,\\text{cm}$ です。もう 1 つの辺の長さは何 cm ですか。",
  "Obvod rozdeľ na 4 rovnaké časti.": "まわりの長さを 4 つの同じ部分に分けましょう。",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "まわりの長さを 2 つにしか分けていません。正方形には同じ長さの辺が 4 つあります。",
  "Obvod trojuholníka je súčet jeho troch strán.": "三角形のまわりの長さは、3 つの辺の長さの和です。",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "正方形のまわりの長さは ${@0}\\,\\text{cm}$ です。1 つの辺の長さは何 cm ですか。",
  "Obvod: koľko je ${@0} + {@1}$?": "まわりの長さ：${@0} + {@1}$ はいくつですか。",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "まわりの長さから、わかっている 2 つの辺をひき、のこりを半分にしましょう。",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "{@0} から {@1} までが {@2} 分、{@3} から {@4} までがさらに {@5} 分です。あわせて ${@6} + {@7} = {@8}$ 分です。",
  "Od {@0} do {@1} je {@2} minút.": "{@0} から {@1} までは {@2} 分です。",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "百の位、十の位、一の位のじゅんにひきましょう。答えはたし算でたしかめましょう。",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "品物 1 つ分の代金しかひいていません。買った品物は {@0} こなので、まずぜんぶの代金を計算しましょう。",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "{@0} cm の辺を 1 回しかひいていません。長方形にはこの長さの辺が 2 つあります。",
  "Pi": "金",
  "Platil": "はらいました",
  "Platila": "はらいました",
  "Po": "月",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "おりたあと：${@0} - {@1} = {@2}$。乗ってきたあと：${@3} + {@4} = {@5}$。",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "ヒント：$5 \\cdot {@0} = {@1}$、さらに {@3} を {@2} 回たすので、${@4} + {@5} = {@6}$。",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "左からくらべましょう：まず百の位、つぎに十の位、さいごに一の位。",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "つぎに{@0}をひきましょう：${@1} - {@2}$ はいくつですか。",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "つぎに{@0}をたしましょう：${@1} + {@2}$ はいくつですか。",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "まず、ちょうどの時こくまでの分を数え、つぎにそのあとの分を数えましょう。",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "左から計算しましょう：${@0} - {@1}$ はいくつですか。",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "100 として計算してしまいました。時間では $1\\,\\text{{@0}} = {@1}$ です。",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "左から右へ計算してしまいました。わり算はひき算より先です。まず ${@0} : {@1}$ を計算しましょう。",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "左から右へ計算してしまいました。かけ算が先です。まず ${@0} \\cdot {@1}$ を計算しましょう。",
  "Predané zmrzliny": "売れたアイス",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "上の位は同じなので、{@0}で決まります：{@1} と {@2}。だから ${@3} {@4} {@5}$ です。",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "そのものを思いうかべましょう。小さいですか、大きいですか。かかる時間は短いですか、長いですか。",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "たんいをなおしましょう：${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "たんいをなおしましょう：${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "読んだページ",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "ほかの分をたしましょう：${@0} + {@1}$ はいくつですか。",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "百の位、十の位、一の位のじゅんにたすか、筆算で計算しましょう。",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "のこりをたしましょう：${@0} + {@1}$ はいくつですか。",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "{@0}をたしましょう：${@1} + {@2}$ はいくつですか。",
  "Písomné sčítanie 347 plus 285": "筆算 347 たす 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "{@0}で決まります：{@1} と {@2}。だから ${@3} {@4} {@5}$ です。",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "何百も一の位と同じように計算しましょう：100 が 4 こ + 100 が 3 こ = 100 が 7 こ。",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "まだ {@0} の九九の答えが 1 つたりません。{@1} を何回たしたかをたしかめましょう。",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "{@0} の九九の答えを 1 つ多く数えました。{@1} を何回たしたかをたしかめましょう。",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "両方の式をたしかめましょう：左はかっこを先に、右はかけ算を先に計算します。",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "$1\\,\\text{{@1}}$ は何 {@0} だったか思い出しましょう。",
  "St": "水",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "百の位の数字を 1 番目に、十の位を 2 番目に、一の位を 3 番目に書きます。ない位には 0 を書きましょう。",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "百の位は左から 1 番目の数字、一の位はいちばん右の数字です。",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "辺をその辺どうしでかけてしまいました。まわりの長さは 4 つの辺の長さの和です。",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "辺をかけてしまいました。まわりの長さは図形のまわりの線の長さなので、辺の長さをたします。",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "式はにていますが、かっこがあると計算のじゅんじょがかわります。両方の式を別々に計算しましょう。",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "月曜日と火曜日をたしましょう：${@0} + {@1}$ はいくつですか。",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "数をぜんぶたしましょう。先にちょうど何十になる組をさがすと楽です。",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "2 つの辺しかたしていません。長方形には辺が 4 つあるので、それぞれの長さを 2 回ずつたしましょう。",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "問題の数をそのままたしました。{@0} と {@1} は子どもの持っている数ではなく、どれだけ多いか少ないかです。まずそれぞれの子どもがいくつ持っているかを調べましょう。",
  "Tabuľka násobilky do 10 krát 10": "10 × 10 までの九九の表",
  "Taška zemiakov váži 5 …": "じゃがいもの入ったふくろの重さは 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "さいごまで計算しましょう：${@0} {@1} {@2}$ はいくつですか。",
  "Tlesknutie trvá asi 1 …": "手を 1 回たたくのにかかる時間はおよそ 1 …",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "それは買い物ぜんぶの代金です。さつからおつりがいくらかを調べましょう。",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "それはパックの中の数だけです。ほかの {@0} もたしましょう。",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "それはのこりの 2 つの辺をあわせた長さです。それをさらに半分にしましょう。",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "それは{@0}の数だけです。3 人ぜんぶでいくつかを聞いています。",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "それは庭師さんが植えた木の数です。かれた木の数をひきましょう。",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "三角形の辺は ${@0}\\,\\text{cm}$、${@1}\\,\\text{cm}$、${@2}\\,\\text{cm}$ です。まわりの長さは何 cm ですか。",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "練習は {@0} に始まって {@1} におわりました。何分かかりましたか。",
  "Upečené koláče": "焼いたケーキ",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "かれた木はへったので、たさないでひきましょう。",
  "Ut": "火",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "バスに {@0} 人乗っていました。バス停で {@1} 人おりて、{@2} 人乗ってきました。いまバスには何人いますか。",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "パックの中：${@0} \\cdot {@1} = {@2}$。あわせて：${@3} + {@4} = {@5}$。",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "アイス屋さんで、売れたアイスの数を記録しました。",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "どこかの列で、下の数字のほうが大きいのに、大きい数字から小さい数字をひいてしまいました。そのときは、となりの列から 10 をくり下げます。",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "パン屋さんで、焼いたケーキの数を記録しました。",
  "V piatok": "金曜日",
  "V pondelok": "月曜日",
  "V stredu": "水曜日",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "この曜日の数はいちばん小さいです。さがしているのはいちばん大きい数です。",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "この曜日の数はいちばん大きいです。さがしているのはいちばん小さい数です。",
  "V utorok": "火曜日",
  "Vo vedre je 10 …": "バケツの中に 10 …",
  "Vo štvrtok": "木曜日",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "あまりのあるわり算をしましょう：${@0} : {@1}$。商とあまりをセミコロンで区切って書きましょう（例：4; 1）。",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "$({@0} + {@1}) : {@2}$ を計算しましょう。",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "$({@0} {@1} {@2}) \\cdot {@3}$ を計算しましょう。",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "${@0} - ({@1} - {@2})$ を計算しましょう。",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "${@0} - {@1} - {@2}$ を計算しましょう。",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "${@0} \\cdot {@1} - {@2} : {@3}$ を計算しましょう。",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "${@0} {@1} {@2} \\cdot {@3}$ を計算しましょう。",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "まず ${@0} \\cdot {@1}$ を計算して、そのあと 0 をつけましょう。",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "両方の式を別々に計算しましょう。左はかっこから、右はかけ算から始めます。",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "長方形のまわりの長さを求めましょう（cm で）。{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "おりた → ひく。乗ってきた → たす。",
  "Vyučovacia hodina trvá 45 …": "学校のじゅぎょう 1 時間は 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "2 つの町のあいだのきょりは 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "左：$({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$。右：${@6} + {@7} = {@8}$。だから ${@9} {@10} {@11}$ です。",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "わり算を忘れました。{@0} からひくのは {@1} ではなく、${@2} : {@3}$ の答えです。",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "十の位の 0 を忘れました。0 がないと数字がずれて、ちがう数になってしまいます。",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "くり上がりを忘れました。ある列の和が 10 以上になったら、一の位だけを書き、1 を左どなりの列にたしましょう。",
  "Zabudol si pripočítať ešte ${@0}$.": "${@0}$ をたすのを忘れました。",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "2 つの辺しか数えていません。正方形には同じ長さの辺が 4 つあります。",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "植えた木：${@0} \\cdot {@1} = {@2}$。のこり：${@3} - {@4} = {@5}$。",
  "Zisti, o koľko sa líšia dve susedné čísla.": "となり合う 2 つの数が、いくつちがうかを調べましょう。",
  "Zmení sa počet desiatok.": "十の位の数がかわります。",
  "Zmení sa počet stoviek.": "百の位の数がかわります。",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "記号の向きが反対です。左からくらべましょう。数がはじめてちがう位で決まります（{@0}）。",
  "Zošit je dlhý asi 30 …": "ノートの長さはおよそ 30 …",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "すずかさんは、本を何ページ読んだかを記録しました。",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "あまりは ${@0} - {@1}$ です。商とあまりをセミコロンで区切って書きましょう。",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "あまり {@0} がわる数 {@1} より大きいので、{@2} は {@3} の中にもう 1 回入ります。あまりはいつもわる数より小さくなければなりません。",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "庭師さんが、木のなえを 1 列に {@2} 本ずつ {@0} 列植えました。そのうち {@4} 本がかれてしまいました。のこった木は何本ですか。",
  "balíčkov": "パック",
  "balíčky": "パック",
  "deň": "曜日",
  "gaštan": "くり",
  "gaštanov": "くり",
  "gaštany": "くり",
  "kartičiek": "カード",
  "kartičku": "カード",
  "kartičky": "カード",
  "knihy": "本",
  "kníh": "本",
  "koláče": "ケーキ",
  "koláčov": "ケーキ",
  "lopty": "ボール",
  "lôpt": "ボール",
  "orech": "くるみ",
  "perá": "ペン",
  "piatok": "金曜日",
  "pier": "ペン",
  "podiel; zvyšok": "商; あまり",
  "pondelok": "月曜日",
  "predali": "売れた",
  "prečítala Zuzka": "すずかさんが読んだ",
  "radov": "列",
  "rady": "列",
  "stoviek": "百の位",
  "stovku": "百の位",
  "stovky": "百の位",
  "strany": "ページ",
  "streda": "水曜日",
  "stredu": "水曜日",
  "stromček uschol": "本がかれました",
  "stromčekov": "木のなえ",
  "stromčekov uschlo": "本がかれました",
  "stromčeky": "木のなえ",
  "stromčeky uschli": "本がかれました",
  "strán": "ページ",
  "upiekli v pekárni": "パン屋さんで焼いた",
  "utorok": "火曜日",
  "v piatok": "金曜日",
  "v pondelok": "月曜日",
  "v stredu": "水曜日",
  "v utorok": "火曜日",
  "vo štvrtok": "木曜日",
  "zmrzliny": "アイス",
  "zmrzlín": "アイス",
  "zošitov": "ノート",
  "zošity": "ノート",
  "{@0} je v údajoch číslo {@1}.": "{@0}の数は {@1} です。",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0}は{@2}より {@1} 少ないのであって、{@3}より少ないのではありません。どの人の数からひくのかをたしかめましょう。",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0}は、{@4}が {@3} こずつ入った{@2}を {@1} つと、ほかに{@6}を {@5} こ持っています。{@7}はぜんぶでいくつありますか。",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0}は{@2}を {@1} こ持っています。{@3}は{@5}より {@4} こ多く、{@6}は{@8}より {@7} こ少なく持っています。3 人の{@9}をあわせるといくつですか。",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "10 が {@0} この {@2} ばいは、10 が {@3} こです：${@5} \\cdot {@6} = {@7}$。",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0}は 1 つ {@4} € の{@3}を {@2} つ{@1}。{@6} € さつで{@5}。おつりは何ユーロですか。",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0}は {@1}、{@2}は {@3}：${@4} - {@5} = {@6}$。",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}：${@1} + {@2} = {@3}$。{@4}：${@5} - {@6} = {@7}$。あわせて：${@8} + {@9} + {@10} = {@11}$。",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}5 日間ぜんぶで、{@2}{@1}の数はいくつですか。",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}{@3}に{@2}{@1}の数はいくつですか。",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}{@3}に{@2}{@1}の数は、{@4}より いくつ多いですか。",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}{@1}{@2}の数がいちばん少ないのは何曜日ですか。",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}{@1}{@2}の数がいちばん多いのは何曜日ですか。",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "時こくをふつうの数のようにひいてしまいました。1 時間は 60 分しかありません。まず、ちょうどの時こくまで数えましょう。",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "先に計算するのはどれですか。${@0} \\cdot {@1}$ を計算しましょう。",
  "Číselný rad od 0 do 1000": "0 から 1000 までの数直線",
  "Čísla klesajú vždy o {@0}: {@1}.": "数は {@0} ずつへっています：{@1}。",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "すぐに数をたしてはいけません。まず ${@0}$ を小さいたんい $\\text{{@1}}$ になおしましょう。",
  "Čísla rastú vždy o {@0}: {@1}.": "数は {@0} ずつふえています：{@1}。",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "数をたしただけです。{@1} が {@0} こ分は、かけ算です。",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "{@0} は 10 が {@1} こです。では ${@3} \\cdot {@4}$ はいくつですか。",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "{@0} を {@1} に分けます：{@2}。",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "反対がわから読みました。一の位はいちばん右の数字です。",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "反対がわから読みました。百の位は左から 1 番目の数字です。",
  "čokolád": "チョコレート",
  "čokolády": "チョコレート",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "乗ってきた人は、バスの中にふえました。その人数は、ひかないでたしましょう。",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "おりた人は、バスから出ていきました。その人数は、たさないでひきましょう。",
  "Št": "木",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "正方形には同じ長さの辺が 4 つあります：${@0} : 4 = {@1}\\,\\text{cm}$。",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "正方形の 1 つの辺の長さは ${@0}\\,\\text{cm}$ です。まわりの長さは何 cm ですか。",
  "štvrtok": "木曜日",
  "„O koľko viac“ zistíš odčítaním.": "「いくつ多い」はひき算でわかります。"
 }
});
