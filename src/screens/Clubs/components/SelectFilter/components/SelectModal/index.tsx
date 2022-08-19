import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

import { Button } from "../../../../../../components/Button";
import theme from "../../../../../../global/styles/theme";

export interface Option {
  key: string;
  name: string;
}

interface Props {
  options: Option[];
  selectedOption: Option;
  setCategory: (category: Option) => void;
  closeSelectCategory: () => void;
}

export function SelectModal({
  options,
  selectedOption,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Option) {
    setCategory(category);
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Filtro</Text>
      </View>

      <FlatList
        data={options}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.category,
              selectedOption.key === item.key && styles.categoryActive,
            ]}
            onPress={() => handleCategorySelect(item)}
          >
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.Separator} />}
      />

      <View style={styles.footer}>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: "100%",
    height: 113,
    backgroundColor: theme.colors.green,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 19,
  },
  title: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    fontSize: 18,
  },
  category: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.gray_light,
  },
  categoryActive: { backgroundColor: theme.colors.green_light },
  name: { fontFamily: theme.fonts.regular, fontSize: 14 },
  Separator: {
    height: 1,
    width: "100%",
    backgroundColor: theme.colors.gray_dark,
  },
  footer: { width: "100%", padding: 24 },
});
