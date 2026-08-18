"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CareerRecommendation } from "@/types";
import { ROUTES } from "@/constants";
import { CAREERS } from "@/lib/data/careers";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ScoreRing } from "@/components/ui/ScoreRing";

/**
 * Recommended career + match % + "Why?" + alternatives (Step 1 · result).
 * Reads the recommendation stashed by the questionnaire (sessionStorage) and
 * shows an empty state when none exists yet.
 */
export default function CareerResultPage() {
  const [recommendation, setRecommendation] = useState<CareerRecommendation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("careerRecommendation");
      if (raw) setRecommendation(JSON.parse(raw));
    } catch {
      setRecommendation(null);
    }
    setLoading(false);
  }, []);

  return (
    <main className="mx-auto w-full max-w-xl px-6 py-12 sm:py-16">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Career discovery
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Your match</h1>
      </header>

      {loading || !recommendation ? (
        <EmptyState loading={loading} />
      ) : (
        <Result recommendation={recommendation} />
      )}
    </main>
  );
}

function Result({ recommendation }: { recommendation: CareerRecommendation }) {
  const { recommended, reasons, alternatives } = recommendation;
  const career = CAREERS.find((c) => c.id === recommended.careerId);

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-3xl">
            {recommended.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              Top match
            </p>
            <h2 className="truncate text-xl font-bold">{recommended.name}</h2>
            {career && <p className="mt-0.5 text-sm text-slate-500">{career.tagline}</p>}
          </div>
          <ScoreRing value={recommended.matchPercent} size={84} />
        </div>

        {reasons.length > 0 && (
          <div className="mt-6 border-t border-slate-100 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Why this fits you
            </p>
            <ul className="mt-3 space-y-2">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 size-4 shrink-0 text-emerald-500">
                    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
                    <path
                      d="m6.5 10.2 2.3 2.3 4.7-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Other strong fits
        </p>
        <ul className="mt-4 space-y-4">
          {alternatives.map((alt) => (
            <li key={alt.careerId} className="flex items-center gap-3">
              <span className="w-7 text-center text-xl">{alt.emoji}</span>
              <span className="flex-1 truncate text-sm font-medium text-slate-700">
                {alt.name}
              </span>
              <div className="w-28">
                <ProgressBar value={alt.matchPercent} />
              </div>
              <span className="w-10 text-right text-sm font-semibold tabular-nums text-slate-600">
                {alt.matchPercent}%
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex items-center gap-3 pt-2">
        <Link
          href={ROUTES.questionnaire}
          className="text-sm font-medium text-slate-500 hover:text-slate-800"
        >
          Start over
        </Link>
        <Link
          href={ROUTES.assessment(recommended.careerId)}
          className="ml-auto rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition duration-150 ease-out hover:bg-brand-dark active:scale-[0.98]"
        >
          Assess my skills →
        </Link>
      </div>
    </div>
  );
}

function EmptyState({ loading }: { loading: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-3xl">🧭</p>
      <h2 className="mt-3 text-lg font-bold text-slate-900">
        {loading ? "Loading your match…" : "No result yet"}
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        {loading
          ? "Almost there."
          : "Finish the career quiz to see which path fits you best."}
      </p>
      {!loading && (
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={ROUTES.questionnaire}
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition duration-150 ease-out hover:bg-brand-dark"
          >
            Take the quiz
          </Link>
          <Link
            href={ROUTES.selectCareer}
            className="rounded-lg border border-secondary bg-white px-5 py-2.5 text-sm font-medium text-secondary transition duration-150 ease-out hover:bg-secondary/10"
          >
            Choose a career manually
          </Link>
        </div>
      )}
    </div>
  );
}