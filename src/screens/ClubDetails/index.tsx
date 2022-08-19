import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgCssUri } from "react-native-svg";
import { Button } from "../../components/Button";
import theme from "../../global/styles/theme";
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
  handleClose: () => void;
  clubDetails?: ClubDetails;
}

export function ClubDetails({ clubDetails, handleClose }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{clubDetails?.time.nome_popular}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={{ alignItems: "center", marginTop: 8 }}>
            {clubDetails?.time.escudo ? (
              <SvgCssUri
                width="130"
                height="130"
                uri={clubDetails?.time.escudo}
              />
            ) : (
              <View
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: theme.colors.gray_light,
                }}
              />
            )}
          </View>
          <LabelDescription title="Pontos" value={clubDetails?.pontos} />
          <LabelDescription title="Jogos" value={clubDetails?.jogos} />
          <LabelDescription title="Vitorias" value={clubDetails?.vitorias} />
          <LabelDescription title="Empates" value={clubDetails?.empates} />
          <LabelDescription title="Derrotas" value={clubDetails?.derrotas} />
          <LabelDescription title="Gols pro" value={clubDetails?.gols_pro} />
          <LabelDescription
            title="Gols contra"
            value={clubDetails?.gols_contra}
          />
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
        </View>

        <View style={styles.footer}>
          <Button title="Fechar" onPress={handleClose} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: "100%",
    height: 113,
    backgroundColor: theme.colors.green,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 19,
  },

  title: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    fontSize: 18,
  },
  footer: { width: "100%", padding: 24 },
});
