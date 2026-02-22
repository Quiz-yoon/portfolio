# Work Experience Section

**Component:** `components/sections/WorkExperience.tsx`
**Data:** `lib/data.ts` → `experienceData`

---

## Layout

```
[Section label: "Team"]

[Company logo]  [Company name]  [Role]         [Year/Period]
[Company logo]  [Company name]  [Role]         [Year/Period]
...

↓ Clicking a row expands an accordion detail below it
```

Each row is a horizontal strip. On click, it expands to show:
- Role title (bold)
- Short description paragraph
- Optionally: tags for skills/tools used

---

## Content to Fill In

```ts
// lib/data.ts

export const experienceData = [
  {
    id: "stealth",
    company: "Stealth",
    role: "Product Designer",
    period: "Present",
    logo: null,                    // null = show a "?" placeholder icon
    description: "Working on an unannounced product.",
    tags: [],
  },
  {
    id: "handshake",
    company: "Handshake",
    role: "Product Design Intern",
    period: "2025",
    logo: "/images/logos/handshake.png",
    description: "...",
    tags: ["Figma", "Design Systems", "Mobile"],
  },
  {
    id: "x",
    company: "X (Twitter)",
    role: "Product Design Intern",
    period: "2024",
    logo: "/images/logos/x.png",
    description: "X's first-ever & only design intern hire; was one of 3 product designers company-wide. Designed for initiatives across X Premium, Search, Safety, Ads, etc.",
    tags: ["Figma", "Prototyping"],
  },
  {
    id: "mckinley",
    company: "McKinley Rice",
    role: "Product Designer & Developer",
    period: "2020–2021",
    logo: "/images/logos/mckinley.png",
    description: "...",
    tags: [],
  },
]
```

---

## Design Notes

- **Section label** (`"Team"`) uses the standard section label style: `text-[10.5px] uppercase tracking-widest text-[#BBBBBB]`
- **Company logo** is 20×20px, `rounded-sm`, shown inside a 28×28px container with `bg-[#F4F4F4]` background
- If logo is `null`, show a `?` icon with the same container style
- **Row hover:** `bg-[#EEEEEE] rounded-md` transition on the full row
- **Period** is right-aligned, `text-[#888888]`, uses `DM Mono` font for monospaced number alignment
- **Accordion animation:** `max-height` transition from `0` to `auto` (use a ref-based approach or a library like `framer-motion` if already installed)
- Expanded row shows `border-b border-[#E5E5E5]` at the bottom, same as collapsed

---

## Logo Files

Place all company logos in `public/images/logos/`:
- `handshake.png`
- `x.png`
- `mckinley.png`

Prefer square PNGs with transparent background, sized at least 40×40px.
