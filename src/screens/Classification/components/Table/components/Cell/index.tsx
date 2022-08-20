import React from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";
import theme from "../../../../../../global/styles/theme";

interface CellProps {
  value: string | number;
  style?: StyleProp<ViewStyle>;
}

export default function Cell({ value, style }: CellProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: theme.colors.gray,
    borderLeftWidth: 1,
  },
  label: {
    fontFamily: theme.fonts.medium,
    textAlign: "left",
  },
});
