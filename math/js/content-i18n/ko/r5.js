/* 한국어: preklad js/rocniky/r5.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/r5/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "r5-prirodzene": {
   "title": "자연수와 그 성질",
   "summary": "큰 수의 마디와 자리, 크기 비교, 짝수와 홀수.",
   "theory": [
    "<p><strong>자연수</strong>는 $1, 2, 3, 4, \\dots$로, 물건의 개수를 셀 때 쓰는 수예요. 가장 작은 자연수는\n       1이고, 가장 큰 자연수는 없어요. 어떤 수든 1을 더하면 그 수의 <strong>다음 수</strong>를 얻을 수 있기 때문이에요.\n       1 작은 수는 <strong>앞의 수</strong>예요.</p>",
    "<p>큰 수의 숫자는 오른쪽부터 세 자리씩 <strong>마디</strong>로 나눠요: 일, 천, 백만 마디.\n       각 마디에는 백, 십, 일의 자리가 있어요. 숫자의 값은 그 숫자가 놓인 자리에 따라 달라져요.</p>",
    {
     "fig": "r5-triedy",
     "caption": "$3\\,042\\,705$에서 숫자 4는 만의 자리에 있으므로 값이 $40\\,000$이에요."
    },
    "<p><strong>짝수</strong>는 2로 나누어떨어지며 끝자리가 0, 2, 4, 6, 8이에요. 나머지 수는\n       <strong>홀수</strong>로, 끝자리가 1, 3, 5, 7, 9예요. 짝수인지 홀수인지는 끝자리 숫자만 보면 알 수 있어요.</p>"
   ],
   "examples": [
    {
     "task": "숫자 5, 0, 8, 2를 한 번씩 써서 가장 큰 네 자리 수와 가장 작은 네 자리 수를 만드세요.",
     "steps": [
      "가장 큰 수: 큰 숫자부터 차례로 놓아요: $8\\,520$.",
      "가장 작은 수: 작은 숫자부터 놓지만, 맨 앞에 0이 올 수는 없어요: $2\\,058$."
     ]
    },
    {
     "task": "$499\\,999$의 다음 수와 앞의 수는 무엇인가요?",
     "steps": [
      "다음 수: $499\\,999 + 1 = 500\\,000$.",
      "앞의 수: $499\\,999 - 1 = 499\\,998$."
     ]
    }
   ]
  },
  "r5-zaokruhlovanie": {
   "title": "반올림",
   "summary": "십, 백, 천의 자리에서 반올림하기, 결과 어림하기.",
   "theory": [
    "<p><strong>반올림</strong>은 어떤 수를 가장 가까운 “딱 떨어지는” 수로 바꾸는 거예요. 기호 $\\doteq$로 나타내고\n       (“약”이라고 읽어요) 예를 들어 $3\\,467 \\doteq 3\\,470$(십의 자리까지)이에요.</p>",
    "<p><strong>규칙:</strong> 나타내려는 자리 <em>바로 오른쪽</em> 숫자를 봐요.\n       0, 1, 2, 3, 4이면 <strong>버리고</strong>, 5, 6, 7, 8, 9이면 <strong>올려요</strong>.\n       그 오른쪽 숫자들은 모두 0으로 바꿔요.</p>",
    {
     "fig": "r5-zaokruhlovanie",
     "caption": "수를 움직이면서 어느 십(초록 점)과 어느 백(호)에 가장 가까운지 관찰해 보세요."
    },
    "<p><strong>어림:</strong> 정확히 계산하기 전에 수를 반올림해서 결과를 어림할 수 있어요.\n       $4\\,812 + 3\\,195 \\doteq 4\\,800 + 3\\,200 = 8\\,000$. 어림을 하면 계산 실수를 찾는 데 도움이 돼요.</p>"
   ],
   "examples": [
    {
     "task": "$72\\,649$를 백의 자리까지 반올림하세요.",
     "steps": [
      "백의 자리 숫자는 6이고, 바로 오른쪽 숫자는 4예요.",
      "4는 5보다 작으므로 버려요. 백의 자리는 6 그대로예요.",
      "<strong>$72\\,649 \\doteq 72\\,600$</strong>"
     ]
    },
    {
     "task": "$5\\,962$를 십의 자리까지 반올림하세요.",
     "steps": [
      "십의 자리 숫자는 6이고, 오른쪽 숫자는 2이므로 버려요.",
      "<strong>$5\\,962 \\doteq 5\\,960$</strong>",
      "백의 자리까지 반올림하면 백의 자리 다음 숫자가 6이므로 $6\\,000$이 돼요."
     ]
    }
   ],
   "strings": {
    "nahor": "올림해요",
    "nadol": "버림해요"
   }
  },
  "r5-rimske": {
   "title": "로마 숫자",
   "summary": "큰 수와 연도 쓰기, 빼기 규칙, 양방향으로 바꾸기.",
   "theory": [
    "<p>로마 숫자: $\\text{I} = 1$, $\\text{V} = 5$, $\\text{X} = 10$, $\\text{L} = 50$, $\\text{C} = 100$,\n       $\\text{D} = 500$, $\\text{M} = 1\\,000$. 보통 로마 숫자로 쓰는 가장 큰 수는 $3\\,999 = \\text{MMMCMXCIX}$예요.</p>",
    "<p><strong>쓰는 규칙:</strong></p>\n       <ol><li>기호는 큰 것부터 작은 것 순서로 쓰고 값을 더해요: $\\text{MDCLX} = 1\\,660$.</li>\n       <li>I, X, C, M은 연달아 최대 세 번까지 쓸 수 있어요. V, L, D는 반복하지 않아요.</li>\n       <li>작은 기호가 큰 기호 앞에 오면 빼요. 이때 쓸 수 있는 것은 I, X, C뿐이고, 바로 위의 큰 기호 두 개 앞에만 올 수 있어요.</li></ol>",
    {
     "fig": "r5-rimske",
     "caption": "빼기를 하는 여섯 쌍. 다른 쌍(예를 들어 IL이나 IC)은 틀린 표기예요."
    },
    "<p><strong>로마 숫자로 바꾸기</strong>는 자리별로 해요: 천, 백, 십, 일.\n       $1\\,994 = 1\\,000 + 900 + 90 + 4 = \\text{M} + \\text{CM} + \\text{XC} + \\text{IV} = \\text{MCMXCIV}$.</p>"
   ],
   "examples": [
    {
     "task": "$2\\,026$년을 로마 숫자로 쓰세요.",
     "steps": [
      "$2\\,026 = 2\\,000 + 20 + 6$.",
      "$2\\,000 = \\text{MM}$, $20 = \\text{XX}$, $6 = \\text{VI}$.",
      "<strong>$2\\,026 = \\text{MMXXVI}$</strong>"
     ]
    },
    {
     "task": "$\\text{CDXLIX}$는 어떤 수인가요?",
     "steps": [
      "묶음으로 나눠요: $\\text{CD} = 400$, $\\text{XL} = 40$, $\\text{IX} = 9$.",
      "$400 + 40 + 9 = 449$.",
      "주의: 49는 IL이 아니라 XLIX예요.",
      "<strong>$\\text{CDXLIX} = 449$</strong>"
     ]
    }
   ]
  },
  "r5-operacie": {
   "title": "사칙연산과 계산 순서",
   "summary": "덧셈, 뺄셈, 곱셈, 나눗셈, 괄호, 편리한 계산.",
   "theory": [
    "<p>식을 계산할 때는 <strong>계산 순서</strong>를 지켜요: 먼저 괄호, 그다음 곱셈과 나눗셈\n       (왼쪽에서 오른쪽으로), 마지막으로 덧셈과 뺄셈(왼쪽에서 오른쪽으로)을 계산해요.</p>",
    {
     "fig": "r5-poradie",
     "caption": "계산 순서. 같은 단계의 연산은 왼쪽에서 오른쪽으로 계산해요."
    },
    "<p><strong>편리한 계산:</strong> 덧셈과 곱셈에서는 수의 순서를 바꾸거나 묶는 방법을 바꿀 수 있어요:\n       $25\\cdot 17\\cdot 4 = (25\\cdot 4)\\cdot 17 = 100\\cdot 17 = 1\\,700$.\n       괄호를 풀어 계산하는 것도 도움이 돼요: $36\\cdot 99 = 36\\cdot 100 - 36 = 3\\,564$.</p>",
    "<p><strong>용어:</strong> 더하는 수 + 더하는 수 = 합, 빼어지는 수 − 빼는 수 = 차, 인수 · 인수 = 곱,\n       나누어지는 수 : 나누는 수 = 몫. 모르는 수는 반대 연산으로 구해요: $\\square\\cdot 8 = 96$이면 $\\square = 96 : 8 = 12$예요.</p>"
   ],
   "examples": [
    {
     "task": "$120 - 6\\cdot(14 - 5)$를 계산하세요.",
     "steps": [
      "괄호: $14 - 5 = 9$.",
      "곱셈: $6\\cdot 9 = 54$.",
      "뺄셈: $120 - 54 = 66$.",
      "<strong>답: 66</strong>"
     ]
    },
    {
     "task": "$5\\cdot 63\\cdot 20$을 편리하게 계산하세요.",
     "steps": [
      "$5\\cdot 20 = 100$으로 묶어요.",
      "$100\\cdot 63 = 6\\,300$.",
      "<strong>답: $6\\,300$</strong>"
     ]
    }
   ]
  },
  "r5-delitelnost": {
   "title": "배수와 약수",
   "summary": "배수와 약수의 뜻, 구하는 방법, 2, 3, 5, 10의 배수 판정법.",
   "theory": [
    "<p>어떤 수에 $1, 2, 3, \\dots$을 곱하면 그 수의 <strong>배수</strong>를 얻어요. 6의 배수는\n       $6, 12, 18, 24, \\dots$이고, 끝없이 많아요.</p>",
    "<p>어떤 수의 <strong>약수</strong>는 그 수를 나머지 없이 나누어떨어지게 하는 수예요. 12의 약수는 $1, 2, 3, 4, 6, 12$예요.\n       약수는 짝을 지어 찾아요: $12 = 1\\cdot 12 = 2\\cdot 6 = 3\\cdot 4$. 1과 그 수 자신은 항상 약수예요.</p>",
    {
     "fig": "r5-delitele",
     "caption": "점 12개는 $1\\cdot 12$, $2\\cdot 6$, $3\\cdot 4$ 직사각형으로 늘어놓을 수 있어요. 가로와 세로의 개수가 12의 약수예요."
    },
    "<p><strong>배수 판정법:</strong> 끝자리가 0, 2, 4, 6, 8이면 <strong>2</strong>의 배수,\n       끝자리가 0 또는 5이면 <strong>5</strong>의 배수, 끝자리가 0이면 <strong>10</strong>의 배수,\n       각 자리 숫자의 합이 3으로 나누어떨어지면 <strong>3</strong>의 배수예요.</p>"
   ],
   "examples": [
    {
     "task": "18의 약수를 모두 구하세요.",
     "steps": [
      "짝을 찾아요: $18 = 1\\cdot 18 = 2\\cdot 9 = 3\\cdot 6$.",
      "4와 5는 약수가 아니고, 그다음부터는 짝이 반복돼요.",
      "<strong>약수: 1, 2, 3, 6, 9, 18.</strong>"
     ]
    },
    {
     "task": "$4\\,215$는 3으로 나누어떨어지나요?",
     "steps": [
      "각 자리 숫자의 합: $4 + 2 + 1 + 5 = 12$.",
      "12는 3으로 나누어떨어져요.",
      "<strong>네, $4\\,215$는 3으로 나누어떨어져요.</strong> ($4\\,215 : 3 = 1\\,405$)"
     ]
    }
   ]
  },
  "r5-zlomky": {
   "title": "분수의 기초",
   "summary": "전체의 부분, 분자와 분모, 어떤 수의 분수만큼, 분수의 크기 비교.",
   "theory": [
    "<p>전체를 <strong>똑같이</strong> 나누면 그중 한 조각이 전체의 일부예요: 2분의 1 $\\frac{1}{2}$,\n       3분의 1 $\\frac{1}{3}$, 4분의 1 $\\frac{1}{4}$… 분수 $\\frac{3}{8}$은 전체를 똑같이 8조각으로 나누어 3조각을 가진다는 뜻이에요.</p>",
    "<p>분수의 가로선 아래에 있는 수는 <strong>분모</strong>로, 전체를 몇 조각으로 나누었는지 알려 줘요.\n       가로선 위에 있는 수는 <strong>분자</strong>로, 몇 조각을 가지는지 알려 줘요.</p>",
    {
     "fig": "r5-zlomky",
     "caption": "케이크의 $\\frac{1}{2}$, $\\frac{1}{4}$, $\\frac{3}{8}$과 띠의 $\\frac{2}{5}$."
    },
    "<p><strong>어떤 수의 분수만큼:</strong> 20의 $\\frac{3}{4}$은 20을 분모로 나누고($20 : 4 = 5$, 이것이 4분의 1)\n       분자를 곱해서($5\\cdot 3 = 15$) 구해요.<br>\n       <strong>크기 비교:</strong> 분모가 같으면 분자가 큰 분수가 더 커요: $\\frac{5}{7} &gt; \\frac{3}{7}$.\n       분자가 같으면 분모가 작은 분수가 더 커요: $\\frac{1}{3} &gt; \\frac{1}{5}$(3분의 1이 5분의 1보다 큰 조각이에요).</p>"
   ],
   "examples": [
    {
     "task": "35의 $\\frac{2}{5}$는 얼마인가요?",
     "steps": [
      "5분의 1: $35 : 5 = 7$.",
      "5분의 2: $7\\cdot 2 = 14$.",
      "<strong>35의 $\\frac{2}{5}$는 14예요.</strong>"
     ]
    },
    {
     "task": "길의 3분의 1이 4 km예요. 길 전체의 길이는 얼마인가요?",
     "steps": [
      "길 전체는 3분의 1이 3개예요.",
      "$3\\cdot 4 = 12$.",
      "<strong>길 전체의 길이는 12 km예요.</strong>"
     ]
    }
   ]
  },
  "r5-utvary": {
   "title": "기본 도형",
   "summary": "점, 직선, 반직선, 선분, 원과 원의 내부.",
   "theory": [
    "<p><strong>점</strong>은 대문자(A, B, S)로 나타내요. 서로 다른 두 점을 지나는 <strong>직선</strong>은 오직 하나뿐이에요.\n       직선은 곧고 시작도 끝도 없어요. 소문자($p$)나 두 점(직선 $AB$)으로 나타내요.</p>",
    "<p><strong>반직선</strong>은 시작점은 있지만 끝이 없어요. 반직선 $AB$는 점 A에서 시작해서 점 B를 지나 계속 뻗어 나가요.\n       <strong>선분</strong> $AB$는 점 A와 B 사이의 직선 부분으로, 양 끝점이 있고 길이를 잴 수 있어요.</p>",
    {
     "fig": "r5-utvary",
     "caption": "점선은 선이 끝없이 이어진다는 뜻이에요. 오른쪽은 중심이 S, 반지름이 r, 지름이 d인 원이에요."
    },
    "<p><strong>원</strong>은 중심 S에서 같은 거리에 있는 점들로 이루어진 선이에요. 이 거리가 <strong>반지름</strong> $r$이에요.\n       <strong>지름</strong> $d$는 중심을 지나고 반지름의 두 배예요: $d = 2\\cdot r$. 원과 그 안쪽 전체를 합한 것을 <strong>원판</strong>(원의 내부를 포함한 도형)이라고 해요.</p>"
   ],
   "examples": [
    {
     "task": "원의 지름이 14 cm예요. 반지름은 얼마인가요?",
     "steps": [
      "반지름은 지름의 절반이에요.",
      "$14 : 2 = 7$.",
      "<strong>$r = 7\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "어느 세 점도 한 직선 위에 있지 않은 점 4개로 선분을 몇 개 그을 수 있나요?",
     "steps": [
      "점 A, B, C, D. 모든 점을 서로 이어요: AB, AC, AD, BC, BD, CD.",
      "<strong>6개예요.</strong>"
     ]
    }
   ]
  },
  "r5-obvod": {
   "title": "정사각형, 직사각형, 삼각형의 둘레",
   "summary": "둘레 구하기, 모르는 변의 길이 구하기, 서로 다른 단위로 계산하기.",
   "theory": [
    "<p>다각형의 <strong>둘레</strong>는 모든 변의 길이의 합이에요. $o$로 나타내요.</p>",
    {
     "fig": "r5-obvod",
     "caption": "정사각형, 직사각형, 삼각형의 둘레 공식."
    },
    "<p><strong>정사각형:</strong> $o = 4\\cdot a$. <strong>직사각형:</strong> $o = 2\\cdot(a + b)$.\n       <strong>삼각형:</strong> $o = a + b + c$; 정삼각형은 $o = 3\\cdot a$예요.</p>",
    "<p>더하기 전에 모든 길이는 <strong>같은 단위</strong>여야 해요. 직사각형의 두 변이 $3\\,\\text{dm}$와 $12\\,\\text{cm}$이면\n       먼저 $3\\,\\text{dm} = 30\\,\\text{cm}$로 바꾼 다음 $o = 2\\cdot(30 + 12) = 84\\,\\text{cm}$로 계산해요.</p>"
   ],
   "examples": [
    {
     "task": "세 변이 7 cm, 9 cm, 12 cm인 삼각형의 둘레를 구하세요.",
     "steps": [
      "$o = 7 + 9 + 12$.",
      "$o = 28\\,\\text{cm}$."
     ]
    },
    {
     "task": "직사각형의 둘레는 50 m이고 한 변은 15 m예요. 다른 한 변의 길이는 얼마인가요?",
     "steps": [
      "둘레의 절반은 $a + b = 50 : 2 = 25$예요.",
      "$b = 25 - 15 = 10$.",
      "<strong>다른 한 변은 $10\\,\\text{m}$예요.</strong>"
     ]
    }
   ]
  },
  "r5-jednotky": {
   "title": "길이, 무게, 들이, 시간의 단위",
   "summary": "단위 바꾸기, 여러 단위로 나타낸 양, 알맞은 단위 고르기.",
   "theory": [
    "<p><strong>길이:</strong> km, m, dm, cm, mm. <strong>무게:</strong> t, kg, dag, g.\n       <strong>들이:</strong> hl, l, dl, ml. <strong>시간:</strong> 일, 시간(h), 분(min), 초(s).</p>",
    {
     "fig": "r5-jednotky",
     "caption": "단위 사다리. 화살표는 큰 단위 하나가 작은 단위 몇 개와 같은지 보여 줘요."
    },
    "<p><strong>작은 단위로</strong> 바꿀 때는 곱해요: $3\\,\\text{km} = 3\\cdot 1\\,000 = 3\\,000\\,\\text{m}$.\n       <strong>큰 단위로</strong> 바꿀 때는 나눠요: $4\\,000\\,\\text{g} = 4\\,000 : 1\\,000 = 4\\,\\text{kg}$.\n       여러 단위로 나타낸 양은 부분별로 바꿔요: $2\\,\\text{h}\\ 15\\,\\text{min} = 120 + 15 = 135\\,\\text{min}$.</p>",
    "<p>시간은 주의하세요: “10”이 아니라 <strong>60</strong>씩 묶어요(1시간은 60분, 1분은 60초). 그리고 하루는 <strong>24</strong>시간이에요.</p>"
   ],
   "examples": [
    {
     "task": "$3\\,\\text{l}\\ 4\\,\\text{dl}$를 데시리터로 바꾸세요.",
     "steps": [
      "$3\\,\\text{l} = 30\\,\\text{dl}$.",
      "$30 + 4 = 34$.",
      "<strong>$3\\,\\text{l}\\ 4\\,\\text{dl} = 34\\,\\text{dl}$</strong>"
     ]
    },
    {
     "task": "영화가 18:40에 시작해서 20:15에 끝났어요. 영화는 몇 분 동안 상영되었나요?",
     "steps": [
      "18:40부터 19:00까지는 20분이에요.",
      "19:00부터 20:00까지는 60분, 20:00부터 20:15까지는 15분이에요.",
      "$20 + 60 + 15 = 95$.",
      "<strong>영화는 95분 동안 상영되었어요.</strong>"
     ]
    }
   ]
  },
  "r5-slovne": {
   "title": "문장제 해결",
   "summary": "여러 단계의 문제, 전체의 부분, 합과 차, 올림.",
   "theory": [
    "<p>문장제를 풀 때: <strong>1.</strong> 문제를 읽고 알고 있는 것과 구하는 것을 적어요. <strong>2.</strong> 어떤 순서로\n       계산할지 생각해요. <strong>3.</strong> 계산해요. <strong>4.</strong> 검산하거나 어림해 봐요.\n       <strong>5.</strong> 완전한 문장으로 답을 써요.</p>",
    "<p><strong>선분 모델</strong>(띠 그림)은 합과 차에 관한 문제에 도움이 돼요. 두 사람이 가진 돈이 모두 50 €이고 한 사람이 8 € 더 많다면,\n       먼저 차이를 빼요. 그러면 두 사람이 가진 돈이 같아져요.</p>",
    {
     "fig": "r5-model",
     "caption": "선분 모델: $50 - 8 = 42$, $42 : 2 = 21$. 동생은 21 €, 형은 $21 + 8 = 29$ €를 가지고 있어요."
    },
    "<p><strong>나머지</strong>에 주의하세요: 어린이 23명이 자동차를 타야 하고 한 대에 4명씩 탈 수 있다면, $23 : 4 = 5$(나머지 3)대로는 부족해요.\n       남은 어린이 3명을 위해 한 대가 더 필요하므로 자동차 6대가 필요해요.</p>"
   ],
   "examples": [
    {
     "task": "수아는 120유로를 가지고 있었어요. 그중 3분의 1은 신발에, 25유로는 책에 썼어요. 남은 돈은 몇 유로인가요?",
     "steps": [
      "120의 3분의 1: $120 : 3 = 40$유로.",
      "모두 $40 + 25 = 65$유로를 썼어요.",
      "남은 돈은 $120 - 65 = 55$유로예요.",
      "<strong>답: 수아에게 55유로가 남았어요.</strong>"
     ]
    },
    {
     "task": "아버지는 42살이고 아들보다 나이가 세 배 많아요. 6년 후에 아들은 몇 살이 되나요?",
     "steps": [
      "아들은 지금 $42 : 3 = 14$살이에요.",
      "6년 후: $14 + 6 = 20$.",
      "<strong>답: 아들은 20살이 돼요.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$125\\cdot 8 = 1\\,000$, preto výsledok je $1\\,000\\cdot {@0} = {@1}$.": "$125\\cdot 8 = 1\\,000$이므로 결과는 $1\\,000\\cdot {@0} = {@1}$이에요.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$이므로 ${@3} : {@4} = {@5}$예요.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$이므로 ${@3}\\cdot {@4} = {@5}$예요.",
  "$25\\cdot 4 = 100$, preto $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$.": "$25\\cdot 4 = 100$이므로 $25\\cdot {@0}\\cdot 4 = 100\\cdot {@1} = {@2}$예요.",
  "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. Súčet: ${@4} + {@5} = {@6}$ (rímskymi číslicami {@7}).": "$\\text{{@0}} = {@1}$, $\\text{{@2}} = {@3}$. 합: ${@4} + {@5} = {@6}$ (로마 숫자로 {@7}).",
  "$a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}$, druhá strana meria ${@5}\\,\\text{{@6}}$.": "$a + b = {@0} : 2 = {@1}$이므로 $b = {@2} - {@3} = {@4}$, 다른 변의 길이는 ${@5}\\,\\text{{@6}}$예요.",
  "$a = {@0} : 4 = {@1}$, strana meria ${@2}\\,\\text{{@3}}$.": "$a = {@0} : 4 = {@1}$, 한 변의 길이는 ${@2}\\,\\text{{@3}}$예요.",
  "$c = {@0} - {@1} - {@2} = {@3}$, tretia strana meria ${@4}\\,\\text{{@5}}$.": "$c = {@0} - {@1} - {@2} = {@3}$, 셋째 변의 길이는 ${@4}\\,\\text{{@5}}$예요.",
  "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, priemer je ${@2}\\,\\text{{@3}}$.": "$d = 2\\cdot r = 2\\cdot {@0} = {@1}$, 지름은 ${@2}\\,\\text{{@3}}$예요.",
  "$o = {@0} + {@1} + {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = {@0} + {@1} + {@2} = {@3}$, 둘레는 ${@4}\\,\\text{{@5}}$예요.",
  "$o = {@0}\\cdot {@1} = {@2}$, obvod je ${@3}\\,\\text{{@4}}$.": "$o = {@0}\\cdot {@1} = {@2}$, 둘레는 ${@3}\\,\\text{{@4}}$예요.",
  "$r = d : 2 = {@0} : 2 = {@1}$, polomer je ${@2}\\,\\text{{@3}}$.": "$r = d : 2 = {@0} : 2 = {@1}$, 반지름은 ${@2}\\,\\text{{@3}}$예요.",
  "${@0} : {@1} = {@2}$ (to je ${@3}$), potom ${@4}\\cdot {@5} = {@6}$.": "${@0} : {@1} = {@2}$ (이것이 ${@3}$), 그다음 ${@4}\\cdot {@5} = {@6}$.",
  "${@0} : {@1} = {@2}$, zvyšok {@3}. {@4}": "${@0} : {@1} = {@2}$, 나머지 {@3}. {@4}",
  "${@0} = {@1}\\cdot {@2}$. Ostatné čísla po delení {@3} dávajú zvyšok.": "${@0} = {@1}\\cdot {@2}$. 다른 수들은 {@3}로 나누면 나머지가 있어요.",
  "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. Odhad: ${@4} {@5} {@6} = {@7}$. (Presný výsledok je ${@8}$.)": "${@0} \\doteq {@1}$, ${@2} \\doteq {@3}$. 어림: ${@4} {@5} {@6} = {@7}$. (정확한 답은 ${@8}$이에요.)",
  "${@0}$ z {@1} je ${@2} : {@3} = {@4}$. ${@5}$ je ${@6}\\cdot {@7} = {@8}$. {@9}.": "{@1}의 ${@0}$은 ${@2} : {@3} = {@4}$. ${@5}$은 ${@6}\\cdot {@7} = {@8}$. {@9}.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$ a pripočítame zvyšok: ${@4} + {@5} = {@6}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$이고 나머지를 더해요: ${@4} + {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.": "${@0}\\cdot {@1} = {@2}\\cdot 100 {@3} {@4} = {@5} {@6} {@7} = {@8}$.",
  "0 – 4: nadol, 5 – 9: nahor. Číslice vpravo nahraď nulami.": "0 – 4: 버림, 5 – 9: 올림. 오른쪽 숫자는 0으로 바꾸세요.",
  "3 042 705 = tri milióny štyridsaťdvatisíc sedemstopäť": "3 042 705 = 삼백사만 이천칠백오",
  "<span class=\"c-ok\">{@0} ≐ {@1} (na desiatky)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (na stovky)</span>": "<span class=\"c-ok\">{@0} ≐ {@1} (10 단위)</span> · <span class=\"c-accent\">{@2} ≐ {@3} (100 단위)</span>",
  "Aké číslo je $\\text{{@0}}$?": "$\\text{{@0}}$은 어떤 수일까요?",
  "Akú hodnotu má skupina $\\text{{@0}}$?": "묶음 $\\text{{@0}}$의 값은 얼마일까요?",
  "Akú hodnotu má číslica {@0} v čísle ${@1}$?": "${@1}$에서 숫자 {@0}이 나타내는 값은 얼마일까요?",
  "Akú časť celku tvoria vyfarbené diely? Zapíš zlomkom v tvare a/b (napríklad 2/5). {@0}": "색칠한 조각은 전체의 얼마일까요? a/b 꼴의 분수로 쓰세요(예: 2/5). {@0}",
  "Aký je obvod obdĺžnika (v {@0})?": "직사각형의 둘레는 몇 {@0}일까요?",
  "Aký je obvod obdĺžnika v centimetroch?": "직사각형의 둘레는 몇 센티미터일까요?",
  "Bez rozdielu 8 € by mali obaja rovnako: (50 − 8) : 2 = 21 €.": "8 €의 차이가 없다면 두 사람은 똑같이 가질 거예요: (50 − 8) : 2 = 21 €.",
  "Bez rozdielu: ${@0} - {@1} = {@2}$, to je dvakrát toľko, koľko má mladší: ${@3} : 2 = {@4}$. {@5} Skúška: ${@6} + {@7} = {@8}$.": "차이를 빼면: ${@0} - {@1} = {@2}$, 이것은 동생이 가진 돈의 두 배예요: ${@3} : 2 = {@4}$. {@5} 확인: ${@6} + {@7} = {@8}$.",
  "Body {@0}. Úsečky: {@1}. Spolu {@2}.": "점: {@0}. 선분: {@1}. 모두 {@2}개.",
  "Celok je rozdelený na {@0} {@1} (menovateľ), {@2} (čitateľ): ${@3}$.": "전체가 똑같은 {@1} {@0}개로 나뉘어 있고(분모), {@2}(분자): ${@3}$.",
  "Celok má {@0} {@1}: ${@2}\\cdot {@3} = {@4}$, teda ${@5}\\,\\text{{@6}}$.": "전체에는 {@1}이 {@0}개 있어요: ${@2}\\cdot {@3} = {@4}$, 그러므로 ${@5}\\,\\text{{@6}}$예요.",
  "Celok sa skladá z {@0} rovnakých častí. Vynásob.": "전체는 똑같은 부분 {@0}개로 되어 있어요. 곱하세요.",
  "Cesta vlakom z Bratislavy do Košíc trvá asi": "서울에서 부산까지 기차로 가는 데 걸리는 시간은 약",
  "Cez dva body vieme viesť jedinú priamku.": "두 점을 지나는 직선은 하나뿐이에요.",
  "Ciferný súčet: ${@0} = {@1}$, je deliteľný tromi.": "각 자리 숫자의 합: ${@0} = {@1}$, 3으로 나누어떨어져요.",
  "Ciferný súčet: ${@0} = {@1}$, nie je deliteľný tromi.": "각 자리 숫자의 합: ${@0} = {@1}$, 3으로 나누어떨어지지 않아요.",
  "Desatina": "10분의 1",
  "Deň má 24 hodín: ${@0}\\cdot 24 = {@1}$, a ešte ${@2} + {@3} = {@4}$ hodín.": "하루는 24시간이에요: ${@0}\\cdot 24 = {@1}$, 그리고 ${@2} + {@3} = {@4}$시간.",
  "Dni a hodiny nemôžeš len tak sčítať. Najprv premeň {@0} {@1} na hodiny.": "일과 시간을 그냥 더하면 안 돼요. 먼저 {@0}{@1}을 시간으로 바꾸세요.",
  "Do hrnčeka sa zmestí asi": "머그잔에 들어가는 양은 약",
  "Do menovateľa patrí počet všetkých dielov, nie iba nevyfarbených.": "분모에는 색칠하지 않은 조각만이 아니라 전체 조각의 수가 들어가요.",
  "Do vane sa zmestí asi": "욕조에 들어가는 양은 약",
  "Do {@0} {@1} sa zmestí ${@2}\\,\\text{{@3}}$. {@4}": "{@1}의 {@0}에는 ${@2}\\,\\text{{@3}}$가 들어가요. {@4}",
  "Doplň chýbajúce číslo: $\\square : {@0} = {@1}$": "빈칸에 알맞은 수를 쓰세요: $\\square : {@0} = {@1}$",
  "Doplň chýbajúce číslo: $\\square\\cdot {@0} = {@1}$": "빈칸에 알맞은 수를 쓰세요: $\\square\\cdot {@0} = {@1}$",
  "Druhý deň neprešli {@0} km, ale o {@1} km viac ako prvý deň.": "둘째 날에는 {@0} km를 걸은 게 아니라 첫째 날보다 {@1} km 더 걸었어요.",
  "Druhý deň: ${@0} + {@1} = {@2}$ km. Tretí deň: ${@3} : 2 = {@4}$ km. Spolu: ${@5} + {@6} + {@7} = {@8}$ km.": "둘째 날: ${@0} + {@1} = {@2}$ km. 셋째 날: ${@3} : 2 = {@4}$ km. 모두: ${@5} + {@6} + {@7} = {@8}$ km.",
  "Dvaja bratia majú spolu {@0} {@1}. Starší má o {@2} {@3} viac ako mladší. Koľko eur má {@4} brat?": "두 형제가 가진 돈은 모두 {@0} {@1}예요. 형은 동생보다 {@2} {@3} 더 많이 가지고 있어요. {@4}의 돈은 몇 유로일까요?",
  "Dvanásť bodiek usporiadaných do obdĺžnikov": "직사각형 모양으로 늘어놓은 점 12개",
  "Dvojica {@0} sa nesmie použiť: odčítať smieš len I pred V a X, X pred L a C, C pred D a M.": "{@0}는 쓸 수 없어요: 빼는 표기는 I를 V와 X 앞에, X를 L과 C 앞에, C를 D와 M 앞에 쓸 때만 돼요.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}.": "짝: ${@0} = {@1}$. 약수: {@2}.",
  "Dvojice: ${@0} = {@1}$. Delitele: {@2}. Číslo má iba dva delitele.": "짝: ${@0} = {@1}$. 약수: {@2}. 이 수는 약수가 두 개뿐이에요.",
  "Dvoma rôznymi bodmi prechádza práve jedna priamka.": "서로 다른 두 점을 지나는 직선은 딱 하나예요.",
  "Dĺžka triedy je asi": "교실의 길이는 약",
  "Hmotnosť jablka je asi": "사과 한 개의 무게는 약",
  "Hmotnosť nákladného auta je asi": "트럭의 무게는 약",
  "Hmotnosť žiaka 5. ročníka je asi": "초등학교 5학년 학생의 몸무게는 약",
  "Hrúbka zošita je asi": "공책의 두께는 약",
  "Hľadaj v násobilke čísla {@0} posledný výsledok, ktorý ešte nepresiahne {@1}.": "{@0}단 곱셈구구에서 {@1}을 넘지 않는 마지막 결과를 찾으세요.",
  "Hľadáš {@0} číslo, ty si zostavil {@1}.": "{@0} 수를 찾아야 하는데, {@1} 수를 만들었어요.",
  "Je to naopak: priemer je dvojnásobok polomeru, $d = 2\\cdot r$.": "반대예요: 지름은 반지름의 두 배예요, $d = 2\\cdot r$.",
  "Je číslo ${@0}$ deliteľné číslom {@1}?": "${@0}$은 {@1}로 나누어떨어질까요?",
  "Je číslo ${@0}$ párne alebo nepárne?": "${@0}$은 짝수일까요, 홀수일까요?",
  "Jeden deň má 24 hodín.": "하루는 24시간이에요.",
  "Jedna časť je {@0}. Koľko je ${@1}$ z čísla {@2}?": "한 부분은 {@0}이에요. {@2}의 ${@1}$은 얼마일까요?",
  "Koľko eur je {@0} z {@1} eur?": "{@1} 유로의 {@0}은 몇 유로일까요?",
  "Koľko eur má mladší brat?": "동생은 몇 유로를 가지고 있나요?",
  "Koľko eur má starší brat?": "형은 몇 유로를 가지고 있나요?",
  "Koľko eur zostane, keď od súčtu {@0} odčítaš rozdiel {@1}?": "합 {@0}에서 차 {@1}을 빼면 몇 유로가 남을까요?",
  "Koľko eur {@0} spolu?": "모두 몇 유로를 {@0}?",
  "Koľko eur {@0} zostalo?": "{@0} 남은 돈은 몇 유로일까요?",
  "Koľko gramov váži celý koláč?": "케이크 전체의 무게는 몇 그램일까요?",
  "Koľko hodín majú {@0} {@1} a {@2} {@3}?": "{@0}{@1} {@2}{@3}은 몇 시간일까요?",
  "Koľko hodín majú {@0} {@1}?": "{@0}{@1}은 몇 시간일까요?",
  "Koľko je ${@0}$ z čísla {@1}?": "{@1}의 ${@0}$은 얼마일까요?",
  "Koľko je polovica obvodu, teda $a + b$?": "둘레의 절반, 즉 $a + b$는 얼마일까요?",
  "Koľko kilometrov meria celá cesta?": "길 전체의 길이는 몇 킬로미터일까요?",
  "Koľko kilometrov prešli druhý deň?": "둘째 날에는 몇 킬로미터를 걸었을까요?",
  "Koľko kilometrov prešli tretí deň?": "셋째 날에는 몇 킬로미터를 걸었을까요?",
  "Koľko kilometrov prešli za tri dni spolu?": "사흘 동안 모두 몇 킬로미터를 걸었을까요?",
  "Koľko litrov sa zmestí do celej nádrže?": "물탱크 전체에는 몇 리터가 들어갈까요?",
  "Koľko minút trvala celá cesta?": "여행 전체에 몇 분이 걸렸을까요?",
  "Koľko minút uplynie od {@0} do {@1}?": "{@0}부터 {@1}까지 몇 분이 지날까요?",
  "Koľko násobkov čísla {@0} leží medzi číslami 1 a {@1} (vrátane)?": "1부터 {@1}까지(양 끝 포함) {@0}의 배수는 몇 개일까요?",
  "Koľko rokov bude mať {@0} o {@1} {@2}?": "{@1}년 뒤에 {@0}의 나이는 몇 살일까요?",
  "Koľko rokov má {@0} teraz?": "지금 {@0}의 나이는 몇 살일까요?",
  "Koľko úsečiek určuje {@0} bodov, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "어느 세 점도 한 직선 위에 있지 않은 점 {@0}개로 선분을 몇 개 만들 수 있을까요? (두 점마다 선분으로 이어요.)",
  "Koľko úsečiek určujú {@0} body, z ktorých žiadne tri neležia na jednej priamke? (Každé dva body spojíme úsečkou.)": "어느 세 점도 한 직선 위에 있지 않은 점 {@0}개로 선분을 몇 개 만들 수 있을까요? (두 점마다 선분으로 이어요.)",
  "Koľkokrát treba vziať {@0}, aby vyšlo {@1}?": "{@1}이 되려면 {@0}을 몇 배 해야 할까요?",
  "Kruh je kružnica aj s celou vnútornou časťou.": "원은 원둘레와 그 안쪽 전체를 합한 거예요.",
  "Kružnica je len čiara, kruh je aj plocha vnútri.": "원둘레는 선일 뿐이고, 원은 안쪽 면까지 포함해요.",
  "Kružnica má polomer ${@0}\\,\\text{{@1}}$. Aký má priemer (v {@2})?": "원의 반지름이 ${@0}\\,\\text{{@1}}$이에요. 지름은 몇 {@2}일까요?",
  "Kružnica má priemer ${@0}\\,\\text{{@1}}$. Aký má polomer (v {@2})?": "원의 지름이 ${@0}\\,\\text{{@1}}$이에요. 반지름은 몇 {@2}일까요?",
  "Ktorá číslica stojí v čísle ${@0}$ hneď vpravo od rádu {@1}?": "${@0}$에서 {@1}의 자리 바로 오른쪽에 있는 숫자는 무엇일까요?",
  "Ktoré dve čísla dajú spolu $1\\,000$?": "더해서 $1\\,000$이 되는 두 수는 무엇일까요?",
  "Ktoré dve čísla dajú spolu pekný súčin 100?": "곱해서 딱 떨어지는 100이 되는 두 수는 무엇일까요?",
  "Ktoré je {@0} prirodzené číslo, ktoré sa po zaokrúhlení na {@1} rovná ${@2}$?": "{@1} 단위로 반올림하면 ${@2}$가 되는 {@0} 자연수는 무엇일까요?",
  "Ktoré z čísel je násobkom čísla {@0}?": "다음 중 {@0}의 배수는 무엇일까요?",
  "Ktoré z čísel je {@0}?": "다음 중 {@0} 수는 무엇일까요?",
  "Ktorý je najväčší násobok čísla {@0}, ktorý nie je väčší ako {@1}?": "{@1}보다 크지 않은 {@0}의 배수 중 가장 큰 수는 무엇일까요?",
  "Ktorý zápis čísla ${@0}$ rímskymi číslicami je správny?": "${@0}$을 로마 숫자로 바르게 쓴 것은 무엇일까요?",
  "Mama": "엄마",
  "Menovatele sú rovnaké, rozhoduje čitateľ: ${@0} {@1} {@2}$.": "분모가 같으니 분자로 정해요: ${@0} {@1} {@2}$.",
  "Meníš na menšiu jednotku, preto násob.": "더 작은 단위로 바꾸니까 곱하세요.",
  "Meníš na väčšiu jednotku, preto deľ.": "더 큰 단위로 바꾸니까 나누세요.",
  "Menšiteľ nezistíš sčítaním. Od menšenca odčítaj rozdiel.": "빼는 수는 더해서 구하지 않아요. 빼지는 수에서 차를 빼세요.",
  "Menšiteľ zistíme odčítaním: ${@0} - {@1} = {@2}$.": "빼는 수는 뺄셈으로 구해요: ${@0} - {@1} = {@2}$.",
  "Minul": "쓴 돈은",
  "Minula": "쓴 돈은",
  "Mladší má {@0} {@1}.": "동생은 {@0} {@1}를 가지고 있어요.",
  "Na ${@0}$ sa zaokrúhľujú čísla od ${@1}$ (nahor) po ${@2}$ (nadol). {@3} je ${@4}$.": "${@1}$(올림)부터 ${@2}$(버림)까지의 수가 반올림하면 ${@0}$이 돼요. {@3} 수는 ${@4}$예요.",
  "Na farme nazbierali {@0} {@1}. Do jedného obalu sa zmestí {@2} vajec. Koľko obalov potrebujú na všetky vajcia?": "농장에서 {@1} {@0}개를 모았어요. 한 상자에 달걀이 {@2}개 들어가요. 달걀을 모두 담으려면 상자가 몇 개 필요할까요?",
  "Na menšiu jednotku násobíme, na väčšiu jednotku delíme.": "더 작은 단위로 바꿀 때는 곱하고, 더 큰 단위로 바꿀 때는 나눠요.",
  "Na miesto tisícov daj najmenšiu číslicu, ktorá nie je 0.": "천의 자리에는 0이 아닌 가장 작은 숫자를 놓으세요.",
  "Na výlet ide {@0} {@1}. Do jednej lodičky sa {@2} {@3} {@4}. Koľko lodičiek potrebujú, aby sa zviezli všetky deti naraz?": "{@1} {@0}명이 소풍을 가요. 보트 한 척에 {@4} {@3}명이 {@2}. 모든 아이가 한 번에 타려면 보트가 몇 척 필요할까요?",
  "Na zvyšok treba ešte jeden obal, spolu {@0} {@1}.": "남은 것을 담으려면 상자가 하나 더 필요해요. 모두 {@1} {@0}개예요.",
  "Na zvyšok treba ešte jednu lodičku, spolu {@0} {@1}.": "남은 아이들을 위해 보트가 한 척 더 필요해요. 모두 {@1} {@0}척이에요.",
  "Najmenšie": "가장 작은",
  "Najprv dopočítaj do celej hodiny, potom pripočítaj zvyšok. Hodina má 60 minút.": "먼저 정각까지 세고, 그다음 나머지를 더하세요. 1시간은 60분이에요.",
  "Najprv preveď obe čísla na arabské číslice, potom sčítaj.": "먼저 두 수를 아라비아 숫자로 바꾼 다음 더하세요.",
  "Najprv rovnaké jednotky: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. Potom $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.": "먼저 단위를 같게 해요: ${@0}\\,\\text{dm} = {@1}\\,\\text{cm}$. 그다음 $o = 2\\cdot({@2} + {@3}) = 2\\cdot {@4} = {@5}\\,\\text{cm}$.",
  "Najprv vypočítaj časť z celej sumy, potom spočítaj všetky výdavky a odčítaj ich.": "먼저 전체 금액의 일부를 계산하고, 쓴 돈을 모두 더한 다음 빼세요.",
  "Najprv zaokrúhli každé číslo na stovky, až potom počítaj.": "먼저 각 수를 100 단위로 반올림한 다음 계산하세요.",
  "Najprv zisti vek {@0} teraz z údaju {@1} {@2}, až potom pripočítaj {@3}. {@4} o {@5} {@6} už nebude {@7} {@8}.": "먼저 {@1}{@2}라는 정보로 지금 {@0}의 나이를 구하고, 그다음 {@3}을 더하세요. {@5}년 뒤에는 {@4}의 나이가 더 이상 {@7}가 아니에요.",
  "Najprv zisti, koľko je jedna časť (deľ menovateľom), potom vynásob čitateľom.": "먼저 한 부분이 얼마인지 구하고(분모로 나누기), 그다음 분자를 곱하세요.",
  "Najprv zisti, koľko rokov má dieťa teraz (delenie), potom pripočítaj.": "먼저 아이가 지금 몇 살인지 구하고(나눗셈), 그다음 더하세요.",
  "Najprv zátvorka, potom násobenie, nakoniec odčítanie.": "괄호를 먼저, 그다음 곱셈, 마지막으로 뺄셈을 해요.",
  "Najväčšia číslica patrí na miesto tisícov.": "가장 큰 숫자는 천의 자리에 놓아요.",
  "Najväčšie": "가장 큰",
  "Nakresli si úsečkový model. Odčítaj rozdiel od súčtu – zvyšok si bratia rozdelia rovnako.": "선분 모델을 그려 보세요. 합에서 차를 빼면, 나머지를 형제가 똑같이 나눠요.",
  "Napísal si iba samotnú číslicu. Hodnota číslice závisí od miesta, kde stojí – doplň za ňu správny počet núl.": "숫자만 썼어요. 숫자의 값은 그 숫자가 있는 자리에 따라 달라요. 뒤에 0을 알맞게 붙이세요.",
  "Napíš všetky delitele čísla {@0}. Oddeľ ich bodkočiarkou.": "{@0}의 약수를 모두 쓰세요. 세미콜론으로 구분하세요.",
  "Napíš {@0} čísla ${@1}$.": "${@1}$의 {@0}를 쓰세요.",
  "Nasledovník je o 1 väčší: ${@0} + 1 = {@1}$.": "다음 수는 1 큰 수예요: ${@0} + 1 = {@1}$.",
  "Nasledovník je číslo o 1 väčšie.": "다음 수는 1 큰 수예요.",
  "Neznámy delenec zistíme násobením: ${@0}\\cdot {@1} = {@2}$.": "모르는 나뉘는 수는 곱셈으로 구해요: ${@0}\\cdot {@1} = {@2}$.",
  "Neznámy delenec zistíš násobením, nie delením: podiel vynásob deliteľom.": "모르는 나뉘는 수는 나눗셈이 아니라 곱셈으로 구해요: 몫에 나누는 수를 곱하세요.",
  "Neznámy činiteľ zistíme delením: ${@0} : {@1} = {@2}$.": "모르는 곱하는 수는 나눗셈으로 구해요: ${@0} : {@1} = {@2}$.",
  "Neznámy činiteľ zistíš delením, nie násobením: súčin vydeľ známym činiteľom.": "모르는 곱하는 수는 곱셈이 아니라 나눗셈으로 구해요: 곱을 알고 있는 수로 나누세요.",
  "Niektoré úsečky si započítal dvakrát. Úsečka AB je tá istá ako BA – každú dvojicu bodov počítaj iba raz.": "어떤 선분은 두 번 셌어요. 선분 AB와 BA는 같아요. 두 점의 짝은 한 번만 세세요.",
  "Nájdi rád, na ktorý zaokrúhľuješ, a posuň sa o jedno miesto doprava.": "반올림할 자리를 찾고 한 자리 오른쪽으로 가세요.",
  "Násobky: {@0}, {@1}, {@2}, …, {@3}. Posledný je ${@4}\\cdot {@5} = {@6}$, ďalší ${@7}$ je už väčší ako {@8}. Je ich {@9}.": "배수: {@0}, {@1}, {@2}, …, {@3}. 마지막은 ${@4}\\cdot {@5} = {@6}$이고, 그다음 ${@7}$은 {@8}보다 커요. 모두 {@9}개예요.",
  "Obdĺžnik má dve dvojice rovnakých strán.": "직사각형은 길이가 같은 변이 두 쌍 있어요.",
  "Obdĺžnik má obvod ${@0}\\,\\text{{@1}}$ a jednu stranu ${@2}\\,\\text{{@3}}$. Aká dlhá je druhá strana (v {@4})?": "직사각형의 둘레는 ${@0}\\,\\text{{@1}}$이고 한 변은 ${@2}\\,\\text{{@3}}$예요. 다른 변의 길이는 몇 {@4}일까요?",
  "Obdĺžnik má strany ${@0}\\,\\text{dm}$ a ${@1}\\,\\text{cm}$. Vypočítaj jeho obvod v centimetroch.": "직사각형의 두 변이 ${@0}\\,\\text{dm}$와 ${@1}\\,\\text{cm}$예요. 둘레를 센티미터로 구하세요.",
  "Obvod je dvojnásobok súčtu dvoch susedných strán.": "둘레는 이웃한 두 변의 합의 두 배예요.",
  "Obvod obdĺžnika je $2\\cdot(a + b)$.": "직사각형의 둘레는 $2\\cdot(a + b)$예요.",
  "Obvod obsahuje každú stranu dvakrát. Najprv ho vydeľ dvomi, až potom odčítaj známu stranu.": "둘레에는 각 변이 두 번씩 들어 있어요. 먼저 2로 나눈 다음 알고 있는 변을 빼세요.",
  "Obvod štvorca, obdĺžnika a trojuholníka": "정사각형, 직사각형, 삼각형의 둘레",
  "Od obvodu odčítaj dĺžky známych strán.": "둘레에서 알고 있는 변의 길이를 빼세요.",
  "Od obvodu {@0} odčítaj {@1}.": "둘레 {@0}에서 {@1}을 빼세요.",
  "Od súčtu si správne odčítal rozdiel, ale zvyšok si ešte musia bratia rozdeliť na dve rovnaké časti.": "합에서 차를 바르게 뺐지만, 남은 것을 형제가 똑같이 둘로 나눠야 해요.",
  "Od súčtu {@0} odčítaj známu stranu {@1}.": "합 {@0}에서 알고 있는 변 {@1}을 빼세요.",
  "Od {@0} do {@1} je {@2} min, od {@3} do {@4} je {@5} min. Spolu ${@6} + {@7} = {@8}$ minút.": "{@0}부터 {@1}까지 {@2}분, {@3}부터 {@4}까지 {@5}분. 모두 ${@6} + {@7} = {@8}$분이에요.",
  "Od {@0} do {@1} uplynulo {@2} minút.": "{@0}부터 {@1}까지 {@2}분이 지났어요.",
  "Odčítaj": "빼세요",
  "Odčítal si iba jednu stranu. Od obvodu odčítaj obe známe strany.": "한 변만 뺐어요. 둘레에서 알고 있는 두 변을 모두 빼세요.",
  "Odčítal si iba peniaze za hru. Nezabudni odčítať aj {@0} {@1} za knihu.": "게임에 쓴 돈만 뺐어요. 책값 {@0} {@1}도 빼는 것을 잊지 마세요.",
  "Odčítal si iba peniaze za knihu. Odčítaj aj sumu za hru – je to {@0} všetkých peňazí.": "책값만 뺐어요. 게임에 쓴 돈도 빼세요. 그것은 전체 돈의 {@0}이에요.",
  "Osmina": "8분의 1",
  "Otec": "아빠",
  "Podiel vynásob deliteľom.": "몫에 나누는 수를 곱하세요.",
  "Polomer je kratší ako priemer, preto priemer treba dvomi deliť, nie násobiť.": "반지름은 지름보다 짧으니까 지름을 2로 나눠야 해요. 곱하면 안 돼요.",
  "Polovica": "절반",
  "Polovica obvodu je súčet oboch susedných strán. Ešte od nej odčítaj známu stranu.": "둘레의 절반은 이웃한 두 변의 합이에요. 거기에서 알고 있는 변을 빼세요.",
  "Polovica obvodu obdĺžnika je súčet dvoch susedných strán.": "직사각형 둘레의 절반은 이웃한 두 변의 합이에요.",
  "Polovicu": "절반",
  "Polpriamka má jeden začiatočný bod.": "반직선은 시작점이 하나 있어요.",
  "Polpriamka má začiatok v jednom bode a iba na jednu stranu pokračuje bez konca.": "반직선은 한 점에서 시작해서 한쪽으로만 끝없이 이어져요.",
  "Polpriamka začína v jednom bode a na druhú stranu pokračuje bez konca.": "반직선은 한 점에서 시작해서 다른 쪽으로 끝없이 이어져요.",
  "Pomenuj body písmenami a systematicky vypíš všetky dvojice: najprv s bodom A, potom s bodom B…": "점에 알파벳으로 이름을 붙이고 모든 짝을 차례로 쓰세요: 먼저 점 A와의 짝, 그다음 점 B와의 짝…",
  "Poradie operácií": "계산 순서",
  "Porovnávaj číslice zľava, kým nenájdeš prvú rozdielnu.": "처음으로 다른 숫자가 나올 때까지 왼쪽부터 숫자를 비교하세요.",
  "Posledná číslica je {@0}, je párna.": "끝자리 숫자가 {@0}이고, 짝수예요.",
  "Posledná číslica je {@0}, nie je 0 ani 5.": "끝자리 숫자가 {@0}이고, 0도 5도 아니에요.",
  "Posledná číslica je {@0}, nie je 0.": "끝자리 숫자가 {@0}이고, 0이 아니에요.",
  "Posledná číslica je {@0}, nie je párna.": "끝자리 숫자가 {@0}이고, 짝수가 아니에요.",
  "Posledná číslica je {@0}, preto je číslo {@1}.": "끝자리 숫자가 {@0}이므로 이 수는 {@1}예요.",
  "Posledná číslica je {@0}.": "끝자리 숫자는 {@0}이에요.",
  "Poznáš {@0}, celok je teda väčší. Časť treba násobiť, nie deliť.": "{@0}을 알고 있으니 전체는 더 커요. 부분을 나누지 말고 곱해야 해요.",
  "Pozor, väčší menovateľ neznamená väčší zlomok. Čím na viac dielov celok rozdelíš, tým sú diely menšie.": "조심하세요. 분모가 크다고 더 큰 분수가 아니에요. 전체를 더 많은 조각으로 나눌수록 조각은 작아져요.",
  "Pozri sa iba na poslednú číslicu.": "끝자리 숫자만 보세요.",
  "Pozri sa na poslednú číslicu.": "끝자리 숫자를 보세요.",
  "Pozri sa na číslicu hneď vpravo od rádu, na ktorý zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "반올림할 자리의 바로 오른쪽 숫자를 보세요: 0 – 4는 버림, 5 – 9는 올림.",
  "Pozri sa pozorne: oba zlomky majú rovnaký čitateľ aj rovnaký menovateľ.": "잘 보세요. 두 분수는 분자도 분모도 같아요.",
  "Počítal si zľava doprava. Násobenie má prednosť pred odčítaním: najprv vynásob {@0} výsledkom zátvorky, až potom odčítaj od {@1}.": "왼쪽에서 오른쪽으로 계산했어요. 곱셈은 뺄셈보다 먼저 해요: 먼저 {@0}에 괄호의 결과를 곱한 다음 {@1}에서 빼세요.",
  "Počítal si zľava doprava. Násobenie má prednosť pred sčítaním: ${@0}\\cdot {@1}$ vypočítaj skôr, ako budeš sčítať.": "왼쪽에서 오른쪽으로 계산했어요. 곱셈은 덧셈보다 먼저 해요: 더하기 전에 ${@0}\\cdot {@1}$을 계산하세요.",
  "Počítal si, akoby tam zátvorka nebola. Číslo {@0} násobí celý rozdiel v zátvorke – zátvorku vypočítaj ako prvú.": "괄호가 없는 것처럼 계산했어요. {@0}은 괄호 안의 차 전체에 곱해져요. 괄호를 먼저 계산하세요.",
  "Predchodca je o 1 menší: ${@0} - 1 = {@1}$.": "앞의 수는 1 작은 수예요: ${@0} - 1 = {@1}$.",
  "Predchodca je číslo o 1 menšie.": "앞의 수는 1 작은 수예요.",
  "Predstav si ten predmet a porovnaj ho s niečím, čo poznáš (napríklad 1 kg múky, 1 m – veľký krok, 1 l – fľaša).": "그 물건을 떠올려 보고 아는 것과 비교해 보세요(예: 밀가루 1 kg, 1 m – 큰 걸음 하나, 1 l – 병 하나).",
  "Premenil si hodiny iba na minúty. Každá minúta má ešte 60 sekúnd.": "시간을 분으로만 바꿨어요. 1분은 다시 60초예요.",
  "Premenil si sekundy iba na minúty. Hodina má 60 minút, preto vydeľ ešte šesťdesiatimi.": "초를 분으로만 바꿨어요. 1시간은 60분이니 60으로 한 번 더 나누세요.",
  "Premeň ${@0}\\,\\text{dm}$ na centimetre.": "${@0}\\,\\text{dm}$를 센티미터로 바꾸세요.",
  "Premeň ${@0}\\,\\text{{@1}}$ na {@2}.": "${@0}\\,\\text{{@1}}$을 {@2}로 바꾸세요.",
  "Premeň decimetre na centimetre ($1\\,\\text{dm} = 10\\,\\text{cm}$) a až potom počítaj.": "데시미터를 센티미터로 바꾼($1\\,\\text{dm} = 10\\,\\text{cm}$) 다음 계산하세요.",
  "Prevody jednotiek dĺžky, hmotnosti, objemu a času": "길이, 무게, 들이, 시간의 단위 바꾸기",
  "Pri deliteľnosti tromi nerozhoduje posledná číslica. Sčítaj všetky číslice a over, či je ciferný súčet deliteľný tromi.": "3으로 나누어떨어지는지는 끝자리 숫자로 정하지 않아요. 모든 자리 숫자를 더해서 그 합이 3으로 나누어떨어지는지 확인하세요.",
  "Pri deliteľnosti číslom {@0} rozhoduje iba posledná číslica. Pozri sa na ňu ešte raz a porovnaj ju so znakom deliteľnosti.": "{@0}로 나누어떨어지는지는 끝자리 숫자만 보면 돼요. 끝자리를 다시 보고 배수 판정법과 비교하세요.",
  "Pri čase sa nepremieňa po desiatkach: hodina má 60 minút a minúta 60 sekúnd.": "시간은 10씩 바꾸지 않아요: 1시간은 60분, 1분은 60초예요.",
  "Pri čase sa nepremieňa po stovkách: 1 {@0} = 60 {@1}, preto deľ šesťdesiatimi.": "시간은 100씩 바꾸지 않아요: 1 {@0} = 60 {@1}이니까 60으로 나누세요.",
  "Priamka je nekonečná na obe strany.": "직선은 양쪽으로 끝없이 이어져요.",
  "Priamka má začiatok aj koniec.": "직선은 시작과 끝이 있다.",
  "Priamka nemá koniec, polpriamka má začiatok, úsečka má začiatok aj koniec.": "직선은 끝이 없고, 반직선은 시작점이 있고, 선분은 시작과 끝이 있어요.",
  "Priamka nemá koniec, preto nemá ani dĺžku.": "직선은 끝이 없으니 길이도 없어요.",
  "Priamka nemá začiatok ani koniec – na oboch stranách by pokračovala prerušovanou čiarou.": "직선은 시작도 끝도 없어요. 양쪽 모두 점선으로 계속 이어질 거예요.",
  "Priamka, polpriamka, úsečka a kružnica": "직선, 반직선, 선분, 원",
  "Priamku môžeme odmerať pravítkom.": "직선은 자로 잴 수 있다.",
  "Priemer je dlhší ako polomer, preto polomer treba dvomi násobiť, nie deliť.": "지름은 반지름보다 기니까 반지름에 2를 곱해야 해요. 나누면 안 돼요.",
  "Priemer je dvakrát dlhší ako polomer.": "지름은 반지름의 두 배예요.",
  "Priemer kružnice je polovica polomeru.": "원의 지름은 반지름의 절반이다.",
  "Pripočítaj": "더하세요",
  "Pripočítaj ešte {@0} {@1}: ${@2} + {@3}$.": "{@0}{@1}을 더 더하세요: ${@2} + {@3}$.",
  "Pripočítaj {@0} {@1}: ${@2} + {@3}$.": "{@0}{@1}을 더하세요: ${@2} + {@3}$.",
  "Pätina": "5분의 1",
  "Pätinu": "5분의 1",
  "Rovnaký menovateľ: porovnaj čitatele. Rovnaký čitateľ: menší menovateľ znamená väčšie diely.": "분모가 같으면 분자를 비교하세요. 분자가 같으면 분모가 작을수록 조각이 커요.",
  "Rovnostranný trojuholník má 3 rovnaké strany.": "정삼각형은 세 변의 길이가 같아요.",
  "Rozdelil si súčet na dve rovnaké časti, ale bratia nemajú rovnako. Najprv od súčtu odčítaj rozdiel {@0} {@1}.": "합을 똑같이 둘로 나눴지만, 형제가 가진 돈은 같지 않아요. 먼저 합에서 차 {@0} {@1}을 빼세요.",
  "Rozdelíme po rádoch: {@0}. Spolu ${@1} = {@2}$.": "자리별로 나눠요: {@0}. 모두 ${@1} = {@2}$.",
  "Rozdeľ zápis na skupiny tisícov, stoviek, desiatok a jednotiek. Dvojice ako CM, XC, IV znamenajú odčítanie.": "표기를 천, 백, 십, 일의 묶음으로 나누세요. CM, XC, IV 같은 짝은 빼기를 뜻해요.",
  "Rozhodujúca je číslica vpravo od rádu: pri 5 a viac sa zaokrúhľuje nahor, pri 4 a menej nadol.": "결정하는 것은 그 자리 오른쪽의 숫자예요: 5 이상이면 올림, 4 이하이면 버림.",
  "Rozložíme po rádoch: {@0}.": "자리별로 가르기: {@0}.",
  "Rády počítaj sprava: na poslednom mieste sú jednotky, pred nimi desiatky, stovky, tisíce…": "자리는 오른쪽부터 세세요: 마지막이 일의 자리, 그 앞이 십, 백, 천의 자리…",
  "Rímske číslice s odčítaním": "빼는 표기를 쓰는 로마 숫자",
  "S = stovky, D = desiatky, J = jednotky danej triedy": "S = 백의 자리, D = 십의 자리, J = 일의 자리 (각 마디 안에서)",
  "Skús deliť: ${@0} : {@1} = {@2}$, zvyšok {@3}. Násobok čísla {@4} sa dá vydeliť bez zvyšku.": "나눠 보세요: ${@0} : {@1} = {@2}$, 나머지 {@3}. {@4}의 배수는 나머지 없이 나누어떨어져요.",
  "Skúšaj deliť číslami 1, 2, 3, … a hľadaj dvojice, ktorých súčin je {@0}.": "1, 2, 3, …으로 나눠 보면서 곱이 {@0}이 되는 짝을 찾으세요.",
  "Spolu {@0} {@1}.": "모두 {@1} {@0}개.",
  "Spomeň si na malú násobilku čísla {@0}.": "{@0}단 곱셈구구를 떠올려 보세요.",
  "Spočítaj hodnotu tohto zápisu – menší znak za väčším sa pripočítava, takže vyjde iné číslo.": "이 표기의 값을 계산해 보세요. 큰 기호 뒤의 작은 기호는 더하므로 다른 수가 나와요.",
  "Spočítaj všetky diely – to je menovateľ. Potom spočítaj vyfarbené diely – to je čitateľ.": "모든 조각을 세면 분모예요. 그다음 색칠한 조각을 세면 분자예요.",
  "Spočítal si nevyfarbené diely. Čitateľ hovorí, koľko dielov je vyfarbených.": "색칠하지 않은 조각을 셌어요. 분자는 색칠한 조각이 몇 개인지 나타내요.",
  "Správne je {@0}: {@1}. Ostatné zápisy porušujú pravidlá alebo majú inú hodnotu.": "정답은 {@0}이에요: {@1}. 다른 표기는 규칙에 어긋나거나 값이 달라요.",
  "Starší má ${@0} + {@1} = {@2}$ {@3}.": "형은 ${@0} + {@1} = {@2}$ {@3}를 가지고 있어요.",
  "Strany sú v rôznych jednotkách. Najprv premeň decimetre na centimetre, až potom sčítavaj.": "변의 단위가 서로 달라요. 먼저 데시미터를 센티미터로 바꾼 다음 더하세요.",
  "Súčin vydeľ známym činiteľom.": "곱을 알고 있는 수로 나누세요.",
  "Sčítaj ${@0} + {@1}$.": "${@0} + {@1}$을 더하세요.",
  "Sčítaj dve susedné strany: ${@0} + {@1}$.": "이웃한 두 변을 더하세요: ${@0} + {@1}$.",
  "Sčítaj dĺžky všetkých troch strán.": "세 변의 길이를 모두 더하세요.",
  "Sčítaj hodnoty skupín {@0}.": "묶음 {@0}의 값을 더하세요.",
  "Sčítaj všetky číslice čísla.": "그 수의 모든 자리 숫자를 더하세요.",
  "Sčítaj známe strany: ${@0} + {@1}$.": "알고 있는 변을 더하세요: ${@0} + {@1}$.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – dve dĺžky $a$ a dve dĺžky $b$.": "두 변만 더했어요. 직사각형은 변이 네 개예요: 길이 $a$가 두 개, 길이 $b$가 두 개.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany – súčet dvoch susedných strán ešte vynásob dvomi.": "두 변만 더했어요. 직사각형은 변이 네 개이니 이웃한 두 변의 합에 2를 곱하세요.",
  "Sčítal si čísla v rôznych jednotkách. Najprv premeň {@0} {@1} na {@2}.": "단위가 다른 수를 더했어요. 먼저 {@0} {@1}을 {@2}로 바꾸세요.",
  "Teraz: ${@0} : {@1} = {@2}$ {@3}. O {@4} {@5}: ${@6} + {@7} = {@8}$.": "지금: ${@0} : {@1} = {@2}$ {@3}. {@4}년 뒤: ${@6} + {@7} = {@8}$.",
  "Toto je posledný násobok čísla {@0}, nie počet násobkov. Zisti, koľkokrát si musel {@1} pripočítať, aby si sa k nemu dostal.": "그건 {@0}의 마지막 배수이지 배수의 개수가 아니에요. 거기까지 가려면 {@1}을 몇 번 더해야 했는지 세어 보세요.",
  "Toto je presný výsledok. Úloha chce odhad: najprv zaokrúhli obe čísla na stovky, až potom počítaj.": "그건 정확한 답이에요. 문제는 어림을 원해요: 먼저 두 수를 100 단위로 반올림한 다음 계산하세요.",
  "Toto je vek {@0} teraz. Úloha sa pýta, koľko rokov bude mať o {@1} {@2}.": "그건 지금 {@0}의 나이예요. 문제는 {@1}년 뒤의 나이를 묻고 있어요.",
  "Toto má {@0} brat. Pýtame sa na {@1}.": "그건 {@0}의 돈이에요. 묻는 것은 {@1}의 돈이에요.",
  "Tretina": "3분의 1",
  "Tretinu": "3분의 1",
  "Tretí deň prešli polovicu toho, čo druhý deň, nie prvý.": "셋째 날에는 첫째 날이 아니라 둘째 날의 절반을 걸었어요.",
  "Triedy a rády čísla 3 042 705": "3 042 705의 마디와 자리",
  "Trojuholník má iba tri strany, nie štyri.": "삼각형은 변이 네 개가 아니라 세 개뿐이에요.",
  "Trojuholník má obvod ${@0}\\,\\text{{@1}}$. Dve jeho strany merajú ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Aká dlhá je tretia strana (v {@6})?": "삼각형의 둘레가 ${@0}\\,\\text{{@1}}$이에요. 두 변의 길이가 ${@2}\\,\\text{{@3}}$와 ${@4}\\,\\text{{@5}}$예요. 셋째 변의 길이는 몇 {@6}일까요?",
  "Trojuholník má strany ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$ a ${@4}\\,\\text{{@5}}$. Vypočítaj jeho obvod v {@6}.": "삼각형의 세 변이 ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$, ${@4}\\,\\text{{@5}}$예요. 둘레를 {@6} 단위로 구하세요.",
  "Turisti prešli prvý deň {@0} km. Druhý deň prešli o {@1} km viac ako prvý deň a tretí deň polovicu toho, čo druhý deň. Koľko kilometrov prešli za tri dni?": "등산객들이 첫째 날 {@0} km를 걸었어요. 둘째 날에는 첫째 날보다 {@1} km 더 걷고, 셋째 날에는 둘째 날의 절반을 걸었어요. 사흘 동안 몇 킬로미터를 걸었을까요?",
  "V košíku je {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "바구니에 {@1}가 {@0}개 있어요. 그중 ${@2}$가 빨간 사과예요. 빨간 사과는 몇 개일까요?",
  "V košíku sú {@0} {@1}. Červené sú ${@2}$ z nich. Koľko jabĺk je červených?": "바구니에 {@1}가 {@0}개 있어요. 그중 ${@2}$가 빨간 사과예요. 빨간 사과는 몇 개일까요?",
  "Vlak odišiel o {@0} a do cieľa prišiel o {@1}. Koľko minút trvala cesta?": "기차가 {@0}에 출발해서 {@1}에 도착했어요. 몇 분 걸렸을까요?",
  "Vyber správny údaj: {@0} …": "알맞은 값을 고르세요: {@0} …",
  "Vydeľ ${@0} : {@1}$.": "${@0} : {@1}$을 나누세요.",
  "Vydeľ a pozri sa na zvyšok. Ak niečo zostane, potrebuješ ešte jeden navyše.": "나누고 나머지를 보세요. 남는 것이 있으면 하나가 더 필요해요.",
  "Vydeľ {@0} menovateľom {@1}.": "{@0}을 분모 {@1}로 나누세요.",
  "Vydeľ číslo menovateľom a výsledok vynásob čitateľom.": "수를 분모로 나누고 그 결과에 분자를 곱하세요.",
  "Vynásob ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$을 곱하세요.",
  "Vynásob {@0} čitateľom {@1}.": "{@0}에 분자 {@1}을 곱하세요.",
  "Vynásobil si stranu samu sebou – to je obsah štvorca. Obvod je súčet dĺžok všetkých štyroch strán.": "변을 그 자신과 곱했어요. 그건 정사각형의 넓이예요. 둘레는 네 변의 길이의 합이에요.",
  "Vynásobil si strany – to je obsah, nie obvod. Obvod je súčet dĺžok všetkých strán.": "변을 곱했어요. 그건 둘레가 아니라 넓이예요. 둘레는 모든 변의 길이의 합이에요.",
  "Vypočítaj $({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$.": "$({@0} + {@1}) : {@2} + {@3}\\cdot {@4}$를 계산하세요.",
  "Vypočítaj ${@0} - {@1}\\cdot({@2} - {@3})$.": "${@0} - {@1}\\cdot({@2} - {@3})$를 계산하세요.",
  "Vypočítaj ${@0}\\cdot 100$.": "${@0}\\cdot 100$을 계산하세요.",
  "Vypočítaj a výsledok zapíš arabskými číslicami: $\\text{{@0}} + \\text{{@1}}$": "계산하고 답을 아라비아 숫자로 쓰세요: $\\text{{@0}} + \\text{{@1}}$",
  "Vypočítaj obvod obdĺžnika so stranami $a = {@0}\\,\\text{{@1}}$ a $b = {@2}\\,\\text{{@3}}$ (v {@4}).": "두 변이 $a = {@0}\\,\\text{{@1}}$, $b = {@2}\\,\\text{{@3}}$인 직사각형의 둘레를 구하세요({@4}).",
  "Vypočítaj obvod rovnostranného trojuholníka so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "한 변이 ${@0}\\,\\text{{@1}}$인 정삼각형의 둘레를 구하세요({@2}).",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$ (v {@2}).": "한 변이 ${@0}\\,\\text{{@1}}$인 정사각형의 둘레를 구하세요({@2}).",
  "Vypočítaj postupne každý deň a nakoniec všetko sčítaj.": "하루씩 차례로 계산하고 마지막에 모두 더하세요.",
  "Vypočítaj výhodne $125\\cdot {@0}\\cdot 8$.": "$125\\cdot {@0}\\cdot 8$을 편리하게 계산하세요.",
  "Vypočítaj výhodne $25\\cdot {@0}\\cdot 4$.": "$25\\cdot {@0}\\cdot 4$를 편리하게 계산하세요.",
  "Vypočítaj výhodne ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$을 편리하게 계산하세요.",
  "Vypočítaj zátvorku ${@0} + {@1}$.": "괄호 ${@0} + {@1}$을 계산하세요.",
  "Vypočítaj zátvorku ${@0} - {@1}$.": "괄호 ${@0} - {@1}$을 계산하세요.",
  "Vypočítal si iba ${@0}$, teda jeden diel. Ešte ho vynásob čitateľom {@1}.": "${@0}$, 즉 한 조각만 계산했어요. 거기에 분자 {@1}을 곱하세요.",
  "Vyučovacia hodina trvá": "수업 한 시간은",
  "Vzdialenosť z Bratislavy do Košíc je asi": "서울에서 부산까지의 거리는 약",
  "Väčšiu jednotku premeň na menšiu a potom pripočítaj druhú časť.": "큰 단위를 작은 단위로 바꾼 다음 나머지를 더하세요.",
  "Výška dospelého človeka je asi": "어른의 키는 약",
  "Všetky znaky si sčítal. Menší znak pred väčším sa však odčíta: napríklad IX je 9, nie 11.": "기호를 모두 더했어요. 하지만 작은 기호가 큰 기호 앞에 있으면 빼요: 예를 들어 IX는 11이 아니라 9예요.",
  "Všetky čísla majú rovnaký počet číslic, preto ich porovnávame zľava. {@0} je ${@1}$.": "모든 수의 자릿수가 같으니 왼쪽부터 비교해요. {@0} 수는 ${@1}$예요.",
  "Všímaj si, či má čiara začiatok, koniec, alebo ani jedno.": "선에 시작점이나 끝점이 있는지, 둘 다 없는지 살펴보세요.",
  "Z číslic {@0} zostav {@1} štvorciferné číslo. Každú číslicu použi práve raz.": "숫자 {@0}을 한 번씩 써서 {@1} 네 자리 수를 만드세요.",
  "Zabudol si na tretí deň. Úloha sa pýta na všetky tri dni.": "셋째 날을 잊었어요. 문제는 사흘 모두를 묻고 있어요.",
  "Zamenil si pojmy: nasledovník je o 1 väčší, predchodca o 1 menší. Hľadáš {@0}.": "용어를 바꿔 썼어요: 다음 수는 1 크고, 앞의 수는 1 작아요. {@0}를 찾아야 해요.",
  "Zamenil si úlohy čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "분자와 분모의 역할을 바꿨어요: 수를 분모로 나누고 그 결과에 분자를 곱하세요.",
  "Zaokrúhli ${@0}$ na stovky.": "${@0}$을 100 단위로 반올림하세요.",
  "Zaokrúhli obe čísla na stovky a odhadni výsledok: ${@0} {@1} {@2}$.": "두 수를 100 단위로 반올림하고 결과를 어림하세요: ${@0} {@1} {@2}$.",
  "Zaokrúhli číslo ${@0}$ na {@1}.": "${@0}$을 {@1} 단위로 반올림하세요.",
  "Zaokrúhlil si až výsledok. Pri odhade zaokrúhli najprv každé číslo zvlášť a potom počítaj so zaokrúhlenými číslami.": "결과만 반올림했어요. 어림할 때는 먼저 각 수를 따로 반올림한 다음 반올림한 수로 계산하세요.",
  "Zaokrúhlil si na iný rád. Na {@0} znamená, že všetky číslice vpravo od rádu {@1} nahradíš nulami.": "다른 자리로 반올림했어요. {@0} 단위로 반올림한다는 것은 {@1}의 자리 오른쪽 숫자를 모두 0으로 바꾼다는 뜻이에요.",
  "Zaokrúhľovanie na číselnej osi": "수직선에서 반올림하기",
  "Zapíš rímskymi číslicami číslo ${@0}$.": "${@0}$을 로마 숫자로 쓰세요.",
  "Zapíš zvlášť tisíce, stovky, desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.": "천, 백, 십, 일의 자리를 따로 쓰세요. 기억하세요: 4 = IV, 9 = IX, 40 = XL, 90 = XC, 400 = CD, 900 = CM.",
  "Zisti, koľkokrát sa {@0} celé zmestí do {@1}.": "{@1} 안에 {@0}이 몇 번 온전히 들어가는지 알아보세요.",
  "Zisti, na ktorom mieste číslica stojí (jednotky, desiatky, stovky, tisíce…).": "숫자가 어느 자리(일, 십, 백, 천의 자리…)에 있는지 알아보세요.",
  "Zlomky na koláčoch a páse": "케이크와 띠로 나타낸 분수",
  "Zlomky nie sú rovnaké – porovnaj ich menovatele.": "두 분수는 같지 않아요. 분모를 비교하세요.",
  "Zlomky nie sú rovnaké – porovnaj ich čitatele.": "두 분수는 같지 않아요. 분자를 비교하세요.",
  "Zlomky sú rovnaké.": "두 분수는 같아요.",
  "Znak je otočený. Pri rovnakom menovateli je väčší ten zlomok, ktorý má väčší čitateľ.": "기호가 반대로 되어 있어요. 분모가 같으면 분자가 큰 분수가 더 커요.",
  "Znak sa nesmie opakovať štyrikrát a odčítať smieme len I pred V a X, X pred L a C, C pred D a M.": "같은 기호를 네 번 반복하면 안 되고, 빼는 표기는 I를 V와 X 앞에, X를 L과 C 앞에, C를 D와 M 앞에 쓸 때만 돼요.",
  "Znaky I, X, C sa nesmú opakovať štyrikrát za sebou. Pre 4, 9, 40, 90, 400 a 900 použi zápis s odčítaním.": "I, X, C는 네 번 연달아 쓸 수 없어요. 4, 9, 40, 90, 400, 900은 빼는 표기로 쓰세요.",
  "Znaky I, X, C, M môžu stáť za sebou najviac trikrát. Namiesto štyroch rovnakých znakov použi odčítanie.": "I, X, C, M은 세 번까지만 연달아 쓸 수 있어요. 같은 기호 네 개 대신 빼는 표기를 쓰세요.",
  "Zvyšok sa delí na dve rovnaké časti.": "나머지는 똑같이 둘로 나눠요.",
  "Zátvorka má prednosť. Potom delenie a násobenie, sčítanie až na konci.": "괄호가 먼저예요. 그다음 나눗셈과 곱셈, 덧셈은 마지막이에요.",
  "Zátvorka: ${@0} + {@1} = {@2}$. Delenie a násobenie: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. Sčítanie: ${@9} + {@10} = {@11}$.": "괄호: ${@0} + {@1} = {@2}$. 나눗셈과 곱셈: ${@3} : {@4} = {@5}$, ${@6}\\cdot {@7} = {@8}$. 덧셈: ${@9} + {@10} = {@11}$.",
  "Zátvorka: ${@0} - {@1} = {@2}$. Násobenie: ${@3}\\cdot {@4} = {@5}$. Odčítanie: ${@6} - {@7} = {@8}$.": "괄호: ${@0} - {@1} = {@2}$. 곱셈: ${@3}\\cdot {@4} = {@5}$. 뺄셈: ${@6} - {@7} = {@8}$.",
  "cesty": "길",
  "dcéra": "딸",
  "dcére": "딸",
  "dcéry": "딸",
  "delitele čísla 12: 1, 2, 3, 4, 6, 12": "12의 약수: 1, 2, 3, 4, 6, 12",
  "desatina": "10분의 1",
  "desatinu": "10분의 1",
  "desatiny": "10분의 1",
  "dni": "일",
  "dní": "일",
  "euro": "유로",
  "hodinu": "시간",
  "koláč": "케이크",
  "koláča": "케이크",
  "lodičiek": "보트",
  "lodičky": "보트",
  "menší znak pred väčším sa odčíta – len I pred V, X; X pred L, C; C pred D, M": "작은 기호가 큰 기호 앞에 있으면 빼요 – I는 V, X 앞, X는 L, C 앞, C는 D, M 앞에만",
  "meria": "길이가",
  "miliónov": "백만",
  "milióny": "백만",
  "minul": "썼어요",
  "minula": "썼어요",
  "mladšieho": "동생",
  "mladší": "동생",
  "nadol": "아래로",
  "nahor": "위로",
  "najmenšie": "가장 작은",
  "najväčšie": "가장 큰",
  "napr. 1; 2; 4": "예: 1; 2; 4",
  "napr. 2/5": "예: 2/5",
  "napr. MCMXC": "예: MCMXC",
  "nasledovníka": "다음 수",
  "nepárne": "홀수",
  "nie": "아니요",
  "nádrže": "물탱크",
  "obalov": "상자",
  "obaly": "상자",
  "odčítaj": "빼세요",
  "odčítaš": "빼야 해요",
  "osmina": "8분의 1",
  "osminu": "8분의 1",
  "osminy": "8분의 1",
  "polovica": "절반",
  "polovice": "절반",
  "polovicu": "절반",
  "polpriamka": "반직선",
  "polpriamka AB": "반직선 AB",
  "predchodcu": "앞의 수",
  "priamka AB": "직선 AB",
  "priemer d = 2 · r": "지름 d = 2 · r",
  "pripočítaj": "더하세요",
  "pripočítaš": "더해야 해요",
  "párne": "짝수",
  "pásik": "띠",
  "pätina": "5분의 1",
  "pätinu": "5분의 1",
  "pätiny": "5분의 1",
  "päťkrát": "다섯 배",
  "rokov": "살",
  "roky": "살",
  "rovnaké diely": "조각",
  "rovnakých dielov": "조각",
  "spolu 50 €": "모두 50 €",
  "staršia": "나이가 많은",
  "staršieho": "형",
  "starší": "형",
  "stotisícov": "100000",
  "syn": "아들",
  "syna": "아들",
  "synovi": "아들",
  "také časti": "이런 부분",
  "takých častí": "이런 부분",
  "tretina": "3분의 1",
  "tretinu": "3분의 1",
  "tretiny": "3분의 1",
  "vajec": "달걀",
  "vyfarbené sú {@0}": "색칠된 조각은 {@0}개",
  "vyfarbený je 1": "색칠된 조각은 1개",
  "vyfarbených je {@0}": "색칠된 조각은 {@0}개",
  "váži": "무게가",
  "zmestia": "탈 수 있어요",
  "zmestí": "탈 수 있어요",
  "zátvorky": "괄호",
  "zľava doprava": "왼쪽에서 오른쪽으로",
  "{@0} Preto nie, zvyšok po delení je {@1}.": "{@0} 그러므로 아니요, 나머지가 {@1}이에요.",
  "{@0} Preto áno: ${@1} : {@2} = {@3}$.": "{@0} 그러므로 네: ${@1} : {@2} = {@3}$.",
  "{@0} ešte raz {@1}: ${@2} {@3} {@4}$.": "{@1}을 한 번 더 {@0}: ${@2} {@3} {@4}$.",
  "{@0} je $100 {@1} 1$. Vynásob stovkou a potom {@2} číslo ešte raz.": "{@0}은 $100 {@1} 1$이에요. 100을 곱한 다음 그 수를 한 번 더 {@2}.",
  "{@0} má {@1} {@2} a je {@3} {@4} ako {@5}. Koľko rokov bude {@6} o {@7} {@8}?": "{@0}는 {@1}{@2}이고, 나이가 {@5}의 {@3}예요. {@7}년 뒤에 {@6}의 나이는 몇 살일까요?",
  "{@0} neznamená {@1} {@2}. {@3} z {@4} vypočítaš delením: ${@5} : {@6}$.": "{@0}은 {@1} {@2}가 아니에요. {@4}의 {@3}은 나눗셈으로 구해요: ${@5} : {@6}$.",
  "{@0} z {@1}: ${@2} : {@3} = {@4}$. {@5} spolu ${@6} + {@7} = {@8}$. Zostalo ${@9} - {@10} = {@11}$ {@12}.": "{@1}의 {@0}: ${@2} : {@3} = {@4}$. {@5} 모두 ${@6} + {@7} = {@8}$. 남은 돈: ${@9} - {@10} = {@11}$ {@12}.",
  "{@0} {@1} {@2} ${@3}\\,\\text{{@4}}$. {@5}": "{@1}의 {@0}은 {@2} ${@3}\\,\\text{{@4}}$예요. {@5}",
  "{@0} {@1} {@2} {@3}. {@4} {@5} na hru a {@6} {@7} na knihu. Koľko eur {@8} zostalo?": "{@0}는 {@2} {@3}를 {@1}. 그중 {@4}을 게임에, {@6} {@7}를 책에 {@5}. {@8} 남은 돈은 몇 유로일까요?",
  "{@0} {@1} {@2}. Ostatné údaje sú príliš veľké alebo príliš malé.": "{@0} {@1} {@2}. 나머지 값은 너무 크거나 너무 작아요.",
  "Úsečka AB začína v bode A a končí v bode B.": "선분 AB는 점 A에서 시작해서 점 B에서 끝나요.",
  "Úsečka končí v oboch krajných bodoch a za nimi už nepokračuje.": "선분은 양 끝점에서 끝나고 그 너머로는 이어지지 않아요.",
  "Úsečka má dva krajné body.": "선분은 끝점이 두 개 있다.",
  "Úsečka má konečnú dĺžku.": "선분은 길이가 정해져 있다.",
  "Úsečkový model súčtu a rozdielu": "합과 차를 나타내는 선분 모델",
  "Úsečku môžeme odmerať pravítkom.": "선분은 자로 잴 수 있다.",
  "áno": "네",
  "úsečka AB": "선분 AB",
  "Časy si odčítal ako obyčajné čísla. Hodina má však 60 minút, nie 100 – dopočítaj najprv do celej hodiny.": "시각을 보통 수처럼 뺐어요. 1시간은 100분이 아니라 60분이에요. 먼저 정각까지 세세요.",
  "Červené sú {@0} jablká": "빨간 사과는 {@0}개",
  "Červených je {@0} jabĺk": "빨간 사과는 {@0}개",
  "Čiara má dva krajné body A a B – je to úsečka.": "선에 두 끝점 A와 B가 있으니 선분이에요.",
  "Čiara nemá začiatok ani koniec – je to priamka.": "선에 시작도 끝도 없으니 직선이에요.",
  "Čiara začína v bode A a na druhú stranu pokračuje – je to polpriamka.": "선이 점 A에서 시작해서 다른 쪽으로 계속 이어지니 반직선이에요.",
  "Čitatele sú rovnaké. Čím na viac dielov celok delíme, tým sú diely menšie: ${@0} {@1} {@2}$.": "분자가 같아요. 전체를 더 많은 조각으로 나눌수록 조각은 작아져요: ${@0} {@1} {@2}$.",
  "Čo je na obrázku? Prerušovaná čiara znamená, že čiara pokračuje bez konca.": "그림에 있는 것은 무엇일까요? 점선은 선이 끝없이 이어진다는 뜻이에요.",
  "Čísla nestačí napísať vedľa seba. Najprv premeň {@0} {@1} na {@2}, potom pripočítaj {@3}.": "수를 나란히 쓰기만 하면 안 돼요. 먼저 {@0} {@1}을 {@2}로 바꾼 다음 {@3}을 더하세요.",
  "Čísla si napísal vedľa seba, akoby platilo 1 {@0} = 100 {@1}. Platí však 1 {@2} = 60 {@3}.": "1 {@0} = 100 {@1}인 것처럼 수를 나란히 썼어요. 하지만 1 {@2} = 60 {@3}이에요.",
  "Číslica hneď vpravo od rádu {@0} je {@1}, preto zaokrúhľujeme {@2}: ${@3} \\doteq {@4}$.": "{@0}의 자리 바로 오른쪽 숫자가 {@1}이므로 {@2}: ${@3} \\doteq {@4}$.",
  "Číslica vpravo je {@0}. Zaokrúhli ${@1}$ na {@2}.": "오른쪽 숫자는 {@0}이에요. ${@1}$을 {@2} 단위로 반올림하세요.",
  "Číslica vpravo od rádu {@0} je 5 alebo viac – v takom prípade sa zaokrúhľuje nahor.": "{@0}의 자리 오른쪽 숫자가 5 이상이에요. 이럴 때는 올림해요.",
  "Číslica vpravo od rádu {@0} je menšia ako 5 – v takom prípade sa zaokrúhľuje nadol.": "{@0}의 자리 오른쪽 숫자가 5보다 작아요. 이럴 때는 버림해요.",
  "Číslica {@0} stojí na mieste {@1}, preto má hodnotu ${@2}\\cdot {@3} = {@4}$.": "숫자 {@0}은 {@1}의 자리에 있으므로 값이 ${@2}\\cdot {@3} = {@4}$예요.",
  "Číslice zoradíme od najmenšej, ale 0 nemôže byť na začiatku, preto ide na druhé miesto: ${@0}$.": "숫자를 작은 것부터 늘어놓지만, 0은 맨 앞에 올 수 없으니 둘째 자리에 놓아요: ${@0}$.",
  "Číslice zoradíme od najmenšej: ${@0}$.": "숫자를 작은 것부터 늘어놓아요: ${@0}$.",
  "Číslice zoradíme od najväčšej po najmenšiu: ${@0}$.": "숫자를 큰 것부터 작은 것 순서로 늘어놓아요: ${@0}$.",
  "Číslo": "수",
  "Číslo nemôže začínať nulou – nebolo by štvorciferné. Na prvé miesto daj najmenšiu číslicu, ktorá nie je 0.": "수는 0으로 시작할 수 없어요. 그러면 네 자리 수가 아니에요. 맨 앞에는 0이 아닌 가장 작은 숫자를 놓으세요.",
  "Číslo {@0} je $100 {@1} 1$, preto {@2} jedenkrát celé číslo {@3}, nie iba jednotku.": "{@0}은 $100 {@1} 1$이므로, 1만이 아니라 수 {@3} 전체를 한 번 {@2}.",
  "čiara": "선",
  "Šestina": "6분의 1",
  "Štvorec má 4 rovnaké strany.": "정사각형은 네 변의 길이가 같다.",
  "Štvorec má štyri rovnaké strany, preto obvod deľ štyrmi, nie dvomi.": "정사각형은 네 변의 길이가 같으니 둘레를 2가 아니라 4로 나누세요.",
  "Štvrtina": "4분의 1",
  "Štvrtinu": "4분의 1",
  "šestina": "6분의 1",
  "šestinu": "6분의 1",
  "šestiny": "6분의 1",
  "štvrtina": "4분의 1",
  "štvrtinu": "4분의 1",
  "štvrtiny": "4분의 1"
 }
});
