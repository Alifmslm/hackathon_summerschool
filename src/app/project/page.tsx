"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { SkillGap } from "@/types";
import { ROUTES, isCareerId } from "@/constants";
import { recommendProject } from "@/lib/rules/project-recommendation";
import { CAREERS } from "@/lib/data/careers";
import { Button } from "@/components/ui/Button";

/**
 * Project brief (Step 4) — picked from the assessed career, not a fixed role.
 * Reads the stashed assessment result and recommends the template whose skills
 * overlap most with the user's gaps. Swap for /api/project/recommend when
 * integrating with the backend.
 */

interface StashedResult {
  careerId: string;
  careerName: string;
  gaps: SkillGap[];
}

export default function ProjectPage() {
  const [result, setResult] = useState<StashedResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("skillGapResult");
      if (raw) setResult(JSON.parse(raw));
    } catch {
      setResult(null);
    }
    setLoading(false);
  }, []);

  const data = loading ? null : result;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {data === null ? (
        loading ? (
          <p className="text-sm text-slate-500">Loading…</p>
        ) : (
          <ProjectPrompt />
        )
      ) : (
        <ProjectBrief result={data} />
      )}
    </main>
  );
}

/** Shown when /project is opened before an assessment has been completed. */
function ProjectPrompt() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-3xl">🛠️</p>
      <h1 className="mt-3 text-lg font-bold text-slate-900">No project brief yet</h1>
      <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
        Complete a skill assessment first — your recommended project is built
        from the gaps it finds.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href={ROUTES.selectCareer}
          className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition duration-150 ease-out hover:bg-brand-dark"
        >
          Take a skill assessment
        </Link>
        <Link
          href={ROUTES.home}
          className="rounded-lg border border-secondary bg-white px-5 py-2.5 text-sm font-medium text-secondary transition duration-150 ease-out hover:bg-secondary/10"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ProjectBrief({ result }: { result: StashedResult }) {
  const { careerId, careerName, gaps } = result;
  const career = CAREERS.find((c) => c.id === careerId);
  const project = isCareerId(careerId) ? recommendProject(careerId, gaps) : null;

  if (!project) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm text-slate-500">No project template for this career yet.</p>
      </div>
    );
  }

  return (
    <>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Project brief for {career?.name ?? careerName}
        </h1>
        <div className="flex gap-3">
          <Button variant="secondary" className="uppercase">
            Curated brief
          </Button>
          <Button className="uppercase">Generate with AI</Button>
        </div>
      </header>

      <article className="mt-8 rounded-2xl bg-brand-dark p-6 text-white shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          CURATED_BRIEF / {careerId.toUpperCase()}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">{project.title}</h2>
        <p className="mt-4 leading-relaxed text-slate-300">{project.description}</p>

        <section className="mt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Skills you&apos;ll practice
          </h3>
          <div className="mt-3 grid gap-1 sm:grid-cols-2">
            {project.skillsPracticed.map((skill) => (
              <p key={skill} className="text-sm text-slate-200">
                – {skill}
              </p>
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Core requirements
            </h3>
            <ul className="mt-3 space-y-2.5">
              {project.coreRequirements.map((req) => (
                <li key={req.id} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <span aria-hidden className="mt-0.5 text-slate-500">
                    ☐
                  </span>
                  {req.label}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Technical requirements
            </h3>
            <ul className="mt-3 space-y-2.5">
              {project.technicalRequirements.map((req) => (
                <li key={req.id} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <span aria-hidden className="mt-0.5 text-slate-500">
                    ☐
                  </span>
                  {req.label}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button className="uppercase">Export project guide (PDF)</Button>
          <a
            href={ROUTES.skillGap}
            className="inline-flex items-center justify-center rounded-lg border border-secondary/70 px-5 py-2.5 text-sm font-medium uppercase text-secondary transition duration-150 ease-out hover:border-secondary hover:text-white active:scale-[0.98]"
          >
            Back to gap analysis
          </a>
        </div>
      </article>
    </>
  );
}
