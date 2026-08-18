/**
 * Horizontal segmented progress bar for the quiz steps.
 * - Segments before the current question: completed (secondary colour / full).
 * - The current question: full secondary once answered, half-filled while
 *   unanswered.
 * - Segments after the current question: remaining (light gray).
 */
export function SegmentedProgress({
  steps,
  currentIndex,
  isCurrentAnswered,
  label,
}: {
  steps: number;
  currentIndex: number;
  isCurrentAnswered: boolean;
  label: string;
}) {
  const done = currentIndex + (isCurrentAnswered ? 1 : 0);
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={done}
      aria-valuemin={0}
      aria-valuemax={steps}
      className="flex w-full gap-1.5"
    >
      {Array.from({ length: steps }, (_, i) => {
        const isCurrent = i === currentIndex;
        const isDone = i < currentIndex || (isCurrent && isCurrentAnswered);
        return (
          <div
            key={i}
            className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200"
          >
            {isDone && <div className="absolute inset-0 rounded-full bg-secondary" />}
            {isCurrent && !isCurrentAnswered && (
              <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-secondary" />
            )}
          </div>
        );
      })}
    </div>
  );
}