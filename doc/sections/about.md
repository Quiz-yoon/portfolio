# About Page (+ Experience 통합)

**Route:** `/about`
**Component:** `app/about/page.tsx`
**Data:** `lib/data.ts` → `aboutData` + `experienceData`

> Experience는 이 페이지 안에 통합. 홈(`/`)에서는 Experience 섹션 제거.

---

## 페이지 레이아웃

```
[소개 — Avatar + 이름 + 한 줄 포지셔닝]

[Philosophy — 일하는 방식 / 철학]

[Interests — 관심 영역]

[Experience — 경력 테이블 전체]

[Education + Languages]

[Currently Exploring]

[Contact CTA]
```

---

## 섹션별 실제 데이터

### 소개

```ts
export const aboutData = {
  name: "Heejin Yoon",
  nameKo: "윤희진",
  role: "Product Designer",
  positioning: "사용자 중심의 사고와 데이터 기반 의사결정으로 글로벌 e-commerce UX를 개선하고 디자인 시스템을 구축해온 프로덕트 디자이너.",
}
```

### Philosophy

```ts
philosophy: `저는 디자인을 미학의 문제보다 의사결정의 문제로 바라봅니다.
좋은 디자인은 사용자를 이해하고, 데이터를 해석하고, 팀과 함께 올바른 선택을 내린 결과라고 생각합니다.
대만·태국 시장에서 글로벌 e-commerce 서비스를 담당하며 현지 사용자의 맥락을 이해하고
UX 전략을 수립하는 것, 그리고 그 결정들이 디자인 시스템을 통해 일관되게 전달되도록 만드는 것이
제가 가장 집중해온 일입니다.`
```

### Interests

```ts
interests: [
  "글로벌 유저의 맥락 차이와 현지화 UX 전략",
  "데이터 기반 의사결정과 A/B 테스트 설계",
  "팀 생산성을 높이는 디자인 시스템 구축",
  "0→1 프로덕트의 불확실성 속 빠른 실험과 학습",
]
```

### Experience (경력 테이블)

