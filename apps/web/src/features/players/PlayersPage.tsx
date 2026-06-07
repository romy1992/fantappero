import { PlayerCard } from "../../components/domain/PlayerCard";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { EmptyState } from "../../components/ui/EmptyState";
import { mockAvailablePlayers } from "../../lib/mockData";

export function PlayersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Giocatori disponibili</h1>
        <p className="mt-2 text-slate-400">
          Lista mock per il draft semplificato. Le API reali potranno popolare questa vista.
        </p>
      </div>
      {mockAvailablePlayers.length === 0 ? (
        <EmptyState
          title="Nessun giocatore disponibile"
          description="Quando il draft sarà aperto, qui vedrai i calciatori liberi della lega."
        />
      ) : (
        <Card className="space-y-3">
          {mockAvailablePlayers.map((player) => (
            <PlayerCard
              action={<Button type="button" variant="secondary">Aggiungi</Button>}
              key={player.id}
              meta={`Valore ${player.value} - ${player.club}`}
              player={player}
            />
          ))}
        </Card>
      )}
    </div>
  );
}
