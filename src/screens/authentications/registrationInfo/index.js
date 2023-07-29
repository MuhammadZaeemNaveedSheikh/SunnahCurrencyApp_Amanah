import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { AuthTitle, AuthTitle2, bg, bg2 } from "../../../imageSource";
import { AppButton, AppInput } from "../../../components";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../../services/AppContext";

const Index = () => {
  const theme = useTheme();
  const navigation = useNavigation();
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
      style={{
        flex: 1,
        backgroundColor: themeColor ? "#1E1E1E" : "transparent",
      }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {themeColor ? (
          <AuthTitle2 style={styles.image} />
        ) : (
          <AuthTitle style={styles.image} />
        )}
        <View style={styles.rowDiv}>
          <Text style={styles.info}>Basic Information</Text>
          <Text style={styles.step}>Step 1 of 3</Text>
        </View>
        <View style={styles.inputContainer}>
          <AppInput
            icon={""}
            lable={"First Name"}
            placeholder={"Enter First Name"}
          />
          <AppInput
            icon={""}
            lable={"Last Name"}
            placeholder={"Enter Last Name"}
          />
          <AppInput
            icon={"date-range"}
            lable={"Date of Birth"}
            placeholder={"2023/11/04"}
          />
          <AppInput
            icon={"mail-outline"}
            lable={"Email"}
            placeholder={"example@email.com"}
          />
          <AppInput
            icon={"PK"}
            lable={"Mobile Number"}
            placeholder={"xxxx - xxxxxxxx - x"}
          />
          <AppInput
            icon={"lock-outline"}
            lable={"Password"}
            placeholder={"Password"}
          />
          <AppInput
            icon={"lock-outline"}
            lable={"Confirm Password"}
            placeholder={"Confirm Password"}
          />
          <AppButton
            onPress={() => navigation.navigate("personalInfo")}
            lable={"Continue"}
            width={"100%"}
            color={"#7E7E7E"}
            backgroundColor={"#343434"}
            height={46}
            marginTop={20}
            fontWeight="600"
            fontSize={14}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 60,
      paddingBottom: 20,
    },
    image: {
      marginBottom: 20,
    },
    step: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "Poppins-Medium",
    },
    info: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-SemiBold",
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
