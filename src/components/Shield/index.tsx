import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { NumberProp, SvgCssUri } from "react-native-svg";
import theme from "../../global/styles/theme";

interface Props {
  uriShield?: string;
  width: NumberProp;
  height: NumberProp;
  style?: StyleProp<ViewStyle>;
}

export function Shield({ uriShield, height = 40, width = 40, style }: Props) {
  return (
    <View style={style}>
      {uriShield ? (
        <SvgCssUri width={width} height={height} uri={uriShield} />
      ) : (
        <View style={[styles.emptyShield, { width: width, height: height }]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  emptyShield: {
    backgroundColor: theme.colors.gray_light,
  },
});
