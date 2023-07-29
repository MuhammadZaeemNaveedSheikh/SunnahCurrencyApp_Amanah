import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { authTitle, bg } from "../../../imageSource";
import { AppButton, AppInput, BackHeader } from "../../../components";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme, DefaultTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <BackHeader screenName={"Edit Account Information"} />
        <View style={{ width: "100%" }}>
          <AppInput
            icon={"lock-outline"}
            lable={"Current Password"}
            keyboardType={"numeric"}
            placeholder={"**********"}
          />
          <AppInput
            icon={"lock-outline"}
            lable={"Password"}
            keyboardType={"numeric"}
            placeholder={"**********"}
          />
          <AppInput
            icon={"lock-outline"}
            lable={"Confirm Password"}
            keyboardType={"numeric"}
            placeholder={"**********"}
          />
        </View>
      </View>
      <View style={styles.btnDiv}>
        <AppButton
          onPress={() => navigation.navigate("")}
          lable={"Save"}
          width={"100%"}
          height={46}
          marginTop={20}
          fontWeight="600"
          fontSize={14}
        />
      </View>
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      flex: 1,
      paddingBottom: 20,
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 40,
    },
    btnDiv: {
      width: "100%",
      flex: 1,
      justifyContent: "flex-end",
    },
    image: {
      marginBottom: 20,
    },
    or: {
      marginBottom: 9,
      marginTop: 21,
      color: "#8897AE",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 24,
      // fontFamily: "Poppins",
    },
    info: {
      color: "#343434",
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 30,
      // fontFamily: "Poppins",
    },
    now: {
      color: "#343434",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 24,
      // fontFamily: "Poppins",
    },
    haveAccount: {
      color: "#343434",
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 24,
      // fontFamily: "Poppins",
    },
    rowDiv: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginTop: 40,
      justifyContent: "space-between",
    },
    inputContainer: {
      width: "100%",
    },
  });

export default Index;
