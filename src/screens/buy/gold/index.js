import React from "react";
import { StyleSheet, View } from "react-native";
import { bg, bg2 } from "../../../imageSource";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import {
  BackHeader,
  BottomBotton,
  GoldItem,
  SearchBar,
} from "../../../components";
import { usethemeContext } from "../../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const Index = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <View style={styles.pdfContainer}>
      <ImageBackground
        source={themeColor ? bg2 : bg}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <BackHeader screenName={"Gold"} />
          <SearchBar />
          <GoldItem onPress={() => navigation.navigate("goldDetail2")} gold />
        </View>
        <BottomBotton />
      </ImageBackground>
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",
      paddingTop: 40,
      justifyContent: "space-between",
    },
    pdfContainer: {
      flex: 1,
      
    },
    sarachbar: {
      marginTop: 25,
    },
  });
export default Index;
