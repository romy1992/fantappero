import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../lib/theme";

export function LoadingState({ label = "Caricamento..." }: { label?: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    padding: 24
  },
  label: {
    color: colors.textMuted,
    fontSize: 14
  }
});
