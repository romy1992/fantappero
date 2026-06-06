import { APP_NAME, DEFAULT_LINEUP_RULES } from "@fantappero/shared";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>MVP Mobile</Text>
      <Text style={styles.title}>{APP_NAME}</Text>
      <Text style={styles.description}>
        App Expo pronta per condividere tipi, regole e client API con web.
      </Text>
      <Text style={styles.card}>
        Formazione {DEFAULT_LINEUP_RULES.formation}:{" "}
        {DEFAULT_LINEUP_RULES.starters} titolari
      </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#020617"
  },
  eyebrow: {
    color: "#6ee7b7",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  title: {
    marginTop: 12,
    color: "#ffffff",
    fontSize: 42,
    fontWeight: "800"
  },
  description: {
    marginTop: 16,
    color: "#cbd5e1",
    fontSize: 17,
    lineHeight: 24
  },
  card: {
    marginTop: 24,
    padding: 16,
    overflow: "hidden",
    color: "#ffffff",
    backgroundColor: "#0f172a",
    borderRadius: 16
  }
});
