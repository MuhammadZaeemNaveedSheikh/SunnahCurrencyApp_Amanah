import React from "react";
import { AppButton, AppInput, LastLine } from "..";
import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";
import { StyleSheet } from "react-native";
import { usethemeContext } from "../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const index = ({ onPress, modalVisible, setModalVisible }) => {
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
              <Text style={[styles.upload]}>Payment Method</Text>

              <Text style={[styles.total, { marginTop: 10 }]}>Pay By Card</Text>
              <AppInput
                icon={""}
                lable={"Name on Card:"}
                placeholder={"Enter Name"}
              />
              <AppInput
                icon={""}
                lable={"Card Number"}
                placeholder={"Card number"}
              />
              <AppInput
                icon={"date-range"}
                lable={"Expiry Date"}
                placeholder={"MM/YY"}
              />
              <AppInput
                icon={"lock-outline"}
                lable={"CVV"}
                placeholder={"123"}
              />
              <AppButton
                onPress={onPress}
                lable={"Confirm"}
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
      backgroundColor: "#F9FAFB",
      borderColor: "#D7DFE9",
    },

    rowDiv: {
      alignItems: "center",
      flexDirection: "row",
    },
    modalView: {
      width: "100%",
      height: 609,
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
      color: "#000000",
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "Poppins-Medium",
    },
    totalp2: {
      color: "#8897AE",
      fontSize: 14,
      lineHeight: 21,
      marginTop: 7,
      fontFamily: "Poppins-Medium",
    },
    total: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black2,
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
