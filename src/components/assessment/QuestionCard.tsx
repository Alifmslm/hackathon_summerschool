"use client";

import type { AssessmentQuestion } from "@/types";
import { Card } from "@/components/ui/Card";

/** STARTER STUB. One assessment question with selectable options. */
export function QuestionCard({
  question,
  selectedOptionId,
  onSelect,
}: {
  question: AssessmentQuestion;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
}) {
  return (
    <Card>
      <p className="font-medium">{question.prompt}</p>
      <div className="mt-3 space-y-2">
        {question.options.map((o) => (
          <label key={o.id} className="flex items-center gap-2">
            <input
              type="radio"
              name={question.id}
              checked={selectedOptionId === o.id}
              onChange={() => onSelect(o.id)}
            />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </Card>
  );
}
