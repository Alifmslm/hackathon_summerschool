import type { CareerRecommendation } from "@/types";
import { Card } from "@/components/ui/Card";

/** STARTER STUB. Renders the recommended career, match % and "Why?" reasons. */
export function CareerResultCard({ recommendation }: { recommendation: CareerRecommendation }) {
  const { recommended, reasons, alternatives } = recommendation;
  return (
    <Card>
      <p className="text-sm text-slate-500">Your Recommended Career</p>
      <h2 className="mt-1 text-2xl font-bold">
        {recommended.emoji} {recommended.name}
      </h2>
      <p className="text-brand">{recommended.matchPercent}% Match</p>

      <p className="mt-4 font-medium">Why?</p>
      <ul className="mt-1 space-y-1 text-slate-700">
        {reasons.map((r) => (
          <li key={r}>✓ {r}</li>
        ))}
      </ul>

      {alternatives.length > 0 && (
        <>
          <p className="mt-4 font-medium">You may also like</p>
          <ul className="mt-1 space-y-1 text-slate-600">
            {alternatives.map((a) => (
              <li key={a.careerId}>
                {a.emoji} {a.name} — {a.matchPercent}%
              </li>
            ))}
          </ul>
        </>
      )}
    </Card>
  );
}
