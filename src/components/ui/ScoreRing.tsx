"use client";

/** Circular 0–100 score indicator with an animated arc. */
export function ScoreRing({
  value,
  size = 96,
  label,
  color = "#0683F9",
}: {
  value: number; // 0–100
  size?: number;
  label?: string;
  color?: string; // arc colour (default brand blue)
}) {
  const pct = Math.min(100, Math.max(0, value));
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 700ms cubic-bezier(0.23, 1, 0.32, 1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold tabular-nums" style={{ fontSize: size / 4.2 }}>
          {label ?? Math.round(pct)}
          {label == null ? "%" : ""}
        </span>
      </div>
    </div>
  );
}