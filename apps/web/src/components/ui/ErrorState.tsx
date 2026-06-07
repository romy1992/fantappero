type ErrorStateProps = {
  title?: string;
  message: string;
};

export function ErrorState({ message, title = "Qualcosa non va" }: ErrorStateProps) {
  return (
    <div className="rounded-2xl border border-rose-500/40 bg-rose-950/30 p-5 text-rose-100">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-rose-200">{message}</p>
    </div>
  );
}
