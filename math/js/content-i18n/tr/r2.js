/* Türkçe: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/r2/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "r2-cisla100": {
   "title": "100'e kadar sayılar",
   "summary": "Onluklar ve birlikler, sayı dizisi ve 100'e kadar sayıları karşılaştırma.",
   "theory": [
    "<p>Her iki basamaklı sayının <strong>onlukları</strong> ve <strong>birlikleri</strong> vardır. 47 sayısında 4 onluk ve 7 birlik vardır:\n       $47 = 40 + 7$. On onluk <strong>yüz</strong> eder: $100$.</p>",
    {
     "fig": "r2-stovka",
     "caption": "Yüzlük tablo. Her satırda bir onluk sayı vardır. 47'nin altında 57, yani 10 fazlası bulunur."
    },
    "<p><strong>Karşılaştırma:</strong> önce onlukları karşılaştırırız. Onluklar eşitse birlikleri karşılaştırırız.\n       $63 &gt; 58$, çünkü 6 onluk 5 onluktan fazladır. $42 &lt; 45$, çünkü onluklar eşittir ve 2, 5'ten azdır.</p>"
   ],
   "examples": [
    {
     "task": "71 ile 17 sayılarını karşılaştır.",
     "steps": [
      "71 sayısında 7 onluk, 17 sayısında ise yalnızca 1 onluk vardır.",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "6 onluk ve 3 birlikten oluşan sayı hangisidir?",
     "steps": [
      "6 onluk 60 eder, buna 3 birlik ekleriz.",
      "$60 + 3 = 63$.",
      "<strong>Bu sayı 63'tür.</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "100'e kadar toplama ve çıkarma",
   "summary": "Onluklarla hesaplama, onluğu geçme ve sayı doğrusunda atlamalar.",
   "theory": [
    "<p><strong>Tam onlukları</strong> birlikler gibi toplarız: $30 + 40$, 3 onluk ve 4 onluk yani 7 onluktur, $70$.\n       Benzer şekilde $90 - 60 = 30$.</p>",
    "<p>Daha büyük sayılarda ikinci sayıyı <strong>onluklarına ve birliklerine</strong> ayırır, sırayla ekleriz.\n       $38 + 25$ işleminde önce 20, sonra 5 ekleriz.</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$: 20'lik atlama bizi 58'e, 5'lik atlama 63'e götürür. Yani $38 + 25 = 63$."
    },
    "<p>Çıkarmada da aynı yolu izleriz: $72 - 34$ için önce $72 - 30 = 42$, sonra $42 - 4 = 38$.\n       Sonucu toplama ile kontrol edebiliriz: $38 + 34 = 72$.</p>"
   ],
   "examples": [
    {
     "task": "$47 + 36$ işlemini yap.",
     "steps": [
      "36 sayısını 30 ve 6 olarak ayırırız.",
      "$47 + 30 = 77$.",
      "$77 + 6 = 83$.",
      "<strong>Sonuç: 83</strong>"
     ]
    },
    {
     "task": "$81 - 25$ işlemini yap.",
     "steps": [
      "25 sayısını 20 ve 5 olarak ayırırız.",
      "$81 - 20 = 61$.",
      "$61 - 5 = 56$.",
      "Kontrol: $56 + 25 = 81$. <strong>Sonuç: 56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "Çarpma ve bölme",
   "summary": "Tekrarlı toplama olarak çarpma, eşit parçalara bölme.",
   "theory": [
    "<p><strong>Çarpma</strong>, eşit sayıların toplamının kısa yoludur. $4 + 4 + 4$ yerine $3 \\cdot 4$ yazarız\n       (üç kere dört). Çarptığımız sayılar <em>çarpanlar</em>, sonuç ise <em>çarpımdır</em>.</p>",
    {
     "fig": "r2-pole",
     "caption": "4'er noktadan 3 sıra: $4 + 4 + 4 = 3 \\cdot 4 = 12$. Sütun sütun okursak 3'er noktadan 4 sütun vardır: $4 \\cdot 3 = 12$."
    },
    "<p>Çarpanların sırası önemli değildir: $3 \\cdot 4 = 4 \\cdot 3$. Her sayının 1 ile çarpımı kendisidir ($7 \\cdot 1 = 7$)\n       ve her sayının 0 ile çarpımı 0'dır ($5 \\cdot 0 = 0$).</p>",
    "<p><strong>Bölme</strong>, eşit parçalara ayırmaktır. 12 şekeri 3 çocuğa eşit paylaştırırsak her biri\n       $12 : 3 = 4$ şeker alır. Bölme, çarpmanın tersidir: $12 : 3 = 4$, çünkü $3 \\cdot 4 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "$5 + 5 + 5 + 5$ toplamını çarpma olarak yaz ve hesapla.",
     "steps": [
      "5 sayısını dört kez topluyoruz.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Sonuç: 20</strong>"
     ]
    },
    {
     "task": "15 çiçekten 5'er çiçekli buketler yapıyoruz. Kaç buket olur?",
     "steps": [
      "15'in içinde kaç tane 5 olduğunu arıyoruz.",
      "$15 : 5 = 3$, çünkü $3 \\cdot 5 = 15$.",
      "<strong>3 buket olur.</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "Sayıların katları ve çarpım tablosu",
   "summary": "10 · 10'a kadar çarpım tablosu, bir sayının katları ve çarpım tablosu içinde bölme.",
   "theory": [
    "<p><strong>Bir sayının katlarını</strong>, sayıyı sırayla 1, 2, 3, … ile çarparak buluruz. 3'ün katları\n       3, 6, 9, 12, 15, 18, 21, 24, 27, 30'dur. Sayı doğrusunda hep 3'er atlarız.</p>",
    {
     "fig": "r2-nasobky",
     "caption": "3'ün katları: her atlama 3 uzunluğundadır. Dört atlamadan sonra $4 \\cdot 3 = 12$ sayısına ulaşırız."
    },
    "<p>Faydalı ipuçları: 2'nin katları çift sayılardır, 5'in katları 0 veya 5 ile biter, 10'un katları 0 ile biter.\n       $6 \\cdot 4$'ü bilmiyorsan şöyle düşün: $5 \\cdot 4 = 20$, bir kez daha 4 eklersen $24$.</p>",
    "<p>Bir çarpma işleminden hemen iki bölme işlemi çıkarabiliriz: $6 \\cdot 4 = 24$ ise $24 : 4 = 6$ ve $24 : 6 = 4$.</p>"
   ],
   "examples": [
    {
     "task": "$7 \\cdot 5$ işlemini yap.",
     "steps": [
      "5'in katları: 5, 10, 15, 20, 25, 30, 35.",
      "Yedinci kat 35'tir.",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "$32 : 4$ işlemini yap.",
     "steps": [
      "4 ile çarpıldığında 32 eden sayıyı arıyoruz.",
      "$8 \\cdot 4 = 32$.",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "Problemler ve verilenleri yazma",
   "summary": "Problemden işleme: toplama, çıkarma, çarpma ve bölme.",
   "theory": [
    "<p>Bir problemde önce neyi <strong>bildiğimizi</strong> ve neyi <strong>aradığımızı</strong> yazarız. Sonra doğru\n       işlemi seçer, hesaplar ve <strong>cevabı</strong> tam bir cümleyle yazarız.</p>",
    "<ul><li><em>aldı, eklendi, toplam, … fazla</em> → toplama,</li>\n       <li><em>verdi, kaldı, … eksik, kaç fazla</em> → çıkarma,</li>\n       <li><em>…'er (aynı şeyden birkaç kez)</em> → çarpma,</li>\n       <li><em>eşit paylaştırdı, …'er kaç grup</em> → bölme.</li></ul>",
    "<p>Problemin <strong>verilenleri</strong> şöyle yazılabilir:<br>Emre'nin vardı … 35 bilye<br>kaybetti … 12 bilye<br>\n       kaldı … ? bilye<br>$35 - 12 = 23$<br>Cevap: Emre'nin 23 bilyesi kaldı.</p>"
   ],
   "examples": [
    {
     "task": "Zeynep'in 28 çıkartması var. Ali'nin 15 çıkartma fazlası var. Ali'nin kaç çıkartması var?",
     "steps": [
      "“15 fazla” demek 28'e 15 eklemek demektir.",
      "$28 + 15 = 43$.",
      "<strong>Cevap: Ali'nin 43 çıkartması var.</strong>"
     ]
    },
    {
     "task": "Annem 4 tabağın her birine 5'er elma koydu. Tabaklarda toplam kaç elma var?",
     "steps": [
      "4 kez 5'er demek çarpmadır.",
      "$4 \\cdot 5 = 20$.",
      "<strong>Cevap: Tabaklarda 20 elma var.</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "Nokta, doğru parçası, doğru ve eğri",
   "summary": "Çizgileri ayırt etme, doğru parçalarını ölçme ve karşılaştırma.",
   "theory": [
    "<p><strong>Noktayı</strong> küçük bir benek olarak çizer ve büyük harfle adlandırırız, örneğin $A$ noktası.\n       <strong>Doğru parçası</strong>, iki nokta arasındaki düz çizgidir, örneğin $CD$ doğru parçası. $C$ ve $D$ noktaları onun uç noktalarıdır.</p>",
    "<p><strong>Doğru</strong>, başı ve sonu olmayan düz bir çizgidir; iki yöne de uzatabiliriz.\n       Küçük harfle adlandırırız, örneğin $p$ doğrusu. <strong>Eğri</strong> düz değildir, kıvrılır.</p>",
    {
     "fig": "r2-ciary",
     "caption": "Nokta, doğru parçası, doğru ve eğri. Düz çizgileri cetvelle çizeriz."
    },
    "<p>Doğru parçasının uzunluğunu cetvelle <strong>santimetre</strong> cinsinden ölçeriz. Cetvelin sıfırını $A$ uç noktasına koyar\n       ve $B$ noktasının yanındaki sayıyı okuruz.</p>",
    {
     "fig": "r2-pravitko",
     "caption": "$AB$ doğru parçası sıfırdan başlar ve 7'de biter. Uzunluğu $7\\,\\text{cm}$'dir."
    }
   ],
   "examples": [
    {
     "task": "Hangi çizginin iki uç noktası vardır?",
     "steps": [
      "Nokta yalnızca bir benektir, doğrunun ve eğrinin uç noktası yoktur.",
      "<strong>Doğru parçasının iki uç noktası vardır.</strong>"
     ]
    },
    {
     "task": "$AB$ doğru parçası $9\\,\\text{cm}$, $CD$ doğru parçası $4\\,\\text{cm}$'dir. $AB$ doğru parçası kaç cm daha uzundur?",
     "steps": [
      "Karşılaştırıyoruz, bu yüzden çıkarırız.",
      "$9 - 4 = 5$.",
      "<strong>$AB$ doğru parçası $5\\,\\text{cm}$ daha uzundur.</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "Uzunluk, zaman ve para birimleri",
   "summary": "Santimetre ve metre, saat ve dakika, avro ve sent.",
   "theory": [
    "<p><strong>Uzunluk:</strong> kısa şeyleri santimetre (cm), daha uzun şeyleri metre (m) ile ölçeriz.\n       $1\\,\\text{m} = 100\\,\\text{cm}$ ve $1\\,\\text{dm} = 10\\,\\text{cm}$.</p>",
    "<p><strong>Zaman:</strong> bir gün 24 saattir, bir saat (h) 60 dakikadır (min). Yarım saat 30 dakika, çeyrek saat 15 dakikadır.\n       Saatte <em>kısa ibre</em> saati, <em>uzun ibre</em> dakikayı gösterir.</p>",
    {
     "fig": "r2-hodiny",
     "caption": "Solda saat 7:00, uzun ibre 12'yi gösteriyor. Sağda saat 2:30 (iki buçuk), uzun ibre 6'yı gösteriyor, kısa ibre ise 2 ile 3 arasında."
    },
    "<p><strong>Para:</strong> avro (€) ve sent (c) ile ödeme yaparız. $1\\,\\text{€} = 100$ sent.\n       Madenî paralar 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 € ve 2 €'dur.</p>",
    {
     "fig": "r2-mince",
     "caption": "En küçük değerden en büyüğe avro madenî paraları."
    }
   ],
   "examples": [
    {
     "task": "1 saat 15 dakika kaç dakikadır?",
     "steps": [
      "1 saat 60 dakikadır.",
      "$60 + 15 = 75$.",
      "<strong>75 dakikadır.</strong>"
     ]
    },
    {
     "task": "Cüzdanında 50 c, 20 c ve 20 c'lik madenî paralar var. 1 avroya kaç sent eksik?",
     "steps": [
      "$50 + 20 + 20 = 90$ sent.",
      "1 avro 100 senttir: $100 - 90 = 10$.",
      "<strong>10 sent eksik.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$, yani ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. ${@2}\\,\\text{cm}$ eksik.",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$. $KL$ doğru parçası ${@3}\\,\\text{cm}$ daha uzundur.",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$, yani ${@3} \\cdot {@4} = {@5}$.",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$ sent.",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$, bu yüzden ${@3} : {@4} = {@5}$.",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$, bu yüzden {@3}, {@4} sayısının bir katıdır. Diğer sayılar {@5} sayısının çarpım tablosunda yok.",
  "1 dm je 10 cm.": "1 dm, 10 cm'dir.",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1 avro 100 senttir: $100 - {@0} = {@1}$. {@2} {@3} eksik.",
  "1 hodina": "1 saat",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1 saat 60 dakikadır: $60 + {@0} = {@1}$ dakika.",
  "1 m je 100 cm.": "1 m, 100 cm'dir.",
  "1 € = 100 centov.": "1 € = 100 sent.",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "$AB$ doğru parçasının uzunluğu nedir? Cevabı santimetre cinsinden yaz.{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "$A$ noktası {@0} sayısının, $B$ noktası {@1} sayısının yanında. ${@2} - {@3} = {@4}$, doğru parçasının uzunluğu ${@5}\\,\\text{cm}$.",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "Nokta yalnızca küçük bir benektir. Resimde bir çizgi var.",
  "Bod, úsečka, priamka a krivá čiara": "Nokta, doğru parçası, doğru ve eğri",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "Tüm uzunluk, bütün doğru parçalarının uzunluklarının toplamıdır.",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "Kırık çizginin tamamı, her bir parçasından daha uzundur. Doğru parçalarının uzunluklarını topla, çıkarma.",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "Santimetre çok küçüktür, yaklaşık bir parmak genişliği kadar. Burada daha büyük bir birim gerekir.",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "100 ya da daha fazla sentin var. 100 sent bir avro daha eder – onu avrolara ekle.",
  "Ceny píšeme v eurách.": "Fiyatları avro ile yazarız.",
  "Ceruzka je dlhá asi 15 …": "Bir kalemin uzunluğu yaklaşık 15 …",
  "Cez dva rôzne body prechádza práve jedna priamka.": "İki farklı noktadan tam olarak bir doğru geçer.",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "Eksik sayıyı çıkarma yaparak buluruz: ${@0} - {@1} = {@2}$. Kontrol: ${@3} + {@4} = {@5}$.",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "Bölme, çıkarma değildir. {@0} ile çarpıldığında {@1} eden sayıyı ara.",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} bölüyoruz: ${@2} : {@3} = {@4}$, çünkü ${@5} \\cdot {@6} = {@7}$.",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "On ekleme. Her desimetre 10 cm'dir, bu yüzden desimetre sayısını onla çarp.",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "Onlukları ve birlikleri sıradan sayılar gibi toplama. Onlukları ilk basamağa, birlikleri onların arkasına yaz.",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Onluklar eşit, birlikleri karşılaştırırız: {@0} ve {@1}. Bu yüzden ${@2} {@3} {@4}$.",
  "Deň (s nocou) má 24 hodín.": "Bir gün (gecesiyle birlikte) 24 saattir.",
  "Dlhšie veci meriame v metroch.": "Daha uzun şeyleri metre ile ölçeriz.",
  "Dlhší čas meriame v hodinách.": "Daha uzun süreleri saat ile ölçeriz.",
  "Dom je vysoký asi 10 …": "Bir evin yüksekliği yaklaşık 10 …",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "Eksik sayıyı bul: ${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "Eksik sayıyı bul: ${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "{@0} sayısının eksik katını bul: {@1}",
  "Doplň správnu jednotku: {@0}": "Doğru birimi seç: {@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "Dizide eksik olan sayıyı bul: {@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "Uzunlukları toplama. Bir doğru parçasının ne kadar daha uzun olduğu soruluyor – çıkarma yap.",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "Uzunlukları toplarız: ${@0} + {@1} = {@2}$. Kırık çizginin uzunluğu ${@3}\\,\\text{cm}$.",
  "Euromince": "Avro madenî paraları",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "Saat uzun bir süredir. Burada daha kısa bir birim gerekir.",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "Bir saat 60 dakikadır. 60'ın yarısı 30, çeyreği 15'tir.",
  "Hodina má 60 minút. {@0} je {@1} minút.": "Bir saat 60 dakikadır. {@0} {@1} dakikadır.",
  "Hodina nemá 100 minút, ale 60 minút.": "Bir saat 100 dakika değil, 60 dakikadır.",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "Önce saati dakikaya çevirmelisin: 1 saat 60 dakikadır.",
  "Hodiny ukazujú 7:00 a 2:30": "Saatler 7:00 ve 2:30'u gösteriyor",
  "Hľadaj suseda čísla v číselnom rade.": "Sayı dizisinde sayının komşusunu ara.",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "Bu bir uzunluk mu, zaman mı, yoksa fiyat mı? Kısa mı, yoksa uzun mu?",
  "Je to len jedna bodka, teda bod.": "Bu yalnızca bir benek, yani bir nokta.",
  "Je čiara rovná? Má krajné body?": "Çizgi düz mü? Uç noktaları var mı?",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "Birlikler toplamı 10'dan fazla oldu ama bu yeni onluğu eklemeyi unuttun.",
  "Každé ďalšie číslo je o {@0} väčšie.": "Her sonraki sayı {@0} fazladır.",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "Aynı sayı birkaç kez tekrarlanıyorsa çarpabilirsin.",
  "Kniha stojí asi 12 …": "Bir kitap yaklaşık 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "${@0}\\,\\text{dm}$ kaç santimetredir?",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "{@0} ile {@1} arasında kaç santimetre var? ${@2} - {@3}$ işlemini yap.",
  "Koľko centimetrov má 1 meter?": "1 metre kaç santimetredir?",
  "Koľko centov je spolu?{@0}": "Toplam kaç sent var?{@0}",
  "Koľko centov je v ostatných minciach?": "Diğer madenî paralarda kaç sent var?",
  "Koľko centov má 1 euro?": "1 avro kaç senttir?",
  "Koľko eur je v minciach 1 € a 2 €?": "1 € ve 2 €'luk madenî paralarda kaç avro var?",
  "Koľko hodín má jeden deň?": "Bir gün kaç saattir?",
  "Koľko je $100 - {@0}$?": "$100 - {@0}$ kaçtır?",
  "Koľko je $60 + {@0}$?": "$60 + {@0}$ kaçtır?",
  "Koľko je ${@0} \\cdot {@1}$?": "${@0} \\cdot {@1}$ kaçtır?",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "Saat kaç?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"saat kadranı\">{@0}</svg>",
  "Koľko je skupín?": "Kaç grup var?",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "Toplam kaç {@0} var? <span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "Toplam kaç avro ve kaç sent eder? Noktalı virgülle ayrılmış iki sayı yaz (örneğin 2; 35).{@0}",
  "Koľko krajných bodov má priamka?": "Doğrunun kaç uç noktası vardır?",
  "Koľko krajných bodov má úsečka?": "Doğru parçasının kaç uç noktası vardır?",
  "Koľko kúskov je v jednej skupine?": "Bir grupta kaç tane var?",
  "Koľko minút je 1 hodina a {@0} minút?": "1 saat {@0} dakika kaç dakikadır?",
  "Koľko minút je {@0}?": "{@0} kaç dakikadır?",
  "Koľko minút má 1 hodina?": "1 saat kaç dakikadır?",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "İki farklı noktadan kaç doğru çizebilirsin?",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "{@1} elde etmek için {@0} sayısını kaç kez toplamalısın?",
  "Koľkokrát sa opakuje to isté číslo?": "Aynı sayı kaç kez tekrarlanıyor?",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "Toplamda {@0} sayısı kaç kez tekrarlanıyor?",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "Eğri bir çizgidir. Burada yalnızca bir benek var.",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "Eğri kıvrılır. Bu çizgi düz.",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "Kısa ibre henüz {@0} ile {@1} arasında. {@2} sayısına ulaşana kadar küçük olan saat geçerlidir.",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "Kısa ibre saati, uzun ibre dakikayı gösterir. Uzun ibre 6'daysa saat buçuktur.",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "Kısa ibre {@0}, uzun ibre {@1} sayısını gösteriyor, yani {@2} dakika. Saat {@3} ({@4}).",
  "Krátke veci meriame v centimetroch.": "Kısa şeyleri santimetre ile ölçeriz.",
  "Krátky čas meriame v minútach.": "Kısa süreleri dakika ile ölçeriz.",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "{@0} sayısında hangi tam onluklar var? (36 sayısında bu 30 olurdu.)",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "Bu sayılardan hangisi {@0} sayısının katıdır?",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "{@2} sayısından {@0} {@1} olan sayı hangisidir?",
  "Ktoré číslo krát {@0} dá {@1}?": "{@0} ile çarpıldığında {@1} eden sayı hangisidir?",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "{@0} {@1} ve {@2} {@3} içeren sayı hangisidir?",
  "Ktorú počtovú operáciu použiješ?": "Hangi işlemi kullanacaksın?",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "Kırık çizgi iki doğru parçasından oluşuyor. Birincisinin uzunluğu ${@0}\\,\\text{cm}$, ikincisinin ${@1}\\,\\text{cm}$. Kırık çizginin tamamı kaç cm uzunluğundadır?",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "Metre yaklaşık büyük bir adım kadardır. Burada çok fazla, daha küçük bir birim gerekir.",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "1 € ve 2 €'luk madenî paraları ayrı, sentleri ayrı topla. 100 sent 1 avrodur.",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "Dakika kısa bir süredir. Burada daha uzun bir birim gerekir.",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "Elinde {@0} {@1} var. 1 avroya tamamlamak için kaç sent eksik?",
  "Najprv odčítaj desiatky, potom jednotky.": "Önce onlukları, sonra birlikleri çıkar.",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "Önce onlukları çıkar: ${@0} - {@1}$ kaçtır?",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "Önce onlukları çıkarırız: ${@0} - {@1} = {@2}$. Sonra birlikleri: ${@3} - {@4} = {@5}$.",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "Önce onlukları karşılaştır. Eşitlerse birlikleri karşılaştır.",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "Önce saati dakikaya çevir, sonra ekle.",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "Önce onlukları ekle: ${@0} + {@1}$ kaçtır?",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "Önce onlukları ekleriz: ${@0} + {@1} = {@2}$. Sonra birlikleri: ${@3} + {@4} = {@5}$.",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "Çıkarma yapma. Şekerleri eşit paylaştırıyoruz, bu bölmedir.",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "Çıkarma yapma. {@0} ile çarpıldığında {@1} eden sayıyı arıyorsun.",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "Çıkarma yapma. Eşit paylaştırdığımızda bölme yaparız.",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "Çıkarma yapma. {@1} içinde kaç tane {@0} olduğunu buluyoruz, bu bölmedir.",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "Toplananların sayısını ve {@0} sayısını toplama. {@1} sayısı {@2} kez tekrarlanıyor – bu çarpmadır.",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "Aynı sayıdan birkaç kez varsa çarpma kullanırsın.",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "{@0} sayısının katları her seferinde {@1} artar: {@2}. Eksik olan ${@3} \\cdot {@4} = {@5}$.",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "{@0} sayısının katları: {@1}. Yani ${@2} \\cdot {@3} = {@4}$.",
  "Násobky čísla 3 na číselnom rade": "Sayı doğrusunda 3'ün katları",
  "O koľko je {@0} viac ako {@1}?": "{@0} sayısı {@1} sayısından ne kadar fazladır?",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "{@0} sayısından ${@1} - {@2} = {@3}$ kadar çıkardık. Kontrol: ${@4} - {@5} = {@6}$.",
  "Odčítanie použiješ, keď niečo ubudne.": "Bir şey azalınca çıkarma kullanırsın.",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "“Kaç fazla” sorusu, büyük sayıdan küçük sayıyı çıkararak çözülür.",
  "Palec na ruke je dlhý asi 5 …": "Elindeki başparmağın uzunluğu yaklaşık 5 …",
  "Pol hodiny": "Yarım saat",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "Onlukları karşılaştırırız: {@0} ve {@1}. Bu yüzden ${@2} {@3} {@4}$.",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "Karşılaştırıyoruz, bu yüzden çıkarırız: {@0} {@1}'in elinde {@2} {@3} daha fazla var.",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "Ters yöne gittin. Küçük sayıyı çıkarma yaparak bulursun.",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "Ters yöne gittin. Büyük sayıyı toplama yaparak bulursun.",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "Dikkat, doğru parçası sıfırdan başlamıyor. A ile B arasındaki santimetreleri say.",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "Yan yana iki sayıya bak. Aralarındaki fark ne kadar?",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "Kısa ibrenin tam olarak hangi sayıyı gösterdiğine dikkatle bak.",
  "Pozri sa, pri ktorom čísle je bod B.": "B noktasının hangi sayının yanında olduğuna bak.",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "Grup sayısını ve bir gruptaki sayıyı toplama. Eşit grupları çarpma ile sayarsın.",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "Tabak sayısını ve bir tabaktaki sayıyı toplama. Her tabakta eşit sayıda var – çarp.",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "Onluklarla birlikler gibi hesap yap: 3 onluk + 4 onluk = 7 onluk.",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "Bir saat 100 dakikaymış gibi hesapladın. Bir saat yalnızca 60 dakikadır.",
  "Pravítko a úsečka AB": "Cetvel ve AB doğru parçası",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "{@1} sayısını bulana kadar {@0} sayısının katlarını say.",
  "Prestávka trvá 10 …": "Teneffüs 10 … sürer.",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "Yalnızca B noktasının yanındaki sayıyı okudun. Doğru parçası sıfırdan başlamıyor, bu yüzden A noktasının yanındaki sayıyı çıkar.",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "Birliklerde ters çıkardın ({@0} − {@1}). Birlikler yetmiyorsa onluğu geç: önce onlukları, sonra birlikleri çıkar.",
  "Pri ktorom čísle na pravítku je bod A?": "A noktası cetvelde hangi sayının yanında?",
  "Pri ktorom čísle na pravítku je bod B?": "B noktası cetvelde hangi sayının yanında?",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "Doğru, düz bir çizgidir. Burada yalnızca bir benek var.",
  "Priamka je rovná. Táto čiara sa zatáča.": "Doğru düzdür. Bu çizgi kıvrılıyor.",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "Doğrunun uç noktası yoktur. Bu çizginin başladığı ve bittiği iki uç noktası var.",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "Doğrunun başı da sonu da yoktur, hiç uç noktası yoktur.",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "Eklendi → toplama, azaldı → çıkarma, aynı sayıdan birkaç kez → çarpma.",
  "Pribudlo, preto sčítame.": "Eklendi, bu yüzden toplarız.",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "Ekliyoruz, bu yüzden toplarız: {@0} {@1}'in elinde {@2} {@3} var.",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "Yalnızca onlukları ekledin. {@0} {@1} eklemeyi de unutma.",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "{@1} kez {@0} ekle ya da {@2} sayısının çarpım tablosunu hatırla.",
  "Rovnaké rozdeľovanie je delenie.": "Eşit paylaştırma bölmedir.",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "Uç noktası olmayan ve resmin boydan boya geçen düz çizgi doğrudur.",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "İki uç noktası olan düz çizgi doğru parçasıdır.",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "İkinci sayıyı onluklarına ve birliklerine ayır ve sırayla ekle.",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "{@0} {@1} ayırıyoruz: ${@2} : {@3} = {@4}$, çünkü ${@5} \\cdot {@6} = {@7}$. Her biri {@8} {@9} aldı.",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "Sayıyı onluklarına ve birliklerine ayır: ${@0} = \\square + \\square$.",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "{@0} sayısının bir katı kadar aşağıdasın. {@1} birimlik atlamaları bir daha say.",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "{@0} sayısının bir katı kadar yukarıdasın. {@1} birimlik atlamaları bir daha say.",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "Sayı doğrusunda atlamalar: 38 artı 20 artı 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "Toplam {@0} € ve {@1} c. Bu kaç avro ve kaç sent eder? (Unutma: 100 sent 1 avrodur.)",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "Öğleden önceki 12 saati ve öğleden sonraki 12 saati topla.",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "Grupları ve bir grupta kaç tane olduğunu say. Sonra çarp.",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "Madenî paraların sayısını saydın. Paraların üzerinde yazan sayıları toplamalısın.",
  "Stovková tabuľka čísel od 1 do 100": "1'den 100'e kadar sayıların yüzlük tablosu",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "Bir kurdelenin uzunluğu ${@0}\\,\\text{cm}$. $1\\,\\text{m}$ olması için kaç santimetre eksik?",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "Burada her birinde {@2} tane olan {@0} {@1} var: ${@3} = {@4} \\cdot {@5} = {@6}$.",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "Madenî paraların değerlerini topla, en büyüğünden başla.",
  "Sčítanie použiješ, keď niečo pribudne.": "Bir şey eklenince toplama kullanırsın.",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "Şimdi birlikleri çıkar: ${@0} - {@1}$ kaçtır?",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "Şimdi birlikleri ekle: ${@0} + {@1}$ kaçtır?",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "Bu kurdelenin uzunluğu. 1 metreye ne kadar eksik olduğu soruluyor – 100'den çıkar.",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "Bu yalnızca günün yarısı. Kadranda 12 saat var ama ibre bir günde onu iki kez dolaşır.",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "Bu, onlukların sayısı. Birlikler sağdaki son rakamdır.",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "Bu, birliklerin sayısı. Onluklar soldaki ilk rakamdır.",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "Bu kadar sentin zaten var. 100 sente ne kadar eksik olduğu soruluyor – çıkarma yap.",
  "Tri rady po štyri bodky": "Dörder noktadan üç sıra",
  "Trieda je dlhá asi 9 …": "Bir sınıfın uzunluğu yaklaşık 9 …",
  "Trištvrte hodiny": "Üç çeyrek saat",
  "Trojuholník má 3 strany a každá strana je úsečka.": "Üçgenin 3 kenarı vardır ve her kenarı bir doğru parçasıdır.",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "Eksiltiyoruz, bu yüzden çıkarırız: {@0} Sonuçta {@1} {@2} {@3} kaldı.",
  "Ubudlo, preto odčítame.": "Azaldı, bu yüzden çıkarırız.",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "Sent olarak: ${@0} = {@1}$ sent. 100 sent 1 avrodur, bu yüzden {@2} € ve {@3} c eder.",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "{@0} birimiyle {@1} ölçülür, ama burada söz konusu olan {@2}.",
  "V noci spíme asi 10 …": "Geceleri yaklaşık 10 … uyuruz.",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "Onlukları ve birlikleri yer değiştirdin. Onlukları ilk basamağa, birlikleri ikinci basamağa yazarız.",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "İbreleri karıştırdın. Kısa ibre saati, uzun ibre dakikayı gösterir.",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "{@0} sayısının katlarını say: {@1}, {@2}, {@3}, …",
  "Vypočítaj ${@0} : {@1}$.": "${@0} : {@1}$ işlemini yap.",
  "Vypočítaj ${@0} \\cdot {@1}$.": "${@0} \\cdot {@1}$ işlemini yap.",
  "Vypočítaj ${@0} {@1} {@2}$.": "${@0} {@1} {@2}$ işlemini yap.",
  "Vyučovanie trvá asi 5 …": "Okuldaki dersler yaklaşık 5 … sürer.",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "Üçgenin çevresi kaç doğru parçasından oluşur?",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "Karenin çevresi kaç doğru parçasından oluşur?",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "{@0} balondan her birinde {@1} {@2} olan demetler yapıyoruz. Kaç demet yaparız?",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "Toplamı çarpma olarak yaz ve hesapla: ${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "{@1} içinde kaç tane {@0} olduğunu buluyoruz: ${@2} : {@3} = {@4}$, çünkü ${@5} \\cdot {@6} = {@7}$.",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "Yalnızca onlukların sayısı değişir, birlikler aynı kalır. Yüzlük tabloda bir satır kay.",
  "Zmrzlina stojí asi 2 …": "Bir dondurma yaklaşık 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "= işareti yalnızca aynı iki sayı arasına konur. Bu sayılar farklı.",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "İşaret ters çevrilmiş. Onluklar eşit, bu yüzden birlikler belirler.",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "İşaret ters çevrilmiş. Onluklar belirler: daha çok onluğu olan sayı daha büyüktür.",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "+ işareti eklemek demektir. Burada çıkarma değil, toplama yapmalısın.",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "− işareti eksiltmek demektir. Burada toplama değil, çıkarma yapmalısın.",
  "balón": "balon",
  "balónov": "balon",
  "balóny": "balon",
  "bod": "nokta",
  "bod A": "A noktası",
  "cent": "sent",
  "centov": "sent",
  "centy": "sent",
  "cenu": "fiyat",
  "ciferník hodín": "saat kadranı",
  "citrónov": "limon",
  "desiatku": "onluk",
  "deti": "çocuk",
  "detí": "çocuk",
  "dieťa": "çocuk",
  "dĺžku": "uzunluk",
  "eurá; centy": "avro; sent",
  "hodina": "saat",
  "hodiny": "saat",
  "hodín": "saat",
  "hrušiek": "armut",
  "jahôd": "çilek",
  "je medzi {@0} a {@1}": "{@0} ile {@1} arasında",
  "jednotku": "birlik",
  "krivá čiara": "eğri",
  "kúpil": "aldı",
  "kúpila": "aldı",
  "min": "dk",
  "mince": "madenî paralar",
  "mrkiev": "havuç",
  "orechov": "ceviz",
  "orechy": "ceviz",
  "pol hodiny": "yarım saat",
  "položil": "koydu",
  "položila": "koydu",
  "presne {@0} {@1}": "{@1} tam {@0}",
  "priamka": "doğru",
  "priamka p": "p doğrusu",
  "rovnaké časti": "eş parçaya",
  "rovnakú časť": "eş parçaya",
  "rovnakých častí": "eş parçaya",
  "rozdelil": "paylaştırdı",
  "rozdelila": "paylaştırdı",
  "skupina": "grup",
  "skupiny": "grup",
  "skupín": "grup",
  "skáčeme vždy o 3": "hep 3'er atlıyoruz",
  "stratil": "kaybetti",
  "stratila": "kaybetti",
  "tanier": "tabağın",
  "taniere": "tabağın",
  "tanierov": "tabağın",
  "trištvrte hodiny": "üç çeyrek saat",
  "ukazuje na {@0}": "{@0} sayısını gösteriyor",
  "vreciek": "poşet",
  "vrecko": "poşet",
  "vrecká": "poşet",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} Kontrol: ${@1} + {@2} = {@3}$.",
  "{@0} Správny zápis je {@1}.": "{@0} Doğru yazım: {@1}.",
  "{@0} desiatka je {@1}.": "{@0} onluk {@1} eder.",
  "{@0} desiatky sú {@1}.": "{@0} onluk {@1} eder.",
  "{@0} desiatok je {@1}.": "{@0} onluk {@1} eder.",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0} yalnızca {@1}'in elinde ne kadar az olduğunu gösterir. Bunu {@2}'in elindekinden çıkar.",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0}'in elinde {@1}'in elindekinden daha az var, bu yüzden toplama değil, çıkarma yapmalısın.",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0}'in elinde {@1} {@2} var. {@3}'in elinde {@4} {@5} daha az var. {@7}'in elinde kaç {@6} var?",
  "{@0} {@1} a {@2} minút": "{@1} {@0} ve {@2} dakika",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0}, {@2} {@3} her birine {@4} {@5} {@1}. Tabaklarda toplam kaç {@6} var?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0}'in elinde {@2} {@3} {@1}, {@5} tane daha {@4}. Şimdi elinde kaç {@6} olduğunu hangi işlem gösterir?",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0}'in elinde {@2} {@3} {@1}, bunlardan {@4} tanesini {@5}. Şimdi {@7} kaç {@6} kaldığını hangi işlem gösterir?",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0}, her birinde {@4} {@5} olan {@2} {@3} {@1}. Toplam kaç {@6} {@7}? Bunu hangi işlem gösterir?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0}, {@4} arkadaşı arasında eşit olarak {@2} {@3} {@1}. Her arkadaş kaç {@5} aldı?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0}, {@4} {@5} arasında eşit olarak {@2} {@3} {@1}. Her çocuk kaç şeker aldı?",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.",
  "{@0}-krát po {@1} je násobenie.": "{@0} kez {@1}, çarpma demektir.",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@0} kez {@1}, çarpma demektir: ${@2} \\cdot {@3} = {@4}$. Tabaklarda {@5} {@6} var.",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "$KL$ doğru parçasının uzunluğu ${@0}\\,\\text{cm}$, $MN$ doğru parçasının uzunluğu ${@1}\\,\\text{cm}$. $KL$ doğru parçası kaç santimetre daha uzundur?",
  "Úsečka je rovná. Táto čiara sa zatáča.": "Doğru parçası düzdür. Bu çizgi kıvrılıyor.",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "Doğru parçası iki nokta arasındaki çizgidir. Burada yalnızca bir benek var.",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "Doğru parçasının iki uç noktası vardır, örneğin $A$ ve $B$.",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "Doğru parçasının iki ucunda iki uç noktası vardır. Bu çizginin uç noktası yok, devam ediyor.",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "Doğru parçasının başı da sonu da vardır, doğrunun ikisi de yoktur.",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "Doğru parçası sıfırdan başlıyor ve {@0} sayısında bitiyor. Uzunluğu ${@1}\\,\\text{cm}$.",
  "úsečka": "doğru parçası",
  "úsečka CD": "CD doğru parçası",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "Çizgi kıvrılıyor, düz değil, yani bu bir eğri.",
  "Čistenie zubov trvá asi 3 …": "Diş fırçalamak yaklaşık 3 … sürer.",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "Resimde ne var?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"çizgi ya da nokta\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "Sayıları toplama. {@0} sayısından {@1} kalması için ne kadar çıkardığımızı arıyorsun – bunu çıkarma ile bulursun.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "Sayıları toplama. {@1} elde etmek için {@0} sayısına ne kadar eklemen gerektiğini arıyorsun – bunu çıkarma ile bulursun.",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "Sayıları toplama. “Kaç fazla” sorusu karşılaştırır – büyük sayıdan küçük sayıyı çıkar.",
  "Čísla si sčítal. Znak · znamená násobiť.": "Sayıları topladın. · işareti çarpmak demektir.",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "Sayılar eşit: ${@0} = {@1}$.",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "Sayılar tamamen aynı, hiçbiri daha büyük değil.",
  "Čísla {@0} vždy o {@1}: {@2}.": "Sayılar her seferinde {@1} {@0}: {@2}.",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "{@0} sayısı {@1} sayısının çarpım tablosunda yok: {@2} ile {@3} katları arasında yer alıyor.",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "{@0} sayısını {@1} kez topluyoruz: ${@2} \\cdot {@3} = {@4}$.",
  "čas": "zaman",
  "čiara alebo bod": "çizgi ya da nokta",
  "Štvorec má 4 strany, každá strana je úsečka.": "Karenin 4 kenarı vardır, her kenarı bir doğru parçasıdır.",
  "Štvrť hodiny": "Çeyrek saat",
  "štvrť hodiny": "çeyrek saat",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "“{@0} daha az” demek {@1} çıkarmak demektir: {@2} {@3}'in elinde {@4} {@5} var.",
  "„O … menej“ znamená odčítať.": "“… daha az” ifadesi çıkarmak demektir.",
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
