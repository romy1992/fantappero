import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { ErrorState } from "../../components/ErrorState";
import { FormationSlot } from "../../components/FormationSlot";
import { PlayerCard } from "../../components/PlayerCard";
import { ScreenContainer } from "../../components/ScreenContainer";
import { STARTERS_REQUIRED, validateLineup } from "../../lib/lineupRules";
import { mockRoster } from "../../lib/mockData";
import { roleLabels, roleOrder } from "../../lib/roleLabels";
import { colors } from "../../lib/theme";
import type { RosterPlayer } from "../../types/domain";

const initialStarterIds = ["p-1", "p-3", "p-4", "p-5", "p-8", "p-9", "p-10", "p-11", "p-13", "p-14", "p-15"];
const initialBenchIds = ["p-2", "p-6", "p-7", "p-12", "p-16"];

export function LineupScreen() {
  const [starterIds, setStarterIds] = useState<string[]>(initialStarterIds);
  const [benchIds, setBenchIds] = useState<string[]>(initialBenchIds);
  const [saved, setSaved] = useState(false);

  const starters = useMemo(
    () =>
      starterIds
        .map((id) => mockRoster.find((player) => player.id === id))
        .filter((player): player is RosterPlayer => Boolean(player)),
    [starterIds]
  );
  const bench = useMemo(
    () =>
      benchIds
        .map((id) => mockRoster.find((player) => player.id === id))
        .filter((player): player is RosterPlayer => Boolean(player)),
    [benchIds]
  );
  const errors = validateLineup(starters);
  const isValid = errors.length === 0;

  function toggleStarter(playerId: string) {
    setSaved(false);
    setStarterIds((current) =>
      current.includes(playerId)
        ? current.filter((id) => id !== playerId)
        : current.length < STARTERS_REQUIRED
          ? [...current, playerId]
          : current
    );
  }

  function toggleBench(playerId: string) {
    setSaved(false);
    setBenchIds((current) =>
      current.includes(playerId) ? current.filter((id) => id !== playerId) : [...current, playerId]
    );
  }

  return (
    <ScreenContainer>
      <View>
        <Text style={styles.eyebrow}>Giornata 1</Text>
        <Text style={styles.title}>Formazione</Text>
        <Text style={styles.description}>Seleziona titolari e panchina. I giocatori selezionati sono evidenziati.</Text>
      </View>

      <Card style={isValid ? styles.validBox : styles.incompleteBox}>
        <Text style={styles.statusTitle}>{isValid ? "Formazione valida" : "Formazione incompleta"}</Text>
        <Text style={styles.statusMeta}>{starters.length}/{STARTERS_REQUIRED} titolari - {bench.length} in panchina</Text>
      </Card>

      {!isValid ? errors.map((error) => <ErrorState key={error} message={error} title="Regola MVP" />) : null}
      {saved ? <Card style={styles.savedBox}><Text style={styles.savedText}>Formazione mock salvata.</Text></Card> : null}

      <Button disabled={!isValid} onPress={() => setSaved(true)}>Salva formazione</Button>

      <Text style={styles.sectionTitle}>Titolari</Text>
      {starters.map((player, index) => (
        <FormationSlot key={player.id} label={`Slot ${index + 1}`} player={player} />
      ))}

      <Text style={styles.sectionTitle}>Rosa per ruolo</Text>
      {roleOrder.map((role) => {
        const players = mockRoster.filter((player) => player.role === role);

        return (
          <Card key={role}>
            <Text style={styles.roleTitle}>{roleLabels[role]}</Text>
            {players.map((player) => {
              const selectedStarter = starterIds.includes(player.id);
              const selectedBench = benchIds.includes(player.id);

              return (
                <View key={player.id} style={styles.playerBlock}>
                  <PlayerCard player={player} selected={selectedStarter || selectedBench} />
                  <View style={styles.selectorRow}>
                    <Pressable
                      onPress={() => toggleStarter(player.id)}
                      style={[styles.selector, selectedStarter ? styles.selectorActive : null]}
                    >
                      <Text style={styles.selectorText}>{selectedStarter ? "Titolare" : "Metti titolare"}</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => toggleBench(player.id)}
                      style={[styles.selector, selectedBench ? styles.selectorActive : null]}
                    >
                      <Text style={styles.selectorText}>{selectedBench ? "Panchina" : "Panchina"}</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </Card>
        );
      })}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 6
  },
  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8
  },
  validBox: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryDark
  },
  incompleteBox: {
    borderColor: colors.warning,
    backgroundColor: "#451a0333"
  },
  statusTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900"
  },
  statusMeta: {
    color: colors.textMuted,
    fontSize: 14
  },
  savedBox: {
    borderColor: colors.primary,
    backgroundColor: "#052e16"
  },
  savedText: {
    color: colors.primary,
    fontWeight: "800"
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900"
  },
  roleTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900"
  },
  playerBlock: {
    gap: 8
  },
  selectorRow: {
    flexDirection: "row",
    gap: 8
  },
  selector: {
    flex: 1,
    alignItems: "center",
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 10
  },
  selectorActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  selectorText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "800"
  }
});
