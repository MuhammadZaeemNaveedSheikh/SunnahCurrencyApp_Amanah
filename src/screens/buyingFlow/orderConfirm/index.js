import React from "react";
import { StyleSheet, View } from "react-native";
import { AppButton, BackHeader } from "../../../components";
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
      <View
        style={{
          paddingTop: 40,
          paddingHorizontal: 20,
          backgroundColor: themeColor
            ? theme.colors.bgColor
            : theme.colors.white,
        }}
      >
        <BackHeader screenName={"Order Confirmation"} />
      </View>
      <View style={styles.container}>
        <View style={{ width: "57%" }}>
          <Text style={styles.info}>
            Your Order is Placed And Your Order is XXXXX.
          </Text>
        </View>
        <View style={styles.rowDiv}>
          <AppButton
            onPress={() => navigation.navigate("orderHistory")}
            lable={"Buy More"}
            width={"100%"}
            height={46}
            marginTop={20}
            fontWeight="600"
            fontSize={14}
          />
        </View>
      </View>
    </>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      textAlign: "center",
      justifyContent: "flex-end",
      alignItems: "center",
    },

    info: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      color: "#8897AE",
      fontSize: 18,
      textAlign: "center",
      lineHeight: 27,
    },
    rowDiv: {
      marginTop: "80%",
      paddingBottom: 20,
      width: "100%",
      justifyContent: "flex-end",
    },
  });
export default Index;
