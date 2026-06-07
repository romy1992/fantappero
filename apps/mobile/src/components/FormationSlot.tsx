import { StyleSheet, Text, View } from "react-native";
import type { RosterPlayer } from "../types/domain";
import { colors } from "../lib/theme";
import { Card } from "./Card";
import { RoleBadge } from "./RoleBadge";

type FormationSlotProps = {
  label: string;
  player?: RosterPlayer;
};

export function FormationSlot({ label, player }: FormationSlotProps) {
  return (
    <Card style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      {player ? (
        <View style={styles.row}>
          <View style={styles.flex}>
            <Text style={styles.name}>{player.firstName} {player.lastName}</Text>
            <Text style={styles.meta}>{player.club}</Text>
          </View>
          <RoleBadge role={player.role} />
        </View>
      ) : (
        <Text style={styles.empty}>Slot libero</Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background
  },
  label: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.4,
    textTransform: "uppercase"
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  flex: {
    flex: 1
  },
  name: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800"
  },
  meta: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 3
  },
  empty: {
    color: colors.textMuted,
    fontSize: 14
  }
});
