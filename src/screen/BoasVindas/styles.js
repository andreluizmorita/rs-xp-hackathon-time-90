import styled from 'styled-components/native';
import { colors, metrics, typograph } from '../../styles';

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 25px 25px;
  height: 100%;
`;

export const Image = styled.Image`
  margin-top: 30%;
`;

export const Text = styled.Text`
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.lg};
  color: ${colors.dark};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.blue};
  width: 100%;
  padding: 15px 0;
  border-radius: 8px;
  box-shadow: 0px 3px 3px #ccc;
  margin-top: auto;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.lg};
  text-align: center;
`;