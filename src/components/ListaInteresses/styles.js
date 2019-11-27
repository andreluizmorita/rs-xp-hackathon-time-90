import styled, { css } from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import { colors, metrics, typograph } from '../../styles';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 40}px 25px ${getBottomSpace() + 20}px;
  background: ${colors.lightBlue};
`;

export const FlexRow = styled.View`
  flex-direction: row;
`;

export const CircleIcon = styled.TouchableOpacity`
  background: ${colors.white};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;

export const Title = styled.Text`
  color: ${colors.dark};
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.lg};
  text-align: center;
  flex: 1;
  margin-right: 50px;
  line-height: 25px;
`;

export const Description = styled.Text`
  margin-top: 20px;
  color: ${colors.white};
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
  text-align: center;
`;

export const ListItems = styled.ScrollView`
  background: ${colors.white};
  border-radius: 8px;
  margin: 20px 0 50px;
  padding: 10px 0;
`;

export const ListItem = styled.TouchableOpacity`
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
  padding: 15px 20px;
  flex-direction: row;
`;

export const ListText = styled.Text`
  color: ${props => props.selected ? colors.blue : colors.dark};
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
`;

export const ListSelected = styled.View`
  background: ${colors.grayLight};
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
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
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};

  ${props => props.bottom ? 
    css` margin-bottom: auto `: 
    css` margin-top: 15px `};
`;