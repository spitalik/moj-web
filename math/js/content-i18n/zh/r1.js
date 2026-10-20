/* 中文: preklad js/rocniky/r1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/zh/r1/ – needitovať ručne. */
CONTENT_I18N.add('zh', {
 "decimal": ".",
 "lessons": {
  "r1-cisla20": {
   "title": "20以内的数",
   "summary": "读、写和比较 0 到 20 的数。",
   "theory": [
    "<p>0 到 20 的数，我们会读，也会用数字写出来：0（零）、1（一）、2（二）……10（十）……20（二十）。\n       11 到 19 的数都由 <strong>1 个十</strong>和几个<strong>一</strong>组成：例如 $14 = 10 + 4$。</p>",
    {
     "fig": "r1-rad20",
     "caption": "0 到 20 的数列。越往右，数越大。"
    },
    "<p><strong>比较大小：</strong>符号 $&lt;$ 表示“小于”，符号 $&gt;$ 表示“大于”，$=$ 表示“等于”。\n       符号张开的一边总是朝向较大的数：$7 &lt; 12$，$15 &gt; 9$。</p>"
   ],
   "examples": [
    {
     "task": "比较 13 和 8 的大小。",
     "steps": [
      "在数列上，13 在 8 的右边。",
      "所以 $13 &gt; 8$。"
     ]
    },
    {
     "task": "17 里面有几个十和几个一？",
     "steps": [
      "$17 = 10 + 7$。",
      "<strong>1 个十和 7 个一。</strong>"
     ]
    }
   ]
  },
  "r1-scitanie": {
   "title": "20以内的加法和减法",
   "summary": "添上和去掉，进位加与退位减。",
   "theory": [
    "<p><strong>加法</strong>就是添上：$5 + 3 = 8$。相加的数叫作<em>加数</em>，结果叫作<em>和</em>。\n       加数交换位置，和不变：$3 + 5 = 5 + 3$。</p>",
    "<p><strong>减法</strong>就是去掉：$8 - 3 = 5$。减法是加法的逆运算：如果 $5 + 3 = 8$，那么 $8 - 3 = 5$，$8 - 5 = 3$。</p>",
    "<p><strong>凑十法：</strong>算 $8 + 5$ 时，先凑成十（$8 + 2 = 10$），再加上剩下的数（$10 + 3 = 13$）。</p>",
    {
     "fig": "r1-desiatka",
     "caption": "两个十格框：8 个蓝色和 5 个绿色。2 个绿色补满第一个十格，剩下 3 个在第二个十格里：$8 + 5 = 13$。"
    }
   ],
   "examples": [
    {
     "task": "计算 $8 + 5$。",
     "steps": [
      "先凑成十：$8 + 2 = 10$。",
      "5 还剩下 3：$10 + 3 = 13$。",
      "<strong>结果：13</strong>"
     ]
    },
    {
     "task": "计算 $14 - 6$。",
     "steps": [
      "先减去 4，得到十：$14 - 4 = 10$。",
      "6 还要再减 2：$10 - 2 = 8$。",
      "<strong>结果：8</strong>"
     ]
    }
   ]
  },
  "r1-rozklad": {
   "title": "数列与数的分解",
   "summary": "一个数的前一个数和后一个数，把一个数分成两部分。",
   "theory": [
    "<p><strong>数列</strong>就是把数按顺序排起来：0、1、2、3、……一个数前面紧挨着的数比它小 1，\n       后面紧挨着的数比它大 1。</p>",
    "<p><strong>数的分解</strong>就是把一个数写成两个较小的数的和。例如 6 可以分成\n       $1 + 5$、$2 + 4$ 或 $3 + 3$。</p>",
    {
     "fig": "r1-domcek",
     "caption": "6 的分解小房子：每一层的两个数合起来都是 6。"
    }
   ],
   "examples": [
    {
     "task": "在数列中，15 后面是哪个数？",
     "steps": [
      "一个数后面的数总是比它大 1。",
      "$15 + 1 = 16$。",
      "<strong>结果：16</strong>"
     ]
    },
    {
     "task": "填空：$9 = 4 + \\square$。",
     "steps": [
      "想一想，从 4 到 9 还差几。",
      "$9 - 4 = 5$。",
      "<strong>$9 = 4 + 5$</strong>"
     ]
    }
   ]
  },
  "r1-slovne": {
   "title": "简单的应用题",
   "summary": "怎样把故事变成算式，并写出答案。",
   "theory": [
    "<p>解应用题，我们一步一步来：</p>\n       <ol><li>读题，</li><li>找出已知什么、要求什么，</li><li>列出算式，</li>\n       <li>计算，</li><li>用完整的句子写出答案。</li></ol>",
    "<p><em>又添了、得到、一共、多……</em>这样的词通常表示<strong>加法</strong>。\n       <em>吃掉了、拿走了、还剩、多多少</em>这样的词通常表示<strong>减法</strong>。</p>"
   ],
   "examples": [
    {
     "task": "小芳有 7 颗糖，又得到了 5 颗。她现在有几颗糖？",
     "steps": [
      "已知：她有 7 颗糖，又得到 5 颗。求她一共有几颗。",
      "算式：$7 + 5 = 12$。",
      "<strong>答：小芳现在有 12 颗糖。</strong>"
     ]
    },
    {
     "task": "小明有 9 颗弹珠，小刚有 4 颗弹珠。小明比小刚多几颗弹珠？",
     "steps": [
      "这是比较，所以用大数减去小数。",
      "算式：$9 - 4 = 5$。",
      "<strong>答：小明比小刚多 5 颗弹珠。</strong>"
     ]
    }
   ]
  },
  "r1-utvary": {
   "title": "平面图形和立体图形",
   "summary": "圆、三角形、正方形、长方形以及我们身边的立体图形。",
   "theory": [
    "<p><strong>平面图形</strong>是平平的，可以画在纸上：<strong>圆</strong>、<strong>三角形</strong>\n       （3 条边，3 个顶点）、<strong>正方形</strong>（4 条边一样长）和<strong>长方形</strong>（4 条边，相对的边一样长）。</p>",
    {
     "fig": "r1-rovinne",
     "caption": "平面图形。"
    },
    "<p><strong>立体图形</strong>可以拿在手里：<strong>正方体</strong>（骰子）、<strong>长方体</strong>（盒子）、\n       <strong>球</strong>（皮球）、<strong>圆柱</strong>（易拉罐）和<strong>圆锥</strong>（冰淇淋蛋筒）。</p>",
    {
     "fig": "r1-telesa",
     "caption": "立体图形。虚线表示后面看不见的棱。"
    }
   ],
   "examples": [
    {
     "task": "三角形有几个顶点？正方形有几个？",
     "steps": [
      "顶点就是图形的角。",
      "三角形有 3 个顶点，正方形有 4 个顶点。"
     ]
    },
    {
     "task": "皮球像哪种立体图形？",
     "steps": [
      "皮球从各个方向看都是圆的。",
      "<strong>皮球是球形的。</strong>"
     ]
    }
   ]
  },
  "r1-meranie": {
   "title": "认识位置和测量",
   "summary": "左、右、中间；比较和测量长度。",
   "theory": [
    "<p><strong>认识位置：</strong>我们用左—右、上—下、前—后、旁边和中间这些词。\n       在 🐶 🐱 🐰 这一排里，小猫在小狗和小兔<em>中间</em>，小狗在小猫的<em>左边</em>。</p>",
    "<p><strong>测量长度：</strong>可以用步子、手掌或小方块来量长度。用尺子以厘米（cm）为单位量\n       会更准确。比较时，我们说长—短、高—矮。</p>",
    {
     "fig": "r1-meranie",
     "caption": "铅笔长 7 个小方块，橡皮长 3 个小方块。铅笔比橡皮长 4 个小方块。"
    }
   ],
   "examples": [
    {
     "task": "在 🍎 🍐 🍌 🍇 这一排里，紧挨着梨右边的是什么水果？",
     "steps": [
      "梨 🍐 是左边数起第二个。",
      "紧挨着它右边的是香蕉 🍌。"
     ]
    },
    {
     "task": "一条丝带长 9 cm，另一条长 5 cm。第一条丝带比第二条长多少？",
     "steps": [
      "这是比较，所以用减法：$9 - 5 = 4$。",
      "<strong>第一条丝带比第二条长 4 cm。</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.": "${@0} - {@1} = {@2}$，所以 ${@3} = {@4} + {@5}$。",
  "${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.": "${@0} - {@1} = {@2}$，红丝带比蓝丝带长 {@3} cm。",
  "${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.": "${@0} = {@1} + {@2}$，所以是 {@3} 个{@4}和 {@5} 个{@6}。",
  "Adam": "小明",
  "Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.": "如果要越过 10，先凑成 10，再加上剩下的数。",
  "Ako sa volá {@0}?": "{@0}叫什么？",
  "Budeš sčítať (+), alebo odčítať (−)?": "你要做加法 (+)，还是减法 (−)？",
  "Chýbajúce číslo zistíš odčítaním.": "缺少的数可以用减法求出来。",
  "Desiatkové rámčeky: 8 plus 5": "十格框：8 加 5",
  "Domček rozkladu čísla 6": "数 6 的分解小房子",
  "Doplnil si do desiatky, ale zabudol si pridať zvyšok: ešte $+ {@0}$.": "你凑成了 10，可是忘了加上剩下的数：还要 $+ {@0}$。",
  "Doplň chýbajúce číslo: ${@0} + \\square = {@1}$": "填出缺少的数：${@0} + \\square = {@1}$",
  "Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.": "先凑成 10：${@0} + {@1} = 10$，再算 $10 + {@2} = {@3}$。",
  "Doplň správny znak: ${@0} \\;\\square\\; {@1}$": "填上正确的符号：${@0} \\;\\square\\; {@1}$",
  "Doplň číslo, ktoré chýba v číselnom rade: {@0}": "填出数列中缺少的数：{@0}",
  "Dĺžky stúh nesčítavaj. Pýtame sa, o koľko je červená stuha dlhšia – odčítaj.": "不要把两条丝带的长度相加。问的是红丝带长多少——要用减法。",
  "Ema": "小红",
  "Hneď pred": "前面紧挨着",
  "Hneď vpravo od {@0} stojí {@1}.": "紧挨在{@0}右边的是{@1}。",
  "Hneď vľavo od {@0} stojí {@1}.": "紧挨在{@0}左边的是{@1}。",
  "Hneď za": "后面紧挨着",
  "Hľadaj číslo, ktoré je o 1 väčšie ako prvé.": "找一个比第一个数大 1 的数。",
  "Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.": "我们要找从 {@0} 到 {@1} 还差多少：${@2} - {@3} = {@4}$。",
  "Jano": "小刚",
  "Keď niečo dáš preč, zostane toho menej. Tu treba odčítať, nie sčítať.": "拿走一些东西，东西就变少了。这里要用减法，不是加法。",
  "Keď niečo pribudne, je toho viac. Tu treba sčítať, nie odčítať.": "多了一些东西，东西就变多了。这里要用加法，不是减法。",
  "Keď niečo pribudne, sčítavame.": "东西变多时，我们用加法。",
  "Keď niečo ubudne, odčítavame.": "东西变少时，我们用减法。",
  "Kocka má 6 stien a každá stena je štvorec.": "正方体有 6 个面，每个面都是正方形。",
  "Kocka má 8 vrcholov: 4 hore a 4 dole.": "正方体有 8 个顶点：上面 4 个，下面 4 个。",
  "Kocka má všetky steny rovnaké štvorce. Toto teleso je širšie, ako je vysoké.": "正方体的所有面都是一样大的正方形。这个立体图形的宽比高长。",
  "Kocky z oboch pásov nesčítavaj. Zisti, o koľko kociek má modrý pás viac – odčítaj.": "不要把两条积木条的积木数相加。看看蓝色的条多几块积木——要用减法。",
  "Koľko chýba od {@0} do {@1}?": "从 {@0} 到 {@1} 还差多少？",
  "Koľko chýba čísla {@0} do 10?": "{@0} 还差多少到 10？",
  "Koľko je $10 + {@0}$?": "$10 + {@0}$ 等于多少？",
  "Koľko je $10 - {@0}$?": "$10 - {@0}$ 等于多少？",
  "Koľko jednotiek má {@0} navyše oproti 10?": "{@0} 比 10 多几个一？",
  "Koľko kociek má modrý pás?": "蓝色的条有几块积木？",
  "Koľko kociek má zelený pás?": "绿色的条有几块积木？",
  "Koľko musíš ubrať z čísla {@0}, aby si sa dostal na 10?": "从 {@0} 里要减去多少，才能得到 10？",
  "Koľko stien má kocka?": "正方体有几个面？",
  "Koľko strán má trojuholník?": "三角形有几条边？",
  "Koľko strán má štvorec?": "正方形有几条边？",
  "Koľko vrcholov má kocka?": "正方体有几个顶点？",
  "Koľko vrcholov má kruh?": "圆有几个顶点？",
  "Koľko vrcholov má obdĺžnik?": "长方形有几个顶点？",
  "Koľko vrcholov má trojuholník?": "三角形有几个顶点？",
  "Koľko {@0} má číslo {@1}?": "数 {@1} 有几个{@0}？",
  "Kruh nemá žiadne vrcholy, jeho okraj je oblý.": "圆没有顶点，它的边是圆圆的。",
  "Ktoré číslo je o 1 {@0} ako {@1}?": "哪个数比 {@1} {@0} 1？",
  "Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?": "在数列中，哪个数在 {@0} 和 {@1} 之间？",
  "Kužeľ má hore špičku. Toto teleso má hore aj dole kruh.": "圆锥上面有个尖。这个立体图形上面和下面都是圆。",
  "Kváder vyzerá ako krabica, jeho steny nie sú všetky rovnaké. Tu sú všetky steny rovnaké štvorce.": "长方体像一个盒子，它的面不全都一样。这里所有的面都是一样大的正方形。",
  "Lea": "小丽",
  "Medzi {@0} a {@1} stojí {@2}.": "站在{@0}和{@1}中间的是{@2}。",
  "Meranie kockami": "用积木量长度",
  "Miro": "小军",
  "Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.": "蓝色的条有 {@0} {@1}，绿色的条有 {@2} 块。${@3} - {@4} = {@5}$。",
  "Máš odčítať, nie sčítať: znamienko $-$ znamená ubrať.": "这里要用减法，不是加法：符号 $-$ 表示拿走。",
  "Máš sčítať, nie odčítať: znamienko $+$ znamená pridať.": "这里要用加法，不是减法：符号 $+$ 表示添上。",
  "Na obrázku je {@0}.": "图上是{@0}。",
  "Na obrázku vidno len 3 steny. Ďalšie 3 steny sú schované vzadu, vľavo a dole.": "图上只能看到 3 个面。另外 3 个面藏在后面、左面和下面。",
  "Na číselnom rade sa posuň o jedno miesto doprava.": "在数列上往右移一格。",
  "Na číselnom rade sa posuň o jedno miesto doľava.": "在数列上往左移一格。",
  "Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.": "先减到 10：${@0} - {@1} = 10$，再算 $10 - {@2} = {@3}$。",
  "Nina": "小芳",
  "O koľko je modrý pás dlhší? Vypočítaj ${@0} - {@1}$.": "蓝色的条长多少？算一算 ${@0} - {@1}$。",
  "O koľko kociek je modrý pás dlhší ako zelený? {@0}": "蓝色的条比绿色的条长几块积木？{@0}",
  "Obdĺžnik má 4 vrcholy.": "长方形有 4 个顶点。",
  "Obdĺžnik má dve strany dlhšie a dve kratšie. Sú tu všetky strany rovnako dlhé?": "长方形有两条边长，两条边短。这里所有的边都一样长吗？",
  "Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?": "减法是加法的反面：{@0} 加上几才能得到 {@1}？",
  "Otázka „o koľko viac“ sa rieši odčítaním.": "“多多少”的问题要用减法来解。",
  "Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.": "比一比：${@0} - {@1} = {@2}$。{@3}多 {@4} {@5}。",
  "Posunul si sa na opačnú stranu. Menšie čísla sú na číselnom rade vľavo.": "你往反方向移了。在数列上，小的数在左边。",
  "Posunul si sa na opačnú stranu. Väčšie čísla sú na číselnom rade vpravo.": "你往反方向移了。在数列上，大的数在右边。",
  "Pozri sa znova: obe čísla sú rovnaké, ani jedno nie je väčšie.": "再看一遍：两个数一样大，哪个也不比另一个大。",
  "Počítaj od {@0} po 10.": "从 {@0} 数到 10。",
  "Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.": "想一想皮球、罐头、盒子、骰子或者冰淇淋蛋筒。",
  "Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.": "东西变多了，所以用加法：${@0} + {@1} = {@2}$。{@3}现在有 {@4} {@5}。",
  "Priestorové útvary": "立体图形",
  "Rovinné útvary": "平面图形",
  "Rozdiel dĺžok zistíš odčítaním.": "长度相差多少，要用减法来求。",
  "Rozlož číslo {@0}: ${@1} = {@2} + \\square$": "分解数 {@0}：${@1} = {@2} + \\square$",
  "Sofia": "小雪",
  "Spočítaj kocky v oboch pásoch a odčítaj.": "数一数两条积木条上的积木，再相减。",
  "Spočítaj strany a vrcholy útvaru.": "数一数图形的边和顶点。",
  "Spočítal si len vrcholy na jednej stene. Kocka má vrcholy hore aj dole.": "你只数了一个面上的顶点。正方体上面和下面都有顶点。",
  "To je dĺžka celého modrého pásu. Odčítaj od nej, koľko kociek má zelený pás.": "这是整条蓝色积木条的长度。还要减去绿色的条上积木的块数。",
  "To je počet desiatok. Jednotky sú číslica vpravo.": "这是十位上的数。个位是右边的数字。",
  "To je počet jednotiek. Desiatky sú číslica vľavo.": "这是个位上的数。十位是左边的数字。",
  "Tomáš": "小强",
  "Toto je zvieratko, od ktorého hľadáme. Hľadáme jeho suseda.": "这只小动物是我们找的起点。我们要找的是它旁边的那只。",
  "Toto zvieratko stojí vpravo. Vľavo je tá strana, kde rad začína.": "这只小动物站在右边。左边是队伍开始的那一边。",
  "Toto zvieratko stojí vľavo. Vpravo je tá strana, kde rad končí.": "这只小动物站在左边。右边是队伍结束的那一边。",
  "Trojuholník má 3 strany.": "三角形有 3 条边。",
  "Trojuholník má 3 vrcholy a 3 strany.": "三角形有 3 个顶点和 3 条边。",
  "Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.": "东西变少了，所以用减法：${@0} - {@1} = {@2}$。{@3}还剩 {@4} {@5}。",
  "Valec má hore aj dole kruh. Toto teleso má hore špičku.": "圆柱上面和下面都是圆。这个立体图形上面有个尖。",
  "Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.": "顶点是图形的角，边是连接两个顶点的线。",
  "Vypočítaj ${@0} + {@1}$.": "计算 ${@0} + {@1}$。",
  "Vypočítaj ${@0} - {@1}$.": "计算 ${@0} - {@1}$。",
  "Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.": "在数列上，大的数在更右边。符号张开的一边朝向大的数。",
  "Vľavo je začiatok radu, vpravo jeho koniec.": "左边是队伍的开头，右边是结尾。",
  "Z čísla {@0} sme použili {@1}. Koľko z neho ešte zostáva pridať?": "数 {@0} 我们已经用了 {@1}。还要再加多少？",
  "Z čísla {@0} sme ubrali {@1}. Koľko ešte treba ubrať?": "我们从 {@0} 里减去了 {@1}。还要再减多少？",
  "Za číslom {@0} nasleduje {@1} a za ním {@2}.": "{@0} 后面是 {@1}，再后面是 {@2}。",
  "Zisti, či čísla rastú alebo klesajú, a o koľko.": "看看这些数是在变大还是变小，每次变多少。",
  "Znak $=$ patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "符号 $=$ 只能放在两个相等的数之间。这两个数不相等。",
  "Znak je otočený naopak. Otvorená strana znaku má smerovať k väčšiemu číslu.": "符号方向反了。符号张开的一边要朝向大的数。",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?": "小动物们排成一队：{@0} 紧挨在{@1}右边的是谁？",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?": "小动物们排成一队：{@0} 紧挨在{@1}左边的是谁？",
  "Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?": "小动物们排成一队：{@0} 站在{@1}和{@2}中间的是谁？",
  "ceruzka": "铅笔",
  "cukrík": "颗糖",
  "cukríkov": "颗糖",
  "cukríky": "颗糖",
  "dal": "送给了",
  "dala": "送给了",
  "desiatka": "十",
  "desiatky": "十",
  "desiatok": "十",
  "dostal": "得到了",
  "dostala": "得到了",
  "dva pásy z kociek": "两条积木条",
  "guličiek": "颗弹珠",
  "guličku": "颗弹珠",
  "guličky": "颗弹珠",
  "guma": "橡皮",
  "guľa": "球",
  "jablko": "个苹果",
  "jablká": "个苹果",
  "jabĺk": "个苹果",
  "jednotiek": "一",
  "jednotka": "一",
  "jednotky": "一",
  "jej": "她",
  "klesajú": "减少",
  "kociek": "块",
  "kocka": "正方体",
  "kocky": "块",
  "kužeľ": "圆锥",
  "kváder": "长方体",
  "líška": "狐狸",
  "líškou": "狐狸",
  "líšky": "狐狸",
  "mal": "原来有",
  "mala": "原来有",
  "mačka": "猫",
  "mačkou": "猫",
  "mačky": "猫",
  "medveď": "熊",
  "medveďa": "熊",
  "medveďom": "熊",
  "menšie": "小",
  "modrý": "蓝色",
  "mu": "他",
  "myš": "老鼠",
  "myši": "老鼠",
  "myšou": "老鼠",
  "nálepiek": "张贴纸",
  "nálepku": "张贴纸",
  "nálepky": "张贴纸",
  "obrázok útvaru": "图形",
  "pasteliek": "支蜡笔",
  "pastelku": "支蜡笔",
  "pastelky": "支蜡笔",
  "pes": "狗",
  "psa": "狗",
  "psom": "狗",
  "rastú": "增加",
  "tento útvar": "这个图形",
  "toto teleso": "这个立体图形",
  "valec": "圆柱",
  "väčšie": "大",
  "zajac": "兔子",
  "zajaca": "兔子",
  "zajacom": "兔子",
  "zelený": "绿色",
  "{@0} je len to, o koľko má {@1} viac. Pripočítaj to k tomu, čo má {@2}.": "{@0} 只是{@1}多出来的部分。把它加到{@2}的数量上。",
  "{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?": "{@0}有 {@1} {@2}，{@3}有 {@4} {@5}。{@7}比{@3}多几{@6}？",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?": "{@0}有 {@1} {@2}。{@3}比{@0}多 {@4} {@5}。{@7}有多少{@6}？",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?": "{@0}{@1} {@2} {@3}，又{@4} {@5} {@6}。现在{@0}有多少{@6}？",
  "{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?": "{@0}{@1} {@2} {@3}。{@4}朋友们 {@5} {@6}。{@8}还剩多少{@7}？",
  "{@0} číslom {@1} je v číselnom rade číslo {@2}.": "在数列中，{@1} {@0}的数是 {@2}。",
  "Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?": "红丝带长 {@0} cm，蓝丝带长 {@1} cm。红丝带比蓝丝带长多少厘米？",
  "Číselný rad od 0 do 20": "0 到 20 的数列",
  "Čísla nesčítavaj. Hľadáš, koľko chýba od {@0} do {@1}.": "不要把两个数相加。你要找的是从 {@0} 到 {@1} 还差多少。",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby si dostal {@1}.": "不要把两个数相加。你要找的是 {@0} 加上几才能得到 {@1}。",
  "Čísla nesčítavaj. Pýtame sa, o koľko má jedno dieťa viac – odčítaj menšie číslo od väčšieho.": "不要把两个数相加。问的是一个小朋友比另一个多多少——要用大数减去小数。",
  "Čísla sú rovnaké, preto ${@0} = {@1}$.": "两个数一样大，所以 ${@0} = {@1}$。",
  "Čísla {@0} vždy o 1: {@1}.": "这些数每次{@0} 1：{@1}。",
  "Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.": "把数分成十和一，例如 $14 = 10 + 4$。",
  "Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "在数列上，数 {@0} 在更右边，它更大。所以 ${@1} {@2} {@3}$。",
  "Štvorec má 4 rovnako dlhé strany.": "正方形有 4 条一样长的边。",
  "Štvorec má všetky štyri strany rovnako dlhé. Tu sú dve strany dlhšie.": "正方形的四条边都一样长。这里有两条边更长。",
  "štvorec": "正方形",
  "žaba": "青蛙",
  "žabou": "青蛙",
  "žaby": "青蛙",
  "„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.": "“多 {@0}”就是加上 {@1}：${@2} + {@3} = {@4}$。{@5}有 {@6} {@7}。",
  "„O {@0} viac“ znamená, že {@1} má viac ako {@2}. Treba pripočítať, nie odčítať.": "“多 {@0}”表示{@1}比{@2}多。要用加法，不要用减法。",
  "„O … viac“ znamená k číslu pripočítať.": "“多……”表示要把数加上去。"
 }
});
