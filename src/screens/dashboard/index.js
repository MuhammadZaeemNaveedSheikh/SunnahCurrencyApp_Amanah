import React from "react";
import { StyleSheet, View } from "react-native";
import { AuthTitle, AuthTitle2, Id } from "../../imageSource";
import { Text } from "react-native";
import { BottomBotton, Chart, Holding, PriceList } from "../../components";
import { ScrollView } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const Index = () => {
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <View style={styles.container}>
      <View
        style={[styles.rowDiv, { marginBottom: 10, paddingHorizontal: 20 }]}
      >
        {themeColor ? (
          <AuthTitle2 style={styles.image} />
        ) : (
          <AuthTitle style={styles.image} />
        )}
        <View style={{ flexDirection: "row" }}>
          <Id style={styles.image} />
          <Text style={styles.info}> A-000-1234 </Text>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Current Holdings</Text>
        <Holding />
        <View style={styles.line} />
        <View style={[styles.rowDiv, { marginTop: 46 }]}>
          <Text style={styles.Portfolio}>My Portfolio</Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.ratio}> + 0.56%</Text>
            <Text style={styles.month}>From Last Month</Text>
          </View>
        </View>
        <Chart />
        <Text style={styles.title}> IMC Price List </Text>
        <PriceList />
      </ScrollView>
      <View>
        <BottomBotton />
      </View>
    </View>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      justifyContent: "space-between",
    },
    image: {
      marginRight: 5,
    },
    goldCard: {
      width: "100%",
      padding: 17,
      marginTop: 17,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#343434",
      borderRadius: 6,
    },
    line: {
      borderColor: "#0000001F",
      borderTopWidth: 1,
    },
    title: {
      marginTop: 27,
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 18,
      lineHeight: 27,
      fontFamily: "Poppins-Medium",
    },
    Portfolio: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 16,
      lineHeight: 22,
      fontFamily: "Poppins-SemiBold",
    },
    info: {
      fontSize: 12,
      lineHeight: 18,
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.black,
      fontFamily: "Poppins-Regular",
    },
    ratio: {
      fontSize: 10,
      color: "#3BACA6",
      fontFamily: "Poppins-Medium",
    },
    month: {
      fontSize: 10,
      color: prop.themeColor ? prop.theme.colors.textWhite : "#3BACA6",
      fontFamily: "Poppins-Medium",
      color: "#BFBFBF",
    },
    rowDiv: {
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
  });
export default Index;
