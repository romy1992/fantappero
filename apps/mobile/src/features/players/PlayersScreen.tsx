import { StyleSheet, Text } from "react-native";
import { EmptyState } from "../../components/EmptyState";
import { ScreenContainer } from "../../components/ScreenContainer";
import { colors } from "../../lib/theme";

export function PlayersScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Giocatori</Text>
      <EmptyState
        title="Lista giocatori non ancora collegata"
        description="Questa schermata è pronta per mostrare i giocatori disponibili quando il draft mobile sarà collegato alle API."
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900"
  }
});
