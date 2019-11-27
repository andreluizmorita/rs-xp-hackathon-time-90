import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 15,
  baseRadius: 3,
  inputPadding: '12px 18px',
  buttonPadding: 15,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  padding: {
    default: 15,
    container: 20,
    horizontal: 20,
    vertical: 15,
    textTitle: 20,
    input: {
      vertical: 12,
      horizontal: 18
    },
    button: {
      vertical: 15,
      horizontal: 20,
    }
  },
  radius: {
    input: 5,
    button: 5,
  }
};
