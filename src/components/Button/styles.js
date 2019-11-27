import styled from 'styled-components/native';
import { colors, metrics, typograph } from '../../styles';

export const Button = styled.TouchableOpacity`
  background: ${props => props.white ? colors.white : colors.blue};
  padding: 15px 0;
  border-radius: 8px;
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