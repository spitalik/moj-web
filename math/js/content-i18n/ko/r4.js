/* 한국어: preklad js/rocniky/r4.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/r4/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "r4-cisla10000": {
   "title": "10 000까지의 수와 더 큰 수",
   "summary": "천, 백, 십, 일의 자리; 큰 수 읽기, 쓰기, 크기 비교.",
   "theory": [
    "<p>수의 각 숫자에는 저마다의 <strong>자리</strong>가 있어요: 일, 십, 백, 천, 만…\n       일이 10개이면 십 하나, 십이 10개이면 백, 백이 10개이면 천, 천이 10개이면 $10\\,000$(만)이에요.</p>",
    {
     "fig": "r4-rady",
     "caption": "$47\\,385$는 만이 4개, 천이 7개, 백이 3개, 십이 8개, 일이 5개예요."
    },
    "<p>큰 수는 오른쪽부터 세 자리씩 끊어서 써요: $8\\,206$, $35\\,000$. 이렇게 하면 읽기가 쉬워요:\n       <em>팔천이백육</em>, <em>삼만 오천</em>.</p>",
    "<p><strong>크기 비교:</strong> 자릿수가 많은 수가 더 커요. 자릿수가 같으면 왼쪽부터\n       비교해요. 먼저 천의 자리, 그다음 백, 십, 일의 자리 순서로요. 예를 들어 백이 3개는 2개보다 많으므로 $5\\,382 &gt; 5\\,297$이에요.</p>"
   ],
   "examples": [
    {
     "task": "수로 쓰세요: 천이 6개, 백이 0개, 십이 4개, 일이 9개.",
     "steps": [
      "숫자가 밀리지 않도록 백의 자리에 0을 써요.",
      "$6\\,000 + 40 + 9 = 6\\,049$.",
      "<strong>수는 $6\\,049$예요.</strong>"
     ]
    },
    {
     "task": "$7\\,615$와 $7\\,651$의 크기를 비교하세요.",
     "steps": [
      "두 수 모두 네 자리 수이고 천이 7개, 백이 6개예요.",
      "십의 자리: 1은 5보다 작아요.",
      "<strong>$7\\,615 &lt; 7\\,651$</strong>"
     ]
    }
   ]
  },
  "r4-scitanie": {
   "title": "덧셈과 뺄셈의 세로셈",
   "summary": "여러 자리 수의 덧셈과 뺄셈을 세로로 계산하기.",
   "theory": [
    "<p>세로셈 덧셈에서는 일의 자리는 일의 자리끼리, 십의 자리는 십의 자리끼리 맞추어 수를 <strong>위아래로</strong>\n       써요. 일의 자리부터, 즉 <strong>오른쪽부터</strong> 계산해요. 한 줄의 합이 9보다 크면 일의 자리 숫자만 쓰고\n       1은 다음 줄로 받아올려요.</p>",
    {
     "fig": "r4-scitanie",
     "caption": "세로셈 덧셈 $3\\,476 + 2\\,858 = 6\\,334$. 위에 작게 쓴 1은 받아올린 수예요."
    },
    "<p>세로셈 뺄셈도 일의 자리부터 계산해요. 위의 숫자가 아래 숫자보다 작으면 위의 숫자에 10을 더하고,\n       다음 줄에서는 아래 숫자에 1을 더해서 빼요.</p>",
    "<p><strong>검산:</strong> 뺄셈의 결과는 덧셈으로 확인해요. $5\\,203 - 1\\,868 = 3\\,335$이면\n       $3\\,335 + 1\\,868 = 5\\,203$이 되어야 해요.</p>"
   ],
   "examples": [
    {
     "task": "$4\\,587 + 3\\,765$를 세로셈으로 계산하세요.",
     "steps": [
      "$\\begin{array}{r}4587 \\\\ +\\,3765 \\\\ \\hline 8352\\end{array}$",
      "일의 자리: $7 + 5 = 12$, 2를 쓰고 1을 받아올려요. 십의 자리: $8 + 6 + 1 = 15$, 5를 쓰고 1을 받아올려요.",
      "백의 자리: $5 + 7 + 1 = 13$, 3을 쓰고 1을 받아올려요. 천의 자리: $4 + 3 + 1 = 8$.",
      "<strong>답: $8\\,352$</strong>"
     ]
    },
    {
     "task": "$6\\,042 - 2\\,718$을 세로셈으로 계산하세요.",
     "steps": [
      "$\\begin{array}{r}6042 \\\\ -\\,2718 \\\\ \\hline 3324\\end{array}$",
      "일의 자리: 2는 8보다 작으므로 $12 - 8 = 4$, 1을 기억해요.",
      "십의 자리: $1 + 1 = 2$, $4 - 2 = 2$. 백의 자리: 0은 7보다 작으므로 $10 - 7 = 3$, 1을 기억해요.",
      "천의 자리: $2 + 1 = 3$, $6 - 3 = 3$.",
      "<strong>답: $3\\,324$</strong>. 검산: $3\\,324 + 2\\,718 = 6\\,042$."
     ]
    }
   ]
  },
  "r4-nasobenie": {
   "title": "곱셈과 나눗셈의 세로셈",
   "summary": "한 자리 수와 두 자리 수를 곱하기, 한 자리 수로 나머지가 있는 나눗셈하기.",
   "theory": [
    "<p><strong>한 자리 수를 곱하는 세로셈:</strong> 일, 십, 백의 자리… 순서로 차례로 곱해요.\n       곱이 9보다 크면 일의 자리 숫자를 쓰고, 십의 자리 숫자는 기억했다가 다음 곱에 더해요.</p>",
    "<p><strong>두 자리 수를 곱하는 세로셈:</strong> 먼저 일의 자리 숫자를 곱하고, 그다음 십의 자리 숫자를 곱해요. 두 번째\n       부분 곱은 한 자리 왼쪽으로 옮겨 써요. 마지막으로 부분 곱들을 더해요.</p>",
    {
     "fig": "r4-nasobenie",
     "caption": "$243\\cdot 32$: 먼저 $243\\cdot 2 = 486$, 그다음 $243\\cdot 3 = 729$를 왼쪽으로 한 자리 옮겨 써요($7\\,290$을 뜻해요). 합은 $7\\,776$이에요."
    },
    "<p><strong>나눗셈의 세로셈:</strong> 왼쪽부터 나눠요. 나눌 수 있을 만큼 숫자를 잡고 몫과 나머지를 구한 뒤,\n       다음 숫자를 내려 쓰고 계속해요. 마지막에 남는 수가 <strong>나머지</strong>이고, 나머지는 항상 나누는 수보다 작아요.\n       검산: $\\text{몫}\\cdot\\text{나누는 수} + \\text{나머지} = \\text{나누어지는 수}$.</p>"
   ],
   "examples": [
    {
     "task": "$1\\,627\\cdot 4$를 세로셈으로 계산하세요.",
     "steps": [
      "$\\begin{array}{r}1627 \\\\ \\cdot\\,4 \\\\ \\hline 6508\\end{array}$",
      "$4\\cdot 7 = 28$, 8을 쓰고 2를 기억해요. $4\\cdot 2 + 2 = 10$, 0을 쓰고 1을 기억해요.",
      "$4\\cdot 6 + 1 = 25$, 5를 쓰고 2를 기억해요. $4\\cdot 1 + 2 = 6$.",
      "<strong>답: $6\\,508$</strong>"
     ]
    },
    {
     "task": "$947 : 6$을 세로셈으로 계산하세요.",
     "steps": [
      "$9 : 6 = 1$, 나머지 3.",
      "4를 내려 써요: $34 : 6 = 5$, 나머지 4.",
      "7을 내려 써요: $47 : 6 = 7$, 나머지 5.",
      "<strong>$947 : 6 = 157$, 나머지 5.</strong> 검산: $157\\cdot 6 + 5 = 947$."
     ]
    }
   ]
  },
  "r4-slovne": {
   "title": "여러 연산이 있는 문장제",
   "summary": "여러 단계로 푸는 문제: 물건 사기, 묶음으로 나누기, 비교하기.",
   "theory": [
    "<p>어떤 문장제는 식 하나로 풀 수 없어요. 다음 단계로 풀어요:</p>\n       <ol><li>무엇을 알고 있나요? 무엇을 구하나요?</li><li>답을 하려면 먼저 무엇을 알아내야 하나요?</li>\n       <li>각 단계를 계산하고 적어요.</li><li>답을 쓰고 말이 되는지 확인해요.</li></ol>",
    "<p><strong>도움이 되는 말:</strong> <em>… 더 많이 / 더 적게</em> – 더하거나 빼요;\n       <em>…배 더 많이 / …분의 1</em> – 곱하거나 나눠요; <em>똑같이 나누었다</em>, <em>…씩</em> – 나눠요;\n       <em>남은 것</em>, <em>거스름돈</em> – 빼요.</p>",
    "<p>여러 단계를 괄호가 있는 하나의 식으로 쓸 수도 있어요. 예를 들어 $50 - 3\\cdot 12 = 50 - 36 = 14$.\n       계산 순서를 기억하세요: 먼저 곱셈과 나눗셈, 그다음 덧셈과 뺄셈이에요.</p>"
   ],
   "examples": [
    {
     "task": "엄마가 12유로짜리 책 3권을 사고 50유로 지폐로 냈어요. 거스름돈은 몇 유로인가요?",
     "steps": [
      "먼저 책값을 구해요: $3\\cdot 12 = 36$유로.",
      "그다음 거스름돈: $50 - 36 = 14$유로.",
      "하나의 식으로: $50 - 3\\cdot 12 = 14$.",
      "<strong>답: 엄마는 거스름돈으로 14유로를 받았어요.</strong>"
     ]
    },
    {
     "task": "한 반에 23명씩 4개 반이 소풍을 갔어요. 버스 한 대에 학생이 46명씩 탔어요. 버스는 몇 대 갔나요?",
     "steps": [
      "학생 수: $4\\cdot 23 = 92$.",
      "버스 수: $92 : 46 = 2$.",
      "<strong>답: 버스 2대가 갔어요.</strong>"
     ]
    }
   ]
  },
  "r4-rimske": {
   "title": "로마 숫자",
   "summary": "기호 I, V, X, L, C, D, M과 로마 숫자로 수 쓰기.",
   "theory": [
    "<p>옛날 로마 사람들은 일곱 개의 글자로 수를 썼어요. 로마 숫자는 지금도 시계, 세기를 나타내는 이름,\n       건물 등에서 볼 수 있어요.</p>",
    {
     "fig": "r4-rimske",
     "caption": "로마 숫자와 그 값."
    },
    "<p><strong>규칙:</strong> 기호의 값을 더해요: $\\text{XVI} = 10 + 5 + 1 = 16$. 같은 기호(I, X, C, M)는\n       연달아 최대 세 번까지 쓸 수 있어요: $\\text{III} = 3$, $\\text{XXX} = 30$.</p>",
    "<p>작은 기호가 큰 기호 <strong>앞에</strong> 오면 빼요: $\\text{IV} = 4$, $\\text{IX} = 9$, $\\text{XL} = 40$,\n       $\\text{XC} = 90$. 그래서 4는 IIII가 아니라 IV로 써요.</p>"
   ],
   "examples": [
    {
     "task": "로마 숫자 $\\text{LXXIV}$는 어떤 수인가요?",
     "steps": [
      "나누어 봐요: $\\text{L} = 50$, $\\text{XX} = 20$, $\\text{IV} = 4$.",
      "$50 + 20 + 4 = 74$.",
      "<strong>$\\text{LXXIV} = 74$</strong>"
     ]
    },
    {
     "task": "39를 로마 숫자로 쓰세요.",
     "steps": [
      "$39 = 30 + 9$.",
      "$30 = \\text{XXX}$, $9 = \\text{IX}$.",
      "<strong>$39 = \\text{XXXIX}$</strong>"
     ]
    }
   ]
  },
  "r4-utvary": {
   "title": "각, 삼각형, 사각형",
   "summary": "예각, 직각, 둔각; 삼각형, 직사각형, 정사각형과 여러 가지 사각형.",
   "theory": [
    "<p><strong>각</strong>은 한 점, 즉 <strong>꼭짓점</strong>에서 그은 두 변으로 이루어져요.\n       직각은 공책 모서리 모양이에요. 직각보다 작은 각은 <strong>예각</strong>, 직각보다 크지만\n       (아직 일직선이 되지 않은) 각은 <strong>둔각</strong>이에요.</p>",
    {
     "fig": "r4-uhly",
     "caption": "예각, 직각, 둔각. 직각은 작은 사각형으로 표시해요."
    },
    "<p><strong>삼각형</strong>은 변 3개, 꼭짓점 3개, 각 3개가 있어요. <strong>사각형</strong>은 변 4개, 꼭짓점 4개, 각 4개가 있어요.\n       <strong>직사각형</strong>은 네 각이 모두 직각인 사각형이고, 마주 보는 변의 길이가 같아요.\n       <strong>정사각형</strong>은 네 변의 길이가 모두 같은 직사각형이에요.</p>",
    {
     "fig": "r4-stvoruholniky",
     "caption": "정사각형과 직사각형은 모든 각이 직각이에요. 모든 정사각형은 직사각형이기도 해요."
    }
   ],
   "examples": [
    {
     "task": "3:00에 시계의 두 바늘 사이의 각은 예각, 직각, 둔각 중 무엇인가요?",
     "steps": [
      "짧은바늘은 3을, 긴바늘은 12를 가리켜요.",
      "두 바늘 사이는 원의 4분의 1, 즉 공책 모서리 모양이에요.",
      "<strong>직각이에요.</strong>"
     ]
    },
    {
     "task": "직사각형의 한 변은 7 cm, 다른 한 변은 4 cm예요. 나머지 두 변의 길이는 얼마인가요?",
     "steps": [
      "직사각형의 마주 보는 변은 길이가 같아요.",
      "<strong>나머지 두 변은 7 cm와 4 cm예요.</strong>"
     ]
    }
   ]
  },
  "r4-obvod": {
   "title": "둘레와 넓이",
   "summary": "둘레는 테두리의 길이, 넓이는 도형을 덮는 작은 정사각형의 개수.",
   "theory": [
    "<p>도형의 <strong>둘레</strong>는 테두리의 길이, 즉 모든 변의 길이의 합이에요. 두 변이 $a$와 $b$인\n       직사각형의 둘레는 $a + b + a + b$, 즉 $2\\cdot(a + b)$예요. 한 변이 $a$인 정사각형의 둘레는 $4\\cdot a$예요.</p>",
    "<p><strong>넓이</strong>는 도형이 차지하는 공간의 크기를 말해요. 도형을 덮는 작은 정사각형의 개수를 세어서 구해요.\n       한 변이 1 cm인 정사각형의 넓이는 1제곱센티미터($1\\,\\text{cm}^2$)예요.</p>",
    {
     "fig": "r4-obvod-obsah",
     "caption": "4 cm × 3 cm 직사각형: 둘레는 파란 테두리의 길이이고, 넓이는 안에 있는 작은 정사각형의 개수예요."
    },
    "<p>직사각형에서는 정사각형을 하나씩 셀 필요가 없어요. 한 줄에 있는 정사각형의 개수는 한 변의 길이와 같고,\n       줄의 수는 다른 변의 길이와 같아요. 그래서 넓이 $= a\\cdot b$예요.</p>"
   ],
   "examples": [
    {
     "task": "두 변이 8 cm와 5 cm인 직사각형의 둘레를 구하세요.",
     "steps": [
      "$o = 8 + 5 + 8 + 5$.",
      "$o = 2\\cdot(8 + 5) = 2\\cdot 13 = 26$.",
      "<strong>둘레는 $26\\,\\text{cm}$예요.</strong>"
     ]
    },
    {
     "task": "정사각형의 둘레가 36 cm예요. 한 변의 길이는 얼마인가요?",
     "steps": [
      "정사각형은 길이가 같은 변 4개로 이루어져 있고, 합이 36 cm예요.",
      "$36 : 4 = 9$.",
      "<strong>한 변은 $9\\,\\text{cm}$예요.</strong>"
     ]
    }
   ]
  },
  "r4-jednotky": {
   "title": "단위 바꾸기와 자료 다루기",
   "summary": "길이, 무게, 들이, 시간의 단위; 표와 그래프에서 자료 읽기.",
   "theory": [
    "<p><strong>길이:</strong> $1\\,\\text{km} = 1\\,000\\,\\text{m}$, $1\\,\\text{m} = 10\\,\\text{dm} = 100\\,\\text{cm}$,\n       $1\\,\\text{dm} = 10\\,\\text{cm}$, $1\\,\\text{cm} = 10\\,\\text{mm}$.<br>\n       <strong>무게:</strong> $1\\,\\text{t} = 1\\,000\\,\\text{kg}$, $1\\,\\text{kg} = 100\\,\\text{dag} = 1\\,000\\,\\text{g}$.<br>\n       <strong>들이:</strong> $1\\,\\text{hl} = 100\\,\\text{l}$, $1\\,\\text{l} = 10\\,\\text{dl} = 1\\,000\\,\\text{ml}$.<br>\n       <strong>시간:</strong> $1\\,\\text{h} = 60\\,\\text{min}$, $1\\,\\text{min} = 60\\,\\text{s}$, 1일 = 24 h.</p>",
    {
     "fig": "r4-jednotky",
     "caption": "큰 단위를 작은 단위로 바꾸면 수가 커지므로 곱해요. 반대로 바꿀 때는 나눠요."
    },
    "<p><strong>자료</strong>는 표나 막대그래프에서 읽을 때가 많아요. 막대의 높이가 값을 나타내며,\n       세로축에서 그 값을 읽어요. 자료를 보고 비교하거나(얼마나 더 많은지) 더할 수도(모두 얼마인지) 있어요.</p>"
   ],
   "examples": [
    {
     "task": "4 m 35 cm는 몇 센티미터인가요?",
     "steps": [
      "$4\\,\\text{m} = 4\\cdot 100 = 400\\,\\text{cm}$.",
      "$400 + 35 = 435$.",
      "<strong>$4\\,\\text{m}\\ 35\\,\\text{cm} = 435\\,\\text{cm}$</strong>"
     ]
    },
    {
     "task": "$6\\,000\\,\\text{g}$은 몇 킬로그램인가요?",
     "steps": [
      "$1\\,\\text{kg} = 1\\,000\\,\\text{g}$이고, 더 큰 단위로 바꾸므로 나눠요.",
      "$6\\,000 : 1\\,000 = 6$.",
      "<strong>$6\\,000\\,\\text{g} = 6\\,\\text{kg}$</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3} : {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$이므로 ${@3} : {@4} = {@5}$. 그러므로 ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$예요.",
  "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$, preto ${@3}\\cdot {@4} = {@5}$. Teda ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$.": "$1\\,\\text{{@0}} = {@1}\\,\\text{{@2}}$이므로 ${@3}\\cdot {@4} = {@5}$. 그러므로 ${@6}\\,\\text{{@7}} = {@8}\\,\\text{{@9}}$예요.",
  "$\\text{{@0}} = {@1}$.": "$\\text{{@0}} = {@1}$.",
  "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, obvod je ${@4}\\,\\text{{@5}}$.": "$o = 2\\cdot({@0} + {@1}) = 2\\cdot {@2} = {@3}$, 둘레는 ${@4}\\,\\text{{@5}}$예요.",
  "$o = 4\\cdot {@0} = {@1}$, obvod je ${@2}\\,\\text{{@3}}$.": "$o = 4\\cdot {@0} = {@1}$, 둘레는 ${@2}\\,\\text{{@3}}$예요.",
  "${@0} + {@1} + {@2} + {@3} = {@4}$. Kde je 0 kusov, píšeme na to miesto nulu.": "${@0} + {@1} + {@2} + {@3} = {@4}$. 0개인 자리에는 0을 써요.",
  "${@0} - {@1} = 0$, nulu na začiatok nepíšeme": "${@0} - {@1} = 0$, 맨 앞의 0은 쓰지 않아요",
  "${@0} - {@1} = {@2}$, píšeme {@3}": "${@0} - {@1} = {@2}$, {@3}을 써요",
  "${@0} : {@1} = {@2}$, lebo ${@3}\\cdot {@4} = {@5}$, zvyšok {@6}": "${@0} : {@1} = {@2}$, 왜냐하면 ${@3}\\cdot {@4} = {@5}$, 나머지 {@6}",
  "${@0} = {@1}$. Hlasovalo {@2} {@3}.": "${@0} = {@1}$. {@3} {@2}명이 투표했어요.",
  "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, pripočítame ${@4}\\,\\text{{@5}}$: ${@6} + {@7} = {@8}$.": "${@0}\\,\\text{{@1}} = {@2}\\,\\text{{@3}}$, ${@4}\\,\\text{{@5}}$를 더해요: ${@6} + {@7} = {@8}$.",
  "= 12 štvorčekov = 12 cm²": "= 12칸 = 12 cm²",
  "Ak by mal dva pravé uhly, jeho ramená by boli rovnobežné a nestretli by sa.": "직각이 두 개라면 두 변이 평행해서 만나지 않을 거예요.",
  "Ako sa volá tento útvar? Vyber najpresnejší názov.": "이 도형의 이름은 무엇일까요? 가장 정확한 이름을 고르세요.",
  "Ako zapíšeš rímskymi číslicami {@0}?": "{@0}을 로마 숫자로 어떻게 쓸까요?",
  "Aká dlhá je vodorovná strana obdĺžnika (v cm)?": "직사각형의 가로 변의 길이는 몇 cm일까요?",
  "Aká dlhá je zvislá strana obdĺžnika (v cm)?": "직사각형의 세로 변의 길이는 몇 cm일까요?",
  "Aké číslo je zapísané rímskymi číslicami $\\text{{@0}}$?": "로마 숫자 $\\text{{@0}}$은 어떤 수일까요?",
  "Akú hodnotu má rímska číslica $\\text{{@0}}$?": "로마 숫자 $\\text{{@0}}$의 값은 얼마일까요?",
  "Akú hodnotu má časť $\\text{{@0}}$?": "부분 $\\text{{@0}}$의 값은 얼마일까요?",
  "Aký je tento uhol?": "이 각은 어떤 각일까요?",
  "Chýbajúci sčítanec zistíme odčítaním: ${@0} - {@1} = {@2}$.": "빠진 더하는 수는 뺄셈으로 구해요: ${@0} - {@1} = {@2}$.",
  "Desiatky": "십의 자리",
  "Deti v triede hlasovali, aké ovocie majú najradšej. Každé dieťa hlasovalo raz.": "반 아이들이 가장 좋아하는 과일에 투표했어요. 아이마다 한 번씩 투표했어요.",
  "Deľ zľava a zvyšok na konci musí byť menší ako {@0}.": "왼쪽부터 나누세요. 마지막 나머지는 {@0}보다 작아야 해요.",
  "Deľ zľava. Zober toľko číslic, aby sa dali deliť, a postupne pripisuj ďalšie.": "왼쪽부터 나누세요. 나눌 수 있을 만큼 숫자를 잡고, 차례로 다음 숫자를 내려 쓰세요.",
  "Do obvodu si započítal len dve strany. Obvod tvoria všetky štyri strany.": "둘레에 두 변만 넣었어요. 둘레는 네 변 모두로 이루어져요.",
  "Doprava (na menšiu jednotku) násobíme, doľava (na väčšiu jednotku) delíme.": "오른쪽(더 작은 단위)으로 갈 때는 곱하고, 왼쪽(더 큰 단위)으로 갈 때는 나눠요.",
  "Druhý súčin posuň o miesto doľava (znamená ${@0}$) a sčítaj: koľko je ${@1} + {@2}$?": "두 번째 곱을 한 자리 왼쪽으로 옮기고(${@0}$을 뜻해요) 더하세요: ${@1} + {@2}$는 얼마일까요?",
  "Druhý čiastočný súčin si neposunul o miesto doľava. Násobíš desiatkami, preto znamená desaťkrát viac.": "두 번째 부분 곱을 한 자리 왼쪽으로 옮기지 않았어요. 십의 자리 수로 곱하니까 10배 큰 수예요.",
  "Dvakrát": "두 배",
  "Hodina má 60 minút a minúta 60 sekúnd.": "1시간은 60분이고 1분은 60초예요.",
  "Hodnotu {@0} má rímska číslica {@1}, nie {@2}.": "값 {@0}을 나타내는 로마 숫자는 {@2}가 아니라 {@1}이에요.",
  "Hodnoty nesčítavaj. „O koľko viac“ je rozdiel – odčítaj menšiu hodnotu od väčšej.": "값을 더하지 마세요. “얼마나 더 많은가”는 차이에요. 큰 값에서 작은 값을 빼세요.",
  "Hodnoty znakov sčítaj. Ak je menší znak pred väčším (napr. IV, IX, XL, XC), odčítaj ho.": "기호의 값을 더하세요. 작은 기호가 큰 기호 앞에 있으면(예: IV, IX, XL, XC) 그 값을 빼세요.",
  "Hľadáme, koľko sme odčítali: ${@0} - {@1} = {@2}$. Skúška: ${@3} - {@4} = {@5}$.": "뺀 수를 찾아요: ${@0} - {@1} = {@2}$. 확인: ${@3} - {@4} = {@5}$.",
  "I = 1, V = 5, X = 10 – a ďalej L, C, D, M.": "I = 1, V = 5, X = 10, 그리고 L, C, D, M.",
  "Jakub": "준서",
  "Je toto tvrdenie pravdivé? „{@0}“": "이 문장은 참일까요? “{@0}”",
  "Jeden trojuholník má 3 uhly, dva majú $2\\cdot 3 = 6$ uhlov.": "삼각형 하나에는 각이 3개, 두 개에는 $2\\cdot 3 = 6$개 있어요.",
  "Jednotky": "일의 자리",
  "Každý obdĺžnik je štvorec.": "모든 직사각형은 정사각형이다.",
  "Každý uhol má 2 ramená a 1 vrchol.": "모든 각은 변이 2개, 꼭짓점이 1개이다.",
  "Každý štvorec je obdĺžnik.": "모든 정사각형은 직사각형이다.",
  "Každý štvorček v sieti má stranu 1 cm. Zisti obvod (v cm) a obsah (v cm²) vyfarbeného obdĺžnika. Zapíš ich v tvare „obvod; obsah“. {@0}": "모눈 한 칸의 한 변은 1 cm예요. 색칠한 직사각형의 둘레(cm)와 넓이(cm²)를 구해서 “둘레; 넓이” 꼴로 쓰세요. {@0}",
  "Koľko autobusov po {@0} miest treba, aby sa zmestili všetci?": "모두 타려면 {@0}인승 버스가 몇 대 필요할까요?",
  "Koľko detí hlasovalo za {@0}?": "{@0}에 투표한 아이는 몇 명일까요?",
  "Koľko eur majú spolu? Vypočítaj ${@0} + {@1} + {@2}$.": "세 사람이 가진 돈은 모두 몇 유로일까요? ${@0} + {@1} + {@2}$를 계산하세요.",
  "Koľko eur má {@0}?": "{@0}는 몇 유로를 가지고 있나요?",
  "Koľko eur vydali? Vypočítaj ${@0} - {@1}$.": "거스름돈은 몇 유로일까요? ${@0} - {@1}$을 계산하세요.",
  "Koľko je ${@0} + {@1}$ (dve susedné strany)?": "${@0} + {@1}$(이웃한 두 변)은 얼마일까요?",
  "Koľko je riadkov?": "몇 줄일까요?",
  "Koľko kilogramov zemiakov zostalo po predaji?": "팔고 남은 감자는 몇 킬로그램일까요?",
  "Koľko pravých uhlov má obdĺžnik?": "직사각형에는 직각이 몇 개 있을까요?",
  "Koľko pravých uhlov má štvorec?": "정사각형에는 직각이 몇 개 있을까요?",
  "Koľko ramien má jeden uhol?": "각 하나에는 변이 몇 개 있을까요?",
  "Koľko uhlov majú spolu dva trojuholníky?": "삼각형 두 개의 각은 모두 몇 개일까요?",
  "Koľko uhlov má trojuholník?": "삼각형에는 각이 몇 개 있을까요?",
  "Koľko vrcholov má štvoruholník?": "사각형에는 꼭짓점이 몇 개 있을까요?",
  "Koľko vriec po {@0} kg sa z nich naplní?": "그 감자로 {@0} kg짜리 자루를 몇 개 채울 수 있을까요?",
  "Koľko ľudí ide na výlet spolu (žiaci aj učitelia)?": "소풍 가는 사람(학생과 선생님)은 모두 몇 명일까요?",
  "Koľko štvorčekov je v jednom riadku?": "한 줄에는 몇 칸이 있을까요?",
  "Koľko štvorčekov s rozmermi 1 cm × 1 cm pokrýva vyfarbený obdĺžnik? (Obsah zapíš v cm².) {@0}": "색칠한 직사각형을 덮는 1 cm × 1 cm 칸은 몇 개일까요? (넓이를 cm²로 쓰세요.) {@0}",
  "Koľkokrát sa {@0} zmestí do {@1}?": "{@1} 안에 {@0}이 몇 번 들어갈까요?",
  "Ktorá číslica je v čísle ${@0}$ na mieste {@1}?": "${@0}$에서 {@1}의 개수를 나타내는 숫자는 무엇일까요?",
  "Ktoré číslo je o {@0} menšie ako ${@1}$?": "${@1}$보다 {@0} 작은 수는 무엇일까요?",
  "Ktoré číslo je o {@0} väčšie ako ${@1}$?": "${@1}$보다 {@0} 큰 수는 무엇일까요?",
  "Lucia": "소희",
  "Martin": "태호",
  "Meníš na menšiu jednotku – číslo sa zväčší, násob.": "더 작은 단위로 바꾸면 수가 커지니까 곱하세요.",
  "Meníš na väčšiu jednotku – číslo sa zmenší, deľ.": "더 큰 단위로 바꾸면 수가 작아지니까 나누세요.",
  "Menší znak pred väčším sa odčítava, nie pripočítava. Napríklad IV = 5 − 1 = 4.": "작은 기호가 큰 기호 앞에 있으면 더하지 않고 빼요. 예를 들어 IV = 5 − 1 = 4.",
  "Má 3 strany a 3 vrcholy – je to trojuholník.": "변이 3개, 꼭짓점이 3개이니 삼각형이에요.",
  "Má 4 pravé uhly a všetky strany rovnako dlhé – je to štvorec.": "직각이 4개이고 모든 변의 길이가 같으니 정사각형이에요.",
  "Má 4 pravé uhly, ale susedné strany sú rôzne dlhé – je to obdĺžnik.": "직각이 4개이지만 이웃한 변의 길이가 다르니 직사각형이에요.",
  "Má 4 strany, ale jeho uhly nie sú pravé – je to všeobecný štvoruholník.": "변이 4개이지만 각이 직각이 아니니 일반 사각형이에요.",
  "Na výlet idú {@0} triedy po {@1} žiakov a s nimi {@2} učitelia. Jeden autobus má {@3} miest. Koľko autobusov musia objednať, aby sa zmestili všetci?": "{@0}개 반이 반마다 학생 {@1}명씩 소풍을 가고, 선생님 {@2}명이 함께 가요. 버스 한 대에는 {@3}자리가 있어요. 모두 타려면 버스를 몇 대 불러야 할까요?",
  "Najprv ${@0}\\cdot {@1} = {@2}$, potom ${@3}\\cdot {@4} = {@5}$ (píšeme o miesto doľava, znamená to ${@6}$). Sčítame: ${@7} + {@8} = {@9}$.": "먼저 ${@0}\\cdot {@1} = {@2}$, 그다음 ${@3}\\cdot {@4} = {@5}$(한 자리 왼쪽에 쓰며, ${@6}$을 뜻해요). 더해요: ${@7} + {@8} = {@9}$.",
  "Najprv cena nákupu: ${@0}\\cdot {@1} = {@2}$ {@3}. Potom vydané peniaze: ${@4} - {@5} = {@6}$. Vydali {@7} {@8} {@9}.": "먼저 물건값: ${@0}\\cdot {@1} = {@2}$ {@3}. 그다음 거스름돈: ${@4} - {@5} = {@6}$. 거스름돈은 {@8} {@9}예요.",
  "Najprv násob jednotkami: koľko je ${@0}\\cdot {@1}$?": "먼저 일의 자리 수로 곱하세요: ${@0}\\cdot {@1}$은 얼마일까요?",
  "Najprv premeň väčšiu jednotku na menšiu a potom pripočítaj zvyšok.": "먼저 큰 단위를 작은 단위로 바꾼 다음 나머지를 더하세요.",
  "Najprv premeň väčšiu jednotku: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "먼저 큰 단위를 바꾸세요: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Najprv zisti, koľko kilogramov zostalo, potom zisti, koľkokrát sa do toho zmestí jedno vrece.": "먼저 몇 킬로그램이 남았는지 구하고, 그 안에 자루 하나가 몇 번 들어가는지 구하세요.",
  "Najprv zisti, koľko stál celý nákup, a potom to odčítaj od bankovky.": "먼저 산 물건이 모두 얼마인지 구한 다음 지폐 금액에서 빼세요.",
  "Napíš čísla pod seba, jednotky pod jednotky, a sčítaj sprava. Nezabudni na čísla, ktoré si pamätáš.": "수를 위아래로 맞춰 쓰고(일의 자리는 일의 자리 아래), 오른쪽부터 더하세요. 받아올린 수를 잊지 마세요.",
  "Napíš číslice za sebou v poradí tisíce, stovky, desiatky, jednotky. Nezabudni na nuly.": "천의 자리, 백의 자리, 십의 자리, 일의 자리 순서로 숫자를 이어 쓰세요. 0을 잊지 마세요.",
  "Násob sprava: najprv jednotky, potom desiatky, stovky… Desiatky zo súčinu si zapamätaj.": "오른쪽부터 곱하세요: 일의 자리, 그다음 십의 자리, 백의 자리… 곱의 십의 자리 수는 받아올려요.",
  "Obdĺžnik 4 krát 3 v štvorcovej sieti": "모눈 위의 4 × 3 직사각형",
  "Obdĺžnik má dve dlhšie a dve kratšie strany. Sčítaj všetky štyri.": "직사각형은 긴 변 두 개와 짧은 변 두 개가 있어요. 네 변을 모두 더하세요.",
  "Obdĺžnik má protiľahlé strany rovnako dlhé.": "직사각형은 마주 보는 변의 길이가 같아요.",
  "Obdĺžnik má všetky 4 uhly pravé.": "직사각형은 4개의 각이 모두 직각이다.",
  "Obdĺžnik má {@0} {@1} po {@2} štvorčekoch: ${@3}\\cdot {@4} = {@5}$. Obsah je ${@6}\\,\\text{cm}^2$.": "직사각형은 {@2}칸씩 {@0}{@1}이에요: ${@3}\\cdot {@4} = {@5}$. 넓이는 ${@6}\\,\\text{cm}^2$예요.",
  "Obdĺžnik môže mať susedné strany rôzne dlhé, napríklad 5 cm a 2 cm.": "직사각형은 이웃한 변의 길이가 다를 수 있어요. 예를 들어 5 cm와 2 cm.",
  "Obdĺžnik v štvorcovej sieti": "모눈 위의 직사각형",
  "Obsah: koľko je ${@0}\\cdot {@1}$?": "넓이: ${@0}\\cdot {@1}$은 얼마일까요?",
  "Obvod je dĺžka okraja, obsah je počet štvorčekov vnútri.": "둘레는 가장자리의 길이이고, 넓이는 안에 있는 칸의 수예요.",
  "Obvod nie je počet štvorčekov pri okraji, ale dĺžka okraja. Sčítaj dĺžky všetkých strán.": "둘레는 가장자리에 있는 칸의 수가 아니라 가장자리의 길이예요. 모든 변의 길이를 더하세요.",
  "Obvod tvoria 4 rovnaké strany: ${@0} : 4 = {@1}$, strana má ${@2}\\,\\text{{@3}}$.": "둘레는 같은 변 4개로 이루어져요: ${@0} : 4 = {@1}$, 한 변은 ${@2}\\,\\text{{@3}}$예요.",
  "Obvod tvoria dve také dvojice strán: koľko je $2\\cdot {@0}$?": "둘레는 이런 변의 쌍 두 개로 이루어져요: $2\\cdot {@0}$은 얼마일까요?",
  "Obvod štvorca vydeľ štyrmi.": "정사각형의 둘레를 4로 나누세요.",
  "Obvod: koľko je $2\\cdot({@0} + {@1})$?": "둘레: $2\\cdot({@0} + {@1})$은 얼마일까요?",
  "Od menšenca odčítaj rozdiel.": "빼지는 수에서 차를 빼세요.",
  "Od súčtu odčítaj známy sčítanec.": "합에서 알고 있는 더하는 수를 빼세요.",
  "Odčítaj sprava. Ak je horná číslica menšia, pripočítaj k nej 10 a 1 si zapamätaj do ďalšieho stĺpca.": "오른쪽부터 빼세요. 위의 숫자가 더 작으면 10을 더하고, 다음 자리에서 1을 기억하세요.",
  "Odčítaj {@0}. Pozor na prechod cez rád.": "{@0}을 빼세요. 받아내림에 주의하세요.",
  "Odčítal si cenu len jednej veci. Kúpených vecí bolo {@0}, najprv vypočítaj cenu celého nákupu.": "물건 하나의 가격만 뺐어요. 산 물건은 {@0}개이니, 먼저 전체 가격을 계산하세요.",
  "Ostrý uhol je menší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "예각은 공책 모서리보다 작아요. 이 각을 공책 모서리와 비교해 보세요.",
  "Ostrý, pravý a tupý uhol": "예각, 직각, 둔각",
  "Porovnaj najprv počet číslic, potom číslice zľava doprava.": "먼저 자릿수를 비교하고, 그다음 숫자를 왼쪽부터 비교하세요.",
  "Porovnaj uhol s rohom zošita (pravým uhlom).": "각을 공책 모서리(직각)와 비교해 보세요.",
  "Porovnávame zľava po rádoch. Prvá rozdielna číslica rozhodne: ${@0} {@1} {@2}$.": "왼쪽부터 자리별로 비교해요. 처음으로 다른 숫자가 결정해요: ${@0} {@1} {@2}$.",
  "Potom desiatkami: koľko je ${@0}\\cdot {@1}$?": "그다음 십의 자리 수로 곱하세요: ${@0}\\cdot {@1}$은 얼마일까요?",
  "Pozri sa, po ktorú čiaru siaha stĺpec, a prečítaj číslo vľavo.": "막대가 어느 선까지 닿는지 보고 왼쪽의 수를 읽으세요.",
  "Počet ľudí: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, zvyšok {@7}.": "사람 수: ${@0}\\cdot {@1} + {@2} = {@3}$. ${@4} : {@5} = {@6}$, 나머지 {@7}.",
  "Počítal si so 100. Pri čase platí $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$.": "100으로 계산했어요. 시간에서는 $1\\,\\text{{@0}} = 60\\,\\text{{@1}}$이에요.",
  "Pravý uhol má presne tvar rohu zošita a označuje sa štvorčekom. Porovnaj tento uhol s rohom zošita.": "직각은 공책 모서리와 꼭 같은 모양이고, 작은 네모로 표시해요. 이 각을 공책 모서리와 비교해 보세요.",
  "Predstav si útvar a spočítaj jeho vrcholy, strany alebo uhly.": "도형을 떠올리고 꼭짓점, 변, 각의 수를 세어 보세요.",
  "Premeň: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$": "바꾸세요: ${@0}\\,\\text{{@1}} = \\square\\,\\text{{@2}}$",
  "Premeň: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$": "바꾸세요: ${@0}\\,\\text{{@1}}\\ {@2}\\,\\text{{@3}} = \\square\\,\\text{{@4}}$",
  "Prevody jednotiek dĺžky a hmotnosti": "길이와 무게의 단위 바꾸기",
  "Prečítaj hodnotu každého stĺpca a všetky sčítaj.": "막대마다 값을 읽고 모두 더하세요.",
  "Prečítaj obe hodnoty a odčítaj menšiu od väčšej.": "두 값을 읽고 큰 값에서 작은 값을 빼세요.",
  "Pripočítaj hlasy za {@0}: koľko je spolu teraz?": "{@0}에 투표한 수를 더하세요: 지금까지 모두 몇 명일까요?",
  "Pripočítaj {@0}. Pozor na prechod cez rád.": "{@0}을 더하세요. 받아올림에 주의하세요.",
  "Pripíš {@0}: koľkokrát sa {@1} zmestí do {@2}?": "{@0}을 내려 쓰세요: {@2} 안에 {@1}이 몇 번 들어갈까요?",
  "Písomné násobenie 243 krát 32": "세로셈: 243 곱하기 32",
  "Písomné sčítanie 3476 plus 2858": "세로셈: 3476 더하기 2858",
  "Rozdelil si do vriec všetky zemiaky, aj tie predané. Najprv odčítaj, koľko predali.": "팔린 감자까지 모두 자루에 나눠 담았어요. 먼저 판 양을 빼세요.",
  "Rozlož číslo na desiatky a jednotky. Pamätaj: 4 = IV, 9 = IX, 40 = XL, 90 = XC.": "수를 십의 자리와 일의 자리로 나누세요. 기억하세요: 4 = IV, 9 = IX, 40 = XL, 90 = XC.",
  "Rozložíme: {@0}. Spolu ${@1} = \\text{{@2}}$.": "가르기: {@0}. 모두 ${@1} = \\text{{@2}}$.",
  "Rády si počítal zľava. Jednotky sú posledná číslica vpravo, odtiaľ sa posúvaj doľava.": "자리를 왼쪽부터 셌어요. 일의 자리는 오른쪽 마지막 숫자이고, 거기서부터 왼쪽으로 가세요.",
  "Rády čítame sprava: jednotky, desiatky, stovky, tisíce, desaťtisíce. Na mieste {@0} je číslica {@1}.": "자리는 오른쪽부터 읽어요: 일, 십, 백, 천, 만의 자리. {@0}의 개수를 나타내는 숫자는 {@1}이에요.",
  "Rímske číslice a ich hodnoty": "로마 숫자와 그 값",
  "Samuel": "재우",
  "Skúška: ${@0} + {@1} = {@2}$.": "확인: ${@0} + {@1} = {@2}$.",
  "Spoj obe časti: ako zapíšeš {@0}?": "두 부분을 합치세요: {@0}은 어떻게 쓸까요?",
  "Spomeň si: obdĺžnik má 4 pravé uhly, štvorec má navyše všetky strany rovnaké.": "기억하세요: 직사각형은 직각이 4개이고, 정사각형은 거기에 모든 변의 길이까지 같아요.",
  "Spočítaj strany a pozri sa, či sú uhly pravé (malý štvorček v rohu).": "변을 세고, 각이 직각인지(모서리의 작은 네모) 확인하세요.",
  "Spočítaj strany útvaru. Trojuholník má 3 strany, štvoruholník 4.": "도형의 변을 세세요. 삼각형은 변이 3개, 사각형은 4개예요.",
  "Spočítaj všetkých ľudí aj s učiteľmi. Ak po delení niekto zostane, potrebuje ďalší autobus.": "선생님까지 모든 사람을 세세요. 나누고 남는 사람이 있으면 버스가 한 대 더 필요해요.",
  "Spočítaj štvorčeky v jednom riadku a vynásob počtom riadkov.": "한 줄의 칸 수를 세고 줄 수를 곱하세요.",
  "Stovky": "백의 자리",
  "Stranu si vynásobil samu sebou – to by bol obsah. Obvod je súčet všetkých štyroch strán.": "변을 그 자신과 곱했어요. 그건 넓이예요. 둘레는 네 변의 합이에요.",
  "Strany si sčítal. Obsah je počet štvorčekov: štvorčeky v riadku krát počet riadkov.": "변을 더했어요. 넓이는 칸의 수예요: 한 줄의 칸 수 곱하기 줄 수.",
  "Strany si vynásobil – to by bol obsah. Obvod je dĺžka okraja, strany treba sčítať.": "변을 곱했어요. 그건 넓이예요. 둘레는 가장자리의 길이이니 변을 더해야 해요.",
  "Strany sú {@0} cm a {@1} cm. Obvod: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. Obsah: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.": "변은 {@0} cm와 {@1} cm예요. 둘레: $2\\cdot({@2} + {@3}) = {@4}\\,\\text{cm}$. 넓이: ${@5}\\cdot {@6} = {@7}\\,\\text{cm}^2$.",
  "Stĺpcový diagram hlasovania": "투표 결과 막대그래프",
  "Stĺpec „{@0}“ siaha po čiaru {@1}. Hlasovalo {@2} {@3}.": "“{@0}” 막대는 {@1} 선까지 닿아요. {@3} {@2}명이 투표했어요.",
  "Sčítaj hodnoty všetkých častí. Aké číslo je $\\text{{@0}}$?": "모든 부분의 값을 더하세요. $\\text{{@0}}$은 어떤 수일까요?",
  "Sčítal si len dve strany. Obdĺžnik má štyri strany, preto súčet dvoch susedných strán ešte vynásob dvomi.": "두 변만 더했어요. 직사각형은 변이 네 개이니 이웃한 두 변의 합에 2를 곱하세요.",
  "Tabuľka miestnych hodnôt pre číslo 47 385": "47 385의 자릿값 표",
  "Ten istý znak môžeš napísať najviac trikrát za sebou. Namiesto štyroch rovnakých znakov použi odčítanie, napríklad 4 = IV.": "같은 기호는 세 번까지만 이어 쓸 수 있어요. 같은 기호 네 개 대신 뺄셈을 쓰세요. 예를 들어 4 = IV.",
  "Tento útvar má pravé uhly (štvorček v rohu), preto má presnejší názov.": "이 도형은 직각(모서리의 작은 네모)이 있으니 더 정확한 이름이 있어요.",
  "Tento útvar nemá pravé uhly. Štvorec aj obdĺžnik majú všetky uhly pravé.": "이 도형은 직각이 없어요. 정사각형과 직사각형은 모든 각이 직각이에요.",
  "Tisíce": "천의 자리",
  "To je cena celého nákupu. Ešte zisti, koľko eur vydali z bankovky.": "그건 산 물건 전체의 가격이에요. 지폐에서 거스름돈이 몇 유로인지 더 구하세요.",
  "To je obvod – dĺžka okraja. Obsah je počet štvorčekov vnútri.": "그건 둘레, 즉 가장자리의 길이예요. 넓이는 안에 있는 칸의 수예요.",
  "To je počet druhov ovocia. Sčítaj, koľko detí hlasovalo za každé ovocie.": "그건 과일 종류의 수예요. 과일마다 투표한 아이의 수를 더하세요.",
  "To sú kilogramy, ktoré zostali. Ešte zisti, koľko vriec po {@0} kg sa z nich naplní.": "그건 남은 킬로그램이에요. 그것으로 {@0} kg짜리 자루를 몇 개 채울 수 있는지 더 구하세요.",
  "Toľko má len {@0}. Pýtame sa, koľko majú spolu všetky tri deti.": "그건 {@0}가 가진 것뿐이에요. 세 사람이 가진 것을 모두 더해야 해요.",
  "Toľko uhlov má jeden trojuholník. Trojuholníky sú dva.": "그건 삼각형 하나의 각의 수예요. 삼각형은 두 개예요.",
  "Treba {@0} {@1}.": "{@1} {@0}대가 필요해요.",
  "Trikrát": "세 배",
  "Trojuholník má 3 vrcholy, a preto aj 3 uhly.": "삼각형은 꼭짓점이 3개이므로 각도 3개예요.",
  "Trojuholník môže mať dva pravé uhly.": "삼각형은 직각을 두 개 가질 수 있다.",
  "Tupý uhol je menší ako pravý uhol.": "둔각은 직각보다 작다.",
  "Tupý uhol je väčší ako pravý, menší je ostrý uhol.": "둔각은 직각보다 크고, 직각보다 작은 각은 예각이에요.",
  "Tupý uhol je väčší ako roh zošita. Porovnaj tento uhol s rohom zošita.": "둔각은 공책 모서리보다 커요. 이 각을 공책 모서리와 비교해 보세요.",
  "Uhol je menší ako roh zošita, je ostrý.": "공책 모서리보다 작은 각이니 예각이에요.",
  "Uhol je väčší ako roh zošita, je tupý.": "공책 모서리보다 큰 각이니 둔각이에요.",
  "Uhol má tvar rohu zošita, je pravý.": "공책 모서리와 같은 모양이니 직각이에요.",
  "V niektorom stĺpci si odčítal hornú číslicu od dolnej, lebo bola menšia. Vtedy k hornej číslici pripočítaj 10 a 1 si zapamätaj.": "어떤 자리에서 위의 숫자가 더 작아서 아래 숫자에서 위 숫자를 뺐어요. 그럴 때는 위의 숫자에 10을 더하고 1을 기억하세요.",
  "V obchode mali {@0} kg zemiakov. Predali {@1} kg a zvyšok rozdelili do vriec po {@2} kg. Koľko vriec naplnili?": "가게에 감자가 {@0} kg 있었어요. {@1} kg을 팔고, 나머지를 {@2} kg씩 자루에 나눠 담았어요. 자루를 몇 개 채웠을까요?",
  "V podiele ti chýba nula. Keď sa po pripísaní číslice nedá deliť, napíš do podielu 0 a pripíš ďalšiu číslicu.": "몫에 0이 빠졌어요. 숫자를 내려 써도 나눌 수 없으면 몫에 0을 쓰고 다음 숫자를 내려 쓰세요.",
  "Vynechal si nulu. Ak nejaký rád chýba, napíš na jeho miesto 0, inak sa číslice posunú.": "0을 빠뜨렸어요. 어떤 자리가 비어 있으면 그 자리에 0을 써야 숫자가 밀리지 않아요.",
  "Vynásob najprv jednotkami, potom desiatkami. Druhý výsledok posuň o jedno miesto doľava a oba sčítaj.": "먼저 일의 자리 수로, 그다음 십의 자리 수로 곱하세요. 두 번째 결과를 한 자리 왼쪽으로 옮겨서 둘을 더하세요.",
  "Vynásobil si len jednotkami. Vynásob aj desiatkami ({@0}) a oba čiastočné súčiny sčítaj.": "일의 자리 수로만 곱했어요. 십의 자리 수({@0})로도 곱하고 두 부분 곱을 더하세요.",
  "Vypočítaj obvod obdĺžnika so stranami ${@0}\\,\\text{{@1}}$ a ${@2}\\,\\text{{@3}}$. Výsledok zapíš v {@4}.": "두 변이 ${@0}\\,\\text{{@1}}$, ${@2}\\,\\text{{@3}}$인 직사각형의 둘레를 구하세요. 답은 {@4} 단위로 쓰세요.",
  "Vypočítaj obvod štvorca so stranou ${@0}\\,\\text{{@1}}$. Výsledok zapíš v {@2}.": "한 변이 ${@0}\\,\\text{{@1}}$인 정사각형의 둘레를 구하세요. 답은 {@2} 단위로 쓰세요.",
  "Vypočítaj písomne ${@0} + {@1}$.": "${@0} + {@1}$을 세로셈으로 계산하세요.",
  "Vypočítaj písomne ${@0} - {@1}$.": "${@0} - {@1}$을 세로셈으로 계산하세요.",
  "Vypočítaj písomne ${@0} : {@1}$.": "${@0} : {@1}$을 세로셈으로 계산하세요.",
  "Vypočítaj písomne ${@0} : {@1}$. Zapíš podiel a zvyšok oddelené bodkočiarkou.": "${@0} : {@1}$을 세로셈으로 계산하세요. 몫과 나머지를 세미콜론으로 구분해서 쓰세요.",
  "Vypočítaj písomne ${@0}\\cdot {@1}$.": "${@0}\\cdot {@1}$을 세로셈으로 계산하세요.",
  "Za {@0}: {@1}, za {@2}: {@3}. ${@4} - {@5} = {@6}$.": "{@0}: {@1}, {@2}: {@3}. ${@4} - {@5} = {@6}$.",
  "Zabudol si na zapamätanú 1. Po požičaní ju pripočítaj k dolnej číslici v ďalšom stĺpci.": "기억해 둔 1을 잊었어요. 받아내림을 했으면 다음 자리의 아래 숫자에 1을 더하세요.",
  "Zabudol si na čísla, ktoré si pamätáš. Keď je súčet v stĺpci 10 alebo viac, 1 pripočítaj v ďalšom stĺpci vľavo.": "받아올린 수를 잊었어요. 한 자리의 합이 10 이상이면 왼쪽 다음 자리에 1을 더하세요.",
  "Zabudol si pripočítať ešte ${@0}\\,\\text{{@1}}$.": "${@0}\\,\\text{{@1}}$을 더하는 것을 잊었어요.",
  "Zabudol si pripočítať zapamätané desiatky. Desiatky zo súčinu pripočítaj k súčinu v ďalšom ráde.": "받아올린 십의 자리 수를 더하는 것을 잊었어요. 곱의 십의 자리 수는 다음 자리의 곱에 더하세요.",
  "Zapíš obvod a obsah v tvare „obvod; obsah“.": "둘레와 넓이를 “둘레; 넓이” 꼴로 쓰세요.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch, a zvyšok z posledného kroku.": "각 단계에서 나온 수로 몫을 쓰고, 마지막 단계의 나머지를 쓰세요.",
  "Zapíš podiel z čísel, ktoré ti vyšli v jednotlivých krokoch.": "각 단계에서 나온 수로 몫을 쓰세요.",
  "Zapíš rímskymi číslicami číslo {@0}.": "수 {@0}을 로마 숫자로 쓰세요.",
  "Zapíš výsledok z číslic, ktoré ti vyšli v stĺpcoch.": "각 자리에서 나온 숫자로 답을 쓰세요.",
  "Zapíš výsledok: z každého stĺpca jednotky súčtu, desiatky sa preniesli ďalej.": "답을 쓰세요: 각 자리에는 합의 일의 자리 숫자를 쓰고, 십의 자리 숫자는 다음 자리로 받아올려요.",
  "Zapíš výsledok: z každého súčinu jednotky, desiatky sa preniesli ďalej.": "답을 쓰세요: 각 곱에서 일의 자리 숫자를 쓰고, 십의 자리 숫자는 다음 자리로 받아올려요.",
  "Zapíš číslom: {@0} {@1}, {@2} {@3}, {@4} {@5} a {@6} {@7}.": "수로 쓰세요: {@1}이 {@0}개, {@3}이 {@2}개, {@5}이 {@4}개, {@7}이 {@6}개.",
  "Začni od poslednej číslice vpravo – to sú jednotky – a posúvaj sa doľava.": "오른쪽 마지막 숫자(일의 자리)부터 시작해서 왼쪽으로 가세요.",
  "Zisti, koľkokrát sa 60 zmestí do daného čísla.": "주어진 수 안에 60이 몇 번 들어가는지 알아보세요.",
  "Znak = patrí len medzi dve rovnaké čísla. Tieto čísla sa líšia aspoň v jednej číslici.": "= 기호는 같은 두 수 사이에만 써요. 이 두 수는 적어도 한 숫자가 달라요.",
  "Znak je otočený naopak. Porovnávaj zľava – rozhoduje prvá číslica, v ktorej sa čísla líšia.": "기호가 반대로 되어 있어요. 왼쪽부터 비교하세요. 처음으로 다른 숫자가 결정해요.",
  "Znak je otočený naopak. Číslo s viacerými číslicami je väčšie.": "기호가 반대로 되어 있어요. 자릿수가 더 많은 수가 더 커요.",
  "Zvyšní ľudia potrebujú ešte jeden autobus, preto treba {@0} {@1}.": "남은 사람들을 위해 버스가 한 대 더 필요하니 {@1} {@0}대가 필요해요.",
  "Zvyšok zemiakov: ${@0} - {@1} = {@2}$ kg. Počet vriec: ${@3} : {@4} = {@5}$.": "남은 감자: ${@0} - {@1} = {@2}$ kg. 자루 수: ${@3} : {@4} = {@5}$.",
  "autobus": "버스",
  "autobusy": "버스",
  "banány": "바나나",
  "dag": "dag",
  "desaťtisíce": "10000",
  "desaťtisícov": "10000",
  "dvakrát": "두 배",
  "eur": "유로",
  "eurá": "유로",
  "hrušky": "배",
  "jahody": "딸기",
  "k dolnej číslici pripočítaj zapamätanú 1 (${@0} + 1 = {@1}$).": "아래 숫자에 기억해 둔 1을 더하세요(${@0} + 1 = {@1}$).",
  "napr. III": "예: III",
  "napr. XIV": "예: XIV",
  "napr. XX": "예: XX",
  "nepravda": "거짓",
  "obsah: 3 riadky po 4 štvorčekoch": "넓이: 4칸씩 3줄",
  "obvod: 4 + 3 + 4 + 3 = 14 cm": "둘레: 4 + 3 + 4 + 3 = 14 cm",
  "obvod; obsah": "둘레; 넓이",
  "opíšeme {@0}": "{@0}을 그대로 써요",
  "ostrý": "예각",
  "pravda": "참",
  "pravý": "직각",
  "pripíšeme {@0}: ${@1} : {@2} = {@3}$, lebo ${@4}\\cdot {@5} = {@6}$, zvyšok {@7}": "{@0}을 내려 써요: ${@1} : {@2} = {@3}$, 왜냐하면 ${@4}\\cdot {@5} = {@6}$, 나머지 {@7}",
  "píšeme {@0}": "{@0}을 써요",
  "píšeme {@0} a 1 si pamätáme": "{@0}을 쓰고 1을 받아올려요",
  "píšeme {@0} a {@1} si pamätáme": "{@0}을 쓰고 {@1}을 받아올려요",
  "riadky": "줄",
  "riadok": "줄",
  "slivky": "자두",
  "stovka": "100",
  "tisíce": "1000",
  "tisícka": "1000",
  "tisícky": "1000",
  "tisícok": "1000",
  "tisícov": "1000",
  "trikrát": "세 배",
  "tričiek": "티셔츠",
  "tričká": "티셔츠",
  "tupý": "둔각",
  "uhol": "각",
  "všeobecný štvoruholník": "일반 사각형",
  "všetci traja": "세 사람이",
  "všetky tri": "세 사람이",
  "zaplatil": "냈어요",
  "zaplatila": "냈어요",
  "{@0} Koľko detí hlasovalo spolu?": "{@0} 모두 몇 명이 투표했을까요?",
  "{@0} Koľko detí hlasovalo za {@1}?": "{@0} {@1}에 투표한 아이는 몇 명일까요?",
  "{@0} O koľko viac detí hlasovalo za {@1} ako za {@2}?": "{@0} {@1}에 투표한 아이는 {@2}에 투표한 아이보다 몇 명 더 많을까요?",
  "{@0} Podiel je ${@1}$, zvyšok {@2}. Skúška: ${@3}\\cdot {@4} + {@5} = {@6}$.": "{@0} 몫은 ${@1}$, 나머지는 {@2}이에요. 확인: ${@3}\\cdot {@4} + {@5} = {@6}$.",
  "{@0} Výsledok je ${@1}$. Skúška: ${@2}\\cdot {@3} = {@4}$.": "{@0} 답은 ${@1}$이에요. 확인: ${@2}\\cdot {@3} = {@4}$.",
  "{@0} je menej ako {@1}, preto ${@2} - {@3} = {@4}$, píšeme {@5} a 1 si pamätáme": "{@0}은 {@1}보다 작으니 ${@2} - {@3} = {@4}$, {@5}을 쓰고 1을 기억해요",
  "{@0} je menej ako {@1}, preto počítaj ${@2} - {@3}$. Koľko to je?": "{@0}은 {@1}보다 작으니 ${@2} - {@3}$을 계산하세요. 얼마일까요?",
  "{@0} má ušetrených {@1} {@2}. {@3} má o {@4} {@5} viac ako {@6} a {@7} má {@8} toľko ako {@9}. Koľko eur majú {@10} spolu?": "{@0}는 {@1} {@2}를 모았어요. {@3}는 {@6}보다 {@4} {@5} 더 많이 가지고 있고, {@7}는 {@9}의 {@8}만큼 가지고 있어요. {@10} 가진 돈은 모두 몇 유로일까요?",
  "{@0} má {@1} toľko ako {@2}, nie ako {@3}. Násob sumu, ktorú má {@4}.": "{@0}는 {@3}가 아니라 {@2}가 가진 돈의 {@1}만큼 가지고 있어요. {@4}가 가진 금액에 곱하세요.",
  "{@0} {@1} {@2} {@3} po {@4} {@5} a {@6} {@7}-eurovou bankovkou. Koľko eur {@8} vydali?": "{@0}는 {@4} {@5}짜리 {@3} {@2}개를 {@1}. {@7}유로 지폐로 {@6}. 거스름돈은 몇 유로일까요?",
  "{@0}. Spolu {@1}.": "{@0}. 모두 {@1}.",
  "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. Spolu: ${@8} + {@9} + {@10} = {@11}$ {@12}.": "{@0}: ${@1} + {@2} = {@3}$. {@4}: ${@5}\\cdot {@6} = {@7}$. 모두: ${@8} + {@9} + {@10} = {@11}$ {@12}.",
  "{@0}: koľko je ${@1} + {@2} + 1$? (1 si pamätáš z predchádzajúceho stĺpca.)": "{@0}: ${@1} + {@2} + 1$은 얼마일까요? (1은 앞 자리에서 받아올린 수예요.)",
  "{@0}: koľko je ${@1} + {@2}$?": "{@0}: ${@1} + {@2}$는 얼마일까요?",
  "{@0}: koľko je ${@1}\\cdot {@2} + {@3}$? ({@4} si pamätáš z predchádzajúceho rádu.)": "{@0}: ${@1}\\cdot {@2} + {@3}$은 얼마일까요? ({@4}은 앞 자리에서 받아올린 수예요.)",
  "{@0}: koľko je ${@1}\\cdot {@2}$?": "{@0}: ${@1}\\cdot {@2}$는 얼마일까요?",
  "Áno, protiľahlé strany obdĺžnika sú rovnako dlhé.": "네, 직사각형의 마주 보는 변은 길이가 같아요.",
  "Áno, to je vlastnosť štvorca.": "네, 그것은 정사각형의 성질이에요.",
  "útvar": "도형",
  "Čísla nesčítavaj hneď. Najprv premeň ${@0}\\,\\text{{@1}}$ na menšiu jednotku $\\text{{@2}}$.": "수를 바로 더하지 마세요. 먼저 ${@0}\\,\\text{{@1}}$을 더 작은 단위 $\\text{{@2}}$로 바꾸세요.",
  "Čísla nesčítavaj. Chýbajúci sčítanec zistíš odčítaním: od súčtu odčítaj známy sčítanec.": "수를 더하지 마세요. 빠진 더하는 수는 뺄셈으로 구해요: 합에서 알고 있는 더하는 수를 빼세요.",
  "Čísla nesčítavaj. Hľadané číslo zistíš odčítaním: od menšenca odčítaj rozdiel.": "수를 더하지 마세요. 구하는 수는 뺄셈으로 구해요: 빼지는 수에서 차를 빼세요.",
  "Čísla sú rovnaké.": "두 수가 같아요.",
  "Číslo s viacerými číslicami je väčšie, preto ${@0} {@1} {@2}$.": "자릿수가 더 많은 수가 더 크니까 ${@0} {@1} {@2}$.",
  "čerešne": "체리",
  "Štvorec je naozaj aj obdĺžnik, ale hľadáme najpresnejší názov. Pozri sa, či sú všetky strany rovnako dlhé.": "정사각형도 직사각형이 맞지만, 가장 정확한 이름을 찾고 있어요. 모든 변의 길이가 같은지 보세요.",
  "Štvorec má 4 pravé uhly a protiľahlé strany rovnaké, je to teda špeciálny obdĺžnik.": "정사각형은 직각이 4개이고 마주 보는 변의 길이가 같으니 특별한 직사각형이에요.",
  "Štvorec má obvod ${@0}\\,\\text{{@1}}$. Aká dlhá je jeho strana (v {@2})?": "정사각형의 둘레가 ${@0}\\,\\text{{@1}}$이에요. 한 변의 길이는 몇 {@2}일까요?",
  "Štvorec má všetky 4 uhly pravé.": "정사각형은 4개의 각이 모두 직각이다.",
  "Štvorec má všetky strany rovnako dlhé.": "정사각형은 모든 변의 길이가 같아요.",
  "Štvorec má všetky strany rovnako dlhé. Tu sú susedné strany rôzne dlhé.": "정사각형은 모든 변의 길이가 같아요. 여기서는 이웃한 변의 길이가 달라요.",
  "Štvorec, obdĺžnik, trojuholník a všeobecný štvoruholník": "정사각형, 직사각형, 삼각형, 일반 사각형",
  "Štvoruholník má 4 strany a 4 vrcholy.": "사각형은 변이 4개, 꼭짓점이 4개예요.",
  "Štyrikrát": "네 배",
  "štyrikrát": "네 배",
  "„O … viac“ znamená pripočítať, „…krát toľko“ znamená násobiť. Potom všetko sčítaj.": "“…개 더 많다”는 더하기, “…배”는 곱하기예요. 그다음 모두 더하세요.",
  "„{@0} toľko“ znamená násobiť, nie pripočítať {@1}.": "“{@0}만큼”은 {@1}을 더하라는 게 아니라 곱하라는 뜻이에요."
 }
});
