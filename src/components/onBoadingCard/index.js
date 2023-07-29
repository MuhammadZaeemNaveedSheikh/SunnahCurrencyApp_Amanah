import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Arrow, M1, M2, M3 } from "../../imageSource";
import { Image } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

const Index = ({ m1, m2, m3, text, des, screen }) => {
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
      {m1 ? <Image source={M1} /> : null}
      {m2 ? <Image source={M2} /> : null}
      {m3 ? <M3 /> : null}
      <View style={styles.divWrap}>
        <Text
          style={[
            styles.title,
            { marginTop: screen === "registrationInfo" ? 10 : 52 },
          ]}
        >
          {text ? text : "Lorem ipsum dolor sit amet"}
        </Text>
      </View>
      <View style={styles.divWrap1}>
        <Text style={styles.des}>
          {des
            ? des
            : "Lorem ipsum dolor sit amet consectetur. Massa lobortis dignissim."}
        </Text>
      </View>
      <TouchableOpacity
        style={
          screen === "lorem1"
            ? styles.goBorder
            : screen === "lorem2"
            ? styles.goBorder2
            : styles.goBorder3
        }
      >
        <View style={styles.go} onPress={() => navigation.navigate(screen)}>
          <Arrow
            onPress={() => {
              if (screen === "registrationInfo") {
                navigation.navigate(screen);
              }
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      marginTop: 62,
      width: "100%",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
    },
    // navCont: {
    //   marginTop: 37,
    //   display: "flex",
    //   flexDirection: "row",
    //   alignItems: "center",
    // },
    title: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontFamily: "Poppins-Bold",
      fontSize: 27,
      textAlign: "center",
      lineHeight: 40,
    },
    des: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      marginTop: 21,
      fontSize: 15,
      fontFamily: "Poppins-Regular",
      textAlign: "center",
      lineHeight: 22,
    },
    divWrap: {
      width: "58%",
    },
    divWrap1: {
      width: "79%",
    },
    go: {
      width: 63,
      height: 63,
      borderRadius: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: prop.themeColor
        ? prop.theme.colors.gold
        : prop.theme.colors.black,
    },
    goBorder: {
      marginTop: 150,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      borderColor: prop.themeColor
        ? prop.theme.colors.gold
        : prop.theme.colors.black,
      borderTopEndRadius: 100,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderEndWidth: 1,
      width: 68,
      height: 68,
    },
    goBorder2: {
      marginTop: 150,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      borderColor: prop.themeColor
        ? prop.theme.colors.gold
        : prop.theme.colors.black,
      borderTopEndRadius: 100,
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 0,
      borderEndWidth: 1,
      width: 68,
      height: 68,
    },
    goBorder3: {
      marginTop: 150,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      borderColor: prop.themeColor
        ? prop.theme.colors.gold
        : prop.theme.colors.black,
      borderTopEndRadius: 100,
      borderWidth: 1,
      width: 68,
      height: 68,
    },
    nav: {
      marginHorizontal: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      backgroundColor: "#B3924F",
      width: 29,
      height: 12,
    },
    // nav1: {
    //   marginHorizontal: 2,
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   borderRadius: 100,
    //   backgroundColor: "#D1D1D6",
    //   width: 12,
    //   height: 12,
    // },
  });
export default Index;
