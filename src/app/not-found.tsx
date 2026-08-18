import Link from "next/link";
import { ROUTES } from "@/constants";

/** Custom 404 page — also shown when a career route doesn't exist. */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist, or you don&apos;t
        have a result here yet.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href={ROUTES.home}
          className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition duration-150 ease-out hover:bg-brand-dark"
        >
          Back to home
        </Link>
        <Link
          href={ROUTES.selectCareer}
          className="rounded-lg border border-secondary bg-white px-5 py-2.5 text-sm font-medium text-secondary transition duration-150 ease-out hover:bg-secondary/10"
        >
          Choose a career
        </Link>
      </div>
    </main>
  );
}