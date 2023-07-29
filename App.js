import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
import { useEffect, useState } from "react";
import { loadFonts } from "./src/config/fonts";
import { ContextWrapper } from "./src/services/AppContext";
import { PaperProvider } from "react-native-paper";
import { Theme } from "./src/theme";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncData = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAsyncData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <PaperProvider theme={Theme}>
        <ContextWrapper>
          {/* <StatusBar style="auto" /> */}
          <Navigator />
        </ContextWrapper>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
