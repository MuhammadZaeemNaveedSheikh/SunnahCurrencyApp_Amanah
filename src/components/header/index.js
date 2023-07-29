import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { OnboarTitle, OnboarTitle2 } from "../../imageSource";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";

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
      <Text style={styles.des}> </Text>
      <View>
        {themeColor ? (
          <OnboarTitle2 style={styles.img} />
        ) : (
          <OnboarTitle style={styles.img} />
        )}
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.des}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      paddingTop: 65,
      paddingHorizontal: 20,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    img: {
      width: 142,
      height: 22,
    },
    des: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 15,
      fontWeight: 400,
      textAlign: "center",
      lineHeight: 22,
    },
  });
export default Index;
