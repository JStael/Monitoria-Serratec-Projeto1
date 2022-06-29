import { InputContainer } from "./styles";

const Input = ({ placeholder, value, setText }) => {
  return (
    <InputContainer
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setText(text)}
    />
  );
};

export default Input;
