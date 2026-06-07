import { StyleSheet, Text } from "react-native";
import { Card } from "../../components/Card";
import { PlayerCard } from "../../components/PlayerCard";
import { ScreenContainer } from "../../components/ScreenContainer";
import { mockRoster } from "../../lib/mockData";
import { roleLabels, roleOrder } from "../../lib/roleLabels";
import { colors } from "../../lib/theme";

export function RosterScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Rosa</Text>
      <Text style={styles.description}>Giocatori divisi per ruolo.</Text>
      {roleOrder.map((role) => {
        const players = mockRoster.filter((player) => player.role === role);

        return (
          <Card key={role}>
            <Text style={styles.sectionTitle}>{roleLabels[role]}</Text>
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </Card>
        );
      })}
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
    fontSize: 15
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "900"
  }
});
