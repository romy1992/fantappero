import type { TeamSummary } from "../../types/domain";
import { Card } from "../ui/Card";

export function TeamCard({ team }: { team: TeamSummary }) {
  return (
    <Card className="flex items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-white">{team.name}</h3>
        <p className="mt-1 text-sm text-slate-400">Manager: {team.managerName}</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-emerald-300">{team.points}</p>
        <p className="text-xs uppercase tracking-wide text-slate-500">punti</p>
      </div>
    </Card>
  );
}
