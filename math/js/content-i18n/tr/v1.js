/* Türkçe: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/v1/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "v1-vektory": {
   "title": "Rⁿ'de vektörler ve doğrusal bağımlılık",
   "summary": "Vektör işlemleri, doğrusal kombinasyon, doğrusal germe, doğrusal bağımlılık ve bağımsızlık.",
   "theory": [
    "<p>$\\mathbb{R}^n$'deki bir <strong>vektör</strong>, reel sayılardan oluşan sıralı bir $n$-li $u=(u_1, u_2, \\dots, u_n)$'dir. Vektörleri bileşen bileşen toplar ve bir reel sayıyla (skalerle) çarparız: $u+v=(u_1+v_1, \\dots, u_n+v_n)$ ve $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. Sıfır vektörünü $o=(0, \\dots, 0)$ ile gösteririz.</p>",
    "<p>$u_1, \\dots, u_k$ vektörlerinin <strong>doğrusal kombinasyonu</strong>, $c_1, \\dots, c_k\\in\\mathbb{R}$ katsayılar olmak üzere $c_1u_1+c_2u_2+\\dots+c_ku_k$ biçimindeki her vektördür. Tüm doğrusal kombinasyonların kümesine <strong>doğrusal germe</strong> (span) denir ve $\\mathcal{L}(u_1, \\dots, u_k)$ ile gösterilir.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "$u=(2, 1)$ ve $v=(-1, 2)$ vektörleri paralel değildir, bu yüzden düzlemdeki her vektör $\\alpha u+\\beta v$ biçiminde yazılabilir. $\\alpha$ ve $\\beta$ katsayılarını kaydır ve sonuç (turuncu) vektörün nasıl değiştiğini izle."
    },
    "<p>$c_1u_1+\\dots+c_ku_k=o$ eşitliğinden $c_1=\\dots=c_k=0$ çıkıyorsa $u_1, \\dots, u_k$ vektörleri <strong>doğrusal bağımsızdır</strong>. Aksi hâlde <strong>doğrusal bağımlıdırlar</strong>; bu, ancak ve ancak vektörlerden en az biri diğerlerinin doğrusal kombinasyonu olarak yazılabildiğinde olur.</p>\n       <p>Uygulamada vektörleri bir $A$ matrisinin satırlarına yazarız: ancak ve ancak $h(A)=k$ ise bağımsızdırlar (rank için sonraki derslere bak). $\\mathbb{R}^n$'deki $n$ vektör için $\\det A\\neq 0$ olup olmadığını kontrol etmek yeterlidir. $\\mathbb{R}^n$'de $n$'den fazla vektör her zaman doğrusal bağımlıdır ve sıfır vektörünü içeren her küme bağımlıdır.</p>"
   ],
   "examples": [
    {
     "task": "$u=(1, 2, 0)$, $v=(0, 1, 1)$ ve $w=(2, 5, 1)$ vektörlerinin doğrusal bağımlı olup olmadığını bul.",
     "steps": [
      "Vektörleri bir matrisin satırlarına yazar ve determinantı 1. satıra göre açarak hesaplarız:",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "Determinant sıfırdır, dolayısıyla vektörler <strong>doğrusal bağımlıdır</strong>. Gerçekten de $w=2u+v$."
     ]
    },
    {
     "task": "$w=(4, 7)$ vektörünü $u=(2, 1)$ ve $v=(-1, 2)$ vektörlerinin doğrusal kombinasyonu olarak yaz.",
     "steps": [
      "$\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$ olacak şekilde $\\alpha, \\beta$ arıyoruz, yani $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$ sistemini.",
      "İkinci denklemden $\\alpha=7-2\\beta$; yerine koyarak $14-4\\beta-\\beta=4$, dolayısıyla $\\beta=2$ ve $\\alpha=3$.",
      "<strong>Sonuç:</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "Matrisler ve matris işlemleri",
   "summary": "Matrisin boyutu, özel matrisler, toplama, skalerle çarpma, transpoz ve iz.",
   "theory": [
    "<p>$m\\times n$ boyutlu bir <strong>matris</strong>, $m$ satır ve $n$ sütundan oluşan dikdörtgen bir reel sayı tablosu $A=(a_{ij})$'dir. İki matris, aynı boyutta ise ve aynı yerlerde aynı elemanlara sahipse eşittir. $n\\times n$ boyutlu bir matris $n$. mertebeden <strong>kare</strong> matristir; $a_{11}, a_{22}, \\dots, a_{nn}$ elemanları onun <strong>ana köşegenini</strong> oluşturur. Önemli olanlar <strong>birim</strong> matris $I$ (köşegende birler, diğer yerlerde sıfırlar), <strong>sıfır</strong> matris $O$, <strong>köşegen</strong> matris ve <strong>üst (alt) üçgen</strong> matristir (köşegenin altında (üstünde) sıfırlar).</p>",
    "<p>Aynı boyutlu matrislerin <strong>toplamını</strong> ve bir matrisin bir sayıyla <strong>çarpımını</strong> eleman eleman hesaplarız: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$ geçerlidir. $m\\times n$ boyutlu matrisler bu işlemlerle bir vektör uzayı oluşturur.</p>",
    "<p>$m\\times n$ boyutlu bir matrisin <strong>transpozu</strong> $A^{T}$, $n\\times m$ boyutludur ve $(A^{T})_{ij}=a_{ji}$ – satırlar sütun olur. $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$ ve $(AB)^{T}=B^{T}A^{T}$ (sıra tersine döner) geçerlidir.</p>\n       <p>Bir kare matris $A^{T}=A$ ise <strong>simetrik</strong>, $A^{T}=-A$ ise <strong>ters simetrik</strong> matristir (bu durumda köşegeninde sıfırlar vardır). Her kare matris, simetrik ve ters simetrik kısımlarının toplamı olarak $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$ biçiminde tek türlü ayrıştırılabilir. <strong>İz</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$, köşegen elemanlarının toplamıdır; herhangi bir matris için $\\operatorname{tr}(A^{T}A)$, tüm elemanlarının karelerinin toplamıdır.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$ ve $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$ için $2A-B^{T}$'yi hesapla.",
     "steps": [
      "$B$, $3\\times 2$ boyutludur, dolayısıyla $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$, $A$ gibi $2\\times 3$ boyutludur.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>Sonuç:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$ matrisini bir simetrik ve bir ters simetrik matrisin toplamı olarak ayrıştır.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "Simetrik kısım: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "Ters simetrik kısım: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. Kontrol: $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "Matrisin rankı ve satır işlemleri",
   "summary": "Elemanter satır işlemleri, basamak biçimi, Gauss eliminasyonu ve matrisin rankı.",
   "theory": [
    "<p><strong>Elemanter satır işlemleri</strong> şunlardır: (1) iki satırın yer değiştirmesi, (2) bir satırın sıfırdan farklı bir sayıyla çarpılması, (3) bir satıra başka bir satırın bir katının eklenmesi. $B$, $A$'dan bu tür işlemlerin sonlu sayıda uygulanmasıyla elde ediliyorsa $A\\sim B$ yazarız (matrisler satır denktir). $R_2-3R_1$ gösterimi, ikinci satırı ikinci satır ile birinci satırın üç katının farkıyla değiştirdiğimiz anlamına gelir.</p>",
    "<p>Bir matris, sıfırdan farklı her satırı üstündeki satırdan daha fazla sıfırla başlıyorsa ve sıfır satırları en sondaysa <strong>basamak biçimindedir</strong>. Bir satırın sıfırdan farklı ilk elemanı onun <strong>öncü elemanıdır</strong> (pivot). <strong>Gauss eliminasyonu</strong> her matrisi basamak biçimine getirir: o anki sütunda bir öncü eleman seçer ve (3) işlemiyle altındaki her şeyi sıfırlarız. Ayrıca öncü elemanları 1 yapar ve üstlerindeki elemanları da sıfırlarsak indirgenmiş biçimi elde ederiz (Gauss–Jordan eliminasyonu).</p>",
    {
     "fig": "v1-stupne",
     "caption": "Basamak biçimi: öncü elemanlar aşağıya doğru sağa kayar. Matrisin sıfırdan farklı üç satırı vardır, bu yüzden $h(A)=3$."
    },
    "<p><strong>Rank</strong> $h(A)$, $A$ matrisinin doğrusal bağımsız satırlarının en büyük sayısıdır. Satır işlemleri rankı değiştirmez, bu yüzden $h(A)$ basamak biçimindeki sıfırdan farklı satırların sayısıdır. $h(A)=h(A^{T})$ (satır rankı sütun rankına eşittir) ve $h(A)\\le\\min(m, n)$ geçerlidir. $n$. mertebeden bir kare matris için: $h(A)=n\\iff\\det A\\neq 0\\iff A$ tersinirdir (regülerdir).</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$ matrisinin rankını bul.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "Basamak biçiminin sıfırdan farklı iki satırı vardır, dolayısıyla $h(A)=2$."
     ]
    },
    {
     "task": "Hangi $a$ değeri için $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$ matrisinin rankı 2'dir?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "$a=4$ için son satır sıfırdır ve $h(A)=2$; $a\\neq 4$ için $h(A)=3$."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "3×3 determinant ve Laplace açılımı",
   "summary": "Sarrus kuralı, minörler ve kofaktörler, Laplace açılımı, determinantın özellikleri.",
   "theory": [
    "<p>$n$. mertebeden bir kare matrisin <strong>determinantı</strong> $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$ sayısıdır; burada toplam $\\{1, \\dots, n\\}$ kümesinin $n!$ permütasyonu $\\pi$ üzerinden alınır. $n=3$ için <strong>Sarrus kuralını</strong> elde ederiz:</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "Sarrus kuralı: matrisin sağına ilk iki sütununu yazarız. Sağa-aşağı köşegenlerdeki çarpımları artı işaretiyle, sola-aşağı köşegenlerdekileri eksi işaretiyle alırız. <strong>Yalnızca</strong> 3. mertebeden matrisler için geçerlidir."
    },
    "<p><strong>Minör</strong> $M_{ij}$, $i$. satır ve $j$. sütun silinerek elde edilen matrisin determinantıdır; <strong>kofaktör</strong> (eş çarpan) ise $A_{ij}=(-1)^{i+j}M_{ij}$'dir. $i$. satıra göre <strong>Laplace açılımı</strong>: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$ (sütuna göre benzer şekilde). En çok sıfır içeren satır ya da sütuna göre açmak avantajlıdır.</p>",
    "<p><strong>Özellikler:</strong> $\\det A^{T}=\\det A$; iki satırın yer değiştirmesi işareti değiştirir; bir satırı $c$ sayısıyla çarpmak determinantı $c$ ile çarpar, bu yüzden $\\det(cA)=c^{n}\\det A$; başka bir satırın katını eklemek determinantı değiştirmez; sıfır satırı ya da orantılı iki satırı olan matrisin determinantı 0'dır; üçgen matrisin determinantı köşegen elemanlarının çarpımıdır. Aynı mertebeden matrisler için $\\det(AB)=\\det A\\cdot\\det B$ ve $A$ tersinirse $\\det A^{-1}=\\frac{1}{\\det A}$ geçerlidir.</p>"
   ],
   "examples": [
    {
     "task": "$\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$ determinantını hesapla.",
     "steps": [
      "Pozitif terimler: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "Negatif terimler: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>Sonuç:</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "$\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$ determinantını hesapla.",
     "steps": [
      "3. satırdaki tek sıfırdan farklı eleman $a_{32}=3$'tür. 3. satıra göre açılım: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (Sarrus kuralı).",
      "<strong>Sonuç:</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "Ters matris: Gauss–Jordan ve ek matris",
   "summary": "Ters matrisin varlığı, Gauss–Jordan yöntemiyle ve ek matris yardımıyla hesaplanması, matris denklemleri.",
   "theory": [
    "<p>$n$. mertebeden bir $A$ kare matrisinin <strong>tersi</strong>, $AA^{-1}=A^{-1}A=I$ olacak şekildeki $A^{-1}$ matrisidir. Ancak ve ancak $\\det A\\neq 0$ ise vardır (matris <strong>tersinir</strong>, yani regülerdir); determinantı sıfır olan matris <strong>tekil</strong> (singüler) matristir. $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$ ve $(AB)^{-1}=B^{-1}A^{-1}$ geçerlidir.</p>",
    "<p><strong>Gauss–Jordan yöntemi:</strong> genişletilmiş $(A\\mid I)$ matrisini satır işlemleriyle $(I\\mid B)$ biçimine getiririz; o zaman $B=A^{-1}$ olur. İşlemler sırasında sol tarafta bir sıfır satırı ortaya çıkarsa $A$ matrisi tekildir.</p>",
    "<p><strong>Ek matris</strong> (adjoint) $\\operatorname{adj}A$, kofaktörler matrisinin transpozudur: $(\\operatorname{adj}A)_{ij}=A_{ji}$. $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, yani $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ geçerlidir – indislerin yer değiştirmesine dikkat et. $n=2$ için bilinen $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$ formülünü elde ederiz.</p>",
    "<p><strong>Matris denklemleri:</strong> $A$ tersinirse $AX=B$ denkleminin tek çözümü $X=A^{-1}B$, $XA=B$ denkleminin çözümü ise $X=BA^{-1}$'dir. Matris çarpımı değişmeli olmadığından hangi taraftan çarptığımız önemlidir.</p>"
   ],
   "examples": [
    {
     "task": "Gauss–Jordan yöntemiyle $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$ matrisinin tersini bul.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>Sonuç:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (kontrol: $AA^{-1}=I$)."
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$ için $(A^{-1})_{13}$ elemanını hesapla.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$, burada $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$.",
      "<strong>Sonuç:</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "Doğrusal denklem sistemleri",
   "summary": "Gauss eliminasyonu, Frobenius teoremi (Rouché–Capelli), Cramer kuralı ve homojen sistemler.",
   "theory": [
    "<p>$n$ bilinmeyenli $m$ doğrusal denklemden oluşan bir sistemi matris biçiminde $Ax=b$ olarak yazarız; burada $A$ <strong>katsayılar matrisi</strong>, $x=(x_1, \\dots, x_n)^{T}$ ve $b$ sağ taraflar sütunudur; $(A\\mid b)$ <strong>genişletilmiş matristir</strong>. $b=o$ ise sistem <strong>homojendir</strong>.</p>",
    "<p><strong>Frobenius teoremi:</strong> $Ax=b$ sisteminin ancak ve ancak $h(A)=h(A\\mid b)$ ise çözümü vardır. $h(A)=h(A\\mid b)=n$ ise tam olarak bir çözüm vardır; $h(A)=h(A\\mid b)=h\\lt n$ ise sonsuz sayıda çözüm vardır ve bunlar $n-h$ parametreye bağlıdır.</p>",
    {
     "fig": "v1-priamky",
     "caption": "İki bilinmeyenli iki denklem düzlemde iki doğrudur: kesişirler, farklı paralel doğrulardır ya da çakışırlar."
    },
    "<p><strong>Gauss eliminasyonu:</strong> genişletilmiş matrisi basamak biçimine getirir ve bilinmeyenleri aşağıdan yukarıya geriye doğru yerine koyarak buluruz; öncü elemanı olmayan bilinmeyenler serbest parametrelerdir. <strong>Cramer kuralı:</strong> $A$ kare matris ve $D=\\det A\\neq 0$ ise $x_i=\\frac{D_i}{D}$ olur; burada $D_i$, $A$'nın $i$. sütunu $b$ sütunuyla değiştirilerek elde edilen matrisin determinantıdır.</p>\n       <p><strong>Homojen sistemin</strong> her zaman aşikâr çözümü $x=o$ vardır. Aşikâr olmayan bir çözüm ancak ve ancak $h(A)\\lt n$ ise vardır (kare matris için ancak ve ancak $\\det A=0$ ise). Tüm çözümlerin kümesi, $\\mathbb{R}^n$'nin $n-h(A)$ boyutlu bir alt uzayıdır.</p>"
   ],
   "examples": [
    {
     "task": "$x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$ sistemini çöz.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, ardından $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "Geriye doğru: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>Çözüm:</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "$x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$ sistemini çöz.",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, dolayısıyla $h(A)=h(A\\mid b)=2\\lt 3$ – tek parametreli sonsuz sayıda çözüm.",
      "2. satırdan $x_3=1$. $x_2$ bilinmeyeninin öncü elemanı yoktur, $x_2=t$ seçeriz; 1. satırdan $x_1=1-2t+1=2-2t$.",
      "<strong>Çözüm:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "Vektör uzayı, taban ve boyut",
   "summary": "Vektör uzayı ve alt uzay, taban, boyut ve bir vektörün bir tabandaki koordinatları.",
   "theory": [
    "<p>$\\mathbb{R}$ üzerinde bir <strong>vektör uzayı</strong>, toplama ve reel sayıyla çarpma işlemleri tanımlı olan, bu işlemlerin $V$'nin dışına çıkarmadığı ve alışılmış kuralları sağladığı bir $V$ kümesidir: toplamanın değişme ve birleşme özelliği, sıfır vektörünün ve ters vektörün varlığı, dağılma kuralları, $(cd)u=c(du)$ ve $1\\cdot u=u$. Örnekler: $\\mathbb{R}^n$, $m\\times n$ boyutlu matrisler, derecesi en fazla $n$ olan polinomlar ($P_n$), bir aralık üzerindeki reel fonksiyonlar.</p>",
    "<p><strong>Alt uzay</strong>, toplama ve sayıyla çarpma işlemlerine göre kapalı olan boş olmayan bir $W\\subseteq V$ alt kümesidir; bu durumda zorunlu olarak $o\\in W$. $\\mathbb{R}^3$'ün alt uzaylarına örnek olarak orijinden geçen doğrular ve düzlemler, homojen bir sistemin çözüm kümesi ve her doğrusal germe verilebilir. Orijinden geçmeyen bir düzlem alt uzay değildir.</p>",
    "<p>$V$ uzayının bir <strong>tabanı</strong> (bazı), doğrusal germesi $V$'nin tamamı olan doğrusal bağımsız bir vektör kümesidir. Tüm tabanlar aynı sayıda eleman içerir – bu sayı <strong>boyut</strong> $\\dim V$'dir. Örneğin $\\dim\\mathbb{R}^n=n$ (standart taban $e_1, \\dots, e_n$), $\\dim P_n=n+1$ ve $m\\times n$ matrisler uzayının boyutu $mn$'dir. $n$ boyutlu bir uzayda her $n$ doğrusal bağımsız vektör bir taban oluşturur ve $\\dim\\mathcal{L}(u_1, \\dots, u_k)$, satırları $u_1, \\dots, u_k$ olan matrisin rankıdır.</p>",
    {
     "fig": "v1-baza",
     "caption": "$b_1=(2, 1)$, $b_2=(-1, 2)$ tabanı “eğik” bir ağ oluşturur. Bir vektörün $B$ tabanındaki $(c_1, c_2)$ koordinatları, $b_1$ yönünde ve $b_2$ yönünde kaç adım atılması gerektiğini söyler."
    },
    "<p>$B=(b_1, \\dots, b_n)$ bir taban ise her vektör <strong>tek türlü</strong> olarak $v=c_1b_1+\\dots+c_nb_n$ biçiminde yazılabilir; $(c_1, \\dots, c_n)$ sayıları $v$ vektörünün $B$ tabanındaki <strong>koordinatlarıdır</strong>. Bunları, matrisinin sütunlarında taban vektörleri bulunan ve sağ tarafı $v$ olan sistemi çözerek buluruz.</p>"
   ],
   "examples": [
    {
     "task": "$v=(3, 0, 1)$ vektörünün $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$ tabanındaki koordinatlarını bul.",
     "steps": [
      "$v=c_1b_1+c_2b_2+c_3b_3$ eşitliğinden $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$ sistemini elde ederiz.",
      "İlk iki denklemi çıkararak $c_1-c_2=3$; $c_1+c_2=1$ ile birlikte $c_1=2$, $c_2=-1$ ve $c_3=1$ buluruz.",
      "<strong>Sonuç:</strong> $(v)_B=(2, -1, 1)$. Kontrol: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "$W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$ alt uzayının bir tabanını ve boyutunu bul.",
     "steps": [
      "Sistemin matrisi $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$ basamak biçimindedir ve rankı 2'dir, bu yüzden $\\dim W=4-2=2$.",
      "Serbest bilinmeyenler: $x_3=s$, $x_4=t$. O zaman $x_2=-t$ ve $x_1=x_3-x_2=s+t$, dolayısıyla $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$.",
      "<strong>Sonuç:</strong> taban $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "Doğrusal dönüşümler ve matrisleri",
   "summary": "Doğrusal dönüşüm, matrisi, dönüşümlerin bileşkesi, düzlemde geometrik dönüşümler, çekirdek ve görüntü.",
   "theory": [
    "<p>Vektör uzayları arasındaki bir $f:V\\to W$ dönüşümü, tüm $u, v$ vektörleri ve $c$ sayıları için $f(u+v)=f(u)+f(v)$ ve $f(cu)=c\\,f(u)$ ise <strong>doğrusaldır</strong>; bu durumda $f(o)=o$. Her $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ doğrusal dönüşümü, sütunları standart taban vektörlerinin görüntüleri olan $m\\times n$ boyutlu tek bir $A$ matrisi için $f(x)=Ax$ biçimindedir: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. $g\\circ f$ bileşke dönüşümüne (önce $f$, sonra $g$) $A_gA_f$ matris çarpımı karşılık gelir.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>$\\mathbb{R}^2$'de dönüşüm</th><th>matris</th></tr>\n       <tr><td>$\\varphi$ açısı kadar dönme</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>$x$ eksenine göre yansıma</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>$y=x$ doğrusuna göre yansıma</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>$x$ eksenine dik izdüşüm</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>$k$ oranlı homoteti</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "$\\varphi$ açısı kadar dönme: $e_1$ (mavi) ve $e_2$ (yeşil) vektörlerinin görüntüleri tam olarak dönme matrisinin sütunlarıdır. Kesikli şekil asıl şekil, düz çizgili şekil ise görüntüsüdür."
    },
    "<p><strong>Çekirdek</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$, $Ax=o$ homojen sisteminin çözüm kümesidir; <strong>görüntü</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$ ise $A$ matrisinin sütunlarının doğrusal germesidir. İkisi de alt uzaydır ve $\\dim\\operatorname{Im}f=h(A)$. <strong>Boyut teoremi (rank–sıfırlık teoremi):</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. Dönüşüm ancak ve ancak $\\operatorname{Ker}f=\\{o\\}$ ise birebirdir.</p>"
   ],
   "examples": [
    {
     "task": "Bir vektörü önce saat yönünün tersine $90^\\circ$ döndüren, ardından $x$ eksenine göre yansıtan dönüşümün matrisini bul. $(2, 1)$ vektörünün görüntüsü nedir?",
     "steps": [
      "Dönme: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, yansıma: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. Bileşkenin (önce $R$, sonra $S$) matrisi $SR$'dir.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – bu, $y=-x$ doğrusuna göre yansımadır.",
      "<strong>Görüntü:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$ olmak üzere $f(x)=Ax$ dönüşümünün çekirdeğini ve görüntüsünün boyutunu bul.",
     "steps": [
      "Üçüncü satır ilk ikisinin toplamıdır, bu yüzden $h(A)=2$ ve $\\dim\\operatorname{Im}f=2$.",
      "Çekirdek: $x_1+x_2=0$, $x_2+x_3=0$. $x_3=t$ için $x_2=-t$, $x_1=t$, dolayısıyla $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$.",
      "Boyut teoremiyle kontrol: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "Özdeğerler ve özvektörler",
   "summary": "Karakteristik polinom, 2×2 ve 3×3 matrislerin özdeğerleri ve özvektörleri, köşegenleştirme ve matrisin kuvvetleri.",
   "theory": [
    "<p>$Av=\\lambda v$ olacak şekilde sıfırdan farklı bir $v$ vektörü varsa $\\lambda$ sayısı $A$ kare matrisinin bir <strong>özdeğeridir</strong>; bu durumda $v$, $\\lambda$'ya karşılık gelen bir <strong>özvektördür</strong>. Geometrik olarak: $x\\mapsto Ax$ dönüşümü $v$ vektörünün doğrultusunu korur ve onu yalnızca $\\lambda$ kat uzatır ($\\lambda\\lt 0$ olduğunda ayrıca yönünü de çevirir).</p>",
    "<p>Özdeğerler, <strong>karakteristik polinom</strong> $p(\\lambda)=\\det(A-\\lambda I)$'nın kökleridir. $2\\times 2$ bir matris için $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$'dır. Genel olarak özdeğerlerin toplamı $\\operatorname{tr}A$'ya, çarpımları ise $\\det A$'ya eşittir; üçgen matrisin özdeğerleri köşegenindedir. $\\lambda$'ya ait özvektörler, $(A-\\lambda I)v=o$ homojen sisteminin sıfırdan farklı çözümleridir.</p>",
    {
     "fig": "v1-matica",
     "caption": "$A$ matrisi birim kareyi kenarları $Ae_1$ ve $Ae_2$ (matrisin sütunları) olan bir paralelkenara dönüştürür; paralelkenarın alanı $|\\det A|$'dır. Turuncu doğrular öz doğrultulardır – üzerlerindeki vektörler kendi katlarına dönüşür."
    },
    "<p><strong>Köşegenleştirme:</strong> $D$ köşegen olmak üzere $A=PDP^{-1}$ ise $n$. mertebeden $A$ matrisi köşegenleştirilebilir. Bu, ancak ve ancak $A$'nın $n$ tane doğrusal bağımsız özvektörü varsa olur; bunlar $P$ matrisinin sütunlarını oluşturur ve $D$'nin köşegeninde aynı sırayla karşılık gelen özdeğerler bulunur. $A$'nın $n$ farklı özdeğerinin olması yeterlidir; her reel simetrik matris köşegenleştirilebilir. Uygulama: $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$ matrisinin özdeğerlerini ve özvektörlerini bul.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$, dolayısıyla $\\lambda^2-7\\lambda+10=0$ ve $\\lambda_1=2$, $\\lambda_2=5$.",
      "$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, denklem $-v_1+v_2=0$, özvektör $(1, 1)$.",
      "$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, denklem $2v_1+v_2=0$, özvektör $(1, -2)$."
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$ için köşegenleştirme yardımıyla $A^3$'ü hesapla.",
     "steps": [
      "Önceki örnekten $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$ ve $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>Sonuç:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "İç çarpım, diklik ve izdüşüm",
   "summary": "İç çarpım ve norm, vektörler arasındaki açı, dik izdüşüm ve Gram–Schmidt yöntemi.",
   "theory": [
    "<p>$\\mathbb{R}^n$'deki <strong>standart iç çarpım</strong> (skaler çarpım) $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$'dir. Simetriktir, her argümanında doğrusaldır ve $u\\neq o$ için $\\langle u, u\\rangle\\gt 0$'dır. <strong>Norm</strong> (uzunluk) $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$, vektörler arasındaki uzaklık ise $\\|u-v\\|$'dir. <strong>Cauchy–Schwarz eşitsizliği</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$ geçerlidir, bu yüzden sıfırdan farklı vektörler arasındaki $\\varphi$ açısı iyi tanımlıdır: $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$.</p>",
    "<p>$\\langle u, v\\rangle=0$ ise vektörler <strong>diktir</strong> (ortogonaldir, $u\\perp v$). Sıfırdan farklı, karşılıklı dik vektörlerden oluşan bir sistem doğrusal bağımsızdır; ayrıca normları 1 ise sistem <strong>ortonormaldir</strong>. $v$ vektörünün $u\\neq o$ doğrultusu üzerine <strong>dik izdüşümü</strong> $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$'dur; $v-\\operatorname{proj}_u v$ vektörü $u$'ya diktir ve normu, $v$ noktasının $\\mathcal{L}(u)$ doğrusuna uzaklığıdır.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "$v$ vektörünün (mavi) doğrultusu $u=(\\cos\\theta, \\sin\\theta)$ olan doğru üzerine izdüşümü: yeşil vektör $\\operatorname{proj}_u v$'dir, kesikli doğru parçası doğruya diktir."
    },
    "<p><strong>Gram–Schmidt yöntemi</strong>, doğrusal bağımsız $u_1, \\dots, u_k$ vektörlerinden aynı doğrusal germeye sahip dik vektörler üretir: $w_1=u_1$ ve $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$, yani her vektörden, daha önce elde edilen vektörler üzerine izdüşümlerini çıkarırız. Normlarına bölerek $e_j=w_j/\\|w_j\\|$ ortonormal bir taban elde ederiz.</p>"
   ],
   "examples": [
    {
     "task": "$v=(3, 1, 2)$ vektörünün $u=(1, 1, 0)$ doğrultusu üzerine dik izdüşümünü ve $v$ noktasının $\\mathcal{L}(u)$ doğrusuna uzaklığını bul.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$, dolayısıyla $\\operatorname{proj}_u v=2u=(2, 2, 0)$.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$; diklik kontrolü: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>Uzaklık:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "Gram–Schmidt yöntemiyle $u_1=(1, 1, 1)$ ve $u_2=(1, 2, 3)$ vektörlerini dikleştir.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$, dolayısıyla $w_2=u_2-2w_1=(-1, 0, 1)$; gerçekten de $\\langle w_1, w_2\\rangle=0$.",
      "Ortonormal taban: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "Kuadratik formlar ve tanımlılık",
   "summary": "Kuadratik formun matrisi, tanımlılık, Sylvester ölçütü.",
   "theory": [
    "<p>$\\mathbb{R}^n$ üzerinde bir <strong>kuadratik form</strong>, $A$ simetrik bir matris – <strong>formun matrisi</strong> – olmak üzere $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$ fonksiyonudur. $x_i^2$'nin katsayısı $a_{ii}$, $x_ix_j$'nin ($i\\neq j$) katsayısı ise $2a_{ij}$'dir. Örneğin $Q=x_1^2+4x_1x_2-3x_2^2$ formunun matrisi $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$'tür.</p>",
    "<p>Form (ve matrisi), her $x\\neq o$ için $Q(x)\\gt 0$ ise <strong>pozitif tanımlı</strong>; tüm $x$ için $Q(x)\\ge 0$ ise <strong>pozitif yarı tanımlı</strong>; benzer şekilde <strong>negatif (yarı) tanımlı</strong>; hem pozitif hem negatif değerler alıyorsa <strong>tanımsızdır</strong> (belirsizdir). Özdeğerler yardımıyla: hepsi pozitif $\\iff$ pozitif tanımlı, hepsi negatif olmayan $\\iff$ pozitif yarı tanımlı, farklı işaretli $\\iff$ tanımsız.</p>",
    "<p><strong>Sylvester ölçütü:</strong> $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$ baş köşe minörleri olsun. Form pozitif tanımlıdır $\\iff$ tüm $k$ için $D_k\\gt 0$; negatif tanımlıdır $\\iff$ işaretler $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, … biçiminde dönüşümlü değişir. $\\det A\\neq 0$ ise ve bu iki durumdan hiçbiri gerçekleşmiyorsa form tanımsızdır. $\\det A=0$ olduğunda yarı tanımlılık hakkında karar vermek için köşe minörleri yetmez – özdeğerler ya da tüm baş minörler gerekir.</p>"
   ],
   "examples": [
    {
     "task": "$Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$ formunun tanımlılığını belirle.",
     "steps": [
      "Formun matrisi: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "Tüm köşe minörleri pozitiftir, form <strong>pozitif tanımlıdır</strong>."
     ]
    },
    {
     "task": "Hangi $a$ değerleri için $Q=x^2+4xy+ay^2$ formu pozitif tanımlıdır?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>Sonuç:</strong> form ancak ve ancak $a\\gt 4$ için pozitif tanımlıdır."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: ters matrisin $i$. satırını $A$ matrisinin $i$. <em>sütununun</em> kofaktörleri oluşturur.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Dolayısıyla $c={@5}$.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. $A$ ile karşılaştırınca {@1} olduğunu görürüz.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$, dolayısıyla ${@1}={@2}={@3}$.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Dolayısıyla $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$ bir homojen sistemin çözüm kümesidir, bu yüzden $\\dim W=n-h(A)$. Katsayılar matrisinin rankı:<br>{@0}<br>$h(A)={@1}$, dolayısıyla $\\dim W={@2}-{@3}={@4}$.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; bu vektörlerin normları tam sayı çıkar.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$, bir özdeğer $0$ ve diğeri $\\operatorname{tr}A={@0}$ değerine eşit; dolayısıyla ikisi de {@1} ve biri sıfır",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$, dolayısıyla $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ formülüne göre {@3}. sütunun kofaktörleri gerekir: ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. Ayrıca $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ ve ${@5}$. Dolayısıyla $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$ ve önceki durumlardan hiçbiri gerçekleşmedi",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ ve transpoz almak determinantı değiştirmez. Yani çarpımda $\\det A$ iki kez yer alır.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$ ve $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ matrisin sütun sayısına (tanım kümesinin boyutuna) eşittir.",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, dolayısıyla $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. $\\langle u, v\\rangle=0$ koşulu $t={@2}$ verir.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, karakteristik denklem ${@2}{@3}=0$ olur.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$, tam olarak bir çözüm vardır",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$, sonsuz sayıda çözüm vardır ({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sistemin çözümü yoktur",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, katsayı $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; sonuç $w_1$'e dik olmalıdır.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Sağlama: $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$; burada $D_{{@2}}$'de katsayılar matrisinin {@3}. sütununu sağ taraf sütunuyla değiştirirsin.",
  "(mení orientáciu)": "(yönü tersine çevirir)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(gerçekten ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ yeşil köşegenlerdeki çarpımlar",
  ", teda ${@0}{@1} {@2} = {@3}$": ", dolayısıyla ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "Alt uzay <strong>olur</strong>: {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "Alt uzay <strong>olmaz</strong>: {@0}.",
  "Aká je definitnosť formy?": "Formun tanımlılığı nedir?",
  "Aká je dimenzia $W$?": "$W$'nin boyutu kaçtır?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "$\\operatorname{Ker}f$ çekirdeğinin boyutu kaçtır?",
  "Aká je hodnosť matice $A$?": "$A$ matrisinin rankı kaçtır?",
  "Aká je hodnosť matice sústavy $h(A)$?": "Katsayılar matrisinin rankı $h(A)$ kaçtır?",
  "Aká je hodnosť matice sústavy?": "Katsayılar matrisinin rankı kaçtır?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "Genişletilmiş matrisin rankı $h(A\\mid b)$ kaçtır?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "$(-1)^{{@0}+{@1}}$ işareti nedir? $1$ ya da $-1$ gir.",
  "Aký je absolútny člen $D_0$?": "Sabit terim $D_0$ kaçtır?",
  "Aký je absolútny člen $b$?": "Sabit terim $b$ kaçtır?",
  "Aký je determinant tejto podmatice?": "Bu alt matrisin determinantı kaçtır?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "Kofaktörü ayrıca $A$ matrisinin determinantına bölmen gerekir.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "Ters simetrik bir matrisin köşegeninde sıfırlar vardır ve $a_{ij}=-a_{ji}$ sağlanır. Bunu tüm çiftler için kontrol et.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "Tüm ters matrisi hesaplamana gerek yok: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (kofaktörün indisleri yer değiştirmiştir).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "Cramer kuralıyla ${@1}$ sisteminden $x_{{@0}}$ bilinmeyenini hesapla. Tam sayı olmayan sonucu kesir olarak gir.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "Cramer kuralıyla: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "$\\mathbb{R}^{{@2}}$'de $u={@0}$ ve $v={@1}$ vektörleri veriliyor. ${@3}$ vektörünü hesapla. Bileşenleri noktalı virgülle ayır.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "Determinant sıfırdan farklıdır, vektörler <strong>doğrusal bağımsızdır</strong>.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "Determinant sıfırdır, vektörler <strong>doğrusal bağımlıdır</strong>{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "Determinant sıfır, ama sıfırdan farklı özdeğerin işaretine bak: $2\\times 2$ bir matriste bu özdeğer ize eşittir.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "Satırları $u, v, w$ olan matrisin determinantı $t$ parametresinin doğrusal bir fonksiyonudur – onu parametreli satıra göre aç ve sıfıra eşitle.",
  "Diagonálne prvky matice $D^{{@0}}$?": "$D^{{@0}}$ matrisinin köşegen elemanları?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "$(A^{T}A)_{jj}$ köşegen elemanı $A$ matrisinin $j$. sütunundaki elemanların karelerinin toplamıdır, bu yüzden $\\operatorname{tr}(A^{T}A)$ tüm elemanların karelerinin toplamıdır: ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "Doğrusal germenin boyutu, satırları verilen vektörler olan matrisin rankıdır:<br>{@0}<br>Basamak biçiminde {@1} {@2} var, dolayısıyla $\\dim W={@3}$.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "Diskriminant ${@0}{@1}$, dolayısıyla $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, yani $\\lambda_1={@4}$ ve $\\lambda_2={@5}$.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "Formun matrisinde köşegen dışına $xy$'nin katsayısının yarısı gelir, yani ${@1}$ değil ${@0}$.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "$x_3$'ü sondan bir önceki satırda yerine koy ve $x_2$'yi hesapla.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "$Q={@0}$ formu ancak ve ancak $a\\gt c$ ise pozitif tanımlıdır. $c$ sayısını bul (gerekirse kesir olarak).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "$Q={@0}+ay^2$ formu ancak ve ancak $a\\gt c$ ise pozitif tanımlıdır. $c$ sayısını bul (gerekirse kesir olarak).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "Gauss eliminasyonuyla matrisi basamak biçimine getiririz:<br>{@0}<br>Basamak biçiminde {@1} {@2} var, dolayısıyla $h(A)={@3}$.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "${@0}$ sistemini Gauss eliminasyonuyla çöz. Çözümü „x₁; x₂; x₃“ biçiminde gir.",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "$u_1={@0}$ ve $u_2={@1}$ vektörlerini Gram–Schmidt yöntemiyle (bu sırayla, normlamadan) ortogonalleştir. $w_2$ vektörünü gir.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "Bir karşı örnek ara: sıfır vektörü $W$'ye ait mi? $W$'nin iki elemanının toplamı yine $W$'de mi? Ya bir katı?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "Tanımsız bir form hem pozitif hem negatif değerler alır. Sylvester ölçütüne göre köşe minörlerinin işaretlerini kontrol et.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "Çekirdek, $Ax=o$ homojen sisteminin çözüm kümesidir. Matrisi indirge ve serbest bilinmeyeni parametre olarak seç.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "Çekirdek, $Ax=o$ sisteminin çözüm kümesidir:<br>{@0}<br>$h(A)=2$, dolayısıyla $\\dim\\operatorname{Ker}f=3-2=1$. Çözüm sıfırdan farklı iki satıra da diktir, bu yüzden ${@1}\\times{@2}={@3}${@4} vektörünün bir katıdır. Dolayısıyla $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "$W={@0}$ kümesi $\\mathbb{R}^3$ vektör uzayının bir alt uzayı mıdır?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "Form ancak tüm baş köşe minörleri pozitifse pozitif tanımlıdır.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "$x_ix_j$ ($i\\neq j$) teriminin katsayısı $a_{ij}$ ile $a_{ji}$ arasında eşit olarak paylaştırılır, yani $a_{ij}$ katsayının yarısıdır. Formun matrisi: $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "Simetrik matriste $x_ix_j$ teriminin katsayısı $a_{ij}$ ile $a_{ji}$ arasında eşit paylaştırılır, her biri yarısını alır.",
  "Koľko riešení má sústava ${@0}$?": "${@0}$ sisteminin kaç çözümü vardır?",
  "Koľko riešení má sústava?": "Sistemin kaç çözümü vardır?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "Kuadratik form $Q={@0}$. Simetrik matrisinin $a_{12}, a_{13}, a_{23}$ elemanlarını bul (noktalı virgülle ayrılmış) (kesirler $p/q$ biçiminde).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "Kuadratik form $Q={@0}$. Simetrik matrisinin $a_{12}$ elemanını bul (kesirler $p/q$ biçiminde).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "İkinci dereceden çarpanın $\\operatorname{tr}={@0}$, $\\det={@1}$ değerleri ve ${@2}$ ile ${@3}$ kökleri vardır. Özdeğerler ${@4}$.",
  "Lineárna kombinácia dvoch vektorov": "İki vektörün doğrusal kombinasyonu",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "$f:\\mathbb{R}^2\\to\\mathbb{R}^2$ doğrusal dönüşümü $f{@0}={@1}$ ve $f{@2}={@3}$ koşullarını sağlıyor. $f$ dönüşümünün (standart tabandaki) $A$ matrisini bul. Elemanları satır satır gir.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "$-A^{3}$ matrisi $(-1)\\cdot A^{3}$'tür ve $\\det(-M)=(-1)^{{@0}}\\det M$.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "$A={@0}$ matrisinin özdeğerleri ${@1}$ ve ${@2}$. Köşegenleştirme yardımıyla $A^{{@3}}$ matrisini hesapla. Elemanları satır satır gir.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "$B$ matrisi, $A$'nın ilk iki satırı yer değiştirilip son satırı ${@0}$ ile çarpılarak elde edilir.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "Formun matrisi $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ değerleri $a$'ya bağlı değildir. 3. satıra göre açılımla (ya da Sarrus kuralıyla) $D_3=\\det A={@3}$.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "Formun matrisi: $A={@0}$. Baş köşe minörleri: ${@1}$. {@2} olduğundan form <strong>{@3}</strong>.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "Matris üçgen değil, bu yüzden özdeğerleri köşegen elemanları değildir. $\\det(A-\\lambda I)$'yı 3. satıra göre aç.",
  "Matica v stupňovitom tvare": "Basamak biçimindeki matris",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "Matrisler: $A_f={@0}$, $A_g={@1}$. Bileşkenin matrisi $A_gA_f={@2}$, dolayısıyla $(g\\circ f)(v)={@3}{@4}={@5}$.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "$D_3=\\det A$ minörü $D_2\\,a+K$ biçimindedir. $K$ sayısı kaçtır?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "Minörü, açılımı yaptığın $a_{{@0}{@1}}={@2}$ elemanının kendisiyle de çarpman gerekir.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "Minör: $M_{{@0}{@1}}={@2}={@3}$. Dolayısıyla $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "Matrisin kuvveti eleman eleman hesaplanmaz, bu yalnızca $D$ köşegen matrisi için geçerlidir. $A^k=PD^kP^{-1}$ kullan.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "Önce $B$'nin transpozunu al (satırlar ↔ sütunlar), sonra eleman eleman hesapla.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "Önce her vektörü kendi katsayısıyla (her bileşenini) çarp, sonra karşılık gelen bileşenleri topla.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "$v=c_1b_1+c_2b_2+c_3b_3$ eşitliğini bileşen bileşen yaz: taban vektörlerinin matrisin sütunları olduğu üç denklemli bir sistem elde edersin.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "$A-{@0}I$ matrisini yaz (elemanlar satır satır).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "$B^{T}$ matrisini yaz (elemanlar satır satır).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "Sonsuz sayıda çözüm yalnızca $h(A)=h(A\\mid b)\\lt 3$ olduğunda vardır. Katsayılar matrisinde sıfır olan satırın sağ tarafına da bak.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "${@0}$ homojen sisteminin aşikâr olmayan bir çözümünü bul. (Sıfırdan farklı her katı kabul edilir.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "$A={@1}$ ve $B={@2}$ ise ${@0}X-A=B^{T}$ eşitliğini sağlayan $X$ matrisini bul. Elemanları satır satır gir.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "$(A-\\lambda I)v=o$ sisteminin sıfırdan farklı bir çözümünü bul (sıfırdan farklı her katı doğrudur).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "$v={@0}$ vektörünün $\\mathbb{R}^3$ uzayının $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ tabanındaki koordinatlarını bul. Onları „c₁; c₂; c₃“ biçiminde gir.",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "Özvektörleri bul, $P$ ve $D$'yi oluştur ve $A^k=PD^kP^{-1}$ kullan; köşegen matrisin kuvveti köşegendeki elemanlar tek tek alınarak hesaplanır.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "$A={@0}$ matrisinin özdeğerlerini bul. Onları noktalı virgülle ayırarak gir.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "$A={@0}$ matrisinin tüm özdeğerlerini bul. Onları noktalı virgülle ayırarak gir (katlı özdeğeri birden çok kez gir).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "$A={@1}$ matrisinin tersinin {@0}. satırını bul. Noktalı virgülle ayrılmış üç sayı gir.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "${@0}=\\alpha{@1}+\\beta{@2}$ olacak şekilde $\\alpha, \\beta$ sayılarını bul. Onları „α; β“ biçiminde gir.",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "Matris çarpımı değişmeli değildir. ${@0}$ denkleminde $A^{-1}$ matrisiyle {@1} çarpmak gerekir.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "İki koşul birlikte: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. $(u\\mid v)$ matrisinin tersini al ve sağdan çarp.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "Birim karenin 2×2 matrisle verilen dönüşüm altındaki görüntüsü",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "Bilinmeyen sayısından denklem sayısı değil, katsayılar matrisinin rankı çıkarılır: bazı denklemler bağımlı olabilir.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "Vektörleri bileşen bileşen çıkar ve $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$ kullan.",
  "Ortogonálna projekcia vektora na priamku": "Bir vektörün bir doğru üzerine dik izdüşümü",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "Üç koşulun hepsini kontrol et: sıfır vektörü, toplamaya göre kapalılık ve sayıyla çarpmaya göre kapalılık. Hepsi sağlanıyorsa alt uzaydır.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "$W$'nin sıfır vektörünü içerip içermediğini ve toplama ile reel sayıyla çarpmaya göre kapalı olup olmadığını kontrol et. Çürütmek için tek bir karşı örnek yeterlidir.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "İndirgemeden sonra iki bağımsız denklem kalır. Bir bilinmeyeni parametre olarak seç (ya da iki satırın vektörel çarpımını kullan).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "$D = 0$ koşulu ${@0}{@1} = {@2}$ verir, dolayısıyla ${@3} = {@4}$.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "$D_3\\gt 0$ koşulu $a\\gt {@0}$ verir, dolayısıyla $c={@1}$.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "$A^{T}$'yi hem $A$ ile hem $-A$ ile eleman eleman karşılaştır. Eşitliklerden biri sağlanıyor olabilir.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "Bileşenleri karşılaştırarak ${@0}={@1}$, ${@2}={@3}$ sistemini elde ederiz.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "$\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ ve $\\det A^{-1}=1/\\det A$ kurallarını kullan.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "Sarrus kuralını kullan: „sağa aşağı“ giden üç çarpım artı işaretli, „sola aşağı“ giden üç çarpım eksi işaretli.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "{@0}. satırın kofaktörlerini kullandın. Ek matris transpozdur: ters matrisin {@1}. satırını {@2}. sütunun kofaktörleri oluşturur.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "$A_{{@0}{@1}}$ kofaktörünü kullandın. $(A^{-1})_{{@2}{@3}}$ elemanı için indisleri yer değiştirmiş kofaktör, $A_{{@4}{@5}}$ gerekir.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "Bileşen bileşen hesaplarız: ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "$A={@0}$ ve $B={@1}$ için ${@2}$ matrisini hesapla. Elemanları satır satır gir (noktalı virgülle ayrılmış 4 sayı).",
  "Pre ktoré $a$ je $D=0$?": "Hangi $a$ için $D=0$ olur?",
  "Pre ktoré $t$ je $D=0$?": "Hangi $t$ için $D=0$ olur?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "Hangi $t$ için iç çarpım sıfırdır? Tam sayı olmayan sonucu kesir olarak gir.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "Hangi $t$ için $u={@0}$ ve $v={@1}$ vektörleri ortogonaldir? Tam sayı olmayan sonucu kesir olarak gir.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "$a$ parametresinin hangi değeri için $A={@0}$ matrisinin rankı 2 olur?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "$t$ parametresinin hangi değeri için $u={@0}$, $v={@1}$ ve $w={@2}$ vektörleri doğrusal bağımlıdır?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "$2\\times 2$ bir matris için $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$ denklemini çöz.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "$A={@0}$ matrisi için ters matrisin $(A^{-1})_{{@1}{@2}}$ elemanını hesapla. Tam sayı olmayan sonucu kesir olarak gir.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "$A={@0}$ matrisi için $\\operatorname{tr}(A^{T}A)$ izini hesapla.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "Determinantı Sarrus kuralıyla yeniden hesapla: üç çarpım toplanır, üçü çıkarılır. Vektörler yalnızca determinant sıfırdan farklıysa bağımsızdır.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "3. mertebeden bir matriste $2\\times 2$'deki gibi iki köşegen yetmez. Sarrus kuralında altı çarpım vardır: üçü pozitif, üçü negatif.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "${@0}$. mertebeden bir matris $c$ sayısıyla çarpıldığında determinant yalnızca $c$ ile değil, $c^{n}$ ile çarpılır.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "${@0}$. mertebeden bir matris $c$ sayısıyla çarpıldığında ${@1}$ satırın her biri $c$ ile çarpılır: $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "$A$'yı diğer tarafa geçirince işareti değişir: ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "$c\\,x_ix_j$ karma teriminde $a_{ij}=a_{ji}=c/2$.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "$w_1$ üzerine izdüşüm $u_2$'den çıkarılmalı, eklenmemeli. Sonucun $w_1$'e dik olup olmadığını kontrol et.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "Elemanların karesi alınmamış. $(A^{T}A)_{jj}$ köşegen elemanı $j$. sütunun kendisiyle iç çarpımıdır, yani karelerin toplamıdır.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "$(A^{T}A)_{jj}$ elemanı, $A$ matrisinin $j$. sütununun kendisiyle iç çarpımından elde edilir.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "İlk iki satır birbiriyle orantılı değil, bu yüzden $h(A)\\ge 2$. Rank ancak ve ancak $D=\\det A=0$ ise 3'ten küçüktür. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "İlk iki köşe minörü $a$'ya bağlı değildir; $D_3=\\det A$, $D_2$ katsayılı ve $a$'ya bağlı doğrusal bir fonksiyondur.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "Sistemin tam olarak bir çözümü yalnızca $h(A)=h(A\\mid b)=3$ olduğunda vardır. Eliminasyondan sonra katsayılar matrisinde sıfır satır oluşup oluşmadığını kontrol et.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "Satır işlemleriyle öncü elemanların altındaki elemanları sıfırla ve sıfırdan farklı satırları say.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "$n$ bilinmeyenli homojen bir sistemin çözümleri $n-h(A)$ boyutlu bir alt uzay oluşturur.",
  "Riešenie je $X={@0}={@1}={@2}$.": "Çözüm $X={@0}={@1}={@2}$.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "$(A-\\lambda I)v=o$ sistemini çözeriz; burada $A-{@0}I={@1}$. {@2} Sağlama: $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "Bir şeklin orijin etrafında dönmesi",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "$c_1b_1+c_2b_2+c_3b_3=v$ denklemi, sütunlarında taban vektörleri bulunan matrisli bir sistemdir:<br>{@0}<br>Geriye doğru yerine koyma – {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "Denklemi sağdan $A^{-1}$ matrisiyle çarp: $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "Denklemi soldan $A^{-1}$ matrisiyle çarp: $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "$A={@0}$ matrisinin nasıl bir matris olduğuna karar ver.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "Determinantı yalnızca bir elemanı sıfırdan farklı olan satıra ya da sütuna göre aç. $(-1)^{i+j}$ işaretini unutma.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "$\\det(A-\\lambda I)$'nın 3. satıra göre açılımı: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "Determinantın 3. satıra göre açılımı $D=Ca+D_0$ verir. $C$ katsayısı (parametreli elemanın kofaktörü) kaçtır?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "3. satıra göre açılım $D=Ct+D_0$ verir. $C$ katsayısı (parametreli elemanın kofaktörü) kaçtır?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "3. satıra göre açılım: $D = {@0}$, burada ${@1}$. Dolayısıyla $D = {@2}$.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "3. satıra göre açılımla $(c-\\lambda)$ çarpanını elde edersin. $c$ kaçtır?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "Genişletilmiş matrisi basamak biçimine getir ve bilinmeyenleri aşağıdan yukarıya hesapla.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "Matris denklemini sıradan bir denklem gibi ele al: $X$'i yalnız bırak, sonra eleman eleman hesapla.",
  "Sarrusovo pravidlo pre determinant 3×3": "3×3 determinant için Sarrus kuralı",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "Sarrus kuralı: $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "Sarrus kuralı: sağa aşağı giden köşegenlerdeki üç çarpım artı işaretli, sola aşağı gidenlerdeki üç çarpım eksi işaretli.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "Yarı tanımlı bir formda $\\det A=0$'dır, yani en az bir özdeğer sıfırdır. Determinantı kontrol et.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "$\\langle u, v\\rangle$ iç çarpımı $at+b$ biçimindedir. $a$ katsayısı kaçtır?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "İç çarpımı ayrıca $\\langle u, u\\rangle=\\|u\\|^2$ sayısına bölmen gerekir.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "Dönüşüm matrisinin sütunları $e_1=(1, 0)$ ve $e_2=(0, 1)$ vektörlerinin görüntüleridir. „Önce $f$, sonra $g$“ bileşkesine $A_gA_f$ çarpımı karşılık gelir.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "Sağ taraf sütunu determinantın {@1}. satırına değil, {@0}. <em>sütununa</em> yazılır.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "Sylvester ölçütü: $D_1\\gt 0$ her zaman sağlanır, koşulu $D_2=\\det A\\gt 0$ verir.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "Simetrik bir matris, ana köşegene göre simetrik olan tüm eleman çiftleri için $a_{ij}=a_{ji}$ koşulunu sağlar. Onları tek tek karşılaştır.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "$u={@0}$, $v={@1}$ ve $w={@2}$ vektörleri doğrusal bağımlı mı, yoksa bağımsız mı?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "Vektörler doğrusal bağımlı mı, yoksa bağımsız mı?",
  "Súradnice vektora v báze b₁, b₂": "b₁, b₂ tabanındaki koordinatlar",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "Sistem ${@0}={@1}$, ${@2}={@3}$. Determinantı $D$'yi hesapla.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "Sistemin çözümü yalnızca $c\\neq 0$ olmak üzere $(0\\ 0\\ 0\\mid c)$ satırı oluştuğunda, yani $h(A)\\neq h(A\\mid b)$ olduğunda yoktur.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "Sola aşağı giden köşegenlerdeki çarpımlar pozitif terimlerden çıkarılır, eklenmez.",
  "Sčítaj ich: aký je vektor ${@0}$?": "Onları topla: ${@0}$ vektörü nedir?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "Dolayısıyla $A^{-1}$ matrisinin {@0}. satırı $\\frac{1}{{@1}}({@2})={@3}$.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "Bu $\\dim\\operatorname{Im}f=h(A)$. Çekirdeğin boyutu, sütun sayısı eksi ranktır.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "Bu, tüm $\\mathbb{R}^{{@0}}$ uzayının boyutudur. Alt uzayın boyutu daha küçük olabilir, belirleyici olan ranktır.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "Bu çekirdeğin boyutudur. Görüntünün boyutu matrisin rankına eşittir.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "Bu katsayılar matrisinin rankıdır. Çözüm uzayının boyutu serbest bilinmeyenlerin sayısıdır, $n-h(A)$.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "Bu, başlangıç matrisinin satır sayısıdır. Rank, ancak basamak biçimine getirdikten sonraki sıfırdan farklı satırların sayısıdır.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "Bu sütun sayısıdır. Rank, basamak biçimindeki sıfırdan farklı satırların sayısıdır.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "Bu vektörlerin sayısıdır. Bazıları diğerlerinin doğrusal kombinasyonu olabilir; boyut, onlardan oluşturulan matrisin rankıdır.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "Bu, $u$ vektörünün $v$ doğrultusu üzerine izdüşümüdür. Biz $v$'yi $u$ doğrultusu üzerine izdüşürüyoruz, bu yüzden sonuç $u$ vektörünün bir katıdır.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "Matrisin transpozunu al ve onu $A$ ile ve $-A$ ile karşılaştır. Köşegene de bak.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "İki bilinmeyenli iki denklemli bir sistem için üç olasılık",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "$\\mathbb{R}^3$'teki üç vektör, ancak ve ancak onlardan oluşturulan matrisin determinantı sıfırdan farklıysa doğrusal bağımsızdır.",
  "Uhol priamky θ (°)": "Doğrunun açısı θ (°)",
  "Uhol φ (°)": "Açı φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "Genişletilmiş matrisi basamak biçimine getir ve $h(A)$'yı $h(A\\mid b)$ ile ve bilinmeyen sayısıyla karşılaştır.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "Genişletilmiş matrisi basamak biçimine getir. Katsayılar matrisinin rankı $h(A)$ kaçtır?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "Genişletilmiş matrisi basamak biçimine getir. Son satırdan $x_3$'ü hesapla.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "$Q={@0}$ kuadratik formunun tanımlılığını belirle (en kesin seçeneği seç).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "$\\mathbb{R}^{{@1}}$ uzayının $W=\\mathcal{L}({@0})$ alt uzayının boyutunu bul.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "$W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$ alt uzayının boyutunu bul.",
  "Urči hodnosť matice $A={@0}$.": "$A={@0}$ matrisinin rankını bul.",
  "Urči číslo $c$ (prípadne ako zlomok).": "$c$ sayısını bul (gerekirse kesir olarak).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "Paydada karelerleri değil, $\\|u\\|$ ve $\\|v\\|$ normları vardır.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "Üçüncü satırda iki sıfır var – $\\det(A-\\lambda I)$'yı bu satıra göre aç ve kalan $2\\times 2$ determinantı ikinci dereceden denklem olarak çöz.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "{@0}. satırdaki tek sıfırdan farklı eleman $a_{{@1}{@2}}={@3}$, bu yüzden bu satıra göre Laplace açılımı $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$ verir.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "{@0}. sütundaki tek sıfırdan farklı eleman $a_{{@1}{@2}}={@3}$, bu yüzden bu sütuna göre Laplace açılımı $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$ verir.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "$v={@0}$ vektörünü önce $f$ dönüşümüyle dönüştürürüz: {@1}, sonra sonucu $g$ dönüşümüyle: {@2}. $(g\\circ f)(v)$ görüntüsünü „x; y“ biçiminde bul.",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "Taban vektörleri katsayılar matrisinin satırlarına değil, <em>sütunlarına</em> yazılır: $i$. denklem $i$. bileşenleri karşılaştırır.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "Vektörler ancak ve ancak iç çarpımları sıfırsa ortogonaldir.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "Vektörler ancak ve ancak $D={@0}=0$ ise bağımlıdır. {@1} $t={@2}$ için $w$, $u$ ve $v$ vektörlerinin doğrusal kombinasyonudur.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "Vektörleri bir matrisin satırlarına yaz ve rankını bul.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "Vektörleri bir matrisin satırlarına yazar ve determinantı Sarrus kuralıyla hesaplarız: ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "Vektörleri sütunlara yazarız: $A\\,U=P$, burada $U={@0}$ ve $P={@1}$. $\\det U={@2}$ olduğundan $U^{-1}={@3}$ ve $A=PU^{-1}={@4}{@5}={@6}$.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "Özvektörler, $(A-\\lambda I)v=o$ homojen sisteminin sıfırdan farklı çözümleridir.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "Özvektörler: $\\lambda={@1}$ için ${@0}$ ve $\\lambda={@3}$ için ${@2}$. Dolayısıyla $P={@4}$, $D={@5}$, $\\det P={@6}$ ve $P^{-1}={@7}$.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "Özdeğerler yalnızca üçgen matriste köşegen elemanlarıdır. Burada $\\det(A-\\lambda I)=0$ karakteristik denklemini çöz.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "Boyut teoreminde satır sayısı değil, tanım kümesinin boyutu, yani sütun sayısı ${@0}$ yer alır.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "Bir satırı ${@0}$ ile çarpmak determinantı ${@1}$ ile çarpar.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "$(A^{-1})_{{@0}{@1}}$'i hesapla. Tam sayı olmayan sonucu kesir olarak gir.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "$A=PU^{-1}$'i hesapla (elemanlar satır satır).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "$A^{-1}$'i hesapla (elemanlar satır satır).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "$A^{{@0}}=PD^{{@1}}P^{-1}$ matrisini hesapla (elemanlar satır satır).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "$X={@0}$ matrisini hesapla (elemanlar satır satır).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "$\\cos\\varphi$'yi hesapla (kesir olarak).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "$\\varphi$, $u={@0}$ ve $v={@1}$ vektörleri arasındaki açı olmak üzere $\\cos\\varphi$'yi hesapla. Sonucu kesir olarak gir.",
  "Vypočítaj $\\det A$.": "$\\det A$'yı hesapla.",
  "Vypočítaj $\\langle u, u\\rangle$.": "$\\langle u, u\\rangle$'yu hesapla.",
  "Vypočítaj $\\langle u, v\\rangle$.": "$\\langle u, v\\rangle$'yi hesapla.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "$w_1=u_1$ olmak üzere $\\langle u_2, w_1\\rangle$'i hesapla.",
  "Vypočítaj $\\langle v, u\\rangle$.": "$\\langle v, u\\rangle$'yu hesapla.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "$\\langle w_1, w_1\\rangle$'i hesapla.",
  "Vypočítaj $\\|u\\|$.": "$\\|u\\|$'yu hesapla.",
  "Vypočítaj $\\|v\\|$.": "$\\|v\\|$'yi hesapla.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "$c_1$'i hesapla ve tüm koordinatları gir.",
  "Vypočítaj $c_2$.": "$c_2$'yi hesapla.",
  "Vypočítaj $f(v)$.": "$f(v)$'yi hesapla.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "$g\\bigl(f(v)\\bigr)$'yi hesapla.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "$x_{{@0}}$ değerini hesapla. Tam sayı olmayan sonucu kesir olarak gir.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "{@0}. sütunun kofaktörlerini hesapla: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "$A_{{@0}{@1}}$ kofaktörünü hesapla.",
  "Vypočítaj determinant $D$ matice sústavy.": "Katsayılar matrisinin determinantı $D$'yi hesapla.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "$D_\\alpha$ determinantını hesapla (birinci sütunu sağ taraflarla değiştirirsin).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "$D_\\beta$ determinantını hesapla (ikinci sütunu sağ taraflarla değiştirirsin).",
  "Vypočítaj determinant $D_{{@0}}$.": "$D_{{@0}}$ determinantını hesapla.",
  "Vypočítaj determinant ${@0}$.": "${@0}$ determinantını hesapla.",
  "Vypočítaj determinant matice $A={@0}$.": "$A={@0}$ matrisinin determinantını hesapla.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "$(A^{T}A)_{{@0}{@1}}$ köşegen elemanını hesapla.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "$D_{@0}$ baş köşe minörünü hesapla.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "$U={@0}$ matrisinin tersini hesapla (elemanlar satır satır).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "$A+B^{T}$ matrisini hesapla (elemanlar satır satır).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "$X$ matrisini hesapla (elemanlar satır satır).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "${@0}$ matrisini hesapla (elemanlar satır satır).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "$M_{{@0}{@1}}$ minörünü hesapla ({@2}. satır ve {@3}. sütun silindikten sonraki determinant).",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "$v={@0}$ vektörünün $u={@1}$ vektörü doğrultusu üzerine dik izdüşümünü hesapla. Bileşenleri noktalı virgülle ayırarak gir (kesirler $p/q$ biçiminde).",
  "Vypočítaj rohový minor $D_2$.": "$D_2$ köşe minörünü hesapla.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "$\\operatorname{tr}(A^{T}A)$ izini hesapla.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "$\\operatorname{tr}A$ izini hesapla.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "Sağa aşağı giden köşegenlerdeki üç çarpımın toplamını hesapla.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "Sola aşağı giden köşegenlerdeki üç çarpımın toplamını hesapla.",
  "Vypočítaj vektor ${@0}u$.": "${@0}u$ vektörünü hesapla.",
  "Vypočítaj vektor ${@0}{@1}v$.": "${@0}{@1}v$ vektörünü hesapla.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "$u={@0}$ ve $v={@1}$ vektörleri arasındaki $\\|u-v\\|$ uzaklığını hesapla.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "$\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$ karakteristik denklemini çöz. Özdeğerleri gir.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "$A={@1}$ ve $B={@2}$ olmak üzere ${@0}$ matris denklemini çöz. $X$ matrisinin elemanlarını satır satır gir.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "Satır değişimi işareti değiştirir ve bir satırı ${@0}$ ile çarpmak determinantı ${@1}$ ile çarpar: $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "Birinci satırdan $x_1$'i hesapla ve çözümün tamamını gir.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "$AU=P$ denkleminden $U^{-1}$ matrisiyle sağdan çarpmak gerekir: $A=PU^{-1}$. Matris çarpımı değişmeli değildir.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "Denklemden $X=\\tfrac{1}{{@0}}(A+B^{T})$. $B^{T}={@1}$, $A+B^{T}={@2}$, dolayısıyla $X={@3}$.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "{@0}. satırdan: ${@1}=0$, bu yüzden özvektör ${@2}$ vektörünün bir katıdır.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "$B$ matrisinin transpozunu almayı unuttun: $B^{T}$'de $B$'nin satırları sütun olarak yazılır.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "$B$ matrisinin transpozunu almayı unuttun: denklemde $B^{T}$ var.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "Vektörleri katsayılarıyla çarpmayı unuttun. $u$ ve $v$ vektörlerinin her bileşenini önce ilgili sayıyla çarp.",
  "Zadaj $\\alpha$ a $\\beta$.": "$\\alpha$ ve $\\beta$'yı gir.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "Aşikâr olmayan bir çözüm gir (sıfırdan farklı her katı kabul edilir).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "$\\operatorname{proj}_u v$ izdüşümünü gir (kesirler $p/q$ biçiminde).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "Çekirdeğin doğrultu vektörünü gir (sıfırdan farklı her katı doğrudur).",
  "Zadaj vektor $w_2$.": "$w_2$ vektörünü gir.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "$\\lambda={@0}$ için bir özvektör gir (sıfırdan farklı herhangi bir katı).",
  "Zadaj všetky vlastné čísla matice $A$.": "$A$ matrisinin tüm özdeğerlerini gir.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "$A^{-1}$ matrisinin {@0}. satırını gir.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "Eşitliği bileşen bileşen yaz – $\\alpha$ ve $\\beta$ için iki denklemli bir sistem elde edersin.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "Dönüşümleri ters sırayla uyguladın. $v$'ye önce $f$ uygulanır, bu yüzden bileşkenin matrisi $A_gA_f$'tir ($A_f$ matrisi vektörün yanında durur).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "$f:\\mathbb{R}^3\\to\\mathbb{R}^3$ dönüşümü $A={@0}$ olmak üzere $f(x)=Ax$ kuralıyla verilir. $\\operatorname{Ker}f$ çekirdeği bir doğrudur. Doğrultu vektörünü bul (sıfırdan farklı her katı doğrudur).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "$f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ dönüşümü $A={@2}$ matrisiyle verilir. $\\dim\\operatorname{{@3}}f$'yi bul.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "Formun simetrik matrisini oluştur (karma terimlerde katsayının yarısı) ve baş köşe minörlerini hesapla.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "Sistemi kur (taban vektörleri sütunlarda) ve basamak biçimine getir. Son satırdan $c_3$'ü hesapla.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "Kalan çarpan, sol üst $2\\times 2$ alt matrisin karakteristik polinomudur. Onun izi kaçtır?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "Form ancak köşe minörlerinin işaretleri değişiyor ve $D_1\\lt 0$ ise negatif tanımlıdır.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "Vektörler ancak determinant sıfırsa bağımlıdır. Onu Sarrus kuralıyla yeniden hesapla ve işaretlere dikkat et.",
  "ani symetrická, ani antisymetrická": "ne simetrik ne de ters simetrik",
  "antisymetrická": "ters simetrik",
  "indefinitná": "tanımsız",
  "je podpriestor": "alt uzaydır",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "$(1, {@0}, 0)$ ve $({@1}, 0, 1)$ vektörlerinin doğrusal germesidir",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "homojen bir doğrusal denklemin çözüm kümesidir – çözümlerin toplamı da bir çözümün katı da yine çözümdür",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "homojen bir sistemin çözüm kümesidir (orijinden geçen bir doğru)",
  "jeden parameter": "bir parametre",
  "kladne definitná": "pozitif tanımlı",
  "kladne semidefinitná": "pozitif yarı tanımlı",
  "kolmá projekcia na os $x$": "$x$ eksenine dik izdüşüm",
  "kolmá projekcia na os $y$": "$y$ eksenine dik izdüşüm",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "karmaşık özdeğerler – gerçel özdoğrultu yok",
  "lineárne nezávislé": "doğrusal bağımsız",
  "lineárne závislé": "doğrusal bağımlı",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "örneğin $(1, 0, 0)$ ve $(0, 1, 0)$ kümeye ait, ama toplamları $(1, 1, 0)$ ait değil – toplamaya göre kapalı değil",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "örneğin $(1, 0, 0)$ kümeye ait, ama $(-1)\\cdot(1, 0, 0)$ ait değil – sayıyla çarpmaya göre kapalı değil",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "örneğin $(1, 1, 0)$ kümeye ait, ama $2\\cdot(1, 1, 0)=(2, 2, 0)$ ait değil, çünkü $2\\neq 4$",
  "nekladné": "pozitif olmayan",
  "nenulové riadky": "sıfırdan farklı satır",
  "nenulový riadok": "sıfırdan farklı satır",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "sıfır vektörünü içermez ($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "sıfır vektörünü içermez: birinci bileşen yalnızca $s=0$ için 0'dır, ama o zaman ikinci bileşen ${@0}\\neq 0$ olur",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "ne $A^{T}=A$ ne de $A^{T}=-A$ sağlanıyor, dolayısıyla matris ne simetrik ne de ters simetrik",
  "nezáporné": "negatif olmayan",
  "nie je podpriestor": "alt uzay değildir",
  "osová súmernosť podľa osi $x$": "$x$ eksenine göre yansıma",
  "osová súmernosť podľa osi $y$": "$y$ eksenine göre yansıma",
  "osová súmernosť podľa priamky $y=-x$": "$y=-x$ doğrusuna göre yansıma",
  "osová súmernosť podľa priamky $y=x$": "$y=x$ doğrusuna göre yansıma",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "$A^{T}=-A$ sağlanıyor, dolayısıyla matris ters simetrik",
  "platí $A^{T}=A$, teda matica je symetrická": "$A^{T}=A$ sağlanıyor, dolayısıyla matris simetrik",
  "práve jedno riešenie": "tam olarak bir çözüm",
  "rotácia o $180^\\circ$": "$180^\\circ$ dönme",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "saat yönünün tersine $90^\\circ$ dönme",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "saat yönünde $90^\\circ$ dönme",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "merkezi orijinde, oranı $2$ olan homoteti",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "kayma $(x, y)\\mapsto(x+y, y)$",
  "sprava": "sağdan",
  "symetrická": "simetrik",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "B tabanındaki koordinatlar: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = standart tabanda ({@2}; {@3})",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "dolayısıyla $\\alpha=\\frac{{@0}}{{@1}}={@2}$ ve $\\beta=\\frac{{@3}}{{@4}}={@5}$.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "öncü elemanlar vurgulanmıştır, basamakların altında yalnızca sıfırlar var",
  "všetky rohové minory sú kladné": "tüm köşe minörleri pozitif",
  "z {@0}. riadku: ${@1} = {@2}$": "{@0}. satırdan: ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "köşe minörlerinin işaretleri değişiyor ({@0})",
  "záporne definitná": "negatif tanımlı",
  "záporne semidefinitná": "negatif yarı tanımlı",
  "zľava": "soldan",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$, çözümler bir doğru oluşturur (bir parametre). Çözüm, basamak biçimindeki sıfırdan farklı iki satıra da diktir, bu yüzden onu bu satırların vektörel çarpımı olarak elde ederiz: ${@1}\\times{@2}={@3}${@4}. Tüm çözümler $t\\cdot{@5}$, $t\\in\\mathbb{R}$.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$, dolayısıyla $\\dim\\operatorname{Im}f={@2}$ ve boyut teoremine göre $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>Frobenius teoremine göre: {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>Geriye doğru yerine koyma – {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "İndirgeme: {@0}<br>Rank 2'dir, çözüm sıfırdan farklı iki satıra da diktir, dolayısıyla ${@1}\\times{@2}={@3}${@4} vektörünün bir katıdır.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "$\\lambda={@0}$ sayısı $A={@1}$ matrisinin bir özdeğeridir. Ona ait bir özvektör bul (sıfırdan farklı her katı doğrudur).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "${@0}$. mertebeden $A$ kare matrisinin $\\det A={@1}$.{@2} ${@3}$ değerini hesapla. Tam sayı olmayan sonucu kesir olarak gir, örneğin $-3/4$.",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "3. mertebeden bir kare matrisin rankı ancak ve ancak determinantı sıfırdan farklıysa 3'tür.",
  "− súčiny na oranžových diagonálach": "− turuncu köşegenlerdeki çarpımlar",
  "nekonečne veľa": "sonsuz sayıda",
  "jedno riešenie": "tek çözüm",
  "žiadne riešenie": "çözüm yok",
  ", po úprave ${@0}$": ", sadeleştirince ${@0}$",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Bu, uzaklığın karesidir. Sonucun karekökünü de al."
 }
});
