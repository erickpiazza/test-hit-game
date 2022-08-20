import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import theme from "../../../../../../global/styles/theme";
import Cell from "../Cell";

interface ClubDetails {
  posicao: number;
  pontos: number;
  time: {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
  };
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  aproveitamento: number;
  variacao_posicao: number;
  ultimos_jogos: string[];
}

interface Props {
  clubs: ClubDetails[];
}

export default function ColumnPoints({ clubs }: Props) {
  return (
    <ScrollView horizontal snapToAlignment="end">
      <View>
        <View style={styles.line}>
          <Cell value="J" />
          <Cell value="V" />
          <Cell value="E" />
          <Cell value="D" />
          <Cell value="GP" />
          <Cell value="GC" />
          <Cell value="SG" />
          <Cell value="P" />
          <Cell value="AP" />
        </View>

        {clubs.map((item, index) => (
          <View style={styles.line} key={index}>
            <Cell value={item.jogos} />
            <Cell value={item.vitorias} />
            <Cell value={item.empates} />
            <Cell value={item.derrotas} />
            <Cell value={item.gols_pro} />
            <Cell value={item.gols_contra} />
            <Cell value={item.saldo_gols} />
            <Cell value={item.pontos} />
            <Cell value={`${item.aproveitamento}%`} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    height: 48,
    marginTop: 8,
    alignItems: "center",
  },
});
