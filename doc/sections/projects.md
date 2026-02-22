# Projects Section

**Component:** `components/sections/Projects.tsx`
**Data:** `lib/data.ts` → `projectsData`

---

## Layout

Two display modes — choose based on content density:

### Option A: Sidebar Navigation List (current reference style)
Projects listed in the sidebar under "Projects" label.
Clicking navigates to a detail view or scrolls to a project card on the main page.

### Option B: Card Grid (recommended for main page)
```
[Section label: "Projects"]

[Project card]  [Project card]
[Project card]  [Project card]
```

Each card:
```
[Cover image or placeholder]
[Project name]   [Tag: type]
[One-line description]
[Year]
```

---

## Content to Fill In

```ts
// lib/data.ts

export const projectsData = [
  {
    id: "x-twitter",
    name: "X (Twitter)",
    type: "Internship",         // tag label
    description: "Redesigned core surfaces across X Premium, Search, and Safety.",
    year: "2024",
    cover: "/images/projects/x-cover.png",
    url: null,                  // external URL, or null
    caseStudyAvailable: false,  // if true, link to /projects/[id]
  },
  {
    id: "handshake",
    name: "Handshake",
    type: "Internship",
    description: "Improved the job discovery and application flow for students.",
    year: "2025",
    cover: "/images/projects/handshake-cover.png",
    url: null,
    caseStudyAvailable: false,
  },
  {
    id: "forge",
    name: "Forge",
    type: "Side Project",
    description: "A tool for ...",
    year: "2024",
    cover: null,
    url: "https://...",
    caseStudyAvailable: false,
  },
  // Add more as needed
]
```

---

## Design Notes

- **Section label:** `"Projects"` — same label style as Experience section
- **Card background:** `bg-white border border-[#E5E5E5] rounded-lg`
- **Cover image:** `aspect-video` (16:9), `object-cover`, `rounded-t-lg`
  - If `cover` is null, show a `bg-[#F4F4F4]` placeholder with the project initial
- **Tag pill:** `bg-[#EFF6FF] text-[#2563EB] text-[11px] rounded-md px-2 py-0.5`
- **Card hover:** `shadow-sm` transition, subtle `translate-y-[-1px]`
- **Year:** `text-[#888888]` `DM Mono` right-aligned or below description
- **External link icon:** show `↗` icon if `url` is set, navigate on card click
- Grid: `grid grid-cols-2 gap-4` on desktop, `grid-cols-1` on mobile

---

## Sidebar Navigation Integration

The sidebar lists projects by name under the "Projects" label.
When a project is listed in the sidebar, clicking it:
1. Scrolls to the project card (same page), OR
2. Navigates to `/projects/[id]` (case study page)

For now, implement scroll-to behavior. Case study pages can be added later.
