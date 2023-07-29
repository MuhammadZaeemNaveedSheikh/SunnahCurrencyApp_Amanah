import React from "react";
import { StyleSheet, ScrollView, View, ImageBackground } from "react-native";
import { AuthTitle, AuthTitle2, bg } from "../../../imageSource";
import { AppButton, AppInput } from "../../../components";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { usethemeContext } from "../../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const Index = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState();
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  const handleSwitchChange = () => {
    setThemeColor(!themeColor);
  };
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
      <ScrollView contentContainerStyle={styles.container}>
        {themeColor ? (
          <AuthTitle2 style={styles.image} />
        ) : (
          <AuthTitle style={styles.image} />
        )}
        <View style={styles.rowDiv}>
          <Text style={styles.info}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <AppInput
            icon={"mail-outline"}
            lable={"Email"}
            placeholder={"example@email.com"}
          />
          <AppInput
            lableColor={password && password.length <= 3 ? "red" : "black"}
            icon={"lock-outline"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            lable={"Password"}
            keyboardType={"numeric"}
            placeholder={"Password"}
            secureTextEntry={true}
          />
          <Text
            style={{
              color: password && password.length <= 3 ? "red" : "black",
            }}
          >
            {password && password.length <= 3 ? "Incorrect Password" : ""}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("forgotPassword")}
            >
              <Text
                style={[
                  styles.haveAccount,
                  {
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <AppButton
            onPress={() => navigation.navigate("home")}
            lable={"Login"}
            width={"100%"}
            height={46}
            marginTop={30}
            fontWeight="600"
            fontSize={14}
          />
        </View>
        <Text style={styles.or}>OR</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.haveAccount}>Don’t have any account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("registrationInfo")}
          >
            <Text style={styles.now}> Sign Up Now.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.switch}>
          <TouchableOpacity onPress={handleSwitchChange}>
            <View
              style={[
                styles.switchContainer,
                themeColor
                  ? styles.switchContainerActive
                  : styles.switchContainerInactive,
              ]}
            >
              {themeColor ? (
                <>
                  <Icon
                    name="moon-o"
                    style={[styles.icon, styles.iconActive]}
                    size={20}
                  />
                  <View
                    style={[styles.switchCircle, styles.switchCircleActive]}
                  />
                </>
              ) : (
                <>
                  <View
                    style={[styles.switchCircle, styles.switchCircleInactive]}
                  />
                  <Icon
                    name="sun-o"
                    style={[styles.icon, styles.iconInactive]}
                    size={20}
                  />
                </>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: prop.themeColor ? "#1E1E1E" : "transparent",
      paddingHorizontal: 20,
      alignItems: "center",
      paddingTop: 60,
    },
    switchContainer: {
      width: 60,
      height: 30,
      borderRadius: 15,
      borderColor: "#7E8285",
      borderWidth: 0.5,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    switchContainerActive: {
      backgroundColor: "#343434",
    },
    switchContainerInactive: {
      backgroundColor: "#FFFFFF",
    },
    switchCircle: {
      width: 26,
      height: 26,
      borderRadius: 13,
      position: "absolute",
      top: 2,
    },
    switchCircleActive: {
      right: 2,
      backgroundColor: "#B3924F",
    },
    switchCircleInactive: {
      left: 2,
      backgroundColor: "gray",
    },
    icon: {
      color: "white",
      position: "absolute",
    },
    iconActive: {
      right: 36,
      color: "#7E8285",
    },
    iconInactive: {
      left: 36,
      color: "gray",
    },
    switch: {
      marginTop: 110,
    },
    bg: {
      flex: 1,
    },
    image: {
      marginBottom: 20,
    },
    or: {
      marginBottom: 9,
      marginTop: 21,
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.text,
      fontSize: 14,
      lineHeight: 24,
      fontFamily: "Poppins-Regular",
    },
    info: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-SemiBold",
    },
    now: {
      color: prop.themeColor ? prop.theme.colors.gold : prop.theme.colors.black,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
    haveAccount: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      fontFamily: "Poppins-Regular",
      lineHeight: 24,
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
