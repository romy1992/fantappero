import { TeamCard } from "../../components/domain/TeamCard";
import { Card } from "../../components/ui/Card";
import { mockRoster, mockTeams } from "../../lib/mockData";

export function TeamPage() {
  const team = mockTeams[0];
  const totalValue = mockRoster.reduce((sum, player) => sum + player.value, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Squadra</h1>
        <p className="mt-2 text-slate-400">Panoramica della tua squadra fantasy.</p>
      </div>
      <TeamCard team={team} />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Giocatori in rosa</p>
          <p className="mt-2 text-3xl font-black text-white">{mockRoster.length}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Valore rosa</p>
          <p className="mt-2 text-3xl font-black text-emerald-300">{totalValue}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Posizione</p>
          <p className="mt-2 text-3xl font-black text-white">#{team.rank}</p>
        </Card>
      </div>
    </div>
  );
}
