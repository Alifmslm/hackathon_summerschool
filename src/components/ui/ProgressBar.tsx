/** Simple 0–100 progress/skill bar. Reused across assessment + skill-gap. */
export function ProgressBar({
  value,
  className = "",
  barClassName = "bg-brand",
}: {
  value: number; // 0–100
  className?: string;
  barClassName?: string;
}) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <div className={`h-2.5 w-full overflow-hidden rounded-full bg-slate-200 ${className}`}>
      <div className={`h-full rounded-full ${barClassName}`} style={{ width: `${pct}%` }} />
    </div>
  );
}
