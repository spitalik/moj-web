/* Türkçe: preklad js/rocniky/s4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/s4/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "s4-limita": {
   "title": "Fonksiyonun limiti",
   "summary": "Fonksiyon değerleri neye yaklaşır, 0/0 türündeki limitlerin hesaplanması ve sonsuzda limit.",
   "theory": [
    "<p>$\\lim_{x\\to a} f(x) = L$ gösterimi, $x$'i $a$'ya yeterince yaklaştırırsak ($x\\neq a$ olmak üzere) $f(x)$ değerlerinin $L$ sayısına istediğimiz kadar yaklaştığı anlamına gelir.\n       Fonksiyonun tam olarak $a$ noktasındaki değeri limiti <strong>etkilemez</strong>; fonksiyon bu noktada tanımlı bile olmayabilir.\n       Limit ancak ve ancak <strong>soldan ve sağdan limitler</strong> $\\lim_{x\\to a^-} f(x)$ ve $\\lim_{x\\to a^+} f(x)$ eşitse vardır.</p>",
    {
     "fig": "s4-limita",
     "caption": "$f(x)=\\frac{\\sin x}{x}$ fonksiyonu $0$ noktasında tanımlı değildir (boş daire), yine de $\\lim_{x\\to 0}\\frac{\\sin x}{x}=1$'dir. $h$'yi küçült ve değerleri izle."
    },
    "<p><strong>Limitleri nasıl hesaplarız:</strong></p>\n       <ul><li>$f$, $a$ noktasında sürekliyse (polinom, $\\sin$, $\\mathrm{e}^x$ …) yerine koymak yeterlidir: $\\lim_{x\\to a} f(x) = f(a)$.</li>\n       <li>$\\frac{0}{0}$ türündeki bir ifadeyi düzenleriz: çarpanlarına ayırıp sadeleştiririz ya da kökü iki kare farkına genişletiriz.</li>\n       <li>Önemli limit: $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, bu yüzden $\\lim_{x\\to 0}\\frac{\\sin kx}{x} = k$.</li>\n       <li>$c\\neq 0$ iken $\\frac{c}{0}$ ifadesi $\\pm\\infty$ sonsuz limitine götürür; işareti soldan ve sağdan limitlerden belirleriz.</li></ul>",
    "<p>Rasyonel bir fonksiyonun <strong>sonsuzdaki limiti</strong>: pay ve paydayı paydadaki $x$'in en yüksek kuvvetine böleriz.\n       Dereceler eşitse limit baş katsayıların bölümüdür; payın derecesi daha küçükse limit $0$'dır.\n       Örneğin $\\lim_{x\\to\\infty}\\frac{3x^2+1}{2x^2-x} = \\frac{3}{2}$. $\\lim_{x\\to\\pm\\infty} f(x) = q$ ise $y=q$ doğrusu grafiğin yatay asimptotudur.</p>"
   ],
   "examples": [
    {
     "task": "$\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3}$ limitini hesapla.",
     "steps": [
      "Yerine koyarsak $\\frac{0}{0}$ elde ederiz, bu yüzden ifadeyi düzenlememiz gerekir.",
      "Payı çarpanlarına ayırırız: $x^2-9=(x-3)(x+3)$. $x\\neq 3$ için sadeleştiririz: $\\frac{(x-3)(x+3)}{x-3}=x+3$.",
      "$\\lim_{x\\to 3}(x+3)=6$.",
      "<strong>Sonuç: 6</strong>"
     ]
    },
    {
     "task": "$\\lim_{x\\to\\infty}\\dfrac{4x^2-x+7}{2x^2+5}$ limitini hesapla.",
     "steps": [
      "Pay ve paydayı $x^2$'ye böleriz: $\\dfrac{4-\\frac{1}{x}+\\frac{7}{x^2}}{2+\\frac{5}{x^2}}$.",
      "$\\frac{1}{x}$, $\\frac{7}{x^2}$ ve $\\frac{5}{x^2}$ kesirleri $x\\to\\infty$ için sıfıra yaklaşır.",
      "<strong>Sonuç: $\\frac{4}{2}=2$</strong>"
     ]
    }
   ]
  },
  "s4-derivacie-funkcii": {
   "title": "Temel fonksiyonların türevleri",
   "summary": "Üstel, logaritmik ve trigonometrik fonksiyonların, çarpımın, bölümün ve bileşke fonksiyonun türevi.",
   "theory": [
    "<p><strong>Temel fonksiyonların türevleri:</strong></p>\n       <table class=\"tbl tbl-auto\">\n         <tr><th>$f(x)$</th><th>$f'(x)$</th><th>$f(x)$</th><th>$f'(x)$</th></tr>\n         <tr><td>$c$</td><td>$0$</td><td>$x^n$</td><td>$n\\,x^{n-1}$</td></tr>\n         <tr><td>$\\mathrm{e}^x$</td><td>$\\mathrm{e}^x$</td><td>$a^x$</td><td>$a^x\\ln a$</td></tr>\n         <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td>$\\log_a x$</td><td>$\\frac{1}{x\\ln a}$</td></tr>\n         <tr><td>$\\sin x$</td><td>$\\cos x$</td><td>$\\cos x$</td><td>$-\\sin x$</td></tr>\n         <tr><td>$\\tan x$</td><td>$\\frac{1}{\\cos^2 x}$</td><td>$\\sqrt{x}$</td><td>$\\frac{1}{2\\sqrt{x}}$</td></tr>\n       </table>",
    "<p><strong>Kurallar:</strong> çarpım $(u\\cdot v)'=u'v+uv'$, bölüm $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ ($v\\neq 0$ için),\n       bileşke fonksiyon $\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)$ — “dış” fonksiyonun türevini “iç” fonksiyonun türeviyle çarparız.\n       Örneğin $(\\sin 3x)'=3\\cos 3x$, $(\\mathrm{e}^{x^2})'=2x\\,\\mathrm{e}^{x^2}$, $\\big(\\ln(x^2+1)\\big)'=\\frac{2x}{x^2+1}$.</p>",
    {
     "fig": "s4-exp-ln",
     "caption": "$y=\\mathrm{e}^x$ ve $y=\\ln x$ grafikleri $y=x$ doğrusuna göre simetriktir. $\\mathrm{e}^x$ grafiğine $[0; 1]$ noktasındaki teğetin eğimi $\\mathrm{e}^0=1$, $\\ln x$ grafiğine $[1; 0]$ noktasındaki teğetin eğimi $\\frac{1}{1}=1$'dir."
    },
    "<p>$f$ fonksiyonunun grafiğine $[x_0; f(x_0)]$ noktasındaki <strong>teğetin</strong> denklemi $y=f(x_0)+f'(x_0)(x-x_0)$'dır.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^2\\sin x$ fonksiyonunun türevini al.",
     "steps": [
      "$u=x^2$, $v=\\sin x$ çarpımıdır; burada $u'=2x$ ve $v'=\\cos x$.",
      "<strong>$f'(x)=2x\\sin x+x^2\\cos x$</strong>"
     ]
    },
    {
     "task": "$f(x)=\\ln(x^2+1)$ için $f'(1)$'i hesapla ve $x_0=1$ noktasındaki teğetin denklemini yaz.",
     "steps": [
      "Bileşke fonksiyon: dış fonksiyon $\\ln u$'nun türevi $\\frac{1}{u}$, iç fonksiyon $u=x^2+1$'in türevi $2x$'tir.",
      "$f'(x)=\\frac{2x}{x^2+1}$, yani $f'(1)=\\frac{2}{2}=1$.",
      "$f(1)=\\ln 2$, teğet: $y=\\ln 2+1\\cdot(x-1)$, yani $y=x-1+\\ln 2$."
     ]
    }
   ]
  },
  "s4-extremy": {
   "title": "Fonksiyonun monotonluğu ve ekstremumları",
   "summary": "Türevin işareti, kritik noktalar, yerel ve mutlak ekstremumlar, optimizasyon problemleri.",
   "theory": [
    "<p>$I$ aralığında $f'(x)&gt;0$ ise $f$ fonksiyonu bu aralıkta <strong>artandır</strong>; $f'(x)&lt;0$ ise <strong>azalandır</strong>.\n       $f'(x)=0$ olan noktalara <strong>kritik noktalar</strong> (durağan noktalar) denir. (Türevlenebilir) bir fonksiyonun yerel ekstremumu yalnızca bir kritik noktada olabilir.</p>",
    {
     "fig": "s4-extremy",
     "caption": "$f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$ grafiği. Yeşil kısımlar: $f'&gt;0$, turuncu kısım: $f'&lt;0$. $-1$ noktasında yerel maksimum $2$, $1$ noktasında yerel minimum $-2$'dir."
    },
    "<p><strong>Ekstremuma karar verme:</strong> $f'$ işaret değiştirip $+$'dan $-$'ye geçiyorsa noktada <strong>yerel maksimum</strong> vardır; $-$'den $+$'ya geçiş <strong>yerel minimum</strong> demektir.\n       İkinci türev de aynı işi görür: $f'(x_0)=0$ ve $f''(x_0)&lt;0$ maksimum, $f''(x_0)&gt;0$ minimum verir.</p>",
    "<p><strong>Kapalı aralıkta mutlak ekstremumlar</strong> $\\langle a; b\\rangle$: aralıktaki kritik noktalarda ve $a$, $b$ uç noktalarındaki değerleri karşılaştırırız.\n       <strong>Optimizasyon problemlerini</strong> de böyle çözeriz: büyüklüğü tek değişkenli bir fonksiyon olarak ifade eder ve en büyük ya da en küçük değerini ararız.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-6x^2+9x+1$ fonksiyonunun yerel ekstremumlarını bul.",
     "steps": [
      "$f'(x)=3x^2-12x+9=3(x-1)(x-3)$, kritik noktalar $1$ ve $3$'tür.",
      "$(-\\infty; 1)$ aralığında $f'&gt;0$, $(1; 3)$ aralığında $f'&lt;0$, $(3; \\infty)$ aralığında $f'&gt;0$'dır.",
      "$1$ noktasında yerel maksimum $f(1)=5$, $3$ noktasında yerel minimum $f(3)=1$'dir."
     ]
    },
    {
     "task": "$40\\,\\text{cm}$ uzunluğundaki bir telden alanı en büyük olan bir dikdörtgen bükmek istiyoruz. Dikdörtgenin boyutları nedir?",
     "steps": [
      "Kenarlar $x$ ve $20-x$, $x\\in(0; 20)$ için alan $S(x)=x(20-x)=20x-x^2$'dir.",
      "$x=10$ için $S'(x)=20-2x=0$; $S''(x)=-2&lt;0$, yani bu bir maksimumdur.",
      "<strong>En büyük alan $10\\times 10\\,\\text{cm}$'lik karededir, $S=100\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "s4-priebeh": {
   "title": "Fonksiyonun incelenmesi ve grafiği",
   "summary": "Tanım kümesi, teklik-çiftlik, asimptotlar, ekstremumlar, bükeylik ve dönüm noktaları.",
   "theory": [
    "<p><strong>Fonksiyonun incelenmesini</strong> adım adım yaparız:</p>\n       <ol><li>tanım kümesi $D(f)$, gerekirse çiftlik ($f(-x)=f(x)$) ya da teklik ($f(-x)=-f(x)$) ve periyodiklik,</li>\n       <li>grafiğin eksenlerle kesişim noktaları ve fonksiyonun işareti,</li>\n       <li>$D(f)$'nin uç noktalarındaki limitler ve <strong>asimptotlar</strong>,</li>\n       <li>$f'$: monotonluk aralıkları ve yerel ekstremumlar,</li>\n       <li>$f''$: fonksiyonun <strong>konveks</strong> (yukarı bükey, $f''&gt;0$) ya da <strong>konkav</strong> (aşağı bükey, $f''&lt;0$) olduğu aralıklar ve bükeyliğin değiştiği <strong>dönüm noktaları</strong>,</li>\n       <li>grafiğin taslağı.</li></ol>",
    "<p><strong>Asimptotlar:</strong> $x\\to a^+$ ya da $x\\to a^-$ için $f(x)$, $\\pm\\infty$'a yaklaşıyorsa $x=a$ doğrusu düşey asimptottur (genellikle paydanın sıfır yeri).\n       $k=\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}$ ve $q=\\lim_{x\\to\\pm\\infty}(f(x)-kx)$ ise $y=kx+q$ doğrusu eğik asimptottur; $k=0$ için $y=q$ yatay asimptotudur.\n       Doğrusal rasyonel fonksiyon $f(x)=\\frac{ax+b}{cx+d}$'nin asimptotları $x=-\\frac{d}{c}$ ve $y=\\frac{a}{c}$'dir.</p>",
    {
     "fig": "s4-asymptoty",
     "caption": "$x=1$ ve $y=2$ asimptotlarıyla $f(x)=\\frac{2x+1}{x-1}=2+\\frac{3}{x-1}$ grafiği. Yeşil noktalar eksenlerle kesişim noktalarıdır: $[-\\frac{1}{2}; 0]$ ve $[0; -1]$. Fonksiyon hem $(-\\infty; 1)$ hem de $(1; \\infty)$ aralığında azalandır."
    },
    "<p>Konveks fonksiyon her teğetinin üstünde kalır (grafik “su tutar”), konkav fonksiyon ise altında.\n       Üçüncü dereceden $ax^3+bx^2+cx+d$ polinomunun her zaman tam olarak bir dönüm noktası vardır, o da $x=-\\frac{b}{3a}$'dadır.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-3x^2+4$ fonksiyonunun dönüm noktasını bul ve nerede konveks olduğunu belirle.",
     "steps": [
      "$f'(x)=3x^2-6x$, $f''(x)=6x-6$.",
      "$x=1$ için $f''(x)=0$; $x&lt;1$ için $f''&lt;0$, $x&gt;1$ için $f''&gt;0$'dır.",
      "Dönüm noktası $[1; f(1)]=[1; 2]$'dir; fonksiyon $(1; \\infty)$ aralığında konveks, $(-\\infty; 1)$ aralığında konkavdır."
     ]
    },
    {
     "task": "$f(x)=\\frac{x}{x^2+1}$ fonksiyonunun tek mi çift mi olduğunu incele ve yatay asimptotunu bul.",
     "steps": [
      "$D(f)=\\mathbb{R}$ sıfıra göre simetriktir ve $f(-x)=\\frac{-x}{x^2+1}=-f(x)$; fonksiyon tektir (grafik başlangıç noktasına göre simetriktir).",
      "Payın derecesi paydanınkinden küçüktür, bu yüzden $\\lim_{x\\to\\pm\\infty}f(x)=0$.",
      "Yatay asimptot $y=0$'dır ($x$ ekseni)."
     ]
    }
   ]
  },
  "s4-plocha": {
   "title": "Bölgenin alanı ve integralde değişken değiştirme",
   "summary": "İki eğri arasındaki bölgenin alanı, temel fonksiyonların integralleri ve doğrusal değişken değiştirme.",
   "theory": [
    "<p>$\\langle a; b\\rangle$ aralığında $f(x)\\le g(x)$ ise grafikler arasındaki bölgenin alanı $S=\\int_a^b \\big(g(x)-f(x)\\big)\\,dx$'tir: “üstteki eksi alttaki”.\n       $a$, $b$ sınırları genellikle grafiklerin kesişim noktalarının x koordinatlarıdır; bunları $f(x)=g(x)$ denkleminden buluruz.\n       Fonksiyon $x$ ekseninin altındaysa belirli integrali negatiftir; bu yüzden alan onun mutlak değeridir.</p>",
    {
     "fig": "s4-medzi-krivkami",
     "caption": "$y=2x$ doğrusu ile $y=x^2$ parabolü $x=0$ ve $x=2$ noktalarında kesişir. Bölgenin alanı $\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=\\frac{4}{3}$'tür."
    },
    "<p><strong>Temel fonksiyonların integralleri:</strong> $\\int \\mathrm{e}^x\\,dx=\\mathrm{e}^x+c$, $\\int \\frac{1}{x}\\,dx=\\ln|x|+c$, $\\int \\sin x\\,dx=-\\cos x+c$, $\\int \\cos x\\,dx=\\sin x+c$.</p>",
    "<p><strong>Doğrusal değişken değiştirme:</strong> $F$, $f$'nin bir ilkel fonksiyonuysa $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)+c$'dir.\n       Örneğin $\\int (2x+1)^3\\,dx=\\frac{1}{2}\\cdot\\frac{(2x+1)^4}{4}+c$ ya da $\\int \\cos 3x\\,dx=\\frac{1}{3}\\sin 3x+c$. Doğruluğu her zaman türev alarak kontrol ederiz.</p>"
   ],
   "examples": [
    {
     "task": "$y=4-x^2$ parabolü ve $x$ ekseniyle sınırlanan bölgenin alanını hesapla.",
     "steps": [
      "Eksenle kesişim noktaları: $4-x^2=0$, yani $x=\\pm 2$. Bunların arasında parabol eksenin üstündedir.",
      "$S=\\int_{-2}^{2}(4-x^2)\\,dx=\\left[4x-\\frac{x^3}{3}\\right]_{-2}^{2}=\\left(8-\\frac{8}{3}\\right)-\\left(-8+\\frac{8}{3}\\right)$.",
      "<strong>$S=16-\\frac{16}{3}=\\frac{32}{3}$</strong>"
     ]
    },
    {
     "task": "$\\int_0^{1} (2x+1)^2\\,dx$ integralini değişken değiştirme yardımıyla hesapla.",
     "steps": [
      "İlkel fonksiyon: $F(x)=\\frac{1}{2}\\cdot\\frac{(2x+1)^3}{3}=\\frac{(2x+1)^3}{6}$.",
      "$F(1)-F(0)=\\frac{27}{6}-\\frac{1}{6}=\\frac{26}{6}=\\frac{13}{3}$.",
      "Parantezleri açarak kontrol: $\\int_0^1(4x^2+4x+1)\\,dx=\\frac{4}{3}+2+1=\\frac{13}{3}$ ✓"
     ]
    }
   ]
  },
  "s4-zlozene-inverzne": {
   "title": "Bileşke ve ters fonksiyonlar",
   "summary": "Fonksiyonların bileşkesi, bire bir fonksiyon, ters fonksiyonun hesaplanması ve grafiklerin y = x doğrusuna göre simetrisi.",
   "theory": [
    "<p><strong>Bileşke fonksiyon</strong> $f\\circ g$, $(f\\circ g)(x)=f(g(x))$ kuralıyla verilir: önce $g$'yi (iç fonksiyon), sonra sonuca $f$'yi (dış fonksiyon) uygularız.\n       Sıra önemlidir; genel olarak $f\\circ g\\neq g\\circ f$. Örneğin $f(x)=x^2$, $g(x)=x+1$ için $f(g(x))=(x+1)^2$, ama $g(f(x))=x^2+1$'dir.</p>",
    "<p>Farklı $x$ değerlerine farklı değerler karşılık getiren fonksiyon <strong>bire birdir</strong> (her yatay doğru grafiği en fazla bir kez keser). Yalnızca bire bir fonksiyonun\n       $f^{-1}(y)=x \\Leftrightarrow f(x)=y$ koşulunu sağlayan bir <strong>ters fonksiyonu</strong> $f^{-1}$ vardır. Bu durumda $D(f^{-1})=H(f)$ ve $H(f^{-1})=D(f)$'dir.</p>",
    "<p>$f^{-1}$'i <strong>hesaplama yöntemi</strong>: $y=f(x)$ denkleminde $x$ ile $y$'nin yerini değiştirir ve $y$'yi yalnız bırakırız. $f(x)=2x-6$ için: $x=2y-6$, yani $f^{-1}(x)=\\frac{x+6}{2}$.\n       $f$ ve $f^{-1}$ grafikleri $y=x$ doğrusuna göre simetriktir. $a^x$ ve $\\log_a x$ da birbirinin tersidir, bu yüzden $a^{\\log_a x}=x$ ve $\\log_a a^x=x$.</p>",
    {
     "fig": "s4-inverzna",
     "caption": "$y=a^x$ grafiği (mavi) ve ters fonksiyonu $y=\\log_a x$'in grafiği (yeşil). Bir grafiğin her $[u; v]$ noktasının diğer grafikte bir $[v; u]$ görüntüsü vardır."
    }
   ],
   "examples": [
    {
     "task": "$f(x)=x^2-1$ ve $g(x)=3x+2$ veriliyor. $(f\\circ g)(1)$ ve $(g\\circ f)(1)$ değerlerini hesapla.",
     "steps": [
      "$(f\\circ g)(1)=f(g(1))=f(5)=25-1=24$.",
      "$(g\\circ f)(1)=g(f(1))=g(0)=2$.",
      "Sonuçlar farklıdır; fonksiyonların bileşkesi değişmeli değildir."
     ]
    },
    {
     "task": "$x\\neq 2$ olmak üzere $f(x)=\\frac{x+1}{x-2}$ fonksiyonunun tersini bul.",
     "steps": [
      "Değişkenlerin yerini değiştiririz: $x=\\frac{y+1}{y-2}$.",
      "$x(y-2)=y+1 \\Rightarrow xy-y=2x+1 \\Rightarrow y(x-1)=2x+1$.",
      "<strong>$f^{-1}(x)=\\frac{2x+1}{x-1}$, $x\\neq 1$</strong> ($f$ fonksiyonu $1$ değerini almaz)."
     ]
    }
   ]
  },
  "s4-exp-log-rovnice": {
   "title": "Üstel ve logaritmik denklemler",
   "summary": "Değişken değiştirme, farklı tabanlı denklemler, logaritma alma ve çözülebilirlik koşulları.",
   "theory": [
    "<p><strong>Üstel denklemlerin temel türleri:</strong></p>\n       <ul><li>aynı taban: $a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)$ ($a&gt;0$, $a\\neq 1$ için),</li>\n       <li><strong>değişken değiştirme</strong>: $4^x-6\\cdot 2^x+8=0$ denklemini $t=2^x&gt;0$ ile $t^2-6t+8=0$ olarak yeniden yazarız,</li>\n       <li><strong>farklı tabanlar</strong>: iki tarafın logaritmasını alırız, örneğin $3^x=5 \\Rightarrow x=\\frac{\\ln 5}{\\ln 3}$; $c\\cdot a^x=d\\cdot b^x$ denklemini $\\left(\\frac{a}{b}\\right)^x=\\frac{d}{c}$ biçimine getiririz.</li></ul>",
    "<p><strong>Logaritmik denklemler:</strong> önce koşulları belirleriz (logaritmanın argümanı pozitif olmalıdır), sonra şu kuralları kullanırız:\n       $\\log_a u+\\log_a v=\\log_a(uv)$, $\\log_a u-\\log_a v=\\log_a\\frac{u}{v}$, $k\\log_a u=\\log_a u^k$; $\\log_a u=c$ eşitliğinden de $u=a^c$ elde ederiz.\n       Her çözümü yerine koyarak ya da koşullarla karşılaştırarak kontrol ederiz; dönüşümler sırasında yabancı kökler ortaya çıkabilir.</p>",
    "<p>$\\log_a x$ ifadesini farklı kuvvetlerde içeren bir denklem $t=\\log_a x$ değişken değiştirmesiyle çözülür: $(\\log x)^2-3\\log x+2=0$ denkleminden $t\\in\\{1; 2\\}$, yani $x\\in\\{10; 100\\}$ elde ederiz.\n       Dikkat: $(\\log x)^2$, $\\log x^2=2\\log x$ ile aynı şey değildir.</p>"
   ],
   "examples": [
    {
     "task": "$9^x-4\\cdot 3^x+3=0$ denklemini çöz.",
     "steps": [
      "$9^x=(3^x)^2$, $t=3^x&gt;0$ değişken değiştirmesi: $t^2-4t+3=0$, yani $t_1=1$, $t_2=3$.",
      "$3^x=1 \\Rightarrow x=0$; $3^x=3 \\Rightarrow x=1$.",
      "<strong>$K=\\{0; 1\\}$</strong>"
     ]
    },
    {
     "task": "$\\log_3(x+1)+\\log_3(x-1)=1$ denklemini çöz.",
     "steps": [
      "Koşullar: $x+1&gt;0$ ve $x-1&gt;0$, yani $x&gt;1$.",
      "$\\log_3\\big((x+1)(x-1)\\big)=1 \\Rightarrow x^2-1=3 \\Rightarrow x=\\pm 2$.",
      "Koşulu yalnızca $x=2$ sağlar, $-2$ kökünü atarız.",
      "<strong>$K=\\{2\\}$</strong>"
     ]
    }
   ]
  },
  "s4-gonio-rovnice": {
   "title": "Trigonometrik denklemler",
   "summary": "Sinüs ya da kosinüse göre ikinci dereceden denklemler, formüllerin kullanımı ve genel çözüm.",
   "theory": [
    "<p>$\\sin x=a$, $\\cos x=a$ <strong>temel denklemlerinin</strong> yalnızca $a\\in\\langle -1; 1\\rangle$ için çözümü vardır ve her $2\\pi$ periyodunda genellikle iki çözüm bulunur.\n       Örneğin $\\sin x=\\frac{1}{2}$ denkleminin $\\langle 0; 2\\pi)$ aralığındaki çözümleri $\\frac{\\pi}{6}$ ve $\\frac{5\\pi}{6}$'dır; genel olarak $k\\in\\mathbb{Z}$ olmak üzere $x=\\frac{\\pi}{6}+2k\\pi$ ya da $x=\\frac{5\\pi}{6}+2k\\pi$.\n       $\\tan x=a$ denkleminin her $a$ için çözümü vardır ve periyodu $\\pi$'dir: $x=x_0+k\\pi$.</p>",
    "<p>$\\sin x$ ya da $\\cos x$'e göre <strong>ikinci dereceden denklemleri</strong> değişken değiştirmeyle çözeriz: $t=\\sin x$ ile $2\\sin^2 x-3\\sin x+1=0$ denklemi $2t^2-3t+1=0$ olur, yani $t\\in\\{\\frac{1}{2}; 1\\}$.\n       $\\langle -1; 1\\rangle$ dışındaki kökleri atarız.</p>",
    "<p><strong>Kullanışlı formüller:</strong> $\\sin^2 x+\\cos^2 x=1$ (denklemi tek bir fonksiyona dönüştürür), $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x=1-2\\sin^2 x$.\n       Ortak çarpanı <strong>parantez dışına alırız</strong>, asla ona bölmeyiz; yoksa onun sıfır olduğu çözümleri kaybederiz.</p>\n       <table class=\"tbl tbl-auto\"><tr><th>$x$</th><th>$0^\\circ$</th><th>$30^\\circ$</th><th>$45^\\circ$</th><th>$60^\\circ$</th><th>$90^\\circ$</th></tr>\n       <tr><td>$\\sin x$</td><td>$0$</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$1$</td></tr>\n       <tr><td>$\\cos x$</td><td>$1$</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>$0$</td></tr></table>"
   ],
   "examples": [
    {
     "task": "$x\\in\\langle 0; 2\\pi)$ için $2\\cos^2 x+3\\sin x-3=0$ denklemini çöz.",
     "steps": [
      "$\\cos^2 x=1-\\sin^2 x$: $2-2\\sin^2 x+3\\sin x-3=0$, yani $2\\sin^2 x-3\\sin x+1=0$.",
      "$t=\\sin x$ değişken değiştirmesi: $2t^2-3t+1=0$, $t_1=1$, $t_2=\\frac{1}{2}$.",
      "$\\sin x=1 \\Rightarrow x=\\frac{\\pi}{2}$; $\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}$ ya da $x=\\frac{5\\pi}{6}$.",
      "<strong>$K=\\left\\{\\frac{\\pi}{6}; \\frac{\\pi}{2}; \\frac{5\\pi}{6}\\right\\}$</strong>"
     ]
    },
    {
     "task": "$\\mathbb{R}$'de $\\sin 2x=\\cos x$ denklemini çöz.",
     "steps": [
      "$2\\sin x\\cos x-\\cos x=0 \\Rightarrow \\cos x\\,(2\\sin x-1)=0$.",
      "$\\cos x=0 \\Rightarrow x=\\frac{\\pi}{2}+k\\pi$.",
      "$\\sin x=\\frac{1}{2} \\Rightarrow x=\\frac{\\pi}{6}+2k\\pi$ ya da $x=\\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$."
     ]
    }
   ]
  },
  "s4-sustavy": {
   "title": "Denklem ve eşitsizlik sistemleri",
   "summary": "Doğrusal olmayan sistemler, eğrilerin kesişim noktaları ve bir ve iki değişkenli eşitsizlik sistemleri.",
   "theory": [
    "<p><strong>Doğrusal olmayan bir sistemi</strong> çoğunlukla <strong>yerine koyma yöntemiyle</strong> çözeriz: daha basit (doğrusal) denklemden bir bilinmeyeni yalnız bırakır ve diğer denklemde yerine koyarız.\n       Çözümler $[x; y]$ sıralı ikilileridir; sayıları iki denklemin grafiklerinin kesişim noktalarının sayısına eşittir. $x+y=s$, $xy=p$ sistemi Vieta formüllerine göre $t^2-st+p=0$ denklemine götürür.</p>",
    "<p><strong>Bir bilinmeyenli eşitsizlik sistemi:</strong> her eşitsizliği ayrı ayrı çözeriz; sonuç, çözüm kümelerinin <strong>kesişimidir</strong>.\n       Negatif bir sayıyla çarparken ya da bölerken eşitsizlik yön değiştirir.</p>",
    "<p><strong>İki bilinmeyenli doğrusal eşitsizlik sistemi</strong> düzlemin bir bölgesini tanımlar: her $y\\le kx+q$ eşitsizliği, $y=kx+q$ doğrusunun altındaki yarı düzlemdir (doğru dahil).\n       Sistemin çözümü yarı düzlemlerin kesişimidir; çoğu zaman bir çokgen.</p>",
    {
     "fig": "s4-oblast",
     "caption": "$y\\ge 0$, $y\\le x+2$, $y\\le -x+4$ sistemi köşeleri $[-2; 0]$, $[4; 0]$ ve $[1; 3]$ olan bir üçgeni tanımlar. Alanı $\\frac{6\\cdot 3}{2}=9$'dur."
    }
   ],
   "examples": [
    {
     "task": "$x+y=7$, $x\\cdot y=10$ sistemini çöz.",
     "steps": [
      "Birinci denklemden $y=7-x$, yerine koyarız: $x(7-x)=10 \\Rightarrow x^2-7x+10=0$.",
      "$x_1=2$, $x_2=5$, bunlara karşılık $y_1=5$, $y_2=2$.",
      "<strong>Çözümler: $[2; 5]$ ve $[5; 2]$</strong>"
     ]
    },
    {
     "task": "$\\mathbb{R}$'de $3x-2&gt;4$ ve $5-x\\ge -1$ eşitsizlik sistemini çöz.",
     "steps": [
      "$3x&gt;6 \\Rightarrow x&gt;2$.",
      "$-x\\ge -6 \\Rightarrow x\\le 6$ (negatif sayıya bölmek eşitsizliğin yönünü değiştirir).",
      "<strong>$K=(2; 6\\rangle$</strong>, içindeki tam sayılar $3, 4, 5, 6$'dır."
     ]
    }
   ]
  },
  "s4-parametre": {
   "title": "Parametreli denklemler ve sistemler",
   "summary": "Çözüm sayısının parametreye göre tartışılması, parametreli ikinci dereceden denklemler ve sistemler.",
   "theory": [
    "<p><strong>Parametre</strong>, denklemde sabit ama herhangi bir sayıyı temsil eden bir harftir. Denklemi tüm değerleri için aynı anda çözer\n       ve bir <strong>tartışma</strong> yaparız: parametrenin hangi değerleri için denklemin bir, birden fazla ya da hiç çözümü vardır.\n       Örneğin $px=3$ denkleminin $p\\neq 0$ için tek çözümü $x=\\frac{3}{p}$'dir, $p=0$ için çözümü yoktur.</p>",
    "<p>$a\\neq 0$ olan <strong>ikinci dereceden denklem</strong> $ax^2+bx+c=0$'ın $D&gt;0$ için iki farklı gerçek kökü, $D=0$ için bir çift katlı kökü vardır, $D&lt;0$ için gerçek kökü yoktur.\n       Bir kök biliniyorsa onu yerine koyarak parametre için bir denklem elde ederiz; diğer kökü Vieta formülleri $x_1+x_2=-\\frac{b}{a}$, $x_1x_2=\\frac{c}{a}$ ile kolayca buluruz.\n       $x^2$'nin katsayısı parametreyse $a=0$ durumunu (denklem doğrusaldır) ayrıca incelemeliyiz.</p>",
    "<p><strong>İki doğrusal denklemden oluşan sistemin</strong> $a_1x+b_1y=c_1$, $a_2x+b_2y=c_2$, $a_1b_2-a_2b_1\\neq 0$ olduğunda tam olarak bir çözümü vardır (doğrular kesişir).\n       $a_1b_2-a_2b_1=0$ ise doğrular paraleldir: ya farklıdır (çözüm yok) ya da çakışıktır (sonsuz çözüm).</p>"
   ],
   "examples": [
    {
     "task": "$p$ parametresinin hangi değerleri için $x^2-4x+p=0$ denkleminin iki farklı gerçek kökü vardır?",
     "steps": [
      "$D=16-4p$.",
      "$D&gt;0 \\Leftrightarrow 16-4p&gt;0 \\Leftrightarrow p&lt;4$.",
      "<strong>$p\\in(-\\infty; 4)$ için</strong>; $p=4$ için çift katlı kökü $2$'dir, $p&gt;4$ için gerçek kökü yoktur."
     ]
    },
    {
     "task": "$m$'nin hangi değeri için $mx+2y=4$, $2x+my=-4$ sisteminin çözümü yoktur?",
     "steps": [
      "Determinant $m\\cdot m-2\\cdot 2=m^2-4=0$, $m=\\pm 2$ için; diğer durumlarda sistemin tek çözümü vardır.",
      "$m=2$: $2x+2y=4$ ve $2x+2y=-4$ paralel ve farklı doğrulardır; çözüm yok.",
      "$m=-2$: $-2x+2y=4$ ve $2x-2y=-4$ aynı doğrudur; sonsuz çözüm.",
      "<strong>Sistemin $m=2$ için çözümü yoktur.</strong>"
     ]
    }
   ]
  },
  "s4-priamka-kruznica": {
   "title": "Analitik düzlemde doğru ve çember",
   "summary": "Doğru ile çemberin birbirine göre konumu, kesişim noktaları ve çembere teğet.",
   "theory": [
    "<p>Merkezi $S[m; n]$ ve yarıçapı $r$ olan çemberin denklemi $(x-m)^2+(y-n)^2=r^2$'dir. Düzlemdeki bir doğrunun genel denklemi $ax+by+c=0$'dır;\n       burada $\\vec{n}=(a; b)$ normal vektörüdür. $S[m; n]$ noktasının doğruya uzaklığı $d=\\dfrac{|am+bn+c|}{\\sqrt{a^2+b^2}}$'dir.</p>",
    "<p><strong>Birbirine göre konum:</strong> $d&lt;r$ ise doğru bir <strong>kesendir</strong> (2 ortak nokta); $d=r$ ise <strong>teğettir</strong> (1 nokta); $d&gt;r$ ise çemberi <strong>kesmez</strong>.\n       Aynı sonucu cebirsel olarak da buluruz: doğruyu çemberin denkleminde yerine koyarak ikinci dereceden bir denklem elde ederiz ve diskriminantı kesişim noktalarının sayısını belirler.</p>",
    {
     "fig": "s4-priamka-kruznica",
     "caption": "$x^2+y^2=9$ çemberi ve $y=-0{,}75x+q$ doğrusu. $q$'yu kaydır: doğru ancak ve ancak $q=\\pm 3{,}75$ için, yani merkezin uzaklığı yarıçapa eşit olduğunda teğettir."
    },
    "<p>Çemberin $T$ <strong>noktasındaki teğet</strong>, $ST$ yarıçapına diktir; bu yüzden $\\vec{ST}$ vektörü onun normal vektörüdür.\n       $x^2+y^2=r^2$ çemberi ve üzerindeki $T[x_0; y_0]$ noktası için teğetin denklemi $x_0x+y_0y=r^2$'dir.</p>"
   ],
   "examples": [
    {
     "task": "$x^2+y^2=25$ çemberi ile $x-y+1=0$ doğrusunun kesişim noktalarını bul.",
     "steps": [
      "Doğrunun denkleminden $y=x+1$, yerine koyarız: $x^2+(x+1)^2=25 \\Rightarrow 2x^2+2x-24=0 \\Rightarrow x^2+x-12=0$.",
      "$x_1=3$, $x_2=-4$, bunlara karşılık $y_1=4$, $y_2=-3$.",
      "<strong>Kesişim noktaları: $[3; 4]$ ve $[-4; -3]$</strong>"
     ]
    },
    {
     "task": "$(x-1)^2+(y+2)^2=25$ çemberine $T[4; 2]$ noktasındaki teğetin denklemini yaz.",
     "steps": [
      "Merkez $S[1; -2]$, $\\vec{ST}=(3; 4)$ teğetin normal vektörüdür: $3x+4y+c=0$.",
      "$T$'yi yerine koyarız: $12+8+c=0$, yani $c=-20$.",
      "<strong>Teğet: $3x+4y-20=0$</strong>"
     ]
    }
   ]
  },
  "s4-polohy": {
   "title": "Noktaların, doğruların ve düzlemlerin birbirine göre konumu",
   "summary": "Paralel, kesişen ve aykırı doğrular, doğru ile düzlemin ve iki düzlemin konumu ve analitik ifadeleri.",
   "theory": [
    "<p><strong>Uzayda iki doğru</strong> ya <strong>çakışıktır</strong>, ya <strong>paraleldir</strong> (aynı düzlemdedir ve ortak noktaları yoktur),\n       ya <strong>kesişir</strong> (tam olarak bir ortak noktaları vardır) ya da <strong>aykırıdır</strong>: ortak noktaları yoktur ve aynı düzlemde bulunmazlar.\n       Düzlemde aykırı doğrular yoktur, uzayda ise sık görülür.</p>",
    {
     "fig": "s4-kocka",
     "caption": "$ABCDEFGH$ küpü. $AB$ (mavi) ve $CG$ (yeşil) doğruları aykırıdır, $AB$ ve $EG$ (turuncu) doğruları da öyle. $CG$ ve $EG$ doğruları kesişir, $G$ noktasında kesişirler."
    },
    "<p><strong>Doğru ve düzlem:</strong> doğru ya düzlemin içindedir, ya düzleme paraleldir (ortak noktaları yoktur) ya da düzlemi keser (bir ortak nokta, yani kesişim noktası).\n       Doğru, düzlemdeki bir doğruya paralelse düzleme paraleldir. <strong>İki düzlem</strong> çakışık, paralel ve farklı ya da kesişen düzlemlerdir; bu son durumda bir doğru boyunca kesişirler.</p>",
    "<p><strong>Analitik olarak:</strong> doğrunun parametrik denklemi $X=A+t\\vec{u}$, $t\\in\\mathbb{R}$; düzlemin genel denklemi ise normal vektörü $\\vec{n}=(a; b; c)$ olan $ax+by+cz+d=0$'dır.\n       Doğrultman vektörleri birbirinin katı olan doğrular paralel ya da çakışıktır. $\\vec{u}\\cdot\\vec{n}=0$ ise doğru düzleme paraleldir ya da düzlemin içindedir.\n       Ayrıtı $1$ olan küpte hesap yaparken $A[0; 0; 0]$, $B[1; 0; 0]$, $D[0; 1; 0]$, $E[0; 0; 1]$ seçeriz.</p>"
   ],
   "examples": [
    {
     "task": "$ABCDEFGH$ küpünde $BG$ ve $AH$ doğrularının birbirine göre konumunu belirle.",
     "steps": [
      "$\\vec{BG}=G-B=(0; 1; 1)$ ve $\\vec{AH}=H-A=(0; 1; 1)$; doğrultman vektörleri aynıdır.",
      "$A$ noktası $BG$ doğrusu üzerinde değildir, yani doğrular çakışık değildir.",
      "<strong>$BG$ ve $AH$ doğruları paraleldir</strong> ($ABGH$ düzleminde bulunurlar)."
     ]
    },
    {
     "task": "$Q[5; 1; -2]$ noktasının $p: X=[1; 3; 0]+t\\,(2; -1; -1)$ doğrusu üzerinde olup olmadığını belirle.",
     "steps": [
      "Birinci koordinattan: $1+2t=5$, yani $t=2$.",
      "$t=2$ için: $y=3-2=1$ ✓, $z=0-2=-2$ ✓.",
      "<strong>$Q$ noktası doğru üzerindedir</strong> ($t=2$ parametresi)."
     ]
    }
   ]
  },
  "s4-uhly-vzdialenosti": {
   "title": "Uzayda açı ve uzaklık",
   "summary": "İki nokta arası uzaklık, noktanın doğruya ve düzleme uzaklığı, doğrular arasındaki açı ve doğru ile düzlem arasındaki açı; özellikle küpte.",
   "theory": [
    "<p><strong>Uzaklıklar:</strong> iki nokta arasındaki uzaklık $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2+(b_3-a_3)^2}$'dir. Bir noktanın doğruya uzaklığı, doğruya inilen dikmenin uzunluğudur;\n       $P$ noktasının $ax+by+cz+d=0$ düzlemine uzaklığı $\\dfrac{|ap_1+bp_2+cp_3+d|}{\\sqrt{a^2+b^2+c^2}}$'dir.\n       Ayrıtı $a$ olan küpte: yüz köşegeni $a\\sqrt2$, cisim köşegeni $a\\sqrt3$.</p>",
    "<p><strong>İki doğru arasındaki açı</strong> (aykırı doğrular için de), doğrultman vektörleri arasındaki açıdır ve $\\langle 0^\\circ; 90^\\circ\\rangle$ aralığından alınır:\n       $\\cos\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}|\\,|\\vec{v}|}$. <strong>Doğru ile düzlem arasındaki açı</strong>, doğru ile onun düzlem üzerindeki dik izdüşümü arasındaki açıdır;\n       $\\vec{n}$ normal vektörüyle $\\sin\\varphi=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}$ geçerlidir.</p>",
    {
     "fig": "s4-kocka-uhol",
     "caption": "$AG$ cisim köşegeninin taban düzlemiyle yaptığı açı, $AG$ ile izdüşümü $AC$ arasındaki açıdır. $ACG$ dik üçgeninden: $\\tan\\varphi=\\frac{a}{a\\sqrt2}$, yani $\\varphi\\approx 35{,}26^\\circ$."
    },
    "<p><strong>Vektörel çarpım</strong> $\\vec{u}\\times\\vec{v}=(u_2v_3-u_3v_2;\\ u_3v_1-u_1v_3;\\ u_1v_2-u_2v_1)$ her iki vektöre de diktir ve uzunluğu, bu vektörlerin oluşturduğu paralelkenarın alanıdır.\n       Bu yüzden $P$ noktasının $X=Q+t\\vec{u}$ doğrusuna uzaklığı $\\dfrac{|\\vec{QP}\\times\\vec{u}|}{|\\vec{u}|}$'dir ve $QRS$ düzleminin normal vektörü $\\vec{QR}\\times\\vec{QS}$'dir.</p>"
   ],
   "examples": [
    {
     "task": "$ABCDEFGH$ küpünün ayrıtı $a=6\\,\\text{cm}$'dir. $A$ köşesinin $GH$ ayrıtının orta noktası $K$'ye uzaklığını hesapla.",
     "steps": [
      "$A[0; 0; 0]$, $G[6; 6; 6]$, $H[0; 6; 6]$, yani $K[3; 6; 6]$.",
      "$|AK|=\\sqrt{3^2+6^2+6^2}=\\sqrt{81}=9$.",
      "<strong>$|AK|=9\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "Ayrıtı $a$ olan küpte $A$ köşesinin $BDE$ düzlemine uzaklığını hesapla.",
     "steps": [
      "$B[a; 0; 0]$, $D[0; a; 0]$, $E[0; 0; a]$ noktaları $x+y+z-a=0$ düzlemindedir.",
      "$d=\\dfrac{|0+0+0-a|}{\\sqrt{1+1+1}}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$.",
      "Bu, $AG$ cisim köşegeninin üçte biridir."
     ]
    }
   ]
  },
  "s4-telesa": {
   "title": "Prizma, piramit, silindir, koni ve küre",
   "summary": "Cisimlerin özellikleri, cisimlerin içindeki dik üçgenler, yüzey alanı ve hacim, kürenin kesiti.",
   "theory": [
    "<p><strong>Prizmanın</strong> ve <strong>silindirin</strong> iki eş ve paralel tabanı vardır: $V=S_p\\cdot v$, $S=2S_p+S_{pl}$. Silindir: $V=\\pi r^2v$, $S=2\\pi r^2+2\\pi rv$.\n       <strong>Piramidin</strong> ve <strong>koninin</strong> bir tabanı ve bir tepe noktası vardır: $V=\\frac{1}{3}S_p\\cdot v$. Ana doğrusu $s$ olan koni: $V=\\frac{1}{3}\\pi r^2 v$, $S=\\pi r^2+\\pi rs$, burada $s^2=r^2+v^2$.\n       <strong>Küre</strong>: $V=\\frac{4}{3}\\pi r^3$, $S=4\\pi r^2$.</p>",
    {
     "fig": "s4-ihlan",
     "caption": "Düzgün kare piramit: $v$ yüksekliği, $v_s$ yan yüz yüksekliği ve ayrıtın yarısı $\\frac{a}{2}$ bir dik üçgen oluşturur: $v_s^2=v^2+\\left(\\frac{a}{2}\\right)^2$. Yanal ayrıt $h$ için $h^2=v_s^2+\\left(\\frac{a}{2}\\right)^2$ geçerlidir."
    },
    "<p>Taban ayrıtı $a$ olan <strong>düzgün kare piramitte</strong> $S=a^2+4\\cdot\\frac{a\\cdot v_s}{2}=a^2+2av_s$ ve $V=\\frac{1}{3}a^2v$'dir.\n       Çoğu problemin anahtarı doğru dik üçgendir; örneğin yükseklik, taban köşegeninin yarısı ve yanal ayrıt: $h^2=v^2+\\left(\\frac{a\\sqrt2}{2}\\right)^2$.</p>",
    "<p>Bir kürenin, merkezden $d$ uzaklıktaki bir düzlemle <strong>kesiti</strong>, yarıçapı $\\rho=\\sqrt{r^2-d^2}$ olan bir dairedir. <strong>Düzgün üçgen prizmanın</strong> tabanı\n       alanı $\\frac{\\sqrt3}{4}a^2$ olan bir eşkenar üçgendir.</p>"
   ],
   "examples": [
    {
     "task": "Düzgün bir kare piramidin taban ayrıtı $a=10\\,\\text{cm}$ ve yüksekliği $v=12\\,\\text{cm}$'dir. Yüzey alanını ve hacmini hesapla.",
     "steps": [
      "Yan yüz yüksekliği: $v_s=\\sqrt{12^2+5^2}=\\sqrt{169}=13\\,\\text{cm}$.",
      "$S=a^2+2av_s=100+2\\cdot 10\\cdot 13=360\\,\\text{cm}^2$.",
      "$V=\\frac{1}{3}\\cdot 100\\cdot 12=400\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "Yarıçapı $r=10\\,\\text{cm}$ olan bir küre, merkezden $6\\,\\text{cm}$ uzaklıktaki bir düzlemle kesiliyor. Kesitin alanı nedir?",
     "steps": [
      "$\\rho=\\sqrt{10^2-6^2}=\\sqrt{64}=8\\,\\text{cm}$.",
      "$S=\\pi\\rho^2=64\\pi\\approx 201{,}06\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "s4-povrch-objem": {
   "title": "Bileşik cisimlerin yüzey alanı ve hacmi",
   "summary": "Kesik koni ve kesik piramit, bileşik cisimler, cisimlerde benzerlik ve uygulama problemleri.",
   "theory": [
    "<p>Taban yarıçapları $R$, $r$, yüksekliği $v$ ve ana doğrusu $s$ olan <strong>kesik koni</strong>: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$, yanal yüzey $S_{pl}=\\pi s(R+r)$,\n       yüzey alanı $S=\\pi R^2+\\pi r^2+\\pi s(R+r)$. Ana doğruyu yamuk biçimindeki eksen kesitinden buluruz: $s^2=v^2+(R-r)^2$.</p>",
    {
     "fig": "s4-zrezany",
     "caption": "Kesik koni, bir koninin üst kısmının tabana paralel bir düzlemle kesilip atılmasıyla oluşur. $v$ yüksekliği, $R-r$ yarıçap farkı ve $s$ ana doğrusu bir dik üçgen oluşturur."
    },
    "<p>Taban alanları $S_1$, $S_2$ ve yüksekliği $v$ olan <strong>kesik piramidin</strong> hacmi $V=\\frac{v}{3}\\left(S_1+\\sqrt{S_1S_2}+S_2\\right)$'dir;\n       ayrıtları $a_1$, $a_2$ olan düzgün kare kesik piramit için $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$'dir.\n       <strong>Bileşik bir cismi</strong> bilinen cisimlere ayırır ve hacimleri toplarız (boşluklarda çıkarırız). Yüzey alanında dikkat: temas yüzeyleri yüzey alanına dahil değildir.</p>",
    "<p>Benzerlik oranı $k$ olan <strong>benzer cisimlerin</strong> yüzey alanlarının oranı $k^2$, hacimlerinin oranı $k^3$'tür. Tüm boyutları iki katına çıkarırsak\n       yüzey alanı 4 kat, hacim 8 kat büyür. Eritip yeniden dökmede hacim korunur.</p>"
   ],
   "examples": [
    {
     "task": "Bir kova, yarıçapları $R=15\\,\\text{cm}$, $r=10\\,\\text{cm}$ ve yüksekliği $v=30\\,\\text{cm}$ olan kesik koni biçimindedir. Kovaya kaç litre sığar?",
     "steps": [
      "$V=\\frac{\\pi\\cdot 30}{3}(225+150+100)=10\\pi\\cdot 475=4750\\pi\\,\\text{cm}^3$.",
      "$V\\approx 14\\,923\\,\\text{cm}^3\\approx 14{,}9\\,\\ell$."
     ]
    },
    {
     "task": "Bir silo, yarıçapı $3\\,\\text{m}$ ve yüksekliği $8\\,\\text{m}$ olan bir silindir ile üstündeki aynı yarıçaplı bir yarım küreden oluşuyor. Silonun hacmini hesapla.",
     "steps": [
      "Silindir: $\\pi\\cdot 9\\cdot 8=72\\pi$.",
      "Yarım küre: $\\frac{1}{2}\\cdot\\frac{4}{3}\\pi\\cdot 27=18\\pi$.",
      "<strong>$V=90\\pi\\approx 282{,}74\\,\\text{m}^3$</strong>"
     ]
    }
   ]
  },
  "s4-statisticky-subor": {
   "title": "İstatistiksel veri kümesi, değişkenler, tablolar ve grafikler",
   "summary": "Veri kümesi ve değişken, mutlak ve göreli sıklık, sıklık dağılımı tablosu, grafikler ve okunması.",
   "theory": [
    "<p><strong>İstatistiksel veri kümesi</strong> (anakütle ya da örneklem), incelenen nesnelerin (istatistiksel birimlerin) kümesidir; sayıları $n$, <strong>kümenin büyüklüğüdür</strong>.\n       İncelenen özellik bir <strong>istatistiksel değişkendir</strong>: <strong>nitel</strong> (sözel; renk, marka, bölüm) ya da <strong>nicel</strong> (sayısal).\n       Nicel bir değişken yalnızca ayrık değerler alıyorsa <strong>kesikli</strong> (kardeş sayısı), bir aralıktaki herhangi bir değeri alabiliyorsa <strong>sürekli</strong>dir (boy, süre).</p>",
    "<p>Bir değerin <strong>mutlak sıklığı</strong> $n_i$, o değere sahip birimlerin sayısıdır; <strong>göreli sıklığı</strong> ise $f_i=\\frac{n_i}{n}$'dir (çoğu zaman yüzde olarak).\n       Tüm $n_i$'lerin toplamı $n$, tüm $f_i$'lerin toplamı $1$'dir. Verileri bir <strong>sıklık dağılımı tablosuna</strong> yazarız.</p>",
    {
     "fig": "s4-stlpcovy",
     "caption": "$28$ öğrencili bir sınıftaki notların sütun grafiği. Örneğin $2$ notunu $9$ öğrenci almıştır, göreli sıklık $\\frac{9}{28}\\approx 32{,}1\\,\\%$'dir."
    },
    "<p><strong>Grafikler:</strong> sütun grafiği (değerlerin sıklıkları), daire grafiği (bir değere ait dilimin merkez açısı $f_i\\cdot 360^\\circ$'dir), histogram (aralıklara bölünmüş sürekli değişken için)\n       ve çizgi grafiği (zaman içindeki değişim). <strong>Yorumlarken</strong> sıfırdan başlamayan eksene dikkat edin; küçük farklar o zaman çok büyük görünür.</p>"
   ],
   "examples": [
    {
     "task": "Bir tablo okula ulaşım şeklini gösteriyor: otobüs 12, araba 5, bisiklet 3, yürüyerek 10. Otobüs, daire grafiğinin ne kadarını (merkez açı) kaplar?",
     "steps": [
      "$n=12+5+3+10=30$.",
      "$f=\\frac{12}{30}=0{,}4=40\\,\\%$.",
      "Merkez açı: $0{,}4\\cdot 360^\\circ=144^\\circ$."
     ]
    },
    {
     "task": "Yukarıdaki sütun grafiğine göre sınıfın not ortalamasını hesapla.",
     "steps": [
      "$n=6+9+7+4+2=28$.",
      "Notların toplamı: $1\\cdot 6+2\\cdot 9+3\\cdot 7+4\\cdot 4+5\\cdot 2=6+18+21+16+10=71$.",
      "$\\bar{x}=\\frac{71}{28}\\approx 2{,}54$"
     ]
    }
   ]
  },
  "s4-charakteristiky": {
   "title": "Ortalama, medyan, mod ve varyans",
   "summary": "Merkezi eğilim ve yayılım ölçüleri: ortalama, medyan, mod, çeyrekler, varyans ve standart sapma.",
   "theory": [
    "<p><strong>Merkezi eğilim ölçüleri:</strong> aritmetik ortalama $\\bar{x}=\\frac{x_1+x_2+\\dots+x_n}{n}$ (tablodan ağırlıklı olarak: $\\bar{x}=\\frac{\\sum n_ix_i}{n}$),\n       <strong>medyan</strong>, yani sıralanmış verinin ortadaki değeri ($n$ çiftse ortadaki iki değerin ortalaması) ve <strong>mod</strong>, yani en sık görülen değer.\n       Medyan, ortalamanın aksine uç değerlerden (örneğin tek bir çok yüksek maaştan) etkilenmez.</p>",
    "<p><strong>Yayılım ölçüleri:</strong> açıklık $R=x_{\\max}-x_{\\min}$, <strong>varyans</strong> $s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$\n       (ortalamadan sapmaların karelerinin ortalaması, ayrıca $s^2=\\overline{x^2}-\\bar{x}^2$) ve verilerle aynı birime sahip olan <strong>standart sapma</strong> $s=\\sqrt{s^2}$.</p>",
    "<p><strong>Çeyrekler:</strong> alt çeyrek $Q_1$ verilerin alt yarısının medyanı, üst çeyrek $Q_3$ üst yarısının medyanıdır.\n       $Q_1$ ile $Q_3$ arasında verilerin ortadaki yarısı bulunur; $Q_3-Q_1$ farkı çeyrekler açıklığıdır. Beş sayıyı (min, $Q_1$, medyan, $Q_3$, maks) kutu grafiği gösterir.</p>",
    {
     "fig": "s4-krabica",
     "caption": "$2, 4, 5, 5, 6, 7, 7, 8, 9, 10, 14$ veri kümesinin kutu grafiği: minimum $2$, $Q_1=5$, medyan $7$, $Q_3=9$, maksimum $14$."
    }
   ],
   "examples": [
    {
     "task": "$3, 8, 5, 3, 6, 9, 3, 7$ veri kümesinin ortalamasını, medyanını ve modunu hesapla.",
     "steps": [
      "Sıralarız: $3, 3, 3, 5, 6, 7, 8, 9$; $n=8$.",
      "$\\bar{x}=\\frac{44}{8}=5{,}5$.",
      "Medyan $=\\frac{5+6}{2}=5{,}5$, mod $=3$ (üç kez geçer)."
     ]
    },
    {
     "task": "$4, 6, 7, 9, 9$ veri kümesinin varyansını ve standart sapmasını hesapla.",
     "steps": [
      "$\\bar{x}=\\frac{35}{5}=7$. Sapmalar: $-3, -1, 0, 2, 2$.",
      "$s^2=\\frac{9+1+0+4+4}{5}=\\frac{18}{5}=3{,}6$.",
      "$s=\\sqrt{3{,}6}\\approx 1{,}90$."
     ]
    }
   ]
  },
  "s4-kombinatorika": {
   "title": "Sayma problemleri",
   "summary": "Tipik problemlerde tekrarsız ve tekrarlı varyasyonlar, permütasyonlar ve kombinasyonlar.",
   "theory": [
    "<p><strong>Saymada çarpma kuralı:</strong> birinci şeyi $m$ yolla, her biri için ikinci şeyi $n$ yolla seçiyorsak $m\\cdot n$ tane ikili vardır.\n       <strong>Toplama kuralını</strong>, olasılıklar birbirini dışladığında kullanırız. Daha zor problemlerde durumları ayırır (örneğin son rakama göre) ve toplarız.</p>",
    "<table class=\"tbl\"><tr><th></th><th>tekrarsız</th><th>tekrarlı</th></tr>\n       <tr><td>$n$ öğenin $k$'lı varyasyonları (sıra önemli)</td><td>$V_k(n)=\\frac{n!}{(n-k)!}$</td><td>$V'_k(n)=n^k$</td></tr>\n       <tr><td>permütasyonlar (tümünün sıralanması)</td><td>$P(n)=n!$</td><td>$P'(k_1,\\dots,k_m)=\\frac{n!}{k_1!\\cdots k_m!}$</td></tr>\n       <tr><td>$n$ öğenin $k$'lı kombinasyonları (sıra önemsiz)</td><td>$C_k(n)=\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$</td><td>$C'_k(n)=\\binom{n+k-1}{k}$</td></tr></table>",
    "<p><strong>Nasıl karar veririz:</strong> sıra önemli mi (şifre, görev dağılımı, sayı)? Önemliyse varyasyon ya da permütasyon, önemli değilse (grup seçimi, aynı anda top çekme) kombinasyondur.\n       Çok basamaklı sayılarda ilk basamak sıfır olamaz. Kullanışlı: $\\binom{n}{k}=\\binom{n}{n-k}$, $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (örneğin $n$ kişi arasındaki tokalaşma sayısı).</p>"
   ],
   "examples": [
    {
     "task": "$0, 1, 2, 3, 4$ rakamlarıyla rakamları farklı kaç tane üç basamaklı sayı oluşturabiliriz?",
     "steps": [
      "İlk basamakta sıfır olamaz: $4$ olasılık.",
      "İkinci basamakta kalan $4$ rakam (sıfır da dahil), üçüncüde $3$.",
      "<strong>$4\\cdot 4\\cdot 3=48$ sayı</strong>"
     ]
    },
    {
     "task": "8 erkek ve 6 kız öğrenci arasından 2 erkek ve 2 kızdan oluşan dört kişilik bir kurul seçiyoruz. Kaç olasılık vardır?",
     "steps": [
      "Erkekleri $\\binom{8}{2}=28$ yolla, kızları $\\binom{6}{2}=15$ yolla seçeriz.",
      "Seçimler bağımsızdır, çarpma kuralını kullanırız.",
      "<strong>$28\\cdot 15=420$ olasılık</strong>"
     ]
    }
   ]
  },
  "s4-pravdepodobnost": {
   "title": "Olasılık ve bağımsız olaylar",
   "summary": "Klasik olasılık, tümleyen olay, olayların birleşimi ve bağımsız olayların olasılıklarının çarpımı.",
   "theory": [
    "<p><strong>Klasik tanım:</strong> bir deneyin $n$ eşit olasılıklı sonucu varsa ve $A$ olayı bunların $m$ tanesinde gerçekleşiyorsa $P(A)=\\frac{m}{n}$'dir.\n       $0\\le P(A)\\le 1$ geçerlidir. $m$ ve $n$ sayılarını çoğu zaman sayma yöntemleriyle buluruz; örneğin aynı anda $k$ top çekildiğinde sonuçlar $\\binom{n}{k}$ kombinasyondur.</p>",
    "<p><strong>Tümleyen olay</strong> $A'$ ($A$ olayı gerçekleşmez): $P(A')=1-P(A)$. Özellikle “en az bir kez” türündeki problemleri “hiç” tümleyen olayı üzerinden çözeriz.\n       <strong>Birleşim</strong>: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$; ayrık olaylar (aynı anda gerçekleşemeyen olaylar) için $P(A\\cap B)=0$'dır.</p>",
    "<p>Birinin sonucu diğerinin olasılığını değiştirmiyorsa $A$ ve $B$ olayları <strong>bağımsızdır</strong>; bu durumda $P(A\\cap B)=P(A)\\cdot P(B)$.\n       Tipik örnekler tekrarlanan atışlar, farklı nişancıların atışları ya da geri koyarak çekmedir. Olasılığı $p$ olan bir olayın $n$ bağımsız denemede en az bir kez gerçekleşme olasılığı $1-(1-p)^n$'dir.</p>"
   ],
   "examples": [
    {
     "task": "Bir torbada 5 beyaz ve 3 siyah top var. Aynı anda iki top çekiyoruz. İkisinin de beyaz olma olasılığı nedir?",
     "steps": [
      "Tüm ikililer: $\\binom{8}{2}=28$, istenenler: $\\binom{5}{2}=10$.",
      "$P=\\frac{10}{28}=\\frac{5}{14}\\approx 0{,}357$."
     ]
    },
    {
     "task": "İki nişancı hedefi $0{,}8$ ve $0{,}7$ olasılıkla (birbirinden bağımsız) vuruyor. Hedefin vurulma olasılığı nedir?",
     "steps": [
      "Tümleyen olay: ikisi de ıskalar, $P=0{,}2\\cdot 0{,}3=0{,}06$.",
      "<strong>$P=1-0{,}06=0{,}94$</strong>"
     ]
    }
   ]
  },
  "s4-binomicke": {
   "title": "Binom dağılımı",
   "summary": "Tekrarlanan bağımsız denemeler, k başarının olasılığı, beklenen değer ve varyans.",
   "theory": [
    "<p>İki sonuçlu bir deneyi (olasılığı $p$ olan başarı, olasılığı $1-p$ olan başarısızlık) birbirinden bağımsız olarak $n$ kez tekrarlarız. Rastgele değişken $X$, yani başarı sayısı,\n       <strong>binom dağılımına</strong> sahiptir: $X\\sim Bi(n; p)$ ve $k=0, 1, \\dots, n$ için $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.\n       Kombinasyon sayısı, başarılı denemelerin $n$ deneme arasına kaç farklı şekilde yerleşebileceğini verir.</p>",
    "<p><strong>Beklenen değer</strong> (beklenen başarı sayısı) $E(X)=np$, <strong>varyans</strong> $D(X)=np(1-p)$ ve standart sapma $\\sigma=\\sqrt{np(1-p)}$'dir.\n       “En az bir başarıyı” tümleyen olay üzerinden hesaplarız: $P(X\\ge 1)=1-(1-p)^n$; “en fazla $k$” ise $P(X=0)+\\dots+P(X=k)$ toplamıdır.</p>",
    {
     "fig": "s4-binom",
     "caption": "Sütunlar $Bi(n; p)$ için $P(X=k)$ değerlerini gösterir, yeşil sütun en olası değerdir. $n$ büyüdükçe şekil, beklenen değeri $np$ ve standart sapması $\\sqrt{np(1-p)}$ olan <strong>normal dağılımın</strong> çan eğrisine (turuncu) yaklaşır."
    }
   ],
   "examples": [
    {
     "task": "Bir öğrenci, her biri 4 seçenekli (biri doğru) 5 soruluk bir testte cevapları tahmin ediyor. Tam olarak 2 cevabı doğru bilme olasılığı nedir?",
     "steps": [
      "$X\\sim Bi(5; \\frac{1}{4})$.",
      "$P(X=2)=\\binom{5}{2}\\left(\\frac{1}{4}\\right)^2\\left(\\frac{3}{4}\\right)^3=10\\cdot\\frac{1}{16}\\cdot\\frac{27}{64}=\\frac{270}{1024}$.",
      "$P\\approx 0{,}2637$"
     ]
    },
    {
     "task": "Bir ürün $0{,}1$ olasılıkla kusurludur. 50 parçalık bir sevkiyatta kaç kusurlu ürün bekleriz ve varyans nedir?",
     "steps": [
      "$E(X)=np=50\\cdot 0{,}1=5$ ürün.",
      "$D(X)=np(1-p)=50\\cdot 0{,}1\\cdot 0{,}9=4{,}5$, $\\sigma\\approx 2{,}12$."
     ]
    }
   ]
  },
  "s4-mat-cisla": {
   "title": "Lise bitirme sınavı: sayı kümeleri, ifadeler ve denklemler",
   "summary": "Tüm sınıf düzeylerinden sayılar, ifade düzenleme ve denklemler üzerine karışık problemler.",
   "theory": [
    "<p><strong>Bilinmesi gerekenler, sayılar:</strong> $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$, bölünebilme (EBOB, EKOK, asal sayılar), küme işlemleri ve $|A\\cup B|=|A|+|B|-|A\\cap B|$,\n         sayı doğrusu üzerinde uzaklık olarak mutlak değer, aralıklar, üslü sayılar $a^{m}a^{n}=a^{m+n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, kökler $\\sqrt[n]{a}=a^{1/n}$ ve paydayı rasyonel yapma.</p>",
    "<p><strong>İfadeler:</strong> özdeşlikler $(a\\pm b)^2=a^2\\pm 2ab+b^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$, ortak çarpan parantezine alarak ve özdeşliklerle çarpanlara ayırma,\n         rasyonel ifadelerin sadeleştirilmesi; her zaman <strong>koşullarla</strong> birlikte (payda $\\neq 0$).</p>",
    "<p><strong>Denklemler:</strong> doğrusal (denk dönüşümler), ikinci dereceden $x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ ve Vieta formülleri, paydasında bilinmeyen olan,\n         kök içinde bilinmeyen olan (kuvvet alma ve <strong>sağlama</strong>), mutlak değerli (kritik noktalar yöntemi), üstel ve logaritmik ($\\log_a x=c \\Leftrightarrow x=a^c$) denklemler.</p>"
   ],
   "examples": [
    {
     "task": "$\\sqrt{x+7}=x+1$ denklemini çöz.",
     "steps": [
      "Koşul $x+1\\ge 0$. Karesini alırız: $x+7=x^2+2x+1 \\Rightarrow x^2+x-6=0$.",
      "$x_1=2$, $x_2=-3$.",
      "Sağlama: $\\sqrt9=3$ ✓; $-3$ için sağ taraf negatiftir ✗. <strong>$K=\\{2\\}$</strong>"
     ]
    },
    {
     "task": "$\\dfrac{x^2-9}{x^2+3x}$ ifadesini sadeleştir ve koşulları belirle.",
     "steps": [
      "$\\dfrac{(x-3)(x+3)}{x(x+3)}$, koşullar $x\\neq 0$, $x\\neq -3$.",
      "<strong>$\\dfrac{x-3}{x}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-nerovnice": {
   "title": "Lise bitirme sınavı: eşitsizlikler ve denklem sistemleri",
   "summary": "Eşitsizlikler, denklem ve eşitsizlik sistemleri üzerine karışık problemler.",
   "theory": [
    "<p><strong>Eşitsizlikler:</strong> negatif bir sayıyla çarparken ya da bölerken eşitsizlik yön değiştirir. İkinci dereceden eşitsizliği kökler ve parabolün biçimi yardımıyla çözeriz:\n         $a&gt;0$ için $ax^2+bx+c&lt;0$ kökler arasındadır. Bölüm ve çarpım biçimindeki eşitsizlikleri <strong>kritik noktalar yöntemiyle</strong> (işaret tablosu),\n         mutlak değerli eşitsizlikleri aralıklara ayırarak ya da $|x-a|&lt;r \\Leftrightarrow a-r&lt;x&lt;a+r$ yoluyla çözeriz.</p>",
    "<p><strong>Denklem sistemleri:</strong> yerine koyma ve yok etme yöntemi, üç bilinmeyende adım adım yok etme. İki denklemli doğrusal bir sistemin bir, hiç ya da\n         sonsuz çözümü vardır (kesişen, paralel, çakışık doğrular). Doğrusal olmayan sistemlerde doğrusal denklemden bir bilinmeyeni yalnız bırakır ve yerine koyarız.</p>",
    "<p><strong>Tipik hatalar:</strong> unutulan koşullar, bilinmeyen içeren bir ifadeye bölme (negatif ya da sıfır olabilir), sonuçların yanlış birleştirilmesi; eşitsizlik sisteminde <strong>kesişim</strong>, “veya” durumunda birleşim alınır.</p>"
   ],
   "examples": [
    {
     "task": "$\\dfrac{x-2}{x+1}\\le 0$ eşitsizliğini çöz.",
     "steps": [
      "Kritik noktalar: $2$ (pay) ve $-1$ (payda, bu nokta hariç tutulur).",
      "İşaretler: $(-\\infty; -1)$ aralığında $+$, $(-1; 2)$ aralığında $-$, $(2; \\infty)$ aralığında $+$.",
      "<strong>$K=(-1; 2\\rangle$</strong>"
     ]
    },
    {
     "task": "$2x+3y=12$, $x-y=1$ sistemini çöz.",
     "steps": [
      "İkinci denklemden $x=y+1$, yerine koyarız: $2y+2+3y=12 \\Rightarrow y=2$.",
      "$x=3$. <strong>Çözüm $[3; 2]$</strong>"
     ]
    }
   ]
  },
  "s4-mat-funkcie": {
   "title": "Lise bitirme sınavı: fonksiyonlar ve grafikleri",
   "summary": "Fonksiyonlar üzerine karışık problemler: doğrusal, ikinci dereceden, rasyonel, üstel, logaritmik fonksiyonlar ve özellikleri.",
   "theory": [
    "<p><strong>Fonksiyonun özellikleri:</strong> tanım kümesi ve görüntü kümesi, monotonluk, teklik-çiftlik, sınırlılık, ekstremumlar, bire birlik ve ters fonksiyon ($y=x$'e göre simetri).</p>",
    "<p><strong>Fonksiyonlara genel bakış:</strong> doğrusal $y=kx+q$ ($k$ eğim, $q$ $y$ eksenini kestiği yer); tepe noktası $V[m; n]$ olan ikinci dereceden $y=a(x-m)^2+n$;\n         doğrusal rasyonel $y=\\frac{ax+b}{cx+d}$ (asimptotlu hiperbol); üstel $y=a^x$ ($a&gt;1$ için artan, $0&lt;a&lt;1$ için azalan, $H=(0; \\infty)$)\n         ve logaritmik $y=\\log_a x$ ($D=(0; \\infty)$, $[1; 0]$ noktasından geçer); periyodu $2\\pi$ olan trigonometrik fonksiyonlar (tanjant için $\\pi$).</p>",
    "<p><strong>Grafiklerin ötelenmesi:</strong> $f(x-a)$ grafiği $a$ kadar sağa, $f(x)+b$ ise $b$ kadar yukarı öteler; $-f(x)$, $x$ eksenine göre yansımadır; $|f(x)|$ negatif kısımları yukarı yansıtır.</p>"
   ],
   "examples": [
    {
     "task": "$y=x^2-6x+5$ parabolünün tepe noktasını ve fonksiyonun görüntü kümesini bul.",
     "steps": [
      "Tam kareye tamamlama: $y=(x-3)^2-4$.",
      "Tepe noktası $V[3; -4]$, parabolün kolları yukarı doğrudur.",
      "<strong>$H(f)=\\langle -4; \\infty)$</strong>"
     ]
    },
    {
     "task": "$f(x)=\\log_2(6-2x)$ fonksiyonunun tanım kümesini bul.",
     "steps": [
      "Logaritmanın argümanı pozitif olmalıdır: $6-2x&gt;0$.",
      "<strong>$x&lt;3$, yani $D(f)=(-\\infty; 3)$</strong>"
     ]
    }
   ]
  },
  "s4-mat-geometria": {
   "title": "Lise bitirme sınavı: düzlem geometri, katı cisimler geometrisi ve analitik geometri",
   "summary": "Düzlemde ve uzayda geometri ile analitik geometri üzerine karışık problemler.",
   "theory": [
    "<p><strong>Düzlem geometri:</strong> üçgenin iç açıları toplamı $180^\\circ$, Pisagor teoremi ve Öklid bağıntıları, üçgenlerde benzerlik ($KKK$, $KAK$, $AA$ kuralları),\n         alanlar ($S=\\frac{a\\cdot v_a}{2}=\\frac{1}{2}ab\\sin\\gamma$, Heron formülü), daire ($S=\\pi r^2$, $o=2\\pi r$, dilim $\\frac{\\alpha}{360^\\circ}\\pi r^2$), çevre açı ve merkez açı.</p>",
    "<p><strong>Katı cisimler geometrisi:</strong> hacimler $V=S_pv$ (prizma, silindir), $V=\\frac{1}{3}S_pv$ (piramit, koni), $V=\\frac{4}{3}\\pi r^3$ (küre); yüzey alanları; doğruların ve düzlemlerin birbirine göre konumu,\n         açılar ve uzaklıklar; her zaman uygun bir dik üçgen ararız.</p>",
    "<p><strong>Analitik geometri:</strong> $|AB|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$, doğru parçasının orta noktası, vektörler ve skaler çarpım ($\\vec u\\perp\\vec v \\Leftrightarrow \\vec u\\cdot\\vec v=0$),\n         doğru denklemleri (parametrik, genel $ax+by+c=0$, eğim biçimi $y=kx+q$), noktanın doğruya uzaklığı, çember $(x-m)^2+(y-n)^2=r^2$.</p>"
   ],
   "examples": [
    {
     "task": "$A[1; 2]$ ve $B[4; -4]$ noktalarından geçen doğrunun genel denklemini bul.",
     "steps": [
      "Doğrultman vektörü $\\vec{AB}=(3; -6)\\sim(1; -2)$, normal vektör $(2; 1)$.",
      "$2x+y+c=0$, $A$'yı yerine koyarız: $2+2+c=0$, $c=-4$.",
      "<strong>$2x+y-4=0$</strong>"
     ]
    },
    {
     "task": "Bir silindirin hacmi $72\\pi\\,\\text{cm}^3$ ve yüksekliği $8\\,\\text{cm}$'dir. Taban yarıçapı nedir?",
     "steps": [
      "$\\pi r^2\\cdot 8=72\\pi \\Rightarrow r^2=9$.",
      "<strong>$r=3\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "s4-mat-goniometria": {
   "title": "Lise bitirme sınavı: trigonometrik fonksiyonlar ve üçgen trigonometrisi",
   "summary": "Trigonometrik fonksiyonlar, denklemler ve üçgen çözümü üzerine karışık problemler.",
   "theory": [
    "<p><strong>Trigonometrik fonksiyonlar:</strong> radyan ölçüsü $180^\\circ=\\pi\\,\\text{rad}$, birim çember, bölgelerdeki işaretler, $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$ için değerler,\n         periyodiklik, teklik-çiftlik ($\\cos$ çift, $\\sin$ ve $\\tan$ tek).</p>",
    "<p><strong>Formüller:</strong> $\\sin^2 x+\\cos^2 x=1$, $\\tan x=\\frac{\\sin x}{\\cos x}$, $\\sin 2x=2\\sin x\\cos x$, $\\cos 2x=\\cos^2 x-\\sin^2 x$,\n         $\\sin(\\pi-x)=\\sin x$, $\\cos(\\pi-x)=-\\cos x$. Trigonometrik denklemler: değişken değiştirme, ortak çarpan parantezine alma, $k\\in\\mathbb{Z}$ ile genel çözüm.</p>",
    "<p><strong>Üçgen trigonometrisi:</strong> dik üçgende $\\sin$, $\\cos$, $\\tan$ tanımları; genel üçgende <strong>sinüs teoremi</strong>\n         $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2r$ ve <strong>kosinüs teoremi</strong> $c^2=a^2+b^2-2ab\\cos\\gamma$.</p>"
   ],
   "examples": [
    {
     "task": "Bir üçgenin kenarları $a=5$, $b=8$ ve açısı $\\gamma=60^\\circ$'dir. $c$ kenarını hesapla.",
     "steps": [
      "Kosinüs teoremi: $c^2=25+64-2\\cdot 5\\cdot 8\\cdot\\frac{1}{2}=49$.",
      "<strong>$c=7$</strong>"
     ]
    },
    {
     "task": "$\\cos x=-\\frac{3}{5}$ ve $x\\in(\\frac{\\pi}{2}; \\pi)$ ise $\\sin x$ ve $\\tan x$ değerlerini hesapla.",
     "steps": [
      "$\\sin^2 x=1-\\frac{9}{25}=\\frac{16}{25}$; II. bölgede sinüs pozitiftir: $\\sin x=\\frac{4}{5}$.",
      "$\\tan x=\\frac{4/5}{-3/5}=-\\frac{4}{3}$."
     ]
    }
   ]
  },
  "s4-mat-postupnosti": {
   "title": "Lise bitirme sınavı: diziler, sayma ve olasılık",
   "summary": "Diziler, finans matematiği, sayma, olasılık ve istatistik üzerine karışık problemler.",
   "theory": [
    "<p><strong>Diziler:</strong> aritmetik $a_n=a_1+(n-1)d$, $s_n=\\frac{n}{2}(a_1+a_n)$; geometrik $a_n=a_1q^{n-1}$, $s_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq 1$);\n         $|q|&lt;1$ için sonsuz geometrik seri $s=\\frac{a_1}{1-q}$.</p>",
    "<p><strong>Finans matematiği:</strong> bileşik faiz $K_n=K_0\\left(1+\\frac{p}{100}\\right)^n$ (faiz vergisi varsa faiz oranı düşer), geometrik dizinin toplamı olarak düzenli birikim ve kredi ödemesi,\n         yüzde ve binde.</p>",
    "<p><strong>Sayma ve olasılık:</strong> varyasyonlar, permütasyonlar, kombinasyonlar (tekrarlı olanlar da), $P(A)=\\frac{m}{n}$, tümleyen olay, bağımsız olaylar, binom dağılımı.\n         <strong>İstatistik:</strong> ortalama, medyan, mod, varyans, standart sapma, tabloların ve grafiklerin okunması.</p>"
   ],
   "examples": [
    {
     "task": "$2\\,000\\,€$'luk bir mevduata yıllık $3\\,\\%$ (bileşik) faiz uygulanıyor. 5 yıl sonra hesapta ne kadar olur?",
     "steps": [
      "$K_5=2000\\cdot 1{,}03^5$.",
      "$1{,}03^5\\approx 1{,}159274$.",
      "<strong>$K_5\\approx 2\\,318{,}55\\,€$</strong>"
     ]
    },
    {
     "task": "Bir aritmetik dizide $a_3=7$ ve $a_7=19$'dur. $a_1$'i ve ilk 10 terimin toplamını hesapla.",
     "steps": [
      "$a_7-a_3=4d=12 \\Rightarrow d=3$, $a_1=a_3-2d=1$.",
      "$a_{10}=1+9\\cdot 3=28$, $s_{10}=\\frac{10}{2}(1+28)=145$."
     ]
    }
   ]
  },
  "s4-mat-komplex": {
   "title": "Lise bitirme sınavı: tipik sorular ve kapsamlı problemler",
   "summary": "Birden çok konuyu birleştiren çok adımlı problemler: optimizasyon, finans, diziler, analitik geometri, olasılık ve türevler.",
   "theory": [
    "<p><strong>Kapsamlı bir probleme nasıl yaklaşılır:</strong></p>\n       <ol><li>Soruyu iki kez oku; neyin verildiğini ve neyin istendiğini (birimleriyle) yaz.</li>\n       <li>Bir çizim ya da tablo yap; bilinmeyenlere isim ver.</li>\n       <li>Problemi küçük adımlara ayır; çoğu zaman bilinen yöntemlerden oluşan bir zincirdir (örneğin “fonksiyonu kur → türevini al → maksimumu bul”).</li>\n       <li>Sonucu kontrol et: yerine koyarak, büyüklük mertebesini tahmin ederek, koşulları denetleyerek (uzunluk pozitif, olasılık $\\langle 0; 1\\rangle$ aralığında).</li></ol>",
    "<p><strong>Sık görülen konu birleşimleri:</strong> optimizasyon (geometri + türev), faiz ve birikim (yüzdeler + geometrik dizi + logaritma),\n       koordinat düzleminde üçgen (vektörler + alan + uzaklık), grup seçimi ve olasılık (kombinasyonlar + tümleyen olay), grafiğe teğet (türev + doğru denklemi).</p>",
    "<p><strong>Ek kullanışlı formüller:</strong> koordinatlarla $ABC$ üçgeninin alanı $S=\\frac{1}{2}\\left|(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)\\right|$,\n       teğet $y=f(x_0)+f'(x_0)(x-x_0)$, faizde yıl sayısı $n=\\frac{\\ln(K_n/K_0)}{\\ln(1+p/100)}$.</p>"
   ],
   "examples": [
    {
     "task": "Kenarı $30\\,\\text{cm}$ olan kare bir saçın köşelerinden eş kareler kesip üstü açık bir kutu katlıyoruz. Kutunun hacmi en fazla ne olabilir?",
     "steps": [
      "Kesilen karenin kenarı $x$ ise: $V(x)=x(30-2x)^2$, $x\\in(0; 15)$.",
      "$V'(x)=(30-2x)^2-4x(30-2x)=(30-2x)(30-6x)=0 \\Rightarrow x=5$ ($15$ değeri aralığa ait değildir).",
      "<strong>$V(5)=5\\cdot 20^2=2\\,000\\,\\text{cm}^3$</strong>"
     ]
    },
    {
     "task": "Yıllık $4\\,\\%$ faizle bir mevduat kaç yıl sonra ilk kez iki katına çıkar?",
     "steps": [
      "$1{,}04^n\\ge 2$ olacak şekilde en küçük $n$'yi ararız.",
      "$n\\ge\\frac{\\ln 2}{\\ln 1{,}04}\\approx 17{,}67$.",
      "<strong>18 yıl sonra.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(-\\infty; {@0}\\rangle$ a $\\langle {@1}; \\infty)$": "$(-\\infty; {@0}\\rangle$ ve $\\langle {@1}; \\infty)$",
  "$(-x)^2\\sin(-x)=-x^2\\sin x$, teda $f(-x)=-f(x)$.": "$(-x)^2\\sin(-x)=-x^2\\sin x$, yani $f(-x)=-f(x)$.",
  "$(f\\circ g)({@0})=f(g({@1}))$. Najprv $g({@2})={@3}\\cdot {@4}{@5}={@6}$, potom $f({@7})={@8}{@9}^2{@10}={@11}$.": "$(f\\circ g)({@0})=f(g({@1}))$. Önce $g({@2})={@3}\\cdot {@4}{@5}={@6}$, sonra $f({@7})={@8}{@9}^2{@10}={@11}$.",
  "$(g\\circ f)({@0})=g(f({@1}))$. Najprv $f({@2})={@3}{@4}^2{@5}={@6}$, potom $g({@7})={@8}\\cdot {@9}{@10}={@11}$.": "$(g\\circ f)({@0})=g(f({@1}))$. Önce $f({@2})={@3}{@4}^2{@5}={@6}$, sonra $g({@7})={@8}\\cdot {@9}{@10}={@11}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $\\cos x=0$ pre $x\\in\\{90^\\circ; 270^\\circ\\}$, $\\sin x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\cos x\\,(2\\sin x {@1})=0$. $x\\in\\{90^\\circ; 270^\\circ\\}$ için $\\cos x=0$, $x\\in\\{{@4}\\}$ için $\\sin x={@2}\\frac{{@3}}{2}$. $K=\\{{@5}\\}$.",
  "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $\\sin x=0$ pre $x\\in\\{0^\\circ; 180^\\circ\\}$, $\\cos x={@2}\\frac{{@3}}{2}$ pre $x\\in\\{{@4}\\}$. $K=\\{{@5}\\}$.": "$2\\sin x\\cos x {@0}=0 \\Rightarrow \\sin x\\,(2\\cos x {@1})=0$. $x\\in\\{0^\\circ; 180^\\circ\\}$ için $\\sin x=0$, $x\\in\\{{@4}\\}$ için $\\cos x={@2}\\frac{{@3}}{2}$. $K=\\{{@5}\\}$.",
  "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, teda $k={@5}$.": "$4\\pi r^2={@0}\\pi \\Rightarrow r^2={@1} \\Rightarrow r={@2}\\,\\text{cm}$. $V=\\frac{4}{3}\\pi r^3=\\frac{4}{3}\\pi\\cdot {@3}={@4}\\pi\\,\\text{cm}^3$, yani $k={@5}$.",
  "$D={@0}-4c=0 \\Rightarrow c={@1}$. Rovnica je potom $({@2})^2=0$ s dvojnásobným koreňom ${@3}$.": "$D={@0}-4c=0 \\Rightarrow c={@1}$. Denklem o zaman $({@2})^2=0$ olur ve çift katlı kökü ${@3}$ olur.",
  "$D={@0}-4p$. Podmienka {@1} dáva {@2}.": "$D={@0}-4p$. {@1} koşulu {@2} verir.",
  "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.": "$E(X)=np={@0}\\cdot {@1}={@2}$, $D(X)=np(1-p)={@3}\\cdot {@4}\\cdot {@5}={@6}$.",
  "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.": "$P(X\\le 1)=P(X=0)+P(X=1)=\\left({@0}\\right)^{{@1}}+{@2}\\cdot {@3}\\cdot\\left({@4}\\right)^{{@5}}\\approx {@6}+{@7}\\approx {@8}$.",
  "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (prvý trafí a druhý nie, alebo naopak).": "$P={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}+{@5}={@6}$ (birincisi isabet ettirir ve ikincisi ettiremez ya da tersi).",
  "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)=\\frac{\\pi\\cdot {@0}}{3}({@1}+{@2}+{@3})={@4}\\pi\\approx {@5}\\,\\text{cm}^3$.",
  "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.": "$V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)=\\frac{{@0}}{3}({@1}+{@2}+{@3})={@4}{@5}\\,\\text{cm}^3$.",
  "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.": "$X\\sim Bi({@0}; {@1})$. $P(X={@2})=\\binom{{@3}}{{@4}}\\left({@5}\\right)^{{@6}}\\left({@7}\\right)^{{@8}}={@9}\\cdot\\left({@10}\\right)^{{@11}}\\cdot\\left({@12}\\right)^{{@13}}\\approx {@14}$.",
  "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Odchýlky od priemeru: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.": "$\\bar{x}=\\frac{{@0}}{{@1}}={@2}$. Ortalamadan sapmalar: ${@3}$. $s^2=\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}\\approx {@8}${@9}.",
  "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.": "$\\cos 2x=1 \\Leftrightarrow 2x=2k\\pi \\Leftrightarrow x=k\\pi$.",
  "$\\cos x=\\frac{1}{2}$; v jednej perióde má riešenia $\\frac{\\pi}{3}$ a $-\\frac{\\pi}{3}$, perióda kosínusu je $2\\pi$.": "$\\cos x=\\frac{1}{2}$; bir periyotta çözümleri $\\frac{\\pi}{3}$ ve $-\\frac{\\pi}{3}$'tür, kosinüsün periyodu $2\\pi$'dir.",
  "$\\cos(-x)=\\cos x$ a $(-x)^2=x^2$, teda $f(-x)=f(x)$.": "$\\cos(-x)=\\cos x$ ve $(-x)^2=x^2$, yani $f(-x)=f(x)$.",
  "$\\mathrm{tg}\\,x=1$ alebo $\\mathrm{tg}\\,x=-1$, teda $x=\\frac{\\pi}{4}+k\\pi$ alebo $x=-\\frac{\\pi}{4}+k\\pi$. Spolu sú to body vzdialené o $\\frac{\\pi}{2}$.": "$\\mathrm{tg}\\,x=1$ veya $\\mathrm{tg}\\,x=-1$, yani $x=\\frac{\\pi}{4}+k\\pi$ veya $x=-\\frac{\\pi}{4}+k\\pi$. Birlikte bunlar aralarında $\\frac{\\pi}{2}$ uzaklık olan noktalardır.",
  "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, čo platí pre $\\frac{\\pi}{6}$; perióda tangensu je $\\pi$.": "$\\mathrm{tg}\\,x=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$, bu $\\frac{\\pi}{6}$ için geçerlidir; tanjantın periyodu $\\pi$'dir.",
  "$\\sin x=\\frac{\\sqrt2}{2}$; sínus je kladný v I. a II. kvadrante, teda $\\frac{\\pi}{4}$ a $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, perióda $2\\pi$.": "$\\sin x=\\frac{\\sqrt2}{2}$; sinüs I. ve II. bölgede pozitiftir, yani $\\frac{\\pi}{4}$ ve $\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}$, periyot $2\\pi$.",
  "$\\sin x=\\pm\\frac{1}{2}$; riešenia $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ sa opakujú s periódou $\\pi$ ako $\\pm\\frac{\\pi}{6}+k\\pi$.": "$\\sin x=\\pm\\frac{1}{2}$; $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{7\\pi}{6}$, $\\frac{11\\pi}{6}$ çözümleri $\\pi$ periyoduyla $\\pm\\frac{\\pi}{6}+k\\pi$ olarak tekrar eder.",
  "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, z $S=\\frac{|AB|\\cdot v_c}{2}$ je $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.": "$\\vec{AB}=({@0}; {@1})$, $\\vec{AC}=({@2}; {@3})$. $S=\\frac{1}{2}|{@4}\\cdot {@5}-{@6}\\cdot {@7}|=\\frac{{@8}}{2}={@9}$. $|AB|=\\sqrt{{@10}}$, $S=\\frac{|AB|\\cdot v_c}{2}$ eşitliğinden $v_c=\\dfrac{2S}{|AB|}=\\dfrac{{@11}}{\\sqrt{{@12}}}\\approx {@13}$.",
  "$f''(x)={@0}$. Nerovnica $f''(x)&gt;0$ dáva ${@1}$, funkcia je konvexná na {@2}.": "$f''(x)={@0}$. $f''(x)&gt;0$ eşitsizliği ${@1}$ verir, fonksiyon {@2} aralığında konvekstir.",
  "$f'(x)={@0}$ má korene ${@1}$ a ${@2}$. {@3} Porovnáme hodnoty: {@4}. {@5} z nich je ${@6}$.": "$f'(x)={@0}$ fonksiyonunun kökleri ${@1}$ ve ${@2}$. {@3} Değerleri karşılaştırırız: {@4}. Bunların {@5} ${@6}$ olur.",
  "$f'(x)={@0}$, $f''(x)={@1}$. $f''(x)=0$ pre $x={@2}$ a druhá derivácia tam mení znamienko. $f({@3})={@4}$, inflexný bod je $[{@5}; {@6}]$.": "$f'(x)={@0}$, $f''(x)={@1}$. $x={@2}$ için $f''(x)=0$ ve ikinci türev orada işaret değiştirir. $f({@3})={@4}$, dönüm noktası $[{@5}; {@6}]$ olur.",
  "$f'(x)={@0}$.": "$f'(x)={@0}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$, stacionárne body sú ${@4}$ a ${@5}$. Derivácia má znamienka {@6} na intervaloch $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$. {@11} je preto v bode $x={@12}$ a $f({@13})={@14}$.": "$f'(x)={@0}={@1}{@2}{@3}$, kritik noktalar ${@4}$ ve ${@5}$. Türevin $(-\\infty; {@7})$, $({@8}; {@9})$, $({@10}; \\infty)$ aralıklarındaki işaretleri {@6}. Bu yüzden {@11} $x={@12}$ noktasındadır ve $f({@13})={@14}$.",
  "$f'(x)={@0}={@1}{@2}{@3}$. Derivácia je {@4} medzi koreňmi ${@5}$ a ${@6}$ a {@7} mimo nich. Funkcia je {@8} na {@9}.": "$f'(x)={@0}={@1}{@2}{@3}$. Türev ${@5}$ ve ${@6}$ kökleri arasında {@4}, köklerin dışında {@7}. Fonksiyon {@9} aralığında {@8}.",
  "$f'(x)={@0}\\cos {@1}x{@2}$. Keďže $\\cos 0=1$ a $\\mathrm{e}^0=1$, je $f'(0)={@3}{@4}={@5}$.": "$f'(x)={@0}\\cos {@1}x{@2}$. $\\cos 0=1$ ve $\\mathrm{e}^0=1$ olduğundan $f'(0)={@3}{@4}={@5}$.",
  "$f'(x)={@0}\\sin {@1}x{@2}$. Keďže $\\sin 0=0$ a $\\mathrm{e}^0=1$, je $f'(0)=0{@3}={@4}$.": "$f'(x)={@0}\\sin {@1}x{@2}$. $\\sin 0=0$ ve $\\mathrm{e}^0=1$ olduğundan $f'(0)=0{@3}={@4}$.",
  "$f(-1)=\\mathrm{e}^{-1}$ sa nerovná $f(1)=\\mathrm{e}$ ani $-\\mathrm{e}$.": "$f(-1)=\\mathrm{e}^{-1}$, ne $f(1)=\\mathrm{e}$ değerine ne de $-\\mathrm{e}$ değerine eşittir.",
  "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, párne mocniny zmenu znamienka „pohltia“.": "$f(-x)=(-x)^4-{@0}(-x)^2=x^4-{@1}x^2=f(x)$, çift kuvvetler işaret değişimini „yutar“.",
  "$f(-x)=-\\sin x+\\cos x$, čo nie je $f(x)$ ani $-f(x)$.": "$f(-x)=-\\sin x+\\cos x$, bu ne $f(x)$ ne de $-f(x)$'tir.",
  "$f(-x)=-x^3+{@0}x=-f(x)$, výraz obsahuje len nepárne mocniny.": "$f(-x)=-x^3+{@0}x=-f(x)$, ifade yalnızca tek kuvvetler içerir.",
  "$f(1)={@0}$ a $f(-1)={@1}$; neplatí ani jedna z rovností $f(-1)=f(1)$, $f(-1)=-f(1)$.": "$f(1)={@0}$ ve $f(-1)={@1}$; $f(-1)=f(1)$, $f(-1)=-f(1)$ eşitliklerinin hiçbiri sağlanmaz.",
  "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Dotyčnica: $y={@5}+{@6}(x-{@7})$, teda $y={@8}$.": "$f({@0})={@1}$, $f'(x)={@2}$, $f'({@3})={@4}$. Teğet: $y={@5}+{@6}(x-{@7})$, yani $y={@8}$.",
  "$f^{-1}({@0})$ je číslo $x$, pre ktoré $f(x)={@1}$. Riešime $\\dfrac{{@2}}{{@3}}={@4}$: po vynásobení menovateľmi dostaneme lineárnu rovnicu s riešením $x={@5}$. Skúška: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓": "$f^{-1}({@0})$, $f(x)={@1}$ olan $x$ sayısıdır. $\\dfrac{{@2}}{{@3}}={@4}$ denklemini çözeriz: paydalarla çarpınca çözümü $x={@5}$ olan doğrusal bir denklem elde ederiz. Sağlama: $f({@6})=\\dfrac{{@7}}{{@8}}={@9}$ ✓",
  "$n={@0}$ je {@1} v usporiadanom súbore. Kumulované počty: {@2}. Medián je ${@3}$.": "$n={@0}$ {@1}. Kümülatif sıklıklar: {@2}. Medyan ${@3}$ olur.",
  "$n={@0}={@1}$. Vážený aritmetický priemer: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.": "$n={@0}={@1}$. Ağırlıklı aritmetik ortalama: $\\bar{x}=\\dfrac{{@2}}{{@3}}=\\dfrac{{@4}}{{@5}}\\approx {@6}$.",
  "${@0} x={@1}$ pre $x\\in\\{{@2}\\}$": "$x\\in\\{{@2}\\}$ için ${@0} x={@1}$",
  "${@0}^{x}=({@1}^{x})^2$, substitúcia $t={@2}^{x}$, pričom $t&gt;0$: ${@3}=0$, korene $t_1={@4}$, $t_2={@5}$. {@6}Z ${@7}^{x}={@8}$ je $x={@9}${@10}. $K=\\{{@11}\\}$.": "${@0}^{x}=({@1}^{x})^2$, $t&gt;0$ olmak üzere $t={@2}^{x}$ değişken değiştirmesi: ${@3}=0$, kökler $t_1={@4}$, $t_2={@5}$. {@6}${@7}^{x}={@8}$ ise $x={@9}${@10}. $K=\\{{@11}\\}$.",
  "(Výsledok zadaj ako zlomok alebo desatinné číslo zaokrúhlené na 3 desatinné miesta.)": "(Sonucu kesir ya da 3 ondalık basamağa yuvarlanmış ondalık sayı olarak gir.)",
  "(otočíme znak)": "(yön değiştiririz)",
  ", obsah $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$": ", alan $S=\\frac{{@0}\\cdot {@1}}{2}={@2}\\,\\text{cm}^2$",
  ", prepona má ${@0}\\,\\text{cm}$": ", hipotenüs ${@0}\\,\\text{cm}$",
  ", z ${@0}^{x}={@1}$ je $x={@2}$": ", ${@0}^{x}={@1}$ ise $x={@2}$",
  "0 alebo 5": "0 veya 5",
  "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · body [1; {@2}] a [{@3}; 1] sú súmerné podľa y = x": "<span class=\"c-accent\">f(x) = {@0}ˣ</span> · <span class=\"c-ok\">f⁻¹(x) = log<sub>{@1}</sub> x</span> · [1; {@2}] ve [{@3}; 1] noktaları y = x doğrusuna göre simetriktir",
  "<span class=\"c-ok\">f′ &gt; 0, funkcia rastie</span>": "<span class=\"c-ok\">f′ &gt; 0, fonksiyon artar</span>",
  "<span class=\"muted small\">Téma: {@0}</span><br>{@1}": "<span class=\"muted small\">Konu: {@0}</span><br>{@1}",
  "ABC": "ABC",
  "ABD": "ABD",
  "ABE": "ABE",
  "ABF": "ABF",
  "ABG": "ABG",
  "ACB": "ACB",
  "ACD": "ACD",
  "ACE": "ACE",
  "ACF": "ACF",
  "ACG": "ACG",
  "ACH": "ACH",
  "ADB": "ADB",
  "ADC": "ADC",
  "ADE": "ADE",
  "ADF": "ADF",
  "ADG": "ADG",
  "ADH": "ADH",
  "AEB": "AEB",
  "AEC": "AEC",
  "AED": "AED",
  "AEF": "AEF",
  "AEG": "AEG",
  "AFB": "AFB",
  "AFD": "AFD",
  "AFG": "AFG",
  "AFH": "AFH",
  "AGB": "AGB",
  "AGC": "AGC",
  "AGD": "AGD",
  "AGE": "AGE",
  "AGF": "AGF",
  "AHB": "AHB",
  "AHC": "AHC",
  "AHD": "AHD",
  "AHE": "AHE",
  "AHF": "AHF",
  "AHG": "AHG",
  "ANALÝZA": "ANALYZA",
  "ANANÁS": "ANANAS",
  "Ak po dosadení vyjde $\\frac{0}{0}$, rozlož čitateľa na súčin. Jeden z činiteľov sa vykráti s menovateľom.": "Yerine koyunca $\\frac{0}{0}$ çıkarsa payı çarpanlarına ayır. Çarpanlardan biri paydayla sadeleşir.",
  "Aká dlhá je potom strana rovnobežná so stenou (v metroch)?": "O zaman duvara paralel kenar ne uzunlukta olur (metre olarak)?",
  "Aká dlhá je prepona v cm?": "Hipotenüs kaç cm'dir?",
  "Aká dlhá je základňa trojuholníka na osi $x$?": "Üçgenin $x$ eksenindeki tabanı ne uzunluktadır?",
  "Aká dlhá musí byť strana rovnobežná so stenou, aby bol obsah najväčší (v metroch)?": "Alanın en büyük olması için duvara paralel kenar ne uzunlukta olmalıdır (metre olarak)?",
  "Aká je $y$-ová súradnica bodu s $x={@0}$?": "$x={@0}$ olan noktanın $y$ koordinatı nedir?",
  "Aká je pravdepodobnosť, že obaja minú?": "İkisinin de ıskalama olasılığı nedir?",
  "Aká je pravdepodobnosť, že prvý minie a druhý zasiahne?": "Birincinin ıskalayıp ikincinin isabet ettirme olasılığı nedir?",
  "Aká je pravdepodobnosť, že prvý zasiahne a druhý minie?": "Birincinin isabet ettirip ikincinin ıskalama olasılığı nedir?",
  "Aká je pravdepodobnosť, že terč zasiahne aspoň jeden?": "Hedefi en az birinin vurma olasılığı nedir?",
  "Aká je pravdepodobnosť, že terč zasiahne práve jeden?": "Hedefi tam olarak birinin vurma olasılığı nedir?",
  "Aká je pravdepodobnosť, že vo výbere bude aspoň jedno dievča? {@0}": "Seçilenler arasında en az bir kız öğrenci olma olasılığı nedir? {@0}",
  "Aká je pravdepodobnosť, že šestka nepadne ani raz? Výsledok zaokrúhli na 4 desatinné miesta.": "Hiç altı gelmeme olasılığı nedir? Sonucu 4 ondalık basamağa yuvarla.",
  "Aká je pravdepodobnosť, že šestka padne aspoň raz? Výsledok zaokrúhli na 3 desatinné miesta.": "En az bir kez altı gelme olasılığı nedir? Sonucu 3 ondalık basamağa yuvarla.",
  "Aká je pravdepodobnosť? {@0}": "Olasılık nedir? {@0}",
  "Aká je teda hodnota limity? Zadaj ju ako zlomok.": "O hâlde limitin değeri nedir? Kesir olarak gir.",
  "Aká je výška trojuholníka (y-ová súradnica priesečníka oboch priamok)?": "Üçgenin yüksekliği nedir (iki doğrunun kesişim noktasının y koordinatı)?",
  "Aké je najmenšie celé číslo v prieniku?": "Kesişimdeki en küçük tam sayı nedir?",
  "Aké je najmenšie celé číslo, ktoré ju spĺňa?": "Onu sağlayan en küçük tam sayı nedir?",
  "Aké sú súradnice bodu $K$ (v cm)? Zadaj $x$; $y$; $z$.": "$K$ noktasının koordinatları nedir (cm olarak)? $x$; $y$; $z$ gir.",
  "Akú dĺžku (v cm) musí mať strana odstrihnutých štvorcov, aby mala krabica najväčší objem?": "Kutunun hacminin en büyük olması için kesilen karelerin kenarı ne uzunlukta olmalıdır (cm olarak)?",
  "Akú hodnotu má derivácia člena ${@0}$ v bode $0$?": "${@0}$ teriminin türevinin $0$ noktasındaki değeri nedir?",
  "Akú hodnotu má menovateľ derivácie $({@0})^2$ v bode ${@1}$?": "Türevin paydası $({@0})^2$'nin ${@1}$ noktasındaki değeri nedir?",
  "Akú hodnotu má vnútorná funkcia ${@0}$ v bode ${@1}$?": "${@0}$ iç fonksiyonunun ${@1}$ noktasındaki değeri nedir?",
  "Akú hodnotu má člen $uv'$ v bode $0$?": "$uv'$ teriminin $0$ noktasındaki değeri nedir?",
  "Aký je absolútny člen $q$?": "Sabit terim $q$ nedir?",
  "Aký je najväčší objem krabice v $\\text{cm}^3$?": "Kutunun en büyük hacmi kaç $\\text{cm}^3$'tür?",
  "Aký je najväčší obsah pozemku (v $\\text{m}^2$)?": "Arsanın en büyük alanı nedir ($\\text{m}^2$ olarak)?",
  "Aký je obsah oblasti?": "Bölgenin alanı nedir?",
  "Aký je obsah útvaru? Zadaj zlomok alebo celé číslo.": "Şeklin alanı nedir? Kesir ya da tam sayı gir.",
  "Aký je parameter $p$?": "$p$ parametresi nedir?",
  "Aký je rozsah súboru $n$ (počet všetkých žiakov)?": "Veri kümesinin büyüklüğü $n$ (tüm öğrencilerin sayısı) nedir?",
  "Aký je stredový uhol výseče v stupňoch?": "Daire diliminin merkez açısı kaç derecedir?",
  "Aký je súčet vekov po príchode nového člena?": "Yeni üyenin gelişinden sonra yaşların toplamı nedir?",
  "Aký je súčet vekov pôvodných členov?": "İlk üyelerin yaşlarının toplamı nedir?",
  "Aký je súčet známok všetkých žiakov?": "Tüm öğrencilerin notlarının toplamı nedir?",
  "Aký je súčin faktoriálov počtov opakujúcich sa písmen?": "Tekrar eden harflerin tekrar sayılarının faktöriyellerinin çarpımı nedir?",
  "Aký je teda exponent ${@0}$?": "O hâlde ${@0}$ üssü nedir?",
  "Aký je štatistický znak „{@0}“?": "„{@0}“ istatistiksel değişkeni nasıl bir değişkendir?",
  "Aký najväčší objem (v $\\text{cm}^3$) môže mať krabica?": "Kutunun hacmi en fazla kaç $\\text{cm}^3$ olabilir?",
  "Aký najväčší obsah (v $\\text{m}^2$) môže mať pozemok?": "Arsanın alanı en fazla kaç $\\text{m}^2$ olabilir?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „autobus“ v kruhovom diagrame?": "Daire grafiğinde „otobüs“ diliminin merkez açısı kaç derece olur?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „auto“ v kruhovom diagrame?": "Daire grafiğinde „araba“ diliminin merkez açısı kaç derece olur?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „bicykel“ v kruhovom diagrame?": "Daire grafiğinde „bisiklet“ diliminin merkez açısı kaç derece olur?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „pešo“ v kruhovom diagrame?": "Daire grafiğinde „yürüyerek“ diliminin merkez açısı kaç derece olur?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „vlak“ v kruhovom diagrame?": "Daire grafiğinde „tren“ diliminin merkez açısı kaç derece olur?",
  "Aký stredový uhol (v stupňoch) bude mať výseč „{@0}“ v kruhovom diagrame?": "Daire grafiğinde „{@0}“ diliminin merkez açısı kaç derece olur?",
  "Akým číslom sa suma na účte každý rok vynásobí?": "Hesaptaki para her yıl hangi sayıyla çarpılır?",
  "BAC": "BAC",
  "BAD": "BAD",
  "BAE": "BAE",
  "BAF": "BAF",
  "BAG": "BAG",
  "BAH": "BAH",
  "BCA": "BCA",
  "BCD": "BCD",
  "BCF": "BCF",
  "BCG": "BCG",
  "BCH": "BCH",
  "BDA": "BDA",
  "BDC": "BDC",
  "BDE": "BDE",
  "BDF": "BDF",
  "BDG": "BDG",
  "BDH": "BDH",
  "BEA": "BEA",
  "BEC": "BEC",
  "BED": "BED",
  "BEF": "BEF",
  "BEG": "BEG",
  "BFA": "BFA",
  "BFC": "BFC",
  "BFD": "BFD",
  "BFE": "BFE",
  "BFG": "BFG",
  "BFH": "BFH",
  "BGC": "BGC",
  "BGD": "BGD",
  "BGE": "BGE",
  "BGF": "BGF",
  "BGH": "BGH",
  "BHA": "BHA",
  "BHC": "BHC",
  "BHD": "BHD",
  "BHE": "BHE",
  "BHF": "BHF",
  "BHG": "BHG",
  "Basketbalista premení trestný hod s pravdepodobnosťou ${@0}$, hody sú nezávislé. Hádže {@1}-krát; $X$ je počet premenených hodov.": "Bir basketbolcu serbest atışı ${@0}$ olasılıkla sayıya çeviriyor, atışlar bağımsız. {@1} kez atıyor; $X$ sayıya çevrilen atışların sayısıdır.",
  "Biela a čierna môžu prísť v dvoch poradiach. Pri výbere naraz radšej počítaj neusporiadané dvojice: bielu a čiernu guľu vyberáš nezávisle.": "Beyaz ve siyah iki sırada gelebilir. Aynı anda seçimde sırasız ikilileri saymak daha iyidir: beyaz ve siyah topu bağımsız seçersin.",
  "Binomické rozdelenie": "Binom dağılımı",
  "Bod $T[{@0}; {@1}]$ leží na kružnici $k: {@2}$. Dotyčnica ku kružnici v bode $T$ má rovnicu ${@3}+c=0$. Vypočítaj $c$.": "$T[{@0}; {@1}]$ noktası $k: {@2}$ çemberi üzerindedir. Çembere $T$ noktasında çizilen teğetin denklemi ${@3}+c=0$'dır. $c$'yi hesapla.",
  "CAB": "CAB",
  "CAD": "CAD",
  "CAE": "CAE",
  "CAF": "CAF",
  "CAG": "CAG",
  "CAH": "CAH",
  "CBA": "CBA",
  "CBD": "CBD",
  "CBE": "CBE",
  "CBF": "CBF",
  "CBG": "CBG",
  "CBH": "CBH",
  "CDA": "CDA",
  "CDB": "CDB",
  "CDE": "CDE",
  "CDF": "CDF",
  "CDG": "CDG",
  "CDH": "CDH",
  "CEA": "CEA",
  "CEB": "CEB",
  "CED": "CED",
  "CEF": "CEF",
  "CEG": "CEG",
  "CEH": "CEH",
  "CFA": "CFA",
  "CFD": "CFD",
  "CFE": "CFE",
  "CFG": "CFG",
  "CGA": "CGA",
  "CGB": "CGB",
  "CGD": "CGD",
  "CGF": "CGF",
  "CGH": "CGH",
  "CHB": "CHB",
  "CHD": "CHD",
  "CHE": "CHE",
  "CHF": "CHF",
  "CHG": "CHG",
  "Celé čísla ${@0}, \\dots, {@1}$ — je ich ${@2}$.": "${@0}, \\dots, {@1}$ tam sayıları — ${@2}$ tane.",
  "Chlapcov a dievčatá vyberáš nezávisle (kombinácie, lebo na poradí nezáleží) a počty vynásobíš.": "Erkek ve kız öğrencileri bağımsız seçersin (sıra önemli olmadığından kombinasyonlar) ve sayıları çarparsın.",
  "DAB": "DAB",
  "DAC": "DAC",
  "DAE": "DAE",
  "DAF": "DAF",
  "DAG": "DAG",
  "DAH": "DAH",
  "DBA": "DBA",
  "DBC": "DBC",
  "DBE": "DBE",
  "DBF": "DBF",
  "DBG": "DBG",
  "DBH": "DBH",
  "DCA": "DCA",
  "DCB": "DCB",
  "DCE": "DCE",
  "DCF": "DCF",
  "DCG": "DCG",
  "DCH": "DCH",
  "DEA": "DEA",
  "DEB": "DEB",
  "DEC": "DEC",
  "DEF": "DEF",
  "DEG": "DEG",
  "DEH": "DEH",
  "DFA": "DFA",
  "DFB": "DFB",
  "DFC": "DFC",
  "DFE": "DFE",
  "DFG": "DFG",
  "DFH": "DFH",
  "DGA": "DGA",
  "DGB": "DGB",
  "DGC": "DGC",
  "DGE": "DGE",
  "DGF": "DGF",
  "DGH": "DGH",
  "DHB": "DHB",
  "DHC": "DHC",
  "DHE": "DHE",
  "DHF": "DHF",
  "DHG": "DHG",
  "Dané sú funkcie $f(x)={@0}$ a $g(x)={@1}$. Vypočítaj $({@2})({@3})$.": "$f(x)={@0}$ ve $g(x)={@1}$ fonksiyonları veriliyor. $({@2})({@3})$ değerini hesapla.",
  "Daný je súbor údajov: ${@0}$. Urči jeho {@1}.": "Bir veri kümesi veriliyor: ${@0}$. Bu veri kümesinin {@1} nedir?",
  "Definičný obor $(0; \\infty)$ nie je súmerný podľa nuly, funkcia preto nemôže byť párna ani nepárna.": "$(0; \\infty)$ tanım kümesi sıfıra göre simetrik değildir, bu yüzden fonksiyon ne çift ne de tek olabilir.",
  "Delíš záporným číslom, znak nerovnosti sa otočí.": "Negatif bir sayıya bölüyorsun, eşitsizliğin yönü değişir.",
  "Derivácia je $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. Koľko je $f'({@4})$?": "Türev $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. $f'({@4})$ kaçtır?",
  "Derivácia podielu: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. V bode ${@7}$: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.": "Bölümün türevi: $f'(x)=\\dfrac{{@0}({@1})-({@2})\\cdot {@3}}{({@4})^2}=\\dfrac{{@5}}{({@6})^2}$. ${@7}$ noktasında: $f'({@8})=\\dfrac{{@9}}{{@10}^2}={@11}$.",
  "Derivácia sínusu je kosínus bez mínusu: $(\\sin x)'=\\cos x$. Mínus patrí k derivácii kosínusu.": "Sinüsün türevi eksisiz kosinüstür: $(\\sin x)'=\\cos x$. Eksi, kosinüsün türevine aittir.",
  "Derivácia súčinu nie je súčin derivácií: $(u\\cdot v)'=u'v+uv'$, nie $u'\\cdot v'$.": "Çarpımın türevi türevlerin çarpımı değildir: $(u\\cdot v)'=u'v+uv'$, $u'\\cdot v'$ değil.",
  "Derivácia súčinu: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. Keďže $\\mathrm{e}^0=1$, je $f'(0)={@3}$.": "Çarpımın türevi: $f'(x)={@0}\\cdot\\mathrm{e}^{x}+({@1})\\,\\mathrm{e}^{x}=({@2})\\,\\mathrm{e}^{x}$. $\\mathrm{e}^0=1$ olduğundan $f'(0)={@3}$.",
  "Derivácia súčinu: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. Keďže $\\ln 1=0$, je $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.": "Çarpımın türevi: $f'(x)={@0}\\ln x+({@1})\\cdot\\frac{1}{x}$. $\\ln 1=0$ olduğundan $f'(1)=0+({@2}{@3})\\cdot 1={@4}$.",
  "Derivácia zloženej funkcie: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. V bode ${@4}$ je vnútorná funkcia ${@5}\\cdot {@6}{@7}={@8}$, teda $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.": "Bileşke fonksiyonun türevi: $f'(x)={@0}({@1})^{{@2}}\\cdot {@3}$. ${@4}$ noktasında iç fonksiyon ${@5}\\cdot {@6}{@7}={@8}$, yani $f'({@9})={@10}\\cdot {@11}^{{@12}}\\cdot {@13}={@14}$.",
  "Determinant sústavy je $m^2-{@0}$, je nulový pre $m=\\pm {@1}$ (inak má sústava jediné riešenie). Pre $m={@2}$ majú rovnice ľavé strany úmerné, ale pravé strany ${@3}$ a ${@4}$ nie: priamky sú rovnobežné rôzne, riešenie neexistuje. Pre $m={@5}$ je druhá rovnica $(-1)$-násobkom prvej: priamky splývajú, riešení je nekonečne veľa. Odpoveď: $m={@6}$.": "Sistemin determinantı $m^2-{@0}$ olur, $m=\\pm {@1}$ için sıfırdır (aksi hâlde sistemin tek çözümü vardır). $m={@2}$ için denklemlerin sol tarafları orantılıdır, ama ${@3}$ ve ${@4}$ sağ tarafları değildir: doğrular paralel ve farklıdır, çözüm yoktur. $m={@5}$ için ikinci denklem birincinin $(-1)$ katıdır: doğrular çakışır, sonsuz sayıda çözüm vardır. Cevap: $m={@6}$.",
  "Determinant z vektorov $\\vec{AB}$ a $\\vec{AC}$ dáva obsah rovnobežníka. Obsah trojuholníka je jeho polovica.": "$\\vec{AB}$ ve $\\vec{AC}$ vektörlerinin determinantı paralelkenarın alanını verir. Üçgenin alanı onun yarısıdır.",
  "Diskriminant je $D=b^2-4ac$. Nezabudni na štvorku pred súčinom $ac$.": "Diskriminant $D=b^2-4ac$'dir. $ac$ çarpımının önündeki 4'ü unutma.",
  "Diskriminant je $D=b^2-4ac$. Z rovnice $D=0$ treba $c$ ešte vydeliť štyrmi.": "Diskriminant $D=b^2-4ac$'dir. $D=0$ denkleminden $c$'yi bir de 4'e bölmek gerekir.",
  "Do vnútra intervalu patrí {@0}.": "Aralığın içine {@0} düşer.",
  "Do vzorca pre plášť $\\pi rs$ patrí strana kužeľa $s$, nie výška $v$.": "Yanal yüzey formülü $\\pi rs$'ye $v$ yüksekliği değil, koninin $s$ ana doğrusu girer.",
  "Dosadením $y={@0}$ dostaneš rovnicu ${@1}=0$. Aký je jej diskriminant?": "$y={@0}$ koyarak ${@1}=0$ denklemini elde edersin. Diskriminantı nedir?",
  "Dosadením dostaneme $\\frac{0}{0}$. Menovateľ je rozdiel štvorcov: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.": "Yerine koyunca $\\frac{0}{0}$ elde ederiz. Payda bir kareler farkıdır: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Sadeleştirdikten sonra $\\lim_{x\\to {@3}}\\frac{1}{\\sqrt{x}+{@4}}=\\frac{1}{{@5}+{@6}}=\\frac{1}{{@7}}$.",
  "Dosadením vyjde $\\frac{0}{0}$, čo nie je nula, ale neurčitý výraz. Menovateľ rozlož ako rozdiel štvorcov a vykráť.": "Yerine koyunca $\\frac{0}{0}$ çıkıyor; bu sıfır değil, belirsiz bir ifadedir. Paydayı kareler farkı olarak çarpanlarına ayır ve sadeleştir.",
  "Dosadením vyšlo $\\frac{0}{0}$, a to nie je nula, ale neurčitý výraz. Čitateľa rozlož na súčin a vykráť.": "Yerine koyunca $\\frac{0}{0}$ çıktı; bu sıfır değil, belirsiz bir ifadedir. Payı çarpanlarına ayır ve sadeleştir.",
  "Dosadil si stred kružnice. Dotyčnica stredom neprechádza, prechádza bodom dotyku $T$.": "Çemberin merkezini yerine koydun. Teğet merkezden geçmez, $T$ değme noktasından geçer.",
  "Dosadiť sa nedá, menovateľ sa blíži k nule. Deliť číslom blízkym nule dáva v absolútnej hodnote veľmi veľké čísla.": "Yerine koyamazsın, payda sıfıra yaklaşıyor. Sıfıra yakın bir sayıya bölmek mutlak değerce çok büyük sayılar verir.",
  "Dosadíme ${@0}^2 x=1-{@1}^2 x$ a upravíme: ${@2}{@3}{@4}=0$.": "${@0}^2 x=1-{@1}^2 x$ koyar ve düzenleriz: ${@2}{@3}{@4}=0$.",
  "Dosaď $-x$ namiesto $x$ a porovnaj $f(-x)$ s $f(x)$ a s $-f(x)$. Over aj, či je definičný obor súmerný podľa nuly.": "$x$ yerine $-x$ koy ve $f(-x)$'i $f(x)$ ile ve $-f(x)$ ile karşılaştır. Tanım kümesinin sıfıra göre simetrik olup olmadığını da kontrol et.",
  "Dosaď bod $P$ do výrazu ${@0}$. Akú hodnotu dostaneš?": "$P$ noktasını ${@0}$ ifadesinde yerine koy. Hangi değeri elde edersin?",
  "Dosaď bod ${@0}$ do ľavej strany rovnice roviny. Aká je absolútna hodnota výsledku?": "${@0}$ noktasını düzlem denkleminin sol tarafında yerine koy. Sonucun mutlak değeri nedir?",
  "Dosaď súradnice bodu $P$ do rovnice roviny a vyjadri $d$.": "$P$ noktasının koordinatlarını düzlem denkleminde yerine koy ve $d$'yi bul.",
  "Dotyčnica je kolmá na polomer $ST$. Do zadanej rovnice dosaď súradnice bodu $T$.": "Teğet $ST$ yarıçapına diktir. Verilen denklemde $T$ noktasının koordinatlarını yerine koy.",
  "Druhá mocnina pomeru dĺžok platí pre povrch. Zachováva sa však objem, a ten závisí od tretej mocniny.": "Uzunluk oranının karesi yüzey alanı için geçerlidir. Ancak korunan şey hacimdir ve o, oranın küpüne bağlıdır.",
  "Druhá nerovnica má riešenie $x\\le d$. Aké je číslo $d$?": "İkinci eşitsizliğin çözümü $x\\le d$'dir. $d$ sayısı nedir?",
  "Druhá súradnica inflexného bodu je funkčná hodnota $f({@0})$, nie hodnota $f''({@1})$.": "Dönüm noktasının ikinci koordinatı $f''({@1})$ değeri değil, $f({@0})$ fonksiyon değeridir.",
  "Druhý koreň čitateľa je $-c$; súčin koreňov je ${@0}$.": "Payın ikinci kökü $-c$'dir; köklerin çarpımı ${@0}$ olur.",
  "Dvaja strelci vystrelia nezávisle po jednej rane. Prvý zasiahne terč s pravdepodobnosťou ${@0}$, druhý s pravdepodobnosťou ${@1}$. Aká je pravdepodobnosť, že {@2}?": "İki atıcı birbirinden bağımsız olarak birer atış yapıyor. Birincisi hedefi ${@0}$ olasılıkla, ikincisi ${@1}$ olasılıkla vuruyor. {@2} olasılığı nedir?",
  "Dvojnásobný koreň je pri $D=0$: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.": "Çift katlı kök $D=0$ olduğunda vardır: $p^2-4\\cdot {@0}=0 \\Rightarrow p^2={@1} \\Rightarrow p=\\pm {@2}$.",
  "Dĺžky sa neodčítajú priamo. Polomer gule je prepona pravouhlého trojuholníka, použi Pytagorovu vetu.": "Uzunluklar doğrudan çıkarılmaz. Kürenin yarıçapı bir dik üçgenin hipotenüsüdür, Pisagor teoremini kullan.",
  "Dĺžky strán pravouhlého trojuholníka tvoria aritmetickú postupnosť a jeho obvod je ${@0}\\,\\text{cm}$. Vypočítaj {@1}.": "Bir dik üçgenin kenar uzunlukları bir aritmetik dizi oluşturuyor ve çevresi ${@0}\\,\\text{cm}$. {@1} hesapla.",
  "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">najpravdepodobnejšie k = {@3}</span>": "E(X) = np = {@0} · D(X) = np(1 − p) = {@1} · σ = {@2} · <span class=\"c-ok\">en olası k = {@3}</span>",
  "E; D": "E; D",
  "EAB": "EAB",
  "EAC": "EAC",
  "EAD": "EAD",
  "EAF": "EAF",
  "EAG": "EAG",
  "EAH": "EAH",
  "EBA": "EBA",
  "EBC": "EBC",
  "EBD": "EBD",
  "EBF": "EBF",
  "EBG": "EBG",
  "EBH": "EBH",
  "ECA": "ECA",
  "ECB": "ECB",
  "ECD": "ECD",
  "ECF": "ECF",
  "ECG": "ECG",
  "ECH": "ECH",
  "EDA": "EDA",
  "EDB": "EDB",
  "EDC": "EDC",
  "EDF": "EDF",
  "EDG": "EDG",
  "EDH": "EDH",
  "EFA": "EFA",
  "EFB": "EFB",
  "EFC": "EFC",
  "EFD": "EFD",
  "EFG": "EFG",
  "EFH": "EFH",
  "EGB": "EGB",
  "EGC": "EGC",
  "EGD": "EGD",
  "EGF": "EGF",
  "EGH": "EGH",
  "EHA": "EHA",
  "EHB": "EHB",
  "EHC": "EHC",
  "EHD": "EHD",
  "EHF": "EHF",
  "EHG": "EHG",
  "Exponenciálna funkcia a k nej inverzná logaritmická funkcia": "Üstel fonksiyon ve onun tersi olan logaritma fonksiyonu",
  "FAB": "FAB",
  "FAC": "FAC",
  "FAD": "FAD",
  "FAE": "FAE",
  "FAG": "FAG",
  "FAH": "FAH",
  "FBA": "FBA",
  "FBC": "FBC",
  "FBD": "FBD",
  "FBE": "FBE",
  "FBG": "FBG",
  "FBH": "FBH",
  "FCA": "FCA",
  "FCB": "FCB",
  "FCD": "FCD",
  "FCE": "FCE",
  "FCG": "FCG",
  "FCH": "FCH",
  "FDA": "FDA",
  "FDC": "FDC",
  "FDE": "FDE",
  "FDG": "FDG",
  "FDH": "FDH",
  "FEA": "FEA",
  "FEB": "FEB",
  "FEC": "FEC",
  "FED": "FED",
  "FEG": "FEG",
  "FEH": "FEH",
  "FGA": "FGA",
  "FGB": "FGB",
  "FGC": "FGC",
  "FGD": "FGD",
  "FGE": "FGE",
  "FGH": "FGH",
  "FHA": "FHA",
  "FHB": "FHB",
  "FHC": "FHC",
  "FHD": "FHD",
  "FHE": "FHE",
  "FHG": "FHG",
  "Funkcia $f(x)=\\dfrac{{@0}}{{@1}}$ je prostá. Vypočítaj $f^{-1}\\!\\left({@2}\\right)$.": "$f(x)=\\dfrac{{@0}}{{@1}}$ fonksiyonu birebirdir. $f^{-1}\\!\\left({@2}\\right)$ değerini hesapla.",
  "Funkcia $f(x)={@0}$ má práve jedno {@1}. Nájdi bod, v ktorom ho nadobúda: zadaj $x$ a $f(x)$ (napr. 2; -5).": "$f(x)={@0}$ fonksiyonunun tam olarak bir {@1} vardır. Bu değeri aldığı noktayı bul: $x$ ve $f(x)$ gir (örn. 2; -5).",
  "Funkcia je konvexná tam, kde $f''(x)&gt;0$. Vypočítaj druhú deriváciu a vyrieš lineárnu nerovnicu.": "Fonksiyon $f''(x)&gt;0$ olan yerde konvekstir. İkinci türevi hesapla ve doğrusal eşitsizliği çöz.",
  "Funkcie sú rôzne, takže záleží na tom, kto je predseda a kto pokladník. Ide o variácie, nie kombinácie.": "Görevler farklıdır, bu yüzden kimin başkan, kimin sayman olduğu önemlidir. Bu kombinasyon değil, varyasyondur.",
  "GAB": "GAB",
  "GAC": "GAC",
  "GAD": "GAD",
  "GAE": "GAE",
  "GAH": "GAH",
  "GBA": "GBA",
  "GBC": "GBC",
  "GBD": "GBD",
  "GBE": "GBE",
  "GBF": "GBF",
  "GBH": "GBH",
  "GCA": "GCA",
  "GCB": "GCB",
  "GCD": "GCD",
  "GCH": "GCH",
  "GDA": "GDA",
  "GDB": "GDB",
  "GDC": "GDC",
  "GDE": "GDE",
  "GDF": "GDF",
  "GDH": "GDH",
  "GEA": "GEA",
  "GEB": "GEB",
  "GEC": "GEC",
  "GED": "GED",
  "GEH": "GEH",
  "GFA": "GFA",
  "GFB": "GFB",
  "GFC": "GFC",
  "GFD": "GFD",
  "GFE": "GFE",
  "GFH": "GFH",
  "GHA": "GHA",
  "GHB": "GHB",
  "GHC": "GHC",
  "GHD": "GHD",
  "Graf": "Grafik",
  "Graf funkcie sin x / x s dierou v bode 0": "0 noktasında boşluğu olan sin x / x fonksiyonunun grafiği",
  "Graf funkcie x na tretiu mínus 3x s extrémami": "Ekstremumları gösterilen x küp eksi 3x fonksiyonunun grafiği",
  "Graf racionálnej funkcie s asymptotami": "Asimptotları gösterilen rasyonel fonksiyonun grafiği",
  "Grafy funkcií e na x a ln x s dotyčnicami": "Teğetleriyle birlikte e üzeri x ve ln x fonksiyonlarının grafikleri",
  "Gule ťaháme naraz, teda bez vrátenia. Po vytiahnutí bielej je v urne o jednu bielu menej.": "Topları aynı anda, yani geri koymadan çekiyoruz. Beyaz top çekildikten sonra torbada bir beyaz top eksiktir.",
  "Guľu s polomerom $r={@0}\\,\\text{cm}$ pretne rovina vo vzdialenosti ${@1}\\,\\text{cm}$ od stredu gule. Vypočítaj {@2}": "Yarıçapı $r={@0}\\,\\text{cm}$ olan bir küreyi, kürenin merkezinden ${@1}\\,\\text{cm}$ uzaklıktaki bir düzlem kesiyor. {@2}",
  "HAB": "HAB",
  "HAC": "HAC",
  "HAD": "HAD",
  "HAE": "HAE",
  "HAF": "HAF",
  "HAG": "HAG",
  "HBA": "HBA",
  "HBC": "HBC",
  "HBD": "HBD",
  "HBE": "HBE",
  "HBF": "HBF",
  "HBG": "HBG",
  "HCA": "HCA",
  "HCB": "HCB",
  "HCD": "HCD",
  "HCE": "HCE",
  "HCF": "HCF",
  "HCG": "HCG",
  "HDA": "HDA",
  "HDB": "HDB",
  "HDC": "HDC",
  "HDE": "HDE",
  "HDF": "HDF",
  "HDG": "HDG",
  "HEA": "HEA",
  "HEB": "HEB",
  "HEC": "HEC",
  "HED": "HED",
  "HEF": "HEF",
  "HEG": "HEG",
  "HFA": "HFA",
  "HFB": "HFB",
  "HFC": "HFC",
  "HFD": "HFD",
  "HFE": "HFE",
  "HFG": "HFG",
  "HGB": "HGB",
  "HGC": "HGC",
  "HGD": "HGD",
  "HGE": "HGE",
  "HGF": "HGF",
  "Hodnota ${@0}$ je síce koreňom $V'(x)$, ale nepatrí do prípustného intervalu: krabica by nemala žiadne dno.": "${@0}$ değeri $V'(x)$'in bir kökü olsa da uygun aralıkta değildir: kutunun hiç tabanı olmazdı.",
  "Hodnota ${@0}$ leží mimo $\\langle -1; 1\\rangle$, tá riešenie nedáva.": "${@0}$ değeri $\\langle -1; 1\\rangle$ aralığının dışındadır, çözüm vermez.",
  "Hodnotu inverznej funkcie nájdeš bez jej predpisu: hľadáš $x$, pre ktoré $f(x)$ dá zadané číslo.": "Ters fonksiyonun değerini kuralını bilmeden bulabilirsin: $f(x)$'in verilen sayıyı verdiği $x$'i arıyorsun.",
  "Hodnoty sú celé čísla získané počítaním, medzi dvoma susednými nie je iná možná hodnota.": "Değerler sayarak elde edilen tam sayılardır, iki komşu değer arasında başka olası değer yoktur.",
  "Hodnoty sú slová (kategórie), nie čísla.": "Değerler sayı değil, sözcüklerdir (kategoriler).",
  "Hodnoty tohto znaku sú slová (kategórie), nie čísla.": "Bu değişkenin değerleri sayı değil, sözcüklerdir (kategoriler).",
  "Hodnoty tohto znaku sú čísla, takže znak je kvantitatívny.": "Bu değişkenin değerleri sayıdır, yani değişken niceldir.",
  "Hodnoty získavame meraním a môžu byť ľubovoľným číslom z nejakého intervalu.": "Değerleri ölçerek elde ederiz ve bir aralıktaki herhangi bir sayı olabilirler.",
  "Hodnoty získavame meraním, môžu byť ľubovoľným číslom z nejakého intervalu (aj desatinným).": "Değerleri ölçerek elde ederiz, bir aralıktaki herhangi bir sayı (ondalık da) olabilirler.",
  "Hodnoty získavame počítaním, sú to len celé čísla. Medzi dvoma susednými hodnotami nie je iná možná hodnota.": "Değerleri sayarak elde ederiz, yalnızca tam sayıdırlar. İki komşu değer arasında başka olası değer yoktur.",
  "Hodíme naraz dvoma hracími kockami. Aká je pravdepodobnosť, že {@0}? {@1}": "İki zarı aynı anda atıyoruz. {@0} olasılığı nedir? {@1}",
  "Hranica intervalu konvexnosti je inflexný bod, v ktorom $f''(x)=0$. Over, kde je druhá derivácia nulová.": "Konvekslik aralığının sınırı $f''(x)=0$ olan dönüm noktasıdır. İkinci türevin nerede sıfır olduğunu kontrol et.",
  "Hranice integrálu sú nulové body paraboly. Funkcia je párna, môžeš počítať $2\\int_0^{m}$.": "İntegralin sınırları parabolün sıfır noktalarıdır. Fonksiyon çifttir, $2\\int_0^{m}$ olarak hesaplayabilirsin.",
  "Hranol má dve podstavy, hornú aj dolnú. Obsah podstavy započítaj dvakrát.": "Prizmanın alt ve üst olmak üzere iki tabanı vardır. Taban alanını iki kez say.",
  "Hrany sa zväčšia o ${@0}\\,\\%$, {@1} však rastie rýchlejšie: koeficient podobnosti treba umocniť.": "Ayrıtlar ${@0}\\,\\%$ büyür, ancak {@1} daha hızlı artar: benzerlik oranının kuvvetini almak gerekir.",
  "Hráč hodí hracou kockou {@0}-krát. Aká je pravdepodobnosť, že aspoň raz padne šestka? Výsledok zaokrúhli na 3 desatinné miesta.": "Bir oyuncu zarı {@0} kez atıyor. En az bir kez altı gelme olasılığı nedir? Sonucu 3 ondalık basamağa yuvarla.",
  "Hráč hodí {@0}-krát hracou kockou. Náhodná premenná $X$ je počet hodov, v ktorých padla šestka.": "Bir oyuncu zarı {@0} kez atıyor. $X$ rastgele değişkeni, altı gelen atışların sayısıdır.",
  "Hráč zapisoval počet bodov v jednotlivých zápasoch: ${@0}$. Aký je modus tohto súboru?": "Bir oyuncu maçlardaki sayılarını not etti: ${@0}$. Bu veri kümesinin modu nedir?",
  "Hľadisko letného amfiteátra má v prvom rade {@0} {@1} a každý ďalší rad má o {@2} {@3} viac. Koľko radov treba najmenej postaviť, aby bolo spolu aspoň {@4} sedadiel?": "Bir açık hava amfitiyatrosunun tribününde ilk sırada {@0} {@1} var ve sonraki her sırada {@2} {@3} daha fazla var. Toplam en az {@4} koltuk olması için en az kaç sıra yapmak gerekir?",
  "Hľadá sa hodnota funkcie, nie bod $x$, v ktorom ju nadobúda.": "Aranan, fonksiyonun değeridir, onu aldığı $x$ noktası değil.",
  "Hľadáme $t$ tak, aby $A+t\\vec{u}=Q$. Z prvej rovnice {@0} je $t={@1}$. Ďalšie rovnice: {@2} a {@3} — {@4}": "$A+t\\vec{u}=Q$ olacak şekilde $t$'yi arıyoruz. Birinci denklem {@0} ile $t={@1}$. Diğer denklemler: {@2} ve {@3} — {@4}",
  "Hľadáme najmenšie prirodzené $n$, pre ktoré ${@0}^n\\ge {@1}$. Logaritmovaním: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, teda $n={@5}$.": "${@0}^n\\ge {@1}$ olan en küçük doğal $n$'yi arıyoruz. Logaritma alarak: $n\\ge\\dfrac{\\ln {@2}}{\\ln {@3}}\\approx {@4}$, yani $n={@5}$.",
  "Ide o permutácie: ${@0}!={@1}$.": "Bunlar permütasyonlardır: ${@0}!={@1}$.",
  "Inflexný bod hľadaj tam, kde $f''(x)=0$ a druhá derivácia mení znamienko.": "Dönüm noktasını $f''(x)=0$ olan ve ikinci türevin işaret değiştirdiği yerde ara.",
  "Integroval si len od $0$ do ${@0}$, to je polovica útvaru. Dolná hranica je druhý nulový bod paraboly.": "Yalnızca $0$ ile ${@0}$ arasında integral aldın, bu şeklin yarısıdır. Alt sınır parabolün diğer sıfır noktasıdır.",
  "Integruj ako mocninu, $\\frac{u^{n+1}}{n+1}$, a výsledok vydeľ koeficientom pri $x$ vnútri zátvorky.": "Kuvvet olarak integral al, $\\frac{u^{n+1}}{n+1}$, ve sonucu parantez içindeki $x$'in katsayısına böl.",
  "Integrál mocniny je $\\frac{u^{{@0}}}{{@1}}$: exponent sa zvýši o jedna a zároveň sa ním delí.": "Kuvvetin integrali $\\frac{u^{{@0}}}{{@1}}$'dir: üs bir artar ve aynı zamanda ona bölünür.",
  "Inverznou funkciou k exponenciálnej je logaritmická. Hľadáš $x$, pre ktoré ${@0}^{{@1}}{@2}={@3}$.": "Üstel fonksiyonun tersi logaritma fonksiyonudur. ${@0}^{{@1}}{@2}={@3}$ olan $x$'i arıyorsun.",
  "Inverzná funkcia k funkcii $f(x)={@0}$ má tvar $f^{-1}(x)=kx+q$. Zadaj $k$ a $q$ (napr. 1/2; -3).": "$f(x)={@0}$ fonksiyonunun ters fonksiyonu $f^{-1}(x)=kx+q$ biçimindedir. $k$ ve $q$ değerlerini gir (örn. 1/2; -3).",
  "Inverzná funkcia vráti operácie v opačnom poradí: násobenie sa zmení na delenie. Vymeň $x$ a $y$ a vyjadri $y$.": "Ters fonksiyon işlemleri ters sırada geri alır: çarpma bölmeye dönüşür. $x$ ile $y$'nin yerini değiştir ve $y$'yi yalnız bırak.",
  "Inverzná funkcia: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.": "Ters fonksiyon: $x={@0}^{y{@1}}{@2} \\Rightarrow {@3}^{y{@4}}={@5} \\Rightarrow f^{-1}(x)=\\log_{{@6}}({@7}){@8}$. $f^{-1}({@9})=\\log_{{@10}}{@11}{@12}={@13}{@14}={@15}$.",
  "Jav „aspoň jeden úspech“ je opačný k javu „ani jeden úspech“.": "„En az bir başarı“ olayı, „hiç başarı yok“ olayının tümleyenidir.",
  "Jav „aspoň jedna biela“ zahŕňa aj prípad, keď je jedna biela a jedna čierna. Použi opačný jav „obe čierne“.": "„En az bir beyaz“ olayı, bir beyaz ve bir siyah olduğu durumu da içerir. „İkisi de siyah“ tümleyen olayını kullan.",
  "Javy „prvý zasiahne“ a „druhý zasiahne“ môžu nastať súčasne: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Alebo použi opačný jav.": "„Birincisi vurur“ ve „ikincisi vurur“ olayları aynı anda gerçekleşebilir: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Ya da tümleyen olayı kullan.",
  "Je daná funkcia $f(x)={@0}^{{@1}}{@2}$. Vypočítaj $f^{-1}({@3})$.": "$f(x)={@0}^{{@1}}{@2}$ fonksiyonu veriliyor. $f^{-1}({@3})$ değerini hesapla.",
  "Je funkcia $f(x)={@0}$ párna, nepárna, alebo ani jedno?": "$f(x)={@0}$ fonksiyonu çift mi, tek mi, yoksa hiçbiri mi?",
  "Jedna osoba môže mať najviac jednu funkciu, ďalšiu funkciu už vyberáš len zo zvyšných ľudí.": "Bir kişinin en fazla bir görevi olabilir, sonraki görevi yalnızca kalan kişiler arasından seçersin.",
  "Jedna súradnica nestačí: to isté $t$ musí vyhovovať všetkým trom rovniciam. Over aj $y$ a $z$.": "Tek bir koordinat yetmez: aynı $t$ üç denklemin hepsini sağlamalıdır. $y$ ve $z$'yi de kontrol et.",
  "Jedného človeka posadíme na ľubovoľné miesto (otočenia nerozlišujeme), ostatných {@0} usporiadame: $({@1}-1)!={@2}!={@3}$.": "Bir kişiyi herhangi bir yere oturturuz (dönmeleri ayırt etmeyiz), diğer {@0} kişiyi sıralarız: $({@1}-1)!={@2}!={@3}$.",
  "KAJAK": "KAJAK",
  "Kandidáti sú stacionárne body vnútri intervalu a oba krajné body. Vypočítaj v nich funkčné hodnoty a porovnaj ich.": "Adaylar, aralığın içindeki kritik noktalar ve iki uç noktadır. Bu noktalardaki fonksiyon değerlerini hesapla ve karşılaştır.",
  "Každé podanie rúk je dvojica ľudí, na poradí nezáleží: $\\binom{n}{2}$. Zostav kvadratickú rovnicu.": "Her tokalaşma bir kişi ikilisidir, sıra önemli değildir: $\\binom{n}{2}$. İkinci dereceden bir denklem kur.",
  "Každú uhlopriečku si započítal dvakrát, z oboch jej koncových vrcholov. Výsledok vydeľ dvoma.": "Her köşegeni, iki uç köşesinden olmak üzere iki kez saydın. Sonucu 2'ye böl.",
  "Každú známku vynásob počtom žiakov, ktorí ju dostali, výsledky sčítaj a vydeľ počtom všetkých žiakov.": "Her notu, onu alan öğrenci sayısıyla çarp, sonuçları topla ve tüm öğrencilerin sayısına böl.",
  "Každý rok sa suma vynásobí číslom $1+\\frac{p}{100}$ — ide o geometrickú postupnosť.": "Para her yıl $1+\\frac{p}{100}$ sayısıyla çarpılır — bu bir geometrik dizidir.",
  "Každý vrchol spojíme s $n-3$ nesusednými vrcholmi a každú uhlopriečku tak započítame dvakrát: $\\frac{n(n-3)}{2}$. {@0}": "Her köşeyi komşu olmayan $n-3$ köşeyle birleştiririz ve böylece her köşegeni iki kez sayarız: $\\frac{n(n-3)}{2}$. {@0}",
  "Keby boli všetky písmená rôzne, bolo by ich $n!$. Výmena rovnakých písmen nové slovo nedá, preto vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Tüm harfler farklı olsaydı $n!$ tane olurdu. Aynı harflerin yer değiştirmesi yeni kelime vermez, bu yüzden tekrar eden harflerin tekrar sayılarının faktöriyellerine böl.",
  "Kocka $ABCDEFGH$ má hranu $a={@0}\\,\\text{cm}$.": "$ABCDEFGH$ küpünün ayrıtı $a={@0}\\,\\text{cm}$.",
  "Kocka ABCDEFGH s vyznačenými priamkami": "Doğruları işaretlenmiş ABCDEFGH küpü",
  "Kocka s telesovou uhlopriečkou a uhlom s rovinou podstavy": "Cisim köşegeni ve onun taban düzlemiyle yaptığı açı gösterilen küp",
  "Kocky rozlišujeme: $[1; 2]$ a $[2; 1]$ sú dva rôzne výsledky. Započítaj obe poradia.": "Zarları ayırt ederiz: $[1; 2]$ ve $[2; 1]$ iki farklı sonuçtur. İki sırayı da say.",
  "Koeficient podobnosti je $k={@0}$. Koľkokrát sa zväčší {@1}? Zadaj číslo na 4 desatinné miesta.": "Benzerlik oranı $k={@0}$. {@1} kaç kat büyür? Sayıyı 4 ondalık basamakla gir.",
  "Koeficient podobnosti je $k={@0}$. {@1} sa zmení $k^{{@2}}={@3}$-krát, teda sa zväčší o ${@4}\\,\\%$.": "Benzerlik oranı $k={@0}$. {@1} $k^{{@2}}={@3}$ kat değişir, yani ${@4}\\,\\%$ büyür.",
  "Konvexný mnohouholník má {@0} uhlopriečok. Koľko má vrcholov?": "Bir dışbükey çokgenin {@0} köşegeni var. Kaç köşesi vardır?",
  "Koreň $t_2={@0}$ je záporný a rovnica ${@1}^{x}={@2}$ nemá riešenie.": "$t_2={@0}$ kökü negatiftir ve ${@1}^{x}={@2}$ denkleminin çözümü yoktur.",
  "Koľko celých čísel ju spĺňa?": "Onu kaç tam sayı sağlar?",
  "Koľko celých čísel leží v prieniku?": "Kesişimde kaç tam sayı vardır?",
  "Koľko eur bude na účte po {@0} rokoch? Výsledok zaokrúhli na centy.": "{@0} yıl sonra hesapta kaç avro olur? Sonucu kuruşa yuvarla.",
  "Koľko je $f'(0)$?": "$f'(0)$ kaçtır?",
  "Koľko je $f'({@0})$? Zadaj celé číslo alebo zlomok.": "$f'({@0})$ kaçtır? Tam sayı ya da kesir gir.",
  "Koľko je $x=f^{-1}({@0})$?": "$x=f^{-1}({@0})$ kaçtır?",
  "Koľko je ${@0}!$?": "${@0}!$ kaçtır?",
  "Koľko je spolu možností?": "Toplam kaç olasılık vardır?",
  "Koľko je trojíc, v ktorých sú len chlapci?": "Yalnızca erkeklerden oluşan kaç üçlü vardır?",
  "Koľko je všetkých trojíc?": "Tüm üçlülerin sayısı kaçtır?",
  "Koľko je všetkých výberov dvoch gúľ?": "İki topun tüm seçimlerinin sayısı kaçtır?",
  "Koľko percent to je?": "Bu yüzde kaçtır?",
  "Koľko percent žiakov odpovedalo „autobus“?": "Öğrencilerin yüzde kaçı „otobüs“ cevabını verdi?",
  "Koľko percent žiakov odpovedalo „auto“?": "Öğrencilerin yüzde kaçı „araba“ cevabını verdi?",
  "Koľko percent žiakov odpovedalo „bicykel“?": "Öğrencilerin yüzde kaçı „bisiklet“ cevabını verdi?",
  "Koľko percent žiakov odpovedalo „pešo“?": "Öğrencilerin yüzde kaçı „yürüyerek“ cevabını verdi?",
  "Koľko percent žiakov odpovedalo „vlak“?": "Öğrencilerin yüzde kaçı „tren“ cevabını verdi?",
  "Koľko percent žiakov odpovedalo „{@0}“?": "Öğrencilerin yüzde kaçı „{@0}“ cevabını verdi?",
  "Koľko rokov má nový člen?": "Yeni üye kaç yaşında?",
  "Koľko rôznych „slov“ (aj nezmyselných) vznikne preusporiadaním všetkých písmen slova {@0}?": "{@0} kelimesinin tüm harflerinin yerleri değiştirilerek kaç farklı „kelime“ (anlamsız olanlar da dahil) oluşur?",
  "Koľko uhlopriečok má konvexný {@0}-uholník?": "Dışbükey bir {@0}-genin kaç köşegeni vardır?",
  "Koľko {@0} {@1}čísel možno zostaviť z cifier {@2}, ak sa cifry {@3}?": "{@2} rakamlarından, rakamlar {@3}, kaç tane {@0} {@1} sayı oluşturulabilir?",
  "Koľkokrát najmenej musíme hodiť hracou kockou, aby pravdepodobnosť, že aspoň raz padne šestka, bola väčšia ako ${@0}$?": "En az bir kez altı gelme olasılığının ${@0}$ değerinden büyük olması için zarı en az kaç kez atmamız gerekir?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť do radu na {@1} stoličiek?": "{@0} kişi bir sıradaki {@1} sandalyeye kaç farklı şekilde oturabilir?",
  "Koľkými spôsobmi si môže {@0} ľudí sadnúť okolo okrúhleho stola, ak rozlišujeme len to, kto sedí vedľa koho (otočenie celého rozsadenia nič nemení)?": "Yalnızca kimin kimin yanında oturduğunu ayırt edersek (tüm oturma düzeninin dönmesi bir şey değiştirmez) {@0} kişi yuvarlak bir masanın etrafına kaç farklı şekilde oturabilir?",
  "Koľkými spôsobmi vyberieme chlapcov?": "Erkekleri kaç farklı şekilde seçeriz?",
  "Koľkými spôsobmi vyberieme dievčatá?": "Kızları kaç farklı şekilde seçeriz?",
  "Krabicový graf": "Kutu grafiği",
  "Kružnica a priamka": "Çember ve doğru",
  "Ktoré z koreňov spĺňajú podmienky? Zadaj všetky riešenia rovnice.": "Köklerden hangileri koşulları sağlar? Denklemin tüm çözümlerini gir.",
  "Ktorý koreň $V'(x)$ leží v intervale $(0; {@0})$?": "$V'(x)$'in hangi kökü $(0; {@0})$ aralığındadır?",
  "Ktorý zápis vyjadruje všetky riešenia rovnice ${@0}$ v $\\mathbb{R}$ ($k\\in\\mathbb{Z}$)?": "Hangi yazılış ${@0}$ denkleminin $\\mathbb{R}$'deki tüm çözümlerini ifade eder ($k\\in\\mathbb{Z}$)?",
  "Kvadratická funkcia $f'$ má medzi koreňmi opačné znamienko ako jej vedúci koeficient.": "İkinci dereceden $f'$ fonksiyonu kökleri arasında baş katsayısının işaretinin tersi işarete sahiptir.",
  "Kvadratická rovnica má dvojnásobný koreň práve vtedy, keď je diskriminant nulový.": "İkinci dereceden bir denklemin çift katlı kökü ancak ve ancak diskriminantı sıfırsa vardır.",
  "Leží bod $Q{@0}$ na priamke $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$?": "$Q{@0}$ noktası $p: X={@1}+t\\,{@2}$, $t\\in\\mathbb{R}$ doğrusu üzerinde midir?",
  "Lokálne maximum": "Yerel maksimum",
  "Lokálne minimum": "Yerel minimum",
  "MATEMATIKA": "MATEMATIKA",
  "Medián je priemer {@0}. a {@1}. hodnoty": "Medyan, {@0}. ve {@1}. değerlerin ortalamasıdır",
  "Medián je priemer {@0}. a {@1}. hodnoty: $\\frac{{@2}+{@3}}{2}={@4}$.": "Medyan, {@0}. ve {@1}. değerlerin ortalamasıdır: $\\frac{{@2}+{@3}}{2}={@4}$.",
  "Medián je {@0}. hodnota": "Medyan {@0}. değerdir",
  "Medián je {@0}. hodnota: ${@1}$.": "Medyan {@0}. değerdir: ${@1}$.",
  "Medián nie je prostredná zo známok 1 až 5. Je to prostredná hodnota, keď známky všetkých žiakov zoradíš za sebou.": "Medyan, 1'den 5'e kadar olan notların ortadakisi değildir. Tüm öğrencilerin notlarını art arda sıraladığında ortada kalan değerdir.",
  "Menovateľ je nulový pre $x={@0}$ a čitateľ tam nulový nie je (lebo $ad-bc={@1}\\neq 0$), preto je $x={@2}$ zvislá asymptota. Pre $x\\to\\pm\\infty$ sa $f(x)$ blíži k podielu koeficientov pri $x$: $\\frac{{@3}}{{@4}}={@5}$, vodorovná asymptota je $y={@6}$.": "Payda $x={@0}$ için sıfırdır ve pay orada sıfır değildir (çünkü $ad-bc={@1}\\neq 0$), bu yüzden $x={@2}$ düşey asimptottur. $x\\to\\pm\\infty$ için $f(x)$, $x$'in katsayılarının bölümüne yaklaşır: $\\frac{{@3}}{{@4}}={@5}$, yatay asimptot $y={@6}$ olur.",
  "Menovateľ rozložíme: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Po vykrátení zostane $\\frac{1}{\\sqrt{x}+{@3}}$. Akú hodnotu má $\\sqrt{x}+{@4}$ pre $x={@5}$?": "Paydayı çarpanlarına ayırırız: $x-{@0}=(\\sqrt{x}-{@1})(\\sqrt{x}+{@2})$. Sadeleştirdikten sonra $\\frac{1}{\\sqrt{x}+{@3}}$ kalır. $x={@5}$ için $\\sqrt{x}+{@4}$ değeri nedir?",
  "Mimobežné priamky neležia v jednej rovine. Skús nájsť stenu alebo rez kocky, v ktorom ležia obe priamky.": "Aykırı doğrular aynı düzlemde değildir. İki doğrunun da içinde bulunduğu bir yüz ya da küp kesiti bulmaya çalış.",
  "Množina riešení sústavy troch lineárnych nerovníc": "Üç doğrusal eşitsizlikten oluşan sistemin çözüm kümesi",
  "Mocniny s rovnakým exponentom $x$ daj na jednu stranu, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, a potom obe strany zlogaritmuj.": "Üssü $x$ olan kuvvetleri bir tarafa al, $\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x$, sonra iki tarafın logaritmasını al.",
  "Modus je hodnota s najväčšou početnosťou. Spočítaj, koľkokrát sa vyskytuje každá hodnota.": "Mod, sıklığı en büyük olan değerdir. Her değerin kaç kez geçtiğini say.",
  "Na ktorom intervale je funkcia $f(x)={@0}$ konvexná?": "$f(x)={@0}$ fonksiyonu hangi aralıkta konvekstir?",
  "Na ktorých intervaloch je funkcia $f(x)={@0}$ {@1}?": "$f(x)={@0}$ fonksiyonu hangi aralıklarda {@1}?",
  "Na poradí nezáleží, ide o kombinácie: chlapcov vyberieme $\\binom{{@0}}{{@1}}={@2}$ spôsobmi, dievčatá $\\binom{{@3}}{{@4}}={@5}$ spôsobmi. Podľa pravidla súčinu je spolu ${@6}\\cdot {@7}={@8}$ možností.": "Sıra önemli değil, bunlar kombinasyonlardır: erkekleri $\\binom{{@0}}{{@1}}={@2}$ yolla, kızları $\\binom{{@3}}{{@4}}={@5}$ yolla seçeriz. Çarpma kuralına göre toplam ${@6}\\cdot {@7}={@8}$ olasılık vardır.",
  "Na prvé miesto môžeme dať {@0} ({@1} {@2}), na ďalšie miesta {@3}. Spolu ${@4}={@5}$.": "Birinci yere {@0} koyabiliriz ({@1} {@2}), sonraki yerlere {@3}. Toplam ${@4}={@5}$.",
  "Na stretnutí si každý účastník podal ruku s každým iným práve raz. Podaní rúk bolo {@0}. Koľko ľudí bolo na stretnutí?": "Bir toplantıda her katılımcı diğer herkesle tam bir kez tokalaştı. {@0} tokalaşma oldu. Toplantıda kaç kişi vardı?",
  "Na tomto intervale leží stacionárny bod, v ktorom $f'$ mení znamienko, takže tam funkcia nie je monotónna.": "Bu aralıkta $f'$'nin işaret değiştirdiği bir kritik nokta var, bu yüzden fonksiyon orada monoton değildir.",
  "Na valci je len polguľa, jej objem je polovica objemu gule.": "Silindirin üstünde yalnızca bir yarım küre var, hacmi kürenin hacminin yarısıdır.",
  "Na účet sme vložili ${@0}\\,€$ s ročnou úrokovou sadzbou ${@1}\\,\\%$, úroky sa pripisujú raz ročne a ponechávajú na účte (daň neuvažujeme). Koľko eur bude na účte po {@2} rokoch? Výsledok zaokrúhli na centy.": "Yıllık faiz oranı ${@1}\\,\\%$ olan bir hesaba ${@0}\\,€$ yatırdık, faiz yılda bir eklenir ve hesapta bırakılır (vergiyi dikkate almıyoruz). {@2} yıl sonra hesapta kaç avro olur? Sonucu kuruşa yuvarla.",
  "Najmenšie celé číslo v ňom je ${@0}$.": "İçindeki en küçük tam sayı ${@0}$.",
  "Najprv nájdi hodnoty $m$, pre ktoré je determinant $m\\cdot m-k\\cdot k$ nulový. Potom pre každú z nich dosaď $m$ a porovnaj rovnice.": "Önce $m\\cdot m-k\\cdot k$ determinantının sıfır olduğu $m$ değerlerini bul. Sonra her biri için $m$'yi yerine koy ve denklemleri karşılaştır.",
  "Najprv nájdi priesečníky, potom integruj rozdiel „horná mínus dolná“ funkcia.": "Önce kesişim noktalarını bul, sonra „üstteki eksi alttaki“ fonksiyon farkının integralini al.",
  "Najprv rozhodni, či sú hodnoty slová alebo čísla. Pri číslach rozlíš počítanie (diskrétny) a meranie (spojitý).": "Önce değerlerin sözcük mü yoksa sayı mı olduğuna karar ver. Sayılarda saymayı (kesikli) ve ölçmeyi (sürekli) ayırt et.",
  "Najprv vypočítaj stranu $s$ z pravouhlého trojuholníka s odvesnami $v$ a $R-r$. Povrch tvoria dve podstavy a plášť $\\pi s(R+r)$.": "Önce dik kenarları $v$ ve $R-r$ olan dik üçgenden $s$ ana doğrusunu hesapla. Yüzey alanı iki taban ve $\\pi s(R+r)$ yanal yüzeyinden oluşur.",
  "Najprv vypočítaj vnútornú funkciu: ${@0}({@1})$.": "Önce iç fonksiyonu hesapla: ${@0}({@1})$.",
  "Najčastejšie sa vyskytuje hodnota ${@0}$ (trikrát), ostatné hodnoty najviac dvakrát. Modus je ${@1}$.": "En sık görülen değer ${@0}$ (üç kez), diğer değerler en fazla iki kez görülür. Mod ${@1}$ olur.",
  "Napríklad $f(1)={@0}$ a $f(-1)={@1}$; neplatí $f(-1)=f(1)$ ani $f(-1)=-f(1)$.": "Örneğin $f(1)={@0}$ ve $f(-1)={@1}$; ne $f(-1)=f(1)$ ne de $f(-1)=-f(1)$ sağlanır.",
  "Napíš rovnicu dotyčnice ku grafu funkcie $f(x)={@0}$ v bode s $x$-ovou súradnicou $x_0={@1}$ v tvare $y=kx+q$. Zadaj $k$ a $q$.": "$f(x)={@0}$ fonksiyonunun grafiğine $x$ koordinatı $x_0={@1}$ olan noktada çizilen teğetin denklemini $y=kx+q$ biçiminde yaz. $k$ ve $q$ değerlerini gir.",
  "Načrtni priamky a nájdi vrcholy oblasti ako priesečníky hraničných priamok. Oblasť je trojuholník.": "Doğruları çiz ve bölgenin köşelerini sınır doğrularının kesişim noktaları olarak bul. Bölge bir üçgendir.",
  "Nech $u={@0}$, $v=\\ln x$. Akú hodnotu má člen $u'v={@1}\\ln x$ v bode $1$?": "$u={@0}$, $v=\\ln x$ olsun. $u'v={@1}\\ln x$ teriminin $1$ noktasındaki değeri nedir?",
  "Nech $u={@0}$, $v=\\mathrm{e}^x$. Akú hodnotu má člen $u'v$ v bode $0$?": "$u={@0}$, $v=\\mathrm{e}^x$ olsun. $u'v$ teriminin $0$ noktasındaki değeri nedir?",
  "Nech $x$ je dĺžka strán kolmých na stenu. Strana rovnobežná so stenou má dĺžku ${@0}-2x$ a obsah je $S(x)=x({@1}-2x)={@2}x-2x^2$. $S'(x)={@3}-4x=0$ pre $x={@4}$ a $S''=-4&lt;0$, ide o maximum. Rozmery sú ${@5}\\,\\text{m}$ a ${@6}\\,\\text{m}$, obsah ${@7}\\,\\text{m}^2$.": "Duvara dik kenarların uzunluğu $x$ olsun. Duvara paralel kenarın uzunluğu ${@0}-2x$ ve alan $S(x)=x({@1}-2x)={@2}x-2x^2$ olur. $x={@4}$ için $S'(x)={@3}-4x=0$ ve $S''=-4&lt;0$, bu bir maksimumdur. Boyutlar ${@5}\\,\\text{m}$ ve ${@6}\\,\\text{m}$, alan ${@7}\\,\\text{m}^2$.",
  "Nepárna funkcia spĺňa $f(-x)=-f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Tek fonksiyon, tanım kümesindeki tüm $x$ için $f(-x)=-f(x)$ eşitliğini sağlar. Örneğin $x=1$ ve $x=-1$ koy ve karşılaştır.",
  "Newton-Leibnizova formula: {@0}": "Newton-Leibniz formülü: {@0}",
  "Nezabudni na koeficient ${@0}$ v menovateli: výraz je $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$.": "Paydadaki ${@0}$ katsayısını unutma: ifade $\\frac{{@1}}{{@2}}\\cdot\\frac{\\sin {@3}x}{{@4}x}$ olur.",
  "Nezabudni na prostredný člen $Rr$ v zátvorke: $R^2+Rr+r^2$.": "Parantezdeki $Rr$ orta terimini unutma: $R^2+Rr+r^2$.",
  "Nezabudni na prostredný člen $a_1a_2$, teda $\\sqrt{S_1S_2}$.": "$a_1a_2$ orta terimini, yani $\\sqrt{S_1S_2}$'yi unutma.",
  "Nie sú násobkami seba, roviny sú rôznobežné.": "Birbirlerinin katı değiller, düzlemler kesişir.",
  "Niektoré písmená sa opakujú a ich výmenou nové slovo nevznikne. Vydeľ faktoriálmi počtov opakujúcich sa písmen.": "Bazı harfler tekrar ediyor ve bunların yer değiştirmesiyle yeni kelime oluşmaz. Tekrar eden harflerin tekrar sayılarının faktöriyellerine böl.",
  "Nájdi inflexný bod funkcie $f(x)={@0}$. Zadaj jeho súradnice $x$ a $y$ (napr. 1; -4).": "$f(x)={@0}$ fonksiyonunun dönüm noktasını bul. $x$ ve $y$ koordinatlarını gir (örn. 1; -4).",
  "Nájdi korene derivácie $f'(x)={@0}$.": "$f'(x)={@0}$ türevinin köklerini bul.",
  "Nájdi primitívnu funkciu ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) a dosaď hranice.": "İlkel fonksiyonu bul ($\\int\\sin x=-\\cos x$, $\\int\\cos x=\\sin x$, $\\int\\frac{1}{x}=\\ln|x|$, $\\int\\mathrm{e}^x=\\mathrm{e}^x$) ve sınırları yerine koy.",
  "Nájdi stacionárne body funkcie, teda korene rovnice $f'(x)={@0}=0$.": "Fonksiyonun kritik noktalarını, yani $f'(x)={@0}=0$ denkleminin köklerini bul.",
  "O koľko percent sa {@0} zväčší? {@1}": "{@0} yüzde kaç büyür? {@1}",
  "Obe časti sú nepárne funkcie, preto aj ich súčet: $f(-x)=-f(x)$.": "İki kısım da tek fonksiyondur, bu yüzden toplamları da tektir: $f(-x)=-f(x)$.",
  "Objem": "Hacim",
  "Objem gule je $\\frac{4}{3}\\pi r^3$, nezabudni na koeficient $\\frac{4}{3}$.": "Kürenin hacmi $\\frac{4}{3}\\pi r^3$'tür, $\\frac{4}{3}$ katsayısını unutma.",
  "Objem je $V(x)=x({@0}-2x)^2$. Pre ktoré $x$ z intervalu $(0; {@1})$ je $V'(x)=0$?": "Hacim $V(x)=x({@0}-2x)^2$. $(0; {@1})$ aralığındaki hangi $x$ için $V'(x)=0$ olur?",
  "Objem je $V(x)=x({@0}-2x)^2$. Rozlož deriváciu na súčin $V'(x)=({@1}-2x)({@2}-cx)$. Aké je číslo $c$?": "Hacim $V(x)=x({@0}-2x)^2$. Türevi $V'(x)=({@1}-2x)({@2}-cx)$ çarpımı olarak yaz. $c$ sayısı nedir?",
  "Objem kužeľa je tretina objemu valca s rovnakou podstavou a výškou. Objemy častí sčítaj.": "Koninin hacmi, aynı taban ve yüksekliğe sahip silindirin hacminin üçte biridir. Parçaların hacimlerini topla.",
  "Objem kužeľa nie je $\\pi r^2 w$, ale len jeho tretina.": "Koninin hacmi $\\pi r^2 w$ değil, onun yalnızca üçte biridir.",
  "Objem materiálu je rozdiel objemov dvoch valcov s rovnakou výškou.": "Malzemenin hacmi, aynı yükseklikteki iki silindirin hacimlerinin farkıdır.",
  "Objem polgule je polovica objemu gule, teda $\\frac{2}{3}\\pi r^3$. Objemy častí sčítaj.": "Yarım kürenin hacmi kürenin hacminin yarısıdır, yani $\\frac{2}{3}\\pi r^3$. Parçaların hacimlerini topla.",
  "Objem sa zachová: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, teda $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.": "Hacim korunur: $n\\cdot\\frac{4}{3}\\pi\\cdot {@0}^3=\\frac{4}{3}\\pi\\cdot {@1}^3$, yani $n=\\left(\\frac{{@2}}{{@3}}\\right)^3={@4}^3={@5}$.",
  "Obsah je $S(x)=x({@0}-2x)$, kde $x$ je strana kolmá na stenu. Pre aké $x$ je $S'(x)=0$?": "Alan $S(x)=x({@0}-2x)$; burada $x$ duvara dik kenardır. Hangi $x$ için $S'(x)=0$ olur?",
  "Obsah rezu: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.": "Kesitin alanı: $\\pi\\rho^2={@0}\\pi\\approx {@1}\\,\\text{cm}^2$.",
  "Obsah rovnostranného trojuholníka so stranou $a$ je $\\frac{\\sqrt3}{4}a^2$. Plášť hranola tvoria tri zhodné obdĺžniky.": "Kenarı $a$ olan eşkenar üçgenin alanı $\\frac{\\sqrt3}{4}a^2$'dir. Prizmanın yanal yüzeyi üç eş dikdörtgenden oluşur.",
  "Obsah trojuholníka je polovica súčinu základne a výšky. Nezabudni deliť dvoma.": "Üçgenin alanı taban ile yüksekliğin çarpımının yarısıdır. 2'ye bölmeyi unutma.",
  "Obsah vypočítaj z vektorov $\\vec{AB}$ a $\\vec{AC}$ (polovica absolútnej hodnoty determinantu), výšku potom zo vzorca $S=\\frac{c\\cdot v_c}{2}$.": "Alanı $\\vec{AB}$ ve $\\vec{AC}$ vektörlerinden (determinantın mutlak değerinin yarısı), yüksekliği sonra $S=\\frac{c\\cdot v_c}{2}$ formülünden hesapla.",
  "Od objemu plného valca odčítame dutinu: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.": "Dolu silindirin hacminden boşluğu çıkarırız: $V=\\pi(R^2-r^2)\\cdot l=\\pi({@0}-{@1})\\cdot {@2}={@3}\\pi\\approx {@4}\\,\\text{cm}^3$.",
  "Olovenú guľu s polomerom ${@0}\\,\\text{cm}$ pretavili na rovnaké guľôčky s polomerom ${@1}\\,\\text{cm}$. Koľko guľôčok vzniklo (bez strát materiálu)?": "Yarıçapı ${@0}\\,\\text{cm}$ olan bir kurşun küre, yarıçapı ${@1}\\,\\text{cm}$ olan eş bilyelere eritildi. Kaç bilye elde edildi (malzeme kaybı olmadan)?",
  "Opačný jav (obaja minú): ${@0}\\cdot {@1}={@2}$, teda $P=1-{@3}={@4}$.": "Tümleyen olay (ikisi de ıskalar): ${@0}\\cdot {@1}={@2}$, yani $P=1-{@3}={@4}$.",
  "Opačný jav je $X=0$: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Preto $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.": "Tümleyen olay $X=0$'dır: $P(X=0)=\\left({@0}\\right)^{{@1}}\\approx {@2}$. Bu yüzden $P(X\\ge 1)=1-\\left({@3}\\right)^{{@4}}\\approx {@5}$.",
  "Opačný jav „obe čierne“ má $\\binom{{@0}}{2}={@1}$ výberov, priaznivých je ${@2}-{@3}={@4}$.": "„İkisi de siyah“ tümleyen olayının $\\binom{{@0}}{2}={@1}$ seçimi vardır, uygun olanlar ${@2}-{@3}={@4}$ tanedir.",
  "Opačný jav: šestka nepadne ani raz, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Hľadaná pravdepodobnosť je $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$.": "Tümleyen olay: hiç altı gelmez, $P=\\left(\\frac{5}{6}\\right)^{{@0}}\\approx {@1}$. Aranan olasılık $1-\\left(\\frac{5}{6}\\right)^{{@2}}\\approx {@3}$ olur.",
  "Over tento zápis: dosaď $k=0$ a $k=1$ a skontroluj, či dostaneš riešenia rovnice. Over aj, či zápis nevynecháva niektoré riešenie z jednej periódy.": "Bu yazılışı kontrol et: $k=0$ ve $k=1$ koy ve denklemin çözümlerini elde edip etmediğine bak. Yazılışın bir periyottaki bir çözümü atlayıp atlamadığını da kontrol et.",
  "Označ $x$ stranu kolmú na stenu, vyjadri druhú stranu z dĺžky pletiva a obsah ako funkciu $x$. Potom hľadaj, kde je jej derivácia nulová.": "Duvara dik kenara $x$ de, diğer kenarı tel örgünün uzunluğundan, alanı da $x$'in fonksiyonu olarak ifade et. Sonra türevinin sıfır olduğu yeri ara.",
  "Parabola $y={@0}$ a priamka $y={@1}$ majú dva spoločné body. Zadaj súradnice toho z nich, ktorý má menšiu $x$-ovú súradnicu (napr. -1; 4).": "$y={@0}$ parabolü ve $y={@1}$ doğrusunun iki ortak noktası vardır. Bunlardan $x$ koordinatı küçük olanın koordinatlarını gir (örn. -1; 4).",
  "Percentá sa nesčitujú. Koeficient $k={@0}$ umocni na {@1} a až potom preveď na percentá.": "Yüzdeler toplanmaz. Önce $k={@0}$ oranının {@1} kuvvetini al, ancak ondan sonra yüzdeye çevir.",
  "Pletivo netreba na všetky štyri strany: stena tvorí jednu stranu, ohradiť treba len tri.": "Tel örgü dört kenarın hepsi için gerekmez: duvar bir kenarı oluşturur, yalnızca üç kenarı çevirmek gerekir.",
  "Plášť tvoria tri obdĺžniky ${@0}\\times {@1}$: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.": "Yanal yüzey ${@0}\\times {@1}$ boyutlu üç dikdörtgenden oluşur: $S=2S_p+3av\\approx {@2}+{@3}\\approx {@4}\\,\\text{cm}^2$.",
  "Po dosadení $x={@0}$ vyjde výraz $\\frac{0}{0}$, preto čitateľa rozložíme: ${@1}={@2}{@3}$. Pre $x\\neq {@4}$ vykrátime a dostaneme $\\lim_{x\\to {@5}}{@6}={@7}{@8}$.": "$x={@0}$ koyunca $\\frac{0}{0}$ ifadesi çıkar, bu yüzden payı çarpanlarına ayırırız: ${@1}={@2}{@3}$. $x\\neq {@4}$ için sadeleştirir ve $\\lim_{x\\to {@5}}{@6}={@7}{@8}$ elde ederiz.",
  "Po koľkých rokoch sa vklad prvýkrát aspoň {@0}?": "Mevduat kaç yıl sonra ilk kez en az {@0}?",
  "Po odlogaritmovaní dostaneš $({@0})({@1})={@2}$. Zadaj korene tejto kvadratickej rovnice.": "Logaritmaları kaldırınca $({@0})({@1})={@2}$ elde edersin. Bu ikinci dereceden denklemin köklerini gir.",
  "Po príchode má zbor ${@0}$ členov, nový súčet je preto ${@1}\\cdot {@2}$.": "Gelişten sonra korodaki üye sayısı ${@0}$, bu yüzden yeni toplam ${@1}\\cdot {@2}$ olur.",
  "Po substitúcii $t={@0} x$ dostaneš ${@1}=0$. Zadaj jej korene (zlomok napr. ako 1/2).": "$t={@0} x$ değişken değiştirmesinden sonra ${@1}=0$ elde edersin. Köklerini gir (kesri örneğin 1/2 olarak).",
  "Po substitúcii $t={@0}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "$t={@0}$ değişken değiştirmesinden sonra ${@1}=0$ denklemini çöz. $t$ köklerini gir.",
  "Po substitúcii $t={@0}^{x}$ vyrieš rovnicu ${@1}=0$. Zadaj jej korene $t$.": "$t={@0}^{x}$ değişken değiştirmesinden sonra ${@1}=0$ denklemini çöz. $t$ köklerini gir.",
  "Po vybratí ${@0}$ pred zátvorku: pre ktoré $x$ z {@1} je ${@2}=0$?": "${@0}$ ortak çarpan parantezine alındıktan sonra: {@1} aralığındaki hangi $x$ için ${@2}=0$ olur?",
  "Po vykrátení ostal výraz ${@0}$ a doňho ešte treba dosadiť $x={@1}$.": "Sadeleştirdikten sonra ${@0}$ ifadesi kaldı ve içine bir de $x={@1}$ koymak gerekir.",
  "Po vykrátení ostane v menovateli $\\sqrt{x}+{@0}$, nie len $\\sqrt{x}$. Dosaď $x={@1}$ do celého súčtu.": "Sadeleştirdikten sonra paydada yalnızca $\\sqrt{x}$ değil, $\\sqrt{x}+{@0}$ kalır. $x={@1}$ değerini toplamın tamamında yerine koy.",
  "Po vykrátení činiteľa ${@0}$ zostane ${@1}$. Akú hodnotu má tento výraz pre $x={@2}$?": "${@0}$ çarpanını sadeleştirince ${@1}$ kalır. Bu ifadenin $x={@2}$ için değeri nedir?",
  "Po výmene premenných máme $x={@0}$. Aký je koeficient $k$ pri $x$ vo vyjadrení $y=kx+q$?": "Değişkenleri değiştirdikten sonra $x={@0}$ olur. $y=kx+q$ ifadesinde $x$'in katsayısı $k$ nedir?",
  "Podaní rúk je $\\binom{n}{2}=\\frac{n(n-1)}{2}$. Z rovnice $\\frac{n(n-1)}{2}={@0}$ dostaneme $n^2-n-{@1}=0$, kladný koreň je $n={@2}$.": "Tokalaşma sayısı $\\binom{n}{2}=\\frac{n(n-1)}{2}$'dir. $\\frac{n(n-1)}{2}={@0}$ denkleminden $n^2-n-{@1}=0$ elde ederiz, pozitif kök $n={@2}$ olur.",
  "Podiel vedúcich koeficientov rozhoduje len pri rovnakom stupni. Tu má čitateľ nižší stupeň, takže po vydelení najvyššou mocninou menovateľa ide celý čitateľ k nule.": "Baş katsayıların bölümü yalnızca dereceler aynıyken belirleyicidir. Burada payın derecesi daha küçüktür, bu yüzden paydanın en yüksek kuvvetine böldükten sonra payın tamamı sıfıra gider.",
  "Podmienka $x&gt;0$. Substitúcia $t={@0}$: ${@1}=0$, teda $t_1={@2}$, $t_2={@3}$. Z ${@4}={@5}$ je $x={@6}^{{@7}}={@8}$ a z ${@9}={@10}$ je $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.": "Koşul $x&gt;0$. $t={@0}$ değişken değiştirmesi: ${@1}=0$, yani $t_1={@2}$, $t_2={@3}$. ${@4}={@5}$ ise $x={@6}^{{@7}}={@8}$ ve ${@9}={@10}$ ise $x={@11}^{{@12}}={@13}$. $K=\\left\\{{@14}\\right\\}$.",
  "Podmienky dávajú $x&gt;c$. Aké je číslo $c$?": "Koşullar $x&gt;c$ verir. $c$ sayısı nedir?",
  "Podmienky: ${@0}&gt;0$ a ${@1}&gt;0$, teda $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Korene sú ${@10}$ a ${@11}$; podmienku spĺňa len $x={@12}$. $K=\\{{@13}\\}$.": "Koşullar: ${@0}&gt;0$ ve ${@1}&gt;0$, yani $x&gt;{@2}$. $\\log_2\\big(({@3})({@4})\\big)={@5} \\Rightarrow ({@6})({@7})={@8} \\Rightarrow {@9}=0$. Kökler ${@10}$ ve ${@11}$; koşulu yalnızca $x={@12}$ sağlar. $K=\\{{@13}\\}$.",
  "Podstava je rovnostranný trojuholník, nie štvorec: jej obsah je $\\frac{\\sqrt3}{4}a^2$.": "Taban kare değil, eşkenar üçgendir: alanı $\\frac{\\sqrt3}{4}a^2$'dir.",
  "Podstava je rovnostranný trojuholník: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}": "Taban bir eşkenar üçgendir: $S_p=\\frac{\\sqrt3}{4}a^2=\\frac{\\sqrt3}{4}\\cdot {@0}\\approx {@1}\\,\\text{cm}^2$. {@2}",
  "Podľa Vietovho vzťahu je súčet koreňov $x_1+x_2=-p$, nie $p$. Pozor na znamienko.": "Vieta bağıntısına göre köklerin toplamı $x_1+x_2=p$ değil, $-p$'dir. İşarete dikkat et.",
  "Polomer gule, vzdialenosť roviny od stredu a polomer rezu tvoria pravouhlý trojuholník (polomer gule je prepona).": "Kürenin yarıçapı, düzlemin merkeze uzaklığı ve kesitin yarıçapı bir dik üçgen oluşturur (kürenin yarıçapı hipotenüstür).",
  "Polomer rezu: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}": "Kesitin yarıçapı: $\\rho=\\sqrt{r^2-d^2}=\\sqrt{{@0}-{@1}}={@2}\\,\\text{cm}$.{@3}",
  "Polož diskriminant rovný nule.": "Diskriminantı sıfıra eşitle.",
  "Pomocou $\\sin^2 x+\\cos^2 x=1$ prepíš rovnicu len na ${@0} x$.": "$\\sin^2 x+\\cos^2 x=1$ yardımıyla denklemi yalnızca ${@0} x$ cinsinden yeniden yaz.",
  "Porovnaj aj hodnoty funkcie v krajných bodoch intervalu, globálny extrém môže byť práve tam.": "Aralığın uç noktalarındaki fonksiyon değerlerini de karşılaştır, mutlak ekstremum tam orada olabilir.",
  "Porovnaj smery priamok. Ak nie sú rovnobežné, zisti, či ležia v jednej rovine (napr. v stene alebo uhlopriečnom reze kocky).": "Doğruların doğrultularını karşılaştır. Paralel değillerse aynı düzlemde (örneğin bir yüzde ya da küpün köşegen kesitinde) olup olmadıklarını bul.",
  "Porovnaj stupne čitateľa a menovateľa. Pri rovnakom stupni rozhodujú vedúce koeficienty.": "Pay ve paydanın derecelerini karşılaştır. Dereceler aynıysa baş katsayılar belirleyicidir.",
  "Porovnaj tieto hodnoty s hodnotami v stacionárnych bodoch vnútri intervalu. Aká je {@0} hodnota?": "Bu değerleri aralığın içindeki kritik noktalardaki değerlerle karşılaştır. Değerlerin {@0} hangisidir?",
  "Porovnaj vzdialenosť stredu od priamky s polomerom. Polomer je odmocnina z pravej strany rovnice kružnice, teda $r={@0}$, nie ${@1}$. Pozor aj na znamienka súradníc stredu.": "Merkezin doğruya uzaklığını yarıçapla karşılaştır. Yarıçap, çember denkleminin sağ tarafının kareköküdür, yani ${@1}$ değil, $r={@0}$. Merkezin koordinatlarının işaretlerine de dikkat et.",
  "Porovnáme pravé strany: ${@0}={@1} \\Rightarrow {@2}=0$, korene $x={@3}$ a $x={@4}$. Pre $x={@5}$ je $y={@6}\\cdot {@7}{@8}={@9}$. Priesečníky sú $[{@10}; {@11}]$ a $[{@12}; {@13}]$.": "Sağ tarafları karşılaştırırız: ${@0}={@1} \\Rightarrow {@2}=0$, kökler $x={@3}$ ve $x={@4}$. $x={@5}$ için $y={@6}\\cdot {@7}{@8}={@9}$. Kesişim noktaları $[{@10}; {@11}]$ ve $[{@12}; {@13}]$.",
  "Potrebujeme $1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, teda $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$. Zlogaritmujeme (logaritmus čísla menšieho ako 1 je záporný, znak sa otočí): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. Najmenšie celé $n$ je ${@4}$.": "$1-\\left(\\frac{5}{6}\\right)^n&gt;{@0}$, yani $\\left(\\frac{5}{6}\\right)^n&lt;{@1}$ olması gerekir. Logaritma alırız (1'den küçük bir sayının logaritması negatiftir, eşitsizliğin yönü değişir): $n&gt;\\dfrac{\\ln {@2}}{\\ln\\frac{5}{6}}\\approx {@3}$. En küçük tam sayı $n={@4}$ olur.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\ln x)'=\\frac{1}{x}$. Nezabudni, že $\\ln 1=0$.": "$(u\\cdot v)'=u'v+uv'$ ve $(\\ln x)'=\\frac{1}{x}$ kurallarını kullan. $\\ln 1=0$ olduğunu unutma.",
  "Použi $(u\\cdot v)'=u'v+uv'$ a $(\\mathrm{e}^x)'=\\mathrm{e}^x$.": "$(u\\cdot v)'=u'v+uv'$ ve $(\\mathrm{e}^x)'=\\mathrm{e}^x$ kurallarını kullan.",
  "Použi $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.": "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$ formülünü kullan.",
  "Použi $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "$V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$ formülünü kullan.",
  "Použi $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. V čitateli sa členy s $x$ odčítajú.": "$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$ kuralını kullan. Paydaki $x$'li terimler birbirinden çıkarılır.",
  "Použi $\\sin 2x=2\\sin x\\cos x$, všetko prenes na jednu stranu a vyber spoločného činiteľa pred zátvorku. Nedeľ ním!": "$\\sin 2x=2\\sin x\\cos x$ özdeşliğini kullan, her şeyi bir tarafa al ve ortak çarpanı paranteze al. Ona bölme!",
  "Použi opačný jav: pravdepodobnosť, že šestka nepadne v žiadnom z hodov, je $\\left(\\frac{5}{6}\\right)^n$.": "Tümleyen olayı kullan: atışların hiçbirinde altı gelmeme olasılığı $\\left(\\frac{5}{6}\\right)^n$'dir.",
  "Použi vzorec $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$, kde $Q$ je bod priamky. Alebo nájdi trojuholník, v ktorom je hľadaná vzdialenosť výškou.": "$Q$ doğrunun bir noktası olmak üzere $d=\\frac{|\\vec{QP}\\times\\vec u|}{|\\vec u|}$ formülünü kullan. Ya da aranan uzaklığın yükseklik olduğu bir üçgen bul.",
  "Povrch": "Yüzey alanı",
  "Povrch gule je ${@0}\\pi\\,\\text{cm}^2$. Jej objem sa dá zapísať ako $V=k\\pi\\,\\text{cm}^3$. Vypočítaj $k$.": "Bir kürenin yüzey alanı ${@0}\\pi\\,\\text{cm}^2$. Hacmi $V=k\\pi\\,\\text{cm}^3$ olarak yazılabilir. $k$'yi hesapla.",
  "Pozor na znamienko menovateľa: pre $x$ tesne {@0} od ${@1}$ je menovateľ ${@2}$ {@3}. Skombinuj ho so znamienkom čitateľa.": "Paydanın işaretine dikkat et: ${@1}$ noktasının hemen {@0} kalan $x$ için ${@2}$ paydası {@3} olur. Bunu payın işaretiyle birleştir.",
  "Pozor, $R^2-r^2$ nie je to isté ako $(R-r)^2$. Odčítaj objemy dvoch valcov.": "Dikkat, $R^2-r^2$ ile $(R-r)^2$ aynı şey değildir. İki silindirin hacimlerini çıkar.",
  "Pozor, $\\cos\\pi=-1$, nie $1$. Hodnoty primitívnej funkcie v hraniciach sa preto neodčítajú na nulu.": "Dikkat, $\\cos\\pi=-1$'dir, $1$ değil. Bu yüzden ilkel fonksiyonun sınırlardaki değerleri çıkarılınca sıfır olmaz.",
  "Pozor, $\\ln 1=0$, lebo $\\mathrm{e}^0=1$. Hodnota primitívnej funkcie v dolnej hranici je nulová.": "Dikkat, $\\ln 1=0$'dır, çünkü $\\mathrm{e}^0=1$. İlkel fonksiyonun alt sınırdaki değeri sıfırdır.",
  "Pozor, $\\ln 1=0$, nie $1$ (lebo $\\mathrm{e}^0=1$). Prvý člen $u'v$ je preto v bode $1$ nulový.": "Dikkat, $\\ln 1=0$'dır, $1$ değil (çünkü $\\mathrm{e}^0=1$). Bu yüzden ilk terim $u'v$, $1$ noktasında sıfırdır.",
  "Počet pokusov n": "Deneme sayısı n",
  "Počet uhlopriečok $n$-uholníka je $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$ (všetky spojnice vrcholov mínus strany).": "$n$-genin köşegen sayısı $\\binom{n}{2}-n=\\frac{n(n-3)}{2}$'dir (köşeleri birleştiren tüm doğru parçaları eksi kenarlar).",
  "Počet usporiadaní $n$ rôznych prvkov je $n!$.": "$n$ farklı öğenin sıralanış sayısı $n!$'dir.",
  "Počty sedadiel tvoria aritmetickú postupnosť s $a_1={@0}$, $d={@1}$. Súčet $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ vedie na kvadratickú nerovnicu ${@5}\\ge 0$. Kladný koreň je približne ${@6}$, preto $n={@7}$. Kontrola: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.": "Koltuk sayıları $a_1={@0}$, $d={@1}$ olan bir aritmetik dizi oluşturur. $s_n=\\frac{n}{2}\\big(2\\cdot {@2}+(n-1)\\cdot {@3}\\big)\\ge {@4}$ toplamı ${@5}\\ge 0$ ikinci dereceden eşitsizliğine götürür. Pozitif kök yaklaşık ${@6}$, bu yüzden $n={@7}$. Kontrol: $s_{{@8}}={@9}$, $s_{{@10}}={@11}$.",
  "Počítal si v opačnom poradí. Pri $({@0})(x)$ sa najprv použije {@1} (vnútorná funkcia) a jej výsledok sa dosadí do {@2}.": "Ters sırada hesapladın. $({@0})(x)$ ifadesinde önce {@1} (iç fonksiyon) uygulanır ve sonucu {@2} içinde yerine konur.",
  "Pracuj so súčtami: súčet = priemer · počet. Porovnaj súčet pred príchodom a po príchode nového člena.": "Toplamlarla çalış: toplam = ortalama · sayı. Yeni üyenin gelişinden önceki ve sonraki toplamları karşılaştır.",
  "Pravdepodobnosti jednotlivých hodov sa nesčítavajú (pri 6 hodoch by vyšla istota). Použi opačný jav „ani raz“.": "Tek tek atışların olasılıkları toplanmaz (6 atışta kesinlik çıkardı). „Hiç“ tümleyen olayını kullan.",
  "Pravdepodobnosti netrafenia sú ${@0}$ a ${@1}$. {@2}": "Iskalama olasılıkları ${@0}$ ve ${@1}$. {@2}",
  "Pravdepodobnosť p": "Olasılık p",
  "Pravidelný trojboký hranol má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj jeho {@2}. {@3}": "Bir düzgün üçgen prizmanın taban ayrıtı $a={@0}\\,\\text{cm}$ ve yüksekliği $v={@1}\\,\\text{cm}$. {@2} hesapla. {@3}",
  "Pravidelný štvorboký ihlan": "Düzgün kare piramit",
  "Pravidelný štvorboký ihlan má podstavnú hranu $a={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}.{@3}": "Bir düzgün kare piramidin taban ayrıtı $a={@0}\\,\\text{cm}$ ve yüksekliği $v={@1}\\,\\text{cm}$. {@2} hesapla.{@3}",
  "Pravidelný štvorboký zrezaný ihlan má podstavné hrany $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho objem v $\\text{cm}^3$.{@3}": "Bir düzgün kare kesik piramidin taban ayrıtları $a_1={@0}\\,\\text{cm}$, $a_2={@1}\\,\\text{cm}$ ve yüksekliği $v={@2}\\,\\text{cm}$. Hacmini $\\text{cm}^3$ olarak hesapla.{@3}",
  "Pre $x\\to {@0}^{{@1}}$ je $x {@2} {@3}$, menovateľ ${@4}$ je teda {@5} a blíži sa k nule. Čitateľ ${@6}$ je {@7}, preto zlomok rastie v absolútnej hodnote nad všetky medze so znamienkom {@8}: limita je {@9}.": "$x\\to {@0}^{{@1}}$ için $x {@2} {@3}$, yani ${@4}$ paydası {@5} ve sıfıra yaklaşır. ${@6}$ payı {@7}, bu yüzden kesir mutlak değerce sınırsız büyür ve işareti {@8} olur: limit {@9}.",
  "Pre $x\\to\\infty$ nerozhodujú absolútne členy, ale členy s najvyššou mocninou $x$.": "$x\\to\\infty$ için sabit terimler değil, $x$'in en yüksek kuvvetini içeren terimler belirleyicidir.",
  "Pre $x\\to\\pm\\infty$ rozhodujú koeficienty pri $x$, nie absolútne členy.": "$x\\to\\pm\\infty$ için sabit terimler değil, $x$'in katsayıları belirleyicidir.",
  "Pre akú hodnotu parametra $c$ má rovnica $x^2{@0}+c=0$ dvojnásobný koreň?": "$c$ parametresinin hangi değeri için $x^2{@0}+c=0$ denkleminin çift katlı kökü vardır?",
  "Pre binomické rozdelenie je $E(X)=np$ a $D(X)=np(1-p)$.": "Binom dağılımı için $E(X)=np$ ve $D(X)=np(1-p)$'dir.",
  "Pre funkciu $f(x)=({@0})\\,\\mathrm{e}^{x}$ vypočítaj $f'(0)$.": "$f(x)=({@0})\\,\\mathrm{e}^{x}$ fonksiyonu için $f'(0)$ değerini hesapla.",
  "Pre funkciu $f(x)=({@0})\\ln x$ vypočítaj $f'(1)$.": "$f(x)=({@0})\\ln x$ fonksiyonu için $f'(1)$ değerini hesapla.",
  "Pre funkciu $f(x)=({@0})^{{@1}}$ vypočítaj $f'({@2})$.": "$f(x)=({@0})^{{@1}}$ fonksiyonu için $f'({@2})$ değerini hesapla.",
  "Pre funkciu $f(x)=\\dfrac{{@0}}{{@1}}$ vypočítaj $f'({@2})$. Výsledok zadaj ako celé číslo alebo zlomok.": "$f(x)=\\dfrac{{@0}}{{@1}}$ fonksiyonu için $f'({@2})$ değerini hesapla. Sonucu tam sayı ya da kesir olarak gir.",
  "Pre funkciu $f(x)={@0}{@1}$ vypočítaj $f'(0)$.": "$f(x)={@0}{@1}$ fonksiyonu için $f'(0)$ değerini hesapla.",
  "Pre korene z intervalu $\\langle -1; 1\\rangle$ nájdi všetky $x$ v stupňoch z {@0}.": "$\\langle -1; 1\\rangle$ aralığındaki kökler için {@0} aralığındaki tüm $x$ değerlerini derece olarak bul.",
  "Pre ktoré $x$ je nulová zátvorka ${@0} {@1}$?": "${@0} {@1}$ parantezi hangi $x$ için sıfırdır?",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2+px+{@0}=0$ dvojnásobný koreň? Zadaj všetky hodnoty oddelené bodkočiarkou.": "$p$ parametresinin hangi değerleri için $x^2+px+{@0}=0$ denkleminin çift katlı kökü vardır? Tüm değerleri noktalı virgülle ayırarak gir.",
  "Pre ktoré hodnoty parametra $p$ má rovnica $x^2{@0}+p=0$ {@1}?": "$p$ parametresinin hangi değerleri için $x^2{@0}+p=0$ denkleminin {@1}?",
  "Pre zrezaný ihlan platí $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$; pri štvorcových podstavách je $\\sqrt{S_1S_2}=a_1a_2$.": "Kesik piramit için $V=\\frac{v}{3}(S_1+\\sqrt{S_1S_2}+S_2)$ geçerlidir; tabanlar kare olduğunda $\\sqrt{S_1S_2}=a_1a_2$ olur.",
  "Pred určením mediánu treba údaje usporiadať podľa veľkosti.": "Medyanı bulmadan önce verileri büyüklüğe göre sıralamak gerekir.",
  "Predsedu vyberáš z $n$ ľudí, podpredsedu už len zo zvyšných, pokladníka zo zvyšných ďalej.": "Başkanı $n$ kişiden, başkan yardımcısını yalnızca kalanlardan, saymanı da onlardan kalanlardan seçersin.",
  "Predstav si rovinu ako rez kockou. Priamka v nej leží, ak v nej ležia dva jej body; je rovnobežná, ak je rovnobežná s niektorou priamkou roviny.": "Düzlemi küpün bir kesiti olarak düşün. Bir doğru, iki noktası düzlemdeyse düzlemdedir; düzlemdeki bir doğruya paralelse düzleme paraleldir.",
  "Predstav si všetky známky zoradené od najlepšej. Medián je prostredná hodnota (pri párnom počte priemer dvoch prostredných).": "Tüm notları en iyiden başlayarak sıralanmış düşün. Medyan ortadaki değerdir (çift sayıda veride ortadaki iki değerin ortalaması).",
  "Pri $(f\\circ g)(x)=f(g(x))$ počítaš najprv vnútornú funkciu $g$, jej výsledok dosadíš do $f$.": "$(f\\circ g)(x)=f(g(x))$ ifadesinde önce iç fonksiyon $g$'yi hesaplar, sonucunu $f$ içinde yerine koyarsın.",
  "Pri derivovaní mocniny sa exponent zníži o jedna: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.": "Kuvvetin türevini alırken üs bir azalır: $(u^{{@0}})'={@1}u^{{@2}}\\cdot u'$.",
  "Pri lineárnej substitúcii treba výsledok vydeliť koeficientom pri $x$, teda číslom ${@0}$.": "Doğrusal değişken değiştirmede sonucu $x$'in katsayısına, yani ${@0}$ sayısına bölmek gerekir.",
  "Pri nezávislých javoch sa pravdepodobnosti súčasného nastania násobia. Pri „aspoň jeden“ použi opačný jav.": "Bağımsız olaylarda aynı anda gerçekleşme olasılıkları çarpılır. „En az bir“ durumunda tümleyen olayı kullan.",
  "Pri okrúhlom stole sú rozsadenia, ktoré sa líšia len otočením, rovnaké. Zafixuj jedného človeka.": "Yuvarlak masada yalnızca dönmeyle farklılaşan oturma düzenleri aynıdır. Bir kişiyi sabitle.",
  "Pri podobnosti s koeficientom $k$ sa {@0}. Výsledný násobok preveď na percentá.": "$k$ oranlı benzerlikte {@0}. Elde edilen katı yüzdeye çevir.",
  "Pri pretavení sa zachováva objem. Pomer objemov podobných telies je tretia mocnina pomeru dĺžok.": "Eritmede hacim korunur. Benzer cisimlerin hacimlerinin oranı, uzunluk oranının küpüdür.",
  "Pri rovnej stene chceme ohradiť obdĺžnikový pozemok, stena tvorí jednu jeho stranu. Máme ${@0}\\,\\text{m}$ pletiva. {@1}": "Düz bir duvarın yanında, duvarın bir kenarını oluşturduğu dikdörtgen bir arsayı çevirmek istiyoruz. ${@0}\\,\\text{m}$ tel örgümüz var. {@1}",
  "Pri strane odstrihnutého štvorca $x$ má krabica dno $({@0}-2x)^2$ a výšku $x$: $V(x)=x({@1}-2x)^2$ pre $x\\in(0; {@2})$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, v intervale je nulová len pre $x={@7}$ (tam sa mení znamienko z $+$ na $-$). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.": "Kesilen karenin kenarı $x$ ise kutunun tabanı $({@0}-2x)^2$, yüksekliği $x$ olur: $x\\in(0; {@2})$ için $V(x)=x({@1}-2x)^2$. $V'(x)=({@3}-2x)^2-4x({@4}-2x)=({@5}-2x)({@6}-6x)$, aralıkta yalnızca $x={@7}$ için sıfırdır (orada işaret $+$'dan $-$'ye değişir). $V({@8})={@9}\\cdot {@10}^2={@11}\\,\\text{cm}^3$.",
  "Pri vyjadrení $y$ treba číslom ${@0}$ vydeliť celú pravú stranu, teda aj absolútny člen.": "$y$'yi yalnız bırakırken sağ tarafın tamamını, yani sabit terimi de ${@0}$ sayısına bölmek gerekir.",
  "Pri zloženej funkcii násob deriváciou vnútra: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "Bileşke fonksiyonda içteki fonksiyonun türeviyle çarp: $(\\sin kx)'=k\\cos kx$, $(\\cos kx)'=-k\\sin kx$, $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Priamka $p: {@0}=0$ pretína kružnicu $k: {@1}$ v dvoch bodoch. Zadaj $x$-ové súradnice oboch priesečníkov oddelené bodkočiarkou.": "$p: {@0}=0$ doğrusu $k: {@1}$ çemberini iki noktada keser. İki kesişim noktasının $x$ koordinatlarını noktalı virgülle ayırarak gir.",
  "Priamka je s rovinou rovnobežná, len ak je jej smerový vektor kolmý na normálový vektor roviny ($\\vec u\\cdot\\vec n=0$). Vypočítaj tento skalárny súčin.": "Doğru, ancak doğrultman vektörü düzlemin normal vektörüne dikse ($\\vec u\\cdot\\vec n=0$) düzleme paraleldir. Bu skaler çarpımı hesapla.",
  "Priamka leží v rovine, len ak v nej ležia dva jej body. Over oba koncové body.": "Doğru, ancak iki noktası düzlemdeyse düzlemin içindedir. İki uç noktayı da kontrol et.",
  "Priamka pretína rovinu, len ak $\\vec u\\cdot\\vec n\\neq 0$. Vypočítaj skalárny súčin smerového a normálového vektora.": "Doğru, ancak $\\vec u\\cdot\\vec n\\neq 0$ ise düzlemi keser. Doğrultman ve normal vektörün skaler çarpımını hesapla.",
  "Priamky $y={@0}$ a $y={@1}$ pretínajú os $x$ v bodoch $[{@2}; 0]$ a $[{@3}; 0]$ a navzájom sa pretínajú v bode $[{@4}; {@5}]$. Oblasť je trojuholník so základňou ${@6}$ a výškou ${@7}$, jeho obsah je $\\frac{{@8}\\cdot {@9}}{2}={@10}$.": "$y={@0}$ ve $y={@1}$ doğruları $x$ eksenini $[{@2}; 0]$ ve $[{@3}; 0]$ noktalarında keser ve birbirlerini $[{@4}; {@5}]$ noktasında keserler. Bölge, tabanı ${@6}$ ve yüksekliği ${@7}$ olan bir üçgendir, alanı $\\frac{{@8}\\cdot {@9}}{2}={@10}$ olur.",
  "Priaznivé dvojice: {@0} — spolu ${@1}$.": "Uygun ikililer: {@0} — toplam ${@1}$.",
  "Priaznivé: $\\binom{{@0}}{2}={@1}$.": "Uygun olanlar: $\\binom{{@0}}{2}={@1}$.",
  "Priaznivé: ${@0}\\cdot {@1}={@2}$ (bielu a čiernu vyberáme nezávisle).": "Uygun olanlar: ${@0}\\cdot {@1}={@2}$ (beyaz ve siyahı bağımsız seçeriz).",
  "Priemer z tabuľky početností je vážený: každú známku vynásob počtom žiakov, ktorí ju dostali.": "Sıklık tablosundaki ortalama ağırlıklıdır: her notu, onu alan öğrenci sayısıyla çarp.",
  "Priemerný vek {@0} členov speváckeho zboru je ${@1}$ rokov. Keď do zboru pribudol nový člen, priemerný vek sa {@2} na ${@3}$ rokov. Koľko rokov má nový člen?": "Bir korodaki {@0} üyenin yaş ortalaması ${@1}$. Koroya yeni bir üye katılınca yaş ortalaması {@2} ve ${@3}$ oldu. Yeni üye kaç yaşındadır?",
  "Priesečníky s osou $x$: ${@0}-x^2=0$, teda $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.": "$x$ ekseniyle kesişim noktaları: ${@0}-x^2=0$, yani $x=\\pm {@1}$. $S=\\int_{-{@2}}^{{@3}}({@4}-x^2)\\,dx=\\left[{@5}x-\\frac{x^3}{3}\\right]_{-{@6}}^{{@7}}=2\\left({@8}-\\frac{{@9}}{3}\\right)={@10}$.",
  "Priesečníky sú $x=0$ a ešte jeden bod. Aké je jeho $x$?": "Kesişim noktaları $x=0$ ve bir nokta daha. Onun $x$ değeri nedir?",
  "Priesečníky: $x^2={@0}$, teda $x=0$ a $x={@1}$. Na $\\langle 0; {@2}\\rangle$ leží priamka nad parabolou. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.": "Kesişim noktaları: $x^2={@0}$, yani $x=0$ ve $x={@1}$. $\\langle 0; {@2}\\rangle$ aralığında doğru parabolün üstündedir. $S=\\int_0^{{@3}}({@4}-x^2)\\,dx=\\left[\\frac{{@5}x^2}{2}-\\frac{x^3}{3}\\right]_0^{{@6}}=\\frac{{@7}}{2}-\\frac{{@8}}{3}={@9}$.",
  "Primitívna funkcia je $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. Vypočítaj $F(1)$. Zadaj zlomok alebo celé číslo.": "İlkel fonksiyon $F(x)=\\dfrac{({@0})^{{@1}}}{{@2}}$. $F(1)$ değerini hesapla. Kesir ya da tam sayı gir.",
  "Primitívna funkcia je $F(x)={@0}$. Vypočítaj $F({@1})$.": "İlkel fonksiyon $F(x)={@0}$. $F({@1})$ değerini hesapla.",
  "Primitívna funkcia je $F(x)={@0}x-\\frac{x^3}{3}$. Vypočítaj $F({@1})$. Zadaj zlomok alebo celé číslo.": "İlkel fonksiyon $F(x)={@0}x-\\frac{x^3}{3}$. $F({@1})$ değerini hesapla. Kesir ya da tam sayı gir.",
  "Prvá nerovnica má riešenie $x&gt;c$. Aké je číslo $c$?": "Birinci eşitsizliğin çözümü $x&gt;c$'dir. $c$ sayısı nedir?",
  "Prvá nerovnica: ${@0} {@1} {@2}$, po delení číslom ${@3}$ {@4}$x&gt;{@5}$. Druhá: ${@6} {@7} {@8}$, odtiaľ {@9}$x\\le {@10}$. Prienik je $({@11}; {@12}\\rangle$. {@13}": "Birinci eşitsizlik: ${@0} {@1} {@2}$, ${@3}$ sayısına böldükten sonra {@4}$x&gt;{@5}$. İkincisi: ${@6} {@7} {@8}$, buradan {@9}$x\\le {@10}$. Kesişim $({@11}; {@12}\\rangle$ olur. {@13}",
  "Práve jeden môže byť prvý aj druhý strelec. Sčítaj pravdepodobnosti oboch možností.": "Tam olarak biri, birinci de ikinci atıcı da olabilir. İki olasılığın olasılıklarını topla.",
  "Párna funkcia spĺňa $f(-x)=f(x)$ pre všetky $x$ z definičného oboru. Dosaď napríklad $x=1$ a $x=-1$ a porovnaj.": "Çift fonksiyon, tanım kümesindeki tüm $x$ için $f(-x)=f(x)$ eşitliğini sağlar. Örneğin $x=1$ ve $x=-1$ koy ve karşılaştır.",
  "RADAR": "RADAR",
  "Relatívna početnosť je $\\frac{n_i}{n}$, v percentách ju vynásob číslom 100.": "Göreli sıklık $\\frac{n_i}{n}$'dir, yüzde olarak bulmak için 100 ile çarp.",
  "Rez nemá polomer gule. Polomer rezu $\\rho$ najprv vypočítaj z pravouhlého trojuholníka.": "Kesitin yarıçapı kürenin yarıçapı değildir. Önce kesitin $\\rho$ yarıçapını dik üçgenden hesapla.",
  "Riešime ${@0}^{{@1}}{@2}={@3}$. Čomu sa rovná mocnina ${@4}^{{@5}}$?": "${@0}^{{@1}}{@2}={@3}$ denklemini çözüyoruz. ${@4}^{{@5}}$ kuvveti neye eşittir?",
  "Rotačný kužeľ má polomer podstavy $r={@0}\\,\\text{cm}$ a výšku $v={@1}\\,\\text{cm}$. Vypočítaj {@2}. {@3}": "Bir dik dairesel koninin taban yarıçapı $r={@0}\\,\\text{cm}$ ve yüksekliği $v={@1}\\,\\text{cm}$. {@2} hesapla. {@3}",
  "Rovina $\\rho: {@0}+d=0$ prechádza bodom $P{@1}$. Vypočítaj $d$.": "$\\rho: {@0}+d=0$ düzlemi $P{@1}$ noktasından geçer. $d$'yi hesapla.",
  "Rovina ${@0}$ má normálový vektor $\\vec{n}={@1}$ a rovnicu ${@2}+d=0$. Vypočítaj $d$.": "${@0}$ düzleminin normal vektörü $\\vec{n}={@1}$ ve denklemi ${@2}+d=0$. $d$'yi hesapla.",
  "Rovnica $x^2+px{@0}=0$ má koreň $x_1={@1}$. Urči parameter $p$ a druhý koreň $x_2$ (zadaj ich v tomto poradí, napr. -5; 3).": "$x^2+px{@0}=0$ denkleminin bir kökü $x_1={@1}$. $p$ parametresini ve ikinci kök $x_2$'yi bul (bu sırayla gir, örn. -5; 3).",
  "Rovnicu si zrejme vydelil výrazom ${@0}$ a stratil si riešenia, v ktorých je nulový. Vyber ho pred zátvorku.": "Denklemi büyük olasılıkla ${@0}$ ifadesine böldün ve onun sıfır olduğu çözümleri kaybettin. Onu paranteze al.",
  "Rovnobežné priamky majú smerové vektory, ktoré sú násobkami seba. Porovnaj smerové vektory.": "Paralel doğruların doğrultman vektörleri birbirinin katıdır. Doğrultman vektörlerini karşılaştır.",
  "Rovnobežné roviny majú normálové vektory, ktoré sú násobkami seba. Porovnaj normálové vektory.": "Paralel düzlemlerin normal vektörleri birbirinin katıdır. Normal vektörleri karşılaştır.",
  "Rozdelíme prípady podľa poslednej cifry (musí byť {@0}); prvá cifra nesmie byť nula{@1}: {@2}. Spolu ${@3}$.": "Son rakama göre durumlara ayırırız (son rakam {@0} olmalıdır); birinci rakam sıfır olamaz{@1}: {@2}. Toplam ${@3}$.",
  "Rozlož $f'(x)$ na súčin, nájdi nulové body a zisti, kde derivácia mení znamienko.": "$f'(x)$'i çarpanlarına ayır, sıfır noktalarını bul ve türevin nerede işaret değiştirdiğini belirle.",
  "Rozptyl binomického rozdelenia je $np(1-p)$, nezabudni na činiteľ $1-p$.": "Binom dağılımının varyansı $np(1-p)$'dir, $1-p$ çarpanını unutma.",
  "Rozpätie je rozdiel najväčšej a najmenšej hodnoty, nie poslednej a prvej hodnoty v zápise.": "Açıklık, yazılıştaki son ve ilk değerin değil, en büyük ve en küçük değerin farkıdır.",
  "Rozsadenia, ktoré sa líšia len otočením stola, sú rovnaké. Každé si takto započítal {@0}-krát.": "Yalnızca masanın dönmesiyle farklılaşan oturma düzenleri aynıdır. Her birini bu şekilde {@0} kez saydın.",
  "Rozsah súboru $n={@0}={@1}$. Relatívna početnosť: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}": "Veri kümesinin büyüklüğü $n={@0}={@1}$. Göreli sıklık: $f=\\frac{{@2}}{{@3}}\\approx {@4}$. {@5}",
  "Rôznobežné priamky majú spoločný bod, a teda ležia v jednej rovine. Nájdeš takú rovinu?": "Kesişen doğruların ortak bir noktası vardır, dolayısıyla aynı düzlemdedirler. Böyle bir düzlem bulabilir misin?",
  "Rôznobežné roviny majú normálové vektory, ktoré nie sú násobkami seba. Porovnaj normálové vektory.": "Kesişen düzlemlerin normal vektörleri birbirinin katı değildir. Normal vektörleri karşılaştır.",
  "Rúra má tvar dutého valca s vonkajším polomerom ${@0}\\,\\text{cm}$, vnútorným polomerom ${@1}\\,\\text{cm}$ a dĺžkou ${@2}\\,\\text{cm}$. Vypočítaj objem materiálu v $\\text{cm}^3$. {@3}": "Bir boru, dış yarıçapı ${@0}\\,\\text{cm}$, iç yarıçapı ${@1}\\,\\text{cm}$ ve uzunluğu ${@2}\\,\\text{cm}$ olan içi boş bir silindir biçimindedir. Malzemenin hacmini $\\text{cm}^3$ olarak hesapla. {@3}",
  "S; v_c": "S; v_c",
  "Slovo má {@0} písmen, opakujú sa {@1}. Ide o permutácie s opakovaním: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.": "Kelimede {@0} harf var, tekrar edenler: {@1}. Bunlar tekrarlı permütasyonlardır: $\\dfrac{{@2}!}{{@3}}=\\dfrac{{@4}}{{@5}}={@6}$.",
  "Smernica dotyčnice je $f'(x_0)$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a uprav.": "Teğetin eğimi $f'(x_0)$'dır. $y=f(x_0)+f'(x_0)(x-x_0)$ içinde yerine koy ve düzenle.",
  "Smerové vektory $\\vec{{@0}}={@1}$ a $\\vec{{@2}}={@3}$ sú násobkami seba a bod ${@4}$ na priamke ${@5}$ neleží, priamky sú rovnobežné.": "$\\vec{{@0}}={@1}$ ve $\\vec{{@2}}={@3}$ doğrultman vektörleri birbirinin katıdır ve ${@4}$ noktası ${@5}$ doğrusu üzerinde değildir, doğrular paraleldir.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, priamky však ležia v jednej rovine a pretínajú sa v bode ${@2}$. Sú rôznobežné.": "${@0}$ ve ${@1}$ doğrultman vektörleri birbirinin katı değildir, ancak doğrular aynı düzlemdedir ve ${@2}$ noktasında kesişirler. Kesişen doğrulardır.",
  "Smerové vektory ${@0}$ a ${@1}$ nie sú násobkami seba, takže priamky nie sú rovnobežné; neležia ani v jednej rovine, preto nemajú spoločný bod. Sú mimobežné.": "${@0}$ ve ${@1}$ doğrultman vektörleri birbirinin katı değildir, bu yüzden doğrular paralel değildir; aynı düzlemde de değiller, bu yüzden ortak noktaları yoktur. Aykırı doğrulardır.",
  "Spolok má {@0} členov. Koľkými spôsobmi môžu zvoliť predsedu, podpredsedu a pokladníka (jedna osoba zastáva najviac jednu funkciu)?": "Bir derneğin {@0} üyesi var. Başkan, başkan yardımcısı ve sayman kaç farklı şekilde seçilebilir (bir kişi en fazla bir görev üstlenir)?",
  "Spočítaj trojice kombináciami a využi opačný jav „samí chlapci“.": "Üçlüleri kombinasyonlarla say ve „yalnızca erkekler“ tümleyen olayından yararlan.",
  "Stenová výška: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}": "Yan yüz yüksekliği: $v_s=\\sqrt{v^2+\\left(\\frac{a}{2}\\right)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}",
  "Strana kužeľa $s$ je prepona pravouhlého trojuholníka s odvesnami $r$ a $v$.": "Koninin ana doğrusu $s$, dik kenarları $r$ ve $v$ olan bir dik üçgenin hipotenüsüdür.",
  "Strana kužeľa: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.": "Koninin ana doğrusu: $s=\\sqrt{r^2+v^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. {@3}={@4}\\pi\\approx {@5}$.",
  "Strana: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.": "Ana doğru: $s=\\sqrt{v^2+(R-r)^2}=\\sqrt{{@0}+{@1}}={@2}\\,\\text{cm}$. $S=\\pi(R^2+r^2)+\\pi s(R+r)=\\pi({@3}+{@4})+\\pi\\cdot {@5}\\cdot {@6}={@7}\\pi\\approx {@8}\\,\\text{cm}^2$.",
  "Strany označíme $a-d$, $a$, $a+d$ (prepona je najdlhšia). Z obvodu $3a={@0}$, teda $a={@1}$. Pytagorova veta: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Strany sú ${@8}$, ${@9}$, ${@10}$ cm{@11}.": "Kenarlara $a-d$, $a$, $a+d$ deriz (hipotenüs en uzun kenardır). Çevreden $3a={@0}$, yani $a={@1}$. Pisagor teoremi: $({@2}-d)^2+{@3}^2=({@4}+d)^2 \\Rightarrow {@5}={@6}d \\Rightarrow d={@7}$. Kenarlar ${@8}$, ${@9}$, ${@10}$ cm{@11}.",
  "Strany sú $a-d$, $a$, $a+d$. Z obvodu vypočítaj $a$.": "Kenarlar $a-d$, $a$, $a+d$'dir. Çevreden $a$'yı hesapla.",
  "Strany zapíš ako $a-d$, $a$, $a+d$. Obvod dá $a$, Pytagorova veta potom diferenciu $d$.": "Kenarları $a-d$, $a$, $a+d$ olarak yaz. Çevre $a$'yı, Pisagor teoremi de ortak fark $d$'yi verir.",
  "Stred je $S[{@0}; {@1}]$ a vektor $\\vec{ST}=({@2}; {@3})$ je kolmý na dotyčnicu, je to jej normálový vektor — preto má rovnica tvar ${@4}+c=0$. Dosadíme $T$: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, teda $c={@9}$.": "Merkez $S[{@0}; {@1}]$ ve $\\vec{ST}=({@2}; {@3})$ vektörü teğete diktir, yani teğetin normal vektörüdür — bu yüzden denklem ${@4}+c=0$ biçimindedir. $T$'yi yerine koyarız: ${@5}\\cdot {@6}{@7}\\cdot {@8}+c=0$, yani $c={@9}$.",
  "Stred kružnice je $S[{@0}; {@1}]$, polomer $r={@2}$. Vzdialenosť stredu od priamky: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. Keďže $d{@10}r$, priamka je {@11}.": "Çemberin merkezi $S[{@0}; {@1}]$, yarıçapı $r={@2}$. Merkezin doğruya uzaklığı: $d=\\dfrac{|{@3}{@4}|}{\\sqrt{{@5}+{@6}}}=\\dfrac{{@7}}{{@8}}={@9}$. $d{@10}r$ olduğundan doğru {@11} olur.",
  "Stredový uhol: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.": "Merkez açı: $f\\cdot 360^\\circ\\approx {@0}^\\circ$.",
  "Stĺpcový graf známok": "Notların sütun grafiği",
  "Stĺpcový graf známok v triede": "Sınıftaki notların sütun grafiği",
  "Substitúcia $u={@0}$ (alebo vzorec $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$): primitívna funkcia je $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.": "$u={@0}$ değişken değiştirmesi (veya $\\int f(ax+b)\\,dx=\\frac{1}{a}F(ax+b)$ formülü): ilkel fonksiyon $F(x)=\\dfrac{({@1})^{{@2}}}{{@3}}$. $F(1)-F(0)=\\dfrac{{@4}^{{@5}}-{@6}^{{@7}}}{{@8}}=\\dfrac{{@9}}{{@10}}={@11}$.",
  "Sú násobkami seba, roviny sú rovnobežné; bod ${@0}$ {@1} ${@2}$, preto sú roviny {@3}.": "Birbirlerinin katıdırlar, düzlemler paraleldir; ${@0}$ noktası ${@2}$ {@1}, bu yüzden düzlemler {@3}.",
  "Súradnice bodu $P$ musia vyhovovať rovnici: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, teda ${@6}+d=0$ a $d={@7}$.": "$P$ noktasının koordinatları denklemi sağlamalıdır: ${@0}\\cdot {@1}{@2}\\cdot {@3}{@4}\\cdot {@5}+d=0$, yani ${@6}+d=0$ ve $d={@7}$.",
  "Sústava nerovníc ${@0}$ a ${@1}$ má riešenie v $\\mathbb{R}$. {@2}": "${@0}$ ve ${@1}$ eşitsizlik sisteminin $\\mathbb{R}$'de çözümü vardır. {@2}",
  "Sústava rovníc s parametrom $m$: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. Pre ktorú hodnotu $m$ {@4}?": "$m$ parametreli denklem sistemi: $mx+{@0}y={@1}$, ${@2}x+my={@3}$. $m$'nin hangi değeri için {@4}?",
  "Súčet logaritmov je logaritmus súčinu: $\\log_2 u+\\log_2 v=\\log_2(uv)$, nie $\\log_2(u+v)$.": "Logaritmaların toplamı çarpımın logaritmasıdır: $\\log_2 u+\\log_2 v=\\log_2(uv)$, $\\log_2(u+v)$ değil.",
  "Súčet s $d$ má byť nula. Koľko je $d$?": "$d$ ile toplam sıfır olmalıdır. $d$ kaçtır?",
  "Súčet vekov pôvodných členov je ${@0}\\cdot {@1}={@2}$. Po príchode je súčet vekov ${@3}\\cdot {@4}={@5}$. Nový člen má ${@6}-{@7}={@8}$ rokov.": "İlk üyelerin yaşlarının toplamı ${@0}\\cdot {@1}={@2}$. Gelişten sonra yaşların toplamı ${@3}\\cdot {@4}={@5}$. Yeni üye ${@6}-{@7}={@8}$ yaşındadır.",
  "Súčet známok treba deliť počtom žiakov $n$, nie počtom rôznych známok.": "Notların toplamı, farklı notların sayısına değil, öğrenci sayısı $n$'ye bölünmelidir.",
  "Súčet štvorcov odchýlok delíme počtom údajov $n={@0}$, nie číslom $n-1$ (tak je rozptyl definovaný v teórii).": "Sapmaların karelerinin toplamını $n-1$'e değil, veri sayısına ($n={@0}$) böleriz (varyans teoride böyle tanımlanır).",
  "Súčin dvoch nepárnych funkcií je párny: $(-x)\\sin(-x)=x\\sin x$.": "İki tek fonksiyonun çarpımı çifttir: $(-x)\\sin(-x)=x\\sin x$.",
  "Súčin je nenulový, priamka rovinu pretína.": "Çarpım sıfırdan farklıdır, doğru düzlemi keser.",
  "Súčin je nepárny len vtedy, keď sú obe čísla nepárne: $3\\cdot 3=9$ výsledkov. Priaznivých je $36-9=27$.": "Çarpım ancak iki sayı da tekse tektir: $3\\cdot 3=9$ sonuç. Uygun olanlar $36-9=27$ tanedir.",
  "Súčin je nulový, priamka je s rovinou rovnobežná; bod ${@0}$ {@1}.": "Çarpım sıfırdır, doğru düzleme paraleldir; ${@0}$ noktası {@1}.",
  "Súčin koreňov je $x_1x_2={@0}$. Aký je druhý koreň $x_2$?": "Köklerin çarpımı $x_1x_2={@0}$. İkinci kök $x_2$ nedir?",
  "Tabuľka": "Tablo",
  "Takto by to bolo pri jednoduchom úročení. Pri zloženom sa úročia aj pripísané úroky, suma sa každý rok násobí.": "Bu basit faizde böyle olurdu. Bileşik faizde eklenen faizler de faiz kazanır, para her yıl çarpılır.",
  "Takto by to bolo pri jednoduchom úročení. Úroky ostávajú na účte a ďalší rok sa úročia tiež, suma sa každý rok násobí.": "Bu basit faizde böyle olurdu. Faizler hesapta kalır ve sonraki yıl onlar da faiz kazanır, para her yıl çarpılır.",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{dm}$ a výškou ${@1}\\,\\text{dm}$, na ktorý je nasadený kužeľ s rovnakou podstavou a výškou ${@2}\\,\\text{dm}$. Vypočítaj objem telesa v $\\text{dm}^3$. {@3}": "Bir cisim, yarıçapı ${@0}\\,\\text{dm}$ ve yüksekliği ${@1}\\,\\text{dm}$ olan bir silindir ile onun üstüne yerleştirilmiş, aynı tabanlı ve yüksekliği ${@2}\\,\\text{dm}$ olan bir koniden oluşuyor. Cismin hacmini $\\text{dm}^3$ olarak hesapla. {@3}",
  "Teleso tvorí valec s polomerom ${@0}\\,\\text{m}$ a výškou ${@1}\\,\\text{m}$, na ktorého hornej podstave je polguľa s rovnakým polomerom. Vypočítaj objem telesa v $\\text{m}^3$. {@2}": "Bir cisim, yarıçapı ${@0}\\,\\text{m}$ ve yüksekliği ${@1}\\,\\text{m}$ olan bir silindir ile onun üst tabanındaki aynı yarıçaplı bir yarım küreden oluşuyor. Cismin hacmini $\\text{m}^3$ olarak hesapla. {@2}",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "Bu, uzaklığın karesidir. Sonucun bir de karekökünü al.",
  "To je druhý spoločný bod. Pýtame sa na ten s menšou $x$-ovou súradnicou.": "Bu diğer ortak noktadır. $x$ koordinatı küçük olanı soruyoruz.",
  "To je druhý stacionárny bod, v ňom má funkcia lokálne {@0}. Pri maxime mení $f'$ znamienko z $+$ na $-$, pri minime z $-$ na $+$.": "Bu ikinci kritik noktadır, fonksiyon burada yerel {@0} değerini alır. Maksimumda $f'$ işareti $+$'dan $-$'ye, minimumda $-$'den $+$'ya değişir.",
  "To je dĺžka strany kolmej na stenu. Pýtame sa na stranu rovnobežnú so stenou, jej dĺžka je ${@0}-2x$.": "Bu, duvara dik kenarın uzunluğudur. Duvara paralel kenarı soruyoruz, uzunluğu ${@0}-2x$'tir.",
  "To je len plášť ihlana. Povrch zahŕňa aj štvorcovú podstavu.": "Bu yalnızca piramidin yanal yüzeyidir. Yüzey alanı kare tabanı da içerir.",
  "To je len plášť kužeľa. Povrch zahŕňa aj kruhovú podstavu $\\pi r^2$.": "Bu yalnızca koninin yanal yüzeyidir. Yüzey alanı $\\pi r^2$ daire tabanını da içerir.",
  "To je len plášť. Povrch zahŕňa aj obe kruhové podstavy.": "Bu yalnızca yanal yüzeydir. Yüzey alanı iki daire tabanı da içerir.",
  "To je nový priemerný vek. Pracuj so súčtami vekov: súčet = priemer · počet.": "Bu yeni yaş ortalamasıdır. Yaş toplamlarıyla çalış: toplam = ortalama · sayı.",
  "To je objem hranola s rovnakou podstavou a výškou. Objem ihlana je jeho tretina.": "Bu, aynı taban ve yüksekliğe sahip prizmanın hacmidir. Piramidin hacmi onun üçte biridir.",
  "To je objem valca. Objem kužeľa je jeho tretina.": "Bu silindirin hacmidir. Koninin hacmi onun üçte biridir.",
  "To je obsah pod parabolou. Útvar je medzi dvoma krivkami, integruj rozdiel „horná mínus dolná“.": "Bu parabolün altındaki alandır. Şekil iki eğri arasındadır, „üstteki eksi alttaki“ farkının integralini al.",
  "To je obsah pod priamkou. Od neho ešte treba odčítať obsah pod parabolou.": "Bu doğrunun altındaki alandır. Bundan bir de parabolün altındaki alanı çıkarmak gerekir.",
  "To je pomer polomerov. Pri pretavení sa zachováva objem a objem rastie s treťou mocninou polomeru.": "Bu yarıçapların oranıdır. Eritmede hacim korunur ve hacim yarıçapın küpüyle artar.",
  "To je početnosť najčastejšej hodnoty. Modus je samotná hodnota, ktorá sa vyskytuje najčastejšie.": "Bu en sık görülen değerin sıklığıdır. Mod, en sık görülen değerin kendisidir.",
  "To je pravdepodobnosť opačného javu $X=0$. Odpočítaj ju od jednotky.": "Bu, $X=0$ tümleyen olayının olasılığıdır. Onu 1'den çıkar.",
  "To je pravdepodobnosť opačného javu, že sa vyberú len chlapci. Odpočítaj ju od jednotky.": "Bu, yalnızca erkeklerin seçilmesi tümleyen olayının olasılığıdır. Onu 1'den çıkar.",
  "To je pravdepodobnosť opačného javu, že súčin je nepárny. Odpočítaj ju od jednotky.": "Bu, çarpımın tek olması tümleyen olayının olasılığıdır. Onu 1'den çıkar.",
  "To je pravdepodobnosť opačného javu, že šestka nepadne ani raz. Odpočítaj ju od jednotky.": "Bu, hiç altı gelmemesi tümleyen olayının olasılığıdır. Onu 1'den çıkar.",
  "To je pravdepodobnosť práve jedného úspechu. „Aspoň jeden“ zahŕňa aj viac úspechov, použi opačný jav.": "Bu tam olarak bir başarının olasılığıdır. „En az bir“ daha fazla başarıyı da içerir, tümleyen olayı kullan.",
  "To je pravdepodobnosť, že nezasiahnu obaja súčasne. Ani jeden znamená, že minú obaja.": "Bu, ikisinin aynı anda vuramaması olasılığıdır. Hiçbiri, ikisinin de ıskalaması demektir.",
  "To je pravdepodobnosť, že zasiahnu obaja. „Aspoň jeden“ zahŕňa aj prípady, keď zasiahne len jeden.": "Bu, ikisinin de vurma olasılığıdır. „En az biri“, yalnızca birinin vurduğu durumları da içerir.",
  "To je priemer. Medián je prostredná hodnota usporiadaného súboru.": "Bu ortalamadır. Medyan, sıralanmış veri kümesinin ortadaki değeridir.",
  "To je prostredná strana. Prepona je najdlhšia strana trojuholníka.": "Bu ortadaki kenardır. Hipotenüs üçgenin en uzun kenarıdır.",
  "To je rozptyl. Smerodajná odchýlka je jeho druhá odmocnina.": "Bu varyanstır. Standart sapma onun kareköküdür.",
  "To je smerodajná odchýlka. Rozptyl je jej druhá mocnina, $D(X)=np(1-p)$.": "Bu standart sapmadır. Varyans onun karesidir, $D(X)=np(1-p)$.",
  "To je smerodajná odchýlka. Rozptyl sa neodmocňuje.": "Bu standart sapmadır. Varyansın karekökü alınmaz.",
  "To je strana odstrihnutého štvorca. Pýtame sa na objem krabice.": "Bu kesilen karenin kenarıdır. Kutunun hacmini soruyoruz.",
  "To je stredový uhol výseče v stupňoch. Percentá sú časť zo $100$, nie z $360$.": "Bu dilimin derece cinsinden merkez açısıdır. Yüzdeler $360$'ın değil, $100$'ün parçasıdır.",
  "To je uhol priamky s normálovým vektorom roviny. Uhol s rovinou ho dopĺňa do $90^\\circ$: s normálou počítaj $\\sin\\varphi$, nie $\\cos\\varphi$.": "Bu, doğrunun düzlemin normal vektörüyle yaptığı açıdır. Düzlemle yaptığı açı bunu $90^\\circ$'ye tamamlar: normal ile $\\cos\\varphi$ değil, $\\sin\\varphi$ hesapla.",
  "To je vzdialenosť bodov ${@0}$ a ${@1}$. Vzdialenosť od priamky sa meria kolmo na priamku.": "Bu ${@0}$ ve ${@1}$ noktaları arasındaki uzaklıktır. Doğruya uzaklık doğruya dik olarak ölçülür.",
  "To sú $y$-ové súradnice priesečníkov. Zadaj ich $x$-ové súradnice.": "Bunlar kesişim noktalarının $y$ koordinatlarıdır. Onların $x$ koordinatlarını gir.",
  "To sú hodnoty substitúcie $t={@0}$. Z definície logaritmu ešte vypočítaj $x={@1}^{t}$.": "Bunlar $t={@0}$ değişken değiştirmesinin değerleridir. Logaritmanın tanımından bir de $x={@1}^{t}$ değerini hesapla.",
  "To sú hodnoty substitúcie $t={@0}^{x}$. Ešte sa vráť k neznámej $x$.": "Bunlar $t={@0}^{x}$ değişken değiştirmesinin değerleridir. Bir de $x$ bilinmeyenine geri dön.",
  "To sú percentá. Stredový uhol je rovnaká časť z celého uhla $360^\\circ$, nie zo $100$.": "Bunlar yüzdelerdir. Merkez açı, $100$'ün değil, $360^\\circ$ tam açının aynı kısmıdır.",
  "To sú všetky spojnice dvojíc vrcholov, aj strany mnohouholníka. Strany treba odčítať.": "Bunlar köşe çiftlerini birleştiren tüm doğru parçalarıdır, çokgenin kenarları da dahil. Kenarları çıkarmak gerekir.",
  "Totožné priamky majú všetky body spoločné. Over, či oba body jednej priamky ležia na druhej.": "Çakışık doğruların tüm noktaları ortaktır. Bir doğrunun iki noktasının diğerinin üzerinde olup olmadığını kontrol et.",
  "Totožné roviny majú všetky body spoločné. Over, či všetky tri body druhej roviny ležia v prvej.": "Çakışık düzlemlerin tüm noktaları ortaktır. İkinci düzlemin üç noktasının da birincide olup olmadığını kontrol et.",
  "Trojuholník má vrcholy $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Vypočítaj jeho obsah $S$ a výšku $v_c$ na stranu $AB$. Zadaj $S$ a $v_c$ (zaokrúhlenú na 2 desatinné miesta) oddelené bodkočiarkou.": "Bir üçgenin köşeleri $A[{@0}; {@1}]$, $B[{@2}; {@3}]$, $C[{@4}; {@5}]$. Alanı $S$'yi ve $AB$ kenarına ait yüksekliği $v_c$'yi hesapla. $S$ ve $v_c$ değerlerini (2 ondalık basamağa yuvarlanmış) noktalı virgülle ayırarak gir.",
  "Tu je $f''(x)&lt;0$, funkcia je tam konkávna. Pri delení nerovnice záporným číslom nezabudni otočiť znak nerovnosti.": "Burada $f''(x)&lt;0$, fonksiyon orada konkavdır. Eşitsizliği negatif bir sayıya bölerken yönünü değiştirmeyi unutma.",
  "Tu je funkcia {@0}. Skontroluj znamienko $f'$: medzi koreňmi má opačné znamienko ako vedúci koeficient ${@1}$.": "Burada fonksiyon {@0} olur. $f'$'nin işaretini kontrol et: kökler arasında baş katsayının (${@1}$) işaretinin tersi işarete sahiptir.",
  "Táto podmienka zodpovedá $D&gt;0$, teda dvom rôznym reálnym koreňom.": "Bu koşul $D&gt;0$'a, yani iki farklı gerçek köke karşılık gelir.",
  "Táto podmienka zodpovedá $D&lt;0$, rovnica potom nemá reálny koreň.": "Bu koşul $D&lt;0$'a karşılık gelir, denklemin o zaman gerçek kökü yoktur.",
  "Táto podmienka zodpovedá $D=0$, teda jednému dvojnásobnému koreňu.": "Bu koşul $D=0$'a, yani bir çift katlı köke karşılık gelir.",
  "Táto podmienka zodpovedá $D\\ge 0$, teda aspoň jednému reálnemu koreňu.": "Bu koşul $D\\ge 0$'a, yani en az bir gerçek köke karşılık gelir.",
  "Táto podmienka zodpovedá $D\\le 0$: zahŕňa dvojnásobný koreň aj prípad bez reálnych koreňov.": "Bu koşul $D\\le 0$'a karşılık gelir: çift katlı kökü de gerçek kökü olmayan durumu da içerir.",
  "Uhol dvoch priamok je najviac $90^\\circ$. Vo vzorci pre $\\cos\\varphi$ je v čitateli absolútna hodnota skalárneho súčinu.": "İki doğru arasındaki açı en fazla $90^\\circ$'dir. $\\cos\\varphi$ formülünün payında skaler çarpımın mutlak değeri vardır.",
  "Uhol priamky s rovinou počítaj cez normálový vektor roviny: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Alebo nájdi priemet priamky do roviny a pravouhlý trojuholník.": "Doğrunun düzlemle yaptığı açıyı düzlemin normal vektörü yoluyla hesapla: $\\sin\\varphi=\\frac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$. Ya da doğrunun düzlem üzerindeki izdüşümünü ve bir dik üçgeni bul.",
  "Uhol priamok je uhol ich smerových vektorov z intervalu $\\langle 0^\\circ; 90^\\circ\\rangle$: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.": "Doğrular arasındaki açı, doğrultman vektörlerinin $\\langle 0^\\circ; 90^\\circ\\rangle$ aralığındaki açısıdır: $\\cos\\varphi=\\frac{|\\vec u\\cdot\\vec v|}{|\\vec u||\\vec v|}$.",
  "Umiestni kocku do súradnicovej sústavy, zapíš súradnice oboch bodov (stred hrany je priemer koncových bodov) a použi vzorec pre vzdialenosť.": "Küpü bir koordinat sistemine yerleştir, iki noktanın koordinatlarını yaz (ayrıtın orta noktası uç noktaların ortalamasıdır) ve uzaklık formülünü kullan.",
  "Uprav $f(-x)$: využi $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ a $\\cos(-x)=\\cos x$. Potom porovnaj s $f(x)$ aj s $-f(x)$.": "$f(-x)$'i düzenle: $(-x)^2=x^2$, $(-x)^3=-x^3$, $\\sin(-x)=-\\sin x$ ve $\\cos(-x)=\\cos x$ eşitliklerini kullan. Sonra hem $f(x)$ hem de $-f(x)$ ile karşılaştır.",
  "Uprav rovnicu na tvar $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$. Aké je číslo $r$? Zadaj zlomok alebo celé číslo.": "Denklemi $\\left(\\frac{{@0}}{{@1}}\\right)^{x}=r$ biçimine getir. $r$ sayısı nedir? Kesir ya da tam sayı gir.",
  "Upravíme: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. Pre $x\\to 0$ aj $t={@6}x\\to 0$ a $\\frac{\\sin t}{t}\\to 1$. Limita je ${@7}{@8}$.": "Düzenleriz: $\\dfrac{\\sin {@0}x}{{@1}}=\\frac{{@2}}{{@3}}\\cdot\\dfrac{\\sin {@4}x}{{@5}x}$. $x\\to 0$ için $t={@6}x\\to 0$ ve $\\frac{\\sin t}{t}\\to 1$. Limit ${@7}{@8}$ olur.",
  "Urči asymptoty grafu funkcie $f(x)=\\dfrac{{@0}}{{@1}}$. Zadaj číslo zo zvislej asymptoty $x=\\dots$ a potom číslo z vodorovnej asymptoty $y=\\dots$ (napr. 2; -1/2).": "$f(x)=\\dfrac{{@0}}{{@1}}$ fonksiyonunun grafiğinin asimptotlarını bul. Düşey asimptot $x=\\dots$ sayısını, sonra yatay asimptot $y=\\dots$ sayısını gir (örn. 2; -1/2).",
  "Urči jednostrannú limitu $\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$.": "$\\lim_{x\\to {@0}^{{@1}}} \\dfrac{{@2}}{{@3}}$ tek taraflı limitini bul.",
  "Urči podmienky, súčet logaritmov zapíš ako logaritmus súčinu a odlogaritmuj. Nájdené korene porovnaj s podmienkami.": "Koşulları belirle, logaritmaların toplamını çarpımın logaritması olarak yaz ve logaritmayı kaldır. Bulunan kökleri koşullarla karşılaştır.",
  "Urči vzájomnú polohu priamky $p: {@0}=0$ a kružnice $k: {@1}$.": "$p: {@0}=0$ doğrusu ile $k: {@1}$ çemberinin birbirine göre durumunu belirle.",
  "Usporiadaný súbor: ${@0}$ ($n={@1}$). {@2}": "Sıralanmış veri kümesi: ${@0}$ ($n={@1}$). {@2}",
  "V $P(X=1)$ chýba kombinačné číslo $\\binom{{@0}}{1}={@1}$: úspech môže nastať v ktoromkoľvek pokuse.": "$P(X=1)$'de $\\binom{{@0}}{1}={@1}$ kombinasyon sayısı eksik: başarı herhangi bir denemede gerçekleşebilir.",
  "V kocke $ABCDEFGH$ (podstava $ABCD$, nad ňou $EFGH$, hrany $AE$, $BF$, $CG$, $DH$) urči vzájomnú polohu priamok ${@0}$ a ${@1}$.": "$ABCDEFGH$ küpünde (taban $ABCD$, üstünde $EFGH$, ayrıtlar $AE$, $BF$, $CG$, $DH$) ${@0}$ ve ${@1}$ doğrularının birbirine göre durumunu belirle.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu priamky ${@0}$ a roviny ${@1}$.": "$ABCDEFGH$ küpünde ${@0}$ doğrusu ile ${@1}$ düzleminin birbirine göre durumunu belirle.",
  "V kocke $ABCDEFGH$ urči vzájomnú polohu rovín ${@0}$ a ${@1}$.": "$ABCDEFGH$ küpünde ${@0}$ ve ${@1}$ düzlemlerinin birbirine göre durumunu belirle.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamky ${@0}$ s rovinou ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "$ABCDEFGH$ küpünde ${@0}$ doğrusunun ${@1}$ düzlemiyle yaptığı açıyı derece olarak hesapla. Sonucu derecenin onda birine yuvarla.",
  "V kocke $ABCDEFGH$ vypočítaj uhol priamok ${@0}$ a ${@1}$ v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "$ABCDEFGH$ küpünde ${@0}$ ve ${@1}$ doğruları arasındaki açıyı derece olarak hesapla. Sonucu derecenin onda birine yuvarla.",
  "V kocke s hranou $1$ je smerový vektor priamky $\\vec{u}={@0}$ a rovina ${@1}$ je stena kocky s normálovým vektorom $\\vec{n}={@2}$. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, teda $\\varphi\\approx {@6}^\\circ$.": "Ayrıtı $1$ olan küpte doğrunun doğrultman vektörü $\\vec{u}={@0}$ ve ${@1}$ düzlemi, normal vektörü $\\vec{n}={@2}$ olan küp yüzüdür. $\\sin\\varphi=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u|\\,|\\vec n|}=\\dfrac{{@3}}{\\sqrt{{@4}}}\\approx {@5}$, yani $\\varphi\\approx {@6}^\\circ$.",
  "V kocke s hranou $1$ sú smerové vektory $\\vec{u}=\\vec{{@0}}={@1}$ a $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, teda $\\varphi\\approx {@8}^\\circ$.": "Ayrıtı $1$ olan küpte doğrultman vektörleri $\\vec{u}=\\vec{{@0}}={@1}$ ve $\\vec{v}=\\vec{{@2}}={@3}$. $\\cos\\varphi=\\dfrac{|{@4}|}{\\sqrt{{@5}}\\cdot\\sqrt{{@6}}}\\approx {@7}$, yani $\\varphi\\approx {@8}^\\circ$.",
  "V krúžku je {@0} chlapcov a {@1} {@2}. Na súťaž náhodne vyberieme troch členov. Aká je pravdepodobnosť, že medzi nimi bude aspoň jedno dievča? {@3}": "Bir kulüpte {@0} erkek ve {@1} {@2} var. Yarışma için rastgele üç üye seçiyoruz. Aralarında en az bir kız olma olasılığı nedir? {@3}",
  "V ktorom z bodov ${@0}$, ${@1}$ má funkcia {@2}?": "${@0}$, ${@1}$ noktalarından hangisinde fonksiyonun {@2} vardır?",
  "V percentách ${@0}\\,\\%$.": "Yüzde olarak ${@0}\\,\\%$.",
  "V pravouhlom trojuholníku s výškou ihlana a stenovou výškou je druhou odvesnou polovica podstavnej hrany, nie celá hrana.": "Piramidin yüksekliği ve yan yüz yüksekliğiyle oluşan dik üçgende diğer dik kenar taban ayrıtının tamamı değil, yarısıdır.",
  "V rade záleží na tom, kto sedí na ktorej stoličke: otočenie tu nehrá rolu, usporiadaj všetkých ľudí.": "Sırada kimin hangi sandalyede oturduğu önemlidir: burada dönme rol oynamaz, tüm kişileri sırala.",
  "V rovnici $y=ax+b$ vymeň $x$ a $y$ a vyjadri $y$.": "$y=ax+b$ denkleminde $x$ ile $y$'nin yerini değiştir ve $y$'yi yalnız bırak.",
  "V skupine nezáleží na poradí, ide o kombinácie, nie variácie.": "Grupta sıra önemli değil, bunlar varyasyon değil, kombinasyonlardır.",
  "V spoločnom bode majú obe funkcie rovnakú hodnotu: polož pravé strany rovné a vyrieš kvadratickú rovnicu.": "Ortak noktada iki fonksiyonun değeri aynıdır: sağ tarafları eşitle ve ikinci dereceden denklemi çöz.",
  "V triede je {@0} chlapcov a {@1} dievčat. Koľkými spôsobmi môžeme vybrať skupinu, v ktorej budú {@2} a {@3}?": "Bir sınıfta {@0} erkek ve {@1} kız öğrenci var. İçinde {@2} ve {@3} olan bir grup kaç farklı şekilde seçilebilir?",
  "V urne sú gule: {@0} {@1} a {@2} {@3}. Naraz náhodne vytiahneme dve. Aká je pravdepodobnosť, že {@4}? {@5}": "Bir torbada şu toplar var: {@0} {@1} ve {@2} {@3}. Rastgele aynı anda iki top çekiyoruz. {@4} olasılığı nedir? {@5}",
  "Valec: $\\pi r^2v={@0}\\pi$. Kužeľ: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.": "Silindir: $\\pi r^2v={@0}\\pi$. Koni: $\\frac{1}{3}\\pi r^2w={@1}\\pi$. Toplam $V={@2}\\pi\\approx {@3}\\,\\text{dm}^3$.",
  "Valec: $\\pi r^2v={@0}\\pi$. Polguľa: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Spolu $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.": "Silindir: $\\pi r^2v={@0}\\pi$. Yarım küre: $\\frac{2}{3}\\pi r^3={@1}\\pi$. Toplam $V={@2}\\pi\\approx {@3}\\,\\text{m}^3$.",
  "Variačné rozpätie je rozdiel najväčšej a najmenšej hodnoty.": "Açıklık, en büyük ve en küçük değerin farkıdır.",
  "Vklad je úročený ročne sadzbou ${@0}\\,\\%$ (zložené úročenie, bez dane). Po koľkých rokoch sa prvýkrát aspoň {@1}?": "Bir mevduata yıllık ${@0}\\,\\%$ faiz uygulanıyor (bileşik faiz, vergisiz). Kaç yıl sonra ilk kez en az {@1}?",
  "Vo vzorci je výška delená tromi: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.": "Formülde yükseklik üçe bölünür: $V=\\frac{v}{3}(a_1^2+a_1a_2+a_2^2)$.",
  "Vo vzorci pre objem zrezaného kužeľa je výška delená tromi: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.": "Kesik koninin hacim formülünde yükseklik üçe bölünür: $V=\\frac{\\pi v}{3}(R^2+Rr+r^2)$.",
  "Vráť sa k $x$ a zadaj všetky riešenia (zlomok napr. ako 1/2).": "$x$'e geri dön ve tüm çözümleri gir (kesri örneğin 1/2 olarak).",
  "Vydelíme obe strany výrazom ${@0}$: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Zlogaritmujeme: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, teda $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.": "İki tarafı ${@0}$ ifadesine böleriz: $\\left(\\frac{{@1}}{{@2}}\\right)^{x}={@3}$. Logaritma alırız: $x\\cdot\\ln\\frac{{@4}}{{@5}}=\\ln {@6}$, yani $x=\\dfrac{{@7}}{\\ln {@8}-\\ln {@9}}\\approx {@10}$.",
  "Vyjadri diskriminant pomocou $p$ a podľa požadovaného počtu koreňov urči, či má byť kladný, nulový alebo záporný.": "Diskriminantı $p$ cinsinden ifade et ve istenen kök sayısına göre pozitif mi, sıfır mı, negatif mi olması gerektiğini belirle.",
  "Vyjadri goniometrickú funkciu, nájdi riešenia v jednej perióde a pripočítaj násobky periódy ($2\\pi$ pre sínus a kosínus, $\\pi$ pre tangens).": "Trigonometrik fonksiyonu yalnız bırak, bir periyottaki çözümleri bul ve periyodun katlarını ekle (sinüs ve kosinüs için $2\\pi$, tanjant için $\\pi$).",
  "Vyjadri objem ako funkciu strany odstrihnutého štvorca, zderivuj ju a nájdi stacionárny bod v prípustnom intervale.": "Hacmi, kesilen karenin kenarının fonksiyonu olarak ifade et, türevini al ve uygun aralıktaki kritik noktayı bul.",
  "Vymeníme $x$ a $y$: $x={@0}$, odtiaľ ${@1}y={@2}$ a $y=\\dfrac{{@3}}{{@4}}$. Teda $f^{-1}(x)={@5}x{@6}{@7}$, čiže $k={@8}$ a $q={@9}$.": "$x$ ile $y$'nin yerini değiştiririz: $x={@0}$, buradan ${@1}y={@2}$ ve $y=\\dfrac{{@3}}{{@4}}$. Yani $f^{-1}(x)={@5}x{@6}{@7}$, yani $k={@8}$ ve $q={@9}$.",
  "Vypočítaj $F(-{@0})$.": "$F(-{@0})$ değerini hesapla.",
  "Vypočítaj $F(0)$.": "$F(0)$ değerini hesapla.",
  "Vypočítaj $F(1)-F(0)$. Zadaj zlomok alebo celé číslo.": "$F(1)-F(0)$ değerini hesapla. Kesir ya da tam sayı gir.",
  "Vypočítaj $F({@0})$.": "$F({@0})$ değerini hesapla.",
  "Vypočítaj $F({@0})-F({@1})$.": "$F({@0})-F({@1})$ değerini hesapla.",
  "Vypočítaj $P(X=0)$. {@0}": "$P(X=0)$ değerini hesapla. {@0}",
  "Vypočítaj $P(X=1)$. {@0}": "$P(X=1)$ değerini hesapla. {@0}",
  "Vypočítaj $P(X={@0})$. {@1}": "$P(X={@0})$ değerini hesapla. {@1}",
  "Vypočítaj $P(X\\ge 1)$. {@0}": "$P(X\\ge 1)$ değerini hesapla. {@0}",
  "Vypočítaj $P(X\\le 1)$. {@0}": "$P(X\\le 1)$ değerini hesapla. {@0}",
  "Vypočítaj $\\dfrac{\\ln {@0}}{\\ln {@1}}$. {@2}": "$\\dfrac{\\ln {@0}}{\\ln {@1}}$ değerini hesapla. {@2}",
  "Vypočítaj $\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$. Výsledok zadaj ako zlomok alebo celé číslo.": "$\\displaystyle\\int_0^{1}({@0})^{{@1}}\\,dx$ integralini hesapla. Sonucu kesir ya da tam sayı olarak gir.",
  "Vypočítaj $\\int_0^{{@0}} x^2\\,dx$. Zadaj zlomok alebo celé číslo.": "$\\int_0^{{@0}} x^2\\,dx$ integralini hesapla. Kesir ya da tam sayı gir.",
  "Vypočítaj $\\int_0^{{@0}} {@1}\\,dx$.": "$\\int_0^{{@0}} {@1}\\,dx$ integralini hesapla.",
  "Vypočítaj $\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok.": "$\\lim_{x\\to 0} \\dfrac{\\sin {@0}x}{{@1}}$ limitini hesapla. Sonucu tam sayı ya da kesir olarak gir.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$. Výsledok zadaj ako zlomok.": "$\\lim_{x\\to {@0}} \\dfrac{\\sqrt{x}-{@1}}{x-{@2}}$ limitini hesapla. Sonucu kesir olarak gir.",
  "Vypočítaj $\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$.": "$\\lim_{x\\to {@0}} \\dfrac{{@1}}{{@2}}$ limitini hesapla.",
  "Vypočítaj $\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$. Výsledok zadaj ako celé číslo alebo zlomok (napr. -3/2).": "$\\lim_{x\\to\\infty} \\dfrac{{@0}}{{@1}}$ limitini hesapla. Sonucu tam sayı ya da kesir olarak gir (örn. -3/2).",
  "Vypočítaj $k$.": "$k$'yi hesapla.",
  "Vypočítaj $t$ z prvej súradnice a dosaď ho do zvyšných dvoch rovníc. Over starostlivo obe.": "Birinci koordinattan $t$'yi hesapla ve diğer iki denklemde yerine koy. İkisini de dikkatle kontrol et.",
  "Vypočítaj $|AB|^2$.": "$|AB|^2$ değerini hesapla.",
  "Vypočítaj $|\\vec u\\cdot\\vec n|$ pre $\\vec u=\\vec{{@0}}$ a normálový vektor $\\vec n={@1}$ (kocka s hranou $1$).": "$\\vec u=\\vec{{@0}}$ ve normal vektör $\\vec n={@1}$ için $|\\vec u\\cdot\\vec n|$ değerini hesapla (ayrıtı $1$ olan küp).",
  "Vypočítaj $|{@0}K|$ v cm. {@1}": "$|{@0}K|$ uzunluğunu cm olarak hesapla. {@1}",
  "Vypočítaj $|{@0}K|^2$.": "$|{@0}K|^2$ değerini hesapla.",
  "Vypočítaj absolútny člen $q$.": "Sabit terim $q$'yu hesapla.",
  "Vypočítaj aritmetický priemer $\\bar{x}$.": "Aritmetik ortalama $\\bar{x}$'i hesapla.",
  "Vypočítaj determinant $(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$.": "$(b_1-a_1)(c_2-a_2)-(b_2-a_2)(c_1-a_1)$ determinantını hesapla.",
  "Vypočítaj druhú deriváciu. Pre aké $x$ je $f''(x)=0$?": "İkinci türevi hesapla. Hangi $x$ için $f''(x)=0$ olur?",
  "Vypočítaj hodnotu v pravom krajnom bode, $f({@0})$.": "Sağ uç noktadaki $f({@0})$ değerini hesapla.",
  "Vypočítaj hodnotu v ľavom krajnom bode, $f({@0})$.": "Sol uç noktadaki $f({@0})$ değerini hesapla.",
  "Vypočítaj objem celého telesa v $\\text{dm}^3$. {@0}": "Cismin tamamının hacmini $\\text{dm}^3$ olarak hesapla. {@0}",
  "Vypočítaj objem celého telesa v $\\text{m}^3$. {@0}": "Cismin tamamının hacmini $\\text{m}^3$ olarak hesapla. {@0}",
  "Vypočítaj objem dutiny s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Yarıçapı ${@0}\\,\\text{cm}$ olan boşluğun hacmini $\\text{cm}^3$ olarak hesapla. {@1}",
  "Vypočítaj objem kužeľa v $\\text{dm}^3$. {@0}": "Koninin hacmini $\\text{dm}^3$ olarak hesapla. {@0}",
  "Vypočítaj objem materiálu v $\\text{cm}^3$. {@0}": "Malzemenin hacmini $\\text{cm}^3$ olarak hesapla. {@0}",
  "Vypočítaj objem plného valca s polomerom ${@0}\\,\\text{cm}$ v $\\text{cm}^3$. {@1}": "Yarıçapı ${@0}\\,\\text{cm}$ olan dolu silindirin hacmini $\\text{cm}^3$ olarak hesapla. {@1}",
  "Vypočítaj objem polgule v $\\text{m}^3$. {@0}": "Yarım kürenin hacmini $\\text{m}^3$ olarak hesapla. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$. {@0}": "Hacmi $\\text{cm}^3$ olarak hesapla. {@0}",
  "Vypočítaj objem v $\\text{cm}^3$.{@0}": "Hacmi $\\text{cm}^3$ olarak hesapla.{@0}",
  "Vypočítaj objem valca v $\\text{dm}^3$. {@0}": "Silindirin hacmini $\\text{dm}^3$ olarak hesapla. {@0}",
  "Vypočítaj objem valca v $\\text{m}^3$. {@0}": "Silindirin hacmini $\\text{m}^3$ olarak hesapla. {@0}",
  "Vypočítaj obsah $S$.": "Alan $S$'yi hesapla.",
  "Vypočítaj obsah podstavy $S_p$ v $\\text{cm}^2$. {@0}": "Taban alanı $S_p$'yi $\\text{cm}^2$ olarak hesapla. {@0}",
  "Vypočítaj obsah rezu v $\\text{cm}^2$. {@0}": "Kesitin alanını $\\text{cm}^2$ olarak hesapla. {@0}",
  "Vypočítaj obsah v $\\text{cm}^2$.": "Alanı $\\text{cm}^2$ olarak hesapla.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y=x^2$ a priamkou $y={@0}$. Výsledok zadaj ako zlomok alebo celé číslo.": "$y=x^2$ parabolü ve $y={@0}$ doğrusuyla sınırlanan şeklin alanını hesapla. Sonucu kesir ya da tam sayı olarak gir.",
  "Vypočítaj obsah útvaru ohraničeného parabolou $y={@0}-x^2$ a osou $x$. Výsledok zadaj ako zlomok alebo celé číslo.": "$y={@0}-x^2$ parabolü ve $x$ ekseniyle sınırlanan şeklin alanını hesapla. Sonucu kesir ya da tam sayı olarak gir.",
  "Vypočítaj obsah časti roviny, ktorú určuje sústava nerovníc $y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$.": "$y\\ge 0$, $y\\le {@0}$, $y\\le {@1}$ eşitsizlik sisteminin belirlediği düzlem parçasının alanını hesapla.",
  "Vypočítaj polomer gule v cm.": "Kürenin yarıçapını cm olarak hesapla.",
  "Vypočítaj polomer rezu $\\rho$ v cm.": "Kesitin yarıçapı $\\rho$'yu cm olarak hesapla.",
  "Vypočítaj povrch ihlana v $\\text{cm}^2$.": "Piramidin yüzey alanını $\\text{cm}^2$ olarak hesapla.",
  "Vypočítaj povrch v $\\text{cm}^2$. {@0}": "Yüzey alanını $\\text{cm}^2$ olarak hesapla. {@0}",
  "Vypočítaj priemer, potom priemer druhých mocnín odchýlok od neho. Smerodajná odchýlka je odmocnina z rozptylu.": "Ortalamayı, sonra ondan sapmaların karelerinin ortalamasını hesapla. Standart sapma varyansın kareköküdür.",
  "Vypočítaj priemernú známku. {@0}": "Not ortalamasını hesapla. {@0}",
  "Vypočítaj rozptyl $D(X)$.": "Varyans $D(X)$'i hesapla.",
  "Vypočítaj rozptyl $s^2$. {@0}": "Varyans $s^2$'yi hesapla. {@0}",
  "Vypočítaj skalárny súčin smerových vektorov $\\vec{{@0}}\\cdot\\vec{{@1}}$ (kocka s hranou $1$).": "Doğrultman vektörlerinin skaler çarpımı $\\vec{{@0}}\\cdot\\vec{{@1}}$'i hesapla (ayrıtı $1$ olan küp).",
  "Vypočítaj smernicu $k=f'({@0})$.": "Eğim $k=f'({@0})$'ı hesapla.",
  "Vypočítaj smerodajnú odchýlku $s$. {@0}": "Standart sapma $s$'yi hesapla. {@0}",
  "Vypočítaj stranu $s$ v cm.": "Ana doğru $s$'yi cm olarak hesapla.",
  "Vypočítaj stranu kužeľa $s$ v cm.": "Koninin ana doğrusu $s$'yi cm olarak hesapla.",
  "Vypočítaj strednú hodnotu $E(X)$ (zlomok alebo desatinné číslo aspoň na 2 miesta).": "Beklenen değer $E(X)$'i hesapla (kesir ya da en az 2 basamaklı ondalık sayı).",
  "Vypočítaj súčet $R^2+Rr+r^2$.": "$R^2+Rr+r^2$ toplamını hesapla.",
  "Vypočítaj súčet $a_1^2+a_1a_2+a_2^2$.": "$a_1^2+a_1a_2+a_2^2$ toplamını hesapla.",
  "Vypočítaj súčet druhých mocnín odchýlok od priemeru.": "Ortalamadan sapmaların karelerinin toplamını hesapla.",
  "Vypočítaj uhol priamky s rovinou v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Doğrunun düzlemle yaptığı açıyı derece olarak hesapla. Sonucu derecenin onda birine yuvarla.",
  "Vypočítaj uhol priamok v stupňoch. Výsledok zaokrúhli na desatiny stupňa.": "Doğrular arasındaki açıyı derece olarak hesapla. Sonucu derecenin onda birine yuvarla.",
  "Vypočítaj vzdialenosť bodu ${@0}$ od roviny v cm. {@1}": "${@0}$ noktasının düzleme uzaklığını cm olarak hesapla. {@1}",
  "Vypočítaj výšku $v_c$. {@0}": "Yükseklik $v_c$'yi hesapla. {@0}",
  "Vypočítaj {@0} hodnotu funkcie $f(x)={@1}$ na intervale $\\langle {@2}; {@3}\\rangle$.": "$f(x)={@1}$ fonksiyonunun $\\langle {@2}; {@3}\\rangle$ aralığındaki {@0} değerini hesapla.",
  "Vypočítaj {@0} súboru ${@1}$. {@2}": "${@1}$ veri kümesinin {@0} nedir? {@2}",
  "Vypočítaj {@0} v $\\text{cm}^2$. {@1}": "{@0} $\\text{cm}^2$ olarak hesapla. {@1}",
  "Vypočítaj {@0}. {@1}": "{@0} hesapla. {@1}",
  "Vypočítal si $f\\!\\left({@0}\\right)$. Hodnota $f^{-1}(c)$ je však číslo $x$, pre ktoré $f(x)=c$.": "$f\\!\\left({@0}\\right)$ değerini hesapladın. Oysa $f^{-1}(c)$ değeri, $f(x)=c$ olan $x$ sayısıdır.",
  "Vypĺňaj miesta postupne a použi pravidlo súčinu. Prvá cifra nesmie byť nula; pri podmienke na deliteľnosť začni poslednou cifrou a rozdeľ prípady.": "Yerleri sırayla doldur ve çarpma kuralını kullan. Birinci rakam sıfır olamaz; bölünebilme koşulu varsa son rakamdan başla ve durumlara ayır.",
  "Vyrieš každú nerovnicu zvlášť (pozor na delenie záporným číslom) a urob prienik intervalov.": "Her eşitsizliği ayrı ayrı çöz (negatif sayıya bölmeye dikkat et) ve aralıkların kesişimini al.",
  "Vyrieš rovnicu $({@0})^2{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou (zlomok napr. ako 1/2).": "$({@0})^2{@1}{@2}=0$ denklemini çöz. Tüm çözümleri noktalı virgülle ayırarak gir (kesri örneğin 1/2 olarak).",
  "Vyrieš rovnicu $\\log_2({@0})+\\log_2({@1})={@2}$. Zadaj všetky riešenia oddelené bodkočiarkou.": "$\\log_2({@0})+\\log_2({@1})={@2}$ denklemini çöz. Tüm çözümleri noktalı virgülle ayırarak gir.",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou (napr. 30; 150).": "${@0}$ denklemini {@1} için çöz. Tüm çözümleri derece olarak noktalı virgülle ayırarak gir (örn. 30; 150).",
  "Vyrieš rovnicu ${@0}$ pre {@1}. Zadaj všetky riešenia v stupňoch oddelené bodkočiarkou.": "${@0}$ denklemini {@1} için çöz. Tüm çözümleri derece olarak noktalı virgülle ayırarak gir.",
  "Vyrieš rovnicu ${@0}={@1}$. {@2}": "${@0}={@1}$ denklemini çöz. {@2}",
  "Vyrieš rovnicu. Koľko vrcholov má mnohouholník?": "Denklemi çöz. Çokgenin kaç köşesi vardır?",
  "Vyrieš rovnicu. Koľko ľudí bolo na stretnutí?": "Denklemi çöz. Toplantıda kaç kişi vardı?",
  "Vyrieš sústavu rovníc $x+y={@0}$, $x\\cdot y={@1}$. Zadaj všetky možné hodnoty $x$ oddelené bodkočiarkou.": "$x+y={@0}$, $x\\cdot y={@1}$ denklem sistemini çöz. $x$'in tüm olası değerlerini noktalı virgülle ayırarak gir.",
  "Vyrieš v $\\mathbb{R}$ rovnicu ${@0}^{x}{@1}{@2}=0$. Zadaj všetky riešenia oddelené bodkočiarkou.": "${@0}^{x}{@1}{@2}=0$ denklemini $\\mathbb{R}$'de çöz. Tüm çözümleri noktalı virgülle ayırarak gir.",
  "Využi $\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$: vynásob a vydeľ výraz tak, aby si v menovateli dostal ten istý argument ako v sínuse.": "$\\lim_{t\\to 0}\\frac{\\sin t}{t}=1$ eşitliğinden yararlan: ifadeyi, paydada sinüsteki argümanın aynısı olacak şekilde çarp ve böl.",
  "Využi Vietove vzťahy: súčin koreňov je absolútny člen, súčet koreňov je $-p$. Alebo dosaď známy koreň do rovnice.": "Vieta bağıntılarından yararlan: köklerin çarpımı sabit terimdir, köklerin toplamı $-p$'dir. Ya da bilinen kökü denklemde yerine koy.",
  "Vzdialenosť h od nuly": "h'nin sıfıra uzaklığı",
  "Vzorec $\\frac{\\sin t}{t}\\to 1$ platí, len keď je v menovateli presne argument sínusu, teda ${@0}x$. Výraz najprv uprav.": "$\\frac{\\sin t}{t}\\to 1$ formülü yalnızca paydada tam olarak sinüsün argümanı, yani ${@0}x$ varken geçerlidir. Önce ifadeyi düzenle.",
  "Výber chlapcov a výber dievčat sa navzájom nevylučujú, kombinujú sa. Použi pravidlo súčinu, nie súčtu.": "Erkeklerin seçimi ve kızların seçimi birbirini dışlamaz, birleşir. Toplama değil, çarpma kuralını kullan.",
  "Výraz obsahuje len $x^2$, preto $f(-x)=f(x)$.": "İfade yalnızca $x^2$ içerir, bu yüzden $f(-x)=f(x)$.",
  "Výrobok je chybný s pravdepodobnosťou ${@0}$, nezávisle od ostatných. Náhodne vyberieme {@1} {@2}; $X$ je počet chybných.": "Bir ürün, diğerlerinden bağımsız olarak ${@0}$ olasılıkla kusurludur. Rastgele {@1} {@2} seçiyoruz; $X$ kusurlu ürünlerin sayısıdır.",
  "Výseč má stredový uhol $\\frac{n_i}{n}\\cdot 360^\\circ$.": "Dilimin merkez açısı $\\frac{n_i}{n}\\cdot 360^\\circ$'dir.",
  "Výsledky pokusu sú dvojice gúľ (kombinácie). Spočítaj všetky a priaznivé; pri „aspoň jedna“ je jednoduchší opačný jav.": "Deneyin sonuçları top ikilileridir (kombinasyonlar). Hepsini ve uygun olanları say; „en az bir“ için tümleyen olay daha kolaydır.",
  "Výsledok dosaď do vonkajšej funkcie: ${@0}({@1})$.": "Sonucu dış fonksiyonda yerine koy: ${@0}({@1})$.",
  "Výsledok je usporiadaná dvojica (prvá kocka, druhá kocka), všetkých je 36. Spočítaj priaznivé dvojice.": "Sonuç bir sıralı ikilidir (birinci zar, ikinci zar), toplam 36 tane vardır. Uygun ikilileri say.",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "Sonucu 2 ondalık basamağa yuvarla.",
  "Výsledok zaokrúhli na 4 desatinné miesta.": "Sonucu 4 ondalık basamağa yuvarla.",
  "Všetky hrany kocky zväčšíme o ${@0}\\,\\%$. O koľko percent sa zväčší jej {@1}? {@2}": "Bir küpün tüm ayrıtlarını ${@0}\\,\\%$ büyütüyoruz. Küpün {@1} yüzde kaç büyür? {@2}",
  "Všetkých trojíc je $\\binom{{@0}}{3}={@1}$. Opačný jav — vyberú sa len chlapci — má $\\binom{{@2}}{3}={@3}$ možností. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.": "Tüm üçlülerin sayısı $\\binom{{@0}}{3}={@1}$. Tümleyen olayın — yalnızca erkeklerin seçilmesi — $\\binom{{@2}}{3}={@3}$ olasılığı vardır. $P=1-\\frac{{@4}}{{@5}}=\\frac{{@6}}{{@7}}={@8}\\approx {@9}$.",
  "Všetkých výberov dvoch gúľ je $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.": "İki topun tüm seçimlerinin sayısı $\\binom{{@0}}{2}={@1}$. {@2} $P=\\frac{{@3}}{{@4}}={@5}\\approx {@6}$.",
  "Všetkých výsledkov je $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.": "Tüm sonuçların sayısı $6\\cdot 6=36$. {@0} $P=\\frac{{@1}}{36}={@2}$.",
  "Z $\\frac{n(n-3)}{2}={@0}$ je $n^2-3n-{@1}=0$ a kladný koreň $n={@2}$.": "$\\frac{n(n-3)}{2}={@0}$ eşitliğinden $n^2-3n-{@1}=0$ ve pozitif kök $n={@2}$.",
  "Z Pytagorovej vety vypočítaj diferenciu $d$.": "Pisagor teoreminden ortak fark $d$'yi hesapla.",
  "Z Vietovho vzťahu $x_1x_2={@0}$ je $x_2=\\frac{{@1}}{{@2}}={@3}$. Zo vzťahu $x_1+x_2=-p$ je $p=-({@4}{@5})={@6}$. Kontrola dosadením: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓": "Vieta bağıntısından, $x_1x_2={@0}$, $x_2=\\frac{{@1}}{{@2}}={@3}$. $x_1+x_2=-p$ bağıntısından $p=-({@4}{@5})={@6}$. Yerine koyarak kontrol: ${@7}^2{@8}\\cdot {@9}{@10}=0$ ✓",
  "Z jednej súradnice vypočítaj parameter $t$ a over, či rovnaké $t$ vyhovuje aj ostatným súradniciam.": "Bir koordinattan $t$ parametresini hesapla ve aynı $t$'nin diğer koordinatları da sağlayıp sağlamadığını kontrol et.",
  "Z lineárnej rovnice vyjadri $y$ a dosaď do druhej. Dostaneš kvadratickú rovnicu pre $x$.": "Doğrusal denklemden $y$'yi yalnız bırak ve diğerinde yerine koy. $x$ için ikinci dereceden bir denklem elde edersin.",
  "Z podmienky $D=0$ vyjadri $p^2$. Koľko je $p^2$?": "$D=0$ koşulundan $p^2$'yi bul. $p^2$ kaçtır?",
  "Z povrchu $S=4\\pi r^2$ vypočítaj polomer a dosaď ho do vzorca pre objem $V=\\frac{4}{3}\\pi r^3$.": "$S=4\\pi r^2$ yüzey alanından yarıçapı hesapla ve onu $V=\\frac{4}{3}\\pi r^3$ hacim formülünde yerine koy.",
  "Z prvej rovnice $y={@0}$. Dosadíme: $x({@1})={@2} \\Rightarrow {@3}=0$, korene $x_1={@4}$, $x_2={@5}$. Riešenia sústavy sú $[{@6}; {@7}]$ a $[{@8}; {@9}]$, $x$ je teda ${@10}$ alebo ${@11}$.": "Birinci denklemden $y={@0}$. Yerine koyarız: $x({@1})={@2} \\Rightarrow {@3}=0$, kökler $x_1={@4}$, $x_2={@5}$. Sistemin çözümleri $[{@6}; {@7}]$ ve $[{@8}; {@9}]$, yani $x$ ya ${@10}$ ya da ${@11}$ olur.",
  "Z rovnice $\\frac{n(n-1)}{2}={@0}$ vyjadri súčin $n(n-1)$. Koľko je?": "$\\frac{n(n-1)}{2}={@0}$ denkleminden $n(n-1)$ çarpımını bul. Kaçtır?",
  "Z rovnice $\\frac{n(n-3)}{2}={@0}$ vyjadri súčin $n(n-3)$. Koľko je?": "$\\frac{n(n-3)}{2}={@0}$ denkleminden $n(n-3)$ çarpımını bul. Kaçtır?",
  "Z rovnice ${@0}={@1}$ urči $x$-ové súradnice spoločných bodov.": "${@0}={@1}$ denkleminden ortak noktaların $x$ koordinatlarını bul.",
  "Z rovnice kružnice zisti stred a polomer, potom vypočítaj vzdialenosť stredu od priamky a porovnaj ju s polomerom.": "Çember denkleminden merkezi ve yarıçapı bul, sonra merkezin doğruya uzaklığını hesapla ve yarıçapla karşılaştır.",
  "Z rovnice priamky vyjadri $y$, dosaď do rovnice kružnice a vyrieš kvadratickú rovnicu pre $x$.": "Doğru denkleminden $y$'yi yalnız bırak, çember denkleminde yerine koy ve $x$ için ikinci dereceden denklemi çöz.",
  "Z rovnice priamky vyjadríme $y={@0}$ a dosadíme do rovnice kružnice. Po úprave dostaneme ${@1}=0$ s koreňmi $x_1={@2}$, $x_2={@3}$. Priesečníky sú $[{@4}; {@5}]$ a $[{@6}; {@7}]$.": "Doğru denkleminden $y={@0}$ olarak ifade eder ve çember denkleminde yerine koyarız. Düzenleyince kökleri $x_1={@2}$, $x_2={@3}$ olan ${@1}=0$ denklemini elde ederiz. Kesişim noktaları $[{@4}; {@5}]$ ve $[{@6}; {@7}]$.",
  "Z rovníc ${@0}^{x}=t$ urči všetky riešenia $x$ (pamätaj, že ${@1}^{x}&gt;0$).": "${@0}^{x}=t$ denklemlerinden tüm $x$ çözümlerini bul (${@1}^{x}&gt;0$ olduğunu unutma).",
  "Zabudol si deliť veľkosťou normálového vektora $|\\vec n|=\\sqrt{{@0}}$.": "Normal vektörün uzunluğuna, $|\\vec n|=\\sqrt{{@0}}$, bölmeyi unuttun.",
  "Zabudol si na kombinačné číslo $\\binom{{@0}}{{@1}}$: úspešné pokusy môžu byť medzi všetkými pokusmi rozmiestnené rôznymi spôsobmi.": "$\\binom{{@0}}{{@1}}$ kombinasyon sayısını unuttun: başarılı denemeler tüm denemeler arasında farklı şekillerde dağılabilir.",
  "Zabudol si na člen $u'v$: derivuj aj lineárnu funkciu v zátvorke.": "$u'v$ terimini unuttun: parantezdeki doğrusal fonksiyonun da türevini al.",
  "Zabudol si násobiť deriváciou vnútornej funkcie: $(\\sin kx)'=k\\cos kx$ a $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.": "İç fonksiyonun türeviyle çarpmayı unuttun: $(\\sin kx)'=k\\cos kx$ ve $(\\mathrm{e}^{mx})'=m\\,\\mathrm{e}^{mx}$.",
  "Zabudol si umocniť menovateľ: vo vzorci pre deriváciu podielu je v menovateli $v^2$.": "Paydanın karesini almayı unuttun: bölümün türev formülünde paydada $v^2$ vardır.",
  "Zabudol si vynásobiť deriváciou vnútornej funkcie: $({@0})'={@1}$.": "İç fonksiyonun türeviyle çarpmayı unuttun: $({@0})'={@1}$.",
  "Zadaj všetky hodnoty $p$.": "$p$'nin tüm değerlerini gir.",
  "Zadaj všetky možné hodnoty $x$.": "$x$'in tüm olası değerlerini gir.",
  "Zadaj všetky riešenia rovnice.": "Denklemin tüm çözümlerini gir.",
  "Započítal si aj „čísla“ začínajúce nulou. Na prvom mieste nula byť nemôže.": "Sıfırla başlayan „sayıları“ da saydın. Birinci yerde sıfır olamaz.",
  "Zapíš ${@0}^{x}$ ako $({@1}^{x})^2$ a zaveď substitúciu $t={@2}^{x}$. Nezabudni, že $t$ musí byť kladné.": "${@0}^{x}$'i $({@1}^{x})^2$ olarak yaz ve $t={@2}^{x}$ değişken değiştirmesini yap. $t$'nin pozitif olması gerektiğini unutma.",
  "Zapíš menovateľ ako $(\\sqrt{x})^2-a^2$ a rozlož ho podľa vzorca $A^2-B^2=(A-B)(A+B)$.": "Paydayı $(\\sqrt{x})^2-a^2$ olarak yaz ve $A^2-B^2=(A-B)(A+B)$ özdeşliğine göre çarpanlarına ayır.",
  "Zapíš podmienku cez opačný jav $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ a vyrieš ju logaritmovaním.": "Koşulu tümleyen olay yoluyla $\\left(\\frac{5}{6}\\right)^n&lt;1-p$ olarak yaz ve logaritma alarak çöz.",
  "Zapíš súčet prvých $n$ členov aritmetickej postupnosti a vyrieš nerovnicu $s_n\\ge$ požadovaný počet. Hľadáš najmenšie prirodzené $n$.": "Aritmetik dizinin ilk $n$ teriminin toplamını yaz ve $s_n\\ge$ istenen sayı eşitsizliğini çöz. En küçük doğal $n$'yi arıyorsun.",
  "Zaveď substitúciu $t={@0}$, vyrieš kvadratickú rovnicu a potom sa vráť k $x$ cez definíciu logaritmu.": "$t={@0}$ değişken değiştirmesini yap, ikinci dereceden denklemi çöz ve sonra logaritmanın tanımı yoluyla $x$'e geri dön.",
  "Zderivuj vonkajšiu mocninu (vnútro nechaj tak) a vynásob deriváciou vnútornej funkcie.": "Dıştaki kuvvetin türevini al (içi olduğu gibi bırak) ve iç fonksiyonun türeviyle çarp.",
  "Zisti znamienko $f'$ vľavo a vpravo od bodu.": "Noktanın solunda ve sağında $f'$'nin işaretini belirle.",
  "Zisti znamienko menovateľa pre $x$ tesne vpravo alebo vľavo od daného bodu a skombinuj ho so znamienkom čitateľa.": "Verilen noktanın hemen sağındaki veya solundaki $x$ için paydanın işaretini belirle ve payın işaretiyle birleştir.",
  "Zisti, ktoré body kocky v rovinách ležia. Tri body môžu určovať tú istú rovinu, aj keď sú to iné vrcholy.": "Küpün hangi noktalarının düzlemlerde olduğunu bul. Üç nokta, farklı köşeler olsa bile aynı düzlemi belirleyebilir.",
  "Zistil si len exponent ${@0}$. Z neho ešte vyjadri $x$.": "Yalnızca ${@0}$ üssünü buldun. Bundan bir de $x$'i bul.",
  "Zlogaritmuj obe strany a vyjadri $x$. {@0}": "İki tarafın logaritmasını al ve $x$'i yalnız bırak. {@0}",
  "Zložené úročenie: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Stav na účte tvorí geometrickú postupnosť s kvocientom ${@6}$.": "Bileşik faiz: $K_{{@0}}=K_0\\left(1+\\frac{p}{100}\\right)^{{@1}}={@2}\\cdot {@3}^{{@4}}\\approx {@5}\\,€$. Hesaptaki para, ortak çarpanı ${@6}$ olan bir geometrik dizi oluşturur.",
  "Zo štvorcového kartónu so stranou ${@0}\\,\\text{cm}$ odstrihneme v rohoch zhodné štvorce a zvyšok zahneme na otvorenú krabicu. {@1}": "Kenarı ${@0}\\,\\text{cm}$ olan kare bir kartonun köşelerinden eş kareler kesiyor ve kalanı katlayarak üstü açık bir kutu yapıyoruz. {@1}",
  "Zostane podiel vedúcich koeficientov: $\\frac{{@0}}{{@1}}{@2}$.": "Baş katsayıların bölümü kalır: $\\frac{{@0}}{{@1}}{@2}$.",
  "Zostav nerovnicu $\\left(1+\\frac{p}{100}\\right)^n\\ge k$ a vyrieš ju logaritmovaním. Výsledok zaokrúhli nahor.": "$\\left(1+\\frac{p}{100}\\right)^n\\ge k$ eşitsizliğini kur ve logaritma alarak çöz. Sonucu yukarı yuvarla.",
  "Zostav rovnicu roviny (normálový vektor je kolmý na dva vektory v rovine) a použi vzorec pre vzdialenosť bodu od roviny.": "Düzlemin denklemini kur (normal vektör düzlemdeki iki vektöre diktir) ve noktanın düzleme uzaklığı formülünü kullan.",
  "Zrezaný kužeľ": "Kesik koni",
  "Zrezaný rotačný kužeľ má polomery podstáv $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ a výšku $v={@2}\\,\\text{cm}$. Vypočítaj jeho {@3}. {@4}": "Bir dik dairesel kesik koninin taban yarıçapları $R={@0}\\,\\text{cm}$, $r={@1}\\,\\text{cm}$ ve yüksekliği $v={@2}\\,\\text{cm}$. {@3} hesapla. {@4}",
  "Zvislá asymptota je v nulovom bode menovateľa. Vodorovnú asymptotu dá limita pre $x\\to\\infty$: podiel koeficientov pri $x$.": "Düşey asimptot paydanın sıfır noktasındadır. Yatay asimptotu $x\\to\\infty$ limiti verir: $x$'in katsayılarının bölümü.",
  "Zvislá asymptota je v nulovom bode menovateľa: rieš rovnicu ${@0}=0$. Pozor na znamienko.": "Düşey asimptot paydanın sıfır noktasındadır: ${@0}=0$ denklemini çöz. İşarete dikkat et.",
  "Zvolíme $A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$.": "$A[0; 0; 0]$, $B[{@0}; 0; 0]$, $D[0; {@1}; 0]$, $E[0; 0; {@2}]$ seçeriz.",
  "Zvolíme kocku s hranou $1$: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ a body $E, F, G, H$ nad nimi so súradnicou $z=1$.": "Ayrıtı $1$ olan bir küp seçeriz: $A[0; 0; 0]$, $B[1; 0; 0]$, $C[1; 1; 0]$, $D[0; 1; 0]$ ve bunların üstünde $z=1$ koordinatlı $E, F, G, H$ noktaları.",
  "Základ a": "Taban a",
  "Záleží na tom, kto má akú funkciu, ide o variácie 3. triedy z {@0} prvkov: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.": "Kimin hangi görevi aldığı önemlidir, bunlar {@0} öğenin 3'lü varyasyonlarıdır: $V_3({@1})={@2}\\cdot {@3}\\cdot {@4}={@5}$.",
  "Zámenou $x$ za $-x$ sa sčítance len vymenia: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.": "$x$ yerine $-x$ koyunca toplananlar yalnızca yer değiştirir: $f(-x)=\\mathrm{e}^{-x}+\\mathrm{e}^{x}=f(x)$.",
  "ani sa cifry nesmú opakovať": "ve rakamlar tekrar edemez",
  "aspoň jeden reálny koreň": "en az bir gerçek kökü vardır",
  "aspoň jedna guľa je biela": "en az bir topun beyaz olma",
  "auto": "araba",
  "bicykel": "bisiklet",
  "biele": "beyaz",
  "bielych": "beyaz",
  "deliteľných piatimi": "5'e bölünebilen",
  "dievčat": "kız",
  "dievčatá": "kız",
  "do známky {@0} je to {@1}": "{@0} notuna kadar {@1}",
  "dotyčnica (jeden spoločný bod)": "teğet (bir ortak nokta)",
  "druh dopravy do práce": "işe ulaşım türü",
  "druhú": "ikinci",
  "dva rôzne reálne korene": "iki farklı gerçek kökü vardır",
  "dĺžku prepony v cm": "hipotenüsün uzunluğunu cm olarak",
  "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">pre h → 0 sa hodnota blíži k 1</span>": "f(−h) = f(h) = sin h / h = {@0} · <span class=\"c-accent\">h → 0 için değer 1'e yaklaşır</span>",
  "farba očí žiaka": "öğrencinin göz rengi",
  "f′ &lt; 0, funkcia klesá": "f′ &lt; 0, fonksiyon azalır",
  "hmotnosť balíka": "paketin ağırlığı",
  "jeden chlapec": "bir erkek öğrenci",
  "jedna guľa je biela a jedna čierna": "bir topun beyaz ve bir topun siyah olma",
  "jeho objem v $\\text{cm}^3$": "hacmini $\\text{cm}^3$ olarak",
  "jeho obsah v $\\text{cm}^2$": "alanını $\\text{cm}^2$ olarak",
  "jeho povrch v $\\text{cm}^2$": "yüzey alanını $\\text{cm}^2$ olarak",
  "k; q": "k; q",
  "končiace cifrou {@0}: {@1}": "{@0} ile bitenler: {@1}",
  "krajina, z ktorej prišiel turista": "turistin geldiği ülke",
  "kvalitatívny": "nitel",
  "kvantitatívny diskrétny": "nicel kesikli",
  "kvantitatívny spojitý": "nicel sürekli",
  "leží v rovine": "düzleminde yer alır",
  "lokálne maximum": "yerel maksimumu",
  "lokálne minimum": "yerel minimumu",
  "max": "maks",
  "medián": "medyanı",
  "mimobežné": "aykırı",
  "možností": "olasılık",
  "má sústava nekonečne veľa riešení": "sistemin sonsuz sayıda çözümü vardır",
  "mínus": "eksi",
  "môžu opakovať": "tekrar edebiliyorsa",
  "neleží v rovine": "düzleminde yer almaz",
  "nepárne, medián je {@0}. hodnota": "tektir, medyan sıralı veri kümesinin {@0}. değeridir",
  "nepárnych": "tek",
  "nesečnica (žiadny spoločný bod)": "dışta kalan (ortak nokta yok)",
  "nesmú opakovať": "tekrar edemiyorsa",
  "obe gule sú biele": "iki topun da beyaz olma",
  "objem": "hacmi",
  "objem hranola v $\\text{cm}^3$": "prizmanın hacmini $\\text{cm}^3$ olarak",
  "objem mení $k^3$-krát": "hacim $k^3$ kat değişir",
  "objem v $\\text{cm}^3$": "hacmini $\\text{cm}^3$ olarak",
  "obsah jeho plášťa v $\\text{cm}^2$": "yanal yüzey alanını $\\text{cm}^2$ olarak",
  "obsah plášťa": "yanal yüzey alanını",
  "obsah rezu v $\\text{cm}^2$. {@0}": "Kesitin alanını $\\text{cm}^2$ olarak hesapla. {@0}",
  "obľúbený šport": "en sevilen spor",
  "opäť ľubovoľnú": "yine herhangi bir rakam",
  "p; x₂": "p; x₂",
  "pešo": "yürüyerek",
  "plus": "artı",
  "polomer rezu v cm.": "Kesitin yarıçapını cm olarak hesapla.",
  "povrch": "yüzey alanı",
  "povrch hranola v $\\text{cm}^2$": "prizmanın yüzey alanını $\\text{cm}^2$ olarak",
  "povrch mení $k^2$-krát": "yüzey alanı $k^2$ kat değişir",
  "povrch v $\\text{cm}^2$": "yüzey alanını $\\text{cm}^2$ olarak",
  "počet": "sayı",
  "počet gólov v zápase": "bir maçtaki gol sayısı",
  "počet strán knihy": "kitabın sayfa sayısı",
  "počet súrodencov": "kardeş sayısı",
  "počet vymeškaných hodín za polrok": "bir dönemde devamsızlık saati sayısı",
  "počet áut v domácnosti": "hanedeki araba sayısı",
  "pre $t={@0}$ niektorá z nich neplatí, bod na priamke <strong>neleží</strong>.": "$t={@0}$ için bunlardan biri sağlanmaz, nokta doğru üzerinde <strong>değildir</strong>.",
  "pre $t={@0}$ obe platia, bod na priamke <strong>leží</strong>.": "$t={@0}$ için ikisi de sağlanır, nokta doğru <strong>üzerindedir</strong>.",
  "priamka je s rovinou rovnobežná a nemá s ňou spoločný bod": "doğru düzleme paraleldir ve onunla ortak noktası yoktur",
  "priamka je s rovinou rôznobežná (pretína ju v jednom bode)": "doğru düzlemi keser (bir noktada)",
  "priamka leží v rovine": "doğru düzlemin içindedir",
  "práve jeden (dvojnásobný) koreň": "tam olarak bir (çift katlı) kökü vardır",
  "párne, medián je priemer {@0}. a {@1}. hodnoty": "çifttir, medyan sıralı veri kümesinin {@0}. ve {@1}. değerlerinin ortalamasıdır",
  "párnych": "çift",
  "roviny sú rovnobežné rôzne": "düzlemler paralel ve farklıdır",
  "roviny sú rôznobežné (pretínajú sa v priamke)": "düzlemler kesişir (bir doğru boyunca)",
  "roviny sú totožné": "düzlemler çakışıktır",
  "rovnobežné": "paralel",
  "rozptyl": "varyansı",
  "sedadiel": "koltuk",
  "sedadlo": "koltuk",
  "sedadlá": "koltuk",
  "sečnica (2 spoločné body)": "kesen (2 ortak nokta)",
  "sečnica (dva spoločné body)": "kesen (iki ortak nokta)",
  "smerodajnú odchýlku": "standart sapması",
  "spotreba auta na 100 km": "arabanın 100 km'deki yakıt tüketimi",
  "stenovú výšku $v_s$ v cm": "yan yüz yüksekliğini $v_s$ cm olarak",
  "strojnásobí": "üç katına çıkar",
  "sústava nemá riešenie": "sistemin çözümü yoktur",
  "súčet je aspoň {@0}": "toplamın en az {@0} olma",
  "súčet je {@0}": "toplamın {@0} olma",
  "súčin je párny": "çarpımın çift olma",
  "teplota vzduchu na poludnie": "öğle saatindeki hava sıcaklığı",
  "terč nezasiahne ani jeden z nich": "hedefi hiçbirinin vuramama",
  "terč zasiahne aspoň jeden z nich": "hedefi en az birinin vurma",
  "terč zasiahne práve jeden z nich": "hedefi tam olarak birinin vurma",
  "tretiu": "üçüncü",
  "v rovine leží, takže v nej leží celá priamka": "düzlemdedir, bu yüzden doğrunun tamamı düzlemdedir",
  "v rovine neleží, preto nemajú spoločný bod": "düzlemde değildir, bu yüzden ortak noktaları yoktur",
  "variačné rozpätie": "açıklığı",
  "vlak": "tren",
  "vpravo": "sağında",
  "výrobkov": "ürün",
  "výrobky": "ürün",
  "výška žiaka": "öğrencinin boyu",
  "vľavo": "solunda",
  "vždy niektorú zo zvyšných": "her seferinde kalanlardan birini",
  "x; y": "x; y",
  "x; y; z": "x; y; z",
  "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · vzdialenosť stredu d = {@3} · r = 3 → {@4}": "x² + y² = 9 · <span class=\"c-accent\">y = −{@0}x {@1} {@2}</span> · merkezin uzaklığı d = {@3} · r = 3 → {@4}",
  "x₀ = {@0} · f′(x₀) = {@1} · {@2}": "x₀ = {@0} · f′(x₀) = {@1} · {@2}",
  "x₁; x₂": "x₁; x₂",
  "zdvojnásobí": "iki katına çıkar",
  "značka mobilného telefónu": "cep telefonu markası",
  "známka": "not",
  "znížil": "düştü",
  "zvýšil": "yükseldi",
  "{@0} Bod $K$ je stred hrany ${@1}$. Vypočítaj vzdialenosť bodov ${@2}$ a $K$ v cm. {@3}": "{@0} $K$ noktası ${@1}$ ayrıtının orta noktasıdır. ${@2}$ ve $K$ noktaları arasındaki uzaklığı cm olarak hesapla. {@3}",
  "{@0} Funkcia je <strong>{@1}</strong>.": "{@0} Fonksiyon <strong>{@1}</strong> bir fonksiyondur.",
  "{@0} Normálové vektory sú ${@1}$ a ${@2}$. {@3}": "{@0} Normal vektörler ${@1}$ ve ${@2}$. {@3}",
  "{@0} Normálový vektor roviny ${@1}$ je $\\vec{n}={@2}$ (kolmý na $\\vec{{@3}{@4}}$ aj $\\vec{{@5}{@6}}$), smerový vektor priamky $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}": "{@0} ${@1}$ düzleminin normal vektörü $\\vec{n}={@2}$ (hem $\\vec{{@3}{@4}}$ hem de $\\vec{{@5}{@6}}$ vektörüne dik), doğrunun doğrultman vektörü $\\vec{u}={@7}$. $\\vec{u}\\cdot\\vec{n}={@8}$. {@9}",
  "{@0} Potom ${@1}{@2}$ a $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.": "{@0} O zaman ${@1}{@2}$ ve $K{@3}$. $|{@4}K|=\\sqrt{{@5}}=\\sqrt{{@6}}{@7}\\,\\text{cm}$.",
  "{@0} Rovina ${@1}$ má normálový vektor $\\vec{n}={@2}$ a rovnicu ${@3}=0$. Pre ${@4}{@5}$: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.": "{@0} ${@1}$ düzleminin normal vektörü $\\vec{n}={@2}$ ve denklemi ${@3}=0$. ${@4}{@5}$ için: $d=\\dfrac{{@6}}{\\sqrt{{@7}}}\\approx {@8}\\,\\text{cm}$.",
  "{@0} Smerový vektor priamky $\\vec{u}=\\vec{{@1}}={@2}$, vektor $\\vec{{@3}{@4}}={@5}$. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.": "{@0} Doğrunun doğrultman vektörü $\\vec{u}=\\vec{{@1}}={@2}$, $\\vec{{@3}{@4}}={@5}$ vektörü. $d=\\dfrac{|\\vec{{@6}{@7}}\\times\\vec{u}|}{|\\vec{u}|}=\\dfrac{|{@8}|}{\\sqrt{{@9}}}\\approx {@10}\\,\\text{cm}$.",
  "{@0} Správne je ${@1}$, $k\\in\\mathbb{Z}$.": "{@0} Doğrusu: ${@1}$, $k\\in\\mathbb{Z}$.",
  "{@0} Substitúcia $t={@1} x$: ${@2}=0$, korene $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Spolu $K=\\{{@7}\\}$.": "{@0} $t={@1} x$ değişken değiştirmesi: ${@2}=0$, kökler $t_1={@3}$, $t_2={@4}$. {@5} {@6}. Toplam $K=\\{{@7}\\}$.",
  "{@0} Vypočítaj $P(X={@1})$. {@2}": "{@0} $P(X={@1})$ değerini hesapla. {@2}",
  "{@0} Vypočítaj $P(X\\ge 1)$. {@1}": "{@0} $P(X\\ge 1)$ değerini hesapla. {@1}",
  "{@0} Vypočítaj pravdepodobnosť, že $X\\le 1$. {@1}": "{@0} $X\\le 1$ olma olasılığını hesapla. {@1}",
  "{@0} Vypočítaj strednú hodnotu $E(X)$ a rozptyl $D(X)$. Zadaj ich v tomto poradí oddelené bodkočiarkou (ako zlomky alebo desatinné čísla zaokrúhlené aspoň na 2 miesta).": "{@0} Beklenen değer $E(X)$'i ve varyans $D(X)$'i hesapla. Bunları bu sırayla noktalı virgülle ayırarak gir (kesir ya da en az 2 basamağa yuvarlanmış ondalık sayı olarak).",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od priamky ${@2}$ v cm. {@3}": "{@0} ${@1}$ köşesinin ${@2}$ doğrusuna uzaklığını cm olarak hesapla. {@3}",
  "{@0} Vypočítaj vzdialenosť vrcholu ${@1}$ od roviny ${@2}$ v cm. {@3}": "{@0} ${@1}$ köşesinin ${@2}$ düzlemine uzaklığını cm olarak hesapla. {@3}",
  "{@0} Výsledok zaokrúhli na desatiny.": "{@0} Sonucu onda birlere yuvarla.",
  "{@0} Znak je <strong>{@1}</strong>.": "{@0} Değişken <strong>{@1}</strong>.",
  "{@0} chlapci": "{@0} erkek öğrenci",
  "{@0} dievčatá": "{@0} kız öğrenci",
  "{@0} usporiadaného súboru. Aký je medián?": "{@0} (sıralanmış veri kümesi). Medyan nedir?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Aký je medián známok?": "{@0} sınıftaki yazılı sınav notlarını gösteriyor:{@1}Notların medyanı nedir?",
  "{@0} zobrazuje známky z písomky v triede:{@1}Vypočítaj priemernú známku. {@2}": "{@0} sınıftaki yazılı sınav notlarını gösteriyor:{@1}Not ortalamasını hesapla. {@2}",
  "{@0} {@1}": "{@0} {@1}",
  "{@0}Zaveď $t={@1} x$, vyrieš kvadratickú rovnicu a ponechaj len korene z intervalu $\\langle -1; 1\\rangle$.": "{@0}$t={@1} x$ değişkenini tanımla, ikinci dereceden denklemi çöz ve yalnızca $\\langle -1; 1\\rangle$ aralığındaki kökleri tut.",
  "Údaje najprv usporiadaj podľa veľkosti. Pri párnom počte je medián priemerom dvoch prostredných hodnôt.": "Verileri önce büyüklüğe göre sırala. Veri sayısı çiftse medyan ortadaki iki değerin ortalamasıdır.",
  "Útvar ohraničený parabolou a priamkou": "Bir parabol ve bir doğruyla sınırlanan şekil",
  "Čitateľ ${@0}$ rozlož na súčin ${@1}\\cdot(x+c)$. Aké je číslo $c$?": "${@0}$ payını ${@1}\\cdot(x+c)$ çarpımı olarak çarpanlarına ayır. $c$ sayısı nedir?",
  "Čitateľ derivácie ${@0}({@1})-({@2})\\cdot {@3}$ je po úprave konštanta. Aká?": "${@0}({@1})-({@2})\\cdot {@3}$ türev payı, düzenleyince bir sabittir. Hangisi?",
  "Čitateľ je nenulová konštanta a menovateľ sa blíži k nule, takže zlomok v absolútnej hodnote rastie nad všetky medze.": "Pay sıfırdan farklı bir sabit, payda sıfıra yaklaşıyor, bu yüzden kesir mutlak değerce sınırsız büyür.",
  "Čitateľ má nižší stupeň než menovateľ, v čitateli preto zostane len nula a limita je $0$.": "Payın derecesi paydanınkinden küçüktür, bu yüzden payda yalnızca sıfır kalır ve limit $0$ olur.",
  "Čitateľ zmení znamienko, menovateľ nie: $f(-x)=-f(x)$.": "Pay işaret değiştirir, payda değiştirmez: $f(-x)=-f(x)$.",
  "Čitateľa aj menovateľa vydelíme najvyššou mocninou menovateľa, teda ${@0}$. Všetky členy tvaru $\\frac{c}{x^k}$ sa blížia k nule. {@1}": "Pay ve paydayı paydanın en yüksek kuvvetine (${@0}$) böleriz. $\\frac{c}{x^k}$ biçimindeki tüm terimler sıfıra yaklaşır. {@1}",
  "Člen $uv'$ je $({@0})\\cdot\\frac{1}{x}$. Koľko je teda $f'(1)$?": "$uv'$ terimi $({@0})\\cdot\\frac{1}{x}$. O hâlde $f'(1)$ kaçtır?",
  "Číslo $f({@0})$ nie je absolútny člen $q$. Dosaď do $y=f(x_0)+f'(x_0)(x-x_0)$ a roznásob zátvorku.": "$f({@0})$ sayısı sabit terim $q$ değildir. $y=f(x_0)+f'(x_0)(x-x_0)$ içinde yerine koy ve parantezi aç.",
  "Číslo z vodorovnej asymptoty $y=\\dots$ (limita pre $x\\to\\infty$)?": "Yatay asimptot $y=\\dots$'taki sayı nedir ($x\\to\\infty$ limiti)?",
  "Číslo zo zvislej asymptoty $x=\\dots$ (nulový bod menovateľa)?": "Düşey asimptot $x=\\dots$'taki sayı nedir (paydanın sıfır noktası)?",
  "čas behu na 100 m": "100 m koşu süresi",
  "čierne": "siyah",
  "čiernych": "siyah",
  "ľubovoľnú cifru": "herhangi bir rakam",
  "ľubovoľnú cifru okrem nuly": "sıfır dışında herhangi bir rakam",
  "Žiaci odpovedali, ako chodia do školy:{@0}{@1} Výsledok zaokrúhli na desatiny.": "Öğrenciler okula nasıl gittiklerini cevapladı:{@0}{@1} Sonucu onda birlere yuvarla.",
  "Žiadny z nich neleží vo vnútri intervalu.": "Bunların hiçbiri aralığın içinde değildir.",
  "Žiak v teste s {@0} otázkami náhodne tipuje; každá otázka má štyri možnosti a práve jedna je správna. Náhodná premenná $X$ je počet správnych odpovedí.": "Bir öğrenci {@0} soruluk bir testte rastgele tahmin yürütüyor; her sorunun dört seçeneği var ve tam olarak biri doğru. $X$ rastgele değişkeni doğru cevapların sayısıdır.",
  "žiadny reálny koreň": "hiç gerçek kökü yoktur",
  "„Najviac jeden“ zahŕňa aj možnosť, že nenastane žiadny úspech. Pripočítaj $P(X=0)$.": "„En fazla bir“, hiç başarı olmaması olasılığını da içerir. $P(X=0)$ ekle.",
  "„Najviac jeden“ znamená 0 alebo 1 úspech. Sčítaj tieto dve pravdepodobnosti.": "„En fazla bir“, 0 ya da 1 başarı demektir. Bu iki olasılığı topla."
 }
});
