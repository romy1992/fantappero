export function isPlayerLocked(locksAt: string, now = new Date()): boolean {
  return new Date(locksAt).getTime() <= now.getTime();
}

export function calculateBaseScore(vote: number, bonus = 0, malus = 0): number {
  return vote + bonus - malus;
}
