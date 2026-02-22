# Portfolio — CLAUDE.md

This is the master context file for my personal portfolio site.
Always read this file before making any changes.

---

## Who This Portfolio Is For

**Owner:** 10년차 Product Designer
**Purpose:** 이직 / 취업 (Senior / Lead / Staff 포지션 타겟)
**Audience:** 채용 담당자, 디자인 리드, 헤드헌터

**핵심 포지셔닝:**
- B2C 프로덕트 (앱/웹) 경험
- 디자인 시스템 / 플랫폼 설계 경험
- 0→1 스타트업 경험
- 시니어 레벨 = 의사결정과 트레이드오프를 보여주는 것이 핵심

---

## Project Overview

A clean, minimal **light mode** personal portfolio website for a Product Designer.
Sidebar navigation + content area layout. Clean. No clutter. Every element earns its place.
Supports **KR/EN language toggle** for content (titles, body text). UI labels stay in English.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| Fonts | Poppins (latin), Pretendard (Korean, CDN) |
| Icons | lucide-react |
| Deployment | Vercel |

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout (LocaleProvider + Sidebar + content)
│   ├── page.tsx                # Home (Grid > Col > Hero)
│   ├── globals.css             # CSS vars + Tailwind
│   ├── about/page.tsx          # About page (intro, philosophy, experience, etc.)
│   ├── interface-lab/page.tsx  # Interface Lab page
│   └── work/[slug]/page.tsx    # Case study page (server component)
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx         # Fixed sidebar nav + KR/EN toggle
│   │   └── Grid.tsx            # 12-column grid system
│   ├── sections/
│   │   └── Hero.tsx            # Hero section (locale-aware)
│   ├── case-study/
│   │   ├── CaseStudyContent.tsx    # Client wrapper (locale branching)
│   │   ├── PasswordGate.tsx        # NDA password gate
│   │   ├── ProjectNavigation.tsx   # Prev/Next navigation
│   │   └── TeamCredits.tsx         # Team credits
│   └── ui/
├── lib/
│   ├── data.ts                 # All content data + types (heroData, aboutData, experienceData, caseStudies, sidebarData)
│   └── locale-context.tsx      # LocaleProvider + useLocale hook
├── doc/
│   └── sections/               # Content specs per page
└── public/
    └── images/
```

---

## Design System

### Color Palette — Apple Grayscale

```css
/* Light Mode only. Never dark mode. */

--bg:           #FFFFFF;   /* page background */
--bg-secondary: #F2F2F7;   /* Gray 6 */
--bg-hover:     #E5E5EA;   /* Gray 5 */
--border:       #D1D1D6;   /* Gray 4 */
--text:         #1C1C1E;   /* Label / primary text */
--text-muted:   #8E8E93;   /* Gray */
--text-dim:     #AEAEB2;   /* Gray 2 */
--accent:       #007AFF;   /* links, active states */
```

Additional colors:
- Sidebar bg: `#F7F7FA`
- Badge bg: `#EBEBF0`
- Menu default: `#48484A`, active: `#1C1C1E` on `bg-white`
- Submenu unselected: `#AEAEB2`, selected border-l: `#1C1C1E`

### Typography

```
Body / UI      : "Poppins" (Google Fonts) — weight 300, 400, 500, 600
Korean fallback: "Pretendard Variable" (CDN) — for Korean text rendering
```

Font size scale:
- Hero title: `text-2xl` font-semibold, Poppins
- Section label: `text-[10.5px]` uppercase tracking-widest text-dim
- Body: `text-[13.5px]` leading-relaxed
- Meta / small: `text-xs` or `text-[12px]`

### Spacing & Layout

- Sidebar width: `w-[250px]` fixed
- Main content: `ml-[250px]`
- Case study max-width: `max-w-[800px]` (within `max-w-[1400px] px-[80px]`)
- Section gap: `gap-12`

### Border Radius

- Cards: `rounded-lg`
- Tags / pills: `rounded-md`
- Avatar: `rounded-full`

