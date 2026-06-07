import { Card } from "../../components/ui/Card";
import { mockStandings } from "../../lib/mockData";

export function StandingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Classifica</h1>
        <p className="mt-2 text-slate-400">Classifica mock della lega con punteggi base.</p>
      </div>
      <Card className="overflow-hidden p-0">
        <div className="hidden grid-cols-[80px_1fr_90px_90px_90px_90px] border-b border-slate-800 px-5 py-3 text-sm font-semibold text-slate-400 md:grid">
          <span>Pos</span>
          <span>Squadra</span>
          <span>G</span>
          <span>V</span>
          <span>Punti</span>
          <span>Manager</span>
        </div>
        <div className="divide-y divide-slate-800">
          {mockStandings.map((row) => (
            <div
              className="grid gap-3 px-5 py-4 text-sm md:grid-cols-[80px_1fr_90px_90px_90px_90px] md:items-center"
              key={row.id}
            >
              <span className="text-2xl font-black text-emerald-300">#{row.rank}</span>
              <span className="font-semibold text-white">{row.name}</span>
              <span className="text-slate-300">G {row.played}</span>
              <span className="text-slate-300">V {row.wins}</span>
              <span className="font-bold text-white">{row.points}</span>
              <span className="text-slate-400">{row.managerName}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
