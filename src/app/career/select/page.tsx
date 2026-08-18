import Link from "next/link";
import { ROUTES } from "@/constants";
import { CAREERS } from "@/lib/data/careers";

/** Manual career selection → straight to the skill assessment for the chosen career. */
export default function SelectCareerPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Career discovery
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Choose your career path
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Already know what you want? Pick a path and jump straight into its skill
          assessment.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {CAREERS.map((career) => (
          <Link
            key={career.id}
            href={ROUTES.assessment(career.id)}
            className="group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:bg-indigo-50/40"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
              {career.emoji}
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">{career.name}</h2>
            <p className="mt-1 text-sm font-medium text-brand">{career.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {career.description}
            </p>
            <p className="mt-4 text-sm font-medium text-brand">
              Start assessment →
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link href={ROUTES.questionnaire} className="text-sm text-slate-500 hover:text-slate-800">
          ← Not sure yet? Take the quiz
        </Link>
      </div>
    </main>
  );
}