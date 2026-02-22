# Contact Section

**Component:** `components/sections/Contact.tsx`  
**Data:** `lib/data.ts` → `contactData`

---

## Layout

Contact lives in two places:

### 1. Sidebar (primary)
Links listed under a `"Contact"` label at the bottom of the sidebar.
```
✉  Email        ↗
in LinkedIn     ↗
𝕏  X            ↗
```

### 2. Main page footer (optional)
A minimal closing line at the bottom of the page:
```
Want to work together?  →  hello@yourname.com
```

---

## Content to Fill In

```ts
// lib/data.ts

export const contactData = {
  email: "hello@yourname.com",
  linkedin: "https://linkedin.com/in/yourhandle",
  twitter: "https://x.com/yourhandle",
  // Add more if needed:
  // github: "https://github.com/yourhandle",
  // read_cv: "https://read.cv/yourhandle",
}
```

---

## Design Notes

### Sidebar Links
- Each link has a small **platform icon** on the left (use `lucide-react` or simple SVG)
  - Email → `Mail` icon
  - LinkedIn → custom SVG or text "in"
  - X → custom SVG or text "𝕏"
- External links show `↗` icon on the right
- Link style: `text-[#888888]` default, `text-[#111111]` on hover
- `target="_blank" rel="noopener noreferrer"` on all external links

### Footer CTA (optional)
- One line: `"Get in touch"` or `"Want to work together?"`
- Followed by the email as a styled `mailto:` link
- Centered or left-aligned, `text-sm`, minimal

---

## Privacy Note
The email address will be visible in the HTML source.
If you want to obscure it from scrapers, encode it as HTML entities or use a contact form instead.
For a simple portfolio this is usually fine.
