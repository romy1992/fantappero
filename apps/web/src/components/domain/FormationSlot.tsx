import type { Player } from "@fantappero/shared";
import { RoleBadge } from "../ui/RoleBadge";

type FormationSlotProps = {
  label: string;
  player?: Player;
  isLocked?: boolean;
  onClear?: () => void;
};

export function FormationSlot({ isLocked = false, label, onClear, player }: FormationSlotProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
        {isLocked ? (
          <span className="rounded-full bg-amber-400/15 px-2 py-1 text-xs font-semibold text-amber-200">
            Bloccato
          </span>
        ) : null}
      </div>
      {player ? (
        <div className="mt-3 flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-white">
              {player.firstName} {player.lastName}
            </p>
            <p className="mt-1 text-sm text-slate-400">{player.club}</p>
          </div>
          <div className="flex items-center gap-2">
            <RoleBadge role={player.role} />
            {onClear && !isLocked ? (
              <button className="text-sm font-semibold text-rose-300" onClick={onClear} type="button">
                Rimuovi
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="mt-3 text-sm text-slate-500">Slot libero</p>
      )}
    </div>
  );
}
