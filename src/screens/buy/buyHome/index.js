import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  AuthTitle,
  AuthTitle2,
  Smallgold,
  Smallsilver,
  bg,
  bg2,
} from "../../../imageSource";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { BottomBotton } from "../../../components";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../../services/AppContext";

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
          {themeColor ? (
            <AuthTitle2 style={styles.image} />
          ) : (
            <AuthTitle style={styles.image} />
          )}
          {/* <Text style={styles.title}>Minted Store</Text> */}
          <View style={styles.rowDiv}>
            <TouchableOpacity
              style={[styles.goldCard, { marginTop: 46 }]}
              onPress={() => navigation.navigate("silver")}
            >
              <Smallsilver style={styles.image} />
              <Text style={styles.info}>SILVER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goldCard}
              onPress={() => navigation.navigate("gold")}
            >
              <Smallgold style={styles.image} />
              <Text style={styles.info}>GOLD</Text>
            </TouchableOpacity>
          </View>
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
      paddingTop: 60,
      justifyContent: "space-between",
    },
    pdfContainer: {
      flex: 1,
    },
    goldCard: {
      width: "100%",
      padding: 17,
      marginTop: 17,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: prop.themeColor
        ? prop.theme.colors.text
        : prop.theme.colors.black,
      borderRadius: 6,
    },
    title: {
      marginTop: 47,
      color: "#343434",
      fontSize: 18,
      // fontWeight: 700,
      lineHeight: 27,
      fontFamily: "Poppins-Medium",
    },
    info: {
      marginTop: 8,
      color: "#fff",
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-Medium",
    },
    rowDiv: {
      // flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
    inputContainer: {
      width: "100%",
    },
  });
export default Index;
