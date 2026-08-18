"use client";

import type { AssessmentAnswers, AssessmentQuestion } from "@/types";
import { QuestionCard } from "./QuestionCard";

/** STARTER STUB. Lists all assessment questions and submits the answers. */
export function AssessmentForm({
  questions,
  answers,
  onSelect,
  onSubmit,
}: {
  questions: AssessmentQuestion[];
  answers: AssessmentAnswers;
  onSelect: (questionId: string, optionId: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          selectedOptionId={typeof answers[q.id] === "string" ? (answers[q.id] as string) : undefined}
          onSelect={(optionId) => onSelect(q.id, optionId)}
        />
      ))}
      <button onClick={onSubmit} className="rounded-lg bg-brand px-5 py-2.5 text-white">
        See my skill gaps
      </button>
    </div>
  );
}
