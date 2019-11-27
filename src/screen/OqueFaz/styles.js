import styled, { css } from 'styled-components/native';
import { colors, metrics, typograph } from '../../styles';

export const Container = styled.View`
  padding: 20px 25px;
  flex: 1;
`;

export const Content = styled.View`
  padding-top: 10px;
  flex: 1;
`;

export const List = styled.View`
  padding-top: 15px;
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

export const Selected = styled.TouchableOpacity`
  width: 100%;
  background: ${colors.grayLight1};
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 3px #ececec;
  flex-direction: row;
  margin-top: 20px;
`;

export const SelectedText = styled.Text`
  color: ${colors.grayMedium};
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.lg};
  text-align: center;
  padding-left: 15px;
`;


export const ButtonText = styled.Text`
  color: ${props => props.blue ? colors.white: colors.dark};
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.lg};
  text-align: center;
  padding-left: ${props => props.center ? 0 : 15}px;
`;

export const ButtonIcon = styled.Text`
  margin-left: auto;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${props => props.blue ? colors.blue: colors.white};
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 3px #ececec;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};

  ${props => props.bottom ? 
    css` margin-bottom: auto `: 
    css` margin-top: 15px `};
`;