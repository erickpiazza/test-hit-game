import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { data } from "../../../../utils/test";
import ColumnClub from "./components/ColumnClubs";
import ColumnPoints from "./components/ColumnPoints";

export default function Table() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ColumnClub clubs={data} />
        <ColumnPoints clubs={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