```ts
export const experienceData = [
  {
    id: "line",
    company: "LINE Plus Corp",
    role: "Product Designer",
    period: "2021.10 – Present",
    // logo not used — initials shown instead
    description: "대만·태국 Giftshop의 UX 기획 및 UI 디자인 전담. 데이터 기반 UX 개선과 디자인 시스템(RDSG) 구축을 주도했으며, 글로벌 팀과 협업해 현지화 UX 전략을 실행했습니다.",
    highlights: [
      "좀탭 개선 → 이탈률 3%p 감소, CTR 3%p 이상 상승, 주문 15% 증가",
      "태국 Giftshop 현지화 → 2025년 8월 공식 런칭 완료",
      "선물 플로우 개선 → 리딤률 7%p 증가, 이탈률 2%p 감소",
      "신규 유저 쿠폰 캠페인 → 탭입 CVR 최대 17% 기록",
      "디자인 시스템(RDSG) → UI 일관성 확보, 팀 생산성 +30% 향상",
    ],
    caseStudySlug: null,
    tags: ["E-commerce", "Design System", "Localization", "B2C"],
  },
  {
    id: "bunkerkids",
    company: "Bunkerkids",
    role: "Product Designer",
    period: "2020.09 – 2021.09",
    // logo not used
    description: "홈트레이닝 앱 0→1 설계 및 런칭 전 과정 담당. 사용자 리서치와 데이터 분석 기반으로 소셜 기능 및 디자인 시스템을 구축했습니다.",
    highlights: [
      "피트니스 앱 런칭 → 앱스토어 평점 4.4 달성",
      "소셜 기능 도입 → 리텐션 3.8배 증가 (80% vs 27%)",
      "플랜 기능 도입 → 운동 유지율 76% (계게 유저 대비 2배 이상)",
      "디자인 시스템 구축 → 서비스 확장 시에도 UI/UX 일관성 확보",
    ],
    caseStudySlug: null,
    tags: ["0→1", "B2C", "Design System", "iOS/Android"],
  },
  {
    id: "styleshare",
    company: "StyleShare",
    role: "UI/UX Designer",
    period: "2018.08 – 2021.04",
    // logo not used
    description: "앱 퍼널 UX 기획 및 UI 디자인. 데이터 기반 퍼널 분석과 A/B 테스트 반복 수행으로 구매 전환율과 리텐션을 개선했습니다.",
    highlights: [
      "퍼널 개선 → 구매 전환율 및 리텐션 향상",
      "신규 사용자 온보딩 개선 → 초기 이탈률 감소",
    ],
    caseStudySlug: null,
    tags: ["B2C", "E-commerce", "A/B Testing"],
  },
  {
    id: "noom",
    company: "Noom Inc.",
    role: "UI/UX Designer",
    period: "2018.07 – 2020.01",
    // logo not used
    description: "맞춤형 상품 추천 UX 설계 (사용자 설문 기반). 한국 지사 검증 후 미국 본사 서비스에 적용, 매출 약 3배 증가에 기여했습니다.",
    highlights: [
      "설문 기반 맞춤 추천 UX → 한국 지사 검증 후 미국 본사 적용",
      "소개·판매 페이지 개선 → 매출 약 3배 증가",
    ],
    caseStudySlug: null,
    tags: ["B2C", "Personalization", "Global"],
  },
  {
    id: "class101",
    company: "CLASS 101",
    role: "UI/UX Designer",
    period: "2020.01 – 2020.08",
    // logo not used
    description: "교육 플랫폼 UX 기획 및 캠페인 실험 설계. 마케팅 팀과 협업해 A/B 테스트를 통한 최적 UI/카피 조합을 도출했습니다.",
    highlights: [
      "마케팅 캠페인 연계 A/B 테스트 설계 및 실행",
      "브랜드 일관성 강화 및 UX 컨벤션 검증",
    ],
    caseStudySlug: null,
    tags: ["EdTech", "B2C", "A/B Testing"],
  },
  {
    id: "graphic-studio-301",
    company: "Graphic Studio 301",
    role: "Founder",
    period: "2015.12 – 2021.01",
    // logo not used
    description: "1인 디자인 에이전시 운영. 스타트업·중소기업 대상 브랜딩, 웹/앱 UI 디자인, 마케팅 콘텐츠 제작 등 기획~납품까지 전 과정 직접 관리.",
    highlights: [],
    caseStudySlug: null,
    tags: ["Freelance", "Branding", "UI Design"],
  },
  {
    id: "sb-groupe",
    company: "SB GROUPE",
    role: "Graphic Designer",
    period: "2014.01 – 2014.12",
    // logo not used
    description: "뉴욕 소재 SB Groupe에서 콘텐츠 및 UI 디자인, 영상 촬영·편집, 브랜드 캠페인 지원. 글로벌 환경에서의 협업 경험을 쌓았습니다.",
    highlights: [],
    caseStudySlug: null,
    tags: ["New York", "Brand", "Visual Design"],
  },
]
```

### Education & Languages

```ts
education: {
  school: "서울예술대학교",
  major: "시각디자인 학사",
  period: "2009 – 2014",
},
languages: [
  { lang: "한국어", level: "원어민" },
  { lang: "영어", level: "Professional working proficiency" },
],
```

### Currently Exploring

```ts
currentlyExploring: "AI 시대의 UX 패턴 변화와 디자인 시스템의 역할",
```

### Contact CTA

```ts
cta: "새로운 기회에 열려 있어요 →",
ctaEmail: "quizyoon@gmail.com",
```

---

## Experience 섹션 디자인 노트

- 섹션 라벨: `"Experience"` — 표준 label 스타일 (`text-[10.5px] uppercase tracking-widest text-[#AEAEB2]`)
- 각 행: 이니셜 + 회사명 + 직책 / 기간 (우측 정렬)
- 클릭 시 아코디언으로 description + highlights 펼침
- caseStudySlug가 있으면 `"View case study ↗"` 링크 표시
- 태그: `bg-[#EFF6FF] text-[#2563EB]` pill

## About 페이지 전체 디자인 노트

- Avatar: 64×64px `rounded-full`
- Philosophy: `text-[14.5px] leading-[1.85]` — 읽기 최적화
- Interests: bullet 대신 inline tag 스타일 (`bg-[#F4F4F4] rounded-md px-2 py-1 text-[13px]`)
- Education + Languages: 2열 그리드
- Contact CTA: 페이지 최하단, `text-[#2563EB]` 이메일 링크
