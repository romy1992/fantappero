import type { LeagueSummary, RosterPlayer, StandingRow, TeamSummary } from "../types/domain";

export const mockLeagues: LeagueSummary[] = [
  {
    id: "lega-serie-a",
    name: "Lega Serie A Evoluta",
    description: "Draft semplificato, rose e formazione a lock progressivo.",
    inviteCode: "FANTA26",
    teamsCount: 8,
    currentRound: "Giornata 1",
    status: "In corso"
  },
  {
    id: "lega-amici",
    name: "FantAmici Weekend",
    description: "Lega privata per test mobile dell'MVP.",
    inviteCode: "WEEK11",
    teamsCount: 6,
    currentRound: "Draft",
    status: "Draft aperto"
  }
];

export const mockTeams: TeamSummary[] = [
  { id: "team-1", name: "Atletico Appero", managerName: "Demo Manager", points: 74.5, rank: 1 },
  { id: "team-2", name: "Real Syntax", managerName: "Giulia", points: 71, rank: 2 },
  { id: "team-3", name: "FC Typecheck", managerName: "Marco", points: 68.5, rank: 3 },
  { id: "team-4", name: "Sporting Hook", managerName: "Sara", points: 64, rank: 4 }
];

export const mockRoster: RosterPlayer[] = [
  { id: "p-1", firstName: "Michele", lastName: "Riva", role: "goalkeeper", club: "Milano FC", value: 14, locksAt: "2026-08-22T16:30:00Z" },
  { id: "p-2", firstName: "Andrea", lastName: "Neri", role: "goalkeeper", club: "Torino FC", value: 8, locksAt: "2026-08-24T18:45:00Z" },
  { id: "p-3", firstName: "Davide", lastName: "Costa", role: "defender", club: "Roma Blu", value: 12, locksAt: "2026-08-22T18:45:00Z" },
  { id: "p-4", firstName: "Lorenzo", lastName: "Ferri", role: "defender", club: "Napoli Verde", value: 10, locksAt: "2026-08-23T16:30:00Z" },
  { id: "p-5", firstName: "Simone", lastName: "Gallo", role: "defender", club: "Genova 1893", value: 9, locksAt: "2026-08-23T18:45:00Z" },
  { id: "p-6", firstName: "Paolo", lastName: "Marini", role: "defender", club: "Verona SC", value: 7, locksAt: "2026-08-24T18:45:00Z" },
  { id: "p-7", firstName: "Nicolo", lastName: "Serra", role: "defender", club: "Firenze Viola", value: 6, locksAt: "2026-08-24T21:00:00Z" },
  { id: "p-8", firstName: "Matteo", lastName: "Conti", role: "midfielder", club: "Milano FC", value: 18, locksAt: "2026-08-22T16:30:00Z" },
  { id: "p-9", firstName: "Gabriele", lastName: "Leoni", role: "midfielder", club: "Torino FC", value: 15, locksAt: "2026-08-23T16:30:00Z" },
  { id: "p-10", firstName: "Edoardo", lastName: "Fontana", role: "midfielder", club: "Roma Blu", value: 13, locksAt: "2026-08-23T18:45:00Z" },
  { id: "p-11", firstName: "Tommaso", lastName: "Villa", role: "midfielder", club: "Napoli Verde", value: 11, locksAt: "2026-08-24T18:45:00Z" },
  { id: "p-12", firstName: "Riccardo", lastName: "Moretti", role: "midfielder", club: "Verona SC", value: 8, locksAt: "2026-08-24T21:00:00Z" },
  { id: "p-13", firstName: "Federico", lastName: "Bruno", role: "forward", club: "Firenze Viola", value: 24, locksAt: "2026-08-22T18:45:00Z" },
  { id: "p-14", firstName: "Alessio", lastName: "Romano", role: "forward", club: "Genova 1893", value: 20, locksAt: "2026-08-23T18:45:00Z" },
  { id: "p-15", firstName: "Pietro", lastName: "Greco", role: "forward", club: "Torino FC", value: 16, locksAt: "2026-08-24T18:45:00Z" },
  { id: "p-16", firstName: "Elia", lastName: "Ruggeri", role: "forward", club: "Roma Blu", value: 9, locksAt: "2026-08-24T21:00:00Z" }
];

export const mockStandings: StandingRow[] = mockTeams.map((team, index) => ({
  ...team,
  played: 1,
  wins: index === 0 ? 1 : 0,
  draws: index === 1 ? 1 : 0,
  losses: index > 1 ? 1 : 0
}));
