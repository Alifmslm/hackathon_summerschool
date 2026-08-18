"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { QuestionnaireAnswers, QuestionnaireQuestion } from "@/types";
import { ROUTES } from "@/constants";
import { recommendCareer } from "@/lib/rules/career-matching";
import { Button } from "@/components/ui/Button";
import { OptionCard } from "@/components/ui/OptionCard";
import { SegmentedProgress } from "@/components/ui/SegmentedProgress";

/**
 * Career discovery quiz (FE mockup).
 * Answers are scored client-side against the dummy questionnaire data, mirroring
 * what /api/career/recommend returns. The recommendation is stashed and the user
 * is sent to /career/result, which renders it.
 */
export function QuestionnaireForm({ questions }: { questions: QuestionnaireQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});

  /**
   * Browser-navigation guard: once the quiz is entered, browser back/forward
   * cannot move between questions or leave the page. A pinned history entry is
   * re-asserted on every popstate, so the only way to navigate is the in-page
   * Back / Continue buttons.
   */
  useEffect(() => {
    history.pushState({ quizBlocked: true }, "");
    const onPopState = () => history.pushState({ quizBlocked: true }, "");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const chosen = answers[question.id];
  const hasAnswered = chosen != null;

  function choose(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function next() {
    if (!hasAnswered) return;
    if (!isLast) {
      setIndex((i) => i + 1);
      return;
    }
    sessionStorage.setItem("careerRecommendation", JSON.stringify(recommendCareer(answers)));
    window.location.href = ROUTES.careerResult;
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
            currentIndex={index}
            isCurrentAnswered={hasAnswered}
            label={`Question ${index + 1} of ${questions.length}`}
          />
        </div>
      </header>

      <section key={question.id} className="pb-8" aria-live="polite">
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
          <Button variant="secondary" onClick={() => setIndex((i) => i - 1)}>
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