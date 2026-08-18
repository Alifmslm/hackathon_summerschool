# IT Career Navigator

IT Career Navigator is a web platform that helps IT students figure out which career path fits them, see where their skills stand today, find the gaps between their current skills and that career, and get a project to practice the skills they are missing.

## The problem

IT students face many possible career paths, such as UI/UX design, AI engineering, frontend development, and backend development. Most students do not know which path suits them, how prepared they already are, or which skills to focus on next.

Most career quizzes stop at telling the student "you are suited for this career." IT Career Navigator goes one step further and tells the student where they are now, what they are missing, and what they can build to close that gap.

## The idea

IT Career Navigator turns career exploration into a concrete plan. A student picks a career path, either by taking a short questionnaire or by choosing one directly. They then take a skill assessment for that career. The platform compares their scores against the skills that career needs and shows the specific gaps. For each gap, it recommends a project designed to help the student practice that skill, and the student can export the project as a PDF guide.

The flow is:

**Career discovery → Skill assessment → Skill gap detection → Project recommendation**

For the full breakdown of features, the career paths covered, the MVP scope, and the reasoning behind the product, see [PRODUCT.md](./PRODUCT.md).

For the codebase layout and how work is split between contributors, see [PROJECT_GUIDE.md](./PROJECT_GUIDE.md).

## Live demo

https://disha-tech.vercel.app

## Run locally

You need Node.js 18 or later.

1. Install dependencies.
   ```
   npm install
   ```
2. Start the dev server.
   ```
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Other commands:

- `npm run build`, to create a production build.
- `npm start`, to run the production build after `npm run build`.
- `npm run lint`, to run ESLint.

## Tech stack

**Frontend**
- Next.js 14 (App Router) / React 18
- TypeScript
- Tailwind CSS

**Backend / Data**
- Next.js Route Handlers (`src/app/api/*`)
- Rule-based matching and scoring in `src/lib/rules/` (career matching, skill gap, project recommendation), driven by static data in `src/lib/data/`, no database
- Zod for request and response validation (`src/lib/validators/`)

**PDF generation**
- pdfkit (`src/lib/pdf/generate-project-guide.ts`)

## Project status

Hackathon MVP, in development. See [PRODUCT.md](./PRODUCT.md#mvp-scope) for what is done and what is planned.

## Team

Built as a one-day hackathon project by a team focused on creating practical tools for IT students.
