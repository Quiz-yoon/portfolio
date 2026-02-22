// About types
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
  caseStudySlug: string | null;
  tags: string[];
}

export const aboutData = {
  name: "Heejin Yoon",
  nameKo: "윤희진",
  role: "Product Designer",
  positioning:
    "사용자 중심의 사고와 데이터 기반 의사결정으로 글로벌 e-commerce UX를 개선하고 디자인 시스템을 구축해온 프로덕트 디자이너.",
  positioningEn:
    "A product designer who improves global e-commerce UX and builds design systems through user-centered thinking and data-driven decision-making.",
  philosophy: `저는 디자인을 미학의 문제보다 의사결정의 문제로 바라봅니다.
좋은 디자인은 사용자를 이해하고, 데이터를 해석하고, 팀과 함께 올바른 선택을 내린 결과라고 생각합니다.
대만·태국 시장에서 글로벌 e-commerce 서비스를 담당하며 현지 사용자의 맥락을 이해하고
UX 전략을 수립하는 것, 그리고 그 결정들이 디자인 시스템을 통해 일관되게 전달되도록 만드는 것이
제가 가장 집중해온 일입니다.`,
  philosophyEn: `I see design as a matter of decision-making rather than aesthetics.
Good design is the result of understanding users, interpreting data, and making the right choices together with your team.
Leading global e-commerce services in the Taiwan and Thailand markets, understanding local user contexts,
establishing UX strategies, and ensuring those decisions are delivered consistently through design systems —
that has been my primary focus.`,
  interests: [
    "글로벌 유저의 맥락 차이와 현지화 UX 전략",
    "데이터 기반 의사결정과 A/B 테스트 설계",
    "팀 생산성을 높이는 디자인 시스템 구축",
    "0→1 프로덕트의 불확실성 속 빠른 실험과 학습",
  ],
  interestsEn: [
    "Localization UX strategies for global user contexts",
    "Data-driven decision-making and A/B test design",
    "Building design systems that boost team productivity",
    "Rapid experimentation and learning in 0→1 products",
  ],
  education: {
    school: "서울예술대학교",
    schoolEn: "Seoul Institute of the Arts",
    major: "시각디자인 학사",
    majorEn: "B.A. in Visual Design",
    period: "2009 – 2014",
  },
  languages: [
    { lang: "한국어", langEn: "Korean", level: "원어민", levelEn: "Native" },
    {
      lang: "영어",
      langEn: "English",
      level: "Professional working proficiency",
      levelEn: "Professional working proficiency",
    },
  ],
  currentlyExploring: "AI 시대의 UX 패턴 변화와 디자인 시스템의 역할",
  currentlyExploringEn:
    "The evolution of UX patterns in the AI era and the role of design systems",
  cta: "새로운 기회에 열려 있어요 →",
  ctaEn: "Open to new opportunities →",
  ctaEmail: "quizyoon@gmail.com",
};

