import styled from "styled-components/native";
import colors from "../../theme/colors";

export const InputContainer = styled.TextInput`
  height: 45px;
  width: 100%;
  background-color: ${colors.tertiary};
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  // Caso não prefira criar um componente com espaçamento padrão como o exemplo <SpacingHeight /> use:
  //margin-vertical: 20px;
  padding-left: 5px;
`;
