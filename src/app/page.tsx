import Link from "next/link";
import { ROUTES } from "@/constants";

/**
 * Landing page (FE-owned). Entry point of the wizard:
 *   Career Choice → Questionnaire OR Manual Selection.
 */
export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
      <span className="mb-4 rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand-dark">
        IT Career Navigator
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Discover the IT career that fits you.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-slate-600">
        Understand your current skill level, find your biggest skill gaps, and get
        practical projects to help you grow toward the career you want.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href={ROUTES.questionnaire}
          className="rounded-lg bg-brand px-6 py-3 font-medium text-white shadow-sm transition hover:bg-brand-dark"
        >
          Take the career quiz
        </Link>
        <Link
          href={ROUTES.selectCareer}
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-secondary transition"
        >
          I already know my path
        </Link>
      </div>
    </main>
  );
}
