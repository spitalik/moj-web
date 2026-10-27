/* Turkish: university lessons, levels v1–v4 (js/rocniky/v1.js, v2.js, v3.js, v4.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('tr', {
  lessons: {
    'v1-kinematika': {
      title: 'Kinematik: konum, hız ve ivme',
      summary: 'Hareketin nedenlerine bakmadan tanımı: konum, hız ve ivmenin zamanla nasıl değiştiği.',
      theory: [
        `<p>Kinematik, cisimlerin hareketini bu hareketin nedenlerini sormadan tanımlar. Temel büyüklük <strong>konum</strong> $x(t)$’dir; seçilen başlangıç noktasına ve yöne göre cismin koordinatıdır.</p>`,
        `<p><strong>Hız</strong>, birim zamandaki konum değişimidir: $v=\\frac{\\Delta x}{\\Delta t}$. Bir vektördür, bu yüzden hareketin yönünü belirleyen bir işaret de taşır. <strong>İvme</strong>, birim zamandaki hız değişimidir: $a=\\frac{\\Delta v}{\\Delta t}$, birimi $\\text{m/s}^2$.</p>`,
        `<p><strong>Düzgün ivmeli harekette</strong> ivme sabittir. Hız bu durumda doğrusal olarak değişir, $v=v_0+a\\,t$, konum ise zamanın karesiyle değişir: $x=x_0+v_0\\,t+\\frac{1}{2}a\\,t^2$.</p>`,
        `<p><strong>Neden zamanla çarparız:</strong> ivme, hızın her saniye kaç metre/saniye değiştiğini söyler. $t$ süresinde hız bu yüzden $a\\,t$ kadar değişir. $a$ ile $v_0$ aynı işarete sahipse cisim hızlanır, aksi halde yavaşlar.</p>`,
        { fig: 'v1v4-kinematika-vt', caption: 'Düzgün ivmeli harekette hız-zaman grafiği doğrudur: eğimi ivme a, başlangıç noktası ilk hız v₀ değeridir.' }
      ],
      examples: [
        { task: 'Araba durmaktadır ($v_0=0$) ve sabit $a=2\\,\\text{m/s}^2$ ivmeyle hızlanır. $5\\,\\text{s}$ sonra hızı ne olur?',
          steps: ['$v=v_0+a\\,t$ bağıntısına yerine koyarız: $v=0+2\\cdot 5$.', '<strong>Sonuç: $v=10\\,\\text{m/s}$</strong>'] },
        { task: 'Trenin hızı $v_0=12\\,\\text{m/s}$ ve $a=-3\\,\\text{m/s}^2$ ivmesiyle fren yapıyor. $2\\,\\text{s}$ sonra hızı nedir?',
          steps: ['$v=v_0+a\\,t=12+(-3)\\cdot 2$.', '$v=12-6$.', '<strong>Sonuç: $v=6\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-newton': {
      title: 'Newton’un hareket yasaları',
      summary: 'Birinci, ikinci ve üçüncü yasa: cismin ne zaman düzgün hareket etmediği ve kuvvetin ivmeyle ilişkisi.',
      theory: [
        `<p><strong>Birinci yasa</strong> (eylemsizlik yasası): cisim, üzerine sıfırdan farklı bir bileşke kuvvet etki etmediği sürece durgun kalır veya düzgün doğrusal hareket eder. Eylemsizlik, kuvvetin sonucu değil, kütlenin bir özelliğidir.</p>`,
        `<p><strong>İkinci yasa</strong>: ivme, bileşke kuvvetle orantılı ve kütleyle ters orantılıdır, $\\vec a=\\frac{\\vec F}{m}$, yani $\\vec F=m\\,\\vec a$. Bileşke kuvvet, cisme etki eden tüm kuvvetlerin vektörel toplamıdır; zıt yönlü kuvvetler çıkarılır.</p>`,
        `<p><strong>Üçüncü yasa</strong>: A cismi B cismine bir kuvvet uygularsa, B cismi A’ya aynı büyüklükte ve zıt yönde bir kuvvet uygular. Bu iki kuvvet <em>farklı</em> cisimlere etki ettiğinden birbirini götürmez.</p>`,
        `<p><strong>Bunun nedeni:</strong> kuvvet, hareketteki değişimin nedenidir. Aynı ivme için kütle büyüdükçe daha büyük kuvvet gerekir, çünkü kütle hız değişimine karşı koyar.</p>`,
        { fig: 'v1v4-sily-dve', caption: 'Zıt yönlü kuvvetler çıkarılır. Bileşke F₁ − F₂, cisme a = (F₁ − F₂)/m ivmesini kazandırır.' }
      ],
      examples: [
        { task: '$m=4\\,\\text{kg}$ kütleli bir cisme $F=20\\,\\text{N}$ kuvvet etki eder ve aynı doğrultuda $F_t=8\\,\\text{N}$ sürtünme karşı çalışır. İvme nedir?',
          steps: ['Bileşke kuvvet: $F_v=20-8=12\\,\\text{N}$.', 'İvme: $a=\\frac{F_v}{m}=\\frac{12}{4}$.', '<strong>Sonuç: $a=3\\,\\text{m/s}^2$</strong>'] },
        { task: '$m=3\\,\\text{kg}$ kütleli bir cisme $12\\,\\text{N}$ bileşke kuvvet etki eder. İvme nedir?',
          steps: ['$a=\\frac{F}{m}=\\frac{12}{3}$.', '<strong>Sonuç: $a=4\\,\\text{m/s}^2$</strong>'] }
      ]
    },
    'v1-hybnost': {
      title: 'Kuvvet, momentum ve açısal momentum',
      summary: 'Momentum hareketin bir ölçüsü olarak, kuvvetin itmesi ve bir nokta etrafında dönüşte açısal momentum.',
      theory: [
        `<p>Cismin <strong>momentumu</strong>, kütlesi ile hızının çarpımıdır: $\\vec p=m\\,\\vec v$. Ağır ve hızlı bir cismin momentumu büyüktür ve durdurulması daha zordur.</p>`,
        `<p>İkinci Newton yasası momentum cinsinden de yazılabilir: $\\vec F=\\frac{\\Delta \\vec p}{\\Delta t}$. $\\vec F\\,\\Delta t$ çarpımına <strong>kuvvetin itmesi</strong> denir ve momentumdaki değişime eşittir: $\\Delta \\vec p=\\vec F\\,\\Delta t$.</p>`,
        `<p>Sabit $O$ noktasına göre bir parçacığın <strong>açısal momentumu</strong>, konum ile momentumun vektörel çarpımıdır: $\\vec L=\\vec r\\times\\vec p$; büyüklüğü $L=r\\,p\\sin\\alpha$, burada $\\alpha$, $\\vec r$ ile $\\vec p$ arasındaki açıdır.</p>`,
        `<p><strong>Bunun nedeni:</strong> kuvvet, momentumu yalnızca yeterince uzun süre etki ettiğinde değiştirir. Kısa bir darbe, kuvvet büyük olsa bile küçük bir itme verir. Açısal momentum yalnızca cisme $\\vec M=\\vec r\\times\\vec F$ tork etki ettiğinde değişir.</p>`
      ],
      examples: [
        { task: '$m=0{,}02\\,\\text{kg}$ kütleli bir mermi $v=300\\,\\text{m/s}$ hızla uçar. Momentumu nedir?',
          steps: ['$p=m\\,v=0{,}02\\cdot 300$.', '<strong>Sonuç: $p=6\\,\\text{kg\\,m/s}$</strong>'] },
        { task: '$F=50\\,\\text{N}$ kuvveti cisme $4\\,\\text{s}$ boyunca etki eder. Momentumundaki değişim nedir?',
          steps: ['Kuvvetin itmesi: $\\Delta p=F\\,\\Delta t=50\\cdot 4$.', '<strong>Sonuç: $\\Delta p=200\\,\\text{kg\\,m/s}$</strong>'] }
      ]
    },
    'v1-praca-energia': {
      title: 'İş, enerji ve güç',
      summary: 'Kuvvetin işi, cismin kinetik enerjisi ve zaman başına yapılan iş olarak güç.',
      theory: [
        `<p>Sabit bir kuvvetin $\\vec s$ kadar yer değiştirmedeki <strong>işi</strong> $W=F\\,s\\cos\\alpha$’dır; burada $\\alpha$, kuvvet ile yer değiştirme arasındaki açıdır. Yer değiştirmeye dik kuvvet iş yapmaz.</p>`,
        `<p>Cismin <strong>kinetik enerjisi</strong> $E_k=\\frac{1}{2}m v^2$’dir. Bileşke kuvvetin işi, kinetik enerjideki değişime eşittir: $W=\\Delta E_k$. Bu, kinetik enerji teoremidir.</p>`,
        `<p><strong>Güç</strong>, birim zamanda yapılan iştir: $P=\\frac{W}{t}$, birimi watt, $1\\,\\text{W}=1\\,\\text{J/s}$.</p>`,
        `<p><strong>Neden $v^2$ vardır:</strong> hız iki katına çıktığında cismin enerjisi dört katına çıkar, çünkü onu durdurmak için dört kat iş gerekir. Bu yüzden yüksek hızdaki kazalar çok tehlikelidir.</p>`,
        { fig: 'v1v4-praca-uhol', caption: 'İşi yalnızca yer değiştirmeye paralel kuvvet bileşeni, F·cos α yapar. Yer değiştirmeye dik bileşen iş yapmaz.' }
      ],
      examples: [
        { task: '$m=2\\,\\text{kg}$ kütleli bir cisim $v=3\\,\\text{m/s}$ hızla hareket eder. Kinetik enerjisi nedir?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 2\\cdot 3^2$.', '<strong>Sonuç: $E_k=9\\,\\text{J}$</strong>'] },
        { task: '$F=10\\,\\text{N}$ kuvveti cismi kuvvet yönünde $s=6\\,\\text{m}$ kadar yer değiştirir. Yapılan iş nedir?',
          steps: ['Açı $\\alpha=0^\\circ$, yani $\\cos\\alpha=1$.', '$W=F\\,s\\cos\\alpha=10\\cdot 6\\cdot 1$.', '<strong>Sonuç: $W=60\\,\\text{J}$</strong>'] }
      ]
    },
    'v1-gravitacne-pole': {
      title: 'Çekim alanı',
      summary: 'Newton’un çekim yasası, çekim ivmesi ve bunun gezegen merkezinden uzaklıkla değişimi.',
      theory: [
        `<p><strong>Newton’un çekim yasası</strong>: $r$ uzaklığındaki $m_1$ ve $m_2$ kütleli iki cisim $F=G\\frac{m_1 m_2}{r^2}$ kuvvetiyle birbirini çeker; burada $G\\approx 6{,}67\\cdot 10^{-11}\\,\\text{N\\,m}^2/\\text{kg}^2$.</p>`,
        `<p><strong>Çekim alanı</strong>, kütleli bir cisme çekim kuvvetinin etki ettiği bölgedir. Alanın şiddeti, yani <em>çekim ivmesi</em>, $g=\\frac{F}{m}=G\\frac{M}{r^2}$’dir; burada $M$, alanın kaynağının kütlesidir.</p>`,
        `<p><strong>Neden uzaklıkla azalır:</strong> çekim etkisi, yüzey alanı $4\\pi r^2$ olan giderek büyüyen bir küreye yayılır. Bu yüzden çekim ivmesi merkezden uzaklığın karesiyle değişir, doğrusal olarak değil.</p>`,
        `<p>Dünya yüzeyinde $g\\approx 9{,}81\\,\\text{m/s}^2$’dir. Dünya merkezinden $r$ uzaklıkta $g(r)=9{,}81\\cdot\\left(\\frac{R}{r}\\right)^2$’dir; burada $R$, Dünya’nın yarıçapıdır.</p>`,
        { fig: 'v1v4-gravitacia-r', caption: 'Çekim ivmesi, merkeze olan uzaklığın karesiyle azalır: 2R uzaklıkta dörtte birine düşer.' }
      ],
      examples: [
        { task: 'Dünya merkezinden uzaklık, Dünya yarıçapının iki katı olan bir yükseklikte çekim ivmesi nedir?',
          steps: ['Uzaklık oranı $\\frac{r}{R}=2$, yani $g(r)=g\\cdot\\left(\\frac{1}{2}\\right)^2$.', '$g(r)=\\frac{9{,}81}{4}\\approx 2{,}45\\,\\text{m/s}^2$.', '<strong>Sonuç: yaklaşık $2{,}45\\,\\text{m/s}^2$</strong>'] },
        { task: 'Kütleleri $m_1=10\\,\\text{kg}$ ve $m_2=5\\,\\text{kg}$ olan iki cisim $r$ uzaklıktadır. Uzaklık iki katına çıkarılırsa kuvvet nasıl değişir?',
          steps: ['Kuvvet $\\frac{1}{r^2}$ ile orantılıdır; $2r$ için dört kat azalır.', '<strong>Sonuç: kuvvet dörtte bire düşer</strong>'] }
      ]
    },
    'v1-rotacia': {
      title: 'Katı cismin dönmesi',
      summary: 'Bir cismin bir eksen etrafında dönmesinde açısal hız, eylemsizlik momenti ve kuvvet momenti.',
      theory: [
        `<p>Bir eksen etrafında dönen <strong>katı cisim</strong> şeklini değiştirmez: tüm noktaları saniyede radyan cinsinden aynı <strong>açısal hız</strong> $\\omega$ ile döner. Cisim saniyede $f$ devir yapıyorsa $\\omega=2\\pi f$’dir, çünkü tam bir tur $2\\pi$ açısına karşılık gelir.</p>`,
        `<p>Eksenden $r$ uzaklıktaki bir noktanın çevresel hızı $v=\\omega\\,r$’dir. Aynı açısal hızda eksenden daha uzak noktalar daha hızlı hareket eder.</p>`,
        `<p><strong>Eylemsizlik momenti</strong> $I=\\sum m_i r_i^2$, kütlenin dönme karşılığıdır. Yalnızca kütleye değil, bu kütlenin eksenden ne kadar uzakta dağıldığına da bağlıdır. Dönme için İkinci Newton yasası $M=I\\,\\alpha$ biçimindedir; burada $M$ kuvvet momenti, $\\alpha$ açısal ivmedir.</p>`,
        `<p><strong>Neden iki pi vardır:</strong> açı radyan cinsinden ölçülür ve bir tur $\\pi$ değil $2\\pi$ radyandır. Bu yüzden hertz cinsinden verilen frekans $2\\pi$ ile çarpılır.</p>`,
        { fig: 'v1v4-rotacia', caption: 'Katı cisimde eksenden r uzaklıktaki bir nokta, v = ω·r çevresel hızıyla bir çember üzerinde hareket eder.' }
      ],
      examples: [
        { task: 'Disk $f=3\\,\\text{Hz}$ frekansla döner. Açısal hızı nedir?',
          steps: ['$\\omega=2\\pi f=2\\pi\\cdot 3$.', '<strong>Sonuç: $\\omega=6\\pi\\approx 18{,}85\\,\\text{rad/s}$</strong>'] },
        { task: 'Tekerleğin üzerindeki bir nokta eksenden $r=0{,}5\\,\\text{m}$ uzaklıktadır ve açısal hızı $\\omega=4\\,\\text{rad/s}$’dir. Çevresel hızı nedir?',
          steps: ['$v=\\omega\\,r=4\\cdot 0{,}5$.', '<strong>Sonuç: $v=2\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v1-sustavy': {
      title: 'Parçacık sistemlerinin mekaniği',
      summary: 'Parçacık sisteminin kütle merkezi, konumlarının ağırlıklı ortalaması olarak ve kütle merkezinin hareketi.',
      theory: [
        `<p><strong>Parçacık sistemi</strong>, tek bir önemli noktayla, <strong>kütle merkeziyle</strong> tanımlanabilir. $x$ ekseninde iki parçacık için konumu $x_T=\\frac{m_1x_1+m_2x_2}{m_1+m_2}$’dir. Bu ağırlıklı bir ortalamadır; daha ağır parçacık kütle merkezini kendine doğru çeker.</p>`,
        `<p>Kütle merkezi, toplam kütlesi $M=\\sum m_i$ olan tek bir parçacık gibi hareket eder ve üzerine dış kuvvetlerin bileşkesi etki eder: $M\\,\\vec a_T=\\sum \\vec F_{\\text{ext}}$. Parçacıklar arasındaki iç kuvvetler birbirini götürür, bu yüzden kütle merkezinin hareketini değiştirmezler.</p>`,
        `<p><strong>Neden basit ortalama değil de kütle merkezi:</strong> parçacıkların kütleleri eşitse aritmetik ortalama çıkar. Kütleler farklıysa her koordinat, kendi parçacığının kütlesi kadar ağırlıklandırılmalıdır.</p>`,
        `<p>Sistemin kinetik enerjisi, kütle merkezinin hareket enerjisine ve parçacıkların kütle merkezine göre hareket enerjisine ayrılabilir. Böylece karmaşık hareketler daha basit parçalara bölünebilir.</p>`,
        { fig: 'v1v4-sustava-tazisko', caption: 'Kütle merkezi T, daha ağır parçacığa daha yakındır. Koordinatı, parçacıkların koordinatlarının ağırlıklı ortalamasıdır.' }
      ],
      examples: [
        { task: '$1\\,\\text{kg}$ kütleli bir parçacık $x_1=0\\,\\text{m}$ noktasında, $3\\,\\text{kg}$ kütleli bir parçacık ise $x_2=4\\,\\text{m}$ noktasındadır. Kütle merkezi nerededir?',
          steps: ['$x_T=\\frac{1\\cdot 0+3\\cdot 4}{1+3}=\\frac{12}{4}$.', '<strong>Sonuç: $x_T=3\\,\\text{m}$</strong>'] },
        { task: 'Kütleleri eşit iki parçacık $x_1=2\\,\\text{m}$ ve $x_2=8\\,\\text{m}$ noktalarındadır. Kütle merkezi nerededir?',
          steps: ['Kütleler eşit olduğunda kütle merkezi aritmetik ortalamadır: $x_T=\\frac{2+8}{2}$.', '<strong>Sonuç: $x_T=5\\,\\text{m}$</strong>'] }
      ]
    },
    'v1-lagrange': {
      title: 'Lagrange ve Hamilton mekaniği',
      summary: 'Kinetik ve potansiyel enerji farkı olarak Lagrange fonksiyonu ve toplam enerji olarak Hamiltonyen.',
      theory: [
        `<p>Bir sistemin <strong>Lagrange fonksiyonu</strong> $L=T-V$’dir; burada $T$ kinetik, $V$ potansiyel enerjidir. Tek tek kuvvetleri izlemek yerine bu iki enerjiyi ve bunların genelleştirilmiş koordinatlar $q$ ile hızlar $\\dot q$’ya bağlılığını bilmek yeterlidir.</p>`,
        `<p><strong>Euler-Lagrange denklemleri</strong> hareket denklemlerini verir: $\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q}-\\frac{\\partial L}{\\partial q}=0$. Avantajı, koordinatları problem için uygun olduğu sürece serbestçe seçebilmemizdir; örneğin sarkacın açısını.</p>`,
        `<p>Korunumlu kuvvetlerde <strong>Hamiltonyen</strong> $H=T+V$’dir, yani toplam enerjidir. Momentumları $p=\\frac{\\partial L}{\\partial \\dot q}$ tanımlayarak hareket denklemleri, Hamilton denklemleri adı verilen birinci mertebeden denklem çiftleri olarak yazılır.</p>`,
        `<p><strong>Lagrangiyen’de neden eksi var:</strong> potansiyel enerji harekete karşı etki eder; Lagrange fonksiyonunda çıkarılır, Hamiltonyen’de ise kinetik enerjiye eklenir.</p>`
      ],
      examples: [
        { task: 'Kütlesi $m=2\\,\\text{kg}$ olan bir parçacığın $h=1\\,\\text{m}$ yükseklikte hızı $v=3\\,\\text{m/s}$’dir. $g=10\\,\\text{m/s}^2$ ise Lagrange fonksiyonu nedir?',
          steps: ['$T=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 9=9\\,\\text{J}$.', '$V=mgh=2\\cdot 10\\cdot 1=20\\,\\text{J}$.', '<strong>Sonuç: $L=T-V=9-20=-11\\,\\text{J}$</strong>'] },
        { task: 'Aynı parçacığın Hamiltonyeni $H=T+V$’dir. Sonucu nedir?',
          steps: ['$H=9+20$.', '<strong>Sonuç: $H=29\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-teplota-tlak': {
      title: 'Sıcaklık, basınç, ısı ve iç enerji',
      summary: 'Kelvin cinsinden termodinamik sıcaklık, yüzeye düşen kuvvet olarak basınç ve parçacıkların enerjilerinin toplamı olarak iç enerji.',
      theory: [
        `<p><strong>Termodinamik sıcaklık</strong> $T$, kelvin cinsinden ölçülür. Parçacıkların ortalama kinetik enerjisiyle orantılıdır, bu yüzden negatif olamaz. Santigrat dereceden dönüşüm $T=t+273{,}15$’tir; burada $0\\,\\text{K}$ mutlak sıfırdır.</p>`,
        `<p><strong>Basınç</strong>, birim alana dik etki eden kuvvettir: $p=\\frac{F}{S}$, birimi paskal, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Gaz kabın duvarlarına basınç uygular, çünkü parçacıklar duvarlara çarpar ve onlara momentum aktarır.</p>`,
        `<p><strong>İç enerji</strong> $U$, sistemdeki tüm parçacıkların kinetik ve potansiyel enerjilerinin toplamıdır. $Q$ ısısı, sıcaklık farkı nedeniyle cisimler arasında aktarılan enerjidir; cismin “içindeki miktar” değildir.</p>`,
        `<p><strong>Neden kelvin:</strong> santigrat derecelerin sıfır noktası keyfidir. Enerji veya oranla ilgili formüllerde, enerjinin sıfıra düştüğü noktayı, yani kelvini kullanmalıyız.</p>`,
        { fig: 'v1v4-teplota-stupnice', caption: 'Sıcaklık dönüşümü T = t + 273,15 şeklindedir. Mutlak sıfır 0 K değerine, yani −273,15 °C değerine karşılık gelir.' }
      ],
      examples: [
        { task: 'Sıcaklık $t=27\\,{}^\\circ\\text{C}$ ise kelvin cinsinden nedir?',
          steps: ['$T=t+273{,}15=27+273{,}15$.', '<strong>Sonuç: $T=300{,}15\\,\\text{K}$</strong>'] },
        { task: '$S=0{,}2\\,\\text{m}^2$ yüzeye dik olarak $F=600\\,\\text{N}$ kuvvet etki eder. Basınç nedir?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}2}$.', '<strong>Sonuç: $p=3000\\,\\text{Pa}$</strong>'] }
      ]
    },
    'v2-stavove-rovnice': {
      title: 'Hal denklemleri',
      summary: 'İdeal gazın hal denklemi pV = nRT ve bunun basınç hesabında kullanımı.',
      theory: [
        `<p>İdeal gazın <strong>hal denklemi</strong>, basınç $p$, hacim $V$, madde miktarı $n$ ve sıcaklık $T$’yi birbirine bağlar: $pV=nRT$, burada $R\\approx 8{,}314\\,\\text{J/(mol\\,K)}$.</p>`,
        `<p>İdeal gaz, parçacıkların kendi hacminin olmadığı ve çarpışmalar dışında birbirleriyle etkileşmediği bir modeldir. Yeterince seyreltilmiş bir gazda, olağan sıcaklıklarda bu model çok doğrudur.</p>`,
        `<p><strong>Nasıl kullanılır:</strong> üç büyüklük biliniyorsa dördüncüsü hesaplanır. Örneğin basınç $p=\\frac{nRT}{V}$’dir. Bir büyüklük değiştiğinde diğerleri orantılılıklara göre değişir: sabit sıcaklıkta basınç hacimle ters orantılıdır.</p>`,
        `<p><strong>Birimlere dikkat:</strong> sıcaklık kelvin, hacim metreküp cinsinden olmalıdır; aksi halde sonuç paskal cinsinden çıkmaz. Litre ve desimetreküp, $1000$ bölünerek dönüştürülür.</p>`,
        { fig: 'v1v4-izoterma', caption: 'Sabit sıcaklıkta pV çarpımı sabittir; basınç hacme bağlı olarak bir hiperbol oluşturur: hacmin iki katına çıkması basıncın yarıya düşmesi demektir.' }
      ],
      examples: [
        { task: 'Gazın $n=1\\,\\text{mol}$, sıcaklığı $T=300\\,\\text{K}$ ve hacmi $V=2\\,\\text{dm}^3$’tür. Basınç kPa cinsinden nedir?',
          steps: ['$V=2\\,\\text{dm}^3=0{,}002\\,\\text{m}^3$.', '$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}314\\cdot 300}{0{,}002}\\approx 1\\,247\\,100\\,\\text{Pa}$.', '<strong>Sonuç: $p\\approx 1247\\,\\text{kPa}$</strong>'] },
        { task: 'Sabit sıcaklıkta gazın hacmi iki katına çıkarılır. Basınç nasıl değişir?',
          steps: ['$T$ ve $n$ sabit olduğunda $p\\,V=\\text{sabit}$ geçerlidir.', '$V\\to 2V$ ise $p\\to \\frac{p}{2}$.', '<strong>Sonuç: basınç yarıya düşer</strong>'] }
      ]
    },
    'v2-prvy-zakon': {
      title: 'Termodinamiğin birinci ve ikinci yasası',
      summary: 'Isıl süreçlerde enerjinin korunumu ve doğal süreçlerin hangi yönde ilerlediği.',
      theory: [
        `<p><strong>Termodinamiğin birinci yasası</strong>, enerjinin korunumu yasasıdır: iç enerjideki değişim, verilen ısının gazın yaptığı iş kadar azaltılmış haline eşittir: $\\Delta U=Q-W$, burada $W$ gazın yaptığı iştir.</p>`,
        `<p>Gaz iş yaparsa iç enerjisi azalır, çünkü enerji çevreye çıkar. Gaz üzerinde iş yapılırsa formül $\\Delta U=Q+W_{\\text{gazda}}$ biçimine getirilmelidir. Hangi işaret kuralının kullanıldığı her zaman önemlidir.</p>`,
        `<p><strong>İkinci termodinamik yasası</strong>, ısının kendiliğinden yalnızca sıcak cisimden soğuk cisme geçtiğini ve bir ısı motorunun tüm ısıyı işe dönüştüremediğini söyler. Doğal süreçlerin yönünü entropi artışı belirler.</p>`,
        `<p><strong>Neden önemli:</strong> birinci yasa ne kadar enerjinin korunduğunu, ikinci yasa ise süreçlerin hangi yönde ilerlediğini söyler. İkinci yasa olmasaydı, ikinci türden sürekli hareket makinesi yapılabilirdi.</p>`,
        { fig: 'v1v4-prvy-zakon', caption: 'Verilen Q ısısı gazın iç enerjisini artırır, gazın yaptığı W işi ise enerjiyi götürür: ΔU = Q − W.' }
      ],
      examples: [
        { task: 'Gaza $Q=300\\,\\text{J}$ ısı verilir ve gaz $W=120\\,\\text{J}$ iş yapar. İç enerjisindeki değişim nedir?',
          steps: ['$\\Delta U=Q-W=300-120$.', '<strong>Sonuç: $\\Delta U=180\\,\\text{J}$</strong>'] },
        { task: 'Gaz sıkıştırılırken $W_{\\text{gazda}}=50\\,\\text{J}$ iş alır ve $Q=-20\\,\\text{J}$ ısı verir. İç enerjisindeki değişim nedir?',
          steps: ['$\\Delta U=Q+W_{\\text{gazda}}=-20+50$.', '<strong>Sonuç: $\\Delta U=30\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-entropia': {
      title: 'Entropi ve ısıl süreçler',
      summary: 'Geri dönüşsüzlüğün bir ölçüsü olarak entropi ve sabit sıcaklıkta tersinir bir süreçteki değişimi.',
      theory: [
        `<p><strong>Entropi</strong> $S$, bir sistemin verilen makrodurumuna karşılık gelen olası mikrodurum sayısını ölçen büyüklüktür. Sabit $T$ sıcaklıkta $Q$ ısısı tersinir olarak alındığında $\\Delta S=\\frac{Q}{T}$ kadar değişir; birimi $\\text{J/K}$’dir.</p>`,
        `<p>Düşük sıcaklıkta verilen ısı, yüksek sıcaklıkta verilen aynı ısıdan daha fazla entropi artırır. Bu yüzden formül yalnızca toplanmaz, sıcaklığa bölünür.</p>`,
        `<p><strong>Entropi biçiminde ikinci termodinamik yasası:</strong> yalıtılmış bir sistemin entropisi asla azalmaz; tersinir süreçlerde sabit kalır, geri dönüşsüz süreçlerde artar. Kendiliğinden gerçekleşen süreçler daha yüksek entropiye doğru ilerler.</p>`,
        `<p><strong>Neden böyledir:</strong> yüksek düzenli bir durumun az mikrodurumu vardır ve sistem doğal olarak daha fazla sayıda olan duruma geçer. Entropi bu yüzden sistemde ne kadar geri dönüşsüz düzensizlik oluştuğunun bir ölçüsüdür.</p>`
      ],
      examples: [
        { task: 'Gaz sabit $T=300\\,\\text{K}$ sıcaklıkta $Q=600\\,\\text{J}$ ısıyı tersinir olarak alır. Entropisindeki değişim nedir?',
          steps: ['$\\Delta S=\\frac{Q}{T}=\\frac{600}{300}$.', '<strong>Sonuç: $\\Delta S=2\\,\\text{J/K}$</strong>'] },
        { task: 'Aynı $Q=600\\,\\text{J}$ ısı $T=600\\,\\text{K}$ sıcaklıkta verilirse entropi nasıl değişir?',
          steps: ['$\\Delta S=\\frac{600}{600}=1$.', '<strong>Sonuç: $\\Delta S=1\\,\\text{J/K}$, düşük sıcaklıktakinden daha azdır</strong>'] }
      ]
    },
    'v2-tepelne-motory': {
      title: 'Isı motorları ve buzdolapları',
      summary: 'Bir ısı makinesinin verimi, Carnot çevrimi ve kaynak ile soğutucu sıcaklıklarının getirdiği sınır.',
      theory: [
        `<p><strong>Isı motoru</strong>, ısıtıcıdan ısı alır, bunun bir kısmını işe çevirir ve kalanını soğutucuya verir. Verim $\\eta=\\frac{W}{Q_h}$’dir; yani yapılan işin ısıtıcıdan alınan ısıya oranıdır.</p>`,
        `<p><strong>Carnot çevrimi</strong>, iki sıcaklık arasında mümkün olan en iyi tersinir çevrimdir. Verimi $\\eta=1-\\frac{T_c}{T_h}$’dir; burada sıcaklıklar kelvin cinsinden olmalıdır.</p>`,
        `<p><strong>Buzdolabı</strong>, tersine çalışan bir ısı motorudur: iş yaparak ısıyı soğuk bölmeden daha sıcak bir bölmeye taşır. Bu nedenle verimden değil, performans katsayısından söz edilir.</p>`,
        `<p><strong>Verim neden %100 değildir:</strong> ideal bir motor bile çevrimi kapatabilmek için ısının bir kısmını soğutucuya vermek zorundadır. Sıcaklık farkı ne kadar büyükse mümkün olan verim o kadar yüksektir.</p>`,
        { fig: 'v1v4-tepelny-motor', caption: 'Motor, ısıtıcıdan Q_h ısısını alır, bunun bir kısmını W işine çevirir ve kalanı Q_c olarak soğutucuya verir.' }
      ],
      examples: [
        { task: 'Isı motoru $T_h=500\\,\\text{K}$ sıcaklıktaki ısıtıcı ile $T_c=300\\,\\text{K}$ sıcaklıktaki soğutucu arasında çalışır. İdeal verimi nedir?',
          steps: ['$\\eta=1-\\frac{T_c}{T_h}=1-\\frac{300}{500}$.', '$\\eta=1-0{,}6=0{,}4$.', '<strong>Sonuç: $\\eta=40\\,\\%$</strong>'] },
        { task: 'Verimi $25\\,\\%$ olan bir motor ısıtıcıdan $Q_h=800\\,\\text{J}$ ısı alır. Ne kadar iş yapar?',
          steps: ['$W=\\eta\\,Q_h=0{,}25\\cdot 800$.', '<strong>Sonuç: $W=200\\,\\text{J}$</strong>'] }
      ]
    },
    'v2-kinetika-plynov': {
      title: 'Gazların kinetik teorisi',
      summary: 'Gazın moleküler görünümü: parçacıkların ortalama kinetik enerjisi mutlak sıcaklıkla orantılıdır.',
      theory: [
        `<p><strong>Gazların kinetik teorisi</strong>, basıncı ve sıcaklığı moleküllerin hareketiyle açıklar. Basınç, moleküllerin kabın duvarlarına çarpmasından doğar; sıcaklık ise onların ortalama kinetik enerjisinin bir ölçüsüdür.</p>`,
        `<p>İdeal gazda bir molekülün ortalama kinetik enerjisi $\\overline{E_k}=\\frac{3}{2}k\\,T$’dir; burada $k\\approx 1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ Boltzmann sabitidir. Yalnızca sıcaklığa bağlıdır, gazın türüne bağlı değildir.</p>`,
        `<p><strong>Neden $\\frac{3}{2}$ vardır:</strong> molekül üç yönde hareket edebilir ve her yön enerjiye $k\\,T$’nin yarısını katkı yapar. Üç serbestlik derecesi toplamda $\\frac{3}{2}k\\,T$ verir.</p>`,
        `<p><strong>Neden kelvin:</strong> formül doğrudan mutlak sıcaklıkla orantılıdır. $0\\,\\text{K}$ sıcaklıkta moleküllerin kinetik enerjisi sıfır olmalıdır; bu yüzden bu formülde santigrat derece hiçbir zaman kullanılmaz.</p>`
      ],
      examples: [
        { task: '$T=300\\,\\text{K}$ sıcaklıktaki bir gaz molekülünün ortalama kinetik enerjisi nedir? $k=1{,}38\\cdot 10^{-23}\\,\\text{J/K}$ kullan.',
          steps: ['$\\overline{E_k}=\\frac{3}{2}k\\,T=1{,}5\\cdot 1{,}38\\cdot 10^{-23}\\cdot 300$.', '$\\overline{E_k}\\approx 6{,}21\\cdot 10^{-21}\\,\\text{J}$.', '<strong>Sonuç: yaklaşık $6{,}21\\cdot 10^{-21}\\,\\text{J}$</strong>'] },
        { task: 'Gazın sıcaklığı iki katına çıkarılırsa molekülün ortalama kinetik enerjisi nasıl değişir?',
          steps: ['Enerji doğrudan $T$ ile orantılıdır.', '<strong>Sonuç: iki katına çıkar</strong>'] }
      ]
    },
    'v2-boltzmann': {
      title: 'Boltzmann dağılımı',
      summary: 'Parçacıkların verilen sıcaklıkta enerji seviyeleri arasındaki dağılımı ve seviye doluluğunun üstel olarak azalması.',
      theory: [
        `<p>Termal dengede parçacıklar enerji seviyeleri arasına, yüksek seviyelerin daha az dolu olacağı biçimde dağılır. $E_2$ ve $E_1$ seviyelerindeki parçacık sayılarının oranı, seviyelerin eşit dejenerasyonu varsayımıyla $\\frac{N_2}{N_1}=e^{-(E_2-E_1)/(k\\,T)}$’dir.</p>`,
        `<p>Üstel fonksiyon, sıcaklık düşükse seviyeler arasındaki küçük enerji farkının büyük etkisi olduğu anlamına gelir. Yüksek sıcaklıkta seviyeler birbirine yaklaşır ve doluluk düzgün dağılıma yaklaşır.</p>`,
        `<p><strong>Neden tam olarak üstel:</strong> $E$ enerjili bir durumun olasılığı, enerji her sabit miktarda arttığında katlanarak azalır. Bu da üstel bağımlılığa götürür.</p>`,
        `<p>Sonuç, sıcaklığın yalnızca ısının ölçüsü olmadığını; hangi durumların erişilebilir olduğunu belirleyen bir ölçü olduğunu gösterir. Bu dağılım, makroskopik özelliklerin tüm istatistiksel hesaplarının temelidir.</p>`,
        { fig: 'v1v4-boltzmann', caption: 'T sıcaklığında, temel seviyenin ΔE = k·T üzerindeki seviye, temel seviyeye göre yaklaşık e⁻¹ ≈ 0,37 kat dolu olur.' }
      ],
      examples: [
        { task: 'Seviye, temel seviyenin $\\Delta E=kT$ üzerindedir. $\\frac{N_2}{N_1}$ oranı nedir?',
          steps: ['$\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}=e^{-1}$.', '<strong>Sonuç: $\\frac{N_2}{N_1}\\approx 0{,}368$</strong>'] },
        { task: 'Seviye $2\\,kT$ kadar yüksektir. Doluluk oranı nedir?',
          steps: ['$\\frac{N_2}{N_1}=e^{-2}\\approx 0{,}135$.', '<strong>Sonuç: yaklaşık $0{,}135$</strong>'] }
      ]
    },
    'v2-statisticke': {
      title: 'İstatistiksel açıklama makroskopik olaylara',
      summary: 'Entropi ile mikrodurum sayısı arasındaki Boltzmann bağıntısı ve makroskopik olayların neden olasılıksal olduğu.',
      theory: [
        `<p><strong>Boltzmann bağıntısı</strong>, entropiyi verilen makrodurumla eşleşen mikrodurum sayısı $W$ ile ilişkilendirir: $S=k\\ln W$. Doğal logaritma, iki bağımsız sistem birleştirildiğinde entropinin toplanabilir olduğu anlamına gelir.</p>`,
        `<p>Her biri iki durumdan birinde bulunabilen $N$ bağımsız parçacık için mikrodurum sayısı $W=2^N$’dir. Entropi bu durumda $S=k\\,N\\ln 2$’dir ve parçacık sayısıyla orantılı olarak artar.</p>`,
        `<p><strong>Neden makroskopik olaylar olasılıksaldır:</strong> çok sayıda mikrodurumu olan makrodurumlar çok daha sık görülür. Bir mol parçacıkta olasılık farkı o kadar büyüktür ki entropinin kendiliğinden azalması pratikte hiçbir zaman gözlemlenmez.</p>`,
        `<p><strong>Neden logaritma:</strong> mikrodurum sayısı parçacık sayısıyla üstel olarak büyür; onun logaritması, makul biçimde toplanıp karşılaştırılabilen doğrusal bir büyüklük yapar.</p>`
      ],
      examples: [
        { task: 'Sistemde her biri iki durumlu $N=3$ bağımsız parçacık vardır. Kaç mikrodurumu $W$ vardır?',
          steps: ['$W=2^N=2^3$.', '<strong>Sonuç: $W=8$</strong>'] },
        { task: 'İki durumlu $N=4$ parçacık için $S/k$ değeri nedir? İki ondalık basamağa yuvarla.',
          steps: ['$W=2^4=16$, yani $\\frac{S}{k}=\\ln 16$.', '$\\ln 16=4\\ln 2\\approx 2{,}77$.', '<strong>Sonuç: $\\frac{S}{k}\\approx 2{,}77$</strong>'] }
      ]
    },
    'v3-elektricke-pole': {
      title: 'Elektrik alanı ve elektrik potansiyeli',
      summary: 'Noktasal yükün alan şiddeti ve potansiyeli, süperpozisyon ilkesi ve elektrik alanında iş.',
      theory: [
        `<p>Bir noktadaki <strong>elektrik alan şiddeti</strong>, pozitif deneme yüküne etki eden kuvvetin yükün büyüklüğüne bölünmesidir: $\\vec E=\\frac{\\vec F}{q}$, birimi $\\text{V/m}$. Alan, uzayın bir özelliğidir, deneme yükünün değil.</p>`,
        `<p>Uzaklığı $r$ olan noktasal $Q$ yükü için $E=k\\frac{Q}{r^2}$’dir; burada $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$. Alanın yönü radyaldir: pozitif yükten dışarı, negatif yüke doğrudur.</p>`,
        `<p><strong>Elektrik potansiyeli</strong>, birim yük başına enerjidir: $V=k\\frac{Q}{r}$. Bir $q$ yükünün noktalar arasında taşınmasındaki iş $W=q\\,\\Delta V$’dir ve yoldan değil, yalnızca başlangıç ve bitiş noktasından bağımlıdır.</p>`,
        `<p><strong>Süperpozisyon:</strong> birden fazla yükün alanları vektörel olarak toplanır; potansiyeller ise skaler olarak toplanır. Bu yüzden potansiyel, şiddete kıyasla hesaplaması daha kolay bir büyüklüktür.</p>`,
        { fig: 'v1v4-elektricke-pole', caption: 'Pozitif noktasal yükün alan çizgileri radyal olarak dışarı çıkar. Şiddet, uzaklığın karesiyle azalır.' }
      ],
      examples: [
        { task: 'Noktasal yük $Q=2\\,\\mu\\text{C}$, uzaklığı $r=3\\,\\text{m}$’dir. Alan şiddeti kV/m cinsinden nedir? $k\\approx 8{,}99\\cdot 10^{9}\\,\\text{N\\,m}^2/\\text{C}^2$ kullan.',
          steps: ['$E=k\\frac{Q}{r^2}=8{,}99\\cdot\\frac{2}{3^2}$.', '$E\\approx 2{,}00\\,\\text{kV/m}$', '<strong>Sonuç: yaklaşık $2{,}00\\,\\text{kV/m}$</strong>'] },
        { task: 'Noktasal yükün uzaklığı iki katına çıkarılırsa alan şiddeti nasıl değişir?',
          steps: ['Şiddet $\\frac{1}{r^2}$ ile orantılıdır.', '$\\frac{1}{(2r)^2}=\\frac{1}{4r^2}$.', '<strong>Sonuç: dörtte bire düşer</strong>'] }
      ]
    },
    'v3-gauss': {
      title: 'Gauss yasası',
      summary: 'Kapalı bir yüzeyden geçen elektrik akısı ve bunun yüzey içindeki yükle ilişkisi.',
      theory: [
        `<p><strong>Bir $S$ yüzeyinden elektrik akısı</strong> $\\Phi_E=\\oint \\vec E\\cdot d\\vec S$’dir; yani alanın yüzeye dik bileşenlerinin toplamıdır. Birimi $\\text{N\\,m}^2/\\text{C}$’dir.</p>`,
        `<p><strong>Gauss yasası</strong>, kapalı bir yüzeyden geçen akının yüzey içindeki yükle orantılı olduğunu söyler: $\\oint \\vec E\\cdot d\\vec S=\\frac{Q_{\\text{içeride}}}{\\varepsilon_0}$; burada $\\varepsilon_0\\approx 8{,}854\\cdot 10^{-12}\\,\\text{F/m}$.</p>`,
        `<p><strong>Neden geçerlidir:</strong> alan çizgileri pozitif yüklerden çıkar ve negatif yüklere girer. Kapalı bir yüzeyden geçen akı, yüzey içindeki yük kadar alan çizgisini yakalar; yüzeyin şekli fark etmez.</p>`,
        `<p>Gauss yasası simetrik problemlerde, örneğin küre veya sonsuz düzlemsel yük dağılımında kullanışlıdır. Uygun seçilmiş bir yüzeyde alan integralin dışına çekilebilir ve hesap basit olur.</p>`,
        { fig: 'v1v4-gauss', caption: 'Kapalı yüzeyden geçen toplam akı yalnızca yüzey içindeki yüke bağlıdır, Φ = Q/ε₀; yüzeyin şekli fark etmez.' }
      ],
      examples: [
        { task: 'Kapalı bir yüzeyden $Q=1\\,\\mu\\text{C}$ yük geçmektedir. $\\varepsilon_0=8{,}854\\cdot 10^{-12}\\,\\text{F/m}$ ise yüzeyden geçen toplam akı nedir?',
          steps: ['$\\Phi_E=\\frac{Q}{\\varepsilon_0}=\\frac{10^{-6}}{8{,}854\\cdot 10^{-12}}$.', '$\\Phi_E\\approx 1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$', '<strong>Sonuç: yaklaşık $1{,}13\\cdot 10^{5}\\,\\text{N\\,m}^2/\\text{C}$</strong>'] },
        { task: 'Yüzey içindeki yük iki katına çıkarılır. Akı nasıl değişir?',
          steps: ['Akı yükle doğrudan orantılıdır.', '<strong>Sonuç: iki katına çıkar</strong>'] }
      ]
    },
    'v3-elektricky-prud': {
      title: 'Elektrik akımı ve elektrik devreleri',
      summary: 'Ohm yasası, seri ve paralel dirençler ve kaynaktan çekilen toplam akım.',
      theory: [
        `<p><strong>Elektrik akımı</strong>, birim zamanda bir kesitten geçen yük miktarıdır: $I=\\frac{\\Delta Q}{\\Delta t}$, birimi amperdir. Akımın yönü, pozitif yüklerin hareket yönü olarak kabul edilir.</p>`,
        `<p><strong>Ohm yasası</strong>: iletkendeki gerilim akımla orantılıdır, $U=R\\,I$; burada $R$ ohm cinsinden dirençtir. Seri bağlantıda dirençler toplanır, $R=R_1+R_2$.</p>`,
        `<p><strong>Paralel bağlantıda</strong> her iki kolda gerilim aynıdır ve akımlar toplanır. Eşdeğer direnç, dirençlerin en küçüğünden daha küçüktür: $\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}$.</p>`,
        `<p><strong>Paralelde direnç neden daha küçüktür:</strong> ikinci kol akıma yeni bir yol açar, bu yüzden aynı gerilimde toplamda daha büyük akım geçer. Kaynak, tek bir kolla vereceğinden daha büyük akım verir.</p>`,
        { fig: 'v1v4-paralelne', caption: 'Paralel bağlantıda her iki kolda gerilim aynıdır ve toplam akım I, kolların akımlarının toplamıdır.' }
      ],
      examples: [
        { task: '$R_1=6\\,\\Omega$ ve $R_2=3\\,\\Omega$ dirençleri $U=6\\,\\text{V}$ gerilime paralel bağlıdır. Kaynağın verdiği toplam akım nedir?',
          steps: ['$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$, yani $R=2\\,\\Omega$.', '$I=\\frac{U}{R}=\\frac{6}{2}$.', '<strong>Sonuç: $I=3\\,\\text{A}$</strong>'] },
        { task: '$4\\,\\Omega$ ve $6\\,\\Omega$ dirençler $10\\,\\text{V}$ gerilime seri bağlıdır. Akım ne kadardır?',
          steps: ['$R=4+6=10\\,\\Omega$.', '$I=\\frac{10}{10}$.', '<strong>Sonuç: $I=1\\,\\text{A}$</strong>'] }
      ]
    },
    'v3-magneticke-pole': {
      title: 'Manyetik alan ve manyetik kuvvet',
      summary: 'Hareket eden yüke ve manyetik alandaki akım taşıyan iletkene etki eden Lorentz kuvveti.',
      theory: [
        `<p><strong>Manyetik indüksiyon</strong> $\\vec B$, manyetik alanı tanımlar; birimi tesla’dır, $1\\,\\text{T}=1\\,\\text{N/(A\\,m)}$. Alan yalnızca hareket eden yüklere kuvvet uygular; durgun yük manyetik kuvvete tepki vermez.</p>`,
        `<p><strong>Lorentz kuvveti</strong>, $\\vec v$ hızıyla hareket eden $q$ yüküne etki eder: $\\vec F=q\\,\\vec v\\times\\vec B$. Büyüklüğü $F=q\\,v\\,B\\sin\\alpha$’dır; burada $\\alpha$, $\\vec v$ ile $\\vec B$ arasındaki açıdır.</p>`,
        `<p><strong>Kuvvetin yönü</strong> sağ el kuralıyla belirlenir: parmaklar hız yönünü, avuç alan yönünü, başparmak pozitif yük için kuvvet yönünü gösterir. Negatif yükte kuvvet tersine döner.</p>`,
        `<p><strong>Neden kuvvet hıza diktir:</strong> manyetik kuvvet iş yapmaz, yalnızca hareketin yönünü değiştirir. Parçacık dik bir alanda bu yüzden çember çizer, hızlanmaz. Manyetik alanlar bu nedenle parçacık yörüngelerini eğmek için kullanılır.</p>`,
        { fig: 'v1v4-lorentz', caption: 'Dik olarak alana giren pozitif yüke etkiyen Lorentz kuvveti hem hıza hem alana diktir. Hareketin yönünü değiştirir, hızını değil.' }
      ],
      examples: [
        { task: 'Elektron, $B=0{,}2\\,\\text{T}$ indüksiyonlu alana dik olarak $v=10^{5}\\,\\text{m/s}$ hızla girer. $q=1{,}6\\cdot 10^{-19}\\,\\text{C}$ ise kuvvetin büyüklüğü nedir?',
          steps: ['$\\alpha=90^\\circ$, yani $\\sin\\alpha=1$.', '$F=qvB=1{,}6\\cdot 10^{-19}\\cdot 10^{5}\\cdot 0{,}2$.', '<strong>Sonuç: $F=3{,}2\\cdot 10^{-15}\\,\\text{N}$</strong>'] },
        { task: '$q=2\\,\\mu\\text{C}$ yüklü bir parçacık $v=300\\,\\text{m/s}$ hızla $B=0{,}5\\,\\text{T}$ alana dik girer. Kuvvet mikronewton cinsinden nedir?',
          steps: ['$F=qvB=2\\cdot 300\\cdot 0{,}5$, birimi $\\mu\\text{N}$.', '<strong>Sonuç: $F=300\\,\\mu\\text{N}$</strong>'] }
      ]
    },
    'v3-indukcia': {
      title: 'Elektromanyetik indüksiyon',
      summary: 'Faraday yasası: bir halkanın yüzeyinden geçen manyetik akının değişmesiyle gerilim oluşur.',
      theory: [
        `<p><strong>Bir $S$ yüzeyinden manyetik akı</strong> $\\Phi=B\\,S\\cos\\alpha$’dır; burada $\\alpha$, alan ile yüzeyin normali arasındaki açıdır. Birimi weber’dir, $1\\,\\text{Wb}=1\\,\\text{T\\,m}^2$.</p>`,
        `<p><strong>Faraday indüksiyon yasası</strong>: kapalı bir halkada, akının değişim hızıyla orantılı bir gerilim oluşur, $U_i=-\\frac{\\Delta\\Phi}{\\Delta t}$. Eksi işareti Lenz kuralını gösterir: indüklenen akım, akı değişimine karşı koyar.</p>`,
        `<p><strong>Gerilim nasıl oluşur:</strong> indüksiyonun değişmesiyle, yüzeyin değişmesiyle veya halkanın alanda döndürülmesiyle. Akı sabitse, alan çok güçlü olsa bile gerilim oluşmaz.</p>`,
        `<p><strong>Neden zamana bölünür:</strong> gerilim, akının ne kadar hızlı değiştiğine bağlıdır, büyüklüğüne değil. Aynı toplam akı değişiminde hızlı değişim yavaş olandan daha büyük gerilim verir.</p>`,
        { fig: 'v1v4-tok-indukcia', caption: 'Bir yüzeyden geçen manyetik akı Φ = B·S·cos α, burada α, B alanı ile yüzeyin normali n arasındaki açıdır.' }
      ],
      examples: [
        { task: 'Halkanın yüzeyi $S=0{,}5\\,\\text{m}^2$, alana diktir ve alan $2\\,\\text{s}$ içinde $\\Delta B=4\\,\\text{T}$ değişir. İndüklenen gerilim nedir?',
          steps: ['$U_i=\\frac{\\Delta\\Phi}{\\Delta t}=\\frac{S\\,\\Delta B}{\\Delta t}=\\frac{0{,}5\\cdot 4}{2}$.', '<strong>Sonuç: $U_i=1\\,\\text{V}$</strong>'] },
        { task: 'Halkadan geçen akı sabittir. İndüklenen gerilim nedir?',
          steps: ['Gerilim akı değişimiyle orantılıdır, $\\Delta\\Phi=0$.', '<strong>Sonuç: $U_i=0\\,\\text{V}$</strong>'] }
      ]
    },
    'v3-maxwell': {
      title: 'Maxwell denklemleri',
      summary: 'Elektrik ve manyetik alanı birbirine bağlayan dört denklem ve bunların akım taşıyan iletken için kullanımı.',
      theory: [
        `<p><strong>Maxwell denklemleri</strong>, integral biçiminde dört tanedir: elektrik alan için Gauss yasası, manyetik alan için Gauss yasası (manyetik yük yoktur), Faraday indüksiyon yasası ve Ampère-Maxwell yasası. Birlikte tüm klasik elektromanyetik olayları tanımlar.</p>`,
        `<p><strong>Ampère-Maxwell yasası</strong>, kapalı bir eğri boyunca manyetik alanın dolaşımının, içinden geçen akıma ve elektrik akısındaki değişime orantılı olduğunu söyler: $\\oint \\vec B\\cdot d\\vec l=\\mu_0 I+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}$. Kararlı olaylarda yalnızca akım terimi kalır.</p>`,
        `<p>Akım taşıyan uzun doğru bir iletkenden $r$ uzaklıkta, Ampère yasasından $B=\\frac{\\mu_0 I}{2\\pi r}$ çıkar; burada $\\mu_0=4\\pi\\cdot 10^{-7}\\,\\text{T\\,m/A}$.</p>`,
        `<p><strong>Yer değiştirme akımı neden önemli:</strong> elektrik akısındaki değişim terimi olmasaydı yasa yük korunumuyla uyumlu olmazdı. Maxwell bu terimi ekledi ve denklemlerden elektromanyetik dalgaların varlığı çıktı.</p>`,
        { fig: 'v1v4-ampere', caption: 'Doğru akım taşıyan bir telin etrafında manyetik indüksiyon çizgileri çemberlerdir. İndüksiyon B, r uzaklıkla azalır.' }
      ],
      examples: [
        { task: 'Doğru bir iletkenden $I=10\\,\\text{A}$ akım geçiyor. $r=0{,}2\\,\\text{m}$ uzaklıkta manyetik indüksiyon nedir? Sonucu mikrotesla cinsinden ver.',
          steps: ['$B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{4\\pi\\cdot 10^{-7}\\cdot 10}{2\\pi\\cdot 0{,}2}$.', '$B=\\frac{2\\cdot 10^{-7}\\cdot 10}{0{,}2}=10^{-5}\\,\\text{T}$.', '<strong>Sonuç: $B=10\\,\\mu\\text{T}$</strong>'] },
        { task: 'Akım taşıyan iletkenden uzaklık iki katına çıkarılırsa indüksiyon nasıl değişir?',
          steps: ['$B$, $\\frac{1}{r}$ ile orantılıdır.', '<strong>Sonuç: yarıya düşer</strong>'] }
      ]
    },
    'v3-em-vlny': {
      title: 'Elektromanyetik dalgalar',
      summary: 'Yayılma yönüne dik, değişen elektrik ve manyetik alan olarak dalga; ışık hızı c ile yayılır.',
      theory: [
        `<p>Elektrik alandaki değişim bir manyetik alan, manyetik alandaki değişim de bir elektrik alan oluşturur. Bu karşılıklı etkileşim uzayda <strong>elektromanyetik dalga</strong> olarak yayılır. Vakumda hızı $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$’dir.</p>`,
        `<p>Dalganın frekansı $f$ ve dalga boyu $\\lambda$’dır. $c=\\lambda\\,f$ bağıntısı geçerlidir, buradan $\\lambda=\\frac{c}{f}$ çıkar. Frekans ne kadar yüksekse dalga boyu o kadar kısadır.</p>`,
        `<p>Dalgadaki elektrik ve manyetik alan birbirine diktir ve ikisi de yayılma yönüne diktir. Bu nedenle elektromanyetik dalga <em>enine</em> bir dalgadır.</p>`,
        `<p><strong>Neden önemli:</strong> radyo, ışık ve X ışınları aynı doğadadır. Yalnızca frekanslarında, dolayısıyla dalga boylarında farklılık gösterirler ve kullanım alanları da buna bağlı olarak değişir.</p>`,
        { fig: 'v1v4-em-vlna', caption: 'Dalganın elektrik ve manyetik bileşenleri fazda salınır, birbirine diktir ve ikisi de yayılma yönü c’ye diktir.' }
      ],
      examples: [
        { task: 'Verici $f=100\\,\\text{MHz}$ frekansta çalışır. Dalga boyu havada nedir?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{100\\cdot 10^{6}}$.', '<strong>Sonuç: $\\lambda=3\\,\\text{m}$</strong>'] },
        { task: 'Dalga boyu $\\lambda=0{,}5\\,\\text{m}$’dir. Dalganın frekansı nedir?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{0{,}5}$.', '<strong>Sonuç: $f=6\\cdot 10^{8}\\,\\text{Hz}=600\\,\\text{MHz}$</strong>'] }
      ]
    },
    'v3-sirenie': {
      title: 'Elektromanyetik ışımanın yayılması',
      summary: 'Işığın maddedeki hızı, kırılma indisi ve ortamın geçirgenlik ile manyetik geçirgenliğinin etkisi.',
      theory: [
        `<p>Vakumda elektromanyetik ışıma $c$ hızıyla yayılır; maddede hızı daha küçüktür. <strong>Kırılma indisi</strong> $n=\\frac{c}{v}$, maddedeki hızın kaç kat küçük olduğunu söyler.</p>`,
        `<p>Bağıl elektrik geçirgenliği $\\varepsilon_r$ ve bağıl manyetik geçirgenliği $\\mu_r=1$ olan manyetik olmayan bir ortam için $n=\\sqrt{\\varepsilon_r\\,\\mu_r}=\\sqrt{\\varepsilon_r}$’dir. Geçirgenliği büyük bir dielektrik dalgayı yavaşlatır.</p>`,
        `<p><strong>Dalga neden yavaşlar:</strong> dalganın elektrik alanı maddenin atomlarını polarize eder, atomların salınımları gecikir ve sonuçta dalga daha yavaş yayılır. Frekans maddeye girerken değişmez; değişen hız ve dalga boyudur.</p>`,
        `<p>Bu olgu, iki ortam arasındaki sınırda ışığın kırılmasını, ayrıca mercekler ve optik fiberlerin ilkesini açıklar.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Maddeye girerken dalganın hızı küçülür, dolayısıyla dalga boyu kısalır. Frekans aynı kalır.' }
      ],
      examples: [
        { task: 'Ortamın bağıl elektrik geçirgenliği $\\varepsilon_r=4$’tür. Kırılma indisi nedir?',
          steps: ['$n=\\sqrt{\\varepsilon_r}=\\sqrt{4}$.', '<strong>Sonuç: $n=2$</strong>'] },
        { task: 'Kırılma indisi $n=2$ olan ortamda ışığın hızı nedir? $c=3\\cdot 10^{8}\\,\\text{m/s}$ ise.',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{2}$.', '<strong>Sonuç: $v=1{,}5\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-vlnenie': {
      title: 'Mekanik ve elektromanyetik dalga hareketi',
      summary: 'Dalga hareketinde neyin taşındığı; mekanik dalgaların neden madde gerektirdiği, elektromanyetik dalgaların ise gerektirmediği.',
      theory: [
        `<p>Dalga hareketi, salınımların uzayda yayılmasıdır. Bu sırada madde yer değiştirmez; <strong>enerji</strong> ve <strong>bilgi</strong> taşınır. Neyin salındığına göre dalgalar <strong>mekanik</strong> (maddenin salındığı, örneğin ses, su dalgaları, sismik dalgalar) ve <strong>elektromanyetik</strong> (elektrik ve manyetik alanın salındığı, örneğin ışık, radyo dalgaları, X ışınları) olarak ayrılır.</p>`,
        `<p>Mekanik dalga hareketi bir <strong>maddesel ortam</strong> gerektirir, çünkü her parçacık komşusunu salındırır. Bu nedenle ses boşlukta yayılmaz. Elektromanyetik dalga hareketi boşlukta da yayılır, çünkü alan salınımlarının onları aktaracak bir parçacığa ihtiyacı yoktur.</p>`,
        `<p>Salınımların yönüne göre dalgalar <strong>enine</strong> (salınımlar yayılma yönüne diktir, örneğin gergin telde dalga ve ışık) ve <strong>boyuna</strong> (salınımlar yayılma yönündedir, örneğin gazlarda ses) olarak ayrılır. Havada sesin hızı yaklaşık $340\\,\\text{m/s}$, boşlukta ışığın hızı ise $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$’dir.</p>`,
        { fig: 'obr-vlna', caption: 'Enine dalga: dalga boyu λ, aynı fazda olan iki komşu noktanın arasındaki uzaklıktır.' }
      ],
      examples: [
        { task: 'Güneş ışığı, boş uzay boşluğundan Dünya’ya ulaşır. Bu, mekanik mi, elektromanyetik dalga hareketi mi?',
          steps: ['Güneş ile Dünya arasında madde yoktur, yani dalga boşlukta yayılır.', '<strong>Sonuç: elektromanyetik dalga hareketidir.</strong>'] },
        { task: 'Uzayda iki gemi arasında ses neden duyulmaz?',
          steps: ['Ses mekanik bir dalga hareketidir, maddesel bir ortam gerektirir.', 'Boşlukta parçacık olmadığı için salınımlar aktarılamaz.', '<strong>Sonuç: ses boşlukta yayılmaz.</strong>'] }
      ]
    },
    'v4-frekvencia': {
      title: 'Frekans, dalga boyu ve genlik',
      summary: 'Dalgayı tanımlayan büyüklükler ve bunlar arasındaki v = λ·f bağıntısı.',
      theory: [
        `<p>Bir dalga üç temel büyüklükle tanımlanır: <strong>genlik</strong> $A$ (denge konumundan en büyük sapma), <strong>frekans</strong> $f$ (saniyedeki salınım sayısı, birimi $\\text{Hz}$) ve <strong>dalga boyu</strong> $\\lambda$ (aynı fazda salınan en yakın iki nokta arasındaki uzaklık).</p>`,
        `<p>Periyot $T=\\frac{1}{f}$, bir salınımın süresidir. Genlik dalganın <em>gücüyle</em> ilgilidir (örneğin sesin şiddeti veya ışığın parlaklığı), frekans ise sesin tizliğini veya ışığın rengini belirler.</p>`,
        `<p>Dalganın yayılma hızı $v=\\lambda\\cdot f$’dir. Başka bir ortama geçildiğinde hız ve dalga boyu değişir, ancak <strong>frekans değişmez</strong>: onu ortam değil, salınım kaynağı belirler.</p>`,
        { fig: 'v1v4-prechod-prostredie', caption: 'Maddeye girerken dalganın hızı küçülür, dolayısıyla dalga boyu kısalır. Frekans aynı kalır.' }
      ],
      examples: [
        { task: 'Dalganın frekansı $f=50\\,\\text{Hz}$, dalga boyu $\\lambda=6\\,\\text{m}$’dir. Hızı nedir?',
          steps: ['$v=\\lambda\\cdot f=6\\cdot 50$.', '<strong>Sonuç: $v=300\\,\\text{m/s}$</strong>'] },
        { task: 'Frekansı $f=4\\,\\text{Hz}$ olan dalganın periyodu nedir?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{4}$.', '<strong>Sonuç: $T=0{,}25\\,\\text{s}$</strong>'] }
      ]
    },
    'v4-interferencia': {
      title: 'Girişim ve kırınım',
      summary: 'Dalgaların bileşimi: dalgalar ne zaman güçlenir, ne zaman zayıflar ve engellerin arkasında dalgalar neden bükülür.',
      theory: [
        `<p><strong>Süperpozisyon ilkesi:</strong> noktadaki sonuç salınım, oraya gelen tüm dalgaların salınımlarının toplamıdır. Dalgalar uyumlu (koherent) salınıyorsa sonucu <strong>yol farkı</strong> $\\Delta d$ belirler.</p>`,
        `<p><strong>Güçlenme</strong>, yol farkı dalga boyunun tam katıysa gerçekleşir: $\\Delta d=m\\,\\lambda$. <strong>Zayıflama</strong>, yol farkı yarım dalga boyunun tek katıysa gerçekleşir: $\\Delta d=\\left(m+\\tfrac{1}{2}\\right)\\lambda$.</p>`,
        `<p><strong>Kırınım</strong>, dalganın bir engelin etrafından veya dar bir yarıktan bükülmesidir. Engelin boyutu dalga boyuyla karşılaştırılabilir olduğunda daha belirgindir. Bu yüzden ses bir köşenin arkasına kolayca dolanır, ışık ise keskin bir gölge oluşturur.</p>`,
        { fig: 'v1v4-interferencia', caption: 'Uyumlu dalgalar m·λ yol farkında güçlenir, zıt fazda (m + ½)·λ yol farkında zayıflar.' }
      ],
      examples: [
        { task: 'Dalga boyu $\\lambda=0{,}5\\,\\text{m}$ olan iki uyumlu dalga bir noktada $\\Delta d=1{,}25\\,\\text{m}$ yol farkına sahiptir. Güçlenme mi, zayıflama mı?',
          steps: ['$\\frac{\\Delta d}{\\lambda}=\\frac{1{,}25}{0{,}5}=2{,}5$.', '$2{,}5$ sayısı yarım dalga boyunun tek katıdır: $2{,}5=\\left(2+\\tfrac{1}{2}\\right)$.', '<strong>Sonuç: zayıflama.</strong>'] }
      ]
    },
    'v4-polarizacia': {
      title: 'Işığın kutuplanması',
      summary: 'Işığın enine olması, kutuplayıcı ve analizör arkasında şiddet için Malus yasası.',
      theory: [
        `<p>Işık enine bir dalgadır: elektrik alanı yayılma yönüne diktir. <strong>Kutuplanmış</strong> ışıkta salınımlar tek bir düzlemdedir. Sıradan bir kaynak (ampul, Güneş) kutuplanmamış ışık yayar; burada salınım düzlemi rastgele değişir.</p>`,
        `<p>Kutuplayıcı, yalnızca kendi doğrultusundaki salınım bileşenini geçirir. <strong>Kutuplanmamış</strong> ışık ilk kutuplayıcıdan geçtiğinde şiddeti yarıya düşer.</p>`,
        `<p><strong>Malus yasası:</strong> şiddeti $I_0$ olan doğrusal kutuplanmış ışık, $\\varphi$ açısıyla döndürülmüş bir analizöre düşerse, arkasındaki şiddet $I=I_0\\cos^2\\varphi$’dir. Kosinüs karesi alınır, çünkü analizör yalnızca alanın eksen yönündeki bileşenini geçirir ve şiddet genliğin karesiyle orantılıdır.</p>`,
        { fig: 'v1v4-polarizacia', caption: 'Analizör yalnızca kendi doğrultusundaki salınım bileşenini, E·cos φ, geçirir. Şiddet cos²φ ile orantılıdır.' }
      ],
      examples: [
        { task: 'Şiddeti $I_0=80$ olan doğrusal kutuplanmış ışık, $60^\\circ$ döndürülmüş bir analizörden geçer. Arkasındaki şiddeti nedir?',
          steps: ['$\\cos^2 60^\\circ=\\left(\\tfrac{1}{2}\\right)^2=0{,}25$.', '$I=80\\cdot 0{,}25=20$.', '<strong>Sonuç: $I=20$</strong>'] }
      ]
    },
    'v4-geometricka-optika': {
      title: 'Geometrik ve dalga optiği',
      summary: 'Kırılma indisi, ışığın maddelerdeki hızı ve Snell kırılma yasası.',
      theory: [
        `<p><strong>Geometrik optik</strong>, ışığı doğrusal yayılan, yansıma yasasına ($\\alpha=\\alpha'$) göre yansıyan ve ortamlar arasındaki sınırda kırılan ışınlar olarak tanımlar. Dalga optiği, ışınların açıklayamadığı olguları, örneğin girişim ve kırınımı açıklar.</p>`,
        `<p><strong>Kırılma indisi</strong> $n=\\frac{c}{v}$, ışığın maddede boşluktakinden kaç kat yavaş olduğunu gösterir. Suda $n\\approx 1{,}33$, camda yaklaşık $1{,}5$’tir. Işığın maddedeki hızı $v=\\frac{c}{n}$’dir.</p>`,
        `<p><strong>Snell yasası</strong> $n_1\\sin\\alpha=n_2\\sin\\beta$, ışının nasıl kırıldığını söyler. Optik olarak daha yoğun bir ortama ($n_2>n_1$) geçişte ışın normale doğru kırılır; daha seyrek bir ortama geçişte ise normalden uzaklaşır.</p>`,
        { fig: 'v1v4-lom', caption: 'Optik olarak daha yoğun bir ortama geçerken ışın normale doğru kırılır, bu nedenle β, α’dan küçüktür (n₂ > n₁).' }
      ],
      examples: [
        { task: 'Kırılma indisi $n=1{,}5$ olan camda ışığın hızı nedir? $c=3\\cdot 10^{8}\\,\\text{m/s}$ kullan.',
          steps: ['$v=\\frac{c}{n}=\\frac{3\\cdot 10^{8}}{1{,}5}$.', '<strong>Sonuç: $v=2\\cdot 10^{8}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v4-zobrazovanie': {
      title: 'Mercekler ve aynalarla görüntü oluşturma',
      summary: 'Yakınsak mercek için görüntüleme denklemi ve görüntünün konumunun belirlenmesi.',
      theory: [
        `<p>Yakınsak mercek, paralel ışınları $f$ uzaklıktaki <strong>odak noktasında</strong> toplar. Mercekten $a$ uzaklıktaki bir cisim, mercekten $b$ uzaklıkta bir görüntü oluşturur.</p>`,
        `<p><strong>Görüntüleme denklemi</strong> ince mercekler ve aynalar için geçerlidir: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$. Üç büyüklük arasındaki bir ilişkidir; ikisi biliniyorsa üçüncüsü hesaplanır.</p>`,
        `<p>$a>f$ ise görüntü gerçek ve terstir. Dikkat: uzaklıkların kendisini değil, terslerini topluyoruz. $b=a+f$ bağıntısı geçerli değildir.</p>`,
        { fig: 'v1v4-zobrazenie', caption: 'İki kat odak uzaklığındaki bir cisim, 2f uzaklıkta gerçek, ters ve aynı büyüklükte bir görüntü oluşturur.' }
      ],
      examples: [
        { task: 'Cisim, odak uzaklığı $f=15\\,\\text{cm}$ olan yakınsak merceğin $a=30\\,\\text{cm}$ önündedir. Görüntü nerede oluşur?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{15}-\\frac{1}{30}=\\frac{1}{30}$.', '<strong>Sonuç: $b=30\\,\\text{cm}$</strong>'] }
      ]
    },
    'v4-lasery': {
      title: 'Lazerler ve optik aletler',
      summary: 'Lazer ışığının özellikleri, frekans hesabı ve büyüteç büyütmesi.',
      theory: [
        `<p><strong>Lazer</strong> (uyarılmış ışıma yoluyla ışığın güçlendirilmesi), sıradan kaynağın sahip olmadığı özelliklere sahip ışık üretir: <strong>tek renklidir</strong> (tek dalga boyu), <strong>uyumludur</strong> (salınımlar aynı fazda) ve <strong>dar bir demet</strong> oluşturur. Bu yüzden küçük bir noktaya odaklanabilir.</p>`,
        `<p>Her ışık için $c=\\lambda\\cdot f$ geçerlidir, yani frekans $f=\\frac{c}{\\lambda}$’dir. Optikte dalga boyu genellikle nanometre cinsinden verilir: $1\\,\\text{nm}=10^{-9}\\,\\text{m}$.</p>`,
        `<p><strong>Optik aletler</strong> büyütme için mercekler kullanır. Odak uzaklığı $f$ olan büyüteç, rahat gözlemde $Z=\\frac{d}{f}$ büyütme verir; burada $d\\approx 250\\,\\text{mm}$ görme uzaklığıdır. Kısa odak uzaklığı daha büyük büyütme demektir.</p>`
      ],
      examples: [
        { task: 'Kırmızı lazer ışığının dalga boyu $\\lambda=650\\,\\text{nm}$’dir. Frekansı $10^{14}\\,\\text{Hz}$ birimiyle nedir?',
          steps: ['$f=\\frac{c}{\\lambda}=\\frac{3\\cdot 10^{8}}{650\\cdot 10^{-9}}\\approx 4{,}6\\cdot 10^{14}\\,\\text{Hz}$.', '<strong>Sonuç: yaklaşık $4{,}6\\cdot 10^{14}\\,\\text{Hz}$</strong>'] }
      ]
    },
    'v4-vlakna': {
      title: 'Optik fiberlerin temelleri',
      summary: 'Çekirdek ile kılıf arasındaki sınırda tam yansıma ve kritik açı.',
      theory: [
        `<p>Optik fiber, $n_1$ kırılma indisli ince bir çekirdeğin içinde ışığı iletir; çekirdek, daha düşük $n_2&lt;n_1$ indisli bir kılıfla çevrilidir. Işık çekirdekte <strong>tam yansımayla</strong> tutulur, kırılmayla değil; bu yüzden neredeyse hiç kaybolmaz.</p>`,
        `<p>Tam yansıma, geliş açısı <strong>kritik açı</strong> $\\alpha_c$’yi aştığında gerçekleşir; bunun için $\\sin\\alpha_c=\\frac{n_2}{n_1}$ geçerlidir. İndisler arasındaki fark büyüdükçe kritik açı küçülür ve fiber daha fazla ışığı tutar.</p>`,
        `<p>Sinyal ışık darbeleriyle iletilir. Optik fiberler internette ve telekomünikasyonda kullanılır, çünkü ışık büyük miktarda bilgiyi uzun mesafelere taşır ve elektromanyetik alan tarafından bozulmaz.</p>`,
        { fig: 'v1v4-vlakno', caption: 'Işık çekirdekte tam yansımayla tutulur; çünkü kritik açı olan sin α_c = n₂/n₁ değerinden büyük açıyla gelir.' }
      ],
      examples: [
        { task: 'Fiberin çekirdeğinin $n_1=1{,}5$, kılıfının $n_2=1{,}0$ indisi vardır. Kritik açının sinüsü nedir?',
          steps: ['$\\sin\\alpha_c=\\frac{n_2}{n_1}=\\frac{1{,}0}{1{,}5}$.', '<strong>Sonuç: $\\sin\\alpha_c\\approx 0{,}67$</strong>'] }
      ]
    }
  }
});
