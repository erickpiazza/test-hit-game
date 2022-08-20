import React from "react";
import { StyleSheet, View, Text } from "react-native";
import theme from "../../../../../../global/styles/theme";

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
  container: {
    justifyContent: "center",
    minWidth: 100,
    margin: 8,
    flexDirection: "row",
    padding: 8,
    marginBottom: 8,
    borderRadius: 16,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 3,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.62,
    elevation: 2,
  },
  labelDescription: { fontFamily: theme.fonts.medium },
  labelValue: { fontFamily: theme.fonts.bold },
});
