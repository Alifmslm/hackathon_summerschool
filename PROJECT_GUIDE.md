# IT Career Navigator — Project Structure

This document describes the folder structure of the project and how ownership is split between the two contributors: **Frontend (FE)** and **Backend (BE — rules & API)**.

The project is built as a single Next.js app (App Router), so both sides share one codebase but work in clearly separated folders to avoid conflicts.

---

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **API layer:** Next.js Route Handlers (`app/api/*`)

---

## Folder Structure

```
it-career-navigator/
├── src/
│   ├── app/
│   │   ├── page.tsx                        # Landing page
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── career/
│   │   │   ├── questionnaire/page.tsx      # Career discovery quiz
│   │   │   ├── select/page.tsx             # Manual career selection
│   │   │   └── result/page.tsx             # Recommended career + match %
│   │   │
│   │   ├── assessment/[career]/page.tsx    # Skill assessment per career
│   │   ├── skill-gap/page.tsx              # Skill gap visualization
│   │   ├── project/page.tsx                # Project recommendation + PDF export
│   │   │
│   │   └── api/                            # Route handlers
│   │       ├── career/
│   │       │   ├── recommend/route.ts      # Score quiz answers → career match
│   │       │   └── list/route.ts
│   │       ├── assessment/
│   │       │   ├── [career]/route.ts       # Fetch assessment questions
│   │       │   └── submit/route.ts         # Submit answers → skill score
│   │       ├── skill-gap/route.ts          # Calculate current vs target skill
│   │       ├── project/
│   │       │   ├── recommend/route.ts      # Generate project from skill gap
│   │       │   └── pdf/route.ts            # Generate PDF project guide
│   │       └── ...
│   │
│   ├── components/
│   │   ├── ui/                             # Reusable primitives (Button, ProgressBar, Card...)
│   │   ├── career/                         # QuestionnaireForm, CareerResultCard
│   │   ├── assessment/                     # AssessmentForm, QuestionCard
│   │   ├── skill-gap/                      # SkillGapChart, GapList
│   │   └── project/                        # ProjectCard, RequirementChecklist
│   │
│   ├── hooks/                              # useQuestionnaire, useAssessment, etc.
│   ├── store/                              # Wizard flow state (Context/Zustand)
│   │
│   ├── lib/
│   │   ├── rules/
│   │   │   ├── career-matching.ts          # Scoring algorithm: quiz → career
│   │   │   ├── skill-gap.ts                # Skill gap calculation logic
│   │   │   └── project-recommendation.ts   # Maps skill gaps → project template
│   │   ├── data/
│   │   │   ├── careers.ts                  # Career path definitions + required skills
│   │   │   ├── questionnaire.ts            # Quiz questions + weighting
│   │   │   ├── assessment-questions/
│   │   │   │   ├── uiux.ts
│   │   │   │   └── ai-engineer.ts
│   │   │   └── projects.ts                 # Project templates per skill gap
│   │   ├── pdf/
│   │   │   └── generate-project-guide.ts   # PDF generation logic
│   │   └── validators/                     # Zod schemas for API request/response
│   │
│   ├── types/
│   │   └── index.ts                        # Career, SkillProfile, Question, Project, etc.
│   │
│   └── constants/
│
├── public/
├── .env.local
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## Ownership

### Frontend (FE)
Owns everything related to UI, layout, and client-side state:

- `app/**/page.tsx` — every screen in the user flow (questionnaire, assessment, skill gap, project)
- `app/layout.tsx`, `app/globals.css`
- `components/` — all UI pieces, from shared primitives to feature-specific components
- `hooks/` — custom hooks for consuming API data and managing UI state
- `store/` — client-side state for the multi-step wizard flow

### Backend (BE — rules & API)
Owns the logic and data behind every result the user sees:

- `app/api/*` — all route handlers (career matching, assessment, skill gap, project, PDF)
- `lib/rules/` — the actual scoring/matching/recommendation algorithms
- `lib/data/` — static definitions: career paths, questionnaire questions, assessment questions, project templates
- `lib/pdf/` — PDF generation for the project guide
- `lib/validators/` — request/response validation (Zod schemas)

### Shared
- `types/index.ts` — data shapes used by both sides (`Career`, `SkillProfile`, `Question`, `Project`, etc.)
- `constants/` — shared constant values (e.g. career path IDs, skill categories)

---

## Suggested Workflow

1. **Agree on `types/index.ts` first**, before writing any UI or API logic. This is the contract between FE and BE.
2. Once types are set, **FE and BE can work in parallel**:
   - FE builds the UI using mock data shaped like `lib/data/*`, without waiting for the real API.
   - BE focuses on the matching/scoring algorithms and wires up the route handlers.
3. Integrate by swapping FE's mock data calls for real `fetch` calls to `app/api/*`.
4. Keep API contracts (input/output shape) documented in `lib/validators/` so changes on either side are easy to spot.

---

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.
