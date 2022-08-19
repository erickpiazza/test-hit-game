import React from "react";
import { StyleSheet, View, Text } from "react-native";
import tema from "../../../../global/styles/theme";

interface Props {
  title: string;
  value?: string | number;
}

export function LabelDescription({ title, value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelDescription}>{`${title}: `}</Text>
      <Text style={styles.labelValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 8 },
  labelDescription: { fontFamily: tema.fonts.medium },
  labelValue: { fontFamily: tema.fonts.bold },
});
