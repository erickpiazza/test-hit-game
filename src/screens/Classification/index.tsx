import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../global/styles/theme";
import Table from "./components/Table";

export default function Classification() {
  return (
    <View style={styles.container}>
      <Table />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.background },
});
