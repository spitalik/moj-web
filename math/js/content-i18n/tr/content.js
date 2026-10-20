/* Türkçe: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/content/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "cisla": {
   "title": "Sayısal ifadeler ve işlem önceliği",
   "summary": "Sayılar, parantezler ve işlemlerin doğru sırası.",
   "theory": [
    "<p>Doğal sayılar $1, 2, 3, 4, \\dots$ sayılarıdır. Bunların kümesini $\\mathbb{N}$ ile gösteririz. Bunlara sıfırı eklersek negatif olmayan tam sayıları elde ederiz; negatif sayıları da eklediğimizde tam sayılar kümesi $\\mathbb{Z}$ oluşur.</p>",
    {
     "fig": "numberline",
     "caption": "Sayı doğrusu: mavi noktalar doğal sayılardır, sıfırın solunda negatif tam sayılar yer alır."
    },
    "<p><strong>İşlem önceliği:</strong></p>\n       <ol><li>parantez içindeki ifadeler,</li><li>üslü ve köklü ifadeler,</li>\n       <li>soldan sağa çarpma ve bölme,</li><li>soldan sağa toplama ve çıkarma.</li></ol>"
   ],
   "examples": [
    {
     "task": "$2 + 3\\cdot 4 - 6 : 2$ işleminin sonucunu bul.",
     "steps": [
      "Önce çarpma ve bölme: $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "İfade $2 + 12 - 3$ olur.",
      "Soldan sağa: $2 + 12 = 14$, ardından $14 - 3 = 11$.",
      "<strong>Sonuç: 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "Kesirler ve kesirlerle işlemler",
   "summary": "Sadeleştirme, genişletme ve kesirlerle hesaplama.",
   "theory": [
    "<p>$\\frac{a}{b}$ kesrinin payı $a$, paydası $b \\neq 0$'dır. Pay ve payda aynı sıfırdan farklı sayıyla çarpılırsa kesrin değeri değişmez (<strong>genişletme</strong>). Bunun tersi <strong>sadeleştirmedir</strong>.</p>",
    {
     "fig": "fractions",
     "caption": "Genişletme değeri değiştirmez: $\\frac{1}{2}=\\frac{3}{6}$ ve $\\frac{2}{3}=\\frac{4}{6}$ kesirlerinin boyalı kısımları eşit uzunluktadır."
    },
    "<p><strong>Toplama ve çıkarma</strong> için ortak payda gerekir: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>Çarpma</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. <strong>Bölmede</strong> ikinci kesrin tersiyle çarparız: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "$\\frac{1}{2}+\\frac{2}{3}$ işleminin sonucunu bul.",
     "steps": [
      "Ortak payda $2\\cdot 3 = 6$'dır.",
      "$\\frac{1}{2}=\\frac{3}{6}$ ve $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>Sonuç: $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "Yüzdeler ve yüzde hesapları",
   "summary": "Yüzde hesaplama, yüzde artış ve yüzde azalış.",
   "theory": [
    "<p>$p\\,\\%$ ifadesi $\\frac{p}{100}$ anlamına gelir. $x$ sayısının yüzde $p$'si $\\frac{p}{100}\\cdot x$'tir.</p>",
    {
     "fig": "percent",
     "caption": "Bütün 100 eşit parçadır. $25\\,\\%$ bunların 25'i demektir."
    },
    "<p>$p\\,\\%$ <strong>artış</strong> $1+\\frac{p}{100}$ ile çarpmak, <strong>azalış</strong> ise $1-\\frac{p}{100}$ ile çarpmaktır.</p>",
    "<p>$0{,}25$ ondalık sayısı $\\frac{1}{4}$ kesrine ve aynı zamanda $25\\,\\%$'ye eşittir. Türkçede ondalık ayırıcı olarak virgül kullanılır.</p>"
   ],
   "examples": [
    {
     "task": "Bir ürünün fiyatı $80\\,€$'dur. Fiyat $15\\,\\%$ artırılırsa ürün kaç euro olur?",
     "steps": [
      "Çarpan $1+\\frac{15}{100}=1{,}15$'tir.",
      "$80\\cdot 1{,}15 = 92$.",
      "<strong>Sonuç: 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "Kümeler ve küme işlemleri",
   "summary": "Elemanlar, birleşim, kesişim, fark ve eleman sayısı.",
   "theory": [
    "<p>Küme, birbirinden ayırt edilebilen nesnelerin topluluğudur. $a\\in A$ yazımı, $a$ elemanının $A$ kümesine ait olduğunu gösterir. Boş küme $\\varnothing$ ile gösterilir.</p>",
    "<p>İşlemler: <strong>birleşim</strong> $A\\cup B$ (kümelerden en az birinde bulunan elemanlar), <strong>kesişim</strong> $A\\cap B$ (her iki kümede de bulunan elemanlar), <strong>fark</strong> $A\\setminus B$ ($A$'da olup $B$'de olmayan elemanlar).</p>",
    {
     "fig": "venn",
     "caption": "$A=\\{1,2,3,4\\}$ ve $B=\\{3,4,5\\}$ için Venn şeması. Kesişim, dairelerin örtüştüğü bölgededir."
    },
    "<p>Eleman sayısı $|A|$ ile gösterilir. $|A\\cup B| = |A|+|B|-|A\\cap B|$ eşitliği geçerlidir: kesişimdeki elemanları iki kez saydığımız için onları bir kez çıkarırız.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\{1,2,3,4\\}$ ve $B=\\{3,4,5\\}$ veriliyor. $A\\cup B$, $A\\cap B$ ve $A\\setminus B$ kümelerini bul.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "Düzlemsel şekillerin çevresi ve alanı",
   "summary": "Dikdörtgen, üçgen ve dairenin çevresi ve alanı.",
   "theory": [
    "<p>Kenarları $a$ ve $b$ olan dikdörtgenin çevresi $o=2(a+b)$, alanı $S=a\\cdot b$'dir.</p>",
    "<p>Tabanı $z$ ve bu tabana ait yüksekliği $v$ olan üçgenin alanı $S=\\frac{z\\cdot v}{2}$'dir.</p>",
    "<p>Yarıçapı $r$ olan dairenin çevresi $o=2\\pi r$, alanı $S=\\pi r^2$'dir; burada $\\pi\\approx 3{,}14159$.</p>",
    {
     "fig": "shapes",
     "caption": "Dikdörtgenin $a$, $b$ kenarları, üçgenin $z$ tabanı ve $v$ yüksekliği, dairenin $r$ yarıçapı."
    }
   ],
   "examples": [
    {
     "task": "Bir dairenin yarıçapı $r=3\\,\\text{cm}$'dir. Alanını hesapla.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28{,}27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "Pisagor teoremi",
   "summary": "Dik üçgende kenar uzunluklarının hesaplanması.",
   "theory": [
    "<p>Dik kenarları $a$, $b$ ve hipotenüsü $c$ olan dik üçgende $a^2+b^2=c^2$ eşitliği geçerlidir. Hipotenüs dik açının karşısındadır ve her zaman en uzun kenardır.</p>",
    {
     "fig": "pythagoras",
     "caption": "Kenarları $3, 4, 5$ olan üçgen: dik kenarlar üzerine kurulan karelerin alanları $9+16$, hipotenüs üzerindeki karenin alanı olan $25$'i verir."
    },
    "<p>Bilinen tam sayı üçlüleri: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$ ve bunların katları.</p>"
   ],
   "examples": [
    {
     "task": "Dik kenarların uzunlukları $6$ ve $8$'dir. Hipotenüsün uzunluğu nedir?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "Birinci dereceden denklemler",
   "summary": "Denk dönüşümler ve birinci dereceden denklemler.",
   "theory": [
    "<p>Denklemleri <strong>denk dönüşümlerle</strong> çözeriz: her iki tarafa aynı sayıyı ekleriz veya her iki taraftan aynı sayıyı çıkarırız, her iki tarafı sıfırdan farklı bir sayıyla çarparız veya böleriz.</p>",
    "<p>$a\\neq 0$ olmak üzere $ax+b=c$ denklemini şöyle çözeriz: $ax=c-b$, yani $x=\\frac{c-b}{a}$.</p>",
    "<p>Sağlamayı, bulduğumuz sonucu ilk denklemde yerine koyarak yaparız.</p>"
   ],
   "examples": [
    {
     "task": "$3x+5=20$ denklemini çöz.",
     "steps": [
      "$5$ çıkarırız: $3x=15$.",
      "$3$'e böleriz: $x=5$.",
      "Sağlama: $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "İkinci dereceden denklemler",
   "summary": "Diskriminant, kök formülü ve Vieta formülleri.",
   "theory": [
    "<p>$ax^2+bx+c=0$ ($a\\neq 0$) ikinci dereceden denkleminin kökleri $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$'dır; burada $D=b^2-4ac$ <strong>diskriminanttır</strong>.</p>",
    "<p>$D&gt;0$ ise denklemin birbirinden farklı iki gerçek kökü vardır. $D=0$ ise bir çift katlı kökü vardır. $D&lt;0$ ise gerçek kökü yoktur.</p>",
    {
     "fig": "parabola",
     "caption": "$y=x^2+px+q$ grafiği (yani $b=p$, $c=q$). Kökler, parabolün $x$ ekseniyle kesişim noktalarıdır. $p$ ve $q$'yu değiştir ve diskriminantı izle."
    },
    "<p><strong>Vieta formülleri</strong> ($a=1$ için): $x_1+x_2=-b$ ve $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "$x^2-5x+6=0$ denklemini çöz.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, yani $x_1=3$, $x_2=2$.",
      "Kontrol: $3+2=5$ ve $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "Üslü ve köklü ifadeler",
   "summary": "Üslü ve köklü ifadelerle hesaplama kuralları.",
   "theory": [
    "<p>$a&gt;0$ ve $m,n$ tam sayıları için: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>Negatif üs: $a^{-n}=\\frac{1}{a^n}$. Sıfırıncı kuvvet: $a\\neq 0$ için $a^0=1$.</p>",
    "<p>Kök alma, üs almanın ters işlemidir: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. Ayrıca $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$ eşitliği geçerlidir.</p>"
   ],
   "examples": [
    {
     "task": "$\\frac{2^5\\cdot 2^{-2}}{2}$ ifadesini sadeleştir.",
     "steps": [
      "Pay: $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>Sonuç: $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "Dik üçgende trigonometrik oranlar",
   "summary": "Dik üçgende sinüs, kosinüs ve tanjant.",
   "theory": [
    "<p>Dar açısı $\\alpha$ olan dik üçgende: $\\sin\\alpha=\\frac{\\text{karşı dik kenar}}{\\text{hipotenüs}}$, $\\cos\\alpha=\\frac{\\text{komşu dik kenar}}{\\text{hipotenüs}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "Dik üçgenin kenarlarının $\\alpha$ açısına göre adlandırılması."
    },
    "<p>Temel özdeşlik: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "Birim çember: üzerindeki bir noktanın koordinatları $(\\cos\\alpha, \\sin\\alpha)$'dır. Açıyı değiştir ve işaretlerin nasıl değiştiğini izle."
    },
    "<p>Özel açıların değerleri:</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "$\\sin\\alpha=0{,}6$ ve $\\alpha$ dar açı ise $\\cos\\alpha$ değerini hesapla.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0{,}36=0{,}64$.",
      "$\\cos\\alpha=\\sqrt{0{,}64}=0{,}8$ (dar açıda kosinüs pozitiftir)."
     ]
    }
   ]
  },
  "matice": {
   "title": "Determinant ve 2×2 ters matris",
   "summary": "Matris gösterimi, 2×2 determinant ve ters matris.",
   "theory": [
    "<p>$m\\times n$ türünde bir matris, $m$ satır ve $n$ sütundan oluşan bir sayı tablosudur. $i$. satır ve $j$. sütundaki elemanı $a_{ij}$ ile gösteririz.</p>",
    "<p>$A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$ matrisinin determinantı $\\det A=ad-bc$'dir. $\\det A\\neq 0$ ise ters matris vardır: $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$.</p>",
    {
     "fig": "parallelogram",
     "caption": "$\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ matrisinin sütunları $u=(2,1)$ ve $v=(3,4)$ vektörleridir. Determinantın mutlak değeri, bu vektörlerin oluşturduğu paralelkenarın alanıdır: $|\\det|=5$."
    },
    "<p>Doğrusal denklem sistemi $Ax=b$ biçiminde yazılabilir ve ters matris yardımıyla $x=A^{-1}b$ olarak çözülebilir.</p>"
   ],
   "examples": [
    {
     "task": "$\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$ değerini hesapla.",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$."
     ]
    }
   ]
  },
  "sucin": {
   "title": "Matris çarpımı",
   "summary": "Matrisler nasıl çarpılır ve sıra neden önemlidir.",
   "theory": [
    "<p>$A$'nın sütun sayısı $B$'nin satır sayısına eşitse $C=AB$ çarpımı vardır. $i$. satır ve $j$. sütundaki eleman $c_{ij}=\\sum_k a_{ik}b_{kj}$'dir: $A$ matrisinin satırını $B$ matrisinin sütunuyla eleman eleman çarpar ve toplarız.</p>",
    {
     "fig": "matmul",
     "caption": "$c_{11}$ elemanı, $A$'nın 1. satırı ile $B$'nin 1. sütunundan elde edilir: $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>Matris çarpımı <strong>değişmeli değildir</strong>: genel olarak $AB\\neq BA$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$. $AB$ çarpımını hesapla.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>Sonuç:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "Fonksiyonun türevi",
   "summary": "Anlık değişim, türev alma kuralları ve teğet.",
   "theory": [
    "<p>$f'(x_0)$ türevi, varsa $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$ limitidir. Geometrik olarak, $f$'nin grafiğine $x_0$ noktasında çizilen teğetin eğimidir.</p>",
    {
     "fig": "tangent",
     "caption": "$f(x)=x^3-2x$ grafiği ve $x_0$ noktasındaki teğet. Teğetin eğimi $f'(x_0)=3x_0^2-2$'dir. Teğetin yatay olduğu yerde türev sıfırdır."
    },
    "<p>Kurallar: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$. $f'(2)$ değerini hesapla.",
     "steps": [
      "$f'(x)=3x^2-2$.",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$."
     ]
    }
   ]
  },
  "integraly": {
   "title": "İntegral hesabın temelleri",
   "summary": "Belirsiz ve belirli integral, Newton-Leibniz formülü.",
   "theory": [
    "<p>$f$ fonksiyonunun ilkel fonksiyonu $F$, $F'(x)=f(x)$ koşulunu sağlar. Belirsiz integral: $\\int f(x)\\,dx=F(x)+C$. $n\\neq -1$ için $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$.</p>",
    "<p>Belirli integrali <strong>Newton-Leibniz formülüyle</strong> hesaplarız: $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Geometrik olarak bu, $a$'dan $b$'ye kadar $f$'nin grafiği altında kalan alandır (pozitif $f$ için).</p>",
    {
     "fig": "area",
     "caption": "$f(x)=x^2$ grafiğinin altında $0$'dan $b$'ye kadar kalan alan $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$'tür."
    },
    "<p>Doğrusallık: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "$\\int_0^2 3x^2\\,dx$ integralini hesapla.",
     "steps": [
      "İlkel fonksiyon: $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>Sonuç: 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$. $AB$ çarpımının {@2}. satır ve {@3}. sütunundaki eleman nedir?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, yani $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — sonucu $p/q$ biçiminde kesir olarak gir (örneğin 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$, yani $b={@3}$.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$, yani $c={@3}$.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$, yani $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "$x$ sayısının $p\\,\\%$'si $\\frac{p}{100}\\cdot x$'tir.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$, yani $\\frac{{@2}}{100}\\cdot {@3}={@4}$.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$, yani $x={@4}$.",
  "25 štvorčekov zo 100": "100 karenin 25'i",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "Sonuç ${@0}^{\\square}$ hangi üsse sahip olacak?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "Ortak payda nedir (paydaların çarpımı ${@0}\\cdot {@1}$)?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "Köklerin toplamı $x_1 + x_2$ nedir (Vieta formüllerine göre)?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "Köklerin çarpımı $x_1 \\cdot x_2$ nedir?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "Türev $f'(x)=k\\,x^{{@0}}{@1}$ şeklindedir. $k$ katsayısı nedir?",
  "Determinant ako obsah rovnobežníka": "Paralelkenarın alanı olarak determinant",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "Asıl $f$ fonksiyonunda yerine koydun. Önce fonksiyonun türevini al, sonra yerine koy.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "Asıl fonksiyonda yerine koydun. Önce ilkel fonksiyon $F$'yi bul ve onda yerine koy.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "Yalnızca üst sınırı yerine koydun. $F({@0})$ değerinden ayrıca $F({@1})$ değerini çıkar.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "Çapı (${@0}$) kullandın. $\\pi r^2$ formülünde yarıçap $r={@1}$ olur.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "İkinci çarpım: ${@0}\\cdot {@1}$ kaçtır?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "Uzunlukları yalnızca çıkardın. Pisagor teoremi kareler için geçerlidir: $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "Üsleri topladın. Bir kuvvetin kuvveti alınırken üsler çarpılır.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "Üsleri çarptın. Tabanları aynı olan kuvvetler çarpılırken üsler toplanır.",
  "Graf funkcie s dotyčnicou": "Teğetiyle birlikte fonksiyon grafiği",
  "Graf kvadratickej funkcie": "İkinci dereceden fonksiyonun grafiği",
  "Horná hranica b": "Üst sınır b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "Çarpımı $q$, toplamı $-p$ olan iki sayı ara.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "Özdeşlik kareler için geçerlidir: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, $\\cos\\alpha = 1 - \\sin\\alpha$ değil.",
  "Jednotková kružnica": "Birim çember",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "{@0} katsayısını çıkardın. $x$'in yanında çarpma var, bu yüzden iki tarafı da {@1} sayısına böl.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "Kökler iki kat büyük çıktı. $x=\\frac{-p\\pm\\sqrt{D}}{2}$ formülünde ikiye bölmeyi unutma.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "{@0} sayısının $1\\,\\%$'i kaçtır?",
  "Koľko je $F({@0}) - F({@1})$?": "$F({@0}) - F({@1})$ kaçtır?",
  "Koľko je $F({@0})$?": "$F({@0})$ kaçtır?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "$\\cos\\alpha$ kaçtır (dar açı, pozitif karekök) – 3 ondalık basamağa kadar?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "$\\cos^2\\alpha = 1 - \\sin^2\\alpha$ kaçtır? Kesir olarak gir.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "$\\pi\\cdot {@0}$ kaçtır ($\\pi\\approx 3{{@1}}14$ kullan)?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "$\\sin^2\\alpha$ kaçtır? Kesir olarak gir (örneğin 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "$a^2 = {@0}^2$ kaçtır?",
  "Koľko je $b = \\sqrt{{@0}}$?": "$b = \\sqrt{{@0}}$ kaçtır?",
  "Koľko je $b^2 = {@0} - {@1}$?": "$b^2 = {@0} - {@1}$ kaçtır?",
  "Koľko je $b^2 = {@0}^2$?": "$b^2 = {@0}^2$ kaçtır?",
  "Koľko je $c = \\sqrt{{@0}}$?": "$c = \\sqrt{{@0}}$ kaçtır?",
  "Koľko je $c^2 = {@0} + {@1}$?": "$c^2 = {@0} + {@1}$ kaçtır?",
  "Koľko je $c^2 = {@0}^2$?": "$c^2 = {@0}^2$ kaçtır?",
  "Koľko je $f'({@0})$?": "$f'({@0})$ kaçtır?",
  "Koľko je $r^2 = {@0}^2$?": "$r^2 = {@0}^2$ kaçtır?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "$z\\cdot v = {@0}\\cdot {@1}$ kaçtır?",
  "Koľko je ${@0} + {@1} - {@2}$?": "${@0} + {@1} - {@2}$ kaçtır?",
  "Koľko je ${@0} - ({@1})$?": "${@0} - ({@1})$ kaçtır?",
  "Koľko je ${@0} : {@1}$?": "${@0} : {@1}$ kaçtır?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "${@1}$ sayısının ${@0}\\,\\%$'i kaçtır?",
  "Koľko je ${@0}\\cdot {@1}$?": "${@0}\\cdot {@1}$ kaçtır?",
  "Koľko je ${@0}^{{@1}}$?": "${@0}^{{@1}}$ kaçtır?",
  "Koľko je $|A| + |B|$?": "$|A| + |B|$ kaçtır?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "O hâlde {@1} sayısının ${@0}\\,\\%$'i kaçtır?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "Bir dairenin yarıçapı $r={@0}$. Alanını $S$ hesapla ($\\pi\\approx 3{{@1}}14$ kullan).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "Toplamı {@0}, çarpımı {@1} olan iki sayı hangileridir? Bunları noktalı virgülle ayırarak gir.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "Matrisler aynı konumdaki elemanlar çarpılarak çarpılmaz. $A$ matrisinin satırını $B$ matrisinin sütunuyla çarp ve çarpımları topla.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "Paydayı ortak paydaya çevirdin ama payları genişletmedin. Payı da paydayla aynı sayıyla çarp.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "$A$ kümesinin ${@0}$ elemanı, $B$ kümesinin ${@1}$ elemanı var ve kesişimlerinin ${@2}$ elemanı var. $A\\cup B$ kümesinin kaç elemanı vardır?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "Önce çarpma ve bölme: ${@0}\\cdot {@1} = {@2}$ ve ${@3} : {@4} = {@5}$. Sonra ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "Önce iki taraftan da sabiti çıkar, sonra $x$'in katsayısına böl.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "Önce çarpma ve bölmeyi, ancak ondan sonra toplama ve çıkarmayı yap.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "Sütunlardaki elemanları çarptın. Köşegenler boyunca çarp: $a\\cdot d$ ve $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "Bir dikdörtgenin kenarları $a={@0}$ ve $b={@1}$. Alanı $S$ kaçtır?",
  "Obdĺžnik, trojuholník a kruh": "Dikdörtgen, üçgen ve daire",
  "Obsah kruhu je $\\pi r^2$.": "Dairenin alanı $\\pi r^2$'dir.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "Dikdörtgenin alanı, iki komşu kenarının uzunluklarının çarpımıdır.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "Üçgenin alanı, taban ile yüksekliğin çarpımının yarısıdır.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "Dik kenarları yalnızca topladın. Pisagor teoremi kareler için geçerlidir: $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "Dar açı $\\alpha$ için $\\sin\\alpha=\\frac{{@0}}{{@1}}$. $\\cos\\alpha$ değerini hesapla (3 ondalık basamağa kadar).",
  "Plocha pod grafom funkcie": "Fonksiyon grafiğinin altındaki alan",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "$(x^n)'=n\\,x^{n-1}$ kuralını kullan ve her terimin türevini ayrı ayrı al.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ kuralını, ardından Newton-Leibniz formülünü kullan.",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "Pisagor teoremini kullan: $c^2=a^2+b^2$.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "$\\sin^2\\alpha+\\cos^2\\alpha=1$ özdeşliğini kullan.",
  "Pozri si tabuľku hodnôt v teórii.": "Konu anlatımındaki değer tablosuna bak.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "Soldan sağa doğru hesapladın. Çarpma ve bölme, toplama ve çıkarmadan önce gelir.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "Bir dik üçgenin dik kenarları $a={@0}$ ve $b={@1}$. Hipotenüs $c$'nin uzunluğu kaçtır?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "Bir dik üçgenin hipotenüsü $c={@0}$, bir dik kenarı $a={@1}$. Diğer dik kenar $b$'nin uzunluğu kaçtır?",
  "Pravouhlý trojuholník s popisom strán": "Kenarları adlandırılmış dik üçgen",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "$2\\times 2$ matris için $\\det=ad-bc$'dir.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "$f(x)={@0}x^{{@1}}{@2}$ fonksiyonu için $f'({@3})$ değerini hesapla.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "Sabiti sağ tarafa geçir. ${@0}x$ kaçtır?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "Tabanları aynı olan kuvvetler çarpılırken üsler toplanır.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "{@0} sayısını diğer tarafa geçirirken işaretini değiştirmedin. İki tarafta da aynı ters işlemi yap.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "Bir kuvvetin kuvveti alınırken üsler çarpılır.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "İlkel fonksiyon $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, yani $F({@3})-F({@4})={@5}$.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "İlkel fonksiyon $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. $F({@3})$ kaçtır?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "Kesişimin elemanları iki kez sayılır, bu yüzden onları çıkar.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "Kesişimin elemanlarını iki kez çıkardın. Bunlar birleşime aittir – yalnızca bir kez çıkar.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "Kesişimin elemanlarını iki kez saydın – hem $A$'da hem $B$'de bulunuyorlar. Onları bir kez çıkar.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "Kesişimin elemanları bu toplamda iki kez yer alıyor. ${@0} - {@1}$ kaçtır?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "Birinci çarpım: ${@0}\\cdot {@1}$ kaçtır?",
  "Pytagorova veta: štvorce nad stranami": "Pisagor teoremi: kenarlar üzerindeki kareler",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "İkinci kesri {@0} paydasına genişlet. Payı ne olur?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "Birinci kesri {@0} paydasına genişlet. Payı ne olur?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "Ortak payda ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "Kenarları topladın. Dikdörtgenin alanını onları çarparak bulursun.",
  "Súčet: koľko je ${@0} + {@1}$?": "Toplam: ${@0} + {@1}$ kaçtır?",
  "Súčin matíc: riadok krát stĺpec": "Matris çarpımı: satır çarpı sütun",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "Ana köşegendeki çarpım: $({@0})\\cdot({@1})$ kaçtır?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "Yan köşegendeki çarpım: $({@0})\\cdot({@1})$ kaçtır?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "Çarpımları topladın. Determinant bir farktır: ana köşegendeki çarpım eksi yan köşegendeki çarpım.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "Payları topla ve sonucu $p/q$ kesri olarak yaz.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "Hem payları hem paydaları topladın. Kesirler ancak ortak paydaya getirildikten sonra toplanır – payda toplanmaz.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "Bu $\\cos^2\\alpha$. Sonunda karekökünü de al.",
  "To je $b^2$. Na konci ešte odmocni.": "Bu $b^2$. Sonunda karekökünü de al.",
  "To je $c^2$. Na konci ešte odmocni.": "Bu $c^2$. Sonunda karekökünü de al.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "Bu, ${@1}^\\circ$ açısının {@0} değeridir. Açı büyüdükçe sinüs 0'dan 1'e artar, kosinüs 1'den 0'a azalır.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "Bu çevre (bütün kenarların toplamı). Alan, iki komşu kenarın çarpımıdır.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "Bu dairenin çevresi $2\\pi r$. Alan $\\pi r^2$'dir.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "Bu, %100'e kalan kısım. Sorulan, {@1} sayısının ${@0}\\,\\%$'inin kendisi.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "Üçgen, dikdörtgenin yarısıdır. ${@0} : 2$ kaçtır?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "Bir üçgenin tabanı $z={@0}$, yüksekliği $v={@1}$. Alanı $S$ kaçtır?",
  "Uhol α (°)": "α açısı (°)",
  "Vennov diagram dvoch množín": "İki kümenin Venn şeması",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "$A$ matrisinin $i$. satırını ve $B$ matrisinin $j$. sütununu al, bileşenleri karşılıklı çarp.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "Vieta formülleri: $x_1+x_2={@0}$ ve $x_1\\cdot x_2={@1}$. Kökler $x_1={@2}$ ve $x_2={@3}$.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "İki tarafı da {@0} sayısına böl. $x$ kaçtır?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "$({@0}^{{@1}})^{{@2}}$ işleminin sonucunu bul.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "$\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$ integralini hesapla.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "${@0}\\,{@1}^\\circ$ değerini ondalık sayı olarak hesapla (3 ondalık basamağa kadar).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "${@0}^{{@1}}\\cdot {@2}^{{@3}}$ işleminin sonucunu bul.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "$\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$ determinantını hesapla.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "$x^2{@0}{@1} = 0$ denklemini çöz. İki kökü noktalı virgülle ayırarak gir (örneğin 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "${@0}x{@1} = {@2}$ denklemini çöz.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "Pisagor teoreminden $b^2=c^2-a^2$ ifadesini elde et.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "$B$ matrisinden satır aldın. Çarpımın elemanı, $A$ matrisinin {@0}. satırı çarpı $B$ matrisinin {@1}. sütunudur.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "İkiye bölmeyi unuttun. Üçgen, kenarları $z$ ve $v$ olan dikdörtgenin yarısıdır.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "{@0} sayısına bölmeyi unuttun: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "{@0} üssünü $x$'in önüne yazmayı unuttun: $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "Bölmeyi unuttun. {@0} sayısını değil, ${@1} : {@2}$ işleminin sonucunu çıkarmalısın.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "Yarıçapın karesini almayı unuttun: alan $\\pi\\cdot r\\cdot r$'dir.",
  "Zlomky ako pruhy": "Şeritler hâlinde kesirler",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "Kesirleri ortak paydaya getir: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "Tabanları çarptın. {@0} tabanı aynı kalır, yalnızca üsler toplanır.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">alan = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "kökler x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "kosinüs",
  "kruh": "daire",
  "napr. 5/6": "örneğin 5/6",
  "nemá reálne korene (D &lt; 0)": "gerçek kökü yok (D &lt; 0)",
  "obdĺžnik": "dikdörtgen",
  "odvesna": "dik kenar",
  "prepona": "hipotenüs",
  "prirodzené čísla ℕ": "doğal sayılar ℕ",
  "priľahlá odvesna": "komşu dik kenar",
  "protiľahlá": "karşı",
  "sínusu": "sinüs",
  "trojuholník": "üçgen",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (teğetin eğimi)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "negatif tam sayılar",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "${@0}x$ teriminin türevini almadın. Bu terimin türevi {@1}.",
  "Číselná os": "Sayı doğrusu",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "Sayıyı yüzde sayısına böldün. ${@0}\\,\\%$, {@1} yüzde bir demektir; bu yüzden önce %1'i bul (100'e böl), sonra {@2} ile çarp.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "100 parçaya bölünmüş kare, 25'i boyalı",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
