import { Link } from "react-router-dom";
import { LeagueCard } from "../components/domain/LeagueCard";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useApiHealth } from "../hooks/useApiHealth";
import { mockLeagues, mockStandings } from "../lib/mockData";

export function DashboardPage() {
  const leader = mockStandings[0];
  const apiHealth = useApiHealth();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-[radial-gradient(circle_at_top_right,_#10b981,_transparent_30%),linear-gradient(135deg,_#0f172a,_#020617)] p-6 sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-200">Dashboard</p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="max-w-3xl text-4xl font-black sm:text-5xl">
              Gestisci leghe, squadra e formazione fantasy.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Interfaccia MVP con dati mock, già pronta per collegarsi alle API FastAPI.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="button">
              <Link to="/leagues/new">Crea lega</Link>
            </Button>
            <Button type="button" variant="secondary">
              <Link to="/leagues/join">Entra con codice</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Prossima giornata</p>
          <p className="mt-2 text-2xl font-bold text-white">Giornata 1</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Leader attuale</p>
          <p className="mt-2 text-2xl font-bold text-white">{leader.name}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Punti leader</p>
          <p className="mt-2 text-2xl font-bold text-emerald-300">{leader.points}</p>
        </Card>
        <Card className="md:col-span-3">
          <p className="text-sm text-slate-400">Stato API</p>
          <p className="mt-2 text-lg font-semibold text-white">{apiHealth.label}</p>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Le tue leghe</h2>
          <Link className="text-sm font-semibold text-emerald-300" to="/leagues/new">
            Nuova lega
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {mockLeagues.map((league) => (
            <LeagueCard key={league.id} league={league} />
          ))}
        </div>
      </section>
    </div>
  );
}
