/* 日本語: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/r2/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "r2-cisla100": {
   "title": "100 までの数",
   "summary": "十のくらいと一のくらい、数のならび、100 までの数のくらべ方。",
   "theory": [
    "<p>2 けたの数には <strong>十のくらい</strong>と<strong>一のくらい</strong>があります。47 は 10 が 4 こと 1 が 7 こです：\n       $47 = 40 + 7$。10 が 10 こで<strong>百</strong>：$100$ になります。</p>",
    {
     "fig": "r2-stovka",
     "caption": "100 までの数の表。1 れつに 10 こずつ数がならんでいます。47 の下には 57、つまり 10 大きい数があります。"
    },
    "<p><strong>くらべ方：</strong>まず十のくらいをくらべます。同じなら、一のくらいをくらべます。\n       $63 &gt; 58$、なぜなら 10 が 6 こは 10 が 5 こより多いからです。$42 &lt; 45$、なぜなら十のくらいが同じで、2 は 5 より小さいからです。</p>"
   ],
   "examples": [
    {
     "task": "71 と 17 をくらべましょう。",
     "steps": [
      "71 は 10 が 7 こ、17 は 10 が 1 こしかありません。",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "10 が 6 こと 1 が 3 こで、いくつですか。",
     "steps": [
      "10 が 6 こで 60、それに 1 が 3 こです。",
      "$60 + 3 = 63$。",
      "<strong>63 です。</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "100 までのたし算とひき算",
   "summary": "何十の計算、くり上がり、数の線の上でのジャンプ。",
   "theory": [
    "<p><strong>何十</strong>のたし算は、一のくらいと同じように計算できます：$30 + 40$ は 10 が 3 こと 10 が 4 こで、10 が 7 こ、$70$ です。\n       同じように $90 - 60 = 30$ です。</p>",
    "<p>大きい数では、2 つめの数を<strong>何十といくつ</strong>に分けて、じゅんにたします。\n       $38 + 25$ では、まず 20 をたし、つぎに 5 をたします。</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$：20 ジャンプすると 58、5 ジャンプすると 63。だから $38 + 25 = 63$ です。"
    },
    "<p>ひき算も同じようにします：$72 - 34$ は、まず $72 - 30 = 42$、つぎに $42 - 4 = 38$。\n       答えはたし算でたしかめられます：$38 + 34 = 72$。</p>"
   ],
   "examples": [
    {
     "task": "$47 + 36$ を計算しましょう。",
     "steps": [
      "36 を 30 と 6 に分けます。",
      "$47 + 30 = 77$。",
      "$77 + 6 = 83$。",
      "<strong>答え：83</strong>"
     ]
    },
    {
     "task": "$81 - 25$ を計算しましょう。",
     "steps": [
      "25 を 20 と 5 に分けます。",
      "$81 - 20 = 61$。",
      "$61 - 5 = 56$。",
      "たしかめ：$56 + 25 = 81$。<strong>答え：56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "かけ算とわり算",
   "summary": "同じ数をくり返したすかけ算、同じ数ずつ分けるわり算。",
   "theory": [
    "<p><strong>かけ算</strong>は、同じ数のたし算をみじかく書いたものです。$4 + 4 + 4$ のかわりに $3 \\cdot 4$\n       （3 かける 4、4 が 3 つ分）と書きます。かける数どうしを<em>因数</em>、答えを<em>積</em>といいます。</p>",
    {
     "fig": "r2-pole",
     "caption": "4 こずつ 3 れつ：$4 + 4 + 4 = 3 \\cdot 4 = 12$。たてに見ると、3 こずつ 4 れつ：$4 \\cdot 3 = 12$。"
    },
    "<p>かける順番をかえても答えは同じです：$3 \\cdot 4 = 4 \\cdot 3$。どんな数に 1 をかけてもかわりません（$7 \\cdot 1 = 7$）。\n       どんな数に 0 をかけても 0 です（$5 \\cdot 0 = 0$）。</p>",
    "<p><strong>わり算</strong>は、同じ数ずつに分けることです。あめ 12 こを 3 人で同じ数ずつ分けると、1 人分は\n       $12 : 3 = 4$ こです。わり算はかけ算の反対です：$3 \\cdot 4 = 12$ だから $12 : 3 = 4$ です。</p>"
   ],
   "examples": [
    {
     "task": "$5 + 5 + 5 + 5$ をかけ算の式に書いて、計算しましょう。",
     "steps": [
      "5 を 4 回たしています。",
      "$4 \\cdot 5 = 20$。",
      "<strong>答え：20</strong>"
     ]
    },
    {
     "task": "花 15 本で、5 本ずつの花たばを作ります。花たばはいくつできますか。",
     "steps": [
      "15 の中に 5 がいくつ入るかを考えます。",
      "$3 \\cdot 5 = 15$ だから $15 : 5 = 3$。",
      "<strong>花たばは 3 つできます。</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "数のばいと九九",
   "summary": "10 × 10 までの九九、ある数のばい、九九を使うわり算。",
   "theory": [
    "<p>ある数に 1、2、3、… をじゅんにかけると、その数の<strong>ばい数</strong>ができます。3 のばい数は\n       3、6、9、12、15、18、21、24、27、30 です。数の線の上では、いつも 3 ずつジャンプします。</p>",
    {
     "fig": "r2-nasobky",
     "caption": "3 のばい数：1 回のジャンプは 3 です。4 回ジャンプすると $4 \\cdot 3 = 12$ に着きます。"
    },
    "<p>べんりなコツ：2 のばい数は偶数、5 のばい数は一のくらいが 0 か 5、10 のばい数は一のくらいが 0 です。\n       $6 \\cdot 4$ がわからないときは：$5 \\cdot 4 = 20$ に、もう 1 回 4 をたして $24$。</p>",
    "<p>1 つのかけ算から、すぐに 2 つのわり算がわかります：$6 \\cdot 4 = 24$ から $24 : 4 = 6$ と $24 : 6 = 4$。</p>"
   ],
   "examples": [
    {
     "task": "$7 \\cdot 5$ を計算しましょう。",
     "steps": [
      "5 のばい数：5、10、15、20、25、30、35。",
      "7 番目は 35 です。",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "$32 : 4$ を計算しましょう。",
     "steps": [
      "4 をかけると 32 になる数をさがします。",
      "$8 \\cdot 4 = 32$。",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "文章問題と式の書き方",
   "summary": "文章問題を式にする：たし算、ひき算、かけ算、わり算。",
   "theory": [
    "<p>文章問題では、まず<strong>わかっていること</strong>と<strong>もとめること</strong>を書きます。つぎに正しい\n       計算をえらんで計算し、<strong>答え</strong>を文で書きます。</p>",
    "<ul><li><em>もらった、ふえた、あわせて、… 多い</em> → たし算、</li>\n       <li><em>あげた、のこりは、… 少ない、いくつ多い</em> → ひき算、</li>\n       <li><em>… ずつ（同じ数を何回も）</em> → かけ算、</li>\n       <li><em>同じ数ずつ分けた、… ずつのグループがいくつ</em> → わり算。</li></ul>",
    "<p>問題の<strong>書き方</strong>の例：<br>ゆうとさんがもっていた … ビー玉 35 こ<br>なくした … ビー玉 12 こ<br>\n       のこり … ? こ<br>$35 - 12 = 23$<br>答え：ゆうとさんのビー玉は 23 こ のこりました。</p>"
   ],
   "examples": [
    {
     "task": "みおさんはシールを 28 まい もっています。そうたさんは みおさんより 15 まい多くもっています。そうたさんはシールを何まいもっていますか。",
     "steps": [
      "「15 まい多い」は、28 に 15 をたすということです。",
      "$28 + 15 = 43$。",
      "<strong>答え：そうたさんはシールを 43 まいもっています。</strong>"
     ]
    },
    {
     "task": "お母さんが 4 まいのお皿に りんごを 5 こずつのせました。りんごはぜんぶで何こありますか。",
     "steps": [
      "5 こずつ 4 皿分なので、かけ算です。",
      "$4 \\cdot 5 = 20$。",
      "<strong>答え：お皿のりんごはぜんぶで 20 こです。</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "点、線分、直線、曲線",
   "summary": "線を見分け、線分の長さをはかってくらべる。",
   "theory": [
    "<p><strong>点</strong>は小さな点（・）でかき、大文字であらわします。たとえば点 $A$。\n       <strong>線分</strong>は 2 つの点のあいだのまっすぐな線です。たとえば線分 $CD$。点 $C$ と点 $D$ はそのはしの点です。</p>",
    "<p><strong>直線</strong>ははじまりもおわりもないまっすぐな線で、両方にどこまでものばすことができます。\n       小文字であらわします。たとえば直線 $p$。<strong>曲線</strong>はまっすぐではなく、まがっている線です。</p>",
    {
     "fig": "r2-ciary",
     "caption": "点、線分、直線、曲線。まっすぐな線はものさしを使ってかきます。"
    },
    "<p>線分の長さは、ものさしで<strong>センチメートル</strong>ではかります。ものさしの 0 をはしの点 $A$ に合わせて、\n       点 $B$ のところの目もりを読みます。</p>",
    {
     "fig": "r2-pravitko",
     "caption": "線分 $AB$ は 0 から始まって 7 のところでおわっています。長さは $7\\,\\text{cm}$ です。"
    }
   ],
   "examples": [
    {
     "task": "はしの点が 2 つあるのはどの線ですか。",
     "steps": [
      "点はただの点で、直線にも曲線にもはしの点はありません。",
      "<strong>線分には、はしの点が 2 つあります。</strong>"
     ]
    },
    {
     "task": "線分 $AB$ の長さは $9\\,\\text{cm}$、線分 $CD$ の長さは $4\\,\\text{cm}$ です。線分 $AB$ のほうが何 cm 長いですか。",
     "steps": [
      "くらべるので、ひき算をします。",
      "$9 - 4 = 5$。",
      "<strong>線分 $AB$ のほうが $5\\,\\text{cm}$ 長いです。</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "長さ・時間・お金のたんい",
   "summary": "センチメートルとメートル、時と分、ユーロとセント。",
   "theory": [
    "<p><strong>長さ：</strong>みじかいものはセンチメートル（cm）で、長いものはメートル（m）ではかります。\n       $1\\,\\text{m} = 100\\,\\text{cm}$、$1\\,\\text{dm} = 10\\,\\text{cm}$ です。</p>",
    "<p><strong>時間：</strong>1 日は 24 時間、1 時間（h）は 60 分（min）です。30 分は半時間（はん）、15 分は 4 分の 1 時間です。\n       時計では、<em>みじかいはり</em>が何時を、<em>長いはり</em>が何分をさします。</p>",
    {
     "fig": "r2-hodiny",
     "caption": "左は 7 時で、長いはりは 12 をさしています。右は 2 時 30 分（2 時半）で、長いはりは 6 を、みじかいはりは 2 と 3 のあいだをさしています。"
    },
    "<p><strong>お金：</strong>ユーロ（€）とセント（c）ではらいます。$1\\,\\text{€} = 100$ セントです。\n       コインは 1 c、2 c、5 c、10 c、20 c、50 c、1 €、2 € があります。</p>",
    {
     "fig": "r2-mince",
     "caption": "ユーロのコインを、いちばん小さいがくから大きいがくまでならべたもの。"
    }
   ],
   "examples": [
    {
     "task": "1 時間 15 分は何分ですか。",
     "steps": [
      "1 時間は 60 分です。",
      "$60 + 15 = 75$。",
      "<strong>75 分です。</strong>"
     ]
    },
    {
     "task": "さいふに 50 c、20 c、20 c のコインがあります。1 ユーロまであと何セントたりませんか。",
     "steps": [
      "$50 + 20 + 20 = 90$ セント。",
      "1 ユーロは 100 セントです：$100 - 90 = 10$。",
      "<strong>あと 10 セントたりません。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$ なので、${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$ です。",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$、$100 - {@0} = {@1}$。あと ${@2}\\,\\text{cm}$ たりません。",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$。線分 $KL$ のほうが ${@3}\\,\\text{cm}$ 長いです。",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$ なので、${@3} \\cdot {@4} = {@5}$ です。",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$ セントです。",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$ だから、${@3} : {@4} = {@5}$ です。",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$ だから、{@3} は {@4} のばい数です。ほかの数は {@5} の九九には出てきません。",
  "1 dm je 10 cm.": "1 dm は 10 cm です。",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1 ユーロは 100 セントです：$100 - {@0} = {@1}$。あと {@2} {@3}たりません。",
  "1 hodina": "1 時間",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1 時間は 60 分です：$60 + {@0} = {@1}$ 分。",
  "1 m je 100 cm.": "1 m は 100 cm です。",
  "1 € = 100 centov.": "1 € = 100 セントです。",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "線分 $AB$ の長さは何 cm ですか。センチメートルで答えましょう。{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "点 $A$ は {@0} のところ、点 $B$ は {@1} のところにあります。${@2} - {@3} = {@4}$ なので、線分の長さは ${@5}\\,\\text{cm}$ です。",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "点は小さな 1 つのしるしだけです。絵にあるのは線です。",
  "Bod, úsečka, priamka a krivá čiara": "点、線分、直線、曲線",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "ぜんたいの長さは、すべての線分の長さの和です。",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "おれ線ぜんたいは、どの部分よりも長いです。線分の長さはひかないで、たしましょう。",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "センチメートルはとても小さく、ゆびのはばくらいです。ここではもっと大きいたんいがひつようです。",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "セントが 100 以上あります。100 セントでもう 1 ユーロになるので、ユーロのほうにたしましょう。",
  "Ceny píšeme v eurách.": "ねだんはユーロで書きます。",
  "Ceruzka je dlhá asi 15 …": "えんぴつの長さはおよそ 15 …",
  "Cez dva rôzne body prechádza práve jedna priamka.": "ちがう 2 つの点を通る直線は、ちょうど 1 本です。",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "たりない数はひき算でわかります：${@0} - {@1} = {@2}$。たしかめ：${@3} + {@4} = {@5}$。",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "わり算はひき算ではありません。{@0} をかけると {@1} になる数をさがしましょう。",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1}にします：${@2} : {@3} = {@4}$、なぜなら ${@5} \\cdot {@6} = {@7}$ だからです。",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "10 をたしてはいけません。1 dm は 10 cm なので、dm の数に 10 をかけましょう。",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "十のくらいと一のくらいを、ふつうの数のようにたしてはいけません。十のくらいの数字を先に書き、そのあとに一のくらいの数字を書きます。",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "十のくらいが同じなので、一のくらいをくらべます：{@0} と {@1}。だから ${@2} {@3} {@4}$ です。",
  "Deň (s nocou) má 24 hodín.": "1 日（夜もふくめて）は 24 時間です。",
  "Dlhšie veci meriame v metroch.": "長いものはメートルではかります。",
  "Dlhší čas meriame v hodinách.": "長い時間は「時間」ではかります。",
  "Dom je vysoký asi 10 …": "家の高さはおよそ 10 …",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "□に入る数を書きましょう：${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "□に入る数を書きましょう：${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "ぬけている {@0} のばい数を書きましょう：{@1}",
  "Doplň správnu jednotku: {@0}": "正しいたんいを入れましょう：{@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "ならびでぬけている数を書きましょう：{@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "長さをたしてはいけません。一方の線分がどれだけ長いかを聞いているので、ひき算をしましょう。",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "長さをたします：${@0} + {@1} = {@2}$。おれ線の長さは ${@3}\\,\\text{cm}$ です。",
  "Euromince": "ユーロのコイン",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "1 時間は長い時間です。ここではもっと短いたんいがひつようです。",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "1 時間は 60 分です。60 の半分は 30、4 つに分けた 1 つ分は 15 です。",
  "Hodina má 60 minút. {@0} je {@1} minút.": "1 時間は 60 分です。{@0} は {@1} 分です。",
  "Hodina nemá 100 minút, ale 60 minút.": "1 時間は 100 分ではなく、60 分です。",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "まず時間を分になおしましょう：1 時間は 60 分です。",
  "Hodiny ukazujú 7:00 a 2:30": "7:00 と 2:30 をさしている時計",
  "Hľadaj suseda čísla v číselnom rade.": "数のならびで、その数のとなりの数をさがしましょう。",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "長さ、時間、ねだんのどれですか。それは短いですか、長いですか。",
  "Je to len jedna bodka, teda bod.": "小さな 1 つのしるしだけなので、点です。",
  "Je čiara rovná? Má krajné body?": "線はまっすぐですか。はしの点はありますか。",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "一のくらいをたすと 10 をこえましたが、くり上がった 10 をたすのを忘れました。",
  "Každé ďalšie číslo je o {@0} väčšie.": "つぎの数は、いつも {@0} 大きくなります。",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "同じ数を何回もたすときは、かけ算が使えます。",
  "Kniha stojí asi 12 …": "本のねだんはおよそ 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "${@0}\\,\\text{dm}$ は何 cm ですか。",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "{@0} から {@1} までは何 cm ですか。${@2} - {@3}$ を計算しましょう。",
  "Koľko centimetrov má 1 meter?": "1 m は何 cm ですか。",
  "Koľko centov je spolu?{@0}": "ぜんぶで何セントですか。{@0}",
  "Koľko centov je v ostatných minciach?": "のこりのコインは何セントですか。",
  "Koľko centov má 1 euro?": "1 ユーロは何セントですか。",
  "Koľko eur je v minciach 1 € a 2 €?": "1 € と 2 € のコインで何ユーロですか。",
  "Koľko hodín má jeden deň?": "1 日は何時間ですか。",
  "Koľko je $100 - {@0}$?": "$100 - {@0}$ はいくつですか。",
  "Koľko je $60 + {@0}$?": "$60 + {@0}$ はいくつですか。",
  "Koľko je ${@0} \\cdot {@1}$?": "${@0} \\cdot {@1}$ はいくつですか。",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "何時何分ですか。<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"時計の文字ばん\">{@0}</svg>",
  "Koľko je skupín?": "まとまりはいくつありますか。",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "{@0}はぜんぶでいくつですか。<span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "ぜんぶでいくらで、何ユーロ何セントですか。2 つの数をセミコロンで区切って書きましょう（例：2; 35）。{@0}",
  "Koľko krajných bodov má priamka?": "直線には、はしの点がいくつありますか。",
  "Koľko krajných bodov má úsečka?": "線分には、はしの点がいくつありますか。",
  "Koľko kúskov je v jednej skupine?": "1 つのまとまりにはいくつありますか。",
  "Koľko minút je 1 hodina a {@0} minút?": "1 時間 {@0} 分は何分ですか。",
  "Koľko minút je {@0}?": "{@0} は何分ですか。",
  "Koľko minút má 1 hodina?": "1 時間は何分ですか。",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "ちがう 2 つの点を通る直線は、何本ひけますか。",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "{@0} を何回たすと {@1} になりますか。",
  "Koľkokrát sa opakuje to isté číslo?": "同じ数は何回くり返されていますか。",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "このたし算で、{@0} は何回くり返されていますか。",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "曲線は線です。ここにあるのは小さな 1 つのしるしだけです。",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "曲線はまがっています。この線はまっすぐです。",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "短いはりは、まだ {@0} と {@1} のあいだにあります。{@2} にとどくまでは、小さいほうの時こくです。",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "短いはりは時を、長いはりは分をさします。長いはりが 6 のときは「半」です。",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "短いはりは {@0}、長いはりは {@1} をさしているので、{@2} 分です。{@3}（{@4}）です。",
  "Krátke veci meriame v centimetroch.": "短いものはセンチメートルではかります。",
  "Krátky čas meriame v minútach.": "短い時間は「分」ではかります。",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "{@0} の中にある何十はいくつですか。（36 なら 30 です。）",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "つぎの数のうち、{@0} のばい数はどれですか。",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "{@2} より {@0} {@1}数はいくつですか。",
  "Ktoré číslo krát {@0} dá {@1}?": "{@0} をかけると {@1} になる数はいくつですか。",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "10 が {@0} こと 1 が {@2} こで、いくつですか。",
  "Ktorú počtovú operáciu použiješ?": "どの計算を使いますか。",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "おれ線は 2 本の線分でできています。1 本目は ${@0}\\,\\text{cm}$、2 本目は ${@1}\\,\\text{cm}$ です。おれ線ぜんたいの長さは何 cm ですか。",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "1 メートルは大またの 1 歩くらいの長さです。ここでは大きすぎるので、もっと小さいたんいがひつようです。",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "1 € と 2 € のコインは分けて考え、セントはセントでたしましょう。100 セントは 1 ユーロです。",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "1 分は短い時間です。ここではもっと長いたんいがひつようです。",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "{@0} {@1}持っています。1 ユーロまであと何セントたりませんか。",
  "Najprv odčítaj desiatky, potom jednotky.": "まず何十をひき、つぎに一のくらいをひきましょう。",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "まず何十をひきましょう：${@0} - {@1}$ はいくつですか。",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "まず何十をひきます：${@0} - {@1} = {@2}$。つぎに一のくらい：${@3} - {@4} = {@5}$。",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "まず十のくらいをくらべましょう。同じなら、一のくらいをくらべます。",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "まず時間を分になおしてから、たしましょう。",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "まず何十をたしましょう：${@0} + {@1}$ はいくつですか。",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "まず何十をたします：${@0} + {@1} = {@2}$。つぎに一のくらい：${@3} + {@4} = {@5}$。",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "ひいてはいけません。あめを同じ数ずつ分けるので、わり算です。",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "ひいてはいけません。{@0} をかけると {@1} になる数をさがしています。",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "ひいてはいけません。同じ数ずつ分けるときは、わり算をします。",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "ひいてはいけません。{@1} の中に {@0} がいくつ入るかを調べるので、わり算です。",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "たす数の個数と {@0} をたしてはいけません。{@1} が {@2} 回くり返されているので、かけ算です。",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "同じ数ずつが何こ分もあるときは、かけ算を使います。",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "{@0} のばい数は、いつも {@1} ずつふえます：{@2}。ぬけているのは ${@3} \\cdot {@4} = {@5}$ です。",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "{@0} のばい数：{@1}。だから ${@2} \\cdot {@3} = {@4}$ です。",
  "Násobky čísla 3 na číselnom rade": "数のならびの上の 3 のばい数",
  "O koľko je {@0} viac ako {@1}?": "{@0} は {@1} より何多いですか。",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "{@0} からひいた数は ${@1} - {@2} = {@3}$ です。たしかめ：${@4} - {@5} = {@6}$。",
  "Odčítanie použiješ, keď niečo ubudne.": "へるときは、ひき算を使います。",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "「いくつ多い」という問題は、大きい数から小さい数をひいて解きます。",
  "Palec na ruke je dlhý asi 5 …": "手の親ゆびの長さはおよそ 5 …",
  "Pol hodiny": "半時間",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "十のくらいをくらべます：{@0} と {@1}。だから ${@2} {@3} {@4}$ です。",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "くらべるので、ひき算をします：{@0} {@1}のほうが{@3}が {@2} こ多いです。",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "反対の方向に進みました。小さい数はひき算で求めます。",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "反対の方向に進みました。大きい数はたし算で求めます。",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "気をつけましょう。線分は 0 から始まっていません。A と B のあいだの cm を数えましょう。",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "となり合う 2 つの数を見ましょう。いくつちがいますか。",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "短いはりがどの数をさしているか、よく見ましょう。",
  "Pozri sa, pri ktorom čísle je bod B.": "点 B がどの数のところにあるかを見ましょう。",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "まとまりの数と、1 つのまとまりの数をたしてはいけません。同じ数のまとまりは、かけ算で数えます。",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "お皿の数と、1 まいのお皿にのっている数をたしてはいけません。どのお皿にも同じ数ずつあるので、かけ算をしましょう。",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "何十も一のくらいと同じように計算しましょう：10 が 3 こ + 10 が 4 こ = 10 が 7 こ。",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "1 時間が 100 分あるように計算してしまいました。1 時間は 60 分しかありません。",
  "Pravítko a úsečka AB": "ものさしと線分 AB",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "{@1} が見つかるまで、{@0} のばい数をじゅんに言いましょう。",
  "Prestávka trvá 10 …": "休み時間は 10 …",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "点 B のところの数だけを読みました。線分は 0 から始まっていないので、点 A のところの数をひきましょう。",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "一のくらいで、ぎゃくにひいてしまいました（{@0} − {@1}）。一のくらいがひけないときは、くり下がりをします：まず何十をひき、つぎに一のくらいをひきましょう。",
  "Pri ktorom čísle na pravítku je bod A?": "点 A はものさしのどの数のところにありますか。",
  "Pri ktorom čísle na pravítku je bod B?": "点 B はものさしのどの数のところにありますか。",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "直線はまっすぐな線です。ここにあるのは小さな 1 つのしるしだけです。",
  "Priamka je rovná. Táto čiara sa zatáča.": "直線はまっすぐです。この線はまがっています。",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "直線には、はしの点がありません。この線には、始まりとおわりの 2 つのはしの点があります。",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "直線には始まりもおわりもなく、はしの点は 1 つもありません。",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "ふえた → たし算、へった → ひき算、同じ数ずつが何こ分も → かけ算。",
  "Pribudlo, preto sčítame.": "ふえたので、たし算をします。",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "ふえるので、たし算をします：{@0} {@1}の{@3}は {@2} こになりました。",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "何十だけをたしました。一のくらいの {@0} をたすのも忘れないようにしましょう。",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "{@0} を {@1} 回たすか、{@2} の九九を思い出しましょう。",
  "Rovnaké rozdeľovanie je delenie.": "同じ数ずつ分けるのは、わり算です。",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "はしの点がなく、絵ぜんたいを通るまっすぐな線は直線です。",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "2 つのはしの点があるまっすぐな線は線分です。",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "2 つ目の数を何十といくつに分けて、じゅんにたしましょう。",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "{@0} {@1}にします：${@2} : {@3} = {@4}$、なぜなら ${@5} \\cdot {@6} = {@7}$ だからです。1 人分の{@9}は {@8} こです。",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "数を何十といくつに分けましょう：${@0} = \\square + \\square$。",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "まだ {@0} のばい数を 1 つたりません。{@1} ずつのジャンプをもう一度数えましょう。",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "{@0} のばい数を 1 つ多く数えました。{@1} ずつのジャンプをもう一度数えましょう。",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "数のならびのジャンプ：38 たす 20 たす 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "ぜんぶで {@0} € と {@1} c です。何ユーロ何セントですか。（100 セントは 1 ユーロでしたね。）",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "午前の 12 時間と午後の 12 時間をたしましょう。",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "まとまりの数と、1 つのまとまりの数を数えましょう。それからかけ算をします。",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "コインのまい数を数えてしまいました。コインに書いてある数をたしましょう。",
  "Stovková tabuľka čísel od 1 do 100": "1 から 100 までの数の表",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "リボンの長さは ${@0}\\,\\text{cm}$ です。$1\\,\\text{m}$ まであと何 cm たりませんか。",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "{@2} こずつの{@1}が {@0} つあります：${@3} = {@4} \\cdot {@5} = {@6}$。",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "コインの金がくを、大きいものからじゅんにたしましょう。",
  "Sčítanie použiješ, keď niečo pribudne.": "ふえるときは、たし算を使います。",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "つぎに一のくらいをひきましょう：${@0} - {@1}$ はいくつですか。",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "つぎに一のくらいをたしましょう：${@0} + {@1}$ はいくつですか。",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "それはリボンの長さです。1 メートルまであとどれだけたりないかを聞いているので、100 からひきましょう。",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "それは 1 日の半分だけです。時計の文字ばんは 12 時間ですが、はりは 1 日に 2 回まわります。",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "それは十のくらいの数です。一のくらいは右はしの数字です。",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "それは一のくらいの数です。十のくらいは左はしの数字です。",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "それはもう持っているセントの数です。100 セントまであといくつたりないかを聞いているので、ひき算をしましょう。",
  "Tri rady po štyri bodky": "4 こずつの点が 3 れつ",
  "Trieda je dlhá asi 9 …": "教室の長さはおよそ 9 …",
  "Trištvrte hodiny": "4 分の 3 時間",
  "Trojuholník má 3 strany a každá strana je úsečka.": "三角形には辺が 3 つあり、どの辺も線分です。",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "へるので、ひき算をします：{@0} {@1} {@3}が {@2} こ残りました。",
  "Ubudlo, preto odčítame.": "へったので、ひき算をします。",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "セントになおすと：${@0} = {@1}$ セント。100 セントは 1 ユーロなので、{@2} € {@3} c です。",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "{@0} ではかるのは{@1}ですが、ここで聞いているのは{@2}です。",
  "V noci spíme asi 10 …": "夜ねる時間はおよそ 10 …",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "十のくらいと一のくらいを入れかえてしまいました。十のくらいの数字を先に、一のくらいの数字をあとに書きます。",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "はりを入れかえてしまいました。短いはりは時を、長いはりは分をさします。",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "{@0} のばい数を言いましょう：{@1}、{@2}、{@3}、…",
  "Vypočítaj ${@0} : {@1}$.": "${@0} : {@1}$ を計算しましょう。",
  "Vypočítaj ${@0} \\cdot {@1}$.": "${@0} \\cdot {@1}$ を計算しましょう。",
  "Vypočítaj ${@0} {@1} {@2}$.": "${@0} {@1} {@2}$ を計算しましょう。",
  "Vyučovanie trvá asi 5 …": "学校のじゅぎょうはおよそ 5 …",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "三角形のまわりは、何本の線分でできていますか。",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "正方形のまわりは、何本の線分でできていますか。",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "風船 {@0} こで、{@1} こずつの{@2}のたばを作ります。たばはいくつできますか。",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "たし算をかけ算の式に書いて、計算しましょう：${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "{@1} の中に {@0} がいくつ入るかを調べます：${@2} : {@3} = {@4}$、なぜなら ${@5} \\cdot {@6} = {@7}$ だからです。",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "十のくらいの数だけがかわり、一のくらいは同じです。数の表で 1 だん動きましょう。",
  "Zmrzlina stojí asi 2 …": "アイスのねだんはおよそ 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "記号 = は、同じ数のあいだにだけ入ります。この 2 つの数はちがいます。",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "記号の向きが反対です。十のくらいが同じなので、一のくらいできまります。",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "記号の向きが反対です。十のくらいできまります：10 が多いほうが大きい数です。",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "記号 + は「ふやす」という意味です。ここはひき算ではなく、たし算です。",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "記号 − は「へらす」という意味です。ここはたし算ではなく、ひき算です。",
  "balón": "風船",
  "balónov": "風船",
  "balóny": "風船",
  "bod": "点",
  "bod A": "点 A",
  "cent": "セント",
  "centov": "セント",
  "centy": "セント",
  "cenu": "ねだん",
  "ciferník hodín": "時計の文字ばん",
  "citrónov": "レモン",
  "desiatku": "十の位",
  "deti": "人の子ども",
  "detí": "人の子ども",
  "dieťa": "人の子ども",
  "dĺžku": "長さ",
  "eurá; centy": "ユーロ; セント",
  "hodina": "時",
  "hodiny": "時",
  "hodín": "時",
  "hrušiek": "なし",
  "jahôd": "いちご",
  "je medzi {@0} a {@1}": "{@0} と {@1} のあいだにあり",
  "jednotku": "一の位",
  "krivá čiara": "曲線",
  "kúpil": "買いました",
  "kúpila": "買いました",
  "min": "分",
  "mince": "コイン",
  "mrkiev": "にんじん",
  "orechov": "くるみ",
  "orechy": "くるみ",
  "pol hodiny": "半時間",
  "položil": "のせました",
  "položila": "のせました",
  "presne {@0} {@1}": "ちょうど {@0} {@1}",
  "priamka": "直線",
  "priamka p": "直線 p",
  "rovnaké časti": "等分",
  "rovnakú časť": "等分",
  "rovnakých častí": "等分",
  "rozdelil": "分けました",
  "rozdelila": "分けました",
  "skupina": "まとまり",
  "skupiny": "まとまり",
  "skupín": "まとまり",
  "skáčeme vždy o 3": "3 ずつジャンプ",
  "stratil": "なくしました",
  "stratila": "なくしました",
  "tanier": "お皿",
  "taniere": "お皿",
  "tanierov": "お皿",
  "trištvrte hodiny": "4 分の 3 時間",
  "ukazuje na {@0}": "{@0} をさし",
  "vreciek": "ふくろ",
  "vrecko": "ふくろ",
  "vrecká": "ふくろ",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} たしかめ：${@1} + {@2} = {@3}$。",
  "{@0} Správny zápis je {@1}.": "{@0} 正しい式は {@1} です。",
  "{@0} desiatka je {@1}.": "10 が {@0} こで {@1} です。",
  "{@0} desiatky sú {@1}.": "10 が {@0} こで {@1} です。",
  "{@0} desiatok je {@1}.": "10 が {@0} こで {@1} です。",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0} は、{@1}のほうが少ない数だけです。それを{@2}の数からひきましょう。",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0}は{@1}より少ないので、たし算ではなく、ひき算をします。",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0}は{@2}を {@1} こ持っています。{@3}は{@0}より{@5}が {@4} こ少ないです。{@7}は{@6}を何こ持っていますか。",
  "{@0} {@1} a {@2} minút": "{@0} {@1} {@2} 分",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0}は {@2} まいの{@3}に、{@5}を {@4} こずつ{@1}。お皿の上の{@6}は、ぜんぶで何こですか。",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0}は{@3}を {@2} こ{@1}。そして、さらに {@5} こ{@4}。いま{@6}が何こあるかを表す式はどれですか。",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0}は{@3}を {@2} こ{@1}。そのうち {@4} こを{@5}。{@7} {@6}が何こ残っているかを表す式はどれですか。",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0}は、{@5}が {@4} こずつ入った{@3}を {@2} つ{@1}。{@6}はぜんぶで何こですか。それを表す式はどれですか。",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0}は{@3}を {@2} こ、{@4} 人の友だちに同じ数ずつ{@1}。1 人分の{@5}は何こですか。",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0}は{@3} {@2} こを、{@4} {@5}に同じ数ずつ{@1}。1 人分のあめは何こですか。",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "10 が {@0} こ {@2} 10 が {@3} こ：${@5} {@6} {@7} = {@8}$。",
  "{@0}-krát po {@1} je násobenie.": "{@1} が {@0} こ分は、かけ算です。",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@1} が {@0} こ分は、かけ算です：${@2} \\cdot {@3} = {@4}$。お皿の上の{@6}は {@5} こです。",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "線分 $KL$ は ${@0}\\,\\text{cm}$、線分 $MN$ は ${@1}\\,\\text{cm}$ です。線分 $KL$ のほうが何 cm 長いですか。",
  "Úsečka je rovná. Táto čiara sa zatáča.": "線分はまっすぐです。この線はまがっています。",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "線分は 2 つの点のあいだの線です。ここにあるのは小さな 1 つのしるしだけです。",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "線分には、たとえば $A$ と $B$ のような 2 つのはしの点があります。",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "線分には両はしに 2 つのはしの点があります。この線にはそれがなく、さらにのびています。",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "線分には始まりもおわりもありますが、直線にはどちらもありません。",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "線分は 0 から始まって {@0} のところでおわっています。長さは ${@1}\\,\\text{cm}$ です。",
  "úsečka": "線分",
  "úsečka CD": "線分 CD",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "線がまがっていて、まっすぐではないので、曲線です。",
  "Čistenie zubov trvá asi 3 …": "歯みがきの時間はおよそ 3 …",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "絵にあるのは何ですか。<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"線または点\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "数をたしてはいけません。{@0} から {@1} がのこるには、いくつひいたかをさがしています。それはひき算でわかります。",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "数をたしてはいけません。{@0} にいくつたすと {@1} になるかをさがしています。それはひき算でわかります。",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "数をたしてはいけません。「いくつ多い」はくらべる問題なので、大きい数から小さい数をひきましょう。",
  "Čísla si sčítal. Znak · znamená násobiť.": "数をたしてしまいました。記号 · はかけ算です。",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "2 つの数は同じです：${@0} = {@1}$。",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "2 つの数はまったく同じで、どちらも大きくありません。",
  "Čísla {@0} vždy o {@1}: {@2}.": "数は {@1} ずつ{@0}います：{@2}。",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "{@0} は {@1} の九九には出てきません。{@2} と {@3} のあいだにあります。",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "{@0} を {@1} 回たします：${@2} \\cdot {@3} = {@4}$。",
  "čas": "時間",
  "čiara alebo bod": "線または点",
  "Štvorec má 4 strany, každá strana je úsečka.": "正方形には辺が 4 つあり、どの辺も線分です。",
  "Štvrť hodiny": "4 分の 1 時間",
  "štvrť hodiny": "4 分の 1 時間",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "「{@0} 少ない」は {@1} をひくという意味です：{@2} {@3}は{@5}を {@4} こ持っています。",
  "„O … menej“ znamená odčítať.": "「… 少ない」は、ひき算をするという意味です。",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕"
 }
});
