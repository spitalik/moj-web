/* 한국어: preklad js/rocniky/r8.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/r8/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "r8-cisla": {
   "title": "정수와 유리수",
   "summary": "음수, 반대수, 절댓값, 부호가 있는 분수의 계산.",
   "theory": [
    "<p><strong>자연수</strong> $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$는 물건의 개수를 셀 때 써요. 여기에 0과\n       반대수($-1, -2, -3, \\dots$)를 더하면 <strong>정수</strong> $\\mathbb{Z}$가 돼요. <strong>유리수</strong> $\\mathbb{Q}$는\n       분수 $\\frac{p}{q}$($p$는 정수, $q$는 자연수) 꼴로 나타낼 수 있는 모든 수예요. 예를 들어 $\\frac{3}{4}$,\n       $-2.5 = -\\frac{5}{2}$, $7 = \\frac{7}{1}$이에요.</p>",
    {
     "fig": "r8-obory",
     "caption": "모든 자연수는 정수이고, 모든 정수는 유리수예요: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$."
    },
    "<p>수 $a$의 <strong>반대수</strong>는 $-a$예요: $5$의 반대수는 $-5$, $-3$의 반대수는 $3$이에요. <strong>절댓값</strong> $|a|$는\n       수직선에서 수와 0 사이의 거리이므로 절대로 음수가 아니에요: $|-7| = 7$, $|7| = 7$.</p>",
    "<p><strong>부호가 있는 수의 계산:</strong> 어떤 수를 빼는 것은 그 반대수를 더하는 것이에요: $4 - (-6) = 4 + 6 = 10$.\n       곱셈과 나눗셈에서는 부호가 같으면 양수, 부호가 다르면 음수가 돼요: $(-3)\\cdot(-4) = 12$, $(-20) : 5 = -4$.</p>"
   ],
   "examples": [
    {
     "task": "$-8 - (-5) + 2\\cdot(-3)$을 계산하세요.",
     "steps": [
      "먼저 곱셈: $2\\cdot(-3) = -6$(부호가 다르므로 음수).",
      "음수를 빼는 것은 더하기로 바꿔요: $-8 - (-5) = -8 + 5 = -3$.",
      "마지막으로 $-3 + (-6) = -9$.",
      "<strong>답: $-9$</strong>"
     ]
    },
    {
     "task": "$-\\frac{3}{4}$과 $-0.7$의 크기를 비교하세요.",
     "steps": [
      "분수를 소수로 바꿔요: $-\\frac{3}{4} = -0.75$.",
      "$-0.75$는 음의 방향으로 0에서 더 멀리 있으므로 수직선에서 더 왼쪽에 있어요.",
      "<strong>$-\\frac{3}{4} &lt; -0.7$</strong>"
     ]
    }
   ]
  },
  "r8-mocniny": {
   "title": "거듭제곱과 제곱근",
   "summary": "제곱과 세제곱, 제곱근, 제곱근의 어림, 큰 수 나타내기.",
   "theory": [
    "<p><strong>거듭제곱</strong> $a^n$은 같은 수 $n$개를 곱한 것을 줄여 쓴 거예요: $a^n = a\\cdot a\\cdot\\ldots\\cdot a$.\n       $a$를 <em>밑</em>, $n$을 <em>지수</em>라고 해요. 예를 들어 $2^5 = 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2 = 32$예요.</p>",
    {
     "fig": "r8-mocniny",
     "caption": "제곱은 정사각형의 넓이예요: 한 변이 3인 정사각형은 작은 정사각형 $3^2 = 9$개로 이루어져요. 세제곱은 정육면체의 부피예요: 모서리가 2인 정육면체는 작은 정육면체 $2^3 = 8$개로 이루어져요."
    },
    "<p><strong>부호에 주의하세요:</strong> $(-3)^2 = (-3)\\cdot(-3) = 9$이지만 $-3^2 = -(3\\cdot 3) = -9$예요.\n       음수의 짝수 제곱은 양수, 홀수 제곱은 음수예요: $(-2)^3 = -8$.</p>",
    "<p>0 이상인 수 $a$의 <strong>제곱근</strong>(양의 제곱근)은 $b^2 = a$를 만족하는 0 이상의 수 $b$예요. $\\sqrt{a} = b$로 써요.\n       예를 들어 $\\sqrt{49} = 7$, $\\sqrt{0.09} = 0.3$이에요. 큰 수는 $a\\cdot 10^n$($1 \\le a &lt; 10$) 꼴로 나타내요:\n       $45\\,000 = 4.5\\cdot 10^4$.</p>"
   ],
   "examples": [
    {
     "task": "$(-2)^3 + 3^2 - \\sqrt{64}$를 계산하세요.",
     "steps": [
      "$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$.",
      "$3^2 = 9$이고, $8^2 = 64$이므로 $\\sqrt{64} = 8$.",
      "$-8 + 9 - 8 = -7$.",
      "<strong>답: $-7$</strong>"
     ]
    },
    {
     "task": "$\\sqrt{50}$은 어떤 두 연속하는 자연수 사이에 있나요?",
     "steps": [
      "50 주변의 제곱수를 찾아요: $7^2 = 49$, $8^2 = 64$.",
      "$49 &lt; 50 &lt; 64$이므로 $7 &lt; \\sqrt{50} &lt; 8$이에요.",
      "<strong>$\\sqrt{50}$은 7과 8 사이에 있어요</strong>(7에 매우 가까워요)."
     ]
    }
   ]
  },
  "r8-vyrazy": {
   "title": "문자를 사용한 식",
   "summary": "문자(변수)의 뜻, 식에 수 대입하기, 말로 된 설명을 식으로 나타내기.",
   "theory": [
    "<p><strong>문자</strong>(변수)는 어떤 수든 대신할 수 있는 글자예요(예: $x$, $a$, $n$). <strong>문자를 사용한 식</strong>은\n       수와 문자를 연산 기호로 연결한 거예요. 예를 들어 $3x + 5$나 $2(a - 1)$이에요. 수와 문자 사이의 곱셈 기호는\n       생략해요: $3x$는 $3\\cdot x$를 뜻해요.</p>",
    "<p><strong>식의 값</strong>은 문자에 수를 대입해서 구해요. 음수는 괄호를 씌워 대입해요:\n       $x = -2$일 때 $x^2 + 3x = (-2)^2 + 3\\cdot(-2) = 4 - 6 = -2$예요.</p>",
    {
     "fig": "r8-obdlznik",
     "caption": "두 변이 $a$와 $a + 3$인 직사각형의 둘레는 $o = 2a + 2(a + 3)$, 넓이는 $S = a(a + 3)$이에요. $a = 4$이면 $o = 22$, $S = 28$이에요."
    },
    "<p><strong>말을 식으로:</strong> “$x$의 2배”는 $2x$, “$x$보다 5 큰 수”는 $x + 5$, “$x$의 3분의 1”은 $\\frac{x}{3}$,\n       “$a$와 $b$의 합의 제곱”은 $(a + b)^2$이에요.</p>"
   ],
   "examples": [
    {
     "task": "$x = -3$일 때 식 $2x^2 - 5x + 1$의 값을 구하세요.",
     "steps": [
      "괄호를 씌워 $-3$을 대입해요: $2\\cdot(-3)^2 - 5\\cdot(-3) + 1$.",
      "$(-3)^2 = 9$이므로 $2\\cdot 9 = 18$; 또 $-5\\cdot(-3) = 15$.",
      "$18 + 15 + 1 = 34$.",
      "<strong>식의 값은 34예요.</strong>"
     ]
    },
    {
     "task": "식으로 나타내세요: “$n$의 3배보다 4 작은 수”.",
     "steps": [
      "$n$의 3배는 $3n$이에요.",
      "“4 작은”은 4를 뺀다는 뜻이에요.",
      "<strong>$3n - 4$</strong>"
     ]
    }
   ]
  },
  "r8-upravy": {
   "title": "다항식의 계산",
   "summary": "동류항, 괄호 풀기(전개), 두 항의 합과 차의 제곱 공식.",
   "theory": [
    "<p><strong>동류항</strong>은 문자와 차수가 같은 항이에요. 예를 들어 $3x$와 $-5x$, $2x^2$과 $x^2$이에요.\n       동류항은 계수끼리 더해서 정리해요: $3x - 5x + 2 = -2x + 2$. 동류항이 아닌 항(예: $x^2$과 $x$)은 더할 수 없어요.</p>",
    "<p><strong>괄호 풀기:</strong> 괄호 앞의 수를 괄호 안의 각 항에 곱해요: $3(2x - 4) = 6x - 12$.\n       괄호 앞에 음의 부호가 있으면 모든 항의 부호가 바뀌어요: $-(x - 5) = -x + 5$. 두 일차식의 곱은 “각 항끼리 모두” 곱해요:\n       $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.</p>",
    {
     "fig": "r8-dlazdice",
     "caption": "한 변이 $a + b$인 정사각형은 정사각형 $a^2$, 정사각형 $b^2$, 직사각형 $ab$ 두 개로 이루어져요. 그래서 $(a + b)^2 = a^2 + 2ab + b^2$이에요."
    },
    "<p>외워 두면 좋은 <strong>곱셈 공식</strong>: $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$,\n       $(a + b)(a - b) = a^2 - b^2$.</p>"
   ],
   "examples": [
    {
     "task": "식 $4(x - 3) - 2(x - 5)$를 간단히 하세요.",
     "steps": [
      "괄호를 풀어요: $4x - 12 - 2x + 10$(두 번째 괄호 앞의 음의 부호 때문에 $-5$가 $+10$이 돼요).",
      "동류항끼리 정리해요: $4x - 2x = 2x$, $-12 + 10 = -2$.",
      "<strong>$2x - 2$</strong>"
     ]
    },
    {
     "task": "$(x - 4)^2$을 전개하세요.",
     "steps": [
      "공식 $(a - b)^2 = a^2 - 2ab + b^2$에서 $a = x$, $b = 4$예요.",
      "$x^2 - 2\\cdot x\\cdot 4 + 4^2$.",
      "<strong>$x^2 - 8x + 16$</strong>"
     ]
    }
   ]
  },
  "r8-rovnice": {
   "title": "일차방정식",
   "summary": "등식의 성질, 괄호가 있는 방정식, 검산.",
   "theory": [
    "<p><strong>방정식</strong>은 미지수가 들어 있는 두 식이 같다는 것을 나타낸 등식이에요. 예를 들어 $2x + 3 = 9$예요. <strong>방정식을 푼다</strong>는 것은\n       대입했을 때 등식이 성립하는 수(해, 근)를 찾는 거예요. 이 방정식의 해는 $2\\cdot 3 + 3 = 9$이므로 $x = 3$이에요.</p>",
    {
     "fig": "r8-vahy",
     "caption": "방정식은 균형을 이룬 저울과 같아요: 왼쪽에는 무게가 $x$인 주머니 두 개와 추 세 개가, 오른쪽에는 추 아홉 개가 있어요. 양쪽 접시에서 추를 3개씩 덜어 내도 저울은 균형을 이뤄요: $2x = 6$, 따라서 $x = 3$."
    },
    "<p><strong>등식의 성질</strong>을 이용한 변형은 방정식의 해를 바꾸지 않아요: 양변에 같은 수나 식을 더하거나 뺄 수 있고,\n       양변에 0이 아닌 같은 수를 곱하거나 양변을 0이 아닌 같은 수로 나눌 수 있어요. 목표는 미지수만 한쪽 변에 남기는 거예요.</p>",
    "<p><strong>푸는 순서:</strong> 1. 괄호를 풀어요. 2. 미지수가 있는 항은 한쪽으로, 수는 다른 쪽으로 이항해요.\n       3. 양변을 미지수의 계수로 나눠요. 4. 처음 방정식에 대입해서 <strong>검산</strong>해요.</p>"
   ],
   "examples": [
    {
     "task": "방정식 $5x - 7 = 2x + 8$을 푸세요.",
     "steps": [
      "양변에서 $2x$를 빼요: $3x - 7 = 8$.",
      "양변에 7을 더해요: $3x = 15$.",
      "양변을 3으로 나눠요: $x = 5$.",
      "검산: 좌변 $5\\cdot 5 - 7 = 18$, 우변 $2\\cdot 5 + 8 = 18$ ✓"
     ]
    },
    {
     "task": "방정식 $3(x + 2) = x - 4$를 푸세요.",
     "steps": [
      "괄호를 풀어요: $3x + 6 = x - 4$.",
      "$x$를 빼고 그다음 6을 빼요: $2x = -10$.",
      "2로 나눠요: $x = -5$.",
      "검산: $3\\cdot(-5 + 2) = -9$, $-5 - 4 = -9$ ✓"
     ]
    }
   ]
  },
  "r8-slovne": {
   "title": "방정식을 활용한 문장제",
   "summary": "문장에서 방정식 세우기: 수, 나이, 둘레, 돈 나누기.",
   "theory": [
    "<p>문장제는 다음 다섯 단계로 방정식을 세워 풀어요:</p>\n       <ol><li>모르는 양을 문자(예: $x$)로 놓고 그 뜻을 적어요.</li>\n       <li>다른 양들을 $x$를 사용해 나타내요.</li><li>문제에서 같은 것이 무엇인지 보고 방정식을 세워요.</li>\n       <li>방정식을 풀어요.</li><li><em>문제의 내용에 맞는지</em> 검산하고 답을 써요.</li></ol>",
    "<p>유용한 표현: “5 더 많다”는 $x + 5$, “세 배”는 $3x$, “연속하는 세 수”는 $x$, $x + 1$, $x + 2$,\n       “직사각형의 둘레”는 $2a + 2b$예요.</p>",
    "<p>검산은 내가 세운 방정식에 대입하는 것이 아니라 문제의 조건에 맞추어 해요. 방정식을 잘못 세웠다면 방정식으로 검산해서는 잘못을 찾을 수 없기 때문이에요.</p>"
   ],
   "examples": [
    {
     "task": "연속하는 세 자연수의 합이 48이에요. 세 수를 구하세요.",
     "steps": [
      "가장 작은 수를 $x$라 하면 나머지는 $x + 1$, $x + 2$예요.",
      "방정식: $x + (x + 1) + (x + 2) = 48$, 즉 $3x + 3 = 48$.",
      "$3x = 45$, $x = 15$.",
      "검산: $15 + 16 + 17 = 48$ ✓",
      "<strong>답: 세 수는 15, 16, 17이에요.</strong>"
     ]
    },
    {
     "task": "엄마는 딸보다 26살 많아요. 두 사람의 나이의 합은 50살이에요. 딸은 몇 살인가요?",
     "steps": [
      "딸의 나이를 $x$라 하면 엄마의 나이는 $x + 26$이에요.",
      "방정식: $x + (x + 26) = 50$, 즉 $2x + 26 = 50$.",
      "$2x = 24$, $x = 12$.",
      "검산: 엄마는 $12 + 26 = 38$살이고 $12 + 38 = 50$ ✓",
      "<strong>답: 딸은 12살이에요.</strong>"
     ]
    }
   ]
  },
  "r8-kruh": {
   "title": "원과 원의 넓이",
   "summary": "반지름과 지름, 원주, 원의 넓이, 부채꼴과 고리 모양.",
   "theory": [
    "<p>중심이 $S$이고 반지름이 $r$인 <strong>원</strong> $k$는 평면에서 점 $S$로부터 거리가 $r$인 모든 점의 집합이에요.\n       이것은 “선”일 뿐이에요. 원과 그 안쪽 전체를 합한 것을 <strong>원판</strong>이라고 해요. <strong>지름</strong>은 중심을 지나며\n       원 위의 두 점을 잇는 선분이고, 길이는 $d = 2r$이에요.</p>",
    {
     "fig": "r8-kruh",
     "caption": "중심 $S$, 반지름 $r$, 지름 $d = 2r$, 중심각이 $\\alpha$인 부채꼴."
    },
    "<p><strong>원주</strong>(원의 둘레)는 $o = 2\\pi r = \\pi d$이고, <strong>원의 넓이</strong>는 $S = \\pi r^2$이에요.\n       $\\pi$는 어떤 원에서든 원주와 지름의 비이고, $\\pi \\approx 3.14$예요.</p>",
    "<p>중심각이 $\\alpha$인 <strong>부채꼴</strong>은 두 반지름 사이에 있는 원의 일부이고, 넓이는 $S = \\pi r^2\\cdot\\frac{\\alpha}{360^\\circ}$예요.\n       <strong>고리 모양</strong>(원환)은 반지름이 $R &gt; r$인 두 동심원 사이의 부분이에요: $S = \\pi (R^2 - r^2)$.</p>"
   ],
   "examples": [
    {
     "task": "자전거 바퀴의 지름이 $70\\,\\text{cm}$예요. 바퀴가 한 바퀴 돌 때 가는 거리는 얼마인가요? $\\pi \\approx 3.14$를 사용하세요.",
     "steps": [
      "바퀴가 한 바퀴 돌면 원주만큼 가요: $o = \\pi d$.",
      "$o \\approx 3.14\\cdot 70 = 219.8\\,\\text{cm}$.",
      "<strong>바퀴는 약 $219.8\\,\\text{cm}$, 즉 대략 $2.2\\,\\text{m}$를 가요.</strong>"
     ]
    },
    {
     "task": "반지름이 $10\\,\\text{cm}$인 원의 4분의 1의 넓이를 구하세요($\\pi \\approx 3.14$).",
     "steps": [
      "원의 4분의 1은 중심각이 $90^\\circ$인 부채꼴, 즉 원의 $\\frac{90}{360} = \\frac{1}{4}$이에요.",
      "원 전체의 넓이: $S = \\pi r^2 \\approx 3.14\\cdot 100 = 314\\,\\text{cm}^2$.",
      "<strong>4분의 1: $314 : 4 = 78.5\\,\\text{cm}^2$.</strong>"
     ]
    }
   ]
  },
  "r8-hranoly": {
   "title": "각기둥의 겉넓이와 부피",
   "summary": "각기둥의 밑면과 옆면, 직육면체의 전개도, 직육면체·정육면체·삼각기둥의 겉넓이와 부피.",
   "theory": [
    "<p><strong>각기둥</strong>은 서로 합동이고 평행한 두 <strong>밑면</strong>(다각형)과 직사각형인 옆면들로 이루어진\n       <strong>옆넓이 부분</strong>을 가진 입체도형이에요. 밑면의 모양에 따라 삼각기둥, 사각기둥, 육각기둥… 이라고 해요.\n       직육면체와 정육면체는 사각기둥이에요.</p>",
    {
     "fig": "r8-siet",
     "caption": "가로, 세로, 높이가 $a$, $b$, $c$인 직육면체의 전개도: 밑면 $a\\times b$ 두 개(파란색)와 옆면 네 개(초록색)."
    },
    "<p>각기둥의 <strong>부피</strong>: $V = S_p\\cdot v$(밑넓이 곱하기 높이). 직육면체는 $V = a\\cdot b\\cdot c$, 정육면체는 $V = a^3$이에요.\n       부피는 세제곱 단위로 재요; $1\\,\\text{dm}^3 = 1\\,\\text{l}$, $1\\,\\text{cm}^3 = 1\\,\\text{ml}$.</p>",
    "<p><strong>겉넓이</strong>는 모든 면의 넓이의 합이에요: $S = 2\\cdot S_p + S_{pl}$이고, 옆넓이는 $S_{pl} = o_p\\cdot v$\n       (밑면의 둘레 곱하기 높이)예요. 직육면체는 $S = 2(ab + bc + ac)$, 정육면체는 $S = 6a^2$이에요.</p>"
   ],
   "examples": [
    {
     "task": "직육면체의 크기가 $a = 5\\,\\text{cm}$, $b = 3\\,\\text{cm}$, $c = 4\\,\\text{cm}$예요. 겉넓이와 부피를 구하세요.",
     "steps": [
      "$S = 2(ab + bc + ac) = 2(15 + 12 + 20) = 2\\cdot 47 = 94\\,\\text{cm}^2$.",
      "$V = a\\cdot b\\cdot c = 5\\cdot 3\\cdot 4 = 60\\,\\text{cm}^3$."
     ]
    },
    {
     "task": "삼각기둥의 밑면은 직각을 낀 두 변이 $3\\,\\text{cm}$와 $4\\,\\text{cm}$인 직각삼각형(빗변 $5\\,\\text{cm}$)이고, 높이는 $10\\,\\text{cm}$예요. 겉넓이와 부피를 구하세요.",
     "steps": [
      "밑넓이: $S_p = \\frac{3\\cdot 4}{2} = 6\\,\\text{cm}^2$.",
      "부피: $V = S_p\\cdot v = 6\\cdot 10 = 60\\,\\text{cm}^3$.",
      "옆넓이: $S_{pl} = (3 + 4 + 5)\\cdot 10 = 120\\,\\text{cm}^2$.",
      "겉넓이: $S = 2\\cdot 6 + 120 = 132\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "r8-statistika": {
   "title": "그래프, 표, 통계",
   "summary": "막대그래프와 원그래프, 평균, 최빈값, 중앙값.",
   "theory": [
    "<p>자료는 <strong>표</strong>에 모으고 <strong>그래프</strong>로 나타내요. 막대그래프는 개수를 비교하기 좋고,\n       원그래프는 각 집단이 전체에서 얼마만큼을 차지하는지 보여 줘요.</p>",
    {
     "fig": "r8-stlpce",
     "caption": "막대그래프: 학생이 23명인 반의 시험 성적(1~5등급, 1등급이 가장 좋음). 2등급을 받은 학생이 가장 많아요."
    },
    {
     "fig": "r8-kolac",
     "caption": "원그래프: 학생들이 학교에 오는 방법. 절반은 걸어서, 30 %는 버스로, 20 %는 자전거로 와요."
    },
    "<p><strong>평균</strong>(산술평균)은 모든 값의 합을 값의 개수로 나눈 거예요. <strong>최빈값</strong>은 가장 자주 나타나는\n       값이에요. <strong>중앙값</strong>은 자료를 크기 순서로 늘어놓았을 때 한가운데에 있는 값이에요. 자료의 개수가 짝수이면\n       가운데 두 값의 평균이에요.</p>"
   ],
   "examples": [
    {
     "task": "닷새 동안의 기온이 $12$, $15$, $9$, $15$, $14\\,{}^\\circ\\text{C}$였어요. 평균, 최빈값, 중앙값을 구하세요.",
     "steps": [
      "평균: $\\frac{12 + 15 + 9 + 15 + 14}{5} = \\frac{65}{5} = 13\\,{}^\\circ\\text{C}$.",
      "최빈값: 가장 자주 나타나는 값은 $15\\,{}^\\circ\\text{C}$예요.",
      "중앙값: $9, 12, 14, 15, 15$로 늘어놓으면 한가운데 값은 $14\\,{}^\\circ\\text{C}$예요."
     ]
    },
    {
     "task": "성적 그래프를 보고 반의 평균 등급을 구하세요.",
     "steps": [
      "모든 등급의 합: $1\\cdot 5 + 2\\cdot 8 + 3\\cdot 6 + 4\\cdot 3 + 5\\cdot 1 = 5 + 16 + 18 + 12 + 5 = 56$.",
      "학생 수: $5 + 8 + 6 + 3 + 1 = 23$.",
      "<strong>평균: $56 : 23 \\approx 2.43$.</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$, teda $p = {@6}$ a $q = {@7}$.": "$(x{@0})(x{@1}) = x^2{@2}{@3}{@4} = {@5}$이므로 $p = {@6}$, $q = {@7}$예요.",
  "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. Plášť: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, povrch $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.": "$S_p = \\frac{{@0}\\cdot {@1}}{2} = {@2}\\,\\text{cm}^2$. $V = S_p\\cdot v = {@3}\\cdot {@4} = {@5}\\,\\text{cm}^3$. 옆넓이: $({@6} + {@7} + {@8})\\cdot {@9} = {@10}\\,\\text{cm}^2$, 겉넓이 $S = 2\\cdot {@11} + {@12} = {@13}\\,\\text{cm}^2$.",
  "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. Obe strany vynásobíme {@4}: $x = {@5}$.": "$\\frac{x}{{@0}} = {@1}{@2} = {@3}$. 양변에 {@4}을 곱해요: $x = {@5}$.",
  "$\\sqrt{{@0}} = {@1}$ a $\\sqrt{{@2}} = {@3}$, teda ${@4} - {@5} = {@6}$.": "$\\sqrt{{@0}} = {@1}$, $\\sqrt{{@2}} = {@3}$이므로 ${@4} - {@5} = {@6}$이에요.",
  "$\\sqrt{{@0}} = {@1}$, lebo ${@2}^2 = {@3}$.": "${@2}^2 = {@3}$이므로 $\\sqrt{{@0}} = {@1}$이에요.",
  "$a^3$ znamená $a\\cdot a\\cdot a$, nie $3\\cdot a$.": "$a^3$은 $3\\cdot a$가 아니라 $a\\cdot a\\cdot a$를 뜻해요.",
  "${@0} : {@1} = {@2}$ a znamienka sú {@3}: ${@4} : {@5} = {@6}$.": "${@0} : {@1} = {@2}$이고 부호가 {@3}: ${@4} : {@5} = {@6}$.",
  "${@0}\\cdot {@1} = {@2}$ a znamienka sú {@3}: ${@4}\\cdot {@5} = {@6}$.": "${@0}\\cdot {@1} = {@2}$이고 부호가 {@3}: ${@4}\\cdot {@5} = {@6}$.",
  "${@0}^2 = {@1}$ a ${@2}^2 = {@3}$. Keďže ${@4} &lt; {@5} &lt; {@6}$, platí ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$.": "${@0}^2 = {@1}$, ${@2}^2 = {@3}$. ${@4} &lt; {@5} &lt; {@6}$이므로 ${@7} &lt; \\sqrt{{@8}} &lt; {@9}$이에요.",
  "$|{@0}| = {@1}$ a $|{@2}| = {@3}$, teda ${@4} - {@5} = {@6}$.": "$|{@0}| = {@1}$, $|{@2}| = {@3}$이므로 ${@4} - {@5} = {@6}$이에요.",
  "(a + b)^2 = a^2 + 2ab + b^2": "(a + b)^2 = a^2 + 2ab + b^2",
  "(a - b)^2 = a^2 - 2ab + b^2": "(a - b)^2 = a^2 - 2ab + b^2",
  ", $x + 2$ a $x + 3$": ", $x + 2$, $x + 3$",
  "Absolútna hodnota je vzdialenosť od nuly, nikdy nie je záporná.": "절댓값은 0으로부터의 거리이므로 절대 음수가 아니에요.",
  "Ak rovnicu násobíš číslom {@0}, vynásob každý člen na oboch stranách, aj číslo ${@1}$. Jednoduchšie je najprv osamostatniť zlomok.": "방정식에 {@0}을 곱할 때는 양변의 모든 항에, 수 ${@1}$에도 곱하세요. 먼저 분수만 남기는 것이 더 쉬워요.",
  "Akvárium tvaru kvádra má vnútorné rozmery {@0} cm, {@1} cm a {@2} cm. Koľko litrov vody sa doň zmestí?": "직육면체 모양 어항의 안쪽 치수는 {@0} cm, {@1} cm, {@2} cm예요. 물은 몇 리터 들어갈까요?",
  "Aká dlhá je dlhšia strana (v cm)?": "긴 변의 길이는 몇 cm일까요?",
  "Aká dlhá je druhá strana $a + {@0}$ pre $a = {@1}$ (v cm)?": "$a = {@1}$일 때 다른 변 $a + {@0}$의 길이는 몇 cm일까요?",
  "Aká dlhá je kratšia strana (v cm)?": "짧은 변의 길이는 몇 cm일까요?",
  "Aké je najväčšie z čísel?": "가장 큰 수는 무엇일까요?",
  "Aké je {@0}. číslo v poradí?": "{@0}번째 수는 무엇일까요?",
  "Aké je číslo $a$? Pred desatinnou čiarkou má mať jedinú nenulovú číslicu.": "수 $a$는 무엇일까요? 소수점 앞에 0이 아닌 숫자가 하나만 있어야 해요.",
  "Akú časť plného uhla tvorí uhol ${@0}^\\circ$? Zadaj ju ako zlomok.": "${@0}^\\circ$인 각은 한 바퀴(360°)의 얼마일까요? 분수로 입력하세요.",
  "Aký je najmenší spoločný menovateľ zlomkov ${@0}$ a ${@1}$?": "분수 ${@0}$과 ${@1}$의 최소공통분모는 무엇일까요?",
  "Aký je objem hranola $V = S_p\\cdot v$ (v cm³)?": "각기둥의 부피 $V = S_p\\cdot v$는 몇 cm³일까요?",
  "Aký je objem kvádra (v cm³)?": "직육면체의 부피는 몇 cm³일까요?",
  "Aký je obsah celého kruhu (v cm²)?": "원 전체의 넓이는 몇 cm²일까요?",
  "Aký je obsah plášťa – obvod podstavy krát výška (v cm²)?": "옆넓이, 즉 밑면의 둘레 곱하기 높이는 몇 cm²일까요?",
  "Aký je obsah podstavy $S_p$ (v cm²)?": "밑넓이 $S_p$는 몇 cm²일까요?",
  "Aký je polomer kruhu (v cm)?": "원의 반지름은 몇 cm일까요?",
  "Aký je povrch hranola – dve podstavy a plášť (v cm²)?": "각기둥의 겉넓이, 즉 두 밑면과 옆면의 넓이는 몇 cm²일까요?",
  "Aký je súčet všetkých čísel?": "모든 수의 합은 얼마일까요?",
  "Aký obsah má jedna stena kocky (v cm²)?": "정육면체의 한 면의 넓이는 몇 cm²일까요?",
  "Babka": "할머니",
  "Bez zátvorky sa umocňuje len číslo {@0}, mínus ostáva pred výsledkom: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.": "괄호가 없으면 수 {@0}만 거듭제곱하고, 마이너스는 결과 앞에 그대로 남아요: $-{@1}^2 = -({@2}\\cdot {@3}) = -{@4}$.",
  "Chýbajú ti členy s $x$: každý člen prvej zátvorky treba vynásobiť každým členom druhej, nielen prvý s prvým a posledný s posledným.": "$x$가 있는 항이 빠졌어요. 첫 번째 괄호의 각 항에 두 번째 괄호의 각 항을 모두 곱해야 해요. 첫째끼리, 마지막끼리만 곱하면 안 돼요.",
  "Dcéra": "딸",
  "Dedko": "할아버지",
  "Delil si len číslom $\\pi$, takto dostaneš priemer. Polomer je jeho polovica.": "$\\pi$로만 나눴어요. 그러면 지름이 나와요. 반지름은 그 절반이에요.",
  "Desatinnú čiarku posunieme o {@0} {@1} doľava, aby pred ňou ostala jediná nenulová číslica: ${@2} = {@3}\\cdot 10^{{@4}}$.": "소수점 앞에 0이 아닌 숫자가 하나만 남도록 소수점을 왼쪽으로 {@0}{@1} 옮겨요: ${@2} = {@3}\\cdot 10^{{@4}}$.",
  "Diagram ukazuje, koľko kníh si čitatelia požičali v knižnici v jednotlivé dni.": "그래프는 도서관에서 요일마다 빌려 간 책의 수를 보여 줘요.",
  "Dlhšia strana má ${@0} + {@1} = {@2}\\,\\text{cm}$.": "긴 변은 ${@0} + {@1} = {@2}\\,\\text{cm}$예요.",
  "Do vzorca $S = \\pi r^2$ si dosadil priemer. Najprv vypočítaj polomer, polovicu priemeru.": "공식 $S = \\pi r^2$에 지름을 넣었어요. 먼저 지름의 절반인 반지름을 구하세요.",
  "Dosaď $x = {@0}$ do člena ${@1}$. Koľko je ${@2}$?": "항 ${@1}$에 $x = {@0}$을 대입하세요. ${@2}$는 얼마일까요?",
  "Dosaď za obe premenné naraz, záporné čísla do zátvoriek.": "두 문자에 한꺼번에 대입하고, 음수는 괄호 안에 넣으세요.",
  "Druhá mocnina $x^2$ znamená $x\\cdot x$, nie $2\\cdot x$.": "제곱 $x^2$은 $2\\cdot x$가 아니라 $x\\cdot x$를 뜻해요.",
  "Druhá mocnina ako štvorec, tretia mocnina ako kocka": "정사각형으로 나타낸 제곱, 정육면체로 나타낸 세제곱",
  "Druhá mocnina je súčin dvoch rovnakých činiteľov. Mínus krát mínus je plus.": "제곱은 같은 두 수의 곱이에요. 마이너스 곱하기 마이너스는 플러스예요.",
  "Druhá mocnina nie je dvojnásobok: umocniť na druhú znamená vynásobiť číslo samým sebou.": "제곱은 두 배가 아니에요. 제곱한다는 것은 그 수를 자기 자신과 곱하는 거예요.",
  "Druhá mocnina nie je dvojnásobok: umocniť znamená vynásobiť samým sebou.": "제곱은 두 배가 아니에요. 제곱한다는 것은 자기 자신과 곱하는 거예요.",
  "Druhá strana je celý výraz $a + {@0}$, daj ju do zátvorky: násobí sa $a\\cdot(a + {@1})$.": "다른 변은 식 $a + {@0}$ 전체이니 괄호로 묶으세요: $a\\cdot(a + {@1})$을 곱해요.",
  "Dvojnásobok": "2배",
  "Exponent nie je počet číslic čísla, ale počet miest, o ktoré posunieš desatinnú čiarku.": "지수는 수의 자릿수가 아니라 소수점을 옮기는 자리의 수예요.",
  "Filip": "지후",
  "Hranol má dve podstavy (hornú a dolnú), obe treba započítať do povrchu.": "각기둥은 밑면이 두 개(위와 아래) 있고, 둘 다 겉넓이에 넣어야 해요.",
  "Hľadaj najvyšší stĺpec.": "가장 높은 막대를 찾으세요.",
  "Hľadaj nezáporné číslo, ktorého druhá mocnina je číslo pod odmocninou.": "제곱하면 근호 안의 수가 되는, 음이 아닌 수를 찾으세요.",
  "Hľadaj číslo, ktoré keď vynásobíš trikrát samým sebou, dostaneš objem.": "자기 자신을 세 번 곱하면 부피가 되는 수를 찾으세요.",
  "Hľadáme číslo, ktorého tretia mocnina je {@0}: ${@1}^3 = {@2}$, teda $a = {@3}\\,\\text{cm}$.": "세제곱이 {@0}인 수를 찾아요: ${@1}^3 = {@2}$이므로 $a = {@3}\\,\\text{cm}$예요.",
  "Jedna stena má obsah ${@0} : 6 = {@1}\\,\\text{cm}^2$, teda $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$.": "한 면의 넓이는 ${@0} : 6 = {@1}\\,\\text{cm}^2$이므로 $a = \\sqrt{{@2}} = {@3}\\,\\text{cm}$예요.",
  "Jedna strana obdĺžnika je o {@0} cm dlhšia ako druhá. Obvod obdĺžnika je {@1} cm. Aká dlhá je {@2} strana (v cm)?": "직사각형의 한 변이 다른 변보다 {@0} cm 길어요. 직사각형의 둘레는 {@1} cm예요. {@2} 변의 길이는 몇 cm일까요?",
  "K obom stranám pripočítame {@0}": "양변에 {@0}을 더해요",
  "Každá stena je na kvádri dvakrát. Aký je povrch kvádra (v cm²)?": "직육면체에는 각 면이 두 개씩 있어요. 직육면체의 겉넓이는 몇 cm²일까요?",
  "Každý člen prvej zátvorky vynásob každým členom druhej. Potom spoj členy s $x$.": "첫 번째 괄호의 각 항에 두 번째 괄호의 각 항을 곱하세요. 그다음 $x$가 있는 항끼리 정리하세요.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko.": "수를 방정식의 반대쪽으로 옮길 때는 부호를 바꾸세요.",
  "Keď presúvaš číslo na druhú stranu rovnice, zmeň mu znamienko. Na oboch stranách urob tú istú operáciu.": "수를 방정식의 반대쪽으로 옮길 때는 부호를 바꾸세요. 양변에 같은 계산을 하세요.",
  "Kocka má 6 stien, každá je štvorec so stranou $a$.": "정육면체는 면이 6개이고, 각 면은 한 변이 $a$인 정사각형이에요.",
  "Kocka má 6 stien, nie 4. Nezabudni na hornú a dolnú stenu.": "정육면체의 면은 4개가 아니라 6개예요. 윗면과 아랫면을 잊지 마세요.",
  "Kocka má 6 zhodných štvorcových stien: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.": "정육면체에는 합동인 정사각형 면이 6개 있어요: $S = 6a^2 = 6\\cdot {@0} = {@1}\\,\\text{cm}^2$.",
  "Kocka má objem ${@0}\\,\\text{cm}^3$. Aká dlhá je jej hrana (v cm)?": "정육면체의 부피가 ${@0}\\,\\text{cm}^3$예요. 한 모서리의 길이는 몇 cm일까요?",
  "Kocka má povrch ${@0}\\,\\text{cm}^2$. Aká dlhá je jej hrana (v cm)?": "정육면체의 겉넓이가 ${@0}\\,\\text{cm}^2$예요. 한 모서리의 길이는 몇 cm일까요?",
  "Koeficient ${@0}$ pri $x$ odstrániš delením, nie odčítaním: ${@1}x$ znamená ${@2}\\cdot x$.": "$x$의 계수 ${@0}$은 빼기가 아니라 나눗셈으로 없애요: ${@1}x$는 ${@2}\\cdot x$를 뜻해요.",
  "Koľko je $R^2 - r^2$?": "$R^2 - r^2$은 얼마일까요?",
  "Koľko je $\\sqrt{{@0}}$?": "$\\sqrt{{@0}}$은 얼마일까요?",
  "Koľko je $r^2$?": "$r^2$은 얼마일까요?",
  "Koľko je ${@0}$?": "${@0}$은 얼마일까요?",
  "Koľko je ${@0}^2$?": "${@0}^2$은 얼마일까요?",
  "Koľko je ${@0}{@1}$?": "${@0}{@1}$은 얼마일까요?",
  "Koľko je $|{@0}|$?": "$|{@0}|$은 얼마일까요?",
  "Koľko je v zátvorke: ${@0}{@1}$?": "괄호 안 ${@0}{@1}$은 얼마일까요?",
  "Koľko je čísel?": "수는 몇 개일까요?",
  "Koľko kníh si požičali za celý týždeň?": "일주일 동안 빌려 간 책은 모두 몇 권일까요?",
  "Koľko rokov má {@0}?": "{@0}의 나이는 몇 살일까요?",
  "Koľko žiakov hlasovalo spolu?": "투표한 학생은 모두 몇 명일까요?",
  "Koľko žiakov odpovedalo spolu?": "답한 학생은 모두 몇 명일까요?",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Rovnica: $2x + 2(x + {@1}) = {@2}$, teda $4x + {@3} = {@4}$, $4x = {@5}$ a $x = {@6}$. {@7}": "짧은 변을 $x$, 긴 변을 $x + {@0}$이라고 해요. 방정식: $2x + 2(x + {@1}) = {@2}$, 즉 $4x + {@3} = {@4}$, $4x = {@5}$, $x = {@6}$. {@7}",
  "Kratšia strana je $x$, dlhšia $x + {@0}$. Z rovnice $2x + 2(x + {@1}) = {@2}$ vypočítaj, koľko je $4x$.": "짧은 변을 $x$, 긴 변을 $x + {@0}$이라고 해요. 방정식 $2x + 2(x + {@1}) = {@2}$에서 $4x$가 얼마인지 구하세요.",
  "Kratšia strana má ${@0}\\,\\text{cm}$.": "짧은 변은 ${@0}\\,\\text{cm}$예요.",
  "Kruh má {@0}. Vypočítaj jeho obsah v cm². {@1}": "{@0}인 원이 있어요. 넓이를 cm²로 구하세요. {@1}",
  "Kruh má {@0}. Vypočítaj jeho obvod v cm. {@1}": "{@0}인 원이 있어요. 둘레를 cm로 구하세요. {@1}",
  "Kruh so stredom, polomerom, priemerom a výsekom": "중심, 반지름, 지름, 부채꼴이 있는 원",
  "Kruhový diagram dopravy do školy": "학교에 가는 방법의 원그래프",
  "Ktoré ovocie dostalo najviac hlasov?": "가장 많은 표를 받은 과일은 무엇일까요?",
  "Ktorý výraz sa rovná ${@0}$?": "${@0}$과 같은 식은 무엇일까요?",
  "Ktorý výraz zodpovedá opisu: <em>{@0}</em>?": "다음 설명에 맞는 식은 무엇일까요: <em>{@0}</em>?",
  "Ktorý šport je medzi žiakmi najobľúbenejší?": "학생들이 가장 좋아하는 운동은 무엇일까요?",
  "Kváder má každú stenu dvakrát (hornú a dolnú, prednú a zadnú, ľavú a pravú). Súčet $ab + bc + ac$ ešte zdvojnásob.": "직육면체에는 각 면이 두 개씩 있어요(위와 아래, 앞과 뒤, 왼쪽과 오른쪽). 합 $ab + bc + ac$에 2를 곱하세요.",
  "Kváder má rozmery $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$. Vypočítaj jeho povrch (v cm²) a objem (v cm³). Zadaj ich oddelené bodkočiarkou.": "직육면체의 세 모서리가 $a = {@0}\\,\\text{cm}$, $b = {@1}\\,\\text{cm}$, $c = {@2}\\,\\text{cm}$예요. 겉넓이(cm²)와 부피(cm³)를 구해서 세미콜론으로 구분해 쓰세요.",
  "Kváder má tri dvojice zhodných stien: $ab$, $bc$ a $ac$. Objem je súčin všetkých troch rozmerov.": "직육면체에는 합동인 면이 세 쌍 있어요: $ab$, $bc$, $ac$. 부피는 세 모서리의 길이의 곱이에요.",
  "Medián hľadaj až v usporiadanom zozname. Čísla najprv zoraď od najmenšieho po najväčšie.": "중앙값은 크기 순서로 늘어놓은 목록에서 찾아요. 먼저 수를 작은 것부터 큰 것 순서로 늘어놓으세요.",
  "Medián je priemer týchto dvoch čísel. Koľko je?": "중앙값은 이 두 수의 평균이에요. 얼마일까요?",
  "Medzi ktoré dve po sebe idúce prirodzené čísla patrí $\\sqrt{{@0}}$? Zadaj menšie a väčšie číslo oddelené bodkočiarkou.": "$\\sqrt{{@0}}$은 연속하는 어느 두 자연수 사이에 있을까요? 작은 수와 큰 수를 세미콜론으로 구분해서 쓰세요.",
  "Množiny prirodzených, celých a racionálnych čísel": "자연수, 정수, 유리수의 집합",
  "Modus je hodnota, ktorá sa opakuje najčastejšie.": "최빈값은 가장 자주 나오는 값이에요.",
  "Modus nie je najväčšie číslo, ale hodnota, ktorá sa vyskytuje najčastejšie.": "최빈값은 가장 큰 수가 아니라 가장 자주 나오는 값이에요.",
  "Na polovicu sa delí len $x$, číslo {@0} sa odčíta až od polovice.": "$x$만 반으로 나누고, {@0}은 절반에서 빼요.",
  "Na číselnej osi ležia čísla ${@0}$ a ${@1}$. Aká je ich vzdialenosť?": "수직선 위에 수 ${@0}$과 ${@1}$이 있어요. 두 수 사이의 거리는 얼마일까요?",
  "Najmenšie číslo je {@0}.": "가장 작은 수는 {@0}이에요.",
  "Najmenšie číslo označ $x$ a sčítaj všetky čísla. Rovnica má tvar ${@0}x + \\square = {@1}$. Aké číslo patrí do štvorčeka?": "가장 작은 수를 $x$라 하고 모든 수를 더하세요. 방정식은 ${@0}x + \\square = {@1}$ 꼴이에요. 네모에 들어갈 수는 무엇일까요?",
  "Najmenšie číslo označ $x$, ďalšie sú $x + 1$, $x + 2$, … Sčítaj ich a polož rovné súčtu.": "가장 작은 수를 $x$라 하면 다음 수는 $x + 1$, $x + 2$, …예요. 모두 더해서 합과 같다고 놓으세요.",
  "Najprv osamostatni zlomok, potom obe strany vynásob menovateľom.": "먼저 분수만 남긴 다음 양변에 분모를 곱하세요.",
  "Najprv roznásob zátvorku, potom rieš ako obyčajnú rovnicu.": "먼저 괄호를 풀고 보통 방정식처럼 푸세요.",
  "Najprv umocni, potom násob a nakoniec sčítaj. Záporné číslo daj do zátvorky.": "먼저 거듭제곱하고, 그다음 곱하고, 마지막으로 더하세요. 음수는 괄호 안에 넣으세요.",
  "Najprv urči absolútne hodnoty oboch čísel (vzdialenosti od nuly, tie nie sú záporné) a až potom odčítaj.": "먼저 두 수의 절댓값(0으로부터의 거리로, 음수가 아니에요)을 구한 다음 빼세요.",
  "Najprv vypočítaj každú odmocninu zvlášť.": "먼저 각 제곱근을 따로 구하세요.",
  "Najprv vypočítaj, čo je v zátvorke, potom násob.": "먼저 괄호 안을 계산한 다음 곱하세요.",
  "Najvyšší stĺpec má hodnotu {@0} a patrí k možnosti „{@1}“. Táto hodnota je modus údajov.": "가장 높은 막대의 값은 {@0}이고 “{@1}”에 해당해요. 이 값이 자료의 최빈값이에요.",
  "Najväčšie číslo je $x + {@0} = {@1}$.": "가장 큰 수는 $x + {@0} = {@1}$이에요.",
  "Natália": "나리",
  "Nájdi dve druhé mocniny prirodzených čísel, medzi ktoré padne číslo pod odmocninou.": "근호 안의 수가 그 사이에 오는 두 자연수의 제곱을 찾으세요.",
  "Násobiť treba číslo $x$, nie číslo {@0}.": "수 {@0}이 아니라 $x$에 곱해야 해요.",
  "Násobí sa celý súčet, preto ho treba dať do zátvorky. Bez zátvorky by sa násobilo len $x$.": "합 전체에 곱하니 괄호로 묶어야 해요. 괄호가 없으면 $x$에만 곱해져요.",
  "Násobí sa celý súčet, teda aj $x$, nielen číslo {@0}.": "합 전체, 즉 수 {@0}만이 아니라 $x$에도 곱해요.",
  "Násobí sa len $x$, číslo {@0} sa odčíta až od {@1}. Zátvorka by znamenala {@2} celého rozdielu.": "$x$에만 곱하고, {@0}은 $x$의 {@1}에서 빼요. 괄호가 있으면 차 전체의 {@2}라는 뜻이 돼요.",
  "O koľko miest doľava treba posunúť desatinnú čiarku? To je exponent $n$.": "소수점을 왼쪽으로 몇 자리 옮겨야 할까요? 그것이 지수 $n$이에요.",
  "Obdĺžnik má strany dlhé $a$ a $a + {@0}$ centimetrov. Vypočítaj jeho {@1} pre $a = {@2}$.": "두 변의 길이가 $a$와 $a + {@0}$ 센티미터인 직사각형이 있어요. $a = {@2}$일 때 {@1}를 구하세요.",
  "Obdĺžnik so stranami a a a plus 3": "두 변이 a와 a 더하기 3인 직사각형",
  "Obe strany vydeľ číslom ${@0}$. Aké je $x$?": "양변을 ${@0}$으로 나누세요. $x$는 얼마일까요?",
  "Obe strany vynásob číslom {@0}. Aké je $x$?": "양변에 {@0}을 곱하세요. $x$는 얼마일까요?",
  "Obe čísla ležia na tej istej strane nuly, preto ich vzdialenosti od nuly odčítaj, nesčítavaj.": "두 수가 0의 같은 쪽에 있으니 0으로부터의 거리를 더하지 말고 빼세요.",
  "Objem kocky je $a^3$.": "정육면체의 부피는 $a^3$이에요.",
  "Objem nedelíš tromi. Hľadáš číslo, ktoré trikrát vynásobené samým sebou dá objem.": "부피를 3으로 나누지 않아요. 자기 자신을 세 번 곱하면 부피가 되는 수를 찾아야 해요.",
  "Obsah jednej steny je $a^2$, nie $a$. Stena je štvorec.": "한 면의 넓이는 $a$가 아니라 $a^2$이에요. 면은 정사각형이에요.",
  "Obsah kruhu je $S = \\pi r^2$.": "원의 넓이는 $S = \\pi r^2$이에요.",
  "Obsah medzikružia nie je $\\pi(R - r)^2$. Od obsahu veľkého kruhu odčítaj obsah malého: $\\pi R^2 - \\pi r^2$.": "고리 모양의 넓이는 $\\pi(R - r)^2$이 아니에요. 큰 원의 넓이에서 작은 원의 넓이를 빼세요: $\\pi R^2 - \\pi r^2$.",
  "Obsah obdĺžnika je súčin jeho strán.": "직사각형의 넓이는 두 변의 곱이에요.",
  "Obsah pravouhlého trojuholníka je polovica súčinu odvesien, nezabudni deliť dvoma.": "직각삼각형의 넓이는 두 직각변의 곱의 절반이에요. 2로 나누는 것을 잊지 마세요.",
  "Obsahy kruhov treba odčítať, nie sčítať: malý kruh v strede chýba.": "원의 넓이를 더하지 말고 빼야 해요. 가운데의 작은 원은 비어 있어요.",
  "Obvod je $2\\pi r$, zabudol si na dvojku (alebo si dosadil polomer namiesto priemeru do $\\pi d$).": "둘레는 $2\\pi r$이에요. 2를 잊었어요(또는 $\\pi d$에 지름 대신 반지름을 넣었어요).",
  "Obvod kruhu je $o = 2\\pi r = \\pi d$.": "원의 둘레는 $o = 2\\pi r = \\pi d$예요.",
  "Obvod kruhu je ${@0}\\,\\text{cm}$. Aký je jeho polomer v cm? {@1}": "원의 둘레가 ${@0}\\,\\text{cm}$예요. 반지름은 몇 cm일까요? {@1}",
  "Obvod nemôžeš len vydeliť štyrmi, strany obdĺžnika nie sú rovnako dlhé.": "직사각형의 변은 길이가 같지 않으니 둘레를 그냥 4로 나누면 안 돼요.",
  "Obvod obdĺžnika je $2a + 2b$, za druhú stranu dosaď $a + {@0}$.": "직사각형의 둘레는 $2a + 2b$예요. 다른 변에는 $a + {@0}$을 넣으세요.",
  "Obvod obdĺžnika je $2a + 2b$. Kratšiu stranu označ $x$.": "직사각형의 둘레는 $2a + 2b$예요. 짧은 변을 $x$라고 하세요.",
  "Od oboch strán odčítame {@0}": "양변에서 {@0}을 빼요",
  "Od obsahu veľkého kruhu odčítaj obsah malého kruhu.": "큰 원의 넓이에서 작은 원의 넓이를 빼세요.",
  "Od záporného čísla odčítavaš, posúvaš sa teda po číselnej osi ešte ďalej doľava od nuly.": "음수에서 빼면 수직선에서 0으로부터 더 왼쪽으로 가요.",
  "Odmocnina nie je polovica čísla. Hľadaj číslo, ktoré vynásobené samým sebou dá {@0}.": "제곱근은 그 수의 절반이 아니에요. 자기 자신을 곱해서 {@0}이 되는 수를 찾으세요.",
  "Odčítaj hodnoty dvoch stĺpcov.": "두 막대의 값을 빼세요.",
  "Odčítaj získané absolútne hodnoty. Aký je výsledok?": "구한 절댓값을 빼세요. 결과는 무엇일까요?",
  "Odčítaj získané čísla. Aký je výsledok?": "구한 수를 빼세요. 결과는 무엇일까요?",
  "Odčítaj čísla a výsledok vezmi bez znamienka. Ak ležia na opačných stranách nuly, vzdialenosti od nuly sa sčítajú.": "두 수를 빼고 결과에서 부호를 떼세요. 두 수가 0의 반대쪽에 있으면 0으로부터의 거리를 더해요.",
  "Odčítanie nahraď pripočítaním opačného čísla.": "뺄셈을 반대수의 덧셈으로 바꾸세요.",
  "Odčítať záporné číslo znamená pripočítať opačné, kladné číslo: $-{@0} = +{@1}$.": "음수를 빼는 것은 반대수인 양수를 더하는 거예요: $-{@0} = +{@1}$.",
  "Odčítať číslo znamená pripočítať opačné číslo: ${@0} - {@1} = {@2} + {@3} = {@4}$.": "어떤 수를 빼는 것은 그 반대수를 더하는 거예요: ${@0} - {@1} = {@2} + {@3} = {@4}$.",
  "Opis zodpovedá výrazu ${@0}$. Pri zápise postupuj od konca vety: najprv urči, čo je „hlavná“ operácia (súčet, rozdiel, mocnina…), potom jej časti.": "설명에 맞는 식은 ${@0}$이에요. 식을 쓸 때는 문장의 끝에서부터 생각하세요: 먼저 “주된” 연산(합, 차, 거듭제곱…)이 무엇인지 정하고, 그다음 그 부분들을 정하세요.",
  "Osamostatni zlomok. Koľko je $\\frac{x}{{@0}}$?": "분수만 남기세요. $\\frac{x}{{@0}}$은 얼마일까요?",
  "Podstava je pravouhlý trojuholník, jej obsah je polovica súčinu odvesien. Plášť je obvod podstavy krát výška.": "밑면은 직각삼각형이고, 그 넓이는 두 직각변의 곱의 절반이에요. 옆넓이는 밑면의 둘레 곱하기 높이예요.",
  "Podľa vzorca ${@0}$ pre $a = x$, $b = {@1}$: ${@2} = {@3}$.": "$a = x$, $b = {@1}$일 때 공식 ${@0}$에 따라: ${@2} = {@3}$.",
  "Polomer je polovica priemeru: $r = {@0}\\,\\text{cm}$.": "반지름은 지름의 절반이에요: $r = {@0}\\,\\text{cm}$.",
  "Polovica čísla $x$ je $x$ delené dvoma, nie $2x$.": "$x$의 절반은 $2x$가 아니라 $x$를 2로 나눈 거예요.",
  "Posledný člen $b^2$ je druhá mocnina, a tá je vždy kladná.": "마지막 항 $b^2$은 제곱이고, 제곱은 언제나 양수예요.",
  "Posledný člen je druhá mocnina čísla {@0}, nie samotné číslo.": "마지막 항은 수 {@0} 자체가 아니라 그 수의 제곱이에요.",
  "Posledný člen je súčin ${@0}\\cdot {@1}$, nie samotné číslo {@2}.": "마지막 항은 수 {@2} 자체가 아니라 곱 ${@0}\\cdot {@1}$이에요.",
  "Použi $\\pi \\approx 3{,}14$.": "$\\pi \\approx 3.14$를 사용하세요.",
  "Povrch vydeľ šiestimi, dostaneš obsah jednej steny. Potom odmocni.": "겉넓이를 6으로 나누면 한 면의 넓이가 나와요. 그다음 제곱근을 구하세요.",
  "Pozor, vo vzorci $S = \\pi r^2$ je polomer, nie priemer.": "주의하세요. 공식 $S = \\pi r^2$에는 지름이 아니라 반지름이 들어가요.",
  "Pozor: $(x + a)^2$ nie je $x^2 + a^2$, chýba dvojnásobok súčinu $2ax$.": "주의하세요: $(x + a)^2$은 $x^2 + a^2$이 아니에요. 곱의 두 배인 $2ax$가 빠졌어요.",
  "Počet čísel je nepárny ({@0}), medián je prostredné, {@1}. číslo: {@2}.": "수의 개수가 홀수({@0})이니 중앙값은 가운데에 있는 {@1}번째 수예요: {@2}.",
  "Počet čísel je párny ({@0}), medián je priemer {@1}. a {@2}. čísla: $\\frac{{@3} + {@4}}{2} = {@5}$.": "수의 개수가 짝수({@0})이니 중앙값은 {@1}번째와 {@2}번째 수의 평균이에요: $\\frac{{@3} + {@4}}{2} = {@5}$.",
  "Počítaš obsah kruhu ($\\pi r^2$), úloha sa pýta na obvod.": "원의 넓이($\\pi r^2$)를 계산했어요. 문제는 둘레를 묻고 있어요.",
  "Predstav si posun po číselnej osi: kladné číslo posúva doprava, záporné doľava.": "수직선에서 움직인다고 생각해 보세요: 양수는 오른쪽, 음수는 왼쪽으로 움직여요.",
  "Presuň členy s $x$ na ľavú stranu a spoj ich. Aký koeficient bude pri $x$?": "$x$가 있는 항을 좌변으로 옮겨 정리하세요. $x$의 계수는 얼마가 될까요?",
  "Presuň členy s $x$ naľavo a čísla napravo. Na tvar $ax = b$: aké je $a$ a $b$? Zadaj ich oddelené bodkočiarkou.": "$x$가 있는 항은 왼쪽으로, 수는 오른쪽으로 옮기세요. $ax = b$ 꼴에서 $a$와 $b$는 얼마일까요? 세미콜론으로 구분해서 쓰세요.",
  "Presuň čísla na pravú stranu a spoj ich. Aké číslo bude na pravej strane?": "수를 우변으로 옮겨 정리하세요. 우변의 수는 얼마가 될까요?",
  "Preveď zlomok na desatinné číslo. Zo dvoch záporných čísel je väčšie to, ktoré je bližšie k nule.": "분수를 소수로 바꾸세요. 두 음수 중에서는 0에 더 가까운 수가 더 커요.",
  "Pri delení platí rovnaké pravidlo znamienok ako pri násobení.": "나눗셈에서도 곱셈과 같은 부호 규칙이 적용돼요.",
  "Pri násobení zlomkov netreba spoločného menovateľa: čitateľ násob čitateľom a menovateľ menovateľom.": "분수의 곱셈에서는 통분할 필요가 없어요: 분자는 분자끼리, 분모는 분모끼리 곱하세요.",
  "Pri presune člena s $x$ na druhú stranu rovnice mu treba zmeniť znamienko.": "$x$가 있는 항을 방정식의 반대쪽으로 옮길 때는 부호를 바꿔야 해요.",
  "Pri presune čísla na druhú stranu rovnice mu treba zmeniť znamienko.": "수를 방정식의 반대쪽으로 옮길 때는 부호를 바꿔야 해요.",
  "Pri párnom počte čísel sú v strede dve čísla. Medián je ich priemer.": "수의 개수가 짝수이면 가운데에 두 수가 있어요. 중앙값은 그 두 수의 평균이에요.",
  "Pri rozdiele záleží na poradí: najprv píšeš to, od čoho odčítavaš.": "차에서는 순서가 중요해요: 빼지는 수를 먼저 써요.",
  "Pri roznásobení vzniknú dva členy s $x$: $x$ krát číslo z druhej zátvorky a číslo z prvej zátvorky krát $x$. Spoj ich. Aký je koeficient $p$ pri $x$?": "괄호를 풀면 $x$가 있는 항이 두 개 생겨요: $x$ 곱하기 두 번째 괄호의 수, 첫 번째 괄호의 수 곱하기 $x$. 정리하세요. $x$의 계수 $p$는 얼마일까요?",
  "Pri sčítaní a odčítaní zlomkov potrebuješ spoločného menovateľa. Nezabudni na znamienka.": "분수의 덧셈과 뺄셈에는 공통분모가 필요해요. 부호를 잊지 마세요.",
  "Pri umocnení rozdielu nestačí umocniť každý člen zvlášť, chýba stredný člen $-2ab$.": "차를 제곱할 때는 각 항을 따로 제곱하는 것만으로는 부족해요. 가운데 항 $-2ab$가 빠졌어요.",
  "Pri umocnení súčtu nestačí umocniť každý člen zvlášť, chýba stredný člen $2ab$.": "합을 제곱할 때는 각 항을 따로 제곱하는 것만으로는 부족해요. 가운데 항 $2ab$가 빠졌어요.",
  "Pri záporných číslach nerozhoduje, ktoré má väčšiu absolútnu hodnotu: väčšie je to, ktoré je bližšie k nule.": "음수에서는 절댓값이 큰 쪽이 아니라 0에 더 가까운 쪽이 더 커요.",
  "Pripočítať záporné číslo je to isté ako odčítať jeho absolútnu hodnotu: ${@0} + {@1} = {@2} - {@3} = {@4}$.": "음수를 더하는 것은 그 절댓값을 빼는 것과 같아요: ${@0} + {@1} = {@2} - {@3} = {@4}$.",
  "Päťkrát": "다섯 배",
  "Päťnásobok": "5배",
  "Rovnaké znamienka dajú kladný súčin, rôzne znamienka záporný.": "부호가 같으면 곱은 양수, 부호가 다르면 곱은 음수예요.",
  "Rozdiel odmocnín nie je odmocnina z rozdielu. Najprv vypočítaj každú odmocninu zvlášť a až potom odčítaj.": "제곱근의 차는 차의 제곱근이 아니에요. 먼저 각 제곱근을 따로 구한 다음 빼세요.",
  "Rozhodni, ktorá operácia sa robí ako posledná. Ak sa násobí alebo umocňuje celý súčet či rozdiel, treba zátvorku.": "마지막에 하는 연산이 무엇인지 정하세요. 합이나 차 전체를 곱하거나 거듭제곱하면 괄호가 필요해요.",
  "Rozmery prevedieme na decimetre: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.": "치수를 데시미터로 바꿔요: ${@0}\\,\\text{dm}$, ${@1}\\,\\text{dm}$, ${@2}\\,\\text{dm}$. $V = {@3}\\cdot {@4}\\cdot {@5} = {@6}\\,\\text{dm}^3 = {@7}\\,\\text{l}$.",
  "Rozmery preveď na decimetre, lebo $1\\,\\text{dm}^3 = 1$ liter.": "$1\\,\\text{dm}^3 = 1$리터이니 치수를 데시미터로 바꾸세요.",
  "Roznásob $(x{@0})(x{@1})$ a výsledok zapíš v tvare $x^2 + px + q$. Zadaj $p$ a $q$ oddelené bodkočiarkou.": "$(x{@0})(x{@1})$을 전개해서 $x^2 + px + q$ 꼴로 쓰세요. $p$와 $q$를 세미콜론으로 구분해서 쓰세요.",
  "Roznásob ${@0}({@1})$ (aj so znamienkom pred zátvorkou). Zadaj koeficient pri $x$ a samotné číslo.": "${@0}({@1})$을 전개하세요(괄호 앞의 부호까지 함께). $x$의 계수와 상수항을 쓰세요.",
  "Roznásob ${@0}({@1})$. Zadaj koeficient pri $x$ a samotné číslo oddelené bodkočiarkou.": "${@0}({@1})$을 전개하세요. $x$의 계수와 상수항을 세미콜론으로 구분해서 쓰세요.",
  "Roznásob a zjednoduš ${@0}$ na tvar $ax + b$. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "${@0}$을 전개해서 $ax + b$ 꼴로 간단히 하세요. $a$와 $b$를 세미콜론으로 구분해서 쓰세요.",
  "Roznásob zátvorku ${@0}(x{@1})$. Aké číslo (bez $x$) vznikne?": "괄호 ${@0}(x{@1})$을 전개하세요. ($x$가 없는) 상수항은 얼마일까요?",
  "Roznásobíme: ${@0}{@1} = {@2}{@3}$. Členy s $x$ naľavo, čísla napravo: ${@4} = {@5}$, teda $x = {@6}$.": "전개해요: ${@0}{@1} = {@2}{@3}$. $x$가 있는 항은 왼쪽, 수는 오른쪽: ${@4} = {@5}$, 그러므로 $x = {@6}$.",
  "Roznásobíme: ${@0}{@1}{@2}$. Spojíme podobné členy: ${@3}$, teda $a = {@4}$, $b = {@5}$.": "전개해요: ${@0}{@1}{@2}$. 동류항을 정리해요: ${@3}$, 그러므로 $a = {@4}$, $b = {@5}$.",
  "Rozšír oba zlomky na menovateľ {@0} a {@1} ich čitatele. Aký čitateľ dostaneš?": "두 분수를 분모가 {@0}이 되도록 바꾸고 분자를 {@1}. 분자는 얼마가 될까요?",
  "S – stred": "S – 중심",
  "Sieť kvádra": "직육면체의 전개도",
  "Spoj podobné členy. Zadaj $a$ a $b$ oddelené bodkočiarkou.": "동류항을 정리하세요. $a$와 $b$를 세미콜론으로 구분해서 쓰세요.",
  "Spoločný menovateľ je {@0}: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.": "공통분모는 {@0}이에요: ${@1} = \\frac{{@2} {@3} {@4}}{{@5}} = {@6}$.",
  "Spolu je to {@0} rovnakých dielov: {@1} má jeden diel a {@2} {@3}. Súčet preto deľ číslom {@4}.": "모두 똑같은 {@0}부분이에요: {@1}는 한 부분, {@2}는 {@3}부분이에요. 그러므로 합을 {@4}로 나누세요.",
  "Spolu majú {@0} {@1}, ale nie sú rovnako starí, preto súčet nemôžeš len rozdeliť na polovicu. Zohľadni rozdiel {@2} {@3}.": "두 사람의 나이를 합하면 {@0}{@1}이지만, 나이가 같지 않으니 합을 그냥 반으로 나눌 수 없어요. 차이 {@2}{@3}를 생각하세요.",
  "Stena je štvorec. Aká dlhá je jeho strana, teda hrana kocky (v cm)?": "면은 정사각형이에요. 그 한 변, 즉 정육면체의 모서리는 몇 cm일까요?",
  "Stredný člen je dvojnásobok súčinu, $2ab$, nie len $ab$.": "가운데 항은 $ab$가 아니라 곱의 두 배인 $2ab$예요.",
  "Stĺpcový diagram známok z písomky": "시험 점수 막대그래프",
  "Sumu, ktorú {@0} {@1}, označ $x$. „{@2} viac“ znamená {@3}-násobok.": "{@1}가 모은 돈을 $x$라고 하세요. “{@2} 많다”는 {@3}배라는 뜻이에요.",
  "Syn": "아들",
  "Súčet je ${@0} = {@1}$, počet čísel je {@2}. Priemer: ${@3} : {@4} = {@5}$.": "합은 ${@0} = {@1}$, 수의 개수는 {@2}개예요. 평균: ${@3} : {@4} = {@5}$.",
  "Súčet treba deliť počtom všetkých čísel. Spočítaj ich ešte raz.": "합을 모든 수의 개수로 나눠야 해요. 수의 개수를 다시 세어 보세요.",
  "Súčet vydelený počtom čísel je ich priemer, nie hľadané číslo. Zostav rovnicu so všetkými číslami $x$, $x + 1$, …": "합을 수의 개수로 나눈 것은 수들의 평균이지 구하는 수가 아니에요. 모든 수 $x$, $x + 1$, …로 방정식을 세우세요.",
  "Súčet {@0} po sebe idúcich prirodzených čísel je {@1}. Ktoré z nich je {@2}?": "연속하는 자연수 {@0} 개의 합이 {@1}이에요. 그중 {@2} 수는 무엇일까요?",
  "Súčin $(+b)\\cdot(-b)$ je záporný, preto je pred $b^2$ mínus.": "곱 $(+b)\\cdot(-b)$는 음수이므로 $b^2$ 앞에 마이너스가 붙어요.",
  "Sčítaj hodnoty všetkých stĺpcov.": "모든 막대의 값을 더하세요.",
  "Sčítaj koeficienty všetkých členov s $x$. Aké je $a$?": "$x$가 있는 모든 항의 계수를 더하세요. $a$는 얼마일까요?",
  "Sčítaj oba výsledky. Akú hodnotu má výraz?": "두 결과를 더하세요. 식의 값은 얼마일까요?",
  "Sčítaj samotné čísla (bez $x$). Aké je $b$?": "상수항($x$가 없는 수)을 더하세요. $b$는 얼마일까요?",
  "Sčítaj všetky členy. Akú hodnotu má výraz?": "모든 항을 더하세요. 식의 값은 얼마일까요?",
  "Sčítaj všetky čísla a súčet vydeľ ich počtom.": "모든 수를 더하고 그 합을 수의 개수로 나누세요.",
  "Sčítaj zvlášť koeficienty pri $x$ a zvlášť samotné čísla. Znamienko pred členom patrí k nemu.": "$x$의 계수는 계수끼리, 상수항은 상수항끼리 더하세요. 항 앞의 부호는 그 항에 속해요.",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, každú dĺžku teda započítaj dvakrát.": "두 변만 더했어요. 직사각형은 변이 네 개이니 각 길이를 두 번씩 더하세요.",
  "Sčítame hodnoty všetkých stĺpcov: ${@0} = {@1}$.": "모든 막대의 값을 더해요: ${@0} = {@1}$.",
  "To by bol výsledok $(x - b)^2$. Pri súčine súčtu a rozdielu sa stredné členy navzájom vyrušia.": "그건 $(x - b)^2$의 결과예요. 합과 차의 곱에서는 가운데 항들이 서로 지워져요.",
  "To je výsledok súčinu $(a + b)(a - b)$. Pri druhej mocnine rozdielu je navyše stredný člen $-2ab$ a posledný člen je kladný.": "그건 곱 $(a + b)(a - b)$의 결과예요. 차의 제곱에는 가운데 항 $-2ab$가 더 있고, 마지막 항은 양수예요.",
  "Toto je aritmetický priemer. Medián je prostredná hodnota usporiadaných čísel.": "그건 산술평균이에요. 중앙값은 크기 순서로 늘어놓은 수의 가운데 값이에요.",
  "Toto je dĺžka druhej strany. Úloha sa pýta na {@0} stranu.": "그건 다른 변의 길이예요. 문제는 {@0} 변을 묻고 있어요.",
  "Toto je len plášť. K povrchu patria aj obe podstavy.": "그건 옆넓이뿐이에요. 겉넓이에는 두 밑면도 들어가요.",
  "Toto je najmenšie z čísel, úloha sa pýta na najväčšie. Pripočítaj k nemu, o koľko je najväčšie číslo väčšie.": "그건 수들 중 가장 작은 수예요. 문제는 가장 큰 수를 묻고 있어요. 가장 큰 수가 얼마나 더 큰지 더하세요.",
  "Toto je najväčšie z čísel, úloha sa pýta na najmenšie.": "그건 수들 중 가장 큰 수예요. 문제는 가장 작은 수를 묻고 있어요.",
  "Toto je objem kocky ($a^3$). Povrch je súčet obsahov všetkých stien.": "그건 정육면체의 부피($a^3$)예요. 겉넓이는 모든 면의 넓이의 합이에요.",
  "Toto je obsah celého kruhu. Výsek je len jeho časť podľa veľkosti stredového uhla.": "그건 원 전체의 넓이예요. 부채꼴은 중심각의 크기에 따른 그 일부예요.",
  "Toto je obsah jednej steny. Hranu dostaneš, keď ho ešte odmocníš.": "그건 한 면의 넓이예요. 제곱근을 구해야 모서리가 나와요.",
  "Toto je obvod ($2\\pi r$), alebo si $r^2$ počítal ako $2r$. Obsah je $\\pi r^2 = \\pi\\cdot r\\cdot r$.": "그건 둘레($2\\pi r$)이거나, $r^2$을 $2r$로 계산했어요. 넓이는 $\\pi r^2 = \\pi\\cdot r\\cdot r$이에요.",
  "Toto je povrch kocky ($6a^2$). Objem je $a^3$.": "그건 정육면체의 겉넓이($6a^2$)예요. 부피는 $a^3$이에요.",
  "Toto je počet, koľkokrát sa najčastejšia hodnota opakuje. Modus je samotná hodnota.": "그건 가장 자주 나오는 값이 몇 번 나오는지예요. 최빈값은 그 값 자체예요.",
  "Toto je suma, ktorú {@0} {@1}. Úloha sa pýta, koľko {@2} {@3}.": "그건 {@1}가 모은 돈이에요. 문제는 {@3}가 모은 돈을 묻고 있어요.",
  "Toto je súčet čísel. Priemer dostaneš, keď súčet vydelíš počtom čísel.": "그건 수들의 합이에요. 합을 수의 개수로 나누면 평균이 나와요.",
  "Toto je vek {@0}, úloha sa pýta na vek {@1}.": "그건 {@0}의 나이예요. 문제는 {@1}의 나이를 묻고 있어요.",
  "Tretia mocnina je súčin troch rovnakých činiteľov. Nepárna mocnina záporného čísla je záporná.": "세제곱은 같은 세 수의 곱이에요. 음수의 홀수 제곱은 음수예요.",
  "Tretia mocnina nie je trojnásobok: číslo treba napísať trikrát ako činiteľ a vynásobiť.": "세제곱은 세 배가 아니에요. 그 수를 곱하는 수로 세 번 써서 곱해야 해요.",
  "Trojboký hranol má podstavu pravouhlý trojuholník s odvesnami ${@0}\\,\\text{cm}$ a ${@1}\\,\\text{cm}$ (prepona má ${@2}\\,\\text{cm}$) a výšku ${@3}\\,\\text{cm}$.": "삼각기둥의 밑면은 두 직각변이 ${@0}\\,\\text{cm}$와 ${@1}\\,\\text{cm}$(빗변은 ${@2}\\,\\text{cm}$)인 직각삼각형이고, 높이는 ${@3}\\,\\text{cm}$예요.",
  "Trojnásobok": "3배",
  "Uhol ${@0}^\\circ$ je $\\frac{{@1}}{360}$ plného uhla, teda výsek je {@2} kruhu: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3{,}14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.": "${@0}^\\circ$인 각은 한 바퀴의 $\\frac{{@1}}{360}$이므로 부채꼴은 원의 {@2}예요: $S = \\pi r^2\\cdot\\frac{{@3}}{360} \\approx 3.14\\cdot {@4}\\cdot\\frac{{@5}}{360} = {@6}\\,\\text{cm}^2$.",
  "Umocniť treba celý rozdiel, nielen číslo $x$.": "$x$만이 아니라 차 전체를 제곱해야 해요.",
  "Umocňuje sa celý rozdiel, nie každé číslo zvlášť. Rozdiel daj do zátvorky.": "각 수를 따로 제곱하는 게 아니라 차 전체를 제곱해요. 차를 괄호로 묶으세요.",
  "Umocňujeme celé číslo $-{@0}$: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.": "수 $-{@0}$ 전체를 제곱해요: $(-{@1})^2 = (-{@2})\\cdot(-{@3}) = {@4}$.",
  "Urči medián čísel {@0}.": "{@0}의 중앙값을 구하세요.",
  "Urči modus súboru údajov {@0}.": "자료 {@0}의 최빈값을 구하세요.",
  "Usporiadame: {@0}. {@1}": "순서대로 늘어놓으면: {@0}. {@1}",
  "V ktorý deň si požičali najviac kníh?": "책을 가장 많이 빌려 간 요일은 언제일까요?",
  "V obvode je dlhšia strana dvakrát, preto aj rozdiel {@0} cm treba započítať dvakrát.": "둘레에는 긴 변이 두 번 들어가니 차이 {@0} cm도 두 번 더해야 해요.",
  "Vek mladšieho označ $x$, vek staršieho je $x$ plus rozdiel. Súčet oboch vekov sa rovná zadanému číslu.": "어린 사람의 나이를 $x$라 하면 나이 많은 사람의 나이는 $x$ 더하기 차이예요. 두 나이의 합은 주어진 수와 같아요.",
  "Vek {@0} označ $x$. Z rovnice $x + (x + {@1}) = {@2}$ vypočítaj, koľko je $2x$.": "{@0}의 나이를 $x$라고 하세요. 방정식 $x + (x + {@1}) = {@2}$에서 $2x$가 얼마인지 구하세요.",
  "Vek {@0} označíme $x$, vek {@1} je potom $x + {@2}$. Rovnica: $x + (x + {@3}) = {@4}$, teda $2x = {@5}$ a $x = {@6}$. {@7}": "{@0}의 나이를 $x$라 하면 {@1}의 나이는 $x + {@2}$예요. 방정식: $x + (x + {@3}) = {@4}$, 즉 $2x = {@5}$, $x = {@6}$. {@7}",
  "Vezmi túto časť z obsahu celého kruhu. Aký je obsah výseku (v cm²)?": "원 전체의 넓이에서 이 부분을 구하세요. 부채꼴의 넓이는 몇 cm²일까요?",
  "Vnuk": "손자",
  "Vnučka": "손녀",
  "Vo vzorci $o = 2\\pi r$ je polomer. Ak poznáš priemer, stačí $o = \\pi d$, priemer už nezdvojnásobuj.": "공식 $o = 2\\pi r$에는 반지름이 들어가요. 지름을 알면 $o = \\pi d$로 충분하고, 지름을 다시 두 배 하지 마세요.",
  "Vydeľ pravú stranu koeficientom pri $x$. Aké je $x$?": "우변을 $x$의 계수로 나누세요. $x$는 얼마일까요?",
  "Vydeľ súčet počtom čísel. Aký je priemer?": "합을 수의 개수로 나누세요. 평균은 얼마일까요?",
  "Vydeľ. Aké je $x$?": "나누세요. $x$는 얼마일까요?",
  "Vynásob menovatele. Aký menovateľ dostaneš?": "분모끼리 곱하세요. 분모는 얼마가 될까요?",
  "Vynásob samotné čísla z oboch zátvoriek. Aké je $q$?": "두 괄호의 상수항끼리 곱하세요. $q$는 얼마일까요?",
  "Vynásob čitatele. Aký čitateľ dostaneš (pred krátením)?": "분자끼리 곱하세요. (약분하기 전) 분자는 얼마가 될까요?",
  "Vynásob číslom $3{,}14$. Aký je obsah kruhu (v cm²)?": "$3.14$를 곱하세요. 원의 넓이는 몇 cm²일까요?",
  "Vynásob číslom $3{,}14$. Aký je obsah medzikružia (v cm²)?": "$3.14$를 곱하세요. 고리 모양의 넓이는 몇 cm²일까요?",
  "Vypočítaj $\\sqrt{{@0}} - \\sqrt{{@1}}$.": "$\\sqrt{{@0}} - \\sqrt{{@1}}$을 계산하세요.",
  "Vypočítaj $\\sqrt{{@0}}$.": "$\\sqrt{{@0}}$을 계산하세요.",
  "Vypočítaj ${@0}$. Výsledok zadaj ako zlomok v základnom tvare (napr. -5/6) alebo ako celé číslo.": "${@0}$을 계산하세요. 답을 기약분수(예: -5/6)나 정수로 입력하세요.",
  "Vypočítaj ${@0}^2$.": "${@0}^2$을 계산하세요.",
  "Vypočítaj ${@0}^3$.": "${@0}^3$을 계산하세요.",
  "Vypočítaj $|{@0}| - |{@1}|$.": "$|{@0}| - |{@1}|$을 계산하세요.",
  "Vypočítaj aritmetický priemer čísel {@0}.": "{@0}의 산술평균을 구하세요.",
  "Vypočítaj hodnotu výrazu ${@0}$ pre $x = {@1}$.": "$x = {@1}$일 때 식 ${@0}$의 값을 구하세요.",
  "Vypočítaj hodnotu výrazu ${@0}(x{@1})$ pre $x = {@2}$.": "$x = {@2}$일 때 식 ${@0}(x{@1})$의 값을 구하세요.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$ a $y = {@3}$.": "$x = {@2}$, $y = {@3}$일 때 식 ${@0}{@1}$의 값을 구하세요.",
  "Vypočítaj hodnotu výrazu ${@0}{@1}$ pre $x = {@2}$.": "$x = {@2}$일 때 식 ${@0}{@1}$의 값을 구하세요.",
  "Vypočítaj objem kocky s hranou ${@0}\\,\\text{cm}$ (v cm³).": "모서리의 길이가 ${@0}\\,\\text{cm}$인 정육면체의 부피를 구하세요(cm³).",
  "Vypočítaj obsah celého kruhu a vezmi z neho takú časť, akú časť z $360^\\circ$ tvorí uhol výseku.": "원 전체의 넓이를 구하고, 부채꼴의 각이 $360^\\circ$에서 차지하는 만큼의 부분을 구하세요.",
  "Vypočítaj obsah kruhového výseku s polomerom $r = {@0}\\,\\text{cm}$ a stredovým uhlom ${@1}^\\circ$ (v cm²). {@2}": "반지름이 $r = {@0}\\,\\text{cm}$이고 중심각이 ${@1}^\\circ$인 부채꼴의 넓이를 구하세요(cm²). {@2}",
  "Vypočítaj obsah medzikružia s polomermi $R = {@0}\\,\\text{cm}$ a $r = {@1}\\,\\text{cm}$ (v cm²). {@2}": "반지름이 $R = {@0}\\,\\text{cm}$와 $r = {@1}\\,\\text{cm}$인 고리 모양의 넓이를 구하세요(cm²). {@2}",
  "Vypočítaj obsah obdĺžnika $a\\cdot b$ (v cm²).": "직사각형의 넓이 $a\\cdot b$를 구하세요(cm²).",
  "Vypočítaj obsahy troch rôznych stien $ab$, $bc$ a $ac$ a sčítaj ich (v cm²).": "서로 다른 세 면의 넓이 $ab$, $bc$, $ac$를 구해서 더하세요(cm²).",
  "Vypočítaj obvod obdĺžnika $2a + 2b$ (v cm).": "직사각형의 둘레 $2a + 2b$를 구하세요(cm).",
  "Vypočítaj povrch kocky s hranou ${@0}\\,\\text{cm}$ (v cm²).": "모서리의 길이가 ${@0}\\,\\text{cm}$인 정육면체의 겉넓이를 구하세요(cm²).",
  "Vypočítal si $2x$, teda dvojnásobok hľadaného veku. Ešte vydeľ dvoma.": "$2x$, 즉 구하는 나이의 두 배를 구했어요. 2로 나누세요.",
  "Vypočítal si obsah. Obvod je súčet dĺžok všetkých štyroch strán.": "넓이를 구했어요. 둘레는 네 변의 길이의 합이에요.",
  "Vypočítal si obvod. Obsah obdĺžnika je súčin dĺžok jeho strán.": "둘레를 구했어요. 직사각형의 넓이는 두 변의 길이의 곱이에요.",
  "Vyrieš rovnicu $\\frac{x}{{@0}}{@1} = {@2}$.": "방정식 $\\frac{x}{{@0}}{@1} = {@2}$를 푸세요.",
  "Vyrieš rovnicu ${@0}(x{@1}) = {@2}{@3}$.": "방정식 ${@0}(x{@1}) = {@2}{@3}$를 푸세요.",
  "Vyrieš rovnicu ${@0}{@1} = {@2}{@3}$.": "방정식 ${@0}{@1} = {@2}{@3}$를 푸세요.",
  "Vyrieš rovnicu. Aké je $x$ (najmenšie číslo)?": "방정식을 푸세요. $x$(가장 작은 수)는 얼마일까요?",
  "Vyrieš rovnicu. Koľko eur {@0} {@1}?": "방정식을 푸세요. {@1}는 몇 유로를 {@0}?",
  "Vzal si časť z obvodu ($2\\pi r$), to je dĺžka oblúka. Pri obsahu výseku vychádzaj z obsahu kruhu $\\pi r^2$.": "둘레($2\\pi r$)의 일부를 구했어요. 그건 호의 길이예요. 부채꼴의 넓이는 원의 넓이 $\\pi r^2$에서 출발하세요.",
  "Vzdialenosť dvoch čísel je absolútna hodnota ich rozdielu: $|{@0} - {@1}| = |{@2}| = {@3}$.": "두 수 사이의 거리는 두 수의 차의 절댓값이에요: $|{@0} - {@1}| = |{@2}| = {@3}$.",
  "Vzorec $o = 2\\pi r$ vydeľ číslom $2\\pi \\approx 6{,}28$.": "공식 $o = 2\\pi r$을 $2\\pi \\approx 6.28$로 나누세요.",
  "Váhy v rovnováhe: dve vrecúška x a tri závažia vľavo, deväť závaží vpravo": "균형 잡힌 저울: 왼쪽에 x 주머니 두 개와 추 세 개, 오른쪽에 추 아홉 개",
  "Výsledok zo zátvorky vynásob číslom ${@0}$. Akú hodnotu má výraz?": "괄호의 결과에 ${@0}$을 곱하세요. 식의 값은 얼마일까요?",
  "Všimni si, či je mínus v zátvorke. Umocňuje sa len to, čo je priamo pod exponentom.": "마이너스가 괄호 안에 있는지 살펴보세요. 지수 바로 아래에 있는 것만 거듭제곱해요.",
  "Z $o = 2\\pi r$ vyjadríme $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6{,}28} = {@1}\\,\\text{cm}$.": "$o = 2\\pi r$에서 $r = \\frac{o}{2\\pi} \\approx \\frac{{@0}}{6.28} = {@1}\\,\\text{cm}$로 나타내요.",
  "Za $x$ dosaď číslo; ak je záporné, daj ho do zátvorky.": "$x$에 수를 대입하세요. 음수라면 괄호 안에 넣으세요.",
  "Zamenil si čísla: násobí sa číslom {@0}, pripočítava sa {@1}.": "수를 바꿨어요: {@0}을 곱하고 {@1}을 더해요.",
  "Zapíš výsledok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "결과 $\\frac{{@0}}{{@1}}$을 기약분수(또는 정수)로 쓰세요.",
  "Zapíš zlomok $\\frac{{@0}}{{@1}}$ v základnom tvare (alebo ako celé číslo).": "분수 $\\frac{{@0}}{{@1}}$을 기약분수(또는 정수)로 쓰세요.",
  "Zapíš číslo ${@0}$ v tvare $a\\cdot 10^n$, kde $1 \\le a &lt; 10$. Zadaj $a$ a $n$ oddelené bodkočiarkou.": "수 ${@0}$을 $a\\cdot 10^n$ 꼴로 쓰세요. 단, $1 \\le a &lt; 10$이에요. $a$와 $n$을 세미콜론으로 구분해서 쓰세요.",
  "Zbav sa čísla ${@0}$ na ľavej strane, aby ostalo len ${@1}x$. Aké číslo bude na pravej strane?": "좌변에 ${@1}x$만 남도록 수 ${@0}$을 없애세요. 우변의 수는 얼마가 될까요?",
  "Zjednoduš výraz ${@0}$ na tvar $ax + b$. Zadaj čísla $a$ a $b$ oddelené bodkočiarkou.": "식 ${@0}$을 $ax + b$ 꼴로 간단히 하세요. 수 $a$와 $b$를 세미콜론으로 구분해서 쓰세요.",
  "Zlomky neodčítavaj tak, že odčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "분수를 뺄 때 분자는 분자끼리, 분모는 분모끼리 빼면 안 돼요. 먼저 통분하세요.",
  "Zlomky nesčítavaj tak, že sčítaš zvlášť čitatele a zvlášť menovatele. Najprv ich preveď na spoločného menovateľa.": "분수를 더할 때 분자는 분자끼리, 분모는 분모끼리 더하면 안 돼요. 먼저 통분하세요.",
  "Zlomok $\\frac{x}{{@0}}$ odstrániš násobením číslom {@1}, nie delením.": "분수 $\\frac{x}{{@0}}$은 나눗셈이 아니라 {@1}을 곱해서 없애요.",
  "Zlomok prevedieme na desatinné číslo: ${@0} = {@1}$. Porovnávame ${@2}$ a ${@3}$, preto ${@4} {@5} {@6}$.": "분수를 소수로 바꿔요: ${@0} = {@1}$. ${@2}$와 ${@3}$을 비교하므로 ${@4} {@5} {@6}$이에요.",
  "Zápis ${@0}$ znamená súčin čísla ${@1}$ a premennej $x$, nie súčet. Dosadené číslo daj do zátvorky a vynásob.": "${@0}$은 덧셈이 아니라 수 ${@1}$과 문자 $x$의 곱을 뜻해요. 대입한 수를 괄호 안에 넣고 곱하세요.",
  "Záporné číslo pred zátvorkou mení znamienko každého člena v zátvorke, aj čísla na konci.": "괄호 앞의 음수는 괄호 안 모든 항의 부호를 바꿔요. 끝의 수도 마찬가지예요.",
  "Záporné číslo pri umocňovaní daj do zátvorky: $({@0})^2$ je kladné číslo.": "음수를 거듭제곱할 때는 괄호 안에 넣으세요: $({@0})^2$은 양수예요.",
  "Zátvorka by znamenala, že {@0}-krát berieš celý súčet. Tu sa najprv vezme {@1} čísla $x$ a až k nemu sa pripočíta {@2}.": "괄호가 있으면 합 전체를 {@0}배 한다는 뜻이에요. 여기서는 먼저 $x$의 {@1}를 구한 다음 거기에 {@2}를 더해요.",
  "a $x + 2$": ", $x + 2$",
  "autobusom 30 %": "버스 30 %",
  "babka": "할머니",
  "babky": "할머니",
  "banán": "바나나",
  "beh": "달리기",
  "d = 2r – priemer": "d = 2r – 지름",
  "dedka": "할아버지",
  "dedko": "할아버지",
  "dlhšia": "긴",
  "dlhšiu": "긴",
  "druhá mocnina rozdielu čísla $x$ a čísla {@0}": "$x$에서 {@0}을 뺀 차의 제곱",
  "dvojnásobku": "2배",
  "dvojnásobok": "2배",
  "futbal": "축구",
  "hokej": "하키",
  "hruška": "배",
  "jahoda": "딸기",
  "k – kružnica": "k – 원",
  "kratšia": "짧은",
  "kratšiu": "짧은",
  "mama": "엄마",
  "mamy": "엄마",
  "miest": "자리",
  "na bicykli 20 %": "자전거 20 %",
  "napr. -2; 8": "예: -2; 8",
  "napr. 4; 5": "예: 4; 5",
  "napr. 6; -9": "예: 6; -9",
  "objem (v cm³)": "부피(cm³)",
  "obsah (v cm²)": "넓이(cm²)",
  "obvod (v cm)": "둘레(cm)",
  "otca": "아빠",
  "otec": "아빠",
  "pešo 50 %": "걸어서 50 %",
  "plávanie": "수영",
  "podstava": "밑면",
  "polomer $r = {@0}\\,\\text{cm}$": "반지름이 $r = {@0}\\,\\text{cm}$",
  "povrch (v cm²)": "겉넓이(cm²)",
  "povrch; objem": "겉넓이; 부피",
  "priemer $d = {@0}\\,\\text{cm}$": "지름이 $d = {@0}\\,\\text{cm}$",
  "päťnásobku": "5배",
  "päťnásobok": "5배",
  "r – polomer": "r – 반지름",
  "rovnaké, výsledok je kladný": "같으니 결과는 양수예요",
  "rozdiel {@0} čísla $x$ a čísla {@1}": "$x$의 {@0}에서 {@1}을 뺀 차",
  "rôzne, výsledok je záporný": "다르니 결과는 음수예요",
  "slivka": "자두",
  "stĺpcový diagram": "막대그래프",
  "sčítaj": "더하세요",
  "tenis": "테니스",
  "tri štvrtiny": "4분의 3",
  "troch": "세",
  "trojnásobku": "3배",
  "trojnásobok": "3배",
  "ušetril": "모았어요",
  "ušetrila": "모았어요",
  "vnuk": "손자",
  "vnuka": "손자",
  "vnučka": "손녀",
  "vnučky": "손녀",
  "výsek s uhlom α": "각 α인 부채꼴",
  "{@0} O koľko je stĺpec „{@1}“ vyšší ako stĺpec „{@2}“? {@3}": "{@0} “{@1}” 막대는 “{@2}” 막대보다 얼마나 더 높을까요? {@3}",
  "{@0} Vypočítaj jeho povrch (v cm²) a objem (v cm³), oddeľ ich bodkočiarkou.": "{@0} 겉넓이(cm²)와 부피(cm³)를 구해서 세미콜론으로 구분해 쓰세요.",
  "{@0} Vypočítaj jeho {@1}.": "{@0} {@1}를 구하세요.",
  "{@0} a {@1} ušetrili spolu {@2} €. {@3} {@4} {@5} viac ako {@6}. Koľko eur {@7} {@8}?": "{@0}와 {@1}가 모은 돈은 모두 {@2} €예요. {@3}는 {@6}보다 {@5} 많이 {@4}. {@8}는 몇 유로를 {@7}?",
  "{@0} je o {@1} {@2} {@3} ako {@4}. Spolu majú {@5} {@6}. Koľko rokov má {@7}?": "{@0}는 {@4}보다 {@1}{@2} 많아요. 두 사람의 나이를 합하면 {@5}{@6}예요. {@7}의 나이는 몇 살일까요?",
  "{@0} má $x$ eur, {@1} ${@2}x$ eur. Koľko $x$ je to spolu, teda aké číslo patrí do rovnice $\\square\\, x = {@3}$?": "{@0}는 $x$유로, {@1}는 ${@2}x$유로를 가지고 있어요. 모두 몇 $x$일까요? 즉 방정식 $\\square\\, x = {@3}$의 네모에 들어갈 수는 무엇일까요?",
  "{@0} má ${@1} + {@2} = {@3}$ {@4}.": "{@0}의 나이는 ${@1} + {@2} = {@3}${@4}예요.",
  "{@0} má {@1} {@2}.": "{@0}의 나이는 {@1}{@2}예요.",
  "{@0} súčtu čísla $x$ a čísla {@1}": "$x$와 {@1}의 합의 {@0}",
  "{@0} znamená násobiť číslom {@1}, nie {@2} pripočítať.": "{@0}는 {@1}을 곱한다는 뜻이지, {@2}을 더한다는 뜻이 아니에요.",
  "{@0}: $x$, {@1}: ${@2}x$. Rovnica: $x + {@3}x = {@4}$, teda ${@5}x = {@6}$ a $x = {@7}$. {@8} {@9} {@10} €.": "{@0}: $x$, {@1}: ${@2}x$. 방정식: $x + {@3}x = {@4}$, 즉 ${@5}x = {@6}$, $x = {@7}$. {@8}는 {@10} €를 {@9}.",
  "{@0}: ${@1}x = {@2}$. Obe strany vydelíme číslom ${@3}$: $x = {@4}$.": "{@0}: ${@1}x = {@2}$. 양변을 ${@3}$으로 나눠요: $x = {@4}$.",
  "Čitateľ násobíme čitateľom a menovateľ menovateľom: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.": "분자는 분자끼리, 분모는 분모끼리 곱해요: ${@0} = {@1}\\frac{{@2}}{{@3}}{@4}$.",
  "Člen ${@0}$ má koeficient ${@1}$, nezabudni ho započítať.": "항 ${@0}$의 계수는 ${@1}$이에요. 빼먹지 말고 넣으세요.",
  "Členy s $x$ dáme naľavo, čísla napravo: ${@0}{@1} = {@2}{@3}$, teda ${@4} = {@5}$ a $x = {@6}$.": "$x$가 있는 항은 왼쪽, 수는 오른쪽으로 옮겨요: ${@0}{@1} = {@2}{@3}$, 즉 ${@4} = {@5}$, $x = {@6}$.",
  "Členy s $x$ presuň na jednu stranu, čísla na druhú. Nakoniec vydeľ koeficientom pri $x$.": "$x$가 있는 항은 한쪽으로, 수는 다른 쪽으로 옮기세요. 마지막으로 $x$의 계수로 나누세요.",
  "Členy s $x$: ${@0}{@1}{@2} = {@3}$. Čísla: ${@4}{@5} = {@6}$. Výsledok: ${@7}$, teda $a = {@8}$, $b = {@9}$.": "$x$가 있는 항: ${@0}{@1}{@2} = {@3}$. 수: ${@4}{@5} = {@6}$. 결과: ${@7}$, 그러므로 $a = {@8}$, $b = {@9}$.",
  "Čísel je {@0}. Koľké v poradí je prostredné číslo?": "수가 {@0}개예요. 가운데 수는 몇 번째일까요?",
  "Čísla ležia na opačných stranách nuly, preto sa ich vzdialenosti od nuly sčítajú, neodčítajú.": "두 수가 0의 반대쪽에 있으니 0으로부터의 거리를 빼지 말고 더해요.",
  "Čísla majú rôzne znamienka, preto ich absolútne hodnoty nesčítavaj, ale menšiu odčítaj od väčšej. Znamienko výsledku určí číslo s väčšou absolútnou hodnotou.": "두 수의 부호가 다르니 절댓값을 더하지 말고 큰 것에서 작은 것을 빼세요. 결과의 부호는 절댓값이 큰 수의 부호를 따라요.",
  "Čísla najprv usporiadaj od najmenšieho po najväčšie.": "먼저 수를 작은 것부터 큰 것 순서로 늘어놓으세요.",
  "Čísla označíme $x$, $x + 1${@0}. Rovnica: ${@1}x + {@2} = {@3}$, teda ${@4}x = {@5}$ a $x = {@6}$. {@7}": "수를 $x$, $x + 1${@0}이라고 해요. 방정식: ${@1}x + {@2} = {@3}$, 즉 ${@4}x = {@5}$, $x = {@6}$. {@7}",
  "Čísla usporiadaj od najmenšieho. Aké je {@0}. číslo v poradí?": "수를 작은 것부터 늘어놓으세요. {@0}번째 수는 무엇일까요?",
  "Čísla usporiadaj od najmenšieho. Aké číslo stojí na tomto mieste? To je medián.": "수를 작은 것부터 늘어놓으세요. 이 자리에 있는 수는 무엇일까요? 그것이 중앙값이에요.",
  "Číslo $a$ musí spĺňať $1 \\le a &lt; 10$, pred desatinnou čiarkou má teda jedinú číslicu.": "수 $a$는 $1 \\le a &lt; 10$을 만족해야 하니, 소수점 앞에 숫자가 하나만 있어요.",
  "Číslo $a$ má pred desatinnou čiarkou jedinú číslicu. Exponent $n$ udáva, o koľko miest posunieš čiarku.": "수 $a$는 소수점 앞에 숫자가 하나만 있어요. 지수 $n$은 소수점을 몇 자리 옮기는지 나타내요.",
  "Číslo $q$ vznikne vynásobením samotných čísel zo zátvoriek, nie ich sčítaním.": "수 $q$는 괄호의 상수항끼리 더하는 게 아니라 곱해서 나와요.",
  "Číslo ${@0}$ násobí celý obsah zátvorky, nielen $x$.": "수 ${@0}$은 $x$만이 아니라 괄호 안 전체에 곱해져요.",
  "Číslo pod odmocninou má dve desatinné miesta, výsledok bude mať jedno: skús $\\sqrt{{@0}}$ a vydeľ 10.": "근호 안의 수는 소수 자리가 두 개이니 결과는 소수 자리가 하나예요: $\\sqrt{{@0}}$을 구해서 10으로 나눠 보세요.",
  "Číslo pred zátvorkou násobí oba členy v zátvorke, nielen $x$, ale aj samotné číslo.": "괄호 앞의 수는 괄호 안의 두 항, 즉 $x$뿐 아니라 상수항에도 곱해져요.",
  "Číslo {@0} sa vyskytuje trikrát, ostatné čísla len raz. Modus je {@1}.": "{@0}은 세 번 나오고, 다른 수는 한 번씩만 나와요. 최빈값은 {@1}이에요.",
  "Číslom pred zátvorkou vynásob každý člen v nej, aj so znamienkom. Potom spoj podobné členy.": "괄호 앞의 수를 괄호 안의 각 항에 부호와 함께 곱하세요. 그다음 동류항을 정리하세요.",
  "Číslom pred zátvorkou vynásob každý člen v zátvorke, aj samotné číslo na konci.": "괄호 앞의 수를 괄호 안의 각 항에, 끝의 상수항에도 곱하세요.",
  "číslo o {@0} menšie ako polovica čísla $x$": "$x$의 절반보다 {@0} 작은 수",
  "číslo o {@0} väčšie ako {@1} čísla $x$": "$x$의 {@1}보다 {@0} 큰 수",
  "Štvorec so stranou a plus b rozdelený na štyri časti": "네 부분으로 나뉜, 한 변이 a 더하기 b인 정사각형",
  "Štvornásobok": "4배",
  "štvornásobku": "4배",
  "štvornásobok": "4배",
  "štyroch": "네",
  "Žiaci hlasovali o obľúbenom ovocí.": "학생들이 좋아하는 과일에 투표했어요.",
  "Žiaci uviedli svoj obľúbený šport.": "학생들이 좋아하는 운동을 말했어요.",
  "„O {@0} menšie“ znamená od polovice odčítať {@1}, poradie je opačné.": "“{@0} 작다”는 절반에서 {@1}을 뺀다는 뜻이에요. 순서가 반대예요.",
  "„O {@0} väčšie“ znamená {@1} pripočítať, nie odčítať.": "“{@0} 크다”는 {@1}을 빼는 게 아니라 더한다는 뜻이에요.",
  "ℕ – prirodzené": "ℕ – 자연수",
  "ℚ – racionálne čísla": "ℚ – 유리수",
  "ℤ – celé čísla": "ℤ – 정수"
 }
});
