import { StyleSheet, Text, View } from "react-native";
import { Card } from "../../components/Card";
import { ScreenContainer } from "../../components/ScreenContainer";
import { mockStandings } from "../../lib/mockData";
import { colors } from "../../lib/theme";

export function StandingsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Classifica</Text>
      <Text style={styles.description}>Risultati mock della lega.</Text>
      {mockStandings.map((row) => (
        <Card key={row.id}>
          <View style={styles.row}>
            <Text style={styles.rank}>#{row.rank}</Text>
            <View style={styles.flex}>
              <Text style={styles.name}>{row.name}</Text>
              <Text style={styles.meta}>{row.managerName} - G {row.played} - V {row.wins}</Text>
            </View>
            <Text style={styles.points}>{row.points}</Text>
          </View>
        </Card>
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
    fontSize: 15
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  rank: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "900"
  },
  flex: {
    flex: 1
  },
  name: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "900"
  },
  meta: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 4
  },
  points: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "900"
  }
});
