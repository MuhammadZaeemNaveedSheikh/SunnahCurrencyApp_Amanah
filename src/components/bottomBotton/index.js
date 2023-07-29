import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  Graph,
  Graph2,
  History,
  History2,
  Setting,
  Setting2,
  Wallet,
  Wallet2,
} from "../../imageSource";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const Index = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { themeColor } = usethemeContext();
  const prop = { theme, themeColor };
  const styles = createStyles(prop);

  return (
    <>
      <View style={styles.navCont}>
        <TouchableOpacity onPress={() => navigation.navigate("dashboard")}>
          {themeColor ? (
            <Graph2 sttyle={styles.image} />
          ) : (
            <Graph sttyle={styles.image} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          {themeColor ? (
            <Wallet2 sttyle={styles.image} />
          ) : (
            <Wallet sttyle={styles.image} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("orderHistory")}>
          {themeColor ? (
            <History2 sttyle={styles.image} />
          ) : (
            <History sttyle={styles.image} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("settings")}>
          {themeColor ? (
            <Setting2 sttyle={styles.image} />
          ) : (
            <Setting sttyle={styles.image} />
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    image: {
      marginTop: 25,
      marginBottom: 20,
    },
    navCont: {
      paddingHorizontal: 30,
      paddingVertical: 25,
      borderTopWidth: 0.5,

      borderTopColor: prop.themeColor ? "#FFFFFF1F" : "#0000001F",
      // backgroundColor: "white",
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
export default Index;
