import React from "react";
import { StyleSheet, View } from "react-native";
import { BackHeader } from "../../../components";
import { Text } from "react-native";
import { Dimg, Edit2, Editd2, Pdf, Pdf2 } from "../../../imageSource";
import { usethemeContext } from "../../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const Index = () => {
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <>
      <View style={styles.containerMain}>
        <BackHeader screenName={"Manage Files"} />
        <View style={styles.container}>
          <View style={styles.rowDiv}>
            <View style={styles.rowDiv2}>
              {themeColor ? <Pdf2 /> : <Pdf />}
              <Text style={styles.info}>KYC Documents .PDF</Text>
            </View>
            <View style={styles.rowDiv2}>
              {themeColor ? <Editd2 /> : <Edit2 />}
              <Dimg style={{ marginLeft: 15 }} />
            </View>
          </View>
          <View style={styles.rowDiv}>
            <View style={styles.rowDiv2}>
              {themeColor ? <Pdf2 /> : <Pdf />}
              <Text style={styles.info}>Address .PDF</Text>
            </View>
            <View style={styles.rowDiv2}>
              {themeColor ? <Editd2 /> : <Edit2 />}

              <Dimg style={{ marginLeft: 15 }} />
            </View>
          </View>
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
      alignItems: "center",
    },
    containerMain: {
      paddingTop: 40,
      flex: 1,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      paddingHorizontal: 20,
    },
    rowDiv2: {
      flexDirection: "row",
    },
    info: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
      fontSize: 14,
      marginLeft: 15,
      lineHeight: 24,
      fontWeight: 500,
    },
    rowDiv: {
      borderRadius: 8,
      backgroundColor: prop.themeColor ? "#1C1C1C" : "#F0F0F0",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 20,
      padding: 15,
    },
  });
export default Index;
