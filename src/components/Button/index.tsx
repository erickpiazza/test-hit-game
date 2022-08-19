import React from "react";
import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import theme from "../../global/styles/theme";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.black,
    padding: 18,
    borderRadius: 8,
    alignItems: "center",
  },
  label: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
  },
});
