import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Hgold, hgold } from "../../imageSource";
import { Image } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const Index = ({ onPress, name, price, wieght, date, id, quantity }) => {
  const theme = useTheme();
  const { themeColor } = usethemeContext();
  const prop = { theme, themeColor };
  const styles = createStyles(prop);
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.history}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.imgDiv}>
            <Hgold />
            <Image source={hgold} style={{ width: 27, height: 30 }} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.title}>{id}</Text>
            <Text style={styles.title}>{quantity}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.title}>{date}</Text>
          <Text style={[styles.price]}>{price}</Text>
          <Text style={styles.weight}>{wieght}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    lable: {
      color: "#343434",
      marginTop: 10,
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 30,
    },
    imgDiv: {
      width: 73,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      height: 64,
      backgroundColor: prop.themeColor ? "#515151" : "#F0F0F0",
      borderRadius: 6,
    },
    history: {
      borderWidth: 1,
      alignItems: "center",
      borderColor: prop.themeColor ? "#7E7E7E" : "#0000001F",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: "100%",
      borderRadius: 6,
      padding: 8,
    },
    name: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "Poppins-Medium",
    },
    title: {
      color: prop.themeColor ? "#7E7E7E" : "#8897AE",
      fontSize: 10,
      fontWeight: "500",
      lineHeight: 15,
    },
    price: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 18,
      fontWeight: "600",
      lineHeight: 24,
    },
    weight: {
      color: prop.themeColor ? "#7E7E7E" : "#8897AE",
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 18,
    },
  });

export default Index;
