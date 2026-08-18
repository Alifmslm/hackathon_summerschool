import Link from "next/link";
import { ROUTES } from "@/constants";

/**
 * Landing page (FE-owned). Entry point of the wizard:
 *   Career Choice → Questionnaire OR Manual Selection.
 */
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center px-6 py-20 text-center">
      <div className="grid w-full max-w-5xl items-center gap-4 lg:grid-cols-[auto_1fr_auto] lg:gap-6">
        <div className="hidden justify-self-end lg:block">
          <div
            className="hero-art animate-rise flex flex-col items-center"
            style={{ animationDelay: "80ms" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-1.webp"
              alt=""
              aria-hidden
              className="animate-float aspect-square w-44 rounded-3xl xl:w-52"
              draggable={false}
            />
            <p className="hero-note mt-2 whitespace-nowrap rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-dark shadow-sm backdrop-blur">
              Disha
            </p>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <span
            className="animate-rise mb-4 rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand-dark"
            style={{ animationDelay: "0ms" }}
          >
            IT Career Navigator
          </span>
          <h1
            className="animate-rise text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ animationDelay: "60ms" }}
          >
            Discover the IT career that fits you.
          </h1>
          <p
            className="animate-rise mt-5 max-w-xl text-lg text-slate-600"
            style={{ animationDelay: "120ms" }}
          >
            Understand your current skill level, find your biggest skill gaps, and get
            practical projects to help you grow toward the career you want.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Link
              href={ROUTES.questionnaire}
              className="rounded-lg bg-brand px-6 py-3 font-medium text-white shadow-sm transition"
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
        </div>

        <div className="hidden justify-self-start lg:block">
          <div
            className="hero-art animate-rise flex flex-col items-center"
            style={{ animationDelay: "140ms" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-2.webp"
              alt=""
              aria-hidden
              className="animate-float-delayed aspect-square w-44 rounded-3xl xl:w-52"
              draggable={false}
            />
            <p className="hero-note mt-2 whitespace-nowrap rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-dark shadow-sm backdrop-blur">
              Odys
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}