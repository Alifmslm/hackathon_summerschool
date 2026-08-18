## Why

IT Career Navigator needs a working end-to-end MVP by the end of the hackathon: a student should be able to go from "I don't know what IT career fits me" to "here's a project I can build to close my skill gap," fully clickable, for both of the two career paths in scope (AI Engineer and UI/UX Designer). Right now the repo has only docs (`README.md`, `PROJECT_GUIDE.md`) — no code, no shared type contract, no data. This change defines that contract and sequences the build so two people (backend/AI-engineer-path owner and frontend/UI-UX-path owner) can work in parallel without blocking each other or clobbering each other's files.

## What Changes

- Establish the shared type contract (`types/index.ts`) and Zod request/response validators first, before either person writes page or route code.
- Build the shared backend engine, owned by the backend/questionnaire owner:
  - Career-matching: a fixed (non-AI), deterministic rule-based scoring function over questionnaire answers, producing a recommended career + match % + alternatives.
  - Skill-gap detection: a fixed, deterministic current-vs-target skill comparison per career path.
  - Project recommendation: **AI-assisted** generation (not fixed/templated) — given a user's skill gaps, call an LLM to generate a project description, skills-to-practice, and core/technical requirements. The call must be provider-agnostic (swap API key/provider via config), targeting Gemini 3.1 Flash as the initial provider.
  - PDF export of the generated project guide.
- Build career-path domain data as two independent file sets so the two path owners never edit the same file:
  - `lib/data/assessment-questions/ai-engineer.ts`, and AI Engineer entries in `careers.ts` — owned by the backend/AI-engineer-path owner.
  - `lib/data/assessment-questions/uiux.ts`, and UI/UX Designer entries in `careers.ts` — owned by the UI-UX-path owner.
  - Shared `questionnaire.ts` (career-discovery quiz) is co-owned/shared, authored by the backend/questionnaire owner, with weightings that touch both paths.
- Build the frontend flow (owned by the UI-UX-path owner): landing → questionnaire/manual-select → career result → skill assessment → skill gap view → project recommendation + PDF export, wired first against mock data shaped by `types/index.ts`, then swapped to real `fetch` calls.
- Validate one full round trip through each of the two career paths (not just one path) before calling the MVP done, since both paths are being built in parallel rather than sequentially.

## Capabilities

### New Capabilities
- `career-questionnaire`: career discovery quiz and manual career selection; deterministic scoring that maps quiz answers to a recommended career, match %, explanation, and alternatives.
- `skill-assessment`: per-career-path skill assessment questions and submission, producing a skill profile.
- `skill-gap-detection`: deterministic comparison of current vs. target skill levels for a selected career, ranked by gap size.
- `project-recommendation`: AI-assisted generation of a practice project (description, skills practiced, core requirements, technical requirements) from a user's skill gaps, via a provider-agnostic LLM call.
- `project-pdf-export`: exporting the generated project guide as a downloadable PDF.

### Modified Capabilities
(none — greenfield project, no existing specs)

## Impact

- Affected code: entire `src/` tree (does not yet exist) — `app/`, `app/api/*`, `lib/rules/*`, `lib/data/*`, `lib/pdf/*`, `lib/validators/*`, `types/index.ts`, `components/*`, `hooks/*`, `store/*`.
- New dependency: an LLM provider SDK/HTTP client for project generation (Gemini 3.1 Flash initially, via an env-configured API key), kept behind a provider-agnostic interface so the key/provider can be swapped without touching call sites.
- New dependency: a PDF generation library for `lib/pdf/generate-project-guide.ts`.
- No existing users or data — no migration or breaking-change concerns.
