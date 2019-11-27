import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors, metrics, typograph } from '../../styles';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 20}px  25px 20px;
  flex: 1;
`;

export const Image = styled.Image`
  margin: 0 auto;
`;

export const Subtitle = styled.Text`
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
  color: ${colors.grayMedium};
  text-align: center;
`;

export const Title = styled.Text`
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.xl};
  color: ${colors.dark};
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
  color: ${colors.dark};
  line-height: 25px;
  text-align: left;
  padding-top: 25px;
`;

export const DescriptionMore = styled.Text`
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
  color: ${colors.dark};
  text-align: center;
  padding-top: 25px;
`;

export const TitleMore = styled.TouchableOpacity`
  flex-direction: row;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 3px 3px #ececec;
`;

export const TitleMoreText = styled.Text`
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.lg};
  color: ${colors.dark};
  text-align: center;
  flex: 1;

`;

export const ButtonMore = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})``;

export const Text = styled.Text``;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${props => props.blue ? colors.blue : colors.white};
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 3px #ececec;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  color: ${props => props.blue ? colors.white : colors.blue};
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.lg};
`;

export const TitleCompany = styled.Text`
  font-family: ${typograph.fontFamilyBold};
  font-size: ${typograph.fontSize.lg};
  color: ${colors.dark};
  text-align: center;
  margin-top: 20px;
`;

export const FlexRow = styled.View`
  flex-direction: row;
`;

export const Applications = styled.View`
`;

export const Application = styled.TouchableOpacity`
  flex: 1;
  background: ${colors.white};
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 3px #ececec;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
