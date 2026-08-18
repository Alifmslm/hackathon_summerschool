import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-slate-300 bg-white text-slate-700 hover:border-slate-400",
  ghost: "text-slate-600 hover:text-slate-900",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`rounded-lg px-5 py-2.5 text-sm font-medium transition duration-150 ease-out active:scale-[0.98] disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
