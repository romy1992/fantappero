import type { PlayerRole } from "@fantappero/shared";

const roleConfig: Record<PlayerRole, { label: string; className: string }> = {
  goalkeeper: { label: "POR", className: "bg-sky-400/15 text-sky-200" },
  defender: { label: "DIF", className: "bg-emerald-400/15 text-emerald-200" },
  midfielder: { label: "CEN", className: "bg-amber-400/15 text-amber-200" },
  forward: { label: "ATT", className: "bg-rose-400/15 text-rose-200" }
};

export function RoleBadge({ role }: { role: PlayerRole }) {
  const config = roleConfig[role];

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${config.className}`}>
      {config.label}
    </span>
  );
}
