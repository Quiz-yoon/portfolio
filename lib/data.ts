// About types
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
  caseStudySlug: string | null;
  logo: string | null;
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
    "Zero to One 프로덕트의 불확실성 속 빠른 실험과 학습",
  ],
  interestsEn: [
    "Localization UX strategies for global user contexts",
    "Data-driven decision-making and A/B test design",
    "Building design systems that boost team productivity",
    "Rapid experimentation and learning in Zero to One products",
  ],
  education: {
    school: "서울예술대학교 시각디자인과 전문학사 졸업",
    schoolEn: "Seoul Institute of the Arts, A.A. in Visual Design",
    major: "",
    majorEn: "",
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
    location: "Bundang, Korea",

    description:
      "대만·태국 Giftshop UX 기획 및 UI 디자인 전담. 데이터 기반 UX 개선과 디자인 시스템(RDSG) 구축 주도, 글로벌 팀과 협업해 현지화 UX 전략 실행",
    descriptionEn:
      "Led UX planning and UI design for Taiwan & Thailand Giftshop. Drove data-driven UX improvements and design system (RDSG) development, executing localization UX strategies with global teams.",
    highlights: [
      "홈탭 개선 → 이탈률 감소, CTR 상승, 주문 증가",
      "태국 Giftshop 현지화 → 공식 런칭 완료",
      "선물 플로우 개선 → 리딤률 증가, 이탈률 감소",
      "신규 유저 쿠폰 캠페인 → CVR 개선",
      "디자인 시스템(RDSG) → UI 일관성 확보, 팀 생산성 향상",
    ],
    highlightsEn: [
      "Home tab redesign → reduced bounce rate, increased CTR and orders",
      "Thailand Giftshop localization → official launch completed",
      "Gift flow improvement → increased redeem rate, reduced bounce rate",
      "New user coupon campaign → improved CVR",
      "Design system (RDSG) → UI consistency, improved team productivity",
    ],
    caseStudySlug: "wishlist-optimization",
    logo: "/images/line.png",
    tags: ["E-commerce", "Design System", "Localization", "B2C"],
  },
  {
    id: "bunkerkids",
    company: "Bunkerkids",
    role: "Product Designer",
    period: "2020.09 – 2021.09",
    location: "Seoul, Korea",

    description:
      "홈트레이닝 앱 Zero to One 설계 및 런칭 전 과정 담당. 사용자 리서치와 데이터 분석 기반 소셜 기능 및 디자인 시스템 구축",
    descriptionEn:
      "Owned the full Zero to One design and launch of a home training app. Built social features and design system based on user research and data analysis.",
    highlights: [
      "피트니스 앱 런칭 → 앱스토어 높은 평점 달성",
      "소셜 기능 도입 → 리텐션 대폭 증가",
      "플랜 기능 도입 → 운동 유지율 크게 향상",
      "디자인 시스템 구축 → 서비스 확장 시에도 UI/UX 일관성 확보",
    ],
    highlightsEn: [
      "Fitness app launch → achieved high App Store rating",
      "Social features → significant retention increase",
      "Plan feature → greatly improved workout retention",
      "Design system → UI/UX consistency maintained through scaling",
    ],
    caseStudySlug: "bunker-kids",
    logo: "/images/bunkerkids.png",
    tags: ["Zero to One", "B2C", "Design System", "iOS/Android"],
  },
  {
    id: "styleshare",
    company: "StyleShare",
    role: "UI/UX Designer",
    period: "2018.08 – 2021.04",
    location: "Seoul, Korea",

    description:
      "앱 퍼널 UX 기획 및 UI 디자인. 데이터 기반 퍼널 분석과 A/B 테스트 반복 수행으로 구매 전환율과 리텐션 개선",
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
    caseStudySlug: "styleshare",
    logo: "/images/styleshare.jpeg",
    tags: ["B2C", "E-commerce", "A/B Testing"],
  },
  {
    id: "noom",
    company: "Noom Inc.",
    role: "UI/UX Designer",
    period: "2018.07 – 2020.01",
    location: "Seoul, Korea",

    description:
      "맞춤형 상품 추천 UX 설계 (사용자 설문 기반). 한국 지사 검증 후 미국 본사 서비스에 적용, 매출 대폭 증가에 기여",
    descriptionEn:
      "Designed personalized product recommendation UX (survey-based). Validated at Korea office, then applied to US headquarters service, contributing to ~3x revenue increase.",
    highlights: [
      "설문 기반 맞춤 추천 UX → 한국 지사 검증 후 미국 본사 적용",
      "소개·판매 페이지 개선 → 매출 대폭 증가",
    ],
    highlightsEn: [
      "Survey-based personalized recommendation UX → validated in Korea, deployed to US HQ",
      "Landing & sales page redesign → significant revenue increase",
    ],
    caseStudySlug: null,
    logo: null,
    tags: ["B2C", "Personalization", "Global"],
  },
  {
    id: "class101",
    company: "CLASS 101",
    role: "UI/UX Designer",
    period: "2020.01 – 2020.08",
    location: "Seoul, Korea",

    description:
      "교육 플랫폼 UX 기획 및 캠페인 실험 설계. 마케팅 팀과 협업해 A/B 테스트를 통한 최적 UI/카피 조합 도출",
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
    logo: null,
    tags: ["EdTech", "B2C", "A/B Testing"],
  },
  {
    id: "graphic-studio-301",
    company: "Graphic Studio 301",
    role: "Founder",
    period: "2015.12 – 2021.01",
    location: "Seoul, Korea",

    description:
      "1인 디자인 에이전시 운영. 스타트업·중소기업 대상 브랜딩, 웹/앱 UI 디자인, 마케팅 콘텐츠 제작 등 기획~납품까지 전 과정 직접 관리.",
    descriptionEn:
      "Ran a solo design agency. Managed end-to-end projects — branding, web/app UI design, and marketing content for startups and SMBs.",
    highlights: [],
    highlightsEn: [],
    caseStudySlug: null,
    logo: null,
    tags: ["Freelance", "Branding", "UI Design"],
  },
  {
    id: "sb-groupe",
    company: "SB GROUPE",
    role: "Graphic Designer",
    period: "2014.01 – 2014.12",
    location: "New York, USA",

    description:
      "뉴욕 소재 SB Groupe에서 콘텐츠 및 UI 디자인, 영상 촬영·편집, 브랜드 캠페인 지원. 글로벌 환경에서의 협업 경험",
    descriptionEn:
      "Content and UI design, video production and editing, and brand campaign support at SB Groupe in New York. Gained experience collaborating in a global environment.",
    highlights: [],
    highlightsEn: [],
    caseStudySlug: null,
    logo: null,
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
  group?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  role: string;
  period: string;
  category: string;
  country: string;
  contribution?: string;
  impact: string;
  impactKo?: string;
  intro?: string;
  introEn?: string;
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
    country: "🇹🇼 Taiwan",
    impact: "Wishlist conversion rate increased by 34%",
    impactKo: "위시리스트 전환율 34% 증가",
    cover: "/images/Frame 2085666081.png",
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
    prevProject: { title: "Gift Voucher Localization", slug: "gift-voucher-localization" },
    nextProject: { title: "Ordersheet Improvement", slug: "ordersheet-improvement" },
  },
  {
    slug: "ordersheet-improvement",
    title: "Ordersheet Improvement",
    company: "LINE",
    role: "Product Designer",
    period: "2023",
    category: "E-Commerce",
    country: "🇹🇭 Thailand",
    impact: "Order completion rate improved by 12%",
    impactKo: "주문 완료율 12% 개선",
    cover: "/images/Frame 2085666081.png",
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
    country: "🇹🇼 Taiwan, 🇹🇭 Thailand",
    impact: "Component adoption rate reached 85% across 4 product teams",
    impactKo: "4개 제품 팀에서 컴포넌트 채택률 85% 달성",
    cover: "/images/Frame 2085666081.png",
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
    slug: "gift-voucher-localization",
    title: "Gift Voucher Localization",
    company: "LINE",
    role: "Product Designer",
    period: "2024 - 2025",
    category: "E-Commerce, Gift Shop",
    country: "🇹🇭 Thailand",
    contribution: "Problem definition, solution design, UT design and analysis",
    impact: "From Thailand Market Launch to 00% Decrease in Gift Usage CS Cases, and 00% Increase in Gift Purchase Rate After Redemption",
    impactKo: "태국 시장 런칭부터 선물 사용 관련 CS 00% 감소, 그리고 선물 사용 후 선물 구매율 00% 증가까지",
    intro: "대만에 런칭된 LINE Gift Shop을 태국 시장으로 확장하는 과정에서 두 가지 핵심 문제를 해결했습니다. 대만과는 완전히 다른 브랜드 파트너들의 매장 환경이 출시 전과 출시 후에 각각 다른 문제를 만들었습니다. 출시 전에는 기술적 제약을, 출시 후에는 사용자 인지 문제를 해결했습니다.",
    introEn: "We solved two critical problems while expanding LINE Gift Shop, launched in Taiwan, to the Thailand market. The brand partners' store environment, completely different from Taiwan, created distinct challenges before and after launch. We addressed technical constraints pre-launch and user awareness issues post-launch.",
    cover: "/images/Frame 2085666081.png",
    sections: [
      {
        id: "context",
        group: "Launch 1",
        label: "컨텍스트",
        labelEn: "Context",
        headline: "대만에서 태국으로 확장하며 두 가지 핵심 문제를 해결했다",
        headlineEn: "Solved two critical problems while expanding from Taiwan to Thailand",
        content: "문제 1: 출시 전 발견한 기술적 제약 (2024-2025년 초)\n\n태국 매장은 POS 시스템 유무가 혼재된 환경이었습니다. 실시간 확인이 불가능했고, 다중 매장 어뷰징 위험이 있었습니다. 이를 해결하기 위해 15분 자동 완료 시스템과 경험 기반 보안을 설계했습니다. 100개 이상 브랜드 파트너를 대상으로 매장 운영 가이드라인 마련에 참여했습니다. 2025년 4월 출시 후 어뷰징 0건을 달성했습니다.\n\n문제 2: 출시 후 발견한 사용자 시점 인지 문제 (2025년 7-9월)\n\n출시 시 포함한 팝업의 UX writing이 불명확했고 맥락이 부족했습니다. 이로 인해 91건의 CS 케이스가 발생했습니다. 문제를 해결하기 위해 105명을 대상으로 UT를 진행했습니다. 리딤 전 페이지에서 정보를 제공하는 방식으로 개선했습니다. 2025년 12월 런칭 후 시간 인지율이 67%에서 90%로 향상되었고, CS 케이스가 감소했습니다.",
        contentEn: "Problem 1: Technical Constraints Discovered Pre-Launch (Early 2024-2025)\n\nThai stores had a mixed environment of POS systems. Real-time verification was impossible, creating multi-store abuse risks. We designed a 15-minute auto-complete system and experience-based security. We established store operation guidelines with 100+ brand partners. After April 2025 launch, we achieved 0 abuse cases.\n\nProblem 2: User Timing Awareness Issues Discovered Post-Launch (July-September 2025)\n\nThe popup's UX writing at launch was unclear and lacked context. This resulted in 91 CS cases. We conducted UT with 105 participants. We improved by providing information on the pre-redemption page. After December 2025 launch, time awareness improved from 67% to 90%, and CS cases decreased.",
      },
      {
        id: "problem-discovery-1",
        group: "Launch 1",
        label: "문제 발견",
        labelEn: "Problem Discovery",
        headline: "현지 팀 스펙으로 발견한 기술적 제약",
        headlineEn: "Technical Constraints Discovered from Local Team Specs",
        content: "우리는 LINE Gift Shop을 태국에 출시하려 했습니다. 하지만 대만에서 작동하던 시스템을 그대로 쓸 수 없었습니다. 현지 프로덕트 팀으로부터 받은 스펙을 보니 태국은 대만과 완전히 달랐습니다.\n\n대만에서는 모든 매장 POS와 실시간으로 연동되어 바우처 사용 여부를 즉시 확인할 수 있었습니다. 태국은 그게 불가능했습니다. 태국 매장은 POS 시스템 유무가 혼재되어 있었습니다. POS가 있어도 Gift Shop과 실시간으로 연동되지 않았습니다. POS가 없는 매장에서는 직원이 수기로 기록했습니다. 사용자가 매장에서 바우처를 사용해도 앱에서는 여전히 \"사용 가능\" 상태로 남았습니다. 다중 매장 어뷰징이 가능한 상황이었습니다.\n\n이미 100개 이상의 브랜드 파트너와 계약이 완료된 상태였습니다. 6개월 안에 출시해야 했습니다. 실시간 확인 없이 어떻게 중복 사용을 막을 것인가가 핵심 과제였습니다.",
        contentEn: "We planned to launch LINE Gift Shop in Thailand. However, we couldn't use the system that worked in Taiwan as-is. The specs from the local product team showed Thailand was completely different from Taiwan.\n\nIn Taiwan, all store POS systems were integrated in real-time, allowing instant verification of voucher usage. Thailand couldn't do that. Thai stores had mixed POS systems. Even stores with POS weren't integrated with Gift Shop in real-time. Stores without POS had staff record manually. When users redeemed vouchers in-store, the app still showed \"available\" status. Multi-store abuse was possible.\n\nContracts with 100+ brand partners were already complete. We had 6 months to launch. How to prevent duplicate usage without real-time verification was the core challenge.",
      },
      {
        id: "problem-analysis-1",
        group: "Launch 1",
        label: "문제 분석",
        labelEn: "Problem Analysis",
        headline: "3가지 어뷰징 시나리오 정의",
        headlineEn: "Defining 3 Abuse Scenarios",
        content: "다중 매장 사용 가능성\n\n사용자가 A매장에서 바우처를 사용하면 매장 POS에는 기록이 됩니다. 하지만 Gift Shop 시스템은 실시간으로 그 데이터를 가져올 수 없습니다. 앱에서는 여전히 \"사용 가능\" 상태로 남아있습니다. 방콕의 매장 간 이동 시간은 20-30분입니다. 사용자가 B매장으로 빠르게 이동하면 같은 바우처로 다시 사용할 수 있었습니다.\n\n수기 기록 허점\n\nPOS가 없는 매장에서는 직원이 노트나 노트앱에 수기로 작성한 뒤 마감 때 정산합니다. 직원이 기록을 누락할 수 있고, 실시간은 물론 당일에도 확인이 불가능했습니다. 조직적 악용 가능성이 매우 높았습니다.\n\n스크린샷 공유 가능성\n\n활성화된 바우처 코드를 스크린샷으로 찍어 LINE으로 공유할 수 있습니다. 애니메이션이 없으면 직원이 진짜 바우처인지 가짜인지 구별할 수 없었습니다. 이 문제는 POS 유무와 관계없이 모든 매장에서 발생 가능했습니다.\n\n다른 대안 검토\n\nGPS 기반 매장 도착 알림이나 위치 기반 자동 활성화도 고려했습니다. 하지만 태국 매장 파트너들의 위치 데이터 통합이 불가능했습니다. 실시간 위치 추적은 개인정보 이슈도 있었습니다. 이미 100개 이상 브랜드 파트너와 계약이 완료되었고, 6개월 안에 출시해야 했습니다. 기존 인프라에서 작동하는 솔루션이 필요했습니다.\n\n세 가지 위험을 모두 막을 수 있는 솔루션이 필요했습니다. 해결 방향은 명확했습니다. 사용자가 \"사용하겠다\"는 의사를 표시하면 15분 후 자동으로 \"사용 완료\"로 전환하는 시스템을 만드는 것입니다. 그리고 그 15분 안에 중복 사용을 막는 경험 기반 보안을 설계하는 것이었습니다.",
        contentEn: "Multi-Store Usage Possibility\n\nWhen a user redeems a voucher at Store A, it's recorded in the store POS. However, the Gift Shop system can't retrieve that data in real-time. In the app, it still shows \"available\" status. Travel time between stores in Bangkok is 20-30 minutes. If a user quickly moves to Store B, they could use the same voucher again.\n\nManual Recording Loopholes\n\nIn stores without POS, staff manually record in notebooks or apps, then reconcile at closing time. Staff could miss records, and verification was impossible in real-time or even same-day. The potential for organized abuse was very high.\n\nScreenshot Sharing Possibility\n\nActivated voucher codes could be screenshotted and shared via LINE. Without animation, staff couldn't distinguish real vouchers from fake ones. This problem could occur in all stores regardless of POS availability.\n\nOther Alternatives Considered\n\nWe considered GPS-based store arrival notifications or location-based auto-activation. However, integrating location data from Thai store partners was impossible. Real-time location tracking had privacy issues. Contracts with 100+ brand partners were already complete, and we had 6 months to launch. We needed a solution that worked with existing infrastructure.\n\nWe needed a solution that could block all three risks. The direction was clear. Create a system that automatically transitions to \"used complete\" 15 minutes after the user indicates intent to use. And design experience-based security to prevent duplicate usage within those 15 minutes.",
      },
      {
        id: "solution-design",
        group: "Launch 1",
        label: "솔루션 설계",
        labelEn: "Solution Design",
        headline: "경험 기반 3단계 보안 디자인",
        headlineEn: "3-Layer Experience-Based Security Design",
        content: "두 가지 매장 유형 모두에서 작동하는 해결책이 필요했습니다. 핵심 아이디어는 간단했습니다. 사용자가 \"사용하겠다\"는 의사를 표시하면 시스템이 15분 후 자동으로 \"사용 완료\"로 전환합니다.\n\n15분 시간 제한 : 다중 매장 사용 방지\n\n사용자가 리딤 버튼을 누르면 시스템이 15분 후 자동으로 사용 완료 처리합니다. 왜 15분일까요?\n\n방콕의 매장 간 이동 시간은 보통 20-30분입니다. 15분은 이동 시간보다 짧아 다중 매장 어뷰징을 막을 수 있습니다. 동시에 매장 내에서 바우처를 사용하기에 충분한 시간입니다. 10분은 붐비는 시간대에 너무 촉박했고, 20분은 어뷰징 위험이 있었습니다. 두 제약 조건 사이의 최적점이었습니다.\n\nPOS가 없는 매장에도 효과적이었습니다. 직원이 수기로 기록하기 전에 시스템에서 이미 사용 완료 처리가 됩니다. 기록을 누락하거나 조작할 여지가 없어집니다.\n\n동적 워터마크 : 스크린샷 공유 방지\n\n우리는 바우처 화면에 3초마다 변하는 애니메이션 워터마크를 추가했습니다. 스크린샷은 정지 이미지이기 때문에 직원이 한눈에 진짜와 가짜를 구별할 수 있습니다. 바코드 스캔 기능은 문제없이 작동합니다.\n\n리딤 시각 표시 : 수기 기록 허점 보완\n\n우리는 정확한 리딤 시각을 화면에 크게 표시했습니다. 직원이 \"15분 안에 리딤됐는지\" 육안으로 확인할 수 있습니다. POS가 없는 매장에서 특히 중요했습니다. 수기로 기록할 때 시각 정보가 필요했기 때문입니다.\n\n세 가지 단계가 합쳐져 완전한 보안 시스템이 되었습니다. 다중 매장 어뷰징은 0건이었습니다. 스크린샷 공유는 차단에 성공했습니다. 자동 완료 시스템은 원활하게 작동했습니다. POS 유무와 관계없이 모든 매장에서 작동했습니다.",
        contentEn: "We needed a solution that worked for both store types. The core idea was simple. When a user indicates intent to use, the system automatically transitions to \"used complete\" after 15 minutes.\n\n15-Minute Time Limit: Preventing Multi-Store Usage\n\nWhen a user presses the redeem button, the system automatically processes completion after 15 minutes. Why 15 minutes?\n\nTravel time between stores in Bangkok is typically 20-30 minutes. 15 minutes is shorter than travel time, preventing multi-store abuse. Simultaneously, it's sufficient time to use the voucher in-store. 10 minutes was too tight during busy hours, and 20 minutes had abuse risks. It was the optimal point between two constraints.\n\nIt was also effective for stores without POS. The system already processes completion before staff manually record. There's no room to miss or manipulate records.\n\nDynamic Watermark: Preventing Screenshot Sharing\n\nWe added an animated watermark to the voucher screen that changes every 3 seconds. Since screenshots are static images, staff can distinguish real from fake at a glance. Barcode scanning functionality works without issues.\n\nRedemption Time Display: Supplementing Manual Recording Loopholes\n\nWe displayed the exact redemption time prominently on screen. Staff can visually verify \"redeemed within 15 minutes\". This was especially important for stores without POS. Time information was needed when recording manually.\n\nThe three layers combined into a complete security system. Multi-store abuse was 0 cases. Screenshot sharing was successfully blocked. The auto-complete system worked smoothly. It worked in all stores regardless of POS availability.",
      },
      {
        id: "launch-1",
        group: "Launch 1",
        label: "런칭",
        labelEn: "Launch",
        headline: "태국 시장 출시 (2025년 4월)",
        headlineEn: "Thailand Market Launch (April 2025)",
        content: "문제 1을 해결하면서 태국 시장 로컬라이제이션을 성공적으로 완료했습니다. 출시 버전에는 15분 자동 완료 시스템, 동적 워터마크, 리딤 시각 표시가 포함되었습니다. \"15분 후 사용 불가\" 팝업도 함께 출시되었습니다.\n\n매장 운영 준비\n\n100개 이상 브랜드 파트너를 대상으로 매장 운영 가이드라인과 체크리스트를 마련했습니다. 직원들이 LINE Gift 바코드를 받았을 때 확인해야 할 사항을 정리했습니다. 리딤 시각 확인, 워터마크 움직임 확인, 바코드 스캔 절차가 포함되었습니다. POS가 없는 매장을 위한 수기 기록 방법도 포함했습니다.\n\n출시 결과는 성공적이었습니다. 어뷰징은 0건이었습니다. POS 없이도 안정적으로 운영되었습니다. 출시 후 현지 방문에서 매장 직원들이 체크리스트를 잘 활용하고 있음을 확인했습니다.",
        contentEn: "While solving Problem 1, we successfully completed Thailand market localization. The launch version included the 15-minute auto-complete system, dynamic watermark, and redemption time display. The \"unusable after 15 minutes\" popup also launched.\n\nStore Operations Preparation\n\nWe established store operation guidelines and checklists for 100+ brand partners. We organized what staff should check when receiving LINE Gift barcodes. This included verifying redemption time, checking watermark movement, and barcode scanning procedures. We also included manual recording methods for stores without POS.\n\nThe launch result was successful. Abuse was 0 cases. It operated stably without POS. Post-launch local visits confirmed store staff were using checklists well.",
      },
      {
        id: "impact-1",
        group: "Launch 1",
        label: "임팩트",
        labelEn: "Impact",
        headline: "인프라 투자 없이 안정적 시장 출시 달성",
        headlineEn: "Achieving Stable Market Entry Without Infrastructure Investment",
        content: "15분 자동 완료 시스템과 경험 기반 보안 설계로 다중 매장 어뷰징 0건을 달성했습니다. 동적 워터마크가 스크린샷 공유를 차단했고, 리딤 시각 표시가 수기 기록 허점을 보완했습니다. POS 시스템 유무와 관계없이 모든 매장에서 안정적으로 작동했습니다.\n\n100개 이상 브랜드 파트너를 대상으로 매장 운영 가이드라인을 마련했습니다. 출시 후 현지 방문에서 매장 직원들이 체크리스트를 잘 활용하고 있음을 확인했습니다. 실시간 POS 연동이라는 인프라 투자 없이 태국 시장 출시에 성공했습니다.\n\n이 프레임워크는 베트남과 인도네시아 출시에 재사용 가능합니다. POS 시스템이 제한적인 시장에서 경험 기반 보안으로 문제를 해결하는 접근법이 검증되었습니다.",
        contentEn: "With the 15-minute auto-complete system and experience-based security design, we achieved 0 multi-store abuse cases. Dynamic watermarks blocked screenshot sharing, and redemption time display supplemented manual recording loopholes. It worked stably in all stores regardless of POS system availability.\n\nWe established store operation guidelines for 100+ brand partners. Post-launch local visits confirmed store staff were using checklists well. We succeeded in Thailand market entry without the infrastructure investment of real-time POS integration.\n\nThis framework is reusable for Vietnam and Indonesia launches. The approach of solving problems with experience-based security in markets with limited POS systems has been validated.",
      },
      {
        id: "problem-discovery-2",
        group: "Launch 2",
        label: "문제 발견",
        labelEn: "Problem Discovery",
        headline: "91건 CS 케이스로 발견한 사용자 문제",
        headlineEn: "User Problems Discovered Through 91 CS Cases",
        content: "2025년 4월 출시는 성공적이었습니다. 어뷰징 0건, 스크린샷 차단 성공, 자동 완료 시스템이 안정적으로 작동했습니다. 보안 시스템은 완벽했습니다.\n\n하지만 7-9월 동안 91건의 CS 케이스가 발생했습니다. \"매장 가기 전에 눌렀어요\", \"시간 제한 몰랐어요\", \"가는 길에 만료됐어요\"라는 문의가 계속 들어왔습니다. 사용자들이 매장 방문 전에 미리 바우처를 리딤하고, 가는 길에 15분이 지나 만료되는 패턴이었습니다.\n\n출시 후 현지를 방문해서 두 가지를 확인했습니다. 첫째는 매장 운영이 잘 되고 있는지였습니다. 직원들이 체크리스트를 잘 활용하고 있었고, 어뷰징은 0건을 유지하고 있었습니다. 둘째는 사용자들이 실제로 어떻게 사용하는지였습니다. 사용자들을 직접 관찰한 결과, 두 가지 근본 문제를 발견했습니다.\n\n\"행동 성공 ≠ 인지 성공\"의 역설\n\n원격 테스트(Maze)에서 놀라운 결과가 나왔습니다. 행동 성공률은 100%였습니다. 모든 사용자가 플로우를 완료했습니다. 하지만 인지 성공률은 30%에 불과했습니다. 평균 22.3초 만에 빠르게 완료했지만, 70%가 시간 제한 정보를 놓쳤습니다.\n\n\"몰랐음\" 50%, \"기억 안남\" 20%. 사용자들은 중요한 정보를 읽지 않고 습관적으로 클릭했습니다. 겉보기엔 성공이지만 실제로는 매장에서 예상치 못한 코드 소멸을 경험할 위험이 있었습니다.",
        contentEn: "The April 2025 launch was successful. 0 abuse cases, successful screenshot blocking, auto-complete system worked stably. The security system was perfect.\n\nHowever, 91 CS cases occurred during July-September. Inquiries like \"I pressed it before going to the store\", \"I didn't know about the time limit\", \"It expired on the way\" kept coming. Users redeemed vouchers before visiting stores, and they expired during the 15-minute journey.\n\nWe visited locally post-launch to check two things. First, whether store operations were going well. Staff were using checklists well, and abuse remained at 0 cases. Second, how users actually used it. Direct user observation revealed two root problems.\n\nThe Paradox of \"Behavioral Success ≠ Cognitive Success\"\n\nRemote testing (Maze) showed surprising results. Behavioral success rate was 100%. All users completed the flow. But cognitive success rate was only 30%. They completed quickly in an average of 22.3 seconds, but 70% missed time limit information.\n\n\"Didn't know\" 50%, \"Don't remember\" 20%. Users habitually clicked without reading important information. Seemingly successful but actually at risk of experiencing unexpected code expiration at stores.",
      },
      {
        id: "problem-analysis-2",
        group: "Launch 2",
        label: "문제 분석",
        labelEn: "Problem Analysis",
        headline: "두 가지 근본 문제 정의",
        headlineEn: "Defining Two Root Problems",
        content: "문제 1: 팝업 UX writing 실패\n\n팝업에 \"15분 후 사용 불가\" 정보는 있었습니다. 하지만 \"매장 도착 15분 전에 리딤하세요\"가 명확하지 않았습니다. 사용자들은 \"언제 리딤해야 하는지\"를 이해하지 못했습니다.\n\n문제 2: 팝업 전 맥락 부족\n\n사용자들은 팝업이 나오기 전까지 선물 유형을 알 수 없었습니다. 이게 매장 바우처인지 배송 선물인지 구분이 어려웠습니다. 선물을 받고 흥분한 상태에서 사용자들은 바로 리딤 버튼을 눌렀습니다. 팝업이 나왔을 때는 이미 늦었습니다.\n\n결과적으로 사용자들은 가게 가기 전에 미리 리딤했습니다. 가는 길에 15분이 만료되었습니다. 7월 1일에 버튼 문구만 변경해봤지만 CS 케이스는 계속 발생했습니다. 두 가지가 모두 필요했습니다. 팝업 UX writing을 개선해야 했고, 팝업 전 페이지에서 \"매장 바우처\" 힌트를 제공해야 했습니다.",
        contentEn: "Problem 1: Popup UX Writing Failure\n\nThe popup had \"unusable after 15 minutes\" information. However, \"redeem 15 minutes before arriving at store\" wasn't clear. Users didn't understand \"when to redeem\".\n\nProblem 2: Lack of Context Before Popup\n\nUsers couldn't know the gift type until the popup appeared. It was difficult to distinguish whether this was a store voucher or delivery gift. In an excited state after receiving the gift, users immediately pressed the redeem button. When the popup appeared, it was already too late.\n\nConsequently, users redeemed before going to the store. 15 minutes expired on the way. We tried changing just the button text on July 1st, but CS cases continued. Both were needed. We had to improve popup UX writing and provide \"store voucher\" hints on the pre-popup page.",
      },
      {
        id: "user-testing",
        group: "Launch 2",
        label: "사용자 테스트",
        labelEn: "User Testing",
        headline: "105명 UT로 두 가지 방향 검증",
        headlineEn: "Validating Two Directions with 105 Participants UT",
        content: "두 가지 문제 중 무엇이 더 중요한지 찾기 위해 대규모 테스트를 진행했습니다.\n\n초기에는 여러 접근을 스케치했습니다. 팝업 위치 변경, 튜토리얼 강화, 아이콘 추가, 바텀시트, 인라인 경고 등을 탐색했습니다. 내부 리뷰와 빠른 프로토타입 테스트를 거쳐 두 가지 핵심 방향으로 좁혔습니다. 디자인 A는 \"팝업 UX writing 개선\"에, 디자인 B는 \"리딤 전 맥락 제공\"에 집중했습니다.\n\n디자인 A: 팝업 UX writing 개선\n\n기존 위치를 유지하되 UX writing을 명확하게 바꾸는 방법입니다. \"매장 도착 15분 전에 리딤하세요\"로 직접적으로 안내합니다. 중앙 팝업으로 눈에 띄게 만들었습니다.\n\n디자인 B: 리딤 전 페이지 개선\n\n이 방법은 선물 상세 화면에 바텀시트를 추가하는 것입니다. 두 가지 정보를 제공합니다. 첫째는 \"매장 바우처\"라는 선물 유형입니다. 둘째는 \"매장 도착 15분 전 리딤\"이라는 행동 지침입니다. 사용자가 자연스럽게 스크롤하며 학습할 수 있습니다.\n\n105명을 대상으로 원격 테스트(Maze)를 진행했습니다. 39명은 현재 디자인을 경험했습니다. 34명은 디자인 A를 경험했습니다. 32명은 디자인 B를 경험했습니다. 시간 제한 인지, 선물 유형 명확성, 정보 발견 시점, 실수 클릭률을 측정했습니다.",
        contentEn: "We conducted large-scale testing to find which of the two problems was more important.\n\nInitially, we sketched multiple approaches. We explored popup position changes, tutorial enhancement, icon additions, bottom sheets, inline warnings. Through internal reviews and rapid prototype testing, we narrowed to two core directions. Design A focused on \"popup UX writing improvement\", Design B on \"pre-redemption context provision\".\n\nDesign A: Popup UX Writing Improvement\n\nThis method maintains the existing position but changes UX writing clearly. It directly guides with \"redeem 15 minutes before arriving at store\". We made it noticeable as a center popup.\n\nDesign B: Pre-Redemption Page Improvement\n\nThis method adds a bottom sheet to the gift details screen. It provides two pieces of information. First is the gift type \"store voucher\". Second is the action guidance \"redeem 15 minutes before arriving at store\". Users can learn naturally while scrolling.\n\nWe conducted remote testing (Maze) with 105 participants. 39 experienced the current design. 34 experienced Design A. 32 experienced Design B. We measured time limit awareness, gift type clarity, information discovery timing, and misclick rate.",
      },
      {
        id: "solution-implementation",
        group: "Launch 2",
        label: "솔루션 구현",
        labelEn: "Solution Implementation",
        headline: "디자인 B 선택 및 런칭",
        headlineEn: "Selecting and Launching Design B",
        content: "105명 원격 테스트(Maze) 결과를 분석했습니다.\n\n디자인 A는 시간 인지율 100%를 달성했습니다. \"매장 도착 15분 전 리딤\"으로 명확하게 개선한 효과였습니다. 하지만 문제가 남아있었습니다. 이 디자인은 여전히 리딤 \"후\"에 정보를 보여줍니다. 맥락 없이 갑자기 팝업이 뜨니 사용자는 오류처럼 느꼈습니다. 선물 유형도 여전히 불명확했습니다.\n\n디자인 B는 시간 인지율 90%를 기록했습니다. 10% 낮지만 더 중요한 장점이 있었습니다. 디자인 B는 선물 상세 화면에서 먼저 \"매장 바우처\"임을 알려줍니다. 그 다음 \"매장 도착 15분 전 리딤\"을 안내합니다. 사용자는 자연스럽게 스크롤하며 학습합니다. 선물 유형 명확성은 100%를 달성했습니다. 실수 클릭은 11%에서 7%로 감소했습니다.\n\n\"의도적 마찰\"의 효과\n\n디자인 B는 체류 시간을 9.5초 증가시켰습니다(22.3초 → 31.8초). 더 느려졌지만, 시간 인지율이 58%p 향상되었습니다(30% → 88%). 사용자들이 정보를 의식적으로 처리하기 시작했습니다.\n\n인지 시점도 체계화되었습니다. 63%가 선물 상세 화면에서, 25%가 QR코드에서, 13%가 팝업에서 시간 제한을 인지했습니다. \"몰랐음\" 응답은 0%로 완전히 제거되었습니다. 15분 후 결과 이해도는 10%에서 100%로 향상되었습니다.\n\n디자인 A는 UX writing만 개선했습니다. 맥락 부족은 해결하지 못했습니다. 디자인 B는 맥락과 행동 지침을 모두 제공했습니다. 10% 인지 차이보다 전체 흐름이 더 중요했습니다. 디자인 B를 선택했습니다.\n\n2025년 12월에 디자인 B를 런칭했습니다. 시간 인지는 67%에서 90%로 향상되었습니다. 선물 유형 명확성은 97%에서 100%가 되었습니다. 실수 클릭은 11%에서 7%로 감소했습니다. CS 케이스는 91건에서 지속적으로 감소했습니다.",
        contentEn: "We analyzed 105-participant remote testing (Maze) results.\n\nDesign A achieved 100% time awareness rate. This was the effect of clearly improving to \"redeem 15 minutes before arriving at store\". However, problems remained. This design still shows information after redemption. The popup appearing suddenly without context felt like an error to users. Gift type was still unclear.\n\nDesign B recorded 90% time awareness rate. 10% lower, but there were more important advantages. Design B first informs \"store voucher\" on the gift details screen. Then guides \"redeem 15 minutes before arriving at store\". Users learn naturally while scrolling. Gift type clarity achieved 100%. Misclicks decreased from 11% to 7%.\n\nThe Effect of \"Intentional Friction\"\n\nDesign B increased dwell time by 9.5 seconds (22.3s → 31.8s). It became slower, but time awareness improved by 58%p (30% → 88%). Users started consciously processing information.\n\nRecognition timing also became systematic. 63% recognized time limits on the gift details screen, 25% at QR code, 13% at popup. \"Didn't know\" responses were completely eliminated to 0%. Understanding of 15-minute consequence improved from 10% to 100%.\n\nDesign A only improved UX writing. It didn't solve lack of context. Design B provided both context and action guidance. The overall flow was more important than the 10% awareness difference. We chose Design B.\n\nWe launched Design B in December 2025. Time awareness improved from 67% to 90%. Gift type clarity went from 97% to 100%. Misclicks decreased from 11% to 7%. CS cases continuously decreased from 91 cases.",
      },
      {
        id: "impact-2",
        group: "Launch 2",
        label: "임팩트",
        labelEn: "Impact",
        headline: "리딤 전 정보 제공으로 사용자 행동 개선",
        headlineEn: "Improving User Behavior Through Pre-Redemption Information",
        content: "디자인 B 런칭으로 시간 제한 인지율이 67%에서 90%로 향상되었습니다. 선물 유형 명확성은 100%를 달성했고, 실수 클릭은 11%에서 7%로 감소했습니다. 7-9월 발생한 91건의 CS 케이스가 지속적으로 감소했습니다.\n\n리딤 \"후\" 팝업에서 리딤 \"전\" 바텀시트로 정보 제공 시점을 변경한 것이 핵심이었습니다. 사용자들은 선물 상세 화면에서 먼저 매장 바우처임을 인지하고, 매장 도착 15분 전 리딤이라는 행동 지침을 자연스럽게 학습했습니다.\n\n리딤 완료율 92%는 15분 자동 완료 시스템이 안정적으로 작동하고 있음을 보여줍니다. 월별 모니터링 결과 시간 인지율은 90% 수준에서 일관되게 유지되고 있습니다. 좋은 리딤 경험을 한 사용자가 다음번에 선물을 구매하는 사람으로 전환됩니다. 리딤 완료자의 구매 전환율 데이터는 현재 수집 중입니다.",
        contentEn: "Design B launch improved time limit awareness from 67% to 90%. Gift type clarity achieved 100%, and misclicks decreased from 11% to 7%. The 91 CS cases from July-September continuously decreased.\n\nThe key was changing information provision timing from post-redemption popup to pre-redemption bottom sheet. Users first recognized it was a store voucher on the gift details screen and naturally learned the action guidance to redeem 15 minutes before arriving at store.\n\nThe 92% redemption completion rate shows the 15-minute auto-complete system is working stably. Monthly monitoring shows time awareness consistently maintains at 90% level. Users who have good redemption experiences convert to gift purchasers next time. Redemption completer purchase conversion rate data is currently being collected.",
      },
      {
        id: "impact-overall",
        label: "전체 임팩트",
        labelEn: "Impact - Overall",
        headline: "두 번의 런칭으로 달성한 안정적 리딤 경험",
        headlineEn: "Stable Redemption Experience Achieved Through Two Launches",
        content: "2025년 4월 런칭으로 어뷰징 0건을 달성하며 태국 시장에 안정적으로 진입했습니다. 100개 이상 브랜드 파트너가 POS 유무와 관계없이 바우처 시스템을 운영하고 있습니다. 인프라 투자 없이 시장 출시에 성공했습니다.\n\n2025년 12월 런칭으로 사용자 행동이 개선되었습니다. 시간 인지율이 67%에서 90%로 향상되었고, CS 케이스가 91건에서 지속적으로 감소했습니다. 리딤 완료율 92%가 안정적으로 유지되고 있습니다.\n\n좋은 리딤 경험이 선물 판매를 만듭니다. 선물을 받은 사람이 매장에서 좋은 경험을 하면 그 사람이 다음번에 선물을 주는 사람이 됩니다. 리딤 완료자의 선물 구매 전환율과 미완료자 대비 증가폭은 현재 측정 중입니다. 데이터 확보 시 히어로 헤드라인에 반영할 예정입니다.\n\n태국에서 검증한 로컬라이제이션 프레임워크는 베트남과 인도네시아 출시에 재사용됩니다. 각 시장의 인프라 제약을 경험 기반 보안으로 해결하는 접근법이 핵심입니다.\n\n다음 과제는 Giftbox에서 리딤으로의 전환율 27.61% 개선입니다. 사용자들이 선물은 보지만 리딤을 주저합니다. 리딤 전 신뢰 구축이 다음 목표입니다.",
        contentEn: "The April 2025 launch achieved 0 abuse cases, stably entering the Thailand market. 100+ brand partners operate the voucher system regardless of POS availability. We succeeded in market entry without infrastructure investment.\n\nThe December 2025 launch improved user behavior. Time awareness improved from 67% to 90%, and CS cases continuously decreased from 91 cases. Redemption completion rate 92% is stably maintained.\n\nGood redemption experience creates gift sales. When gift recipients have good experiences at stores, they become gift senders next time. Redemption completer gift purchase conversion rate and increase versus non-completers is currently being measured. Data will be reflected in hero headline when secured.\n\nThe localization framework validated in Thailand will be reused for Vietnam and Indonesia launches. The approach of solving each market's infrastructure constraints with experience-based security is the core.\n\nThe next challenge is improving Giftbox to redemption conversion rate 27.61%. Users view gifts but hesitate to redeem. Building trust pre-redemption is the next goal.",
      },
      {
        id: "continuous-improvement",
        label: "지속적 개선",
        labelEn: "Continuous Improvement",
        headline: "지속적 개선",
        headlineEn: "Ongoing Refinement",
        content: "디자인 B를 12월에 런칭한 이후 시간 인지율이 90%로 안정화되었습니다. CS 케이스도 91건에서 지속적으로 감소하고 있습니다.\n\n현재 퍼널 분석 결과, Giftbox에서 리딤으로의 전환율 27%가 병목입니다. 리딤을 시작한 사용자의 92%가 완료하므로 15분 자동 완료 시스템은 잘 작동합니다. 진짜 문제는 리딤 전 신뢰입니다. 2026년 1분기에는 인터랙티브 튜토리얼, 리딤 전 미리보기, 매장 위치 찾기, \"나중에 사용\" 예약 기능을 계획하고 있습니다.",
        contentEn: "After launching Design B in December, time awareness stabilized at 90%. CS cases also continuously decreased from 91 cases.\n\nCurrent funnel analysis shows 27% Giftbox to redemption conversion rate is the bottleneck. Since 92% of users who start redemption complete, the 15-minute auto-complete system works well. The real problem is trust before redemption. For Q1 2026, we're planning interactive tutorials, pre-redemption preview, store location finder, and \"save for later\" scheduling features.",
      },
      {
        id: "reflection",
        label: "회고",
        labelEn: "Reflection",
        headline: "실패에서 배운 것",
        headlineEn: "Learned from Failures",
        content: "모든 시도가 성공한 것은 아닙니다. 첫 번째 실패는 \"사용법\" 버튼이었습니다. 도움말 버튼을 추가했지만 사용자는 클릭하지 않았습니다. 도움말은 인라인이어야 한다는 것을 배웠습니다.\n\n두 번째 실패는 강제 튜토리얼이었습니다. 튜토리얼을 필수로 만들었지만 사용자는 읽지 않고 클릭했습니다. 게이트키핑이 아닌 참여가 필요했습니다. 세 번째 실패는 버튼 텍스트만 변경한 것이었습니다. \"바우처 사용\"을 \"지금 바로 사용하시겠습니까?\"로 바꿨지만 CS는 계속 발생했습니다. 버튼보다 맥락이 중요했습니다.\n\n\"빠른 완료 = 좋은 UX\"의 착각\n\n가장 중요한 통찰은 \"빠른 완료가 성공이 아니다\"였습니다. 현재 버전은 평균 22.3초로 빠르게 완료되었습니다. 직관적 디자인이라고 생각했습니다. 하지만 실제로는 70%가 중요한 정보를 놓치고 습관적으로 클릭한 것이었습니다. 행동 성공률 100% 뒤에 인지 성공률 30%라는 위험한 격차가 숨어있었습니다.\n\n개선안은 9.5초 느려졌습니다(22.3초 → 31.8초). 하지만 시간 인지율은 58%p 향상되었습니다(30% → 88%). 적절한 마찰이 오히려 사용자 경험을 개선했습니다. 우리는 100% 인지 (디자인 A)보다 90% 인지 (디자인 B)를 선택했습니다. 실수 클릭 감소(11%→7%)가 이 결정을 검증했습니다. 한 시장의 성공 지표는 다른 시장으로 자동 번역되지 않습니다.\n\n다르게 했을 것\n\n출시 전 매장 관찰 1회로는 충분하지 않았습니다. 태국 사용자는 대만 사용자보다 더 신중했는데, 이런 문화적 차이를 측정하고 디자인했어야 했습니다.\n\n잘 작동한 것\n\n현지 프로덕트 팀과의 긴밀한 협업과 출시 후 현지 방문이 결정적이었습니다. 출시 전에는 현지 팀으로부터 매장 환경 스펙을 전달받아 어뷰징 가능성을 파악했습니다. 출시 후에는 현지를 방문하여 매장 운영을 검증하고 사용자 문제를 발견했습니다.\n\n105명의 태국 사용자 테스트가 대만 테스트로는 결코 보여주지 않았을 행동을 드러냈습니다. 신뢰, 주의, 의사결정의 문화적 차이였습니다. 로컬라이제이션은 번역이 아닙니다. 로컬 현실에 맞춘 재설계입니다. 이 프레임워크가 이제 베트남과 인도네시아 출시를 안내합니다.",
        contentEn: "Not all attempts succeeded. The first failure was the \"how to use\" button. We added a help button, but users didn't click it. We learned help must be inline.\n\nThe second failure was mandatory tutorials. We made tutorials required, but users clicked without reading. Engagement was needed, not gatekeeping. The third failure was changing only button text. We changed \"use voucher\" to \"do you want to use now?\", but CS continued. Context was more important than buttons.\n\nThe Fallacy of \"Quick Completion = Good UX\"\n\nThe most important insight was \"quick completion isn't success\". The current version completed quickly in an average of 22.3 seconds. We thought it was intuitive design. But actually 70% missed important information and clicked habitually. Behind the 100% behavioral success rate was a dangerous gap of 30% cognitive success rate.\n\nThe improvement became 9.5 seconds slower (22.3s → 31.8s). However, time awareness improved by 58%p (30% → 88%). Appropriate friction actually improved user experience. We chose 90% awareness (Design B) over 100% awareness (Design A). Misclick reduction (11%→7%) validated this decision. One market's success metrics don't automatically translate to another market.\n\nWhat We'd Do Differently\n\nOne pre-launch store observation wasn't enough. Thai users were more cautious than Taiwan users, and we should have measured and designed for these cultural differences.\n\nWhat Worked Well\n\nClose collaboration with local product team and post-launch local visits were decisive. Pre-launch, we received store environment specs from the local team and identified abuse possibilities. Post-launch, we visited locally to verify store operations and discover user problems.\n\nTesting with 105 Thai users revealed behaviors Taiwan testing would never show. Cultural differences in trust, caution, and decision-making. Localization isn't translation. It's redesign fitted to local reality. This framework now guides Vietnam and Indonesia launches.",
      },
      {
        id: "next-steps",
        label: "다음 단계",
        labelEn: "Next Steps",
        headline: "2026년 계획: 리딤 전 신뢰 구축",
        headlineEn: "2026 Plan: Building Pre-Redemption Trust",
        content: "Giftbox에서 리딤으로의 전환율 27.61%는 다음 로컬라이제이션 과제를 드러냅니다. 태국 사용자는 15분 리딤에 전념하기 전 대만 사용자와 다른 신뢰 구축 메커니즘이 필요합니다.\n\n2026년 1분기에는 태국 사용자의 학습 패턴에 맞춘 인터랙티브 튜토리얼을 계획하고 있습니다. 번역된 대만 콘텐츠가 아닌 태국 맥락에 최적화된 경험입니다. 리딤 전 미리보기 기능으로 사용자들이 전념하지 않고도 무슨 일이 일어나는지 볼 수 있게 합니다. 태국 사용자의 더 높은 주의를 해결하는 방법입니다.\n\n매장 위치 찾기 통합도 추가할 예정입니다. 태국 사용자는 리딤 전 매장 위치 확인을 원합니다. 대만 사용자에게는 필요 없었던 기능입니다. \"나중에 저장\" 예약 기능으로 태국 사용자가 즉흥적 리딤보다 미리 계획할 수 있게 합니다.\n\n태국의 로컬라이제이션 접근 방식이 이제 베트남과 인도네시아의 LINE Gift Shop 출시를 안내합니다. 유사한 인프라 과제가 존재하는 시장들입니다. 각 시장은 번역된 태국 경험이 아닌 자체적으로 로컬 최적화된 경험을 얻을 것입니다.\n\n로컬라이제이션은 일회성 적응이 아닙니다. 로컬 사용자가 원래 시장과 어떻게 다르게 생각하고, 행동하고, 결정을 내리는지 지속적으로 이해하는 것입니다.",
        contentEn: "The 27.61% Giftbox to redemption conversion rate reveals the next localization challenge. Thai users need different trust-building mechanisms than Taiwan users before committing to the 15-minute redemption.\n\nFor Q1 2026, we're planning interactive tutorials tailored to Thai user learning patterns. Experience optimized for Thai context, not translated Taiwan content. Pre-redemption preview feature lets users see what happens without committing. This addresses Thai users' higher caution.\n\nWe'll also add store location finder integration. Thai users want to verify store locations before redemption. This was unnecessary for Taiwan users. \"Save for later\" scheduling feature lets Thai users plan ahead rather than impulse redeem.\n\nThailand's localization approach now guides LINE Gift Shop launches in Vietnam and Indonesia. Markets with similar infrastructure challenges. Each market will get its own locally optimized experience, not a translated Thai experience.\n\nLocalization isn't one-time adaptation. It's continuously understanding how local users think, behave, and make decisions differently from the original market.",
      },
    ],
    team: [
      { role: "Product Designer", members: ["Heejin Yoon 🇰🇷", "Haeji 🇹🇭"] },
      { role: "Product Manager", members: ["Ta 🇹🇭"] },
      { role: "Product Owner", members: ["Yeonji Kim 🇰🇷", "Boreum Kim 🇰🇷"] },
    ],
    nextProject: { title: "Wishlist Optimization", slug: "wishlist-optimization" },
  },
  {
    slug: "bunker-kids",
    title: "Bunker Kids",
    company: "Bunker Kids",
    role: "Co-founder & Designer",
    period: "2022",
    category: "Kids Fashion",
    country: "🇰🇷 Korea",
    impact: "Launched MVP and acquired 2,000 early users",
    impactKo: "MVP 런칭 후 초기 사용자 2,000명 확보",
    cover: "/images/Frame 2085666081.png",
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
    country: "🇰🇷 Korea",
    impact: "Social commerce feature drove 28% of total revenue",
    impactKo: "소셜 커머스 기능이 전체 매출의 28%를 견인",
    cover: "/images/Frame 2085666081.png",
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
        { id: "gift-voucher-localization", name: "Gift voucher localization" },
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
