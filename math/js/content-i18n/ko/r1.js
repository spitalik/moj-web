/* 한국어: preklad js/rocniky/r1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/r1/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "r1-cisla20": {
   "title": "20까지의 수",
   "summary": "0부터 20까지의 수 읽기, 쓰기, 크기 비교하기.",
   "theory": [
    "<p>0부터 20까지의 수를 읽고 숫자로 쓸 수 있어요: 0(영), 1(일), 2(이) … 10(십) … 20(이십).\n       11부터 19까지의 수는 <strong>십 모형 1개</strong>와 <strong>낱개</strong> 몇 개로 되어 있어요: 예를 들어 $14 = 10 + 4$.</p>",
    {
     "fig": "r1-rad20",
     "caption": "0부터 20까지의 수의 순서. 오른쪽으로 갈수록 수가 커져요."
    },
    "<p><strong>크기 비교:</strong> 기호 $&lt;$는 “~보다 작다”, 기호 $&gt;$는 “~보다 크다”, $=$는 “같다”를 뜻해요.\n       기호의 벌어진 쪽은 항상 더 큰 수를 향해요: $7 &lt; 12$, $15 &gt; 9$.</p>"
   ],
   "examples": [
    {
     "task": "13과 8의 크기를 비교하세요.",
     "steps": [
      "수의 순서에서 13은 8보다 더 오른쪽에 있어요.",
      "그래서 $13 &gt; 8$."
     ]
    },
    {
     "task": "17은 십 모형 몇 개와 낱개 몇 개로 되어 있나요?",
     "steps": [
      "$17 = 10 + 7$.",
      "<strong>십 모형 1개와 낱개 7개.</strong>"
     ]
    }
   ]
  },
  "r1-scitanie": {
   "title": "20까지의 덧셈과 뺄셈",
   "summary": "더하기와 빼기, 받아올림과 받아내림.",
   "theory": [
    "<p><strong>덧셈</strong>은 더하는 것이에요: $5 + 3 = 8$. 더하는 수들을 <em>더하는 수</em>라고 하고, 결과를 <em>합</em>이라고 해요.\n       더하는 순서는 바꾸어도 돼요: $3 + 5 = 5 + 3$.</p>",
    "<p><strong>뺄셈</strong>은 덜어 내는 것이에요: $8 - 3 = 5$. 뺄셈은 덧셈의 반대예요: $5 + 3 = 8$이면 $8 - 3 = 5$이고 $8 - 5 = 3$이에요.</p>",
    "<p><strong>10을 넘는 덧셈:</strong> $8 + 5$에서는 먼저 10을 만들고($8 + 2 = 10$), 그다음 남은 수를 더해요($10 + 3 = 13$).</p>",
    {
     "fig": "r1-desiatka",
     "caption": "10칸 상자 두 개: 파란색 8개와 초록색 5개. 초록색 2개가 첫 번째 상자를 채우고, 남은 3개는 두 번째 상자에 있어요: $8 + 5 = 13$."
    }
   ],
   "examples": [
    {
     "task": "$8 + 5$를 계산하세요.",
     "steps": [
      "10을 만들어요: $8 + 2 = 10$.",
      "5에서 3이 남았어요: $10 + 3 = 13$.",
      "<strong>답: 13</strong>"
     ]
    },
    {
     "task": "$14 - 6$을 계산하세요.",
     "steps": [
      "먼저 4를 빼서 10을 만들어요: $14 - 4 = 10$.",
      "6에서 2를 더 빼야 해요: $10 - 2 = 8$.",
      "<strong>답: 8</strong>"
     ]
    }
   ]
  },
  "r1-rozklad": {
   "title": "수의 순서와 가르기",
   "summary": "앞의 수와 뒤의 수, 수를 두 수로 가르기.",
   "theory": [
    "<p><strong>수의 순서</strong>는 수를 차례대로 늘어놓은 것이에요: 0, 1, 2, 3, … 어떤 수 바로 앞의 수는 1 작고,\n       바로 뒤의 수는 1 커요.</p>",
    "<p><strong>수 가르기</strong>는 수를 더 작은 두 수의 합으로 나타내는 것이에요. 6은 예를 들어\n       $1 + 5$, $2 + 4$ 또는 $3 + 3$으로 가를 수 있어요.</p>",
    {
     "fig": "r1-domcek",
     "caption": "6의 가르기 집: 각 층에는 합해서 6이 되는 두 수가 있어요."
    }
   ],
   "examples": [
    {
     "task": "수의 순서에서 15 바로 뒤에 오는 수는 무엇인가요?",
     "steps": [
      "바로 뒤의 수는 항상 1 큰 수예요.",
      "$15 + 1 = 16$.",
      "<strong>답: 16</strong>"
     ]
    },
    {
     "task": "가르기를 완성하세요: $9 = 4 + \\square$.",
     "steps": [
      "4에서 9까지 얼마가 모자라는지 찾아요.",
      "$9 - 4 = 5$.",
      "<strong>$9 = 4 + 5$</strong>"
     ]
    }
   ]
  },
  "r1-slovne": {
   "title": "간단한 문장제",
   "summary": "이야기를 식으로 바꾸고 답 쓰기.",
   "theory": [
    "<p>문장제는 다음 순서로 풀어요:</p>\n       <ol><li>문제를 읽어요,</li><li>알고 있는 것과 구하는 것을 찾아요,</li><li>식을 써요,</li>\n       <li>계산해요,</li><li>완전한 문장으로 답을 써요.</li></ol>",
    "<p><em>더 넣었다, 받았다, 모두, … 더 많이</em> 같은 말은 보통 <strong>덧셈</strong>을 뜻해요.\n       <em>먹었다, 주었다, 남았다, 몇 개 더 많은가</em> 같은 말은 보통 <strong>뺄셈</strong>을 뜻해요.</p>"
   ],
   "examples": [
    {
     "task": "지민이는 사탕 7개를 가지고 있었는데 5개를 더 받았어요. 지민이는 지금 사탕을 몇 개 가지고 있나요?",
     "steps": [
      "알고 있는 것: 사탕 7개가 있었고 5개를 받았어요. 구하는 것: 모두 몇 개인지.",
      "식: $7 + 5 = 12$.",
      "<strong>답: 지민이는 사탕 12개를 가지고 있어요.</strong>"
     ]
    },
    {
     "task": "민준이는 구슬 9개, 서준이는 구슬 4개를 가지고 있어요. 민준이는 구슬을 몇 개 더 많이 가지고 있나요?",
     "steps": [
      "비교하는 문제이므로 큰 수에서 작은 수를 빼요.",
      "식: $9 - 4 = 5$.",
      "<strong>답: 민준이가 구슬을 5개 더 많이 가지고 있어요.</strong>"
     ]
    }
   ]
  },
  "r1-utvary": {
   "title": "평면도형과 입체도형",
   "summary": "원, 삼각형, 정사각형, 직사각형과 우리 주변의 입체도형.",
   "theory": [
    "<p><strong>평면도형</strong>은 납작해서 종이에 그릴 수 있어요: <strong>원</strong>, <strong>삼각형</strong>\n       (변 3개, 꼭짓점 3개), <strong>정사각형</strong>(길이가 같은 변 4개), <strong>직사각형</strong>(변 4개, 마주 보는 변의 길이가 같아요).</p>",
    {
     "fig": "r1-rovinne",
     "caption": "평면도형."
    },
    "<p><strong>입체도형</strong>은 손으로 잡을 수 있어요: <strong>정육면체</strong>(주사위), <strong>직육면체</strong>(상자),\n       <strong>구</strong>(공), <strong>원기둥</strong>(통조림 캔), <strong>원뿔</strong>(아이스크림 콘).</p>",
    {
     "fig": "r1-telesa",
     "caption": "입체도형. 점선은 뒤쪽에 있는 모서리를 나타내요."
    }
   ],
   "examples": [
    {
     "task": "삼각형과 정사각형은 각각 꼭짓점이 몇 개인가요?",
     "steps": [
      "꼭짓점은 도형의 뾰족한 모서리예요.",
      "삼각형은 꼭짓점이 3개, 정사각형은 꼭짓점이 4개예요."
     ]
    },
    {
     "task": "공은 어떤 입체도형과 닮았나요?",
     "steps": [
      "공은 어느 쪽에서 보아도 둥글어요.",
      "<strong>공은 구 모양이에요.</strong>"
     ]
    }
   ]
  },
  "r1-meranie": {
   "title": "위치와 길이 재기",
   "summary": "왼쪽, 오른쪽, 사이; 길이 비교하기와 재기.",
   "theory": [
    "<p><strong>위치:</strong> 왼쪽 – 오른쪽, 위 – 아래, 앞 – 뒤, 옆, 사이 같은 말을 써요.\n       🐶 🐱 🐰 줄에서 고양이는 강아지와 토끼 <em>사이</em>에 있고, 강아지는 고양이의 <em>왼쪽</em>에 있어요.</p>",
    "<p><strong>길이 재기:</strong> 길이는 걸음, 뼘, 블록으로 잴 수 있어요. 더 정확하게는 자로\n       센티미터(cm) 단위로 재요. 비교할 때는 더 길다 – 더 짧다, 더 높다 – 더 낮다라고 말해요.</p>",
    {
     "fig": "r1-meranie",
     "caption": "연필은 블록 7개, 지우개는 블록 3개만큼 길어요. 연필이 블록 4개만큼 더 길어요."
    }
   ],
   "examples": [
    {
     "task": "🍎 🍐 🍌 🍇 줄에서 배 바로 오른쪽에 있는 과일은 무엇인가요?",
     "steps": [
      "배 🍐는 왼쪽에서 두 번째예요.",
      "바로 오른쪽에는 바나나 🍌가 있어요."
     ]
    },
    {
     "task": "리본 하나는 9 cm, 다른 하나는 5 cm예요. 첫 번째 리본은 몇 cm 더 긴가요?",
     "steps": [
      "비교하는 문제이므로 빼요: $9 - 5 = 4$.",
      "<strong>첫 번째 리본이 4 cm 더 길어요.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "${@0} - {@1} = {@2}$, teda ${@3} = {@4} + {@5}$.": "${@0} - {@1} = {@2}$, 그러니까 ${@3} = {@4} + {@5}$예요.",
  "${@0} - {@1} = {@2}$, červená stuha je o {@3} cm dlhšia.": "${@0} - {@1} = {@2}$, 빨간 리본이 {@3} cm 더 길어요.",
  "${@0} = {@1} + {@2}$, teda {@3} {@4} a {@5} {@6}.": "${@0} = {@1} + {@2}$, 그러니까 {@4}이 {@3}개, {@6}이 {@5}개예요.",
  "Adam": "도하",
  "Ak prejdeš cez 10, najprv doplň do desiatky a potom pridaj zvyšok.": "10을 넘으면 먼저 10을 만들고 나머지를 더하세요.",
  "Ako sa volá {@0}?": "{@0}의 이름은 무엇일까요?",
  "Budeš sčítať (+), alebo odčítať (−)?": "더할까요(+), 뺄까요(−)?",
  "Chýbajúce číslo zistíš odčítaním.": "빠진 수는 뺄셈으로 알 수 있어요.",
  "Desiatkové rámčeky: 8 plus 5": "10칸 상자: 8 더하기 5",
  "Domček rozkladu čísla 6": "6의 가르기 집",
  "Doplnil si do desiatky, ale zabudol si pridať zvyšok: ešte $+ {@0}$.": "10을 만들었지만 나머지를 더하는 것을 잊었어요: $+ {@0}$을 더 해야 해요.",
  "Doplň chýbajúce číslo: ${@0} + \\square = {@1}$": "빈칸에 알맞은 수를 쓰세요: ${@0} + \\square = {@1}$",
  "Doplň do desiatky: ${@0} + {@1} = 10$, potom $10 + {@2} = {@3}$.": "10을 만들어요: ${@0} + {@1} = 10$, 그다음 $10 + {@2} = {@3}$.",
  "Doplň správny znak: ${@0} \\;\\square\\; {@1}$": "알맞은 기호를 쓰세요: ${@0} \\;\\square\\; {@1}$",
  "Doplň číslo, ktoré chýba v číselnom rade: {@0}": "수의 순서에서 빠진 수를 쓰세요: {@0}",
  "Dĺžky stúh nesčítavaj. Pýtame sa, o koľko je červená stuha dlhšia – odčítaj.": "리본의 길이를 더하지 마세요. 빨간 리본이 얼마나 더 긴지 묻고 있어요. 빼세요.",
  "Ema": "하나",
  "Hneď pred": "바로 앞",
  "Hneď vpravo od {@0} stojí {@1}.": "{@0} 바로 오른쪽에는 {@1}가 있어요.",
  "Hneď vľavo od {@0} stojí {@1}.": "{@0} 바로 왼쪽에는 {@1}가 있어요.",
  "Hneď za": "바로 뒤",
  "Hľadaj číslo, ktoré je o 1 väčšie ako prvé.": "첫 번째 수보다 1 큰 수를 찾으세요.",
  "Hľadáme, koľko chýba od {@0} do {@1}: ${@2} - {@3} = {@4}$.": "{@0}에서 {@1}까지 얼마나 모자라는지 찾아요: ${@2} - {@3} = {@4}$.",
  "Jano": "민호",
  "Keď niečo dáš preč, zostane toho menej. Tu treba odčítať, nie sčítať.": "무언가를 주면 남는 것이 적어져요. 여기서는 더하지 말고 빼야 해요.",
  "Keď niečo pribudne, je toho viac. Tu treba sčítať, nie odčítať.": "무언가가 생기면 더 많아져요. 여기서는 빼지 말고 더해야 해요.",
  "Keď niečo pribudne, sčítavame.": "무언가가 늘어나면 더해요.",
  "Keď niečo ubudne, odčítavame.": "무언가가 줄어들면 빼요.",
  "Kocka má 6 stien a každá stena je štvorec.": "정육면체는 면이 6개이고, 면은 모두 정사각형이에요.",
  "Kocka má 8 vrcholov: 4 hore a 4 dole.": "정육면체는 꼭짓점이 8개예요: 위에 4개, 아래에 4개.",
  "Kocka má všetky steny rovnaké štvorce. Toto teleso je širšie, ako je vysoké.": "정육면체는 모든 면이 똑같은 정사각형이에요. 이 입체도형은 높이보다 폭이 더 넓어요.",
  "Kocky z oboch pásov nesčítavaj. Zisti, o koľko kociek má modrý pás viac – odčítaj.": "두 줄의 블록을 더하지 마세요. 파란 줄의 블록이 몇 개 더 많은지 알아보세요. 빼세요.",
  "Koľko chýba od {@0} do {@1}?": "{@0}에서 {@1}까지 얼마나 더 있어야 할까요?",
  "Koľko chýba čísla {@0} do 10?": "{@0}은 10이 되려면 얼마가 더 있어야 할까요?",
  "Koľko je $10 + {@0}$?": "$10 + {@0}$은 얼마일까요?",
  "Koľko je $10 - {@0}$?": "$10 - {@0}$은 얼마일까요?",
  "Koľko jednotiek má {@0} navyše oproti 10?": "{@0}은 10보다 1이 몇 개 더 많을까요?",
  "Koľko kociek má modrý pás?": "파란 줄은 블록 몇 개인가요?",
  "Koľko kociek má zelený pás?": "초록 줄은 블록 몇 개인가요?",
  "Koľko musíš ubrať z čísla {@0}, aby si sa dostal na 10?": "10이 되려면 {@0}에서 얼마를 빼야 할까요?",
  "Koľko stien má kocka?": "정육면체의 면은 몇 개일까요?",
  "Koľko strán má trojuholník?": "삼각형의 변은 몇 개일까요?",
  "Koľko strán má štvorec?": "정사각형의 변은 몇 개일까요?",
  "Koľko vrcholov má kocka?": "정육면체의 꼭짓점은 몇 개일까요?",
  "Koľko vrcholov má kruh?": "원의 꼭짓점은 몇 개일까요?",
  "Koľko vrcholov má obdĺžnik?": "직사각형의 꼭짓점은 몇 개일까요?",
  "Koľko vrcholov má trojuholník?": "삼각형의 꼭짓점은 몇 개일까요?",
  "Koľko {@0} má číslo {@1}?": "{@1}에는 {@0}이 몇 개 있을까요?",
  "Kruh nemá žiadne vrcholy, jeho okraj je oblý.": "원은 꼭짓점이 없어요. 가장자리가 둥글어요.",
  "Ktoré číslo je o 1 {@0} ako {@1}?": "{@1}보다 1 {@0} 수는 무엇일까요?",
  "Ktoré číslo leží v číselnom rade medzi číslami {@0} a {@1}?": "수의 순서에서 {@0}와 {@1} 사이에 있는 수는 무엇일까요?",
  "Kužeľ má hore špičku. Toto teleso má hore aj dole kruh.": "원뿔은 위가 뾰족해요. 이 입체도형은 위와 아래가 모두 원이에요.",
  "Kváder vyzerá ako krabica, jeho steny nie sú všetky rovnaké. Tu sú všetky steny rovnaké štvorce.": "직육면체는 상자처럼 생겼고, 면이 모두 똑같지는 않아요. 여기서는 모든 면이 똑같은 정사각형이에요.",
  "Lea": "유나",
  "Medzi {@0} a {@1} stojí {@2}.": "{@0}와 {@1} 사이에는 {@2}가 있어요.",
  "Meranie kockami": "블록으로 길이 재기",
  "Miro": "지호",
  "Modrý pás má {@0} {@1}, zelený {@2}. ${@3} - {@4} = {@5}$.": "파란 줄은 {@1} {@0}개, 초록 줄은 {@2}개예요. ${@3} - {@4} = {@5}$.",
  "Máš odčítať, nie sčítať: znamienko $-$ znamená ubrať.": "더하지 말고 빼야 해요: $-$ 기호는 덜어 낸다는 뜻이에요.",
  "Máš sčítať, nie odčítať: znamienko $+$ znamená pridať.": "빼지 말고 더해야 해요: $+$ 기호는 더한다는 뜻이에요.",
  "Na obrázku je {@0}.": "그림 속 모양: {@0}.",
  "Na obrázku vidno len 3 steny. Ďalšie 3 steny sú schované vzadu, vľavo a dole.": "그림에서는 면이 3개만 보여요. 나머지 3개의 면은 뒤쪽, 왼쪽, 아래쪽에 숨어 있어요.",
  "Na číselnom rade sa posuň o jedno miesto doprava.": "수의 순서에서 오른쪽으로 한 칸 움직이세요.",
  "Na číselnom rade sa posuň o jedno miesto doľava.": "수의 순서에서 왼쪽으로 한 칸 움직이세요.",
  "Najprv uber do desiatky: ${@0} - {@1} = 10$, potom $10 - {@2} = {@3}$.": "먼저 10까지 빼요: ${@0} - {@1} = 10$, 그다음 $10 - {@2} = {@3}$.",
  "Nina": "수아",
  "O koľko je modrý pás dlhší? Vypočítaj ${@0} - {@1}$.": "파란 줄이 얼마나 더 길까요? ${@0} - {@1}$을 계산하세요.",
  "O koľko kociek je modrý pás dlhší ako zelený? {@0}": "파란 줄은 초록 줄보다 블록이 몇 개 더 길까요? {@0}",
  "Obdĺžnik má 4 vrcholy.": "직사각형은 꼭짓점이 4개예요.",
  "Obdĺžnik má dve strany dlhšie a dve kratšie. Sú tu všetky strany rovnako dlhé?": "직사각형은 긴 변 두 개와 짧은 변 두 개가 있어요. 여기서는 모든 변의 길이가 같나요?",
  "Odčítanie je opak sčítania: koľko musíš pridať k {@0}, aby si dostal {@1}?": "뺄셈은 덧셈의 반대예요. {@0}에 얼마를 더해야 {@1}이 될까요?",
  "Otázka „o koľko viac“ sa rieši odčítaním.": "“몇 개 더 많은가” 하는 문제는 뺄셈으로 풀어요.",
  "Porovnávame: ${@0} - {@1} = {@2}$. {@3} má o {@4} {@5} viac.": "비교해요: ${@0} - {@1} = {@2}$. {@3}는 {@5} {@4}개를 더 가지고 있어요.",
  "Posunul si sa na opačnú stranu. Menšie čísla sú na číselnom rade vľavo.": "반대쪽으로 움직였어요. 수의 순서에서 작은 수는 왼쪽에 있어요.",
  "Posunul si sa na opačnú stranu. Väčšie čísla sú na číselnom rade vpravo.": "반대쪽으로 움직였어요. 수의 순서에서 큰 수는 오른쪽에 있어요.",
  "Pozri sa znova: obe čísla sú rovnaké, ani jedno nie je väčšie.": "다시 보세요. 두 수는 같아서 어느 쪽도 더 크지 않아요.",
  "Počítaj od {@0} po 10.": "{@0}부터 10까지 세어 보세요.",
  "Predstav si loptu, plechovku, krabicu, hraciu kocku alebo kornútok.": "공, 깡통, 상자, 주사위, 아이스크림콘을 떠올려 보세요.",
  "Pridávame, preto sčítame: ${@0} + {@1} = {@2}$. {@3} má {@4} {@5}.": "늘어나니까 더해요: ${@0} + {@1} = {@2}$. {@3}는 {@5} {@4}개를 가지고 있어요.",
  "Priestorové útvary": "입체도형",
  "Rovinné útvary": "평면도형",
  "Rozdiel dĺžok zistíš odčítaním.": "길이의 차이는 뺄셈으로 알 수 있어요.",
  "Rozlož číslo {@0}: ${@1} = {@2} + \\square$": "{@0}을 가르세요: ${@1} = {@2} + \\square$",
  "Sofia": "서아",
  "Spočítaj kocky v oboch pásoch a odčítaj.": "두 줄의 블록을 세고 빼세요.",
  "Spočítaj strany a vrcholy útvaru.": "도형의 변과 꼭짓점을 세어 보세요.",
  "Spočítal si len vrcholy na jednej stene. Kocka má vrcholy hore aj dole.": "한 면의 꼭짓점만 셌어요. 정육면체는 위에도 아래에도 꼭짓점이 있어요.",
  "To je dĺžka celého modrého pásu. Odčítaj od nej, koľko kociek má zelený pás.": "그건 파란 줄 전체의 길이예요. 거기에서 초록 줄의 블록 수를 빼세요.",
  "To je počet desiatok. Jednotky sú číslica vpravo.": "그건 십 모형의 수예요. 낱개는 오른쪽 숫자예요.",
  "To je počet jednotiek. Desiatky sú číslica vľavo.": "그건 낱개의 수예요. 십 모형은 왼쪽 숫자예요.",
  "Tomáš": "시우",
  "Toto je zvieratko, od ktorého hľadáme. Hľadáme jeho suseda.": "그건 기준이 되는 동물이에요. 그 옆에 있는 동물을 찾으세요.",
  "Toto zvieratko stojí vpravo. Vľavo je tá strana, kde rad začína.": "이 동물은 오른쪽에 있어요. 왼쪽은 줄이 시작하는 쪽이에요.",
  "Toto zvieratko stojí vľavo. Vpravo je tá strana, kde rad končí.": "이 동물은 왼쪽에 있어요. 오른쪽은 줄이 끝나는 쪽이에요.",
  "Trojuholník má 3 strany.": "삼각형은 변이 3개예요.",
  "Trojuholník má 3 vrcholy a 3 strany.": "삼각형은 꼭짓점이 3개, 변이 3개예요.",
  "Uberáme, preto odčítame: ${@0} - {@1} = {@2}$. Zostalo {@3} {@4} {@5}.": "줄어드니까 빼요: ${@0} - {@1} = {@2}$. {@3} {@5} {@4}개가 남았어요.",
  "Valec má hore aj dole kruh. Toto teleso má hore špičku.": "원기둥은 위와 아래가 모두 원이에요. 이 입체도형은 위가 뾰족해요.",
  "Vrchol je roh útvaru, strana je čiara medzi dvoma vrcholmi.": "꼭짓점은 도형의 뾰족한 모서리이고, 변은 두 꼭짓점 사이의 선이에요.",
  "Vypočítaj ${@0} + {@1}$.": "${@0} + {@1}$을 계산하세요.",
  "Vypočítaj ${@0} - {@1}$.": "${@0} - {@1}$을 계산하세요.",
  "Väčšie číslo leží na číselnom rade viac vpravo. Otvorená strana znaku smeruje k väčšiemu číslu.": "큰 수는 수의 순서에서 더 오른쪽에 있어요. 기호의 벌어진 쪽이 큰 수를 향해요.",
  "Vľavo je začiatok radu, vpravo jeho koniec.": "줄의 왼쪽이 시작이고, 오른쪽이 끝이에요.",
  "Z čísla {@0} sme použili {@1}. Koľko z neho ešte zostáva pridať?": "{@0}에서 {@1}은 이미 썼어요. 더 더해야 할 수는 얼마일까요?",
  "Z čísla {@0} sme ubrali {@1}. Koľko ešte treba ubrať?": "{@0}에서 {@1}을 뺐어요. 얼마를 더 빼야 할까요?",
  "Za číslom {@0} nasleduje {@1} a za ním {@2}.": "{@0} 다음에는 {@1}, 그다음에는 {@2}가 와요.",
  "Zisti, či čísla rastú alebo klesajú, a o koľko.": "수가 커지는지 작아지는지, 그리고 얼마씩 변하는지 알아보세요.",
  "Znak $=$ patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "$=$ 기호는 같은 두 수 사이에만 써요. 이 두 수는 달라요.",
  "Znak je otočený naopak. Otvorená strana znaku má smerovať k väčšiemu číslu.": "기호가 반대로 되어 있어요. 기호의 벌어진 쪽이 큰 수를 향해야 해요.",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vpravo od {@1}?": "동물들이 한 줄로 서 있어요: {@0} {@1} 바로 오른쪽에는 누가 있나요?",
  "Zvieratká stoja v rade: {@0} Kto stojí hneď vľavo od {@1}?": "동물들이 한 줄로 서 있어요: {@0} {@1} 바로 왼쪽에는 누가 있나요?",
  "Zvieratká stoja v rade: {@0} Kto stojí medzi {@1} a {@2}?": "동물들이 한 줄로 서 있어요: {@0} {@1}와 {@2} 사이에는 누가 있나요?",
  "ceruzka": "연필",
  "cukrík": "사탕",
  "cukríkov": "사탕",
  "cukríky": "사탕",
  "dal": "주었어요",
  "dala": "주었어요",
  "desiatka": "10",
  "desiatky": "10",
  "desiatok": "10",
  "dostal": "받았어요",
  "dostala": "받았어요",
  "dva pásy z kociek": "블록 두 줄",
  "guličiek": "구슬",
  "guličku": "구슬",
  "guličky": "구슬",
  "guma": "지우개",
  "guľa": "구",
  "jablko": "사과",
  "jablká": "사과",
  "jabĺk": "사과",
  "jednotiek": "1",
  "jednotka": "1",
  "jednotky": "1",
  "jej": "손에",
  "klesajú": "작아져요",
  "kociek": "블록",
  "kocka": "정육면체",
  "kocky": "블록",
  "kužeľ": "원뿔",
  "kváder": "직육면체",
  "líška": "여우",
  "líškou": "여우",
  "líšky": "여우",
  "mal": "가지고 있었어요",
  "mala": "가지고 있었어요",
  "mačka": "고양이",
  "mačkou": "고양이",
  "mačky": "고양이",
  "medveď": "곰돌이",
  "medveďa": "곰돌이",
  "medveďom": "곰돌이",
  "menšie": "작은",
  "modrý": "파랑",
  "mu": "손에",
  "myš": "생쥐",
  "myši": "생쥐",
  "myšou": "생쥐",
  "nálepiek": "스티커",
  "nálepku": "스티커",
  "nálepky": "스티커",
  "obrázok útvaru": "도형 그림",
  "pasteliek": "색연필",
  "pastelku": "색연필",
  "pastelky": "색연필",
  "pes": "강아지",
  "psa": "강아지",
  "psom": "강아지",
  "rastú": "커져요",
  "tento útvar": "이 도형",
  "toto teleso": "이 입체도형",
  "valec": "원기둥",
  "väčšie": "큰",
  "zajac": "토끼",
  "zajaca": "토끼",
  "zajacom": "토끼",
  "zelený": "초록",
  "{@0} je len to, o koľko má {@1} viac. Pripočítaj to k tomu, čo má {@2}.": "{@0}은 {@1}가 더 가진 개수일 뿐이에요. 그 수를 {@2}가 가진 개수에 더하세요.",
  "{@0} má {@1} {@2}, {@3} má {@4} {@5}. O koľko {@6} má {@7} viac?": "{@0}는 {@2} {@1}개, {@3}는 {@5} {@4}개를 가지고 있어요. {@7}는 {@6} 몇 개를 더 가지고 있나요?",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} viac. Koľko {@6} má {@7}?": "{@0}는 {@2} {@1}개를 가지고 있어요. {@3}는 {@5} {@4}개를 더 가지고 있어요. {@7}는 {@6} 몇 개를 가지고 있나요?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Koľko {@6} má teraz?": "{@0}는 {@3} {@2}개를 {@1}. 그리고 {@5}개를 더 {@4}. 지금 {@6} 몇 개를 가지고 있나요?",
  "{@0} {@1} {@2} {@3}. Kamarátom {@4} {@5} {@6}. Koľko {@7} {@8} zostalo?": "{@0}는 {@3} {@2}개를 {@1}. 친구들에게 {@6} {@5}개를 {@4}. {@7} 몇 개가 {@8} 남았나요?",
  "{@0} číslom {@1} je v číselnom rade číslo {@2}.": "수의 순서에서 {@1} {@0}에 오는 수는 {@2}예요.",
  "Červená stuha meria {@0} cm, modrá {@1} cm. O koľko centimetrov je červená stuha dlhšia?": "빨간 리본은 {@0} cm, 파란 리본은 {@1} cm예요. 빨간 리본은 몇 센티미터 더 길까요?",
  "Číselný rad od 0 do 20": "0부터 20까지의 수의 순서",
  "Čísla nesčítavaj. Hľadáš, koľko chýba od {@0} do {@1}.": "수를 더하지 마세요. {@0}에서 {@1}까지 얼마나 모자라는지 찾아야 해요.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby si dostal {@1}.": "수를 더하지 마세요. {@0}에 얼마를 더해야 {@1}이 되는지 찾아야 해요.",
  "Čísla nesčítavaj. Pýtame sa, o koľko má jedno dieťa viac – odčítaj menšie číslo od väčšieho.": "수를 더하지 마세요. 한 아이가 몇 개 더 많이 가지고 있는지 묻고 있어요. 큰 수에서 작은 수를 빼세요.",
  "Čísla sú rovnaké, preto ${@0} = {@1}$.": "두 수가 같으니까 ${@0} = {@1}$예요.",
  "Čísla {@0} vždy o 1: {@1}.": "수가 1씩 {@0}: {@1}.",
  "Číslo rozdeľ na desiatky a jednotky, napríklad $14 = 10 + 4$.": "수를 십 모형과 낱개로 나누세요. 예를 들어 $14 = 10 + 4$.",
  "Číslo {@0} leží na číselnom rade ďalej vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "수 {@0}이 수의 순서에서 더 오른쪽에 있으니까 더 커요. 그래서 ${@1} {@2} {@3}$.",
  "Štvorec má 4 rovnako dlhé strany.": "정사각형은 네 변의 길이가 모두 같아요.",
  "Štvorec má všetky štyri strany rovnako dlhé. Tu sú dve strany dlhšie.": "정사각형은 네 변의 길이가 모두 같아요. 여기서는 두 변이 더 길어요.",
  "štvorec": "정사각형",
  "žaba": "개구리",
  "žabou": "개구리",
  "žaby": "개구리",
  "„O {@0} viac“ znamená pridať {@1}: ${@2} + {@3} = {@4}$. {@5} má {@6} {@7}.": "“{@0}개 더 많다”는 {@1}을 더한다는 뜻이에요: ${@2} + {@3} = {@4}$. {@5}는 {@7} {@6}개를 가지고 있어요.",
  "„O {@0} viac“ znamená, že {@1} má viac ako {@2}. Treba pripočítať, nie odčítať.": "“{@0}개 더 많다”는 {@1}가 {@2}보다 더 많이 가지고 있다는 뜻이에요. 빼지 말고 더해야 해요.",
  "„O … viac“ znamená k číslu pripočítať.": "“…개 더 많다”는 그 수에 더한다는 뜻이에요."
 }
});
