import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { LeagueCard } from "../components/LeagueCard";
import { ScreenContainer } from "../components/ScreenContainer";
import { useApiHealth } from "../hooks/useApiHealth";
import { mockLeagues, mockStandings } from "../lib/mockData";
import { colors } from "../lib/theme";

type HomeScreenProps = {
  onOpenLeague: (leagueId: string) => void;
  onOpenRoster: () => void;
  onOpenTeam: () => void;
};

export function HomeScreen({ onOpenLeague, onOpenRoster, onOpenTeam }: HomeScreenProps) {
  const leader = mockStandings[0];
  const apiHealth = useApiHealth();

  return (
    <ScreenContainer>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Dashboard</Text>
        <Text style={styles.title}>Pronto per la giornata fantasy.</Text>
        <Text style={styles.description}>Gestisci formazione, rosa e classifica da mobile.</Text>
      </View>
      <View style={styles.actions}>
        <Button onPress={onOpenTeam}>Squadra</Button>
        <Button onPress={onOpenRoster} variant="secondary">Rosa</Button>
      </View>
      <Card>
        <Text style={styles.cardLabel}>Leader attuale</Text>
        <Text style={styles.cardTitle}>{leader.name}</Text>
        <Text style={styles.cardMeta}>{leader.points} punti</Text>
      </Card>
      <Card>
        <Text style={styles.cardLabel}>Stato API</Text>
        <Text style={styles.cardMeta}>{apiHealth.label}</Text>
      </Card>
      <Text style={styles.sectionTitle}>Le tue leghe</Text>
      {mockLeagues.map((league) => (
        <LeagueCard key={league.id} league={league} onPress={() => onOpenLeague(league.id)} />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: 28,
    padding: 22,
    backgroundColor: colors.surface
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900",
    marginTop: 10
  },
  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10
  },
  actions: {
    flexDirection: "row",
    gap: 10
  },
  cardLabel: {
    color: colors.textMuted,
    fontSize: 13
  },
  cardTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900"
  },
  cardMeta: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "800"
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900"
  }
});
