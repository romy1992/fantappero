import { APP_NAME } from "@fantappero/shared";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <main className="grid min-h-screen bg-slate-950 text-white lg:grid-cols-[1.1fr_0.9fr]">
      <section className="hidden bg-[radial-gradient(circle_at_top_left,_#34d399,_transparent_35%),linear-gradient(135deg,_#020617,_#0f172a)] p-12 lg:flex lg:flex-col lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-200">Fantasy MVP</p>
          <h1 className="mt-6 max-w-xl text-6xl font-black leading-tight">{APP_NAME}</h1>
          <p className="mt-6 max-w-lg text-lg text-slate-200">
            Leghe, draft, rosa e formazione a lock progressivo in una web app pronta per crescere.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
          <p className="text-2xl font-bold">11 titolari. Lock per giocatore. Classifica live-ready.</p>
        </div>
      </section>
      <section className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
