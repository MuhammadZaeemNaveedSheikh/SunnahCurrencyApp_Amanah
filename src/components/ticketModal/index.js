import React from "react";
import { AppButton, AppInput, DropDown, LastLine, TextArea } from "..";
import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme, DefaultTheme } from "react-native-paper";
import { usethemeContext } from "../../services/AppContext";
const index = ({ onPress, modalVisible, setModalVisible }) => {
  const data = [
    "Sales & Buying",
    "App Support",
    "Account Support",
    "Billing Support",
    "SGeneral",
  ];
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
              <View style={styles.rowDiv}>
                <Text style={[styles.upload]}>Create Support Ticket</Text>
              </View>
              <AppInput
                Width="93%"
                icon={""}
                lable={"Title"}
                placeholder={"Enter title"}
              />
              <DropDown data={data} label={"Categories"} />
              <TextArea
                options
                label="Question Text"
                placeholder="Enter Question Text"
                minHeight={100}
                maxHeight={200}
              />
              <AppButton
                onPress={onPress}
                lable={"Create Support Ticket"}
                width={"100%"}
                height={46}
                marginTop={42}
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
    rowDiv: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
    modalView: {
      backgroundColor: prop.themeColor
        ? prop.theme.colors.bgColor
        : prop.theme.colors.white,
      width: "100%",
      height: 566,
      borderTopEndRadius: 32,
      borderTopStartRadius: 32,
      paddingHorizontal: 20,
    },
    upload: {
      color: prop.themeColor
        ? prop.theme.colors.textWhite
        : prop.theme.colors.black,
      fontSize: 18,
      fontFamily: "Poppins-Medium",
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
      lineHeight: 24,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
export default index;
