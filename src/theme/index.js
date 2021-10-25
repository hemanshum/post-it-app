import { DefaultTheme, configureFonts } from "react-native-paper";
import { fontConfig } from "./fonts";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5A37D7",
    accent: "#DC7FE3",
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
