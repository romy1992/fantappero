import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { AuthLayout } from "./components/layout/AuthLayout";
import { LoginPage } from "./features/auth/LoginPage";
import { RegisterPage } from "./features/auth/RegisterPage";
import { CreateLeaguePage } from "./features/leagues/CreateLeaguePage";
import { JoinLeaguePage } from "./features/leagues/JoinLeaguePage";
import { LeagueDetailPage } from "./features/leagues/LeagueDetailPage";
import { LineupPage } from "./features/lineups/LineupPage";
import { PlayersPage } from "./features/players/PlayersPage";
import { RosterPage } from "./features/rosters/RosterPage";
import { StandingsPage } from "./features/standings/StandingsPage";
import { TeamPage } from "./features/teams/TeamPage";
import { DashboardPage } from "./routes/DashboardPage";

export function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Route>
      <Route element={<AppLayout />}>
        <Route element={<DashboardPage />} index />
        <Route element={<CreateLeaguePage />} path="leagues/new" />
        <Route element={<JoinLeaguePage />} path="leagues/join" />
        <Route element={<LeagueDetailPage />} path="leagues/:leagueId" />
        <Route element={<TeamPage />} path="team" />
        <Route element={<RosterPage />} path="roster" />
        <Route element={<PlayersPage />} path="players" />
        <Route element={<LineupPage />} path="lineup" />
        <Route element={<StandingsPage />} path="standings" />
      </Route>
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  );
}
