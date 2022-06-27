import styled from "styled-components/native";
import colors from "../../theme/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.tertiary};
  align-items: center;
  padding: 40px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 600;
  margin-vertical: 40px;
`;

export const ButtonPrimary = styled.TouchableOpacity.attrs((props) => ({
  activityOpacity: `${props.opacity || 0.5}`,
}))`
  background-color: ${(props) => props.backgroundColor || "#000"};
  padding: 10px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  color: ${colors.tertiary};
`;

export const WrapperTextInfo = styled.TouchableWithoutFeedback`
  padding: 10px;
`;

export const TextInfo = styled.Text`
  color: ${colors.secondary};
  font-size: 12px;
  padding: 10px;
`;

export const SpacingHeight = styled.View`
  width: 100%;
  height: ${(props) => props.height || "5px"};
`;
