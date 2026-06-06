import { APP_NAME, DEFAULT_LINEUP_RULES } from "@fantappero/shared";

export function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          MVP Monorepo
        </p>
        <h1 className="mt-4 text-5xl font-bold">{APP_NAME}</h1>
        <p className="mt-6 text-lg text-slate-300">
          Piattaforma fantasy evoluta per web e mobile, pronta per leghe,
          draft semplificato e formazione a lock progressivo.
        </p>
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Regole MVP</h2>
          <p className="mt-2 text-slate-300">
            Formazione base: {DEFAULT_LINEUP_RULES.formation},{" "}
            {DEFAULT_LINEUP_RULES.starters} titolari e{" "}
            {DEFAULT_LINEUP_RULES.bench} panchinari.
          </p>
        </div>
      </section>
    </main>
  );
}