export const experienceData: Experience[] = [
  {
    id: "line",
    company: "LINE Plus Corp",
    role: "Product Designer",
    period: "2021.10 – Present",

    description:
      "대만·태국 Giftshop의 UX 기획 및 UI 디자인 전담. 데이터 기반 UX 개선과 디자인 시스템(RDSG) 구축을 주도했으며, 글로벌 팀과 협업해 현지화 UX 전략을 실행했습니다.",
    descriptionEn:
      "Led UX planning and UI design for Taiwan & Thailand Giftshop. Drove data-driven UX improvements and design system (RDSG) development, executing localization UX strategies with global teams.",
    highlights: [
      "좀탭 개선 → 이탈률 3%p 감소, CTR 3%p 이상 상승, 주문 15% 증가",
      "태국 Giftshop 현지화 → 2025년 8월 공식 런칭 완료",
      "선물 플로우 개선 → 리딤률 7%p 증가, 이탈률 2%p 감소",
      "신규 유저 쿠폰 캠페인 → 탭입 CVR 최대 17% 기록",
      "디자인 시스템(RDSG) → UI 일관성 확보, 팀 생산성 +30% 향상",
    ],
    highlightsEn: [
      "Home tab redesign → bounce rate -3%p, CTR +3%p, orders +15%",
      "Thailand Giftshop localization → official launch Aug 2025",
      "Gift flow improvement → redeem rate +7%p, bounce rate -2%p",
      "New user coupon campaign → tap-in CVR up to 17%",
      "Design system (RDSG) → UI consistency, team productivity +30%",
    ],
    caseStudySlug: null,
    tags: ["E-commerce", "Design System", "Localization", "B2C"],
  },
  {
    id: "bunkerkids",
    company: "Bunkerkids",
    role: "Product Designer",
    period: "2020.09 – 2021.09",

    description:
      "홈트레이닝 앱 0→1 설계 및 런칭 전 과정 담당. 사용자 리서치와 데이터 분석 기반으로 소셜 기능 및 디자인 시스템을 구축했습니다.",
    descriptionEn:
      "Owned the full 0→1 design and launch of a home training app. Built social features and design system based on user research and data analysis.",
    highlights: [
      "피트니스 앱 런칭 → 앱스토어 평점 4.4 달성",
      "소셜 기능 도입 → 리텐션 3.8배 증가 (80% vs 27%)",
      "플랜 기능 도입 → 운동 유지율 76% (계게 유저 대비 2배 이상)",
      "디자인 시스템 구축 → 서비스 확장 시에도 UI/UX 일관성 확보",
    ],
    highlightsEn: [
      "Fitness app launch → App Store rating 4.4",
      "Social features → retention 3.8x increase (80% vs 27%)",
      "Plan feature → workout retention 76% (2x vs non-plan users)",
      "Design system → UI/UX consistency maintained through scaling",
    ],
    caseStudySlug: null,
    tags: ["0→1", "B2C", "Design System", "iOS/Android"],
  },
  {
    id: "styleshare",
    company: "StyleShare",
    role: "UI/UX Designer",
    period: "2018.08 – 2021.04",

    description:
      "앱 퍼널 UX 기획 및 UI 디자인. 데이터 기반 퍼널 분석과 A/B 테스트 반복 수행으로 구매 전환율과 리텐션을 개선했습니다.",
    descriptionEn:
      "App funnel UX planning and UI design. Improved purchase conversion and retention through data-driven funnel analysis and iterative A/B testing.",
    highlights: [
      "퍼널 개선 → 구매 전환율 및 리텐션 향상",
      "신규 사용자 온보딩 개선 → 초기 이탈률 감소",
    ],
    highlightsEn: [
      "Funnel optimization → improved purchase conversion and retention",
      "New user onboarding improvement → reduced early-stage drop-off",
    ],
    caseStudySlug: null,
    tags: ["B2C", "E-commerce", "A/B Testing"],
  },
  {
    id: "noom",
    company: "Noom Inc.",
    role: "UI/UX Designer",
    period: "2018.07 – 2020.01",

    description:
      "맞춤형 상품 추천 UX 설계 (사용자 설문 기반). 한국 지사 검증 후 미국 본사 서비스에 적용, 매출 약 3배 증가에 기여했습니다.",
    descriptionEn:
      "Designed personalized product recommendation UX (survey-based). Validated at Korea office, then applied to US headquarters service, contributing to ~3x revenue increase.",
    highlights: [
      "설문 기반 맞춤 추천 UX → 한국 지사 검증 후 미국 본사 적용",
      "소개·판매 페이지 개선 → 매출 약 3배 증가",
    ],
    highlightsEn: [
      "Survey-based personalized recommendation UX → validated in Korea, deployed to US HQ",
      "Landing & sales page redesign → ~3x revenue increase",
    ],
    caseStudySlug: null,
    tags: ["B2C", "Personalization", "Global"],
  },
  {
    id: "class101",
    company: "CLASS 101",
    role: "UI/UX Designer",
    period: "2020.01 – 2020.08",

    description:
      "교육 플랫폼 UX 기획 및 캠페인 실험 설계. 마케팅 팀과 협업해 A/B 테스트를 통한 최적 UI/카피 조합을 도출했습니다.",
    descriptionEn:
      "EdTech platform UX planning and campaign experiment design. Collaborated with marketing team to derive optimal UI/copy combinations through A/B testing.",
    highlights: [
      "마케팅 캠페인 연계 A/B 테스트 설계 및 실행",
      "브랜드 일관성 강화 및 UX 컨벤션 검증",
    ],
    highlightsEn: [
      "Marketing campaign A/B test design and execution",
      "Brand consistency reinforcement and UX convention validation",
    ],
    caseStudySlug: null,
    tags: ["EdTech", "B2C", "A/B Testing"],
  },
  {
    id: "graphic-studio-301",
    company: "Graphic Studio 301",
    role: "Founder",
    period: "2015.12 – 2021.01",

    description:
      "1인 디자인 에이전시 운영. 스타트업·중소기업 대상 브랜딩, 웹/앱 UI 디자인, 마케팅 콘텐츠 제작 등 기획~납품까지 전 과정 직접 관리.",
    descriptionEn:
      "Ran a solo design agency. Managed end-to-end projects — branding, web/app UI design, and marketing content for startups and SMBs.",
    highlights: [],
    highlightsEn: [],
    caseStudySlug: null,
    tags: ["Freelance", "Branding", "UI Design"],
  },
  {
    id: "sb-groupe",
    company: "SB GROUPE",
    role: "Graphic Designer",
    period: "2014.01 – 2014.12",

    description:
      "뉴욕 소재 SB Groupe에서 콘텐츠 및 UI 디자인, 영상 촬영·편집, 브랜드 캠페인 지원. 글로벌 환경에서의 협업 경험을 쌓았습니다.",
    descriptionEn:
      "Content and UI design, video production and editing, and brand campaign support at SB Groupe in New York. Gained experience collaborating in a global environment.",
    highlights: [],
    highlightsEn: [],
    caseStudySlug: null,
    tags: ["New York", "Brand", "Visual Design"],
  },
];

