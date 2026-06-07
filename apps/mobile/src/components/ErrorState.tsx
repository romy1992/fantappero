import { StyleSheet, Text } from "react-native";
import { colors } from "../lib/theme";
import { Card } from "./Card";

type ErrorStateProps = {
  title?: string;
  message: string;
};

export function ErrorState({ message, title = "Attenzione" }: ErrorStateProps) {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: colors.danger,
    backgroundColor: "#4c051933"
  },
  title: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900"
  },
  message: {
    color: "#fecdd3",
    fontSize: 14
  }
});
