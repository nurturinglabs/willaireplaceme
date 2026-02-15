# WillAIReplace.me

AI automation risk assessment for 75+ professions — built with Claude.

Search your job title, get a task-by-task breakdown of what AI can (and can't) automate, salary comparisons vs AI cost, company threat tracking, timeline projections, and actionable skill recommendations.

## Features

- **75+ profession profiles** with detailed AI automation risk scores
- **Task-level breakdown** — each core task scored individually with automation %, status, and relevant AI tools
- **Salary vs AI cost** — side-by-side comparison (US & India) against Claude Pro at $200/mo
- **Company threat tracker** — real companies building AI that impacts each role
- **Timeline projections** — NOW / NEAR-TERM / LONG-TERM automation phases
- **Skill recommendations** — what to learn to stay ahead
- **Shareable report cards** — download as image or share directly to X/Twitter with viral copy
- **Dynamic OG images** — auto-generated preview cards for every role page

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **OG Images:** `next/og` (Edge Runtime)
- **Image Export:** html2canvas

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Built for Vercel — just connect your repo and deploy.

**Optional:** Set `NEXT_PUBLIC_SITE_URL` in your Vercel environment variables to your custom domain (e.g. `https://willaireplace.me`). Without it, the app uses the Vercel-assigned URL automatically.

## Project Structure

```
app/
  page.tsx              # Home — search + role grid
  [slug]/
    page.tsx            # Role detail page (SSG for 75 roles)
    RolePageClient.tsx  # Client component with all sections
    opengraph-image.tsx # Dynamic OG image (Edge Runtime)
  not-found.tsx         # 404 page
components/
  Navigation.tsx        # Fixed nav with share button
  SearchInput.tsx       # Autocomplete search
  themes/dark/          # All UI components (Gauge, TaskBar, etc.)
data/
  roles/roles-data.json # All 75 role profiles
  roles-index.ts        # Lightweight index for search + grid
lib/
  types.ts              # Types, helpers, color utilities
```

## How Scores Are Calculated

Each profession is broken down into its core tasks. Every task is scored on automation potential (0-100%) based on current AI capabilities, with status labels:

| Score | Status | Meaning |
|-------|--------|---------|
| 70%+  | Critical | High automation risk — AI can handle most of this now |
| 40-69% | Elevated | Partial automation — AI assists but humans still needed |
| <40%  | Stable | Low risk — requires human judgment, creativity, or physical presence |

The overall score is a weighted average across all tasks for that role.

## License

MIT
