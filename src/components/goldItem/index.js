import React from "react";
import { StyleSheet, Image, Text, FlatList } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme, DefaultTheme } from "react-native-paper";

import {
  GoldC,
  Silver1,
  Silver2,
  SilverC,
  Smallgold1,
  Smallgold2,
  ribon,
  smallgold1,
} from "../../imageSource";
import { Icon } from "react-native-elements";
import { usethemeContext } from "../../services/AppContext";

const index = ({ onPress, gold }) => {
  const data = [
    { img: <SilverC /> },
    { img: <Silver1 /> },
    { img: <Silver2 /> },
    { img: <SilverC /> },
  ];
  const data2 = [
    { img: <GoldC /> },
    { img: <Image source={smallgold1} /> },
    { img: <Smallgold2 /> },
    { img: <GoldC /> },
  ];
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <FlatList
        data={gold ? data2 : data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <>
              <TouchableOpacity onPress={onPress} style={[styles.history]}>
                <View style={styles.ribbonContainer}>
                  {index === 0 || index === 2 ? (
                    <>
                      <Image source={ribon} style={styles.ribbonImage} />
                      <Text style={styles.ribbonText}>NEW</Text>
                    </>
                  ) : null}
                </View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    height: 168,
                  }}
                >
                  <View style={styles.imgDiv}>{item.img}</View>
                  <View style={{ width: "100%", marginTop: 12 }}>
                    <Text style={styles.name}>2023 Memorial Gold</Text>
                  </View>
                  <View style={styles.itemsContainer}>
                    <View>
                      <Text style={styles.title}>220 Items Sold</Text>
                      <View style={styles.ratingContainer}>
                        <Text style={styles.title}>4.5</Text>
                        <Icon
                          style={{ marginLeft: 3 }}
                          name="star"
                          type="material"
                          color="#FFD700"
                          size={13}
                        />
                      </View>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text style={styles.price}>€224.40</Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.weight1}>+ 0.56% |</Text>
                        <Text style={styles.weight}>24h</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};
const createStyles = (prop) =>
  StyleSheet.create({
    ribbonImage: {
      position: "relative",
    },
    itemsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 4,
    },
    imgDiv: {
      alignItems: "center",
    },
    ribbonContainer: {
      width: "100%",
      height: 23,
      // zIndex: 1,
      // left: "-10%",
      justifyContent: "flex-start",
      // overflow: "visible",
    },
    ribbonText: {
      color: prop.themeColor ? "#0D0D0D" : "#FFFFFF",
      fontSize: 8,
      paddingTop: -1,
      paddingLeft: 12,
      position: "absolute",
      fontWeight: "bold",
    },
    history: {
      // position: "relative",
      borderWidth: 1,
      // zIndex: -1,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      borderColor: "#0000001F",
      marginLeft: 18,
      marginTop: 20,
      width: 156,
      borderRadius: 6,
      padding: 7,
    },
    name: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 12,
      lineHeight: 18,
      fontFamily: "Poppins-Medium",
    },
    title: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 10,
      lineHeight: 15,
    },
    price: {
      color: prop.themeColor ? prop.theme.colors.textWhite : "#000000",
      color: "",
      fontSize: 12,
      lineHeight: 18,
      fontFamily: "Poppins-Medium",
    },
    weight: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      color: "#8897AE",
      fontSize: 8,
      fontFamily: "Poppins-Medium",
    },
    weight1: {
      color: "#3BACA6",
      fontSize: 8,
      fontFamily: "Poppins-Medium",
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
export default index;
