/* 한국어: preklad js/content.js, js/exercises.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/content/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "cisla": {
   "title": "수식과 계산 순서",
   "summary": "수, 괄호, 그리고 올바른 계산 순서.",
   "theory": [
    "<p>자연수는 $1, 2, 3, 4, \\dots$입니다. 자연수의 집합은 $\\mathbb{N}$으로 나타냅니다. 여기에 0을 더하면 0 이상의 정수가 되고, 음수까지 더하면 정수의 집합 $\\mathbb{Z}$가 됩니다.</p>",
    {
     "fig": "numberline",
     "caption": "수직선: 파란 점은 자연수이고, 0의 왼쪽에는 음의 정수가 있습니다."
    },
    "<p><strong>계산 순서:</strong></p>\n       <ol><li>괄호 안의 식,</li><li>거듭제곱과 제곱근,</li>\n       <li>곱셈과 나눗셈(왼쪽에서 오른쪽으로),</li><li>덧셈과 뺄셈(왼쪽에서 오른쪽으로).</li></ol>"
   ],
   "examples": [
    {
     "task": "$2 + 3\\cdot 4 - 6 : 2$를 계산하세요.",
     "steps": [
      "먼저 곱셈과 나눗셈: $3\\cdot 4 = 12$, $6 : 2 = 3$.",
      "식은 $2 + 12 - 3$이 됩니다.",
      "왼쪽에서 오른쪽으로: $2 + 12 = 14$, 그다음 $14 - 3 = 11$.",
      "<strong>답: 11</strong>"
     ]
    }
   ]
  },
  "zlomky": {
   "title": "분수와 분수의 계산",
   "summary": "약분, 분모·분자 늘리기, 분수의 계산.",
   "theory": [
    "<p>분수 $\\frac{a}{b}$는 분자 $a$와 분모 $b \\neq 0$으로 이루어집니다. 분자와 분모에 0이 아닌 같은 수를 곱해도 분수의 값은 변하지 않습니다(<strong>크기가 같은 분수 만들기</strong>). 그 반대 과정이 <strong>약분</strong>입니다.</p>",
    {
     "fig": "fractions",
     "caption": "분자와 분모에 같은 수를 곱해도 값은 변하지 않습니다: $\\frac{1}{2}=\\frac{3}{6}$과 $\\frac{2}{3}=\\frac{4}{6}$은 색칠된 부분의 길이가 같습니다."
    },
    "<p><strong>덧셈과 뺄셈</strong>에는 공통분모가 필요합니다: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.</p>",
    "<p><strong>곱셈</strong>: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$. <strong>나눗셈</strong>은 역수를 곱합니다: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.</p>"
   ],
   "examples": [
    {
     "task": "$\\frac{1}{2}+\\frac{2}{3}$을 계산하세요.",
     "steps": [
      "공통분모는 $2\\cdot 3 = 6$입니다.",
      "$\\frac{1}{2}=\\frac{3}{6}$, $\\frac{2}{3}=\\frac{4}{6}$.",
      "$\\frac{3}{6}+\\frac{4}{6}=\\frac{7}{6}$.",
      "<strong>답: $\\frac{7}{6}=1\\frac{1}{6}$</strong>"
     ]
    }
   ]
  },
  "percenta": {
   "title": "백분율과 백분율 계산",
   "summary": "백분율 계산, 백분율만큼 늘리기와 줄이기.",
   "theory": [
    "<p>$p\\,\\%$는 $\\frac{p}{100}$을 뜻합니다. 수 $x$의 $p\\,\\%$는 $\\frac{p}{100}\\cdot x$입니다.</p>",
    {
     "fig": "percent",
     "caption": "전체는 100칸입니다. $25\\,\\%$는 그중 25칸을 뜻합니다."
    },
    "<p>$p\\,\\%$ <strong>증가</strong>는 $1+\\frac{p}{100}$을 곱하는 것이고, <strong>감소</strong>는 $1-\\frac{p}{100}$을 곱하는 것입니다.</p>",
    "<p>소수 $0.25$는 분수 $\\frac{1}{4}$이며 동시에 $25\\,\\%$입니다. 한국어에서는 소수점을 점(.)으로 씁니다.</p>"
   ],
   "examples": [
    {
     "task": "물건의 가격이 $80\\,€$입니다. $15\\,\\%$ 인상된 후의 가격은 얼마인가요?",
     "steps": [
      "곱할 수는 $1+\\frac{15}{100}=1.15$입니다.",
      "$80\\cdot 1.15 = 92$.",
      "<strong>답: 92 €</strong>"
     ]
    }
   ]
  },
  "mnoziny": {
   "title": "집합과 집합의 연산",
   "summary": "원소, 합집합, 교집합, 차집합과 원소의 개수.",
   "theory": [
    "<p>집합은 서로 구별되는 원소들의 모임입니다. $a\\in A$는 원소 $a$가 집합 $A$에 속한다는 뜻입니다. 공집합은 $\\varnothing$입니다.</p>",
    "<p>연산: <strong>합집합</strong> $A\\cup B$(적어도 한 집합에 속하는 원소), <strong>교집합</strong> $A\\cap B$(두 집합 모두에 속하는 원소), <strong>차집합</strong> $A\\setminus B$($A$의 원소 중 $B$에 속하지 않는 원소).</p>",
    {
     "fig": "venn",
     "caption": "$A=\\{1,2,3,4\\}$와 $B=\\{3,4,5\\}$의 벤 다이어그램. 교집합은 두 원이 겹치는 부분에 있습니다."
    },
    "<p>원소의 개수는 $|A|$로 나타냅니다. $|A\\cup B| = |A|+|B|-|A\\cap B|$가 성립합니다. 교집합의 원소를 두 번 셌으므로 한 번 빼 줍니다.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\{1,2,3,4\\}$, $B=\\{3,4,5\\}$일 때 $A\\cup B$, $A\\cap B$, $A\\setminus B$를 구하세요.",
     "steps": [
      "$A\\cup B=\\{1,2,3,4,5\\}$",
      "$A\\cap B=\\{3,4\\}$",
      "$A\\setminus B=\\{1,2\\}$"
     ]
    }
   ]
  },
  "obsah": {
   "title": "평면도형의 둘레와 넓이",
   "summary": "직사각형, 삼각형, 원의 둘레와 넓이.",
   "theory": [
    "<p>두 변의 길이가 $a$, $b$인 직사각형의 둘레는 $o=2(a+b)$, 넓이는 $S=a\\cdot b$입니다.</p>",
    "<p>밑변이 $z$이고 그 밑변에 대한 높이가 $v$인 삼각형의 넓이는 $S=\\frac{z\\cdot v}{2}$입니다.</p>",
    "<p>반지름이 $r$인 원의 둘레는 $o=2\\pi r$, 넓이는 $S=\\pi r^2$이며, 여기서 $\\pi\\approx 3.14159$입니다.</p>",
    {
     "fig": "shapes",
     "caption": "직사각형의 변 $a$, $b$, 삼각형의 밑변 $z$와 높이 $v$, 원의 반지름 $r$."
    }
   ],
   "examples": [
    {
     "task": "원의 반지름이 $r=3\\,\\text{cm}$입니다. 원의 넓이를 구하세요.",
     "steps": [
      "$S=\\pi r^2=\\pi\\cdot 3^2=9\\pi$.",
      "$9\\pi\\approx 28.27\\,\\text{cm}^2$."
     ]
    }
   ]
  },
  "pytagoras": {
   "title": "피타고라스 정리",
   "summary": "직각삼각형에서 변의 길이 구하기.",
   "theory": [
    "<p>직각을 낀 두 변이 $a$, $b$이고 빗변이 $c$인 직각삼각형에서 $a^2+b^2=c^2$이 성립합니다. 빗변은 직각의 맞은편에 있으며 항상 가장 긴 변입니다.</p>",
    {
     "fig": "pythagoras",
     "caption": "세 변이 $3, 4, 5$인 삼각형: 직각을 낀 두 변 위의 정사각형 넓이 $9+16$을 더하면 빗변 위의 정사각형 넓이 $25$가 됩니다."
    },
    "<p>자주 쓰는 정수 세 쌍: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$와 그 배수.</p>"
   ],
   "examples": [
    {
     "task": "직각을 낀 두 변의 길이가 $6$과 $8$입니다. 빗변의 길이는 얼마인가요?",
     "steps": [
      "$c^2=6^2+8^2=36+64=100$.",
      "$c=\\sqrt{100}=10$."
     ]
    }
   ]
  },
  "linearne": {
   "title": "일차방정식",
   "summary": "등식의 성질을 이용한 변형과 일차방정식.",
   "theory": [
    "<p>방정식은 <strong>등식의 성질</strong>을 이용해 풉니다. 양변에 같은 수를 더하거나 빼고, 양변에 0이 아닌 같은 수를 곱하거나 양변을 0이 아닌 같은 수로 나눕니다.</p>",
    "<p>$a\\neq 0$일 때 방정식 $ax+b=c$는 이렇게 풉니다: $ax=c-b$, 따라서 $x=\\frac{c-b}{a}$.</p>",
    "<p>검산은 구한 해를 처음 방정식에 대입해서 합니다.</p>"
   ],
   "examples": [
    {
     "task": "$3x+5=20$을 푸세요.",
     "steps": [
      "$5$를 뺍니다: $3x=15$.",
      "$3$으로 나눕니다: $x=5$.",
      "검산: $3\\cdot 5+5=20$ ✓"
     ]
    }
   ]
  },
  "kvadraticke": {
   "title": "이차방정식",
   "summary": "판별식, 근의 공식, 근과 계수의 관계.",
   "theory": [
    "<p>이차방정식 $ax^2+bx+c=0$($a\\neq 0$)의 근은 $x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$이고, 여기서 $D=b^2-4ac$를 <strong>판별식</strong>이라고 합니다.</p>",
    "<p>$D&gt;0$이면 서로 다른 두 실근을 가집니다. $D=0$이면 중근을 하나 가집니다. $D&lt;0$이면 실근이 없습니다.</p>",
    {
     "fig": "parabola",
     "caption": "$y=x^2+px+q$의 그래프(즉 $b=p$, $c=q$). 근은 포물선과 $x$축의 교점입니다. $p$와 $q$를 바꾸면서 판별식을 관찰해 보세요."
    },
    "<p><strong>근과 계수의 관계</strong>(비에트 정리, $a=1$일 때): $x_1+x_2=-b$, $x_1\\cdot x_2=c$.</p>"
   ],
   "examples": [
    {
     "task": "$x^2-5x+6=0$을 푸세요.",
     "steps": [
      "$a=1$, $b=-5$, $c=6$, $D=25-24=1$.",
      "$x_{1,2}=\\frac{5\\pm 1}{2}$, 따라서 $x_1=3$, $x_2=2$.",
      "확인: $3+2=5$, $3\\cdot 2=6$ ✓"
     ]
    }
   ]
  },
  "mocniny": {
   "title": "거듭제곱과 거듭제곱근",
   "summary": "거듭제곱과 거듭제곱근의 계산 법칙.",
   "theory": [
    "<p>$a&gt;0$이고 $m,n$이 정수일 때: $a^m\\cdot a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{m\\cdot n}$.</p>",
    "<p>음의 지수: $a^{-n}=\\frac{1}{a^n}$. 지수가 0일 때: $a\\neq 0$이면 $a^0=1$.</p>",
    "<p>거듭제곱근은 거듭제곱의 역연산입니다: $\\sqrt{a}=a^{1/2}$, $\\sqrt[n]{a}=a^{1/n}$. 또한 $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$가 성립합니다.</p>"
   ],
   "examples": [
    {
     "task": "$\\frac{2^5\\cdot 2^{-2}}{2}$를 간단히 하세요.",
     "steps": [
      "분자: $2^5\\cdot 2^{-2}=2^{3}$.",
      "$\\frac{2^3}{2}=2^{2}$.",
      "<strong>답: $4$</strong>"
     ]
    }
   ]
  },
  "goniometria": {
   "title": "직각삼각형에서의 삼각비",
   "summary": "직각삼각형에서의 사인, 코사인, 탄젠트.",
   "theory": [
    "<p>예각 $\\alpha$를 가진 직각삼각형에서: $\\sin\\alpha=\\frac{\\text{대변}}{\\text{빗변}}$, $\\cos\\alpha=\\frac{\\text{이웃변}}{\\text{빗변}}$, $\\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}$.</p>",
    {
     "fig": "trigtriangle",
     "caption": "각 $\\alpha$를 기준으로 한 직각삼각형의 변 이름."
    },
    "<p>기본 항등식: $\\sin^2\\alpha+\\cos^2\\alpha=1$.</p>",
    {
     "fig": "unitcircle",
     "caption": "단위원: 단위원 위의 점의 좌표는 $(\\cos\\alpha, \\sin\\alpha)$입니다. 각을 움직이며 부호가 어떻게 바뀌는지 관찰해 보세요."
    },
    "<p>특수각의 삼각비 값:</p>\n       <table class=\"tbl\">\n         <tr><th>$\\alpha$</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>\n         <tr><td>$\\sin\\alpha$</td><td>0</td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{\\sqrt3}{2}$</td><td>1</td></tr>\n         <tr><td>$\\cos\\alpha$</td><td>1</td><td>$\\frac{\\sqrt3}{2}$</td><td>$\\frac{\\sqrt2}{2}$</td><td>$\\frac{1}{2}$</td><td>0</td></tr>\n       </table>"
   ],
   "examples": [
    {
     "task": "$\\sin\\alpha=0.6$이고 $\\alpha$가 예각일 때 $\\cos\\alpha$를 구하세요.",
     "steps": [
      "$\\cos^2\\alpha=1-\\sin^2\\alpha=1-0.36=0.64$.",
      "$\\cos\\alpha=\\sqrt{0.64}=0.8$(예각이므로 코사인은 양수)."
     ]
    }
   ]
  },
  "matice": {
   "title": "2×2 행렬식과 역행렬",
   "summary": "행렬 표기, 2×2 행렬식과 역행렬.",
   "theory": [
    "<p>$m\\times n$ 행렬은 $m$개의 행과 $n$개의 열로 이루어진 수의 표입니다. $i$번째 행, $j$번째 열의 성분은 $a_{ij}$로 나타냅니다.</p>",
    "<p>행렬 $A=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}$의 행렬식은 $\\det A=ad-bc$입니다. $\\det A\\neq 0$이면 역행렬 $A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$가 존재합니다.</p>",
    {
     "fig": "parallelogram",
     "caption": "행렬 $\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$의 열은 벡터 $u=(2,1)$과 $v=(3,4)$입니다. 행렬식의 절댓값은 두 벡터가 만드는 평행사변형의 넓이입니다: $|\\det|=5$."
    },
    "<p>연립일차방정식은 $Ax=b$로 쓸 수 있고, 역행렬을 이용해 $x=A^{-1}b$로 풀 수 있습니다.</p>"
   ],
   "examples": [
    {
     "task": "$\\det\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}$를 계산하세요.",
     "steps": [
      "$\\det = 2\\cdot 4-3\\cdot 1 = 8-3 = 5$."
     ]
    }
   ]
  },
  "sucin": {
   "title": "행렬의 곱셈",
   "summary": "행렬을 곱하는 방법과 순서가 중요한 이유.",
   "theory": [
    "<p>곱 $C=AB$는 $A$의 열의 개수가 $B$의 행의 개수와 같을 때 존재합니다. $i$번째 행, $j$번째 열의 성분은 $c_{ij}=\\sum_k a_{ik}b_{kj}$입니다. 즉 행렬 $A$의 행과 행렬 $B$의 열을 성분끼리 곱해서 더합니다.</p>",
    {
     "fig": "matmul",
     "caption": "성분 $c_{11}$은 $A$의 1행과 $B$의 1열로 만들어집니다: $1\\cdot 0+2\\cdot 1=2$."
    },
    "<p>행렬의 곱셈은 <strong>교환법칙이 성립하지 않습니다</strong>. 일반적으로 $AB\\neq BA$입니다.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$일 때 $AB$를 계산하세요.",
     "steps": [
      "$c_{11}=1\\cdot 0+2\\cdot 1=2$, $c_{12}=1\\cdot 1+2\\cdot 0=1$.",
      "$c_{21}=3\\cdot 0+4\\cdot 1=4$, $c_{22}=3\\cdot 1+4\\cdot 0=3$.",
      "<strong>답:</strong> $AB=\\begin{pmatrix}2&amp;1\\\\4&amp;3\\end{pmatrix}$"
     ]
    }
   ]
  },
  "derivacie": {
   "title": "함수의 미분",
   "summary": "순간변화율, 미분법, 접선.",
   "theory": [
    "<p>미분계수 $f'(x_0)$는 극한 $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$가 존재할 때 그 값입니다. 기하학적으로는 점 $x_0$에서 $f$의 그래프에 그은 접선의 기울기입니다.</p>",
    {
     "fig": "tangent",
     "caption": "$f(x)=x^3-2x$의 그래프와 점 $x_0$에서의 접선. 접선의 기울기는 $f'(x_0)=3x_0^2-2$입니다. 접선이 수평인 곳에서 미분계수는 0입니다."
    },
    "<p>미분법: $(x^n)'=n\\,x^{n-1}$, $(c)'=0$, $(c\\,f)'=c\\,f'$, $(f+g)'=f'+g'$, $(f\\cdot g)'=f'g+fg'$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=x^3-2x$일 때 $f'(2)$를 구하세요.",
     "steps": [
      "$f'(x)=3x^2-2$.",
      "$f'(2)=3\\cdot 2^2-2=12-2=10$."
     ]
    }
   ]
  },
  "integraly": {
   "title": "적분의 기초",
   "summary": "부정적분과 정적분, 뉴턴-라이프니츠 공식.",
   "theory": [
    "<p>함수 $f$의 부정적분(원시함수) $F$는 $F'(x)=f(x)$를 만족합니다. 부정적분: $\\int f(x)\\,dx=F(x)+C$. $n\\neq -1$이면 $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$가 성립합니다.</p>",
    "<p>정적분은 <strong>뉴턴-라이프니츠 공식</strong>으로 계산합니다: $\\int_a^b f(x)\\,dx=F(b)-F(a)$. 기하학적으로는 $a$부터 $b$까지 $f$의 그래프 아래 넓이입니다($f$가 양수일 때).</p>",
    {
     "fig": "area",
     "caption": "$0$부터 $b$까지 $f(x)=x^2$의 그래프 아래 넓이는 $\\int_0^b x^2\\,dx=\\frac{b^3}{3}$입니다."
    },
    "<p>선형성: $\\int (c\\,f+g)\\,dx=c\\int f\\,dx+\\int g\\,dx$.</p>"
   ],
   "examples": [
    {
     "task": "$\\int_0^2 3x^2\\,dx$를 계산하세요.",
     "steps": [
      "원시함수: $F(x)=x^3$.",
      "$F(2)-F(0)=8-0=8$.",
      "<strong>답: 8</strong>"
     ]
    }
   ]
  }
 },
 "strings": {
  "$A={@0}$, $B={@1}$. Aký prvok má súčin $AB$ v riadku {@2} a stĺpci {@3}?": "$A={@0}$, $B={@1}$일 때, 곱 $AB$의 {@2}행 {@3}열 성분은 무엇일까요?",
  "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$, teda $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$.": "$\\cos^2\\alpha=1-\\frac{{@0}}{{@1}}=\\frac{{@2}}{{@3}}$이므로 $\\cos\\alpha=\\frac{{@4}}{{@5}}\\approx {@6}$이에요.",
  "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — výsledok zadaj ako zlomok v tvare $p/q$ (napr. 5/6).": "$\\frac{{@0}}{{@1}}+\\frac{{@2}}{{@3}}$ — 결과를 $p/q$ 꼴의 분수로 입력하세요(예: 5/6).",
  "$b^2=c^2-a^2={@0}-{@1}={@2}$, teda $b={@3}$.": "$b^2=c^2-a^2={@0}-{@1}={@2}$이므로 $b={@3}$이에요.",
  "$c^2=a^2+b^2={@0}+{@1}={@2}$, teda $c={@3}$.": "$c^2=a^2+b^2={@0}+{@1}={@2}$이므로 $c={@3}$이에요.",
  "$f'(x)={@0}x^{{@1}}{@2}$, teda $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$.": "$f'(x)={@0}x^{{@1}}{@2}$이므로 $f'({@3})={@4}\\cdot({@5})^{{@6}}{@7}={@8}$이에요.",
  "$p\\,\\%$ z čísla $x$ je $\\frac{p}{100}\\cdot x$.": "$x$의 $p\\,\\%$는 $\\frac{p}{100}\\cdot x$예요.",
  "${@0}\\,\\%=\\frac{{@1}}{100}$, teda $\\frac{{@2}}{100}\\cdot {@3}={@4}$.": "${@0}\\,\\%=\\frac{{@1}}{100}$이므로 $\\frac{{@2}}{100}\\cdot {@3}={@4}$이에요.",
  "${@0}x={@1}{@2}={@3}$, teda $x={@4}$.": "${@0}x={@1}{@2}={@3}$이므로 $x={@4}$이에요.",
  "25 štvorčekov zo 100": "100칸 중 25칸",
  "Aký exponent bude mať výsledok ${@0}^{\\square}$?": "결과 ${@0}^{\\square}$의 지수는 얼마일까요?",
  "Aký je spoločný menovateľ (súčin menovateľov ${@0}\\cdot {@1}$)?": "공통분모(분모의 곱 ${@0}\\cdot {@1}$)는 얼마일까요?",
  "Aký je súčet koreňov $x_1 + x_2$ (podľa Vietových vzťahov)?": "두 근의 합 $x_1 + x_2$는 얼마일까요(근과 계수의 관계)?",
  "Aký je súčin koreňov $x_1 \\cdot x_2$?": "두 근의 곱 $x_1 \\cdot x_2$는 얼마일까요?",
  "Derivácia je $f'(x)=k\\,x^{{@0}}{@1}$. Aký je koeficient $k$?": "도함수는 $f'(x)=k\\,x^{{@0}}{@1}$이에요. 계수 $k$는 얼마일까요?",
  "Determinant ako obsah rovnobežníka": "평행사변형의 넓이로서의 행렬식",
  "Dosadil si do pôvodnej funkcie $f$. Najprv funkciu zderivuj a až potom dosaď.": "원래 함수 $f$에 대입했어요. 먼저 함수를 미분한 다음에 대입하세요.",
  "Dosadil si do pôvodnej funkcie. Najprv nájdi primitívnu funkciu $F$ a dosaď do nej.": "원래 함수에 대입했어요. 먼저 부정적분 $F$를 구한 다음 거기에 대입하세요.",
  "Dosadil si len hornú hranicu. Od $F({@0})$ ešte odčítaj $F({@1})$.": "위끝만 대입했어요. $F({@0})$에서 $F({@1})$을 빼야 해요.",
  "Dosadil si priemer ${@0}$. Vo vzorci $\\pi r^2$ je polomer $r={@1}$.": "지름 ${@0}$을 대입했어요. 공식 $\\pi r^2$에서 반지름은 $r={@1}$이에요.",
  "Druhý súčin: koľko je ${@0}\\cdot {@1}$?": "두 번째 곱: ${@0}\\cdot {@1}$은 얼마일까요?",
  "Dĺžky si len odčítal. Pytagorova veta platí pre druhé mocniny: $b^2=c^2-a^2$.": "길이를 그냥 뺐어요. 피타고라스 정리는 제곱에 대해 성립해요: $b^2=c^2-a^2$.",
  "Exponenty si sčítal. Pri umocňovaní mocniny sa exponenty násobia.": "지수를 더했어요. 거듭제곱을 다시 거듭제곱할 때는 지수를 곱해요.",
  "Exponenty si vynásobil. Pri násobení mocnín s rovnakým základom sa exponenty sčítajú.": "지수를 곱했어요. 밑이 같은 거듭제곱을 곱할 때는 지수를 더해요.",
  "Graf funkcie s dotyčnicou": "함수의 그래프와 접선",
  "Graf kvadratickej funkcie": "이차함수의 그래프",
  "Horná hranica b": "위끝 b",
  "Hľadaj dve čísla, ktorých súčin je $q$ a súčet je $-p$.": "곱이 $q$이고 합이 $-p$인 두 수를 찾으세요.",
  "Identita platí pre druhé mocniny: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$, nie $\\cos\\alpha = 1 - \\sin\\alpha$.": "이 항등식은 제곱에 대해 성립해요: $\\cos^2\\alpha = 1 - \\sin^2\\alpha$이지, $\\cos\\alpha = 1 - \\sin\\alpha$가 아니에요.",
  "Jednotková kružnica": "단위원",
  "Koeficient {@0} si odčítal. Pri $x$ je násobenie, preto obe strany vydeľ číslom {@1}.": "계수 {@0}을 뺐어요. $x$에는 곱셈이 걸려 있으므로 양변을 {@1}로 나누세요.",
  "Korene vyšli dvakrát väčšie. Vo vzorci $x=\\frac{-p\\pm\\sqrt{D}}{2}$ nezabudni deliť dvomi.": "근이 두 배로 크게 나왔어요. 공식 $x=\\frac{-p\\pm\\sqrt{D}}{2}$에서 2로 나누는 것을 잊지 마세요.",
  "Koľko je $1\\,\\%$ z čísla {@0}?": "{@0}의 $1\\,\\%$는 얼마일까요?",
  "Koľko je $F({@0}) - F({@1})$?": "$F({@0}) - F({@1})$은 얼마일까요?",
  "Koľko je $F({@0})$?": "$F({@0})$은 얼마일까요?",
  "Koľko je $\\cos\\alpha$ (ostrý uhol, kladná odmocnina) na 3 desatinné miesta?": "$\\cos\\alpha$(예각, 양의 제곱근)를 소수 셋째 자리까지 구하면 얼마일까요?",
  "Koľko je $\\cos^2\\alpha = 1 - \\sin^2\\alpha$? Zadaj ako zlomok.": "$\\cos^2\\alpha = 1 - \\sin^2\\alpha$는 얼마일까요? 분수로 입력하세요.",
  "Koľko je $\\pi\\cdot {@0}$ (použi $\\pi\\approx 3{{@1}}14$)?": "$\\pi\\cdot {@0}$은 얼마일까요($\\pi\\approx 3{{@1}}14$를 사용하세요)?",
  "Koľko je $\\sin^2\\alpha$? Zadaj ako zlomok (napr. 9/25).": "$\\sin^2\\alpha$는 얼마일까요? 분수로 입력하세요(예: 9/25).",
  "Koľko je $a^2 = {@0}^2$?": "$a^2 = {@0}^2$은 얼마일까요?",
  "Koľko je $b = \\sqrt{{@0}}$?": "$b = \\sqrt{{@0}}$는 얼마일까요?",
  "Koľko je $b^2 = {@0} - {@1}$?": "$b^2 = {@0} - {@1}$은 얼마일까요?",
  "Koľko je $b^2 = {@0}^2$?": "$b^2 = {@0}^2$은 얼마일까요?",
  "Koľko je $c = \\sqrt{{@0}}$?": "$c = \\sqrt{{@0}}$는 얼마일까요?",
  "Koľko je $c^2 = {@0} + {@1}$?": "$c^2 = {@0} + {@1}$은 얼마일까요?",
  "Koľko je $c^2 = {@0}^2$?": "$c^2 = {@0}^2$은 얼마일까요?",
  "Koľko je $f'({@0})$?": "$f'({@0})$은 얼마일까요?",
  "Koľko je $r^2 = {@0}^2$?": "$r^2 = {@0}^2$은 얼마일까요?",
  "Koľko je $z\\cdot v = {@0}\\cdot {@1}$?": "$z\\cdot v = {@0}\\cdot {@1}$은 얼마일까요?",
  "Koľko je ${@0} + {@1} - {@2}$?": "${@0} + {@1} - {@2}$는 얼마일까요?",
  "Koľko je ${@0} - ({@1})$?": "${@0} - ({@1})$은 얼마일까요?",
  "Koľko je ${@0} : {@1}$?": "${@0} : {@1}$은 얼마일까요?",
  "Koľko je ${@0}\\,\\%$ z čísla ${@1}$?": "${@1}$의 ${@0}\\,\\%$는 얼마일까요?",
  "Koľko je ${@0}\\cdot {@1}$?": "${@0}\\cdot {@1}$은 얼마일까요?",
  "Koľko je ${@0}^{{@1}}$?": "${@0}^{{@1}}$은 얼마일까요?",
  "Koľko je $|A| + |B|$?": "$|A| + |B|$는 얼마일까요?",
  "Koľko je teda ${@0}\\,\\%$ z čísla {@1}?": "그러면 {@1}의 ${@0}\\,\\%$는 얼마일까요?",
  "Kruh má polomer $r={@0}$. Vypočítaj jeho obsah $S$ (použi $\\pi\\approx 3{{@1}}14$).": "원의 반지름이 $r={@0}$이에요. 원의 넓이 $S$를 구하세요($\\pi\\approx 3{{@1}}14$를 사용하세요).",
  "Ktoré dve čísla majú súčet {@0} a súčin {@1}? Zadaj ich oddelené bodkočiarkou.": "합이 {@0}이고 곱이 {@1}인 두 수는 무엇일까요? 세미콜론으로 구분해서 입력하세요.",
  "Matice sa nenásobia po prvkoch na rovnakom mieste. Riadok matice $A$ vynásob so stĺpcom matice $B$ a súčiny sčítaj.": "행렬은 같은 위치의 성분끼리 곱하지 않아요. 행렬 $A$의 행과 행렬 $B$의 열을 곱하고 그 곱들을 더하세요.",
  "Menovateľ si zmenil na spoločný, ale čitatele si nerozšíril. Čitateľ vynásob tým istým číslom ako menovateľ.": "분모는 공통분모로 바꿨지만 분자는 바꾸지 않았어요. 분자에도 분모에 곱한 수와 같은 수를 곱하세요.",
  "Množina $A$ má ${@0}$ prvkov, množina $B$ má ${@1}$ prvkov a ich prienik má ${@2}$ prvkov. Koľko prvkov má $A\\cup B$?": "집합 $A$의 원소는 ${@0}$개, 집합 $B$의 원소는 ${@1}$개이고, 교집합의 원소는 ${@2}$개예요. $A\\cup B$의 원소는 몇 개일까요?",
  "Najprv násobenie a delenie: ${@0}\\cdot {@1} = {@2}$ a ${@3} : {@4} = {@5}$. Potom ${@6} + {@7} - {@8} = {@9}$.": "먼저 곱셈과 나눗셈: ${@0}\\cdot {@1} = {@2}$, ${@3} : {@4} = {@5}$. 그다음 ${@6} + {@7} - {@8} = {@9}$.",
  "Najprv odčítaj konštantu na oboch stranách, potom vydeľ koeficientom pri $x$.": "먼저 양변에서 상수를 빼고, 그다음 $x$의 계수로 나누세요.",
  "Najprv počítaj násobenie a delenie, až potom sčítanie a odčítanie.": "곱셈과 나눗셈을 먼저 계산하고, 그다음에 덧셈과 뺄셈을 계산하세요.",
  "Násobil si prvky v stĺpcoch. Násob po diagonálach: $a\\cdot d$ a $b\\cdot c$.": "열 방향으로 성분을 곱했어요. 대각선 방향으로 곱하세요: $a\\cdot d$와 $b\\cdot c$.",
  "Obdĺžnik má strany $a={@0}$ a $b={@1}$. Aký je jeho obsah $S$?": "직사각형의 두 변이 $a={@0}$, $b={@1}$이에요. 넓이 $S$는 얼마일까요?",
  "Obdĺžnik, trojuholník a kruh": "직사각형, 삼각형, 원",
  "Obsah kruhu je $\\pi r^2$.": "원의 넓이는 $\\pi r^2$이에요.",
  "Obsah obdĺžnika je súčin dĺžok dvoch susedných strán.": "직사각형의 넓이는 이웃한 두 변의 길이의 곱이에요.",
  "Obsah trojuholníka je polovica súčinu základne a výšky.": "삼각형의 넓이는 밑변과 높이의 곱의 절반이에요.",
  "Odvesny si len sčítal. Pytagorova veta platí pre druhé mocniny: $c^2=a^2+b^2$.": "두 직각변을 그냥 더했어요. 피타고라스 정리는 제곱에 대해 성립해요: $c^2=a^2+b^2$.",
  "Ostrý uhol $\\alpha$ spĺňa $\\sin\\alpha=\\frac{{@0}}{{@1}}$. Vypočítaj $\\cos\\alpha$ (na 3 desatinné miesta).": "예각 $\\alpha$가 $\\sin\\alpha=\\frac{{@0}}{{@1}}$을 만족해요. $\\cos\\alpha$를 구하세요(소수 셋째 자리까지).",
  "Plocha pod grafom funkcie": "함수의 그래프 아래 넓이",
  "Použi $(x^n)'=n\\,x^{n-1}$ a derivuj každý člen zvlášť.": "$(x^n)'=n\\,x^{n-1}$을 이용해 각 항을 따로 미분하세요.",
  "Použi $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$ a potom Newton-Leibnizovu formulu.": "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}$을 이용한 다음 뉴턴-라이프니츠 공식을 쓰세요.",
  "Použi Pytagorovu vetu $c^2=a^2+b^2$.": "피타고라스 정리 $c^2=a^2+b^2$을 이용하세요.",
  "Použi identitu $\\sin^2\\alpha+\\cos^2\\alpha=1$.": "항등식 $\\sin^2\\alpha+\\cos^2\\alpha=1$을 이용하세요.",
  "Pozri si tabuľku hodnôt v teórii.": "이론 부분의 값 표를 보세요.",
  "Počítal si zľava doprava. Násobenie a delenie majú prednosť pred sčítaním a odčítaním.": "왼쪽에서 오른쪽으로 계산했어요. 곱셈과 나눗셈은 덧셈과 뺄셈보다 먼저 해요.",
  "Pravouhlý trojuholník má odvesny $a={@0}$ a $b={@1}$. Aká je dĺžka prepony $c$?": "직각삼각형의 두 직각변이 $a={@0}$, $b={@1}$이에요. 빗변 $c$의 길이는 얼마일까요?",
  "Pravouhlý trojuholník má preponu $c={@0}$ a odvesnu $a={@1}$. Aká je dĺžka druhej odvesny $b$?": "직각삼각형의 빗변이 $c={@0}$, 한 직각변이 $a={@1}$이에요. 다른 직각변 $b$의 길이는 얼마일까요?",
  "Pravouhlý trojuholník s popisom strán": "변 이름이 표시된 직각삼각형",
  "Pre $2\\times 2$ matica je $\\det=ad-bc$.": "$2\\times 2$ 행렬에서 $\\det=ad-bc$예요.",
  "Pre funkciu $f(x)={@0}x^{{@1}}{@2}$ vypočítaj $f'({@3})$.": "함수 $f(x)={@0}x^{{@1}}{@2}$에 대해 $f'({@3})$을 구하세요.",
  "Prenes konštantu na pravú stranu. Koľko je ${@0}x$?": "상수를 우변으로 옮기세요. ${@0}x$는 얼마일까요?",
  "Pri násobení mocnín rovnakého základu sa exponenty sčítajú.": "밑이 같은 거듭제곱을 곱할 때는 지수를 더해요.",
  "Pri prenesení čísla {@0} na druhú stranu si nezmenil znamienko. Na oboch stranách urob tú istú opačnú operáciu.": "수 {@0}을 반대쪽으로 옮길 때 부호를 바꾸지 않았어요. 양변에 같은 반대 연산을 하세요.",
  "Pri umocňovaní mocniny sa exponenty násobia.": "거듭제곱을 다시 거듭제곱할 때는 지수를 곱해요.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$, teda $F({@3})-F({@4})={@5}$.": "부정적분은 $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$이므로 $F({@3})-F({@4})={@5}$예요.",
  "Primitívna funkcia je $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$. Koľko je $F({@3})$?": "부정적분은 $F(x)=\\frac{{@0}}{{@1}}x^{{@2}}$이에요. $F({@3})$은 얼마일까요?",
  "Prvky prieniku sa rátajú dvakrát, preto ich odčítaj.": "교집합의 원소는 두 번 세어지므로 한 번 빼세요.",
  "Prvky prieniku si odčítal dvakrát. Do zjednotenia patria – odčítaj ich len raz.": "교집합의 원소를 두 번 뺐어요. 그 원소들도 합집합에 속하니까 한 번만 빼세요.",
  "Prvky prieniku si započítal dvakrát – sú v $A$ aj v $B$. Raz ich odčítaj.": "교집합의 원소를 두 번 셌어요. $A$에도 $B$에도 있으니까요. 한 번 빼세요.",
  "Prvky prieniku sú v tomto súčte dvakrát. Koľko je ${@0} - {@1}$?": "이 합에는 교집합의 원소가 두 번 들어 있어요. ${@0} - {@1}$은 얼마일까요?",
  "Prvý súčin: koľko je ${@0}\\cdot {@1}$?": "첫 번째 곱: ${@0}\\cdot {@1}$은 얼마일까요?",
  "Pytagorova veta: štvorce nad stranami": "피타고라스 정리: 각 변 위의 정사각형",
  "Rozšír druhý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "두 번째 분수를 분모가 {@0}이 되도록 통분하세요. 분자는 얼마가 될까요?",
  "Rozšír prvý zlomok na menovateľa {@0}. Aký bude jeho čitateľ?": "첫 번째 분수를 분모가 {@0}이 되도록 통분하세요. 분자는 얼마가 될까요?",
  "Spoločný menovateľ je ${@0}$: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.": "공통분모는 ${@0}$이에요: $\\frac{{@1}}{{@2}}+\\frac{{@3}}{{@4}}=\\frac{{@5}}{{@6}}${@7}.",
  "Strany si sčítal. Obsah obdĺžnika dostaneš ich vynásobením.": "변의 길이를 더했어요. 직사각형의 넓이는 두 변을 곱해서 구해요.",
  "Súčet: koľko je ${@0} + {@1}$?": "합: ${@0} + {@1}$은 얼마일까요?",
  "Súčin matíc: riadok krát stĺpec": "행렬의 곱: 행 곱하기 열",
  "Súčin na hlavnej diagonále: koľko je $({@0})\\cdot({@1})$?": "주대각선의 곱: $({@0})\\cdot({@1})$은 얼마일까요?",
  "Súčin na vedľajšej diagonále: koľko je $({@0})\\cdot({@1})$?": "부대각선의 곱: $({@0})\\cdot({@1})$은 얼마일까요?",
  "Súčiny si sčítal. Determinant je rozdiel: súčin na hlavnej diagonále mínus súčin na vedľajšej.": "두 곱을 더했어요. 행렬식은 차예요: 주대각선의 곱 빼기 부대각선의 곱.",
  "Sčítaj čitatele a zapíš výsledok ako zlomok $p/q$.": "분자를 더하고 결과를 분수 $p/q$로 쓰세요.",
  "Sčítal si čitatele aj menovatele. Zlomky sa sčítajú až po prevedení na spoločného menovateľa – menovateľ sa nesčítava.": "분자는 분자끼리, 분모는 분모끼리 더했어요. 분수는 공통분모로 통분한 다음에 더하고, 분모는 더하지 않아요.",
  "To je $\\cos^2\\alpha$. Na konci ešte odmocni.": "그건 $\\cos^2\\alpha$예요. 마지막에 제곱근을 구하세요.",
  "To je $b^2$. Na konci ešte odmocni.": "그건 $b^2$이에요. 마지막에 제곱근을 구하세요.",
  "To je $c^2$. Na konci ešte odmocni.": "그건 $c^2$이에요. 마지막에 제곱근을 구하세요.",
  "To je hodnota {@0} uhla ${@1}^\\circ$. Sínus s rastúcim uhlom rastie od 0 po 1, kosínus klesá od 1 po 0.": "그건 ${@1}^\\circ$의 {@0} 값이에요. 각이 커지면 사인은 0에서 1로 커지고, 코사인은 1에서 0으로 작아져요.",
  "To je obvod (súčet všetkých strán). Obsah je súčin dvoch susedných strán.": "그건 둘레(모든 변의 합)예요. 넓이는 이웃한 두 변의 곱이에요.",
  "To je obvod kruhu $2\\pi r$. Obsah je $\\pi r^2$.": "그건 원의 둘레 $2\\pi r$이에요. 넓이는 $\\pi r^2$이에요.",
  "To je zvyšok do 100 %. Pýtame sa na samotných ${@0}\\,\\%$ z čísla {@1}.": "그건 100 %까지 남은 부분이에요. 묻는 것은 {@1}의 ${@0}\\,\\%$ 자체예요.",
  "Trojuholník je polovica obdĺžnika. Koľko je ${@0} : 2$?": "삼각형은 직사각형의 절반이에요. ${@0} : 2$는 얼마일까요?",
  "Trojuholník má základňu $z={@0}$ a výšku $v={@1}$. Aký je jeho obsah $S$?": "삼각형의 밑변이 $z={@0}$, 높이가 $v={@1}$이에요. 넓이 $S$는 얼마일까요?",
  "Uhol α (°)": "각 α (°)",
  "Vennov diagram dvoch množín": "두 집합의 벤 다이어그램",
  "Vezmi $i$-tý riadok matice $A$ a $j$-tý stĺpec matice $B$ a vynásob ich po zložkách.": "행렬 $A$의 $i$번째 행과 행렬 $B$의 $j$번째 열을 성분별로 곱하세요.",
  "Vietove vzťahy: $x_1+x_2={@0}$ a $x_1\\cdot x_2={@1}$. Korene sú $x_1={@2}$ a $x_2={@3}$.": "근과 계수의 관계: $x_1+x_2={@0}$, $x_1\\cdot x_2={@1}$. 근은 $x_1={@2}$, $x_2={@3}$이에요.",
  "Vydeľ obe strany číslom {@0}. Koľko je $x$?": "양변을 {@0}로 나누세요. $x$는 얼마일까요?",
  "Vypočítaj $({@0}^{{@1}})^{{@2}}$.": "$({@0}^{{@1}})^{{@2}}$를 계산하세요.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$.": "$\\displaystyle\\int_{{@0}}^{{@1}} {@2}x^{{@3}}\\,dx$를 계산하세요.",
  "Vypočítaj ${@0}\\,{@1}^\\circ$ ako desatinné číslo (na 3 desatinné miesta).": "${@0}\\,{@1}^\\circ$를 소수로 구하세요(소수 셋째 자리까지).",
  "Vypočítaj ${@0}^{{@1}}\\cdot {@2}^{{@3}}$.": "${@0}^{{@1}}\\cdot {@2}^{{@3}}$을 계산하세요.",
  "Vypočítaj determinant $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$.": "행렬식 $\\det\\begin{pmatrix}{@0}&{@1}\\\\{@2}&{@3}\\end{pmatrix}$를 계산하세요.",
  "Vyrieš rovnicu $x^2{@0}{@1} = 0$. Zadaj oba korene oddelené bodkočiarkou (napr. 2; 3).": "방정식 $x^2{@0}{@1} = 0$을 푸세요. 두 근을 세미콜론으로 구분해서 입력하세요(예: 2; 3).",
  "Vyrieš rovnicu ${@0}x{@1} = {@2}$.": "방정식 ${@0}x{@1} = {@2}$를 푸세요.",
  "Z Pytagorovej vety vyjadri $b^2=c^2-a^2$.": "피타고라스 정리에서 $b^2=c^2-a^2$으로 나타내세요.",
  "Z matice $B$ si vzal riadok. Prvok súčinu je {@0}. riadok matice $A$ krát {@1}. stĺpec matice $B$.": "행렬 $B$에서 행을 가져왔어요. 곱의 성분은 행렬 $A$의 {@0}번째 행 곱하기 행렬 $B$의 {@1}번째 열이에요.",
  "Zabudol si deliť dvomi. Trojuholník je polovica obdĺžnika so stranami $z$ a $v$.": "2로 나누는 것을 잊었어요. 삼각형은 두 변이 $z$와 $v$인 직사각형의 절반이에요.",
  "Zabudol si deliť číslom {@0}: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.": "{@0}로 나누는 것을 잊었어요: $\\int x^{{@1}}\\,dx=\\frac{x^{{@2}}}{{@3}}$.",
  "Zabudol si exponent {@0} dať pred $x$: $(x^{{@1}})'={@2}x^{{@3}}$.": "지수 {@0}을 $x$ 앞으로 내리는 것을 잊었어요: $(x^{{@1}})'={@2}x^{{@3}}$.",
  "Zabudol si na delenie. Neodčítavaš {@0}, ale až výsledok ${@1} : {@2}$.": "나눗셈을 잊었어요. {@0}을 빼는 게 아니라 ${@1} : {@2}$의 결과를 빼야 해요.",
  "Zabudol si polomer umocniť na druhú: obsah je $\\pi\\cdot r\\cdot r$.": "반지름을 제곱하는 것을 잊었어요: 넓이는 $\\pi\\cdot r\\cdot r$이에요.",
  "Zlomky ako pruhy": "막대로 나타낸 분수",
  "Zlomky daj na spoločného menovateľa: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.": "분수를 통분하세요: $\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$.",
  "Základy si vynásobil. Základ {@0} ostáva, sčítajú sa len exponenty.": "밑을 곱했어요. 밑 {@0}은 그대로이고 지수만 더해요.",
  "b = {@0} · <span class=\"c-accent\">obsah = b³/3 = {@1}</span>": "b = {@0} · <span class=\"c-accent\">넓이 = b³/3 = {@1}</span>",
  "korene x₁ = {@0}, x₂ = {@1}": "근 x₁ = {@0}, x₂ = {@1}",
  "kosínusu": "코사인",
  "kruh": "원",
  "napr. 5/6": "예: 5/6",
  "nemá reálne korene (D &lt; 0)": "실근이 없음 (D &lt; 0)",
  "obdĺžnik": "직사각형",
  "odvesna": "직각변",
  "prepona": "빗변",
  "prirodzené čísla ℕ": "자연수 ℕ",
  "priľahlá odvesna": "이웃변",
  "protiľahlá": "대변",
  "sínusu": "사인",
  "trojuholník": "삼각형",
  "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (smernica dotyčnice)": "x₀ = {@0} · f(x₀) = {@1} · <span class=\"c-accent\">f′(x₀) = {@2}</span> (접선의 기울기)",
  "y = x²{@0}{@1} · D = {@2} · {@3}": "y = x²{@0}{@1} · D = {@2} · {@3}",
  "záporné celé čísla": "음의 정수",
  "Člen ${@0}x$ si nezderivoval. Jeho derivácia je {@1}.": "항 ${@0}x$를 미분하지 않았어요. 그 도함수는 {@1}이에요.",
  "Číselná os": "수직선",
  "Číslo si vydelil počtom percent. ${@0}\\,\\%$ znamená {@1} stotín, preto najprv nájdi 1 % (vydeľ 100) a potom násob {@2}.": "수를 퍼센트 값으로 나눴어요. ${@0}\\,\\%$는 100분의 {@1}이라는 뜻이니까, 먼저 1 %를 구하고(100으로 나누기) 그다음 {@2}을 곱하세요.",
  "Štvorec rozdelený na 100 dielov, 25 je vyfarbených": "100칸으로 나뉜 정사각형, 25칸이 색칠됨",
  "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>": "α = {@0}° · <span class=\"c-ok\">sin α = {@1}</span> · <span class=\"c-accent\">cos α = {@2}</span>"
 }
});
