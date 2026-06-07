import { StyleSheet, Text, View } from "react-native";
import { Card } from "../../components/Card";
import { ScreenContainer } from "../../components/ScreenContainer";
import { TeamCard } from "../../components/TeamCard";
import { mockRoster, mockTeams } from "../../lib/mockData";
import { colors } from "../../lib/theme";

export function TeamScreen() {
  const team = mockTeams[0];
  const totalValue = mockRoster.reduce((sum, player) => sum + player.value, 0);

  return (
    <ScreenContainer>
      <Text style={styles.title}>La mia squadra</Text>
      <TeamCard team={team} />
      <View style={styles.grid}>
        <Card style={styles.stat}>
          <Text style={styles.label}>Rosa</Text>
          <Text style={styles.value}>{mockRoster.length}</Text>
        </Card>
        <Card style={styles.stat}>
          <Text style={styles.label}>Valore</Text>
          <Text style={styles.value}>{totalValue}</Text>
        </Card>
      </View>
      <Card>
        <Text style={styles.label}>Posizione</Text>
        <Text style={styles.rank}>#{team.rank}</Text>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900"
  },
  grid: {
    flexDirection: "row",
    gap: 12
  },
  stat: {
    flex: 1
  },
  label: {
    color: colors.textMuted,
    fontSize: 13
  },
  value: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "900"
  },
  rank: {
    color: colors.text,
    fontSize: 42,
    fontWeight: "900"
  }
});
