/* Türkçe: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/r8/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "r8-cisla": {
   "title": "Tam sayılar ve rasyonel sayılar",
   "summary": "Negatif sayılar, ters işaretli sayı, mutlak değer ve işaretli kesirlerle hesaplama.",
   "theory": [
    "<p><strong>Doğal sayıları</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ nesneleri sayarken kullanırız. Bunlara sıfırı\n       ve ters işaretlilerini ($-1, -2, -3, \\dots$) eklersek <strong>tam sayıları</strong> $\\mathbb{Z}$ elde ederiz. <strong>Rasyonel sayılar</strong> $\\mathbb{Q}$,\n       $\\frac{p}{q}$ kesri biçiminde ($p$ tam sayı, $q$ doğal sayı) yazılabilen bütün sayılardır, örneğin $\\frac{3}{4}$,\n       $-2{,}5 = -\\frac{5}{2}$ veya $7 = \\frac{7}{1}$.</p>",
    {
     "fig": "r8-obory",
     "caption": "Her doğal sayı bir tam sayıdır ve her tam sayı bir rasyonel sayıdır: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>$a$ sayısının <strong>ters işaretlisi</strong> $-a$'dır: $5$'in ters işaretlisi $-5$, $-3$'ün ters işaretlisi $3$'tür. <strong>Mutlak değer</strong> $|a|$,\n       sayının sayı doğrusunda sıfıra olan uzaklığıdır; bu yüzden hiçbir zaman negatif değildir: $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>İşaretlerle hesaplama:</strong> bir sayıyı çıkarmak, ters işaretlisini eklemek demektir: $4 - (-6) = 4 + 6 = 10$.\n       Çarpma ve bölmede aynı işaretler pozitif, farklı işaretler negatif sonuç verir: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "$-8 - (-5) + 2\\cdot(-3)$ işlemini yap.",
     "steps": [
      "Önce çarpma: $2\\cdot(-3) = -6$ (farklı işaretler, sonuç negatif).",
      "Negatif sayıyı çıkarmak yerine ters işaretlisini ekleriz: $-8 - (-5) = -8 + 5 = -3$.",
      "Son olarak $-3 + (-6) = -9$.",
      "<strong>Sonuç: $-9$</strong>"
     ]
    },
    {
     "task": "$-\\frac{3}{4}$ ile $-0{,}7$ sayılarını karşılaştır.",
     "steps": [
      "Kesri ondalık sayıya çeviririz: $-\\frac{3}{4} = -0{,}75$.",
      "$-0{,}75$ negatif tarafta sıfıra daha uzaktır, yani sayı doğrusunda daha soldadır.",
      "<strong>$-\\frac{3}{4} &lt; -0{,}7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "Üslü ve köklü ifadeler",
   "summary": "Bir sayının karesi ve küpü, karekök, karekök tahmini ve büyük sayıların yazımı.",
   "theory": [
    "<p><strong>Üslü ifade</strong> $a^n$, $n$ tane eşit çarpanın çarpımının kısa yazılışıdır: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       $a$ sayısı <em>taban</em>, $n$ ise <em>üstür</em>. Örneğin $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "Bir sayının karesi bir karenin alanıdır: kenarı 3 olan karede $3^2 = 9$ küçük kare vardır. Küpü ise bir küpün hacmidir: ayrıtı 2 olan küp $2^3 = 8$ küçük küpten oluşur."
    },
    "<p><strong>İşarete dikkat:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$, ama $-3^2 = -(3\\cdot 3) = -9$.\n       Negatif bir sayının çift kuvveti pozitif, tek kuvveti negatiftir: $(-2)^3 = -8$.</p>",
    "<p>Negatif olmayan bir $a$ sayısının <strong>karekökü</strong>, $b^2 = a$ olan negatif olmayan $b$ sayısıdır. $\\sqrt{a} = b$ yazarız,\n       örneğin $\\sqrt{49} = 7$ ve $\\sqrt{0{,}09} = 0{,}3$. Büyük sayıları $1 \\le a &lt; 10$ olmak üzere $a\\cdot 10^n$ biçiminde yazarız:\n       $45\\,000 = 4{,}5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "$(-2)^3 + 3^2 - \\sqrt{64}$ işlemini yap.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$ ve $\\sqrt{64} = 8$, çünkü $8^2 = 64$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>Sonuç: $-7$</strong>"
     ]
    },
    {
     "task": "$\\sqrt{50}$ hangi iki ardışık doğal sayı arasındadır?",
     "steps": [
      "50'nin çevresindeki tam kareleri ararız: $7^2 = 49$ ve $8^2 = 64$.",
      "$49 &lt; 50 &lt; 64$ olduğundan $7 &lt; \\sqrt{50} &lt; 8$.",
      "<strong>$\\sqrt{50}$, 7 ile 8 arasındadır</strong> (7'ye çok yakın)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "Değişkenli ifadeler",
   "summary": "Değişken nedir, ifadede yerine koyma ve sözel bir anlatımı ifadeyle yazma.",
   "theory": [
    "<p><strong>Değişken</strong>, herhangi bir sayının yerini tutan bir harftir (örneğin $x$, $a$, $n$). <strong>Değişkenli ifade</strong>\n       sayıları ve değişkenleri işlemlerle birleştirir, örneğin $3x + 5$ veya $2(a - 1)$. Sayı ile değişken arasına çarpma işareti\n       yazmayız: $3x$, $3\\cdot x$ demektir.</p>",
    "<p><strong>İfadenin değerini</strong>, değişkenin yerine bir sayı koyarak hesaplarız. Negatif sayıyı parantez içinde yerine koyarız:\n       $x = -2$ için $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "Kenarları $a$ ve $a + 3$ olan dikdörtgenin çevresi $o = 2a + 2(a + 3)$, alanı $S = a(a + 3)$'tür. $a = 4$ için $o = 22$ ve $S = 28$."
    },
    "<p><strong>Sözel ifadeyi yazma:</strong> “$x$ sayısının iki katı” $2x$, “$x$'ten 5 fazla” $x + 5$, “$x$ sayısının üçte biri” $\\frac{x}{3}$,\n       “$a$ ile $b$ sayılarının toplamının karesi” $(a + b)^2$'dir.</p>"
   ],
   "examples": [
    {
     "task": "$x = -3$ için $2x^2 - 5x + 1$ ifadesinin değerini hesapla.",
     "steps": [
      "$-3$'ü parantez içinde yerine koyarız: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$, yani $2\\cdot 9 = 18$; ayrıca $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>İfadenin değeri 34'tür.</strong>"
     ]
    },
    {
     "task": "İfade olarak yaz: “$n$ sayısının üç katından 4 eksik”.",
     "steps": [
      "$n$ sayısının üç katı $3n$'dir.",
      "“4 eksik” 4 çıkarmak demektir.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "Cebirsel ifadeleri düzenleme",
   "summary": "Benzer terimler, parantez açma ve iki terimlinin karesi özdeşlikleri.",
   "theory": [
    "<p><strong>Benzer terimlerde</strong> aynı değişken aynı üsle bulunur, örneğin $3x$ ve $-5x$ veya $2x^2$ ve $x^2$.\n       Onları katsayılarını toplayarak toplarız: $3x - 5x + 2 = -2x + 2$. Benzer olmayan terimleri (örneğin $x^2$ ve $x$) toplayamayız.</p>",
    "<p><strong>Parantez açma:</strong> parantezin önündeki sayıyla parantez içindeki her terimi çarparız: $3(2x - 4) = 6x - 12$.\n       Parantezin önündeki eksi, içindeki bütün terimlerin işaretini değiştirir: $-(x - 5) = -x + 5$. İki terimliyi iki terimliyle “her terimi her terimle” çarparız:\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "Kenarı $a + b$ olan kare; $a^2$ karesi, $b^2$ karesi ve iki $ab$ dikdörtgeninden oluşur. Bu yüzden $(a + b)^2 = a^2 + 2ab + b^2$."
    },
    "<p>Ezbere bilmeye değer <strong>özdeşlikler</strong>: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$\n       ve $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "$4(x - 3) - 2(x - 5)$ ifadesini sadeleştir.",
     "steps": [
      "Parantezleri açarız: $4x - 12 - 2x + 10$ (ikinci parantezin önündeki eksi $-5$'i $+10$'a çevirir).",
      "Benzer terimleri birleştiririz: $4x - 2x = 2x$ ve $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "$(x - 4)^2$ ifadesinin açılımını yap.",
     "steps": [
      "$a = x$ ve $b = 4$ olmak üzere $(a - b)^2 = a^2 - 2ab + b^2$ özdeşliğini kullanırız.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "Birinci dereceden denklemler",
   "summary": "Denk dönüşümler, parantezli denklemler ve sağlama.",
   "theory": [
    "<p><strong>Denklem</strong>, içinde bilinmeyen bulunan iki ifadenin eşitliğidir, örneğin $2x + 3 = 9$. <strong>Denklemi çözmek</strong>,\n       yerine konduğunda eşitliği sağlayan sayıyı (kökü) bulmak demektir. Bu denklemin kökü $x = 3$'tür, çünkü $2\\cdot 3 + 3 = 9$.</p>",
    {
     "fig": "r8-vahy",
     "caption": "Denklem, dengedeki bir terazi gibidir: solda kütlesi bilinmeyen ($x$) iki torba ve üç ağırlık, sağda dokuz ağırlık vardır. İki kefeden de 3 ağırlık alırsak terazi dengede kalır: $2x = 6$, yani $x = 3$."
    },
    "<p><strong>Denk dönüşümler</strong> denklemin çözümünü değiştirmez: her iki tarafa aynı sayıyı veya ifadeyi ekleyebilir (ya da çıkarabilir)\n       ve her iki tarafı sıfırdan farklı aynı sayıyla çarpabilir veya bölebiliriz. Amaç, bilinmeyeni bir tarafta yalnız bırakmaktır.</p>",
    "<p><strong>Yöntem:</strong> 1. parantezleri açarız, 2. bilinmeyenli terimleri bir tarafa, sayıları diğer tarafa toplarız,\n       3. iki tarafı bilinmeyenin katsayısına böleriz, 4. ilk denklemde yerine koyarak <strong>sağlama</strong> yaparız.</p>"
   ],
   "examples": [
    {
     "task": "$5x - 7 = 2x + 8$ denklemini çöz.",
     "steps": [
      "Her iki taraftan $2x$ çıkarırız: $3x - 7 = 8$.",
      "Her iki tarafa 7 ekleriz: $3x = 15$.",
      "Her iki tarafı 3'e böleriz: $x = 5$.",
      "Sağlama: sol taraf $5\\cdot 5 - 7 = 18$, sağ taraf $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "$3(x + 2) = x - 4$ denklemini çöz.",
     "steps": [
      "Parantezi açarız: $3x + 6 = x - 4$.",
      "$x$'i, sonra 6'yı çıkarırız: $2x = -10$.",
      "2'ye böleriz: $x = -5$.",
      "Sağlama: $3\\cdot(-5 + 2) = -9$ ve $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "Denklemle çözülen problemler",
   "summary": "Metinden denklem kurma: sayılar, yaş, çevre ve para paylaşımı.",
   "theory": [
    "<p>Bir problemi denklemle beş adımda çözeriz:</p>\n       <ol><li>Bilinmeyen çokluğu bir harfle (örneğin $x$) gösterir ve neyi ifade ettiğini yazarız.</li>\n       <li>Diğer çoklukları $x$ cinsinden ifade ederiz.</li><li>Problemde neyin neye eşit olduğuna göre denklemi kurarız.</li>\n       <li>Denklemi çözeriz.</li><li><em>Problemin metnine göre</em> sağlama yapar ve cevabı yazarız.</li></ol>",
    "<p>Faydalı yazımlar: “5 fazla” $x + 5$, “üç katı” $3x$, “ardışık üç sayı” $x$, $x + 1$, $x + 2$,\n       “dikdörtgenin çevresi” $2a + 2b$'dir.</p>",
    "<p>Sağlamayı kendi denklemimizde yerine koyarak değil, probleme göre yaparız. Denklemi yanlış kurmuşsak denklemdeki sağlama hatayı ortaya çıkarmaz.</p>"
   ],
   "examples": [
    {
     "task": "Ardışık üç doğal sayının toplamı 48'dir. Bu sayılar hangileridir?",
     "steps": [
      "En küçük sayıya $x$ deriz, diğerleri $x + 1$ ve $x + 2$'dir.",
      "Denklem: $x + (x + 1) + (x + 2) = 48$, yani $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "Sağlama: $15 + 16 + 17 = 48$ ✓",
      "<strong>Cevap: Sayılar 15, 16 ve 17'dir.</strong>"
     ]
    },
    {
     "task": "Anne, kızından 26 yaş büyüktür. Yaşlarının toplamı 50'dir. Kız kaç yaşındadır?",
     "steps": [
      "Kızın yaşı $x$, annenin yaşı $x + 26$'dır.",
      "Denklem: $x + (x + 26) = 50$, yani $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "Sağlama: anne $12 + 26 = 38$ yaşındadır ve $12 + 38 = 50$ ✓",
      "<strong>Cevap: Kız 12 yaşındadır.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "Daire ve çember",
   "summary": "Yarıçap ve çap, çemberin uzunluğu, dairenin alanı, daire dilimi ve daire halkası.",
   "theory": [
    "<p>Merkezi $S$, yarıçapı $r$ olan <strong>çember</strong> $k$, düzlemde $S$ noktasına uzaklığı $r$ olan bütün noktaların kümesidir –\n       yalnızca bir “çizgidir”. <strong>Daireyi</strong>, çember ile içindeki bütün bölge oluşturur. <strong>Çap</strong>, merkezden geçen\n       ve çemberin iki noktasını birleştiren doğru parçasıdır; uzunluğu $d = 2r$'dir.</p>",
    {
     "fig": "r8-kruh",
     "caption": "$S$ merkezi, $r$ yarıçapı, $d = 2r$ çapı ve $\\alpha$ açılı daire dilimi."
    },
    "<p><strong>Çemberin uzunluğu</strong> (dairenin çevresi) $o = 2\\pi r = \\pi d$, <strong>dairenin alanı</strong> $S = \\pi r^2$'dir.\n       $\\pi$ sayısı, herhangi bir dairenin çevresinin çapına oranıdır, $\\pi \\approx 3{,}14$.</p>",
    "<p>$\\alpha$ açılı <strong>daire dilimi</strong>, dairenin iki yarıçap arasındaki parçasıdır; alanı $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$'dir.\n       <strong>Daire halkası</strong>, yarıçapları $R &gt; r$ olan iki eş merkezli çember arasındaki bölgedir: $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "Bir bisiklet tekerleğinin çapı $70\\,\\text{cm}$'dir. Bir tam turda ne kadar yol alır? $\\pi \\approx 3{,}14$ al.",
     "steps": [
      "Tekerlek bir turda kendi çemberinin uzunluğu kadar yol alır: $o = \\pi d$.",
      "$o \\approx 3{,}14\\cdot 70 = 219{,}8\\,\\text{cm}$.",
      "<strong>Tekerlek yaklaşık $219{,}8\\,\\text{cm}$, yani yaklaşık $2{,}2\\,\\text{m}$ yol alır.</strong>"
     ]
    },
    {
     "task": "Yarıçapı $10\\,\\text{cm}$ olan dairenin dörtte birinin alanını hesapla ($\\pi \\approx 3{,}14$).",
     "steps": [
      "Dairenin dörtte biri $90^\\circ$'lik bir dilimdir, yani dairenin $\\frac{90}{360} = \\frac{1}{4}$'üdür.",
      "Bütün dairenin alanı: $S = \\pi r^2 \\approx 3{,}14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>Dörtte biri: $314 : 4 = 78{,}5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "Prizmalar – yüzey alanı ve hacim",
   "summary": "Prizmanın tabanı ve yanal yüzü, dikdörtgenler prizmasının açınımı, dikdörtgenler prizması, küp ve üçgen prizmanın yüzey alanı ve hacmi.",
   "theory": [
    "<p><strong>Prizma</strong>, iki eş ve paralel <strong>tabanı</strong> (çokgenler) ve dikdörtgenlerden – yan yüzlerden – oluşan\n       <strong>yanal yüzeyi</strong> olan bir cisimdir. Tabanın biçimine göre üçgen, dörtgen, altıgen… prizmadan söz ederiz.\n       Dikdörtgenler prizması ve küp, dörtgen prizmalardır.</p>",
    {
     "fig": "r8-siet",
     "caption": "Boyutları $a$, $b$, $c$ olan dikdörtgenler prizmasının açınımı: iki $a\\times b$ tabanı (mavi) ve yanal yüzeyin dört yan yüzü (yeşil)."
    },
    "<p>Prizmanın <strong>hacmi</strong>: $V = S_p\\cdot v$ (taban alanı çarpı yükseklik). Dikdörtgenler prizması için $V = a\\cdot b\\cdot c$, küp için $V = a^3$.\n       Hacmi küp birimlerle ölçeriz; $1\\,\\text{dm}^3 = 1\\,\\text{l}$ ve $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p><strong>Yüzey alanı</strong>, bütün yüzlerin alanlarının toplamıdır: $S = 2\\cdot S_p + S_{pl}$; burada yanal alan $S_{pl} = o_p\\cdot v$'dir\n       (taban çevresi çarpı yükseklik). Dikdörtgenler prizması için $S = 2(ab + bc + ac)$, küp için $S = 6a^2$.</p>"
   ],
   "examples": [
    {
     "task": "Bir dikdörtgenler prizmasının boyutları $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$'dir. Yüzey alanını ve hacmini hesapla.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Bir üçgen prizmanın tabanı, dik kenarları $3\\,\\text{cm}$ ve $4\\,\\text{cm}$ olan bir dik üçgendir (hipotenüs $5\\,\\text{cm}$), yüksekliği $10\\,\\text{cm}$'dir. Yüzey alanını ve hacmini hesapla.",
     "steps": [
      "Taban alanı: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "Hacim: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "Yanal alan: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "Yüzey alanı: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "Grafikler, tablolar ve istatistik",
   "summary": "Sütun grafiği ve daire grafiği, aritmetik ortalama, tepe değer ve ortanca.",
   "theory": [
    "<p>Verileri <strong>tablolarda</strong> toplar ve <strong>grafiklerle</strong> gösteririz. Sütun grafiği sayıları karşılaştırmak için uygundur,\n       daire grafiği ise her grubun bütünün ne kadarını oluşturduğunu gösterir.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "Sütun grafiği: 23 öğrencili bir sınıfta yazılı sınav notları (1 en iyi nottur). En çok öğrenci 2 aldı."
    },
    {
     "fig": "r8-kolac",
     "caption": "Daire grafiği: öğrenciler okula nasıl gidiyor. Yarısı yürüyerek, %30'u otobüsle ve %20'si bisikletle gidiyor."
    },
    "<p><strong>Aritmetik ortalama</strong>, bütün değerlerin toplamının değer sayısına bölümüdür. <strong>Tepe değer (mod)</strong>, en sık\n       görülen değerdir. <strong>Ortanca (medyan)</strong>, veriler büyüklük sırasına dizildiğinde ortada kalan değerdir; veri sayısı çiftse\n       ortadaki iki değerin ortalamasıdır.</p>"
   ],
   "examples": [
    {
     "task": "Beş gün boyunca sıcaklıklar $12$, $15$, $9$, $15$ ve $14\\,{}^\\circ\\text{C}$ idi. Ortalamayı, tepe değeri ve ortancayı bul.",
     "steps": [
      "Ortalama: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "Tepe değer: en sık görülen değer $15\\,{}^\\circ\\text{C}$'dir.",
      "Ortanca: $9, 12, 14, 15, 15$ olarak sıralarız; ortadaki değer $14\\,{}^\\circ\\text{C}$'dir."
     ]
    },
    {
     "task": "Not grafiğinden sınıfın not ortalamasını hesapla.",
     "steps": [
      "Bütün notların toplamı: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "Öğrenci sayısı: $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>Ortalama: $56 : 23 \\approx 2{,}43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, yani $p = {@6}$ ve $q = {@7}$.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Yanal alan: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, yüzey alanı $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. İki tarafı da {@4} ile çarparız: $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$ ve $\\sqrt{{@2}} = {@3}$, yani ${@4} - {@5} = {@6}$.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "$\\sqrt{{@0}} = {@1}$, çünkü ${@2}^2 = {@3}$.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$, $3\\cdot a$ değil, $a\\cdot a\\cdot a$ demektir.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$ ve işaretler {@3}: ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$ ve işaretler {@3}: ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$ ve ${@2}^2 = {@3}$. ${@4} &lt; {@5} &lt; {@6}$ olduğundan ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$ ve $|{@2}| = {@3}$, yani ${@4} - {@5} = {@6}$.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$ ve $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "Mutlak değer sıfıra olan uzaklıktır, hiçbir zaman negatif değildir.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "Denklemi {@0} ile çarparsan iki taraftaki her terimi, ${@1}$ sayısını da çarp. Önce kesri yalnız bırakmak daha kolaydır.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "Dikdörtgenler prizması biçimindeki bir akvaryumun iç boyutları {@0} cm, {@1} cm ve {@2} cm. İçine kaç litre su sığar?",
  "Aká dlhá je dlhšia strana (v cm)?": "Uzun kenar kaç cm'dir?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "$a = {@1}$ için diğer kenar $a + {@0}$ kaç cm'dir?",
  "Aká dlhá je kratšia strana (v cm)?": "Kısa kenar kaç cm'dir?",
  "Aké je najväčšie z čísel?": "Sayıların en büyüğü hangisidir?",
  "Aké je {@0}. číslo v poradí?": "Sıradaki {@0}. sayı nedir?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "$a$ sayısı nedir? Ondalık virgülden önce sıfırdan farklı tek bir rakam olmalı.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "${@0}^\\circ$ açısı tam açının ne kadarıdır? Kesir olarak gir.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "${@0}$ ve ${@1}$ kesirlerinin en küçük ortak paydası nedir?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "Prizmanın hacmi $V = S_p\\cdot h$ kaç cm³'tür?",
  "Aký je objem kvádra (v cm³)?": "Dikdörtgenler prizmasının hacmi kaç cm³'tür?",
  "Aký je obsah celého kruhu (v cm²)?": "Dairenin tamamının alanı kaç cm²'dir?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "Yanal alan – taban çevresi çarpı yükseklik – kaç cm²'dir?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "Taban alanı $S_p$ kaç cm²'dir?",
  "Aký je polomer kruhu (v cm)?": "Dairenin yarıçapı kaç cm'dir?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "Prizmanın yüzey alanı – iki taban ve yanal alan – kaç cm²'dir?",
  "Aký je súčet všetkých čísel?": "Bütün sayıların toplamı kaçtır?",
  "Aký obsah má jedna stena kocky (v cm²)?": "Küpün bir yüzünün alanı kaç cm²'dir?",
  "Babka": "Büyükanne",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "Parantez olmadığı için yalnızca {@0} sayısının karesi alınır, eksi sonucun önünde kalır: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "$x$ içeren terimler eksik: birinci parantezin her terimini ikinci parantezin her terimiyle çarpmalısın, yalnızca ilkini ilkiyle ve sonuncuyu sonuncuyla değil.",
  "Dcéra": "Kızı",
  "Dedko": "Büyükbaba",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "Yalnızca $\\pi$ sayısına böldün, böylece çapı bulursun. Yarıçap onun yarısıdır.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "Ondalık virgülü {@0} {@1} sola kaydırırız, böylece önünde sıfırdan farklı tek bir rakam kalır: ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "Grafik, okuyucuların kütüphaneden hangi gün kaç kitap ödünç aldığını gösteriyor.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "Uzun kenar ${@0} + {@1} = {@2}\\,\\text{cm}$.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "$S = \\pi r^2$ formülüne çapı koydun. Önce yarıçapı, yani çapın yarısını hesapla.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "${@1}$ terimine $x = {@0}$ değerini koy. ${@2}$ kaçtır?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "İki değişkenin yerine aynı anda değer koy, negatif sayıları paranteze al.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "$x^2$, $2\\cdot x$ değil, $x\\cdot x$ demektir.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "Kare olarak ikinci kuvvet, küp olarak üçüncü kuvvet",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "Kare, iki eş çarpanın çarpımıdır. Eksi çarpı eksi artıdır.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "Karesini almak iki katını almak değildir: sayıyı kendisiyle çarpmak demektir.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "Karesini almak iki katını almak değildir: kendisiyle çarpmak demektir.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "Diğer kenar $a + {@0}$ ifadesinin tamamıdır, onu paranteze al: $a\\cdot(a + {@1})$ çarpılır.",
  "Dvojnásobok": "İki katı",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "Üs, sayının basamak sayısı değil, ondalık virgülü kaydırdığın basamak sayısıdır.",
  "Filip": "Engin",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "Prizmanın iki tabanı (alt ve üst) vardır, ikisi de yüzey alanına katılmalı.",
  "Hľadaj najvyšší stĺpec.": "En uzun sütunu ara.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "Karesi kökün içindeki sayı olan negatif olmayan sayıyı ara.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "Kendisiyle üç kez çarpıldığında hacmi veren sayıyı ara.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "Küpü {@0} olan sayıyı arıyoruz: ${@1}^3 = {@2}$, yani $a = {@3}\\,\\text{cm}$.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "Bir yüzün alanı ${@0} : 6 = {@1}\\,\\text{cm}^2$, yani $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "Bir dikdörtgenin bir kenarı diğerinden {@0} cm uzundur. Dikdörtgenin çevresi {@1} cm. Dikdörtgenin {@2} kenarı kaç cm'dir?",
  "K obom stranám pripočítame {@0}": "İki tarafa da {@0} ekleriz",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "Dikdörtgenler prizmasında her yüz iki kez bulunur. Prizmanın yüzey alanı kaç cm²'dir?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "Birinci parantezin her terimini ikinci parantezin her terimiyle çarp. Sonra $x$ içeren terimleri birleştir.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "Bir sayıyı denklemin diğer tarafına geçirirken işaretini değiştir.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "Bir sayıyı denklemin diğer tarafına geçirirken işaretini değiştir. İki tarafta da aynı işlemi yap.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "Küpün 6 yüzü vardır, her biri kenarı $a$ olan bir karedir.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "Küpün 4 değil, 6 yüzü vardır. Alt ve üst yüzü unutma.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "Küpün 6 eş kare yüzü vardır: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "Bir küpün hacmi ${@0}\\,\\text{cm}^3$. Bir ayrıtı kaç cm'dir?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "Bir küpün yüzey alanı ${@0}\\,\\text{cm}^2$. Bir ayrıtı kaç cm'dir?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "$x$'in katsayısı ${@0}$ çıkarma ile değil, bölme ile kaldırılır: ${@1}x$, ${@2}\\cdot x$ demektir.",
  "Koľko je $R^2 - r^2$?": "$R^2 - r^2$ kaçtır?",
  "Koľko je $\\sqrt{{@0}}$?": "$\\sqrt{{@0}}$ kaçtır?",
  "Koľko je $r^2$?": "$r^2$ kaçtır?",
  "Koľko je ${@0}$?": "${@0}$ kaçtır?",
  "Koľko je ${@0}^2$?": "${@0}^2$ kaçtır?",
  "Koľko je ${@0}{@1}$?": "${@0}{@1}$ kaçtır?",
  "Koľko je $|{@0}|$?": "$|{@0}|$ kaçtır?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "Parantezin içi kaçtır: ${@0}{@1}$?",
  "Koľko je čísel?": "Kaç sayı var?",
  "Koľko kníh si požičali za celý týždeň?": "Bütün hafta boyunca kaç kitap ödünç alındı?",
  "Koľko rokov má {@0}?": "Peki {@0} kaç yaşında?",
  "Koľko žiakov hlasovalo spolu?": "Toplam kaç öğrenci oy verdi?",
  "Koľko žiakov odpovedalo spolu?": "Toplam kaç öğrenci cevap verdi?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "Kısa kenar $x$, uzun kenar $x + {@0}$. Denklem: $2x + 2(x + {@1}) = {@2}$, yani $4x + {@3} = {@4}$, $4x = {@5}$ ve $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "Kısa kenar $x$, uzun kenar $x + {@0}$. $2x + 2(x + {@1}) = {@2}$ denkleminden $4x$ değerini hesapla.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "Kısa kenar ${@0}\\,\\text{cm}$.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "Dairenin {@0}. Alanını cm² cinsinden hesapla. {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "Dairenin {@0}. Çevresini cm cinsinden hesapla. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "Merkezi, yarıçapı, çapı ve dilimi gösterilmiş daire",
  "Kruhový diagram dopravy do školy": "Okula ulaşım şekillerinin daire grafiği",
  "Ktoré ovocie dostalo najviac hlasov?": "Hangi meyve en çok oy aldı?",
  "Ktorý výraz sa rovná ${@0}$?": "Hangi ifade ${@0}$ ifadesine eşittir?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "Hangi ifade şu açıklamaya uyar: <em>{@0}</em>?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "Öğrenciler arasında en sevilen spor hangisidir?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "Dikdörtgenler prizmasında her yüz iki kez bulunur (alt ve üst, ön ve arka, sol ve sağ). $ab + bc + ac$ toplamını bir de iki katına çıkar.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "Bir dikdörtgenler prizmasının boyutları $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Yüzey alanını (cm²) ve hacmini (cm³) hesapla. Bunları noktalı virgülle ayırarak gir.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "Dikdörtgenler prizmasının üç çift eş yüzü vardır: $ab$, $bc$ ve $ac$. Hacim üç boyutun çarpımıdır.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "Ortancayı ancak sıralanmış listede ara. Önce sayıları küçükten büyüğe sırala.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "Ortanca bu iki sayının ortalamasıdır. Kaçtır?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "$\\sqrt{{@0}}$ hangi iki ardışık doğal sayı arasındadır? Küçük ve büyük sayıyı noktalı virgülle ayırarak gir.",
  "Množiny prirodzených, celých a racionálnych čísel": "Doğal sayılar, tam sayılar ve rasyonel sayılar kümeleri",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "Tepe değer en sık tekrar eden değerdir.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "Tepe değer en büyük sayı değil, en sık görülen değerdir.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "Yalnızca $x$ ikiye bölünür, {@0} sayısı ancak yarısından çıkarılır.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "Sayı doğrusunda ${@0}$ ve ${@1}$ sayıları var. Aralarındaki uzaklık nedir?",
  "Najmenšie číslo je {@0}.": "En küçük sayı {@0}.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "En küçük sayıya $x$ de ve bütün sayıları topla. Denklem ${@0}x + \\square = {@1}$ biçimindedir. Kareye hangi sayı gelir?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "En küçük sayıya $x$ de, sonrakiler $x + 1$, $x + 2$, … olur. Bunları topla ve toplama eşitle.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "Önce kesri yalnız bırak, sonra iki tarafı da paydayla çarp.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "Önce parantezi aç, sonra normal bir denklem gibi çöz.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "Önce kuvveti al, sonra çarp, en son topla. Negatif sayıyı paranteze al.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "Önce iki sayının mutlak değerini bul (sıfıra uzaklıkları negatif değildir), ancak ondan sonra çıkar.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "Önce her karekökü ayrı ayrı hesapla.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "Önce parantezin içini hesapla, sonra çarp.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "En uzun sütunun değeri {@0} ve “{@1}” seçeneğine ait. Bu değer verilerin tepe değeridir.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "En büyük sayı $x + {@0} = {@1}$.",
  "Natália": "Nermin",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "Kökün içindeki sayının arasında kaldığı iki doğal sayı karesini bul.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "{@0} sayısını değil, $x$ sayısını çarpmalısın.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "Toplamın tamamı çarpılır, bu yüzden onu paranteze almalısın. Parantez olmadan yalnızca $x$ çarpılırdı.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "Toplamın tamamı, yani yalnızca {@0} sayısı değil, $x$ de çarpılır.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "Yalnızca $x$ çarpılır, {@0} sayısı ancak {@1} kattan çıkarılır. Parantez, farkın tamamının {@2} katı anlamına gelirdi.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "Ondalık virgül kaç basamak sola kaydırılmalı? Bu, $n$ üssüdür.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "Bir dikdörtgenin kenarları $a$ ve $a + {@0}$ santimetre. $a = {@2}$ için {@1} hesapla.",
  "Obdĺžnik so stranami a a a plus 3": "Kenarları a ve a artı 3 olan dikdörtgen",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "İki tarafı da ${@0}$ sayısına böl. $x$ nedir?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "İki tarafı da {@0} ile çarp. $x$ nedir?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "İki sayı da sıfırın aynı tarafında, bu yüzden sıfıra uzaklıklarını toplama, çıkar.",
  "Objem kocky je $a^3$.": "Küpün hacmi $a^3$'tür.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "Hacmi üçe bölmezsin. Kendisiyle üç kez çarpıldığında hacmi veren sayıyı arıyorsun.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "Bir yüzün alanı $a$ değil, $a^2$'dir. Yüz bir karedir.",
  "Obsah kruhu je $S = \\pi r^2$.": "Dairenin alanı $S = \\pi r^2$.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "Halkanın alanı $\\pi(R - r)^2$ değildir. Büyük dairenin alanından küçük dairenin alanını çıkar: $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "Dikdörtgenin alanı kenarlarının çarpımıdır.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "Dik üçgenin alanı dik kenarların çarpımının yarısıdır, ikiye bölmeyi unutma.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "Dairelerin alanları toplanmamalı, çıkarılmalı: ortadaki küçük daire eksik.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "Çevre $2\\pi r$'dir, 2'yi unuttun (ya da $\\pi d$ formülüne çap yerine yarıçapı koydun).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "Dairenin çevresi $o = 2\\pi r = \\pi d$.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "Bir dairenin çevresi ${@0}\\,\\text{cm}$. Yarıçapı kaç cm'dir? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "Çevreyi yalnızca dörde bölemezsin, dikdörtgenin kenarları aynı uzunlukta değil.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "Dikdörtgenin çevresi $2a + 2b$'dir, diğer kenarın yerine $a + {@0}$ koy.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "Dikdörtgenin çevresi $2a + 2b$'dir. Kısa kenara $x$ de.",
  "Od oboch strán odčítame {@0}": "İki taraftan da {@0} çıkarırız",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "Büyük dairenin alanından küçük dairenin alanını çıkar.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "Negatif bir sayıdan çıkarıyorsun, yani sayı doğrusunda sıfırdan daha da sola gidiyorsun.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "Karekök, sayının yarısı değildir. Kendisiyle çarpıldığında {@0} eden sayıyı ara.",
  "Odčítaj hodnoty dvoch stĺpcov.": "İki sütunun değerlerini çıkar.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "Bulduğun mutlak değerleri çıkar. Sonuç nedir?",
  "Odčítaj získané čísla. Aký je výsledok?": "Bulduğun sayıları çıkar. Sonuç nedir?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "Sayıları çıkar ve sonucu işaretsiz al. Sıfırın farklı taraflarındaysa sıfıra uzaklıkları toplanır.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "Çıkarmayı ters işaretli sayıyı eklemeyle değiştir.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "Negatif sayı çıkarmak, ters işaretli pozitif sayıyı eklemek demektir: $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "Bir sayıyı çıkarmak, ters işaretlisini eklemek demektir: ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "Açıklama ${@0}$ ifadesine uyuyor. Yazarken cümlenin sonundan başla: önce “ana” işlemin (toplam, fark, kuvvet…) ne olduğunu belirle, sonra onun parçalarını.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "Kesri yalnız bırak. $\\frac{x}{{@0}}$ kaçtır?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "Taban bir dik üçgendir, alanı dik kenarların çarpımının yarısıdır. Yanal alan, taban çevresi çarpı yüksekliktir.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "${@0}$ formülüne göre $a = x$, $b = {@1}$ için: ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "Yarıçap çapın yarısıdır: $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "$x$ sayısının yarısı $2x$ değil, $x$ bölü 2'dir.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "Son terim $b^2$ bir karedir ve kare her zaman pozitiftir.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "Son terim {@0} sayısının kendisi değil, karesidir.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "Son terim {@2} sayısının kendisi değil, ${@0}\\cdot {@1}$ çarpımıdır.",
  "Použi $\\pi \\approx 3{,}14$.": "$\\pi \\approx 3{,}14$ kullan.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "Yüzey alanını altıya böl, bir yüzün alanını bulursun. Sonra karekökünü al.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "Dikkat, $S = \\pi r^2$ formülünde çap değil, yarıçap vardır.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "Dikkat: $(x + a)^2$, $x^2 + a^2$ değildir, $2ax$ çarpımı eksik.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "Sayı adedi tek ({@0}), ortanca ortadaki {@1}. sayıdır: {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "Sayı adedi çift ({@0}), ortanca {@1}. ve {@2}. sayıların ortalamasıdır: $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "Dairenin alanını ($\\pi r^2$) hesaplıyorsun, soru çevreyi soruyor.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "Sayı doğrusunda kaymayı düşün: pozitif sayı sağa, negatif sayı sola kaydırır.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "$x$ içeren terimleri sol tarafa geçir ve birleştir. $x$'in katsayısı ne olur?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "$x$ içeren terimleri sola, sayıları sağa geçir. $ax = b$ biçiminde $a$ ve $b$ nedir? Bunları noktalı virgülle ayırarak gir.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "Sayıları sağ tarafa geçir ve birleştir. Sağ tarafta hangi sayı olur?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "Kesri ondalık sayıya çevir. İki negatif sayıdan sıfıra daha yakın olan daha büyüktür.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "Bölmede de çarpmadaki işaret kuralı geçerlidir.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "Kesirleri çarparken ortak payda gerekmez: payı payla, paydayı paydayla çarp.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "$x$ içeren terimi denklemin diğer tarafına geçirirken işaretini değiştirmelisin.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "Bir sayıyı denklemin diğer tarafına geçirirken işaretini değiştirmelisin.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "Sayı adedi çiftse ortada iki sayı vardır. Ortanca bunların ortalamasıdır.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "Farkta sıra önemlidir: önce neyden çıkardığını yazarsın.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "Parantezleri açınca $x$ içeren iki terim oluşur: $x$ çarpı ikinci parantezdeki sayı ve birinci parantezdeki sayı çarpı $x$. Bunları birleştir. $x$'in katsayısı $p$ nedir?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "Kesirleri toplarken ve çıkarırken ortak payda gerekir. İşaretleri unutma.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "Bir farkın karesini alırken her terimin karesini ayrı ayrı almak yetmez, ortadaki $-2ab$ terimi eksik.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "Bir toplamın karesini alırken her terimin karesini ayrı ayrı almak yetmez, ortadaki $2ab$ terimi eksik.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "Negatif sayılarda mutlak değeri büyük olan değil, sıfıra daha yakın olan daha büyüktür.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "Negatif bir sayı eklemek, onun mutlak değerini çıkarmakla aynıdır: ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "Beş",
  "Päťnásobok": "Beş katı",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "Aynı işaretler pozitif çarpım, farklı işaretler negatif çarpım verir.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "Kareköklerin farkı, farkın karekökü değildir. Önce her karekökü ayrı hesapla, ancak ondan sonra çıkar.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "Hangi işlemin en son yapıldığına karar ver. Bir toplam ya da farkın tamamı çarpılıyor ya da kuvveti alınıyorsa parantez gerekir.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "Boyutları desimetreye çeviririz: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "Boyutları desimetreye çevir, çünkü $1\\,\\text{dm}^3 = 1$ litre.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "$(x{@0})(x{@1})$ çarpımını aç ve sonucu $x^2 + px + q$ biçiminde yaz. $p$ ve $q$ değerlerini noktalı virgülle ayırarak gir.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "${@0}({@1})$ ifadesini aç (parantezin önündeki işaretle birlikte). $x$'in katsayısını ve sabit terimi gir.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "${@0}({@1})$ ifadesini aç. $x$'in katsayısını ve sabit terimi noktalı virgülle ayırarak gir.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "${@0}$ ifadesini açıp sadeleştirerek $ax + b$ biçimine getir. $a$ ve $b$ değerlerini noktalı virgülle ayırarak gir.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "${@0}(x{@1})$ parantezini aç. Hangi sayı ($x$'siz) oluşur?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "Açarız: ${@0}{@1} = {@2}{@3}$. $x$ içeren terimler sola, sayılar sağa: ${@4} = {@5}$, yani $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "Açarız: ${@0}{@1}{@2}$. Benzer terimleri birleştiririz: ${@3}$, yani $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "İki kesri de {@0} paydasına genişlet ve paylarını {@1}. Hangi payı elde edersin?",
  "S – stred": "S – merkez",
  "Sieť kvádra": "Dikdörtgenler prizmasının açınımı",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "Benzer terimleri birleştir. $a$ ve $b$ değerlerini noktalı virgülle ayırarak gir.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "Ortak payda {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "Toplam {@0} eş parça eder: {@1}'in bir parçası, {@2}'in ise {@3} parçası var. Bu yüzden toplamı {@4} sayısına böl.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "Yaşlarının toplamı {@0} {@1} ama aynı yaşta değiller, bu yüzden toplamı yalnızca ikiye bölemezsin. {@2} {@3} farkı hesaba kat.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "Yüz bir karedir. Karenin kenarı, yani küpün ayrıtı kaç cm'dir?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "Ortadaki terim yalnızca $ab$ değil, çarpımın iki katı olan $2ab$'dir.",
  "Stĺpcový diagram známok z písomky": "Yazılı sınav notlarının sütun grafiği",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "{@1}'in biriktirdiği parayı $x$ ile göster. “{@2} kat fazla”, {@3} katı demektir.",
  "Syn": "Oğlu",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "Toplam ${@0} = {@1}$, sayı adedi {@2}. Ortalama: ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "Toplam bütün sayıların adedine bölünmeli. Onları bir daha say.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "Toplamın sayı adedine bölümü ortalamadır, aranan sayı değildir. Bütün sayılarla, $x$, $x + 1$, … ile bir denklem kur.",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "Ardışık {@0} doğal sayının toplamı {@1}. Bunlardan {@2} olanı hangisidir?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "$(+b)\\cdot(-b)$ çarpımı negatiftir, bu yüzden $b^2$'nin önünde eksi vardır.",
  "Sčítaj hodnoty všetkých stĺpcov.": "Bütün sütunların değerlerini topla.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "$x$ içeren bütün terimlerin katsayılarını topla. $a$ nedir?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "İki sonucu topla. İfadenin değeri nedir?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "Yalnızca sayıları ($x$'siz) topla. $b$ nedir?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "Bütün terimleri topla. İfadenin değeri nedir?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "Bütün sayıları topla ve toplamı sayı adedine böl.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "$x$'in katsayılarını ve sayıları ayrı ayrı topla. Terimin önündeki işaret ona aittir.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "Yalnızca iki kenarı topladın. Dikdörtgenin dört kenarı var, her uzunluğu iki kez say.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "Bütün sütunların değerlerini toplarız: ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "Bu $(x - b)^2$'nin sonucu olurdu. Toplam ile farkın çarpımında ortadaki terimler birbirini götürür.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "Bu, $(a + b)(a - b)$ çarpımının sonucu. Farkın karesinde ayrıca ortada $-2ab$ terimi vardır ve son terim pozitiftir.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "Bu aritmetik ortalama. Ortanca, sıralanmış sayıların ortadaki değeridir.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "Bu diğer kenarın uzunluğu. Soru {@0} kenarı soruyor.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "Bu yalnızca yanal alan. Yüzey alanına iki taban da dahildir.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "Bu sayıların en küçüğü, soru en büyüğünü soruyor. Ona, en büyük sayının ne kadar büyük olduğunu ekle.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "Bu sayıların en büyüğü, soru en küçüğünü soruyor.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "Bu küpün hacmi ($a^3$). Yüzey alanı bütün yüzlerin alanlarının toplamıdır.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "Bu dairenin tamamının alanı. Daire dilimi, merkez açının büyüklüğüne göre onun yalnızca bir parçasıdır.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "Bu bir yüzün alanı. Ayrıtı, bunun karekökünü alınca bulursun.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "Bu çevre ($2\\pi r$), ya da $r^2$'yi $2r$ olarak hesapladın. Alan $\\pi r^2 = \\pi\\cdot r\\cdot r$.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "Bu küpün yüzey alanı ($6a^2$). Hacim $a^3$'tür.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "Bu, en sık görülen değerin kaç kez tekrarlandığı. Tepe değer değerin kendisidir.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "Bu, {@1}'in biriktirdiği para. Soru, {@3}'in ne kadar biriktirdiğini soruyor.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "Bu sayıların toplamı. Ortalamayı, toplamı sayı adedine bölerek bulursun.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "Bu, {@0} yaşı; soru {@1} yaşını soruyor.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "Küp, üç eş çarpanın çarpımıdır. Negatif bir sayının tek kuvveti negatiftir.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "Küp, üç katı değildir: sayıyı çarpan olarak üç kez yazıp çarpmalısın.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "Üçgen dik prizmanın tabanı, dik kenarları ${@0}\\,\\text{cm}$ ve ${@1}\\,\\text{cm}$ olan bir dik üçgendir (hipotenüs ${@2}\\,\\text{cm}$), yüksekliği ${@3}\\,\\text{cm}$.",
  "Trojnásobok": "Üç katı",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "${@0}^\\circ$ açısı tam açının $\\frac{{@1}}{360}$ kadarıdır, yani daire dilimi dairenin {@2} kaplar: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "Yalnızca $x$ sayısının değil, farkın tamamının karesi alınmalı.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "Her sayının ayrı ayrı değil, farkın tamamının karesi alınır. Farkı paranteze al.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "$-{@0}$ sayısının tamamının karesini alırız: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "{@0} sayılarının ortancasını bul.",
  "Urči modus súboru údajov {@0}.": "{@0} veri kümesinin tepe değerini bul.",
  "Usporiadame: {@0}. {@1}": "Sıralarız: {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "En çok kitap hangi gün ödünç alındı?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "Çevrede uzun kenar iki kez bulunur, bu yüzden {@0} cm farkı da iki kez saymalısın.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "Küçüğün yaşına $x$ de, büyüğün yaşı $x$ artı fark olur. İki yaşın toplamı verilen sayıya eşittir.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "{@0} yaşına $x$ de. $x + (x + {@1}) = {@2}$ denkleminden $2x$ değerini hesapla.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "{@0} yaşını $x$ ile gösteririz, {@1} yaşı ise $x + {@2}$ olur. Denklem: $x + (x + {@3}) = {@4}$, yani $2x = {@5}$ ve $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "Dairenin tamamının alanının bu kadarını al. Daire diliminin alanı kaç cm²'dir?",
  "Vnuk": "Torunu",
  "Vnučka": "Torunu",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "$o = 2\\pi r$ formülünde yarıçap vardır. Çapı biliyorsan $o = \\pi d$ yeter, çapı bir de ikiyle çarpma.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "Sağ tarafı $x$'in katsayısına böl. $x$ nedir?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "Toplamı sayı adedine böl. Ortalama nedir?",
  "Vydeľ. Aké je $x$?": "Böl. $x$ nedir?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "Paydaları çarp. Hangi paydayı elde edersin?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "İki paranteze ait sabit sayıları çarp. $q$ nedir?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "Payları çarp. Hangi payı elde edersin (sadeleştirmeden önce)?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "$3{,}14$ ile çarp. Dairenin alanı kaç cm²'dir?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "$3{,}14$ ile çarp. Halkanın alanı kaç cm²'dir?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "$\\sqrt{{@0}} - \\sqrt{{@1}}$ işlemini yap.",
  "Vypočítaj $\\sqrt{{@0}}$.": "$\\sqrt{{@0}}$ değerini hesapla.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "${@0}$ işlemini yap. Sonucu en sade kesir (örneğin -5/6) ya da tam sayı olarak gir.",
  "Vypočítaj ${@0}^2$.": "${@0}^2$ değerini hesapla.",
  "Vypočítaj ${@0}^3$.": "${@0}^3$ değerini hesapla.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "$|{@0}| - |{@1}|$ işlemini yap.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "{@0} sayılarının aritmetik ortalamasını hesapla.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "$x = {@1}$ için ${@0}$ ifadesinin değerini hesapla.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "$x = {@2}$ için ${@0}(x{@1})$ ifadesinin değerini hesapla.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "$x = {@2}$ ve $y = {@3}$ için ${@0}{@1}$ ifadesinin değerini hesapla.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "$x = {@2}$ için ${@0}{@1}$ ifadesinin değerini hesapla.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "Ayrıtı ${@0}\\,\\text{cm}$ olan küpün hacmini hesapla (cm³ cinsinden).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "Dairenin tamamının alanını hesapla ve ondan, dilimin açısının $360^\\circ$'nin ne kadarı olduğu kadar bir parça al.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "Yarıçapı $r = {@0}\\,\\text{cm}$ ve merkez açısı ${@1}^\\circ$ olan daire diliminin alanını hesapla (cm² cinsinden). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "Yarıçapları $R = {@0}\\,\\text{cm}$ ve $r = {@1}\\,\\text{cm}$ olan halkanın alanını hesapla (cm² cinsinden). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "Dikdörtgenin alanını $a\\cdot b$ hesapla (cm² cinsinden).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "Üç farklı yüzün alanlarını, $ab$, $bc$ ve $ac$, hesapla ve topla (cm² cinsinden).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "Dikdörtgenin çevresini $2a + 2b$ hesapla (cm cinsinden).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "Ayrıtı ${@0}\\,\\text{cm}$ olan küpün yüzey alanını hesapla (cm² cinsinden).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "$2x$ değerini, yani aranan yaşın iki katını hesapladın. Bir de ikiye böl.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Alanı hesapladın. Çevre, dört kenarın uzunluklarının toplamıdır.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Çevreyi hesapladın. Dikdörtgenin alanı kenar uzunluklarının çarpımıdır.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "$\\frac{x}{{@0}}{@1} = {@2}$ denklemini çöz.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "${@0}(x{@1}) = {@2}{@3}$ denklemini çöz.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "${@0}{@1} = {@2}{@3}$ denklemini çöz.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "Denklemi çöz. $x$ (en küçük sayı) nedir?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "Denklemi çöz. {@1} kaç avro {@0}?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "Çevrenin ($2\\pi r$) bir parçasını aldın, bu yay uzunluğudur. Dilimin alanında dairenin alanından ($\\pi r^2$) yola çık.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "İki sayının uzaklığı farklarının mutlak değeridir: $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "$o = 2\\pi r$ formülünü $2\\pi \\approx 6{,}28$ sayısına böl.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "Dengedeki terazi: solda iki x torbası ve üç ağırlık, sağda dokuz ağırlık",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "Parantezin sonucunu ${@0}$ ile çarp. İfadenin değeri nedir?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "Eksinin parantezin içinde olup olmadığına dikkat et. Yalnızca doğrudan üssün altındakinin kuvveti alınır.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "$o = 2\\pi r$ formülünden $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$ elde ederiz.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "$x$ yerine sayıyı koy; negatifse paranteze al.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "Sayıları karıştırdın: {@0} ile çarpılır, {@1} eklenir.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "$\\frac{{@0}}{{@1}}$ sonucunu en sade biçimde (ya da tam sayı olarak) yaz.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "$\\frac{{@0}}{{@1}}$ kesrini en sade biçimde (ya da tam sayı olarak) yaz.",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "${@0}$ sayısını $1 \\le a &lt; 10$ olmak üzere $a\\cdot 10^n$ biçiminde yaz. $a$ ve $n$ değerlerini noktalı virgülle ayırarak gir.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "Sol taraftaki ${@0}$ sayısından kurtul ki yalnızca ${@1}x$ kalsın. Sağ tarafta hangi sayı olur?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "${@0}$ ifadesini $ax + b$ biçiminde sadeleştir. $a$ ve $b$ sayılarını noktalı virgülle ayırarak gir.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Kesirleri, payları ayrı ve paydaları ayrı çıkararak çıkarma. Önce onları ortak paydaya getir.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "Kesirleri, payları ayrı ve paydaları ayrı toplayarak toplama. Önce onları ortak paydaya getir.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "$\\frac{x}{{@0}}$ kesrinden bölmeyle değil, {@1} ile çarparak kurtulursun.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "Kesri ondalık sayıya çeviririz: ${@0} = {@1}$. ${@2}$ ile ${@3}$ sayılarını karşılaştırırız, bu yüzden ${@4} {@5} {@6}$.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "${@0}$ yazılışı, ${@1}$ sayısı ile $x$ değişkeninin toplamı değil, çarpımı demektir. Konulan sayıyı paranteze al ve çarp.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "Parantezin önündeki negatif sayı, sondaki sayı dahil parantezdeki her terimin işaretini değiştirir.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "Kuvvet alırken negatif sayıyı paranteze al: $({@0})^2$ pozitif bir sayıdır.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "Parantez, {@0} kez toplamın tamamını aldığın anlamına gelirdi. Burada önce $x$ sayısının {@1} katı alınır, ancak ona {@2} eklenir.",
  "a $x + 2$": "ve $x + 2$",
  "autobusom 30 %": "otobüsle %30",
  "babka": "büyükanne",
  "babky": "büyükannenin",
  "banán": "muz",
  "beh": "koşu",
  "d = 2r – priemer": "d = 2r – çap",
  "dedka": "büyükbabanın",
  "dedko": "büyükbaba",
  "dlhšia": "uzun",
  "dlhšiu": "uzun",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "$x$ ile {@0} sayısının farkının karesi",
  "dvojnásobku": "iki",
  "dvojnásobok": "iki",
  "futbal": "futbol",
  "hokej": "hokey",
  "hruška": "armut",
  "jahoda": "çilek",
  "k – kružnica": "k – çember",
  "kratšia": "kısa",
  "kratšiu": "kısa",
  "mama": "anne",
  "mamy": "annenin",
  "miest": "basamak",
  "na bicykli 20 %": "bisikletle %20",
  "napr. -2; 8": "örneğin -2; 8",
  "napr. 4; 5": "örneğin 4; 5",
  "napr. 6; -9": "örneğin 6; -9",
  "objem (v cm³)": "hacmini (cm³ cinsinden)",
  "obsah (v cm²)": "alanını (cm² cinsinden)",
  "obvod (v cm)": "çevresini (cm cinsinden)",
  "otca": "babanın",
  "otec": "baba",
  "pešo 50 %": "yürüyerek %50",
  "plávanie": "yüzme",
  "podstava": "taban",
  "polomer $r = {@0}\\,\\text{cm}$": "yarıçapı $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "yüzey alanını (cm² cinsinden)",
  "povrch; objem": "yüzey alanı; hacim",
  "priemer $d = {@0}\\,\\text{cm}$": "çapı $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "beş",
  "päťnásobok": "beş",
  "r – polomer": "r – yarıçap",
  "rovnaké, výsledok je kladný": "aynı, sonuç pozitif",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "$x$ sayısının {@0} katı ile {@1} sayısının farkı",
  "rôzne, výsledok je záporný": "farklı, sonuç negatif",
  "slivka": "erik",
  "stĺpcový diagram": "sütun grafiği",
  "sčítaj": "topla",
  "tenis": "tenis",
  "tri štvrtiny": "3/4'ünü",
  "troch": "üç",
  "trojnásobku": "üç",
  "trojnásobok": "üç",
  "ušetril": "biriktirdi",
  "ušetrila": "biriktirdi",
  "vnuk": "torunu",
  "vnuka": "torununun",
  "vnučka": "torunu",
  "vnučky": "torununun",
  "výsek s uhlom α": "α açılı daire dilimi",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} “{@1}” sütunu “{@2}” sütunundan ne kadar yüksek? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} Yüzey alanını (cm²) ve hacmini (cm³) hesapla, noktalı virgülle ayır.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} {@1} hesapla.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0} ve {@1} toplam {@2} € biriktirdi. {@3}, {@6}'in biriktirdiğinin {@5} katı kadar para {@4}. {@8} kaç avro {@7}?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0}, {@4} ile karşılaştırıldığında {@1} {@2} {@3}. Yaşlarının toplamı {@5} {@6}. Peki {@7} kaç yaşında?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0}'in $x$ avrosu, {@1}'in ${@2}x$ avrosu var. Toplamda kaç $x$ eder, yani $\\square\\, x = {@3}$ denklemine hangi sayı gelir?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0} ${@1} + {@2} = {@3}$ yaşında.",
  "{@0} má {@1} {@2}.": "{@0} {@1} yaşında.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "$x$ ile {@1} sayısının toplamının {@0} katı",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0}, {@1} ile çarpmak demektir, {@2} eklemek değil.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}: $x$, {@1}: ${@2}x$. Denklem: $x + {@3}x = {@4}$, yani ${@5}x = {@6}$ ve $x = {@7}$. {@8} {@10} € {@9}.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}: ${@1}x = {@2}$. İki tarafı da ${@3}$ sayısına böleriz: $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "Payı payla ve paydayı paydayla çarparız: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "${@0}$ teriminin katsayısı ${@1}$, onu hesaba katmayı unutma.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "$x$ içeren terimleri sola, sayıları sağa alırız: ${@0}{@1} = {@2}{@3}$, yani ${@4} = {@5}$ ve $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "$x$ içeren terimleri bir tarafa, sayıları diğer tarafa geçir. En sonda $x$'in katsayısına böl.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "$x$ içeren terimler: ${@0}{@1}{@2} = {@3}$. Sayılar: ${@4}{@5} = {@6}$. Sonuç: ${@7}$, yani $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "{@0} sayı var. Ortadaki sayı sırada kaçıncıdır?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "Sayılar sıfırın farklı taraflarında, bu yüzden sıfıra uzaklıkları çıkarılmaz, toplanır.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "Sayıların işaretleri farklı, bu yüzden mutlak değerlerini toplama, küçüğü büyükten çıkar. Sonucun işaretini mutlak değeri büyük olan sayı belirler.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "Önce sayıları küçükten büyüğe sırala.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "Sayıları $x$, $x + 1${@0} ile gösteririz. Denklem: ${@1}x + {@2} = {@3}$, yani ${@4}x = {@5}$ ve $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "Sayıları küçükten büyüğe sırala. Sıradaki {@0}. sayı nedir?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "Sayıları küçükten büyüğe sırala. Bu sırada hangi sayı var? O ortancadır.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "$a$ sayısı $1 \\le a &lt; 10$ koşulunu sağlamalı, yani ondalık virgülden önce tek bir rakamı vardır.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "$a$ sayısının ondalık virgülden önce tek bir rakamı vardır. $n$ üssü, virgülü kaç basamak kaydırdığını gösterir.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "$q$ sayısı, parantezlerdeki sabit sayıların toplanmasıyla değil, çarpılmasıyla oluşur.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "${@0}$ sayısı yalnızca $x$'i değil, parantezin tamamını çarpar.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "Kökün içindeki sayının iki ondalık basamağı var, sonucun bir tane olacak: $\\sqrt{{@0}}$ değerini dene ve 10'a böl.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "Parantezin önündeki sayı, parantezdeki iki terimi de çarpar: yalnızca $x$'i değil, sabit sayıyı da.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "{@0} sayısı üç kez, diğer sayılar yalnızca bir kez geçiyor. Tepe değer {@1}.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "Parantezin önündeki sayıyla içindeki her terimi işaretiyle birlikte çarp. Sonra benzer terimleri birleştir.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "Parantezin önündeki sayıyla parantezdeki her terimi, sondaki sabit sayıyı da çarp.",
  "číslo o {@0} menšie ako polovica čísla $x$": "$x$ sayısının yarısından {@0} küçük sayı",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "$x$ sayısının {@1} katından {@0} büyük sayı",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "Kenarı a artı b olan, dört parçaya bölünmüş kare",
  "Štvornásobok": "Dört katı",
  "štvornásobku": "dört",
  "štvornásobok": "dört",
  "štyroch": "dört",
  "Žiaci hlasovali o obľúbenom ovocí.": "Öğrenciler en sevdikleri meyveyi oyladı.",
  "Žiaci uviedli svoj obľúbený šport.": "Öğrenciler en sevdikleri sporu söyledi.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "“{@0} küçük” demek yarısından {@1} çıkarmak demektir, sıra terstir.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "“{@0} büyük” demek {@1} eklemek demektir, çıkarmak değil.",
  "ℕ – prirodzené": "ℕ – doğal sayılar",
  "ℚ – racionálne čísla": "ℚ – rasyonel sayılar",
  "ℤ – celé čísla": "ℤ – tam sayılar"
 }
});
