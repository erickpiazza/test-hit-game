import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import theme from "../../global/styles/theme";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.green};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.green_light : theme.colors.gray_light};
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_dark};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
