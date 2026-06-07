export function LoadingState({ label = "Caricamento..." }: { label?: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center text-slate-300">
      <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
      {label}
    </div>
  );
}
