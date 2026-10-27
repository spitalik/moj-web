/* Turkish: grades 7–9 lessons (js/rocniky/r7.js, r8.js, r9.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('tr', {
  lessons: {
    'r7-pohyb': {
      title: `Cisimlerin hareketi ve onu nasıl tanımlarız`,
      summary: `Hareket ve durgunluk bağıldır ve referans sistemine bağlıdır.`,
      theory: [
        `<p>Hareket ve durgunluk <strong>bağıldır</strong>: neyle karşılaştırdığımıza bağlıdırlar. Hareketi tanımladığımız cisme <strong>referans cisim</strong> denir.
       Saatlerle birlikte bir <strong>referans sistemi</strong> oluşturur.</p>`,
        `<p>Hareket eden bir trende oturan yolcu, trene göre durgundur; ama demiryolu kenarındaki ağaçlara göre harekettedir. İki ifade de doğrudur,
       her biri farklı bir referans sisteminde. Bu yüzden hareketi tanımlarken her zaman neye göre tanımladığımızı da söyleriz.</p>`,
        `<ul>
         <li><strong>Yörünge</strong>: cismin hareket ederken çizdiği çizgi.</li>
         <li><strong>Yol</strong> $s$: iki yer arasındaki yörüngenin uzunluğu. Metre cinsinden ölçülür.</li>
         <li><strong>Noktasal cisim</strong>: hareketini tanımlarken boyutlarını ihmal ettiğimiz cisim.</li>
       </ul>`,
        `<p>Yol, tüm güzergâhın uzunluğudur, başlangıç ile bitiş arasındaki mesafe değildir. 3 m doğuya, sonra 4 m kuzeye yürürsek yol $7\\,\\text{m}$ olur,
       oysa başlangıçtan uzaklık yalnızca $5\\,\\text{m}$'dir.</p>`,
        { fig: 'obr-draha', caption: `Yol, tüm güzergâhtır; uzaklık ise başlangıç ile bitiş arasındaki doğrudur.` }
      ],
      examples: [
        { task: `Hızlı bir trende bir yolcu oturuyor. Durgun mu yoksa hareket halinde mi?`,
          steps: [`Oturduğu trene göre yerinden kıpırdamaz.`, `Demiryolu kenarındaki ağaçlara göre harekettedir.`, `<strong>Sonuç: oturduğu trene göre durgun, çevresine göre hareket halinde.</strong>`] },
        { task: `Bir yaya 3 m doğuya, sonra 4 m kuzeye yürüdü. Yolu nedir?`,
          steps: [`Yol, tüm güzergâhın uzunluğudur, o yüzden iki parçayı toplarız.`, `$s = 3\\,\\text{m} + 4\\,\\text{m} = 7\\,\\text{m}$`, `<strong>Sonuç: 7 m</strong>`] }
      ]
    },
    'r7-draha': {
      title: `Yol, zaman ve ortalama hız`,
      summary: `Hız, yol ve zamanın hesaplanması ile m/s ve km/h arasında dönüştürme.`,
      theory: [
        `<p><strong>Hız</strong>, birim zamanda cismin ne kadar yol aldığını gösterir. Formül: $v=\\frac{s}{t}$, burada $s$ yol, $t$ zamandır.
       SI birimi $\\text{m/s}$'dir; karayolu trafiğinde ise $\\text{km/h}$ kullanılır.</p>`,
        `<p>Bu formülden iki formül daha türetiriz: $s=v\\cdot t$ ve $t=\\frac{s}{v}$. Hesaplamadan önce birimleri her zaman kontrol edin.
       Yol kilometre, zaman dakika cinsindeyse, büyüklüklerden birini dönüştürmemiz gerekir.</p>`,
        `<ul>
         <li>$1\\,\\text{m/s}=3{,}6\\,\\text{km/h}$: saniyede metreden saatte kilometreye çevirmek için $3{,}6$ ile çarparız.</li>
         <li>$1\\,\\text{km/h}=\\frac{1}{3{,}6}\\,\\text{m/s}$: saatte kilometreden saniyede metreye çevirmek için $3{,}6$'ya böleriz.</li>
       </ul>`,
        `<p><strong>Ortalama hız</strong>, hızların ortalaması değildir. Toplam yolun toplam zamana bölünmesiyle hesaplanır:
       $v_p=\\frac{s_{\\text{celk}}}{t_{\\text{celk}}}$. Bir araba güzergâhın bir bölümünde bir süre durduysa, ortalama hızı en yüksek hızından düşüktür.</p>`,
        { fig: 'obr-draha', caption: `Yol, tüm güzergâhtır; uzaklık ise başlangıç ile bitiş arasındaki doğrudur.` }
      ],
      examples: [
        { task: `Bir araba $2\\,\\text{h}$ içinde $120\\,\\text{km}$ yol aldı. Ortalama hızı neydi?`,
          steps: [`$v=\\frac{s}{t}=\\frac{120}{2}$`, `$v=60\\,\\text{km/h}$`, `<strong>Sonuç: 60 km/h</strong>`] },
        { task: `Bisikletçi $5\\,\\text{m/s}$ hızla gidiyor. Bu hız $\\text{km/h}$ cinsinden kaçtır?`,
          steps: [`m/s'den km/h'ye çevirmek için 3,6 ile çarparız.`, `$5\\cdot 3{,}6=18\\,\\text{km/h}$`, `<strong>Sonuç: 18 km/h</strong>`] }
      ]
    },
    'r7-rovnomerny': {
      title: `Düzgün ve düzgün olmayan hareket`,
      summary: `Hızın değişmediği durum ve hızı değişen hareketin nasıl hesaplandığı.`,
      theory: [
        `<p><strong>Düzgün hareket</strong>: cisim her eşit zaman aralığında aynı yolu alır, bu yüzden hızı değişmez.
       Yol-zaman grafiğinde bu bir doğru çizgidir ve eğimi hıza karşılık gelir.</p>`,
        `<p><strong>Düzgün olmayan hareket</strong>: hız değişir, cisim hızlanır ya da yavaşlar. Örnek olarak yola çıkan bir tren ya da yere düşen bir taş verilebilir.</p>`,
        `<p>Düzgün hareket için $s=v\\cdot t$ formülü geçerlidir; burada $v$ sabit hızdır. Düzgün olmayan hareket için <strong>ortalama hızı</strong> kullanabiliriz:
       toplam yol toplam zamana bölünür. Bu yalnızca genel sonucu gösterir, hızın nasıl değiştiğini göstermez.</p>`,
        `<ol>
         <li>Bir cisim eşit zamanlarda eşit yollar alıyorsa, hareket düzgündür.</li>
         <li>Eşit zamanlarda alınan yollar değişiyorsa, hareket düzgün değildir.</li>
         <li>Ortalama hızı asla iki hızın aritmetik ortalaması olarak hesaplamayız.</li>
       </ol>`,
        { fig: 'r6r9-rovnomerny', caption: `Düzgün harekette yol-zaman grafiği bir doğrudur ve eğimi hızdır. Hızlanırken grafik bir eğridir.` }
      ],
      examples: [
        { task: `Bir yaya sabit $4\\,\\text{km/h}$ hızla yürüyor. $3\\,\\text{h}$ içinde ne kadar yol alır?`,
          steps: [`Hareket düzgün olduğundan $s=v\\cdot t$.`, `$s=4\\cdot 3=12\\,\\text{km}$`, `<strong>Sonuç: 12 km</strong>`] },
        { task: `Bir cisim her saniye 5 m yol alıyor. Ne tür bir harekettir ve 6 s içinde ne kadar yol alır?`,
          steps: [`Eşit zamanlarda eşit yollar aldığı için hareket düzgündür.`, `$s = 5\\cdot 6 = 30\\,\\text{m}$`, `<strong>Sonuç: düzgün hareket, 30 m</strong>`] }
      ]
    },
    'r7-sila': {
      title: `Kuvvet ve etkileri`,
      summary: `Kuvvetin ne olduğu, hangi etkilere sahip olduğu ve aynı ya da zıt yönlü kuvvetlerin nasıl toplandığı.`,
      theory: [
        `<p><strong>Kuvvet</strong>, cisimlerin karşılıklı etkileşimidir. Kuvveti görmeyiz, etkilerini görürüz. $F$ ile gösterilir, birimi newton'dur: $1\\,\\text{N}$.</p>`,
        `<ul>
         <li>Cismin <strong>hızını değiştirebilir</strong>: hareketi başlatır, yavaşlatır ya da durdurur.</li>
         <li>Hareketin <strong>yönünü değiştirebilir</strong>, örneğin bisiklet bir köşeyi dönerken.</li>
         <li>Cismin <strong>şeklini değiştirebilir</strong>: süngeri sıkmak ya da lastik bandı germek gibi.</li>
       </ul>`,
        `<p>Kuvvet bir <strong>vektördür</strong>: büyüklüğü, yönü ve etki noktası vardır. Ok ile çizeriz. Bir cisme aynı yönde etki eden kuvvetleri toplarız.
       Zıt yönlerde etki ediyorlarsa, küçüğü büyükten çıkarırız ve bileşke kuvvet büyüğün yönünde olur.</p>`,
        `<p>Kuvvetler her zaman çift halinde oluşur: el bir duvarı ittiğinde, duvar da ele aynı büyüklükte, zıt yönde bir kuvvetle karşılık verir.
       Ancak bu iki kuvvet farklı cisimlere etki eder, bu yüzden birbirlerini yok etmezler.</p>`,
        { fig: 'obr-sily', caption: `Yatay bir yüzeydeki cisme etki eden kuvvetler: çekme kuvveti F, sürtünme kuvveti Ftr ve yüzeyin dik tepki kuvveti N.` }
      ],
      examples: [
        { task: `İki öğrenci bir arabayı aynı yönde $30\\,\\text{N}$ ve $20\\,\\text{N}$ kuvvetlerle çekiyor. Bileşke kuvvet nedir?`,
          steps: [`Kuvvetlerin yönü aynı olduğundan onları toplarız.`, `$30 + 20 = 50$`, `<strong>Sonuç: 50 N</strong>`] },
        { task: `Aynı arabayı birinci öğrenci sağa doğru $30\\,\\text{N}$, ikinci öğrenci sola doğru $20\\,\\text{N}$ kuvvetle çekiyor. Bileşke kuvvet nedir?`,
          steps: [`Kuvvetlerin yönleri zıt olduğundan çıkarırız.`, `$30 - 20 = 10$, bileşke kuvvet sağa doğrudur.`, `<strong>Sonuç: 10 N sağa</strong>`] }
      ]
    },
    'r7-tiaz': {
      title: `Yerçekimi kuvveti ve ağırlık`,
      summary: `Cisimler neden Dünya üzerine düşer ve kütle ağırlıktan nasıl farklıdır.`,
      theory: [
        `<p>Tüm cisimler birbirini <strong>çekim kuvvetiyle</strong> çeker. Kütleler büyüdükçe ve cisimler yakınlaştıkça çekim kuvveti artar.
       Dünya'nın çekimi bizi yüzeyinde tutar, Ay ise Dünya'nın çevresinde döner.</p>`,
        `<p><strong>Ağırlık</strong> $F_G$, Dünya'nın bir cismi kendine doğru çekme kuvvetidir. $F_G=m\\cdot g$ formülüyle hesaplanır; burada $m$ kilogram cinsinden kütle,
       $g$ ise yerçekimi ivmesidir. Dünya'da $g\\approx 10\\,\\text{N/kg}$ (daha kesin olarak $9{,}81\\,\\text{N/kg}$).</p>`,
        `<p><strong>Kütle ve ağırlık aynı değildir.</strong> Kilogram cinsinden kütle, cismin ne kadar madde içerdiğini gösterir ve her yerde aynıdır.
       Newton cinsinden ağırlık ise yere bağlıdır. Ay'da $g\\approx 1{,}6\\,\\text{N/kg}$'dir, bu yüzden $5\\,\\text{kg}$ kütleli bir cisim orada yaklaşık $8\\,\\text{N}$ ağırlığındadır.</p>`,
        `<ul>
         <li>Ağırlık bir kuvvettir; yaylı terazi ile newton cinsinden ölçülür.</li>
         <li>Kütle terazi ile kilogram cinsinden ölçülür.</li>
       </ul>`,
        { fig: 'r6r9-tiaz', caption: `Aynı kütlenin Ay'daki ağırlığı daha küçüktür, çünkü oradaki yerçekimi ivmesi daha küçüktür.` }
      ],
      examples: [
        { task: `Dünya'da $4\\,\\text{kg}$ kütleli bir cismin ağırlığı nedir? $g=10\\,\\text{N/kg}$ kullanın.`,
          steps: [`$F_G=m\\cdot g$`, `$F_G=4\\cdot 10=40\\,\\text{N}$`, `<strong>Sonuç: 40 N</strong>`] },
        { task: `Bir cismin Dünya'daki ağırlığı $60\\,\\text{N}$'dur. Kütlesi nedir?`,
          steps: [`$m=\\frac{F_G}{g}$`, `$m=\\frac{60}{10}=6\\,\\text{kg}$`, `<strong>Sonuç: 6 kg</strong>`] }
      ]
    },
    'r7-trenie': {
      title: `Sürtünme ve ortamın direnci`,
      summary: `Sürtünmenin ne zaman büyük olduğu, nasıl artırılıp azaltılacağı ve sıvılarda cisimleri neyin yavaşlattığı.`,
      theory: [
        `<p><strong>Sürtünme</strong>, iki cismin temas yüzeyinde oluşur ve hareketin ya da harekete geçme girişiminin tersine etki eder. Bu yüzden yerde ittiğimiz bir kutu,
       itmeyi bıraktığımızda durur.</p>`,
        `<ul>
         <li>Sürtünme, yüzeyler ne kadar pürüzlüyse o kadar büyüktür.</li>
         <li>Sürtünme, bir cisim diğerine ne kadar sert bastırırsa o kadar büyüktür.</li>
         <li>Sürtünme, temas yüzeyinin büyüklüğüne bağlı değildir.</li>
       </ul>`,
        `<p><strong>Ortamın direnci</strong> (hava, su) cismin hareketini yavaşlatır. Cismin şekline, hızına ve ortamın yoğunluğuna bağlıdır.
       Paraşütün hava direnci büyüktür, bu yüzden yavaş düşer. Akıcı bir şekle sahip yüzücü suyun direncini daha az hisseder.</p>`,
        `<p>Bazen sürtünmeyi artırmak isteriz, örneğin araba lastiklerinde yolla temas için ya da yürürken. Bazen de azaltmak isteriz, örneğin rulmanlarda.
       Yağlayıcı, yüzeyler arasında ince bir tabaka oluşturur ve bu yüzden sürtünmeyi azaltır.</p>`,
        { fig: 'obr-sily', caption: `Yatay bir yüzeydeki cisme etki eden kuvvetler: çekme kuvveti F, sürtünme kuvveti Ftr ve yüzeyin dik tepki kuvveti N.` }
      ],
      examples: [
        { task: `Bir dolap hareket yönünde $300\\,\\text{N}$ kuvvetle çekiliyor, harekete ters yönde ise $120\\,\\text{N}$ sürtünme etki ediyor. Hareket yönündeki bileşke kuvvet nedir?`,
          steps: [`Sürtünme harekete ters etki ettiği için çıkarırız.`, `$300-120=180$`, `<strong>Sonuç: 180 N</strong>`] },
        { task: `Sürtünmeyi hangisi artırır: kış lastikleri mi, yoksa bir rulmandaki yağlayıcı mı?`,
          steps: [`Kış lastiklerinin yüzeyi daha pürüzlüdür, bu yüzden sürtünme artar.`, `Yüzeyler arasındaki yağlayıcı sürtünmeyi azaltır.`, `<strong>Sonuç: kış lastikleri</strong>`] }
      ]
    },
    'r7-svetlo': {
      title: `Işık ve yayılması`,
      summary: `Işığın doğrusal yayılması, ışığın hızı, gölgeler ve tutulmalar.`,
      theory: [
        `<p>Işık, gözlerimizle algıladığımız elektromanyetik ışımadır. Işık kaynağı ışığı her yöne yayar. Kendisi ışık yaymayan bir cismi,
       ona çarpan ışığı gözümüze yansıttığı için görürüz.</p>`,
        `<p>Tek bir ortamda ışık <strong>doğru bir çizgi</strong> boyunca yayılır. Bu yüzden opak bir cismin arkasında gölge oluşur: cisim arkasındaki ışığı engeller.
       Büyük bir ışık kaynağı ise yarı gölge de oluşturur; burada kaynağın yalnızca bir kısmı görünür.</p>`,
        `<p>Işığın boşluktaki hızı $c=300\\,000\\,\\text{km/s}$, yani $3\\cdot 10^8\\,\\text{m/s}$'dir. Havada neredeyse aynıdır, suda ve camda ise daha düşüktür.
       Aydan gelen ışık yaklaşık $1{,}3\\,\\text{s}$'de, Güneş'ten gelen ışık yaklaşık 8 dakikada bize ulaşır.</p>`,
        `<p>Güneş tutulması, Ay Güneş ile Dünya arasına girip gölgesini Dünya'ya düşürdüğünde oluşur. Ay tutulması ise Dünya Güneş ile Ay arasına girdiğinde oluşur.</p>`,
        { fig: 'r6r9-zatmenie', caption: `Güneş tutulmasında Ay, Güneş ile Dünya arasında yer alır ve Dünya'ya gölge düşürür.` }
      ],
      examples: [
        { task: `Işık $300\\,000\\,\\text{km/s}$ hızla gider. $10\\,\\text{s}$ içinde ne kadar yol alır?`,
          steps: [`$s=c\\cdot t$`, `$s=300\\,000\\cdot 10=3\\,000\\,000\\,\\text{km}$`, `<strong>Sonuç: 3 000 000 km</strong>`] },
        { task: `Güneşte bir ağacın arkasında neden gölge vardır?`,
          steps: [`Ağaç opaktır ve ışık doğru çizgi boyunca yayılır.`, `Işık ağacın içinden geçemez, bu yüzden arkası karanlık kalır.`, `<strong>Sonuç: ağaç ışığı engeller, çünkü ışık doğru çizgi boyunca yayılır</strong>`] }
      ]
    },
    'r7-odraz': {
      title: `Işığın yansıması ve kırılması`,
      summary: `Yansıma yasası, normalden ölçülen açılar ve bir ışının başka bir ortama geçerken bükülmesi.`,
      theory: [
        `<p>Işık ışını iki ortamın sınırına düşer. Bir kısmı geri yansır, bir kısmı ikinci ortama geçer. Açılar her zaman <strong>normalden</strong> ölçülür;
       normal, yüzeye dik olan doğrudur, yüzeyin kendisi değildir.</p>`,
        `<p><strong>Yansıma yasası:</strong> geliş açısı $\\alpha$, yansıma açısı $\\beta$'ya eşittir, yani $\\alpha=\\beta$.
       Yansıyan ışın, gelen ışın ve normalin oluşturduğu düzlemde yer alır.</p>`,
        `<ul>
         <li>Işığın daha yavaş olduğu bir ortama geçerken (örneğin havadan suya) ışın <strong>normale doğru</strong> bükülür.</li>
         <li>Işığın daha hızlı olduğu bir ortama geçerken (örneğin sudan havaya) ışın <strong>normalden uzaklaşacak şekilde</strong> bükülür.</li>
       </ul>`,
        `<p>Bu yüzden bir bardak suya konan kalem kırık görünür ve havuzun dibi gerçekte olduğundan daha sığ görünür.</p>`,
        { fig: 'obr-odraz', caption: `Işık düz bir aynadan yansıdığında yansıma yasası geçerlidir.` }
      ],
      examples: [
        { task: `Işın düz bir aynaya, normalle $35^\\circ$ açı yapacak şekilde düşüyor. Yansıyan ışın normalle hangi açıyı yapar?`,
          steps: [`Yansıma yasasına göre yansıma açısı geliş açısına eşittir.`, `$\\beta=\\alpha=35^\\circ$`, `<strong>Sonuç: 35°</strong>`] },
        { task: `Işın bir aynaya, aynanın yüzeyiyle $60^\\circ$ açı yapacak şekilde düşüyor. Normalden ölçülen geliş açısı nedir?`,
          steps: [`Açılar yüzeyden değil, normalden ölçülür.`, `$\\alpha = 90^\\circ - 60^\\circ = 30^\\circ$`, `<strong>Sonuç: 30°</strong>`] }
      ]
    },
    'r7-zrkadla': {
      title: `Aynalar, mercekler ve optik olaylar`,
      summary: `Düz aynadaki görüntü, yakınsak ve ıraksak mercekler; gökkuşağı ya da serap gibi olaylar.`,
      theory: [
        `<p>Bir <strong>düz ayna</strong> sanal bir görüntü oluşturur: görüntüyü aynanın arkasında görürüz ve perdeye düşürülemez. Görüntü cisimle aynı büyüklüktedir,
       dik durur ve cismin aynanın önündeki uzaklığı kadar aynanın arkasında yer alır.</p>`,
        `<p>Aynadan 2 m uzakta duruyorsanız, görüntünüz sizden 4 m uzaklıktadır. Cisim ile görüntüsü arasındaki mesafe, cismin aynaya olan uzaklığının iki katıdır.</p>`,
        `<p><strong>Mercekler</strong> ışığı kırar. <strong>Yakınsak mercek</strong> ortasında kalındır ve paralel ışınları bir noktaya (odağa) toplar.
       <strong>Iraksak mercek</strong> ortasında incedir ve ışınları birbirinden uzaklaştırır. Yakınsak mercekler büyüteçlerde, fotoğraf makinelerinde
       ve uzak görüşlülük gözlüklerinde kullanılır.</p>`,
        `<p><strong>Optik olaylar:</strong> gökkuşağı, beyaz ışık su damlalarında renklerine ayrıldığında oluşur. Serap, sıcak yol yüzeyinin üzerindeki sıcak havada
       ışığın kırılmasıyla oluşur; bu yüzden yerde su varmış gibi gökyüzünün yansımasını görürüz.</p>`,
        { fig: 'r6r9-zrkadlo', caption: `Düz aynadaki görüntü sanaldır ve cismin aynanın önündeki uzaklığı kadar aynanın arkasındadır.` }
      ],
      examples: [
        { task: `Bir cisim düz bir aynanın $3\\,\\text{m}$ önünde duruyor. Cisim ile görüntüsü arasındaki mesafe nedir?`,
          steps: [`Görüntü, cismin aynanın önündeki uzaklığı kadar aynanın arkasındadır.`, `$3\\,\\text{m}+3\\,\\text{m}=6\\,\\text{m}$`, `<strong>Sonuç: 6 m</strong>`] },
        { task: `Paralel ışınları bir noktada toplayan mercek hangisidir?`,
          steps: [`Işınları bir noktada toplayan mercek ortasında kalındır.`, `Ortasında kalın olan mercek yakınsak mercektir.`, `<strong>Sonuç: yakınsak mercek</strong>`] }
      ]
    },
    'r8-praca': {
      title: `Mekanik iş ve güç`,
      summary: `Bir kuvvet ne zaman iş yapar, nasıl hesaplanır ve iş ne kadar hızlı yapılır.`,
      theory: [
        `<p><strong>Mekanik iş</strong>, bir kuvvet cisme etki ettiğinde ve cisim bu kuvvetin yönünde hareket ettiğinde yapılır. Cismi hareket ettirmezsek iş sıfırdır:
       bir duvarı itmek iş yapmaz.</p>`,
        `<p>İşi $W = F\\cdot s$ formülüyle hesaplarız; burada $F$ newton (N) cinsinden kuvvet, $s$ metre (m) cinsinden yoldur.
       İşin birimi <strong>joule</strong>'dür (J): $1\\,\\text{J} = 1\\,\\text{N}\\cdot\\text{m}$.</p>`,
        `<p><strong>Güç</strong>, işin ne kadar hızlı yapıldığını gösterir. İşin zamana bölünmesiyle hesaplanır: $P = \\frac{W}{t}$, burada $t$ saniye cinsinden zamandır.
       Gücün birimi <strong>watt</strong>'tır (W): $1\\,\\text{W} = 1\\,\\text{J/s}$. İki motor aynı işi yapabilir, ama daha güçlü olan işi daha kısa sürede bitirir.</p>`,
        `<ol>
         <li>Kuvveti ve yolu N ve m cinsinden bulun.</li>
         <li>Bunları çarpın: $W = F\\cdot s$.</li>
         <li>Güç isteniyorsa, sonucu zamana bölün: $P = W : t$.</li>
       </ol>`,
        { fig: 'r6r9-praca', caption: `İş yalnızca cisim kuvvetin yönünde hareket ettiğinde yapılır. Hareket etmeyen bir duvarı itmek iş yapmaz.` }
      ],
      examples: [
        { task: `İki çocuk bir arabayı $F = 150\\,\\text{N}$ kuvvetle itiyor ve $s = 8\\,\\text{m}$ yol aldırıyor. Ne kadar iş yapılır?`,
          steps: [`Formüle yerine koyarız: $W = F\\cdot s = 150\\cdot 8$.`, `<strong>Sonuç: W = 1200 J</strong>`] },
        { task: `Bir kaldırma motoru $t = 20\\,\\text{s}$ içinde $W = 3000\\,\\text{J}$ iş yapıyor. Gücü nedir?`,
          steps: [`$P = \\frac{W}{t} = \\frac{3000}{20}$.`, `<strong>Sonuç: P = 150 W</strong>`] }
      ]
    },
    'r8-mechanicka-energia': {
      title: `Mekanik enerji ve dönüşümleri`,
      summary: `Enerji, iş yapabilme yeteneğidir ve bir biçimden diğerine dönüşür.`,
      theory: [
        `<p><strong>Enerji</strong>, bir cismin iş yapabilme yeteneğidir. $E$ ile gösterilir, birimi işinkiyle aynıdır: joule (J).
       Enerji hiçbir şeyden yaratılamaz ya da yok edilemez. Yalnızca bir biçimden diğerine dönüştürülebilir.</p>`,
        `<p><strong>Enerjinin korunumu yasası:</strong> kapalı bir sistemin toplam enerjisi değişmez. Bir enerji biçimi azalırsa,
       başka bir enerji biçimi aynı miktarda artar.</p>`,
        `<ul>
         <li>Yükseklikten düşen bir taş: potansiyel enerji kinetik enerjiye dönüşür.</li>
         <li>Geri yukarı savrulan bir sarkaç: kinetik enerji tekrar potansiyel enerjiye dönüşür.</li>
         <li>Frenli bir araba: kinetik enerji iç enerjiye (ısıya) dönüşür.</li>
       </ul>`,
        `<p>Sürtünme olduğunda mekanik enerjinin bir kısmı her zaman ısıya dönüşür. Enerji kaybolmaz, yalnızca çevreye yayılır ve kullanmak zorlaşır.</p>`,
        { fig: 'obr-energia', caption: `Sürtünmesiz kayarken potansiyel enerji kinetik enerjiye, sonra tekrar geri dönüşür.` }
      ],
      examples: [
        { task: `Bir kitap masadan yere düştüğünde enerjiye ne olur?`,
          steps: [`Masanın üzerindeki kitabın potansiyel enerjisi vardır. Düşerken hareket ettiği için kinetik enerjisi de vardır.`, `Yere çarpınca enerjinin bir kısmı sese ve ısıya dönüşür.`, `<strong>Sonuç: potansiyel enerji kinetik, ses ve ısı enerjisine dönüşür.</strong>`] },
        { task: `Bisiklet frenlendiğinde nasıl bir enerji dönüşümü gerçekleşir?`,
          steps: [`Bisiklet hareket ettiği için kinetik enerjisi vardır.`, `Frenler jantla sürtünerek ısı oluşturur.`, `<strong>Sonuç: kinetik enerji iç enerjiye (ısıya) dönüşür.</strong>`] }
      ]
    },
    'r8-polohova-pohybova': {
      title: `Potansiyel ve kinetik enerji`,
      summary: `Yükseklikteki ve hareket halindeki bir cismin enerjisinin hesaplanması.`,
      theory: [
        `<p>Yerden yükseğe kaldırılmış bir cismin <strong>potansiyel enerjisi</strong> vardır. Ne kadar ağır ve ne kadar yüksekteyse, o kadar çok enerjisi vardır.
       $E_p = m\\cdot g\\cdot h$ ile hesaplanır; burada $m$ kilogram cinsinden kütle, $g \\approx 10\\,\\text{m/s}^2$ yerçekimi ivmesi
       ve $h$ metre cinsinden yüksekliktir.</p>`,
        `<p>Hareket eden bir cismin <strong>kinetik enerjisi</strong> vardır. $E_k = \\frac{1}{2}\\,m\\,v^2$ ile hesaplanır; burada $v$ m/s cinsinden hızdır.
       Hız karesi alınır, yani hız iki katına çıkarsa kinetik enerji dört katına çıkar.</p>`,
        `<p>Bu enerjiler cismin şekline değil, kütlesine, yüksekliğine ve hızına bağlıdır. Bu yüzden araba yüksek hızda daha zor durdurulur:
       çok daha büyük kinetik enerjisi vardır.</p>`,
        `<ol>
         <li>Kütleyi kg, yüksekliği m veya hızı m/s cinsinden bulun.</li>
         <li>Cismin yükseklikte mi yoksa hareket halinde mi olduğuna göre formülü seçin.</li>
         <li>Yerine koyun ve hesaplayın; sonuç joule cinsindendir.</li>
       </ol>`,
        { fig: 'r6r9-kinetika', caption: `Kinetik enerji hızın karesiyle artar: hız iki katına çıkarsa enerji dört katına çıkar.` }
      ],
      examples: [
        { task: `Kütlesi $m = 2\\,\\text{kg}$ olan bir taş, $h = 5\\,\\text{m}$ yüksekliğindeki bir binanın çatısında duruyor. $g = 10\\,\\text{m/s}^2$ iken potansiyel enerjisi nedir?`,
          steps: [`$E_p = m\\cdot g\\cdot h = 2\\cdot 10\\cdot 5$.`, `<strong>Sonuç: E_p = 100 J</strong>`] },
        { task: `Kütlesi $m = 4\\,\\text{kg}$ olan bir araba $v = 3\\,\\text{m/s}$ hızla hareket ediyor. Kinetik enerjisi nedir?`,
          steps: [`$E_k=\\frac{1}{2}\\,m\\,v^2=\\frac{1}{2}\\cdot 4\\cdot 3^2$.`, `$\\frac{1}{2}\\cdot 4 = 2$ ve $3^2 = 9$, yani $E_k = 2\\cdot 9$.`, `<strong>Sonuç: E_k = 18 J</strong>`] }
      ]
    },
    'r8-jednoduche-stroje': {
      title: `Basit makineler`,
      summary: `Kaldıraç, makara ve eğik düzlem işi kolaylaştırır, ama işin kendisini azaltmaz.`,
      theory: [
        `<p><strong>Basit makineler</strong> (kaldıraç, makara, eğik düzlem) daha ağır bir yükü daha küçük bir kuvvetle kaldırmayı mümkün kılar.
       Ancak mekaniğin altın kuralı geçerlidir: işten tasarruf edilemez. Daha küçük bir kuvvetin karşılığında daha uzun bir yol alırız.</p>`,
        `<p>Bir <strong>kaldıraç</strong>, bir eksen etrafında dönebilen bir çubuktur. Kuvvetin eksene olan uzaklığına kuvvetin <em>kol</em> uzunluğu $r$ denir.
       Kaldıraç $F_1\\cdot r_1 = F_2\\cdot r_2$ olduğunda dengededir. Kol uzunluğu büyüdükçe daha küçük bir kuvvet gerekir.</p>`,
        `<p><strong>Makaralar:</strong> sabit makara yalnızca kuvvetin yönünü değiştirir. Hareketli makara kuvveti yarıya indirir, ama yol iki katına çıkar.
       <strong>Eğik düzlem:</strong> eğim ne kadar küçükse, gereken kuvvet o kadar küçük olur, ama yol daha uzundur.</p>`,
        `<ol>
         <li>Hangi kuvvetin yük, hangi kuvvetin çeken olduğunu belirleyin.</li>
         <li>Kol uzunluklarını (eksenden uzaklıkları) ölçün.</li>
         <li>Kaldıraç dengesini kullanarak bilinmeyen kuvveti hesaplayın.</li>
       </ol>`,
        { fig: 'obr-paka', caption: `Kaldıraç, bir taraftaki kuvvet ile kol çarpımı diğer taraftakine eşit olduğunda dengededir.` }
      ],
      examples: [
        { task: `Bir kaldıraçta kuvvetin kol uzunluğu $r_1 = 2\\,\\text{m}$'dir ve $r_2 = 0{,}5\\,\\text{m}$ kolunda $F_2 = 300\\,\\text{N}$ kuvvetle bir yük kaldırıyoruz. $r_1$ kolunda hangi kuvvetle etki ederiz?`,
          steps: [`Denge: $F_1\\cdot r_1 = F_2\\cdot r_2$.`, `$F_1 = \\frac{F_2\\cdot r_2}{r_1} = \\frac{300\\cdot 0{,}5}{2}$.`, `<strong>Sonuç: F_1 = 75 N</strong>`] },
        { task: `Hareketli makara ile $200\\,\\text{N}$ ağırlığında bir yük kaldırıyoruz. Sürtünmeyi ihmal edersek hangi kuvvetle çekeriz?`,
          steps: [`Hareketli makara kuvveti yarıya indirir: $F = \\frac{200}{2}$.`, `<strong>Sonuç: F = 100 N, ama iki kat uzunlukta yol boyunca çekmeliyiz.</strong>`] }
      ]
    },
    'r8-vnutorna-energia': {
      title: `İç enerji ve ısı alışverişi`,
      summary: `Cismin iç enerjisi, ısının aktarılması ve ısıtmada gereken ısının hesaplanması.`,
      theory: [
        `<p>Her cismin <strong>iç enerjisi</strong> vardır. Cismin taneciklerinin (atom ve moleküllerin) kinetik ve potansiyel enerjilerinden oluşur.
       Taneciklerin hareketi hızlandıkça cisim ısınır ve iç enerjisi artar.</p>`,
        `<p><strong>Isı</strong>, cisimlerin sıcaklık farkı nedeniyle alışveriş ettiği enerjidir. Her zaman daha sıcak cisimden daha soğuk cisme akar,
       sıcaklıklar eşitlenene kadar. Isı bir cismin özelliği değil, aktarılan enerjidir.</p>`,
        `<ul>
         <li><strong>İletim:</strong> ısı tanecikten taneciğe aktarılır, örneğin sıcak bir çay bardağındaki kaşık.</li>
         <li><strong>Taşınım (konveksiyon):</strong> ısıtılan hava ya da su yükselir, örneğin radyatörün yakınında.</li>
         <li><strong>Işınım (radyasyon):</strong> ısı bir madde olmadan da yayılır, örneğin Güneş'ten.</li>
       </ul>`,
        `<p>Isıtma için gereken ısı miktarı $Q = m\\cdot c\\cdot \\Delta t$ ile hesaplanır. $c$ özgül ısı sığası değeridir: su için $c = 4200\\,\\text{J/(kg\\cdot K)}$.
       Sıcaklık değişimi $\\Delta t$, son ve ilk sıcaklık arasındaki farktır.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: `Isı, daha sıcak cisimden daha soğuk cisme akar. İletim, taşınım ya da ışınımla aktarılır.` }
      ],
      examples: [
        { task: `$m = 2\\,\\text{kg}$ suyu $10\\,\\text{°C}$ ısıtmak için ne kadar ısı gerekir? $c = 4200\\,\\text{J/(kg\\cdot K)}$ kullanın.`,
          steps: [`$Q = m\\cdot c\\cdot \\Delta t = 2\\cdot 4200\\cdot 10$.`, `<strong>Sonuç: Q = 84 000 J = 84 kJ</strong>`] },
        { task: `Sıcak bir çay zamanla soğur. Çevreye ısıyı nasıl aktarır?`,
          steps: [`Isı, çaydan bardağın duvarı üzerinden iletimle geçer.`, `Bardağın üzerindeki sıcak hava yükselir, bu taşınımdır. Ayrıca ısı ışınımla da yayılır.`, `<strong>Sonuç: iletim, taşınım ve ışınımla.</strong>`] }
      ]
    },
    'r8-naboj': {
      title: `Elektrik yükü`,
      summary: `İki çeşit yük, sürtünmeyle elektriklenme ve elektronun yükü.`,
      theory: [
        `<p>Tüm cisimler atomlardan oluşur. Bir atomun pozitif yüklü bir çekirdeği ve negatif yüklü elektronları vardır. <strong>Elektrik yükü</strong>,
       kuvvet olarak kendini gösteren bir cisim özelliğidir. $Q$ ile gösterilir, birimi kulon'dur (C).</p>`,
        `<p>İki çeşit yük vardır: pozitif ve negatif. Aynı işaretli yükler birbirini iter, zıt işaretliler birbirini çeker.
       Nötr bir cismin pozitif ve negatif yükleri aynı sayıdadır.</p>`,
        `<p><strong>Sürtünmeyle elektriklenme:</strong> sürtünme sırasında elektronlar bir cisimden diğerine geçer. Elektron kazanan cisim negatif yüklenir,
       elektron kaybeden cisim pozitif yüklenir. Yük yaratılamaz ya da yok edilemez, yalnızca aktarılabilir.</p>`,
        `<ul>
         <li>Temel yük $e \\approx 1{,}6\\cdot 10^{-19}\\,\\text{C}$ bir elektron tarafından taşınır.</li>
         <li>Fazla $n$ elektrona sahip bir cismin yükü $Q = -n\\,e$'dir; $n$ elektron eksikse yükü $Q = +n\\,e$'dir.</li>
       </ul>`,
        { fig: 'r6r9-naboj', caption: `Aynı işaretli yükler birbirini iter, zıt işaretli yükler birbirini çeker.` }
      ],
      examples: [
        { task: `Bir cisim 3 elektron kaybetti. Temel yük $e$'nin katları cinsinden yükü nedir?`,
          steps: [`Elektron kaybetmek negatif yük açığı yaratır, bu yüzden cisim pozitiftir.`, `Yük $Q = +3e$'dir.`, `<strong>Sonuç: +3e</strong>`] },
        { task: `Temas ettikten sonra iki top birbirini itiyor. Bu, yüklerinin işareti hakkında ne söyler?`,
          steps: [`İtme yalnızca aynı işaretli yükler arasında oluşur.`, `<strong>Sonuç: iki topun yükleri aynı işaretlidir.</strong>`] }
      ]
    },
    'r8-prud-napatie': {
      title: `Elektrik akımı ve gerilim`,
      summary: `Akımın zamana göre yük, gerilimin ise sürücü itme olarak tanımlanması ve bunların nasıl ölçüldüğü.`,
      theory: [
        `<p><strong>Elektrik akımı</strong>, yüklü taneciklerin, metallerde ağırlıklı olarak elektronların düzenli hareketidir. $I$ ile gösterilir, birimi amperdir (A).
       Bir iletkenin kesitinden $t$ sürede $Q$ yükü geçerse akım $I = \\frac{Q}{t}$'dir. Buradan $1\\,\\text{A} = 1\\,\\text{C/s}$.</p>`,
        `<p>Kurala göre akım yönü, pozitif yükün kaynağın pozitif kutbundan negatif kutbuna hareketi olarak verilir. Elektronlar ters yönde hareket eder.</p>`,
        `<p><strong>Elektriksel gerilim</strong> $U$, devrede elektronları süren potansiyel farktır. Kaynak (pil) bunu kutupları arasında oluşturur.
       Birimi volttur (V).</p>`,
        `<ol>
         <li>Akım, <strong>ampermetre</strong> ile ölçülür ve cihazla seri bağlanır.</li>
         <li>Gerilim, <strong>voltmetre</strong> ile ölçülür ve cihazla paralel bağlanır.</li>
       </ol>`,
        { fig: 'r6r9-merania', caption: `Ampermetre cihazla seri, voltmetre ise cihazla paralel bağlanır.` }
      ],
      examples: [
        { task: `$t = 10\\,\\text{s}$ içinde bir iletkenden $Q = 20\\,\\text{C}$ yük geçiyor. Akım nedir?`,
          steps: [`$I = \\frac{Q}{t} = \\frac{20}{10}$.`, `<strong>Sonuç: I = 2 A</strong>`] },
        { task: `Hangi araç akımı, hangisi gerilimi ölçer ve bunlar nasıl bağlanır?`,
          steps: [`Seri bağlanan ampermetre akımı ölçer.`, `Paralel bağlanan voltmetre gerilimi ölçer.`, `<strong>Sonuç: ampermetre akımı, voltmetre gerilimi ölçer.</strong>`] }
      ]
    },
    'r8-odpor': {
      title: `Elektrik devresi ve elektrik direnci`,
      summary: `Bir devreyi neler oluşturur ve direnç akımı nasıl yavaşlatır.`,
      theory: [
        `<p>Bir <strong>elektrik devresi</strong>, akımın aktığı kapalı bir yoldur. Bir kaynak, cihazlar, iletkenler ve bir anahtardan oluşur.
       Devre kesilirse (örneğin açık bir anahtar ile), akım akmaz.</p>`,
        `<p><strong>Elektrik direnci</strong> $R$, bir iletkende elektronların hareketini yavaşlatır. Elektronların maddenin atomlarıyla çarpışmasından kaynaklanır.
       Birimi ohm'dur ($\\Omega$). Direnç, iletkenin malzemesine, uzunluğuna, kesitine ve sıcaklığına bağlıdır.</p>`,
        `<p>Gerilim, akım ve direnç arasındaki ilişki $R = \\frac{U}{I}$'dir. Aynı gerilimde direnç büyüdükçe akım küçülür.</p>`,
        `<ol>
         <li>Gerilim $U$'yu voltta, akım $I$'yı amperde bulun.</li>
         <li>Direnci $R = \\frac{U}{I}$ kullanarak hesaplayın.</li>
       </ol>`,
        { fig: 'r6r9-odpor', caption: `Aynı gerilimde daha büyük direnç daha küçük akım geçirir: 12 V'ta 2 Ω için akım 6 A, 6 Ω için 2 A'dir.` }
      ],
      examples: [
        { task: `Gerilimi $U = 12\\,\\text{V}$ olan bir ampul $I = 2\\,\\text{A}$ akım taşıyor. Direnci nedir?`,
          steps: [`$R = \\frac{U}{I} = \\frac{12}{2}$.`, `<strong>Sonuç: R = 6 Ω</strong>`] },
        { task: `Akımı daha çok yavaşlatan iletken hangisidir: daha büyük dirençli mi, yoksa daha küçük dirençli mi?`,
          steps: [`Daha büyük direnç, elektronların daha zor geçmesi demektir.`, `<strong>Sonuç: daha büyük dirençli iletken.</strong>`] }
      ]
    },
    'r8-vodice': {
      title: `Elektrik iletkenleri ve yalıtkanlar`,
      summary: `Hangi maddelerin akımı iletebildiği ve nedeni, ayrıca nerede kullanıldıkları.`,
      theory: [
        `<p>Bir <strong>iletken</strong>, elektronların serbestçe hareket edebildiği bir maddedir. Tipik iletkenler bakır, alüminyum ve demir gibi metaller ile grafittir.
       Bir <strong>yalıtkan</strong> (iletken olmayan), elektronları sıkıca bağlıdır ve akımı iletmez: örneğin plastik, kauçuk, cam ya da kuru ahşap.</p>`,
        `<ul>
         <li>Metal: iyi bir iletkendir, akımı iletmek için kullanılır.</li>
         <li>Plastik ve kauçuk: yalıtkandır, iletkenlerin kaplaması olarak kullanılır.</li>
         <li>Suda tuz çözeltisi: akımı iletir, çünkü içinde yüklü taneciklerin hareketi vardır.</li>
         <li>Saf damıtılmış su: pratikte yalıtkandır.</li>
       </ul>`,
        `<p>İletkenleri akımı taşımak için kullanırız, örneğin kablolarda bakır. Yalıtkanlar onları kaplar; böylece canlı bir iletkene dokunmayız
       ve akım olmaması gereken yerlerden akmaz.</p>`,
        `<p>Yarıiletkenler, örneğin silisyum, iletkenlerle yalıtkanlar arasında yer alır. Akımı yalnızca belirli koşullarda iletirler ve bu yüzden elektronikte kullanılırlar.</p>`,
        { fig: 'r6r9-vodice', caption: `İletkenlerin serbest elektronları vardır ve akımı iletir. Yalıtkanların elektronları sıkı bağlıdır ve akımı iletmez.` }
      ],
      examples: [
        { task: `Bakır tel neden plastikle kaplıdır?`,
          steps: [`Bakır akımı iletir, plastik ise iletken değildir.`, `Plastik, iletkenle temasa ve akım kaçağına engel olur.`, `<strong>Sonuç: plastik yalıtkandır ve yaralanmaya karşı koruma sağlar.</strong>`] },
        { task: `Tuzlu su akımı iletir mi?`,
          steps: [`Tuz suda çözünür ve yük taşıyabilen yüklü taneciklere ayrışır.`, `<strong>Sonuç: tuzlu su akımı iletir, yani bir iletkendir.</strong>`] }
      ]
    },
    'r8-bezpecnost': {
      title: `Elektrikli cihazları kullanırken güvenlik`,
      summary: `Elektrik akımından yaralanmaya ve yangına karşı koruyan kurallar.`,
      theory: [
        `<p>Vücuttan geçen elektrik akımı yanıklara, kalp yetmezliğine ya da ölüme neden olabilir. Bu yüzden güvenlik kurallarına uyarız.
       Cilt ıslakken tehlike daha büyüktür, çünkü su akımın iletimini artırır.</p>`,
        `<ul>
         <li>Elektrikli cihazlara ıslak ellerle ya da ıslak zeminde dokunmayın.</li>
         <li>Hasarlı kablo ve fiş kullanmayın; kabloyu asla çekerek çıkarmayın.</li>
         <li>Prizlere, özellikle metal olanlara, nesne sokmayın.</li>
         <li>Cihaz arızalıysa fişini prizden çekin ve bir uzmanı çağırın.</li>
       </ul>`,
        `<p>Bir <strong>sigorta</strong> ya da <strong>otomatik sigorta</strong> (devre kesici), akım çok yüksek olduğunda, örneğin kısa devrede ya da aşırı yükte devreyi keser.
       Bu sayede iletkenlerin aşırı ısınıp yangına neden olmasını önlerler.</p>`,
        `<p><strong>Topraklama:</strong> cihazların metal kasaları toprağa bağlanır. Arıza durumunda kasa gerilim altında olmaz ve ona dokunmak tehlikeli değildir.</p>`
      ],
      examples: [
        { task: `Peter ıslak elle prizden bir fiş çekti. Bu durumda ne tehlikelidir?`,
          steps: [`Cilt üzerindeki su iletimi artırır ve akım vücudun içinden geçebilir.`, `<strong>Sonuç: elektrik çarpma riski vardır. Fişi asla ıslak elle tutmayın.</strong>`] },
        { task: `Kısa devre sırasında hangi öğe iletkeni aşırı ısınmaya karşı korur?`,
          steps: [`Kısa devrede akım çok büyüktür ve iletken hızla ısınır.`, `Sigorta atar ya da otomatik sigorta devreyi kapatır.`, `<strong>Sonuç: sigorta ya da otomatik sigorta.</strong>`] }
      ]
    },
    'r9-obvody': {
      title: `Elektrik devreleri ve özellikleri`,
      summary: `Kapalı bir devrede kaynak, cihaz, anahtar ve iletkenler.`,
      theory: [
        `<p>Bir <strong>elektrik devresi</strong>, bir kaynaktan (pil, akümülatör), cihazlardan (ampul, direnç, motor), bir anahtardan ve iletkenlerden oluşur.
       Akım yalnızca devre <strong>kapalı</strong> olduğunda akar; yani kaynağın bir kutbundan diğerine tüm döngü boyunca gidilebildiğinde.</p>`,
        `<ul>
         <li><strong>Kaynak</strong> yüklü taneciklere enerji sağlar.</li>
         <li><strong>Cihaz</strong> elektrik enerjisini başka bir biçime çevirir: ışık, ısı ya da hareket.</li>
         <li><strong>Anahtar</strong> devreyi kapatır ya da açar.</li>
         <li><strong>İletkenler</strong> bileşenleri tek bir bütün halinde birbirine bağlar.</li>
       </ul>`,
        `<p>Devreyi bir <strong>şema</strong> olarak çizeriz; burada her bileşenin kendi sembolü vardır. Şema, bileşenlerin nasıl bağlandığını gösterir,
       nasıl göründüklerini değil.</p>`,
        `<p>Anahtarı açtığımızda devre kesilir: akım akmaz ve ampul söner. Devre yalnızca tamamen kapalıyken çalışır.</p>`,
        { fig: 'obr-obvod', caption: `Aynı kaynağa bağlı cihazların seri ve paralel bağlantısı.` }
      ],
      examples: [
        { task: `Anahtarı açtığımızda ampule ne olur?`,
          steps: [`Devre kesilir ve akım akmaz.`, `<strong>Sonuç: ampul söner.</strong>`] },
        { task: `Devrede hangi bileşen elektrik enerjisini ışığa dönüştürür?`,
          steps: [`Işık ampulün filamanında üretilir.`, `<strong>Sonuç: ampul (bir cihaz).</strong>`] }
      ]
    },
    'r9-zapojenie': {
      title: `Seri ve paralel bağlantı`,
      summary: `Dirençler art arda ya da yan yana bağlandığında toplam direnç nasıl değişir.`,
      theory: [
        `<p>İki direnç <strong>seri</strong> (art arda) ya da <strong>paralel</strong> (yan yana) bağlanabilir. Seri bağlantıda akım her iki dirençten de geçmek zorundadır.
       Paralel bağlantıda akım iki kola ayrılır.</p>`,
        `<ul>
         <li><strong>Seri bağlantı:</strong> akım devrenin her yerinde aynıdır, gerilim dirençler arasında paylaşılır.
             Toplam direnç toplamdır: $R = R_1 + R_2$.</li>
         <li><strong>Paralel bağlantı:</strong> gerilim her iki kolda da aynıdır, akım ayrılır.
             $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$ geçerlidir.</li>
       </ul>`,
        `<p>Paralel bağlantıda toplam direnç her zaman en küçük kol direncinden <strong>küçüktür</strong>. Mantıksal bir nedeni vardır:
       her ek kol, akım için bir yol daha demektir. Bu yüzden evlerde paralel bağlı cihazlar şebekeden daha büyük akım çeker.</p>`,
        `<ol>
         <li>Dirençlerin art arda (seri) mi yoksa yan yana (paralel) mi olduğunu belirleyin.</li>
         <li>Seri bağlantıda dirençleri toplayın; paralelde ise terslerini toplayın.</li>
       </ol>`,
        { fig: 'obr-obvod', caption: `Aynı kaynağa bağlı cihazların seri ve paralel bağlantısı.` }
      ],
      examples: [
        { task: `Dirençler $R_1 = 6\\,\\Omega$ ve $R_2 = 3\\,\\Omega$ paralel bağlanmıştır. Toplam direnç nedir?`,
          steps: [`$\\frac{1}{R}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{6}+\\frac{2}{6}=\\frac{3}{6}$.`, `$R=\\frac{6}{3}=2\\,\\Omega$.`, `<strong>Sonuç: R = 2 Ω</strong>`] },
        { task: `Dirençler $R_1 = 4\\,\\Omega$ ve $R_2 = 5\\,\\Omega$ seri bağlanmıştır. Toplam direnç nedir?`,
          steps: [`Seri bağlantıda dirençler toplanır: $R = R_1 + R_2$.`, `<strong>Sonuç: R = 9 Ω</strong>`] }
      ]
    },
    'r9-vypocty': {
      title: `Akım, gerilim ve direncin hesaplanması`,
      summary: `İki bilinen büyüklükten üçüncüyü hesaplarız.`,
      theory: [
        `<p>Devrede üç temel büyüklük vardır: akım $I$ (A), gerilim $U$ (V) ve direnç $R$ (Ω). İkisini biliyorsak üçüncüyü hesaplayabiliriz.
       İlişkiler $I=\\frac{U}{R}$, $U=I\\cdot R$ ve $R=\\frac{U}{I}$'dir.</p>`,
        `<ol>
         <li>Verilenleri ve bulmamız gerekenleri yazın.</li>
         <li>Aranan büyüklüğün tek başına kaldığı formülü seçin.</li>
         <li>V, A ve Ω birimlerini yerine koyun; dönüşüm yaparken katları kullanın.</li>
         <li>Sonucun birimlerini kontrol edin.</li>
       </ol>`,
        `<p><strong>Birimlere dikkat edin:</strong> $1\\,\\text{mA}=0{,}001\\,\\text{A}$ ve $1\\,\\text{k}\\Omega=1000\\,\\Omega$. Bir değer miliamper ya da kiloohm cinsinden verilmişse,
       önce onu temel birime çevirin.</p>`,
        { fig: 'r6r9-trojuholnik', caption: `Aranan büyüklüğü kapatın, geri kalanlar formülü gösterir, örneğin U = I · R.` }
      ],
      examples: [
        { task: `Direnci $R = 4\\,\\Omega$ olan bir direncin uçlarındaki gerilim $U = 12\\,\\text{V}$'tur. Bu dirençten hangi akım geçer?`,
          steps: [`$I=\\frac{U}{R}=\\frac{12}{4}$.`, `<strong>Sonuç: I = 3 A</strong>`] },
        { task: `Bir cihaz $U = 230\\,\\text{V}$ gerilimde $I = 0{,}5\\,\\text{A}$ akım çekiyor. Direnci nedir?`,
          steps: [`$R=\\frac{U}{I}=\\frac{230}{0{,}5}$.`, `Ondalık sayıya bölme: $\\frac{230}{0{,}5}=\\frac{460}{1}$.`, `<strong>Sonuç: R = 460 Ω</strong>`] }
      ]
    },
    'r9-ohmov-zakon': {
      title: `Ohm yasası`,
      summary: `Akım gerilimle doğru, dirençle ters orantılıdır.`,
      theory: [
        `<p><strong>Ohm yasası</strong> şunu söyler: bir iletkenden geçen akım, gerilimle doğru orantılı, dirençle ters orantılıdır.
       $I=\\frac{U}{R}$ biçiminde yazılır ve iletkenin sıcaklığının sabit olduğu varsayılır.</p>`,
        `<ul>
         <li>Direnç sabitken gerilimi iki katına çıkarmak akımı da iki katına çıkarır.</li>
         <li>Gerilim sabitken direnci iki katına çıkarmak akımı yarıya indirir.</li>
       </ul>`,
        `<p>Sabit bir direnç için akımın gerilime bağlılığı grafikte <strong>orijinden geçen doğru bir çizgidir</strong>.
       Daha dik bir çizgi daha küçük direnç demektir, çünkü aynı gerilimde daha büyük akım geçer.</p>`,
        `<p>Yasa, sabit sıcaklıkta metal iletkenler için tam olarak geçerlidir. Metal çok fazla ısıtılırsa direnci artar, bu yüzden bağımlılık artık doğrusal olmaz.</p>`,
        { fig: 'obr-ohm', caption: `Sabit dirençte gerilim-akım grafiği orijinden geçen doğru bir çizgidir.` }
      ],
      examples: [
        { task: `Bir direncin uçlarındaki gerilim $4\\,\\text{V}$'tan $12\\,\\text{V}$'a çıktı. Direnç değişmedi. Akım kaç kat arttı?`,
          steps: [`Gerilimlerin oranı $\\frac{12}{4}=3$.`, `Akım gerilimle doğru orantılı olduğundan, o da $3$ kat artar.`, `<strong>Sonuç: 3 kat</strong>`] },
        { task: `$230\\,\\text{V}$ gerilimde bir direnç $2\\,\\text{A}$ akım çekiyor. Direnç iki katına çıkar ve gerilim aynı kalırsa hangi akımı çeker?`,
          steps: [`Direnç iki katına çıkıyor ve akım dirençle ters orantılıdır.`, `$I_2 = \\frac{I_1}{2} = \\frac{2}{2}$.`, `<strong>Sonuç: 1 A</strong>`] }
      ]
    },
    'r9-praca-vykon': {
      title: `Elektrik işi ve elektrik gücü`,
      summary: `Bir cihazın zamanla ne kadar enerji çektiği ve bunun kWh cinsinden nasıl hesaplandığı.`,
      theory: [
        `<p><strong>Elektrik gücü</strong> $P=U\\cdot I$'dir ve birimi wattır (W). Cihazın saniyede ne kadar enerji dönüştürdüğünü gösterir.
       Direnci biliyorsak $P=I^2\\,R$ ya da $P=\\frac{U^2}{R}$ de geçerlidir.</p>`,
        `<p><strong>Elektrik işi</strong> (tüketilen enerji) $W=P\\cdot t=U\\cdot I\\cdot t$'dir; burada $t$ saniye cinsinden zamandır.
       Birimi joule'dür (J), çünkü $1\\,\\text{W}\\cdot 1\\,\\text{s}=1\\,\\text{J}$.</p>`,
        `<p>Evlerde enerji <strong>kilovatsaat</strong> (kWh) cinsinden faturalandırılır. Kilowatt cinsinden gücü, saat cinsinden zamanla çarparak hesaplarız:
       $E = P\\cdot t$, burada $1\\,\\text{kWh} = 3{,}6\\cdot 10^{6}\\,\\text{J}$.</p>`,
        `<ol>
         <li>Güç kilowatt cinsinden: $1000\\,\\text{W} = 1\\,\\text{kW}$.</li>
         <li>Enerji kWh cinsinden: kW cinsinden güç çarpı saat cinsinden zaman.</li>
       </ol>`
      ],
      examples: [
        { task: `Bir ampul $230\\,\\text{V}$ gerilime bağlı ve içinden $0{,}5\\,\\text{A}$ akım geçiyor. Gücü nedir?`,
          steps: [`$P = U\\cdot I = 230\\cdot 0{,}5$.`, `<strong>Sonuç: P = 115 W</strong>`] },
        { task: `Gücü $2\\,\\text{kW}$ olan bir çamaşır makinesi $1{,}5\\,\\text{h}$ çalışıyor. kWh cinsinden ne kadar enerji tüketir?`,
          steps: [`$E = P\\cdot t = 2\\cdot 1{,}5$.`, `<strong>Sonuç: E = 3 kWh</strong>`] }
      ]
    },
    'r9-magnetizmus': {
      title: `Manyetik alan ve elektrik akımının manyetik etkileri`,
      summary: `Akım taşıyan telin etrafında manyetik alan oluşur; yönü sağ el kuralıyla bulunur.`,
      theory: [
        `<p>Üzerinden elektrik akımı geçen bir iletkenin etrafında <strong>manyetik alan</strong> oluşur. Elektrik ile manyetizma arasındaki bağlantı,
       1820'de Danimarkalı fizikçi Ørsted tarafından keşfedildi: yakındaki bir telde akım açıldığında pusula iğnesi sapmıştı.</p>`,
        `<p><strong>Alanın yönü</strong> sağ el kuralıyla belirlenir: başparmak akımın yönünü gösterir, kıvrılan parmaklar iletken etrafındaki
       manyetik alan çizgilerinin yönünü gösterir. Akımın yönünü tersine çevirirsek alanın yönü de tersine döner.</p>`,
        `<p>İletkeni bir <strong>bobin</strong> haline sararsak, her sarımın alanları toplanır ve bobinin içinde daha güçlü bir alan oluşur.
       Alanın gücünü, daha büyük akım ya da daha fazla sarım ile artırırız.</p>`,
        `<ul>
         <li>Akım yoksa telin etrafında manyetik alan yoktur.</li>
         <li>Manyetik alan mıknatıslara ve akım taşıyan diğer iletkenlere kuvvet uygular.</li>
         <li>Alan, telden uzaklaştıkça zayıflar.</li>
       </ul>`,
        { fig: 'obr-magnet-vodic', caption: `Akım taşıyan bir iletkenin etrafında, iletkeni saran daireler şeklinde bir manyetik alan vardır.` }
      ],
      examples: [
        { task: `Akımın yönünü tersine çevirirsek telin etrafındaki manyetik alanın yönü nasıl değişir?`,
          steps: [`Alanın yönü akımın yönü ile belirlenir (sağ el kuralı).`, `<strong>Sonuç: alanın yönü tersine döner.</strong>`] },
        { task: `Akım taşıyan bir telin yakınında pusula iğnesi neden sapar?`,
          steps: [`Pusula iğnesi, manyetik alanda dönen küçük bir mıknatıstır.`, `<strong>Sonuç: akım taşıyan telin etrafındaki manyetik alan iğneye etki eder.</strong>`] }
      ]
    },
    'r9-elektromagnet': {
      title: `Elektromıknatıs ve elektrik motoru`,
      summary: `Çekirdekli bir bobin geçici mıknatıs olarak; elektrik enerjisini harekete çeviren bir motor.`,
      theory: [
        `<p>Bir <strong>elektromıknatıs</strong>, yumuşak demir çekirdekli bir bobindir. Bobinden akım geçtiğinde çekirdek mıknatıslanır.
       Akım kesildikten sonra mıknatıslık kaybolur. Elektromıknatısın gücünü daha büyük akım ya da daha fazla sarım ile artırırız.</p>`,
        `<p>Bir <strong>elektrik motoru</strong>, elektrik enerjisini kinetik (mekanik) enerjiye çevirir. Manyetik alanın akım taşıyan bir iletkene uyguladığı kuvveti kullanır:
       manyetik alan içindeki bir bobin döner.</p>`,
        `<ul>
         <li>Elektromıknatıslar zillerde, rölelerde ve hurda sahalarındaki kaldırma mıknatıslarında kullanılır.</li>
         <li>Elektrik motorları çamaşır makinelerini, matkapları ve fanları çalıştırır.</li>
       </ul>`,
        `<ol>
         <li>Akım motorun bobininden geçer.</li>
         <li>Manyetik alan bobinin tellerine kuvvet uygular.</li>
         <li>Bobin döner.</li>
         <li>Komütatör akımın yönünü değiştirir, böylece bobin dönmeye devam eder.</li>
       </ol>`,
        { fig: 'r6r9-elektromagnet', caption: `Demir çekirdekli bir bobin yalnızca içinden akım geçerken mıknatıstır.` }
      ],
      examples: [
        { task: `Hurda sahasındaki bir elektromıknatıs neden demir hurdayı kaldırır ama akım kesildiğinde bırakır?`,
          steps: [`Akım açıkken çekirdek mıknatıslanır ve demiri çeker.`, `Akım kesildikten sonra manyetik alan kaybolur.`, `<strong>Sonuç: elektromıknatısın mıknatıslığı akıma bağlıdır.</strong>`] },
        { task: `Bir çamaşır makinesinin elektrik motorunda hangi enerji dönüşümü gerçekleşir?`,
          steps: [`Elektrik enerjisi motorun bobinlerinden geçer.`, `Tambur dönmeye başlar.`, `<strong>Sonuç: elektrik enerjisi kinetik (mekanik) enerjiye dönüşür.</strong>`] }
      ]
    },
    'r9-premeny-zdroje': {
      title: `Enerji dönüşümleri ve kaynakları`,
      summary: `Santrallerde enerjinin nasıl değiştiği ve yenilenebilir kaynakların yenilenemeyenlerden farkı.`,
      theory: [
        `<p>Enerji bir biçimden diğerine dönüştürülebilir. Enerji kaynakları, doğal olarak yenilenen <strong>yenilenebilir</strong> kaynaklara (Güneş, rüzgâr, su, biyokütle,
       jeotermal enerji) ve rezervleri tükenen <strong>yenilenemez</strong> kaynaklara (kömür, petrol, doğal gaz, nükleer yakıt) ayrılır.</p>`,
        `<ul>
         <li><strong>Kömürlü santral:</strong> yakıtın kimyasal enerjisi, ısıl, mekanik (türbin), elektrik enerjisi.</li>
         <li><strong>Hidroelektrik santral:</strong> suyun potansiyel enerjisi, kinetik, mekanik (türbin), elektrik enerjisi.</li>
         <li><strong>Güneş paneli:</strong> Güneş'ten gelen ışınım enerjisi elektrik enerjisine dönüştürülür.</li>
         <li><strong>Rüzgâr santrali:</strong> rüzgârın kinetik enerjisi, mekanik, elektrik enerjisi.</li>
       </ul>`,
        `<p>Her dönüşümde enerjinin bir kısmı ısıya dönüşür ve çevreye dağılır. Toplam enerji korunur, ama kullanılabilir enerji azalır.</p>`,
        { fig: 'r6r9-elektrarna', caption: `Kömürlü santral, yakıtın kimyasal enerjisini adım adım ısıl, mekanik ve elektrik enerjisine çevirir.` }
      ],
      examples: [
        { task: `Güneş paneli hangi enerji dönüşümünü yapar?`,
          steps: [`Panel Güneş'ten ışınım enerjisi alır.`, `Bunu elektrik enerjisine dönüştürür.`, `<strong>Sonuç: ışınım enerjisi elektrik enerjisine.</strong>`] },
        { task: `Kömür neden yenilenemez bir kaynaktır?`,
          steps: [`Milyonlarca yıl içinde bitkilerden oluşmuştur.`, `Onu, yenilenebileceğinden daha hızlı kullanıyoruz.`, `<strong>Sonuç: yenilenemez, çünkü zamanında yenilenemez.</strong>`] }
      ]
    },
    'r9-energia-priroda': {
      title: `Enerji doğada ve teknolojide`,
      summary: `Bir cihazın verimi ve tam olarak kullanılamayan enerji.`,
      theory: [
        `<p>Bir cihazın <strong>verimi</strong>, verilen enerjinin ne kadarının kullanışlı işe ya da enerjiye dönüştüğünü gösterir:
       $\\eta = \\frac{E_u}{E_d}\\cdot 100\\,\\%$, burada $E_u$ kullanılabilir enerji, $E_d$ verilen enerjidir.</p>`,
        `<p>Verim her zaman %100'den küçüktür. Enerjinin bir kısmı ısıya dönüşür ve çevreye dağılır. Flamanlı bir ampulün verimi düşüktür,
       çünkü enerjisinin çoğunu ısı olarak yayar.</p>`,
        `<ul>
         <li>LED ampul, klasik ampulden daha verimlidir, çünkü daha az enerji ısıya dönüşür.</li>
         <li>Bir arabanın içten yanmalı motorunda, yakıtın yanmasından gelen enerjinin büyük bir kısmı ısı olarak kaybolur.</li>
       </ul>`,
        `<p>Enerji doğada kaybolmaz, yalnızca ısı olarak yayılır ve bu da kullanmayı zorlaştırır. Bu yüzden insanlar makinelerin verimini artırmaya çalışır.</p>`,
        { fig: 'r6r9-ucinnost', caption: `Verim, kullanılabilir enerjinin verilen enerjiye oranıdır. Kalan enerji ısı olarak kaybolur.` }
      ],
      examples: [
        { task: `Bir motor 400 J enerji alıyor ve bunun 100 J'ünü harekete çeviriyor. Verimi nedir?`,
          steps: [`$\\eta = \\frac{100}{400}\\cdot 100\\,\\%$.`, `$\\eta = 0{,}25\\cdot 100\\,\\% = 25\\,\\%$.`, `<strong>Sonuç: %25</strong>`] },
        { task: `Verimi $90\\,\\%$ olan bir ısıtıcı $1000\\,\\text{J}$ alıyor. Ne kadar enerji kaybolur?`,
          steps: [`Kullanılabilir enerji $0{,}9\\cdot 1000 = 900\\,\\text{J}$'dür.`, `Kalan kayıptır: $1000 - 900 = 100\\,\\text{J}$.`, `<strong>Sonuç: 100 J</strong>`] }
      ]
    },
    'r9-opakovanie': {
      title: `Tekrar ve pratik fizik problemleri`,
      summary: `9. sınıf formüllerine genel bakış ve pratik problemler için bir yöntem.`,
      theory: [
        `<p>Her problemde önce verilenleri ve bulmamız gerekenleri yazın. Sonra formülü seçin, birimleri dönüştürün ve yerine koyun.
       En sonda sonucun birimlerini ve değerin makul olup olmadığını kontrol edin.</p>`,
        `<ol>
         <li>Olguyu belirleyin: elektrik devresi, enerji, güç, manyetizma.</li>
         <li>Doğru formülü seçin.</li>
         <li>Birimleri dönüştürün (mA'dan A'ya, kW'tan W'a, dakikadan saniyeye, kWh'den J'ye).</li>
         <li>Yerine koyun, hesaplayın ve birimleri kontrol edin.</li>
       </ol>`,
        `<ul>
         <li>Ohm yasası: $I=\\frac{U}{R}$, $U=I\\cdot R$, $R=\\frac{U}{I}$.</li>
         <li>Güç ve iş: $P=U\\cdot I$, $W=P\\cdot t$.</li>
         <li>Potansiyel enerji: $E_p=m\\,g\\,h$, $g\\approx 10\\,\\text{m/s}^2$ ile.</li>
         <li>Verim: $\\eta=\\frac{E_u}{E_d}\\cdot 100\\,\\%$.</li>
       </ul>`
      ],
      examples: [
        { task: `$1500\\,\\text{W}$ gücündeki bir motor $2\\,\\text{h}$ çalışıyor. kWh cinsinden ne kadar enerji tüketir?`,
          steps: [`Kilowatt cinsinden güç: $1500\\,\\text{W} = 1{,}5\\,\\text{kW}$.`, `$E = P\\cdot t = 1{,}5\\cdot 2 = 3$.`, `<strong>Sonuç: E = 3 kWh</strong>`] },
        { task: `Kütlesi $3\\,\\text{kg}$ olan bir cisim $4\\,\\text{m}$ yükseklikte. $g = 10\\,\\text{m/s}^2$ iken potansiyel enerjisi nedir?`,
          steps: [`$E_p = m\\,g\\,h = 3\\cdot 10\\cdot 4$.`, `<strong>Sonuç: E_p = 120 J</strong>`] }
      ]
    }
  }
});
