# Case Study Page

**Route:** `/work/[slug]`
**Component:** `app/work/[slug]/page.tsx`
**Sub-components:** `components/case-study/`
**Data:** `lib/data.ts` → `caseStudies` (slug로 lookup)

---

## 페이지 구조

케이스 스터디는 아래 8개 섹션으로 구성.
모든 섹션이 반드시 필요한 건 아니지만, **③ Constraints, ⑥ Decision, ⑧ Reflection은 필수**.
이 세 섹션이 시니어 레벨을 증명하는 핵심.

```
① Cover
② Context
③ Constraints       ← 필수
④ Problem
⑤ Process
⑥ Decision          ← 필수 (가장 중요)
⑦ Outcome
⑧ Reflection        ← 필수
```

---

## 섹션별 상세

### ① Cover
```
[프로젝트명]
[회사 · 역할 · 기간]
[한 줄 임팩트 요약]    ← 가장 강한 결과 지표를 여기에
[Cover 이미지 (전체 너비)]
```

### ② Context
- 어떤 회사/제품이었나
- 팀 규모, 내 포지션, 관계된 stakeholder
- 비즈니스 상황 (성장 단계, 당시 과제)

### ③ Constraints ← 필수
현실적 제약을 솔직하게 기술. 제약이 없는 프로젝트는 없음.

예시 형태:
- 타임라인: "런칭까지 6주, 디자이너 나 혼자"
- 기술: "레거시 컴포넌트 시스템 위에서 작업, 전면 리팩토링 불가"
- 조직: "PM 부재, 엔지니어링 리소스 50%만 확보"
- 데이터: "유저 리서치 예산 없음, 기존 CS 데이터로만 판단"

### ④ Problem
- 무엇이 문제였나 (데이터 또는 리서치 근거)
- 유저 관점 + 비즈니스 관점 모두 기술
- "우리가 해결하기로 한 문제"와 "의도적으로 스코프 밖으로 뺀 것" 구분

### ⑤ Process
- 어떻게 접근했나 (리서치 방법, 탐색 방향)
- 실패한 방향 포함 — 완벽한 직선 프로세스는 신뢰도 낮음
- 스케치, 와이어프레임, 프로토타입 이미지 삽입
- 팀과 어떻게 협업했나 (PM, 엔지니어, 리서처)

### ⑥ Decision ← 가장 중요
이 섹션에서 시니어 레벨이 드러남.

반드시 답해야 할 질문:
- 여러 방향 중 왜 이것을 선택했나?
- 어떤 대안을 고려했고, 왜 버렸나?
- 어떤 것을 포기했나? (trade-off)
- 그 결정에 누가 동의하지 않았고, 어떻게 설득했나?

작성 팁: "A안과 B안을 검토했고, [이유]로 A를 선택했다. B를 버린 이유는 [이유]이며, 이로 인해 [단점]을 감수했다."

### ⑦ Outcome
- 정량 지표 우선: DAU, retention, 전환율, NPS, 개발 시간 단축 등
- 없으면 정성적 임팩트: 팀 반응, 프로세스 변화, 후속 프로젝트로 이어진 것
- 숫자가 없다고 쓰지 않는 것보다, 맥락 있는 정성 결과가 낫다

### ⑧ Reflection ← 필수
가장 솔직하게 써야 하는 섹션. 면접관들이 가장 주목함.

- 다시 한다면 무엇을 다르게 할 것인가?
- 이 프로젝트에서 배운 것은?
- 남은 과제나 미완의 부분은?

---

## Data 구조

