import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../../global/styles/theme";

interface Props {
  title?: string;
}

export function Header({ title }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight() + RFValue(8),
    paddingBottom: 8,
    backgroundColor: theme.colors.green,
    alignItems: "center",
  },

  title: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    fontSize: 18,
  },
});
