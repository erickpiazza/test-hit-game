import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 8px;
`;

export const Input = styled(TextInput)`
  width: 100%;
  padding: 8px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
`;
