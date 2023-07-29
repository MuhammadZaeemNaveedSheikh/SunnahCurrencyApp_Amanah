import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Drop, Drop2 } from "../../imageSource";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const index = ({ onPress, name, lable, file, lableColor }) => {
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <>
      <View>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderWidth: 1,
            borderStyle: "dashed",
            alignItems: "center",
            borderColor: themeColor ? theme.colors.text : "#AFBACA",
            marginTop: 3,
            width: "100%",
            borderRadius: 6,
            justifyContent: "center",
            height: 120,
          }}
        >
          {themeColor ? <Drop2 /> : <Drop />}
          <Text style={styles.lable}>{lable}</Text>
          <Text style={styles.file}>{file}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    lable: {
      color: prop.themeColor ? prop.theme.colors.text : "#455468",
      marginTop: 10,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 30,
    },
    file: {
      color: prop.themeColor ? prop.theme.colors.text : "#5E718D",
      marginTop: 10,
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 24,
      // fontFamily: "Poppins",
    },
    title: {
      marginTop: 20,
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 24,
      // fontFamily: "Poppins",
    },
  });
export default index;
