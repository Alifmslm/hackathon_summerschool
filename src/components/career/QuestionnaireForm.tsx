"use client";

import { useState } from "react";
import Link from "next/link";
import type {
  Career,
  CareerRecommendation,
  QuestionnaireAnswers,
  QuestionnaireQuestion,
} from "@/types";
import { ROUTES } from "@/constants";
import { recommendCareer } from "@/lib/rules/career-matching";
import { Button } from "@/components/ui/Button";
import { OptionCard } from "@/components/ui/OptionCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ScoreRing } from "@/components/ui/ScoreRing";
import { SegmentedProgress } from "@/components/ui/SegmentedProgress";

/**
 * Career discovery quiz (FE mockup).
 * Answers are scored client-side against the dummy questionnaire data, mirroring
 * what /api/career/recommend returns — swap `recommendCareer` for the API call
 * when integrating with the backend.
 */
export function QuestionnaireForm({
  questions,
  careers,
}: {
  questions: QuestionnaireQuestion[];
  careers: Career[];
}) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [recommendation, setRecommendation] = useState<CareerRecommendation | null>(null);

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const chosen = answers[question.id];
  const hasAnswered = chosen != null;
  const completed = Object.keys(answers).length;

  function choose(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function next() {
    if (!hasAnswered) return;
    if (!isLast) {
      setIndex((i) => i + 1);
      return;
    }
    setRecommendation(recommendCareer(answers));
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setRecommendation(null);
  }

  if (recommendation) {
    return <ResultView recommendation={recommendation} careers={careers} onRestart={restart} />;
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-6 py-12 sm:py-16">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Career discovery
          </p>
          <span className="text-sm tabular-nums text-slate-500">
            Question {index + 1} of {questions.length}
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Find your path</h1>
        <div className="mt-4">
          <SegmentedProgress
            steps={questions.length}
            completed={completed}
            label={`Question ${index + 1} of ${questions.length}`}
          />
        </div>
      </header>

      <section
        key={question.id}
        className="pb-8"
        aria-live="polite"
      >
        <div className="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
            {question.prompt}
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            {question.options.map((o, i) => (
              <div
                key={o.id}
                className="animate-rise"
                style={{ animationDelay: `${60 + i * 45}ms` }}
              >
                <OptionCard
                  letter={String.fromCharCode(65 + i)}
                  label={o.label}
                  selected={chosen === o.id}
                  onSelect={() => choose(o.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-auto flex items-center gap-3">
        {index === 0 ? (
          <Link href={ROUTES.home} className="text-sm font-medium text-slate-500 hover:text-slate-800">
            Start over
          </Link>
        ) : (
          <Button variant="ghost" onClick={() => setIndex((i) => i - 1)}>
            Back
          </Button>
        )}
        <div className="ml-auto">
          <Button disabled={!hasAnswered} onClick={next}>
            {isLast ? "See my result" : "Continue"}
          </Button>
        </div>
      </footer>
    </main>
  );
}

function ResultView({
  recommendation,
  careers,
  onRestart,
}: {
  recommendation: CareerRecommendation;
  careers: Career[];
  onRestart: () => void;
}) {
  const { recommended, reasons, alternatives } = recommendation;
  const career = careers.find((c) => c.id === recommended.careerId);

  return (
    <main className="mx-auto w-full max-w-xl px-6 py-12 sm:py-16">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Career discovery
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Your match</h1>
      </header>

      <div className="animate-pop space-y-4">
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
          <Button variant="ghost" onClick={onRestart}>
            Start over
          </Button>
          <Link
            href={ROUTES.assessment(recommended.careerId)}
            className="ml-auto rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition duration-150 ease-out hover:bg-brand-dark active:scale-[0.98]"
          >
            Assess my skills →
          </Link>
        </div>
      </div>
    </main>
  );
}