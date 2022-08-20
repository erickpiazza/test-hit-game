import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Shield } from "../../../../../../components/Shield";
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

export default function ColumnClub({ clubs }: Props) {
  return (
    <View style={styles.column}>
      <View style={styles.line}>
        <Cell value="#" style={{ width: 24 }} />
        <Cell value="Time" />
      </View>

      {clubs.map((item, index) => (
        <View style={styles.line} key={index}>
          <Cell value={`${item.posicao}º`} style={{ width: 24 }} />
          <View style={styles.clubBox}>
            <Shield height={40} width={40} uriShield={item.time.escudo} />
            <View style={styles.clubDescription}>
              <Text style={styles.clubName}>{item.time.nome_popular}</Text>
              <Text style={styles.clubAcronym}>{item.time.sigla}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
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
  column: {
    width: "50%",
  },
  clubBox: {
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 4,
    borderLeftColor: theme.colors.gray,
    borderLeftWidth: 1,
  },
  clubDescription: {
    flexDirection: "column",
    marginLeft: 8,
  },
  clubName: { fontFamily: theme.fonts.medium },
  clubAcronym: {
    color: theme.colors.gray_dark,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
  },
});
