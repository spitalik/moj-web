/* Türkçe: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/tr/v3/ – needitovať ručne. */
CONTENT_I18N.add('tr', {
 "decimal": ",",
 "lessons": {
  "v3-pojem": {
   "title": "Diferansiyel denklem kavramı, Cauchy problemi, yön alanı",
   "summary": "Denklemin mertebesi, genel ve özel çözüm, başlangıç değer problemi, varlık ve teklik teoremi, yön alanı.",
   "theory": [
    "<p><strong>Adi diferansiyel denklem (ADD)</strong>, bilinmeyeni tek değişkenli bir $y = y(x)$ fonksiyonu olan ve bu fonksiyonun türevlerini\n       içeren bir $F(x, y, y', \\dots, y^{(n)}) = 0$ denklemidir. Denklemin <strong>mertebesi</strong>, denklemde gerçekten bulunan en yüksek türevin\n       mertebesidir: $y'' + (y')^{5} = x$ 2. mertebeden bir denklemdir, $(y')^{5}$ kuvveti mertebeyi değiştirmez.\n       Denklem $y, y', \\dots, y^{(n)}$'ye göre doğrusal ise, yani\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$ biçimindeyse <strong>doğrusaldır</strong> (lineerdir).</p>\n       <p>$I$ aralığındaki bir <strong>çözüm</strong>, $I$ üzerinde $n$. mertebeye kadar türevleri olan ve yerine konduğunda her $x\\in I$ için denklemi sağlayan bir fonksiyondur.\n       $n$. mertebeden bir denklemin <strong>genel çözümü</strong>, $n$ bağımsız sabit içeren $y = \\varphi(x, C_1, \\dots, C_n)$ çözüm ailesidir;\n       <strong>özel çözüm</strong>, sabitlerin belirli bir seçimiyle elde edilir. Genel çözümden sabitlerin hiçbir seçimiyle elde edilemeyen çözüme\n       <strong>tekil</strong> (singüler) çözüm denir.</p>",
    "<p>1. mertebeden bir denklem için <strong>Cauchy problemi (başlangıç değer problemi)</strong>: $y' = f(x, y)$ denkleminin\n       <strong>başlangıç koşulunu</strong> $y(x_0) = y_0$ sağlayan çözümünü bulmak. $n$. mertebeden bir denklemde $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$ değerlerini veririz.</p>\n       <p><strong>Teorem (Picard, Lindelöf).</strong> $f$ ve $\\frac{\\partial f}{\\partial y}$ fonksiyonları $[x_0; y_0]$ noktasının bir komşuluğunda sürekli ise\n       $x_0$ çevresinde, Cauchy probleminin <strong>tam olarak bir</strong> çözümünün bulunduğu bir aralık vardır. Bu varsayımlar olmadan teklik geçerli olmayabilir:\n       $y' = 3y^{2/3}$, $y(0) = 0$ problemini hem $y = 0$ hem de $y = x^{3}$ fonksiyonu çözer (burada $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$, $y = 0$ noktasında tanımlı değildir).</p>",
    "<p><strong>Yön alanı.</strong> $y' = f(x, y)$ denklemi her $[x; y]$ noktasında, o noktadan geçen çözümün teğetinin eğimini belirler.\n       Düzlemin noktalarına eğimi $f(x, y)$ olan kısa doğru parçaları çizersek yön alanını elde ederiz. Bir çözümün grafiği (<strong>integral eğrisi</strong>)\n       her noktasında alana teğettir. Tüm doğru parçalarının aynı $k$ eğimine sahip olduğu $f(x, y) = k$ eğrilerine <strong>izoklinler</strong> denir.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "$y' = x - y$ denkleminin yön alanı. Kesikli $y = x$ doğrusu eğimi $0$ olan izoklin, yeşil $y = x - 1$ doğrusu ise eğimi $1$ olan izoklin ve aynı zamanda bir çözümdür. $y(0)$ başlangıç değerini kaydır: $x\\to\\infty$ için tüm çözümler $y = x - 1$ doğrusuna yaklaşır."
    }
   ],
   "examples": [
    {
     "task": "Her $C_1, C_2$ için $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$'in $y'' - y' - 2y = 0$ denkleminin bir çözümü olduğunu doğrula. Denklem kaçıncı mertebedendir?",
     "steps": [
      "Denklem ikinci türevi içerir ve daha yükseğini içermez, dolayısıyla <strong>2. mertebedendir</strong>.",
      "Türev alalım: $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "Yerine koyalım: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "Eşitlik tüm $x$ ve tüm $C_1, C_2$ için sağlanır. Fonksiyon iki bağımsız sabit içerir, bu bir <strong>genel çözümdür</strong>."
     ]
    },
    {
     "task": "$y = C\\mathrm{e}^{-x} + x - 1$'in $y' = x - y$ denkleminin genel çözümü olduğunu göster ve $y(0) = 2$ koşullu Cauchy probleminin çözümünü bul.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$ ve $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$. İki taraf eşittir.",
      "Koşuldan: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$, dolayısıyla $C = 3$.",
      "<strong>Özel çözüm: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> Bu, şekildeki $y(0) = 2$ için olan eğridir."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "Değişkenlerine ayrılabilen denklemler",
   "summary": "$y' = g(x)\\,h(y)$ denklemi: değişkenlerin ayrılması, durağan çözümler, $y' = f(ax + by + c)$ türündeki denklemler.",
   "theory": [
    "<p><strong>Değişkenlerine ayrılabilen</strong> bir denklem, $g$ bir $I$ aralığında ve $h$ bir $J$ aralığında sürekli olmak üzere $y' = g(x)\\,h(y)$ biçimindedir.\n       Denk olarak $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$ diferansiyel biçiminde yazılabilir.</p>\n       <p><strong>Yöntem:</strong></p>\n       <ol><li>$h$ fonksiyonunun sıfırlarını buluruz. $h(c) = 0$ ise $y = c$ sabiti bir çözümdür, buna <strong>durağan çözüm</strong> denir.</li>\n       <li>$h(y)\\neq 0$ için değişkenleri ayırırız: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>İntegral alırız: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. Kapalı (örtük) biçimde bir çözüm elde ederiz; mümkünse onu açık biçimde ifade ederiz.</li>\n       <li>$C$ sabitini başlangıç koşulundan belirler ve çözümün hangi aralıkta var olduğunu kontrol ederiz.</li></ol>",
    "<p><strong>Çözüm kaybına dikkat.</strong> $h(y)$ ifadesine bölerek durağan çözümleri kaybedebiliriz, bu yüzden onları ayrıca yazmak gerekir\n       (bazen genel çözümde $C = 0$ için bulunurlar; örneğin $y' = ky$ için $y = C\\mathrm{e}^{kx}$, $y = 0$'ı da verir).\n       Doğrusal olmayan bir denklemin çözümü, sağ taraf düzgün olsa bile tüm $\\mathbb{R}$ üzerinde var olmayabilir: $y' = y^{2}$, $y(0) = 1$ probleminin çözümü\n       $y = \\frac{1}{1 - x}$'tir ve yalnızca $(-\\infty; 1)$ aralığında vardır.</p>\n       <p><strong>$y' = f(ax + by + c)$ türündeki denklemler</strong>, $z = ax + by + c$ değişken değiştirmesiyle değişkenlerine ayrılabilen $z' = a + b\\,f(z)$ denklemine dönüştürülür.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "$y' = xy$ denkleminin genel çözümü $y = C\\mathrm{e}^{x^{2}/2}$'dir. Yeşil $x$ ekseni durağan çözüm $y = 0$'dır ($C = 0$ için), mavi eğri $y(0) = 1$ koşullu çözümdür. Teklik teoreminin garanti ettiği gibi integral eğrileri kesişmez."
    }
   ],
   "examples": [
    {
     "task": "$y' = xy^{2}$, $y(0) = 1$ Cauchy problemini çöz ve çözümün var olduğu aralığı belirle.",
     "steps": [
      "Durağan çözüm $y = 0$'dır, ancak $y(0) = 1$ koşulunu sağlamaz.",
      "$y\\neq 0$ için: $\\frac{dy}{y^{2}} = x\\,dx$, integral aldıktan sonra $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$.",
      "Koşuldan $-1 = C$, dolayısıyla $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$ ve $y = \\frac{2}{2 - x^{2}}$.",
      "<strong>$y = \\frac{2}{2 - x^{2}}$ çözümü $(-\\sqrt{2}; \\sqrt{2})$ aralığında vardır</strong>; bu aralık $x_0 = 0$ noktasını içerir; grafiğin $\\pm\\sqrt{2}$ noktalarında düşey asimptotları vardır."
     ]
    },
    {
     "task": "$y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$ Cauchy problemini çöz.",
     "steps": [
      "Sağ taraf bir çarpımdır: $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. Değişkenleri ayırırız: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "İntegral alırız: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. Koşuldan $2 = 1 + C$, dolayısıyla $C = 1$.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>, çözüm tüm $\\mathbb{R}$ üzerinde vardır."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "Homojen diferansiyel denklemler",
   "summary": "$y' = \\varphi\\left(\\frac{y}{x}\\right)$ denklemleri, $y = ux$ değişken değiştirmesi ve homojen denkleme indirgenebilen denklemler.",
   "theory": [
    "<p>Tüm $t \\gt 0$ için $f(tx, ty) = t^{k}f(x, y)$ ise $f(x, y)$ fonksiyonu <strong>$k$. dereceden homojendir</strong>. $f$ sıfırıncı dereceden homojen ise\n       $y' = f(x, y)$ denklemine <strong>homojen</strong> denir; bu durumda $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$ olur, yani denklem şu biçimdedir:\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       $M$ ve $N$ aynı dereceden homojen fonksiyonlar ise $M(x, y)\\,dx + N(x, y)\\,dy = 0$ denklemi homojendir\n       (örneğin $\\frac{x^{2} + y^{2}}{xy}$: pay ve paydanın derecesi $2$'dir).</p>",
    "<p><strong>$y = ux$ değişken değiştirmesi</strong>; burada $u = u(x)$ yeni bilinmeyen fonksiyondur. O zaman $y' = u + xu'$ olur ve denklem şuna dönüşür:\n       $$xu' = \\varphi(u) - u,$$\n       bu da değişkenlerine ayrılabilen bir denklemdir: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. $\\varphi(u_0) = u_0$ ise $y = u_0x$ doğrusu\n       bir çözümdür. İntegral aldıktan sonra $u = \\frac{y}{x}$'i geri koyarız.</p>\n       <p><strong>Homojen denkleme indirgenebilen denklemler</strong>: $a_1b_2 - a_2b_1$ determinantı sıfırdan farklı olmak üzere\n       $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$. $[x_0; y_0]$, $a_ix + b_iy + c_i = 0$ doğrularının kesişim noktası olmak üzere $x = X + x_0$, $y = Y + y_0$ ötelemesiyle sabit terimler yok olur.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "Homojen bir denklemde yön alanı, orijinden geçen her $y = ux$ doğrusu (kesikli çizgiler) üzerinde aynı yöne sahiptir. $y' = \\frac{x + y}{x - y}$ denkleminin kutupsal koordinatlardaki çözümleri $r = C\\mathrm{e}^{\\varphi}$, yani logaritmik spirallerdir."
    }
   ],
   "examples": [
    {
     "task": "$x \\gt 0$ için $y' = \\dfrac{x^{2} + y^{2}}{xy}$ denkleminin genel çözümünü bul.",
     "steps": [
      "Pay ve payda $2$. dereceden homojendir. $x^{2}$'ye böldükten sonra: $u = \\frac{y}{x}$ olmak üzere $y' = \\frac{1 + u^{2}}{u}$.",
      "$y' = u + xu'$ koyalım: $u + xu' = \\frac{1}{u} + u$, dolayısıyla $xu' = \\frac{1}{u}$.",
      "Değişkenleri ayıralım: $u\\,du = \\frac{dx}{x}$, integral aldıktan sonra $\\frac{u^{2}}{2} = \\ln x + C$.",
      "<strong>Çözüm: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, burada $C_1 = 2C$."
     ]
    },
    {
     "task": "$y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$ Cauchy problemini çöz.",
     "steps": [
      "$y = ux$ değişken değiştirmesi: $u + xu' = u + \\mathrm{e}^{-u}$, dolayısıyla $xu' = \\mathrm{e}^{-u}$.",
      "Değişkenleri ayıralım: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$, böylece $\\mathrm{e}^{u} = \\ln x + C$.",
      "$u(1) = 0$ koşulundan: $1 = 0 + C$, dolayısıyla $C = 1$ ve $u = \\ln(1 + \\ln x)$.",
      "<strong>$x \\gt \\mathrm{e}^{-1}$ için $y = x\\ln(1 + \\ln x)$</strong>."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "1. mertebeden doğrusal denklemler ve Bernoulli denklemi",
   "summary": "İntegrasyon çarpanı, sabitin değişimi yöntemi, $y = y_h + y_p$ çözüm yapısı ve $z = y^{1-n}$ değişken değiştirmesi.",
   "theory": [
    "<p><strong>1. mertebeden doğrusal denklem</strong>, $p, q$ bir $I$ aralığında sürekli olmak üzere $y' + p(x)\\,y = q(x)$ biçimindedir. $q = 0$ ise denklem\n       (doğrusal denklemler anlamında) <strong>homojendir</strong> ve değişkenlerine ayrılabilir: $P$, $p$'nin herhangi bir ilkel fonksiyonu olmak üzere $y_h = C\\mathrm{e}^{-P(x)}$.\n       Homojen olmayan denklemin genel çözümü $y = y_h + y_p$'dir; yani homojen denklemin genel çözümü ile homojen olmayan denklemin bir (özel) çözümünün\n       toplamıdır. Cauchy probleminin tüm $I$ üzerinde tam olarak bir çözümü vardır.</p>",
    "<p><strong>İntegrasyon çarpanı.</strong> Denklemi $\\mu(x) = \\mathrm{e}^{P(x)}$ ile çarparız. Bu durumda sol taraf bir çarpımın türevi olur:\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       <strong>Sabitin değişimi</strong> yöntemi aynı sonuca götürür: çözümü $y = C(x)\\,\\mathrm{e}^{-P(x)}$ biçiminde ararız; yerine koyduktan sonra\n       $C(x)$ içeren terimler birbirini götürür ve $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$ kalır.</p>",
    "<p><strong>Bernoulli denklemi</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. Denklemi $y^{n}$'ye böler ve $z = y^{1-n}$ koyarız,\n       böylece $z' = (1-n)\\,y^{-n}y'$ olur. Doğrusal bir denklem elde ederiz:\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       $n \\gt 0$ için $y = 0$ da bir çözümdür ve bölme sırasında kaybolur. Örneğin lojistik denklem $y' = ry - \\frac{r}{K}y^{2}$, $n = 2$ olan bir Bernoulli denklemidir.</p>"
   ],
   "examples": [
    {
     "task": "$y' + 2y = 4x$, $y(0) = 1$ Cauchy problemini çöz.",
     "steps": [
      "$p = 2$, integrasyon çarpanı $\\mu = \\mathrm{e}^{2x}$. Denklem $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$ biçimine dönüşür.",
      "Kısmi integrasyon: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$, dolayısıyla $y = 2x - 1 + C\\mathrm{e}^{-2x}$.",
      "Koşuldan: $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> Kontrol: $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "$x \\gt 0$ için $y' + \\dfrac{y}{x} = xy^{2}$ Bernoulli denkleminin genel çözümünü bul.",
     "steps": [
      "$n = 2$, bu yüzden $z = y^{-1}$ ve $z' = -y^{-2}y'$. Denklemi $y^{2}$'ye böldükten sonra: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, dolayısıyla $-z' + \\frac{z}{x} = x$.",
      "$z' - \\frac{z}{x} = -x$ doğrusal denkleminin integrasyon çarpanı $\\mu = \\frac{1}{x}$'tir: $\\left(\\frac{z}{x}\\right)' = -1$, böylece $z = Cx - x^{2}$.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, ayrıca durağan çözüm $y = 0$."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "Tam diferansiyel denklemler ve integrasyon çarpanı",
   "summary": "$M_y = N_x$ olan $M\\,dx + N\\,dy = 0$ denklemi, potansiyel fonksiyon $F(x, y)$ ve tek değişkene bağlı integrasyon çarpanı.",
   "theory": [
    "<p>$M(x, y)\\,dx + N(x, y)\\,dy = 0$ denklemi, aşağıdaki eşitlikleri sağlayan bir $F(x, y)$ fonksiyonu (potansiyel fonksiyon) varsa $D$ bölgesinde <strong>tam diferansiyel denklemdir</strong>:\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       yani sol taraf $dF$ tam diferansiyelidir. Bu durumda her çözüm boyunca $dF = 0$ olur, bu yüzden <strong>genel integral</strong> $F(x, y) = C$'dir:\n       integral eğrileri $F$ fonksiyonunun seviye eğrileridir.</p>\n       <p><strong>Ölçüt.</strong> $M, N$ basit bağlantılı bir bölgede sürekli türevlenebilir ise denklem ancak ve ancak şu durumda tam diferansiyeldir:\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>$F$'nin hesaplanması.</strong> $M$'nin $x$'e göre integralini alırız ($y$ değişkenini sabit kabul ederiz): $F = \\int M\\,dx + \\varphi(y)$.\n       Bilinmeyen $\\varphi$ fonksiyonunu, yalnızca $y$'ye bağlı bir $\\varphi'(y)$ veren $\\frac{\\partial F}{\\partial y} = N$ koşulundan belirleriz.\n       Aynı şekilde $N$'nin $y$'ye göre integralini alarak da başlayabiliriz.</p>\n       <p><strong>İntegrasyon çarpanı.</strong> Denklem tam diferansiyel değilse $\\mu M\\,dx + \\mu N\\,dy = 0$ denkleminin tam diferansiyel olmasını sağlayan bir $\\mu \\neq 0$ fonksiyonu ararız,\n       yani $(\\mu M)_y = (\\mu N)_x$. İki basit durumda:</p>\n       <ul><li>$\\dfrac{M_y - N_x}{N} = \\omega(x)$ yalnızca $x$'e bağlıysa $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>\n       <li>$\\dfrac{N_x - M_y}{M} = \\omega(y)$ yalnızca $y$'ye bağlıysa $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>Örneğin $(p y - q)\\,dx + dy = 0$ olarak yazılan $y' + p(x)y = q(x)$ doğrusal denklemi için $\\omega = p(x)$'tir ve bilinen çarpan $\\mu = \\mathrm{e}^{\\int p\\,dx}$'tir.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "$(2x - y)\\,dx + (2y - x)\\,dy = 0$ denklemi, $F(x, y) = x^{2} - xy + y^{2}$ ile tam diferansiyel denklemdir. İntegral eğrileri $F = C$ elipsleridir; $[1; 2]$ noktasından geçen eğri $C = 3$'e karşılık gelir."
    }
   ],
   "examples": [
    {
     "task": "$(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$ denklemini çöz ve $[1; 1]$ noktasından geçen integral eğrisini bul.",
     "steps": [
      "$M_y = 2x$ ve $N_x = 2x$, denklem tam diferansiyeldir.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$, dolayısıyla $\\varphi'(y) = 2y$ ve $\\varphi(y) = y^{2}$.",
      "Genel integral $x^{2}y + x^{3} + y^{2} = C$. $[1; 1]$ noktası $C = 3$ verir.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "$(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$) denkleminin integrasyon çarpanını bul ve denklemi çöz.",
     "steps": [
      "$M_y = 1$, $N_x = -1$, denklem tam diferansiyel değildir. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$ yalnızca $x$'e bağlıdır.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. Yeni denklem: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$; burada $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$.",
      "$F = -\\frac{y}{x} + x$ ($F_x$ ve $F_y$'yi kontrol et), genel integral $x - \\frac{y}{x} = C$.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "1. mertebeden denklemlerin uygulamaları",
   "summary": "Nüfus artışı ve radyoaktif bozunma, Newton'un soğuma yasası, lojistik denklem, RC devresi ve çözeltilerin karışımı.",
   "theory": [
    "<p><strong>Üstel büyüme ve bozunma.</strong> Bir büyüklüğün değişim hızı o anki değeriyle orantılıysa $y' = ky$, yani\n       $y(t) = y_0\\mathrm{e}^{kt}$ geçerlidir. $k \\gt 0$ için büyüme söz konusudur (nüfus, sürekli bileşik faiz); ikiye katlanma süresi $\\frac{\\ln 2}{k}$'dir.\n       $k \\lt 0$ için bozunma söz konusudur; <strong>yarı ömrü</strong> $T$ olan bir radyoaktif izotop için $k = -\\frac{\\ln 2}{T}$, dolayısıyla $m(t) = m_0\\cdot 2^{-t/T}$'dir.</p>\n       <p><strong>Newton'un soğuma yasası.</strong> Sabit sıcaklığı $T_o$ olan bir ortamdaki bir cismin sıcaklığı, sıcaklık farkıyla orantılı bir hızla değişir:\n       $T' = -k(T - T_o)$, $k \\gt 0$. Çözüm $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$'dir; $k$ sabitini genellikle bir ek ölçümden belirleriz.</p>",
    {
     "fig": "v3-rast",
     "caption": "Mavi eğri $y' = ky$, $y(0) = 1$ denkleminin çözümü, yeşil eğri ise aynı $k$ ve taşıma kapasitesi $K$ (kesikli çizgi) ile lojistik denklemin çözümüdür. Başlangıçta neredeyse aynıdırlar, ancak lojistik eğri $K$ değerinde dengelenir."
    },
    "<p><strong>Lojistik denklem</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$, sınırlı kaynaklarla büyümeyi tanımlar; $K$ ortamın taşıma kapasitesidir.\n       Değişkenlerine ayrılabilir (aynı zamanda Bernoulli denklemidir) ve çözümü şudur:\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       Durağan çözümler $P = 0$ (kararsız) ve $P = K$'dir (kararlı). Nüfus en hızlı $P = \\frac{K}{2}$ olduğunda, yani $t = \\frac{\\ln A}{r}$ anında büyür.</p>",
    "<p><strong>RC devresi.</strong> Gerilimi $U$ olan bir kaynaktan $R$ direnci üzerinden şarj edilen bir kondansatörün yükü için $Rq' + \\frac{q}{C} = U$ geçerlidir.\n       Başlangıç yükü sıfırsa kondansatör üzerindeki gerilim $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$'dur; burada $\\tau = RC$ <strong>zaman sabitidir</strong>\n       ($\\tau$ süresinde kondansatör $U$ geriliminin yaklaşık $63\\,\\%$'ine kadar şarj olur).</p>\n       <p><strong>Çözeltilerin karışımı.</strong> Bir tankta $V$ litre çözelti vardır; içine dakikada $q$ litre, derişimi $c$ olan çözelti akar ve aynı hızla\n       tamamen karışmış çözelti dışarı akar. Maddenin miktarı $x(t)$ için “giren eksi çıkan” dengesi geçerlidir:\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "Sıcaklığı $90\\,{}^\\circ\\mathrm{C}$ olan bir kahve, sıcaklığı $20\\,{}^\\circ\\mathrm{C}$ olan bir odada duruyor. $10$ dakika sonra sıcaklığı $60\\,{}^\\circ\\mathrm{C}$ oluyor. Ne zaman $40\\,{}^\\circ\\mathrm{C}$'ye soğur?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. Ölçümden $60 = 20 + 70\\,\\mathrm{e}^{-10k}$, dolayısıyla $\\mathrm{e}^{-10k} = \\frac{4}{7}$ ve $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0{,}0560$.",
      "$40 = 20 + 70\\,\\mathrm{e}^{-kt}$ koşulu $\\mathrm{e}^{-kt} = \\frac{2}{7}$ verir, dolayısıyla $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3{,}5}{\\ln 1{,}75}$.",
      "<strong>$t \\approx 22{,}4$ dakika.</strong>"
     ]
    },
    {
     "task": "Bir tankta, içinde $5\\,\\mathrm{kg}$ tuz çözünmüş $100$ litre su vardır. Tanka dakikada $4$ litre, derişimi $0{,}2\\,\\mathrm{kg/l}$ olan çözelti akıyor ve karışmış çözelti aynı hızla dışarı akıyor. $25$ dakika sonra tankta ne kadar tuz vardır?",
     "steps": [
      "Denge: $x' = 0{,}2\\cdot 4 - \\frac{4}{100}x = 0{,}8 - 0{,}04x$, $x(0) = 5$.",
      "Sabit katsayılı doğrusal denklem: denge değeri $x = 20$'dir, bu yüzden $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0{,}04t} = 20 - 15\\,\\mathrm{e}^{-0{,}04t}$.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14{,}48\\,\\mathrm{kg}$.</strong> $t\\to\\infty$ için miktar $20\\,\\mathrm{kg}$'a yaklaşır."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "Sabit katsayılı 2. mertebeden doğrusal denklemler",
   "summary": "Temel çözüm sistemi, Wronskiyen, karakteristik denklem ve köklerinin üç türü.",
   "theory": [
    "<p>$I$ aralığında sürekli katsayılı <strong>2. mertebeden doğrusal homojen denklem</strong> $y'' + a_1(x)y' + a_0(x)y = 0$ şu özelliklere sahiptir:</p>\n       <ul><li><strong>Süperpozisyon ilkesi:</strong> çözümlerin her doğrusal kombinasyonu yine bir çözümdür; çözümler $2$ boyutlu bir vektör uzayı oluşturur.</li>\n       <li><strong>Temel çözüm sistemi</strong>, doğrusal bağımsız iki çözümden oluşan bir $y_1, y_2$ çiftidir; genel çözüm $y = C_1y_1 + C_2y_2$'dir.</li>\n       <li><strong>Wronskiyen</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. $y_1, y_2$ çözümleri ancak ve ancak\n       $W(x)\\neq 0$ ise doğrusal bağımsızdır (bir noktada olması yeterlidir). <strong>Liouville formülü</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$ geçerlidir.</li></ul>",
    "<p><strong>Sabit katsayılar.</strong> $y'' + py' + qy = 0$ için $y = \\mathrm{e}^{\\lambda x}$'i deneriz. Yerine koyup $\\mathrm{e}^{\\lambda x}$'e böldükten sonra\n       <strong>karakteristik denklemi</strong> $\\lambda^{2} + p\\lambda + q = 0$ elde ederiz. Köklerine göre:</p>\n       <table class=\"tbl\"><tr><th>kökler</th><th>temel çözüm sistemi</th><th>genel çözüm</th></tr>\n       <tr><td>$\\lambda_1\\neq\\lambda_2$ reel</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>$\\lambda$ çift katlı</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>Karmaşık köklerde, $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$ karmaşık çözümünün reel ve sanal kısımlarını alırız.\n       Aynı yöntem daha yüksek mertebeden denklemler için de işler: $k$ katlı bir $\\lambda$ köküne $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$ fonksiyonları karşılık gelir.</p>",
    {
     "fig": "v3-rad2",
     "caption": "$y(0) = 1$, $y'(0) = 0$ başlangıç koşullarıyla $y'' + py' + qy = 0$ denkleminin çözümü. Karmaşık köklerde çözüm salınım yapar, reel köklerde yapmaz; köklerin reel kısmının işareti çözümün sönümlenip sönümlenmeyeceğine ya da büyüyeceğine karar verir."
    }
   ],
   "examples": [
    {
     "task": "$y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$ Cauchy problemini çöz.",
     "steps": [
      "$\\lambda^{2} - \\lambda - 6 = 0$ karakteristik denkleminin kökleri $\\lambda_1 = 3$, $\\lambda_2 = -2$'dir.",
      "Genel çözüm $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, türevi $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "Koşullar: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$; buradan $C_1 = 2$, $C_2 = -1$.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "$y'' + 4y' + 13y = 0$ denkleminin temel çözüm sistemini bul ve Wronskiyenini hesapla.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, kökler $\\lambda = -2\\pm 3\\mathrm{i}$.",
      "Temel çözüm sistemi: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, Liouville formülü $W(x) = W(0)\\,\\mathrm{e}^{-4x}$ ile uyumludur."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "Homojen olmayan 2. mertebeden denklemler",
   "summary": "$y = y_h + y_p$ çözüm yapısı, özel sağ taraf için belirsiz katsayılar yöntemi ve sabitlerin değişimi yöntemi.",
   "theory": [
    "<p>$y'' + py' + qy = f(x)$ denkleminin genel çözümü $y = y_h + y_p$'dir; burada $y_h = C_1y_1 + C_2y_2$ ilgili homojen denklemin genel çözümü,\n       $y_p$ ise homojen olmayan denklemin herhangi bir (özel) çözümüdür. $f = f_1 + f_2$ ise $f_1$ ve $f_2$ için özel çözümleri\n       ayrı ayrı bulup toplayabiliriz (<strong>süperpozisyon ilkesi</strong>).</p>",
    "<p><strong>Belirsiz katsayılar yöntemi</strong> (özel sağ taraf). $P_m, Q_n$ polinomlar olmak üzere $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$ ise\n       özel çözümü şu biçimde ararız:\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       burada $R_N, S_N$ bilinmeyen katsayılı $N$. dereceden polinomlar, $k$ ise $\\alpha + \\beta\\mathrm{i}$ sayısının karakteristik denklemin kökü olarak katlılığıdır\n       (kök değilse $k = 0$). Katsayıları denklemde yerine koyup karşılaştırarak belirleriz.</p>\n       <table class=\"tbl\"><tr><th>sağ taraf $f(x)$</th><th>$y_p$'nin biçimi (rezonans yoksa)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ ($q\\neq 0$ ise)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>$\\alpha + \\beta\\mathrm{i}$ karakteristik denklemin bir kökü ise (<strong>rezonans</strong>) biçimi $x$ ile, çift katlı kökte $x^{2}$ ile çarparız.</p>",
    "<p><strong>Sabitlerin değişimi</strong> yöntemi her sürekli sağ taraf için işler. Çözümü $C_1'y_1 + C_2'y_2 = 0$ koşuluyla\n       $y = C_1(x)y_1 + C_2(x)y_2$ biçiminde ararız. Yerine koyarak şu sistemi elde ederiz:\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       çözümü $W$ Wronskiyen olmak üzere $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$'dir. Bu yönteme örneğin\n       $\\frac{1}{\\cos x}$, $\\mathrm{tg}\\,x$, $\\ln x$ ya da $\\frac{\\mathrm{e}^{x}}{x}$ sağ taraflarında ihtiyaç duyarız.</p>"
   ],
   "examples": [
    {
     "task": "$y'' - 3y' + 2y = \\mathrm{e}^{x}$ denkleminin genel çözümünü bul.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$ denkleminin kökleri $1$ ve $2$'dir, dolayısıyla $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$.",
      "$\\alpha = 1$ sayısı basit bir köktür (rezonans), bu yüzden $y_p = Ax\\mathrm{e}^{x}$. O zaman $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$.",
      "Yerine koyalım: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$, dolayısıyla $A = -1$.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "Sabitlerin değişimi yöntemiyle $y'' + y = \\dfrac{1}{\\cos x}$ denklemini $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$ aralığında çöz.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$, dolayısıyla $C_1 = \\ln(\\cos x) + K_1$; $C_2' = \\frac{\\cos x}{\\cos x} = 1$, dolayısıyla $C_2 = x + K_2$.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "Titreşimler: sönümsüz, sönümlü ve zorlanmış",
   "summary": "$mx'' + cx' + kx = F(t)$ denklemi, kritik altı, kritik ve kritik üstü sönüm, zorlanmış titreşimler ve rezonans.",
   "theory": [
    "<p>Sertliği $k$ olan bir yaya bağlı, hızla orantılı bir kuvvetle (katsayı $c$) sönümlenen ve bir $F(t)$ dış kuvvetiyle sürülen, kütlesi $m$ olan bir cisim şu denkleme uyar:\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       burada $\\omega_0 = \\sqrt{k/m}$ <strong>doğal açısal frekans</strong>, $\\delta = \\frac{c}{2m}$ ise <strong>sönüm katsayısıdır</strong>.\n       Aynı denklem seri bir $RLC$ devresindeki yükü de tanımlar: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>Sönümsüz titreşimler</strong> ($c = 0$, $F = 0$): genliği\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$ ve periyodu $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$ olan $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$.</p>",
    "<p><strong>Sönümlü titreşimler</strong> ($F = 0$). $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$ karakteristik denkleminin kökleri $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$'dir:</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>kritik altı sönüm</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; genliği üstel olarak azalan titreşimler;</li>\n       <li>$\\delta = \\omega_0$ (<strong>kritik sönüm</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>kritik üstü sönüm</strong>): azalan iki üstel fonksiyonun toplamı, periyodik olmayan hareket.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "$\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$ için $x(t)$ yer değiştirmesi. Kesikli $\\pm\\mathrm{e}^{-\\delta t}$ eğrileri sönümlü titreşimleri sınırlar. $\\delta = 2$ için kritik sönüm oluşur."
    },
    "<p><strong>Zorlanmış titreşimler</strong>, $F(t) = F_0\\cos\\omega t$. Sönüm yoksa ve $\\omega\\neq\\omega_0$ ise özel çözüm\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$'dir. $\\omega = \\omega_0$ olduğunda <strong>rezonans</strong> oluşur: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$\n       ve genlik sınırsız olarak büyür. Sönüm varsa serbest titreşimler söner ve genliği şu olan kalıcı durum kalır:\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       bu genlik $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$'de en büyüktür ($\\omega_0^{2} \\gt 2\\delta^{2}$ ise).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "$\\omega_0 = 2$ ve $F_0/m = 1$ için $A(\\omega)$ rezonans eğrisi. Sönüm küçükken maksimum keskindir ve doğal frekansa (kesikli çizgi) yakındır."
    }
   ],
   "examples": [
    {
     "task": "Kütlesi $1\\,\\mathrm{kg}$ olan bir cisim, sertliği $16\\,\\mathrm{N/m}$ olan bir yaya bağlıdır ve $c = 4\\,\\mathrm{kg/s}$ katsayısıyla sönümlenmektedir. Başlangıçta $0{,}1\\,\\mathrm{m}$ kadar çekilip durgun hâlden bırakılıyor. $x(t)$'yi bul.",
     "steps": [
      "$x'' + 4x' + 16x = 0$, dolayısıyla $\\delta = 2$, $\\omega_0 = 4$. $\\delta \\lt \\omega_0$ olduğundan kritik altı sönüm söz konusudur.",
      "Kökler $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$.",
      "$x(0) = C_1 = 0{,}1$; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$, dolayısıyla $C_2 = \\frac{0{,}1}{\\sqrt{3}}$.",
      "<strong>$x(t) = 0{,}1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "$x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$ problemini çöz.",
     "steps": [
      "Zorlayıcı frekans doğal frekansa eşittir ($\\omega = \\omega_0 = 3$), rezonans oluşur: $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "Yerine koyunca $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$ çıkar, dolayısıyla $A = 0$, $B = 1$, $x_p = t\\sin 3t$.",
      "Genel çözüm $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$; koşullardan $C_1 = 0$ ve $3C_2 = 0$.",
      "<strong>$x(t) = t\\sin 3t$</strong>, genlik zamanla doğrusal olarak büyür."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "Doğrusal diferansiyel denklem sistemleri ve faz portresi",
   "summary": "$\\mathbf{x}' = A\\mathbf{x}$ sistemi, özdeğerler ve özvektörler yardımıyla çözüm, denge noktasının sınıflandırılması.",
   "theory": [
    "<p>Sabit katsayılı 1. mertebeden doğrusal denklemlerden oluşan bir sistem $\\mathbf{x}' = A\\mathbf{x}$ biçimindedir; burada $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$ ve $A$\n       bir kare matristir. Çözümler $n$ boyutlu bir vektör uzayı oluşturur; sütunları $n$ doğrusal bağımsız çözüm olan matrise\n       <strong>temel matris</strong> denir. $n$. mertebeden her denklem bir sistem olarak yazılabilir (örneğin $y'' + py' + qy = 0$ için $x_1 = y$, $x_2 = y'$ koyarız);\n       tersine, $2\\times 2$ bir sistem <strong>yok etme (eliminasyon) yöntemiyle</strong> 2. mertebeden tek bir denkleme dönüştürülebilir.</p>",
    "<p><strong>Matris yöntemi.</strong> $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$ biçiminde bir çözüm ararız. Yerine koyarak $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$, $A$ matrisinin bir\n       <strong>özdeğeridir</strong> ($\\det(A - \\lambda I) = 0$ denkleminin kökü) ve $\\mathbf{v}$ ona karşılık gelen özvektördür.</p>\n       <ul><li>Farklı reel $\\lambda_1, \\lambda_2$: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>$\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$ vektörlü karmaşık $\\lambda = \\alpha\\pm\\beta\\mathrm{i}$: reel çözümler\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$'nin reel ve sanal kısımlarıdır, yani $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$ ve $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$.</li>\n       <li>Tek bir $\\mathbf{v}$ özvektörüne sahip çift katlı $\\lambda$: ikinci çözüm $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$'dir; burada $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$.</li></ul>",
    "<p>Düzlemsel bir sistemin <strong>faz portresi</strong>, $xy$ düzleminde $(x(t), y(t))$ yörüngelerini gösterir. $\\mathbf{0}$ noktası bir denge (durağan) noktasıdır ve\n       $\\det A\\neq 0$ ise tektir. Türünü özdeğerler, ya da iz $\\mathrm{tr}\\,A$ ve determinant belirler:</p>\n       <table class=\"tbl\"><tr><th>özdeğerler</th><th>tür</th><th>kararlılık</th></tr>\n       <tr><td>reel, zıt işaretli ($\\det A \\lt 0$)</td><td>eyer</td><td>kararsız</td></tr>\n       <tr><td>reel, aynı işaretli</td><td>düğüm</td><td>$\\lambda \\lt 0$ için kararlı</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>odak (spiraller)</td><td>$\\alpha \\lt 0$ için kararlı</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>merkez (kapalı eğriler)</td><td>kararlı, asimptotik olarak değil</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "$x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$ sisteminin faz portresi. Turuncu doğrular özvektörlerin doğrultularıdır (reel özdeğerlerde), küçük üçgenler $t$ arttıkça hareketin yönünü gösterir. Matrisin elemanlarını değiştirerek tablodaki tüm türleri dolaş."
    }
   ],
   "examples": [
    {
     "task": "$x(0) = 3$, $y(0) = 1$ başlangıç koşuluyla $x' = x + 2y$, $y' = 2x + y$ sistemini çöz.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$, dolayısıyla $\\lambda_1 = 3$, $\\lambda_2 = -1$.",
      "Özvektörler: $\\lambda_1 = 3$ için $\\mathbf{v}_1 = (1, 1)^{T}$, $\\lambda_2 = -1$ için $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. Koşullar: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$, dolayısıyla $C_1 = 2$, $C_2 = 1$.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> Özdeğerler zıt işaretlidir, denge noktası bir eyerdir."
     ]
    },
    {
     "task": "$x' = y$, $y' = -5x - 2y$ sisteminin denge noktasının türünü belirle ve sistemi 2. mertebeden denklemle karşılaştır.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, karakteristik denklem $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "$-1\\pm 2\\mathrm{i}$ özdeğerlerinin reel kısmı negatiftir: <strong>kararlı odak</strong>, yörüngeler spiraller boyunca orijine yaklaşır.",
      "Sistem, $x'' + 2x' + 5x = 0$ denkleminin (sönümlü titreşimler) bir yazılışıdır; çözümü $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "Laplace dönüşümü",
   "summary": "Tanım, dönüşüm tablosu, türevin dönüşümü, basit kesirlere ayırarak ters dönüşüm ve başlangıç değer problemlerinin çözümü.",
   "theory": [
    "<p><strong>Laplace dönüşümü</strong>, $t \\ge 0$ için tanımlı bir $f(t)$ fonksiyonuna karmaşık (bizim için reel) bir $s$ değişkeninin fonksiyonunu karşılık getirir:\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       $f$ parçalı sürekli ve <strong>üstel mertebeden</strong>, yani $|f(t)| \\le M\\mathrm{e}^{s_0t}$ ise integral $s \\gt s_0$ için yakınsar.\n       Örneğin $s \\gt a$ için $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$. Dönüşüm doğrusaldır\n       ve sürekli fonksiyonlar için birebirdir, bu yüzden bir $F$ görüntüsüne karşılık tek bir $f = \\mathcal{L}^{-1}\\{F\\}$ ön görüntüsü vardır.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>Burada $u$, Heaviside fonksiyonudur (birim basamak). $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$ evrişiminin (konvolüsyonunun) dönüşümü $F(s)G(s)$ çarpımıdır.</p>",
    "<p><strong>Başlangıç değer probleminin çözümü.</strong> Türevin dönüşümü kuralı, sabit katsayılı doğrusal bir denklemi $Y(s)$ için cebirsel bir denkleme dönüştürür;\n       başlangıç koşulları bu denkleme kendiliğinden yerleşir. Buradan $Y(s)$'yi (genellikle bir rasyonel fonksiyon) çeker, onu\n       <strong>basit kesirlere</strong> ayırır ve tablo yardımıyla $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$'yi buluruz. Yöntem özellikle süreksiz ya da darbe biçimindeki sağ taraflarda avantajlıdır.</p>",
    {
     "fig": "v3-laplace",
     "caption": "Çözüm yolu: dönüşüm, görüntü uzayında cebirsel düzenleme ve ters dönüşüm."
    }
   ],
   "examples": [
    {
     "task": "$f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$ fonksiyonunun Laplace dönüşümünü bul.",
     "steps": [
      "Doğrusallığı ve tabloyu kullanırız: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$s \\gt 2$ için $F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong>."
     ]
    },
    {
     "task": "Laplace dönüşümüyle $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$ problemini çöz.",
     "steps": [
      "Dönüşüm uygularız: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$, dolayısıyla $(s^{2} + 3s + 2)Y = s + 3$.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (basit kesirler, örneğin örtme yöntemiyle).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> Kontrol: $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. Karakteristik denklem $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$; burada $\\mathrm{tr}\\,A = {@2}$ ve $\\det A = {@3}$. Kökler $\\lambda_1 = {@4}$ ve $\\lambda_2 = {@5}$.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$ ve ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$ ve ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$, dolayısıyla $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ yalnızca $x$'e bağlıdır. Bu yüzden $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrol: $(\\mu M)_y = {@11}$ ve $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$ olmak üzere $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, yani yaklaşık ${@8}$ birey.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. $P = \\frac{K}{2}$ koşulu $A\\mathrm{e}^{-{@4}t} = 1$ demektir, dolayısıyla $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ yıl.",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, ölçümden $k = {@2} \\approx {@3}$. ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ koşulundan $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ dakika.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (çift katlı kök)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ ve $\\mathcal{L}\\{y'\\} = sY{@2}$. Yerine koyunca $({@3})Y = {@4}{@5}{@6}$, dolayısıyla ${@7}$.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, karakteristik denklemin diskriminantı $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$, çözüm $x = C_1\\cos {@1}t + C_2\\sin {@2}t$; burada $C_1 = x(0) = {@3}$ ve ${@4}C_2 = x'(0) = {@5}$, dolayısıyla $C_2 = {@6}$. Genlik $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ koşulundan $\\mathrm{e}^{-t/\\tau} = {@2}$, dolayısıyla $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$, dolayısıyla $\\varphi$ bir sabittir ve onu sıfır seçeriz",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$, dolayısıyla $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. $2^{-t/{@1}} = {@2}$ koşulundan logaritma alarak $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. Yerine koyup katsayıları karşılaştırınca: $x^{2}$ için: ${@0} = {@1}$, $A = {@2}$; $x$ için: ${@3} = {@4}$, $B = {@5}$; sabit terim: ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. Yerine koyarız: ${@0}{@1} = {@2}$. Katsayıları karşılaştırarak: $x$ için ${@3} = {@4}$, dolayısıyla $A = {@5}$; sabit terim ${@6} = {@7}$, dolayısıyla $B = {@8}$.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$, dolayısıyla $K = {@1}$ ve $m = {@2}$. Bu, Liouville formülüyle uyuşur: $p = {@3}$ olmak üzere $W(x) = W(0)\\,\\mathrm{e}^{-px}$.",
  ", teda $a = {@0}$": ", dolayısıyla $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "Paydaki sabit terim homojenliği bozar. Böyle bir denklemi önce doğruların kesişim noktasına ötelemek gerekir.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "Hangi tuz miktarı (kg cinsinden) dengededir, yani hangi miktarda $x' = 0$ olur?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "Kondansatörün gerilimi (volt cinsinden) ne olacak? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "$y' = {@0}$ denkleminin yön alanındaki doğru parçasının $[{@1}; {@2}]$ noktasındaki eğimi nedir?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "Cismin sıcaklığı ne olacak? Ondalık bir basamağa yuvarla.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "$Y(s)$'de $\\frac{1}{{@0}}$'ın toplam katsayısı, yani $A$ nedir?",
  "Aký je súčin koreňov?": "Köklerin çarpımı nedir?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "Genlik $|C_1| + |C_2|$ toplamı değil, $\\sqrt{C_1^{2} + C_2^{2}}$'dir (aynı frekanslı kosinüs ve sinüsün bileşimi).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "Zorlanmış titreşimlerin genliğinin frekansa bağlılığı",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "$y'{@0} = {@1}$ Bernoulli denklemini $z = y^{k}$ değişken değiştirmesiyle sabit katsayılı $z' + Pz = Q$ doğrusal denklemine dönüştürürüz. $k$, $P$ ve $Q$'yu bul (kesirleri $a/b$ biçiminde yaz).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "${@0}$ karakteristik denkleminin diskriminantı $D = {@1}$ ve kökleri {@2}. {@3} genel çözüm: ${@4}$.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "${@0}$ karakteristik denkleminin kökleri $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. $\\mathbf{v} = (1, m)^{T}$ için $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$'ın ilk satırından: ${@3} - \\lambda{@4} = 0$, dolayısıyla $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. $t = 0$ için: $C_1 + C_2 = {@7}$ ve ${@8} = {@9}$, buradan $C_1 = {@10}$, $C_2 = {@11}$.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "${@0}$ karakteristik denkleminin kökleri ${@1}$ ve ${@2}$, dolayısıyla ${@3}$ basit bir köktür (rezonans) ve $y_p$'nin biçiminde $x$ çarpanı vardır. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Yerine koyunca $x$'li terimler birbirini götürür ve geriye $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$ kalır, dolayısıyla $A = {@16}$.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "${@0}$ karakteristik denkleminin kökleri {@1}, bu yüzden ${@2}$. $y$ ve $y'$'de $x = 0$ koyarak {@3} sistemini elde ederiz; çözümü $C_1 = {@4}$, $C_2 = {@5}$.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "${@0}$ karakteristik denkleminin {@1} vardır. Sağ taraf {@2}{@3}, dolayısıyla $\\alpha = {@4}$ ve bu sayı karakteristik denklemin {@5} ($k = {@6}$). Bu yüzden $y_p = {@7}$.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "Karakteristik denklem ($y''$'nün katsayısına böldükten sonra) $\\lambda^{2} + p\\lambda + q = 0$'dır. Köklerinin toplamı nedir?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "Yalnızca ${@0}$ sayısına böldün, ama çözümde $x^{2}$, yani $x_0^{2}$ var.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "$(C_1 + C_2x){@0}$'ın türevinin $x = 0$'daki değeri ${@1}C_1 + C_2$'dir; üstel fonksiyonun türevinden gelen terimi unuttun.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "$C_2\\sin {@0}t$'nin türevi ${@1}C_2\\cos {@2}t$'dir, bu yüzden $C_2 = x'(0)$ değil, $C_2 = \\frac{x'(0)}{\\omega_0}$.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "$y_p$'nin türevleri sıfır değildir: $y_p' = {@0}A{@1}$ ve $y_p'' = {@2}A{@3}$ de yerine konmalıdır.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "Determinant negatif, özdeğerler zıt işaretli reel sayılardır: eyer.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "Genel çözümde $x = 0$ ve $y = y_0$ koy ve $C$'yi çek.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "$y = \\mathrm{e}^{\\lambda x}$ yerine konunca {@0}${@1}$ elde ederiz. Vieta bağıntılarına göre $\\lambda_1 + \\lambda_2 = {@2}$ ve $\\lambda_1\\lambda_2 = {@3}$, kökler {@4}. Genel çözüm ${@5}$.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "$x = 0$ koyarız: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, buradan $C = {@3}$. Cauchy probleminin çözümü $y = {@4}$.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "$x_p = A\\cos {@0}$ koyarız: $x_p'' = -{@1}A\\cos {@2}$, dolayısıyla $({@3} - {@4})A = {@5}$ ve $A = {@6}$. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "Yerine koyarız: $C\\cdot {@0}^{2}{@1} = {@2}$, dolayısıyla ${@3}C = {@4}$ ve $C = {@5}$.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "Yerine koyarız: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, dolayısıyla $\\frac{C}{{@4}} = {@5}$ ve $C = {@6}$. (Kontrol: denklemin sol tarafı $(xy)'$ ve $xy = {@7} + C$.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "$P = \\frac{K}{2}$'yi $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ çözümüne koy; $A\\mathrm{e}^{-rt} = 1$ elde edersin.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "$t = 0$ koy ve sabitler için sistemi çöz. $C_1$ ve $C_2$'yi gir.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "$x$ yerine $tx$, $y$ yerine $ty$ koy. Homojen denklemde sağ taraf değişmez.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "$y_1, y_2, y_1', y_2'$'de $x = 0$ koy.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "Genel çözümde ve türevinde $x = 0$ koy ve oluşan sistemden $C_1$'i bul.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "Genel çözümde $x = x_0$, $y = y_0$ koy ve $C$'yi çek.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "Genel çözümde $x = x_0$, $y = y_0$ koy ve $C$ için doğrusal denklemi çöz.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "$x_p$'yi denklemde yerine koy: $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "$y_p = Ax + B$'yi denklemde yerine koy ve $x$'in katsayılarını ve sabit terimleri karşılaştır.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "$y_p = A{@0}$'ı denklemde yerine koy ve $A$'yı bul.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "$y_p$'yi denklemde yerine koy ve kosinüs ile sinüsün katsayılarını karşılaştır; $A$, $B$ için iki denklemli bir sistem elde edersin.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "$y_p = K$ sabitini denklemde yerine koy ($y_p' = 0$) ve $K$'yı dikkatlice çek.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "Kosinüsün ikinci türevi negatiftir: $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "Üstel olarak azalan, cismin sıcaklığının kendisi değil, ortam sıcaklığından farkı $T - T_o$'dır.",
  "Exponenciálny a logistický rast": "Üstel ve lojistik büyüme",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "Üs, köklerin reel kısmı $\\alpha = -\\frac{p}{2}$'dir; işaretini kontrol et.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "$1 + y^{2}$ fonksiyonunun sıfır noktası yoktur, durağan çözümler yoktur. Değişkenleri ayırırız: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, dolayısıyla $\\mathrm{arctg}\\,y = {@1} + C$ ve $y = \\mathrm{tg}({@2} + C)$. Sabit argümanın içindedir; örneğin $y = \\mathrm{tg}({@3}) + C$, $C\\neq 0$ için denklemi sağlamaz.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "${@0}$ fonksiyonları ${@1} = 0$ denkleminin temel çözüm sistemini oluşturur. Wronskiyenleri $W(x) = K\\mathrm{e}^{mx}$ biçimindedir. $K$ ve $m$'yi bul.",
  "Fázový portrét lineárnej sústavy": "Doğrusal sistemin faz portresi",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "Trigonometrik fonksiyonlar karmaşık köklere ($D \\lt 0$) karşılık gelir. Burada diskriminant nedir?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "$y'{@0} = 0$ homojen denklemi $y' = {@1}$ verir; üsteki işareti kontrol et.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "$y'{@0} = 0$ homojen denkleminin çözümü $y_h = C{@1}$. Özel çözümü $y_p = K$ sabiti biçiminde ararız: ${@2}K = {@3}$, dolayısıyla $K = {@4}$. Genel çözüm ${@5}$.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "Türevin en yüksek mertebesini ara. Parantezin üzerindeki üs, örneğin $(y')^{3}$, mertebeyi artırmaz.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "İntegrasyon çarpanı $\\mu = {@0}$: $(y{@1})' = {@2}$. İntegral alarak $y{@3} = {@4} + B$, dolayısıyla $y = {@5} + B{@6}$ (özel çözümü $y_p = A{@7}$ koyarak da bulabiliriz: $A({@8}{@9}) = {@10}$, $A = {@11}$). ${@12} + B = {@13}$ koşulundan $B = {@14}$. Cevap: $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "İntegrasyon çarpanı ${@0}$ ve çözüm $y = {@1} + \\frac{C}{{@2}}$ biçimindedir. $C$'yi başlangıç koşulundan bul.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "$M$'nin $x$'e göre integralini al ($\\varphi(y)$ olmadan) ve $F$'nin bu kısmını $[{@0}; {@1}]$ noktasında hesapla.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "$M$'nin $x$'e göre integralini al, bilinmeyen $\\varphi(y)$ fonksiyonunu ekle ve onu $F_y$'yi $N$ ile karşılaştırarak bul. Son olarak noktayı yerine koy.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "İntegral $\\mathrm{arctg}\\,y = \\dots$ verir; $y$'yi çekmek için arktanjantın ters fonksiyonunu kullanmak gerekir.",
  "Integrálne krivky rovnice y' = xy": "y' = xy denkleminin integral eğrileri",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "Ayrışımdan gelen katsayıya başlangıç koşulundan gelen terimi ekle.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "Her fonksiyonun türevini al ve denklemde yerine koy. Çözüm denklemi tüm $x$ değerleri için sağlamalıdır.",
  "Keďže $c^{2} = 4mk$": "$c^{2} = 4mk$ olduğundan",
  "Keďže $c^{2} \\gt 4mk$": "$c^{2} \\gt 4mk$ olduğundan",
  "Keďže $c^{2} \\lt 4mk$": "$c^{2} \\lt 4mk$ olduğundan",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "${@0}\\neq {@1}$ olduğundan rezonans söz konusu değildir.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "Pozitif $A$, titreşimlerin uyarıcı kuvvetle aynı fazda olduğu anlamına gelir.",
  "Koeficient p": "Katsayı p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "$x'$'nün katsayısı (kütleye böldükten sonra) $\\delta$ değil, $2\\delta$'dır. Önce onu ikiye böl.",
  "Koeficient q": "Katsayı q",
  "Koeficient rastu k": "Büyüme katsayısı k",
  "Koeficient útlmu δ": "Sönüm katsayısı δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "Katsayıları en yüksek kuvvetten başlayarak sırayla hesapla: önce $x^{2}$'li terimden $A$'yı, sonra $B$'yi, en son $C$'yi.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "$A$ sabiti $P(0) = \\frac{K}{1 + A} = P_0$ koşulundan çıkar, yani $A = \\frac{K}{P_0}$ değil, $A = \\frac{K - P_0}{P_0}$.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "Çözümdeki $C$ sabiti ${@0}$ integrasyon çarpanına bölünür; $x = 2$'de onu da bölmek gerekir.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "Bozunma sabiti $\\frac{1}{T}$ değil, $k = \\frac{\\ln 2}{T}$'dir: $T$ süresinde miktar tam olarak yarıya inmelidir.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "Sabit integral alırken, yani $\\mathrm{arctg}\\,y = \\dots + C$ eşitliğinde ortaya çıkar. Buradan $y$'yi çektiğinde $C$ nereye gider?",
  "Koľko gramov izotopu zostane? {@0}": "Kaç gram izotop kalır? {@0}",
  "Koľko je $y({@0})^{2}$?": "$y({@0})^{2}$ kaçtır?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "Popülasyonda kaç birey olacak? Tam sayıya yuvarla.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "${@0}$ dakika sonra tankta kaç kilogram tuz olacak? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "${@0}$ {@1} içinde kaç yarı ömür geçer? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "$y' = {@0}(1 + y^{2})$ denkleminin genel çözümü hangi fonksiyondur?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "$y'{@0} = {@1}$ denkleminin genel çözümü hangi fonksiyondur?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "${@0} = 0$ denkleminin genel çözümü hangi fonksiyondur?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "Fonksiyonlardan hangisi ${@0}$ denkleminin çözümüdür?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "Denklemlerden hangisi homojendir, yani $y' = \\varphi\\left(\\frac{y}{x}\\right)$ biçiminde yazılabilir?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ probleminin çözümünün Laplace dönüşümü $Y(s)$ hangisidir?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "$y'{@0} = {@1}$, $y(0) = {@2}$ problemini Laplace dönüşümüyle çöz. Çözüm $y(t) = A{@3} + B{@4}$ biçimindedir; $A$ ve $B$'yi bul.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "Liouville formülü: $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "Payda, denklemin karakteristik polinomudur: $s$'nin katsayıları denklemdeki $y'$'nünkilerle aynı işaretlidir.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "Paydayı çarpanlarına ayırırız: ${@0} = (s{@1})(s{@2})$. Basit kesirlere ayırma: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Örtme yöntemi: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Bu yüzden $f(t) = {@17}{@18}$.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "$y_p$'nin biçimindeki $x$'in kuvveti, ${@0}$ sayısının karakteristik denklemin kökü olarak katlılığına eşittir. Bu katlılığı kontrol et.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "Çarpımsal sabit $y' = g(x)y$ türü denklemlerde (logaritma üzerinden) ortaya çıkar. Burada $\\frac{1}{1 + y^{2}}$'nin integralini alıyorsun, dolayısıyla sabit argümanda toplamsaldır.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "Önce $\\det A$'nın işaretini kontrol et: özdeğerlerin zıt işaretli olup olmadığına o karar verir.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "Önce ölçümden $k$'yı bul, sonra $T(t) = T^{*}$ denklemini logaritma alarak çöz.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "$f(t) = {@0}$ için $F(s) = \\mathcal{L}\\{f\\}(s)$ olsun. $F({@1})$'i hesapla (tam olarak kesir şeklinde ya da 3 ondalık basamağa).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "Kapasitesi ${@0}\\,\\mu\\mathrm{F}$ olan yüksüz bir kondansatörü, gerilimi ${@1}\\,\\mathrm{V}$ olan bir kaynaktan direnci ${@2}\\,\\mathrm{k\\Omega}$ olan bir direnç üzerinden şarj ediyoruz.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "$M$'nin $x$'e göre integraliyle $N$'nin $y$'ye göre integralini toplama: karma terimleri böylece iki kez saymış olursun. $N$'den yalnızca henüz eksik olan terimleri al.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "$x'' + {@0}x = 0$ sönümsüz osilatörünün başlangıç koşulları $x(0) = {@1}$, $x'(0) = {@2}$. Titreşimlerin genliğini bul. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "Sönümsüz bir osilatör periyodik bir kuvvetle uyarılıyor: $x'' + {@0}x = {@1}$. Kararlı zorlanmış titreşimler $x_p = A\\cos {@2}$ biçimindedir. $A$'yı bul (kesir ya da tam sayı olarak).",
  "Nosná kapacita K": "Taşıma kapasitesi K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "Bir tankta ${@0}$ litre {@1} var. Tanka {@2} akıyor ve iyice karışmış çözelti aynı hızla dışarı akıyor. ${@3}$ dakika sonra tankta kaç kilogram tuz olacak? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "${@0}$ diferansiyel denkleminin karakteristik denkleminin köklerini bul. Onları noktalı virgülle ayırarak gir.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "Özdeğerleri ve $(1, m)^{T}$ biçimindeki özvektörleri bul, sonra $t = 0$ koy ve $C_1$, $C_2$ için sistemi çöz.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "{@0} sisteminin matrisinin özdeğerlerini bul. Onları noktalı virgülle ayırarak gir.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "$F(s) = \\dfrac{{@0}}{{@1}}$ fonksiyonunun $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ orijinalini bul. Sonuç $f(t) = A{@2} + B{@3}$ biçimindedir; $A$ ve $B$'yi bul.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "Hacim değişmez, tanktaki derişim $\\frac{x}{{@0}}$'dır. Denge: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Denge değeri $cV = {@5}$, bu yüzden $x(t) = {@6}$ ve $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "Üstel fonksiyonun dönüşümü $\\frac{1}{s + a}$ değil, $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$'dır.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "Kuvvetin dönüşümü $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$'dir; faktöriyeli unuttun.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "Değişkenleri ayırırız: $y\\,dy = {@0}\\,dx$, dolayısıyla $\\frac{y^{2}}{2} = {@1} + C$, yani $y^{2} = {@2} + 2C$. Koşuldan $2C = {@3}$, böylece $y^{2} = {@4} + {@5}$. $y(0) \\gt 0$ olduğundan pozitif karekökü alırız: $y = \\sqrt{{@6} + {@7}}$ ve $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "Değişkenleri $\\frac{dy}{y^{2}} = k\\,dx$ biçiminde ayır ve $\\int y^{-2}\\,dy = -\\frac{1}{y}$ olduğunu hatırla.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "Değişkenleri $y\\,dy = kx\\,dx$ biçiminde ayır ve integral al. Karekökün işaretini başlangıç koşulundan belirle.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "Toplamın karekökü kareköklerin toplamı değildir: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Önce kökün içinde topla.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "Tuzun çıkışı derişim çarpı debidir, yani $\\frac{x}{V}\\cdot q$. Bu yüzden üste $q$ debisi de girmelidir.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "Yerine koyarak kontrol et: $y = {@0}x$ için $xy' = {@1}x$, ama sağ taraf ${@2}y$ farklıdır.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "Kontrol: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. $M$'nin $x$'e göre integralini alarak: $F = {@1} + \\varphi(y)$. $F_y = N$ koşulundan: {@2}. Bu yüzden $F(x, y) = {@3}$ ve $C = F({@4}, {@5}) = {@6}$.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "Özel çözümü $A\\mathrm{e}^{cx}$ biçiminde ara (denklemde yerine koy), $B$ sabitini başlangıç koşulundan bul.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "${@0} = {@1}$ denkleminin özel çözümünü $y_p = Ax + B$ biçiminde ararız. $A$ ve $B$'yi bul.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "${@0} = {@1}$ denkleminin özel çözümünü $y_p = Ax^{2} + Bx + C$ biçiminde ararız. $A$, $B$ ve $C$'yi bul.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "${@0} = {@1}$ denkleminin özel çözümünü $y_p = A{@2} + B{@3}$ biçiminde ararız. $A$ ve $B$'yi bul.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "Sönümsüz titreşimlerin periyodu $T = 2\\pi\\sqrt{m/k}$'dır.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "$x_p$ yerine konunca $KA\\cos {@0} = {@1}\\cos {@2}$ elde edersin. $K$'yı bul.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "$y_p = Ax{@0}$ yerine konunca geriye $A(2r + p){@1}$ kalır. $2r + p$'yi hesapla.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "$y_p = A{@0}$ yerine konunca $A(c + a) = b$ elde edersin: türev $c$ verir ve ${@1}$ terimi $-a$ değil, $+a$ ekler.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "$y_p = A{@0}$ yerine konunca $A(c^{2} + pc + q){@1}$ elde edersin. Parantezin değerini hesapla.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "$z' = (1-n)y^{-n}y'$ yerine konduktan sonra tüm denklemi $1 - n$ sayısıyla, yani $p$ ve $q$ katsayılarını da çarpmak gerekir.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "Yerine koyunca ${@0}$'ın katsayıları için denklem $uA{@1} = {@2}$ biçimindedir. $u$'yu bul.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "İntegral aldıktan sonra $-\\frac{1}{u} = \\ln x + C$ elde edersin. $C$'yi bul (kesir ya da tam sayı).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "İntegral aldıktan sonra $\\frac{u^{2}}{2}$ elde edersin; $u^{2}$'yi çekerken iki tarafı, yani logaritmalı terimi de 2 ile çarpmalısın.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "İntegral alıp 2 ile çarptıktan sonra $y^{2} = {@0} + K$ elde edersin. $K$ sabitini başlangıç koşulundan bul.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "İntegral aldıktan sonra $-\\frac{1}{y} = {@0} + C$ elde edersin. $C$'yi başlangıç koşulundan bul (kesir ya da tam sayı).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "$y = ux$ değişken değiştirmesinden ve integral aldıktan sonra $u^{2}$'yi çek ve $u({@0})^{2}$'yi hesapla. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "$y = ux$ değişken değiştirmesinden sonra $u = {@0} + C$ elde edersin. $C$'yi başlangıç koşulundan bul.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "Dönüşüm alıp $Y(s)$'yi çektikten sonra ${@0}$ kesrini basit kesirlere ayır. $\\frac{1}{{@1}}$'in katsayısı nedir?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "$x$'e böldükten sonra: $y' + \\frac{{@0}}{x}y = {@1}$. İntegrasyon çarpanı $\\mathrm{e}^{{@2}\\ln x} = {@3}$, denklem $({@4}y)' = {@5}$ biçimine gelir, dolayısıyla ${@6}y = {@7} + C$ ve $y = {@8} + \\frac{C}{{@9}}$. $1 + C = {@10}$ koşulundan $C = {@11}$. O zaman $y(2) = {@12}{@13}$.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "$x^{2}$'ye böldükten sonra: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. $y = ux$ değişken değiştirmesi: $u + xu' = u^{2} + u$, dolayısıyla $\\frac{du}{u^{2}} = \\frac{dx}{x}$ ($u = 0$ çözümü koşulu sağlamaz). İntegral alırız: $-\\frac{1}{u} = \\ln x + C$, koşuldan $C = {@0}$. Buradan $u = \\frac{{@1}}{1{@2}}$ ve $y = \\frac{{@3}}{1{@4}}$, böylece $y({@5}) \\approx {@6}$.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "$xy$'ye böldükten sonra: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. $y = ux$ değişken değiştirmesi: $u + xu' = u + \\frac{{@1}}{u}$, dolayısıyla $u\\,du = {@2}\\frac{dx}{x}$ ve $\\frac{u^{2}}{2} = {@3} + C$. $u(1) = {@4}$ koşulundan $u^{2} = {@5} + {@6}$ ve $y \\gt 0$ olduğundan $y = x\\sqrt{{@7} + {@8}}$. O zaman $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "${@0}$ sayısına böldükten sonra: $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "${@0}\\,\\%$ oranı üstel fonksiyonun kendisine değil, $1 - \\mathrm{e}^{-t/\\tau}$ ifadesine aittir.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "Tamlık koşulu $M_y = N_x$'tir. $M_y = {@0}$ ve $N_x = {@1}a{@2}{@3}$. {@4} katsayılarını karşılaştırarak ${@5}a = {@6}${@7} elde ederiz. Potansiyel fonksiyon o zaman $F = {@8}$.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "Liouville formülüne göre $W(x) = W(0)\\mathrm{e}^{-px}$; üsteki işareti kontrol et.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "Newton yasasına göre $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Ölçümden $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, dolayısıyla $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "Vieta bağıntılarına göre köklerin toplamı $-p$'dir.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "Tablo ve doğrusallık gereği $s \\gt {@1}$ için $F(s) = {@0}$. $s = {@2}$ koyarak: $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "Bir cismin hareketi ${@0}x'' + {@1}x' + {@2}x = 0$ denklemine uyar (kütle ${@3}\\,\\mathrm{kg}$, sönüm ${@4}\\,\\mathrm{kg/s}$, yay sabiti ${@5}\\,\\mathrm{N/m}$). Bu ne tür bir harekettir?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "Bir radyoaktif izotopun yarı ömrü ${@0}$ {@1}. Numunede başlangıçta ${@2}\\,\\mathrm{g}$ izotop var. ${@3}$ {@4} sonra kaç gram izotop kalır? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "Bir radyoaktif izotopun yarı ömrü ${@0}$ {@1}. Kaç {@2} sonra miktarı başlangıçtaki miktarın ${@3}\\,\\%$'sine düşer? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "Bir popülasyon $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ lojistik denklemine uyar ($t$ yıl cinsinden), başlangıçta ${@2}$ bireyi vardır.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "$c^{2}$'yi $4mk$ ile ya da $\\delta = \\frac{c}{2m}$ sönüm katsayısını $\\omega_0 = \\sqrt{k/m}$ doğal frekansıyla karşılaştır.",
  "Porovnaj absolútne členy a urči $B$.": "Sabit terimleri karşılaştır ve $B$'yi bul.",
  "Porovnaj absolútne členy a urči $C$.": "Sabit terimleri karşılaştır ve $C$'yi bul.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "$x$'in katsayılarını karşılaştır ve $A$'yı bul.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "$x$'in katsayılarını karşılaştır ve $B$'yi bul.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "$x^{2}$'nin katsayılarını karşılaştır ve $A$'yı bul.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "$W = y_1y_2' - y_1'y_2$ kullan. Üssü $W(x) = W(0)\\mathrm{e}^{-px}$ Liouville formülüyle kontrol edebilirsin.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "$\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$ kullan.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ ve $\\mathcal{L}\\{y'\\} = sY - y(0)$ kullan ve $Y$'yi çek.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "$(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$ sisteminin ilk satırını kullan.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "$A = \\frac{K - P_0}{P_0}$ olmak üzere $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ formülünü kullan.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "$y'(0)$'ın işaretine dikkat: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, sağ tarafa geçirildikten sonra $+y'(0)$ olur.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "İşarete dikkat: $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "İşarete dikkat: $\\int y^{-2}\\,dy = \\frac{1}{y}$ değil, $-\\frac{1}{y}$'dir.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "Sağ taraf 0. değil, 2. dereceden homojendir: $tx$, $ty$ konunca $t^{2}$ ile çarpılır. $\\varphi\\left(\\frac{y}{x}\\right)$ biçimi 0. derece gerektirir.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "Sağ taraf yalnızca bir sabit (0. dereceden polinom) içerir, burada $Ax + B$ polinomuna gerek yok.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "$x_p = Bt{@0} {@1}$ için $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ ($t$'li terimler birbirini götürür). Karşılaştırarak ${@7}{@8}B = {@9}$, dolayısıyla $B = {@10}$. $|B|t$ genliği zamanla doğrusal olarak artar.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "$y = \\cos {@0}x$ için $y'' = -{@1}\\cos {@2}x$, dolayısıyla $y'' + {@3}y = 0$. $\\cos {@4}x$ için $y'' = -{@5}\\cos {@6}x$ çıkardı, üstel fonksiyonun ikinci türevi ise pozitiftir.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "$y = \\mathrm{e}^{-{@0}x}$ için $y'' = {@1}\\mathrm{e}^{-{@2}x}$, dolayısıyla $y'' - {@3}y = 0$. $\\sin {@4}x$ için $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$ çıkar.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "$y = x^{{@0}}$ için $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. $y = {@6}x$ için $xy' = {@7}x$ çıkardı, ama ${@8}y = {@9}x$.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "$y' + py = qy^{n}$ için $z = y^{1-n}$ ve $z' + (1-n)pz = (1-n)q$.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "$y\\neq 0$ için değişkenleri ayırırız: $\\frac{dy}{y} = {@0}\\,dx$, dolayısıyla $\\ln|y| = {@1} + c$ ve $y = C\\mathrm{e}^{{@2}}$ ($y = 0$ çözümü $C = 0$ için kapsanır). Koşuldan $C = {@3}$, böylece $y = {@4}$ ve $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "$y_p = A\\mathrm{e}^{cx}$ için yerine konunca $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$ çıkar.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "$a$ parametresinin hangi değeri için $({@0})\\,dx + ({@1})\\,dy = 0$ denklemi tam diferansiyel denklemdir?",
  "Pre dva rôzne reálne korene": "İki farklı reel kök için",
  "Pre dvojnásobný koreň": "Çift katlı kök için",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "$\\alpha\\pm\\beta\\mathrm{i}$ karmaşık eşlenik kökler için",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "1. dereceden polinom için tam $Ax + B$ polinomu gerekir, yalnızca $Ax$ yetmez.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "Denklemi $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ biçiminde yeniden yaz ve $\\delta$'yı bul.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Denklemi $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ biçiminde yeniden yaz; o zaman $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "$x = 0$'da $C\\cdot\\mathrm{e}^{0} = C$, ama çözümde ayrıca $y_0$'dan çıkarman gereken ${@0}$ sabit terimi de var.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "$x = 0$'da iki üstel fonksiyon da 1'e eşittir, dolayısıyla $y(0) = A + B$. $A$ değerini $y(0)$'dan çıkarmak gerekir.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "$x = 1$'de $u(1) = y(1)$.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "$y = \\cos \\omega x$ için $y'' = -\\omega^{2}y$; denklemdeki ${@0}$ katsayısı $\\omega$ değil, $\\omega^{2}$'dir.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "$y = \\mathrm{e}^{rx}$ için $y'' = r^{2}y$; denklemdeki ${@0}$ katsayısı $r$ değil, $r^{2}$'dir.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "Sabit terimde $y_p'' = 2A$'yı unuttun: ikinci türev de bir sabitle katkıda bulunur.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "$x\\mathrm{e}^{rx}$'in çarpım kuralıyla türevi alınırken $y_p''$'de yalnızca $rA\\mathrm{e}^{rx}$ değil, $2rA\\mathrm{e}^{rx}$ terimi oluşur.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "${@0}$'ın $x$'e göre türevi alınırken ${@1}a$ katsayısı oluşur; katsayıların eşitliğini ayrıca ${@2}$ sayısına bölmek gerekir.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "${@0}\\cdot(\\dots)$ çarpımının türevi alınırken üstel fonksiyonun türevinden gelen ${@1}C_1$ terimi de oluşur.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "$t{@0} {@1}$ çarpımının iki kez türevi alınırken $t$'siz iki eş terim oluşur, toplamda $2\\omega_0$ katı.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "Çift katlı kökte yalnızca bir üstel fonksiyon vardır; ikinci bağımsız çözümü $x$ ile çarparak elde edersin.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "Çift katlı kökte üstel fonksiyon $x^{2}$ ile değil, $x$ ile çarpılır ($x^{2}$ üç katlı kökte olurdu).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "${@0}$'ın integralini alırken üsse bölmeyi unuttun: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "Karmaşık köklerde reel üstel fonksiyonlar çözüm değildir; $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$ biçimini kullan.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "$\\alpha\\pm\\beta\\mathrm{i}$ köklerinde üste reel kısım $\\alpha$, trigonometrik fonksiyonlara sanal kısım $\\beta$ girer; onları karıştırdın.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "Sabit terimleri karşılaştırırken türevden gelen ${@0} = {@1}$ terimini unuttun.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "Sabit terimi denklemin diğer tarafına geçirirken işaretini değiştirmedin.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "$r$ basit kökü olan rezonansta $y_p = Ax\\mathrm{e}^{rx}$ yerine konunca $A(2r + p)\\,\\mathrm{e}^{rx}$ ifadesi çıkar.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "$2^{-t/T} = p$ çözülürken logaritmayı $\\ln 2$ sayısına bölmek (ya da 2 tabanlı logaritma kullanmak) gerekir.",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "$\\frac{C}{x_0}$ kesrinden $C$'yi çekerken $x_0$ ile bölmek değil, çarpmak gerekir.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "Örtme yönteminde kesrin kalanına $s = a$ koyarsın; paydada o zaman $b - a$ değil, $a - b$ kalır.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "$ax^{n}$'nin ilkel fonksiyonu $\\frac{a}{n+1}x^{n+1}$'dir.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "$y'{@0} = {@1}$, $y(0) = {@2}$ Cauchy probleminin çözümü $y = A{@3} + B{@4}$ biçimindedir. $A$ ve $B$'yi bul.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ Cauchy probleminin çözümünü ${@3}$ biçiminde yazarız. $C_1$ ve $C_2$'yi bul.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "Çözüm $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$'dir; $\\mathrm{e}^{-k}$'yı ikinci ölçümden bul.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "Çözüm $y_h + y_p$ toplamıdır: sabit özel çözüm üstel fonksiyonla çarpılmaz.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "Çözüm, $y_h$ (katsayısı $y$'nin katsayısının ters işaretlisi olan üstel fonksiyon) ile sabit özel çözümün toplamıdır.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "Çözüm $\\mathrm{e}^{\\lambda x}$ biçimindedir; burada $\\lambda$ karakteristik denklemin bir köküdür; köklerin işaretlerini kontrol et.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "Çözüm $G(0) = 0$ olmak üzere $y = C\\mathrm{e}^{G(x)}$ biçimindedir. $C$'yi başlangıç koşulundan bul.",
  "Riešenie rovnice y″ + py′ + qy = 0": "y″ + py′ + qy = 0 denkleminin çözümü",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "$2^{-t/T} = p$ denklemini logaritma alarak çöz: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "$({@0})\\,dx + ({@1})\\,dy = 0$ denklemi tam diferansiyel denklemdir. Genel integralini $F(0, 0) = 0$ olmak üzere $F(x, y) = C$ biçiminde yazarız. $[{@2}; {@3}]$ noktasından geçen integral eğrisi için $C$'yi bul.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "$({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) denklemi tam diferansiyel değildir. $\\mu = x^{k}$ biçiminde bir integrasyon çarpanı vardır. $k$'yı bul.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "$x'' + {@0}x = {@1}$ denklemi rezonansı tanımlar. Özel çözümü $x_p = Bt{@2} {@3}$ biçimindedir. $B$'yi bul.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "$y' = f(x, y)$ denklemi, $[x; y]$ noktasındaki teğetin eğiminin $f(x, y)$ olduğunu söyler. Noktanın koordinatlarını yerine koy.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "$y' = {@0}$ denkleminin hem payında hem paydasında aynı dereceden homojen fonksiyonlar vardır, bu yüzden $x \\to tx$, $y \\to ty$ konunca $t$ sadeleşir ve sağ taraf yalnızca $\\frac{y}{x}$'e bağlı olur. Diğer denklemler farklı dereceden terimler ya da sabit terim içerir, bu yüzden $tx$ ve $ty$ konunca $t$ sadeleşmez.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "${@0} = {@1}$ denkleminin $y_p = Ax{@2}$ biçiminde özel çözümü vardır. $A$'yı bul.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "${@0} = {@1}$ denkleminin $y_p = A{@2}$ biçiminde özel çözümü vardır. $A$'yı bul.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "${@0}x'' + {@1}x = 0$ denkleminde $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Periyot $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "Denklem homojendir: $y' = \\frac{y}{x}{@0}$. $y = ux$ değişken değiştirmesi $u + xu' = u{@1}$ verir, dolayısıyla $u' = {@2}\\frac{{@3}}{x}$ ve $u = {@4} + C$. $u(1) = {@5}$ koşulundan $C = {@6}$, bu yüzden $y = x({@7}{@8})$ ve $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "Denklem $y' = g(x)\\,y$ biçimindedir. Değişkenleri $\\frac{dy}{y} = g(x)\\,dx$ biçiminde ayır ve integral al; $y = C\\mathrm{e}^{G(x)}$ elde edersin.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "$M_y - N_x$ farkını yalnızca $x$ değişkenine değil, $N = {@0}$ fonksiyonuna bölmek gerekir.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "$c^{2} - 4mk$ diskriminantının işareti belirleyicidir. Onu yeniden hesapla: sönümün karesini $mk$ çarpımının dört katıyla karşılaştırıyorsun.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "Karakteristik denklemin diskriminantının işareti, yani $c^{2}$ ile $4mk$'nin karşılaştırılması belirleyicidir: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, bu bir {@3} durumudur. (Eşdeğer olarak $\\delta = \\frac{c}{2m} = {@4}$ ve $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "$F$'yi $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ basit kesirlerine ayır ve $A$'yı bul.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "Paydayı $(s - a)(s - b)$ çarpımına, $F$'yi de $\\frac{A}{s-a} + \\frac{B}{s-b}$ basit kesirlerine ayır; sonra $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "Bozunma $m' = -km$ denklemine uyar, dolayısıyla $k = \\frac{\\ln 2}{T}$ olmak üzere $m(t) = m_0\\mathrm{e}^{-kt}$, yani $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "Mertebe, türevin hangi kuvvete yükseltildiğiyle değil, denklemde yer alan en yüksek türevle belirlenir. Denklemdeki en yüksek türev {@0}, dolayısıyla denklem <strong>{@1}. mertebedendir</strong>.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "Başlangıç değer probleminin Laplace dönüşümüyle çözüm şeması",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "Eyer yalnızca negatif determinantta (zıt işaretli reel özdeğerler) oluşur. $\\det A$'yı yeniden hesapla.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "Alanın $[x; y]$ noktasındaki eğimi, sağ tarafın $f(x, y)$ değeridir: $f({@0}, {@1}) = {@2} = {@3}$. $[{@4}; {@5}]$ noktasından geçen integral eğrisinin bu noktadaki teğetinin eğimi ${@6}$'dır.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "y' = (x + y)/(x − y) homojen denkleminin yön alanı",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "y' = x − y denkleminin yön alanı ve bir integral eğrisi",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "Kararlılığı $\\mathrm{tr}\\,A$ izinin (özdeğerlerin toplamının, yani reel kısmın iki katının) işareti belirler. Onu kontrol et.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "$y = 0$ durağan çözümü koşulu sağlamaz. $y\\neq 0$ için: $\\frac{dy}{y^{2}} = {@0}\\,dx$, dolayısıyla $-\\frac{1}{y} = {@1} + C$. Koşuldan $C = {@2}$. Buradan $y = \\frac{{@3}}{1{@4}}$ ve bu, $\\langle 0; {@5}\\rangle$ aralığında tanımlıdır (payda orada pozitiftir). Yerine koyarak $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "Merkez yalnızca iz sıfır olduğunda oluşur; aksi hâlde yörüngeler noktaya yaklaşır ya da ondan uzaklaşır.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "Değişken değiştirme $y^{n-1}$ değil, $z = y^{1-n}$'dir: üs, denklem bölündükten sonra $y^{n}$ kuvvetini ortadan kaldırmalıdır.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "{@0} sisteminin başlangıç koşulu $x(0) = {@1}$, $y(0) = {@2}$. Çözümü $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$ biçiminde yazarız; burada $\\lambda_1 \\gt \\lambda_2$ ve özvektörlerin birinci bileşeni $1$'dir. $C_1$ ve $C_2$'yi bul.",
  "Sčítaj: $F({@0}) = ?$": "Topla: $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "Kütlesi ${@0}\\,\\mathrm{kg}$ olan bir cisim, yay sabiti ${@1}\\,\\mathrm{N/m}$ olan bir yay üzerinde sönümsüz titreşiyor. Titreşimlerin periyodu saniye cinsinden nedir? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "Sıcaklığı ${@0}{@1}$ olan bir cismi sıcaklığı ${@2}{@3}$ olan bir odaya koyuyoruz. ${@4}$ dakika sonra sıcaklığı ${@5}{@6}$ oluyor.",
  "Tlmený harmonický oscilátor": "Sönümlü harmonik osilatör",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "Sönümlü bir osilatör ${@0}x'' + {@1}x' + {@2}x = 0$ denklemine uyar. Sönümlü titreşimlerinin $\\omega_d$ açısal frekansını bul. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "Bu türevin mertebesi değil, üssüdür (kuvvettir). Mertebeyi denklemde yer alan en yüksek türev belirler.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "Bu, sönümsüz osilatörün doğal frekansı $\\omega_0$'dır. Sönüm frekansı düşürür: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "Bu, kondansatörün deşarjıdır. Şarj sırasında gerilim sıfırdan $U$'ya doğru artar: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "Denklemin dönüşümünü al ($\\mathcal{L}\\{y'\\} = sY - y(0)$), $Y(s)$'yi çek ve basit kesirlere ayır.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "Dönüşümle: $sY{@0}{@1} = {@2}$, dolayısıyla $Y = {@3}{@4}$. Ayrışım: ${@5} = {@6}{@7}$. Ters dönüşümle $y = ({@8}{@9}){@10}{@11}$, dolayısıyla $A = {@12}$, $B = {@13}$.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "Burada $n = {@0}$, değişken değiştirme $z = y^{1-n}$, dolayısıyla $k = 1 - {@1} = {@2}$. Denklemi $y^{{@3}}$'e bölerek $y^{-n}y'{@4} = {@5}$ elde ederiz. $z' = (1-n)y^{-n}y'$ olduğundan denklemi $1 - n = {@6}$ sayısıyla çarpınca $z'{@7} = {@8}$ olur. Dolayısıyla $P = (1-n)p = {@9}$ ve $Q = (1-n)q = {@10}$.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "$(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ biçimi yalnızca çift katlı köke ($D = 0$) aittir. Burada diskriminant nedir?",
  "Urči $A$ (zlomok alebo celé číslo).": "$A$'yı bul (kesir ya da tam sayı).",
  "Urči $A$.": "$A$'yı bul.",
  "Urči $C = F({@0}, {@1})$.": "$C = F({@0}, {@1})$'i bul.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "$x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$ çözümündeki $C_1$'i bul.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "$C_2$'yi bul (kesir ya da tam sayı).",
  "Urči $C_2$.": "$C_2$'yi bul.",
  "Urči $\\omega_0^{2}$.": "$\\omega_0^{2}$'yi bul.",
  "Urči $\\omega_d$. {@0}": "$\\omega_d$'yi bul. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "$F_y = N$ koşulundan $\\varphi(0) = 0$ olacak şekilde $\\varphi(y)$'yi bul ve $\\varphi({@0})$'ı hesapla.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "$y({@0})$'ı bul (işareti başlangıç koşuluna göre).",
  "Urči amplitúdu kmitov. {@0}": "Titreşimlerin genliğini bul. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "$z = y^{k}$ değişken değiştirmesindeki $k$ üssünü bul ($a/b$ biçiminde kesir).",
  "Urči exponent $m$.": "$m$ üssünü bul.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "$G(x) = \\int_0^x g(t)\\,dt$ olmak üzere $G({@0})$ üssünün değerini bul. {@1}",
  "Urči koeficient $P$ pri $z$.": "$z$'nin $P$ katsayısını bul.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ çözümündeki $A$ sabitini bul.",
  "Urči oba korene (oddelené bodkočiarkou).": "İki kökü de bul (noktalı virgülle ayrılmış).",
  "Urči pravú stranu $Q$.": "$Q$ sağ tarafını bul.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "${@0}$ diferansiyel denkleminin mertebesini bul.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "{@0} sisteminin $[0; 0]$ denge noktasının türünü belirle.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "Büyük olan $\\lambda_1$ özdeğerini bul.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "${@0} = {@1}$ denkleminin özel çözümü belirsiz katsayılar yöntemiyle hangi biçimde aranmalıdır?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "Payda farklı dereceden terimler var ($x^{2}$ 2. dereceden, $y$ 1. dereceden), bu yüzden $t$ yerine konduktan sonra sadeleşmez.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "$2\\times 2$ bir matrisin özdeğerleri $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ denkleminin kökleridir.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "Özdeğerler reel kısmı ${@0}$ olan karmaşık sayılardır: {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "Özdeğerler aynı işaretli reel sayılardır (çarpım ${@0} \\gt 0$), toplamları ${@1}$: {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "Özdeğerler saf sanaldır: merkez.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "$\\lambda_1$'e ait özvektör $(1, m_1)^{T}$ biçimindedir. $m_1$'i bul.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "$\\lambda_2$'ye ait özvektör $(1, m_2)^{T}$ biçimindedir. $m_2$'yi bul.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "F(x, y) = x² − xy + y² fonksiyonunun seviye eğrileri",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "Denklemi $x$'e böl ve $\\mu = \\mathrm{e}^{\\int p\\,dx}$ integrasyon çarpanını kullan; $p = \\frac{n}{x}$ için $\\mu = x^{n}$.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "Denklemi $x^{2}$'ye böl, $y = ux$ koy ve değişkenleri $\\frac{du}{u^{2}} = \\frac{dx}{x}$ biçiminde ayır.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "Denklemi $xy$ ifadesine böl, $y' = \\frac{y}{x} + k\\frac{x}{y}$ elde edersin. Sonra $y = ux$ değişken değiştirmesini kullan.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "$y$'yi çek ve $y({@0})$'ı hesapla (kesir ya da tam sayı).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "$C$'nin kendisini değil, $\\frac{C}{{@0}}$'ı çektin: denklemi ayrıca ${@1}$ sayısıyla çarp.",
  "Vypočítaj $M_y - N_x$.": "$M_y - N_x$'i hesapla.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "$W(0)$'ı, yani $K$ değerini hesapla.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "$\\frac{M_y - N_x}{N}$'yi hesapla. $\\frac{k}{x}$ çıkarsa integrasyon çarpanı $\\mathrm{e}^{k\\ln x} = x^{k}$'dır.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "$\\frac{\\partial M}{\\partial y}$ ve $\\frac{\\partial N}{\\partial x}$'i hesapla ve aynı kuvvetlerin katsayılarını karşılaştır.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "$\\mathrm{e}^{-{@0}k}$'yı hesapla. 4 ondalık basamağa yuvarla.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "$\\tau = RC$'yi hesapla (kiloohm çarpı mikrofarad milisaniye verir) ve $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$'da yerine koy.",
  "Vypočítaj $u({@0})$. {@1}": "$u({@0})$'ı hesapla. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "$y(2)$'yi hesapla (kesir ya da ondalık sayı).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "$y({@0}) = C\\mathrm{e}^{G({@1})}$'i hesapla. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "$y({@0})$'ı hesapla. {@1}",
  "Vypočítaj determinant $\\det A$.": "$\\det A$ determinantını hesapla.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "${@0}$ üstel teriminin $s = {@1}$ noktasındaki dönüşümünü hesapla (kesir).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "Trigonometrik terimin $s = {@0}$ noktasındaki dönüşümünü hesapla (kesir).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "${@0}$ teriminin $s = {@1}$ noktasındaki dönüşümünü hesapla (kesir).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "Titreşimlerin periyodunu saniye cinsinden hesapla. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "Sistemin matrisinin $\\mathrm{tr}\\,A$ izini hesapla.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "İzi, determinantı ve $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ diskriminantını hesapla ve teorideki tabloyu kullan.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "$\\omega_0$ doğal açısal frekansını ($\\mathrm{s^{-1}}$ cinsinden) hesapla. 3 ondalık basamağa yuvarla.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "$\\tau = RC$ zaman sabitini milisaniye cinsinden hesapla.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "$y$'yi değil, $u = \\frac{y}{x}$'i hesapladın. $y = ux$ geri dönüşümünü unutma.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "$y$'nin değil, $u = \\frac{y}{x}$'in değerini hesapladın. $y = ux$ geri dönüşümünü unutma.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "$y$'nin değil, $u = \\frac{y}{x}$ yardımcı fonksiyonunun değerini hesapladın. $y = ux$ geri dönüşümünü unutma.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "$1 - \\mathrm{e}^{-t/\\tau} = p$ denklemini $t$ için çöz: $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "$\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ denklemini çöz ve özdeğerleri gir (noktalı virgülle ayrılmış).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "$x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ Cauchy problemini ($x \\gt 0$ için) çöz ve $y({@1})$'i hesapla. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "$xy'{@0} = {@1}$, $y(1) = {@2}$ Cauchy problemini $x \\gt 0$ için çöz ve $y(2)$'yi hesapla. Sonucu tam olarak gir (kesir ya da ondalık sayı).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "$xyy' = y^{2}{@0}$, $y(1) = {@1}$ Cauchy problemini ($x \\gt 0$ için) çöz ve $y({@2})$'yi hesapla. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "$y' = {@0}$, $y(0) = {@1}$ Cauchy problemini çöz ve $y({@2})$'yi hesapla. Sonucu kesir ya da tam sayı olarak gir.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "$y' = {@0}$, $y(0) = {@1}$ Cauchy problemini çöz ve $y({@2})$'yi hesapla. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "$yy' = {@0}$, $y(0) = {@1}$ Cauchy problemini çöz ve $y({@2})$'yi hesapla.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "${@0}$, $y(1) = {@1}$ Cauchy problemini ($x \\gt 0$ için) çöz ve $y({@2})$'yi hesapla. {@3}",
  "Vyrieš sústavu a urči $A$.": "Sistemi çöz ve $A$'yı bul.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "$\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ eşitliğinden yararlan ve $y$'yi çek.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "$\\frac{M_y - N_x}{N}$ ifadesi $\\frac{k}{x}$ biçimindedir. $k$'yı bul.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "$\\sqrt{m/k}$ ifadesi $\\frac{1}{\\omega_0}$'dır; periyot bundan $2\\pi$ kat daha büyüktür.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "$xy' + y ={@0}$ denkleminin sıfırı içermeyen bir aralıktaki genel çözümü $y = {@1} + \\frac{C}{x}$'tir. $y({@2}) = {@3}$ başlangıç koşulu için $C$'yi bul.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "$xy' = 2y{@0}$ denkleminin genel çözümü $y = Cx^{2}{@1}$'dir. $y({@2}) = {@3}$ başlangıç koşulu için $C$'yi bul. Sonucu tam sayı ya da kesir olarak gir.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "$y' = {@0}{@1}$ denkleminin genel çözümü $y = C{@2}{@3}$'tür. Çözüm $y(0) = {@4}$ başlangıç koşulunu sağlayacak şekilde $C$ sabitini bul.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "Wronskiyen $W = y_1y_2' - y_1'y_2$'dir; terimlerin sırası $K$'nın işaretini belirler.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "Wronskiyen, $\\mathrm{e}^{\\alpha x}$ çarpanlı iki fonksiyonun çarpımıdır, bu yüzden üssünde $2\\alpha$ vardır.",
  "Y(s) vyjadrené": "Y(s) çekildi",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "$T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$ içindeki $k$ sabitini ölçümden bul. 4 ondalık basamağa yuvarla.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "Her yarı ömürde miktar yarıya iner: $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "Gerilim kaç milisaniye sonra istenen değere ulaşır? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "Sıcaklık kaç dakika sonra istenen değere düşer? Dakikanın onda birine yuvarla.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "Popülasyon kaç yıl sonra taşıma kapasitesinin yarısına ulaşır? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "İkinci türevi unuttun: $y_p'' = -{@0}y_p$, bu yüzden kosinüs denklemindeki $A$'nın katsayısı $q - {@1}$'dir.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "$\\varphi(y)$ fonksiyonunu unuttun: $M$'nin $x$'e göre integrali alındıktan sonra onu $F_y = N$ koşulundan belirlemek gerekir.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "Genel çözümdeki ${@0}$ sabit terimini unuttun; önce onu diğer tarafa geçir.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "$C$ sabitini unuttun: $y(0)$ başlangıç koşulundan, üstel fonksiyonu çarpman gereken $C$ çıkar.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "$cq$ tuz girişini unuttun: o olmadan tanktaki tuz yalnızca azalırdı. Çözüm $cV$ denge değerine yaklaşır.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "Başlangıç koşulunu unuttun: $\\mathcal{L}\\{y'\\} = sY - y(0)$, bu yüzden $Y(s)$'de $\\frac{y(0)}{s - a}$ terimi de vardır.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "$s{@0}$ çarpanını ört ve $s = {@1}$ koy.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "Kütle ile yay sabitini karıştırdın: $\\omega_0 = \\sqrt{k/m}$ ve periyot $2\\pi\\omega_0$ değil, $\\frac{2\\pi}{\\omega_0}$'dır.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "Dönüşümleri karıştırdın: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ ve $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "Koordinatları karıştırdın: $[x; y]$ noktasında birinci koordinat $x$, ikincisi $y$'dir. Onları $f(x, y)$'de doğru yerlere koy.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "$y''$ yerine $\\lambda^{2}$, $y'$ yerine $\\lambda$, $y$ yerine $1$ yaz ve ikinci dereceden denklemi çöz.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "Çözümü $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$ olarak yaz, sabitleri koşullardan bul; genlik $\\sqrt{C_1^{2} + C_2^{2}}$'dir.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "Denklemi $y' = \\frac{y}{x} + a$ biçiminde yaz, $y = ux$, $y' = u + xu'$ koy ve integral al.",
  "Začiatočná hodnota y(0)": "Başlangıç değeri y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "$x_p$'nin iki kez türevini al ($t$ ile bir trigonometrik fonksiyonun çarpımı) ve yerine koy. $\\omega = \\omega_0$ için yalnızca $t$'siz terim kalır.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "Genel çözümün türevini al, hem $y$'de hem $y'$'de $x = 0$ koy ve iki doğrusal denklemli sistemi çöz.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "Sağ taraftaki üsten gelen $\\alpha$ sayısının karakteristik denklemin kaç katlı kökü olduğunu bul ve temel biçimi o kadar kez $x$ ile çarp.",
  "Zo začiatočnej podmienky urči $B$.": "$B$'yi başlangıç koşulundan bul.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "$x' = (\\text{madde girişi}) - (\\text{madde çıkışı}) = cq - \\frac{q}{V}x$ dengesini kur ve doğrusal denklemi çöz.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "Karakteristik denklemi kur, diskriminanta göre köklerin türünü belirle ve uygun çözüm biçimini kullan.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "Negatif $A$, titreşimlerin uyarıcı kuvvetle ters fazda olduğu anlamına gelir (uyarma frekansı doğal frekanstan yüksektir).",
  "absolútnom člene": "sabit terimin",
  "algebra": "cebir",
  "algebraická rovnica": "cebirsel denklem",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "ikinci türev",
  "dvojnásobný koreň ${@0}$": "çift katlı kökü ${@0}$",
  "je dvojnásobným koreňom": "çift katlı köküdür",
  "je jednoduchým koreňom": "basit köküdür",
  "k = 0: veličina sa nemení": "k = 0: büyüklük değişmez",
  "konštanta": "bir sabit",
  "korene ${@0}$ a ${@1}$": "${@0}$ ve ${@1}$ kökleri",
  "kritické tlmenie": "kritik sönüm",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "kritik sönüm: titreşimsiz en hızlı geri dönüş",
  "krát ${@0}$": "çarpı ${@0}$",
  "litre": "litre",
  "litrov": "litre",
  "logistická krivka s K = {@0}": "K = {@0} olan lojistik eğri",
  "nadkritické tlmenie (aperiodický pohyb)": "kritik üstü sönüm (aperiyodik hareket)",
  "nadkritické tlmenie: aperiodický pohyb": "kritik üstü sönüm: aperiyodik hareket",
  "neizolovaný rovnovážny bod (det A = 0)": "yalıtılmamış denge noktası (det A = 0)",
  "nestabilné ohnisko": "kararsız odak",
  "nestabilný degenerovaný uzol": "kararsız dejenere düğüm",
  "nestabilný uzol": "kararsız düğüm",
  "netlmené kmity, ω₀ = 2": "sönümsüz titreşimler, ω₀ = 2",
  "nie je koreňom": "kökü değildir",
  "po vydelení číslom ${@0}$": "${@0}$ sayısına böldükten sonra",
  "podkritické tlmenie (tlmené kmity)": "kritik altı sönüm (sönümlü titreşimler)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "kritik altı sönüm: sönümlü titreşimler, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "1. dereceden bir polinom",
  "polčas ln 2 / |k| = {@0}": "yarı ömür ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "Y(s) görüntüsü için",
  "prvá": "birinci türev",
  "riešenie y(t)": "çözüm y(t)",
  "rovnica pre y(t)": "y(t) için denklem",
  "rozklad na parciálne zlomky": "basit kesirlere ayırma",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "derişimi ${@0}\\,\\mathrm{kg/l}$ olan çözelti, {@1}",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "içinde ${@0}\\,\\mathrm{kg}$ tuz çözünmüş çözelti",
  "rýchlosťou ${@0}$ {@1} za minútu": "dakikada ${@0}$ {@1} hızla",
  "sedlo": "eyer",
  "stabilné ohnisko": "kararlı odak",
  "stabilný uzol": "kararlı düğüm",
  "tabuľka obrazov": "görüntü tablosu",
  "tretia": "üçüncü türev",
  "začiatočná úloha": "başlangıç değer problemi",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$ ve $y_p' = {@2}(-A{@3} + B{@4})$. Yerine koyup katsayıları karşılaştırırız: ${@5}$ için: ${@6} = {@7}$, ${@8}$ için: ${@9} = {@10}$. Sistemin çözümü $A = {@11}$, $B = {@12}$.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} Devre kapatıldıktan ${@1}\\,\\mathrm{ms}$ sonra kondansatörün gerilimi ne olur? Volt cinsinden sonucu 2 ondalık basamağa yuvarla.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} Odaya konduktan ${@1}$ dakika sonra sıcaklığı ne olur? Sonucu derecenin onda birine yuvarla.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} ${@1}$ yıl sonra popülasyonda kaç birey olur? Sonucu tam sayıya yuvarla.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} Kondansatörün gerilimi kaç milisaniye sonra kaynak geriliminin ${@1}\\,\\%$'sine ulaşır? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} Odaya konduktan kaç dakika sonra cismin sıcaklığı ${@1}{@2}$'ye düşer? Sonucu dakikanın onda birine yuvarla.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} Kaç yıl sonra taşıma kapasitesinin yarısına ulaşır (o anda en hızlı büyür)? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}$x'' + 2\\delta x' + \\omega_0^{2}x = 0$ biçimiyle karşılaştırınca $2\\delta = {@1}$, $\\delta = {@2}$ ve $\\omega_0^{2} = {@3}$. Karakteristik denklemin kökleri $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, bu yüzden $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.",
  "· riešením je priamka y = x − 1": "· çözüm y = x − 1 doğrusudur",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "Zaman sabiti $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, dolayısıyla $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "Özdeğerlerin reel (düğüm) mi yoksa karmaşık (odak, merkez) mı olduğuna $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ diskriminantının işareti karar verir.",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "$\\frac{y}{x}$ terimi uygundur, ama ikinci terim yalnızca $\\frac{y}{x}$ oranına bağlı değildir.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "$p\\,y'$ terimi $p(sY - y(0))$'a dönüşür; sağ tarafa geçirilince $+p\\,y(0)$ verir. İşareti kontrol et.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "${@0}$ sayısı karakteristik denklemin kökü değildir, çünkü ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. $y_p = A{@5}$ için $y_p' = {@6}A{@7}$ ve $y_p'' = {@8}A{@9}$; yerine konunca $A\\cdot {@10}\\,{@11} = {@12}{@13}$, dolayısıyla $A = {@14}$.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "Sağ taraftaki üsten gelen ${@0}$ sayısı karakteristik denklemin bir köküdür (rezonans); biçim kaç kez $x$ ile çarpılmalıdır?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "${@0}\\mathrm{i}$ sayısı karakteristik denklemin kökü değildir, rezonans yoktur.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "ikiye katlanma süresi ln 2 / k = {@0}",
  "čistej vody": "saf su",
  "čistá voda {@0}": "saf su, {@0}",
  "štvrtá": "dördüncü türev",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (çift katlı kök)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (karmaşık kökler)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (farklı reel kökler)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maksimum ω = {@1} değerinde, genlik {@2}</span> (F₀/m = 1 için)"
 }
});
