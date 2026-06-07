import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { HomeScreen } from "../app/HomeScreen";
import { ProfileScreen } from "../app/ProfileScreen";
import { LoginScreen } from "../features/auth/LoginScreen";
import { RegisterScreen } from "../features/auth/RegisterScreen";
import { LeagueDetailScreen } from "../features/leagues/LeagueDetailScreen";
import { LeaguesScreen } from "../features/leagues/LeaguesScreen";
import { LineupScreen } from "../features/lineups/LineupScreen";
import { RosterScreen } from "../features/rosters/RosterScreen";
import { StandingsScreen } from "../features/standings/StandingsScreen";
import { TeamScreen } from "../features/teams/TeamScreen";
import { colors } from "../lib/theme";
import type { AuthStackParamList, MainTabParamList, RootStackParamList } from "../types/navigation";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

type MainTabsProps = {
  onLogout: () => void;
  openLeague: (leagueId: string) => void;
  openRoster: () => void;
  openTeam: () => void;
};

function MainTabs({ onLogout, openLeague, openRoster, openTeam }: MainTabsProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border
        }
      }}
    >
      <Tab.Screen name="Home">
        {() => <HomeScreen onOpenLeague={openLeague} onOpenRoster={openRoster} onOpenTeam={openTeam} />}
      </Tab.Screen>
      <Tab.Screen name="Leagues">
        {() => <LeaguesScreen onOpenLeague={openLeague} />}
      </Tab.Screen>
      <Tab.Screen component={LineupScreen} name="Lineup" />
      <Tab.Screen component={StandingsScreen} name="Standings" />
      <Tab.Screen name="Profile">
        {() => <ProfileScreen onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="Login">
            {({ navigation }) => (
              <LoginScreen onLogin={() => setIsLoggedIn(true)} onRegister={() => navigation.navigate("Register")} />
            )}
          </AuthStack.Screen>
          <AuthStack.Screen name="Register">
            {() => <RegisterScreen onLogin={() => setIsLoggedIn(true)} />}
          </AuthStack.Screen>
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: "900" }
        }}
      >
        <RootStack.Screen name="Tabs" options={{ headerShown: false }}>
          {({ navigation }) => (
            <MainTabs
              onLogout={() => setIsLoggedIn(false)}
              openLeague={(leagueId) => navigation.navigate("LeagueDetail", { leagueId })}
              openRoster={() => navigation.navigate("Roster")}
              openTeam={() => navigation.navigate("Team")}
            />
          )}
        </RootStack.Screen>
        <RootStack.Screen name="LeagueDetail" options={{ title: "Dettaglio lega" }}>
          {({ route }) => <LeagueDetailScreen leagueId={route.params.leagueId} />}
        </RootStack.Screen>
        <RootStack.Screen component={TeamScreen} name="Team" options={{ title: "La mia squadra" }} />
        <RootStack.Screen component={RosterScreen} name="Roster" options={{ title: "Rosa" }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
