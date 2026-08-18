import type { SkillScore } from "@/types";
import { ProgressBar } from "@/components/ui/ProgressBar";

/** STARTER STUB. Bar-per-skill view of the current skill profile. */
export function SkillGapChart({ profile }: { profile: SkillScore[] }) {
  return (
    <div className="space-y-3">
      {profile.map((s) => (
        <div key={s.skillId}>
          <div className="flex justify-between text-sm">
            <span>{s.name}</span>
            <span className="text-slate-500">{s.score}%</span>
          </div>
          <ProgressBar value={s.score} className="mt-1" />
        </div>
      ))}
    </div>
  );
}
