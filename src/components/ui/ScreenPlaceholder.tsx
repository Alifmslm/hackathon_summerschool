import Link from "next/link";

/**
 * Temporary scaffold placeholder so the whole flow is navigable while FE builds
 * the real screens. Delete once each page is implemented.
 */
export function ScreenPlaceholder({
  step,
  title,
  description,
  next,
}: {
  step: string;
  title: string;
  description: string;
  next?: { href: string; label: string };
}) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand">{step}</p>
      <h1 className="mt-2 text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-slate-600">{description}</p>

      <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
        🚧 FE builds this screen here — consuming the shared types and the{" "}
        <code className="rounded bg-slate-100 px-1">/api</code> routes.
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">
          ← Home
        </Link>
        {next && (
          <Link
            href={next.href}
            className="ml-auto rounded-lg bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark"
          >
            {next.label} →
          </Link>
        )}
      </div>
    </main>
  );
}