```ts
// lib/data.ts

export interface CaseStudy {
  slug: string
  title: string
  company: string
  role: string
  period: string
  impact: string          // Cover 한 줄 임팩트
  cover: string           // 이미지 경로
  sections: CaseStudySection[]
  team: {
    role: string          // "Product Designer"
    members: string[]     // ["* Youngjun Kim"] — 본인은 * 접두사
  }[]
  prevProject?: { title: string; slug: string }
  nextProject?: { title: string; slug: string }
}

export interface CaseStudySection {
  id: string              // "context" | "constraints" | "problem" | ...
  title: string           // 표시할 섹션 제목
  content: string         // 마크다운 or plain text
  images?: CaseStudyImage[]
}

export interface CaseStudyImage {
  src: string
  caption?: string
  fullWidth?: boolean     // true면 컨텐츠 max-width 넘어서 확장
}

export const caseStudies: CaseStudy[] = [
  // 각 프로젝트 데이터
]
```

---

## 레이아웃 & 디자인 노트

- 본문 max-width: `max-w-[680px]` — 읽기 최적화
- 전체 너비 이미지: `max-w-[680px]` 넘어서 좌우로 확장 (`-mx-8` or `vw` 기반)
- 섹션 간격: `mb-16`
- 섹션 제목: `text-[10.5px] uppercase tracking-widest text-[#BBBBBB]` (label 스타일)
- 본문: `text-[14px] leading-[1.75] text-[#111111]`
- 이미지 캡션: `text-[11.5px] text-[#888888] text-center mt-2`
- 상단에 "← Back" 링크로 홈으로 돌아가기
- 하단에 "Next project →" 링크 (선택)

---

## 페이지 최하단 구성

케이스 스터디 페이지 맨 아래는 아래 순서로 구성:

```
[전체 너비 마지막 이미지 (선택)]

[Team Credits]

[Prev / Next 프로젝트 네비게이션]
```

---

### Team Credits

함께 작업한 팀원을 직책별로 나열하는 섹션.
내가 어떤 규모의 팀에서 어떤 포지션으로 일했는지를 간접적으로 보여줌.

**레이아웃:**
```
2열 그리드

[직책]          [직책]
[이름, 이름]    [이름, 이름, 이름]

[직책]          [직책]
[이름]          [이름, 이름]
```

**디자인 노트:**
- 직책: `text-[13.5px] font-medium text-[#111111]`
- 이름: `text-[13.5px] text-[#888888]`
- 나(본인) 이름 앞에 `*` 표시 — 내 기여 범위 명확히
- 섹션 상단에 구분선 `border-t border-[#E5E5E5]`
- 그리드: `grid grid-cols-2 gap-x-16 gap-y-8`

**Data 구조 추가:**
```ts
// lib/data.ts — CaseStudy 인터페이스에 추가

team: {
  role: string       // "Product Designer"
  members: string[]  // ["* Youngjun Kim"] — 본인은 * 접두사
}[]
```

---

### Prev / Next 프로젝트 네비게이션

페이지 최하단, 다음 케이스 스터디로 이동하는 링크.

**레이아웃:**
```
[← Next Project        Previous Project →]
[  프로젝트명                    프로젝트명]
```

- 좌측: 이전 프로젝트 (← 화살표)
- 우측: 다음 프로젝트 (→ 화살표)
- 둘 다 없을 수도 있음 (첫 번째 / 마지막 프로젝트)

**디자인 노트:**
- 상단 구분선 `border-t border-[#E5E5E5]`
- "Next Project" / "Previous Project" 라벨: `text-[13px] text-[#111111]`
- 화살표: `←` `→` 텍스트 기호 사용 (아이콘 라이브러리 불필요)
- 프로젝트명: `text-[13px] text-[#888888]`
- hover: 프로젝트명 `text-[#111111]` 전환
- 전체 너비, `justify-between` 배치

**Data 구조:**
```ts
// lib/data.ts — CaseStudy 인터페이스에 추가

prevProject?: { title: string; slug: string }
nextProject?: { title: string; slug: string }
```

---

## NDA / 비공개 처리

작업물을 공개할 수 없는 경우:
- 페이지 상단에 `"This project is under NDA. Visuals are omitted or modified."` 노트 표시
- UI 대신 플로우 다이어그램, 구조도로 대체
- 면접 시 자세한 내용을 보여줄 수 있음을 명시
