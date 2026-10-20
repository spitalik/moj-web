/* Türkçe: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/r5/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "r5-prirodzene": {
   "title": "Doğal sayılar ve özellikleri",
   "summary": "Büyük sayıların bölükleri ve basamakları, karşılaştırma, tek ve çift sayılar.",
   "theory": [
    "<p><strong>Doğal sayılar</strong> $1, 2, 3, 4, \\dots$ sayılarıdır – nesneleri saymak için kullandığımız sayılar. En küçük doğal sayı\n       1'dir, en büyüğü yoktur: her sayıya 1 ekleyerek onun <strong>ardılını</strong> elde ederiz.\n       1 eksiği ise <strong>öncülüdür</strong>.</p>",
    "<p>Büyük bir sayının rakamlarını sağdan üçerli <strong>bölüklere</strong> ayırırız: birler, binler, milyonlar.\n       Her bölükte yüzler, onlar ve birler basamağı vardır. Bir rakamın basamak değeri, bulunduğu yere bağlıdır.</p>",
    {
     "fig": "r5-triedy",
     "caption": "$3\\,042\\,705$ sayısında 4 rakamının basamak değeri $40\\,000$'dir, çünkü on binler basamağındadır."
    },
    "<p><strong>Çift sayılar</strong> ikiye tam bölünür ve 0, 2, 4, 6 veya 8 rakamıyla biter. Diğer sayılar\n       <strong>tek sayılardır</strong> – 1, 3, 5, 7 veya 9 rakamıyla biterler. Bir sayının tek mi çift mi olduğuna yalnızca son rakamı karar verir.</p>"
   ],
   "examples": [
    {
     "task": "5, 0, 8, 2 rakamlarıyla (her birini bir kez kullanarak) en büyük ve en küçük dört basamaklı sayıyı yaz.",
     "steps": [
      "En büyük: rakamları büyükten küçüğe sıralarız: $8\\,520$.",
      "En küçük: küçükten büyüğe sıralarız, ama başa 0 gelemez: $2\\,058$."
     ]
    },
    {
     "task": "$499\\,999$ sayısının ardılı ve öncülü nedir?",
     "steps": [
      "Ardılı: $499\\,999 + 1 = 500\\,000$.",
      "Öncülü: $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "Sayıları yuvarlama",
   "summary": "Onluğa, yüzlüğe ve binliğe yuvarlama, sonucu tahmin etme.",
   "theory": [
    "<p><strong>Yuvarlamada</strong> sayının yerine ona en yakın “yuvarlak” sayıyı yazarız. Bunu $\\doteq$ işaretiyle gösteririz\n       (“yaklaşık olarak eşittir” diye okunur): $3\\,467 \\doteq 3\\,470$ (onluğa).</p>",
    "<p><strong>Kural:</strong> yuvarladığımız basamağın <em>hemen sağındaki</em> rakama bakarız.\n       Bu rakam 0, 1, 2, 3 veya 4 ise <strong>aşağı</strong> yuvarlarız. 5, 6, 7, 8 veya 9 ise <strong>yukarı</strong> yuvarlarız.\n       Sağdaki rakamların yerine sıfır yazarız.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "Sayıyı kaydır ve en yakın onluğun (yeşil nokta) ve en yakın yüzlüğün (yay) hangisi olduğunu izle."
    },
    "<p><strong>Tahmin:</strong> tam hesaplamadan önce sayıları yuvarlayıp sonucu tahmin edebiliriz.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. Tahmin, hesaplamadaki bir hatayı fark etmemize yardım eder.</p>"
   ],
   "examples": [
    {
     "task": "$72\\,649$ sayısını yüzlüğe yuvarla.",
     "steps": [
      "Yüzler basamağında 6, hemen sağında 4 vardır.",
      "4, 5'ten küçüktür, aşağı yuvarlarız: yüzler basamağı 6 olarak kalır.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "$5\\,962$ sayısını onluğa yuvarla.",
     "steps": [
      "Onlar basamağında 6, sağında 2 vardır – aşağı yuvarlarız.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "Yüzlüğe yuvarlasaydık $6\\,000$ olurdu, çünkü yüzlerin sağında 6 vardır."
     ]
    }
   ]
  },
  "r5-rimske": {
   "title": "Romen rakamları",
   "summary": "Büyük sayıları ve yılları yazma, çıkarma kuralları, iki yönlü dönüşüm.",
   "theory": [
    "<p>Romen rakamları: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. Bunlarla genellikle yazılan en büyük sayı $3\\,999 = \\text{MMMCMXCIX}$'dur.</p>",
    "<p><strong>Yazım kuralları:</strong></p>\n       <ol><li>Sembolleri büyükten küçüğe yazar ve değerlerini toplarız: $\\text{MDCLX} = 1\\,660$.</li>\n       <li>I, X, C, M sembolleri art arda en fazla üç kez yazılabilir. V, L, D tekrarlanmaz.</li>\n       <li>Büyük sembolün önündeki küçük sembolü çıkarırız. Bu yalnızca I, X veya C olabilir ve yalnızca en yakın iki büyük sembolün önünde durabilir.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "Çıkarma yapılan altı ikili. Başka ikililer (örneğin IL veya IC) yanlıştır."
    },
    "<p><strong>Romen rakamlarına dönüştürmeyi</strong> basamak basamak yaparız: binler, yüzler, onlar, birler.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "$2\\,026$ yılını Romen rakamlarıyla yaz.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "$\\text{CDXLIX}$ hangi sayıdır?",
     "steps": [
      "Gruplara ayırırız: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "Dikkat: 49, IL değil XLIX olarak yazılır.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "Dört işlem ve işlem önceliği",
   "summary": "Toplama, çıkarma, çarpma, bölme, parantezler ve kolay yoldan hesaplama.",
   "theory": [
    "<p>Bir ifadeyi hesaplarken <strong>işlem önceliğine</strong> uyarız: önce parantezler, sonra çarpma ve bölme\n       (soldan sağa), en son toplama ve çıkarma (soldan sağa).</p>",
    {
     "fig": "r5-poradie",
     "caption": "İşlem önceliği. Aynı düzeydeki işlemleri soldan sağa yaparız."
    },
    "<p><strong>Kolay yoldan hesaplama:</strong> toplama ve çarpmada sayıların yerini değiştirebilir ve onları farklı gruplayabiliriz:\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       Dağılma özelliği de yardımcı olur: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>Terimlerin adları:</strong> toplanan + toplanan = toplam, eksilen − çıkan = fark, çarpan · çarpan = çarpım,\n       bölünen : bölen = bölüm. Bilinmeyen terimi ters işlemle buluruz: $\\square\\cdot 8 = 96$ ise $\\square = 96 : 8 = 12$.</p>"
   ],
   "examples": [
    {
     "task": "$120 - 6\\cdot(14 - 5)$ işlemini yap.",
     "steps": [
      "Parantez: $14 - 5 = 9$.",
      "Çarpma: $6\\cdot 9 = 54$.",
      "Çıkarma: $120 - 54 = 66$.",
      "<strong>Sonuç: 66</strong>"
     ]
    },
    {
     "task": "$5\\cdot 63\\cdot 20$ işlemini kolay yoldan yap.",
     "steps": [
      "$5\\cdot 20 = 100$ olarak birleştiririz.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>Sonuç: $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "Katlar ve bölenler",
   "summary": "Bir sayının katı ve böleni nedir, nasıl bulunur; 2, 3, 5 ve 10 ile bölünebilme kuralları.",
   "theory": [
    "<p>Bir sayının <strong>katlarını</strong>, onu $1, 2, 3, \\dots$ sayılarıyla çarparak buluruz. 6'nın katları\n       $6, 12, 18, 24, \\dots$'tür – sonsuz tane vardır.</p>",
    "<p>Bir sayının <strong>böleni</strong>, onu kalansız bölen sayıdır. 12'nin bölenleri $1, 2, 3, 4, 6, 12$'dir.\n       Onları ikili olarak ararız: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. 1 ve sayının kendisi her zaman bölendir.</p>",
    {
     "fig": "r5-delitele",
     "caption": "12 noktayı $1\\cdot 12$, $2\\cdot 6$ ve $3\\cdot 4$ dikdörtgenleri biçiminde dizebiliriz. Boyutlar 12'nin bölenleridir."
    },
    "<p><strong>Bölünebilme kuralları:</strong> bir sayı 0, 2, 4, 6, 8 ile bitiyorsa <strong>2</strong> ile;\n       0 veya 5 ile bitiyorsa <strong>5</strong> ile; 0 ile bitiyorsa <strong>10</strong> ile; rakamları toplamı\n       üçe bölünüyorsa <strong>3</strong> ile tam bölünür.</p>"
   ],
   "examples": [
    {
     "task": "18'in bütün bölenlerini bul.",
     "steps": [
      "İkilileri ararız: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4 ve 5 bölen değildir, sonrasında ikililer tekrarlanır.",
      "<strong>Bölenler: 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "$4\\,215$ sayısı üçe tam bölünür mü?",
     "steps": [
      "Rakamları toplamı: $4 + 2 + 1 + 5 = 12$.",
      "12 üçe tam bölünür.",
      "<strong>Evet, $4\\,215$ üçe tam bölünür.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "Kesirler – temel kavramlar",
   "summary": "Bütünün parçası, pay ve payda, bir sayının kesir kadarı, kesirleri karşılaştırma.",
   "theory": [
    "<p>Bir bütünü <strong>eşit</strong> parçalara böldüğümüzde bir parça onun bir kısmıdır: yarım $\\frac{1}{2}$,\n       üçte bir $\\frac{1}{3}$, dörtte bir $\\frac{1}{4}$… $\\frac{3}{8}$ kesri şu demektir: bütünü 8 eşit parçaya böler ve 3'ünü alırız.</p>",
    "<p>Kesir çizgisinin altındaki sayı <strong>paydadır</strong> – bütünü kaç parçaya böldüğümüzü söyler.\n       Çizginin üstündeki sayı <strong>paydır</strong> – kaç parça aldığımızı söyler.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "Bir pastanın $\\frac{1}{2}$, $\\frac{1}{4}$ ve $\\frac{3}{8}$'i ile bir şeridin $\\frac{2}{5}$'i."
    },
    "<p><strong>Bir sayının kesir kadarı:</strong> 20'nin $\\frac{3}{4}$'ünü bulmak için 20'yi paydaya böleriz ($20 : 4 = 5$, bu dörtte birdir)\n       ve payla çarparız ($5\\cdot 3 = 15$).<br>\n       <strong>Karşılaştırma:</strong> paydaları eşit kesirlerden payı büyük olan daha büyüktür: $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       Payları eşit kesirlerden paydası küçük olan daha büyüktür: $\\frac{1}{3} &gt; \\frac{1}{5}$ (üçte bir, beşte birden daha büyük bir parçadır).</p>"
   ],
   "examples": [
    {
     "task": "35'in $\\frac{2}{5}$'i kaçtır?",
     "steps": [
      "Beşte biri: $35 : 5 = 7$.",
      "Beşte ikisi: $7\\cdot 2 = 14$.",
      "<strong>35'in $\\frac{2}{5}$'i 14'tür.</strong>"
     ]
    },
    {
     "task": "Bir yolun üçte biri 4 km'dir. Yolun tamamı kaç km'dir?",
     "steps": [
      "Yolun tamamı 3 tane üçte birden oluşur.",
      "$3\\cdot 4 = 12$.",
      "<strong>Yolun tamamı 12 km'dir.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "Temel geometrik şekiller",
   "summary": "Nokta, doğru, ışın, doğru parçası, çember ve daire.",
   "theory": [
    "<p><strong>Noktayı</strong> büyük harfle gösteririz (A, B, S). İki farklı noktadan yalnızca bir <strong>doğru</strong> geçer –\n       doğru düzdür, başı ve sonu yoktur. Küçük harfle ($p$) veya iki noktayla ($AB$ doğrusu) gösterilir.</p>",
    "<p><strong>Işının</strong> başlangıcı vardır ama sonu yoktur: $AB$ ışını A noktasında başlar ve B noktasından geçerek devam eder.\n       $AB$ <strong>doğru parçası</strong>, doğrunun A ile B noktaları arasındaki kısmıdır; iki uç noktası vardır ve ölçülebilir.</p>",
    {
     "fig": "r5-utvary",
     "caption": "Kesikli çizgi, çizginin sonsuza kadar devam ettiğini gösterir. Sağda merkezi S, yarıçapı r ve çapı d olan çember."
    },
    "<p><strong>Çember</strong>, bütün noktaları S merkezine eşit uzaklıkta olan çizgidir – bu uzaklık <strong>yarıçaptır</strong> ($r$).\n       <strong>Çap</strong> ($d$) merkezden geçer ve iki kat uzundur: $d = 2\\cdot r$. <strong>Daire</strong>, çemberin iç bölgesiyle birlikte oluşturduğu şekildir.</p>"
   ],
   "examples": [
    {
     "task": "Bir çemberin çapı 14 cm'dir. Yarıçapı kaç cm'dir?",
     "steps": [
      "Yarıçap, çapın yarısıdır.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Herhangi üçü aynı doğru üzerinde olmayan 4 nokta kaç doğru parçası belirler?",
     "steps": [
      "A, B, C, D noktaları. Her birini diğerleriyle birleştiririz: AB, AC, AD, BC, BD, CD.",
      "<strong>6 tane vardır.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "Kare, dikdörtgen ve üçgenin çevresi",
   "summary": "Çevre hesaplama, eksik kenarı bulma ve farklı birimlerle hesaplama.",
   "theory": [
    "<p>Bir çokgenin <strong>çevresi</strong>, bütün kenar uzunluklarının toplamıdır. $o$ ile gösterilir.</p>",
    {
     "fig": "r5-obvod",
     "caption": "Kare, dikdörtgen ve üçgenin çevre formülleri."
    },
    "<p><strong>Kare:</strong> $o = 4\\cdot a$. <strong>Dikdörtgen:</strong> $o = 2\\cdot(a + b)$.\n       <strong>Üçgen:</strong> $o = a + b + c$; eşkenar üçgende $o = 3\\cdot a$.</p>",
    "<p>Toplamadan önce bütün uzunluklar <strong>aynı birimde</strong> olmalıdır. Bir dikdörtgenin kenarları $3\\,\\text{dm}$ ve $12\\,\\text{cm}$ ise\n       önce $3\\,\\text{dm} = 30\\,\\text{cm}$ olarak çeviririz, sonra $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$.</p>"
   ],
   "examples": [
    {
     "task": "Bir üçgenin kenarları 7 cm, 9 cm ve 12 cm'dir. Çevresini hesapla.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "Bir dikdörtgenin çevresi 50 m, bir kenarı 15 m'dir. Diğer kenarı kaç m'dir?",
     "steps": [
      "Çevrenin yarısı $a + b = 50 : 2 = 25$'tir.",
      "$b = 25 - 15 = 10$.",
      "<strong>Diğer kenar $10\\,\\text{m}$'dir.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "Uzunluk, kütle, hacim ve zaman birimleri",
   "summary": "Birim dönüşümleri, bileşik ölçüler ve uygun birimi seçme.",
   "theory": [
    "<p><strong>Uzunluk:</strong> km, m, dm, cm, mm. <strong>Kütle:</strong> t, kg, dag, g.\n       <strong>Hacim:</strong> hl, l, dl, ml. <strong>Zaman:</strong> gün, saat (h), dakika (min), saniye (s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "Birim merdivenleri. Ok, bir büyük birimin kaç küçük birime eşit olduğunu gösterir."
    },
    "<p><strong>Daha küçük birime</strong> çevirirken çarparız: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>Daha büyük birime</strong> çevirirken böleriz: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       Bileşik bir ölçüyü parça parça çeviririz: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>Zamanda dikkat: burada “on” değil <strong>60</strong> geçerlidir (bir saat 60 dakika, bir dakika 60 saniyedir) ve bir gün <strong>24</strong> saattir.</p>"
   ],
   "examples": [
    {
     "task": "$3\\,\\text{l}\\ 4\\,\\text{dl}$'yi desilitreye çevir.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "Film 18:40'ta başladı ve 20:15'te bitti. Film kaç dakika sürdü?",
     "steps": [
      "18:40'tan 19:00'a kadar 20 dakika vardır.",
      "19:00'dan 20:00'ye kadar 60 dakika, 20:00'den 20:15'e kadar 15 dakika vardır.",
      "$20 + 60 + 15 = 95$.",
      "<strong>Film 95 dakika sürdü.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "Problem çözme",
   "summary": "Çok adımlı problemler, bütünün parçaları, toplam ve fark, yukarı yuvarlama.",
   "theory": [
    "<p>Bir problemi çözerken: <strong>1.</strong> problemi oku, neyi bildiğini ve neyi aradığını yaz; <strong>2.</strong> hangi sırayla\n       hesaplayacağını düşün; <strong>3.</strong> hesapla; <strong>4.</strong> sağlama veya tahmin yap;\n       <strong>5.</strong> cevabı tam bir cümleyle yaz.</p>",
    "<p><strong>Şerit modeli</strong>, toplam ve fark problemlerinde yardımcı olur. İki kişinin toplam 50 €'su varsa ve birinin 8 € fazlası varsa\n       önce farkı çıkarırız – o zaman ikisinin parası eşit olur.</p>",
    {
     "fig": "r5-model",
     "caption": "Şerit modeli: $50 - 8 = 42$, $42 : 2 = 21$. Küçük olanın 21 €'su, büyük olanın $21 + 8 = 29$ €'su vardır."
    },
    "<p><strong>Kalana</strong> dikkat: 23 çocuk arabalara binecekse ve bir arabaya 4 çocuk sığıyorsa $23 : 4 = 5$ (kalan 3) araba yetmez.\n       Kalan 3 çocuk için bir araba daha gerekir, bu yüzden 6 araba lazımdır.</p>"
   ],
   "examples": [
    {
     "task": "Ayşe'nin 120 avrosu vardı. Üçte birini ayakkabıya, 25 avroyu kitaplara harcadı. Geriye kaç avrosu kaldı?",
     "steps": [
      "120'nin üçte biri: $120 : 3 = 40$ avro.",
      "Toplam harcama: $40 + 25 = 65$ avro.",
      "Kalan: $120 - 65 = 55$ avro.",
      "<strong>Cevap: Ayşe'nin 55 avrosu kaldı.</strong>"
     ]
    },
    {
     "task": "Babası 42 yaşındadır ve oğlunun yaşının üç katıdır. 6 yıl sonra oğlu kaç yaşında olacak?",
     "steps": [
      "Oğlu şimdi $42 : 3 = 14$ yaşındadır.",
      "6 yıl sonra: $14 + 6 = 20$.",
      "<strong>Cevap: Oğlu 20 yaşında olacak.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$, bu yüzden sonuç $1\\,000\\cdot {@0} = {@1}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, bu yüzden ${@3} : {@4} = {@5}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, bu yüzden ${@3}\\cdot {@4} = {@5}$.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$, bu yüzden $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Toplam: ${@4} + {@5} = {@6}$ (Roma rakamlarıyla {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$, bu yüzden $b = {@2} - {@3} = {@4}$, diğer kenar ${@5}\\,\\text{{@6}}$.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$, kenar ${@2}\\,\\text{{@3}}$.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$, üçüncü kenar ${@4}\\,\\text{{@5}}$.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, çap ${@2}\\,\\text{{@3}}$.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$, çevre ${@4}\\,\\text{{@5}}$.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$, çevre ${@3}\\,\\text{{@4}}$.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$, yarıçap ${@2}\\,\\text{{@3}}$.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (bu ${@3}$), sonra ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, kalan {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. Diğer sayılar {@3} ile bölündüğünde kalan verir.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Tahmin: ${@4} {@5} {@6} = {@7}$. (Tam sonuç ${@8}$.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "{@1} sayısının ${@0}$ kadarı ${@2} : {@3} = {@4}$. ${@5}$ kadarı ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ ve kalanı ekleriz: ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4: aşağı, 5 – 9: yukarı. Sağdaki rakamları sıfır yap.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = üç milyon kırk iki bin yedi yüz beş",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (onluğa)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (yüzlüğe)</span>",
  "Aké číslo je $\\text{{@0}}$?": "$\\text{{@0}}$ hangi sayıdır?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "$\\text{{@0}}$ grubunun değeri nedir?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "${@1}$ sayısında {@0} rakamının değeri nedir?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "Bütünün ne kadarını boyalı parçalar oluşturur? a/b biçiminde kesirle yaz (örneğin 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "Dikdörtgenin çevresi nedir ({@0} cinsinden)?",
  "Aký je obvod obdĺžnika v centimetroch?": "Dikdörtgenin çevresi kaç santimetredir?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "8 €'luk fark olmasaydı ikisinde de eşit para olurdu: (50 − 8) : 2 = 21 €.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "Fark olmadan: ${@0} - {@1} = {@2}$, bu küçük kardeşin parasının iki katı: ${@3} : 2 = {@4}$. {@5} Kontrol: ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "Noktalar {@0}. Doğru parçaları: {@1}. Toplam {@2}.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "Bütün {@0} {@1} bölünmüş (payda), {@2} (pay): ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "Bütünde böyle {@0} {@1} var: ${@2}\\cdot {@3} = {@4}$, yani ${@5}\\,\\text{{@6}}$.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "Bütün {@0} eş parçadan oluşur. Çarp.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "Bratislava'dan Koşice'ye trenle yolculuk yaklaşık",
  "Cez dva body vieme viesť jedinú priamku.": "İki noktadan tek bir doğru geçirebiliriz.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "Rakamlar toplamı: ${@0} = {@1}$, 3 ile bölünür.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "Rakamlar toplamı: ${@0} = {@1}$, 3 ile bölünmez.",
  "Desatina": "Onda bir",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "Bir gün 24 saattir: ${@0}\\cdot 24 = {@1}$, bir de ${@2} + {@3} = {@4}$ saat.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "Günleri ve saatleri öylece toplayamazsın. Önce {@0} {@1} değerini saate çevir.",
  "Do hrnčeka sa zmestí asi": "Bir fincana sığan miktar yaklaşık",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "Paydaya yalnızca boyalı olmayan parçaların değil, bütün parçaların sayısı yazılır.",
  "Do vane sa zmestí asi": "Bir küvete sığan miktar yaklaşık",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "{@1} {@0} kısmına ${@2}\\,\\text{{@3}}$ sığar. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "Eksik sayıyı bul: $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "Eksik sayıyı bul: $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "İkinci gün {@0} km değil, birinci günden {@1} km fazla yürüdüler.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "İkinci gün: ${@0} + {@1} = {@2}$ km. Üçüncü gün: ${@3} : 2 = {@4}$ km. Toplam: ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "İki kardeşin toplam {@0} {@1} parası var. Büyük kardeşin küçüğünden {@2} {@3} fazlası var. Peki {@4} kardeşin kaç avrosu var?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "Dikdörtgenler hâlinde dizilmiş on iki nokta",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "{@0} ikilisi kullanılamaz: yalnızca V ve X'ten önce I, L ve C'den önce X, D ve M'den önce C çıkarılabilir.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "İkililer: ${@0} = {@1}$. Bölenler: {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "İkililer: ${@0} = {@1}$. Bölenler: {@2}. Sayının yalnızca iki böleni var.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "İki farklı noktadan tam olarak bir doğru geçer.",
  "Dĺžka triedy je asi": "Bir sınıfın uzunluğu yaklaşık",
  "Hmotnosť jablka je asi": "Bir elmanın kütlesi yaklaşık",
  "Hmotnosť nákladného auta je asi": "Bir kamyonun kütlesi yaklaşık",
  "Hmotnosť žiaka 5. ročníka je asi": "5. sınıf öğrencisinin kütlesi yaklaşık",
  "Hrúbka zošita je asi": "Bir defterin kalınlığı yaklaşık",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "{@0} sayısının çarpım tablosunda {@1} sayısını geçmeyen son sonucu ara.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "{@0} sayıyı arıyorsun, sen ise {@1} sayıyı oluşturdun.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "Tam tersi: çap yarıçapın iki katıdır, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "${@0}$ sayısı {@1} ile bölünür mü?",
  "Je číslo ${@0}$ párne alebo nepárne?": "${@0}$ sayısı çift mi, tek mi?",
  "Jeden deň má 24 hodín.": "Bir gün 24 saattir.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "Bir parça {@0}. {@2} sayısının ${@1}$ kadarı kaçtır?",
  "Koľko eur je {@0} z {@1} eur?": "{@1} avronun {@0} kaç avrodur?",
  "Koľko eur má mladší brat?": "Küçük kardeşin kaç avrosu var?",
  "Koľko eur má starší brat?": "Büyük kardeşin kaç avrosu var?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "{@0} toplamından {@1} farkını çıkarırsan kaç avro kalır?",
  "Koľko eur {@0} spolu?": "Toplam kaç avro {@0}?",
  "Koľko eur {@0} zostalo?": "Şimdi {@0} kaç avro kaldı?",
  "Koľko gramov váži celý koláč?": "Bütün pasta kaç gram gelir?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "{@0} {@1} ve {@2} {@3} kaç saattir?",
  "Koľko hodín majú {@0} {@1}?": "{@0} {@1} kaç saattir?",
  "Koľko je ${@0}$ z čísla {@1}?": "{@1} sayısının ${@0}$ kadarı kaçtır?",
  "Koľko je polovica obvodu, teda $a + b$?": "Çevrenin yarısı, yani $a + b$ kaçtır?",
  "Koľko kilometrov meria celá cesta?": "Bütün yol kaç kilometredir?",
  "Koľko kilometrov prešli druhý deň?": "İkinci gün kaç kilometre yürüdüler?",
  "Koľko kilometrov prešli tretí deň?": "Üçüncü gün kaç kilometre yürüdüler?",
  "Koľko kilometrov prešli za tri dni spolu?": "Üç günde toplam kaç kilometre yürüdüler?",
  "Koľko litrov sa zmestí do celej nádrže?": "Bütün depoya kaç litre sığar?",
  "Koľko minút trvala celá cesta?": "Yolculuk toplam kaç dakika sürdü?",
  "Koľko minút uplynie od {@0} do {@1}?": "{@0} ile {@1} arasında kaç dakika geçer?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "1 ile {@1} arasında (ikisi de dahil) {@0} sayısının kaç katı vardır?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "{@1} {@2} sonra {@0} kaç yaşında olacak?",
  "Koľko rokov má {@0} teraz?": "Şimdi {@0} kaç yaşında?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Herhangi üçü aynı doğru üzerinde olmayan {@0} nokta kaç doğru parçası belirler? (Her iki noktayı bir doğru parçasıyla birleştiririz.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "Herhangi üçü aynı doğru üzerinde olmayan {@0} nokta kaç doğru parçası belirler? (Her iki noktayı bir doğru parçasıyla birleştiririz.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "{@1} elde etmek için {@0} sayısını kaç kez almak gerekir?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "Daire, çemberin iç kısmıyla birlikte tamamıdır.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "Çember yalnızca bir çizgidir, daire ise içindeki alanı da kapsar.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "Bir çemberin yarıçapı ${@0}\\,\\text{{@1}}$. Çapı nedir ({@2} cinsinden)?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "Bir çemberin çapı ${@0}\\,\\text{{@1}}$. Yarıçapı nedir ({@2} cinsinden)?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "${@0}$ sayısında {@1} basamağının hemen sağında hangi rakam var?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "Hangi iki sayının toplamı $1\\,000$ eder?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "Hangi iki sayı birlikte güzel bir çarpım olan 100'ü verir?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "{@1} basamağına yuvarlandığında ${@2}$ olan {@0} doğal sayı hangisidir?",
  "Ktoré z čísel je násobkom čísla {@0}?": "Bu sayılardan hangisi {@0} sayısının katıdır?",
  "Ktoré z čísel je {@0}?": "Bu sayılardan hangisi {@0}?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "{@0} sayısının {@1} sayısından büyük olmayan en büyük katı hangisidir?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "${@0}$ sayısının Roma rakamlarıyla doğru yazılışı hangisidir?",
  "Mama": "Anne",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "Paydalar eşit, pay belirler: ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "Daha küçük birime çeviriyorsun, bu yüzden çarp.",
  "Meníš na väčšiu jednotku, preto deľ.": "Daha büyük birime çeviriyorsun, bu yüzden böl.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "Çıkanı toplama ile bulamazsın. Eksilenden farkı çıkar.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "Çıkanı çıkarma ile buluruz: ${@0} - {@1} = {@2}$.",
  "Minul": "Harcadığı",
  "Minula": "Harcadığı",
  "Mladší má {@0} {@1}.": "Küçük kardeşin {@0} {@1} var.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "${@0}$ sayısına ${@1}$ (yukarı) ile ${@2}$ (aşağı) arasındaki sayılar yuvarlanır. {@3}: ${@4}$.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "Bir çiftlikte {@0} {@1} topladılar. Bir kutuya {@2} yumurta sığar. Bütün yumurtalar için kaç kutu gerekir?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "Küçük birime çevirirken çarparız, büyük birime çevirirken böleriz.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "Binler basamağına 0 olmayan en küçük rakamı koy.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "Geziye {@0} {@1} gidiyor. Bir kayığa {@3} {@4} {@2}. Bütün çocukların aynı anda binebilmesi için kaç kayık gerekir?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "Kalan için bir kutu daha gerekir, toplam {@0} {@1}.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "Kalan için bir kayık daha gerekir, toplam {@0} {@1}.",
  "Najmenšie": "En küçüğü",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "Önce tam saate kadar say, sonra kalanı ekle. Bir saat 60 dakikadır.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "Önce iki sayıyı da Arap rakamlarına çevir, sonra topla.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "Önce aynı birimler: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Sonra $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "Önce bütün paranın ilgili kısmını hesapla, sonra bütün harcamaları topla ve çıkar.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "Önce her sayıyı yüzlüğe yuvarla, ancak ondan sonra hesapla.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "Önce {@1} {@2} bilgisinden {@0} şimdiki yaşını bul, ancak ondan sonra {@3} ekle. {@5} {@6} sonra {@4} artık {@7} kat {@8} olmayacak.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "Önce bir parçanın ne kadar olduğunu bul (paydaya böl), sonra payla çarp.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "Önce çocuğun şimdi kaç yaşında olduğunu bul (bölme), sonra ekle.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "Önce parantez, sonra çarpma, en son çıkarma.",
  "Najväčšia číslica patrí na miesto tisícov.": "En büyük rakam binler basamağına gelir.",
  "Najväčšie": "En büyüğü",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "Bir doğru parçası modeli çiz. Toplamdan farkı çıkar – kalanı kardeşler eşit paylaşır.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "Yalnızca rakamın kendisini yazdın. Rakamın değeri bulunduğu basamağa bağlıdır – arkasına doğru sayıda sıfır ekle.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "{@0} sayısının bütün bölenlerini yaz. Bunları noktalı virgülle ayır.",
  "Napíš {@0} čísla ${@1}$.": "${@1}$ için {@0} yaz.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "Bir sonraki sayı 1 fazladır: ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "Bir sonraki sayı, 1 fazla olan sayıdır.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "Bilinmeyen bölüneni çarpma ile buluruz: ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "Bilinmeyen bölüneni bölme ile değil, çarpma ile bulursun: bölümü bölenle çarp.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "Bilinmeyen çarpanı bölme ile buluruz: ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "Bilinmeyen çarpanı çarpma ile değil, bölme ile bulursun: çarpımı bilinen çarpana böl.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "Bazı doğru parçalarını iki kez saydın. AB doğru parçası BA ile aynıdır – her nokta ikilisini yalnızca bir kez say.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "Yuvarladığın basamağı bul ve bir basamak sağa geç.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "Katlar: {@0}, {@1}, {@2}, …, {@3}. Sonuncusu ${@4}\\cdot {@5} = {@6}$, sonraki ${@7}$ ise {@8} sayısından büyük. Toplam {@9} tane.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "Dikdörtgenin iki çift eş kenarı vardır.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "Bir dikdörtgenin çevresi ${@0}\\,\\text{{@1}}$, bir kenarı ${@2}\\,\\text{{@3}}$. Diğer kenarı ne uzunluktadır ({@4} cinsinden)?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "Bir dikdörtgenin kenarları ${@0}\\,\\text{dm}$ ve ${@1}\\,\\text{cm}$. Çevresini santimetre cinsinden hesapla.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "Çevre, iki komşu kenarın toplamının iki katıdır.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "Dikdörtgenin çevresi $2\\cdot(a + b)$'dir.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "Çevre her kenarı iki kez içerir. Önce onu ikiye böl, ancak ondan sonra bilinen kenarı çıkar.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "Karenin, dikdörtgenin ve üçgenin çevresi",
  "Od obvodu odčítaj dĺžky známych strán.": "Çevreden bilinen kenarların uzunluklarını çıkar.",
  "Od obvodu {@0} odčítaj {@1}.": "{@0} çevresinden {@1} çıkar.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "Toplamdan farkı doğru çıkardın ama kalanı kardeşlerin iki eş parçaya bölmesi gerekiyor.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "{@0} toplamından bilinen {@1} kenarını çıkar.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "{@0} ile {@1} arası {@2} dk, {@3} ile {@4} arası {@5} dk. Toplam ${@6} + {@7} = {@8}$ dakika.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "{@0} ile {@1} arasında {@2} dakika geçti.",
  "Odčítaj": "Çıkar",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "Yalnızca bir kenarı çıkardın. Çevreden bilinen iki kenarı da çıkar.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "Yalnızca oyun için harcanan parayı çıkardın. Kitap için harcanan {@0} {@1} değerini de çıkarmayı unutma.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "Yalnızca kitap için harcanan parayı çıkardın. Oyun için harcanan miktarı da çıkar – bu, bütün paranın {@0}.",
  "Osmina": "Sekizde bir",
  "Otec": "Baba",
  "Podiel vynásob deliteľom.": "Bölümü bölenle çarp.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "Yarıçap çaptan kısadır, bu yüzden çapı ikiyle çarpmamalı, ikiye bölmelisin.",
  "Polovica": "1/2'si",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "Çevrenin yarısı iki komşu kenarın toplamıdır. Bundan bilinen kenarı da çıkar.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "Dikdörtgenin çevresinin yarısı iki komşu kenarın toplamıdır.",
  "Polovicu": "1/2'sini",
  "Polpriamka má jeden začiatočný bod.": "Işının bir başlangıç noktası vardır.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "Işın bir noktada başlar ve yalnızca bir yönde sonsuza kadar devam eder.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "Işın bir noktada başlar ve diğer yönde sonsuza kadar devam eder.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "Noktaları harflerle adlandır ve bütün ikilileri sırayla yaz: önce A noktasıyla, sonra B noktasıyla…",
  "Poradie operácií": "İşlem sırası",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "İlk farklı rakamı bulana kadar rakamları soldan karşılaştır.",
  "Posledná číslica je {@0}, je párna.": "Son rakam {@0}, çifttir.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "Son rakam {@0}, ne 0 ne de 5.",
  "Posledná číslica je {@0}, nie je 0.": "Son rakam {@0}, 0 değil.",
  "Posledná číslica je {@0}, nie je párna.": "Son rakam {@0}, çift değil.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "Son rakam {@0}, bu yüzden sayı {@1}.",
  "Posledná číslica je {@0}.": "Son rakam {@0}.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "Bütünün {@0} biliyorsun, yani bütün daha büyük. Parçayı bölmemeli, çarpmalısın.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "Dikkat, büyük payda büyük kesir demek değildir. Bütünü ne kadar çok parçaya bölersen parçalar o kadar küçük olur.",
  "Pozri sa iba na poslednú číslicu.": "Yalnızca son rakama bak.",
  "Pozri sa na poslednú číslicu.": "Son rakama bak.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Yuvarladığın basamağın hemen sağındaki rakama bak: 0 – 4 aşağı, 5 – 9 yukarı.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "Dikkatle bak: iki kesrin de payı da paydası da aynı.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "Soldan sağa doğru hesapladın. Çarpma, çıkarmadan önce gelir: önce {@0} sayısını parantezin sonucuyla çarp, ancak ondan sonra {@1} sayısından çıkar.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "Soldan sağa doğru hesapladın. Çarpma, toplamadan önce gelir: ${@0}\\cdot {@1}$ işlemini toplamadan önce yap.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "Parantez yokmuş gibi hesapladın. {@0} sayısı parantezdeki farkın tamamını çarpar – önce parantezi hesapla.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "Bir önceki sayı 1 eksiktir: ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "Bir önceki sayı, 1 eksik olan sayıdır.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "O nesneyi gözünün önüne getir ve bildiğin bir şeyle karşılaştır (örneğin 1 kg un, 1 m – büyük bir adım, 1 l – bir şişe).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "Saatleri yalnızca dakikaya çevirdin. Her dakikada ayrıca 60 saniye var.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "Saniyeleri yalnızca dakikaya çevirdin. Bir saat 60 dakikadır, bu yüzden bir de altmışa böl.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "${@0}\\,\\text{dm}$ değerini santimetreye çevir.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "${@0}\\,\\text{{@1}}$ değerini {@2} birimine çevir.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "Desimetreyi santimetreye çevir ($1\\,\\text{dm} = 10\\,\\text{cm}$), ancak ondan sonra hesapla.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "Uzunluk, kütle, hacim ve zaman birimlerinin dönüşümü",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "3 ile bölünebilmede son rakam belirleyici değildir. Bütün rakamları topla ve rakamlar toplamının 3 ile bölünüp bölünmediğine bak.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "{@0} ile bölünebilmede yalnızca son rakam belirleyicidir. Ona bir kez daha bak ve bölünebilme kuralıyla karşılaştır.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "Zamanda onluk dönüşüm yapılmaz: bir saat 60 dakika, bir dakika 60 saniyedir.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "Zamanda yüzlük dönüşüm yapılmaz: 1 {@0} = 60 {@1}, bu yüzden altmışa böl.",
  "Priamka je nekonečná na obe strany.": "Doğru her iki yönde de sonsuzdur.",
  "Priamka má začiatok aj koniec.": "Doğrunun başı ve sonu vardır.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "Doğrunun sonu yoktur, ışının başlangıcı vardır, doğru parçasının hem başı hem sonu vardır.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "Doğrunun sonu yoktur, bu yüzden uzunluğu da yoktur.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "Doğrunun başı da sonu da yoktur – iki tarafta da kesikli çizgiyle devam ederdi.",
  "Priamka, polpriamka, úsečka a kružnica": "Doğru, ışın, doğru parçası ve çember",
  "Priamku môžeme odmerať pravítkom.": "Bir doğruyu cetvelle ölçebiliriz.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "Çap yarıçaptan uzundur, bu yüzden yarıçapı ikiye bölmemeli, ikiyle çarpmalısın.",
  "Priemer je dvakrát dlhší ako polomer.": "Çap, yarıçapın iki katı uzunluğundadır.",
  "Priemer kružnice je polovica polomeru.": "Bir çemberin çapı, yarıçapının yarısıdır.",
  "Pripočítaj": "Ekle",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "{@0} {@1} daha ekle: ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "{@0} {@1} ekle: ${@2} + {@3}$.",
  "Pätina": "Beşte bir",
  "Pätinu": "1/5'ini",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "Payda eşitse payları karşılaştır. Pay eşitse küçük payda daha büyük parça demektir.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "Eşkenar üçgenin 3 eş kenarı vardır.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "Toplamı iki eş parçaya böldün ama kardeşlerin parası eşit değil. Önce toplamdan {@0} {@1} farkını çıkar.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "Basamaklara ayırırız: {@0}. Toplam ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "Yazılışı binler, yüzler, onlar ve birler gruplarına ayır. CM, XC, IV gibi ikililer çıkarma anlamına gelir.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "Yuvarladığın basamağın sağındaki rakam belirler: 5 ve fazlasıysa yukarı, 4 ve azıysa aşağı yuvarlanır.",
  "Rozložíme po rádoch: {@0}.": "Basamaklara ayırırız: {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "Basamakları sağdan say: son basamakta birlikler, onlardan önce onluklar, yüzlükler, binlikler…",
  "Rímske číslice s odčítaním": "Çıkarmalı Roma rakamları",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "Y = yüzler, O = onlar, B = birler (her bölükte)",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "Bölmeyi dene: ${@0} : {@1} = {@2}$, kalan {@3}. {@4} sayısının katı kalansız bölünür.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "1, 2, 3, … sayılarıyla bölmeyi dene ve çarpımı {@0} olan ikilileri ara.",
  "Spolu {@0} {@1}.": "Toplam {@0} {@1}.",
  "Spomeň si na malú násobilku čísla {@0}.": "{@0} sayısının çarpım tablosunu hatırla.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "Bu yazılışın değerini hesapla – büyük simgeden sonraki küçük simge eklenir, yani başka bir sayı çıkar.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "Bütün parçaları say – bu paydadır. Sonra boyalı parçaları say – bu paydır.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "Boyalı olmayan parçaları saydın. Pay, kaç parçanın boyalı olduğunu söyler.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "Doğrusu {@0}: {@1}. Diğer yazılışlar kurallara uymuyor ya da başka bir değere sahip.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "Büyük kardeşin ${@0} + {@1} = {@2}$ {@3} var.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "Kenarlar farklı birimlerde. Önce desimetreyi santimetreye çevir, ancak ondan sonra topla.",
  "Súčin vydeľ známym činiteľom.": "Çarpımı bilinen çarpana böl.",
  "Sčítaj ${@0} + {@1}$.": "${@0} + {@1}$ işlemini yap.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "İki komşu kenarı topla: ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "Üç kenarın uzunluklarını topla.",
  "Sčítaj hodnoty skupín {@0}.": "{@0} gruplarının değerlerini topla.",
  "Sčítaj všetky číslice čísla.": "Sayının bütün rakamlarını topla.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "Bilinen kenarları topla: ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "Yalnızca iki kenarı topladın. Dikdörtgenin dört kenarı var – iki tane $a$ uzunluğu ve iki tane $b$ uzunluğu.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "Yalnızca iki kenarı topladın. Dikdörtgenin dört kenarı var – iki komşu kenarın toplamını ikiyle çarp.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "Farklı birimlerdeki sayıları topladın. Önce {@0} {@1} değerini {@2} birimine çevir.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "Şimdi: ${@0} : {@1} = {@2}$ {@3}. {@4} {@5} sonra: ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "Bu, {@0} sayısının son katı, katların sayısı değil. Ona ulaşmak için {@1} sayısını kaç kez eklemen gerektiğini bul.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "Bu tam sonuç. Soru bir tahmin istiyor: önce iki sayıyı da yüzlüğe yuvarla, ancak ondan sonra hesapla.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "Bu, {@0} şimdiki yaşı. Soru, {@1} {@2} sonra kaç yaşında olacağını soruyor.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "Bu, {@0} kardeşin parası. Soru {@1} kardeşle ilgili.",
  "Tretina": "Üçte bir",
  "Tretinu": "1/3'ini",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "Üçüncü gün birinci günün değil, ikinci günün yarısı kadar yürüdüler.",
  "Triedy a rády čísla 3 042 705": "3 042 705 sayısının bölükleri ve basamakları",
  "Trojuholník má iba tri strany, nie štyri.": "Üçgenin dört değil, yalnızca üç kenarı vardır.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "Bir üçgenin çevresi ${@0}\\,\\text{{@1}}$. İki kenarı ${@2}\\,\\text{{@3}}$ ve ${@4}\\,\\text{{@5}}$. Üçüncü kenarı ne uzunluktadır ({@6} cinsinden)?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "Bir üçgenin kenarları ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ ve ${@4}\\,\\text{{@5}}$. Çevresini {@6} cinsinden hesapla.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "Yürüyüşçüler birinci gün {@0} km yürüdü. İkinci gün birinci günden {@1} km fazla, üçüncü gün ise ikinci günün yarısı kadar yürüdüler. Üç günde kaç kilometre yürüdüler?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Sepette {@0} {@1} var. Bunların ${@2}$ kadarı kırmızı. Kaç elma kırmızı?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "Sepette {@0} {@1} var. Bunların ${@2}$ kadarı kırmızı. Kaç elma kırmızı?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "Tren {@0} saatinde kalktı ve {@1} saatinde varacağı yere ulaştı. Yolculuk kaç dakika sürdü?",
  "Vyber správny údaj: {@0} …": "Doğru değeri seç: {@0} …",
  "Vydeľ ${@0} : {@1}$.": "${@0} : {@1}$ işlemini yap.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "Böl ve kalana bak. Bir şey artarsa bir tane daha gerekir.",
  "Vydeľ {@0} menovateľom {@1}.": "{@0} sayısını {@1} paydasına böl.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "Sayıyı paydaya böl ve sonucu payla çarp.",
  "Vynásob ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$ işlemini yap.",
  "Vynásob {@0} čitateľom {@1}.": "{@0} sayısını {@1} payıyla çarp.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "Kenarı kendisiyle çarptın – bu karenin alanı. Çevre, dört kenarın uzunluklarının toplamıdır.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "Kenarları çarptın – bu alan, çevre değil. Çevre, bütün kenarların uzunluklarının toplamıdır.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "$({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$ işlemini yap.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "${@0} - {@1}\\cdot({@2} - {@3})$ işlemini yap.",
  "Vypočítaj ${@0}\\cdot 100$.": "${@0}\\cdot 100$ işlemini yap.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "İşlemi yap ve sonucu Arap rakamlarıyla yaz: $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "Kenarları $a = {@0}\\,\\text{{@1}}$ ve $b = {@2}\\,\\text{{@3}}$ olan dikdörtgenin çevresini hesapla ({@4} cinsinden).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Kenarı ${@0}\\,\\text{{@1}}$ olan eşkenar üçgenin çevresini hesapla ({@2} cinsinden).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "Kenarı ${@0}\\,\\text{{@1}}$ olan karenin çevresini hesapla ({@2} cinsinden).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "Her günü sırayla hesapla ve en sonda hepsini topla.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "$125\\cdot {@0}\\cdot 8$ işlemini kolay yoldan hesapla.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "$25\\cdot {@0}\\cdot 4$ işlemini kolay yoldan hesapla.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$ işlemini kolay yoldan hesapla.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "Parantezi hesapla: ${@0} + {@1}$.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "Parantezi hesapla: ${@0} - {@1}$.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "Yalnızca ${@0}$ kadarını, yani bir parçayı hesapladın. Onu bir de {@1} payıyla çarp.",
  "Vyučovacia hodina trvá": "Bir ders saati yaklaşık",
  "Vzdialenosť z Bratislavy do Košíc je asi": "Bratislava ile Koşice arasındaki uzaklık yaklaşık",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "Büyük birimi küçük birime çevir, sonra ikinci kısmı ekle.",
  "Výška dospelého človeka je asi": "Yetişkin bir insanın boyu yaklaşık",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "Bütün simgeleri topladın. Ama büyük simgeden önceki küçük simge çıkarılır: örneğin IX 9'dur, 11 değil.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "Bütün sayıların basamak sayısı aynı, bu yüzden onları soldan karşılaştırırız. {@0}: ${@1}$.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "Çizginin başı, sonu var mı, yoksa ikisi de yok mu, dikkat et.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "{@0} rakamlarıyla {@1} dört basamaklı sayıyı oluştur. Her rakamı tam olarak bir kez kullan.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "Üçüncü günü unuttun. Soru üç günün hepsini soruyor.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "Kavramları karıştırdın: bir sonraki sayı 1 fazla, bir önceki sayı 1 eksiktir. {@0} arıyorsun.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Payın ve paydanın görevlerini karıştırdın: sayıyı paydaya böl ve sonucu payla çarp.",
  "Zaokrúhli ${@0}$ na stovky.": "${@0}$ sayısını yüzlüğe yuvarla.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "İki sayıyı da yüzlüğe yuvarla ve sonucu tahmin et: ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "${@0}$ sayısını {@1} basamağına yuvarla.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "Yalnızca sonucu yuvarladın. Tahminde önce her sayıyı ayrı ayrı yuvarla, sonra yuvarlanmış sayılarla hesapla.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "Başka bir basamağa yuvarladın. {@0} basamağına yuvarlamak, {@1} basamağının sağındaki bütün rakamları sıfır yapmak demektir.",
  "Zaokrúhľovanie na číselnej osi": "Sayı doğrusunda yuvarlama",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "${@0}$ sayısını Roma rakamlarıyla yaz.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "Binleri, yüzleri, onları ve birleri ayrı ayrı yaz. Unutma: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "{@1} içine tam olarak kaç tane {@0} sığdığını bul.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "Rakamın hangi basamakta durduğunu bul (birlikler, onluklar, yüzlükler, binlikler…).",
  "Zlomky na koláčoch a páse": "Pastalar ve şerit üzerinde kesirler",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "Kesirler eşit değil – paydalarını karşılaştır.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "Kesirler eşit değil – paylarını karşılaştır.",
  "Zlomky sú rovnaké.": "Kesirler eşit.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "İşaret ters çevrilmiş. Paydalar eşitse payı büyük olan kesir daha büyüktür.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "Bir simge dört kez tekrarlanamaz ve yalnızca V ve X'ten önce I, L ve C'den önce X, D ve M'den önce C çıkarılabilir.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "I, X, C simgeleri art arda dört kez tekrarlanamaz. 4, 9, 40, 90, 400 ve 900 için çıkarmalı yazılışı kullan.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "I, X, C, M simgeleri art arda en fazla üç kez yazılabilir. Dört aynı simge yerine çıkarma kullan.",
  "Zvyšok sa delí na dve rovnaké časti.": "Kalan iki eş parçaya bölünür.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "Parantez önce gelir. Sonra bölme ve çarpma, toplama en sonda.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "Parantez: ${@0} + {@1} = {@2}$. Bölme ve çarpma: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Toplama: ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "Parantez: ${@0} - {@1} = {@2}$. Çarpma: ${@3}\\cdot {@4} = {@5}$. Çıkarma: ${@6} - {@7} = {@8}$.",
  "cesty": "Yolun",
  "dcéra": "kızı",
  "dcére": "kızı",
  "dcéry": "kızının",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "12'nin bölenleri: 1, 2, 3, 4, 6, 12",
  "desatina": "1/10'i",
  "desatinu": "1/10'ini",
  "desatiny": "onda birler",
  "dni": "gün",
  "dní": "gün",
  "euro": "avro",
  "hodinu": "saat",
  "koláč": "pasta",
  "koláča": "Pastanın",
  "lodičiek": "kayık",
  "lodičky": "kayık",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "büyük simgeden önceki küçük simge çıkarılır – yalnızca V, X'ten önce I; L, C'den önce X; D, M'den önce C",
  "meria": "uzunluğundadır",
  "miliónov": "milyonluk",
  "milióny": "milyonluk",
  "minul": "harcadı",
  "minula": "harcadı",
  "mladšieho": "küçük",
  "mladší": "küçük",
  "nadol": "aşağı",
  "nahor": "yukarı",
  "najmenšie": "en küçük",
  "najväčšie": "en büyük",
  "napr. 1; 2; 4": "örneğin 1; 2; 4",
  "napr. 2/5": "örneğin 2/5",
  "napr. MCMXC": "örneğin MCMXC",
  "nasledovníka": "bir sonraki sayıyı",
  "nepárne": "tek",
  "nie": "hayır",
  "nádrže": "Deponun",
  "obalov": "kutu",
  "obaly": "kutu",
  "odčítaj": "çıkar",
  "odčítaš": "çıkarırsın",
  "osmina": "1/8'i",
  "osminu": "1/8'ini",
  "osminy": "1/8",
  "polovica": "1/2'si",
  "polovice": "1/2",
  "polovicu": "1/2'sini",
  "polpriamka": "ışın",
  "polpriamka AB": "AB ışını",
  "predchodcu": "bir önceki sayıyı",
  "priamka AB": "AB doğrusu",
  "priemer d = 2 · r": "çap d = 2 · r",
  "pripočítaj": "ekle",
  "pripočítaš": "eklersin",
  "párne": "çift",
  "pásik": "şerit",
  "pätina": "1/5'i",
  "pätinu": "1/5'ini",
  "pätiny": "1/5",
  "päťkrát": "beş",
  "rokov": "yıl",
  "roky": "yıl",
  "rovnaké diely": "eş parçaya",
  "rovnakých dielov": "eş parçaya",
  "spolu 50 €": "toplam 50 €",
  "staršia": "büyük",
  "staršieho": "büyük",
  "starší": "büyük",
  "stotisícov": "yüz binlik",
  "syn": "oğlu",
  "syna": "oğlunun",
  "synovi": "oğlu",
  "také časti": "parça",
  "takých častí": "parça",
  "tretina": "1/3'i",
  "tretinu": "1/3'ini",
  "tretiny": "1/3",
  "vajec": "yumurta",
  "vyfarbené sú {@0}": "{@0} parça boyalı",
  "vyfarbený je 1": "1 parça boyalı",
  "vyfarbených je {@0}": "{@0} parça boyalı",
  "váži": "gelir",
  "zmestia": "sığar",
  "zmestí": "sığar",
  "zátvorky": "parantezler",
  "zľava doprava": "soldan sağa",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} Bu yüzden hayır, bölümden kalan {@1}.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} Bu yüzden evet: ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@1} sayısını bir kez daha {@0}: ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0}, $100 {@1} 1$ demektir. Yüzle çarp, sonra sayıyı bir kez daha {@2}.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0} {@1} yaşında ve {@5} ile karşılaştırıldığında {@3} kat {@4}. {@7} {@8} sonra {@6} kaç yaşında olacak?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0}, {@1} {@2} demek değildir. {@4} sayısının {@3} bölme ile bulursun: ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@1} avronun {@0}: ${@2} : {@3} = {@4}$. {@5} toplam ${@6} + {@7} = {@8}$. Kalan ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@1} {@0} ${@3}\\,\\text{{@4}}$ {@2}. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0}'in {@2} {@3} parası {@1}. Bunun {@4} bir oyuna, {@6} {@7} ise bir kitaba {@5}. Şimdi {@8} kaç avro kaldı?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. Diğer değerler çok büyük ya da çok küçük.",
  "Úsečka AB začína v bode A a končí v bode B.": "AB doğru parçası A noktasında başlar ve B noktasında biter.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "Doğru parçası iki uç noktasında biter ve onlardan sonra devam etmez.",
  "Úsečka má dva krajné body.": "Doğru parçasının iki uç noktası vardır.",
  "Úsečka má konečnú dĺžku.": "Doğru parçasının uzunluğu sonludur.",
  "Úsečkový model súčtu a rozdielu": "Toplam ve fark için doğru parçası modeli",
  "Úsečku môžeme odmerať pravítkom.": "Bir doğru parçasını cetvelle ölçebiliriz.",
  "áno": "evet",
  "úsečka AB": "AB doğru parçası",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "Zamanları sıradan sayılar gibi çıkardın. Ama bir saat 100 değil, 60 dakikadır – önce tam saate kadar say.",
  "Červené sú {@0} jablká": "{@0} elma kırmızı",
  "Červených je {@0} jabĺk": "{@0} elma kırmızı",
  "Čiara má dva krajné body A a B – je to úsečka.": "Çizginin A ve B olmak üzere iki uç noktası var – bu bir doğru parçası.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "Çizginin başı da sonu da yok – bu bir doğru.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "Çizgi A noktasında başlıyor ve diğer yönde devam ediyor – bu bir ışın.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "Paylar eşit. Bütünü ne kadar çok parçaya bölersek parçalar o kadar küçük olur: ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "Resimde ne var? Kesikli çizgi, çizginin sonsuza kadar devam ettiğini gösterir.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "Sayıları yan yana yazmak yetmez. Önce {@0} {@1} değerini {@2} birimine çevir, sonra {@3} ekle.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "Sayıları 1 {@0} = 100 {@1} geçerliymiş gibi yan yana yazdın. Oysa 1 {@2} = 60 {@3}.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "{@0} basamağının hemen sağındaki rakam {@1}, bu yüzden {@2} yuvarlarız: ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "Sağdaki rakam {@0}. ${@1}$ sayısını {@2} basamağına yuvarla.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "{@0} basamağının sağındaki rakam 5 ya da daha büyük – bu durumda yukarı yuvarlanır.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "{@0} basamağının sağındaki rakam 5'ten küçük – bu durumda aşağı yuvarlanır.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "{@0} rakamı {@1} basamağında, bu yüzden değeri ${@2}\\cdot {@3} = {@4}$.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "Rakamları küçükten büyüğe sıralarız ama 0 başa gelemez, bu yüzden ikinci sıraya geçer: ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "Rakamları küçükten büyüğe sıralarız: ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "Rakamları büyükten küçüğe sıralarız: ${@0}$.",
  "Číslo": "Sayı",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "Sayı sıfırla başlayamaz – o zaman dört basamaklı olmazdı. İlk sıraya 0 olmayan en küçük rakamı koy.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "{@0} sayısı $100 {@1} 1$ demektir, bu yüzden yalnızca birliği değil, {@3} sayısının tamamını bir kez {@2}.",
  "čiara": "çizgi",
  "Šestina": "Altıda bir",
  "Štvorec má 4 rovnaké strany.": "Karenin 4 eş kenarı vardır.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "Karenin dört eş kenarı vardır, bu yüzden çevreyi ikiye değil, dörde böl.",
  "Štvrtina": "Dörtte bir",
  "Štvrtinu": "1/4'ini",
  "šestina": "1/6'i",
  "šestinu": "1/6'ini",
  "šestiny": "1/6",
  "štvrtina": "1/4'i",
  "štvrtinu": "1/4'ini",
  "štvrtiny": "1/4"
 }
});
