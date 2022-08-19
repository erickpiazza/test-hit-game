import React from "react";
import { Text, View } from "react-native";
import { SvgCssUri } from "react-native-svg";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { LabelDescription } from "./components/LabelDescription";

import {
  Container,
  Header,
  Title,
  Category,
  Name,
  Separator,
  Footer,
} from "./styles";

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
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <Title>{clubDetails?.time.nome_popular}</Title>
      </Header>
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

        <View>
          <Button title="Fechar" onPress={handleClose} />
        </View>
      </View>
    </Container>
  );
}
