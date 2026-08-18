"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { SkillGap } from "@/types";
import { ROUTES } from "@/constants";
import { skillDescription } from "@/lib/data/careers";
import { ScoreRing } from "@/components/ui/ScoreRing";

/** Skill-gap result screen (Step 3). Reads the stashed assessment result. */

interface StashedResult {
  careerId: string;
  careerName: string;
  overall: number;
  gaps: SkillGap[];
}

const BADGE: Record<SkillGap["severity"], { className: string; label: string }> = {
  high: { className: "bg-red-600", label: "Critical" },
  medium: { className: "bg-secondary", label: "Worth improving" },
  low: { className: "bg-emerald-500", label: "On track" },
};

/** Short line summarising the user's level for one topic vs its target. */
function levelNote(current: number, target: number): string {
  const diff = current - target;
  if (diff >= 15) return "You're comfortably above this role's target. Keep it up.";
  if (diff >= 0) return "You're right at the level this role expects.";
  if (diff >= -15) return "Slightly below target — a small push will close this.";
  if (diff >= -35) return "Below target — worth making this a development priority.";
  return "Well below target — a key skill to build up.";
}

type ScoreLevel = "beginner" | "intermediate" | "advanced";

const LEVELS: Record<ScoreLevel, { label: string; className: string; color: string }> = {
  beginner: {
    label: "Beginner",
    className: "bg-red-100 text-red-700",
    color: "#ef4444",
  },
  intermediate: {
    label: "Intermediate",
    className: "bg-amber-100 text-amber-700",
    color: "#f59e0b",
  },
  advanced: {
    label: "Advanced",
    className: "bg-emerald-100 text-emerald-700",
    color: "#10b981",
  },
};

/** Map an overall readiness score (0–100) to one of three levels. */
function scoreLevel(overall: number): ScoreLevel {
  if (overall >= 80) return "advanced";
  if (overall >= 50) return "intermediate";
  return "beginner";
}

export default function SkillGapPage() {
  const [result, setResult] = useState<StashedResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("skillGapResult");
      if (raw) setResult(JSON.parse(raw));
    } catch {
      setResult(null);
    }
    setLoading(false);
  }, []);

  const data = loading ? null : result;

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

      {data === null ? (
        loading ? (
          <p className="text-sm text-slate-500">Loading…</p>
        ) : (
          <AssessmentPrompt />
        )
      ) : (
        <GapDashboard result={data} />
      )}
    </main>
  );
}

/** Shown when /skill-gap is opened before an assessment has been completed. */
function AssessmentPrompt() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-3xl">📋</p>
      <h2 className="mt-3 text-lg font-bold text-slate-900">Assessment required</h2>
      <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
        You haven&apos;t completed a skill assessment yet. Pick a career to start
        one — your skill gaps will show up here afterwards.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href={ROUTES.selectCareer}
          className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition duration-150 ease-out hover:bg-brand-dark"
        >
          Choose a career & start
        </Link>
        <Link
          href={ROUTES.home}
          className="rounded-lg border border-secondary bg-white px-5 py-2.5 text-sm font-medium text-secondary transition duration-150 ease-out hover:bg-secondary/10"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function GapDashboard({ result }: { result: StashedResult }) {
  const { careerId, careerName, overall, gaps } = result;

  // Core competency list always shows in career-skill order.
  const biggest = [...gaps]
    .sort((a, b) => b.gap - a.gap)
    .filter((g) => g.gap > 0)
    .slice(0, 3);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        {/* Left panel */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-5">
              <ScoreRing value={overall} size={96} color={LEVELS[scoreLevel(overall)].color} />
              <div>
                <h2 className="text-lg font-bold leading-tight text-slate-900">
                  {careerName}
                </h2>
                <p className="text-sm font-semibold text-brand">Readiness Score</p>
                <span
                  className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${LEVELS[scoreLevel(overall)].className}`}
                >
                  {LEVELS[scoreLevel(overall)].label}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Measured across {gaps.length} skill areas against the level this role
              expects.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Your Biggest Skill Gaps
            </p>
            {biggest.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {biggest.map((g) => {
                  const badge = BADGE[g.severity];
                  return (
                    <li
                      key={g.skillId}
                      className="rounded-xl border border-red-200 bg-red-50/60 p-4"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-slate-800">{g.name}</p>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      </div>
                      <p className="mt-1 text-xs tabular-nums text-slate-600">
                        Current {g.current}% → Target {g.target}%
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-slate-500">
                Nice — no skill gaps above target. You're on track.
              </p>
            )}
          </section>
        </div>

        {/* Right panel */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Core Competency Gap Analysis
          </p>
          <div className="mt-5 space-y-6">
            {gaps.map((r) => {
              const gap = r.target - r.current;
              const noGap = gap <= 0;
              return (
                <div key={r.skillId}>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-medium text-slate-800">{r.name}</p>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        noGap ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {noGap ? "No gap" : `${gap}% gap`}
                    </span>
                  </div>
                  {skillDescription(r.skillId) && (
                    <p className="mt-1 text-xs leading-relaxed text-slate-700">
                      {skillDescription(r.skillId)}
                    </p>
                  )}
                  <div className="relative mt-2 h-3.5 w-full overflow-hidden rounded-full bg-slate-200">
                    {/* target (red overlay = the gap) */}
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full ${
                        noGap ? "bg-emerald-200/70" : "bg-red-300/80"
                      }`}
                      style={{ width: `${r.target}%` }}
                    />
                    {/* current (blue bar on top) */}
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-brand"
                      style={{ width: `${r.current}%` }}
                    />
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2 text-xs">
                    <span className="tabular-nums text-slate-500">
                      Current {r.current}% / Target {r.target}%
                    </span>
                    <span
                      className={`${
                        noGap ? "font-medium text-emerald-600" : "text-slate-500"
                      }`}
                    >
                      {levelNote(r.current, r.target)}
                    </span>
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
          href={ROUTES.assessment(careerId)}
          className="rounded-lg border border-secondary bg-white px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-secondary transition duration-150 ease-out hover:bg-secondary/10 active:scale-[0.98]"
        >
          Retake assessment
        </Link>
      </div>
    </>
  );
}