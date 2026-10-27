/* Turkish: lessons of grades 1–4 of secondary school (js/rocniky/s1.js, s2.js, s3.js, s4.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('tr', {
  lessons: {
    's1-veliciny': {
      title: 'Fiziksel büyüklükler, birimler ve ölçme',
      summary: 'Sayı ve birim, SI birim sistemi, önekler ve birim dönüşümleri.',
      theory: [
        `<p>Fiziksel büyüklük, bir cismin ya da olayın <strong>ölçülebilen</strong> ve bir sayı ile birimle ifade edilebilen özelliğidir. Örneğin uzunluk $s = 12\\,\\text{m}$: $12$ sayısı birimi kaç kez kullandığımızı, $\\text{m}$ ise hangi birimi kullandığımızı gösterir. Birimsiz bir değerin bir anlamı yoktur.</p>`,
        `<p>Uluslararası Birimler Sistemi (SI) yedi temel birime sahiptir. Bu sınıf için şunlar yeterlidir: metre $\\text{m}$ (uzunluk), kilogram $\\text{kg}$ (kütle), saniye $\\text{s}$ (zaman) ve kelvin $\\text{K}$ (sıcaklık). Türetilmiş birimler temel birimlerin birleşiminden oluşur: hızın birimi $\\text{m/s}$, kuvvetin birimi ise $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$'dir.</p>`,
        `<p><strong>Önekler</strong>, çok büyük ve çok küçük sayıların yazımını kısaltır. Örneğin $1\\,\\text{km}=10^3\\,\\text{m}$, $1\\,\\text{cm}=10^{-2}\\,\\text{m}$ ve $1\\,\\text{g}=10^{-3}\\,\\text{kg}$ geçerlidir. Dönüştürürken yeni birimin kaç kat büyük ya da küçük olduğunu bilmek yeterlidir; buna göre çarpar ya da bölersiniz.</p>`,
        `<p>Her ölçümün bir <strong>hatası</strong> vardır, bu yüzden sonucu uygun sayıda anlamlı rakamla yazar ve birimi her zaman belirtiriz. $s = 12{,}0\\,\\text{m}$ yazımı, $s = 12\\,\\text{m}$ yazımından daha fazla şey söyler, çünkü metrenin onda birine kadar bir kesinlik ima eder.</p>`
      ],
      examples: [
        { task: 'Şunu metreye çevir: $3{,}5\\,\\text{km}$.',
          steps: ['Önek k bin anlamına gelir, yani $1\\,\\text{km}=10^3\\,\\text{m}$.', '$3{,}5\\cdot 10^3\\,\\text{m}=3500\\,\\text{m}$.', '<strong>Sonuç: 3500 m</strong>'] },
        { task: 'Bir $2\\,\\text{h}$ kaç saniyedir?',
          steps: ['Bir saatte $60\\,\\text{min}$, bir dakikada $60\\,\\text{s}$ vardır.', 'Bir saat bu nedenle $60\\cdot 60=3600\\,\\text{s}$ eder.', '$2\\,\\text{h}=2\\cdot 3600\\,\\text{s}=7200\\,\\text{s}$.', '<strong>Sonuç: 7200 s</strong>'] }
      ]
    },
    's1-pohyb': {
      title: 'Düzgün ve düzgün olmayan hareket',
      summary: 'Yol, zaman ve hız; hareket değiştiğinde ortalama hız.',
      theory: [
        `<p>Bir cismin hareketini bir <strong>referans cisme</strong> göre tanımlarız. Yol $s$, cismin aldığı güzergâhın uzunluğudur; zaman $t$ ise hareketin süresidir. <strong>Ortalama hız</strong>, yolun zamana oranıdır: $\\bar v=\\frac{s}{t}$, birimi $\\text{m/s}$ veya $\\text{km/h}$.</p>`,
        `<p><strong>Düzgün hareket</strong>, hızı sabit olan harekettir. Eşit sürelerde cisim eşit yollar alır, bu nedenle $s=v\\,t$ geçerlidir. Yol-zaman grafiğinde bu bir doğrudur.</p>`,
        `<p><strong>Düzgün olmayan hareket</strong>, hızın değiştiği anlamına gelir. Bütün yolculuğun ortalama hızı, hızların aritmetik ortalaması değil, toplam yolun toplam zamana bölümüdür: $\\bar v=\\frac{s_1+s_2}{t_1+t_2}$.</p>`,
        `<p><strong>Neden böyledir?</strong> $60\\,\\text{km/h}$ hızla 2 saat, sonra $30\\,\\text{km/h}$ hızla 1 saat gidersek, 3 saatte $120+30=150\\,\\text{km}$ yol alırız. Hızların ortalaması $45\\,\\text{km/h}$ verirdi, ama gerçek ortalama hız $50\\,\\text{km/h}$'dir, çünkü daha uzun süre daha hızlı gittik.</p>`,
        { fig: "s1s4-priemerna-rychlost", caption: "v–t grafiğinin altındaki alan yoldur. Ortalama hız toplam yolun toplam zamana bölümüdür, hızların ortalaması değildir." }
      ],
      examples: [
        { task: 'Bir otomobil $2\\,\\text{h}$ içinde $120\\,\\text{km}$ yol alıyor. Ortalama hızı nedir?',
          steps: ['$\\bar v=\\frac{s}{t}=\\frac{120\\,\\text{km}}{2\\,\\text{h}}$.', '<strong>Sonuç: 60 km/h</strong>'] },
        { task: 'Bisikletçi $2\\,\\text{h}$ boyunca $20\\,\\text{km/h}$ hızla, sonra $2\\,\\text{h}$ boyunca $10\\,\\text{km/h}$ hızla gidiyor. Ortalama hızı nedir?',
          steps: ['İlk bölüm: $s_1=20\\cdot 2=40\\,\\text{km}$, ikinci: $s_2=10\\cdot 2=20\\,\\text{km}$.', 'Toplamda $4\\,\\text{h}$ içinde $60\\,\\text{km}$.', '<strong>Sonuç: 15 km/h</strong>'] }
      ]
    },
    's1-zrychlenie': {
      title: 'Hız ve ivme',
      summary: 'Zamana göre hız değişimi ve düzgün hızlanan hareket.',
      theory: [
        `<p><strong>İvme</strong>, birim zamandaki hız değişimidir: $a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$. Birimi $\\text{m/s}^2$'dir. Hız her saniye $2\\,\\text{m/s}$ artıyorsa ivme $2\\,\\text{m/s}^2$ olur.</p>`,
        `<p>İvme yalnızca hızlanma değildir. Pozitif $a$ hızın arttığını, negatif $a$ ise yavaşlamayı (frenlemeyi) gösterir. İvme, hızın büyüklüğü aynı kalsa bile hareketin yönü değiştiğinde de oluşur; örneğin bir çember üzerinde hareket ederken.</p>`,
        `<p><strong>Düzgün hızlanan harekette</strong> hız zamanla orantılı olarak artar: $v=v_0+a\\,t$. Ortalama hız $\\frac{v_0+v}{2}$ olduğundan yol $s=v_0\\,t+\\frac{1}{2}a\\,t^2$ olur. $\\frac{1}{2}$ içeren terim önemlidir, çünkü hız yolculuk boyunca sürekli değişir.</p>`,
        `<p>Dünya yüzeyine yakın serbest düşmede ivme aşağı doğru yönelir ve büyüklüğü yaklaşık $g\\approx 9{,}81\\,\\text{m/s}^2$'dir. Durgunluktan düşen bir cisim her saniye yaklaşık $9{,}81\\,\\text{m/s}$ hız kazanır.</p>`,
        { fig: "s1s4-v-t-zrychlenie", caption: "v–t grafiğinin eğimi ivmedir, grafiğin altındaki alan yoldur. Düzgün hızlanan harekette grafik bir doğrudur." }
      ],
      examples: [
        { task: 'Bir otomobil durgunluktan $5\\,\\text{s}$ içinde $20\\,\\text{m/s}$ hıza ulaşıyor. İvmesi nedir?',
          steps: ['$a=\\frac{v-v_0}{t}=\\frac{20-0}{5}$.', '<strong>Sonuç: 4 m/s²</strong>'] },
        { task: 'Bir cismin hızı $2\\,\\text{m/s}$, ivmesi $3\\,\\text{m/s}^2$. $4\\,\\text{s}$ sonra hızı ne olur?',
          steps: ['$v=v_0+a\\,t=2+3\\cdot 4$.', '<strong>Sonuç: 14 m/s</strong>'] }
      ]
    },
    's1-newton': {
      title: "Newton'un hareket yasaları",
      summary: 'Eylemsizlik, F = m·a bağıntısı ve etki-tepki ilkesi.',
      theory: [
        `<p><strong>Newton'un birinci yasası (eylemsizlik):</strong> cisim, üzerine kuvvet etki etmediği ya da tüm kuvvetlerin bileşkesi sıfır olduğu sürece durgun kalır veya düzgün doğrusal hareketini sürdürür. Bu nedenle otobüs ani fren yaptığında yolcular öne savrulur: vücutları hareketini sürdürmek ister.</p>`,
        `<p><strong>Newton'un ikinci yasası:</strong> bileşke kuvvet cisme bir ivme kazandırır; bu ivme kuvvetle doğru, kütleyle ters orantılıdır: $F=m\\,a$. Kuvvetin birimi newton'dur, $1\\,\\text{N}=1\\,\\text{kg}\\cdot\\text{m/s}^2$. Aynı kuvvetle daha ağır bir cisim daha yavaş hızlanır.</p>`,
        `<p><strong>Newton'un üçüncü yasası (etki ve tepki):</strong> A cismi B cismine bir kuvvetle etki ederse, B cismi A'ya aynı büyüklükte ve zıt yönde bir kuvvetle karşılık verir. Bu kuvvetler <em>farklı</em> cisimlere etki eder, bu yüzden birbirinden hiçbir zaman çıkarılmazlar. At arabayı çeker, araba da atı geriye çeker.</p>`,
        `<p><strong>Bileşke kuvvet</strong>, aynı doğru üzerindeki birkaç kuvvetin toplamıdır: aynı yönlü kuvvetler toplanır, zıt yönlü kuvvetler çıkarılır. Oluşan ivmenin yönü, bileşke kuvvetin yönüne eşittir.</p>`,
        { fig: "s1s4-akcia-reakcia", caption: "Etki ve tepki kuvvetleri aynı büyüklükte ve zıt yönlüdür, ancak farklı cisimlere etki ettikleri için birbirinden çıkarılmazlar." }
      ],
      examples: [
        { task: 'Kütlesi $4\\,\\text{kg}$ olan bir cisim $3\\,\\text{m/s}^2$ ivmeyle hareket ediyor. Üzerine etki eden bileşke kuvvet nedir?',
          steps: ['$F=m\\,a=4\\cdot 3$.', '<strong>Sonuç: 12 N</strong>'] },
        { task: 'Bir cisme zıt yönlerde $7\\,\\text{N}$ ve $3\\,\\text{N}$ kuvvetler etki ediyor. Bileşkeleri nedir?',
          steps: ['Kuvvetler zıt yönlü, bu yüzden çıkarılır: $7-3=4$.', '<strong>Sonuç: büyük kuvvetin yönünde 4 N</strong>'] }
      ]
    },
    's1-gravitacia': {
      title: 'Kütleçekim kuvveti ve ağırlık',
      summary: 'Kütle ve ağırlık, Dünya ve Ay üzerinde ağırlık ivmesi.',
      theory: [
        `<p><strong>Kütleçekim kuvveti</strong>, bütün cisimler arasındaki çekici kuvvettir. Cisimler ne kadar ağır ve birbirine ne kadar yakınsa kuvvet o kadar büyüktür. Dünya yüzeyindeki cisimlerde bunu <strong>ağırlık</strong> olarak gözlemleriz.</p>`,
        `<p><strong>Ağırlık</strong>, Dünya'nın bir cismi çektiği kuvvettir: $F_g=m\\,g$, burada $g\\approx 9{,}81\\,\\text{m/s}^2$ ağırlık ivmesidir. Kilogram cinsinden kütle $m$ cismin bir özelliğidir ve değişmez. Newton cinsinden ağırlık ise yere bağlıdır: $g\\approx 1{,}62\\,\\text{m/s}^2$ olan Ay'da yaklaşık altı kat daha küçüktür.</p>`,
        `<p><strong>Neden bütün cisimler aynı hızla düşer?</strong> Ağırlık kütleyle orantılıdır, eylemsizlik de öyledir. İvme $a=\\frac{F_g}{m}=g$ kütleye bağlı değildir. Hava direnci olmadan düşen bir taş ile bir polen tanesi aynı hızla düşer.</p>`,
        `<p>Terimleri karıştırma: <strong>kütle</strong> kilogram cinsinden ölçülür ve cisimdeki madde miktarıdır; <strong>ağırlık</strong> ise bir kuvvettir ve newton cinsinden ölçülür.</p>`,
        { fig: "s1s4-tiaz-zem-mesiac", caption: "Aynı kütlenin Ay'da yaklaşık altı kat daha küçük ağırlığı vardır, çünkü oradaki ağırlık ivmesi daha küçüktür." }
      ],
      examples: [
        { task: 'Kütlesi $5\\,\\text{kg}$ olan bir cismin Dünya üzerindeki ağırlığı nedir?',
          steps: ['$F_g=m\\,g=5\\cdot 9{,}81$.', '<strong>Sonuç: yaklaşık 49,1 N</strong>'] },
        { task: 'Aynı cismin Ay üzerindeki ağırlığı nedir; orada $g\\approx 1{,}62\\,\\text{m/s}^2$. Kütlesi nedir?',
          steps: ['$F_g=5\\cdot 1{,}62=8{,}1\\,\\text{N}$.', 'Kütle değişmez, $5\\,\\text{kg}$ kalır.', '<strong>Sonuç: 8,1 N, kütle 5 kg</strong>'] }
      ]
    },
    's1-praca-energia': {
      title: 'İş, güç ve enerji',
      summary: 'Mekanik iş, güç ve bir cismin kinetik enerjisi.',
      theory: [
        `<p><strong>Mekanik iş</strong>, bir cisim yer değiştirirken kuvvetle aktarılan enerjidir. Kuvvet hareket yönündeyse $W=F\\,s$ ile hesaplanır. Birimi joule'dür, $1\\,\\text{J}=1\\,\\text{N}\\cdot\\text{m}$. Aynı iş, kısa bir yolda büyük bir kuvvetle ya da uzun bir yolda küçük bir kuvvetle yapılabilir.</p>`,
        `<p><strong>Güç</strong>, işin ne kadar hızlı yapıldığını gösterir: $P=\\frac{W}{t}$. Birimi watt'tır, $1\\,\\text{W}=1\\,\\text{J/s}$. İki motor aynı işi yapabilir, ama daha büyük güce sahip olan bunu daha kısa sürede yapar.</p>`,
        `<p><strong>Kinetik enerji</strong>, hareketin enerjisidir: $E_k=\\frac{1}{2}m\\,v^2$. Hızın karesine bağlıdır, bu yüzden hızın iki katı, enerjinin dört katı demektir. Bu nedenle daha yüksek hızda bir arabanın fren mesafesi çok daha uzundur.</p>`,
        `<p>İş ve enerji birbirine bağlıdır: bir cisme yapılan iş, cismin enerjisindeki değişime karşılık gelir. $W$ pozitifse cismin enerjisi artar.</p>`,
        { fig: "obr-energia", caption: "Sürtünmesiz kayarken potansiyel enerji kinetik enerjiye dönüşür ve sonra tekrar geri döner." }
      ],
      examples: [
        { task: 'Kuvvet $50\\,\\text{N}$, bir arabayı kuvvet yönünde $4\\,\\text{m}$ iter. Ne kadar iş yapılır?',
          steps: ['$W=F\\,s=50\\cdot 4$.', '<strong>Sonuç: 200 J</strong>'] },
        { task: 'Kütlesi $2\\,\\text{kg}$ olan bir cisim $3\\,\\text{m/s}$ hızla hareket ediyor. Kinetik enerjisi nedir?',
          steps: ['$E_k=\\frac{1}{2}\\cdot 2\\cdot 3^2=9$.', '<strong>Sonuç: 9 J</strong>'] }
      ]
    },
    's1-zakony-zachovania': {
      title: 'Enerji ve momentumun korunum yasaları',
      summary: 'Cismin momentumu ve potansiyel enerjinin kinetik enerjiye dönüşümü.',
      theory: [
        `<p>Bir cismin <strong>momentumu</strong>, kütlesi ile hızının çarpımıdır: $p=m\\,v$, birimi $\\text{kg\\,m/s}$. Momentum bir vektördür, yani hızın yönüne sahiptir. Aynı hızdaki daha ağır bir cismin momentumu daha büyüktür, bu yüzden durdurulması daha zordur.</p>`,
        `<p><strong>Momentumun korunumu yasası:</strong> bir sisteme dışarıdan kuvvet etki etmiyorsa, sistemdeki cisimlerin toplam momentumu değişmez. Birbirini itip ayrılan iki paten kayakçı zıt yönlerde hareket eder. Daha hafif olan kayakçı daha büyük hız kazanır, çünkü momentumlarının toplamı sıfır kalmalıdır.</p>`,
        `<p><strong>Mekanik enerjinin korunumu yasası:</strong> sürtünme ve ortam direnci yoksa, kinetik ve potansiyel enerjinin toplamı $E_k+E_p$ değişmez. Serbest düşmede potansiyel enerji $E_p=m\\,g\\,h$, kinetik enerji $\\frac{1}{2}m\\,v^2$'ye dönüşür. Buradan $v=\\sqrt{2gh}$ elde edilir: hız kütleye bağlı değildir.</p>`,
        `<p>Gerçekte sürtünme ve hava direnci mekanik enerjinin bir kısmını ısıya dönüştürür. Mekanik enerji o zaman azalır, ama sistemin toplam enerjisi korunmaya devam eder.</p>`,
        { fig: "s1s4-hybnost", caption: "Sistemin momentumlarının toplamı sıfır kalır: daha hafif cisim daha hızlı, daha ağır cisim daha yavaş hareket eder." }
      ],
      examples: [
        { task: 'Kütlesi $0{,}01\\,\\text{kg}$ olan bir kurşun $500\\,\\text{m/s}$ hızla uçuyor. Momentumu nedir?',
          steps: ['$p=m\\,v=0{,}01\\cdot 500$.', '<strong>Sonuç: 5 kg·m/s</strong>'] },
        { task: 'Bir cisim durgunluktan $5\\,\\text{m}$ yükseklikten hava direnci olmadan düşüyor. Yere hangi hızla çarpar? $g=10\\,\\text{m/s}^2$ kullan.',
          steps: ['$m\\,g\\,h=\\frac{1}{2}m\\,v^2$, yani $v^2=2gh=2\\cdot 10\\cdot 5=100$.', '<strong>Sonuç: v = 10 m/s</strong>'] }
      ]
    },
    's1-tlak': {
      title: 'Basınç, sıvı ve gazların özellikleri',
      summary: 'Katı cisimlerin basıncı, hidrostatik basınç ve Pascal ilkesi.',
      theory: [
        `<p><strong>Basınç</strong>, yüzeye dik etki eden kuvvetin, bu yüzeyin alanına oranıdır: $p=\\frac{F}{S}$. Birimi pascal'dır, $1\\,\\text{Pa}=1\\,\\text{N/m}^2$. Sivri bir uçla daha güçlü bastırırız, çünkü aynı kuvvet daha küçük bir alana etki eder.</p>`,
        `<p><strong>Hidrostatik basınç</strong>, sıvı içinde derinlikle artar: $p=\\rho\\,g\\,h$. Burada $\\rho$ sıvının yoğunluğudur (su için $1000\\,\\text{kg/m}^3$) ve $h$ yüzeyin altındaki derinliktir. Bu basınç kabın şekline değil, yalnızca derinliğe ve yoğunluğa bağlıdır.</p>`,
        `<p><strong>Pascal ilkesi:</strong> kapalı bir sıvıya uygulanan basınç, değişmeden sıvının her noktasına iletilir. Bu nedenle hidrolik pres bir arabayı kaldırabilir: küçük bir pistona küçük bir kuvvetle uygulanan basınç, büyük pistonda daha büyük bir kuvvet doğurur.</p>`,
        `<p><strong>Gazlar</strong>, moleküllerin kabın duvarlarına çarpmasıyla basınç oluşturur. Deniz seviyesinde atmosfer basıncı yaklaşık $101\\,325\\,\\text{Pa}\\approx 100\\,\\text{kPa}$'dır ve yükseklik arttıkça azalır.</p>`,
        { fig: "obr-tlak", caption: "Sıvıdaki basınç derinlikle artar: cisim ne kadar derinde ise duvara etki eden kuvvet o kadar büyüktür." }
      ],
      examples: [
        { task: 'Ağırlığı $600\\,\\text{N}$ olan bir blok, alanı $0{,}5\\,\\text{m}^2$ olan bir zemin üzerinde duruyor. Yaptığı basınç nedir?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$.', '<strong>Sonuç: 1200 Pa</strong>'] },
        { task: 'Suyun $3\\,\\text{m}$ derinlikteki hidrostatik basıncı nedir? $\\rho=1000\\,\\text{kg/m}^3$ ve $g=10\\,\\text{m/s}^2$ kullan.',
          steps: ['$p=\\rho\\,g\\,h=1000\\cdot 10\\cdot 3=30000\\,\\text{Pa}$.', '<strong>Sonuç: 30 kPa</strong>'] }
      ]
    },
    's2-molekuly': {
      title: 'Maddenin moleküler yapısı',
      summary: 'Madde parçacıkları, madde miktarı ve molar kütle.',
      theory: [
        `<p>Her madde çok küçük parçacıklardan, yani atomlardan veya moleküllerden oluşur. Bunlar sürekli düzensiz bir hareket içindedir ve birbirlerine çekici ve itici kuvvetler uygular. Maddenin katı, sıvı ya da gaz olması bu kuvvetlere bağlıdır.</p>`,
        `<p>Moleküllerin hareketinin kanıtı <strong>Brown hareketidir</strong>: sıvıda dağılmış küçük parçacıklar düzensiz titrer, çünkü her yandan sıvı molekülleri çarpar. Moleküllerin kendi hareketini görmeyiz, ama sonuçlarını görürüz.</p>`,
        `<p>Madde miktarı molle ifade edilir. Bir mol $N_A\\approx 6{,}02\\cdot 10^{23}$ parçacık içerir (Avogadro sabiti). <strong>Molar kütle</strong> $M$, bir molün kütlesidir, gram/mol cinsinden. Örneğin suyun $M=18\\,\\text{g/mol}$'dür: bir mol su molekülünün kütlesi 18 gramdır.</p>`,
        `<p>Bağıntılar: madde miktarı $n=\\frac{m}{M}$ ve parçacık sayısı $N=n\\,N_A$. Bu nedenle çok küçük bir madde miktarı bile çok büyük sayıda parçacık içerir.</p>`,
        { fig: "s1s4-brownov-pohyb", caption: "Brown hareketi: tanecik düzensiz titrer, çünkü her yandan sıvının molekülleri ona çarpar." }
      ],
      examples: [
        { task: 'Kaç mol $36\\,\\text{g}$ su vardır, $M=18\\,\\text{g/mol}$ ise?',
          steps: ['$n=\\frac{m}{M}=\\frac{36}{18}$.', '<strong>Sonuç: 2 mol</strong>'] },
        { task: '$2\\,\\text{mol}$ suda kaç molekül vardır?',
          steps: ['$N=n\\,N_A=2\\cdot 6{,}02\\cdot 10^{23}$.', '<strong>Sonuç: yaklaşık $1{,}2\\cdot 10^{24}$ molekül</strong>'] }
      ]
    },
    's2-teplo': {
      title: 'Sıcaklık, ısı ve iç enerji',
      summary: 'Sıcaklık, kelvin, iç enerji ve ısıtmak için gereken ısı.',
      theory: [
        `<p><strong>Sıcaklık</strong>, parçacıkların düzensiz hareketinin ortalama kinetik enerjisinin bir ölçüsüdür. Daha sıcak bir cismin parçacıkları ortalama olarak daha hızlıdır. Santigrat ölçeğinde sıfır, buzun erime noktasındadır; kelvin cinsinden mutlak ölçekte sıfır ise mutlak sıfır noktasındadır. $T=t+273{,}15$ geçerlidir ve derecenin büyüklüğü aynıdır.</p>`,
        `<p>Bir cismin <strong>iç enerjisi</strong> $U$, bütün parçacıklarının kinetik ve potansiyel enerjilerinin toplamıdır. İki yolla değişir: iş yaparak (örneğin sürtünmeyle) veya ısı aktararak.</p>`,
        `<p><strong>Isı</strong>, sıcak cisimden soğuk cisme geçen enerjidir. Isı bir madde değildir ve cisimlerde "ısı bulunmaz". Bir cismi ısıtmak için gereken ısı $Q=m\\,c\\,\\Delta T$'dir; burada $c$ özısıdır. Suyun $c=4200\\,\\text{J/(kg\\,K)}$, alüminyumun $900\\,\\text{J/(kg\\,K)}$ değeri vardır. Bu nedenle su yavaş ısınır ve ısıyı uzun süre tutar.</p>`,
        `<p>Kelvin ve santigrat derecede sıcaklık değişimini aynı şekilde hesaplarız, çünkü $\\Delta T=\\Delta t$. Mutlak sıcaklığa dönüşüm yalnızca belirli bir sıcaklık için yapılmalıdır.</p>`,
        { fig: "s1s4-merna-kapacita", caption: "Aynı kütle ve aynı sıcaklık değişiminde su, alüminyuma göre neredeyse beş kat daha fazla ısıya ihtiyaç duyar." }
      ],
      examples: [
        { task: '$2\\,\\text{kg}$ suyu $10\\,\\text{K}$ ısıtmak için ne kadar ısı gerekir? $c=4200\\,\\text{J/(kg\\,K)}$ kullan.',
          steps: ['$Q=m\\,c\\,\\Delta T=2\\cdot 4200\\cdot 10$.', '<strong>Sonuç: 84 000 J = 84 kJ</strong>'] },
        { task: '$25\\,{}^\\circ\\text{C}$ sıcaklığı kelvin cinsinden kaçtır?',
          steps: ['$T=t+273{,}15=25+273{,}15$.', '<strong>Sonuç: 298,15 K</strong>'] }
      ]
    },
    's2-skupenstva': {
      title: 'Hâl değişimleri',
      summary: 'Erime, donma, buharlaşma ve yoğunlaşma ile gizli ısı.',
      theory: [
        `<p>Madde katı, sıvı veya gaz hâlinde olabilir. Hâller arasındaki geçiş enerji gerektirir ya da enerji açığa çıkarır. Erime ve buharlaşmada <strong>sıcaklık değişmez</strong>; verilen ısı moleküller arasındaki bağları zayıflatmak için kullanılır, moleküllerin hızını artırmak için değil.</p>`,
        `<p><strong>Gizli ısı</strong>, sıcaklık değişmeden bir kilogram maddeyi hâl değiştirmek için gereken ısıdır. Erimede bu özgül erime gizli ısısı $L_t$, buharlaşmada $L_v$'dir. Buz için $L_t\\approx 334\\,\\text{kJ/kg}$, su için $L_v\\approx 2260\\,\\text{kJ/kg}$'dır. Kütlesi $m$ olan bir cismin hâl değiştirmesi için gereken ısı $Q=m\\,L$'dir.</p>`,
        `<p><strong>Donma</strong> ve <strong>yoğunlaşmada</strong> aynı miktarda ısı açığa çıkar. Bu nedenle $100\\,{}^\\circ\\text{C}$'deki buhar, aynı sıcaklıktaki sudan daha tehlikelidir: deri üzerinde yoğunlaşırken çok büyük miktarda ısı verir.</p>`,
        `<p>Buharlaşma aynı zamanda soğutmadır: yüzeyden en hızlı moleküller ayrılır, bu nedenle kalan sıvı soğur. Bu yüzden yıkandıktan sonra üşürüz.</p>`,
        { fig: "s1s4-ohrev-latky", caption: "Erime ve buharlaşmada sıcaklık sabit kalır: verilen ısı hâl değiştirmek için kullanılır, ısıtmak için değil." }
      ],
      examples: [
        { task: '$0\\,{}^\\circ\\text{C}$ sıcaklıktaki $2\\,\\text{kg}$ buzu eritmek için ne kadar ısı gerekir? $L_t=334\\,\\text{kJ/kg}$ kullan.',
          steps: ['$Q=m\\,L_t=2\\cdot 334$.', '<strong>Sonuç: 668 kJ</strong>'] },
        { task: '$100\\,{}^\\circ\\text{C}$ sıcaklıktaki $0{,}5\\,\\text{kg}$ buhar yoğunlaşıp suya dönüştüğünde ne kadar ısı açığa çıkar? $L_v=2260\\,\\text{kJ/kg}$ kullan.',
          steps: ['$Q=m\\,L_v=0{,}5\\cdot 2260$.', '<strong>Sonuç: 1130 kJ</strong>'] }
      ]
    },
    's2-ideal': {
      title: 'İdeal gaz ve hal denklemi',
      summary: 'İdeal gaz modeli, hal denklemi ve izotermal süreç.',
      theory: [
        `<p><strong>İdeal gaz</strong> bir modeldir: moleküller küçük noktalar olarak düşünülür, aralarında hiçbir kuvvet etki etmez, kabın duvarlarına ve birbirlerine esnek biçimde çarparlar. Düşük basınçta ve yüksek sıcaklıkta gerçek gazlar neredeyse ideal gibi davranır.</p>`,
        `<p>İdeal gazın <strong>hal denklemi</strong>: $p\\,V=n\\,R\\,T$; burada $R\\approx 8{,}31\\,\\text{J/(mol\\,K)}$ molar gaz sabiti ve $T$ sıcaklık kelvin cinsinden yazılır. Kapalı bir kaptaki sıcaklığı artırırsak moleküller daha sert ve daha sık çarpar, basınç artar.</p>`,
        `<p><strong>İzotermal süreç</strong>, sabit sıcaklıkta gerçekleşir. Bu durumda $p\\,V=\\text{sabit}$, yani $p_1V_1=p_2V_2$: basınç iki katına çıkarsa hacim yarıya düşer. Benzer şekilde sabit basınçta hacim sıcaklıkla, sabit hacimde basınç sıcaklıkla orantılıdır.</p>`,
        `<p>Her hesapta birimlere dikkat etmeliyiz: basınç paskal, hacim metreküp ve sıcaklık kelvin cinsinden olmalıdır.</p>`,
        { fig: "s1s4-izoterma", caption: "Sabit sıcaklıkta p·V çarpımı sabittir: hacim yarıya düştüğünde basınç iki katına çıkar." }
      ],
      examples: [
        { task: 'Gaz sabit sıcaklıkta $4\\,\\text{l}$ hacme ve $200\\,\\text{kPa}$ basınca sahip. $400\\,\\text{kPa}$ basınçta hacmi ne olur?',
          steps: ['$p_1V_1=p_2V_2$, yani $V_2=\\frac{p_1V_1}{p_2}=\\frac{200\\cdot 4}{400}$.', '<strong>Sonuç: 2 l</strong>'] },
        { task: '$T=300\\,\\text{K}$ sıcaklıkta ve $V=0{,}025\\,\\text{m}^3$ hacimde $1\\,\\text{mol}$ gazın basıncı nedir? $R=8{,}31\\,\\text{J/(mol\\,K)}$ kullan.',
          steps: ['$p=\\frac{nRT}{V}=\\frac{1\\cdot 8{,}31\\cdot 300}{0{,}025}$.', '<strong>Sonuç: 99 720 Pa</strong>'] }
      ]
    },
    's2-termo': {
      title: 'Termodinamik yasaları ve ısı makineleri',
      summary: 'Termodinamiğin birinci ve ikinci yasası ile ısı makinesinin verimi.',
      theory: [
        `<p><strong>Termodinamiğin birinci yasası</strong>, ısıl süreçler için enerjinin korunumu yasasıdır: $\\Delta U=Q-A$. İç enerjinin değişimi $\\Delta U$, sisteme verilen $Q$ ısısı eksi sistemin çevreye yaptığı $A$ işine eşittir. Gaz genleşip iş yaparsa, yeterince ısı vermediğimiz sürece iç enerjisi azalır.</p>`,
        `<p><strong>Termodinamiğin ikinci yasası</strong>, ısının kendiliğinden sıcak cisimden soğuk cisme geçtiğini, tersini değil, söyler. Buradan çıkan sonuç, hiçbir ısı makinesinin tüm ısıyı işe dönüştüremeyeceğidir. Bir kısım ısı soğutucuya gitmek zorundadır.</p>`,
        `<p><strong>Isı makinesi</strong>, ısıtıcıdan $Q_1$ ısısını alır, bir kısmını $A$ işine dönüştürür ve kalanı $Q_2$'yi soğutucuya verir. <strong>Verim</strong> $\\eta=\\frac{A}{Q_1}=1-\\frac{Q_2}{Q_1}$'dir. Her zaman 1'den, yani %100'den küçüktür.</p>`,
        `<p>En yüksek olası verime sahip olan ideal Carnot çevrimidir: $\\eta_{\\max}=1-\\frac{T_2}{T_1}$; burada ısıtıcının $T_1$ ve soğutucunun $T_2$ sıcaklıkları kelvin cinsindendir. Bu nedenle motorlar, ısıtıcının sıcaklığını artırarak iyileştirilir.</p>`,
        { fig: "s1s4-tepelny-motor", caption: "Motor, ısıtıcıdan Q₁ ısısını alır, bir kısmını A işine dönüştürür ve kalanı Q₂'yi soğutucuya verir. Verim A/Q₁ 1'den küçüktür." }
      ],
      examples: [
        { task: 'Gaza $300\\,\\text{J}$ ısı verildi ve gaz $120\\,\\text{J}$ iş yaptı. İç enerjisindeki değişim nedir?',
          steps: ['$\\Delta U=Q-A=300-120$.', '<strong>Sonuç: 180 J (iç enerji arttı)</strong>'] },
        { task: 'Bir motor ısıtıcıdan $1000\\,\\text{J}$ alır ve $250\\,\\text{J}$ iş yapar. Verimi nedir?',
          steps: ['$\\eta=\\frac{A}{Q_1}=\\frac{250}{1000}=0{,}25$.', '<strong>Sonuç: %25</strong>'] }
      ]
    },
    's2-kmitanie': {
      title: 'Mekanik salınım ve rezonans',
      summary: 'Periyot, frekans, sarkaç ve rezonans.',
      theory: [
        `<p><strong>Salınım hareketi</strong>, denge konumu etrafında periyodik olarak tekrarlanan harekettir. Örnekler, yaya asılı bir ağırlık veya sarkaçtır. <strong>Periyot</strong> $T$ bir salınımın süresi, <strong>frekans</strong> $f$ ise saniyedeki salınım sayısıdır: $f=\\frac{1}{T}=\\frac{n}{t}$. Frekansın birimi hertz'dir, $1\\,\\text{Hz}=1\\,\\text{s}^{-1}$.</p>`,
        `<p><strong>Harmonik salınım</strong>, $y=A\\sin(\\omega t)$ sapmasına sahiptir; burada $A$ genlik ve $\\omega=2\\pi f$ açısal frekanstır. Sinüs biçimi, kuvvetin sapmayla doğru orantılı olduğu yaylarda oluşur.</p>`,
        `<p>Periyot salınan sistemin özelliklerine bağlıdır. Yay için $T=2\\pi\\sqrt{\\frac{m}{k}}$: ağır ağırlık daha yavaş, sert yay daha hızlı salınır. Matematiksel sarkaç için $T=2\\pi\\sqrt{\\frac{l}{g}}$'dir; burada $l$ asılı ipin uzunluğudur (küçük sapmalar için).</p>`,
        `<p><strong>Rezonans</strong>, dış periyodik kuvvet cismin kendi frekansıyla salınırsa oluşur. Her itme bir önceki salınıma eklenir ve genlik büyür. Bu nedenle salıncak, onu kendi salınım ritmiyle ittiğimizde yükselir.</p>`,
        { fig: "s1s4-kmitanie", caption: "Harmonik salınım: genlik A en büyük sapmadır, periyot T ise bir salınımın süresidir." }
      ],
      examples: [
        { task: 'Bir ağırlık $20\\,\\text{s}$ içinde $40$ salınım yapıyor. Periyodu ve frekansı nedir?',
          steps: ['$T=\\frac{t}{n}=\\frac{20}{40}=0{,}5\\,\\text{s}$.', '$f=\\frac{1}{T}=\\frac{1}{0{,}5}$.', '<strong>Sonuç: T = 0,5 s, f = 2 Hz</strong>'] },
        { task: 'Cisim $5\\,\\text{Hz}$ frekansla salınıyor. Periyodu nedir?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{5}$.', '<strong>Sonuç: 0,2 s</strong>'] }
      ]
    },
    's2-vlnenie': {
      title: 'Mekanik dalga ve ses',
      summary: 'Dalga boyu, dalganın yayılma hızı ve ses bir mekanik dalga olarak.',
      theory: [
        `<p><strong>Dalga hareketi</strong>, salınımların bir ortamda yayılmasıdır. Enerji ve dalga şekli aktarılır, ama ortamdaki parçacıklar yalnızca kendi denge konumları etrafında salınır. Mekanik dalga maddesel bir ortama ihtiyaç duyar, bu nedenle ses boşlukta duyulmaz.</p>`,
        `<p>Dalga boyu $\\lambda$, aynı fazdaki iki en yakın noktanın, örneğin iki tepenin arasındaki uzaklıktır. Bir periyot $T$ süresince dalga $\\lambda$ kadar ilerler; bu nedenle yayılma hızı için $v=\\frac{\\lambda}{T}=\\lambda\\,f$ geçerlidir.</p>`,
        `<p><strong>Ses</strong> boyuna bir mekanik dalgadır. İnsan kulağı yaklaşık $20\\,\\text{Hz}$ ile $20\\,\\text{kHz}$ arasındaki frekansları duyar. Ses perdesi frekansa, şiddet genliğe bağlıdır. Kuru havada $20\\,{}^\\circ\\text{C}$'de ses yaklaşık $340\\,\\text{m/s}$ hızla yayılır; suda ve çelikte daha hızlıdır.</p>`,
        `<p><strong>Yankı</strong>, ses bir engelden yansıdığında oluşur. Ses gidip geri gelmek için yol alır, bu nedenle engelin uzaklığı $s=\\frac{v\\,t}{2}$'dir; burada $t$, sesin çıkışıyla dönüşü arasındaki süredir.</p>`,
        { fig: "obr-vlna", caption: "Enine dalga: dalga boyu λ, aynı fazdaki iki komşu noktanın arasındaki uzaklıktır." }
      ],
      examples: [
        { task: '$50\\,\\text{Hz}$ frekanslı bir dalganın dalga boyu $4\\,\\text{m}$. Hangi hızla yayılır?',
          steps: ['$v=\\lambda\\,f=4\\cdot 50$.', '<strong>Sonuç: 200 m/s</strong>'] },
        { task: 'Yankı, sesin çıkışından $2\\,\\text{s}$ sonra geldi. Engel ne kadar uzaktadır? $v=340\\,\\text{m/s}$ kullan.',
          steps: ['$2s=v\\,t=340\\cdot 2=680\\,\\text{m}$.', '<strong>Sonuç: $s=340\\,\\text{m}$</strong>'] }
      ]
    },
    's3-naboj': {
      title: 'Elektrik yükü ve elektrik alanı',
      summary: 'Yükler birbirini çeker ve iter; nokta yükün çevresindeki alan ve şiddeti.',
      theory: [
        `<p>Elektrik yükü $Q$, cisimlerin bir özelliğidir. Birimi kulon'dur ($\\text{C}$). Aynı işaretli yükler <strong>birbirini iter</strong>, zıt işaretliler <strong>birbirini çeker</strong>. Doğadaki en küçük yük elektronun yüküdür, $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$.</p>`,
        `<p><strong>Elektrik alanı</strong>, yüklü bir cismin çevresindeki ve başka bir yüke kuvvet uygulayan uzaydır. Kuvvetini <em>şiddet</em> ile tanımlarız: $E = \\frac{F}{q}$; alanın küçük pozitif $q$ yüküne uyguladığı kuvvet, bu yüke bölünür. Birimi $\\text{N/C}$'dir ve $\\text{V/m}$ ile aynıdır.</p>`,
        `<p>Nokta yük $Q$ için, $r$ uzaklığında $E = k\\frac{Q}{r^2}$ geçerlidir; burada $k \\approx 9\\cdot 10^{9}\\,\\text{N·m}^2/\\text{C}^2$. Şiddet uzaklığın <strong>karesiyle</strong> azalır: uzaklık iki katına çıkınca alan dörtte birine düşer. Bu nedenle alan uzaklıkla hızla zayıflar.</p>`,
        `<ol><li>Yükü ve uzaklığı yazıp SI birimlerine çevir (nC = $10^{-9}$ C, cm = $10^{-2}$ m).</li>
       <li>$E = k\\frac{Q}{r^2}$ formülüne yerleştir.</li><li>Sonucu $\\text{N/C}$ cinsinden yaz.</li></ol>`,
        { fig: "s1s4-pole-naboja", caption: "Nokta yükün alan şiddeti uzaklığın karesiyle azalır: iki katı uzaklıkta dörtte biri kadardır." }
      ],
      examples: [
        { task: 'Nokta yük $Q = 2\\,\\text{nC}$. $r = 0{,}5\\,\\text{m}$ uzaklıkta alan şiddeti nedir?',
          steps: ['Yükü yeniden yaz: $Q = 2\\cdot 10^{-9}\\,\\text{C}$.',
            '$E = 9\\cdot 10^{9}\\cdot\\frac{2\\cdot 10^{-9}}{0{,}25}=72\\,\\text{N/C}$.',
            '<strong>Sonuç: $E = 72\\,\\text{N/C}$.</strong>'] },
        { task: 'Yükten uzaklığı iki katına çıkarırsak alan şiddeti nasıl değişir?',
          steps: ['Formülde $r^2$ vardır, yani $2r$ için payda dört kat olur.', '<strong>Şiddet dörtte bire düşer.</strong>'] }
      ]
    },
    's3-prud-napatie': {
      title: 'Elektrik akımı, gerilim ve direnç',
      summary: 'Akım, zamana bağlı yük; gerilim, yük başına iş; direnç ise yüklerin hareketini engeller.',
      theory: [
        `<p><strong>Elektrik akımı</strong> $I$, birim zamanda bir iletkenin kesitinden geçen yüktür: $I = \\frac{Q}{t}$. Birimi amperdir ($\\text{A}$). Akım yalnızca yükler hareket edebildiğinde ve üzerlerine kuvvet etki ettiğinde akar.</p>`,
        `<p><strong>Elektrik gerilimi</strong> $U$, alanın $Q$ yükünü taşırken yaptığı $W$ işini anlatır: $U = \\frac{W}{Q}$. Birimi volttur ($\\text{V}$). Gerilim, yükleri devrede hareket ettiren şeydir.</p>`,
        `<p><strong>Elektrik direnci</strong> $R$, bir iletkenin yük hareketini engelleme özelliğidir. Birimi ohm'dur ($\\Omega$). Direnç malzemeye, uzunluğa, kesite ve sıcaklığa bağlıdır: daha uzun ve ince iletkenin direnci daha büyüktür.</p>`,
        `<p>Akım neden sınırlıdır: gerilim yükleri hareket ettirir, ama iletkenin atomlarıyla çarpışmalar onları yavaşlatır. Sonuçta akım, gerilime ve dirence bağlı sabit bir değere ulaşır.</p>`,
        { fig: "s1s4-jednoduchy-obvod", caption: "Akım, kaynağın pozitif kutbundan dirence ve oradan negatif kutba akar. Gerilim U kaynağın kutuplarındadır." }
      ],
      examples: [
        { task: '4 s içinde bir iletkenden $12\\,\\text{C}$ yük geçti. Akım nedir?',
          steps: ['Bağıntıya koyarız: $I = \\frac{Q}{t}$.', '$I = \\frac{12\\,\\text{C}}{4\\,\\text{s}} = 3\\,\\text{A}$.', '<strong>Sonuç: akım 3 A.</strong>'] },
        { task: 'Bir $5\\,\\text{C}$ yük aktarılırken alan $30\\,\\text{J}$ iş yaptı. Gerilim nedir?',
          steps: ['$U = \\frac{W}{Q}$.', '$U = \\frac{30\\,\\text{J}}{5\\,\\text{C}} = 6\\,\\text{V}$.', '<strong>Sonuç: gerilim 6 V.</strong>'] }
      ]
    },
    's3-ohm': {
      title: 'Ohm yasası ve elektrik devreleri',
      summary: 'Akım, gerilim ve direnç; dirençlerin seri ve paralel bağlanması.',
      theory: [
        `<p><strong>Ohm yasası</strong>, bir iletkendeki akımın gerilimle doğru, dirençle ters orantılı olduğunu söyler: $I = \\frac{U}{R}$, yani $U = R\\,I$ ve $R = \\frac{U}{I}$. Sabit sıcaklıktaki metal iletkenler için geçerlidir.</p>`,
        `<p><strong>Seri bağlama</strong>: tüketiciler birbiri ardına bağlanır, içlerinden aynı akım geçer ve gerilimler toplanır: $U = U_1 + U_2$, dirençler $R = R_1 + R_2$. Bir tüketici çalışmazsa bütün devre kesilir.</p>`,
        `<p><strong>Paralel bağlama</strong>: tüketiciler yan yana bağlanır, her birinde aynı gerilim vardır ve akımlar toplanır: $I = I_1 + I_2$ ve $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$. Toplam direnç, kollardaki en küçük dirençten daha küçüktür. Bu nedenle ev aletleri paralel bağlanır: her biri tam gerilim alır ve biri kapansa da diğerleri çalışmaya devam eder.</p>`,
        `<p>Bir devreyi çözerken önce hangi parçaların seri, hangilerinin paralel olduğunu belirle; sonra bağlantıyı tek bir dirençle değiştir ve Ohm yasasını uygula.</p>`,
        { fig: "obr-ohm", caption: "Sabit direnç için gerilimin akıma göre grafiği, başlangıç noktasından geçen bir doğrudur." }
      ],
      examples: [
        { task: '$6\\,\\Omega$ dirençli bir direnç $12\\,\\text{V}$ gerilime bağlı. İçinden hangi akım geçer?',
          steps: ['$I = \\frac{U}{R} = \\frac{12\\,\\text{V}}{6\\,\\Omega}$.', '<strong>Sonuç: I = 2 A.</strong>'] },
        { task: '$4\\,\\Omega$ luk iki direnç paralel bağlı. Toplam direnç nedir?',
          steps: ['$\\frac{1}{R}=\\frac{1}{4}+\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.', '<strong>Sonuç: R = 2 Ω.</strong>'] }
      ]
    },
    's3-praca-vykon': {
      title: 'Elektrik işi ve gücü',
      summary: 'Tüketici gücü, joule ve kilovatsaat cinsinden enerji.',
      theory: [
        `<p><strong>Elektrik gücü</strong> $P$, bir tüketicinin elektrik enerjisini ne hızla dönüştürdüğünü gösterir: $P = U\\,I = \\frac{W}{t}$. Birimi watt'tır ($\\text{W}$), $1\\,\\text{W} = 1\\,\\text{J/s}$.</p>`,
        `<p><strong>Elektrik işi</strong> (enerji) $W$, $t$ süresinde $W = P\\,t = U\\,I\\,t$'dir. Birimi joule'dür ($\\text{J}$). Elektrik faturasında kilovatsaat kullanılır: $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<p>Neden böyledir: gerilim bir kulonluk yükün taşıdığı enerjiyi, akım ise saniyede kaç kulon geçtiğini verir. Bunların çarpımı saniyedeki enerji, yani güçtür.</p>`,
        `<p>Tüketicinin etiketinde güç yazılıdır (örneğin 2000 W). Enerjiyi, kilowatt cinsinden gücü saat cinsinden süreyle çarparak bulursun.</p>`
      ],
      examples: [
        { task: 'Bir ampul $230\\,\\text{V}$ gerilime bağlı ve içinden $0{,}5\\,\\text{A}$ akım geçiyor. Gücü nedir?',
          steps: ['$P = U\\,I = 230\\,\\text{V}\\cdot 0{,}5\\,\\text{A}$.', '<strong>Sonuç: P = 115 W.</strong>'] },
        { task: '$1{,}5\\,\\text{kW}$ güçlü bir saç kurutma makinesi $2$ saat çalışıyor. Kaç kWh enerji harcar?',
          steps: ['$W = P\\,t = 1{,}5\\,\\text{kW}\\cdot 2\\,\\text{h}$.', '<strong>Sonuç: 3 kWh.</strong>'] }
      ]
    },
    's3-magnetizmus': {
      title: 'Manyetik alan ve elektromanyetik indüksiyon',
      summary: 'İletken ve bobinin manyetik alanı; manyetik akı değişiminde gerilimin oluşması.',
      theory: [
        `<p><strong>Manyetik alan</strong>, mıknatısların ve içinden akım geçen iletkenlerin çevresinde oluşur. Yönünü, kuzey kutbundan çıkıp güney kutbuna giren manyetik alan çizgileri gösterir. Manyetik indüksiyon $B$, tesla ($\\text{T}$) ile ölçülür.</p>`,
        `<p>$I$ akımı taşıyan uzun düz bir iletken, $r$ uzaklıkta $B = \\frac{\\mu_0 I}{2\\pi r}$ alanı oluşturur. $l$ uzunluğunda ve $N$ sarımlı bir <strong>bobinin</strong> içinde alan yaklaşık düzgündür: $B = \\mu_0\\frac{N}{l}I$, burada $\\mu_0 \\approx 1{,}26\\cdot 10^{-6}\\,\\text{T·m/A}$.</p>`,
        `<p><strong>Elektromanyetik indüksiyon:</strong> kapalı bir iletken halkadan geçen manyetik akı değişirse, halkada gerilim oluşur. Lenz kuralına göre indüklenen akımın yönü, onu oluşturan değişikliğe karşı koyacak şekildedir. Bu nedenle mıknatıs yaklaştırıldığında bobin harekete direnir.</p>`,
        `<p>Neden böyledir: manyetik alandaki değişim, iletkendeki serbest yükler üzerine kuvvet uygular ve yükler hareket eder. İndüklenen akım değişimi destekleseydi, enerji hiçbir yerden kendiliğinden oluşurdu; bu ise enerjinin korunumu yasasına aykırıdır.</p>`,
        { fig: "obr-magnet-vodic", caption: "Akım geçen bir iletkenin çevresinde, iletken etrafında daireler biçiminde bir manyetik alan vardır." }
      ],
      examples: [
        { task: 'Bir bobinin $500$ sarımı $0{,}25\\,\\text{m}$ uzunluğa yayılmıştır ve içinden $2\\,\\text{A}$ akım geçmektedir. İçindeki indüksiyon nedir?',
          steps: ['$\\frac{N}{l}=\\frac{500}{0{,}25}=2000\\,\\text{m}^{-1}$.',
            '$B = \\mu_0\\frac{N}{l}I \\approx 1{,}26\\cdot 10^{-6}\\cdot 2000\\cdot 2 \\approx 5{,}0\\cdot 10^{-3}\\,\\text{T}$.',
            '<strong>Sonuç: B ≈ 5,0 mT.</strong>'] },
        { task: 'Düz bir iletkenden $4\\,\\text{A}$ akım geçiyor. İletkenden $0{,}2\\,\\text{m}$ uzaklıkta indüksiyon nedir?',
          steps: ['$B = \\frac{\\mu_0 I}{2\\pi r}=\\frac{1{,}26\\cdot 10^{-6}\\cdot 4}{2\\pi\\cdot 0{,}2}$.',
            '<strong>Sonuç: B ≈ 4,0·10⁻⁶ T.</strong>'] }
      ]
    },
    's3-transformator': {
      title: 'Elektrik motorları, generatörler ve transformatörler',
      summary: 'Motor elektriği harekete çevirir, generatör tersini yapar; transformatör gerilimi değiştirir.',
      theory: [
        `<p><strong>Elektrik motoru</strong>, elektrik enerjisini mekanik enerjiye çevirir. Manyetik alanda akım taşıyan bir iletken üzerine kuvvet etki eder. İletken bobin hâline getirilirse kuvvet onu döndürür ve bobin motorun rotoru olur.</p>`,
        `<p><strong>Generatör</strong>, motorun tersidir: bobin manyetik alanda döndürülürse manyetik akı periyodik olarak değişir ve bobinde alternatif gerilim indüklenir.</p>`,
        `<p><strong>Transformatör</strong>, alternatif akımın gerilimini değiştirir. İdeal transformatörde $\\frac{U_1}{U_2}=\\frac{N_1}{N_2}$ geçerlidir; burada $N_1$ ve $N_2$ birincil ve ikincil sargıların sarım sayılarıdır. İkincil sargının sarım sayısı fazlaysa gerilim yükselir; azsa gerilim düşer.</p>`,
        `<p>Enerji iletiminde gerilim neden yükseltilir: aynı $P = U\\,I$ gücünde, gerilim yüksek olduğunda akım küçüktür ve bu yüzden iletkende ısı kayıpları da küçüktür. Bu nedenle elektrik yüksek gerilimle iletilir ve tüketim yerinde aşağı dönüştürülür.</p>`,
        { fig: "s1s4-transformator", caption: "İdeal transformatör: gerilimler sarım sayılarının oranında değişir, U₁/U₂ = N₁/N₂." }
      ],
      examples: [
        { task: 'Transformatörün birincil sargısında 200, ikincilde 1000 sarım var. Birincilde $230\\,\\text{V}$ ise ikincildeki gerilim nedir?',
          steps: ['$\\frac{U_2}{U_1}=\\frac{N_2}{N_1}=\\frac{1000}{200}=5$.', '$U_2 = 5\\cdot 230\\,\\text{V}=1150\\,\\text{V}$.', '<strong>Sonuç: 1150 V (transformatör gerilimi yükseltir).</strong>'] },
        { task: "Transformatör gerilimi 230 V'tan 23 V'a düşürüyor. Birincil sargı 1000 sarımlıysa ikincil sargı kaç sarımlıdır?",
          steps: ['$\\frac{N_2}{N_1}=\\frac{U_2}{U_1}=\\frac{23}{230}=\\frac{1}{10}$.', '$N_2 = \\frac{1000}{10}=100$.', '<strong>Sonuç: 100 sarım.</strong>'] }
      ]
    },
    's3-striedavy': {
      title: 'Alternatif akım',
      summary: 'Sinüs gerilimi, periyot, frekans ve şebekedeki etkin değer.',
      theory: [
        `<p><strong>Alternatif akım</strong>, hem yönünü hem büyüklüğünü periyodik olarak değiştirir. Gerilim zamanla sinüs biçiminde değişir: $u = U_{max}\\sin(\\omega t)$; burada $U_{max}$ genlik ve $\\omega = 2\\pi f$ açısal frekanstır.</p>`,
        `<p>Bir periyodun süresi $T = \\frac{1}{f}$'dir. Kamu şebekesinde frekans $f = 50\\,\\text{Hz}$'dir; bu durumda periyot $T = 0{,}02\\,\\text{s}$'dir. Saniyede gerilim 50 kez tekrarlanır.</p>`,
        `<p><strong>Etkin değer</strong>, aynı ısıl etkiyi yaratacak doğru akım geriliminin değeridir. Sinüs gerilimi için $U_{ef} = \\frac{U_{max}}{\\sqrt{2}}$, yani $U_{max} = U_{ef}\\sqrt{2}$'dir. Etkin gerilimi 230 V olan şebekenin genliği yaklaşık $325\\,\\text{V}$'dir.</p>`,
        `<p>Etkin değerleri neden kullanırız: ampul ve saç kurutma makinesi gibi tüketiciler tepe değerlere değil, ortalama güce tepki verir. Bu nedenle etiketlerde ve voltmetrede etkin değerler yazılır.</p>`,
        { fig: "s1s4-striedavy-prud", caption: "Sinüs gerilimi: etkin değer genliğin √2'ye bölümüdür. Periyot T = 1/f'dir; 50 Hz'de 0,02 s'dir." }
      ],
      examples: [
        { task: 'Şebekenin etkin gerilimi 230 V. Gerilimin genliği nedir?',
          steps: ['$U_{max}=U_{ef}\\sqrt{2}=230\\cdot 1{,}414\\approx 325\\,\\text{V}$.', '<strong>Sonuç: yaklaşık 325 V.</strong>'] },
        { task: 'Şebekenin frekansı 50 Hz. Periyodu nedir?',
          steps: ['$T=\\frac{1}{f}=\\frac{1}{50}\\,\\text{s}$.', '<strong>Sonuç: T = 0,02 s.</strong>'] }
      ]
    },
    's3-odraz-lom': {
      title: 'Işığın yansıması ve kırılması',
      summary: 'Yansıma yasası, kırılma indisi ve iki ortam arasındaki geçişte Snell yasası.',
      theory: [
        `<p><strong>Işığın yansıması</strong>: gelme açısı yansıma açısına eşittir. İki açı da yüzeyden değil, ara yüze dik olan <em>normalden</em> ölçülür. Işın 30° açıyla bir aynaya gelirse, normalden ölçülen gelme açısı $60^\\circ$'dir.</p>`,
        `<p><strong>Işığın kırılması</strong>: başka bir ortama geçerken ışığın hızı değişir ve ışın kırılır. Kırılma indisi $n = \\frac{c}{v}$'dir; burada $c = 3\\cdot 10^{8}\\,\\text{m/s}$ boşluktaki ışık hızı ve $v$ maddedeki hızdır. Büyük indis daha yavaş ışık demektir.</p>`,
        `<p><strong>Snell yasası</strong>: $n_1\\sin\\alpha = n_2\\sin\\beta$; burada $\\alpha$ gelme açısı ve $\\beta$ kırılma açısıdır, ikisi de normalden ölçülür. $n_2 > n_1$ ise ışın normale doğru kırılır, yani $\\beta < \\alpha$.</p>`,
        `<p>Işın neden kırılır: dalga cephesi yavaş ortamda bir taraftan diğerinden önce yavaşlar, bu da yayılma yönünü değiştirir. Dik gelişte yön değişmez.</p>`,
        { fig: "obr-odraz", caption: "Düz aynadan ışığın yansımasında yansıma yasası geçerlidir." }
      ],
      examples: [
        { task: 'Işık havadan, kırılma indisi $n = 1{,}5$ olan cama geçiyor. Camdaki ışık hızı nedir?',
          steps: ['$n=\\frac{c}{v}$, yani $v=\\frac{c}{n}$.', '$v=\\frac{3\\cdot 10^{8}}{1{,}5}=2\\cdot 10^{8}\\,\\text{m/s}$.', '<strong>Sonuç: 2·10⁸ m/s.</strong>'] },
        { task: 'Işın ara yüze dik geliyor. Kırılma açısı nedir?',
          steps: ['Dik gelme $\\alpha=0^\\circ$ demektir, yani $\\sin\\alpha=0$.', '$n_1\\cdot 0 = n_2\\sin\\beta$, yani $\\sin\\beta = 0$.', '<strong>Sonuç: $\\beta = 0^\\circ$, ışın yönünü değiştirmez.</strong>'] }
      ]
    },
    's3-sosovky': {
      title: 'Aynalar, mercekler ve görüntü oluşumu',
      summary: 'İnce mercek görüntü denklemi, görüntü uzaklığı ve büyütme.',
      theory: [
        `<p><strong>Odak uzaklığı</strong> $f$, odağın merkezden (veya aynanın tepe noktasından) uzaklığıdır. Yakınsak merceğin odak uzaklığı pozitiftir: ışınları odakta toplar.</p>`,
        `<p><strong>İnce merceğin görüntü denklemi</strong>: $\\frac{1}{f}=\\frac{1}{a}+\\frac{1}{b}$; burada $a$ cisim uzaklığı, $b$ görüntü uzaklığıdır. Cisim odak uzaklığının iki katından daha uzaktaysa görüntü gerçek, küçük ve terstir.</p>`,
        `<p><strong>Büyütme</strong>, görüntünün cisimden kaç kat büyük veya küçük olduğunu gösterir: $|k| = \\frac{b}{a}$. $|k| < 1$ ise görüntü küçülmüştür; $|k| > 1$ ise büyütülmüştür.</p>`,
        `<p><strong>Düz ayna</strong>, cisimle aynı büyüklükte ve aynanın arkasında cisim kadar uzakta bir sanal görüntü oluşturur. Görüntü denklemi küresel aynalar için de kullanılabilir; yalnızca uzaklıkların işaretleri farklı olur.</p>`,
        `<p>Neden böyledir: cismin bir noktasından çıkan ışınlar merceğin arkasında görüntü noktasında toplanır ve ışınların oluşturduğu benzer üçgenler bu bağıntıları verir.</p>`,
        { fig: "s1s4-sosovka-2f", caption: "Cisim odak uzaklığının iki katında olduğunda, merceğin diğer tarafında gerçek, ters ve aynı büyüklükte bir görüntü oluşur." }
      ],
      examples: [
        { task: 'Cisim, odak uzaklığı 10 cm olan yakınsak merceğin 30 cm önünde. Görüntü uzaklığı nedir?',
          steps: ['$\\frac{1}{b}=\\frac{1}{f}-\\frac{1}{a}=\\frac{1}{10}-\\frac{1}{30}=\\frac{2}{30}=\\frac{1}{15}$.', '$b = 15\\,\\text{cm}$.', '<strong>Sonuç: görüntü merceğin 15 cm arkasında oluşur.</strong>'] },
        { task: 'Cisim merceğin 30 cm önünde, görüntü ise arkasında 15 cm. Görüntü kaç kat küçüktür?',
          steps: ['$|k| = \\frac{b}{a} = \\frac{15}{30}$.', '<strong>Sonuç: |k| = 0,5, görüntü yarı boyuna küçülmüş.</strong>'] }
      ]
    },
    's4-interferencia': {
      title: 'Işığın dalga özellikleri: girişim ve kırınım',
      summary: 'Dalgaların bileşimi, çift yarıkta parlak ve karanlık saçaklar ve dalganın engel etrafında bükülmesi.',
      theory: [
        `<p>Işığın dalga özellikleri vardır. Görünür ışığın dalga boyu $\\lambda$ yaklaşık $380\\,\\text{nm}$ ile $750\\,\\text{nm}$ arasındadır. Dalgalar <strong>birleşebilir</strong> ve bu olaya girişim denir.</p>`,
        `<p><strong>Çift yarıkta girişim</strong>: dalgalar güçlenirse (yol farkı $\\lambda$'nın tam katıysa) <strong>parlak saçak</strong> oluşur. Birbirini yok ederlerse (yol farkı $\\left(k+\\frac{1}{2}\\right)\\lambda$ ise) <strong>karanlık saçak</strong> oluşur.</p>`,
        `<p>Yarıklardan $L$ uzaklıktaki ekrandaki parlak saçaklar için, yarık aralığı $d$ ile yaklaşık olarak $y_k = k\\,\\frac{\\lambda L}{d}$ geçerlidir; burada $k = 0, 1, 2, \\dots$ saçağın mertebesidir. Dalga boyu büyükse veya ekran daha uzaktaysa saçaklar birbirinden daha uzaktır.</p>`,
        `<p><strong>Kırınım</strong>, dalganın bir engelin etrafında veya dar bir yarıktan geçerken bükülmesidir. Engelin boyutu dalga boyuna yakınsa daha belirgindir. Bu nedenle ses, odanın köşesini ışıktan daha iyi dolanır.</p>`,
        { fig: "s1s4-interferencia", caption: "Parlak saçaklar yol farkının λ'nın tam sayı katı olduğu yönlerde oluşur: y_k = k·λL/d." }
      ],
      examples: [
        { task: 'Yarıklar arası $d = 0{,}5\\,\\text{mm}$, ışığın dalga boyu $\\lambda = 500\\,\\text{nm}$ ve ekran $L = 1\\,\\text{m}$ uzakta. Birinci parlak saçağın ($k=1$) uzaklığı nedir?',
          steps: ['$y_1 = \\frac{\\lambda L}{d}=\\frac{500\\cdot 10^{-9}\\cdot 1}{0{,}5\\cdot 10^{-3}}\\,\\text{m}$.',
            '$y_1 = 10^{-3}\\,\\text{m}=1\\,\\text{mm}$.',
            '<strong>Sonuç: merkezden 1 mm.</strong>'] },
        { task: 'Aynı düzenekte hangisi daha geniş saçaklar verir: 400 nm mi, yoksa 700 nm mi?',
          steps: ['Saçakların uzaklığı $y_k$, $\\lambda$ ile orantılıdır.', '<strong>Daha geniş saçaklar 700 nm verir.</strong>'] }
      ]
    },
    's4-ziarenie': {
      title: 'Elektromanyetik ışıma ve spektrumlar',
      summary: 'Dalga boyu, frekans ve foton enerjisi; çizgi ve sürekli spektrumlar.',
      theory: [
        `<p>Elektromanyetik ışıma, boşlukta $c = 3\\cdot 10^{8}\\,\\text{m/s}$ hızla yayılan dalgalardır. Dalga boyu ile frekans $c = \\lambda f$ bağıntısıyla ilişkilidir. Radyo dalgaları, mikrodalgalar, kızılötesi, görünür ışık, morötesi, X ışınları ve gama ışınları aynı olgunun yalnızca farklı parçalarıdır.</p>`,
        `<p><strong>Foton enerjisi</strong>: ışık kuantumlar, yani fotonlar hâlinde yayılır ve soğurulur. Fotonun enerjisi $E = h f = \\frac{h c}{\\lambda}$'dir; burada $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$. Atomik hesaplarda elektronvolt birimi ($1\\,\\text{eV} \\approx 1{,}6\\cdot 10^{-19}\\,\\text{J}$) ve $hc \\approx 1240\\,\\text{eV·nm}$ bağıntısı kullanışlıdır.</p>`,
        `<p><strong>Spektrumlar</strong>: kızgın katılar sürekli spektrum yayar, seyrek gazlar ise çizgi spektrumu yayar. Her elementin kendine özgü çizgileri vardır; bu nedenle spektrumlar yıldızların kimyasal bileşimini belirlemek için kullanılır.</p>`,
        `<p>Spektrumlar neden çizgiseldir: atomların enerji düzeyleri kesiklidir, bu yüzden atom yalnızca iki düzey arasındaki enerji farkına eşit enerjili fotonları yayar ya da soğurur. Fotonun enerjisi büyüdükçe dalga boyu kısalır.</p>`,
        { fig: "s1s4-spektrum", caption: "Elektromanyetik ışıma farklı dalga boylarına sahip tek bir olgudur. Görünür ışık ise yalnızca dar bir şerittir." }
      ],
      examples: [
        { task: 'Fotonun dalga boyu $248\\,\\text{nm}$. Enerjisi elektronvolt cinsinden nedir?',
          steps: ['$E=\\frac{hc}{\\lambda}\\approx\\frac{1240\\,\\text{eV·nm}}{248\\,\\text{nm}}$.', '<strong>Sonuç: E = 5 eV.</strong>'] },
        { task: 'Işığın frekansı $6\\cdot 10^{14}\\,\\text{Hz}$. Dalga boyu nedir?',
          steps: ['$\\lambda=\\frac{c}{f}=\\frac{3\\cdot 10^{8}}{6\\cdot 10^{14}}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Sonuç: 500 nm.</strong>'] }
      ]
    },
    's4-atom': {
      title: 'Atom modelleri ve kuantum olguları',
      summary: "Bohr'un hidrojen modeli: kuantumlanmış düzeyler ve düzeyler arası geçişte foton enerjisi.",
      theory: [
        `<p>Rutherford modeline göre atomun küçük, pozitif bir çekirdeği vardır ve etrafında elektronlar dolanır. Ancak klasik fiziğe göre çekirdek etrafında dolanan bir elektron sürekli ışıma yapmalı ve çekirdeğe düşmelidir; bu ise olmaz. Bu nedenle Bohr modeli, elektronun enerji yaymadığı <strong>kuantumlanmış düzeyleri</strong> ortaya koydu.</p>`,
        `<p>Hidrojen atomundaki elektronun enerjisi kuantumludur: $E_n = -\\frac{13{,}6\\,\\text{eV}}{n^2}$, burada $n = 1, 2, 3, \\dots$ baş kuantum sayısıdır. $n$ büyüdükçe elektron daha zayıf bağlıdır ve enerjisi sıfıra yaklaşır.</p>`,
        `<p><strong>Düzeyler arası geçiş</strong>: yüksek $n_i$ düzeyinden düşük $n_f$ düzeyine geçerken atom, enerjisi $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\frac{1}{n_f^2}-\\frac{1}{n_i^2}\\right)$ olan bir foton yayar. Ters geçiş aynı enerjili bir fotonu soğurur.</p>`,
        `<p>Neden böyledir: yayılan ışığın dalga boyu düzey farkına karşılık gelir, bu nedenle hidrojen yalnızca çizgi spektrumu yayar. Benzer şekilde fotoelektrik olay, ışığın enerjiyi kuantumlar hâlinde taşıdığını ve dolayısıyla parçacık özelliklerine de sahip olduğunu gösterir.</p>`,
        { fig: "obr-atom", caption: "Atomun basitleştirilmiş modeli: pozitif bir çekirdek ve onun çevresinde yörüngelerde elektronlar." }
      ],
      examples: [
        { task: 'Hidrojen atomundaki elektron $n=3$ düzeyinden $n=2$ düzeyine geçiyor. Yaydığı enerji nedir?',
          steps: ['$\\Delta E = 13{,}6\\left(\\frac{1}{2^2}-\\frac{1}{3^2}\\right)\\,\\text{eV}$.',
            '$\\frac{1}{4}-\\frac{1}{9}=\\frac{5}{36}$, yani $\\Delta E = 13{,}6\\cdot\\frac{5}{36}\\approx 1{,}89\\,\\text{eV}$.',
            '<strong>Sonuç: yaklaşık 1,89 eV.</strong>'] },
        { task: '$n=1$ düzeyindeki elektronun enerjisi nedir?',
          steps: ['$E_1=-\\frac{13{,}6}{1^2}\\,\\text{eV}$.', '<strong>Sonuç: E₁ = −13,6 eV.</strong>'] }
      ]
    },
    's4-radioaktivita': {
      title: 'Radyoaktivite ve nükleer tepkimeler',
      summary: 'Çekirdek bozunumu, yarılanma süresi ve nükleer tepkime yazımı.',
      theory: [
        `<p><strong>Radyoaktivite</strong>, kararsız çekirdeklerin kendiliğinden bozunmasıdır. Bozunmada ışınlar oluşur: $\\alpha$ (helyum çekirdekleri), $\\beta$ (elektronlar veya pozitronlar) ve $\\gamma$ (yüksek enerjili fotonlar). Tek bir çekirdeğin bozunması rastgeledir, ama çok sayıda çekirdekte davranış öngörülebilir olur.</p>`,
        `<p><strong>Yarılanma süresi</strong> $T_{1/2}$, başlangıçtaki çekirdeklerin yarısının bozunduğu süredir. $t$ süre sonra bozunmamış çekirdek sayısı $N = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$'dir.</p>`,
        `<p>Azalma neden geometriktir: her yarılanma süresinde miktar aynı değerde değil, yarıya iner. İlk yarılanma süresinden sonra yarısı, ikincisinden sonra dörtte biri kalır. Aktivite $A = \\lambda N$ saniyedeki bozunma sayısını verir (birimi becquerel, $\\text{Bq}$).</p>`,
        `<p><strong>Nükleer tepkimeler</strong>, kütle numarası (üst indis) ve atom numarası (alt indis) bilançosuyla yazılır: sol taraftaki toplam sağ taraftaki toplama eşittir.</p>`,
        { fig: "s1s4-polcas-rozpadu", caption: "Her yarılanma süresinden sonra bozunmamış çekirdek sayısı yarıya düşer: azalma geometriktir, doğrusal değildir." }
      ],
      examples: [
        { task: 'Radyoaktif bir elementin yarılanma süresi 4 gün. 8 gün sonra başlangıç miktarının yüzde kaçı kalır?',
          steps: ['8 günde $\\frac{8}{4}=2$ yarılanma süresi geçer.', "Miktarın $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$'ü kalır.", '<strong>Sonuç: %25.</strong>'] },
        { task: "Uranyum $^{238}_{92}\\text{U}$ çekirdeği alfa bozunmasına uğruyor. Yeni çekirdeğin kütle numarası ve atom numarası nedir?",
          steps: ["Alfa parçacığı $^{4}_{2}\\text{He}$'dir; 4 nükleon ve 2 proton taşır.", '$238-4=234$, $92-2=90$.', '<strong>Sonuç: $^{234}_{90}\\text{Th}$ (toryum).</strong>'] }
      ]
    },
    's4-jadro': {
      title: 'Çekirdek bölünmesi ve füzyon',
      summary: 'Ağır çekirdeklerin bölünmesinde ve hafif çekirdeklerin füzyonunda kütle kaybı ve açığa çıkan enerji.',
      theory: [
        `<p>Bir çekirdeğin kütlesi, nükleonlarının kütleleri toplamından daha küçüktür. Bu fark <strong>kütle kaybı</strong> $\\Delta m$'dir ve Einstein bağıntısına göre $\\Delta E = \\Delta m\\,c^2$ bağlanma enerjisine karşılık gelir.</p>`,
        `<p>Kütleyi atomik kütle birimi ($1\\,\\text{u}$) cinsinden ölçersek pratik bir bağıntı geçerlidir: $1\\,\\text{u}$'luk kütle kaybı yaklaşık $931{,}5\\,\\text{MeV}$ enerjiye karşılık gelir.</p>`,
        `<p><strong>Bölünme (fisyon)</strong>: ağır bir çekirdek (örneğin uranyum-235) iki orta ağırlıkta çekirdeğe bölünür ve enerji açığa çıkar. <strong>Füzyon</strong>: hafif çekirdekler birleşerek daha ağır bir çekirdek oluşturur ve yine enerji açığa çıkar. Güneş, hidrojenin helyuma füzyonuyla enerji elde eder.</p>`,
        `<p>Enerji neden açığa çıkar: çekirdekler en sıkı bağlı olduğu yer demirin çevresindedir. Ağır çekirdeğin bölünmesiyle ya da hafif çekirdeklerin birleşmesiyle demire doğru hareket edilirse bağlanma enerjileri arasındaki fark açığa çıkar.</p>`,
        { fig: "s1s4-vazbova-energia", caption: "Nükleon başına bağlanma enerjisi demir çevresinde en büyüktür; bu nedenle hem ağır çekirdeklerin bölünmesi hem de hafif çekirdeklerin füzyonu enerji açığa çıkarır." }
      ],
      examples: [
        { task: 'Bir proseste kütle kaybı $\\Delta m = 0{,}2\\,\\text{u}$. Kaç MeV enerji açığa çıkar?',
          steps: ['$\\Delta E = \\Delta m\\cdot 931{,}5\\,\\text{MeV/u}=0{,}2\\cdot 931{,}5\\,\\text{MeV}$.', '<strong>Sonuç: yaklaşık 186 MeV.</strong>'] },
        { task: "D + T → He + n tepkimesinde tepkimeden önce kütlelerin toplamı 5,0301 u, sonra 5,0113 u'dur. Kaç MeV açığa çıkar?",
          steps: ['$\\Delta m = 5{,}0301-5{,}0113=0{,}0188\\,\\text{u}$.', '$\\Delta E = 0{,}0188\\cdot 931{,}5\\approx 17{,}5\\,\\text{MeV}$.', '<strong>Sonuç: yaklaşık 17,5 MeV.</strong>'] }
      ]
    },
    's4-astrofyzika': {
      title: 'Astrofiziğin ve kozmolojinin temelleri',
      summary: 'Yıldızların paralaksla uzaklığı, Hubble yasası ve Wien ışıma yasası.',
      theory: [
        `<p><strong>Evrendeki uzaklıklar</strong> ışık yılı veya parsek ile ölçülür: $1\\,\\text{pc}\\approx 3{,}26\\,\\text{ly}$. <strong>Paralaks</strong> durumunda Dünya Güneş'in etrafında dolanırken bir yıldız gökyüzünde uzak yıldızlara göre kaymış görünür. Parsek cinsinden uzaklık $d = \\frac{1}{p}$'dir; burada $p$ yıllık paralaks, yay saniyesi cinsindendir.</p>`,
        `<p><strong>Hubble yasası</strong>: uzak galaksiler bizden $v = H_0\\,d$ hızıyla uzaklaşır; burada $H_0 \\approx 70\\,\\text{km/(s·Mpc)}$'dir. Galaksi ne kadar uzaksa o kadar hızlı uzaklaşır. Bu, evrenin genişlediğinin kanıtıdır.</p>`,
        `<p><strong>Wien yasası</strong>: yıldızın yüzey sıcaklığı, en güçlü ışıdığı dalga boyunu belirler: $\\lambda_{max} = \\frac{b}{T}$, burada $b \\approx 2{,}9\\cdot 10^{-3}\\,\\text{m·K}$'dir. Daha soğuk yıldızlar kırmızıya, daha sıcak olanlar maviye doğru ışır.</p>`,
        `<p>Neden işe yarar: paralaks Dünya–Güneş–yıldız üçgeninin geometrisidir ve Hubble, spektrum çizgilerinin kırmızıya kayma miktarının uzaklıkla arttığını buldu. İki ölçümden de uzaklıkları ve evrenin yaşını tahmin edebiliriz.</p>`,
        { fig: "s1s4-paralaxa", caption: "Paralaks: Dünya'nın yörüngesinin iki noktasından bakıldığında yıldız, daha uzak yıldızlara göre kaymış görünür. Parsek cinsinden uzaklık d = 1/p'dir." }
      ],
      examples: [
        { task: 'Bir galaksi bizden $3500\\,\\text{km/s}$ hızla uzaklaşıyor. $H_0 = 70\\,\\text{km/(s·Mpc)}$ ise uzaklığı nedir?',
          steps: ['$d=\\frac{v}{H_0}=\\frac{3500}{70}\\,\\text{Mpc}$.', '<strong>Sonuç: 50 Mpc.</strong>'] },
        { task: 'Bir yıldızın yüzey sıcaklığı $5800\\,\\text{K}$. En güçlü hangi dalga boyunda ışır?',
          steps: ['$\\lambda_{max}=\\frac{2{,}9\\cdot 10^{-3}}{5800}\\,\\text{m}=5\\cdot 10^{-7}\\,\\text{m}$.', '<strong>Sonuç: 500 nm (yeşil bölge).</strong>'] }
      ]
    },
    's4-opakovanie': {
      title: 'Mekanik, elektrik ve diğer konuların tekrarı',
      summary: 'Mekanik ve elektrikteki temel formülleri tekrar et ve birimleri kontrol et.',
      theory: [
        `<p>Tekrar, ayrı ayrı öğrendiğin şeyleri bir araya getirir. Mekanik: $F = m\\,a$, $E_k = \\frac{1}{2}m v^2$, $W = F\\,s$, $P = \\frac{W}{t}$. Elektrik: $I = \\frac{Q}{t}$, $U = R\\,I$, $P = U\\,I$. Her zaman önce verilenleri ve istenenleri belirle, sonra formülü seç.</p>`,
        `<p><strong>Birim kontrolü:</strong> kuvvet newton cinsinden ($\\text{N} = \\text{kg·m/s}^2$), enerji joule cinsinden, gerilim volt cinsinden olmalıdır. İki tarafın birimleri tutmuyorsa hata işlemdedir.</p>`,
        `<p><strong>Sık yapılan hatalar:</strong> kinetik enerjide $\\frac{1}{2}$'yi ve hızın karesini unutma; km/h değerini $3{,}6$'ya bölerek m/s'ye çevir; paralel bağlamada dirençlerin ters değerlerini topla.</p>`,
        `<p>Bu neden yardımcı olur: fizik tek bir yasalar sistemidir. Enerji alanlar arasında korunur; örneğin elektrik enerjisi motorda mekanik enerjiye dönüşür, bu nedenle aynı düşünce her yerde işe yarar.</p>`
      ],
      examples: [
        { task: 'Kütlesi 1000 kg olan bir otomobil 20 m/s hızla gidiyor. Kinetik enerjisi nedir?',
          steps: ['$E_k=\\frac{1}{2}m v^2=\\frac{1}{2}\\cdot 1000\\cdot 20^2$.', '$=\\frac{1}{2}\\cdot 1000\\cdot 400=200\\,000\\,\\text{J}$.', '<strong>Sonuç: 200 kJ.</strong>'] },
        { task: 'Gerilimi 12 V, direnci 4 Ω olan bir tüketiciden hangi akım geçer?',
          steps: ['$I=\\frac{U}{R}=\\frac{12}{4}$.', '<strong>Sonuç: 3 A.</strong>'] }
      ]
    },
    's4-maturita': {
      title: 'Olgunluk sınavına hazırlık, özellikle fiziği seçen öğrenciler için',
      summary: 'Problem çözme adımları, birimler, sonucun tahmini ve yuvarlama.',
      theory: [
        `<p>Fizik olgunluk sınavında en çok puan, <strong>yanlış birimler</strong> ve kontrol etmeden yerine koymadan kaybedilir. İşe yarayan yol şudur: verilen büyüklükleri yaz, istenen büyüklüğü yaz, formülü seç, birimleri SI'ya çevir ve ancak ondan sonra hesapla.</p>`,
        `<ol><li>Verilen ve istenen büyüklükleri yaz.</li><li>Formülü seç ve bu olay için geçerli olup olmadığını kontrol et.</li><li>Birimleri SI'ya çevir.</li>
       <li>Hesapla ve yuvarlamayı en sonda yap.</li><li>Birimi ve sonucun büyüklük mertebesini kontrol et.</li></ol>`,
        `<p><strong>Sonucun kontrolü:</strong> büyüklük mertebesinin mantıklı olup olmadığına (bir arabanın hızı $10^{6}\\,\\text{m/s}$ olamaz), işaretin doğru olup olmadığına ve sonucun doğru birime ait olup olmadığına bak. Hesaptan önce yapılan hızlı bir tahmin, ondalık virgül hatalarından seni korur.</p>`,
        `<p><strong>Yuvarlama:</strong> hesabı tam hassasiyetle yap ve yuvarlamayı yalnızca en sonda, verilen değerlerin anlamlı basamak sayısına göre yap (genellikle 2 veya 3). Ara adımlarda yuvarlamak sonucu kaydırır.</p>`,
        `<p>Bu neden işe yarar: olgunluk sınavı yalnızca sayıyı değil, düşünme biçimini değerlendirir. Doğru birimler ve kontrol, küçük bir hesap hatası yapsanız bile anlayışı gösterir.</p>`
      ],
      examples: [
        { task: 'Kütlesi 2 kg olan bir cismin hızı 36 km/h. Kinetik enerjisi nedir?',
          steps: ['Birimleri çevir: $v = 36\\,\\text{km/h}=10\\,\\text{m/s}$.', '$E_k=\\frac{1}{2}mv^2=\\frac{1}{2}\\cdot 2\\cdot 10^2=100\\,\\text{J}$.', '<strong>Sonuç: 100 J.</strong>'] },
        { task: '$500\\,\\text{N}$ kuvvet $25\\,\\text{cm}^2$ alana etki ediyor. kPa cinsinden hangi basınç oluşur?',
          steps: ['Alanı çevir: $S=25\\,\\text{cm}^2=25\\cdot 10^{-4}\\,\\text{m}^2$.', '$p=\\frac{F}{S}=\\frac{500}{25\\cdot 10^{-4}}\\,\\text{Pa}=2\\cdot 10^{5}\\,\\text{Pa}$.', '<strong>Sonuç: 200 kPa.</strong>'] }
      ]
    }
  }
});
