/* Turkish: lessons of levels v5–v8 (js/rocniky/v5.js, v6.js, v7.js, v8.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('tr', {
  lessons: {
    'v5-dualizmus': {
      title: 'Dalga-parçacık ikiliği',
      summary: 'Işık ve parçacıklar hem dalga hem de parçacık gibi davranır; de Broglie dalga boyu.',
      theory: [
        `<p>Fotoelektrik olay ve Compton olayı, ışığın $E=h\\,f$ enerjili parçacıklar akımı (fotonlar) gibi davrandığını gösterdi. Girişim ve kırınım ise dalga özelliklerini ortaya koyar. Buna <strong>dalga-parçacık ikiliği</strong> diyoruz: her kuantum nesnesi iki özelliğe de sahiptir, ancak belirli bir ölçümde bunlardan yalnızca biri ortaya çıkar.</p>`,
        `<p>Louis de Broglie, $p$ momentumuna sahip parçacıkların da $\\lambda=\\frac{h}{p}$ dalga boyuna sahip olduğunu öne sürdü. Hızı $v$ olan serbest bir elektron için (relativistik olmayan yaklaşımda) $p=m_e\\,v$ geçerlidir. Parçacık ne kadar ağır veya hızlı ise dalga boyu o kadar kısadır.</p>`,
        `<p>Bu nedenle makroskopik cisimlerin (örneğin bir topun) dalga boyu gözlemlenemeyecek kadar küçüktür; kristaldeki elektronlar ise X ışınlarınkine benzer bir kırınım deseni oluşturur. $h=6{,}63\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ sabiti, kuantum etkilerinin nerede ortaya çıktığını belirler.</p>`,
        { fig: 'v5v8-dualizmus', caption: 'De Broglie dalga boyu λ = h/p: momentum ne kadar büyükse dalga o kadar kısadır.' }
      ],
      examples: [
        { task: 'Bir elektron $v=2\\cdot 10^{6}\\,\\text{m/s}$ hızla hareket etmektedir. De Broglie dalga boyu nedir? $m_e=9{,}11\\cdot 10^{-31}\\,\\text{kg}$ değerini kullan.',
          steps: ['$p=m_e v=9{,}11\\cdot 10^{-31}\\cdot 2\\cdot 10^{6}$.', '$\\lambda=\\frac{h}{p}=\\frac{6{,}63\\cdot 10^{-34}}{1{,}82\\cdot 10^{-24}}\\approx 3{,}6\\cdot 10^{-10}\\,\\text{m}$.', '<strong>Sonuç: $\\lambda\\approx 0{,}36\\,\\text{nm}$</strong>'] }
      ]
    },
    'v5-vlnova-funkcia': {
      title: 'Dalga fonksiyonu ve olasılık',
      summary: 'Dalga fonksiyonu ψ, olasılık yoğunluğu |ψ|² ve bir aralık için olasılığın hesabı.',
      theory: [
        `<p>Kuantum parçacığının durumu <strong>dalga fonksiyonu</strong> $\\psi(x,t)$ ile tanımlanır. Kendi başına ölçülebilir değildir. Karesi $|\\psi|^2$ ise <strong>olasılık yoğunluğudur</strong>: parçacığın $x$ noktasının küçük bir komşuluğunda bulunma olasılığı $|\\psi|^2\\,dx$ tir.</p>`,
        `<p>Parçacığın sonlu bir $[x_1,x_2]$ aralığında bulunma olasılığı $P=\\int_{x_1}^{x_2}|\\psi|^2\\,dx$ integraline eşittir. Toplam olasılık 1 olduğundan $\\int|\\psi|^2\\,dx=1$ dir. Böyle bir fonksiyona normalize edilmiş denir.</p>`,
        `<p>Bu nedenle kuantum mekaniği, tek bir parçacık için kesin değerleri değil, yalnızca ölçüm sonuçlarının <em>olasılıklarını</em> verir. Yoğunluk düzgün ise olasılık, aralığın uzunluğunun tüm bölgenin uzunluğuna oranına eşittir.</p>`,
        { fig: 'v5v8-pravdepodobnost', caption: 'Düzgün |ψ|² yoğunluğunda olasılık aralığın uzunluğuyla orantılıdır: P = a/L.' }
      ],
      examples: [
        { task: 'Bir parçacık uzunluğu $L=20\\,\\text{nm}$ olan bir doğru parçası üzerinde eşit yoğunlukla dağılmıştır. Parçacığın $0$ ile $5\\,\\text{nm}$ arasındaki aralıkta bulunma olasılığı nedir?',
          steps: ['Yoğunluk sabittir, $|\\psi|^2=\\frac{1}{L}$.', '$P=\\frac{5}{20}=\\frac{1}{4}$.', '<strong>Sonuç: $P=0{,}25$</strong>'] }
      ]
    },
    'v5-schrodinger': {
      title: 'Schrödinger denklemi',
      summary: 'Zamandan bağımsız Schrödinger denklemi ve sonsuz derin bir kuyudaki parçacığın enerjileri.',
      theory: [
        `<p><strong>Schrödinger denklemi</strong> dalga fonksiyonunun zamanla değişimini tanımlar. Zamandan bağımsız biçimi $\\hat{H}\\psi=E\\psi$, durağan durumlar için enerjinin $E$ sabit olduğunu ve dalga fonksiyonunun enerji operatörü $\\hat{H}$ nin özfonksiyonu olduğunu söyler.</p>`,
        `<p>Genişliği $L$ olan <strong>sonsuz derin potansiyel kuyusundaki</strong> bir parçacığı düşünelim. Dalga fonksiyonu kuyunun kenarlarında sıfır olmalıdır; bu nedenle kuyuya yalnızca dalga boyunun yarısının tam sayı katı sığar. Sonuçta ayrık enerjiler elde edilir: $E_n=\\frac{n^2 h^2}{8 m L^2}$, burada $n=1,2,3,\\dots$</p>`,
        `<p>Enerji, $n$ nin karesiyle artar ve kuyu genişliğinin karesiyle azalır. Bu nedenle genişliği $1\\,\\text{nm}$ olan kuyudaki bir elektron için en düşük enerji $E_1=0{,}376\\,\\text{eV}$ tur; daha geniş bir kuyuda ise enerji seviyeleri birbirine daha yakındır.</p>`,
        { fig: 'v5v8-jama', caption: 'Sonsuz derin kuyudaki parçacığın yalnızca ayrık enerji seviyeleri vardır; enerji n² ile artar.' }
      ],
      examples: [
        { task: 'Bir elektron genişliği $L=1\\,\\text{nm}$ olan bir kuyuda $n=2$ durumundadır. Enerjisi nedir? $n=1$ için $E_1=0{,}376\\,\\text{eV}$ tur.',
          steps: ['$E_n=E_1\\cdot\\frac{n^2}{L^2}$, $L$ nanometre cinsinden.', '$E_2=0{,}376\\cdot 4=1{,}504\\,\\text{eV}$.', '<strong>Sonuç: $E_2\\approx 1{,}5\\,\\text{eV}$</strong>'] }
      ]
    },
    'v5-operatory': {
      title: 'Operatörler ve gözlemlenebilir büyüklükler',
      summary: 'Kuantum mekaniğinde operatörler; ölçüm sonuçları olarak özfonksiyonlar ve özdeğerler.',
      theory: [
        `<p>Her fiziksel büyüklüğe ($x$, momentum, enerji) bir <strong>operatör</strong> karşılık gelir; yani bir fonksiyonu başka bir fonksiyona dönüştüren bir kuraldır. Örneğin momentuma $\\hat{p}=-i\\hbar\\,\\frac{d}{dx}$, enerjiye ise Hamilton operatörü $\\hat{H}$ karşılık gelir.</p>`,
        `<p>Eğer $\\hat{A}$ operatörü bir $\\psi$ fonksiyonuna $\\hat{A}\\psi=a\\,\\psi$ olacak şekilde etki ediyorsa, $\\psi$ bir <strong>özfonksiyon</strong>, $a$ sayısı ise bir <strong>özdeğerdir</strong>. $A$ büyüklüğünün ölçümü her zaman özdeğerlerinden birini verir; ölçüm sonrasında durum karşılık gelen özfonksiyona dönüşür.</p>`,
        `<p>Gözlemlenebilir büyüklüklerin özdeğerleri reeldir, çünkü operatörleri hermityendir. Bu nedenle ölçüm sonuçları her zaman reel sayılardır.</p>`
      ],
      examples: [
        { task: 'Operatör $\\hat{D}=\\frac{d}{dx}$, $\\psi=e^{3x}$ fonksiyonuna etki ediyor. Özdeğer nedir?',
          steps: ['$\\frac{d}{dx}e^{3x}=3\\,e^{3x}$.', 'Buradan $\\hat{D}\\psi=3\\psi$ elde edilir.', '<strong>Sonuç: özdeğer $3$ tür</strong>'] }
      ]
    },
    'v5-kvantovanie': {
      title: 'Enerjinin kuantlanması',
      summary: 'Bağlı bir parçacığın neden yalnızca ayrık enerjilere sahip olduğu; harmonik osilatör örneği.',
      theory: [
        `<p>Parçacık <strong>bağlıysa</strong> (örneğin bir kuyuda veya salınan bir sistemde) dalga fonksiyonu bölgenin kenarlarında sıfır olmalıdır. Bu koşul mümkün enerjileri <strong>ayrık seviyelerle</strong> sınırlar. Serbest bir parçacığın ise sürekli enerjileri vardır.</p>`,
        `<p>Kuantum harmonik osilatörün seviyeleri $E_n=\\left(n+\\tfrac{1}{2}\\right)\\hbar\\omega$ dir; burada $n=0,1,2,\\dots$ ve $\\omega$ açısal frekanstır. Komşu seviyeler birbirinden eşit aralıklarla, $\\hbar\\omega$ kadar uzaktadır.</p>`,
        `<p>En düşük seviye ($n=0$) sıfır enerjili değil, $\\frac{1}{2}\\hbar\\omega$ enerjilidir. Bu sıfır noktası enerjisi belirsizlik ilkesinin bir sonucudur: parçacık aynı anda tek bir noktada durgun olamaz.</p>`,
        { fig: 'v5v8-oscilator', caption: 'Osilatörün seviyeleri eşit aralıklıdır; en düşük seviye sıfır değil, ½ħω değerindedir.' }
      ],
      examples: [
        { task: 'Osilatörün $n=3$ durumundaki enerjisi, $\\hbar\\omega$ birimlerinde nedir?',
          steps: ['$E_3=\\left(3+\\tfrac{1}{2}\\right)\\hbar\\omega$.', '<strong>Sonuç: $E_3=3{,}5\\,\\hbar\\omega$</strong>'] }
      ]
    },
    'v5-spin': {
      title: 'Açısal momentum ve spin',
      summary: 'Yörünge açısal momentumu, kuantum sayısı l, durum sayısı ve elektronun spini.',
      theory: [
        `<p>Bir atomdaki elektronun yörünge açısal momentumu kuantlanmıştır: büyüklüğü $|\\vec{L}|=\\sqrt{l(l+1)}\\,\\hbar$ dir; burada $l=0,1,2,\\dots$ <strong>yörünge kuantum sayısıdır</strong>. Seçilen eksen üzerindeki izdüşümü $L_z=m_l\\hbar$ değerlerini alabilir.</p>`,
        `<p>Manyetik kuantum sayısı $m_l$, $-l$ ile $+l$ arasındaki değerleri (sıfır dahil) alır; bu nedenle verilen $l$ için tam olarak $2l+1$ olası durum vardır. $l=0$ için bir, $l=1$ için üç durum vardır.</p>`,
        `<p><strong>Spin</strong>, elektronun iç açısal momentumudur ve dönen bir topun klasik görüntüsüne sahip değildir. Elektronun spin kuantum sayısı $s=\\tfrac{1}{2}$ dir, bu nedenle iki olası yönelim vardır. Yörünge momentumuyla birlikte atom seviyelerinin yapısını belirler.</p>`,
        { fig: 'v5v8-moment', caption: 'Manyetik kuantum sayısı m_l, −l den +l ye kadar 2l + 1 değer alır.' }
      ],
      examples: [
        { task: 'Elektronun yörünge kuantum sayısı $l=2$ dir. $m_l$ için kaç farklı değer mümkündür?',
          steps: ['$m_l$ değerleri $-2$ den $+2$ ye kadar gider: $-2,-1,0,1,2$.', '<strong>Sonuç: $2l+1=5$ değer</strong>'] }
      ]
    },
    'v5-vodik': {
      title: 'Hidrojen atomu ve kuantum durumları',
      summary: 'Hidrojen atomunun enerji seviyeleri ve bu seviyeler arasındaki geçişte fotonun enerjisi.',
      theory: [
        `<p>Hidrojen atomundaki elektronun enerjileri $E_n=-\\frac{13{,}6\\,\\text{eV}}{n^2}$ dir; burada $n=1,2,3,\\dots$ baş kuantum sayısıdır. Eksi işareti elektronun bağlı olduğunu gösterir; $n\\to\\infty$ için enerji sıfıra yaklaşır.</p>`,
        `<p>Elektron daha yüksek $n_i$ seviyesinden daha düşük $n_f$ seviyesine geçtiğinde atom, mutlak değer olarak $E_f=E_{n_i}-E_{n_f}$ enerjili bir foton yayar. Foton soğurulduğunda durum tersinedir. Bu nedenle hidrojenin spektrumu sürekli bir bant değil, çizgilerden oluşur.</p>`,
        `<p>En önemlisi, görünür ışık bölgesinde yer alan $n_f=2$ seviyesine geçişlerden oluşan seridir (Balmer serisi). $n_f=1$ seviyesine geçişler ise morötesi ışınım verir.</p>`,
        { fig: 'v5v8-vodik', caption: 'Daha düşük bir seviyeye geçen atom, seviyeler arasındaki farka eşit enerjili bir foton yayar.' }
      ],
      examples: [
        { task: 'Hidrojen atomundaki bir elektron $n=3$ ten $n=2$ ye geçiyor. Yayılan fotonun enerjisi nedir?',
          steps: ['$E_3=-\\frac{13{,}6}{9}\\approx -1{,}51\\,\\text{eV}$ ve $E_2=-\\frac{13{,}6}{4}=-3{,}40\\,\\text{eV}$.', '$\\Delta E=|E_2-E_3|\\approx 1{,}89\\,\\text{eV}$.', '<strong>Sonuç: $\\Delta E\\approx 1{,}89\\,\\text{eV}$</strong>'] }
      ]
    },
    'v5-neurcitost': {
      title: 'Tünelleme ve belirsizlik ilkesi',
      summary: 'Heisenberg belirsizlik ilkesi ve klasik olarak aşılamayan bir bariyerden tünelleme.',
      theory: [
        `<p><strong>Heisenberg belirsizlik ilkesi</strong>, bir parçacığın konumu ile momentumunun aynı anda keyfi kesinlikte belirlenemeyeceğini söyler: $\\Delta x\\,\\Delta p\\geq\\frac{\\hbar}{2}$. Bu, ölçüm tekniğinin eksikliği değil, dalgaların bir özelliğidir. Konumu ne kadar kesin biliyorsak, momentumdaki belirsizlik o kadar büyüktür.</p>`,
        `<p><strong>Tünelleme</strong>, bir parçacığın yeterli enerjiye sahip olmadığı için klasik olarak aşamayacağı bir potansiyel bariyerden geçmesi demektir. Dalga fonksiyonu bariyer içinde üstel olarak azalır, ancak sıfıra inmez; bariyerin diğer tarafında parçacığı bulma olasılığı sıfırdan farklıdır.</p>`,
        `<p>Tünelleme; alfa radyoaktif bozunmayı, tünelleme mikroskobunun çalışmasını ve bazı yarı iletken elemanlardaki elektrik akımını açıklar.</p>`,
        { fig: 'v5v8-tunel', caption: 'Enerjisi bariyer yüksekliğinden küçük olan parçacığın bariyerin içinde üstel olarak azalan bir dalgası vardır ve bariyeri delip geçebilir.' }
      ],
      examples: [
        { task: 'Elektronun konumu $\\Delta x=1\\,\\text{pm}$ belirsizlikle bilinmektedir. Momentumunun en küçük belirsizliği nedir? $\\hbar=1{,}0546\\cdot 10^{-34}\\,\\text{J}\\,\\text{s}$ değerini kullan.',
          steps: ['$\\Delta p_{\\min}=\\frac{\\hbar}{2\\,\\Delta x}=\\frac{1{,}0546\\cdot 10^{-34}}{2\\cdot 10^{-12}}$.', '$\\Delta p_{\\min}\\approx 5{,}27\\cdot 10^{-23}\\,\\text{kg}\\,\\text{m/s}$.', '<strong>Sonuç: $\\Delta p_{\\min}\\approx 52{,}7\\cdot 10^{-24}\\,\\text{kg}\\,\\text{m/s}$</strong>'] }
      ]
    },
    'v6-specialna': {
      title: 'Özel görelilik kuramı',
      summary: 'İki postülat, zaman genleşmesi ve Lorentz faktörü.',
      theory: [
        `<p>Özel görelilik kuramı iki postülata dayanır: (1) fizik yasaları tüm eylemsiz referans sistemlerinde aynıdır, (2) boşlukta ışık hızı $c\\approx 3\\cdot 10^{8}\\,\\text{m/s}$, kaynağın hareketinden bağımsız olarak her gözlemci için aynıdır.</p>`,
        `<p>İkinci postülattan zamanın mutlak olmadığı sonucu çıkar. Hareket eden saatler yavaş işler: hareket ettikleri sistemde ölçülen $\\Delta t$ aralığı, saatin kendi durgun sistemindeki öz zamanı $\\Delta t_0$ dan uzundur. $\\Delta t=\\gamma\\,\\Delta t_0$ geçerlidir; burada $\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}\\geq 1$ <strong>Lorentz faktörüdür</strong>.</p>`,
        `<p>Olağan hızlarda $\\gamma$ değeri 1 e çok yakın olduğundan bu etki ihmal edilebilir. Işık hızına yakın hızlarda ise çok hızlı artar. Örneğin kozmik ışınlardaki parçacıklar, klasik fiziğin izin verdiğinden daha uzun yaşar.</p>`,
        { fig: 'v5v8-gama', caption: 'Lorentz faktörü γ küçük hızlarda 1 e yakındır ve c ye yaklaşıldıkça hızla artar.' }
      ],
      examples: [
        { task: `Bir parçacık $v=0{,}6\\,c$ hızıyla hareket etmektedir. Lorentz faktörü nedir?`,
          steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}6^2}}=\\frac{1}{\\sqrt{0{,}64}}$.', '$\\sqrt{0{,}64}=0{,}8$, dolayısıyla $\\gamma=\\frac{1}{0{,}8}$.', '<strong>Sonuç: $\\gamma=1{,}25$</strong>'] }
      ]
    },
    'v6-lorentz': {
      title: 'Lorentz dönüşümleri',
      summary: 'Bir olayın uzaysal ve zamansal koordinatlarının başka bir eylemsiz sisteme geçişte nasıl değiştiği.',
      theory: [
        `<p>Galilei dönüşümü $x'=x-vt$ yalnızca düşük hızlarda geçerlidir. $c$ye yakın hızlarda ise ışık hızını koruyan <strong>Lorentz dönüşümleri</strong> gerekir. $x$ ekseninin pozitif yönünde $v$ hızıyla hareket eden $S'$ sistemi için $x'=\\gamma\\,(x-\\beta\\,ct)$ ve $ct'=\\gamma\\,(ct-\\beta\\,x)$ geçerlidir; burada $\\beta=\\frac{v}{c}$.</p>`,
        `<p>Uzay ve zaman böylece birbirine karışır: bir sistemde eş zamanlı olan iki olay, başka bir sistemde eş zamanlı olmayabilir. Bu <strong>eş zamanlılığın göreliliği</strong>, ışık hızının sonlu olmasının doğrudan bir sonucudur.</p>`,
        `<p>Ters dönüşümde hızın işareti değişir. $v\\to 0$ iken $\\gamma\\to 1$ olur ve klasik $x'=x-vt$ bağıntısını geri elde ederiz; dolayısıyla Lorentz dönüşümleri klasik fiziği sınır durum olarak içerir.</p>`,
        { fig: 'v5v8-lorentz', caption: 'S′ sisteminin x′ ve ct′ eksenleri eğiktir; Lorentz dönüşümü olayın koordinatlarını yeniden hesaplar.' }
      ],
      examples: [
        { task: `Bir olay $S$ sisteminde $x=8\\,\\text{m}$ ve $ct=4\\,\\text{m}$ koordinatlarına sahiptir. $S'$ sistemi $x$ ekseninin pozitif yönünde $0{,}6\\,c$ hızıyla hareket etmektedir. $S'$ sisteminde $x'$ nedir?`,
          steps: ['$\\gamma=1{,}25$, $\\beta=0{,}6$.', `$x'=\\gamma\\,(x-\\beta\\,ct)=1{,}25\\cdot(8-0{,}6\\cdot 4)=1{,}25\\cdot 5{,}6=7$.`, `<strong>Sonuç: $x'=7\\,\\text{m}$</strong>`] }
      ]
    },
    'v6-energia': {
      title: 'Relativistik enerji ve momentum',
      summary: 'Büyük hızlarda bir parçacığın toplam ve kinetik enerjisi.',
      theory: [
        `<p>Görelilikte bir parçacığın, durduğunda bile, durgun enerjisi $E_0=mc^2$ vardır. Hareket eden bir parçacığın toplam enerjisi $E=\\gamma\\,mc^2$ dir. $v\\to 0$ için $\\gamma\\to 1$ olur ve toplam enerji durgun enerjiye yaklaşır.</p>`,
        `<p><strong>Kinetik enerji</strong>, $E_k=E-E_0=(\\gamma-1)\\,mc^2$ farkıdır. Parçacığı durgun halden $v$ hızına çıkarmak için yapılması gereken işe eşittir. Işık hızına yakın hızlarda kinetik enerji sınırsız artar; dolayısıyla sıfırdan farklı durgun kütleye sahip hiçbir parçacık ışık hızına ulaşamaz.</p>`,
        `<p>Relativistik momentum $p=\\gamma\\,m\\,v$ dir. Enerji ve momentum için $E^2=(pc)^2+(mc^2)^2$ bağıntısı da geçerlidir; bu bağıntı, $m=0$ olan fotonlar için uygundur.</p>`,
        { fig: 'v5v8-energia', caption: 'Toplam enerji γmc², durgun enerji mc² ile kinetik enerji (γ − 1)mc² toplamıdır.' }
      ],
      examples: [
        { task: `Bir elektron ($m\\,c^2=0{,}511\\,\\text{MeV}$) $0{,}8\\,c$ hızıyla hareket etmektedir. Kinetik enerjisi nedir?`,
          steps: ['$\\gamma=\\frac{1}{\\sqrt{1-0{,}64}}=\\frac{5}{3}$.', '$E_k=(\\gamma-1)\\,mc^2=\\frac{2}{3}\\cdot 0{,}511\\approx 0{,}34\\,\\text{MeV}$.', '<strong>Sonuç: $E_k\\approx 0{,}34\\,\\text{MeV}$</strong>'] }
      ]
    },
    'v6-ekvivalencia': {
      title: 'Kütle ve enerjinin eşdeğerliği',
      summary: 'E = mc² bağıntısı; kütlenin enerjiye ve enerjinin kütleye dönüştürülmesi.',
      theory: [
        `<p>Göreliliğin en ünlü sonucu $E=mc^2$ bağıntısıdır: kütle bir enerji biçimidir ve her enerjinin karşılık gelen bir kütlesi vardır, $m=\\frac{E}{c^2}$. Bu yalnızca bir hareket formülü değil, durgun olsa bile her cismin bir özelliğidir.</p>`,
        `<p>Kütledeki küçük değişimler büyük enerjilere karşılık gelir, çünkü $c^2\\approx 9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$ çok büyük bir sayıdır. Nükleer tepkimeler enerji açığa çıkarır, çünkü ürünlerin toplam kütlesi başlangıçtaki çekirdeklerin kütlesinden küçük bir oran kadar azdır.</p>`,
        `<p>Dönüşümde birimlere dikkat et: kütle kilogram, hız metre bölü saniye, enerji joule olarak alınır. Terajoule $1\\,\\text{TJ}=10^{12}\\,\\text{J}$ dir.</p>`
      ],
      examples: [
        { task: 'Bir gram maddenin tamamen dönüşmesiyle hangi enerji açığa çıkar? Sonucu terajoule cinsinden ver.',
          steps: ['$m=10^{-3}\\,\\text{kg}$, $c^2=9\\cdot 10^{16}\\,\\text{m}^2/\\text{s}^2$.', '$E=mc^2=10^{-3}\\cdot 9\\cdot 10^{16}=9\\cdot 10^{13}\\,\\text{J}=90\\,\\text{TJ}$.', '<strong>Sonuç: $90\\,\\text{TJ}$</strong>'] }
      ]
    },
    'v6-interval': {
      title: 'Uzay-zaman aralıkları',
      summary: 'Uzay-zaman diyagramında değişmez aralık ve öz zaman.',
      theory: [
        `<p>Görelilik uzayı ve zamanı dört boyutlu bir <strong>uzay-zamanda</strong> birleştirir. Olaylar bu uzayda noktalardır ve aralarındaki uzaklık olağan anlamda değildir. Zaman farkı $\\Delta t$ ve uzaysal farkı $\\Delta x$ olan iki olay arasındaki <strong>aralık</strong> $\\Delta s^2=c^2\\Delta t^2-\\Delta x^2$ dir.</p>`,
        `<p>Aralık her eylemsiz sistemde aynı değere sahiptir, bu nedenle <strong>değişmez</strong> olarak adlandırılır. $\\Delta s^2>0$ ise bu bir zamansal benzeri aralıktır ve iki olayın aynı yerde gerçekleştiği bir sistem vardır. Öz zaman bu durumda $\\Delta\\tau=\\frac{\\sqrt{\\Delta s^2}}{c}$ dir.</p>`,
        `<p>$c=1$ birimlerinde (uzunlukların ışık saniyesi cinsinden ölçüldüğü durumda) $\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}$ hesabı yeterlidir. Sonuç her zaman $\\Delta t$ den küçük veya ona eşittir; bu da yine zaman genleşmesidir.</p>`,
        { fig: 'v5v8-interval', caption: 'Öz zaman Δτ = √(Δt² − Δx²) zaman benzeri aralık için Δt den küçüktür.' }
      ],
      examples: [
        { task: 'İki olay zamanda $\\Delta t=5\\,\\text{s}$, uzayda ise $\\Delta x=3\\,\\text{ls}$ (ışık saniyesi) kadar birbirinden uzaktır. Öz zaman $\\Delta\\tau$ nedir?',
          steps: ['$\\Delta\\tau=\\sqrt{\\Delta t^2-\\Delta x^2}=\\sqrt{25-9}$.', '<strong>Sonuç: $\\Delta\\tau=4\\,\\text{s}$</strong>'] }
      ]
    },
    'v6-vseobecna': {
      title: 'Genel görelilik kuramı',
      summary: 'Eşdeğerlik ilkesi, eğri uzay-zaman olarak çekim ve Schwarzschild yarıçapı.',
      theory: [
        `<p>Genel görelilik kuramı (1915) <strong>eşdeğerlik ilkesine</strong> dayanır: yerel olarak ivmelenme ile çekim alanı birbirinden ayırt edilemez. Çekim alanında serbestçe düşen bir asansördeki insan ağırlık hissetmez; tıpkı yörüngedeki bir astronot gibi.</p>`,
        `<p>Buradan Einstein, çekimin klasik anlamda bir kuvvet olmadığını, kütle ve enerjinin neden olduğu <strong>uzay-zamanın eğriliği</strong> olduğunu çıkardı. Cisimler, eğri uzayda <em>jeodezikler</em> adı verilen en kısa yollar boyunca hareket eder.</p>`,
        `<p>Güçlü bir çekim alanı zamanı yavaşlatır: büyük bir cismin yakınındaki saatler, ondan uzaktakilere göre daha yavaş işler. $M$ kütlesi için <strong>Schwarzschild yarıçapı</strong> $r_s=\\frac{2GM}{c^2}$ dir. Dünya için yaklaşık $9$ mm, Güneş için yaklaşık $3\\,\\text{km}$ dir.</p>`
      ],
      examples: [
        { task: `Güneş'in Schwarzschild yarıçapı nedir? Güneş'in kütlesi $M=1{,}989\\cdot 10^{30}\\,\\text{kg}$, $G=6{,}674\\cdot 10^{-11}$ ve $c=3\\cdot 10^{8}\\,\\text{m/s}$.`,
          steps: ['$r_s=\\frac{2GM}{c^2}=\\frac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot 1{,}989\\cdot 10^{30}}{9\\cdot 10^{16}}$.', '$r_s\\approx 2{,}95\\cdot 10^{3}\\,\\text{m}$.', '<strong>Sonuç: $r_s\\approx 2{,}95\\,\\text{km}$</strong>'] }
      ]
    },
    'v6-zakrivenie': {
      title: 'Uzay-zamanın eğriliği',
      summary: 'Kütlenin uzay-zamanı nasıl büktüğü ve bunu hangi olguların kanıtladığı.',
      theory: [
        `<p>Esnek bir örtü düşün ve üzerine ağır bir top koy. Örtü çöker ve küçük toplar ona doğru yuvarlanır. Benzer şekilde kütle uzay-zamanı büker ve cisimler eğri yörüngeler izler. Bu benzetme yalnızca görsel bir açıklamadır, kesin bir model değildir.</p>`,
        `<p>En doğrudan kanıt, Güneş'in yakınından geçen <strong>ışığın bükülmesidir</strong>. Işık en kısa yolu izler ve eğri uzayda bu yol bir doğru değildir. Bu nedenle Güneş'in arkasındaki bir yıldız gözlemciye kaymış gibi görünür. Bu etkiyi Eddington 1919 yılında ölçtü.</p>`,
        `<p>Diğer olgular, örneğin çekimsel kırmızıya kayma veya kütle yakınında zamanın yavaşlaması, GPS uyduları için gereken hassasiyetle ölçülebilir. Çekim veya uzay-zamanla ilgisi olmayan olgular, örneğin beyaz ışığın bir prizmada renklerine ayrılması, eğrilikle açıklanamaz.</p>`,
        { fig: 'v5v8-zakrivenie', caption: 'Kütle uzay-zamanı büker ve cisimler eğri yollar boyunca hareket eder. Izgara yalnızca gösterge amaçlı bir benzetmedir.' }
      ],
      examples: [
        { task: `Hangi olgu uzay-zamanın eğriliğinin sonucudur: Güneş'in yakınında ışığın bükülmesi mi, yoksa bir prizmada ışığın renginin değişmesi mi?`,
          steps: ['Uzay-zamanın eğriliği, ışığın yolunu etkileyen çekimi tanımlar.', 'Işığın prizmada ayrışması, kırılma indisinin dalga boyuna bağlılığından kaynaklanır.', `<strong>Sonuç: Güneş'in yakınında ışığın bükülmesi</strong>`] }
      ]
    },
    'v6-gravvlny': {
      title: 'Gravitasyon dalgaları ve kara delikler',
      summary: 'Uzay-zamanda dalgalanma olarak gravitasyon dalgaları ve kara deliğin olay ufku.',
      theory: [
        `<p><strong>Gravitasyon dalgaları</strong>, ışık hızıyla yayılan uzay-zaman dalgalanmalarıdır. Büyük kütlelerin ivmelenmeli hareketinde, örneğin iki kara deliğin birleşmesinde oluşurlar. İlk doğrudan gözlem 2015 yılında LIGO interferometresiyle yapıldı.</p>`,
        `<p><strong>Kara delik</strong>, kaçış hızının $c$ den büyük olduğu ve ışığın dışarı çıkamadığı bölgedir. Sınırı, Schwarzschild yarıçapı $r_s=\\frac{2GM}{c^2}$ deki <strong>olay ufku</strong>dur. Ufkun içinde bütün yollar merkeze doğru yönelir.</p>`,
        `<p>Ufuk yarıçapı kütleyle doğru orantılı olarak artar. Güneş kütleli bir kara deliğin ufku yaklaşık $3\\,\\text{km}$, Güneş'in on katı kütleli bir kara deliğin ufku ise yaklaşık $30\\,\\text{km}$ dir.</p>`,
        { fig: 'v5v8-horizont', caption: 'Olay ufkunun yarıçapı r_s = 2GM/c² dir; ufkun içindeki ışık dışarı çıkamaz.' }
      ],
      examples: [
        { task: `Kütlesi $10\\,M_{\\odot}$ olan bir kara deliğin ufuk yarıçapı nedir? Güneş için $r_s\\approx 2{,}95\\,\\text{km}$ olduğunu kullan.`,
          steps: ['Yarıçap kütleyle orantılıdır: $r_s=2{,}95\\,\\text{km}\\cdot 10$.', '<strong>Sonuç: $r_s\\approx 29{,}5\\,\\text{km}$</strong>'] }
      ]
    },
    'v7-atom': {
      title: 'Atomun yapısı ve elektron kabuğu',
      summary: 'Çekirdek, kabuk ve elektronların kabuklara dağılımı ile kabuk kapasiteleri.',
      theory: [
        `<p>Atomun, protonlardan ve nötronlardan (birlikte nükleonlar) oluşan bir <strong>çekirdeği</strong> ve bir <strong>elektron kabuğu</strong> vardır. Proton sayısı atom numarası $Z$ dir ve kimyasal elementi belirler. Nötr bir atomun da aynı sayıda elektronu vardır.</p>`,
        `<p>Elektronlar rastgele dağılmaz. $n = 1, 2, 3, \\dots$ numaralı <strong>kabuklarda</strong> bulunurlar (K, L, M harfleriyle gösterilir). $n$ numaralı kabuk en fazla $2n^2$ elektron alabilir: K 2, L 8, M 18 elektron alır.</p>`,
        `<p><strong>Neden tam olarak bu kadar?</strong> Elektronları kuantum mekaniği tanımlar. Her elektron durumu bir kuantum sayıları kümesiyle belirlenir ve Pauli ilkesi, bir atomdaki iki elektronun aynı duruma sahip olmasını yasaklar. Kabuklar içten dışa doğru dolar ve en dış (değerlik) kabuk, elementin kimyasal özelliklerini belirler.</p>`,
        `<ol><li>Periyodik tablodan $Z$ değerini bul; böylece elektron sayısını da öğrenirsin.</li><li>Elektronları kabuklara dağıt: önce K, sonra L, sonra M.</li><li>Son dolu kabuk değerlik kabuğudur.</li></ol>`,
        { fig: 'obr-atom', caption: 'Atomun basitleştirilmiş modeli: pozitif çekirdek ve yörüngelerdeki elektronlar.' }
      ],
      examples: [
        { task: 'L kabuğu (numarası $n = 2$) en fazla kaç elektron alabilir?',
          steps: ['$n = 2$ değerini $2n^2$ formülüne koyarız.', '$2\\cdot 2^2 = 8$.', '<strong>Sonuç: 8 elektron</strong>'] },
        { task: 'Karbonun $Z = 6$. K ve L kabuklarında kaç elektron vardır?',
          steps: ['K kabuğu 2 elektron alır.', 'Kalan $6 - 2 = 4$ elektron L kabuğuna gider.', '<strong>Sonuç: K de 2, L de 4</strong>'] }
      ]
    },
    'v7-spektra': {
      title: 'Atomların spektrumları ve enerji seviyeleri',
      summary: 'Elektronların seviyeler arasındaki geçişleri ve yayılan fotonların enerjisi.',
      theory: [
        `<p>Bir atom yalnızca belirli <strong>enerji seviyelerine</strong> sahip olabilir. Elektron daha yüksek bir seviyeden daha düşük bir seviyeye geçerken, seviye farkına eşit enerjili bir <strong>foton</strong> yayar. Tersine, doğru enerjili bir foton elektronu daha yüksek bir seviyeye uyarabilir.</p>`,
        `<p>Fotonun enerjisi $E = h f = \\dfrac{h c}{\\lambda}$ dir; burada $h \\approx 6{,}63\\cdot 10^{-34}\\,\\text{J·s}$ Planck sabitidir. Atom fiziğinde enerji elektronvolt cinsinden verilir: $1\\,\\text{eV} = 1{,}6\\cdot 10^{-19}\\,\\text{J}$.</p>`,
        `<p>Hidrojen atomu için $E_n = -\\dfrac{13{,}6}{n^2}\\,\\text{eV}$ geçerlidir. Temel durum ($n = 1$) en düşük olandır ve seviyeler yukarıdan sıfıra yaklaşır. $n_i$ den $n_f$ ye geçişte enerjisi $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{n_f^2}-\\dfrac{1}{n_i^2}\\right)$ olan bir foton oluşur.</p>`,
        `<p><strong>Spektrumlar neden çizgisel?</strong> Seviyeler kesikli olduğundan fotonlar yalnızca birkaç kesin enerjiye sahiptir. Bu nedenle spektrogramda sürekli bir gökkuşağı değil, keskin çizgiler görürüz. Her elementin kendine özgü bir çizgi kümesi vardır; bu yüzden spektrum onun bir parmak izidir.</p>`,
        { fig: 'v5v8-vodik', caption: 'Daha düşük bir seviyeye geçen atom, seviyeler arasındaki farka eşit enerjili bir foton yayar.' }
      ],
      examples: [
        { task: `Hidrojen atomundaki bir elektron $n=3$ seviyesinden $n=2$ seviyesine geçiyor. Yayılan fotonun enerjisi nedir?`,
          steps: ['Seviye farkı: $\\Delta E = 13{,}6\\,\\text{eV}\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)$.', '$\\dfrac{1}{4}-\\dfrac{1}{9}=\\dfrac{5}{36}$, dolayısıyla $\\Delta E = 13{,}6\\cdot\\dfrac{5}{36}\\approx 1{,}89\\,\\text{eV}$.', '<strong>Sonuç: yaklaşık 1,89 eV</strong>'] },
        { task: 'Hangi geçiş daha yüksek enerjili bir foton yayar: $2\\to 1$ mi, yoksa $3\\to 2$ mi?',
          steps: ['$2\\to 1$ geçişi: $13{,}6\\cdot\\left(1-\\dfrac{1}{4}\\right)=10{,}2\\,\\text{eV}$.', '$3\\to 2$ geçişi yaklaşık $1{,}89\\,\\text{eV}$ verir.', '<strong>Sonuç: $2\\to 1$ geçişi</strong>'] }
      ]
    },
    'v7-jadro': {
      title: 'Atom çekirdeğinin yapısı',
      summary: 'Protonlar, nötronlar, nüklid gösterimi, izotoplar ve çekirdeğin boyutu.',
      theory: [
        `<p>Çekirdek protonlardan (yükü $+e$) ve nötronlardan (yüksüz) oluşur. Birlikte nükleon adını alırlar. Bir nüklid $^{A}_{Z}\\mathrm{X}$ biçiminde yazılır: $A$ kütle numarası, $Z$ atom numarası ve nötron sayısı $N = A - Z$ dir.</p>`,
        `<p>Çekirdek yarıçapı kabaca kütle numarasının küp köküyle orantılı olarak artar: $r \\approx 1{,}2\\cdot 10^{-15}\\,\\text{m}\\cdot A^{1/3}$. Çekirdekler bu nedenle çok küçüktür (femtometre mertebesinde), ama neredeyse aynı yoğunluğa sahiptirler.</p>`,
        `<p><strong>Çekirdek neden dağılmaz?</strong> Protonlar elektriksel olarak birbirini iter, ama bunun yanında <strong>güçlü nükleer etkileşim</strong> de etkindir. Bu, elektriksel itmeden daha güçlü olan, kısa menzilli bir çekim kuvvetidir. Kararlı ağır çekirdeklerde protonlardan daha fazla nötron bulunur (örneğin $^{208}_{82}\\mathrm{Pb}$).</p>`,
        `<ul><li><strong>İzotoplar</strong> aynı $Z$ ye, ama farklı $N$ ye sahiptir (örneğin $^{12}_{6}\\mathrm{C}$ ve $^{14}_{6}\\mathrm{C}$).</li><li><strong>İzobarlar</strong> aynı $A$ ya, ama farklı $Z$ ye sahiptir.</li></ul>`,
        { fig: 'v5v8-nuklidy', caption: 'Hafif kararlı çekirdeklerde N ≈ Z dir; ağır kararlı çekirdeklerde protonlardan daha fazla nötron bulunur.' }
      ],
      examples: [
        { task: 'Çekirdek $^{238}_{92}\\mathrm{U}$ kaç proton ve kaç nötron içerir?',
          steps: ['Atom numarası $Z=92$.', '$N = A - Z = 238 - 92 = 146$.', '<strong>Sonuç: 92 proton ve 146 nötron</strong>'] },
        { task: 'Kütle numarası sekiz katına çıkarsa çekirdeğin yarıçapı nasıl değişir?',
          steps: ['$r \\propto A^{1/3}$, dolayısıyla $r$, $\\sqrt[3]{A}$ ile orantılı değişir.', '$\\sqrt[3]{8}=2$, yani yarıçap iki katına çıkar.', '<strong>Sonuç: yarıçap iki katına çıkar</strong>'] }
      ]
    },
    'v7-radioaktivita': {
      title: 'Radyoaktivite ve nükleer dönüşümler',
      summary: 'Bozunma türleri, bozunma yasası, yarılanma ömrü ve aktivite.',
      theory: [
        `<p>Kararsız çekirdekler kendiliğinden dönüşür. <strong>Alfa</strong> bozunmasında bir helyum çekirdeği $^{4}_{2}\\mathrm{He}$ fırlar. <strong>Beta-eksi</strong> bozunmada bir nötron protona dönüşür ve bir elektron ile bir antinötrino oluşur. <strong>Gama</strong> ışımasında çekirdek yalnızca fazla enerjisinden kurtulur; $Z$ ve $A$ değişmez. Her dönüşümde nükleon sayısının ve proton sayısının korunduğu geçerlidir.</p>`,
        `<p>Tek bir çekirdeğin bozunması rastgele bir olaydır; ama çok sayıda çekirdek için bozunma yasası $N(t) = N_0\\cdot 2^{-t/T}$ geçerlidir. $T$ süresi, çekirdeklerin yarısının bozunduğu süre olan <em>yarılanma ömrüdür</em>. Yasa, kısa bir $dt$ süresinde bozunma olasılığının çekirdek sayısıyla orantılı olduğu varsayımından çıkar: $\\dfrac{dN}{dt}=-\\lambda N$.</p>`,
        `<p><strong>Aktivite</strong> $A = \\lambda N$, saniyedeki bozunma sayısını verir. Birimi bekerel, $1\\,\\text{Bq} = 1\\,\\text{s}^{-1}$ dir. Bozunma sabiti $\\lambda = \\dfrac{\\ln 2}{T}$ dir.</p>`,
        `<ol><li>Yarılanma ömrü sayısını $k = t/T$ olarak hesapla.</li><li>Çekirdek sayısını $2^{k}$ ye böl; yalnızca ikiye bölme.</li></ol>`,
        { fig: 'v5v8-rozpad', caption: 'Bozunmamış çekirdeklerin sayısı üstel olarak azalır: her yarılanma ömründe yarısı kalır.' }
      ],
      examples: [
        { task: 'Bir radyoizotopun yarılanma ömrü 8 gündür. 24 gün sonra çekirdeklerin yüzde kaçı kalır?',
          steps: ['Yarılanma ömrü sayısı $k = 24/8 = 3$.', '$N = N_0\\cdot 2^{-3} = \\dfrac{N_0}{8}$, yani %12,5 kalır.', '<strong>Sonuç: %12,5</strong>'] },
        { task: 'Bir numunede $4\\cdot 10^{6}$ çekirdek ve 2 saatlik yarılanma ömrü vardır. 6 saat sonra kaç çekirdek kalır?',
          steps: ['6 saatte $k = 6/2 = 3$ yarılanma ömrü geçer.', '$N = \\dfrac{4\\cdot 10^{6}}{2^{3}} = 5\\cdot 10^{5}$.', '<strong>Sonuç: 500 000 çekirdek</strong>'] }
      ]
    },
    'v7-stiepenie-fuzia': {
      title: 'Nükleer fisyon ve füzyon',
      summary: 'Kütle kaybı, bağlanma enerjisi ve bölünme ya da birleşmeyle açığa çıkan enerji.',
      theory: [
        `<p>Bir çekirdeğin kütlesi, nükleonlarının kütleleri toplamından küçüktür. Bu fark <em>kütle kaybı</em> $\\Delta m$ dir. $E = \\Delta m\\, c^2$ bağıntısına göre karşılık gelen enerji açığa çıkar. Pratik hesaplarda $1\\,\\text{u}\\cdot c^2 \\approx 931{,}5\\,\\text{MeV}$ alınır.</p>`,
        `<p>Nükleon başına en büyük bağlanma enerjisine demirin ($A\\approx 56$) yakınındaki çekirdekler sahiptir. Bu nedenle ağır çekirdekler <strong>fisyona</strong> (bölünmeye) uğrayabilir, hafif çekirdekler ise <strong>birleşebilir</strong> (füzyon). İki yol da daha büyük bağlanma enerjisine yönelir ve enerji açığa çıkarır.</p>`,
        `<p>$^{235}_{92}\\mathrm{U}$ bir nötronla bölündüğünde iki parça, 2 ila 3 nötron ve yaklaşık 200 MeV enerji oluşur. Bu nötronlar zincirleme bir reaksiyon başlatabilir; reaktörde bu reaksiyonun denetlenmesi gerekir.</p>`,
        `<p>Füzyon, pozitif yüklü çekirdeklerin güçlü etkileşim menziline yaklaşabilmesi için aşırı yüksek sıcaklık gerektirir. $^{2}_{1}\\mathrm{H}+{}^{3}_{1}\\mathrm{H}\\to{}^{4}_{2}\\mathrm{He}+n$ tepkimesinde yaklaşık 17,6 MeV açığa çıkar.</p>`,
        { fig: 'v5v8-vazba', caption: 'Nükleon başına bağlanma enerjisi demirde en yüksek değerine ulaşır: hafif çekirdekler birleşir, ağır çekirdekler bölünür.' }
      ],
      examples: [
        { task: 'Bir nükleer tepkimede kütle kaybı $\\Delta m = 0{,}2\\,\\text{u}$ oluşuyor. Bu ne kadar enerjidir?',
          steps: ['$E=\\Delta m\\cdot 931{,}5\\,\\text{MeV}$.', '$E=0{,}2\\cdot 931{,}5=186{,}3\\,\\text{MeV}$.', '<strong>Sonuç: 186,3 MeV</strong>'] },
        { task: `Füzyon neden Dünya'da fisyona göre daha zordur?`,
          steps: ['Çekirdekler pozitif yüklüdür ve birbirini iter.', 'Çekirdekleri güçlü etkileşim menziline yaklaştırmak için aşırı sıcaklık ve basınç gerekir.', '<strong>Sonuç: füzyon aşırı koşullar gerektirir</strong>'] }
      ]
    },
    'v7-ziarenie-latka': {
      title: 'Işımanın maddeyle etkileşimi',
      summary: 'Işımanın zayıflaması, yarı kalınlık ve gama ışımasında başlıca süreçler.',
      theory: [
        `<p>Işıma maddeden geçerken enerji kaybeder. Alfa parçacıkları bir kâğıt yaprağında bile durur, beta parçacıkları birkaç milimetre alüminyumdan geçer, gama ışınımı ise derinlere nüfuz eder ve yalnızca yavaş yavaş zayıflar.</p>`,
        `<p>Dar bir foton demeti için üstel zayıflama $I(x) = I_0\\,e^{-\\mu x}$ geçerlidir; burada $\\mu$ zayıflama katsayısıdır. Daha pratik olan ise <em>yarı kalınlık</em> $d_{1/2}$ dir: yoğunluğu yarıya indiren tabaka. Bu durumda $I = I_0\\cdot 2^{-x/d_{1/2}}$.</p>`,
        `<p>Gama ışımasında üç süreç önemlidir: <strong>fotoelektrik olay</strong> (foton soğurulur, düşük enerjilerde baskındır), <strong>Compton saçılması</strong> (foton enerjisinin bir kısmını kaybeder) ve 1,022 MeV enerjiden itibaren <strong>çift oluşumu</strong> (elektron–pozitron). Kurşun gibi ağır ve yoğun maddeler daha iyi korur.</p>`,
        `<ul><li>İyonlaştırıcı ışıma atomlardan elektron koparır, bu nedenle hücrelere zarar verebilir.</li><li>Korunma, ışıma türüne göre seçilir: alfa için kâğıt veya el, beta için pleksiglas, gama için kurşun veya beton.</li></ul>`,
        { fig: 'v5v8-zoslabenie', caption: 'Her yarı kalınlık, ışınım şiddetini yarıya indirir.' }
      ],
      examples: [
        { task: 'Bir kurşun tabakanın yarı kalınlığı 1,2 cm dir. 3,6 cm kalınlığındaki bir tabakadan yüzde kaç ışıma geçer?',
          steps: ['$x/d_{1/2}=3{,}6/1{,}2=3$ yarı kalınlık.', '$I = I_0\\cdot 2^{-3}=\\dfrac{I_0}{8}$.', '<strong>Sonuç: %12,5</strong>'] },
        { task: 'Işımanın yoğunluğu dörtte bire düştü. Tabaka kaç yarı kalınlıktan oluşuyordu?',
          steps: ['$\\dfrac{1}{4}=2^{-2}$.', 'Dolayısıyla tabaka 2 yarı kalınlıktı.', '<strong>Sonuç: 2</strong>'] }
      ]
    },
    'v7-jadrova-energetika': {
      title: 'Nükleer enerji ve ışıma algılama',
      summary: 'Nükleer reaktörün çalışma ilkesi, santralin verimi ve ışıma dozunun ölçümü.',
      theory: [
        `<p>Nükleer reaktör, $^{235}_{92}\\mathrm{U}$ fisyonunu denetlenen bir zincirleme reaksiyonda kullanır. Reaktörden gelen ısı suyu ısıtır, buhar oluşur ve buhar, elektrik üreten bir türbini çevirir.</p>`,
        `<p>Santralin verimi $\\eta = \\dfrac{P_{\\text{el}}}{P_{\\text{t}}}$ dir; burada $P_{\\text{t}}$ reaktörün ısıl gücüdür. Isının bir kısmı işe dönüştürülemez ve soğutma suyuna verilir. Nükleer santrallerin verimi genellikle yaklaşık %33 tür.</p>`,
        `<p><strong>Kontrol:</strong> nötronları soğuran maddelerden (örneğin bor, kadmiyum) yapılmış kontrol çubukları. <strong>Moderatör</strong> (su, grafit) nötronları yavaşlatır, böylece çekirdekleri daha kolay bölerler.</p>`,
        `<p><strong>Dozimetri:</strong> soğurulan doz $D = E/m$ olarak tanımlanır ve birimi graydir, $1\\,\\text{Gy} = 1\\,\\text{J/kg}$. Geiger-Müller tüpü veya sintilatör gibi dedektörler tek tek parçacıklara ve fotonlara tepki verir.</p>`,
        { fig: 'v5v8-reaktor', caption: 'Santral reaktörün ısısını işe dönüştürür; kalan ısı soğutma suyuyla uzaklaştırılır.' }
      ],
      examples: [
        { task: 'Bir reaktörün ısıl gücü 3000 MW, verimi ise %33 tür. Elektrik gücü nedir?',
          steps: ['$P_{\\text{el}}=\\eta\\,P_{\\text{t}}$.', '$0{,}33\\cdot 3000=990\\,\\text{MW}$.', '<strong>Sonuç: 990 MW</strong>'] },
        { task: 'Bir cisim ışınlanma sonucunda 0,5 J enerji soğurmuştur. Cismin kütlesi 50 kg dır. Soğurulan doz nedir?',
          steps: ['$D = E/m$.', '$D = 0{,}5/50 = 0{,}01\\,\\text{Gy}$.', '<strong>Sonuç: 0,01 Gy</strong>'] }
      ]
    },
    'v8-castice': {
      title: 'Temel parçacıklar ve özellikleri',
      summary: 'Parçacık özellikleri, fermiyonlar ve bozonlar, baryonlar ve mezonlar.',
      theory: [
        `<p>Güncel bilgilere göre temel parçacıkların iç yapısı yoktur. Onları <strong>kütle</strong>, <strong>elektrik yükü</strong>, <strong>spin</strong> (öz açısal momentum) ve kuarklarda ve gluonlarda ayrıca <strong>renk</strong> karakterize eder.</p>`,
        `<p>Spine göre parçacıklar <em>fermiyonlara</em> (spin $\\tfrac{1}{2}$, maddeyi oluşturur ve Pauli ilkesine uyar) ve <em>bozonlara</em> (tam sayı spin, etkileşimleri aracılık eder; örneğin spini 1 olan foton) ayrılır.</p>`,
        `<p>Hadronlar kuarklardan oluşur. <strong>Baryonlar</strong> üç kuark içerir (proton $uud$, nötron $udd$). <strong>Mezonlar</strong> bir kuark–antikuark çiftinden oluşur (örneğin $\\pi^{+}=u\\bar{d}$). Leptonlar (elektron, müon, tau ve nötrinolar) güçlü etkileşime katılmaz.</p>`,
        `<ul><li>Proton: kütle yaklaşık 938 MeV/$c^2$, yük $+e$.</li><li>Nötron: kütle yaklaşık 940 MeV/$c^2$, yük $0$.</li><li>Elektron: kütle yaklaşık 0,511 MeV/$c^2$, yük $-e$.</li></ul>`,
        { fig: 'v5v8-kvarky', caption: 'Proton (uud) ve nötron (udd) üç kuarktan oluşur; onların yüklerinin toplamı parçacığın yükünü verir.' }
      ],
      examples: [
        { task: 'Nötron hangi kuarklardan oluşur?',
          steps: ['Nötron bir baryondur, yani üç kuark içerir.', 'Yükü 0 olmalıdır: iki $d$ ve bir $u$ kuark $-\\tfrac{1}{3}-\\tfrac{1}{3}+\\tfrac{2}{3}=0$ verir.', '<strong>Sonuç: $udd$</strong>'] },
        { task: 'Elektron bir baryon mudur?',
          steps: ['Baryon üç kuarktan oluşur.', 'Elektron bir leptondur ve kuark içermez.', '<strong>Sonuç: hayır</strong>'] }
      ]
    },
    'v8-kvarky-leptony': {
      title: 'Kuarklar ve leptonlar',
      summary: 'Fermiyonların nesilleri ve kuarkların kesirli yükleri.',
      theory: [
        `<p>Altı kuark üç nesle ayrılır: $(u,d)$, $(c,s)$ ve $(t,b)$. $u$, $c$, $t$ kuarkları $+\\tfrac{2}{3}e$, $d$, $s$, $b$ kuarkları ise $-\\tfrac{1}{3}e$ yük taşır. Kesirli elektrik yükü taşıyan tek parçacıklar bunlardır.</p>`,
        `<p>Leptonlar da üç çift nesil oluşturur: $(e,\\nu_e)$, $(\\mu,\\nu_\\mu)$ ve $(\\tau,\\nu_\\tau)$. Yüklü leptonların yükü $-e$ dir. Nötrinolar yüksüzdür ve maddeyle çok zayıf etkileşir.</p>`,
        `<p>Serbest hadronların toplam yükü $e$ nin tam sayı katıdır. Bu nedenle kuarklar üçlüler halinde (baryonlar) veya kuark–antikuark çiftleri halinde (mezonlar) birleşir. Bu toplam, tepkime yazarken yararlı bir kontroldür.</p>`,
        `<ol><li>Her kuarkın yükünü $e$ cinsinden belirle.</li><li>Bunları topla.</li><li>Sonuç bir tam sayı olmalıdır.</li></ol>`,
        { fig: 'v5v8-generacie', caption: 'Fermiyonlar üç nesildedir; yüksek nesiller daha ağır ve daha kararsızdır.' }
      ],
      examples: [
        { task: 'Parçacık $uud$ nin yükü nedir?',
          steps: ['$u$ kuarkının yükü $+\\tfrac{2}{3}$, $d$ kuarkınınki $-\\tfrac{1}{3}$ tür.', '$\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3}=1$.', '<strong>Sonuç: $+e$ (proton)</strong>'] },
        { task: 'Baryon $uds$ (Λ parçacığı) hangi yüke sahiptir?',
          steps: ['$\\tfrac{2}{3}-\\tfrac{1}{3}-\\tfrac{1}{3}=0$.', '<strong>Sonuç: yük 0</strong>'] }
      ]
    },
    'v8-fotony': {
      title: 'Fotonlar ve diğer aracı parçacıklar',
      summary: 'Etkileşimleri taşıyan ölçü bozonları ve özellikleri.',
      theory: [
        `<p>Parçacıklar arasındaki etkileşimler <strong>ölçü bozonlarının</strong> değişimiyle gerçekleşir. Foton $\\gamma$ elektromanyetik kuvveti, gluonlar $g$ güçlü kuvveti, $W^{\\pm}$ ve $Z^{0}$ bozonları ise zayıf kuvveti taşır.</p>`,
        `<p>Fotonun kütlesi ve yükü yoktur, spini 1 dir. Gluon da kütlesizdir, ama <em>renk</em> yükü taşır; bu nedenle kendisiyle de etkileşir. Kuarkların izole edilemeyip hadronların içinde hapsolmasının nedeni budur.</p>`,
        `<p>$W$ ve $Z$ bozonları çok ağırdır (kütleleri yaklaşık 80 ve 91 GeV/$c^2$), bu nedenle zayıf etkileşimin menzili kısadır: yaklaşık $10^{-18}\\,\\text{m}$ mertebesindedir. Menzil, aracı parçacığın kütlesiyle ters orantılıdır.</p>`,
        `<p>Graviton, çekimin hipotetik bozonudur. Henüz deneysel olarak doğrulanmamıştır ve standart modelde yer almaz.</p>`,
        { fig: 'v5v8-interakcie', caption: 'Dört temel etkileşim: her biri kendi bozonunun değişimiyle iletilir ve farklı menzile sahiptir.' }
      ],
      examples: [
        { task: 'Güçlü etkileşimi hangi parçacık aracılık eder?',
          steps: ['Güçlü etkileşimi gluonlar aracılık eder.', '<strong>Sonuç: gluon</strong>'] },
        { task: 'Zayıf etkileşimin menzili neden bu kadar kısadır?',
          steps: ['Aracı $W$ ve $Z$ bozonlarının kütlesi büyüktür.', 'Menzil kütleyle ters orantılıdır; büyük kütle menzili kısaltır.', '<strong>Sonuç: bozonların büyük kütlesi menzili kısaltır</strong>'] }
      ]
    },
    'v8-standardny-model': {
      title: 'Parçacık fiziğinin standart modeli',
      summary: 'Standart modeldeki parçacıklara ve etkileşimlere genel bakış ile sayıları.',
      theory: [
        `<p>Standart model, dört temel etkileşimin üçünü (elektromanyetik, zayıf ve güçlü) ve bugüne kadar bilinen bütün temel parçacıkları tanımlar. Çekimi henüz kapsamaz.</p>`,
        `<p>Maddeyi 12 fermiyon oluşturur: üç nesilde 6 kuark ve 6 lepton. Her yeni nesil daha ağır ve daha kararsızdır. Kararlı madde yalnızca birinci nesil parçacıklardan oluşur.</p>`,
        `<p>Parçacıklar kütlelerini <em>Higgs mekanizmasıyla</em> kazanır. Korunum yasaları (yük, renk, leptonik sayılar) ve simetriler hangi süreçlerin izinli olduğunu belirler.</p>`,
        `<ul><li>Ölçü bozonları: foton $\\gamma$, sekiz gluon $g$, $W^{\\pm}$ ve $Z^{0}$ bozonları.</li><li>Higgs bozonu $H^{0}$.</li></ul>`,
        { fig: 'v5v8-generacie', caption: 'Fermiyonlar üç nesildedir; yüksek nesiller daha ağır ve daha kararsızdır.' }
      ],
      examples: [
        { task: 'Standart modelin ilk iki nesli kaç fermiyon içerir?',
          steps: ['Her nesil 2 kuark ve 2 lepton, yani 4 fermiyon içerir.', '$2\\cdot 4 = 8$.', '<strong>Sonuç: 8</strong>'] },
        { task: 'Standart modelde kaç ölçü bozonu vardır?',
          steps: ['Foton (1), gluonlar (8) ve $W^{+}$, $W^{-}$, $Z^{0}$ bozonları (3).', '$1+8+3=12$.', '<strong>Sonuç: 12</strong>'] }
      ]
    },
    'v8-interakcie': {
      title: 'Güçlü, zayıf ve elektromanyetik etkileşim',
      summary: 'Üç etkileşimin menzili, etkisi ve göreli kuvveti.',
      theory: [
        `<p><strong>Güçlü etkileşim</strong> kuarkları protonlarda ve nötronlarda, nükleonları da çekirdekte bir arada tutar. Menzili en kısa olanıdır, yaklaşık $10^{-15}\\,\\text{m}$ mertebesindedir; dört etkileşimin en güçlüsüdür.</p>`,
        `<p><strong>Elektromanyetik etkileşim</strong> yükler arasında etki eder. Elektrik ve manyetik kuvvetleri ile atomlardaki elektron bağlarını oluşturur. Menzili sonsuzdur ve kuvvet, uzaklığın karesiyle azalır.</p>`,
        `<p><strong>Zayıf etkileşim</strong> beta bozunmasından sorumludur; bu bozunmada bir $d$ kuarkı $u$ ya dönüşür ve bir $W^{-}$ bozonu yayılır. Menzili çok kısadır, yaklaşık $10^{-18}\\,\\text{m}$ mertebesindedir. Kuarkların çeşnisini değiştirir; bunu diğer etkileşimler yapamaz.</p>`,
        `<p>Göreli kuvvetler (bir çekirdekteki iki parçacık için) yaklaşık olarak güçlü, elektromanyetik, zayıf ve çekim için 1 : $10^{-2}$ : $10^{-6}$ : $10^{-39}$ tur. Çekim en zayıf olanıdır ve mikro dünyada ihmal edilebilir.</p>`,
        { fig: 'v5v8-interakcie', caption: 'Dört temel etkileşim: her biri kendi bozonunun değişimiyle iletilir ve farklı menzile sahiptir.' }
      ],
      examples: [
        { task: `Beta bozunmasından hangi etkileşim sorumludur?`,
          steps: ['Beta bozunmasında bir $d$ kuarkı $u$ ya dönüşür.', 'Kuark çeşnisinin değişmesi zayıf etkileşimin alanıdır.', '<strong>Sonuç: zayıf etkileşim</strong>'] },
        { task: 'Atomdaki elektronları hangi etkileşim bağlı tutar?',
          steps: ['Elektronların yükü negatif, çekirdeğin yükü ise pozitiftir.', '<strong>Sonuç: elektromanyetik etkileşim</strong>'] }
      ]
    },
    'v8-urychlovace': {
      title: 'Parçacık hızlandırıcıları ve dedektörler',
      summary: 'Yüklü parçacıkların hızlandırılması, çarpışmalar ve dedektörde olayların yeniden kurulması.',
      theory: [
        `<p>Hızlandırıcı, yüklü parçacıkları elektrik alanıyla hızlandırır. $q = z\\,e$ yüküne sahip bir parçacık $U$ gerilimini geçtiğinde $E_k = z\\,e\\,U$ kinetik enerjisini kazanır. Gerilim megavolt cinsinden verildiğinde enerji MeV olarak çıkar.</p>`,
        `<p>Büyük hızlandırıcılar, örneğin çevresi 27 km olan CERN'deki LHC, ışınları güçlü mıknatıslarla bir çember üzerinde tutar ve parçacıkları bu çemberde kademeli olarak hızlandırır. Proton–proton çarpışmaları TeV mertebesinde enerjilere ulaşır.</p>`,
        `<p>Dedektörler parçacıkların izlerini kaydeder. Manyetik alandaki bir izleme dedektörü yörüngenin eğriliğini gösterir; bundan momentum belirlenir. Kalorimetreler enerjiyi, müon odaları ise müonları ölçer. Bu verilerden hangi parçacığın oluştuğu yeniden kurulur.</p>`,
        `<p>$E = m\\,c^2$ bağıntısına göre çarpışmanın kinetik enerjisi yeni parçacıkların kütlesine dönüşebilir. Bu nedenle yüksek enerjili çarpışmalarda çok ağır parçacıklar da oluşur.</p>`,
        { fig: 'v5v8-urychlovac', caption: 'Yükü ze olan bir parçacık U gerilimini geçerek zeU enerji kazanır; onu bir elektrik alanı hızlandırır.' }
      ],
      examples: [
        { task: 'Gerilimi 5 MV olan bir hızlandırıcıda hızlandırılan proton hangi kinetik enerjiye sahiptir?',
          steps: ['Proton için $z=1$, dolayısıyla $E_k = e\\,U$.', '$E_k = 5\\,\\text{MeV}$.', '<strong>Sonuç: 5 MeV</strong>'] },
        { task: '$+2e$ yüklü bir parçacık 3 MV gerilimi geçiyor. Hangi enerjiyi kazanır?',
          steps: ['$z=2$, dolayısıyla $E_k = 2\\cdot 3\\,\\text{MeV}$.', '<strong>Sonuç: 6 MeV</strong>'] }
      ]
    },
    'v8-higgs': {
      title: 'Higgs bozonu ve açık sorular',
      summary: 'Higgs alanı, Higgs bozonunun keşfi ve modern fiziğin çözülmemiş sorunları.',
      theory: [
        `<p>Higgs bozonu 2012 yılında LHC'de keşfedildi. Evrenin her yerinde bulunan Higgs alanının kuantumudur. Bu alanla etkileşen parçacıklar kütle kazanır; ne kadar güçlü etkileşirlerse o kadar ağır olurlar.</p>`,
        `<p>Higgs bozonunun kütlesi yaklaşık 125 GeV/$c^2$ dir; bu, protonun kütlesinin yaklaşık 133 katıdır. Bozon, iki fotona veya $Z$ bozonlarına bozunmalarıyla doğrulandı.</p>`,
        `<p>Açık sorular: <strong>karanlık madde</strong>, evrenin enerji içeriğinin yaklaşık %27 sini oluşturur ve standart model onu tanımlamaz. <strong>Nötrino kütleleri</strong> küçük ama sıfırdan farklıdır; bunu özgün model öngörmemişti. Standart model ayrıca <strong>çekimi</strong> içermez ve evrende neden antimaddeden daha fazla madde bulunduğunu açıklamaz.</p>`
      ],
      examples: [
        { task: 'Higgs bozonu protondan kaç kat ağırdır (protonun kütlesi yaklaşık 0,94 GeV/$c^2$)?',
          steps: ['$125/0{,}94\\approx 133$.', '<strong>Sonuç: yaklaşık 133 kat</strong>'] },
        { task: 'Evrenin enerjisinin yaklaşık ne kadarını karanlık madde oluşturur?',
          steps: ['Karanlık madde yaklaşık %27, sıradan madde ise yalnızca yaklaşık %5 tir.', '<strong>Sonuç: yaklaşık %27</strong>'] }
      ]
    }
  }
});
