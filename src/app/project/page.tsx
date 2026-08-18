import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/Button";

/**
 * Project brief (Step 4) — FE demo with dummy data.
 * Two-column requirements (core + technical), skills checklist, and the PDF /
 * gap-analysis actions. Rendered statically; wire up /api/project/recommend
 * and /api/project/pdf when integrating with the backend.
 */
const PROJECT = {
  role: "UI/UX Designer",
  tag: "CURATED_BRIEF / ROLE_01",
  title: "Redesign and Test a Student Dashboard",
  description:
    "Design and prototype a student productivity dashboard that helps students manage assignments, deadlines and study schedules. The project focuses on applying usability testing to find real problems in the experience and iterating on the design based on what you observe.",
  skills: ["Usability Testing", "UX Design", "Interaction Design", "Prototyping", "Wireframing"],
  coreRequirements: [
    "Users can see upcoming assignments ordered by deadline.",
    "Users can add, edit and complete tasks.",
    "Users can filter tasks by course and by deadline.",
    "The interface gives clear feedback after every action.",
    "Run the prototype with at least 3 students and log every point of confusion.",
  ],
  technicalRequirements: [
    "Build a clickable prototype with interactive states, not static screens.",
    "Produce low-fidelity wireframes before any visual design.",
    "Document a test script with 4 tasks and success criteria.",
    "Record findings in a table: issue, severity, proposed fix.",
    "Ship a second iteration that resolves the two highest-severity issues.",
  ],
};

export default function ProjectPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Project brief for {PROJECT.role}
        </h1>
        <div className="flex gap-3">
          <Button variant="secondary" className="uppercase">
            Curated brief
          </Button>
          <Button className="uppercase">Generate with AI</Button>
        </div>
      </header>

      <article className="mt-8 rounded-2xl bg-slate-900 p-6 text-white shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {PROJECT.tag}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">{PROJECT.title}</h2>
        <p className="mt-4 leading-relaxed text-slate-300">{PROJECT.description}</p>

        <section className="mt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Skills you&apos;ll practice
          </h3>
          <div className="mt-3 grid gap-1 sm:grid-cols-2">
            {PROJECT.skills.map((skill) => (
              <p key={skill} className="text-sm text-slate-200">
                – {skill}
              </p>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Core requirements
            </h3>
            <ul className="mt-3 space-y-2.5">
              {PROJECT.coreRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <span aria-hidden className="mt-0.5 text-slate-500">
                    ☐
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Technical requirements
            </h3>
            <ul className="mt-3 space-y-2.5">
              {PROJECT.technicalRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <span aria-hidden className="mt-0.5 text-slate-500">
                    ☐
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button className="uppercase">Export project guide (PDF)</Button>
          <a
            href={ROUTES.skillGap}
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium uppercase text-slate-200 transition duration-150 ease-out hover:border-slate-400 hover:text-white active:scale-[0.98]"
          >
            Back to gap analysis
          </a>
        </div>
      </article>
    </main>
  );
}