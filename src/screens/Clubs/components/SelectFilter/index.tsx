import React, { useState } from "react";
import { Modal } from "react-native";

import { Container, Category, Icon } from "./styles";
import { SelectModal, Option } from "./components/SelectModal";

interface Props {
  options: Option[];
  selectedOption: Option;
  // setSelectedOption: React.Dispatch<React.SetStateAction<Option>>;
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
      <Container onPress={handleOpenModal}>
        <Category>{selectedOption.name}</Category>
        <Icon name="chevron-down" />
      </Container>

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
