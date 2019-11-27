import {Platform} from "react-native";

export default {
  ...Platform.select({
    ios: {
      fontFamily: "Roboto-Regular",
      fontFamilyLight: "Roboto-Light",
      fontFamilyBold: "Roboto-Bold",
      fontFamilyRegular: "Roboto-Regular",
      fontFamilyRegular: "Roboto-Regular",
    },
    android: {
      fontFamily: "Roboto-Regular",
      fontFamilyLight: "Roboto-Light",
      fontFamilyMedium: "Roboto-Bold",
      fontFamilyRegular: "Roboto-Regular",
      fontFamilyBlack: "Roboto-Black",
    },
  }),
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 19,
    xl: 28,
    xxl: 32,
  },
};