---

## i18n System (KR/EN)

### Architecture
- `lib/locale-context.tsx`: React Context API (`LocaleProvider` + `useLocale()`)
- State: `"ko" | "en"`, default `"en"`, persisted to `localStorage`
- Sidebar bottom: KR/EN segment control toggle

### Translation Scope
- **Translated (content only):** Hero headline/bio/location, case study impact/section labels/headlines/body, About page positioning/philosophy/interests/education/languages
- **NOT translated (English fixed):** Menu names, section labels (Experience, Education, etc.), UI labels, button text, navigation text

### Data Structure
- `heroData`: `headline`/`headlineKo`, `bio`/`bioKo`, `location`/`locationKo`
- `aboutData`: `positioning`/`positioningEn`, `philosophy`/`philosophyEn`, `interests`/`interestsEn`, etc.
- `experienceData`: Array of `Experience` objects (company, role, period, description, highlights, tags)
- `CaseStudy`: `impact`/`impactKo`
- `CaseStudySection`: `label`/`labelEn`, `headline`/`headlineEn`, `content`/`contentEn`
- Korean is the base language; English fields are suffixed with `En`

---

## Page Structure

### Home (`/`)
Hero section with avatar, headline, bio, previous companies, location + time.

### About (`/about`)
Sections: Intro (avatar + name + role + positioning) → Philosophy → Interests (inline tags) → Experience (accordion with logo, company, role, period, description, highlights, tags) → Education + Languages (2-col grid) → Currently Exploring → Contact CTA.

### Work (`/work/[slug]`)
Case study pages with sections (Context, Constraints, Decision, Reflection), team credits, prev/next navigation. Some may have NDA password gate.

### Interface Lab (`/interface-lab`)
Design engineering experiments (coming soon).

---

## Component Conventions

### General Rules
- **Always use TypeScript.** Define props interfaces above the component.
- **No inline styles** except font-family on body.
- **Data lives in `lib/data.ts`.** Components receive data as props or read directly.
- **Keep components small.** Split if JSX exceeds ~60 lines.
- **Animations:** Subtle only. `transition-colors duration-150` for hovers.

### What NOT to do
- ❌ Dark mode, dark backgrounds
- ❌ Gradients
- ❌ Drop shadows heavier than `shadow-sm`
- ❌ Emojis in UI
- ❌ Rounded corners larger than `rounded-lg`
- ❌ `Inter` or `Roboto` fonts
- ❌ Translating menu/UI labels (keep English)
- ❌ Components with hardcoded content (use `lib/data.ts`)

---

## Content Guidelines

### General
- Korean is the base content language; English translations use `En` suffix
- Section labels always English, content toggles with KR/EN
- Experience descriptions focus on measurable outcomes
- Philosophy text uses `text-[14.5px] leading-[1.85]` for readability

### Case Study Writing Principles (시니어 포지셔닝)

10년차 시니어는 **"뭘 만들었나"가 아니라 "왜 이 결정을 했나"**를 보여줘야 함.

모든 케이스 스터디에 반드시 포함:
1. **Constraints** — 현실적 제약 (시간, 기술, 조직)
2. **Decision** — 왜 이 방향을 선택했나, 버린 대안은 무엇인가
3. **Trade-offs** — 무엇을 포기했나, 왜 그 선택이 옳았나
4. **Reflection** — 다시 한다면 무엇을 다르게 할 것인가

### Project Selection Criteria

총 3~4개만 선별. 많을수록 좋지 않음.

| 유형 | 개수 | 강조 포인트 |
|---|---|---|
| B2C 프로덕트 | 1~2개 | 유저 임팩트, 정량 지표 |
| 디자인 시스템 | 1개 | 시스템적 사고, 조직 설득 과정 |
| 0→1 스타트업 | 1개 | 전략적 판단, 오너십, 불확실성 대응 |

---

## Commands

```bash
# Dev server
npx next dev -p 3000

# Build
npx next build

# Note: --turbopack flag is NOT supported in this version
```
