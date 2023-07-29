import React from "react";
import { StyleSheet, View } from "react-native";
import { AuthTitle, AuthTitle2, bg, bg2 } from "../../../imageSource";
import { AppButton, PdfCard } from "../../../components";
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
    <View style={styles.pdfContainer}>
      <ImageBackground
        source={themeColor ? bg2 : bg}
        resizeMode="cover"
        style={styles.container}
      >
        {themeColor ? (
          <AuthTitle2 style={styles.image} />
        ) : (
          <AuthTitle style={styles.image} />
        )}
        <View style={styles.rowDiv}>
          <Text style={styles.info}>User Documentaion</Text>
          <Text style={styles.step}>Step 3 of 3</Text>
        </View>
        <View style={{ width: "100%" }}>
          <PdfCard />
        </View>
        <View
          style={{
            width: "100%",
            paddingBottom: 20,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <AppButton
            onPress={() => navigation.navigate("login")}
            lable={"Continue"}
            width={"100%"}
            height={46}
            marginTop={26}
            
            fontWeight="600"
            fontSize={14}
          />
        </View>
      </ImageBackground>
    </View>
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
    pdfContainer: {
      // paddingBottom: 20,
      flex: 1,
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
      marginTop: 50,
      justifyContent: "space-between",
    },
    inputContainer: {
      width: "100%",
    },
  });
export default Index;
