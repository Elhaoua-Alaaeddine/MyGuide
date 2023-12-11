import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { ContextProvider } from "./config/Context";
import AppNavigation from "./navigation/appNavigation";

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, []);
  return (
    <ContextProvider>
      <PaperProvider>
        <StatusBar />
        <AppNavigation />
      </PaperProvider>
    </ContextProvider>
  );
}
