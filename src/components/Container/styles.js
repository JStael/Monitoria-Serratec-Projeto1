import styled from "styled-components/native";

export const ContainerStyled = styled.View`
  flex: 1;
  justify-content: ${(props) => props.verticalAlign || "center"};
  align-items: ${(props) => props.horizontalAlign || "center"};
`;
