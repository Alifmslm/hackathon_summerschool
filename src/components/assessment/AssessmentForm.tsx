"use client";

import { useEffect, useRef, useState } from "react";
import type { AssessmentAnswers, AssessmentQuestion, Career } from "@/types";
import { ROUTES } from "@/constants";
import { skillName } from "@/lib/data/careers";
import { computeSkillGap, scoreAssessment } from "@/lib/rules/skill-gap";
import { Button } from "@/components/ui/Button";
import { OptionCard } from "@/components/ui/OptionCard";
import { SegmentedProgress } from "@/components/ui/SegmentedProgress";

/**
 * Per-career skill assessment (FE mockup).
 * Answers are scored client-side with the dummy assessment data; the result is
 * stashed and the user is sent to /skill-gap, which renders the combined
 * result + skill-gap screen. Swap for /api/assessment/submit when integrating.
 */
export function AssessmentForm({
  career,
  questions,
}: {
  career: Career;
  questions: AssessmentQuestion[];
}) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});

  // Tracks the synthetic history entries pinned by the guard so Cancel can
  // pop exactly those and return to the previous page.
  const pinnedCountRef = useRef(0);
  const allowLeaveRef = useRef(false);
  const canGoBackRef = useRef(false);

  /**
   * Browser-navigation guard: once the assessment is entered, browser
   * back/forward cannot move between questions or leave the page. A pinned
   * history entry is re-asserted on every popstate (unless the app itself is
   * navigating away via Cancel), so the only way to navigate is in-page.
   */
  useEffect(() => {
    // Can we return to a previous page? True when the user navigated here from
    // inside the app (history entries exist) or via an in-app referrer.
    canGoBackRef.current =
      window.history.length > 1 ||
      (document.referrer.length > 0 &&
        document.referrer.startsWith(window.location.origin));

    history.pushState({ assessmentBlocked: true }, "");
    pinnedCountRef.current = 1;
    const onPopState = () => {
      if (allowLeaveRef.current) return;
      history.pushState({ assessmentBlocked: true }, "");
      pinnedCountRef.current += 1;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const chosen = answers[question.id];
  const hasAnswered = chosen != null;

  function advance(currentAnswers: AssessmentAnswers) {
    if (!isLast) {
      setIndex((i) => i + 1);
      return;
    }
    const profile = scoreAssessment(career.id, currentAnswers);
    const result = computeSkillGap(career.id, profile.skills);
    sessionStorage.setItem(
      "skillGapResult",
      JSON.stringify({
        careerId: career.id,
        careerName: career.name,
        overall: profile.overall,
        gaps: result.gaps,
      })
    );
    window.location.href = ROUTES.skillGap;
  }

  function choose(optionId: string) {
    const nextAnswers = { ...answers, [question.id]: optionId };
    setAnswers(nextAnswers);
  }

  /**
   * Leave the assessment. If the user came from inside the app, return to the
   * page they came from; otherwise (direct visit / bookmark / refresh) fall
   * back to the career-select screen.
   */
  function cancel() {
    allowLeaveRef.current = true;
    if (canGoBackRef.current) {
      history.go(-pinnedCountRef.current);
    } else {
      window.location.href = ROUTES.selectCareer;
    }
  }

  function goBack() {
    setIndex((i) => i - 1);
  }

  function next() {
    if (!hasAnswered) return;
    advance(answers);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-6 py-12 sm:py-16">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Skill assessment
          </p>
          <span className="text-sm tabular-nums text-slate-500">
            Question {index + 1} of {questions.length}
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {career.emoji} {career.name}
        </h1>
        <div className="mt-4">
          <SegmentedProgress
            steps={questions.length}
            currentIndex={index}
            isCurrentAnswered={hasAnswered}
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
          <span className="inline-flex items-center gap-1.5 rounded-md bg-brand/10 px-2 py-1 text-xs font-semibold text-brand-dark">
            <span className="size-1.5 rounded-full bg-secondary" />
            Measuring: {skillName(question.skillId)}
          </span>
          <h2 className="mt-3 text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
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
          <Button variant="ghost" onClick={cancel}>
            Cancel
          </Button>
        ) : (
          <Button variant="secondary" onClick={goBack}>
            Back
          </Button>
        )}
        <div className="ml-auto">
          <Button disabled={!hasAnswered} onClick={next}>
            {isLast ? "See my score" : "Continue"}
          </Button>
        </div>
      </footer>
    </main>
  );
}