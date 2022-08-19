import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { SelectModal, Option } from "./components/SelectModal";
import theme from "../../../../global/styles/theme";

interface Props {
  options: Option[];
  selectedOption: Option;
  setSelectedOption: (option: Option) => void;
}

export function SelectFilter({
  options,
  selectedOption,
  setSelectedOption,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={handleOpenModal}
      >
        <Text style={styles.category}>{selectedOption.name}</Text>
        <Feather style={styles.icon} name="chevron-down" />
      </TouchableOpacity>

      <Modal visible={isModalOpen}>
        <SelectModal
          selectedOption={selectedOption}
          options={options}
          setCategory={setSelectedOption}
          closeSelectCategory={handleCloseModal}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  category: { fontFamily: theme.fonts.regular },
  icon: { color: theme.colors.black },
});
