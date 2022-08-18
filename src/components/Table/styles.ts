import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;
`;

export const Line = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  height: 48px;
  margin-top: 8px;
  align-items: center;
`;

export const Column = styled.View`
  width: 50%;
`;

export const ClubBox = styled.View`
  height: 100%;
  align-items: center;
  flex-direction: row;
  padding-left: 4px;

  border-left-color: ${({ theme }) => theme.colors.gray};
  border-left-width: 1px;
`;

export const ClubDescription = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;

export const ClubName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ClubAcronym = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`;
