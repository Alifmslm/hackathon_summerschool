import type { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { RequirementChecklist } from "./RequirementChecklist";

/** STARTER STUB. Full recommended-project view + (FE) a "Download PDF" action. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="mt-2 text-slate-700">{project.description}</p>
      </div>

      <div>
        <p className="font-medium">Skills You&apos;ll Practice</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.skillsPracticed.map((s) => (
            <li key={s} className="rounded-full bg-brand/10 px-3 py-1 text-sm text-brand-dark">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <RequirementChecklist title="Core Requirements" requirements={project.coreRequirements} />
      <RequirementChecklist title="Technical Requirements" requirements={project.technicalRequirements} />
    </Card>
  );
}
