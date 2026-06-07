import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../lib/theme";
import type { LeagueSummary } from "../types/domain";
import { Card } from "./Card";

type LeagueCardProps = {
  league: LeagueSummary;
  onPress?: () => void;
};

export function LeagueCard({ league, onPress }: LeagueCardProps) {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <View style={styles.header}>
          <View style={styles.flex}>
            <Text style={styles.round}>{league.currentRound}</Text>
            <Text style={styles.name}>{league.name}</Text>
          </View>
          <Text style={styles.code}>{league.inviteCode}</Text>
        </View>
        <Text style={styles.description}>{league.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.meta}>{league.teamsCount} squadre</Text>
          <Text style={styles.meta}>{league.status}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between"
  },
  flex: {
    flex: 1
  },
  round: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
    textTransform: "uppercase"
  },
  name: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 6
  },
  code: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 999,
    color: colors.text,
    fontSize: 12,
    fontWeight: "800",
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  meta: {
    color: colors.textMuted,
    fontSize: 13
  }
});
