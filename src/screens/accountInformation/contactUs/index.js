import React from "react";
import { StyleSheet, View } from "react-native";
import { BackHeader } from "../../../components";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
    <>
      <View style={styles.container}>
        <View style={{ paddingTop: 40, paddingHorizontal: 20 }}>
          <BackHeader screenName={"Contact Us"} />
        </View>
        <View style={styles.rowDiv}>
          <Text style={styles.info}>Address</Text>
          <Text style={styles.step}>124C, DD Abu Dhabi</Text>
        </View>
        <View style={styles.rowDiv}>
          <Text style={styles.info}>Phone Number</Text>
          <Text style={styles.step}>+82 30823942</Text>
        </View>
        <View style={styles.rowDiv}>
          <Text style={styles.info}>Email Address</Text>
          <Text style={styles.step}>amanah@yourmail.com</Text>
        </View>
      </View>
    </>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      flex: 1,
    },
    step: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.gray,
      fontSize: 14,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
    info: {
      color: prop.themeColor
        ? prop.theme.colors.text
        : prop.theme.colors.black2,
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 500,
    },
    rowDiv: {
      paddingHorizontal: 20,
      width: "100%",
      marginTop: 20,
      justifyContent: "space-between",
    },
  });
export default Index;
