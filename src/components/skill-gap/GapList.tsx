import type { SkillGap } from "@/types";
import { SEVERITY_META } from "@/constants";
import { Card } from "@/components/ui/Card";

/** STARTER STUB. The "biggest skill gaps" list with current → target. */
export function GapList({ gaps }: { gaps: SkillGap[] }) {
  return (
    <div className="space-y-3">
      {gaps.map((g) => (
        <Card key={g.skillId} className="flex items-center justify-between">
          <div>
            <p className="font-medium">
              {SEVERITY_META[g.severity].emoji} {g.name}
            </p>
            <p className="text-sm text-slate-500">
              Current: {g.current}% · Target: {g.target}%
            </p>
          </div>
          <span className="text-sm font-medium text-slate-400">+{g.gap}</span>
        </Card>
      ))}
    </div>
  );
}
