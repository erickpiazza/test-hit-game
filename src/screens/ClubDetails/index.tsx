import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Button";
import theme from "../../global/styles/theme";
import { Header } from "./components/Header";
import { Shield } from "./components/Shield";
import { BoxDetails } from "./components/BoxDetails";
import { getBottomSpace } from "react-native-iphone-x-helper";

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
  handleClose: () => void;
  clubDetails?: ClubDetails;
}

export function ClubDetails({ clubDetails, handleClose }: Props) {
  return (
    <View style={styles.container}>
      <Header title={clubDetails?.time.nome_popular} />
      <Shield uriShield={clubDetails?.time.escudo} />
      <BoxDetails clubDetails={clubDetails} />

      <View style={styles.footer}>
        <Button title="Fechar" onPress={handleClose} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  footer: {
    width: "100%",
    paddingBottom: getBottomSpace() + 8,
    paddingHorizontal: 8,
  },
});
