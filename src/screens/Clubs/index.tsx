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
    let filtered = data;
    if (!search && !victoryOrDefeat) filtered = data;
    if (victoryOrDefeat) {
      filtered = filtered.filter(
        (club) =>
          club.ultimos_jogos[club.ultimos_jogos.length - 1] ===
          (victoryOrDefeat === "victory" ? "v" : "d")
      );
    }
    if (selectedOption.key === "nome") {
      filtered = filtered.filter((club) =>
        club.time.nome_popular.includes(search)
      );
    } else if (selectedOption.key === "aproveitamento") {
      filtered = filtered.filter(
        (club) => club.aproveitamento >= Number(search)
      );
    } else if (selectedOption.key === "saldoDeGols") {
      filtered = filtered.filter((club) => club.saldo_gols >= Number(search));
    }

    return filtered;
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
        <View style={styles.boxButtonVictoryOrDefeat}>
          <TouchableOpacity
            style={[
              styles.buttonVictoryOrDefeat,
              {
                backgroundColor:
                  victoryOrDefeat === "victory"
                    ? theme.colors.green
                    : theme.colors.gray,
              },
            ]}
            onPress={() =>
              setVictoryOrDefeat(
                victoryOrDefeat === "victory" ? undefined : "victory"
              )
            }
          >
            <Text>Ultima Vitoria</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonVictoryOrDefeat,
              {
                backgroundColor:
                  victoryOrDefeat === "defeat"
                    ? theme.colors.red
                    : theme.colors.gray,
              },
            ]}
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
                style={styles.boxClub}
              >
                <Text>{item.posicao}</Text>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  {item.time.escudo ? (
                    <SvgCssUri width="40" height="40" uri={item.time.escudo} />
                  ) : (
                    <View style={styles.emptyShield} />
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
  boxButtonVictoryOrDefeat: { flexDirection: "row", justifyContent: "center" },
  buttonVictoryOrDefeat: {
    padding: 8,
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    flexGrow: 1,
  },
  boxClub: {
    backgroundColor: theme.colors.gray_light,
    padding: 8,
    height: 100,
    width: 100,
    margin: 4,
    borderRadius: 8,
  },
  emptyShield: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.gray_light,
  },
});
