import styled, { css } from 'styled-components/native';
import { colors, metrics, typograph } from '../../styles';

export const Container = styled.View`
  padding: 20px 25px;
`;

export const Content = styled.View`
  padding-top: 10px;
  flex: 1;
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

export const Options = styled.View`
  position: relative;
`;

export const Option = styled.View`
  width: 220px;
  position: absolute;
  top: ${props => props.item * 140}px;
`;

export const OptionButton = styled.TouchableOpacity``;

export const OptionImage = styled.Image`
  width: 220px;
  flex-direction: row;
`;

export const OptionText = styled.Text`
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.md};
  color: ${colors.dark};
  text-align: center;
`;