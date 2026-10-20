/* 한국어: preklad js/rocniky/v1.js. Vygenerované nástrojom tools/i18n_build.js z .i18n/out/ko/v1/ – needitovať ručne. */
CONTENT_I18N.add('ko', {
 "decimal": ".",
 "lessons": {
  "v1-vektory": {
   "title": "Rⁿ의 벡터와 일차종속",
   "summary": "벡터의 연산, 일차결합, 생성(span), 일차종속과 일차독립.",
   "theory": [
    "<p>$\\mathbb{R}^n$의 <strong>벡터</strong>는 실수의 순서쌍 $n$-튜플 $u=(u_1, u_2, \\dots, u_n)$입니다. 벡터의 덧셈과 실수(스칼라)배는 성분별로 계산합니다: $u+v=(u_1+v_1, \\dots, u_n+v_n)$, $c\\,u=(c\\,u_1, \\dots, c\\,u_n)$. 영벡터는 $o=(0, \\dots, 0)$로 나타냅니다.</p>",
    "<p>벡터 $u_1, \\dots, u_k$의 <strong>일차결합</strong>은 $c_1u_1+c_2u_2+\\dots+c_ku_k$ 꼴의 모든 벡터이며, 여기서 $c_1, \\dots, c_k\\in\\mathbb{R}$는 계수입니다. 모든 일차결합의 집합을 <strong>생성(span)</strong>이라 하고 $\\mathcal{L}(u_1, \\dots, u_k)$로 나타냅니다.</p>",
    {
     "fig": "v1-linkomb",
     "caption": "벡터 $u=(2, 1)$과 $v=(-1, 2)$는 평행하지 않으므로 평면의 모든 벡터를 $\\alpha u+\\beta v$로 나타낼 수 있습니다. 계수 $\\alpha$와 $\\beta$를 움직이며 결과(주황색) 벡터가 어떻게 바뀌는지 관찰해 보세요."
    },
    "<p>등식 $c_1u_1+\\dots+c_ku_k=o$로부터 $c_1=\\dots=c_k=0$이 나오면 벡터 $u_1, \\dots, u_k$는 <strong>일차독립</strong>입니다. 그렇지 않으면 <strong>일차종속</strong>이며, 이는 그중 적어도 하나를 나머지 벡터들의 일차결합으로 나타낼 수 있을 때와 같습니다.</p>\n       <p>실제로는 벡터들을 행렬 $A$의 행으로 씁니다: 벡터들이 일차독립일 필요충분조건은 $h(A)=k$입니다(계수(rank)는 다음 단원 참고). $\\mathbb{R}^n$의 벡터 $n$개라면 $\\det A\\neq 0$인지만 확인하면 됩니다. $\\mathbb{R}^n$에서 $n$개보다 많은 벡터는 항상 일차종속이고, 영벡터를 포함하는 집합도 항상 종속입니다.</p>"
   ],
   "examples": [
    {
     "task": "벡터 $u=(1, 2, 0)$, $v=(0, 1, 1)$, $w=(2, 5, 1)$이 일차종속인지 판별하세요.",
     "steps": [
      "벡터들을 행렬의 행으로 쓰고 1행에 대한 전개로 행렬식을 계산합니다:",
      "$\\begin{vmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\2&amp;5&amp;1\\end{vmatrix}=1\\cdot(1\\cdot 1-1\\cdot 5)-2\\cdot(0\\cdot 1-1\\cdot 2)+0=-4+4=0$.",
      "행렬식이 0이므로 벡터들은 <strong>일차종속</strong>입니다. 실제로 $w=2u+v$입니다."
     ]
    },
    {
     "task": "벡터 $w=(4, 7)$을 벡터 $u=(2, 1)$과 $v=(-1, 2)$의 일차결합으로 나타내세요.",
     "steps": [
      "$\\alpha(2, 1)+\\beta(-1, 2)=(4, 7)$을 만족하는 $\\alpha, \\beta$, 즉 연립방정식 $2\\alpha-\\beta=4$, $\\alpha+2\\beta=7$의 해를 구합니다.",
      "두 번째 식에서 $\\alpha=7-2\\beta$; 대입하면 $14-4\\beta-\\beta=4$이므로 $\\beta=2$, $\\alpha=3$입니다.",
      "<strong>답:</strong> $w=3u+2v$."
     ]
    }
   ]
  },
  "v1-operacie": {
   "title": "행렬과 행렬의 연산",
   "summary": "행렬의 크기, 특수한 행렬, 덧셈, 스칼라배, 전치와 대각합(trace).",
   "theory": [
    "<p>$m\\times n$ <strong>행렬</strong>은 $m$개의 행과 $n$개의 열로 이루어진 실수의 직사각형 배열 $A=(a_{ij})$입니다. 두 행렬은 크기가 같고 같은 위치의 성분이 모두 같을 때 서로 같습니다. $n\\times n$ 행렬은 $n$차 <strong>정사각행렬</strong>이며, 성분 $a_{11}, a_{22}, \\dots, a_{nn}$은 <strong>주대각선</strong>을 이룹니다. 중요한 행렬로는 <strong>단위행렬</strong> $I$(대각선에 1, 나머지는 0), <strong>영행렬</strong> $O$, <strong>대각행렬</strong>, <strong>상(하)삼각행렬</strong>(대각선 아래(위)가 모두 0)이 있습니다.</p>",
    "<p>크기가 같은 행렬의 <strong>합</strong>과 행렬의 <strong>스칼라배</strong>는 성분별로 계산합니다: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(cA)_{ij}=c\\,a_{ij}$. 이때 $A+B=B+A$, $(A+B)+C=A+(B+C)$, $c(A+B)=cA+cB$, $(c+d)A=cA+dA$가 성립합니다. 이 연산들에 대해 $m\\times n$ 행렬 전체는 벡터공간을 이룹니다.</p>",
    "<p>$m\\times n$ 행렬의 <strong>전치행렬</strong> $A^{T}$는 $n\\times m$ 행렬이고 $(A^{T})_{ij}=a_{ji}$입니다 – 행이 열이 됩니다. $(A^{T})^{T}=A$, $(A+B)^{T}=A^{T}+B^{T}$, $(cA)^{T}=cA^{T}$, $(AB)^{T}=B^{T}A^{T}$(순서가 바뀜)가 성립합니다.</p>\n       <p>정사각행렬이 $A^{T}=A$이면 <strong>대칭행렬</strong>, $A^{T}=-A$이면 <strong>반대칭행렬</strong>(이때 대각성분은 모두 0)입니다. 모든 정사각행렬은 대칭 부분과 반대칭 부분의 합 $A=\\tfrac12(A+A^{T})+\\tfrac12(A-A^{T})$로 유일하게 분해됩니다. <strong>대각합</strong> $\\operatorname{tr}A=a_{11}+\\dots+a_{nn}$은 대각성분의 합이며, 임의의 행렬에 대해 $\\operatorname{tr}(A^{T}A)$는 모든 성분의 제곱의 합입니다.</p>"
   ],
   "examples": [
    {
     "task": "$A=\\begin{pmatrix}1&amp;-2&amp;0\\\\3&amp;1&amp;4\\end{pmatrix}$, $B=\\begin{pmatrix}2&amp;1\\\\0&amp;-1\\\\5&amp;2\\end{pmatrix}$일 때 $2A-B^{T}$를 계산하세요.",
     "steps": [
      "$B$는 $3\\times 2$ 행렬이므로 $B^{T}=\\begin{pmatrix}2&amp;0&amp;5\\\\1&amp;-1&amp;2\\end{pmatrix}$는 $A$와 같은 $2\\times 3$ 행렬입니다.",
      "$2A=\\begin{pmatrix}2&amp;-4&amp;0\\\\6&amp;2&amp;8\\end{pmatrix}$.",
      "<strong>답:</strong> $2A-B^{T}=\\begin{pmatrix}0&amp;-4&amp;-5\\\\5&amp;3&amp;6\\end{pmatrix}$."
     ]
    },
    {
     "task": "행렬 $A=\\begin{pmatrix}1&amp;4\\\\0&amp;3\\end{pmatrix}$을 대칭행렬과 반대칭행렬의 합으로 분해하세요.",
     "steps": [
      "$A^{T}=\\begin{pmatrix}1&amp;0\\\\4&amp;3\\end{pmatrix}$.",
      "대칭 부분: $S=\\tfrac12(A+A^{T})=\\tfrac12\\begin{pmatrix}2&amp;4\\\\4&amp;6\\end{pmatrix}=\\begin{pmatrix}1&amp;2\\\\2&amp;3\\end{pmatrix}$.",
      "반대칭 부분: $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0&amp;2\\\\-2&amp;0\\end{pmatrix}$. 검산: $S+K=A$."
     ]
    }
   ]
  },
  "v1-hodnost": {
   "title": "행렬의 계수(rank)와 행 연산",
   "summary": "기본 행 연산, 사다리꼴, 가우스 소거법과 행렬의 계수.",
   "theory": [
    "<p><strong>기본 행 연산</strong>은 다음 세 가지입니다: (1) 두 행을 교환하기, (2) 한 행에 0이 아닌 수를 곱하기, (3) 한 행에 다른 행의 상수배를 더하기. $B$가 $A$로부터 이러한 연산을 유한 번 적용하여 얻어지면 $A\\sim B$로 씁니다(두 행렬은 행동치). $R_2-3R_1$은 둘째 행을 둘째 행에서 첫째 행의 3배를 뺀 것으로 바꾼다는 뜻입니다.</p>",
    "<p>0이 아닌 각 행이 바로 위 행보다 더 많은 0으로 시작하고 영행이 맨 아래에 있으면 행렬은 <strong>사다리꼴</strong>입니다. 한 행에서 처음으로 0이 아닌 성분을 그 행의 <strong>선도 성분(피벗)</strong>이라 합니다. <strong>가우스 소거법</strong>은 모든 행렬을 사다리꼴로 바꿉니다: 현재 열에서 피벗을 정하고 연산 (3)으로 그 아래 성분을 모두 0으로 만듭니다. 여기에 피벗을 1로 만들고 피벗 위의 성분까지 0으로 만들면 기약 사다리꼴을 얻습니다(가우스–조르당 소거법).</p>",
    {
     "fig": "v1-stupne",
     "caption": "사다리꼴: 아래로 내려갈수록 피벗이 오른쪽으로 이동합니다. 이 행렬은 0이 아닌 행이 세 개이므로 $h(A)=3$입니다."
    },
    "<p><strong>계수(rank)</strong> $h(A)$는 행렬 $A$의 일차독립인 행의 최대 개수입니다. 행 연산은 계수를 바꾸지 않으므로 $h(A)$는 사다리꼴에서 0이 아닌 행의 개수와 같습니다. $h(A)=h(A^{T})$(행 계수와 열 계수가 같음)이고 $h(A)\\le\\min(m, n)$입니다. $n$차 정사각행렬에 대해서는 $h(A)=n\\iff\\det A\\neq 0\\iff A$는 정칙행렬입니다.</p>"
   ],
   "examples": [
    {
     "task": "행렬 $A=\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\2&amp;4&amp;1&amp;0\\\\3&amp;6&amp;0&amp;3\\end{pmatrix}$의 계수를 구하세요.",
     "steps": [
      "$R_2-2R_1$, $R_3-3R_1$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;3&amp;-6\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;2&amp;-1&amp;3\\\\0&amp;0&amp;3&amp;-6\\\\0&amp;0&amp;0&amp;0\\end{pmatrix}$.",
      "사다리꼴에 0이 아닌 행이 두 개 있으므로 $h(A)=2$입니다."
     ]
    },
    {
     "task": "$a$가 어떤 값일 때 행렬 $A=\\begin{pmatrix}1&amp;1&amp;1\\\\1&amp;2&amp;3\\\\2&amp;3&amp;a\\end{pmatrix}$의 계수가 2인가요?",
     "steps": [
      "$R_2-R_1$, $R_3-2R_1$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;1&amp;a-2\\end{pmatrix}$.",
      "$R_3-R_2$: $\\;\\sim\\begin{pmatrix}1&amp;1&amp;1\\\\0&amp;1&amp;2\\\\0&amp;0&amp;a-4\\end{pmatrix}$.",
      "$a=4$이면 마지막 행이 영행이 되어 $h(A)=2$이고, $a\\neq 4$이면 $h(A)=3$입니다."
     ]
    }
   ]
  },
  "v1-determinant": {
   "title": "3×3 행렬식과 라플라스 전개",
   "summary": "사뤼스 법칙, 소행렬식과 여인수, 라플라스 전개, 행렬식의 성질.",
   "theory": [
    "<p>$n$차 정사각행렬의 <strong>행렬식</strong>은 수 $\\det A=\\sum_{\\pi}\\operatorname{sgn}(\\pi)\\,a_{1\\pi(1)}a_{2\\pi(2)}\\cdots a_{n\\pi(n)}$이며, 여기서 합은 집합 $\\{1, \\dots, n\\}$의 $n!$개의 모든 순열 $\\pi$에 대해 취합니다. $n=3$이면 <strong>사뤼스 법칙</strong>을 얻습니다:</p>\n       <p>$\\det A=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}$.</p>",
    {
     "fig": "v1-sarrus",
     "caption": "사뤼스 법칙: 행렬 오른쪽에 처음 두 열을 덧붙여 씁니다. 오른쪽 아래로 향하는 대각선의 곱에는 플러스 부호를, 왼쪽 아래로 향하는 대각선의 곱에는 마이너스 부호를 붙입니다. 3차 행렬에<strong>만</strong> 적용됩니다."
    },
    "<p><strong>소행렬식</strong> $M_{ij}$는 $i$행과 $j$열을 지워서 얻은 행렬의 행렬식이고, <strong>여인수</strong>는 $A_{ij}=(-1)^{i+j}M_{ij}$입니다. $i$행에 대한 <strong>라플라스 전개</strong>: $\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}$(열에 대해서도 마찬가지). 0이 가장 많은 행이나 열에 대해 전개하는 것이 유리합니다.</p>",
    "<p><strong>성질:</strong> $\\det A^{T}=\\det A$; 두 행을 교환하면 부호가 바뀝니다; 한 행에 수 $c$를 곱하면 행렬식에 $c$가 곱해지므로 $\\det(cA)=c^{n}\\det A$입니다; 한 행에 다른 행의 상수배를 더해도 행렬식은 변하지 않습니다; 영행이 있거나 두 행이 비례하는 행렬의 행렬식은 0입니다; 삼각행렬의 행렬식은 대각성분의 곱입니다. 같은 차수의 행렬에 대해 $\\det(AB)=\\det A\\cdot\\det B$이고, $A$가 정칙이면 $\\det A^{-1}=\\frac{1}{\\det A}$입니다.</p>"
   ],
   "examples": [
    {
     "task": "$\\det\\begin{pmatrix}2&amp;1&amp;3\\\\0&amp;-1&amp;4\\\\1&amp;2&amp;1\\end{pmatrix}$를 계산하세요.",
     "steps": [
      "양의 항: $2\\cdot(-1)\\cdot 1+1\\cdot 4\\cdot 1+3\\cdot 0\\cdot 2=-2+4+0=2$.",
      "음의 항: $3\\cdot(-1)\\cdot 1+2\\cdot 4\\cdot 2+1\\cdot 0\\cdot 1=-3+16+0=13$.",
      "<strong>답:</strong> $\\det A=2-13=-11$."
     ]
    },
    {
     "task": "$\\det\\begin{pmatrix}2&amp;0&amp;1&amp;3\\\\1&amp;0&amp;0&amp;2\\\\0&amp;3&amp;0&amp;0\\\\4&amp;0&amp;1&amp;1\\end{pmatrix}$를 계산하세요.",
     "steps": [
      "3행에는 0이 아닌 성분이 $a_{32}=3$ 하나뿐입니다. 3행에 대한 전개: $\\det A=3\\cdot(-1)^{3+2}M_{32}=-3M_{32}$.",
      "$M_{32}=\\begin{vmatrix}2&amp;1&amp;3\\\\1&amp;0&amp;2\\\\4&amp;1&amp;1\\end{vmatrix}=(0+8+3)-(0+4+1)=6$ (사뤼스 법칙).",
      "<strong>답:</strong> $\\det A=-3\\cdot 6=-18$."
     ]
    }
   ]
  },
  "v1-inverzna": {
   "title": "역행렬: 가우스–조르당 방법과 수반행렬",
   "summary": "역행렬의 존재, 가우스–조르당 방법과 수반행렬을 이용한 계산, 행렬방정식.",
   "theory": [
    "<p>$n$차 정사각행렬 $A$의 <strong>역행렬</strong> $A^{-1}$은 $AA^{-1}=A^{-1}A=I$를 만족하는 행렬입니다. 역행렬은 $\\det A\\neq 0$일 때, 그리고 그때에만 존재합니다(이런 행렬을 <strong>정칙행렬</strong>이라 합니다). 행렬식이 0인 행렬은 <strong>특이행렬</strong>입니다. $(A^{-1})^{-1}=A$, $(A^{T})^{-1}=(A^{-1})^{T}$, $(AB)^{-1}=B^{-1}A^{-1}$이 성립합니다.</p>",
    "<p><strong>가우스–조르당 방법:</strong> 첨가행렬 $(A\\mid I)$를 행 연산으로 $(I\\mid B)$ 꼴로 바꾸면 $B=A^{-1}$입니다. 연산 도중 왼쪽에 영행이 나타나면 행렬 $A$는 특이행렬입니다.</p>",
    "<p><strong>수반행렬</strong> $\\operatorname{adj}A$는 여인수 행렬의 전치행렬입니다: $(\\operatorname{adj}A)_{ij}=A_{ji}$. $A^{-1}=\\frac{1}{\\det A}\\operatorname{adj}A$, 즉 $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$입니다 – 첨자가 바뀌는 것에 주의하세요. $n=2$이면 잘 알려진 공식 $\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}$를 얻습니다.</p>",
    "<p><strong>행렬방정식:</strong> $A$가 정칙이면 방정식 $AX=B$는 유일한 해 $X=A^{-1}B$를, 방정식 $XA=B$는 해 $X=BA^{-1}$을 가집니다. 행렬의 곱셈은 교환법칙이 성립하지 않으므로 어느 쪽에서 곱하는지가 중요합니다.</p>"
   ],
   "examples": [
    {
     "task": "가우스–조르당 방법으로 $A=\\begin{pmatrix}1&amp;2&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$의 역행렬을 구하세요.",
     "steps": [
      "$\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\1&amp;2&amp;1&amp;0&amp;0&amp;1\\end{array}\\right)$; $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;1&amp;0&amp;1&amp;0\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "$R_2-R_3$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;2&amp;0&amp;1&amp;0&amp;0\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$; $R_1-2R_2$: $\\;\\sim\\left(\\begin{array}{ccc|ccc}1&amp;0&amp;0&amp;-1&amp;-2&amp;2\\\\0&amp;1&amp;0&amp;1&amp;1&amp;-1\\\\0&amp;0&amp;1&amp;-1&amp;0&amp;1\\end{array}\\right)$.",
      "<strong>답:</strong> $A^{-1}=\\begin{pmatrix}-1&amp;-2&amp;2\\\\1&amp;1&amp;-1\\\\-1&amp;0&amp;1\\end{pmatrix}$ (검산: $AA^{-1}=I$)."
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;3&amp;1\\\\0&amp;1&amp;2\\end{pmatrix}$일 때 성분 $(A^{-1})_{13}$을 구하세요.",
     "steps": [
      "$\\det A=2\\cdot(3\\cdot 2-1\\cdot 1)-1\\cdot(1\\cdot 2-1\\cdot 0)+0=10-2=8$.",
      "$(A^{-1})_{13}=\\frac{A_{31}}{\\det A}$이고, 여기서 $A_{31}=(-1)^{3+1}\\begin{vmatrix}1&amp;0\\\\3&amp;1\\end{vmatrix}=1$입니다.",
      "<strong>답:</strong> $(A^{-1})_{13}=\\frac{1}{8}$."
     ]
    }
   ]
  },
  "v1-sustavy": {
   "title": "연립일차방정식",
   "summary": "가우스 소거법, 프로베니우스 정리, 크라메르 공식과 동차 연립방정식.",
   "theory": [
    "<p>미지수 $n$개, 방정식 $m$개인 연립일차방정식은 행렬로 $Ax=b$로 씁니다. 여기서 $A$는 <strong>계수행렬</strong>, $x=(x_1, \\dots, x_n)^{T}$, $b$는 우변의 열벡터이고, $(A\\mid b)$는 <strong>첨가행렬</strong>입니다. $b=o$이면 연립방정식은 <strong>동차</strong>입니다.</p>",
    "<p><strong>프로베니우스 정리:</strong> 연립방정식 $Ax=b$가 해를 가질 필요충분조건은 $h(A)=h(A\\mid b)$입니다. $h(A)=h(A\\mid b)=n$이면 해는 오직 하나이고, $h(A)=h(A\\mid b)=h\\lt n$이면 해가 무수히 많으며 $n-h$개의 매개변수에 의존합니다.</p>",
    {
     "fig": "v1-priamky",
     "caption": "미지수가 두 개인 방정식 두 개는 평면 위의 두 직선입니다: 한 점에서 만나거나, 서로 다른 평행선이거나, 일치합니다."
    },
    "<p><strong>가우스 소거법:</strong> 첨가행렬을 사다리꼴로 바꾼 뒤 아래에서부터 후진 대입으로 미지수를 구합니다. 피벗이 없는 미지수는 자유 매개변수입니다. <strong>크라메르 공식:</strong> $A$가 정사각행렬이고 $D=\\det A\\neq 0$이면 $x_i=\\frac{D_i}{D}$이며, 여기서 $D_i$는 $A$의 $i$번째 열을 열 $b$로 바꾼 행렬의 행렬식입니다.</p>\n       <p><strong>동차 연립방정식</strong>은 항상 자명해 $x=o$를 가집니다. 자명하지 않은 해는 $h(A)\\lt n$일 때, 그리고 그때에만 존재합니다(정사각행렬이면 $\\det A=0$일 때). 모든 해의 집합은 차원이 $n-h(A)$인 $\\mathbb{R}^n$의 부분공간입니다.</p>"
   ],
   "examples": [
    {
     "task": "연립방정식 $x_1+x_2+x_3=6$, $2x_1-x_2+x_3=3$, $x_1+2x_2-x_3=2$를 푸세요.",
     "steps": [
      "$\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\2&amp;-1&amp;1&amp;3\\\\1&amp;2&amp;-1&amp;2\\end{array}\\right)$; $R_2-2R_1$, $R_3-R_1$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;-3&amp;-1&amp;-9\\\\0&amp;1&amp;-2&amp;-4\\end{array}\\right)$.",
      "$R_2\\leftrightarrow R_3$, 그다음 $R_3+3R_2$: $\\;\\sim\\left(\\begin{array}{ccc|c}1&amp;1&amp;1&amp;6\\\\0&amp;1&amp;-2&amp;-4\\\\0&amp;0&amp;-7&amp;-21\\end{array}\\right)$.",
      "후진 대입: $x_3=3$, $x_2=-4+2\\cdot 3=2$, $x_1=6-2-3=1$. <strong>해:</strong> $(1, 2, 3)$."
     ]
    },
    {
     "task": "연립방정식 $x_1+2x_2-x_3=1$, $2x_1+4x_2+x_3=5$를 푸세요.",
     "steps": [
      "$R_2-2R_1$: $\\;\\left(\\begin{array}{ccc|c}1&amp;2&amp;-1&amp;1\\\\0&amp;0&amp;3&amp;3\\end{array}\\right)$, 따라서 $h(A)=h(A\\mid b)=2\\lt 3$ – 매개변수가 하나인 무수히 많은 해가 있습니다.",
      "2행에서 $x_3=1$. 미지수 $x_2$에는 피벗이 없으므로 $x_2=t$로 놓으면 1행에서 $x_1=1-2t+1=2-2t$입니다.",
      "<strong>해:</strong> $(2-2t, t, 1)$, $t\\in\\mathbb{R}$."
     ]
    }
   ]
  },
  "v1-priestory": {
   "title": "벡터공간, 기저와 차원",
   "summary": "벡터공간과 부분공간, 기저, 차원과 기저에 대한 벡터의 좌표.",
   "theory": [
    "<p>$\\mathbb{R}$ 위의 <strong>벡터공간</strong>은 덧셈과 실수배가 정의된 집합 $V$로, 두 연산의 결과가 $V$를 벗어나지 않고 다음의 통상적인 법칙을 만족합니다: 덧셈의 교환법칙과 결합법칙, 영벡터와 역벡터의 존재, 분배법칙, $(cd)u=c(du)$, $1\\cdot u=u$. 예: $\\mathbb{R}^n$, $m\\times n$ 행렬, 차수가 $n$ 이하인 다항식($P_n$), 구간에서 정의된 실함수.</p>",
    "<p><strong>부분공간</strong>은 덧셈과 실수배에 대해 닫혀 있는, 공집합이 아닌 부분집합 $W\\subseteq V$입니다. 이때 반드시 $o\\in W$입니다. 예를 들어 원점을 지나는 직선과 평면, 동차 연립방정식의 해집합, 모든 생성은 $\\mathbb{R}^3$의 부분공간입니다. 원점을 지나지 않는 평면은 부분공간이 아닙니다.</p>",
    "<p>공간 $V$의 <strong>기저</strong>는 생성이 $V$ 전체가 되는 일차독립인 벡터들의 집합입니다. 모든 기저는 원소의 개수가 같으며, 이 수를 <strong>차원</strong> $\\dim V$라 합니다. 예를 들어 $\\dim\\mathbb{R}^n=n$(표준기저 $e_1, \\dots, e_n$), $\\dim P_n=n+1$이고, $m\\times n$ 행렬의 공간은 차원이 $mn$입니다. $n$차원 공간에서는 일차독립인 벡터 $n$개가 항상 기저를 이루며, $\\dim\\mathcal{L}(u_1, \\dots, u_k)$는 $u_1, \\dots, u_k$를 행으로 하는 행렬의 계수와 같습니다.</p>",
    {
     "fig": "v1-baza",
     "caption": "기저 $b_1=(2, 1)$, $b_2=(-1, 2)$는 ‘비스듬한’ 격자를 만듭니다. 기저 $B$에 대한 벡터의 좌표 $(c_1, c_2)$는 $b_1$ 방향으로 몇 걸음, $b_2$ 방향으로 몇 걸음 가야 하는지를 알려 줍니다."
    },
    "<p>$B=(b_1, \\dots, b_n)$이 기저이면 모든 벡터는 $v=c_1b_1+\\dots+c_nb_n$으로 <strong>유일하게</strong> 나타낼 수 있습니다. 수 $(c_1, \\dots, c_n)$을 기저 $B$에 대한 벡터 $v$의 <strong>좌표</strong>라 합니다. 좌표는 기저 벡터들을 열로 하고 우변이 $v$인 연립방정식을 풀어서 구합니다.</p>"
   ],
   "examples": [
    {
     "task": "기저 $b_1=(1, 0, 1)$, $b_2=(0, 1, 1)$, $b_3=(1, 1, 0)$에 대한 벡터 $v=(3, 0, 1)$의 좌표를 구하세요.",
     "steps": [
      "$v=c_1b_1+c_2b_2+c_3b_3$에서 연립방정식 $c_1+c_3=3$, $c_2+c_3=0$, $c_1+c_2=1$을 얻습니다.",
      "처음 두 식을 빼면 $c_1-c_2=3$; $c_1+c_2=1$과 함께 풀면 $c_1=2$, $c_2=-1$, $c_3=1$입니다.",
      "<strong>답:</strong> $(v)_B=(2, -1, 1)$. 검산: $2(1, 0, 1)-(0, 1, 1)+(1, 1, 0)=(3, 0, 1)$."
     ]
    },
    {
     "task": "부분공간 $W=\\{x\\in\\mathbb{R}^4 : x_1+x_2-x_3=0,\\ x_2+x_4=0\\}$의 기저와 차원을 구하세요.",
     "steps": [
      "계수행렬 $\\begin{pmatrix}1&amp;1&amp;-1&amp;0\\\\0&amp;1&amp;0&amp;1\\end{pmatrix}$은 사다리꼴이고 계수가 2이므로 $\\dim W=4-2=2$입니다.",
      "자유 미지수: $x_3=s$, $x_4=t$. 그러면 $x_2=-t$, $x_1=x_3-x_2=s+t$이므로 $x=s(1, 0, 1, 0)+t(1, -1, 0, 1)$입니다.",
      "<strong>답:</strong> 기저 $\\{(1, 0, 1, 0), (1, -1, 0, 1)\\}$, $\\dim W=2$."
     ]
    }
   ]
  },
  "v1-zobrazenia": {
   "title": "선형사상과 그 행렬",
   "summary": "선형사상, 그 행렬, 사상의 합성, 평면에서의 기하학적 변환, 핵과 상.",
   "theory": [
    "<p>벡터공간 사이의 사상 $f:V\\to W$가 모든 벡터 $u, v$와 수 $c$에 대해 $f(u+v)=f(u)+f(v)$, $f(cu)=c\\,f(u)$를 만족하면 <strong>선형</strong>이라 합니다. 이때 $f(o)=o$입니다. 모든 선형사상 $f:\\mathbb{R}^n\\to\\mathbb{R}^m$은 유일한 $m\\times n$ 행렬 $A$에 대해 $f(x)=Ax$ 꼴이며, $A$의 열은 표준기저 벡터들의 상입니다: $A=\\bigl(f(e_1)\\mid\\dots\\mid f(e_n)\\bigr)$. 합성사상 $g\\circ f$(먼저 $f$, 그다음 $g$)에는 행렬의 곱 $A_gA_f$가 대응합니다.</p>",
    "<table class=\"tbl tbl-auto\"><tr><th>$\\mathbb{R}^2$에서의 변환</th><th>행렬</th></tr>\n       <tr><td>각 $\\varphi$만큼 회전</td><td>$\\begin{pmatrix}\\cos\\varphi&amp;-\\sin\\varphi\\\\\\sin\\varphi&amp;\\cos\\varphi\\end{pmatrix}$</td></tr>\n       <tr><td>$x$축에 대한 대칭</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$</td></tr>\n       <tr><td>직선 $y=x$에 대한 대칭</td><td>$\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>$x$축 위로의 정사영</td><td>$\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$</td></tr>\n       <tr><td>닮음비 $k$인 닮음변환(확대·축소)</td><td>$\\begin{pmatrix}k&amp;0\\\\0&amp;k\\end{pmatrix}$</td></tr></table>",
    {
     "fig": "v1-rotacia",
     "caption": "각 $\\varphi$만큼의 회전: 벡터 $e_1$(파란색)과 $e_2$(초록색)의 상이 바로 회전행렬의 열입니다. 점선 도형은 원래 도형이고, 실선 도형은 그 상입니다."
    },
    "<p><strong>핵</strong> $\\operatorname{Ker}f=\\{x : f(x)=o\\}$는 동차 연립방정식 $Ax=o$의 해집합이고, <strong>상</strong> $\\operatorname{Im}f=\\{f(x) : x\\in\\mathbb{R}^n\\}$은 행렬 $A$의 열들의 생성입니다. 둘 다 부분공간이며 $\\dim\\operatorname{Im}f=h(A)$입니다. <strong>차원 정리(계수-퇴화차수 정리):</strong> $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=n$. 사상이 단사일 필요충분조건은 $\\operatorname{Ker}f=\\{o\\}$입니다.</p>"
   ],
   "examples": [
    {
     "task": "벡터를 먼저 시계 반대 방향으로 $90^\\circ$ 회전한 다음 $x$축에 대해 대칭이동하는 사상의 행렬을 구하세요. 벡터 $(2, 1)$의 상은 무엇인가요?",
     "steps": [
      "회전: $R=\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}$, 대칭: $S=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}$. 합성(먼저 $R$, 그다음 $S$)의 행렬은 $SR$입니다.",
      "$SR=\\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}=\\begin{pmatrix}0&amp;-1\\\\-1&amp;0\\end{pmatrix}$ – 이는 직선 $y=-x$에 대한 대칭입니다.",
      "<strong>상:</strong> $SR\\,(2, 1)^{T}=(-1, -2)^{T}$."
     ]
    },
    {
     "task": "$A=\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\\\1&amp;2&amp;1\\end{pmatrix}$일 때 사상 $f(x)=Ax$의 핵과 상의 차원을 구하세요.",
     "steps": [
      "셋째 행은 처음 두 행의 합이므로 $h(A)=2$이고 $\\dim\\operatorname{Im}f=2$입니다.",
      "핵: $x_1+x_2=0$, $x_2+x_3=0$. $x_3=t$로 놓으면 $x_2=-t$, $x_1=t$이므로 $\\operatorname{Ker}f=\\mathcal{L}\\bigl((1, -1, 1)\\bigr)$입니다.",
      "차원 정리로 검산: $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f=1+2=3$."
     ]
    }
   ]
  },
  "v1-vlastne": {
   "title": "고윳값과 고유벡터",
   "summary": "특성다항식, 2×2와 3×3 행렬의 고윳값과 고유벡터, 대각화와 행렬의 거듭제곱.",
   "theory": [
    "<p>$Av=\\lambda v$를 만족하는 영벡터가 아닌 벡터 $v$가 존재하면 수 $\\lambda$를 정사각행렬 $A$의 <strong>고윳값</strong>이라 하고, 이때 $v$를 $\\lambda$에 대응하는 <strong>고유벡터</strong>라 합니다. 기하학적으로 보면, 사상 $x\\mapsto Ax$는 벡터 $v$의 방향을 유지한 채 $\\lambda$배로 늘이기만 합니다($\\lambda\\lt 0$이면 방향도 뒤집힘).</p>",
    "<p>고윳값은 <strong>특성다항식</strong> $p(\\lambda)=\\det(A-\\lambda I)$의 근입니다. $2\\times 2$ 행렬에서는 $p(\\lambda)=\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A$입니다. 일반적으로 고윳값의 합은 $\\operatorname{tr}A$, 곱은 $\\det A$와 같으며, 삼각행렬의 고윳값은 대각성분입니다. $\\lambda$에 대응하는 고유벡터는 동차 연립방정식 $(A-\\lambda I)v=o$의 영이 아닌 해입니다.</p>",
    {
     "fig": "v1-matica",
     "caption": "행렬 $A$는 단위정사각형을 변이 $Ae_1$과 $Ae_2$(행렬의 열)인 평행사변형으로 옮기며, 그 넓이는 $|\\det A|$입니다. 주황색 직선은 고유 방향으로, 그 위의 벡터는 자기 자신의 상수배로 옮겨집니다."
    },
    "<p><strong>대각화:</strong> $D$가 대각행렬일 때 $A=PDP^{-1}$이면 $n$차 행렬 $A$는 대각화 가능합니다. 이는 $A$가 일차독립인 고유벡터 $n$개를 가질 때, 그리고 그때에만 성립합니다. 이 고유벡터들이 행렬 $P$의 열을 이루고, $D$의 대각선에는 대응하는 고윳값이 같은 순서로 놓입니다. $A$가 서로 다른 고윳값 $n$개를 가지면 충분하며, 모든 실대칭행렬은 대각화 가능합니다. 활용: $A^k=PD^kP^{-1}$.</p>"
   ],
   "examples": [
    {
     "task": "행렬 $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$의 고윳값과 고유벡터를 구하세요.",
     "steps": [
      "$\\operatorname{tr}A=7$, $\\det A=10$이므로 $\\lambda^2-7\\lambda+10=0$이고 $\\lambda_1=2$, $\\lambda_2=5$입니다.",
      "$\\lambda=5$: $A-5I=\\begin{pmatrix}-1&amp;1\\\\2&amp;-2\\end{pmatrix}$, 방정식 $-v_1+v_2=0$, 고유벡터 $(1, 1)$.",
      "$\\lambda=2$: $A-2I=\\begin{pmatrix}2&amp;1\\\\2&amp;1\\end{pmatrix}$, 방정식 $2v_1+v_2=0$, 고유벡터 $(1, -2)$."
     ]
    },
    {
     "task": "대각화를 이용하여 $A=\\begin{pmatrix}4&amp;1\\\\2&amp;3\\end{pmatrix}$일 때 $A^3$을 계산하세요.",
     "steps": [
      "앞의 예제에서 $P=\\begin{pmatrix}1&amp;1\\\\1&amp;-2\\end{pmatrix}$, $D=\\begin{pmatrix}5&amp;0\\\\0&amp;2\\end{pmatrix}$, $P^{-1}=\\frac13\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}$입니다.",
      "$A^3=PD^3P^{-1}=\\frac13\\begin{pmatrix}125&amp;8\\\\125&amp;-16\\end{pmatrix}\\begin{pmatrix}2&amp;1\\\\1&amp;-1\\end{pmatrix}=\\frac13\\begin{pmatrix}258&amp;117\\\\234&amp;141\\end{pmatrix}$.",
      "<strong>답:</strong> $A^3=\\begin{pmatrix}86&amp;39\\\\78&amp;47\\end{pmatrix}$."
     ]
    }
   ]
  },
  "v1-skalarny": {
   "title": "내적, 직교성과 정사영",
   "summary": "내적과 노름, 두 벡터가 이루는 각, 정사영과 그람–슈미트 과정.",
   "theory": [
    "<p>$\\mathbb{R}^n$의 <strong>표준 내적</strong>은 $\\langle u, v\\rangle=u_1v_1+\\dots+u_nv_n$입니다. 내적은 대칭이고, 각 인수에 대해 선형이며, $u\\neq o$이면 $\\langle u, u\\rangle\\gt 0$입니다. <strong>노름</strong>(길이)은 $\\|u\\|=\\sqrt{\\langle u, u\\rangle}$이고, 두 벡터 사이의 거리는 $\\|u-v\\|$입니다. <strong>코시–슈바르츠 부등식</strong> $|\\langle u, v\\rangle|\\le\\|u\\|\\,\\|v\\|$이 성립하므로, 영이 아닌 두 벡터가 이루는 각 $\\varphi$를 $\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$로 잘 정의할 수 있습니다.</p>",
    "<p>$\\langle u, v\\rangle=0$이면 두 벡터는 <strong>직교</strong>합니다($u\\perp v$). 영이 아니고 서로 직교하는 벡터들의 집합은 일차독립이며, 각 벡터의 노름이 1이면 <strong>정규직교</strong>입니다. 벡터 $v$의 방향 $u\\neq o$ 위로의 <strong>정사영</strong>은 $\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$입니다. 벡터 $v-\\operatorname{proj}_u v$는 $u$에 수직이며, 그 노름은 점 $v$와 직선 $\\mathcal{L}(u)$ 사이의 거리입니다.</p>",
    {
     "fig": "v1-projekcia",
     "caption": "방향이 $u=(\\cos\\theta, \\sin\\theta)$인 직선 위로의 벡터 $v$(파란색)의 정사영: 초록색 벡터가 $\\operatorname{proj}_u v$이고, 점선 선분은 직선에 수직입니다."
    },
    "<p><strong>그람–슈미트 과정</strong>은 일차독립인 벡터 $u_1, \\dots, u_k$로부터 같은 생성을 갖는 직교 벡터들을 만듭니다: $w_1=u_1$, $w_j=u_j-\\sum_{i\\lt j}\\frac{\\langle u_j, w_i\\rangle}{\\langle w_i, w_i\\rangle}\\,w_i$. 즉 각 벡터에서 이미 얻은 벡터들 위로의 정사영을 뺍니다. 노름으로 나누어 $e_j=w_j/\\|w_j\\|$로 하면 정규직교기저를 얻습니다.</p>"
   ],
   "examples": [
    {
     "task": "벡터 $v=(3, 1, 2)$의 방향 $u=(1, 1, 0)$ 위로의 정사영과, 점 $v$와 직선 $\\mathcal{L}(u)$ 사이의 거리를 구하세요.",
     "steps": [
      "$\\langle v, u\\rangle=3+1+0=4$, $\\langle u, u\\rangle=2$이므로 $\\operatorname{proj}_u v=2u=(2, 2, 0)$입니다.",
      "$v-\\operatorname{proj}_u v=(1, -1, 2)$; 수직 확인: $\\langle(1, -1, 2), (1, 1, 0)\\rangle=0$.",
      "<strong>거리:</strong> $\\|(1, -1, 2)\\|=\\sqrt{6}$."
     ]
    },
    {
     "task": "그람–슈미트 과정으로 벡터 $u_1=(1, 1, 1)$과 $u_2=(1, 2, 3)$을 직교화하세요.",
     "steps": [
      "$w_1=u_1=(1, 1, 1)$.",
      "$\\langle u_2, w_1\\rangle=6$, $\\langle w_1, w_1\\rangle=3$이므로 $w_2=u_2-2w_1=(-1, 0, 1)$; 실제로 $\\langle w_1, w_2\\rangle=0$입니다.",
      "정규직교기저: $e_1=\\frac{1}{\\sqrt3}(1, 1, 1)$, $e_2=\\frac{1}{\\sqrt2}(-1, 0, 1)$."
     ]
    }
   ]
  },
  "v1-kvadraticke": {
   "title": "이차형식과 정부호성",
   "summary": "이차형식의 행렬, 정부호성, 실베스터 판정법.",
   "theory": [
    "<p>$\\mathbb{R}^n$ 위의 <strong>이차형식</strong>은 함수 $Q(x)=x^{T}Ax=\\sum_{i,j}a_{ij}x_ix_j$이며, 여기서 대칭행렬 $A$를 <strong>이차형식의 행렬</strong>이라 합니다. $x_i^2$의 계수는 $a_{ii}$이고, $x_ix_j$($i\\neq j$)의 계수는 $2a_{ij}$입니다. 예를 들어 $Q=x_1^2+4x_1x_2-3x_2^2$의 행렬은 $\\begin{pmatrix}1&amp;2\\\\2&amp;-3\\end{pmatrix}$입니다.</p>",
    "<p>이차형식(및 그 행렬)은 모든 $x\\neq o$에 대해 $Q(x)\\gt 0$이면 <strong>양의 정부호</strong>, 모든 $x$에 대해 $Q(x)\\ge 0$이면 <strong>양의 준정부호</strong>이고, 마찬가지로 <strong>음의 (준)정부호</strong>가 정의되며, 양의 값과 음의 값을 모두 가지면 <strong>부정부호</strong>입니다. 고윳값으로 말하면: 모두 양수 $\\iff$ 양의 정부호, 모두 음이 아님 $\\iff$ 양의 준정부호, 부호가 섞여 있음 $\\iff$ 부정부호.</p>",
    "<p><strong>실베스터 판정법:</strong> $D_1=a_{11}$, $D_2=\\begin{vmatrix}a_{11}&amp;a_{12}\\\\a_{21}&amp;a_{22}\\end{vmatrix}$, …, $D_n=\\det A$를 선행 주소행렬식이라 합시다. 이차형식이 양의 정부호 $\\iff$ 모든 $k$에 대해 $D_k\\gt 0$; 음의 정부호 $\\iff$ 부호가 $D_1\\lt 0$, $D_2\\gt 0$, $D_3\\lt 0$, …으로 번갈아 나타남. $\\det A\\neq 0$인데 두 경우 모두 아니면 이차형식은 부정부호입니다. $\\det A=0$이면 선행 주소행렬식만으로는 준정부호성을 판정할 수 없으므로 고윳값이나 모든 주소행렬식이 필요합니다.</p>"
   ],
   "examples": [
    {
     "task": "이차형식 $Q=2x_1^2+x_2^2+3x_3^2+2x_1x_2-2x_2x_3$의 정부호성을 판정하세요.",
     "steps": [
      "이차형식의 행렬: $A=\\begin{pmatrix}2&amp;1&amp;0\\\\1&amp;1&amp;-1\\\\0&amp;-1&amp;3\\end{pmatrix}$.",
      "$D_1=2$, $D_2=2\\cdot 1-1\\cdot 1=1$, $D_3=\\det A=2\\cdot(3-1)-1\\cdot(3-0)+0=1$.",
      "선행 주소행렬식이 모두 양수이므로 이차형식은 <strong>양의 정부호</strong>입니다."
     ]
    },
    {
     "task": "$a$가 어떤 값일 때 이차형식 $Q=x^2+4xy+ay^2$이 양의 정부호인가요?",
     "steps": [
      "$A=\\begin{pmatrix}1&amp;2\\\\2&amp;a\\end{pmatrix}$, $D_1=1\\gt 0$, $D_2=a-4$.",
      "<strong>답:</strong> 이차형식은 $a\\gt 4$일 때, 그리고 그때에만 양의 정부호입니다."
     ]
    }
   ]
  }
 },
 "strings": {
  "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: $i$-ty riadok inverznej matice tvoria algebraické doplnky $i$-teho <em>stĺpca</em> matice $A$.": "$(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$: 역행렬의 $i$행은 행렬 $A$의 $i$번째 <em>열</em>의 여인수로 이루어져요.",
  "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. Teda $c={@5}$.": "$A={@0}$, $D_1={@1}\\gt 0$, $D_2={@2}a-{@3}\\gt 0\\iff a\\gt {@4}$. 따라서 $c={@5}$예요.",
  "$A^{T}={@0}$. Porovnaním s $A$ vidíme, že {@1}.": "$A^{T}={@0}$. $A$와 비교하면 {@1}.",
  "$B^{T}={@0}$, takže ${@1}={@2}={@3}$.": "$B^{T}={@0}$이므로 ${@1}={@2}={@3}$이에요.",
  "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>Teda $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$.": "$D={@0}={@1}$.<br>$D_{{@2}}={@3}={@4}$.<br>따라서 $x_{{@5}}=\\frac{D_{{@6}}}{D}=\\frac{{@7}}{{@8}}={@9}$이에요.",
  "$W$ je množina riešení homogénnej sústavy, preto $\\dim W=n-h(A)$. Hodnosť matice sústavy:<br>{@0}<br>$h(A)={@1}$, teda $\\dim W={@2}-{@3}={@4}$.": "$W$는 동차 연립방정식의 해집합이므로 $\\dim W=n-h(A)$예요. 계수행렬의 계수:<br>{@0}<br>$h(A)={@1}$이므로 $\\dim W={@2}-{@3}={@4}$이에요.",
  "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; normy týchto vektorov vychádzajú celočíselne.": "$\\cos\\varphi=\\frac{\\langle u, v\\rangle}{\\|u\\|\\,\\|v\\|}$; 이 벡터들의 노름은 정수로 나와요.",
  "$\\det A=0$, jedno vlastné číslo je $0$ a druhé sa rovná $\\operatorname{tr}A={@0}$; obe sú teda {@1} a jedno je nulové": "$\\det A=0$이므로 고윳값 하나는 $0$이고 다른 하나는 $\\operatorname{tr}A={@0}$와 같아요. 따라서 두 고윳값 모두 {@1}이고 하나는 0이에요",
  "$\\det A={@0}$, teda $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$.": "$\\det A={@0}$이므로 $A^{-1}=\\frac{1}{{@1}}{@2}={@3}$이에요.",
  "$\\det A={@0}$. Podľa vzorca $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$ potrebujeme algebraické doplnky {@3}. stĺpca: ${@4}$.": "$\\det A={@0}$. 공식 $(A^{-1})_{{@1}j}=\\frac{A_{j{@2}}}{\\det A}$에 따라 {@3}열의 여인수가 필요해요: ${@4}$.",
  "$\\det A={@0}$. Ďalej $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$ a ${@5}$. Teda $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$.": "$\\det A={@0}$. 또한 $(A^{-1})_{{@1}{@2}}=\\frac{A_{{@3}{@4}}}{\\det A}$이고 ${@5}$. 따라서 $(A^{-1})_{{@6}{@7}}=\\frac{{@8}}{{@9}}={@10}$이에요.",
  "$\\det A\\neq 0$ a nenastal ani jeden z predchádzajúcich prípadov": "$\\det A\\neq 0$이고 앞의 어느 경우에도 해당하지 않아요",
  "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$ a transponovaním sa determinant nemení. Súčin teda obsahuje $\\det A$ dvakrát.": "$\\det(A^{T}A)=\\det A^{T}\\cdot\\det A$이고 전치해도 행렬식은 변하지 않아요. 따라서 곱에는 $\\det A$가 두 번 들어 있어요.",
  "$\\dim\\operatorname{Im}f=h(A)$ a $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$ je počet stĺpcov matice (dimenzia vzoru).": "$\\dim\\operatorname{Im}f=h(A)$이고 $\\dim\\operatorname{Ker}f+\\dim\\operatorname{Im}f$는 행렬의 열의 개수(정의역의 차원)예요.",
  "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$, teda $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$.": "$\\langle u, v\\rangle={@0}$, $\\|u\\|={@1}$, $\\|v\\|={@2}$이므로 $\\cos\\varphi=\\frac{{@3}}{{@4}\\cdot {@5}}={@6}$이에요.",
  "$\\langle u, v\\rangle={@0}={@1}$. Podmienka $\\langle u, v\\rangle=0$ dáva $t={@2}$.": "$\\langle u, v\\rangle={@0}={@1}$. 조건 $\\langle u, v\\rangle=0$에서 $t={@2}$예요.",
  "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.": "$\\langle v, u\\rangle={@0}={@1}$, $\\langle u, u\\rangle={@2}$.",
  "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.": "$\\operatorname{proj}_u v=\\frac{\\langle v, u\\rangle}{\\langle u, u\\rangle}\\,u$.",
  "$\\operatorname{tr}A={@0}$, $\\det A={@1}$, charakteristická rovnica je ${@2}{@3}=0$.": "$\\operatorname{tr}A={@0}$, $\\det A={@1}$이고 특성방정식은 ${@2}{@3}=0$이에요.",
  "$h(A)=h(A\\mid b)=3=n$, riešenie je práve jedno": "$h(A)=h(A\\mid b)=3=n$이므로 해가 꼭 하나 있어요",
  "$h(A)=h(A\\mid b)={@0}\\lt 3$, riešení je nekonečne veľa ({@1})": "$h(A)=h(A\\mid b)={@0}\\lt 3$이므로 해가 무수히 많아요({@1})",
  "$h(A)={@0}\\neq h(A\\mid b)={@1}$, sústava nemá riešenie": "$h(A)={@0}\\neq h(A\\mid b)={@1}$이므로 연립방정식의 해가 없어요",
  "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.": "$u-v={@0}$, $\\|u-v\\|=\\sqrt{{@1}}=\\sqrt{{@2}}={@3}$.",
  "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, koeficient $\\frac{{@2}}{{@3}}={@4}$.": "$w_1=u_1$. $\\langle u_2, w_1\\rangle={@0}$, $\\langle w_1, w_1\\rangle={@1}$, 계수 $\\frac{{@2}}{{@3}}={@4}$.",
  "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; výsledok musí byť kolmý na $w_1$.": "$w_2=u_2-\\frac{\\langle u_2, w_1\\rangle}{\\langle w_1, w_1\\rangle}\\,w_1$; 결과는 $w_1$에 수직이어야 해요.",
  "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. Skúška: $\\langle w_1, w_2\\rangle={@6}$.": "$w_2=u_2{@0}{@1}w_1={@2}{@3}{@4}={@5}$. 검산: $\\langle w_1, w_2\\rangle={@6}$.",
  "$x_{{@0}}=\\frac{D_{{@1}}}{D}$, kde v $D_{{@2}}$ nahradíš {@3}. stĺpec matice sústavy stĺpcom pravých strán.": "$x_{{@0}}=\\frac{D_{{@1}}}{D}$이고, $D_{{@2}}$에서는 계수행렬의 {@3}열을 우변의 열로 바꿔요.",
  "(mení orientáciu)": "(방향이 바뀜)",
  "(naozaj ${@0}={@1}{@2} {@3} {@4}{@5}$)": "(실제로 ${@0}={@1}{@2} {@3} {@4}{@5}$)",
  "+ súčiny na zelených diagonálach": "+ 초록색 대각선 위의 곱",
  ", teda ${@0}{@1} {@2} = {@3}$": ", 따라서 ${@0}{@1} {@2} = {@3}$",
  "<strong>Je</strong> podpriestor: {@0}.": "부분공간<strong>이에요</strong>: {@0}.",
  "<strong>Nie je</strong> podpriestor: {@0}.": "부분공간이 <strong>아니에요</strong>: {@0}.",
  "Aká je definitnosť formy?": "이 형식의 정부호성은 무엇일까요?",
  "Aká je dimenzia $W$?": "$W$의 차원은 얼마일까요?",
  "Aká je dimenzia jadra $\\operatorname{Ker}f$?": "핵 $\\operatorname{Ker}f$의 차원은 얼마일까요?",
  "Aká je hodnosť matice $A$?": "행렬 $A$의 계수는 얼마일까요?",
  "Aká je hodnosť matice sústavy $h(A)$?": "계수행렬의 계수 $h(A)$는 얼마일까요?",
  "Aká je hodnosť matice sústavy?": "계수행렬의 계수는 얼마일까요?",
  "Aká je hodnosť rozšírenej matice $h(A\\mid b)$?": "첨가행렬의 계수 $h(A\\mid b)$는 얼마일까요?",
  "Aké je znamienko $(-1)^{{@0}+{@1}}$? Zadaj $1$ alebo $-1$.": "부호 $(-1)^{{@0}+{@1}}$은 무엇일까요? $1$ 또는 $-1$을 입력하세요.",
  "Aký je absolútny člen $D_0$?": "상수항 $D_0$은 얼마일까요?",
  "Aký je absolútny člen $b$?": "상수항 $b$는 얼마일까요?",
  "Aký je determinant tejto podmatice?": "이 부분행렬의 행렬식은 얼마일까요?",
  "Algebraický doplnok treba ešte vydeliť determinantom matice $A$.": "여인수를 행렬 $A$의 행렬식으로 나누어야 해요.",
  "Antisymetrická matica má na diagonále nuly a spĺňa $a_{ij}=-a_{ji}$. Over to pre všetky dvojice.": "반대칭행렬은 대각선이 모두 0이고 $a_{ij}=-a_{ji}$를 만족해요. 모든 쌍에 대해 확인하세요.",
  "Celú inverznú maticu počítať netreba: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$ (indexy algebraického doplnku sú vymenené).": "역행렬 전체를 계산할 필요는 없어요: $(A^{-1})_{ij}=\\frac{A_{ji}}{\\det A}$(여인수의 첨자가 바뀌어 있어요).",
  "Cramerovým pravidlom vypočítaj neznámu $x_{{@0}}$ zo sústavy ${@1}$. Neceločíselný výsledok zadaj ako zlomok.": "크라메르 공식으로 연립방정식 ${@1}$에서 미지수 $x_{{@0}}$을 구하세요. 결과가 정수가 아니면 분수로 입력하세요.",
  "Cramerovým pravidlom: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,": "크라메르 공식으로: $D={@0}={@1}$, $D_\\alpha={@2}={@3}$, $D_\\beta={@4}={@5}$,",
  "Dané sú vektory $u={@0}$ a $v={@1}$ v $\\mathbb{R}^{{@2}}$. Vypočítaj vektor ${@3}$. Zložky oddeľ bodkočiarkou.": "$\\mathbb{R}^{{@2}}$의 벡터 $u={@0}$와 $v={@1}$가 주어져 있어요. 벡터 ${@3}$를 계산하세요. 성분은 세미콜론으로 구분하세요.",
  "Determinant je nenulový, vektory sú <strong>lineárne nezávislé</strong>.": "행렬식이 0이 아니므로 벡터들은 <strong>일차독립</strong>이에요.",
  "Determinant je nulový, vektory sú <strong>lineárne závislé</strong>{@0}.": "행렬식이 0이므로 벡터들은 <strong>일차종속</strong>이에요{@0}.",
  "Determinant je síce nulový, ale pozri sa na znamienko nenulového vlastného čísla: pri matici $2\\times 2$ sa rovná stope.": "행렬식은 0이지만 0이 아닌 고윳값의 부호를 보세요: $2\\times 2$ 행렬에서는 그 값이 대각합과 같아요.",
  "Determinant matice s riadkami $u, v, w$ je lineárna funkcia parametra $t$ – rozviň ho podľa riadka s parametrom a polož rovný nule.": "행이 $u, v, w$인 행렬의 행렬식은 매개변수 $t$의 일차함수예요. 매개변수가 있는 행으로 전개하고 0과 같다고 놓으세요.",
  "Diagonálne prvky matice $D^{{@0}}$?": "행렬 $D^{{@0}}$의 대각성분은?",
  "Diagonálny prvok $(A^{T}A)_{jj}$ je súčet druhých mocnín prvkov $j$-tého stĺpca matice $A$, preto je $\\operatorname{tr}(A^{T}A)$ súčtom druhých mocnín všetkých prvkov: ${@0}={@1}={@2}$.": "대각성분 $(A^{T}A)_{jj}$는 행렬 $A$의 $j$번째 열 성분의 제곱의 합이므로, $\\operatorname{tr}(A^{T}A)$는 모든 성분의 제곱의 합이에요: ${@0}={@1}={@2}$.",
  "Dimenzia lineárneho obalu je hodnosť matice, ktorej riadky sú dané vektory:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $\\dim W={@3}$.": "생성의 차원은 주어진 벡터들을 행으로 하는 행렬의 계수예요:<br>{@0}<br>사다리꼴에는 {@2}이 {@1}개 있으므로 $\\dim W={@3}$이에요.",
  "Diskriminant ${@0}{@1}$, teda $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, t. j. $\\lambda_1={@4}$ a $\\lambda_2={@5}$.": "판별식 ${@0}{@1}$이므로 $\\lambda_{1,2}=\\frac{{@2}\\pm{@3}}{2}$, 즉 $\\lambda_1={@4}$, $\\lambda_2={@5}$예요.",
  "Do matice formy patrí mimo diagonály polovica koeficientu pri $xy$, teda ${@0}$, nie ${@1}$.": "형식의 행렬에서 대각선 밖에는 $xy$의 계수의 절반, 즉 ${@1}$이 아니라 ${@0}$이 들어가요.",
  "Dosaď $x_3$ do predposledného riadku a vypočítaj $x_2$.": "$x_3$을 끝에서 두 번째 행에 대입하고 $x_2$를 계산하세요.",
  "Forma $Q={@0}$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "형식 $Q={@0}$는 $a\\gt c$일 때만 양의 정부호예요. 수 $c$를 구하세요(필요하면 분수로).",
  "Forma $Q={@0}+ay^2$ je kladne definitná práve vtedy, keď $a\\gt c$. Urči číslo $c$ (prípadne ako zlomok).": "형식 $Q={@0}+ay^2$는 $a\\gt c$일 때만 양의 정부호예요. 수 $c$를 구하세요(필요하면 분수로).",
  "Gaussovou elimináciou prevedieme maticu do stupňovitého tvaru:<br>{@0}<br>Stupňovitý tvar má {@1} {@2}, teda $h(A)={@3}$.": "가우스 소거법으로 행렬을 사다리꼴로 바꿔요:<br>{@0}<br>사다리꼴에는 {@2}이 {@1}개 있으므로 $h(A)={@3}$이에요.",
  "Gaussovou elimináciou vyrieš sústavu ${@0}$. Riešenie zadaj v tvare „x₁; x₂; x₃“.": "가우스 소거법으로 연립방정식 ${@0}$을 푸세요. 해는 „x₁; x₂; x₃“ 꼴로 입력하세요.",
  "Gramovým–Schmidtovým procesom zortogonalizuj vektory $u_1={@0}$ a $u_2={@1}$ (v tomto poradí, bez normovania). Zadaj vektor $w_2$.": "그람–슈미트 과정으로 벡터 $u_1={@0}$와 $u_2={@1}$를 (이 순서로, 정규화 없이) 직교화하세요. 벡터 $w_2$를 입력하세요.",
  "Hľadaj protipríklad: patrí nulový vektor do $W$? Je súčet dvoch prvkov $W$ opäť v $W$? A ich násobok?": "반례를 찾아보세요: 영벡터가 $W$에 속하나요? $W$의 두 원소의 합이 다시 $W$에 속하나요? 스칼라배는요?",
  "Indefinitná forma nadobúda kladné aj záporné hodnoty. Over znamienka rohových minorov podľa Sylvestrovho kritéria.": "부정부호 형식은 양의 값과 음의 값을 모두 가져요. 실베스터 판정법에 따라 선행 주소행렬식의 부호를 확인하세요.",
  "Jadro je množina riešení homogénnej sústavy $Ax=o$. Uprav maticu a zvoľ voľnú neznámu ako parameter.": "핵은 동차 연립방정식 $Ax=o$의 해집합이에요. 행렬을 변형하고 자유 미지수를 매개변수로 잡으세요.",
  "Jadro je množina riešení sústavy $Ax=o$:<br>{@0}<br>$h(A)=2$, teda $\\dim\\operatorname{Ker}f=3-2=1$. Riešenie je kolmé na oba nenulové riadky, preto je násobkom ${@1}\\times{@2}={@3}${@4}. Teda $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$.": "핵은 연립방정식 $Ax=o$의 해집합이에요:<br>{@0}<br>$h(A)=2$이므로 $\\dim\\operatorname{Ker}f=3-2=1$이에요. 해는 0이 아닌 두 행에 모두 수직이므로 ${@1}\\times{@2}={@3}${@4}의 배수예요. 따라서 $\\operatorname{Ker}f=\\mathcal{L}\\bigl({@5}\\bigr)$이에요.",
  "Je množina $W={@0}$ podpriestorom vektorového priestoru $\\mathbb{R}^3$?": "집합 $W={@0}$는 벡터공간 $\\mathbb{R}^3$의 부분공간일까요?",
  "Ker": "Ker",
  "Kladne definitná je forma len vtedy, keď sú všetky hlavné rohové minory kladné.": "모든 선행 주소행렬식이 양수일 때만 형식이 양의 정부호예요.",
  "Koeficient pri $x_ix_j$ ($i\\neq j$) sa rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, teda $a_{ij}$ je polovica koeficientu. Matica formy: $A={@0}$.": "$x_ix_j$ ($i\\neq j$)의 계수는 $a_{ij}$와 $a_{ji}$에 똑같이 나누어지므로 $a_{ij}$는 계수의 절반이에요. 형식의 행렬: $A={@0}$.",
  "Koeficient pri $x_ix_j$ sa v symetrickej matici rozdelí rovnakým dielom medzi $a_{ij}$ a $a_{ji}$, každý dostane polovicu.": "대칭행렬에서 $x_ix_j$의 계수는 $a_{ij}$와 $a_{ji}$에 똑같이 나누어져서 각각 절반씩 가져요.",
  "Koľko riešení má sústava ${@0}$?": "연립방정식 ${@0}$의 해는 몇 개일까요?",
  "Koľko riešení má sústava?": "연립방정식의 해는 몇 개일까요?",
  "Kvadratická forma je $Q={@0}$. Urči prvky $a_{12}, a_{13}, a_{23}$ jej symetrickej matice (oddelené bodkočiarkou) (zlomky v tvare $p/q$).": "이차형식이 $Q={@0}$예요. 대칭행렬의 성분 $a_{12}, a_{13}, a_{23}$을 구하세요(세미콜론으로 구분, 분수는 $p/q$ 꼴).",
  "Kvadratická forma je $Q={@0}$. Urči prvok $a_{12}$ jej symetrickej matice (zlomky v tvare $p/q$).": "이차형식이 $Q={@0}$예요. 대칭행렬의 성분 $a_{12}$를 구하세요(분수는 $p/q$ 꼴).",
  "Kvadratický činiteľ má $\\operatorname{tr}={@0}$, $\\det={@1}$ a korene ${@2}$ a ${@3}$. Vlastné čísla sú ${@4}$.": "이차 인수는 $\\operatorname{tr}={@0}$, $\\det={@1}$이고 근은 ${@2}$와 ${@3}$이에요. 고윳값은 ${@4}$예요.",
  "Lineárna kombinácia dvoch vektorov": "두 벡터의 일차결합",
  "Lineárne zobrazenie $f:\\mathbb{R}^2\\to\\mathbb{R}^2$ spĺňa $f{@0}={@1}$ a $f{@2}={@3}$. Nájdi maticu $A$ zobrazenia $f$ (v štandardnej báze). Prvky zadaj po riadkoch.": "선형사상 $f:\\mathbb{R}^2\\to\\mathbb{R}^2$가 $f{@0}={@1}$과 $f{@2}={@3}$을 만족해요. (표준기저에 대한) 사상 $f$의 행렬 $A$를 구하세요. 성분은 행 순서대로 입력하세요.",
  "Matica $-A^{3}$ je $(-1)\\cdot A^{3}$, a $\\det(-M)=(-1)^{{@0}}\\det M$.": "행렬 $-A^{3}$은 $(-1)\\cdot A^{3}$이고 $\\det(-M)=(-1)^{{@0}}\\det M$이에요.",
  "Matica $A={@0}$ má vlastné čísla ${@1}$ a ${@2}$. Pomocou diagonalizácie vypočítaj $A^{{@3}}$. Prvky zadaj po riadkoch.": "행렬 $A={@0}$의 고윳값은 ${@1}$과 ${@2}$예요. 대각화를 이용해 $A^{{@3}}$을 계산하세요. 성분은 행 순서대로 입력하세요.",
  "Matica $B$ vznikne z $A$ výmenou prvých dvoch riadkov a vynásobením posledného riadka číslom ${@0}$.": "행렬 $B$는 $A$에서 처음 두 행을 바꾸고 마지막 행에 ${@0}$을 곱해서 얻어요.",
  "Matica formy $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$ nezávisia od $a$. Rozvojom podľa 3. riadka (alebo Sarrusovým pravidlom) $D_3=\\det A={@3}$.": "형식의 행렬 $A={@0}$. $D_1={@1}\\gt 0$, $D_2={@2}\\gt 0$은 $a$에 의존하지 않아요. 3행에 대한 전개(또는 사뤼스 법칙)로 $D_3=\\det A={@3}$이에요.",
  "Matica formy: $A={@0}$. Hlavné rohové minory: ${@1}$. Keďže {@2}, forma je <strong>{@3}</strong>.": "형식의 행렬: $A={@0}$. 선행 주소행렬식: ${@1}$. {@2}. 따라서 이 형식은 <strong>{@3}</strong>예요.",
  "Matica nie je trojuholníková, vlastné čísla preto nie sú jej diagonálne prvky. Rozviň $\\det(A-\\lambda I)$ podľa 3. riadka.": "행렬이 삼각행렬이 아니므로 고윳값은 대각성분이 아니에요. $\\det(A-\\lambda I)$를 3행에 대해 전개하세요.",
  "Matica v stupňovitom tvare": "사다리꼴 행렬",
  "Matice: $A_f={@0}$, $A_g={@1}$. Zloženie má maticu $A_gA_f={@2}$, teda $(g\\circ f)(v)={@3}{@4}={@5}$.": "행렬: $A_f={@0}$, $A_g={@1}$. 합성의 행렬은 $A_gA_f={@2}$이므로 $(g\\circ f)(v)={@3}{@4}={@5}$예요.",
  "Minor $D_3=\\det A$ má tvar $D_2\\,a+K$. Aké je číslo $K$?": "소행렬식 $D_3=\\det A$는 $D_2\\,a+K$ 꼴이에요. 수 $K$는 얼마일까요?",
  "Minor treba ešte vynásobiť samotným prvkom $a_{{@0}{@1}}={@2}$, podľa ktorého rozvíjaš.": "소행렬식에 전개의 기준이 되는 성분 $a_{{@0}{@1}}={@2}$ 자체를 곱해야 해요.",
  "Minor: $M_{{@0}{@1}}={@2}={@3}$. Teda $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$.": "소행렬식: $M_{{@0}{@1}}={@2}={@3}$. 따라서 $\\det A={@4}\\cdot {@5}\\cdot {@6}={@7}$이에요.",
  "Mocnina matice sa nepočíta po prvkoch, to platí len pre diagonálnu maticu $D$. Použi $A^k=PD^kP^{-1}$.": "행렬의 거듭제곱은 성분별로 계산하지 않아요. 그건 대각행렬 $D$에서만 성립해요. $A^k=PD^kP^{-1}$을 이용하세요.",
  "Najprv transponuj $B$ (riadky ↔ stĺpce), potom počítaj po prvkoch.": "먼저 $B$를 전치하고(행 ↔ 열) 그다음 성분별로 계산하세요.",
  "Najprv vynásob každý vektor jeho koeficientom (každú zložku), potom sčítaj zodpovedajúce zložky.": "먼저 각 벡터에 그 계수를 곱하고(모든 성분에) 그다음 대응하는 성분끼리 더하세요.",
  "Napíš $v=c_1b_1+c_2b_2+c_3b_3$ po zložkách: dostaneš sústavu troch rovníc, v ktorej sú vektory bázy stĺpcami matice.": "$v=c_1b_1+c_2b_2+c_3b_3$을 성분별로 쓰세요: 기저 벡터가 행렬의 열인 세 방정식의 연립방정식이 나와요.",
  "Napíš maticu $A-{@0}I$ (prvky po riadkoch).": "행렬 $A-{@0}I$를 쓰세요(성분은 행 순서대로).",
  "Napíš maticu $B^{T}$ (prvky po riadkoch).": "행렬 $B^{T}$를 쓰세요(성분은 행 순서대로).",
  "Nekonečne veľa riešení je len pri $h(A)=h(A\\mid b)\\lt 3$. Pozri sa aj na pravú stranu riadku, ktorý je v matici sústavy nulový.": "해가 무수히 많은 것은 $h(A)=h(A\\mid b)\\lt 3$일 때뿐이에요. 계수행렬에서 0이 된 행의 우변도 확인하세요.",
  "Nájdi jedno netriviálne riešenie homogénnej sústavy ${@0}$. (Uznáme ľubovoľný nenulový násobok.)": "동차 연립방정식 ${@0}$의 자명하지 않은 해를 하나 구하세요. (0이 아닌 어떤 배수도 정답이에요.)",
  "Nájdi maticu $X$, pre ktorú platí ${@0}X-A=B^{T}$, ak $A={@1}$ a $B={@2}$. Prvky zadaj po riadkoch.": "$A={@1}$, $B={@2}$일 때 ${@0}X-A=B^{T}$를 만족하는 행렬 $X$를 구하세요. 성분은 행 순서대로 입력하세요.",
  "Nájdi nenulové riešenie sústavy $(A-\\lambda I)v=o$ (ľubovoľný nenulový násobok je správne).": "연립방정식 $(A-\\lambda I)v=o$의 0이 아닌 해를 구하세요(0이 아닌 어떤 배수도 정답이에요).",
  "Nájdi súradnice vektora $v={@0}$ v báze $b_1={@1}$, $b_2={@2}$, $b_3={@3}$ priestoru $\\mathbb{R}^3$. Zadaj ich v tvare „c₁; c₂; c₃“.": "$\\mathbb{R}^3$의 기저 $b_1={@1}$, $b_2={@2}$, $b_3={@3}$에 대한 벡터 $v={@0}$의 좌표를 구하세요. „c₁; c₂; c₃“ 꼴로 입력하세요.",
  "Nájdi vlastné vektory, zostav $P$ a $D$ a použi $A^k=PD^kP^{-1}$; mocnina diagonálnej matice sa počíta po prvkoch na diagonále.": "고유벡터를 구해 $P$와 $D$를 만들고 $A^k=PD^kP^{-1}$을 이용하세요. 대각행렬의 거듭제곱은 대각성분별로 계산해요.",
  "Nájdi vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou.": "행렬 $A={@0}$의 고윳값을 구하세요. 세미콜론으로 구분해서 입력하세요.",
  "Nájdi všetky vlastné čísla matice $A={@0}$. Zadaj ich oddelené bodkočiarkou (viacnásobné vlastné číslo zadaj viackrát).": "행렬 $A={@0}$의 고윳값을 모두 구하세요. 세미콜론으로 구분해서 입력하세요(중복 고윳값은 여러 번 입력하세요).",
  "Nájdi {@0}. riadok inverznej matice k matici $A={@1}$. Zadaj tri čísla oddelené bodkočiarkou.": "행렬 $A={@1}$의 역행렬의 {@0}행을 구하세요. 세미콜론으로 구분한 세 수를 입력하세요.",
  "Nájdi čísla $\\alpha, \\beta$ také, že ${@0}=\\alpha{@1}+\\beta{@2}$. Zadaj ich v tvare „α; β“.": "${@0}=\\alpha{@1}+\\beta{@2}$를 만족하는 수 $\\alpha, \\beta$를 구하세요. „α; β“ 꼴로 입력하세요.",
  "Násobenie matíc nie je komutatívne. Z rovnice ${@0}$ treba násobiť maticou $A^{-1}$ {@1}.": "행렬의 곱셈은 교환법칙이 성립하지 않아요. 방정식 ${@0}$에서는 $A^{-1}$을 {@1} 곱해야 해요.",
  "Obe podmienky naraz: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. Maticu $(u\\mid v)$ invertuj a vynásob sprava.": "두 조건을 한꺼번에: $A\\,(u\\mid v)=(f(u)\\mid f(v))$. 행렬 $(u\\mid v)$의 역행렬을 구해 오른쪽에서 곱하세요.",
  "Obraz jednotkového štvorca pri zobrazení danom maticou 2×2": "2×2 행렬로 주어진 사상에 의한 단위정사각형의 상",
  "Od počtu neznámych sa neodčíta počet rovníc, ale hodnosť matice sústavy: niektoré rovnice môžu byť závislé.": "미지수의 개수에서 방정식의 개수가 아니라 계수행렬의 계수를 빼요: 어떤 방정식은 종속일 수 있어요.",
  "Odčítaj vektory po zložkách a použi $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$.": "벡터를 성분별로 빼고 $\\|x\\|=\\sqrt{x_1^2+x_2^2+x_3^2}$을 이용하세요.",
  "Ortogonálna projekcia vektora na priamku": "직선 위로의 벡터의 정사영",
  "Over všetky tri podmienky: nulový vektor, uzavretosť na sčítanie a na násobenie číslom. Ak platia všetky, ide o podpriestor.": "세 조건을 모두 확인하세요: 영벡터, 덧셈에 대해 닫힘, 스칼라배에 대해 닫힘. 모두 성립하면 부분공간이에요.",
  "Over, či $W$ obsahuje nulový vektor a či je uzavretá na sčítanie a násobenie reálnym číslom. Na vyvrátenie stačí jeden protipríklad.": "$W$가 영벡터를 포함하는지, 덧셈과 실수배에 대해 닫혀 있는지 확인하세요. 반증에는 반례 하나면 충분해요.",
  "Po úprave zostanú dve nezávislé rovnice. Zvoľ jednu neznámu ako parameter (alebo použi vektorový súčin dvoch riadkov).": "변형 후 독립인 방정식 두 개가 남아요. 미지수 하나를 매개변수로 잡으세요(또는 두 행의 외적을 이용하세요).",
  "Podmienka $D = 0$ dáva ${@0}{@1} = {@2}$, teda ${@3} = {@4}$.": "조건 $D = 0$에서 ${@0}{@1} = {@2}$이므로 ${@3} = {@4}$예요.",
  "Podmienka $D_3\\gt 0$ dáva $a\\gt {@0}$, teda $c={@1}$.": "조건 $D_3\\gt 0$에서 $a\\gt {@0}$이므로 $c={@1}$이에요.",
  "Porovnaj $A^{T}$ s $A$ aj s $-A$ prvok po prvku. Možno platí jedna z rovností.": "$A^{T}$를 $A$, $-A$와 성분별로 비교하세요. 둘 중 하나의 등식이 성립할 수도 있어요.",
  "Porovnaním zložiek dostaneme sústavu ${@0}={@1}$, ${@2}={@3}$.": "성분을 비교하면 연립방정식 ${@0}={@1}$, ${@2}={@3}$을 얻어요.",
  "Použi $\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$ a $\\det A^{-1}=1/\\det A$.": "$\\det(cA)=c^{n}\\det A$, $\\det(AB)=\\det A\\det B$, $\\det A^{T}=\\det A$, $\\det A^{-1}=1/\\det A$를 이용하세요.",
  "Použi Sarrusovo pravidlo: tri súčiny „doprava dole“ so znamienkom plus, tri „doľava dole“ so znamienkom mínus.": "사뤼스 법칙을 이용하세요: „오른쪽 아래로“ 가는 세 곱은 더하고, „왼쪽 아래로“ 가는 세 곱은 빼요.",
  "Použil si algebraické doplnky {@0}. riadka. Adjungovaná matica je transponovaná: {@1}. riadok inverznej matice tvoria doplnky {@2}. stĺpca.": "{@0}행의 여인수를 사용했어요. 수반행렬은 전치되어 있어요: 역행렬의 {@1}행은 {@2}열의 여인수로 이루어져요.",
  "Použil si doplnok $A_{{@0}{@1}}$. Pre prvok $(A^{-1})_{{@2}{@3}}$ treba doplnok s vymenenými indexmi, $A_{{@4}{@5}}$.": "여인수 $A_{{@0}{@1}}$을 사용했어요. 성분 $(A^{-1})_{{@2}{@3}}$에는 첨자가 바뀐 여인수 $A_{{@4}{@5}}$가 필요해요.",
  "Počítame po zložkách: ${@0}=({@1})={@2}$.": "성분별로 계산해요: ${@0}=({@1})={@2}$.",
  "Pre $A={@0}$ a $B={@1}$ vypočítaj maticu ${@2}$. Prvky zadaj po riadkoch (4 čísla oddelené bodkočiarkou).": "$A={@0}$, $B={@1}$일 때 행렬 ${@2}$를 계산하세요. 성분은 행 순서대로 입력하세요(세미콜론으로 구분한 수 4개).",
  "Pre ktoré $a$ je $D=0$?": "어떤 $a$에서 $D=0$일까요?",
  "Pre ktoré $t$ je $D=0$?": "어떤 $t$에서 $D=0$일까요?",
  "Pre ktoré $t$ je skalárny súčin nulový? Neceločíselný výsledok zadaj ako zlomok.": "어떤 $t$에서 내적이 0일까요? 결과가 정수가 아니면 분수로 입력하세요.",
  "Pre ktoré $t$ sú vektory $u={@0}$ a $v={@1}$ ortogonálne? Neceločíselný výsledok zadaj ako zlomok.": "어떤 $t$에서 벡터 $u={@0}$와 $v={@1}$가 직교할까요? 결과가 정수가 아니면 분수로 입력하세요.",
  "Pre ktorú hodnotu parametra $a$ má matica $A={@0}$ hodnosť 2?": "매개변수 $a$가 어떤 값일 때 행렬 $A={@0}$의 계수가 2일까요?",
  "Pre ktorú hodnotu parametra $t$ sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé?": "매개변수 $t$가 어떤 값일 때 벡터 $u={@0}$, $v={@1}$, $w={@2}$가 일차종속일까요?",
  "Pre maticu $2\\times 2$ rieš $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$.": "$2\\times 2$ 행렬에서는 $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$을 푸세요.",
  "Pre maticu $A={@0}$ vypočítaj prvok $(A^{-1})_{{@1}{@2}}$ inverznej matice. Neceločíselný výsledok zadaj ako zlomok.": "행렬 $A={@0}$의 역행렬의 성분 $(A^{-1})_{{@1}{@2}}$를 계산하세요. 결과가 정수가 아니면 분수로 입력하세요.",
  "Pre maticu $A={@0}$ vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "행렬 $A={@0}$에 대해 대각합 $\\operatorname{tr}(A^{T}A)$를 계산하세요.",
  "Prepočítaj determinant Sarrusovým pravidlom: tri súčiny sa sčítajú a tri odčítajú. Nezávislé sú vektory len pri nenulovom determinante.": "사뤼스 법칙으로 행렬식을 다시 계산하세요: 세 곱은 더하고 세 곱은 빼요. 벡터들은 행렬식이 0이 아닐 때만 독립이에요.",
  "Pri matici rádu 3 nestačia dve diagonály ako pri $2\\times 2$. Sarrusovo pravidlo má šesť súčinov: tri kladné a tri záporné.": "3차 행렬에서는 $2\\times 2$처럼 대각선 두 개로는 부족해요. 사뤼스 법칙에는 여섯 개의 곱이 있어요: 양수 셋, 음수 셋.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa determinant násobí číslom $c^{n}$, nie len $c$.": "${@0}$차 행렬에 수 $c$를 곱하면 행렬식에는 $c$가 아니라 $c^{n}$이 곱해져요.",
  "Pri násobení matice rádu ${@0}$ číslom $c$ sa číslom $c$ násobí každý z ${@1}$ riadkov: $\\det(cA)=c^{n}\\det A$.": "${@0}$차 행렬에 수 $c$를 곱하면 ${@1}$개의 행 각각에 $c$가 곱해져요: $\\det(cA)=c^{n}\\det A$.",
  "Pri prenesení $A$ na druhú stranu sa mení znamienko: ${@0}X=A+B^{T}$.": "$A$를 반대쪽으로 옮기면 부호가 바뀌어요: ${@0}X=A+B^{T}$.",
  "Pri zmiešanom člene $c\\,x_ix_j$ je $a_{ij}=a_{ji}=c/2$.": "혼합항 $c\\,x_ix_j$에서는 $a_{ij}=a_{ji}=c/2$예요.",
  "Projekciu na $w_1$ treba od $u_2$ odčítať, nie pripočítať. Over, či je výsledok kolmý na $w_1$.": "$w_1$ 위로의 사영은 $u_2$에서 더하는 게 아니라 빼야 해요. 결과가 $w_1$에 수직인지 확인하세요.",
  "Prvky sa neumocnili. Diagonálny prvok $(A^{T}A)_{jj}$ je skalárny súčin $j$-tého stĺpca so sebou samým, teda súčet druhých mocnín.": "성분을 제곱하지 않았어요. 대각성분 $(A^{T}A)_{jj}$는 $j$번째 열과 자기 자신의 내적, 즉 제곱의 합이에요.",
  "Prvok $(A^{T}A)_{jj}$ vznikne skalárnym súčinom $j$-tého stĺpca matice $A$ so sebou samým.": "성분 $(A^{T}A)_{jj}$는 행렬 $A$의 $j$번째 열과 자기 자신의 내적으로 얻어요.",
  "Prvé dva riadky nie sú navzájom úmerné, preto $h(A)\\ge 2$. Hodnosť je menšia ako 3 práve vtedy, keď $D=\\det A=0$. {@0}": "처음 두 행은 서로 비례하지 않으므로 $h(A)\\ge 2$예요. 계수가 3보다 작을 필요충분조건은 $D=\\det A=0$이에요. {@0}",
  "Prvé dva rohové minory od $a$ nezávisia; $D_3=\\det A$ je lineárna funkcia $a$ s koeficientom $D_2$.": "처음 두 선행 주소행렬식은 $a$에 의존하지 않아요. $D_3=\\det A$는 계수가 $D_2$인 $a$의 일차함수예요.",
  "Práve jedno riešenie má sústava len pri $h(A)=h(A\\mid b)=3$. Over, či po eliminácii nevznikne v matici sústavy nulový riadok.": "연립방정식의 해가 꼭 하나인 것은 $h(A)=h(A\\mid b)=3$일 때뿐이에요. 소거 후 계수행렬에 영행이 생기지 않는지 확인하세요.",
  "Riadkovými úpravami vynuluj prvky pod vedúcimi prvkami a spočítaj nenulové riadky.": "행 연산으로 선도 성분 아래의 성분을 0으로 만들고 0이 아닌 행의 개수를 세세요.",
  "Riešenia homogénnej sústavy s $n$ neznámymi tvoria podpriestor dimenzie $n-h(A)$.": "미지수가 $n$개인 동차 연립방정식의 해는 차원이 $n-h(A)$인 부분공간을 이뤄요.",
  "Riešenie je $X={@0}={@1}={@2}$.": "해는 $X={@0}={@1}={@2}$예요.",
  "Riešime $(A-\\lambda I)v=o$, kde $A-{@0}I={@1}$. {@2} Skúška: $A{@3}={@4}={@5}\\cdot{@6}$.": "$(A-\\lambda I)v=o$를 풀어요. 여기서 $A-{@0}I={@1}$. {@2} 검산: $A{@3}={@4}={@5}\\cdot{@6}$.",
  "Rotácia útvaru okolo počiatku": "원점을 중심으로 한 도형의 회전",
  "Rovnica $c_1b_1+c_2b_2+c_3b_3=v$ je sústava s maticou, ktorá má vektory bázy v stĺpcoch:<br>{@0}<br>Spätné dosadzovanie – {@1}": "방정식 $c_1b_1+c_2b_2+c_3b_3=v$는 기저 벡터를 열로 하는 행렬의 연립방정식이에요:<br>{@0}<br>후진 대입 – {@1}",
  "Rovnicu vynásob maticou $A^{-1}$ sprava: $X=BA^{-1}$.": "방정식의 오른쪽에 $A^{-1}$을 곱하세요: $X=BA^{-1}$.",
  "Rovnicu vynásob maticou $A^{-1}$ zľava: $X=A^{-1}B$.": "방정식의 왼쪽에 $A^{-1}$을 곱하세요: $X=A^{-1}B$.",
  "Rozhodni, aká je matica $A={@0}$.": "행렬 $A={@0}$는 어떤 행렬인지 판별하세요.",
  "Rozviň determinant podľa riadka alebo stĺpca, v ktorom je len jeden nenulový prvok. Nezabudni na znamienko $(-1)^{i+j}$.": "0이 아닌 성분이 하나뿐인 행이나 열에 대해 행렬식을 전개하세요. 부호 $(-1)^{i+j}$를 잊지 마세요.",
  "Rozvoj $\\det(A-\\lambda I)$ podľa 3. riadka: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.": "$\\det(A-\\lambda I)$를 3행에 대해 전개하면: $p(\\lambda)=({@0})\\cdot{@1}=({@2})\\bigl({@3}\\bigr)$.",
  "Rozvoj determinantu podľa 3. riadka dáva $D=Ca+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "행렬식을 3행에 대해 전개하면 $D=Ca+D_0$이에요. 계수 $C$(매개변수가 있는 성분의 여인수)는 얼마일까요?",
  "Rozvoj podľa 3. riadka dáva $D=Ct+D_0$. Aký je koeficient $C$ (algebraický doplnok prvku s parametrom)?": "3행에 대해 전개하면 $D=Ct+D_0$이에요. 계수 $C$(매개변수가 있는 성분의 여인수)는 얼마일까요?",
  "Rozvoj podľa 3. riadka: $D = {@0}$, kde ${@1}$. Teda $D = {@2}$.": "3행에 대한 전개: $D = {@0}$, 여기서 ${@1}$. 따라서 $D = {@2}$예요.",
  "Rozvojom podľa 3. riadka dostaneš činiteľ $(c-\\lambda)$. Aké je $c$?": "3행에 대해 전개하면 인수 $(c-\\lambda)$가 나와요. $c$는 얼마일까요?",
  "Rozšírenú maticu uprav na stupňovitý tvar a neznáme dopočítaj odspodu.": "첨가행렬을 사다리꼴로 바꾸고 미지수를 아래에서부터 구하세요.",
  "S maticovou rovnicou narábaj ako s obyčajnou: osamostatni $X$, potom počítaj po prvkoch.": "행렬방정식도 보통 방정식처럼 다루세요: $X$만 남기고 그다음 성분별로 계산하세요.",
  "Sarrusovo pravidlo pre determinant 3×3": "3×3 행렬식의 사뤼스 법칙",
  "Sarrusovo pravidlo: $\\det A={@0}$.": "사뤼스 법칙: $\\det A={@0}$.",
  "Sarrusovo pravidlo: tri súčiny na diagonálach doprava dole so znamienkom plus, tri doľava dole so znamienkom mínus.": "사뤼스 법칙: 오른쪽 아래로 가는 대각선 위의 세 곱은 더하고, 왼쪽 아래로 가는 세 곱은 빼요.",
  "Semidefinitná forma má $\\det A=0$, teda aspoň jedno vlastné číslo nulové. Skontroluj determinant.": "준정부호 형식은 $\\det A=0$이므로 적어도 하나의 고윳값이 0이에요. 행렬식을 확인하세요.",
  "Skalárny súčin $\\langle u, v\\rangle$ má tvar $at+b$. Aký je koeficient $a$?": "내적 $\\langle u, v\\rangle$는 $at+b$ 꼴이에요. 계수 $a$는 얼마일까요?",
  "Skalárny súčin treba ešte vydeliť číslom $\\langle u, u\\rangle=\\|u\\|^2$.": "내적을 $\\langle u, u\\rangle=\\|u\\|^2$로 나누어야 해요.",
  "Stĺpce matice zobrazenia sú obrazy vektorov $e_1=(1, 0)$ a $e_2=(0, 1)$. Zloženiu „najprv $f$, potom $g$“ zodpovedá súčin $A_gA_f$.": "사상의 행렬의 열은 벡터 $e_1=(1, 0)$과 $e_2=(0, 1)$의 상이에요. 합성 „먼저 $f$, 그다음 $g$“에는 곱 $A_gA_f$가 대응해요.",
  "Stĺpec pravých strán patrí do {@0}. <em>stĺpca</em> determinantu, nie do {@1}. riadka.": "우변의 열은 행렬식의 {@1}행이 아니라 {@0}<em>열</em>에 들어가요.",
  "Sylvestrovo kritérium: $D_1\\gt 0$ platí vždy, podmienku dáva $D_2=\\det A\\gt 0$.": "실베스터 판정법: $D_1\\gt 0$은 항상 성립하고, 조건은 $D_2=\\det A\\gt 0$에서 나와요.",
  "Symetrická matica spĺňa $a_{ij}=a_{ji}$ pre všetky dvojice prvkov súmerných podľa hlavnej diagonály. Porovnaj ich jednu po druhej.": "대칭행렬은 주대각선에 대해 대칭인 모든 성분 쌍에 대해 $a_{ij}=a_{ji}$를 만족해요. 하나씩 비교하세요.",
  "Sú vektory $u={@0}$, $v={@1}$ a $w={@2}$ lineárne závislé, alebo nezávislé?": "벡터 $u={@0}$, $v={@1}$, $w={@2}$는 일차종속일까요, 일차독립일까요?",
  "Sú vektory lineárne závislé, alebo nezávislé?": "벡터들은 일차종속일까요, 일차독립일까요?",
  "Súradnice vektora v báze b₁, b₂": "기저 b₁, b₂에 대한 벡터의 좌표",
  "Sústava je ${@0}={@1}$, ${@2}={@3}$. Vypočítaj jej determinant $D$.": "연립방정식은 ${@0}={@1}$, ${@2}={@3}$이에요. 행렬식 $D$를 계산하세요.",
  "Sústava nemá riešenie, len keď vznikne riadok $(0\\ 0\\ 0\\mid c)$ s $c\\neq 0$, teda $h(A)\\neq h(A\\mid b)$.": "연립방정식의 해가 없는 것은 $c\\neq 0$인 행 $(0\\ 0\\ 0\\mid c)$가 생길 때, 즉 $h(A)\\neq h(A\\mid b)$일 때뿐이에요.",
  "Súčiny na diagonálach smerom doľava dole sa od kladných členov odčítajú, nie pripočítajú.": "왼쪽 아래로 가는 대각선 위의 곱은 양의 항에서 더하는 게 아니라 빼요.",
  "Sčítaj ich: aký je vektor ${@0}$?": "더해 보세요: 벡터 ${@0}$는 무엇일까요?",
  "Teda {@0}. riadok matice $A^{-1}$ je $\\frac{1}{{@1}}({@2})={@3}$.": "따라서 행렬 $A^{-1}$의 {@0}행은 $\\frac{1}{{@1}}({@2})={@3}$이에요.",
  "To je $\\dim\\operatorname{Im}f=h(A)$. Dimenzia jadra je počet stĺpcov mínus hodnosť.": "그건 $\\dim\\operatorname{Im}f=h(A)$예요. 핵의 차원은 열의 개수에서 계수를 뺀 값이에요.",
  "To je dimenzia celého priestoru $\\mathbb{R}^{{@0}}$. Podpriestor môže mať menšiu dimenziu, rozhoduje hodnosť.": "그건 전체 공간 $\\mathbb{R}^{{@0}}$의 차원이에요. 부분공간의 차원은 더 작을 수 있고, 계수가 결정해요.",
  "To je dimenzia jadra. Dimenzia obrazu sa rovná hodnosti matice.": "그건 핵의 차원이에요. 상의 차원은 행렬의 계수와 같아요.",
  "To je hodnosť matice sústavy. Dimenzia priestoru riešení je počet voľných neznámych, $n-h(A)$.": "그건 계수행렬의 계수예요. 해공간의 차원은 자유 미지수의 개수 $n-h(A)$예요.",
  "To je počet riadkov pôvodnej matice. Hodnosť je počet nenulových riadkov až po prevedení do stupňovitého tvaru.": "그건 원래 행렬의 행의 개수예요. 계수는 사다리꼴로 바꾼 뒤의 0이 아닌 행의 개수예요.",
  "To je počet stĺpcov. Hodnosť je počet nenulových riadkov stupňovitého tvaru.": "그건 열의 개수예요. 계수는 사다리꼴에서 0이 아닌 행의 개수예요.",
  "To je počet vektorov. Niektoré z nich môžu byť lineárnou kombináciou ostatných; dimenzia je hodnosť matice z nich zostavenej.": "그건 벡터의 개수예요. 그중 일부는 나머지의 일차결합일 수 있어요. 차원은 그 벡터들로 만든 행렬의 계수예요.",
  "Toto je projekcia vektora $u$ na smer $v$. Premietame $v$ na smer $u$, výsledok je preto násobkom vektora $u$.": "이건 벡터 $u$를 $v$ 방향으로 사영한 거예요. 우리는 $v$를 $u$ 방향으로 사영하므로 결과는 벡터 $u$의 배수예요.",
  "Transponuj maticu a porovnaj ju s $A$ a s $-A$. Pozri sa aj na diagonálu.": "행렬을 전치해서 $A$, $-A$와 비교하세요. 대각선도 살펴보세요.",
  "Tri možnosti pre sústavu dvoch rovníc s dvoma neznámymi": "미지수가 두 개인 두 방정식의 연립방정식의 세 가지 경우",
  "Tri vektory v $\\mathbb{R}^3$ sú lineárne nezávislé práve vtedy, keď je determinant matice z nich zostavenej nenulový.": "$\\mathbb{R}^3$의 세 벡터가 일차독립일 필요충분조건은 그 벡터들로 만든 행렬의 행렬식이 0이 아닌 것이에요.",
  "Uhol priamky θ (°)": "직선의 각 θ (°)",
  "Uhol φ (°)": "각 φ (°)",
  "Uprav rozšírenú maticu na stupňovitý tvar a porovnaj $h(A)$ s $h(A\\mid b)$ a s počtom neznámych.": "첨가행렬을 사다리꼴로 바꾸고 $h(A)$를 $h(A\\mid b)$, 미지수의 개수와 비교하세요.",
  "Uprav rozšírenú maticu na stupňovitý tvar. Aká je hodnosť matice sústavy $h(A)$?": "첨가행렬을 사다리꼴로 바꾸세요. 계수행렬의 계수 $h(A)$는 얼마일까요?",
  "Uprav rozšírenú maticu na stupňovitý tvar. Z posledného riadku vypočítaj $x_3$.": "첨가행렬을 사다리꼴로 바꾸세요. 마지막 행에서 $x_3$을 계산하세요.",
  "Urči definitnosť kvadratickej formy $Q={@0}$ (vyber najpresnejšiu možnosť).": "이차형식 $Q={@0}$의 정부호성을 판별하세요(가장 정확한 것을 고르세요).",
  "Urči dimenziu podpriestoru $W=\\mathcal{L}({@0})$ priestoru $\\mathbb{R}^{{@1}}$.": "$\\mathbb{R}^{{@1}}$의 부분공간 $W=\\mathcal{L}({@0})$의 차원을 구하세요.",
  "Urči dimenziu podpriestoru $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$.": "부분공간 $W=\\{x\\in\\mathbb{R}^{{@0}} : {@1}\\}$의 차원을 구하세요.",
  "Urči hodnosť matice $A={@0}$.": "행렬 $A={@0}$의 계수를 구하세요.",
  "Urči číslo $c$ (prípadne ako zlomok).": "수 $c$를 구하세요(필요하면 분수로).",
  "V menovateli sú normy $\\|u\\|$ a $\\|v\\|$, nie ich druhé mocniny.": "분모에는 노름의 제곱이 아니라 노름 $\\|u\\|$와 $\\|v\\|$가 들어가요.",
  "V treťom riadku sú dve nuly – rozviň $\\det(A-\\lambda I)$ podľa neho a zvyšný determinant $2\\times 2$ rieš ako kvadratickú rovnicu.": "3행에 0이 두 개 있어요. 이 행에 대해 $\\det(A-\\lambda I)$를 전개하고 남은 $2\\times 2$ 행렬식은 이차방정식으로 푸세요.",
  "V {@0}. riadku je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto riadka dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "{@0}행에서 0이 아닌 성분은 $a_{{@1}{@2}}={@3}$ 하나뿐이므로 이 행에 대한 라플라스 전개로 $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$을 얻어요.",
  "V {@0}. stĺpci je jediný nenulový prvok $a_{{@1}{@2}}={@3}$, preto Laplaceov rozvoj podľa tohto stĺpca dáva $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$.": "{@0}열에서 0이 아닌 성분은 $a_{{@1}{@2}}={@3}$ 하나뿐이므로 이 열에 대한 라플라스 전개로 $\\det A={@4}\\cdot(-1)^{{@5}+{@6}}\\cdot M_{{@7}{@8}}$을 얻어요.",
  "Vektor $v={@0}$ najprv zobrazíme zobrazením $f$: {@1}, a výsledok potom zobrazením $g$: {@2}. Urči obraz $(g\\circ f)(v)$ v tvare „x; y“.": "벡터 $v={@0}$를 먼저 사상 $f$로 옮기고({@1}), 그 결과를 사상 $g$로 옮겨요({@2}). 상 $(g\\circ f)(v)$를 „x; y“ 꼴로 구하세요.",
  "Vektory bázy patria do <em>stĺpcov</em> matice sústavy, nie do riadkov: $i$-ta rovnica porovnáva $i$-te zložky.": "기저 벡터는 계수행렬의 행이 아니라 <em>열</em>에 들어가요: $i$번째 방정식은 $i$번째 성분끼리 비교해요.",
  "Vektory sú ortogonálne práve vtedy, keď je ich skalárny súčin nulový.": "두 벡터가 직교할 필요충분조건은 내적이 0인 것이에요.",
  "Vektory sú závislé práve vtedy, keď $D={@0}=0$. {@1} Pre $t={@2}$ je $w$ lineárnou kombináciou vektorov $u$ a $v$.": "벡터들이 종속일 필요충분조건은 $D={@0}=0$이에요. {@1} $t={@2}$일 때 $w$는 벡터 $u$와 $v$의 일차결합이에요.",
  "Vektory zapíš do riadkov matice a urči jej hodnosť.": "벡터들을 행렬의 행으로 쓰고 그 계수를 구하세요.",
  "Vektory zapíšeme do riadkov matice a determinant vypočítame Sarrusovým pravidlom: ${@0}={@1}$.": "벡터들을 행렬의 행으로 쓰고 사뤼스 법칙으로 행렬식을 계산해요: ${@0}={@1}$.",
  "Vektory zapíšeme do stĺpcov: $A\\,U=P$, kde $U={@0}$ a $P={@1}$. Keďže $\\det U={@2}$, je $U^{-1}={@3}$ a $A=PU^{-1}={@4}{@5}={@6}$.": "벡터들을 열로 써요: $A\\,U=P$, 여기서 $U={@0}$, $P={@1}$. $\\det U={@2}$이므로 $U^{-1}={@3}$이고 $A=PU^{-1}={@4}{@5}={@6}$이에요.",
  "Vlastné vektory sú nenulové riešenia homogénnej sústavy $(A-\\lambda I)v=o$.": "고유벡터는 동차 연립방정식 $(A-\\lambda I)v=o$의 0이 아닌 해예요.",
  "Vlastné vektory: ${@0}$ pre $\\lambda={@1}$ a ${@2}$ pre $\\lambda={@3}$. Teda $P={@4}$, $D={@5}$, $\\det P={@6}$ a $P^{-1}={@7}$.": "고유벡터: $\\lambda={@1}$에 대해 ${@0}$, $\\lambda={@3}$에 대해 ${@2}$. 따라서 $P={@4}$, $D={@5}$, $\\det P={@6}$, $P^{-1}={@7}$이에요.",
  "Vlastné čísla sú prvky diagonály len pri trojuholníkovej matici. Tu rieš charakteristickú rovnicu $\\det(A-\\lambda I)=0$.": "고윳값이 대각성분과 같은 것은 삼각행렬일 때뿐이에요. 여기서는 특성방정식 $\\det(A-\\lambda I)=0$을 푸세요.",
  "Vo vete o dimenzii je dimenzia vzoru, teda počet stĺpcov ${@0}$, nie počet riadkov.": "차원 정리에 나오는 것은 정의역의 차원, 즉 행의 개수가 아니라 열의 개수 ${@0}$이에요.",
  "Vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$.": "한 행에 ${@0}$을 곱하면 행렬식에도 ${@1}$이 곱해져요.",
  "Vypočítaj $(A^{-1})_{{@0}{@1}}$. Neceločíselný výsledok zadaj ako zlomok.": "$(A^{-1})_{{@0}{@1}}$을 계산하세요. 결과가 정수가 아니면 분수로 입력하세요.",
  "Vypočítaj $A=PU^{-1}$ (prvky po riadkoch).": "$A=PU^{-1}$을 계산하세요(성분은 행 순서대로).",
  "Vypočítaj $A^{-1}$ (prvky po riadkoch).": "$A^{-1}$을 계산하세요(성분은 행 순서대로).",
  "Vypočítaj $A^{{@0}}=PD^{{@1}}P^{-1}$ (prvky po riadkoch).": "$A^{{@0}}=PD^{{@1}}P^{-1}$을 계산하세요(성분은 행 순서대로).",
  "Vypočítaj $X={@0}$ (prvky po riadkoch).": "$X={@0}$를 계산하세요(성분은 행 순서대로).",
  "Vypočítaj $\\cos\\varphi$ (ako zlomok).": "$\\cos\\varphi$를 계산하세요(분수로).",
  "Vypočítaj $\\cos\\varphi$, kde $\\varphi$ je uhol vektorov $u={@0}$ a $v={@1}$. Výsledok zadaj ako zlomok.": "벡터 $u={@0}$와 $v={@1}$가 이루는 각을 $\\varphi$라 할 때 $\\cos\\varphi$를 계산하세요. 결과는 분수로 입력하세요.",
  "Vypočítaj $\\det A$.": "$\\det A$를 계산하세요.",
  "Vypočítaj $\\langle u, u\\rangle$.": "$\\langle u, u\\rangle$를 계산하세요.",
  "Vypočítaj $\\langle u, v\\rangle$.": "$\\langle u, v\\rangle$를 계산하세요.",
  "Vypočítaj $\\langle u_2, w_1\\rangle$, kde $w_1=u_1$.": "$w_1=u_1$일 때 $\\langle u_2, w_1\\rangle$를 계산하세요.",
  "Vypočítaj $\\langle v, u\\rangle$.": "$\\langle v, u\\rangle$를 계산하세요.",
  "Vypočítaj $\\langle w_1, w_1\\rangle$.": "$\\langle w_1, w_1\\rangle$를 계산하세요.",
  "Vypočítaj $\\|u\\|$.": "$\\|u\\|$를 계산하세요.",
  "Vypočítaj $\\|v\\|$.": "$\\|v\\|$를 계산하세요.",
  "Vypočítaj $c_1$ a zadaj všetky súradnice.": "$c_1$을 계산하고 좌표를 모두 입력하세요.",
  "Vypočítaj $c_2$.": "$c_2$를 계산하세요.",
  "Vypočítaj $f(v)$.": "$f(v)$를 계산하세요.",
  "Vypočítaj $g\\bigl(f(v)\\bigr)$.": "$g\\bigl(f(v)\\bigr)$를 계산하세요.",
  "Vypočítaj $x_{{@0}}$. Neceločíselný výsledok zadaj ako zlomok.": "$x_{{@0}}$을 계산하세요. 결과가 정수가 아니면 분수로 입력하세요.",
  "Vypočítaj algebraické doplnky {@0}. stĺpca: $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$.": "{@0}열의 여인수 $A_{1{@1}}$, $A_{2{@2}}$, $A_{3{@3}}$을 계산하세요.",
  "Vypočítaj algebraický doplnok $A_{{@0}{@1}}$.": "여인수 $A_{{@0}{@1}}$을 계산하세요.",
  "Vypočítaj determinant $D$ matice sústavy.": "계수행렬의 행렬식 $D$를 계산하세요.",
  "Vypočítaj determinant $D_\\alpha$ (prvý stĺpec nahradíš pravými stranami).": "행렬식 $D_\\alpha$를 계산하세요(첫째 열을 우변으로 바꿔요).",
  "Vypočítaj determinant $D_\\beta$ (druhý stĺpec nahradíš pravými stranami).": "행렬식 $D_\\beta$를 계산하세요(둘째 열을 우변으로 바꿔요).",
  "Vypočítaj determinant $D_{{@0}}$.": "행렬식 $D_{{@0}}$을 계산하세요.",
  "Vypočítaj determinant ${@0}$.": "행렬식 ${@0}$를 계산하세요.",
  "Vypočítaj determinant matice $A={@0}$.": "행렬 $A={@0}$의 행렬식을 계산하세요.",
  "Vypočítaj diagonálny prvok $(A^{T}A)_{{@0}{@1}}$.": "대각성분 $(A^{T}A)_{{@0}{@1}}$을 계산하세요.",
  "Vypočítaj hlavný rohový minor $D_{@0}$.": "선행 주소행렬식 $D_{@0}$를 계산하세요.",
  "Vypočítaj inverznú maticu k $U={@0}$ (prvky po riadkoch).": "$U={@0}$의 역행렬을 계산하세요(성분은 행 순서대로).",
  "Vypočítaj maticu $A+B^{T}$ (prvky po riadkoch).": "행렬 $A+B^{T}$를 계산하세요(성분은 행 순서대로).",
  "Vypočítaj maticu $X$ (prvky po riadkoch).": "행렬 $X$를 계산하세요(성분은 행 순서대로).",
  "Vypočítaj maticu ${@0}$ (prvky po riadkoch).": "행렬 ${@0}$를 계산하세요(성분은 행 순서대로).",
  "Vypočítaj minor $M_{{@0}{@1}}$ (determinant po vynechaní {@2}. riadka a {@3}. stĺpca).": "소행렬식 $M_{{@0}{@1}}$({@2}행과 {@3}열을 지운 행렬식)을 계산하세요.",
  "Vypočítaj ortogonálnu projekciu vektora $v={@0}$ na smer vektora $u={@1}$. Zložky zadaj oddelené bodkočiarkou (zlomky v tvare $p/q$).": "벡터 $v={@0}$를 벡터 $u={@1}$의 방향 위로 정사영한 벡터를 계산하세요. 성분은 세미콜론으로 구분해서 입력하세요(분수는 $p/q$ 꼴).",
  "Vypočítaj rohový minor $D_2$.": "선행 주소행렬식 $D_2$를 계산하세요.",
  "Vypočítaj stopu $\\operatorname{tr}(A^{T}A)$.": "대각합 $\\operatorname{tr}(A^{T}A)$를 계산하세요.",
  "Vypočítaj stopu $\\operatorname{tr}A$.": "대각합 $\\operatorname{tr}A$를 계산하세요.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doprava dole.": "오른쪽 아래로 가는 대각선 위의 세 곱의 합을 계산하세요.",
  "Vypočítaj súčet troch súčinov na diagonálach smerom doľava dole.": "왼쪽 아래로 가는 대각선 위의 세 곱의 합을 계산하세요.",
  "Vypočítaj vektor ${@0}u$.": "벡터 ${@0}u$를 계산하세요.",
  "Vypočítaj vektor ${@0}{@1}v$.": "벡터 ${@0}{@1}v$를 계산하세요.",
  "Vypočítaj vzdialenosť $\\|u-v\\|$ vektorov $u={@0}$ a $v={@1}$.": "벡터 $u={@0}$와 $v={@1}$ 사이의 거리 $\\|u-v\\|$를 계산하세요.",
  "Vyrieš charakteristickú rovnicu $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$. Zadaj vlastné čísla.": "특성방정식 $\\lambda^2-\\operatorname{tr}A\\cdot\\lambda+\\det A=0$을 푸세요. 고윳값을 입력하세요.",
  "Vyrieš maticovú rovnicu ${@0}$, kde $A={@1}$ a $B={@2}$. Prvky matice $X$ zadaj po riadkoch.": "$A={@1}$, $B={@2}$일 때 행렬방정식 ${@0}$을 푸세요. 행렬 $X$의 성분을 행 순서대로 입력하세요.",
  "Výmena riadkov mení znamienko a vynásobenie riadka číslom ${@0}$ násobí determinant číslom ${@1}$: $\\det B=-{@2}\\cdot {@3}={@4}$": "행을 바꾸면 부호가 바뀌고, 한 행에 ${@0}$을 곱하면 행렬식에 ${@1}$이 곱해져요: $\\det B=-{@2}\\cdot {@3}={@4}$",
  "Z prvého riadku vypočítaj $x_1$ a zadaj celé riešenie.": "첫째 행에서 $x_1$을 계산하고 해 전체를 입력하세요.",
  "Z rovnice $AU=P$ treba násobiť maticou $U^{-1}$ sprava: $A=PU^{-1}$. Násobenie matíc nie je komutatívne.": "방정식 $AU=P$에서 $U^{-1}$을 오른쪽에서 곱해야 해요: $A=PU^{-1}$. 행렬의 곱셈은 교환법칙이 성립하지 않아요.",
  "Z rovnice $X=\\tfrac{1}{{@0}}(A+B^{T})$. Máme $B^{T}={@1}$, $A+B^{T}={@2}$, teda $X={@3}$.": "방정식에서 $X=\\tfrac{1}{{@0}}(A+B^{T})$. $B^{T}={@1}$, $A+B^{T}={@2}$이므로 $X={@3}$이에요.",
  "Z {@0}. riadku: ${@1}=0$, preto je vlastný vektor násobkom ${@2}$.": "{@0}행에서: ${@1}=0$이므로 고유벡터는 ${@2}$의 배수예요.",
  "Zabudol si transponovať maticu $B$: v $B^{T}$ sú riadky matice $B$ zapísané ako stĺpce.": "행렬 $B$를 전치하는 걸 잊었어요: $B^{T}$에서는 행렬 $B$의 행이 열로 쓰여요.",
  "Zabudol si transponovať maticu $B$: v rovnici je $B^{T}$.": "행렬 $B$를 전치하는 걸 잊었어요: 방정식에는 $B^{T}$가 있어요.",
  "Zabudol si vektory vynásobiť ich koeficientmi. Každú zložku vektora $u$ aj $v$ najprv vynásob príslušným číslom.": "벡터에 계수를 곱하는 걸 잊었어요. 먼저 벡터 $u$와 $v$의 각 성분에 해당하는 수를 곱하세요.",
  "Zadaj $\\alpha$ a $\\beta$.": "$\\alpha$와 $\\beta$를 입력하세요.",
  "Zadaj jedno netriviálne riešenie (uznáme ľubovoľný nenulový násobok).": "자명하지 않은 해를 하나 입력하세요(0이 아닌 어떤 배수도 정답이에요).",
  "Zadaj projekciu $\\operatorname{proj}_u v$ (zlomky v tvare $p/q$).": "사영 $\\operatorname{proj}_u v$를 입력하세요(분수는 $p/q$ 꼴).",
  "Zadaj smerový vektor jadra (ľubovoľný nenulový násobok je správne).": "핵의 방향벡터를 입력하세요(0이 아닌 어떤 배수도 정답이에요).",
  "Zadaj vektor $w_2$.": "벡터 $w_2$를 입력하세요.",
  "Zadaj vlastný vektor k $\\lambda={@0}$ (ľubovoľný nenulový násobok).": "$\\lambda={@0}$에 대한 고유벡터를 입력하세요(0이 아닌 어떤 배수도 정답이에요).",
  "Zadaj všetky vlastné čísla matice $A$.": "행렬 $A$의 고윳값을 모두 입력하세요.",
  "Zadaj {@0}. riadok matice $A^{-1}$.": "행렬 $A^{-1}$의 {@0}행을 입력하세요.",
  "Zapíš rovnosť po zložkách – dostaneš sústavu dvoch rovníc pre $\\alpha$ a $\\beta$.": "등식을 성분별로 쓰세요 – $\\alpha$와 $\\beta$에 대한 두 방정식의 연립방정식이 나와요.",
  "Zobrazenia si použil v opačnom poradí. Najprv sa na $v$ použije $f$, preto je matica zloženia $A_gA_f$ (matica $A_f$ stojí pri vektore).": "사상을 반대 순서로 적용했어요. $v$에는 먼저 $f$를 적용하므로 합성의 행렬은 $A_gA_f$예요(행렬 $A_f$가 벡터 바로 옆에 와요).",
  "Zobrazenie $f:\\mathbb{R}^3\\to\\mathbb{R}^3$ je dané predpisom $f(x)=Ax$, kde $A={@0}$. Jadro $\\operatorname{Ker}f$ je priamka. Nájdi jej smerový vektor (ľubovoľný nenulový násobok je správne).": "사상 $f:\\mathbb{R}^3\\to\\mathbb{R}^3$은 $f(x)=Ax$로 주어지고 $A={@0}$예요. 핵 $\\operatorname{Ker}f$는 직선이에요. 그 방향벡터를 구하세요(0이 아닌 어떤 배수도 정답이에요).",
  "Zobrazenie $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$ je dané maticou $A={@2}$. Urči $\\dim\\operatorname{{@3}}f$.": "사상 $f:\\mathbb{R}^{{@0}}\\to\\mathbb{R}^{{@1}}$은 행렬 $A={@2}$로 주어져요. $\\dim\\operatorname{{@3}}f$를 구하세요.",
  "Zostav symetrickú maticu formy (pri zmiešaných členoch polovica koeficientu) a vypočítaj hlavné rohové minory.": "형식의 대칭행렬을 만들고(혼합항에서는 계수의 절반) 선행 주소행렬식을 계산하세요.",
  "Zostav sústavu (vektory bázy v stĺpcoch) a uprav ju na stupňovitý tvar. Z posledného riadku vypočítaj $c_3$.": "연립방정식(기저 벡터를 열로)을 세우고 사다리꼴로 바꾸세요. 마지막 행에서 $c_3$을 계산하세요.",
  "Zvyšný činiteľ je charakteristický polynóm ľavej hornej podmatice $2\\times 2$. Aká je jej stopa?": "남은 인수는 왼쪽 위 $2\\times 2$ 부분행렬의 특성다항식이에요. 그 부분행렬의 대각합은 얼마일까요?",
  "Záporne definitná je forma len vtedy, keď sa znamienka rohových minorov striedajú a $D_1\\lt 0$.": "선행 주소행렬식의 부호가 번갈아 바뀌고 $D_1\\lt 0$일 때만 형식이 음의 정부호예요.",
  "Závislé sú vektory len vtedy, keď je determinant nulový. Prepočítaj ho Sarrusovým pravidlom a pozor na znamienka.": "벡터들이 종속인 것은 행렬식이 0일 때뿐이에요. 사뤼스 법칙으로 다시 계산하고 부호에 주의하세요.",
  "ani symetrická, ani antisymetrická": "대칭행렬도 반대칭행렬도 아님",
  "antisymetrická": "반대칭행렬",
  "indefinitná": "부정부호",
  "je podpriestor": "부분공간이에요",
  "je to lineárny obal vektorov $(1, {@0}, 0)$ a $({@1}, 0, 1)$": "벡터 $(1, {@0}, 0)$과 $({@1}, 0, 1)$의 생성이에요",
  "je to množina riešení homogénnej lineárnej rovnice – súčet riešení aj násobok riešenia sú opäť riešenia": "동차 일차방정식의 해집합이에요 – 해의 합과 해의 스칼라배도 다시 해예요",
  "je to množina riešení homogénnej sústavy (priamka cez počiatok)": "동차 연립방정식의 해집합이에요(원점을 지나는 직선)",
  "jeden parameter": "매개변수 1개",
  "kladne definitná": "양의 정부호",
  "kladne semidefinitná": "양의 준정부호",
  "kolmá projekcia na os $x$": "$x$축 위로의 정사영",
  "kolmá projekcia na os $y$": "$y$축 위로의 정사영",
  "komplexné vlastné čísla – žiadny reálny vlastný smer": "복소수 고윳값 – 실수 고유방향이 없음",
  "lineárne nezávislé": "일차독립",
  "lineárne závislé": "일차종속",
  "napr. $(1, 0, 0)$ a $(0, 1, 0)$ do nej patria, ale ich súčet $(1, 1, 0)$ nie – nie je uzavretá na sčítanie": "예를 들어 $(1, 0, 0)$과 $(0, 1, 0)$은 속하지만 그 합 $(1, 1, 0)$은 속하지 않아요 – 덧셈에 대해 닫혀 있지 않아요",
  "napr. $(1, 0, 0)$ do nej patrí, ale $(-1)\\cdot(1, 0, 0)$ nie – nie je uzavretá na násobenie číslom": "예를 들어 $(1, 0, 0)$은 속하지만 $(-1)\\cdot(1, 0, 0)$은 속하지 않아요 – 스칼라배에 대해 닫혀 있지 않아요",
  "napr. $(1, 1, 0)$ do nej patrí, ale $2\\cdot(1, 1, 0)=(2, 2, 0)$ nie, lebo $2\\neq 4$": "예를 들어 $(1, 1, 0)$은 속하지만 $2\\cdot(1, 1, 0)=(2, 2, 0)$은 속하지 않아요. $2\\neq 4$이기 때문이에요",
  "nekladné": "0 이하",
  "nenulové riadky": "영이 아닌 행",
  "nenulový riadok": "영이 아닌 행",
  "neobsahuje nulový vektor ($0\\neq {@0}$)": "영벡터를 포함하지 않아요($0\\neq {@0}$)",
  "neobsahuje nulový vektor: prvá zložka je 0 len pre $s=0$, no vtedy je druhá zložka ${@0}\\neq 0$": "영벡터를 포함하지 않아요: 첫째 성분은 $s=0$일 때만 0인데, 그때 둘째 성분은 ${@0}\\neq 0$이에요",
  "neplatí ani $A^{T}=A$, ani $A^{T}=-A$, teda matica nie je ani symetrická, ani antisymetrická": "$A^{T}=A$도 $A^{T}=-A$도 성립하지 않으므로 이 행렬은 대칭행렬도 반대칭행렬도 아니에요",
  "nezáporné": "0 이상",
  "nie je podpriestor": "부분공간이 아니에요",
  "osová súmernosť podľa osi $x$": "$x$축에 대한 대칭",
  "osová súmernosť podľa osi $y$": "$y$축에 대한 대칭",
  "osová súmernosť podľa priamky $y=-x$": "직선 $y=-x$에 대한 대칭",
  "osová súmernosť podľa priamky $y=x$": "직선 $y=x$에 대한 대칭",
  "platí $A^{T}=-A$, teda matica je antisymetrická": "$A^{T}=-A$가 성립하므로 이 행렬은 반대칭행렬이에요",
  "platí $A^{T}=A$, teda matica je symetrická": "$A^{T}=A$가 성립하므로 이 행렬은 대칭행렬이에요",
  "práve jedno riešenie": "해가 꼭 하나",
  "rotácia o $180^\\circ$": "$180^\\circ$ 회전",
  "rotácia o $90^\\circ$ proti smeru hodinových ručičiek": "시계 반대 방향으로 $90^\\circ$ 회전",
  "rotácia o $90^\\circ$ v smere hodinových ručičiek": "시계 방향으로 $90^\\circ$ 회전",
  "rovnoľahlosť so stredom v počiatku a koeficientom $2$": "원점을 중심으로 하고 닮음비가 $2$인 닮음변환",
  "skosenie $(x, y)\\mapsto(x+y, y)$": "층밀림 $(x, y)\\mapsto(x+y, y)$",
  "sprava": "오른쪽에서",
  "symetrická": "대칭행렬",
  "súradnice v báze B: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = ({@2}; {@3}) v štandardnej báze": "기저 B에 대한 좌표: ({@0}; {@1}) · <span class=\"c-accent\">c₁b₁</span> + <span class=\"c-ok\">c₂b₂</span> = 표준기저에서 ({@2}; {@3})",
  "teda $\\alpha=\\frac{{@0}}{{@1}}={@2}$ a $\\beta=\\frac{{@3}}{{@4}}={@5}$.": "따라서 $\\alpha=\\frac{{@0}}{{@1}}={@2}$, $\\beta=\\frac{{@3}}{{@4}}={@5}$예요.",
  "vedúce prvky sú zvýraznené, pod schodmi sú len nuly": "선도 성분이 강조되어 있고, 계단 아래에는 0만 있어요",
  "všetky rohové minory sú kladné": "모든 선행 주소행렬식이 양수예요",
  "z {@0}. riadku: ${@1} = {@2}$": "{@0}행에서: ${@1} = {@2}$",
  "znamienka rohových minorov sa striedajú ({@0})": "선행 주소행렬식의 부호가 번갈아 바뀌어요({@0})",
  "záporne definitná": "음의 정부호",
  "záporne semidefinitná": "음의 준정부호",
  "zľava": "왼쪽에서",
  "{@0}<br>$h(A)=2\\lt 3$, riešenia tvoria priamku (jeden parameter). Riešenie je kolmé na oba nenulové riadky stupňovitého tvaru, preto ho dostaneme ako ich vektorový súčin: ${@1}\\times{@2}={@3}${@4}. Všetky riešenia sú $t\\cdot{@5}$, $t\\in\\mathbb{R}$.": "{@0}<br>$h(A)=2\\lt 3$이므로 해는 직선을 이뤄요(매개변수 1개). 해는 사다리꼴의 0이 아닌 두 행에 모두 수직이므로 그 두 행의 외적으로 얻어요: ${@1}\\times{@2}={@3}${@4}. 모든 해는 $t\\cdot{@5}$, $t\\in\\mathbb{R}$이에요.",
  "{@0}<br>$h(A)={@1}$, teda $\\dim\\operatorname{Im}f={@2}$ a podľa vety o dimenzii $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$.": "{@0}<br>$h(A)={@1}$이므로 $\\dim\\operatorname{Im}f={@2}$이고, 차원 정리에 따라 $\\dim\\operatorname{Ker}f={@3}-{@4}={@5}$예요.",
  "{@0}<br>Podľa Frobeniovej vety: {@1}.": "{@0}<br>프로베니우스 정리에 따라: {@1}.",
  "{@0}<br>Spätné dosadzovanie – {@1}": "{@0}<br>후진 대입 – {@1}",
  "Úpravou: {@0}<br>Hodnosť je 2, riešenie je kolmé na oba nenulové riadky, teda je násobkom ${@1}\\times{@2}={@3}${@4}.": "변형하면: {@0}<br>계수가 2이고 해는 0이 아닌 두 행에 모두 수직이므로 ${@1}\\times{@2}={@3}${@4}의 배수예요.",
  "Číslo $\\lambda={@0}$ je vlastným číslom matice $A={@1}$. Nájdi k nemu vlastný vektor (ľubovoľný nenulový násobok je správne).": "수 $\\lambda={@0}$는 행렬 $A={@1}$의 고윳값이에요. 이에 대한 고유벡터를 구하세요(0이 아닌 어떤 배수도 정답이에요).",
  "Štvorcová matica $A$ rádu ${@0}$ má $\\det A={@1}$.{@2} Vypočítaj ${@3}$. Neceločíselný výsledok zadaj ako zlomok, napr. $-3/4$.": "${@0}$차 정사각행렬 $A$에 대해 $\\det A={@1}$이에요.{@2} ${@3}$를 계산하세요. 결과가 정수가 아니면 분수로 입력하세요(예: $-3/4$).",
  "Štvorcová matica rádu 3 má hodnosť 3 práve vtedy, keď je jej determinant nenulový.": "3차 정사각행렬의 계수가 3일 필요충분조건은 행렬식이 0이 아닌 것이에요.",
  "− súčiny na oranžových diagonálach": "− 주황색 대각선 위의 곱",
  ", po úprave ${@0}$": ", 정리하면 ${@0}$",
  "To je druhá mocnina vzdialenosti. Výsledok ešte odmocni.": "그건 거리의 제곱이에요. 결과의 제곱근을 구하세요."
 }
});
