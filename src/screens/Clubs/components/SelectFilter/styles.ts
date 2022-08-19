import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 8px 8px;
  margin-bottom: 8px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.black};
`;
