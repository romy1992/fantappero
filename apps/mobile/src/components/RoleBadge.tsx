import type { PlayerRole } from "@fantappero/shared";
import { StyleSheet, Text } from "react-native";

const roleConfig: Record<PlayerRole, { label: string; backgroundColor: string; color: string }> = {
  goalkeeper: { label: "POR", backgroundColor: "#0ea5e933", color: "#bae6fd" },
  defender: { label: "DIF", backgroundColor: "#34d39933", color: "#bbf7d0" },
  midfielder: { label: "CEN", backgroundColor: "#fbbf2433", color: "#fde68a" },
  forward: { label: "ATT", backgroundColor: "#fb718533", color: "#fecdd3" }
};

export function RoleBadge({ role }: { role: PlayerRole }) {
  const config = roleConfig[role];

  return (
    <Text style={[styles.badge, { backgroundColor: config.backgroundColor, color: config.color }]}>
      {config.label}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    borderRadius: 999,
    fontSize: 11,
    fontWeight: "900",
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 4
  }
});
