/* Deutsch: Lektionen der Klassen 1 bis 3 (js/rocniky/r1.js, r2.js, r3.js). Struktur und Schlüssel: js/content-i18n.js. */
CONTENT_I18N.add('de', {
  lessons: {
    'r1-pozorovanie': {
      title: 'Beobachten von Gegenständen und Vorgängen',
      summary: 'Durch Beobachten findest du die Eigenschaften von Gegenständen heraus und unterscheidest einen Gegenstand von einem Stoff.',
      theory: [
        `<p>Beobachten heißt, etwas gezielt zu betrachten. Beim Beobachten benutzen wir unsere <strong>Sinne</strong>: Sehen, Hören, Tasten, Riechen und Schmecken.
       Schmecken und Riechen bei unbekannten Stoffen tun wir nie ohne Erlaubnis eines Erwachsenen.</p>`,
        `<p><strong>Ein Gegenstand</strong> ist etwas, das wir sehen und benennen können, zum Beispiel ein Ball, ein Stuhl oder ein Buch.
       <strong>Ein Stoff</strong> ist das, woraus ein Gegenstand besteht, zum Beispiel Holz, Glas oder Kunststoff.</p>`,
        `<p>Wenn wir einen Gegenstand beschreiben, sprechen wir über seine <strong>Eigenschaften</strong>: Farbe, Form, Größe, Gewicht, Härte oder darüber, ob er glänzt.
       Eine gute Beschreibung ist genau und man kann den Gegenstand daran erkennen.</p>`,
        `<ul>
         <li>Ein Vorgang ist etwas, das um uns herum geschieht, zum Beispiel Regen, schmelzender Schnee oder fallendes Laub.</li>
         <li>Beim Beobachten fragen wir uns: Was sehe ich, was höre ich und was verändert sich?</li>
       </ul>`
      ],
      examples: [
        { task: 'Beschreibe die Eigenschaften eines Balls.',
          steps: ['Der Ball ist rund und federt.', 'Er hat eine bunte Farbe und lässt sich vom Boden abprallen.', '<strong>Ergebnis: ein runder, federnder Gegenstand, der abprallt.</strong>'] },
        { task: 'Ist Holz ein Gegenstand oder ein Stoff?',
          steps: ['Holz hat keine bestimmte Form, es ist ein Stoff.', 'Aus Holz können wir einen Stuhl oder einen Tisch bauen.', '<strong>Ergebnis: Holz ist ein Stoff.</strong>'] }
      ]
    },
    'r1-vlastnosti-materialov': {
      title: 'Eigenschaften von Stoffen: Härte, Elastizität, Form',
      summary: 'Du vergleichst Stoffe nach Härte, Elastizität und danach, ob sie ihre Form behalten.',
      theory: [
        `<p>Stoffe unterscheiden sich voneinander. Zwei wichtige Eigenschaften sind <strong>Härte</strong> und <strong>Elastizität</strong>.</p>`,
        `<ul>
         <li><strong>Ein harter</strong> Stoff lässt sich schwer zerkratzen oder zusammendrücken, zum Beispiel Stein oder Metall.</li>
         <li><strong>Ein weicher</strong> Stoff lässt sich leicht schneiden oder eindrücken, zum Beispiel Seife oder weiches Holz.</li>
         <li><strong>Ein elastischer</strong> Stoff kehrt nach dem Zusammendrücken oder Dehnen in seine ursprüngliche Form zurück, zum Beispiel Gummi oder eine Feder.</li>
       </ul>`,
        `<p><strong>Die Form</strong> mancher Stoffe lässt sich leicht verändern. Knetmasse oder Ton behalten ihre neue Form auch dann, wenn wir sie loslassen.
       Ein solcher Stoff ist nicht elastisch.</p>`,
        `<p><strong>Versuch:</strong> Drücke einen Gummi, ein Stück Knetmasse und einen Holzwürfel zusammen. Schreibe auf, welcher davon in seine ursprüngliche Form zurückkehrt.</p>`,
        { fig: 'r1r5-pruznost', caption: 'Ein elastischer Gummi kehrt nach dem Zusammendrücken in seine ursprüngliche Form zurück, Knetmasse behält ihre neue Form.' }
      ],
      examples: [
        { task: 'Welcher Stoff ist härter, Stein oder Seife?',
          steps: ['Stein lässt sich schwer schneiden, Seife dagegen leicht.', '<strong>Ergebnis: Stein ist härter.</strong>'] },
        { task: 'Welcher Stoff ist elastisch: Knetmasse oder Gummi?',
          steps: ['Nach dem Zusammendrücken kehrt der Gummi in seine ursprüngliche Form zurück.', 'Knetmasse behält ihre Form nach dem Drücken.', '<strong>Ergebnis: Gummi ist elastisch.</strong>'] }
      ]
    },
    'r1-voda-vzduch': {
      title: 'Wasser, Luft und ihre Bedeutung',
      summary: 'Du beschreibst die Eigenschaften von Wasser und Luft und erklärst, warum sie für das Leben wichtig sind.',
      theory: [
        `<p><strong>Wasser</strong> ist flüssig. Es hat keine eigene Form, sondern nimmt die Form des Gefäßes an, in dem es ist. Wasser fließt, deshalb lässt es sich leicht ausgießen.
       Ohne Wasser könnten weder Tiere noch Pflanzen überleben.</p>`,
        `<p><strong>Luft</strong> sehen wir nicht, aber sie ist überall um uns herum. Wir spüren sie als Wind oder wenn wir atmen.
       Luft ist wichtig, denn wir atmen sie ein, und ohne sie könnten Pflanzen nicht wachsen.</p>`,
        `<ul>
         <li>Wasser brauchen wir zum Trinken, Kochen, Waschen und für die Pflanzen.</li>
         <li>Luft brauchen wir zum Atmen, und ihre Bewegung erzeugt den Wind.</li>
         <li>Ein Luftballon wird prall, wenn wir ihn aufblasen. Der Ballon wird größer, weil die Luft Platz einnimmt.</li>
       </ul>`,
        `<p><strong>Versuch:</strong> Lege ein Papiertaschentuch in ein Glas, drehe das Glas mit dem Boden nach oben und tauche es ins Wasser. Das Taschentuch bleibt trocken, weil die Luft im Glas das Wasser nicht hineinlässt.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Ein Glas, das mit dem Boden nach oben ins Wasser getaucht wird, bleibt trocken, denn die Luft darin nimmt Raum ein und lässt das Wasser nicht hinein.' }
      ],
      examples: [
        { task: 'Warum braucht der Mensch Wasser?',
          steps: ['Wasser ist im Körper und hilft ihm zu funktionieren.', 'Ohne Wasser würde ein Mensch nicht lange überleben.', '<strong>Ergebnis: Wasser ist für das Leben notwendig.</strong>'] },
        { task: 'Was ist im aufgeblasenen Luftballon?',
          steps: ['Wir haben den Ballon aufgeblasen, aber nichts Festes hineingelegt.', 'Luft ist überall um uns herum, also auch im Ballon.', '<strong>Ergebnis: im Ballon ist Luft.</strong>'] }
      ]
    },
    'r1-svetlo-tien-teplo': {
      title: 'Licht, Schatten und Wärme im Alltag',
      summary: 'Du findest heraus, woher Licht und Wärme kommen, und erklärst, wie ein Schatten entsteht.',
      theory: [
        `<p><strong>Die Sonne</strong> gibt uns Licht und Wärme. Das Licht hilft uns zu sehen, die Wärme wärmt uns.
       Auch eine Glühbirne und eine Kerze geben Licht, und manche von ihnen auch Wärme.</p>`,
        `<p>Wenn Licht auf einen Gegenstand trifft, der das Licht nicht hindurchlässt, entsteht hinter dem Gegenstand ein <strong>Schatten</strong>.
       Der Schatten ist ein dunkler Ort, den das Licht nicht erreicht.</p>`,
        `<ul>
         <li>Gegenstände aus Holz oder Stein werfen einen Schatten.</li>
         <li>Glas und Wasser lassen das Licht durch, deshalb ist der Schatten hinter ihnen nicht dunkel.</li>
       </ul>`,
        `<p>An einem heißen Sommertag suchen wir den Schatten eines Baumes, denn dort wärmt uns die Sonne nicht so stark. Die Wärme erreicht uns vor allem über die Sonnenstrahlen, die der Schatten abhält.</p>`,
        { fig: 'obr-tien', caption: 'Ein Schatten entsteht dort, wohin das Licht nicht gelangt, weil ein undurchsichtiger Körper es verdeckt.' }
      ],
      examples: [
        { task: 'Warum entsteht an einem sonnigen Tag unter einem Baum ein Schatten?',
          steps: ['Die Sonne scheint auf den Baum.', 'Der Baum ist undurchsichtig, das Licht geht nicht hindurch.', '<strong>Ergebnis: hinter dem Baum entsteht ein Schatten.</strong>'] },
        { task: 'Welche Quelle gibt uns Licht und Wärme?',
          steps: ['Licht und Wärme gibt ein Gegenstand, der brennt oder leuchtet.', 'Die Sonne scheint und wärmt.', '<strong>Ergebnis: die Sonne.</strong>'] }
      ]
    },
    'r1-zmeny-prirody': {
      title: 'Beobachten von Veränderungen in der Natur',
      summary: 'Du beschreibst, wie sich die Natur im Laufe des Tages und des Jahres verändert.',
      theory: [
        `<p>Die Natur verändert sich ständig. Manche Veränderungen sind schnell, zum Beispiel Regen oder Wind. Andere sind langsamer, zum Beispiel das Wachstum eines Baumes oder der Wechsel der Jahreszeiten.</p>`,
        `<ul>
         <li><strong>Frühling</strong>: Blumen blühen, Bäume treiben Blätter, es wird wärmer.</li>
         <li><strong>Sommer</strong>: Es ist am wärmsten, die Tage sind lang.</li>
         <li><strong>Herbst</strong>: Die Blätter werden gelb und fallen ab, es wird kühler.</li>
         <li><strong>Winter</strong>: Es ist am kältesten, oft fällt Schnee und die Pflanzen ruhen.</li>
       </ul>`,
        `<p>Im Laufe des Tages verändern sich Licht und Temperatur: Morgens ist es kühler, mittags am wärmsten, abends wird es dunkel.
       Tag und Nacht wechseln sich ab, weil sich die Erde dreht.</p>`,
        `<p>Die Veränderungen kannst du in einem Naturkalender festhalten, zum Beispiel jede Woche aufschreiben, wie viele Blätter ein Baum hat.</p>`,
        { fig: 'r1r5-zem-den-noc', caption: 'Die Erde dreht sich um ihre Achse. Die der Sonne zugewandte Seite hat Tag, die abgewandte Seite hat Nacht.' }
      ],
      examples: [
        { task: 'Woran erkennst du den Herbst?',
          steps: ['Im Herbst werden die Blätter gelb und fallen ab.', 'Es ist kühler und die Tage sind kürzer.', '<strong>Ergebnis: Der Herbst ist die Zeit, in der die Blätter abfallen.</strong>'] },
        { task: 'Warum wechseln sich Tag und Nacht ab?',
          steps: ['Die Erde dreht sich um ihre eigene Achse.', 'Wenn unsere Seite der Sonne zugewandt ist, haben wir Tag.', '<strong>Ergebnis: Die Drehung der Erde bewirkt den Wechsel von Tag und Nacht.</strong>'] }
      ]
    },
    'r2-vlastnosti-latok': {
      title: 'Eigenschaften von Stoffen und Gegenständen',
      summary: 'Du erkennst Eigenschaften von Stoffen wie Durchsichtigkeit, Festigkeit und die Fähigkeit, elektrischen Strom zu leiten.',
      theory: [
        `<p>Jeder Stoff hat seine <strong>Eigenschaften</strong>. Anhand davon können wir auswählen, woraus ein bestimmter Gegenstand hergestellt werden kann.
       Ein Fenster stellen wir zum Beispiel nicht aus Holz her, weil Holz nicht durchsichtig ist.</p>`,
        `<ul>
         <li><strong>Ein durchsichtiger</strong> Stoff lässt Licht hindurch, zum Beispiel Glas oder klares Wasser.</li>
         <li><strong>Ein undurchsichtiger</strong> Stoff lässt kein Licht hindurch, zum Beispiel Holz oder Stein.</li>
         <li><strong>Ein glänzender</strong> Stoff reflektiert das Licht, zum Beispiel Metall.</li>
         <li><strong>Ein leitfähiger</strong> Stoff leitet den elektrischen Strom, zum Beispiel Metall. Kunststoff ist ein <strong>Isolator</strong>, er leitet den elektrischen Strom nicht.</li>
       </ul>`,
        `<p>Wenn du einen Stoff beschreibst, kannst du fragen: Ist er hart, weich, durchsichtig, glänzend, elastisch? Je genauer du ihn beschreibst, desto leichter erkennst du ihn.</p>`,
        `<p><strong>Versuch:</strong> Leuchte im Dunkeln mit einer Taschenlampe auf Glas, Holz und Folie. Schreibe auf, welcher Stoff das Licht hindurchgelassen hat.</p>`,
        { fig: 'r1r5-priehladnost', caption: 'Glas lässt Licht hindurch, Holz hält es auf und Metall reflektiert das Licht.' }
      ],
      examples: [
        { task: 'Warum werden Fenster aus Glas und nicht aus Holz hergestellt?',
          steps: ['Ein Fenster soll durchsichtig sein, damit das Licht hindurchgeht.', 'Glas ist durchsichtig, Holz nicht.', '<strong>Ergebnis: Glas ist ein durchsichtiger Stoff und eignet sich deshalb für Fenster.</strong>'] },
        { task: 'Welcher Stoff leitet den elektrischen Strom: Kupfer oder Kunststoff?',
          steps: ['Kupfer ist ein Metall und Metalle leiten den Strom.', 'Kunststoff ist ein Isolator und leitet den Strom nicht.', '<strong>Ergebnis: Kupfer.</strong>'] }
      ]
    },
    'r2-skupenstva': {
      title: 'Feste Stoffe, Flüssigkeiten und Gase',
      summary: 'Du unterscheidest feste Stoffe, Flüssigkeiten und Gase anhand von Form und Volumen.',
      theory: [
        `<p>Stoffe kommen in drei <strong>Aggregatzuständen</strong> vor: fest, flüssig und gasförmig.</p>`,
        `<ul>
         <li><strong>Ein fester Stoff</strong> hat eine feste Form und ein festes Volumen. Ein Eiswürfel oder ein Stein behält seine Form.</li>
         <li><strong>Eine Flüssigkeit</strong> hat ein festes Volumen, aber ihre Form ändert sich je nach Gefäß. Wasser im Glas hat die Form des Glases.</li>
         <li><strong>Ein Gas</strong> hat weder eine feste Form noch ein festes Volumen. Es füllt das ganze Gefäß aus, in dem es ist.</li>
       </ul>`,
        `<p>Luft ist ein Gas. Wenn wir einen Luftballon aufblasen, füllen wir ihn mit Gas, und dieses verteilt sich im ganzen Ballon.</p>`,
        `<p>Den Aggregatzustand eines Stoffes kann man beobachten. Nimm einen Eiswürfel, dann ein Glas Wasser und schließlich die Luft im Ballon, und vergleiche sie.</p>`,
        { fig: 'obr-skupenstva', caption: 'Zustandsänderungen: Schmelzen, Erstarren, Verdunsten und Kondensieren.' }
      ],
      examples: [
        { task: 'Welchen Aggregatzustand hat die Milch im Glas?',
          steps: ['Milch fließt und nimmt die Form des Glases an.', 'Sie hat ein festes Volumen, aber keine feste Form.', '<strong>Ergebnis: flüssig.</strong>'] },
        { task: 'Welcher Aggregatzustand hat eine feste Form?',
          steps: ['Ein fester Stoff behält seine Form.', 'Gas und Flüssigkeit haben keine feste Form.', '<strong>Ergebnis: fester Stoff.</strong>'] }
      ]
    },
    'r2-voda-vzduch': {
      title: 'Wasser und Luft',
      summary: 'Durch Beobachten stellst du fest, dass Luft Raum einnimmt und Wasser fließt und seine Form ändert.',
      theory: [
        `<p><strong>Wasser</strong> ist eine Flüssigkeit. Es fließt, nimmt die Form des Gefäßes an und lässt sich von einem Gefäß in ein anderes gießen.
       Wasser kann zu Eis gefrieren und zu Dampf erhitzt werden.</p>`,
        `<p><strong>Luft</strong> ist ein Gas. Auch wenn wir sie nicht sehen, nimmt sie Raum ein. Deshalb passt nur eine bestimmte Menge Luft in einen aufgeblasenen Luftballon.</p>`,
        `<ul>
         <li>Wasser versickert im Sand und im Boden. Manche Stoffe lösen sich im Wasser auf, andere nicht.</li>
         <li>Luft bewegt sich als Wind. Der Wind kann Blätter bewegen und ein Windrad drehen.</li>
       </ul>`,
        `<p><strong>Versuch:</strong> Stelle ein leeres Glas mit dem Boden nach oben in ein Glas mit Wasser und beobachte, ob das Wasser hineinkommt. Die Luft im Glas hindert das Wasser am Eindringen.</p>`,
        { fig: 'r1r5-vzduch-pohar', caption: 'Ein Glas, das mit dem Boden nach oben ins Wasser getaucht wird, bleibt trocken, denn die Luft darin nimmt Raum ein und lässt das Wasser nicht hinein.' }
      ],
      examples: [
        { task: 'Warum wird das Glas mit dem Boden nach oben nicht mit Wasser gefüllt?',
          steps: ['Im Glas ist Luft.', 'Die Luft nimmt Raum ein und lässt das Wasser nicht hinein.', '<strong>Ergebnis: die Luft im Glas nimmt Platz ein.</strong>'] },
        { task: 'Welchen Aggregatzustand hat Wasser, und wie verhält es sich?',
          steps: ['Wasser ist eine Flüssigkeit.', 'Es fließt und nimmt die Form des Gefäßes an.', '<strong>Ergebnis: Wasser ist eine Flüssigkeit, die fließt.</strong>'] }
      ]
    },
    'r2-zmeny-skupenstva': {
      title: 'Zustandsänderungen im Alltag',
      summary: 'Du benennst Schmelzen, Erstarren, Verdunsten und Kondensieren an Beispielen aus deiner Umgebung.',
      theory: [
        `<p>Ein Stoff kann sich von einem Aggregatzustand in einen anderen <strong>umwandeln</strong>. Am häufigsten sehen wir das am Wasser.</p>`,
        `<ul>
         <li><strong>Schmelzen</strong>: Ein fester Stoff wird zu einer Flüssigkeit, zum Beispiel Eis wird beim Erwärmen zu Wasser.</li>
         <li><strong>Erstarren (Gefrieren)</strong>: Eine Flüssigkeit wird zu einem festen Stoff, zum Beispiel Wasser wird im Gefrierfach zu Eis.</li>
         <li><strong>Verdunsten</strong>: Eine Flüssigkeit wird zu einem Gas (Dampf), zum Beispiel nasse Wäsche trocknet.</li>
         <li><strong>Kondensieren</strong>: Ein Gas (Dampf) wird zu einer Flüssigkeit, zum Beispiel Tropfen an einem kalten Glas.</li>
       </ul>`,
        `<p>Beim Schmelzen und Verdunsten nimmt der Stoff Wärme auf. Beim Erstarren und Kondensieren gibt er Wärme ab. Deshalb kühlen sich Pfützen im Winter schnell ab, und im Sommer trocknet das Wasser bei uns schnell.</p>`,
        { fig: 'r1r5-zmeny-voda', caption: 'Schmelzen und Verdunsten benötigen die Aufnahme von Wärme, Erstarren und Kondensieren geben sie ab.' }
      ],
      examples: [
        { task: 'Wie nennt man die Änderung, wenn Schnee zu Wasser wird?',
          steps: ['Schnee ist ein fester Stoff.', 'Beim Erwärmen wird er zu einer Flüssigkeit.', '<strong>Ergebnis: Schmelzen.</strong>'] },
        { task: 'Was passiert mit nasser Wäsche in der Sonne?',
          steps: ['Das Wasser aus der Wäsche wird zu Dampf.', 'Der Dampf entweicht in die Luft.', '<strong>Ergebnis: Verdunsten, die Wäsche trocknet.</strong>'] }
      ]
    },
    'r2-magnety': {
      title: 'Magnete und ihre Wirkungen',
      summary: 'Du findest heraus, welche Gegenstände ein Magnet anzieht, und beschreibst die Pole eines Magneten.',
      theory: [
        `<p><strong>Ein Magnet</strong> zieht Gegenstände aus Eisen, Stahl und Nickel an. Holz, Kunststoff, Papier oder Glas zieht der Magnet nicht an.</p>`,
        `<p>Jeder Magnet hat zwei <strong>Pole</strong>: einen Nordpol und einen Südpol. Die stärkste Wirkung ist an seinen Enden.</p>`,
        `<ul>
         <li>Zwei gleiche Pole <strong>stoßen sich ab</strong>.</li>
         <li>Zwei verschiedene Pole <strong>ziehen sich an</strong>.</li>
       </ul>`,
        `<p>Ein Magnet wirkt auch durch manche Stoffe hindurch, zum Beispiel durch Papier oder eine dünne Kunststoffschicht. Durch Eisen dagegen wirkt er schwerer hindurch.</p>`,
        { fig: 'obr-magnet', caption: 'Feldlinien eines Stabmagneten verlassen den Nordpol N und treten in den Südpol S ein.' }
      ],
      examples: [
        { task: 'Zieht ein Magnet einen Schlüssel aus Stahl an?',
          steps: ['Stahl enthält Eisen.', 'Ein Magnet zieht Eisen an.', '<strong>Ergebnis: Ja, der Schlüssel aus Stahl wird vom Magneten angezogen.</strong>'] },
        { task: 'Was passiert, wenn wir zwei Magnete mit den Nordpolen aneinanderhalten?',
          steps: ['Beide Pole sind gleich.', 'Gleiche Pole stoßen sich ab.', '<strong>Ergebnis: die Magnete stoßen sich voneinander weg.</strong>'] }
      ]
    },
    'r2-pokusy': {
      title: 'Einfache Beobachtungen und Versuche',
      summary: 'Du planst einen einfachen Versuch und hältst deine Beobachtungen und dein Ergebnis fest.',
      theory: [
        `<p>Ein Versuch überprüft unsere Idee. Zuerst stellen wir eine Frage, dann formulieren wir eine <strong>Vermutung</strong> (Hypothese), führen den Versuch durch und schreiben die Ergebnisse auf.</p>`,
        `<ol>
         <li><strong>Frage</strong>: Was wollen wir herausfinden? Zum Beispiel: Löst sich Zucker in warmem Wasser schneller auf als in kaltem?</li>
         <li><strong>Vermutung</strong>: Was denken wir, passiert? Zum Beispiel: In warmem Wasser löst sich der Zucker schneller auf.</li>
         <li><strong>Versuch und Beobachtung</strong>: Wir führen den Versuch durch und schreiben genau auf, was wir sehen.</li>
         <li><strong>Schluss</strong>: Hat der Versuch unsere Vermutung bestätigt? Wenn nicht, ist das kein Problem, denn auch das Ergebnis ist eine Information.</li>
       </ol>`,
        `<p>Beim Versuch hältst du dich immer an die Sicherheitsregeln und arbeitest unter gleichen Bedingungen, damit das Ergebnis zuverlässig ist.</p>`
      ],
      examples: [
        { task: 'Was ist der erste Schritt bei einem einfachen Versuch?',
          steps: ['Zuerst stellen wir uns eine Frage.', 'Danach formulieren wir eine Vermutung und führen den Versuch durch.', '<strong>Ergebnis: der erste Schritt ist, eine Frage zu stellen.</strong>'] },
        { task: 'Was schreiben wir nach dem Versuch auf?',
          steps: ['Wir schreiben auf, was wir beobachtet haben.', 'Am Ende schreiben wir den Schluss.', '<strong>Ergebnis: Beobachtungen und Schluss.</strong>'] }
      ]
    },
    'r3-latky': {
      title: 'Stoffe und ihre Eigenschaften',
      summary: 'Du vergleichst Stoffe nach Durchsichtigkeit, Härte, Löslichkeit und weiteren Eigenschaften.',
      theory: [
        `<p>Jeder Gegenstand ist aus einem <strong>Stoff</strong> hergestellt. Denselben Stoff finden wir aber in verschiedenen Gegenständen: aus Holz werden Stühle und auch Bleistifte gemacht.</p>`,
        `<ul>
         <li><strong>Durchsichtigkeit</strong>: Durch einen durchsichtigen Stoff sehen wir hindurch, zum Beispiel Glas.</li>
         <li><strong>Härte</strong>: Ein harter Stoff lässt sich schwer zerkratzen, zum Beispiel Stein.</li>
         <li><strong>Löslichkeit</strong>: Ein löslicher Stoff löst sich in Wasser auf und verschwindet, zum Beispiel Zucker oder Salz. Sand löst sich nicht in Wasser auf.</li>
         <li><strong>Magnetismus</strong>: Ein Magnet zieht Eisen und Stahl an, nicht aber Holz oder Kunststoff.</li>
       </ul>`,
        `<p>Die Eigenschaften von Stoffen vergleichen wir, indem wir beobachten, messen und die Ergebnisse aufschreiben. Zum Beispiel können wir herausfinden, welcher Stoff sich schneller auflöst.</p>`,
        `<p><strong>Versuch:</strong> Gib Zucker, Sand und einen kleinen Stein in drei Gläser mit Wasser. Beobachte, wo der Stoff verschwindet und wo er auf dem Boden liegen bleibt.</p>`
      ],
      examples: [
        { task: 'Welcher Stoff löst sich in Wasser auf: Salz oder Sand?',
          steps: ['Salz löst sich im Wasser auf und verschwindet.', 'Sand bleibt am Boden liegen und löst sich nicht auf.', '<strong>Ergebnis: Salz.</strong>'] },
        { task: 'Welchen Gegenstand zieht ein Magnet an: einen Eisennagel oder einen Holzstab?',
          steps: ['Ein Magnet zieht Eisen an.', 'Holz zieht ein Magnet nicht an.', '<strong>Ergebnis: der Eisennagel.</strong>'] }
      ]
    },
    'r3-merania': {
      title: 'Messen von Länge, Zeit und Temperatur',
      summary: 'Du wählst ein passendes Messgerät und eine Einheit und rechnest einfache Längen um.',
      theory: [
        `<p>Beim Messen finden wir immer heraus, <strong>wie viel</strong> von etwas vorhanden ist, und vergleichen es mit einer Einheit. Jede Größe hat ihre eigene Einheit und ihr eigenes Messgerät.</p>`,
        `<ul>
         <li><strong>Länge</strong>: Wir messen mit einem Lineal oder einem Maßband. Die Einheiten sind Zentimeter (cm) und Meter (m).</li>
         <li><strong>Zeit</strong>: Wir messen mit einer Uhr oder einer Stoppuhr. Die Einheiten sind Sekunde (s), Minute (min) und Stunde (h).</li>
         <li><strong>Temperatur</strong>: Wir messen mit einem Thermometer. Die Einheit ist Grad Celsius (°C).</li>
       </ul>`,
        `<p>Ein Meter hat <strong>100 Zentimeter</strong>. Beim Umrechnen multiplizieren wir deshalb mit hundert: 3 m = 300 cm.</p>`,
        `<p>Beim Messen der Länge legst du das Lineal an den Anfang des Gegenstands und liest das Ende in Augenhöhe ab, damit das Ergebnis genau ist.</p>`,
        { fig: 'r1r5-pravitko', caption: 'Wir legen den Nullpunkt des Lineals an den Anfang des Gegenstands und lesen das Ende ab. Der Gegenstand ist 7 cm lang.' }
      ],
      examples: [
        { task: 'Wie viele Zentimeter sind 4 Meter?',
          steps: ['Ein Meter hat 100 Zentimeter.', 'Vier Meter haben $4 \\cdot 100 = 400$ Zentimeter.', '<strong>Ergebnis: 400 cm</strong>'] },
        { task: 'Welches Gerät verwendest du zum Messen der Laufzeit?',
          steps: ['Die Zeit messen wir mit einem Gerät, das Sekunden und Minuten anzeigt.', 'Ein Thermometer misst die Temperatur, ein Lineal die Länge.', '<strong>Ergebnis: die Stoppuhr.</strong>'] }
      ]
    },
    'r3-teplo': {
      title: 'Wärme und Erwärmen von Gegenständen',
      summary: 'Du erklärst, wie sich Gegenstände erwärmen und abkühlen und warum sich manche schneller erwärmen.',
      theory: [
        `<p><strong>Wärme</strong> fließt von einem wärmeren Gegenstand zu einem kälteren. Deshalb wird eine kalte Suppe im Topf warm, wenn wir ihn auf die Herdplatte stellen.</p>`,
        `<ul>
         <li><strong>Dunkle Gegenstände</strong> nehmen mehr Sonnenlicht auf und erwärmen sich deshalb schneller.</li>
         <li><strong>Helle Gegenstände</strong> reflektieren mehr Licht und erwärmen sich langsamer.</li>
         <li><strong>Metalle</strong> leiten Wärme schnell, deshalb wird ein Löffel in heißer Suppe rasch warm.</li>
       </ul>`,
        `<p>Das Erwärmen messen wir mit einem Thermometer. Die Temperatur steigt, wenn ein Gegenstand Wärme aufnimmt, und sinkt, wenn er Wärme abgibt.</p>`,
        { fig: 'r1r5-teplo-tok', caption: 'Wärme fließt vom wärmeren Körper zum kälteren, nicht umgekehrt.' }
      ],
      examples: [
        { task: 'Welcher Gegenstand erwärmt sich in der Sonne schneller: ein dunkles oder ein weißes T-Shirt?',
          steps: ['Dunkle Gegenstände nehmen mehr Licht auf.', 'Weiße Gegenstände reflektieren Licht und Wärme.', '<strong>Ergebnis: das dunkle T-Shirt erwärmt sich schneller.</strong>'] },
        { task: 'Warum erwärmt sich ein Metalllöffel in heißer Suppe so schnell?',
          steps: ['Metall leitet Wärme schnell.', 'Die Wärme geht von der Suppe auf den Löffel über.', '<strong>Ergebnis: Metall leitet Wärme schnell.</strong>'] }
      ]
    },
    'r3-rozpustanie': {
      title: 'Auflösen von Stoffen in Wasser',
      summary: 'Du findest heraus, welche Stoffe sich in Wasser auflösen, und welche Faktoren das Auflösen beschleunigen.',
      theory: [
        `<p><strong>Auflösen</strong> bedeutet, dass sich ein Stoff im Wasser in so kleine Teilchen zerteilt, dass wir sie nicht mehr sehen. Die Lösung ist dann durchsichtig.</p>`,
        `<ul>
         <li><strong>Lösliche</strong> Stoffe: Zucker, Salz, Kakao.</li>
         <li><strong>Unlösliche</strong> Stoffe: Sand, Kieselsteine, Öl (das sich im Wasser oben absetzt).</li>
       </ul>`,
        `<p>Das Auflösen geht schneller, wenn:</p>
       <ol>
         <li>das Wasser warm ist,</li>
         <li>wir den Stoff umrühren,</li>
         <li>wir den Stoff vorher in kleinere Stücke zerteilen.</li>
       </ol>`,
        `<p><strong>Versuch:</strong> Gib in zwei Gläser dieselbe Menge Zucker, fülle das eine mit warmem und das andere mit kaltem Wasser. Beobachte, wo sich der Zucker schneller auflöst.</p>`,
        { fig: 'r1r5-castice-teplota', caption: 'In wärmerem Wasser bewegen sich die Teilchen schneller, deshalb löst sich der Zucker schneller auf.' }
      ],
      examples: [
        { task: 'Welcher Stoff löst sich in Wasser auf: ein Kieselstein oder Zucker?',
          steps: ['Zucker löst sich im Wasser auf.', 'Der Kieselstein bleibt am Boden liegen.', '<strong>Ergebnis: Zucker.</strong>'] },
        { task: 'Wo löst sich Zucker schneller auf: in warmem oder in kaltem Wasser?',
          steps: ['Die Teilchen des warmen Wassers bewegen sich schneller.', 'Schneller bewegtes Wasser löst den Zucker früher auf.', '<strong>Ergebnis: in warmem Wasser.</strong>'] }
      ]
    },
    'r3-pohyb': {
      title: 'Bewegung von Gegenständen und Wirkung von Kräften',
      summary: 'Du beschreibst, wie Kräfte Gegenstände in Bewegung setzen oder abbremsen.',
      theory: [
        `<p>Ein Gegenstand bewegt sich, wenn etwas auf ihn <strong>einwirkt</strong>. Diese Einwirkung nennen wir <strong>Kraft</strong>. Eine Kraft kann schieben oder ziehen.</p>`,
        `<ul>
         <li><strong>Die Schwerkraft</strong> zieht Gegenstände zur Erde. Ihretwegen fällt der Ball nach unten.</li>
         <li><strong>Reibung</strong> wirkt zwischen Gegenständen, die sich berühren. Sie bremst die Bewegung, zum Beispiel beim Ball auf dem Gras.</li>
         <li><strong>Die magnetische Kraft</strong> wirkt zwischen einem Magneten und Eisen.</li>
       </ul>`,
        `<p>Eine Kraft kann einen Gegenstand in Bewegung setzen, beschleunigen, abbremsen oder seine Bewegungsrichtung ändern.</p>`,
        `<p>Auf dem Tisch liegt ein Buch: Die Unterlage drückt es nach oben, und die Schwerkraft zieht es nach unten. Diese beiden Kräfte gleichen sich aus, deshalb bewegt sich das Buch nicht.</p>`,
        { fig: 'r1r5-sily-stol', caption: 'Das Buch liegt auf dem Tisch: die Unterlage drückt mit der Kraft N nach oben, die Schwerkraft zieht mit der Kraft Fg nach unten. Die Kräfte gleichen sich aus.' }
      ],
      examples: [
        { task: 'Welche Kraft bremst den Ball, der über das Gras rollt?',
          steps: ['Gras und Ball berühren sich und reiben aneinander.', 'Diese Reibung bremst den Ball.', '<strong>Ergebnis: Reibung.</strong>'] },
        { task: 'Warum fällt der Ball, wenn wir ihn loslassen?',
          steps: ['Auf den Ball wirkt die Schwerkraft.', 'Sie zieht ihn zur Erde.', '<strong>Ergebnis: die Schwerkraft.</strong>'] }
      ]
    },
    'r3-zaznamenavanie': {
      title: 'Beobachten und Festhalten der Ergebnisse von Versuchen',
      summary: 'Du trägst die Ergebnisse eines Versuchs in eine Tabelle ein und ziehst daraus einen Schluss.',
      theory: [
        `<p>Bei einem Versuch reicht es nicht, nur zuzusehen. Die Ergebnisse müssen wir <strong>festhalten</strong>, sonst erinnern wir uns nach einer Weile nicht mehr an sie.</p>`,
        `<ol>
         <li>Wir schreiben auf, was wir getan haben und womit.</li>
         <li>Während des Versuchs tragen wir die gemessenen Werte in eine <strong>Tabelle</strong> ein.</li>
         <li>Am Ende vergleichen wir die Ergebnisse und schreiben einen <strong>Schluss</strong>.</li>
       </ol>`,
        `<p>Eine Tabelle hat Spalten für die einzelnen Messungen, zum Beispiel für die Zeit, die der Zucker zum Auflösen braucht, und für die Temperatur des Wassers. Mit der Tabelle sehen wir, wie zwei Dinge zusammenhängen.</p>`,
        `<p>Schreibe genau auf, was du beobachtest, und nicht, was du dir denkst. Wenn das Ergebnis nicht so ausfällt, wie du erwartet hast, schreib es trotzdem auf.</p>`
      ],
      examples: [
        { task: 'Was ist das Beste, das man mit den Messwerten während des Versuchs tun sollte?',
          steps: ['Werte vergessen wir schnell, wenn wir sie nicht aufschreiben.', 'Wir tragen sie sofort in die Tabelle ein, sobald wir sie gemessen haben.', '<strong>Ergebnis: in die Tabelle eintragen.</strong>'] },
        { task: 'Was gehört bei einem Versuch zum Auflösen in die Tabelle?',
          steps: ['Beim Versuch messen wir die Zeit und die Wassertemperatur.', 'Diese Werte tragen wir in Spalten ein.', '<strong>Ergebnis: Auflösezeit und Wassertemperatur.</strong>'] }
      ]
    }
  }
});
