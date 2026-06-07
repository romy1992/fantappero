import type { PlayerRole } from "@fantappero/shared";

export const roleLabels: Record<PlayerRole, string> = {
  goalkeeper: "Portieri",
  defender: "Difensori",
  midfielder: "Centrocampisti",
  forward: "Attaccanti"
};

export const roleOrder: PlayerRole[] = ["goalkeeper", "defender", "midfielder", "forward"];
