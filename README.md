# Sami Harb — Portfolio

Personal portfolio built with React 19, Vite, Tailwind CSS 4 and Motion. Deployed to GitHub Pages: https://tibu345.github.io/Portfolio/

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build    # production build in dist/
```

## Editing content

All content lives in [`src/data/`](src/data/):

- `profile.ts` — name, contact details, social links, resume URL, nav items
- `projects.ts` — featured and other projects
- `experience.ts` — timeline entries
- `skills.ts` — skills, languages, strengths, services

## Structure

```
src/
  components/
    layout/    Navbar, Footer, scroll progress, back-to-top, cursor
    sections/  One component per page section
    ui/        Shared primitives (Section, SectionHeader, Reveal, Button)
  data/        Site content
  hooks/       Reusable hooks
  lib/         Utilities and shared motion variants
  types/       Shared TypeScript types
```
