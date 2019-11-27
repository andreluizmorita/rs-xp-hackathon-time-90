import styled, { css } from 'styled-components/native';
import { colors, metrics, typograph } from '../../styles';

export const Container = styled.View`
  padding: 20px 25px;
`;

export const Content = styled.View`
  padding-top: 10px;
`;

export const Title = styled.Text`
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.lg};
  color: ${colors.dark};
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
  color: ${colors.grayRegular};
  text-align: center;
  padding-top: 25px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${colors.white};
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0px 3px 3px #ececec;
  flex-direction: row;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: ${colors.dark};
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.lg};
  text-align: center;
  padding-left: 15px;
`;

export const ButtonIcon = styled.Text`
  margin-left: auto;
  margin-top: 5px;
`;