import { ContainerStyled } from "./styles";

const Container = ({ children, horizontal, vertical }) => {
  return (
    <ContainerStyled verticalAlign={vertical} horizontalAlign={horizontal}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
