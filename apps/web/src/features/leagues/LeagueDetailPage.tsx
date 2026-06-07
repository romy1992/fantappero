import { useParams } from "react-router-dom";
import { TeamCard } from "../../components/domain/TeamCard";
import { Card } from "../../components/ui/Card";
import { ErrorState } from "../../components/ui/ErrorState";
import { mockLeagues, mockTeams } from "../../lib/mockData";

export function LeagueDetailPage() {
  const { leagueId } = useParams();
  const league = mockLeagues.find((item) => item.id === leagueId) ?? mockLeagues[0];

  if (!league) {
    return <ErrorState message="La lega richiesta non è disponibile nei dati mock." />;
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">
          {league.currentRound}
        </p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-black text-white">{league.name}</h1>
            <p className="mt-3 max-w-2xl text-slate-400">{league.description}</p>
          </div>
          <Card className="bg-slate-950">
            <p className="text-xs uppercase tracking-wide text-slate-500">Codice invito</p>
            <p className="mt-1 text-2xl font-black text-emerald-300">{league.inviteCode}</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-white">Squadre partecipanti</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mockTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
    </div>
  );
}
