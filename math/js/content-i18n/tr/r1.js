/* Türkçe: preklad js/rocniky/r1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/r1/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "r1-cisla20": {
   "title": "20'ye kadar sayılar",
   "summary": "0'dan 20'ye kadar sayıları okuma, yazma ve karşılaştırma.",
   "theory": [
    "<p>0'dan 20'ye kadar sayıları okuyabilir ve rakamlarla yazabiliriz: 0 (sıfır), 1 (bir), 2 (iki) … 10 (on) … 20 (yirmi).\n       11'den 19'a kadar sayılarda <strong>1 onluk</strong> ve birkaç <strong>birlik</strong> vardır: örneğin $14 = 10 + 4$.</p>",
    {
     "fig": "r1-rad20",
     "caption": "0'dan 20'ye kadar sayı dizisi. Sağa doğru gittikçe sayı büyür."
    },
    "<p><strong>Karşılaştırma:</strong> $&lt;$ işareti “küçüktür”, $&gt;$ işareti “büyüktür”, $=$ işareti ise “eşittir” anlamına gelir.\n       İşaretin açık tarafı her zaman büyük sayıya bakar: $7 &lt; 12$, $15 &gt; 9$.</p>"
   ],
   "examples": [
    {
     "task": "13 ile 8 sayılarını karşılaştır.",
     "steps": [
      "Sayı dizisinde 13, 8'den daha sağdadır.",
      "Bu yüzden $13 &gt; 8$."
     ]
    },
    {
     "task": "17 sayısında kaç onluk ve kaç birlik vardır?",
     "steps": [
      "$17 = 10 + 7$.",
      "<strong>1 onluk ve 7 birlik.</strong>"
     ]
    }
   ]
  },
  "r1-scitanie": {
   "title": "20'ye kadar toplama ve çıkarma",
   "summary": "Ekleme ve eksiltme, onluğu geçerek işlem yapma.",
   "theory": [
    "<p><strong>Toplama</strong> eklemek demektir: $5 + 3 = 8$. Topladığımız sayılar <em>toplananlar</em>, sonuç ise <em>toplamdır</em>.\n       Toplananların sırası önemli değildir: $3 + 5 = 5 + 3$.</p>",
    "<p><strong>Çıkarma</strong> eksiltmek demektir: $8 - 3 = 5$. Çıkarma, toplamanın tersidir: $5 + 3 = 8$ ise $8 - 3 = 5$ ve $8 - 5 = 3$ olur.</p>",
    "<p><strong>Onluğu geçme:</strong> $8 + 5$ işleminde önce onluğa tamamlarız ($8 + 2 = 10$), sonra kalanı ekleriz ($10 + 3 = 13$).</p>",
    {
     "fig": "r1-desiatka",
     "caption": "İki onluk çerçeve: 8 mavi ve 5 yeşil. İki yeşil ilk onluğu tamamlar, kalan 3'ü ikinci çerçevededir: $8 + 5 = 13$."
    }
   ],
   "examples": [
    {
     "task": "$8 + 5$ işlemini yap.",
     "steps": [
      "Onluğa tamamlarız: $8 + 2 = 10$.",
      "5'ten 3 kaldı: $10 + 3 = 13$.",
      "<strong>Sonuç: 13</strong>"
     ]
    },
    {
     "task": "$14 - 6$ işlemini yap.",
     "steps": [
      "Önce onluğa inmek için 4 çıkarırız: $14 - 4 = 10$.",
      "6'dan çıkarılacak 2 kaldı: $10 - 2 = 8$.",
      "<strong>Sonuç: 8</strong>"
     ]
    }
   ]
  },
  "r1-rozklad": {
   "title": "Sayı dizisi ve sayıları ayırma",
   "summary": "Hangi sayı önce, hangisi sonra gelir; bir sayıyı iki parçaya ayırma.",
   "theory": [
    "<p><strong>Sayı dizisi</strong>, sayıların art arda sıralanmasıdır: 0, 1, 2, 3, … Bir sayının hemen önündeki sayı 1 eksiktir,\n       hemen arkasındaki sayı ise 1 fazladır.</p>",
    "<p><strong>Bir sayıyı ayırmak</strong>, onu daha küçük iki sayının toplamı olarak yazmaktır. 6 sayısını örneğin\n       $1 + 5$, $2 + 4$ veya $3 + 3$ şeklinde ayırabiliriz.</p>",
    {
     "fig": "r1-domcek",
     "caption": "6 sayısının ayırma evi: her katta toplamı 6 eden iki sayı vardır."
    }
   ],
   "examples": [
    {
     "task": "Sayı dizisinde 15'ten sonra hangi sayı gelir?",
     "steps": [
      "Bir sayıdan sonra her zaman 1 fazlası gelir.",
      "$15 + 1 = 16$.",
      "<strong>Sonuç: 16</strong>"
     ]
    },
    {
     "task": "Ayırmayı tamamla: $9 = 4 + \\square$.",
     "steps": [
      "4'ten 9'a kadar ne kadar eksik olduğunu buluyoruz.",
      "$9 - 4 = 5$.",
      "<strong>$9 = 4 + 5$</strong>"
     ]
    }
   ]
  },
  "r1-slovne": {
   "title": "Basit problemler",
   "summary": "Bir hikâyeden işlem kurma ve cevabı yazma.",
   "theory": [
    "<p>Bir problemi adım adım çözeriz:</p>\n       <ol><li>problemi okuruz,</li><li>neyi bildiğimizi ve neyi aradığımızı belirleriz,</li><li>işlemi yazarız,</li>\n       <li>hesaplarız,</li><li>cevabı tam bir cümleyle yazarız.</li></ol>",
    "<p><em>ekledi, aldı, toplam, … fazla</em> gibi sözcükler genellikle <strong>toplama</strong> anlamına gelir.\n       <em>yedi, verdi, kaldı, kaç fazla</em> gibi sözcükler genellikle <strong>çıkarma</strong> anlamına gelir.</p>"
   ],
   "examples": [
    {
     "task": "Elif'in 7 şekeri vardı, 5 şeker daha aldı. Şimdi kaç şekeri var?",
     "steps": [
      "Bildiklerimiz: 7 şekeri vardı, 5 tane aldı. Toplam kaç şekeri olduğunu arıyoruz.",
      "İşlem: $7 + 5 = 12$.",
      "<strong>Cevap: Elif'in 12 şekeri var.</strong>"
     ]
    },
    {
     "task": "Emre'nin 9 bilyesi, Can'ın 4 bilyesi var. Emre'nin kaç bilyesi fazla?",
     "steps": [
      "Karşılaştırıyoruz, bu yüzden büyük sayıdan küçük sayıyı çıkarırız.",
      "İşlem: $9 - 4 = 5$.",
      "<strong>Cevap: Emre'nin 5 bilyesi fazla.</strong>"
     ]
    }
   ]
  },
  "r1-utvary": {
   "title": "Düzlemsel şekiller ve geometrik cisimler",
   "summary": "Daire, üçgen, kare, dikdörtgen ve çevremizdeki cisimler.",
   "theory": [
    "<p><strong>Düzlemsel şekiller</strong> düzdür, onları kâğıda çizebiliriz: <strong>daire</strong>, <strong>üçgen</strong>\n       (3 kenar, 3 köşe), <strong>kare</strong> (4 eşit uzunlukta kenar) ve <strong>dikdörtgen</strong> (4 kenar, karşılıklı kenarlar eşit uzunlukta).</p>",
    {
     "fig": "r1-rovinne",
     "caption": "Düzlemsel şekiller."
    },
    "<p><strong>Geometrik cisimleri</strong> elimize alabiliriz: <strong>küp</strong> (oyun zarı), <strong>dikdörtgenler prizması</strong> (kutu),\n       <strong>küre</strong> (top), <strong>silindir</strong> (konserve kutusu) ve <strong>koni</strong> (dondurma külahı).</p>",
    {
     "fig": "r1-telesa",
     "caption": "Geometrik cisimler. Kesikli çizgi arkada kalan ayrıtı gösterir."
    }
   ],
   "examples": [
    {
     "task": "Üçgenin kaç köşesi, karenin kaç köşesi vardır?",
     "steps": [
      "Köşe, şeklin sivri ucudur.",
      "Üçgenin 3 köşesi, karenin 4 köşesi vardır."
     ]
    },
    {
     "task": "Top hangi cisme benzer?",
     "steps": [
      "Top her yönden yuvarlaktır.",
      "<strong>Top küre biçimindedir.</strong>"
     ]
    }
   ]
  },
  "r1-meranie": {
   "title": "Uzamsal yön bulma ve ölçme",
   "summary": "Sol, sağ, arasında; uzunlukları karşılaştırma ve ölçme.",
   "theory": [
    "<p><strong>Yön bulma:</strong> sol – sağ, yukarı – aşağı, ön – arka, yanında ve arasında sözcüklerini kullanırız.\n       🐶 🐱 🐰 sırasında kedi, köpekle tavşanın <em>arasındadır</em>, köpek ise kedinin <em>solundadır</em>.</p>",
    "<p><strong>Uzunluk ölçme:</strong> uzunluğu adımlarla, karışlarla veya küplerle ölçebiliriz. Daha doğru ölçümü cetvelle\n       santimetre (cm) cinsinden yaparız. Karşılaştırırken daha uzun – daha kısa, daha yüksek – daha alçak deriz.</p>",
    {
     "fig": "r1-meranie",
     "caption": "Kalem 7 küp, silgi 3 küp uzunluğundadır. Kalem 4 küp daha uzundur."
    }
   ],
   "examples": [
    {
     "task": "🍎 🍐 🍌 🍇 sırasında armudun hemen sağında hangi meyve vardır?",
     "steps": [
      "Armut 🍐 soldan ikincidir.",
      "Hemen sağında muz 🍌 vardır."
     ]
    },
    {
     "task": "Bir kurdele 9 cm, diğeri 5 cm uzunluğundadır. Birinci kurdele kaç cm daha uzundur?",
     "steps": [
      "Karşılaştırıyoruz, bu yüzden çıkarırız: $9 - 5 = 4$.",
      "<strong>Birinci kurdele 4 cm daha uzundur.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.": "${@0} - {@1} = {@2}$, yani ${@3} = {@4} + {@5}$.",
  "${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.": "${@0} - {@1} = {@2}$, kırmızı kurdele {@3} cm daha uzundur.",
  "${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.": "${@0} = {@1} + {@2}$, yani {@3} {@4} ve {@5} {@6}.",
  "Adam": "Eren",
  "Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.": "10'u geçiyorsan önce onluğa tamamla, sonra kalanı ekle.",
  "Ako sa volá {@0}?": "{@0} adı nedir?",
  "Budeš sčítať (+), alebo odčítať (−)?": "Toplayacak mısın (+), yoksa çıkaracak mısın (−)?",
  "Chýbajúce číslo zistíš odčítaním.": "Eksik sayıyı çıkarma yaparak bulursun.",
  "Desiatkové rámčeky: 8 plus 5": "Onluk çerçeveler: 8 artı 5",
  "Domček rozkladu čísla 6": "6 sayısının ayırma evi",
  "Doplnil si do desiatky, ale zabudol si pridať zvyšok: ešte $+ {@0}$.": "Onluğa tamamladın ama kalanı eklemeyi unuttun: bir de $+ {@0}$.",
  "Doplň chýbajúce číslo: ${@0} + \\square = {@1}$": "Eksik sayıyı bul: ${@0} + \\square = {@1}$",
  "Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.": "Onluğa tamamla: ${@0} + {@1} = 10$, sonra $10 + {@2} = {@3}$.",
  "Doplň správny znak: ${@0} \\;\\square\\; {@1}$": "Doğru işareti koy: ${@0} \\;\\square\\; {@1}$",
  "Doplň číslo, ktoré chýba v číselnom rade: {@0}": "Sayı dizisinde eksik olan sayıyı bul: {@0}",
  "Dĺžky stúh nesčítavaj. Pýtame sa, o koľko je červená stuha dlhšia – odčítaj.": "Kurdelelerin uzunluklarını toplama. Kırmızı kurdelenin ne kadar uzun olduğu soruluyor – çıkarma yap.",
  "Ema": "Elif",
  "Hneď pred": "hemen öncesinde",
  "Hneď vpravo od {@0} stojí {@1}.": "{@0} hemen sağında {@1} duruyor.",
  "Hneď vľavo od {@0} stojí {@1}.": "{@0} hemen solunda {@1} duruyor.",
  "Hneď za": "hemen sonrasında",
  "Hľadaj číslo, ktoré je o 1 väčšie ako prvé.": "Birinci sayıdan 1 büyük olan sayıyı ara.",
  "Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.": "{@0} sayısından {@1} sayısına kadar ne kadar eksik olduğunu arıyoruz: ${@2} - {@3} = {@4}$.",
  "Jano": "Emir",
  "Keď niečo dáš preč, zostane toho menej. Tu treba odčítať, nie sčítať.": "Bir şeyi verip elinden çıkarınca daha az kalır. Burada toplama değil, çıkarma yapmalısın.",
  "Keď niečo pribudne, je toho viac. Tu treba sčítať, nie odčítať.": "Bir şey eklenince daha çok olur. Burada çıkarma değil, toplama yapmalısın.",
  "Keď niečo pribudne, sčítavame.": "Bir şey eklenince toplama yaparız.",
  "Keď niečo ubudne, odčítavame.": "Bir şey azalınca çıkarma yaparız.",
  "Kocka má 6 stien a každá stena je štvorec.": "Küpün 6 yüzü vardır ve her yüzü bir karedir.",
  "Kocka má 8 vrcholov: 4 hore a 4 dole.": "Küpün 8 köşesi vardır: 4'ü üstte, 4'ü altta.",
  "Kocka má všetky steny rovnaké štvorce. Toto teleso je širšie, ako je vysoké.": "Küpün bütün yüzleri birbirine eş karelerdir. Bu cismin genişliği yüksekliğinden fazla.",
  "Kocky z oboch pásov nesčítavaj. Zisti, o koľko kociek má modrý pás viac – odčítaj.": "İki şeritteki küpleri toplama. Mavi şeritte kaç küp fazla olduğunu bul – çıkarma yap.",
  "Koľko chýba od {@0} do {@1}?": "{@0} sayısından {@1} sayısına kadar ne kadar eksik?",
  "Koľko chýba čísla {@0} do 10?": "{@0} sayısının 10'a tamamlanması için ne kadar eksik?",
  "Koľko je $10 + {@0}$?": "$10 + {@0}$ kaçtır?",
  "Koľko je $10 - {@0}$?": "$10 - {@0}$ kaçtır?",
  "Koľko jednotiek má {@0} navyše oproti 10?": "{@0} sayısında 10'dan fazla kaç birlik var?",
  "Koľko kociek má modrý pás?": "Mavi şeritte kaç küp var?",
  "Koľko kociek má zelený pás?": "Yeşil şeritte kaç küp var?",
  "Koľko musíš ubrať z čísla {@0}, aby si sa dostal na 10?": "10'a inmek için {@0} sayısından kaç çıkarmalısın?",
  "Koľko stien má kocka?": "Küpün kaç yüzü vardır?",
  "Koľko strán má trojuholník?": "Üçgenin kaç kenarı vardır?",
  "Koľko strán má štvorec?": "Karenin kaç kenarı vardır?",
  "Koľko vrcholov má kocka?": "Küpün kaç köşesi vardır?",
  "Koľko vrcholov má kruh?": "Dairenin kaç köşesi vardır?",
  "Koľko vrcholov má obdĺžnik?": "Dikdörtgenin kaç köşesi vardır?",
  "Koľko vrcholov má trojuholník?": "Üçgenin kaç köşesi vardır?",
  "Koľko {@0} má číslo {@1}?": "{@1} sayısında kaç {@0} vardır?",
  "Kruh nemá žiadne vrcholy, jeho okraj je oblý.": "Dairenin hiç köşesi yoktur, kenarı yuvarlaktır.",
  "Ktoré číslo je o 1 {@0} ako {@1}?": "{@1} sayısından 1 {@0} olan sayı hangisidir?",
  "Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?": "Sayı dizisinde {@0} ile {@1} sayıları arasında hangi sayı vardır?",
  "Kužeľ má hore špičku. Toto teleso má hore aj dole kruh.": "Koninin üstünde sivri bir uç vardır. Bu cismin hem üstünde hem altında daire var.",
  "Kváder vyzerá ako krabica, jeho steny nie sú všetky rovnaké. Tu sú všetky steny rovnaké štvorce.": "Dikdörtgenler prizması kutuya benzer, yüzlerinin hepsi eş değildir. Burada bütün yüzler eş karelerdir.",
  "Lea": "Ecem",
  "Medzi {@0} a {@1} stojí {@2}.": "{@0} ile {@1} arasında {@2} duruyor.",
  "Meranie kockami": "Küplerle ölçme",
  "Miro": "Kerem",
  "Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.": "Mavi şeritte {@0} {@1} var, yeşilde {@2}. ${@3} - {@4} = {@5}$.",
  "Máš odčítať, nie sčítať: znamienko $-$ znamená ubrať.": "Toplama değil, çıkarma yapmalısın: $-$ işareti eksiltmek demektir.",
  "Máš sčítať, nie odčítať: znamienko $+$ znamená pridať.": "Çıkarma değil, toplama yapmalısın: $+$ işareti eklemek demektir.",
  "Na obrázku je {@0}.": "Resimdeki şekil: {@0}.",
  "Na obrázku vidno len 3 steny. Ďalšie 3 steny sú schované vzadu, vľavo a dole.": "Resimde yalnızca 3 yüz görünüyor. Diğer 3 yüz arkada, solda ve altta gizli.",
  "Na číselnom rade sa posuň o jedno miesto doprava.": "Sayı dizisinde bir adım sağa git.",
  "Na číselnom rade sa posuň o jedno miesto doľava.": "Sayı dizisinde bir adım sola git.",
  "Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.": "Önce onluğa inecek kadar çıkar: ${@0} - {@1} = 10$, sonra $10 - {@2} = {@3}$.",
  "Nina": "Ceren",
  "O koľko je modrý pás dlhší? Vypočítaj ${@0} - {@1}$.": "Mavi şerit ne kadar daha uzun? ${@0} - {@1}$ işlemini yap.",
  "O koľko kociek je modrý pás dlhší ako zelený? {@0}": "Mavi şerit yeşil şeritten kaç küp daha uzun? {@0}",
  "Obdĺžnik má 4 vrcholy.": "Dikdörtgenin 4 köşesi vardır.",
  "Obdĺžnik má dve strany dlhšie a dve kratšie. Sú tu všetky strany rovnako dlhé?": "Dikdörtgenin iki kenarı daha uzun, iki kenarı daha kısadır. Burada bütün kenarlar aynı uzunlukta mı?",
  "Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?": "Çıkarma, toplamanın tersidir: {@1} elde etmek için {@0} sayısına kaç eklemelisin?",
  "Otázka „o koľko viac“ sa rieši odčítaním.": "“Kaç fazla” sorusu çıkarma ile çözülür.",
  "Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.": "Karşılaştırıyoruz: ${@0} - {@1} = {@2}$. {@3}'in elinde {@4} {@5} daha fazla var.",
  "Posunul si sa na opačnú stranu. Menšie čísla sú na číselnom rade vľavo.": "Ters yöne gittin. Küçük sayılar sayı dizisinde soldadır.",
  "Posunul si sa na opačnú stranu. Väčšie čísla sú na číselnom rade vpravo.": "Ters yöne gittin. Büyük sayılar sayı dizisinde sağdadır.",
  "Pozri sa znova: obe čísla sú rovnaké, ani jedno nie je väčšie.": "Bir daha bak: iki sayı da aynı, hiçbiri daha büyük değil.",
  "Počítaj od {@0} po 10.": "{@0} sayısından 10'a kadar say.",
  "Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.": "Bir top, bir kutu kola, bir kutu, bir oyun zarı ya da bir dondurma külahı düşün.",
  "Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.": "Ekliyoruz, bu yüzden toplarız: ${@0} + {@1} = {@2}$. {@3}'in elinde {@4} {@5} var.",
  "Priestorové útvary": "Üç boyutlu şekiller",
  "Rovinné útvary": "Düzlemsel şekiller",
  "Rozdiel dĺžok zistíš odčítaním.": "Uzunlukların farkını çıkarma yaparak bulursun.",
  "Rozlož číslo {@0}: ${@1} = {@2} + \\square$": "{@0} sayısını ayır: ${@1} = {@2} + \\square$",
  "Sofia": "Selin",
  "Spočítaj kocky v oboch pásoch a odčítaj.": "İki şeritteki küpleri say ve çıkar.",
  "Spočítaj strany a vrcholy útvaru.": "Şeklin kenarlarını ve köşelerini say.",
  "Spočítal si len vrcholy na jednej stene. Kocka má vrcholy hore aj dole.": "Yalnızca bir yüzdeki köşeleri saydın. Küpün hem üstte hem altta köşeleri var.",
  "To je dĺžka celého modrého pásu. Odčítaj od nej, koľko kociek má zelený pás.": "Bu, mavi şeridin tamamının uzunluğu. Bundan yeşil şeritteki küp sayısını çıkar.",
  "To je počet desiatok. Jednotky sú číslica vpravo.": "Bu, onlukların sayısı. Birlikler sağdaki rakamdır.",
  "To je počet jednotiek. Desiatky sú číslica vľavo.": "Bu, birliklerin sayısı. Onluklar soldaki rakamdır.",
  "Tomáš": "Deniz",
  "Toto je zvieratko, od ktorého hľadáme. Hľadáme jeho suseda.": "Bu, komşusunu aradığımız hayvan. Biz onun komşusunu arıyoruz.",
  "Toto zvieratko stojí vpravo. Vľavo je tá strana, kde rad začína.": "Bu hayvan sağda duruyor. Sol, sıranın başladığı taraftır.",
  "Toto zvieratko stojí vľavo. Vpravo je tá strana, kde rad končí.": "Bu hayvan solda duruyor. Sağ, sıranın bittiği taraftır.",
  "Trojuholník má 3 strany.": "Üçgenin 3 kenarı vardır.",
  "Trojuholník má 3 vrcholy a 3 strany.": "Üçgenin 3 köşesi ve 3 kenarı vardır.",
  "Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.": "Eksiltiyoruz, bu yüzden çıkarırız: ${@0} - {@1} = {@2}$. Sonuçta {@3} {@4} {@5} kaldı.",
  "Valec má hore aj dole kruh. Toto teleso má hore špičku.": "Silindirin hem üstünde hem altında daire var. Bu cismin üstünde sivri bir uç var.",
  "Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.": "Köşe, şeklin köşe noktasıdır; kenar, iki köşe arasındaki çizgidir.",
  "Vypočítaj ${@0} + {@1}$.": "${@0} + {@1}$ işlemini yap.",
  "Vypočítaj ${@0} - {@1}$.": "${@0} - {@1}$ işlemini yap.",
  "Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.": "Büyük sayı, sayı dizisinde daha sağdadır. İşaretin açık tarafı büyük sayıya bakar.",
  "Vľavo je začiatok radu, vpravo jeho koniec.": "Sol sıranın başı, sağ ise sonudur.",
  "Z čísla {@0} sme použili {@1}. Koľko z neho ešte zostáva pridať?": "{@0} sayısından {@1} kullandık. Ondan eklenecek daha ne kadar kaldı?",
  "Z čísla {@0} sme ubrali {@1}. Koľko ešte treba ubrať?": "{@0} sayısından {@1} çıkardık. Daha ne kadar çıkarmak gerekiyor?",
  "Za číslom {@0} nasleduje {@1} a za ním {@2}.": "{@0} sayısından sonra {@1}, ondan sonra da {@2} gelir.",
  "Zisti, či čísla rastú alebo klesajú, a o koľko.": "Sayıların arttığını mı azaldığını mı ve ne kadar değiştiğini bul.",
  "Znak $=$ patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "$=$ işareti yalnızca aynı iki sayı arasına konur. Bu sayılar farklı.",
  "Znak je otočený naopak. Otvorená strana znaku má smerovať k väčšiemu číslu.": "İşaret ters çevrilmiş. İşaretin açık tarafı büyük sayıya bakmalı.",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?": "Hayvanlar sıraya dizilmiş: {@0} {@1} hemen sağında kim duruyor?",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?": "Hayvanlar sıraya dizilmiş: {@0} {@1} hemen solunda kim duruyor?",
  "Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?": "Hayvanlar sıraya dizilmiş: {@0} {@1} ile {@2} arasında kim duruyor?",
  "ceruzka": "kalem",
  "cukrík": "şeker",
  "cukríkov": "şeker",
  "cukríky": "şeker",
  "dal": "verdi",
  "dala": "verdi",
  "desiatka": "onluk",
  "desiatky": "onluk",
  "desiatok": "onluk",
  "dostal": "aldı",
  "dostala": "aldı",
  "dva pásy z kociek": "küplerden iki şerit",
  "guličiek": "bilye",
  "guličku": "bilye",
  "guličky": "bilye",
  "guma": "silgi",
  "guľa": "küre",
  "jablko": "elma",
  "jablká": "elma",
  "jabĺk": "elma",
  "jednotiek": "birlik",
  "jednotka": "birlik",
  "jednotky": "birlik",
  "jej": "elinde",
  "klesajú": "azalıyor",
  "kociek": "küp",
  "kocka": "küp",
  "kocky": "küp",
  "kužeľ": "koni",
  "kváder": "dikdörtgenler prizması",
  "líška": "tilki",
  "líškou": "tilki",
  "líšky": "tilkinin",
  "mal": "vardı",
  "mala": "vardı",
  "mačka": "kedi",
  "mačkou": "kedi",
  "mačky": "kedinin",
  "medveď": "ayı",
  "medveďa": "ayının",
  "medveďom": "ayı",
  "menšie": "küçük",
  "modrý": "mavi",
  "mu": "elinde",
  "myš": "fare",
  "myši": "farenin",
  "myšou": "fare",
  "nálepiek": "çıkartma",
  "nálepku": "çıkartma",
  "nálepky": "çıkartma",
  "obrázok útvaru": "şeklin resmi",
  "pasteliek": "boya kalemi",
  "pastelku": "boya kalemi",
  "pastelky": "boya kalemi",
  "pes": "köpek",
  "psa": "köpeğin",
  "psom": "köpek",
  "rastú": "artıyor",
  "tento útvar": "bu şeklin",
  "toto teleso": "bu cismin",
  "valec": "silindir",
  "väčšie": "büyük",
  "zajac": "tavşan",
  "zajaca": "tavşanın",
  "zajacom": "tavşan",
  "zelený": "yeşil",
  "{@0} je len to, o koľko má {@1} viac. Pripočítaj to k tomu, čo má {@2}.": "{@0} yalnızca {@1}'in elinde ne kadar fazla olduğunu gösterir. Bunu {@2}'in elindekine ekle.",
  "{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?": "{@0}'in elinde {@1} {@2}, {@3}'in elinde {@4} {@5} var. {@7}'in elinde kaç {@6} fazla var?",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?": "{@0}'in elinde {@1} {@2} var. {@3}'in elinde {@4} {@5} daha fazla var. {@7}'in elinde kaç {@6} var?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?": "{@0}'in elinde {@2} {@3} {@1}, {@5} tane daha {@4}. Şimdi elinde kaç {@6} var?",
  "{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?": "{@0}'in elinde {@2} {@3} {@1}. Arkadaşlarına {@5} {@6} {@4}. Şimdi {@8} kaç {@7} kaldı?",
  "{@0} číslom {@1} je v číselnom rade číslo {@2}.": "Sayı dizisinde {@1} sayısının {@0} {@2} sayısı vardır.",
  "Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?": "Kırmızı kurdele {@0} cm, mavi kurdele {@1} cm uzunluğunda. Kırmızı kurdele kaç santimetre daha uzun?",
  "Číselný rad od 0 do 20": "0'dan 20'ye kadar sayı dizisi",
  "Čísla nesčítavaj. Hľadáš, koľko chýba od {@0} do {@1}.": "Sayıları toplama. {@0} sayısından {@1} sayısına kadar ne kadar eksik olduğunu arıyorsun.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby si dostal {@1}.": "Sayıları toplama. {@1} elde etmek için {@0} sayısına ne kadar eklemen gerektiğini arıyorsun.",
  "Čísla nesčítavaj. Pýtame sa, o koľko má jedno dieťa viac – odčítaj menšie číslo od väčšieho.": "Sayıları toplama. Bir çocuğun ne kadar fazlası olduğu soruluyor – büyük sayıdan küçük sayıyı çıkar.",
  "Čísla sú rovnaké, preto ${@0} = {@1}$.": "Sayılar aynı, bu yüzden ${@0} = {@1}$.",
  "Čísla {@0} vždy o 1: {@1}.": "Sayılar her seferinde 1 {@0}: {@1}.",
  "Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.": "Sayıyı onluklara ve birliklere ayır, örneğin $14 = 10 + 4$.",
  "Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "{@0} sayısı sayı dizisinde daha sağdadır, yani daha büyüktür. Bu yüzden ${@1} {@2} {@3}$.",
  "Štvorec má 4 rovnako dlhé strany.": "Karenin 4 kenarı vardır ve hepsi aynı uzunluktadır.",
  "Štvorec má všetky štyri strany rovnako dlhé. Tu sú dve strany dlhšie.": "Karenin dört kenarının hepsi aynı uzunluktadır. Burada iki kenar daha uzun.",
  "štvorec": "kare",
  "žaba": "kurbağa",
  "žabou": "kurbağa",
  "žaby": "kurbağanın",
  "„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.": "“{@0} daha fazla” demek {@1} eklemek demektir: ${@2} + {@3} = {@4}$. {@5}'in elinde {@6} {@7} var.",
  "„O {@0} viac“ znamená, že {@1} má viac ako {@2}. Treba pripočítať, nie odčítať.": "“{@0} daha fazla” ifadesi, {@1}'in elinde {@2}'in elindekinden daha fazla olduğunu gösterir. Çıkarma değil, toplama yapmalısın.",
  "„O … viac“ znamená k číslu pripočítať.": "“… daha fazla” ifadesi, sayıya eklemek demektir."
 }
});
