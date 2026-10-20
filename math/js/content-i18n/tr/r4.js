/* Türkçe: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/r4/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "r4-cisla10000": {
   "title": "10 000'e kadar ve daha büyük sayılar",
   "summary": "Binler, yüzler, onlar ve birler; büyük sayıları okuma, yazma ve karşılaştırma.",
   "theory": [
    "<p>Bir sayıdaki her rakamın kendi <strong>basamağı</strong> vardır: birler, onlar, yüzler, binler, on binler…\n       On birlik bir onluk, on onluk bir yüzlük, on yüzlük bir binlik, on binlik ise $10\\,000$ eder.</p>",
    {
     "fig": "r4-rady",
     "caption": "$47\\,385$ sayısında 4 on binlik, 7 binlik, 3 yüzlük, 8 onluk ve 5 birlik vardır."
    },
    "<p>Büyük sayıları sağdan itibaren üçerli gruplar arasına boşluk bırakarak yazarız: $8\\,206$, $35\\,000$. Böylece daha kolay okunurlar:\n       <em>sekiz bin iki yüz altı</em>, <em>otuz beş bin</em>.</p>",
    "<p><strong>Karşılaştırma:</strong> daha çok basamağı olan sayı daha büyüktür. Basamak sayıları eşitse soldan\n       karşılaştırırız – önce binler, sonra yüzler, onlar ve birler. Örneğin $5\\,382 &gt; 5\\,297$, çünkü 3 yüzlük 2 yüzlükten fazladır.</p>"
   ],
   "examples": [
    {
     "task": "Rakamla yaz: 6 binlik, 0 yüzlük, 4 onluk ve 9 birlik.",
     "steps": [
      "Rakamlar kaymasın diye yüzler basamağına sıfır yazarız.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>Sayı $6\\,049$'dur.</strong>"
     ]
    },
    {
     "task": "$7\\,615$ ile $7\\,651$ sayılarını karşılaştır.",
     "steps": [
      "Her iki sayı da dört basamaklıdır ve ikisinde de 7 binlik ve 6 yüzlük vardır.",
      "Onlar: 1, 5'ten küçüktür.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "Alt alta toplama ve çıkarma",
   "summary": "Çok basamaklı sayıları alt alta toplama ve çıkarma.",
   "theory": [
    "<p>Alt alta toplamada sayıları birler birlerin, onlar onların altına gelecek şekilde <strong>alt alta</strong> yazarız.\n       <strong>Sağdan</strong>, birlerden başlayarak hesaplarız. Bir sütundaki toplam 9'u geçerse yalnızca birlik basamağını yazar\n       ve 1'i bir sonraki sütuna elde olarak aklımızda tutarız.</p>",
    {
     "fig": "r4-scitanie",
     "caption": "Alt alta toplama: $3\\,476 + 2\\,858 = 6\\,334$. Üstteki küçük birler, elde tuttuğumuz sayılardır."
    },
    "<p>Alt alta çıkarmada da birlerden başlarız. Üstteki rakam alttakinden küçükse ona 10 ekleriz\n       ve bir sonraki sütunda alttaki rakama eklemek üzere 1'i aklımızda tutarız.</p>",
    "<p><strong>Sağlama:</strong> çıkarmanın sonucunu toplama ile doğrularız. $5\\,203 - 1\\,868 = 3\\,335$ ise\n       $3\\,335 + 1\\,868 = 5\\,203$ olmalıdır.</p>"
   ],
   "examples": [
    {
     "task": "$4\\,587 + 3\\,765$ işlemini alt alta yap.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "Birler: $7 + 5 = 12$, 2 yazarız, 1 elde. Onlar: $8 + 6 + 1 = 15$, 5 yazarız, 1 elde.",
      "Yüzler: $5 + 7 + 1 = 13$, 3 yazarız, 1 elde. Binler: $4 + 3 + 1 = 8$.",
      "<strong>Sonuç: $8\\,352$</strong>"
     ]
    },
    {
     "task": "$6\\,042 - 2\\,718$ işlemini alt alta yap.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "Birler: 2, 8'den küçüktür, bu yüzden $12 - 8 = 4$, 1'i aklımızda tutarız.",
      "Onlar: $1 + 1 = 2$, $4 - 2 = 2$. Yüzler: 0, 7'den küçüktür, bu yüzden $10 - 7 = 3$, 1'i aklımızda tutarız.",
      "Binler: $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>Sonuç: $3\\,324$</strong>. Sağlama: $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "Alt alta çarpma ve bölme",
   "summary": "Bir ve iki basamaklı sayıyla çarpma, bir basamaklı sayıyla kalanlı bölme.",
   "theory": [
    "<p><strong>Bir basamaklı sayıyla alt alta çarpma:</strong> sırayla birleri, onları, yüzleri… çarparız.\n       Sonuç 9'u geçerse birlik basamağını yazar, onlukları aklımızda tutar ve bir sonraki çarpıma ekleriz.</p>",
    "<p><strong>İki basamaklı sayıyla çarpma:</strong> önce birler basamağıyla, sonra onlar basamağıyla çarparız. İkinci kısmi\n       çarpımı bir basamak sola kaydırarak yazarız. En sonunda kısmi çarpımları toplarız.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$: önce $243\\cdot 2 = 486$, sonra sola kaydırılmış $243\\cdot 3 = 729$ ($7\\,290$ anlamına gelir). Toplam $7\\,776$."
    },
    "<p><strong>Uzun bölme:</strong> soldan başlayarak böleriz. Bölünebilecek kadar rakam alır, bölümü ve kalanı buluruz,\n       sonraki rakamı yanına indirir ve devam ederiz. Sonunda bir şey artarsa bu <strong>kalandır</strong> ve her zaman bölenden küçüktür.\n       Sağlama: $\\text{bölüm}\\cdot\\text{bölen} + \\text{kalan} = \\text{bölünen}$.</p>"
   ],
   "examples": [
    {
     "task": "$1\\,627\\cdot 4$ işlemini alt alta yap.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, 8 yazarız, 2 elde. $4\\cdot 2 + 2 = 10$, 0 yazarız, 1 elde.",
      "$4\\cdot 6 + 1 = 25$, 5 yazarız, 2 elde. $4\\cdot 1 + 2 = 6$.",
      "<strong>Sonuç: $6\\,508$</strong>"
     ]
    },
    {
     "task": "$947 : 6$ bölme işlemini yap.",
     "steps": [
      "$9 : 6 = 1$, kalan 3.",
      "4'ü indiririz: $34 : 6 = 5$, kalan 4.",
      "7'yi indiririz: $47 : 6 = 7$, kalan 5.",
      "<strong>$947 : 6 = 157$, kalan 5.</strong> Sağlama: $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "Birden fazla işlem içeren problemler",
   "summary": "Birkaç adımda çözülen problemler: alışveriş, gruplara ayırma, karşılaştırma.",
   "theory": [
    "<p>Bazı problemler tek bir işlemle çözülemez. Adım adım ilerleriz:</p>\n       <ol><li>Ne biliyoruz? Ne arıyoruz?</li><li>Cevap verebilmek için önce neyi bulmalıyım?</li>\n       <li>Her adımı hesaplar ve yazarım.</li><li>Cevabı yazar ve mantıklı olup olmadığını kontrol ederim.</li></ol>",
    "<p><strong>Faydalı sözcükler:</strong> <em>… fazla / eksik</em> – toplarız veya çıkarırız;\n       <em>… kat fazla / … kat az</em> – çarparız veya böleriz; <em>eşit paylaştırdılar</em>, <em>…'er</em> – böleriz;\n       <em>kalan</em>, <em>para üstü</em> – çıkarırız.</p>",
    "<p>Adımları parantezli tek bir ifadeyle de yazabiliriz, örneğin $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       İşlem önceliğini unutma: önce çarpma ve bölme, sonra toplama ve çıkarma.</p>"
   ],
   "examples": [
    {
     "task": "Annem tanesi 12 avro olan 3 kitap aldı ve 50 avroluk banknotla ödedi. Ona kaç avro para üstü verildi?",
     "steps": [
      "Önce kitapların fiyatını buluruz: $3\\cdot 12 = 36$ avro.",
      "Sonra para üstünü: $50 - 36 = 14$ avro.",
      "Tek bir ifadeyle: $50 - 3\\cdot 12 = 14$.",
      "<strong>Cevap: Anneme 14 avro para üstü verildi.</strong>"
     ]
    },
    {
     "task": "Geziye 23'er öğrencili 4 sınıf gitti. Öğrenciler otobüslerle yolculuk etti, her otobüste 46 öğrenci vardı. Kaç otobüs gitti?",
     "steps": [
      "Öğrenci sayısı: $4\\cdot 23 = 92$.",
      "Otobüs sayısı: $92 : 46 = 2$.",
      "<strong>Cevap: 2 otobüs gitti.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "Romen rakamları",
   "summary": "I, V, X, L, C, D, M sembolleri ve sayıları Romen rakamlarıyla yazma.",
   "theory": [
    "<p>Eski Romalılar sayıları yedi harfle yazarlardı. Romen rakamlarını bugün hâlâ saatlerde, yüzyılların adlarında\n       veya binalarda görebiliriz.</p>",
    {
     "fig": "r4-rimske",
     "caption": "Romen rakamları ve değerleri."
    },
    "<p><strong>Kurallar:</strong> sembollerin değerlerini toplarız: $\\text{XVI} = 10 + 5 + 1 = 16$. Aynı sembol (I, X, C, M)\n       art arda en fazla üç kez yazılabilir: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>Küçük bir sembol büyük bir sembolün <strong>önünde</strong> durursa onu çıkarırız: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. Bu yüzden 4'ü IIII değil, IV olarak yazarız.</p>"
   ],
   "examples": [
    {
     "task": "Romen rakamlarıyla yazılmış $\\text{LXXIV}$ hangi sayıdır?",
     "steps": [
      "Parçalara ayırırız: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "39 sayısını Romen rakamlarıyla yaz.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "Açı, üçgen ve dörtgenler",
   "summary": "Dar, dik ve geniş açı; üçgen, dikdörtgen, kare ve diğer dörtgenler.",
   "theory": [
    "<p><strong>Açıyı</strong>, bir noktadan – <strong>köşeden</strong> – çıkan iki kol oluşturur.\n       Dik açı, defterin köşesi biçimindedir. Dik açıdan küçük açı <strong>dar açı</strong>, dik açıdan büyük\n       (ama henüz düz çizgi olmayan) açı <strong>geniş açıdır</strong>.</p>",
    {
     "fig": "r4-uhly",
     "caption": "Dar, dik ve geniş açı. Dik açıyı küçük bir kareyle işaretleriz."
    },
    "<p><strong>Üçgenin</strong> 3 kenarı, 3 köşesi ve 3 açısı vardır. <strong>Dörtgenin</strong> 4 kenarı, 4 köşesi ve 4 açısı vardır.\n       <strong>Dikdörtgen</strong>, 4 dik açısı olan dörtgendir; karşılıklı kenarları eşit uzunluktadır.\n       <strong>Kare</strong>, 4 kenarının hepsi eşit uzunlukta olan dikdörtgendir.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "Karenin ve dikdörtgenin bütün açıları diktir. Her kare aynı zamanda bir dikdörtgendir."
    }
   ],
   "examples": [
    {
     "task": "Saat 3:00'te akrep ile yelkovan arasındaki açı dar mı, dik mi, yoksa geniş mi?",
     "steps": [
      "Akrep 3'ü, yelkovan 12'yi gösterir.",
      "Aralarında çemberin dörtte biri vardır – defterin köşesi biçiminde.",
      "<strong>Bu bir dik açıdır.</strong>"
     ]
    },
    {
     "task": "Bir dikdörtgenin bir kenarı 7 cm, diğer kenarı 4 cm'dir. Kalan iki kenar kaç cm'dir?",
     "steps": [
      "Dikdörtgenin karşılıklı kenarları eşit uzunluktadır.",
      "<strong>Kalan kenarlar 7 cm ve 4 cm'dir.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "Çevre ve alan",
   "summary": "Kenar uzunluğu olarak çevre, şekli kaplayan karelerin sayısı olarak alan.",
   "theory": [
    "<p>Bir şeklin <strong>çevresi</strong>, kenarının uzunluğu, yani bütün kenar uzunluklarının toplamıdır. Kenarları\n       $a$ ve $b$ olan dikdörtgenin çevresi $a + b + a + b$, yani $2\\cdot(a + b)$'dir. Bir kenarı $a$ olan karenin çevresi $4\\cdot a$'dır.</p>",
    "<p><strong>Alan</strong>, şeklin ne kadar yer kapladığını gösterir. Alanı, şekli kaplayan küçük kareleri sayarak buluruz.\n       Bir kenarı 1 cm olan karenin alanı 1 santimetrekaredir ($1\\,\\text{cm}^2$).</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "4 cm × 3 cm'lik dikdörtgen: çevre mavi kenarın uzunluğu, alan ise içindeki karelerin sayısıdır."
    },
    "<p>Dikdörtgende kareleri tek tek saymamız gerekmez: her satırda bir kenarın uzunluğu kadar kare,\n       diğer kenarın uzunluğu kadar da satır vardır. Bu yüzden alan $= a\\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "Kenarları 8 cm ve 5 cm olan dikdörtgenin çevresini hesapla.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>Çevre $26\\,\\text{cm}$'dir.</strong>"
     ]
    },
    {
     "task": "Bir karenin çevresi 36 cm'dir. Bir kenarı kaç cm'dir?",
     "steps": [
      "Karenin eşit uzunlukta 4 kenarı vardır, toplamları 36 cm'dir.",
      "$36 : 4 = 9$.",
      "<strong>Bir kenarı $9\\,\\text{cm}$'dir.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "Birim dönüşümleri ve verilerle çalışma",
   "summary": "Uzunluk, kütle, hacim ve zaman birimleri; tablodan ve grafikten veri okuma.",
   "theory": [
    "<p><strong>Uzunluk:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>Kütle:</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>Hacim:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>Zaman:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1 gün = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "Büyük birimi küçük birime çevirdiğimizde sayı büyür – çarparız. Tersinde böleriz."
    },
    "<p><strong>Verileri</strong> çoğu zaman bir tablodan veya sütun grafiğinden okuruz. Sütunun yüksekliği değeri gösterir –\n       bu değeri dikey eksenden okuruz. Verilerle hem karşılaştırma (ne kadar fazla) hem de toplama (toplam ne kadar) yapabiliriz.</p>"
   ],
   "examples": [
    {
     "task": "4 m 35 cm kaç santimetredir?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "$6\\,000\\,\\text{g}$ kaç kilogramdır?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$; daha büyük birime çeviriyoruz, bu yüzden böleriz.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, bu yüzden ${@3} : {@4} = {@5}$. Yani ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, bu yüzden ${@3}\\cdot {@4} = {@5}$. Yani ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, çevre ${@4}\\,\\text{{@5}}$.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, çevre ${@2}\\,\\text{{@3}}$.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. Hiç olmayan basamağa sıfır yazarız.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, baştaki sıfırı yazmayız",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, {@3} yazılır",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, çünkü ${@3}\\cdot {@4} = {@5}$, kalan {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. {@2} {@3} oy verdi.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, ${@4}\\,\\text{{@5}}$ ekleriz: ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12 kare = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "İki dik açısı olsaydı kenarları paralel olurdu ve hiç kesişmezdi.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "Bu şeklin adı nedir? En doğru adı seç.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "{@0} sayısını Roma rakamlarıyla nasıl yazarsın?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "Dikdörtgenin yatay kenarı kaç cm'dir?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "Dikdörtgenin dikey kenarı kaç cm'dir?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "$\\text{{@0}}$ Roma rakamlarıyla hangi sayı yazılmıştır?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "$\\text{{@0}}$ Roma rakamının değeri nedir?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "$\\text{{@0}}$ kısmının değeri nedir?",
  "Aký je tento uhol?": "Bu açı ne tür bir açıdır?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "Eksik toplananı çıkarma yaparak buluruz: ${@0} - {@1} = {@2}$.",
  "Desiatky": "Onluklar",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "Sınıftaki çocuklar en çok hangi meyveyi sevdiklerini oyladı. Her çocuk bir kez oy verdi.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "Soldan başlayarak böl; sondaki kalan {@0} sayısından küçük olmalı.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "Soldan başlayarak böl. Bölünebilecek kadar rakam al ve sonra sıradaki rakamları tek tek indir.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "Çevreye yalnızca iki kenarı kattın. Çevreyi dört kenarın hepsi oluşturur.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "Sağa doğru (küçük birime) çarparız, sola doğru (büyük birime) böleriz.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "İkinci çarpımı bir basamak sola kaydır (${@0}$ anlamına gelir) ve topla: ${@1} + {@2}$ kaçtır?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "İkinci kısmi çarpımı bir basamak sola kaydırmadın. Onluklarla çarpıyorsun, bu yüzden on kat fazlası anlamına gelir.",
  "Dvakrát": "İki",
  "Hodina má 60 minút a minúta 60 sekúnd.": "Bir saat 60 dakika, bir dakika 60 saniyedir.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "{@0} değerine {@2} değil, {@1} Roma rakamı karşılık gelir.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "Değerleri toplama. “Kaç fazla” bir farktır – büyük değerden küçük değeri çıkar.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "Simgelerin değerlerini topla. Küçük simge büyük simgenin önündeyse (örneğin IV, IX, XL, XC), onu çıkar.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "Ne kadar çıkardığımızı arıyoruz: ${@0} - {@1} = {@2}$. Kontrol: ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10 – ardından L, C, D, M.",
  "Jakub": "Mert",
  "Je toto tvrdenie pravdivé? „{@0}“": "Bu ifade doğru mu? “{@0}”",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "Bir üçgenin 3 açısı vardır, iki üçgenin $2\\cdot 3 = 6$ açısı vardır.",
  "Jednotky": "Birlikler",
  "Každý obdĺžnik je štvorec.": "Her dikdörtgen bir karedir.",
  "Každý uhol má 2 ramená a 1 vrchol.": "Her açının 2 kenarı ve 1 köşesi vardır.",
  "Každý štvorec je obdĺžnik.": "Her kare bir dikdörtgendir.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "Kareli kâğıttaki her karenin kenarı 1 cm'dir. Boyalı dikdörtgenin çevresini (cm olarak) ve alanını (cm² olarak) bul. Bunları “çevre; alan” biçiminde yaz. {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "Herkesin sığması için {@0} kişilik kaç otobüs gerekir?",
  "Koľko detí hlasovalo za {@0}?": "{@0} için kaç çocuk oy verdi?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "Toplam kaç avroları var? ${@0} + {@1} + {@2}$ işlemini yap.",
  "Koľko eur má {@0}?": "{@0}'in kaç avrosu var?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "Kaç avro para üstü verildi? ${@0} - {@1}$ işlemini yap.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "${@0} + {@1}$ (iki komşu kenar) kaçtır?",
  "Koľko je riadkov?": "Kaç satır var?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "Satıştan sonra kaç kilogram patates kaldı?",
  "Koľko pravých uhlov má obdĺžnik?": "Dikdörtgenin kaç dik açısı vardır?",
  "Koľko pravých uhlov má štvorec?": "Karenin kaç dik açısı vardır?",
  "Koľko ramien má jeden uhol?": "Bir açının kaç kenarı vardır?",
  "Koľko uhlov majú spolu dva trojuholníky?": "İki üçgenin toplam kaç açısı vardır?",
  "Koľko uhlov má trojuholník?": "Üçgenin kaç açısı vardır?",
  "Koľko vrcholov má štvoruholník?": "Dörtgenin kaç köşesi vardır?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "Bunlarla {@0} kg'lık kaç çuval doldurulur?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "Geziye toplam kaç kişi gidiyor (öğrenciler ve öğretmenler)?",
  "Koľko štvorčekov je v jednom riadku?": "Bir satırda kaç kare var?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "Boyalı dikdörtgeni 1 cm × 1 cm boyutundaki kaç kare kaplar? (Alanı cm² olarak yaz.) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "{@1} içinde kaç tane {@0} var?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "${@0}$ sayısının {@1} basamağındaki rakam hangisidir?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "${@1}$ sayısından {@0} küçük olan sayı hangisidir?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "${@1}$ sayısından {@0} büyük olan sayı hangisidir?",
  "Lucia": "Melis",
  "Martin": "Metin",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "Daha küçük birime çeviriyorsun – sayı büyür, çarp.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "Daha büyük birime çeviriyorsun – sayı küçülür, böl.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "Büyük simgenin önündeki küçük simge çıkarılır, eklenmez. Örneğin IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "3 kenarı ve 3 köşesi var – bu bir üçgen.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "4 dik açısı var ve bütün kenarları aynı uzunlukta – bu bir kare.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "4 dik açısı var ama komşu kenarları farklı uzunlukta – bu bir dikdörtgen.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "4 kenarı var ama açıları dik değil – bu genel bir dörtgen.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "Geziye her birinde {@1} öğrenci olan {@0} sınıf ve onlarla birlikte {@2} öğretmen gidiyor. Bir otobüs {@3} kişiliktir. Herkesin sığması için kaç otobüs ayırtmaları gerekir?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "Önce ${@0}\\cdot {@1} = {@2}$, sonra ${@3}\\cdot {@4} = {@5}$ (bir basamak sola yazarız, bu ${@6}$ anlamına gelir). Toplarız: ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "Önce alışverişin tutarı: ${@0}\\cdot {@1} = {@2}$ {@3}. Sonra para üstü: ${@4} - {@5} = {@6}$. Para üstü olarak {@8} {@9} aldı.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "Önce birliklerle çarp: ${@0}\\cdot {@1}$ kaçtır?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "Önce büyük birimi küçük birime çevir, sonra kalanı ekle.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Önce büyük birimi çevir: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "Önce kaç kilogram kaldığını bul, sonra bir çuvalın bunun içine kaç kez sığdığını bul.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "Önce alışverişin tamamının ne kadar tuttuğunu bul, sonra bunu banknottan çıkar.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "Sayıları alt alta, birlikler birliklerin altına gelecek şekilde yaz ve sağdan başlayarak topla. Eldeleri unutma.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "Rakamları binlikler, yüzlükler, onluklar, birlikler sırasıyla yan yana yaz. Sıfırları unutma.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "Sağdan başlayarak çarp: önce birlikler, sonra onluklar, yüzlükler… Çarpımdaki onlukları elde tut.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "Kareli kâğıtta 4'e 3 dikdörtgen",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "Dikdörtgenin iki uzun ve iki kısa kenarı vardır. Dördünü de topla.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "Dikdörtgenin karşılıklı kenarları aynı uzunluktadır.",
  "Obdĺžnik má všetky 4 uhly pravé.": "Dikdörtgenin 4 açısının hepsi diktir.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "Dikdörtgende her birinde {@2} kare olan {@0} {@1} var: ${@3}\\cdot {@4} = {@5}$. Alan ${@6}\\,\\text{cm}^2$.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "Dikdörtgenin komşu kenarları farklı uzunlukta olabilir, örneğin 5 cm ve 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "Kareli kâğıtta dikdörtgen",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "Alan: ${@0}\\cdot {@1}$ kaçtır?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "Çevre kenarın uzunluğu, alan ise içerideki karelerin sayısıdır.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "Çevre, kenardaki karelerin sayısı değil, kenarın uzunluğudur. Bütün kenarların uzunluklarını topla.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "Çevreyi 4 eş kenar oluşturur: ${@0} : 4 = {@1}$, kenar ${@2}\\,\\text{{@3}}$.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "Çevreyi böyle iki kenar çifti oluşturur: $2\\cdot {@0}$ kaçtır?",
  "Obvod štvorca vydeľ štyrmi.": "Karenin çevresini dörde böl.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "Çevre: $2\\cdot({@0} + {@1})$ kaçtır?",
  "Od menšenca odčítaj rozdiel.": "Eksilenden farkı çıkar.",
  "Od súčtu odčítaj známy sčítanec.": "Toplamdan bilinen toplananı çıkar.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "Sağdan başlayarak çıkar. Üstteki rakam küçükse ona 10 ekle ve 1'i sonraki sütun için aklında tut.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "{@0} çıkar. Basamak geçişine dikkat et.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "Yalnızca bir şeyin fiyatını çıkardın. {@0} şey alındı, önce alışverişin tamamının tutarını hesapla.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Dar açı, defterin köşesinden küçüktür. Bu açıyı defterin köşesiyle karşılaştır.",
  "Ostrý, pravý a tupý uhol": "Dar, dik ve geniş açı",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "Önce basamak sayılarını, sonra rakamları soldan sağa karşılaştır.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "Açıyı defterin köşesiyle (dik açıyla) karşılaştır.",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "Soldan başlayarak basamak basamak karşılaştırırız. İlk farklı rakam belirler: ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "Sonra onluklarla: ${@0}\\cdot {@1}$ kaçtır?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "Sütunun hangi çizgiye kadar uzandığına bak ve soldaki sayıyı oku.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "Kişi sayısı: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, kalan {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "100 ile hesapladın. Zamanda $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$ geçerlidir.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "Dik açı tam olarak defterin köşesi biçimindedir ve küçük bir kareyle gösterilir. Bu açıyı defterin köşesiyle karşılaştır.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "Şekli gözünün önüne getir ve köşelerini, kenarlarını ya da açılarını say.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "Çevir: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "Çevir: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "Uzunluk ve kütle birimlerinin dönüşümü",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "Her sütunun değerini oku ve hepsini topla.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "İki değeri de oku ve büyükten küçüğü çıkar.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "{@0} için verilen oyları ekle: şimdi toplam kaç?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "{@0} ekle. Basamak geçişine dikkat et.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "{@0} rakamını indir: {@2} içinde kaç tane {@1} var?",
  "Písomné násobenie 243 krát 32": "243 çarpı 32 alt alta çarpma",
  "Písomné sčítanie 3476 plus 2858": "3476 artı 2858 alt alta toplama",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "Satılanlar dahil bütün patatesleri çuvallara paylaştırdın. Önce satılanı çıkar.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "Sayıyı onluklara ve birliklere ayır. Unutma: 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "Ayırırız: {@0}. Toplam ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "Basamakları soldan saydın. Birlikler sağdaki son rakamdır, oradan sola doğru ilerle.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "Basamakları sağdan okuruz: birlikler, onluklar, yüzlükler, binlikler, on binlikler. {@0} basamağında {@1} rakamı var.",
  "Rímske číslice a ich hodnoty": "Roma rakamları ve değerleri",
  "Samuel": "Erdem",
  "Skúška: ${@0} + {@1} = {@2}$.": "Kontrol: ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "İki kısmı birleştir: {@0} sayısını nasıl yazarsın?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "Hatırla: dikdörtgenin 4 dik açısı vardır, karenin ayrıca bütün kenarları eşittir.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "Kenarları say ve açıların dik olup olmadığına bak (köşedeki küçük kare).",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "Şeklin kenarlarını say. Üçgenin 3, dörtgenin 4 kenarı vardır.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "Öğretmenler dahil herkesi say. Bölmeden sonra artan kişi olursa onlar için bir otobüs daha gerekir.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "Bir satırdaki kareleri say ve satır sayısıyla çarp.",
  "Stovky": "Yüzlükler",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "Kenarı kendisiyle çarptın – bu alan olurdu. Çevre, dört kenarın toplamıdır.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "Kenarları topladın. Alan, karelerin sayısıdır: bir satırdaki kare sayısı çarpı satır sayısı.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "Kenarları çarptın – bu alan olurdu. Çevre kenarın uzunluğudur, kenarlar toplanmalı.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "Kenarlar {@0} cm ve {@1} cm. Çevre: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Alan: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "Oylamanın sütun grafiği",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "“{@0}” sütunu {@1} çizgisine kadar uzanıyor. {@2} {@3} oy verdi.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "Bütün kısımların değerlerini topla. $\\text{{@0}}$ hangi sayıdır?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "Yalnızca iki kenarı topladın. Dikdörtgenin dört kenarı var, bu yüzden iki komşu kenarın toplamını ikiyle çarp.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "47 385 sayısı için basamak tablosu",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "Aynı simgeyi art arda en fazla üç kez yazabilirsin. Dört aynı simge yerine çıkarma kullan, örneğin 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "Bu şeklin dik açıları var (köşedeki küçük kare), bu yüzden daha doğru bir adı var.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "Bu şeklin dik açısı yok. Hem karenin hem dikdörtgenin bütün açıları diktir.",
  "Tisíce": "Binlikler",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "Bu, alışverişin tamamının tutarı. Banknottan kaç avro para üstü verildiğini de bul.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "Bu çevre – kenarın uzunluğu. Alan, içerideki karelerin sayısıdır.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "Bu, meyve çeşitlerinin sayısı. Her meyve için kaç çocuğun oy verdiğini topla.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "Bunlar kalan kilogramlar. Bunlarla {@0} kg'lık kaç çuval doldurulacağını da bul.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "Bu kadarı yalnızca {@0}'in elinde var. Üç çocuğun elinde toplam ne kadar olduğu soruluyor.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "Bir üçgenin bu kadar açısı var. Ama iki üçgen var.",
  "Treba {@0} {@1}.": "{@0} {@1} gerekir.",
  "Trikrát": "Üç",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "Üçgenin 3 köşesi, bu yüzden de 3 açısı vardır.",
  "Trojuholník môže mať dva pravé uhly.": "Bir üçgenin iki dik açısı olabilir.",
  "Tupý uhol je menší ako pravý uhol.": "Geniş açı, dik açıdan küçüktür.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "Geniş açı dik açıdan büyüktür, küçük olanı dar açıdır.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "Geniş açı, defterin köşesinden büyüktür. Bu açıyı defterin köşesiyle karşılaştır.",
  "Uhol je menší ako roh zošita, je ostrý.": "Açı defterin köşesinden küçük, yani dar açı.",
  "Uhol je väčší ako roh zošita, je tupý.": "Açı defterin köşesinden büyük, yani geniş açı.",
  "Uhol má tvar rohu zošita, je pravý.": "Açı defterin köşesi biçiminde, yani dik açı.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "Bir sütunda alttaki rakam üsttekinden küçük olduğu için üstteki rakamı alttakinden çıkardın. Böyle durumda üstteki rakama 10 ekle ve 1'i aklında tut.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "Bir dükkânda {@0} kg patates vardı. {@1} kg sattılar, kalanını {@2} kg'lık çuvallara paylaştırdılar. Kaç çuval doldurdular?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "Bölümde bir sıfır eksik. Bir rakam indirdikten sonra bölme yapılamıyorsa bölüme 0 yaz ve sıradaki rakamı indir.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "Sıfırı atladın. Bir basamak eksikse yerine 0 yaz, yoksa rakamlar kayar.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "Önce birliklerle, sonra onluklarla çarp. İkinci sonucu bir basamak sola kaydır ve ikisini topla.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "Yalnızca birliklerle çarptın. Onluklarla da ({@0}) çarp ve iki kısmi çarpımı topla.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "Kenarları ${@0}\\,\\text{{@1}}$ ve ${@2}\\,\\text{{@3}}$ olan dikdörtgenin çevresini hesapla. Sonucu {@4} cinsinden yaz.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "Kenarı ${@0}\\,\\text{{@1}}$ olan karenin çevresini hesapla. Sonucu {@2} cinsinden yaz.",
  "Vypočítaj písomne ${@0} + {@1}$.": "${@0} + {@1}$ işlemini alt alta yaparak hesapla.",
  "Vypočítaj písomne ${@0} - {@1}$.": "${@0} - {@1}$ işlemini alt alta yaparak hesapla.",
  "Vypočítaj písomne ${@0} : {@1}$.": "${@0} : {@1}$ işlemini bölme algoritmasıyla hesapla.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "${@0} : {@1}$ işlemini bölme algoritmasıyla hesapla. Bölümü ve kalanı noktalı virgülle ayırarak yaz.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$ işlemini alt alta yaparak hesapla.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "{@0} için: {@1}, {@2} için: {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "Eldeki 1'i unuttun. Ödünç aldıktan sonra onu bir sonraki sütunda alttaki rakama ekle.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "Eldeleri unuttun. Bir sütunun toplamı 10 ya da daha fazlaysa 1'i soldaki sonraki sütuna ekle.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "${@0}\\,\\text{{@1}}$ eklemeyi de unuttun.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "Eldeki onlukları eklemeyi unuttun. Çarpımdaki onlukları bir sonraki basamaktaki çarpıma ekle.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "Çevreyi ve alanı “çevre; alan” biçiminde yaz.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "Bölümü adım adım bulduğun sayılardan, kalanı da son adımdan yaz.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "Bölümü adım adım bulduğun sayılardan yaz.",
  "Zapíš rímskymi číslicami číslo {@0}.": "{@0} sayısını Roma rakamlarıyla yaz.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "Sonucu sütunlarda bulduğun rakamlardan yaz.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "Sonucu yaz: her sütundan toplamın birlikleri, onluklar bir sonraki sütuna aktarıldı.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "Sonucu yaz: her çarpımdan birlikler, onluklar bir sonraki basamağa aktarıldı.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "Sayıyla yaz: {@0} {@1}, {@2} {@3}, {@4} {@5} ve {@6} {@7}.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "Sağdaki son rakamdan başla – bunlar birliklerdir – ve sola doğru ilerle.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "60'ın verilen sayının içine kaç kez sığdığını bul.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "= işareti yalnızca aynı iki sayı arasına konur. Bu sayılar en az bir rakamda farklı.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "İşaret ters çevrilmiş. Soldan başlayarak karşılaştır – sayıların farklı olduğu ilk rakam belirler.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "İşaret ters çevrilmiş. Basamak sayısı daha fazla olan sayı daha büyüktür.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "Artan kişiler için bir otobüs daha gerekir, bu yüzden {@0} {@1} gerekir.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "Kalan patates: ${@0} - {@1} = {@2}$ kg. Çuval sayısı: ${@3} : {@4} = {@5}$.",
  "autobus": "otobüs",
  "autobusy": "otobüs",
  "banány": "muz",
  "dag": "dag",
  "desaťtisíce": "on binlik",
  "desaťtisícov": "on binlik",
  "dvakrát": "iki",
  "eur": "avro",
  "eurá": "avro",
  "hrušky": "armut",
  "jahody": "çilek",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "alttaki rakama eldeki 1'i ekle (${@0} + 1 = {@1}$).",
  "napr. III": "örneğin III",
  "napr. XIV": "örneğin XIV",
  "napr. XX": "örneğin XX",
  "nepravda": "yanlış",
  "obsah: 3 riadky po 4 štvorčekoch": "alan: her birinde 4 kare olan 3 satır",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "çevre: 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "çevre; alan",
  "opíšeme {@0}": "{@0} aynen yazılır",
  "ostrý": "dar",
  "pravda": "doğru",
  "pravý": "dik",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "{@0} indirilir: ${@1} : {@2} = {@3}$, çünkü ${@4}\\cdot {@5} = {@6}$, kalan {@7}",
  "píšeme {@0}": "{@0} yazılır",
  "píšeme {@0} a 1 si pamätáme": "{@0} yazılır, 1 elde",
  "píšeme {@0} a {@1} si pamätáme": "{@0} yazılır, {@1} elde",
  "riadky": "satır",
  "riadok": "satır",
  "slivky": "erik",
  "stovka": "yüzlük",
  "tisíce": "binlik",
  "tisícka": "binlik",
  "tisícky": "binlik",
  "tisícok": "binlik",
  "tisícov": "binlik",
  "trikrát": "üç",
  "tričiek": "tişört",
  "tričká": "tişört",
  "tupý": "geniş",
  "uhol": "açı",
  "všeobecný štvoruholník": "genel dörtgen",
  "všetci traja": "üçünün",
  "všetky tri": "üçünün",
  "zaplatil": "ödedi",
  "zaplatila": "ödedi",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} Toplam kaç çocuk oy verdi?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} {@1} için kaç çocuk oy verdi?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} {@1} için oy veren çocuk sayısı, {@2} için oy verenlerden kaç fazla?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} Bölüm ${@1}$, kalan {@2}. Kontrol: ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} Sonuç ${@1}$. Kontrol: ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0}, {@1} sayısından küçük, bu yüzden ${@2} - {@3} = {@4}$, {@5} yazılır, 1 elde",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0}, {@1} sayısından küçük, bu yüzden ${@2} - {@3}$ işlemini yap. Kaç eder?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0}'in biriktirdiği {@1} {@2} var. {@3}'in parası {@6}'in parasından {@4} {@5} fazla, {@7}'in parası ise {@9}'in parasının {@8} katı. Toplamda {@10} kaç avrosu var?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0}'in parası {@3}'in değil, {@2}'in parasının {@1} katı. {@4}'in parasını çarp.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0}, tanesi {@4} {@5} olan {@2} {@3} {@1} ve {@7} avroluk banknotla {@6}. Kaç avro para üstü aldı?",
  "{@0}. Spolu {@1}.": "{@0}. Toplam {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Toplam: ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}: ${@1} + {@2} + 1$ kaçtır? (1, önceki sütundan elde.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}: ${@1} + {@2}$ kaçtır?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}: ${@1}\\cdot {@2} + {@3}$ kaçtır? ({@4}, önceki basamaktan elde.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}: ${@1}\\cdot {@2}$ kaçtır?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "Evet, dikdörtgenin karşılıklı kenarları aynı uzunluktadır.",
  "Áno, to je vlastnosť štvorca.": "Evet, bu karenin bir özelliğidir.",
  "útvar": "şekil",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "Sayıları hemen toplama. Önce ${@0}\\,\\text{{@1}}$ değerini daha küçük birim olan $\\text{{@2}}$ birimine çevir.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "Sayıları toplama. Eksik toplananı çıkarma ile bulursun: toplamdan bilinen toplananı çıkar.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "Sayıları toplama. Aranan sayıyı çıkarma ile bulursun: eksilenden farkı çıkar.",
  "Čísla sú rovnaké.": "Sayılar eşit.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "Basamak sayısı daha fazla olan sayı daha büyüktür, bu yüzden ${@0} {@1} {@2}$.",
  "čerešne": "kiraz",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "Kare gerçekten de bir dikdörtgendir ama en doğru adı arıyoruz. Bütün kenarların aynı uzunlukta olup olmadığına bak.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "Karenin 4 dik açısı vardır ve karşılıklı kenarları eşittir, yani özel bir dikdörtgendir.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "Bir karenin çevresi ${@0}\\,\\text{{@1}}$. Bir kenarı ne uzunluktadır ({@2} cinsinden)?",
  "Štvorec má všetky 4 uhly pravé.": "Karenin 4 açısının hepsi diktir.",
  "Štvorec má všetky strany rovnako dlhé.": "Karenin bütün kenarları aynı uzunluktadır.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "Karenin bütün kenarları aynı uzunluktadır. Burada komşu kenarlar farklı uzunlukta.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "Kare, dikdörtgen, üçgen ve genel dörtgen",
  "Štvoruholník má 4 strany a 4 vrcholy.": "Dörtgenin 4 kenarı ve 4 köşesi vardır.",
  "Štyrikrát": "Dört",
  "štyrikrát": "dört",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "“… daha fazla” eklemek, “… katı” ise çarpmak demektir. Sonra hepsini topla.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "“{@0} katı” çarpmak demektir, {@1} eklemek değil."
 }
});
