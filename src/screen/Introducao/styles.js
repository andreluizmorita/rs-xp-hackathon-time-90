import styled from 'styled-components/native';
import { colors, metrics, typograph } from '../../styles';

export const Text = styled.Text`
  color: ${colors.dark};
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.lg};
  text-align: center;
`;

export const Screen = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 25px;
`;

export const Button = styled.TouchableOpacity`
  background: ${props => props.white ? colors.white : colors.blue};
  padding: 15px 0;
  border-radius: 5px;
  margin: 10px 0px;
  align-items: center;
  box-shadow: 0px 3px 3px #ccc;
`;

export const ButtonText = styled.Text`
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.lg};
  color: ${props => props.white ? colors.blue : colors.white};
  text-align: center;
`;