import { StyleSheet, Text, View } from "react-native";
import { Card } from "../../components/Card";
import { ScreenContainer } from "../../components/ScreenContainer";
import { TeamCard } from "../../components/TeamCard";
import { mockLeagues, mockTeams } from "../../lib/mockData";
import { colors } from "../../lib/theme";

type LeagueDetailScreenProps = {
  leagueId: string;
};

export function LeagueDetailScreen({ leagueId }: LeagueDetailScreenProps) {
  const league = mockLeagues.find((item) => item.id === leagueId) ?? mockLeagues[0];

  return (
    <ScreenContainer>
      <Card>
        <Text style={styles.round}>{league.currentRound}</Text>
        <Text style={styles.title}>{league.name}</Text>
        <Text style={styles.description}>{league.description}</Text>
        <View style={styles.inviteBox}>
          <Text style={styles.inviteLabel}>Codice invito</Text>
          <Text style={styles.inviteCode}>{league.inviteCode}</Text>
        </View>
      </Card>
      <Text style={styles.sectionTitle}>Squadre partecipanti</Text>
      {mockTeams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  round: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "900"
  },
  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22
  },
  inviteBox: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 14
  },
  inviteLabel: {
    color: colors.textMuted,
    fontSize: 12,
    textTransform: "uppercase"
  },
  inviteCode: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "900",
    marginTop: 4
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900"
  }
});
