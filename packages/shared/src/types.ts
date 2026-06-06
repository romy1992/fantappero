export type UserId = string;
export type LeagueId = string;
export type TeamId = string;
export type PlayerId = string;
export type FantasyRoundId = string;

export type PlayerRole = "goalkeeper" | "defender" | "midfielder" | "forward";

export type Player = {
  id: PlayerId;
  firstName: string;
  lastName: string;
  role: PlayerRole;
  club: string;
};

export type FantasyRound = {
  id: FantasyRoundId;
  name: string;
  startsAt: string;
  endsAt: string;
};

export type LineupPlayer = {
  playerId: PlayerId;
  role: PlayerRole;
  position: number;
  isStarter: boolean;
  locksAt: string;
};

export type Lineup = {
  id: string;
  teamId: TeamId;
  fantasyRoundId: FantasyRoundId;
  players: LineupPlayer[];
};
