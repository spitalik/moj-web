/* 한국어: preklad js/rocniky/v7.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/v7/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "v7-chyby": {
   "title": "오차와 계산의 정확도",
   "summary": "절대오차와 상대오차, 유효숫자, 기계수와 기계 엡실론, 오차의 전파, 문제의 조건과 뺄셈에서의 정밀도 손실.",
   "theory": [
    "<p>수치 계산의 결과는 거의 언제나 <strong>근삿값</strong>일 뿐입니다. 오차는 여러 곳에서 생깁니다: <em>모형</em>\n       (현실을 단순화한 묘사), <em>입력 자료</em>(측정), <em>방법</em>(급수나 극한 같은 무한 과정을 유한 과정으로 바꿈 — 방법오차\n       또는 이산화 오차), 그리고 유한 자릿수로 계산할 때의 <em>반올림</em>.</p>\n       <p>$x$가 참값이고 $\\tilde{x}$가 그 근삿값이면 <strong>절대오차</strong>는 $\\Delta = |x-\\tilde{x}|$이고 <strong>상대오차</strong>는\n       $\\delta = \\frac{|x-\\tilde{x}|}{|x|}$($x\\neq 0$일 때)이며, 흔히 백분율로 나타냅니다. 보통은 참값을 모르므로 오차의 <em>어림</em>(한계),\n       즉 $|x-\\tilde{x}|\\le\\varepsilon$을 만족하는 수 $\\varepsilon$을 다루고 $x=\\tilde{x}\\pm\\varepsilon$으로 씁니다. 상대오차는 단위에 의존하지 않으므로 더 중요합니다.\n       1 mm의 오차는 다리의 길이에서는 무시할 만하지만 철판의 두께에서는 엄청납니다.</p>",
    "<p><strong>유효숫자.</strong> 근삿값 $\\tilde{x}$에서 $10^{-k}$ 자리의 숫자는 $|x-\\tilde{x}|\\le\\frac{1}{2}\\cdot 10^{-k}$일 때 <em>유효</em>(믿을 수 있는) 숫자입니다.\n       유효숫자의 개수는 왼쪽에서 처음 나오는 0이 아닌 숫자부터 마지막 유효숫자까지 셉니다. 예를 들어 오차가 많아야 $0.004$인 $\\tilde{x}=23.4718$은 소수 둘째 자리까지 유효하므로\n       ($0.004\\le 0.005$) 유효숫자는 2, 3, 4, 7의 네 개입니다. 소수 $k$째 자리로 <strong>반올림</strong>하면 오차는 많아야 $\\frac{1}{2}\\cdot 10^{-k}$이므로,\n       올바르게 반올림한 수는 적힌 숫자가 모두 유효숫자입니다.</p>",
    "<p><strong>기계수.</strong> 컴퓨터는 실수를 부동소수점 형식 $\\pm m\\cdot\\beta^{e}$로 저장합니다. 여기서 $\\beta$는 밑, 가수 $m$은 고정된 개수\n       $t$의 자릿수를 가지며, 지수 $e$는 제한된 범위에 있습니다. IEEE 754 표준의 배정밀도(double)는 $\\beta=2$, 가수 $t=53$비트를 쓰며 지수는\n       대략 $-1022$부터 $1023$까지입니다. 기계수의 집합은 유한하며, 그 범위를 벗어나면 <em>오버플로</em>(너무 큰 수) 또는 <em>언더플로</em>(너무 작은 수)가 일어납니다.</p>\n       <p><strong>기계 엡실론</strong> $\\varepsilon_M$은 1과 그다음으로 큰 기계수 사이의 거리입니다. double에서는 $\\varepsilon_M=2^{-52}\\approx 2.22\\cdot 10^{-16}$입니다.\n       실수를 기계수로 반올림하면 $\\mathrm{fl}(x)=x(1+\\eta)$가 되며, 여기서 $|\\eta|\\le u=\\frac{\\varepsilon_M}{2}$(단위 반올림 오차)입니다.\n       따라서 double은 약 15~16자리의 유효 십진숫자를 가집니다. 수 $0.1$조차 이진법으로는 유한하게 나타낼 수 없으므로, 예를 들어 $0.1+0.2$는 정확히 $0.3$이 아닙니다.</p>",
    "<p><strong>오차의 전파.</strong> 입력 오차의 어림에 대해 (선형 근사로) 다음이 성립합니다.\n       $$\\Delta(x\\pm y)\\le\\Delta x+\\Delta y,\\qquad \\delta(xy)\\approx\\delta x+\\delta y,\\qquad \\delta\\!\\left(\\tfrac{x}{y}\\right)\\approx\\delta x+\\delta y,\\qquad \\delta(x^n)\\approx |n|\\,\\delta x.$$\n       함수 $y=f(x)$에 대해서는 $\\Delta y\\approx|f'(x)|\\,\\Delta x$, 다변수 함수에 대해서는 $\\Delta y\\approx\\sum_i\\left|\\frac{\\partial f}{\\partial x_i}\\right|\\Delta x_i$입니다.\n       즉 덧셈에서는 절대오차가, 곱셈과 나눗셈에서는 상대오차가 더해집니다.</p>\n       <p><strong>조건.</strong> 입력의 작은 상대 변화가 결과의 작은 상대 변화만 일으키면 문제는 <em>조건이 좋다</em>고 합니다. 그 척도는\n       <strong>조건수</strong> $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$이며, $\\delta y\\approx\\kappa\\,\\delta x$입니다. 예를 들어 $f(x)=\\ln x$의 조건수는 $\\kappa=\\frac{1}{|\\ln x|}$로,\n       $x$가 1에 가까우면 큰 수입니다. 1에 가까운 수의 로그는 조건이 나쁜 문제입니다. 조건은 <em>문제</em>의 성질이고, <em>안정성</em>은\n       <em>알고리즘</em>의 성질입니다. 안정한 알고리즘은 반올림 오차를 문제의 조건에 해당하는 정도보다 더 키우지 않습니다.</p>",
    "<p><strong>뺄셈에서의 정밀도 손실.</strong> 가까운 두 수의 차는 조건이 나쁩니다: $\\delta(x-y)\\le\\frac{|x|\\,\\delta x+|y|\\,\\delta y}{|x-y|}$이고 분모가 작습니다.\n       공통인 앞자리 숫자들이 뺄셈으로 사라지고, 남은 숫자들에는 오차가 실립니다(이른바 <em>파국적 상쇄</em>). 뺄셈을 없애는 대수적 변형이 도움이 됩니다.\n       $$\\sqrt{x+1}-\\sqrt{x}=\\frac{1}{\\sqrt{x+1}+\\sqrt{x}},\\qquad 1-\\cos x=\\frac{2\\sin^2\\frac{x}{2}}{1},\\qquad x_{1,2}:\\ x_1=\\frac{-b-\\operatorname{sgn}(b)\\sqrt{D}}{2a},\\ x_2=\\frac{c}{a\\,x_1}.$$</p>"
   ],
   "examples": [
    {
     "task": "수 $\\pi$를 값 $3.14$로 바꿉니다. 근삿값의 절대오차와 상대오차, 유효숫자의 개수를 구하세요.",
     "steps": [
      "$\\Delta=|\\pi-3.14|=|3.14159\\ldots-3.14|\\approx 0.00159$.",
      "$\\delta=\\frac{0.00159}{3.14159}\\approx 0.000507=0.0507\\,\\%$.",
      "$0.00159\\le 0.005=\\frac{1}{2}\\cdot 10^{-2}$이므로 소수 둘째 자리까지 유효합니다. 근삿값 $3.14$의 유효숫자는 <strong>3개</strong>입니다."
     ]
    },
    {
     "task": "방정식 $x^2-200x+1=0$의 작은 근은 $x=100-\\sqrt{9999}$입니다. 유효숫자 4자리 산술로 이 값을 그대로 계산하고, 또 뺄셈을 없애는 변형을 한 뒤 계산하세요.",
     "steps": [
      "유효숫자 4자리로 $\\sqrt{9999}=99.99499\\ldots\\approx 100.0$입니다. 그대로 계산하면 $100-100.0=0$이 되어 모든 숫자를 잃고, 상대오차는 100 %입니다.",
      "식을 유리화합니다: $100-\\sqrt{9999}=\\frac{(100-\\sqrt{9999})(100+\\sqrt{9999})}{100+\\sqrt{9999}}=\\frac{1}{100+\\sqrt{9999}}$.",
      "이제 $\\frac{1}{100+100.0}=\\frac{1}{200.0}=0.005000$입니다. 참값은 $0.0050001250\\ldots$이므로 결과의 4자리가 모두 유효숫자입니다.",
      "문제 자체는 조건이 좋았고, 나빴던 것은 알고리즘(가까운 수의 뺄셈)뿐입니다."
     ]
    }
   ]
  },
  "v7-rovnice": {
   "title": "방정식의 수치적 풀이",
   "summary": "근의 분리, 이분법, 단순 반복법, 뉴턴 방법과 할선법, 수렴 차수와 종료 조건.",
   "theory": [
    "<p>공식으로 나타낼 수 없는 방정식 $f(x)=0$의 근 $\\xi$를 구합니다(예: $x=\\cos x$ 또는 $x^5-x-1=0$). 먼저 근을 <strong>분리</strong>합니다. 즉 근이 정확히 하나 있는 구간\n       $[a, b]$를 찾습니다. <strong>볼차노 정리</strong>(사잇값 정리)에 따르면 $f(a)\\,f(b)&lt;0$인 연속함수는 구간 $(a, b)$에 적어도 하나의 근을 가집니다. 게다가\n       $f'$의 부호가 $[a, b]$에서 바뀌지 않으면 근은 하나뿐입니다.</p>\n       <p><strong>이분법(구간 반분법).</strong> 중점 $c=\\frac{a+b}{2}$를 계산합니다. $f(a)\\,f(c)&lt;0$이면 $[a, c]$로, 그렇지 않으면 $[c, b]$로 계속합니다. 각 단계마다\n       구간이 절반이 되므로 $n$단계 후 길이는 $\\frac{b-a}{2^n}$입니다. 길이를 많아야 $\\varepsilon$으로 하려면 $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$단계가 필요합니다.\n       이 방법은 느리지만 <em>항상</em> 수렴하며, 함숫값의 부호만 있으면 됩니다.</p>",
    "<p><strong>단순 반복법.</strong> 방정식을 $x=g(x)$ 꼴로 바꾸고 $x_{k+1}=g(x_k)$를 계산합니다. $g$가 구간 $I$를 자기 자신으로 보내고\n       $I$에서 $|g'(x)|\\le q&lt;1$이면, $g$는 $I$에서 유일한 <em>고정점</em> $\\xi$를 가지며 수열은 모든 시작점 $x_0\\in I$에 대해 그 고정점으로 수렴합니다(바나흐 고정점 정리).\n       다음 어림이 성립합니다.\n       $$|x_k-\\xi|\\le\\frac{q^k}{1-q}\\,|x_1-x_0|,\\qquad |x_k-\\xi|\\le\\frac{q}{1-q}\\,|x_k-x_{k-1}|.$$\n       꼴의 선택이 중요합니다. 방정식 $x^2-2=0$은 $x=\\frac{2}{x}$(반복값이 진동, $|g'(\\sqrt{2})|=1$)로도, $x=\\frac{1}{2}\\left(x+\\frac{2}{x}\\right)$(매우 빠른 수렴)로도 쓸 수 있습니다.</p>",
    "<p><strong>뉴턴 방법(접선법).</strong> 점 $x_k$에서 함수의 그래프를 접선으로 바꾸고, 접선과 $x$축의 교점을 다음 근삿값으로 삼습니다.\n       $$x_{k+1}=x_k-\\frac{f(x_k)}{f'(x_k)}.$$\n       단순근($f'(\\xi)\\neq 0$)이고 시작점이 근에 충분히 가까우면 <strong>2차 수렴</strong>합니다: $|x_{k+1}-\\xi|\\approx\\frac{|f''(\\xi)|}{2|f'(\\xi)|}\\,|x_k-\\xi|^2$.\n       유효숫자의 개수가 단계마다 대략 두 배가 됩니다. <em>푸리에 조건:</em> $f'$과 $f''$의 부호가 $[a, b]$에서 바뀌지 않고 $f(x_0)\\,f''(x_0)&gt;0$인 끝점에서 시작하면\n       반복값은 단조롭게 수렴합니다. 시작점이 나쁘면 방법이 멀리 튀어 나갈 수 있고, 중근에서는 선형으로만 수렴합니다.</p>",
    {
     "fig": "v7-newton",
     "caption": "$f(x)=x^2-2$에 대한 뉴턴 방법: 점 $(x_k, f(x_k))$에서 접선을 긋고, 그 접선과 $x$축의 교점이 $x_{k+1}$입니다. 세 단계만 지나도 $\\sqrt{2}$의 근삿값의 오차는 $10^{-6}$에서 $10^{-12}$ 정도가 됩니다."
    },
    "<p><strong>할선법</strong>은 도함수를 마지막 두 근삿값의 차분몫으로 바꿉니다.\n       $$x_{k+1}=x_k-f(x_k)\\,\\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}.$$\n       도함수가 필요 없고 차수 $\\frac{1+\\sqrt{5}}{2}\\approx 1.618$로 수렴합니다. 할선을 항상 (이분법처럼) 부호가 반대인 점들을 지나도록 그으면\n       <em>가위치법(regula falsi)</em>이 되며, 이 방법은 항상 수렴하지만 대개 선형으로만 수렴합니다.</p>\n       <p><strong>수렴 차수.</strong> $|x_{k+1}-\\xi|\\le C\\,|x_k-\\xi|^p$이면 방법의 차수는 $p$입니다. $p=1$(선형 수렴)이면 $C&lt;1$이어야 합니다. 이분법과 단순 반복법은\n       1차, 할선법은 $1.618$차, 뉴턴 방법은 2차입니다. <strong>종료 조건:</strong> $|x_{k+1}-x_k|&lt;\\varepsilon$, 상대적으로 $|x_{k+1}-x_k|&lt;\\varepsilon\\,|x_{k+1}|$,\n       $|f(x_k)|&lt;\\delta$, 그리고 항상 최대 반복 횟수도 둡니다. 함수가 매우 평평하면 $|f(x_k)|$가 작다는 것만으로 근에 가깝다고 보장할 수 없습니다.</p>"
   ],
   "examples": [
    {
     "task": "뉴턴 방법으로 함수 $f(x)=x^2-5$의 근으로서 $\\sqrt{5}$를 구하세요. 점 $x_0=2$에서 시작하여 두 단계를 계산하세요.",
     "steps": [
      "$f'(x)=2x$이므로 $x_{k+1}=x_k-\\frac{x_k^2-5}{2x_k}=\\frac{1}{2}\\left(x_k+\\frac{5}{x_k}\\right)$.",
      "$x_1=\\frac{1}{2}\\left(2+\\frac{5}{2}\\right)=2.25$.",
      "$x_2=2.25-\\frac{2.25^2-5}{4.5}=2.25-\\frac{0.0625}{4.5}\\approx 2.236111$.",
      "참값은 $\\sqrt{5}=2.236068\\ldots$입니다. 오차가 $0.014$에서 $0.00004$로 줄었으며, 이는 2차 수렴에 해당합니다."
     ]
    },
    {
     "task": "이분법으로 구간 $[1, 2]$에서 방정식 $x^3-x-1=0$의 근의 위치를 좁히세요(세 단계). 길이가 많아야 $10^{-6}$인 구간을 얻으려면 몇 단계가 필요할까요?",
     "steps": [
      "$f(1)=-1&lt;0$, $f(2)=5&gt;0$이므로 근은 $[1, 2]$에 있습니다.",
      "$f(1.5)=0.875&gt;0$ → $[1, 1.5]$. $f(1.25)\\approx-0.297&lt;0$ → $[1.25, 1.5]$. $f(1.375)\\approx 0.225&gt;0$ → $[1.25, 1.375]$.",
      "$n$단계 후 구간의 길이는 $2^{-n}$입니다. 조건 $2^{-n}\\le 10^{-6}$에서 $n\\ge 6\\log_2 10\\approx 19.93$이므로 <strong>20단계</strong>가 필요합니다.",
      "근은 $\\xi\\approx 1.3247$입니다. 뉴턴 방법이라면 같은 정확도를 4~5단계 만에 얻었을 것입니다."
     ]
    }
   ]
  },
  "v7-interpolacia": {
   "title": "보간과 근사",
   "summary": "라그랑주 꼴과 뉴턴 꼴의 보간다항식, 분할차분, 보간 오차, 룽게 현상과 최소제곱법.",
   "theory": [
    "<p><strong>보간 문제.</strong> 서로 다른 <em>노드</em> $x_0, x_1, \\dots, x_n$과 값 $y_0, y_1, \\dots, y_n$(예: 측정값이나 표의 값)이 주어져 있습니다.\n       모든 $i$에 대해 $P_n(x_i)=y_i$인 차수가 많아야 $n$인 다항식 $P_n$을 구합니다. 그런 다항식은 존재하며 <strong>오직 하나</strong>입니다. 조건들은\n       방데르몽드 행렬을 갖는 연립방정식을 이루고, 그 행렬식 $\\prod_{i&lt;j}(x_j-x_i)$는 0이 아니기 때문입니다. 이 다항식으로 노드 사이의 값을 계산합니다.</p>",
    "<p><strong>라그랑주 꼴.</strong> 각 노드에 대해 그 노드에서 1이고 다른 노드에서 0인 기저다항식을 만듭니다.\n       $$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j},\\qquad P_n(x)=\\sum_{i=0}^{n}y_i\\,\\ell_i(x).$$\n       노드가 두 개이면 <em>선형 보간</em> $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$를 얻습니다. 라그랑주 꼴은 알아보기 쉽지만, 노드를 추가하면 모두 다시 계산해야 합니다.</p>",
    "<p><strong>뉴턴 꼴과 분할차분.</strong> 분할차분은 점화식으로 정의합니다.\n       $$f[x_i]=y_i,\\quad f[x_i, x_{i+1}]=\\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i},\\quad f[x_i, \\dots, x_{i+k}]=\\frac{f[x_{i+1}, \\dots, x_{i+k}]-f[x_i, \\dots, x_{i+k-1}]}{x_{i+k}-x_i}.$$\n       그러면\n       $$P_n(x)=f[x_0]+f[x_0, x_1](x-x_0)+f[x_0, x_1, x_2](x-x_0)(x-x_1)+\\dots+f[x_0, \\dots, x_n](x-x_0)\\cdots(x-x_{n-1}).$$\n       차분은 삼각형 표에서 계산하며, 노드를 하나 더 추가하면 항을 하나만 더하면 됩니다. 다항식의 값은 호너 방법으로 효율적으로 계산합니다.</p>",
    "<p><strong>보간 오차.</strong> $f$가 연속인 $n+1$계 도함수를 가지면, 각 $x$에 대해 $x$와 노드들을 포함하는 가장 작은 구간 안에 다음을 만족하는 $\\xi$가 존재합니다.\n       $$f(x)-P_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\,\\omega(x),\\qquad \\omega(x)=(x-x_0)(x-x_1)\\cdots(x-x_n).$$\n       여기서 어림 $|f(x)-P_n(x)|\\le\\frac{M_{n+1}}{(n+1)!}|\\omega(x)|$를 얻으며, $M_{n+1}=\\max|f^{(n+1)}|$입니다. 간격이 $h$인 선형 보간의 오차는 많아야 $\\frac{M_2h^2}{8}$입니다.\n       등간격 노드에서 차수를 높이는 것이 도움이 되지 않을 수도 있습니다. $[-1, 1]$에서 함수 $\\frac{1}{1+25x^2}$의 보간다항식은 양 끝에서 심하게 진동합니다(<strong>룽게 현상</strong>).\n       해결책은 양 끝으로 갈수록 촘촘해지는 체비쇼프 노드나 구간별 다항식 보간(스플라인)입니다.</p>",
    "<p><strong>최소제곱법.</strong> 측정 자료에는 오차가 있으므로, 자료를 지나는 고차 다항식이 아니라 자료를\n       <em>근사</em>하는 간단한 함수를 구하려고 합니다. 편차의 제곱합 $S(a, b)=\\sum_{i=1}^{n}(y_i-ax_i-b)^2$이 최소가 되도록 직선 $y=ax+b$를 정합니다. 조건\n       $\\frac{\\partial S}{\\partial a}=\\frac{\\partial S}{\\partial b}=0$에서 <strong>정규방정식</strong>\n       $$a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i,\\qquad a\\sum x_i+b\\,n=\\sum y_i$$\n       를 얻고, 그 해는 $a=\\frac{n\\sum x_iy_i-\\sum x_i\\sum y_i}{n\\sum x_i^2-\\left(\\sum x_i\\right)^2}$, $b=\\frac{\\sum y_i-a\\sum x_i}{n}$입니다. 이 직선은 자료의 무게중심 $(\\bar{x}, \\bar{y})$를 지납니다.</p>"
   ],
   "examples": [
    {
     "task": "점 $(0, 1)$, $(1, 3)$, $(3, 2)$를 지나는 보간다항식의 $x=2$에서의 값을 라그랑주 꼴과 뉴턴 꼴로 각각 구하세요.",
     "steps": [
      "라그랑주: $\\ell_0(2)=\\frac{(2-1)(2-3)}{(0-1)(0-3)}=-\\frac{1}{3}$, $\\ell_1(2)=\\frac{(2-0)(2-3)}{(1-0)(1-3)}=1$, $\\ell_2(2)=\\frac{(2-0)(2-1)}{(3-0)(3-1)}=\\frac{1}{3}$.",
      "$P(2)=1\\cdot\\left(-\\frac{1}{3}\\right)+3\\cdot 1+2\\cdot\\frac{1}{3}=\\frac{10}{3}\\approx 3.333$.",
      "뉴턴: $f[0, 1]=\\frac{3-1}{1}=2$, $f[1, 3]=\\frac{2-3}{2}=-\\frac{1}{2}$, $f[0, 1, 3]=\\frac{-\\frac{1}{2}-2}{3-0}=-\\frac{5}{6}$.",
      "$P(x)=1+2x-\\frac{5}{6}x(x-1)$이므로 $P(2)=1+4-\\frac{5}{6}\\cdot 2=\\frac{10}{3}$입니다. 같은 다항식을 다르게 쓴 것입니다."
     ]
    },
    {
     "task": "최소제곱법으로 점 $(0, 1)$, $(1, 2)$, $(2, 4)$, $(3, 4)$에 맞는 직선을 구하세요.",
     "steps": [
      "$n=4$, $\\sum x_i=6$, $\\sum y_i=11$, $\\sum x_i^2=14$, $\\sum x_iy_i=0+2+8+12=22$.",
      "$a=\\frac{4\\cdot 22-6\\cdot 11}{4\\cdot 14-6^2}=\\frac{22}{20}=1.1$.",
      "$b=\\frac{11-1.1\\cdot 6}{4}=\\frac{4.4}{4}=1.1$.",
      "구하는 직선은 $y=1.1x+1.1$이며, 무게중심 $(1.5, 2.75)$를 지납니다."
     ]
    }
   ]
  },
  "v7-derivacia-integracia": {
   "title": "수치미분과 수치적분",
   "summary": "전진차분과 중심차분, 간격의 선택, 중점법, 사다리꼴 공식, 심프슨 공식, 정확도의 차수와 오차 어림.",
   "theory": [
    "<p><strong>수치미분.</strong> 테일러 전개 $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(x)+\\dots$로부터 다음 공식을 얻습니다.\n       $$\\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x)}{h}}_{\\text{전진차분, 오차 }-\\frac{h}{2}f''(\\xi)},\\qquad\n       \\underbrace{f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}}_{\\text{중심차분, 오차 }-\\frac{h^2}{6}f'''(\\xi)}.$$\n       전진차분(과 후진차분 $\\frac{f(x)-f(x-h)}{h}$)의 <strong>정확도 차수는 1</strong>, 중심차분은 <strong>2</strong>입니다. 간격을 절반으로 하면 오차는 각각 약\n       2배, 4배 줄어듭니다. 이계도함수에는 오차가 $O(h^2)$인 $f''(x)\\approx\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}$를 씁니다.</p>",
    "<p><strong>간격의 선택.</strong> 간격을 한없이 줄일 수는 없습니다. 분자에서 가까운 두 값을 빼므로 반올림 오차는 $\\frac{\\varepsilon_M|f(x)|}{h}$ 정도이고\n       $h$가 작아질수록 <em>커집니다</em>. 전진차분의 전체 오차 $\\approx\\frac{M_2h}{2}+\\frac{2\\varepsilon_M|f|}{h}$는 대략 $h\\approx\\sqrt{\\varepsilon_M}\\approx 10^{-8}$에서 가장 작고,\n       중심차분에서는 $h\\approx\\sqrt[3]{\\varepsilon_M}\\approx 10^{-5}$에서 가장 작습니다. 따라서 수치미분은 적분과 달리 조건이 나쁜 문제입니다.</p>",
    "<p><strong>구적 공식.</strong> 구간 $[a, b]$를 간격 $h=\\frac{b-a}{n}$인 $n$개의 소구간으로 나누고, 노드를 $x_i=a+ih$, $f_i=f(x_i)$로 둡니다. 각 소구간에서 함수를\n       다항식으로 바꾸고 그것을 정확히 적분합니다.</p>\n       <ul><li><strong>중점법(직사각형 공식)</strong> $M_n=h\\sum_{i=1}^{n}f\\!\\left(x_{i-1}+\\frac{h}{2}\\right)$, 오차 $\\frac{(b-a)h^2}{24}f''(\\xi)$;</li>\n       <li><strong>사다리꼴 공식</strong> $T_n=\\frac{h}{2}\\left(f_0+2f_1+2f_2+\\dots+2f_{n-1}+f_n\\right)$, 오차 $-\\frac{(b-a)h^2}{12}f''(\\xi)$;</li>\n       <li><strong>심프슨 공식</strong>($n$은 짝수, 소구간 두 개마다 포물선) $S_n=\\frac{h}{3}\\left(f_0+4f_1+2f_2+4f_3+\\dots+2f_{n-2}+4f_{n-1}+f_n\\right)$, 오차 $-\\frac{(b-a)h^4}{180}f^{(4)}(\\xi)$.</li></ul>",
    {
     "fig": "v7-lichobeznik",
     "caption": "$[0, 4]$에서 $f(x)=2+\\sin 1.5x+0.3x$에 대한 사다리꼴 공식. 소구간의 수를 늘리며 오차가 대략 간격의 제곱에 비례하여 줄어드는 것을 관찰하세요. $n$이 짝수이면 심프슨 공식의 결과도 표시됩니다."
    },
    "<p><strong>정확도의 차수.</strong> 복합 공식의 오차는 $Ch^p$처럼 행동합니다. 중점법과 사다리꼴 공식은 $p=2$(간격 절반 → 오차 4분의 1),\n       심프슨 공식은 $p=4$(16분의 1)이며, 심프슨 공식은 3차 이하의 다항식에 대해 정확합니다. 중점법의 오차는 사다리꼴 공식의 오차의 약 절반이고 부호가 반대이므로\n       $S_{2n}=\\frac{2M_n+T_n}{3}$입니다. 간격 $h$와 $\\frac{h}{2}$로 두 번 계산하면 <strong>룽게 규칙</strong> $I-T_{2n}\\approx\\frac{T_{2n}-T_n}{3}$으로 오차를 어림할 수 있으며,\n       개선된 결과 $\\frac{4T_{2n}-T_n}{3}$은 바로 심프슨 공식입니다(리처드슨 외삽, 롬베르크 방법의 바탕).</p>"
   ],
   "examples": [
    {
     "task": "$f(x)=e^x$에 대해 간격 $h=0.1$로 전진차분과 중심차분을 써서 $f'(0)$을 어림하고 오차를 비교하세요.",
     "steps": [
      "전진차분: $\\frac{e^{0.1}-1}{0.1}=\\frac{0.105171}{0.1}\\approx 1.051709$, 오차 $\\approx 0.0517$.",
      "중심차분: $\\frac{e^{0.1}-e^{-0.1}}{0.2}\\approx\\frac{1.105171-0.904837}{0.2}\\approx 1.001668$, 오차 $\\approx 0.0017$.",
      "참값은 $f'(0)=1$입니다. 오차 어림 $\\frac{h}{2}f''=0.05$와 $\\frac{h^2}{6}f'''\\approx 0.0017$은 결과와 잘 맞습니다."
     ]
    },
    {
     "task": "$\\displaystyle\\int_0^1\\frac{dx}{1+x^2}=\\frac{\\pi}{4}\\approx 0.785398$을 $n=2$로 사다리꼴 공식과 심프슨 공식을 써서 계산하세요.",
     "steps": [
      "$h=0.5$, $f(0)=1$, $f(0.5)=0.8$, $f(1)=0.5$.",
      "$T_2=\\frac{0.5}{2}(1+2\\cdot 0.8+0.5)=0.25\\cdot 3.1=0.775$, 오차 $\\approx 0.0104$.",
      "$S_2=\\frac{0.5}{3}(1+4\\cdot 0.8+0.5)=\\frac{0.5\\cdot 4.7}{3}\\approx 0.783333$, 오차 $\\approx 0.0021$.",
      "함숫값을 계산하는 횟수가 같을 때 심프슨 공식이 훨씬 더 정확합니다."
     ]
    }
   ]
  },
  "v7-ode": {
   "title": "미분방정식의 수치적 풀이",
   "summary": "초깃값 문제(코시 문제), 오일러 방법, 호인 방법(개량 오일러 방법), 4차 룽게–쿠타 방법, 국소 오차와 전역 오차, 간격의 선택과 안정성.",
   "theory": [
    "<p>대개 해석적으로 풀 수 없는 <strong>초깃값 문제(코시 문제)</strong> $y'=f(x, y)$, $y(x_0)=y_0$을 풉니다. <strong>간격</strong> $h$와 노드 $x_k=x_0+kh$를 정하고\n       근삿값 $y_k\\approx y(x_k)$를 차례로 계산합니다. 일단계 방법은 순서쌍 $(x_k, y_k)$만으로 $y_{k+1}$을 계산합니다. <strong>국소 오차</strong>는 ($y_k$가 정확하다고 가정할 때)\n       한 단계의 오차이고, <strong>전역 오차</strong> $y(x_k)-y_k$는 노드에서 누적된 오차입니다. 국소 오차가 $O(h^{p+1})$이면 $\\frac{X-x_0}{h}$단계 후\n       전역 오차는 $O(h^p)$이고, 이때 방법의 <strong>차수</strong>가 $p$라고 합니다.</p>",
    "<p><strong>오일러 방법.</strong> 소구간 $[x_k, x_{k+1}]$에서 해를 방향장의 기울기 $f(x_k, y_k)$를 갖는 접선으로 바꿉니다.\n       $$y_{k+1}=y_k+h\\,f(x_k, y_k).$$\n       가장 간단한 1차 방법으로, 국소 오차는 $\\frac{h^2}{2}y''(\\xi)$, 전역 오차는 $O(h)$입니다. 간격을 절반으로 해도 오차는 약 절반으로만 줄어들기 때문에 실제로는\n       더 정확한 방법의 출발점으로 주로 쓰입니다.</p>",
    {
     "fig": "v7-euler",
     "caption": "$[0, 2]$에서의 문제 $y'=y$, $y(0)=1$과 정확한 해 $y=e^x$(검은 곡선). 오일러 방법(파란색)은 체계적으로 뒤처지고, 호인 방법(초록색)은 같은 간격에서 훨씬 더 정확합니다. 단계 수를 늘리며 오차가 얼마나 빨리 줄어드는지 비교해 보세요."
    },
    "<p><strong>호인 방법(개량 오일러 방법)</strong>은 예측자–수정자 방식입니다. 오일러 단계로 소구간 끝의 값을 어림한 다음 기울기를 평균합니다.\n       $$\\tilde{y}_{k+1}=y_k+h\\,f(x_k, y_k),\\qquad y_{k+1}=y_k+\\frac{h}{2}\\left(f(x_k, y_k)+f(x_{k+1}, \\tilde{y}_{k+1})\\right).$$\n       이는 사다리꼴 공식에 해당하며 <strong>차수는 2</strong>입니다. 비슷한 방법으로 <em>수정 오일러 방법(중점법)</em> $y_{k+1}=y_k+h\\,f\\!\\left(x_k+\\frac{h}{2}, y_k+\\frac{h}{2}f(x_k, y_k)\\right)$가 있습니다.</p>\n       <p><strong>4차 룽게–쿠타 방법(RK4)</strong>은 각 단계에서 네 개의 기울기\n       $$k_1=f(x_k, y_k),\\ k_2=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_1\\right),\\ k_3=f\\!\\left(x_k+\\tfrac{h}{2}, y_k+\\tfrac{h}{2}k_2\\right),\\ k_4=f(x_k+h, y_k+hk_3)$$\n       를 계산하고 그 가중평균 $y_{k+1}=y_k+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$를 취합니다. 심프슨 공식과 비슷합니다. 간격을 절반으로 하면 오차는 약 16분의 1이 됩니다.</p>",
    "<p><strong>간격과 오차.</strong> 차수가 $p$인 방법의 전역 오차는 대략 $Ch^p$입니다. 간격 $h$와 $\\frac{h}{2}$로 두 번 계산하면 <strong>룽게 규칙</strong>\n       $y(X)-y_{h/2}\\approx\\frac{y_{h/2}-y_h}{2^p-1}$로 오차를 어림할 수 있습니다. 현대의 프로그램은 간격을 조정합니다(적응형 간격, 예를 들어 차수가 다른 룽게–쿠타 방법의 쌍).\n       간격이 작다고 항상 결과가 좋아지는 것은 아닙니다. 연산 횟수와 반올림 오차도 늘어납니다.</p>\n       <p><strong>안정성.</strong> $\\lambda&lt;0$인 시험 방정식 $y'=\\lambda y$에 대해 오일러 방법은 $y_{k+1}=(1+h\\lambda)y_k$를 줍니다. 수치해는\n       $|1+h\\lambda|&lt;1$, 즉 $h&lt;\\frac{2}{|\\lambda|}$일 때만 0으로 줄어듭니다. 간격이 더 크면 정확한 해는 빠르게 줄어드는데도 수치해는 진동하며 커집니다. 따라서 시간 척도가 매우 다른 방정식\n       (<em>강성</em> 방정식)은 음함수적 방법으로 풉니다. 예를 들어 음함수적 오일러 방법 $y_{k+1}=y_k+h\\,f(x_{k+1}, y_{k+1})$은 모든 $h&gt;0$에 대해 안정합니다.</p>"
   ],
   "examples": [
    {
     "task": "문제 $y'=y$, $y(0)=1$을 간격 $h=0.5$로 오일러 방법과 호인 방법을 써서 $x=1$까지 풀고 $e\\approx 2.71828$과 비교하세요.",
     "steps": [
      "오일러: $y_1=1+0.5\\cdot 1=1.5$, $y_2=1.5+0.5\\cdot 1.5=2.25$, 오차 $\\approx 0.468$.",
      "호인, 1단계: 예측자 $\\tilde{y}_1=1.5$, $y_1=1+0.25\\,(1+1.5)=1.625$.",
      "호인, 2단계: $\\tilde{y}_2=1.625+0.5\\cdot 1.625=2.4375$, $y_2=1.625+0.25\\,(1.625+2.4375)=2.640625$, 오차 $\\approx 0.078$.",
      "같은 간격에서 호인 방법이 약 6배 더 정확합니다."
     ]
    },
    {
     "task": "문제 $y'=x+y$, $y(0)=1$에 대해 간격 $h=0.1$로 RK4 방법을 한 단계 계산하세요. 정확한 해는 $y=2e^x-x-1$입니다.",
     "steps": [
      "$k_1=f(0, 1)=1$, $k_2=f(0.05,\\ 1+0.05\\cdot 1)=0.05+1.05=1.1$.",
      "$k_3=f(0.05,\\ 1+0.05\\cdot 1.1)=0.05+1.055=1.105$, $k_4=f(0.1,\\ 1+0.1\\cdot 1.105)=0.1+1.1105=1.2105$.",
      "$y_1=1+\\frac{0.1}{6}(1+2.2+2.21+1.2105)=1+\\frac{0.66205}{6}\\approx 1.1103417$.",
      "참값은 $y(0.1)=2e^{0.1}-1.1\\approx 1.1103418$이므로 오차는 약 $10^{-7}$입니다."
     ]
    }
   ]
  },
  "v7-matice": {
   "title": "행렬 계산 알고리즘",
   "summary": "피벗 선택을 하는 가우스 소거법, LU 분해, 직접법의 계산량, 야코비 반복법과 가우스–자이델 반복법, 지배적 고윳값을 구하는 거듭제곱법.",
   "theory": [
    "<p><strong>가우스 소거법</strong>은 $n\\times n$ 정칙행렬을 갖는 연립방정식 $Ax=b$를 두 단계로 풉니다. <em>전진 소거</em>에서는 $k=1, \\dots, n-1$에 대해\n       행 $i&gt;k$에서 $k$번째 행에 <strong>승수</strong> $l_{ik}=\\frac{a_{ik}}{a_{kk}}$를 곱한 것을 빼서 대각선 아래를 0으로 만들고, 행렬을\n       상삼각행렬로 바꿉니다. <em>후진 대입</em>으로 아래에서 위로 대입하며 $x_n, x_{n-1}, \\dots, x_1$을 계산합니다.</p>\n       <p><em>피벗</em> $a_{kk}$가 0이거나 매우 작으면 승수가 엄청나게 커지고 반올림 오차가 늘어납니다. 그래서\n       <strong>부분 피벗 선택</strong>을 씁니다. $k$번째 단계 전에 행을 바꾸어 $|a_{kk}|$가 $k$번째 열의 대각선과 그 아래에서 가장 크게 만듭니다. 그러면 $|l_{ik}|\\le 1$입니다.</p>",
    "<p><strong>LU 분해.</strong> 전진 소거의 승수들은 대각성분이 1인 하삼각행렬 $L$을 이루고, 결과로 얻은 상삼각행렬이 $U$입니다. 이때\n       $A=LU$입니다(피벗 선택을 하면 $PA=LU$, 여기서 $P$는 치환행렬). 연립방정식은 두 개의 삼각 연립방정식으로 풉니다.\n       $$Ly=b\\ \\text{(전진 대입)},\\qquad Ux=y\\ \\text{(후진 대입)}.$$\n       같은 행렬에 우변만 다른 연립방정식을 여러 개 풀 때 분해가 유리합니다. 행렬식 $\\det A=\\pm u_{11}u_{22}\\cdots u_{nn}$도 얻습니다.\n       대칭 양의 정부호 행렬에는 더 효율적인 <em>숄레스키 분해</em> $A=LL^{T}$가 있습니다.</p>",
    "<p><strong>계산량.</strong> 가우스 소거법의 전진 소거에는 약 $\\frac{2}{3}n^3$번의 산술 연산이 들고, 각 삼각 대입에는 약 $n^2$번이 듭니다. 크기가 두 배가 되면\n       소거 시간은 약 8배가 됩니다. 연립방정식을 풀기 위해 역행렬(약 $2n^3$번의 연산)을 계산할 필요는 없습니다. 띠 너비가 $w$인 <em>띠</em>행렬에서는 비용이\n       $O(nw^2)$로, 삼중대각행렬에서는 $O(n)$으로 줄어듭니다. 큰 <em>희소</em>행렬(대부분의 성분이 0)에서는 소거가 0을 채워 버리므로 반복법을 씁니다.</p>",
    "<p><strong>반복법.</strong> $i$번째 방정식에서 $x_i$를 나타내고 이전 근삿값을 대입합니다. <strong>야코비 방법</strong>은 이전 단계의 값만 쓰고,\n       <strong>가우스–자이델 방법</strong>은 이미 새로 계산한 성분을 바로 사용합니다.\n       $$x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j\\neq i}a_{ij}x_j^{(k)}\\Big),\\qquad x_i^{(k+1)}=\\frac{1}{a_{ii}}\\Big(b_i-\\sum_{j&lt;i}a_{ij}x_j^{(k+1)}-\\sum_{j&gt;i}a_{ij}x_j^{(k)}\\Big).$$\n       행렬이 <strong>순대각지배</strong>이면(모든 행에 대해 $|a_{ii}|&gt;\\sum_{j\\neq i}|a_{ij}|$) 두 방법 모두 모든 시작점에 대해 수렴하고, 가우스–자이델 방법은 대칭\n       양의 정부호 행렬에 대해서도 수렴합니다. 한 단계의 연산 횟수는 행렬의 0이 아닌 성분의 개수 정도입니다. $\\|x^{(k+1)}-x^{(k)}\\|&lt;\\varepsilon$이거나 잔차 $\\|b-Ax^{(k)}\\|$가 작으면 멈춥니다.</p>",
    "<p><strong>거듭제곱법.</strong> 행렬 $A$의 고윳값이 $|\\lambda_1|&gt;|\\lambda_2|\\ge\\dots\\ge|\\lambda_n|$이라고 합시다(지배적 고윳값 $\\lambda_1$은 절댓값이 가장 큰 유일한 고윳값).\n       곱셈의 반복 $x^{(k+1)}=\\frac{Ax^{(k)}}{\\|Ax^{(k)}\\|}$은 고유벡터 $v_1$ 방향의 성분을 키우므로, $x^{(k)}$는 $\\left|\\frac{\\lambda_2}{\\lambda_1}\\right|^k$의 속도로 $\\pm v_1$에 가까워집니다.\n       고윳값은 <strong>레일리 몫</strong> $\\lambda_1\\approx\\frac{(x^{(k)})^{T}Ax^{(k)}}{(x^{(k)})^{T}x^{(k)}}$이나 대응하는 성분의 비 $\\frac{(Ax^{(k)})_i}{x_i^{(k)}}$로 어림합니다.\n       절댓값이 가장 작은 고윳값은 <em>역거듭제곱법</em>($A^{-1}$에 대한 거듭제곱법으로, 각 단계에서 LU 분해로 연립방정식을 풉니다)으로 구합니다. 웹 페이지의 순위를 매기는 PageRank도\n       이 원리에 바탕을 둡니다.</p>"
   ],
   "examples": [
    {
     "task": "행렬 $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$의 LU 분해를 구하고 $b=(4,\\ 10,\\ 24)^{T}$에 대해 $Ax=b$를 푸세요.",
     "steps": [
      "1단계: $l_{21}=\\frac{4}{2}=2$, $l_{31}=\\frac{8}{2}=4$; 행들은 $(0, 1, 1)$과 $(0, 3, 5)$로 바뀝니다.",
      "2단계: $l_{32}=\\frac{3}{1}=3$; 세 번째 행은 $(0, 0, 2)$. 따라서 $L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$, $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$.",
      "$Ly=b$: $y_1=4$, $y_2=10-2\\cdot 4=2$, $y_3=24-4\\cdot 4-3\\cdot 2=2$.",
      "$Ux=y$: $x_3=\\frac{2}{2}=1$, $x_2=2-1=1$, $x_1=\\frac{4-1-1}{2}=1$. 해는 $x=(1,\\ 1,\\ 1)^{T}$이고, 덤으로 $\\det A=2\\cdot 1\\cdot 2=4$입니다."
     ]
    },
    {
     "task": "연립방정식 $4x_1-x_2=7$, $x_1+3x_2=5$(해 $x=(2,\\ 1)$)를 점 $(0,\\ 0)$에서 시작하여 야코비 방법과 가우스–자이델 방법으로 각각 두 단계씩 푸세요.",
     "steps": [
      "반복식: $x_1=\\frac{7+x_2}{4}$, $x_2=\\frac{5-x_1}{3}$. 행렬이 대각지배이므로($4&gt;1$, $3&gt;1$) 두 방법 모두 수렴합니다.",
      "야코비: $x^{(1)}=(1.75,\\ 1.6667)$, $x^{(2)}=\\left(\\frac{7+1.6667}{4},\\ \\frac{5-1.75}{3}\\right)=(2.1667,\\ 1.0833)$.",
      "가우스–자이델: $x_1^{(1)}=1.75$, 곧바로 $x_2^{(1)}=\\frac{5-1.75}{3}=1.0833$; $x_1^{(2)}=\\frac{7+1.0833}{4}=2.0208$, $x_2^{(2)}=\\frac{5-2.0208}{3}=0.9931$.",
      "두 단계 후 가우스–자이델 방법의 오차는 약 $0.02$, 야코비 방법은 약 $0.17$입니다."
     ]
    }
   ]
  }
 },
 "strings": {
  "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (Presná hodnota je ${@5}$.)": "$P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)={@0}+\\frac{{@1}}{{@2}}\\cdot {@3}\\approx {@4}$. (정확한 값은 ${@5}$예요.)",
  "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².": "$\\Delta S\\approx\\left|\\frac{\\partial S}{\\partial a}\\right|\\Delta a+\\left|\\frac{\\partial S}{\\partial b}\\right|\\Delta b=b\\,\\Delta a+a\\,\\Delta b={@0}\\cdot {@1}+{@2}\\cdot {@3}={@4}$ cm².",
  "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. Pri mocnine sa relatívna chyba násobí exponentom: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, teda asi ${@6}\\,\\%$.": "$\\delta x=\\frac{{@0}}{{@1}}\\approx {@2}$. 거듭제곱에서는 상대오차에 지수가 곱해져요: $\\delta(x^{{@3}})\\approx {@4}\\,\\delta x\\approx {@5}$, 즉 약 ${@6}\\,\\%$예요.",
  "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. Blízko $\\pi$ je sínus malý a úloha je zle podmienená.": "$\\kappa=\\left|\\frac{x\\cos x}{\\sin x}\\right|=\\left|\\frac{{@0}\\cdot({@1})}{{@2}}\\right|\\approx {@3}$. $\\pi$ 근처에서는 사인 값이 작아서 문제의 조건이 나빠요.",
  "$f''(x)=e^{x}$ je rastúca, preto $M_2=e^{{@0}}\\approx {@1}$.": "$f''(x)=e^{x}$는 증가함수이므로 $M_2=e^{{@0}}\\approx {@1}$이에요.",
  "$f'(x)=1$, teda $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$. Odčítanie blízkych čísel je zle podmienené.": "$f'(x)=1$이므로 $\\kappa=\\left|\\frac{x}{x-{@0}}\\right|=\\frac{{@1}}{{@2}}={@3}$이에요. 가까운 수끼리 빼는 것은 조건이 나빠요.",
  "$f'(x)=2x$, teda $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$. (Presne $\\sqrt{{@5}}\\approx {@6}$.)": "$f'(x)=2x$이므로 $x_1=x_0-\\frac{x_0^2-{@0}}{2x_0}={@1}-\\frac{{@2}}{{@3}}\\approx {@4}$예요. (정확히는 $\\sqrt{{@5}}\\approx {@6}$.)",
  "$f'(x)=\\frac{1}{x}$, teda $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$. {@3}": "$f'(x)=\\frac{1}{x}$이므로 $\\kappa=\\left|\\frac{x\\cdot\\frac{1}{x}}{\\ln x}\\right|=\\frac{1}{|\\ln {@0}|}=\\frac{1}{{@1}}\\approx {@2}$예요. {@3}",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{2\\cdot {@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. 정확히는 $f'({@8})\\approx {@9}$이므로 오차는 약 ${@10}$이에요.",
  "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. Presne $f'({@8})\\approx {@9}$, chyba je asi ${@10}$.": "$f'({@0})\\approx\\frac{f({@1})-f({@2})}{{@3}}=\\frac{{@4}-{@5}}{{@6}}\\approx {@7}$. 정확히는 $f'({@8})\\approx {@9}$이므로 오차는 약 ${@10}$이에요.",
  "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.": "$f(x)=x^3{@0}-{@1}$, $f'(x)=3x^2{@2}$. $f({@3})={@4}$, $f'({@5})={@6}$. $x_1={@7}-\\frac{{@8}}{{@9}}\\approx {@10}$.",
  "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (Presne $\\sqrt{{@6}}\\approx {@7}$.)": "$f(x_0)={@0}$, $f(x_1)={@1}$. $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}={@2}-{@3}\\cdot\\frac{1}{{@4}}\\approx {@5}$. (정확히는 $\\sqrt{{@6}}\\approx {@7}$.)",
  "$f(x_0, y_0)={@0}$, prediktor $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.": "$f(x_0, y_0)={@0}$, 예측값 $\\tilde{y}_1={@1}+{@2}\\cdot {@3}={@4}$, $f(x_1, \\tilde{y}_1)=f({@5};\\ {@6})={@7}$. $y_1=y_0+\\frac{h}{2}\\left(f(x_0, y_0)+f(x_1, \\tilde{y}_1)\\right)={@8}+{@9}\\cdot({@10}+{@11})\\approx {@12}$.",
  "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. Výsledný interval je $[{@5};\\ {@6}]$.": "$f({@0})={@1}&lt;0$, $f({@2})={@3}&gt;0$. {@4}. 최종 구간은 $[{@5};\\ {@6}]$이에요.",
  "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.": "$f[x_0, x_1]=\\frac{{@0}-{@1}}{{@2}-{@3}}={@4}$, $f[x_1, x_2]=\\frac{{@5}-{@6}}{{@7}-{@8}}={@9}$, $f[x_0, x_1, x_2]=\\frac{{@10}-{@11}}{{@12}-{@13}}\\approx {@14}$.",
  "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. Presná hodnota je ${@6}$, chyba asi ${@7}$.": "$h=\\frac{{@0}-{@1}}{{@2}}={@3}$, {@4}{@5}. 정확한 값은 ${@6}$이고, 오차는 약 ${@7}$이에요.",
  "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.": "$k_1=f(0;\\ {@0})={@1}$, $k_2=f({@2};\\ {@3})={@4}$, $k_3=f({@5};\\ {@6})={@7}$, $k_4=f({@8};\\ {@9})={@10}$. $y_1={@11}+\\frac{{@12}}{6}(k_1+2k_2+2k_3+k_4)\\approx {@13}$.",
  "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.": "$n={@0}$, $\\sum x_i={@1}$, $\\sum y_i={@2}$, $\\sum x_i^2={@3}$, $\\sum x_iy_i={@4}$. $a=\\frac{{@5}\\cdot {@6}-{@7}\\cdot {@8}}{{@9}\\cdot {@10}-{@11}^2}=\\frac{{@12}}{{@13}}\\approx {@14}${@15}.",
  "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. Rayleighov podiel: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. Presné dominantné vlastné číslo je $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$.": "$x^{(1)}=Ax^{(0)}=({@0};\\ {@1})^{T}$, $Ax^{(1)}=({@2};\\ {@3})^{T}$. 레일리 몫: $\\frac{{@4}\\cdot {@5}+{@6}\\cdot {@7}}{{@8}^2+{@9}^2}=\\frac{{@10}}{{@11}}\\approx {@12}$. 정확한 지배적 고윳값은 $\\frac{{@13}+\\sqrt{{@14}}}{2}\\approx {@15}$이에요.",
  "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (Počítame v radiánoch a medzivýsledky nezaokrúhľujeme.)": "$x_1=g({@0})\\approx {@1}$, $x_2=g(x_1)\\approx {@2}\\approx {@3}$. (라디안으로 계산하고 중간 결과는 반올림하지 않아요.)",
  "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.": "$y_1=y_0+h\\,f(x_0, y_0)={@0}+{@1}\\cdot {@2}={@3}$. $y_2=y_1+h\\,f(x_1, y_1)={@4}+{@5}\\cdot {@6}\\approx {@7}$.",
  "${@0}$, teda $M_2=1$.": "${@0}$이므로 $M_2=1$이에요.",
  "${@0}\\approx {@1}$, absolútna chyba $\\Delta\\approx {@2}$. Relatívna chyba $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, teda približne ${@7}\\,\\%$.": "${@0}\\approx {@1}$, 절대오차 $\\Delta\\approx {@2}$. 상대오차 $\\delta=\\frac{\\Delta}{|{@3}|}\\approx\\frac{{@4}}{{@5}}\\approx {@6}$, 즉 약 ${@7}\\,\\%$예요.",
  "${@0}\\approx {@1}$, teda $\\Delta=|{@2}-{@3}|\\approx {@4}$.": "${@0}\\approx {@1}$이므로 $\\Delta=|{@2}-{@3}|\\approx {@4}$예요.",
  "(tu len $f_1$)": "(여기서는 $f_1$만)",
  ", ale ${@0}&gt;{@1}$": "이지만 ${@0}&gt;{@1}$",
  "Absolútna chyba je $|x-\\tilde{x}|$. Hodnotu konštanty vezmi s dostatočným počtom cifier (z kalkulačky).": "절대오차는 $|x-\\tilde{x}|$예요. 상수의 값은 충분한 자릿수로(계산기에서) 가져오세요.",
  "Ak je chyba približne $Ch^p$, zmenšenie kroku $k$-krát zmenší chybu $k^p$-krát. Lichobežníková a stredová metóda majú $p=2$, Simpsonova $p=4$.": "오차가 약 $Ch^p$이면 간격을 $k$분의 1로 줄일 때 오차는 $k^p$분의 1로 줄어요. 사다리꼴 공식과 중점 공식은 $p=2$, 심프슨 공식은 $p=4$예요.",
  "Aká je hranica absolútnej chyby obsahu? {@0}": "넓이의 절대오차의 한계는 얼마일까요? {@0}",
  "Aká je relatívna chyba $x^{{@0}}$ v percentách? {@1}": "$x^{{@0}}$의 상대오차는 몇 퍼센트일까요? {@1}",
  "Aká je relatívna chyba v percentách? {@0}": "상대오차는 몇 퍼센트일까요? {@0}",
  "Aký interval dostaneš po druhom kroku?": "두 번째 단계 후에는 어떤 구간을 얻을까요?",
  "Aký interval dostaneš po prvom kroku? (krajné body oddeľ bodkočiarkou)": "첫 번째 단계 후에는 어떤 구간을 얻을까요? (양 끝점을 세미콜론으로 구분)",
  "Aký je krok $h$?": "간격 $h$는 얼마일까요?",
  "Aký je multiplikátor $l_{21}$ (násobok prvej rovnice, ktorý odčítaš od druhej)?": "승수 $l_{21}$(두 번째 방정식에서 빼는 첫 번째 방정식의 배수)은 얼마일까요?",
  "Aký je multiplikátor $l_{32}$ v druhom kroku eliminácie?": "소거의 두 번째 단계에서 승수 $l_{32}$는 얼마일까요?",
  "Aproximácia $\\tilde{x}={@0}$ má absolútnu chybu nanajvýš ${@1}$. Koľko má platných cifier?": "근삿값 $\\tilde{x}={@0}$의 절대오차는 최대 ${@1}$이에요. 유효숫자는 몇 개일까요?",
  "Centrálna diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. Goniometrické funkcie počítaj v radiánoch.": "중심차분: $f'(x)\\approx\\frac{f(x+h)-f(x-h)}{2h}$. 삼각함수는 라디안으로 계산하세요.",
  "Chyba je úmerná $h^{p}$, preto sa zmenší $k^{p}$-krát, nie $k\\cdot p$-krát.": "오차는 $h^{p}$에 비례하므로 $k\\cdot p$분의 1이 아니라 $k^{p}$분의 1로 줄어요.",
  "Chyba lineárnej interpolácie je $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$; za $f''(\\xi)$ dosaď maximum absolútnej hodnoty druhej derivácie na intervale.": "선형보간의 오차는 $\\frac{f''(\\xi)}{2}(x-x_0)(x-x_1)$이에요. $f''(\\xi)$ 대신 구간에서 이계도함수의 절댓값의 최댓값을 대입하세요.",
  "Chyba nie je úmerná samotnému $h$, ale $h^{p}$, kde $p$ je rád presnosti metódy.": "오차는 $h$ 자체가 아니라 $h^{p}$에 비례하며, 여기서 $p$는 방법의 정확도 차수예요.",
  "Chyba sa nezmenšuje úmerne kroku: metóda má rád {@0}, takže chyba je úmerná $h^{{@1}}$.": "오차는 간격에 비례해서 줄지 않아요. 이 방법의 차수는 {@0}이므로 오차는 $h^{{@1}}$에 비례해요.",
  "Chyba {@0} je úmerná $h^{{@1}}$ (rád presnosti {@2}). Pri kroku $\\frac{h}{{@3}}$ sa zmenší ${@4}^{{@5}}={@6}$-krát.": "{@0}의 오차는 $h^{{@1}}$에 비례해요(정확도 차수 {@2}). 간격이 $\\frac{h}{{@3}}$이면 오차는 ${@4}^{{@5}}={@6}$분의 1로 줄어요.",
  "Chyby strán sa nenásobia. Lineárny odhad je $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$.": "변의 오차끼리 곱하는 것이 아니에요. 선형 추정은 $\\Delta S\\approx b\\,\\Delta a + a\\,\\Delta b$예요.",
  "Cifra na mieste $10^{-j}$ je platná, ak chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-j}$. Platí ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}, preto {@4}. Spolu s {@5} {@6} pred desatinnou čiarkou {@7}.": "$10^{-j}$ 자리의 숫자는 오차가 $\\frac{1}{2}\\cdot 10^{-j}$를 넘지 않으면 유효해요. ${@0}\\le {@1}=\\frac{1}{2}\\cdot 10^{{@2}}${@3}이므로 {@4}. 소수점 앞의 숫자 {@5}{@6}와 합하면 {@7}.",
  "Derivácia $x^2 - a$ je $2x$, nie $x$.": "$x^2 - a$의 도함수는 $x$가 아니라 $2x$예요.",
  "Dopredná diferencia: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. Goniometrické funkcie počítaj v radiánoch.": "전진차분: $f'(x)\\approx\\frac{f(x+h)-f(x)}{h}$. 삼각함수는 라디안으로 계산하세요.",
  "Dosaď $x_0$ do $g$, výsledok znova dosaď do $g$. Medzivýsledky nezaokrúhľuj.": "$x_0$을 $g$에 대입하고, 그 결과를 다시 $g$에 대입하세요. 중간 결과는 반올림하지 마세요.",
  "Dosaď do $\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$; derivácia $x-c$ je 1.": "$\\kappa=\\left|\\frac{x f'(x)}{f(x)}\\right|$에 대입하세요. $x-c$의 도함수는 1이에요.",
  "Dosaď do vzorca {@0} diferencie. {@1}": "{@0}차분 공식에 대입하세요. {@1}",
  "Eulerov krok: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, kde $x_k=kh$. Urob dva kroky.": "오일러 단계: $y_{k+1}=y_k+h\\,f(x_k, y_k)$, 여기서 $x_k=kh$예요. 두 단계를 계산하세요.",
  "Eulerova a Heunova metóda pre y' = y, y(0) = 1": "y' = y, y(0) = 1에 대한 오일러 방법과 호인 방법",
  "Eulerova metóda má rád 1, Heunova rád 2, RK4 rád 4. Chyba je približne $Ch^p$.": "오일러 방법은 1차, 호인 방법은 2차, RK4는 4차예요. 오차는 약 $Ch^p$예요.",
  "Eulerovou metódou": "오일러 방법으로",
  "Funkciu $f(x)={@0}$ nahradíme na intervale $[{@1};\\ {@2}]$ lineárnou interpoláciou. Odhadni zhora chybu interpolácie v bode $x={@3}$ pomocou vzorca $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$. {@4}": "함수 $f(x)={@0}$을 구간 $[{@1};\\ {@2}]$에서 선형보간으로 대체해요. 공식 $\\frac{M_2}{2}|(x-x_0)(x-x_1)|$을 이용해 점 $x={@3}$에서 보간 오차의 상한을 추정하세요. {@4}",
  "Gaussova eliminácia sústavy s ${@0}$ neznámymi trvá na istom počítači ${@1}$ s. Približne koľko sekúnd potrvá sústava s ${@2}$ neznámymi (plná matica)?": "어떤 컴퓨터에서 미지수가 ${@0}$개인 연립방정식의 가우스 소거법은 ${@1}$초 걸려요. 미지수가 ${@2}$개인 연립방정식(꽉 찬 행렬)은 대략 몇 초 걸릴까요?",
  "Gaussovou elimináciou vyrieš sústavu {@0}. Zadaj $x_1; x_2; x_3$ oddelené bodkočiarkou.": "가우스 소거법으로 연립방정식 {@0}을(를) 푸세요. $x_1; x_2; x_3$을 세미콜론으로 구분해 입력하세요.",
  "Gaussovou–Seidelovou": "가우스-자이델",
  "Heunovou metódou": "호인 방법으로",
  "Hodnota $x={@0}\\pm {@1}$. Odhadni relatívnu chybu výrazu $x^{{@2}}$ v percentách. {@3}": "값 $x={@0}\\pm {@1}$. 식 $x^{{@2}}$의 상대오차를 퍼센트로 추정하세요. {@3}",
  "Hľadaj najmenšie $n$ s $2^n$ aspoň takým veľkým.": "$2^n$이 그 이상이 되는 가장 작은 $n$을 찾으세요.",
  "Hľadaj najmenší rád $10^{-k}$, pre ktorý chyba nepresiahne $\\frac{1}{2}\\cdot 10^{-k}$.": "오차가 $\\frac{1}{2}\\cdot 10^{-k}$를 넘지 않는 가장 작은 자리 $10^{-k}$를 찾으세요.",
  "Interpolačný polynóm 2. stupňa prechádza bodmi {@0}. Vypočítaj jeho hodnotu v bode $x={@1}$. {@2}": "2차 보간다항식이 점 {@0}을 지나요. $x={@1}$에서 그 값을 계산하세요. {@2}",
  "Jacobiho": "야코비",
  "Kalkulačka je v stupňoch. Goniometrické funkcie v numerických metódach počítame v radiánoch.": "계산기가 도(°) 모드로 되어 있어요. 수치해석에서 삼각함수는 라디안으로 계산해요.",
  "Kalkulačka je v stupňoch. Pri derivovaní goniometrických funkcií počítame v radiánoch.": "계산기가 도(°) 모드로 되어 있어요. 삼각함수를 미분할 때는 라디안으로 계산해요.",
  "Každý krok bisekcie interval len rozpolí, preto treba logaritmus so základom 2, nie 10.": "이분법의 각 단계는 구간을 반으로 나눌 뿐이므로 밑이 10이 아니라 2인 로그가 필요해요.",
  "Koreň leží v intervale dĺžky ${@0}$. Koľko najmenej krokov bisekcie treba, aby mal výsledný interval dĺžku nanajvýš ${@1}$?": "근은 길이가 ${@0}$인 구간 안에 있어요. 최종 구간의 길이가 최대 ${@1}$이 되려면 이분법을 최소 몇 단계 해야 할까요?",
  "Koľko desatinných miest je platných?": "유효한 소수 자리는 몇 개일까요?",
  "Koľko najmenej krokov bisekcie treba?": "이분법을 최소 몇 단계 해야 할까요?",
  "Koľko platných cifier má aproximácia celkovo?": "근삿값의 유효숫자는 모두 몇 개일까요?",
  "Koľkokrát treba interval zmenšiť, teda koľko je $\\frac{b-a}{\\varepsilon}$?": "구간을 몇 분의 1로 줄여야 할까요? 즉 $\\frac{b-a}{\\varepsilon}$은 얼마일까요?",
  "Krajné hodnoty $f_0$ a $f_n$ majú v lichobežníkovej metóde váhu $\\frac{h}{2}$, vnútorné $h$. Krajné body treba započítať len polovične.": "사다리꼴 공식에서 양 끝 값 $f_0$과 $f_n$의 가중치는 $\\frac{h}{2}$, 안쪽 값의 가중치는 $h$예요. 양 끝점은 절반만 세야 해요.",
  "Krok $h$ zmenšíme {@0}. Približne koľkokrát sa zmenší chyba {@1} (pre hladkú funkciu)?": "간격 $h$를 {@0} 줄여요. {@1}의 오차는 대략 몇 분의 1로 줄어들까요(매끄러운 함수의 경우)?",
  "Kvadraticky rastie len cena trojuholníkovej substitúcie. Priamy chod eliminácie má zložitosť $O(n^3)$.": "제곱에 비례해 증가하는 것은 삼각행렬 대입의 비용뿐이에요. 소거의 전진 과정은 복잡도가 $O(n^3)$이에요.",
  "Lagrangeove bázové polynómy v bode ${@0}$: {@1}. $P({@2})={@3}\\approx {@4}$.": "점 ${@0}$에서 라그랑주 기저다항식: {@1}. $P({@2})={@3}\\approx {@4}$.",
  "Lichobežníková metóda pre funkciu na intervale od 0 do 4": "0부터 4까지의 구간에서 함수에 대한 사다리꼴 공식",
  "Lichobežníková metóda: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.": "사다리꼴 공식: $T_n=\\frac{h}{2}(f_0+2f_1+\\dots+2f_{n-1}+f_n)$, $h=\\frac{b-a}{n}$.",
  "Lineárna interpolácia: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.": "선형보간: $P_1(x)=y_0+\\frac{y_1-y_0}{x_1-x_0}(x-x_0)$.",
  "Metóda má rád {@0}, globálna chyba je približne $Ch^{{@1}}$. Pri kroku $\\frac{h}{{@2}}$ sa zmenší ${@3}^{{@4}}={@5}$-krát: $\\frac{{@6}}{{@7}}={@8}$.": "이 방법의 차수는 {@0}이고 전역 오차는 약 $Ch^{{@1}}$이에요. 간격이 $\\frac{h}{{@2}}$이면 ${@3}^{{@4}}={@5}$분의 1로 줄어요: $\\frac{{@6}}{{@7}}={@8}$.",
  "Metódou najmenších štvorcov prelož priamku $y=ax+b$ bodmi {@0}. Urči {@1}. {@2}": "최소제곱법으로 점 {@0}에 직선 $y=ax+b$를 맞추세요. {@1}을(를) 구하세요. {@2}",
  "Mocninovou metódou odhadujeme dominantné vlastné číslo symetrickej matice $A={@0}$. Zo štartu $x^{(0)}=(1;\\ 1)^{T}$ vypočítaj $x^{(1)}=Ax^{(0)}$ a Rayleighov podiel $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$. {@1}": "거듭제곱법으로 대칭행렬 $A={@0}$의 지배적 고윳값을 추정해요. 시작 벡터 $x^{(0)}=(1;\\ 1)^{T}$에서 $x^{(1)}=Ax^{(0)}$과 레일리 몫 $\\frac{(x^{(1)})^{T}Ax^{(1)}}{(x^{(1)})^{T}x^{(1)}}$을 계산하세요. {@1}",
  "Multiplikátor $l_{32}$ sa počíta z matice upravenej po prvom kroku eliminácie, nie z pôvodného prvku $a_{32}$.": "승수 $l_{32}$는 원래 성분 $a_{32}$가 아니라 소거의 첫 단계 후에 바뀐 행렬에서 계산해요.",
  "Multiplikátor $l_{ik}=\\frac{a_{ik}}{a_{kk}}$ (z aktuálnej, už upravenej matice); od $i$-teho riadku odčítaj $l_{ik}$-násobok $k$-teho. Výsledná horná trojuholníková matica je $U$.": "승수는 $l_{ik}=\\frac{a_{ik}}{a_{kk}}$예요(이미 바뀐 현재 행렬에서). $i$번째 행에서 $k$번째 행의 $l_{ik}$배를 빼세요. 결과로 얻는 상삼각행렬이 $U$예요.",
  "Multiplikátor je podiel $l_{21} = \\frac{a_{21}}{a_{11}}$; prvok treba vydeliť pivotom.": "승수는 비 $l_{21} = \\frac{a_{21}}{a_{11}}$예요. 성분을 피벗으로 나누어야 해요.",
  "Multiplikátor je podiel $l_{31} = \\frac{a_{31}}{a_{11}}$; prvok treba vydeliť pivotom.": "승수는 비 $l_{31} = \\frac{a_{31}}{a_{11}}$예요. 성분을 피벗으로 나누어야 해요.",
  "Multiplikátory: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$; po prvom kroku má druhý riadok tvar $(0, {@6}, {@7})$ a tretí $(0, {@8}, {@9})$; $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.": "승수: $l_{21}=\\frac{{@0}}{{@1}}={@2}$, $l_{31}=\\frac{{@3}}{{@4}}={@5}$. 첫 단계 후 두 번째 행은 $(0, {@6}, {@7})$, 세 번째 행은 $(0, {@8}, {@9})$이에요. $l_{32}={@10}$, $u_{33}={@11}$. $L={@12}$, $U={@13}${@14}.",
  "Najprv Eulerov prediktor $\\tilde{y}_1=y_0+hf(x_0, y_0)$, potom $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$.": "먼저 오일러 예측값 $\\tilde{y}_1=y_0+hf(x_0, y_0)$을 구하고, 그다음 $y_1=y_0+\\frac{h}{2}(f(x_0, y_0)+f(x_1, \\tilde{y}_1))$을 계산하세요.",
  "Najprv vypočítaj diferencie prvého rádu $f[x_0, x_1]$ a $f[x_1, x_2]$, potom ich rozdiel vydeľ $x_2-x_0$.": "먼저 1차 분할차분 $f[x_0, x_1]$과 $f[x_1, x_2]$를 계산하고, 그 차를 $x_2-x_0$으로 나누세요.",
  "Newtonov krok je $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$; zlomok sa odčítava, nie pripočítava.": "뉴턴 단계는 $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$예요. 분수는 더하는 것이 아니라 빼요.",
  "Newtonov krok je $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "뉴턴 단계는 $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$예요.",
  "Newtonova metóda: dotyčnice ku grafu y = x² − 2": "뉴턴 방법: y = x² − 2의 그래프에 대한 접선",
  "Newtonovou metódou hľadáme $\\sqrt{{@0}}$ ako koreň funkcie $f(x)=x^2-{@1}$. Vypočítaj $x_1$ zo štartu $x_0={@2}$. {@3}": "뉴턴 방법으로 $\\sqrt{{@0}}$을 함수 $f(x)=x^2-{@1}$의 근으로 구해요. 시작값 $x_0={@2}$에서 $x_1$을 계산하세요. {@3}",
  "Normálne rovnice: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$; z nich $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$.": "정규방정식: $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+bn=\\sum y_i$. 여기서 $a=\\frac{n\\sum xy-\\sum x\\sum y}{n\\sum x^2-(\\sum x)^2}$예요.",
  "Nájdi LU rozklad (bez výmeny riadkov, $L$ má na diagonále jednotky) matice $A={@0}$ a urči {@1}.": "행렬 $A={@0}$의 LU 분해(행 교환 없이, $L$의 대각성분은 1)를 구하고 {@1}을(를) 구하세요.",
  "Nájdi najmenší rád $10^{-k}$, pre ktorý ešte platí $\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$, a spočítaj cifry od prvej nenulovej po tento rád.": "$\\Delta\\le\\frac{1}{2}\\cdot 10^{-k}$가 여전히 성립하는 가장 작은 자리 $10^{-k}$를 찾고, 0이 아닌 첫 숫자부터 이 자리까지의 숫자를 세세요.",
  "Obdĺžniková metóda: $M_n=h\\sum f(\\text{stred dielika})$, $h=\\frac{b-a}{n}$.": "중점 공식: $M_n=h\\sum f(\\text{소구간의 중점})$, $h=\\frac{b-a}{n}$.",
  "Odhadni deriváciu funkcie $f(x)={@0}$ v bode $x={@1}$ {@2} diferenciou s krokom $h={@3}$. {@4}": "간격 $h={@3}$인 {@2}차분으로 점 $x={@1}$에서 함수 $f(x)={@0}$의 도함수를 추정하세요. {@4}",
  "Platí $\\delta(x^n)\\approx|n|\\,\\delta x$, kde $\\delta x=\\frac{\\Delta x}{|x|}$.": "$\\delta(x^n)\\approx|n|\\,\\delta x$가 성립하며, 여기서 $\\delta x=\\frac{\\Delta x}{|x|}$예요.",
  "Po $n$ krokoch má interval dĺžku $\\frac{{@0}}{2^n}$. Treba $2^n\\ge\\frac{{@1}}{{@2}}={@3}$, teda $n\\ge\\log_2 {@4}\\approx {@5}$. Najmenšie celé je $n={@6}$.": "$n$단계 후 구간의 길이는 $\\frac{{@0}}{2^n}$이에요. $2^n\\ge\\frac{{@1}}{{@2}}={@3}$이어야 하므로 $n\\ge\\log_2 {@4}\\approx {@5}$예요. 가장 작은 정수는 $n={@6}$이에요.",
  "Ponechal si nesprávnu polovicu. Koreň je v tej polovici, na ktorej koncoch má $f$ opačné znamienka.": "잘못된 절반을 남겼어요. 근은 양 끝에서 $f$의 부호가 다른 절반에 있어요.",
  "Použi $P(x)=\\sum y_i\\ell_i(x)$ s $\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$, alebo Newtonov tvar s pomernými diferenciami.": "$\\ell_i(x)=\\prod_{j\\neq i}\\frac{x-x_j}{x_i-x_j}$로 $P(x)=\\sum y_i\\ell_i(x)$를 사용하거나, 분할차분을 이용한 뉴턴 꼴을 사용하세요.",
  "Použi $\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$, tu je $a-b=1$.": "$\\sqrt{a}-\\sqrt{b}=\\frac{a-b}{\\sqrt{a}+\\sqrt{b}}$를 사용하세요. 여기서는 $a-b=1$이에요.",
  "Počet krokov": "단계 수",
  "Počet krokov n": "단계 수 n",
  "Počet operácií je približne $\\frac{2}{3}n^3$, čas rastie s treťou mocninou rozmeru. Rozmer sa zväčšil ${@0}$-krát, čas teda ${@1}^3={@2}$-krát: ${@3}\\cdot {@4}={@5}$ s.": "연산 횟수는 약 $\\frac{2}{3}n^3$이므로 시간은 크기의 세제곱에 비례해 늘어요. 크기가 ${@0}$배가 되었으므로 시간은 ${@1}^3={@2}$배예요: ${@3}\\cdot {@4}={@5}$초.",
  "Pre $f(x)=\\ln x$ vychádza $\\kappa=\\frac{1}{|\\ln x|}$.": "$f(x)=\\ln x$이면 $\\kappa=\\frac{1}{|\\ln x|}$이 나와요.",
  "Pre $f(x)=\\sin x$ je $\\kappa=|x\\cot x|$. Počítaj v radiánoch.": "$f(x)=\\sin x$이면 $\\kappa=|x\\cot x|$예요. 라디안으로 계산하세요.",
  "Pre body {@0} vypočítaj pomernú diferenciu druhého rádu $f[x_0, x_1, x_2]$ (koeficient pri $(x-x_0)(x-x_1)$ v Newtonovom tvare). {@1}": "점 {@0}에 대해 2차 분할차분 $f[x_0, x_1, x_2]$(뉴턴 꼴에서 $(x-x_0)(x-x_1)$의 계수)를 계산하세요. {@1}",
  "Pre funkciu dvoch premenných $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$; pri $S=ab$ sú parciálne derivácie $b$ a $a$.": "이변수 함수에서는 $\\Delta f\\approx|f_a|\\Delta a+|f_b|\\Delta b$예요. $S=ab$이면 편도함수는 $b$와 $a$예요.",
  "Pri Gaussovej–Seidelovej metóde sme v druhej a tretej rovnici použili už nové hodnoty.": "가우스-자이델 방법에서는 두 번째와 세 번째 방정식에 이미 새로운 값을 사용했어요.",
  "Pri Jacobiho metóde dosadzujeme všade hodnoty zo štartu.": "야코비 방법에서는 모든 곳에 시작값을 대입해요.",
  "Pri Jacobiho metóde sa do všetkých rovníc dosadzujú len hodnoty zo štartu $x^{(0)}$, nie práve prepočítané zložky.": "야코비 방법에서는 모든 방정식에 방금 다시 계산한 성분이 아니라 시작값 $x^{(0)}$만 대입해요.",
  "Pri centrálnej diferencii je vzdialenosť bodov $x-h$ a $x+h$ rovná $2h$; rozdiel hodnôt treba deliť $2h$, nie $h$.": "중심차분에서 점 $x-h$와 $x+h$ 사이의 거리는 $2h$예요. 값의 차를 $h$가 아니라 $2h$로 나누어야 해요.",
  "Pri diferencii druhého rádu sa delí rozdielom krajných uzlov $x_2 - x_0$, nie $x_2 - x_1$.": "2차 분할차분에서는 $x_2 - x_1$이 아니라 양 끝 마디의 차 $x_2 - x_0$으로 나눠요.",
  "Priamy chod s multiplikátormi $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$ dá hornú trojuholníkovú maticu $U={@3}$ a pravú stranu $y=({@4})^{T}$. Spätný chod: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.": "승수 $l_{21}={@0}$, $l_{31}={@1}$, $l_{32}={@2}$로 전진 소거를 하면 상삼각행렬 $U={@3}$과 우변 $y=({@4})^{T}$를 얻어요. 후진 대입: $x_3={@5}$, $x_2={@6}$, $x_1={@7}$.",
  "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.": "RK4: $k_1=f(x_0, y_0)$, $k_2=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_1)$, $k_3=f(x_0+\\frac{h}{2}, y_0+\\frac{h}{2}k_2)$, $k_4=f(x_0+h, y_0+hk_3)$, $y_1=y_0+\\frac{h}{6}(k_1+2k_2+2k_3+k_4)$.",
  "Rayleighov podiel si počítal s vektorom $x^{(0)}$. Úloha chce podiel pre $x^{(1)}$, teda treba ešte vypočítať $Ax^{(1)}$.": "레일리 몫을 벡터 $x^{(0)}$로 계산했어요. 문제는 $x^{(1)}$에 대한 몫을 원하므로 $Ax^{(1)}$을 더 계산해야 해요.",
  "Relatívna chyba je $\\frac{|x-\\tilde{x}|}{|x|}$; v percentách ju vynásob číslom 100.": "상대오차는 $\\frac{|x-\\tilde{x}|}{|x|}$예요. 퍼센트로 나타내려면 100을 곱하세요.",
  "Relatívna chyba vstupu sa teda zväčší asi {@0}-krát — úloha je zle podmienená.": "따라서 입력의 상대오차는 약 {@0}배로 커져요 — 문제의 조건이 나빠요.",
  "Rieš nerovnicu $\\frac{b-a}{2^n}\\le\\varepsilon$, teda $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$, a zaokrúhli nahor.": "부등식 $\\frac{b-a}{2^n}\\le\\varepsilon$, 즉 $n\\ge\\log_2\\frac{b-a}{\\varepsilon}$을 풀고 올림하세요.",
  "Riešenie istej úlohy {@0} s krokom $h$ má v koncovom bode globálnu chybu približne ${@1}$. Akú chybu môžeme očakávať pri kroku $\\frac{h}{{@2}}$? {@3}": "어떤 문제를 간격 $h$인 {@0} 풀었더니 끝점에서 전역 오차가 약 ${@1}$이에요. 간격이 $\\frac{h}{{@2}}$이면 어느 정도의 오차를 기대할 수 있을까요? {@3}",
  "Rovnica $x^2-{@0}=0$ má koreň v intervale $[{@1};\\ {@2}]$. Urob dva kroky metódy bisekcie a zadaj výsledný interval ako dvojicu krajných bodov oddelených bodkočiarkou (napr. 1,25; 1,5).": "방정식 $x^2-{@0}=0$은 구간 $[{@1};\\ {@2}]$에 근을 가져요. 이분법을 두 단계 실행하고, 최종 구간을 양 끝점의 쌍으로 세미콜론으로 구분해 입력하세요(예: 1.25; 1.5).",
  "Rovnicu riešime metódou prostej iterácie $x_{k+1}=g(x_k)$ s $g(x)={@0}$ (rovnica ${@1}$) a štartom $x_0={@2}$. Vypočítaj $x_2$. {@3}": "방정식을 $g(x)={@0}$(방정식 ${@1}$)인 단순 반복법 $x_{k+1}=g(x_k)$로 시작값 $x_0={@2}$에서 풀어요. $x_2$를 계산하세요. {@3}",
  "Rozdiel diferencií prvého rádu treba ešte vydeliť rozdielom krajných uzlov $x_2 - x_0$.": "1차 분할차분의 차를 양 끝 마디의 차 $x_2 - x_0$으로 더 나누어야 해요.",
  "Rozdiel hodnôt $y_1 - y_0$ treba vydeliť dĺžkou kroku $x_1 - x_0 = {@0}$, až potom násobiť $(x - x_0)$.": "값의 차 $y_1 - y_0$을 먼저 간격 $x_1 - x_0 = {@0}$으로 나눈 다음 $(x - x_0)$을 곱해야 해요.",
  "Rozšírime výraz súčtom odmocnín: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.": "식에 제곱근의 합을 곱해요: $\\sqrt{{@0}}-\\sqrt{{@1}}=\\frac{1}{\\sqrt{{@2}}+\\sqrt{{@3}}}\\approx\\frac{1}{{@4}+{@5}}\\approx {@6}$.",
  "Simpsonova metóda má rád presnosti 4, nie 2 ako lichobežníková.": "심프슨 공식의 정확도 차수는 사다리꼴 공식처럼 2가 아니라 4예요.",
  "Simpsonova metóda: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$ párne.": "심프슨 공식: $S_n=\\frac{h}{3}(f_0+4f_1+2f_2+4f_3+\\dots+4f_{n-1}+f_n)$, $n$은 짝수.",
  "Simpsonovej metódy": "심프슨 공식",
  "Simpsonovou metódou": "심프슨 공식으로",
  "Smernice $k_2$ a $k_3$ majú v RK4 dvojnásobnú váhu: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.": "RK4에서 기울기 $k_2$와 $k_3$은 두 배의 가중치를 가져요: $y_1 = y_0 + \\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
  "Smernice sa priemerujú: násobí sa $\\frac{h}{2}$, nie $h$.": "기울기를 평균하므로 $h$가 아니라 $\\frac{h}{2}$를 곱해요.",
  "Smernicu treba v druhom kroku prepočítať v novom bode $(x_1, y_1)$; nestačí urobiť jeden krok dĺžky $2h$ so smernicou zo začiatku.": "두 번째 단계에서는 새 점 $(x_1, y_1)$에서 기울기를 다시 계산해야 해요. 처음 기울기로 길이 $2h$인 한 단계만 하는 것으로는 안 돼요.",
  "Spočítal si len platné desatinné miesta. K platným cifrám patria aj cifry pred desatinnou čiarkou.": "유효한 소수 자리만 셌어요. 소수점 앞의 숫자도 유효숫자에 속해요.",
  "Spätným chodom urči najprv $x_3$.": "후진 대입으로 먼저 $x_3$을 구하세요.",
  "Strany obdĺžnika sme namerali s presnosťou $\\pm {@0}$ cm: $a={@1}$ cm a $b={@2}$ cm. Odhadni hranicu absolútnej chyby obsahu $S=ab$ (v cm²) pomocou lineárneho priblíženia. {@3}": "직사각형의 변을 $\\pm {@0}$ cm의 정밀도로 측정했어요: $a={@1}$ cm, $b={@2}$ cm. 선형 근사를 이용해 넓이 $S=ab$의 절대오차의 한계(cm² 단위)를 추정하세요. {@3}",
  "Stredová metóda berie hodnoty v stredoch dielikov, nie v ich ľavých koncoch.": "중점 공식은 소구간의 왼쪽 끝이 아니라 중점에서의 값을 사용해요.",
  "Stredy dielikov: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$": "소구간의 중점: {@0}. $M_{{@1}}={@2}\\cdot({@3})\\approx {@4}$",
  "Sústavu {@0} rieš {@1} metódou zo štartu $x^{(0)}={@2}$. Vypočítaj prvú iteráciu $x^{(1)}$ a zadaj jej tri zložky oddelené bodkočiarkou, každú zaokrúhlenú na 4 desatinné miesta.": "연립방정식 {@0}을(를) 시작값 $x^{(0)}={@2}$에서 {@1} 방법으로 푸세요. 첫 번째 반복 $x^{(1)}$을 계산하고, 세 성분을 각각 소수 넷째 자리까지 반올림하여 세미콜론으로 구분해 입력하세요.",
  "Súčin diagonálnych prvkov dáva determinant len pri trojuholníkovej matici. Vynásob diagonálu matice $U$, nie $A$.": "대각성분의 곱이 행렬식이 되는 것은 삼각행렬일 때뿐이에요. $A$가 아니라 행렬 $U$의 대각성분을 곱하세요.",
  "Toto je Jacobiho krok. Pri Gaussovej–Seidelovej metóde dosadzuj do ďalších rovníc hneď nové hodnoty $x_1^{(1)}, x_2^{(1)}$.": "이것은 야코비 단계예요. 가우스-자이델 방법에서는 다음 방정식에 새 값 $x_1^{(1)}, x_2^{(1)}$를 바로 대입하세요.",
  "Toto je absolútna chyba. Relatívnu dostaneš vydelením absolútnej chyby hodnotou $|x|$ (a v percentách ešte krát 100).": "이것은 절대오차예요. 상대오차는 절대오차를 $|x|$로 나누어 얻어요(퍼센트로는 다시 100을 곱해요).",
  "Toto je až $x_1$. Výsledok ešte raz dosaď do $g$.": "이것은 아직 $x_1$이에요. 결과를 한 번 더 $g$에 대입하세요.",
  "Toto je až $y_1$. Urob ešte druhý krok.": "이것은 아직 $y_1$이에요. 두 번째 단계를 더 하세요.",
  "Toto je len Eulerov prediktor $\\tilde{y}_1$. Heunova metóda ho ešte opraví priemerom dvoch smerníc.": "이것은 오일러 예측값 $\\tilde{y}_1$일 뿐이에요. 호인 방법은 이를 두 기울기의 평균으로 보정해요.",
  "Toto je len čitateľ $(x^{(1)})^{T}Ax^{(1)}$. Vydeľ ho ešte $(x^{(1)})^{T}x^{(1)}$.": "이것은 분자 $(x^{(1)})^{T}Ax^{(1)}$일 뿐이에요. 이를 $(x^{(1)})^{T}x^{(1)}$로 더 나누세요.",
  "Toto je lichobežníková metóda. Simpsonova metóda používa váhy $1, 4, 2, 4, \\dots, 4, 1$ a násobí $\\frac{h}{3}$.": "이것은 사다리꼴 공식이에요. 심프슨 공식은 가중치 $1, 4, 2, 4, \\dots, 4, 1$을 사용하고 $\\frac{h}{3}$을 곱해요.",
  "Toto je lineárna interpolácia len zo susedných dvoch uzlov. Polynóm 2. stupňa využíva všetky tri body.": "이것은 이웃한 두 마디만 이용한 선형보간이에요. 2차 다항식은 세 점을 모두 이용해요.",
  "Toto je odhad $\\frac{M_2h^2}{8}$ pre najhorší bod intervalu. Úloha sa pýta na konkrétny bod $x$.": "이것은 구간에서 가장 나쁜 점에 대한 추정 $\\frac{M_2h^2}{8}$이에요. 문제는 구체적인 점 $x$에 대해 묻고 있어요.",
  "Toto je priemer $\\bar{y}$. Absolútny člen je $b = \\frac{\\sum y_i - a\\sum x_i}{n}$, teda treba odčítať aj $a\\bar{x}$.": "이것은 평균 $\\bar{y}$예요. 절편은 $b = \\frac{\\sum y_i - a\\sum x_i}{n}$이므로 $a\\bar{x}$도 빼야 해요.",
  "Toto je pôvodný prvok $a_{22}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "이것은 원래 성분 $a_{22}$예요. 두 번째 행에서 먼저 첫 번째 행의 $l_{21}$배를 빼야 해요.",
  "Toto je pôvodný prvok $a_{23}$. Od druhého riadku treba najprv odčítať $l_{21}$-násobok prvého.": "이것은 원래 성분 $a_{23}$이에요. 두 번째 행에서 먼저 첫 번째 행의 $l_{21}$배를 빼야 해요.",
  "Toto je pôvodný prvok $a_{33}$. Tretí riadok treba upraviť v oboch krokoch eliminácie.": "이것은 원래 성분 $a_{33}$이에요. 세 번째 행은 소거의 두 단계 모두에서 바꿔야 해요.",
  "Toto je relatívna chyba (podiel chyby a hodnoty). Absolútna chyba je samotný rozdiel $|x-\\tilde{x}|$.": "이것은 상대오차(오차와 값의 비)예요. 절대오차는 차 $|x-\\tilde{x}|$ 자체예요.",
  "Toto je relatívna chyba samotného $x$. Pri mocnine sa relatívna chyba násobí exponentom ${@0}$.": "이것은 $x$ 자체의 상대오차예요. 거듭제곱에서는 상대오차에 지수 ${@0}$이 곱해져요.",
  "Urob jeden krok Newtonovej metódy pre rovnicu $x^3{@0}-{@1}=0$ so štartom $x_0={@2}$. {@3}": "방정식 $x^3{@0}-{@1}=0$에 대해 시작값 $x_0={@2}$로 뉴턴 방법을 한 단계 실행하세요. {@3}",
  "Urob jeden krok Rungeho–Kuttovej metódy 4. rádu s krokom $h={@0}$ pre úlohu {@1}. {@2}": "문제 {@1}에 대해 간격 $h={@0}$로 4차 룽게-쿠타 방법을 한 단계 실행하세요. {@2}",
  "Urob jeden krok metódy sečníc pre $f(x)=x^2-{@0}$ s počiatočnými bodmi $x_0={@1}$ a $x_1={@2}$. {@3}": "$f(x)=x^2-{@0}$에 대해 초기점 $x_0={@1}$, $x_1={@2}$로 할선법을 한 단계 실행하세요. {@3}",
  "Urči $M_2 = \\max|f''|$ na intervale. {@0}": "구간에서 $M_2 = \\max|f''|$를 구하세요. {@0}",
  "Urči $u_{22}$.": "$u_{22}$를 구하세요.",
  "Urči $u_{23}$.": "$u_{23}$을 구하세요.",
  "Urči $u_{33}$.": "$u_{33}$을 구하세요.",
  "Urči multiplikátor $l_{21}$.": "승수 $l_{21}$을 구하세요.",
  "Urči multiplikátor $l_{31}$.": "승수 $l_{31}$을 구하세요.",
  "Urči multiplikátor $l_{32}$.": "승수 $l_{32}$를 구하세요.",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=\\sin x$ v bode $x={@0}$ (v radiánoch). {@1}": "점 $x={@0}$(라디안)에서 $f(x)=\\sin x$ 계산의 조건수 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$를 구하세요. {@1}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu $f(x)=x-{@0}$ v bode $x={@1}$. {@2}": "점 $x={@1}$에서 $f(x)=x-{@0}$ 계산의 조건수 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$를 구하세요. {@2}",
  "Urči číslo podmienenosti $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$ výpočtu funkcie $f(x)=\\ln x$ v bode $x={@0}$. {@1}": "점 $x={@0}$에서 함수 $f(x)=\\ln x$ 계산의 조건수 $\\kappa(x)=\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$를 구하세요. {@1}",
  "V každom kroku vypočítaj hodnotu v strede intervalu a ponechaj tú polovicu, na ktorej koncoch má funkcia opačné znamienka.": "각 단계에서 구간의 중점에서 값을 계산하고, 양 끝에서 함수의 부호가 다른 절반을 남기세요.",
  "Vo vzorci je ešte delenie dvoma: $\\frac{M_2}{2!}$.": "공식에는 2로 나누는 것도 있어요: $\\frac{M_2}{2!}$.",
  "Vo vzorci sečníc sa korekcia $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$ od $x_1$ odčítava.": "할선법 공식에서는 보정값 $f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$을 $x_1$에서 빼요.",
  "Vynuluj prvky pod diagonálou v prvom a potom v druhom stĺpci, nakoniec rieš od poslednej rovnice.": "첫 번째 열, 그다음 두 번째 열에서 대각선 아래 성분을 0으로 만들고, 마지막으로 마지막 방정식부터 푸세요.",
  "Vypočítaj $Ax^{(1)}$.": "$Ax^{(1)}$을 계산하세요.",
  "Vypočítaj $P_1({@0})$. {@1}": "$P_1({@0})$을 계산하세요. {@1}",
  "Vypočítaj $\\det A = u_{11}u_{22}u_{33}$.": "$\\det A = u_{11}u_{22}u_{33}$을 계산하세요.",
  "Vypočítaj $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$ {@3} s $n={@4}$ dielikmi. {@5}": "소구간 $n={@4}$개로 {@3} $\\displaystyle\\int_{{@0}}^{{@1}} {@2}\\,dx$를 계산하세요. {@5}",
  "Vypočítaj $\\ell_{@0}({@1})$. {@2}": "$\\ell_{@0}({@1})$을 계산하세요. {@2}",
  "Vypočítaj $\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$. {@2}": "$\\frac{1}{\\sqrt{{@0}}+\\sqrt{{@1}}}$을 계산하세요. {@2}",
  "Vypočítaj $\\sqrt{{@0}}-\\sqrt{{@1}}$ numericky stabilným spôsobom (bez odčítania blízkych čísel). {@2}": "$\\sqrt{{@0}}-\\sqrt{{@1}}$을 수치적으로 안정한 방법으로(가까운 수끼리 빼지 않고) 계산하세요. {@2}",
  "Vypočítaj $\\sum x_i$ a $\\sum y_i$ (oddelené bodkočiarkou).": "$\\sum x_i$와 $\\sum y_i$를 계산하세요(세미콜론으로 구분).",
  "Vypočítaj $\\sum x_i^2$ a $\\sum x_iy_i$ (oddelené bodkočiarkou).": "$\\sum x_i^2$과 $\\sum x_iy_i$를 계산하세요(세미콜론으로 구분).",
  "Vypočítaj $f$ v strede intervalu, teda $f({@0})$. {@1}": "구간의 중점에서 $f$, 즉 $f({@0})$을 계산하세요. {@1}",
  "Vypočítaj $f'(x_0)$.": "$f'(x_0)$을 계산하세요.",
  "Vypočítaj $f(x_0)$ a $f'(x_0)$ a dosaď do $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$.": "$f(x_0)$과 $f'(x_0)$을 계산하고 $x_1=x_0-\\frac{f(x_0)}{f'(x_0)}$에 대입하세요.",
  "Vypočítaj $f(x_0)$.": "$f(x_0)$을 계산하세요.",
  "Vypočítaj $f(x_0, y_0)$. {@0}": "$f(x_0, y_0)$을 계산하세요. {@0}",
  "Vypočítaj $f(x_1)$.": "$f(x_1)$을 계산하세요.",
  "Vypočítaj $f(x_1, \\tilde{y}_1)$. {@0}": "$f(x_1, \\tilde{y}_1)$을 계산하세요. {@0}",
  "Vypočítaj $f(x_1, y_1)$. {@0}": "$f(x_1, y_1)$을 계산하세요. {@0}",
  "Vypočítaj $f({@0})$. {@1}": "$f({@0})$을 계산하세요. {@1}",
  "Vypočítaj $f[x_0, x_1, x_2]$. {@0}": "$f[x_0, x_1, x_2]$를 계산하세요. {@0}",
  "Vypočítaj $f[x_0, x_1]$. {@0}": "$f[x_0, x_1]$을 계산하세요. {@0}",
  "Vypočítaj $f[x_1, x_2]$. {@0}": "$f[x_1, x_2]$를 계산하세요. {@0}",
  "Vypočítaj $k_{@0}$. {@1}": "$k_{@0}$를 계산하세요. {@1}",
  "Vypočítaj $x^{(1)} = Ax^{(0)}$ (dve zložky oddelené bodkočiarkou).": "$x^{(1)} = Ax^{(0)}$을 계산하세요(두 성분을 세미콜론으로 구분).",
  "Vypočítaj $x^{(1)}=Ax^{(0)}$, potom $Ax^{(1)}$ a podiel skalárnych súčinov $x^{(1)}\\cdot Ax^{(1)}$ a $x^{(1)}\\cdot x^{(1)}$.": "$x^{(1)}=Ax^{(0)}$을 계산하고, 그다음 $Ax^{(1)}$과 내적 $x^{(1)}\\cdot Ax^{(1)}$, $x^{(1)}\\cdot x^{(1)}$의 비를 계산하세요.",
  "Vypočítaj $x_1 = g(x_0)$. {@0}": "$x_1 = g(x_0)$을 계산하세요. {@0}",
  "Vypočítaj $x_1$. {@0}": "$x_1$을 계산하세요. {@0}",
  "Vypočítaj $x_2 = g(x_1)$. {@0}": "$x_2 = g(x_1)$를 계산하세요. {@0}",
  "Vypočítaj $x_2$. {@0}": "$x_2$를 계산하세요. {@0}",
  "Vypočítaj $x_{@0}^{(1)}$. {@1}": "$x_{@0}^{(1)}$을 계산하세요. {@1}",
  "Vypočítaj $y_1$. {@0}": "$y_1$을 계산하세요. {@0}",
  "Vypočítaj $y_2$. {@0}": "$y_2$를 계산하세요. {@0}",
  "Vypočítaj $|(x-x_0)(x-x_1)|$. {@0}": "$|(x-x_0)(x-x_1)|$을 계산하세요. {@0}",
  "Vypočítaj Rayleighov podiel. {@0}": "레일리 몫을 계산하세요. {@0}",
  "Vypočítaj absolútnu chybu $|x-\\tilde{x}|$. {@0}": "절대오차 $|x-\\tilde{x}|$를 계산하세요. {@0}",
  "Vypočítaj absolútny člen $b$. {@0}": "절편 $b$를 계산하세요. {@0}",
  "Vypočítaj menovateľ $\\sqrt{{@0}}+\\sqrt{{@1}}$. {@2}": "분모 $\\sqrt{{@0}}+\\sqrt{{@1}}$을 계산하세요. {@2}",
  "Vypočítaj odhad chyby. {@0}": "오차의 추정값을 계산하세요. {@0}",
  "Vypočítaj prediktor $\\tilde{y}_1$. {@0}": "예측값 $\\tilde{y}_1$을 계산하세요. {@0}",
  "Vypočítaj príspevok chyby strany $a$, teda $b\\,\\Delta a$. {@0}": "변 $a$의 오차가 기여하는 양, 즉 $b\\,\\Delta a$를 계산하세요. {@0}",
  "Vypočítaj príspevok chyby strany $b$, teda $a\\,\\Delta b$. {@0}": "변 $b$의 오차가 기여하는 양, 즉 $a\\,\\Delta b$를 계산하세요. {@0}",
  "Vypočítaj relatívnu chybu $x$ v percentách. {@0}": "$x$의 상대오차를 퍼센트로 계산하세요. {@0}",
  "Vypočítaj smernicu $\\frac{y_1-y_0}{x_1-x_0}$. {@0}": "기울기 $\\frac{y_1-y_0}{x_1-x_0}$를 계산하세요. {@0}",
  "Vypočítaj smernicu $a$. {@0}": "기울기 $a$를 계산하세요. {@0}",
  "Vypočítaj súčet hodnôt funkcie v stredoch dielikov. {@0}": "소구간의 중점에서의 함숫값의 합을 계산하세요. {@0}",
  "Vypočítaj súčet hodnôt v nepárnych uzloch $f_1{@0}$ (váha 4). {@1}": "홀수 번째 마디의 값의 합 $f_1{@0}$(가중치 4)을 계산하세요. {@1}",
  "Vypočítaj súčet vnútorných hodnôt {@0}. {@1}": "안쪽 값의 합 {@0}을(를) 계산하세요. {@1}",
  "Vypočítaj výslednú hodnotu integrálu. {@0}": "적분의 최종 값을 계산하세요. {@0}",
  "Vzorec $\\frac{\\sum x_iy_i}{\\sum x_i^2}$ platí len pre priamku cez začiatok ($b = 0$). Použi obe normálne rovnice.": "공식 $\\frac{\\sum x_iy_i}{\\sum x_i^2}$는 원점을 지나는 직선($b = 0$)에만 성립해요. 두 정규방정식을 모두 사용하세요.",
  "Vzorec sečníc: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.": "할선법 공식: $x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}$.",
  "Výsledok zaokrúhli na {@0} {@1}.": "결과는 소수 {@0}{@1}까지 반올림하세요.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň hodnoty zložiek z $x^{(0)}$.": "$i$번째 방정식에서 $x_i$를 나타내고 $x^{(0)}$의 성분 값을 대입하세요.",
  "Z $i$-tej rovnice vyjadri $x_i$ a dosaď doň už prepočítané zložky $x_1, \\dots, x_{i-1}$ a staré hodnoty ostatných.": "$i$번째 방정식에서 $x_i$를 나타내고, 이미 다시 계산한 성분 $x_1, \\dots, x_{i-1}$과 나머지 성분의 이전 값을 대입하세요.",
  "Z tabuľky poznáme ${@0}\\approx {@1}$ a ${@2}\\approx {@3}$. Lineárnou interpoláciou odhadni hodnotu funkcie ${@4}$ v bode $x={@5}$. {@6}": "표에서 ${@0}\\approx {@1}$, ${@2}\\approx {@3}$임을 알고 있어요. 선형보간으로 점 $x={@5}$에서 함수 ${@4}$의 값을 추정하세요. {@6}",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$, nie $\\left|\\frac{f'(x)}{f(x)}\\right|$.": "분자의 인수 $x$를 잊었어요: $\\kappa = \\left|\\frac{f'(x)}{f(x)}\\right|$가 아니라 $\\left|\\frac{x\\,f'(x)}{f(x)}\\right|$예요.",
  "Zabudol si na činiteľ $x$ v čitateli: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.": "분자의 인수 $x$를 잊었어요: $\\kappa = \\left|\\frac{x\\,f'(x)}{f(x)}\\right|$.",
  "Zabudol si na činiteľ $x$: $\\kappa = |x\\cot x|$, nie $|\\cot x|$.": "인수 $x$를 잊었어요: $\\kappa = |\\cot x|$가 아니라 $|x\\cot x|$예요.",
  "Zadaj celé riešenie $x_1; x_2; x_3$.": "해 전체 $x_1; x_2; x_3$을 입력하세요.",
  "Zamenil si váhy: v Simpsonovej metóde majú nepárne uzly $f_1, f_3, \\dots$ váhu 4 a párne vnútorné uzly váhu 2.": "가중치를 바꿨어요. 심프슨 공식에서 홀수 번째 마디 $f_1, f_3, \\dots$의 가중치는 4, 짝수 번째 안쪽 마디의 가중치는 2예요.",
  "Započítal si len chybu jednej strany. K $b\\,\\Delta a$ pripočítaj aj $a\\,\\Delta b$.": "한 변의 오차만 셌어요. $b\\,\\Delta a$에 $a\\,\\Delta b$도 더하세요.",
  "Zložitosť Gaussovej eliminácie je $O(n^3)$, presnejšie asi $\\frac{2}{3}n^3$ operácií.": "가우스 소거법의 복잡도는 $O(n^3)$이고, 더 정확히는 약 $\\frac{2}{3}n^3$번의 연산이에요.",
  "absolútny člen $b$": "절편 $b$",
  "centrálnej": "중심",
  "centrálnej diferencie": "중심차분",
  "centrálnou": "중심",
  "ciframi": "개",
  "cifrou": "개",
  "determinant $\\det A$ ako súčin diagonálnych prvkov $U$": "$U$의 대각성분의 곱으로서의 행렬식 $\\det A$",
  "doprednej": "전진",
  "doprednej diferencie": "전진차분",
  "doprednou": "전진",
  "h = {@0} · <span class=\"c-accent\">Euler y(2) ≈ {@1} (chyba {@2})</span> · <span class=\"c-ok\">Heun y(2) ≈ {@3} (chyba {@4})</span> · presne e² = {@5}": "h = {@0} · <span class=\"c-accent\">오일러 y(2) ≈ {@1} (오차 {@2})</span> · <span class=\"c-ok\">호인 y(2) ≈ {@3} (오차 {@4})</span> · 정확히 e² = {@5}",
  "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · presne I = {@2} · chyba {@3}": "h = {@0} · <span class=\"c-accent\">T<sub>n</sub> = {@1}</span> · 정확히 I = {@2} · 오차 {@3}",
  "je platné 1 desatinné miesto": "유효한 소수 자리는 1개예요",
  "je to <strong>1</strong> platná cifra": "유효숫자는 <strong>1</strong>개예요",
  "je to <strong>{@0}</strong> platných cifier": "유효숫자는 <strong>{@0}</strong>개예요",
  "lichobežníkovej metódy": "사다리꼴 공식",
  "lichobežníkovou metódou": "사다리꼴 공식으로",
  "metódou RK4": "RK4 방법으로",
  "na polovicu": "절반으로",
  "nie je platné žiadne desatinné miesto": "유효한 소수 자리는 없어요",
  "obdĺžnikovej (stredovej) metódy": "직사각형(중점) 공식",
  "obdĺžnikovou (stredovou) metódou": "직사각형(중점) 공식으로",
  "prvok ${@0}$": "성분 ${@0}$",
  "smernicu $a$": "기울기 $a$",
  "sú platné {@0} desatinné miesta": "유효한 소수 자리는 {@0}개예요",
  "sú to <strong>{@0}</strong> platné cifry": "유효숫자는 <strong>{@0}</strong>개예요",
  "uzly {@0}.": "마디 {@0}.",
  "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. Odhad chyby: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.": "{@0} $|(x-x_0)(x-x_1)|={@1}\\cdot {@2}={@3}$. 오차 추정: $\\frac{{@4}}{2}\\cdot {@5}\\approx {@6}$.",
  "{@0}-krát": "{@0}분의 1로",
  "{@0}.{@1}": "{@0}.{@1}",
  "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, chyba {@1}</span>": "· <span class=\"c-ok\">S<sub>n</sub> = {@0}, 오차 {@1}</span>",
  "· <span class=\"c-ok\">chyba |x{@0} − √2| = {@1}</span>": "· <span class=\"c-ok\">오차 |x{@0} − √2| = {@1}</span>",
  "· Simpson: n musí byť párne": "· 심프슨: n은 짝수여야 함",
  "Úlohu {@0} rieš Eulerovou metódou s krokom $h={@1}$. Vypočítaj $y_2\\approx y({@2})$. {@3}": "문제 {@0}을(를) 간격 $h={@1}$인 오일러 방법으로 푸세요. $y_2\\approx y({@2})$를 계산하세요. {@3}",
  "Úlohu {@0} rieš Heunovou (zlepšenou Eulerovou) metódou s krokom $h={@1}$. Vypočítaj $y_1\\approx y({@2})$. {@3}": "문제 {@0}을(를) 간격 $h={@1}$인 호인 방법(개선된 오일러 방법)으로 푸세요. $y_1\\approx y({@2})$를 계산하세요. {@3}",
  "Čas nerastie lineárne s počtom neznámych: eliminácia potrebuje asi $\\frac{2}{3}n^3$ operácií.": "시간은 미지수의 개수에 비례해 늘지 않아요. 소거에는 약 $\\frac{2}{3}n^3$번의 연산이 필요해요.",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je absolútna chyba tejto aproximácie? {@2}": "수 ${@0}$을 근삿값 ${@1}$로 대체해요. 이 근삿값의 절대오차는 얼마일까요? {@2}",
  "Číslo ${@0}$ nahradíme aproximáciou ${@1}$. Aká je relatívna chyba v percentách? {@2}": "수 ${@0}$을 근삿값 ${@1}$로 대체해요. 상대오차는 몇 퍼센트일까요? {@2}",
  "Štart x₀": "시작값 x₀",
  "desatinné miesto": "자리",
  "desatinné miesta": "자리",
  "desatinných miest": "자리"
 }
});
