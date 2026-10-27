/* Türkçe: üniversite düzeyindeki lekciler v9–v12 (js/rocniky/v9.js, v10.js, v11.js, v12.js). Yapı ve mekanizma: js/content-i18n.js. */
CONTENT_I18N.add('tr', {
  lessons: {
    'v9-kryst-struktury': {
      title: 'Kristal yapılar',
      summary: 'Birim hücre, kübik örgü türleri ve hücredeki atom sayısı.',
      theory: [
        `<p>Kristal, atomların uzayda düzenli bir <em>örgü</em> içinde dizildiği maddedir. Öteleme ile tekrarlanarak tüm örgüyü oluşturan en küçük parça <strong>birim hücredir</strong>.</p>`,
        `<p>Üç temel kübik hücre vardır: <em>basit kübik</em> (atomlar yalnızca köşelerde), <em>hacim merkezli kübik</em> (köşelere ek olarak merkezde de bir atom) ve <em>yüzey merkezli kübik</em> (köşelere ek olarak yüzeylerin merkezlerinde de atomlar).</p>`,
        `<p>Merkezdeki atom hücreye tamamen aittir, yüzeydeki atom yarısıyla, köşedeki atom ise sekizde biriyle aittir. Bu nedenle basit kübik hücrenin 1, hacim merkezli hücrenin 2 ve yüzey merkezli hücrenin 4 atomu vardır.</p>`,
        `<p>Düzenlenme mekanik özellikleri etkiler. Yüzey merkezli örgüye sahip metaller (Al, Cu, Au) şekil verilebilir (sünek) özelliktedir, çünkü atomik düzlemleri birbiri üzerinden kolayca kayabilir.</p>`,
        { fig: 'v9v12-bunka', caption: 'Birim hücre: basit, hacim merkezli ve yüzey merkezli kübik örgü ile her birine ait atom sayısı.' }
      ],
      examples: [
        { task: `Yüzey merkezli örgünün bir birim hücresine kaç atom aittir?`,
          steps: [`Sekiz köşe atomu, her biri hücreye sekizde biriyle aittir: $8\\cdot\\tfrac{1}{8}=1$.`, `Altı yüzey atomu, her biri yarısıyla aittir: $6\\cdot\\tfrac{1}{2}=3$.`, `<strong>Sonuç: $1+3=4$ atom</strong>`] },
        { task: `Hacim merkezli kübik hücrenin kaç atomu vardır?`,
          steps: [`Köşeler $8\\cdot\\tfrac{1}{8}=1$ atom verir.`, `Merkezdeki atom tamamen hücreye aittir, yani 1.`, `<strong>Sonuç: 2 atom</strong>`] }
      ]
    },

    'v9-vazby': {
      title: 'Katılardaki atomlar arası bağlar',
      summary: 'İyonik, kovalent, metalik ve van der Waals bağları ve bunların sonuçları.',
      theory: [
        `<p>Atomlar, sistemin toplam enerjisi azaldığında bir katı oluşturacak şekilde birleşir. Bağ, değerlik elektronlarının yeniden dağılması ya da ortaklaşa kullanılması ile oluşur.</p>`,
        `<ul><li><strong>İyonik</strong>: elektronlar bir atomdan diğerine geçer ve zıt yüklü iyonlar oluşur (örn. NaCl). Maddeler serttir, kırılgandır ve erime sıcaklıkları yüksektir.</li><li><strong>Kovalent</strong>: atomlar elektron çiftlerini ortaklaşa kullanır (elmas, silisyum). Bağlar güçlüdür, maddeler serttir.</li><li><strong>Metalik</strong>: değerlik elektronları tüm atomlara ait ortak bir „elektron gazı“ oluşturur (Cu, Fe). Metaller şekil verilebilir ve akımı iletir.</li><li><strong>Van der Waals</strong>: geçici dipoller arasındaki zayıf çekim kuvvetleri (örn. katı CO₂ veya grafit tabakaları). Kolayca kopar.</li></ul>`,
        `<p>Sertlik, iletkenlik ve erime sıcaklığı gibi katı maddenin özellikleri bağ türünün doğrudan sonucudur. Bağı bildiğimizde malzemenin nasıl davranacağını öngörebiliriz.</p>`
      ],
      examples: [
        { task: `Bakır metalinde hangi bağ vardır?`,
          steps: [`Bakır atomları değerlik elektronlarını ortak bir „denize“ bırakır.`, `<strong>Sonuç: metalik bağ</strong>`] },
        { task: `Elmas neden çok serttir?`,
          steps: [`Her karbon atomu dört komşusuna kovalent olarak bağlıdır.`, `Böyle sıkı bir ağı parçalamak çok enerji gerektirir.`, `<strong>Sonuç: kristalin tamamında sağlam kovalent bağlar</strong>`] }
      ]
    },

    'v9-elektricke-tepelne': {
      title: 'Malzemelerin elektriksel ve ısıl özellikleri',
      summary: 'Özdirenç, direncin sıcaklığa bağlılığı ve ısıl iletkenlik.',
      theory: [
        `<p>İletkenin direnci $R = \\rho\\dfrac{l}{S}$ ile verilir; burada $\\rho$ maddenin <em>özdirenci</em>, $l$ uzunluk ve $S$ kesit alanıdır. Bakırın özdirenci yaklaşık $1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$'dir. Daha uzun ve daha ince bir iletken daha büyük direnç gösterir.</p>`,
        `<p>Metal akımı iletir, çünkü valans elektronları örgü içinde serbestçe hareket eder. Sıcaklık arttığında bu hareketi örgü iyonlarının titreşimleri saçtırır; bu nedenle metalin direnci sıcaklıkla artar. Yarıiletkenlerde ve yalıtkanlarda ise sıcaklıkla daha fazla yük taşıyıcısı açığa çıkar ve direnç azalır.</p>`,
        `<p><strong>Isıl iletkenlik:</strong> metallerde ısıyı esas olarak serbest elektronlar, metal olmayanlarda ise örgü titreşimleri (fononlar) taşır. Bu nedenle bakır mükemmel bir ısı iletkenidir, cam ve seramik ise ısıyı yalıtır.</p>`
      ],
      examples: [
        { task: `Uzunluğu 50 m ve kesit alanı 2 mm² olan bakır telin direnci nedir? Bakırın özdirenci $\\rho=1{,}7\\cdot 10^{-8}\\,\\Omega\\cdot\\text{m}$.`,
          steps: [`Kesiti dönüştürürüz: $S=2\\,\\text{mm}^2=2\\cdot 10^{-6}\\,\\text{m}^2$.`, `$R=\\rho\\dfrac{l}{S}=1{,}7\\cdot 10^{-8}\\cdot\\dfrac{50}{2\\cdot 10^{-6}}=0{,}425\\,\\Omega$.`, `<strong>Sonuç: yaklaşık 0,43 Ω</strong>`] },
        { task: `Aynı malzeme ve kesite sahip iki iletkenden hangisinin direnci daha büyüktür: uzun olan mı, kısa olan mı?`,
          steps: [`Direnç uzunluk $l$ ile orantılıdır.`, `<strong>Sonuç: uzun olan</strong>`] }
      ]
    },

    'v9-pasova-teoria': {
      title: 'Katıların bant teorisi',
      summary: 'Kristaldeki enerji bantları ve maddelerin iletken, yarıiletken ve yalıtkan olarak sınıflandırılması.',
      theory: [
        `<p>Çok sayıda atom bir araya geldiğinde elektronların kesikli enerji seviyeleri <em>bantlara</em>, yani birbirine çok yakın seviyelerin kümelerine dönüşür. Bantlar arasında, elektronların bulunamayacağı, genişliği $E_g$ olan bir <strong>yasak bant</strong> yer alabilir.</p>`,
        `<p>En üstteki dolu bant <em>valans bandı</em>, onun üzerindeki bant ise <em>iletim bandıdır</em>. Elektronlar bantları alttan üste doldurur ve Pauli ilkesi bir durumu iki elektronla doldurmayı yasaklar. Tamamen dolu bant akımı iletmez, çünkü içindeki elektronların gidecek yeri yoktur.</p>`,
        `<ul><li><strong>İletken</strong> (metal): yasak bant yoktur, bantlar üst üste biner ve iletim bandı kısmen doludur.</li><li><strong>Yarıiletken</strong>: $E_g$ yaklaşık 0,1 ile 3 eV arasındadır (silisyumun 1,1 eV'si vardır). Oda sıcaklığında iletim bandına birkaç elektron geçer.</li><li><strong>Yalıtkan</strong>: $E_g$ 3 eV'den büyüktür (elmasın 5,5 eV'si vardır).</li></ul>`,
        { fig: 'v9v12-pasy', caption: "İletkende bantlar üst üste biner, yarıiletkende dar bir yasak bant E_g, yalıtkanda ise geniş bir yasak bant vardır." }
      ],
      examples: [
        { task: `Bir maddenin yasak bant genişliği $E_g = 0{,}67\\,\\text{eV}$'tur. İletken mi, yarıiletken mi, yalıtkan mı?`,
          steps: [`Değer 0,1 ile 3 eV arasındadır ve sıfır değildir.`, `<strong>Sonuç: yarıiletken (örn. germanyum)</strong>`] },
        { task: `Elmas ($E_g=5{,}5\\,\\text{eV}$) neden akımı iletmez?`,
          steps: [`Yasak bant çok geniştir.`, `Normal sıcaklıklarda elektronlar iletim bandına ulaşamaz.`, `<strong>Sonuç: yalıtkandır</strong>`] }
      ]
    },

    'v9-polovodice': {
      title: 'Yarıiletkenler ve transistörler',
      summary: 'Silisyumun katkılanması, PN eklemi ve transistörün çalışma ilkesi.',
      theory: [
        `<p>Saf silisyumun dört değerlik elektronu vardır ve kovalent olarak bağlanır. Oda sıcaklığında elektronların küçük bir kısmı iletim bandına geçer ve arkasında <em>boşluklar</em> bırakır; boşluk, bir elektronun geçebileceği yerdir. Buna öz iletkenlik denir.</p>`,
        `<p><strong>Katkılama</strong> iletkenliği artırır. Beş değerlik elektronlu bir element (fosfor, arsenik, antimon) fazladan bir serbest elektron verir ve yük taşıyıcılarının elektron olduğu $n$ tipi yarıiletken oluşur. Üç değerlik elektronlu bir element (bor, alüminyum, galyum) boşluklar oluşturur ve $p$ tipi yarıiletken oluşur.</p>`,
        `<p><strong>PN eklemi</strong> iki tipin birleştirilmesiyle oluşur. İleri yönde akım geçer, ters yönde pratikte geçmez. Transistör bu tür iki eklemden oluşur ve bir devredeki küçük akım diğer devredeki büyük akımı denetler.</p>`,
        `<p>Transistör yükselteç ve anahtar olarak kullanılır. Bilgisayarların ve cep telefonlarının tüm sayısal devreleri milyarlarca transistörden oluşur.</p>`,
        { fig: 'v9v12-pn', caption: "PN eklemde p bölgesinden gelen boşluklar, n bölgesinden gelen elektronlarla karşılaşır." }
      ],
      examples: [
        { task: `Silisyuma fosfor eklenirse hangi tip yarıiletken oluşur?`,
          steps: [`Fosforun 5 değerlik elektronu vardır, bunlardan biri fazladır.`, `<strong>Sonuç: $n$ tipi yarıiletken</strong>`] },
        { task: `Diyot ters yönde neden neredeyse akım iletmez?`,
          steps: [`PN eklemde serbest taşıyıcı içermeyen bir bölge oluşur.`, `Ters yönde gerilim artırıldığında bu bölge yalnızca genişler.`, `<strong>Sonuç: akım pratikte geçmez</strong>`] }
      ]
    },

    'v9-supravodivost': {
      title: 'Süper iletkenlik',
      summary: 'Kritik sıcaklığın altında sıfır direnç, Meissner etkisi ve yüksek sıcaklık süper iletkenleri.',
      theory: [
        `<p>Süper iletkenlik, bir maddenin <em>kritik sıcaklık</em> $T_c$ altında elektrik direncini tamamen kaybettiği durumdur. Bu durumda akım, kayıpsız olarak akabilir.</p>`,
        `<p><strong>Meissner etkisi</strong>: süper iletken manyetik alanı kendi içinden dışarı iter. Bu nedenle süper iletken bir mıknatısın üzerinde havada asılı kalır.</p>`,
        `<p>Kurşun veya niyobyum gibi klasik süper iletkenlerin $T_c$ değeri birkaç kelvindir ve sıvı helyumla ($4{,}2\\,\\text{K}$) soğutulur. Yüksek sıcaklıklı süper iletkenler (kupratlar, örn. $T_c\\approx 92\\,\\text{K}$ olan YBCO) daha ucuz olan sıvı azotla ($77\\,\\text{K}$) soğutulabilir.</p>`,
        `<p>BCS kuramına göre kristaldeki elektronlar, örgü titreşimlerinin değişimi sayesinde <em>Cooper çiftleri</em> oluşturur. Bu çiftler saçılmadan hareket eder; bu nedenle direnç sıfırdır.</p>`,
        { fig: 'v9v12-supra', caption: "Kritik sıcaklık Tc'nin altında süper iletkenin direnci sıfıra düşer, normal bir metalin direnci ise sıcaklıkla artar." }
      ],
      examples: [
        { task: `Niyobyumun kritik sıcaklığı $T_c=9{,}2\\,\\text{K}$'dir. Bu sıcaklık Celsius derecesi cinsinden kaçtır?`,
          steps: [`$t = T - 273{,}15$.`, `$t = 9{,}2 - 273{,}15 = -263{,}95\\,{}^{\\circ}\\text{C}$.`, `<strong>Sonuç: yaklaşık -263,95 °C</strong>`] },
        { task: `Süper iletken neden bir mıknatısın üzerinde havada asılı kalır?`,
          steps: [`Manyetik alan süper iletkenin içine giremez (Meissner etkisi).`, `Yüzeyde indüklenen akımlar, mıknatısın ittiği bir alan oluşturur.`, `<strong>Sonuç: itici kuvvet süper iletkeni yukarı kaldırır</strong>`] }
      ]
    },

    'v9-magneticke': {
      title: 'Manyetik malzemeler',
      summary: 'Diyamanyetizma, paramanyetizma ve ferromanyetizma; domenler ve Curie sıcaklığı.',
      theory: [
        `<p>Maddeler manyetik alandaki davranışlarına göre <strong>diyamanyetik</strong> (zayıf itilen, örn. bakır, çinko), <strong>paramanyetik</strong> (zayıf çekilen, örn. alüminyum, platin) ve <strong>ferromanyetik</strong> (kuvvetle çekilen, örn. demir, nikel, kobalt) olarak ayrılır.</p>`,
        `<p>Ferromanyetiklerde atomların manyetik momentleri ortak yönde hizalanmış bölgelere, yani <em>domenlere</em> dizilir. Alan yokken domenler rastgele yönlüdür ve toplam moment sıfırdır. Dış alan domenleri hizalar ve madde mıknatıslanır.</p>`,
        `<p>Atomların ısıl hareketi, <em>Curie sıcaklığı</em> $T_C$ üzerinde domenleri bozar ve ferromanyetizma kaybolur. Demirin $T_C\\approx 770\\,{}^{\\circ}\\text{C}$'dir.</p>`,
        `<p>Transformatör sacı gibi yumuşak manyetik malzemeler kolayca mıknatıslanır ve mıknatıslanmadan çıkar. Kalıcı mıknatıs gibi sert malzemeler ise mıknatıslanmayı korur.</p>`,
        { fig: 'v9v12-domeny', caption: "Ferromanyetikte alan yokken domenler rastgele yönlüdür; dış alanda hizalanır ve madde mıknatıslanır." }
      ],
      examples: [
        { task: `Ataş bir mıknatısa yapışır, bakır tel neden yapışmaz?`,
          steps: [`Ataş, demir içeren çelikten yapılmıştır; domenleri mıknatısın alanında hizalanır.`, `Bakır diyamanyetiktir; tepkisi zayıf ve itici yöndedir.`, `<strong>Sonuç: ataş ferromanyetiktir</strong>`] },
        { task: `Demirin Curie sıcaklığı 770 °C'dir. 800 °C'ye ısıtılırsa ne olur?`,
          steps: [`800 °C, Curie sıcaklığının üzerindedir.`, `Domenler dağılır ve demir kalıcı mıknatıslanmasını kaybeder.`, `<strong>Sonuç: artık ferromanyetik değildir</strong>`] }
      ]
    },

    'v9-nanomaterialy': {
      title: 'Nanomalzemeler ve kuantum malzemeler',
      summary: 'Nanomalzemelerde yüzey/hacim oranı ve kuantum malzeme örnekleri.',
      theory: [
        `<p>Nanomalzemelerin en az bir boyutu yaklaşık 1 ile 100 nm aralığındadır. Boyut küçüldükçe yüzey/hacim oranı artar ve atomların büyük bir kısmı yüzeyde bulunur. Renk, erime sıcaklığı veya reaktiflik gibi özellikler, aynı maddenin büyük parçasından belirgin biçimde farklı olabilir.</p>`,
        `<p>Kenarı $a$ olan bir küp için $S = 6a^2$ ve $V = a^3$'tür; dolayısıyla $\\dfrac{S}{V}=\\dfrac{6}{a}$'dır. Oran kenar uzadıkça azalır; bu nedenle kenar paydadadır. Kenar on kat küçülürse oran on kat artar.</p>`,
        `<p><strong>Kuantum malzemeler</strong>, kuantum mekaniğinin etkilerini makroskopik ölçekte gösterir. Örnekler: grafen (yüksek elektron hareketliliğine sahip tek bir karbon atomu tabakası), kuantum noktaları (boyut, yayılan ışığın rengini belirler) ve topolojik yalıtkanlar.</p>`,
        { fig: 'v9v12-nano', caption: "Bir küpün daha küçük küplere bölünmesi hacmi korur, ancak yüzeyi büyütür. S/V oranı boyut küçüldükçe artar." }
      ],
      examples: [
        { task: `Bir küpün kenarı $a=2\\,\\text{nm}$'dir. $S/V$ oranı nedir?`,
          steps: [`$\\dfrac{S}{V}=\\dfrac{6a^2}{a^3}=\\dfrac{6}{a}$.`, `$\\dfrac{6}{2}=3\\,\\text{nm}^{-1}$.`, `<strong>Sonuç: 3 nm⁻¹</strong>`] },
        { task: `Kenar iki katına çıkarılırsa $S/V$ oranı nasıl değişir?`,
          steps: [`$S/V = 6/a$, kenarla ters orantılıdır.`, `Kenarı iki katına çıkarmak oranı yarıya indirir.`, `<strong>Sonuç: yarıya düşer</strong>`] }
      ]
    },

    'v10-hviezdy': {
      title: 'Yıldızların oluşumu, evrimi ve yapısı',
      summary: 'Bir yıldızın nasıl oluştuğu, neden dengede kaldığı ve parlaklığının yarıçap ve sıcaklıkla ilişkisi.',
      theory: [
        `<p>Yıldız, yıldızlararası gaz ve toz bulutundan, yani <em>bulutsudan</em> oluşur. Yerçekimi maddeyi sıkıştırır, gaz ısınır ve çekirdekteki sıcaklık yaklaşık on milyonlarca kelvine ulaşınca hidrojenin helyuma dönüştüğü termonükleer füzyon başlar.</p>`,
        `<p><strong>Yıldız neden çökmez?</strong> Yerçekimi yıldızı içe doğru sıkıştırmaya çalışır; sıcak gazın ve ışınımın basıncı ise ters yönde etki eder. Bu iki etki dengede olduğunda <em>hidrostatik denge</em> söz konusudur. Yıldız bu denge sürdüğü sürece kararlıdır.</p>`,
        `<p><strong>Parlaklık</strong> $L$, yıldızın yaydığı toplam güçtür. Stefan–Boltzmann yasasına göre $L=4\\pi R^2\\sigma T^4$'tür; burada $R$ yarıçap, $T$ yüzey sıcaklığıdır. Parlaklık yarıçapın karesiyle, sıcaklığın ise dördüncü kuvvetiyle artar; bu nedenle küçük bir sıcaklık değişimi parlaklığı belirgin biçimde değiştirir.</p>`,
        `<p>Yıldızları <strong>Hertzsprung–Russell diyagramında</strong> sıralarız: yatay eksende sıcaklık (ya da renk), dikey eksende parlaklık bulunur. Güneş dahil çoğu yıldız, çekirdeğinde hidrojen yaktığı ana dizi bandında yer alır.</p>`,
        { fig: 'v9v12-hr', caption: "Hertzsprung–Russell diyagramı: ana dizi yıldızları hidrojen yakar, devler daha parlaktır, beyaz cüceler yüksek sıcaklıkta daha sönüktür." }
      ],
      examples: [
        { task: `Bir yıldızın yarıçapı Güneş'in üç katı, yüzey sıcaklığı ise iki katıdır. Güneş'ten kaç kat daha parlaktır?`,
          steps: [`Parlaklık oranı: $\\frac{L}{L_\\odot}=\\left(\\frac{R}{R_\\odot}\\right)^2\\left(\\frac{T}{T_\\odot}\\right)^4$.`, `$=3^2\\cdot 2^4=9\\cdot 16=144$.`, `<strong>Sonuç: 144 kat</strong>`] }
      ]
    },

    'v10-galaxie': {
      title: 'Galaksiler ve evrimleri',
      summary: 'Başlıca galaksi türleri ve bunların yıldızlar, gaz ve şekil bakımından farkları.',
      theory: [
        `<p>Galaksi; yıldızlardan, gazdan, tozdan ve karanlık maddeden oluşan, kütleçekimsel olarak bağlı bir sistemdir. Galaksiler başlıca şekillerine göre ayrılır: <strong>eliptik</strong> (pürüzsüz, yaşlı yıldızlardan oluşan), <strong>sarmal</strong> (kollu yassı disk) ve <strong>düzensiz</strong>.</p>`,
        `<p>Galaksinin şekli, içinde kalan gaz miktarıyla yakından ilişkilidir. Gaz yeni yıldızlar için hammaddedir: sarmal kollarda sürekli genç mavi yıldızlar doğar; eliptik galaksilerde ise gaz neredeyse tükenmiş ve yıldız oluşumu durmuştur.</p>`,
        `<p>Galaksiler madde birikimiyle kademeli olarak oluşur ve sık sık diğer galaksilerle <strong>çarpışarak ve birleşerek</strong> büyür. Bu sırada kütleçekimsel etkileşim her iki galaksinin şeklini değiştirebilir ve yeni bir yıldız oluşumu dalgasını tetikleyebilir.</p>`
      ],
      examples: [
        { task: `Bir galaksinin pürüzsüz eliptik bir şekli vardır ve neredeyse hiç gazı yoktur. İçinde hangi yıldızlar baskındır?`,
          steps: [`Galaksideki yıldız oluşumu gaz miktarına bağlıdır.`, `Gaz olmadan yeni yıldızlar doğmaz; eski, kırmızımsı yıldızlar kalır.`, `<strong>Sonuç: yaşlı yıldızlar</strong>`] }
      ]
    },

    'v10-cierne-diery': {
      title: 'Kara delikler ve nötron yıldızları',
      summary: 'Kara delik yarıçapını neyin belirlediği ve yakıt tükendikten sonra neden nötron yıldızı ya da kara delik oluştuğu.',
      theory: [
        `<p>Yeterince kütleli bir yıldız nükleer yakıtını tükettiğinde çekirdeği çöker. Kalan kütle yaklaşık 1,4 Güneş kütlesini aşmıyorsa, nötronların basıncıyla tutulan, yarıçapı yaklaşık 10 km olan yoğun bir küre, yani <strong>nötron yıldızı</strong> oluşur.</p>`,
        `<p><strong>Kara delik</strong>, kütle daha büyükse oluşur. Yakınındaki kütleçekim o kadar güçlüdür ki ışık bile <em>olay ufku</em> adı verilen sınırın dışına çıkamaz. Bu sınırın yarıçapı Schwarzschild yarıçapıdır.</p>`,
        `<p>Schwarzschild yarıçapı $r_s=\\frac{2GM}{c^2}$'dir; burada $G$ kütleçekim sabiti, $M$ kütle ve $c$ ışık hızıdır. Güneş'in kütlesi için yaklaşık $2{,}95\\,\\text{km}$ çıkar. Yarıçap kütleyle orantılıdır; dolayısıyla iki kat ağır bir kara deliğin ufku iki kat büyüktür.</p>`,
        { fig: 'v9v12-cierna-diera', caption: "Schwarzschild yarıçapı kütleyle orantılıdır. İki kat ağır bir kara deliğin ufku iki kat büyüktür." }
      ],
      examples: [
        { task: `Kütlesi $5\\,M_\\odot$ olan bir kara deliğin Schwarzschild yarıçapı nedir?`,
          steps: [`$r_s\\approx 2{,}95\\,\\text{km}\\cdot 5$.`, `$r_s\\approx 14{,}75\\,\\text{km}$.`, `<strong>Sonuç: yaklaşık 14,75 km</strong>`] }
      ]
    },

    'v10-exoplanety': {
      title: 'Ötegezegenler ve gezegen sistemleri',
      summary: 'Astronomların diğer yıldızların çevresinde gezegenleri nasıl bulduğu ve gözlemlerden neler çıkardığı.',
      theory: [
        `<p><strong>Ötegezegen</strong>, Güneş'ten başka bir yıldızın çevresinde dolanan gezegendir. Doğrudan görülmesi yalnızca istisnai durumlarda mümkündür; bu nedenle dolaylı olarak, çoğunlukla <em>geçiş</em> (transit) yöntemiyle ya da yıldızın hareketinin ölçülmesiyle aranır.</p>`,
        `<p><strong>Geçiş yöntemi:</strong> gezegen yıldızın önünden geçtiğinde yıldızın parlaklığı kısa süreliğine düşer. Parlaklık düşüşü, gezegenin örttüğü alanla orantılıdır: $\\Delta\\text{parlaklık}=\\left(\\frac{r_p}{R}\\right)^2$. Dikkat: bu, yarıçapların oranının karesidir.</p>`,
        `<p><strong>Doppler yöntemi:</strong> gezegen yıldızı kütleçekimiyle çeker ve yıldız gözlemde ileri geri hafifçe hareket eder. Tayf çizgilerinin kayması bu hareketi ortaya çıkarır; gezegen görünmese bile.</p>`,
        { fig: 'v9v12-tranzit', caption: "Gezegen geçişi sırasında yıldızın parlaklığı, alanların oranı kadar, yani (r_p/R)² kadar kısa süre düşer." }
      ],
      examples: [
        { task: `Gezegenin yarıçapı, yıldızın yarıçapının onda biri kadardır. Geçiş sırasında yıldızın parlaklığı yüzde kaç düşer?`,
          steps: [`$\\left(\\frac{1}{10}\\right)^2=\\frac{1}{100}$.`, `Parlaklık $1\\,\\%$ düşer.`, `<strong>Sonuç: %1</strong>`] }
      ]
    },

    'v10-rozpinanie': {
      title: 'Evrenin genişlemesi',
      summary: 'Hubble yasası: bir galaksi ne kadar uzaktaysa, bizden o kadar hızlı uzaklaşır.',
      theory: [
        `<p>Edwin Hubble, uzak galaksilerin tayflarının kırmızıya kaydığını buldu. Bu <em>kırmızıya kayma</em>, galaksilerin bizden uzaklaştığı anlamına gelir. Galaksi ne kadar uzaktaysa kayma da o kadar büyüktür.</p>`,
        `<p><strong>Hubble yasası:</strong> $v=H_0\\,d$, burada $v$ uzaklaşma hızı, $d$ uzaklık ve $H_0$ Hubble sabitidir. Değeri yaklaşık $70\\,\\text{km/s/Mpc}$'dir; $1\\,\\text{Mpc}\\approx 3{,}26$ milyon ışık yılıdır.</p>`,
        `<p>Önemli olan şudur: <strong>galaksiler uzayda hareket ederek uzaklaşmaz</strong>, aralarındaki uzayın kendisi genişler. Bu nedenle uzaktaki galaksiler, kendi hızları olmasa bile daha hızlı uzaklaşır.</p>`,
        { fig: 'v9v12-hubble', caption: "Hubble yasası: galaksilerin uzaklaşma hızı, uzaklıklarıyla orantılıdır." }
      ],
      examples: [
        { task: `Bir galaksi $100\\,\\text{Mpc}$ uzaklıktadır. Uzaklaşma hızı nedir?`,
          steps: [`$v=H_0\\,d=70\\cdot 100$.`, `<strong>Sonuç: 7000 km/s</strong>`] }
      ]
    },

    'v10-velky-tresk': {
      title: 'Büyük Patlama ve kozmik mikrodalga arka plan',
      summary: 'Evrenin sıcak bir evreden nasıl doğduğu ve bugün neden her yönden zayıf bir ışınım gözlediğimiz.',
      theory: [
        `<p><strong>Büyük Patlama</strong> modeline göre evren bir zamanlar çok yoğun ve sıcaktı. O zamandan beri genişliyor ve soğuyor. Boş uzayda bir patlama değil, uzayın kendisinin genişlemesi söz konusudur.</p>`,
        `<p>Başlangıçtan kısa süre sonra evren ışınımla doluydu; atomlar oluştuğunda birden saydam hale geldi. Bu ışınım o zamandan beri yalnızca genişledi ve bugün yaklaşık $2{,}725\\,\\text{K}$ sıcaklıkta <strong>kozmik mikrodalga arka plan</strong> olarak görülür.</p>`,
        `<p>Genişleme, ışınımın dalga boylarını evrenin ölçeğiyle aynı oranda büyütür. Bu nedenle geçmişte ışınımın sıcaklığı $(1+z)$ ile orantılıdır; burada $z$ kırmızıya kaymadır. $z=1$ için sıcaklık bugünkünün iki katıydı.</p>`,
        { fig: 'v9v12-natiahnutie', caption: "Evrenin genişlemesi ışınımın dalga boyunu uzatır; bu nedenle bugünkü mikrodalga arka planın sıcaklığı daha düşüktür." }
      ],
      examples: [
        { task: `Kırmızıya kayma $z=3$ iken ışınımın sıcaklığı neydi?`,
          steps: [`$T(z)=T_0(1+z)=2{,}725\\cdot(1+3)$.`, `$=10{,}9\\,\\text{K}$.`, `<strong>Sonuç: yaklaşık 10,9 K</strong>`] }
      ]
    },

    'v10-temna-hmota': {
      title: 'Karanlık madde ve karanlık enerji',
      summary: 'Görünmez madde ve enerjiye dair kanıtlar ve bunların evrenin toplam yoğunluğundaki payı.',
      theory: [
        `<p><strong>Karanlık madde</strong>, kütleçekimiyle görünmez biçimde ilişkilidir; ama ışık yaymaz ve soğurmaz. Kanıtı, galaksi kenarındaki yıldızların hızıdır; karanlık madde olmadan bu hızlar galaksiyi bir arada tutmak için fazla büyük olurdu.</p>`,
        `<p><strong>Karanlık enerji</strong>, evrenin genişlemesini hızlandıran bileşendir. Uzak süpernovaların gözlemi, genişlemenin bugün hızlandığını göstermiştir.</p>`,
        `<p>Bugünkü evrenin payları yaklaşık olarak şöyledir: sıradan madde $\\approx 5\\,\\%$, karanlık madde $\\approx 27\\,\\%$ ve karanlık enerji $\\approx 68\\,\\%$. Evren düzse toplam yoğunluk $\\Omega=1$'dir ve $\\Omega_\\Lambda=1-\\Omega_m$ geçerlidir.</p>`,
        { fig: 'v9v12-zlozenie', caption: "Bugünkü evrenin payları: sıradan madde yaklaşık %5, karanlık madde %27, karanlık enerji %68." }
      ],
      examples: [
        { task: `Madde yoğunluğu $\\Omega_m=0{,}3$'tür. Düz bir evrende karanlık enerji hangi payı oluşturur?`,
          steps: [`$\\Omega_\\Lambda=1-\\Omega_m=1-0{,}3$.`, `<strong>Sonuç: 0,7</strong>`] }
      ]
    },

    'v10-kozmologicke-modely': {
      title: 'Evrenin kozmolojik modelleri',
      summary: 'Toplam yoğunluğun evrenin açık, düz veya kapalı olduğunu nasıl belirlediği.',
      theory: [
        `<p>Kozmolojik model, evrenin geometrisini ve evrimini tanımlar. Anahtar, toplam ortalama yoğunluk $\\rho$'nun <em>kritik yoğunluk</em> $\\rho_c$'ye oranıdır; bu oran $\\Omega=\\rho/\\rho_c$ ile gösterilir.</p>`,
        `<ol>
        <li>$\\Omega &lt; 1$: <strong>açık</strong> evren, sonsuza dek genişler.</li>
        <li>$\\Omega = 1$: <strong>düz</strong> evren, uzayın geometrisi Öklidyen'dir.</li>
        <li>$\\Omega &gt; 1$: <strong>kapalı</strong> evren, pozitif eğriliğe sahiptir.</li>
      </ol>`,
        `<p>Artık ışınım gözlemleri, bugünkü evrenin düzlüğe çok yakın olduğunu gösterir. Karanlık enerjiyi içeren modern model, bu nedenle toplam yoğunluğun bire yakın olmasını bekler.</p>`
      ],
      examples: [
        { task: `Evrenin $\\Omega=0{,}4$'tür. Modeli nedir?`,
          steps: [`Karşılaştırırız: $0{,}4&lt;1$.`, `<strong>Sonuç: açık evren</strong>`] }
      ]
    },

    'v11-hydrostatika': {
      title: 'Hidrostatik',
      summary: 'Durgun bir sıvıdaki basınç yalnızca derinliğe ve yoğunluğa bağlıdır, kabın şekline bağlı değildir.',
      theory: [
        `<p><strong>Hidrostatik</strong>, durgun haldeki sıvıları inceler. $h$ derinliğindeki sıvı basıncı $p=\\rho g h$'dir; burada $\\rho$ sıvının yoğunluğu, $g$ yerçekimi ivmesidir. Bu, <em>aşırı basınçtır</em>, yani atmosfer basıncının üzerindeki basınçtır.</p>`,
        `<p>Basınç kabın şekline bağlı değildir. Aynı derinlikteki geniş ve dar bir kapta dibindeki basınç aynıdır. Bu görünürdeki paradoks, sıvının ağırlığını dibin değil kabın duvarının taşımasıyla açıklanır.</p>`,
        `<p>Toplam (mutlak) basınç $p=p_0+\\rho g h$'dir; burada $p_0$ atmosfer basıncıdır. Sıvı içindeki basınç farkı yükseklik farkıyla orantılıdır; bu nedenle basınç aşağı doğru artar.</p>`,
        `<p><strong>Pascal yasası:</strong> kapalı bir sıvıya uygulanan basınç her yöne aynen iletilir. Bu, hidrolik vinçlerde kullanılır: küçük pistona uygulanan küçük bir kuvvet, büyük pistonda büyük bir yükü kaldırır.</p>`,
        { fig: 'v9v12-nadoba', caption: "Sıvıdaki basınç derinliğe h bağlıdır, kabın şekline bağlı değildir. İki kabın dibindeki basınç aynıdır." }
      ],
      examples: [
        { task: `Suyun $4\\,\\text{m}$ derinliğindeki aşırı basıncı nedir? Suyun yoğunluğu $1000\\,\\text{kg/m}^3$, $g=9{,}81\\,\\text{m/s}^2$.`,
          steps: [`$p=\\rho g h=1000\\cdot 9{,}81\\cdot 4=39\\,240\\,\\text{Pa}$.`, `<strong>Sonuç: 39,24 kPa</strong>`] }
      ]
    },

    'v11-tlak-vztlak': {
      title: 'Basınç ve kaldırma kuvveti',
      summary: 'Arşimet yasası: sıvıya daldırılmış cisme, taşırılan sıvının ağırlığına eşit bir kaldırma kuvveti etki eder.',
      theory: [
        `<p>Sıvıya daldırılmış cisme yukarı yönde bir kuvvet etki eder ve onu hafifletir. Bu <strong>kaldırma kuvvetini</strong> Arşimet yasası belirler: $F_{vz}=\\rho_k\\,g\\,V$; burada $\\rho_k$ sıvının yoğunluğu, $V$ ise cismin daldırılmış kısmının hacmidir.</p>`,
        `<p>Kaldırma kuvveti derinliğe ve cismin yoğunluğuna değil, yalnızca taşırılan sıvının hacmine bağlıdır. Buna taşırılan sıvının ağırlığı denir.</p>`,
        `<p>Yüzmeyi yoğunlukların karşılaştırılması belirler. Yoğunluğu sıvınınkinden küçük olan cisim yüzer ve taşırdığı sıvının ağırlığı, cismin tamamının ağırlığına eşit olana kadar batar. Yoğunluğu büyük olan cisim dibe batar.</p>`,
        { fig: 'obr-vztlak', caption: 'Kaldırma kuvveti Fvz yukarı, ağırlık Fg aşağı yönlüdür. Daldırılmış cisim, taşırılan sıvının ağırlığı kadar hafifler.' }
      ],
      examples: [
        { task: `Hacmi $3\\,\\text{dm}^3$ olan bir cisim suda tamamen daldırılmıştır. Kaldırma kuvveti nedir?`,
          steps: [`$V=3\\,\\text{dm}^3=0{,}003\\,\\text{m}^3$.`, `$F_{vz}=1000\\cdot 9{,}81\\cdot 0{,}003=29{,}43\\,\\text{N}$.`, `<strong>Sonuç: 29,43 N</strong>`] }
      ]
    },

    'v11-kontinuita': {
      title: 'Süreklilik denklemi',
      summary: 'Akışkan ne kaynaktan akıyor ne de içinde oluşuyorsa, kesit alanı ile hızın çarpımı sabittir.',
      theory: [
        `<p>Sıkıştırılamaz bir akışkanın kararlı akışında madde birikmez ve kaybolmaz. Bu nedenle birim zamanda her kesitten aynı hacim geçmelidir: $S_1 v_1 = S_2 v_2 = \\text{sabit}$.</p>`,
        `<p>$Q=S\\,v$ niceliğine <strong>hacimsel debi</strong> denir. Boru daraldığında su daha hızlı akar. Bu nedenle nehir dar bir bölümde hızlanır, geniş bir ovada yavaşlar.</p>`,
        `<p>Süreklilik denklemi, akışkan akışı için kütlenin korunumu yasasıdır. Sıkıştırılamaz akışkanlar için tam olarak, gazlar için ise düşük hızlarda yaklaşık olarak geçerlidir.</p>`,
        { fig: 'v9v12-kontinuita', caption: 'Sıkıştırılamaz bir sıvıda S₁v₁ = S₂v₂ geçerlidir. Kesitin küçük olduğu yerde sıvı daha hızlı akar.' }
      ],
      examples: [
        { task: `Bir boru, $6\\,\\text{cm}^2$ kesitten $2\\,\\text{cm}^2$ kesite daralıyor. Geniş kısımda su $1{,}5\\,\\text{m/s}$ hızla akıyor. Dar kısımdaki hız nedir?`,
          steps: [`$S_1 v_1=S_2 v_2$, yani $v_2=\\frac{6\\cdot 1{,}5}{2}$.`, `<strong>Sonuç: 4,5 m/s</strong>`] }
      ]
    },

    'v11-bernoulli': {
      title: 'Bernoulli denklemi',
      summary: 'Akan sıvıdaki enerji korunur: hızın yüksek olduğu yerde basınç düşüktür.',
      theory: [
        `<p><strong>Bernoulli denklemi</strong>, ideal, sıkıştırılamaz ve sürtünmesiz bir akan sıvı için enerjinin korunumunu ifade eder: $p+\\frac{1}{2}\\rho v^2+\\rho g h=\\text{sabit}$. Soldaki terimler, birim hacim başına basınç, kinetik ve potansiyel enerjidir.</p>`,
        `<p>Yatay bir boru için ($h$ aynıdır) $p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2$ geçerlidir. Bir yerde hız artarsa, orada basınç düşer.</p>`,
        `<p>Bu olaya <strong>Venturi etkisi</strong> denir; karbüratörlerde, Venturi debimetrelerinde ve vakum pompalarında kullanılır. Esas olarak borunun daraldığı yerlerde ortaya çıkar.</p>`,
        { fig: 'v9v12-venturi', caption: 'Daralan yerde hız artar ve basınç düşer. Manometre borularındaki seviyeler bunu gösterir.' }
      ],
      examples: [
        { task: `Yatay bir boruda su akar; dar kesitteki hız $6\\,\\text{m/s}$, geniş kesitteki hız $2\\,\\text{m/s}$'dir. Basınç farkı $p_1-p_2$ kPa cinsinden nedir?`,
          steps: [`$p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}\\cdot 1000\\cdot(36-4)$.`, `$=16\\,000\\,\\text{Pa}$.`, `<strong>Sonuç: 16 kPa</strong>`] }
      ]
    },

    'v11-viskozita': {
      title: 'Viskozite ve laminer akış',
      summary: 'Sıvıların iç sürtünmesi, Newton yasası ve yavaş hareket eden bir küreciğe karşı direnç.',
      theory: [
        `<p><strong>Viskozite</strong> (dinamik viskozite $\\eta$), sıvının iç sürtünmesinin ölçüsüdür. Bal, sudan daha yüksek viskoziteye sahiptir, çünkü sıvı tabakaları birbirine karşı zor kayar. Birimi $\\text{Pa}\\cdot\\text{s}$'dir.</p>`,
        `<p><strong>Laminer akış</strong> düzgündür; sıvı tabakaları karışmadan birbirinin üzerinden kayar. Bir cismin sıvı içindeki yavaş hareketinde hıza orantılı bir direnç oluşur: yarıçapı $r$ olan küre için <em>Stokes yasası</em> $F=6\\pi\\eta r v$'dir.</p>`,
        `<p>Yarıçap ile çap arasındaki farka dikkat edin: formülde yarıçap $r$ yer alır. Çapı yerine koyarsanız kuvvet iki kat çıkar.</p>`,
        { fig: 'v9v12-vrstvy', caption: "Laminer akışta sıvı tabakaları birbirine göre kayar; iç sürtünme direnç oluşturur." }
      ],
      examples: [
        { task: `Yarıçapı $1\\,\\text{cm}$ olan bir küreciğin $\\eta=2\\,\\text{Pa}\\cdot\\text{s}$ viskoziteli bir sıvıdaki hızı $0{,}5\\,\\text{m/s}$'dir. Direnç nedir?`,
          steps: [`$F=6\\pi\\eta r v=6\\pi\\cdot 2\\cdot 0{,}01\\cdot 0{,}5$.`, `$F\\approx 0{,}188\\,\\text{N}$.`, `<strong>Sonuç: yaklaşık 188 mN</strong>`] }
      ]
    },

    'v11-turbulencia': {
      title: 'Türbülans',
      summary: 'Reynolds sayısı, akışın düzgün mü yoksa girdaplı mı olacağını belirler.',
      theory: [
        `<p>Daha büyük hızlarda ve çaplarda laminer akış <strong>türbülansa</strong> dönüşür: girdaplar ve karışımlar oluşur; bunlar zamanda ve uzayda düzensiz biçimde değişir.</p>`,
        `<p>Akış türünü <strong>Reynolds sayısı</strong> $\\text{Re}=\\frac{\\rho v d}{\\eta}$ belirler; burada $d$ karakteristik boyuttur (örneğin borunun çapı). Boru için yaklaşık olarak: $\\text{Re}&lt;2300$ laminer, $\\text{Re}&gt;4000$ türbülanslı; aradaki bölgede ise geçiş akışı geçerlidir.</p>`,
        `<p>Türbülans akış direncini ve maddelerin karışmasını artırır. Bu nedenle pratikte akışı düzgünleştirmeye çalışırız, örneğin uçak kanatlarında; tersine, yakıtın daha iyi karışması için türbülans oluştururuz.</p>`,
        { fig: 'v9v12-profil', caption: "Laminer akışta kesit boyunca hız paraboliktir; türbülanslı akışta profil daha düzdür." }
      ],
      examples: [
        { task: `Su ($\\rho=1000\\,\\text{kg/m}^3$, $\\eta=10^{-3}\\,\\text{Pa}\\cdot\\text{s}$) çapı $0{,}05\\,\\text{m}$ olan bir borudan $1\\,\\text{m/s}$ hızla akıyor. Reynolds sayısı nedir?`,
          steps: [`$\\text{Re}=\\frac{1000\\cdot 1\\cdot 0{,}05}{10^{-3}}$.`, `<strong>Sonuç: Re = 50 000, akış türbülanslıdır</strong>`] }
      ]
    },

    'v11-aerodynamika': {
      title: 'Gaz akışı ve aerodinamik',
      summary: 'Aerodinamik direnç ve kaldırma: neye bağlı oldukları ve neden hızın karesiyle arttıkları.',
      theory: [
        `<p>Gazlar olağan hızlarda neredeyse sıkıştırılamaz ve birçok bakımdan sıvılarla aynı yasalarla tanımlanabilir. Havada hareket eden cisimler <strong>aerodinamik dirençle</strong> yavaşlatılır.</p>`,
        `<p>Direnci $F=\\frac{1}{2}\\,c_w\\,\\rho\\,S\\,v^2$ formülü verir; burada $c_w$ direnç katsayısı (cismin şekli), $\\rho$ havanın yoğunluğu, $S$ ön alan ve $v$ hızdır. Direnç hızın <strong>karesiyle</strong> artar: iki kat hız dört kat direnç demektir.</p>`,
        `<p>Uçağın veya aracın kanadı <strong>kaldırma</strong> üretir, çünkü üstündeki akış daha hızlı ve basınç daha düşüktür (Bernoulli). Bu nedenle etrafından akan şekli, direnç mümkün olduğunca küçük, kaldırma ise mümkün olduğunca büyük olacak biçimde tasarlarız.</p>`,
        { fig: 'v9v12-krido', caption: 'Kanadın üstünde akış daha hızlı ve basınç daha düşük, altında ise basınç daha yüksektir. Basınç farkı kaldırmayı oluşturur.' }
      ],
      examples: [
        { task: `Bir otomobilin ön alanı $2\\,\\text{m}^2$, direnç katsayısı $c_w=0{,}5$ ve hızı $20\\,\\text{m/s}$'dir. Hava direnci nedir? Havanın yoğunluğu $1{,}2\\,\\text{kg/m}^3$.`,
          steps: [`$F=\\frac{1}{2}\\cdot 0{,}5\\cdot 1{,}2\\cdot 2\\cdot 20^2$.`, `$=0{,}6\\cdot 400=240\\,\\text{N}$.`, `<strong>Sonuç: 240 N</strong>`] }
      ]
    },

    'v12-modelovanie': {
      title: 'Fiziksel olayların matematiksel modellenmesi',
      summary: 'Fiziksel bir akıl yürütmeden matematiksel model kurmak ve modelin gözlemle uyuşup uyuşmadığını doğrulamak.',
      theory: [
        `<p><strong>Model</strong>, bir olayın basitleştirilmiş matematiksel tanımıdır. Önce sonucu etkileyen nicelikleri belirleriz, sonra aralarındaki bağıntıları yazarız ve en sonunda hesabın ölçüme veya makul beklentiye uyup uymadığını kontrol ederiz.</p>`,
        `<p>Tipik bir örnek <strong>radyoaktif bozunmadır</strong>. Bozunmamış çekirdeklerin sayısı, anlık sayılarıyla orantılı olarak azalır; bu üstel bir yasaya yol açar. Yarılanma süresi $T_{1/2}$ için $N(t)=N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$ geçerlidir.</p>`,
        `<p>Modelin sınırları vardır: bozunmanın rastgele ve çevreden bağımsız olduğunu varsayar. Gerçek ölçümler bu yüzden küçük sapmalar gösterebilir; çok sayıda çekirdekte bu sapmalar istatistiksel olarak ortalamalanır.</p>`,
        { fig: 'v9v12-rozpad', caption: "Her yarılanma süresi T½ geçtiğinde bozunmamış çekirdek sayısı yarıya düşer; üstel yasa N = N₀(1/2)^(t/T½)." }
      ],
      examples: [
        { task: `Bir örnekte başlangıçta $800$ çekirdek vardır ve yarılanma süresi $10$ yıldır. $30$ yıl sonra kaç çekirdek kalır?`,
          steps: [`$30$ yıl, $3$ yarılanma süresidir.`, `$N=800\\cdot\\left(\\frac{1}{2}\\right)^3=800\\cdot\\frac{1}{8}$.`, `<strong>Sonuç: 100 çekirdek</strong>`] }
      ]
    },

    'v12-diferencialne-rovnice': {
      title: 'Diferansiyel denklemler',
      summary: 'Hareket yasaları diferansiyel denklemlerdir; çözümü integral alarak ve başlangıç koşuluyla buluruz.',
      theory: [
        `<p>Newton'un ikinci yasası $F=ma$ bir diferansiyel denklemdir, çünkü ivme hızın türevidir: $a=\\frac{dv}{dt}$. Burada nicelikler doğrudan değil, zamanla <em>değişimleri</em> üzerinden ifade edilir.</p>`,
        `<p><strong>Çözümü</strong> integral alarak ararız. $\\frac{dv}{dt}=a$'dan $v(t)=at+C$ elde ederiz. $C$ sabitini <em>başlangıç koşulundan</em> belirleriz, örneğin $v(0)=v_0$. Bu nedenle bir denklem her zaman böyle bir koşulla birlikte çözülür.</p>`,
        `<p>Diferansiyel denklemler, hareket eden cisimleri, devreleri, ısı yayılımını ya da dalgaları gibi neredeyse tüm dinamik olayları tanımlar. Çözüm yalnızca yeterli sayıda başlangıç koşulu bilindiğinde tektir.</p>`,
        { fig: 'v9v12-rovnice', caption: 'dv/dt = a denkleminin sonsuz çok çözümü vardır: v = at + C. Başlangıç koşulu bunlardan birini seçer.' }
      ],
      examples: [
        { task: `Şu denklemi çözün: $\\frac{dv}{dt}=2$, $v(0)=5$ koşuluyla. $t=4$ anındaki hız nedir?`,
          steps: [`$v(t)=2t+C$, $v(0)=5$'ten $C=5$.`, `$v(t)=2t+5$, yani $v(4)=8+5$.`, `<strong>Sonuç: 13</strong>`] }
      ]
    },

    'v12-vektory': {
      title: 'Vektör analizi ve tensörler',
      summary: 'İş ve kuvvet momentini tanımlayan skaler ve vektörel çarpım; genelleme olarak tensör.',
      theory: [
        `<p><strong>Vektör</strong> büyüklüğe ve yöne sahiptir; bileşenleriyle $\\vec a=(a_1,a_2,a_3)$ biçiminde yazılır. Vektörlerin toplamı bileşen bileşen yapılır. Büyüklük $|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$'dir.</p>`,
        `<p><strong>Skaler çarpım</strong> $\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$ bir sayıdır. Kuvvetin yaptığı işte kullanılır: $W=\\vec F\\cdot\\vec s$. Ayrıca $\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\varphi$ geçerlidir; bu nedenle birbirine dik vektörler için sıfırdır.</p>`,
        `<p><strong>Vektörel çarpım</strong> $\\vec a\\times\\vec b$, her iki orijinal vektöre dik bir vektördür; örneğin kuvvet momenti $\\vec M=\\vec r\\times\\vec F$. <strong>Tensör</strong> bunun genellemesidir: örneğin katı maddedeki gerilim tensörü her düzleme bir kuvvet vektörü atar.</p>`,
        { fig: 'v9v12-moment', caption: `Kuvvet momenti M = r × F, hem konum vektörü r'ye hem de F kuvvetine dik bir vektördür.` }
      ],
      examples: [
        { task: `$\\vec a=(1,2,3)$ ve $\\vec b=(4,-5,6)$ için $\\vec a\\cdot\\vec b$ değerini hesaplayın.`,
          steps: [`$1\\cdot 4+2\\cdot(-5)+3\\cdot 6$.`, `$=4-10+18=12$.`, `<strong>Sonuç: 12</strong>`] }
      ]
    },

    'v12-fourier': {
      title: 'Fourier analizi',
      summary: 'Periyodik bir sinyali sinüs bileşenlerine ayırır ve içindeki frekansları buluruz.',
      theory: [
        `<p>Periyodu $T$ olan her periyodik işaret, temel frekansın $\\omega=\\frac{2\\pi}{T}$ katlarındaki sinüs ve kosinüslerin toplamı olarak yazılabilir. Bu toplam <strong>Fourier serisidir</strong>; terimlerine harmonik bileşenler denir.</p>`,
        `<p>Açılım katsayılarını integralle buluruz: işareti ilgili fonksiyonla çarparız ve sonucu bir periyot boyunca integre ederiz. Sinüs ve kosinüslerin <em>ortogonalliği</em> sayesinde diğer terimler sıfırlanır.</p>`,
        `<p>Genliği $A$ olan kare dalganın yalnızca tek harmonikleri vardır ve $n$-inci harmoniğin genliği $\\frac{4A}{n\\pi}$'dir. Fourier açılımı, işaretin bozulmadan iletilmesi için hangi frekansların aktarılması gerektiğini gösterir ve spektral analizin temelidir.</p>`,
        { fig: 'v9v12-fourier', caption: `Kare dalga sinüslerden oluşturulabilir. Birinci harmoniğin genliği 4A/π'dir.` }
      ],
      examples: [
        { task: `Genliği $A=3$ olan kare dalganın birinci harmoniğinin genliği nedir?`,
          steps: [`Birinci harmonik için $n=1$ ve formül $\\frac{4A}{n\\pi}$.`, `$\\frac{4\\cdot 3}{\\pi}\\approx 3{,}82$.`, `<strong>Sonuç: yaklaşık 3,82</strong>`] }
      ]
    },

    'v12-numericke-metody': {
      title: 'Fiziksel problemlerin sayısal çözümü',
      summary: 'Denklem formülle çözülemediğinde onu küçük adımlarla, örneğin Euler yöntemiyle çözeriz.',
      theory: [
        `<p>Birçok diferansiyel denklemin formül biçiminde bir çözümü yoktur. Bu durumda <strong>sayısal</strong> olarak çözeriz: zamanı $h$ uzunluğunda adımlara böler ve her adımda niceliğin değişimini tahmin ederiz.</p>`,
        `<p>$\\frac{dy}{dt}=f(t,y)$ denklemi için <strong>Euler yöntemi</strong> $y_{n+1}=y_n+h\\,f(t_n,y_n)$ değerini hesaplar. Basittir, ama hata yalnızca adımla doğrusal olarak azalır; bu nedenle pratikte Runge–Kutta gibi daha doğru yöntemler kullanılır.</p>`,
        `<p>Adım seçimi bir uzlaşmadır: küçük adım daha doğru sonuç verir, ama daha fazla hesap gerektirir. Çok büyük bir adım kararsızlığa yol açabilir; sapmalar büyür ve çözüm anlamsız hale gelir.</p>`,
        { fig: 'v9v12-euler', caption: 'h = 0,5 adımlı Euler yöntemi, dy/dt = y denklemini kesin eğrinin altında kalan bir çokgen çizgiyle yaklaşık olarak verir.' }
      ],
      examples: [
        { task: `$\\frac{dy}{dt}=-y$ denklemini $y(0)=10$ ve $h=0{,}1$ adımıyla Euler yöntemiyle çözün. $y_1$ değeri nedir?`,
          steps: [`$y_1=y_0+h\\cdot(-y_0)=10+0{,}1\\cdot(-10)$.`, `$=10-1=9$.`, `<strong>Sonuç: 9</strong>`] }
      ]
    },

    'v12-pocitacove-simulacie': {
      title: 'Bilgisayar simülasyonları',
      summary: 'Simülasyon adımlarla ilerler; adım uzunluğu ve toplam süre hesap sayısını belirler.',
      theory: [
        `<p><strong>Bilgisayar simülasyonu</strong>, hareket yasasını küçük zaman adımlarına tekrar tekrar uygular. Başlangıçta sistemin durumu (konumlar, hızlar) verilir ve her adımda yeni durum hesaplanır.</p>`,
        `<p>$t$ süresi ve $h$ adımı için adım sayısı $N=\\frac{t}{h}$'dir. Adımı yarıya indirirsek hesap iki kat uzun sürer, ama doğruluk artar. El ile hesapta bunu bilmeyiz; bilgisayarda ise bu kritik bir seçimdir.</p>`,
        `<p>Simülasyonlar, formül biçiminde çözümün olmadığı her yerde kullanılır: üç cisimli sistemde gezegenlerin hareketi, bir kanat etrafındaki hava akışı veya bir malzemede ısı yayılımı gibi.</p>`
      ],
      examples: [
        { task: `$10\\,\\text{s}$ sürmesi gereken bir düşüş simülasyonunun adımı $0{,}05\\,\\text{s}$'dir. Kaç adım gerekir?`,
          steps: [`$N=\\frac{t}{h}=\\frac{10}{0{,}05}$.`, `<strong>Sonuç: 200 adım</strong>`] }
      ]
    },

    'v12-konecne-prvky': {
      title: 'Sonlu elemanlar yöntemi',
      summary: 'Karmaşık bir cismi basit elemanlara böler; elemanların özelliklerini tek bir denklem sistemine topluruz.',
      theory: [
        `<p><strong>Sonlu elemanlar yöntemi (SEY)</strong>, karmaşık bir yapıyı çok sayıda basit parçaya (elemana), örneğin üçgenlere böler. Her eleman için kuvvetleri ve düğüm yer değiştirmelerini bağlayan basit bir denklem yazarız.</p>`,
        `<p>Elemanlar daha sonra bir <strong>genel denklem sistemine</strong> birleştirilir ve bu sistem bilgisayarla çözülür. Yaylar veya çubuklar için: <em>seri</em> bağlamada esneklikler toplanır, yani $\\frac{1}{k}=\\frac{1}{k_1}+\\frac{1}{k_2}$. <em>Paralel</em> bağlamada ise sertlikler toplanır: $k=k_1+k_2$.</p>`,
        `<p>SEY, yapısal dayanım analizinde, akışkan akışında ve ısı yayılımında kullanılır. Sonuç yaklaşıktır; doğruluk, eleman sayısı ve inceliğiyle artar.</p>`,
        { fig: 'v9v12-pruziny', caption: 'Seri bağlı yayların sertliği daha küçüktür; paralel bağlı yaylarda sertlikler toplanır.' }
      ],
      examples: [
        { task: `Sertlikleri $k_1=6\\,\\text{N/m}$ ve $k_2=3\\,\\text{N/m}$ olan iki yay seri bağlanmıştır. Eşdeğer sertlik nedir?`,
          steps: [`$\\frac{1}{k}=\\frac{1}{6}+\\frac{1}{3}=\\frac{3}{6}$.`, `$k=2\\,\\text{N/m}$.`, `<strong>Sonuç: 2 N/m</strong>`] }
      ]
    },

    'v12-komplexne-systemy': {
      title: 'Karmaşık sistemlerin modellenmesi',
      summary: 'Birbiriyle etkileşen çok sayıda basit parça karmaşık davranışa yol açar; bağlantı sayısı hızla artar.',
      theory: [
        `<p><strong>Karmaşık sistem</strong>, birbiriyle etkileşen çok sayıda parçadan oluşur. Bütünün davranışı çoğu zaman parçaların özelliklerinin toplamından değil, aralarındaki bağlantılardan doğar. Buna <em>ortaya çıkan</em> davranış denir.</p>`,
        `<p>Karşılıklı bağlantı sayısı hızla artar. Her biri diğer her biriyle bir kez etkileşen $N$ parçacık için $\\binom{N}{2}=\\frac{N(N-1)}{2}$ çift oluşur. $N=100$ için bu zaten $4950$ bağlantıdır.</p>`,
        `<p>Modellemede örneğin <strong>ajan tabanlı modeller</strong> (her parçacık basit kurallara göre davranır) veya olası durumları rastgele örnekleyen <strong>Monte Carlo</strong> simülasyonları kullanılır. Sonuç her zaman doğrulanması gereken bir tahmindir.</p>`
      ],
      examples: [
        { task: `Sistemde $5$ parçacık vardır ve her biri diğer her biriyle bir kez etkileşir. Kaç farklı çift oluşur?`,
          steps: [`$\\binom{5}{2}=\\frac{5\\cdot 4}{2}$.`, `<strong>Sonuç: 10 çift</strong>`] }
      ]
    }
  }
});
