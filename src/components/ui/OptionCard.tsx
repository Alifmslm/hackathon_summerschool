"use client";

/**
 * Reusable selectable answer card for the quiz steps (questionnaire +
 * assessment). A labelled radio-style button with a letter chip, selection
 * state and press feedback.
 */
export function OptionCard({
  letter,
  label,
  selected,
  onSelect,
}: {
  letter: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition duration-150 ease-out active:scale-[0.98] ${
        selected
          ? "border-brand bg-brand/10 shadow-sm"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <span
        className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition ${
          selected
            ? "border-brand bg-brand text-white"
            : "border-slate-300 text-slate-500 group-hover:border-slate-400"
        }`}
      >
        {letter}
      </span>
      <span
        className={`flex-1 text-sm font-medium leading-snug ${
          selected ? "text-brand-dark" : "text-slate-700"
        }`}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition ${
          selected ? "border-brand bg-brand" : "border-transparent"
        }`}
      >
        <svg viewBox="0 0 12 12" fill="none" className="size-3 text-white">
          <path
            d="M2.5 6.2 4.9 8.6 9.5 3.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}