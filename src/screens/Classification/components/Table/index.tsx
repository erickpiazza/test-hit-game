import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { data } from "../../../../utils/test";
import { SvgCssUri } from "react-native-svg";
import Cell from "./components/Cell";
import theme from "../../../../global/styles/theme";

export default function Table() {
  function SectionClub() {
    return (
      <View style={styles.column}>
        <View style={styles.line}>
          <Cell value="#" />
          <Cell value="Time" />
        </View>

        {data.map((item, index) => (
          <View style={styles.line} key={index}>
            <Cell value={`${item.posicao}º`} />
            <View style={styles.clubBox}>
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

  function SectionPoints() {
    return (
      <ScrollView horizontal>
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

          {data.map((item, index) => (
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SectionClub />
        <SectionPoints />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

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
