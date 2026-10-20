/* 한국어: preklad js/rocniky/r2.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/r2/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "r2-cisla100": {
   "title": "100까지의 수",
   "summary": "십의 자리와 일의 자리, 수의 순서, 100까지의 수 비교하기.",
   "theory": [
    "<p>두 자리 수에는 <strong>십의 자리</strong>와 <strong>일의 자리</strong>가 있어요. 47은 십이 4개, 일이 7개예요:\n       $47 = 40 + 7$. 십이 10개이면 <strong>백</strong>이에요: $100$.</p>",
    {
     "fig": "r2-stovka",
     "caption": "100까지의 수 배열표. 한 줄에 수가 10개씩 있어요. 47 바로 아래에는 10 큰 수인 57이 있어요."
    },
    "<p><strong>크기 비교:</strong> 먼저 십의 자리를 비교해요. 십의 자리가 같으면 일의 자리를 비교해요.\n       십이 6개는 십이 5개보다 많으므로 $63 &gt; 58$이에요. 십의 자리가 같고 2가 5보다 작으므로 $42 &lt; 45$예요.</p>"
   ],
   "examples": [
    {
     "task": "71과 17의 크기를 비교하세요.",
     "steps": [
      "71은 십이 7개이고, 17은 십이 1개뿐이에요.",
      "<strong>$71 &gt; 17$</strong>"
     ]
    },
    {
     "task": "십이 6개, 일이 3개인 수는 무엇인가요?",
     "steps": [
      "십이 6개면 60이고, 여기에 일이 3개 더해져요.",
      "$60 + 3 = 63$.",
      "<strong>63이에요.</strong>"
     ]
    }
   ]
  },
  "r2-scitanie": {
   "title": "100까지의 덧셈과 뺄셈",
   "summary": "몇십의 계산, 받아올림, 수직선에서 뛰어 세기.",
   "theory": [
    "<p><strong>몇십</strong>끼리는 일처럼 더해요: $30 + 40$은 십 3개와 십 4개, 즉 십 7개이므로 $70$이에요.\n       마찬가지로 $90 - 60 = 30$이에요.</p>",
    "<p>더 큰 수에서는 두 번째 수를 <strong>십의 자리와 일의 자리</strong>로 나누어 차례로 더해요.\n       $38 + 25$에서는 먼저 20을 더하고 그다음 5를 더해요.</p>",
    {
     "fig": "r2-skoky",
     "caption": "$38 + 25$: 20만큼 뛰면 58, 5만큼 뛰면 63에 도착해요. 그래서 $38 + 25 = 63$이에요."
    },
    "<p>뺄셈도 같은 방법으로 해요: $72 - 34$는 먼저 $72 - 30 = 42$, 그다음 $42 - 4 = 38$이에요.\n       결과는 덧셈으로 확인할 수 있어요: $38 + 34 = 72$.</p>"
   ],
   "examples": [
    {
     "task": "$47 + 36$을 계산하세요.",
     "steps": [
      "36을 30과 6으로 나눠요.",
      "$47 + 30 = 77$.",
      "$77 + 6 = 83$.",
      "<strong>답: 83</strong>"
     ]
    },
    {
     "task": "$81 - 25$를 계산하세요.",
     "steps": [
      "25를 20과 5로 나눠요.",
      "$81 - 20 = 61$.",
      "$61 - 5 = 56$.",
      "확인: $56 + 25 = 81$. <strong>답: 56</strong>"
     ]
    }
   ]
  },
  "r2-nasobenie": {
   "title": "곱셈과 나눗셈",
   "summary": "같은 수를 여러 번 더하는 곱셈, 똑같이 나누는 나눗셈.",
   "theory": [
    "<p><strong>곱셈</strong>은 같은 수를 여러 번 더하는 것을 짧게 쓴 것이에요. $4 + 4 + 4$ 대신 $3 \\cdot 4$\n       (3 곱하기 4)라고 써요. 곱하는 수들을 <em>인수</em>라고 하고, 결과를 <em>곱</em>이라고 해요.</p>",
    {
     "fig": "r2-pole",
     "caption": "점이 4개씩 3줄: $4 + 4 + 4 = 3 \\cdot 4 = 12$. 세로로 읽으면 점이 3개씩 4줄이에요: $4 \\cdot 3 = 12$."
    },
    "<p>곱하는 순서는 바꾸어도 돼요: $3 \\cdot 4 = 4 \\cdot 3$. 어떤 수에 1을 곱하면 그대로이고($7 \\cdot 1 = 7$),\n       어떤 수에 0을 곱하면 0이에요($5 \\cdot 0 = 0$).</p>",
    "<p><strong>나눗셈</strong>은 똑같이 나누는 것이에요. 사탕 12개를 어린이 3명에게 똑같이 나누어 주면 한 명이\n       $12 : 3 = 4$개씩 받아요. 나눗셈은 곱셈의 반대예요: $3 \\cdot 4 = 12$이므로 $12 : 3 = 4$예요.</p>"
   ],
   "examples": [
    {
     "task": "$5 + 5 + 5 + 5$를 곱셈식으로 쓰고 계산하세요.",
     "steps": [
      "5를 네 번 더해요.",
      "$4 \\cdot 5 = 20$.",
      "<strong>답: 20</strong>"
     ]
    },
    {
     "task": "꽃 15송이로 5송이씩 꽃다발을 만들어요. 꽃다발은 몇 개가 될까요?",
     "steps": [
      "15 안에 5가 몇 번 들어가는지 찾아요.",
      "$3 \\cdot 5 = 15$이므로 $15 : 5 = 3$.",
      "<strong>꽃다발은 3개가 돼요.</strong>"
     ]
    }
   ]
  },
  "r2-nasobilka": {
   "title": "배수와 곱셈구구",
   "summary": "10 · 10까지의 곱셈구구, 수의 배수, 곱셈구구를 이용한 나눗셈.",
   "theory": [
    "<p>어떤 수에 1, 2, 3, …을 차례로 곱하면 그 수의 <strong>배수</strong>를 얻어요. 3의 배수는\n       3, 6, 9, 12, 15, 18, 21, 24, 27, 30이에요. 수직선에서 항상 3씩 뛰어요.</p>",
    {
     "fig": "r2-nasobky",
     "caption": "3의 배수: 한 번 뛸 때마다 3만큼 가요. 네 번 뛰면 $4 \\cdot 3 = 12$에 도착해요."
    },
    "<p>유용한 요령: 2의 배수는 짝수이고, 5의 배수는 끝자리가 0 또는 5이고, 10의 배수는 끝자리가 0이에요.\n       $6 \\cdot 4$가 생각나지 않으면 이렇게 해 보세요: $5 \\cdot 4 = 20$에 4를 한 번 더 더하면 $24$예요.</p>",
    "<p>곱셈식 하나로 나눗셈식 두 개를 바로 알 수 있어요: $6 \\cdot 4 = 24$에서 $24 : 4 = 6$과 $24 : 6 = 4$가 나와요.</p>"
   ],
   "examples": [
    {
     "task": "$7 \\cdot 5$를 계산하세요.",
     "steps": [
      "5의 배수: 5, 10, 15, 20, 25, 30, 35.",
      "일곱 번째 배수는 35예요.",
      "<strong>$7 \\cdot 5 = 35$</strong>"
     ]
    },
    {
     "task": "$32 : 4$를 계산하세요.",
     "steps": [
      "4를 곱해서 32가 되는 수를 찾아요.",
      "$8 \\cdot 4 = 32$.",
      "<strong>$32 : 4 = 8$</strong>"
     ]
    }
   ]
  },
  "r2-slovne": {
   "title": "문장제와 식 세우기",
   "summary": "문장제를 식으로: 덧셈, 뺄셈, 곱셈, 나눗셈.",
   "theory": [
    "<p>문장제에서는 먼저 <strong>알고 있는 것</strong>과 <strong>구하는 것</strong>을 적어요. 그다음 알맞은\n       연산을 골라 계산하고, 완전한 문장으로 <strong>답</strong>을 써요.</p>",
    "<ul><li><em>받았다, 늘었다, 모두, … 더 많이</em> → 덧셈,</li>\n       <li><em>주었다, 남았다, … 더 적게, 몇 개 더 많은가</em> → 뺄셈,</li>\n       <li><em>…씩 (같은 수를 여러 번)</em> → 곱셈,</li>\n       <li><em>똑같이 나누었다, …씩 몇 묶음</em> → 나눗셈.</li></ul>",
    "<p>문제를 이렇게 <strong>정리</strong>할 수 있어요:<br>민준이가 가진 것 … 구슬 35개<br>잃어버린 것 … 구슬 12개<br>\n       남은 것 … 구슬 ?개<br>$35 - 12 = 23$<br>답: 민준이에게 구슬 23개가 남았어요.</p>"
   ],
   "examples": [
    {
     "task": "서연이는 스티커 28장을 가지고 있어요. 도윤이는 서연이보다 15장 더 많이 가지고 있어요. 도윤이는 스티커를 몇 장 가지고 있나요?",
     "steps": [
      "“15장 더 많이”는 28에 15를 더한다는 뜻이에요.",
      "$28 + 15 = 43$.",
      "<strong>답: 도윤이는 스티커 43장을 가지고 있어요.</strong>"
     ]
    },
    {
     "task": "엄마가 접시 4개에 사과를 5개씩 놓았어요. 접시에 놓인 사과는 모두 몇 개인가요?",
     "steps": [
      "5개씩 4번은 곱셈이에요.",
      "$4 \\cdot 5 = 20$.",
      "<strong>답: 접시에 사과가 20개 있어요.</strong>"
     ]
    }
   ]
  },
  "r2-ciary": {
   "title": "점, 선분, 직선, 곡선",
   "summary": "여러 가지 선을 구별하고, 선분의 길이를 재고 비교해요.",
   "theory": [
    "<p><strong>점</strong>은 작은 점으로 그리고 대문자로 이름을 붙여요. 예를 들어 점 $A$.\n       <strong>선분</strong>은 두 점을 곧게 이은 선이에요. 예를 들어 선분 $CD$. 점 $C$와 $D$는 선분의 양 끝점이에요.</p>",
    "<p><strong>직선</strong>은 시작도 끝도 없는 곧은 선으로, 양쪽으로 끝없이 늘일 수 있어요.\n       소문자로 이름을 붙여요. 예를 들어 직선 $p$. <strong>곡선</strong>은 곧지 않고 휘어진 선이에요.</p>",
    {
     "fig": "r2-ciary",
     "caption": "점, 선분, 직선, 곡선. 곧은 선은 자를 대고 그려요."
    },
    "<p>선분의 길이는 자로 <strong>센티미터</strong> 단위로 재요. 자의 눈금 0을 끝점 $A$에 맞추고\n       점 $B$에 있는 눈금을 읽어요.</p>",
    {
     "fig": "r2-pravitko",
     "caption": "선분 $AB$는 0에서 시작해서 7에서 끝나요. 길이는 $7\\,\\text{cm}$예요."
    }
   ],
   "examples": [
    {
     "task": "양 끝점이 두 개 있는 선은 무엇인가요?",
     "steps": [
      "점은 그냥 점일 뿐이고, 직선과 곡선에는 끝점이 없어요.",
      "<strong>선분에는 끝점이 두 개 있어요.</strong>"
     ]
    },
    {
     "task": "선분 $AB$의 길이는 $9\\,\\text{cm}$, 선분 $CD$의 길이는 $4\\,\\text{cm}$예요. 선분 $AB$는 몇 cm 더 긴가요?",
     "steps": [
      "비교하는 문제이므로 빼요.",
      "$9 - 4 = 5$.",
      "<strong>선분 $AB$가 $5\\,\\text{cm}$ 더 길어요.</strong>"
     ]
    }
   ]
  },
  "r2-jednotky": {
   "title": "길이, 시간, 돈의 단위",
   "summary": "센티미터와 미터, 시와 분, 유로와 센트.",
   "theory": [
    "<p><strong>길이:</strong> 짧은 물건은 센티미터(cm)로, 더 긴 물건은 미터(m)로 재요.\n       $1\\,\\text{m} = 100\\,\\text{cm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$.</p>",
    "<p><strong>시간:</strong> 하루는 24시간이고, 1시간(h)은 60분(min)이에요. 30분은 반 시간, 15분은 4분의 1시간이에요.\n       시계에서 <em>짧은바늘</em>은 시를, <em>긴바늘</em>은 분을 가리켜요.</p>",
    {
     "fig": "r2-hodiny",
     "caption": "왼쪽은 7:00이고 긴바늘이 12를 가리켜요. 오른쪽은 2:30(2시 반)이고 긴바늘은 6을, 짧은바늘은 2와 3 사이를 가리켜요."
    },
    "<p><strong>돈:</strong> 유로(€)와 센트(c)로 돈을 내요. $1\\,\\text{€} = 100$센트.\n       동전은 1 c, 2 c, 5 c, 10 c, 20 c, 50 c, 1 €, 2 €가 있어요.</p>",
    {
     "fig": "r2-mince",
     "caption": "가장 작은 값부터 가장 큰 값까지의 유로 동전."
    }
   ],
   "examples": [
    {
     "task": "1시간 15분은 몇 분인가요?",
     "steps": [
      "1시간은 60분이에요.",
      "$60 + 15 = 75$.",
      "<strong>75분이에요.</strong>"
     ]
    },
    {
     "task": "지갑에 50 c, 20 c, 20 c 동전이 있어요. 1유로가 되려면 몇 센트가 모자라나요?",
     "steps": [
      "$50 + 20 + 20 = 90$센트.",
      "1유로는 100센트예요: $100 - 90 = 10$.",
      "<strong>10센트가 모자라요.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{dm} = 10\\,\\text{cm}$, teda ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$.": "$1\\,\\text{dm} = 10\\,\\text{cm}$이므로 ${@0}\\,\\text{dm} = {@1} \\cdot 10\\,\\text{cm} = {@2}\\,\\text{cm}$예요.",
  "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. Chýba ${@2}\\,\\text{cm}$.": "$1\\,\\text{m} = 100\\,\\text{cm}$, $100 - {@0} = {@1}$. ${@2}\\,\\text{cm}$가 모자라요.",
  "${@0} - {@1} = {@2}$. Úsečka $KL$ je o ${@3}\\,\\text{cm}$ dlhšia.": "${@0} - {@1} = {@2}$. 선분 $KL$이 ${@3}\\,\\text{cm}$ 더 길어요.",
  "${@0} : {@1} = {@2}$, teda ${@3} \\cdot {@4} = {@5}$.": "${@0} : {@1} = {@2}$이므로 ${@3} \\cdot {@4} = {@5}$예요.",
  "${@0} = {@1}$ centov.": "${@0} = {@1}$센트.",
  "${@0} \\cdot {@1} = {@2}$, preto ${@3} : {@4} = {@5}$.": "${@0} \\cdot {@1} = {@2}$이므로 ${@3} : {@4} = {@5}$예요.",
  "${@0} \\cdot {@1} = {@2}$, preto {@3} je násobok čísla {@4}. Ostatné čísla v násobilke čísla {@5} nie sú.": "${@0} \\cdot {@1} = {@2}$이므로 {@3}은 {@4}의 배수예요. 다른 수들은 {@5}단 곱셈구구에 없어요.",
  "1 dm je 10 cm.": "1 dm는 10 cm예요.",
  "1 euro je 100 centov: $100 - {@0} = {@1}$. Chýba {@2} {@3}.": "1유로는 100센트예요: $100 - {@0} = {@1}$. {@2} {@3}가 모자라요.",
  "1 hodina": "1시간",
  "1 hodina je 60 minút: $60 + {@0} = {@1}$ minút.": "1시간은 60분이에요: $60 + {@0} = {@1}$분.",
  "1 m je 100 cm.": "1 m는 100 cm예요.",
  "1 € = 100 centov.": "1 € = 100센트.",
  "Aká dlhá je úsečka $AB$? Odpoveď napíš v centimetroch.{@0}": "선분 $AB$의 길이는 얼마일까요? 센티미터로 답하세요.{@0}",
  "Bod $A$ je pri čísle {@0}, bod $B$ pri čísle {@1}. ${@2} - {@3} = {@4}$, úsečka meria ${@5}\\,\\text{cm}$.": "점 $A$는 {@0}에, 점 $B$는 {@1}에 있어요. ${@2} - {@3} = {@4}$, 선분의 길이는 ${@5}\\,\\text{cm}$예요.",
  "Bod je len jedna malá bodka. Na obrázku je čiara.": "점은 작은 점 하나일 뿐이에요. 그림에 있는 것은 선이에요.",
  "Bod, úsečka, priamka a krivá čiara": "점, 선분, 직선, 곡선",
  "Celá dĺžka je súčet dĺžok všetkých úsečiek.": "전체 길이는 모든 선분의 길이의 합이에요.",
  "Celá lomená čiara je dlhšia ako každá jej časť. Dĺžky úsečiek sčítaj, nie odčítaj.": "꺾은선 전체는 각 부분보다 길어요. 선분의 길이를 빼지 말고 더하세요.",
  "Centimeter je veľmi malý, asi ako šírka prsta. Tu treba väčšiu jednotku.": "센티미터는 아주 작아요. 손가락 폭 정도예요. 여기서는 더 큰 단위가 필요해요.",
  "Centov máš 100 alebo viac. Zo 100 centov je ďalšie celé euro – pripočítaj ho k eurám.": "센트가 100 이상이에요. 100센트는 1유로가 되니까 유로에 더하세요.",
  "Ceny píšeme v eurách.": "가격은 유로로 써요.",
  "Ceruzka je dlhá asi 15 …": "연필의 길이는 약 15 …",
  "Cez dva rôzne body prechádza práve jedna priamka.": "서로 다른 두 점을 지나는 직선은 딱 하나예요.",
  "Chýbajúce číslo zistíme odčítaním: ${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "빠진 수는 뺄셈으로 구해요: ${@0} - {@1} = {@2}$. 확인: ${@3} + {@4} = {@5}$.",
  "Delenie nie je odčítanie. Hľadaj číslo, ktoré krát {@0} dá {@1}.": "나눗셈은 뺄셈이 아니에요. {@0}을 곱해서 {@1}이 되는 수를 찾으세요.",
  "Delíme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "똑같은 {@1} {@0}개로 나눠요: ${@2} : {@3} = {@4}$, 왜냐하면 ${@5} \\cdot {@6} = {@7}$이니까요.",
  "Desať nepripočítavaj. Každý decimeter má 10 cm, preto počet decimetrov násob desiatimi.": "10을 더하지 마세요. 1데시미터는 10 cm이므로 데시미터의 수에 10을 곱하세요.",
  "Desiatky a jednotky nesčítavaj ako obyčajné čísla. Desiatky napíš na prvé miesto a jednotky za ne.": "십의 자리와 일의 자리를 보통 수처럼 더하지 마세요. 십의 자리 숫자를 먼저 쓰고 그 뒤에 일의 자리 숫자를 쓰세요.",
  "Desiatky sú rovnaké, porovnáme jednotky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "십의 자리가 같으니 일의 자리를 비교해요: {@0}과 {@1}. 그래서 ${@2} {@3} {@4}$.",
  "Deň (s nocou) má 24 hodín.": "하루(밤 포함)는 24시간이에요.",
  "Dlhšie veci meriame v metroch.": "더 긴 것은 미터로 재요.",
  "Dlhší čas meriame v hodinách.": "더 긴 시간은 시간 단위로 재요.",
  "Dom je vysoký asi 10 …": "집의 높이는 약 10 …",
  "Doplň chýbajúce číslo: ${@0} - \\square = {@1}$": "빈칸에 알맞은 수를 쓰세요: ${@0} - \\square = {@1}$",
  "Doplň chýbajúce číslo: ${@0} \\cdot \\square = {@1}$": "빈칸에 알맞은 수를 쓰세요: ${@0} \\cdot \\square = {@1}$",
  "Doplň chýbajúci násobok čísla {@0}: {@1}": "빠진 {@0}의 배수를 쓰세요: {@1}",
  "Doplň správnu jednotku: {@0}": "알맞은 단위를 고르세요: {@0}",
  "Doplň číslo, ktoré chýba v rade: {@0}": "빠진 수를 쓰세요: {@0}",
  "Dĺžky nesčítavaj. Pýtame sa, o koľko je jedna úsečka dlhšia – odčítaj.": "길이를 더하지 마세요. 한 선분이 얼마나 더 긴지 묻고 있어요. 빼세요.",
  "Dĺžky sčítame: ${@0} + {@1} = {@2}$. Lomená čiara meria ${@3}\\,\\text{cm}$.": "길이를 더해요: ${@0} + {@1} = {@2}$. 꺾은선의 길이는 ${@3}\\,\\text{cm}$예요.",
  "Euromince": "유로 동전",
  "Hodina je dlhý čas. Tu treba kratšiu jednotku.": "1시간은 긴 시간이에요. 여기서는 더 짧은 단위가 필요해요.",
  "Hodina má 60 minút. Polovica z 60 je 30, štvrtina je 15.": "1시간은 60분이에요. 60의 절반은 30, 4분의 1은 15예요.",
  "Hodina má 60 minút. {@0} je {@1} minút.": "1시간은 60분이에요. {@0}은 {@1}분이에요.",
  "Hodina nemá 100 minút, ale 60 minút.": "1시간은 100분이 아니라 60분이에요.",
  "Hodinu musíš najprv premeniť na minúty: 1 hodina je 60 minút.": "먼저 시간을 분으로 바꾸세요: 1시간은 60분이에요.",
  "Hodiny ukazujú 7:00 a 2:30": "7:00과 2:30을 가리키는 시계",
  "Hľadaj suseda čísla v číselnom rade.": "수의 순서에서 그 수의 이웃을 찾으세요.",
  "Je to dĺžka, čas, alebo cena? A je to krátke, alebo dlhé?": "길이일까요, 시간일까요, 가격일까요? 그리고 짧을까요, 길까요?",
  "Je to len jedna bodka, teda bod.": "점 하나뿐이니까 점이에요.",
  "Je čiara rovná? Má krajné body?": "선이 곧은가요? 끝점이 있나요?",
  "Jednotky dali spolu viac ako 10, ale zabudol si pripočítať túto novú desiatku.": "일의 자리끼리 더해서 10이 넘었는데, 새로 생긴 십을 더하는 것을 잊었어요.",
  "Každé ďalšie číslo je o {@0} väčšie.": "다음 수는 항상 {@0}씩 커요.",
  "Keď je viackrát to isté číslo, môžeš násobiť.": "같은 수를 여러 번 더할 때는 곱셈을 쓸 수 있어요.",
  "Kniha stojí asi 12 …": "책 한 권의 가격은 약 12 …",
  "Koľko centimetrov je ${@0}\\,\\text{dm}$?": "${@0}\\,\\text{dm}$는 몇 센티미터일까요?",
  "Koľko centimetrov je od {@0} po {@1}? Vypočítaj ${@2} - {@3}$.": "{@0}에서 {@1}까지는 몇 센티미터일까요? ${@2} - {@3}$을 계산하세요.",
  "Koľko centimetrov má 1 meter?": "1미터는 몇 센티미터일까요?",
  "Koľko centov je spolu?{@0}": "모두 몇 센트일까요?{@0}",
  "Koľko centov je v ostatných minciach?": "나머지 동전은 몇 센트일까요?",
  "Koľko centov má 1 euro?": "1유로는 몇 센트일까요?",
  "Koľko eur je v minciach 1 € a 2 €?": "1 €와 2 € 동전은 모두 몇 유로일까요?",
  "Koľko hodín má jeden deň?": "하루는 몇 시간일까요?",
  "Koľko je $100 - {@0}$?": "$100 - {@0}$은 얼마일까요?",
  "Koľko je $60 + {@0}$?": "$60 + {@0}$은 얼마일까요?",
  "Koľko je ${@0} \\cdot {@1}$?": "${@0} \\cdot {@1}$은 얼마일까요?",
  "Koľko je hodín?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"ciferník hodín\">{@0}</svg>": "몇 시일까요?<svg viewBox=\"0 0 180 180\" width=\"180\" role=\"img\" aria-label=\"시계 문자판\">{@0}</svg>",
  "Koľko je skupín?": "묶음은 몇 개일까요?",
  "Koľko je spolu {@0}? <span class=\"emoji-row\">{@1}</span>": "{@0}, 모두 몇 개일까요? <span class=\"emoji-row\">{@1}</span>",
  "Koľko je to spolu eur a centov? Napíš dve čísla oddelené bodkočiarkou (napr. 2; 35).{@0}": "모두 몇 유로 몇 센트일까요? 두 수를 세미콜론으로 구분해서 쓰세요(예: 2; 35).{@0}",
  "Koľko krajných bodov má priamka?": "직선의 끝점은 몇 개일까요?",
  "Koľko krajných bodov má úsečka?": "선분의 끝점은 몇 개일까요?",
  "Koľko kúskov je v jednej skupine?": "한 묶음에는 몇 개가 있을까요?",
  "Koľko minút je 1 hodina a {@0} minút?": "1시간 {@0}분은 몇 분일까요?",
  "Koľko minút je {@0}?": "{@0}은 몇 분일까요?",
  "Koľko minút má 1 hodina?": "1시간은 몇 분일까요?",
  "Koľko priamok môžeš nakresliť cez dva rôzne body?": "서로 다른 두 점을 지나는 직선은 몇 개 그을 수 있을까요?",
  "Koľkokrát musíš sčítať {@0}, aby si dostal {@1}?": "{@1}이 되려면 {@0}을 몇 번 더해야 할까요?",
  "Koľkokrát sa opakuje to isté číslo?": "같은 수가 몇 번 반복되나요?",
  "Koľkokrát sa v súčte opakuje číslo {@0}?": "합에서 수 {@0}이 몇 번 반복되나요?",
  "Krivá čiara je čiara. Tu je len jedna bodka.": "곡선은 선이에요. 여기에는 점 하나만 있어요.",
  "Krivá čiara sa zatáča. Táto čiara je rovná.": "곡선은 휘어 있어요. 이 선은 곧아요.",
  "Krátka ručička je ešte len medzi {@0} a {@1}. Kým nedôjde k {@2}, platí menšia hodina.": "짧은바늘은 아직 {@0}과 {@1} 사이에 있어요. {@2}에 닿기 전까지는 작은 쪽 시각이에요.",
  "Krátka ručička ukazuje hodiny, dlhá minúty. Keď je dlhá na 6, je pol.": "짧은바늘은 시, 긴바늘은 분을 나타내요. 긴바늘이 6에 있으면 30분이에요.",
  "Krátka ručička {@0}, dlhá ručička ukazuje na {@1}, teda {@2} minút. Je {@3} ({@4}).": "짧은바늘은 {@0}, 긴바늘은 {@1}을 가리키니까 {@2}분이에요. 지금은 {@3}({@4})이에요.",
  "Krátke veci meriame v centimetroch.": "짧은 것은 센티미터로 재요.",
  "Krátky čas meriame v minútach.": "짧은 시간은 분으로 재요.",
  "Ktoré celé desiatky sú v čísle {@0}? (Pri čísle 36 by to bolo 30.)": "{@0}에는 몇십이 들어 있을까요? (36이라면 30이에요.)",
  "Ktoré z týchto čísel je násobkom čísla {@0}?": "다음 중 {@0}의 배수는 어느 것일까요?",
  "Ktoré číslo je o {@0} {@1} ako {@2}?": "{@2}보다 {@0} {@1} 수는 무엇일까요?",
  "Ktoré číslo krát {@0} dá {@1}?": "{@0}을 곱해서 {@1}이 되는 수는 무엇일까요?",
  "Ktoré číslo má {@0} {@1} a {@2} {@3}?": "{@1}이 {@0}개, {@3}이 {@2}개인 수는 무엇일까요?",
  "Ktorú počtovú operáciu použiješ?": "어떤 연산을 쓸까요?",
  "Lomená čiara sa skladá z dvoch úsečiek. Prvá meria ${@0}\\,\\text{cm}$, druhá ${@1}\\,\\text{cm}$. Aká dlhá je celá lomená čiara (v cm)?": "꺾은선은 선분 두 개로 되어 있어요. 첫 번째는 ${@0}\\,\\text{cm}$, 두 번째는 ${@1}\\,\\text{cm}$예요. 꺾은선 전체의 길이는 몇 cm일까요?",
  "Meter je asi taký dlhý ako veľký krok. Tu je to priveľa, treba menšiu jednotku.": "1미터는 큰 걸음 하나 정도의 길이예요. 여기서는 너무 커요. 더 작은 단위가 필요해요.",
  "Mince 1 € a 2 € maj zvlášť, centy sčítaj zvlášť. 100 centov je 1 euro.": "유로 동전(1 €, 2 €)은 따로, 센트는 따로 더하세요. 100센트는 1유로예요.",
  "Minúta je krátky čas. Tu treba dlhšiu jednotku.": "1분은 짧은 시간이에요. 여기서는 더 긴 단위가 필요해요.",
  "Máš {@0} {@1}. Koľko centov ti chýba do 1 eura?": "{@0} {@1}가 있어요. 1유로가 되려면 몇 센트가 더 있어야 할까요?",
  "Najprv odčítaj desiatky, potom jednotky.": "먼저 몇십을 빼고, 그다음 일의 자리를 빼세요.",
  "Najprv odčítaj desiatky: koľko je ${@0} - {@1}$?": "먼저 몇십을 빼세요: ${@0} - {@1}$은 얼마일까요?",
  "Najprv odčítame desiatky: ${@0} - {@1} = {@2}$. Potom jednotky: ${@3} - {@4} = {@5}$.": "먼저 몇십을 빼요: ${@0} - {@1} = {@2}$. 그다음 일의 자리: ${@3} - {@4} = {@5}$.",
  "Najprv porovnaj desiatky. Ak sú rovnaké, porovnaj jednotky.": "먼저 십의 자리를 비교하세요. 같으면 일의 자리를 비교하세요.",
  "Najprv premeň hodinu na minúty a potom pripočítaj.": "먼저 시간을 분으로 바꾼 다음 더하세요.",
  "Najprv pripočítaj desiatky: koľko je ${@0} + {@1}$?": "먼저 몇십을 더하세요: ${@0} + {@1}$은 얼마일까요?",
  "Najprv pripočítame desiatky: ${@0} + {@1} = {@2}$. Potom jednotky: ${@3} + {@4} = {@5}$.": "먼저 몇십을 더해요: ${@0} + {@1} = {@2}$. 그다음 일의 자리: ${@3} + {@4} = {@5}$.",
  "Neodčítavaj. Cukríky rozdeľujeme rovnako, to je delenie.": "빼지 마세요. 사탕을 똑같이 나누는 것은 나눗셈이에요.",
  "Neodčítavaj. Hľadáš číslo, ktoré krát {@0} dá {@1}.": "빼지 마세요. {@0}을 곱해서 {@1}이 되는 수를 찾아야 해요.",
  "Neodčítavaj. Keď rozdeľujeme rovnako, delíme.": "빼지 마세요. 똑같이 나눌 때는 나눗셈을 해요.",
  "Neodčítavaj. Zisťujeme, koľkokrát sa {@0} zmestí do {@1}, to je delenie.": "빼지 마세요. {@1} 안에 {@0}이 몇 번 들어가는지 알아보는 것은 나눗셈이에요.",
  "Nesčítavaj počet sčítancov a číslo {@0}. Číslo {@1} sa opakuje {@2}-krát – to je násobenie.": "더하는 수의 개수와 수 {@0}을 더하지 마세요. 수 {@1}이 {@2}번 반복되니까 곱셈이에요.",
  "Násobenie použiješ, keď máš viackrát po rovnako.": "같은 수씩 여러 번 있을 때는 곱셈을 써요.",
  "Násobky {@0} rastú vždy o {@1}: {@2}. Chýba ${@3} \\cdot {@4} = {@5}$.": "{@0}의 배수는 항상 {@1}씩 커져요: {@2}. 빠진 수는 ${@3} \\cdot {@4} = {@5}$예요.",
  "Násobky {@0}: {@1}. Teda ${@2} \\cdot {@3} = {@4}$.": "{@0}의 배수: {@1}. 그러므로 ${@2} \\cdot {@3} = {@4}$예요.",
  "Násobky čísla 3 na číselnom rade": "수직선 위의 3의 배수",
  "O koľko je {@0} viac ako {@1}?": "{@0}은 {@1}보다 얼마나 더 클까요?",
  "Od {@0} sme ubrali toľko, koľko je ${@1} - {@2} = {@3}$. Skúška: ${@4} - {@5} = {@6}$.": "{@0}에서 ${@1} - {@2} = {@3}$만큼 뺐어요. 확인: ${@4} - {@5} = {@6}$.",
  "Odčítanie použiješ, keď niečo ubudne.": "무언가가 줄어들 때는 뺄셈을 써요.",
  "Otázka „o koľko viac“ sa rieši odčítaním väčšieho a menšieho čísla.": "“얼마나 더 많은가” 하는 문제는 큰 수에서 작은 수를 빼서 풀어요.",
  "Palec na ruke je dlhý asi 5 …": "엄지손가락의 길이는 약 5 …",
  "Pol hodiny": "반 시간",
  "Porovnáme desiatky: {@0} a {@1}. Preto ${@2} {@3} {@4}$.": "십의 자리를 비교해요: {@0}과 {@1}. 그래서 ${@2} {@3} {@4}$.",
  "Porovnávame, preto odčítame: {@0} {@1} má o {@2} {@3} viac.": "비교하니까 빼요: {@0} {@1}는 {@3} {@2}개를 더 가지고 있어요.",
  "Posunul si sa na opačnú stranu. Menšie číslo dostaneš odčítaním.": "반대쪽으로 움직였어요. 더 작은 수는 빼서 구해요.",
  "Posunul si sa na opačnú stranu. Väčšie číslo dostaneš pripočítaním.": "반대쪽으로 움직였어요. 더 큰 수는 더해서 구해요.",
  "Pozor, úsečka nezačína na nule. Spočítaj centimetre medzi A a B.": "조심하세요. 선분이 0에서 시작하지 않아요. A와 B 사이의 센티미터를 세어 보세요.",
  "Pozri sa na dve susedné čísla. O koľko sa líšia?": "이웃한 두 수를 보세요. 얼마나 차이가 나나요?",
  "Pozri sa presne, na ktoré číslo ukazuje krátka ručička.": "짧은바늘이 정확히 어느 수를 가리키는지 보세요.",
  "Pozri sa, pri ktorom čísle je bod B.": "점 B가 어느 수에 있는지 보세요.",
  "Počet skupín a počet v jednej skupine nesčítavaj. Rovnaké skupiny spočítaš násobením.": "묶음의 수와 한 묶음 안의 개수를 더하지 마세요. 똑같은 묶음은 곱셈으로 세요.",
  "Počet tanierov a počet na jednom tanieri nesčítavaj. Na každom tanieri je rovnako – násob.": "접시의 수와 한 접시 위의 개수를 더하지 마세요. 접시마다 똑같이 있으니까 곱하세요.",
  "Počítaj s desiatkami ako s jednotkami: 3 desiatky + 4 desiatky = 7 desiatok.": "몇십은 일처럼 계산하세요: 십 3개 + 십 4개 = 십 7개.",
  "Počítal si, akoby mala hodina 100 minút. Hodina má len 60 minút.": "1시간이 100분인 것처럼 계산했어요. 1시간은 60분이에요.",
  "Pravítko a úsečka AB": "자와 선분 AB",
  "Prejdi násobky čísla {@0}, kým nenájdeš {@1}.": "{@1}이 나올 때까지 {@0}의 배수를 차례로 말해 보세요.",
  "Prestávka trvá 10 …": "쉬는 시간은 10 …",
  "Prečítal si len číslo pri bode B. Úsečka nezačína na nule, preto odčítaj číslo pri bode A.": "점 B의 수만 읽었어요. 선분이 0에서 시작하지 않으니까 점 A의 수를 빼세요.",
  "Pri jednotkách si odčítal obrátene ({@0} − {@1}). Keď jednotky nestačia, prejdi cez desiatku: uber najprv desiatky, potom jednotky.": "일의 자리를 거꾸로 뺐어요({@0} − {@1}). 일의 자리가 모자라면 먼저 몇십을 빼고 그다음 일의 자리를 빼세요.",
  "Pri ktorom čísle na pravítku je bod A?": "점 A는 자의 어느 수에 있을까요?",
  "Pri ktorom čísle na pravítku je bod B?": "점 B는 자의 어느 수에 있을까요?",
  "Priamka je rovná čiara. Tu je len jedna bodka.": "직선은 곧은 선이에요. 여기에는 점 하나만 있어요.",
  "Priamka je rovná. Táto čiara sa zatáča.": "직선은 곧아요. 이 선은 휘어 있어요.",
  "Priamka nemá krajné body. Táto čiara má dva krajné body, kde začína a končí.": "직선은 끝점이 없어요. 이 선은 시작하고 끝나는 두 끝점이 있어요.",
  "Priamka nemá začiatok ani koniec, nemá žiadny krajný bod.": "직선은 시작도 끝도 없어서 끝점이 하나도 없어요.",
  "Pribudlo → sčítanie, ubudlo → odčítanie, viackrát po rovnako → násobenie.": "늘어남 → 덧셈, 줄어듦 → 뺄셈, 같은 수씩 여러 번 → 곱셈.",
  "Pribudlo, preto sčítame.": "늘어났으니까 더해요.",
  "Pridávame, preto sčítame: {@0} {@1} má {@2} {@3}.": "늘어나니까 더해요: {@0} {@1}는 {@3} {@2}개를 가지고 있어요.",
  "Pripočítal si len desiatky. Nezabudni pridať aj {@0} {@1}.": "몇십만 더했어요. 일의 자리 수 {@0}도 더하는 것을 잊지 마세요.",
  "Pripočítavaj {@0} toľkokrát, koľko je {@1}, alebo si spomeň na násobilku čísla {@2}.": "{@0}을 {@1}번 더하거나, {@2}단 곱셈구구를 떠올려 보세요.",
  "Rovnaké rozdeľovanie je delenie.": "똑같이 나누는 것은 나눗셈이에요.",
  "Rovná čiara bez krajných bodov, ktorá ide cez celý obrázok, je priamka.": "그림 전체를 가로지르고 끝점이 없는 곧은 선은 직선이에요.",
  "Rovná čiara s dvoma krajnými bodmi je úsečka.": "두 끝점이 있는 곧은 선은 선분이에요.",
  "Rozdeľ druhé číslo na desiatky a jednotky a pripočítaj ich postupne.": "두 번째 수를 몇십과 낱개로 나누어 차례로 더하세요.",
  "Rozdeľujeme na {@0} {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$. Každý dostal {@8} {@9}.": "똑같은 {@1} {@0}개로 나눠요: ${@2} : {@3} = {@4}$, 왜냐하면 ${@5} \\cdot {@6} = {@7}$이니까요. 한 명이 {@9} {@8}개씩 받았어요.",
  "Rozlož číslo na desiatky a jednotky: ${@0} = \\square + \\square$.": "수를 몇십과 낱개로 가르세요: ${@0} = \\square + \\square$.",
  "Si o jeden násobok čísla {@0} nižšie. Spočítaj skoky po {@1} ešte raz.": "{@0}의 배수 하나만큼 아래에 있어요. {@1}씩 뛰기를 다시 세어 보세요.",
  "Si o jeden násobok čísla {@0} vyššie. Spočítaj skoky po {@1} ešte raz.": "{@0}의 배수 하나만큼 위에 있어요. {@1}씩 뛰기를 다시 세어 보세요.",
  "Skoky na číselnom rade: 38 plus 20 plus 5": "수직선에서 뛰어 세기: 38 더하기 20 더하기 5",
  "Spolu je to {@0} € a {@1} c. Koľko je to eur a centov? (Pamätaj: 100 centov je 1 euro.)": "모두 {@0} €와 {@1} c예요. 몇 유로 몇 센트일까요? (기억하세요: 100센트는 1유로예요.)",
  "Spočítaj 12 hodín dopoludnia a 12 hodín popoludní.": "오전 12시간과 오후 12시간을 더하세요.",
  "Spočítaj skupiny a koľko je v jednej skupine. Potom vynásob.": "묶음의 수와 한 묶음 안의 개수를 세세요. 그다음 곱하세요.",
  "Spočítal si, koľko je mincí. Treba sčítať čísla napísané na minciach.": "동전의 개수를 셌어요. 동전에 쓰인 수를 더해야 해요.",
  "Stovková tabuľka čísel od 1 do 100": "1부터 100까지의 백 판",
  "Stuha meria ${@0}\\,\\text{cm}$. Koľko centimetrov chýba do $1\\,\\text{m}$?": "리본의 길이는 ${@0}\\,\\text{cm}$예요. $1\\,\\text{m}$가 되려면 몇 센티미터가 모자랄까요?",
  "Sú tu {@0} {@1} po {@2}: ${@3} = {@4} \\cdot {@5} = {@6}$.": "{@2}개씩 {@1} {@0}개가 있어요: ${@3} = {@4} \\cdot {@5} = {@6}$.",
  "Sčítaj hodnoty mincí, začni od najväčšej.": "가장 큰 동전부터 동전의 값을 더하세요.",
  "Sčítanie použiješ, keď niečo pribudne.": "무언가가 늘어날 때는 덧셈을 써요.",
  "Teraz odčítaj jednotky: koľko je ${@0} - {@1}$?": "이제 일의 자리를 빼세요: ${@0} - {@1}$은 얼마일까요?",
  "Teraz pripočítaj jednotky: koľko je ${@0} + {@1}$?": "이제 일의 자리를 더하세요: ${@0} + {@1}$은 얼마일까요?",
  "To je dĺžka stuhy. Pýtame sa, koľko jej chýba do 1 metra – odčítaj od 100.": "그건 리본의 길이예요. 1미터까지 얼마나 모자라는지 묻고 있으니 100에서 빼세요.",
  "To je len polovica dňa. Ciferník ukazuje 12 hodín, ale ručička ho za deň obehne dvakrát.": "그건 하루의 절반이에요. 시계에는 12시간이 있지만, 바늘은 하루에 두 바퀴를 돌아요.",
  "To je počet desiatok. Jednotky sú posledná číslica vpravo.": "그건 십의 자리 수예요. 일의 자리는 오른쪽 마지막 숫자예요.",
  "To je počet jednotiek. Desiatky sú prvá číslica vľavo.": "그건 일의 자리 수예요. 십의 자리는 왼쪽 첫 숫자예요.",
  "Toľko centov už máš. Pýtame sa, koľko ti chýba do 100 centov – odčítaj.": "그건 지금 가진 센트예요. 100센트까지 얼마나 모자라는지 묻고 있으니 빼세요.",
  "Tri rady po štyri bodky": "점 4개씩 3줄",
  "Trieda je dlhá asi 9 …": "교실의 길이는 약 9 …",
  "Trištvrte hodiny": "4분의 3시간",
  "Trojuholník má 3 strany a každá strana je úsečka.": "삼각형은 변이 3개이고, 각 변은 선분이에요.",
  "Uberáme, preto odčítame: {@0} Zostalo {@1} {@2} {@3}.": "줄어드니까 빼요: {@0} {@1} {@3} {@2}개가 남았어요.",
  "Ubudlo, preto odčítame.": "줄어들었으니까 빼요.",
  "V centoch: ${@0} = {@1}$ centov. 100 centov je 1 euro, preto je to {@2} € a {@3} c.": "센트로 계산하면: ${@0} = {@1}$센트. 100센트는 1유로이므로 {@2} €와 {@3} c예요.",
  "V jednotkách {@0} meriame {@1}, ale tu ide o {@2}.": "{@0} 단위는 {@1}를 잴 때 쓰지만, 여기서는 {@2}가 필요해요.",
  "V noci spíme asi 10 …": "밤에 우리는 약 10 … 동안 자요.",
  "Vymenil si desiatky a jednotky. Desiatky píšeme na prvé miesto, jednotky na druhé.": "십의 자리와 일의 자리를 바꿔 썼어요. 십의 자리 숫자를 먼저, 일의 자리 숫자를 그다음에 써요.",
  "Vymenil si ručičky. Krátka ručička ukazuje hodiny, dlhá ručička minúty.": "바늘을 바꿔 읽었어요. 짧은바늘은 시, 긴바늘은 분을 나타내요.",
  "Vymenuj násobky {@0}: {@1}, {@2}, {@3}, …": "{@0}의 배수를 말해 보세요: {@1}, {@2}, {@3}, …",
  "Vypočítaj ${@0} : {@1}$.": "${@0} : {@1}$을 계산하세요.",
  "Vypočítaj ${@0} \\cdot {@1}$.": "${@0} \\cdot {@1}$을 계산하세요.",
  "Vypočítaj ${@0} {@1} {@2}$.": "${@0} {@1} {@2}$를 계산하세요.",
  "Vyučovanie trvá asi 5 …": "학교 수업은 약 5 … 동안 해요.",
  "Z koľkých úsečiek sa skladá obvod trojuholníka?": "삼각형의 둘레는 선분 몇 개로 되어 있을까요?",
  "Z koľkých úsečiek sa skladá obvod štvorca?": "정사각형의 둘레는 선분 몇 개로 되어 있을까요?",
  "Z {@0} balónov robíme zväzky po {@1} {@2}. Koľko zväzkov urobíme?": "풍선 {@0}개로 {@2} {@1}개씩 다발을 만들어요. 다발은 몇 개가 될까요?",
  "Zapíš súčet ako násobenie a vypočítaj: ${@0}$": "덧셈을 곱셈으로 쓰고 계산하세요: ${@0}$",
  "Zisťujeme, koľkokrát sa {@0} zmestí do {@1}: ${@2} : {@3} = {@4}$, lebo ${@5} \\cdot {@6} = {@7}$.": "{@1} 안에 {@0}이 몇 번 들어가는지 알아봐요: ${@2} : {@3} = {@4}$, 왜냐하면 ${@5} \\cdot {@6} = {@7}$이니까요.",
  "Zmení sa len počet desiatok, jednotky ostanú rovnaké. V stovkovej tabuľke sa posuň o riadok.": "십의 자리 수만 바뀌고 일의 자리는 그대로예요. 백 판에서 한 줄 움직이세요.",
  "Zmrzlina stojí asi 2 …": "아이스크림 하나의 가격은 약 2 …",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sú rôzne.": "= 기호는 같은 두 수 사이에만 써요. 이 두 수는 달라요.",
  "Znak je otočený naopak. Desiatky sú rovnaké, preto rozhodujú jednotky.": "기호가 반대로 되어 있어요. 십의 자리가 같으니 일의 자리로 정해요.",
  "Znak je otočený naopak. Rozhodujú desiatky: väčšie je číslo, ktoré má viac desiatok.": "기호가 반대로 되어 있어요. 십의 자리로 정해요: 십의 자리 수가 더 큰 수가 더 커요.",
  "Znamienko + znamená pridať. Tu treba sčítať, nie odčítať.": "+ 기호는 더한다는 뜻이에요. 여기서는 빼지 말고 더해야 해요.",
  "Znamienko − znamená ubrať. Tu treba odčítať, nie sčítať.": "− 기호는 덜어 낸다는 뜻이에요. 여기서는 더하지 말고 빼야 해요.",
  "balón": "풍선",
  "balónov": "풍선",
  "balóny": "풍선",
  "bod": "점",
  "bod A": "점 A",
  "cent": "센트",
  "centov": "센트",
  "centy": "센트",
  "cenu": "가격",
  "ciferník hodín": "시계 문자판",
  "citrónov": "레몬",
  "desiatku": "10",
  "deti": "아이",
  "detí": "아이",
  "dieťa": "아이",
  "dĺžku": "길이",
  "eurá; centy": "유로; 센트",
  "hodina": "시간",
  "hodiny": "시간",
  "hodín": "시간",
  "hrušiek": "배",
  "jahôd": "딸기",
  "je medzi {@0} a {@1}": "{@0}과 {@1} 사이에 있고",
  "jednotku": "1",
  "krivá čiara": "곡선",
  "kúpil": "샀어요",
  "kúpila": "샀어요",
  "min": "min",
  "mince": "동전",
  "mrkiev": "당근",
  "orechov": "호두",
  "orechy": "호두",
  "pol hodiny": "반 시간",
  "položil": "올려놓았어요",
  "položila": "올려놓았어요",
  "presne {@0} {@1}": "정확히 {@0}시",
  "priamka": "직선",
  "priamka p": "직선 p",
  "rovnaké časti": "부분",
  "rovnakú časť": "부분",
  "rovnakých častí": "부분",
  "rozdelil": "나누어 주었어요",
  "rozdelila": "나누어 주었어요",
  "skupina": "묶음",
  "skupiny": "묶음",
  "skupín": "묶음",
  "skáčeme vždy o 3": "항상 3씩 뛰어요",
  "stratil": "잃어버렸어요",
  "stratila": "잃어버렸어요",
  "tanier": "접시",
  "taniere": "접시",
  "tanierov": "접시",
  "trištvrte hodiny": "4분의 3시간",
  "ukazuje na {@0}": "{@0}을 가리키고",
  "vreciek": "봉지",
  "vrecko": "봉지",
  "vrecká": "봉지",
  "{@0} Skúška: ${@1} + {@2} = {@3}$.": "{@0} 확인: ${@1} + {@2} = {@3}$.",
  "{@0} Správny zápis je {@1}.": "{@0} 알맞은 식은 {@1}이에요.",
  "{@0} desiatka je {@1}.": "10이 {@0}개면 {@1}이에요.",
  "{@0} desiatky sú {@1}.": "10이 {@0}개면 {@1}이에요.",
  "{@0} desiatok je {@1}.": "10이 {@0}개면 {@1}이에요.",
  "{@0} je len to, o koľko má {@1} menej. Odčítaj to od toho, čo má {@2}.": "{@0}은 {@1}가 덜 가진 개수일 뿐이에요. 그 수를 {@2}가 가진 개수에서 빼세요.",
  "{@0} má menej ako {@1}, preto treba odčítať, nie sčítať.": "{@0}는 {@1}보다 적게 가지고 있으니까 더하지 말고 빼야 해요.",
  "{@0} má {@1} {@2}. {@3} má o {@4} {@5} menej. Koľko {@6} má {@7}?": "{@0}는 {@2} {@1}개를 가지고 있어요. {@3}는 {@5} {@4}개를 덜 가지고 있어요. {@7}는 {@6} 몇 개를 가지고 있나요?",
  "{@0} {@1} a {@2} minút": "{@0}시 {@2}분",
  "{@0} {@1} na {@2} {@3} po {@4} {@5}. Koľko {@6} je na tanieroch spolu?": "{@0}는 {@3} {@2}개에 각각 {@5} {@4}개씩 {@1}. 접시 위의 {@6}는 모두 몇 개일까요?",
  "{@0} {@1} {@2} {@3} a {@4} ešte {@5}. Ktorý zápis ukazuje, koľko {@6} má teraz?": "{@0}는 {@3} {@2}개를 {@1}. 그리고 {@5}개를 더 {@4}. 지금 가진 {@6}의 수를 나타내는 식은 어느 것일까요?",
  "{@0} {@1} {@2} {@3} a {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} zostalo?": "{@0}는 {@3} {@2}개를 {@1}. 그런데 {@4}개를 {@5}. {@7} 남은 {@6}의 수를 나타내는 식은 어느 것일까요?",
  "{@0} {@1} {@2} {@3} po {@4} {@5}. Ktorý zápis ukazuje, koľko {@6} {@7} spolu?": "{@0}는 {@5} {@4}개씩 든 {@3} {@2}개를 {@1}. {@6} 모두 몇 개를 {@7}? 이것을 나타내는 식은 어느 것일까요?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} kamarátov. Koľko {@5} dostal každý kamarát?": "{@0}는 {@3} {@2}개를 친구 {@4}명에게 똑같이 {@1}. 친구 한 명이 {@5} 몇 개를 받았을까요?",
  "{@0} {@1} {@2} {@3} rovnako medzi {@4} {@5}. Koľko cukríkov dostalo každé dieťa?": "{@0}는 {@3} {@2}개를 {@5} {@4}명에게 똑같이 {@1}. 아이 한 명이 사탕을 몇 개 받았을까요?",
  "{@0} {@1} {@2} {@3} {@4}: ${@5} {@6} {@7} = {@8}$.": "{@1}이 {@0}개 {@2} {@4}이 {@3}개: ${@5} {@6} {@7} = {@8}$.",
  "{@0}-krát po {@1} je násobenie.": "{@1}씩 {@0}번은 곱셈이에요.",
  "{@0}-krát po {@1} je násobenie: ${@2} \\cdot {@3} = {@4}$. Na tanieroch je {@5} {@6}.": "{@1}씩 {@0}번은 곱셈이에요: ${@2} \\cdot {@3} = {@4}$. 접시에는 {@6} {@5}개가 있어요.",
  "Úsečka $KL$ meria ${@0}\\,\\text{cm}$, úsečka $MN$ meria ${@1}\\,\\text{cm}$. O koľko centimetrov je úsečka $KL$ dlhšia?": "선분 $KL$은 ${@0}\\,\\text{cm}$, 선분 $MN$은 ${@1}\\,\\text{cm}$예요. 선분 $KL$은 몇 센티미터 더 길까요?",
  "Úsečka je rovná. Táto čiara sa zatáča.": "선분은 곧아요. 이 선은 휘어 있어요.",
  "Úsečka je čiara medzi dvoma bodmi. Tu je len jedna bodka.": "선분은 두 점 사이의 선이에요. 여기에는 점 하나만 있어요.",
  "Úsečka má dva krajné body, napríklad $A$ a $B$.": "선분에는 두 끝점이 있어요. 예를 들어 $A$와 $B$.",
  "Úsečka má na koncoch dva krajné body. Táto čiara ich nemá, pokračuje ďalej.": "선분은 양 끝에 끝점이 두 개 있어요. 이 선은 끝점이 없고 계속 이어져요.",
  "Úsečka má začiatok aj koniec, priamka nemá ani jedno.": "선분은 시작과 끝이 있지만, 직선은 둘 다 없어요.",
  "Úsečka začína na nule a končí pri čísle {@0}. Je dlhá ${@1}\\,\\text{cm}$.": "선분은 0에서 시작해서 {@0}에서 끝나요. 길이는 ${@1}\\,\\text{cm}$예요.",
  "úsečka": "선분",
  "úsečka CD": "선분 CD",
  "Čiara sa zatáča, nie je rovná, teda je to krivá čiara.": "선이 휘어 있고 곧지 않으니까 곡선이에요.",
  "Čistenie zubov trvá asi 3 …": "이를 닦는 데 약 3 … 걸려요.",
  "Čo je na obrázku?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"čiara alebo bod\">{@0}</svg>": "그림에 있는 것은 무엇일까요?<svg viewBox=\"0 0 180 120\" width=\"200\" role=\"img\" aria-label=\"선 또는 점\">{@0}</svg>",
  "Čísla nesčítavaj. Hľadáš, koľko sme ubrali, aby z čísla {@0} zostalo {@1} – to zistíš odčítaním.": "수를 더하지 마세요. {@0}에서 얼마를 빼야 {@1}이 남는지 찾아야 해요. 뺄셈으로 알 수 있어요.",
  "Čísla nesčítavaj. Hľadáš, koľko treba pridať k {@0}, aby vyšlo {@1} – to zistíš odčítaním.": "수를 더하지 마세요. {@0}에 얼마를 더해야 {@1}이 되는지 찾아야 해요. 뺄셈으로 알 수 있어요.",
  "Čísla nesčítavaj. Otázka „o koľko viac“ porovnáva – odčítaj menšie číslo od väčšieho.": "수를 더하지 마세요. “얼마나 더 많은가”는 비교하는 거예요. 큰 수에서 작은 수를 빼세요.",
  "Čísla si sčítal. Znak · znamená násobiť.": "수를 더했어요. · 기호는 곱하라는 뜻이에요.",
  "Čísla sú rovnaké: ${@0} = {@1}$.": "두 수가 같아요: ${@0} = {@1}$.",
  "Čísla sú úplne rovnaké, ani jedno nie je väčšie.": "두 수는 완전히 같아서 어느 쪽도 더 크지 않아요.",
  "Čísla {@0} vždy o {@1}: {@2}.": "수가 {@1}씩 {@0}: {@2}.",
  "Číslo {@0} nie je v násobilke čísla {@1}: leží medzi násobkami {@2} a {@3}.": "{@0}은 {@1}단 곱셈구구에 없어요: 배수 {@2}과 {@3} 사이에 있어요.",
  "Číslo {@0} sčítavame {@1}-krát: ${@2} \\cdot {@3} = {@4}$.": "수 {@0}을 {@1}번 더해요: ${@2} \\cdot {@3} = {@4}$.",
  "čas": "시간",
  "čiara alebo bod": "선 또는 점",
  "Štvorec má 4 strany, každá strana je úsečka.": "정사각형은 변이 4개이고, 각 변은 선분이에요.",
  "Štvrť hodiny": "4분의 1시간",
  "štvrť hodiny": "4분의 1시간",
  "„O {@0} menej“ znamená {@1} ubrať: {@2} {@3} má {@4} {@5}.": "“{@0}개 더 적다”는 {@1}을 뺀다는 뜻이에요: {@2} {@3}는 {@5} {@4}개를 가지고 있어요.",
  "„O … menej“ znamená odčítať.": "“…개 더 적다”는 뺀다는 뜻이에요.",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋": "🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋": "🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋": "🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋": "🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎": "🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎": "🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎": "🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎": "🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎&nbsp;&nbsp;&nbsp;🍎🍎🍎🍎🍎",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐": "🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐": "🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐": "🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐": "🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐&nbsp;&nbsp;&nbsp;🍐🍐🍐🍐🍐",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓": "🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓": "🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓": "🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓": "🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓&nbsp;&nbsp;&nbsp;🍓🍓🍓🍓🍓",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕": "🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕": "🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕": "🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕",
  "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕": "🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕&nbsp;&nbsp;&nbsp;🥕🥕🥕🥕🥕"
 }
});
