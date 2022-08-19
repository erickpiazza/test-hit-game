import React from "react";
import { View, ScrollView } from "react-native";
import { data } from "../../../../utils/test";
import { SvgCssUri } from "react-native-svg";
import Cell from "./components/Cell";
import {
  Line,
  Column,
  ClubName,
  ClubAcronym,
  ClubBox,
  ClubDescription,
} from "./styles";
import { useTheme } from "styled-components";

export default function Table() {
  const theme = useTheme();

  function SectionClub() {
    return (
      <Column>
        <Line>
          <Cell value="#" />
          <Cell value="Time" />
        </Line>

        {data.map((item, index) => (
          <Line key={index}>
            <Cell value={`${item.posicao}º`} />
            <ClubBox>
              {item.time.escudo ? (
                <SvgCssUri
                  width="40"
                  height="40"
                  //uri="https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
                  uri={item.time.escudo}
                />
              ) : (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: theme.colors.gray_light,
                  }}
                />
              )}
              <ClubDescription>
                <ClubName>{item.time.nome_popular}</ClubName>
                <ClubAcronym>{item.time.sigla}</ClubAcronym>
              </ClubDescription>
            </ClubBox>
          </Line>
        ))}
      </Column>
    );
  }

  function SectionPoints() {
    return (
      <ScrollView horizontal>
        <View>
          <Line>
            <Cell value="J" />
            <Cell value="V" />
            <Cell value="E" />
            <Cell value="D" />
            <Cell value="GP" />
            <Cell value="GC" />
            <Cell value="SG" />
            <Cell value="P" />
            <Cell value="AP" />
          </Line>

          {data.map((item, index) => (
            <Line key={index}>
              <Cell value={item.jogos} />
              <Cell value={item.vitorias} />
              <Cell value={item.empates} />
              <Cell value={item.derrotas} />
              <Cell value={item.gols_pro} />
              <Cell value={item.gols_contra} />
              <Cell value={item.saldo_gols} />
              <Cell value={item.pontos} />
              <Cell value={`${item.aproveitamento}%`} />
            </Line>
          ))}
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: "row" }}>
        <SectionClub />
        <SectionPoints />
      </View>
    </ScrollView>
  );
}
