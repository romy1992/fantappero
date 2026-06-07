import { StyleSheet, Text, View } from "react-native";
import { colors } from "../lib/theme";
import type { TeamSummary } from "../types/domain";
import { Card } from "./Card";

export function TeamCard({ team }: { team: TeamSummary }) {
  return (
    <Card>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{team.name}</Text>
          <Text style={styles.meta}>Manager: {team.managerName}</Text>
        </View>
        <View style={styles.pointsBox}>
          <Text style={styles.points}>{team.points}</Text>
          <Text style={styles.meta}>punti</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12
  },
  name: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900"
  },
  meta: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 4
  },
  pointsBox: {
    alignItems: "flex-end"
  },
  points: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "900"
  }
});
