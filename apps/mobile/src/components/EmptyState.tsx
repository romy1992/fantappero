import { StyleSheet, Text } from "react-native";
import { colors } from "../lib/theme";
import { Card } from "./Card";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ description, title }: EmptyStateProps) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderStyle: "dashed"
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center"
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center"
  }
});
