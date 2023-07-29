import React from "react";
import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import { GoldCard, GoldDescription } from "../../../components";
import { useState } from "react";
import { bg, bg2 } from "../../../imageSource";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../../services/AppContext";

const Index = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <ImageBackground
      source={themeColor ? bg2 : bg}
      resizeMode="cover"
      style={styles.bg}
    >
      <ScrollView
        onPress={() => setModalVisible(!modalVisible)}
        contentContainerStyle={styles.container}
      >
        <GoldCard />
        <GoldDescription />
      </ScrollView>
    </ImageBackground>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 40,
    },
    bg: {
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",

      flex: 1,
    },
    alignDiv: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    info: {
      color: "#343434",
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 30,
      fontFamily: "Poppins-SemiBold",
    },
    inputContainer: {
      width: "100%",
    },
  });
export default Index;
