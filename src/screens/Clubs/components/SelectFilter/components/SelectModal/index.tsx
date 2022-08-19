import React from "react";

import { FlatList } from "react-native-gesture-handler";

import { Button } from "../../../../../../components/Button";

import {
  Container,
  Header,
  Title,
  Category,
  Name,
  Separator,
  Footer,
} from "./styles";

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
    <Container>
      <Header>
        <Title>Filtro</Title>
      </Header>

      <FlatList
        data={options}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={selectedOption.key === item.key}
          >
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
