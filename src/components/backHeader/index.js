import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { usethemeContext } from "../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";
const Index = ({ screenName }) => {
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back"
          color={themeColor ? theme.colors.textWhite : theme.colors.black}
          size={24}
        />
      </TouchableOpacity>
      <Text style={styles.backName}> {screenName ? screenName : ""}</Text>
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    img: {
      width: 142,
      height: 22,
    },

    backName: {
      color: prop.themeColor
      ? prop.theme.colors.textWhite
      : prop.theme.colors.black,
      marginLeft: 16,
      fontSize: 18,
      textAlign: "center",
      lineHeight: 28,
      fontFamily: "Poppins-Medium",
    },
  });
export default Index;
