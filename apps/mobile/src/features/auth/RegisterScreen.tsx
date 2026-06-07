import { StyleSheet, Text } from "react-native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { ScreenContainer } from "../../components/ScreenContainer";
import { colors } from "../../lib/theme";

type RegisterScreenProps = {
  onLogin: () => void;
};

export function RegisterScreen({ onLogin }: RegisterScreenProps) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Crea account</Text>
      <Text style={styles.description}>Registrazione mock per preparare il flusso reale.</Text>
      <Card>
        <Input label="Nome manager" placeholder="Demo Manager" />
        <Input autoCapitalize="none" keyboardType="email-address" label="Email" placeholder="demo@fantappero.local" />
        <Input label="Password" secureTextEntry />
        <Button onPress={onLogin}>Registrati</Button>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900"
  },
  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22
  }
});
