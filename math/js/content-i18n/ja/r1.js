/* 日本語: preklad js/rocniky/r1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ja/r1/ – needitovať ručne. */
CONTENT_I18N.add('ja', {
 "decimal": ".",
 "lessons": {
  "r1-cisla20": {
   "title": "20 までのかず",
   "summary": "0 から 20 までのかずを よむ・かく・くらべる。",
   "theory": [
    "<p>0 から 20 までのかずは、よむことも すうじで かくことも できます：0（ゼロ）、1（いち）、2（に）… 10（じゅう）… 20（にじゅう）。\n       11 から 19 までのかずは <strong>10 が 1 つ</strong>と、いくつかの <strong>1</strong> で できています：たとえば $14 = 10 + 4$。</p>",
    {
     "fig": "r1-rad20",
     "caption": "0 から 20 までの かずのならび。みぎに いくほど かずは おおきく なります。"
    },
    "<p><strong>くらべかた：</strong> きごう $&lt;$ は「より ちいさい」、きごう $&gt;$ は「より おおきい」、$=$ は「おなじ」という いみです。\n       きごうの ひらいている ほうは、いつも おおきい かずの ほうを むきます：$7 &lt; 12$、$15 &gt; 9$。</p>"
   ],
   "examples": [
    {
     "task": "13 と 8 を くらべましょう。",
     "steps": [
      "かずの ならびでは、13 は 8 より みぎに あります。",
      "だから $13 &gt; 8$ です。"
     ]
    },
    {
     "task": "17 は 10 が いくつと 1 が いくつですか。",
     "steps": [
      "$17 = 10 + 7$。",
      "<strong>10 が 1 つと 1 が 7 つ。</strong>"
     ]
    }
   ]
  },
  "r1-scitanie": {
   "title": "20 までの たしざんと ひきざん",
   "summary": "ふえる・へる、くりあがり と くりさがり。",
   "theory": [
    "<p><strong>たしざん</strong>は ふやす ことです：$5 + 3 = 8$。たす かずを <em>たされる数・たす数</em>、こたえを <em>和</em> と いいます。\n       たす じゅんばんを かえても こたえは おなじです：$3 + 5 = 5 + 3$。</p>",
    "<p><strong>ひきざん</strong>は へらす ことです：$8 - 3 = 5$。ひきざんは たしざんの はんたいです：$5 + 3 = 8$ なら、$8 - 3 = 5$ も $8 - 5 = 3$ も なりたちます。</p>",
    "<p><strong>くりあがり：</strong> $8 + 5$ では、まず 10 を つくり（$8 + 2 = 10$）、それから のこりを たします（$10 + 3 = 13$）。</p>",
    {
     "fig": "r1-desiatka",
     "caption": "10 の わくが 2 つ：あおが 8 こ、みどりが 5 こ。みどり 2 こで はじめの 10 が いっぱいになり、のこりの 3 こは 2 つめの わくに はいります：$8 + 5 = 13$。"
    }
   ],
   "examples": [
    {
     "task": "$8 + 5$ を けいさんしましょう。",
     "steps": [
      "10 を つくります：$8 + 2 = 10$。",
      "5 から 3 が のこります：$10 + 3 = 13$。",
      "<strong>こたえ：13</strong>"
     ]
    },
    {
     "task": "$14 - 6$ を けいさんしましょう。",
     "steps": [
      "まず 4 を ひいて 10 に します：$14 - 4 = 10$。",
      "6 の うち あと 2 を ひきます：$10 - 2 = 8$。",
      "<strong>こたえ：8</strong>"
     ]
    }
   ]
  },
  "r1-rozklad": {
   "title": "かずの ならびと かずの わけかた",
   "summary": "まえの かず・つぎの かず、かずを 2 つに わける。",
   "theory": [
    "<p><strong>かずの ならび</strong>は、かずを じゅんばんに ならべた ものです：0、1、2、3、… すぐ まえの かずは 1 ちいさく、\n       すぐ つぎの かずは 1 おおきいです。</p>",
    "<p><strong>かずを わける</strong>とは、2 つの ちいさい かずの たしざんで あらわす ことです。6 は たとえば\n       $1 + 5$、$2 + 4$、$3 + 3$ に わけられます。</p>",
    {
     "fig": "r1-domcek",
     "caption": "6 の わけかたの おうち：どの かいにも、あわせて 6 に なる かずが 2 つ あります。"
    }
   ],
   "examples": [
    {
     "task": "かずの ならびで 15 の つぎは なんですか。",
     "steps": [
      "つぎの かずは いつも 1 おおきい かずです。",
      "$15 + 1 = 16$。",
      "<strong>こたえ：16</strong>"
     ]
    },
    {
     "task": "□に はいる かずを かきましょう：$9 = 4 + \\square$。",
     "steps": [
      "4 から 9 まで いくつ たりないかを かんがえます。",
      "$9 - 4 = 5$。",
      "<strong>$9 = 4 + 5$</strong>"
     ]
    }
   ]
  },
  "r1-slovne": {
   "title": "かんたんな ぶんしょうもんだい",
   "summary": "おはなしを しきに して、こたえを かく。",
   "theory": [
    "<p>ぶんしょうもんだいは じゅんばんに すすめます：</p>\n       <ol><li>もんだいを よむ、</li><li>わかっている ことと もとめる ことを たしかめる、</li><li>しきを かく、</li>\n       <li>けいさんする、</li><li>こたえを ぶんで かく。</li></ol>",
    "<p><em>ふえた、もらった、あわせて、… おおい</em> などの ことばは、たいてい <strong>たしざん</strong>です。\n       <em>たべた、あげた、のこりは、いくつ おおい</em> などの ことばは、たいてい <strong>ひきざん</strong>です。</p>"
   ],
   "examples": [
    {
     "task": "さくらさんは あめを 7 こ もっていて、5 こ もらいました。あめは いま なんこ ありますか。",
     "steps": [
      "わかっている こと：7 こ もっていて、5 こ もらった。もとめる こと：あわせて なんこ。",
      "しき：$7 + 5 = 12$。",
      "<strong>こたえ：さくらさんの あめは 12 こです。</strong>"
     ]
    },
    {
     "task": "ゆうとさんは ビーだまを 9 こ、はるとさんは 4 こ もっています。ゆうとさんの ほうが なんこ おおいですか。",
     "steps": [
      "くらべるので、おおきい かずから ちいさい かずを ひきます。",
      "しき：$9 - 4 = 5$。",
      "<strong>こたえ：ゆうとさんの ほうが 5 こ おおいです。</strong>"
     ]
    }
   ]
  },
  "r1-utvary": {
   "title": "ひらたい かたちと はこの かたち",
   "summary": "まる、さんかく、ましかく、ながしかく と みのまわりの かたち。",
   "theory": [
    "<p><strong>ひらたい かたち</strong>は かみに かけます：<strong>まる（円）</strong>、<strong>さんかく（三角形）</strong>\n       （へんが 3 つ、かどが 3 つ）、<strong>ましかく（正方形）</strong>（おなじ ながさの へんが 4 つ）、<strong>ながしかく（長方形）</strong>（へんが 4 つ、むかいあう へんは おなじ ながさ）。</p>",
    {
     "fig": "r1-rovinne",
     "caption": "ひらたい かたち。"
    },
    "<p><strong>はこの かたち（立体）</strong>は てで もてます：<strong>立方体</strong>（さいころ）、<strong>直方体</strong>（はこ）、\n       <strong>球</strong>（ボール）、<strong>円柱</strong>（かんづめ）、<strong>円錐</strong>（アイスクリームの コーン）。</p>",
    {
     "fig": "r1-telesa",
     "caption": "はこの かたち。てんせんは うしろに ある へんを あらわします。"
    }
   ],
   "examples": [
    {
     "task": "さんかくと ましかくには、かどが いくつ ありますか。",
     "steps": [
      "かどは かたちの とがった ところです。",
      "さんかくは かどが 3 つ、ましかくは かどが 4 つ です。"
     ]
    },
    {
     "task": "ボールは どんな かたちに にていますか。",
     "steps": [
      "ボールは どこから みても まるいです。",
      "<strong>ボールは 球の かたちです。</strong>"
     ]
    }
   ]
  },
  "r1-meranie": {
   "title": "いちの あらわしかたと ながさ",
   "summary": "ひだり・みぎ・あいだ；ながさを くらべる・はかる。",
   "theory": [
    "<p><strong>いちの ことば：</strong> ひだり – みぎ、うえ – した、まえ – うしろ、となり、あいだ などを つかいます。\n       🐶 🐱 🐰 の ならびでは、ねこは いぬと うさぎの <em>あいだ</em> に いて、いぬは ねこの <em>ひだり</em> に います。</p>",
    "<p><strong>ながさを はかる：</strong> ながさは あしの ほすう、てのひら、つみきで はかれます。もっと せいかくには ものさしで\n       センチメートル（cm）で はかります。くらべる ときは ながい – みじかい、たかい – ひくい と いいます。</p>",
    {
     "fig": "r1-meranie",
     "caption": "えんぴつは つみき 7 こぶん、けしゴムは 3 こぶん。えんぴつの ほうが つみき 4 こぶん ながいです。"
    }
   ],
   "examples": [
    {
     "task": "🍎 🍐 🍌 🍇 の ならびで、なしの すぐ みぎに ある くだものは なんですか。",
     "steps": [
      "なし 🍐 は ひだりから 2 ばんめです。",
      "その すぐ みぎは バナナ 🍌 です。"
     ]
    },
    {
     "task": "リボンが 2 ほん あります。1 ぽんめは 9 cm、2 ほんめは 5 cm です。1 ぽんめの ほうが なん cm ながいですか。",
     "steps": [
      "くらべるので ひきざんを します：$9 - 5 = 4$。",
      "<strong>1 ぽんめの リボンの ほうが 4 cm ながいです。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.": "${@0} - {@1} = {@2}$ なので、${@3} = {@4} + {@5}$ です。",
  "${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.": "${@0} - {@1} = {@2}$。あかい リボンの ほうが {@3} cm ながいです。",
  "${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.": "${@0} = {@1} + {@2}$ なので、10 が {@3} つと 1 が {@5} つです。",
  "Adam": "ゆうとさん",
  "Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.": "10 を こえる ときは、まず 10 を つくって、それから のこりを たしましょう。",
  "Ako sa volá {@0}?": "{@0}の なまえは なんですか。",
  "Budeš sčítať (+), alebo odčítať (−)?": "たしざん (+) を しますか、それとも ひきざん (−) を しますか。",
  "Chýbajúce číslo zistíš odčítaním.": "たりない かずは ひきざんで わかります。",
  "Desiatkové rámčeky: 8 plus 5": "10 の わく：8 たす 5",
  "Domček rozkladu čísla 6": "6 の わけかたの おうち",
  "Doplnil si do desiatky, ale zabudol si pridať zvyšok: ešte $+ {@0}$.": "10 は つくれましたが、のこりを たすのを わすれました。あと $+ {@0}$ です。",
  "Doplň chýbajúce číslo: ${@0} + \\square = {@1}$": "□に はいる かずを かきましょう：${@0} + \\square = {@1}$",
  "Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.": "10 を つくりましょう：${@0} + {@1} = 10$、それから $10 + {@2} = {@3}$。",
  "Doplň správny znak: ${@0} \\;\\square\\; {@1}$": "ただしい きごうを いれましょう：${@0} \\;\\square\\; {@1}$",
  "Doplň číslo, ktoré chýba v číselnom rade: {@0}": "かずの ならびで ぬけている かずを かきましょう：{@0}",
  "Dĺžky stúh nesčítavaj. Pýtame sa, o koľko je červená stuha dlhšia – odčítaj.": "リボンの ながさを たしては いけません。あかい リボンが どれだけ ながいかを きいているので、ひきざんを しましょう。",
  "Ema": "さくらさん",
  "Hneď pred": "すぐ まえ",
  "Hneď vpravo od {@0} stojí {@1}.": "{@0}の すぐ みぎに いるのは {@1}です。",
  "Hneď vľavo od {@0} stojí {@1}.": "{@0}の すぐ ひだりに いるのは {@1}です。",
  "Hneď za": "すぐ つぎ",
  "Hľadaj číslo, ktoré je o 1 väčšie ako prvé.": "はじめの かずより 1 おおきい かずを さがしましょう。",
  "Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.": "{@0} から {@1} まで あと いくつかを かんがえます：${@2} - {@3} = {@4}$。",
  "Jano": "はるとさん",
  "Keď niečo dáš preč, zostane toho menej. Tu treba odčítať, nie sčítať.": "なにかを あげると、すくなく なります。ここは たしざんでは なく、ひきざんです。",
  "Keď niečo pribudne, je toho viac. Tu treba sčítať, nie odčítať.": "なにかが ふえると、おおく なります。ここは ひきざんでは なく、たしざんです。",
  "Keď niečo pribudne, sčítavame.": "ふえる ときは、たしざんを します。",
  "Keď niečo ubudne, odčítavame.": "へる ときは、ひきざんを します。",
  "Kocka má 6 stien a každá stena je štvorec.": "立方体には めんが 6 つ あり、どの めんも ましかくです。",
  "Kocka má 8 vrcholov: 4 hore a 4 dole.": "立方体には かどが 8 つ あります：うえに 4 つ、したに 4 つ。",
  "Kocka má všetky steny rovnaké štvorce. Toto teleso je širšie, ako je vysoké.": "立方体は どの めんも おなじ ましかくです。この かたちは たかさより よこの ほうが ながいです。",
  "Kocky z oboch pásov nesčítavaj. Zisti, o koľko kociek má modrý pás viac – odčítaj.": "2 ほんの つみきの れつを たしては いけません。あおい れつの ほうが つみきが いくつ おおいかを しらべるので、ひきざんを しましょう。",
  "Koľko chýba od {@0} do {@1}?": "{@0} から {@1} まで あと いくつですか。",
  "Koľko chýba čísla {@0} do 10?": "{@0} は あと いくつで 10 に なりますか。",
  "Koľko je $10 + {@0}$?": "$10 + {@0}$ は いくつですか。",
  "Koľko je $10 - {@0}$?": "$10 - {@0}$ は いくつですか。",
  "Koľko jednotiek má {@0} navyše oproti 10?": "{@0} は 10 より 1 が いくつ おおいですか。",
  "Koľko kociek má modrý pás?": "あおい れつには つみきが いくつ ありますか。",
  "Koľko kociek má zelený pás?": "みどりの れつには つみきが いくつ ありますか。",
  "Koľko musíš ubrať z čísla {@0}, aby si sa dostal na 10?": "{@0} から いくつ とると 10 に なりますか。",
  "Koľko stien má kocka?": "立方体には めんが いくつ ありますか。",
  "Koľko strán má trojuholník?": "さんかくには へんが いくつ ありますか。",
  "Koľko strán má štvorec?": "ましかくには へんが いくつ ありますか。",
  "Koľko vrcholov má kocka?": "立方体には かどが いくつ ありますか。",
  "Koľko vrcholov má kruh?": "まるには かどが いくつ ありますか。",
  "Koľko vrcholov má obdĺžnik?": "ながしかくには かどが いくつ ありますか。",
  "Koľko vrcholov má trojuholník?": "さんかくには かどが いくつ ありますか。",
  "Koľko {@0} má číslo {@1}?": "{@1} の {@0}の すうじは なんですか。",
  "Kruh nemá žiadne vrcholy, jeho okraj je oblý.": "まるには かどが ありません。まわりは まるく なっています。",
  "Ktoré číslo je o 1 {@0} ako {@1}?": "{@1} より 1 {@0} かずは いくつですか。",
  "Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?": "かずの ならびで {@0} と {@1} の あいだに ある かずは いくつですか。",
  "Kužeľ má hore špičku. Toto teleso má hore aj dole kruh.": "円錐は うえが とがっています。この かたちは うえにも したにも まるが あります。",
  "Kváder vyzerá ako krabica, jeho steny nie sú všetky rovnaké. Tu sú všetky steny rovnaké štvorce.": "直方体は はこのような かたちで、めんが ぜんぶ おなじでは ありません。ここでは どの めんも おなじ ましかくです。",
  "Lea": "ゆいさん",
  "Medzi {@0} a {@1} stojí {@2}.": "{@0}と {@1}の あいだに いるのは {@2}です。",
  "Meranie kockami": "つみきで はかる",
  "Miro": "そうたさん",
  "Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.": "あおい れつは {@0} {@1}、みどりは {@2} こです。${@3} - {@4} = {@5}$。",
  "Máš odčítať, nie sčítať: znamienko $-$ znamená ubrať.": "ひきざんを する ところで、たしざんを しています。きごう $-$ は「とる」という いみです。",
  "Máš sčítať, nie odčítať: znamienko $+$ znamená pridať.": "たしざんを する ところで、ひきざんを しています。きごう $+$ は「ふやす」という いみです。",
  "Na obrázku je {@0}.": "えは {@0}です。",
  "Na obrázku vidno len 3 steny. Ďalšie 3 steny sú schované vzadu, vľavo a dole.": "えで みえる めんは 3 つだけです。のこりの 3 つの めんは、うしろと ひだりと したに かくれています。",
  "Na číselnom rade sa posuň o jedno miesto doprava.": "かずの ならびで 1 つ みぎへ すすみましょう。",
  "Na číselnom rade sa posuň o jedno miesto doľava.": "かずの ならびで 1 つ ひだりへ すすみましょう。",
  "Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.": "まず 10 まで ひきます：${@0} - {@1} = 10$、それから $10 - {@2} = {@3}$。",
  "Nina": "あおいさん",
  "O koľko je modrý pás dlhší? Vypočítaj ${@0} - {@1}$.": "あおい れつは どれだけ ながいですか。${@0} - {@1}$ を けいさんしましょう。",
  "O koľko kociek je modrý pás dlhší ako zelený? {@0}": "あおい れつは みどりの れつより つみき なんこぶん ながいですか。{@0}",
  "Obdĺžnik má 4 vrcholy.": "ながしかくには かどが 4 つ あります。",
  "Obdĺžnik má dve strany dlhšie a dve kratšie. Sú tu všetky strany rovnako dlhé?": "ながしかくには ながい へんが 2 つと みじかい へんが 2 つ あります。ここでは どの へんも おなじ ながさですか。",
  "Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?": "ひきざんは たしざんの はんたいです。{@0} に いくつ たすと {@1} に なりますか。",
  "Otázka „o koľko viac“ sa rieši odčítaním.": "「いくつ おおい」の もんだいは ひきざんで とけます。",
  "Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.": "くらべます：${@0} - {@1} = {@2}$。{@3}の ほうが {@5}が {@4} こ おおいです。",
  "Posunul si sa na opačnú stranu. Menšie čísla sú na číselnom rade vľavo.": "はんたいの ほうへ すすみました。ちいさい かずは かずの ならびの ひだりに あります。",
  "Posunul si sa na opačnú stranu. Väčšie čísla sú na číselnom rade vpravo.": "はんたいの ほうへ すすみました。おおきい かずは かずの ならびの みぎに あります。",
  "Pozri sa znova: obe čísla sú rovnaké, ani jedno nie je väčšie.": "もう いちど みてみましょう。2 つの かずは おなじで、どちらも おおきく ありません。",
  "Počítaj od {@0} po 10.": "{@0} から 10 まで かぞえましょう。",
  "Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.": "ボール、かんづめ、はこ、さいころ、アイスクリームの コーンを おもいうかべましょう。",
  "Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.": "ふえるので、たしざんを します：${@0} + {@1} = {@2}$。{@3}の {@5}は {@4} こに なりました。",
  "Priestorové útvary": "はこの かたち",
  "Rovinné útvary": "ひらたい かたち",
  "Rozdiel dĺžok zistíš odčítaním.": "ながさの ちがいは ひきざんで わかります。",
  "Rozlož číslo {@0}: ${@1} = {@2} + \\square$": "{@0} を わけましょう：${@1} = {@2} + \\square$",
  "Sofia": "めいさん",
  "Spočítaj kocky v oboch pásoch a odčítaj.": "りょうほうの れつの つみきを かぞえて、ひきざんを しましょう。",
  "Spočítaj strany a vrcholy útvaru.": "かたちの へんと かどを かぞえましょう。",
  "Spočítal si len vrcholy na jednej stene. Kocka má vrcholy hore aj dole.": "1 つの めんの かどしか かぞえていません。立方体には うえにも したにも かどが あります。",
  "To je dĺžka celého modrého pásu. Odčítaj od nej, koľko kociek má zelený pás.": "それは あおい れつ ぜんぶの ながさです。そこから みどりの れつの つみきの かずを ひきましょう。",
  "To je počet desiatok. Jednotky sú číslica vpravo.": "それは 10 の かずです。1 の かずは みぎの すうじです。",
  "To je počet jednotiek. Desiatky sú číslica vľavo.": "それは 1 の かずです。10 の かずは ひだりの すうじです。",
  "Tomáš": "けんたさん",
  "Toto je zvieratko, od ktorého hľadáme. Hľadáme jeho suseda.": "これは さがす ときの もとに なる どうぶつです。その となりを さがしましょう。",
  "Toto zvieratko stojí vpravo. Vľavo je tá strana, kde rad začína.": "この どうぶつは みぎに います。ひだりは ならびが はじまる ほうです。",
  "Toto zvieratko stojí vľavo. Vpravo je tá strana, kde rad končí.": "この どうぶつは ひだりに います。みぎは ならびが おわる ほうです。",
  "Trojuholník má 3 strany.": "さんかくには へんが 3 つ あります。",
  "Trojuholník má 3 vrcholy a 3 strany.": "さんかくには かどが 3 つ、へんが 3 つ あります。",
  "Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.": "へるので、ひきざんを します：${@0} - {@1} = {@2}$。{@3} {@5}が {@4} こ のこりました。",
  "Valec má hore aj dole kruh. Toto teleso má hore špičku.": "円柱は うえにも したにも まるが あります。この かたちは うえが とがっています。",
  "Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.": "かどは かたちの とがった ところで、へんは 2 つの かどを むすぶ せんです。",
  "Vypočítaj ${@0} + {@1}$.": "${@0} + {@1}$ を けいさんしましょう。",
  "Vypočítaj ${@0} - {@1}$.": "${@0} - {@1}$ を けいさんしましょう。",
  "Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.": "おおきい かずは かずの ならびで より みぎに あります。きごうの ひらいている ほうが おおきい かずの ほうを むきます。",
  "Vľavo je začiatok radu, vpravo jeho koniec.": "ひだりが ならびの はじめで、みぎが おわりです。",
  "Z čísla {@0} sme použili {@1}. Koľko z neho ešte zostáva pridať?": "{@0} の うち {@1} を つかいました。あと いくつ たせば よいですか。",
  "Z čísla {@0} sme ubrali {@1}. Koľko ešte treba ubrať?": "{@0} から {@1} を ひきました。あと いくつ ひけば よいですか。",
  "Za číslom {@0} nasleduje {@1} a za ním {@2}.": "{@0} の つぎは {@1}、その つぎは {@2} です。",
  "Zisti, či čísla rastú alebo klesajú, a o koľko.": "かずが ふえているか へっているか、いくつずつかを しらべましょう。",
  "Znak $=$ patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "きごう $=$ は おなじ かずの あいだに だけ はいります。この 2 つの かずは ちがいます。",
  "Znak je otočený naopak. Otvorená strana znaku má smerovať k väčšiemu číslu.": "きごうの むきが はんたいです。きごうの ひらいている ほうが おおきい かずの ほうを むくように しましょう。",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?": "どうぶつが 1 れつに ならんでいます：{@0} {@1}の すぐ みぎに いるのは だれですか。",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?": "どうぶつが 1 れつに ならんでいます：{@0} {@1}の すぐ ひだりに いるのは だれですか。",
  "Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?": "どうぶつが 1 れつに ならんでいます：{@0} {@1}と {@2}の あいだに いるのは だれですか。",
  "ceruzka": "えんぴつ",
  "cukrík": "あめ",
  "cukríkov": "あめ",
  "cukríky": "あめ",
  "dal": "あげました",
  "dala": "あげました",
  "desiatka": "十の位",
  "desiatky": "十の位",
  "desiatok": "十の位",
  "dostal": "もらいました",
  "dostala": "もらいました",
  "dva pásy z kociek": "つみきで できた 2 ほんの れつ",
  "guličiek": "ビーだま",
  "guličku": "ビーだま",
  "guličky": "ビーだま",
  "guma": "けしゴム",
  "guľa": "球",
  "jablko": "りんご",
  "jablká": "りんご",
  "jabĺk": "りんご",
  "jednotiek": "一の位",
  "jednotka": "一の位",
  "jednotky": "一の位",
  "jej": "てもとに",
  "klesajú": "へって",
  "kociek": "こ",
  "kocka": "立方体",
  "kocky": "こ",
  "kužeľ": "円錐",
  "kváder": "直方体",
  "líška": "きつね",
  "líškou": "きつね",
  "líšky": "きつね",
  "mal": "もって いました",
  "mala": "もって いました",
  "mačka": "ねこ",
  "mačkou": "ねこ",
  "mačky": "ねこ",
  "medveď": "くま",
  "medveďa": "くま",
  "medveďom": "くま",
  "menšie": "ちいさい",
  "modrý": "あお",
  "mu": "てもとに",
  "myš": "ねずみ",
  "myši": "ねずみ",
  "myšou": "ねずみ",
  "nálepiek": "シール",
  "nálepku": "シール",
  "nálepky": "シール",
  "obrázok útvaru": "かたちの え",
  "pasteliek": "クレヨン",
  "pastelku": "クレヨン",
  "pastelky": "クレヨン",
  "pes": "いぬ",
  "psa": "いぬ",
  "psom": "いぬ",
  "rastú": "ふえて",
  "tento útvar": "この かたち",
  "toto teleso": "この かたち",
  "valec": "円柱",
  "väčšie": "おおきい",
  "zajac": "うさぎ",
  "zajaca": "うさぎ",
  "zajacom": "うさぎ",
  "zelený": "みどり",
  "{@0} je len to, o koľko má {@1} viac. Pripočítaj to k tomu, čo má {@2}.": "{@0} は、{@1}の ほうが おおい かずだけです。それを {@2}の かずに たしましょう。",
  "{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?": "{@0}は {@2}を {@1} こ、{@3}は {@5}を {@4} こ もっています。{@7}の ほうが {@6}を なんこ おおく もっていますか。",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?": "{@0}は {@2}を {@1} こ もっています。{@3}は {@5}を {@0}より {@4} こ おおく もっています。{@7}は {@6}を なんこ もっていますか。",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?": "{@0}は {@3}を {@2} こ {@1}。そして、さらに {@5} こ {@4}。{@6}は いま なんこ ありますか。",
  "{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?": "{@0}は {@3}を {@2} こ {@1}。ともだちに {@6}を {@5} こ {@4}。{@8} {@7}は なんこ のこっていますか。",
  "{@0} číslom {@1} je v číselnom rade číslo {@2}.": "かずの ならびで {@1} の {@0}の かずは {@2} です。",
  "Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?": "あかい リボンは {@0} cm、あおい リボンは {@1} cm です。あかい リボンの ほうが なん cm ながいですか。",
  "Číselný rad od 0 do 20": "0 から 20 までの かずの ならび",
  "Čísla nesčítavaj. Hľadáš, koľko chýba od {@0} do {@1}.": "かずを たしては いけません。{@0} から {@1} まで あと いくつかを さがしています。",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby si dostal {@1}.": "かずを たしては いけません。{@0} に いくつ たすと {@1} に なるかを さがしています。",
  "Čísla nesčítavaj. Pýtame sa, o koľko má jedno dieťa viac – odčítaj menšie číslo od väčšieho.": "かずを たしては いけません。ひとりが どれだけ おおいかを きいているので、おおきい かずから ちいさい かずを ひきましょう。",
  "Čísla sú rovnaké, preto ${@0} = {@1}$.": "2 つの かずは おなじなので、${@0} = {@1}$ です。",
  "Čísla {@0} vždy o 1: {@1}.": "かずは 1 ずつ {@0} います：{@1}。",
  "Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.": "かずを 10 と 1 に わけましょう。たとえば $14 = 10 + 4$ です。",
  "Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "{@0} は かずの ならびで より みぎに あるので、おおきい かずです。だから ${@1} {@2} {@3}$ です。",
  "Štvorec má 4 rovnako dlhé strany.": "ましかくには おなじ ながさの へんが 4 つ あります。",
  "Štvorec má všetky štyri strany rovnako dlhé. Tu sú dve strany dlhšie.": "ましかくは 4 つの へんが ぜんぶ おなじ ながさです。ここでは 2 つの へんが ながく なっています。",
  "štvorec": "正方形",
  "žaba": "かえる",
  "žabou": "かえる",
  "žaby": "かえる",
  "„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.": "「{@0} おおい」は {@1} を たすという いみです：${@2} + {@3} = {@4}$。{@5}は {@7}を {@6} こ もっています。",
  "„O {@0} viac“ znamená, že {@1} má viac ako {@2}. Treba pripočítať, nie odčítať.": "「{@0} おおい」は、{@1}の ほうが {@2}より おおく もっているという いみです。ひきざんでは なく、たしざんを しましょう。",
  "„O … viac“ znamená k číslu pripočítať.": "「… おおい」は、その かずを たすという いみです。"
 }
});
