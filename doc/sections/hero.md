# Hero Section

**Component:** `components/sections/Hero.tsx`
**Data:** `lib/data.ts` → `heroData`

---

## Layout

```
[Avatar image]
[Name / headline title]
[Short bio — 1–2 lines]
[Prev. companies — bold inline links]
[Meta row: location · local time]
```

The hero sits at the very top of the main content area, no section label needed.
It should feel like a calm, confident introduction — not a flashy banner.

---

## Content to Fill In

```ts
// lib/data.ts

export const heroData = {
  name: "Your Name",
  headline: "Product designer with focus on craft and detailed execution.",
  bio: "I design and build digital products & visual interfaces — Welcome to my small corner of web.",
  previousCompanies: ["X (Twitter)", "Handshake"],   // shown as "Prev. X (Twitter), Handshake"
  location: "Los Angeles, California",
  // localTime is computed dynamically — no need to hardcode
}
```

---

## Design Notes

- **Headline** uses `Poppins` font-semibold
- **Avatar** is a circular `<Image>` component, 48×48px — place photo in `public/images/avatar.jpg`
- **"Prev."** label is `text-muted`, company names are `text-primary font-medium`
- **Location + time** row uses a small pin icon and clock icon (use `lucide-react` — `MapPin`, `Clock`)
- Local time should update every minute using `useEffect` + `setInterval`

---

## Accessibility

- Avatar `<Image>` must have descriptive `alt` text
- Headline is an `<h1>`, the only `h1` on the page
