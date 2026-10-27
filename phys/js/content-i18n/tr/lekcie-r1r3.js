/* Turkish: grades 1–3 lessons (js/rocniky/r1.js, r2.js, r3.js). Structure and keys: js/content-i18n.js. */
CONTENT_I18N.add('tr', {
  lessons: {
    'r1-pozorovanie': {
      title: 'Nesnelerin ve olayların gözlemlenmesi',
      summary: 'Gözlemleyerek nesnelerin özelliklerini öğrenir, bir nesneyi maddeden ayırt edersin.',
      theory: [
        `<p>Gözlemlemek, bir şeye bilerek bakmak demektir. Gözlemlerken <strong>duyularımızı</strong> kullanırız: görme, işitme, dokunma, koku ve tat.
       Bilinmeyen maddeleri asla bir yetişkinin izni olmadan tatmayız ve koklamayız.</p>`,
        `<p><strong>Nesne</strong>, görebildiğimiz ve adlandırabildiğimiz şeydir, örneğin top, sandalye veya kitap.
       <strong>Malzeme</strong> ise bir nesnenin yapıldığı şeydir, örneğin ahşap, cam veya plastik.</p>`,
        `<p>Bir nesneyi tanımlarken onun <strong>özelliklerinden</strong> söz ederiz: renk, şekil, boyut, ağırlık, sertlik ya da parlak olup olmadığı.
       İyi bir tanım kesindir ve kişinin nesneyi bu tanımdan tanımasını sağlar.</p>`,
        `<ul>
         <li>Olay, etrafımızda gerçekleşen bir şeydir, örneğin yağmur, eriyen kar veya dökülen yapraklar.</li>
         <li>Gözlemlerken sorarız: Ne görüyorum, ne duyuyorum ve ne değişiyor?</li>
       </ul>`
      ],
      examples: [
        { task: 'Bir topun özelliklerini tanımla.',
          steps: ['Top yuvarlaktır ve zıplayabilir.', 'Parlak bir rengi vardır ve zemine çarpıp zıplar.', '<strong>Sonuç: yuvarlak, zıplayabilen bir nesnedir.</strong>'] },
        { task: 'Ahşap bir nesne mi yoksa bir malzeme mi?',
          steps: ['Ahşap belirli bir şekil değil, bir malzemedir.', 'Ahşaptan sandalye ya da masa yapabiliriz.', '<strong>Sonuç: ahşap bir malzemedir.</strong>'] }
      ]
    },
    'r1-vlastnosti-materialov': {
      title: 'Malzemelerin özellikleri: sertlik, esneklik, şekil',
      summary: 'Malzemeleri sertliklerine, esnekliklerine ve şeklini koruyup korumadıklarına göre karşılaştırırsın.',
      theory: [
        `<p>Malzemeler birbirinden farklıdır. İki önemli özellik <strong>sertlik</strong> ve <strong>esnekliktir</strong>.</p>`,
        `<ul>
         <li><strong>Sert</strong> bir malzemeyi çizmek veya ezmek zordur, örneğin taş veya metal.</li>
         <li><strong>Yumuşak</strong> bir malzeme kolayca kesilebilir veya bastırılabilir, örneğin sabun veya yumuşak ahşap.</li>
         <li><strong>Esnek</strong> bir malzeme bastırıldıktan veya gerildikten sonra eski şekline döner, örneğin lastik veya yay.</li>
       </ul>`,
        `<p><strong>Bazı malzemelerin şekli</strong> kolayca değiştirilebilir. Oyun hamuru veya kil bıraktıktan sonra da yeni şeklini korur.
       Böyle bir malzeme esnek değildir.</p>`,
        `<p><strong>Deney:</strong> bir lastiği, bir parça oyun hamurunu ve bir ahşap bloğu sıkmayı dene. Hangisinin eski şekline döndüğünü yaz.</p>`,
        { fig: 'r1r5-pruznost', caption: 'Esnek lastik sıkıldıktan sonra eski şekline döner, oyun hamuru ise yeni şeklini korur.' }
      ],
      examples: [
        { task: 'Hangi malzeme daha serttir, taş mı yoksa sabun mu?',
          steps: ['Taşı kesmek zordur, sabunu ise kolayca kesebiliriz.', '<strong>Sonuç: taş daha serttir.</strong>'] },
        { task: 'Hangi malzeme esnektir: oyun hamuru mu yoksa lastik mi?',
          steps: ['Sıkıldıktan sonra lastik eski şekline döner.', 'Oyun hamuru sıkıldıktan sonra şeklini korur.', '<strong>Sonuç: lastik esnektir.</strong>'] }
      ]
    },
    'r1-voda-vzduch': {
      title: 'Su, hava ve neden önemlidirler',
      summary: 'Suyun ve havanın özelliklerini anlatır, yaşam için neden önemli olduklarını açıklarsın.',
      theory: [
        `<p><strong>Su</strong> bir sıvıdır. Kendi şekli yoktur, bulunduğu kabın şeklini alır. Su akar, bu yüzden kolayca dökülebilir.
       Su olmadan hiçbir hayvan ya da bitki yaşayamazdı.</p>`,
        `<p><strong>Hava</strong> görülemez, ama her yerde etrafımızdadır. Onu rüzgâr olarak veya nefes alırken hissederiz.
       Hava önemlidir, çünkü onu soluruz; hava olmasaydı bitkiler büyüyemezdi.</p>`,
        `<ul>
         <li>Su; içmek, yemek pişirmek, yıkanmak ve bitkiler için gereklidir.</li>
         <li>Nefes almak için havaya ihtiyacımız vardır, hareket eden hava ise rüzgârı oluşturur.</li>
         <li>Balonu şişirdiğimizde içini hava doldurur. Hava yer kapladığı için balon büyür.</li>
       </ul>`,
        `<p><strong>Deney:</strong> bir kâğıt mendili bir bardağa koy, bardağı ters çevirip suya bastır. Mendil kuru kalır, çünkü bardaktaki hava suyun içeri girmesine izin vermez.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Ters çevrilip suya batırılan bardak kuru kalır, çünkü içindeki hava yer kaplar ve suyun girmesine izin vermez.' }
      ],
      examples: [
        { task: 'Bir insan neden suya ihtiyaç duyar?',
          steps: ['Su vücutta bulunur ve vücudun çalışmasına yardım eder.', 'Su olmadan bir insan uzun süre yaşayamaz.', '<strong>Sonuç: su yaşam için gereklidir.</strong>'] },
        { task: 'Şişirilmiş bir balonun içinde ne vardır?',
          steps: ['Balon şişirildi, ama içine bir şey koymadık.', 'Hava etrafımızda her yerdedir, balonun içinde de.', '<strong>Sonuç: balonun içinde hava vardır.</strong>'] }
      ]
    },
    'r1-svetlo-tien-teplo': {
      title: 'Işık, gölge ve ısı günlük hayatta',
      summary: 'Işığın ve ısının nereden geldiğini öğrenir, gölgenin nasıl oluştuğunu açıklarsın.',
      theory: [
        `<p><strong>Güneş</strong> bize ışık ve ısı verir. Işık görmemize yardım eder, ısı ise bizi ısıtır.
       Bir lamba ve bir mum da ışık verir, bunlardan bazıları ısı da verir.</p>`,
        `<p>Işık, içinden geçmeyen bir nesneye çarptığında nesnenin arkasında bir <strong>gölge</strong> oluşur.
       Gölge, ışığın ulaşamadığı karanlık bir yerdir.</p>`,
        `<ul>
         <li>Ahşaptan veya taştan yapılmış nesneler gölge düşürür.</li>
         <li>Cam ve su ışığı geçirir, bu yüzden arkalarındaki gölge tam karanlık değildir.</li>
       </ul>`,
        `<p>Sıcak bir yaz gününde bir ağacın gölgesini ararız, çünkü orada güneş bizi o kadar ısıtmaz. Isı bize esas olarak güneşin ışınlarıyla ulaşır, gölge ise bu ışınları keser.</p>`,
        { fig: 'obr-tien', caption: 'Gölge, opak bir nesne ışığı engellediği için ışığın ulaşamadığı yerde oluşur.' }
      ],
      examples: [
        { task: 'Güneşli bir günde ağacın altında neden gölge vardır?',
          steps: ['Güneş ağacı aydınlatır.', 'Ağaç opaktır, bu yüzden ışık içinden geçemez.', '<strong>Sonuç: ağacın arkasında gölge oluşur.</strong>'] },
        { task: 'Hangi nesne bize hem ışık hem ısı verir?',
          steps: ['Yanan veya parlayan bir nesne ışık ve ısı verir.', 'Güneş parlar ve bizi ısıtır.', '<strong>Sonuç: güneş.</strong>'] }
      ]
    },
    'r1-zmeny-prirody': {
      title: 'Doğadaki değişimleri gözlemleme',
      summary: 'Doğanın gün içinde ve yıl boyunca nasıl değiştiğini anlatırsın.',
      theory: [
        `<p>Doğa sürekli değişir. Bazı değişimler hızlıdır, örneğin yağmur veya rüzgâr. Diğerleri daha yavaştır, örneğin bir ağacın büyümesi veya mevsimlerin değişmesi.</p>`,
        `<ul>
         <li><strong>İlkbahar</strong>: çiçekler açar, ağaçlar yaprak sürer, hava ısınır.</li>
         <li><strong>Yaz</strong>: en sıcak mevsimdir ve günler uzundur.</li>
         <li><strong>Sonbahar</strong>: yapraklar sararır ve dökülür, hava soğur.</li>
         <li><strong>Kış</strong>: en soğuk mevsimdir, sık sık kar yağar ve bitkiler dinlenir.</li>
       </ul>`,
        `<p>Gün içinde ışık ve sıcaklık değişir: sabah daha serindir, öğle en sıcak saattir ve akşam hava kararır.
       Dünya döndüğü için gündüz ve gece birbirini izler.</p>`,
        `<p>Değişimleri bir doğa günlüğüne kaydedebilirsin, örneğin her hafta ağacın üzerinde kaç yaprak olduğunu yazabilirsin.</p>`,
        { fig: 'r1r5-zem-den-noc', caption: 'Dünya kendi ekseni etrafında döner. Güneşe bakan taraf gündüzdür, ondan uzaktaki taraf gecedir.' }
      ],
      examples: [
        { task: 'Sonbahar mevsimi nasıldır?',
          steps: ['Sonbaharda yapraklar sararır ve dökülür.', 'Hava daha soğuk ve günler daha kısadır.', '<strong>Sonuç: sonbahar, yaprakların döküldüğü mevsimdir.</strong>'] },
        { task: 'Gündüz ve gece neden birbirini izler?',
          steps: ['Dünya kendi ekseni etrafında döner.', 'Bizim tarafımız Güneşe döndüğünde gündür.', '<strong>Sonuç: Dünyanın dönmesi gece ile gündüzün birbirini izlemesine neden olur.</strong>'] }
      ]
    },
    'r2-vlastnosti-latok': {
      title: 'Maddelerin ve nesnelerin özellikleri',
      summary: 'Maddelerin özelliklerini belirlersin: saydamlık, dayanıklılık ve elektriği iletme gibi.',
      theory: [
        `<p>Her maddenin kendine ait <strong>özellikleri</strong> vardır. Bunlara göre bir nesnenin neyden yapılabileceğini seçeriz.
       Örneğin pencereyi ahşaptan yapmayız, çünkü ahşap saydam değildir.</p>`,
        `<ul>
         <li><strong>Saydam</strong> bir madde ışığı geçirir, örneğin cam veya berrak su.</li>
         <li><strong>Opak</strong> bir madde ışığı geçirmez, örneğin ahşap veya taş.</li>
         <li><strong>Parlak</strong> bir madde ışığı yansıtır, örneğin metal.</li>
         <li><strong>İletken</strong> elektrik akımını iletir, örneğin metal. Plastik bir <strong>yalıtkandır</strong>, elektrik akımını iletmez.</li>
       </ul>`,
        `<p>Bir maddeyi tanımlarken şunları sorabiliriz: sert mi, yumuşak mı, saydam mı, parlak mı, esnek mi? Maddeyi ne kadar kesin tanımlarsak, o kadar kolay tanırız.</p>`,
        `<p><strong>Deney:</strong> karanlık bir odada bir el fenerini cama, ahşaba ve folyoya tut. Hangi maddeden ışığın geçtiğini yaz.</p>`,
        { fig: 'r1r5-priehladnost', caption: 'Cam ışığı geçirir, ahşap onu durdurur, metal ise ışığı yansıtır.' }
      ],
      examples: [
        { task: 'Pencereler neden camdan yapılır, ahşaptan değil?',
          steps: ['Pencerenin saydam olması gerekir, böylece ışık içinden geçer.', 'Cam saydamdır, ahşap değildir.', '<strong>Sonuç: cam, pencereler için uygun saydam bir maddedir.</strong>'] },
        { task: 'Hangi madde elektrik akımını iletir: bakır mı yoksa plastik mi?',
          steps: ['Bakır bir metaldir ve metaller akımı iletir.', 'Plastik bir yalıtkandır ve akımı iletmez.', '<strong>Sonuç: bakır.</strong>'] }
      ]
    },
    'r2-skupenstva': {
      title: 'Katılar, sıvılar ve gazlar',
      summary: 'Katıları, sıvıları ve gazları şekillerine ve hacimlerine göre ayırt edersin.',
      theory: [
        `<p>Maddeler üç <strong>hâlde</strong> bulunur: katı, sıvı ve gaz.</p>`,
        `<ul>
         <li><strong>Katının</strong> belirli bir şekli ve belirli bir hacmi vardır. Bir buz küpü veya bir taş şeklini korur.</li>
         <li><strong>Sıvının</strong> belirli bir hacmi vardır, ama şekli kabına göre değişir. Bardaktaki su, bardağın şeklini alır.</li>
         <li><strong>Gazın</strong> ne belirli bir şekli ne de belirli bir hacmi vardır. Bulunduğu kabın tamamını doldurur.</li>
       </ul>`,
        `<p>Hava bir gazdır. Balonu şişirdiğimizde onu gazla doldururuz ve gaz balonun her yerine yayılır.</p>`,
        `<p>Maddenin hâli gözlemlenebilir. Bir buz küpüne, sonra bir bardak suya ve son olarak balondaki havaya bakıp onları karşılaştır.</p>`,
        { fig: 'obr-skupenstva', caption: 'Hâl değişimleri: erime, donma, buharlaşma ve yoğunlaşma.' }
      ],
      examples: [
        { task: 'Bir bardaktaki süt hangi hâldedir?',
          steps: ['Süt akar ve bardağın şeklini alır.', 'Belirli bir hacmi vardır ama belirli bir şekli yoktur.', '<strong>Sonuç: sıvı.</strong>'] },
        { task: 'Hangi hâl belirli bir şekle sahiptir?',
          steps: ['Katı şeklini korur.', 'Gazlar ve sıvılar belirli bir şekle sahip değildir.', '<strong>Sonuç: katı.</strong>'] }
      ]
    },
    'r2-voda-vzduch': {
      title: 'Su ve hava',
      summary: 'Gözlemleyerek havanın yer kapladığını, suyun ise aktığını ve şeklini değiştirdiğini öğrenirsin.',
      theory: [
        `<p><strong>Su</strong> bir sıvıdır. Akar, bulunduğu kabın şeklini alır ve bir kaptan diğerine dökülebilir.
       Su buz hâline getirilebilir ya da ısıtılarak buhar hâline getirilebilir.</p>`,
        `<p><strong>Hava</strong> bir gazdır. Görmesek de yer kaplar. Bu yüzden bir balona yalnızca belirli bir miktar hava sığar.</p>`,
        `<ul>
         <li>Su kuma ve toprağa sızar. Bazı maddeler suda çözünür, bazıları çözünmez.</li>
         <li>Hava rüzgâr olarak hareket eder. Rüzgâr yaprakları hareket ettirebilir ve bir rüzgâr gülünü döndürebilir.</li>
       </ul>`,
        `<p><strong>Deney:</strong> boş bir bardağı su dolu bir kabın içine ters çevirerek koy ve suyun içeri girip girmediğini gözlemle. Bardaktaki hava suyun girmesini engeller.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Ters çevrilip suya batırılan bardak kuru kalır, çünkü içindeki hava yer kaplar ve suyun girmesine izin vermez.' }
      ],
      examples: [
        { task: 'Ters çevrilmiş bir bardak neden suyla dolmaz?',
          steps: ['Bardakta hava vardır.', 'Hava yer kaplar ve suyun içeri girmesine izin vermez.', '<strong>Sonuç: bardaktaki hava yer kaplar.</strong>'] },
        { task: 'Su hangi hâldedir ve nasıl davranır?',
          steps: ['Su bir sıvıdır.', 'Akar ve bulunduğu kabın şeklini alır.', '<strong>Sonuç: su akan bir sıvıdır.</strong>'] }
      ]
    },
    'r2-zmeny-skupenstva': {
      title: 'Hâl değişimleri günlük hayatta',
      summary: 'Erimeyi, donmayı, buharlaşmayı ve yoğunlaşmayı çevrendeki örneklerle adlandırırsın.',
      theory: [
        `<p>Bir madde bir hâlden diğerine <strong>değişebilir</strong>. Bunu en sık suyla görürüz.</p>`,
        `<ul>
         <li><strong>Erime</strong>: katı sıvıya dönüşür, örneğin ısıtıldığında buz suya dönüşür.</li>
         <li><strong>Donma</strong>: sıvı katıya dönüşür, örneğin dondurucudaki su buza dönüşür.</li>
         <li><strong>Buharlaşma</strong>: sıvı gaza (buhara) dönüşür, örneğin ıslak çamaşır kurur.</li>
         <li><strong>Yoğunlaşma</strong>: gaz (buhar) sıvıya dönüşür, örneğin soğuk bir bardağın üzerindeki damlacıklar.</li>
       </ul>`,
        `<p>Erime ve buharlaşmada madde ısı alır. Donma ve yoğunlaşmada ise ısı verir. Bu yüzden kışın su birikintileri hızla soğur, yazın ise su çabuk kurur.</p>`,
        { fig: 'r1r5-zmeny-voda', caption: 'Erime ve buharlaşma ısı almayı, donma ve yoğunlaşma ise ısı vermeyi gerektirir.' }
      ],
      examples: [
        { task: 'Kar suya dönüştüğünde bu değişimin adı nedir?',
          steps: ['Kar bir katıdır.', 'Isıtıldığında sıvıya dönüşür.', '<strong>Sonuç: erime.</strong>'] },
        { task: 'Güneşte ıslak çamaşıra ne olur?',
          steps: ['Çamaşırdaki su buhara dönüşür.', 'Buhar havaya karışır.', '<strong>Sonuç: buharlaşma, çamaşır kurur.</strong>'] }
      ]
    },
    'r2-magnety': {
      title: 'Mıknatıslar ve etkileri',
      summary: 'Bir mıknatısın hangi nesneleri çektiğini öğrenir ve mıknatısın kutuplarını tanımlarsın.',
      theory: [
        `<p>Bir <strong>mıknatıs</strong> demirden, çelikten ve nikelden yapılmış nesneleri çeker. Mıknatıs ahşabı, plastiği, kâğıdı ve camı çekmez.</p>`,
        `<p>Her mıknatısın iki <strong>kutbu</strong> vardır: kuzey ve güney. En güçlü etki uçlarındadır.</p>`,
        `<ul>
         <li>Aynı kutuplar birbirini <strong>iter</strong>.</li>
         <li>Farklı kutuplar birbirini <strong>çeker</strong>.</li>
       </ul>`,
        `<p>Mıknatıs bazı maddelerin içinden de etki eder, örneğin kâğıdın veya ince bir plastik tabakanın arkasından. Demirin içinden ise mıknatısın etkisi daha zor geçer.</p>`,
        { fig: 'obr-magnet', caption: 'Çubuk mıknatısın manyetik alan çizgileri kuzey kutbu N\'den çıkar ve güney kutbu S\'ye girer.' }
      ],
      examples: [
        { task: 'Bir mıknatıs çelik bir anahtarı çeker mi?',
          steps: ['Çelik demir içerir.', 'Mıknatıs demiri çeker.', '<strong>Sonuç: evet, mıknatıs çelik anahtarı çeker.</strong>'] },
        { task: 'İki mıknatısın kuzey kutupları birbirine bakacak şekilde yaklaştırılırsa ne olur?',
          steps: ['İki kutup da aynıdır.', 'Aynı kutuplar birbirini iter.', '<strong>Sonuç: mıknatıslar birbirinden uzaklaşır.</strong>'] }
      ]
    },
    'r2-pokusy': {
      title: 'Basit gözlemler ve deneyler',
      summary: 'Basit bir deney planlar, gözlemleri ve sonucu kaydedersin.',
      theory: [
        `<p>Deney, fikrimizi test etme yoludur. Önce bir soru sorarız, sonra bir <strong>tahmin</strong> (hipotez) ileri sürer, deneyi yapar ve sonuçları yazarız.</p>`,
        `<ol>
         <li><strong>Soru</strong>: Ne öğrenmek istiyoruz? Örneğin: Şeker sıcak suda mı yoksa soğuk suda mı daha hızlı çözünür?</li>
         <li><strong>Tahmin</strong>: Ne olacağını düşünüyoruz? Örneğin: Şeker sıcak suda daha hızlı çözünecek.</li>
         <li><strong>Deney ve gözlem</strong>: Deneyi yaparız ve tam olarak ne gördüğümüzü yazarız.</li>
         <li><strong>Sonuç</strong>: Deney tahminimizi doğruladı mı? Doğrulamadıysa sorun değil, sonuç da bir bilgidir.</li>
       </ol>`,
        `<p>Deney yaparken her zaman güvenlik kurallarına uy ve sonucun güvenilir olması için aynı koşullarda çalış.</p>`
      ],
      examples: [
        { task: 'Basit bir deneyde ilk adım nedir?',
          steps: ['Önce bir soru sorarız.', 'Sonra bir tahmin ileri sürer ve deneyi yaparız.', '<strong>Sonuç: ilk adım bir soru sormaktır.</strong>'] },
        { task: 'Deneyden sonra ne yazarız?',
          steps: ['Gözlemleri yazarız, yani ne gördüğümüzü.', 'En sonda sonucu yazarız.', '<strong>Sonuç: gözlemler ve sonuç.</strong>'] }
      ]
    },
    'r3-latky': {
      title: 'Maddeler ve özellikleri',
      summary: 'Maddeleri saydamlık, sertlik, çözünürlük ve diğer özelliklerine göre karşılaştırırsın.',
      theory: [
        `<p>Her nesne bir <strong>maddeden</strong> yapılmıştır. Aynı madde farklı nesnelerde bulunabilir: sandalye ve kalem ikisi de ahşaptan yapılabilir.</p>`,
        `<ul>
         <li><strong>Saydamlık</strong>: saydam bir maddenin içinden görebiliriz, örneğin camın içinden.</li>
         <li><strong>Sertlik</strong>: sert bir madde çizilmesi zor bir maddedir, örneğin taş.</li>
         <li><strong>Çözünürlük</strong>: çözünen bir madde suda erir ve kaybolur, örneğin şeker veya tuz. Kum suda çözünmez.</li>
         <li><strong>Mıknatıslık</strong>: mıknatıs demiri ve çeliği çeker, ahşabı veya plastiği çekmez.</li>
       </ul>`,
        `<p>Maddelerin özelliklerini gözlemleyerek, ölçerek ve sonuçları yazarak karşılaştırırız. Örneğin hangi maddenin daha hızlı çözündüğünü öğrenebiliriz.</p>`,
        `<p><strong>Deney:</strong> üç bardak suyun içine şeker, kum ve küçük bir çakıl taşı koy. Her birinin nerede kaybolduğunu ve nerede dibe çöktüğünü izle.</p>`
      ],
      examples: [
        { task: 'Suda hangi madde çözünür: tuz mu yoksa kum mu?',
          steps: ['Tuz suda çözünür ve kaybolur.', 'Kum dibe çöker, çözünmez.', '<strong>Sonuç: tuz.</strong>'] },
        { task: 'Mıknatıs hangi maddeyi çeker: demir çiviyi mi yoksa tahta çubuğu mu?',
          steps: ['Mıknatıs demiri çeker.', 'Mıknatıs ahşabı çekmez.', '<strong>Sonuç: demir çivi.</strong>'] }
      ]
    },
    'r3-merania': {
      title: 'Uzunluğun, zamanın ve sıcaklığın ölçülmesi',
      summary: 'Uygun aleti ve birimi seçer, basit uzunlukları birimler arasında dönüştürürsün.',
      theory: [
        `<p>Ölçerken her zaman bir şeyin <strong>ne kadar</strong> olduğunu öğrenir ve onu bir birimle karşılaştırırız. Her büyüklüğün kendi birimi ve aleti vardır.</p>`,
        `<ul>
         <li><strong>Uzunluk</strong>: cetvel veya metre ile ölçeriz. Birimler santimetre (cm) ve metredir (m).</li>
         <li><strong>Zaman</strong>: saat veya kronometre ile ölçeriz. Birimler saniye (s), dakika (dk) ve saattir (sa).</li>
         <li><strong>Sıcaklık</strong>: termometre ile ölçeriz. Birim santigrat derecedir (°C).</li>
       </ul>`,
        `<p>Bir metrede <strong>100 santimetre</strong> vardır. Dönüştürürken bu yüzden yüzle çarparız: 3 m = 300 cm.</p>`,
        `<p>Uzunluğu ölçerken cetveli nesnenin başına yerleştir ve sonunu aynı hizadan oku, böylece sonuç kesin olur.</p>`,
        { fig: 'r1r5-pravitko', caption: 'Cetvelin sıfırını nesnenin başına koyup sonunu okuruz. Nesne 7 cm uzunluğundadır.' }
      ],
      examples: [
        { task: 'Kaç santimetre eder 4 metre?',
          steps: ['Bir metrede 100 santimetre vardır.', 'Dört metrede $4 \\cdot 100 = 400$ santimetre vardır.', '<strong>Sonuç: 400 cm</strong>'] },
        { task: 'Bir koşunun süresini ölçmek için hangi aleti kullanırsın?',
          steps: ['Zaman, saniye ve dakika gösteren bir aletle ölçülür.', 'Termometre sıcaklığı, cetvel ise uzunluğu ölçer.', '<strong>Sonuç: kronometre.</strong>'] }
      ]
    },
    'r3-teplo': {
      title: 'Isı ve nesnelerin ısınması',
      summary: 'Nesnelerin nasıl ısınıp soğuduğunu, bazılarının neden daha hızlı ısındığını açıklarsın.',
      theory: [
        `<p><strong>Isı</strong>, daha sıcak bir nesneden daha soğuk olana akar. Bu yüzden tencereye konan soğuk çorba, ocağa koyduğumuzda ısınır.</p>`,
        `<ul>
         <li><strong>Koyu renkli nesneler</strong> güneş ışığını daha çok soğurur, bu yüzden daha hızlı ısınır.</li>
         <li><strong>Açık renkli nesneler</strong> ışığı daha çok yansıtır, bu yüzden daha yavaş ısınır.</li>
         <li><strong>Metaller</strong> ısıyı hızlı iletir, bu yüzden sıcak çorbadaki bir kaşık çabuk ısınır.</li>
       </ul>`,
        `<p>Isınmayı bir termometre ile ölçeriz. Bir nesne ısı aldığında sıcaklığı yükselir, ısı verdiğinde ise düşer.</p>`,
        { fig: 'r1r5-teplo-tok', caption: 'Isı, daha sıcak nesneden daha soğuk olana geçer, tersi yönde değil.' }
      ],
      examples: [
        { task: 'Güneşte koyu renkli bir tişört mü yoksa beyaz bir tişört mü daha hızlı ısınır?',
          steps: ['Koyu nesneler güneş ışığını daha çok soğurur.', 'Beyaz nesneler ışığı ve ısıyı yansıtır.', '<strong>Sonuç: koyu renkli tişört daha hızlı ısınır.</strong>'] },
        { task: 'Metal bir kaşık sıcak çorbada neden çabuk ısınır?',
          steps: ['Metal ısıyı hızlı iletir.', 'Isı çorbadan kaşığa aktarılır.', '<strong>Sonuç: metal ısıyı hızlı iletir.</strong>'] }
      ]
    },
    'r3-rozpustanie': {
      title: 'Maddelerin suda çözünmesi',
      summary: 'Hangi maddelerin suda çözündüğünü ve çözünmeyi hızlandıran etkenleri öğrenirsin.',
      theory: [
        `<p><strong>Çözünme</strong>, bir maddenin suda öyle küçük parçalara ayrılmasıdır ki artık onları göremeyiz. Çözelti o zaman berrak olur.</p>`,
        `<ul>
         <li><strong>Çözünen</strong> maddeler: şeker, tuz, kakao.</li>
         <li><strong>Çözünmeyen</strong> maddeler: kum, çakıl taşı, yağ (suyun üstünde yüzer).</li>
       </ul>`,
        `<p>Çözünme şu durumlarda hızlanır:</p>
       <ol>
         <li>su ılık olduğunda,</li>
         <li>maddeyi karıştırdığımızda,</li>
         <li>maddeyi önce daha küçük parçalara böldüğümüzde.</li>
       </ol>`,
        `<p><strong>Deney:</strong> iki bardağa eşit miktarda şeker koy, birini ılık, diğerini soğuk suyla doldur. Şekerin hangisinde daha hızlı çözündüğünü izle.</p>`,
        { fig: 'r1r5-castice-teplota', caption: 'Ilık suda tanecikler daha hızlı hareket eder, bu yüzden şeker daha hızlı çözünür.' }
      ],
      examples: [
        { task: 'Suda hangisi çözünür: çakıl taşı mı yoksa şeker mi?',
          steps: ['Şeker suda çözünür.', 'Çakıl taşı dipte kalır.', '<strong>Sonuç: şeker.</strong>'] },
        { task: 'Şeker ılık suda mı yoksa soğuk suda mı daha hızlı çözünür?',
          steps: ['Ilık suyun molekülleri daha hızlı hareket eder.', 'Daha hızlı hareket eden su şekeri daha çabuk çözer.', '<strong>Sonuç: ılık suda.</strong>'] }
      ]
    },
    'r3-pohyb': {
      title: 'Nesnelerin hareketi ve kuvvetler',
      summary: 'Kuvvetlerin nesneleri nasıl hareket ettirdiğini veya durdurduğunu anlatırsın.',
      theory: [
        `<p>Bir nesne, ona bir şey <strong>etki</strong> ettiğinde hareket eder. Bu etkiye <strong>kuvvet</strong> denir. Kuvvet bir itme veya bir çekme olabilir.</p>`,
        `<ul>
         <li><strong>Yerçekimi</strong> nesneleri yere doğru çeker. Onun sayesinde top düşer.</li>
         <li><strong>Sürtünme</strong> birbirine değen nesneler arasında etki eder. Hareketi yavaşlatır, örneğin çimde giden bir topun hareketini.</li>
         <li><strong>Manyetik kuvvet</strong> bir mıknatıs ile demir arasında etki eder.</li>
       </ul>`,
        `<p>Kuvvet bir nesneyi harekete geçirebilir, hızlandırabilir, yavaşlatabilir veya hareketinin yönünü değiştirebilir.</p>`,
        `<p>Kitap masanın üzerinde durur, çünkü masa onu yukarı doğru iter, yerçekimi ise aşağı doğru çeker. Bu iki kuvvet birbirini dengeler, bu yüzden kitap hareket etmez.</p>`,
        { fig: 'r1r5-sily-stol', caption: 'Kitap masanın üzerinde durur: masa N kuvvetiyle yukarı iter, yerçekimi Fg kuvvetiyle aşağı çeker. Kuvvetler dengelidir.' }
      ],
      examples: [
        { task: 'Çimde yuvarlanan topu hangi kuvvet durdurur?',
          steps: ['Çim ve top birbirine değer ve sürtünürler.', 'Bu direnç topu yavaşlatır.', '<strong>Sonuç: sürtünme.</strong>'] },
        { task: 'Bıraktığımızda top neden düşer?',
          steps: ['Topa yerçekimi etki eder.', 'Topu yere doğru çeker.', '<strong>Sonuç: yerçekimi.</strong>'] }
      ]
    },
    'r3-zaznamenavanie': {
      title: 'Deney sonuçlarını gözlemleme ve kaydetme',
      summary: 'Deneyin sonuçlarını bir tabloya yazar ve bunlardan bir sonuç çıkarırsın.',
      theory: [
        `<p>Deney yaparken yalnızca izlemek yetmez. Sonuçları <strong>kaydetmeliyiz</strong>, yoksa onları kısa sürede unuturuz.</p>`,
        `<ol>
         <li>Ne yaptığımızı ve neyle yaptığımızı yazarız.</li>
         <li>Deney sırasında ölçülen değerleri bir <strong>tabloya</strong> kaydederiz.</li>
         <li>Sonunda sonuçları karşılaştırır ve bir <strong>sonuç</strong> yazarız.</li>
       </ol>`,
        `<p>Tablonun her ölçüm için sütunları vardır, örneğin şekerin çözünmesi için geçen süre ve suyun sıcaklığı. Tablo sayesinde iki şeyin nasıl ilişkili olduğunu görebiliriz.</p>`,
        `<p>Beklediğimiz gibi değil, gerçekte olduğu gibi yaz. Sonuç beklediğimiz gibi çıkmadıysa bunu da yaz.</p>`
      ],
      examples: [
        { task: 'Deney sırasında ölçülen değerlerle en iyi ne yapılır?',
          steps: ['Yazmazsak değerleri hızla unuturuz.', 'Ölçtüğümüz anda onları tabloya yazarız.', '<strong>Sonuç: tabloya yazarız.</strong>'] },
        { task: 'Çözünme deneyinin tablosunda neler olmalı?',
          steps: ['Deneyde çözünme süresini ve suyun sıcaklığını ölçeriz.', 'Bu değerleri sütunlara yazarız.', '<strong>Sonuç: çözünme süresi ve su sıcaklığı.</strong>'] }
      ]
    }
  }
});
