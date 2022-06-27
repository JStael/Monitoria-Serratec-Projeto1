import {
  Container,
  Logo,
  Title,
  ButtonPrimary,
  TextButton,
  TextInfo,
  SpacingHeight,
  WrapperTextInfo,
} from "./styles";
import logo from "../../../assets/logo.png";
import Input from "../../components/Input";
import spacings from "../../theme/spacings";

const Login = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Title>Login</Title>
      <Input placeholder={"Digite seu login"} />
      <SpacingHeight height={spacings.extraLarge} />
      <Input placeholder={"Digite sua senha"} />
      <WrapperTextInfo>
        <TextInfo>Esqueceu a senha? Cilque aqui!</TextInfo>
      </WrapperTextInfo>
      <ButtonPrimary>
        <TextButton>Cilque aqui!</TextButton>
      </ButtonPrimary>
      <WrapperTextInfo>
        <TextInfo>Não possui cadastro? Cadastre-se!</TextInfo>
      </WrapperTextInfo>
    </Container>
  );
};

export default Login;
