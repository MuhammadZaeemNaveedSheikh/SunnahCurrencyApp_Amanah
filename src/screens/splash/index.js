import React from "react";
import { StyleSheet } from "react-native";
import { Title, Title2, bg, bg2 } from "../../imageSource";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { useTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
import { View } from "react-native";
import { useEffect } from "react";

const Index = () => {
  const navigation = useNavigation();
  const { themeColor, setThemeColor } = usethemeContext();
  const theme = useTheme();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("languageSelector");
    }, 2000);
  }, []);
  return (
    <ImageBackground source={themeColor ? bg2 : bg} style={styles.container}>
      <View>{themeColor ? <Title2 /> : <Title />}</View>
    </ImageBackground>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Index;
