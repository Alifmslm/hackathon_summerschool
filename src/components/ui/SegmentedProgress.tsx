/**
 * Horizontal segmented progress bar. Completed segments use the secondary
 * colour, remaining segments are light gray.
 */
export function SegmentedProgress({
  steps,
  completed,
  label,
}: {
  steps: number;
  completed: number;
  label: string;
}) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={completed}
      aria-valuemin={0}
      aria-valuemax={steps}
      className="flex w-full gap-1.5"
    >
      {Array.from({ length: steps }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
            i < completed ? "bg-secondary" : "bg-slate-200"
          }`}
        />
      ))}
    </div>
  );
}