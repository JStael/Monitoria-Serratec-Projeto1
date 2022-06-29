import { useState } from "react";
import {
  Logo,
  Title,
  ButtonPrimary,
  TextButton,
  TextInfo,
  SpacingHeight,
  WrapperTextInfo,
} from "./styles";
import Container from "../../components/Container";
import Input from "../../components/Input";
import logo from "../../../assets/logo.png";
import spacings from "../../theme/spacings";

const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <Container vertical={"flex-start"}>
      <Logo source={logo} />
      <Title>Login</Title>
      <Input
        placeholder={"Digite seu login"}
        value={user.username}
        setText={(text) => setUser({ ...user, username: text })}
      />
      <SpacingHeight height={spacings.extraLarge} />
      <Input
        placeholder={"Digite sua senha"}
        value={user.password}
        setText={(text) => setUser({ ...user, password: text })}
      />
      <WrapperTextInfo>
        <TextInfo>Esqueceu a senha? Cilque aqui!</TextInfo>
      </WrapperTextInfo>
      <ButtonPrimary onPress={() => navigation.navigate("Home")}>
        <TextButton>Cilque aqui!</TextButton>
      </ButtonPrimary>
      <WrapperTextInfo onPress={() => navigation.navigate("SignUp")}>
        <TextInfo>Não possui cadastro? Cadastre-se!</TextInfo>
      </WrapperTextInfo>
    </Container>
  );
};

export default Login;
