/* Türkçe: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/r6/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "r6-desatinne": {
   "title": "Ondalık sayılar ve ondalık sayılarla işlemler",
   "summary": "Ondalık sayıları yazma, karşılaştırma ve yuvarlama; toplama, çıkarma, çarpma ve bölme.",
   "theory": [
    "<p>Bir <strong>ondalık sayıda</strong> virgül, tam kısmı ondalık kısımdan ayırır. $2{,}75$ sayısında 2 tam, 7 onda bir ve 5 yüzde bir vardır,\n       yani $2{,}75 = 2 + \\frac{7}{10} + \\frac{5}{100}$. Ondalık kısmın sonundaki sıfırları ekleyebilir veya silebiliriz: $2{,}4 = 2{,}40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "Sayı doğrusunun 2 ile 3 arasındaki kısmı. İki tam sayı arasında 10 tane onda bir ve 100 tane yüzde bir vardır."
    },
    "<p><strong>Toplama ve çıkarma:</strong> sayıları <em>virgüller alt alta gelecek</em> şekilde yazarız, eksik basamakları sıfırla doldururuz.\n       <strong>Çarpma:</strong> tam sayılar gibi çarparız; sonucun ondalık basamak sayısı, iki çarpanın ondalık basamak sayılarının toplamı kadardır: $1{,}2\\cdot 0{,}3 = 0{,}36$.\n       10, 100, 1 000 ile çarpmak virgülü 1, 2, 3 basamak sağa, bu sayılara bölmek ise sola kaydırır.</p>",
    "<p><strong>Doğal sayıya bölme:</strong> her zamanki gibi böleriz; bölünendeki virgülü geçtiğimiz anda bölüme de virgül koyarız: $7{,}5 : 3 = 2{,}5$.\n       <strong>Yuvarlama:</strong> yuvarladığımız basamaktan hemen sonraki rakama bakarız. 0 ile 4 arasındaysa aşağı, 5 ile 9 arasındaysa yukarı yuvarlarız: $3{,}462 \\doteq 3{,}5$ (onda birler basamağına).</p>"
   ],
   "examples": [
    {
     "task": "$12{,}5 + 3{,}78$ işlemini yap.",
     "steps": [
      "Virgülleri hizalarız: $12{,}50 + 3{,}78$.",
      "Basamak basamak toplarız: $12{,}50 + 3{,}78 = 16{,}28$.",
      "<strong>Sonuç: 16,28</strong>"
     ]
    },
    {
     "task": "$2{,}4\\cdot 1{,}5$ işlemini yap.",
     "steps": [
      "Virgülsüz: $24\\cdot 15 = 360$.",
      "Çarpanların toplam 2 ondalık basamağı vardır, bu yüzden sonuç $3{,}60 = 3{,}6$'dır.",
      "<strong>Sonuç: 3,6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "Kesirler ve temel kullanımları",
   "summary": "Kesir nedir, bütünün parçası, sadeleştirme ve genişletme, ondalık sayıya çevirme, karşılaştırma.",
   "theory": [
    "<p>$\\frac{a}{b}$ <strong>kesri</strong> bütünün bir parçasını anlatır: bütünü $b$ eşit parçaya böleriz (<em>payda</em>) ve bunlardan $a$ tanesini alırız (<em>pay</em>).\n       Kesir çizgisi bölme anlamına gelir: $\\frac{3}{4} = 3 : 4 = 0{,}75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "Dairelerin boyalı kısımları: bir bölü iki, üç bölü dört ve üç bölü sekiz."
    },
    "<p><strong>Bir sayının kesir kadarı:</strong> 20'nin $\\frac{3}{4}$'ünü bulmak için 20'yi paydaya böler, payla çarparız: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>Genişletme ve sadeleştirme:</strong> pay ve paydayı aynı sayıyla (sıfır hariç) çarpar veya bölersek kesrin değeri değişmez:\n       $\\frac{12}{18} = \\frac{2}{3}$ (altıyla sadeleştiririz). Kesir artık sadeleşmiyorsa <em>en sade biçimdedir</em>.\n       İki kesri en kolay, onları ortak paydaya getirerek karşılaştırırız.</p>"
   ],
   "examples": [
    {
     "task": "35'in $\\frac{2}{5}$'i kaçtır?",
     "steps": [
      "Beşte biri: $35 : 5 = 7$.",
      "Beşte ikisi: $7\\cdot 2 = 14$.",
      "<strong>Sonuç: 14</strong>"
     ]
    },
    {
     "task": "$\\frac{3}{4}$ ile $\\frac{5}{6}$ kesirlerini karşılaştır.",
     "steps": [
      "Ortak payda 12'dir: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$, bu yüzden $\\frac{3}{4} &lt; \\frac{5}{6}$."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "Bölünebilme, asal sayılar ve bileşik sayılar",
   "summary": "Bölen ve kat, bölünebilme kuralları, asal sayılar, bileşik sayılar ve asal çarpanlara ayırma.",
   "theory": [
    "<p>$a : b$ bölmesinde kalan yoksa $a$ sayısı $b$ sayısına <strong>tam bölünür</strong>. Bu durumda $b$, $a$'nın <em>böleni</em>, $a$ ise $b$'nin <em>katıdır</em>.\n       Örneğin 12'nin bölenleri 1, 2, 3, 4, 6 ve 12'dir.</p>",
    "<p><strong>Bölünebilme kuralları.</strong> Bir sayı</p>\n       <ul><li>son rakamı çiftse (0, 2, 4, 6, 8) <strong>2</strong> ile,</li>\n       <li>rakamları toplamı 3'e bölünüyorsa <strong>3</strong> ile; rakamları toplamı 9'a bölünüyorsa <strong>9</strong> ile,</li>\n       <li>son iki basamağının oluşturduğu sayı 4'e bölünüyorsa <strong>4</strong> ile,</li>\n       <li>0 veya 5 ile bitiyorsa <strong>5</strong> ile; 0 ile bitiyorsa <strong>10</strong> ile,</li>\n       <li>hem 2'ye hem 3'e bölünüyorsa <strong>6</strong> ile tam bölünür.</li></ul>",
    "<p><strong>Asal sayı</strong>, tam olarak iki böleni olan doğal sayıdır: 1 ve kendisi (2, 3, 5, 7, 11, …).\n       <strong>Bileşik sayının</strong> ikiden fazla böleni vardır (4, 6, 8, 9, …). 1 sayısı ne asal ne de bileşik sayıdır.\n       Her bileşik sayıyı asal sayıların çarpımı olarak yazabiliriz (<em>asal çarpanlara ayırma</em>): $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "Eratosthenes kalburu: 1'den 60'a kadar sayılardan 2, 3, 5 ve 7'nin katlarını (kendileri hariç) çizeriz. Geriye asal sayılar kalır, bunlar boyalıdır."
    }
   ],
   "examples": [
    {
     "task": "4 716 sayısı 3'e tam bölünür mü? Peki 4'e?",
     "steps": [
      "Rakamları toplamı: $4 + 7 + 1 + 6 = 18$; 18, 3'e bölünür, bu yüzden <strong>evet</strong>.",
      "Son iki basamak 16'dır ve $16 : 4 = 4$, bu yüzden 4'e de bölünür: <strong>evet</strong>."
     ]
    },
    {
     "task": "90 sayısını asal çarpanlarına ayır.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, 5 asal sayıdır.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "En büyük ortak bölen ve en küçük ortak kat",
   "summary": "Asal çarpanlara ayırarak EBOB ve EKOK, aralarında asal sayılar ve problemler.",
   "theory": [
    "<p>$a$ ve $b$ sayılarının <strong>en büyük ortak böleni</strong> – $D(a, b)$ veya EBOB olarak yazılır – her iki sayıyı da bölen en büyük sayıdır.\n       <strong>En küçük ortak katı</strong> – $n(a, b)$ veya EKOK – her iki sayının da katı olan sıfırdan farklı en küçük sayıdır.</p>",
    {
     "fig": "r6-strom",
     "caption": "60 ve 84 sayılarının asal çarpanlarına ayrılması. Ortak çarpanlar 2, 2 ve 3'tür, bu yüzden D(60, 84) = 12; n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>Çarpanlara ayırma yöntemi:</strong> iki sayıyı da asal çarpanlarına ayırırız. EBOB, <em>ortak</em> asal çarpanların çarpımıdır (her biri, iki sayıda da bulunduğu kadar alınır).\n       EKOK, en az bir sayıda bulunan <em>bütün</em> asal çarpanların çarpımıdır (her biri, daha çok bulunduğu sayıdaki kadar alınır).\n       Faydalı kontrol: $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>",
    "<p>EBOB'u 1 olan sayılara <strong>aralarında asal</strong> sayılar denir (örn. 8 ve 15). 1'den büyük bir ortak bölenleri varsa <strong>aralarında asal değildirler</strong>.\n       EBOB'u bir şeyi olabildiğince büyük eşit parçalara bölerken; EKOK'u ise tekrarlanan olayların ne zaman yeniden çakışacağını ararken kullanırız.</p>"
   ],
   "examples": [
    {
     "task": "$D(24, 36)$ ve $n(24, 36)$ değerlerini bul.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "EBOB: $2^2\\cdot 3 = 12$.",
      "EKOK: $2^3\\cdot 3^2 = 72$.",
      "Kontrol: $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "İki trafik ışığı aynı anda yeşile döner. Birincisi renklerini 40 saniyelik, ikincisi 60 saniyelik bir döngüyle değiştirir. Kaç saniye sonra yeniden aynı anda döngünün başında olurlar?",
     "steps": [
      "En küçük ortak katı arıyoruz: $n(40, 60)$.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$, yani $n = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>120 saniye (2 dakika) sonra.</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "Tam sayılar ve negatif sayılar",
   "summary": "Sayı doğrusunda pozitif ve negatif sayılar, ters sayı, mutlak değer, karşılaştırma, toplama ve çıkarma.",
   "theory": [
    "<p><strong>Tam sayılar</strong> $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ sayılarıdır. Negatif sayıları örneğin sıfırın altındaki sıcaklıklarda ($-5\\,{}^\\circ\\mathrm{C}$),\n       borçta veya deniz seviyesinin altındaki yükseklikte kullanırız. Sıfır ne pozitif ne de negatiftir.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "4 ve −4 birbirinin ters işaretlisidir: sıfıra eşit uzaklıkta, karşı taraflarda bulunurlar. İkisinin de mutlak değeri 4'tür."
    },
    "<p>$a$ sayısının <strong>ters işaretlisi</strong> $-a$'dır (4'ün ters işaretlisi $-4$, $-7$'nin ters işaretlisi 7'dir). <strong>Mutlak değer</strong> $|a|$, sayının sıfıra olan uzaklığıdır: $|-6| = 6$, $|6| = 6$.\n       <strong>Karşılaştırma:</strong> sayı doğrusunda daha sağda olan sayı daha büyüktür. Bu yüzden $-2 &gt; -5$ ve her negatif sayı 0'dan küçüktür.</p>",
    "<p><strong>Toplama ve çıkarma:</strong> pozitif bir sayı eklemek sayı doğrusunda sağa, negatif bir sayı eklemek sola gitmek demektir.\n       Bir sayıyı çıkarmak, ters işaretlisini eklemekle aynıdır: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "$-8 + 3$ işlemini yap.",
     "steps": [
      "$-8$'den başlar ve 3 birim sağa gideriz.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "Sabah hava $-6\\,{}^\\circ\\mathrm{C}$, öğlen $2\\,{}^\\circ\\mathrm{C}$ idi. Hava kaç derece ısındı?",
     "steps": [
      "Fark: $2 - (-6) = 2 + 6 = 8$.",
      "<strong>Hava 8 °C ısındı.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "Açı ve açı ölçme",
   "summary": "Açı çeşitleri, açıölçer, derece ve dakika, bütünler ve ters açılar, açılarla hesaplama.",
   "theory": [
    "<p><strong>Açıyı</strong>, başlangıç noktası (<em>köşe</em>) ortak olan iki ışın (<em>kollar</em>) oluşturur. Açının ölçüsünü <strong>derece</strong> cinsinden ölçeriz;\n       bir derece 60 dakikadır: $1^\\circ = 60'$. Açıları $\\alpha, \\beta, \\gamma$ gibi Yunan harfleriyle veya $\\angle AVB$ yazımıyla gösteririz.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "Dar açı 90°'den küçüktür, dik açı 90°'dir, geniş açı 90° ile 180° arasındadır, doğru açı 180°'dir."
    },
    "<p><strong>Açıölçerle ölçme:</strong> açıölçerin merkezini açının köşesine, sıfırını bir kola yerleştirir ve ikinci kolun geçtiği yeri ölçekten okuruz.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "50°'lik bir açıya yerleştirilmiş açıölçer."
    },
    "<p><strong>Komşu bütünler açıların</strong> bir kolu ortaktır, diğer kolları ise bir doğru oluşturur; toplamları $180^\\circ$'dir.\n       <strong>Ters açılar</strong>, iki doğrunun kesişmesiyle karşılıklı oluşur ve ölçüleri eşittir.\n       Açıları toplarken dereceleri ve dakikaları ayrı ayrı toplarız; 60 dakikayı 1 dereceye çeviririz.</p>"
   ],
   "examples": [
    {
     "task": "$\\alpha$ açısı $48^\\circ$'dir. Komşu bütünler açısı kaç derecedir?",
     "steps": [
      "Komşu bütünler açıların toplamı $180^\\circ$'dir.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>Komşu bütünler açı 132°'dir.</strong>"
     ]
    },
    {
     "task": "$35^\\circ\\,40' + 27^\\circ\\,35'$ toplamını bul.",
     "steps": [
      "Dereceler: $35 + 27 = 62$, dakikalar: $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$, bu yüzden toplam $63^\\circ\\,15'$."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "Üçgenler ve özellikleri",
   "summary": "Üçgenin iç açıları toplamı, kenarlarına ve açılarına göre üçgen çeşitleri, üçgen eşitsizliği.",
   "theory": [
    "<p>$ABC$ <strong>üçgeninin</strong> üç köşesi, üç kenarı $a = |BC|$, $b = |AC|$, $c = |AB|$ ve üç iç açısı $\\alpha, \\beta, \\gamma$ vardır.\n       Her üçgenin <strong>iç açılarının toplamı</strong> $\\alpha + \\beta + \\gamma = 180^\\circ$'dir.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "Üstte kenarlarına göre sınıflandırma (çentikler eşit uzunluktaki kenarları gösterir), altta açılarına göre."
    },
    "<p><strong>Kenarlarına göre:</strong> çeşitkenar (bütün kenarlar farklı), ikizkenar (iki kenar – yan kenarlar – eşit, taban açıları eşit),\n       eşkenar (bütün kenarlar eşit, her açı $60^\\circ$).\n       <strong>Açılarına göre:</strong> dar açılı (bütün açılar dar), dik açılı (bir açı dik), geniş açılı (bir açı geniş).</p>",
    "<p><strong>Üçgen eşitsizliği:</strong> herhangi iki kenarın uzunlukları toplamı her zaman üçüncü kenarın uzunluğundan büyüktür.\n       İki kısa kenarın toplamının en uzun kenardan büyük olduğunu kontrol etmek yeterlidir. Örneğin 3 cm, 4 cm ve 8 cm'lik kenarlarla üçgen çizilemez, çünkü $3 + 4 &lt; 8$.</p>"
   ],
   "examples": [
    {
     "task": "Bir üçgende $\\alpha = 52^\\circ$ ve $\\beta = 71^\\circ$'dir. $\\gamma$'yı hesapla.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "Kenarları 5 cm, 6 cm ve 10 cm olan bir üçgen çizilebilir mi?",
     "steps": [
      "İki kısa kenar: $5 + 6 = 11$.",
      "$11 &gt; 10$, eşitsizlik sağlanıyor.",
      "<strong>Evet, çizilebilir.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "Kare ve dikdörtgenin çevresi ve alanı",
   "summary": "Çevre ve alan formülleri, eksik kenarı bulma, alan birimleri ve dönüşümleri.",
   "theory": [
    "<p><strong>Çevre</strong>, şeklin sınırının uzunluğudur; uzunluk birimleriyle (mm, cm, m) ölçülür. <strong>Alan</strong>, şeklin içine kenarı 1 birim olan\n       kaç kare sığdığını gösterir; alan birimleriyle ($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$) ölçülür.</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "5 cm × 3 cm'lik dikdörtgene alanı 1 cm² olan karelerden 5'erli 3 sıra, toplam 15 cm² sığar."
    },
    "<p>Kenarları $a$, $b$ olan <strong>dikdörtgen</strong>: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       Bir kenarı $a$ olan <strong>kare</strong>: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       Dikdörtgenin alanını ve bir kenarını biliyorsak diğer kenarı bölerek buluruz: $b = S : a$.</p>",
    "<p><strong>Alan birimleri:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       Alan birimlerinde dönüşüm katsayısı 10 değil 100'dür, çünkü kenarı 1 cm olan kare, kenarı 1 mm olan $10\\cdot 10$ kare içerir.</p>"
   ],
   "examples": [
    {
     "task": "Bir bahçe 14 m × 9 m'lik dikdörtgen biçimindedir. Etrafını çevirmek için kaç metre tel gerekir ve bahçenin alanı nedir?",
     "steps": [
      "Çevre: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "Alan: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>46 m tel gerekir, bahçenin alanı 126 m²'dir.</strong>"
     ]
    },
    {
     "task": "Bir karenin çevresi 36 cm'dir. Alanı kaç cm²'dir?",
     "steps": [
      "Kenar: $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "Eksene göre simetri",
   "summary": "Bir noktanın ve şeklin eksene göre simetriği, simetrik şekiller ve simetri eksenleri.",
   "theory": [
    "<p>$o$ eksenine göre <strong>simetri</strong>, her $A$ noktasına onun <em>görüntüsü</em> olan $A'$ noktasını, $AA'$ doğru parçası eksene dik olacak\n       ve eksen onu ortalayacak şekilde karşılık getirir. Yani $A$ noktası ve görüntüsü eksene eşit uzaklıktadır, her biri farklı taraftadır. Eksen üzerindeki noktaların görüntüsü kendileridir.</p>",
    {
     "fig": "r6-osova",
     "caption": "Mavi şekil ve o eksenine göre görüntüsü (yeşil). A noktası eksenin 4 kare solunda, görüntüsü A′ ise 4 kare sağındadır."
    },
    "<p>Bir şeklin görüntüsünü, köşelerinin görüntülerini bulup birleştirerek çizeriz. Görüntü, asılla aynı biçim ve büyüklüktedir; yalnızca aynadaki gibi “ters çevrilmiştir”.</p>",
    "<p>Bir şekil, kendisini kendisine dönüştüren bir doğru varsa <strong>eksenel simetriktir</strong> (kâğıdı bu doğru boyunca katladığımızda iki yarı üst üste gelir).\n       Böyle bir doğruya <em>simetri ekseni</em> denir. Karenin 4, dikdörtgenin 2, eşkenar üçgenin 3, ikizkenar üçgenin 1, dairenin ise sonsuz sayıda simetri ekseni vardır.</p>"
   ],
   "examples": [
    {
     "task": "$o$ ekseni 6. sütundaki dikey doğrudur. $A$ noktası 2. sütundadır. Görüntüsü hangi sütundadır?",
     "steps": [
      "$A$ noktası eksenden $6 - 2 = 4$ sütun uzaktadır.",
      "Görüntü, diğer tarafta 4 sütun uzaktadır: $6 + 4 = 10$.",
      "<strong>Görüntü 10. sütundadır.</strong>"
     ]
    },
    {
     "task": "Kare olmayan bir dikdörtgenin kaç simetri ekseni vardır?",
     "steps": [
      "Eksen, karşılıklı iki kenarın orta noktalarından geçer – böyle iki eksen vardır.",
      "Köşegen eksen değildir: katladığımızda yarılar üst üste gelmez.",
      "<strong>2 eksen.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, bu yüzden yüze böleriz: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, bu yüzden ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$, bu yüzden ${@0}^\\circ = {@1}'$ ve toplam ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$, bu yüzden $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$, üçgen çizilebilir.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$, üçgen çizilemez.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ ({@3} birim sağa kayma).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ ({@3} birim sola kayma).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, kalan {@2}. Yani ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$ ve ${@2} = {@3}$ sayılarının ortak asal çarpanı yok, $D({@4}, {@5}) = 1$. Aralarında asaldırlar.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. EBOB, ortak asal çarpanların çarpımıdır: $D({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$, yani 1 ve {@3} dışında {@4} böleni de var. Bu bir bileşik sayıdır.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. Akşam sıcaklık {@4} °C idi.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$ ve $|{@2}| = {@3}$, yani toplam ${@4} + {@5} = {@6}$.",
  "4 dieliky": "4 bölme",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "Mutlak değer sıfıra olan uzaklıktır, bu yüzden hiçbir zaman negatif değildir.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "Mutlak değer hiçbir zaman negatif değildir. Önce her sayının sıfıra uzaklığını bul, ancak ondan sonra topla.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "Dakika 60 ya da daha fazlaysa 60 dakikayı 1 dereceye çevir.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "İki kısa kenarın toplamı en uzun kenara eşitse kenarlar aynı doğru üzerinde olur ve üçgen oluşmaz.",
  "Aká dlhá je strana štvorca (v cm)?": "Karenin bir kenarı kaç cm'dir?",
  "Aké je číslo opačné k číslu {@0}?": "{@0} sayısının ters işaretlisi nedir?",
  "Aké je číslo {@0}?": "{@0} sayısı nasıl bir sayıdır?",
  "Aký bude čitateľ rozšíreného zlomku?": "Genişletilmiş kesrin payı ne olur?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "{@0} ve {@1} sayılarının en küçük ortak katı nedir?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "{@0} ve {@1} sayılarının en büyük ortak böleni nedir?",
  "Aký je obsah štvorca (v cm²)?": "Karenin alanı kaç cm²'dir?",
  "Aký je obvod (v {@0})?": "Çevre nedir ({@0} cinsinden)?",
  "Aký je obvod štvorca (v cm)?": "Karenin çevresi kaç cm'dir?",
  "Aký je súčet dvoch susedných strán?": "İki komşu kenarın toplamı nedir?",
  "Aký je súčet známych číslic?": "Bilinen rakamların toplamı nedir?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "${@0}^\\circ$ ölçüsündeki açı ne tür bir açıdır?",
  "Aký veľký je jeden uhol pri základni?": "Taban açılarından biri kaç derecedir?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "Paydada {@2} olması için $\\frac{{@0}}{{@1}}$ kesri hangi sayıyla genişletilmelidir?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "$A$ noktasının eksene uzaklığı $|{@0} - {@1}| = {@2}$ {@3}. Görüntüsü eksenin diğer tarafında aynı uzaklıktadır: ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "Tam kısmı ve ondalık kısmı ayrı ayrı çarpamazsın – onda birler tam kısma taşar. Sayıları virgülsüz çarp, sonra virgülü yerleştir.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "Rakamlar toplamı {@0}, 3 ile bölünür.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "Rakamlar toplamı {@0}, 9 ile bölünür.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "Rakamlar toplamı {@0}, 3 ile bölünmez.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "Rakamlar toplamı {@0}, 9 ile bölünmez.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "{@0} sayısının bölenleri {@1}. Toplam {@2} tane.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "1 bütün sayıların bölenidir. Aralarında asal olmayan sayılar, 1'den büyük ortak böleni olan sayılardır.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "Tam sayılardaki gibi böleriz ve bölünende virgülü geçtiğimizde bölüme de virgül koyarız: ${@0} : {@1} = {@2}$. Kontrol: ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "Sırayla asal sayılara böleriz: ${@0}$. Yani ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "Ondalık virgüller alt alta gelmeli. Eksik basamakları sıfırla doldur.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "En yüksek basamaktan başlayarak sırayla böl. Bölünendeki ondalık virgülü geçtiğinde sonuca da virgül koy.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "Sayıyı bölünebildiği en küçük asal sayıya (2, 3, 5, 7, …) böl ve 1 elde edene kadar bölümle devam et.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "Doğru işareti koy: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "Üçüncü açıyı hesapla ve en büyüğüne bak.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "Kenarlarına ve açılarına göre üçgen çeşitleri",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "İki kısa kenar: ${@0} + {@1} = {@2}$, en uzunu {@3}.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "İki kenar aynı uzunlukta, üçgen ikizkenardır.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "İki kurdele {@0} cm ve {@1} cm uzunluğunda. Bunları artık kalmadan, mümkün olduğunca uzun, eşit parçalara (tam santimetre olarak) kesmek istiyoruz. Bir parça kaç santimetre olur?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "Kenarları {@0} cm, {@1} cm ve {@2} cm olan bir üçgen çizilebilir mi?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "Parçanın uzunluğu iki uzunluğun da böleni olmalı. Hangi ortak bölen en büyüktür?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "Parçanın uzunluğu hem {@0} hem {@1} sayısını bölmeli ve olabildiğince büyük olmalı; $D({@2}, {@3})$ değerini arıyoruz.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "Çarpımı verilen sayı olan sayı ikililerini ara: 1 ve sayının kendisi, sonra 2 ve …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "En küçük ortak katı arıyoruz: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Hatlar {@8} dakika sonra, yani saat {@9}:{@10} olduğunda yeniden birlikte kalkar.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "Kendisiyle çarpıldığında {@0} eden sayıyı arıyoruz: $a = {@1}\\,\\text{cm}$. Çevre: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "Yalnızca eşkenar üçgenin 3 ekseni vardır. İkizkenar üçgenin yalnızca iki kenarı eşittir.",
  "Je menší ako 90°, preto je ostrý.": "90°'den küçük, bu yüzden dar açıdır.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "Çift ve rakamlar toplamı {@0}, 3 ile bölünür.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "Çift ama rakamlar toplamı {@0}, 3 ile bölünmez.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "Büyük basılı <strong style=\"font-size:1.6em\">{@0}</strong> harfi (tırnaksız basit biçimde) eksene göre simetrik midir?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "90°'den büyük ve 180°'den küçük, bu yüzden geniş açıdır.",
  "Je číslo {@0} deliteľné číslom {@1}?": "{@0} sayısı {@1} ile bölünür mü?",
  "Jeden kúsok bude merať {@0} cm.": "Bir parça {@0} cm olur.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "Bir derece 100 değil, 60 dakikadır – dakika sayısını altmışa böl.",
  "Jeden stupeň má 60 minút, nie 100.": "Bir derece 100 değil, 60 dakikadır.",
  "Jeden stupeň má 60 minút.": "Bir derece 60 dakikadır.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "Kontrol: EBOB · EKOK = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "Paralelkenarın hiç simetri ekseni yoktur. Herhangi bir doğru boyunca katlandığında kendisiyle çakışmaz.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "Eşkenar dörtgenin 2 simetri ekseni vardır: iki köşegeni.",
  "Koľko celých stupňov je v ${@0}'$?": "${@0}'$ içinde kaç tam derece var?",
  "Koľko deliteľov má číslo {@0}?": "{@0} sayısının kaç böleni vardır?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "${@0}$ ve ${@1}$ çarpanlarının toplam kaç ondalık basamağı var?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "{@1} sayısının $\\frac{1}{{@0}}$ kadarı kaçtır?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "{@2} sayısının $\\frac{{@0}}{{@1}}$ kadarı kaçtır?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "Çevrenin yarısı, yani $a + b$ kaç cm'dir?",
  "Koľko minút je ${@0}$?": "${@0}$ kaç dakikadır?",
  "Koľko minút je ${@0}^\\circ$?": "${@0}^\\circ$ kaç dakikadır?",
  "Koľko minút zostane?": "Kaç dakika kalır?",
  "Koľko osí súmernosti má {@0}?": "{@0} şeklinin kaç simetri ekseni vardır?",
  "Koľko riadkov je bod A vzdialený od osi?": "A noktası eksenden kaç satır uzakta?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "İki taban açısının toplamı kaç derecedir?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "$\\alpha$ ve $\\beta$ açılarının toplamı kaç derecedir?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "Çıkarmadan sonra kaç derece kalır (ödünç aldığın dereceyi unutma)?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "Üçgenin iç açıları toplamına kaç derece kalıyor?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "A noktası eksenden kaç sütun uzakta?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "Dakika sayısının içine 60 kaç kez sığar?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "Dairenin sonsuz sayıda simetri ekseni vardır: merkezinden geçen her doğru.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "Parçalara bölünmüş daireler: bir yarım, dört parçadan üçü, sekiz parçadan üçü",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "Doğru sadeleştirdin ama kesir henüz en sade biçiminde değil – pay ve payda hâlâ ortak bir sayıya bölünebiliyor.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "${@0}$ sayısında {@1} basamağından hemen sonra hangi rakam var?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "Hangi sayı kendisiyle çarpıldığında alanı verir? O sayı kenardır.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "Hangi sayı kendisiyle çarpıldığında {@0} eder?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "${@0}$ sayısının {@1} ile bölünebilmesi için $\\square$ yerine yazılacak en küçük rakam hangisidir?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "Toplamın {@1} ile bölünebilmesi için {@0} sayısına eklenecek en küçük rakam hangisidir?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "Bu uzunlukta parçalar artık kalmadan kesilebilir ama mümkün olan en uzun parçalar değildir.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "Komşu alan birimleri arasındaki dönüşüm oranı 100'dür.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "Açıölçerle açı ölçme: 50 derecelik açı",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "Dakika yetmiyor, bu yüzden 1 dereceyi çeviririz: ${@0} = {@1}$. Sonra ${@2} - {@3} = {@4}$ ve ${@5} - {@6} = {@7}$, sonuç ${@8}$.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "Dakika yetmiyor, 1 dereceyi 60 dakikaya çevir. O zaman birinci açının kaç dakikası olur?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "Dakika 60 ya da daha fazla olamaz. 60 dakikayı 1 dereceye çevir.",
  "Má 180°, ramená tvoria priamku, je priamy.": "180° ölçüsünde, kolları bir doğru oluşturur, doğru açıdır.",
  "Má presne 90°, je pravý.": "Tam olarak 90°, dik açıdır.",
  "NSD; nsn": "EBOB; EKOK",
  "Na deliteľnosť 6 treba oboje.": "6 ile bölünebilme için ikisi de gerekir.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "Sayı doğrusunda büyük sayı sağdadır. Her negatif sayı sıfırdan da her pozitif sayıdan da küçüktür.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "Sayı doğrusunda {@0} sayısı daha sağda, yani daha büyüktür. Bu yüzden ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "Gece en düşük sıcaklık {@0} °C, gündüz en yüksek sıcaklık {@1} °C idi. Gündüz kaç derece daha sıcaktı?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "Önce bir parça: ${@0} : {@1} = {@2}$. Sonra {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "Önce çevreden kenarı hesapla (karenin 4 eş kenarı vardır).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "{@0} ve {@1} sayılarının en büyük ortak böleni {@2}. Onunla sadeleştiririz: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "Unutma, 1 ve {@0} sayısının kendisi her zaman bölendir.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "Çift değil ve rakamlar toplamı {@0}, 3 ile bölünür.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "Çift değil ve rakamlar toplamı {@0}, 3 ile bölünmez.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "Hayır. {@0} harfinin ne dikey ne de yatay simetri ekseni var, katlandığında yarımlar çakışmaz.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "Hem payı hem paydayı bölen en büyük sayıyı bul.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "Virgülsüz çarparız: ${@0}\\cdot {@1} = {@2}$. Çarpanların toplam {@3} {@4} var, bu yüzden ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "Gündüz kaç derece daha sıcaktı?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "Sıcaklık 0 °C'den {@0} °C'ye kaç derece yükselir?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "Sıcaklık {@0} °C'den 0 °C'ye kaç derece yükselir?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "Dikdörtgenin (kare olmayan) karşılıklı kenarların orta noktalarını birleştiren 2 simetri ekseni vardır. Köşegenler simetri ekseni değildir.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "1 cm²'lik karelere bölünmüş 5 cm'ye 3 cm dikdörtgen",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "Bir dikdörtgenin alanı ${@0}\\,\\text{cm}^2$, bir kenarı ${@1}\\,\\text{cm}$. Diğer kenarı kaç cm'dir?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "Bir dikdörtgenin kenarları $a = {@0}\\,\\text{cm}$ ve $b = {@1}\\,\\text{cm}$. Alanını cm² cinsinden hesapla.",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "Bir dikdörtgenin kenarları $a = {@0}\\,\\text{cm}$ ve $b = {@1}\\,\\text{cm}$. Çevresini cm cinsinden hesapla.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "İki sayı da {@0} ile bölünür, yani $D({@1}, {@2}) = {@3} &gt; 1$. Aralarında asal değildirler.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "Alan kenarların çarpımıdır, yani diğer kenarı bölme ile bulursun.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "Alan kenarların çarpımıdır, bu yüzden diğer kenarı çıkarma ile değil, bölme ile bulursun.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "Alanı çevre gibi dörde bölmezsin. Kenar, kendisiyle çarpıldığında alanı veren sayıdır.",
  "Obsah obdĺžnika: S = a · b.": "Dikdörtgenin alanı: S = a · b.",
  "Obsah štvorca je strana krát strana.": "Karenin alanı kenar çarpı kenardır.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "Çevre, karenin kenarı değildir. Önce onu dörde böl – kenarı bulursun.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "Dikdörtgenin çevresi: Ç = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "Soğuma çıkarmak demektir.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "Çevreden a uzunluğundaki iki kenarı çıkardın. Geriye iki b kenarı kaldı – sonucu bir de ikiye böl.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "{@0} °C sıcaklığından negatif {@1} °C sıcaklığını çıkarıyorsun. Negatif sayı çıkarmak, ters işaretlisini eklemek demektir.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "Yüksek sıcaklıktan düşük olanı çıkar. Negatif sayı çıkarmak, ters işaretlisini eklemek demektir.",
  "Odčítaj minúty.": "Dakikaları çıkar.",
  "Odčítaj stupne.": "Dereceleri çıkar.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "Pozitif bir sayı çıkarıyorsun – sayı doğrusunda sola gidersin.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "Negatif sayı çıkarmak, ters işaretli sayıyı eklemek demektir: eksi ile eksi artı eder.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "Negatif sayı çıkarmak, ters işaretlisini eklemek demektir: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "Bir sayıyı çıkarmak, ters işaretlisini eklemekle aynıdır. Sayı doğrusundan yararlan.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "Karşılıklı kenarların orta noktalarından geçen doğruların yanı sıra karenin köşegenleri de simetri eksenidir.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "Ters işaretli sayı, sayı doğrusunda sıfıra aynı uzaklıkta ama diğer taraftadır: {@0} için bu {@1}.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "Ters işaretli sayının sıfıra uzaklığı aynı, işareti terstir.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "Simetri ekseni $o$ (kesikli çizgi), {@0}. satırdaki yatay doğrudur. $A$ noktası {@1}. satırda. Görüntüsü $A'$ hangi satırdadır?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "Simetri ekseni $o$ (kesikli çizgi), {@0}. sütundaki dikey doğrudur. $A$ noktası {@1}. sütunda. Görüntüsü $A'$ hangi sütundadır?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "Simetri ekseni eşkenar üçgenin yalnızca bir köşesinden değil, her köşesinden geçer.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "Dar açılı üçgenin üç açısı da 90°'den küçüktür. Üçüncü açıyı da hesaplamayı unutma.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "Dar açı dik açıdan, yani 90°'den küçüktür.",
  "Ostrý, pravý, tupý a priamy uhol": "Dar, dik, geniş ve doğru açı",
  "Oteplenie znamená pripočítať.": "Isınma eklemek demektir.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "Üçgen eşitsizliğini kontrol et: iki kısa kenarın toplamı en uzun kenardan büyük olmalı.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "Çevrenin yarısı $a + b = {@0} : 2 = {@1}$, bu yüzden $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "Çevrenin yarısı iki komşu kenarın toplamıdır.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "Açıyı dik açıyla (90°, defterin köşesi) ve doğru açıyla (180°) karşılaştır.",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "Son rakam {@0}, 0 ya da 5.",
  "Posledná číslica je {@0}, je to 0.": "Son rakam {@0}, yani 0.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "Son rakam {@0}, ne 0 ne de 5.",
  "Posledná číslica je {@0}, nie je to 0.": "Son rakam {@0}, 0 değil.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "Virgülü ters yöne kaydırdın. {@0} ile bölerken sayı küçülür.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "Virgülü ters yöne kaydırdın. {@0} ile çarparken sayı büyür.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "Verilen sayı için bölünebilme kuralını kullan (son rakam, rakamlar toplamı ya da son iki basamak).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "Yuvarladığın basamaktan sonraki ilk rakama bak: 0 – 4 aşağı, 5 – 9 yukarı.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "Dikkatle bak – iki sayı da aynı.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "Üç kenarın da aynı uzunlukta olup olmadığına bak – böyle bir üçgenin daha doğru bir adı var.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "10, 100 ya da 1 000 sayısındaki sıfırların sayısı, ondalık virgülün kaç basamak kayacağını gösterir.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "Dereceleri ve dakikaları ayrı ayrı hesapla. 60 dakika 1 derecedir.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "Dakikalar için 1 derece ödünç aldın ama derece sayısını bir azaltmadın.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "Dik açılı üçgenin bir açısı tam 90°'dir. Üçüncü açıyı hesapla ve kontrol et.",
  "Pravý uhol má presne 90° – ako roh zošita.": "Dik açı tam 90°'dir – defterin köşesi gibi.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "Harfin ortasından dikey ya da yatay olarak geçen bir ayna düşün.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "Şekli bir doğru boyunca katladığını düşün. Kaç farklı şekilde iki yarım tam olarak çakışır?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "Çevir: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "Bu yüzden hayır, {@0} sayısı {@1} ile bölünmez.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "Bu yüzden evet, {@0} sayısı {@1} ile bölünür.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "İki kesri ortak paydaya getir ve paylarını karşılaştır.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "{@0} ile bölerken ondalık virgülü {@1} {@2} sola kaydırırız: {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "10 ile bölünebilmede son rakam belirleyicidir – 0 olmalıdır.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "2 ile bölünebilmede yalnızca son rakam belirleyicidir – çift olmalıdır.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "3 ile bölünebilmede son rakam değil, rakamlar toplamı belirleyicidir. Bütün rakamları topla.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "4 ile bölünebilme için sayının çift olması yetmez. Son iki basamağın oluşturduğu sayı belirleyicidir.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "5 ile bölünebilmede son rakam belirleyicidir – 0 ya da 5 olmalıdır.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "9 ile bölünebilmede rakamlar toplamı belirleyicidir – 9 ile bölünmeli, 3 ile bölünmesi yetmez.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "{@0} ile çarparken ondalık virgülü {@1} {@2} sağa kaydırırız: {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "Alan birimlerinde dönüşüm oranı 10 değil, $10\\cdot 10 = 100$'dür: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "Alan birimlerinde dönüşüm oranı 10 değil, $10\\cdot 10 = 100$'dür: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "Ödünç alırken 1 dereceyi 100'e değil, 60 dakikaya çevirirsin.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "Negatif sayılarda sıfıra daha yakın olan daha büyüktür. Hangisinin rakamının büyük olduğu önemli değildir.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "Doğru açı 180°'dir, kolları aynı doğru üzerindedir.",
  "Pripočítaj ešte ${@0}'$.": "Bir de ${@0}'$ ekle.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "Pozitif bir sayı ekliyorsun – sayı doğrusunda sağa gidersin.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "Negatif sayı eklemek çıkarmak demektir: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "Negatif sayı eklemek, sayı doğrusunda sola gitmek, yani çıkarmak demektir.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "Asal sayının yalnızca iki böleni vardır. {@0} sayısının 2, 3, 5, 7 sayılarından biriyle kalansız bölünüp bölünmediğine bak.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "Asal sayının tam olarak iki böleni, bileşik sayının ise ikiden fazla böleni vardır. 1 sayısının kaç böleni var?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "İkizkenar üçgenin (eşkenar olmayan) 1 simetri ekseni vardır: tepe noktasından ve tabanın orta noktasından geçer.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "İkizkenar üçgenin iki kenarı aynı uzunluktadır.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "Eşkenar üçgenin 3 simetri ekseni vardır, her biri bir köşeden ve karşı kenarın orta noktasından geçer.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "Eşkenar üçgenin üç kenarı da aynı uzunluktadır.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "Sıcaklık farkı: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Gündüz {@5} °C daha sıcaktı.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "Belirleyici olan, bu basamaktan hemen sonraki rakam: {@0}. 5 ya da daha büyük, yukarı yuvarlarız: ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "Belirleyici olan, bu basamaktan hemen sonraki rakam: {@0}. 5'ten küçük, aşağı yuvarlarız: ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "Çarpanlara ayırma bitmedi: {@0} asal sayı değil. Asal sayılara bölmeye devam et.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "İki sayıyı da asal çarpanlarına ayır. EBOB'u ortak asal çarpanlar, EKOK'u bütün asal çarpanlar (en çok tekrarlandıkları sayıda) oluşturur.",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "{@0} ve {@1} sayılarını asal çarpanlarına ayır. En büyük ortak bölenleri nedir?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "{@0} sayısını asal sayıların çarpımı olarak yaz. Asal çarpanları küçükten büyüğe, noktalı virgülle ayırarak yaz (tekrar edenleri de).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "{@0} paydasına genişletiriz: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Ya da ${@6} : {@7}$ bölmesini yaparız.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "Sabah sıcaklık {@0} °C idi. Akşama kadar hava {@1} °C soğudu. Akşam sıcaklık kaç °C idi?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "Sabah sıcaklık {@0} °C idi. Akşama kadar hava {@1} °C ısındı. Akşam sıcaklık kaç °C idi?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "Çeşitkenar üçgenin üç kenarı da farklı uzunluktadır. Uzunlukları bir daha karşılaştır.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "Çeşitkenar üçgenin hiç simetri ekseni yoktur, hiçbir iki kenarı aynı uzunlukta değildir.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "Bu rakamla sayı gerçekten bölünür ama sen böyle en küçük rakamı arıyorsun.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "$\\frac{{@0}}{{@1}}$ kesrini en sade biçimine getir. Cevabı a/b biçiminde yaz.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "1'den büyük ortak bir bölen bulmaya çalış – örneğin iki sayının da 2, 3, 5 ya da 7 ile bölünüp bölünmediğine bak.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "Sayının 2, 3, 5 ya da 7 ile kalansız bölünüp bölünmediğine bak.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "Ortak payda {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ ve $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. ${@9} {@10} {@11}$ olduğundan $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "A noktasının eksenden kaç satır uzakta olduğunu say ve aynı sayıyı diğer tarafa doğru say.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "Kaç kenarın aynı uzunlukta olduğunu say.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "A noktasının eksenden kaç sütun uzakta olduğunu say ve aynı sayıyı diğer tarafa doğru say.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "Kenar: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Alan: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "Kenarı ikiyle çarptın. Karenin alanı kenar çarpı kenardır, kenar çarpı 2 değil.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "Kenarları topladın. Dikdörtgenin alanı, kenar uzunluklarının çarpımıdır.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "60 ve 84 sayılarının asal çarpan ağaçları",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "Dereceler: ${@0} + {@1} = {@2}$, dakikalar: ${@3} + {@4} = {@5}$. ${@6}' = 1^\\circ\\,{@7}'$ olduğundan sonuç ${@8}$.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "Dereceler: ${@0} + {@1} = {@2}$, dakikalar: ${@3} + {@4} = {@5}$. Sonuç ${@6}$.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "Dereceler: ${@0} - {@1} = {@2}$, dakikalar: ${@3} - {@4} = {@5}$. Sonuç ${@6}$.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "{@0} ve {@1} sayıları aralarında asal mıdır, değil midir?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "Toplam en uzun kenara eşit, kenarlar aynı doğru üzerinde olurdu. Üçgen çizilemez.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "Açıların toplamı $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "Üçgenin açıları toplamı 360° değil, 180°'dir.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "Üçgenin iç açıları toplamı 360° değil, 180°'dir.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "Üçgenin iç açıları toplamı 180°'dir.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "Bilinen rakamların toplamı {@0}. Rakamlar toplamı {@1} ile bölünmeli: uygun en küçük rakam {@2}, çünkü ${@3} + {@4} = {@5}$.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "{@0}·{@1} çarpımı ortak kattır ama en küçüğü değildir. Hatlar daha önce buluşur.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "{@0}·{@1} çarpımı ortak kattır ama en küçüğü değildir. EKOK'ta her asal çarpanı, en çok bulunduğu sayıdaki kadar al.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "İki kısa kenarı topla ve toplamlarını en uzun kenarla karşılaştır. Toplamın büyük olması yeterlidir.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "İki kısa kenarı topla ve en uzun kenarla karşılaştır. Toplam büyük olmalı.",
  "Sčítaj minúty.": "Dakikaları topla.",
  "Sčítaj stupne.": "Dereceleri topla.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "Bilinen rakamları topla. Toplama, toplam {@0} ile bölünecek şekilde mümkün olan en küçük rakamı ekle.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "Yalnızca iki kenarı topladın. Dikdörtgenin dört kenarı var, komşu kenarların toplamını bir de ikiyle çarp.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "Böylece rakamlar toplamı 3 ile bölünür ama 9 ile bölünebilme için 9 ile bölünmesi gerekir.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "Bu ölçü bütünler açıya aittir. Ters açılar karşı karşıya durur ve eştir.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "Bu en küçük ortak kat. Parça kurdelelerden kısa olmalı – en büyük ortak böleni arıyorsun.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "Bu en büyük ortak bölen. Birlikte kalkış zamanı iki aralığın da katı olmalı – en küçük ortak katı arıyorsun.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "Bu karenin çevresi. Alanı kenar çarpı kenar olarak hesaplarsın.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "Bu çevre. Dikdörtgenin alanını kenar uzunluklarının çarpımı olarak hesaplarsın.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "Bu karenin kenarı. Ondan bir de alanı hesapla.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "Bu karenin kenarı. Ondan bir de çevreyi hesapla.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "Bu, A noktasının eksene uzaklığı. Görüntü eksenin diğer tarafında aynı uzaklıktadır – onun numarasını bul.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "İki taban açısının toplamı bu kadar derece. Eşit oldukları için sonucu bir de ikiye böl.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "Üçüncü açı: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. En büyük açı ${@3}^\\circ$, dik açıdır, üçgen dik açılıdır.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "Üçüncü açı: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. En büyük açı ${@3}^\\circ$, geniş açıdır, üçgen geniş açılıdır.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "Üçüncü açı: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. En büyük açı ${@3}^\\circ$, bütün açılar dar, üçgen dar açılıdır.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "Bir üçgenin iki iç açısı ${@0}^\\circ$ ve ${@1}^\\circ$. Açılarına göre bu ne tür bir üçgendir?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "Bir üçgenin kenarları {@0} cm, {@1} cm ve {@2} cm. Kenarlarına göre ne tür bir üçgendir?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "Geniş açılı üçgenin bir açısı 90°'den büyüktür. Üçüncü açıyı hesapla ve kontrol et.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "Geniş açı 90°'den büyük ve aynı zamanda 180°'den küçüktür.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "Bu özelliğe yalnızca 1 sayısı sahiptir. 1'den büyük her doğal sayı ya asal ya da bileşik sayıdır.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "Dikdörtgenin köşegenleri simetri ekseni değildir – köşegen boyunca katlandığında yarımlar çakışmaz.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "İkizkenar üçgenin taban açıları eşittir ve üç açının toplamı 180°'dir.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "Taban açıları eşittir: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "$\\alpha$ açısı ${@0}^\\circ$. Bütünler açısı kaç derecedir?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "$\\alpha$ açısı ${@0}^\\circ$. Ters açısı kaç derecedir?",
  "Uhol má {@0}°.": "Açı {@0}°.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "Ondalık virgülü yerleştir: ${@0}\\cdot {@1}$ kaçtır?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "{@0} ve {@1} sayılarının en büyük ortak bölenini ve en küçük ortak katını bul. EBOB; EKOK sırasıyla yaz.",
  "V ktorom riadku leží obraz $A'$?": "Görüntü $A'$ hangi satırdadır?",
  "V ktorom stĺpci leží obraz $A'$?": "Görüntü $A'$ hangi sütundadır?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "Bir ikizkenar üçgende tabanın karşısındaki açı (tepe açısı) ${@0}^\\circ$. Taban açılarının her biri kaç derecedir?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "$ABC$ üçgeninde $\\alpha = {@0}^\\circ$ ve $\\beta = {@1}^\\circ$. $\\gamma$ açısı kaç derecedir?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "Bütünler açılar birlikte bir doğru açı oluşturur, ters açılar eştir.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "Bütünler açıların toplamı $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "Bütünler açılar dik açıya değil, doğru açıya (180°) tamamlanır.",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "Bütünler açılar birlikte doğru açı, yani 360° değil 180° oluşturur.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "Ters açılar eşit büyüklüktedir, bu yüzden o da ${@0}^\\circ$.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "Dakika sayısını 60'a böl. Bölüm dereceler, kalan dakikalardır.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "Payı da paydayı da {@0} sayısına böl. Hangi kesri elde edersin (a/b)?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "${@0}'$ değerini derece ve dakika olarak ifade et. derece; dakika biçiminde yaz.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "İki çarpanlara ayırmada da bulunan asal çarpanları çarp.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "Sayıları ondalık virgülsüz çarp, sonra iki çarpanın ondalık basamaklarını say.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "Sayıları ondalık virgülsüz çarp: ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "Kenarları çarptın – bu alan. Çevre, dört kenarın uzunluklarının toplamıdır.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "${@0} {@1} {@2}$ işlemini yap. Sonucu derece; dakika biçiminde yaz.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$ işlemini yap.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "$|{@0}| + |{@1}|$ işlemini yap.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "Yalnızca bir parçayı hesapladın. Onu bir de {@0} payıyla çarp.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "Sayı doğrusunda daha sağda olan sayı daha büyüktür. Dikkat: −2, −9'dan büyüktür.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "Bütün kenarlar aynı uzunlukta, üçgen eşkenardır.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "Üç kenar da farklı uzunlukta, üçgen çeşitkenardır.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "Otogardan A hattı her {@0} dakikada, B hattı her {@1} dakikada bir kalkıyor. Saat 7:00'de iki hat birlikte kalktı. Kaç dakika sonra yeniden birlikte kalkarlar?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "Küçük birimden büyük birime geçerken 100'e böleriz.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "Bu basamaktan sonra gelen rakam {@0}. ${@1}$ sayısını {@2} basamağına yuvarla.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Payı ve paydayı karıştırdın: sayıyı paydaya böl ve sonucu payla çarp.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "Başka bir basamağa yuvarladın. {@0} basamağına yuvarlamak, son kalan rakamın {@1} basamağında olması demektir.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "$\\frac{{@0}}{{@1}}$ kesrini ondalık sayı olarak yaz.",
  "Zapíš výsledok v poradí NSD; nsn.": "Sonucu EBOB; EKOK sırasıyla yaz.",
  "Zapíš výsledok v tvare stupne; minúty.": "Sonucu derece; dakika biçiminde yaz.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "$\\frac{{@0}}{{@1}}$ kesrini ondalık sayı olarak yaz.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "Sayıları tam sayılar gibi sağa hizaladın. Ondalık virgüller alt alta olmalı – {@0} sayısını {@1}0 olarak yaz.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "Ondalık virgülleri alt alta hizalar ve sıfırlarla tamamlarız: ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "İki sayıyı da bölen 1'den büyük bir sayı olup olmadığını bul.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "Kesir çizgisi ondalık virgül değildir. Kesir bölme demektir: payı paydaya böl.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "Kesirler eşit değil. Onları ortak paydaya getir ve paylarını karşılaştır.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "Paydaları farklı kesirleri yalnızca paylarına ya da yalnızca paydalarına bakarak karşılaştıramazsın. Onları ortak paydaya getir.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "Kesri paydası 10, 100 ya da 1 000 olacak şekilde genişlet ya da payı paydaya böl.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "Bileşik sayının 1 ve kendisi dışında da böleni vardır. {@0} sayısının böyle bir bölenini bulmaya çalış – yoksa sayı bileşik değildir.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "Noktayı eksene göre değil, kareli alanın merkezine göre yansıttın.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "Bir bahçe {@0} m'ye {@1} m boyutlarında dikdörtgen biçiminde. Bahçenin alanı kaç m²'dir?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "Bir bahçe {@0} m'ye {@1} m boyutlarında dikdörtgen biçiminde. Etrafını çevirmek için kaç metre tel gerekir?",
  "ani prvočíslo, ani zložené": "ne asal ne bileşik",
  "desatinné miesta": "ondalık basamak",
  "desatinné miesto": "ondalık basamak",
  "desatinných miest": "ondalık basamak",
  "desatín": "onda birler",
  "jednotky (celé čísla)": "birler (tam sayılar)",
  "kladné": "pozitif",
  "kosodĺžnik (rovnobežník)": "paralelkenar",
  "kosoštvorec": "eşkenar dörtgen",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "küçük bölmeler yüzde birler (0,01), büyükler onda birler (0,1)",
  "miesta": "basamak",
  "miesto": "basamak",
  "napr. 2/3": "örneğin 2/3",
  "napr. 2; 2; 3": "örneğin 2; 2; 3",
  "nekonečne veľa": "sonsuz sayıda",
  "nesúdeliteľné": "aralarında asal",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "EKOK bütün asal çarpanları içerir: $n({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "dar açılı",
  "ostrý (30°)": "dar (30°)",
  "podľa strán": "kenarlarına göre",
  "podľa uhlov": "açılarına göre",
  "pravouhlý": "dik açılı",
  "pravý (90°)": "dik (90°)",
  "priamy": "doğru",
  "priamy (180°)": "doğru (180°)",
  "prvočíslo": "asal sayı",
  "riadkov": "satır",
  "rovnoramenný": "ikizkenar",
  "rovnoramenný trojuholník": "ikizkenar üçgen",
  "rovnostranný": "eşkenar",
  "rovnostranný trojuholník": "eşkenar üçgen",
  "rôznostranný": "çeşitkenar",
  "rôznostranný trojuholník": "çeşitkenar üçgen",
  "stotiny": "yüzde birler",
  "stotín": "yüzde birler",
  "stred uhlomera = vrchol uhla": "açıölçerin merkezi = açının köşesi",
  "stupne; minúty": "derece; dakika",
  "stĺpce": "sütun",
  "stĺpcov": "sütun",
  "stĺpec": "sütun",
  "súdeliteľné": "aralarında asal değil",
  "tupouhlý": "geniş açılı",
  "tupý (135°)": "geniş (135°)",
  "zložené číslo": "bileşik sayı",
  "záporné": "negatif",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "Evet. {@0} harfinin yatay simetri ekseni var.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "Evet. {@0} harfinin hem dikey hem yatay simetri ekseni var.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "Evet. {@0} harfinin dikey simetri ekseni var.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "Kareli kâğıtta bir şekil ve eksenel simetrideki görüntüsü",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "Birlikte kalkış zamanı iki aralığın da katı olmalı. Bunların en küçüğünü ara.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "Onda birler ve yüzde birlerle 2'den 3'e sayı doğrusu",
  "Číselná os s celými číslami od −6 do 6": "−6'dan 6'ya tam sayılarla sayı doğrusu",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "Sayılar eşit değil. Hangisinin sayı doğrusunda daha sağda olduğunu bul.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "1'den 60'a kadar sayılar, asal sayılar boyalı",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "Bu basamaktan sonraki rakam {@0}, yani 5 ya da daha büyük – yukarı yuvarlanır.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "Bu basamaktan sonraki rakam {@0}, yani 5'ten küçük – aşağı yuvarlanır.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "1 sayısının tek bir böleni (kendisi) vardır, bu yüzden ne asal ne de bileşik sayıdır.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "Sayı 6 ile ancak hem 2 hem 3 ile bölünüyorsa bölünür. İki koşulu da kontrol et.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "Sayıyı paydaya böl ve sonucu payla çarp.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "Son iki basamağın oluşturduğu sayı {@0}, 4 ile bölünür.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "Son iki basamağın oluşturduğu sayı {@0}, 4 ile bölünmez.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "{@0} sayısının yalnızca iki böleni var: 1 ve {@1}. Bu bir asal sayıdır.",
  "časti": "parça",
  "častí": "parça",
  "časť": "parça",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "Karenin 4 simetri ekseni vardır: 2'si karşılıklı kenarların orta noktalarını birleştirir, 2'si köşegenler üzerindedir.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "Bir karenin alanı ${@0}\\,\\text{cm}^2$. Çevresi kaç cm'dir?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Bir karenin çevresi ${@0}\\,\\text{cm}$. Alanı kaç cm²'dir?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "Bir karenin kenarı ${@0}\\,\\text{cm}$. Alanı kaç cm²'dir?",
  "štvorčeková sieť s osou a bodom A": "eksen ve A noktası olan kareli alan"
 }
});
