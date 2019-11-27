import styled from 'styled-components/native';
import { colors, metrics, typograph } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  padding-top: 3px;
`;

export const Bar = styled.View`
  width: 70%;
  height: 6px; 
  margin: 5px 35px;
  position: relative;
`;

export const Background = styled.View`
  background: ${colors.grayLight};
  width: 100%;
  height: 6px; 
  border-radius: 3px;
`;

export const Percent = styled.View`
  background: ${colors.blue};
  height: 6px; 
  border-radius: 3px;
  width: ${props => props.width}%;
  position: absolute;
`;

export const Step = styled.Text`
  font-family: ${typograph.fontFamily};
  font-size: ${typograph.fontSize.md};
  color: ${colors.grayRegular};
`;

