"use client";

import Link from "next/link";
import { ROUTES } from "@/constants";
import { ScoreRing } from "@/components/ui/ScoreRing";

/** Demo skill-gap result screen (Step 3). Mock data, no animation, demo-ready. */
const CAREER_NAME = "UI/UX Designer";
const READINESS = 47;
const SUBTEXT = "Measured across 7 skill areas against the level this role expects.";

type Row = { name: string; current: number; target: number };

// Sorted biggest gap → smallest.
const ROWS: Row[] = [
  { name: "Wireframing", current: 3, target: 75 },
  { name: "UX Design", current: 22, target: 80 },
  { name: "Usability Testing", current: 25, target: 70 },
  { name: "Prototyping", current: 35, target: 75 },
  { name: "Visual / UI Design", current: 48, target: 80 },
  { name: "Information Architecture", current: 50, target: 70 },
  { name: "User Research", current: 65, target: 75 },
];

const CRITICAL: Row[] = ROWS.slice(0, 3);

export default function SkillGapPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Skill gap
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Here's where you stand
        </h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        {/* Left panel */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-5">
              <ScoreRing value={READINESS} size={96} />
              <div>
                <h2 className="text-lg font-bold leading-tight text-slate-900">
                  {CAREER_NAME}
                </h2>
                <p className="text-sm font-semibold text-brand">Readiness Score</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{SUBTEXT}</p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Your Biggest Skill Gaps
            </p>
            <ul className="mt-4 space-y-3">
              {CRITICAL.map((g) => (
                <li
                  key={g.name}
                  className="rounded-xl border border-red-200 bg-red-50/60 p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800">{g.name}</p>
                    <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Critical
                    </span>
                  </div>
                  <p className="mt-1 text-xs tabular-nums text-slate-600">
                    Current {g.current}% → Target {g.target}%
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right panel */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Core Competency Gap Analysis
          </p>
          <div className="mt-5 space-y-6">
            {ROWS.map((r) => {
              const gap = r.target - r.current;
              return (
                <div key={r.name}>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-medium text-slate-800">{r.name}</p>
                    <span className="text-xs font-bold uppercase tracking-wide text-red-600">
                      {gap}% gap
                    </span>
                  </div>
                  <div className="relative mt-2 h-3.5 w-full overflow-hidden rounded-full bg-slate-200">
                    {/* target (pink/red overlay = the gap) */}
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-red-300/80"
                      style={{ width: `${r.target}%` }}
                    />
                    {/* current (blue bar on top) */}
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-brand"
                      style={{ width: `${r.current}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs tabular-nums text-slate-500">
                    Current {r.current}% / Target {r.target}%
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Bottom actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={ROUTES.project}
          className="rounded-lg bg-brand px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition duration-150 ease-out hover:bg-brand-dark active:scale-[0.98]"
        >
          Get a project that closes these gaps
        </Link>
        <Link
          href={ROUTES.assessment("uiux")}
          className="rounded-lg border border-secondary bg-white px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-secondary transition duration-150 ease-out hover:bg-secondary/10 active:scale-[0.98]"
        >
          Retake assessment
        </Link>
      </div>
    </main>
  );
}