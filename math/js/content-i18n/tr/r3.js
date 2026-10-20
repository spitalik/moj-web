/* Türkçe: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/r3/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "r3-cisla1000": {
   "title": "1 000'e kadar sayılar",
   "summary": "Yüzler, onlar ve birler, sayı doğrusu ve üç basamaklı sayıları karşılaştırma.",
   "theory": [
    "<p>Üç basamaklı bir sayının <strong>yüzler (Y)</strong>, <strong>onlar (O)</strong> ve <strong>birler (B)</strong> basamağı vardır.\n       472 sayısında 4 yüzlük, 7 onluk ve 2 birlik vardır: $472 = 400 + 70 + 2$. On yüzlük <strong>bin</strong> eder: $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "0'dan 1 000'e kadar sayı doğrusu. 350 sayısı 300 ile 400'ün tam ortasındadır, 720 ise 700'e daha yakındır."
    },
    "<p><strong>Karşılaştırma:</strong> önce yüzleri, yüzler eşitse onları, en sonunda da birleri karşılaştırırız.\n       $538 &gt; 497$, çünkü 5 yüzlük 4 yüzlükten fazladır. $642 &lt; 648$, çünkü yüzler ve onlar eşittir ve $2 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "806 ile 860 sayılarını karşılaştır.",
     "steps": [
      "Yüzler eşittir (8).",
      "Onlar: 0 ve 6, sıfır daha küçüktür.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "3 yüzlük, 0 onluk ve 9 birlikten oluşan sayıyı yaz.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "Onlar basamağına sıfır yazarız.",
      "<strong>Bu sayı 309'dur.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "1 000'e kadar toplama ve çıkarma",
   "summary": "Zihinden parça parça ve alt alta yazarak.",
   "theory": [
    "<p><strong>Zihinden</strong> parça parça hesaplarız: $356 + 230$ için önce $356 + 200 = 556$, sonra $556 + 30 = 586$.\n       Tam yüzlerle birlikler gibi işlem yaparız: $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p><strong>Alt alta</strong> yazarken sayıları birler birlerin, onlar onların, yüzler yüzlerin altına gelecek şekilde yazarız.\n       Sağdan başlayarak hesaplarız: birler, onlar, yüzler. Bir basamaktaki toplam 9'u geçerse 1'i bir sol basamağa aktarırız (eldeli toplama).</p>",
    {
     "fig": "r3-stlpec",
     "caption": "Alt alta toplama: $347 + 285 = 632$. Üstteki küçük birler, aktarılan onlar ve yüzlerdir (eldeler)."
    },
    "<p>Çıkarmayı her zaman <strong>toplama ile kontrol edebiliriz</strong>: $632 - 285 = 347$ ise $347 + 285 = 632$ olmalıdır.</p>"
   ],
   "examples": [
    {
     "task": "$468 + 275$ işlemini yap.",
     "steps": [
      "Birler: $8 + 5 = 13$, 3 yazarım, 1 elde.",
      "Onlar: $6 + 7 + 1 = 14$, 4 yazarım, 1 elde.",
      "Yüzler: $4 + 2 + 1 = 7$.",
      "<strong>Sonuç: 743</strong>"
     ]
    },
    {
     "task": "$700 - 340$ işlemini yap.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "Kontrol: $360 + 340 = 700$. <strong>Sonuç: 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "Çarpma ve bölme",
   "summary": "Çarpım tablosunun tamamı, onlukları çarpma ve kalanlı bölme.",
   "theory": [
    "<p>$10 \\cdot 10$'a kadar çarpım tablosunu tabloda bulabiliriz: satırda birinci çarpan, sütunda ikinci çarpan, kesiştikleri yerde çarpım vardır.\n       Bölme çarpmanın tersidir: $6 \\cdot 7 = 42$ olduğundan $42 : 6 = 7$ ve $42 : 7 = 6$ olduğunu biliriz.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "Çarpım tablosu: 6. satır ile 7. sütun 42'de buluşur, yani $6 \\cdot 7 = 42$."
    },
    "<p><strong>Onlukları çarpma:</strong> $30 \\cdot 4$, 3 onluğun 4 katı, yani 12 onluktur, bu da $120$ eder.</p>",
    "<p><strong>Kalanlı bölme:</strong> her bölme tam çıkmaz. $17 : 5 = 3$, <em>kalan</em> 2, çünkü $3 \\cdot 5 = 15$\n       ve 17'ye 2 daha eksiktir. Kalan her zaman bölenden küçük olmalıdır.</p>"
   ],
   "examples": [
    {
     "task": "$8 \\cdot 7$ ve $56 : 8$ işlemlerini yap.",
     "steps": [
      "Çarpım tablosundan: $8 \\cdot 7 = 56$.",
      "Bölme çarpmanın tersidir, bu yüzden $56 : 8 = 7$."
     ]
    },
    {
     "task": "$29 : 4$ işlemini kalanlı olarak yap.",
     "steps": [
      "4'ün 29'dan büyük olmayan en büyük katı $7 \\cdot 4 = 28$'dir.",
      "Kalan: $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$, kalan 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "Parantezler ve işlem önceliği",
   "summary": "Önce ne hesaplanır: parantezler, çarpma ve bölme, toplama ve çıkarma.",
   "theory": [
    "<p>Birden fazla işlem içeren bir soruda şu sıra geçerlidir:</p>\n       <ol><li>önce <strong>parantez</strong> içindekileri hesaplarız,</li>\n       <li>sonra <strong>çarpma ve bölme</strong>,</li>\n       <li>en son <strong>toplama ve çıkarma</strong> (soldan sağa).</li></ol>",
    "<p>Karşılaştır: $2 + 3 \\cdot 4 = 2 + 12 = 14$, ama $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$. Parantezler sonucu değiştirir!</p>",
    "<p>Yalnızca toplama ve çıkarma varsa soldan sağa gideriz: $20 - 5 - 3 = 15 - 3 = 12$. Ancak bir kısım parantez içindeyse\n       onu önce hesaplarız: $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "$18 + 4 \\cdot 6$ işlemini yap.",
     "steps": [
      "Çarpma önceliklidir: $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>Sonuç: 42</strong>"
     ]
    },
    {
     "task": "$(15 - 7) \\cdot 3$ işlemini yap.",
     "steps": [
      "Önce parantez: $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>Sonuç: 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "Çok adımlı problemler",
   "summary": "Art arda iki veya üç işlemle çözülen problemler.",
   "theory": [
    "<p>Bazı problemleri tek bir işlemle çözemeyiz. Adım adım ilerleriz: <strong>ne biliyoruz</strong>,\n       <strong>önce neyi bulmamız gerekiyor</strong> ve <strong>en sonunda ne arıyoruz</strong>.</p>",
    "<p>Örnek: Annem tanesi 4 € olan 3 defter aldı ve 20 €'luk banknotla ödedi. Ona kaç avro para üstü verildi?<br>\n       1. adım – defterlerin fiyatı: $3 \\cdot 4 = 12$ €.<br>2. adım – para üstü: $20 - 12 = 8$ €.<br>Cevap: Anneme 8 € para üstü verildi.</p>",
    "<p>Adımları tek bir yazımda da birleştirebiliriz: $20 - 3 \\cdot 4 = 20 - 12 = 8$ (çarpma önceliklidir).\n       Sonunda her zaman cevabın mantıklı olup olmadığını kontrol ederiz.</p>"
   ],
   "examples": [
    {
     "task": "Otobüste 34 kişi vardı. Durakta 12 kişi indi ve 9 kişi bindi. Şimdi otobüste kaç kişi var?",
     "steps": [
      "İnenlerden sonra: $34 - 12 = 22$.",
      "Binenlerden sonra: $22 + 9 = 31$.",
      "<strong>Otobüste 31 kişi var.</strong>"
     ]
    },
    {
     "task": "Elif'in 8'er çıkartmalı 2 paketi ve ayrıca 5 tane tek çıkartması var. Toplam kaç çıkartması var?",
     "steps": [
      "Paketlerde: $2 \\cdot 8 = 16$.",
      "Toplam: $16 + 5 = 21$.",
      "<strong>Elif'in 21 çıkartması var.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "Düzlemsel şekillerin çevresi",
   "summary": "Kenar uzunluklarının toplamı olarak üçgen, kare ve dikdörtgenin çevresi.",
   "theory": [
    "<p>Bir şeklin <strong>çevresi</strong>, onun etrafındaki çizginin uzunluğudur. Çevreyi <strong>bütün kenarların uzunluklarını toplayarak</strong> buluruz.\n       Çevreyi $o$ harfiyle gösteririz.</p>",
    {
     "fig": "r3-obvod",
     "caption": "Dikdörtgenin iki uzun ve iki kısa kenarı, üçgenin üç kenarı vardır. Çevre, bütün kenarların toplamıdır."
    },
    "<p>Kenarları $a, b, c$ olan <strong>üçgen</strong>: $o = a + b + c$.<br>\n       Bir kenarı $a$ olan <strong>kare</strong>: $o = a + a + a + a = 4 \\cdot a$.<br>\n       Kenarları $a, b$ olan <strong>dikdörtgen</strong>: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Bir kenarı $7\\,\\text{cm}$ olan karenin çevresini hesapla.",
     "steps": [
      "Karenin 4 eşit kenarı vardır.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Bir dikdörtgenin kenarları $9\\,\\text{cm}$ ve $4\\,\\text{cm}$'dir. Çevresi kaç cm'dir?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "Uzunluk, kütle, hacim ve zaman birimleri",
   "summary": "Milimetreden kilometreye, gram ve kilogram, litre ve desilitre, saniyeden haftaya.",
   "theory": [
    "<p><strong>Uzunluk:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>Kütle:</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>Hacim:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, yani $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>Zaman:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1 gün = 24 h, 1 hafta = 7 gün.</p>",
    "<p><strong>Daha küçük</strong> birime çevirirken sayı büyür (çarparız), <strong>daha büyük</strong> birime çevirirken sayı küçülür (böleriz).\n       Örneğin $3\\,\\text{m} = 300\\,\\text{cm}$ ve $40\\,\\text{mm} = 4\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "$2\\,\\text{m}\\ 35\\,\\text{cm}$'yi santimetreye çevir.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Film 17:40'ta başladı ve 19:10'da bitti. Film kaç dakika sürdü?",
     "steps": [
      "17:40'tan 18:00'e kadar 20 dakika vardır.",
      "18:00'den 19:00'a kadar 60 dakika, 19:00'dan 19:10'a kadar da 10 dakika vardır.",
      "$20 + 60 + 10 = 90$. <strong>Film 90 dakika sürdü.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "Tablolar ve basit veriler",
   "summary": "Tablodan ve sütun grafiğinden veri okuma, karşılaştırma ve toplama.",
   "theory": [
    "<p>Verileri çoğu zaman bir <strong>tabloya</strong> yazarız. İlk satırda başlıklar (örneğin günler), altında sayılar bulunur.\n       Bir pastane kaç dondurma sattığını not etti:</p>\n       <table class=\"tbl\"><tr><th>gün</th><th>Pzt</th><th>Sal</th><th>Çar</th><th>Per</th><th>Cum</th></tr>\n       <tr><td>dondurma</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>Aynı verileri bir <strong>sütun grafiğine</strong> de çizebiliriz. Sütun ne kadar yüksekse sayı o kadar büyüktür.</p>",
    {
     "fig": "r3-graf",
     "caption": "En yüksek sütun cumadır (18), en alçak sütun salıdır (8). Cuma günü salıya göre $18 - 8 = 10$ dondurma daha fazla satıldı."
    },
    "<p>Verilerden <strong>en çok</strong> ve <strong>en az</strong> olanı, iki sayının <strong>ne kadar</strong> farklı olduğunu\n       (çıkarma) ve <strong>toplamın</strong> ne olduğunu (toplama) bulabiliriz.</p>"
   ],
   "examples": [
    {
     "task": "Pazartesi ve çarşamba günleri toplam kaç dondurma satıldı (yukarıdaki tabloya göre)?",
     "steps": [
      "Pazartesi 12, çarşamba 15.",
      "$12 + 15 = 27$.",
      "<strong>Toplam 27 dondurma satıldı.</strong>"
     ]
    },
    {
     "task": "Çarşamba günü perşembeye göre kaç dondurma daha fazla satıldı?",
     "steps": [
      "Çarşamba 15, perşembe 10.",
      "$15 - 10 = 5$.",
      "<strong>Çarşamba günü 5 dondurma daha fazla satıldı.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, bu yüzden ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$, bu yüzden ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Kontrol: ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. Kontrol: ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. {@4} basamağında {@5} rakamı var.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, sonra ${@2} + {@3} = {@4}$. Sonuç: ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1. adım – fiyat: ${@0} \\cdot {@1} = {@2}$ €. 2. adım – para üstü: ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, 3 yazılır, 1 elde",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, 2 yazılır, 1 elde",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "Hatırlamazsan işlemi parçala: örneğin $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "{@0} sayısının {@1} basamağındaki rakam nedir?",
  "Bez zátvoriek počítaj zľava doprava.": "Parantez yoksa soldan sağa doğru hesapla.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "Parantez olmadığı için soldan başlarız: ${@0} - {@1} = {@2}$, sonra ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "Parantez yoksa soldan sağa doğru hesaplanır. Önce ${@0} - {@1}$ işlemini yap, ancak ondan sonra {@2} çıkar.",
  "Cesta vlakom k babke trvala 3 …": "Büyükanneye trenle yolculuk 3 … sürdü.",
  "Chýbajúci sčítanec zistíš odčítaním.": "Eksik toplananı çıkarma yaparak bulursun.",
  "Do hrnčeka sa zmestia asi 3 …": "Bir fincana yaklaşık 3 … sığar.",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "Eksik sayıyı bul: $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "Doğru işareti koy: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "Uygun birimi seç: {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "İki uzun kenar: $2 \\cdot {@0}$ kaçtır?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "İki kısa kenar: $2 \\cdot {@0}$ kaçtır?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "{@0} cm'lik iki kenar birlikte $2 \\cdot {@1} = {@2}$ eder. Kalan iki kenara ${@3} - {@4} = {@5}$ kalır, bir kenar ${@6} : 2 = {@7}\\,\\text{cm}$.",
  "Dvere sú vysoké asi 2 …": "Bir kapının yüksekliği yaklaşık 2 …",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "Değerleri toplama. “Kaç fazla” bir farktır – büyük sayıdan küçük sayıyı çıkar.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "En küçük sayıyı (en kısa sütunu) ara.",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "En büyük sayıyı (en uzun sütunu) ara.",
  "Hľadaj suseda v číselnom rade.": "Sayı dizisinde komşu sayıyı ara.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "{@0} sayısının çarpım tablosunda {@1} sayısını geçmeyen en büyük katı ara. Kalan {@2} sayısından küçük olmalı.",
  "Jablko váži asi 150 …": "Bir elma yaklaşık 150 … gelir.",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "{@0} birimi burada çok küçük: {@1} {@2} çok az olurdu.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "{@0} birimi burada çok büyük: {@1} {@2} çok fazla olurdu.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "{@0} cm'lik iki kenar birlikte kaç santimetre eder?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "Kalan iki kenara kaç santimetre kalır? ${@0} - {@1}$ işlemini yap.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "Kaç onluk çıktı? Bu sayının sonuna bir sıfır ekle.",
  "Koľko eur stál celý nákup?": "Alışverişin tamamı kaç avro tuttu?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "Kaç avro para üstü verildi? ${@0} - {@1}$ işlemini yap.",
  "Koľko je ${@0} - {@1}$?": "${@0} - {@1}$ kaçtır?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "Bütün paketlerde toplam kaç tane var?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "Kalan bir kenarın uzunluğu nedir? ${@0} : 2$ işlemini yap.",
  "Koľko minút je od {@0} do {@1}?": "{@0} ile {@1} arasında kaç dakika var?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "Antrenman toplam kaç dakika sürdü? ${@0} + {@1}$ işlemini yap.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "Kaç fidan kaldı? ${@0} - {@1}$ işlemini yap.",
  "Koľko stromčekov záhradník zasadil?": "Bahçıvan kaç fidan dikti?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "Üç çocuğun elinde toplam kaç {@0} var? ${@1} + {@2} + {@3}$ işlemini yap.",
  "Koľko {@0} má {@1}?": "{@1}'in elinde kaç {@0} var?",
  "Koľko {@0} {@1} {@2}?": "Verilere göre {@2} günü kaç {@0} {@1}?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "Yeni yolcular bindikten sonra otobüste kaç kişi var?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "İnenlerden sonra otobüste kaç kişi kaldı?",
  "Koľkokrát je {@0} v čísle {@1}?": "{@1} sayısında kaç tane {@0} var?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "{@2} {@3} içinde kaç tane {@0} {@1} var?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "{@1} sayısından {@0} küçük olan sayı hangisidir?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "{@1} sayısından {@0} büyük olan sayı hangisidir?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "{@0} {@1}, {@2} {@3} ve {@4} {@5} içeren sayı hangisidir?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "{@0} sayısının {@1} sayısını geçmeyen en büyük katı hangisidir?",
  "Lyžička sirupu má asi 5 …": "Bir çay kaşığı şurup yaklaşık 5 …",
  "Mravec je dlhý asi 5 …": "Bir karıncanın uzunluğu yaklaşık 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "En küçük sayı {@0}, {@1} günü.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "Önce çarpma ve bölme: ${@0} \\cdot {@1} = {@2}$ ve ${@3} : {@4} = {@5}$. Sonra ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "Önce çarpma: ${@0} \\cdot {@1} = {@2}$. Sonra ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "Önce {@0} kısmını çıkar: ${@1} - {@2}$ kaçtır?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "Önce büyük birimi çevir: ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "Önce {@0} birimini {@1} birimine çevir, sonra kalanı ekle.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Önce {@0} kısmını ekle: ${@1} + {@2}$ kaçtır?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "Önce bütün paketlerde kaç tane olduğunu hesapla.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "Önce kaç fidan diktiğini hesapla.",
  "Najprv vypočítaj, čo je v zátvorke.": "Önce parantezin içini hesapla.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "Önce her çocuğun elinde kaç tane olduğunu bul, sonra hepsini topla.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "Önce alışverişin tamamının kaç avro tuttuğunu bul. Sonra bunu banknottan çıkar.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "Önce parantez: ${@0} + {@1} = {@2}$. Sonra ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "Önce parantez: ${@0} - {@1} = {@2}$. Sonra ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "Önce parantez: ${@0} {@1} {@2} = {@3}$. Sonra ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "Önce parantez: ${@0} + {@1}$ kaçtır?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "Önce parantez: ${@0} - {@1}$ kaçtır?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "Önce parantez: ${@0} {@1} {@2}$ kaçtır?",
  "Najväčšie číslo je {@0}, a to {@1}.": "En büyük sayı {@0}, {@1} günü.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "{@0} sayısının {@1} sayısından büyük olmayan en büyük katı ${@2} \\cdot {@3} = {@4}$. Kalan: ${@5} - {@6} = {@7}$. Yani ${@8} : {@9} = {@10}$, kalan {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "Yalnızca bölümü yazdın. Noktalı virgülden sonra kalanı da yaz.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "Parantezi dikkate almadın. Önce parantezdeki sayıları topla, ancak ondan sonra böl.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "Parantezi dikkate almadın. Önce ${@0} - {@1}$ işlemini yap, ancak ondan sonra bunu {@2} sayısından çıkar.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "Parantezi dikkate almadın. Parantezin içi en önce hesaplanır – çarpmadan da önce.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "Doğru günü bul ve yanındaki sayıyı oku.",
  "Nákladné auto váži asi 8 …": "Bir kamyon yaklaşık 8 … gelir.",
  "Násobenie a delenie urob skôr ako odčítanie.": "Çarpma ve bölmeyi çıkarmadan önce yap.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "Çarpma, hem toplamadan hem çıkarmadan önce gelir.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "Kaç fazla? ${@0} - {@1}$ işlemini yap.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "Kenar uzunlukları verilmiş dikdörtgen ve üçgen",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "Dikdörtgenin 4 kenarı vardır: iki uzun ve iki kısa. Hepsini topla.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Bir dikdörtgenin çevresi ${@0}\\,\\text{cm}$, bir kenarı ${@1}\\,\\text{cm}$. Diğer kenarı kaç cm'dir?",
  "Obvod rozdeľ na 4 rovnaké časti.": "Çevreyi 4 eş parçaya böl.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "Çevreyi yalnızca iki parçaya böldün. Karenin dört eş kenarı vardır.",
  "Obvod trojuholníka je súčet jeho troch strán.": "Üçgenin çevresi, üç kenarının toplamıdır.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "Bir karenin çevresi ${@0}\\,\\text{cm}$. Bir kenarı kaç cm'dir?",
  "Obvod: koľko je ${@0} + {@1}$?": "Çevre: ${@0} + {@1}$ kaçtır?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "Çevreden bilinen iki kenarı çıkar, kalanı ikiye böl.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "{@0} ile {@1} arası {@2} dakika, {@3} ile {@4} arası da {@5} dakika. Toplam ${@6} + {@7} = {@8}$ dakika.",
  "Od {@0} do {@1} je {@2} minút.": "{@0} ile {@1} arası {@2} dakika.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "Yüzlükleri, onlukları ve birlikleri sırayla çıkar. Sonucu toplama ile kontrol et.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "Yalnızca bir şeyin fiyatını çıkardın. {@0} şey alındı, önce hepsinin fiyatını hesapla.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "{@0} cm'lik kenarı yalnızca bir kez çıkardın. Dikdörtgenin böyle iki kenarı var.",
  "Pi": "Cum",
  "Platil": "ödedi",
  "Platila": "ödedi",
  "Po": "Pzt",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "İnenlerden sonra: ${@0} - {@1} = {@2}$. Binenlerden sonra: ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "İpucu: $5 \\cdot {@0} = {@1}$ ve {@2} kez daha {@3}, yani ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "Soldan başlayarak karşılaştır: önce yüzlükleri, sonra onlukları, sonra birlikleri.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "Sonra {@0} kısmını çıkar: ${@1} - {@2}$ kaçtır?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "Sonra {@0} kısmını ekle: ${@1} + {@2}$ kaçtır?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "Önce tam saate kadar olan dakikaları, sonra ondan sonraki dakikaları say.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "Soldan hesapla: ${@0} - {@1}$ kaçtır?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "100 ile hesapladın. Zamanda $1\\,\\text{{@0}} = {@1}$ geçerlidir.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "Soldan sağa doğru hesapladın. Bölme, çıkarmadan önce gelir: önce ${@0} : {@1}$ işlemini yap.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "Soldan sağa doğru hesapladın. Çarpma önce gelir: önce ${@0} \\cdot {@1}$ işlemini yap.",
  "Predané zmrzliny": "Satılan dondurmalar",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "Önceki basamaklar aynı, {@0} basamağı belirler: {@1} ve {@2}. Bu yüzden ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "O şeyi gözünün önüne getir. Küçük mü, büyük mü? Kısa mı sürer, uzun mu?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "Çevir: ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "Çevir: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "Okunan sayfalar",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "Fazladan olanları ekle: ${@0} + {@1}$ kaçtır?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "Yüzlükleri, onlukları ve birlikleri sırayla ekle ya da alt alta yazarak topla.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "Kalanı ekle: ${@0} + {@1}$ kaçtır?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "{@0} gününü ekle: ${@1} + {@2}$ kaçtır?",
  "Písomné sčítanie 347 plus 285": "347 artı 285 alt alta toplama",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "{@0} basamağı belirler: {@1} ve {@2}. Bu yüzden ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "Tam yüzlüklerle birlikler gibi hesap yap: 4 yüzlük + 3 yüzlük = 7 yüzlük.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "{@0} sayısının bir katı kadar aşağıdasın. {@1} sayısını kaç kez eklediğini kontrol et.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "{@0} sayısının bir katı kadar yukarıdasın. {@1} sayısını kaç kez eklediğini kontrol et.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "İki tarafı da kontrol et: solda önce parantezi, sağda önce çarpmayı hesapla.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "$1\\,\\text{{@1}}$ kaç {@0} eder, hatırla.",
  "St": "Çar",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "Yüzlükleri ilk basamağa, onlukları ikinciye, birlikleri üçüncüye yaz. Eksik olan varsa 0 yaz.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "Yüzlükler soldan ilk rakam, birlikler son rakamdır.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "Kenarı kendisiyle çarptın. Çevre, dört kenarın toplamıdır.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "Kenarları çarptın. Çevre, şeklin etrafındaki çizginin uzunluğudur – kenarlar toplanmalı.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "İki taraf benziyor ama parantez işlem sırasını değiştirir. İki tarafı ayrı ayrı hesapla.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "Pazartesi ve salıyı topla: ${@0} + {@1}$ kaçtır?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "Bütün sayıları topla. Önce toplamı yuvarlak sayı eden ikilileri bulursan kolaylaşır.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "Yalnızca iki kenarı topladın. Dikdörtgenin dört kenarı var – her uzunluğu iki kez ekle.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "Problemdeki sayıları topladın. {@0} ve {@1} çocukların elindeki sayılar değil, bir çocuğun ne kadar fazla ya da az olduğunu gösterir. Önce her çocuğun elinde kaç tane olduğunu bul.",
  "Tabuľka násobilky do 10 krát 10": "10 × 10'a kadar çarpım tablosu",
  "Taška zemiakov váži 5 …": "Bir torba patates 5 … gelir.",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "Şimdi tamamla: ${@0} {@1} {@2}$ kaçtır?",
  "Tlesknutie trvá asi 1 …": "Bir el çırpma yaklaşık 1 … sürer.",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "Bu, alışverişin tamamının tutarı. Banknottan kaç avro para üstü verildiğini de bul.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "Bu yalnızca paketlerdeki sayı. Fazladan olan {@0} taneyi de ekle.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "Bu, kalan iki kenarın toplamı. Bunu ikiye de böl.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "Bu kadarı yalnızca {@0}'in elinde var. Üç çocuğun elinde toplam kaç tane olduğu soruluyor.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "Bahçıvan bu kadar fidan dikti. Kuruyan fidanları da çıkar.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "Bir üçgenin kenarları ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ ve ${@2}\\,\\text{cm}$. Çevresi kaç cm'dir?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "Antrenmanın başlangıç saati {@0}, bitiş saati {@1}. Antrenman kaç dakika sürdü?",
  "Upečené koláče": "Pişirilen kekler",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "Kuruyan fidanlar azaldı, bu yüzden onları ekleme, çıkar.",
  "Ut": "Sal",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "Bir otobüste {@0} kişi oturuyordu. Durakta {@1} kişi indi ve {@2} kişi bindi. Şimdi otobüste kaç kişi var?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "Paketlerde: ${@0} \\cdot {@1} = {@2}$. Toplam: ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "Pastanede kaç dondurma satıldığını not ettiler.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "Bir sütunda büyük rakam alttayken küçük rakamı büyükten çıkardın. Böyle durumda yandaki sütundan bir onluk ödünç almalısın.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "Fırında kaç kek pişirildiğini not ettiler.",
  "V piatok": "cuma",
  "V pondelok": "pazartesi",
  "V stredu": "çarşamba",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "Bu günde en küçük sayı var. En büyüğünü arıyoruz.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "Bu günde en büyük sayı var. En küçüğünü arıyoruz.",
  "V utorok": "salı",
  "Vo vedre je 10 …": "Kovada 10 … var.",
  "Vo štvrtok": "perşembe",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "Kalanlı böl: ${@0} : {@1}$. Bölümü ve kalanı noktalı virgülle ayırarak yaz (örneğin 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "$({@0} + {@1}) : {@2}$ işlemini yap.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "$({@0} {@1} {@2}) \\cdot {@3}$ işlemini yap.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "${@0} - ({@1} - {@2})$ işlemini yap.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "${@0} - {@1} - {@2}$ işlemini yap.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "${@0} \\cdot {@1} - {@2} : {@3}$ işlemini yap.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "${@0} {@1} {@2} \\cdot {@3}$ işlemini yap.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "Önce ${@0} \\cdot {@1}$ işlemini yap, sonra sonuna bir sıfır ekle.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "İki tarafı ayrı ayrı hesapla. Solda paranteze, sağda çarpmaya başla.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "Dikdörtgenin çevresini hesapla (cm olarak).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "İnenler → çıkar. Binenler → ekle.",
  "Vyučovacia hodina trvá 45 …": "Bir ders saati 45 … sürer.",
  "Vzdialenosť medzi dvoma mestami je 40 …": "İki şehir arasındaki uzaklık 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "Sol: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Sağ: ${@6} + {@7} = {@8}$. Bu yüzden ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "Bölmeyi unuttun. {@0} sayısından {@1} sayısını değil, ${@2} : {@3}$ işleminin sonucunu çıkarmalısın.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "Onlar basamağındaki sıfırı unuttun. O olmadan rakamlar kayar ve başka bir sayı oluşur.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "Eldeyi unuttun. Bir sütunun toplamı 10 ya da daha fazlaysa yalnızca birlikleri yaz, 1'i soldaki sütuna ekle.",
  "Zabudol si pripočítať ešte ${@0}$.": "${@0}$ eklemeyi de unuttun.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "Yalnızca iki kenarı saydın. Karenin dört kenarı vardır ve hepsi aynı uzunluktadır.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "Dikilen: ${@0} \\cdot {@1} = {@2}$. Kalan: ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "Yan yana iki sayının ne kadar farklı olduğunu bul.",
  "Zmení sa počet desiatok.": "Onlukların sayısı değişir.",
  "Zmení sa počet stoviek.": "Yüzlüklerin sayısı değişir.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "İşaret ters çevrilmiş. Soldan başlayarak karşılaştır – sayıların farklı olduğu ilk basamak belirler ({@0} basamağı).",
  "Zošit je dlhý asi 30 …": "Bir defterin uzunluğu yaklaşık 30 …",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "Zeynep bir kitabın kaç sayfasını okuduğunu not etti.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "Kalan ${@0} - {@1}$. Bölümü ve kalanı noktalı virgülle ayırarak yaz.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "{@0} kalanı, {@1} bölenden büyük; yani {@2}, {@3} içine bir kez daha sığar. Kalan her zaman bölenden küçük olmalıdır.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "Bahçıvan her birinde {@2} {@3} olan {@0} {@1} dikti. {@4} {@5}. Kaç fidan kaldı?",
  "balíčkov": "paket",
  "balíčky": "paket",
  "deň": "gün",
  "gaštan": "kestane",
  "gaštanov": "kestane",
  "gaštany": "kestane",
  "kartičiek": "kart",
  "kartičku": "kart",
  "kartičky": "kart",
  "knihy": "kitap",
  "kníh": "kitap",
  "koláče": "kek",
  "koláčov": "kek",
  "lopty": "top",
  "lôpt": "top",
  "orech": "ceviz",
  "perá": "kalem",
  "piatok": "cuma",
  "pier": "kalem",
  "podiel; zvyšok": "bölüm; kalan",
  "pondelok": "pazartesi",
  "predali": "satıldı",
  "prečítala Zuzka": "okundu",
  "radov": "sıra",
  "rady": "sıra",
  "stoviek": "yüzlük",
  "stovku": "yüzlük",
  "stovky": "yüzlük",
  "strany": "sayfa",
  "streda": "çarşamba",
  "stredu": "çarşamba",
  "stromček uschol": "fidan kurudu",
  "stromčekov": "fidan",
  "stromčekov uschlo": "fidan kurudu",
  "stromčeky": "fidan",
  "stromčeky uschli": "fidan kurudu",
  "strán": "sayfa",
  "upiekli v pekárni": "pişirildi",
  "utorok": "salı",
  "v piatok": "cuma",
  "v pondelok": "pazartesi",
  "v stredu": "çarşamba",
  "v utorok": "salı",
  "vo štvrtok": "perşembe",
  "zmrzliny": "dondurma",
  "zmrzlín": "dondurma",
  "zošitov": "defter",
  "zošity": "defter",
  "{@0} je v údajoch číslo {@1}.": "{@0} günü verilerde {@1} sayısı var.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0}'in elinde {@3}'in değil, {@2}'in elindekinden {@1} eksik var. Kimden çıkardığını kontrol et.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0}'in elinde her birinde {@3} {@4} olan {@1} {@2} ve fazladan {@5} {@6} var. Toplam kaç {@7} var?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0}'in elinde {@1} {@2} var. {@3}'in elinde {@5}'in elindekinden {@4} fazla, {@6}'in elinde ise {@8}'in elindekinden {@7} eksik var. Hepsinin elinde toplam kaç {@9} var?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@0} {@1} kere {@2}, {@3} {@4} eder: ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0}, tanesi {@4} € olan {@2} {@3} {@1}. {@6} €'luk banknotla {@5}. Kaç avro para üstü aldı?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Toplam: ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}Beş günün tamamında toplam kaç {@1} {@2}?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}Verilere göre {@3} günü kaç {@1} {@2}?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}Verilere göre {@3} günü, {@4} gününe göre kaç {@1} daha fazla {@2}?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}Hangi gün en az {@2} {@1}?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}Hangi gün en çok {@2} {@1}?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "Zamanları sıradan sayılar gibi çıkardın. Bir saat yalnızca 60 dakikadır – önce tam saate kadar say.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "Önce hangisini hesaplarsın? ${@0} \\cdot {@1}$ işlemini yap.",
  "Číselný rad od 0 do 1000": "0'dan 1000'e kadar sayı doğrusu",
  "Čísla klesajú vždy o {@0}: {@1}.": "Sayılar her seferinde {@0} azalıyor: {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "Sayıları hemen toplama. Önce ${@0}$ değerini daha küçük birim olan $\\text{{@1}}$ birimine çevir.",
  "Čísla rastú vždy o {@0}: {@1}.": "Sayılar her seferinde {@0} artıyor: {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "Sayıları yalnızca topladın. {@0} kez {@1}, çarpma demektir.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "{@0} sayısında {@1} {@2} var. O hâlde ${@3} \\cdot {@4}$ kaçtır?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "{@0} sayısını {@1} şeklinde ayırırız: {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "Ters taraftan okudun. Birlikler sağdaki son rakamdır.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "Ters taraftan okudun. Yüzlükler soldan ilk rakamdır.",
  "čokolád": "çikolata",
  "čokolády": "çikolata",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "Binen kişiler otobüse eklendi. Onların sayısını ekle, çıkarma.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "İnen kişiler otobüsten ayrıldı. Onların sayısını çıkar, ekleme.",
  "Št": "Per",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "Karenin 4 eş kenarı vardır: ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "Bir karenin bir kenarı ${@0}\\,\\text{cm}$. Çevresi kaç cm'dir?",
  "štvrtok": "perşembe",
  "„O koľko viac“ zistíš odčítaním.": "“Kaç fazla” sorusunu çıkarma ile bulursun."
 }
});
