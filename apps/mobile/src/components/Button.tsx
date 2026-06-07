import type { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../lib/theme";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  variant?: ButtonVariant;
};

export function Button({ children, disabled = false, onPress, variant = "primary" }: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        disabled ? styles.disabled : null,
        pressed && !disabled ? styles.pressed : null
      ]}
    >
      <Text style={[styles.text, variant === "primary" ? styles.primaryText : null]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13
  },
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.surfaceMuted
  },
  ghost: {
    backgroundColor: "transparent"
  },
  text: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800"
  },
  primaryText: {
    color: colors.background
  },
  disabled: {
    opacity: 0.45
  },
  pressed: {
    opacity: 0.8
  }
});
