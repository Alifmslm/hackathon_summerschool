import type { ProjectRequirement } from "@/types";

/** STARTER STUB. Checklist of core/technical requirements. */
export function RequirementChecklist({
  title,
  requirements,
}: {
  title: string;
  requirements: ProjectRequirement[];
}) {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <ul className="mt-2 space-y-1 text-slate-700">
        {requirements.map((r) => (
          <li key={r.id} className="flex items-start gap-2">
            <span className="text-slate-400">☐</span>
            <span>{r.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
