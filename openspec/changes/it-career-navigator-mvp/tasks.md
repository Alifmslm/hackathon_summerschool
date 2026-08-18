## 1. Shared contract (blocks everything else — do this together, first)

- [ ] 1.1 Scaffold the Next.js app (App Router + TypeScript + Tailwind) per PROJECT_GUIDE.md folder structure
- [ ] 1.2 Agree and write `types/index.ts`: `Career`, `CareerId` (`"ai-engineer" | "uiux-designer"`), `QuizQuestion`, `QuizAnswer`, `SkillProfile`, `SkillGap`, `AssessmentQuestion`, `AssessmentSubmission`, `ProjectDraft`, `ProjectGuide`
- [ ] 1.3 Write `lib/validators/*`: Zod schemas for questionnaire submit, assessment submit, project-recommend request/response (including the LLM response shape), and PDF export request
- [ ] 1.4 Agree on API contracts for every route in the table below (request/response shape only, not implementation)

| Route | Owner |
|---|---|
| `POST /api/career/recommend` | Madhoo |
| `GET /api/career/list` | Madhoo |
| `GET /api/assessment/[career]` | Madhoo |
| `POST /api/assessment/submit` | Madhoo |
| `POST /api/skill-gap` | Madhoo |
| `POST /api/project/recommend` | Madhoo |
| `POST /api/project/pdf` | Madhoo |

## 2. Backend engine (Madhoo) — deterministic rules

- [ ] 2.1 Implement `lib/rules/career-matching.ts`: fixed weighted scoring, quiz answers → ranked career matches (per `career-questionnaire` spec)
- [ ] 2.2 Implement `lib/rules/skill-gap.ts`: fixed current-vs-target comparison, ranked biggest-gaps-first (per `skill-gap-detection` spec)
- [ ] 2.3 Wire `app/api/career/recommend/route.ts` and `app/api/career/list/route.ts`
- [ ] 2.4 Wire `app/api/assessment/[career]/route.ts` (serves questions) and `app/api/assessment/submit/route.ts` (produces skill profile)
- [ ] 2.5 Wire `app/api/skill-gap/route.ts`
- [ ] 2.6 Unit-test determinism: same inputs to career-matching and skill-gap always produce the same output

## 3. AI-assisted project recommendation (Madhoo)

- [ ] 3.1 Define the provider-agnostic interface (e.g. `generateProject(prompt): Promise<ProjectDraft>`) in `lib/rules/project-recommendation.ts`
- [ ] 3.2 Implement the Gemini 3.1 Flash adapter, reading provider/API key from env config (e.g. `AI_PROVIDER`, `AI_API_KEY`)
- [ ] 3.3 Validate the LLM's response against the Zod schema from 1.3; on failure or timeout, return an error (never pass through malformed/fabricated output)
- [ ] 3.4 Wire `app/api/project/recommend/route.ts`, taking ranked skill gaps + career as input
- [ ] 3.5 Manually verify: skills-practiced in the generated project include the user's top skill gaps, for both career paths

## 4. PDF export (Madhoo)

- [ ] 4.1 Choose and add a PDF generation library to `lib/pdf/generate-project-guide.ts`
- [ ] 4.2 Wire `app/api/project/pdf/route.ts`: generated project → downloadable PDF (title, description, skills, core + technical requirements as checklists)
- [ ] 4.3 Handle the "no generated project available" error case per spec

## 5. AI Engineer path domain data (Madhoo)

- [ ] 5.1 Add AI Engineer entries to `lib/data/careers.ts` (required skills + target levels)
- [ ] 5.2 Write `lib/data/assessment-questions/ai-engineer.ts` (questions tagged by skill: Python, Programming Fundamentals, Data Processing, ML Fundamentals, Model Development, APIs, AI/ML Tools)
- [ ] 5.3 Add AI Engineer's questionnaire weightings to `lib/data/questionnaire.ts`

## 6. UI/UX Designer path domain data (Alif)

- [ ] 6.1 Add UI/UX Designer entries to `lib/data/careers.ts` (required skills + target levels)
- [ ] 6.2 Write `lib/data/assessment-questions/uiux.ts` (questions tagged by skill: User Research, UX Design, Information Architecture, Wireframing, Prototyping, Usability Testing, Visual/UI Design)
- [ ] 6.3 Add UI/UX Designer's questionnaire weightings to `lib/data/questionnaire.ts`

## 7. Frontend flow (Alif) — build against mock data shaped by types/index.ts

- [ ] 7.1 Landing page (`app/page.tsx`) and layout/global styles
- [ ] 7.2 Career choice: questionnaire (`app/career/questionnaire/page.tsx`) and manual select (`app/career/select/page.tsx`)
- [ ] 7.3 Career result page (`app/career/result/page.tsx`): recommended career, match %, explanation, alternatives
- [ ] 7.4 Skill assessment page (`app/assessment/[career]/page.tsx`)
- [ ] 7.5 Skill gap visualization page (`app/skill-gap/page.tsx`): current vs target bars, biggest-gaps list
- [ ] 7.6 Project recommendation page (`app/project/page.tsx`): description, skills-to-practice, core + technical requirements, PDF export button
- [ ] 7.7 Wizard state (`store/`) carrying answers/career/skill-profile/gaps/project across steps
- [ ] 7.8 Shared UI primitives (`components/ui/`) and per-feature components (`components/career`, `components/assessment`, `components/skill-gap`, `components/project`)

## 8. Integration

- [ ] 8.1 Swap frontend mock-data calls for real `fetch` calls to `app/api/*` for both paths
- [ ] 8.2 End-to-end run: AI Engineer path, questionnaire route, full journey to PDF download
- [ ] 8.3 End-to-end run: AI Engineer path, manual-select route, full journey to PDF download
- [ ] 8.4 End-to-end run: UI/UX Designer path, questionnaire route, full journey to PDF download
- [ ] 8.5 End-to-end run: UI/UX Designer path, manual-select route, full journey to PDF download
- [ ] 8.6 Confirm error states from specs surface in the UI: incomplete questionnaire/assessment, unknown career id, LLM failure, PDF export without a generated project
