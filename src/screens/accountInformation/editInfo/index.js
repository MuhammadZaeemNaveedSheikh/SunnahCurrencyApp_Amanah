import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { edit } from "../../../imageSource";
import { AppButton, AppInput, BackHeader } from "../../../components";
import { useNavigation } from "@react-navigation/native";
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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <BackHeader screenName={"Edit Account Information"} />
        <AppInput
          edit={edit}
          Width="93%"
          icon={""}
          lable={"First Name"}
          placeholder={"Enter First Name"}
        />
        <AppInput
          edit={edit}
          Width="93%"
          icon={""}
          lable={"Last Name"}
          placeholder={"Enter Last Name"}
        />
        <AppInput
          edit={edit}
          icon={"date-range"}
          lable={"Date of Birth"}
          placeholder={"2023/11/04"}
        />
        <AppInput
          edit={edit}
          icon={"mail-outline"}
          lable={"Email"}
          placeholder={"example@email.com"}
        />
        <AppInput
          edit={edit}
          icon={"PK"}
          lable={"Mobile Number"}
          placeholder={"1223342543"}
        />
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
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 40,
      paddingBottom: 20,
    },
    btnDiv: {
      width: "100%",
      flex: 1,
      justifyContent: "flex-end",
    },
    image: {
      marginBottom: 20,
    },
    step: {
      color: "#343434",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 21,
      // fontFamily: "Poppins",
    },
    info: {
      color: "#343434",
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 30,
      // fontFamily: "Poppins",
    },

    inputContainer: {
      width: "100%",
    },
  });

export default Index;
