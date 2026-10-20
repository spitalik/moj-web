/* Türkçe: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/v7/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "v7-chyby": {
   "title": "Hesaplamalarda hata ve doğruluk",
   "summary": "Mutlak ve bağıl hata, anlamlı basamaklar, makine sayıları ve makine epsilonu, hata yayılımı, problemin koşullanması ve çıkarmada doğruluk kaybı.",
   "theory": [
    "<p>Sayısal bir hesaplamanın sonucu neredeyse her zaman yalnızca <strong>yaklaşıktır</strong>. Hatalar birkaç kaynaktan gelir: <em>modelden</em>\n       (gerçekliğin basitleştirilmiş betimlemesi), <em>girdi verilerinden</em> (ölçümler), <em>yöntemden</em> (sonsuz bir süreci, örneğin bir seriyi veya limiti, sonlu bir süreçle değiştiririz — yöntem\n       ya da kesikleştirme hatası) ve sonlu sayıda basamakla hesap yaparken yapılan <em>yuvarlamadan</em>.</p>\n       <p>$x$ kesin değer ve $\\tilde{x}$ onun bir yaklaşığıysa <strong>mutlak hata</strong> $\\Delta = |x-\\tilde{x}|$, <strong>bağıl hata</strong> ise\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$'dir ($x\\neq 0$ için); çoğu zaman yüzde olarak verilir. Kesin değeri genellikle bilmeyiz, bu yüzden hatanın bir <em>tahminiyle</em> (sınırıyla) çalışırız:\n       $|x-\\tilde{x}|\\le\\varepsilon$ olan bir $\\varepsilon$ sayısı ve $x=\\tilde{x}\\pm\\varepsilon$ yazarız. Bağıl hata daha önemlidir, çünkü birimlere bağlı değildir:\n       1 mm'lik hata bir köprünün uzunluğunda önemsizdir, ama bir sacın kalınlığında çok büyüktür.</p>",
    "<p><strong>Anlamlı basamaklar.</strong> $\\tilde{x}$ yaklaşığının $10^{-k}$ basamağındaki rakamı, $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$ ise <em>anlamlıdır</em> (güvenilirdir).\n       Anlamlı basamak sayısını soldan sıfırdan farklı ilk rakamdan son anlamlı rakama kadar sayarız. Örneğin hatası en fazla $0{,}004$ olan $\\tilde{x}=23{,}4718$ sayısının iki ondalık basamağı anlamlıdır\n       ($0{,}004\\le 0{,}005$), yani 2, 3, 4, 7 olmak üzere dört anlamlı basamağı vardır. $k$ ondalık basamağa <strong>yuvarlama</strong> en fazla $\\frac{1}{2}\\cdot 10^{-k}$ hataya yol açar;\n       dolayısıyla doğru yuvarlanmış bir sayının yazılan tüm basamakları anlamlıdır.</p>",
    "<p><strong>Makine sayıları.</strong> Bilgisayar reel sayıları $\\pm m\\cdot\\beta^{e}$ kayan nokta biçiminde saklar; burada $\\beta$ taban, $m$ mantisi sabit sayıda\n       $t$ basamaklıdır ve $e$ üssü sınırlı bir aralıktadır. IEEE 754 standardının çift duyarlıklı (double) biçimi $\\beta=2$, $t=53$ bitlik mantis ve\n       yaklaşık $-1022$ ile $1023$ arasındaki üsleri kullanır. Makine sayılarının kümesi sonludur; dışında <em>taşma</em> (çok büyük sayı) veya <em>alttan taşma</em> (çok küçük sayı) olur.</p>\n       <p><strong>Makine epsilonu</strong> $\\varepsilon_M$, 1 sayısının ondan büyük en yakın makine sayısına uzaklığıdır; double için $\\varepsilon_M=2^{-52}\\approx 2{,}22\\cdot 10^{-16}$.\n       Bir reel sayıyı makine sayısına yuvarlamak $\\mathrm{fl}(x)=x(1+\\eta)$ verir; burada $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$'dir (birim yuvarlama hatası).\n       Yani double yaklaşık 15–16 anlamlı ondalık basamak taşır. $0{,}1$ sayısının bile ikili sistemde sonlu bir gösterimi yoktur, bu yüzden örneğin $0{,}1+0{,}2$ tam olarak $0{,}3$ değildir.</p>",
    "<p><strong>Hata yayılımı.</strong> Girdi hatalarının tahminleri için (doğrusal yaklaşımda) şunlar geçerlidir:\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       $y=f(x)$ fonksiyonu için $\\Delta y\\approx|f'(x)|\\,\\Delta x$, çok değişkenli bir fonksiyon için $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$'dir.\n       Yani toplamada mutlak hatalar, çarpma ve bölmede ise bağıl hatalar toplanır.</p>\n       <p><strong>Koşullanma.</strong> Girdideki küçük bir bağıl değişim sonuçta küçük bir bağıl değişime yol açıyorsa problem <em>iyi koşullanmıştır</em>. Ölçüsü\n       $\\delta y\\approx\\kappa\\,\\delta x$ olacak biçimdeki <strong>koşul sayısı</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$'dir. Örneğin $f(x)=\\ln x$ için $\\kappa=\\frac{1}{|\\ln x|}$'dir;\n       bu, $x$ 1'e yakınken büyük bir sayıdır: 1'e yakın bir sayının logaritması kötü koşullanmış bir problemdir. Koşullanma <em>problemin</em> bir özelliğidir, <em>kararlılık</em> ise\n       <em>algoritmanın</em> — kararlı bir algoritma yuvarlama hatalarını problemin koşullanmasının gerektirdiğinden daha fazla büyütmez.</p>",
    "<p><strong>Çıkarmada doğruluk kaybı.</strong> Birbirine yakın iki sayının farkı kötü koşullanmıştır: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$ ve payda küçüktür.\n       Ortak baştaki basamaklar çıkarmayla birbirini götürür ve kalan basamaklar hatalıdır (<em>yıkıcı sadeleşme</em> denir). Çıkarmayı ortadan kaldıran cebirsel bir dönüşüm yardımcı olur:\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "$\\pi$ sayısını $3{,}14$ değeriyle değiştiriyoruz. Yaklaşığın mutlak ve bağıl hatasını ve anlamlı basamak sayısını bul.",
     "steps": [
      "$\\Delta=|\\pi-3{,}14|=|3{,}14159\\ldots-3{,}14|\\approx 0{,}00159$.",
      "$\\delta=\\frac{0{,}00159}{3{,}14159}\\approx 0{,}000507=0{,}0507\\,\\%$.",
      "$0{,}00159\\le 0{,}005=\\frac{1}{2}\\cdot 10^{-2}$ olduğundan iki ondalık basamak anlamlıdır. $3{,}14$ yaklaşığının <strong>3 anlamlı basamağı</strong> vardır."
     ]
    },
    {
     "task": "$x^2-200x+1=0$ denkleminin küçük kökü $x=100-\\sqrt{9999}$'dur. Bunu 4 anlamlı basamaklı aritmetikte doğrudan ve çıkarmayı ortadan kaldıran bir dönüşümden sonra hesapla.",
     "steps": [
      "4 anlamlı basamağa $\\sqrt{9999}=99{,}99499\\ldots\\approx 100{,}0$'dır. Doğrudan hesap $100-100{,}0=0$ verir — tüm basamaklar kaybolmuştur, bağıl hata %100'dür.",
      "İfadeyi genişletiriz: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "Şimdi $\\frac{1}{100+100{,}0}=\\frac{1}{200{,}0}=0{,}005000$. Kesin değer $0{,}0050001250\\ldots$ olduğundan sonucun 4 basamağının hepsi anlamlıdır.",
      "Problemin kendisi iyi koşullanmıştır; kötü olan yalnızca algoritmaydı (birbirine yakın sayıların çıkarılması)."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "Denklemlerin sayısal çözümü",
   "summary": "Kökün ayrılması, ikiye bölme yöntemi, basit iterasyon, Newton yöntemi ve kiriş yöntemi, yakınsama mertebesi ve durdurma ölçütleri.",
   "theory": [
    "<p>$f(x)=0$ denkleminin bir formülle ifade edilemeyen $\\xi$ kökünü arıyoruz (örneğin $x=\\cos x$ veya $x^5-x-1=0$). Önce kökü <strong>ayırırız</strong> — içinde tam olarak bir kök bulunan\n       bir $[a, b]$ aralığı buluruz. <strong>Bolzano teoremine</strong> göre $f(a)\\,f(b)&lt;0$ olan sürekli bir fonksiyonun $(a, b)$ aralığında en az bir kökü vardır; ayrıca\n       $f'$, $[a, b]$ üzerinde işaret değiştirmiyorsa kök tektir.</p>\n       <p><strong>İkiye bölme yöntemi (aralık yarılama).</strong> Orta nokta $c=\\frac{a+b}{2}$'yi hesaplarız. $f(a)\\,f(c)&lt;0$ ise $[a, c]$ ile, aksi hâlde $[c, b]$ ile devam ederiz. Her adım\n       aralığı ikiye böler; $n$ adım sonra uzunluğu $\\frac{b-a}{2^n}$ olur. En fazla $\\varepsilon$ uzunluğa ulaşmak için $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$ adım gerekir.\n       Yöntem yavaştır, ama <em>her zaman</em> yakınsar ve yalnızca fonksiyon değerlerinin işaretlerine ihtiyaç duyar.</p>",
    "<p><strong>Basit iterasyon yöntemi.</strong> Denklemi $x=g(x)$ biçiminde yeniden yazar ve $x_{k+1}=g(x_k)$ hesaplarız. $g$, $I$ aralığını kendi içine gönderiyorsa ve\n       $I$ üzerinde $|g'(x)|\\le q&lt;1$ ise, $g$'nin $I$'da tek bir <em>sabit noktası</em> $\\xi$ vardır ve dizi her $x_0\\in I$ başlangıcı için ona yakınsar (Banach sabit nokta teoremi).\n       Şu tahminler geçerlidir:\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       Biçimin seçimi önemlidir: $x^2-2=0$ denklemi $x=\\frac{2}{x}$ (iterasyonlar salınır, $|g'(\\sqrt{2})|=1$) ya da $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$ (çok hızlı yakınsama) olarak yazılabilir.</p>",
    "<p><strong>Newton yöntemi (teğet yöntemi).</strong> Fonksiyonun grafiğini $x_k$ noktasında teğetiyle değiştirir ve bir sonraki yaklaşık değer olarak teğetin $x$ ekseniyle kesişimini alırız:\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       Basit bir kökte ($f'(\\xi)\\neq 0$) ve köke yeterince yakın bir başlangıçta <strong>karesel</strong> olarak yakınsar: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$;\n       anlamlı basamak sayısı her adımda kabaca iki katına çıkar. <em>Fourier koşulu:</em> $f'$ ve $f''$, $[a, b]$ üzerinde işaret değiştirmiyorsa ve $f(x_0)\\,f''(x_0)&gt;0$ olan\n       uç noktadan başlıyorsak iterasyonlar monoton olarak yakınsar. Kötü bir başlangıçtan yöntem çok uzağa sıçrayabilir; katlı bir kökte yalnızca doğrusal olarak yakınsar.</p>",
    {
     "fig": "v7-newton",
     "caption": "$f(x)=x^2-2$ için Newton yöntemi: $[x_k; f(x_k)]$ noktasından teğet çizeriz ve onun $x$ ekseniyle kesişimi $x_{k+1}$'dir. Yalnızca üç adımdan sonra $\\sqrt{2}$ yaklaşığının hatası $10^{-6}$ ile $10^{-12}$ mertebesindedir."
    },
    "<p><strong>Kiriş yöntemi</strong>, türevi son iki yaklaşık değerden elde edilen fark bölümüyle değiştirir:\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       Türeve ihtiyaç duymaz ve $\\frac{1+\\sqrt{5}}{2}\\approx 1{,}618$ mertebesiyle yakınsar. Kirişi her zaman (ikiye bölmedeki gibi) zıt işaretli noktalardan geçirirsek\n       <em>regula falsi</em> (yanlış konum yöntemi) elde ederiz; bu yöntem her zaman yakınsar, ama genellikle yalnızca doğrusal olarak.</p>\n       <p><strong>Yakınsama mertebesi.</strong> $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$ ise yöntemin mertebesi $p$'dir; $p=1$ (doğrusal yakınsama) için $C&lt;1$ olmalıdır. İkiye bölme ve basit iterasyon\n       1. mertebeden, kiriş yöntemi $1{,}618$ mertebesinden, Newton yöntemi 2. mertebedendir. <strong>Durdurma ölçütleri:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, bağıl olarak $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$ ve her zaman bir de en fazla iterasyon sayısı. Fonksiyon çok yassıysa küçük bir $|f(x_k)|$ tek başına köke yakınlığı güvence altına almaz.</p>"
   ],
   "examples": [
    {
     "task": "Newton yöntemiyle $\\sqrt{5}$'i $f(x)=x^2-5$ fonksiyonunun kökü olarak bul; $x_0=2$ noktasından başla ve iki adım yap.",
     "steps": [
      "$f'(x)=2x$, dolayısıyla $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2{,}25$.",
      "$x_2=2{,}25-\\frac{2{,}25^2-5}{4{,}5}=2{,}25-\\frac{0{,}0625}{4{,}5}\\approx 2{,}236111$.",
      "Kesin değer $\\sqrt{5}=2{,}236068\\ldots$: hata $0{,}014$'ten $0{,}00004$'e düştü; bu, karesel yakınsamaya karşılık gelir."
     ]
    },
    {
     "task": "İkiye bölme yöntemiyle $x^3-x-1=0$ denkleminin kökünü $[1; 2]$ aralığında konumlandır (üç adım). Uzunluğu en fazla $10^{-6}$ olan bir aralık için kaç adım gerekirdi?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$; kök $[1; 2]$ aralığındadır.",
      "$f(1{,}5)=0{,}875&gt;0$ → $[1; 1{,}5]$. $f(1{,}25)\\approx-0{,}297&lt;0$ → $[1{,}25; 1{,}5]$. $f(1{,}375)\\approx 0{,}225&gt;0$ → $[1{,}25; 1{,}375]$.",
      "$n$ adım sonra aralığın uzunluğu $2^{-n}$'dir. $2^{-n}\\le 10^{-6}$ koşulu $n\\ge 6\\log_2 10\\approx 19{,}93$ verir, yani <strong>20 adım</strong>.",
      "Kök $\\xi\\approx 1{,}3247$'dir; Newton yöntemi aynı doğruluğa 4–5 adımda ulaşırdı."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "İnterpolasyon ve yaklaşım",
   "summary": "Lagrange ve Newton biçiminde interpolasyon polinomu, bölünmüş farklar, interpolasyon hatası, Runge olayı ve en küçük kareler yöntemi.",
   "theory": [
    "<p><strong>İnterpolasyon problemi.</strong> Birbirinden farklı $x_0, x_1, \\dots, x_n$ <em>düğüm noktaları</em> ve $y_0, y_1, \\dots, y_n$ değerleri veriliyor (örneğin ölçülmüş ya da bir tablodan alınmış).\n       Tüm $i$ için $P_n(x_i)=y_i$ olan, derecesi en fazla $n$ olan bir $P_n$ polinomu arıyoruz. Böyle bir polinom vardır ve <strong>tektir</strong>: koşullar, determinantı\n       $\\prod_{i&lt;j}(x_j-x_i)$ sıfırdan farklı olan Vandermonde matrisli bir sistem oluşturur. Ardından polinomu düğüm noktaları arasındaki değerleri hesaplamak için kullanırız.</p>",
    "<p><strong>Lagrange biçimi.</strong> Her düğüm noktası için o noktada 1, diğer düğüm noktalarında 0 olan bir taban polinomu kurarız:\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       İki düğüm noktası için <em>doğrusal interpolasyon</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$ elde ederiz. Lagrange biçimi anlaşılırdır, ama bir düğüm noktası eklendiğinde her şeyi yeniden hesaplamak gerekir.</p>",
    "<p><strong>Newton biçimi ve bölünmüş farklar.</strong> Bölünmüş farkları özyinelemeli olarak tanımlarız:\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       Bu durumda\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       Farklar üçgen bir tabloda hesaplanır ve yeni bir düğüm noktası eklemek yalnızca bir terim eklemek demektir. Polinomun değerini Horner yöntemiyle verimli biçimde hesaplarız.</p>",
    "<p><strong>İnterpolasyon hatası.</strong> $f$'nin $n+1$. mertebeden sürekli bir türevi varsa, her $x$ için $x$'i ve düğüm noktalarını içeren en küçük aralıkta öyle bir $\\xi$ vardır ki\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       Buradan $M_{n+1}=\\max|f^{(n+1)}|$ olmak üzere $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$ tahmini çıkar. Adım uzunluğu $h$ olan doğrusal interpolasyonda hata en fazla $\\frac{M_2h^2}{8}$'dir.\n       Eşit aralıklı düğüm noktalarında dereceyi artırmak işe yaramayabilir: $[-1; 1]$ üzerindeki $\\frac{1}{1+25x^2}$ fonksiyonunda polinom uçlarda şiddetle salınır (<strong>Runge olayı</strong>).\n       Çözüm, uçlara doğru sıklaşan Çebişev düğüm noktaları ya da parçalı polinom interpolasyonudur (spline'lar).</p>",
    "<p><strong>En küçük kareler yöntemi.</strong> Ölçülmüş veriler hatalar içerir, bu yüzden bunlardan yüksek dereceli bir polinom geçirmek istemeyiz; onlara\n       <em>yaklaşan</em> basit bir fonksiyon isteriz. $y=ax+b$ doğrusunu, sapmaların kareleri toplamı $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$ en küçük olacak biçimde seçeriz.\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$ koşullarından <strong>normal denklemleri</strong> elde ederiz:\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i,$$\n       çözümleri $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$'dir. Doğru, verilerin ağırlık merkezi $[\\bar{x}; \\bar{y}]$'den geçer.</p>"
   ],
   "examples": [
    {
     "task": "$[0; 1]$, $[1; 3]$, $[3; 2]$ noktaları için interpolasyon polinomunun $x=2$ noktasındaki değerini hem Lagrange hem de Newton biçiminde bul.",
     "steps": [
      "Lagrange: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3{,}333$.",
      "Newton: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$, yani $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$ — aynı polinom, farklı yazım."
     ]
    },
    {
     "task": "En küçük kareler yöntemiyle $[0; 1]$, $[1; 2]$, $[2; 4]$, $[3; 4]$ noktalarına bir doğru uydur.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1{,}1$.",
      "$b=\\frac{11-1{,}1\\cdot 6}{4}=\\frac{4{,}4}{4}=1{,}1$.",
      "Aranan doğru $y=1{,}1x+1{,}1$'dir; ağırlık merkezi $[1{,}5; 2{,}75]$'ten geçer."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "Sayısal türev ve integral",
   "summary": "İleri ve merkezi fark, adım seçimi, dikdörtgen, yamuk ve Simpson yöntemleri, doğruluk mertebesi ve hata tahmini.",
   "theory": [
    "<p><strong>Sayısal türev.</strong> $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$ Taylor açılımından şu formülleri elde ederiz:\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{ileri fark, hata }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{merkezi fark, hata }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       İleri fark (ve geri fark $\\frac{f(x)-f(x-h)}{h}$) <strong>1. mertebeden doğruluğa</strong>, merkezi fark ise <strong>2. mertebeden doğruluğa</strong> sahiptir: adım yarıya indiğinde hata yaklaşık\n       iki kat, ikincisinde dört kat küçülür. İkinci türev için $O(h^2)$ hatalı $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$ formülü kullanılır.</p>",
    "<p><strong>Adım seçimi.</strong> Adım sonsuza dek küçültülemez. Payda birbirine yakın iki değeri çıkarırız, dolayısıyla yuvarlama hatası $\\frac{\\varepsilon_M|f(x)|}{h}$ mertebesindedir\n       ve $h$ küçüldükçe <em>büyür</em>. İleri farkın toplam hatası $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$, yaklaşık $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$ için en küçüktür;\n       merkezi fark için ise $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$ için. Yani sayısal türev alma, integral almanın aksine, kötü koşullanmış bir problemdir.</p>",
    "<p><strong>Sayısal integral (kuadratür) formülleri.</strong> $[a, b]$ aralığını adım uzunluğu $h=\\frac{b-a}{n}$ olan $n$ alt aralığa böleriz; düğüm noktaları $x_i=a+ih$ ve $f_i=f(x_i)$'dir. Her alt aralıkta\n       fonksiyonu bir polinomla değiştirir ve bu polinomu tam olarak integralleriz:</p>\n       <ul><li><strong>dikdörtgen (orta nokta) yöntemi</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, hata $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>\n       <li><strong>yamuk yöntemi</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, hata $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>\n       <li><strong>Simpson yöntemi</strong> ($n$ çift, alt aralık çiftleri üzerinde parabol) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, hata $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "$[0; 4]$ üzerinde $f(x)=2+\\sin 1{,}5x+0{,}3x$ için yamuk yöntemi. Alt aralık sayısını artır ve hatanın kabaca adımın karesiyle nasıl azaldığını izle; $n$ çift olduğunda Simpson yönteminin sonucu da gösterilir."
    },
    "<p><strong>Doğruluk mertebesi.</strong> Bileşik bir formülün hatası $Ch^p$ gibi davranır. Dikdörtgen ve yamuk yöntemlerinde $p=2$'dir (yarım adım → dört kat küçük hata),\n       Simpson yönteminde $p=4$'tür (on altı kat küçük) ve yöntem üçüncü dereceye kadar (dâhil) polinomlar için kesindir. Orta nokta yönteminin hatası yaklaşık olarak yamuk yönteminin hatasının yarısı kadardır ve ters işaretlidir,\n       bu yüzden $S_{2n}=\\frac{2M_n+T_n}{3}$'tür. $h$ ve $\\frac{h}{2}$ adımlı iki hesaptan hatayı <strong>Runge kuralıyla</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$ olarak tahmin ederiz;\n       iyileştirilmiş sonuç $\\frac{4T_{2n}-T_n}{3}$ tam olarak Simpson formülüdür (Richardson ekstrapolasyonu; Romberg yöntemi buna dayanır).</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=e^x$ için $f'(0)$'ı $h=0{,}1$ adımıyla ileri ve merkezi farkla tahmin et ve hataları karşılaştır.",
     "steps": [
      "İleri: $\\frac{e^{0{,}1}-1}{0{,}1}=\\frac{0{,}105171}{0{,}1}\\approx 1{,}051709$, hata $\\approx 0{,}0517$.",
      "Merkezi: $\\frac{e^{0{,}1}-e^{-0{,}1}}{0{,}2}\\approx\\frac{1{,}105171-0{,}904837}{0{,}2}\\approx 1{,}001668$, hata $\\approx 0{,}0017$.",
      "Kesin değer $f'(0)=1$'dir. $\\frac{h}{2}f''=0{,}05$ ve $\\frac{h^2}{6}f'''\\approx 0{,}0017$ hata tahminleri sonuçla iyi uyuşur."
     ]
    },
    {
     "task": "$\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0{,}785398$ integralini $n=2$ ile yamuk ve Simpson yöntemleriyle hesapla.",
     "steps": [
      "$h=0{,}5$, $f(0)=1$, $f(0{,}5)=0{,}8$, $f(1)=0{,}5$.",
      "$T_2=\\frac{0{,}5}{2}(1+2\\cdot 0{,}8+0{,}5)=0{,}25\\cdot 3{,}1=0{,}775$, hata $\\approx 0{,}0104$.",
      "$S_2=\\frac{0{,}5}{3}(1+4\\cdot 0{,}8+0{,}5)=\\frac{0{,}5\\cdot 4{,}7}{3}\\approx 0{,}783333$, hata $\\approx 0{,}0021$.",
      "Aynı sayıda fonksiyon değerlendirmesiyle Simpson yöntemi çok daha doğrudur."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "Diferansiyel denklemlerin sayısal çözümü",
   "summary": "Cauchy problemi, Euler yöntemi, Heun (geliştirilmiş Euler) yöntemi, 4. mertebeden Runge–Kutta yöntemi, yerel ve global hata, adım seçimi ve kararlılık.",
   "theory": [
    "<p>Çoğunlukla analitik olarak çözemediğimiz $y'=f(x, y)$, $y(x_0)=y_0$ <strong>Cauchy problemini</strong> (başlangıç değer problemi) çözüyoruz. Bir <strong>adım</strong> $h$ ve $x_k=x_0+kh$ düğüm noktalarını seçer ve adım adım\n       $y_k\\approx y(x_k)$ yaklaşık değerlerini hesaplarız. Tek adımlı yöntemler $y_{k+1}$'i yalnızca $[x_k; y_k]$ çiftinden hesaplar. <strong>Yerel hata</strong>, tek bir adımın hatasıdır\n       ($y_k$'nin kesin olduğu varsayımıyla); <strong>global hata</strong> $y(x_k)-y_k$ ise düğüm noktasında birikmiş hatadır. Yerel hata $O(h^{p+1})$ ise, $\\frac{X-x_0}{h}$ adımdan sonra\n       global hata $O(h^p)$ olur ve yöntemin <strong>mertebesinin</strong> $p$ olduğunu söyleriz.</p>",
    "<p><strong>Euler yöntemi.</strong> $[x_k, x_{k+1}]$ alt aralığında çözümü, yön alanından gelen $f(x_k, y_k)$ eğimli teğetle değiştiririz:\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       Bu en basit birinci mertebeden yöntemdir: yerel hata $\\frac{h^2}{2}y''(\\xi)$, global hata $O(h)$. Adımı yarıya indirmek hatayı yalnızca yaklaşık yarıya indirir; bu yüzden uygulamada\n       daha çok, daha doğru yöntemler için bir başlangıç noktası olarak kullanılır.</p>",
    {
     "fig": "v7-euler",
     "caption": "$[0; 2]$ üzerinde kesin çözümü $y=e^x$ (siyah eğri) olan $y'=y$, $y(0)=1$ problemi. Euler yöntemi (mavi) sistematik olarak geride kalır, Heun yöntemi (yeşil) aynı adımla çok daha doğrudur. Adım sayısını artır ve hataların ne kadar hızlı azaldığını karşılaştır."
    },
    "<p><strong>Heun (geliştirilmiş Euler) yöntemi</strong> tahminci–düzeltici türündendir: bir Euler adımıyla alt aralığın sonundaki değeri tahmin eder, sonra eğimlerin ortalamasını alırız:\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       Yamuk kuralına karşılık gelir ve <strong>2. mertebedendir</strong>. Benzer bir yöntem de <em>değiştirilmiş Euler (orta nokta) yöntemidir</em>: $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$.</p>\n       <p><strong>4. mertebeden Runge–Kutta yöntemi (RK4)</strong> her adımda dört eğim hesaplar:\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       ve bunların ağırlıklı ortalamasını alır: $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$ — Simpson kuralının karşılığı. Adım yarıya indiğinde hata yaklaşık 16 kat küçülür.</p>",
    "<p><strong>Adım ve hata.</strong> $p$. mertebeden bir yöntem için global hata yaklaşık $Ch^p$'dir. $h$ ve $\\frac{h}{2}$ adımlı iki hesaptan onu <strong>Runge kuralıyla</strong> tahmin ederiz:\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$. Modern programlar adımı uyarlar (uyarlamalı adım, örneğin farklı mertebelerden Runge–Kutta yöntemi çiftleri).\n       Daha küçük adım her zaman daha iyi sonuç demek değildir — işlem sayısı da yuvarlama hataları da artar.</p>\n       <p><strong>Kararlılık.</strong> $\\lambda&lt;0$ olmak üzere $y'=\\lambda y$ test denklemi için Euler yöntemi $y_{k+1}=(1+h\\lambda)y_k$ verir; sayısal çözüm yalnızca\n       $|1+h\\lambda|&lt;1$, yani $h&lt;\\frac{2}{|\\lambda|}$ ise sıfıra doğru azalır. Daha büyük adımda, kesin çözüm hızla azalmasına rağmen salınır ve büyür. Bu yüzden zaman ölçekleri çok farklı olan denklemler\n       (<em>katı</em> denklemler) kapalı yöntemlerle çözülür; örneğin her $h&gt;0$ için kararlı olan kapalı Euler yöntemi $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$.</p>"
   ],
   "examples": [
    {
     "task": "$y'=y$, $y(0)=1$ problemini $h=0{,}5$ adımıyla Euler ve Heun yöntemleriyle $x=1$'e kadar çöz ve $e\\approx 2{,}71828$ ile karşılaştır.",
     "steps": [
      "Euler: $y_1=1+0{,}5\\cdot 1=1{,}5$, $y_2=1{,}5+0{,}5\\cdot 1{,}5=2{,}25$, hata $\\approx 0{,}468$.",
      "Heun, 1. adım: tahminci $\\tilde{y}_1=1{,}5$, $y_1=1+0{,}25\\,(1+1{,}5)=1{,}625$.",
      "Heun, 2. adım: $\\tilde{y}_2=1{,}625+0{,}5\\cdot 1{,}625=2{,}4375$, $y_2=1{,}625+0{,}25\\,(1{,}625+2{,}4375)=2{,}640625$, hata $\\approx 0{,}078$.",
      "Aynı adımla Heun yöntemi yaklaşık altı kat daha doğrudur."
     ]
    },
    {
     "task": "$y'=x+y$, $y(0)=1$ problemi için $h=0{,}1$ adımıyla RK4 yönteminin bir adımını yap. Kesin çözüm $y=2e^x-x-1$'dir.",
     "steps": [
      "$k_1=f(0; 1)=1$, $k_2=f(0{,}05;\\ 1+0{,}05\\cdot 1)=0{,}05+1{,}05=1{,}1$.",
      "$k_3=f(0{,}05;\\ 1+0{,}05\\cdot 1{,}1)=0{,}05+1{,}055=1{,}105$, $k_4=f(0{,}1;\\ 1+0{,}1\\cdot 1{,}105)=0{,}1+1{,}1105=1{,}2105$.",
      "$y_1=1+\\frac{0{,}1}{6}(1+2{,}2+2{,}21+1{,}2105)=1+\\frac{0{,}66205}{6}\\approx 1{,}1103417$.",
      "Kesin değer $y(0{,}1)=2e^{0{,}1}-1{,}1\\approx 1{,}1103418$; hata yaklaşık $10^{-7}$'dir."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "Matris algoritmaları",
   "summary": "Pivot seçimli Gauss eliminasyonu, LU ayrışımı, doğrudan yöntemlerin karmaşıklığı, Jacobi ve Gauss–Seidel iterasyonu, baskın özdeğer için kuvvet yöntemi.",
   "theory": [
    "<p><strong>Gauss eliminasyonu</strong>, $n\\times n$ tipinde tersinir matrisli $Ax=b$ sistemini iki aşamada çözer. <em>İleri yok etme</em> aşamasında $k=1, \\dots, n-1$ için\n       $i&gt;k$ satırlarından $k$. satırın $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ <strong>çarpanlı</strong> bir katını çıkarırız; böylece köşegenin altında sıfırlar oluşur ve matris\n       üst üçgen biçime gelir. <em>Geriye yerine koyma</em> aşamasında $x_n, x_{n-1}, \\dots, x_1$'i aşağıdan yukarıya yerine koyarak hesaplarız.</p>\n       <p><em>Pivot eleman</em> $a_{kk}$ sıfır ya da çok küçükse çarpanlar çok büyük olur ve yuvarlama hataları artar. Bu yüzden\n       <strong>kısmi pivotlama</strong> kullanılır: $k$. adımdan önce satırların yerini, $|a_{kk}|$ değeri $k$. sütunda köşegende ve altında en büyük olacak biçimde değiştiririz. O zaman $|l_{ik}|\\le 1$ olur.</p>",
    "<p><strong>LU ayrışımı.</strong> İleri yok etmedeki çarpanlar, köşegeni birlerden oluşan alt üçgen bir $L$ matrisi oluşturur ve sonuçtaki üst üçgen matris $U$'dur;\n       $A=LU$ geçerlidir (pivotlamayla $PA=LU$; burada $P$ bir permütasyon matrisidir). Sistemi sonra iki üçgen sistemle çözeriz:\n       $$Ly=b\\ \\text{(ileri yerine koyma)},\\qquad Ux=y\\ \\text{(geri yerine koyma)}.$$\n       Ayrışım, aynı matrisli ve farklı sağ taraflı birkaç sistem çözdüğümüzde kârlıdır. Determinantı da elde ederiz: $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$.\n       Simetrik pozitif tanımlı matrisler için daha tasarruflu olan <em>Cholesky ayrışımı</em> $A=LL^{T}$ vardır.</p>",
    "<p><strong>Karmaşıklık.</strong> Gauss eliminasyonunun ileri yok etme aşaması yaklaşık $\\frac{2}{3}n^3$ aritmetik işlem, her üçgen yerine koyma ise yaklaşık $n^2$ işlem gerektirir. Boyut iki katına\n       çıkınca eliminasyon süresi yaklaşık sekiz kat artar. Sistemi çözmek için ters matrisi (yaklaşık $2n^3$ işlem) hesaplamaya gerek yoktur. Bant genişliği $w$ olan <em>bant</em> matrisler için maliyet\n       $O(nw^2)$'ye, üç köşegenli matrisler için $O(n)$'ye düşer. Büyük <em>seyrek</em> matrislerde (elemanların çoğu sıfır) eliminasyon sıfırları doldurur, bu yüzden iteratif yöntemler kullanılır.</p>",
    "<p><strong>İteratif yöntemler.</strong> $i$. denklemden $x_i$'yi çeker ve önceki yaklaşık değeri yerine koyarız. <strong>Jacobi yöntemi</strong> yalnızca bir önceki adımın değerlerini kullanır,\n       <strong>Gauss–Seidel yöntemi</strong> ise yeni hesaplanmış bileşenleri hemen kullanır:\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       Matris <strong>kesin köşegen baskınsa</strong> (her satır için $|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$) iki yöntem de her başlangıç için yakınsar; Gauss–Seidel yöntemi simetrik\n       pozitif tanımlı bir matris için de yakınsar. Bir adım, matrisin sıfırdan farklı eleman sayısı mertebesinde işlem gerektirir. $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$ olduğunda ya da $\\|b-Ax^{(k)}\\|$ artığı küçük olduğunda dururuz.</p>",
    "<p><strong>Kuvvet yöntemi.</strong> $A$ matrisinin özdeğerleri $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$ olsun (baskın $\\lambda_1$, mutlak değeri en büyük olan tek özdeğerdir).\n       $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$ ile art arda çarpma, $v_1$ özvektörü yönündeki bileşeni güçlendirir; böylece $x^{(k)}$, $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$ hızıyla $\\pm v_1$'e yaklaşır.\n       Özdeğeri <strong>Rayleigh bölümüyle</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$ ya da karşılık gelen bileşenlerin oranı $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$ ile tahmin ederiz.\n       Mutlak değerce en küçük özdeğeri <em>ters kuvvet yöntemi</em> bulur ($A^{-1}$ için kuvvet yöntemi; her adımda LU ayrışımıyla bir sistem çözülür). Web sayfalarını sıralayan\n       PageRank de bu ilkeye dayanır.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$ matrisinin LU ayrışımını bul ve $b=(4;\\ 10;\\ 24)^{T}$ için $Ax=b$ sistemini çöz.",
     "steps": [
      "1. adım: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; satırlar $(0, 1, 1)$ ve $(0, 3, 5)$ olur.",
      "2. adım: $l_{32}=\\frac{3}{1}=3$; üçüncü satır $(0, 0, 2)$. Yani $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. Çözüm $x=(1;\\ 1;\\ 1)^{T}$; ayrıca $\\det A=2\\cdot 1\\cdot 2=4$."
     ]
    },
    {
     "task": "$4x_1-x_2=7$, $x_1+3x_2=5$ sistemini (çözümü $x=(2;\\ 1)$) $(0;\\ 0)$ noktasından başlayarak Jacobi ve Gauss–Seidel yöntemlerinin ikişer adımıyla çöz.",
     "steps": [
      "İterasyon formülleri: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. Matris köşegen baskındır ($4&gt;1$, $3&gt;1$), iki yöntem de yakınsar.",
      "Jacobi: $x^{(1)}=(1{,}75;\\ 1{,}6667)$, $x^{(2)}=\\left(\\frac{7+1{,}6667}{4};\\ \\frac{5-1{,}75}{3}\\right)=(2{,}1667;\\ 1{,}0833)$.",
      "Gauss–Seidel: $x_1^{(1)}=1{,}75$, hemen $x_2^{(1)}=\\frac{5-1{,}75}{3}=1{,}0833$; $x_1^{(2)}=\\frac{7+1{,}0833}{4}=2{,}0208$, $x_2^{(2)}=\\frac{5-2{,}0208}{3}=0{,}9931$.",
      "İki adımdan sonra Gauss–Seidel yönteminin hatası yaklaşık $0{,}02$, Jacobi yönteminin hatası yaklaşık $0{,}17$'dir."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Gerçek değer ${@5}$.)",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Kuvvette bağıl hata üsle çarpılır: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, yani yaklaşık ${@6}\\,\\%$.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. $\\pi$ yakınında sinüs küçüktür ve problem kötü koşulludur.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$ artandır, bu yüzden $M_2=e^{{@0}}\\approx {@1}$.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$, dolayısıyla $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Birbirine yakın sayıların çıkarılması kötü koşulludur.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$, dolayısıyla $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Gerçek değer $\\sqrt{{@5}}\\approx {@6}$.)",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$, dolayısıyla $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Gerçek değer $f'({@8})\\approx {@9}$, hata yaklaşık ${@10}$.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Gerçek değer $f'({@8})\\approx {@9}$, hata yaklaşık ${@10}$.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Gerçek değer $\\sqrt{{@6}}\\approx {@7}$.)",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, tahmin $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Sonuç aralığı $[{@5};\\ {@6}]$.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Gerçek değer ${@6}$, hata yaklaşık ${@7}$.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleigh oranı: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Gerçek baskın özdeğer $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Radyan cinsinden hesaplıyoruz ve ara sonuçları yuvarlamıyoruz.)",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$, dolayısıyla $M_2=1$.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, mutlak hata $\\Delta\\approx {@2}$. Bağıl hata $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, yani yaklaşık ${@7}\\,\\%$.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$, dolayısıyla $\\Delta=|{@2}-{@3}|\\approx {@4}$.",
  "(tu len $f_1$)": "(burada yalnızca $f_1$)",
  ", ale ${@0}&gt;{@1}$": ", ama ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "Mutlak hata $|x-\\tilde{x}|$'dir. Sabitin değerini yeterli sayıda basamakla al (hesap makinesinden).",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "Hata yaklaşık $Ch^p$ ise adımı $k$ kat küçültmek hatayı $k^p$ kat küçültür. Yamuk ve orta nokta yöntemlerinde $p=2$, Simpson yönteminde $p=4$.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "Alanın mutlak hata sınırı nedir? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "$x^{{@0}}$'ın yüzde cinsinden bağıl hatası nedir? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "Yüzde cinsinden bağıl hata nedir? {@0}",
  "Aký interval dostaneš po druhom kroku?": "İkinci adımdan sonra hangi aralığı elde edersin?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "Birinci adımdan sonra hangi aralığı elde edersin? (uç noktaları noktalı virgülle ayır)",
  "Aký je krok $h$?": "$h$ adımı nedir?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "$l_{21}$ çarpanı nedir (birinci denklemin ikinciden çıkaracağın katı)?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "Yok etmenin ikinci adımında $l_{32}$ çarpanı nedir?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "$\\tilde{x}={@0}$ yaklaşımının mutlak hatası en fazla ${@1}$'dir. Kaç anlamlı basamağı vardır?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "Merkezi fark: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Trigonometrik fonksiyonları radyan cinsinden hesapla.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "Hata $h^{p}$ ile orantılıdır, bu yüzden $k\\cdot p$ kat değil, $k^{p}$ kat küçülür.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "Doğrusal interpolasyonun hatası $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$'dir; $f''(\\xi)$ yerine ikinci türevin mutlak değerinin aralıktaki maksimumunu koy.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "Hata $h$'nin kendisiyle değil, $h^{p}$ ile orantılıdır; burada $p$ yöntemin doğruluk mertebesidir.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "Hata adımla orantılı olarak küçülmez: yöntemin mertebesi {@0}, dolayısıyla hata $h^{{@1}}$ ile orantılıdır.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "{@0} hatası $h^{{@1}}$ ile orantılıdır (doğruluk mertebesi {@2}). $\\frac{h}{{@3}}$ adımında ${@4}^{{@5}}={@6}$ kat küçülür.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "Kenarların hataları çarpılmaz. Doğrusal kestirim $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$'dir.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "$10^{-j}$ basamağındaki rakam, hata $\\frac{1}{2}\\cdot 10^{-j}$'yi aşmıyorsa anlamlıdır. ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, bu yüzden {@4}. Ondalık virgülden önceki {@5} {@6} ile birlikte {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "$x^2 - a$'nın türevi $x$ değil, $2x$'tir.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "İleri fark: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Trigonometrik fonksiyonları radyan cinsinden hesapla.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "$x_0$'ı $g$'de yerine koy, sonucu yeniden $g$'de yerine koy. Ara sonuçları yuvarlama.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "$\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$ formülünde yerine koy; $x-c$'nin türevi 1'dir.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "{@0} fark formülünde yerine koy. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "Euler adımı: $y_{k+1}=y_k+h\\,f(x_k, y_k)$; burada $x_k=kh$. İki adım yap.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "y' = y, y(0) = 1 için Euler ve Heun yöntemleri",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "Euler yönteminin mertebesi 1, Heun'unki 2, RK4'ünki 4'tür. Hata yaklaşık $Ch^p$'dir.",
  "Eulerovou metódou": "Euler yöntemiyle",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "$f(x)={@0}$ fonksiyonunu $[{@1};\\ {@2}]$ aralığında doğrusal interpolasyonla değiştiriyoruz. $x={@3}$ noktasındaki interpolasyon hatası için $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$ formülüyle bir üst sınır bul. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "${@0}$ bilinmeyenli bir sistemin Gauss yok etmesi belirli bir bilgisayarda ${@1}$ s sürüyor. ${@2}$ bilinmeyenli bir sistem (dolu matris) yaklaşık kaç saniye sürer?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "{@0} sistemini Gauss yok etmesiyle çöz. $x_1; x_2; x_3$ değerlerini noktalı virgülle ayırarak gir.",
  "Gaussovou–Seidelovou": "Gauss–Seidel",
  "Heunovou metódou": "Heun yöntemiyle",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "Değer $x={@0}\\pm {@1}$. $x^{{@2}}$ ifadesinin bağıl hatasını yüzde olarak tahmin et. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "$2^n$'nin en az bu kadar büyük olduğu en küçük $n$'yi ara.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "Hatanın $\\frac{1}{2}\\cdot 10^{-k}$'yı aşmadığı en küçük $10^{-k}$ basamağını ara.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "2. dereceden interpolasyon polinomu {@0} noktalarından geçiyor. $x={@1}$ noktasındaki değerini hesapla. {@2}",
  "Jacobiho": "Jacobi",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "Hesap makinesi derece modunda. Sayısal yöntemlerde trigonometrik fonksiyonları radyan cinsinden hesaplarız.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "Hesap makinesi derece modunda. Trigonometrik fonksiyonların türevini alırken radyan cinsinden hesaplarız.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "İkiye bölmenin her adımı aralığı yalnızca yarıya indirir, bu yüzden 10 tabanında değil, 2 tabanında logaritma gerekir.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "Kök ${@0}$ uzunluğunda bir aralıkta bulunuyor. Sonuç aralığının uzunluğunun en fazla ${@1}$ olması için en az kaç ikiye bölme adımı gerekir?",
  "Koľko desatinných miest je platných?": "Kaç ondalık basamak anlamlıdır?",
  "Koľko najmenej krokov bisekcie treba?": "En az kaç ikiye bölme adımı gerekir?",
  "Koľko platných cifier má aproximácia celkovo?": "Yaklaşımın toplam kaç anlamlı basamağı vardır?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "Aralığı kaç kat küçültmek gerekir, yani $\\frac{b-a}{\\varepsilon}$ kaçtır?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "Yamuk yönteminde uç değerler $f_0$ ve $f_n$'nin ağırlığı $\\frac{h}{2}$, iç değerlerinki $h$'dir. Uç noktalar yalnızca yarım sayılmalıdır.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "$h$ adımını {@0} küçültüyoruz. {@1} hatası (düzgün bir fonksiyon için) yaklaşık kaç kat küçülür?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "Yalnızca üçgen yerine koymanın maliyeti karesel olarak artar. Yok etmenin ileri aşamasının karmaşıklığı $O(n^3)$'tür.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "${@0}$ noktasında Lagrange taban polinomları: {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "0'dan 4'e kadar aralıktaki bir fonksiyon için yamuk yöntemi",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "Yamuk yöntemi: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "Doğrusal interpolasyon: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "Yöntemin mertebesi {@0}, global hata yaklaşık $Ch^{{@1}}$'dir. $\\frac{h}{{@2}}$ adımında ${@3}^{{@4}}={@5}$ kat küçülür: $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "En küçük kareler yöntemiyle {@0} noktalarına $y=ax+b$ doğrusunu uydur. Bul: {@1}. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "Kuvvet yöntemiyle simetrik $A={@0}$ matrisinin baskın özdeğerini tahmin ediyoruz. $x^{(0)}=(1;\\ 1)^{T}$ başlangıcından $x^{(1)}=Ax^{(0)}$'ı ve Rayleigh oranı $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$'i hesapla. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "$l_{32}$ çarpanı asıl $a_{32}$ elemanından değil, yok etmenin ilk adımından sonra dönüştürülmüş matristen hesaplanır.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "Çarpan $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (güncel, dönüştürülmüş matristen); $i$-inci satırdan $k$-ıncı satırın $l_{ik}$ katını çıkar. Elde edilen üst üçgen matris $U$'dur.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "Çarpan $l_{21} = \\frac{a_{21}}{a_{11}}$ oranıdır; eleman pivota bölünmelidir.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "Çarpan $l_{31} = \\frac{a_{31}}{a_{11}}$ oranıdır; eleman pivota bölünmelidir.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "Çarpanlar: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; ilk adımdan sonra ikinci satır $(0, {@6}, {@7})$, üçüncü satır $(0, {@8}, {@9})$ biçimindedir; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "Önce Euler tahmini $\\tilde{y}_1=y_0+hf(x_0, y_0)$, sonra $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "Önce birinci mertebeden farkları $f[x_0, x_1]$ ve $f[x_1, x_2]$'yi hesapla, sonra farklarını $x_2-x_0$'a böl.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "Newton adımı $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$'dır; kesir eklenmez, çıkarılır.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "Newton adımı $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$'dır.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "Newton yöntemi: y = x² − 2 grafiğine teğetler",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "Newton yöntemiyle $\\sqrt{{@0}}$'ı $f(x)=x^2-{@1}$ fonksiyonunun kökü olarak arıyoruz. $x_0={@2}$ başlangıcından $x_1$'i hesapla. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "Normal denklemler: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; bunlardan $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "$A={@0}$ matrisinin LU ayrışımını bul (satır değişimi olmadan, $L$'nin köşegeninde birler var) ve şunu belirle: {@1}.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "$\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$ koşulunun hâlâ sağlandığı en küçük $10^{-k}$ basamağını bul ve sıfırdan farklı ilk rakamdan bu basamağa kadar olan rakamları say.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "Dikdörtgen yöntemi: $M_n=h\\sum f(\\text{alt aralığın orta noktası})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "$f(x)={@0}$ fonksiyonunun $x={@1}$ noktasındaki türevini $h={@3}$ adımlı {@2} farkla tahmin et. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "$\\delta(x^n)\\approx|n|\\,\\delta x$ geçerlidir; burada $\\delta x=\\frac{\\Delta x}{|x|}$.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "$n$ adımdan sonra aralığın uzunluğu $\\frac{{@0}}{2^n}$'dir. $2^n\\ge\\frac{{@1}}{{@2}}={@3}$ gerekir, yani $n\\ge\\log_2 {@4}\\approx {@5}$. En küçük tam sayı $n={@6}$.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "Yanlış yarıyı tuttun. Kök, uçlarında $f$'nin zıt işaretli olduğu yarıdadır.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$ ile $P(x)=\\sum y_i\\ell_i(x)$'i ya da bölünmüş farklarla Newton biçimini kullan.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "$\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$ eşitliğini kullan, burada $a-b=1$.",
  "Počet krokov": "Adım sayısı",
  "Počet krokov n": "Adım sayısı n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "İşlem sayısı yaklaşık $\\frac{2}{3}n^3$'tür, süre boyutun küpüyle artar. Boyut ${@0}$ kat büyüdü, dolayısıyla süre ${@1}^3={@2}$ kat: ${@3}\\cdot {@4}={@5}$ s.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "$f(x)=\\ln x$ için $\\kappa=\\frac{1}{|\\ln x|}$ çıkar.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "$f(x)=\\sin x$ için $\\kappa=|x\\cot x|$'dir. Radyan cinsinden hesapla.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "{@0} noktaları için ikinci mertebeden bölünmüş fark $f[x_0, x_1, x_2]$'yi hesapla (Newton biçiminde $(x-x_0)(x-x_1)$'in katsayısı). {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "İki değişkenli bir fonksiyon için $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; $S=ab$ için kısmi türevler $b$ ve $a$'dır.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "Gauss–Seidel yönteminde ikinci ve üçüncü denklemde zaten yeni değerleri kullandık.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "Jacobi yönteminde her yere başlangıç değerlerini koyarız.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "Jacobi yönteminde tüm denklemlere yeni hesaplanan bileşenler değil, yalnızca $x^{(0)}$ başlangıç değerleri konur.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "Merkezi farkta $x-h$ ve $x+h$ noktaları arasındaki uzaklık $2h$'dir; değerlerin farkı $h$'ye değil, $2h$'ye bölünmelidir.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "İkinci mertebeden farkta $x_2 - x_1$'e değil, uç düğümlerin farkı $x_2 - x_0$'a bölünür.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "$l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ çarpanlarıyla ileri aşama üst üçgen matris $U={@3}$'ü ve sağ taraf $y=({@4})^{T}$'yi verir. Geri yerine koyma: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "Rayleigh oranını $x^{(0)}$ vektörüyle hesapladın. Soru $x^{(1)}$ için oranı istiyor, yani ayrıca $Ax^{(1)}$'i hesaplamak gerekir.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "Bağıl hata $\\frac{|x-\\tilde{x}|}{|x|}$'dir; yüzde için 100 ile çarp.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "Dolayısıyla girdinin bağıl hatası yaklaşık {@0} kat büyür — problem kötü koşulludur.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "$\\frac{b-a}{2^n}\\le\\varepsilon$ eşitsizliğini, yani $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$'yu çöz ve yukarı yuvarla.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "Bir problemin $h$ adımıyla {@0} elde edilen çözümünün bitiş noktasındaki global hatası yaklaşık ${@1}$'dir. $\\frac{h}{{@2}}$ adımında nasıl bir hata bekleyebiliriz? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "$x^2-{@0}=0$ denkleminin $[{@1};\\ {@2}]$ aralığında bir kökü vardır. İkiye bölme yönteminin iki adımını yap ve sonuç aralığını noktalı virgülle ayrılmış uç nokta çifti olarak gir (örneğin 1,25; 1,5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "Denklemi $g(x)={@0}$ (${@1}$ denklemi) ve $x_0={@2}$ başlangıcıyla $x_{k+1}=g(x_k)$ basit iterasyon yöntemiyle çözüyoruz. $x_2$'yi hesapla. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "Birinci mertebeden farkların farkı ayrıca uç düğümlerin farkı $x_2 - x_0$'a bölünmelidir.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "$y_1 - y_0$ değer farkı önce adım uzunluğu $x_1 - x_0 = {@0}$'a bölünmeli, ancak sonra $(x - x_0)$ ile çarpılmalıdır.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "İfadeyi köklerin toplamıyla genişletiyoruz: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "Simpson yönteminin doğruluk mertebesi yamuk yöntemindeki gibi 2 değil, 4'tür.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "Simpson yöntemi: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ çift.",
  "Simpsonovej metódy": "Simpson yönteminin",
  "Simpsonovou metódou": "Simpson yöntemiyle",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "RK4'te $k_2$ ve $k_3$ eğimlerinin ağırlığı iki katıdır: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "Eğimlerin ortalaması alınır: $h$ ile değil, $\\frac{h}{2}$ ile çarpılır.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "İkinci adımda eğim yeni $(x_1, y_1)$ noktasında yeniden hesaplanmalıdır; başlangıçtaki eğimle $2h$ uzunluğunda tek bir adım atmak yetmez.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "Yalnızca anlamlı ondalık basamakları saydın. Ondalık virgülden önceki rakamlar da anlamlı basamaklara dahildir.",
  "Spätným chodom urči najprv $x_3$.": "Geri yerine koymayla önce $x_3$'ü bul.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "Bir dikdörtgenin kenarlarını $\\pm {@0}$ cm doğrulukla ölçtük: $a={@1}$ cm ve $b={@2}$ cm. $S=ab$ alanının mutlak hata sınırını (cm² cinsinden) doğrusal yaklaşımla tahmin et. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "Orta nokta yöntemi değerleri alt aralıkların sol uçlarında değil, orta noktalarında alır.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "Alt aralıkların orta noktaları: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "{@0} sistemini $x^{(0)}={@2}$ başlangıcından {@1} yöntemiyle çöz. İlk iterasyon $x^{(1)}$'i hesapla ve üç bileşenini, her biri 4 ondalık basamağa yuvarlanmış olarak, noktalı virgülle ayırarak gir.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "Köşegen elemanların çarpımı yalnızca üçgen matriste determinantı verir. $A$'nın değil, $U$ matrisinin köşegenini çarp.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "Bu bir Jacobi adımıdır. Gauss–Seidel yönteminde sonraki denklemlere hemen yeni $x_1^{(1)}, x_2^{(1)}$ değerlerini koy.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "Bu mutlak hatadır. Bağıl hatayı mutlak hatayı $|x|$ değerine bölerek elde edersin (yüzde için ayrıca 100 ile çarp).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "Bu henüz $x_1$. Sonucu bir kez daha $g$'de yerine koy.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "Bu henüz $y_1$. İkinci adımı da yap.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "Bu yalnızca Euler tahmini $\\tilde{y}_1$'dir. Heun yöntemi onu iki eğimin ortalamasıyla düzeltir.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "Bu yalnızca pay $(x^{(1)})^{T}Ax^{(1)}$'dir. Bunu bir de $(x^{(1)})^{T}x^{(1)}$'e böl.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "Bu yamuk yöntemidir. Simpson yöntemi $1, 4, 2, 4, \\dots, 4, 1$ ağırlıklarını kullanır ve $\\frac{h}{3}$ ile çarpar.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "Bu yalnızca komşu iki düğümden yapılan doğrusal interpolasyondur. 2. dereceden polinom üç noktanın hepsini kullanır.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "Bu, aralığın en kötü noktası için $\\frac{M_2h^2}{8}$ kestirimidir. Soru belirli bir $x$ noktasını soruyor.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "Bu ortalama $\\bar{y}$'dir. Sabit terim $b = \\frac{\\sum y_i - a\\sum x_i}{n}$'dir, yani $a\\bar{x}$'i de çıkarmak gerekir.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Bu asıl $a_{22}$ elemanıdır. İkinci satırdan önce birincinin $l_{21}$ katını çıkarmak gerekir.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "Bu asıl $a_{23}$ elemanıdır. İkinci satırdan önce birincinin $l_{21}$ katını çıkarmak gerekir.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "Bu asıl $a_{33}$ elemanıdır. Üçüncü satır yok etmenin iki adımında da dönüştürülmelidir.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "Bu bağıl hatadır (hatanın değere oranı). Mutlak hata farkın kendisidir: $|x-\\tilde{x}|$.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "Bu, $x$'in kendisinin bağıl hatasıdır. Kuvvette bağıl hata ${@0}$ üssüyle çarpılır.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "$x^3{@0}-{@1}=0$ denklemi için $x_0={@2}$ başlangıcıyla Newton yönteminin bir adımını yap. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "{@1} problemi için $h={@0}$ adımıyla 4. mertebeden Runge–Kutta yönteminin bir adımını yap. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "$f(x)=x^2-{@0}$ için $x_0={@1}$ ve $x_1={@2}$ başlangıç noktalarıyla kiriş yönteminin bir adımını yap. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "Aralıkta $M_2 = \\max|f''|$ değerini bul. {@0}",
  "Urči $u_{22}$.": "$u_{22}$'yi bul.",
  "Urči $u_{23}$.": "$u_{23}$'ü bul.",
  "Urči $u_{33}$.": "$u_{33}$'ü bul.",
  "Urči multiplikátor $l_{21}$.": "$l_{21}$ çarpanını bul.",
  "Urči multiplikátor $l_{31}$.": "$l_{31}$ çarpanını bul.",
  "Urči multiplikátor $l_{32}$.": "$l_{32}$ çarpanını bul.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "$f(x)=\\sin x$'in $x={@0}$ noktasında (radyan cinsinden) hesaplanmasının koşul sayısı $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$'i bul. {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "$f(x)=x-{@0}$'ın $x={@1}$ noktasında hesaplanmasının koşul sayısı $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$'i bul. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "$f(x)=\\ln x$ fonksiyonunun $x={@0}$ noktasında hesaplanmasının koşul sayısı $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$'i bul. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "Her adımda aralığın orta noktasındaki değeri hesapla ve uçlarında fonksiyonun zıt işaretli olduğu yarıyı tut.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "Formülde ayrıca ikiye bölme vardır: $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "Kiriş formülünde $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ düzeltmesi $x_1$'den çıkarılır.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "Önce birinci, sonra ikinci sütunda köşegenin altındaki elemanları sıfırla, en sonunda son denklemden başlayarak çöz.",
  "Vypočítaj $Ax^{(1)}$.": "$Ax^{(1)}$'i hesapla.",
  "Vypočítaj $P_1({@0})$. {@1}": "$P_1({@0})$ değerini hesapla. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "$\\det A = u_{11}u_{22}u_{33}$ değerini hesapla.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "$\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ integralini $n={@4}$ alt aralıkla {@3} hesapla. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "$\\ell_{@0}({@1})$ değerini hesapla. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "$\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$ değerini hesapla. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "$\\sqrt{{@0}}-\\sqrt{{@1}}$ değerini sayısal olarak kararlı bir yolla hesapla (birbirine yakın sayıları çıkarmadan). {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "$\\sum x_i$ ve $\\sum y_i$'yi hesapla (noktalı virgülle ayırarak).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "$\\sum x_i^2$ ve $\\sum x_iy_i$'yi hesapla (noktalı virgülle ayırarak).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "$f$'yi aralığın orta noktasında, yani $f({@0})$ değerini hesapla. {@1}",
  "Vypočítaj $f'(x_0)$.": "$f'(x_0)$ değerini hesapla.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "$f(x_0)$ ve $f'(x_0)$'ı hesapla ve $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$ formülünde yerine koy.",
  "Vypočítaj $f(x_0)$.": "$f(x_0)$ değerini hesapla.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "$f(x_0, y_0)$ değerini hesapla. {@0}",
  "Vypočítaj $f(x_1)$.": "$f(x_1)$ değerini hesapla.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "$f(x_1, \\tilde{y}_1)$ değerini hesapla. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "$f(x_1, y_1)$ değerini hesapla. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "$f({@0})$ değerini hesapla. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "$f[x_0, x_1, x_2]$ değerini hesapla. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "$f[x_0, x_1]$ değerini hesapla. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "$f[x_1, x_2]$ değerini hesapla. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "$k_{@0}$ değerini hesapla. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "$x^{(1)} = Ax^{(0)}$'ı hesapla (iki bileşeni noktalı virgülle ayırarak).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "$x^{(1)}=Ax^{(0)}$'ı, sonra $Ax^{(1)}$'i ve $x^{(1)}\\cdot Ax^{(1)}$ ile $x^{(1)}\\cdot x^{(1)}$ skaler çarpımlarının oranını hesapla.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "$x_1 = g(x_0)$ değerini hesapla. {@0}",
  "Vypočítaj $x_1$. {@0}": "$x_1$'i hesapla. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "$x_2 = g(x_1)$ değerini hesapla. {@0}",
  "Vypočítaj $x_2$. {@0}": "$x_2$'yi hesapla. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "$x_{@0}^{(1)}$ değerini hesapla. {@1}",
  "Vypočítaj $y_1$. {@0}": "$y_1$'i hesapla. {@0}",
  "Vypočítaj $y_2$. {@0}": "$y_2$'yi hesapla. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "$|(x-x_0)(x-x_1)|$ değerini hesapla. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "Rayleigh oranını hesapla. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "Mutlak hata $|x-\\tilde{x}|$'i hesapla. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "Sabit terim $b$'yi hesapla. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "Payda $\\sqrt{{@0}}+\\sqrt{{@1}}$ değerini hesapla. {@2}",
  "Vypočítaj odhad chyby. {@0}": "Hata kestirimini hesapla. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "Tahmin $\\tilde{y}_1$'i hesapla. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "$a$ kenarının hatasının katkısını, yani $b\\,\\Delta a$'yı hesapla. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "$b$ kenarının hatasının katkısını, yani $a\\,\\Delta b$'yi hesapla. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "$x$'in bağıl hatasını yüzde olarak hesapla. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "Eğim $\\frac{y_1-y_0}{x_1-x_0}$'ı hesapla. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "Eğim $a$'yı hesapla. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "Fonksiyonun alt aralık orta noktalarındaki değerlerinin toplamını hesapla. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "Tek düğümlerdeki değerlerin toplamını hesapla: $f_1{@0}$ (ağırlık 4). {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "İç değerlerin toplamını ({@0}) hesapla. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "İntegralin sonuç değerini hesapla. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "$\\frac{\\sum x_iy_i}{\\sum x_i^2}$ formülü yalnızca orijinden geçen doğru için geçerlidir ($b = 0$). İki normal denklemi de kullan.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "Kiriş formülü: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "Sonucu {@0} {@1} yuvarla.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "$i$-inci denklemden $x_i$'yi çek ve içine $x^{(0)}$ bileşenlerinin değerlerini koy.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "$i$-inci denklemden $x_i$'yi çek ve içine yeni hesaplanmış $x_1, \\dots, x_{i-1}$ bileşenlerini ve diğerlerinin eski değerlerini koy.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "Tablodan ${@0}\\approx {@1}$ ve ${@2}\\approx {@3}$ biliniyor. Doğrusal interpolasyonla ${@4}$ fonksiyonunun $x={@5}$ noktasındaki değerini tahmin et. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "Paydaki $x$ çarpanını unuttun: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, $\\left|\\frac{f'(x)}{f(x)}\\right|$ değil.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "Paydaki $x$ çarpanını unuttun: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "$x$ çarpanını unuttun: $\\kappa = |x\\cot x|$, $|\\cot x|$ değil.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "Çözümün tamamını gir: $x_1; x_2; x_3$.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "Ağırlıkları karıştırdın: Simpson yönteminde tek düğümler $f_1, f_3, \\dots$ 4, çift iç düğümler 2 ağırlığa sahiptir.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "Yalnızca bir kenarın hatasını hesaba kattın. $b\\,\\Delta a$'ya $a\\,\\Delta b$'yi de ekle.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "Gauss yok etmesinin karmaşıklığı $O(n^3)$'tür, daha kesin olarak yaklaşık $\\frac{2}{3}n^3$ işlem.",
  "absolútny člen $b$": "sabit terim $b$",
  "centrálnej": "merkezi",
  "centrálnej diferencie": "merkezi farkın",
  "centrálnou": "merkezi",
  "ciframi": "basamak",
  "cifrou": "basamak",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "$U$'nun köşegen elemanlarının çarpımı olarak $\\det A$ determinantı",
  "doprednej": "ileri",
  "doprednej diferencie": "ileri farkın",
  "doprednou": "ileri",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (hata {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (hata {@4})</span> · gerçek değer e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · gerçek değer I = {@2} · hata {@3}",
  "je platné 1 desatinné miesto": "1 ondalık basamak anlamlıdır",
  "je to <strong>1</strong> platná cifra": "toplam <strong>1</strong> anlamlı basamak vardır",
  "je to <strong>{@0}</strong> platných cifier": "toplam <strong>{@0}</strong> anlamlı basamak vardır",
  "lichobežníkovej metódy": "yamuk yönteminin",
  "lichobežníkovou metódou": "yamuk yöntemiyle",
  "metódou RK4": "RK4 yöntemiyle",
  "na polovicu": "yarı yarıya",
  "nie je platné žiadne desatinné miesto": "hiçbir ondalık basamak anlamlı değildir",
  "obdĺžnikovej (stredovej) metódy": "dikdörtgen (orta nokta) yönteminin",
  "obdĺžnikovou (stredovou) metódou": "dikdörtgen (orta nokta) yöntemiyle",
  "prvok ${@0}$": "${@0}$ elemanı",
  "smernicu $a$": "eğim $a$",
  "sú platné {@0} desatinné miesta": "{@0} ondalık basamak anlamlıdır",
  "sú to <strong>{@0}</strong> platné cifry": "toplam <strong>{@0}</strong> anlamlı basamak vardır",
  "uzly {@0}.": "düğümler {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Hata kestirimi: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "{@0} kat",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, hata {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">hata |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· Simpson: n çift olmalı",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "{@0} problemini $h={@1}$ adımıyla Euler yöntemiyle çöz. $y_2\\approx y({@2})$ değerini hesapla. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "{@0} problemini $h={@1}$ adımıyla Heun (geliştirilmiş Euler) yöntemiyle çöz. $y_1\\approx y({@2})$ değerini hesapla. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "Süre bilinmeyen sayısıyla doğrusal olarak artmaz: yok etme yaklaşık $\\frac{2}{3}n^3$ işlem gerektirir.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "${@0}$ sayısını ${@1}$ yaklaşımıyla değiştiriyoruz. Bu yaklaşımın mutlak hatası nedir? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "${@0}$ sayısını ${@1}$ yaklaşımıyla değiştiriyoruz. Yüzde cinsinden bağıl hata nedir? {@2}",
  "Štart x₀": "Başlangıç x₀"
 }
});
