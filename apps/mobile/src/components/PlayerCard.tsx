import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import type { RosterPlayer } from "../types/domain";
import { colors } from "../lib/theme";
import { Card } from "./Card";
import { RoleBadge } from "./RoleBadge";

type PlayerCardProps = {
  player: RosterPlayer;
  action?: ReactNode;
  selected?: boolean;
};

export function PlayerCard({ action, player, selected = false }: PlayerCardProps) {
  return (
    <Card style={selected ? styles.selected : undefined}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {player.firstName[0]}
            {player.lastName[0]}
          </Text>
        </View>
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{player.firstName} {player.lastName}</Text>
            <RoleBadge role={player.role} />
          </View>
          <Text style={styles.meta}>{player.club} - Valore {player.value}</Text>
        </View>
        {action}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  selected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryDark
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  avatar: {
    alignItems: "center",
    backgroundColor: colors.surfaceMuted,
    borderRadius: 14,
    height: 44,
    justifyContent: "center",
    width: 44
  },
  avatarText: {
    color: colors.primary,
    fontWeight: "900"
  },
  info: {
    flex: 1,
    gap: 6
  },
  nameRow: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800"
  },
  meta: {
    color: colors.textMuted,
    fontSize: 13
  }
});
