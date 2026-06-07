import { APP_NAME } from "@fantappero/shared";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { ScreenContainer } from "../../components/ScreenContainer";
import { colors } from "../../lib/theme";

type LoginScreenProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export function LoginScreen({ onLogin, onRegister }: LoginScreenProps) {
  return (
    <ScreenContainer scroll={false}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Fantasy MVP</Text>
        <Text style={styles.title}>{APP_NAME}</Text>
        <Text style={styles.description}>Accedi per gestire leghe, rosa e formazione.</Text>
      </View>
      <Card>
        <Input autoCapitalize="none" defaultValue="demo@fantappero.local" keyboardType="email-address" label="Email" />
        <Input defaultValue="fantappero" label="Password" secureTextEntry />
        <Button onPress={onLogin}>Accedi</Button>
        <Button onPress={onRegister} variant="ghost">Crea account</Button>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    justifyContent: "center"
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  title: {
    color: colors.text,
    fontSize: 46,
    fontWeight: "900",
    marginTop: 10
  },
  description: {
    color: colors.textMuted,
    fontSize: 17,
    lineHeight: 24,
    marginTop: 12
  }
});