// Case Study types
export interface CaseStudyImage {
  src: string;
  caption?: string;
  fullWidth?: boolean;
}

export interface CaseStudySection {
  id: string;
  label: string;
  labelEn?: string;
  headline: string;
  headlineEn?: string;
  content: string;
  contentEn?: string;
  images?: CaseStudyImage[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  category: string;
  impact: string;
  impactKo?: string;
  cover: string;
  sections: CaseStudySection[];
  team: {
    role: string;
    members: string[];
  }[];
  prevProject?: { title: string; slug: string };
  nextProject?: { title: string; slug: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "wishlist-optimization",
    title: "Wishlist Optimization",
    company: "LINE",
    role: "Product Designer",
    period: "2023",
    category: "E-Commerce",
    impact: "Wishlist conversion rate increased by 34%",
    impactKo: "위시리스트 전환율 34% 증가",
    cover: "/images/JPEG 이미지.jpeg",
    sections: [
      {
        id: "context",
        label: "배경",
        labelEn: "Context",
        headline: "위시리스트는 구매 전환의 핵심 경로였지만 성과가 정체되어 있었다",
        headlineEn: "The wishlist was a key conversion path, but performance had stagnated",
        content: "LINE Shopping의 위시리스트 기능은 유저들이 관심 상품을 저장하고 나중에 구매로 이어지는 핵심 전환 경로였다. 하지만 저장 후 재방문율이 낮고, 실제 구매 전환으로 이어지는 비율이 업계 평균에 미치지 못하는 상황이었다.",
        contentEn: "LINE Shopping's wishlist feature served as a key conversion path where users saved products of interest for later purchase. However, the return visit rate after saving was low, and the actual purchase conversion rate fell below industry averages.",
      },
      {
        id: "constraints",
        label: "제약 조건",
        labelEn: "Constraints",
        headline: "6주 안에 레거시 시스템 위에서 혼자 설계해야 했다",
        headlineEn: "Had to design alone on a legacy system within 6 weeks",
        content: "런칭까지 6주, 디자이너 1명. 레거시 컴포넌트 시스템 위에서 작업해야 했고 전면 리팩토링은 불가했다. 기존 UI 패턴을 최대한 활용하면서도 사용성을 개선해야 하는 도전이었다.",
        contentEn: "With only 6 weeks until launch and a single designer, the work had to be done on top of a legacy component system with no possibility of a full refactoring. The challenge was to improve usability while maximizing the use of existing UI patterns.",
      },
      {
        id: "decision",
        label: "의사결정",
        labelEn: "Decision",
        headline: "전면 리디자인 대신 점진적 개선을 선택했다",
        headlineEn: "Chose incremental improvement over a full redesign",
        content: "A안(전체 리디자인)과 B안(점진적 개선)을 검토했고, 제약 조건을 고려해 B안을 선택했다. 전면 리디자인은 이상적이었지만 일정과 기술 부채를 감당할 수 없었고, 점진적 개선이 리스크 대비 효과가 높다고 판단했다.",
        contentEn: "We evaluated Option A (full redesign) and Option B (incremental improvement), and chose Option B given the constraints. While a full redesign was ideal, it was not feasible within the timeline and technical debt. Incremental improvement offered the best risk-to-impact ratio.",
      },
      {
        id: "reflection",
        label: "회고",
        labelEn: "Reflection",
        headline: "엔지니어링 팀과의 초기 협업이 부족했다",
        headlineEn: "Lacked early collaboration with the engineering team",
        content: "다시 한다면 초기 단계에서 엔지니어링 팀과 더 긴밀하게 협업했을 것이다. 디자인 완성 후 핸드오프 과정에서 예상치 못한 기술적 제약이 발견되어 일부 수정이 필요했다.",
        contentEn: "If I could do it again, I would have collaborated more closely with the engineering team from the early stages. Unexpected technical constraints were discovered during the handoff process after design completion, requiring some revisions.",
      },
    ],
    team: [
      { role: "Product Designer", members: ["Quiz Yoon"] },
      { role: "Product Manager", members: ["Sujin Park"] },
      { role: "Frontend Engineer", members: ["Minho Lee", "Jiwon Choi"] },
      { role: "Backend Engineer", members: ["Taehyun Kim"] },
      { role: "QA Engineer", members: ["Yejin Seo"] },
      { role: "Data Analyst", members: ["Donghun Cho"] },
    ],
    nextProject: { title: "Ordersheet Improvement", slug: "ordersheet-improvement" },
  },
  {
    slug: "ordersheet-improvement",
    title: "Ordersheet Improvement",
    company: "LINE",
    role: "Product Designer",
    period: "2023",
    category: "E-Commerce",
    impact: "Order completion rate improved by 12%",
    impactKo: "주문 완료율 12% 개선",
    cover: "/images/JPEG 이미지.jpeg",
    sections: [
      {
        id: "context",
        label: "배경",
        labelEn: "Context",
        headline: "주문서에서의 높은 이탈률이 전환율을 끌어내리고 있었다",
        headlineEn: "High drop-off rates on the order sheet were dragging down conversion",
        content: "주문서 페이지의 이탈률이 높아 전환율 개선이 필요했다. 특히 복잡한 입력 필드와 불명확한 정보 구조가 주요 이탈 원인으로 파악되었다.",
        contentEn: "The high bounce rate on the order sheet page necessitated conversion rate improvements. Complex input fields and unclear information architecture were identified as the primary causes of drop-off.",
      },
      {
        id: "constraints",
        label: "제약 조건",
        labelEn: "Constraints",
        headline: "결제 시스템 연동으로 인해 구조 변경에 한계가 있었다",
        headlineEn: "Payment system integration limited structural changes",
        content: "결제 시스템 연동 제약으로 인해 주문서 구조 변경에 한계가 있었다. 외부 PG사와의 인터페이스를 변경할 수 없어 기존 데이터 흐름을 유지하면서 UX만 개선해야 했다.",
        contentEn: "Payment system integration constraints limited structural changes to the order sheet. Since the interface with the external payment gateway could not be modified, we had to improve UX while maintaining the existing data flow.",
      },
      {
        id: "decision",
        label: "의사결정",
        labelEn: "Decision",
        headline: "정보 구조를 재설계하고 단계별 입력 방식을 도입했다",
        headlineEn: "Redesigned information architecture and introduced step-by-step input",
        content: "정보 구조 재설계와 단계별 입력 방식을 도입하여 인지 부하를 줄이는 방향을 선택했다. 한 화면에 모든 정보를 요구하던 방식에서 맥락별로 그룹화하여 순차적으로 입력하는 구조로 전환했다.",
        contentEn: "We chose to reduce cognitive load by redesigning the information architecture and introducing a step-by-step input approach. We transitioned from requesting all information on a single screen to a sequential input structure grouped by context.",
      },
      {
        id: "reflection",
        label: "회고",
        labelEn: "Reflection",
        headline: "유저 테스트를 더 일찍 진행했어야 했다",
        headlineEn: "Should have conducted user testing earlier",
        content: "유저 테스트를 더 일찍 진행했다면 중간 피벗 없이 더 효율적으로 진행할 수 있었을 것이다. 초기 가설 검증 없이 디자인을 진행한 것이 후반 수정 비용을 높였다.",
        contentEn: "If user testing had been conducted earlier, the process could have been more efficient without mid-project pivots. Proceeding with design without early hypothesis validation increased the cost of later revisions.",
      },
    ],
    team: [
      { role: "Product Designer", members: ["Quiz Yoon"] },
      { role: "Product Manager", members: ["Jihye Han"] },
      { role: "Frontend Engineer", members: ["Seungwoo Baek", "Eunji Park"] },
      { role: "Backend Engineer", members: ["Joonho Kim"] },
      { role: "QA Engineer", members: ["Hyejin Lee"] },
      { role: "Data Analyst", members: ["Sangwon Choi"] },
    ],
    prevProject: { title: "Wishlist Optimization", slug: "wishlist-optimization" },
    nextProject: { title: "Design System", slug: "design-system" },
  },
  {
    slug: "design-system",
    title: "Design System",
    company: "LINE",
    role: "Product Designer",
    period: "2024",
    category: "Design System",
    impact: "Component adoption rate reached 85% across 4 product teams",
    impactKo: "4개 제품 팀에서 컴포넌트 채택률 85% 달성",
    cover: "/images/JPEG 이미지.jpeg",
    sections: [
      {
        id: "context",
        label: "배경",
        labelEn: "Context",
        headline: "팀마다 다른 UI 패턴이 일관성과 효율을 저해하고 있었다",
        headlineEn: "Different UI patterns across teams were hindering consistency and efficiency",
        content: "LINE Shopping 내 여러 제품 팀이 각자 다른 UI 패턴을 사용하고 있었고, 일관성과 개발 효율이 필요했다.",
        contentEn: "Multiple product teams within LINE Shopping were using different UI patterns, creating a need for consistency and development efficiency.",
      },
      {
        id: "constraints",
        label: "제약 조건",
        labelEn: "Constraints",
        headline: "전담 인력 없이 프로덕트 작업과 병행해야 했다",
        headlineEn: "Had to work alongside product tasks without dedicated resources",
        content: "기존 프로덕트 작업과 병행해야 했고, 디자인 시스템 전담 인력은 없었다.",
        contentEn: "The work had to be done alongside existing product work, with no dedicated design system team.",
      },
      {
        id: "decision",
        label: "의사결정",
        labelEn: "Decision",
        headline: "가장 빈도 높은 컴포넌트부터 점진적으로 표준화했다",
        headlineEn: "Gradually standardized components starting from the most frequently used",
        content: "전체 시스템을 한 번에 구축하는 대신, 가장 빈도 높은 컴포넌트부터 점진적으로 표준화하는 전략을 택했다.",
        contentEn: "Instead of building the entire system at once, we adopted a strategy of gradually standardizing components starting from the most frequently used ones.",
      },
      {
        id: "reflection",
        label: "회고",
        labelEn: "Reflection",
        headline: "토큰 시스템을 초기부터 설계했어야 했다",
        headlineEn: "Should have designed the token system from the beginning",
        content: "토큰 시스템을 초기부터 설계했다면 후반 마이그레이션 비용을 줄일 수 있었을 것이다.",
        contentEn: "If the token system had been designed from the beginning, the cost of later migration could have been reduced.",
      },
    ],
    team: [
      { role: "Product Designer", members: ["Quiz Yoon", "Yuna Kang"] },
      { role: "Product Manager", members: ["Woojin Seo"] },
      { role: "Frontend Engineer", members: ["Donghyuk Shin", "Jiwon Choi"] },
      { role: "Backend Engineer", members: ["Hyunwoo Jang"] },
      { role: "QA Engineer", members: ["Sooyoung Lee"] },
      { role: "Data Analyst", members: ["Taehyun Kim"] },
    ],
    prevProject: { title: "Ordersheet Improvement", slug: "ordersheet-improvement" },
    nextProject: { title: "Bunker Kids", slug: "bunker-kids" },
  },
  {
    slug: "bunker-kids",
    title: "Bunker Kids",
    company: "Bunker Kids",
    role: "Co-founder & Designer",
    period: "2022",
    category: "Kids Fashion",
    impact: "Launched MVP and acquired 2,000 early users",
    impactKo: "MVP 런칭 후 초기 사용자 2,000명 확보",
    cover: "/images/JPEG 이미지.jpeg",
    sections: [
      {
        id: "context",
        label: "배경",
        labelEn: "Context",
        headline: "키즈 패션 커머스의 가능성을 검증하기 위해 창업했다",
        headlineEn: "Founded a startup to validate kids fashion commerce",
        content: "키즈 패션 커머스 스타트업을 공동 창업하며 제품 디자인 전반을 담당했다.",
        contentEn: "Co-founded a kids fashion commerce startup and was responsible for the overall product design.",
      },
      {
        id: "constraints",
        label: "제약 조건",
        labelEn: "Constraints",
        headline: "3인 팀으로 디자인과 개발을 동시에 담당해야 했다",
        headlineEn: "A team of three handling both design and development",
        content: "3인 팀으로 리소스가 극도로 제한적이었고, 디자인과 프론트엔드를 동시에 담당해야 했다.",
        contentEn: "As a team of three, resources were extremely limited, and I had to handle both design and frontend development simultaneously.",
      },
      {
        id: "decision",
        label: "의사결정",
        labelEn: "Decision",
        headline: "핵심 구매 플로우에만 집중한 최소 MVP를 선택했다",
        headlineEn: "Chose a minimal MVP focused on the core purchase flow",
        content: "초기 MVP는 기능을 최소화하고 핵심 구매 플로우에만 집중하는 전략을 선택했다.",
        contentEn: "For the initial MVP, we chose a strategy of minimizing features and focusing solely on the core purchase flow.",
      },
      {
        id: "reflection",
        label: "회고",
        labelEn: "Reflection",
        headline: "사용자 피드백 루프를 더 체계적으로 구축했어야 했다",
        headlineEn: "Should have built a more systematic user feedback loop",
        content: "사용자 피드백 루프를 더 체계적으로 구축했어야 했다.",
        contentEn: "A more systematic user feedback loop should have been established.",
      },
    ],
    team: [
      { role: "Co-founder & Designer", members: ["Quiz Yoon"] },
      { role: "Co-founder & Engineer", members: ["Hyunwoo Jang"] },
      { role: "Co-founder & Marketing", members: ["Sooyoung Lee"] },
      { role: "iOS Developer", members: ["Minjun Park"] },
      { role: "Android Developer", members: ["Sungho Yoo"] },
      { role: "Growth Manager", members: ["Yejin Seo"] },
    ],
    prevProject: { title: "Design System", slug: "design-system" },
    nextProject: { title: "StyleShare", slug: "styleshare" },
  },
  {
    slug: "styleshare",
    title: "StyleShare",
    company: "StyleShare",
    role: "Product Designer",
    period: "2020",
    category: "Social Commerce",
    impact: "Social commerce feature drove 28% of total revenue",
    impactKo: "소셜 커머스 기능이 전체 매출의 28%를 견인",
    cover: "/images/JPEG 이미지.jpeg",
    sections: [
      {
        id: "context",
        label: "배경",
        labelEn: "Context",
        headline: "소셜 커머스 플랫폼의 핵심 UX를 담당했다",
        headlineEn: "Led the core UX of a social commerce platform",
        content: "패션 소셜 커머스 플랫폼에서 핵심 커머스 기능의 UX를 담당했다.",
        contentEn: "Responsible for the UX of core commerce features on a fashion social commerce platform.",
      },
      {
        id: "constraints",
        label: "제약 조건",
        labelEn: "Constraints",
        headline: "빠르게 변하는 트렌드에 맞춰 주 단위 이터레이션이 필요했다",
        headlineEn: "Weekly iterations needed to keep up with rapidly changing trends",
        content: "빠르게 변화하는 트렌드에 맞춰 주 단위 이터레이션이 요구되었다.",
        contentEn: "Weekly iterations were required to keep up with rapidly changing trends.",
      },
      {
        id: "decision",
        label: "의사결정",
        labelEn: "Decision",
        headline: "소셜과 커머스를 분리하지 않고 통합된 경험으로 설계했다",
        headlineEn: "Designed an integrated experience instead of separating social and commerce",
        content: "소셜 피드와 커머스를 분리하지 않고 통합된 경험으로 설계하는 방향을 선택했다.",
        contentEn: "We chose to design an integrated experience rather than separating the social feed and commerce.",
      },
      {
        id: "reflection",
        label: "회고",
        labelEn: "Reflection",
        headline: "데이터 기반 의사결정을 더 일찍 도입했어야 했다",
        headlineEn: "Should have introduced data-driven decision making earlier",
        content: "데이터 기반 의사결정 프레임워크를 더 일찍 도입했어야 했다.",
        contentEn: "A data-driven decision-making framework should have been introduced earlier.",
      },
    ],
    team: [
      { role: "Product Designer", members: ["Quiz Yoon", "Eunji Kim"] },
      { role: "Product Manager", members: ["Woojin Seo"] },
      { role: "Frontend Engineer", members: ["Junhyuk Park", "Hayoung Oh"] },
      { role: "Backend Engineer", members: ["Sangmin Cho"] },
      { role: "QA Engineer", members: ["Minhee Kang"] },
      { role: "Data Analyst", members: ["Jihoon Ryu"] },
    ],
    prevProject: { title: "Bunker Kids", slug: "bunker-kids" },
  },
];

export const heroData = {
  name: "Your Name",
  headline: "Product designer with focus on craft and detailed execution.",
  headlineKo: "디테일한 실행력에 집중하는 프로덕트 디자이너.",
  bio: "I design and build digital products & visual interfaces — Welcome to my small corner of web.",
  bioKo: "디지털 프로덕트와 비주얼 인터페이스를 디자인하고 만듭니다 — 제 작은 웹 공간에 오신 것을 환영합니다.",
  previousCompanies: ["X (Twitter)", "Handshake"],
  location: "Los Angeles, California",
  locationKo: "미국 로스앤젤레스",
};

export const sidebarData = {
  name: "Quiz Yoon",
  projects: [
    {
      id: "line",
      name: "LINE",
      children: [
        { id: "wishlist-optimization", name: "Wishlist optimization" },
        { id: "ordersheet-improvement", name: "Ordersheet improvement" },
        { id: "design-system", name: "Design system" },
      ],
    },
    { id: "bunker-kids", name: "Bunker Kids" },
    { id: "styleshare", name: "StyleShare" },
  ],
  designEngineering: [
    { id: "interface-lab", name: "Interface Lab" },
  ],
  contact: [
    { name: "Email", href: "mailto:quizyoon@gmail.com", icon: "email" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/heejinyoon/",
      icon: "linkedin",
    },
  ],
};
