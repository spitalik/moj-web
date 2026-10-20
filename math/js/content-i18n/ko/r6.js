/* 한국어: preklad js/rocniky/r6.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/r6/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "r6-desatinne": {
   "title": "소수와 소수의 계산",
   "summary": "소수 쓰기, 크기 비교, 반올림; 덧셈, 뺄셈, 곱셈, 나눗셈.",
   "theory": [
    "<p><strong>소수</strong>에서는 소수점이 자연수 부분과 소수 부분을 나눠요. $2.75$는 일이 2, 0.1이 7, 0.01이 5인 수예요.\n       즉 $2.75 = 2 + \\frac{7}{10} + \\frac{5}{100}$이에요. 소수 부분의 끝에 있는 0은 붙여도 되고 빼도 돼요: $2.4 = 2.40$.</p>",
    {
     "fig": "r6-desatinna-os",
     "caption": "2부터 3까지의 수직선 부분. 두 자연수 사이에는 0.1이 10개, 0.01이 100개 있어요."
    },
    "<p><strong>덧셈과 뺄셈:</strong> <em>소수점의 자리를 맞추어</em> 위아래로 쓰고, 빈자리는 0으로 채워요.\n       <strong>곱셈:</strong> 자연수처럼 곱한 다음, 두 수의 소수점 아래 자릿수를 더한 만큼 결과에 소수점을 찍어요: $1.2\\cdot 0.3 = 0.36$.\n       10, 100, 1 000을 곱하면 소수점이 오른쪽으로 1, 2, 3자리 옮겨지고, 나누면 왼쪽으로 옮겨져요.</p>",
    "<p><strong>자연수로 나누기:</strong> 보통처럼 나누고, 나누어지는 수의 소수점을 지나는 순간 몫에 소수점을 찍어요: $7.5 : 3 = 2.5$.\n       <strong>반올림:</strong> 나타내려는 자리 바로 다음 숫자를 봐요. 0~4이면 버리고, 5~9이면 올려요: $3.462 \\doteq 3.5$(소수 첫째 자리까지).</p>"
   ],
   "examples": [
    {
     "task": "$12.5 + 3.78$을 계산하세요.",
     "steps": [
      "소수점을 맞춰요: $12.50 + 3.78$.",
      "자리별로 더해요: $12.50 + 3.78 = 16.28$.",
      "<strong>답: 16.28</strong>"
     ]
    },
    {
     "task": "$2.4\\cdot 1.5$를 계산하세요.",
     "steps": [
      "소수점 없이: $24\\cdot 15 = 360$.",
      "두 수의 소수점 아래 자릿수의 합이 2이므로 결과는 $3.60 = 3.6$이에요.",
      "<strong>답: 3.6</strong>"
     ]
    }
   ]
  },
  "r6-zlomky": {
   "title": "분수와 기본 활용",
   "summary": "분수의 뜻, 전체의 부분, 약분과 크기가 같은 분수, 소수로 바꾸기, 크기 비교.",
   "theory": [
    "<p><strong>분수</strong> $\\frac{a}{b}$는 전체의 일부를 나타내요. 전체를 똑같이 $b$조각(<em>분모</em>)으로 나누어 그중 $a$조각(<em>분자</em>)을 가진다는 뜻이에요.\n       분수의 가로선은 나눗셈을 뜻해요: $\\frac{3}{4} = 3 : 4 = 0.75$.</p>",
    {
     "fig": "r6-zlomky-kruhy",
     "caption": "원에서 색칠된 부분: 2분의 1, 4분의 3, 8분의 3."
    },
    "<p><strong>어떤 수의 분수만큼:</strong> 20의 $\\frac{3}{4}$은 20을 분모로 나누고 분자를 곱해서 구해요: $20 : 4 = 5$, $5\\cdot 3 = 15$.</p>",
    "<p><strong>크기가 같은 분수와 약분:</strong> 분자와 분모에 0이 아닌 같은 수를 곱하거나 같은 수로 나누어도 분수의 값은 변하지 않아요:\n       $\\frac{12}{18} = \\frac{2}{3}$(6으로 약분). 더 이상 약분할 수 없는 분수를 <em>기약분수</em>라고 해요.\n       두 분수는 통분해서 분모를 같게 만들면 가장 쉽게 비교할 수 있어요.</p>"
   ],
   "examples": [
    {
     "task": "35의 $\\frac{2}{5}$는 얼마인가요?",
     "steps": [
      "5분의 1: $35 : 5 = 7$.",
      "5분의 2: $7\\cdot 2 = 14$.",
      "<strong>답: 14</strong>"
     ]
    },
    {
     "task": "$\\frac{3}{4}$과 $\\frac{5}{6}$의 크기를 비교하세요.",
     "steps": [
      "공통분모는 12예요: $\\frac{3}{4} = \\frac{9}{12}$, $\\frac{5}{6} = \\frac{10}{12}$.",
      "$9 &lt; 10$이므로 $\\frac{3}{4} &lt; \\frac{5}{6}$이에요."
     ]
    }
   ]
  },
  "r6-delitelnost": {
   "title": "나누어떨어짐, 소수와 합성수",
   "summary": "약수와 배수, 배수 판정법, 소수, 합성수, 소인수분해.",
   "theory": [
    "<p>$a : b$를 계산했을 때 나머지가 없으면 $a$는 $b$로 <strong>나누어떨어진다</strong>고 해요. 이때 $b$는 $a$의 <em>약수</em>이고 $a$는 $b$의 <em>배수</em>예요.\n       예를 들어 12의 약수는 1, 2, 3, 4, 6, 12예요.</p>",
    "<p><strong>배수 판정법.</strong> 어떤 수가 다음 수로 나누어떨어지는 경우:</p>\n       <ul><li><strong>2</strong>: 끝자리가 짝수(0, 2, 4, 6, 8)일 때,</li>\n       <li><strong>3</strong>: 각 자리 숫자의 합이 3으로 나누어떨어질 때; <strong>9</strong>: 각 자리 숫자의 합이 9로 나누어떨어질 때,</li>\n       <li><strong>4</strong>: 끝의 두 자리 수가 4로 나누어떨어질 때,</li>\n       <li><strong>5</strong>: 끝자리가 0 또는 5일 때; <strong>10</strong>: 끝자리가 0일 때,</li>\n       <li><strong>6</strong>: 2로도 3으로도 나누어떨어질 때.</li></ul>",
    "<p><strong>소수</strong>는 약수가 1과 자기 자신, 단 두 개뿐인 자연수예요(2, 3, 5, 7, 11, …).\n       <strong>합성수</strong>는 약수가 세 개 이상인 수예요(4, 6, 8, 9, …). 1은 소수도 합성수도 아니에요.\n       모든 합성수는 소수들의 곱(<em>소인수</em>의 곱)으로 나타낼 수 있어요: $60 = 2\\cdot 2\\cdot 3\\cdot 5 = 2^2\\cdot 3\\cdot 5$.</p>",
    {
     "fig": "r6-eratosten",
     "caption": "에라토스테네스의 체: 1부터 60까지의 수에서 2, 3, 5, 7의 배수를 지워요(그 수 자신은 남겨요). 남은 수가 소수이고, 색칠되어 있어요."
    }
   ],
   "examples": [
    {
     "task": "4 716은 3으로 나누어떨어지나요? 4로는 나누어떨어지나요?",
     "steps": [
      "각 자리 숫자의 합: $4 + 7 + 1 + 6 = 18$이고, 18은 3으로 나누어떨어지므로 <strong>네</strong>.",
      "끝의 두 자리 수는 16이고 $16 : 4 = 4$이므로 4로도 나누어떨어져요: <strong>네</strong>."
     ]
    },
    {
     "task": "90을 소인수분해하세요.",
     "steps": [
      "$90 : 2 = 45$, $45 : 3 = 15$, $15 : 3 = 5$, 5는 소수예요.",
      "<strong>$90 = 2\\cdot 3\\cdot 3\\cdot 5 = 2\\cdot 3^2\\cdot 5$</strong>"
     ]
    }
   ]
  },
  "r6-nsd-nsn": {
   "title": "최대공약수와 최소공배수",
   "summary": "소인수분해를 이용한 최대공약수와 최소공배수, 서로소, 문장제.",
   "theory": [
    "<p>수 $a$, $b$의 <strong>최대공약수</strong>는 $D(a, b)$로 나타내며, 두 수를 모두 나누어떨어지게 하는 가장 큰 수예요.\n       <strong>최소공배수</strong>는 $n(a, b)$로 나타내며, 두 수의 공배수 중 0이 아닌 가장 작은 수예요.</p>",
    {
     "fig": "r6-strom",
     "caption": "60과 84의 소인수분해. 공통인 소인수는 2, 2, 3이므로 D(60, 84) = 12; n(60, 84) = 2 · 2 · 3 · 5 · 7 = 420."
    },
    "<p><strong>소인수분해를 이용하는 방법:</strong> 두 수를 소인수분해해요. 최대공약수는 <em>공통인</em> 소인수의 곱이에요(각 소인수를 두 수에 공통으로 들어 있는 횟수만큼).\n       최소공배수는 적어도 한 수에 들어 있는 <em>모든</em> 소인수의 곱이에요(각 소인수를 더 많이 들어 있는 쪽의 횟수만큼).\n       유용한 확인 방법: $D(a, b)\\cdot n(a, b) = a\\cdot b$.</p>",
    "<p>최대공약수가 1인 두 수를 <strong>서로소</strong>라고 해요(예: 8과 15). 1보다 큰 공약수가 있으면 서로소가 <strong>아니에요</strong>.\n       최대공약수는 무언가를 가능한 한 큰 같은 크기로 나눌 때, 최소공배수는 반복되는 일이 언제 다시 만나는지 구할 때 써요.</p>"
   ],
   "examples": [
    {
     "task": "$D(24, 36)$과 $n(24, 36)$을 구하세요.",
     "steps": [
      "$24 = 2^3\\cdot 3$, $36 = 2^2\\cdot 3^2$.",
      "최대공약수: $2^2\\cdot 3 = 12$.",
      "최소공배수: $2^3\\cdot 3^2 = 72$.",
      "확인: $12\\cdot 72 = 864 = 24\\cdot 36$."
     ]
    },
    {
     "task": "신호등 두 개가 동시에 초록불로 켜져요. 첫 번째는 40초, 두 번째는 60초 주기로 색이 바뀌어요. 몇 초 후에 다시 동시에 주기가 시작될까요?",
     "steps": [
      "최소공배수 $n(40, 60)$을 구해요.",
      "$40 = 2^3\\cdot 5$, $60 = 2^2\\cdot 3\\cdot 5$이므로 $n = 2^3\\cdot 3\\cdot 5 = 120$.",
      "<strong>120초(2분) 후예요.</strong>"
     ]
    }
   ]
  },
  "r6-cele": {
   "title": "정수와 음수",
   "summary": "수직선 위의 양수와 음수, 반대수, 절댓값, 크기 비교, 덧셈과 뺄셈.",
   "theory": [
    "<p><strong>정수</strong>는 $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$이에요. 음수는 예를 들어 영하의 기온($-5\\,{}^\\circ\\mathrm{C}$),\n       빚, 해수면보다 낮은 높이를 나타낼 때 써요. 0은 양수도 음수도 아니에요.</p>",
    {
     "fig": "r6-os-cele",
     "caption": "4와 −4는 서로 반대수예요. 0에서 같은 거리만큼 반대쪽에 있어요. 두 수의 절댓값은 모두 4예요."
    },
    "<p>수 $a$의 <strong>반대수</strong>는 $-a$예요(4의 반대수는 $-4$, $-7$의 반대수는 7). <strong>절댓값</strong> $|a|$는 수와 0 사이의 거리예요: $|-6| = 6$, $|6| = 6$.\n       <strong>크기 비교:</strong> 수직선에서 더 오른쪽에 있는 수가 더 커요. 그래서 $-2 &gt; -5$이고, 모든 음수는 0보다 작아요.</p>",
    "<p><strong>덧셈과 뺄셈:</strong> 양수를 더하면 수직선에서 오른쪽으로, 음수를 더하면 왼쪽으로 움직여요.\n       어떤 수를 빼는 것은 그 반대수를 더하는 것과 같아요: $3 - (-4) = 3 + 4 = 7$, $-2 - 5 = -2 + (-5) = -7$.</p>"
   ],
   "examples": [
    {
     "task": "$-8 + 3$을 계산하세요.",
     "steps": [
      "$-8$에서 시작해서 오른쪽으로 3만큼 움직여요.",
      "<strong>$-8 + 3 = -5$</strong>"
     ]
    },
    {
     "task": "아침 기온은 $-6\\,{}^\\circ\\mathrm{C}$, 점심 기온은 $2\\,{}^\\circ\\mathrm{C}$였어요. 기온이 몇 도 올랐나요?",
     "steps": [
      "차: $2 - (-6) = 2 + 6 = 8$.",
      "<strong>기온이 8 °C 올랐어요.</strong>"
     ]
    }
   ]
  },
  "r6-uhly": {
   "title": "각과 각도 재기",
   "summary": "각의 종류, 각도기, 도와 분, 이웃각과 맞꼭지각, 각도의 계산.",
   "theory": [
    "<p><strong>각</strong>은 시작점(<em>꼭짓점</em>)이 같은 두 반직선(<em>변</em>)으로 이루어져요. 각의 크기는 <strong>도</strong>로 재요.\n       1도는 60분이에요: $1^\\circ = 60'$. 각은 그리스 문자 $\\alpha, \\beta, \\gamma$나 $\\angle AVB$로 나타내요.</p>",
    {
     "fig": "r6-uhly-druhy",
     "caption": "예각은 90°보다 작고, 직각은 90°, 둔각은 90°와 180° 사이, 평각은 180°예요."
    },
    "<p><strong>각도기로 재기:</strong> 각도기의 중심을 각의 꼭짓점에 맞추고 0을 한 변에 맞춘 다음, 다른 변이 지나는 눈금을 읽어요.</p>",
    {
     "fig": "r6-uhlomer",
     "caption": "크기가 50°인 각에 댄 각도기."
    },
    "<p><strong>이웃각</strong>(이웃한 보각)은 한 변을 공유하고 나머지 두 변이 일직선을 이루는 두 각이에요. 두 각의 합은 $180^\\circ$예요.\n       <strong>맞꼭지각</strong>은 두 직선이 만날 때 서로 마주 보는 각이며 크기가 같아요.\n       각도를 더할 때는 도와 분을 따로 더하고, 60분은 1도로 바꿔요.</p>"
   ],
   "examples": [
    {
     "task": "각 $\\alpha$는 $48^\\circ$예요. 이 각의 이웃각은 몇 도인가요?",
     "steps": [
      "이웃각끼리의 합은 $180^\\circ$예요.",
      "$180^\\circ - 48^\\circ = 132^\\circ$.",
      "<strong>이웃각은 132°예요.</strong>"
     ]
    },
    {
     "task": "$35^\\circ\\,40' + 27^\\circ\\,35'$를 계산하세요.",
     "steps": [
      "도: $35 + 27 = 62$, 분: $40 + 35 = 75$.",
      "$75' = 1^\\circ\\,15'$이므로 합은 $63^\\circ\\,15'$예요."
     ]
    }
   ]
  },
  "r6-trojuholniky": {
   "title": "삼각형과 그 성질",
   "summary": "삼각형의 내각의 합, 변과 각에 따른 삼각형의 분류, 삼각형의 결정 조건.",
   "theory": [
    "<p><strong>삼각형</strong> $ABC$는 꼭짓점 3개, 변 3개 $a = |BC|$, $b = |AC|$, $c = |AB|$, 내각 3개 $\\alpha, \\beta, \\gamma$를 가져요.\n       모든 삼각형의 <strong>내각의 합</strong>은 $\\alpha + \\beta + \\gamma = 180^\\circ$예요.</p>",
    {
     "fig": "r6-trojuholniky",
     "caption": "위는 변에 따른 분류(짧은 표시는 길이가 같은 변), 아래는 각에 따른 분류예요."
    },
    "<p><strong>변에 따라:</strong> 부등변삼각형(세 변의 길이가 모두 다름), 이등변삼각형(두 변의 길이가 같고 두 밑각의 크기가 같음),\n       정삼각형(세 변의 길이가 모두 같고 각은 모두 $60^\\circ$).\n       <strong>각에 따라:</strong> 예각삼각형(세 각이 모두 예각), 직각삼각형(한 각이 직각), 둔각삼각형(한 각이 둔각).</p>",
    "<p><strong>삼각형의 변의 길이 조건(삼각부등식):</strong> 어느 두 변의 길이의 합도 항상 나머지 한 변의 길이보다 커요.\n       짧은 두 변의 합이 가장 긴 변보다 큰지만 확인하면 돼요. 예를 들어 3 cm, 4 cm, 8 cm로는 $3 + 4 &lt; 8$이므로 삼각형을 그릴 수 없어요.</p>"
   ],
   "examples": [
    {
     "task": "삼각형에서 $\\alpha = 52^\\circ$, $\\beta = 71^\\circ$예요. $\\gamma$를 구하세요.",
     "steps": [
      "$\\gamma = 180^\\circ - 52^\\circ - 71^\\circ$.",
      "<strong>$\\gamma = 57^\\circ$</strong>"
     ]
    },
    {
     "task": "세 변이 5 cm, 6 cm, 10 cm인 삼각형을 그릴 수 있나요?",
     "steps": [
      "짧은 두 변: $5 + 6 = 11$.",
      "$11 &gt; 10$이므로 조건을 만족해요.",
      "<strong>네, 그릴 수 있어요.</strong>"
     ]
    }
   ]
  },
  "r6-obvod-obsah": {
   "title": "정사각형과 직사각형의 둘레와 넓이",
   "summary": "둘레와 넓이 공식, 모르는 변 구하기, 넓이의 단위와 단위 바꾸기.",
   "theory": [
    "<p><strong>둘레</strong>는 도형 테두리의 길이로, 길이의 단위(mm, cm, m)로 재요. <strong>넓이</strong>는 한 변이 1인 작은 정사각형이\n       도형 안에 몇 개 들어가는지를 나타내며, 넓이의 단위($\\text{mm}^2$, $\\text{cm}^2$, $\\text{m}^2$)로 재요.</p>",
    {
     "fig": "r6-obdlznik-siet",
     "caption": "5 cm × 3 cm 직사각형에는 넓이가 1 cm²인 정사각형이 5개씩 3줄, 모두 15 cm²만큼 들어가요."
    },
    "<p>두 변이 $a$, $b$인 <strong>직사각형</strong>: $o = 2\\cdot(a + b)$, $S = a\\cdot b$.\n       한 변이 $a$인 <strong>정사각형</strong>: $o = 4\\cdot a$, $S = a\\cdot a = a^2$.\n       직사각형의 넓이와 한 변을 알면 다른 한 변은 나눗셈으로 구해요: $b = S : a$.</p>",
    "<p><strong>넓이의 단위:</strong> $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$, $1\\,\\text{dm}^2 = 100\\,\\text{cm}^2$, $1\\,\\text{m}^2 = 100\\,\\text{dm}^2$.\n       넓이의 단위 사이에는 10이 아니라 100배의 관계가 있어요. 한 변이 1 cm인 정사각형 안에는 한 변이 1 mm인 정사각형이 $10\\cdot 10$개 들어가기 때문이에요.</p>"
   ],
   "examples": [
    {
     "task": "정원이 14 m × 9 m인 직사각형 모양이에요. 울타리를 치려면 철망이 몇 m 필요하고, 정원의 넓이는 얼마인가요?",
     "steps": [
      "둘레: $o = 2\\cdot(14 + 9) = 2\\cdot 23 = 46\\,\\text{m}$.",
      "넓이: $S = 14\\cdot 9 = 126\\,\\text{m}^2$.",
      "<strong>철망은 46 m 필요하고, 정원의 넓이는 126 m²예요.</strong>"
     ]
    },
    {
     "task": "정사각형의 둘레가 36 cm예요. 넓이는 얼마인가요?",
     "steps": [
      "한 변: $a = 36 : 4 = 9\\,\\text{cm}$.",
      "$S = 9\\cdot 9 = 81\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r6-osova": {
   "title": "선대칭",
   "summary": "선대칭에서 점과 도형의 대칭점·대칭도형, 선대칭도형과 대칭축.",
   "theory": [
    "<p>축 $o$에 대한 <strong>선대칭</strong>은 각 점 $A$에 그 <em>대칭점</em> $A'$을 대응시키는데, 선분 $AA'$은 축에 수직이고\n       축이 이 선분을 이등분해요. 따라서 점 $A$와 대칭점은 축에서 같은 거리만큼 서로 반대쪽에 있어요. 축 위의 점은 자기 자신이 대칭점이에요.</p>",
    {
     "fig": "r6-osova",
     "caption": "파란 도형과 축 o에 대한 대칭도형(초록). 점 A는 축에서 왼쪽으로 4칸, 대칭점 A′은 오른쪽으로 4칸 떨어져 있어요."
    },
    "<p>도형의 대칭도형은 꼭짓점들의 대칭점을 찾아 이어서 그려요. 대칭도형은 원래 도형과 모양과 크기가 같고, 거울에 비친 것처럼 “뒤집혀” 있을 뿐이에요.</p>",
    "<p>어떤 직선에 대해 자기 자신과 겹쳐지는 도형을 <strong>선대칭도형</strong>이라고 해요(그 직선을 따라 종이를 접으면 두 부분이 완전히 겹쳐요).\n       그 직선을 <em>대칭축</em>이라고 해요. 정사각형은 대칭축이 4개, 직사각형은 2개, 정삼각형은 3개, 이등변삼각형은 1개, 원은 무수히 많아요.</p>"
   ],
   "examples": [
    {
     "task": "축 $o$는 6번째 열에 있는 세로 직선이에요. 점 $A$는 2번째 열에 있어요. 대칭점은 몇 번째 열에 있나요?",
     "steps": [
      "점 $A$는 축에서 $6 - 2 = 4$열 떨어져 있어요.",
      "대칭점은 반대쪽으로 4열 떨어져 있어요: $6 + 4 = 10$.",
      "<strong>대칭점은 10번째 열에 있어요.</strong>"
     ]
    },
    {
     "task": "정사각형이 아닌 직사각형의 대칭축은 몇 개인가요?",
     "steps": [
      "대칭축은 마주 보는 두 변의 중점을 지나요. 이런 축이 두 개 있어요.",
      "대각선은 대칭축이 아니에요. 접으면 두 부분이 겹치지 않아요.",
      "<strong>2개.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$, preto delíme stom: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.": "$100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$이므로 100으로 나눠요: ${@2} : 100 = {@3}\\,\\text{{@4}}^2$.",
  "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$, preto ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.": "$1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$이므로 ${@2}\\,\\text{{@3}}^2 = {@4}\\cdot 100 = {@5}\\,\\text{{@6}}^2$.",
  "$1^\\circ = 60'$, preto ${@0}^\\circ = {@1}'$ a spolu ${@2}' + {@3}' = {@4}'$.": "$1^\\circ = 60'$이므로 ${@0}^\\circ = {@1}'$이고, 모두 ${@2}' + {@3}' = {@4}'$.",
  "$S = a\\cdot b$, preto $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.": "$S = a\\cdot b$이므로 $b = S : a = {@0} : {@1} = {@2}\\,\\text{cm}$.",
  "${@0} &gt; {@1}$, trojuholník sa zostrojiť dá.": "${@0} &gt; {@1}$이므로 삼각형을 그릴 수 있어요.",
  "${@0} &lt; {@1}$, trojuholník sa zostrojiť nedá.": "${@0} &lt; {@1}$이므로 삼각형을 그릴 수 없어요.",
  "${@0} + {@1} = {@2}$ (posun o {@3} doprava).": "${@0} + {@1} = {@2}$ (오른쪽으로 {@3}만큼 이동).",
  "${@0} - {@1} = {@2}$ (posun o {@3} doľava).": "${@0} - {@1} = {@2}$ (왼쪽으로 {@3}만큼 이동).",
  "${@0} : 60 = {@1}$, zvyšok {@2}. Teda ${@3}' = {@4}$.": "${@0} : 60 = {@1}$, 나머지 {@2}. 그러므로 ${@3}' = {@4}$.",
  "${@0} = {@1}$ a ${@2} = {@3}$ nemajú spoločný prvočiniteľ, $D({@4}, {@5}) = 1$. Sú nesúdeliteľné.": "${@0} = {@1}$, ${@2} = {@3}$은 공통인 소인수가 없어서 $D({@4}, {@5}) = 1$이에요. 서로소예요.",
  "${@0} = {@1}$, ${@2} = {@3}$. NSD je súčin spoločných prvočiniteľov: $D({@4}, {@5}) = {@6}{@7}$.": "${@0} = {@1}$, ${@2} = {@3}$. 최대공약수는 공통인 소인수의 곱이에요: $D({@4}, {@5}) = {@6}{@7}$.",
  "${@0} = {@1}\\cdot {@2}$, teda okrem 1 a {@3} má aj deliteľ {@4}. Je to zložené číslo.": "${@0} = {@1}\\cdot {@2}$이므로 1과 {@3} 말고도 약수 {@4}가 있어요. 합성수예요.",
  "${@0} {@1} {@2} = {@3}$. Večer bolo {@4} °C.": "${@0} {@1} {@2} = {@3}$. 저녁 기온은 {@4} °C였어요.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda súčet je ${@4} + {@5} = {@6}$.": "$|{@0}| = {@1}$, $|{@2}| = {@3}$이므로 합은 ${@4} + {@5} = {@6}$이에요.",
  "4 dieliky": "4칸",
  "Absolútna hodnota je vzdialenosť od nuly, preto nie je nikdy záporná.": "절댓값은 0으로부터의 거리이므로 절대 음수가 아니에요.",
  "Absolútna hodnota nie je nikdy záporná. Najprv urči vzdialenosť každého čísla od nuly, až potom sčítaj.": "절댓값은 절대 음수가 아니에요. 먼저 각 수가 0에서 얼마나 떨어져 있는지 구한 다음 더하세요.",
  "Ak je minút 60 alebo viac, zameň 60 minút za 1 stupeň.": "분이 60 이상이면 60분을 1도로 바꾸세요.",
  "Ak sa súčet dvoch kratších strán rovná najdlhšej strane, strany by ležali na jednej priamke a trojuholník nevznikne.": "짧은 두 변의 합이 가장 긴 변과 같으면 세 변이 한 직선 위에 놓여서 삼각형이 만들어지지 않아요.",
  "Aká dlhá je strana štvorca (v cm)?": "정사각형의 한 변의 길이는 몇 cm일까요?",
  "Aké je číslo opačné k číslu {@0}?": "{@0}의 반대수는 무엇일까요?",
  "Aké je číslo {@0}?": "수 {@0}은 무엇일까요?",
  "Aký bude čitateľ rozšíreného zlomku?": "크기가 같은 분수로 바꾼 분수의 분자는 얼마일까요?",
  "Aký je najmenší spoločný násobok čísel {@0} a {@1}?": "{@0}과 {@1}의 최소공배수는 무엇일까요?",
  "Aký je najväčší spoločný deliteľ čísel {@0} a {@1}?": "{@0}과 {@1}의 최대공약수는 무엇일까요?",
  "Aký je obsah štvorca (v cm²)?": "정사각형의 넓이는 몇 cm²일까요?",
  "Aký je obvod (v {@0})?": "둘레는 몇 {@0}일까요?",
  "Aký je obvod štvorca (v cm)?": "정사각형의 둘레는 몇 cm일까요?",
  "Aký je súčet dvoch susedných strán?": "이웃한 두 변의 합은 얼마일까요?",
  "Aký je súčet známych číslic?": "알고 있는 숫자들의 합은 얼마일까요?",
  "Aký je uhol s veľkosťou ${@0}^\\circ$?": "${@0}^\\circ$인 각은 어떤 각일까요?",
  "Aký veľký je jeden uhol pri základni?": "밑각 하나의 크기는 얼마일까요?",
  "Akým číslom treba rozšíriť zlomok $\\frac{{@0}}{{@1}}$, aby bol v menovateli {@2}?": "분모가 {@2}이 되려면 분수 $\\frac{{@0}}{{@1}}$의 분모와 분자에 어떤 수를 곱해야 할까요?",
  "Bod $A$ je od osi vzdialený $|{@0} - {@1}| = {@2}$ {@3}. Obraz je rovnako ďaleko na druhej strane osi: ${@4} {@5} {@6} = {@7}$.": "점 $A$는 축에서 $|{@0} - {@1}| = {@2}$ {@3} 떨어져 있어요. 대칭점은 축의 반대쪽에 같은 거리만큼 떨어져 있어요: ${@4} {@5} {@6} = {@7}$.",
  "Celú a desatinnú časť nemôžeš násobiť zvlášť – desatiny sa prelievajú do celých. Vynásob čísla bez čiarky a potom umiestni čiarku.": "자연수 부분과 소수 부분을 따로 곱하면 안 돼요. 소수 부분이 자연수 부분으로 넘어가기 때문이에요. 소수점 없이 곱한 다음 소수점을 찍으세요.",
  "Ciferný súčet je {@0}, je deliteľný 3.": "각 자리 숫자의 합은 {@0}이고, 3으로 나누어떨어져요.",
  "Ciferný súčet je {@0}, je deliteľný 9.": "각 자리 숫자의 합은 {@0}이고, 9로 나누어떨어져요.",
  "Ciferný súčet je {@0}, nie je deliteľný 3.": "각 자리 숫자의 합은 {@0}이고, 3으로 나누어떨어지지 않아요.",
  "Ciferný súčet je {@0}, nie je deliteľný 9.": "각 자리 숫자의 합은 {@0}이고, 9로 나누어떨어지지 않아요.",
  "Delitele čísla {@0} sú {@1}. Je ich {@2}.": "{@0}의 약수는 {@1}이에요. 모두 {@2}개예요.",
  "Deliteľ 1 majú všetky čísla. Súdeliteľné sú čísla, ktoré majú spoločný deliteľ väčší ako 1.": "1은 모든 수의 약수예요. 1보다 큰 공약수가 있는 두 수는 서로소가 아니에요.",
  "Delíme ako pri celých číslach a čiarku do podielu napíšeme, keď ju v delencovi prekročíme: ${@0} : {@1} = {@2}$. Skúška: ${@3}\\cdot {@4} = {@5}$.": "자연수의 나눗셈처럼 나누고, 나뉘는 수의 소수점을 지날 때 몫에도 소수점을 찍어요: ${@0} : {@1} = {@2}$. 확인: ${@3}\\cdot {@4} = {@5}$.",
  "Delíme postupne prvočíslami: ${@0}$. Teda ${@1} = {@2}{@3}$.": "소수로 차례로 나눠요: ${@0}$. 그러므로 ${@1} = {@2}{@3}$.",
  "Desatinné čiarky musia byť pod sebou. Chýbajúce miesta doplň nulami.": "소수점을 위아래로 맞추세요. 빈 자리는 0으로 채우세요.",
  "Deľ postupne od najvyššieho rádu. Keď prejdeš cez desatinnú čiarku delenca, napíš čiarku aj do výsledku.": "가장 높은 자리부터 차례로 나누세요. 나뉘는 수의 소수점을 지나면 몫에도 소수점을 찍으세요.",
  "Deľ číslo najmenším prvočíslom, ktorým sa dá (2, 3, 5, 7, …), a pokračuj s podielom, kým nedostaneš 1.": "나눌 수 있는 가장 작은 소수(2, 3, 5, 7, …)로 나누고, 몫이 1이 될 때까지 계속하세요.",
  "Doplň správny znak: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$": "알맞은 기호를 쓰세요: $\\frac{{@0}}{{@1}} \\;\\square\\; \\frac{{@2}}{{@3}}$",
  "Dopočítaj tretí uhol a pozri sa na najväčší z nich.": "나머지 한 각을 구하고 가장 큰 각을 보세요.",
  "Druhy trojuholníkov podľa strán a podľa uhlov": "변과 각에 따른 삼각형의 종류",
  "Dve kratšie strany: ${@0} + {@1} = {@2}$, najdlhšia je {@3}.": "짧은 두 변: ${@0} + {@1} = {@2}$, 가장 긴 변은 {@3}이에요.",
  "Dve strany sú rovnako dlhé, trojuholník je rovnoramenný.": "두 변의 길이가 같으니 이등변삼각형이에요.",
  "Dve stuhy merajú {@0} cm a {@1} cm. Chceme ich bez zvyšku rozstrihať na rovnako dlhé kúsky, ktoré budú čo najdlhšie (v celých centimetroch). Koľko centimetrov bude merať jeden kúsok?": "두 리본의 길이가 {@0} cm와 {@1} cm예요. 남는 것 없이 같은 길이로 자르되, 조각을 최대한 길게 하려고 해요(cm 단위의 자연수). 조각 하나의 길이는 몇 cm일까요?",
  "Dá sa zostrojiť trojuholník so stranami {@0} cm, {@1} cm a {@2} cm?": "세 변이 {@0} cm, {@1} cm, {@2} cm인 삼각형을 그릴 수 있을까요?",
  "Dĺžka kúska musí byť deliteľom oboch dĺžok. Ktorý spoločný deliteľ je najväčší?": "조각의 길이는 두 길이의 공약수여야 해요. 공약수 중 가장 큰 것은 무엇일까요?",
  "Dĺžka kúska musí deliť {@0} aj {@1} a má byť čo najväčšia, hľadáme $D({@2}, {@3})$.": "조각의 길이는 {@0}과 {@1}을 모두 나누어야 하고 가능한 한 커야 하니, $D({@2}, {@3})$을 구해요.",
  "Hľadaj dvojice čísel, ktorých súčin je dané číslo: 1 a samo číslo, potom 2 a …": "곱이 그 수가 되는 두 수의 짝을 찾으세요: 1과 그 수 자신, 그다음 2와 …",
  "Hľadáme najmenší spoločný násobok: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. Linky odídu znova naraz o {@8} minút, teda o {@9}:{@10}.": "최소공배수를 구해요: ${@0} = {@1}$, ${@2} = {@3}$, $n({@4}, {@5}) = {@6} = {@7}$. 두 노선은 {@8}분 뒤, 즉 {@9}:{@10}에 다시 함께 출발해요.",
  "Hľadáme číslo, ktoré vynásobené samo sebou dá {@0}: $a = {@1}\\,\\text{cm}$. Obvod: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.": "자기 자신을 곱해서 {@0}이 되는 수를 찾아요: $a = {@1}\\,\\text{cm}$. 둘레: $o = 4\\cdot {@2} = {@3}\\,\\text{cm}$.",
  "Iba rovnostranný trojuholník má 3 osi. Rovnoramenný má rovnaké len dve strany.": "대칭축이 3개인 것은 정삼각형뿐이에요. 이등변삼각형은 두 변만 길이가 같아요.",
  "Je menší ako 90°, preto je ostrý.": "90°보다 작으니 예각이에요.",
  "Je párne a ciferný súčet {@0} je deliteľný 3.": "짝수이고 각 자리 숫자의 합 {@0}이 3으로 나누어떨어져요.",
  "Je párne a ciferný súčet {@0} nie je deliteľný 3.": "짝수이고 각 자리 숫자의 합 {@0}이 3으로 나누어떨어지지 않아요.",
  "Je veľké tlačené písmeno <strong style=\"font-size:1.6em\">{@0}</strong> (v jednoduchom tvare bez pätiek) osovo súmerné?": "대문자 <strong style=\"font-size:1.6em\">{@0}</strong>(장식 없는 단순한 모양)은 선대칭일까요?",
  "Je väčší ako 90° a menší ako 180°, preto je tupý.": "90°보다 크고 180°보다 작으니 둔각이에요.",
  "Je číslo {@0} deliteľné číslom {@1}?": "{@0}은 {@1}로 나누어떨어질까요?",
  "Jeden kúsok bude merať {@0} cm.": "조각 하나의 길이는 {@0} cm예요.",
  "Jeden stupeň má 60 minút, nie 100 – počet minút vydeľ šesťdesiatimi.": "1도는 100분이 아니라 60분이에요. 분의 수를 60으로 나누세요.",
  "Jeden stupeň má 60 minút, nie 100.": "1도는 100분이 아니라 60분이에요.",
  "Jeden stupeň má 60 minút.": "1도는 60분이에요.",
  "Kontrola: NSD · nsn = {@0} · {@1}.": "확인: 최대공약수 · 최소공배수 = {@0} · {@1}.",
  "Kosodĺžnik nemá žiadnu os súmernosti. Po preložení podľa ktorejkoľvek priamky sa nekryje sám so sebou.": "평행사변형은 대칭축이 없어요. 어떤 직선을 따라 접어도 완전히 겹치지 않아요.",
  "Kosoštvorec má 2 osi súmernosti: obe jeho uhlopriečky.": "마름모는 대칭축이 2개예요: 두 대각선이에요.",
  "Koľko celých stupňov je v ${@0}'$?": "${@0}'$에는 온전한 도가 몇 도 있을까요?",
  "Koľko deliteľov má číslo {@0}?": "{@0}의 약수는 몇 개일까요?",
  "Koľko desatinných miest majú činitele ${@0}$ a ${@1}$ spolu?": "두 곱하는 수 ${@0}$과 ${@1}$의 소수 자릿수는 모두 몇 개일까요?",
  "Koľko je $\\frac{1}{{@0}}$ z čísla {@1}?": "{@1}의 $\\frac{1}{{@0}}$은 얼마일까요?",
  "Koľko je $\\frac{{@0}}{{@1}}$ z čísla {@2}?": "{@2}의 $\\frac{{@0}}{{@1}}$은 얼마일까요?",
  "Koľko je polovica obvodu, teda $a + b$ (v cm)?": "둘레의 절반, 즉 $a + b$는 몇 cm일까요?",
  "Koľko minút je ${@0}$?": "${@0}$은 몇 분일까요?",
  "Koľko minút je ${@0}^\\circ$?": "${@0}^\\circ$는 몇 분일까요?",
  "Koľko minút zostane?": "몇 분이 남을까요?",
  "Koľko osí súmernosti má {@0}?": "{@0}의 대칭축은 몇 개일까요?",
  "Koľko riadkov je bod A vzdialený od osi?": "점 A는 축에서 몇 줄 떨어져 있을까요?",
  "Koľko stupňov majú spolu oba uhly pri základni?": "두 밑각을 합하면 몇 도일까요?",
  "Koľko stupňov majú spolu uhly $\\alpha$ a $\\beta$?": "각 $\\alpha$와 $\\beta$를 합하면 몇 도일까요?",
  "Koľko stupňov zostane po odčítaní (nezabudni na požičaný stupeň)?": "빼고 나면 몇 도가 남을까요(빌려 온 1도를 잊지 마세요)?",
  "Koľko stupňov zostáva do súčtu uhlov v trojuholníku?": "삼각형의 세 각의 합이 되려면 몇 도가 남을까요?",
  "Koľko stĺpcov je bod A vzdialený od osi?": "점 A는 축에서 몇 칸 떨어져 있을까요?",
  "Koľkokrát sa 60 zmestí do počtu minút?": "분의 수 안에 60이 몇 번 들어갈까요?",
  "Kruh má nekonečne veľa osí súmernosti: každá priamka, ktorá prechádza jeho stredom.": "원은 대칭축이 무수히 많아요: 중심을 지나는 모든 직선이에요.",
  "Kruhy rozdelené na diely: jedna polovica, tri štvrtiny, tri osminy": "여러 조각으로 나뉜 원: 2분의 1, 4분의 3, 8분의 3",
  "Krátil si správne, ale zlomok ešte nie je v základnom tvare – čitateľ aj menovateľ sa dajú ešte spoločne vydeliť.": "바르게 약분했지만 아직 기약분수가 아니에요. 분자와 분모를 함께 더 나눌 수 있어요.",
  "Ktorá číslica stojí v čísle ${@0}$ hneď za miestom {@1}?": "${@0}$에서 {@1}의 자리 바로 다음에 있는 숫자는 무엇일까요?",
  "Ktoré číslo krát samo sebou dá obsah? To je strana.": "어떤 수를 자기 자신과 곱하면 넓이가 될까요? 그것이 한 변이에요.",
  "Ktoré číslo vynásobené samo sebou dá {@0}?": "자기 자신을 곱해서 {@0}이 되는 수는 무엇일까요?",
  "Ktorú najmenšiu číslicu treba napísať namiesto $\\square$, aby číslo ${@0}$ bolo deliteľné {@1}?": "수 ${@0}$이 {@1}로 나누어떨어지려면 $\\square$에 들어갈 가장 작은 숫자는 무엇일까요?",
  "Ktorú najmenšiu číslicu treba pripočítať k {@0}, aby bol súčet deliteľný {@1}?": "{@0}에 더해서 합이 {@1}로 나누어떨어지게 하는 가장 작은 숫자는 무엇일까요?",
  "Kúsky s touto dĺžkou by sa síce dali nastrihať bez zvyšku, ale nie sú najdlhšie možné.": "이 길이로는 남김없이 자를 수 있지만, 가장 긴 길이는 아니에요.",
  "Medzi susednými plošnými jednotkami je prevodový vzťah 100.": "이웃한 넓이 단위 사이의 관계는 100배예요.",
  "Meranie uhla uhlomerom: uhol 50 stupňov": "각도기로 각 재기: 50도인 각",
  "Minút je málo, preto zameníme 1 stupeň: ${@0} = {@1}$. Potom ${@2} - {@3} = {@4}$ a ${@5} - {@6} = {@7}$, výsledok je ${@8}$.": "분이 모자라니 1도를 바꿔요: ${@0} = {@1}$. 그다음 ${@2} - {@3} = {@4}$, ${@5} - {@6} = {@7}$, 답은 ${@8}$이에요.",
  "Minút je málo, zameň 1 stupeň za 60 minút. Koľko minút bude mať potom prvý uhol?": "분이 모자라니 1도를 60분으로 바꾸세요. 그러면 첫 번째 각은 몇 분이 될까요?",
  "Minút nemôže byť 60 alebo viac. 60 minút zameň za 1 stupeň.": "분은 60 이상이 될 수 없어요. 60분을 1도로 바꾸세요.",
  "Má 180°, ramená tvoria priamku, je priamy.": "180°이고 두 변이 한 직선을 이루니 평각이에요.",
  "Má presne 90°, je pravý.": "정확히 90°이니 직각이에요.",
  "NSD; nsn": "최대공약수; 최소공배수",
  "Na deliteľnosť 6 treba oboje.": "6으로 나누어떨어지려면 둘 다 필요해요.",
  "Na číselnej osi je väčšie číslo vpravo. Každé záporné číslo je menšie ako nula aj ako každé kladné číslo.": "수직선에서는 오른쪽에 있는 수가 더 커요. 모든 음수는 0보다 작고 모든 양수보다 작아요.",
  "Na číselnej osi leží číslo {@0} viac vpravo, je väčšie. Preto ${@1} {@2} {@3}$.": "수직선에서 {@0}이 더 오른쪽에 있으니 더 커요. 그래서 ${@1} {@2} {@3}$.",
  "Najnižšia nočná teplota bola {@0} °C, najvyššia denná {@1} °C. O koľko stupňov bolo cez deň teplejšie?": "밤의 최저 기온은 {@0} °C, 낮의 최고 기온은 {@1} °C였어요. 낮에는 몇 도 더 따뜻했을까요?",
  "Najprv jedna časť: ${@0} : {@1} = {@2}$. Potom {@3} {@4}: ${@5}\\cdot {@6} = {@7}$.": "먼저 한 부분: ${@0} : {@1} = {@2}$. 그다음 {@4} {@3}개: ${@5}\\cdot {@6} = {@7}$.",
  "Najprv z obvodu vypočítaj stranu (štvorec má 4 rovnaké strany).": "먼저 둘레로 한 변을 구하세요(정사각형은 네 변이 같아요).",
  "Najväčší spoločný deliteľ čísel {@0} a {@1} je {@2}. Krátime ním: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.": "{@0}과 {@1}의 최대공약수는 {@2}이에요. 그 수로 약분해요: $\\frac{{@3}}{{@4}} = \\frac{{@5} : {@6}}{{@7} : {@8}} = \\frac{{@9}}{{@10}}$.",
  "Nezabudni, že deliteľom je vždy aj 1 a samotné číslo {@0}.": "1과 그 수 {@0} 자신도 언제나 약수라는 것을 잊지 마세요.",
  "Nie je párne a ciferný súčet {@0} je deliteľný 3.": "짝수가 아니고 각 자리 숫자의 합 {@0}이 3으로 나누어떨어져요.",
  "Nie je párne a ciferný súčet {@0} nie je deliteľný 3.": "짝수가 아니고 각 자리 숫자의 합 {@0}이 3으로 나누어떨어지지 않아요.",
  "Nie. Písmeno {@0} nemá zvislú ani vodorovnú os súmernosti, po preložení sa polovice neprekryjú.": "아니요. 글자 {@0}은 세로 대칭축도 가로 대칭축도 없어서, 접어도 두 쪽이 겹치지 않아요.",
  "Nájdi najväčšie číslo, ktorým sa dá vydeliť čitateľ aj menovateľ.": "분자와 분모를 모두 나눌 수 있는 가장 큰 수를 찾으세요.",
  "Násobíme bez čiarok: ${@0}\\cdot {@1} = {@2}$. Činitele majú spolu {@3} {@4}, preto ${@5}\\cdot {@6} = {@7}$.": "소수점 없이 곱해요: ${@0}\\cdot {@1} = {@2}$. 두 곱하는 수의 소수 자릿수는 모두 {@3}개이므로 ${@5}\\cdot {@6} = {@7}$.",
  "O koľko stupňov bolo cez deň teplejšie?": "낮에는 몇 도 더 따뜻했을까요?",
  "O koľko stupňov stúpne teplota z 0 °C na {@0} °C?": "기온이 0 °C에서 {@0} °C로 몇 도 올라갈까요?",
  "O koľko stupňov stúpne teplota z {@0} °C na 0 °C?": "기온이 {@0} °C에서 0 °C로 몇 도 올라갈까요?",
  "Obdĺžnik (ktorý nie je štvorec) má 2 osi súmernosti, ktoré spájajú stredy protiľahlých strán. Uhlopriečky osami nie sú.": "직사각형(정사각형이 아닌)은 마주 보는 변의 중점을 잇는 대칭축이 2개 있어요. 대각선은 대칭축이 아니에요.",
  "Obdĺžnik 5 cm krát 3 cm rozdelený na štvorčeky 1 cm²": "1 cm² 칸으로 나뉜 5 cm × 3 cm 직사각형",
  "Obdĺžnik má obsah ${@0}\\,\\text{cm}^2$ a jednu stranu ${@1}\\,\\text{cm}$. Aká dlhá je druhá strana (v cm)?": "직사각형의 넓이는 ${@0}\\,\\text{cm}^2$이고 한 변은 ${@1}\\,\\text{cm}$예요. 다른 변의 길이는 몇 cm일까요?",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obsah v cm².": "직사각형의 두 변이 $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$예요. 넓이를 cm²로 구하세요.",
  "Obdĺžnik má strany $a = {@0}\\,\\text{cm}$ a $b = {@1}\\,\\text{cm}$. Vypočítaj jeho obvod v cm.": "직사각형의 두 변이 $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$예요. 둘레를 cm로 구하세요.",
  "Obe čísla sú deliteľné {@0}, teda $D({@1}, {@2}) = {@3} &gt; 1$. Sú súdeliteľné.": "두 수 모두 {@0}로 나누어떨어지므로 $D({@1}, {@2}) = {@3} &gt; 1$이에요. 서로소가 아니에요.",
  "Obsah je súčin strán, druhú stranu teda dostaneš delením.": "넓이는 두 변의 곱이니 다른 변은 나눗셈으로 구해요.",
  "Obsah je súčin strán, preto druhú stranu dostaneš delením, nie odčítaním.": "넓이는 두 변의 곱이니 다른 변은 빼기가 아니라 나눗셈으로 구해요.",
  "Obsah nedelíš štyrmi ako obvod. Stranu nájdeš ako číslo, ktoré vynásobené samo sebou dá obsah.": "넓이는 둘레처럼 4로 나누지 않아요. 자기 자신을 곱해서 넓이가 되는 수가 한 변이에요.",
  "Obsah obdĺžnika: S = a · b.": "직사각형의 넓이: S = a · b.",
  "Obsah štvorca je strana krát strana.": "정사각형의 넓이는 한 변 곱하기 한 변이에요.",
  "Obvod nie je strana štvorca. Najprv ho vydeľ štyrmi – dostaneš stranu.": "둘레는 정사각형의 한 변이 아니에요. 먼저 4로 나누면 한 변이 나와요.",
  "Obvod obdĺžnika: o = 2 · (a + b).": "직사각형의 둘레: o = 2 · (a + b).",
  "Ochladenie znamená odčítať.": "기온이 내려가면 빼요.",
  "Od obvodu si odčítal obe strany dĺžky a. Zostali ti dve strany b – výsledok ešte vydeľ dvomi.": "둘레에서 길이 a인 두 변을 뺐어요. 길이 b인 두 변이 남았으니 결과를 2로 나누세요.",
  "Od teploty {@0} °C odčítavaš zápornú teplotu {@1} °C. Odčítať záporné číslo znamená pripočítať opačné.": "기온 {@0} °C에서 음의 기온 {@1} °C를 빼고 있어요. 음수를 빼는 것은 그 반대수를 더하는 거예요.",
  "Od vyššej teploty odčítaj nižšiu. Odčítať záporné číslo znamená pripočítať opačné.": "높은 기온에서 낮은 기온을 빼세요. 음수를 빼는 것은 그 반대수를 더하는 거예요.",
  "Odčítaj minúty.": "분을 빼세요.",
  "Odčítaj stupne.": "도를 빼세요.",
  "Odčítavaš kladné číslo – na číselnej osi sa posúvaš doľava.": "양수를 빼면 수직선에서 왼쪽으로 움직여요.",
  "Odčítať záporné číslo znamená pripočítať opačné číslo: mínus a mínus dajú plus.": "음수를 빼는 것은 반대수를 더하는 거예요: 마이너스와 마이너스는 플러스가 돼요.",
  "Odčítať záporné číslo znamená pripočítať opačné: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.": "음수를 빼는 것은 반대수를 더하는 거예요: ${@0} - ({@1}) = {@2} + {@3} = {@4}$.",
  "Odčítať číslo je to isté ako pripočítať k nemu opačné. Pomôž si číselnou osou.": "어떤 수를 빼는 것은 그 반대수를 더하는 것과 같아요. 수직선을 이용해 보세요.",
  "Okrem priamok cez stredy protiľahlých strán sú osami štvorca aj jeho uhlopriečky.": "마주 보는 변의 중점을 지나는 직선 말고도 정사각형의 대각선도 대칭축이에요.",
  "Opačné číslo leží na osi rovnako ďaleko od nuly, ale na druhej strane: k {@0} je to {@1}.": "반대수는 수직선에서 0으로부터 같은 거리만큼 반대쪽에 있어요: {@0}의 반대수는 {@1}이에요.",
  "Opačné číslo má rovnakú vzdialenosť od nuly, ale opačné znamienko.": "반대수는 0으로부터의 거리가 같고 부호가 반대예요.",
  "Os súmernosti $o$ (prerušovaná čiara) je vodorovná priamka v riadku {@0}. Bod $A$ leží v riadku {@1}. V ktorom riadku leží jeho obraz $A'$?": "대칭축 $o$(점선)는 {@0}번째 줄의 가로 직선이에요. 점 $A$는 {@1}번째 줄에 있어요. 대칭점 $A'$는 몇 번째 줄에 있을까요?",
  "Os súmernosti $o$ (prerušovaná čiara) je zvislá priamka v stĺpci {@0}. Bod $A$ leží v stĺpci {@1}. V ktorom stĺpci leží jeho obraz $A'$?": "대칭축 $o$(점선)는 {@0}번째 칸의 세로 직선이에요. 점 $A$는 {@1}번째 칸에 있어요. 대칭점 $A'$는 몇 번째 칸에 있을까요?",
  "Os súmernosti prechádza každým vrcholom rovnostranného trojuholníka, nielen jedným.": "정삼각형의 대칭축은 한 꼭짓점만이 아니라 모든 꼭짓점을 지나요.",
  "Ostrouhlý trojuholník má všetky tri uhly menšie ako 90°. Nezabudni dopočítať aj tretí uhol.": "예각삼각형은 세 각이 모두 90°보다 작아요. 나머지 한 각도 구하는 것을 잊지 마세요.",
  "Ostrý uhol je menší ako pravý uhol, teda menší ako 90°.": "예각은 직각보다 작은, 즉 90°보다 작은 각이에요.",
  "Ostrý, pravý, tupý a priamy uhol": "예각, 직각, 둔각, 평각",
  "Oteplenie znamená pripočítať.": "기온이 올라가면 더해요.",
  "Over trojuholníkovú nerovnosť: súčet dvoch kratších strán musí byť väčší ako najdlhšia strana.": "삼각부등식을 확인하세요: 짧은 두 변의 합이 가장 긴 변보다 커야 해요.",
  "Polovica obvodu je $a + b = {@0} : 2 = {@1}$, preto $b = {@2} - {@3} = {@4}\\,\\text{cm}$.": "둘레의 절반은 $a + b = {@0} : 2 = {@1}$이므로 $b = {@2} - {@3} = {@4}\\,\\text{cm}$.",
  "Polovica obvodu je súčet dvoch susedných strán.": "둘레의 절반은 이웃한 두 변의 합이에요.",
  "Porovnaj uhol s pravým uhlom (90°, roh zošita) a s priamym uhlom (180°).": "각을 직각(90°, 공책 모서리)과 평각(180°)에 비교해 보세요.",
  "Posledná číslica je {@0}, je to 0 alebo 5.": "끝자리 숫자가 {@0}이고, 0 또는 5예요.",
  "Posledná číslica je {@0}, je to 0.": "끝자리 숫자가 {@0}이고, 0이에요.",
  "Posledná číslica je {@0}, nie je to 0 ani 5.": "끝자리 숫자가 {@0}이고, 0도 5도 아니에요.",
  "Posledná číslica je {@0}, nie je to 0.": "끝자리 숫자가 {@0}이고, 0이 아니에요.",
  "Posunul si čiarku opačným smerom. Pri delení číslom {@0} sa číslo zmenší.": "소수점을 반대 방향으로 옮겼어요. {@0}로 나누면 수가 작아져요.",
  "Posunul si čiarku opačným smerom. Pri násobení číslom {@0} sa číslo zväčší.": "소수점을 반대 방향으로 옮겼어요. {@0}을 곱하면 수가 커져요.",
  "Použi znak deliteľnosti pre dané číslo (posledná číslica, ciferný súčet alebo posledné dvojčíslie).": "그 수의 배수 판정법을 쓰세요(끝자리 숫자, 각 자리 숫자의 합, 끝의 두 자리 수).",
  "Pozri sa na prvú číslicu za miestom, na ktoré zaokrúhľuješ: 0 – 4 nadol, 5 – 9 nahor.": "반올림할 자리 바로 다음 숫자를 보세요: 0 – 4는 버림, 5 – 9는 올림.",
  "Pozri sa pozorne – obe čísla sú rovnaké.": "잘 보세요. 두 수는 같아요.",
  "Pozri sa, či nie sú rovnako dlhé všetky tri strany – taký trojuholník má presnejší názov.": "세 변의 길이가 모두 같지 않은지 보세요. 그런 삼각형에는 더 정확한 이름이 있어요.",
  "Počet núl v čísle 10, 100 alebo 1 000 udáva, o koľko miest sa posunie desatinná čiarka.": "10, 100, 1 000의 0의 개수가 소수점을 몇 자리 옮길지 알려 줘요.",
  "Počítaj zvlášť stupne a zvlášť minúty. 60 minút je 1 stupeň.": "도와 분을 따로 계산하세요. 60분은 1도예요.",
  "Požičal si si 1 stupeň na minúty, ale nezmenšil si o neho počet stupňov.": "분을 위해 1도를 빌려 왔는데, 도의 수에서 1을 빼지 않았어요.",
  "Pravouhlý trojuholník má jeden uhol presne 90°. Dopočítaj tretí uhol a skontroluj to.": "직각삼각형은 한 각이 정확히 90°예요. 나머지 한 각을 구해서 확인하세요.",
  "Pravý uhol má presne 90° – ako roh zošita.": "직각은 정확히 90°예요. 공책 모서리와 같아요.",
  "Predstav si zrkadlo postavené zvislo alebo vodorovne cez stred písmena.": "글자 가운데에 거울을 세로나 가로로 세웠다고 생각해 보세요.",
  "Predstav si, že útvar prekladáš pozdĺž priamky. Koľkými spôsobmi sa obe polovice presne prekryjú?": "도형을 직선을 따라 접는다고 생각해 보세요. 두 쪽이 정확히 겹치는 방법은 몇 가지일까요?",
  "Premeň: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$": "바꾸세요: ${@0}\\,\\text{{@1}}^2 = \\;?\\;\\text{{@2}}^2$",
  "Preto nie, číslo {@0} nie je deliteľné {@1}.": "그러므로 아니요, {@0}은 {@1}로 나누어떨어지지 않아요.",
  "Preto áno, číslo {@0} je deliteľné {@1}.": "그러므로 네, {@0}은 {@1}로 나누어떨어져요.",
  "Preveď oba zlomky na spoločného menovateľa a porovnaj čitateľov.": "두 분수를 통분해서 분자를 비교하세요.",
  "Pri delení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doľava: {@3}.": "{@0}로 나눌 때는 소수점을 왼쪽으로 {@1}{@2} 옮겨요: {@3}.",
  "Pri deliteľnosti 10 rozhoduje posledná číslica – musí to byť 0.": "10으로 나누어떨어지는지는 끝자리 숫자로 정해요. 0이어야 해요.",
  "Pri deliteľnosti 2 rozhoduje iba posledná číslica – musí byť párna.": "2로 나누어떨어지는지는 끝자리 숫자만 보면 돼요. 짝수여야 해요.",
  "Pri deliteľnosti 3 nerozhoduje posledná číslica, ale ciferný súčet. Sčítaj všetky číslice.": "3으로 나누어떨어지는지는 끝자리 숫자가 아니라 각 자리 숫자의 합으로 정해요. 모든 숫자를 더하세요.",
  "Pri deliteľnosti 4 nestačí, aby bolo číslo párne. Rozhoduje číslo z posledných dvoch číslic.": "4로 나누어떨어지려면 짝수인 것만으로는 부족해요. 끝의 두 자리 수로 정해요.",
  "Pri deliteľnosti 5 rozhoduje posledná číslica – musí byť 0 alebo 5.": "5로 나누어떨어지는지는 끝자리 숫자로 정해요. 0 또는 5여야 해요.",
  "Pri deliteľnosti 9 rozhoduje ciferný súčet – musí byť deliteľný 9, nestačí deliteľnosť 3.": "9로 나누어떨어지는지는 각 자리 숫자의 합으로 정해요. 9로 나누어떨어져야 하고, 3으로 나누어떨어지는 것만으로는 부족해요.",
  "Pri násobení číslom {@0} posunieme desatinnú čiarku o {@1} {@2} doprava: {@3}.": "{@0}을 곱할 때는 소수점을 오른쪽으로 {@1}{@2} 옮겨요: {@3}.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.": "넓이 단위에서는 관계가 10이 아니라 $10\\cdot 10 = 100$이에요: $100\\,\\text{{@0}}^2 = 1\\,\\text{{@1}}^2$.",
  "Pri plošných jednotkách nie je prevod 10, ale $10\\cdot 10 = 100$: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.": "넓이 단위에서는 관계가 10이 아니라 $10\\cdot 10 = 100$이에요: $1\\,\\text{{@0}}^2 = 100\\,\\text{{@1}}^2$.",
  "Pri požičaní zamieňaš 1 stupeň za 60 minút, nie za 100.": "빌려 올 때는 1도를 100분이 아니라 60분으로 바꿔요.",
  "Pri záporných číslach je väčšie to, ktoré je bližšie k nule. Nerozhoduje, ktoré má väčšiu číslicu.": "음수에서는 0에 더 가까운 수가 더 커요. 숫자가 큰지 작은지로 정하지 않아요.",
  "Priamy uhol má 180°, jeho ramená ležia na jednej priamke.": "평각은 180°이고, 두 변이 한 직선 위에 있어요.",
  "Pripočítaj ešte ${@0}'$.": "${@0}'$을 더 더하세요.",
  "Pripočítavaš kladné číslo – na číselnej osi sa posúvaš doprava.": "양수를 더하면 수직선에서 오른쪽으로 움직여요.",
  "Pripočítať záporné číslo znamená odčítať: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.": "음수를 더하는 것은 빼는 거예요: ${@0} + ({@1}) = {@2} - {@3} = {@4}$.",
  "Pripočítať záporné číslo znamená posunúť sa na osi doľava, teda odčítať.": "음수를 더하는 것은 수직선에서 왼쪽으로 움직이는 것, 즉 빼는 거예요.",
  "Prvočíslo má iba dva delitele. Skús, či sa {@0} nedá vydeliť bez zvyšku niektorým z čísel 2, 3, 5, 7.": "소수는 약수가 두 개뿐이에요. {@0}이 2, 3, 5, 7 중 어떤 수로 나누어떨어지는지 확인해 보세요.",
  "Prvočíslo má práve dva delitele a zložené číslo viac ako dva. Koľko deliteľov má číslo 1?": "소수는 약수가 정확히 두 개이고, 합성수는 두 개보다 많아요. 1의 약수는 몇 개일까요?",
  "Rovnoramenný trojuholník (nie rovnostranný) má 1 os súmernosti: prechádza hlavným vrcholom a stredom základne.": "이등변삼각형(정삼각형이 아닌)은 대칭축이 1개예요: 꼭지각의 꼭짓점과 밑변의 중점을 지나요.",
  "Rovnoramenný trojuholník má dve strany rovnako dlhé.": "이등변삼각형은 두 변의 길이가 같아요.",
  "Rovnostranný trojuholník má 3 osi súmernosti, každá prechádza vrcholom a stredom protiľahlej strany.": "정삼각형은 대칭축이 3개이고, 각각 꼭짓점과 마주 보는 변의 중점을 지나요.",
  "Rovnostranný trojuholník má všetky tri strany rovnako dlhé.": "정삼각형은 세 변의 길이가 모두 같아요.",
  "Rozdiel teplôt: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. Cez deň bolo o {@5} °C teplejšie.": "기온의 차: ${@0} - ({@1}) = {@2} + {@3} = {@4}$. 낮에는 {@5} °C 더 따뜻했어요.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je 5 alebo viac, zaokrúhlime nahor: ${@1} \\doteq {@2}$.": "결정하는 것은 이 자리 바로 다음 숫자인 {@0}이에요. 5 이상이니 올림해요: ${@1} \\doteq {@2}$.",
  "Rozhoduje číslica hneď za týmto miestom, je to {@0}. Je menšia ako 5, zaokrúhlime nadol: ${@1} \\doteq {@2}$.": "결정하는 것은 이 자리 바로 다음 숫자인 {@0}이에요. 5보다 작으니 버림해요: ${@1} \\doteq {@2}$.",
  "Rozklad nie je dokončený: {@0} nie je prvočíslo. Pokračuj v delení prvočíslami.": "소인수분해가 끝나지 않았어요: {@0}은 소수가 아니에요. 소수로 계속 나누세요.",
  "Rozlož obe čísla na prvočinitele. NSD tvoria spoločné prvočinitele, nsn všetky (s najväčším počtom výskytov).": "두 수를 소인수분해하세요. 최대공약수는 공통인 소인수로, 최소공배수는 모든 소인수로(가장 많이 나오는 횟수만큼) 만들어요.",
  "Rozlož čísla {@0} a {@1} na prvočinitele. Aký je ich najväčší spoločný deliteľ?": "{@0}과 {@1}을 소인수분해하세요. 두 수의 최대공약수는 무엇일까요?",
  "Rozlož číslo {@0} na súčin prvočísel. Prvočinitele zapíš od najmenšieho, oddeľ ich bodkočiarkou (aj opakujúce sa).": "{@0}을 소수의 곱으로 나타내세요. 소인수를 작은 것부터 세미콜론으로 구분해서 쓰세요(반복되는 것도 모두).",
  "Rozšírime na menovateľ {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (Alebo vydelíme ${@6} : {@7}$.)": "분모가 {@0}이 되도록 바꿔요: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}} = {@5}$. (또는 ${@6} : {@7}$을 나눠요.)",
  "Ráno bolo {@0} °C. Do večera sa ochladilo o {@1} °C. Aká teplota bola večer (v °C)?": "아침 기온은 {@0} °C였어요. 저녁까지 {@1} °C 내려갔어요. 저녁 기온은 몇 °C였을까요?",
  "Ráno bolo {@0} °C. Do večera sa oteplilo o {@1} °C. Aká teplota bola večer (v °C)?": "아침 기온은 {@0} °C였어요. 저녁까지 {@1} °C 올라갔어요. 저녁 기온은 몇 °C였을까요?",
  "Rôznostranný trojuholník má všetky tri strany rôzne dlhé. Porovnaj dĺžky ešte raz.": "부등변삼각형은 세 변의 길이가 모두 달라요. 길이를 다시 비교하세요.",
  "Rôznostranný trojuholník nemá žiadnu os súmernosti, žiadne dve strany nie sú rovnako dlhé.": "부등변삼각형은 길이가 같은 변이 없어서 대칭축이 없어요.",
  "S touto číslicou bude číslo naozaj deliteľné, ale hľadáš najmenšiu takú číslicu.": "이 숫자로도 나누어떨어지지만, 가장 작은 숫자를 찾아야 해요.",
  "Skráť zlomok $\\frac{{@0}}{{@1}}$ na základný tvar. Odpoveď zapíš ako a/b.": "분수 $\\frac{{@0}}{{@1}}$을 기약분수로 나타내세요. a/b 꼴로 쓰세요.",
  "Skús nájsť spoločný deliteľ väčší ako 1 – pozri sa napríklad, či sú obe čísla deliteľné 2, 3, 5 alebo 7.": "1보다 큰 공약수를 찾아보세요. 예를 들어 두 수가 모두 2, 3, 5, 7로 나누어떨어지는지 보세요.",
  "Skús, či sa číslo dá deliť 2, 3, 5 alebo 7 bez zvyšku.": "그 수가 2, 3, 5, 7로 나누어떨어지는지 확인해 보세요.",
  "Spoločný menovateľ je {@0}: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$ a $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. Keďže ${@9} {@10} {@11}$, platí $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$.": "공통분모는 {@0}이에요: $\\frac{{@1}}{{@2}} = \\frac{{@3}}{{@4}}$, $\\frac{{@5}}{{@6}} = \\frac{{@7}}{{@8}}$. ${@9} {@10} {@11}$이므로 $\\frac{{@12}}{{@13}} {@14} \\frac{{@15}}{{@16}}$이에요.",
  "Spočítaj, koľko riadkov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "점 A가 축에서 몇 줄 떨어져 있는지 세고, 반대쪽으로 같은 수만큼 세세요.",
  "Spočítaj, koľko strán má rovnakú dĺžku.": "길이가 같은 변이 몇 개인지 세어 보세요.",
  "Spočítaj, koľko stĺpcov je bod A od osi, a odpočítaj rovnaký počet na druhú stranu.": "점 A가 축에서 몇 칸 떨어져 있는지 세고, 반대쪽으로 같은 수만큼 세세요.",
  "Strana: $a = {@0} : 4 = {@1}\\,\\text{cm}$. Obsah: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.": "한 변: $a = {@0} : 4 = {@1}\\,\\text{cm}$. 넓이: $S = {@2}\\cdot {@3} = {@4}\\,\\text{cm}^2$.",
  "Stranu si vynásobil dvomi. Obsah štvorca je strana krát strana, nie strana krát 2.": "한 변에 2를 곱했어요. 정사각형의 넓이는 한 변 곱하기 2가 아니라 한 변 곱하기 한 변이에요.",
  "Strany si sčítal. Obsah obdĺžnika je súčin dĺžok jeho strán.": "변을 더했어요. 직사각형의 넓이는 변의 길이의 곱이에요.",
  "Stromy rozkladu čísel 60 a 84 na prvočinitele": "60과 84의 소인수분해 나무",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Keďže ${@6}' = 1^\\circ\\,{@7}'$, výsledok je ${@8}$.": "도: ${@0} + {@1} = {@2}$, 분: ${@3} + {@4} = {@5}$. ${@6}' = 1^\\circ\\,{@7}'$이므로 답은 ${@8}$이에요.",
  "Stupne: ${@0} + {@1} = {@2}$, minúty: ${@3} + {@4} = {@5}$. Výsledok je ${@6}$.": "도: ${@0} + {@1} = {@2}$, 분: ${@3} + {@4} = {@5}$. 답은 ${@6}$이에요.",
  "Stupne: ${@0} - {@1} = {@2}$, minúty: ${@3} - {@4} = {@5}$. Výsledok je ${@6}$.": "도: ${@0} - {@1} = {@2}$, 분: ${@3} - {@4} = {@5}$. 답은 ${@6}$이에요.",
  "Sú čísla {@0} a {@1} súdeliteľné, alebo nesúdeliteľné?": "{@0}과 {@1}은 서로소일까요, 서로소가 아닐까요?",
  "Súčet sa rovná najdlhšej strane, strany by ležali na jednej priamke. Trojuholník sa zostrojiť nedá.": "합이 가장 긴 변과 같아서 세 변이 한 직선 위에 놓여요. 삼각형을 그릴 수 없어요.",
  "Súčet uhlov je $180^\\circ$: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.": "세 각의 합은 $180^\\circ$예요: $\\gamma = 180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$.",
  "Súčet uhlov v trojuholníku je 180°, nie 360°.": "삼각형의 세 각의 합은 360°가 아니라 180°예요.",
  "Súčet vnútorných uhlov trojuholníka je 180°, nie 360°.": "삼각형의 세 내각의 합은 360°가 아니라 180°예요.",
  "Súčet vnútorných uhlov trojuholníka je 180°.": "삼각형의 세 내각의 합은 180°예요.",
  "Súčet známych číslic je {@0}. Ciferný súčet musí byť deliteľný {@1}: najmenšia vhodná číslica je {@2}, lebo ${@3} + {@4} = {@5}$.": "알고 있는 숫자의 합은 {@0}이에요. 각 자리 숫자의 합이 {@1}로 나누어떨어져야 해요: 가장 작은 알맞은 숫자는 {@2}이에요. ${@3} + {@4} = {@5}$이니까요.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Linky sa stretnú skôr.": "곱 {@0}·{@1}은 공배수이지만 최소공배수는 아니에요. 두 노선은 더 일찍 만나요.",
  "Súčin {@0}·{@1} je spoločný násobok, ale nie najmenší. Pri nsn ber každý prvočiniteľ len toľkokrát, koľkokrát je v tom čísle, kde ho je najviac.": "곱 {@0}·{@1}은 공배수이지만 최소공배수는 아니에요. 최소공배수에서는 각 소인수를 가장 많이 나오는 수에서의 횟수만큼만 써요.",
  "Sčítaj dve kratšie strany a porovnaj ich súčet s najdlhšou stranou. Stačí, aby bol súčet väčší.": "짧은 두 변을 더해서 그 합을 가장 긴 변과 비교하세요. 합이 더 크기만 하면 돼요.",
  "Sčítaj dve kratšie strany a porovnaj so stranou najdlhšou. Súčet musí byť väčší.": "짧은 두 변을 더해서 가장 긴 변과 비교하세요. 합이 더 커야 해요.",
  "Sčítaj minúty.": "분을 더하세요.",
  "Sčítaj stupne.": "도를 더하세요.",
  "Sčítaj známe číslice. Ku súčtu pridaj čo najmenšiu číslicu tak, aby bol súčet deliteľný {@0}.": "알고 있는 숫자를 더하세요. 합이 {@0}로 나누어떨어지도록 가장 작은 숫자를 더하세요.",
  "Sčítal si iba dve strany. Obdĺžnik má štyri strany, súčet susedných strán ešte vynásob dvomi.": "두 변만 더했어요. 직사각형은 변이 네 개이니 이웃한 두 변의 합에 2를 곱하세요.",
  "Takto bude ciferný súčet deliteľný 3, ale pre deliteľnosť 9 musí byť deliteľný 9.": "이렇게 하면 각 자리 숫자의 합이 3으로 나누어떨어지지만, 9로 나누어떨어지려면 합이 9로 나누어떨어져야 해요.",
  "Takú veľkosť má vedľajší uhol. Vrcholové uhly ležia oproti sebe a sú zhodné.": "그건 이웃각의 크기예요. 맞꼭지각은 서로 마주 보고 크기가 같아요.",
  "Toto je najmenší spoločný násobok. Kúsok musí byť kratší ako stuhy – hľadáš najväčší spoločný deliteľ.": "그건 최소공배수예요. 조각은 리본보다 짧아야 하니 최대공약수를 찾아야 해요.",
  "Toto je najväčší spoločný deliteľ. Čas spoločného odchodu musí byť násobkom oboch intervalov – hľadáš najmenší spoločný násobok.": "그건 최대공약수예요. 함께 출발하는 시간은 두 간격의 배수여야 하니 최소공배수를 찾아야 해요.",
  "Toto je obvod štvorca. Obsah vypočítaš ako stranu krát stranu.": "그건 정사각형의 둘레예요. 넓이는 한 변 곱하기 한 변으로 구해요.",
  "Toto je obvod. Obsah obdĺžnika vypočítaš ako súčin dĺžok jeho strán.": "그건 둘레예요. 직사각형의 넓이는 두 변의 길이의 곱으로 구해요.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obsah.": "그건 정사각형의 한 변이에요. 그것으로 넓이를 더 구하세요.",
  "Toto je strana štvorca. Ešte z nej vypočítaj obvod.": "그건 정사각형의 한 변이에요. 그것으로 둘레를 더 구하세요.",
  "Toto je vzdialenosť bodu A od osi. Obraz leží rovnako ďaleko na druhej strane osi – zisti jeho číslo.": "그건 점 A와 축 사이의 거리예요. 대칭점은 축의 반대쪽에 같은 거리만큼 떨어져 있어요. 그 번호를 구하세요.",
  "Toľko stupňov majú spolu oba uhly pri základni. Sú zhodné, preto výsledok ešte rozdeľ na polovicu.": "그건 두 밑각을 합한 크기예요. 두 밑각은 크기가 같으니 결과를 반으로 나누세요.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je pravý, trojuholník je pravouhlý.": "나머지 한 각: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. 가장 큰 각은 ${@3}^\\circ$로 직각이니 직각삼각형이에요.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, je tupý, trojuholník je tupouhlý.": "나머지 한 각: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. 가장 큰 각은 ${@3}^\\circ$로 둔각이니 둔각삼각형이에요.",
  "Tretí uhol: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. Najväčší uhol má ${@3}^\\circ$, všetky uhly sú ostré, trojuholník je ostrouhlý.": "나머지 한 각: $180^\\circ - {@0}^\\circ - {@1}^\\circ = {@2}^\\circ$. 가장 큰 각은 ${@3}^\\circ$이고 모든 각이 예각이니 예각삼각형이에요.",
  "Trojuholník má dva vnútorné uhly s veľkosťou ${@0}^\\circ$ a ${@1}^\\circ$. Aký je to trojuholník podľa uhlov?": "삼각형의 두 내각이 ${@0}^\\circ$와 ${@1}^\\circ$예요. 각에 따라 어떤 삼각형일까요?",
  "Trojuholník má strany {@0} cm, {@1} cm a {@2} cm. Aký je podľa strán?": "삼각형의 세 변이 {@0} cm, {@1} cm, {@2} cm예요. 변에 따라 어떤 삼각형일까요?",
  "Tupouhlý trojuholník má jeden uhol väčší ako 90°. Dopočítaj tretí uhol a skontroluj to.": "둔각삼각형은 한 각이 90°보다 커요. 나머지 한 각을 구해서 확인하세요.",
  "Tupý uhol je väčší ako 90° a zároveň menší ako 180°.": "둔각은 90°보다 크고 180°보다 작아요.",
  "Túto vlastnosť má iba číslo 1. Každé väčšie prirodzené číslo je buď prvočíslo, alebo zložené číslo.": "이런 성질은 1만 가지고 있어요. 1보다 큰 자연수는 소수이거나 합성수예요.",
  "Uhlopriečky obdĺžnika nie sú osami súmernosti – po preložení pozdĺž uhlopriečky sa polovice neprekryjú.": "직사각형의 대각선은 대칭축이 아니에요. 대각선을 따라 접으면 두 쪽이 겹치지 않아요.",
  "Uhly pri základni rovnoramenného trojuholníka sú rovnaké a všetky tri uhly majú spolu 180°.": "이등변삼각형의 두 밑각은 크기가 같고, 세 각의 합은 180°예요.",
  "Uhly pri základni sú zhodné: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.": "두 밑각은 크기가 같아요: $(180^\\circ - {@0}^\\circ) : 2 = {@1}^\\circ : 2 = {@2}^\\circ$.",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vedľajší (v stupňoch)?": "각 $\\alpha$의 크기는 ${@0}^\\circ$예요. 이 각의 이웃각은 몇 도일까요?",
  "Uhol $\\alpha$ má veľkosť ${@0}^\\circ$. Aký veľký je uhol k nemu vrcholový (v stupňoch)?": "각 $\\alpha$의 크기는 ${@0}^\\circ$예요. 이 각의 맞꼭지각은 몇 도일까요?",
  "Uhol má {@0}°.": "각의 크기는 {@0}°예요.",
  "Umiestni desatinnú čiarku: koľko je ${@0}\\cdot {@1}$?": "소수점을 찍으세요: ${@0}\\cdot {@1}$은 얼마일까요?",
  "Urči najväčší spoločný deliteľ a najmenší spoločný násobok čísel {@0} a {@1}. Zapíš ich v poradí NSD; nsn.": "{@0}과 {@1}의 최대공약수와 최소공배수를 구하세요. 최대공약수; 최소공배수 순서로 쓰세요.",
  "V ktorom riadku leží obraz $A'$?": "대칭점 $A'$는 몇 번째 줄에 있을까요?",
  "V ktorom stĺpci leží obraz $A'$?": "대칭점 $A'$는 몇 번째 칸에 있을까요?",
  "V rovnoramennom trojuholníku má uhol oproti základni (pri hlavnom vrchole) veľkosť ${@0}^\\circ$. Aký veľký je každý z uhlov pri základni?": "이등변삼각형에서 꼭지각(밑변의 맞은편 각)의 크기가 ${@0}^\\circ$예요. 밑각 하나의 크기는 얼마일까요?",
  "V trojuholníku $ABC$ je $\\alpha = {@0}^\\circ$ a $\\beta = {@1}^\\circ$. Aký veľký je uhol $\\gamma$ (v stupňoch)?": "삼각형 $ABC$에서 $\\alpha = {@0}^\\circ$, $\\beta = {@1}^\\circ$예요. 각 $\\gamma$는 몇 도일까요?",
  "Vedľajšie uhly dávajú spolu priamy uhol, vrcholové uhly sú zhodné.": "이웃각을 합하면 평각이 되고, 맞꼭지각은 크기가 같아요.",
  "Vedľajšie uhly majú spolu $180^\\circ$: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.": "이웃각을 합하면 $180^\\circ$예요: $180^\\circ - {@0}^\\circ = {@1}^\\circ$.",
  "Vedľajšie uhly sa nedopĺňajú do pravého uhla, ale do priameho uhla (180°).": "이웃각을 합하면 직각이 아니라 평각(180°)이 돼요.",
  "Vedľajšie uhly tvoria spolu priamy uhol, teda 180°, nie 360°.": "이웃각을 합하면 평각, 즉 360°가 아니라 180°예요.",
  "Vrcholové uhly sú rovnako veľké, preto má tiež ${@0}^\\circ$.": "맞꼭지각은 크기가 같으니 이 각도 ${@0}^\\circ$예요.",
  "Vydeľ počet minút číslom 60. Podiel sú stupne, zvyšok minúty.": "분의 수를 60으로 나누세요. 몫은 도, 나머지는 분이에요.",
  "Vydeľ čitateľa aj menovateľa číslom {@0}. Aký zlomok dostaneš (a/b)?": "분자와 분모를 모두 {@0}로 나누세요. 어떤 분수가 될까요(a/b)?",
  "Vyjadri ${@0}'$ v stupňoch a minútach. Zapíš v tvare stupne; minúty.": "${@0}'$을 도와 분으로 나타내세요. 도; 분 꼴로 쓰세요.",
  "Vynásob prvočinitele, ktoré sú v oboch rozkladoch.": "두 소인수분해에 공통으로 있는 소인수를 곱하세요.",
  "Vynásob čísla bez desatinných čiarok a potom spočítaj desatinné miesta oboch činiteľov.": "소수점 없이 곱한 다음, 두 곱하는 수의 소수 자릿수를 세세요.",
  "Vynásob čísla bez desatinných čiarok: ${@0}\\cdot {@1}$.": "소수점 없이 곱하세요: ${@0}\\cdot {@1}$.",
  "Vynásobil si strany – to je obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "변을 곱했어요. 그건 넓이예요. 둘레는 네 변의 길이의 합이에요.",
  "Vypočítaj ${@0} {@1} {@2}$. Výsledok zapíš v tvare stupne; minúty.": "${@0} {@1} {@2}$를 계산하세요. 답을 도; 분 꼴로 쓰세요.",
  "Vypočítaj ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$을 계산하세요.",
  "Vypočítaj $|{@0}| + |{@1}|$.": "$|{@0}| + |{@1}|$을 계산하세요.",
  "Vypočítal si iba jednu časť. Ešte ju vynásob čitateľom {@0}.": "한 부분만 계산했어요. 거기에 분자 {@0}을 곱하세요.",
  "Väčšie je číslo, ktoré leží na číselnej osi viac vpravo. Pozor: −2 je väčšie ako −9.": "수직선에서 더 오른쪽에 있는 수가 더 커요. 조심하세요: −2는 −9보다 커요.",
  "Všetky strany sú rovnako dlhé, trojuholník je rovnostranný.": "모든 변의 길이가 같으니 정삼각형이에요.",
  "Všetky tri strany sú rôzne dlhé, trojuholník je rôznostranný.": "세 변의 길이가 모두 다르니 부등변삼각형이에요.",
  "Z autobusovej stanice odchádza linka A každých {@0} minút a linka B každých {@1} minút. O 7:00 odišli obe linky naraz. O koľko minút neskôr odídu znova naraz?": "버스 터미널에서 A 노선은 {@0}분마다, B 노선은 {@1}분마다 출발해요. 7:00에 두 노선이 함께 출발했어요. 몇 분 뒤에 다시 함께 출발할까요?",
  "Z menšej jednotky na väčšiu delíme číslom 100.": "작은 단위에서 큰 단위로 바꿀 때는 100으로 나눠요.",
  "Za týmto miestom je číslica {@0}. Zaokrúhli ${@1}$ na {@2}.": "이 자리 다음 숫자는 {@0}이에요. ${@1}$을 {@2} 단위로 반올림하세요.",
  "Zamenil si čitateľa a menovateľa: číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "분자와 분모를 바꿨어요. 수를 분모로 나누고 그 결과에 분자를 곱하세요.",
  "Zaokrúhlil si na iné miesto. Na {@0} znamená, že posledná ponechaná číslica stojí na mieste {@1}.": "다른 자리로 반올림했어요. {@0} 단위로 반올림한다는 것은 마지막으로 남는 숫자가 {@1}의 자리에 있다는 뜻이에요.",
  "Zapíš $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "$\\frac{{@0}}{{@1}}$을 소수로 나타내세요.",
  "Zapíš výsledok v poradí NSD; nsn.": "최대공약수; 최소공배수 순서로 답을 쓰세요.",
  "Zapíš výsledok v tvare stupne; minúty.": "답을 도; 분 꼴로 쓰세요.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ ako desatinné číslo.": "분수 $\\frac{{@0}}{{@1}}$을 소수로 나타내세요.",
  "Zarovnal si čísla sprava ako celé čísla. Pod sebou musia byť desatinné čiarky – číslo {@0} si dopíš ako {@1}0.": "수를 자연수처럼 오른쪽에 맞췄어요. 소수점끼리 맞춰야 해요. {@0}은 {@1}0으로 써 보세요.",
  "Zarovnáme desatinné čiarky pod seba a doplníme nuly: ${@0} {@1} {@2} = {@3}$.": "소수점을 위아래로 맞추고 0을 채워요: ${@0} {@1} {@2} = {@3}$.",
  "Zisti, či existuje číslo väčšie ako 1, ktorým sa dajú vydeliť obe čísla.": "두 수를 모두 나눌 수 있는 1보다 큰 수가 있는지 알아보세요.",
  "Zlomková čiara nie je desatinná čiarka. Zlomok znamená delenie: čitateľ vydeľ menovateľom.": "분수 막대는 소수점이 아니에요. 분수는 나눗셈을 뜻해요: 분자를 분모로 나누세요.",
  "Zlomky nie sú rovnaké. Preveď ich na spoločného menovateľa a porovnaj čitateľov.": "두 분수는 같지 않아요. 통분해서 분자를 비교하세요.",
  "Zlomky s rôznymi menovateľmi nemôžeš porovnať len podľa čitateľov alebo len podľa menovateľov. Preveď ich na spoločného menovateľa.": "분모가 다른 분수는 분자만으로도, 분모만으로도 비교할 수 없어요. 통분하세요.",
  "Zlomok rozšír tak, aby v menovateli bolo 10, 100 alebo 1 000, prípadne vydeľ čitateľa menovateľom.": "분모가 10, 100, 1 000이 되도록 분수를 바꾸거나, 분자를 분모로 나누세요.",
  "Zložené číslo má aj iný deliteľ ako 1 a samo seba. Skús nájsť taký deliteľ čísla {@0} – ak žiadny nie je, číslo nie je zložené.": "합성수는 1과 자기 자신 말고도 다른 약수가 있어요. {@0}의 그런 약수를 찾아보세요. 없으면 합성수가 아니에요.",
  "Zrkadlil si bod podľa stredu siete, nie podľa osi o.": "점을 축 $o$가 아니라 모눈의 가운데를 기준으로 대칭시켰어요.",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Aký je obsah záhrady v m²?": "정원은 가로 {@0} m, 세로 {@1} m인 직사각형 모양이에요. 정원의 넓이는 몇 m²일까요?",
  "Záhrada má tvar obdĺžnika s rozmermi {@0} m a {@1} m. Koľko metrov pletiva treba na jej oplotenie?": "정원은 가로 {@0} m, 세로 {@1} m인 직사각형 모양이에요. 울타리를 치려면 철망이 몇 미터 필요할까요?",
  "ani prvočíslo, ani zložené": "소수도 합성수도 아님",
  "desatinné miesta": "소수 자리",
  "desatinné miesto": "소수 자리",
  "desatinných miest": "소수 자리",
  "desatín": "0.1",
  "jednotky (celé čísla)": "1(정수)",
  "kladné": "양수",
  "kosodĺžnik (rovnobežník)": "평행사변형",
  "kosoštvorec": "마름모",
  "malé dieliky sú stotiny (0,01), veľké desatiny (0,1)": "작은 눈금은 0.01, 큰 눈금은 0.1",
  "miesta": "자리",
  "miesto": "자리",
  "napr. 2/3": "예: 2/3",
  "napr. 2; 2; 3": "예: 2; 2; 3",
  "nekonečne veľa": "무수히 많음",
  "nesúdeliteľné": "서로소",
  "nsn obsahuje všetky prvočinitele: $n({@0}, {@1}) = {@2} = {@3}$.": "최소공배수는 모든 소인수로 만들어요: $n({@0}, {@1}) = {@2} = {@3}$.",
  "ostrouhlý": "예각삼각형",
  "ostrý (30°)": "예각 (30°)",
  "podľa strán": "변에 따라",
  "podľa uhlov": "각에 따라",
  "pravouhlý": "직각삼각형",
  "pravý (90°)": "직각 (90°)",
  "priamy": "평각",
  "priamy (180°)": "평각 (180°)",
  "prvočíslo": "소수",
  "riadkov": "줄",
  "rovnoramenný": "이등변삼각형",
  "rovnoramenný trojuholník": "이등변삼각형",
  "rovnostranný": "정삼각형",
  "rovnostranný trojuholník": "정삼각형",
  "rôznostranný": "부등변삼각형",
  "rôznostranný trojuholník": "부등변삼각형",
  "stotiny": "0.01",
  "stotín": "0.01",
  "stred uhlomera = vrchol uhla": "각도기의 중심 = 각의 꼭짓점",
  "stupne; minúty": "도; 분",
  "stĺpce": "칸",
  "stĺpcov": "칸",
  "stĺpec": "칸",
  "súdeliteľné": "서로소가 아님",
  "tupouhlý": "둔각삼각형",
  "tupý (135°)": "둔각 (135°)",
  "zložené číslo": "합성수",
  "záporné": "음수",
  "Áno. Písmeno {@0} má vodorovnú os súmernosti.": "네. 글자 {@0}은 가로 대칭축이 있어요.",
  "Áno. Písmeno {@0} má zvislú aj vodorovnú os súmernosti.": "네. 글자 {@0}은 세로 대칭축과 가로 대칭축이 모두 있어요.",
  "Áno. Písmeno {@0} má zvislú os súmernosti.": "네. 글자 {@0}은 세로 대칭축이 있어요.",
  "Útvar a jeho obraz v osovej súmernosti na štvorčekovej sieti": "모눈 위의 도형과 선대칭으로 옮긴 도형",
  "Čas spoločného odchodu musí byť násobkom oboch intervalov. Hľadaj najmenší taký.": "함께 출발하는 시간은 두 간격의 배수여야 해요. 그중 가장 작은 것을 찾으세요.",
  "Číselná os od 2 do 3 s desatinami a stotinami": "0.1과 0.01 눈금이 있는 2부터 3까지의 수직선",
  "Číselná os s celými číslami od −6 do 6": "−6부터 6까지 정수가 있는 수직선",
  "Čísla nie sú rovnaké. Zisti, ktoré z nich leží na číselnej osi viac vpravo.": "두 수는 같지 않아요. 어느 수가 수직선에서 더 오른쪽에 있는지 알아보세요.",
  "Čísla od 1 do 60, prvočísla sú vyfarbené": "1부터 60까지의 수, 소수는 색칠되어 있음",
  "Číslica za týmto miestom je {@0}, teda 5 alebo viac – zaokrúhľuje sa nahor.": "이 자리 다음 숫자는 {@0}, 즉 5 이상이니 올림해요.",
  "Číslica za týmto miestom je {@0}, teda menej ako 5 – zaokrúhľuje sa nadol.": "이 자리 다음 숫자는 {@0}, 즉 5보다 작으니 버림해요.",
  "Číslo 1 má jediný deliteľ (samo seba), preto nie je ani prvočíslo, ani zložené číslo.": "1은 약수가 하나(자기 자신)뿐이어서 소수도 합성수도 아니에요.",
  "Číslo je deliteľné 6, len ak je deliteľné 2 aj 3 zároveň. Over obe podmienky.": "6으로 나누어떨어지려면 2와 3으로 동시에 나누어떨어져야 해요. 두 조건을 모두 확인하세요.",
  "Číslo vydeľ menovateľom a výsledok vynásob čitateľom.": "수를 분모로 나누고 그 결과에 분자를 곱하세요.",
  "Číslo z posledných dvoch číslic je {@0}, je deliteľné 4.": "끝의 두 자리 수는 {@0}이고, 4로 나누어떨어져요.",
  "Číslo z posledných dvoch číslic je {@0}, nie je deliteľné 4.": "끝의 두 자리 수는 {@0}이고, 4로 나누어떨어지지 않아요.",
  "Číslo {@0} má iba dva delitele: 1 a {@1}. Je to prvočíslo.": "{@0}은 약수가 1과 {@1} 두 개뿐이에요. 소수예요.",
  "časti": "부분",
  "častí": "부분",
  "časť": "부분",
  "Štvorec má 4 osi súmernosti: 2 spájajú stredy protiľahlých strán a 2 ležia na uhlopriečkach.": "정사각형은 대칭축이 4개예요: 2개는 마주 보는 변의 중점을 잇고, 2개는 대각선 위에 있어요.",
  "Štvorec má obsah ${@0}\\,\\text{cm}^2$. Aký je jeho obvod v cm?": "정사각형의 넓이가 ${@0}\\,\\text{cm}^2$예요. 둘레는 몇 cm일까요?",
  "Štvorec má obvod ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "정사각형의 둘레가 ${@0}\\,\\text{cm}$예요. 넓이는 몇 cm²일까요?",
  "Štvorec má stranu ${@0}\\,\\text{cm}$. Aký je jeho obsah v cm²?": "정사각형의 한 변이 ${@0}\\,\\text{cm}$예요. 넓이는 몇 cm²일까요?",
  "štvorčeková sieť s osou a bodom A": "대칭축과 점 A가 있는 모눈"
 }
});
