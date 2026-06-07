import { StyleSheet, Text } from "react-native";
import { LeagueCard } from "../../components/LeagueCard";
import { ScreenContainer } from "../../components/ScreenContainer";
import { mockLeagues } from "../../lib/mockData";
import { colors } from "../../lib/theme";

type LeaguesScreenProps = {
  onOpenLeague: (leagueId: string) => void;
};

export function LeaguesScreen({ onOpenLeague }: LeaguesScreenProps) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Le mie leghe</Text>
      <Text style={styles.description}>Leghe mock pronte per essere alimentate dalle API.</Text>
      {mockLeagues.map((league) => (
        <LeagueCard key={league.id} league={league} onPress={() => onOpenLeague(league.id)} />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900"
  },
  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22
  }
});
