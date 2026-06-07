export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Leagues: undefined;
  Lineup: undefined;
  Standings: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
  LeagueDetail: { leagueId: string };
  Team: undefined;
  Roster: undefined;
};
