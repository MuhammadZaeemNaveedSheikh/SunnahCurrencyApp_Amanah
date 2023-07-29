import React, { useState } from "react";
import { Modal } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { AppButton } from "..";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { usethemeContext } from "../../services/AppContext";
import { useTheme, DefaultTheme } from "react-native-paper";

const index = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();
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
              <View style={styles.rowDiv}>
                <Text style={[styles.upload]}>Order Confirmation </Text>
              </View>
              <Text style={[styles.item]}>
                your order is placed and your order is XXXXX.{" "}
              </Text>
              <AppButton
                onPress={() => navigation.navigate("goldDetailForm")}
                lable={"Continue"}
                width={"100%"}
                height={46}
                marginTop={50}
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
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
      alignItems: "center",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(167, 167, 167, 0.5)",
    },
    rowDiv: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
    inputContainer: {
      width: "100%",
    },
    centeredView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    modalView: {
      width: "100%",
      height: 218,
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      borderTopEndRadius: 32,
      borderTopStartRadius: 32,
      paddingHorizontal: 20,
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
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins-Medium",
    },
    item: {
      marginTop: 16,
      color: prop.themeColor ? prop.theme.colors.text : prop.theme.colors.gray,
      fontSize: 12,
      lineHeight: 18,
      fontFamily: "Poppins-Regular",
    },

    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
export default index;
