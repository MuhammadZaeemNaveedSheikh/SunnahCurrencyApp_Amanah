import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { BackHeader, OrderItem } from "../../../components";
import { useState } from "react";
import {
  Block,
  Hgold,
  Ordergold,
  Vgold,
  hgold,
  vpgold,
} from "../../../imageSource";
import { Image } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../../services/AppContext";
const Index = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();
  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <ScrollView
      onPress={() => setModalVisible(!modalVisible)}
      contentContainerStyle={styles.container}
    >
      <BackHeader screenName={"Order ID: 324"} />
      <View style={{ flexDirection: "row" }}>
        <Ordergold style={styles.Image} />
        <Image source={Block} style={styles.Image} />
      </View>

      <View style={styles.navCont}>
        <View style={styles.nav} />
        <View style={styles.nav1} />
        <View style={styles.nav1} />
      </View>
      <View style={styles.centeredView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.rowDiv}>
              <Text style={[styles.upload]}>Gold Dinar</Text>
              <Text style={[styles.price]}> €224.40</Text>
            </View>
            <OrderItem order1 qt={"Quantity:"} number={"03"} />
            <OrderItem order2 qt={"Storage Location:"} number={"Dubai"} />
            <OrderItem
              order3
              qt={"Purchased On:"}
              number={"23rd April, 2023"}
            />
            <OrderItem
              order4
              qt={"Gold price at the time of Buy:"}
              number={"€220/g"}
            />
            <View style={styles.line} />
            <Text style={[styles.upload]}>Vault Record</Text>
            <View style={styles.record}>
              <View style={styles.alignDiv}>
                <Text style={[styles.item2]}>Added On </Text>
                <Text style={[styles.itemdate]}>23rd April, 2023 </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View style={styles.imgDiv}>
                  <Vgold />
                </View>
                <View style={styles.imgDiv}>
                  <Image source={hgold} />
                </View>
                <View style={styles.imgDiv}>
                  <Vgold />
                </View>
                <View style={styles.imgDiv}>
                  <Image source={hgold} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
      alignItems: "center",
      paddingTop: 40,
    },
    navCont: {
      marginTop: 46,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    nav: {
      marginHorizontal: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      backgroundColor: "#B3924F",
      width: 18,
      height: 7,
    },
    nav1: {
      marginHorizontal: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      backgroundColor: "#D1D1D6",
      width: 8,
      height: 8,
    },
    imgDiv: {
      marginTop: 13,
      width: 73,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      height: 64,
      marginRight: 11,
      backgroundColor: prop.themeColor ? "#1C1C1C" : "#F0F0F0",
      borderRadius: 6,
    },
    bg: {
      flex: 1,
    },
    alignDiv: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    item2: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 14,
      fontFamily: "Poppins-Medium",
      lineHeight: 21,
    },
    itemdate: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 14,
      fontFamily: "Poppins-Medium",
      lineHeight: 21,
    },
    centeredView: {
      width: "100%",
      alignItems: "center",
    },
    Image: {
      marginTop: 41,
    },
    alignDiv: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    record: {
      marginTop: 21,

      borderColor: prop.themeColor ? "#FFFFFF1F" : "#0000001F",
      borderWidth: 0.5,
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderRadius: 6,
    },
    rowDiv: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
    modalView: {
      width: "100%",
      height: 480,
      paddingTop: 26,
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      marginTop: 21,
      color: "#343434",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 14,
    },
    upload: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 18,
      fontFamily: "Poppins-Medium",
    },
    des: {
      color: "#8897AE",
      marginTop: 17,
      fontSize: 12,
      fontFamily: "Poppins-Regular",
      lineHeight: 18,
    },
    line: {
      borderColor: prop.themeColor ? "#FFFFFF1F" : "#0000001F",
      borderWidth: 0.2,
      marginTop: 19,
      marginBottom: 31,
    },
    lastLine: {
      marginTop: 27,
      width: 134,
      height: 5,
      borderRadius: 100,
    },

    item: {
      color: "#8897AE",
      fontSize: 16,
      // fontFamily: "Poppins-SemiBold",
      lineHeight: 24,
    },
    price: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-Medium",
    },
    ratio: {
      color: "#3BACA6",
      fontSize: 10,
      // lineHeight: 10,
      fontFamily: "Poppins-Medium",
    },
    ratioh: {
      color: "#8897AE",
      fontSize: 10,
      fontFamily: "Poppins-Medium",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
export default Index;
