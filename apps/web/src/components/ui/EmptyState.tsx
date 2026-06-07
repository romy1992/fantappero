import { Link } from "react-router-dom";
import { Button } from "./Button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
};

export function EmptyState({ actionLabel, actionTo, description, title }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-8 text-center">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">{description}</p>
      {actionLabel && actionTo ? (
        <Button className="mt-5" type="button">
          <Link to={actionTo}>{actionLabel}</Link>
        </Button>
      ) : null}
    </div>
  );
}
