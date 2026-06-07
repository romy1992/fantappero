import { PlayerCard } from "../../components/domain/PlayerCard";
import { Card } from "../../components/ui/Card";
import { mockRoster } from "../../lib/mockData";
import { roleLabels, roleOrder } from "../../lib/roleLabels";

export function RosterPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Rosa</h1>
        <p className="mt-2 text-slate-400">Giocatori divisi per ruolo, pronti per la formazione.</p>
      </div>
      {roleOrder.map((role) => {
        const players = mockRoster.filter((player) => player.role === role);

        return (
          <section key={role}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">{roleLabels[role]}</h2>
              <span className="text-sm text-slate-400">{players.length} giocatori</span>
            </div>
            <Card className="space-y-3">
              {players.map((player) => (
                <PlayerCard key={player.id} meta={`Valore ${player.value} - lock ${new Date(player.locksAt).toLocaleString("it-IT")}`} player={player} />
              ))}
            </Card>
          </section>
        );
      })}
    </div>
  );
}
