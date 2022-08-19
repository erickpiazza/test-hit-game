import React, { useMemo, useState } from "react";
import { FlatList, Modal, Text, View } from "react-native";
import { SvgCssUri } from "react-native-svg";
import { useTheme } from "styled-components";
import { Container, Input } from "./styles";
import { data } from "../../utils/test";
import { SelectFilter } from "./components/SelectFilter";
import { Option } from "./components/SelectFilter/components/SelectModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ClubDetails } from "../ClubDetails";

const options = [
  { key: "nome", name: "Nome" },
  { key: "aproveitamento", name: "Aproveitamento" },
  { key: "saldoDeGols", name: "Saldo de gols" },
];

export default function Clubs() {
  const theme = useTheme();
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
      <Container>
        <SelectFilter
          selectedOption={selectedOption}
          setSelectedOption={handleSelectOption}
          options={options}
        />
        {selectedOption.key && (
          <Input
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
      </Container>

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
