import React from "react";
import { StyleSheet, View, Text } from "react-native";
import theme from "../../../../../../global/styles/theme";

interface CellProps {
  value: string | number;
}

export default function Cell({ value }: CellProps) {
  return (
    <View style={styles.container}>
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
