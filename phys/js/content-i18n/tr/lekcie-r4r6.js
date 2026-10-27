/* Türkçe: dersler 4.–6. sınıf (js/rocniky/r4.js, r5.js, r6.js). Štruktúra a kľúče: js/content-i18n.js. */
CONTENT_I18N.add('tr', {
  lessons: {
    'r4-svetlo-tien': {
      title: 'Işık, gölge ve ışık kaynakları',
      summary: 'Işık kaynağını ışıklanan cisimden ayırır ve gölgenin nasıl oluştuğunu açıklarsın.',
      theory: [
        `<p>Işık düz çizgiler boyunca yayılır. Kendisi ışık gönderen cisme <strong>ışık kaynağı</strong> denir, örneğin Güneş, ampul veya mum.
       Ay, bir masa veya bir kitap ışık göndermez. Yalnızca ışığı yansıtırlar; bu yüzden onları görebiliriz.</p>`,
        `<p>Işık <strong>opak</strong> bir cisme çarptığında, cismin arkasında bir <strong>gölge</strong> oluşur. Işık cismin arkasına ulaşamaz,
       çünkü cismin etrafından dolanamaz.</p>`,
        `<ul>
         <li>Opak cisimler, örneğin ahşap veya taş, ışığı durdurur ve koyu bir gölge oluşturur.</li>
         <li>Saydam cisimler, örneğin berrak cam veya su, ışığı geçirir. Arkalarındaki gölge zayıf veya hiç yoktur.</li>
       </ul>`,
        `<p>Gölgenin büyüklüğü uzaklığa bağlıdır. Cisim ışık kaynağına yaklaştıkça gölge büyür.
       Kaynaktan uzaklaştıkça gölge küçülür.</p>`,
        { fig: 'obr-tien', caption: 'Işığın ulaşamadığı yerde gölge oluşur, çünkü opak cisim ışığı engeller.' }
      ],
      examples: [
        { task: 'Hangi cisim ışık kaynağıdır: mum, kitap veya ağaç?',
          steps: ['Işık kaynağı ışık gönderir. Kitap ve ağaç yalnızca ışığı yansıtır.', 'Mum yanar ve ışık gönderir.', '<strong>Sonuç: mum</strong>'] },
        { task: 'Güneşli bir günde ağacın arkasında neden gölge vardır?',
          steps: ['Güneş bir ışık kaynağıdır.', 'Ağaç opaktır, bu yüzden ışık ondan geçemez.', '<strong>Sonuç: ağacın arkasına ışık ulaşmaz, bu yüzden orada gölge oluşur.</strong>'] }
      ]
    },
    'r4-zvuk': {
      title: 'Ses ve sesin oluşumu',
      summary: 'Sesin titreşen cisimlerle oluştuğunu açıklar, perdeyi ve şiddeti birbirinden ayırırsın.',
      theory: [
        `<p>Ses <strong>titreşim</strong> ile oluşur, yani cismin ileri geri hareket etmesiyle. Ses çatalına vurduğumuzda veya gergin bir gitar telini çektiğimizde
       cisim hızlı titreşir ve çevresindeki havayı hareket ettirir.</p>`,
        `<p>Titreşim, havada bir <strong>ses dalgası</strong> olarak kulağımıza ulaşır. Ses, hava, su veya katı gibi bir maddesel ortama ihtiyaç duyar.
       Boşlukta yayılmaz, bu yüzden uzayda patlamalar duyulamaz.</p>`,
        `<ul>
         <li><strong>Perde</strong> titreşim hızına bağlıdır. Daha hızlı titreşim daha tiz ses verir.</li>
         <li><strong>Şiddet</strong> titreşimlerin genliğine bağlıdır. Daha geniş bir salınım daha yüksek ses verir.</li>
       </ul>`,
        `<p>Havada ses yaklaşık $340\\,\\text{m/s}$ hızla yayılır. Işık çok daha hızlıdır, neredeyse anlıktır.
       Bu yüzden fırtınada önce şimşeği görür, sonra gök gürültüsünü duyarız.</p>`,
        { fig: 'r1r5-zvuk-vlna', caption: 'Daha tiz sesin titreşimi daha hızlıdır (daha kısa periyot). Daha şiddetli sesin salınımı daha geniştir, yani genliği daha büyüktür.' }
      ],
      examples: [
        { task: 'Fırtınada neden önce şimşeği görür, sonra gök gürültüsünü duyarız?',
          steps: ['Işık neredeyse anlık yayılır.', 'Ses havada çok daha yavaş yayılır.', '<strong>Sonuç: ses bize ışıktan daha geç ulaşır.</strong>'] },
        { task: 'Bir cismin ses çıkarabilmesi için ne yapması gerekir?',
          steps: ['Ses, cismin titreşmesiyle oluşur.', '<strong>Sonuç: cismin titreşmesi gerekir.</strong>'] }
      ]
    },
    'r4-magnety': {
      title: 'Cisimlerin manyetik özellikleri',
      summary: 'Mıknatısın çektiği cisimleri çekmediklerinden ayırt edersin.',
      theory: [
        `<p>Mıknatıs demir, nikel ve kobalttan yapılmış cisimleri <strong>çeker</strong>, örneğin bir çivi veya çelik ataç. Bu tür metallere manyetik metal denir.
       Ahşap, plastik, cam ve bakır gibi çoğu diğer metal mıknatıs tarafından çekilmez.</p>`,
        `<p>Her mıknatısın iki <strong>kutbu</strong> vardır: kuzey ve güney. Zıt kutuplar birbirini çeker, aynı kutuplar ise birbirini iter.</p>`,
        `<p>Manyetik etki kağıttan veya ince bir plastik tabakasından da geçer. Bu yüzden mıknatıs, bir kağıt sayfanın altındaki çiviyi de çekebilir.</p>`,
        `<p>Bir cismin bir özelliğini basit bir deneyle öğrenebiliriz: mıknatısı yaklaştırır ve cismin hareket edip etmediğini gözlemleriz.</p>`,
        { fig: 'obr-magnet', caption: 'Çubuk mıknatısın manyetik alan çizgileri kuzey kutbu N’den çıkar ve güney kutbu S’ye girer.' }
      ],
      examples: [
        { task: 'Mıknatıs hangi cisimleri çeker: çivi, lastik ve plastik cetvel?',
          steps: ['Çivi demirden yapılmıştır ve mıknatıs onu çeker.', 'Lastik ve plastik cetvel mıknatıs tarafından çekilmez.', '<strong>Sonuç: yalnızca çivi.</strong>'] },
        { task: 'İki mıknatıs, zıt kutupları birbirine bakacak şekilde yaklaştırılıyor. Ne olur?',
          steps: ['Zıt kutuplar birbirini çeker.', '<strong>Sonuç: mıknatıslar birbirini çeker.</strong>'] }
      ]
    },
    'r4-elektricke-zariadenia': {
      title: 'Basit elektrikli cihazlar',
      summary: 'Basit bir elektrik devresinin parçalarını ve her birinin ne işe yaradığını bilirsin.',
      theory: [
        `<p>Basit bir elektrik devresi bir <strong>kaynak</strong> (pil), bir <strong>tüketici</strong> (ampul, zil, fan),
       <strong>iletkenler</strong> (genellikle bakır teller) ve bir <strong>anahtar</strong>dan oluşur.</p>`,
        `<ul>
         <li>Kaynak elektrik enerjisi sağlar.</li>
         <li>Tüketici elektrik enerjisini başka bir enerji türüne, örneğin ışığa, ısıya veya harekete dönüştürür.</li>
         <li>Anahtar devreyi kapatır veya açar.</li>
       </ul>`,
        `<p>Elektrik akımı yalnızca <strong>kapalı</strong> bir devrede akar. Devre kesilirse, örneğin açık bir anahtar yüzünden, ampul yanmaz.</p>`,
        `<p>İletkenler elektrik akımını geçirir, örneğin metaller. Yalıtkanlar, örneğin plastik veya kauçuk, akımı geçirmez. Bu yüzden tellerin plastik kılıfı vardır ve aletlerin kulpları kauçuktan yapılır.</p>`,
        { fig: 'r1r5-obvod-spinac', caption: 'Anahtar açıkken devre kesiktir, akım akmaz ve ampul yanmaz.' }
      ],
      examples: [
        { task: 'Devrenin hangi parçası enerji sağlar?',
          steps: ['Kaynak elektrik enerjisi sağlar, tüketici ise bu enerjiyi harcar.', '<strong>Sonuç: pil (kaynak).</strong>'] },
        { task: 'Anahtar kapatıldıktan sonra ampul neden yanmaz?',
          steps: ['Açık anahtar devreyi keser.', 'Kesik bir devreden akım geçmez.', '<strong>Sonuç: ampul yanmaz, çünkü akım akmaz.</strong>'] }
      ]
    },
    'r4-energia': {
      title: 'Enerji ve kullanımı',
      summary: 'Yaygın cihazlarda enerjinin hangi başka enerji türüne dönüştüğünü tanırsın.',
      theory: [
        `<p><strong>Enerji</strong> hiçbir şeyden yaratılamaz ve yok edilemez. Yalnızca bir biçimden başka bir biçime dönüşür. Enerjinin birimi joule’dür, sembolü $\\text{J}$.</p>`,
        `<ul>
         <li><strong>Elektrik</strong> enerjisi: priz, pil, şarj cihazı.</li>
         <li><strong>Kimyasal</strong> enerji: pilde veya yiyeceklerde depolanır.</li>
         <li><strong>Hareket</strong> enerjisi: koşan insan, dönen fan.</li>
         <li><strong>Işık</strong> enerjisi: Güneş, ampul, ekran.</li>
         <li><strong>Isı</strong> enerjisi: sıcak su, ılık radyatör.</li>
         <li><strong>Ses</strong> enerjisi: hoparlörden gelen müzik, insan sesi.</li>
       </ul>`,
        `<p>Cihazlar genellikle enerjiyi yalnızca tek bir biçime dönüştürmez. Ampul ışık verir, ama enerjisinin çoğu ısıya dönüşür. Bu yüzden açıldıktan sonra sıcaktır.</p>`,
        `<p>Elektrikli fan elektrik enerjisini pervanelerinin hareketine dönüştürür. Hoparlör ise elektrik enerjisini sese dönüştürür.</p>`,
        { fig: 'r1r5-premeny-energie', caption: 'Fan elektrik enerjisini harekete, ampul ise ışığa ve ısıya dönüştürür.' }
      ],
      examples: [
        { task: 'Elektrikli fan hangi enerji dönüşümünü yapar?',
          steps: ['Fan, elektrik enerjisini tüketen bir cihazdır.', 'Motor döner ve pervaneler hareket eder.', '<strong>Sonuç: elektrik enerjisi hareket enerjisine dönüşür.</strong>'] },
        { task: 'Ampul hangi enerji dönüşümünü yapar?',
          steps: ['Ampul elektrik enerjisi alır.', 'Işık verir ve aynı anda ısınır.', '<strong>Sonuç: elektrik enerjisi ışığa ve ısıya dönüşür.</strong>'] }
      ]
    },
    'r4-bezpecnost': {
      title: 'Elektrikli cihazlarla güvenli davranış',
      summary: 'Elektrikli cihazlarla hangi davranışın güvenli, hangisinin güvenli olmadığını bilirsin.',
      theory: [
        `<p>Elektrik yararlıdır, ama tehlikeli de olabilir. Vücuttan geçen akım ciddi bir yaralanmaya neden olabilir.
       Bu yüzden elektrikli cihazları yalnızca yetişkinlerin talimatına göre kullanmalısın.</p>`,
        `<ol>
         <li>Prize veya fişe asla ıslak elle dokunma.</li>
         <li>Cihazı fişinden tutarak çıkar, kablosundan değil.</li>
         <li>Kablo hasarlıysa veya teller açıktaysa cihazı kullanma ve bir yetişkine haber ver.</li>
       </ol>`,
        `<p>Su elektrik akımını çok iyi iletir, bu yüzden su ile elektrikli cihazları bir arada kullanmak çok tehlikelidir.
       Banyoda veya suyun yakınında saç kurutma makinesi, şarj cihazı veya başka bir cihaz kullanma.</p>`,
        `<p>Canlı bir teli tutan birini görürsen, ona dokunma. Önce bir yetişkini veya acil servisleri çağır,
       böylece akım kesilebilir.</p>`
      ],
      examples: [
        { task: 'Ütüyü prizden doğru nasıl çıkarırsın?',
          steps: ['Kabloyu çekmek telleri zedeleyebilir.', 'Doğru yol, fişi tutup çekmektir.', '<strong>Sonuç: fişi çekeriz, kabloyu değil.</strong>'] },
        { task: 'Nemli bir banyoda telefonunu şarj edebilir misin?',
          steps: ['Su elektrik akımını iyi iletir.', '<strong>Sonuç: hayır, nemli ortamda şarj etmek güvenli değildir.</strong>'] }
      ]
    },
    'r5-vlastnosti-latok': {
      title: 'Maddelerin ve cisimlerin özellikleri',
      summary: 'Maddeyi cisimden ayırt eder ve malzemelerin temel özelliklerini bilirsin.',
      theory: [
        `<p>Bir <strong>madde</strong>, bir şeyin yapıldığı malzemedir, örneğin ahşap, demir veya su.
       Bir <strong>cisim</strong> ise bir veya birkaç maddeden yapılmış belirli bir nesnedir, örneğin bir masa, bir anahtar veya bir şişe.</p>`,
        `<p>Maddelerin özelliklerini gözlemleyerek ve ölçerek öğreniriz: renk, parlaklık, sertlik, esneklik, suda çözünürlük veya ısıyı ve elektrik akımını iletip iletmediği.</p>`,
        `<ul>
         <li><strong>Sertlik</strong>: çizilmeye karşı direnç.</li>
         <li><strong>Esneklik</strong>: bastırıldıktan veya büküldükten sonra eski şekline dönebilme.</li>
         <li><strong>Çözünürlük</strong>: suda çözünebilme. Tuz çözünür, kum çözünmez.</li>
       </ul>`,
        `<p>Aynı maddeden yapılmış cisimler farklı şekil ve boyutlarda olabilir. Ancak maddenin özellikleri değişmez: iki ahşap parçasının da ahşabın özellikleri vardır.</p>`
      ],
      examples: [
        { task: 'Anahtar bir cisim midir yoksa bir madde midir?',
          steps: ['Anahtar belirli bir nesnedir.', '<strong>Sonuç: metalden yapılmış bir cisimdir.</strong>'] },
        { task: 'Suda hangi madde çözünür: tuz mu, kum mu?',
          steps: ['Tuz suda çözünür.', 'Kum suda çözünmez.', '<strong>Sonuç: tuz.</strong>'] }
      ]
    },
    'r5-skupenstva': {
      title: 'Katı, sıvı ve gaz hâlindeki maddeler',
      summary: 'Katı, sıvı ve gaz hâlindeki maddeleri şekil ve hacim bakımından karşılaştırırsın.',
      theory: [
        `<p>Maddeler üç temel <strong>hâlde</strong> bulunur: <strong>katı</strong>, <strong>sıvı</strong> ve <strong>gaz</strong>.
       Bunları sabit bir şekle ve sabit bir hacme sahip olup olmadıklarına göre ayırt ederiz.</p>`,
        `<ul>
         <li><strong>Katı</strong>: sabit şekil ve hacim, örneğin bir taş veya bir buz küpü.</li>
         <li><strong>Sıvı</strong>: sabit hacim, ama şekli kabın şekline göre değişir, örneğin bir bardaktaki su.</li>
         <li><strong>Gaz</strong>: ne sabit şekil ne de sabit hacim vardır; kabın tamamını doldurur, örneğin bir balondaki hava.</li>
       </ul>`,
        `<p>Katıların parçacıkları birbirine yakındır, bu yüzden sıkıştırılmaları zordur. Gazların parçacıkları birbirinden uzaktır, bu yüzden gazlar sıkıştırılabilir.</p>`,
        `<p><strong>Deney:</strong> Suyu önce uzun, sonra geniş bir bardağa dök. Su her zaman kabın şeklini alır, ama hacmi değişmez.</p>`,
        { fig: 'r1r5-castice-skupenstva', caption: 'Katılarda parçacıklar sıkı biçimde dizilidir; sıvılarda parçacıklar birbirine yakındır ama düzenli değildir; gazlarda parçacıklar birbirinden uzaktır.' }
      ],
      examples: [
        { task: 'Bardaktaki suyun hangi özellikleri vardır?',
          steps: ['Su bir sıvıdır, kabın şekline göre şekil değiştirir.', 'Hacmi değişmez.', '<strong>Sonuç: sabit hacim, değişen şekil.</strong>'] },
        { task: 'Hava neden bir futbol topunun içine bastırılabilir?',
          steps: ['Gazın parçacıkları birbirinden uzaktır.', '<strong>Sonuç: bastırıldığında parçacıklar birbirine yaklaşır.</strong>'] }
      ]
    },
    'r5-telesa': {
      title: 'Cisimler ve malzemeleri',
      summary: 'Cisimlerin neyden yapıldığını açıklar ve belirli bir amaca uygun malzemeyi seçersin.',
      theory: [
        `<p>Cisim, maddelerden yapılmış bir nesnedir. Birçok cisim birkaç maddeden yapılmıştır. Makasın metal bıçakları ve plastik kulpları vardır.</p>`,
        `<p>Nesne yaparken, nesneden ne istediğimize göre bir madde seçeriz. Nesnenin saydam olmasını istersek cam seçeriz.
       Nesnenin kolay ısınmamasını istersek ısıyı zayıf ileten bir malzeme seçeriz.</p>`,
        `<ul>
         <li>Metaller ısıyı ve elektrik akımını iyi iletir, bu yüzden tencereler ve kablolar için uygundur.</li>
         <li>Plastik ve ahşap ısıyı zayıf iletir, bu yüzden tencere kulpları için uygundur.</li>
       </ul>`,
        `<p>Bir cismi değerlendirirken her zaman kendine sor: Hangi maddeden yapılmış ve neden bu özel madde seçilmiş?</p>`
      ],
      examples: [
        { task: 'Tencere kulpları neden plastik veya ahşaptan yapılır?',
          steps: ['Plastik ve ahşap ısıyı zayıf iletir.', '<strong>Sonuç: kulp, metal kadar hızlı ısınmaz, bu yüzden tutması kolaydır.</strong>'] },
        { task: 'Cam bir cisim midir yoksa bir madde midir?',
          steps: ['Cam belirli bir nesnedir.', '<strong>Sonuç: bir cisimdir.</strong>'] }
      ]
    },
    'r5-hustota': {
      title: 'Kütle, hacim ve yoğunluk: temel fikirler',
      summary: 'Kütle ile hacmi birbirinden ayırır ve bir maddenin yoğunluğunu hesaplarsın.',
      theory: [
        `<p><strong>Kütle</strong> $m$, bir cismin ne kadar madde içerdiğini gösterir. Birimi gram $\\text{g}$ veya kilogram $\\text{kg}$’dır. Kütleyi terazi ile ölçeriz.</p>`,
        `<p><strong>Hacim</strong> $V$, bir cismin kapladığı uzaydır. Birimleri örneğin $\\text{cm}^3$ veya mililitredir; burada $1\\,\\text{ml}=1\\,\\text{cm}^3$.
       Bir sıvının hacmini mezürle ölçeriz.</p>`,
        `<p><strong>Yoğunluk</strong> $\\rho$, bir maddenin $1\\,\\text{cm}^3$ hacminin ne kadar kütleye sahip olduğunu gösterir. Bunu bir bölüm olarak hesaplarız: $\\rho = \\frac{m}{V}$.
       Yoğunluk maddenin bir özelliğidir, cismin değil. Suyun yoğunluğu yaklaşık $1\\,\\text{g/cm}^3$’tür.</p>`,
        `<ul>
         <li>Suyunkinden büyük yoğunluğa sahip bir cisim batar, örneğin taş.</li>
         <li>Suyunkinden küçük yoğunluğa sahip bir cisim yüzer, örneğin ahşap.</li>
       </ul>`,
        { fig: 'r1r5-hustota-voda', caption: 'Suyunkinden büyük yoğunluğa sahip cisim batar (taş), küçük yoğunluğa sahip cisim yüzer (ahşap).' }
      ],
      examples: [
        { task: 'Kütlesi $48\\,\\text{g}$ ve hacmi $16\\,\\text{cm}^3$ olan bir cismin yoğunluğu nedir?',
          steps: ['$\\rho=\\frac{m}{V}=\\frac{48}{16}$', '<strong>Sonuç: $3\\,\\text{g/cm}^3$</strong>'] },
        { task: 'Yoğunluğu $2\\,\\text{g/cm}^3$ olan bir maddeden yapılmış bir cismin hacmi $10\\,\\text{cm}^3$. Kütlesi nedir?',
          steps: ['$m=\\rho\\cdot V=2\\cdot 10$', '<strong>Sonuç: $20\\,\\text{g}$</strong>'] }
      ]
    },
    'r5-merania': {
      title: 'Uzunluk, hacim ve kütle ölçümü',
      summary: 'Ölçüm sonucunu doğru okur ve ölçülen değerler arasındaki farkı hesaplarsın.',
      theory: [
        `<p>Uzunluğu cetvel veya şerit metre ile ölçeriz. Ölçeğin sıfırını cismin başlangıcına tam yerleştirir ve bitişini okuruz.
       Sık yapılan bir hata, ölçmeye sıfır yerine 1 rakamından başlamaktır.</p>`,
        `<p>Bir sıvının hacmini mezür ile ölçeriz. Gözümüzü sıvı seviyesinin hizasına getirir ve yüzeyin alt kenarını, yani <strong>menisküsü</strong> okuruz.
       Yukarıdan veya aşağıdan bakarsak sonuç bozulur.</p>`,
        `<p>Kütleyi terazi ile ölçeriz. Ölçmeden önce teraziyi sıfırlarız, böylece kabın kütlesi sayılmaz.</p>`,
        `<p>Suda batan bir cismin hacmi su yardımıyla bulunabilir: cismi daldırmadan önce ve sonra su seviyesini okuruz. Seviyelerin farkı cismin hacmidir.</p>`,
        { fig: 'r1r5-hladina', caption: 'Suya batırılmış bir cismin hacmi, daldırmadan sonraki ve önceki su seviyesi arasındaki farktır.' }
      ],
      examples: [
        { task: 'Bir cetvelde bir çubuk 2 cm ile 9 cm arasında yatıyor. Uzunluğu nedir?',
          steps: ['Uzunluk, bitiş ve başlangıç sayıları arasındaki farktır: $9 - 2$.', '<strong>Sonuç: 7 cm</strong>'] },
        { task: 'Mezürde $50\\,\\text{ml}$ su vardır. Bir küp daldırıldıktan sonra seviye $72\\,\\text{ml}$ değerine yükselir. Küpün hacmi nedir?',
          steps: ['Küpün hacmi seviyedeki yükselmedir: $72 - 50$.', '<strong>Sonuç: $22\\,\\text{ml}$</strong>'] }
      ]
    },
    'r5-jednotky': {
      title: 'Fiziksel büyüklüklerin birimleri',
      summary: 'Uzunluk, kütle ve hacim birimlerini birbirine çevirirsin.',
      theory: [
        `<p>Fiziksel büyüklük, ölçtüğümüz şeydir, örneğin uzunluk, kütle, zaman veya sıcaklık. Her büyüklüğün karşılaştırdığımız bir <strong>birimi</strong> vardır.
       Temel SI birimleri örneğin metre $\\text{m}$, kilogram $\\text{kg}$ ve saniye $\\text{s}$’dir.</p>`,
        `<ul>
         <li>Uzunluk: $1\\,\\text{km}=1000\\,\\text{m}$, $1\\,\\text{m}=100\\,\\text{cm}$, $1\\,\\text{cm}=10\\,\\text{mm}$.</li>
         <li>Kütle: $1\\,\\text{kg}=1000\\,\\text{g}$, $1\\,\\text{t}=1000\\,\\text{kg}$.</li>
         <li>Hacim: $1\\,\\text{l}=1000\\,\\text{ml}$, $1\\,\\text{dm}^3=1\\,\\text{l}$.</li>
       </ul>`,
        `<p>Daha <strong>küçük</strong> bir birime çevirirken sayı büyür, bu yüzden çarparız: $2\\,\\text{km}=2000\\,\\text{m}$.
       Daha <strong>büyük</strong> bir birime çevirirken sayı küçülür, bu yüzden böleriz: $300\\,\\text{cm}=3\\,\\text{m}$.</p>`,
        `<p>Sık yapılan bir hataya dikkat et: $1\\,\\text{m}$, $10\\,\\text{cm}$ değil, $100\\,\\text{cm}$’dir.</p>`
      ],
      examples: [
        { task: '$3{,}5\\,\\text{m}$ değerini santimetreye çevir.',
          steps: ['Bir metre 100 cm eder ve daha küçük bir birime çevirmek sayıyı çarpmak demektir.', '$3{,}5\\cdot 100=350$', '<strong>Sonuç: 350 cm</strong>'] },
        { task: '$4\\,500\\,\\text{g}$ değerini kilograma çevir.',
          steps: ['Bir kilogram 1000 g eder ve daha büyük bir birime çevirmek sayıyı bölmek demektir.', '$4500 : 1000=4{,}5$', '<strong>Sonuç: $4{,}5\\,\\text{kg}$</strong>'] }
      ]
    },
    'r5-teplota': {
      title: 'Sıcaklık ve sıcaklık ölçümü',
      summary: 'Sıcaklığı santigrat derece olarak okur ve değişimlerini hesaplarsın.',
      theory: [
        `<p>Sıcaklığı bir <strong>termometre</strong> ile ölçeriz. Santigrat ölçeğinde iki sabit nokta vardır: erimekte olan buzun sıcaklığı $0\\,{}^\\circ\\text{C}$’dir,
       normal basınçta su ise $100\\,{}^\\circ\\text{C}$’de kaynar.</p>`,
        `<ul>
         <li>Termometre, ısındığında genleşen bir sıvı, örneğin alkol içerir. Sıcaklığı sıvı sütununun uzunluğundan okuruz.</li>
         <li>Doğru sıcaklığı gösterebilmesi için termometreyi en az birkaç dakika yerinde bırakırız.</li>
         <li>Termometre kabın dibine değmemelidir, çünkü sıvının değil dibin sıcaklığını gösterir.</li>
       </ul>`,
        `<p>Sıcaklık değişir. Sıcaklık yükselirse değişimi ekleriz; düşerse çıkarırız. Negatif sıcaklıklar sıfırın altındadır,
       örneğin $-5\\,{}^\\circ\\text{C}$, erimekte olan buzdan 5 derece daha soğuktur.</p>`,
        { fig: 'r1r5-teplomer', caption: 'Santigrat ölçeğinin iki sabit noktası vardır: erimekte olan buz 0 °C ve kaynayan su 100 °C. Negatif sıcaklıklar sıfırın altındadır.' }
      ],
      examples: [
        { task: 'Sabah sıcaklık $-4\\,{}^\\circ\\text{C}$ idi ve öğlene kadar $9\\,{}^\\circ\\text{C}$ arttı. Öğlen sıcaklık kaç derecedir?',
          steps: ['$-4+9=5$', '<strong>Sonuç: $5\\,{}^\\circ\\text{C}$</strong>'] },
        { task: 'Suyun sıcaklığı $20\\,{}^\\circ\\text{C}$ idi ve $100\\,{}^\\circ\\text{C}$’ye kadar ısıtıldı. Kaç derece ısındı?',
          steps: ['$100-20=80$', '<strong>Sonuç: $80\\,{}^\\circ\\text{C}$ kadar</strong>'] }
      ]
    },
    'r5-pozorovanie': {
      title: 'Gözlem, ölçüm ve basit deneyler',
      summary: 'Basit bir deney planlar, sonuçları kaydeder ve bir sonuç çıkarırsın.',
      theory: [
        `<p>Bir olguyu incelerken adım adım ilerleriz: gözlemleriz, bir soru sorarız, bir <strong>hipotez</strong> ileri sürer, deneyi yaparız,
       sonuçları kaydeder ve bir sonuç formüle ederiz. Hipotez, sınanabilir bir varsayımdır, bitmiş bir sonuç değildir.</p>`,
        `<ol>
         <li>Neyi öğrenmek istediğine karar ver.</li>
         <li>Deneyde aynı anda yalnızca bir şeyi değiştir.</li>
         <li>Sonuçları hemen bir tabloya yaz.</li>
         <li>Sonuçları karşılaştırabilmek için deneyi tekrarla.</li>
       </ol>`,
        `<p>Değiştirdiğimiz niceliğe <strong>değişken</strong> denir. Aynı tuttuğumuz şeyler kontrol edilir. Birden fazla şeyi aynı anda değiştirirsek sonucun neyden kaynaklandığını anlayamayız.</p>`,
        `<p>Ölçülen değerleri her zaman bir birimle yazarız, örneğin yalnızca $25$ değil, $25\\,\\text{cm}$.</p>`
      ],
      examples: [
        { task: 'Tuzun sıcak suda soğuk suya göre daha hızlı çözünüp çözünmediğini öğrenmek istiyorsun. Değişken nedir?',
          steps: ['Suyun sıcaklığını değiştiririz.', 'Tuz ve su miktarını aynı tutarız.', '<strong>Sonuç: değişken, suyun sıcaklığıdır.</strong>'] },
        { task: 'Bir ölçümün doğruluğu nasıl artırılabilir?',
          steps: ['Deneyi birkaç kez tekrarlarız.', 'Sonuçların ortalamasını alırız.', '<strong>Sonuç: deneyi tekrarla ve sonuçların ortalamasını al.</strong>'] }
      ]
    },
    'r6-hustota': {
      title: 'Maddelerin yoğunluğu ve nasıl hesaplanacağı',
      summary: 'Yoğunluğun neyi gösterdiğini ve kütle ile hacimden nasıl hesaplandığını öğrenirsin.',
      theory: [
        `<p>Aynı büyüklükteki iki cismin kütleleri çok farklı olabilir. Aynı hacimdeki bir kurşun top, ahşap bir toptan çok daha ağırdır.
       Fark şekil veya boyuttan değil, cismin yapıldığı <strong>maddeden</strong> kaynaklanır. Maddenin bu özelliği <strong>yoğunlukla</strong> tanımlanır.</p>`,
        `<p><strong>Yoğunluk</strong>, belirli bir maddenin birim hacminin hangi kütleye sahip olduğunu gösterir. $\\rho$ (ro) ile gösterilir ve
       $\\rho = \\frac{m}{V}$ formülüyle hesaplanır; burada $m$ kütle, $V$ hacimdir. Yani kütleyi hacme böleriz.</p>`,
        `<ul>
         <li>Birimler: $\\text{g/cm}^3$ (uygulamada) ve $\\text{kg/m}^3$ (SI’da).</li>
         <li>Dönüşüm: $1\\,\\text{g/cm}^3 = 1000\\,\\text{kg/m}^3$, çünkü $1\\,\\text{g}=0{,}001\\,\\text{kg}$ ve $1\\,\\text{cm}^3=0{,}000001\\,\\text{m}^3$.</li>
       </ul>`,
        `<p>Yoğunluk maddenin bir özelliğidir, cismin değil. Aynı maddenin tüm parçaları, büyük ya da küçük olsun, aynı yoğunluğa sahiptir.
       Benzer görünen maddeleri ayırt etmemize yardım eder ve daha sonra bazı cisimlerin neden yüzdüğünü, bazılarının neden battığını açıklar.</p>`,
        `<p>Yaklaşık yoğunluklar: su $1\\,\\text{g/cm}^3$, yağ yaklaşık $0{,}9\\,\\text{g/cm}^3$, alüminyum $2{,}7\\,\\text{g/cm}^3$, demir $7{,}8\\,\\text{g/cm}^3$.
       Ahşap sudan hafiftir; örneğin çam yaklaşık $0{,}5\\,\\text{g/cm}^3$’tür.</p>`,
        { fig: 'r6r9-hustota', caption: 'Yoğunluk, bir maddenin birim hacminin hangi kütleye sahip olduğunu gösterir. Aynı hacimde demir sudan çok daha ağırdır.' }
      ],
      examples: [
        { task: 'Kütlesi $135\\,\\text{g}$ ve hacmi $50\\,\\text{cm}^3$ olan bir alüminyum blok var. Yoğunluğunu hesapla.',
          steps: ['$\\rho = \\frac{m}{V}$ formülünü kullanırız.', '$\\rho = \\frac{135}{50} = 2{,}7\\,\\text{g/cm}^3$', '<strong>Sonuç: 2,7 g/cm³</strong>'] },
        { task: '$200\\,\\text{cm}^3$ suyun kütlesi nedir? Suyun yoğunluğu $1\\,\\text{g/cm}^3$.',
          steps: ['$\\rho = \\frac{m}{V}$ formülünden $m = \\rho\\cdot V$ elde ederiz.', '$m = 1\\,\\text{g/cm}^3\\cdot 200\\,\\text{cm}^3 = 200\\,\\text{g}$', '<strong>Sonuç: 200 g</strong>'] }
      ]
    },
    'r6-vlastnosti': {
      title: 'Sıvıların ve gazların özellikleri',
      summary: 'Sıvılar ve gazlar şekil, hacim ve sıkıştırılabilirlik bakımından nasıl farklılaşır.',
      theory: [
        `<p>Maddeler üç hâlde bulunur: katı, sıvı ve gaz. Katı cisimlerin sabit şekli ve sabit hacmi vardır.
       <strong>Sıvıların</strong> sabit hacmi vardır, ama şekillerini kaba uydururlar. <strong>Gazların</strong> ne sabit şekli ne de sabit hacmi vardır: genişlerler ve kabın tamamını doldururlar.</p>`,
        `<p>Neden böyledir? Sıvıdaki parçacıklar birbirine yakındır ve bir arada tutulur, ama birbirlerinin yanından kayabilirler; bu yüzden sıvı akar.
       Gazın parçacıkları birbirinden uzaktır ve serbestçe hareket eder, bu yüzden kullanılabilir tüm alana yayılırlar.</p>`,
        `<p><strong>Sıkıştırılabilirlik:</strong> sıvılar pratikte sıkıştırılamaz, çünkü parçacıkları zaten birbirine yakındır. Gazlar sıkıştırılabilir,
       çünkü parçacıkları arasında çok boş alan vardır. Bisiklet pompasındaki hava bu yüzden sıkıştırılır, kapalı bir kaptaki su ise sıkıştırılmaz.</p>`,
        `<ul>
         <li><strong>Şekil:</strong> sıvı kabın şeklini alır, gaz kabın tamamını doldurur.</li>
         <li><strong>Hacim:</strong> sıvının hacmi sabittir, gazın hacmi kabının hacmine eşittir.</li>
         <li><strong>Sıkıştırılabilirlik:</strong> sıvı neredeyse sıkıştırılamaz, gaz sıkıştırılabilir.</li>
       </ul>`,
        `<p>Sıvılar ve gazlar birlikte <strong>akışkan</strong> olarak adlandırılır. Akışkanlar dökülebilir ve akabilir, bu yüzden onlarda basıncı ve kaldırma kuvvetini gözlemleriz.</p>`,
        { fig: 'r6r9-castice', caption: 'Katının parçacıkları sabit yerlerde kalır, sıvının parçacıkları birbirine yakındır ve birbirinin yanından kayar, gazın parçacıkları ise serbestçe hareket eder.' }
      ],
      examples: [
        { task: 'Şırıngadaki hava neden sıkıştırılabilir, ama su sıkıştırılamaz? Açıkla.',
          steps: ['Havanın parçacıkları birbirinden uzaktır ve aralarında boş alan vardır.', 'Suyun parçacıkları birbirine yakındır ve onları daha fazla yaklaştıracak yer yoktur.', '<strong>Sonuç: hava sıkıştırılabilir, su neredeyse sıkıştırılamaz.</strong>'] },
        { task: 'Bir litre su geniş bir kaptan uzun ve dar bir bardağa dökülüyor. Suyun şimdi hacmi nedir?',
          steps: ['Su, kabın şeklini alır.', 'Sıvının hacmi dökülünce değişmez.', '<strong>Sonuç: hâlâ 1 litre.</strong>'] }
      ]
    },
    'r6-tlak': {
      title: 'Sıvılarda ve gazlarda basınç',
      summary: 'Basıncın birim alana düşen kuvvet olarak tanımı ve derinlikle artan sıvı basıncı.',
      theory: [
        `<p><strong>Basınç</strong>, bir yüzeye dik etkiyen kuvvetin birim alana düşen değeridir. Formül: $p=\\frac{F}{S}$; burada $F$ newton cinsinden kuvvet,
       $S$ ise yüzeyin $\\text{m}^2$ cinsinden alanıdır. Basıncın birimi paskaldır: $1\\,\\text{Pa}=1\\,\\text{N/m}^2$.</p>`,
        `<p>Aynı kuvvet daha küçük bir alanda daha büyük basınç oluşturur. Bu yüzden keskin bir çivi ahşaba kolayca girer, künt bir çivi girmez: küçük ucunda basınç büyüktür.</p>`,
        `<p><strong>Sıvının basıncı</strong> derinlikle artar. Ne kadar derine inersek, üstümüzde o kadar fazla sıvı olur ve alttaki katmanlara baskı yapar.
       Formül: $p=\\rho\\cdot g\\cdot h$; burada $\\rho$ sıvının yoğunluğu, $h$ yüzeyin altındaki derinlik ve $g\\approx 10\\,\\text{N/kg}$’dır (ilkokulda yuvarlatılmış değer).</p>`,
        `<p>Sıvı kabın duvarlarına, dibine ve yukarıya doğru baskı yapar. Sıvının basıncı aynı derinlikte her yönde eşit etki eder.</p>`,
        `<p>Kapalı bir kaptaki gaz da duvarlara her yönde baskı yapar. Gazı sıkıştırdığımızda basıncı artar.</p>`,
        { fig: 'obr-tlak', caption: 'Sıvının basıncı derinlikle artar: ne kadar derine inersek, duvara etkiyen kuvvet o kadar büyür.' }
      ],
      examples: [
        { task: '$0{,}5\\,\\text{m}^2$ alana dik etkiyen $600\\,\\text{N}$ kuvvet hangi basıncı oluşturur?',
          steps: ['$p=\\frac{F}{S}=\\frac{600}{0{,}5}$', '$p=1200\\,\\text{Pa}$', '<strong>Sonuç: 1200 Pa</strong>'] },
        { task: '$3\\,\\text{m}$ derinlikteki suyun basıncı nedir? Suyun yoğunluğu $1000\\,\\text{kg/m}^3$, $g=10\\,\\text{N/kg}$.',
          steps: ['$p=\\rho\\cdot g\\cdot h$', '$p=1000\\cdot 10\\cdot 3=30\\,000\\,\\text{Pa}$', '<strong>Sonuç: 30 000 Pa = 30 kPa</strong>'] }
      ]
    },
    'r6-atmosfera': {
      title: 'Atmosfer basıncı',
      summary: 'Havanın neden bize baskı yaptığını ve basıncın yükseklikle nasıl değiştiğini öğrenirsin.',
      theory: [
        `<p>Dünyanın etrafındaki havanın bir kütlesi vardır, bu yüzden bize baskı yapar. Bu basınca <strong>atmosfer basıncı</strong> denir. Deniz seviyesinde yaklaşık $101\\,\\text{kPa}$’dır;
       bu, bir metrekarenin üstündeki havanın ağırlığına, yaklaşık 10 tona karşılık gelir.</p>`,
        `<p>Meteorologlar hektopaskal kullanır: $1\\,\\text{hPa}=100\\,\\text{Pa}$, dolayısıyla $1\\,\\text{kPa}=10\\,\\text{hPa}$. Normal basınç yaklaşık $1013\\,\\text{hPa}$’dır.
       Basınç bir <strong>barometre</strong> ile ölçülür.</p>`,
        `<p>Neden pipetle içebiliriz? Emdiğimizde ağzımızdaki basıncı düşürürüz. Atmosfer basıncı içeceğin yüzeyine etki eder ve onu pipetin içine doğru iter.
       Yani içeceği biz emmeyiz, havanın basıncı iter.</p>`,
        `<p>Deniz seviyesinden yükseklik arttıkça basınç düşer, çünkü üstümüzde daha az hava vardır. Bu yüzden dağlarda hava basıncı düşer ve su daha düşük sıcaklıkta kaynar.</p>`,
        { fig: 'r6r9-atmosfera', caption: 'Ne kadar yükseğe çıkarsak, üstümüzde o kadar az hava olur ve atmosfer basıncı düşer.' }
      ],
      examples: [
        { task: 'Barometre $1013\\,\\text{hPa}$ basınç gösteriyor. Bu kaç kilopaskal eder?',
          steps: ['$1\\,\\text{kPa}=10\\,\\text{hPa}$ olduğundan sonucu on ile böleriz.', '$1013 : 10 = 101{,}3$', '<strong>Sonuç: 101,3 kPa</strong>'] },
        { task: 'Yüksek bir dağa tırmandığımızda atmosfer basıncı nasıl değişir?',
          steps: ['Üstümüzde bize baskı yapan daha az hava vardır.', 'Dolayısıyla hava basıncı düşer.', '<strong>Sonuç: basınç düşer</strong>'] }
      ]
    },
    'r6-vztlak': {
      title: 'Kaldırma kuvveti ve cisimlerin yüzmesi',
      summary: 'Sıvının cisimleri neden daha hafif hissettirdiğini ve bir cismin ne zaman yüzdüğünü öğrenirsin.',
      theory: [
        `<p>Suya batırılmış bir top yüzeye çıkar. Sıvı, batırılmış cisme yukarı yönelmiş bir kuvvet uygular. Bu kuvvete <strong>kaldırma kuvveti</strong> denir.
       Sıvının basıncı derinlikle arttığı için oluşur: cismin alt yüzeyi üst yüzeyinden daha güçlü bastırılır.</p>`,
        `<p><strong>Arşimet ilkesi:</strong> kaldırma kuvveti, cismin yer değiştirdiği sıvının ağırlığına eşittir. Formül: $F_{vz}=\\rho_k\\cdot g\\cdot V_p$,
       burada $\\rho_k$ sıvının yoğunluğu, $V_p$ ise cismin batık kısmının hacmidir.</p>`,
        `<ul>
         <li>Cismin ağırlığı kaldırma kuvvetinden büyükse cisim batar.</li>
         <li>Ağırlık ve kaldırma kuvveti eşitse cisim batık olarak dengede kalır.</li>
         <li>Kaldırma kuvveti ağırlıktan büyükse cisim yükselir ve yalnızca bir kısmı batık olarak yüzeyde yüzer.</li>
       </ul>`,
        `<p>Çelik bir gemi, büyük ve içi boş olduğu için yüzer. Ortalama yoğunluğu suyun yoğunluğundan küçüktür, bu yüzden ağırlığını taşıyacak kadar su yer değiştirir.</p>`,
        { fig: 'obr-vztlak', caption: 'Kaldırma kuvveti Fvz yukarı, ağırlık Fg aşağı yönelmiştir. Batırılmış bir cisim, yer değiştiren sıvının ağırlığı kadar hafif görünür.' }
      ],
      examples: [
        { task: 'Hacmi $1\\,\\text{dm}^3$ olan bir küp suya tamamen batırılıyor. Suyun yoğunluğu $1\\,\\text{kg/dm}^3$. Kaldırma kuvveti nedir?',
          steps: ['Yer değiştiren suyun kütlesi $\\rho\\cdot V = 1\\,\\text{kg}$.', 'Ağırlığı $1\\,\\text{kg}\\cdot 10\\,\\text{N/kg}=10\\,\\text{N}$.', '<strong>Sonuç: kaldırma kuvveti 10 N.</strong>'] },
        { task: 'Suda yüzen $3\\,\\text{kg}$ kütleli bir cismin kaldırma kuvvetinin büyüklüğü nedir?',
          steps: ['Cisim yüzüyor, dolayısıyla kaldırma kuvveti ağırlığına eşittir.', '$F_{vz}=F_G=m\\cdot g=3\\cdot 10=30\\,\\text{N}$', '<strong>Sonuç: 30 N</strong>'] }
      ]
    },
    'r6-teplo': {
      title: 'Sıcaklık, ısı ve ısı alışverişi',
      summary: 'Sıcaklık ile ısı arasındaki fark ve ısının hangi yönde aktığı.',
      theory: [
        `<p><strong>Sıcaklık</strong>, bir cismin ne kadar sıcak olduğunu gösterir. Santigrat derece (°C) ile ölçülür. Bir maddenin parçacıkları ne kadar hızlı hareket ederse, madde o kadar sıcaktır.
       Termometre, çevresinin sıcaklığına ulaşmalıdır; böylece çevrenin sıcaklığını gösterir.</p>`,
        `<p><strong>Isı</strong>, sıcaklık farkı nedeniyle cisimler arasında aktarılan enerjidir. Isının birimi joule’dür (J).
       Isı her zaman daha sıcak cisimden daha soğuk cisme akar, asla tersi yönde değil. Buzdolabı bir istisnadır, çünkü soğutma iş gerektirir.</p>`,
        `<p><strong>Isı alışverişi</strong>, cisimlerin sıcaklıkları eşitlenene kadar sürer. Sonra <em>ısıl denge</em> oluşur.
       Isı üç yolla aktarılır: <em>iletim</em> (çaydaki metal kaşık), <em>taşınım</em> (sıvılar ve gazlar) ve <em>ışınım</em> (Güneş’ten gelen ısı).</p>`,
        `<p>Farklı sıcaklıklardaki eşit miktarda suyu karıştırır ve ısı kayıplarını ihmal edersek, sonuç sıcaklık iki sıcaklığın aritmetik ortalamasıdır.</p>`,
        { fig: 'r6r9-prenos-tepla', caption: 'Isı, daha sıcak cisimden daha soğuk cisme akar. İletim, taşınım veya ışınımla aktarılır.' }
      ],
      examples: [
        { task: 'Eşit miktarlarda 80 °C ve 20 °C suyu karıştırıyoruz. Sonuç sıcaklık ne olur?',
          steps: ['Eşit miktarlarda sonuç sıcaklık iki sıcaklığın ortalamasıdır.', '$\\frac{80+20}{2}=50$', '<strong>Sonuç: 50 °C</strong>'] },
        { task: '70 °C sıcaklığındaki bir fincan çay ile 22 °C sıcaklığındaki hava arasında ısı hangi yönde akar?',
          steps: ['Isı her zaman daha sıcak cisimden daha soğuğa akar.', 'Çayın sıcaklığı daha yüksektir, bu yüzden ısı çaydan havaya geçer.', '<strong>Sonuç: çaydan çevreye</strong>'] }
      ]
    },
    'r6-skupenstva': {
      title: 'Maddelerin hâl değişimleri',
      summary: 'Erime, donma, buharlaşma, yoğunlaşma ve süblimleşme ile her birinde parçacıklara ne olduğu.',
      theory: [
        `<p>Maddeler katı, sıvı ve gaz hâllerinde bulunur. Hâl değişimi sırasında madde başka bir maddeye dönüşmez;
       yalnızca parçacıklarının dizilimi ve hareketi değişir.</p>`,
        `<ul>
         <li><strong>Erime</strong>: katıdan sıvıya (buz suya dönüşür).</li>
         <li><strong>Donma</strong>: sıvıdan katıya (su donar).</li>
         <li><strong>Buharlaşma</strong>: sıvıdan gaza (ıslak çamaşır kurur).</li>
         <li><strong>Yoğunlaşma</strong>: gazdan sıvıya (çimenlerdeki çiy).</li>
         <li><strong>Süblimleşme</strong>: katıdan doğrudan gaza (kuru buz, naftalin).</li>
         <li><strong>Desüblimleşme</strong>: gazdan doğrudan katıya (dondurucudaki buz kristalleri).</li>
       </ul>`,
        `<p><strong>Neden?</strong> Erime sırasında madde, parçacıklarının katı dizilimden kurtulabilmesi için enerji almalıdır. Donma sırasında ise enerji açığa çıkar.</p>`,
        `<ol>
         <li>$-5\\,{}^\\circ\\text{C}$ sıcaklığındaki buz ısıtıldığında önce $0\\,{}^\\circ\\text{C}$’ye kadar ısınır.</li>
         <li>$0\\,{}^\\circ\\text{C}$’de erir ve tamamı erininceye kadar sıcaklığı değişmez.</li>
         <li>Ancak ondan sonra su daha da ısınır.</li>
       </ol>`,
        { fig: 'obr-skupenstva', caption: 'Hâl değişimleri: erime, donma, buharlaşma ve yoğunlaşma.' }
      ],
      examples: [
        { task: 'Dondurucudaki su buza dönüşür. Bu işleme ne ad verilir?',
          steps: ['Su, sıvı hâlden katı hâle geçer.', 'Sıvıdan katıya geçişe donma denir.', '<strong>Sonuç: donma</strong>'] },
        { task: 'Soğuk bir yüzeyde su buharından, sıvı hâlden geçmeden doğrudan don oluşur. Bu işleme ne ad verilir?',
          steps: ['Buhar doğrudan katı hâle geçer.', 'Gazdan katıya geçişe desüblimleşme denir.', '<strong>Sonuç: desüblimleşme</strong>'] }
      ]
    },
    'r6-var': {
      title: 'Buharlaşma, yoğunlaşma ve kaynama',
      summary: 'Buharlaşma ile kaynamanın farkı ve sıvıların neden soğuduğu.',
      theory: [
        `<p><strong>Buharlaşma</strong>, her sıcaklıkta bir sıvının yüzeyinde gerçekleşir. En hızlı parçacıklar yüzeyden çevreye kaçar.
       Buharlaşma, daha yüksek sıcaklıkta, daha geniş yüzeyde ve buharı uzaklaştıran rüzgârda daha hızlıdır.</p>`,
        `<p><strong>Buharlaşma soğutur.</strong> En hızlı parçacıklar sıvıdan ayrılır, bu yüzden kalanın ortalama enerjisi düşer.
       Bu yüzden yüzdükten sonra rüzgâr bizi serinletir: su cildimizden buharlaşır ve ısıyı alır.</p>`,
        `<p><strong>Kaynama</strong>, sıvının yalnızca yüzeyinde değil, tüm hacminde gaza dönüşmesidir. Belirli bir <em>kaynama noktasında</em> gerçekleşir; bu nokta basınca bağlıdır.
       Normal basınçta su 100 °C’de kaynar. Yüksek bir dağda basınç düşüktür, bu yüzden su daha düşük sıcaklıkta kaynar.</p>`,
        `<p><strong>Yoğunlaşma</strong> ters değişimdir: buhar sıvıya döner. Yoğunlaşma sırasında ısı çevreye verilir,
       bu yüzden buharın yaptığı yanık, kaynayan suyun yaptığı yanıktan daha kötüdür. Çiy, sis ve bulutlar su buharının yoğunlaşmasıyla oluşur.</p>`,
        { fig: 'r6r9-var', caption: 'Buharlaşma yalnızca yüzeyde olur; kaynama ise sıvının tüm hacminde, buhar kabarcıklarının oluştuğu yerlerde gerçekleşir.' }
      ],
      examples: [
        { task: 'Islak çamaşır güneşte ve rüzgârda neden daha hızlı kurur?',
          steps: ['Yüksek sıcaklık ve rüzgâr buharlaşmayı hızlandırır.', 'Çamaşırdaki su parçacıkları havaya daha kolay kaçar.', '<strong>Sonuç: ısı ve rüzgâr buharlaşmayı hızlandırır.</strong>'] },
        { task: `Normal basınçta su 100 °C’de kaynar. Basıncın düşük olduğu yüksek bir dağın tepesinde hangi sıcaklıkta kaynar?`,
          steps: ['Basınç ne kadar düşükse kaynama noktası o kadar düşüktür.', 'Yüksek bir dağda su 100 °C’nin altındaki bir sıcaklıkta kaynar.', '<strong>Sonuç: 100 °C’den düşük bir sıcaklıkta</strong>'] }
      ]
    }
  }
});
