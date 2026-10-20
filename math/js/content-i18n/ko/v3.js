/* 한국어: preklad js/rocniky/v3.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/v3/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "v3-pojem": {
   "title": "미분방정식의 개념, 초기값 문제(코시 문제), 방향장",
   "summary": "방정식의 계수(order), 일반해와 특수해, 초기값 문제, 존재성과 유일성 정리, 방향장.",
   "theory": [
    "<p><strong>상미분방정식(ODE)</strong>은 미지수가\n       일변수 함수 $y = y(x)$이고 이 함수의 도함수들이 포함된 방정식 $F(x, y, y', \\dots, y^{(n)}) = 0$입니다. 방정식의 <strong>계수(階數)</strong>는 실제로 나타나는\n       최고계 도함수의 계수입니다: $y'' + (y')^{5} = x$는 2계 방정식이며, 거듭제곱 $(y')^{5}$는 계수에 영향을 주지 않습니다.\n       방정식이 $y, y', \\dots, y^{(n)}$에 대해 선형이면, 즉\n       $a_n(x)y^{(n)} + \\dots + a_1(x)y' + a_0(x)y = f(x)$ 꼴이면 <strong>선형</strong>입니다.</p>\n       <p>구간 $I$에서의 <strong>해</strong>는 $I$에서 $n$계까지의 도함수를 가지며, 대입했을 때 모든 $x\\in I$에 대해 방정식을 만족하는 함수입니다.\n       $n$계 방정식의 <strong>일반해</strong>는 서로 독립인 상수 $n$개를 가진 해의 모임 $y = \\varphi(x, C_1, \\dots, C_n)$이고,\n       <strong>특수해</strong>는 상수를 구체적으로 정하여 얻습니다. 상수를 어떻게 정해도 일반해로부터 얻을 수 없는 해를\n       <strong>특이해</strong>라 합니다.</p>",
    "<p>1계 방정식에 대한 <strong>코시 문제(초기값 문제)</strong>: 방정식 $y' = f(x, y)$의 해 가운데\n       <strong>초기조건</strong> $y(x_0) = y_0$을 만족하는 해를 구하는 문제입니다. $n$계 방정식에서는 $y(x_0), y'(x_0), \\dots, y^{(n-1)}(x_0)$을 지정합니다.</p>\n       <p><strong>정리(피카르–린델뢰프).</strong> 함수 $f$와 $\\frac{\\partial f}{\\partial y}$가 점 $[x_0; y_0]$의 근방에서 연속이면, 코시 문제가\n       <strong>오직 하나의</strong> 해를 가지는 $x_0$ 주변의 구간이 존재합니다. 가정이 없으면 유일성이 성립하지 않을 수 있습니다:\n       문제 $y' = 3y^{2/3}$, $y(0) = 0$의 해는 $y = 0$과 $y = x^{3}$ 둘 다입니다(여기서 $\\frac{\\partial f}{\\partial y} = 2y^{-1/3}$은 $y = 0$에서 정의되지 않음).</p>",
    "<p><strong>방향장.</strong> 방정식 $y' = f(x, y)$는 각 점 $[x; y]$에서 그 점을 지나는 해의 접선의 기울기를 정해 줍니다.\n       평면의 점들에 기울기가 $f(x, y)$인 짧은 선분을 그리면 방향장을 얻습니다. 해의 그래프(<strong>적분곡선</strong>)는\n       자신의 모든 점에서 방향장에 접합니다. 모든 선분이 같은 기울기 $k$를 가지는 곡선 $f(x, y) = k$를 <strong>등경사선(isocline)</strong>이라 합니다.</p>",
    {
     "fig": "v3-smerove-pole",
     "caption": "방정식 $y' = x - y$의 방향장. 점선 직선 $y = x$는 기울기가 $0$인 등경사선이고, 초록색 직선 $y = x - 1$은 기울기가 $1$인 등경사선이자 해입니다. 초기값 $y(0)$을 움직여 보세요: $x\\to\\infty$일 때 모든 해가 직선 $y = x - 1$에 가까워집니다."
    }
   ],
   "examples": [
    {
     "task": "임의의 $C_1, C_2$에 대해 $y = C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$가 방정식 $y'' - y' - 2y = 0$의 해임을 확인하세요. 이 방정식은 몇 계인가요?",
     "steps": [
      "방정식은 2계 도함수를 포함하고 그보다 높은 도함수는 없으므로 <strong>2계</strong>입니다.",
      "미분합니다: $y' = 2C_1\\mathrm{e}^{2x} - C_2\\mathrm{e}^{-x}$, $y'' = 4C_1\\mathrm{e}^{2x} + C_2\\mathrm{e}^{-x}$.",
      "대입합니다: $(4C_1 - 2C_1 - 2C_1)\\mathrm{e}^{2x} + (C_2 + C_2 - 2C_2)\\mathrm{e}^{-x} = 0$.",
      "등식은 모든 $x$와 모든 $C_1, C_2$에 대해 성립합니다. 이 함수는 독립인 상수 두 개를 포함하므로 <strong>일반해</strong>입니다."
     ]
    },
    {
     "task": "$y = C\\mathrm{e}^{-x} + x - 1$이 방정식 $y' = x - y$의 일반해임을 보이고, 조건 $y(0) = 2$를 갖는 코시 문제의 해를 구하세요.",
     "steps": [
      "$y' = -C\\mathrm{e}^{-x} + 1$이고 $x - y = x - C\\mathrm{e}^{-x} - x + 1 = 1 - C\\mathrm{e}^{-x}$입니다. 양변이 같습니다.",
      "조건에서: $y(0) = C\\cdot 1 + 0 - 1 = C - 1 = 2$이므로 $C = 3$입니다.",
      "<strong>특수해: $y = 3\\mathrm{e}^{-x} + x - 1$.</strong> 그림에서 $y(0) = 2$에 해당하는 곡선입니다."
     ]
    }
   ]
  },
  "v3-separovatelne": {
   "title": "변수분리형 방정식",
   "summary": "방정식 $y' = g(x)\\,h(y)$: 변수분리, 정상해(상수해), $y' = f(ax + by + c)$ 꼴의 방정식.",
   "theory": [
    "<p><strong>변수분리형</strong> 방정식은 $y' = g(x)\\,h(y)$ 꼴이며, 여기서 $g$는 구간 $I$에서 연속이고\n       $h$는 구간 $J$에서 연속입니다. 이는 미분형식 $M_1(x)N_1(y)\\,dx + M_2(x)N_2(y)\\,dy = 0$으로도 쓸 수 있습니다.</p>\n       <p><strong>풀이 순서:</strong></p>\n       <ol><li>함수 $h$의 영점을 구합니다. $h(c) = 0$이면 상수 $y = c$는 해이며, 이를 <strong>정상해(상수해)</strong>라 합니다.</li>\n       <li>$h(y)\\neq 0$일 때 변수를 분리합니다: $\\frac{dy}{h(y)} = g(x)\\,dx$.</li>\n       <li>적분합니다: $\\displaystyle\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx + C$. 음함수 꼴의 해를 얻으며, 가능하면 양함수 꼴로 나타냅니다.</li>\n       <li>초기조건으로부터 상수 $C$를 정하고, 해가 어떤 구간에서 존재하는지 확인합니다.</li></ol>",
    "<p><strong>해를 잃지 않도록 주의하세요.</strong> $h(y)$로 나누면 정상해를 잃을 수 있으므로 정상해는 따로 적어야 합니다\n       (때로는 일반해에서 $C = 0$일 때 포함됩니다. 예를 들어 $y' = ky$에서 $y = C\\mathrm{e}^{kx}$는 $y = 0$도 줍니다).\n       우변이 좋은 함수라도 비선형 방정식의 해는 $\\mathbb{R}$ 전체에서 존재하지 않을 수 있습니다: 문제 $y' = y^{2}$, $y(0) = 1$의 해는\n       $y = \\frac{1}{1 - x}$이며 구간 $(-\\infty; 1)$에서만 존재합니다.</p>\n       <p><strong>$y' = f(ax + by + c)$ 꼴의 방정식</strong>은 치환 $z = ax + by + c$로 변수분리형 방정식 $z' = a + b\\,f(z)$로 바뀝니다.</p>",
    {
     "fig": "v3-separovatelne",
     "caption": "방정식 $y' = xy$의 일반해는 $y = C\\mathrm{e}^{x^{2}/2}$입니다. 초록색 $x$축은 정상해 $y = 0$($C = 0$일 때)이고, 파란 곡선은 조건 $y(0) = 1$을 만족하는 해입니다. 유일성 정리가 보장하듯이 적분곡선들은 서로 만나지 않습니다."
    }
   ],
   "examples": [
    {
     "task": "코시 문제 $y' = xy^{2}$, $y(0) = 1$을 풀고, 해가 존재하는 구간을 구하세요.",
     "steps": [
      "정상해는 $y = 0$이지만 조건 $y(0) = 1$을 만족하지 않습니다.",
      "$y\\neq 0$일 때: $\\frac{dy}{y^{2}} = x\\,dx$, 적분하면 $-\\frac{1}{y} = \\frac{x^{2}}{2} + C$입니다.",
      "조건에서 $-1 = C$이므로 $\\frac{1}{y} = 1 - \\frac{x^{2}}{2}$, $y = \\frac{2}{2 - x^{2}}$입니다.",
      "<strong>해 $y = \\frac{2}{2 - x^{2}}$는 구간 $(-\\sqrt{2}; \\sqrt{2})$에서 존재합니다</strong>. 이 구간은 점 $x_0 = 0$을 포함하며, $\\pm\\sqrt{2}$에서 그래프는 수직점근선을 가집니다."
     ]
    },
    {
     "task": "코시 문제 $y' = \\mathrm{e}^{x - y}$, $y(0) = \\ln 2$를 푸세요.",
     "steps": [
      "우변은 곱입니다: $y' = \\mathrm{e}^{x}\\mathrm{e}^{-y}$. 변수를 분리합니다: $\\mathrm{e}^{y}\\,dy = \\mathrm{e}^{x}\\,dx$.",
      "적분합니다: $\\mathrm{e}^{y} = \\mathrm{e}^{x} + C$. 조건에서 $2 = 1 + C$이므로 $C = 1$입니다.",
      "<strong>$y = \\ln(\\mathrm{e}^{x} + 1)$</strong>, 해는 $\\mathbb{R}$ 전체에서 존재합니다."
     ]
    }
   ]
  },
  "v3-homogenne": {
   "title": "동차 미분방정식",
   "summary": "방정식 $y' = \\varphi\\left(\\frac{y}{x}\\right)$, 치환 $y = ux$와 동차형으로 바꿀 수 있는 방정식.",
   "theory": [
    "<p>모든 $t \\gt 0$에 대해 $f(tx, ty) = t^{k}f(x, y)$이면 함수 $f(x, y)$는 <strong>$k$차 동차함수</strong>입니다. $f$가 $0$차 동차함수이면 방정식 $y' = f(x, y)$를\n       <strong>동차 방정식</strong>이라 합니다. 이때 $f(x, y) = f\\left(1, \\frac{y}{x}\\right)$이므로 방정식은 다음 꼴입니다.\n       $$y' = \\varphi\\left(\\frac{y}{x}\\right).$$\n       $M$과 $N$이 같은 차수의 동차함수이면 방정식 $M(x, y)\\,dx + N(x, y)\\,dy = 0$은 동차입니다\n       (예: $\\frac{x^{2} + y^{2}}{xy}$에서 분자와 분모는 모두 $2$차).</p>",
    "<p><strong>치환 $y = ux$</strong>, 여기서 $u = u(x)$는 새로운 미지함수입니다. 그러면 $y' = u + xu'$이고 방정식은 다음과 같이 바뀝니다.\n       $$xu' = \\varphi(u) - u,$$\n       이는 변수분리형 방정식입니다: $\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}$. $\\varphi(u_0) = u_0$이면 직선 $y = u_0x$는\n       해입니다. 적분한 뒤 $u = \\frac{y}{x}$를 다시 대입합니다.</p>\n       <p><strong>동차형으로 바꿀 수 있는 방정식</strong>: 행렬식 $a_1b_2 - a_2b_1$이 0이 아닌\n       $y' = \\varphi\\left(\\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\\right)$. 직선 $a_ix + b_iy + c_i = 0$의 교점을 $[x_0; y_0]$이라 할 때 평행이동 $x = X + x_0$, $y = Y + y_0$을 하면 상수항이 없어집니다.</p>",
    {
     "fig": "v3-homogenne",
     "caption": "동차 방정식에서는 원점을 지나는 각 직선 $y = ux$(점선) 위에서 방향장의 방향이 모두 같습니다. 방정식 $y' = \\frac{x + y}{x - y}$의 해는 극좌표로 $r = C\\mathrm{e}^{\\varphi}$, 즉 로그나선입니다."
    }
   ],
   "examples": [
    {
     "task": "$x \\gt 0$일 때 방정식 $y' = \\dfrac{x^{2} + y^{2}}{xy}$의 일반해를 구하세요.",
     "steps": [
      "분자와 분모는 모두 $2$차 동차입니다. $x^{2}$으로 나누면: $y' = \\frac{1 + u^{2}}{u}$, 여기서 $u = \\frac{y}{x}$입니다.",
      "$y' = u + xu'$을 대입합니다: $u + xu' = \\frac{1}{u} + u$이므로 $xu' = \\frac{1}{u}$입니다.",
      "변수를 분리합니다: $u\\,du = \\frac{dx}{x}$, 적분하면 $\\frac{u^{2}}{2} = \\ln x + C$입니다.",
      "<strong>해: $y^{2} = x^{2}(2\\ln x + C_1)$</strong>, 여기서 $C_1 = 2C$."
     ]
    },
    {
     "task": "코시 문제 $y' = \\dfrac{y}{x} + \\mathrm{e}^{-y/x}$, $y(1) = 0$을 푸세요.",
     "steps": [
      "치환 $y = ux$: $u + xu' = u + \\mathrm{e}^{-u}$이므로 $xu' = \\mathrm{e}^{-u}$입니다.",
      "변수를 분리합니다: $\\mathrm{e}^{u}\\,du = \\frac{dx}{x}$이므로 $\\mathrm{e}^{u} = \\ln x + C$입니다.",
      "조건 $u(1) = 0$에서: $1 = 0 + C$이므로 $C = 1$이고 $u = \\ln(1 + \\ln x)$입니다.",
      "<strong>$y = x\\ln(1 + \\ln x)$</strong>, 단 $x \\gt \\mathrm{e}^{-1}$."
     ]
    }
   ]
  },
  "v3-linearne": {
   "title": "1계 선형 방정식과 베르누이 방정식",
   "summary": "적분인자, 상수변화법, 해의 구조 $y = y_h + y_p$와 치환 $z = y^{1-n}$.",
   "theory": [
    "<p><strong>1계 선형 방정식</strong>은 $y' + p(x)\\,y = q(x)$ 꼴이며, 여기서 $p, q$는 구간 $I$에서 연속입니다. $q = 0$이면 방정식은\n       (선형 방정식의 의미에서) <strong>동차</strong>이고 변수분리형입니다: $y_h = C\\mathrm{e}^{-P(x)}$, 여기서 $P$는 $p$의 임의의 원시함수입니다.\n       비동차 방정식의 일반해는 $y = y_h + y_p$, 즉 동차 방정식의 일반해와 비동차 방정식의 한 (특수)해의\n       합입니다. 코시 문제는 $I$ 전체에서 오직 하나의 해를 가집니다.</p>",
    "<p><strong>적분인자.</strong> 방정식에 $\\mu(x) = \\mathrm{e}^{P(x)}$를 곱합니다. 그러면 좌변은 곱의 도함수가 됩니다:\n       $$(\\mu y)' = \\mu\\,q \\quad\\Rightarrow\\quad y = \\mathrm{e}^{-P(x)}\\left(\\int q(x)\\,\\mathrm{e}^{P(x)}\\,dx + C\\right).$$\n       <strong>상수변화법</strong>도 같은 결과를 줍니다: 해를 $y = C(x)\\,\\mathrm{e}^{-P(x)}$ 꼴로 놓고 대입하면\n       $C(x)$가 들어 있는 항들이 소거되어 $C'(x) = q(x)\\,\\mathrm{e}^{P(x)}$가 남습니다.</p>",
    "<p><strong>베르누이 방정식</strong> $y' + p(x)\\,y = q(x)\\,y^{n}$, $n\\neq 0, 1$. 양변을 $y^{n}$으로 나누고 $z = y^{1-n}$으로 놓으면\n       $z' = (1-n)\\,y^{-n}y'$입니다. 다음 선형 방정식을 얻습니다.\n       $$z' + (1-n)\\,p(x)\\,z = (1-n)\\,q(x).$$\n       $n \\gt 0$이면 $y = 0$도 해인데, 나눗셈 과정에서 잃게 됩니다. 예를 들어 로지스틱 방정식 $y' = ry - \\frac{r}{K}y^{2}$은 $n = 2$인 베르누이 방정식입니다.</p>"
   ],
   "examples": [
    {
     "task": "코시 문제 $y' + 2y = 4x$, $y(0) = 1$을 푸세요.",
     "steps": [
      "$p = 2$, 적분인자 $\\mu = \\mathrm{e}^{2x}$. 방정식은 $(y\\mathrm{e}^{2x})' = 4x\\mathrm{e}^{2x}$가 됩니다.",
      "부분적분: $\\int 4x\\mathrm{e}^{2x}\\,dx = (2x - 1)\\mathrm{e}^{2x} + C$이므로 $y = 2x - 1 + C\\mathrm{e}^{-2x}$입니다.",
      "조건에서: $-1 + C = 1$, $C = 2$.",
      "<strong>$y = 2x - 1 + 2\\mathrm{e}^{-2x}$.</strong> 검산: $y' + 2y = 2 - 4\\mathrm{e}^{-2x} + 4x - 2 + 4\\mathrm{e}^{-2x} = 4x$."
     ]
    },
    {
     "task": "$x \\gt 0$일 때 베르누이 방정식 $y' + \\dfrac{y}{x} = xy^{2}$의 일반해를 구하세요.",
     "steps": [
      "$n = 2$이므로 $z = y^{-1}$, $z' = -y^{-2}y'$입니다. 방정식을 $y^{2}$으로 나누면: $y^{-2}y' + \\frac{1}{x}y^{-1} = x$, 즉 $-z' + \\frac{z}{x} = x$입니다.",
      "선형 방정식 $z' - \\frac{z}{x} = -x$의 적분인자는 $\\mu = \\frac{1}{x}$입니다: $\\left(\\frac{z}{x}\\right)' = -1$이므로 $z = Cx - x^{2}$입니다.",
      "<strong>$y = \\dfrac{1}{Cx - x^{2}}$</strong>, 그리고 정상해 $y = 0$도 있습니다."
     ]
    }
   ]
  },
  "v3-exaktne": {
   "title": "완전 미분방정식과 적분인자",
   "summary": "$M_y = N_x$인 방정식 $M\\,dx + N\\,dy = 0$, 원시함수(퍼텐셜) $F(x, y)$와 한 변수에만 의존하는 적분인자.",
   "theory": [
    "<p>다음을 만족하는 함수 $F(x, y)$(원시함수, 퍼텐셜)가 존재하면 방정식 $M(x, y)\\,dx + N(x, y)\\,dy = 0$은 영역 $D$에서 <strong>완전</strong>합니다.\n       $$\\frac{\\partial F}{\\partial x} = M, \\qquad \\frac{\\partial F}{\\partial y} = N,$$\n       즉 좌변이 전미분 $dF$입니다. 그러면 모든 해를 따라 $dF = 0$이므로 <strong>일반적분</strong>은 $F(x, y) = C$입니다:\n       적분곡선은 함수 $F$의 등위선입니다.</p>\n       <p><strong>판정법.</strong> $M, N$이 단순연결 영역에서 연속 미분 가능하면, 방정식이 완전일 필요충분조건은 다음과 같습니다.\n       $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}.$$</p>",
    "<p><strong>$F$의 계산.</strong> $M$을 $x$에 대해 적분합니다(변수 $y$는 상수로 봄): $F = \\int M\\,dx + \\varphi(y)$.\n       미지함수 $\\varphi$는 조건 $\\frac{\\partial F}{\\partial y} = N$으로부터 정하며, 이 조건은 $y$에만 의존하는 $\\varphi'(y)$를 줍니다.\n       $N$을 $y$에 대해 적분하는 것부터 시작해도 됩니다.</p>\n       <p><strong>적분인자.</strong> 방정식이 완전하지 않으면 $\\mu M\\,dx + \\mu N\\,dy = 0$이 완전해지도록,\n       즉 $(\\mu M)_y = (\\mu N)_x$가 되도록 하는 함수 $\\mu \\neq 0$을 찾습니다. 간단한 두 경우:</p>\n       <ul><li>$\\dfrac{M_y - N_x}{N} = \\omega(x)$가 $x$에만 의존하면 $\\mu(x) = \\mathrm{e}^{\\int\\omega(x)\\,dx}$;</li>\n       <li>$\\dfrac{N_x - M_y}{M} = \\omega(y)$가 $y$에만 의존하면 $\\mu(y) = \\mathrm{e}^{\\int\\omega(y)\\,dy}$.</li></ul>\n       <p>예를 들어 선형 방정식 $y' + p(x)y = q(x)$를 $(p y - q)\\,dx + dy = 0$으로 쓰면 $\\omega = p(x)$이고 잘 알려진 적분인자 $\\mu = \\mathrm{e}^{\\int p\\,dx}$를 얻습니다.</p>",
    {
     "fig": "v3-exaktne",
     "caption": "방정식 $(2x - y)\\,dx + (2y - x)\\,dy = 0$은 $F(x, y) = x^{2} - xy + y^{2}$인 완전 미분방정식입니다. 적분곡선은 타원 $F = C$이며, 점 $[1; 2]$를 지나는 곡선은 $C = 3$에 해당합니다."
    }
   ],
   "examples": [
    {
     "task": "방정식 $(2xy + 3x^{2})\\,dx + (x^{2} + 2y)\\,dy = 0$을 풀고, 점 $[1; 1]$을 지나는 적분곡선을 구하세요.",
     "steps": [
      "$M_y = 2x$, $N_x = 2x$이므로 방정식은 완전합니다.",
      "$F = \\int(2xy + 3x^{2})\\,dx = x^{2}y + x^{3} + \\varphi(y)$.",
      "$F_y = x^{2} + \\varphi'(y) = x^{2} + 2y$이므로 $\\varphi'(y) = 2y$, $\\varphi(y) = y^{2}$입니다.",
      "일반적분은 $x^{2}y + x^{3} + y^{2} = C$입니다. 점 $[1; 1]$을 대입하면 $C = 3$입니다.",
      "<strong>$x^{2}y + x^{3} + y^{2} = 3$.</strong>"
     ]
    },
    {
     "task": "방정식 $(y + x^{2})\\,dx - x\\,dy = 0$ ($x \\gt 0$)의 적분인자를 구하고 방정식을 푸세요.",
     "steps": [
      "$M_y = 1$, $N_x = -1$이므로 방정식은 완전하지 않습니다. $\\frac{M_y - N_x}{N} = \\frac{2}{-x} = -\\frac{2}{x}$는 $x$에만 의존합니다.",
      "$\\mu = \\mathrm{e}^{\\int -2/x\\,dx} = x^{-2}$. 새 방정식: $\\left(\\frac{y}{x^{2}} + 1\\right)dx - \\frac{1}{x}\\,dy = 0$, 여기서 $\\left(\\frac{y}{x^{2}} + 1\\right)_y = \\frac{1}{x^{2}} = \\left(-\\frac{1}{x}\\right)_x$입니다.",
      "$F = -\\frac{y}{x} + x$ ($F_x$와 $F_y$를 확인해 보세요), 일반적분은 $x - \\frac{y}{x} = C$입니다.",
      "<strong>$y = x^{2} - Cx$.</strong>"
     ]
    }
   ]
  },
  "v3-aplikacie": {
   "title": "1계 방정식의 응용",
   "summary": "개체수 증가와 방사성 붕괴, 뉴턴의 냉각 법칙, 로지스틱 방정식, RC 회로와 용액의 혼합.",
   "theory": [
    "<p><strong>지수적 증가와 감소.</strong> 어떤 양의 변화율이 그 순간의 값에 비례하면 $y' = ky$가 성립하므로\n       $y(t) = y_0\\mathrm{e}^{kt}$입니다. $k \\gt 0$이면 증가(개체수, 연속 복리)이며, 두 배가 되는 시간은 $\\frac{\\ln 2}{k}$입니다.\n       $k \\lt 0$이면 감소입니다. <strong>반감기</strong>가 $T$인 방사성 동위원소는 $k = -\\frac{\\ln 2}{T}$이므로 $m(t) = m_0\\cdot 2^{-t/T}$입니다.</p>\n       <p><strong>뉴턴의 냉각 법칙.</strong> 온도가 $T_o$로 일정한 환경에 있는 물체의 온도는 온도 차에 비례하는 속도로 변합니다:\n       $T' = -k(T - T_o)$, $k \\gt 0$. 해는 $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$이며, 상수 $k$는 보통 측정값 하나를 더 이용해 구합니다.</p>",
    {
     "fig": "v3-rast",
     "caption": "파란 곡선은 $y' = ky$, $y(0) = 1$의 해이고, 초록 곡선은 같은 $k$와 환경수용력 $K$(점선)를 가진 로지스틱 방정식의 해입니다. 처음에는 거의 같지만, 로지스틱 곡선은 값 $K$에서 안정됩니다."
    },
    "<p><strong>로지스틱 방정식</strong> $P' = rP\\left(1 - \\frac{P}{K}\\right)$는 자원이 제한된 상태에서의 증가를 나타내며, $K$는 환경수용력입니다.\n       이 방정식은 변수분리형이자 베르누이 방정식이며, 해는 다음과 같습니다.\n       $$P(t) = \\frac{K}{1 + A\\,\\mathrm{e}^{-rt}}, \\qquad A = \\frac{K - P_0}{P_0}.$$\n       정상해는 $P = 0$(불안정)과 $P = K$(안정)입니다. 개체수는 $P = \\frac{K}{2}$일 때, 즉 시각 $t = \\frac{\\ln A}{r}$에 가장 빠르게 증가합니다.</p>",
    "<p><strong>RC 회로.</strong> 전압이 $U$인 전원으로 저항 $R$을 통해 축전기를 충전할 때 전하에 대해 $Rq' + \\frac{q}{C} = U$가 성립합니다.\n       초기 전하가 0이면 축전기의 전압은 $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$이며, 여기서 $\\tau = RC$는 <strong>시간 상수</strong>입니다\n       (시간 $\\tau$ 동안 축전기는 전압 $U$의 약 $63\\,\\%$까지 충전됩니다).</p>\n       <p><strong>용액의 혼합.</strong> 탱크에 용액 $V$리터가 들어 있고, 농도가 $c$인 용액이 분당 $q$리터씩 흘러 들어오며, 잘 섞인 용액이 같은 속도로\n       흘러 나갑니다. 물질의 양 $x(t)$에 대해 “유입량 빼기 유출량”의 수지식이 성립합니다:\n       $$x' = cq - \\frac{q}{V}x \\quad\\Rightarrow\\quad x(t) = cV + (x_0 - cV)\\,\\mathrm{e}^{-qt/V}.$$</p>"
   ],
   "examples": [
    {
     "task": "온도가 $90\\,{}^\\circ\\mathrm{C}$인 커피가 온도 $20\\,{}^\\circ\\mathrm{C}$인 방에 놓여 있습니다. $10$분 후 커피의 온도는 $60\\,{}^\\circ\\mathrm{C}$입니다. 언제 $40\\,{}^\\circ\\mathrm{C}$까지 식을까요?",
     "steps": [
      "$T(t) = 20 + 70\\,\\mathrm{e}^{-kt}$. 측정값에서 $60 = 20 + 70\\,\\mathrm{e}^{-10k}$이므로 $\\mathrm{e}^{-10k} = \\frac{4}{7}$, $k = \\frac{1}{10}\\ln\\frac{7}{4} \\approx 0.0560$입니다.",
      "조건 $40 = 20 + 70\\,\\mathrm{e}^{-kt}$에서 $\\mathrm{e}^{-kt} = \\frac{2}{7}$이므로 $t = \\frac{\\ln(7/2)}{k} = 10\\cdot\\frac{\\ln 3.5}{\\ln 1.75}$입니다.",
      "<strong>$t \\approx 22.4$분.</strong>"
     ]
    },
    {
     "task": "탱크에 소금 $5\\,\\mathrm{kg}$이 녹아 있는 물 $100$리터가 들어 있습니다. 농도가 $0.2\\,\\mathrm{kg/l}$인 용액이 분당 $4$리터씩 흘러 들어오고, 잘 섞인 용액이 같은 속도로 흘러 나갑니다. $25$분 후 탱크에 있는 소금은 몇 kg인가요?",
     "steps": [
      "수지식: $x' = 0.2\\cdot 4 - \\frac{4}{100}x = 0.8 - 0.04x$, $x(0) = 5$.",
      "상수계수 선형 방정식입니다: 평형값은 $x = 20$이므로 $x(t) = 20 + (5 - 20)\\,\\mathrm{e}^{-0.04t} = 20 - 15\\,\\mathrm{e}^{-0.04t}$입니다.",
      "<strong>$x(25) = 20 - 15\\,\\mathrm{e}^{-1} \\approx 14.48\\,\\mathrm{kg}$.</strong> $t\\to\\infty$이면 소금의 양은 $20\\,\\mathrm{kg}$에 가까워집니다."
     ]
    }
   ]
  },
  "v3-charakteristicka": {
   "title": "상수계수 2계 선형 방정식",
   "summary": "기본해 집합, 론스키 행렬식, 특성방정식과 그 근의 세 가지 경우.",
   "theory": [
    "<p>구간 $I$에서 연속인 계수를 가진 <strong>2계 선형 동차 방정식</strong> $y'' + a_1(x)y' + a_0(x)y = 0$은 다음 성질을 가집니다:</p>\n       <ul><li><strong>중첩의 원리:</strong> 해들의 일차결합은 다시 해이며, 해들은 차원이 $2$인 벡터공간을 이룹니다.</li>\n       <li><strong>기본해 집합</strong>은 일차독립인 두 해 $y_1, y_2$의 쌍이며, 일반해는 $y = C_1y_1 + C_2y_2$입니다.</li>\n       <li><strong>론스키 행렬식(론스키안)</strong> $W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$. 해 $y_1, y_2$가 일차독립일 필요충분조건은\n       $W(x)\\neq 0$입니다(한 점에서만 확인하면 충분). <strong>리우빌 공식</strong> $W(x) = W(x_0)\\,\\mathrm{e}^{-\\int_{x_0}^{x}a_1(t)\\,dt}$가 성립합니다.</li></ul>",
    "<p><strong>상수계수.</strong> $y'' + py' + qy = 0$에 $y = \\mathrm{e}^{\\lambda x}$를 시도해 봅니다. 대입하고 $\\mathrm{e}^{\\lambda x}$로 나누면\n       <strong>특성방정식</strong> $\\lambda^{2} + p\\lambda + q = 0$을 얻습니다. 그 근에 따라:</p>\n       <table class=\"tbl\"><tr><th>근</th><th>기본해 집합</th><th>일반해</th></tr>\n       <tr><td>서로 다른 실근 $\\lambda_1\\neq\\lambda_2$</td><td>$\\mathrm{e}^{\\lambda_1x},\\ \\mathrm{e}^{\\lambda_2x}$</td><td>$C_1\\mathrm{e}^{\\lambda_1x} + C_2\\mathrm{e}^{\\lambda_2x}$</td></tr>\n       <tr><td>중근 $\\lambda$</td><td>$\\mathrm{e}^{\\lambda x},\\ x\\mathrm{e}^{\\lambda x}$</td><td>$(C_1 + C_2x)\\,\\mathrm{e}^{\\lambda x}$</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\beta \\gt 0$</td><td>$\\mathrm{e}^{\\alpha x}\\cos\\beta x,\\ \\mathrm{e}^{\\alpha x}\\sin\\beta x$</td><td>$\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$</td></tr></table>\n       <p>복소근인 경우에는 복소해 $\\mathrm{e}^{(\\alpha + \\beta\\mathrm{i})x} = \\mathrm{e}^{\\alpha x}(\\cos\\beta x + \\mathrm{i}\\sin\\beta x)$의 실수부와 허수부를 택합니다.\n       고계 방정식에도 같은 방법이 통합니다: $k$중근 $\\lambda$에는 함수 $\\mathrm{e}^{\\lambda x}, x\\mathrm{e}^{\\lambda x}, \\dots, x^{k-1}\\mathrm{e}^{\\lambda x}$가 대응합니다.</p>",
    {
     "fig": "v3-rad2",
     "caption": "초기조건 $y(0) = 1$, $y'(0) = 0$을 가진 방정식 $y'' + py' + qy = 0$의 해. 복소근이면 해가 진동하고 실근이면 진동하지 않습니다. 근의 실수부의 부호에 따라 해가 감쇠하는지 증가하는지가 정해집니다."
    }
   ],
   "examples": [
    {
     "task": "코시 문제 $y'' - y' - 6y = 0$, $y(0) = 1$, $y'(0) = 8$을 푸세요.",
     "steps": [
      "특성방정식 $\\lambda^{2} - \\lambda - 6 = 0$의 근은 $\\lambda_1 = 3$, $\\lambda_2 = -2$입니다.",
      "일반해 $y = C_1\\mathrm{e}^{3x} + C_2\\mathrm{e}^{-2x}$, 도함수 $y' = 3C_1\\mathrm{e}^{3x} - 2C_2\\mathrm{e}^{-2x}$.",
      "조건: $C_1 + C_2 = 1$, $3C_1 - 2C_2 = 8$이므로 $C_1 = 2$, $C_2 = -1$입니다.",
      "<strong>$y = 2\\mathrm{e}^{3x} - \\mathrm{e}^{-2x}$.</strong>"
     ]
    },
    {
     "task": "방정식 $y'' + 4y' + 13y = 0$의 기본해 집합을 구하고 그 론스키 행렬식을 계산하세요.",
     "steps": [
      "$\\lambda^{2} + 4\\lambda + 13 = 0$, $D = 16 - 52 = -36$, 근은 $\\lambda = -2\\pm 3\\mathrm{i}$입니다.",
      "기본해 집합: $y_1 = \\mathrm{e}^{-2x}\\cos 3x$, $y_2 = \\mathrm{e}^{-2x}\\sin 3x$.",
      "$W = y_1y_2' - y_1'y_2 = \\mathrm{e}^{-4x}\\left[\\cos 3x(-2\\sin 3x + 3\\cos 3x) - \\sin 3x(-2\\cos 3x - 3\\sin 3x)\\right] = 3\\mathrm{e}^{-4x}$.",
      "<strong>$W(x) = 3\\mathrm{e}^{-4x}\\neq 0$</strong>, 리우빌 공식 $W(x) = W(0)\\,\\mathrm{e}^{-4x}$와 일치합니다."
     ]
    }
   ]
  },
  "v3-nehomogenne": {
   "title": "2계 비동차 방정식",
   "summary": "해의 구조 $y = y_h + y_p$, 특수한 우변에 대한 미정계수법과 상수변화법.",
   "theory": [
    "<p>방정식 $y'' + py' + qy = f(x)$의 일반해는 $y = y_h + y_p$입니다. 여기서 $y_h = C_1y_1 + C_2y_2$는 대응하는 동차 방정식의 일반해이고\n       $y_p$는 비동차 방정식의 임의의 한 (특수)해입니다. $f = f_1 + f_2$이면 $f_1$과 $f_2$에 대한 특수해를\n       따로 구하여 더할 수 있습니다(<strong>중첩의 원리</strong>).</p>",
    "<p><strong>미정계수법</strong>(특수한 우변). 다항식 $P_m, Q_n$에 대해 $f(x) = \\mathrm{e}^{\\alpha x}\\left(P_m(x)\\cos\\beta x + Q_n(x)\\sin\\beta x\\right)$이면\n       특수해를 다음 꼴로 놓습니다.\n       $$y_p = x^{k}\\,\\mathrm{e}^{\\alpha x}\\left(R_N(x)\\cos\\beta x + S_N(x)\\sin\\beta x\\right), \\qquad N = \\max(m, n),$$\n       여기서 $R_N, S_N$은 계수를 모르는 $N$차 다항식이고, $k$는 수 $\\alpha + \\beta\\mathrm{i}$가 특성방정식의 근으로서 가지는 중복도입니다\n       (근이 아니면 $k = 0$). 계수는 방정식에 대입하여 비교해서 구합니다.</p>\n       <table class=\"tbl\"><tr><th>우변 $f(x)$</th><th>$y_p$의 꼴(공명이 아닐 때)</th></tr>\n       <tr><td>$ax + b$</td><td>$Ax + B$ ($q\\neq 0$일 때)</td></tr>\n       <tr><td>$a\\,\\mathrm{e}^{\\alpha x}$</td><td>$A\\,\\mathrm{e}^{\\alpha x}$</td></tr>\n       <tr><td>$a\\cos\\beta x + b\\sin\\beta x$</td><td>$A\\cos\\beta x + B\\sin\\beta x$</td></tr></table>\n       <p>$\\alpha + \\beta\\mathrm{i}$가 특성방정식의 근이면(<strong>공명</strong>) 그 꼴에 $x$를 곱하고, 중근이면 $x^{2}$을 곱합니다.</p>",
    "<p><strong>상수변화법</strong>은 임의의 연속인 우변에 대해 쓸 수 있습니다. 해를 조건\n       $C_1'y_1 + C_2'y_2 = 0$ 아래에서 $y = C_1(x)y_1 + C_2(x)y_2$ 꼴로 놓습니다. 대입하면 다음 연립방정식을 얻습니다.\n       $$C_1'y_1 + C_2'y_2 = 0, \\qquad C_1'y_1' + C_2'y_2' = f(x),$$\n       그 해는 $C_1' = -\\frac{y_2 f}{W}$, $C_2' = \\frac{y_1 f}{W}$이며, 여기서 $W$는 론스키 행렬식입니다. 이 방법은 예를 들어 우변이\n       $\\frac{1}{\\cos x}$, $\\mathrm{tg}\\,x$, $\\ln x$, $\\frac{\\mathrm{e}^{x}}{x}$일 때 필요합니다.</p>"
   ],
   "examples": [
    {
     "task": "방정식 $y'' - 3y' + 2y = \\mathrm{e}^{x}$의 일반해를 구하세요.",
     "steps": [
      "$\\lambda^{2} - 3\\lambda + 2 = 0$의 근은 $1$과 $2$이므로 $y_h = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x}$입니다.",
      "수 $\\alpha = 1$은 단근이므로(공명) $y_p = Ax\\mathrm{e}^{x}$로 놓습니다. 그러면 $y_p' = A(1 + x)\\mathrm{e}^{x}$, $y_p'' = A(2 + x)\\mathrm{e}^{x}$입니다.",
      "대입합니다: $A\\left[(2 + x) - 3(1 + x) + 2x\\right]\\mathrm{e}^{x} = -A\\mathrm{e}^{x} = \\mathrm{e}^{x}$이므로 $A = -1$입니다.",
      "<strong>$y = C_1\\mathrm{e}^{x} + C_2\\mathrm{e}^{2x} - x\\mathrm{e}^{x}$.</strong>"
     ]
    },
    {
     "task": "상수변화법으로 구간 $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$에서 방정식 $y'' + y = \\dfrac{1}{\\cos x}$를 푸세요.",
     "steps": [
      "$y_1 = \\cos x$, $y_2 = \\sin x$, $W = \\cos^{2} x + \\sin^{2} x = 1$.",
      "$C_1' = -\\frac{\\sin x}{\\cos x}$이므로 $C_1 = \\ln(\\cos x) + K_1$; $C_2' = \\frac{\\cos x}{\\cos x} = 1$이므로 $C_2 = x + K_2$입니다.",
      "<strong>$y = K_1\\cos x + K_2\\sin x + \\cos x\\,\\ln(\\cos x) + x\\sin x$.</strong>"
     ]
    }
   ]
  },
  "v3-kmitanie": {
   "title": "진동: 비감쇠 진동, 감쇠 진동, 강제 진동",
   "summary": "방정식 $mx'' + cx' + kx = F(t)$, 부족 감쇠, 임계 감쇠, 과감쇠, 강제 진동과 공명.",
   "theory": [
    "<p>강성(용수철 상수)이 $k$인 용수철에 매달린 질량 $m$의 물체가 속도에 비례하는 힘(계수 $c$)으로 감쇠되고 외력 $F(t)$를 받으면 다음 방정식을 따릅니다.\n       $$mx'' + cx' + kx = F(t) \\quad\\Longleftrightarrow\\quad x'' + 2\\delta x' + \\omega_0^{2}x = \\frac{F(t)}{m},$$\n       여기서 $\\omega_0 = \\sqrt{k/m}$는 <strong>고유 각진동수</strong>이고 $\\delta = \\frac{c}{2m}$는 <strong>감쇠 계수</strong>입니다.\n       같은 방정식이 직렬 $RLC$ 회로의 전하를 나타냅니다: $Lq'' + Rq' + \\frac{1}{C}q = U(t)$.</p>\n       <p><strong>비감쇠 진동</strong> ($c = 0$, $F = 0$): $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t = A\\cos(\\omega_0t - \\varphi)$, 진폭은\n       $A = \\sqrt{C_1^{2} + C_2^{2}}$, 주기는 $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$입니다.</p>",
    "<p><strong>감쇠 진동</strong> ($F = 0$). 특성방정식 $\\lambda^{2} + 2\\delta\\lambda + \\omega_0^{2} = 0$의 근은 $-\\delta\\pm\\sqrt{\\delta^{2} - \\omega_0^{2}}$입니다:</p>\n       <ul><li>$\\delta \\lt \\omega_0$ (<strong>부족 감쇠</strong>, $c^{2} \\lt 4mk$): $x = \\mathrm{e}^{-\\delta t}(C_1\\cos\\omega_dt + C_2\\sin\\omega_dt)$,\n       $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$; 진폭이 지수적으로 줄어드는 진동;</li>\n       <li>$\\delta = \\omega_0$ (<strong>임계 감쇠</strong>, $c = 2\\sqrt{mk}$): $x = (C_1 + C_2t)\\,\\mathrm{e}^{-\\delta t}$;</li>\n       <li>$\\delta \\gt \\omega_0$ (<strong>과감쇠</strong>): 감소하는 두 지수함수의 합, 비주기 운동.</li></ul>",
    {
     "fig": "v3-tlmenie",
     "caption": "$\\omega_0 = 2$, $x(0) = 1$, $x'(0) = 0$일 때의 변위 $x(t)$. 점선 곡선 $\\pm\\mathrm{e}^{-\\delta t}$가 감쇠 진동을 감쌉니다. $\\delta = 2$일 때 임계 감쇠가 일어납니다."
    },
    "<p><strong>강제 진동</strong>, $F(t) = F_0\\cos\\omega t$. 감쇠가 없고 $\\omega\\neq\\omega_0$이면 특수해는\n       $x_p = \\frac{F_0/m}{\\omega_0^{2} - \\omega^{2}}\\cos\\omega t$입니다. $\\omega = \\omega_0$이면 <strong>공명</strong>이 일어납니다: $x_p = \\frac{F_0}{2m\\omega_0}\\,t\\sin\\omega_0t$\n       이고 진폭이 한없이 커집니다. 감쇠가 있으면 자유 진동은 사라지고 다음 진폭을 가진 정상 상태가 남습니다.\n       $$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^{2} - \\omega^{2})^{2} + 4\\delta^{2}\\omega^{2}}},$$\n       이 진폭은 $\\omega_r = \\sqrt{\\omega_0^{2} - 2\\delta^{2}}$일 때 가장 큽니다($\\omega_0^{2} \\gt 2\\delta^{2}$인 경우).</p>",
    {
     "fig": "v3-rezonancia",
     "caption": "$\\omega_0 = 2$, $F_0/m = 1$일 때의 공명 곡선 $A(\\omega)$. 감쇠가 작으면 최댓값이 뾰족하고 고유 진동수(점선) 가까이에 있습니다."
    }
   ],
   "examples": [
    {
     "task": "질량이 $1\\,\\mathrm{kg}$인 물체가 강성이 $16\\,\\mathrm{N/m}$인 용수철에 매달려 있고 계수 $c = 4\\,\\mathrm{kg/s}$로 감쇠됩니다. 처음에 $0.1\\,\\mathrm{m}$만큼 당겼다가 정지 상태에서 놓습니다. $x(t)$를 구하세요.",
     "steps": [
      "$x'' + 4x' + 16x = 0$이므로 $\\delta = 2$, $\\omega_0 = 4$입니다. $\\delta \\lt \\omega_0$이므로 부족 감쇠입니다.",
      "근은 $-2\\pm 2\\sqrt{3}\\,\\mathrm{i}$, $\\omega_d = 2\\sqrt{3}$, $x = \\mathrm{e}^{-2t}(C_1\\cos 2\\sqrt{3}t + C_2\\sin 2\\sqrt{3}t)$입니다.",
      "$x(0) = C_1 = 0.1$; $x'(0) = -2C_1 + 2\\sqrt{3}C_2 = 0$이므로 $C_2 = \\frac{0.1}{\\sqrt{3}}$입니다.",
      "<strong>$x(t) = 0.1\\,\\mathrm{e}^{-2t}\\left(\\cos 2\\sqrt{3}t + \\frac{1}{\\sqrt{3}}\\sin 2\\sqrt{3}t\\right)$.</strong>"
     ]
    },
    {
     "task": "문제 $x'' + 9x = 6\\cos 3t$, $x(0) = 0$, $x'(0) = 0$을 푸세요.",
     "steps": [
      "외력의 진동수가 고유 진동수와 같으므로($\\omega = \\omega_0 = 3$) 공명이 일어납니다: $x_p = t(A\\cos 3t + B\\sin 3t)$.",
      "대입하면 $-6A\\sin 3t + 6B\\cos 3t = 6\\cos 3t$이므로 $A = 0$, $B = 1$, $x_p = t\\sin 3t$입니다.",
      "일반해는 $x = C_1\\cos 3t + C_2\\sin 3t + t\\sin 3t$이고, 조건에서 $C_1 = 0$, $3C_2 = 0$입니다.",
      "<strong>$x(t) = t\\sin 3t$</strong>, 진폭이 시간에 따라 선형으로 증가합니다."
     ]
    }
   ]
  },
  "v3-sustavy": {
   "title": "선형 미분방정식계와 위상 초상",
   "summary": "방정식계 $\\mathbf{x}' = A\\mathbf{x}$, 고윳값과 고유벡터를 이용한 풀이, 평형점의 분류.",
   "theory": [
    "<p>상수계수 1계 선형 방정식계는 $\\mathbf{x}' = A\\mathbf{x}$ 꼴이며, 여기서 $\\mathbf{x}(t) = (x_1(t), \\dots, x_n(t))^{T}$이고 $A$는\n       정사각행렬입니다. 해들은 차원이 $n$인 벡터공간을 이루며, 일차독립인 해 $n$개를 열로 하는 행렬을\n       <strong>기본행렬</strong>이라 합니다. 모든 $n$계 방정식은 방정식계로 쓸 수 있고(예: $y'' + py' + qy = 0$에서 $x_1 = y$, $x_2 = y'$로 놓음),\n       반대로 $2\\times 2$ 방정식계는 <strong>소거법</strong>으로 하나의 2계 방정식으로 바꿀 수 있습니다.</p>",
    "<p><strong>행렬을 이용한 방법.</strong> 해를 $\\mathbf{x} = \\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$ 꼴로 놓습니다. 대입하면 $A\\mathbf{v} = \\lambda\\mathbf{v}$: $\\lambda$는\n       행렬 $A$의 <strong>고윳값</strong>(방정식 $\\det(A - \\lambda I) = 0$의 근)이고 $\\mathbf{v}$는 대응하는 고유벡터입니다.</p>\n       <ul><li>서로 다른 실수 $\\lambda_1, \\lambda_2$: $\\mathbf{x} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$.</li>\n       <li>벡터 $\\mathbf{v} = \\mathbf{a} + \\mathrm{i}\\mathbf{b}$를 가진 복소수 $\\lambda = \\alpha\\pm\\beta\\mathrm{i}$: 실수해는\n       $\\mathbf{v}\\,\\mathrm{e}^{\\lambda t}$의 실수부와 허수부, 즉 $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\cos\\beta t - \\mathbf{b}\\sin\\beta t)$와 $\\mathrm{e}^{\\alpha t}(\\mathbf{a}\\sin\\beta t + \\mathbf{b}\\cos\\beta t)$입니다.</li>\n       <li>고유벡터가 $\\mathbf{v}$ 하나뿐인 중근 $\\lambda$: 둘째 해는 $(\\mathbf{v}t + \\mathbf{w})\\,\\mathrm{e}^{\\lambda t}$이며, 여기서 $(A - \\lambda I)\\mathbf{w} = \\mathbf{v}$입니다.</li></ul>",
    "<p>평면 방정식계의 <strong>위상 초상</strong>은 $xy$평면에서 궤적 $(x(t), y(t))$를 보여 줍니다. 점 $\\mathbf{0}$은 평형점(정류점)이며,\n       $\\det A\\neq 0$이면 유일한 평형점입니다. 그 종류는 고윳값, 또는 대각합 $\\mathrm{tr}\\,A$와 행렬식으로 정해집니다:</p>\n       <table class=\"tbl\"><tr><th>고윳값</th><th>종류</th><th>안정성</th></tr>\n       <tr><td>실수, 부호가 반대 ($\\det A \\lt 0$)</td><td>안장점</td><td>불안정</td></tr>\n       <tr><td>실수, 부호가 같음</td><td>마디점(node)</td><td>$\\lambda \\lt 0$이면 안정</td></tr>\n       <tr><td>$\\alpha\\pm\\beta\\mathrm{i}$, $\\alpha\\neq 0$</td><td>나선점(focus, 나선)</td><td>$\\alpha \\lt 0$이면 안정</td></tr>\n       <tr><td>$\\pm\\beta\\mathrm{i}$</td><td>중심점(center, 닫힌곡선)</td><td>안정, 점근적으로 안정하지는 않음</td></tr></table>",
    {
     "fig": "v3-fazovy",
     "caption": "방정식계 $x' = a_{11}x + a_{12}y$, $y' = a_{21}x + a_{22}y$의 위상 초상. 주황색 직선은 (고윳값이 실수일 때) 고유벡터의 방향이고, 작은 삼각형은 $t$가 증가할 때의 운동 방향을 나타냅니다. 행렬의 성분을 바꾸어 표의 모든 종류를 살펴보세요."
    }
   ],
   "examples": [
    {
     "task": "초기조건 $x(0) = 3$, $y(0) = 1$을 가진 방정식계 $x' = x + 2y$, $y' = 2x + y$를 푸세요.",
     "steps": [
      "$\\det\\begin{pmatrix}1 - \\lambda & 2\\\\ 2 & 1 - \\lambda\\end{pmatrix} = (1 - \\lambda)^{2} - 4 = 0$이므로 $\\lambda_1 = 3$, $\\lambda_2 = -1$입니다.",
      "고유벡터: $\\lambda_1 = 3$이면 $\\mathbf{v}_1 = (1, 1)^{T}$, $\\lambda_2 = -1$이면 $\\mathbf{v}_2 = (1, -1)^{T}$.",
      "$\\mathbf{x} = C_1(1, 1)^{T}\\mathrm{e}^{3t} + C_2(1, -1)^{T}\\mathrm{e}^{-t}$. 조건: $C_1 + C_2 = 3$, $C_1 - C_2 = 1$이므로 $C_1 = 2$, $C_2 = 1$입니다.",
      "<strong>$x = 2\\mathrm{e}^{3t} + \\mathrm{e}^{-t}$, $y = 2\\mathrm{e}^{3t} - \\mathrm{e}^{-t}$.</strong> 고윳값의 부호가 반대이므로 평형점은 안장점입니다."
     ]
    },
    {
     "task": "방정식계 $x' = y$, $y' = -5x - 2y$의 평형점의 종류를 정하고, 2계 방정식과 비교하세요.",
     "steps": [
      "$A = \\begin{pmatrix}0 & 1\\\\ -5 & -2\\end{pmatrix}$, $\\mathrm{tr}\\,A = -2$, $\\det A = 5$, 특성방정식 $\\lambda^{2} + 2\\lambda + 5 = 0$.",
      "고윳값 $-1\\pm 2\\mathrm{i}$는 실수부가 음수입니다: <strong>안정한 나선점</strong>이며, 궤적은 나선을 그리며 원점에 가까워집니다.",
      "이 방정식계는 방정식 $x'' + 2x' + 5x = 0$(감쇠 진동)을 나타낸 것이며, 그 해는 $x = \\mathrm{e}^{-t}(C_1\\cos 2t + C_2\\sin 2t)$입니다."
     ]
    }
   ]
  },
  "v3-laplace": {
   "title": "라플라스 변환",
   "summary": "정의, 변환표, 도함수의 변환, 부분분수 분해를 이용한 역변환과 초기값 문제의 풀이.",
   "theory": [
    "<p><strong>라플라스 변환</strong>은 $t \\ge 0$에서 정의된 함수 $f(t)$에 복소(여기서는 실수) 변수 $s$의 함수를 대응시킵니다:\n       $$\\mathcal{L}\\{f\\}(s) = F(s) = \\int_0^{\\infty}\\mathrm{e}^{-st}f(t)\\,dt.$$\n       $f$가 구간별로 연속이고 <strong>지수 위수</strong>를 가지면, 즉 $|f(t)| \\le M\\mathrm{e}^{s_0t}$이면 적분은 $s \\gt s_0$에서 수렴합니다.\n       예를 들어 $s \\gt a$일 때 $\\mathcal{L}\\{\\mathrm{e}^{at}\\}(s) = \\int_0^{\\infty}\\mathrm{e}^{-(s-a)t}\\,dt = \\frac{1}{s - a}$입니다. 변환은 선형이고\n       연속함수에 대해 단사이므로, 상 $F$에 대한 원함수 $f = \\mathcal{L}^{-1}\\{F\\}$는 유일합니다.</p>",
    "<table class=\"tbl\"><tr><th>$f(t)$</th><th>$F(s)$</th><th>$f(t)$</th><th>$F(s)$</th></tr>\n       <tr><td>$1$</td><td>$\\frac{1}{s}$</td><td>$\\sin\\omega t$</td><td>$\\frac{\\omega}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$t^{n}$</td><td>$\\frac{n!}{s^{n+1}}$</td><td>$\\cos\\omega t$</td><td>$\\frac{s}{s^{2} + \\omega^{2}}$</td></tr>\n       <tr><td>$\\mathrm{e}^{at}$</td><td>$\\frac{1}{s - a}$</td><td>$\\mathrm{e}^{at}f(t)$</td><td>$F(s - a)$</td></tr>\n       <tr><td>$f'(t)$</td><td>$sF(s) - f(0)$</td><td>$f''(t)$</td><td>$s^{2}F(s) - sf(0) - f'(0)$</td></tr>\n       <tr><td>$tf(t)$</td><td>$-F'(s)$</td><td>$u(t - a)f(t - a)$</td><td>$\\mathrm{e}^{-as}F(s)$</td></tr></table>\n       <p>여기서 $u$는 헤비사이드 함수(단위 계단 함수)입니다. 합성곱 $(f * g)(t) = \\int_0^{t}f(\\tau)g(t - \\tau)\\,d\\tau$의 변환은 곱 $F(s)G(s)$입니다.</p>",
    "<p><strong>초기값 문제의 풀이.</strong> 도함수의 변환 공식은 상수계수 선형 방정식을 $Y(s)$에 대한 대수방정식으로 바꾸며,\n       이때 초기조건이 자동으로 반영됩니다. 이 방정식에서 $Y(s)$(보통 유리함수)를 구하고, 이를\n       <strong>부분분수</strong>로 분해한 뒤 변환표를 이용하여 $y(t) = \\mathcal{L}^{-1}\\{Y\\}(t)$를 구합니다. 이 방법은 특히 우변이 불연속이거나 충격(임펄스) 함수일 때 유리합니다.</p>",
    {
     "fig": "v3-laplace",
     "caption": "풀이 과정: 변환, 상 영역에서의 대수적 계산, 역변환."
    }
   ],
   "examples": [
    {
     "task": "함수 $f(t) = 3\\mathrm{e}^{2t} - 4\\sin 3t + t^{2}$의 라플라스 변환을 구하세요.",
     "steps": [
      "선형성과 변환표를 이용합니다: $\\mathcal{L}\\{\\mathrm{e}^{2t}\\} = \\frac{1}{s - 2}$, $\\mathcal{L}\\{\\sin 3t\\} = \\frac{3}{s^{2} + 9}$, $\\mathcal{L}\\{t^{2}\\} = \\frac{2}{s^{3}}$.",
      "<strong>$F(s) = \\dfrac{3}{s - 2} - \\dfrac{12}{s^{2} + 9} + \\dfrac{2}{s^{3}}$</strong>, 단 $s \\gt 2$."
     ]
    },
    {
     "task": "라플라스 변환으로 문제 $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$을 푸세요.",
     "steps": [
      "변환합니다: $s^{2}Y - s - 0 + 3(sY - 1) + 2Y = 0$이므로 $(s^{2} + 3s + 2)Y = s + 3$입니다.",
      "$Y(s) = \\dfrac{s + 3}{(s + 1)(s + 2)} = \\dfrac{2}{s + 1} - \\dfrac{1}{s + 2}$ (부분분수, 예: 가림법(cover-up method) 이용).",
      "<strong>$y(t) = 2\\mathrm{e}^{-t} - \\mathrm{e}^{-2t}$.</strong> 검산: $y(0) = 1$, $y'(0) = -2 + 2 = 0$."
     ]
    }
   ]
  }
 },
 "strings": {
  "$A = {@0}$. Charakteristická rovnica $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$, kde $\\mathrm{tr}\\,A = {@2}$ a $\\det A = {@3}$. Korene sú $\\lambda_1 = {@4}$ a $\\lambda_2 = {@5}$.": "$A = {@0}$. 특성방정식은 $\\det(A - \\lambda I) = \\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = {@1}$이고, 여기서 $\\mathrm{tr}\\,A = {@2}$, $\\det A = {@3}$이에요. 근은 $\\lambda_1 = {@4}$, $\\lambda_2 = {@5}$예요.",
  "$C_1 + C_2 = {@0}$ a ${@1} = {@2}$": "$C_1 + C_2 = {@0}$, ${@1} = {@2}$",
  "$C_1 = {@0}$ a ${@1} = {@2}$": "$C_1 = {@0}$, ${@1} = {@2}$",
  "$M_y = {@0}$, $N_x = {@1}$, teda $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$ závisí len od $x$. Preto $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$. Kontrola: $(\\mu M)_y = {@11}$ a $(\\mu N)_x = {@12}$.": "$M_y = {@0}$, $N_x = {@1}$이므로 $\\frac{M_y - N_x}{N} = \\frac{{@2} - {@3}}{{@4}} = {@5}\\frac{{@6}}{x}$는 $x$에만 의존해요. 따라서 $\\mu = \\mathrm{e}^{\\int {@7}/x\\,dx} = \\mathrm{e}^{{@8}} = x^{{@9}}$, $k = {@10}$이에요. 확인: $(\\mu M)_y = {@11}$, $(\\mu N)_x = {@12}$.",
  "$P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$ s $A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$, teda asi ${@8}$ jedincov.": "$A = \\frac{K - P_0}{P_0} = \\frac{{@0}}{{@1}} = {@2}$일 때 $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$예요. $P({@3}) = \\frac{{@4}}{1 + {@5}\\,\\mathrm{e}^{-{@6}}} \\approx {@7}$이므로 약 ${@8}$개체예요.",
  "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. Podmienka $P = \\frac{K}{2}$ znamená $A\\mathrm{e}^{-{@4}t} = 1$, teda $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$ roka.": "$P(t) = \\frac{{@0}}{1 + A\\mathrm{e}^{-{@1}t}}$, $A = \\frac{{@2}}{{@3}}$. 조건 $P = \\frac{K}{2}$는 $A\\mathrm{e}^{-{@4}t} = 1$을 뜻하므로 $t = \\frac{\\ln A}{{@5}} = \\frac{\\ln {@6}}{{@7}} \\approx {@8}$년이에요.",
  "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$, z merania $k = {@2} \\approx {@3}$. Z podmienky ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$ máme $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$ minúty.": "$T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$이고 측정값에서 $k = {@2} \\approx {@3}$이에요. 조건 ${@4} + {@5}\\,\\mathrm{e}^{-kt} = {@6}$에서 $t = \\frac{1}{k}\\ln\\frac{{@7}}{{@8}} = {@9}\\cdot\\frac{\\ln({@10}/{@11})}{\\ln({@12}/{@13})} \\approx {@14}$분이에요.",
  "$\\lambda = {@0}$ (dvojnásobný koreň)": "$\\lambda = {@0}$ (중근)",
  "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$ a $\\mathcal{L}\\{y'\\} = sY{@2}$. Po dosadení $({@3})Y = {@4}{@5}{@6}$, teda ${@7}$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y{@0}{@1}$, $\\mathcal{L}\\{y'\\} = sY{@2}$. 대입하면 $({@3})Y = {@4}{@5}{@6}$이므로 ${@7}$이에요.",
  "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$, diskriminant charakteristickej rovnice $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$. {@3}": "$\\mathrm{tr}\\,A = {@0}$, $\\det A = {@1}$이고 특성방정식의 판별식은 $(\\mathrm{tr}\\,A)^{2} - 4\\det A = {@2}$예요. {@3}",
  "$\\omega_0 = {@0}$, riešenie $x = C_1\\cos {@1}t + C_2\\sin {@2}t$ s $C_1 = x(0) = {@3}$ a ${@4}C_2 = x'(0) = {@5}$, teda $C_2 = {@6}$. Amplitúda $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.": "$\\omega_0 = {@0}$이고 해는 $x = C_1\\cos {@1}t + C_2\\sin {@2}t$이며 $C_1 = x(0) = {@3}$, ${@4}C_2 = x'(0) = {@5}$이므로 $C_2 = {@6}$이에요. 진폭 $A = \\sqrt{C_1^{2} + C_2^{2}} = \\sqrt{{@7} + {@8}} \\approx {@9}$.",
  "$\\tau = RC = {@0}\\,\\mathrm{ms}$. Z podmienky $1 - \\mathrm{e}^{-t/\\tau} = {@1}$ máme $\\mathrm{e}^{-t/\\tau} = {@2}$, teda $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$.": "$\\tau = RC = {@0}\\,\\mathrm{ms}$. 조건 $1 - \\mathrm{e}^{-t/\\tau} = {@1}$에서 $\\mathrm{e}^{-t/\\tau} = {@2}$이므로 $t = \\tau\\ln\\frac{100}{{@3}} \\approx {@4}\\,\\mathrm{ms}$예요.",
  "$\\varphi'(y) = 0$, teda $\\varphi$ je konštanta, ktorú volíme nulovú": "$\\varphi'(y) = 0$이므로 $\\varphi$는 상수이고, 0으로 잡아요",
  "$\\varphi'(y) = {@0}$, teda $\\varphi(y) = {@1}$": "$\\varphi'(y) = {@0}$이므로 $\\varphi(y) = {@1}$",
  "$m(t) = m_0\\cdot 2^{-t/{@0}}$. Z podmienky $2^{-t/{@1}} = {@2}$ logaritmovaním $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$.": "$m(t) = m_0\\cdot 2^{-t/{@0}}$. 조건 $2^{-t/{@1}} = {@2}$에 로그를 취하면 $t = {@3}\\cdot\\frac{\\ln(100/{@4})}{\\ln 2} \\approx {@5}$예요.",
  "$y_p' = 2Ax + B$, $y_p'' = 2A$. Po dosadení a porovnaní koeficientov: pri $x^{2}$: ${@0} = {@1}$, $A = {@2}$; pri $x$: ${@3} = {@4}$, $B = {@5}$; absolútny člen: ${@6} = {@7}$, $C = {@8}$.": "$y_p' = 2Ax + B$, $y_p'' = 2A$. 대입하고 계수를 비교하면: $x^{2}$의 계수: ${@0} = {@1}$, $A = {@2}$; $x$의 계수: ${@3} = {@4}$, $B = {@5}$; 상수항: ${@6} = {@7}$, $C = {@8}$.",
  "$y_p' = A$, $y_p'' = 0$. Dosadíme: ${@0}{@1} = {@2}$. Porovnaním koeficientov: pri $x$ je ${@3} = {@4}$, teda $A = {@5}$; absolútny člen ${@6} = {@7}$, teda $B = {@8}$.": "$y_p' = A$, $y_p'' = 0$. 대입하면: ${@0}{@1} = {@2}$. 계수를 비교하면 $x$의 계수에서 ${@3} = {@4}$이므로 $A = {@5}$; 상수항에서 ${@6} = {@7}$이므로 $B = {@8}$이에요.",
  "${@0}$, teda $K = {@1}$ a $m = {@2}$. Súhlasí to s Liouvilleovým vzorcom: $W(x) = W(0)\\,\\mathrm{e}^{-px}$ s $p = {@3}$.": "${@0}$이므로 $K = {@1}$, $m = {@2}$예요. 이는 리우빌 공식 $W(x) = W(0)\\,\\mathrm{e}^{-px}$($p = {@3}$)과 일치해요.",
  ", teda $a = {@0}$": ", 따라서 $a = {@0}$",
  "Absolútny člen v čitateli kazí homogenitu. Takú rovnicu treba najprv posunúť do priesečníka priamok.": "분자의 상수항 때문에 동차성이 깨져요. 이런 방정식은 먼저 두 직선의 교점으로 평행이동해야 해요.",
  "Aké množstvo soli (v kg) je rovnovážne, teda pri ňom je $x' = 0$?": "평형 상태, 즉 $x' = 0$일 때의 소금의 양(kg)은 얼마일까요?",
  "Aké napätie (vo voltoch) bude na kondenzátore? {@0}": "축전기의 전압(V)은 얼마가 될까요? {@0}",
  "Akú smernicu má úsečka smerového poľa rovnice $y' = {@0}$ v bode $[{@1}; {@2}]$?": "점 $[{@1}; {@2}]$에서 방정식 $y' = {@0}$의 방향장 선분의 기울기는 얼마일까요?",
  "Akú teplotu bude mať teleso? Zaokrúhli na desatiny stupňa.": "물체의 온도는 얼마가 될까요? 소수 첫째 자리까지 반올림하세요.",
  "Aký je celkový koeficient pri $\\frac{1}{{@0}}$ v $Y(s)$, teda $A$?": "$Y(s)$에서 $\\frac{1}{{@0}}$의 전체 계수, 즉 $A$는 얼마일까요?",
  "Aký je súčin koreňov?": "두 근의 곱은 얼마일까요?",
  "Amplitúda nie je súčet $|C_1| + |C_2|$, ale $\\sqrt{C_1^{2} + C_2^{2}}$ (zloženie kosínusu a sínusu s rovnakou frekvenciou).": "진폭은 합 $|C_1| + |C_2|$가 아니라 $\\sqrt{C_1^{2} + C_2^{2}}$예요(진동수가 같은 코사인과 사인의 합성).",
  "Amplitúda vynútených kmitov v závislosti od frekvencie": "진동수에 따른 강제 진동의 진폭",
  "Bernoulliho rovnicu $y'{@0} = {@1}$ prevedieme substitúciou $z = y^{k}$ na lineárnu rovnicu $z' + Pz = Q$ s konštantnými koeficientmi. Urči $k$, $P$ a $Q$ (zlomky zapisuj v tvare $a/b$).": "베르누이 방정식 $y'{@0} = {@1}$을 치환 $z = y^{k}$로 상수계수 선형 방정식 $z' + Pz = Q$로 바꿔요. $k$, $P$, $Q$를 구하세요(분수는 $a/b$ 꼴로 쓰세요).",
  "Charakteristická rovnica ${@0}$ má diskriminant $D = {@1}$ a korene {@2}. {@3} je všeobecné riešenie ${@4}$.": "특성방정식 ${@0}$의 판별식은 $D = {@1}$이고 근은 {@2}이에요. {@3} 일반해는 ${@4}$예요.",
  "Charakteristická rovnica ${@0}$ má korene $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$. Z prvého riadku $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ pre $\\mathbf{v} = (1, m)^{T}$: ${@3} - \\lambda{@4} = 0$, teda $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$. Pre $t = 0$: $C_1 + C_2 = {@7}$ a ${@8} = {@9}$, odkiaľ $C_1 = {@10}$, $C_2 = {@11}$.": "특성방정식 ${@0}$의 근은 $\\lambda_1 = {@1}$, $\\lambda_2 = {@2}$예요. $\\mathbf{v} = (1, m)^{T}$에 대해 $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$의 첫째 행에서: ${@3} - \\lambda{@4} = 0$이므로 $\\mathbf{v}_1 = {@5}$, $\\mathbf{v}_2 = {@6}$이에요. $t = 0$일 때: $C_1 + C_2 = {@7}$, ${@8} = {@9}$에서 $C_1 = {@10}$, $C_2 = {@11}$이에요.",
  "Charakteristická rovnica ${@0}$ má korene ${@1}$ a ${@2}$, takže ${@3}$ je jednoduchý koreň (rezonancia) a v tvare $y_p$ je činiteľ $x$. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. Po dosadení sa členy s $x$ odčítajú a zostane $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$, teda $A = {@16}$.": "특성방정식 ${@0}$의 근은 ${@1}$과 ${@2}$이므로 ${@3}$은 단순근(공명)이고 $y_p$의 꼴에 인수 $x$가 붙어요. $y_p' = A(1{@4}){@5}$, $y_p'' = A({@6}{@7}){@8}$. 대입하면 $x$가 있는 항은 소거되고 $A(2\\cdot {@9}{@10}){@11} = {@12}A{@13} = {@14}{@15}$가 남으므로 $A = {@16}$이에요.",
  "Charakteristická rovnica ${@0}$ má korene {@1}, preto ${@2}$. Dosadením $x = 0$ do $y$ a $y'$ dostaneme sústavu {@3}, ktorej riešenie je $C_1 = {@4}$, $C_2 = {@5}$.": "특성방정식 ${@0}$의 근은 {@1}이므로 ${@2}$예요. $y$와 $y'$에 $x = 0$을 대입하면 연립방정식 {@3}을 얻고, 그 해는 $C_1 = {@4}$, $C_2 = {@5}$예요.",
  "Charakteristická rovnica ${@0}$ má {@1}. Pravá strana je {@2}{@3}, teda $\\alpha = {@4}$, a to {@5} charakteristickej rovnice ($k = {@6}$). Preto $y_p = {@7}$.": "특성방정식 ${@0}$의 근은 {@1}이에요. 우변은 {@2}{@3}이므로 $\\alpha = {@4}$이고, 이 수는 특성방정식의 {@5}($k = {@6}$). 따라서 $y_p = {@7}$이에요.",
  "Charakteristická rovnica (po vydelení koeficientom pri $y''$) je $\\lambda^{2} + p\\lambda + q = 0$. Aký je súčet jej koreňov?": "($y''$의 계수로 나눈) 특성방정식은 $\\lambda^{2} + p\\lambda + q = 0$이에요. 두 근의 합은 얼마일까요?",
  "Delil si len číslom ${@0}$, ale v riešení je $x^{2}$, teda $x_0^{2}$.": "${@0}$로만 나눴는데, 해에는 $x^{2}$, 즉 $x_0^{2}$이 있어요.",
  "Derivácia $(C_1 + C_2x){@0}$ má pri $x = 0$ hodnotu ${@1}C_1 + C_2$; zabudol si na člen z derivácie exponenciály.": "$(C_1 + C_2x){@0}$의 도함수는 $x = 0$에서 ${@1}C_1 + C_2$예요. 지수함수의 미분에서 나오는 항을 잊었어요.",
  "Derivácia $C_2\\sin {@0}t$ je ${@1}C_2\\cos {@2}t$, preto $C_2 = \\frac{x'(0)}{\\omega_0}$, nie $x'(0)$.": "$C_2\\sin {@0}t$의 도함수는 ${@1}C_2\\cos {@2}t$이므로 $C_2$는 $x'(0)$이 아니라 $\\frac{x'(0)}{\\omega_0}$이에요.",
  "Derivácie $y_p$ nie sú nulové: $y_p' = {@0}A{@1}$ a $y_p'' = {@2}A{@3}$ treba tiež dosadiť.": "$y_p$의 도함수는 0이 아니에요: $y_p' = {@0}A{@1}$, $y_p'' = {@2}A{@3}$도 대입해야 해요.",
  "Determinant je záporný, vlastné čísla sú reálne s opačnými znamienkami: sedlo.": "행렬식이 음수이므로 고윳값은 부호가 반대인 실수예요: 안장점.",
  "Do všeobecného riešenia dosaď $x = 0$ a $y = y_0$ a vyjadri $C$.": "일반해에 $x = 0$, $y = y_0$을 대입하고 $C$를 구하세요.",
  "Dosadením $y = \\mathrm{e}^{\\lambda x}$ dostaneme {@0}${@1}$. Podľa Vietových vzťahov $\\lambda_1 + \\lambda_2 = {@2}$ a $\\lambda_1\\lambda_2 = {@3}$, korene sú {@4}. Všeobecné riešenie je ${@5}$.": "$y = \\mathrm{e}^{\\lambda x}$를 대입하면 {@0}${@1}$을 얻어요. 근과 계수의 관계에 따라 $\\lambda_1 + \\lambda_2 = {@2}$, $\\lambda_1\\lambda_2 = {@3}$이고 근은 {@4}이에요. 일반해는 ${@5}$예요.",
  "Dosadíme $x = 0$: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$, odkiaľ $C = {@3}$. Riešenie Cauchyho úlohy je $y = {@4}$.": "$x = 0$을 대입하면: $y(0) = C\\cdot\\mathrm{e}^{0}{@0} = C{@1} = {@2}$에서 $C = {@3}$이에요. 코시 문제의 해는 $y = {@4}$예요.",
  "Dosadíme $x_p = A\\cos {@0}$: $x_p'' = -{@1}A\\cos {@2}$, teda $({@3} - {@4})A = {@5}$ a $A = {@6}$. {@7}": "$x_p = A\\cos {@0}$을 대입하면: $x_p'' = -{@1}A\\cos {@2}$이므로 $({@3} - {@4})A = {@5}$, $A = {@6}$이에요. {@7}",
  "Dosadíme: $C\\cdot {@0}^{2}{@1} = {@2}$, teda ${@3}C = {@4}$ a $C = {@5}$.": "대입하면: $C\\cdot {@0}^{2}{@1} = {@2}$이므로 ${@3}C = {@4}$, $C = {@5}$예요.",
  "Dosadíme: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$, teda $\\frac{C}{{@4}} = {@5}$ a $C = {@6}$. (Kontrola: ľavá strana rovnice je $(xy)'$ a $xy = {@7} + C$.)": "대입하면: ${@0}\\cdot {@1} + \\frac{C}{{@2}} = {@3}$이므로 $\\frac{C}{{@4}} = {@5}$, $C = {@6}$이에요. (확인: 방정식의 좌변은 $(xy)'$이고 $xy = {@7} + C$예요.)",
  "Dosaď $P = \\frac{K}{2}$ do riešenia $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$; dostaneš $A\\mathrm{e}^{-rt} = 1$.": "해 $P = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$에 $P = \\frac{K}{2}$를 대입하면 $A\\mathrm{e}^{-rt} = 1$이 나와요.",
  "Dosaď $t = 0$ a vyrieš sústavu pre konštanty. Zadaj $C_1$ a $C_2$.": "$t = 0$을 대입하고 상수에 대한 연립방정식을 푸세요. $C_1$과 $C_2$를 입력하세요.",
  "Dosaď $tx$ namiesto $x$ a $ty$ namiesto $y$. Pri homogénnej rovnici sa pravá strana nezmení.": "$x$ 대신 $tx$, $y$ 대신 $ty$를 대입하세요. 동차 방정식이면 우변이 변하지 않아요.",
  "Dosaď $x = 0$ do $y_1, y_2, y_1', y_2'$.": "$y_1, y_2, y_1', y_2'$에 $x = 0$을 대입하세요.",
  "Dosaď $x = 0$ do všeobecného riešenia a jeho derivácie a z vzniknutej sústavy urči $C_1$.": "일반해와 그 도함수에 $x = 0$을 대입하고, 생기는 연립방정식에서 $C_1$을 구하세요.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyjadri $C$.": "일반해에 $x = x_0$, $y = y_0$을 대입하고 $C$를 구하세요.",
  "Dosaď $x = x_0$, $y = y_0$ do všeobecného riešenia a vyrieš lineárnu rovnicu pre $C$.": "일반해에 $x = x_0$, $y = y_0$을 대입하고 $C$에 대한 일차방정식을 푸세요.",
  "Dosaď $x_p$ do rovnice: $(\\omega_0^{2} - \\omega^{2})A = F_0$.": "$x_p$를 방정식에 대입하세요: $(\\omega_0^{2} - \\omega^{2})A = F_0$.",
  "Dosaď $y_p = Ax + B$ do rovnice a porovnaj koeficienty pri $x$ a absolútne členy.": "$y_p = Ax + B$를 방정식에 대입하고 $x$의 계수와 상수항을 비교하세요.",
  "Dosaď $y_p = A{@0}$ do rovnice a urči $A$.": "$y_p = A{@0}$를 방정식에 대입하고 $A$를 구하세요.",
  "Dosaď $y_p$ do rovnice a porovnaj koeficienty pri kosínuse a pri sínuse; dostaneš sústavu dvoch rovníc pre $A$, $B$.": "$y_p$를 방정식에 대입하고 코사인과 사인의 계수를 비교하세요. $A$, $B$에 대한 두 방정식의 연립방정식이 나와요.",
  "Dosaď konštantu $y_p = K$ do rovnice ($y_p' = 0$) a pozorne vyjadri $K$.": "상수 $y_p = K$를 방정식에 대입하고($y_p' = 0$) $K$를 주의해서 구하세요.",
  "Druhá derivácia kosínusu je záporná: $x_p'' = -{@0}A\\cos {@1}$.": "코사인의 이계도함수는 음수예요: $x_p'' = -{@0}A\\cos {@1}$.",
  "Exponenciálne neklesá samotná teplota telesa, ale jej rozdiel od teploty okolia $T - T_o$.": "지수적으로 감소하는 것은 물체의 온도 자체가 아니라 주변 온도와의 차 $T - T_o$예요.",
  "Exponenciálny a logistický rast": "지수적 증가와 로지스틱 증가",
  "Exponent je reálna časť koreňov $\\alpha = -\\frac{p}{2}$; skontroluj jej znamienko.": "지수는 근의 실수부 $\\alpha = -\\frac{p}{2}$예요. 그 부호를 확인하세요.",
  "Funkcia $1 + y^{2}$ nemá nulové body, stacionárne riešenia neexistujú. Oddelíme premenné: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$, teda $\\mathrm{arctg}\\,y = {@1} + C$ a $y = \\mathrm{tg}({@2} + C)$. Konštanta je vnútri argumentu; napríklad $y = \\mathrm{tg}({@3}) + C$ rovnicu pre $C\\neq 0$ nespĺňa.": "함수 $1 + y^{2}$은 영점이 없으므로 정상해는 없어요. 변수를 분리하면: $\\frac{dy}{1 + y^{2}} = {@0}\\,dx$이므로 $\\mathrm{arctg}\\,y = {@1} + C$, $y = \\mathrm{tg}({@2} + C)$예요. 상수는 인수 안에 있어요. 예를 들어 $y = \\mathrm{tg}({@3}) + C$는 $C\\neq 0$일 때 방정식을 만족하지 않아요.",
  "Funkcie ${@0}$ tvoria fundamentálny systém rovnice ${@1} = 0$. Ich wronskián má tvar $W(x) = K\\mathrm{e}^{mx}$. Urči $K$ a $m$.": "함수 ${@0}$은 방정식 ${@1} = 0$의 기본해 집합이에요. 이들의 론스키 행렬식은 $W(x) = K\\mathrm{e}^{mx}$ 꼴이에요. $K$와 $m$을 구하세요.",
  "Fázový portrét lineárnej sústavy": "선형 방정식계의 위상 초상",
  "Goniometrické funkcie patria ku komplexným koreňom ($D \\lt 0$). Aký je tu diskriminant?": "삼각함수는 복소근($D \\lt 0$)에 해당해요. 여기서 판별식은 얼마일까요?",
  "Homogénna rovnica $y'{@0} = 0$ dáva $y' = {@1}$; skontroluj znamienko v exponente.": "동차 방정식 $y'{@0} = 0$에서 $y' = {@1}$이에요. 지수의 부호를 확인하세요.",
  "Homogénna rovnica $y'{@0} = 0$ má riešenie $y_h = C{@1}$. Partikulárne riešenie hľadáme ako konštantu $y_p = K$: ${@2}K = {@3}$, teda $K = {@4}$. Všeobecné riešenie je ${@5}$.": "동차 방정식 $y'{@0} = 0$의 해는 $y_h = C{@1}$이에요. 특수해는 상수 $y_p = K$로 찾아요: ${@2}K = {@3}$이므로 $K = {@4}$예요. 일반해는 ${@5}$예요.",
  "Hľadaj najvyšší rád derivácie. Exponent nad zátvorkou, napríklad $(y')^{3}$, rád nezvyšuje.": "도함수의 가장 높은 계수(order)를 찾으세요. $(y')^{3}$처럼 괄호 위의 지수는 계수를 높이지 않아요.",
  "Integračný faktor je $\\mu = {@0}$: $(y{@1})' = {@2}$. Integrovaním $y{@3} = {@4} + B$, teda $y = {@5} + B{@6}$ (partikulárne riešenie môžeme nájsť aj dosadením $y_p = A{@7}$: $A({@8}{@9}) = {@10}$, $A = {@11}$). Z podmienky ${@12} + B = {@13}$, teda $B = {@14}$. Odpoveď: $A = {@15}$, $B = {@16}$.": "적분인자는 $\\mu = {@0}$이에요: $(y{@1})' = {@2}$. 적분하면 $y{@3} = {@4} + B$이므로 $y = {@5} + B{@6}$이에요($y_p = A{@7}$를 대입해서 특수해를 구할 수도 있어요: $A({@8}{@9}) = {@10}$, $A = {@11}$). 조건 ${@12} + B = {@13}$에서 $B = {@14}$예요. 답: $A = {@15}$, $B = {@16}$.",
  "Integračný faktor je ${@0}$ a riešenie má tvar $y = {@1} + \\frac{C}{{@2}}$. Urči $C$ zo začiatočnej podmienky.": "적분인자는 ${@0}$이고 해는 $y = {@1} + \\frac{C}{{@2}}$ 꼴이에요. 초기조건에서 $C$를 구하세요.",
  "Integruj $M$ podľa $x$ (bez $\\varphi(y)$) a túto časť $F$ vyčísli v bode $[{@0}; {@1}]$.": "$M$을 $x$에 대해 적분하고($\\varphi(y)$ 없이) 이 부분의 $F$를 점 $[{@0}; {@1}]$에서 계산하세요.",
  "Integruj $M$ podľa $x$, doplň neznámu funkciu $\\varphi(y)$ a urči ju porovnaním $F_y$ s $N$. Nakoniec dosaď bod.": "$M$을 $x$에 대해 적분하고 미지의 함수 $\\varphi(y)$를 더한 뒤, $F_y$를 $N$과 비교해서 그 함수를 구하세요. 마지막으로 점을 대입하세요.",
  "Integrál dáva $\\mathrm{arctg}\\,y = \\dots$; na vyjadrenie $y$ treba použiť inverznú funkciu k arkustangensu.": "적분하면 $\\mathrm{arctg}\\,y = \\dots$가 나와요. $y$를 나타내려면 아크탄젠트의 역함수를 써야 해요.",
  "Integrálne krivky rovnice y' = xy": "방정식 y' = xy의 적분곡선",
  "K koeficientu z rozkladu pripočítaj člen zo začiatočnej podmienky.": "부분분수 분해의 계수에 초기조건에서 나온 항을 더하세요.",
  "Každú funkciu zderivuj a dosaď do rovnice. Riešenie musí rovnicu spĺňať pre všetky $x$.": "각 함수를 미분해서 방정식에 대입하세요. 해는 모든 $x$에 대해 방정식을 만족해야 해요.",
  "Keďže $c^{2} = 4mk$": "$c^{2} = 4mk$이므로",
  "Keďže $c^{2} \\gt 4mk$": "$c^{2} \\gt 4mk$이므로",
  "Keďže $c^{2} \\lt 4mk$": "$c^{2} \\lt 4mk$이므로",
  "Keďže ${@0}\\neq {@1}$, nejde o rezonanciu.": "${@0}\\neq {@1}$이므로 공명이 아니에요.",
  "Kladné $A$ znamená, že kmity sú vo fáze s budiacou silou.": "$A$가 양수이면 진동이 외력과 같은 위상이라는 뜻이에요.",
  "Koeficient p": "계수 p",
  "Koeficient pri $x'$ (po vydelení hmotnosťou) je $2\\delta$, nie $\\delta$. Najprv ho vydeľ dvoma.": "($x'$의 계수를 질량으로 나눈) 계수는 $\\delta$가 아니라 $2\\delta$예요. 먼저 2로 나누세요.",
  "Koeficient q": "계수 q",
  "Koeficient rastu k": "증가율 k",
  "Koeficient útlmu δ": "감쇠 계수 δ",
  "Koeficienty počítaj postupne od najvyššej mocniny: najprv $A$ z člena s $x^{2}$, potom $B$, nakoniec $C$.": "계수를 가장 높은 거듭제곱부터 차례로 계산하세요: 먼저 $x^{2}$ 항에서 $A$, 그다음 $B$, 마지막으로 $C$.",
  "Konštanta $A$ vychádza z podmienky $P(0) = \\frac{K}{1 + A} = P_0$, teda $A = \\frac{K - P_0}{P_0}$, nie $\\frac{K}{P_0}$.": "상수 $A$는 조건 $P(0) = \\frac{K}{1 + A} = P_0$에서 나오므로 $\\frac{K}{P_0}$가 아니라 $A = \\frac{K - P_0}{P_0}$예요.",
  "Konštanta $C$ v riešení je delená integračným faktorom ${@0}$; pri $x = 2$ ju treba tiež vydeliť.": "해의 상수 $C$는 적분인자 ${@0}$로 나누어져 있어요. $x = 2$에서도 나누어야 해요.",
  "Konštanta rozpadu nie je $\\frac{1}{T}$, ale $k = \\frac{\\ln 2}{T}$: za čas $T$ musí množstvo klesnúť presne na polovicu.": "붕괴 상수는 $\\frac{1}{T}$가 아니라 $k = \\frac{\\ln 2}{T}$예요: 시간 $T$ 동안 양이 정확히 절반으로 줄어야 해요.",
  "Konštanta vzniká pri integrovaní, teda v rovnosti $\\mathrm{arctg}\\,y = \\dots + C$. Keď z nej vyjadríš $y$, kam sa $C$ dostane?": "상수는 적분할 때, 즉 등식 $\\mathrm{arctg}\\,y = \\dots + C$에서 생겨요. 여기서 $y$를 나타내면 $C$는 어디로 갈까요?",
  "Koľko gramov izotopu zostane? {@0}": "동위원소는 몇 그램 남을까요? {@0}",
  "Koľko je $y({@0})^{2}$?": "$y({@0})^{2}$은 얼마일까요?",
  "Koľko jedincov bude mať populácia? Zaokrúhli na celé číslo.": "개체군의 개체 수는 얼마가 될까요? 정수로 반올림하세요.",
  "Koľko kilogramov soli bude v nádrži po ${@0}$ minútach? {@1}": "${@0}$분 후 탱크에는 소금이 몇 kg 있을까요? {@1}",
  "Koľko polčasov rozpadu uplynie za ${@0}$ {@1}? {@2}": "${@0}$ {@1} 동안 반감기가 몇 번 지날까요? {@2}",
  "Ktorá funkcia je všeobecným riešením rovnice $y' = {@0}(1 + y^{2})$?": "방정식 $y' = {@0}(1 + y^{2})$의 일반해는 어느 함수일까요?",
  "Ktorá funkcia je všeobecným riešením rovnice $y'{@0} = {@1}$?": "방정식 $y'{@0} = {@1}$의 일반해는 어느 함수일까요?",
  "Ktorá funkcia je všeobecným riešením rovnice ${@0} = 0$?": "방정식 ${@0} = 0$의 일반해는 어느 함수일까요?",
  "Ktorá z funkcií je riešením rovnice ${@0}$?": "방정식 ${@0}$의 해는 어느 함수일까요?",
  "Ktorá z rovníc je homogénna, teda dá sa zapísať v tvare $y' = \\varphi\\left(\\frac{y}{x}\\right)$?": "$y' = \\varphi\\left(\\frac{y}{x}\\right)$ 꼴로 쓸 수 있는 동차 방정식은 어느 것일까요?",
  "Ktorý je Laplaceov obraz $Y(s)$ riešenia úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$?": "문제 ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$의 해의 라플라스 변환 $Y(s)$는 어느 것일까요?",
  "Laplaceovou transformáciou vyrieš úlohu $y'{@0} = {@1}$, $y(0) = {@2}$. Riešenie má tvar $y(t) = A{@3} + B{@4}$; urči $A$ a $B$.": "라플라스 변환으로 문제 $y'{@0} = {@1}$, $y(0) = {@2}$를 푸세요. 해는 $y(t) = A{@3} + B{@4}$ 꼴이에요. $A$와 $B$를 구하세요.",
  "Liouvilleov vzorec: $W(x) = W(0)\\mathrm{e}^{-px}$.": "리우빌 공식: $W(x) = W(0)\\mathrm{e}^{-px}$.",
  "Menovateľ je charakteristický polynóm rovnice: koeficienty pri $s$ majú rovnaké znamienka ako pri $y'$ v rovnici.": "분모는 방정식의 특성다항식이에요: $s$의 계수는 방정식의 $y'$의 계수와 부호가 같아요.",
  "Menovateľ rozložíme: ${@0} = (s{@1})(s{@2})$. Rozklad na parciálne zlomky: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. Zakrývacia metóda: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. Preto $f(t) = {@17}{@18}$.": "분모를 인수분해해요: ${@0} = (s{@1})(s{@2})$. 부분분수 분해: $F(s) = \\frac{A}{s{@3}} + \\frac{B}{s{@4}}$. 가림법(cover-up)으로: $A = \\frac{{@5}\\cdot {@6}{@7}}{{@8} - {@9}} = {@10}$, $B = \\frac{{@11}\\cdot {@12}{@13}}{{@14} - {@15}} = {@16}$. 따라서 $f(t) = {@17}{@18}$이에요.",
  "Mocnina $x$ v tvare $y_p$ sa rovná násobnosti čísla ${@0}$ ako koreňa charakteristickej rovnice. Over túto násobnosť.": "$y_p$의 꼴에서 $x$의 거듭제곱은 수 ${@0}$이 특성방정식의 근으로서 갖는 중복도와 같아요. 이 중복도를 확인하세요.",
  "Multiplikatívna konštanta vzniká pri rovniciach $y' = g(x)y$ (cez logaritmus). Tu integruješ $\\frac{1}{1 + y^{2}}$, teda konštanta je aditívna v argumente.": "곱해지는 상수는 $y' = g(x)y$ 꼴의 방정식에서 (로그를 통해) 생겨요. 여기서는 $\\frac{1}{1 + y^{2}}$을 적분하므로 상수는 인수 안에 더해져요.",
  "Najprv skontroluj znamienko $\\det A$: rozhoduje, či majú vlastné čísla opačné znamienka.": "먼저 $\\det A$의 부호를 확인하세요: 고윳값의 부호가 반대인지가 여기서 결정돼요.",
  "Najprv urči $k$ z merania, potom vyrieš $T(t) = T^{*}$ logaritmovaním.": "먼저 측정값에서 $k$를 구한 다음 $T(t) = T^{*}$를 로그를 취해서 푸세요.",
  "Nech $F(s) = \\mathcal{L}\\{f\\}(s)$ pre $f(t) = {@0}$. Vypočítaj $F({@1})$ (presne ako zlomok, alebo na 3 desatinné miesta).": "$f(t) = {@0}$에 대해 $F(s) = \\mathcal{L}\\{f\\}(s)$라 해요. $F({@1})$을 계산하세요(분수로 정확히, 또는 소수 셋째 자리까지).",
  "Nenabitý kondenzátor s kapacitou ${@0}\\,\\mu\\mathrm{F}$ nabíjame zo zdroja s napätím ${@1}\\,\\mathrm{V}$ cez rezistor s odporom ${@2}\\,\\mathrm{k\\Omega}$.": "전기 용량이 ${@0}\\,\\mu\\mathrm{F}$인 충전되지 않은 축전기를 전압 ${@1}\\,\\mathrm{V}$의 전원에 저항 ${@2}\\,\\mathrm{k\\Omega}$의 저항기를 통해 충전해요.",
  "Nesčítavaj integrál $M$ podľa $x$ a integrál $N$ podľa $y$: zmiešané členy by si tak započítal dvakrát. Z $N$ ber len členy, ktoré ešte chýbajú.": "$M$을 $x$에 대해 적분한 것과 $N$을 $y$에 대해 적분한 것을 더하지 마세요: 그러면 혼합항을 두 번 세게 돼요. $N$에서는 아직 없는 항만 가져오세요.",
  "Netlmený oscilátor $x'' + {@0}x = 0$ má začiatočné podmienky $x(0) = {@1}$, $x'(0) = {@2}$. Urči amplitúdu kmitov. {@3}": "비감쇠 진동자 $x'' + {@0}x = 0$의 초기조건은 $x(0) = {@1}$, $x'(0) = {@2}$예요. 진동의 진폭을 구하세요. {@3}",
  "Netlmený oscilátor je budený periodickou silou: $x'' + {@0}x = {@1}$. Ustálené vynútené kmity majú tvar $x_p = A\\cos {@2}$. Urči $A$ (ako zlomok alebo celé číslo).": "비감쇠 진동자에 주기적인 외력이 작용해요: $x'' + {@0}x = {@1}$. 정상 상태의 강제 진동은 $x_p = A\\cos {@2}$ 꼴이에요. $A$를 구하세요(분수 또는 정수로).",
  "Nosná kapacita K": "환경 수용력 K",
  "Nádrž obsahuje ${@0}$ litrov {@1}. Priteká do nej {@2} a dokonale premiešaný roztok rovnako rýchlo odteká. Koľko kilogramov soli bude v nádrži po ${@3}$ minútach? {@4}": "탱크에 {@1} ${@0}$리터가 들어 있어요. 탱크로 {@2} 흘러 들어오고, 완전히 섞인 용액이 같은 빠르기로 흘러 나가요. ${@3}$분 후 탱크에는 소금이 몇 kg 있을까요? {@4}",
  "Nájdi korene charakteristickej rovnice diferenciálnej rovnice ${@0}$. Zadaj ich oddelené bodkočiarkou.": "미분방정식 ${@0}$의 특성방정식의 근을 구하세요. 세미콜론으로 구분해서 입력하세요.",
  "Nájdi vlastné čísla a vlastné vektory v tvare $(1, m)^{T}$, potom dosaď $t = 0$ a vyrieš sústavu pre $C_1$, $C_2$.": "고윳값과 $(1, m)^{T}$ 꼴의 고유벡터를 구한 다음 $t = 0$을 대입하고 $C_1$, $C_2$에 대한 연립방정식을 푸세요.",
  "Nájdi vlastné čísla matice sústavy {@0}. Zadaj ich oddelené bodkočiarkou.": "방정식계 {@0}의 행렬의 고윳값을 구하세요. 세미콜론으로 구분해서 입력하세요.",
  "Nájdi vzor $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$ funkcie $F(s) = \\dfrac{{@0}}{{@1}}$. Výsledok má tvar $f(t) = A{@2} + B{@3}$; urči $A$ a $B$.": "함수 $F(s) = \\dfrac{{@0}}{{@1}}$의 역변환 $f(t) = \\mathcal{L}^{-1}\\{F\\}(t)$를 구하세요. 결과는 $f(t) = A{@2} + B{@3}$ 꼴이에요. $A$와 $B$를 구하세요.",
  "Objem sa nemení, koncentrácia v nádrži je $\\frac{x}{{@0}}$. Bilancia: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. Rovnovážna hodnota je $cV = {@5}$, preto $x(t) = {@6}$ a $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$.": "부피는 변하지 않고 탱크 안의 농도는 $\\frac{x}{{@0}}$이에요. 수지: $x' = {@1}-\\frac{{@2}}{{@3}}x$, $x(0) = {@4}$. 평형값은 $cV = {@5}$이므로 $x(t) = {@6}$이고 $x({@7}) = {@8} \\approx {@9}\\,\\mathrm{kg}$이에요.",
  "Obraz exponenciály je $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$, nie $\\frac{1}{s + a}$.": "지수함수의 변환은 $\\frac{1}{s + a}$가 아니라 $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s - a}$예요.",
  "Obraz mocniny je $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$; zabudol si na faktoriál.": "거듭제곱의 변환은 $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$이에요. 계승을 잊었어요.",
  "Oddelíme premenné: $y\\,dy = {@0}\\,dx$, teda $\\frac{y^{2}}{2} = {@1} + C$, čiže $y^{2} = {@2} + 2C$. Z podmienky $2C = {@3}$, takže $y^{2} = {@4} + {@5}$. Keďže $y(0) \\gt 0$, berieme kladnú odmocninu: $y = \\sqrt{{@6} + {@7}}$ a $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$.": "변수를 분리하면: $y\\,dy = {@0}\\,dx$이므로 $\\frac{y^{2}}{2} = {@1} + C$, 즉 $y^{2} = {@2} + 2C$예요. 조건에서 $2C = {@3}$이므로 $y^{2} = {@4} + {@5}$예요. $y(0) \\gt 0$이므로 양의 제곱근을 택해요: $y = \\sqrt{{@6} + {@7}}$이고 $y({@8}) = \\sqrt{{@9} + {@10}} = \\sqrt{{@11}} = {@12}$예요.",
  "Oddeľ premenné $\\frac{dy}{y^{2}} = k\\,dx$ a pamätaj, že $\\int y^{-2}\\,dy = -\\frac{1}{y}$.": "변수를 분리해서 $\\frac{dy}{y^{2}} = k\\,dx$로 쓰고 $\\int y^{-2}\\,dy = -\\frac{1}{y}$임을 기억하세요.",
  "Oddeľ premenné $y\\,dy = kx\\,dx$ a integruj. Znamienko odmocniny urči zo začiatočnej podmienky.": "변수를 분리해서 $y\\,dy = kx\\,dx$로 쓰고 적분하세요. 제곱근의 부호는 초기조건으로 정하세요.",
  "Odmocnina súčtu nie je súčet odmocnín: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. Najprv sčítaj pod odmocninou.": "합의 제곱근은 제곱근의 합이 아니에요: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$. 먼저 제곱근 안에서 더하세요.",
  "Odtok soli je koncentrácia krát prietok, teda $\\frac{x}{V}\\cdot q$. V exponente preto musí byť aj prietok $q$.": "소금의 유출량은 농도 곱하기 유량, 즉 $\\frac{x}{V}\\cdot q$예요. 그래서 지수에도 유량 $q$가 있어야 해요.",
  "Over dosadením: pre $y = {@0}x$ je $xy' = {@1}x$, no pravá strana ${@2}y$ je iná.": "대입해서 확인해 보세요: $y = {@0}x$이면 $xy' = {@1}x$인데 우변 ${@2}y$는 달라요.",
  "Overenie: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. Integrovaním $M$ podľa $x$: $F = {@1} + \\varphi(y)$. Z podmienky $F_y = N$ vyjde {@2}. Preto $F(x, y) = {@3}$ a $C = F({@4}, {@5}) = {@6}$.": "확인: $\\frac{\\partial M}{\\partial y} = {@0} = \\frac{\\partial N}{\\partial x}$. $M$을 $x$에 대해 적분하면: $F = {@1} + \\varphi(y)$. 조건 $F_y = N$에서 {@2}. 따라서 $F(x, y) = {@3}$이고 $C = F({@4}, {@5}) = {@6}$이에요.",
  "Partikulárne riešenie hľadaj v tvare $A\\mathrm{e}^{cx}$ (dosaď do rovnice), konštantu $B$ urči zo začiatočnej podmienky.": "특수해는 $A\\mathrm{e}^{cx}$ 꼴로 찾고(방정식에 대입하세요), 상수 $B$는 초기조건으로 구하세요.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax + B$. Urči $A$ a $B$.": "방정식 ${@0} = {@1}$의 특수해를 $y_p = Ax + B$ 꼴로 찾아요. $A$와 $B$를 구하세요.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = Ax^{2} + Bx + C$. Urči $A$, $B$ a $C$.": "방정식 ${@0} = {@1}$의 특수해를 $y_p = Ax^{2} + Bx + C$ 꼴로 찾아요. $A$, $B$, $C$를 구하세요.",
  "Partikulárne riešenie rovnice ${@0} = {@1}$ hľadáme v tvare $y_p = A{@2} + B{@3}$. Urči $A$ a $B$.": "방정식 ${@0} = {@1}$의 특수해를 $y_p = A{@2} + B{@3}$ 꼴로 찾아요. $A$와 $B$를 구하세요.",
  "Perióda netlmených kmitov je $T = 2\\pi\\sqrt{m/k}$.": "비감쇠 진동의 주기는 $T = 2\\pi\\sqrt{m/k}$예요.",
  "Po dosadení $x_p$ dostaneš $KA\\cos {@0} = {@1}\\cos {@2}$. Urči $K$.": "$x_p$를 대입하면 $KA\\cos {@0} = {@1}\\cos {@2}$이 나와요. $K$를 구하세요.",
  "Po dosadení $y_p = Ax{@0}$ zostane $A(2r + p){@1}$. Vypočítaj $2r + p$.": "$y_p = Ax{@0}$를 대입하면 $A(2r + p){@1}$이 남아요. $2r + p$를 계산하세요.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c + a) = b$: derivácia dá $c$ a člen ${@1}$ pridá $+a$, nie $-a$.": "$y_p = A{@0}$를 대입하면 $A(c + a) = b$가 나와요: 미분하면 $c$가 나오고 항 ${@1}$은 $-a$가 아니라 $+a$를 더해요.",
  "Po dosadení $y_p = A{@0}$ dostaneš $A(c^{2} + pc + q){@1}$. Vypočítaj hodnotu zátvorky.": "$y_p = A{@0}$를 대입하면 $A(c^{2} + pc + q){@1}$이 나와요. 괄호의 값을 계산하세요.",
  "Po dosadení $z' = (1-n)y^{-n}y'$ treba celú rovnicu vynásobiť číslom $1 - n$, teda aj koeficienty $p$ a $q$.": "$z' = (1-n)y^{-n}y'$을 대입한 뒤 방정식 전체에 $1 - n$을 곱해야 하므로 계수 $p$와 $q$에도 곱해져요.",
  "Po dosadení má rovnica pre koeficienty pri ${@0}$ tvar $uA{@1} = {@2}$. Urči $u$.": "대입하면 ${@0}$의 계수에 대한 방정식은 $uA{@1} = {@2}$ 꼴이에요. $u$를 구하세요.",
  "Po integrovaní máš $-\\frac{1}{u} = \\ln x + C$. Urči $C$ (zlomok alebo celé číslo).": "적분하면 $-\\frac{1}{u} = \\ln x + C$예요. $C$를 구하세요(분수 또는 정수).",
  "Po integrovaní máš $\\frac{u^{2}}{2}$; pri vyjadrení $u^{2}$ musíš dvoma vynásobiť obe strany, teda aj člen s logaritmom.": "적분하면 $\\frac{u^{2}}{2}$이 나와요. $u^{2}$을 나타낼 때 양변에 2를 곱해야 하므로 로그 항에도 곱해져요.",
  "Po integrácii a vynásobení dvoma dostaneš $y^{2} = {@0} + K$. Urči konštantu $K$ zo začiatočnej podmienky.": "적분하고 2를 곱하면 $y^{2} = {@0} + K$가 나와요. 초기조건에서 상수 $K$를 구하세요.",
  "Po integrácii máš $-\\frac{1}{y} = {@0} + C$. Urči $C$ zo začiatočnej podmienky (zlomok alebo celé číslo).": "적분하면 $-\\frac{1}{y} = {@0} + C$예요. 초기조건에서 $C$를 구하세요(분수 또는 정수).",
  "Po substitúcii $y = ux$ a integrovaní vyjadri $u^{2}$ a vypočítaj $u({@0})^{2}$. {@1}": "치환 $y = ux$로 적분한 뒤 $u^{2}$을 나타내고 $u({@0})^{2}$을 계산하세요. {@1}",
  "Po substitúcii $y = ux$ dostaneš $u = {@0} + C$. Urči $C$ zo začiatočnej podmienky.": "치환 $y = ux$를 하면 $u = {@0} + C$가 나와요. 초기조건에서 $C$를 구하세요.",
  "Po transformácii a vyjadrení $Y(s)$ rozlož zlomok ${@0}$ na parciálne zlomky. Aký je koeficient pri $\\frac{1}{{@1}}$?": "변환하고 $Y(s)$를 나타낸 뒤 분수 ${@0}$을 부분분수로 분해하세요. $\\frac{1}{{@1}}$의 계수는 얼마일까요?",
  "Po vydelení $x$: $y' + \\frac{{@0}}{x}y = {@1}$. Integračný faktor je $\\mathrm{e}^{{@2}\\ln x} = {@3}$, rovnica prejde na $({@4}y)' = {@5}$, teda ${@6}y = {@7} + C$ a $y = {@8} + \\frac{C}{{@9}}$. Z podmienky $1 + C = {@10}$, $C = {@11}$. Potom $y(2) = {@12}{@13}$.": "$x$로 나누면: $y' + \\frac{{@0}}{x}y = {@1}$. 적분인자는 $\\mathrm{e}^{{@2}\\ln x} = {@3}$이고 방정식은 $({@4}y)' = {@5}$가 되므로 ${@6}y = {@7} + C$, $y = {@8} + \\frac{C}{{@9}}$예요. 조건에서 $1 + C = {@10}$, $C = {@11}$이에요. 그러면 $y(2) = {@12}{@13}$이에요.",
  "Po vydelení $x^{2}$: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. Substitúcia $y = ux$: $u + xu' = u^{2} + u$, teda $\\frac{du}{u^{2}} = \\frac{dx}{x}$ (riešenie $u = 0$ podmienku nespĺňa). Integrujeme: $-\\frac{1}{u} = \\ln x + C$, z podmienky $C = {@0}$. Odtiaľ $u = \\frac{{@1}}{1{@2}}$ a $y = \\frac{{@3}}{1{@4}}$, takže $y({@5}) \\approx {@6}$.": "$x^{2}$으로 나누면: $y' = \\left(\\frac{y}{x}\\right)^{2} + \\frac{y}{x}$. 치환 $y = ux$: $u + xu' = u^{2} + u$이므로 $\\frac{du}{u^{2}} = \\frac{dx}{x}$예요(해 $u = 0$은 조건을 만족하지 않아요). 적분하면: $-\\frac{1}{u} = \\ln x + C$이고 조건에서 $C = {@0}$이에요. 여기서 $u = \\frac{{@1}}{1{@2}}$, $y = \\frac{{@3}}{1{@4}}$이므로 $y({@5}) \\approx {@6}$이에요.",
  "Po vydelení $xy$: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. Substitúcia $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$, teda $u\\,du = {@2}\\frac{dx}{x}$ a $\\frac{u^{2}}{2} = {@3} + C$. Z podmienky $u(1) = {@4}$ máme $u^{2} = {@5} + {@6}$, a keďže $y \\gt 0$, $y = x\\sqrt{{@7} + {@8}}$. Potom $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$.": "$xy$로 나누면: $y' = \\frac{y}{x} + {@0}\\frac{x}{y}$. 치환 $y = ux$: $u + xu' = u + \\frac{{@1}}{u}$이므로 $u\\,du = {@2}\\frac{dx}{x}$, $\\frac{u^{2}}{2} = {@3} + C$예요. 조건 $u(1) = {@4}$에서 $u^{2} = {@5} + {@6}$이고, $y \\gt 0$이므로 $y = x\\sqrt{{@7} + {@8}}$이에요. 그러면 $y({@9}) = {@10}\\sqrt{{@11} + {@12}} \\approx {@13}$이에요.",
  "Po vydelení číslom ${@0}$: $x'' + {@1}x' + {@2}x = 0$.": "${@0}$으로 나누면: $x'' + {@1}x' + {@2}x = 0$.",
  "Podiel ${@0}\\,\\%$ patrí výrazu $1 - \\mathrm{e}^{-t/\\tau}$, nie samotnej exponenciále.": "${@0}\\,\\%$라는 비율은 지수함수 자체가 아니라 식 $1 - \\mathrm{e}^{-t/\\tau}$에 해당해요.",
  "Podmienka exaktnosti je $M_y = N_x$. Máme $M_y = {@0}$ a $N_x = {@1}a{@2}{@3}$. Porovnaním koeficientov pri {@4} dostaneme ${@5}a = {@6}${@7}. Kmeňová funkcia je potom $F = {@8}$.": "완전 미분방정식의 조건은 $M_y = N_x$예요. $M_y = {@0}$, $N_x = {@1}a{@2}{@3}$이에요. {@4}의 계수를 비교하면 ${@5}a = {@6}${@7}이에요. 그러면 원시함수는 $F = {@8}$이에요.",
  "Podľa Liouvilleovho vzorca je $W(x) = W(0)\\mathrm{e}^{-px}$; skontroluj znamienko exponentu.": "리우빌 공식에 따르면 $W(x) = W(0)\\mathrm{e}^{-px}$예요. 지수의 부호를 확인하세요.",
  "Podľa Newtonovho zákona $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$. Z merania $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$, teda $k = {@5} \\approx {@6}$. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.": "뉴턴의 냉각 법칙에 따라 $T(t) = {@0} + {@1}\\,\\mathrm{e}^{-kt}$예요. 측정값에서 $\\mathrm{e}^{-{@2}k} = \\frac{{@3}}{{@4}}$이므로 $k = {@5} \\approx {@6}$이에요. $T({@7}) = {@8} + {@9}\\left(\\frac{{@10}}{{@11}}\\right)^{{@12}/{@13}} \\approx {@14}{@15}$.",
  "Podľa Vietových vzťahov je súčet koreňov $-p$.": "근과 계수의 관계에 따라 두 근의 합은 $-p$예요.",
  "Podľa slovníka a linearity $F(s) = {@0}$ pre $s \\gt {@1}$. Dosadením $s = {@2}$: $F({@3}) = {@4} = {@5} \\approx {@6}$.": "변환표와 선형성에 따라 $s \\gt {@1}$일 때 $F(s) = {@0}$이에요. $s = {@2}$를 대입하면: $F({@3}) = {@4} = {@5} \\approx {@6}$.",
  "Pohyb telesa sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$ (hmotnosť ${@3}\\,\\mathrm{kg}$, tlmenie ${@4}\\,\\mathrm{kg/s}$, tuhosť ${@5}\\,\\mathrm{N/m}$). O aký typ pohybu ide?": "물체의 운동은 방정식 ${@0}x'' + {@1}x' + {@2}x = 0$을 따라요(질량 ${@3}\\,\\mathrm{kg}$, 감쇠 ${@4}\\,\\mathrm{kg/s}$, 강성 ${@5}\\,\\mathrm{N/m}$). 어떤 종류의 운동일까요?",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Vzorka obsahuje na začiatku ${@2}\\,\\mathrm{g}$ izotopu. Koľko gramov izotopu zostane za ${@3}$ {@4}? {@5}": "방사성 동위원소의 반감기는 ${@0}$ {@1}이에요. 처음에 시료에는 동위원소가 ${@2}\\,\\mathrm{g}$ 들어 있어요. ${@3}$ {@4} 후에는 동위원소가 몇 그램 남을까요? {@5}",
  "Polčas rozpadu rádioaktívneho izotopu je ${@0}$ {@1}. Za koľko {@2} klesne jeho množstvo na ${@3}\\,\\%$ pôvodného množstva? {@4}": "방사성 동위원소의 반감기는 ${@0}$ {@1}이에요. 몇 {@2} 후에 그 양이 처음 양의 ${@3}\\,\\%$로 줄어들까요? {@4}",
  "Populácia sa riadi logistickou rovnicou $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$ ($t$ v rokoch), na začiatku má ${@2}$ jedincov.": "개체군은 로지스틱 방정식 $P' = {@0}\\,P\\left(1 - \\frac{P}{{@1}}\\right)$을 따르고($t$는 년 단위), 처음 개체 수는 ${@2}$이에요.",
  "Porovnaj $c^{2}$ so $4mk$, alebo koeficient útlmu $\\delta = \\frac{c}{2m}$ s vlastnou frekvenciou $\\omega_0 = \\sqrt{k/m}$.": "$c^{2}$을 $4mk$와 비교하거나, 감쇠 계수 $\\delta = \\frac{c}{2m}$을 고유 진동수 $\\omega_0 = \\sqrt{k/m}$과 비교하세요.",
  "Porovnaj absolútne členy a urči $B$.": "상수항을 비교해서 $B$를 구하세요.",
  "Porovnaj absolútne členy a urči $C$.": "상수항을 비교해서 $C$를 구하세요.",
  "Porovnaj koeficienty pri $x$ a urči $A$.": "$x$의 계수를 비교해서 $A$를 구하세요.",
  "Porovnaj koeficienty pri $x$ a urči $B$.": "$x$의 계수를 비교해서 $B$를 구하세요.",
  "Porovnaj koeficienty pri $x^{2}$ a urči $A$.": "$x^{2}$의 계수를 비교해서 $A$를 구하세요.",
  "Použi $W = y_1y_2' - y_1'y_2$. Exponent si môžeš overiť Liouvilleovým vzorcom $W(x) = W(0)\\mathrm{e}^{-px}$.": "$W = y_1y_2' - y_1'y_2$를 이용하세요. 지수는 리우빌 공식 $W(x) = W(0)\\mathrm{e}^{-px}$로 확인할 수 있어요.",
  "Použi $\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$.": "$\\mathcal{L}\\{\\mathrm{e}^{at}\\} = \\frac{1}{s-a}$, $\\mathcal{L}\\{t^{n}\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2}+\\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2}+\\omega^{2}}$를 이용하세요.",
  "Použi $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$ a $\\mathcal{L}\\{y'\\} = sY - y(0)$ a vyjadri $Y$.": "$\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, $\\mathcal{L}\\{y'\\} = sY - y(0)$을 이용해서 $Y$를 나타내세요.",
  "Použi prvý riadok sústavy $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$.": "연립방정식 $(A - \\lambda_1 I)\\mathbf{v} = \\mathbf{0}$의 첫째 행을 이용하세요.",
  "Použi vzorec $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$, kde $A = \\frac{K - P_0}{P_0}$.": "공식 $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$을 이용하세요. 여기서 $A = \\frac{K - P_0}{P_0}$예요.",
  "Pozor na znamienko $y'(0)$: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$, po prenesení na pravú stranu je $+y'(0)$.": "$y'(0)$의 부호에 주의하세요: $\\mathcal{L}\\{y''\\} = s^{2}Y - sy(0) - y'(0)$이므로 우변으로 옮기면 $+y'(0)$이에요.",
  "Pozor na znamienko: $\\int u^{-2}\\,du = -\\frac{1}{u}$.": "부호에 주의하세요: $\\int u^{-2}\\,du = -\\frac{1}{u}$.",
  "Pozor na znamienko: $\\int y^{-2}\\,dy = -\\frac{1}{y}$, nie $\\frac{1}{y}$.": "부호에 주의하세요: $\\int y^{-2}\\,dy$는 $\\frac{1}{y}$가 아니라 $-\\frac{1}{y}$예요.",
  "Pravá strana je homogénna stupňa 2, nie 0: po dosadení $tx$, $ty$ sa vynásobí $t^{2}$. Tvar $\\varphi\\left(\\frac{y}{x}\\right)$ vyžaduje stupeň 0.": "우변은 0차가 아니라 2차 동차식이에요: $tx$, $ty$를 대입하면 $t^{2}$이 곱해져요. $\\varphi\\left(\\frac{y}{x}\\right)$ 꼴이 되려면 0차여야 해요.",
  "Pravá strana obsahuje len konštantu (polynóm stupňa 0), polynóm $Ax + B$ tu netreba.": "우변에는 상수(0차 다항식)만 있으므로 여기서는 다항식 $Ax + B$가 필요 없어요.",
  "Pre $x_p = Bt{@0} {@1}$ je $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$ (členy s $t$ sa odčítajú). Porovnaním ${@7}{@8}B = {@9}$, teda $B = {@10}$. Amplitúda $|B|t$ rastie lineárne s časom.": "$x_p = Bt{@0} {@1}$이면 $x_p'' + {@2}x_p = {@3}{@4}B{@5} {@6}$이에요($t$가 있는 항은 소거돼요). 비교하면 ${@7}{@8}B = {@9}$이므로 $B = {@10}$이에요. 진폭 $|B|t$는 시간에 따라 일차적으로 커져요.",
  "Pre $y = \\cos {@0}x$ je $y'' = -{@1}\\cos {@2}x$, a teda $y'' + {@3}y = 0$. Pri $\\cos {@4}x$ by vyšlo $y'' = -{@5}\\cos {@6}x$, exponenciála má kladnú druhú deriváciu.": "$y = \\cos {@0}x$이면 $y'' = -{@1}\\cos {@2}x$이므로 $y'' + {@3}y = 0$이에요. $\\cos {@4}x$이면 $y'' = -{@5}\\cos {@6}x$가 나오고, 지수함수는 이계도함수가 양수예요.",
  "Pre $y = \\mathrm{e}^{-{@0}x}$ je $y'' = {@1}\\mathrm{e}^{-{@2}x}$, a teda $y'' - {@3}y = 0$. Pre $\\sin {@4}x$ vyjde $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$.": "$y = \\mathrm{e}^{-{@0}x}$이면 $y'' = {@1}\\mathrm{e}^{-{@2}x}$이므로 $y'' - {@3}y = 0$이에요. $\\sin {@4}x$이면 $y'' - {@5}y = -{@6}\\sin {@7}x \\neq 0$이 나와요.",
  "Pre $y = x^{{@0}}$ je $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$. Pre $y = {@6}x$ by vyšlo $xy' = {@7}x$, ale ${@8}y = {@9}x$.": "$y = x^{{@0}}$이면 $xy' = x\\cdot {@1}x^{{@2}} = {@3}x^{{@4}} = {@5}y$예요. $y = {@6}x$이면 $xy' = {@7}x$인데 ${@8}y = {@9}x$예요.",
  "Pre $y' + py = qy^{n}$ je $z = y^{1-n}$ a $z' + (1-n)pz = (1-n)q$.": "$y' + py = qy^{n}$이면 $z = y^{1-n}$이고 $z' + (1-n)pz = (1-n)q$예요.",
  "Pre $y\\neq 0$ oddelíme premenné: $\\frac{dy}{y} = {@0}\\,dx$, teda $\\ln|y| = {@1} + c$ a $y = C\\mathrm{e}^{{@2}}$ (riešenie $y = 0$ je zahrnuté pre $C = 0$). Z podmienky $C = {@3}$, takže $y = {@4}$ a $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$.": "$y\\neq 0$일 때 변수를 분리하면: $\\frac{dy}{y} = {@0}\\,dx$이므로 $\\ln|y| = {@1} + c$, $y = C\\mathrm{e}^{{@2}}$예요(해 $y = 0$은 $C = 0$일 때 포함돼요). 조건에서 $C = {@3}$이므로 $y = {@4}$이고 $y({@5}) = {@6}\\mathrm{e}^{{@7}} \\approx {@8}$이에요.",
  "Pre $y_p = A\\mathrm{e}^{cx}$ vyjde po dosadení $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$.": "$y_p = A\\mathrm{e}^{cx}$를 대입하면 $A(c^{2} + pc + q)\\,\\mathrm{e}^{cx}$가 나와요.",
  "Pre akú hodnotu parametra $a$ je rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ exaktná?": "매개변수 $a$가 어떤 값일 때 방정식 $({@0})\\,dx + ({@1})\\,dy = 0$이 완전 미분방정식일까요?",
  "Pre dva rôzne reálne korene": "서로 다른 두 실근일 때",
  "Pre dvojnásobný koreň": "중근일 때",
  "Pre komplexne združené korene $\\alpha\\pm\\beta\\mathrm{i}$": "켤레복소근 $\\alpha\\pm\\beta\\mathrm{i}$일 때",
  "Pre polynóm 1. stupňa treba úplný polynóm $Ax + B$, samotné $Ax$ nestačí.": "일차 다항식에는 완전한 다항식 $Ax + B$가 필요해요. $Ax$만으로는 부족해요.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ a urči $\\delta$.": "방정식을 $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ 꼴로 바꾸고 $\\delta$를 구하세요.",
  "Prepíš rovnicu na tvar $x'' + 2\\delta x' + \\omega_0^{2}x = 0$; potom $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "방정식을 $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ 꼴로 바꾸세요. 그러면 $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$예요.",
  "Pri $x = 0$ je $C\\cdot\\mathrm{e}^{0} = C$, ale v riešení je ešte konštantný člen ${@0}$, ktorý musíš od $y_0$ odčítať.": "$x = 0$이면 $C\\cdot\\mathrm{e}^{0} = C$이지만, 해에는 상수항 ${@0}$도 있으므로 $y_0$에서 빼야 해요.",
  "Pri $x = 0$ sú obe exponenciály rovné 1, takže $y(0) = A + B$. Hodnotu $A$ treba od $y(0)$ odčítať.": "$x = 0$이면 두 지수함수가 모두 1이므로 $y(0) = A + B$예요. $y(0)$에서 $A$의 값을 빼야 해요.",
  "Pri $x = 1$ je $u(1) = y(1)$.": "$x = 1$이면 $u(1) = y(1)$이에요.",
  "Pri $y = \\cos \\omega x$ je $y'' = -\\omega^{2}y$; koeficient ${@0}$ v rovnici je $\\omega^{2}$, nie $\\omega$.": "$y = \\cos \\omega x$이면 $y'' = -\\omega^{2}y$예요. 방정식의 계수 ${@0}$은 $\\omega$가 아니라 $\\omega^{2}$이에요.",
  "Pri $y = \\mathrm{e}^{rx}$ je $y'' = r^{2}y$; koeficient ${@0}$ v rovnici je $r^{2}$, nie $r$.": "$y = \\mathrm{e}^{rx}$이면 $y'' = r^{2}y$예요. 방정식의 계수 ${@0}$은 $r$이 아니라 $r^{2}$이에요.",
  "Pri absolútnom člene si zabudol na $y_p'' = 2A$: aj druhá derivácia prispieva konštantou.": "상수항에서 $y_p'' = 2A$를 잊었어요: 이계도함수도 상수를 더해요.",
  "Pri derivovaní $x\\mathrm{e}^{rx}$ podľa súčinu vznikne v $y_p''$ člen $2rA\\mathrm{e}^{rx}$, nie len $rA\\mathrm{e}^{rx}$.": "곱의 미분법으로 $x\\mathrm{e}^{rx}$를 미분하면 $y_p''$에 $rA\\mathrm{e}^{rx}$가 아니라 항 $2rA\\mathrm{e}^{rx}$가 생겨요.",
  "Pri derivovaní ${@0}$ podľa $x$ vznikne koeficient ${@1}a$; rovnosť koeficientov treba ešte vydeliť číslom ${@2}$.": "${@0}$을 $x$에 대해 미분하면 계수 ${@1}a$가 생겨요. 계수의 등식을 ${@2}$로 더 나누어야 해요.",
  "Pri derivovaní súčinu ${@0}\\cdot(\\dots)$ vznikne aj člen ${@1}C_1$ z derivácie exponenciály.": "곱 ${@0}\\cdot(\\dots)$을 미분하면 지수함수의 미분에서 나오는 항 ${@1}C_1$도 생겨요.",
  "Pri dvojnásobnom derivovaní súčinu $t{@0} {@1}$ vzniknú dva rovnaké členy bez $t$, spolu $2\\omega_0$-násobok.": "곱 $t{@0} {@1}$을 두 번 미분하면 $t$가 없는 같은 항이 두 개 생겨서 합쳐 $2\\omega_0$배가 돼요.",
  "Pri dvojnásobnom koreni máš len jednu exponenciálu; druhé nezávislé riešenie dostaneš vynásobením $x$.": "중근이면 지수함수가 하나뿐이에요. 두 번째 독립인 해는 $x$를 곱해서 얻어요.",
  "Pri dvojnásobnom koreni sa exponenciála násobí $x$, nie $x^{2}$ (to by bolo pri trojnásobnom koreni).": "중근이면 지수함수에 $x^{2}$이 아니라 $x$를 곱해요($x^{2}$은 삼중근일 때예요).",
  "Pri integrovaní ${@0}$ si zabudol deliť exponentom: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.": "${@0}$을 적분할 때 지수로 나누는 걸 잊었어요: $\\int x^{{@1}}\\,dx = \\frac{x^{{@2}}}{{@3}}$.",
  "Pri komplexných koreňoch nie sú riešeniami reálne exponenciály; použi tvar $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.": "복소근이면 실수 지수함수는 해가 아니에요. $\\mathrm{e}^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$ 꼴을 이용하세요.",
  "Pri koreňoch $\\alpha\\pm\\beta\\mathrm{i}$ je v exponente reálna časť $\\alpha$ a v goniometrických funkciách imaginárna časť $\\beta$; zamenil si ich.": "근이 $\\alpha\\pm\\beta\\mathrm{i}$이면 지수에는 실수부 $\\alpha$가, 삼각함수에는 허수부 $\\beta$가 들어가요. 둘을 바꿨어요.",
  "Pri porovnaní absolútnych členov si zabudol na člen ${@0} = {@1}$, ktorý pochádza z derivácie.": "상수항을 비교할 때 미분에서 나온 항 ${@0} = {@1}$을 잊었어요.",
  "Pri prenášaní konštantného člena na druhú stranu rovnice si mu nezmenil znamienko.": "상수항을 등식의 반대쪽으로 옮길 때 부호를 바꾸지 않았어요.",
  "Pri rezonancii s jednoduchým koreňom $r$ vyjde po dosadení $y_p = Ax\\mathrm{e}^{rx}$ výraz $A(2r + p)\\,\\mathrm{e}^{rx}$.": "단순근 $r$에서 공명이 일어나면 $y_p = Ax\\mathrm{e}^{rx}$를 대입했을 때 식 $A(2r + p)\\,\\mathrm{e}^{rx}$가 나와요.",
  "Pri riešení $2^{-t/T} = p$ treba logaritmus podieliť číslom $\\ln 2$ (alebo použiť logaritmus so základom 2).": "$2^{-t/T} = p$를 풀 때 로그를 $\\ln 2$로 나누어야 해요(또는 밑이 2인 로그를 쓰세요).",
  "Pri vyjadrení $C$ zo zlomku $\\frac{C}{x_0}$ treba násobiť číslom $x_0$, nie deliť.": "분수 $\\frac{C}{x_0}$에서 $C$를 나타낼 때는 $x_0$으로 나누는 게 아니라 곱해야 해요.",
  "Pri zakrývacej metóde dosadíš $s = a$ do zvyšku zlomku; v menovateli potom zostane $a - b$, nie $b - a$.": "가림법에서는 분수의 나머지 부분에 $s = a$를 대입하므로 분모에는 $b - a$가 아니라 $a - b$가 남아요.",
  "Primitívna funkcia k $ax^{n}$ je $\\frac{a}{n+1}x^{n+1}$.": "$ax^{n}$의 원시함수는 $\\frac{a}{n+1}x^{n+1}$이에요.",
  "Riešenie Cauchyho úlohy $y'{@0} = {@1}$, $y(0) = {@2}$ má tvar $y = A{@3} + B{@4}$. Urči $A$ a $B$.": "코시 문제 $y'{@0} = {@1}$, $y(0) = {@2}$의 해는 $y = A{@3} + B{@4}$ 꼴이에요. $A$와 $B$를 구하세요.",
  "Riešenie Cauchyho úlohy ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$ zapíšeme v tvare ${@3}$. Urči $C_1$ a $C_2$.": "코시 문제 ${@0} = 0$, $y(0) = {@1}$, $y'(0) = {@2}$의 해를 ${@3}$ 꼴로 써요. $C_1$과 $C_2$를 구하세요.",
  "Riešenie je $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$; $\\mathrm{e}^{-k}$ urči z druhého merania.": "해는 $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$예요. $\\mathrm{e}^{-k}$는 두 번째 측정값으로 구하세요.",
  "Riešenie je súčet $y_h + y_p$: konštantné partikulárne riešenie sa exponenciálou nenásobí.": "해는 합 $y_h + y_p$예요: 상수 특수해에는 지수함수를 곱하지 않아요.",
  "Riešenie je súčet $y_h$ (exponenciála so záporne vzatým koeficientom pri $y$) a konštantného partikulárneho riešenia.": "해는 $y_h$($y$의 계수에 마이너스를 붙인 지수함수)와 상수 특수해의 합이에요.",
  "Riešenie má tvar $\\mathrm{e}^{\\lambda x}$, kde $\\lambda$ je koreň charakteristickej rovnice; skontroluj znamienka koreňov.": "해는 $\\mathrm{e}^{\\lambda x}$ 꼴이고 $\\lambda$는 특성방정식의 근이에요. 근의 부호를 확인하세요.",
  "Riešenie má tvar $y = C\\mathrm{e}^{G(x)}$ s $G(0) = 0$. Urči $C$ zo začiatočnej podmienky.": "해는 $G(0) = 0$인 $y = C\\mathrm{e}^{G(x)}$ 꼴이에요. 초기조건에서 $C$를 구하세요.",
  "Riešenie rovnice y″ + py′ + qy = 0": "방정식 y″ + py′ + qy = 0의 해",
  "Riešte rovnicu $2^{-t/T} = p$ logaritmovaním: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.": "방정식 $2^{-t/T} = p$를 로그를 취해서 푸세요: $t = T\\,\\frac{\\ln(1/p)}{\\ln 2}$.",
  "Rovnica $({@0})\\,dx + ({@1})\\,dy = 0$ je exaktná. Jej všeobecný integrál zapíšeme v tvare $F(x, y) = C$, kde $F(0, 0) = 0$. Urči $C$ pre integrálnu krivku, ktorá prechádza bodom $[{@2}; {@3}]$.": "방정식 $({@0})\\,dx + ({@1})\\,dy = 0$은 완전 미분방정식이에요. 그 일반 적분을 $F(0, 0) = 0$인 $F(x, y) = C$ 꼴로 써요. 점 $[{@2}; {@3}]$을 지나는 적분곡선에 대해 $C$를 구하세요.",
  "Rovnica $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$) nie je exaktná. Má integračný faktor tvaru $\\mu = x^{k}$. Urči $k$.": "방정식 $({@0})\\,dx {@1} {@2}\\,dy = 0$ ($x \\gt 0$)은 완전 미분방정식이 아니에요. 이 방정식에는 $\\mu = x^{k}$ 꼴의 적분인자가 있어요. $k$를 구하세요.",
  "Rovnica $x'' + {@0}x = {@1}$ opisuje rezonanciu. Jej partikulárne riešenie má tvar $x_p = Bt{@2} {@3}$. Urči $B$.": "방정식 $x'' + {@0}x = {@1}$은 공명을 나타내요. 그 특수해는 $x_p = Bt{@2} {@3}$ 꼴이에요. $B$를 구하세요.",
  "Rovnica $y' = f(x, y)$ hovorí, že smernica dotyčnice v bode $[x; y]$ je $f(x, y)$. Dosaď súradnice bodu.": "방정식 $y' = f(x, y)$는 점 $[x; y]$에서 접선의 기울기가 $f(x, y)$라는 뜻이에요. 점의 좌표를 대입하세요.",
  "Rovnica $y' = {@0}$ má v čitateli aj v menovateli homogénne funkcie rovnakého stupňa, preto po dosadení $x \\to tx$, $y \\to ty$ sa $t$ vykráti a pravá strana závisí len od $\\frac{y}{x}$. Ostatné rovnice obsahujú členy rôznych stupňov alebo absolútny člen, po dosadení $tx$ a $ty$ sa preto $t$ nevykráti.": "방정식 $y' = {@0}$은 분자와 분모가 같은 차수의 동차함수이므로 $x \\to tx$, $y \\to ty$를 대입하면 $t$가 약분되고 우변은 $\\frac{y}{x}$에만 의존해요. 나머지 방정식에는 차수가 다른 항이나 상수항이 있어서 $tx$와 $ty$를 대입해도 $t$가 약분되지 않아요.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = Ax{@2}$. Urči $A$.": "방정식 ${@0} = {@1}$의 특수해는 $y_p = Ax{@2}$ 꼴이에요. $A$를 구하세요.",
  "Rovnica ${@0} = {@1}$ má partikulárne riešenie tvaru $y_p = A{@2}$. Urči $A$.": "방정식 ${@0} = {@1}$의 특수해는 $y_p = A{@2}$ 꼴이에요. $A$를 구하세요.",
  "Rovnica ${@0}x'' + {@1}x = 0$ má $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$. Perióda $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.": "방정식 ${@0}x'' + {@1}x = 0$에서 $\\omega_0 = \\sqrt{\\frac{{@2}}{{@3}}} \\approx {@4}\\,\\mathrm{s^{-1}}$이에요. 주기 $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}} \\approx {@5}\\,\\mathrm{s}$.",
  "Rovnica je homogénna: $y' = \\frac{y}{x}{@0}$. Substitúcia $y = ux$ dáva $u + xu' = u{@1}$, teda $u' = {@2}\\frac{{@3}}{x}$ a $u = {@4} + C$. Z podmienky $u(1) = {@5}$ je $C = {@6}$, preto $y = x({@7}{@8})$ a $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$.": "방정식은 동차예요: $y' = \\frac{y}{x}{@0}$. 치환 $y = ux$로 $u + xu' = u{@1}$이므로 $u' = {@2}\\frac{{@3}}{x}$, $u = {@4} + C$예요. 조건 $u(1) = {@5}$에서 $C = {@6}$이므로 $y = x({@7}{@8})$이고 $y({@9}) = {@10}({@11}{@12}) \\approx {@13}$이에요.",
  "Rovnica má tvar $y' = g(x)\\,y$. Oddeľ premenné $\\frac{dy}{y} = g(x)\\,dx$ a integruj; dostaneš $y = C\\mathrm{e}^{G(x)}$.": "방정식은 $y' = g(x)\\,y$ 꼴이에요. 변수를 분리해서 $\\frac{dy}{y} = g(x)\\,dx$로 쓰고 적분하면 $y = C\\mathrm{e}^{G(x)}$가 나와요.",
  "Rozdiel $M_y - N_x$ treba ešte vydeliť funkciou $N = {@0}$, nie len premennou $x$.": "차 $M_y - N_x$는 변수 $x$만이 아니라 함수 $N = {@0}$으로 나누어야 해요.",
  "Rozhoduje znamienko diskriminantu $c^{2} - 4mk$. Prepočítaj ho: porovnávaš druhú mocninu tlmenia so štvornásobkom súčinu $mk$.": "판별식 $c^{2} - 4mk$의 부호가 결정해요. 다시 계산하세요: 감쇠의 제곱을 $mk$의 네 배와 비교하는 거예요.",
  "Rozhoduje znamienko diskriminantu charakteristickej rovnice, teda porovnanie $c^{2}$ a $4mk$: $c^{2} = {@0}$, $4mk = {@1}$. {@2}, ide o {@3}. (Ekvivalentne $\\delta = \\frac{c}{2m} = {@4}$ a $\\omega_0 = \\sqrt{k/m} = {@5}$.)": "특성방정식의 판별식의 부호, 즉 $c^{2}$과 $4mk$의 비교가 결정해요: $c^{2} = {@0}$, $4mk = {@1}$. {@2} {@3}이에요. (동치로 $\\delta = \\frac{c}{2m} = {@4}$, $\\omega_0 = \\sqrt{k/m} = {@5}$.)",
  "Rozlož $F$ na parciálne zlomky $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$ a urči $A$.": "$F$를 부분분수 $\\frac{A}{s{@0}} + \\frac{B}{s{@1}}$로 분해하고 $A$를 구하세요.",
  "Rozlož menovateľ na súčin $(s - a)(s - b)$ a $F$ na parciálne zlomky $\\frac{A}{s-a} + \\frac{B}{s-b}$; potom $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$.": "분모를 곱 $(s - a)(s - b)$로, $F$를 부분분수 $\\frac{A}{s-a} + \\frac{B}{s-b}$로 분해하세요. 그러면 $\\mathcal{L}^{-1}\\{\\frac{1}{s-a}\\} = \\mathrm{e}^{at}$예요.",
  "Rozpad sa riadi rovnicou $m' = -km$, teda $m(t) = m_0\\mathrm{e}^{-kt}$ s $k = \\frac{\\ln 2}{T}$, čiže $m(t) = m_0\\cdot 2^{-t/T}$. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.": "붕괴는 방정식 $m' = -km$을 따르므로 $k = \\frac{\\ln 2}{T}$일 때 $m(t) = m_0\\mathrm{e}^{-kt}$, 즉 $m(t) = m_0\\cdot 2^{-t/T}$예요. $m({@0}) = {@1}\\cdot 2^{-{@2}/{@3}} \\approx {@4}\\,\\mathrm{g}$.",
  "Rád je určený najvyššou deriváciou, ktorá sa v rovnici vyskytuje, nie mocninou, na ktorú je derivácia umocnená. Najvyššia derivácia v rovnici je {@0}, rovnica je teda <strong>{@1}. rádu</strong>.": "계수(order)는 도함수의 거듭제곱 지수가 아니라 방정식에 나타나는 가장 높은 도함수로 정해져요. 방정식에서 가장 높은 도함수는 {@0}이므로 이 방정식은 <strong>{@1}계</strong>예요.",
  "Schéma riešenia začiatočnej úlohy Laplaceovou transformáciou": "라플라스 변환으로 초기값 문제를 푸는 과정",
  "Sedlo vzniká len pri zápornom determinante (reálne vlastné čísla s opačnými znamienkami). Prepočítaj $\\det A$.": "안장점은 행렬식이 음수일 때(부호가 반대인 실수 고윳값)만 생겨요. $\\det A$를 다시 계산하세요.",
  "Smernica poľa v bode $[x; y]$ je hodnota pravej strany $f(x, y)$: $f({@0}, {@1}) = {@2} = {@3}$. Integrálna krivka prechádzajúca bodom $[{@4}; {@5}]$ má v ňom dotyčnicu so smernicou ${@6}$.": "점 $[x; y]$에서 방향장의 기울기는 우변의 값 $f(x, y)$예요: $f({@0}, {@1}) = {@2} = {@3}$. 점 $[{@4}; {@5}]$을 지나는 적분곡선은 그 점에서 기울기가 ${@6}$인 접선을 가져요.",
  "Smerové pole homogénnej rovnice y' = (x + y)/(x − y)": "동차 방정식 y' = (x + y)/(x − y)의 방향장",
  "Smerové pole rovnice y' = x − y s integrálnou krivkou": "적분곡선이 있는 방정식 y' = x − y의 방향장",
  "Stabilitu určuje znamienko stopy $\\mathrm{tr}\\,A$ (súčtu, resp. dvojnásobku reálnej časti vlastných čísel). Over ho.": "안정성은 대각합 $\\mathrm{tr}\\,A$(고윳값의 합, 즉 실수부의 두 배)의 부호로 정해져요. 확인하세요.",
  "Stacionárne riešenie $y = 0$ podmienku nespĺňa. Pre $y\\neq 0$: $\\frac{dy}{y^{2}} = {@0}\\,dx$, teda $-\\frac{1}{y} = {@1} + C$. Z podmienky $C = {@2}$. Odtiaľ $y = \\frac{{@3}}{1{@4}}$, čo je na intervale $\\langle 0; {@5}\\rangle$ definované (menovateľ je tam kladný). Dosadením $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.": "정상해 $y = 0$은 조건을 만족하지 않아요. $y\\neq 0$이면: $\\frac{dy}{y^{2}} = {@0}\\,dx$이므로 $-\\frac{1}{y} = {@1} + C$예요. 조건에서 $C = {@2}$. 여기서 $y = \\frac{{@3}}{1{@4}}$이고, 이 함수는 구간 $\\langle 0; {@5}\\rangle$에서 정의돼요(거기서 분모가 양수예요). 대입하면 $y({@6}) = \\frac{{@7}}{{@8}}{@9}$.",
  "Stred nastáva len pri nulovej stope; inak sa trajektórie k bodu približujú alebo sa od neho vzďaľujú.": "중심점은 대각합이 0일 때만 생겨요. 그렇지 않으면 궤적이 그 점에 가까워지거나 멀어져요.",
  "Substitúcia je $z = y^{1-n}$, nie $y^{n-1}$: exponent má odstrániť mocninu $y^{n}$ po vydelení rovnice.": "치환은 $y^{n-1}$이 아니라 $z = y^{1-n}$이에요: 지수는 방정식을 나눈 뒤 거듭제곱 $y^{n}$을 없애야 해요.",
  "Sústava {@0} má začiatočnú podmienku $x(0) = {@1}$, $y(0) = {@2}$. Riešenie zapíšeme v tvare $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$, kde $\\lambda_1 \\gt \\lambda_2$ a vlastné vektory majú prvú zložku $1$. Urči $C_1$ a $C_2$.": "방정식계 {@0}의 초기조건은 $x(0) = {@1}$, $y(0) = {@2}$예요. 해를 $\\begin{pmatrix}x\\\\ y\\end{pmatrix} = C_1\\mathbf{v}_1\\mathrm{e}^{\\lambda_1t} + C_2\\mathbf{v}_2\\mathrm{e}^{\\lambda_2t}$ 꼴로 쓰고, 여기서 $\\lambda_1 \\gt \\lambda_2$이며 고유벡터의 첫째 성분은 $1$이에요. $C_1$과 $C_2$를 구하세요.",
  "Sčítaj: $F({@0}) = ?$": "더하세요: $F({@0}) = ?$",
  "Teleso s hmotnosťou ${@0}\\,\\mathrm{kg}$ kmitá bez tlmenia na pružine s tuhosťou ${@1}\\,\\mathrm{N/m}$. Aká je perióda kmitov v sekundách? {@2}": "질량이 ${@0}\\,\\mathrm{kg}$인 물체가 강성 ${@1}\\,\\mathrm{N/m}$인 용수철에 매달려 감쇠 없이 진동해요. 진동의 주기는 몇 초일까요? {@2}",
  "Teleso s teplotou ${@0}{@1}$ položíme do miestnosti s teplotou ${@2}{@3}$. Po ${@4}$ minútach má teplotu ${@5}{@6}$.": "온도가 ${@0}{@1}$인 물체를 온도가 ${@2}{@3}$인 방에 놓아요. ${@4}$분 후 물체의 온도는 ${@5}{@6}$예요.",
  "Tlmený harmonický oscilátor": "감쇠 조화 진동자",
  "Tlmený oscilátor sa riadi rovnicou ${@0}x'' + {@1}x' + {@2}x = 0$. Urči uhlovú frekvenciu $\\omega_d$ jeho tlmených kmitov. {@3}": "감쇠 진동자는 방정식 ${@0}x'' + {@1}x' + {@2}x = 0$을 따라요. 감쇠 진동의 각진동수 $\\omega_d$를 구하세요. {@3}",
  "Toto je exponent (mocnina), nie rád derivácie. Rád určuje najvyššia derivácia, ktorá sa v rovnici vyskytuje.": "이건 도함수의 계수(order)가 아니라 지수(거듭제곱)예요. 계수는 방정식에 나타나는 가장 높은 도함수로 정해져요.",
  "Toto je vlastná frekvencia netlmeného oscilátora $\\omega_0$. Tlmenie frekvenciu znižuje: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.": "이건 비감쇠 진동자의 고유 진동수 $\\omega_0$이에요. 감쇠는 진동수를 낮춰요: $\\omega_d = \\sqrt{\\omega_0^{2} - \\delta^{2}}$.",
  "Toto je vybíjanie kondenzátora. Pri nabíjaní napätie rastie od nuly k $U$: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "이건 축전기의 방전이에요. 충전할 때는 전압이 0에서 $U$까지 커져요: $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.",
  "Transformuj rovnicu ($\\mathcal{L}\\{y'\\} = sY - y(0)$), vyjadri $Y(s)$ a rozlož ho na parciálne zlomky.": "방정식을 변환하고($\\mathcal{L}\\{y'\\} = sY - y(0)$) $Y(s)$를 나타낸 뒤 부분분수로 분해하세요.",
  "Transformáciou: $sY{@0}{@1} = {@2}$, teda $Y = {@3}{@4}$. Rozklad: ${@5} = {@6}{@7}$. Spätnou transformáciou $y = ({@8}{@9}){@10}{@11}$, teda $A = {@12}$, $B = {@13}$.": "변환하면: $sY{@0}{@1} = {@2}$이므로 $Y = {@3}{@4}$예요. 분해: ${@5} = {@6}{@7}$. 역변환하면 $y = ({@8}{@9}){@10}{@11}$이므로 $A = {@12}$, $B = {@13}$이에요.",
  "Tu $n = {@0}$, substitúcia je $z = y^{1-n}$, teda $k = 1 - {@1} = {@2}$. Vydelením rovnice $y^{{@3}}$ dostaneme $y^{-n}y'{@4} = {@5}$. Keďže $z' = (1-n)y^{-n}y'$, po vynásobení rovnice číslom $1 - n = {@6}$ máme $z'{@7} = {@8}$. Teda $P = (1-n)p = {@9}$ a $Q = (1-n)q = {@10}$.": "여기서 $n = {@0}$이고 치환은 $z = y^{1-n}$이므로 $k = 1 - {@1} = {@2}$예요. 방정식을 $y^{{@3}}$으로 나누면 $y^{-n}y'{@4} = {@5}$를 얻어요. $z' = (1-n)y^{-n}y'$이므로 방정식에 $1 - n = {@6}$을 곱하면 $z'{@7} = {@8}$이에요. 따라서 $P = (1-n)p = {@9}$, $Q = (1-n)q = {@10}$이에요.",
  "Tvar $(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ patrí len dvojnásobnému koreňu ($D = 0$). Aký je tu diskriminant?": "$(C_1 + C_2x)\\mathrm{e}^{\\lambda x}$ 꼴은 중근($D = 0$)일 때만이에요. 여기서 판별식은 얼마일까요?",
  "Urči $A$ (zlomok alebo celé číslo).": "$A$를 구하세요(분수 또는 정수).",
  "Urči $A$.": "$A$를 구하세요.",
  "Urči $C = F({@0}, {@1})$.": "$C = F({@0}, {@1})$을 구하세요.",
  "Urči $C_1$ v riešení $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$.": "해 $x = C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$에서 $C_1$을 구하세요.",
  "Urči $C_2$ (zlomok alebo celé číslo).": "$C_2$를 구하세요(분수 또는 정수).",
  "Urči $C_2$.": "$C_2$를 구하세요.",
  "Urči $\\omega_0^{2}$.": "$\\omega_0^{2}$을 구하세요.",
  "Urči $\\omega_d$. {@0}": "$\\omega_d$를 구하세요. {@0}",
  "Urči $\\varphi(y)$ s $\\varphi(0) = 0$ z podmienky $F_y = N$ a vypočítaj $\\varphi({@0})$.": "조건 $F_y = N$에서 $\\varphi(0) = 0$인 $\\varphi(y)$를 구하고 $\\varphi({@0})$을 계산하세요.",
  "Urči $y({@0})$ (znamienko podľa začiatočnej podmienky).": "$y({@0})$을 구하세요(부호는 초기조건에 따라).",
  "Urči amplitúdu kmitov. {@0}": "진동의 진폭을 구하세요. {@0}",
  "Urči exponent $k$ v substitúcii $z = y^{k}$ (zlomok v tvare $a/b$).": "치환 $z = y^{k}$의 지수 $k$를 구하세요($a/b$ 꼴의 분수).",
  "Urči exponent $m$.": "지수 $m$을 구하세요.",
  "Urči hodnotu exponentu $G({@0})$, kde $G(x) = \\int_0^x g(t)\\,dt$. {@1}": "$G(x) = \\int_0^x g(t)\\,dt$일 때 지수의 값 $G({@0})$을 구하세요. {@1}",
  "Urči koeficient $P$ pri $z$.": "$z$의 계수 $P$를 구하세요.",
  "Urči konštantu $A$ v riešení $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$.": "해 $P(t) = \\frac{K}{1 + A\\mathrm{e}^{-rt}}$에서 상수 $A$를 구하세요.",
  "Urči oba korene (oddelené bodkočiarkou).": "두 근을 모두 구하세요(세미콜론으로 구분).",
  "Urči pravú stranu $Q$.": "우변 $Q$를 구하세요.",
  "Urči rád diferenciálnej rovnice ${@0}$.": "미분방정식 ${@0}$의 계수(order)를 구하세요.",
  "Urči typ rovnovážneho bodu $[0; 0]$ sústavy {@0}.": "방정식계 {@0}의 평형점 $[0; 0]$의 종류를 판별하세요.",
  "Urči väčšie vlastné číslo $\\lambda_1$.": "더 큰 고윳값 $\\lambda_1$을 구하세요.",
  "V akom tvare treba hľadať partikulárne riešenie rovnice ${@0} = {@1}$ metódou neurčitých koeficientov?": "미정계수법으로 방정식 ${@0} = {@1}$의 특수해를 구할 때 어떤 꼴로 찾아야 할까요?",
  "V čitateli sú členy rôznych stupňov ($x^{2}$ je stupňa 2, $y$ stupňa 1), takže sa $t$ po dosadení nevykráti.": "분자에 차수가 다른 항이 있어서($x^{2}$은 2차, $y$는 1차) 대입한 뒤 $t$가 약분되지 않아요.",
  "Vlastné čísla matice $2\\times 2$ sú korene rovnice $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$.": "$2\\times 2$ 행렬의 고윳값은 방정식 $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$의 근이에요.",
  "Vlastné čísla sú komplexné s reálnou časťou ${@0}$: {@1}.": "고윳값은 실수부가 ${@0}$인 복소수예요: {@1}.",
  "Vlastné čísla sú reálne s rovnakým znamienkom (súčin ${@0} \\gt 0$), ich súčet je ${@1}$: {@2}.": "고윳값은 부호가 같은 실수이고(곱 ${@0} \\gt 0$) 그 합은 ${@1}$이에요: {@2}.",
  "Vlastné čísla sú rýdzo imaginárne: stred.": "고윳값이 순허수예요: 중심점.",
  "Vlastný vektor k $\\lambda_1$ má tvar $(1, m_1)^{T}$. Urči $m_1$.": "$\\lambda_1$에 대한 고유벡터는 $(1, m_1)^{T}$ 꼴이에요. $m_1$을 구하세요.",
  "Vlastný vektor k $\\lambda_2$ má tvar $(1, m_2)^{T}$. Urči $m_2$.": "$\\lambda_2$에 대한 고유벡터는 $(1, m_2)^{T}$ 꼴이에요. $m_2$를 구하세요.",
  "Vrstevnice funkcie F(x, y) = x² − xy + y²": "함수 F(x, y) = x² − xy + y²의 등위선",
  "Vydeľ rovnicu $x$ a použi integračný faktor $\\mu = \\mathrm{e}^{\\int p\\,dx}$; pri $p = \\frac{n}{x}$ je $\\mu = x^{n}$.": "방정식을 $x$로 나누고 적분인자 $\\mu = \\mathrm{e}^{\\int p\\,dx}$를 이용하세요. $p = \\frac{n}{x}$이면 $\\mu = x^{n}$이에요.",
  "Vydeľ rovnicu $x^{2}$, dosaď $y = ux$ a oddeľ premenné $\\frac{du}{u^{2}} = \\frac{dx}{x}$.": "방정식을 $x^{2}$으로 나누고 $y = ux$를 대입한 뒤 변수를 분리하세요: $\\frac{du}{u^{2}} = \\frac{dx}{x}$.",
  "Vydeľ rovnicu výrazom $xy$, dostaneš $y' = \\frac{y}{x} + k\\frac{x}{y}$. Potom použi substitúciu $y = ux$.": "방정식을 $xy$로 나누면 $y' = \\frac{y}{x} + k\\frac{x}{y}$가 나와요. 그다음 치환 $y = ux$를 이용하세요.",
  "Vyjadri $y$ a vypočítaj $y({@0})$ (zlomok alebo celé číslo).": "$y$를 나타내고 $y({@0})$을 계산하세요(분수 또는 정수).",
  "Vyjadril si $\\frac{C}{{@0}}$, ale nie samotné $C$: rovnicu ešte vynásob číslom ${@1}$.": "$C$ 자체가 아니라 $\\frac{C}{{@0}}$을 구했어요: 등식에 ${@1}$을 더 곱하세요.",
  "Vypočítaj $M_y - N_x$.": "$M_y - N_x$를 계산하세요.",
  "Vypočítaj $W(0)$, teda hodnotu $K$.": "$W(0)$, 즉 $K$의 값을 계산하세요.",
  "Vypočítaj $\\frac{M_y - N_x}{N}$. Ak vyjde $\\frac{k}{x}$, integračný faktor je $\\mathrm{e}^{k\\ln x} = x^{k}$.": "$\\frac{M_y - N_x}{N}$을 계산하세요. $\\frac{k}{x}$가 나오면 적분인자는 $\\mathrm{e}^{k\\ln x} = x^{k}$예요.",
  "Vypočítaj $\\frac{\\partial M}{\\partial y}$ a $\\frac{\\partial N}{\\partial x}$ a porovnaj koeficienty pri rovnakých mocninách.": "$\\frac{\\partial M}{\\partial y}$와 $\\frac{\\partial N}{\\partial x}$를 계산하고 같은 거듭제곱의 계수를 비교하세요.",
  "Vypočítaj $\\mathrm{e}^{-{@0}k}$. Zaokrúhli na 4 desatinné miesta.": "$\\mathrm{e}^{-{@0}k}$를 계산하세요. 소수 넷째 자리까지 반올림하세요.",
  "Vypočítaj $\\tau = RC$ (kiloohmy krát mikrofarady dávajú milisekundy) a dosaď do $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$.": "$\\tau = RC$를 계산하고(킬로옴 곱하기 마이크로패럿은 밀리초) $u_C = U(1 - \\mathrm{e}^{-t/\\tau})$에 대입하세요.",
  "Vypočítaj $u({@0})$. {@1}": "$u({@0})$을 계산하세요. {@1}",
  "Vypočítaj $y(2)$ (zlomok alebo desatinné číslo).": "$y(2)$를 계산하세요(분수 또는 소수).",
  "Vypočítaj $y({@0}) = C\\mathrm{e}^{G({@1})}$. {@2}": "$y({@0}) = C\\mathrm{e}^{G({@1})}$을 계산하세요. {@2}",
  "Vypočítaj $y({@0})$. {@1}": "$y({@0})$을 계산하세요. {@1}",
  "Vypočítaj determinant $\\det A$.": "행렬식 $\\det A$를 계산하세요.",
  "Vypočítaj obraz exponenciálneho člena ${@0}$ v bode $s = {@1}$ (zlomok).": "$s = {@1}$에서 지수 항 ${@0}$의 변환값을 계산하세요(분수).",
  "Vypočítaj obraz goniometrického člena v bode $s = {@0}$ (zlomok).": "$s = {@0}$에서 삼각함수 항의 변환값을 계산하세요(분수).",
  "Vypočítaj obraz člena ${@0}$ v bode $s = {@1}$ (zlomok).": "$s = {@1}$에서 항 ${@0}$의 변환값을 계산하세요(분수).",
  "Vypočítaj periódu kmitov v sekundách. {@0}": "진동의 주기를 초 단위로 계산하세요. {@0}",
  "Vypočítaj stopu matice sústavy $\\mathrm{tr}\\,A$.": "방정식계의 행렬의 대각합 $\\mathrm{tr}\\,A$를 계산하세요.",
  "Vypočítaj stopu, determinant a diskriminant $(\\mathrm{tr}\\,A)^{2} - 4\\det A$ a použi tabuľku z teórie.": "대각합, 행렬식, 판별식 $(\\mathrm{tr}\\,A)^{2} - 4\\det A$를 계산하고 이론의 표를 이용하세요.",
  "Vypočítaj vlastnú uhlovú frekvenciu $\\omega_0$ (v $\\mathrm{s^{-1}}$). Zaokrúhli na 3 desatinné miesta.": "고유 각진동수 $\\omega_0$($\\mathrm{s^{-1}}$ 단위)을 계산하세요. 소수 셋째 자리까지 반올림하세요.",
  "Vypočítaj časovú konštantu $\\tau = RC$ v milisekundách.": "시상수 $\\tau = RC$를 밀리초 단위로 계산하세요.",
  "Vypočítal si $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "$y$가 아니라 $u = \\frac{y}{x}$를 계산했어요. 역치환 $y = ux$를 잊지 마세요.",
  "Vypočítal si hodnotu $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "$y$가 아니라 $u = \\frac{y}{x}$의 값을 계산했어요. 역치환 $y = ux$를 잊지 마세요.",
  "Vypočítal si hodnotu pomocnej funkcie $u = \\frac{y}{x}$, nie $y$. Nezabudni na spätnú substitúciu $y = ux$.": "$y$가 아니라 보조 함수 $u = \\frac{y}{x}$의 값을 계산했어요. 역치환 $y = ux$를 잊지 마세요.",
  "Vyrieš $1 - \\mathrm{e}^{-t/\\tau} = p$ pre $t$: $t = -\\tau\\ln(1 - p)$.": "$1 - \\mathrm{e}^{-t/\\tau} = p$를 $t$에 대해 푸세요: $t = -\\tau\\ln(1 - p)$.",
  "Vyrieš $\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$ a zadaj vlastné čísla (oddelené bodkočiarkou).": "$\\lambda^{2} - (\\mathrm{tr}\\,A)\\lambda + \\det A = 0$을 풀고 고윳값을 입력하세요(세미콜론으로 구분).",
  "Vyrieš Cauchyho úlohu $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ (pre $x \\gt 0$), a vypočítaj $y({@1})$. {@2}": "코시 문제 $x^{2}y' = y^{2} + xy$, $y(1) = {@0}$ ($x \\gt 0$)을 풀고 $y({@1})$을 계산하세요. {@2}",
  "Vyrieš Cauchyho úlohu $xy'{@0} = {@1}$, $y(1) = {@2}$, pre $x \\gt 0$ a vypočítaj $y(2)$. Výsledok zadaj presne (zlomok alebo desatinné číslo).": "$x \\gt 0$에서 코시 문제 $xy'{@0} = {@1}$, $y(1) = {@2}$를 풀고 $y(2)$를 계산하세요. 결과는 정확하게 입력하세요(분수 또는 소수).",
  "Vyrieš Cauchyho úlohu $xyy' = y^{2}{@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "코시 문제 $xyy' = y^{2}{@0}$, $y(1) = {@1}$ ($x \\gt 0$)을 풀고 $y({@2})$를 계산하세요. {@3}",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. Výsledok zadaj ako zlomok alebo celé číslo.": "코시 문제 $y' = {@0}$, $y(0) = {@1}$을 풀고 $y({@2})$를 계산하세요. 결과는 분수 또는 정수로 입력하세요.",
  "Vyrieš Cauchyho úlohu $y' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$. {@3}": "코시 문제 $y' = {@0}$, $y(0) = {@1}$을 풀고 $y({@2})$를 계산하세요. {@3}",
  "Vyrieš Cauchyho úlohu $yy' = {@0}$, $y(0) = {@1}$, a vypočítaj $y({@2})$.": "코시 문제 $yy' = {@0}$, $y(0) = {@1}$을 풀고 $y({@2})$를 계산하세요.",
  "Vyrieš Cauchyho úlohu ${@0}$, $y(1) = {@1}$ (pre $x \\gt 0$), a vypočítaj $y({@2})$. {@3}": "코시 문제 ${@0}$, $y(1) = {@1}$ ($x \\gt 0$)을 풀고 $y({@2})$를 계산하세요. {@3}",
  "Vyrieš sústavu a urči $A$.": "연립방정식을 풀고 $A$를 구하세요.",
  "Využi $\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$ a vyjadri $y$.": "$\\int\\frac{dy}{1 + y^{2}} = \\mathrm{arctg}\\,y$를 이용해서 $y$를 나타내세요.",
  "Výraz $\\frac{M_y - N_x}{N}$ má tvar $\\frac{k}{x}$. Urči $k$.": "식 $\\frac{M_y - N_x}{N}$은 $\\frac{k}{x}$ 꼴이에요. $k$를 구하세요.",
  "Výraz $\\sqrt{m/k}$ je $\\frac{1}{\\omega_0}$; perióda je ešte $2\\pi$-krát väčšia.": "식 $\\sqrt{m/k}$는 $\\frac{1}{\\omega_0}$이에요. 주기는 그보다 $2\\pi$배 더 커요.",
  "Všeobecné riešenie rovnice $xy' + y ={@0}$ na intervale, ktorý neobsahuje nulu, je $y = {@1} + \\frac{C}{x}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$.": "0을 포함하지 않는 구간에서 방정식 $xy' + y ={@0}$의 일반해는 $y = {@1} + \\frac{C}{x}$예요. 초기조건 $y({@2}) = {@3}$에 대해 $C$를 구하세요.",
  "Všeobecné riešenie rovnice $xy' = 2y{@0}$ je $y = Cx^{2}{@1}$. Urči $C$ pre začiatočnú podmienku $y({@2}) = {@3}$. Výsledok zadaj ako celé číslo alebo zlomok.": "방정식 $xy' = 2y{@0}$의 일반해는 $y = Cx^{2}{@1}$이에요. 초기조건 $y({@2}) = {@3}$에 대해 $C$를 구하세요. 결과는 정수 또는 분수로 입력하세요.",
  "Všeobecné riešenie rovnice $y' = {@0}{@1}$ je $y = C{@2}{@3}$. Urči konštantu $C$ tak, aby riešenie spĺňalo začiatočnú podmienku $y(0) = {@4}$.": "방정식 $y' = {@0}{@1}$의 일반해는 $y = C{@2}{@3}$이에요. 해가 초기조건 $y(0) = {@4}$를 만족하도록 상수 $C$를 구하세요.",
  "Wronskián je $W = y_1y_2' - y_1'y_2$; poradie členov rozhoduje o znamienku $K$.": "론스키 행렬식은 $W = y_1y_2' - y_1'y_2$예요. 항의 순서가 $K$의 부호를 결정해요.",
  "Wronskián je súčinom dvoch funkcií s činiteľom $\\mathrm{e}^{\\alpha x}$, preto má v exponente $2\\alpha$.": "론스키 행렬식은 인수 $\\mathrm{e}^{\\alpha x}$를 가진 두 함수의 곱이므로 지수에 $2\\alpha$가 있어요.",
  "Y(s) vyjadrené": "Y(s)를 나타냄",
  "Z merania urči konštantu $k$ v $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$. Zaokrúhli na 4 desatinné miesta.": "측정값에서 $T(t) = T_o + (T_0 - T_o)\\mathrm{e}^{-kt}$의 상수 $k$를 구하세요. 소수 넷째 자리까지 반올림하세요.",
  "Za každý polčas klesne množstvo na polovicu: $m(t) = m_0\\cdot 2^{-t/T}$.": "반감기마다 양이 절반으로 줄어요: $m(t) = m_0\\cdot 2^{-t/T}$.",
  "Za koľko milisekúnd dosiahne napätie požadovanú hodnotu? {@0}": "전압이 원하는 값에 도달하는 데 몇 밀리초가 걸릴까요? {@0}",
  "Za koľko minút klesne teplota na požadovanú hodnotu? Zaokrúhli na desatiny minúty.": "온도가 원하는 값으로 내려가는 데 몇 분이 걸릴까요? 소수 첫째 자리까지 반올림하세요.",
  "Za koľko rokov dosiahne populácia polovicu nosnej kapacity? {@0}": "개체군이 환경 수용력의 절반에 도달하는 데 몇 년이 걸릴까요? {@0}",
  "Zabudol si na druhú deriváciu: $y_p'' = -{@0}y_p$, takže koeficient pri $A$ v rovnici pre kosínus je $q - {@1}$.": "이계도함수를 잊었어요: $y_p'' = -{@0}y_p$이므로 코사인에 대한 방정식에서 $A$의 계수는 $q - {@1}$이에요.",
  "Zabudol si na funkciu $\\varphi(y)$: po integrovaní $M$ podľa $x$ ju treba dourčiť z podmienky $F_y = N$.": "함수 $\\varphi(y)$를 잊었어요: $M$을 $x$에 대해 적분한 뒤 조건 $F_y = N$에서 이 함수를 결정해야 해요.",
  "Zabudol si na konštantný člen ${@0}$ vo všeobecnom riešení; najprv ho prenes na druhú stranu.": "일반해의 상수항 ${@0}$을 잊었어요. 먼저 그 항을 반대쪽으로 옮기세요.",
  "Zabudol si na konštantu $C$: zo začiatočnej podmienky $y(0)$ vyjde $C$, ktorým treba exponenciálu vynásobiť.": "상수 $C$를 잊었어요: 초기조건 $y(0)$에서 $C$가 나오고, 지수함수에 그 값을 곱해야 해요.",
  "Zabudol si na prítok soli $cq$: bez neho by soľ z nádrže len ubúdala. Riešenie sa blíži k rovnovážnej hodnote $cV$.": "소금의 유입량 $cq$를 잊었어요: 그게 없으면 탱크의 소금은 줄기만 해요. 해는 평형값 $cV$에 가까워져요.",
  "Zabudol si na začiatočnú podmienku: $\\mathcal{L}\\{y'\\} = sY - y(0)$, takže v $Y(s)$ je aj člen $\\frac{y(0)}{s - a}$.": "초기조건을 잊었어요: $\\mathcal{L}\\{y'\\} = sY - y(0)$이므로 $Y(s)$에는 항 $\\frac{y(0)}{s - a}$도 있어요.",
  "Zakry činiteľ $s{@0}$ a dosaď $s = {@1}$.": "인수 $s{@0}$을 가리고 $s = {@1}$을 대입하세요.",
  "Zamenil si hmotnosť a tuhosť: $\\omega_0 = \\sqrt{k/m}$, a perióda je $\\frac{2\\pi}{\\omega_0}$, nie $2\\pi\\omega_0$.": "질량과 강성을 바꿨어요: $\\omega_0 = \\sqrt{k/m}$이고 주기는 $2\\pi\\omega_0$이 아니라 $\\frac{2\\pi}{\\omega_0}$예요.",
  "Zamenil si obrazy: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$ a $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$.": "변환을 서로 바꿨어요: $\\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^{2} + \\omega^{2}}$, $\\mathcal{L}\\{\\cos\\omega t\\} = \\frac{s}{s^{2} + \\omega^{2}}$예요.",
  "Zamenil si súradnice: v bode $[x; y]$ je prvá súradnica $x$ a druhá $y$. Dosaď ich do $f(x, y)$ na správne miesta.": "좌표를 바꿨어요: 점 $[x; y]$에서 첫째 좌표는 $x$, 둘째 좌표는 $y$예요. $f(x, y)$의 올바른 자리에 대입하세요.",
  "Zameň $y''$ za $\\lambda^{2}$, $y'$ za $\\lambda$ a $y$ za $1$ a vyrieš kvadratickú rovnicu.": "$y''$을 $\\lambda^{2}$으로, $y'$을 $\\lambda$로, $y$를 $1$로 바꾸고 이차방정식을 푸세요.",
  "Zapíš riešenie ako $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$, konštanty urči z podmienok a amplitúda je $\\sqrt{C_1^{2} + C_2^{2}}$.": "해를 $C_1\\cos\\omega_0t + C_2\\sin\\omega_0t$로 쓰고 조건에서 상수를 구하세요. 진폭은 $\\sqrt{C_1^{2} + C_2^{2}}$예요.",
  "Zapíš rovnicu v tvare $y' = \\frac{y}{x} + a$, dosaď $y = ux$, $y' = u + xu'$ a integruj.": "방정식을 $y' = \\frac{y}{x} + a$ 꼴로 쓰고 $y = ux$, $y' = u + xu'$을 대입해서 적분하세요.",
  "Začiatočná hodnota y(0)": "초기값 y(0)",
  "Zderivuj $x_p$ dvakrát (súčin $t$ a goniometrickej funkcie) a dosaď. Pri $\\omega = \\omega_0$ zostane len člen bez $t$.": "$x_p$를 두 번 미분하고($t$와 삼각함수의 곱) 대입하세요. $\\omega = \\omega_0$이면 $t$가 없는 항만 남아요.",
  "Zderivuj všeobecné riešenie, dosaď $x = 0$ do $y$ aj $y'$ a vyrieš sústavu dvoch lineárnych rovníc.": "일반해를 미분하고 $y$와 $y'$에 $x = 0$을 대입한 뒤 두 일차방정식의 연립방정식을 푸세요.",
  "Zisti, koľkokrát je číslo $\\alpha$ z exponentu pravej strany koreňom charakteristickej rovnice, a toľkokrát vynásob základný tvar číslom $x$.": "우변의 지수에 있는 수 $\\alpha$가 특성방정식의 몇 중근인지 확인하고, 그 횟수만큼 기본 꼴에 $x$를 곱하세요.",
  "Zo začiatočnej podmienky urči $B$.": "초기조건에서 $B$를 구하세요.",
  "Zostav bilanciu $x' = (\\text{prítok látky}) - (\\text{odtok látky}) = cq - \\frac{q}{V}x$ a vyrieš lineárnu rovnicu.": "수지 $x' = (\\text{물질 유입량}) - (\\text{물질 유출량}) = cq - \\frac{q}{V}x$를 세우고 선형 방정식을 푸세요.",
  "Zostav charakteristickú rovnicu, urči typ koreňov podľa diskriminantu a použi príslušný tvar riešenia.": "특성방정식을 세우고 판별식으로 근의 종류를 정한 뒤 그에 맞는 해의 꼴을 이용하세요.",
  "Záporné $A$ znamená, že kmity sú v protifáze s budiacou silou (budiaca frekvencia je vyššia ako vlastná).": "$A$가 음수이면 진동이 외력과 반대 위상이라는 뜻이에요(외력의 진동수가 고유 진동수보다 높아요).",
  "absolútnom člene": "상수항",
  "algebra": "대수",
  "algebraická rovnica": "대수방정식",
  "axy": "axy",
  "axy - x": "axy - x",
  "druhá": "이계 도함수",
  "dvojnásobný koreň ${@0}$": "중근 ${@0}$",
  "je dvojnásobným koreňom": "중근이에요",
  "je jednoduchým koreňom": "단순근이에요",
  "k = 0: veličina sa nemení": "k = 0: 양이 변하지 않음",
  "konštanta": "상수",
  "korene ${@0}$ a ${@1}$": "${@0}$과 ${@1}$",
  "kritické tlmenie": "임계 감쇠",
  "kritické tlmenie: najrýchlejší návrat bez kmitov": "임계 감쇠: 진동 없이 가장 빠르게 복귀",
  "krát ${@0}$": "에 ${@0}$를 곱한 식",
  "litre": "리터",
  "litrov": "리터",
  "logistická krivka s K = {@0}": "K = {@0}인 로지스틱 곡선",
  "nadkritické tlmenie (aperiodický pohyb)": "과감쇠(비주기 운동)",
  "nadkritické tlmenie: aperiodický pohyb": "과감쇠: 비주기 운동",
  "neizolovaný rovnovážny bod (det A = 0)": "고립되지 않은 평형점 (det A = 0)",
  "nestabilné ohnisko": "불안정 나선점",
  "nestabilný degenerovaný uzol": "불안정 퇴화 마디점",
  "nestabilný uzol": "불안정 마디점",
  "netlmené kmity, ω₀ = 2": "비감쇠 진동, ω₀ = 2",
  "nie je koreňom": "근이 아니에요",
  "po vydelení číslom ${@0}$": "${@0}$으로 나누면 ",
  "podkritické tlmenie (tlmené kmity)": "부족 감쇠(감쇠 진동)",
  "podkritické tlmenie: tlmené kmity, ω<sub>d</sub> = {@0}": "부족 감쇠: 감쇠 진동, ω<sub>d</sub> = {@0}",
  "polynóm 1. stupňa": "일차 다항식",
  "polčas ln 2 / |k| = {@0}": "반감기 ln 2 / |k| = {@0}",
  "pre obraz Y(s)": "변환 Y(s)에 대해",
  "prvá": "일계 도함수",
  "riešenie y(t)": "해 y(t)",
  "rovnica pre y(t)": "y(t)에 대한 방정식",
  "rozklad na parciálne zlomky": "부분분수 분해",
  "roztok s koncentráciou ${@0}\\,\\mathrm{kg/l}$ {@1}": "{@1} 농도가 ${@0}\\,\\mathrm{kg/l}$인 용액이",
  "roztoku, v ktorom je ${@0}\\,\\mathrm{kg}$ soli": "소금 ${@0}\\,\\mathrm{kg}$이 녹아 있는 용액",
  "rýchlosťou ${@0}$ {@1} za minútu": "분당 ${@0}$ {@1}의 빠르기로",
  "sedlo": "안장점",
  "stabilné ohnisko": "안정 나선점",
  "stabilný uzol": "안정 마디점",
  "tabuľka obrazov": "변환표",
  "tretia": "삼계 도함수",
  "začiatočná úloha": "초기값 문제",
  "{@0} $y_p'' = -{@1}y_p$ a $y_p' = {@2}(-A{@3} + B{@4})$. Po dosadení porovnáme koeficienty: pri ${@5}$: ${@6} = {@7}$, pri ${@8}$: ${@9} = {@10}$. Riešenie sústavy je $A = {@11}$, $B = {@12}$.": "{@0} $y_p'' = -{@1}y_p$이고 $y_p' = {@2}(-A{@3} + B{@4})$예요. 대입하고 계수를 비교하면: ${@5}$에서 ${@6} = {@7}$, ${@8}$에서 ${@9} = {@10}$. 연립방정식의 해는 $A = {@11}$, $B = {@12}$예요.",
  "{@0} Aké napätie bude na kondenzátore ${@1}\\,\\mathrm{ms}$ po zapnutí? Výsledok vo voltoch zaokrúhli na 2 desatinné miesta.": "{@0} 스위치를 켜고 ${@1}\\,\\mathrm{ms}$ 후 축전기의 전압은 얼마일까요? 결과를 볼트 단위로 소수 둘째 자리까지 반올림하세요.",
  "{@0} Akú teplotu bude mať ${@1}$ minút po položení? Výsledok zaokrúhli na desatiny stupňa.": "{@0} 놓은 지 ${@1}$분 후 물체의 온도는 얼마일까요? 결과를 소수 첫째 자리까지 반올림하세요.",
  "{@0} Koľko jedincov bude mať populácia po ${@1}$ rokoch? Výsledok zaokrúhli na celé číslo.": "{@0} ${@1}$년 후 개체군의 개체 수는 얼마일까요? 결과를 정수로 반올림하세요.",
  "{@0} Za koľko milisekúnd dosiahne napätie na kondenzátore ${@1}\\,\\%$ napätia zdroja? {@2}": "{@0} 축전기의 전압이 전원 전압의 ${@1}\\,\\%$에 도달하는 데 몇 밀리초가 걸릴까요? {@2}",
  "{@0} Za koľko minút od položenia klesne teplota telesa na ${@1}{@2}$? Výsledok zaokrúhli na desatiny minúty.": "{@0} 놓은 뒤 몇 분 후에 물체의 온도가 ${@1}{@2}$로 내려갈까요? 결과를 소수 첫째 자리까지 반올림하세요.",
  "{@0} Za koľko rokov dosiahne polovicu nosnej kapacity (vtedy rastie najrýchlejšie)? {@1}": "{@0} 환경 수용력의 절반(이때 가장 빠르게 증가해요)에 도달하는 데 몇 년이 걸릴까요? {@1}",
  "{@0}Porovnaním s tvarom $x'' + 2\\delta x' + \\omega_0^{2}x = 0$ je $2\\delta = {@1}$, $\\delta = {@2}$ a $\\omega_0^{2} = {@3}$. Korene charakteristickej rovnice sú $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$, preto $\\omega_d = \\sqrt{{@7}} \\approx {@8}$.": "{@0}$x'' + 2\\delta x' + \\omega_0^{2}x = 0$ 꼴과 비교하면 $2\\delta = {@1}$, $\\delta = {@2}$, $\\omega_0^{2} = {@3}$이에요. 특성방정식의 근은 $-{@4}\\pm\\mathrm{i}\\sqrt{{@5} - {@6}}$이므로 $\\omega_d = \\sqrt{{@7}} \\approx {@8}$이에요.",
  "· riešením je priamka y = x − 1": "· 해는 직선 y = x − 1",
  "Časová konštanta $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$, teda $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$.": "시상수 $\\tau = RC = {@0}\\cdot 10^{3}\\,\\Omega\\cdot {@1}\\cdot 10^{-6}\\,\\mathrm{F} = {@2}\\,\\mathrm{ms}$. $u_C(t) = U\\left(1 - \\mathrm{e}^{-t/\\tau}\\right)$이므로 $u_C = {@3}\\left(1 - \\mathrm{e}^{-{@4}/{@5}}\\right) \\approx {@6}\\,\\mathrm{V}$예요.",
  "Či sú vlastné čísla reálne (uzol) alebo komplexné (ohnisko, stred), rozhoduje znamienko diskriminantu $(\\mathrm{tr}\\,A)^{2} - 4\\det A$.": "고윳값이 실수(마디점)인지 복소수(나선점, 중심점)인지는 판별식 $(\\mathrm{tr}\\,A)^{2} - 4\\det A$의 부호가 결정해요.",
  "Člen $\\frac{y}{x}$ je v poriadku, ale druhý člen nezávisí len od podielu $\\frac{y}{x}$.": "항 $\\frac{y}{x}$는 괜찮지만 둘째 항은 비 $\\frac{y}{x}$에만 의존하지 않아요.",
  "Člen $p\\,y'$ sa transformuje na $p(sY - y(0))$; po prenesení na pravú stranu dá $+p\\,y(0)$. Over znamienko.": "항 $p\\,y'$은 $p(sY - y(0))$로 변환되고, 우변으로 옮기면 $+p\\,y(0)$이 돼요. 부호를 확인하세요.",
  "Číslo ${@0}$ nie je koreňom charakteristickej rovnice, lebo ${@1}^{2}{@2}{@3} = {@4}\\neq 0$. Pre $y_p = A{@5}$ je $y_p' = {@6}A{@7}$ a $y_p'' = {@8}A{@9}$, po dosadení $A\\cdot {@10}\\,{@11} = {@12}{@13}$, teda $A = {@14}$.": "${@1}^{2}{@2}{@3} = {@4}\\neq 0$이므로 수 ${@0}$은 특성방정식의 근이 아니에요. $y_p = A{@5}$이면 $y_p' = {@6}A{@7}$, $y_p'' = {@8}A{@9}$이고, 대입하면 $A\\cdot {@10}\\,{@11} = {@12}{@13}$이므로 $A = {@14}$예요.",
  "Číslo ${@0}$ z exponentu pravej strany je koreňom charakteristickej rovnice (rezonancia); koľkokrát treba tvar vynásobiť $x$?": "우변의 지수에 있는 수 ${@0}$은 특성방정식의 근이에요(공명). 꼴에 $x$를 몇 번 곱해야 할까요?",
  "Číslo ${@0}\\mathrm{i}$ nie je koreňom charakteristickej rovnice, nejde o rezonanciu.": "수 ${@0}\\mathrm{i}$는 특성방정식의 근이 아니므로 공명이 아니에요.",
  "čas zdvojnásobenia ln 2 / k = {@0}": "배가 시간 ln 2 / k = {@0}",
  "čistej vody": "깨끗한 물",
  "čistá voda {@0}": "{@0} 깨끗한 물이",
  "štvrtá": "사계 도함수",
  "λ = {@0} (dvojnásobný koreň)": "λ = {@0} (중근)",
  "λ = {@0} ± {@1}i (komplexné korene)": "λ = {@0} ± {@1}i (복소근)",
  "λ₁ = {@0}, λ₂ = {@1} (rôzne reálne korene)": "λ₁ = {@0}, λ₂ = {@1} (서로 다른 실근)",
  "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">maximum pri ω = {@1}, amplitúda {@2}</span> (pre F₀/m = 1)": "ω₀ = 2, δ = {@0} · <span class=\"c-accent\">ω = {@1}에서 최대, 진폭 {@2}</span> (F₀/m = 1일 때)",
  "Výsledok zaokrúhli na 2 desatinné miesta.": "결과는 소수 둘째 자리까지 반올림하세요."
 }
});
