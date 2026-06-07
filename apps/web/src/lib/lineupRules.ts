import type { PlayerRole } from "@fantappero/shared";
import type { RosterPlayer } from "../types/domain";

export const STARTERS_REQUIRED = 11;

export function validateLineup(starters: RosterPlayer[]): string[] {
  const errors: string[] = [];
  const byRole = starters.reduce<Record<PlayerRole, number>>(
    (acc, player) => {
      acc[player.role] += 1;
      return acc;
    },
    { goalkeeper: 0, defender: 0, midfielder: 0, forward: 0 }
  );

  if (starters.length !== STARTERS_REQUIRED) {
    errors.push(`La formazione deve avere ${STARTERS_REQUIRED} titolari.`);
  }

  if (byRole.goalkeeper !== 1) {
    errors.push("La formazione deve avere esattamente 1 portiere.");
  }

  if (byRole.defender < 3) {
    errors.push("Servono almeno 3 difensori titolari.");
  }

  if (byRole.midfielder < 3) {
    errors.push("Servono almeno 3 centrocampisti titolari.");
  }

  if (byRole.forward < 1) {
    errors.push("Serve almeno 1 attaccante titolare.");
  }

  return errors;
}
