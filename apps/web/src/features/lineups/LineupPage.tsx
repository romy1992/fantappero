import { useMemo, useState } from "react";
import { FormationSlot } from "../../components/domain/FormationSlot";
import { PlayerCard } from "../../components/domain/PlayerCard";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { ErrorState } from "../../components/ui/ErrorState";
import { validateLineup } from "../../lib/lineupRules";
import { mockRoster } from "../../lib/mockData";
import { roleLabels, roleOrder } from "../../lib/roleLabels";
import type { RosterPlayer } from "../../types/domain";

const initialStarterIds = ["p-1", "p-3", "p-4", "p-5", "p-8", "p-9", "p-10", "p-11", "p-13", "p-14", "p-15"];

export function LineupPage() {
  const [starterIds, setStarterIds] = useState<string[]>(initialStarterIds);
  const [saved, setSaved] = useState(false);

  const starters = useMemo(
    () =>
      starterIds
        .map((id) => mockRoster.find((player) => player.id === id))
        .filter((player): player is RosterPlayer => Boolean(player)),
    [starterIds]
  );
  const bench = mockRoster.filter((player) => !starterIds.includes(player.id));
  const errors = validateLineup(starters);

  function addStarter(playerId: string) {
    setSaved(false);
    setStarterIds((current) => (current.includes(playerId) ? current : [...current, playerId]));
  }

  function removeStarter(playerId: string) {
    setSaved(false);
    setStarterIds((current) => current.filter((id) => id !== playerId));
  }

  function saveLineup() {
    setSaved(errors.length === 0);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">Giornata 1</p>
          <h1 className="mt-2 text-3xl font-black text-white">Formazione</h1>
          <p className="mt-2 text-slate-400">
            La formazione appartiene alla fantasy round; ogni calciatore mantiene il proprio lock individuale.
          </p>
        </div>
        <Button disabled={errors.length > 0} onClick={saveLineup} type="button">
          Salva formazione
        </Button>
      </div>

      {errors.length > 0 ? (
        <div className="space-y-2">
          {errors.map((error) => (
            <ErrorState key={error} message={error} title="Formazione non valida" />
          ))}
        </div>
      ) : null}

      {saved ? (
        <Card className="border-emerald-400/50 bg-emerald-400/10 text-emerald-100">
          Formazione mock salvata correttamente.
        </Card>
      ) : null}

      <section className="grid gap-4 xl:grid-cols-[1fr_420px]">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Titolari</h2>
            <span className="text-sm text-slate-400">{starters.length}/11</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {starters.map((player, index) => (
              <FormationSlot
                key={player.id}
                label={`Slot ${index + 1}`}
                onClear={() => removeStarter(player.id)}
                player={player}
              />
            ))}
            {Array.from({ length: Math.max(0, 11 - starters.length) }).map((_, index) => (
              <FormationSlot key={`empty-${index}`} label={`Slot ${starters.length + index + 1}`} />
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-white">Panchina</h2>
          <div className="mt-4 space-y-3">
            {bench.map((player) => (
              <PlayerCard
                action={<Button onClick={() => addStarter(player.id)} type="button" variant="secondary">Titolare</Button>}
                key={player.id}
                player={player}
              />
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {roleOrder.map((role) => (
          <Card key={role}>
            <p className="text-sm text-slate-400">{roleLabels[role]}</p>
            <p className="mt-2 text-3xl font-black text-white">
              {starters.filter((player) => player.role === role).length}
            </p>
          </Card>
        ))}
      </section>
    </div>
  );
}
