import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../../global/styles/theme";
import { LabelDescription } from "./components/LabelDescription";

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
  clubDetails?: ClubDetails;
}

export function BoxDetails({ clubDetails }: Props) {
  return (
    <ScrollView>
      <LabelDescription title="Pontos" value={clubDetails?.pontos} />
      <LabelDescription title="Jogos" value={clubDetails?.jogos} />
      <LabelDescription title="Vitorias" value={clubDetails?.vitorias} />
      <LabelDescription title="Empates" value={clubDetails?.empates} />
      <LabelDescription title="Derrotas" value={clubDetails?.derrotas} />
      <LabelDescription title="Gols pro" value={clubDetails?.gols_pro} />
      <LabelDescription title="Gols contra" value={clubDetails?.gols_contra} />
      <LabelDescription
        title="Aproveitamento"
        value={`${clubDetails?.aproveitamento}%`}
      />
      <LabelDescription
        title="Variação de posição"
        value={clubDetails?.variacao_posicao}
      />
      <LabelDescription
        title="Ultimos Jogos"
        value={clubDetails?.ultimos_jogos.join().toLocaleUpperCase()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
