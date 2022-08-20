import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgCssUri } from "react-native-svg";
import theme from "../../../../global/styles/theme";

interface Props {
  uriShield?: string;
}

export function Shield({ uriShield }: Props) {
  return (
    <View style={styles.container}>
      {uriShield ? (
        <SvgCssUri width="130" height="130" uri={uriShield} />
      ) : (
        <View style={styles.emptyShield} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 8,
  },
  emptyShield: {
    width: 130,
    height: 130,
    backgroundColor: theme.colors.gray_light,
  },
});
