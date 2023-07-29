import React, { useState } from "react";
import { AppButton, DropDown, LastLine } from "..";
import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const index = ({ onPress, modalVisible, setModalVisible }) => {
  const [count, setCount] = useState(1);
  const theme = useTheme();
  const { themeColor, setThemeColor } = usethemeContext();

  const prop = {
    theme,
    themeColor,
  };
  const styles = createStyles(prop);
  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ marginBottom: 24 }}>
                <LastLine />
              </View>
              <Text style={[styles.upload]}>Buy Gold Dinar</Text>
              <Text style={[styles.total, { marginTop: 10 }]}>Quantity</Text>
              <View style={styles.alignDiv}>
                <View style={styles.item}>
                  <Text
                    style={{
                      color: themeColor
                        ? theme.colors.text
                        : theme.colors.black2,
                    }}
                    onPress={() => setCount(count - 1)}
                  >
                    -
                  </Text>
                </View>
                <Text style={[styles.payment]}>{count}</Text>
                <View style={styles.item}>
                  <Text
                    style={{
                      color: themeColor
                        ? theme.colors.text
                        : theme.colors.black2,
                    }}
                    onPress={() => setCount(count + 1)}
                  >
                    +
                  </Text>
                </View>
              </View>
              <DropDown label={"Storage Location"} />
              <View style={styles.line} />
              <View style={styles.priceDiv}>
                <Text style={styles.total}>Total Price</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.totalp2}>€550</Text>
                  <Text style={styles.totalp}>€224.40</Text>
                </View>
              </View>
              <AppButton
                onPress={onPress}
                lable={"Continue"}
                width={"100%"}
                height={46}
                marginTop={27}
                fontWeight="600"
                fontSize={14}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    priceDiv: {
      marginTop: 18,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    alignDiv: {
      marginTop: 13,
      borderRadius: 6,
      borderWidth: 0.5,
      borderColor: "#AFBACA",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: 11,
      justifyContent: "space-between",
    },
    line: {
      marginTop: 18,
      borderTopColor: "#0000001F",
      borderTopWidth: 0.5,
    },
    item: {
      borderRadius: 6,
      borderWidth: 1,
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: prop.themeColor ? "#0D0D0D" : "#F9FAFB",
      borderColor: prop.themeColor ? prop.theme.colors.text : "#D7DFE9",
    },

    rowDiv: {
      alignItems: "center",
      flexDirection: "row",
    },
    modalView: {
      width: "100%",
      height: 429,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      borderTopEndRadius: 32,
      borderTopStartRadius: 32,
      paddingHorizontal: 20,
    },
    upload: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },

    totalp: {
      marginLeft: 7,
      color: prop.themeColor ? prop.theme.colors.textWhite : "#000000",
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-Medium",
    },
    totalp2: {
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 14,
      lineHeight: 21,
      marginTop: 7,
      fontFamily: "Poppins-Medium",
    },
    total: {
      color: prop.themeColor ? prop.theme.colors.text : "#3D4A5C",
      fontSize: 14,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
    icon: {
      color: "#343434",
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
    payment: {
      marginLeft: 10,
      color: "#2D3643",
      fontSize: 14,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
  });
export default index;
