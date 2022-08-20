import React, { useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgCssUri } from "react-native-svg";
import { data } from "../../utils/test";
import { SelectFilter } from "./components/SelectFilter";
import { Option } from "./components/SelectFilter/components/SelectModal";

import { ClubDetails } from "../ClubDetails";
import theme from "../../global/styles/theme";

const options = [
  { key: "nome", name: "Nome" },
  { key: "aproveitamento", name: "Aproveitamento" },
  { key: "saldoDeGols", name: "Saldo de gols" },
];

export default function Clubs() {
  const [selectedOption, setSelectedOption] = useState({
    key: "",
    name: "Selecione um filtro",
  });
  const [search, setSearch] = useState("");

  const [victoryOrDefeat, setVictoryOrDefeat] = useState<
    "victory" | "defeat" | undefined
  >();
  const [selectedClubIndex, setSelectedClubIndex] = useState<number>();

  const clubs = useMemo(() => {
    if (!search && !victoryOrDefeat) return data;
    if (victoryOrDefeat) {
      return data.filter(
        (club) =>
          club.ultimos_jogos[club.ultimos_jogos.length - 1] ===
          (victoryOrDefeat === "victory" ? "v" : "d")
      );
    }
    if (selectedOption.key === "nome") {
      return data.filter((club) => club.time.nome_popular.includes(search));
    } else if (selectedOption.key === "aproveitamento") {
      return data.filter((club) => club.aproveitamento >= Number(search));
    } else if (selectedOption.key === "saldoDeGols") {
      return data.filter((club) => club.saldo_gols >= Number(search));
    }

    return data;
  }, [search, victoryOrDefeat]);

  function handleSelectOption(option: Option) {
    setSearch("");
    setSelectedOption(option);
  }

  return (
    <>
      <View style={styles.container}>
        <SelectFilter
          selectedOption={selectedOption}
          setSelectedOption={handleSelectOption}
          options={options}
        />
        {selectedOption.key && (
          <TextInput
            style={styles.textInput}
            placeholder={selectedOption.name}
            value={search}
            onChangeText={setSearch}
          />
        )}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor:
                victoryOrDefeat === "victory"
                  ? theme.colors.green
                  : theme.colors.gray,
              padding: 8,
              margin: 8,
              borderRadius: 8,
              alignItems: "center",
              flexGrow: 1,
            }}
            onPress={() =>
              setVictoryOrDefeat(
                victoryOrDefeat === "victory" ? undefined : "victory"
              )
            }
          >
            <Text>Ultima Vitoria</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor:
                victoryOrDefeat === "defeat"
                  ? theme.colors.red
                  : theme.colors.gray,
              padding: 8,
              margin: 8,
              borderRadius: 8,
              alignItems: "center",
            }}
            onPress={() =>
              setVictoryOrDefeat(
                victoryOrDefeat === "defeat" ? undefined : "defeat"
              )
            }
          >
            <Text>Ultima derrota</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={clubs}
          keyExtractor={(item, index) => `${item.posicao}`}
          contentContainerStyle={{
            alignItems: "center",
          }}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedClubIndex(index)}
                style={{
                  backgroundColor: theme.colors.gray_light,
                  padding: 8,
                  height: 100,
                  width: 100,
                  margin: 4,
                  borderRadius: 8,
                }}
              >
                <Text>{item.posicao}</Text>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  {item.time.escudo ? (
                    <SvgCssUri width="40" height="40" uri={item.time.escudo} />
                  ) : (
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: theme.colors.gray_light,
                      }}
                    />
                  )}

                  <Text style={{ marginTop: 8 }}>{item.time.nome_popular}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <Modal visible={!!selectedClubIndex || selectedClubIndex === 0}>
        <ClubDetails
          handleClose={() => setSelectedClubIndex(undefined)}
          clubDetails={
            selectedClubIndex || selectedClubIndex === 0
              ? clubs[selectedClubIndex]
              : undefined
          }
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 8,
  },
  textInput: {
    width: "100%",
    padding: 8,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    marginBottom: 8,
    color: theme.colors.black,
  },
});
