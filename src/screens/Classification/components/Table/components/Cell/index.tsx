import React from "react";

import { Container, Text } from "./styles";

interface CellProps {
  value: string | number;
}

export default function Cell({ value }: CellProps) {
  return (
    <Container>
      <Text>{value}</Text>
    </Container>
  );
}
