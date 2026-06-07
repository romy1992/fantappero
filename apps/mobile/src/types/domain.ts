import type { Player, PlayerRole } from "@fantappero/shared";

export type LeagueStatus = "Draft aperto" | "In corso" | "Completata";

export type LeagueSummary = {
  id: string;
  name: string;
  description: string;
  inviteCode: string;
  teamsCount: number;
  currentRound: string;
  status: LeagueStatus;
};

export type TeamSummary = {
  id: string;
  name: string;
  managerName: string;
  points: number;
  rank: number;
};

export type StandingRow = TeamSummary & {
  played: number;
  wins: number;
  draws: number;
  losses: number;
};

export type RosterPlayer = Player & {
  locksAt: string;
  value: number;
};

export type RoleGroup = {
  role: PlayerRole;
  label: string;
  players: RosterPlayer[];
};
