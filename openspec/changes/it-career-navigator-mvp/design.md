## Context

Two-person team, one-day hackathon, one Next.js (App Router) codebase. Madhoo owns backend (`app/api/*`, `lib/rules/*`, `lib/pdf/*`, `lib/validators/*`), the shared questionnaire, and the AI Engineer career path's domain content. Alif owns the frontend (`app/**/page.tsx`, `components/*`, `hooks/*`, `store/*`) and the UI/UX Designer career path's domain content. See proposal.md for the "why." Both career paths are built end-to-end in the same session, not sequentially, so the design has to let each person work without touching the other's files.

## Goals / Non-Goals

**Goals:**
- One shared type/validator contract, agreed before either person writes page or route code.
- Career-path domain data (`assessment-questions/*.ts`, per-career entries) fully separated by file so Madhoo and Alif never edit the same data file.
- Career matching and skill-gap detection are fixed, deterministic, testable functions — no LLM involved.
- Project recommendation ships in two versions behind the same call site. Version 1 is a deterministic function that scores fixed project templates against the user's gaps and picks the best match. Version 2 replaces the template scoring with a call to an LLM provider (Gemini 3.1 Flash), swappable through configuration.
- Both career paths reach a fully clickable end-to-end state (questionnaire/select → assessment → gap → project → PDF) before the hackathon ends.

**Non-Goals:**
- A third career path (explicitly deferred per README's "Possible Extension").
- Progress tracking, project completion tracking, or skill reassessment (deferred).
- Authentication/accounts — the flow is stateless/session-based for the hackathon.
- Fine-tuning or prompt-optimizing the LLM output beyond "good enough to demo."

## Decisions

**Career matching and skill-gap as pure functions, not API-only logic.** `lib/rules/career-matching.ts` and `lib/rules/skill-gap.ts` are plain deterministic functions (input → output, no I/O), wrapped by thin route handlers. Alternative considered: computing scores client-side in the questionnaire component — rejected because the spec requires the same answers to always produce the same result regardless of client, and keeping the logic server-side keeps weighting/target data out of the client bundle.

**Deterministic template matching ships as v1, and the LLM version is the next task.** `lib/rules/project-recommendation.ts` scores the fixed `PROJECT_TEMPLATES` list against the user's ranked skill gaps, weighted by gap size, and returns the best match. This is v1. Calling an LLM (Gemini 3.1 Flash) was the original plan, but the hackathon's time pressure and the risk of an unavailable API key or quota made the deterministic version safer to ship first. The next task swaps `project-recommendation.ts` for an LLM call, through a small internal interface (e.g. `generateProject(prompt): Promise<ProjectDraft>`) with one implementation file per provider (`lib/ai/gemini.ts` first), reading the provider and API key from env vars (e.g. `AI_PROVIDER`, `AI_API_KEY`). The call site and output shape stay the same, so nothing downstream of `project-recommendation.ts` needs to change.

**Career-path data split by file, not by folder-per-owner.** Keep the existing `PROJECT_GUIDE.md` layout (`lib/data/assessment-questions/ai-engineer.ts`, `lib/data/assessment-questions/uiux.ts`) rather than introducing owner-named folders. `careers.ts` and `questionnaire.ts` hold entries for both paths in one file each — Madhoo and Alif add their path's entries as additive array items, which keeps merge conflicts to "two people appended near the same line" rather than structural conflicts.

**Frontend built against mocked data shaped by `types/index.ts` first.** Alif does not wait on Madhoo's route handlers; UI/UX pages consume mock data matching the agreed types, then swap to real `fetch` calls once routes exist. This is the project's own suggested workflow (PROJECT_GUIDE.md) and is preserved here.

**PDF generation kept server-side, one route.** `app/api/project/pdf/route.ts` takes a generated project payload and returns a PDF. Alternative considered: client-side PDF generation (e.g. via a browser library) — rejected only for time reasons; either works, but server-side keeps the PDF layout logic in one place Madhoo owns alongside project generation.

## Risks / Trade-offs

- **Two people extending shared files (`careers.ts`, `questionnaire.ts`) concurrently** → Mitigate by keeping each path's entries as clearly delimited, independently-appendable array items (e.g. grouped by career id) and committing/pulling frequently during the hackathon.
- **Deterministic weighting for career-matching, skill-gap, and project-recommendation v1 is hand-tuned under time pressure and may feel arbitrary.** This is acceptable for the hackathon MVP. The spec only requires determinism and testability, not calibration accuracy.
- **Gemini API key or quota may be unavailable when the LLM version (v2) is built.** Mitigate by keeping the provider swap trivial through an env var, so a fallback provider or a cached example response can stand in.
- **The LLM's response may not match the expected shape (missing or malformed fields).** Mitigate with a Zod schema that validates the LLM response in `lib/validators/`. On a validation failure, return an error, per the "LLM call fails" scenario, instead of passing through bad data.
- **PDF export currently returns print-ready HTML, not a binary PDF.** The spec still requires a real PDF, and no PDF library has been chosen yet. This is tracked as an open, unimplemented task (see tasks.md 4.1).

## Open Questions

- Exact quiz weighting formula and skill target levels per career. Left to the backend/questionnaire owner to define as data (`lib/data/questionnaire.ts`, `lib/data/careers.ts`) during implementation. This does not change the spec or the task breakdown.
- Exact Gemini prompt wording for project generation (v2). Left to implementation. The spec only constrains the output shape and traceability to skill gaps, not the prompt content.
- Which PDF generation library to adopt for `lib/pdf/generate-project-guide.ts`. Left to implementation. The spec only constrains the exported content, not the library.
