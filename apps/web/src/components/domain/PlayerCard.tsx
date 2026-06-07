import type { Player } from "@fantappero/shared";
import type { ReactNode } from "react";
import { RoleBadge } from "../ui/RoleBadge";

type PlayerCardProps = {
  player: Player;
  action?: ReactNode;
  meta?: string;
};

export function PlayerCard({ action, meta, player }: PlayerCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-sm font-bold text-emerald-200">
          {player.firstName[0]}
          {player.lastName[0]}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-white">
              {player.firstName} {player.lastName}
            </h3>
            <RoleBadge role={player.role} />
          </div>
          <p className="mt-1 text-sm text-slate-400">{meta ?? player.club}</p>
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
