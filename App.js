import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Headline } from "react-native-paper";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_900Black,
  Inter_100Thin,
  Inter_400Regular,
  Inter_500Medium,
  Inter_300Light,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Provider as PaperProvider } from "react-native-paper";

import theme from "./src/theme";

import FeedScreen from "./src/screens/FeedScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    InterThin: Inter_100Thin,
    InterLite: Inter_300Light,
    InterReg: Inter_400Regular,
    InterMid: Inter_500Medium,
    InterBlack: Inter_900Black,
    InterBold: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <PaperProvider theme={theme}>
      <View>
        <StatusBar style="auto" />
        <FeedScreen />
      </View>
    </PaperProvider>
  );
}
