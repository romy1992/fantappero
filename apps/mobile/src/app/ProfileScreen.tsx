import { StyleSheet, Text } from "react-native";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors } from "../lib/theme";

type ProfileScreenProps = {
  onLogout: () => void;
};

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Profilo</Text>
      <Card>
        <Text style={styles.name}>Demo Manager</Text>
        <Text style={styles.meta}>demo@fantappero.local</Text>
      </Card>
      <Card>
        <Text style={styles.sectionTitle}>MVP attivo</Text>
        <Text style={styles.meta}>Account mock, pronto per auth reale via backend.</Text>
      </Card>
      <Button onPress={onLogout} variant="secondary">Esci</Button>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900"
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900"
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900"
  },
  meta: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22
  }
});
