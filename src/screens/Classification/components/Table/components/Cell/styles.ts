import styled from "styled-components/native";

export const Container = styled.View`
  width: 48px;
  height: 100%;
  align-items: center;
  justify-content: center;

  border-left-color: ${({ theme }) => theme.colors.gray};
  border-left-width: 1px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: left;
`;
