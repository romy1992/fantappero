import type { ReactNode } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { colors, spacing } from "../lib/theme";

type CardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    gap: 10,
    padding: 16,
    borderColor: colors.border,
    borderRadius: spacing.radius,
    borderWidth: 1,
    backgroundColor: colors.surface
  }
});
