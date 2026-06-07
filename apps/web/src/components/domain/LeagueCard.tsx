import { Link } from "react-router-dom";
import type { LeagueSummary } from "../../types/domain";
import { Card } from "../ui/Card";

export function LeagueCard({ league }: { league: LeagueSummary }) {
  return (
    <Link to={`/leagues/${league.id}`}>
      <Card className="h-full transition hover:-translate-y-1 hover:border-emerald-400/60">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              {league.currentRound}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">{league.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{league.description}</p>
          </div>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200">
            {league.inviteCode}
          </span>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
          <span>{league.teamsCount} squadre</span>
          <span>{league.status}</span>
        </div>
      </Card>
    </Link>
  );
}
