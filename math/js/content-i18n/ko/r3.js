/* 한국어: preklad js/rocniky/r3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/r3/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "r3-cisla1000": {
   "title": "1 000까지의 수",
   "summary": "백, 십, 일의 자리, 수의 순서, 세 자리 수의 크기 비교.",
   "theory": [
    "<p>세 자리 수에는 <strong>백의 자리(백)</strong>, <strong>십의 자리(십)</strong>, <strong>일의 자리(일)</strong>가 있어요.\n       472는 백이 4개, 십이 7개, 일이 2개예요: $472 = 400 + 70 + 2$. 백이 10개이면 <strong>천</strong>이에요: $1\\,000$.</p>",
    {
     "fig": "r3-rad1000",
     "caption": "0부터 1 000까지의 수직선. 350은 300과 400의 한가운데에 있고, 720은 700에 더 가까워요."
    },
    "<p><strong>크기 비교:</strong> 먼저 백의 자리를 비교하고, 같으면 십의 자리를, 마지막으로 일의 자리를 비교해요.\n       백이 5개는 4개보다 많으므로 $538 &gt; 497$이에요. 백의 자리와 십의 자리가 같고 $2 &lt; 8$이므로 $642 &lt; 648$이에요.</p>"
   ],
   "examples": [
    {
     "task": "806과 860의 크기를 비교하세요.",
     "steps": [
      "백의 자리는 같아요(8).",
      "십의 자리: 0과 6, 0이 더 작아요.",
      "<strong>$806 &lt; 860$</strong>"
     ]
    },
    {
     "task": "백이 3개, 십이 0개, 일이 9개인 수를 쓰세요.",
     "steps": [
      "$300 + 0 + 9 = 309$.",
      "십의 자리에는 0을 써요.",
      "<strong>309예요.</strong>"
     ]
    }
   ]
  },
  "r3-scitanie": {
   "title": "1 000까지의 덧셈과 뺄셈",
   "summary": "부분으로 나누어 암산하기와 세로셈.",
   "theory": [
    "<p><strong>암산</strong>은 부분으로 나누어 해요: $356 + 230$은 먼저 $356 + 200 = 556$, 그다음 $556 + 30 = 586$이에요.\n       몇백끼리는 일처럼 계산해요: $400 + 500 = 900$, $800 - 300 = 500$.</p>",
    "<p><strong>세로셈</strong>에서는 일의 자리는 일의 자리끼리, 십의 자리는 십의 자리끼리, 백의 자리는 백의 자리끼리 맞추어 위아래로 써요.\n       오른쪽부터 계산해요: 일, 십, 백의 자리 순서로요. 어떤 자리의 합이 9보다 크면 1을 왼쪽 자리로 받아올려요.</p>",
    {
     "fig": "r3-stlpec",
     "caption": "세로셈 $347 + 285 = 632$. 위에 작게 쓴 1은 받아올린 십과 백이에요."
    },
    "<p>뺄셈은 언제나 <strong>덧셈으로 확인</strong>할 수 있어요: $632 - 285 = 347$이면 $347 + 285 = 632$가 되어야 해요.</p>"
   ],
   "examples": [
    {
     "task": "$468 + 275$를 계산하세요.",
     "steps": [
      "일의 자리: $8 + 5 = 13$, 3을 쓰고 1을 받아올려요.",
      "십의 자리: $6 + 7 + 1 = 14$, 4를 쓰고 1을 받아올려요.",
      "백의 자리: $4 + 2 + 1 = 7$.",
      "<strong>답: 743</strong>"
     ]
    },
    {
     "task": "$700 - 340$을 계산하세요.",
     "steps": [
      "$700 - 300 = 400$.",
      "$400 - 40 = 360$.",
      "확인: $360 + 340 = 700$. <strong>답: 360</strong>"
     ]
    }
   ]
  },
  "r3-nasobilka": {
   "title": "곱셈과 나눗셈",
   "summary": "곱셈구구 전체, 몇십의 곱셈, 나머지가 있는 나눗셈.",
   "theory": [
    "<p>$10 \\cdot 10$까지의 곱셈구구는 표에서 찾을 수 있어요: 가로줄에서 첫 번째 수를, 세로줄에서 두 번째 수를 찾으면 만나는 곳에 곱이 있어요.\n       나눗셈은 곱셈의 반대예요: $6 \\cdot 7 = 42$에서 $42 : 6 = 7$과 $42 : 7 = 6$을 알 수 있어요.</p>",
    {
     "fig": "r3-nasobilka",
     "caption": "곱셈표: 6의 가로줄과 7의 세로줄이 42에서 만나요. 즉 $6 \\cdot 7 = 42$예요."
    },
    "<p><strong>몇십의 곱셈:</strong> $30 \\cdot 4$는 십 3개에 4를 곱한 것이므로 십 12개, 즉 $120$이에요.</p>",
    "<p><strong>나머지가 있는 나눗셈:</strong> 모든 나눗셈이 똑 떨어지지는 않아요. $3 \\cdot 5 = 15$이고 17까지 2가 더 모자라므로\n       $17 : 5 = 3$ <em>나머지</em> 2예요. 나머지는 항상 나누는 수보다 작아야 해요.</p>"
   ],
   "examples": [
    {
     "task": "$8 \\cdot 7$과 $56 : 8$을 계산하세요.",
     "steps": [
      "곱셈구구에서: $8 \\cdot 7 = 56$.",
      "나눗셈은 곱셈의 반대이므로 $56 : 8 = 7$."
     ]
    },
    {
     "task": "$29 : 4$를 나머지가 있는 나눗셈으로 계산하세요.",
     "steps": [
      "29보다 크지 않은 4의 배수 중 가장 큰 수는 $7 \\cdot 4 = 28$이에요.",
      "나머지: $29 - 28 = 1$.",
      "<strong>$29 : 4 = 7$, 나머지 1</strong>"
     ]
    }
   ]
  },
  "r3-zatvorky": {
   "title": "괄호와 계산 순서",
   "summary": "무엇을 먼저 계산할까: 괄호, 곱셈과 나눗셈, 덧셈과 뺄셈.",
   "theory": [
    "<p>연산이 여러 개 있는 식에서는 다음 순서로 계산해요:</p>\n       <ol><li>먼저 <strong>괄호</strong> 안을 계산하고,</li>\n       <li>그다음 <strong>곱셈과 나눗셈</strong>을,</li>\n       <li>마지막으로 <strong>덧셈과 뺄셈</strong>을 해요(왼쪽에서 오른쪽으로).</li></ol>",
    "<p>비교해 보세요: $2 + 3 \\cdot 4 = 2 + 12 = 14$이지만 $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$이에요. 괄호가 결과를 바꿔요!</p>",
    "<p>덧셈과 뺄셈만 있을 때는 왼쪽에서 오른쪽으로 계산해요: $20 - 5 - 3 = 15 - 3 = 12$. 하지만 괄호 안에 있는 부분은\n       먼저 계산해요: $20 - (5 - 3) = 20 - 2 = 18$.</p>"
   ],
   "examples": [
    {
     "task": "$18 + 4 \\cdot 6$을 계산하세요.",
     "steps": [
      "곱셈을 먼저 해요: $4 \\cdot 6 = 24$.",
      "$18 + 24 = 42$.",
      "<strong>답: 42</strong>"
     ]
    },
    {
     "task": "$(15 - 7) \\cdot 3$을 계산하세요.",
     "steps": [
      "먼저 괄호: $15 - 7 = 8$.",
      "$8 \\cdot 3 = 24$.",
      "<strong>답: 24</strong>"
     ]
    }
   ]
  },
  "r3-slovne": {
   "title": "여러 단계의 문장제",
   "summary": "식 두세 개를 차례로 세워서 푸는 문제.",
   "theory": [
    "<p>어떤 문제는 식 하나로 풀 수 없어요. 단계별로 생각해요: <strong>알고 있는 것</strong>,\n       <strong>먼저 알아내야 할 것</strong>, <strong>마지막에 구하는 것</strong>.</p>",
    "<p>예: 엄마가 4 €짜리 공책 3권을 사고 20 € 지폐로 냈어요. 거스름돈은 몇 유로일까요?<br>\n       1단계 – 공책 값: $3 \\cdot 4 = 12$ €.<br>2단계 – 거스름돈: $20 - 12 = 8$ €.<br>답: 엄마는 거스름돈으로 8 €를 받았어요.</p>",
    "<p>여러 단계를 하나의 식으로 쓸 수도 있어요: $20 - 3 \\cdot 4 = 20 - 12 = 8$(곱셈을 먼저 해요).\n       마지막에는 항상 답이 말이 되는지 확인해요.</p>"
   ],
   "examples": [
    {
     "task": "버스에 34명이 타고 있었어요. 정류장에서 12명이 내리고 9명이 탔어요. 지금 버스에는 몇 명이 타고 있나요?",
     "steps": [
      "내린 후: $34 - 12 = 22$.",
      "탄 후: $22 + 9 = 31$.",
      "<strong>버스에는 31명이 타고 있어요.</strong>"
     ]
    },
    {
     "task": "지민이는 스티커가 8장씩 든 묶음 2개와 낱장 5장을 가지고 있어요. 스티커는 모두 몇 장인가요?",
     "steps": [
      "묶음 안: $2 \\cdot 8 = 16$.",
      "모두: $16 + 5 = 21$.",
      "<strong>지민이는 스티커 21장을 가지고 있어요.</strong>"
     ]
    }
   ]
  },
  "r3-obvod": {
   "title": "평면도형의 둘레",
   "summary": "변의 길이의 합으로 구하는 삼각형, 정사각형, 직사각형의 둘레.",
   "theory": [
    "<p>도형의 <strong>둘레</strong>는 도형을 한 바퀴 두른 선의 길이예요. <strong>모든 변의 길이를 더해서</strong> 구해요.\n       둘레는 문자 $o$로 나타내요.</p>",
    {
     "fig": "r3-obvod",
     "caption": "직사각형에는 긴 변 두 개와 짧은 변 두 개가, 삼각형에는 변 세 개가 있어요. 둘레는 모든 변의 길이의 합이에요."
    },
    "<p>세 변이 $a, b, c$인 <strong>삼각형</strong>: $o = a + b + c$.<br>\n       한 변이 $a$인 <strong>정사각형</strong>: $o = a + a + a + a = 4 \\cdot a$.<br>\n       두 변이 $a, b$인 <strong>직사각형</strong>: $o = a + b + a + b = 2 \\cdot a + 2 \\cdot b$.</p>"
   ],
   "examples": [
    {
     "task": "한 변이 $7\\,\\text{cm}$인 정사각형의 둘레를 구하세요.",
     "steps": [
      "정사각형은 길이가 같은 변이 4개예요.",
      "$o = 4 \\cdot 7 = 28$.",
      "<strong>$o = 28\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "직사각형의 두 변이 $9\\,\\text{cm}$와 $4\\,\\text{cm}$예요. 둘레는 얼마인가요?",
     "steps": [
      "$o = 9 + 4 + 9 + 4$.",
      "$o = 18 + 8 = 26$.",
      "<strong>$o = 26\\,\\text{cm}$</strong>"
     ]
    }
   ]
  },
  "r3-jednotky": {
   "title": "길이, 무게, 들이, 시간의 단위",
   "summary": "밀리미터부터 킬로미터까지, 그램과 킬로그램, 리터와 데시리터, 초부터 주까지.",
   "theory": [
    "<p><strong>길이:</strong> $1\\,\\text{cm} = 10\\,\\text{mm}$, $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{m} = 100\\,\\text{cm}$,\n       $1\\,\\text{km} = 1\\,000\\,\\text{m}$.</p>",
    "<p><strong>무게:</strong> $1\\,\\text{kg} = 1\\,000\\,\\text{g}$, $1\\,\\text{t} = 1\\,000\\,\\text{kg}$.<br>\n       <strong>들이:</strong> $1\\,\\text{l} = 10\\,\\text{dl}$, $1\\,\\text{dl} = 100\\,\\text{ml}$, 따라서 $1\\,\\text{l} = 1\\,000\\,\\text{ml}$.</p>",
    "<p><strong>시간:</strong> $1\\,\\text{min} = 60\\,\\text{s}$, $1\\,\\text{h} = 60\\,\\text{min}$, 1일 = 24 h, 1주 = 7일.</p>",
    "<p><strong>더 작은</strong> 단위로 바꿀 때는 수가 커지고(곱하기), <strong>더 큰</strong> 단위로 바꿀 때는 수가 작아져요(나누기).\n       예를 들어 $3\\,\\text{m} = 300\\,\\text{cm}$, $40\\,\\text{mm} = 4\\,\\text{cm}$예요.</p>"
   ],
   "examples": [
    {
     "task": "$2\\,\\text{m}\\ 35\\,\\text{cm}$를 센티미터로 바꾸세요.",
     "steps": [
      "$2\\,\\text{m} = 200\\,\\text{cm}$.",
      "$200 + 35 = 235$.",
      "<strong>$235\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "영화가 17:40에 시작해서 19:10에 끝났어요. 영화는 몇 분 동안 상영되었나요?",
     "steps": [
      "17:40부터 18:00까지는 20분이에요.",
      "18:00부터 19:00까지는 60분, 19:00부터 19:10까지는 10분이 더 있어요.",
      "$20 + 60 + 10 = 90$. <strong>영화는 90분 동안 상영되었어요.</strong>"
     ]
    }
   ]
  },
  "r3-tabulky": {
   "title": "표와 간단한 자료",
   "summary": "표와 막대그래프에서 자료 읽기, 비교하기, 합 구하기.",
   "theory": [
    "<p>자료는 <strong>표</strong>에 정리할 때가 많아요. 첫 번째 줄에는 항목(예를 들어 요일)이 있고 그 아래에 수가 있어요.\n       아이스크림 가게에서 팔린 아이스크림 수를 적었어요:</p>\n       <table class=\"tbl\"><tr><th>요일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th></tr>\n       <tr><td>아이스크림</td><td>12</td><td>8</td><td>15</td><td>10</td><td>18</td></tr></table>",
    "<p>같은 자료를 <strong>막대그래프</strong>로 그릴 수도 있어요. 막대가 높을수록 수가 커요.</p>",
    {
     "fig": "r3-graf",
     "caption": "가장 높은 막대는 금요일(18), 가장 낮은 막대는 화요일(8)이에요. 금요일에는 화요일보다 아이스크림을 $18 - 8 = 10$개 더 팔았어요."
    },
    "<p>자료에서 <strong>가장 많은</strong> 것과 <strong>가장 적은</strong> 것, 두 수가 <strong>얼마나</strong> 차이 나는지(뺄셈),\n       <strong>모두</strong> 얼마인지(덧셈)를 알 수 있어요.</p>"
   ],
   "examples": [
    {
     "task": "월요일과 수요일에 팔린 아이스크림은 모두 몇 개인가요(위의 표를 보세요)?",
     "steps": [
      "월요일 12개, 수요일 15개.",
      "$12 + 15 = 27$.",
      "<strong>모두 27개를 팔았어요.</strong>"
     ]
    },
    {
     "task": "수요일에는 목요일보다 아이스크림을 몇 개 더 팔았나요?",
     "steps": [
      "수요일 15개, 목요일 10개.",
      "$15 - 10 = 5$.",
      "<strong>수요일에 5개 더 팔았어요.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} : {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$이므로 ${@2} : {@3} = {@4}$. ${@5} = {@6}$.",
  "$1\\,\\text{{@0}} = {@1}$, preto ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.": "$1\\,\\text{{@0}} = {@1}$이므로 ${@2} \\cdot {@3} = {@4}$. ${@5} = {@6}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} + {@4} = {@5}$.": "${@0} - {@1} = {@2}$. 확인: ${@3} + {@4} = {@5}$.",
  "${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "${@0} - {@1} = {@2}$. 확인: ${@3} - {@4} = {@5}$.",
  "${@0} = {@1} + {@2} + {@3}$. Na mieste {@4} je číslica {@5}.": "${@0} = {@1} + {@2} + {@3}$. {@4}의 개수를 나타내는 숫자는 {@5}이에요.",
  "${@0} = {@1}$, potom ${@2} + {@3} = {@4}$. Výsledok: ${@5}$.": "${@0} = {@1}$, 그다음 ${@2} + {@3} = {@4}$. 답: ${@5}$.",
  "1. krok – cena: ${@0} \\cdot {@1} = {@2}$ €. 2. krok – vrátili: ${@3} - {@4} = {@5}$ €.": "1단계 – 가격: ${@0} \\cdot {@1} = {@2}$ €. 2단계 – 거스름돈: ${@3} - {@4} = {@5}$ €.",
  "4 + 8 + 1 = 13, píšem 3, 1 ďalej": "4 + 8 + 1 = 13, 3을 쓰고 1을 받아올림",
  "7 + 5 = 12, píšem 2, 1 ďalej": "7 + 5 = 12, 2를 쓰고 1을 받아올림",
  "Ak si nespomenieš, rozdeľ si príklad: napríklad $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.": "생각나지 않으면 식을 나누어 보세요: 예를 들어 $7 \\cdot 6 = 5 \\cdot 6 + 2 \\cdot 6$.",
  "Akú číslicu má číslo {@0} na mieste {@1}?": "{@0}에서 {@1}의 개수를 나타내는 숫자는 무엇일까요?",
  "Bez zátvoriek počítaj zľava doprava.": "괄호가 없으면 왼쪽에서 오른쪽으로 계산하세요.",
  "Bez zátvoriek počítame zľava: ${@0} - {@1} = {@2}$, potom ${@3} - {@4} = {@5}$.": "괄호가 없으면 왼쪽부터 계산해요: ${@0} - {@1} = {@2}$, 그다음 ${@3} - {@4} = {@5}$.",
  "Bez zátvoriek sa počíta zľava doprava. Najprv vypočítaj ${@0} - {@1}$, až potom odčítaj {@2}.": "괄호가 없으면 왼쪽에서 오른쪽으로 계산해요. 먼저 ${@0} - {@1}$을 계산한 다음 {@2}을 빼세요.",
  "Cesta vlakom k babke trvala 3 …": "기차를 타고 할머니 댁에 가는 데 3 … 걸렸어요",
  "Chýbajúci sčítanec zistíš odčítaním.": "빠진 더하는 수는 뺄셈으로 구해요.",
  "Do hrnčeka sa zmestia asi 3 …": "머그잔에는 약 3 … 들어가요",
  "Doplň chýbajúce číslo: $\\square \\cdot {@0} = {@1}$": "빈칸에 알맞은 수를 쓰세요: $\\square \\cdot {@0} = {@1}$",
  "Doplň správny znak: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$": "알맞은 기호를 쓰세요: $({@0} + {@1}) \\cdot {@2} \\;\\square\\; {@3} + {@4} \\cdot {@5}$",
  "Doplň vhodnú jednotku: {@0}": "알맞은 단위를 고르세요: {@0}",
  "Dve dlhšie strany: koľko je $2 \\cdot {@0}$?": "긴 두 변: $2 \\cdot {@0}$은 얼마일까요?",
  "Dve kratšie strany: koľko je $2 \\cdot {@0}$?": "짧은 두 변: $2 \\cdot {@0}$은 얼마일까요?",
  "Dve strany po {@0} cm majú spolu $2 \\cdot {@1} = {@2}$. Na zvyšné dve strany ostáva ${@3} - {@4} = {@5}$, jedna strana je ${@6} : 2 = {@7}\\,\\text{cm}$.": "{@0} cm인 두 변의 합은 $2 \\cdot {@1} = {@2}$예요. 나머지 두 변에 ${@3} - {@4} = {@5}$이 남으니, 한 변은 ${@6} : 2 = {@7}\\,\\text{cm}$예요.",
  "Dvere sú vysoké asi 2 …": "문의 높이는 약 2 …",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšie číslo od väčšieho.": "값을 더하지 마세요. “얼마나 더 많은가”는 차이에요. 큰 수에서 작은 수를 빼세요.",
  "Hľadaj najmenšie číslo (najnižší stĺpec).": "가장 작은 수(가장 낮은 막대)를 찾으세요.",
  "Hľadaj najväčšie číslo (najvyšší stĺpec).": "가장 큰 수(가장 높은 막대)를 찾으세요.",
  "Hľadaj suseda v číselnom rade.": "수의 순서에서 이웃한 수를 찾으세요.",
  "Hľadaj v násobilke čísla {@0} najväčší násobok, ktorý sa ešte zmestí do {@1}. Zvyšok musí byť menší ako {@2}.": "{@0}단 곱셈구구에서 {@1}을 넘지 않는 가장 큰 배수를 찾으세요. 나머지는 {@2}보다 작아야 해요.",
  "Jablko váži asi 150 …": "사과 한 개의 무게는 약 150 …",
  "Jednotka {@0} je tu primalá: {@1} {@2} by bolo veľmi málo.": "여기서 {@0} 단위는 너무 작아요: {@1} {@2}는 아주 적은 양이에요.",
  "Jednotka {@0} je tu priveľká: {@1} {@2} by bolo veľmi veľa.": "여기서 {@0} 단위는 너무 커요: {@1} {@2}는 아주 많은 양이에요.",
  "Koľko centimetrov majú spolu dve strany po {@0} cm?": "{@0} cm인 두 변은 모두 몇 센티미터일까요?",
  "Koľko centimetrov zostáva na dve zvyšné strany? Vypočítaj ${@0} - {@1}$.": "나머지 두 변에는 몇 센티미터가 남을까요? ${@0} - {@1}$을 계산하세요.",
  "Koľko desiatok vyšlo? K tomuto číslu pripíš nulu.": "10이 몇 개 나왔나요? 그 수 뒤에 0을 붙이세요.",
  "Koľko eur stál celý nákup?": "산 물건은 모두 몇 유로였을까요?",
  "Koľko eur vrátili? Vypočítaj ${@0} - {@1}$.": "거스름돈은 몇 유로일까요? ${@0} - {@1}$을 계산하세요.",
  "Koľko je ${@0} - {@1}$?": "${@0} - {@1}$은 얼마일까요?",
  "Koľko kusov je vo všetkých balíčkoch spolu?": "모든 꾸러미에 든 것은 모두 몇 개일까요?",
  "Koľko meria jedna zvyšná strana? Vypočítaj ${@0} : 2$.": "남은 한 변의 길이는 얼마일까요? ${@0} : 2$를 계산하세요.",
  "Koľko minút je od {@0} do {@1}?": "{@0}부터 {@1}까지는 몇 분일까요?",
  "Koľko minút trval tréning spolu? Vypočítaj ${@0} + {@1}$.": "훈련은 모두 몇 분 걸렸을까요? ${@0} + {@1}$을 계산하세요.",
  "Koľko stromčekov zostalo? Vypočítaj ${@0} - {@1}$.": "남은 나무는 몇 그루일까요? ${@0} - {@1}$을 계산하세요.",
  "Koľko stromčekov záhradník zasadil?": "정원사가 심은 나무는 몇 그루일까요?",
  "Koľko {@0} majú všetky tri deti spolu? Vypočítaj ${@1} + {@2} + {@3}$.": "세 아이가 가진 {@0}의 수는 모두 얼마일까요? ${@1} + {@2} + {@3}$을 계산하세요.",
  "Koľko {@0} má {@1}?": "{@1}는 {@0} 몇 개를 가지고 있나요?",
  "Koľko {@0} {@1} {@2}?": "{@2}에 {@1} {@0}의 수는 얼마일까요?",
  "Koľko ľudí je v autobuse, keď ďalší nastúpili?": "사람들이 더 탄 뒤 버스에는 몇 명이 있을까요?",
  "Koľko ľudí zostalo v autobuse po vystúpení?": "사람들이 내린 뒤 버스에는 몇 명이 남았을까요?",
  "Koľkokrát je {@0} v čísle {@1}?": "{@1} 안에 {@0}이 몇 번 들어갈까요?",
  "Koľkokrát sa {@0} {@1} zmestí do {@2} {@3}?": "{@2} {@3} 안에 {@0} {@1}이 몇 번 들어갈까요?",
  "Ktoré číslo je o {@0} menšie ako {@1}?": "{@1}보다 {@0} 작은 수는 무엇일까요?",
  "Ktoré číslo je o {@0} väčšie ako {@1}?": "{@1}보다 {@0} 큰 수는 무엇일까요?",
  "Ktoré číslo má {@0} {@1}, {@2} {@3} a {@4} {@5}?": "{@1}이 {@0}개, {@3}이 {@2}개, {@5}이 {@4}개인 수는 무엇일까요?",
  "Ktorý najväčší násobok čísla {@0} sa ešte zmestí do {@1}?": "{@1}을 넘지 않는 {@0}의 배수 중 가장 큰 수는 무엇일까요?",
  "Lyžička sirupu má asi 5 …": "시럽 한 숟가락은 약 5 …",
  "Mravec je dlhý asi 5 …": "개미의 길이는 약 5 …",
  "Najmenšie číslo je {@0}, a to {@1}.": "가장 작은 수는 {@0}이고, {@1}이에요.",
  "Najprv násobenie a delenie: ${@0} \\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} - {@7} = {@8}$.": "먼저 곱셈과 나눗셈: ${@0} \\cdot {@1} = {@2}$, ${@3} : {@4} = {@5}$. 그다음 ${@6} - {@7} = {@8}$.",
  "Najprv násobenie: ${@0} \\cdot {@1} = {@2}$. Potom ${@3} {@4} {@5} = {@6}$.": "먼저 곱셈: ${@0} \\cdot {@1} = {@2}$. 그다음 ${@3} {@4} {@5} = {@6}$.",
  "Najprv odčítaj {@0}: koľko je ${@1} - {@2}$?": "먼저 {@0}을 빼세요: ${@1} - {@2}$은 얼마일까요?",
  "Najprv premeň väčšiu jednotku: ${@0} = \\square\\,\\text{{@1}}$": "먼저 큰 단위를 바꾸세요: ${@0} = \\square\\,\\text{{@1}}$",
  "Najprv premeň {@0} na {@1} a potom pripočítaj zvyšok.": "먼저 {@0}를 {@1}로 바꾼 다음 나머지를 더하세요.",
  "Najprv pripočítaj {@0}: koľko je ${@1} + {@2}$?": "먼저 {@0}을 더하세요: ${@1} + {@2}$은 얼마일까요?",
  "Najprv vypočítaj, koľko je vo všetkých balíčkoch.": "먼저 모든 꾸러미에 몇 개가 들었는지 계산하세요.",
  "Najprv vypočítaj, koľko stromčekov zasadil.": "먼저 나무를 몇 그루 심었는지 계산하세요.",
  "Najprv vypočítaj, čo je v zátvorke.": "먼저 괄호 안을 계산하세요.",
  "Najprv zisti, koľko má každé dieťa, a potom všetko sčítaj.": "먼저 아이마다 몇 개를 가졌는지 알아낸 다음 모두 더하세요.",
  "Najprv zisti, koľko stál celý nákup. Potom to odčítaj od bankovky.": "먼저 산 물건이 모두 얼마인지 알아내세요. 그다음 지폐 금액에서 빼세요.",
  "Najprv zátvorka: ${@0} + {@1} = {@2}$. Potom ${@3} : {@4} = {@5}$.": "먼저 괄호: ${@0} + {@1} = {@2}$. 그다음 ${@3} : {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} - {@1} = {@2}$. Potom ${@3} - {@4} = {@5}$.": "먼저 괄호: ${@0} - {@1} = {@2}$. 그다음 ${@3} - {@4} = {@5}$.",
  "Najprv zátvorka: ${@0} {@1} {@2} = {@3}$. Potom ${@4} \\cdot {@5} = {@6}$.": "먼저 괄호: ${@0} {@1} {@2} = {@3}$. 그다음 ${@4} \\cdot {@5} = {@6}$.",
  "Najprv zátvorka: koľko je ${@0} + {@1}$?": "먼저 괄호: ${@0} + {@1}$은 얼마일까요?",
  "Najprv zátvorka: koľko je ${@0} - {@1}$?": "먼저 괄호: ${@0} - {@1}$은 얼마일까요?",
  "Najprv zátvorka: koľko je ${@0} {@1} {@2}$?": "먼저 괄호: ${@0} {@1} {@2}$는 얼마일까요?",
  "Najväčšie číslo je {@0}, a to {@1}.": "가장 큰 수는 {@0}이고, {@1}이에요.",
  "Najväčší násobok {@0}, ktorý nie je väčší ako {@1}, je ${@2} \\cdot {@3} = {@4}$. Zvyšok: ${@5} - {@6} = {@7}$. Teda ${@8} : {@9} = {@10}$, zvyšok {@11}.": "{@1}보다 크지 않은 {@0}의 가장 큰 배수는 ${@2} \\cdot {@3} = {@4}$예요. 나머지: ${@5} - {@6} = {@7}$. 그러므로 ${@8} : {@9} = {@10}$, 나머지 {@11}.",
  "Napísal si len podiel. Za bodkočiarku dopíš aj zvyšok.": "몫만 썼어요. 세미콜론 뒤에 나머지도 쓰세요.",
  "Nevšímal si si zátvorku. Najprv sčítaj čísla v zátvorke a až potom deľ.": "괄호를 무시했어요. 먼저 괄호 안의 수를 더한 다음 나누세요.",
  "Nevšímal si si zátvorku. Najprv vypočítaj ${@0} - {@1}$ a až potom to odčítaj od {@2}.": "괄호를 무시했어요. 먼저 ${@0} - {@1}$을 계산한 다음 그 결과를 {@2}에서 빼세요.",
  "Nevšímal si si zátvorku. Čo je v zátvorke, počítaš úplne najprv – aj pred násobením.": "괄호를 무시했어요. 괄호 안은 맨 먼저 계산해요. 곱셈보다도 먼저예요.",
  "Nájdi správny deň a prečítaj číslo pri ňom.": "알맞은 요일을 찾아 그 옆의 수를 읽으세요.",
  "Nákladné auto váži asi 8 …": "트럭의 무게는 약 8 …",
  "Násobenie a delenie urob skôr ako odčítanie.": "뺄셈보다 곱셈과 나눗셈을 먼저 하세요.",
  "Násobenie má prednosť pred sčítaním aj odčítaním.": "곱셈은 덧셈과 뺄셈보다 먼저 해요.",
  "O koľko viac? Vypočítaj ${@0} - {@1}$.": "얼마나 더 많을까요? ${@0} - {@1}$을 계산하세요.",
  "Obdĺžnik a trojuholník s dĺžkami strán": "변의 길이가 표시된 직사각형과 삼각형",
  "Obdĺžnik má 4 strany: dve dlhšie a dve kratšie. Sčítaj všetky.": "직사각형은 변이 4개예요: 긴 변 두 개와 짧은 변 두 개. 모두 더하세요.",
  "Obdĺžnik má obvod ${@0}\\,\\text{cm}$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "직사각형의 둘레는 ${@0}\\,\\text{cm}$이고 한 변은 ${@1}\\,\\text{cm}$예요. 다른 변의 길이는 몇 cm일까요?",
  "Obvod rozdeľ na 4 rovnaké časti.": "둘레를 똑같이 4로 나누세요.",
  "Obvod si rozdelil len na dve časti. Štvorec má štyri rovnaké strany.": "둘레를 두 부분으로만 나눴어요. 정사각형은 똑같은 변이 네 개예요.",
  "Obvod trojuholníka je súčet jeho troch strán.": "삼각형의 둘레는 세 변의 길이의 합이에요.",
  "Obvod štvorca je ${@0}\\,\\text{cm}$. Aká dlhá je jeho strana (v cm)?": "정사각형의 둘레는 ${@0}\\,\\text{cm}$예요. 한 변의 길이는 몇 cm일까요?",
  "Obvod: koľko je ${@0} + {@1}$?": "둘레: ${@0} + {@1}$은 얼마일까요?",
  "Od obvodu odčítaj obe známe strany a zvyšok rozdeľ na polovicu.": "둘레에서 알고 있는 두 변을 빼고, 남은 것을 반으로 나누세요.",
  "Od {@0} do {@1} je {@2} minút, od {@3} do {@4} ešte {@5} minút. Spolu ${@6} + {@7} = {@8}$ minút.": "{@0}부터 {@1}까지 {@2}분, {@3}부터 {@4}까지 {@5}분이 더 있어요. 모두 ${@6} + {@7} = {@8}$분이에요.",
  "Od {@0} do {@1} je {@2} minút.": "{@0}부터 {@1}까지는 {@2}분이에요.",
  "Odčítaj postupne stovky, desiatky a jednotky. Výsledok skontroluj sčítaním.": "백의 자리, 십의 자리, 일의 자리 순서로 차례로 빼세요. 답은 덧셈으로 확인하세요.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu všetkých.": "물건 하나의 가격만 뺐어요. 산 물건은 {@0}개이니, 먼저 모두의 가격을 계산하세요.",
  "Odčítal si stranu {@0} cm len raz. Obdĺžnik má dve takéto strany.": "{@0} cm인 변을 한 번만 뺐어요. 직사각형에는 그런 변이 두 개 있어요.",
  "Pi": "금",
  "Platil": "냈어요",
  "Platila": "냈어요",
  "Po": "월",
  "Po vystúpení: ${@0} - {@1} = {@2}$. Po nastúpení: ${@3} + {@4} = {@5}$.": "내린 뒤: ${@0} - {@1} = {@2}$. 탄 뒤: ${@3} + {@4} = {@5}$.",
  "Pomôcka: $5 \\cdot {@0} = {@1}$ a ešte {@2}-krát {@3}, teda ${@4} + {@5} = {@6}$.": "도움말: $5 \\cdot {@0} = {@1}$에 {@3}을 {@2}번 더 더하면 ${@4} + {@5} = {@6}$.",
  "Porovnávaj zľava: najprv stovky, potom desiatky, potom jednotky.": "왼쪽부터 비교하세요: 먼저 백의 자리, 그다음 십의 자리, 그다음 일의 자리.",
  "Potom odčítaj {@0}: koľko je ${@1} - {@2}$?": "그다음 {@0}을 빼세요: ${@1} - {@2}$은 얼마일까요?",
  "Potom pripočítaj {@0}: koľko je ${@1} + {@2}$?": "그다음 {@0}을 더하세요: ${@1} + {@2}$은 얼마일까요?",
  "Počítaj najprv minúty do celej hodiny a potom minúty po nej.": "먼저 정각까지의 분을 세고, 그다음 정각 이후의 분을 세세요.",
  "Počítaj zľava: koľko je ${@0} - {@1}$?": "왼쪽부터 계산하세요: ${@0} - {@1}$은 얼마일까요?",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = {@1}$.": "100으로 계산했어요. 시간에서는 $1\\,\\text{{@0}} = {@1}$이에요.",
  "Počítal si zľava doprava. Delenie má prednosť pred odčítaním: najprv vypočítaj ${@0} : {@1}$.": "왼쪽에서 오른쪽으로 계산했어요. 나눗셈은 뺄셈보다 먼저 해요: 먼저 ${@0} : {@1}$을 계산하세요.",
  "Počítal si zľava doprava. Násobenie má prednosť: najprv vypočítaj ${@0} \\cdot {@1}$.": "왼쪽에서 오른쪽으로 계산했어요. 곱셈을 먼저 해요: 먼저 ${@0} \\cdot {@1}$을 계산하세요.",
  "Predané zmrzliny": "팔린 아이스크림",
  "Predchádzajúce miesta sú rovnaké, rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "앞자리가 같으니 {@0}의 개수로 정해요: {@1}과 {@2}. 그래서 ${@3} {@4} {@5}$.",
  "Predstav si tú vec. Je malá, alebo veľká? Trvá to krátko, alebo dlho?": "그 물건을 떠올려 보세요. 작은가요, 큰가요? 짧게 걸리나요, 오래 걸리나요?",
  "Premeň: ${@0} = \\square\\,\\text{{@1}}$": "바꾸세요: ${@0} = \\square\\,\\text{{@1}}$",
  "Premeň: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$": "바꾸세요: ${@0}\\ {@1} = \\square\\,\\text{{@2}}$",
  "Prečítané strany": "읽은 쪽수",
  "Pridaj tie navyše: koľko je ${@0} + {@1}$?": "더 있는 것을 더하세요: ${@0} + {@1}$은 얼마일까요?",
  "Pripočítaj postupne stovky, desiatky a jednotky, alebo počítaj písomne pod sebou.": "백의 자리, 십의 자리, 일의 자리를 차례로 더하거나 세로셈으로 계산하세요.",
  "Pripočítaj zvyšok: koľko je ${@0} + {@1}$?": "나머지를 더하세요: ${@0} + {@1}$은 얼마일까요?",
  "Pripočítaj {@0}: koľko je ${@1} + {@2}$?": "{@0}을 더하세요: ${@1} + {@2}$은 얼마일까요?",
  "Písomné sčítanie 347 plus 285": "세로셈: 347 더하기 285",
  "Rozhodujú {@0}: {@1} a {@2}. Preto ${@3} {@4} {@5}$.": "{@0}의 개수로 정해요: {@1}과 {@2}. 그래서 ${@3} {@4} {@5}$.",
  "S celými stovkami počítaj ako s jednotkami: 4 stovky + 3 stovky = 7 stoviek.": "몇백은 일처럼 계산하세요: 백 4개 + 백 3개 = 백 7개.",
  "Si o jeden násobok čísla {@0} nižšie. Skontroluj, koľkokrát si pripočítal {@1}.": "{@0}의 배수 하나만큼 아래에 있어요. {@1}을 몇 번 더했는지 확인하세요.",
  "Si o jeden násobok čísla {@0} vyššie. Skontroluj, koľkokrát si pripočítal {@1}.": "{@0}의 배수 하나만큼 위에 있어요. {@1}을 몇 번 더했는지 확인하세요.",
  "Skontroluj obe strany: vľavo počítaj najprv zátvorku, vpravo najprv násobenie.": "양쪽을 확인하세요: 왼쪽은 괄호를 먼저, 오른쪽은 곱셈을 먼저 계산해요.",
  "Spomeň si, koľko {@0} je $1\\,\\text{{@1}}$.": "$1\\,\\text{{@1}}$은 몇 {@0}인지 떠올려 보세요.",
  "St": "수",
  "Stovky píš na prvé miesto, desiatky na druhé a jednotky na tretie. Ak niečo chýba, napíš 0.": "백의 자리 숫자를 첫째, 십의 자리를 둘째, 일의 자리를 셋째로 쓰세요. 없는 자리에는 0을 쓰세요.",
  "Stovky sú prvá číslica zľava, jednotky posledná.": "백의 자리는 왼쪽 첫 숫자, 일의 자리는 마지막 숫자예요.",
  "Stranu si vynásobil samu sebou. Obvod je súčet všetkých štyroch strán.": "변을 그 자신과 곱했어요. 둘레는 네 변의 합이에요.",
  "Strany si vynásobil. Obvod je dĺžka čiary okolo útvaru – strany treba sčítať.": "변을 곱했어요. 둘레는 도형을 둘러싼 선의 길이예요. 변을 더해야 해요.",
  "Strany vyzerajú podobne, ale zátvorka mení poradie počítania. Vypočítaj obe strany zvlášť.": "두 식이 비슷해 보이지만 괄호가 계산 순서를 바꿔요. 양쪽을 따로 계산하세요.",
  "Sčítaj pondelok a utorok: koľko je ${@0} + {@1}$?": "월요일과 화요일을 더하세요: ${@0} + {@1}$은 얼마일까요?",
  "Sčítaj všetky čísla. Pomôže, ak si najprv nájdeš dvojice, ktoré dajú okrúhle číslo.": "모든 수를 더하세요. 먼저 더해서 몇십이 되는 짝을 찾으면 편해요.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany – každú dĺžku pripočítaj dvakrát.": "두 변만 더했어요. 직사각형은 변이 네 개예요. 각 길이를 두 번씩 더하세요.",
  "Sčítal si čísla zo zadania. {@0} a {@1} nie sú počty detí, ale o koľko má dieťa viac alebo menej. Najprv zisti, koľko má každé dieťa.": "문제에 있는 수를 그대로 더했어요. {@0}과 {@1}은 아이가 가진 개수가 아니라 얼마나 더 많거나 적은지예요. 먼저 아이마다 몇 개를 가졌는지 알아내세요.",
  "Tabuľka násobilky do 10 krát 10": "10 곱하기 10까지의 곱셈표",
  "Taška zemiakov váži 5 …": "감자 한 봉지의 무게는 5 …",
  "Teraz dokonči: koľko je ${@0} {@1} {@2}$?": "이제 마무리하세요: ${@0} {@1} {@2}$는 얼마일까요?",
  "Tlesknutie trvá asi 1 …": "손뼉 한 번 치는 데 약 1 … 걸려요",
  "To je cena celého nákupu. Ešte zisti, koľko eur vrátili z bankovky.": "그건 산 물건 전체의 가격이에요. 지폐에서 거스름돈이 얼마인지도 알아내세요.",
  "To je len počet v balíčkoch. Pripočítaj ešte {@0} navyše.": "그건 꾸러미에 든 것뿐이에요. 더 있는 {@0}개도 더하세요.",
  "To sú obe zvyšné strany spolu. Rozdeľ to ešte na polovicu.": "그건 나머지 두 변을 합한 길이예요. 그것을 반으로 나누세요.",
  "Toľko má len {@0}. Pýtame sa, koľko majú všetky tri deti spolu.": "그건 {@0}가 가진 개수일 뿐이에요. 세 아이가 가진 것을 모두 더해야 해요.",
  "Toľko stromčekov záhradník zasadil. Uschnuté stromčeky ešte odčítaj.": "그건 정원사가 심은 나무의 수예요. 말라 죽은 나무를 빼야 해요.",
  "Trojuholník má strany ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$ a ${@2}\\,\\text{cm}$. Aký má obvod (v cm)?": "삼각형의 세 변이 ${@0}\\,\\text{cm}$, ${@1}\\,\\text{cm}$, ${@2}\\,\\text{cm}$예요. 둘레는 몇 cm일까요?",
  "Tréning začal o {@0} a skončil o {@1}. Koľko minút trval?": "훈련은 {@0}에 시작해서 {@1}에 끝났어요. 몇 분 동안 했을까요?",
  "Upečené koláče": "구운 케이크",
  "Uschnuté stromčeky ubudli, preto ich odčítaj, nepripočítaj.": "말라 죽은 나무는 줄어든 거니까 더하지 말고 빼세요.",
  "Ut": "화",
  "V autobuse sedelo {@0} ľudí. Na zastávke {@1} ľudí vystúpilo a {@2} ľudí nastúpilo. Koľko ľudí je teraz v autobuse?": "버스에 {@0}명이 타고 있었어요. 정류장에서 {@1}명이 내리고 {@2}명이 탔어요. 지금 버스에는 몇 명이 있을까요?",
  "V balíčkoch: ${@0} \\cdot {@1} = {@2}$. Spolu: ${@3} + {@4} = {@5}$.": "꾸러미 안: ${@0} \\cdot {@1} = {@2}$. 모두: ${@3} + {@4} = {@5}$.",
  "V cukrárni si zapisovali, koľko zmrzlín predali.": "아이스크림 가게에서 아이스크림을 몇 개 팔았는지 기록했어요.",
  "V niektorom stĺpci si odčítal menšiu číslicu od väčšej, hoci väčšia bola dole. Vtedy si treba požičať desiatku z vedľajšieho stĺpca.": "어느 자리에서 아래 숫자가 더 큰데도 큰 숫자에서 작은 숫자를 뺐어요. 그럴 때는 옆자리에서 10을 받아내림해야 해요.",
  "V pekárni si zapisovali, koľko koláčov upiekli.": "빵집에서 케이크를 몇 개 구웠는지 기록했어요.",
  "V piatok": "금요일에",
  "V pondelok": "월요일에",
  "V stredu": "수요일에",
  "V tento deň je najmenšie číslo. Hľadáme najväčšie.": "이 요일의 수가 가장 작아요. 가장 큰 수를 찾아야 해요.",
  "V tento deň je najväčšie číslo. Hľadáme najmenšie.": "이 요일의 수가 가장 커요. 가장 작은 수를 찾아야 해요.",
  "V utorok": "화요일에",
  "Vo vedre je 10 …": "양동이에는 10 … 들어 있어요",
  "Vo štvrtok": "목요일에",
  "Vydeľ so zvyškom: ${@0} : {@1}$. Napíš podiel a zvyšok oddelené bodkočiarkou (napr. 4; 1).": "나머지가 있는 나눗셈을 하세요: ${@0} : {@1}$. 몫과 나머지를 세미콜론으로 구분해서 쓰세요(예: 4; 1).",
  "Vypočítaj $({@0} + {@1}) : {@2}$.": "$({@0} + {@1}) : {@2}$를 계산하세요.",
  "Vypočítaj $({@0} {@1} {@2}) \\cdot {@3}$.": "$({@0} {@1} {@2}) \\cdot {@3}$을 계산하세요.",
  "Vypočítaj ${@0} - ({@1} - {@2})$.": "${@0} - ({@1} - {@2})$를 계산하세요.",
  "Vypočítaj ${@0} - {@1} - {@2}$.": "${@0} - {@1} - {@2}$를 계산하세요.",
  "Vypočítaj ${@0} \\cdot {@1} - {@2} : {@3}$.": "${@0} \\cdot {@1} - {@2} : {@3}$을 계산하세요.",
  "Vypočítaj ${@0} {@1} {@2} \\cdot {@3}$.": "${@0} {@1} {@2} \\cdot {@3}$을 계산하세요.",
  "Vypočítaj najprv ${@0} \\cdot {@1}$ a potom pripíš nulu.": "먼저 ${@0} \\cdot {@1}$을 계산한 다음 0을 붙이세요.",
  "Vypočítaj obe strany zvlášť. Vľavo začni zátvorkou, vpravo násobením.": "양쪽을 따로 계산하세요. 왼쪽은 괄호부터, 오른쪽은 곱셈부터 시작해요.",
  "Vypočítaj obvod obdĺžnika (v cm).{@0}": "직사각형의 둘레를 구하세요(cm).{@0}",
  "Vystúpili → odčítaj. Nastúpili → pripočítaj.": "내림 → 빼기. 탐 → 더하기.",
  "Vyučovacia hodina trvá 45 …": "수업 한 시간은 45 …",
  "Vzdialenosť medzi dvoma mestami je 40 …": "두 도시 사이의 거리는 40 …",
  "Vľavo: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. Vpravo: ${@6} + {@7} = {@8}$. Preto ${@9} {@10} {@11}$.": "왼쪽: $({@0} + {@1}) \\cdot {@2} = {@3} \\cdot {@4} = {@5}$. 오른쪽: ${@6} + {@7} = {@8}$. 그래서 ${@9} {@10} {@11}$.",
  "Zabudol si na delenie. Od {@0} neodčítavaš {@1}, ale až výsledok ${@2} : {@3}$.": "나눗셈을 잊었어요. {@0}에서 {@1}을 빼는 게 아니라 ${@2} : {@3}$의 결과를 빼야 해요.",
  "Zabudol si na nulu na mieste desiatok. Bez nej sa číslice posunú a vznikne iné číslo.": "십의 자리의 0을 빠뜨렸어요. 0이 없으면 숫자들이 밀려서 다른 수가 돼요.",
  "Zabudol si na prenos. Keď je súčet v stĺpci 10 alebo viac, napíš len jednotky a 1 pripočítaj k ďalšiemu stĺpcu vľavo.": "받아올림을 잊었어요. 한 자리의 합이 10 이상이면 일의 자리만 쓰고 1을 왼쪽 자리에 더하세요.",
  "Zabudol si pripočítať ešte ${@0}$.": "${@0}$을 더하는 것을 잊었어요.",
  "Započítal si len dve strany. Štvorec má štyri rovnako dlhé strany.": "두 변만 셌어요. 정사각형은 길이가 같은 변이 네 개예요.",
  "Zasadil: ${@0} \\cdot {@1} = {@2}$. Zostalo: ${@3} - {@4} = {@5}$.": "심은 나무: ${@0} \\cdot {@1} = {@2}$. 남은 나무: ${@3} - {@4} = {@5}$.",
  "Zisti, o koľko sa líšia dve susedné čísla.": "이웃한 두 수가 얼마나 차이 나는지 알아보세요.",
  "Zmení sa počet desiatok.": "십의 자리 수가 바뀌어요.",
  "Zmení sa počet stoviek.": "백의 자리 수가 바뀌어요.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvé miesto, kde sa čísla líšia ({@0}).": "기호가 반대로 되어 있어요. 왼쪽부터 비교하세요. 처음으로 숫자가 다른 자리({@0})가 결정해요.",
  "Zošit je dlhý asi 30 …": "공책의 길이는 약 30 …",
  "Zuzka si zapisovala, koľko strán knihy prečítala.": "수진이는 책을 몇 쪽 읽었는지 기록했어요.",
  "Zvyšok je ${@0} - {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "나머지는 ${@0} - {@1}$이에요. 몫과 나머지를 세미콜론으로 구분해서 쓰세요.",
  "Zvyšok {@0} je väčší ako deliteľ {@1}, takže sa číslo {@2} do {@3} zmestí ešte raz. Zvyšok musí byť vždy menší ako deliteľ.": "나머지 {@0}이 나누는 수 {@1}보다 크니까, {@3} 안에 {@2}이 한 번 더 들어가요. 나머지는 항상 나누는 수보다 작아야 해요.",
  "Záhradník zasadil {@0} {@1} po {@2} {@3}. {@4} {@5}. Koľko stromčekov zostalo?": "정원사가 나무를 한 줄에 {@2}{@3}씩 {@0}{@1} 심었어요. {@4}{@5}. 남은 나무는 몇 그루일까요?",
  "balíčkov": "꾸러미",
  "balíčky": "꾸러미",
  "deň": "요일",
  "gaštan": "밤",
  "gaštanov": "밤",
  "gaštany": "밤",
  "kartičiek": "카드",
  "kartičku": "카드",
  "kartičky": "카드",
  "knihy": "책",
  "kníh": "책",
  "koláče": "케이크",
  "koláčov": "케이크",
  "lopty": "공",
  "lôpt": "공",
  "orech": "호두",
  "perá": "펜",
  "piatok": "금요일",
  "pier": "펜",
  "podiel; zvyšok": "몫; 나머지",
  "pondelok": "월요일",
  "predali": "판",
  "prečítala Zuzka": "수진이가 읽은",
  "radov": "줄",
  "rady": "줄",
  "stoviek": "100",
  "stovku": "100",
  "stovky": "100",
  "strany": "쪽",
  "streda": "수요일",
  "stredu": "수요일",
  "stromček uschol": "그루가 말라 죽었어요",
  "stromčekov": "그루",
  "stromčekov uschlo": "그루가 말라 죽었어요",
  "stromčeky": "그루",
  "stromčeky uschli": "그루가 말라 죽었어요",
  "strán": "쪽",
  "upiekli v pekárni": "빵집에서 구운",
  "utorok": "화요일",
  "v piatok": "금요일",
  "v pondelok": "월요일",
  "v stredu": "수요일",
  "v utorok": "화요일",
  "vo štvrtok": "목요일",
  "zmrzliny": "아이스크림",
  "zmrzlín": "아이스크림",
  "zošitov": "공책",
  "zošity": "공책",
  "{@0} je v údajoch číslo {@1}.": "자료에서 {@0}의 수는 {@1}이에요.",
  "{@0} má o {@1} menej ako {@2}, nie ako {@3}. Skontroluj, od koho odčítaš.": "{@0}는 {@3}가 아니라 {@2}보다 {@1}개 적게 가지고 있어요. 누구의 수에서 빼는지 확인하세요.",
  "{@0} má {@1} {@2} po {@3} {@4} a ešte {@5} {@6} navyše. Koľko {@7} má spolu?": "{@0}는 {@4} {@3}개씩 든 {@2} {@1}개와, 따로 {@6} {@5}개를 더 가지고 있어요. {@7} 모두 몇 개를 가지고 있나요?",
  "{@0} má {@1} {@2}. {@3} má o {@4} viac ako {@5} a {@6} má o {@7} menej ako {@8}. Koľko {@9} majú spolu?": "{@0}는 {@2} {@1}개를 가지고 있어요. {@3}는 {@5}보다 {@4}개 더 많이, {@6}는 {@8}보다 {@7}개 더 적게 가지고 있어요. 세 아이가 가진 {@9}의 수는 모두 얼마일까요?",
  "{@0} {@1} krát {@2} je {@3} {@4}: ${@5} \\cdot {@6} = {@7}$.": "{@1}이 {@0}개인 수에 {@2}를 곱하면 {@4}이 {@3}개예요: ${@5} \\cdot {@6} = {@7}$.",
  "{@0} {@1} {@2} {@3} po {@4} €. {@5} bankovkou {@6} €. Koľko eur {@7} vrátili?": "{@0}는 {@4} €짜리 {@3} {@2}개를 {@1}. {@6} € 지폐로 {@5}. 거스름돈은 몇 유로일까요?",
  "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.": "{@0} {@1}, {@2} {@3}: ${@4} - {@5} = {@6}$.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5} - {@6} = {@7}$. 모두: ${@8} + {@9} + {@10} = {@11}$.",
  "{@0}Koľko {@1} {@2} spolu za všetkých päť dní?": "{@0}닷새 동안 {@2} {@1}의 수는 모두 얼마일까요?",
  "{@0}Koľko {@1} {@2} {@3}?": "{@0}{@3}에 {@2} {@1}의 수는 얼마일까요?",
  "{@0}O koľko viac {@1} {@2} {@3} ako {@4}?": "{@0}{@3}에 {@2} {@1}의 수는 {@4}보다 얼마나 더 많을까요?",
  "{@0}V ktorý deň {@1} najmenej {@2}?": "{@0}{@1} {@2}의 수가 가장 적은 요일은 언제일까요?",
  "{@0}V ktorý deň {@1} najviac {@2}?": "{@0}{@1} {@2}의 수가 가장 많은 요일은 언제일까요?",
  "Časy si odčítal ako obyčajné čísla. Hodina má len 60 minút – počítaj najprv do celej hodiny.": "시각을 보통 수처럼 뺐어요. 1시간은 60분뿐이에요. 먼저 정각까지 세세요.",
  "Čo počítaš najprv? Vypočítaj ${@0} \\cdot {@1}$.": "무엇을 먼저 계산할까요? ${@0} \\cdot {@1}$을 계산하세요.",
  "Číselný rad od 0 do 1000": "0부터 1000까지의 수의 순서",
  "Čísla klesajú vždy o {@0}: {@1}.": "수가 항상 {@0}씩 작아져요: {@1}.",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}$ na menšiu jednotku $\\text{{@1}}$.": "수를 바로 더하지 마세요. 먼저 ${@0}$을 더 작은 단위 $\\text{{@1}}$로 바꾸세요.",
  "Čísla rastú vždy o {@0}: {@1}.": "수가 항상 {@0}씩 커져요: {@1}.",
  "Čísla si len sčítal. {@0}-krát po {@1} je násobenie.": "수를 더하기만 했어요. {@1}씩 {@0}번은 곱셈이에요.",
  "Číslo {@0} má {@1} {@2}. Koľko je teda ${@3} \\cdot {@4}$?": "{@0}은 {@2}이 {@1}개예요. 그러면 ${@3} \\cdot {@4}$는 얼마일까요?",
  "Číslo {@0} rozdelíme na {@1}: {@2}.": "{@0}을 {@1}로 나눠요: {@2}.",
  "Čítal si z opačnej strany. Jednotky sú posledná číslica vpravo.": "반대쪽에서 읽었어요. 일의 자리는 오른쪽 마지막 숫자예요.",
  "Čítal si z opačnej strany. Stovky sú prvá číslica zľava.": "반대쪽에서 읽었어요. 백의 자리는 왼쪽 첫 숫자예요.",
  "čokolád": "초콜릿",
  "čokolády": "초콜릿",
  "Ľudia, ktorí nastúpili, v autobuse pribudli. Ich počet pripočítaj, neodčítaj.": "탄 사람들은 버스에 늘어난 거예요. 그 수를 빼지 말고 더하세요.",
  "Ľudia, ktorí vystúpili, z autobusu odišli. Ich počet odčítaj, nepripočítaj.": "내린 사람들은 버스에서 나간 거예요. 그 수를 더하지 말고 빼세요.",
  "Št": "목",
  "Štvorec má 4 rovnaké strany: ${@0} : 4 = {@1}\\,\\text{cm}$.": "정사각형은 네 변이 같아요: ${@0} : 4 = {@1}\\,\\text{cm}$.",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký má obvod (v cm)?": "정사각형의 한 변이 ${@0}\\,\\text{cm}$예요. 둘레는 몇 cm일까요?",
  "štvrtok": "목요일",
  "„O koľko viac“ zistíš odčítaním.": "“얼마나 더 많은가”는 뺄셈으로 알아내요."
 }
});
