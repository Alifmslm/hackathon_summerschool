"use client";

import type { QuestionnaireAnswers, QuestionnaireQuestion } from "@/types";

/**
 * STARTER STUB (FE to build out). Renders the career-discovery questions and
 * reports the selected answers up. Shape is fixed by the contract; styling and
 * step-by-step UX are yours to design.
 */
export function QuestionnaireForm({
  questions,
  answers,
  onAnswer,
  onSubmit,
}: {
  questions: QuestionnaireQuestion[];
  answers: QuestionnaireAnswers;
  onAnswer: (questionId: string, optionId: string) => void;
  onSubmit: () => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-8"
    >
      {questions.map((q) => (
        <fieldset key={q.id}>
          <legend className="font-medium">{q.prompt}</legend>
          <div className="mt-3 space-y-2">
            {q.options.map((o) => (
              <label key={o.id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === o.id}
                  onChange={() => onAnswer(q.id, o.id)}
                />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button type="submit" className="rounded-lg bg-brand px-5 py-2.5 text-white">
        See my result
      </button>
    </form>
  );
}
