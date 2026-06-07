import { StyleSheet, Text, TextInput, type TextInputProps, View } from "react-native";
import { colors } from "../lib/theme";

type InputProps = TextInputProps & {
  label: string;
  error?: string;
};

export function Input({ error, label, style, ...props }: InputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="#64748b"
        style={[styles.input, style]}
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700"
  },
  input: {
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    color: colors.text,
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 13,
    backgroundColor: colors.background
  },
  error: {
    color: colors.danger,
    fontSize: 13
  }
});
